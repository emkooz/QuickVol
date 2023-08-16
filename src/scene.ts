import * as three from "three";

import { mainCamera } from "./camera";
import { UI } from "./ui";
import { Volume } from "./volume/volume";
import { HandsTracker } from "./hands_tracking";
import { Hands } from "./hands";
import { CameraHelper } from "./scene_helper";

export class Scene {
	/* base scene elements */
	canvas: HTMLCanvasElement;
	renderer: three.WebGLRenderer;
	scene: three.Scene;

	camera: mainCamera;
	cameraHelper: CameraHelper;
	ui: UI;

	vol: Volume;
	handsTracker: HandsTracker;
	hands: Hands;

	private static instance: Scene;

	private constructor() {
		this.canvas = document.querySelector("#mainCanvas")!;
		this.renderer = new three.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true, premultipliedAlpha: false });
		this.renderer.setClearColor(new three.Color(0, 0, 0), 1.0);
		this.renderer.autoClear = false;
		this.scene = new three.Scene();

		this.camera = mainCamera.getInstance(this.scene);
		this.camera.controls.addEventListener("change", () => this.render());

		this.ui = UI.getInstance();

		this.vol = new Volume(this, "./volumes/skull.nrrd");
		this.ui.volFolder.addButton({ title: "Screenshot" }).on("click", () => this.screenshot());

		this.handsTracker = HandsTracker.getInstance(this.ui, this);
		this.hands = Hands.getInstance(this.handsTracker, this.camera);

		this.cameraHelper = CameraHelper.getInstance(this.camera.mainCam, this.scene, this.ui);
	}

	render() {
		this.ui.fpsGraph.begin();

		// update camera if scene resized
		this.camera.resizeCam(this.canvas, this.renderer);

		this.hands.update();

		this.renderer.clear();
		this.renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);

		if (this.cameraHelper.enabled) this.cameraHelper.helper.visible = false;

		this.renderer.render(this.scene, this.camera.mainCam);

		if (this.cameraHelper.enabled) {
			this.cameraHelper.helper.visible = true;
			this.renderer.setViewport(window.innerWidth - window.innerWidth / 3, 0, window.innerWidth / 3, window.innerHeight / 3);
			this.renderer.render(this.scene, this.cameraHelper.helperCamera);
		}

		this.ui.fpsGraph.end();
	}

	screenshot() {
		this.renderer.setClearColor(new three.Color(0, 0, 0), 0.0);

		this.cameraHelper.helper.visible = false;
		const gizmosEnabled = this.camera.controls.enableGizmos;
		this.camera.controls.setGizmosVisible(false);

		this.render();

		this.canvas.toBlob((blob) => {
			if (blob) {
				const a = document.createElement("a");
				document.body.appendChild(a);
				a.style.display = "none";
				a.href = URL.createObjectURL(blob);
				a.download = `QuickVol-${Date.now()}.png`;
				a.click();
				URL.revokeObjectURL(a.href);
				document.body.removeChild(a);
			}
		});

		this.cameraHelper.helper.visible = this.cameraHelper.enabled;
		this.camera.controls.setGizmosVisible(gizmosEnabled);

		this.renderer.setClearColor(new three.Color(0, 0, 0), 1.0);
	}

	static getInstance() {
		if (Scene.instance) return this.instance;

		this.instance = new Scene();
		return this.instance;
	}
}
