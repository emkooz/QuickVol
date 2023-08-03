import { HandLandmarkerResult } from "@mediapipe/tasks-vision";
import { HandsTracker } from "./hands_tracking";
import * as three from "three";
import { mainCamera } from "./camera";

export class Hands {
	tracker: HandsTracker;
	camera: mainCamera;

	basePointerEvent = {
		isPrimary: true,
		pointerType: "mouse",
		button: 0,
		ctrlKey: false,
		metaKey: false,
		shiftKey: false,
	};

	connections = [
		[4, 3],
		[3, 2],
		[2, 1],
		[1, 0],
		/*[0, 5]*/ [2, 5],
		[5, 6],
		[6, 7],
		[7, 8],
		[5, 9],
		[9, 10],
		[10, 11],
		[11, 12],
		[9, 13],
		[13, 14],
		[14, 15],
		[15, 16],
		[13, 17],
		[17, 18],
		[18, 19],
		[19, 20],
		[17, 0],
	];

	connectionPalm = [
		[2, 5, 1],
		[1, 5, 0],
		[0, 5, 9],
		[0, 9, 13],
		[0, 13, 17],
	];

	light = new three.PointLight(0xffffff, 1, 0);
	geo = new three.SphereGeometry(0.66, 32, 32);
	mat = new three.MeshStandardMaterial({ color: new three.Color("orange"), side: three.DoubleSide });
	matSelected = new three.MeshStandardMaterial({ color: new three.Color("green"), side: three.DoubleSide });

	hands = new three.Group();
	leftHand = new three.Group();
	rightHand = new three.Group();

	leftPoints = new three.Group();
	rightPoints = new three.Group();

	lineArray: Float32Array;
	lineMat = new three.LineBasicMaterial({ color: 0xff0000 });
	leftLine: three.LineSegments;
	rightLine: three.LineSegments;

	palmArray: Float32Array;
	leftPalm: three.Mesh;
	rightPalm: three.Mesh;

	state = {
		right: {
			pinching: false,
			index: {
				x: -1,
				y: -1,
			},
		},
		left: {
			pinching: false,
		},
	};

	private static instance: Hands;
	private constructor(tracker: HandsTracker, camera: mainCamera) {
		this.tracker = tracker;
		this.camera = camera;

		// array size is (num of [a, b]) * (size of [a, b]) * (x, y z) * (2 hands)
		this.lineArray = new Float32Array(new Array(this.connections.length * 2 * 3 * 2));
		const leftLineGeo = new three.BufferGeometry(),
			rightLineGeo = new three.BufferGeometry();
		leftLineGeo.setAttribute("position", new three.BufferAttribute(this.lineArray, 3));
		rightLineGeo.setAttribute("position", new three.BufferAttribute(this.lineArray, 3));

		this.leftLine = new three.LineSegments(leftLineGeo, this.lineMat);
		this.rightLine = new three.LineSegments(rightLineGeo, this.lineMat);

		this.leftHand.add(this.leftLine);
		this.rightHand.add(this.rightLine);

		this.palmArray = new Float32Array(new Array(this.connectionPalm.length * 3 * 3 * 2));
		const leftPalmGeo = new three.BufferGeometry(),
			rightPalmGeo = new three.BufferGeometry();
		leftPalmGeo.setAttribute("position", new three.BufferAttribute(this.palmArray, 3));
		rightPalmGeo.setAttribute("position", new three.BufferAttribute(this.palmArray, 3));

		this.leftPalm = new three.Mesh(leftPalmGeo, this.mat);
		this.rightPalm = new three.Mesh(rightPalmGeo, this.mat);

		this.leftHand.add(this.leftPalm);
		this.rightHand.add(this.rightPalm);

		for (let i = 0; i < 21; i++) {
			this.leftPoints.add(new three.Mesh(this.geo, this.mat));
			this.rightPoints.add(new three.Mesh(this.geo, this.mat));
		}

		this.leftHand.add(this.leftPoints);
		this.rightHand.add(this.rightPoints);

		this.hands.add(this.leftHand);
		this.hands.add(this.rightHand);

		this.camera.camera.add(this.light);
		this.camera.camera.add(this.hands);
		this.hands.position.set(0, 0, -33);
		this.hands.visible = false;
	}

	update() {
		if (!this.tracker.result || !this.tracker.result.handednesses[0]) {
			// stop pinching if hand is not detected
			if (this.state.right.pinching) {
				const upEvent = new PointerEvent("pointercancel", {
					clientX: this.state.right.index.x,
					clientY: this.state.right.index.y,
					...this.basePointerEvent,
				});

				document.getElementById("mainCanvas")!.dispatchEvent(upEvent);

				this.state.right.pinching = false;
				this.camera.controls.rotateSpeed = 1;
			}
			this.hands.visible = false;
			return;
		}
		if (!this.hands.visible) this.hands.visible = true;

		const res = this.tracker.result;
		this.updatePositions(res);

		const leftPoints = this.leftPoints.children as three.Mesh[];
		const rightPoints = this.rightPoints.children as three.Mesh[];

		const rightPinching = rightPoints[4].position.distanceTo(rightPoints[8].position) < 5;
		const leftPinching = leftPoints[4].position.distanceTo(leftPoints[8].position) < 5;

		if (rightPinching && !this.state.right.pinching) {
			this.setRightPinching(true, rightPoints);
		} else if (!rightPinching && this.state.right.pinching) {
			this.setRightPinching(false, rightPoints);
		} else if (rightPinching && this.state.right.pinching) {
			// still pinching, send move event
			const { x, y } = this.#objectToScreenSpace(rightPoints[8]);

			if (Math.round(x) != this.state.right.index.x || Math.round(y) != this.state.right.index.y) {
				const moveEvent = new PointerEvent("pointermove", {
					clientX: x,
					clientY: y,
					...this.basePointerEvent,
				});

				this.state.right.index.x = Math.round(x);
				this.state.right.index.y = Math.round(y);

				window.dispatchEvent(moveEvent);
			}
		}

		this.state.right.pinching = rightPinching;
		this.state.left.pinching = leftPinching;
	}

