import * as three from "three";
import { ArcballControls } from "three/examples/jsm/controls/ArcballControls";

export class mainCamera {
	rig = new three.Group();
	camera: three.PerspectiveCamera;
	xrCamera!: three.ArrayCamera;
	controls: ArcballControls;
	renderer!: three.WebGLRenderer;

	settings = {
		fov: 75,
		gizmosEnabled: true,
	};

	private static instance: mainCamera;

	private constructor(scene?: three.Scene, renderer?: three.WebGLRenderer) {
		/* These defaults are a good average for most use cases */
		this.camera = new three.PerspectiveCamera(this.settings.fov, window.innerWidth / window.innerHeight, 0.1, 10000);
		this.camera.position.y = 25;
		// this.rig.add(this.camera);

		if (renderer) {
			this.renderer = renderer;

			renderer.xr.addEventListener("sessionstart", (ev) => {
				this.controls.setGizmosVisible(false);
			});

			this.xrCamera = renderer.xr.getCamera();
		}

		/// @ts-ignore
		this.controls = new ArcballControls(this.camera, document.getElementById("mainCanvas")!, scene);
		this.controls.enableGizmos = this.settings.gizmosEnabled;

		// if (scene) scene.add(this.rig);
	}

	get mainCam() {
		return this.renderer.xr.getSession() ? this.xrCamera.cameras[0] : this.camera;
	}

	resetCamera() {
		this.controls.reset();
	}

	// called if the window is resized
	resizeCam(canvas: HTMLCanvasElement, renderer: three.WebGLRenderer) {
		if (this.checkResize(canvas, renderer)) {
			const resizedCanvas = renderer.domElement;
			this.camera.aspect = resizedCanvas.clientWidth / resizedCanvas.clientHeight;
			this.camera.updateProjectionMatrix();
		}
	}

	private checkResize(canvas: HTMLCanvasElement, renderer: three.WebGLRenderer) {
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;

		if (needResize) renderer.setSize(width, height, false);

		return needResize;
	}

	static getInstance(scene?: three.Scene, renderer?: three.WebGLRenderer) {
		if (mainCamera.instance) return this.instance;

		this.instance = new mainCamera(scene, renderer);
		return this.instance;
	}
}
