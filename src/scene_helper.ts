import { UI } from "./ui";
import * as three from "three";

export class CameraHelper {
	enabled = false;
	camera: three.PerspectiveCamera;
	helperCamera: three.PerspectiveCamera;
	helper: three.CameraHelper;

	private static instance: CameraHelper;
	private constructor(camera: three.PerspectiveCamera, scene: three.Scene, ui: UI) {
		this.camera = camera;

		this.helperCamera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
		this.helperCamera.position.addScalar(500);
		this.helperCamera.lookAt(0, 0, 0);
		this.helperCamera.updateMatrixWorld();

		this.helper = new three.CameraHelper(this.camera);
		this.helper.visible = this.enabled;

		scene.add(this.helper);
		scene.add(this.helperCamera);

		ui.pane.addInput(this, "enabled", { label: "Camera Helper" }).on("change", (ev) => {
			this.enabled = ev.value;
			this.helper.visible = ev.value;
		});
	}

	static getInstance(camera: three.PerspectiveCamera, scene: three.Scene, ui: UI) {
		if (CameraHelper.instance) return this.instance;

		this.instance = new CameraHelper(camera, scene, ui);
		return this.instance;
	}
}
