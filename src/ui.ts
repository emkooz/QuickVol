import { FolderApi, Pane } from "tweakpane";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";
import { mainCamera } from "./camera";

/* Small class that uses tweakpane for UI */

export class UI {
	pane = new Pane();
	fpsGraph: any;
	volFolder: FolderApi;

	dropzone = document.getElementById("dropzone")!;

	private static instance: UI;
	private constructor() {
		const cam = mainCamera.getInstance();
		this.pane.registerPlugin(EssentialsPlugin);

		this.fpsGraph = this.pane.addBlade({
			view: "fpsgraph",
			label: "FPS",
			lineCount: 2,
		});

		this.pane.addMonitor(cam.camera.position, "x", { interval: 20 });
		this.pane.addMonitor(cam.camera.position, "y", { interval: 20 });
		this.pane.addMonitor(cam.camera.position, "z", { interval: 20 });

		this.pane.addInput(cam.controls, "enableGizmos", { label: "Gizmos" }).on("change", (ev) => {
			cam.controls.setGizmosVisible(ev.value);
		});

		this.volFolder = this.pane.addFolder({ title: "Volume" });

		document.addEventListener("dragenter", (ev) => {
			ev.preventDefault();
			this.dropzone.style.visibility = "visible";
		});

		document.addEventListener("dragover", (ev) => {
			ev.preventDefault();
			this.dropzone.style.visibility = "visible";
		});

		document.addEventListener("dragleave", (ev) => {
			ev.preventDefault();
			this.dropzone.style.visibility = "hidden";
		});
	}

	static getInstance() {
		if (UI.instance) return this.instance;

		this.instance = new UI();
		return this.instance;
	}
}
