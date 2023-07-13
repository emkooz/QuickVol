import * as three from "three";
import { NRRDLoader } from "three/examples/jsm/loaders/NRRDLoader";
import { type Volume as volObj } from "three/examples/jsm/misc/Volume";
import { VolumeShader } from "./volume_shader";
import { type Scene } from "../scene";

export class Volume {
	obj!: volObj;
	texture!: three.Data3DTexture;
	geo!: three.BoxGeometry;
	mat!: three.ShaderMaterial;
	mesh!: three.Mesh;

	config = {
		threshold: 0.0,
		style: "mip",
		colormap: "viridis",
		cm_lower: 0,
		cm_upper: 1,
		step_size: 1.0,
		sample_modulo: 1.0,
		auto_perf: false,
		zmax: 1000,
		lower_mip_bound: 0.2,
	};

	colors = ["gray", "viridis", "red_alpha", "rainbow", "spectral", "inferno"];

	colormaps = this.colors.reduce(
		(acc, color) => {
			acc[color] = new three.TextureLoader().load(`./colormaps/${color}.png`);
			return acc;
		},
		{} as { [key: string]: three.Texture }
	);

	constructor(scene: Scene, url?: string) {
		if (url) this.loadNRRD(url, scene);

		document.addEventListener("drop", (ev) => {
			ev.preventDefault();
			ev.stopPropagation();
			scene.ui.dropzone.style.visibility = "hidden";

			if (ev.dataTransfer) {
				if (ev.dataTransfer.files.length > 1) {
					const error = document.getElementById("volumeError");
					error!.textContent = `Error loading file: only one file can be loaded at a time.`;
					return;
				}

				const reader = new FileReader();
				const filename = ev.dataTransfer.files[0].name;
				reader.addEventListener("load", (ev) => {
					this.loadNRRD(reader.result as string, scene, true, filename);
				});
				reader.readAsArrayBuffer(ev.dataTransfer.files[0]);
			} else {
				const error = document.getElementById("volumeError");
				error!.textContent = `Error: no dataTransfer object found!`;
				return;
			}
		});
	}

	loadNRRD(url: string, scene: Scene, local = false, filename = "") {
		if (local) {
			try {
				const volume = new NRRDLoader().parse(url);
				this.loadVolume(volume, scene);

				const name = document.getElementById("volumeName");
				name!.textContent = `${filename}`;
			} catch (err) {
				console.log(err);

				const error = document.getElementById("volumeError");
				error!.textContent = `Error in parsing NRRD file, check the console for more details.`;
			}
		} else {
			new NRRDLoader().load(
				url,
				(volume) => {
					this.loadVolume(volume, scene);

					// setup status info
					const name = document.getElementById("volumeName");
					name!.textContent = `${url.replace(/^.*[\\\/]/, "")}`;
				},
				(ev: ProgressEvent) => {
					console.log(`${url} loaded: ${ev.loaded} / ${ev.total}`);

					const progress = document.getElementById("volumeSize");
					progress!.textContent = `Loaded ${ev.loaded} / ${ev.total} bytes (${Math.round((ev.loaded / ev.total) * 100)}%)`;

					setTimeout(() => {
						progress!.textContent = "";
					}, 3000);
				},
				(err: ErrorEvent) => {
					console.log(`Error loading ${url}: ${err.message}`);

					const error = document.getElementById("volumeError");
					error!.textContent = `Error loading ${url}: ${err.message}`;
				}
			);
		}
	}

