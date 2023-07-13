import * as three from "three";

import { mainCamera } from "./camera";
import { UI } from "./ui";

import { UnlitCubes } from "./unlit_cubes";

import { Volume } from "./volume/volume";

export class Scene {
	/* base scene elements */
	canvas: HTMLCanvasElement;
	renderer: three.WebGLRenderer;
	scene: three.Scene;

	camera: mainCamera;
	ui: UI;

	vol: Volume;

	private static instance: Scene;

	private constructor() {
		this.canvas = document.querySelector("#mainCanvas")!;
		this.renderer = new three.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true, premultipliedAlpha: false });
		this.renderer.setClearColor(new three.Color(0, 0, 0), 1.0);
		this.scene = new three.Scene();

		this.camera = mainCamera.getInstance(this.scene);
		this.camera.controls.addEventListener("change", () => this.render());

		this.ui = UI.getInstance();

		this.vol = new Volume(this, "./volumes/skull.nrrd");
	}

	render() {
		this.ui.fpsGraph.begin();

		// update camera if scene resized
		this.camera.resizeCam(this.canvas, this.renderer);

		this.renderer.render(this.scene, this.camera.mainCam);

		this.ui.fpsGraph.end();
	}

	static getInstance() {
		if (Scene.instance) return this.instance;

		this.instance = new Scene();
		return this.instance;
	}
}
