import * as three from "three";

/* much of this is based on the built-in volume shader in three.js */

export const VolumeShader = {
	uniforms: {
		u_size: {
			value: new three.Vector3(1, 1, 1),
		},
		u_clim: {
			value: new three.Vector2(0, 1),
		},
		u_data: {
			value: null,
		},
		u_cmdata: {
			value: null,
		},
		u_threshold: {
			value: 0.0,
		},
		u_style: {
			value: 0,
		},
		u_step_size: {
			value: 1.0,
		},
		u_zmax: {
			value: 1000,
		},
		u_sample_modulo: {
			value: 1.0,
		},
		u_lower_bound_mip: {
			value: 0.0,
		},
		u_modelMat: {
			value: new three.Matrix4(),
		},
		u_iModelMat: {
			value: new three.Matrix4(),
		},
		u_mvp: {
			value: new three.Matrix4(),
		},
		u_view: {
			value: new three.Matrix4(),
		},
		u_proj: {
			value: new three.Matrix4(),
		},
		u_max_steps: {
			value: 2500,
		},
	},
	vertexShaderNew: /*glsl*/ `
	#pragma vscode_glsllint_stage : vert
	varying vec3 fragPos;

	void main() {
		fragPos = position;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
	`,
	fragmentShaderNew: /*glsl*/ `
	#pragma vscode_glsllint_stage : frag
	precision highp float;
	precision mediump sampler3D;

	const float z_near = 0.0001;
	const int refinementSteps = 4;

	// fragment pos in object space
	varying vec3 fragPos;

	uniform int u_style;
	uniform int u_zmax;
	uniform vec3 u_size;
	uniform vec2 u_clim;
	uniform sampler3D u_data;
	uniform sampler2D u_cmdata;
	uniform float u_step_size;
	uniform float u_max_steps;
	uniform float u_threshold;
	uniform float u_sample_modulo;
	uniform mat4 u_modelMat;
	uniform mat4 u_iModelMat;

	struct Ray {
		vec3 pos;
		vec3 dir;
	};

	float sampleVal(vec3 texcoord);
	vec4 apply_colormap (float val);
	void cast_mip(Ray ray, float distance, mat4 model);
	void cast_iso(Ray ray, float distance, mat4 model);
	vec4 add_lighting(float val, Ray ray, vec3 step);

	bool boxIntersect( in vec3 row, in vec3 rdw, in mat4 txx, in mat4 txi, in vec3 rad,
                   out vec2 oT, out vec3 oN, out vec2 oU, out int oF );

	void main() {
		if (mod(gl_FragCoord.x + gl_FragCoord.y, u_sample_modulo) >= 1.0) {
			gl_FragColor = vec4(0.0);
			return;
		}
		
		Ray camRay;
		camRay.pos = cameraPosition;
		camRay.dir = normalize((u_modelMat * vec4(fragPos, 1.0)).xyz - (cameraPosition));

		vec2 altHit, uvs;
		vec3 normals;
		int face;
		boxIntersect(camRay.pos, camRay.dir, inverse(u_modelMat), u_modelMat, u_size / 2.0,
					 altHit, normals, uvs, face);
		vec3 hitPos = camRay.pos + (camRay.dir * altHit.x);
		float distance = length(hitPos - (camRay.pos + (camRay.dir * altHit.y)));

		Ray raycast;
		raycast.pos = hitPos;
		raycast.dir = camRay.dir;
		
		if (u_style == 0)
			cast_mip(raycast, distance, u_modelMat);
		else if (u_style == 1)
			cast_iso(raycast, distance, u_modelMat);

		// uncomment for debugging distance
		// gl_FragColor = vec4(0.0, abs(distance) / float(u_size + 200.f), 1.0, 1.0);
	}

	void cast_mip(Ray ray, float distance, mat4 model) {
		mat4 iModel = inverse(model);
		ray.pos = (iModel * vec4(ray.pos, 1.0)).xyz;
		ray.dir = (iModel * vec4(ray.dir, 0.0)).xyz;

		int notCulled = 0;
		float steps = 0.f;
		float maxVal = 0.f;
		vec3 maxPos = vec3(0.);
		vec3 currentPos = ray.pos;
		while (steps < u_max_steps) {
			if (steps > distance)
				break;

			if (currentPos.z > float(u_zmax) - (u_size.z / 2.)) {
				currentPos += ray.dir * u_step_size;
				steps += u_step_size;
				continue;
			}

			float val = sampleVal(currentPos);

			notCulled = 1;

			if (val > maxVal) {
				maxVal = val;
				maxPos = currentPos;
			}

			currentPos += ray.dir * u_step_size;
			steps += u_step_size;
		}

		// get a more accurate position
		if (notCulled == 1) {
			vec3 refinedPos = maxPos - (ray.dir * (u_step_size * 0.5));
			vec3 refinedStep = vec3(u_step_size) / float(refinementSteps);

			for (int i = 0; i < refinementSteps; i++) {
				maxVal = max(maxVal, sampleVal(refinedPos)); // partial div may have undefined value
				refinedPos += refinedStep;
			}
		}

		vec4 color = apply_colormap(maxVal);

		// pass through if value is 0 (to ignore empty space in MIP projection)
		if (maxVal == 0.f)
			color.a = 0.f;

		// vec4 color = vec4(steps / 200.f, steps / 200.f, steps / 200.f, 1.0);

		gl_FragColor = color * vec4(float(notCulled));
	}

	void cast_iso(Ray ray, float distance, mat4 model) {
		mat4 iModel = inverse(model);
		ray.pos = (iModel * vec4(ray.pos, 1.0)).xyz;
		ray.dir = (iModel * vec4(ray.dir, 0.0)).xyz;
		vec3 dStep = 1.5 / u_size; // derivative step size

		float low_threshold = u_threshold - 0.02 * (u_clim[1] - u_clim[0]);

		int notCulled = 0;
		float steps = 0.f;
		vec3 currentPos = ray.pos;
		while (steps < u_max_steps) {
			if (steps > distance)
				break;

			if (currentPos.z > float(u_zmax) - (u_size.z / 2.)) {
				currentPos += ray.dir * u_step_size;
				steps += u_step_size;
				continue;
			}

			notCulled = 1;

			float val = sampleVal(currentPos);

			if (val > low_threshold) {
				vec3 refinedPos = currentPos - (0.5 * u_step_size);
				vec3 refinedStep = vec3(u_step_size) / float(10.0);

				for (int i = 0; i < refinementSteps; i++) {
					val = sampleVal(refinedPos);

					if (val > u_threshold) {
						Ray curRay = Ray(currentPos, ray.dir);
						gl_FragColor = add_lighting(val, curRay, refinedStep) * vec4(float(notCulled));
						return;
					}

					refinedPos += refinedStep;
				}
				
			}

			currentPos += ray.dir * u_step_size;
			steps += u_step_size;
		}
	}
	
	vec4 add_lighting(float val, Ray ray, vec3 step) {
		vec3 view = ray.dir;

		vec3 normal;
		float val1, val2;

		val1 = sampleVal(ray.pos + vec3(-step[0], 0.0, 0.0));
		val2 = sampleVal(ray.pos + vec3(+step[0], 0.0, 0.0));
		normal[0] = val1 - val2;
		val = max(max(val1, val2), val);

		val1 = sampleVal(ray.pos + vec3(0.0, -step[1], 0.0));
		val2 = sampleVal(ray.pos + vec3(0.0, +step[1], 0.0));
		normal[1] = val1 - val2;
		val = max(max(val1, val2), val);

		val1 = sampleVal(ray.pos + vec3(0.0, 0.0, -step[2]));
		val2 = sampleVal(ray.pos + vec3(0.0, 0.0, +step[2]));
		normal[2] = val1 - val2;
		val = max(max(val1, val2), val);

		float magnitude = length(normal);

		// point normal to viewer
		float nSelect = float(dot(normal, view) > 0.0);
		normal = (2.0 * nSelect - 1.0) * normal;

		// initial colors
		vec4 ambient = vec4(0.5, 0.5, 0.5, 0.0);
		vec4 diffuse = vec4(0.0, 0.0, 0.0, 0.0);
		vec4 specular = vec4(0.0, 0.0, 0.0, 0.0);

		// light dir
		float lightEnabled = float(length(view) > 0.0);
		vec3 light = normalize(view + (1.0 - lightEnabled));

		// light properties
		const float shininess = 40.0;
		float lambertTerm = clamp(dot(normal, light), 0.0, 1.0);
		vec3 halfway = normalize(light + view);
		float specularTerm = pow(max(dot(halfway, normal), 0.0), shininess);

		// set color
		ambient += lightEnabled * ambient;
		diffuse += lightEnabled * lambertTerm;
		specular += lightEnabled * specularTerm * specular;

		// final color with color map
		vec4 mapColor = apply_colormap(val);
		vec4 finalColor = mapColor * (ambient + diffuse) + specular;
		finalColor.a = mapColor.a;
		return finalColor;
	}

	float sampleVal(vec3 texcoord) {
		vec3 coord = (texcoord / u_size) + 0.5f;
		return texture(u_data, coord).r;
	}

	vec4 apply_colormap (float val) {
		val = (val - u_clim[0]) / (u_clim[1] - u_clim[0]);
		return texture2D(u_cmdata, vec2(val, 0.5));
	}

	// Calcs intersection and exit distances, normal, face and UVs
	// row is the ray origin in world space
	// rdw is the ray direction in world space
	// txx is the world-to-box transformation
	// txi is the box-to-world transformation
	// ro and rd are in world space
	// rad is the half-length of the box
	//
	// oT contains the entry and exit points
	// oN is the normal in world space
	// oU contains the UVs at the intersection point
	// oF contains the index if the intersected face [0..5]
	bool boxIntersect( in vec3 row, in vec3 rdw, in mat4 txx, in mat4 txi, in vec3 rad,
		out vec2 oT, out vec3 oN, out vec2 oU, out int oF ) 
	{				 
		// convert from world to box space
		vec3 rd = (txx*vec4(rdw,0.0)).xyz;
		vec3 ro = (txx*vec4(row,1.0)).xyz;


		// ray-box intersection in box space
		vec3 m = 1.0/rd;
		vec3 s = vec3((rd.x<0.0)?1.0:-1.0,
			(rd.y<0.0)?1.0:-1.0,
			(rd.z<0.0)?1.0:-1.0);
		vec3 t1 = m*(-ro + s*rad);
		vec3 t2 = m*(-ro - s*rad);

		float tN = max( max( t1.x, t1.y ), t1.z );
		float tF = min( min( t2.x, t2.y ), t2.z );

		if( tN>tF || tF<0.0) return false;

		// compute normal (in world space), face and UV
		if( t1.x>t1.y && t1.x>t1.z ) { oN=txi[0].xyz*s.x; oU=ro.yz+rd.yz*t1.x; oF=(1+int(s.x))/2;}
		else if( t1.y>t1.z   )       { oN=txi[1].xyz*s.y; oU=ro.zx+rd.zx*t1.y; oF=(5+int(s.y))/2;}
		else                         { oN=txi[2].xyz*s.z; oU=ro.xy+rd.xy*t1.z; oF=(9+int(s.z))/2;}

		oT = vec2(tN,tF);

		return true;
	}
	`,
};