	setRightPinching(pinching: boolean, rightPoints: three.Mesh[]) {
		const { x, y } = this.#objectToScreenSpace(rightPoints[8]);

		const event = new PointerEvent(pinching ? "pointerdown" : "pointercancel", {
			clientX: x,
			clientY: y,
			...this.basePointerEvent,
		});

		this.camera.controls.rotateSpeed = pinching ? 3 : 1;

		rightPoints[4].material = pinching ? this.matSelected : this.mat;
		rightPoints[8].material = pinching ? this.matSelected : this.mat;
		this.rightPalm.material = pinching ? this.matSelected : this.mat;

		document.getElementById("mainCanvas")!.dispatchEvent(event);
	}

	updatePositions(res: HandLandmarkerResult) {
		// Since the camera is inverted, handedness is going to be flipped. "Left" from MP appears as right, vice versa
		const leftAt0 = !(res.handednesses[0][0].categoryName == "Left");

		const left = leftAt0 ? res.worldLandmarks[0] : res.worldLandmarks[1];
		const left2d = leftAt0 ? res.landmarks[0] : res.landmarks[1];
		const right = leftAt0 ? res.worldLandmarks[1] : res.worldLandmarks[0];
		const right2d = leftAt0 ? res.landmarks[1] : res.landmarks[0];

		for (let i = 0; i < 21; i++) {
			if (left) {
				this.leftPoints.children[i].position.set(left[i].x * -1, left[i].y * -1, left[i].z);
				this.leftPoints.children[i].position.multiplyScalar(25);

				// 2d landmarks are normalized starting from 0,0 top right. 20 units from center seems like a good y offset
				// x offset chosen with trial and error
				const offset = new three.Vector3(18 - 40 * (left2d[i].x / 1), 20 - 40 * (left2d[i].y / 1), 0);
				this.leftPoints.children[i].position.add(offset);
			}

			if (right) {
				this.rightPoints.children[i].position.set(right[i].x * -1, right[i].y * -1, right[i].z);
				this.rightPoints.children[i].position.multiplyScalar(25);

				const offset = new three.Vector3(22 - 40 * (right2d[i].x / 1), 20 - 40 * (right2d[i].y / 1), 0);
				this.rightPoints.children[i].position.add(offset);
			}
		}

		// Update line positions
		let idx = 0;

		if (left) {
			for (const [a, b] of this.connections) {
				const A = this.leftPoints.children[a].position;
				const B = this.leftPoints.children[b].position;

				this.lineArray.set([A.x, A.y, A.z, B.x, B.y, B.z], idx);
				idx += 6;
			}

			this.leftLine.geometry.setAttribute(
				"position",
				new three.BufferAttribute(this.lineArray.slice(0, this.lineArray.length / 2), 3)
			);
		}

		if (right) {
			for (const [a, b] of this.connections) {
				const A = this.rightPoints.children[a].position;
				const B = this.rightPoints.children[b].position;

				this.lineArray.set([A.x, A.y, A.z, B.x, B.y, B.z], idx);
				idx += 6;
			}

			this.rightLine.geometry.setAttribute("position", new three.BufferAttribute(this.lineArray.slice(this.lineArray.length / 2), 3));
		}

		// Update palm vertices
		idx = 0;

		if (left) {
			for (const [a, b, c] of this.connectionPalm) {
				const A = this.leftPoints.children[a].position;
				const B = this.leftPoints.children[b].position;
				const C = this.leftPoints.children[c].position;

				this.palmArray.set([A.x, A.y, A.z, B.x, B.y, B.z, C.x, C.y, C.z], idx);
				idx += 9;
			}

			this.leftPalm.geometry.setAttribute(
				"position",
				new three.BufferAttribute(this.palmArray.slice(0, this.palmArray.length / 2), 3)
			);
			this.leftPalm.geometry.computeVertexNormals();
		}

		if (right) {
			for (const [a, b, c] of this.connectionPalm) {
				const A = this.rightPoints.children[a].position;
				const B = this.rightPoints.children[b].position;
				const C = this.rightPoints.children[c].position;

				this.palmArray.set([A.x, A.y, A.z, B.x, B.y, B.z, C.x, C.y, C.z], idx);
				idx += 9;
			}

			this.rightPalm.geometry.setAttribute("position", new three.BufferAttribute(this.palmArray.slice(this.palmArray.length / 2), 3));
			this.rightPalm.geometry.computeVertexNormals();
		}
	}

	#objectToScreenSpace(obj: three.Object3D) {
		let pos = new three.Vector3();
		pos = obj.getWorldPosition(pos);
		pos.project(this.camera.camera);

		const canvas = document.getElementById("mainCanvas")! as HTMLCanvasElement;
		let x = ((pos.x + 1) / 2) * canvas.width;
		let y = ((-pos.y + 1) / 2) * canvas.height;

		return { x, y };
	}

	static getInstance(tracker: HandsTracker, camera: mainCamera) {
		if (Hands.instance) return this.instance;

		this.instance = new Hands(tracker, camera);
		return this.instance;
	}
}
