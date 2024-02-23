import * as three from "three";
import { NRRDLoader } from "three/examples/jsm/loaders/NRRDLoader";
import { type Volume as volObj } from "three/examples/jsm/misc/Volume";
import { VolumeShader } from "./volume_shader";
import { type Scene } from "../scene";
import { FolderApi } from "tweakpane";

export class Volume {
	obj!: volObj;
	texture!: three.Data3DTexture;
	geo!: three.BoxGeometry;
	mat!: three.ShaderMaterial;
	mesh!: three.Mesh;
	rotation = new three.Vector3().setScalar(Math.random() * (0.8 - 0.4) + 0.4);

	visualsFolder: FolderApi | null = null;
	performanceFolder: FolderApi | null = null;

	config = {
		threshold: 0.0,
		style: "mip",
		colormap: "inferno",
		cm_lower: 0,
		cm_upper: 1,
		step_size: 1.0,
		sample_modulo: 1.0,
		auto_perf: false,
		zmax: 1000,
		lower_mip_bound: 0.2,
		loadedExampleVolume: "skull.nrrd",
		refinement_steps: 5,
	};

	colors = ["viridis", "inferno", "parula", "hot", "cool", "rainbow", "spectral", "gray", "red_alpha", "discrete"];
	exampleVolumes = [
		"arlotta.nrrd",
		"RFP-128.nrrd",
		"skull.nrrd",
		"teapot.nrrd",
		"tooth.nrrd",
		"VisMale.nrrd",
		"bonsai.nrrd",
		"foot.nrrd",
		"frog.nrrd",
		"hydrogen_atom.nrrd",
	];

	colormaps = this.colors.reduce(
		(acc, color) => {
			acc[color] = new three.TextureLoader().load(`./colormaps/${color}.png`);
			return acc;
		},
		{} as { [key: string]: three.Texture }
	);

