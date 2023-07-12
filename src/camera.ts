import * as three from "three";
import { ArcballControls } from "three/examples/jsm/controls/ArcballControls";

export class mainCamera {
	camera: three.PerspectiveCamera;
	controls: ArcballControls;

	settings = {
		fov: 75,
		gizmosEnabled: true,
	};

	private static instance: mainCamera;

	private constructor(scene?: three.Scene) {
		/* These defaults are a good average for most use cases */
		this.camera = new three.PerspectiveCamera(this.settings.fov, window.innerWidth / window.innerHeight, 0.1, 10000);
		this.camera.position.z = 25;

		this.controls = new ArcballControls(this.camera, document.getElementById("content")!, scene);
		this.controls.enableGizmos = this.settings.gizmosEnabled;
	}

	get mainCam() {
		return this.camera;
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

	static getInstance(scene?: three.Scene) {
		if (mainCamera.instance) return this.instance;

		this.instance = new mainCamera(scene);
		return this.instance;
	}
}
