import * as three from "three";

export class UnlitCubes {
	cubeGeo = new three.BoxGeometry(4, 4, 4);
	cubeMat = new three.MeshBasicMaterial();
	cubeMesh = new three.InstancedMesh(this.cubeGeo, this.cubeMat, 2);

	constructor(cubePos1: three.Vector3, cubePos2: three.Vector3) {
		const matrix = new three.Matrix4();

		matrix.setPosition(cubePos1);
		this.cubeMesh.setMatrixAt(0, matrix);
		this.cubeMesh.setColorAt(0, new three.Color(0x6595ed));

		matrix.setPosition(cubePos2);
		this.cubeMesh.setMatrixAt(1, matrix);
		this.cubeMesh.setColorAt(1, new three.Color(0xeda76f));

		this.cubeMesh.instanceMatrix.needsUpdate = true;
	}
}