	loadVolume(volume: volObj, scene: Scene) {
		const shader = VolumeShader;

		this.obj = volume;
		this.config.zmax = volume.zLength;

		// setup 3d texture
		this.texture = new three.Data3DTexture(volume.data as any, volume.xLength, volume.yLength, volume.zLength);
		this.texture.format = three.RedFormat;
		this.texture.type = three.UnsignedByteType;
		this.texture.minFilter = this.texture.magFilter = three.LinearFilter;
		this.texture.unpackAlignment = 1;
		this.texture.needsUpdate = true;

		// setup shader uniforms
		const uniforms = three.UniformsUtils.clone(shader.uniforms);
		uniforms["u_size"].value.set(volume.xLength, volume.yLength, volume.zLength);
		uniforms["u_data"].value = this.texture;
		uniforms["u_clim"].value.set(0, 1);
		uniforms["u_cmdata"].value = this.colormaps["viridis"];
		uniforms["u_threshold"].value = this.config.threshold;
		uniforms["u_style"].value = 0;
		uniforms["u_step_size"].value = 1.0;
		uniforms["u_sample_modulo"].value = 1.0;
		uniforms["u_zmax"].value = volume.zLength;
		uniforms["u_lower_bound_mip"].value = 0.3;

		// setup shader material
		this.mat = new three.ShaderMaterial({
			uniforms: uniforms,
			vertexShader: shader.vertexShaderNew,
			fragmentShader: shader.fragmentShaderNew,
			side: three.DoubleSide,
			transparent: true,
			depthTest: true,
			depthWrite: true,
			alphaTest: 0.05,
		});

		// remove previous mesh from scene if we previously added one
		scene.scene.remove(this.mesh);

		// setup three.js mesh
		this.geo = new three.BoxGeometry(volume.xLength, volume.yLength, volume.zLength);
		this.mesh = new three.Mesh(this.geo, this.mat);
		uniforms["u_modelMat"].value = this.mesh.matrixWorld;
		uniforms["u_iModelMat"].value = this.mesh.matrixWorld.invert();
		uniforms["u_max_steps"].value = 2500;

		scene.scene.add(this.mesh);

		// setup UI
		this.setupUI(scene);

		// update camera for new volume size
		const cam = scene.camera;
		cam.mainCam.position.set(0, -volume.yLength * 2, 0);
		cam.mainCam.lookAt(0, 0, 0);
		cam.mainCam.updateProjectionMatrix();
		cam.controls.update();

		this.updateUniforms();

		scene.render();
	}

	setupUI(scene: Scene) {
		const folder = scene.ui.volFolder;
		folder.on("change", () => {
			this.updateUniforms();
			scene.render();
		});

		// clear the previous UI if it exists from the prev volume
		folder.children.forEach((child) => folder.remove(child));

		const visuals = folder.addFolder({ title: "Visuals" });
		const performance = folder.addFolder({ title: "Performance" });

		const threshold = visuals.addInput(this.config, "threshold", {
			min: 0,
			max: 1,
			step: 0.01,
			label: "Threshold",
			disabled: this.config.style !== "iso",
		});
		visuals.addInput(this.config, "colormap", {
			options: this.colors.reduce(
				(acc, color) => {
					acc[color] = color;
					return acc;
				},
				{} as { [key: string]: string }
			),
		});
		visuals.addInput(this.config, "cm_lower", { min: 0, max: 1, step: 0.01, label: "CM Lower bound" });
		visuals.addInput(this.config, "cm_upper", { min: 0, max: 1, step: 0.01, label: "CM Upper bound" });
		visuals.addInput(this.config, "zmax", { min: 0, max: this.obj.zLength, step: 1, label: "Max Z stack" });

		performance.addInput(this.config, "auto_perf", { label: "Dynamic performance" });
		performance.addInput(this.config, "step_size", { min: 1, max: 50, step: 0.2 });
		performance.addInput(this.config, "sample_modulo", { min: 1, max: 5, step: 0.2 });

		folder.addInput(this.config, "style", { options: { mip: "mip", iso: "iso" }, label: "Method" }).on("change", (ev) => {
			threshold.disabled = ev.value === "mip";
			if (ev.value === "mip") this.config.threshold = 0;
			scene.ui.pane.refresh();
		});
	}

	updateUniforms() {
		const uniforms = (this.mesh.material as three.ShaderMaterial).uniforms;

		uniforms.u_threshold.value = this.config.threshold;
		uniforms.u_style.value = this.config.style === "iso";
		uniforms.u_cmdata.value = this.colormaps[this.config.colormap];
		uniforms.u_clim.value.set(this.config.cm_lower, this.config.cm_upper);
		uniforms.u_step_size.value = this.config.step_size;
		uniforms.u_zmax.value = this.config.zmax;
		uniforms.u_sample_modulo.value = this.config.sample_modulo;
		uniforms.u_lower_bound_mip.value = this.config.lower_mip_bound;
	}
}
