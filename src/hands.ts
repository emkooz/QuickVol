import { HandLandmarker, FilesetResolver, DrawingUtils, type HandLandmarkerResult } from "@mediapipe/tasks-vision";

import { UI } from "./ui";

export class Hands {
	webcam = document.getElementById("webcam")! as HTMLVideoElement;
	canvas = document.getElementById("handCanvas")! as HTMLCanvasElement;
	ctx = this.canvas.getContext("2d")!;
	landmarker?: HandLandmarker;
	result?: HandLandmarkerResult;
	drawingUtil = new DrawingUtils(this.ctx);

	private static instance: Hands;
	private constructor(ui: UI) {
		this.setupUI(ui);
	}

	setupUI(ui: UI) {
		const handFolder = ui.pane.addFolder({ title: "Hand Tracking" });
		handFolder.addButton({ title: "Start tracking" }).on("click", () => this.setupTracking());
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
				statusBar.textContent += "Error loading webcam, check console for more details.\n";
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
		} catch (err) {
			console.error(err);
			statusBar.textContent += "Error loading hand tracker, check console for more details.\n";
		}
	}

	async predict() {
		if (this.landmarker) {
			const { width, height } = this.webcam.getBoundingClientRect();

			this.result = this.landmarker.detectForVideo(this.webcam, performance.now());

			this.ctx.save();
			this.ctx.clearRect(0, 0, width, height);

			if (this.result.landmarks.length > 0) {
				for (const landmark of this.result.landmarks) {
					this.drawingUtil.drawConnectors(landmark, HandLandmarker.HAND_CONNECTIONS, { color: "#00FF00", lineWidth: 5 });
					this.drawingUtil.drawLandmarks(landmark, { color: "#FF0000", lineWidth: 2 });
				}
			}

			this.ctx.restore();
		}

		window.requestAnimationFrame(() => this.predict());
	}

	static getInstance(ui: UI) {
		if (Hands.instance) return this.instance;

		this.instance = new Hands(ui);
		return this.instance;
	}
}