	constructor(scene: Scene, url?: string) {
		if (url) this.loadNRRD(url, scene);

		scene.ui.volFolder
			.addInput(this.config, "loadedExampleVolume", {
				options: this.exampleVolumes.reduce(
					(acc, vol) => {
						acc[vol] = vol;
						return acc;
					},
					{} as { [key: string]: string }
				),
				label: "Load examples",
			})
			.on("change", (ev) => {
				this.loadNRRD(`./volumes/${ev.value}`, scene);
			});

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
					// setup status info
					const name = document.getElementById("volumeName");
					name!.textContent = `${url.replace(/^.*[\\\/]/, "")}`;

					this.loadVolume(volume, scene, name!.textContent);
				},
				(ev: ProgressEvent) => {
					console.log(`${url} loaded: ${ev.loaded} / ${ev.total}`);

					const progress = document.getElementById("volumeSize");
					progress!.textContent = `Loaded ${ev.loaded} / ${ev.total} bytes (${Math.round((ev.loaded / ev.total) * 100)}%)`;

					setTimeout(() => {
						progress!.textContent = "";
					}, 3000);
				},
				(err) => {
					console.log(`Error loading ${url}: ${(err as ErrorEvent).message}`);

					const error = document.getElementById("volumeError");
					error!.textContent = `Error loading ${url}: ${(err as ErrorEvent).message}`;
				}
			);
		}
	}

	loadVolume(volume: volObj, scene: Scene, name = "") {
		const shader = VolumeShader;

		this.obj = volume;
		this.config.zmax = volume.zLength;

		// setup 3d texture
		this.texture = new three.Data3DTexture(volume.data as any, volume.xLength, volume.yLength, volume.zLength);
		this.texture.format = three.RedFormat;
		this.texture.type = name === "arlotta.nrrd" ? three.FloatType : three.UnsignedByteType;
		// this.texture.type = three.FloatType;
		this.texture.minFilter = this.texture.magFilter = three.LinearFilter;
		this.texture.unpackAlignment = 1;
		this.texture.needsUpdate = true;

		// setup shader uniforms
		const uniforms = three.UniformsUtils.clone(shader.uniforms);
		uniforms["u_size"].value.set(volume.xLength, volume.yLength, volume.zLength);
		uniforms["u_data"].value = this.texture;
		uniforms["u_clim"].value.set(0, 1);
		uniforms["u_cmdata"].value = this.colormaps[this.config.colormap];
		uniforms["u_threshold"].value = this.config.threshold;
		uniforms["u_style"].value = 0;
		uniforms["u_step_size"].value = 1.0;
		uniforms["u_sample_modulo"].value = 1.0;
		uniforms["u_zmax"].value = volume.zLength;
		uniforms["u_lower_bound_mip"].value = 0.3;
		uniforms["u_refinement_steps"].value = 5;

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

		this.mesh.rotation.set(Math.PI / 4, Math.PI, Math.PI / 4);
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

		const loadingLogo = document.getElementById("loadingLogo")!;
		loadingLogo.style.display = "none";
	}

	setupUI(scene: Scene) {
		const folder = scene.ui.volFolder;
		folder.on("change", () => {
			this.updateUniforms();
			scene.render();
		});

		// clear the previous UI if it exists from the prev volume
		if (this.visualsFolder && this.performanceFolder) {
			folder.remove(this.visualsFolder);
			folder.remove(this.performanceFolder);
		}

		this.visualsFolder = folder.addFolder({ title: "Visuals" });
		this.performanceFolder = folder.addFolder({ title: "Performance" });

		this.visualsFolder.addInput(this.config, "style", { options: { mip: "mip", iso: "iso" }, label: "Method" }).on("change", (ev) => {
			threshold.disabled = ev.value === "mip";
			if (ev.value === "mip") this.config.threshold = 0;
			scene.ui.pane.refresh();
		});

		const threshold = this.visualsFolder.addInput(this.config, "threshold", {
			min: 0,
			max: 1,
			step: 0.01,
			label: "Threshold",
			disabled: this.config.style !== "iso",
		});
		this.visualsFolder.addInput(this.config, "colormap", {
			options: this.colors.reduce(
				(acc, color) => {
					acc[color] = color;
					return acc;
				},
				{} as { [key: string]: string }
			),
		});
		this.visualsFolder.addInput(this.config, "cm_lower", { min: 0, max: 1, step: 0.01, label: "CM Lower bound" });
		this.visualsFolder.addInput(this.config, "cm_upper", { min: 0, max: 1, step: 0.01, label: "CM Upper bound" });
		this.visualsFolder.addInput(this.config, "zmax", { min: 0, max: this.obj.zLength, step: 1, label: "Max Z stack" });
		this.visualsFolder
			.addInput(this.texture, "type", {
				options: {
					UnsignedByteType: three.UnsignedByteType,
					FloatType: three.FloatType,
				},
				label: "Texture type",
			})
			.on("change", (ev) => {
				this.texture.type = ev.value;
				this.texture.needsUpdate = true;
			});

		// performance.addInput(this.config, "auto_perf", { label: "Dynamic performance" });
		this.performanceFolder.addInput(this.config, "step_size", { min: 1, max: 50, step: 0.2 });
		this.performanceFolder.addInput(this.config, "sample_modulo", { min: 1, max: 5, step: 0.2 });
		this.performanceFolder.addInput(this.config, "refinement_steps", { min: 1, max: 10, step: 1 });
	}

	// update rotation when in VR mode
	update(clock: three.Clock, delta: number, active: boolean) {
		if (active) {
			this.mesh.rotateX(Math.cos(clock.elapsedTime) * this.rotation.x * delta);
			this.mesh.rotateY(Math.sin(clock.elapsedTime) * this.rotation.y * delta);
			this.mesh.rotateZ((Math.sin(clock.elapsedTime) + Math.cos(clock.elapsedTime)) * this.rotation.z * delta);
		}
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
		uniforms.u_refinement_steps.value = this.config.refinement_steps;
	}
}
