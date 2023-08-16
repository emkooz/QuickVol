import { FolderApi, Pane } from "tweakpane";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";
import { mainCamera } from "./camera";

export class UI {
	pane = new Pane();
	tabs = this.pane.addTab({
		pages: [{ title: "Volume" }, { title: "Debug" }],
	});
	fpsGraph: any;
	volFolder: FolderApi;

	dropzone = document.getElementById("dropzone")!;

	private static instance: UI;
	private constructor() {
		const cam = mainCamera.getInstance();
		this.pane.registerPlugin(EssentialsPlugin);

		this.fpsGraph = this.tabs.pages[1].addBlade({
			view: "fpsgraph",
			label: "FPS (while active)",
			lineCount: 2,
		});

		this.volFolder = this.tabs.pages[0].addFolder({ title: "Volume" });

		this.volFolder.addInput(cam.controls, "enableGizmos", { label: "Gizmos" }).on("change", (ev) => {
			cam.controls.setGizmosVisible(ev.value);
		});

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
