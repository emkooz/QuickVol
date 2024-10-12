import {
	HandLandmarker,
	FilesetResolver,
	DrawingUtils,
	type HandLandmarkerResult,
} from "@mediapipe/tasks-vision";

import { UI } from "./ui";

import { Scene } from "./scene";
import { ButtonApi } from "tweakpane";

export class HandsTracker {
	webcam = document.getElementById("webcam")! as HTMLVideoElement;
	canvas = document.getElementById("handCanvas")! as HTMLCanvasElement;
	ctx = this.canvas.getContext("2d")!;
	startButton: ButtonApi;
	toggleButton: ButtonApi;
	vrButton: ButtonApi;
	landmarker?: HandLandmarker;
	result?: HandLandmarkerResult;
	drawingUtil = new DrawingUtils(this.ctx);
	scene: Scene;

	private static instance: HandsTracker;
	private constructor(ui: UI, scene: Scene) {
		this.scene = scene;

		const handFolder = ui.tabs.pages[0].addFolder({ title: "Hand Tracking" });
		this.startButton = handFolder
			.addButton({ title: "Start tracking" })
			.on("click", () => this.setupTracking());
		this.toggleButton = handFolder
			.addButton({ title: "Pause tracking" })
			.on("click", () => {
				this.toggleButton.title =
					this.toggleButton.title === "Pause tracking"
						? "Resume tracking"
						: "Pause tracking";
			});
		this.toggleButton.disabled = true;

		this.vrButton = handFolder
			.addButton({ title: "Start VR view", disabled: !("xr" in navigator) })
			.on("click", () => {
				this.scene.renderer.setAnimationLoop(() => this.scene.render());
				// position volume in front of camera at 0,0,0

				const scale = 50 / this.scene.vol.obj.yLength;
				this.scene.vol.mesh.scale.setScalar(scale);
				this.scene.vol.mesh.position.setZ(
					-(this.scene.vol.obj.yLength * scale) - 50,
				);
				this.scene.vol.mesh.position.setY(
					-(this.scene.vol.obj.yLength * scale) / 4,
				);

				this.scene.vol.mesh.matrixWorldNeedsUpdate = true;

				(this.scene.vrButton as HTMLButtonElement).click();
			});

		// button to open link to example video
		handFolder.addButton({ title: "Example video" }).on("click", () => {
			window.open("https://streamable.com/oop3fr", "_blank");
		});
	}

	async setupTracking() {
		const statusBar = document.getElementById("statusBar")!;
		statusBar.textContent = "Loading webcam...\n";

		// activate webcam
		navigator.mediaDevices
			.getUserMedia({ video: { facingMode: "user" } })
			.then(async (stream) => {
				this.webcam.srcObject = stream;
				this.webcam.addEventListener("loadeddata", () => this.predict());
				statusBar.textContent += "Webcam loaded.\n";

				await this.setupMediapipe();
			})
			.catch((err) => {
				console.error(err);
				statusBar.textContent +=
					"Error loading webcam, check console for more details.\n";
			})
			.finally(() => {
				setTimeout(() => {
					statusBar.textContent = "";
				}, 5000);
			});
	}

	async setupMediapipe() {
		const statusBar = document.getElementById("statusBar")!;
		statusBar.textContent += "Loading hand tracker...\n";

		try {
			const fileset = await FilesetResolver.forVisionTasks("./mediapipe/wasm");

			this.landmarker = await HandLandmarker.createFromOptions(fileset, {
				baseOptions: {
					modelAssetPath: "./mediapipe/hand_landmarker.task",
					delegate: "GPU",
				},
				runningMode: "VIDEO",
				numHands: 2,
			});

			const { width, height } = this.webcam.getBoundingClientRect();
			this.canvas.style.width = `${width}px`;
			this.canvas.style.height = `${height}px`;
			this.canvas.width = width;
			this.canvas.height = height;

			statusBar.textContent += "Hand tracker loaded.\n";
			this.startButton.disabled = true;
			this.toggleButton.disabled = false;
		} catch (err) {
			console.error(err);
			statusBar.textContent +=
				"Error loading hand tracker, check console for more details.\n";
		}
	}

	async predict() {
		if (
			this.landmarker &&
			this.startButton.disabled &&
			this.toggleButton.title === "Pause tracking"
		) {
			const { width, height } = this.webcam.getBoundingClientRect();

			this.result = this.landmarker.detectForVideo(
				this.webcam,
				performance.now(),
			);

			this.ctx.save();
			this.ctx.clearRect(0, 0, width, height);

			if (this.result.landmarks.length > 0) {
				for (const landmark of this.result.landmarks) {
					this.drawingUtil.drawConnectors(
						landmark,
						HandLandmarker.HAND_CONNECTIONS,
						{ color: "#00FF00", lineWidth: 3 },
					);
					this.drawingUtil.drawLandmarks(landmark, {
						color: "#FF0000",
						lineWidth: 1,
					});
				}
			}

			this.ctx.restore();

			this.scene.render();
		}

		window.requestAnimationFrame(() => this.predict());
	}

	static getInstance(ui: UI, scene: Scene) {
		if (HandsTracker.instance) return this.instance;

		this.instance = new HandsTracker(ui, scene);
		return this.instance;
	}
}
