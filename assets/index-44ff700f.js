var Sp=Object.defineProperty;var Cp=(s,t,e)=>t in s?Sp(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Ce=(s,t,e)=>(Cp(s,typeof t!="symbol"?t+"":t,e),e);function Tp(s,t){for(var e=0;e<t.length;e++){const i=t[e];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in s)){const l=Object.getOwnPropertyDescriptor(i,r);l&&Object.defineProperty(s,r,l.get?l:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function e(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=e(r);fetch(r.href,l)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rl="154",Pp=0,wc=1,Ap=2,jh=1,Rp=2,mi=3,ki=0,cn=1,Bn=2,zi=0,Ks=1,Ec=2,yc=3,Mc=4,Lp=5,qs=100,Dp=101,Up=102,Sc=103,Cc=104,Ip=200,Np=201,Fp=202,Op=203,Kh=204,Yh=205,zp=206,kp=207,Vp=208,Bp=209,Gp=210,Hp=0,Wp=1,Xp=2,ml=3,qp=4,jp=5,Kp=6,Yp=7,$h=0,$p=1,Zp=2,vi=0,Jp=1,Qp=2,tf=3,ef=4,nf=5,Zh=300,$s=301,Zs=302,_l=303,vl=304,ja=306,gl=1e3,An=1001,bl=1002,Qe=1003,Tc=1004,zo=1005,ln=1006,sf=1007,Hr=1008,gi=1009,rf=1010,af=1011,Ll=1012,Jh=1013,Ni=1014,Fi=1015,Wr=1016,Qh=1017,tu=1018,hs=1020,of=1021,Gn=1023,lf=1024,cf=1025,us=1026,Js=1027,eu=1028,nu=1029,hf=1030,iu=1031,su=1033,ko=33776,Vo=33777,Bo=33778,Go=33779,Pc=35840,Ac=35841,Rc=35842,Lc=35843,uf=36196,Dc=37492,Uc=37496,Ic=37808,Nc=37809,Fc=37810,Oc=37811,zc=37812,kc=37813,Vc=37814,Bc=37815,Gc=37816,Hc=37817,Wc=37818,Xc=37819,qc=37820,jc=37821,Ho=36492,df=36283,Kc=36284,Yc=36285,$c=36286,ru=3e3,ds=3001,pf=3200,ff=3201,mf=0,_f=1,ps="",Qt="srgb",Jn="srgb-linear",au="display-p3",Wo=7680,vf=519,gf=512,bf=513,xf=514,wf=515,Ef=516,yf=517,Mf=518,Sf=519,Zc=35044,Jc="300 es",xl=1035,_i=2e3,Ha=2001;class ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const l=r.indexOf(e);l!==-1&&r.splice(l,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let l=0,h=r.length;l<h;l++)r[l].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qc=1234567;const Nr=Math.PI/180,Xr=180/Math.PI;function tr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function Dl(s,t){return(s%t+t)%t}function Cf(s,t,e,i,r){return i+(s-t)*(r-i)/(e-t)}function Tf(s,t,e){return s!==t?(e-s)/(t-s):0}function Fr(s,t,e){return(1-e)*s+e*t}function Pf(s,t,e,i){return Fr(s,t,1-Math.exp(-e*i))}function Af(s,t=1){return t-Math.abs(Dl(s,t*2)-t)}function Rf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Lf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Df(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Uf(s,t){return s+Math.random()*(t-s)}function If(s){return s*(.5-Math.random())}function Nf(s){s!==void 0&&(Qc=s);let t=Qc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ff(s){return s*Nr}function Of(s){return s*Xr}function wl(s){return(s&s-1)===0&&s!==0}function zf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kf(s,t,e,i,r){const l=Math.cos,h=Math.sin,u=l(e/2),f=h(e/2),m=l((t+i)/2),_=h((t+i)/2),g=l((t-i)/2),b=h((t-i)/2),y=l((i-t)/2),C=h((i-t)/2);switch(r){case"XYX":s.set(u*_,f*g,f*b,u*m);break;case"YZY":s.set(f*b,u*_,f*g,u*m);break;case"ZXZ":s.set(f*g,f*b,u*_,u*m);break;case"XZX":s.set(u*_,f*C,f*y,u*m);break;case"YXY":s.set(f*y,u*_,f*C,u*m);break;case"ZYZ":s.set(f*C,f*y,u*_,u*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Dr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function on(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Le={DEG2RAD:Nr,RAD2DEG:Xr,generateUUID:tr,clamp:We,euclideanModulo:Dl,mapLinear:Cf,inverseLerp:Tf,lerp:Fr,damp:Pf,pingpong:Af,smoothstep:Rf,smootherstep:Lf,randInt:Df,randFloat:Uf,randFloatSpread:If,seededRandom:Nf,degToRad:Ff,radToDeg:Of,isPowerOfTwo:wl,ceilPowerOfTwo:zf,floorPowerOfTwo:Wa,setQuaternionFromProperEuler:kf,normalize:on,denormalize:Dr};class pe{constructor(t=0,e=0){pe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),l=this.x-t.x,h=this.y-t.y;return this.x=l*i-h*r+t.x,this.y=l*r+h*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,i,r,l,h,u,f,m){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,l,h,u,f,m)}set(t,e,i,r,l,h,u,f,m){const _=this.elements;return _[0]=t,_[1]=r,_[2]=u,_[3]=e,_[4]=l,_[5]=f,_[6]=i,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,l=this.elements,h=i[0],u=i[3],f=i[6],m=i[1],_=i[4],g=i[7],b=i[2],y=i[5],C=i[8],S=r[0],w=r[3],x=r[6],I=r[1],R=r[4],D=r[7],O=r[2],k=r[5],z=r[8];return l[0]=h*S+u*I+f*O,l[3]=h*w+u*R+f*k,l[6]=h*x+u*D+f*z,l[1]=m*S+_*I+g*O,l[4]=m*w+_*R+g*k,l[7]=m*x+_*D+g*z,l[2]=b*S+y*I+C*O,l[5]=b*w+y*R+C*k,l[8]=b*x+y*D+C*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],l=t[3],h=t[4],u=t[5],f=t[6],m=t[7],_=t[8];return e*h*_-e*u*m-i*l*_+i*u*f+r*l*m-r*h*f}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],l=t[3],h=t[4],u=t[5],f=t[6],m=t[7],_=t[8],g=_*h-u*m,b=u*f-_*l,y=m*l-h*f,C=e*g+i*b+r*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/C;return t[0]=g*S,t[1]=(r*m-_*i)*S,t[2]=(u*i-r*h)*S,t[3]=b*S,t[4]=(_*e-r*f)*S,t[5]=(r*l-u*e)*S,t[6]=y*S,t[7]=(i*f-m*e)*S,t[8]=(h*e-i*l)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,l,h,u){const f=Math.cos(l),m=Math.sin(l);return this.set(i*f,i*m,-i*(f*h+m*u)+h+t,-r*m,r*f,-r*(-m*h+f*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Xo.makeScale(t,e)),this}rotate(t){return this.premultiply(Xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new se;function ou(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const th={};function Or(s){s in th||(th[s]=!0,console.warn(s))}function Ys(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Vf=new se().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Bf=new se().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Gf(s){return s.convertSRGBToLinear().applyMatrix3(Bf)}function Hf(s){return s.applyMatrix3(Vf).convertLinearToSRGB()}const Wf={[Jn]:s=>s,[Qt]:s=>s.convertSRGBToLinear(),[au]:Gf},Xf={[Jn]:s=>s,[Qt]:s=>s.convertLinearToSRGB(),[au]:Hf},Un={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Jn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Wf[t],r=Xf[e];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let Rs;class lu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=qr("canvas")),Rs.width=t.width,Rs.height=t.height;const i=Rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),l=r.data;for(let h=0;h<l.length;h++)l[h]=Ys(l[h]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ys(e[i]/255)*255):e[i]=Ys(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qf=0;class cu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=tr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let h=0,u=r.length;h<u;h++)r[h].isDataTexture?l.push(jo(r[h].image)):l.push(jo(r[h]))}else l=jo(r);i.url=l}return e||(t.images[this.uuid]=i),i}}function jo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jf=0;class tn extends ms{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=An,r=An,l=ln,h=Hr,u=Gn,f=gi,m=tn.DEFAULT_ANISOTROPY,_=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=tr(),this.name="",this.source=new cu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=l,this.minFilter=h,this.anisotropy=m,this.format=u,this.internalFormat=null,this.type=f,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===ds?Qt:ps),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gl:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gl:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?ds:ru}set encoding(t){Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ds?Qt:ps}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Zh;tn.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,e=0,i=0,r=1){Xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,l=this.w,h=t.elements;return this.x=h[0]*e+h[4]*i+h[8]*r+h[12]*l,this.y=h[1]*e+h[5]*i+h[9]*r+h[13]*l,this.z=h[2]*e+h[6]*i+h[10]*r+h[14]*l,this.w=h[3]*e+h[7]*i+h[11]*r+h[15]*l,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,l;const f=t.elements,m=f[0],_=f[4],g=f[8],b=f[1],y=f[5],C=f[9],S=f[2],w=f[6],x=f[10];if(Math.abs(_-b)<.01&&Math.abs(g-S)<.01&&Math.abs(C-w)<.01){if(Math.abs(_+b)<.1&&Math.abs(g+S)<.1&&Math.abs(C+w)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(m+1)/2,D=(y+1)/2,O=(x+1)/2,k=(_+b)/4,z=(g+S)/4,H=(C+w)/4;return R>D&&R>O?R<.01?(i=0,r=.707106781,l=.707106781):(i=Math.sqrt(R),r=k/i,l=z/i):D>O?D<.01?(i=.707106781,r=0,l=.707106781):(r=Math.sqrt(D),i=k/r,l=H/r):O<.01?(i=.707106781,r=.707106781,l=0):(l=Math.sqrt(O),i=z/l,r=H/l),this.set(i,r,l,e),this}let I=Math.sqrt((w-C)*(w-C)+(g-S)*(g-S)+(b-_)*(b-_));return Math.abs(I)<.001&&(I=1),this.x=(w-C)/I,this.y=(g-S)/I,this.z=(b-_)/I,this.w=Math.acos((m+y+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fs extends ms{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(Or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ds?Qt:ps),this.texture=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ln,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hu extends tn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uu extends tn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,l,h,u){let f=i[r+0],m=i[r+1],_=i[r+2],g=i[r+3];const b=l[h+0],y=l[h+1],C=l[h+2],S=l[h+3];if(u===0){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u===1){t[e+0]=b,t[e+1]=y,t[e+2]=C,t[e+3]=S;return}if(g!==S||f!==b||m!==y||_!==C){let w=1-u;const x=f*b+m*y+_*C+g*S,I=x>=0?1:-1,R=1-x*x;if(R>Number.EPSILON){const O=Math.sqrt(R),k=Math.atan2(O,x*I);w=Math.sin(w*k)/O,u=Math.sin(u*k)/O}const D=u*I;if(f=f*w+b*D,m=m*w+y*D,_=_*w+C*D,g=g*w+S*D,w===1-u){const O=1/Math.sqrt(f*f+m*m+_*_+g*g);f*=O,m*=O,_*=O,g*=O}}t[e]=f,t[e+1]=m,t[e+2]=_,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,r,l,h){const u=i[r],f=i[r+1],m=i[r+2],_=i[r+3],g=l[h],b=l[h+1],y=l[h+2],C=l[h+3];return t[e]=u*C+_*g+f*y-m*b,t[e+1]=f*C+_*b+m*g-u*y,t[e+2]=m*C+_*y+u*b-f*g,t[e+3]=_*C-u*g-f*b-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,r=t._y,l=t._z,h=t._order,u=Math.cos,f=Math.sin,m=u(i/2),_=u(r/2),g=u(l/2),b=f(i/2),y=f(r/2),C=f(l/2);switch(h){case"XYZ":this._x=b*_*g+m*y*C,this._y=m*y*g-b*_*C,this._z=m*_*C+b*y*g,this._w=m*_*g-b*y*C;break;case"YXZ":this._x=b*_*g+m*y*C,this._y=m*y*g-b*_*C,this._z=m*_*C-b*y*g,this._w=m*_*g+b*y*C;break;case"ZXY":this._x=b*_*g-m*y*C,this._y=m*y*g+b*_*C,this._z=m*_*C+b*y*g,this._w=m*_*g-b*y*C;break;case"ZYX":this._x=b*_*g-m*y*C,this._y=m*y*g+b*_*C,this._z=m*_*C-b*y*g,this._w=m*_*g+b*y*C;break;case"YZX":this._x=b*_*g+m*y*C,this._y=m*y*g+b*_*C,this._z=m*_*C-b*y*g,this._w=m*_*g-b*y*C;break;case"XZY":this._x=b*_*g-m*y*C,this._y=m*y*g-b*_*C,this._z=m*_*C+b*y*g,this._w=m*_*g+b*y*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],l=e[8],h=e[1],u=e[5],f=e[9],m=e[2],_=e[6],g=e[10],b=i+u+g;if(b>0){const y=.5/Math.sqrt(b+1);this._w=.25/y,this._x=(_-f)*y,this._y=(l-m)*y,this._z=(h-r)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(_-f)/y,this._x=.25*y,this._y=(r+h)/y,this._z=(l+m)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(l-m)/y,this._x=(r+h)/y,this._y=.25*y,this._z=(f+_)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(h-r)/y,this._x=(l+m)/y,this._y=(f+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,l=t._z,h=t._w,u=e._x,f=e._y,m=e._z,_=e._w;return this._x=i*_+h*u+r*m-l*f,this._y=r*_+h*f+l*u-i*m,this._z=l*_+h*m+i*f-r*u,this._w=h*_-i*u-r*f-l*m,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,l=this._z,h=this._w;let u=h*t._w+i*t._x+r*t._y+l*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=h,this._x=i,this._y=r,this._z=l,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-e;return this._w=y*h+e*this._w,this._x=y*i+e*this._x,this._y=y*r+e*this._y,this._z=y*l+e*this._z,this.normalize(),this._onChangeCallback(),this}const m=Math.sqrt(f),_=Math.atan2(m,u),g=Math.sin((1-e)*_)/m,b=Math.sin(e*_)/m;return this._w=h*g+this._w*b,this._x=i*g+this._x*b,this._y=r*g+this._y*b,this._z=l*g+this._z*b,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(l),i*Math.cos(l),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*r,this.y=l[1]*e+l[4]*i+l[7]*r,this.z=l[2]*e+l[5]*i+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,l=t.elements,h=1/(l[3]*e+l[7]*i+l[11]*r+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*r+l[12])*h,this.y=(l[1]*e+l[5]*i+l[9]*r+l[13])*h,this.z=(l[2]*e+l[6]*i+l[10]*r+l[14])*h,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,l=t.x,h=t.y,u=t.z,f=t.w,m=f*e+h*r-u*i,_=f*i+u*e-l*r,g=f*r+l*i-h*e,b=-l*e-h*i-u*r;return this.x=m*f+b*-l+_*-u-g*-h,this.y=_*f+b*-h+g*-l-m*-u,this.z=g*f+b*-u+m*-h-_*-l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r,this.y=l[1]*e+l[5]*i+l[9]*r,this.z=l[2]*e+l[6]*i+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,l=t.z,h=e.x,u=e.y,f=e.z;return this.x=r*f-l*u,this.y=l*h-i*f,this.z=i*u-r*h,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ko.copy(this).projectOnVector(t),this.sub(Ko)}reflect(t){return this.sub(Ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new B,eh=new er;class nr{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox),Ls.applyMatrix4(t.matrixWorld),this.union(Ls);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const l=r.attributes.position;for(let h=0,u=l.count;h<u;h++)ci.fromBufferAttribute(l,h).applyMatrix4(t.matrixWorld),this.expandByPoint(ci)}else r.boundingBox===null&&r.computeBoundingBox(),Ls.copy(r.boundingBox),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const i=t.children;for(let r=0,l=i.length;r<l;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),ba.subVectors(this.max,Pr),Ds.subVectors(t.a,Pr),Us.subVectors(t.b,Pr),Is.subVectors(t.c,Pr),Ri.subVectors(Us,Ds),Li.subVectors(Is,Us),is.subVectors(Ds,Is);let e=[0,-Ri.z,Ri.y,0,-Li.z,Li.y,0,-is.z,is.y,Ri.z,0,-Ri.x,Li.z,0,-Li.x,is.z,0,-is.x,-Ri.y,Ri.x,0,-Li.y,Li.x,0,-is.y,is.x,0];return!Yo(e,Ds,Us,Is,ba)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Ds,Us,Is,ba))?!1:(xa.crossVectors(Ri,Li),e=[xa.x,xa.y,xa.z],Yo(e,Ds,Us,Is,ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new B,new B,new B,new B,new B,new B,new B,new B],ci=new B,Ls=new nr,Ds=new B,Us=new B,Is=new B,Ri=new B,Li=new B,is=new B,Pr=new B,ba=new B,xa=new B,ss=new B;function Yo(s,t,e,i,r){for(let l=0,h=s.length-3;l<=h;l+=3){ss.fromArray(s,l);const u=r.x*Math.abs(ss.x)+r.y*Math.abs(ss.y)+r.z*Math.abs(ss.z),f=t.dot(ss),m=e.dot(ss),_=i.dot(ss);if(Math.max(-Math.max(f,m,_),Math.min(f,m,_))>u)return!1}return!0}const Kf=new nr,Ar=new B,$o=new B;class jr{constructor(t=new B,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Kf.setFromPoints(t).getCenter(i);let r=0;for(let l=0,h=t.length;l<h;l++)r=Math.max(r,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add($o)),this.expandByPoint(Ar.copy(t.center).sub($o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new B,Zo=new B,wa=new B,Di=new B,Jo=new B,Ea=new B,Qo=new B;class Ul{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Zo.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(Zo);const l=t.distanceTo(e)*.5,h=-this.direction.dot(wa),u=Di.dot(this.direction),f=-Di.dot(wa),m=Di.lengthSq(),_=Math.abs(1-h*h);let g,b,y,C;if(_>0)if(g=h*f-u,b=h*u-f,C=l*_,g>=0)if(b>=-C)if(b<=C){const S=1/_;g*=S,b*=S,y=g*(g+h*b+2*u)+b*(h*g+b+2*f)+m}else b=l,g=Math.max(0,-(h*b+u)),y=-g*g+b*(b+2*f)+m;else b=-l,g=Math.max(0,-(h*b+u)),y=-g*g+b*(b+2*f)+m;else b<=-C?(g=Math.max(0,-(-h*l+u)),b=g>0?-l:Math.min(Math.max(-l,-f),l),y=-g*g+b*(b+2*f)+m):b<=C?(g=0,b=Math.min(Math.max(-l,-f),l),y=b*(b+2*f)+m):(g=Math.max(0,-(h*l+u)),b=g>0?l:Math.min(Math.max(-l,-f),l),y=-g*g+b*(b+2*f)+m);else b=h>0?-l:l,g=Math.max(0,-(h*b+u)),y=-g*g+b*(b+2*f)+m;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Zo).addScaledVector(wa,b),y}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,l=t.radius*t.radius;if(r>l)return null;const h=Math.sqrt(l-r),u=i-h,f=i+h;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,l,h,u,f;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,b=this.origin;return m>=0?(i=(t.min.x-b.x)*m,r=(t.max.x-b.x)*m):(i=(t.max.x-b.x)*m,r=(t.min.x-b.x)*m),_>=0?(l=(t.min.y-b.y)*_,h=(t.max.y-b.y)*_):(l=(t.max.y-b.y)*_,h=(t.min.y-b.y)*_),i>h||l>r||((l>i||isNaN(i))&&(i=l),(h<r||isNaN(r))&&(r=h),g>=0?(u=(t.min.z-b.z)*g,f=(t.max.z-b.z)*g):(u=(t.max.z-b.z)*g,f=(t.min.z-b.z)*g),i>f||u>r)||((u>i||i!==i)&&(i=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,r,l){Jo.subVectors(e,t),Ea.subVectors(i,t),Qo.crossVectors(Jo,Ea);let h=this.direction.dot(Qo),u;if(h>0){if(r)return null;u=1}else if(h<0)u=-1,h=-h;else return null;Di.subVectors(this.origin,t);const f=u*this.direction.dot(Ea.crossVectors(Di,Ea));if(f<0)return null;const m=u*this.direction.dot(Jo.cross(Di));if(m<0||f+m>h)return null;const _=-u*Di.dot(Qo);return _<0?null:this.at(_/h,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(t,e,i,r,l,h,u,f,m,_,g,b,y,C,S,w){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,l,h,u,f,m,_,g,b,y,C,S,w)}set(t,e,i,r,l,h,u,f,m,_,g,b,y,C,S,w){const x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=r,x[1]=l,x[5]=h,x[9]=u,x[13]=f,x[2]=m,x[6]=_,x[10]=g,x[14]=b,x[3]=y,x[7]=C,x[11]=S,x[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ns.setFromMatrixColumn(t,0).length(),l=1/Ns.setFromMatrixColumn(t,1).length(),h=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*h,e[9]=i[9]*h,e[10]=i[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,l=t.z,h=Math.cos(i),u=Math.sin(i),f=Math.cos(r),m=Math.sin(r),_=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const b=h*_,y=h*g,C=u*_,S=u*g;e[0]=f*_,e[4]=-f*g,e[8]=m,e[1]=y+C*m,e[5]=b-S*m,e[9]=-u*f,e[2]=S-b*m,e[6]=C+y*m,e[10]=h*f}else if(t.order==="YXZ"){const b=f*_,y=f*g,C=m*_,S=m*g;e[0]=b+S*u,e[4]=C*u-y,e[8]=h*m,e[1]=h*g,e[5]=h*_,e[9]=-u,e[2]=y*u-C,e[6]=S+b*u,e[10]=h*f}else if(t.order==="ZXY"){const b=f*_,y=f*g,C=m*_,S=m*g;e[0]=b-S*u,e[4]=-h*g,e[8]=C+y*u,e[1]=y+C*u,e[5]=h*_,e[9]=S-b*u,e[2]=-h*m,e[6]=u,e[10]=h*f}else if(t.order==="ZYX"){const b=h*_,y=h*g,C=u*_,S=u*g;e[0]=f*_,e[4]=C*m-y,e[8]=b*m+S,e[1]=f*g,e[5]=S*m+b,e[9]=y*m-C,e[2]=-m,e[6]=u*f,e[10]=h*f}else if(t.order==="YZX"){const b=h*f,y=h*m,C=u*f,S=u*m;e[0]=f*_,e[4]=S-b*g,e[8]=C*g+y,e[1]=g,e[5]=h*_,e[9]=-u*_,e[2]=-m*_,e[6]=y*g+C,e[10]=b-S*g}else if(t.order==="XZY"){const b=h*f,y=h*m,C=u*f,S=u*m;e[0]=f*_,e[4]=-g,e[8]=m*_,e[1]=b*g+S,e[5]=h*_,e[9]=y*g-C,e[2]=C*g-y,e[6]=u*_,e[10]=S*g+b}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yf,t,$f)}lookAt(t,e,i){const r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ui.crossVectors(i,mn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ui.crossVectors(i,mn)),Ui.normalize(),ya.crossVectors(mn,Ui),r[0]=Ui.x,r[4]=ya.x,r[8]=mn.x,r[1]=Ui.y,r[5]=ya.y,r[9]=mn.y,r[2]=Ui.z,r[6]=ya.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,l=this.elements,h=i[0],u=i[4],f=i[8],m=i[12],_=i[1],g=i[5],b=i[9],y=i[13],C=i[2],S=i[6],w=i[10],x=i[14],I=i[3],R=i[7],D=i[11],O=i[15],k=r[0],z=r[4],H=r[8],T=r[12],A=r[1],nt=r[5],rt=r[9],j=r[13],$=r[2],et=r[6],ct=r[10],Z=r[14],q=r[3],dt=r[7],ht=r[11],J=r[15];return l[0]=h*k+u*A+f*$+m*q,l[4]=h*z+u*nt+f*et+m*dt,l[8]=h*H+u*rt+f*ct+m*ht,l[12]=h*T+u*j+f*Z+m*J,l[1]=_*k+g*A+b*$+y*q,l[5]=_*z+g*nt+b*et+y*dt,l[9]=_*H+g*rt+b*ct+y*ht,l[13]=_*T+g*j+b*Z+y*J,l[2]=C*k+S*A+w*$+x*q,l[6]=C*z+S*nt+w*et+x*dt,l[10]=C*H+S*rt+w*ct+x*ht,l[14]=C*T+S*j+w*Z+x*J,l[3]=I*k+R*A+D*$+O*q,l[7]=I*z+R*nt+D*et+O*dt,l[11]=I*H+R*rt+D*ct+O*ht,l[15]=I*T+R*j+D*Z+O*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],l=t[12],h=t[1],u=t[5],f=t[9],m=t[13],_=t[2],g=t[6],b=t[10],y=t[14],C=t[3],S=t[7],w=t[11],x=t[15];return C*(+l*f*g-r*m*g-l*u*b+i*m*b+r*u*y-i*f*y)+S*(+e*f*y-e*m*b+l*h*b-r*h*y+r*m*_-l*f*_)+w*(+e*m*g-e*u*y-l*h*g+i*h*y+l*u*_-i*m*_)+x*(-r*u*_-e*f*g+e*u*b+r*h*g-i*h*b+i*f*_)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],l=t[3],h=t[4],u=t[5],f=t[6],m=t[7],_=t[8],g=t[9],b=t[10],y=t[11],C=t[12],S=t[13],w=t[14],x=t[15],I=g*w*m-S*b*m+S*f*y-u*w*y-g*f*x+u*b*x,R=C*b*m-_*w*m-C*f*y+h*w*y+_*f*x-h*b*x,D=_*S*m-C*g*m+C*u*y-h*S*y-_*u*x+h*g*x,O=C*g*f-_*S*f-C*u*b+h*S*b+_*u*w-h*g*w,k=e*I+i*R+r*D+l*O;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return t[0]=I*z,t[1]=(S*b*l-g*w*l-S*r*y+i*w*y+g*r*x-i*b*x)*z,t[2]=(u*w*l-S*f*l+S*r*m-i*w*m-u*r*x+i*f*x)*z,t[3]=(g*f*l-u*b*l-g*r*m+i*b*m+u*r*y-i*f*y)*z,t[4]=R*z,t[5]=(_*w*l-C*b*l+C*r*y-e*w*y-_*r*x+e*b*x)*z,t[6]=(C*f*l-h*w*l-C*r*m+e*w*m+h*r*x-e*f*x)*z,t[7]=(h*b*l-_*f*l+_*r*m-e*b*m-h*r*y+e*f*y)*z,t[8]=D*z,t[9]=(C*g*l-_*S*l-C*i*y+e*S*y+_*i*x-e*g*x)*z,t[10]=(h*S*l-C*u*l+C*i*m-e*S*m-h*i*x+e*u*x)*z,t[11]=(_*u*l-h*g*l-_*i*m+e*g*m+h*i*y-e*u*y)*z,t[12]=O*z,t[13]=(_*S*r-C*g*r+C*i*b-e*S*b-_*i*w+e*g*w)*z,t[14]=(C*u*r-h*S*r-C*i*f+e*S*f+h*i*w-e*u*w)*z,t[15]=(h*g*r-_*u*r+_*i*f-e*g*f-h*i*b+e*u*b)*z,this}scale(t){const e=this.elements,i=t.x,r=t.y,l=t.z;return e[0]*=i,e[4]*=r,e[8]*=l,e[1]*=i,e[5]*=r,e[9]*=l,e[2]*=i,e[6]*=r,e[10]*=l,e[3]*=i,e[7]*=r,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),l=1-i,h=t.x,u=t.y,f=t.z,m=l*h,_=l*u;return this.set(m*h+i,m*u-r*f,m*f+r*u,0,m*u+r*f,_*u+i,_*f-r*h,0,m*f-r*u,_*f+r*h,l*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,l,h){return this.set(1,i,l,0,t,1,h,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,l=e._x,h=e._y,u=e._z,f=e._w,m=l+l,_=h+h,g=u+u,b=l*m,y=l*_,C=l*g,S=h*_,w=h*g,x=u*g,I=f*m,R=f*_,D=f*g,O=i.x,k=i.y,z=i.z;return r[0]=(1-(S+x))*O,r[1]=(y+D)*O,r[2]=(C-R)*O,r[3]=0,r[4]=(y-D)*k,r[5]=(1-(b+x))*k,r[6]=(w+I)*k,r[7]=0,r[8]=(C+R)*z,r[9]=(w-I)*z,r[10]=(1-(b+S))*z,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let l=Ns.set(r[0],r[1],r[2]).length();const h=Ns.set(r[4],r[5],r[6]).length(),u=Ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],In.copy(this);const m=1/l,_=1/h,g=1/u;return In.elements[0]*=m,In.elements[1]*=m,In.elements[2]*=m,In.elements[4]*=_,In.elements[5]*=_,In.elements[6]*=_,In.elements[8]*=g,In.elements[9]*=g,In.elements[10]*=g,e.setFromRotationMatrix(In),i.x=l,i.y=h,i.z=u,this}makePerspective(t,e,i,r,l,h,u=_i){const f=this.elements,m=2*l/(e-t),_=2*l/(i-r),g=(e+t)/(e-t),b=(i+r)/(i-r);let y,C;if(u===_i)y=-(h+l)/(h-l),C=-2*h*l/(h-l);else if(u===Ha)y=-h/(h-l),C=-h*l/(h-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=m,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=_,f[9]=b,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=C,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,r,l,h,u=_i){const f=this.elements,m=1/(e-t),_=1/(i-r),g=1/(h-l),b=(e+t)*m,y=(i+r)*_;let C,S;if(u===_i)C=(h+l)*g,S=-2*g;else if(u===Ha)C=l*g,S=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*m,f[4]=0,f[8]=0,f[12]=-b,f[1]=0,f[5]=2*_,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=S,f[14]=-C,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ns=new B,In=new qt,Yf=new B(0,0,0),$f=new B(1,1,1),Ui=new B,ya=new B,mn=new B,nh=new qt,ih=new er;class Ka{constructor(t=0,e=0,i=0,r=Ka.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,l=r[0],h=r[4],u=r[8],f=r[1],m=r[5],_=r[9],g=r[2],b=r[6],y=r[10];switch(e){case"XYZ":this._y=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,l)):(this._x=Math.atan2(b,m),this._z=0);break;case"YXZ":this._x=Math.asin(-We(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,m)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(We(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-We(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(b,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(b,m),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ih.setFromEuler(this),this.setFromQuaternion(ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ka.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zf=0;const sh=new B,Fs=new er,ui=new qt,Ma=new B,Rr=new B,Jf=new B,Qf=new er,rh=new B(1,0,0),ah=new B(0,1,0),oh=new B(0,0,1),tm={type:"added"},lh={type:"removed"};class hn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const t=new B,e=new Ka,i=new er,r=new B(1,1,1);function l(){i.setFromEuler(e,!1)}function h(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new se}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(rh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(oh,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ma.copy(t):Ma.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Rr,Ma,this.up):ui.lookAt(Ma,Rr,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(ui),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(tm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(lh)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const h=this.children[i].getObjectByProperty(t,e);if(h!==void 0)return h}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectsByProperty(t,e);h.length>0&&(i=i.concat(h))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,Jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const l=e[i];(l.matrixWorldAutoUpdate===!0||t===!0)&&l.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let l=0,h=r.length;l<h;l++){const u=r[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function l(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let m=0,_=f.length;m<_;m++){const g=f[m];l(t.shapes,g)}else l(t.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,m=this.material.length;f<m;f++)u.push(l(t.materials,this.material[f]));r.material=u}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];r.animations.push(l(t.animations,f))}}if(e){const u=h(t.geometries),f=h(t.materials),m=h(t.textures),_=h(t.images),g=h(t.shapes),b=h(t.skeletons),y=h(t.animations),C=h(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),m.length>0&&(i.textures=m),_.length>0&&(i.images=_),g.length>0&&(i.shapes=g),b.length>0&&(i.skeletons=b),y.length>0&&(i.animations=y),C.length>0&&(i.nodes=C)}return i.object=r,i;function h(u){const f=[];for(const m in u){const _=u[m];delete _.metadata,f.push(_)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new B(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new B,di=new B,tl=new B,pi=new B,Os=new B,zs=new B,ch=new B,el=new B,nl=new B,il=new B;let Sa=!1;class Vn{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Nn.subVectors(t,e),r.cross(Nn);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,e,i,r,l){Nn.subVectors(r,e),di.subVectors(i,e),tl.subVectors(t,e);const h=Nn.dot(Nn),u=Nn.dot(di),f=Nn.dot(tl),m=di.dot(di),_=di.dot(tl),g=h*m-u*u;if(g===0)return l.set(-2,-1,-1);const b=1/g,y=(m*f-u*_)*b,C=(h*_-u*f)*b;return l.set(1-y-C,C,y)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(t,e,i,r,l,h,u,f){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),this.getInterpolation(t,e,i,r,l,h,u,f)}static getInterpolation(t,e,i,r,l,h,u,f){return this.getBarycoord(t,e,i,r,pi),f.setScalar(0),f.addScaledVector(l,pi.x),f.addScaledVector(h,pi.y),f.addScaledVector(u,pi.z),f}static isFrontFacing(t,e,i,r){return Nn.subVectors(i,e),di.subVectors(t,e),Nn.cross(di).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Nn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,l){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),Vn.getInterpolation(t,this.a,this.b,this.c,e,i,r,l)}getInterpolation(t,e,i,r,l){return Vn.getInterpolation(t,this.a,this.b,this.c,e,i,r,l)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,l=this.c;let h,u;Os.subVectors(r,i),zs.subVectors(l,i),el.subVectors(t,i);const f=Os.dot(el),m=zs.dot(el);if(f<=0&&m<=0)return e.copy(i);nl.subVectors(t,r);const _=Os.dot(nl),g=zs.dot(nl);if(_>=0&&g<=_)return e.copy(r);const b=f*g-_*m;if(b<=0&&f>=0&&_<=0)return h=f/(f-_),e.copy(i).addScaledVector(Os,h);il.subVectors(t,l);const y=Os.dot(il),C=zs.dot(il);if(C>=0&&y<=C)return e.copy(l);const S=y*m-f*C;if(S<=0&&m>=0&&C<=0)return u=m/(m-C),e.copy(i).addScaledVector(zs,u);const w=_*C-y*g;if(w<=0&&g-_>=0&&y-C>=0)return ch.subVectors(l,r),u=(g-_)/(g-_+(y-C)),e.copy(r).addScaledVector(ch,u);const x=1/(w+S+b);return h=S*x,u=b*x,e.copy(i).addScaledVector(Os,h).addScaledVector(zs,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let em=0;class Kr extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Ks,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=Yh,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(l){const h=[];for(const u in l){const f=l[u];delete f.metadata,h.push(f)}return h}if(e){const l=r(t.textures),h=r(t.images);l.length>0&&(i.textures=l),h.length>0&&(i.images=h)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let l=0;l!==r;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function sl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ge{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Un.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Un.workingColorSpace){return this.r=t,this.g=e,this.b=i,Un.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Un.workingColorSpace){if(t=Dl(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,h=2*i-l;this.r=sl(h,l,t+1/3),this.g=sl(h,l,t),this.b=sl(h,l,t-1/3)}return Un.toWorkingColorSpace(this,r),this}setStyle(t,e=Qt){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const h=r[1],u=r[2];switch(h){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],h=l.length;if(h===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(h===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qt){const i=du[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}copyLinearToSRGB(t){return this.r=qo(t.r),this.g=qo(t.g),this.b=qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qt){return Un.fromWorkingColorSpace(Ye.copy(this),t),Math.round(We(Ye.r*255,0,255))*65536+Math.round(We(Ye.g*255,0,255))*256+Math.round(We(Ye.b*255,0,255))}getHexString(t=Qt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Un.workingColorSpace){Un.fromWorkingColorSpace(Ye.copy(this),e);const i=Ye.r,r=Ye.g,l=Ye.b,h=Math.max(i,r,l),u=Math.min(i,r,l);let f,m;const _=(u+h)/2;if(u===h)f=0,m=0;else{const g=h-u;switch(m=_<=.5?g/(h+u):g/(2-h-u),h){case i:f=(r-l)/g+(r<l?6:0);break;case r:f=(l-i)/g+2;break;case l:f=(i-r)/g+4;break}f/=6}return t.h=f,t.s=m,t.l=_,t}getRGB(t,e=Un.workingColorSpace){return Un.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Qt){Un.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,i=Ye.g,r=Ye.b;return t!==Qt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Fn),Fn.h+=t,Fn.s+=e,Fn.l+=i,this.setHSL(Fn.h,Fn.s,Fn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Ca);const i=Fr(Fn.h,Ca.h,e),r=Fr(Fn.s,Ca.s,e),l=Fr(Fn.l,Ca.l,e);return this.setHSL(i,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*r,this.g=l[1]*e+l[4]*i+l[7]*r,this.b=l[2]*e+l[5]*i+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new ge;ge.NAMES=du;class Nl extends Kr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new B,Ta=new pe;class Zn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zc,this.updateRange={offset:0,count:-1},this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ta.fromBufferAttribute(this,e),Ta.applyMatrix3(t),this.setXY(e,Ta.x,Ta.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,l){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array),r=on(r,this.array),l=on(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class pu extends Zn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class fu extends Zn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Hn extends Zn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let nm=0;const Cn=new qt,rl=new hn,ks=new B,_n=new nr,Lr=new nr,He=new B;class bn extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ou(t)?fu:pu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new se().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const l=t[i];e.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Hn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const l=e[i];_n.setFromBufferAttribute(l),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let l=0,h=e.length;l<h;l++){const u=e[l];Lr.setFromBufferAttribute(u),this.morphTargetsRelative?(He.addVectors(_n.min,Lr.min),_n.expandByPoint(He),He.addVectors(_n.max,Lr.max),_n.expandByPoint(He)):(_n.expandByPoint(Lr.min),_n.expandByPoint(Lr.max))}_n.getCenter(i);let r=0;for(let l=0,h=t.count;l<h;l++)He.fromBufferAttribute(t,l),r=Math.max(r,i.distanceToSquared(He));if(e)for(let l=0,h=e.length;l<h;l++){const u=e[l],f=this.morphTargetsRelative;for(let m=0,_=u.count;m<_;m++)He.fromBufferAttribute(u,m),f&&(ks.fromBufferAttribute(t,m),He.add(ks)),r=Math.max(r,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,l=e.normal.array,h=e.uv.array,u=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*u),4));const f=this.getAttribute("tangent").array,m=[],_=[];for(let A=0;A<u;A++)m[A]=new B,_[A]=new B;const g=new B,b=new B,y=new B,C=new pe,S=new pe,w=new pe,x=new B,I=new B;function R(A,nt,rt){g.fromArray(r,A*3),b.fromArray(r,nt*3),y.fromArray(r,rt*3),C.fromArray(h,A*2),S.fromArray(h,nt*2),w.fromArray(h,rt*2),b.sub(g),y.sub(g),S.sub(C),w.sub(C);const j=1/(S.x*w.y-w.x*S.y);isFinite(j)&&(x.copy(b).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(j),I.copy(y).multiplyScalar(S.x).addScaledVector(b,-w.x).multiplyScalar(j),m[A].add(x),m[nt].add(x),m[rt].add(x),_[A].add(I),_[nt].add(I),_[rt].add(I))}let D=this.groups;D.length===0&&(D=[{start:0,count:i.length}]);for(let A=0,nt=D.length;A<nt;++A){const rt=D[A],j=rt.start,$=rt.count;for(let et=j,ct=j+$;et<ct;et+=3)R(i[et+0],i[et+1],i[et+2])}const O=new B,k=new B,z=new B,H=new B;function T(A){z.fromArray(l,A*3),H.copy(z);const nt=m[A];O.copy(nt),O.sub(z.multiplyScalar(z.dot(nt))).normalize(),k.crossVectors(H,nt);const j=k.dot(_[A])<0?-1:1;f[A*4]=O.x,f[A*4+1]=O.y,f[A*4+2]=O.z,f[A*4+3]=j}for(let A=0,nt=D.length;A<nt;++A){const rt=D[A],j=rt.start,$=rt.count;for(let et=j,ct=j+$;et<ct;et+=3)T(i[et+0]),T(i[et+1]),T(i[et+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let b=0,y=i.count;b<y;b++)i.setXYZ(b,0,0,0);const r=new B,l=new B,h=new B,u=new B,f=new B,m=new B,_=new B,g=new B;if(t)for(let b=0,y=t.count;b<y;b+=3){const C=t.getX(b+0),S=t.getX(b+1),w=t.getX(b+2);r.fromBufferAttribute(e,C),l.fromBufferAttribute(e,S),h.fromBufferAttribute(e,w),_.subVectors(h,l),g.subVectors(r,l),_.cross(g),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,S),m.fromBufferAttribute(i,w),u.add(_),f.add(_),m.add(_),i.setXYZ(C,u.x,u.y,u.z),i.setXYZ(S,f.x,f.y,f.z),i.setXYZ(w,m.x,m.y,m.z)}else for(let b=0,y=e.count;b<y;b+=3)r.fromBufferAttribute(e,b+0),l.fromBufferAttribute(e,b+1),h.fromBufferAttribute(e,b+2),_.subVectors(h,l),g.subVectors(r,l),_.cross(g),i.setXYZ(b+0,_.x,_.y,_.z),i.setXYZ(b+1,_.x,_.y,_.z),i.setXYZ(b+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(u,f){const m=u.array,_=u.itemSize,g=u.normalized,b=new m.constructor(f.length*_);let y=0,C=0;for(let S=0,w=f.length;S<w;S++){u.isInterleavedBufferAttribute?y=f[S]*u.data.stride+u.offset:y=f[S]*_;for(let x=0;x<_;x++)b[C++]=m[y++]}return new Zn(b,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bn,i=this.index.array,r=this.attributes;for(const u in r){const f=r[u],m=t(f,i);e.setAttribute(u,m)}const l=this.morphAttributes;for(const u in l){const f=[],m=l[u];for(let _=0,g=m.length;_<g;_++){const b=m[_],y=t(b,i);f.push(y)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let u=0,f=h.length;u<f;u++){const m=h[u];e.addGroup(m.start,m.count,m.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const m in f)f[m]!==void 0&&(t[m]=f[m]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const f in i){const m=i[f];t.data.attributes[f]=m.toJSON(t.data)}const r={};let l=!1;for(const f in this.morphAttributes){const m=this.morphAttributes[f],_=[];for(let g=0,b=m.length;g<b;g++){const y=m[g];_.push(y.toJSON(t.data))}_.length>0&&(r[f]=_,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const m in r){const _=r[m];this.setAttribute(m,_.clone(e))}const l=t.morphAttributes;for(const m in l){const _=[],g=l[m];for(let b=0,y=g.length;b<y;b++)_.push(g[b].clone(e));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new qt,rs=new Ul,Pa=new jr,uh=new B,Vs=new B,Bs=new B,Gs=new B,al=new B,Aa=new B,Ra=new pe,La=new pe,Da=new pe,dh=new B,ph=new B,fh=new B,Ua=new B,Ia=new B;class $n extends hn{constructor(t=new bn,e=new Nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=r.length;l<h;l++){const u=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,l=i.morphAttributes.position,h=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const u=this.morphTargetInfluences;if(l&&u){Aa.set(0,0,0);for(let f=0,m=l.length;f<m;f++){const _=u[f],g=l[f];_!==0&&(al.fromBufferAttribute(g,t),h?Aa.addScaledVector(al,_):Aa.addScaledVector(al.sub(e),_))}e.add(Aa)}return e}raycast(t,e){const i=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(l),rs.copy(t.ray).recast(t.near),!(Pa.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Pa,uh)===null||rs.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(l).invert(),rs.copy(t.ray).applyMatrix4(hh),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,i){let r;const l=this.geometry,h=this.material,u=l.index,f=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,b=l.groups,y=l.drawRange;if(u!==null)if(Array.isArray(h))for(let C=0,S=b.length;C<S;C++){const w=b[C],x=h[w.materialIndex],I=Math.max(w.start,y.start),R=Math.min(u.count,Math.min(w.start+w.count,y.start+y.count));for(let D=I,O=R;D<O;D+=3){const k=u.getX(D),z=u.getX(D+1),H=u.getX(D+2);r=Na(this,x,t,i,m,_,g,k,z,H),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=w.materialIndex,e.push(r))}}else{const C=Math.max(0,y.start),S=Math.min(u.count,y.start+y.count);for(let w=C,x=S;w<x;w+=3){const I=u.getX(w),R=u.getX(w+1),D=u.getX(w+2);r=Na(this,h,t,i,m,_,g,I,R,D),r&&(r.faceIndex=Math.floor(w/3),e.push(r))}}else if(f!==void 0)if(Array.isArray(h))for(let C=0,S=b.length;C<S;C++){const w=b[C],x=h[w.materialIndex],I=Math.max(w.start,y.start),R=Math.min(f.count,Math.min(w.start+w.count,y.start+y.count));for(let D=I,O=R;D<O;D+=3){const k=D,z=D+1,H=D+2;r=Na(this,x,t,i,m,_,g,k,z,H),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=w.materialIndex,e.push(r))}}else{const C=Math.max(0,y.start),S=Math.min(f.count,y.start+y.count);for(let w=C,x=S;w<x;w+=3){const I=w,R=w+1,D=w+2;r=Na(this,h,t,i,m,_,g,I,R,D),r&&(r.faceIndex=Math.floor(w/3),e.push(r))}}}}function im(s,t,e,i,r,l,h,u){let f;if(t.side===cn?f=i.intersectTriangle(h,l,r,!0,u):f=i.intersectTriangle(r,l,h,t.side===ki,u),f===null)return null;Ia.copy(u),Ia.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Ia);return m<e.near||m>e.far?null:{distance:m,point:Ia.clone(),object:s}}function Na(s,t,e,i,r,l,h,u,f,m){s.getVertexPosition(u,Vs),s.getVertexPosition(f,Bs),s.getVertexPosition(m,Gs);const _=im(s,t,e,i,Vs,Bs,Gs,Ua);if(_){r&&(Ra.fromBufferAttribute(r,u),La.fromBufferAttribute(r,f),Da.fromBufferAttribute(r,m),_.uv=Vn.getInterpolation(Ua,Vs,Bs,Gs,Ra,La,Da,new pe)),l&&(Ra.fromBufferAttribute(l,u),La.fromBufferAttribute(l,f),Da.fromBufferAttribute(l,m),_.uv1=Vn.getInterpolation(Ua,Vs,Bs,Gs,Ra,La,Da,new pe),_.uv2=_.uv1),h&&(dh.fromBufferAttribute(h,u),ph.fromBufferAttribute(h,f),fh.fromBufferAttribute(h,m),_.normal=Vn.getInterpolation(Ua,Vs,Bs,Gs,dh,ph,fh,new B),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));const g={a:u,b:f,c:m,normal:new B,materialIndex:0};Vn.getNormal(Vs,Bs,Gs,g.normal),_.face=g}return _}class ir extends bn{constructor(t=1,e=1,i=1,r=1,l=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:l,depthSegments:h};const u=this;r=Math.floor(r),l=Math.floor(l),h=Math.floor(h);const f=[],m=[],_=[],g=[];let b=0,y=0;C("z","y","x",-1,-1,i,e,t,h,l,0),C("z","y","x",1,-1,i,e,-t,h,l,1),C("x","z","y",1,1,t,i,e,r,h,2),C("x","z","y",1,-1,t,i,-e,r,h,3),C("x","y","z",1,-1,t,e,i,r,l,4),C("x","y","z",-1,-1,t,e,-i,r,l,5),this.setIndex(f),this.setAttribute("position",new Hn(m,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(g,2));function C(S,w,x,I,R,D,O,k,z,H,T){const A=D/z,nt=O/H,rt=D/2,j=O/2,$=k/2,et=z+1,ct=H+1;let Z=0,q=0;const dt=new B;for(let ht=0;ht<ct;ht++){const J=ht*nt-j;for(let Q=0;Q<et;Q++){const gt=Q*A-rt;dt[S]=gt*I,dt[w]=J*R,dt[x]=$,m.push(dt.x,dt.y,dt.z),dt[S]=0,dt[w]=0,dt[x]=k>0?1:-1,_.push(dt.x,dt.y,dt.z),g.push(Q/z),g.push(1-ht/H),Z+=1}}for(let ht=0;ht<H;ht++)for(let J=0;J<z;J++){const Q=b+J+et*ht,gt=b+J+et*(ht+1),ut=b+(J+1)+et*(ht+1),ft=b+(J+1)+et*ht;f.push(Q,gt,ft),f.push(gt,ut,ft),q+=6}u.addGroup(y,q,T),y+=q,b+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qs(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const r=s[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Je(s){const t={};for(let e=0;e<s.length;e++){const i=Qs(s[e]);for(const r in i)t[r]=i[r]}return t}function sm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function mu(s){return s.getRenderTarget()===null?s.outputColorSpace:Jn}const _u={clone:Qs,merge:Je};var rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Kr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=sm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const h=this.uniforms[r].value;h&&h.isTexture?e.uniforms[r]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[r]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[r]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[r]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[r]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[r]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[r]={type:"m4",value:h.toArray()}:e.uniforms[r]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class vu extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends vu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,l,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Nr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,l=-.5*r;const h=this.view;if(this.view!==null&&this.view.enabled){const f=h.fullWidth,m=h.fullHeight;l+=h.offsetX*r/f,e-=h.offsetY*i/m,r*=h.width/f,i*=h.height/m}const u=this.filmOffset;u!==0&&(l+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hs=-90,Ws=1;class om extends hn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Pn(Hs,Ws,t,e);r.layers=this.layers,this.add(r);const l=new Pn(Hs,Ws,t,e);l.layers=this.layers,this.add(l);const h=new Pn(Hs,Ws,t,e);h.layers=this.layers,this.add(h);const u=new Pn(Hs,Ws,t,e);u.layers=this.layers,this.add(u);const f=new Pn(Hs,Ws,t,e);f.layers=this.layers,this.add(f);const m=new Pn(Hs,Ws,t,e);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,l,h,u,f]=e;for(const m of e)this.remove(m);if(t===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of e)this.add(m),m.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,l,h,u,f,m]=this.children,_=t.getRenderTarget(),g=t.toneMapping,b=t.xr.enabled;t.toneMapping=vi,t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,r),t.setRenderTarget(i,1),t.render(e,l),t.setRenderTarget(i,2),t.render(e,h),t.setRenderTarget(i,3),t.render(e,u),t.setRenderTarget(i,4),t.render(e,f),i.texture.generateMipmaps=y,t.setRenderTarget(i,5),t.render(e,m),t.setRenderTarget(_),t.toneMapping=g,t.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class gu extends tn{constructor(t,e,i,r,l,h,u,f,m,_){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,i,r,l,h,u,f,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lm extends fs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ds?Qt:ps),this.texture=new gu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ir(5,5,5),l=new Vi({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:zi});l.uniforms.tEquirect.value=e;const h=new $n(r,l),u=e.minFilter;return e.minFilter===Hr&&(e.minFilter=ln),new om(1,10,this).update(t,h),e.minFilter=u,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,i,r){const l=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,i,r);t.setRenderTarget(l)}}const ol=new B,cm=new B,hm=new se;class os{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ol.subVectors(i,e).cross(cm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||hm.getNormalMatrix(t),r=this.coplanarPoint(ol).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new jr,Fa=new B;class bu{constructor(t=new os,e=new os,i=new os,r=new os,l=new os,h=new os){this.planes=[t,e,i,r,l,h]}set(t,e,i,r,l,h){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(r),u[4].copy(l),u[5].copy(h),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_i){const i=this.planes,r=t.elements,l=r[0],h=r[1],u=r[2],f=r[3],m=r[4],_=r[5],g=r[6],b=r[7],y=r[8],C=r[9],S=r[10],w=r[11],x=r[12],I=r[13],R=r[14],D=r[15];if(i[0].setComponents(f-l,b-m,w-y,D-x).normalize(),i[1].setComponents(f+l,b+m,w+y,D+x).normalize(),i[2].setComponents(f+h,b+_,w+C,D+I).normalize(),i[3].setComponents(f-h,b-_,w-C,D-I).normalize(),i[4].setComponents(f-u,b-g,w-S,D-R).normalize(),e===_i)i[5].setComponents(f+u,b+g,w+S,D+R).normalize();else if(e===Ha)i[5].setComponents(u,g,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Fa.x=r.normal.x>0?t.max.x:t.min.x,Fa.y=r.normal.y>0?t.max.y:t.min.y,Fa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xu(){let s=null,t=!1,e=null,i=null;function r(l,h){e(l,h),i=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){s=l}}}function um(s,t){const e=t.isWebGL2,i=new WeakMap;function r(m,_){const g=m.array,b=m.usage,y=s.createBuffer();s.bindBuffer(_,y),s.bufferData(_,g,b),m.onUploadCallback();let C;if(g instanceof Float32Array)C=s.FLOAT;else if(g instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(e)C=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else C=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)C=s.SHORT;else if(g instanceof Uint32Array)C=s.UNSIGNED_INT;else if(g instanceof Int32Array)C=s.INT;else if(g instanceof Int8Array)C=s.BYTE;else if(g instanceof Uint8Array)C=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)C=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:C,bytesPerElement:g.BYTES_PER_ELEMENT,version:m.version}}function l(m,_,g){const b=_.array,y=_.updateRange;s.bindBuffer(g,m),y.count===-1?s.bufferSubData(g,0,b):(e?s.bufferSubData(g,y.offset*b.BYTES_PER_ELEMENT,b,y.offset,y.count):s.bufferSubData(g,y.offset*b.BYTES_PER_ELEMENT,b.subarray(y.offset,y.offset+y.count)),y.count=-1),_.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),i.get(m)}function u(m){m.isInterleavedBufferAttribute&&(m=m.data);const _=i.get(m);_&&(s.deleteBuffer(_.buffer),i.delete(m))}function f(m,_){if(m.isGLBufferAttribute){const b=i.get(m);(!b||b.version<m.version)&&i.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const g=i.get(m);g===void 0?i.set(m,r(m,_)):g.version<m.version&&(l(g.buffer,m,_),g.version=m.version)}return{get:h,remove:u,update:f}}class Ya extends bn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const l=t/2,h=e/2,u=Math.floor(i),f=Math.floor(r),m=u+1,_=f+1,g=t/u,b=e/f,y=[],C=[],S=[],w=[];for(let x=0;x<_;x++){const I=x*b-h;for(let R=0;R<m;R++){const D=R*g-l;C.push(D,-I,0),S.push(0,0,1),w.push(R/u),w.push(1-x/f)}}for(let x=0;x<f;x++)for(let I=0;I<u;I++){const R=I+m*x,D=I+m*(x+1),O=I+1+m*(x+1),k=I+1+m*x;y.push(R,D,k),y.push(D,O,k)}this.setIndex(y),this.setAttribute("position",new Hn(C,3)),this.setAttribute("normal",new Hn(S,3)),this.setAttribute("uv",new Hn(w,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.width,t.height,t.widthSegments,t.heightSegments)}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Um=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,i_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,c_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,p_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,__=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,v_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,g_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,S_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,C_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,T_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,P_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,I_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_v=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:dm,alphahash_pars_fragment:pm,alphamap_fragment:fm,alphamap_pars_fragment:mm,alphatest_fragment:_m,alphatest_pars_fragment:vm,aomap_fragment:gm,aomap_pars_fragment:bm,begin_vertex:xm,beginnormal_vertex:wm,bsdfs:Em,iridescence_fragment:ym,bumpmap_pars_fragment:Mm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:Cm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Pm,color_fragment:Am,color_pars_fragment:Rm,color_pars_vertex:Lm,color_vertex:Dm,common:Um,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Fm,displacementmap_vertex:Om,emissivemap_fragment:zm,emissivemap_pars_fragment:km,colorspace_fragment:Vm,colorspace_pars_fragment:Bm,envmap_fragment:Gm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:i_,envmap_vertex:qm,fog_vertex:jm,fog_pars_vertex:Km,fog_fragment:Ym,fog_pars_fragment:$m,gradientmap_pars_fragment:Zm,lightmap_fragment:Jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:t_,lights_lambert_pars_fragment:e_,lights_pars_begin:n_,lights_toon_fragment:s_,lights_toon_pars_fragment:r_,lights_phong_fragment:a_,lights_phong_pars_fragment:o_,lights_physical_fragment:l_,lights_physical_pars_fragment:c_,lights_fragment_begin:h_,lights_fragment_maps:u_,lights_fragment_end:d_,logdepthbuf_fragment:p_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:m_,logdepthbuf_vertex:__,map_fragment:v_,map_pars_fragment:g_,map_particle_fragment:b_,map_particle_pars_fragment:x_,metalnessmap_fragment:w_,metalnessmap_pars_fragment:E_,morphcolor_vertex:y_,morphnormal_vertex:M_,morphtarget_pars_vertex:S_,morphtarget_vertex:C_,normal_fragment_begin:T_,normal_fragment_maps:P_,normal_pars_fragment:A_,normal_pars_vertex:R_,normal_vertex:L_,normalmap_pars_fragment:D_,clearcoat_normal_fragment_begin:U_,clearcoat_normal_fragment_maps:I_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:F_,opaque_fragment:O_,packing:z_,premultiplied_alpha_fragment:k_,project_vertex:V_,dithering_fragment:B_,dithering_pars_fragment:G_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:q_,shadowmap_vertex:j_,shadowmask_pars_fragment:K_,skinbase_vertex:Y_,skinning_pars_vertex:$_,skinning_vertex:Z_,skinnormal_vertex:J_,specularmap_fragment:Q_,specularmap_pars_fragment:tv,tonemapping_fragment:ev,tonemapping_pars_fragment:nv,transmission_fragment:iv,transmission_pars_fragment:sv,uv_pars_fragment:rv,uv_pars_vertex:av,uv_vertex:ov,worldpos_vertex:lv,background_vert:cv,background_frag:hv,backgroundCube_vert:uv,backgroundCube_frag:dv,cube_vert:pv,cube_frag:fv,depth_vert:mv,depth_frag:_v,distanceRGBA_vert:vv,distanceRGBA_frag:gv,equirect_vert:bv,equirect_frag:xv,linedashed_vert:wv,linedashed_frag:Ev,meshbasic_vert:yv,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:Cv,meshmatcap_vert:Tv,meshmatcap_frag:Pv,meshnormal_vert:Av,meshnormal_frag:Rv,meshphong_vert:Lv,meshphong_frag:Dv,meshphysical_vert:Uv,meshphysical_frag:Iv,meshtoon_vert:Nv,meshtoon_frag:Fv,points_vert:Ov,points_frag:zv,shadow_vert:kv,shadow_frag:Vv,sprite_vert:Bv,sprite_frag:Gv},yt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Yn={basic:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ge(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Je([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Je([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new ge(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Je([yt.points,yt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Je([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Je([yt.common,yt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Je([yt.sprite,yt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Je([yt.common,yt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Je([yt.lights,yt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Yn.physical={uniforms:Je([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Oa={r:0,b:0,g:0};function Hv(s,t,e,i,r,l,h){const u=new ge(0);let f=l===!0?0:1,m,_,g=null,b=0,y=null;function C(w,x){let I=!1,R=x.isScene===!0?x.background:null;switch(R&&R.isTexture&&(R=(x.backgroundBlurriness>0?e:t).get(R)),R===null?S(u,f):R&&R.isColor&&(S(R,1),I=!0),s.xr.getEnvironmentBlendMode()){case"opaque":I=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,h),I=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,h),I=!0;break}(s.autoClear||I)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===ja)?(_===void 0&&(_=new $n(new ir(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Qs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,_.material.toneMapped=R.colorSpace!==Qt,(g!==R||b!==R.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,g=R,b=R.version,y=s.toneMapping),_.layers.enableAll(),w.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new $n(new Ya(2,2),new Vi({name:"BackgroundMaterial",uniforms:Qs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,m.material.toneMapped=R.colorSpace!==Qt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||b!==R.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,g=R,b=R.version,y=s.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function S(w,x){w.getRGB(Oa,mu(s)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,x,h)}return{getClearColor:function(){return u},setClearColor:function(w,x=1){u.set(w),f=x,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,S(u,f)},render:C}}function Wv(s,t,e,i){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=i.isWebGL2?null:t.get("OES_vertex_array_object"),h=i.isWebGL2||l!==null,u={},f=w(null);let m=f,_=!1;function g($,et,ct,Z,q){let dt=!1;if(h){const ht=S(Z,ct,et);m!==ht&&(m=ht,y(m.object)),dt=x($,Z,ct,q),dt&&I($,Z,ct,q)}else{const ht=et.wireframe===!0;(m.geometry!==Z.id||m.program!==ct.id||m.wireframe!==ht)&&(m.geometry=Z.id,m.program=ct.id,m.wireframe=ht,dt=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(dt||_)&&(_=!1,H($,et,ct,Z),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function b(){return i.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function y($){return i.isWebGL2?s.bindVertexArray($):l.bindVertexArrayOES($)}function C($){return i.isWebGL2?s.deleteVertexArray($):l.deleteVertexArrayOES($)}function S($,et,ct){const Z=ct.wireframe===!0;let q=u[$.id];q===void 0&&(q={},u[$.id]=q);let dt=q[et.id];dt===void 0&&(dt={},q[et.id]=dt);let ht=dt[Z];return ht===void 0&&(ht=w(b()),dt[Z]=ht),ht}function w($){const et=[],ct=[],Z=[];for(let q=0;q<r;q++)et[q]=0,ct[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:ct,attributeDivisors:Z,object:$,attributes:{},index:null}}function x($,et,ct,Z){const q=m.attributes,dt=et.attributes;let ht=0;const J=ct.getAttributes();for(const Q in J)if(J[Q].location>=0){const ut=q[Q];let ft=dt[Q];if(ft===void 0&&(Q==="instanceMatrix"&&$.instanceMatrix&&(ft=$.instanceMatrix),Q==="instanceColor"&&$.instanceColor&&(ft=$.instanceColor)),ut===void 0||ut.attribute!==ft||ft&&ut.data!==ft.data)return!0;ht++}return m.attributesNum!==ht||m.index!==Z}function I($,et,ct,Z){const q={},dt=et.attributes;let ht=0;const J=ct.getAttributes();for(const Q in J)if(J[Q].location>=0){let ut=dt[Q];ut===void 0&&(Q==="instanceMatrix"&&$.instanceMatrix&&(ut=$.instanceMatrix),Q==="instanceColor"&&$.instanceColor&&(ut=$.instanceColor));const ft={};ft.attribute=ut,ut&&ut.data&&(ft.data=ut.data),q[Q]=ft,ht++}m.attributes=q,m.attributesNum=ht,m.index=Z}function R(){const $=m.newAttributes;for(let et=0,ct=$.length;et<ct;et++)$[et]=0}function D($){O($,0)}function O($,et){const ct=m.newAttributes,Z=m.enabledAttributes,q=m.attributeDivisors;ct[$]=1,Z[$]===0&&(s.enableVertexAttribArray($),Z[$]=1),q[$]!==et&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($,et),q[$]=et)}function k(){const $=m.newAttributes,et=m.enabledAttributes;for(let ct=0,Z=et.length;ct<Z;ct++)et[ct]!==$[ct]&&(s.disableVertexAttribArray(ct),et[ct]=0)}function z($,et,ct,Z,q,dt,ht){ht===!0?s.vertexAttribIPointer($,et,ct,q,dt):s.vertexAttribPointer($,et,ct,Z,q,dt)}function H($,et,ct,Z){if(i.isWebGL2===!1&&($.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;R();const q=Z.attributes,dt=ct.getAttributes(),ht=et.defaultAttributeValues;for(const J in dt){const Q=dt[J];if(Q.location>=0){let gt=q[J];if(gt===void 0&&(J==="instanceMatrix"&&$.instanceMatrix&&(gt=$.instanceMatrix),J==="instanceColor"&&$.instanceColor&&(gt=$.instanceColor)),gt!==void 0){const ut=gt.normalized,ft=gt.itemSize,Rt=e.get(gt);if(Rt===void 0)continue;const Gt=Rt.buffer,Tt=Rt.type,re=Rt.bytesPerElement,ze=i.isWebGL2===!0&&(Tt===s.INT||Tt===s.UNSIGNED_INT||gt.gpuType===Jh);if(gt.isInterleavedBufferAttribute){const Vt=gt.data,K=Vt.stride,De=gt.offset;if(Vt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<Q.locationSize;Nt++)O(Q.location+Nt,Vt.meshPerAttribute);$.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let Nt=0;Nt<Q.locationSize;Nt++)D(Q.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let Nt=0;Nt<Q.locationSize;Nt++)z(Q.location+Nt,ft/Q.locationSize,Tt,ut,K*re,(De+ft/Q.locationSize*Nt)*re,ze)}else{if(gt.isInstancedBufferAttribute){for(let Vt=0;Vt<Q.locationSize;Vt++)O(Q.location+Vt,gt.meshPerAttribute);$.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Vt=0;Vt<Q.locationSize;Vt++)D(Q.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let Vt=0;Vt<Q.locationSize;Vt++)z(Q.location+Vt,ft/Q.locationSize,Tt,ut,ft*re,ft/Q.locationSize*Vt*re,ze)}}else if(ht!==void 0){const ut=ht[J];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(Q.location,ut);break;case 3:s.vertexAttrib3fv(Q.location,ut);break;case 4:s.vertexAttrib4fv(Q.location,ut);break;default:s.vertexAttrib1fv(Q.location,ut)}}}}k()}function T(){rt();for(const $ in u){const et=u[$];for(const ct in et){const Z=et[ct];for(const q in Z)C(Z[q].object),delete Z[q];delete et[ct]}delete u[$]}}function A($){if(u[$.id]===void 0)return;const et=u[$.id];for(const ct in et){const Z=et[ct];for(const q in Z)C(Z[q].object),delete Z[q];delete et[ct]}delete u[$.id]}function nt($){for(const et in u){const ct=u[et];if(ct[$.id]===void 0)continue;const Z=ct[$.id];for(const q in Z)C(Z[q].object),delete Z[q];delete ct[$.id]}}function rt(){j(),_=!0,m!==f&&(m=f,y(m.object))}function j(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:g,reset:rt,resetDefaultState:j,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:nt,initAttributes:R,enableAttribute:D,disableUnusedAttributes:k}}function Xv(s,t,e,i){const r=i.isWebGL2;let l;function h(m){l=m}function u(m,_){s.drawArrays(l,m,_),e.update(_,l,1)}function f(m,_,g){if(g===0)return;let b,y;if(r)b=s,y="drawArraysInstanced";else if(b=t.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",b===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[y](l,m,_,g),e.update(_,l,g)}this.setMode=h,this.render=u,this.renderInstances=f}function qv(s,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=e.precision!==void 0?e.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const m=h||t.has("WEBGL_draw_buffers"),_=e.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),C=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=b>0,D=h||t.has("OES_texture_float"),O=R&&D,k=h?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:r,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:_,maxTextures:g,maxVertexTextures:b,maxTextureSize:y,maxCubemapSize:C,maxAttributes:S,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:I,vertexTextures:R,floatFragmentTextures:D,floatVertexTextures:O,maxSamples:k}}function jv(s){const t=this;let e=null,i=0,r=!1,l=!1;const h=new os,u=new se,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,b){const y=g.length!==0||b||i!==0||r;return r=b,i=g.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,b){e=_(g,b,0)},this.setState=function(g,b,y){const C=g.clippingPlanes,S=g.clipIntersection,w=g.clipShadows,x=s.get(g);if(!r||C===null||C.length===0||l&&!w)l?_(null):m();else{const I=l?0:i,R=I*4;let D=x.clippingState||null;f.value=D,D=_(C,b,R,y);for(let O=0;O!==R;++O)D[O]=e[O];x.clippingState=D,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=I}};function m(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function _(g,b,y,C){const S=g!==null?g.length:0;let w=null;if(S!==0){if(w=f.value,C!==!0||w===null){const x=y+S*4,I=b.matrixWorldInverse;u.getNormalMatrix(I),(w===null||w.length<x)&&(w=new Float32Array(x));for(let R=0,D=y;R!==S;++R,D+=4)h.copy(g[R]).applyMatrix4(I,u),h.normal.toArray(w,D),w[D+3]=h.constant}f.value=w,f.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,w}}function Kv(s){let t=new WeakMap;function e(h,u){return u===_l?h.mapping=$s:u===vl&&(h.mapping=Zs),h}function i(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){const u=h.mapping;if(u===_l||u===vl)if(t.has(h)){const f=t.get(h).texture;return e(f,h.mapping)}else{const f=h.image;if(f&&f.height>0){const m=new lm(f.height/2);return m.fromEquirectangularTexture(s,h),t.set(h,m),h.addEventListener("dispose",r),e(m.texture,h.mapping)}else return null}}return h}function r(h){const u=h.target;u.removeEventListener("dispose",r);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function l(){t=new WeakMap}return{get:i,dispose:l}}class Yv extends vu{constructor(t=-1,e=1,i=1,r=-1,l=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=l,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,l,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=i-t,h=i+t,u=r+e,f=r-e;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,h=l+m*this.view.width,u-=_*this.view.offsetY,f=u-_*this.view.height}this.projectionMatrix.makeOrthographic(l,h,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const js=4,mh=[.125,.215,.35,.446,.526,.582],cs=20,ll=new Yv,_h=new ge;let cl=null;const ls=(1+Math.sqrt(5))/2,Xs=1/ls,vh=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ls,Xs),new B(0,ls,-Xs),new B(Xs,0,ls),new B(-Xs,0,ls),new B(ls,Xs,0),new B(-ls,Xs,0)];class gh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){cl=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cl),t.scissorTest=!1,za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cl=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Wr,format:Gn,colorSpace:Jn,depthBuffer:!1},r=bh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(t,e,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$v(l)),this._blurMaterial=Zv(l,t,e)}return r}_compileMaterial(t){const e=new $n(this._lodPlanes[0],t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,i,r){const u=new Pn(90,1,e,i),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,b=_.toneMapping;_.getClearColor(_h),_.toneMapping=vi,_.autoClear=!1;const y=new Nl({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),C=new $n(new ir,y);let S=!1;const w=t.background;w?w.isColor&&(y.color.copy(w),t.background=null,S=!0):(y.color.copy(_h),S=!0);for(let x=0;x<6;x++){const I=x%3;I===0?(u.up.set(0,f[x],0),u.lookAt(m[x],0,0)):I===1?(u.up.set(0,0,f[x]),u.lookAt(0,m[x],0)):(u.up.set(0,f[x],0),u.lookAt(0,0,m[x]));const R=this._cubeSize;za(r,I*R,x>2?R:0,R,R),_.setRenderTarget(r),S&&_.render(C,u),_.render(t,u)}C.geometry.dispose(),C.material.dispose(),_.toneMapping=b,_.autoClear=g,t.background=w}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===$s||t.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const l=r?this._cubemapMaterial:this._equirectMaterial,h=new $n(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=t;const f=this._cubeSize;za(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(h,ll)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const l=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),h=vh[(r-1)%vh.length];this._blur(t,r-1,r,l,h)}e.autoClear=i}_blur(t,e,i,r,l){const h=this._pingPongRenderTarget;this._halfBlur(t,h,e,i,r,"latitudinal",l),this._halfBlur(h,t,i,i,r,"longitudinal",l)}_halfBlur(t,e,i,r,l,h,u){const f=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new $n(this._lodPlanes[r],m),b=m.uniforms,y=this._sizeLods[i]-1,C=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*cs-1),S=l/C,w=isFinite(l)?1+Math.floor(_*S):cs;w>cs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${w} samples when the maximum is set to ${cs}`);const x=[];let I=0;for(let z=0;z<cs;++z){const H=z/S,T=Math.exp(-H*H/2);x.push(T),z===0?I+=T:z<w&&(I+=2*T)}for(let z=0;z<x.length;z++)x[z]=x[z]/I;b.envMap.value=t.texture,b.samples.value=w,b.weights.value=x,b.latitudinal.value=h==="latitudinal",u&&(b.poleAxis.value=u);const{_lodMax:R}=this;b.dTheta.value=C,b.mipInt.value=R-i;const D=this._sizeLods[r],O=3*D*(r>R-js?r-R+js:0),k=4*(this._cubeSize-D);za(e,O,k,3*D,2*D),f.setRenderTarget(e),f.render(g,ll)}}function $v(s){const t=[],e=[],i=[];let r=s;const l=s-js+1+mh.length;for(let h=0;h<l;h++){const u=Math.pow(2,r);e.push(u);let f=1/u;h>s-js?f=mh[h-s+js-1]:h===0&&(f=0),i.push(f);const m=1/(u-2),_=-m,g=1+m,b=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,C=6,S=3,w=2,x=1,I=new Float32Array(S*C*y),R=new Float32Array(w*C*y),D=new Float32Array(x*C*y);for(let k=0;k<y;k++){const z=k%3*2/3-1,H=k>2?0:-1,T=[z,H,0,z+2/3,H,0,z+2/3,H+1,0,z,H,0,z+2/3,H+1,0,z,H+1,0];I.set(T,S*C*k),R.set(b,w*C*k);const A=[k,k,k,k,k,k];D.set(A,x*C*k)}const O=new bn;O.setAttribute("position",new Zn(I,S)),O.setAttribute("uv",new Zn(R,w)),O.setAttribute("faceIndex",new Zn(D,x)),t.push(O),r>js&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function bh(s,t,e){const i=new fs(s,t,e);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function za(s,t,e,i,r){s.viewport.set(t,e,i,r),s.scissor.set(t,e,i,r)}function Zv(s,t,e){const i=new Float32Array(cs),r=new B(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function xh(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function wh(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jv(s){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const f=u.mapping,m=f===_l||f===vl,_=f===$s||f===Zs;if(m||_)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let g=t.get(u);return e===null&&(e=new gh(s)),g=m?e.fromEquirectangular(u,g):e.fromCubemap(u,g),t.set(u,g),g.texture}else{if(t.has(u))return t.get(u).texture;{const g=u.image;if(m&&g&&g.height>0||_&&g&&r(g)){e===null&&(e=new gh(s));const b=m?e.fromEquirectangular(u):e.fromCubemap(u);return t.set(u,b),u.addEventListener("dispose",l),b.texture}else return null}}}return u}function r(u){let f=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function l(u){const f=u.target;f.removeEventListener("dispose",l);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:h}}function Qv(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tg(s,t,e,i){const r={},l=new WeakMap;function h(g){const b=g.target;b.index!==null&&t.remove(b.index);for(const C in b.attributes)t.remove(b.attributes[C]);for(const C in b.morphAttributes){const S=b.morphAttributes[C];for(let w=0,x=S.length;w<x;w++)t.remove(S[w])}b.removeEventListener("dispose",h),delete r[b.id];const y=l.get(b);y&&(t.remove(y),l.delete(b)),i.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,e.memory.geometries--}function u(g,b){return r[b.id]===!0||(b.addEventListener("dispose",h),r[b.id]=!0,e.memory.geometries++),b}function f(g){const b=g.attributes;for(const C in b)t.update(b[C],s.ARRAY_BUFFER);const y=g.morphAttributes;for(const C in y){const S=y[C];for(let w=0,x=S.length;w<x;w++)t.update(S[w],s.ARRAY_BUFFER)}}function m(g){const b=[],y=g.index,C=g.attributes.position;let S=0;if(y!==null){const I=y.array;S=y.version;for(let R=0,D=I.length;R<D;R+=3){const O=I[R+0],k=I[R+1],z=I[R+2];b.push(O,k,k,z,z,O)}}else{const I=C.array;S=C.version;for(let R=0,D=I.length/3-1;R<D;R+=3){const O=R+0,k=R+1,z=R+2;b.push(O,k,k,z,z,O)}}const w=new(ou(b)?fu:pu)(b,1);w.version=S;const x=l.get(g);x&&t.remove(x),l.set(g,w)}function _(g){const b=l.get(g);if(b){const y=g.index;y!==null&&b.version<y.version&&m(g)}else m(g);return l.get(g)}return{get:u,update:f,getWireframeAttribute:_}}function eg(s,t,e,i){const r=i.isWebGL2;let l;function h(b){l=b}let u,f;function m(b){u=b.type,f=b.bytesPerElement}function _(b,y){s.drawElements(l,y,u,b*f),e.update(y,l,1)}function g(b,y,C){if(C===0)return;let S,w;if(r)S=s,w="drawElementsInstanced";else if(S=t.get("ANGLE_instanced_arrays"),w="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[w](l,y,u,b*f,C),e.update(y,l,C)}this.setMode=h,this.setIndex=m,this.render=_,this.renderInstances=g}function ng(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,h,u){switch(e.calls++,h){case s.TRIANGLES:e.triangles+=u*(l/3);break;case s.LINES:e.lines+=u*(l/2);break;case s.LINE_STRIP:e.lines+=u*(l-1);break;case s.LINE_LOOP:e.lines+=u*l;break;case s.POINTS:e.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function ig(s,t){return s[0]-t[0]}function sg(s,t){return Math.abs(t[1])-Math.abs(s[1])}function rg(s,t,e){const i={},r=new Float32Array(8),l=new WeakMap,h=new Xe,u=[];for(let m=0;m<8;m++)u[m]=[m,0];function f(m,_,g){const b=m.morphTargetInfluences;if(t.isWebGL2===!0){const C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,S=C!==void 0?C.length:0;let w=l.get(_);if(w===void 0||w.count!==S){let et=function(){j.dispose(),l.delete(_),_.removeEventListener("dispose",et)};var y=et;w!==void 0&&w.texture.dispose();const R=_.morphAttributes.position!==void 0,D=_.morphAttributes.normal!==void 0,O=_.morphAttributes.color!==void 0,k=_.morphAttributes.position||[],z=_.morphAttributes.normal||[],H=_.morphAttributes.color||[];let T=0;R===!0&&(T=1),D===!0&&(T=2),O===!0&&(T=3);let A=_.attributes.position.count*T,nt=1;A>t.maxTextureSize&&(nt=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const rt=new Float32Array(A*nt*4*S),j=new hu(rt,A,nt,S);j.type=Fi,j.needsUpdate=!0;const $=T*4;for(let ct=0;ct<S;ct++){const Z=k[ct],q=z[ct],dt=H[ct],ht=A*nt*4*ct;for(let J=0;J<Z.count;J++){const Q=J*$;R===!0&&(h.fromBufferAttribute(Z,J),rt[ht+Q+0]=h.x,rt[ht+Q+1]=h.y,rt[ht+Q+2]=h.z,rt[ht+Q+3]=0),D===!0&&(h.fromBufferAttribute(q,J),rt[ht+Q+4]=h.x,rt[ht+Q+5]=h.y,rt[ht+Q+6]=h.z,rt[ht+Q+7]=0),O===!0&&(h.fromBufferAttribute(dt,J),rt[ht+Q+8]=h.x,rt[ht+Q+9]=h.y,rt[ht+Q+10]=h.z,rt[ht+Q+11]=dt.itemSize===4?h.w:1)}}w={count:S,texture:j,size:new pe(A,nt)},l.set(_,w),_.addEventListener("dispose",et)}let x=0;for(let R=0;R<b.length;R++)x+=b[R];const I=_.morphTargetsRelative?1:1-x;g.getUniforms().setValue(s,"morphTargetBaseInfluence",I),g.getUniforms().setValue(s,"morphTargetInfluences",b),g.getUniforms().setValue(s,"morphTargetsTexture",w.texture,e),g.getUniforms().setValue(s,"morphTargetsTextureSize",w.size)}else{const C=b===void 0?0:b.length;let S=i[_.id];if(S===void 0||S.length!==C){S=[];for(let D=0;D<C;D++)S[D]=[D,0];i[_.id]=S}for(let D=0;D<C;D++){const O=S[D];O[0]=D,O[1]=b[D]}S.sort(sg);for(let D=0;D<8;D++)D<C&&S[D][1]?(u[D][0]=S[D][0],u[D][1]=S[D][1]):(u[D][0]=Number.MAX_SAFE_INTEGER,u[D][1]=0);u.sort(ig);const w=_.morphAttributes.position,x=_.morphAttributes.normal;let I=0;for(let D=0;D<8;D++){const O=u[D],k=O[0],z=O[1];k!==Number.MAX_SAFE_INTEGER&&z?(w&&_.getAttribute("morphTarget"+D)!==w[k]&&_.setAttribute("morphTarget"+D,w[k]),x&&_.getAttribute("morphNormal"+D)!==x[k]&&_.setAttribute("morphNormal"+D,x[k]),r[D]=z,I+=z):(w&&_.hasAttribute("morphTarget"+D)===!0&&_.deleteAttribute("morphTarget"+D),x&&_.hasAttribute("morphNormal"+D)===!0&&_.deleteAttribute("morphNormal"+D),r[D]=0)}const R=_.morphTargetsRelative?1:1-I;g.getUniforms().setValue(s,"morphTargetBaseInfluence",R),g.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:f}}function ag(s,t,e,i){let r=new WeakMap;function l(f){const m=i.render.frame,_=f.geometry,g=t.get(f,_);if(r.get(g)!==m&&(t.update(g),r.set(g,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),r.get(f)!==m&&(e.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,s.ARRAY_BUFFER),r.set(f,m))),f.isSkinnedMesh){const b=f.skeleton;r.get(b)!==m&&(b.update(),r.set(b,m))}return g}function h(){r=new WeakMap}function u(f){const m=f.target;m.removeEventListener("dispose",u),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:l,dispose:h}}const wu=new tn,Eu=new hu,yu=new uu,Mu=new gu,Eh=[],yh=[],Mh=new Float32Array(16),Sh=new Float32Array(9),Ch=new Float32Array(4);function sr(s,t,e){const i=s[0];if(i<=0||i>0)return s;const r=t*e;let l=Eh[r];if(l===void 0&&(l=new Float32Array(r),Eh[r]=l),t!==0){i.toArray(l,0);for(let h=1,u=0;h!==t;++h)u+=e,s[h].toArray(l,u)}return l}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ve(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function $a(s,t){let e=yh[t];e===void 0&&(e=new Int32Array(t),yh[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function og(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),Ve(e,t)}}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),Ve(e,t)}}function hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),Ve(e,t)}}function ug(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,i))return;Ch.set(i),s.uniformMatrix2fv(this.addr,!1,Ch),Ve(e,i)}}function dg(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,i))return;Sh.set(i),s.uniformMatrix3fv(this.addr,!1,Sh),Ve(e,i)}}function pg(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,i))return;Mh.set(i),s.uniformMatrix4fv(this.addr,!1,Mh),Ve(e,i)}}function fg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),Ve(e,t)}}function _g(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),Ve(e,t)}}function vg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),Ve(e,t)}}function gg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function bg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),Ve(e,t)}}function xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),Ve(e,t)}}function wg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),Ve(e,t)}}function Eg(s,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture2D(t||wu,r)}function yg(s,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||yu,r)}function Mg(s,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Mu,r)}function Sg(s,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Eu,r)}function Cg(s){switch(s){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return fg;case 35667:case 35671:return mg;case 35668:case 35672:return _g;case 35669:case 35673:return vg;case 5125:return gg;case 36294:return bg;case 36295:return xg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}function Tg(s,t){s.uniform1fv(this.addr,t)}function Pg(s,t){const e=sr(t,this.size,2);s.uniform2fv(this.addr,e)}function Ag(s,t){const e=sr(t,this.size,3);s.uniform3fv(this.addr,e)}function Rg(s,t){const e=sr(t,this.size,4);s.uniform4fv(this.addr,e)}function Lg(s,t){const e=sr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Dg(s,t){const e=sr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ug(s,t){const e=sr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ig(s,t){s.uniform1iv(this.addr,t)}function Ng(s,t){s.uniform2iv(this.addr,t)}function Fg(s,t){s.uniform3iv(this.addr,t)}function Og(s,t){s.uniform4iv(this.addr,t)}function zg(s,t){s.uniform1uiv(this.addr,t)}function kg(s,t){s.uniform2uiv(this.addr,t)}function Vg(s,t){s.uniform3uiv(this.addr,t)}function Bg(s,t){s.uniform4uiv(this.addr,t)}function Gg(s,t,e){const i=this.cache,r=t.length,l=$a(e,r);ke(i,l)||(s.uniform1iv(this.addr,l),Ve(i,l));for(let h=0;h!==r;++h)e.setTexture2D(t[h]||wu,l[h])}function Hg(s,t,e){const i=this.cache,r=t.length,l=$a(e,r);ke(i,l)||(s.uniform1iv(this.addr,l),Ve(i,l));for(let h=0;h!==r;++h)e.setTexture3D(t[h]||yu,l[h])}function Wg(s,t,e){const i=this.cache,r=t.length,l=$a(e,r);ke(i,l)||(s.uniform1iv(this.addr,l),Ve(i,l));for(let h=0;h!==r;++h)e.setTextureCube(t[h]||Mu,l[h])}function Xg(s,t,e){const i=this.cache,r=t.length,l=$a(e,r);ke(i,l)||(s.uniform1iv(this.addr,l),Ve(i,l));for(let h=0;h!==r;++h)e.setTexture2DArray(t[h]||Eu,l[h])}function qg(s){switch(s){case 5126:return Tg;case 35664:return Pg;case 35665:return Ag;case 35666:return Rg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ug;case 5124:case 35670:return Ig;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return zg;case 36294:return kg;case 36295:return Vg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}class jg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Cg(e.type)}}class Kg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=qg(e.type)}}class Yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let l=0,h=r.length;l!==h;++l){const u=r[l];u.setValue(t,e[u.id],i)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function Th(s,t){s.seq.push(t),s.map[t.id]=t}function $g(s,t,e){const i=s.name,r=i.length;for(hl.lastIndex=0;;){const l=hl.exec(i),h=hl.lastIndex;let u=l[1];const f=l[2]==="]",m=l[3];if(f&&(u=u|0),m===void 0||m==="["&&h+2===r){Th(e,m===void 0?new jg(u,s,t):new Kg(u,s,t));break}else{let g=e.map[u];g===void 0&&(g=new Yg(u),Th(e,g)),e=g}}}class Va{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const l=t.getActiveUniform(e,r),h=t.getUniformLocation(e,l.name);$g(l,h,this)}}setValue(t,e,i,r){const l=this.map[e];l!==void 0&&l.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let l=0,h=e.length;l!==h;++l){const u=e[l],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,l=t.length;r!==l;++r){const h=t[r];h.id in e&&i.push(h)}return i}}function Ph(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}let Zg=0;function Jg(s,t){const e=s.split(`
`),i=[],r=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let h=r;h<l;h++){const u=h+1;i.push(`${u===t?">":" "} ${u}: ${e[h]}`)}return i.join(`
`)}function Qg(s){switch(s){case Jn:return["Linear","( value )"];case Qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Ah(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(i&&r==="")return"";const l=/ERROR: 0:(\d+)/.exec(r);if(l){const h=parseInt(l[1]);return e.toUpperCase()+`

`+r+`

`+Jg(s.getShaderSource(t),h)}else return r}function tb(s,t){const e=Qg(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function eb(s,t){let e;switch(t){case Jp:e="Linear";break;case Qp:e="Reinhard";break;case tf:e="OptimizedCineon";break;case ef:e="ACESFilmic";break;case nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function nb(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ur).join(`
`)}function ib(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sb(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const l=s.getActiveAttrib(t,r),h=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),e[h]={type:l.type,location:s.getAttribLocation(t,h),locationSize:u}}return e}function Ur(s){return s!==""}function Rh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(s){return s.replace(rb,ob)}const ab=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ob(s,t){let e=te[t];if(e===void 0){const i=ab.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return El(e)}const lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(s){return s.replace(lb,cb)}function cb(s,t,e,i){let r="";for(let l=parseInt(t);l<parseInt(e);l++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function Uh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hb(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function ub(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $s:case Zs:t="ENVMAP_TYPE_CUBE";break;case ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function db(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function pb(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $h:t="ENVMAP_BLENDING_MULTIPLY";break;case $p:t="ENVMAP_BLENDING_MIX";break;case Zp:t="ENVMAP_BLENDING_ADD";break}return t}function fb(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function mb(s,t,e,i){const r=s.getContext(),l=e.defines;let h=e.vertexShader,u=e.fragmentShader;const f=hb(e),m=ub(e),_=db(e),g=pb(e),b=fb(e),y=e.isWebGL2?"":nb(e),C=ib(l),S=r.createProgram();let w,x,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,C].filter(Ur).join(`
`),w.length>0&&(w+=`
`),x=[y,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,C].filter(Ur).join(`
`),x.length>0&&(x+=`
`)):(w=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,C,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+_:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),x=[y,Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,C,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.envMap?"#define "+_:"",e.envMap?"#define "+g:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?te.tonemapping_pars_fragment:"",e.toneMapping!==vi?eb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,tb("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),h=El(h),h=Rh(h,e),h=Lh(h,e),u=El(u),u=Rh(u,e),u=Lh(u,e),h=Dh(h),u=Dh(u),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,w=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,x=["#define varying in",e.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=I+w+h,D=I+x+u,O=Ph(r,r.VERTEX_SHADER,R),k=Ph(r,r.FRAGMENT_SHADER,D);if(r.attachShader(S,O),r.attachShader(S,k),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S),s.debug.checkShaderErrors){const T=r.getProgramInfoLog(S).trim(),A=r.getShaderInfoLog(O).trim(),nt=r.getShaderInfoLog(k).trim();let rt=!0,j=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(rt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,S,O,k);else{const $=Ah(r,O,"vertex"),et=Ah(r,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Program Info Log: `+T+`
`+$+`
`+et)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(A===""||nt==="")&&(j=!1);j&&(this.diagnostics={runnable:rt,programLog:T,vertexShader:{log:A,prefix:w},fragmentShader:{log:nt,prefix:x}})}r.deleteShader(O),r.deleteShader(k);let z;this.getUniforms=function(){return z===void 0&&(z=new Va(r,S)),z};let H;return this.getAttributes=function(){return H===void 0&&(H=sb(r,S)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zg++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=k,this}let _b=0;class vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),l=this._getShaderStage(i),h=this._getShaderCacheForMaterial(t);return h.has(r)===!1&&(h.add(r),r.usedTimes++),h.has(l)===!1&&(h.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new gb(t),e.set(t,i)),i}}class gb{constructor(t){this.id=_b++,this.code=t,this.usedTimes=0}}function bb(s,t,e,i,r,l,h){const u=new Il,f=new vb,m=[],_=r.isWebGL2,g=r.logarithmicDepthBuffer,b=r.vertexTextures;let y=r.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return T===0?"uv":`uv${T}`}function w(T,A,nt,rt,j){const $=rt.fog,et=j.geometry,ct=T.isMeshStandardMaterial?rt.environment:null,Z=(T.isMeshStandardMaterial?e:t).get(T.envMap||ct),q=Z&&Z.mapping===ja?Z.image.height:null,dt=C[T.type];T.precision!==null&&(y=r.getMaxPrecision(T.precision),y!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const ht=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,J=ht!==void 0?ht.length:0;let Q=0;et.morphAttributes.position!==void 0&&(Q=1),et.morphAttributes.normal!==void 0&&(Q=2),et.morphAttributes.color!==void 0&&(Q=3);let gt,ut,ft,Rt;if(dt){const qe=Yn[dt];gt=qe.vertexShader,ut=qe.fragmentShader}else gt=T.vertexShader,ut=T.fragmentShader,f.update(T),ft=f.getVertexShaderID(T),Rt=f.getFragmentShaderID(T);const Gt=s.getRenderTarget(),Tt=j.isInstancedMesh===!0,re=!!T.map,ze=!!T.matcap,Vt=!!Z,K=!!T.aoMap,De=!!T.lightMap,Nt=!!T.bumpMap,Ht=!!T.normalMap,Ut=!!T.displacementMap,le=!!T.emissiveMap,ee=!!T.metalnessMap,jt=!!T.roughnessMap,ue=T.anisotropy>0,Ue=T.clearcoat>0,Ie=T.iridescence>0,N=T.sheen>0,P=T.transmission>0,st=ue&&!!T.anisotropyMap,mt=Ue&&!!T.clearcoatMap,_t=Ue&&!!T.clearcoatNormalMap,Et=Ue&&!!T.clearcoatRoughnessMap,At=Ie&&!!T.iridescenceMap,xt=Ie&&!!T.iridescenceThicknessMap,lt=N&&!!T.sheenColorMap,Lt=N&&!!T.sheenRoughnessMap,Dt=!!T.specularMap,Ot=!!T.specularColorMap,St=!!T.specularIntensityMap,Ct=P&&!!T.transmissionMap,Kt=P&&!!T.thicknessMap,fe=!!T.gradientMap,V=!!T.alphaMap,wt=T.alphaTest>0,tt=!!T.alphaHash,bt=!!T.extensions,Mt=!!et.attributes.uv1,ae=!!et.attributes.uv2,_e=!!et.attributes.uv3;return{isWebGL2:_,shaderID:dt,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:ut,defines:T.defines,customVertexShaderID:ft,customFragmentShaderID:Rt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,instancing:Tt,instancingColor:Tt&&j.instanceColor!==null,supportsVertexTextures:b,outputColorSpace:Gt===null?s.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:Jn,map:re,matcap:ze,envMap:Vt,envMapMode:Vt&&Z.mapping,envMapCubeUVHeight:q,aoMap:K,lightMap:De,bumpMap:Nt,normalMap:Ht,displacementMap:b&&Ut,emissiveMap:le,normalMapObjectSpace:Ht&&T.normalMapType===_f,normalMapTangentSpace:Ht&&T.normalMapType===mf,metalnessMap:ee,roughnessMap:jt,anisotropy:ue,anisotropyMap:st,clearcoat:Ue,clearcoatMap:mt,clearcoatNormalMap:_t,clearcoatRoughnessMap:Et,iridescence:Ie,iridescenceMap:At,iridescenceThicknessMap:xt,sheen:N,sheenColorMap:lt,sheenRoughnessMap:Lt,specularMap:Dt,specularColorMap:Ot,specularIntensityMap:St,transmission:P,transmissionMap:Ct,thicknessMap:Kt,gradientMap:fe,opaque:T.transparent===!1&&T.blending===Ks,alphaMap:V,alphaTest:wt,alphaHash:tt,combine:T.combine,mapUv:re&&S(T.map.channel),aoMapUv:K&&S(T.aoMap.channel),lightMapUv:De&&S(T.lightMap.channel),bumpMapUv:Nt&&S(T.bumpMap.channel),normalMapUv:Ht&&S(T.normalMap.channel),displacementMapUv:Ut&&S(T.displacementMap.channel),emissiveMapUv:le&&S(T.emissiveMap.channel),metalnessMapUv:ee&&S(T.metalnessMap.channel),roughnessMapUv:jt&&S(T.roughnessMap.channel),anisotropyMapUv:st&&S(T.anisotropyMap.channel),clearcoatMapUv:mt&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:_t&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&S(T.sheenRoughnessMap.channel),specularMapUv:Dt&&S(T.specularMap.channel),specularColorMapUv:Ot&&S(T.specularColorMap.channel),specularIntensityMapUv:St&&S(T.specularIntensityMap.channel),transmissionMapUv:Ct&&S(T.transmissionMap.channel),thicknessMapUv:Kt&&S(T.thicknessMap.channel),alphaMapUv:V&&S(T.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Ht||ue),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,vertexUv1s:Mt,vertexUv2s:ae,vertexUv3s:_e,pointsUvs:j.isPoints===!0&&!!et.attributes.uv&&(re||V),fog:!!$,useFog:T.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:j.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&nt.length>0,shadowMapType:s.shadowMap.type,toneMapping:T.toneMapped?s.toneMapping:vi,useLegacyLights:s.useLegacyLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bn,flipSided:T.side===cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:bt&&T.extensions.derivatives===!0,extensionFragDepth:bt&&T.extensions.fragDepth===!0,extensionDrawBuffers:bt&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function x(T){const A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(const nt in T.defines)A.push(nt),A.push(T.defines[nt]);return T.isRawShaderMaterial===!1&&(I(A,T),R(A,T),A.push(s.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function I(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapCubeUVHeight),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.morphAttributeCount),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function R(T,A){u.disableAll(),A.isWebGL2&&u.enable(0),A.supportsVertexTextures&&u.enable(1),A.instancing&&u.enable(2),A.instancingColor&&u.enable(3),A.matcap&&u.enable(4),A.envMap&&u.enable(5),A.normalMapObjectSpace&&u.enable(6),A.normalMapTangentSpace&&u.enable(7),A.clearcoat&&u.enable(8),A.iridescence&&u.enable(9),A.alphaTest&&u.enable(10),A.vertexColors&&u.enable(11),A.vertexAlphas&&u.enable(12),A.vertexUv1s&&u.enable(13),A.vertexUv2s&&u.enable(14),A.vertexUv3s&&u.enable(15),A.vertexTangents&&u.enable(16),A.anisotropy&&u.enable(17),T.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.skinning&&u.enable(4),A.morphTargets&&u.enable(5),A.morphNormals&&u.enable(6),A.morphColors&&u.enable(7),A.premultipliedAlpha&&u.enable(8),A.shadowMapEnabled&&u.enable(9),A.useLegacyLights&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),T.push(u.mask)}function D(T){const A=C[T.type];let nt;if(A){const rt=Yn[A];nt=_u.clone(rt.uniforms)}else nt=T.uniforms;return nt}function O(T,A){let nt;for(let rt=0,j=m.length;rt<j;rt++){const $=m[rt];if($.cacheKey===A){nt=$,++nt.usedTimes;break}}return nt===void 0&&(nt=new mb(s,A,T,l),m.push(nt)),nt}function k(T){if(--T.usedTimes===0){const A=m.indexOf(T);m[A]=m[m.length-1],m.pop(),T.destroy()}}function z(T){f.remove(T)}function H(){f.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:D,acquireProgram:O,releaseProgram:k,releaseShaderCache:z,programs:m,dispose:H}}function xb(){let s=new WeakMap;function t(l){let h=s.get(l);return h===void 0&&(h={},s.set(l,h)),h}function e(l){s.delete(l)}function i(l,h,u){s.get(l)[h]=u}function r(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function wb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ih(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Nh(){const s=[];let t=0;const e=[],i=[],r=[];function l(){t=0,e.length=0,i.length=0,r.length=0}function h(g,b,y,C,S,w){let x=s[t];return x===void 0?(x={id:g.id,object:g,geometry:b,material:y,groupOrder:C,renderOrder:g.renderOrder,z:S,group:w},s[t]=x):(x.id=g.id,x.object=g,x.geometry=b,x.material=y,x.groupOrder=C,x.renderOrder=g.renderOrder,x.z=S,x.group=w),t++,x}function u(g,b,y,C,S,w){const x=h(g,b,y,C,S,w);y.transmission>0?i.push(x):y.transparent===!0?r.push(x):e.push(x)}function f(g,b,y,C,S,w){const x=h(g,b,y,C,S,w);y.transmission>0?i.unshift(x):y.transparent===!0?r.unshift(x):e.unshift(x)}function m(g,b){e.length>1&&e.sort(g||wb),i.length>1&&i.sort(b||Ih),r.length>1&&r.sort(b||Ih)}function _(){for(let g=t,b=s.length;g<b;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:r,init:l,push:u,unshift:f,finish:_,sort:m}}function Eb(){let s=new WeakMap;function t(i,r){const l=s.get(i);let h;return l===void 0?(h=new Nh,s.set(i,[h])):r>=l.length?(h=new Nh,l.push(h)):h=l[r],h}function e(){s=new WeakMap}return{get:t,dispose:e}}function yb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new ge};break;case"SpotLight":e={position:new B,direction:new B,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function Mb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Sb=0;function Cb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Tb(s,t){const e=new yb,i=Mb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let _=0;_<9;_++)r.probe.push(new B);const l=new B,h=new qt,u=new qt;function f(_,g){let b=0,y=0,C=0;for(let nt=0;nt<9;nt++)r.probe[nt].set(0,0,0);let S=0,w=0,x=0,I=0,R=0,D=0,O=0,k=0,z=0,H=0;_.sort(Cb);const T=g===!0?Math.PI:1;for(let nt=0,rt=_.length;nt<rt;nt++){const j=_[nt],$=j.color,et=j.intensity,ct=j.distance,Z=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)b+=$.r*et*T,y+=$.g*et*T,C+=$.b*et*T;else if(j.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(j.sh.coefficients[q],et);else if(j.isDirectionalLight){const q=e.get(j);if(q.color.copy(j.color).multiplyScalar(j.intensity*T),j.castShadow){const dt=j.shadow,ht=i.get(j);ht.shadowBias=dt.bias,ht.shadowNormalBias=dt.normalBias,ht.shadowRadius=dt.radius,ht.shadowMapSize=dt.mapSize,r.directionalShadow[S]=ht,r.directionalShadowMap[S]=Z,r.directionalShadowMatrix[S]=j.shadow.matrix,D++}r.directional[S]=q,S++}else if(j.isSpotLight){const q=e.get(j);q.position.setFromMatrixPosition(j.matrixWorld),q.color.copy($).multiplyScalar(et*T),q.distance=ct,q.coneCos=Math.cos(j.angle),q.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),q.decay=j.decay,r.spot[x]=q;const dt=j.shadow;if(j.map&&(r.spotLightMap[z]=j.map,z++,dt.updateMatrices(j),j.castShadow&&H++),r.spotLightMatrix[x]=dt.matrix,j.castShadow){const ht=i.get(j);ht.shadowBias=dt.bias,ht.shadowNormalBias=dt.normalBias,ht.shadowRadius=dt.radius,ht.shadowMapSize=dt.mapSize,r.spotShadow[x]=ht,r.spotShadowMap[x]=Z,k++}x++}else if(j.isRectAreaLight){const q=e.get(j);q.color.copy($).multiplyScalar(et),q.halfWidth.set(j.width*.5,0,0),q.halfHeight.set(0,j.height*.5,0),r.rectArea[I]=q,I++}else if(j.isPointLight){const q=e.get(j);if(q.color.copy(j.color).multiplyScalar(j.intensity*T),q.distance=j.distance,q.decay=j.decay,j.castShadow){const dt=j.shadow,ht=i.get(j);ht.shadowBias=dt.bias,ht.shadowNormalBias=dt.normalBias,ht.shadowRadius=dt.radius,ht.shadowMapSize=dt.mapSize,ht.shadowCameraNear=dt.camera.near,ht.shadowCameraFar=dt.camera.far,r.pointShadow[w]=ht,r.pointShadowMap[w]=Z,r.pointShadowMatrix[w]=j.shadow.matrix,O++}r.point[w]=q,w++}else if(j.isHemisphereLight){const q=e.get(j);q.skyColor.copy(j.color).multiplyScalar(et*T),q.groundColor.copy(j.groundColor).multiplyScalar(et*T),r.hemi[R]=q,R++}}I>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=yt.LTC_FLOAT_1,r.rectAreaLTC2=yt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=yt.LTC_HALF_1,r.rectAreaLTC2=yt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=b,r.ambient[1]=y,r.ambient[2]=C;const A=r.hash;(A.directionalLength!==S||A.pointLength!==w||A.spotLength!==x||A.rectAreaLength!==I||A.hemiLength!==R||A.numDirectionalShadows!==D||A.numPointShadows!==O||A.numSpotShadows!==k||A.numSpotMaps!==z)&&(r.directional.length=S,r.spot.length=x,r.rectArea.length=I,r.point.length=w,r.hemi.length=R,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=k,r.spotShadowMap.length=k,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=k+z-H,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=H,A.directionalLength=S,A.pointLength=w,A.spotLength=x,A.rectAreaLength=I,A.hemiLength=R,A.numDirectionalShadows=D,A.numPointShadows=O,A.numSpotShadows=k,A.numSpotMaps=z,r.version=Sb++)}function m(_,g){let b=0,y=0,C=0,S=0,w=0;const x=g.matrixWorldInverse;for(let I=0,R=_.length;I<R;I++){const D=_[I];if(D.isDirectionalLight){const O=r.directional[b];O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(x),b++}else if(D.isSpotLight){const O=r.spot[C];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(x),C++}else if(D.isRectAreaLight){const O=r.rectArea[S];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),u.identity(),h.copy(D.matrixWorld),h.premultiply(x),u.extractRotation(h),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),S++}else if(D.isPointLight){const O=r.point[y];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),y++}else if(D.isHemisphereLight){const O=r.hemi[w];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(x),w++}}}return{setup:f,setupView:m,state:r}}function Fh(s,t){const e=new Tb(s,t),i=[],r=[];function l(){i.length=0,r.length=0}function h(g){i.push(g)}function u(g){r.push(g)}function f(g){e.setup(i,g)}function m(g){e.setupView(i,g)}return{init:l,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:f,setupLightsView:m,pushLight:h,pushShadow:u}}function Pb(s,t){let e=new WeakMap;function i(l,h=0){const u=e.get(l);let f;return u===void 0?(f=new Fh(s,t),e.set(l,[f])):h>=u.length?(f=new Fh(s,t),u.push(f)):f=u[h],f}function r(){e=new WeakMap}return{get:i,dispose:r}}class Ab extends Kr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rb extends Kr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Db=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ub(s,t,e){let i=new bu;const r=new pe,l=new pe,h=new Xe,u=new Ab({depthPacking:ff}),f=new Rb,m={},_=e.maxTextureSize,g={[ki]:cn,[cn]:ki,[Bn]:Bn},b=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Lb,fragmentShader:Db}),y=b.clone();y.defines.HORIZONTAL_PASS=1;const C=new bn;C.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new $n(C,b),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let x=this.type;this.render=function(O,k,z){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||O.length===0)return;const H=s.getRenderTarget(),T=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),nt=s.state;nt.setBlending(zi),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const rt=x!==mi&&this.type===mi,j=x===mi&&this.type!==mi;for(let $=0,et=O.length;$<et;$++){const ct=O[$],Z=ct.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const q=Z.getFrameExtents();if(r.multiply(q),l.copy(Z.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(l.x=Math.floor(_/q.x),r.x=l.x*q.x,Z.mapSize.x=l.x),r.y>_&&(l.y=Math.floor(_/q.y),r.y=l.y*q.y,Z.mapSize.y=l.y)),Z.map===null||rt===!0||j===!0){const ht=this.type!==mi?{minFilter:Qe,magFilter:Qe}:{};Z.map!==null&&Z.map.dispose(),Z.map=new fs(r.x,r.y,ht),Z.map.texture.name=ct.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const dt=Z.getViewportCount();for(let ht=0;ht<dt;ht++){const J=Z.getViewport(ht);h.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),nt.viewport(h),Z.updateMatrices(ct,ht),i=Z.getFrustum(),D(k,z,Z.camera,ct,this.type)}Z.isPointLightShadow!==!0&&this.type===mi&&I(Z,z),Z.needsUpdate=!1}x=this.type,w.needsUpdate=!1,s.setRenderTarget(H,T,A)};function I(O,k){const z=t.update(S);b.defines.VSM_SAMPLES!==O.blurSamples&&(b.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,b.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new fs(r.x,r.y)),b.uniforms.shadow_pass.value=O.map.texture,b.uniforms.resolution.value=O.mapSize,b.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(k,null,z,b,S,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(k,null,z,y,S,null)}function R(O,k,z,H){let T=null;const A=z.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(A!==void 0)T=A;else if(T=z.isPointLight===!0?f:u,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const nt=T.uuid,rt=k.uuid;let j=m[nt];j===void 0&&(j={},m[nt]=j);let $=j[rt];$===void 0&&($=T.clone(),j[rt]=$),T=$}if(T.visible=k.visible,T.wireframe=k.wireframe,H===mi?T.side=k.shadowSide!==null?k.shadowSide:k.side:T.side=k.shadowSide!==null?k.shadowSide:g[k.side],T.alphaMap=k.alphaMap,T.alphaTest=k.alphaTest,T.map=k.map,T.clipShadows=k.clipShadows,T.clippingPlanes=k.clippingPlanes,T.clipIntersection=k.clipIntersection,T.displacementMap=k.displacementMap,T.displacementScale=k.displacementScale,T.displacementBias=k.displacementBias,T.wireframeLinewidth=k.wireframeLinewidth,T.linewidth=k.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const nt=s.properties.get(T);nt.light=z}return T}function D(O,k,z,H,T){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===mi)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,O.matrixWorld);const rt=t.update(O),j=O.material;if(Array.isArray(j)){const $=rt.groups;for(let et=0,ct=$.length;et<ct;et++){const Z=$[et],q=j[Z.materialIndex];if(q&&q.visible){const dt=R(O,q,H,T);s.renderBufferDirect(z,null,rt,dt,O,Z)}}}else if(j.visible){const $=R(O,j,H,T);s.renderBufferDirect(z,null,rt,$,O,null)}}const nt=O.children;for(let rt=0,j=nt.length;rt<j;rt++)D(nt[rt],k,z,H,T)}}function Ib(s,t,e){const i=e.isWebGL2;function r(){let V=!1;const wt=new Xe;let tt=null;const bt=new Xe(0,0,0,0);return{setMask:function(Mt){tt!==Mt&&!V&&(s.colorMask(Mt,Mt,Mt,Mt),tt=Mt)},setLocked:function(Mt){V=Mt},setClear:function(Mt,ae,_e,be,qe){qe===!0&&(Mt*=be,ae*=be,_e*=be),wt.set(Mt,ae,_e,be),bt.equals(wt)===!1&&(s.clearColor(Mt,ae,_e,be),bt.copy(wt))},reset:function(){V=!1,tt=null,bt.set(-1,0,0,0)}}}function l(){let V=!1,wt=null,tt=null,bt=null;return{setTest:function(Mt){Mt?Gt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(Mt){wt!==Mt&&!V&&(s.depthMask(Mt),wt=Mt)},setFunc:function(Mt){if(tt!==Mt){switch(Mt){case Hp:s.depthFunc(s.NEVER);break;case Wp:s.depthFunc(s.ALWAYS);break;case Xp:s.depthFunc(s.LESS);break;case ml:s.depthFunc(s.LEQUAL);break;case qp:s.depthFunc(s.EQUAL);break;case jp:s.depthFunc(s.GEQUAL);break;case Kp:s.depthFunc(s.GREATER);break;case Yp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=Mt}},setLocked:function(Mt){V=Mt},setClear:function(Mt){bt!==Mt&&(s.clearDepth(Mt),bt=Mt)},reset:function(){V=!1,wt=null,tt=null,bt=null}}}function h(){let V=!1,wt=null,tt=null,bt=null,Mt=null,ae=null,_e=null,be=null,qe=null;return{setTest:function(ne){V||(ne?Gt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(ne){wt!==ne&&!V&&(s.stencilMask(ne),wt=ne)},setFunc:function(ne,je,xe){(tt!==ne||bt!==je||Mt!==xe)&&(s.stencilFunc(ne,je,xe),tt=ne,bt=je,Mt=xe)},setOp:function(ne,je,xe){(ae!==ne||_e!==je||be!==xe)&&(s.stencilOp(ne,je,xe),ae=ne,_e=je,be=xe)},setLocked:function(ne){V=ne},setClear:function(ne){qe!==ne&&(s.clearStencil(ne),qe=ne)},reset:function(){V=!1,wt=null,tt=null,bt=null,Mt=null,ae=null,_e=null,be=null,qe=null}}}const u=new r,f=new l,m=new h,_=new WeakMap,g=new WeakMap;let b={},y={},C=new WeakMap,S=[],w=null,x=!1,I=null,R=null,D=null,O=null,k=null,z=null,H=null,T=!1,A=null,nt=null,rt=null,j=null,$=null;const et=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ct=!1,Z=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),ct=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ct=Z>=2);let dt=null,ht={};const J=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),gt=new Xe().fromArray(J),ut=new Xe().fromArray(Q);function ft(V,wt,tt,bt){const Mt=new Uint8Array(4),ae=s.createTexture();s.bindTexture(V,ae),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _e=0;_e<tt;_e++)i&&(V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY)?s.texImage3D(wt,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(wt+_e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return ae}const Rt={};Rt[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Rt[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),f.setClear(1),m.setClear(0),Gt(s.DEPTH_TEST),f.setFunc(ml),Ut(!1),le(wc),Gt(s.CULL_FACE),Nt(zi);function Gt(V){b[V]!==!0&&(s.enable(V),b[V]=!0)}function Tt(V){b[V]!==!1&&(s.disable(V),b[V]=!1)}function re(V,wt){return y[V]!==wt?(s.bindFramebuffer(V,wt),y[V]=wt,i&&(V===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=wt),V===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=wt)),!0):!1}function ze(V,wt){let tt=S,bt=!1;if(V)if(tt=C.get(wt),tt===void 0&&(tt=[],C.set(wt,tt)),V.isWebGLMultipleRenderTargets){const Mt=V.texture;if(tt.length!==Mt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,_e=Mt.length;ae<_e;ae++)tt[ae]=s.COLOR_ATTACHMENT0+ae;tt.length=Mt.length,bt=!0}}else tt[0]!==s.COLOR_ATTACHMENT0&&(tt[0]=s.COLOR_ATTACHMENT0,bt=!0);else tt[0]!==s.BACK&&(tt[0]=s.BACK,bt=!0);bt&&(e.isWebGL2?s.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function Vt(V){return w!==V?(s.useProgram(V),w=V,!0):!1}const K={[qs]:s.FUNC_ADD,[Dp]:s.FUNC_SUBTRACT,[Up]:s.FUNC_REVERSE_SUBTRACT};if(i)K[Sc]=s.MIN,K[Cc]=s.MAX;else{const V=t.get("EXT_blend_minmax");V!==null&&(K[Sc]=V.MIN_EXT,K[Cc]=V.MAX_EXT)}const De={[Ip]:s.ZERO,[Np]:s.ONE,[Fp]:s.SRC_COLOR,[Kh]:s.SRC_ALPHA,[Gp]:s.SRC_ALPHA_SATURATE,[Vp]:s.DST_COLOR,[zp]:s.DST_ALPHA,[Op]:s.ONE_MINUS_SRC_COLOR,[Yh]:s.ONE_MINUS_SRC_ALPHA,[Bp]:s.ONE_MINUS_DST_COLOR,[kp]:s.ONE_MINUS_DST_ALPHA};function Nt(V,wt,tt,bt,Mt,ae,_e,be){if(V===zi){x===!0&&(Tt(s.BLEND),x=!1);return}if(x===!1&&(Gt(s.BLEND),x=!0),V!==Lp){if(V!==I||be!==T){if((R!==qs||k!==qs)&&(s.blendEquation(s.FUNC_ADD),R=qs,k=qs),be)switch(V){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ec:s.blendFunc(s.ONE,s.ONE);break;case yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ec:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}D=null,O=null,z=null,H=null,I=V,T=be}return}Mt=Mt||wt,ae=ae||tt,_e=_e||bt,(wt!==R||Mt!==k)&&(s.blendEquationSeparate(K[wt],K[Mt]),R=wt,k=Mt),(tt!==D||bt!==O||ae!==z||_e!==H)&&(s.blendFuncSeparate(De[tt],De[bt],De[ae],De[_e]),D=tt,O=bt,z=ae,H=_e),I=V,T=!1}function Ht(V,wt){V.side===Bn?Tt(s.CULL_FACE):Gt(s.CULL_FACE);let tt=V.side===cn;wt&&(tt=!tt),Ut(tt),V.blending===Ks&&V.transparent===!1?Nt(zi):Nt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const bt=V.stencilWrite;m.setTest(bt),bt&&(m.setMask(V.stencilWriteMask),m.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),m.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),jt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Gt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(V){A!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),A=V)}function le(V){V!==Pp?(Gt(s.CULL_FACE),V!==nt&&(V===wc?s.cullFace(s.BACK):V===Ap?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),nt=V}function ee(V){V!==rt&&(ct&&s.lineWidth(V),rt=V)}function jt(V,wt,tt){V?(Gt(s.POLYGON_OFFSET_FILL),(j!==wt||$!==tt)&&(s.polygonOffset(wt,tt),j=wt,$=tt)):Tt(s.POLYGON_OFFSET_FILL)}function ue(V){V?Gt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function Ue(V){V===void 0&&(V=s.TEXTURE0+et-1),dt!==V&&(s.activeTexture(V),dt=V)}function Ie(V,wt,tt){tt===void 0&&(dt===null?tt=s.TEXTURE0+et-1:tt=dt);let bt=ht[tt];bt===void 0&&(bt={type:void 0,texture:void 0},ht[tt]=bt),(bt.type!==V||bt.texture!==wt)&&(dt!==tt&&(s.activeTexture(tt),dt=tt),s.bindTexture(V,wt||Rt[V]),bt.type=V,bt.texture=wt)}function N(){const V=ht[dt];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function P(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(V){gt.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),gt.copy(V))}function St(V){ut.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),ut.copy(V))}function Ct(V,wt){let tt=g.get(wt);tt===void 0&&(tt=new WeakMap,g.set(wt,tt));let bt=tt.get(V);bt===void 0&&(bt=s.getUniformBlockIndex(wt,V.name),tt.set(V,bt))}function Kt(V,wt){const bt=g.get(wt).get(V);_.get(wt)!==bt&&(s.uniformBlockBinding(wt,bt,V.__bindingPointIndex),_.set(wt,bt))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),b={},dt=null,ht={},y={},C=new WeakMap,S=[],w=null,x=!1,I=null,R=null,D=null,O=null,k=null,z=null,H=null,T=!1,A=null,nt=null,rt=null,j=null,$=null,gt.set(0,0,s.canvas.width,s.canvas.height),ut.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),m.reset()}return{buffers:{color:u,depth:f,stencil:m},enable:Gt,disable:Tt,bindFramebuffer:re,drawBuffers:ze,useProgram:Vt,setBlending:Nt,setMaterial:Ht,setFlipSided:Ut,setCullFace:le,setLineWidth:ee,setPolygonOffset:jt,setScissorTest:ue,activeTexture:Ue,bindTexture:Ie,unbindTexture:N,compressedTexImage2D:P,compressedTexImage3D:st,texImage2D:Lt,texImage3D:Dt,updateUBOMapping:Ct,uniformBlockBinding:Kt,texStorage2D:xt,texStorage3D:lt,texSubImage2D:mt,texSubImage3D:_t,compressedTexSubImage2D:Et,compressedTexSubImage3D:At,scissor:Ot,viewport:St,reset:fe}}function Nb(s,t,e,i,r,l,h){const u=r.isWebGL2,f=r.maxTextures,m=r.maxCubemapSize,_=r.maxTextureSize,g=r.maxSamples,b=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),C=new WeakMap;let S;const w=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(N,P){return x?new OffscreenCanvas(N,P):qr("canvas")}function R(N,P,st,mt){let _t=1;if((N.width>mt||N.height>mt)&&(_t=mt/Math.max(N.width,N.height)),_t<1||P===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Et=P?Wa:Math.floor,At=Et(_t*N.width),xt=Et(_t*N.height);S===void 0&&(S=I(At,xt));const lt=st?I(At,xt):S;return lt.width=At,lt.height=xt,lt.getContext("2d").drawImage(N,0,0,At,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+At+"x"+xt+")."),lt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function D(N){return wl(N.width)&&wl(N.height)}function O(N){return u?!1:N.wrapS!==An||N.wrapT!==An||N.minFilter!==Qe&&N.minFilter!==ln}function k(N,P){return N.generateMipmaps&&P&&N.minFilter!==Qe&&N.minFilter!==ln}function z(N){s.generateMipmap(N)}function H(N,P,st,mt,_t=!1){if(u===!1)return P;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Et=P;return P===s.RED&&(st===s.FLOAT&&(Et=s.R32F),st===s.HALF_FLOAT&&(Et=s.R16F),st===s.UNSIGNED_BYTE&&(Et=s.R8)),P===s.RG&&(st===s.FLOAT&&(Et=s.RG32F),st===s.HALF_FLOAT&&(Et=s.RG16F),st===s.UNSIGNED_BYTE&&(Et=s.RG8)),P===s.RGBA&&(st===s.FLOAT&&(Et=s.RGBA32F),st===s.HALF_FLOAT&&(Et=s.RGBA16F),st===s.UNSIGNED_BYTE&&(Et=mt===Qt&&_t===!1?s.SRGB8_ALPHA8:s.RGBA8),st===s.UNSIGNED_SHORT_4_4_4_4&&(Et=s.RGBA4),st===s.UNSIGNED_SHORT_5_5_5_1&&(Et=s.RGB5_A1)),(Et===s.R16F||Et===s.R32F||Et===s.RG16F||Et===s.RG32F||Et===s.RGBA16F||Et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Et}function T(N,P,st){return k(N,st)===!0||N.isFramebufferTexture&&N.minFilter!==Qe&&N.minFilter!==ln?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function A(N){return N===Qe||N===Tc||N===zo?s.NEAREST:s.LINEAR}function nt(N){const P=N.target;P.removeEventListener("dispose",nt),j(P),P.isVideoTexture&&C.delete(P)}function rt(N){const P=N.target;P.removeEventListener("dispose",rt),et(P)}function j(N){const P=i.get(N);if(P.__webglInit===void 0)return;const st=N.source,mt=w.get(st);if(mt){const _t=mt[P.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&$(N),Object.keys(mt).length===0&&w.delete(st)}i.remove(N)}function $(N){const P=i.get(N);s.deleteTexture(P.__webglTexture);const st=N.source,mt=w.get(st);delete mt[P.__cacheKey],h.memory.textures--}function et(N){const P=N.texture,st=i.get(N),mt=i.get(P);if(mt.__webglTexture!==void 0&&(s.deleteTexture(mt.__webglTexture),h.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++)s.deleteFramebuffer(st.__webglFramebuffer[_t]),st.__webglDepthbuffer&&s.deleteRenderbuffer(st.__webglDepthbuffer[_t]);else{if(s.deleteFramebuffer(st.__webglFramebuffer),st.__webglDepthbuffer&&s.deleteRenderbuffer(st.__webglDepthbuffer),st.__webglMultisampledFramebuffer&&s.deleteFramebuffer(st.__webglMultisampledFramebuffer),st.__webglColorRenderbuffer)for(let _t=0;_t<st.__webglColorRenderbuffer.length;_t++)st.__webglColorRenderbuffer[_t]&&s.deleteRenderbuffer(st.__webglColorRenderbuffer[_t]);st.__webglDepthRenderbuffer&&s.deleteRenderbuffer(st.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let _t=0,Et=P.length;_t<Et;_t++){const At=i.get(P[_t]);At.__webglTexture&&(s.deleteTexture(At.__webglTexture),h.memory.textures--),i.remove(P[_t])}i.remove(P),i.remove(N)}let ct=0;function Z(){ct=0}function q(){const N=ct;return N>=f&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+f),ct+=1,N}function dt(N){const P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function ht(N,P){const st=i.get(N);if(N.isVideoTexture&&Ue(N),N.isRenderTargetTexture===!1&&N.version>0&&st.__version!==N.version){const mt=N.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(st,N,P);return}}e.bindTexture(s.TEXTURE_2D,st.__webglTexture,s.TEXTURE0+P)}function J(N,P){const st=i.get(N);if(N.version>0&&st.__version!==N.version){re(st,N,P);return}e.bindTexture(s.TEXTURE_2D_ARRAY,st.__webglTexture,s.TEXTURE0+P)}function Q(N,P){const st=i.get(N);if(N.version>0&&st.__version!==N.version){re(st,N,P);return}e.bindTexture(s.TEXTURE_3D,st.__webglTexture,s.TEXTURE0+P)}function gt(N,P){const st=i.get(N);if(N.version>0&&st.__version!==N.version){ze(st,N,P);return}e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture,s.TEXTURE0+P)}const ut={[gl]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[bl]:s.MIRRORED_REPEAT},ft={[Qe]:s.NEAREST,[Tc]:s.NEAREST_MIPMAP_NEAREST,[zo]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[sf]:s.LINEAR_MIPMAP_NEAREST,[Hr]:s.LINEAR_MIPMAP_LINEAR},Rt={[gf]:s.NEVER,[Sf]:s.ALWAYS,[bf]:s.LESS,[wf]:s.LEQUAL,[xf]:s.EQUAL,[Mf]:s.GEQUAL,[Ef]:s.GREATER,[yf]:s.NOTEQUAL};function Gt(N,P,st){if(st?(s.texParameteri(N,s.TEXTURE_WRAP_S,ut[P.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ut[P.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ut[P.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ft[P.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ft[P.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(P.wrapS!==An||P.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,A(P.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,A(P.minFilter)),P.minFilter!==Qe&&P.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Rt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const mt=t.get("EXT_texture_filter_anisotropic");if(P.magFilter===Qe||P.minFilter!==zo&&P.minFilter!==Hr||P.type===Fi&&t.has("OES_texture_float_linear")===!1||u===!1&&P.type===Wr&&t.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||i.get(P).__currentAnisotropy)&&(s.texParameterf(N,mt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy)}}function Tt(N,P){let st=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",nt));const mt=P.source;let _t=w.get(mt);_t===void 0&&(_t={},w.set(mt,_t));const Et=dt(P);if(Et!==N.__cacheKey){_t[Et]===void 0&&(_t[Et]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,st=!0),_t[Et].usedTimes++;const At=_t[N.__cacheKey];At!==void 0&&(_t[N.__cacheKey].usedTimes--,At.usedTimes===0&&$(P)),N.__cacheKey=Et,N.__webglTexture=_t[Et].texture}return st}function re(N,P,st){let mt=s.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),P.isData3DTexture&&(mt=s.TEXTURE_3D);const _t=Tt(N,P),Et=P.source;e.bindTexture(mt,N.__webglTexture,s.TEXTURE0+st);const At=i.get(Et);if(Et.version!==At.__version||_t===!0){e.activeTexture(s.TEXTURE0+st),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const xt=O(P)&&D(P.image)===!1;let lt=R(P.image,xt,!1,_);lt=Ie(P,lt);const Lt=D(lt)||u,Dt=l.convert(P.format,P.colorSpace);let Ot=l.convert(P.type),St=H(P.internalFormat,Dt,Ot,P.colorSpace);Gt(mt,P,Lt);let Ct;const Kt=P.mipmaps,fe=u&&P.isVideoTexture!==!0,V=At.__version===void 0||_t===!0,wt=T(P,lt,Lt);if(P.isDepthTexture)St=s.DEPTH_COMPONENT,u?P.type===Fi?St=s.DEPTH_COMPONENT32F:P.type===Ni?St=s.DEPTH_COMPONENT24:P.type===hs?St=s.DEPTH24_STENCIL8:St=s.DEPTH_COMPONENT16:P.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===us&&St===s.DEPTH_COMPONENT&&P.type!==Ll&&P.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Ni,Ot=l.convert(P.type)),P.format===Js&&St===s.DEPTH_COMPONENT&&(St=s.DEPTH_STENCIL,P.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=hs,Ot=l.convert(P.type))),V&&(fe?e.texStorage2D(s.TEXTURE_2D,1,St,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,St,lt.width,lt.height,0,Dt,Ot,null));else if(P.isDataTexture)if(Kt.length>0&&Lt){fe&&V&&e.texStorage2D(s.TEXTURE_2D,wt,St,Kt[0].width,Kt[0].height);for(let tt=0,bt=Kt.length;tt<bt;tt++)Ct=Kt[tt],fe?e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,Dt,Ot,Ct.data):e.texImage2D(s.TEXTURE_2D,tt,St,Ct.width,Ct.height,0,Dt,Ot,Ct.data);P.generateMipmaps=!1}else fe?(V&&e.texStorage2D(s.TEXTURE_2D,wt,St,lt.width,lt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,Dt,Ot,lt.data)):e.texImage2D(s.TEXTURE_2D,0,St,lt.width,lt.height,0,Dt,Ot,lt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){fe&&V&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,St,Kt[0].width,Kt[0].height,lt.depth);for(let tt=0,bt=Kt.length;tt<bt;tt++)Ct=Kt[tt],P.format!==Gn?Dt!==null?fe?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,Ct.width,Ct.height,lt.depth,Dt,Ct.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,St,Ct.width,Ct.height,lt.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,Ct.width,Ct.height,lt.depth,Dt,Ot,Ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,St,Ct.width,Ct.height,lt.depth,0,Dt,Ot,Ct.data)}else{fe&&V&&e.texStorage2D(s.TEXTURE_2D,wt,St,Kt[0].width,Kt[0].height);for(let tt=0,bt=Kt.length;tt<bt;tt++)Ct=Kt[tt],P.format!==Gn?Dt!==null?fe?e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,Dt,Ct.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,St,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,Dt,Ot,Ct.data):e.texImage2D(s.TEXTURE_2D,tt,St,Ct.width,Ct.height,0,Dt,Ot,Ct.data)}else if(P.isDataArrayTexture)fe?(V&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,St,lt.width,lt.height,lt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Dt,Ot,lt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,lt.width,lt.height,lt.depth,0,Dt,Ot,lt.data);else if(P.isData3DTexture)fe?(V&&e.texStorage3D(s.TEXTURE_3D,wt,St,lt.width,lt.height,lt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Dt,Ot,lt.data)):e.texImage3D(s.TEXTURE_3D,0,St,lt.width,lt.height,lt.depth,0,Dt,Ot,lt.data);else if(P.isFramebufferTexture){if(V)if(fe)e.texStorage2D(s.TEXTURE_2D,wt,St,lt.width,lt.height);else{let tt=lt.width,bt=lt.height;for(let Mt=0;Mt<wt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,St,tt,bt,0,Dt,Ot,null),tt>>=1,bt>>=1}}else if(Kt.length>0&&Lt){fe&&V&&e.texStorage2D(s.TEXTURE_2D,wt,St,Kt[0].width,Kt[0].height);for(let tt=0,bt=Kt.length;tt<bt;tt++)Ct=Kt[tt],fe?e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Dt,Ot,Ct):e.texImage2D(s.TEXTURE_2D,tt,St,Dt,Ot,Ct);P.generateMipmaps=!1}else fe?(V&&e.texStorage2D(s.TEXTURE_2D,wt,St,lt.width,lt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Dt,Ot,lt)):e.texImage2D(s.TEXTURE_2D,0,St,Dt,Ot,lt);k(P,Lt)&&z(mt),At.__version=Et.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function ze(N,P,st){if(P.image.length!==6)return;const mt=Tt(N,P),_t=P.source;e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+st);const Et=i.get(_t);if(_t.version!==Et.__version||mt===!0){e.activeTexture(s.TEXTURE0+st),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,P.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,P.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const At=P.isCompressedTexture||P.image[0].isCompressedTexture,xt=P.image[0]&&P.image[0].isDataTexture,lt=[];for(let tt=0;tt<6;tt++)!At&&!xt?lt[tt]=R(P.image[tt],!1,!0,m):lt[tt]=xt?P.image[tt].image:P.image[tt],lt[tt]=Ie(P,lt[tt]);const Lt=lt[0],Dt=D(Lt)||u,Ot=l.convert(P.format,P.colorSpace),St=l.convert(P.type),Ct=H(P.internalFormat,Ot,St,P.colorSpace),Kt=u&&P.isVideoTexture!==!0,fe=Et.__version===void 0||mt===!0;let V=T(P,Lt,Dt);Gt(s.TEXTURE_CUBE_MAP,P,Dt);let wt;if(At){Kt&&fe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,V,Ct,Lt.width,Lt.height);for(let tt=0;tt<6;tt++){wt=lt[tt].mipmaps;for(let bt=0;bt<wt.length;bt++){const Mt=wt[bt];P.format!==Gn?Ot!==null?Kt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,Mt.width,Mt.height,Ot,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,Ct,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,0,0,Mt.width,Mt.height,Ot,St,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt,Ct,Mt.width,Mt.height,0,Ot,St,Mt.data)}}}else{wt=P.mipmaps,Kt&&fe&&(wt.length>0&&V++,e.texStorage2D(s.TEXTURE_CUBE_MAP,V,Ct,lt[0].width,lt[0].height));for(let tt=0;tt<6;tt++)if(xt){Kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,lt[tt].width,lt[tt].height,Ot,St,lt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ct,lt[tt].width,lt[tt].height,0,Ot,St,lt[tt].data);for(let bt=0;bt<wt.length;bt++){const ae=wt[bt].image[tt].image;Kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,ae.width,ae.height,Ot,St,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,Ct,ae.width,ae.height,0,Ot,St,ae.data)}}else{Kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ot,St,lt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ct,Ot,St,lt[tt]);for(let bt=0;bt<wt.length;bt++){const Mt=wt[bt];Kt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,0,0,Ot,St,Mt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt+1,Ct,Ot,St,Mt.image[tt])}}}k(P,Dt)&&z(s.TEXTURE_CUBE_MAP),Et.__version=_t.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function Vt(N,P,st,mt,_t){const Et=l.convert(st.format,st.colorSpace),At=l.convert(st.type),xt=H(st.internalFormat,Et,At,st.colorSpace);i.get(P).__hasExternalTextures||(_t===s.TEXTURE_3D||_t===s.TEXTURE_2D_ARRAY?e.texImage3D(_t,0,xt,P.width,P.height,P.depth,0,Et,At,null):e.texImage2D(_t,0,xt,P.width,P.height,0,Et,At,null)),e.bindFramebuffer(s.FRAMEBUFFER,N),ue(P)?b.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,_t,i.get(st).__webglTexture,0,jt(P)):(_t===s.TEXTURE_2D||_t>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,_t,i.get(st).__webglTexture,0),e.bindFramebuffer(s.FRAMEBUFFER,null)}function K(N,P,st){if(s.bindRenderbuffer(s.RENDERBUFFER,N),P.depthBuffer&&!P.stencilBuffer){let mt=s.DEPTH_COMPONENT16;if(st||ue(P)){const _t=P.depthTexture;_t&&_t.isDepthTexture&&(_t.type===Fi?mt=s.DEPTH_COMPONENT32F:_t.type===Ni&&(mt=s.DEPTH_COMPONENT24));const Et=jt(P);ue(P)?b.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,mt,P.width,P.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,mt,P.width,P.height)}else s.renderbufferStorage(s.RENDERBUFFER,mt,P.width,P.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(P.depthBuffer&&P.stencilBuffer){const mt=jt(P);st&&ue(P)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,s.DEPTH24_STENCIL8,P.width,P.height):ue(P)?b.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,s.DEPTH24_STENCIL8,P.width,P.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{const mt=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let _t=0;_t<mt.length;_t++){const Et=mt[_t],At=l.convert(Et.format,Et.colorSpace),xt=l.convert(Et.type),lt=H(Et.internalFormat,At,xt,Et.colorSpace),Lt=jt(P);st&&ue(P)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,lt,P.width,P.height):ue(P)?b.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,lt,P.width,P.height):s.renderbufferStorage(s.RENDERBUFFER,lt,P.width,P.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(N,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ht(P.depthTexture,0);const mt=i.get(P.depthTexture).__webglTexture,_t=jt(P);if(P.depthTexture.format===us)ue(P)?b.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0);else if(P.depthTexture.format===Js)ue(P)?b.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function Nt(N){const P=i.get(N),st=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!P.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");De(P.__webglFramebuffer,N)}else if(st){P.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)e.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer[mt]),P.__webglDepthbuffer[mt]=s.createRenderbuffer(),K(P.__webglDepthbuffer[mt],N,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=s.createRenderbuffer(),K(P.__webglDepthbuffer,N,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(N,P,st){const mt=i.get(N);P!==void 0&&Vt(mt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),st!==void 0&&Nt(N)}function Ut(N){const P=N.texture,st=i.get(N),mt=i.get(P);N.addEventListener("dispose",rt),N.isWebGLMultipleRenderTargets!==!0&&(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=P.version,h.memory.textures++);const _t=N.isWebGLCubeRenderTarget===!0,Et=N.isWebGLMultipleRenderTargets===!0,At=D(N)||u;if(_t){st.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)st.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(st.__webglFramebuffer=s.createFramebuffer(),Et)if(r.drawBuffers){const xt=N.texture;for(let lt=0,Lt=xt.length;lt<Lt;lt++){const Dt=i.get(xt[lt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&N.samples>0&&ue(N)===!1){const xt=Et?P:[P];st.__webglMultisampledFramebuffer=s.createFramebuffer(),st.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let lt=0;lt<xt.length;lt++){const Lt=xt[lt];st.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,st.__webglColorRenderbuffer[lt]);const Dt=l.convert(Lt.format,Lt.colorSpace),Ot=l.convert(Lt.type),St=H(Lt.internalFormat,Dt,Ot,Lt.colorSpace,N.isXRRenderTarget===!0),Ct=jt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,St,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,st.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(st.__webglDepthRenderbuffer=s.createRenderbuffer(),K(st.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_t){e.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),Gt(s.TEXTURE_CUBE_MAP,P,At);for(let xt=0;xt<6;xt++)Vt(st.__webglFramebuffer[xt],N,P,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt);k(P,At)&&z(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){const xt=N.texture;for(let lt=0,Lt=xt.length;lt<Lt;lt++){const Dt=xt[lt],Ot=i.get(Dt);e.bindTexture(s.TEXTURE_2D,Ot.__webglTexture),Gt(s.TEXTURE_2D,Dt,At),Vt(st.__webglFramebuffer,N,Dt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D),k(Dt,At)&&z(s.TEXTURE_2D)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(u?xt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,mt.__webglTexture),Gt(xt,P,At),Vt(st.__webglFramebuffer,N,P,s.COLOR_ATTACHMENT0,xt),k(P,At)&&z(xt),e.unbindTexture()}N.depthBuffer&&Nt(N)}function le(N){const P=D(N)||u,st=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let mt=0,_t=st.length;mt<_t;mt++){const Et=st[mt];if(k(Et,P)){const At=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,xt=i.get(Et).__webglTexture;e.bindTexture(At,xt),z(At),e.unbindTexture()}}}function ee(N){if(u&&N.samples>0&&ue(N)===!1){const P=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],st=N.width,mt=N.height;let _t=s.COLOR_BUFFER_BIT;const Et=[],At=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=i.get(N),lt=N.isWebGLMultipleRenderTargets===!0;if(lt)for(let Lt=0;Lt<P.length;Lt++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Lt=0;Lt<P.length;Lt++){Et.push(s.COLOR_ATTACHMENT0+Lt),N.depthBuffer&&Et.push(At);const Dt=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Dt===!1&&(N.depthBuffer&&(_t|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(_t|=s.STENCIL_BUFFER_BIT)),lt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[Lt]),Dt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[At]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[At])),lt){const Ot=i.get(P[Lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ot,0)}s.blitFramebuffer(0,0,st,mt,0,0,st,mt,_t,s.NEAREST),y&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Et)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let Lt=0;Lt<P.length;Lt++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,xt.__webglColorRenderbuffer[Lt]);const Dt=i.get(P[Lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,Dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function jt(N){return Math.min(g,N.samples)}function ue(N){const P=i.get(N);return u&&N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ue(N){const P=h.render.frame;C.get(N)!==P&&(C.set(N,P),N.update())}function Ie(N,P){const st=N.colorSpace,mt=N.format,_t=N.type;return N.isCompressedTexture===!0||N.format===xl||st!==Jn&&st!==ps&&(st===Qt?u===!1?t.has("EXT_sRGB")===!0&&mt===Gn?(N.format=xl,N.minFilter=ln,N.generateMipmaps=!1):P=lu.sRGBToLinear(P):(mt!==Gn||_t!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),P}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.setTexture2D=ht,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=gt,this.rebindTextures=Ht,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=ue}function Fb(s,t,e){const i=e.isWebGL2;function r(l,h=ps){let u;if(l===gi)return s.UNSIGNED_BYTE;if(l===Qh)return s.UNSIGNED_SHORT_4_4_4_4;if(l===tu)return s.UNSIGNED_SHORT_5_5_5_1;if(l===rf)return s.BYTE;if(l===af)return s.SHORT;if(l===Ll)return s.UNSIGNED_SHORT;if(l===Jh)return s.INT;if(l===Ni)return s.UNSIGNED_INT;if(l===Fi)return s.FLOAT;if(l===Wr)return i?s.HALF_FLOAT:(u=t.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===of)return s.ALPHA;if(l===Gn)return s.RGBA;if(l===lf)return s.LUMINANCE;if(l===cf)return s.LUMINANCE_ALPHA;if(l===us)return s.DEPTH_COMPONENT;if(l===Js)return s.DEPTH_STENCIL;if(l===xl)return u=t.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===eu)return s.RED;if(l===nu)return s.RED_INTEGER;if(l===hf)return s.RG;if(l===iu)return s.RG_INTEGER;if(l===su)return s.RGBA_INTEGER;if(l===ko||l===Vo||l===Bo||l===Go)if(h===Qt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===ko)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Vo)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Bo)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Go)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===ko)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Vo)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Bo)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Go)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Pc||l===Ac||l===Rc||l===Lc)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===Pc)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Ac)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Rc)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Lc)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===uf)return u=t.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Dc||l===Uc)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(l===Dc)return h===Qt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===Uc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Ic||l===Nc||l===Fc||l===Oc||l===zc||l===kc||l===Vc||l===Bc||l===Gc||l===Hc||l===Wc||l===Xc||l===qc||l===jc)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(l===Ic)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Nc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Fc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Oc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===zc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===kc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Vc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Bc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Gc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Hc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Wc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Xc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===qc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===jc)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Ho)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(l===Ho)return h===Qt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(l===df||l===Kc||l===Yc||l===$c)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(l===Ho)return u.COMPRESSED_RED_RGTC1_EXT;if(l===Kc)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Yc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===$c)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===hs?i?s.UNSIGNED_INT_24_8:(u=t.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:r}}class Ob extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ir extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zb={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,l=null,h=null;const u=this._targetRay,f=this._grip,m=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const S of t.hand.values()){const w=e.getJointPose(S,i),x=this._getHandJoint(m,S);w!==null&&(x.matrix.fromArray(w.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=w.radius),x.visible=w!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],b=_.position.distanceTo(g.position),y=.02,C=.005;m.inputState.pinching&&b>y+C?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&b<=y-C&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&l!==null&&(r=l),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(zb)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=l!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ir;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class kb extends tn{constructor(t,e,i,r,l,h,u,f,m,_){if(_=_!==void 0?_:us,_!==us&&_!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&_===us&&(i=Ni),i===void 0&&_===Js&&(i=hs),super(null,r,l,h,u,f,_,i,m),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:Qe,this.minFilter=f!==void 0?f:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Vb extends ms{constructor(t,e){super();const i=this;let r=null,l=1,h=null,u="local-floor",f=1,m=null,_=null,g=null,b=null,y=null,C=null;const S=e.getContextAttributes();let w=null,x=null;const I=[],R=[],D=new Pn;D.layers.enable(1),D.viewport=new Xe;const O=new Pn;O.layers.enable(2),O.viewport=new Xe;const k=[D,O],z=new Ob;z.layers.enable(1),z.layers.enable(2);let H=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=I[J];return Q===void 0&&(Q=new ul,I[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=I[J];return Q===void 0&&(Q=new ul,I[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=I[J];return Q===void 0&&(Q=new ul,I[J]=Q),Q.getHandSpace()};function A(J){const Q=R.indexOf(J.inputSource);if(Q===-1)return;const gt=I[Q];gt!==void 0&&(gt.update(J.inputSource,J.frame,m||h),gt.dispatchEvent({type:J.type,data:J.inputSource}))}function nt(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",nt),r.removeEventListener("inputsourceschange",rt);for(let J=0;J<I.length;J++){const Q=R[J];Q!==null&&(R[J]=null,I[J].disconnect(Q))}H=null,T=null,t.setRenderTarget(w),y=null,b=null,g=null,r=null,x=null,ht.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){u=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return b!==null?b:y},this.getBinding=function(){return g},this.getFrame=function(){return C},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(w=t.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",nt),r.addEventListener("inputsourceschange",rt),S.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:y}),x=new fs(y.framebufferWidth,y.framebufferHeight,{format:Gn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let Q=null,gt=null,ut=null;S.depth&&(ut=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=S.stencil?Js:us,gt=S.stencil?hs:Ni);const ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:l};g=new XRWebGLBinding(r,e),b=g.createProjectionLayer(ft),r.updateRenderState({layers:[b]}),x=new fs(b.textureWidth,b.textureHeight,{format:Gn,type:gi,depthTexture:new kb(b.textureWidth,b.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0});const Rt=t.properties.get(x);Rt.__ignoreDepthValues=b.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(f),m=null,h=await r.requestReferenceSpace(u),ht.setContext(r),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function rt(J){for(let Q=0;Q<J.removed.length;Q++){const gt=J.removed[Q],ut=R.indexOf(gt);ut>=0&&(R[ut]=null,I[ut].disconnect(gt))}for(let Q=0;Q<J.added.length;Q++){const gt=J.added[Q];let ut=R.indexOf(gt);if(ut===-1){for(let Rt=0;Rt<I.length;Rt++)if(Rt>=R.length){R.push(gt),ut=Rt;break}else if(R[Rt]===null){R[Rt]=gt,ut=Rt;break}if(ut===-1)break}const ft=I[ut];ft&&ft.connect(gt)}}const j=new B,$=new B;function et(J,Q,gt){j.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(gt.matrixWorld);const ut=j.distanceTo($),ft=Q.projectionMatrix.elements,Rt=gt.projectionMatrix.elements,Gt=ft[14]/(ft[10]-1),Tt=ft[14]/(ft[10]+1),re=(ft[9]+1)/ft[5],ze=(ft[9]-1)/ft[5],Vt=(ft[8]-1)/ft[0],K=(Rt[8]+1)/Rt[0],De=Gt*Vt,Nt=Gt*K,Ht=ut/(-Vt+K),Ut=Ht*-Vt;Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ut),J.translateZ(Ht),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const le=Gt+Ht,ee=Tt+Ht,jt=De-Ut,ue=Nt+(ut-Ut),Ue=re*Tt/ee*le,Ie=ze*Tt/ee*le;J.projectionMatrix.makePerspective(jt,ue,Ue,Ie,le,ee),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function ct(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;z.near=O.near=D.near=J.near,z.far=O.far=D.far=J.far,(H!==z.near||T!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,T=z.far);const Q=J.parent,gt=z.cameras;ct(z,Q);for(let ut=0;ut<gt.length;ut++)ct(gt[ut],Q);gt.length===2?et(z,D,O):z.projectionMatrix.copy(D.projectionMatrix),Z(J,z,Q)};function Z(J,Q,gt){gt===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(gt.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0);const ut=J.children;for(let ft=0,Rt=ut.length;ft<Rt;ft++)ut[ft].updateMatrixWorld(!0);J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(b===null&&y===null))return f},this.setFoveation=function(J){f=J,b!==null&&(b.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)};let q=null;function dt(J,Q){if(_=Q.getViewerPose(m||h),C=Q,_!==null){const gt=_.views;y!==null&&(t.setRenderTargetFramebuffer(x,y.framebuffer),t.setRenderTarget(x));let ut=!1;gt.length!==z.cameras.length&&(z.cameras.length=0,ut=!0);for(let ft=0;ft<gt.length;ft++){const Rt=gt[ft];let Gt=null;if(y!==null)Gt=y.getViewport(Rt);else{const re=g.getViewSubImage(b,Rt);Gt=re.viewport,ft===0&&(t.setRenderTargetTextures(x,re.colorTexture,b.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(x))}let Tt=k[ft];Tt===void 0&&(Tt=new Pn,Tt.layers.enable(ft),Tt.viewport=new Xe,k[ft]=Tt),Tt.matrix.fromArray(Rt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Rt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),ft===0&&(z.matrix.copy(Tt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ut===!0&&z.cameras.push(Tt)}}for(let gt=0;gt<I.length;gt++){const ut=R[gt],ft=I[gt];ut!==null&&ft!==void 0&&ft.update(ut,Q,m||h)}q&&q(J,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),C=null}const ht=new xu;ht.setAnimationLoop(dt),this.setAnimationLoop=function(J){q=J},this.dispose=function(){}}}function Bb(s,t){function e(w,x){w.matrixAutoUpdate===!0&&w.updateMatrix(),x.value.copy(w.matrix)}function i(w,x){x.color.getRGB(w.fogColor.value,mu(s)),x.isFog?(w.fogNear.value=x.near,w.fogFar.value=x.far):x.isFogExp2&&(w.fogDensity.value=x.density)}function r(w,x,I,R,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(w,x):x.isMeshToonMaterial?(l(w,x),g(w,x)):x.isMeshPhongMaterial?(l(w,x),_(w,x)):x.isMeshStandardMaterial?(l(w,x),b(w,x),x.isMeshPhysicalMaterial&&y(w,x,D)):x.isMeshMatcapMaterial?(l(w,x),C(w,x)):x.isMeshDepthMaterial?l(w,x):x.isMeshDistanceMaterial?(l(w,x),S(w,x)):x.isMeshNormalMaterial?l(w,x):x.isLineBasicMaterial?(h(w,x),x.isLineDashedMaterial&&u(w,x)):x.isPointsMaterial?f(w,x,I,R):x.isSpriteMaterial?m(w,x):x.isShadowMaterial?(w.color.value.copy(x.color),w.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(w,x){w.opacity.value=x.opacity,x.color&&w.diffuse.value.copy(x.color),x.emissive&&w.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(w.map.value=x.map,e(x.map,w.mapTransform)),x.alphaMap&&(w.alphaMap.value=x.alphaMap,e(x.alphaMap,w.alphaMapTransform)),x.bumpMap&&(w.bumpMap.value=x.bumpMap,e(x.bumpMap,w.bumpMapTransform),w.bumpScale.value=x.bumpScale,x.side===cn&&(w.bumpScale.value*=-1)),x.normalMap&&(w.normalMap.value=x.normalMap,e(x.normalMap,w.normalMapTransform),w.normalScale.value.copy(x.normalScale),x.side===cn&&w.normalScale.value.negate()),x.displacementMap&&(w.displacementMap.value=x.displacementMap,e(x.displacementMap,w.displacementMapTransform),w.displacementScale.value=x.displacementScale,w.displacementBias.value=x.displacementBias),x.emissiveMap&&(w.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,w.emissiveMapTransform)),x.specularMap&&(w.specularMap.value=x.specularMap,e(x.specularMap,w.specularMapTransform)),x.alphaTest>0&&(w.alphaTest.value=x.alphaTest);const I=t.get(x).envMap;if(I&&(w.envMap.value=I,w.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,w.reflectivity.value=x.reflectivity,w.ior.value=x.ior,w.refractionRatio.value=x.refractionRatio),x.lightMap){w.lightMap.value=x.lightMap;const R=s.useLegacyLights===!0?Math.PI:1;w.lightMapIntensity.value=x.lightMapIntensity*R,e(x.lightMap,w.lightMapTransform)}x.aoMap&&(w.aoMap.value=x.aoMap,w.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,w.aoMapTransform))}function h(w,x){w.diffuse.value.copy(x.color),w.opacity.value=x.opacity,x.map&&(w.map.value=x.map,e(x.map,w.mapTransform))}function u(w,x){w.dashSize.value=x.dashSize,w.totalSize.value=x.dashSize+x.gapSize,w.scale.value=x.scale}function f(w,x,I,R){w.diffuse.value.copy(x.color),w.opacity.value=x.opacity,w.size.value=x.size*I,w.scale.value=R*.5,x.map&&(w.map.value=x.map,e(x.map,w.uvTransform)),x.alphaMap&&(w.alphaMap.value=x.alphaMap,e(x.alphaMap,w.alphaMapTransform)),x.alphaTest>0&&(w.alphaTest.value=x.alphaTest)}function m(w,x){w.diffuse.value.copy(x.color),w.opacity.value=x.opacity,w.rotation.value=x.rotation,x.map&&(w.map.value=x.map,e(x.map,w.mapTransform)),x.alphaMap&&(w.alphaMap.value=x.alphaMap,e(x.alphaMap,w.alphaMapTransform)),x.alphaTest>0&&(w.alphaTest.value=x.alphaTest)}function _(w,x){w.specular.value.copy(x.specular),w.shininess.value=Math.max(x.shininess,1e-4)}function g(w,x){x.gradientMap&&(w.gradientMap.value=x.gradientMap)}function b(w,x){w.metalness.value=x.metalness,x.metalnessMap&&(w.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,w.metalnessMapTransform)),w.roughness.value=x.roughness,x.roughnessMap&&(w.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,w.roughnessMapTransform)),t.get(x).envMap&&(w.envMapIntensity.value=x.envMapIntensity)}function y(w,x,I){w.ior.value=x.ior,x.sheen>0&&(w.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),w.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(w.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,w.sheenColorMapTransform)),x.sheenRoughnessMap&&(w.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,w.sheenRoughnessMapTransform))),x.clearcoat>0&&(w.clearcoat.value=x.clearcoat,w.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(w.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,w.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(w.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===cn&&w.clearcoatNormalScale.value.negate())),x.iridescence>0&&(w.iridescence.value=x.iridescence,w.iridescenceIOR.value=x.iridescenceIOR,w.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(w.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,w.iridescenceMapTransform)),x.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,w.iridescenceThicknessMapTransform))),x.transmission>0&&(w.transmission.value=x.transmission,w.transmissionSamplerMap.value=I.texture,w.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(w.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,w.transmissionMapTransform)),w.thickness.value=x.thickness,x.thicknessMap&&(w.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,w.thicknessMapTransform)),w.attenuationDistance.value=x.attenuationDistance,w.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(w.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(w.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,w.anisotropyMapTransform))),w.specularIntensity.value=x.specularIntensity,w.specularColor.value.copy(x.specularColor),x.specularColorMap&&(w.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,w.specularColorMapTransform)),x.specularIntensityMap&&(w.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,w.specularIntensityMapTransform))}function C(w,x){x.matcap&&(w.matcap.value=x.matcap)}function S(w,x){const I=t.get(x).light;w.referencePosition.value.setFromMatrixPosition(I.matrixWorld),w.nearDistance.value=I.shadow.camera.near,w.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Gb(s,t,e,i){let r={},l={},h=[];const u=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(I,R){const D=R.program;i.uniformBlockBinding(I,D)}function m(I,R){let D=r[I.id];D===void 0&&(C(I),D=_(I),r[I.id]=D,I.addEventListener("dispose",w));const O=R.program;i.updateUBOMapping(I,O);const k=t.render.frame;l[I.id]!==k&&(b(I),l[I.id]=k)}function _(I){const R=g();I.__bindingPointIndex=R;const D=s.createBuffer(),O=I.__size,k=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,O,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,D),D}function g(){for(let I=0;I<u;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(I){const R=r[I.id],D=I.uniforms,O=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let k=0,z=D.length;k<z;k++){const H=D[k];if(y(H,k,O)===!0){const T=H.__offset,A=Array.isArray(H.value)?H.value:[H.value];let nt=0;for(let rt=0;rt<A.length;rt++){const j=A[rt],$=S(j);typeof j=="number"?(H.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,T+nt,H.__data)):j.isMatrix3?(H.__data[0]=j.elements[0],H.__data[1]=j.elements[1],H.__data[2]=j.elements[2],H.__data[3]=j.elements[0],H.__data[4]=j.elements[3],H.__data[5]=j.elements[4],H.__data[6]=j.elements[5],H.__data[7]=j.elements[0],H.__data[8]=j.elements[6],H.__data[9]=j.elements[7],H.__data[10]=j.elements[8],H.__data[11]=j.elements[0]):(j.toArray(H.__data,nt),nt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,T,H.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(I,R,D){const O=I.value;if(D[R]===void 0){if(typeof O=="number")D[R]=O;else{const k=Array.isArray(O)?O:[O],z=[];for(let H=0;H<k.length;H++)z.push(k[H].clone());D[R]=z}return!0}else if(typeof O=="number"){if(D[R]!==O)return D[R]=O,!0}else{const k=Array.isArray(D[R])?D[R]:[D[R]],z=Array.isArray(O)?O:[O];for(let H=0;H<k.length;H++){const T=k[H];if(T.equals(z[H])===!1)return T.copy(z[H]),!0}}return!1}function C(I){const R=I.uniforms;let D=0;const O=16;let k=0;for(let z=0,H=R.length;z<H;z++){const T=R[z],A={boundary:0,storage:0},nt=Array.isArray(T.value)?T.value:[T.value];for(let rt=0,j=nt.length;rt<j;rt++){const $=nt[rt],et=S($);A.boundary+=et.boundary,A.storage+=et.storage}if(T.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=D,z>0){k=D%O;const rt=O-k;k!==0&&rt-A.boundary<0&&(D+=O-k,T.__offset=D)}D+=A.storage}return k=D%O,k>0&&(D+=O-k),I.__size=D,I.__cache={},this}function S(I){const R={boundary:0,storage:0};return typeof I=="number"?(R.boundary=4,R.storage=4):I.isVector2?(R.boundary=8,R.storage=8):I.isVector3||I.isColor?(R.boundary=16,R.storage=12):I.isVector4?(R.boundary=16,R.storage=16):I.isMatrix3?(R.boundary=48,R.storage=48):I.isMatrix4?(R.boundary=64,R.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),R}function w(I){const R=I.target;R.removeEventListener("dispose",w);const D=h.indexOf(R.__bindingPointIndex);h.splice(D,1),s.deleteBuffer(r[R.id]),delete r[R.id],delete l[R.id]}function x(){for(const I in r)s.deleteBuffer(r[I]);h=[],r={},l={}}return{bind:f,update:m,dispose:x}}function Hb(){const s=qr("canvas");return s.style.display="block",s}class Su{constructor(t={}){const{canvas:e=Hb(),context:i=null,depth:r=!0,stencil:l=!0,alpha:h=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1}=t;this.isWebGLRenderer=!0;let b;i!==null?b=i.getContextAttributes().alpha:b=h;const y=new Uint32Array(4),C=new Int32Array(4);let S=null,w=null;const x=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Qt,this.useLegacyLights=!0,this.toneMapping=vi,this.toneMappingExposure=1;const R=this;let D=!1,O=0,k=0,z=null,H=-1,T=null;const A=new Xe,nt=new Xe;let rt=null;const j=new ge(0);let $=0,et=e.width,ct=e.height,Z=1,q=null,dt=null;const ht=new Xe(0,0,et,ct),J=new Xe(0,0,et,ct);let Q=!1;const gt=new bu;let ut=!1,ft=!1,Rt=null;const Gt=new qt,Tt=new pe,re=new B,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return z===null?Z:1}let K=i;function De(U,Y){for(let at=0;at<U.length;at++){const X=U[at],ot=e.getContext(X,Y);if(ot!==null)return ot}return null}try{const U={alpha:!0,depth:r,stencil:l,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rl}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),K===null){const Y=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&Y.shift(),K=De(Y,U),K===null)throw De(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Nt,Ht,Ut,le,ee,jt,ue,Ue,Ie,N,P,st,mt,_t,Et,At,xt,lt,Lt,Dt,Ot,St,Ct,Kt;function fe(){Nt=new Qv(K),Ht=new qv(K,Nt,t),Nt.init(Ht),St=new Fb(K,Nt,Ht),Ut=new Ib(K,Nt,Ht),le=new ng(K),ee=new xb,jt=new Nb(K,Nt,Ut,ee,Ht,St,le),ue=new Kv(R),Ue=new Jv(R),Ie=new um(K,Ht),Ct=new Wv(K,Nt,Ie,Ht),N=new tg(K,Ie,le,Ct),P=new ag(K,N,Ie,le),Lt=new rg(K,Ht,jt),At=new jv(ee),st=new bb(R,ue,Ue,Nt,Ht,Ct,At),mt=new Bb(R,ee),_t=new Eb,Et=new Pb(Nt,Ht),lt=new Hv(R,ue,Ue,Ut,P,b,f),xt=new Ub(R,P,Ht),Kt=new Gb(K,le,Ht,Ut),Dt=new Xv(K,Nt,le,Ht),Ot=new eg(K,Nt,le,Ht),le.programs=st.programs,R.capabilities=Ht,R.extensions=Nt,R.properties=ee,R.renderLists=_t,R.shadowMap=xt,R.state=Ut,R.info=le}fe();const V=new Vb(R,K);this.xr=V,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const U=Nt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Nt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(U){U!==void 0&&(Z=U,this.setSize(et,ct,!1))},this.getSize=function(U){return U.set(et,ct)},this.setSize=function(U,Y,at=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=U,ct=Y,e.width=Math.floor(U*Z),e.height=Math.floor(Y*Z),at===!0&&(e.style.width=U+"px",e.style.height=Y+"px"),this.setViewport(0,0,U,Y)},this.getDrawingBufferSize=function(U){return U.set(et*Z,ct*Z).floor()},this.setDrawingBufferSize=function(U,Y,at){et=U,ct=Y,Z=at,e.width=Math.floor(U*at),e.height=Math.floor(Y*at),this.setViewport(0,0,U,Y)},this.getCurrentViewport=function(U){return U.copy(A)},this.getViewport=function(U){return U.copy(ht)},this.setViewport=function(U,Y,at,X){U.isVector4?ht.set(U.x,U.y,U.z,U.w):ht.set(U,Y,at,X),Ut.viewport(A.copy(ht).multiplyScalar(Z).floor())},this.getScissor=function(U){return U.copy(J)},this.setScissor=function(U,Y,at,X){U.isVector4?J.set(U.x,U.y,U.z,U.w):J.set(U,Y,at,X),Ut.scissor(nt.copy(J).multiplyScalar(Z).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(U){Ut.setScissorTest(Q=U)},this.setOpaqueSort=function(U){q=U},this.setTransparentSort=function(U){dt=U},this.getClearColor=function(U){return U.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(U=!0,Y=!0,at=!0){let X=0;if(U){let ot=!1;if(z!==null){const Pt=z.texture.format;ot=Pt===su||Pt===iu||Pt===nu}if(ot){const Pt=z.texture.type,It=Pt===gi||Pt===Ni||Pt===Ll||Pt===hs||Pt===Qh||Pt===tu,Bt=lt.getClearColor(),zt=lt.getClearAlpha(),$t=Bt.r,Wt=Bt.g,Yt=Bt.b;It?(y[0]=$t,y[1]=Wt,y[2]=Yt,y[3]=zt,K.clearBufferuiv(K.COLOR,0,y)):(C[0]=$t,C[1]=Wt,C[2]=Yt,C[3]=zt,K.clearBufferiv(K.COLOR,0,C))}else X|=K.COLOR_BUFFER_BIT}Y&&(X|=K.DEPTH_BUFFER_BIT),at&&(X|=K.STENCIL_BUFFER_BIT),K.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),_t.dispose(),Et.dispose(),ee.dispose(),ue.dispose(),Ue.dispose(),P.dispose(),Ct.dispose(),Kt.dispose(),st.dispose(),V.dispose(),V.removeEventListener("sessionstart",ne),V.removeEventListener("sessionend",je),Rt&&(Rt.dispose(),Rt=null),xe.stop()};function wt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const U=le.autoReset,Y=xt.enabled,at=xt.autoUpdate,X=xt.needsUpdate,ot=xt.type;fe(),le.autoReset=U,xt.enabled=Y,xt.autoUpdate=at,xt.needsUpdate=X,xt.type=ot}function bt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Mt(U){const Y=U.target;Y.removeEventListener("dispose",Mt),ae(Y)}function ae(U){_e(U),ee.remove(U)}function _e(U){const Y=ee.get(U).programs;Y!==void 0&&(Y.forEach(function(at){st.releaseProgram(at)}),U.isShaderMaterial&&st.releaseShaderCache(U))}this.renderBufferDirect=function(U,Y,at,X,ot,Pt){Y===null&&(Y=ze);const It=ot.isMesh&&ot.matrixWorld.determinant()<0,Bt=rr(U,Y,at,X,ot);Ut.setMaterial(X,It);let zt=at.index,$t=1;X.wireframe===!0&&(zt=N.getWireframeAttribute(at),$t=2);const Wt=at.drawRange,Yt=at.attributes.position;let me=Wt.start*$t,Me=(Wt.start+Wt.count)*$t;Pt!==null&&(me=Math.max(me,Pt.start*$t),Me=Math.min(Me,(Pt.start+Pt.count)*$t)),zt!==null?(me=Math.max(me,0),Me=Math.min(Me,zt.count)):Yt!=null&&(me=Math.max(me,0),Me=Math.min(Me,Yt.count));const ce=Me-me;if(ce<0||ce===1/0)return;Ct.setup(ot,X,Bt,at,zt);let un,we=Dt;if(zt!==null&&(un=Ie.get(zt),we=Ot,we.setIndex(un)),ot.isMesh)X.wireframe===!0?(Ut.setLineWidth(X.wireframeLinewidth*Vt()),we.setMode(K.LINES)):we.setMode(K.TRIANGLES);else if(ot.isLine){let ie=X.linewidth;ie===void 0&&(ie=1),Ut.setLineWidth(ie*Vt()),ot.isLineSegments?we.setMode(K.LINES):ot.isLineLoop?we.setMode(K.LINE_LOOP):we.setMode(K.LINE_STRIP)}else ot.isPoints?we.setMode(K.POINTS):ot.isSprite&&we.setMode(K.TRIANGLES);if(ot.isInstancedMesh)we.renderInstances(me,ce,ot.count);else if(at.isInstancedBufferGeometry){const ie=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Qn=Math.min(at.instanceCount,ie);we.renderInstances(me,ce,Qn)}else we.render(me,ce)},this.compile=function(U,Y){function at(X,ot,Pt){X.transparent===!0&&X.side===Bn&&X.forceSinglePass===!1?(X.side=cn,X.needsUpdate=!0,Xn(X,ot,Pt),X.side=ki,X.needsUpdate=!0,Xn(X,ot,Pt),X.side=Bn):Xn(X,ot,Pt)}w=Et.get(U),w.init(),I.push(w),U.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(R.useLegacyLights),U.traverse(function(X){const ot=X.material;if(ot)if(Array.isArray(ot))for(let Pt=0;Pt<ot.length;Pt++){const It=ot[Pt];at(It,U,X)}else at(ot,U,X)}),I.pop(),w=null};let be=null;function qe(U){be&&be(U)}function ne(){xe.stop()}function je(){xe.start()}const xe=new xu;xe.setAnimationLoop(qe),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(U){be=U,V.setAnimationLoop(U),U===null?xe.stop():xe.start()},V.addEventListener("sessionstart",ne),V.addEventListener("sessionend",je),this.render=function(U,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(Y),Y=V.getCamera()),U.isScene===!0&&U.onBeforeRender(R,U,Y,z),w=Et.get(U,I.length),w.init(),I.push(w),Gt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),gt.setFromProjectionMatrix(Gt),ft=this.localClippingEnabled,ut=At.init(this.clippingPlanes,ft),S=_t.get(U,x.length),S.init(),x.push(S),Bi(U,Y,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(q,dt),this.info.render.frame++,ut===!0&&At.beginShadows();const at=w.state.shadowsArray;if(xt.render(at,U,Y),ut===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(S,U),w.setupLights(R.useLegacyLights),Y.isArrayCamera){const X=Y.cameras;for(let ot=0,Pt=X.length;ot<Pt;ot++){const It=X[ot];Wn(S,U,It,It.viewport)}}else Wn(S,U,Y);z!==null&&(jt.updateMultisampleRenderTarget(z),jt.updateRenderTargetMipmap(z)),U.isScene===!0&&U.onAfterRender(R,U,Y),Ct.resetDefaultState(),H=-1,T=null,I.pop(),I.length>0?w=I[I.length-1]:w=null,x.pop(),x.length>0?S=x[x.length-1]:S=null};function Bi(U,Y,at,X){if(U.visible===!1)return;if(U.layers.test(Y.layers)){if(U.isGroup)at=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Y);else if(U.isLight)w.pushLight(U),U.castShadow&&w.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||gt.intersectsSprite(U)){X&&re.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Gt);const It=P.update(U),Bt=U.material;Bt.visible&&S.push(U,It,Bt,at,re.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||gt.intersectsObject(U))){const It=P.update(U),Bt=U.material;if(X&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),re.copy(U.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),re.copy(It.boundingSphere.center)),re.applyMatrix4(U.matrixWorld).applyMatrix4(Gt)),Array.isArray(Bt)){const zt=It.groups;for(let $t=0,Wt=zt.length;$t<Wt;$t++){const Yt=zt[$t],me=Bt[Yt.materialIndex];me&&me.visible&&S.push(U,It,me,at,re.z,Yt)}}else Bt.visible&&S.push(U,It,Bt,at,re.z,null)}}const Pt=U.children;for(let It=0,Bt=Pt.length;It<Bt;It++)Bi(Pt[It],Y,at,X)}function Wn(U,Y,at,X){const ot=U.opaque,Pt=U.transmissive,It=U.transparent;w.setupLightsView(at),ut===!0&&At.setGlobalState(R.clippingPlanes,at),Pt.length>0&&_s(ot,Pt,Y,at),X&&Ut.viewport(A.copy(X)),ot.length>0&&Rn(ot,Y,at),Pt.length>0&&Rn(Pt,Y,at),It.length>0&&Rn(It,Y,at),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function _s(U,Y,at,X){const ot=Ht.isWebGL2;Rt===null&&(Rt=new fs(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")?Wr:gi,minFilter:Hr,samples:ot?4:0})),R.getDrawingBufferSize(Tt),ot?Rt.setSize(Tt.x,Tt.y):Rt.setSize(Wa(Tt.x),Wa(Tt.y));const Pt=R.getRenderTarget();R.setRenderTarget(Rt),R.getClearColor(j),$=R.getClearAlpha(),$<1&&R.setClearColor(16777215,.5),R.clear();const It=R.toneMapping;R.toneMapping=vi,Rn(U,at,X),jt.updateMultisampleRenderTarget(Rt),jt.updateRenderTargetMipmap(Rt);let Bt=!1;for(let zt=0,$t=Y.length;zt<$t;zt++){const Wt=Y[zt],Yt=Wt.object,me=Wt.geometry,Me=Wt.material,ce=Wt.group;if(Me.side===Bn&&Yt.layers.test(X.layers)){const un=Me.side;Me.side=cn,Me.needsUpdate=!0,bi(Yt,at,X,me,Me,ce),Me.side=un,Me.needsUpdate=!0,Bt=!0}}Bt===!0&&(jt.updateMultisampleRenderTarget(Rt),jt.updateRenderTargetMipmap(Rt)),R.setRenderTarget(Pt),R.setClearColor(j,$),R.toneMapping=It}function Rn(U,Y,at){const X=Y.isScene===!0?Y.overrideMaterial:null;for(let ot=0,Pt=U.length;ot<Pt;ot++){const It=U[ot],Bt=It.object,zt=It.geometry,$t=X===null?It.material:X,Wt=It.group;Bt.layers.test(at.layers)&&bi(Bt,Y,at,zt,$t,Wt)}}function bi(U,Y,at,X,ot,Pt){U.onBeforeRender(R,Y,at,X,ot,Pt),U.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ot.onBeforeRender(R,Y,at,X,U,Pt),ot.transparent===!0&&ot.side===Bn&&ot.forceSinglePass===!1?(ot.side=cn,ot.needsUpdate=!0,R.renderBufferDirect(at,Y,X,ot,U,Pt),ot.side=ki,ot.needsUpdate=!0,R.renderBufferDirect(at,Y,X,ot,U,Pt),ot.side=Bn):R.renderBufferDirect(at,Y,X,ot,U,Pt),U.onAfterRender(R,Y,at,X,ot,Pt)}function Xn(U,Y,at){Y.isScene!==!0&&(Y=ze);const X=ee.get(U),ot=w.state.lights,Pt=w.state.shadowsArray,It=ot.state.version,Bt=st.getParameters(U,ot.state,Pt,Y,at),zt=st.getProgramCacheKey(Bt);let $t=X.programs;X.environment=U.isMeshStandardMaterial?Y.environment:null,X.fog=Y.fog,X.envMap=(U.isMeshStandardMaterial?Ue:ue).get(U.envMap||X.environment),$t===void 0&&(U.addEventListener("dispose",Mt),$t=new Map,X.programs=$t);let Wt=$t.get(zt);if(Wt!==void 0){if(X.currentProgram===Wt&&X.lightsStateVersion===It)return vs(U,Bt),Wt}else Bt.uniforms=st.getUniforms(U),U.onBuild(at,Bt,R),U.onBeforeCompile(Bt,R),Wt=st.acquireProgram(Bt,zt),$t.set(zt,Wt),X.uniforms=Bt.uniforms;const Yt=X.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Yt.clippingPlanes=At.uniform),vs(U,Bt),X.needsLights=or(U),X.lightsStateVersion=It,X.needsLights&&(Yt.ambientLightColor.value=ot.state.ambient,Yt.lightProbe.value=ot.state.probe,Yt.directionalLights.value=ot.state.directional,Yt.directionalLightShadows.value=ot.state.directionalShadow,Yt.spotLights.value=ot.state.spot,Yt.spotLightShadows.value=ot.state.spotShadow,Yt.rectAreaLights.value=ot.state.rectArea,Yt.ltc_1.value=ot.state.rectAreaLTC1,Yt.ltc_2.value=ot.state.rectAreaLTC2,Yt.pointLights.value=ot.state.point,Yt.pointLightShadows.value=ot.state.pointShadow,Yt.hemisphereLights.value=ot.state.hemi,Yt.directionalShadowMap.value=ot.state.directionalShadowMap,Yt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Yt.spotShadowMap.value=ot.state.spotShadowMap,Yt.spotLightMatrix.value=ot.state.spotLightMatrix,Yt.spotLightMap.value=ot.state.spotLightMap,Yt.pointShadowMap.value=ot.state.pointShadowMap,Yt.pointShadowMatrix.value=ot.state.pointShadowMatrix);const me=Wt.getUniforms(),Me=Va.seqWithValue(me.seq,Yt);return X.currentProgram=Wt,X.uniformsList=Me,Wt}function vs(U,Y){const at=ee.get(U);at.outputColorSpace=Y.outputColorSpace,at.instancing=Y.instancing,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function rr(U,Y,at,X,ot){Y.isScene!==!0&&(Y=ze),jt.resetTextureUnits();const Pt=Y.fog,It=X.isMeshStandardMaterial?Y.environment:null,Bt=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Jn,zt=(X.isMeshStandardMaterial?Ue:ue).get(X.envMap||It),$t=X.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Wt=!!at.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Yt=!!at.morphAttributes.position,me=!!at.morphAttributes.normal,Me=!!at.morphAttributes.color,ce=X.toneMapped?R.toneMapping:vi,un=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,we=un!==void 0?un.length:0,ie=ee.get(X),Qn=w.state.lights;if(ut===!0&&(ft===!0||U!==T)){const Be=U===T&&X.id===H;At.setState(X,U,Be)}let Pe=!1;X.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Qn.state.version||ie.outputColorSpace!==Bt||ot.isInstancedMesh&&ie.instancing===!1||!ot.isInstancedMesh&&ie.instancing===!0||ot.isSkinnedMesh&&ie.skinning===!1||!ot.isSkinnedMesh&&ie.skinning===!0||ie.envMap!==zt||X.fog===!0&&ie.fog!==Pt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==At.numPlanes||ie.numIntersection!==At.numIntersection)||ie.vertexAlphas!==$t||ie.vertexTangents!==Wt||ie.morphTargets!==Yt||ie.morphNormals!==me||ie.morphColors!==Me||ie.toneMapping!==ce||Ht.isWebGL2===!0&&ie.morphTargetsCount!==we)&&(Pe=!0):(Pe=!0,ie.__version=X.version);let xn=ie.currentProgram;Pe===!0&&(xn=Xn(X,Y,ot));let gs=!1,en=!1,wn=!1;const Ae=xn.getUniforms(),dn=ie.uniforms;if(Ut.useProgram(xn.program)&&(gs=!0,en=!0,wn=!0),X.id!==H&&(H=X.id,en=!0),gs||T!==U){if(Ae.setValue(K,"projectionMatrix",U.projectionMatrix),Ht.logarithmicDepthBuffer&&Ae.setValue(K,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),T!==U&&(T=U,en=!0,wn=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const Be=Ae.map.cameraPosition;Be!==void 0&&Be.setValue(K,re.setFromMatrixPosition(U.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ae.setValue(K,"isOrthographic",U.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ot.isSkinnedMesh)&&Ae.setValue(K,"viewMatrix",U.matrixWorldInverse)}if(ot.isSkinnedMesh){Ae.setOptional(K,ot,"bindMatrix"),Ae.setOptional(K,ot,"bindMatrixInverse");const Be=ot.skeleton;Be&&(Ht.floatVertexTextures?(Be.boneTexture===null&&Be.computeBoneTexture(),Ae.setValue(K,"boneTexture",Be.boneTexture,jt),Ae.setValue(K,"boneTextureSize",Be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gi=at.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0&&Ht.isWebGL2===!0)&&Lt.update(ot,at,xn),(en||ie.receiveShadow!==ot.receiveShadow)&&(ie.receiveShadow=ot.receiveShadow,Ae.setValue(K,"receiveShadow",ot.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(dn.envMap.value=zt,dn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),en&&(Ae.setValue(K,"toneMappingExposure",R.toneMappingExposure),ie.needsLights&&ar(dn,wn),Pt&&X.fog===!0&&mt.refreshFogUniforms(dn,Pt),mt.refreshMaterialUniforms(dn,X,Z,ct,Rt),Va.upload(K,ie.uniformsList,dn,jt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Va.upload(K,ie.uniformsList,dn,jt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ae.setValue(K,"center",ot.center),Ae.setValue(K,"modelViewMatrix",ot.modelViewMatrix),Ae.setValue(K,"normalMatrix",ot.normalMatrix),Ae.setValue(K,"modelMatrix",ot.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Be=X.uniformsGroups;for(let ti=0,xi=Be.length;ti<xi;ti++)if(Ht.isWebGL2){const Se=Be[ti];Kt.update(Se,xn),Kt.bind(Se,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function ar(U,Y){U.ambientLightColor.needsUpdate=Y,U.lightProbe.needsUpdate=Y,U.directionalLights.needsUpdate=Y,U.directionalLightShadows.needsUpdate=Y,U.pointLights.needsUpdate=Y,U.pointLightShadows.needsUpdate=Y,U.spotLights.needsUpdate=Y,U.spotLightShadows.needsUpdate=Y,U.rectAreaLights.needsUpdate=Y,U.hemisphereLights.needsUpdate=Y}function or(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(U,Y,at){ee.get(U.texture).__webglTexture=Y,ee.get(U.depthTexture).__webglTexture=at;const X=ee.get(U);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=at===void 0,X.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,Y){const at=ee.get(U);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(U,Y=0,at=0){z=U,O=Y,k=at;let X=!0,ot=null,Pt=!1,It=!1;if(U){const zt=ee.get(U);zt.__useDefaultFramebuffer!==void 0?(Ut.bindFramebuffer(K.FRAMEBUFFER,null),X=!1):zt.__webglFramebuffer===void 0?jt.setupRenderTarget(U):zt.__hasExternalTextures&&jt.rebindTextures(U,ee.get(U.texture).__webglTexture,ee.get(U.depthTexture).__webglTexture);const $t=U.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(It=!0);const Wt=ee.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(ot=Wt[Y],Pt=!0):Ht.isWebGL2&&U.samples>0&&jt.useMultisampledRTT(U)===!1?ot=ee.get(U).__webglMultisampledFramebuffer:ot=Wt,A.copy(U.viewport),nt.copy(U.scissor),rt=U.scissorTest}else A.copy(ht).multiplyScalar(Z).floor(),nt.copy(J).multiplyScalar(Z).floor(),rt=Q;if(Ut.bindFramebuffer(K.FRAMEBUFFER,ot)&&Ht.drawBuffers&&X&&Ut.drawBuffers(U,ot),Ut.viewport(A),Ut.scissor(nt),Ut.setScissorTest(rt),Pt){const zt=ee.get(U.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Y,zt.__webglTexture,at)}else if(It){const zt=ee.get(U.texture),$t=Y||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,zt.__webglTexture,at||0,$t)}H=-1},this.readRenderTargetPixels=function(U,Y,at,X,ot,Pt,It){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=ee.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt){Ut.bindFramebuffer(K.FRAMEBUFFER,Bt);try{const zt=U.texture,$t=zt.format,Wt=zt.type;if($t!==Gn&&St.convert($t)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Yt=Wt===Wr&&(Nt.has("EXT_color_buffer_half_float")||Ht.isWebGL2&&Nt.has("EXT_color_buffer_float"));if(Wt!==gi&&St.convert(Wt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===Fi&&(Ht.isWebGL2||Nt.has("OES_texture_float")||Nt.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=U.width-X&&at>=0&&at<=U.height-ot&&K.readPixels(Y,at,X,ot,St.convert($t),St.convert(Wt),Pt)}finally{const zt=z!==null?ee.get(z).__webglFramebuffer:null;Ut.bindFramebuffer(K.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(U,Y,at=0){const X=Math.pow(2,-at),ot=Math.floor(Y.image.width*X),Pt=Math.floor(Y.image.height*X);jt.setTexture2D(Y,0),K.copyTexSubImage2D(K.TEXTURE_2D,at,0,0,U.x,U.y,ot,Pt),Ut.unbindTexture()},this.copyTextureToTexture=function(U,Y,at,X=0){const ot=Y.image.width,Pt=Y.image.height,It=St.convert(at.format),Bt=St.convert(at.type);jt.setTexture2D(at,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,at.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,at.unpackAlignment),Y.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,X,U.x,U.y,ot,Pt,It,Bt,Y.image.data):Y.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,X,U.x,U.y,Y.mipmaps[0].width,Y.mipmaps[0].height,It,Y.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,X,U.x,U.y,It,Bt,Y.image),X===0&&at.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Ut.unbindTexture()},this.copyTextureToTexture3D=function(U,Y,at,X,ot=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pt=U.max.x-U.min.x+1,It=U.max.y-U.min.y+1,Bt=U.max.z-U.min.z+1,zt=St.convert(X.format),$t=St.convert(X.type);let Wt;if(X.isData3DTexture)jt.setTexture3D(X,0),Wt=K.TEXTURE_3D;else if(X.isDataArrayTexture)jt.setTexture2DArray(X,0),Wt=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,X.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,X.unpackAlignment);const Yt=K.getParameter(K.UNPACK_ROW_LENGTH),me=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Me=K.getParameter(K.UNPACK_SKIP_PIXELS),ce=K.getParameter(K.UNPACK_SKIP_ROWS),un=K.getParameter(K.UNPACK_SKIP_IMAGES),we=at.isCompressedTexture?at.mipmaps[0]:at.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,we.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,we.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,U.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,U.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,U.min.z),at.isDataTexture||at.isData3DTexture?K.texSubImage3D(Wt,ot,Y.x,Y.y,Y.z,Pt,It,Bt,zt,$t,we.data):at.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Wt,ot,Y.x,Y.y,Y.z,Pt,It,Bt,zt,we.data)):K.texSubImage3D(Wt,ot,Y.x,Y.y,Y.z,Pt,It,Bt,zt,$t,we),K.pixelStorei(K.UNPACK_ROW_LENGTH,Yt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,me),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Me),K.pixelStorei(K.UNPACK_SKIP_ROWS,ce),K.pixelStorei(K.UNPACK_SKIP_IMAGES,un),ot===0&&X.generateMipmaps&&K.generateMipmap(Wt),Ut.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?jt.setTextureCube(U,0):U.isData3DTexture?jt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?jt.setTexture2DArray(U,0):jt.setTexture2D(U,0),Ut.unbindTexture()},this.resetState=function(){O=0,k=0,z=null,Ut.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?ds:ru}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ds?Qt:Jn}}class Wb extends Su{}Wb.prototype.isWebGL1Renderer=!0;let Xb=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};class zr extends Kr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oh=new B,zh=new B,kh=new qt,dl=new Ul,ka=new jr;class Ba extends hn{constructor(t=new bn,e=new zr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,l=e.count;r<l;r++)Oh.fromBufferAttribute(e,r-1),zh.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Oh.distanceTo(zh);t.setAttribute("lineDistance",new Hn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,l=t.params.Line.threshold,h=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),ka.radius+=l,t.ray.intersectsSphere(ka)===!1)return;kh.copy(r).invert(),dl.copy(t.ray).applyMatrix4(kh);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,m=new B,_=new B,g=new B,b=new B,y=this.isLineSegments?2:1,C=i.index,w=i.attributes.position;if(C!==null){const x=Math.max(0,h.start),I=Math.min(C.count,h.start+h.count);for(let R=x,D=I-1;R<D;R+=y){const O=C.getX(R),k=C.getX(R+1);if(m.fromBufferAttribute(w,O),_.fromBufferAttribute(w,k),dl.distanceSqToSegment(m,_,b,g)>f)continue;b.applyMatrix4(this.matrixWorld);const H=t.ray.origin.distanceTo(b);H<t.near||H>t.far||e.push({distance:H,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,h.start),I=Math.min(w.count,h.start+h.count);for(let R=x,D=I-1;R<D;R+=y){if(m.fromBufferAttribute(w,R),_.fromBufferAttribute(w,R+1),dl.distanceSqToSegment(m,_,b,g)>f)continue;b.applyMatrix4(this.matrixWorld);const k=t.ray.origin.distanceTo(b);k<t.near||k>t.far||e.push({distance:k,point:g.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=r.length;l<h;l++){const u=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}const Vh=new B,Bh=new B;class qb extends Ba{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,l=e.count;r<l;r+=2)Vh.fromBufferAttribute(e,r),Bh.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vh.distanceTo(Bh);t.setAttribute("lineDistance",new Hn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jb{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),l=0;e.push(0);for(let h=1;h<=t;h++)i=this.getPoint(h/t),l+=i.distanceTo(r),e.push(l),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const l=i.length;let h;e?h=e:h=t*i[l-1];let u=0,f=l-1,m;for(;u<=f;)if(r=Math.floor(u+(f-u)/2),m=i[r]-h,m<0)u=r+1;else if(m>0)f=r-1;else{f=r;break}if(r=f,i[r]===h)return r/(l-1);const _=i[r],b=i[r+1]-_,y=(h-_)/b;return(r+y)/(l-1)}getTangent(t,e){let r=t-1e-4,l=t+1e-4;r<0&&(r=0),l>1&&(l=1);const h=this.getPoint(r),u=this.getPoint(l),f=e||(h.isVector2?new pe:new B);return f.copy(u).sub(h).normalize(),f}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new B,r=[],l=[],h=[],u=new B,f=new qt;for(let y=0;y<=t;y++){const C=y/t;r[y]=this.getTangentAt(C,new B)}l[0]=new B,h[0]=new B;let m=Number.MAX_VALUE;const _=Math.abs(r[0].x),g=Math.abs(r[0].y),b=Math.abs(r[0].z);_<=m&&(m=_,i.set(1,0,0)),g<=m&&(m=g,i.set(0,1,0)),b<=m&&i.set(0,0,1),u.crossVectors(r[0],i).normalize(),l[0].crossVectors(r[0],u),h[0].crossVectors(r[0],l[0]);for(let y=1;y<=t;y++){if(l[y]=l[y-1].clone(),h[y]=h[y-1].clone(),u.crossVectors(r[y-1],r[y]),u.length()>Number.EPSILON){u.normalize();const C=Math.acos(We(r[y-1].dot(r[y]),-1,1));l[y].applyMatrix4(f.makeRotationAxis(u,C))}h[y].crossVectors(r[y],l[y])}if(e===!0){let y=Math.acos(We(l[0].dot(l[t]),-1,1));y/=t,r[0].dot(u.crossVectors(l[0],l[t]))>0&&(y=-y);for(let C=1;C<=t;C++)l[C].applyMatrix4(f.makeRotationAxis(r[C],y*C)),h[C].crossVectors(r[C],l[C])}return{tangents:r,normals:l,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ga extends jb{constructor(t=0,e=0,i=1,r=1,l=0,h=Math.PI*2,u=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=l,this.aEndAngle=h,this.aClockwise=u,this.aRotation=f}getPoint(t,e){const i=e||new pe,r=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const h=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=r;for(;l>r;)l-=r;l<Number.EPSILON&&(h?l=0:l=r),this.aClockwise===!0&&!h&&(l===r?l=-r:l=l-r);const u=this.aStartAngle+t*l;let f=this.aX+this.xRadius*Math.cos(u),m=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const _=Math.cos(this.aRotation),g=Math.sin(this.aRotation),b=f-this.aX,y=m-this.aY;f=b*_-y*g+this.aX,m=b*g+y*_+this.aY}return i.set(f,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}const Xa={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Kb{constructor(t,e,i){const r=this;let l=!1,h=0,u=0,f;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(_){u++,l===!1&&r.onStart!==void 0&&r.onStart(_,h,u),l=!0},this.itemEnd=function(_){h++,r.onProgress!==void 0&&r.onProgress(_,h,u),h===u&&(l=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(_){r.onError!==void 0&&r.onError(_)},this.resolveURL=function(_){return f?f(_):_},this.setURLModifier=function(_){return f=_,this},this.addHandler=function(_,g){return m.push(_,g),this},this.removeHandler=function(_){const g=m.indexOf(_);return g!==-1&&m.splice(g,2),this},this.getHandler=function(_){for(let g=0,b=m.length;g<b;g+=2){const y=m[g],C=m[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return C}return null}}}const Yb=new Kb;class Yr{constructor(t){this.manager=t!==void 0?t:Yb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,l){i.load(t,r,e,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi={};class $b extends Error{constructor(t,e){super(t),this.response=e}}class Zb extends Yr{constructor(t){super(t)}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=Xa.get(t);if(l!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(l),this.manager.itemEnd(t)},0),l;if(fi[t]!==void 0){fi[t].push({onLoad:e,onProgress:i,onError:r});return}fi[t]=[],fi[t].push({onLoad:e,onProgress:i,onError:r});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(h).then(m=>{if(m.status===200||m.status===0){if(m.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||m.body===void 0||m.body.getReader===void 0)return m;const _=fi[t],g=m.body.getReader(),b=m.headers.get("Content-Length")||m.headers.get("X-File-Size"),y=b?parseInt(b):0,C=y!==0;let S=0;const w=new ReadableStream({start(x){I();function I(){g.read().then(({done:R,value:D})=>{if(R)x.close();else{S+=D.byteLength;const O=new ProgressEvent("progress",{lengthComputable:C,loaded:S,total:y});for(let k=0,z=_.length;k<z;k++){const H=_[k];H.onProgress&&H.onProgress(O)}x.enqueue(D),I()}})}}});return new Response(w)}else throw new $b(`fetch for "${m.url}" responded with ${m.status}: ${m.statusText}`,m)}).then(m=>{switch(f){case"arraybuffer":return m.arrayBuffer();case"blob":return m.blob();case"document":return m.text().then(_=>new DOMParser().parseFromString(_,u));case"json":return m.json();default:if(u===void 0)return m.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),b=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(b);return m.arrayBuffer().then(C=>y.decode(C))}}}).then(m=>{Xa.add(t,m);const _=fi[t];delete fi[t];for(let g=0,b=_.length;g<b;g++){const y=_[g];y.onLoad&&y.onLoad(m)}}).catch(m=>{const _=fi[t];if(_===void 0)throw this.manager.itemError(t),m;delete fi[t];for(let g=0,b=_.length;g<b;g++){const y=_[g];y.onError&&y.onError(m)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Jb extends Yr{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,h=Xa.get(t);if(h!==void 0)return l.manager.itemStart(t),setTimeout(function(){e&&e(h),l.manager.itemEnd(t)},0),h;const u=qr("img");function f(){_(),Xa.add(t,this),e&&e(this),l.manager.itemEnd(t)}function m(g){_(),r&&r(g),l.manager.itemError(t),l.manager.itemEnd(t)}function _(){u.removeEventListener("load",f,!1),u.removeEventListener("error",m,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),l.manager.itemStart(t),u.src=t,u}}class Qb extends Yr{constructor(t){super(t)}load(t,e,i,r){const l=new tn,h=new Jb(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(u){l.image=u,l.needsUpdate=!0,e!==void 0&&e(l)},i,r),l}}class t0{constructor(t,e,i=0,r=1/0){this.ray=new Ul(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return yl(t,this,i,e),i.sort(Gh),i}intersectObjects(t,e=!0,i=[]){for(let r=0,l=t.length;r<l;r++)yl(t[r],this,i,e);return i.sort(Gh),i}}function Gh(s,t){return s.distance-t.distance}function yl(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const r=s.children;for(let l=0,h=r.length;l<h;l++)yl(r[l],t,e,!0)}}class e0 extends qb{constructor(t=10,e=10,i=4473924,r=8947848){i=new ge(i),r=new ge(r);const l=e/2,h=t/e,u=t/2,f=[],m=[];for(let b=0,y=0,C=-u;b<=e;b++,C+=h){f.push(-u,0,C,u,0,C),f.push(C,0,-u,C,0,u);const S=b===l?i:r;S.toArray(m,y),y+=3,S.toArray(m,y),y+=3,S.toArray(m,y),y+=3,S.toArray(m,y),y+=3}const _=new bn;_.setAttribute("position",new Hn(f,3)),_.setAttribute("color",new Hn(m,3));const g=new zr({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);const Ft={IDLE:Symbol(),ROTATE:Symbol(),PAN:Symbol(),SCALE:Symbol(),FOV:Symbol(),FOCUS:Symbol(),ZROTATE:Symbol(),TOUCH_MULTI:Symbol(),ANIMATION_FOCUS:Symbol(),ANIMATION_ROTATE:Symbol()},ve={NONE:Symbol(),ONE_FINGER:Symbol(),ONE_FINGER_SWITCHED:Symbol(),TWO_FINGER:Symbol(),MULT_FINGER:Symbol(),CURSOR:Symbol()},Zt={x:0,y:0},vn={camera:new qt,gizmos:new qt},ye={type:"change"},kn={type:"start"},Tn={type:"end"},n0=new t0,Oe=new B,Hh=new qt,Wh=new qt,On=new B;class i0 extends ms{constructor(t,e,i=null){super(),this.camera=null,this.domElement=e,this.scene=i,this.target=new B,this._currentTarget=new B,this.radiusFactor=.67,this.mouseActions=[],this._mouseOp=null,this._v2_1=new pe,this._v3_1=new B,this._v3_2=new B,this._m4_1=new qt,this._m4_2=new qt,this._quat=new er,this._translationMatrix=new qt,this._rotationMatrix=new qt,this._scaleMatrix=new qt,this._rotationAxis=new B,this._cameraMatrixState=new qt,this._cameraProjectionState=new qt,this._fovState=1,this._upState=new B,this._zoomState=1,this._nearPos=0,this._farPos=0,this._gizmoMatrixState=new qt,this._up0=new B,this._zoom0=1,this._fov0=0,this._initialNear=0,this._nearPos0=0,this._initialFar=0,this._farPos0=0,this._cameraMatrixState0=new qt,this._gizmoMatrixState0=new qt,this._button=-1,this._touchStart=[],this._touchCurrent=[],this._input=ve.NONE,this._switchSensibility=32,this._startFingerDistance=0,this._currentFingerDistance=0,this._startFingerRotation=0,this._currentFingerRotation=0,this._devPxRatio=0,this._downValid=!0,this._nclicks=0,this._downEvents=[],this._downStart=0,this._clickStart=0,this._maxDownTime=250,this._maxInterval=300,this._posThreshold=24,this._movementThreshold=24,this._currentCursorPosition=new B,this._startCursorPosition=new B,this._grid=null,this._gridPosition=new B,this._gizmos=new Ir,this._curvePts=128,this._timeStart=-1,this._animationId=-1,this.focusAnimationTime=500,this._timePrev=0,this._timeCurrent=0,this._anglePrev=0,this._angleCurrent=0,this._cursorPosPrev=new B,this._cursorPosCurr=new B,this._wPrev=0,this._wCurr=0,this.adjustNearFar=!1,this.scaleFactor=1.1,this.dampingFactor=25,this.wMax=20,this.enableAnimations=!0,this.enableGrid=!1,this.cursorZoom=!1,this.minFov=5,this.maxFov=90,this.rotateSpeed=1,this.enabled=!0,this.enablePan=!0,this.enableRotate=!0,this.enableZoom=!0,this.enableGizmos=!0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this._tbRadius=1,this._state=Ft.IDLE,this.setCamera(t),this.scene!=null&&this.scene.add(this._gizmos),this.domElement.style.touchAction="none",this._devPxRatio=window.devicePixelRatio,this.initializeMouseActions(),this._onContextMenu=r0.bind(this),this._onWheel=h0.bind(this),this._onPointerUp=c0.bind(this),this._onPointerMove=l0.bind(this),this._onPointerDown=o0.bind(this),this._onPointerCancel=a0.bind(this),this._onWindowResize=s0.bind(this),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onWheel),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),window.addEventListener("resize",this._onWindowResize)}onSinglePanStart(t,e){if(this.enabled)switch(this.dispatchEvent(kn),this.setCenter(t.clientX,t.clientY),e){case"PAN":if(!this.enablePan)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(ye)),this.updateTbState(Ft.PAN,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Zt.x,Zt.y,this.domElement)),this.enableGrid&&(this.drawGrid(),this.dispatchEvent(ye));break;case"ROTATE":if(!this.enableRotate)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1),this.updateTbState(Ft.ROTATE,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,Zt.x,Zt.y,this.domElement,this._tbRadius)),this.activateGizmos(!0),this.enableAnimations&&(this._timePrev=this._timeCurrent=performance.now(),this._angleCurrent=this._anglePrev=0,this._cursorPosPrev.copy(this._startCursorPosition),this._cursorPosCurr.copy(this._cursorPosPrev),this._wCurr=0,this._wPrev=this._wCurr),this.dispatchEvent(ye);break;case"FOV":if(!this.camera.isPerspectiveCamera||!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(ye)),this.updateTbState(Ft.FOV,!0),this._startCursorPosition.setY(this.getCursorNDC(Zt.x,Zt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break;case"ZOOM":if(!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(ye)),this.updateTbState(Ft.SCALE,!0),this._startCursorPosition.setY(this.getCursorNDC(Zt.x,Zt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break}}onSinglePanMove(t,e){if(this.enabled){const i=e!=this._state;switch(this.setCenter(t.clientX,t.clientY),e){case Ft.PAN:this.enablePan&&(i?(this.dispatchEvent(Tn),this.dispatchEvent(kn),this.updateTbState(e,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Zt.x,Zt.y,this.domElement)),this.enableGrid&&this.drawGrid(),this.activateGizmos(!1)):(this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Zt.x,Zt.y,this.domElement)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition))));break;case Ft.ROTATE:if(this.enableRotate)if(i)this.dispatchEvent(Tn),this.dispatchEvent(kn),this.updateTbState(e,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,Zt.x,Zt.y,this.domElement,this._tbRadius)),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!0);else{this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.camera,Zt.x,Zt.y,this.domElement,this._tbRadius));const r=this._startCursorPosition.distanceTo(this._currentCursorPosition),l=this._startCursorPosition.angleTo(this._currentCursorPosition),h=Math.max(r/this._tbRadius,l)*this.rotateSpeed;this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition,this._currentCursorPosition),h)),this.enableAnimations&&(this._timePrev=this._timeCurrent,this._timeCurrent=performance.now(),this._anglePrev=this._angleCurrent,this._angleCurrent=h,this._cursorPosPrev.copy(this._cursorPosCurr),this._cursorPosCurr.copy(this._currentCursorPosition),this._wPrev=this._wCurr,this._wCurr=this.calculateAngularSpeed(this._anglePrev,this._angleCurrent,this._timePrev,this._timeCurrent))}break;case Ft.SCALE:if(this.enableZoom)if(i)this.dispatchEvent(Tn),this.dispatchEvent(kn),this.updateTbState(e,!0),this._startCursorPosition.setY(this.getCursorNDC(Zt.x,Zt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(Zt.x,Zt.y,this.domElement).y*.5);const l=this._currentCursorPosition.y-this._startCursorPosition.y;let h=1;l<0?h=1/Math.pow(this.scaleFactor,-l*8):l>0&&(h=Math.pow(this.scaleFactor,l*8)),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this.applyTransformMatrix(this.scale(h,this._v3_1))}break;case Ft.FOV:if(this.enableZoom&&this.camera.isPerspectiveCamera)if(i)this.dispatchEvent(Tn),this.dispatchEvent(kn),this.updateTbState(e,!0),this._startCursorPosition.setY(this.getCursorNDC(Zt.x,Zt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(Zt.x,Zt.y,this.domElement).y*.5);const l=this._currentCursorPosition.y-this._startCursorPosition.y;let h=1;l<0?h=1/Math.pow(this.scaleFactor,-l*8):l>0&&(h=Math.pow(this.scaleFactor,l*8)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const u=this._v3_1.distanceTo(this._gizmos.position);let f=u/h;f=Le.clamp(f,this.minDistance,this.maxDistance);const m=u*Math.tan(Le.DEG2RAD*this._fovState*.5);let _=Le.RAD2DEG*(Math.atan(m/f)*2);_=Le.clamp(_,this.minFov,this.maxFov);const g=m/Math.tan(Le.DEG2RAD*(_/2));h=u/g,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(_),this.applyTransformMatrix(this.scale(h,this._v3_2,!1)),Oe.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(g/u),this._m4_1.makeTranslation(Oe.x,Oe.y,Oe.z)}break}this.dispatchEvent(ye)}}onSinglePanEnd(){if(this._state==Ft.ROTATE){if(!this.enableRotate)return;if(this.enableAnimations)if(performance.now()-this._timeCurrent<120){const e=Math.abs((this._wPrev+this._wCurr)/2),i=this;this._animationId=window.requestAnimationFrame(function(r){i.updateTbState(Ft.ANIMATION_ROTATE,!0);const l=i.calculateRotationAxis(i._cursorPosPrev,i._cursorPosCurr);i.onRotationAnim(r,l,Math.min(e,i.wMax))})}else this.updateTbState(Ft.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(ye);else this.updateTbState(Ft.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(ye)}else(this._state==Ft.PAN||this._state==Ft.IDLE)&&(this.updateTbState(Ft.IDLE,!1),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1),this.dispatchEvent(ye));this.dispatchEvent(Tn)}onDoubleTap(t){if(this.enabled&&this.enablePan&&this.scene!=null){this.dispatchEvent(kn),this.setCenter(t.clientX,t.clientY);const e=this.unprojectOnObj(this.getCursorNDC(Zt.x,Zt.y,this.domElement),this.camera);if(e!=null&&this.enableAnimations){const i=this;this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this._timeStart=-1,this._animationId=window.requestAnimationFrame(function(r){i.updateTbState(Ft.ANIMATION_FOCUS,!0),i.onFocusAnim(r,e,i._cameraMatrixState,i._gizmoMatrixState)})}else e!=null&&!this.enableAnimations&&(this.updateTbState(Ft.FOCUS,!0),this.focus(e,this.scaleFactor),this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(ye))}this.dispatchEvent(Tn)}onDoublePanStart(){this.enabled&&this.enablePan&&(this.dispatchEvent(kn),this.updateTbState(Ft.PAN,!0),this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Zt.x,Zt.y,this.domElement,!0)),this._currentCursorPosition.copy(this._startCursorPosition),this.activateGizmos(!1))}onDoublePanMove(){this.enabled&&this.enablePan&&(this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._state!=Ft.PAN&&(this.updateTbState(Ft.PAN,!0),this._startCursorPosition.copy(this._currentCursorPosition)),this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Zt.x,Zt.y,this.domElement,!0)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition,!0)),this.dispatchEvent(ye))}onDoublePanEnd(){this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(Tn)}onRotateStart(){this.enabled&&this.enableRotate&&(this.dispatchEvent(kn),this.updateTbState(Ft.ZROTATE,!0),this._startFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this._currentFingerRotation=this._startFingerRotation,this.camera.getWorldDirection(this._rotationAxis),!this.enablePan&&!this.enableZoom&&this.activateGizmos(!0))}onRotateMove(){if(this.enabled&&this.enableRotate){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let t;this._state!=Ft.ZROTATE&&(this.updateTbState(Ft.ZROTATE,!0),this._startFingerRotation=this._currentFingerRotation),this._currentFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this.enablePan?(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),t=this.unprojectOnTbPlane(this.camera,Zt.x,Zt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._v3_2)):t=new B().setFromMatrixPosition(this._gizmoMatrixState);const e=Le.DEG2RAD*(this._startFingerRotation-this._currentFingerRotation);this.applyTransformMatrix(this.zRotate(t,e)),this.dispatchEvent(ye)}}onRotateEnd(){this.updateTbState(Ft.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Tn)}onPinchStart(){this.enabled&&this.enableZoom&&(this.dispatchEvent(kn),this.updateTbState(Ft.SCALE,!0),this._startFingerDistance=this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),this._currentFingerDistance=this._startFingerDistance,this.activateGizmos(!1))}onPinchMove(){if(this.enabled&&this.enableZoom){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);const t=12;this._state!=Ft.SCALE&&(this._startFingerDistance=this._currentFingerDistance,this.updateTbState(Ft.SCALE,!0)),this._currentFingerDistance=Math.max(this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),t*this._devPxRatio);const e=this._currentFingerDistance/this._startFingerDistance;let i;this.enablePan?this.camera.isOrthographicCamera?i=this.unprojectOnTbPlane(this.camera,Zt.x,Zt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(i=this.unprojectOnTbPlane(this.camera,Zt.x,Zt.y,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)):i=this._gizmos.position,this.applyTransformMatrix(this.scale(e,i)),this.dispatchEvent(ye)}}onPinchEnd(){this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(Tn)}onTriplePanStart(){if(this.enabled&&this.enableZoom){this.dispatchEvent(kn),this.updateTbState(Ft.SCALE,!0);let t=0,e=0;const i=this._touchCurrent.length;for(let r=0;r<i;r++)t+=this._touchCurrent[r].clientX,e+=this._touchCurrent[r].clientY;this.setCenter(t/i,e/i),this._startCursorPosition.setY(this.getCursorNDC(Zt.x,Zt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition)}}onTriplePanMove(){if(this.enabled&&this.enableZoom){let t=0,e=0;const i=this._touchCurrent.length;for(let b=0;b<i;b++)t+=this._touchCurrent[b].clientX,e+=this._touchCurrent[b].clientY;this.setCenter(t/i,e/i);const r=8;this._currentCursorPosition.setY(this.getCursorNDC(Zt.x,Zt.y,this.domElement).y*.5);const l=this._currentCursorPosition.y-this._startCursorPosition.y;let h=1;l<0?h=1/Math.pow(this.scaleFactor,-l*r):l>0&&(h=Math.pow(this.scaleFactor,l*r)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const u=this._v3_1.distanceTo(this._gizmos.position);let f=u/h;f=Le.clamp(f,this.minDistance,this.maxDistance);const m=u*Math.tan(Le.DEG2RAD*this._fovState*.5);let _=Le.RAD2DEG*(Math.atan(m/f)*2);_=Le.clamp(_,this.minFov,this.maxFov);const g=m/Math.tan(Le.DEG2RAD*(_/2));h=u/g,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(_),this.applyTransformMatrix(this.scale(h,this._v3_2,!1)),Oe.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(g/u),this._m4_1.makeTranslation(Oe.x,Oe.y,Oe.z),this.dispatchEvent(ye)}}onTriplePanEnd(){this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(Tn)}setCenter(t,e){Zt.x=t,Zt.y=e}initializeMouseActions(){this.setMouseAction("PAN",0,"CTRL"),this.setMouseAction("PAN",2),this.setMouseAction("ROTATE",0),this.setMouseAction("ZOOM","WHEEL"),this.setMouseAction("ZOOM",1),this.setMouseAction("FOV","WHEEL","SHIFT"),this.setMouseAction("FOV",1,"SHIFT")}compareMouseAction(t,e){return t.operation==e.operation?t.mouse==e.mouse&&t.key==e.key:!1}setMouseAction(t,e,i=null){const r=["PAN","ROTATE","ZOOM","FOV"],l=[0,1,2,"WHEEL"],h=["CTRL","SHIFT",null];let u;if(!r.includes(t)||!l.includes(e)||!h.includes(i)||e=="WHEEL"&&t!="ZOOM"&&t!="FOV")return!1;switch(t){case"PAN":u=Ft.PAN;break;case"ROTATE":u=Ft.ROTATE;break;case"ZOOM":u=Ft.SCALE;break;case"FOV":u=Ft.FOV;break}const f={operation:t,mouse:e,key:i,state:u};for(let m=0;m<this.mouseActions.length;m++)if(this.mouseActions[m].mouse==f.mouse&&this.mouseActions[m].key==f.key)return this.mouseActions.splice(m,1,f),!0;return this.mouseActions.push(f),!0}unsetMouseAction(t,e=null){for(let i=0;i<this.mouseActions.length;i++)if(this.mouseActions[i].mouse==t&&this.mouseActions[i].key==e)return this.mouseActions.splice(i,1),!0;return!1}getOpFromAction(t,e){let i;for(let r=0;r<this.mouseActions.length;r++)if(i=this.mouseActions[r],i.mouse==t&&i.key==e)return i.operation;if(e!=null){for(let r=0;r<this.mouseActions.length;r++)if(i=this.mouseActions[r],i.mouse==t&&i.key==null)return i.operation}return null}getOpStateFromAction(t,e){let i;for(let r=0;r<this.mouseActions.length;r++)if(i=this.mouseActions[r],i.mouse==t&&i.key==e)return i.state;if(e!=null){for(let r=0;r<this.mouseActions.length;r++)if(i=this.mouseActions[r],i.mouse==t&&i.key==null)return i.state}return null}getAngle(t,e){return Math.atan2(e.clientY-t.clientY,e.clientX-t.clientX)*180/Math.PI}updateTouchEvent(t){for(let e=0;e<this._touchCurrent.length;e++)if(this._touchCurrent[e].pointerId==t.pointerId){this._touchCurrent.splice(e,1,t);break}}applyTransformMatrix(t){if(t.camera!=null&&(this._m4_1.copy(this._cameraMatrixState).premultiply(t.camera),this._m4_1.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.updateMatrix(),(this._state==Ft.ROTATE||this._state==Ft.ZROTATE||this._state==Ft.ANIMATION_ROTATE)&&this.camera.up.copy(this._upState).applyQuaternion(this.camera.quaternion)),t.gizmos!=null&&(this._m4_1.copy(this._gizmoMatrixState).premultiply(t.gizmos),this._m4_1.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix()),this._state==Ft.SCALE||this._state==Ft.FOCUS||this._state==Ft.ANIMATION_FOCUS)if(this._tbRadius=this.calculateTbRadius(this.camera),this.adjustNearFar){const e=this.camera.position.distanceTo(this._gizmos.position),i=new nr;i.setFromObject(this._gizmos);const r=new jr;i.getBoundingSphere(r);const l=Math.max(this._nearPos0,r.radius+r.center.length()),h=e-this._initialNear,u=Math.min(l,h);this.camera.near=e-u;const f=Math.min(this._farPos0,-r.radius+r.center.length()),m=e-this._initialFar,_=Math.min(f,m);this.camera.far=e-_,this.camera.updateProjectionMatrix()}else{let e=!1;this.camera.near!=this._initialNear&&(this.camera.near=this._initialNear,e=!0),this.camera.far!=this._initialFar&&(this.camera.far=this._initialFar,e=!0),e&&this.camera.updateProjectionMatrix()}}calculateAngularSpeed(t,e,i,r){const l=e-t,h=(r-i)/1e3;return h==0?0:l/h}calculatePointersDistance(t,e){return Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2))}calculateRotationAxis(t,e){return this._rotationMatrix.extractRotation(this._cameraMatrixState),this._quat.setFromRotationMatrix(this._rotationMatrix),this._rotationAxis.crossVectors(t,e).applyQuaternion(this._quat),this._rotationAxis.normalize().clone()}calculateTbRadius(t){const e=t.position.distanceTo(this._gizmos.position);if(t.type=="PerspectiveCamera"){const i=Le.DEG2RAD*t.fov*.5,r=Math.atan(t.aspect*Math.tan(i));return Math.tan(Math.min(i,r))*e*this.radiusFactor}else if(t.type=="OrthographicCamera")return Math.min(t.top,t.right)*this.radiusFactor}focus(t,e,i=1){Oe.copy(t).sub(this._gizmos.position).multiplyScalar(i),this._translationMatrix.makeTranslation(Oe.x,Oe.y,Oe.z),Hh.copy(this._gizmoMatrixState),this._gizmoMatrixState.premultiply(this._translationMatrix),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),Wh.copy(this._cameraMatrixState),this._cameraMatrixState.premultiply(this._translationMatrix),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.enableZoom&&this.applyTransformMatrix(this.scale(e,this._gizmos.position)),this._gizmoMatrixState.copy(Hh),this._cameraMatrixState.copy(Wh)}drawGrid(){if(this.scene!=null){let i,r,l,h;if(this.camera.isOrthographicCamera){const u=this.camera.right-this.camera.left,f=this.camera.bottom-this.camera.top;l=Math.max(u,f),h=l/20,i=l/this.camera.zoom*3,r=i/h*this.camera.zoom}else if(this.camera.isPerspectiveCamera){const u=this.camera.position.distanceTo(this._gizmos.position),f=Le.DEG2RAD*this.camera.fov*.5,m=Math.atan(this.camera.aspect*Math.tan(f));l=Math.tan(Math.max(f,m))*u*2,h=l/20,i=l*3,r=i/h}this._grid==null&&(this._grid=new e0(i,r,8947848,8947848),this._grid.position.copy(this._gizmos.position),this._gridPosition.copy(this._grid.position),this._grid.quaternion.copy(this.camera.quaternion),this._grid.rotateX(Math.PI*.5),this.scene.add(this._grid))}}dispose(){this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("resize",this._onWindowResize),this.scene!==null&&this.scene.remove(this._gizmos),this.disposeGrid()}disposeGrid(){this._grid!=null&&this.scene!=null&&(this.scene.remove(this._grid),this._grid=null)}easeOutCubic(t){return 1-Math.pow(1-t,3)}activateGizmos(t){const e=this._gizmos.children[0],i=this._gizmos.children[1],r=this._gizmos.children[2];t?(e.material.setValues({opacity:1}),i.material.setValues({opacity:1}),r.material.setValues({opacity:1})):(e.material.setValues({opacity:.6}),i.material.setValues({opacity:.6}),r.material.setValues({opacity:.6}))}getCursorNDC(t,e,i){const r=i.getBoundingClientRect();return this._v2_1.setX((t-r.left)/r.width*2-1),this._v2_1.setY((r.bottom-e)/r.height*2-1),this._v2_1.clone()}getCursorPosition(t,e,i){return this._v2_1.copy(this.getCursorNDC(t,e,i)),this._v2_1.x*=(this.camera.right-this.camera.left)*.5,this._v2_1.y*=(this.camera.top-this.camera.bottom)*.5,this._v2_1.clone()}setCamera(t){t.lookAt(this.target),t.updateMatrix(),t.type=="PerspectiveCamera"&&(this._fov0=t.fov,this._fovState=t.fov),this._cameraMatrixState0.copy(t.matrix),this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraProjectionState.copy(t.projectionMatrix),this._zoom0=t.zoom,this._zoomState=this._zoom0,this._initialNear=t.near,this._nearPos0=t.position.distanceTo(this.target)-t.near,this._nearPos=this._initialNear,this._initialFar=t.far,this._farPos0=t.position.distanceTo(this.target)-t.far,this._farPos=this._initialFar,this._up0.copy(t.up),this._upState.copy(t.up),this.camera=t,this.camera.updateProjectionMatrix(),this._tbRadius=this.calculateTbRadius(t),this.makeGizmos(this.target,this._tbRadius)}setGizmosVisible(t){this._gizmos.visible=t,this.dispatchEvent(ye)}setTbRadius(t){this.radiusFactor=t,this._tbRadius=this.calculateTbRadius(this.camera);const i=new Ga(0,0,this._tbRadius,this._tbRadius).getPoints(this._curvePts),r=new bn().setFromPoints(i);for(const l in this._gizmos.children)this._gizmos.children[l].geometry=r;this.dispatchEvent(ye)}makeGizmos(t,e){const r=new Ga(0,0,e,e).getPoints(this._curvePts),l=new bn().setFromPoints(r),h=new zr({color:16744576,fog:!1,transparent:!0,opacity:.6}),u=new zr({color:8454016,fog:!1,transparent:!0,opacity:.6}),f=new zr({color:8421631,fog:!1,transparent:!0,opacity:.6}),m=new Ba(l,h),_=new Ba(l,u),g=new Ba(l,f),b=Math.PI*.5;if(m.rotation.x=b,_.rotation.y=b,this._gizmoMatrixState0.identity().setPosition(t),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this.camera.zoom!==1){const y=1/this.camera.zoom;this._scaleMatrix.makeScale(y,y,y),this._translationMatrix.makeTranslation(-t.x,-t.y,-t.z),this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix),this._translationMatrix.makeTranslation(t.x,t.y,t.z),this._gizmoMatrixState.premultiply(this._translationMatrix)}this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.traverse(function(y){y.isLine&&(y.geometry.dispose(),y.material.dispose())}),this._gizmos.clear(),this._gizmos.add(m),this._gizmos.add(_),this._gizmos.add(g)}onFocusAnim(t,e,i,r){if(this._timeStart==-1&&(this._timeStart=t),this._state==Ft.ANIMATION_FOCUS){const h=(t-this._timeStart)/this.focusAnimationTime;if(this._gizmoMatrixState.copy(r),h>=1)this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(e,this.scaleFactor),this._timeStart=-1,this.updateTbState(Ft.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(ye);else{const u=this.easeOutCubic(h),f=1-u+this.scaleFactor*u;this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(e,f,u),this.dispatchEvent(ye);const m=this;this._animationId=window.requestAnimationFrame(function(_){m.onFocusAnim(_,e,i,r.clone())})}}else this._animationId=-1,this._timeStart=-1}onRotationAnim(t,e,i){if(this._timeStart==-1&&(this._anglePrev=0,this._angleCurrent=0,this._timeStart=t),this._state==Ft.ANIMATION_ROTATE){const r=(t-this._timeStart)/1e3;if(i+-this.dampingFactor*r>0){this._angleCurrent=.5*-this.dampingFactor*Math.pow(r,2)+i*r+0,this.applyTransformMatrix(this.rotate(e,this._angleCurrent)),this.dispatchEvent(ye);const h=this;this._animationId=window.requestAnimationFrame(function(u){h.onRotationAnim(u,e,i)})}else this._animationId=-1,this._timeStart=-1,this.updateTbState(Ft.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(ye)}else this._animationId=-1,this._timeStart=-1,this._state!=Ft.ROTATE&&(this.activateGizmos(!1),this.dispatchEvent(ye))}pan(t,e,i=!1){const r=t.clone().sub(e);if(this.camera.isOrthographicCamera)r.multiplyScalar(1/this.camera.zoom);else if(this.camera.isPerspectiveCamera&&i){this._v3_1.setFromMatrixPosition(this._cameraMatrixState0),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);const l=this._v3_1.distanceTo(this._v3_2)/this.camera.position.distanceTo(this._gizmos.position);r.multiplyScalar(1/l)}return this._v3_1.set(r.x,r.y,0).applyQuaternion(this.camera.quaternion),this._m4_1.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z),this.setTransformationMatrices(this._m4_1,this._m4_1),vn}reset(){this.camera.zoom=this._zoom0,this.camera.isPerspectiveCamera&&(this.camera.fov=this._fov0),this.camera.near=this._nearPos,this.camera.far=this._farPos,this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(this._up0),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this._gizmoMatrixState0.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this._gizmos.position,this._tbRadius),this.camera.lookAt(this._gizmos.position),this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(ye)}rotate(t,e){const i=this._gizmos.position;return this._translationMatrix.makeTranslation(-i.x,-i.y,-i.z),this._rotationMatrix.makeRotationAxis(t,-e),this._m4_1.makeTranslation(i.x,i.y,i.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1),vn}copyState(){let t;this.camera.isOrthographicCamera?t=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}}):this.camera.isPerspectiveCamera&&(t=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraFov:this.camera.fov,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}})),navigator.clipboard.writeText(t)}pasteState(){const t=this;navigator.clipboard.readText().then(function(i){t.setStateFromJSON(i)})}saveState(){this._cameraMatrixState0.copy(this.camera.matrix),this._gizmoMatrixState0.copy(this._gizmos.matrix),this._nearPos=this.camera.near,this._farPos=this.camera.far,this._zoom0=this.camera.zoom,this._up0.copy(this.camera.up),this.camera.isPerspectiveCamera&&(this._fov0=this.camera.fov)}scale(t,e,i=!0){On.copy(e);let r=1/t;if(this.camera.isOrthographicCamera){this.camera.zoom=this._zoomState,this.camera.zoom*=t,this.camera.zoom>this.maxZoom?(this.camera.zoom=this.maxZoom,r=this._zoomState/this.maxZoom):this.camera.zoom<this.minZoom&&(this.camera.zoom=this.minZoom,r=this._zoomState/this.minZoom),this.camera.updateProjectionMatrix(),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this._scaleMatrix.makeScale(r,r,r),this._translationMatrix.makeTranslation(-this._v3_1.x,-this._v3_1.y,-this._v3_1.z),this._m4_2.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z).multiply(this._scaleMatrix),this._m4_2.multiply(this._translationMatrix),On.sub(this._v3_1);const l=On.clone().multiplyScalar(r);return On.sub(l),this._m4_1.makeTranslation(On.x,On.y,On.z),this._m4_2.premultiply(this._m4_1),this.setTransformationMatrices(this._m4_1,this._m4_2),vn}else if(this.camera.isPerspectiveCamera){this._v3_1.setFromMatrixPosition(this._cameraMatrixState),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);let l=this._v3_1.distanceTo(On),h=l-l*r;const u=l-h;if(u<this.minDistance?(r=this.minDistance/l,h=l-l*r):u>this.maxDistance&&(r=this.maxDistance/l,h=l-l*r),Oe.copy(On).sub(this._v3_1).normalize().multiplyScalar(h),this._m4_1.makeTranslation(Oe.x,Oe.y,Oe.z),i){const f=this._v3_2;l=f.distanceTo(On),h=l-l*r,Oe.copy(On).sub(this._v3_2).normalize().multiplyScalar(h),this._translationMatrix.makeTranslation(f.x,f.y,f.z),this._scaleMatrix.makeScale(r,r,r),this._m4_2.makeTranslation(Oe.x,Oe.y,Oe.z).multiply(this._translationMatrix),this._m4_2.multiply(this._scaleMatrix),this._translationMatrix.makeTranslation(-f.x,-f.y,-f.z),this._m4_2.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1,this._m4_2)}else this.setTransformationMatrices(this._m4_1);return vn}}setFov(t){this.camera.isPerspectiveCamera&&(this.camera.fov=Le.clamp(t,this.minFov,this.maxFov),this.camera.updateProjectionMatrix())}setTransformationMatrices(t=null,e=null){t!=null?vn.camera!=null?vn.camera.copy(t):vn.camera=t.clone():vn.camera=null,e!=null?vn.gizmos!=null?vn.gizmos.copy(e):vn.gizmos=e.clone():vn.gizmos=null}zRotate(t,e){return this._rotationMatrix.makeRotationAxis(this._rotationAxis,e),this._translationMatrix.makeTranslation(-t.x,-t.y,-t.z),this._m4_1.makeTranslation(t.x,t.y,t.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(t),this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis,e),this._v3_2.sub(this._v3_1),this._m4_2.makeTranslation(this._v3_2.x,this._v3_2.y,this._v3_2.z),this.setTransformationMatrices(this._m4_1,this._m4_2),vn}getRaycaster(){return n0}unprojectOnObj(t,e){const i=this.getRaycaster();i.near=e.near,i.far=e.far,i.setFromCamera(t,e);const r=i.intersectObjects(this.scene.children,!0);for(let l=0;l<r.length;l++)if(r[l].object.uuid!=this._gizmos.uuid&&r[l].face!=null)return r[l].point.clone();return null}unprojectOnTbSurface(t,e,i,r,l){if(t.type=="OrthographicCamera"){this._v2_1.copy(this.getCursorPosition(e,i,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0);const h=Math.pow(this._v2_1.x,2),u=Math.pow(this._v2_1.y,2),f=Math.pow(this._tbRadius,2);return h+u<=f*.5?this._v3_1.setZ(Math.sqrt(f-(h+u))):this._v3_1.setZ(f*.5/Math.sqrt(h+u)),this._v3_1}else if(t.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(e,i,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(t.projectionMatrixInverse);const h=this._v3_1.clone().normalize(),u=t.position.distanceTo(this._gizmos.position),f=Math.pow(l,2),m=this._v3_1.z,_=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));if(_==0)return h.set(this._v3_1.x,this._v3_1.y,l),h;const g=m/_,b=u;let y=Math.pow(g,2)+1,C=2*g*b,S=Math.pow(b,2)-f,w=Math.pow(C,2)-4*y*S;if(w>=0&&(this._v2_1.setX((-C-Math.sqrt(w))/(2*y)),this._v2_1.setY(g*this._v2_1.x+b),Le.RAD2DEG*this._v2_1.angle()>=45)){const R=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(u-this._v2_1.y,2));return h.multiplyScalar(R),h.z+=u,h}y=g,C=b,S=-f*.5,w=Math.pow(C,2)-4*y*S,this._v2_1.setX((-C-Math.sqrt(w))/(2*y)),this._v2_1.setY(g*this._v2_1.x+b);const x=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(u-this._v2_1.y,2));return h.multiplyScalar(x),h.z+=u,h}}unprojectOnTbPlane(t,e,i,r,l=!1){if(t.type=="OrthographicCamera")return this._v2_1.copy(this.getCursorPosition(e,i,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0),this._v3_1.clone();if(t.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(e,i,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(t.projectionMatrixInverse);const h=this._v3_1.clone().normalize(),u=this._v3_1.z,f=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));let m;if(l?m=this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)):m=t.position.distanceTo(this._gizmos.position),f==0)return h.set(0,0,0),h;const _=u/f,g=m,b=-g/_,y=Math.sqrt(Math.pow(g,2)+Math.pow(b,2));return h.multiplyScalar(y),h.z=0,h}}updateMatrixState(){this._cameraMatrixState.copy(this.camera.matrix),this._gizmoMatrixState.copy(this._gizmos.matrix),this.camera.isOrthographicCamera?(this._cameraProjectionState.copy(this.camera.projectionMatrix),this.camera.updateProjectionMatrix(),this._zoomState=this.camera.zoom):this.camera.isPerspectiveCamera&&(this._fovState=this.camera.fov)}updateTbState(t,e){this._state=t,e&&this.updateMatrixState()}update(){if(this.target.equals(this._currentTarget)===!1&&(this._gizmos.position.copy(this.target),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this.target,this._tbRadius),this._currentTarget.copy(this.target)),this.camera.isOrthographicCamera){if(this.camera.zoom>this.maxZoom||this.camera.zoom<this.minZoom){const e=Le.clamp(this.camera.zoom,this.minZoom,this.maxZoom);this.applyTransformMatrix(this.scale(e/this.camera.zoom,this._gizmos.position,!0))}}else if(this.camera.isPerspectiveCamera){const e=this.camera.position.distanceTo(this._gizmos.position);if(e>this.maxDistance+1e-6||e<this.minDistance-1e-6){const r=Le.clamp(e,this.minDistance,this.maxDistance);this.applyTransformMatrix(this.scale(r/e,this._gizmos.position)),this.updateMatrixState()}(this.camera.fov<this.minFov||this.camera.fov>this.maxFov)&&(this.camera.fov=Le.clamp(this.camera.fov,this.minFov,this.maxFov),this.camera.updateProjectionMatrix());const i=this._tbRadius;if(this._tbRadius=this.calculateTbRadius(this.camera),i<this._tbRadius-1e-6||i>this._tbRadius+1e-6){const r=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3,l=this._tbRadius/r,u=new Ga(0,0,l,l).getPoints(this._curvePts),f=new bn().setFromPoints(u);for(const m in this._gizmos.children)this._gizmos.children[m].geometry=f}}this.camera.lookAt(this._gizmos.position)}setStateFromJSON(t){const e=JSON.parse(t);if(e.arcballState!=null){this._cameraMatrixState.fromArray(e.arcballState.cameraMatrix.elements),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(e.arcballState.cameraUp),this.camera.near=e.arcballState.cameraNear,this.camera.far=e.arcballState.cameraFar,this.camera.zoom=e.arcballState.cameraZoom,this.camera.isPerspectiveCamera&&(this.camera.fov=e.arcballState.cameraFov),this._gizmoMatrixState.fromArray(e.arcballState.gizmoMatrix.elements),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera);const i=new qt().copy(this._gizmoMatrixState0);this.makeGizmos(this._gizmos.position,this._tbRadius),this._gizmoMatrixState0.copy(i),this.camera.lookAt(this._gizmos.position),this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(ye)}}}function s0(){const s=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3;this._tbRadius=this.calculateTbRadius(this.camera);const t=this._tbRadius/s,i=new Ga(0,0,t,t).getPoints(this._curvePts),r=new bn().setFromPoints(i);for(const l in this._gizmos.children)this._gizmos.children[l].geometry=r;this.dispatchEvent(ye)}function r0(s){if(this.enabled){for(let t=0;t<this.mouseActions.length;t++)if(this.mouseActions[t].mouse==2){s.preventDefault();break}}}function a0(){this._touchStart.splice(0,this._touchStart.length),this._touchCurrent.splice(0,this._touchCurrent.length),this._input=ve.NONE}function o0(s){if(s.button==0&&s.isPrimary?(this._downValid=!0,this._downEvents.push(s),this._downStart=performance.now()):this._downValid=!1,s.pointerType=="touch"&&this._input!=ve.CURSOR)switch(this._touchStart.push(s),this._touchCurrent.push(s),this._input){case ve.NONE:this._input=ve.ONE_FINGER,this.onSinglePanStart(s,"ROTATE"),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp);break;case ve.ONE_FINGER:case ve.ONE_FINGER_SWITCHED:this._input=ve.TWO_FINGER,this.onRotateStart(),this.onPinchStart(),this.onDoublePanStart();break;case ve.TWO_FINGER:this._input=ve.MULT_FINGER,this.onTriplePanStart(s);break}else if(s.pointerType!="touch"&&this._input==ve.NONE){let t=null;s.ctrlKey||s.metaKey?t="CTRL":s.shiftKey&&(t="SHIFT"),this._mouseOp=this.getOpFromAction(s.button,t),this._mouseOp!=null&&(window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),this._input=ve.CURSOR,this._button=s.button,this.onSinglePanStart(s,this._mouseOp))}}function l0(s){if(s.pointerType=="touch"&&this._input!=ve.CURSOR)switch(this._input){case ve.ONE_FINGER:this.updateTouchEvent(s),this.onSinglePanMove(s,Ft.ROTATE);break;case ve.ONE_FINGER_SWITCHED:if(this.calculatePointersDistance(this._touchCurrent[0],s)*this._devPxRatio>=this._switchSensibility){this._input=ve.ONE_FINGER,this.updateTouchEvent(s),this.onSinglePanStart(s,"ROTATE");break}break;case ve.TWO_FINGER:this.updateTouchEvent(s),this.onRotateMove(),this.onPinchMove(),this.onDoublePanMove();break;case ve.MULT_FINGER:this.updateTouchEvent(s),this.onTriplePanMove(s);break}else if(s.pointerType!="touch"&&this._input==ve.CURSOR){let t=null;s.ctrlKey||s.metaKey?t="CTRL":s.shiftKey&&(t="SHIFT");const e=this.getOpStateFromAction(this._button,t);e!=null&&this.onSinglePanMove(s,e)}this._downValid&&this.calculatePointersDistance(this._downEvents[this._downEvents.length-1],s)*this._devPxRatio>this._movementThreshold&&(this._downValid=!1)}function c0(s){if(s.pointerType=="touch"&&this._input!=ve.CURSOR){const t=this._touchCurrent.length;for(let e=0;e<t;e++)if(this._touchCurrent[e].pointerId==s.pointerId){this._touchCurrent.splice(e,1),this._touchStart.splice(e,1);break}switch(this._input){case ve.ONE_FINGER:case ve.ONE_FINGER_SWITCHED:window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=ve.NONE,this.onSinglePanEnd();break;case ve.TWO_FINGER:this.onDoublePanEnd(s),this.onPinchEnd(s),this.onRotateEnd(s),this._input=ve.ONE_FINGER_SWITCHED;break;case ve.MULT_FINGER:this._touchCurrent.length==0&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=ve.NONE,this.onTriplePanEnd());break}}else s.pointerType!="touch"&&this._input==ve.CURSOR&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=ve.NONE,this.onSinglePanEnd(),this._button=-1);if(s.isPrimary)if(this._downValid)if(s.timeStamp-this._downEvents[this._downEvents.length-1].timeStamp<=this._maxDownTime)if(this._nclicks==0)this._nclicks=1,this._clickStart=performance.now();else{const e=s.timeStamp-this._clickStart,i=this.calculatePointersDistance(this._downEvents[1],this._downEvents[0])*this._devPxRatio;e<=this._maxInterval&&i<=this._posThreshold?(this._nclicks=0,this._downEvents.splice(0,this._downEvents.length),this.onDoubleTap(s)):(this._nclicks=1,this._downEvents.shift(),this._clickStart=performance.now())}else this._downValid=!1,this._nclicks=0,this._downEvents.splice(0,this._downEvents.length);else this._nclicks=0,this._downEvents.splice(0,this._downEvents.length)}function h0(s){if(this.enabled&&this.enableZoom){let t=null;s.ctrlKey||s.metaKey?t="CTRL":s.shiftKey&&(t="SHIFT");const e=this.getOpFromAction("WHEEL",t);if(e!=null){s.preventDefault(),this.dispatchEvent(kn);const i=125;let r=s.deltaY/i,l=1;switch(r>0?l=1/this.scaleFactor:r<0&&(l=this.scaleFactor),e){case"ZOOM":if(this.updateTbState(Ft.SCALE,!0),r>0?l=1/Math.pow(this.scaleFactor,r):r<0&&(l=Math.pow(this.scaleFactor,-r)),this.cursorZoom&&this.enablePan){let h;this.camera.isOrthographicCamera?h=this.unprojectOnTbPlane(this.camera,s.clientX,s.clientY,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(h=this.unprojectOnTbPlane(this.camera,s.clientX,s.clientY,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)),this.applyTransformMatrix(this.scale(l,h))}else this.applyTransformMatrix(this.scale(l,this._gizmos.position));this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(ye),this.dispatchEvent(Tn);break;case"FOV":if(this.camera.isPerspectiveCamera){this.updateTbState(Ft.FOV,!0),s.deltaX!=0&&(r=s.deltaX/i,l=1,r>0?l=1/Math.pow(this.scaleFactor,r):r<0&&(l=Math.pow(this.scaleFactor,-r))),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const h=this._v3_1.distanceTo(this._gizmos.position);let u=h/l;u=Le.clamp(u,this.minDistance,this.maxDistance);const f=h*Math.tan(Le.DEG2RAD*this.camera.fov*.5);let m=Le.RAD2DEG*(Math.atan(f/u)*2);m>this.maxFov?m=this.maxFov:m<this.minFov&&(m=this.minFov);const _=f/Math.tan(Le.DEG2RAD*(m/2));l=h/_,this.setFov(m),this.applyTransformMatrix(this.scale(l,this._gizmos.position,!1))}this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(ye),this.dispatchEvent(Tn);break}}}}const Vr=class Vr{constructor(t){Ce(this,"camera");Ce(this,"controls");Ce(this,"settings",{fov:75,gizmosEnabled:!0});this.camera=new Pn(this.settings.fov,window.innerWidth/window.innerHeight,.1,1e4),this.camera.position.y=25,this.controls=new i0(this.camera,document.getElementById("content"),t),this.controls.enableGizmos=this.settings.gizmosEnabled}get mainCam(){return this.camera}resetCamera(){this.controls.reset()}resizeCam(t,e){if(this.checkResize(t,e)){const i=e.domElement;this.camera.aspect=i.clientWidth/i.clientHeight,this.camera.updateProjectionMatrix()}}checkResize(t,e){const i=t.clientWidth,r=t.clientHeight,l=t.width!==i||t.height!==r;return l&&e.setSize(i,r,!1),l}static getInstance(t){return Vr.instance?this.instance:(this.instance=new Vr(t),this.instance)}};Ce(Vr,"instance");let qa=Vr;var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function u0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ml={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(s,t){(function(e,i){i(t)})(Cu,function(e){class i{constructor(n){const[a,d]=n.split("-"),M=a.split(".");this.major=parseInt(M[0],10),this.minor=parseInt(M[1],10),this.patch=parseInt(M[2],10),this.prerelease=d??null}toString(){const n=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[n,this.prerelease].join("-"):n}}class r{constructor(n){this.controller_=n}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(n){this.controller_.viewProps.set("disabled",n)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(n){this.controller_.viewProps.set("hidden",n)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class l{constructor(n){this.target=n}}class h extends l{constructor(n,a,d,M){super(n),this.value=a,this.presetKey=d,this.last=M??!0}}class u extends l{constructor(n,a,d){super(n),this.value=a,this.presetKey=d}}class f extends l{constructor(n,a){super(n),this.expanded=a}}class m extends l{constructor(n,a){super(n),this.index=a}}function _(o){return o}function g(o){return o==null}function b(o,n){if(o.length!==n.length)return!1;for(let a=0;a<o.length;a++)if(o[a]!==n[a])return!1;return!0}function y(o,n){let a=o;do{const d=Object.getOwnPropertyDescriptor(a,n);if(d&&(d.set!==void 0||d.writable===!0))return!0;a=Object.getPrototypeOf(a)}while(a!==null);return!1}const C={alreadydisposed:()=>"View has been already disposed",invalidparams:o=>`Invalid parameters for '${o.name}'`,nomatchingcontroller:o=>`No matching controller for '${o.key}'`,nomatchingview:o=>`No matching view for '${JSON.stringify(o.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:o=>`Property '${o.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class S{static alreadyDisposed(){return new S({type:"alreadydisposed"})}static notBindable(){return new S({type:"notbindable"})}static propertyNotFound(n){return new S({type:"propertynotfound",context:{name:n}})}static shouldNeverHappen(){return new S({type:"shouldneverhappen"})}constructor(n){var a;this.message=(a=C[n.type](n.context))!==null&&a!==void 0?a:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=n.type}}class w{constructor(n,a,d){this.obj_=n,this.key_=a,this.presetKey_=d??a}static isBindable(n){return!(n===null||typeof n!="object"&&typeof n!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(n){this.obj_[this.key_]=n}writeProperty(n,a){const d=this.read();if(!w.isBindable(d))throw S.notBindable();if(!(n in d))throw S.propertyNotFound(n);d[n]=a}}class x extends r{get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get title(){var n;return(n=this.controller_.valueController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.valueController.props.set("title",n)}on(n,a){const d=a.bind(this);return this.controller_.valueController.emitter.on(n,()=>{d(new l(this))}),this}}class I{constructor(){this.observers_={}}on(n,a){let d=this.observers_[n];return d||(d=this.observers_[n]=[]),d.push({handler:a}),this}off(n,a){const d=this.observers_[n];return d&&(this.observers_[n]=d.filter(M=>M.handler!==a)),this}emit(n,a){const d=this.observers_[n];d&&d.forEach(M=>{M.handler(a)})}}const R="tp";function D(o){return(a,d)=>[R,"-",o,"v",a?`_${a}`:"",d?`-${d}`:""].join("")}function O(o,n){return a=>n(o(a))}function k(o){return o.rawValue}function z(o,n){o.emitter.on("change",O(k,n)),n(o.rawValue)}function H(o,n,a){z(o.value(n),a)}function T(o,n,a){a?o.classList.add(n):o.classList.remove(n)}function A(o,n){return a=>{T(o,n,a)}}function nt(o,n){z(o,a=>{n.textContent=a??""})}const rt=D("btn");class j{constructor(n,a){this.element=n.createElement("div"),this.element.classList.add(rt()),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("button");d.classList.add(rt("b")),a.viewProps.bindDisabled(d),this.element.appendChild(d),this.buttonElement=d;const M=n.createElement("div");M.classList.add(rt("t")),nt(a.props.value("title"),M),this.buttonElement.appendChild(M)}}class ${constructor(n,a){this.emitter=new I,this.onClick_=this.onClick_.bind(this),this.props=a.props,this.viewProps=a.viewProps,this.view=new j(n,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class et{constructor(n,a){var d;this.constraint_=a==null?void 0:a.constraint,this.equals_=(d=a==null?void 0:a.equals)!==null&&d!==void 0?d:(M,F)=>M===F,this.emitter=new I,this.rawValue_=n}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,a){const d=a??{forceEmit:!1,last:!0},M=this.constraint_?this.constraint_.constrain(n):n,F=this.rawValue_;this.equals_(F,M)&&!d.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=M,this.emitter.emit("change",{options:d,previousRawValue:F,rawValue:M,sender:this}))}}class ct{constructor(n){this.emitter=new I,this.value_=n}get rawValue(){return this.value_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,a){const d=a??{forceEmit:!1,last:!0},M=this.value_;M===n&&!d.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=n,this.emitter.emit("change",{options:d,previousRawValue:M,rawValue:this.value_,sender:this}))}}function Z(o,n){const a=n==null?void 0:n.constraint,d=n==null?void 0:n.equals;return!a&&!d?new ct(o):new et(o,n)}class q{constructor(n){this.emitter=new I,this.valMap_=n;for(const a in this.valMap_)this.valMap_[a].emitter.on("change",()=>{this.emitter.emit("change",{key:a,sender:this})})}static createCore(n){return Object.keys(n).reduce((d,M)=>Object.assign(d,{[M]:Z(n[M])}),{})}static fromObject(n){const a=this.createCore(n);return new q(a)}get(n){return this.valMap_[n].rawValue}set(n,a){this.valMap_[n].rawValue=a}value(n){return this.valMap_[n]}}function dt(o,n){const d=Object.keys(n).reduce((M,F)=>{if(M===void 0)return;const W=n[F],pt=W(o[F]);return pt.succeeded?Object.assign(Object.assign({},M),{[F]:pt.value}):void 0},{});return d}function ht(o,n){return o.reduce((a,d)=>{if(a===void 0)return;const M=n(d);if(!(!M.succeeded||M.value===void 0))return[...a,M.value]},[])}function J(o){return o===null?!1:typeof o=="object"}function Q(o){return n=>a=>{if(!n&&a===void 0)return{succeeded:!1,value:void 0};if(n&&a===void 0)return{succeeded:!0,value:void 0};const d=o(a);return d!==void 0?{succeeded:!0,value:d}:{succeeded:!1,value:void 0}}}function gt(o){return{custom:n=>Q(n)(o),boolean:Q(n=>typeof n=="boolean"?n:void 0)(o),number:Q(n=>typeof n=="number"?n:void 0)(o),string:Q(n=>typeof n=="string"?n:void 0)(o),function:Q(n=>typeof n=="function"?n:void 0)(o),constant:n=>Q(a=>a===n?n:void 0)(o),raw:Q(n=>n)(o),object:n=>Q(a=>{if(J(a))return dt(a,n)})(o),array:n=>Q(a=>{if(Array.isArray(a))return ht(a,n)})(o)}}const ut={optional:gt(!0),required:gt(!1)};function ft(o,n){const a=ut.required.object(n)(o);return a.succeeded?a.value:void 0}function Rt(o){console.warn([`Missing '${o.key}' of ${o.target} in ${o.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function Gt(o){return o&&o.parentElement&&o.parentElement.removeChild(o),null}class Tt{constructor(n){this.value_=n}static create(n){return[new Tt(n),(a,d)=>{n.setRawValue(a,d)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const re=D("");function ze(o,n){return A(o,re(void 0,n))}class Vt extends q{constructor(n){var a;super(n),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Tt.create(Z(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(a=this.get("parent"))===null||a===void 0||a.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(n){var a,d,M;const F=n??{};return new Vt(q.createCore({disabled:(a=F.disabled)!==null&&a!==void 0?a:!1,disposed:!1,hidden:(d=F.hidden)!==null&&d!==void 0?d:!1,parent:(M=F.parent)!==null&&M!==void 0?M:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(n){z(this.globalDisabled_,ze(n,"disabled")),H(this,"hidden",ze(n,"hidden"))}bindDisabled(n){z(this.globalDisabled_,a=>{n.disabled=a})}bindTabIndex(n){z(this.globalDisabled_,a=>{n.tabIndex=a?-1:0})}handleDispose(n){this.value("disposed").emitter.on("change",a=>{a&&n()})}getGlobalDisabled_(){const n=this.get("parent");return(n?n.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(n){var a;const d=n.previousRawValue;d==null||d.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(a=this.get("parent"))===null||a===void 0||a.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function K(){return["veryfirst","first","last","verylast"]}const De=D(""),Nt={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Ht{constructor(n){this.parent_=null,this.blade=n.blade,this.view=n.view,this.viewProps=n.viewProps;const a=this.view.element;this.blade.value("positions").emitter.on("change",()=>{K().forEach(d=>{a.classList.remove(De(void 0,Nt[d]))}),this.blade.get("positions").forEach(d=>{a.classList.add(De(void 0,Nt[d]))})}),this.viewProps.handleDispose(()=>{Gt(a)})}get parent(){return this.parent_}set parent(n){if(this.parent_=n,!("parent"in this.viewProps.valMap_)){Rt({key:"parent",target:Vt.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const Ut="http://www.w3.org/2000/svg";function le(o){o.offsetHeight}function ee(o,n){const a=o.style.transition;o.style.transition="none",n(),o.style.transition=a}function jt(o){return o.ontouchstart!==void 0}function ue(){return globalThis}function Ue(){return ue().document}function Ie(o){const n=o.ownerDocument.defaultView;return n&&"document"in n?o.getContext("2d",{willReadFrequently:!0}):null}const N={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function P(o,n){const a=o.createElementNS(Ut,"svg");return a.innerHTML=N[n],a}function st(o,n,a){o.insertBefore(n,o.children[a])}function mt(o){o.parentElement&&o.parentElement.removeChild(o)}function _t(o){for(;o.children.length>0;)o.removeChild(o.children[0])}function Et(o){for(;o.childNodes.length>0;)o.removeChild(o.childNodes[0])}function At(o){return o.relatedTarget?o.relatedTarget:"explicitOriginalTarget"in o?o.explicitOriginalTarget:null}const xt=D("lbl");function lt(o,n){const a=o.createDocumentFragment();return n.split(`
`).map(M=>o.createTextNode(M)).forEach((M,F)=>{F>0&&a.appendChild(o.createElement("br")),a.appendChild(M)}),a}class Lt{constructor(n,a){this.element=n.createElement("div"),this.element.classList.add(xt()),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("div");d.classList.add(xt("l")),H(a.props,"label",F=>{g(F)?this.element.classList.add(xt(void 0,"nol")):(this.element.classList.remove(xt(void 0,"nol")),Et(d),d.appendChild(lt(n,F)))}),this.element.appendChild(d),this.labelElement=d;const M=n.createElement("div");M.classList.add(xt("v")),this.element.appendChild(M),this.valueElement=M}}class Dt extends Ht{constructor(n,a){const d=a.valueController.viewProps;super(Object.assign(Object.assign({},a),{view:new Lt(n,{props:a.props,viewProps:d}),viewProps:d})),this.props=a.props,this.valueController=a.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Ot={id:"button",type:"blade",accept(o){const n=ut,a=ft(o,{title:n.required.string,view:n.required.constant("button"),label:n.optional.string});return a?{params:a}:null},controller(o){return new Dt(o.document,{blade:o.blade,props:q.fromObject({label:o.params.label}),valueController:new $(o.document,{props:q.fromObject({title:o.params.title}),viewProps:o.viewProps})})},api(o){return!(o.controller instanceof Dt)||!(o.controller.valueController instanceof $)?null:new x(o.controller)}};class St extends Ht{constructor(n){super(n),this.value=n.value}}function Ct(){return new q({positions:Z([],{equals:b})})}class Kt extends q{constructor(n){super(n)}static create(n){const a={completed:!0,expanded:n,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},d=q.createCore(a);return new Kt(d)}get styleExpanded(){var n;return(n=this.get("temporaryExpanded"))!==null&&n!==void 0?n:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const n=this.get("expandedHeight");return this.get("shouldFixHeight")&&!g(n)?`${n}px`:"auto"}bindExpandedClass(n,a){const d=()=>{this.styleExpanded?n.classList.add(a):n.classList.remove(a)};H(this,"expanded",d),H(this,"temporaryExpanded",d)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function fe(o,n){let a=0;return ee(n,()=>{o.set("expandedHeight",null),o.set("temporaryExpanded",!0),le(n),a=n.clientHeight,o.set("temporaryExpanded",null),le(n)}),a}function V(o,n){n.style.height=o.styleHeight}function wt(o,n){o.value("expanded").emitter.on("beforechange",()=>{if(o.set("completed",!1),g(o.get("expandedHeight"))){const a=fe(o,n);a>0&&o.set("expandedHeight",a)}o.set("shouldFixHeight",!0),le(n)}),o.emitter.on("change",()=>{V(o,n)}),V(o,n),n.addEventListener("transitionend",a=>{a.propertyName==="height"&&o.cleanUpTransition()})}class tt extends r{constructor(n,a){super(n),this.rackApi_=a}}function bt(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"button"}))}function Mt(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"folder"}))}function ae(o,n){const a=n??{};return o.addBlade(Object.assign(Object.assign({},a),{view:"separator"}))}function _e(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"tab"}))}class be{constructor(n){this.emitter=new I,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=n}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(n){for(const a of this.allItems())if(n(a))return a;return null}includes(n){return this.cache_.has(n)}add(n,a){if(this.includes(n))throw S.shouldNeverHappen();const d=a!==void 0?a:this.items_.length;this.items_.splice(d,0,n),this.cache_.add(n);const M=this.extract_(n);M&&(M.emitter.on("add",this.onSubListAdd_),M.emitter.on("remove",this.onSubListRemove_),M.allItems().forEach(F=>{this.cache_.add(F)})),this.emitter.emit("add",{index:d,item:n,root:this,target:this})}remove(n){const a=this.items_.indexOf(n);if(a<0)return;this.items_.splice(a,1),this.cache_.delete(n);const d=this.extract_(n);d&&(d.emitter.off("add",this.onSubListAdd_),d.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:a,item:n,root:this,target:this})}onSubListAdd_(n){this.cache_.add(n.item),this.emitter.emit("add",{index:n.index,item:n.item,root:this,target:n.target})}onSubListRemove_(n){this.cache_.delete(n.item),this.emitter.emit("remove",{index:n.index,item:n.item,root:this,target:n.target})}}class qe extends r{constructor(n){super(n),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new I,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,a){const d=a.bind(this);return this.emitter_.on(n,M=>{d(M.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(n){const a=n.sender.target.read();this.emitter_.emit("change",{event:new h(this,a,this.controller_.binding.target.presetKey,n.options.last)})}}class ne extends Dt{constructor(n,a){super(n,a),this.binding=a.binding}}class je extends r{constructor(n){super(n),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new I,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,a){const d=a.bind(this);return this.emitter_.on(n,M=>{d(M.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(n){const a=n.sender.target.read();this.emitter_.emit("update",{event:new u(this,a,this.controller_.binding.target.presetKey)})}}class xe extends Dt{constructor(n,a){super(n,a),this.binding=a.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Bi(o){return o instanceof Rn?o.apiSet_:o instanceof tt?o.rackApi_.apiSet_:null}function Wn(o,n){const a=o.find(d=>d.controller_===n);if(!a)throw S.shouldNeverHappen();return a}function _s(o,n,a){if(!w.isBindable(o))throw S.notBindable();return new w(o,n,a)}class Rn extends r{constructor(n,a){super(n),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new I,this.apiSet_=new be(Bi),this.pool_=a;const d=this.controller_.rack;d.emitter.on("add",this.onRackAdd_),d.emitter.on("remove",this.onRackRemove_),d.emitter.on("inputchange",this.onRackInputChange_),d.emitter.on("monitorupdate",this.onRackMonitorUpdate_),d.children.forEach(M=>{this.setUpApi_(M)})}get children(){return this.controller_.rack.children.map(n=>Wn(this.apiSet_,n))}addInput(n,a,d){const M=d??{},F=this.controller_.view.element.ownerDocument,W=this.pool_.createInput(F,_s(n,a,M.presetKey),M),pt=new qe(W);return this.add(pt,M.index)}addMonitor(n,a,d){const M=d??{},F=this.controller_.view.element.ownerDocument,W=this.pool_.createMonitor(F,_s(n,a),M),pt=new je(W);return this.add(pt,M.index)}addFolder(n){return Mt(this,n)}addButton(n){return bt(this,n)}addSeparator(n){return ae(this,n)}addTab(n){return _e(this,n)}add(n,a){this.controller_.rack.add(n.controller_,a);const d=this.apiSet_.find(M=>M.controller_===n.controller_);return d&&this.apiSet_.remove(d),this.apiSet_.add(n),n}remove(n){this.controller_.rack.remove(n.controller_)}addBlade(n){const a=this.controller_.view.element.ownerDocument,d=this.pool_.createBlade(a,n),M=this.pool_.createBladeApi(d);return this.add(M,n.index)}on(n,a){const d=a.bind(this);return this.emitter_.on(n,M=>{d(M.event)}),this}setUpApi_(n){this.apiSet_.find(d=>d.controller_===n)||this.apiSet_.add(this.pool_.createBladeApi(n))}onRackAdd_(n){this.setUpApi_(n.bladeController)}onRackRemove_(n){if(n.isRoot){const a=Wn(this.apiSet_,n.bladeController);this.apiSet_.remove(a)}}onRackInputChange_(n){const a=n.bladeController;if(a instanceof ne){const d=Wn(this.apiSet_,a),M=a.binding;this.emitter_.emit("change",{event:new h(d,M.target.read(),M.target.presetKey,n.options.last)})}else if(a instanceof St){const d=Wn(this.apiSet_,a);this.emitter_.emit("change",{event:new h(d,a.value.rawValue,void 0,n.options.last)})}}onRackMonitorUpdate_(n){if(!(n.bladeController instanceof xe))throw S.shouldNeverHappen();const a=Wn(this.apiSet_,n.bladeController),d=n.bladeController.binding;this.emitter_.emit("update",{event:new u(a,d.target.read(),d.target.presetKey)})}}class bi extends tt{constructor(n,a){super(n,new Rn(n.rackController,a)),this.emitter_=new I,this.controller_.foldable.value("expanded").emitter.on("change",d=>{this.emitter_.emit("fold",{event:new f(this,d.sender.rawValue)})}),this.rackApi_.on("change",d=>{this.emitter_.emit("change",{event:d})}),this.rackApi_.on("update",d=>{this.emitter_.emit("update",{event:d})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(n){this.controller_.foldable.set("expanded",n)}get title(){return this.controller_.props.get("title")}set title(n){this.controller_.props.set("title",n)}get children(){return this.rackApi_.children}addInput(n,a,d){return this.rackApi_.addInput(n,a,d)}addMonitor(n,a,d){return this.rackApi_.addMonitor(n,a,d)}addFolder(n){return this.rackApi_.addFolder(n)}addButton(n){return this.rackApi_.addButton(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,a){return this.rackApi_.add(n,a)}remove(n){this.rackApi_.remove(n)}addBlade(n){return this.rackApi_.addBlade(n)}on(n,a){const d=a.bind(this);return this.emitter_.on(n,M=>{d(M.event)}),this}}class Xn extends Ht{constructor(n){super({blade:n.blade,view:n.view,viewProps:n.rackController.viewProps}),this.rackController=n.rackController}}class vs{constructor(n,a){const d=D(a.viewName);this.element=n.createElement("div"),this.element.classList.add(d()),a.viewProps.bindClassModifiers(this.element)}}function rr(o,n){for(let a=0;a<o.length;a++){const d=o[a];if(d instanceof ne&&d.binding===n)return d}return null}function ar(o,n){for(let a=0;a<o.length;a++){const d=o[a];if(d instanceof xe&&d.binding===n)return d}return null}function or(o,n){for(let a=0;a<o.length;a++){const d=o[a];if(d instanceof St&&d.value===n)return d}return null}function U(o){return o instanceof X?o.rack:o instanceof Xn?o.rackController.rack:null}function Y(o){const n=U(o);return n?n.bcSet_:null}class at{constructor(n){var a,d;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new I,this.blade_=(a=n.blade)!==null&&a!==void 0?a:null,(d=this.blade_)===null||d===void 0||d.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=n.viewProps,this.bcSet_=new be(Y),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(n,a){var d;(d=n.parent)===null||d===void 0||d.remove(n),y(n,"parent")?n.parent=this:(n.parent_=this,Rt({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(n,a)}remove(n){y(n,"parent")?n.parent=null:(n.parent_=null,Rt({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(n)}find(n){return this.bcSet_.allItems().filter(a=>a instanceof n)}onSetAdd_(n){this.updatePositions_();const a=n.target===n.root;if(this.emitter.emit("add",{bladeController:n.item,index:n.index,isRoot:a,sender:this}),!a)return;const d=n.item;if(d.viewProps.emitter.on("change",this.onChildViewPropsChange_),d.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),d.viewProps.handleDispose(this.onChildDispose_),d instanceof ne)d.binding.emitter.on("change",this.onChildInputChange_);else if(d instanceof xe)d.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(d instanceof St)d.value.emitter.on("change",this.onChildValueChange_);else{const M=U(d);if(M){const F=M.emitter;F.on("layout",this.onDescendantLayout_),F.on("inputchange",this.onDescendantInputChange_),F.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(n){this.updatePositions_();const a=n.target===n.root;if(this.emitter.emit("remove",{bladeController:n.item,isRoot:a,sender:this}),!a)return;const d=n.item;if(d instanceof ne)d.binding.emitter.off("change",this.onChildInputChange_);else if(d instanceof xe)d.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(d instanceof St)d.value.emitter.off("change",this.onChildValueChange_);else{const M=U(d);if(M){const F=M.emitter;F.off("layout",this.onDescendantLayout_),F.off("inputchange",this.onDescendantInputChange_),F.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const n=this.bcSet_.items.filter(M=>!M.viewProps.get("hidden")),a=n[0],d=n[n.length-1];this.bcSet_.items.forEach(M=>{const F=[];M===a&&(F.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&F.push("veryfirst")),M===d&&(F.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&F.push("verylast")),M.blade.set("positions",F)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(a=>a.viewProps.get("disposed")).forEach(a=>{this.bcSet_.remove(a)})}onChildInputChange_(n){const a=rr(this.find(ne),n.sender);if(!a)throw S.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:a,options:n.options,sender:this})}onChildMonitorUpdate_(n){const a=ar(this.find(xe),n.sender);if(!a)throw S.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:a,sender:this})}onChildValueChange_(n){const a=or(this.find(St),n.sender);if(!a)throw S.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:a,options:n.options,sender:this})}onDescendantLayout_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(n){this.emitter.emit("inputchange",{bladeController:n.bladeController,options:n.options,sender:this})}onDescendantMonitorUpdate_(n){this.emitter.emit("monitorupdate",{bladeController:n.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class X extends Ht{constructor(n,a){super(Object.assign(Object.assign({},a),{view:new vs(n,{viewName:"brk",viewProps:a.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const d=new at({blade:a.root?void 0:a.blade,viewProps:a.viewProps});d.emitter.on("add",this.onRackAdd_),d.emitter.on("remove",this.onRackRemove_),this.rack=d,this.viewProps.handleDispose(()=>{for(let M=this.rack.children.length-1;M>=0;M--)this.rack.children[M].viewProps.set("disposed",!0)})}onRackAdd_(n){n.isRoot&&st(this.view.element,n.bladeController.view.element,n.index)}onRackRemove_(n){n.isRoot&&mt(n.bladeController.view.element)}}const ot=D("cnt");class Pt{constructor(n,a){var d;this.className_=D((d=a.viewName)!==null&&d!==void 0?d:"fld"),this.element=n.createElement("div"),this.element.classList.add(this.className_(),ot()),a.viewProps.bindClassModifiers(this.element),this.foldable_=a.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),H(this.foldable_,"completed",A(this.element,this.className_(void 0,"cpl")));const M=n.createElement("button");M.classList.add(this.className_("b")),H(a.props,"title",Xt=>{g(Xt)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),a.viewProps.bindDisabled(M),this.element.appendChild(M),this.buttonElement=M;const F=n.createElement("div");F.classList.add(this.className_("i")),this.element.appendChild(F);const W=n.createElement("div");W.classList.add(this.className_("t")),nt(a.props.value("title"),W),this.buttonElement.appendChild(W),this.titleElement=W;const pt=n.createElement("div");pt.classList.add(this.className_("m")),this.buttonElement.appendChild(pt);const kt=a.containerElement;kt.classList.add(this.className_("c")),this.element.appendChild(kt),this.containerElement=kt}}class It extends Xn{constructor(n,a){var d;const M=Kt.create((d=a.expanded)!==null&&d!==void 0?d:!0),F=new X(n,{blade:a.blade,root:a.root,viewProps:a.viewProps});super(Object.assign(Object.assign({},a),{rackController:F,view:new Pt(n,{containerElement:F.view.element,foldable:M,props:a.props,viewName:a.root?"rot":void 0,viewProps:a.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=a.props,this.foldable=M,wt(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Bt={id:"folder",type:"blade",accept(o){const n=ut,a=ft(o,{title:n.required.string,view:n.required.constant("folder"),expanded:n.optional.boolean});return a?{params:a}:null},controller(o){return new It(o.document,{blade:o.blade,expanded:o.params.expanded,props:q.fromObject({title:o.params.title}),viewProps:o.viewProps})},api(o){return o.controller instanceof It?new bi(o.controller,o.pool):null}};class zt extends St{constructor(n,a){const d=a.valueController.viewProps;super(Object.assign(Object.assign({},a),{value:a.valueController.value,view:new Lt(n,{props:a.props,viewProps:d}),viewProps:d})),this.props=a.props,this.valueController=a.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class $t extends r{}const Wt=D("spr");class Yt{constructor(n,a){this.element=n.createElement("div"),this.element.classList.add(Wt()),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("hr");d.classList.add(Wt("r")),this.element.appendChild(d)}}class me extends Ht{constructor(n,a){super(Object.assign(Object.assign({},a),{view:new Yt(n,{viewProps:a.viewProps})}))}}const Me={id:"separator",type:"blade",accept(o){const a=ft(o,{view:ut.required.constant("separator")});return a?{params:a}:null},controller(o){return new me(o.document,{blade:o.blade,viewProps:o.viewProps})},api(o){return o.controller instanceof me?new $t(o.controller):null}},ce=D("tbi");class un{constructor(n,a){this.element=n.createElement("div"),this.element.classList.add(ce()),a.viewProps.bindClassModifiers(this.element),H(a.props,"selected",F=>{F?this.element.classList.add(ce(void 0,"sel")):this.element.classList.remove(ce(void 0,"sel"))});const d=n.createElement("button");d.classList.add(ce("b")),a.viewProps.bindDisabled(d),this.element.appendChild(d),this.buttonElement=d;const M=n.createElement("div");M.classList.add(ce("t")),nt(a.props.value("title"),M),this.buttonElement.appendChild(M),this.titleElement=M}}class we{constructor(n,a){this.emitter=new I,this.onClick_=this.onClick_.bind(this),this.props=a.props,this.viewProps=a.viewProps,this.view=new un(n,{props:a.props,viewProps:a.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ie{constructor(n,a){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new we(n,{props:a.itemProps,viewProps:Vt.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new X(n,{blade:Ct(),viewProps:Vt.create()}),this.props=a.props,H(this.props,"selected",d=>{this.itemController.props.set("selected",d),this.contentController.viewProps.set("hidden",!d)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Qn{constructor(n,a){this.controller_=n,this.rackApi_=a}get title(){var n;return(n=this.controller_.itemController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.itemController.props.set("title",n)}get selected(){return this.controller_.props.get("selected")}set selected(n){this.controller_.props.set("selected",n)}get children(){return this.rackApi_.children}addButton(n){return this.rackApi_.addButton(n)}addFolder(n){return this.rackApi_.addFolder(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,a){this.rackApi_.add(n,a)}remove(n){this.rackApi_.remove(n)}addInput(n,a,d){return this.rackApi_.addInput(n,a,d)}addMonitor(n,a,d){return this.rackApi_.addMonitor(n,a,d)}addBlade(n){return this.rackApi_.addBlade(n)}}class Pe extends tt{constructor(n,a){super(n,new Rn(n.rackController,a)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new I,this.pageApiMap_=new Map,this.rackApi_.on("change",d=>{this.emitter_.emit("change",{event:d})}),this.rackApi_.on("update",d=>{this.emitter_.emit("update",{event:d})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(d=>{this.setUpPageApi_(d)})}get pages(){return this.controller_.pageSet.items.map(n=>{const a=this.pageApiMap_.get(n);if(!a)throw S.shouldNeverHappen();return a})}addPage(n){const a=this.controller_.view.element.ownerDocument,d=new ie(a,{itemProps:q.fromObject({selected:!1,title:n.title}),props:q.fromObject({selected:!1})});this.controller_.add(d,n.index);const M=this.pageApiMap_.get(d);if(!M)throw S.shouldNeverHappen();return M}removePage(n){this.controller_.remove(n)}on(n,a){const d=a.bind(this);return this.emitter_.on(n,M=>{d(M.event)}),this}setUpPageApi_(n){const a=this.rackApi_.apiSet_.find(M=>M.controller_===n.contentController);if(!a)throw S.shouldNeverHappen();const d=new Qn(n,a);this.pageApiMap_.set(n,d)}onPageAdd_(n){this.setUpPageApi_(n.item)}onPageRemove_(n){if(!this.pageApiMap_.get(n.item))throw S.shouldNeverHappen();this.pageApiMap_.delete(n.item)}onSelect_(n){this.emitter_.emit("select",{event:new m(this,n.rawValue)})}}const xn=-1;class gs{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=Z(!0),this.selectedIndex=Z(xn),this.items_=[]}add(n,a){const d=a??this.items_.length;this.items_.splice(d,0,n),n.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(n){const a=this.items_.indexOf(n);a<0||(this.items_.splice(a,1),n.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=xn,this.empty.rawValue=!0;return}const n=this.items_.findIndex(a=>a.rawValue);n<0?(this.items_.forEach((a,d)=>{a.rawValue=d===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((a,d)=>{a.rawValue=d===n}),this.selectedIndex.rawValue=n),this.empty.rawValue=!1}onItemSelectedChange_(n){if(n.rawValue){const a=this.items_.findIndex(d=>d===n.sender);this.items_.forEach((d,M)=>{d.rawValue=M===a}),this.selectedIndex.rawValue=a}else this.keepSelection_()}}const en=D("tab");class wn{constructor(n,a){this.element=n.createElement("div"),this.element.classList.add(en(),ot()),a.viewProps.bindClassModifiers(this.element),z(a.empty,A(this.element,en(void 0,"nop")));const d=n.createElement("div");d.classList.add(en("t")),this.element.appendChild(d),this.itemsElement=d;const M=n.createElement("div");M.classList.add(en("i")),this.element.appendChild(M);const F=a.contentsElement;F.classList.add(en("c")),this.element.appendChild(F),this.contentsElement=F}}class Ae extends Xn{constructor(n,a){const d=new X(n,{blade:a.blade,viewProps:a.viewProps}),M=new gs;super({blade:a.blade,rackController:d,view:new wn(n,{contentsElement:d.view.element,empty:M.empty,viewProps:a.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new be(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=M}get pageSet(){return this.pageSet_}add(n,a){this.pageSet_.add(n,a)}remove(n){this.pageSet_.remove(this.pageSet_.items[n])}onPageAdd_(n){const a=n.item;st(this.view.itemsElement,a.itemController.view.element,n.index),a.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(a.contentController,n.index),this.tab.add(a.props.value("selected"))}onPageRemove_(n){const a=n.item;mt(a.itemController.view.element),a.itemController.viewProps.set("parent",null),this.rackController.rack.remove(a.contentController),this.tab.remove(a.props.value("selected"))}}const dn={id:"tab",type:"blade",accept(o){const n=ut,a=ft(o,{pages:n.required.array(n.required.object({title:n.required.string})),view:n.required.constant("tab")});return!a||a.pages.length===0?null:{params:a}},controller(o){const n=new Ae(o.document,{blade:o.blade,viewProps:o.viewProps});return o.params.pages.forEach(a=>{const d=new ie(o.document,{itemProps:q.fromObject({selected:!1,title:a.title}),props:q.fromObject({selected:!1})});n.add(d)}),n},api(o){return o.controller instanceof Ae?new Pe(o.controller,o.pool):null}};function Gi(o,n){const a=o.accept(n.params);if(!a)return null;const d=ut.optional.boolean(n.params.disabled).value,M=ut.optional.boolean(n.params.hidden).value;return o.controller({blade:Ct(),document:n.document,params:Object.assign(Object.assign({},a.params),{disabled:d,hidden:M}),viewProps:Vt.create({disabled:d,hidden:M})})}class Be{constructor(){this.disabled=!1,this.emitter=new I}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class ti{constructor(n,a){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=n,this.emitter=new I,this.interval_=a,this.setTimer_()}get disabled(){return this.disabled_}set disabled(n){this.disabled_=n,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const n=this.doc_.defaultView;n&&n.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const n=this.doc_.defaultView;n&&(this.timerId_=n.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class xi{constructor(n){this.onValueChange_=this.onValueChange_.bind(this),this.reader=n.reader,this.writer=n.writer,this.emitter=new I,this.value=n.value,this.value.emitter.on("change",this.onValueChange_),this.target=n.target,this.read()}read(){const n=this.target.read();n!==void 0&&(this.value.rawValue=this.reader(n))}write_(n){this.writer(this.target,n)}onValueChange_(n){this.write_(n.rawValue),this.emitter.emit("change",{options:n.options,rawValue:n.rawValue,sender:this})}}function Se(o,n){for(;o.length<n;)o.push(void 0)}function Zr(o){const n=[];return Se(n,o),Z(n)}function wi(o){const n=o.indexOf(void 0);return n<0?o:o.slice(0,n)}function nn(o,n){const a=[...wi(o),n];return a.length>o.length?a.splice(0,a.length-o.length):Se(a,o.length),a}class Za{constructor(n){this.onTick_=this.onTick_.bind(this),this.reader_=n.reader,this.target=n.target,this.emitter=new I,this.value=n.value,this.ticker=n.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const n=this.target.read();if(n===void 0)return;const a=this.value.rawValue,d=this.reader_(n);this.value.rawValue=nn(a,d),this.emitter.emit("update",{rawValue:d,sender:this})}onTick_(n){this.read()}}class Hi{constructor(n){this.constraints=n}constrain(n){return this.constraints.reduce((a,d)=>d.constrain(a),n)}}function pn(o,n){if(o instanceof n)return o;if(o instanceof Hi){const a=o.constraints.reduce((d,M)=>d||(M instanceof n?M:null),null);if(a)return a}return null}class Ei{constructor(n){this.values=q.fromObject({max:n.max,min:n.min})}constrain(n){const a=this.values.get("max"),d=this.values.get("min");return Math.min(Math.max(n,d),a)}}class Wi{constructor(n){this.values=q.fromObject({options:n})}get options(){return this.values.get("options")}constrain(n){const a=this.values.get("options");return a.length===0||a.filter(M=>M.value===n).length>0?n:a[0].value}}class lr{constructor(n){this.values=q.fromObject({max:n.max,min:n.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(n){const a=this.values.get("max"),d=this.values.get("min");let M=n;return g(d)||(M=Math.max(M,d)),g(a)||(M=Math.min(M,a)),M}}class bs{constructor(n,a=0){this.step=n,this.origin=a}constrain(n){const a=this.origin%this.step,d=Math.round((n-a)/this.step);return a+d*this.step}}const yi=D("lst");class Jr{constructor(n,a){this.onValueChange_=this.onValueChange_.bind(this),this.props_=a.props,this.element=n.createElement("div"),this.element.classList.add(yi()),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("select");d.classList.add(yi("s")),a.viewProps.bindDisabled(d),this.element.appendChild(d),this.selectElement=d;const M=n.createElement("div");M.classList.add(yi("m")),M.appendChild(P(n,"dropdown")),this.element.appendChild(M),a.value.emitter.on("change",this.onValueChange_),this.value_=a.value,H(this.props_,"options",F=>{_t(this.selectElement),F.forEach(W=>{const pt=n.createElement("option");pt.textContent=W.text,this.selectElement.appendChild(pt)}),this.update_()})}update_(){const n=this.props_.get("options").map(a=>a.value);this.selectElement.selectedIndex=n.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Xi{constructor(n,a){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=a.props,this.value=a.value,this.viewProps=a.viewProps,this.view=new Jr(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(n){const a=n.currentTarget;this.value.rawValue=this.props.get("options")[a.selectedIndex].value}}const Qr=D("pop");class Ja{constructor(n,a){this.element=n.createElement("div"),this.element.classList.add(Qr()),a.viewProps.bindClassModifiers(this.element),z(a.shows,A(this.element,Qr(void 0,"v")))}}class ta{constructor(n,a){this.shows=Z(!1),this.viewProps=a.viewProps,this.view=new Ja(n,{shows:this.shows,viewProps:this.viewProps})}}const ea=D("txt");class Qa{constructor(n,a){this.onChange_=this.onChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(ea()),a.viewProps.bindClassModifiers(this.element),this.props_=a.props,this.props_.emitter.on("change",this.onChange_);const d=n.createElement("input");d.classList.add(ea("i")),d.type="text",a.viewProps.bindDisabled(d),this.element.appendChild(d),this.inputElement=d,a.value.emitter.on("change",this.onChange_),this.value_=a.value,this.refresh()}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value_.rawValue)}onChange_(){this.refresh()}}class xs{constructor(n,a){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=a.parser,this.props=a.props,this.value=a.value,this.viewProps=a.viewProps,this.view=new Qa(n,{props:a.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const d=n.currentTarget.value,M=this.parser_(d);g(M)||(this.value.rawValue=M),this.view.refresh()}}function to(o){return String(o)}function na(o){return o==="false"?!1:!!o}function ia(o){return to(o)}class eo{constructor(n){this.text=n}evaluate(){return Number(this.text)}toString(){return this.text}}const no={"**":(o,n)=>Math.pow(o,n),"*":(o,n)=>o*n,"/":(o,n)=>o/n,"%":(o,n)=>o%n,"+":(o,n)=>o+n,"-":(o,n)=>o-n,"<<":(o,n)=>o<<n,">>":(o,n)=>o>>n,">>>":(o,n)=>o>>>n,"&":(o,n)=>o&n,"^":(o,n)=>o^n,"|":(o,n)=>o|n};class io{constructor(n,a,d){this.left=a,this.operator=n,this.right=d}evaluate(){const n=no[this.operator];if(!n)throw new Error(`unexpected binary operator: '${this.operator}`);return n(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const sa={"+":o=>o,"-":o=>-o,"~":o=>~o};class so{constructor(n,a){this.operator=n,this.expression=a}evaluate(){const n=sa[this.operator];if(!n)throw new Error(`unexpected unary operator: '${this.operator}`);return n(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function cr(o){return(n,a)=>{for(let d=0;d<o.length;d++){const M=o[d](n,a);if(M!=="")return M}return""}}function ei(o,n){var a;const d=o.substr(n).match(/^\s+/);return(a=d&&d[0])!==null&&a!==void 0?a:""}function ro(o,n){const a=o.substr(n,1);return a.match(/^[1-9]$/)?a:""}function qi(o,n){var a;const d=o.substr(n).match(/^[0-9]+/);return(a=d&&d[0])!==null&&a!==void 0?a:""}function ao(o,n){const a=qi(o,n);if(a!=="")return a;const d=o.substr(n,1);if(n+=1,d!=="-"&&d!=="+")return"";const M=qi(o,n);return M===""?"":d+M}function En(o,n){const a=o.substr(n,1);if(n+=1,a.toLowerCase()!=="e")return"";const d=ao(o,n);return d===""?"":a+d}function ra(o,n){const a=o.substr(n,1);if(a==="0")return a;const d=ro(o,n);return n+=d.length,d===""?"":d+qi(o,n)}function oo(o,n){const a=ra(o,n);if(n+=a.length,a==="")return"";const d=o.substr(n,1);if(n+=d.length,d!==".")return"";const M=qi(o,n);return n+=M.length,a+d+M+En(o,n)}function aa(o,n){const a=o.substr(n,1);if(n+=a.length,a!==".")return"";const d=qi(o,n);return n+=d.length,d===""?"":a+d+En(o,n)}function lo(o,n){const a=ra(o,n);return n+=a.length,a===""?"":a+En(o,n)}const oa=cr([oo,aa,lo]);function hr(o,n){var a;const d=o.substr(n).match(/^[01]+/);return(a=d&&d[0])!==null&&a!==void 0?a:""}function co(o,n){const a=o.substr(n,2);if(n+=a.length,a.toLowerCase()!=="0b")return"";const d=hr(o,n);return d===""?"":a+d}function la(o,n){var a;const d=o.substr(n).match(/^[0-7]+/);return(a=d&&d[0])!==null&&a!==void 0?a:""}function sn(o,n){const a=o.substr(n,2);if(n+=a.length,a.toLowerCase()!=="0o")return"";const d=la(o,n);return d===""?"":a+d}function ho(o,n){var a;const d=o.substr(n).match(/^[0-9a-f]+/i);return(a=d&&d[0])!==null&&a!==void 0?a:""}function uo(o,n){const a=o.substr(n,2);if(n+=a.length,a.toLowerCase()!=="0x")return"";const d=ho(o,n);return d===""?"":a+d}const ur=cr([co,sn,uo]),po=cr([ur,oa]);function qn(o,n){const a=po(o,n);return n+=a.length,a===""?null:{evaluable:new eo(a),cursor:n}}function dr(o,n){const a=o.substr(n,1);if(n+=a.length,a!=="(")return null;const d=ws(o,n);if(!d)return null;n=d.cursor,n+=ei(o,n).length;const M=o.substr(n,1);return n+=M.length,M!==")"?null:{evaluable:d.evaluable,cursor:n}}function fo(o,n){var a;return(a=qn(o,n))!==null&&a!==void 0?a:dr(o,n)}function pr(o,n){const a=fo(o,n);if(a)return a;const d=o.substr(n,1);if(n+=d.length,d!=="+"&&d!=="-"&&d!=="~")return null;const M=pr(o,n);return M?(n=M.cursor,{cursor:n,evaluable:new so(d,M.evaluable)}):null}function mo(o,n,a){a+=ei(n,a).length;const d=o.filter(M=>n.startsWith(M,a))[0];return d?(a+=d.length,a+=ei(n,a).length,{cursor:a,operator:d}):null}function ni(o,n){return(a,d)=>{const M=o(a,d);if(!M)return null;d=M.cursor;let F=M.evaluable;for(;;){const W=mo(n,a,d);if(!W)break;d=W.cursor;const pt=o(a,d);if(!pt)return null;d=pt.cursor,F=new io(W.operator,F,pt.evaluable)}return F?{cursor:d,evaluable:F}:null}}const ca=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((o,n)=>ni(o,n),pr);function ws(o,n){return n+=ei(o,n).length,ca(o,n)}function ha(o){const n=ws(o,0);return!n||n.cursor+ei(o,n.cursor).length!==o.length?null:n.evaluable}function yn(o){var n;const a=ha(o);return(n=a==null?void 0:a.evaluate())!==null&&n!==void 0?n:null}function Ln(o){if(typeof o=="number")return o;if(typeof o=="string"){const n=yn(o);if(!g(n))return n}return 0}function _o(o){return String(o)}function Ne(o){return n=>n.toFixed(Math.max(Math.min(o,20),0))}const ua=Ne(0);function ji(o){return ua(o)+"%"}function fr(o){return String(o)}function jn(o){return o}function Mi({primary:o,secondary:n,forward:a,backward:d}){let M=!1;function F(W){M||(M=!0,W(),M=!1)}o.emitter.on("change",W=>{F(()=>{n.setRawValue(a(o,n),W.options)})}),n.emitter.on("change",W=>{F(()=>{o.setRawValue(d(o,n),W.options)}),F(()=>{n.setRawValue(a(o,n),W.options)})}),F(()=>{n.setRawValue(a(o,n),{forceEmit:!1,last:!0})})}function Ge(o,n){const a=o*(n.altKey?.1:1)*(n.shiftKey?10:1);return n.upKey?+a:n.downKey?-a:0}function Ki(o){return{altKey:o.altKey,downKey:o.key==="ArrowDown",shiftKey:o.shiftKey,upKey:o.key==="ArrowUp"}}function Mn(o){return{altKey:o.altKey,downKey:o.key==="ArrowLeft",shiftKey:o.shiftKey,upKey:o.key==="ArrowRight"}}function da(o){return o==="ArrowUp"||o==="ArrowDown"}function Es(o){return da(o)||o==="ArrowLeft"||o==="ArrowRight"}function mr(o,n){var a,d;const M=n.ownerDocument.defaultView,F=n.getBoundingClientRect();return{x:o.pageX-(((a=M&&M.scrollX)!==null&&a!==void 0?a:0)+F.left),y:o.pageY-(((d=M&&M.scrollY)!==null&&d!==void 0?d:0)+F.top)}}class ii{constructor(n){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=n,this.emitter=new I,n.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),n.addEventListener("touchend",this.onTouchEnd_),n.addEventListener("mousedown",this.onMouseDown_)}computePosition_(n){const a=this.elem_.getBoundingClientRect();return{bounds:{width:a.width,height:a.height},point:n?{x:n.x,y:n.y}:null}}onMouseDown_(n){var a;n.preventDefault(),(a=n.currentTarget)===null||a===void 0||a.focus();const d=this.elem_.ownerDocument;d.addEventListener("mousemove",this.onDocumentMouseMove_),d.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(mr(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseMove_(n){this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(mr(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseUp_(n){const a=this.elem_.ownerDocument;a.removeEventListener("mousemove",this.onDocumentMouseMove_),a.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(mr(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onTouchStart_(n){n.preventDefault();const a=n.targetTouches.item(0),d=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(a?{x:a.clientX-d.left,y:a.clientY-d.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=a}onTouchMove_(n){const a=n.targetTouches.item(0),d=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(a?{x:a.clientX-d.left,y:a.clientY-d.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=a}onTouchEnd_(n){var a;const d=(a=n.targetTouches.item(0))!==null&&a!==void 0?a:this.lastTouch_,M=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(d?{x:d.clientX-M.left,y:d.clientY-M.top}:void 0),sender:this,shiftKey:n.shiftKey})}}function Ee(o,n,a,d,M){const F=(o-n)/(a-n);return d+F*(M-d)}function _r(o){return String(o.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Re(o,n,a){return Math.min(Math.max(o,n),a)}function Si(o,n){return(o%n+n)%n}const $e=D("txt");class vr{constructor(n,a){this.onChange_=this.onChange_.bind(this),this.props_=a.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add($e(),$e(void 0,"num")),a.arrayPosition&&this.element.classList.add($e(void 0,a.arrayPosition)),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("input");d.classList.add($e("i")),d.type="text",a.viewProps.bindDisabled(d),this.element.appendChild(d),this.inputElement=d,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=a.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add($e()),this.inputElement.classList.add($e("i"));const M=n.createElement("div");M.classList.add($e("k")),this.element.appendChild(M),this.knobElement=M;const F=n.createElementNS(Ut,"svg");F.classList.add($e("g")),this.knobElement.appendChild(F);const W=n.createElementNS(Ut,"path");W.classList.add($e("gb")),F.appendChild(W),this.guideBodyElem_=W;const pt=n.createElementNS(Ut,"path");pt.classList.add($e("gh")),F.appendChild(pt),this.guideHeadElem_=pt;const kt=n.createElement("div");kt.classList.add(D("tt")()),this.knobElement.appendChild(kt),this.tooltipElem_=kt,a.value.emitter.on("change",this.onChange_),this.value=a.value,this.refresh()}onDraggingChange_(n){if(n.rawValue===null){this.element.classList.remove($e(void 0,"drg"));return}this.element.classList.add($e(void 0,"drg"));const a=n.rawValue/this.props_.get("draggingScale"),d=a+(a>0?-1:a<0?1:0),M=Re(-d,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${d+M},0 L${d},4 L${d+M},8`,`M ${a},-1 L${a},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${a},4`);const F=this.props_.get("formatter");this.tooltipElem_.textContent=F(this.value.rawValue),this.tooltipElem_.style.left=`${a}px`}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value.rawValue)}onChange_(){this.refresh()}}class Yi{constructor(n,a){var d;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=a.baseStep,this.parser_=a.parser,this.props=a.props,this.sliderProps_=(d=a.sliderProps)!==null&&d!==void 0?d:null,this.value=a.value,this.viewProps=a.viewProps,this.dragging_=Z(null),this.view=new vr(n,{arrayPosition:a.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const M=new ii(this.view.knobElement);M.emitter.on("down",this.onPointerDown_),M.emitter.on("move",this.onPointerMove_),M.emitter.on("up",this.onPointerUp_)}constrainValue_(n){var a,d;const M=(a=this.sliderProps_)===null||a===void 0?void 0:a.get("minValue"),F=(d=this.sliderProps_)===null||d===void 0?void 0:d.get("maxValue");let W=n;return M!==void 0&&(W=Math.max(W,M)),F!==void 0&&(W=Math.min(W,F)),W}onInputChange_(n){const d=n.currentTarget.value,M=this.parser_(d);g(M)||(this.value.rawValue=this.constrainValue_(M)),this.view.refresh()}onInputKeyDown_(n){const a=Ge(this.baseStep_,Ki(n));a!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+a),{forceEmit:!1,last:!1})}onInputKeyUp_(n){Ge(this.baseStep_,Ki(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(n){if(!n.point)return null;const a=n.point.x-n.bounds.width/2;return this.constrainValue_(this.originRawValue_+a*this.props.get("draggingScale"))}onPointerMove_(n){const a=this.computeDraggingValue_(n.data);a!==null&&(this.value.setRawValue(a,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(n){const a=this.computeDraggingValue_(n.data);a!==null&&(this.value.setRawValue(a,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const gr=D("sld");class Ze{constructor(n,a){this.onChange_=this.onChange_.bind(this),this.props_=a.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(gr()),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("div");d.classList.add(gr("t")),a.viewProps.bindTabIndex(d),this.element.appendChild(d),this.trackElement=d;const M=n.createElement("div");M.classList.add(gr("k")),this.trackElement.appendChild(M),this.knobElement=M,a.value.emitter.on("change",this.onChange_),this.value=a.value,this.update_()}update_(){const n=Re(Ee(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${n}%`}onChange_(){this.update_()}}class br{constructor(n,a){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=a.baseStep,this.value=a.value,this.viewProps=a.viewProps,this.props=a.props,this.view=new Ze(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ii(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,a){n.point&&this.value.setRawValue(Ee(Re(n.point.x,0,n.bounds.width),0,n.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),a)}onPointerDownOrMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const a=Ge(this.baseStep_,Mn(n));a!==0&&this.value.setRawValue(this.value.rawValue+a,{forceEmit:!1,last:!1})}onKeyUp_(n){Ge(this.baseStep_,Mn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const $i=D("sldtxt");class xr{constructor(n,a){this.element=n.createElement("div"),this.element.classList.add($i());const d=n.createElement("div");d.classList.add($i("s")),this.sliderView_=a.sliderView,d.appendChild(this.sliderView_.element),this.element.appendChild(d);const M=n.createElement("div");M.classList.add($i("t")),this.textView_=a.textView,M.appendChild(this.textView_.element),this.element.appendChild(M)}}class ys{constructor(n,a){this.value=a.value,this.viewProps=a.viewProps,this.sliderC_=new br(n,{baseStep:a.baseStep,props:a.sliderProps,value:a.value,viewProps:this.viewProps}),this.textC_=new Yi(n,{baseStep:a.baseStep,parser:a.parser,props:a.textProps,sliderProps:a.sliderProps,value:a.value,viewProps:a.viewProps}),this.view=new xr(n,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function fn(o,n){o.write(n)}function Zi(o){const n=ut;if(Array.isArray(o))return n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))(o).value;if(typeof o=="object")return n.required.raw(o).value}function wr(o){if(o==="inline"||o==="popup")return o}function Dn(o){const n=ut;return n.required.object({max:n.optional.number,min:n.optional.number,step:n.optional.number})(o).value}function pa(o){if(Array.isArray(o))return o;const n=[];return Object.keys(o).forEach(a=>{n.push({text:a,value:o[a]})}),n}function Er(o){return g(o)?null:new Wi(pa(o))}function vo(o){const n=o?pn(o,bs):null;return n?n.step:null}function Ms(o,n){const a=o&&pn(o,bs);return a?_r(a.step):Math.max(_r(n),2)}function si(o){const n=vo(o);return n??1}function ri(o,n){var a;const d=o&&pn(o,bs),M=Math.abs((a=d==null?void 0:d.step)!==null&&a!==void 0?a:n);return M===0?.1:Math.pow(10,Math.floor(Math.log10(M))-1)}const Ji=D("ckb");class Qi{constructor(n,a){this.onValueChange_=this.onValueChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Ji()),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("label");d.classList.add(Ji("l")),this.element.appendChild(d);const M=n.createElement("input");M.classList.add(Ji("i")),M.type="checkbox",d.appendChild(M),this.inputElement=M,a.viewProps.bindDisabled(this.inputElement);const F=n.createElement("div");F.classList.add(Ji("w")),d.appendChild(F);const W=P(n,"check");F.appendChild(W),a.value.emitter.on("change",this.onValueChange_),this.value=a.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class fa{constructor(n,a){this.onInputChange_=this.onInputChange_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.view=new Qi(n,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const a=n.currentTarget;this.value.rawValue=a.checked}}function ma(o){const n=[],a=Er(o.options);return a&&n.push(a),new Hi(n)}const Ss={id:"input-bool",type:"input",accept:(o,n)=>{if(typeof o!="boolean")return null;const d=ft(n,{options:ut.optional.custom(Zi)});return d?{initialValue:o,params:d}:null},binding:{reader:o=>na,constraint:o=>ma(o.params),writer:o=>fn},controller:o=>{const n=o.document,a=o.value,d=o.constraint,M=d&&pn(d,Wi);return M?new Xi(n,{props:new q({options:M.values.value("options")}),value:a,viewProps:o.viewProps}):new fa(n,{value:a,viewProps:o.viewProps})}},ai=D("col");class yr{constructor(n,a){this.element=n.createElement("div"),this.element.classList.add(ai()),a.foldable.bindExpandedClass(this.element,ai(void 0,"expanded")),H(a.foldable,"completed",A(this.element,ai(void 0,"cpl")));const d=n.createElement("div");d.classList.add(ai("h")),this.element.appendChild(d);const M=n.createElement("div");M.classList.add(ai("s")),d.appendChild(M),this.swatchElement=M;const F=n.createElement("div");if(F.classList.add(ai("t")),d.appendChild(F),this.textElement=F,a.pickerLayout==="inline"){const W=n.createElement("div");W.classList.add(ai("p")),this.element.appendChild(W),this.pickerElement=W}else this.pickerElement=null}}function go(o,n,a){const d=Re(o/255,0,1),M=Re(n/255,0,1),F=Re(a/255,0,1),W=Math.max(d,M,F),pt=Math.min(d,M,F),kt=W-pt;let Xt=0,he=0;const de=(pt+W)/2;return kt!==0&&(he=kt/(1-Math.abs(W+pt-1)),d===W?Xt=(M-F)/kt:M===W?Xt=2+(F-d)/kt:Xt=4+(d-M)/kt,Xt=Xt/6+(Xt<0?1:0)),[Xt*360,he*100,de*100]}function bo(o,n,a){const d=(o%360+360)%360,M=Re(n/100,0,1),F=Re(a/100,0,1),W=(1-Math.abs(2*F-1))*M,pt=W*(1-Math.abs(d/60%2-1)),kt=F-W/2;let Xt,he,de;return d>=0&&d<60?[Xt,he,de]=[W,pt,0]:d>=60&&d<120?[Xt,he,de]=[pt,W,0]:d>=120&&d<180?[Xt,he,de]=[0,W,pt]:d>=180&&d<240?[Xt,he,de]=[0,pt,W]:d>=240&&d<300?[Xt,he,de]=[pt,0,W]:[Xt,he,de]=[W,0,pt],[(Xt+kt)*255,(he+kt)*255,(de+kt)*255]}function xo(o,n,a){const d=Re(o/255,0,1),M=Re(n/255,0,1),F=Re(a/255,0,1),W=Math.max(d,M,F),pt=Math.min(d,M,F),kt=W-pt;let Xt;kt===0?Xt=0:W===d?Xt=60*(((M-F)/kt%6+6)%6):W===M?Xt=60*((F-d)/kt+2):Xt=60*((d-M)/kt+4);const he=W===0?0:kt/W,de=W;return[Xt,he*100,de*100]}function _a(o,n,a){const d=Si(o,360),M=Re(n/100,0,1),F=Re(a/100,0,1),W=F*M,pt=W*(1-Math.abs(d/60%2-1)),kt=F-W;let Xt,he,de;return d>=0&&d<60?[Xt,he,de]=[W,pt,0]:d>=60&&d<120?[Xt,he,de]=[pt,W,0]:d>=120&&d<180?[Xt,he,de]=[0,W,pt]:d>=180&&d<240?[Xt,he,de]=[0,pt,W]:d>=240&&d<300?[Xt,he,de]=[pt,0,W]:[Xt,he,de]=[W,0,pt],[(Xt+kt)*255,(he+kt)*255,(de+kt)*255]}function v(o,n,a){const d=a+n*(100-Math.abs(2*a-100))/200;return[o,d!==0?n*(100-Math.abs(2*a-100))/d:0,a+n*(100-Math.abs(2*a-100))/(2*100)]}function c(o,n,a){const d=100-Math.abs(a*(200-n)/100-100);return[o,d!==0?n*a/d:0,a*(200-n)/(2*100)]}function p(o){return[o[0],o[1],o[2]]}function E(o,n){return[o[0],o[1],o[2],n]}const L={hsl:{hsl:(o,n,a)=>[o,n,a],hsv:v,rgb:bo},hsv:{hsl:c,hsv:(o,n,a)=>[o,n,a],rgb:_a},rgb:{hsl:go,hsv:xo,rgb:(o,n,a)=>[o,n,a]}};function G(o,n){return[n==="float"?1:o==="rgb"?255:360,n==="float"?1:o==="rgb"?255:100,n==="float"?1:o==="rgb"?255:100]}function it(o,n){return o===n?n:Si(o,n)}function vt(o,n,a){var d;const M=G(n,a);return[n==="rgb"?Re(o[0],0,M[0]):it(o[0],M[0]),Re(o[1],0,M[1]),Re(o[2],0,M[2]),Re((d=o[3])!==null&&d!==void 0?d:1,0,1)]}function oe(o,n,a,d){const M=G(n,a),F=G(n,d);return o.map((W,pt)=>W/M[pt]*F[pt])}function rn(o,n,a){const d=oe(o,n.mode,n.type,"int"),M=L[n.mode][a.mode](...d);return oe(M,a.mode,"int",a.type)}function an(o,n){return typeof o!="object"||g(o)?!1:n in o&&typeof o[n]=="number"}class Jt{static black(n="int"){return new Jt([0,0,0],"rgb",n)}static fromObject(n,a="int"){const d="a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b];return new Jt(d,"rgb",a)}static toRgbaObject(n,a="int"){return n.toRgbaObject(a)}static isRgbColorObject(n){return an(n,"r")&&an(n,"g")&&an(n,"b")}static isRgbaColorObject(n){return this.isRgbColorObject(n)&&an(n,"a")}static isColorObject(n){return this.isRgbColorObject(n)}static equals(n,a){if(n.mode!==a.mode)return!1;const d=n.comps_,M=a.comps_;for(let F=0;F<d.length;F++)if(d[F]!==M[F])return!1;return!0}constructor(n,a,d="int"){this.mode=a,this.type=d,this.comps_=vt(n,a,d)}getComponents(n,a="int"){return E(rn(p(this.comps_),{mode:this.mode,type:this.type},{mode:n??this.mode,type:a}),this.comps_[3])}toRgbaObject(n="int"){const a=this.getComponents("rgb",n);return{r:a[0],g:a[1],b:a[2],a:a[3]}}}const Kn=D("colp");class wo{constructor(n,a){this.alphaViews_=null,this.element=n.createElement("div"),this.element.classList.add(Kn()),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("div");d.classList.add(Kn("hsv"));const M=n.createElement("div");M.classList.add(Kn("sv")),this.svPaletteView_=a.svPaletteView,M.appendChild(this.svPaletteView_.element),d.appendChild(M);const F=n.createElement("div");F.classList.add(Kn("h")),this.hPaletteView_=a.hPaletteView,F.appendChild(this.hPaletteView_.element),d.appendChild(F),this.element.appendChild(d);const W=n.createElement("div");if(W.classList.add(Kn("rgb")),this.textView_=a.textView,W.appendChild(this.textView_.element),this.element.appendChild(W),a.alphaViews){this.alphaViews_={palette:a.alphaViews.palette,text:a.alphaViews.text};const pt=n.createElement("div");pt.classList.add(Kn("a"));const kt=n.createElement("div");kt.classList.add(Kn("ap")),kt.appendChild(this.alphaViews_.palette.element),pt.appendChild(kt);const Xt=n.createElement("div");Xt.classList.add(Kn("at")),Xt.appendChild(this.alphaViews_.text.element),pt.appendChild(Xt),this.element.appendChild(pt)}}get allFocusableElements(){const n=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(a=>a.inputElement)];return this.alphaViews_&&n.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),n}}function Iu(o){return o==="int"?"int":o==="float"?"float":void 0}function Eo(o){const n=ut;return ft(o,{alpha:n.optional.boolean,color:n.optional.object({alpha:n.optional.boolean,type:n.optional.custom(Iu)}),expanded:n.optional.boolean,picker:n.optional.custom(wr)})}function ts(o){return o?.1:1}function es(o){var n;return(n=o.color)===null||n===void 0?void 0:n.type}function Nu(o,n){return o.alpha===n.alpha&&o.mode===n.mode&&o.notation===n.notation&&o.type===n.type}function Sn(o,n){const a=o.match(/^(.+)%$/);return Math.min(a?parseFloat(a[1])*.01*n:parseFloat(o),n)}const Fu={deg:o=>o,grad:o=>o*360/400,rad:o=>o*360/(2*Math.PI),turn:o=>o*360};function Ol(o){const n=o.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!n)return parseFloat(o);const a=parseFloat(n[1]),d=n[2];return Fu[d](a)}function zl(o){const n=o.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const a=[Sn(n[1],255),Sn(n[2],255),Sn(n[3],255)];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])?null:a}function kl(o){return n=>{const a=zl(n);return a?new Jt(a,"rgb",o):null}}function Vl(o){const n=o.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const a=[Sn(n[1],255),Sn(n[2],255),Sn(n[3],255),Sn(n[4],1)];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])||isNaN(a[3])?null:a}function Bl(o){return n=>{const a=Vl(n);return a?new Jt(a,"rgb",o):null}}function Gl(o){const n=o.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const a=[Ol(n[1]),Sn(n[2],100),Sn(n[3],100)];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])?null:a}function Hl(o){return n=>{const a=Gl(n);return a?new Jt(a,"hsl",o):null}}function Wl(o){const n=o.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const a=[Ol(n[1]),Sn(n[2],100),Sn(n[3],100),Sn(n[4],1)];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])||isNaN(a[3])?null:a}function Xl(o){return n=>{const a=Wl(n);return a?new Jt(a,"hsl",o):null}}function ql(o){const n=o.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)];const a=o.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:null}function Ou(o){const n=ql(o);return n?new Jt(n,"rgb","int"):null}function jl(o){const n=o.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16),Ee(parseInt(n[4]+n[4],16),0,255,0,1)];const a=o.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),Ee(parseInt(a[4],16),0,255,0,1)]:null}function zu(o){const n=jl(o);return n?new Jt(n,"rgb","int"):null}function Kl(o){const n=o.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const a=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3])];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])?null:a}function Yl(o){return n=>{const a=Kl(n);return a?new Jt(a,"rgb",o):null}}function $l(o){const n=o.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const a=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3]),parseFloat(n[4])];return isNaN(a[0])||isNaN(a[1])||isNaN(a[2])||isNaN(a[3])?null:a}function Zl(o){return n=>{const a=$l(n);return a?new Jt(a,"rgb",o):null}}const ku=[{parser:ql,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:jl,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:zl,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Vl,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Gl,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Wl,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Kl,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:$l,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Vu(o){return ku.reduce((n,{parser:a,result:d})=>n||(a(o)?d:null),null)}function yo(o,n="int"){const a=Vu(o);return a?a.notation==="hex"&&n!=="float"?Object.assign(Object.assign({},a),{type:"int"}):a.notation==="func"?Object.assign(Object.assign({},a),{type:n}):null:null}const Jl={int:[Ou,zu,kl("int"),Bl("int"),Hl("int"),Xl("int"),Yl("int"),Zl("int")],float:[kl("float"),Bl("float"),Hl("float"),Xl("float"),Yl("float"),Zl("float")]};function Bu(o){const n=Jl[o];return a=>{if(typeof a!="string")return Jt.black(o);const d=n.reduce((M,F)=>M||F(a),null);return d??Jt.black(o)}}function Mo(o){const n=Jl[o];return a=>n.reduce((d,M)=>d||M(a),null)}function Ql(o){const n=Re(Math.floor(o),0,255).toString(16);return n.length===1?`0${n}`:n}function tc(o,n="#"){const a=p(o.getComponents("rgb")).map(Ql).join("");return`${n}${a}`}function So(o,n="#"){const a=o.getComponents("rgb"),d=[a[0],a[1],a[2],a[3]*255].map(Ql).join("");return`${n}${d}`}function ec(o,n){const a=Ne(n==="float"?2:0);return`rgb(${p(o.getComponents("rgb",n)).map(M=>a(M)).join(", ")})`}function Gu(o){return n=>ec(n,o)}function va(o,n){const a=Ne(2),d=Ne(n==="float"?2:0);return`rgba(${o.getComponents("rgb",n).map((F,W)=>(W===3?a:d)(F)).join(", ")})`}function Hu(o){return n=>va(n,o)}function Wu(o){const n=[Ne(0),ji,ji];return`hsl(${p(o.getComponents("hsl")).map((d,M)=>n[M](d)).join(", ")})`}function Xu(o){const n=[Ne(0),ji,ji,Ne(2)];return`hsla(${o.getComponents("hsl").map((d,M)=>n[M](d)).join(", ")})`}function nc(o,n){const a=Ne(n==="float"?2:0),d=["r","g","b"];return`{${p(o.getComponents("rgb",n)).map((F,W)=>`${d[W]}: ${a(F)}`).join(", ")}}`}function qu(o){return n=>nc(n,o)}function ic(o,n){const a=Ne(2),d=Ne(n==="float"?2:0),M=["r","g","b","a"];return`{${o.getComponents("rgb",n).map((W,pt)=>{const kt=pt===3?a:d;return`${M[pt]}: ${kt(W)}`}).join(", ")}}`}function ju(o){return n=>ic(n,o)}const Ku=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:tc},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:So},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Wu},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Xu},...["int","float"].reduce((o,n)=>[...o,{format:{alpha:!1,mode:"rgb",notation:"func",type:n},stringifier:Gu(n)},{format:{alpha:!0,mode:"rgb",notation:"func",type:n},stringifier:Hu(n)},{format:{alpha:!1,mode:"rgb",notation:"object",type:n},stringifier:qu(n)},{format:{alpha:!0,mode:"rgb",notation:"object",type:n},stringifier:ju(n)}],[])];function Co(o){return Ku.reduce((n,a)=>n||(Nu(a.format,o)?a.stringifier:null),null)}const Mr=D("apl");class Yu{constructor(n,a){this.onValueChange_=this.onValueChange_.bind(this),this.value=a.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Mr()),a.viewProps.bindClassModifiers(this.element),a.viewProps.bindTabIndex(this.element);const d=n.createElement("div");d.classList.add(Mr("b")),this.element.appendChild(d);const M=n.createElement("div");M.classList.add(Mr("c")),d.appendChild(M),this.colorElem_=M;const F=n.createElement("div");F.classList.add(Mr("m")),this.element.appendChild(F),this.markerElem_=F;const W=n.createElement("div");W.classList.add(Mr("p")),this.markerElem_.appendChild(W),this.previewElem_=W,this.update_()}update_(){const n=this.value.rawValue,a=n.getComponents("rgb"),d=new Jt([a[0],a[1],a[2],0],"rgb"),M=new Jt([a[0],a[1],a[2],255],"rgb"),F=["to right",va(d),va(M)];this.colorElem_.style.background=`linear-gradient(${F.join(",")})`,this.previewElem_.style.backgroundColor=va(n);const W=Ee(a[3],0,1,0,100);this.markerElem_.style.left=`${W}%`}onValueChange_(){this.update_()}}class $u{constructor(n,a){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.view=new Yu(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ii(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,a){if(!n.point)return;const d=n.point.x/n.bounds.width,M=this.value.rawValue,[F,W,pt]=M.getComponents("hsv");this.value.setRawValue(new Jt([F,W,pt,d],"hsv"),a)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const a=Ge(ts(!0),Mn(n));if(a===0)return;const d=this.value.rawValue,[M,F,W,pt]=d.getComponents("hsv");this.value.setRawValue(new Jt([M,F,W,pt+a],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){Ge(ts(!0),Mn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Cs=D("coltxt");function Zu(o){const n=o.createElement("select"),a=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return n.appendChild(a.reduce((d,M)=>{const F=o.createElement("option");return F.textContent=M.text,F.value=M.value,d.appendChild(F),d},o.createDocumentFragment())),n}class Ju{constructor(n,a){this.element=n.createElement("div"),this.element.classList.add(Cs()),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("div");d.classList.add(Cs("m")),this.modeElem_=Zu(n),this.modeElem_.classList.add(Cs("ms")),d.appendChild(this.modeSelectElement),a.viewProps.bindDisabled(this.modeElem_);const M=n.createElement("div");M.classList.add(Cs("mm")),M.appendChild(P(n,"dropdown")),d.appendChild(M),this.element.appendChild(d);const F=n.createElement("div");F.classList.add(Cs("w")),this.element.appendChild(F),this.textsElem_=F,this.textViews_=a.textViews,this.applyTextViews_(),z(a.colorMode,W=>{this.modeElem_.value=W})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(n){this.textViews_=n,this.applyTextViews_()}applyTextViews_(){_t(this.textsElem_);const n=this.element.ownerDocument;this.textViews_.forEach(a=>{const d=n.createElement("div");d.classList.add(Cs("c")),d.appendChild(a.element),this.textsElem_.appendChild(d)})}}function Qu(o){return Ne(o==="float"?2:0)}function td(o,n,a){const d=G(o,n)[a];return new Ei({min:0,max:d})}function To(o,n,a){return new Yi(o,{arrayPosition:a===0?"fst":a===3-1?"lst":"mid",baseStep:ts(!1),parser:n.parser,props:q.fromObject({draggingScale:n.colorType==="float"?.01:1,formatter:Qu(n.colorType)}),value:Z(0,{constraint:td(n.colorMode,n.colorType,a)}),viewProps:n.viewProps})}class ed{constructor(n,a){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=a.colorType,this.parser_=a.parser,this.value=a.value,this.viewProps=a.viewProps,this.colorMode=Z(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(n),this.view=new Ju(n,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(n){const a={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},d=[To(n,a,0),To(n,a,1),To(n,a,2)];return d.forEach((M,F)=>{Mi({primary:this.value,secondary:M.value,forward:W=>W.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[F],backward:(W,pt)=>{const kt=this.colorMode.rawValue,Xt=W.rawValue.getComponents(kt,this.colorType_);return Xt[F]=pt.rawValue,new Jt(E(p(Xt),Xt[3]),kt,this.colorType_)}})}),d}onModeSelectChange_(n){const a=n.currentTarget;this.colorMode.rawValue=a.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Po=D("hpl");class nd{constructor(n,a){this.onValueChange_=this.onValueChange_.bind(this),this.value=a.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Po()),a.viewProps.bindClassModifiers(this.element),a.viewProps.bindTabIndex(this.element);const d=n.createElement("div");d.classList.add(Po("c")),this.element.appendChild(d);const M=n.createElement("div");M.classList.add(Po("m")),this.element.appendChild(M),this.markerElem_=M,this.update_()}update_(){const n=this.value.rawValue,[a]=n.getComponents("hsv");this.markerElem_.style.backgroundColor=ec(new Jt([a,100,100],"hsv"));const d=Ee(a,0,360,0,100);this.markerElem_.style.left=`${d}%`}onValueChange_(){this.update_()}}class id{constructor(n,a){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.view=new nd(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ii(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,a){if(!n.point)return;const d=Ee(Re(n.point.x,0,n.bounds.width),0,n.bounds.width,0,360),M=this.value.rawValue,[,F,W,pt]=M.getComponents("hsv");this.value.setRawValue(new Jt([d,F,W,pt],"hsv"),a)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const a=Ge(ts(!1),Mn(n));if(a===0)return;const d=this.value.rawValue,[M,F,W,pt]=d.getComponents("hsv");this.value.setRawValue(new Jt([M+a,F,W,pt],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){Ge(ts(!1),Mn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ao=D("svp"),sc=64;class sd{constructor(n,a){this.onValueChange_=this.onValueChange_.bind(this),this.value=a.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Ao()),a.viewProps.bindClassModifiers(this.element),a.viewProps.bindTabIndex(this.element);const d=n.createElement("canvas");d.height=sc,d.width=sc,d.classList.add(Ao("c")),this.element.appendChild(d),this.canvasElement=d;const M=n.createElement("div");M.classList.add(Ao("m")),this.element.appendChild(M),this.markerElem_=M,this.update_()}update_(){const n=Ie(this.canvasElement);if(!n)return;const d=this.value.rawValue.getComponents("hsv"),M=this.canvasElement.width,F=this.canvasElement.height,W=n.getImageData(0,0,M,F),pt=W.data;for(let he=0;he<F;he++)for(let de=0;de<M;de++){const ns=Ee(de,0,M,0,100),Cr=Ee(he,0,F,100,0),Tr=_a(d[0],ns,Cr),ga=(he*M+de)*4;pt[ga]=Tr[0],pt[ga+1]=Tr[1],pt[ga+2]=Tr[2],pt[ga+3]=255}n.putImageData(W,0,0);const kt=Ee(d[1],0,100,0,100);this.markerElem_.style.left=`${kt}%`;const Xt=Ee(d[2],0,100,100,0);this.markerElem_.style.top=`${Xt}%`}onValueChange_(){this.update_()}}class rd{constructor(n,a){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.view=new sd(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ii(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,a){if(!n.point)return;const d=Ee(n.point.x,0,n.bounds.width,0,100),M=Ee(n.point.y,0,n.bounds.height,100,0),[F,,,W]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Jt([F,d,M,W],"hsv"),a)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){Es(n.key)&&n.preventDefault();const[a,d,M,F]=this.value.rawValue.getComponents("hsv"),W=ts(!1),pt=Ge(W,Mn(n)),kt=Ge(W,Ki(n));pt===0&&kt===0||this.value.setRawValue(new Jt([a,d+pt,M+kt,F],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){const a=ts(!1),d=Ge(a,Mn(n)),M=Ge(a,Ki(n));d===0&&M===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ad{constructor(n,a){this.value=a.value,this.viewProps=a.viewProps,this.hPaletteC_=new id(n,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new rd(n,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=a.supportsAlpha?{palette:new $u(n,{value:this.value,viewProps:this.viewProps}),text:new Yi(n,{parser:yn,baseStep:.1,props:q.fromObject({draggingScale:.01,formatter:Ne(2)}),value:Z(0,{constraint:new Ei({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Mi({primary:this.value,secondary:this.alphaIcs_.text.value,forward:d=>d.rawValue.getComponents()[3],backward:(d,M)=>{const F=d.rawValue.getComponents();return F[3]=M.rawValue,new Jt(F,d.rawValue.mode)}}),this.textC_=new ed(n,{colorType:a.colorType,parser:yn,value:this.value,viewProps:this.viewProps}),this.view=new wo(n,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:a.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Ro=D("colsw");class od{constructor(n,a){this.onValueChange_=this.onValueChange_.bind(this),a.value.emitter.on("change",this.onValueChange_),this.value=a.value,this.element=n.createElement("div"),this.element.classList.add(Ro()),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("div");d.classList.add(Ro("sw")),this.element.appendChild(d),this.swatchElem_=d;const M=n.createElement("button");M.classList.add(Ro("b")),a.viewProps.bindDisabled(M),this.element.appendChild(M),this.buttonElement=M,this.update_()}update_(){const n=this.value.rawValue;this.swatchElem_.style.backgroundColor=So(n)}onValueChange_(){this.update_()}}class ld{constructor(n,a){this.value=a.value,this.viewProps=a.viewProps,this.view=new od(n,{value:this.value,viewProps:this.viewProps})}}class Lo{constructor(n,a){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.foldable_=Kt.create(a.expanded),this.swatchC_=new ld(n,{value:this.value,viewProps:this.viewProps});const d=this.swatchC_.view.buttonElement;d.addEventListener("blur",this.onButtonBlur_),d.addEventListener("click",this.onButtonClick_),this.textC_=new xs(n,{parser:a.parser,props:q.fromObject({formatter:a.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new yr(n,{foldable:this.foldable_,pickerLayout:a.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=a.pickerLayout==="popup"?new ta(n,{viewProps:this.viewProps}):null;const M=new ad(n,{colorType:a.colorType,supportsAlpha:a.supportsAlpha,value:this.value,viewProps:this.viewProps});M.view.allFocusableElements.forEach(F=>{F.addEventListener("blur",this.onPopupChildBlur_),F.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=M,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(M.view.element),Mi({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:F=>F.rawValue,backward:(F,W)=>W.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),wt(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(n){if(!this.popC_)return;const a=this.view.element,d=n.relatedTarget;(!d||!a.contains(d))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const a=this.popC_.view.element,d=At(n);d&&a.contains(d)||d&&d===this.swatchC_.view.buttonElement&&!jt(a.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function cd(o,n){return Jt.isColorObject(o)?Jt.fromObject(o,n):Jt.black(n)}function hd(o){return p(o.getComponents("rgb")).reduce((n,a)=>n<<8|Math.floor(a)&255,0)}function ud(o){return o.getComponents("rgb").reduce((n,a,d)=>{const M=Math.floor(d===3?a*255:a)&255;return n<<8|M},0)>>>0}function dd(o){return new Jt([o>>16&255,o>>8&255,o&255],"rgb")}function pd(o){return new Jt([o>>24&255,o>>16&255,o>>8&255,Ee(o&255,0,255,0,1)],"rgb")}function fd(o){return typeof o!="number"?Jt.black():dd(o)}function md(o){return typeof o!="number"?Jt.black():pd(o)}function _d(o){const n=Co(o);return n?(a,d)=>{fn(a,n(d))}:null}function vd(o){const n=o?ud:hd;return(a,d)=>{fn(a,n(d))}}function gd(o,n,a){const d=n.toRgbaObject(a);o.writeProperty("r",d.r),o.writeProperty("g",d.g),o.writeProperty("b",d.b),o.writeProperty("a",d.a)}function bd(o,n,a){const d=n.toRgbaObject(a);o.writeProperty("r",d.r),o.writeProperty("g",d.g),o.writeProperty("b",d.b)}function xd(o,n){return(a,d)=>{o?gd(a,d,n):bd(a,d,n)}}function Do(o){var n;return!!(o!=null&&o.alpha||!((n=o==null?void 0:o.color)===null||n===void 0)&&n.alpha)}function wd(o){return o?n=>So(n,"0x"):n=>tc(n,"0x")}function Ed(o){return"color"in o||"view"in o&&o.view==="color"}const yd={id:"input-color-number",type:"input",accept:(o,n)=>{if(typeof o!="number"||!Ed(n))return null;const a=Eo(n);return a?{initialValue:o,params:a}:null},binding:{reader:o=>Do(o.params)?md:fd,equals:Jt.equals,writer:o=>vd(Do(o.params))},controller:o=>{const n=Do(o.params),a="expanded"in o.params?o.params.expanded:void 0,d="picker"in o.params?o.params.picker:void 0;return new Lo(o.document,{colorType:"int",expanded:a??!1,formatter:wd(n),parser:Mo("int"),pickerLayout:d??"popup",supportsAlpha:n,value:o.value,viewProps:o.viewProps})}};function Md(o){return Jt.isRgbaColorObject(o)}function Sd(o){return n=>cd(n,o)}function Cd(o,n){return a=>o?ic(a,n):nc(a,n)}const Td={id:"input-color-object",type:"input",accept:(o,n)=>{if(!Jt.isColorObject(o))return null;const a=Eo(n);return a?{initialValue:o,params:a}:null},binding:{reader:o=>Sd(es(o.params)),equals:Jt.equals,writer:o=>xd(Md(o.initialValue),es(o.params))},controller:o=>{var n;const a=Jt.isRgbaColorObject(o.initialValue),d="expanded"in o.params?o.params.expanded:void 0,M="picker"in o.params?o.params.picker:void 0,F=(n=es(o.params))!==null&&n!==void 0?n:"int";return new Lo(o.document,{colorType:F,expanded:d??!1,formatter:Cd(a,F),parser:Mo(F),pickerLayout:M??"popup",supportsAlpha:a,value:o.value,viewProps:o.viewProps})}},Pd={id:"input-color-string",type:"input",accept:(o,n)=>{if(typeof o!="string"||"view"in n&&n.view==="text")return null;const a=yo(o,es(n));if(!a||!Co(a))return null;const M=Eo(n);return M?{initialValue:o,params:M}:null},binding:{reader:o=>{var n;return Bu((n=es(o.params))!==null&&n!==void 0?n:"int")},equals:Jt.equals,writer:o=>{const n=yo(o.initialValue,es(o.params));if(!n)throw S.shouldNeverHappen();const a=_d(n);if(!a)throw S.notBindable();return a}},controller:o=>{const n=yo(o.initialValue,es(o.params));if(!n)throw S.shouldNeverHappen();const a=Co(n);if(!a)throw S.shouldNeverHappen();const d="expanded"in o.params?o.params.expanded:void 0,M="picker"in o.params?o.params.picker:void 0;return new Lo(o.document,{colorType:n.type,expanded:d??!1,formatter:a,parser:Mo(n.type),pickerLayout:M??"popup",supportsAlpha:n.alpha,value:o.value,viewProps:o.viewProps})}};class Ci{constructor(n){this.components=n.components,this.asm_=n.assembly}constrain(n){const a=this.asm_.toComponents(n).map((d,M)=>{var F,W;return(W=(F=this.components[M])===null||F===void 0?void 0:F.constrain(d))!==null&&W!==void 0?W:d});return this.asm_.fromComponents(a)}}const rc=D("pndtxt");class Ad{constructor(n,a){this.textViews=a.textViews,this.element=n.createElement("div"),this.element.classList.add(rc()),this.textViews.forEach(d=>{const M=n.createElement("div");M.classList.add(rc("a")),M.appendChild(d.element),this.element.appendChild(M)})}}function Rd(o,n,a){return new Yi(o,{arrayPosition:a===0?"fst":a===n.axes.length-1?"lst":"mid",baseStep:n.axes[a].baseStep,parser:n.parser,props:n.axes[a].textProps,value:Z(0,{constraint:n.axes[a].constraint}),viewProps:n.viewProps})}class Uo{constructor(n,a){this.value=a.value,this.viewProps=a.viewProps,this.acs_=a.axes.map((d,M)=>Rd(n,a,M)),this.acs_.forEach((d,M)=>{Mi({primary:this.value,secondary:d.value,forward:F=>a.assembly.toComponents(F.rawValue)[M],backward:(F,W)=>{const pt=a.assembly.toComponents(F.rawValue);return pt[M]=W.rawValue,a.assembly.fromComponents(pt)}})}),this.view=new Ad(n,{textViews:this.acs_.map(d=>d.view)})}}function ac(o,n){return"step"in o&&!g(o.step)?new bs(o.step,n):null}function oc(o){return!g(o.max)&&!g(o.min)?new Ei({max:o.max,min:o.min}):!g(o.max)||!g(o.min)?new lr({max:o.max,min:o.min}):null}function Ld(o){const n=pn(o,Ei);if(n)return[n.values.get("min"),n.values.get("max")];const a=pn(o,lr);return a?[a.minValue,a.maxValue]:[void 0,void 0]}function Dd(o,n){const a=[],d=ac(o,n);d&&a.push(d);const M=oc(o);M&&a.push(M);const F=Er(o.options);return F&&a.push(F),new Hi(a)}const Ud={id:"input-number",type:"input",accept:(o,n)=>{if(typeof o!="number")return null;const a=ut,d=ft(n,{format:a.optional.function,max:a.optional.number,min:a.optional.number,options:a.optional.custom(Zi),step:a.optional.number});return d?{initialValue:o,params:d}:null},binding:{reader:o=>Ln,constraint:o=>Dd(o.params,o.initialValue),writer:o=>fn},controller:o=>{var n;const a=o.value,d=o.constraint,M=d&&pn(d,Wi);if(M)return new Xi(o.document,{props:new q({options:M.values.value("options")}),value:a,viewProps:o.viewProps});const F=(n="format"in o.params?o.params.format:void 0)!==null&&n!==void 0?n:Ne(Ms(d,a.rawValue)),W=d&&pn(d,Ei);return W?new ys(o.document,{baseStep:si(d),parser:yn,sliderProps:new q({maxValue:W.values.value("max"),minValue:W.values.value("min")}),textProps:q.fromObject({draggingScale:ri(d,a.rawValue),formatter:F}),value:a,viewProps:o.viewProps}):new Yi(o.document,{baseStep:si(d),parser:yn,props:q.fromObject({draggingScale:ri(d,a.rawValue),formatter:F}),value:a,viewProps:o.viewProps})}};class Ti{constructor(n=0,a=0){this.x=n,this.y=a}getComponents(){return[this.x,this.y]}static isObject(n){if(g(n))return!1;const a=n.x,d=n.y;return!(typeof a!="number"||typeof d!="number")}static equals(n,a){return n.x===a.x&&n.y===a.y}toObject(){return{x:this.x,y:this.y}}}const lc={toComponents:o=>o.getComponents(),fromComponents:o=>new Ti(...o)},Ts=D("p2d");class Id{constructor(n,a){this.element=n.createElement("div"),this.element.classList.add(Ts()),a.viewProps.bindClassModifiers(this.element),z(a.expanded,A(this.element,Ts(void 0,"expanded")));const d=n.createElement("div");d.classList.add(Ts("h")),this.element.appendChild(d);const M=n.createElement("button");M.classList.add(Ts("b")),M.appendChild(P(n,"p2dpad")),a.viewProps.bindDisabled(M),d.appendChild(M),this.buttonElement=M;const F=n.createElement("div");if(F.classList.add(Ts("t")),d.appendChild(F),this.textElement=F,a.pickerLayout==="inline"){const W=n.createElement("div");W.classList.add(Ts("p")),this.element.appendChild(W),this.pickerElement=W}else this.pickerElement=null}}const Pi=D("p2dp");class Nd{constructor(n,a){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=a.invertsY,this.maxValue_=a.maxValue,this.element=n.createElement("div"),this.element.classList.add(Pi()),a.layout==="popup"&&this.element.classList.add(Pi(void 0,"p")),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("div");d.classList.add(Pi("p")),a.viewProps.bindTabIndex(d),this.element.appendChild(d),this.padElement=d;const M=n.createElementNS(Ut,"svg");M.classList.add(Pi("g")),this.padElement.appendChild(M),this.svgElem_=M;const F=n.createElementNS(Ut,"line");F.classList.add(Pi("ax")),F.setAttributeNS(null,"x1","0"),F.setAttributeNS(null,"y1","50%"),F.setAttributeNS(null,"x2","100%"),F.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(F);const W=n.createElementNS(Ut,"line");W.classList.add(Pi("ax")),W.setAttributeNS(null,"x1","50%"),W.setAttributeNS(null,"y1","0"),W.setAttributeNS(null,"x2","50%"),W.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(W);const pt=n.createElementNS(Ut,"line");pt.classList.add(Pi("l")),pt.setAttributeNS(null,"x1","50%"),pt.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(pt),this.lineElem_=pt;const kt=n.createElement("div");kt.classList.add(Pi("m")),this.padElement.appendChild(kt),this.markerElem_=kt,a.value.emitter.on("change",this.onValueChange_),this.value=a.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[n,a]=this.value.rawValue.getComponents(),d=this.maxValue_,M=Ee(n,-d,+d,0,100),F=Ee(a,-d,+d,0,100),W=this.invertsY_?100-F:F;this.lineElem_.setAttributeNS(null,"x2",`${M}%`),this.lineElem_.setAttributeNS(null,"y2",`${W}%`),this.markerElem_.style.left=`${M}%`,this.markerElem_.style.top=`${W}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function cc(o,n,a){return[Ge(n[0],Mn(o)),Ge(n[1],Ki(o))*(a?1:-1)]}class Fd{constructor(n,a){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.baseSteps_=a.baseSteps,this.maxValue_=a.maxValue,this.invertsY_=a.invertsY,this.view=new Nd(n,{invertsY:this.invertsY_,layout:a.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ii(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(n,a){if(!n.point)return;const d=this.maxValue_,M=Ee(n.point.x,0,n.bounds.width,-d,+d),F=Ee(this.invertsY_?n.bounds.height-n.point.y:n.point.y,0,n.bounds.height,-d,+d);this.value.setRawValue(new Ti(M,F),a)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onPadKeyDown_(n){Es(n.key)&&n.preventDefault();const[a,d]=cc(n,this.baseSteps_,this.invertsY_);a===0&&d===0||this.value.setRawValue(new Ti(this.value.rawValue.x+a,this.value.rawValue.y+d),{forceEmit:!1,last:!1})}onPadKeyUp_(n){const[a,d]=cc(n,this.baseSteps_,this.invertsY_);a===0&&d===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Od{constructor(n,a){var d,M;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=a.value,this.viewProps=a.viewProps,this.foldable_=Kt.create(a.expanded),this.popC_=a.pickerLayout==="popup"?new ta(n,{viewProps:this.viewProps}):null;const F=new Fd(n,{baseSteps:[a.axes[0].baseStep,a.axes[1].baseStep],invertsY:a.invertsY,layout:a.pickerLayout,maxValue:a.maxValue,value:this.value,viewProps:this.viewProps});F.view.allFocusableElements.forEach(W=>{W.addEventListener("blur",this.onPopupChildBlur_),W.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=F,this.textC_=new Uo(n,{assembly:lc,axes:a.axes,parser:a.parser,value:this.value,viewProps:this.viewProps}),this.view=new Id(n,{expanded:this.foldable_.value("expanded"),pickerLayout:a.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(d=this.view.buttonElement)===null||d===void 0||d.addEventListener("blur",this.onPadButtonBlur_),(M=this.view.buttonElement)===null||M===void 0||M.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Mi({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:W=>W.rawValue,backward:(W,pt)=>pt.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),wt(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(n){if(!this.popC_)return;const a=this.view.element,d=n.relatedTarget;(!d||!a.contains(d))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const a=this.popC_.view.element,d=At(n);d&&a.contains(d)||d&&d===this.view.buttonElement&&!jt(a.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.view.buttonElement.focus()}}class Ps{constructor(n=0,a=0,d=0){this.x=n,this.y=a,this.z=d}getComponents(){return[this.x,this.y,this.z]}static isObject(n){if(g(n))return!1;const a=n.x,d=n.y,M=n.z;return!(typeof a!="number"||typeof d!="number"||typeof M!="number")}static equals(n,a){return n.x===a.x&&n.y===a.y&&n.z===a.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const hc={toComponents:o=>o.getComponents(),fromComponents:o=>new Ps(...o)};function zd(o){return Ps.isObject(o)?new Ps(o.x,o.y,o.z):new Ps}function kd(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y),o.writeProperty("z",n.z)}function Vd(o,n){return new Ci({assembly:hc,components:[oi("x"in o?o.x:void 0,n.x),oi("y"in o?o.y:void 0,n.y),oi("z"in o?o.z:void 0,n.z)]})}function Io(o,n){return{baseStep:si(n),constraint:n,textProps:q.fromObject({draggingScale:ri(n,o),formatter:Ne(Ms(n,o))})}}const Bd={id:"input-point3d",type:"input",accept:(o,n)=>{if(!Ps.isObject(o))return null;const a=ut,d=ft(n,{x:a.optional.custom(Dn),y:a.optional.custom(Dn),z:a.optional.custom(Dn)});return d?{initialValue:o,params:d}:null},binding:{reader:o=>zd,constraint:o=>Vd(o.params,o.initialValue),equals:Ps.equals,writer:o=>kd},controller:o=>{const n=o.value,a=o.constraint;if(!(a instanceof Ci))throw S.shouldNeverHappen();return new Uo(o.document,{assembly:hc,axes:[Io(n.rawValue.x,a.components[0]),Io(n.rawValue.y,a.components[1]),Io(n.rawValue.z,a.components[2])],parser:yn,value:n,viewProps:o.viewProps})}};class As{constructor(n=0,a=0,d=0,M=0){this.x=n,this.y=a,this.z=d,this.w=M}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(n){if(g(n))return!1;const a=n.x,d=n.y,M=n.z,F=n.w;return!(typeof a!="number"||typeof d!="number"||typeof M!="number"||typeof F!="number")}static equals(n,a){return n.x===a.x&&n.y===a.y&&n.z===a.z&&n.w===a.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const uc={toComponents:o=>o.getComponents(),fromComponents:o=>new As(...o)};function Gd(o){return As.isObject(o)?new As(o.x,o.y,o.z,o.w):new As}function Hd(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y),o.writeProperty("z",n.z),o.writeProperty("w",n.w)}function Wd(o,n){return new Ci({assembly:uc,components:[oi("x"in o?o.x:void 0,n.x),oi("y"in o?o.y:void 0,n.y),oi("z"in o?o.z:void 0,n.z),oi("w"in o?o.w:void 0,n.w)]})}function Xd(o,n){return{baseStep:si(n),constraint:n,textProps:q.fromObject({draggingScale:ri(n,o),formatter:Ne(Ms(n,o))})}}const qd={id:"input-point4d",type:"input",accept:(o,n)=>{if(!As.isObject(o))return null;const a=ut,d=ft(n,{x:a.optional.custom(Dn),y:a.optional.custom(Dn),z:a.optional.custom(Dn),w:a.optional.custom(Dn)});return d?{initialValue:o,params:d}:null},binding:{reader:o=>Gd,constraint:o=>Wd(o.params,o.initialValue),equals:As.equals,writer:o=>Hd},controller:o=>{const n=o.value,a=o.constraint;if(!(a instanceof Ci))throw S.shouldNeverHappen();return new Uo(o.document,{assembly:uc,axes:n.rawValue.getComponents().map((d,M)=>Xd(d,a.components[M])),parser:yn,value:n,viewProps:o.viewProps})}};function jd(o){const n=[],a=Er(o.options);return a&&n.push(a),new Hi(n)}const Kd={id:"input-string",type:"input",accept:(o,n)=>{if(typeof o!="string")return null;const d=ft(n,{options:ut.optional.custom(Zi)});return d?{initialValue:o,params:d}:null},binding:{reader:o=>fr,constraint:o=>jd(o.params),writer:o=>fn},controller:o=>{const n=o.document,a=o.value,d=o.constraint,M=d&&pn(d,Wi);return M?new Xi(n,{props:new q({options:M.values.value("options")}),value:a,viewProps:o.viewProps}):new xs(n,{parser:F=>F,props:q.fromObject({formatter:jn}),value:a,viewProps:o.viewProps})}},Sr={monitor:{defaultInterval:200,defaultLineCount:3}},dc=D("mll");class Yd{constructor(n,a){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=a.formatter,this.element=n.createElement("div"),this.element.classList.add(dc()),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("textarea");d.classList.add(dc("i")),d.style.height=`calc(var(--bld-us) * ${a.lineCount})`,d.readOnly=!0,a.viewProps.bindDisabled(d),this.element.appendChild(d),this.textareaElem_=d,a.value.emitter.on("change",this.onValueUpdate_),this.value=a.value,this.update_()}update_(){const n=this.textareaElem_,a=n.scrollTop===n.scrollHeight-n.clientHeight,d=[];this.value.rawValue.forEach(M=>{M!==void 0&&d.push(this.formatter_(M))}),n.textContent=d.join(`
`),a&&(n.scrollTop=n.scrollHeight)}onValueUpdate_(){this.update_()}}class No{constructor(n,a){this.value=a.value,this.viewProps=a.viewProps,this.view=new Yd(n,{formatter:a.formatter,lineCount:a.lineCount,value:this.value,viewProps:this.viewProps})}}const pc=D("sgl");class $d{constructor(n,a){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=a.formatter,this.element=n.createElement("div"),this.element.classList.add(pc()),a.viewProps.bindClassModifiers(this.element);const d=n.createElement("input");d.classList.add(pc("i")),d.readOnly=!0,d.type="text",a.viewProps.bindDisabled(d),this.element.appendChild(d),this.inputElement=d,a.value.emitter.on("change",this.onValueUpdate_),this.value=a.value,this.update_()}update_(){const n=this.value.rawValue,a=n[n.length-1];this.inputElement.value=a!==void 0?this.formatter_(a):""}onValueUpdate_(){this.update_()}}class Fo{constructor(n,a){this.value=a.value,this.viewProps=a.viewProps,this.view=new $d(n,{formatter:a.formatter,value:this.value,viewProps:this.viewProps})}}const Zd={id:"monitor-bool",type:"monitor",accept:(o,n)=>{if(typeof o!="boolean")return null;const d=ft(n,{lineCount:ut.optional.number});return d?{initialValue:o,params:d}:null},binding:{reader:o=>na},controller:o=>{var n;return o.value.rawValue.length===1?new Fo(o.document,{formatter:ia,value:o.value,viewProps:o.viewProps}):new No(o.document,{formatter:ia,lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:Sr.monitor.defaultLineCount,value:o.value,viewProps:o.viewProps})}},Ai=D("grl");class Jd{constructor(n,a){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Ai()),a.viewProps.bindClassModifiers(this.element),this.formatter_=a.formatter,this.props_=a.props,this.cursor_=a.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const d=n.createElementNS(Ut,"svg");d.classList.add(Ai("g")),d.style.height=`calc(var(--bld-us) * ${a.lineCount})`,this.element.appendChild(d),this.svgElem_=d;const M=n.createElementNS(Ut,"polyline");this.svgElem_.appendChild(M),this.lineElem_=M;const F=n.createElement("div");F.classList.add(Ai("t"),D("tt")()),this.element.appendChild(F),this.tooltipElem_=F,a.value.emitter.on("change",this.onValueUpdate_),this.value=a.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const n=this.svgElem_.getBoundingClientRect(),a=this.value.rawValue.length-1,d=this.props_.get("minValue"),M=this.props_.get("maxValue"),F=[];this.value.rawValue.forEach((he,de)=>{if(he===void 0)return;const ns=Ee(de,0,a,0,n.width),Cr=Ee(he,d,M,n.height,0);F.push([ns,Cr].join(","))}),this.lineElem_.setAttributeNS(null,"points",F.join(" "));const W=this.tooltipElem_,pt=this.value.rawValue[this.cursor_.rawValue];if(pt===void 0){W.classList.remove(Ai("t","a"));return}const kt=Ee(this.cursor_.rawValue,0,a,0,n.width),Xt=Ee(pt,d,M,n.height,0);W.style.left=`${kt}px`,W.style.top=`${Xt}px`,W.textContent=`${this.formatter_(pt)}`,W.classList.contains(Ai("t","a"))||(W.classList.add(Ai("t","a"),Ai("t","in")),le(W),W.classList.remove(Ai("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Qd{constructor(n,a){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=a.props,this.value=a.value,this.viewProps=a.viewProps,this.cursor_=Z(-1),this.view=new Jd(n,{cursor:this.cursor_,formatter:a.formatter,lineCount:a.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!jt(n))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const d=new ii(this.view.element);d.emitter.on("down",this.onGraphPointerDown_),d.emitter.on("move",this.onGraphPointerMove_),d.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(n){const a=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Ee(n.offsetX,0,a.width,0,this.value.rawValue.length))}onGraphPointerDown_(n){this.onGraphPointerMove_(n)}onGraphPointerMove_(n){if(!n.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ee(n.data.point.x,0,n.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Oo(o){return"format"in o&&!g(o.format)?o.format:Ne(2)}function tp(o){var n;return o.value.rawValue.length===1?new Fo(o.document,{formatter:Oo(o.params),value:o.value,viewProps:o.viewProps}):new No(o.document,{formatter:Oo(o.params),lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:Sr.monitor.defaultLineCount,value:o.value,viewProps:o.viewProps})}function ep(o){var n,a,d;return new Qd(o.document,{formatter:Oo(o.params),lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:Sr.monitor.defaultLineCount,props:q.fromObject({maxValue:(a="max"in o.params?o.params.max:null)!==null&&a!==void 0?a:100,minValue:(d="min"in o.params?o.params.min:null)!==null&&d!==void 0?d:0}),value:o.value,viewProps:o.viewProps})}function fc(o){return"view"in o&&o.view==="graph"}const np={id:"monitor-number",type:"monitor",accept:(o,n)=>{if(typeof o!="number")return null;const a=ut,d=ft(n,{format:a.optional.function,lineCount:a.optional.number,max:a.optional.number,min:a.optional.number,view:a.optional.string});return d?{initialValue:o,params:d}:null},binding:{defaultBufferSize:o=>fc(o)?64:1,reader:o=>Ln},controller:o=>fc(o.params)?ep(o):tp(o)},ip={id:"monitor-string",type:"monitor",accept:(o,n)=>{if(typeof o!="string")return null;const a=ut,d=ft(n,{lineCount:a.optional.number,multiline:a.optional.boolean});return d?{initialValue:o,params:d}:null},binding:{reader:o=>fr},controller:o=>{var n;const a=o.value;return a.rawValue.length>1||"multiline"in o.params&&o.params.multiline?new No(o.document,{formatter:jn,lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:Sr.monitor.defaultLineCount,value:a,viewProps:o.viewProps}):new Fo(o.document,{formatter:jn,value:a,viewProps:o.viewProps})}};function sp(o,n){var a;const d=o.accept(n.target.read(),n.params);if(g(d))return null;const M=ut,F={target:n.target,initialValue:d.initialValue,params:d.params},W=o.binding.reader(F),pt=o.binding.constraint?o.binding.constraint(F):void 0,kt=Z(W(d.initialValue),{constraint:pt,equals:o.binding.equals}),Xt=new xi({reader:W,target:n.target,value:kt,writer:o.binding.writer(F)}),he=M.optional.boolean(n.params.disabled).value,de=M.optional.boolean(n.params.hidden).value,ns=o.controller({constraint:pt,document:n.document,initialValue:d.initialValue,params:d.params,value:Xt.value,viewProps:Vt.create({disabled:he,hidden:de})});return new ne(n.document,{binding:Xt,blade:Ct(),props:q.fromObject({label:"label"in n.params?(a=M.optional.string(n.params.label).value)!==null&&a!==void 0?a:null:n.target.key}),valueController:ns})}function rp(o,n){return n===0?new Be:new ti(o,n??Sr.monitor.defaultInterval)}function ap(o,n){var a,d,M;const F=ut,W=o.accept(n.target.read(),n.params);if(g(W))return null;const pt={target:n.target,initialValue:W.initialValue,params:W.params},kt=o.binding.reader(pt),Xt=(d=(a=F.optional.number(n.params.bufferSize).value)!==null&&a!==void 0?a:o.binding.defaultBufferSize&&o.binding.defaultBufferSize(W.params))!==null&&d!==void 0?d:1,he=F.optional.number(n.params.interval).value,de=new Za({reader:kt,target:n.target,ticker:rp(n.document,he),value:Zr(Xt)}),ns=F.optional.boolean(n.params.disabled).value,Cr=F.optional.boolean(n.params.hidden).value,Tr=o.controller({document:n.document,params:W.params,value:de.value,viewProps:Vt.create({disabled:ns,hidden:Cr})});return new xe(n.document,{binding:de,blade:Ct(),props:q.fromObject({label:"label"in n.params?(M=F.optional.string(n.params.label).value)!==null&&M!==void 0?M:null:n.target.key}),valueController:Tr})}class op{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(n){n.type==="blade"?this.pluginsMap_.blades.unshift(n):n.type==="input"?this.pluginsMap_.inputs.unshift(n):n.type==="monitor"&&this.pluginsMap_.monitors.unshift(n)}createInput(n,a,d){const M=a.read();if(g(M))throw new S({context:{key:a.key},type:"nomatchingcontroller"});const F=this.pluginsMap_.inputs.reduce((W,pt)=>W??sp(pt,{document:n,target:a,params:d}),null);if(F)return F;throw new S({context:{key:a.key},type:"nomatchingcontroller"})}createMonitor(n,a,d){const M=this.pluginsMap_.monitors.reduce((F,W)=>F??ap(W,{document:n,params:d,target:a}),null);if(M)return M;throw new S({context:{key:a.key},type:"nomatchingcontroller"})}createBlade(n,a){const d=this.pluginsMap_.blades.reduce((M,F)=>M??Gi(F,{document:n,params:a}),null);if(!d)throw new S({type:"nomatchingview",context:{params:a}});return d}createBladeApi(n){if(n instanceof ne)return new qe(n);if(n instanceof xe)return new je(n);if(n instanceof X)return new Rn(n,this);const a=this.pluginsMap_.blades.reduce((d,M)=>d??M.api({controller:n,pool:this}),null);if(!a)throw S.shouldNeverHappen();return a}}function lp(){const o=new op;return[fp,Bd,qd,Kd,Ud,Pd,Td,yd,Ss,Zd,ip,np,Ot,Bt,Me,dn].forEach(n=>{o.register(n)}),o}function cp(o){return Ti.isObject(o)?new Ti(o.x,o.y):new Ti}function hp(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y)}function oi(o,n){if(!o)return;const a=[],d=ac(o,n);d&&a.push(d);const M=oc(o);return M&&a.push(M),new Hi(a)}function up(o,n){return new Ci({assembly:lc,components:[oi("x"in o?o.x:void 0,n.x),oi("y"in o?o.y:void 0,n.y)]})}function mc(o,n){const[a,d]=o?Ld(o):[];if(!g(a)||!g(d))return Math.max(Math.abs(a??0),Math.abs(d??0));const M=si(o);return Math.max(Math.abs(M)*10,Math.abs(n)*10)}function dp(o,n){const a=n instanceof Ci?n.components[0]:void 0,d=n instanceof Ci?n.components[1]:void 0,M=mc(a,o.x),F=mc(d,o.y);return Math.max(M,F)}function _c(o,n){return{baseStep:si(n),constraint:n,textProps:q.fromObject({draggingScale:ri(n,o),formatter:Ne(Ms(n,o))})}}function pp(o){if(!("y"in o))return!1;const n=o.y;return n&&"inverted"in n?!!n.inverted:!1}const fp={id:"input-point2d",type:"input",accept:(o,n)=>{if(!Ti.isObject(o))return null;const a=ut,d=ft(n,{expanded:a.optional.boolean,picker:a.optional.custom(wr),x:a.optional.custom(Dn),y:a.optional.object({inverted:a.optional.boolean,max:a.optional.number,min:a.optional.number,step:a.optional.number})});return d?{initialValue:o,params:d}:null},binding:{reader:o=>cp,constraint:o=>up(o.params,o.initialValue),equals:Ti.equals,writer:o=>hp},controller:o=>{const n=o.document,a=o.value,d=o.constraint;if(!(d instanceof Ci))throw S.shouldNeverHappen();const M="expanded"in o.params?o.params.expanded:void 0,F="picker"in o.params?o.params.picker:void 0;return new Od(n,{axes:[_c(a.rawValue.x,d.components[0]),_c(a.rawValue.y,d.components[1])],expanded:M??!1,invertsY:pp(o.params),maxValue:dp(a.rawValue,d),parser:yn,pickerLayout:F??"popup",value:a,viewProps:o.viewProps})}};class vc extends r{constructor(n){super(n),this.emitter_=new I,this.controller_.valueController.value.emitter.on("change",a=>{this.emitter_.emit("change",{event:new h(this,a.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get options(){return this.controller_.valueController.props.get("options")}set options(n){this.controller_.valueController.props.set("options",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,a){const d=a.bind(this);return this.emitter_.on(n,M=>{d(M.event)}),this}}class gc extends r{constructor(n){super(n),this.emitter_=new I,this.controller_.valueController.value.emitter.on("change",a=>{this.emitter_.emit("change",{event:new h(this,a.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(n){this.controller_.valueController.sliderController.props.set("maxValue",n)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(n){this.controller_.valueController.sliderController.props.set("minValue",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,a){const d=a.bind(this);return this.emitter_.on(n,M=>{d(M.event)}),this}}class bc extends r{constructor(n){super(n),this.emitter_=new I,this.controller_.valueController.value.emitter.on("change",a=>{this.emitter_.emit("change",{event:new h(this,a.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(n){this.controller_.valueController.props.set("formatter",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,a){const d=a.bind(this);return this.emitter_.on(n,M=>{d(M.event)}),this}}const mp=function(){return{id:"list",type:"blade",accept(o){const n=ut,a=ft(o,{options:n.required.custom(Zi),value:n.required.raw,view:n.required.constant("list"),label:n.optional.string});return a?{params:a}:null},controller(o){const n=new Wi(pa(o.params.options)),a=Z(o.params.value,{constraint:n}),d=new Xi(o.document,{props:new q({options:n.values.value("options")}),value:a,viewProps:o.viewProps});return new zt(o.document,{blade:o.blade,props:q.fromObject({label:o.params.label}),valueController:d})},api(o){return!(o.controller instanceof zt)||!(o.controller.valueController instanceof Xi)?null:new vc(o.controller)}}}();function _p(o){return o.reduce((n,a)=>Object.assign(n,{[a.presetKey]:a.read()}),{})}function vp(o,n){o.forEach(a=>{const d=n[a.target.presetKey];d!==void 0&&a.writer(a.target,a.reader(d))})}class gp extends bi{constructor(n,a){super(n,a)}get element(){return this.controller_.view.element}importPreset(n){const a=this.controller_.rackController.rack.find(ne).map(d=>d.binding);vp(a,n),this.refresh()}exportPreset(){const n=this.controller_.rackController.rack.find(ne).map(a=>a.binding.target);return _p(n)}refresh(){this.controller_.rackController.rack.find(ne).forEach(n=>{n.binding.read()}),this.controller_.rackController.rack.find(xe).forEach(n=>{n.binding.read()})}}class bp extends It{constructor(n,a){super(n,{expanded:a.expanded,blade:a.blade,props:a.props,root:!0,viewProps:a.viewProps})}}const xp={id:"slider",type:"blade",accept(o){const n=ut,a=ft(o,{max:n.required.number,min:n.required.number,view:n.required.constant("slider"),format:n.optional.function,label:n.optional.string,value:n.optional.number});return a?{params:a}:null},controller(o){var n,a;const d=(n=o.params.value)!==null&&n!==void 0?n:0,M=new Ei({max:o.params.max,min:o.params.min}),F=new ys(o.document,{baseStep:1,parser:yn,sliderProps:new q({maxValue:M.values.value("max"),minValue:M.values.value("min")}),textProps:q.fromObject({draggingScale:ri(void 0,d),formatter:(a=o.params.format)!==null&&a!==void 0?a:_o}),value:Z(d,{constraint:M}),viewProps:o.viewProps});return new zt(o.document,{blade:o.blade,props:q.fromObject({label:o.params.label}),valueController:F})},api(o){return!(o.controller instanceof zt)||!(o.controller.valueController instanceof ys)?null:new gc(o.controller)}},wp=function(){return{id:"text",type:"blade",accept(o){const n=ut,a=ft(o,{parse:n.required.function,value:n.required.raw,view:n.required.constant("text"),format:n.optional.function,label:n.optional.string});return a?{params:a}:null},controller(o){var n;const a=new xs(o.document,{parser:o.params.parse,props:q.fromObject({formatter:(n=o.params.format)!==null&&n!==void 0?n:d=>String(d)}),value:Z(o.params.value),viewProps:o.viewProps});return new zt(o.document,{blade:o.blade,props:q.fromObject({label:o.params.label}),valueController:a})},api(o){return!(o.controller instanceof zt)||!(o.controller.valueController instanceof xs)?null:new bc(o.controller)}}}();function Ep(o){const n=o.createElement("div");return n.classList.add(D("dfw")()),o.body&&o.body.appendChild(n),n}function xc(o,n,a){if(o.querySelector(`style[data-tp-style=${n}]`))return;const d=o.createElement("style");d.dataset.tpStyle=n,d.textContent=a,o.head.appendChild(d)}class yp extends gp{constructor(n){var a,d;const M=n??{},F=(a=M.document)!==null&&a!==void 0?a:Ue(),W=lp(),pt=new bp(F,{expanded:M.expanded,blade:Ct(),props:q.fromObject({title:M.title}),viewProps:Vt.create()});super(pt,W),this.pool_=W,this.containerElem_=(d=M.container)!==null&&d!==void 0?d:Ep(F),this.containerElem_.appendChild(this.element),this.doc_=F,this.usesDefaultWrapper_=!M.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw S.alreadyDisposed();return this.doc_}dispose(){const n=this.containerElem_;if(!n)throw S.alreadyDisposed();if(this.usesDefaultWrapper_){const a=n.parentElement;a&&a.removeChild(n)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(n){("plugin"in n?[n.plugin]:"plugins"in n?n.plugins:[]).forEach(d=>{this.pool_.register(d),this.embedPluginStyle_(d)})}embedPluginStyle_(n){n.css&&xc(this.document,`plugin-${n.id}`,n.css)}setUpDefaultPlugins_(){xc(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(n=>{this.embedPluginStyle_(n)}),this.registerPlugin({plugins:[xp,mp,dn,wp]})}}const Mp=new i("3.1.10");e.BladeApi=r,e.ButtonApi=x,e.FolderApi=bi,e.InputBindingApi=qe,e.ListApi=vc,e.MonitorBindingApi=je,e.Pane=yp,e.SeparatorApi=$t,e.SliderApi=gc,e.TabApi=Pe,e.TabPageApi=Qn,e.TextApi=bc,e.TpChangeEvent=h,e.VERSION=Mp,Object.defineProperty(e,"__esModule",{value:!0})})})(Ml,Ml.exports);var d0=Ml.exports,Sl={exports:{}};(function(s,t){(function(e,i){i(t)})(Cu,function(e){class i{constructor(c){this.controller_=c}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(c){this.controller_.viewProps.set("disabled",c)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(c){this.controller_.viewProps.set("hidden",c)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class r{constructor(c){this.target=c}}class l extends r{constructor(c,p,E,L){super(c),this.value=p,this.presetKey=E,this.last=L??!0}}function h(v){return v}function u(v){return v==null}const f={alreadydisposed:()=>"View has been already disposed",invalidparams:v=>`Invalid parameters for '${v.name}'`,nomatchingcontroller:v=>`No matching controller for '${v.key}'`,nomatchingview:v=>`No matching view for '${JSON.stringify(v.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:v=>`Property '${v.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class m{constructor(c){var p;this.message=(p=f[c.type](c.context))!==null&&p!==void 0?p:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=c.type}static alreadyDisposed(){return new m({type:"alreadydisposed"})}static notBindable(){return new m({type:"notbindable"})}static propertyNotFound(c){return new m({type:"propertynotfound",context:{name:c}})}static shouldNeverHappen(){return new m({type:"shouldneverhappen"})}}class _{constructor(){this.observers_={}}on(c,p){let E=this.observers_[c];return E||(E=this.observers_[c]=[]),E.push({handler:p}),this}off(c,p){const E=this.observers_[c];return E&&(this.observers_[c]=E.filter(L=>L.handler!==p)),this}emit(c,p){const E=this.observers_[c];E&&E.forEach(L=>{L.handler(p)})}}const g="tp";function b(v){return(p,E)=>[g,"-",v,"v",p?`_${p}`:"",E?`-${E}`:""].join("")}function y(v,c){return p=>c(v(p))}function C(v){return v.rawValue}function S(v,c){v.emitter.on("change",y(C,c)),c(v.rawValue)}function w(v,c,p){S(v.value(c),p)}function x(v,c,p){p?v.classList.add(c):v.classList.remove(c)}function I(v,c){return p=>{x(v,c,p)}}function R(v,c){S(v,p=>{c.textContent=p??""})}const D=b("btn");class O{constructor(c,p){this.element=c.createElement("div"),this.element.classList.add(D()),p.viewProps.bindClassModifiers(this.element);const E=c.createElement("button");E.classList.add(D("b")),p.viewProps.bindDisabled(E),this.element.appendChild(E),this.buttonElement=E;const L=c.createElement("div");L.classList.add(D("t")),R(p.props.value("title"),L),this.buttonElement.appendChild(L)}}class k{constructor(c,p){this.emitter=new _,this.onClick_=this.onClick_.bind(this),this.props=p.props,this.viewProps=p.viewProps,this.view=new O(c,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class z{constructor(c,p){var E;this.constraint_=p==null?void 0:p.constraint,this.equals_=(E=p==null?void 0:p.equals)!==null&&E!==void 0?E:(L,G)=>L===G,this.emitter=new _,this.rawValue_=c}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(c){this.setRawValue(c,{forceEmit:!1,last:!0})}setRawValue(c,p){const E=p??{forceEmit:!1,last:!0},L=this.constraint_?this.constraint_.constrain(c):c,G=this.rawValue_;this.equals_(G,L)&&!E.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=L,this.emitter.emit("change",{options:E,previousRawValue:G,rawValue:L,sender:this}))}}class H{constructor(c){this.emitter=new _,this.value_=c}get rawValue(){return this.value_}set rawValue(c){this.setRawValue(c,{forceEmit:!1,last:!0})}setRawValue(c,p){const E=p??{forceEmit:!1,last:!0},L=this.value_;L===c&&!E.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=c,this.emitter.emit("change",{options:E,previousRawValue:L,rawValue:this.value_,sender:this}))}}function T(v,c){const p=c==null?void 0:c.constraint,E=c==null?void 0:c.equals;return!p&&!E?new H(v):new z(v,c)}class A{constructor(c){this.emitter=new _,this.valMap_=c;for(const p in this.valMap_)this.valMap_[p].emitter.on("change",()=>{this.emitter.emit("change",{key:p,sender:this})})}static createCore(c){return Object.keys(c).reduce((E,L)=>Object.assign(E,{[L]:T(c[L])}),{})}static fromObject(c){const p=this.createCore(c);return new A(p)}get(c){return this.valMap_[c].rawValue}set(c,p){this.valMap_[c].rawValue=p}value(c){return this.valMap_[c]}}function nt(v,c){const E=Object.keys(c).reduce((L,G)=>{if(L===void 0)return;const it=c[G],vt=it(v[G]);return vt.succeeded?Object.assign(Object.assign({},L),{[G]:vt.value}):void 0},{});return E}function rt(v,c){return v.reduce((p,E)=>{if(p===void 0)return;const L=c(E);if(!(!L.succeeded||L.value===void 0))return[...p,L.value]},[])}function j(v){return v===null?!1:typeof v=="object"}function $(v){return c=>p=>{if(!c&&p===void 0)return{succeeded:!1,value:void 0};if(c&&p===void 0)return{succeeded:!0,value:void 0};const E=v(p);return E!==void 0?{succeeded:!0,value:E}:{succeeded:!1,value:void 0}}}function et(v){return{custom:c=>$(c)(v),boolean:$(c=>typeof c=="boolean"?c:void 0)(v),number:$(c=>typeof c=="number"?c:void 0)(v),string:$(c=>typeof c=="string"?c:void 0)(v),function:$(c=>typeof c=="function"?c:void 0)(v),constant:c=>$(p=>p===c?c:void 0)(v),raw:$(c=>c)(v),object:c=>$(p=>{if(j(p))return nt(p,c)})(v),array:c=>$(p=>{if(Array.isArray(p))return rt(p,c)})(v)}}const ct={optional:et(!0),required:et(!1)};function Z(v,c){const p=ct.required.object(c)(v);return p.succeeded?p.value:void 0}function q(v){console.warn([`Missing '${v.key}' of ${v.target} in ${v.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function dt(v){return v&&v.parentElement&&v.parentElement.removeChild(v),null}class ht{constructor(c){this.value_=c}static create(c){return[new ht(c),(p,E)=>{c.setRawValue(p,E)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const J=b("");function Q(v,c){return I(v,J(void 0,c))}class gt extends A{constructor(c){var p;super(c),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=ht.create(T(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(p=this.get("parent"))===null||p===void 0||p.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(c){var p,E,L;const G=c??{};return new gt(A.createCore({disabled:(p=G.disabled)!==null&&p!==void 0?p:!1,disposed:!1,hidden:(E=G.hidden)!==null&&E!==void 0?E:!1,parent:(L=G.parent)!==null&&L!==void 0?L:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(c){S(this.globalDisabled_,Q(c,"disabled")),w(this,"hidden",Q(c,"hidden"))}bindDisabled(c){S(this.globalDisabled_,p=>{c.disabled=p})}bindTabIndex(c){S(this.globalDisabled_,p=>{c.tabIndex=p?-1:0})}handleDispose(c){this.value("disposed").emitter.on("change",p=>{p&&c()})}getGlobalDisabled_(){const c=this.get("parent");return(c?c.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(c){var p;const E=c.previousRawValue;E==null||E.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(p=this.get("parent"))===null||p===void 0||p.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function ut(){return["veryfirst","first","last","verylast"]}const ft=b(""),Rt={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Gt{constructor(c){this.parent_=null,this.blade=c.blade,this.view=c.view,this.viewProps=c.viewProps;const p=this.view.element;this.blade.value("positions").emitter.on("change",()=>{ut().forEach(E=>{p.classList.remove(ft(void 0,Rt[E]))}),this.blade.get("positions").forEach(E=>{p.classList.add(ft(void 0,Rt[E]))})}),this.viewProps.handleDispose(()=>{dt(p)})}get parent(){return this.parent_}set parent(c){if(this.parent_=c,!("parent"in this.viewProps.valMap_)){q({key:"parent",target:gt.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const Tt="http://www.w3.org/2000/svg";function re(v){v.offsetHeight}function ze(v,c){const p=v.style.transition;v.style.transition="none",c(),v.style.transition=p}function Vt(v){return v.ontouchstart!==void 0}function K(v){for(;v.childNodes.length>0;)v.removeChild(v.childNodes[0])}function De(v){return v.relatedTarget?v.relatedTarget:"explicitOriginalTarget"in v?v.explicitOriginalTarget:null}const Nt=b("lbl");function Ht(v,c){const p=v.createDocumentFragment();return c.split(`
`).map(L=>v.createTextNode(L)).forEach((L,G)=>{G>0&&p.appendChild(v.createElement("br")),p.appendChild(L)}),p}class Ut{constructor(c,p){this.element=c.createElement("div"),this.element.classList.add(Nt()),p.viewProps.bindClassModifiers(this.element);const E=c.createElement("div");E.classList.add(Nt("l")),w(p.props,"label",G=>{u(G)?this.element.classList.add(Nt(void 0,"nol")):(this.element.classList.remove(Nt(void 0,"nol")),K(E),E.appendChild(Ht(c,G)))}),this.element.appendChild(E),this.labelElement=E;const L=c.createElement("div");L.classList.add(Nt("v")),this.element.appendChild(L),this.valueElement=L}}class le extends Gt{constructor(c,p){const E=p.valueController.viewProps;super(Object.assign(Object.assign({},p),{view:new Ut(c,{props:p.props,viewProps:E}),viewProps:E})),this.props=p.props,this.valueController=p.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class ee extends Gt{constructor(c){super(c),this.value=c.value}}class jt extends A{constructor(c){super(c)}static create(c){const p={completed:!0,expanded:c,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},E=A.createCore(p);return new jt(E)}get styleExpanded(){var c;return(c=this.get("temporaryExpanded"))!==null&&c!==void 0?c:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const c=this.get("expandedHeight");return this.get("shouldFixHeight")&&!u(c)?`${c}px`:"auto"}bindExpandedClass(c,p){const E=()=>{this.styleExpanded?c.classList.add(p):c.classList.remove(p)};w(this,"expanded",E),w(this,"temporaryExpanded",E)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function ue(v){return jt.create(v)}function Ue(v,c){let p=0;return ze(c,()=>{v.set("expandedHeight",null),v.set("temporaryExpanded",!0),re(c),p=c.clientHeight,v.set("temporaryExpanded",null),re(c)}),p}function Ie(v,c){c.style.height=v.styleHeight}function N(v,c){v.value("expanded").emitter.on("beforechange",()=>{v.set("completed",!1),u(v.get("expandedHeight"))&&v.set("expandedHeight",Ue(v,c)),v.set("shouldFixHeight",!0),re(c)}),v.emitter.on("change",()=>{Ie(v,c)}),Ie(v,c),c.addEventListener("transitionend",p=>{p.propertyName==="height"&&v.cleanUpTransition()})}class P{constructor(c,p){const E=b(p.viewName);this.element=c.createElement("div"),this.element.classList.add(E()),p.viewProps.bindClassModifiers(this.element)}}class st extends ee{constructor(c,p){const E=p.valueController.viewProps;super(Object.assign(Object.assign({},p),{value:p.valueController.value,view:new Ut(c,{props:p.props,viewProps:E}),viewProps:E})),this.props=p.props,this.valueController=p.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class mt{constructor(){this.disabled=!1,this.emitter=new _}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class _t{constructor(c,p){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=c,this.emitter=new _,this.interval_=p,this.setTimer_()}get disabled(){return this.disabled_}set disabled(c){this.disabled_=c,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const c=this.doc_.defaultView;c&&c.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const c=this.doc_.defaultView;c&&(this.timerId_=c.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Et{constructor(c){this.constraints=c}constrain(c){return this.constraints.reduce((p,E)=>E.constrain(p),c)}}function At(v,c){if(v instanceof c)return v;if(v instanceof Et){const p=v.constraints.reduce((E,L)=>E||(L instanceof c?L:null),null);if(p)return p}return null}class xt{constructor(c){this.values=A.fromObject({max:c.max,min:c.min})}constrain(c){const p=this.values.get("max"),E=this.values.get("min");return Math.min(Math.max(c,E),p)}}class lt{constructor(c){this.values=A.fromObject({max:c.max,min:c.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(c){const p=this.values.get("max"),E=this.values.get("min");let L=c;return u(E)||(L=Math.max(L,E)),u(p)||(L=Math.min(L,p)),L}}class Lt{constructor(c,p=0){this.step=c,this.origin=p}constrain(c){const p=this.origin%this.step,E=Math.round((c-p)/this.step);return p+E*this.step}}const Dt=b("pop");class Ot{constructor(c,p){this.element=c.createElement("div"),this.element.classList.add(Dt()),p.viewProps.bindClassModifiers(this.element),S(p.shows,I(this.element,Dt(void 0,"v")))}}class St{constructor(c,p){this.shows=T(!1),this.viewProps=p.viewProps,this.view=new Ot(c,{shows:this.shows,viewProps:this.viewProps})}}const Ct=b("txt");class Kt{constructor(c,p){this.onChange_=this.onChange_.bind(this),this.element=c.createElement("div"),this.element.classList.add(Ct()),p.viewProps.bindClassModifiers(this.element),this.props_=p.props,this.props_.emitter.on("change",this.onChange_);const E=c.createElement("input");E.classList.add(Ct("i")),E.type="text",p.viewProps.bindDisabled(E),this.element.appendChild(E),this.inputElement=E,p.value.emitter.on("change",this.onChange_),this.value_=p.value,this.refresh()}refresh(){const c=this.props_.get("formatter");this.inputElement.value=c(this.value_.rawValue)}onChange_(){this.refresh()}}class fe{constructor(c,p){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=p.parser,this.props=p.props,this.value=p.value,this.viewProps=p.viewProps,this.view=new Kt(c,{props:p.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(c){const E=c.currentTarget.value,L=this.parser_(E);u(L)||(this.value.rawValue=L),this.view.refresh()}}function V(v){return v==="false"?!1:!!v}class wt{constructor(c){this.text=c}evaluate(){return Number(this.text)}toString(){return this.text}}const tt={"**":(v,c)=>Math.pow(v,c),"*":(v,c)=>v*c,"/":(v,c)=>v/c,"%":(v,c)=>v%c,"+":(v,c)=>v+c,"-":(v,c)=>v-c,"<<":(v,c)=>v<<c,">>":(v,c)=>v>>c,">>>":(v,c)=>v>>>c,"&":(v,c)=>v&c,"^":(v,c)=>v^c,"|":(v,c)=>v|c};class bt{constructor(c,p,E){this.left=p,this.operator=c,this.right=E}evaluate(){const c=tt[this.operator];if(!c)throw new Error(`unexpected binary operator: '${this.operator}`);return c(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Mt={"+":v=>v,"-":v=>-v,"~":v=>~v};class ae{constructor(c,p){this.operator=c,this.expression=p}evaluate(){const c=Mt[this.operator];if(!c)throw new Error(`unexpected unary operator: '${this.operator}`);return c(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function _e(v){return(c,p)=>{for(let E=0;E<v.length;E++){const L=v[E](c,p);if(L!=="")return L}return""}}function be(v,c){var p;const E=v.substr(c).match(/^\s+/);return(p=E&&E[0])!==null&&p!==void 0?p:""}function qe(v,c){const p=v.substr(c,1);return p.match(/^[1-9]$/)?p:""}function ne(v,c){var p;const E=v.substr(c).match(/^[0-9]+/);return(p=E&&E[0])!==null&&p!==void 0?p:""}function je(v,c){const p=ne(v,c);if(p!=="")return p;const E=v.substr(c,1);if(c+=1,E!=="-"&&E!=="+")return"";const L=ne(v,c);return L===""?"":E+L}function xe(v,c){const p=v.substr(c,1);if(c+=1,p.toLowerCase()!=="e")return"";const E=je(v,c);return E===""?"":p+E}function Bi(v,c){const p=v.substr(c,1);if(p==="0")return p;const E=qe(v,c);return c+=E.length,E===""?"":E+ne(v,c)}function Wn(v,c){const p=Bi(v,c);if(c+=p.length,p==="")return"";const E=v.substr(c,1);if(c+=E.length,E!==".")return"";const L=ne(v,c);return c+=L.length,p+E+L+xe(v,c)}function _s(v,c){const p=v.substr(c,1);if(c+=p.length,p!==".")return"";const E=ne(v,c);return c+=E.length,E===""?"":p+E+xe(v,c)}function Rn(v,c){const p=Bi(v,c);return c+=p.length,p===""?"":p+xe(v,c)}const bi=_e([Wn,_s,Rn]);function Xn(v,c){var p;const E=v.substr(c).match(/^[01]+/);return(p=E&&E[0])!==null&&p!==void 0?p:""}function vs(v,c){const p=v.substr(c,2);if(c+=p.length,p.toLowerCase()!=="0b")return"";const E=Xn(v,c);return E===""?"":p+E}function rr(v,c){var p;const E=v.substr(c).match(/^[0-7]+/);return(p=E&&E[0])!==null&&p!==void 0?p:""}function ar(v,c){const p=v.substr(c,2);if(c+=p.length,p.toLowerCase()!=="0o")return"";const E=rr(v,c);return E===""?"":p+E}function or(v,c){var p;const E=v.substr(c).match(/^[0-9a-f]+/i);return(p=E&&E[0])!==null&&p!==void 0?p:""}function U(v,c){const p=v.substr(c,2);if(c+=p.length,p.toLowerCase()!=="0x")return"";const E=or(v,c);return E===""?"":p+E}const Y=_e([vs,ar,U]),at=_e([Y,bi]);function X(v,c){const p=at(v,c);return c+=p.length,p===""?null:{evaluable:new wt(p),cursor:c}}function ot(v,c){const p=v.substr(c,1);if(c+=p.length,p!=="(")return null;const E=Wt(v,c);if(!E)return null;c=E.cursor,c+=be(v,c).length;const L=v.substr(c,1);return c+=L.length,L!==")"?null:{evaluable:E.evaluable,cursor:c}}function Pt(v,c){var p;return(p=X(v,c))!==null&&p!==void 0?p:ot(v,c)}function It(v,c){const p=Pt(v,c);if(p)return p;const E=v.substr(c,1);if(c+=E.length,E!=="+"&&E!=="-"&&E!=="~")return null;const L=It(v,c);return L?(c=L.cursor,{cursor:c,evaluable:new ae(E,L.evaluable)}):null}function Bt(v,c,p){p+=be(c,p).length;const E=v.filter(L=>c.startsWith(L,p))[0];return E?(p+=E.length,p+=be(c,p).length,{cursor:p,operator:E}):null}function zt(v,c){return(p,E)=>{const L=v(p,E);if(!L)return null;E=L.cursor;let G=L.evaluable;for(;;){const it=Bt(c,p,E);if(!it)break;E=it.cursor;const vt=v(p,E);if(!vt)return null;E=vt.cursor,G=new bt(it.operator,G,vt.evaluable)}return G?{cursor:E,evaluable:G}:null}}const $t=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((v,c)=>zt(v,c),It);function Wt(v,c){return c+=be(v,c).length,$t(v,c)}function Yt(v){const c=Wt(v,0);return!c||c.cursor+be(v,c.cursor).length!==v.length?null:c.evaluable}function me(v){var c;const p=Yt(v);return(c=p==null?void 0:p.evaluate())!==null&&c!==void 0?c:null}function Me(v){if(typeof v=="number")return v;if(typeof v=="string"){const c=me(v);if(!u(c))return c}return 0}function ce(v){return c=>c.toFixed(Math.max(Math.min(v,20),0))}const un=ce(0);function we(v){return un(v)+"%"}function ie(v){return String(v)}function Qn(v,c){for(;v.length<c;)v.push(void 0)}function Pe(v){const c=[];return Qn(c,v),T(c)}function xn(v){const c=v.indexOf(void 0);return c<0?v:v.slice(0,c)}function gs(v,c){const p=[...xn(v),c];return p.length>v.length?p.splice(0,p.length-v.length):Qn(p,v.length),p}function en({primary:v,secondary:c,forward:p,backward:E}){let L=!1;function G(it){L||(L=!0,it(),L=!1)}v.emitter.on("change",it=>{G(()=>{c.setRawValue(p(v,c),it.options)})}),c.emitter.on("change",it=>{G(()=>{v.setRawValue(E(v,c),it.options)}),G(()=>{c.setRawValue(p(v,c),it.options)})}),G(()=>{c.setRawValue(p(v,c),{forceEmit:!1,last:!0})})}function wn(v,c){const p=v*(c.altKey?.1:1)*(c.shiftKey?10:1);return c.upKey?+p:c.downKey?-p:0}function Ae(v){return{altKey:v.altKey,downKey:v.key==="ArrowDown",shiftKey:v.shiftKey,upKey:v.key==="ArrowUp"}}function dn(v){return{altKey:v.altKey,downKey:v.key==="ArrowLeft",shiftKey:v.shiftKey,upKey:v.key==="ArrowRight"}}function Gi(v){return v==="ArrowUp"||v==="ArrowDown"}function Be(v){return Gi(v)||v==="ArrowLeft"||v==="ArrowRight"}function ti(v,c){var p,E;const L=c.ownerDocument.defaultView,G=c.getBoundingClientRect();return{x:v.pageX-(((p=L&&L.scrollX)!==null&&p!==void 0?p:0)+G.left),y:v.pageY-(((E=L&&L.scrollY)!==null&&E!==void 0?E:0)+G.top)}}class xi{constructor(c){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=c,this.emitter=new _,c.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),c.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),c.addEventListener("touchend",this.onTouchEnd_),c.addEventListener("mousedown",this.onMouseDown_)}computePosition_(c){const p=this.elem_.getBoundingClientRect();return{bounds:{width:p.width,height:p.height},point:c?{x:c.x,y:c.y}:null}}onMouseDown_(c){var p;c.preventDefault(),(p=c.currentTarget)===null||p===void 0||p.focus();const E=this.elem_.ownerDocument;E.addEventListener("mousemove",this.onDocumentMouseMove_),E.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:c.altKey,data:this.computePosition_(ti(c,this.elem_)),sender:this,shiftKey:c.shiftKey})}onDocumentMouseMove_(c){this.emitter.emit("move",{altKey:c.altKey,data:this.computePosition_(ti(c,this.elem_)),sender:this,shiftKey:c.shiftKey})}onDocumentMouseUp_(c){const p=this.elem_.ownerDocument;p.removeEventListener("mousemove",this.onDocumentMouseMove_),p.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:c.altKey,data:this.computePosition_(ti(c,this.elem_)),sender:this,shiftKey:c.shiftKey})}onTouchStart_(c){c.preventDefault();const p=c.targetTouches.item(0),E=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:c.altKey,data:this.computePosition_(p?{x:p.clientX-E.left,y:p.clientY-E.top}:void 0),sender:this,shiftKey:c.shiftKey}),this.lastTouch_=p}onTouchMove_(c){const p=c.targetTouches.item(0),E=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:c.altKey,data:this.computePosition_(p?{x:p.clientX-E.left,y:p.clientY-E.top}:void 0),sender:this,shiftKey:c.shiftKey}),this.lastTouch_=p}onTouchEnd_(c){var p;const E=(p=c.targetTouches.item(0))!==null&&p!==void 0?p:this.lastTouch_,L=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:c.altKey,data:this.computePosition_(E?{x:E.clientX-L.left,y:E.clientY-L.top}:void 0),sender:this,shiftKey:c.shiftKey})}}function Se(v,c,p,E,L){const G=(v-c)/(p-c);return E+G*(L-E)}function Zr(v){return String(v.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function wi(v,c,p){return Math.min(Math.max(v,c),p)}const nn=b("txt");class Za{constructor(c,p){this.onChange_=this.onChange_.bind(this),this.props_=p.props,this.props_.emitter.on("change",this.onChange_),this.element=c.createElement("div"),this.element.classList.add(nn(),nn(void 0,"num")),p.arrayPosition&&this.element.classList.add(nn(void 0,p.arrayPosition)),p.viewProps.bindClassModifiers(this.element);const E=c.createElement("input");E.classList.add(nn("i")),E.type="text",p.viewProps.bindDisabled(E),this.element.appendChild(E),this.inputElement=E,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=p.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(nn()),this.inputElement.classList.add(nn("i"));const L=c.createElement("div");L.classList.add(nn("k")),this.element.appendChild(L),this.knobElement=L;const G=c.createElementNS(Tt,"svg");G.classList.add(nn("g")),this.knobElement.appendChild(G);const it=c.createElementNS(Tt,"path");it.classList.add(nn("gb")),G.appendChild(it),this.guideBodyElem_=it;const vt=c.createElementNS(Tt,"path");vt.classList.add(nn("gh")),G.appendChild(vt),this.guideHeadElem_=vt;const oe=c.createElement("div");oe.classList.add(b("tt")()),this.knobElement.appendChild(oe),this.tooltipElem_=oe,p.value.emitter.on("change",this.onChange_),this.value=p.value,this.refresh()}onDraggingChange_(c){if(c.rawValue===null){this.element.classList.remove(nn(void 0,"drg"));return}this.element.classList.add(nn(void 0,"drg"));const p=c.rawValue/this.props_.get("draggingScale"),E=p+(p>0?-1:p<0?1:0),L=wi(-E,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${E+L},0 L${E},4 L${E+L},8`,`M ${p},-1 L${p},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${p},4`);const G=this.props_.get("formatter");this.tooltipElem_.textContent=G(this.value.rawValue),this.tooltipElem_.style.left=`${p}px`}refresh(){const c=this.props_.get("formatter");this.inputElement.value=c(this.value.rawValue)}onChange_(){this.refresh()}}class Hi{constructor(c,p){var E;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=p.baseStep,this.parser_=p.parser,this.props=p.props,this.sliderProps_=(E=p.sliderProps)!==null&&E!==void 0?E:null,this.value=p.value,this.viewProps=p.viewProps,this.dragging_=T(null),this.view=new Za(c,{arrayPosition:p.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const L=new xi(this.view.knobElement);L.emitter.on("down",this.onPointerDown_),L.emitter.on("move",this.onPointerMove_),L.emitter.on("up",this.onPointerUp_)}constrainValue_(c){var p,E;const L=(p=this.sliderProps_)===null||p===void 0?void 0:p.get("minValue"),G=(E=this.sliderProps_)===null||E===void 0?void 0:E.get("maxValue");let it=c;return L!==void 0&&(it=Math.max(it,L)),G!==void 0&&(it=Math.min(it,G)),it}onInputChange_(c){const E=c.currentTarget.value,L=this.parser_(E);u(L)||(this.value.rawValue=this.constrainValue_(L)),this.view.refresh()}onInputKeyDown_(c){const p=wn(this.baseStep_,Ae(c));p!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+p),{forceEmit:!1,last:!1})}onInputKeyUp_(c){wn(this.baseStep_,Ae(c))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(c){if(!c.point)return null;const p=c.point.x-c.bounds.width/2;return this.constrainValue_(this.originRawValue_+p*this.props.get("draggingScale"))}onPointerMove_(c){const p=this.computeDraggingValue_(c.data);p!==null&&(this.value.setRawValue(p,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(c){const p=this.computeDraggingValue_(c.data);p!==null&&(this.value.setRawValue(p,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}function pn(v,c){v.write(c)}function Ei(v){const c=v?At(v,Lt):null;return c?c.step:null}function Wi(v,c){const p=v&&At(v,Lt);return p?Zr(p.step):Math.max(Zr(c),2)}function lr(v){const c=Ei(v);return c??1}function bs(v,c){var p;const E=v&&At(v,Lt),L=Math.abs((p=E==null?void 0:E.step)!==null&&p!==void 0?p:c);return L===0?.1:Math.pow(10,Math.floor(Math.log10(L))-1)}function yi(v){return[v[0],v[1],v[2]]}function Jr(v){const c=wi(Math.floor(v),0,255).toString(16);return c.length===1?`0${c}`:c}function Xi(v,c="#"){const p=yi(v.getComponents("rgb")).map(Jr).join("");return`${c}${p}`}function Qr(v,c="#"){const p=v.getComponents("rgb"),E=[p[0],p[1],p[2],p[3]*255].map(Jr).join("");return`${c}${E}`}function Ja(v,c){const p=ce(c==="float"?2:0);return`rgb(${yi(v.getComponents("rgb",c)).map(L=>p(L)).join(", ")})`}function ta(v){return c=>Ja(c,v)}function ea(v,c){const p=ce(2),E=ce(c==="float"?2:0);return`rgba(${v.getComponents("rgb",c).map((G,it)=>(it===3?p:E)(G)).join(", ")})`}function Qa(v){return c=>ea(c,v)}function xs(v){const c=[ce(0),we,we];return`hsl(${yi(v.getComponents("hsl")).map((E,L)=>c[L](E)).join(", ")})`}function to(v){const c=[ce(0),we,we,ce(2)];return`hsla(${v.getComponents("hsl").map((E,L)=>c[L](E)).join(", ")})`}function na(v,c){const p=ce(c==="float"?2:0),E=["r","g","b"];return`{${yi(v.getComponents("rgb",c)).map((G,it)=>`${E[it]}: ${p(G)}`).join(", ")}}`}function ia(v){return c=>na(c,v)}function eo(v,c){const p=ce(2),E=ce(c==="float"?2:0),L=["r","g","b","a"];return`{${v.getComponents("rgb",c).map((it,vt)=>{const oe=vt===3?p:E;return`${L[vt]}: ${oe(it)}`}).join(", ")}}`}function no(v){return c=>eo(c,v)}[...["int","float"].reduce((v,c)=>[...v,{format:{alpha:!1,mode:"rgb",notation:"func",type:c},stringifier:ta(c)},{format:{alpha:!0,mode:"rgb",notation:"func",type:c},stringifier:Qa(c)},{format:{alpha:!1,mode:"rgb",notation:"object",type:c},stringifier:ia(c)},{format:{alpha:!0,mode:"rgb",notation:"object",type:c},stringifier:no(c)}],[])];class io{constructor(c){this.components=c.components,this.asm_=c.assembly}constrain(c){const p=this.asm_.toComponents(c).map((E,L)=>{var G,it;return(it=(G=this.components[L])===null||G===void 0?void 0:G.constrain(E))!==null&&it!==void 0?it:E});return this.asm_.fromComponents(p)}}const sa=b("pndtxt");class so{constructor(c,p){this.textViews=p.textViews,this.element=c.createElement("div"),this.element.classList.add(sa()),this.textViews.forEach(E=>{const L=c.createElement("div");L.classList.add(sa("a")),L.appendChild(E.element),this.element.appendChild(L)})}}function cr(v,c,p){return new Hi(v,{arrayPosition:p===0?"fst":p===c.axes.length-1?"lst":"mid",baseStep:c.axes[p].baseStep,parser:c.parser,props:c.axes[p].textProps,value:T(0,{constraint:c.axes[p].constraint}),viewProps:c.viewProps})}class ei{constructor(c,p){this.value=p.value,this.viewProps=p.viewProps,this.acs_=p.axes.map((E,L)=>cr(c,p,L)),this.acs_.forEach((E,L)=>{en({primary:this.value,secondary:E.value,forward:G=>p.assembly.toComponents(G.rawValue)[L],backward:(G,it)=>{const vt=p.assembly.toComponents(G.rawValue);return vt[L]=it.rawValue,p.assembly.fromComponents(vt)}})}),this.view=new so(c,{textViews:this.acs_.map(E=>E.view)})}}function ro(v,c){return"step"in v&&!u(v.step)?new Lt(v.step,c):null}function qi(v){return!u(v.max)&&!u(v.min)?new xt({max:v.max,min:v.min}):!u(v.max)||!u(v.min)?new lt({max:v.max,min:v.min}):null}const ao={monitor:{defaultInterval:200,defaultLineCount:3}},En=b("grl");class ra{constructor(c,p){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=c.createElement("div"),this.element.classList.add(En()),p.viewProps.bindClassModifiers(this.element),this.formatter_=p.formatter,this.props_=p.props,this.cursor_=p.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const E=c.createElementNS(Tt,"svg");E.classList.add(En("g")),E.style.height=`calc(var(--bld-us) * ${p.lineCount})`,this.element.appendChild(E),this.svgElem_=E;const L=c.createElementNS(Tt,"polyline");this.svgElem_.appendChild(L),this.lineElem_=L;const G=c.createElement("div");G.classList.add(En("t"),b("tt")()),this.element.appendChild(G),this.tooltipElem_=G,p.value.emitter.on("change",this.onValueUpdate_),this.value=p.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const c=this.svgElem_.getBoundingClientRect(),p=this.value.rawValue.length-1,E=this.props_.get("minValue"),L=this.props_.get("maxValue"),G=[];this.value.rawValue.forEach((an,Jt)=>{if(an===void 0)return;const Kn=Se(Jt,0,p,0,c.width),wo=Se(an,E,L,c.height,0);G.push([Kn,wo].join(","))}),this.lineElem_.setAttributeNS(null,"points",G.join(" "));const it=this.tooltipElem_,vt=this.value.rawValue[this.cursor_.rawValue];if(vt===void 0){it.classList.remove(En("t","a"));return}const oe=Se(this.cursor_.rawValue,0,p,0,c.width),rn=Se(vt,E,L,c.height,0);it.style.left=`${oe}px`,it.style.top=`${rn}px`,it.textContent=`${this.formatter_(vt)}`,it.classList.contains(En("t","a"))||(it.classList.add(En("t","a"),En("t","in")),re(it),it.classList.remove(En("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class oo{constructor(c,p){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=p.props,this.value=p.value,this.viewProps=p.viewProps,this.cursor_=T(-1),this.view=new ra(c,{cursor:this.cursor_,formatter:p.formatter,lineCount:p.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!Vt(c))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const E=new xi(this.view.element);E.emitter.on("down",this.onGraphPointerDown_),E.emitter.on("move",this.onGraphPointerMove_),E.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(c){const p=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Se(c.offsetX,0,p.width,0,this.value.rawValue.length))}onGraphPointerDown_(c){this.onGraphPointerMove_(c)}onGraphPointerMove_(c){if(!c.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Se(c.data.point.x,0,c.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}class aa{constructor(c){this.controller_=c}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(c){this.controller_.viewProps.set("disabled",c)}get title(){var c;return(c=this.controller_.props.get("title"))!==null&&c!==void 0?c:""}set title(c){this.controller_.props.set("title",c)}on(c,p){const E=p.bind(this);return this.controller_.emitter.on(c,()=>{E(new r(this))}),this}}class lo extends r{constructor(c,p,E){super(c),this.cell=p,this.index=E}}class oa extends i{constructor(c){super(c),this.cellToApiMap_=new Map,this.emitter_=new _;const p=this.controller_.valueController;p.cellControllers.forEach((E,L)=>{const G=new aa(E);this.cellToApiMap_.set(E,G),E.emitter.on("click",()=>{const it=L%p.size[0],vt=Math.floor(L/p.size[0]);this.emitter_.emit("click",{event:new lo(this,G,[it,vt])})})})}cell(c,p){const E=this.controller_.valueController,L=E.cellControllers[p*E.size[0]+c];return this.cellToApiMap_.get(L)}on(c,p){const E=p.bind(this);return this.emitter_.on(c,L=>{E(L.event)}),this}}class hr{constructor(c,p){this.size=p.size;const[E,L]=this.size,G=[];for(let it=0;it<L;it++)for(let vt=0;vt<E;vt++){const oe=new k(c,{props:A.fromObject(Object.assign({},p.cellConfig(vt,it))),viewProps:gt.create()});G.push(oe)}this.cellCs_=G,this.viewProps=gt.create(),this.viewProps.handleDispose(()=>{this.cellCs_.forEach(it=>{it.viewProps.set("disposed",!0)})}),this.view=new P(c,{viewProps:this.viewProps,viewName:"btngrid"}),this.view.element.style.gridTemplateColumns=`repeat(${E}, 1fr)`,this.cellCs_.forEach(it=>{this.view.element.appendChild(it.view.element)})}get cellControllers(){return this.cellCs_}}const co={id:"buttongrid",type:"blade",css:'.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',accept(v){const c=ct,p=Z(v,{cells:c.required.function,size:c.required.array(c.required.number),view:c.required.constant("buttongrid"),label:c.optional.string});return p?{params:p}:null},controller(v){return new le(v.document,{blade:v.blade,props:A.fromObject({label:v.params.label}),valueController:new hr(v.document,{cellConfig:v.params.cells,size:v.params.size})})},api(v){return!(v.controller instanceof le)||!(v.controller.valueController instanceof hr)?null:new oa(v.controller)}};class la extends i{get label(){return this.controller_.props.get("label")}set label(c){this.controller_.props.set("label",c)}get value(){return this.controller_.valueController.value.rawValue}set value(c){this.controller_.valueController.value.rawValue=c}on(c,p){const E=p.bind(this);return this.controller_.valueController.value.emitter.on(c,L=>{E(new l(this,L.rawValue,void 0,L.options.last))}),this}}function sn(v,c,p){return v*(1-p)+c*p}const ho=20,uo=.001,ur=100;function po(v,c){let p=.25,E=.5,L=-1;for(let G=0;G<ho;G++){const[it,vt]=v.curve(E);if(E+=p*(it<c?1:-1),L=vt,p*=.5,Math.abs(c-it)<uo)break}return L}class qn{constructor(c=0,p=0,E=1,L=1){this.cache_=[],this.comps_=[c,p,E,L]}get x1(){return this.comps_[0]}get y1(){return this.comps_[1]}get x2(){return this.comps_[2]}get y2(){return this.comps_[3]}static isObject(c){return u(c)||!Array.isArray(c)?!1:typeof c[0]=="number"&&typeof c[1]=="number"&&typeof c[2]=="number"&&typeof c[3]=="number"}static equals(c,p){return c.x1===p.x1&&c.y1===p.y1&&c.x2===p.x2&&c.y2===p.y2}curve(c){const p=sn(0,this.x1,c),E=sn(0,this.y1,c),L=sn(this.x1,this.x2,c),G=sn(this.y1,this.y2,c),it=sn(this.x2,1,c),vt=sn(this.y2,1,c),oe=sn(p,L,c),rn=sn(E,G,c),an=sn(L,it,c),Jt=sn(G,vt,c);return[sn(oe,an,c),sn(rn,Jt,c)]}y(c){if(this.cache_.length===0){const p=[];for(let E=0;E<ur;E++)p.push(po(this,Se(E,0,ur-1,0,1)));this.cache_=p}return this.cache_[Math.round(Se(wi(c,0,1),0,1,0,ur-1))]}toObject(){return[this.comps_[0],this.comps_[1],this.comps_[2],this.comps_[3]]}}const dr={toComponents:v=>v.toObject(),fromComponents:v=>new qn(...v)};function fo(v){const c=ce(2);return`cubic-bezier(${v.toObject().map(E=>c(E)).join(", ")})`}const pr=[0,.5,.5,1];function mo(v){const c=v.match(/^cubic-bezier\s*\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)$/);if(!c)return new qn(...pr);const p=[c[1],c[2],c[3],c[4]].reduce((E,L)=>{if(!E)return null;const G=Number(L);return isNaN(G)?null:[...E,G]},[]);return new qn(...p??pr)}const ni=b("cbz");class ca{constructor(c,p){this.element=c.createElement("div"),this.element.classList.add(ni()),p.viewProps.bindClassModifiers(this.element),p.foldable.bindExpandedClass(this.element,ni(void 0,"expanded")),w(p.foldable,"completed",I(this.element,ni(void 0,"cpl")));const E=c.createElement("div");E.classList.add(ni("h")),this.element.appendChild(E);const L=c.createElement("button");L.classList.add(ni("b")),p.viewProps.bindDisabled(L);const G=c.createElementNS(Tt,"svg");G.innerHTML='<path d="M2 13C8 13 8 3 14 3"/>',L.appendChild(G),E.appendChild(L),this.buttonElement=L;const it=c.createElement("div");if(it.classList.add(ni("t")),E.appendChild(it),this.textElement=it,p.pickerLayout==="inline"){const vt=c.createElement("div");vt.classList.add(ni("p")),this.element.appendChild(vt),this.pickerElement=vt}else this.pickerElement=null}}const ws=b("cbzp");class ha{constructor(c,p){this.element=c.createElement("div"),this.element.classList.add(ws()),p.viewProps.bindClassModifiers(this.element);const E=c.createElement("div");E.classList.add(ws("g")),this.element.appendChild(E),this.graphElement=E;const L=c.createElement("div");L.classList.add(ws("t")),this.element.appendChild(L),this.textElement=L}}function yn(v,c){const p=new MutationObserver(L=>{for(const G of L)G.type==="childList"&&G.addedNodes.forEach(it=>{it.contains(it)&&(c(),p.disconnect())})}),E=v.ownerDocument;p.observe(E.body,{attributes:!0,childList:!0,subtree:!0})}const Ln=b("cbzg");function _o(v,c){return p=>c(v(p))}class Ne{constructor(c,p){this.element=c.createElement("div"),this.element.classList.add(Ln()),p.viewProps.bindClassModifiers(this.element),p.viewProps.bindTabIndex(this.element);const E=c.createElement("div");E.classList.add(Ln("p")),this.element.appendChild(E),this.previewElement=E;const L=c.createElementNS(Tt,"svg");L.classList.add(Ln("g")),this.element.appendChild(L),this.svgElem_=L;const G=c.createElementNS(Tt,"path");G.classList.add(Ln("u")),this.svgElem_.appendChild(G),this.guideElem_=G;const it=c.createElementNS(Tt,"polyline");it.classList.add(Ln("l")),this.svgElem_.appendChild(it),this.lineElem_=it,this.handleElems_=[c.createElement("div"),c.createElement("div")],this.handleElems_.forEach(vt=>{vt.classList.add(Ln("h")),this.element.appendChild(vt)}),this.vectorElems_=[c.createElementNS(Tt,"line"),c.createElementNS(Tt,"line")],this.vectorElems_.forEach(vt=>{vt.classList.add(Ln("v")),this.svgElem_.appendChild(vt)}),this.value_=p.value,this.value_.emitter.on("change",this.onValueChange_.bind(this)),this.sel_=p.selection,this.handleElems_.forEach((vt,oe)=>{S(this.sel_,_o(rn=>rn===oe,I(vt,Ln("h","sel"))))}),yn(this.element,()=>{this.refresh()})}getVertMargin_(c){return c*.25}valueToPosition(c,p){const E=this.element.getBoundingClientRect(),L=E.width,G=E.height,it=this.getVertMargin_(G);return{x:Se(c,0,1,0,L),y:Se(p,0,1,G-it,it)}}positionToValue(c,p){const E=this.element.getBoundingClientRect(),L=E.width,G=E.height,it=this.getVertMargin_(G);return{x:wi(Se(c,0,L,0,1),0,1),y:Se(p,G-it,it,0,1)}}refresh(){this.guideElem_.setAttributeNS(null,"d",[0,1].map(G=>{const it=this.valueToPosition(0,G),vt=this.valueToPosition(1,G);return[`M ${it.x},${it.y}`,`L ${vt.x},${vt.y}`].join(" ")}).join(" "));const c=this.value_.rawValue,p=[];let E=0;for(;;){const G=this.valueToPosition(...c.curve(E));if(p.push([G.x,G.y].join(",")),E>=1)break;E=Math.min(E+.05,1)}this.lineElem_.setAttributeNS(null,"points",p.join(" "));const L=c.toObject();[0,1].forEach(G=>{const it=this.valueToPosition(G,G),vt=this.valueToPosition(L[G*2],L[G*2+1]),oe=this.vectorElems_[G];oe.setAttributeNS(null,"x1",String(it.x)),oe.setAttributeNS(null,"y1",String(it.y)),oe.setAttributeNS(null,"x2",String(vt.x)),oe.setAttributeNS(null,"y2",String(vt.y));const rn=this.handleElems_[G];rn.style.left=`${vt.x}px`,rn.style.top=`${vt.y}px`})}onValueChange_(){this.refresh()}}const ua=24,ji=400,fr=1e3,jn=b("cbzprv");class Mi{constructor(c,p){this.stopped_=!0,this.startTime_=-1,this.onDispose_=this.onDispose_.bind(this),this.onTimer_=this.onTimer_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.element=c.createElement("div"),this.element.classList.add(jn()),p.viewProps.bindClassModifiers(this.element);const E=c.createElementNS(Tt,"svg");E.classList.add(jn("g")),this.element.appendChild(E),this.svgElem_=E;const L=c.createElementNS(Tt,"path");L.classList.add(jn("t")),this.svgElem_.appendChild(L),this.ticksElem_=L;const G=c.createElement("div");G.classList.add(jn("m")),this.element.appendChild(G),this.markerElem_=G,this.value_=p.value,this.value_.emitter.on("change",this.onValueChange_),p.viewProps.handleDispose(this.onDispose_),yn(this.element,()=>{this.refresh()})}play(){this.stop(),this.updateMarker_(0),this.markerElem_.classList.add(jn("m","a")),this.startTime_=new Date().getTime()+ji,this.stopped_=!1,requestAnimationFrame(this.onTimer_)}stop(){this.stopped_=!0,this.markerElem_.classList.remove(jn("m","a"))}onDispose_(){this.stop()}updateMarker_(c){const p=this.value_.rawValue.y(wi(c,0,1));this.markerElem_.style.left=`${p*100}%`}refresh(){const c=this.svgElem_.getBoundingClientRect(),p=c.width,E=c.height,L=[],G=this.value_.rawValue;for(let it=0;it<ua;it++){const vt=Se(it,0,ua-1,0,1),oe=Se(G.y(vt),0,1,0,p);L.push(`M ${oe},0 v${E}`)}this.ticksElem_.setAttributeNS(null,"d",L.join(" "))}onTimer_(){if(this.startTime_===null)return;const c=new Date().getTime()-this.startTime_,p=c/fr;this.updateMarker_(p),c>fr+ji&&this.stop(),this.stopped_||requestAnimationFrame(this.onTimer_)}onValueChange_(){this.refresh(),this.play()}}function Ge(v,c,p,E){const L=p-v,G=E-c;return Math.sqrt(L*L+G*G)}function Ki(v,c,p,E){const L=Ge(v,c,p,E),G=Math.atan2(E-c,p-v),it=Math.round(G/(Math.PI/4))*Math.PI/4;return{x:v+Math.cos(it)*L,y:c+Math.sin(it)*L}}class Mn{constructor(c,p){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=p.baseStep,this.value=p.value,this.sel_=T(0),this.viewProps=p.viewProps,this.view=new Ne(c,{selection:this.sel_,value:this.value,viewProps:this.viewProps}),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_),this.prevView_=new Mi(c,{value:this.value,viewProps:this.viewProps}),this.prevView_.element.addEventListener("mousedown",L=>{L.stopImmediatePropagation(),L.preventDefault(),this.prevView_.play()}),this.view.previewElement.appendChild(this.prevView_.element);const E=new xi(this.view.element);E.emitter.on("down",this.onPointerDown_),E.emitter.on("move",this.onPointerMove_),E.emitter.on("up",this.onPointerUp_)}refresh(){this.view.refresh(),this.prevView_.refresh(),this.prevView_.play()}updateValue_(c,p,E){const L=this.sel_.rawValue,G=this.value.rawValue.toObject(),it=this.view.positionToValue(c.x,c.y),vt=p?Ki(L,L,it.x,it.y):it;G[L*2]=vt.x,G[L*2+1]=vt.y,this.value.setRawValue(new qn(...G),E)}onPointerDown_(c){const p=c.data;if(!p.point)return;const E=this.value.rawValue,L=this.view.valueToPosition(E.x1,E.y1),G=Ge(p.point.x,p.point.y,L.x,L.y),it=this.view.valueToPosition(E.x2,E.y2),vt=Ge(p.point.x,p.point.y,it.x,it.y);this.sel_.rawValue=G<=vt?0:1,this.updateValue_(p.point,c.shiftKey,{forceEmit:!1,last:!1})}onPointerMove_(c){const p=c.data;p.point&&this.updateValue_(p.point,c.shiftKey,{forceEmit:!1,last:!1})}onPointerUp_(c){const p=c.data;p.point&&this.updateValue_(p.point,c.shiftKey,{forceEmit:!0,last:!0})}onKeyDown_(c){Be(c.key)&&c.preventDefault();const p=this.sel_.rawValue,E=this.value.rawValue.toObject();E[p*2]+=wn(this.baseStep_,dn(c)),E[p*2+1]+=wn(this.baseStep_,Ae(c)),this.value.setRawValue(new qn(...E),{forceEmit:!1,last:!1})}onKeyUp_(c){Be(c.key)&&c.preventDefault();const p=wn(this.baseStep_,dn(c)),E=wn(this.baseStep_,Ae(c));p===0&&E===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class da{constructor(c,p){this.value=p.value,this.viewProps=p.viewProps,this.view=new ha(c,{viewProps:this.viewProps}),this.gc_=new Mn(c,{baseStep:p.axis.baseStep,value:this.value,viewProps:this.viewProps}),this.view.graphElement.appendChild(this.gc_.view.element);const E=Object.assign(Object.assign({},p.axis),{constraint:new lt({max:1,min:0})}),L=Object.assign(Object.assign({},p.axis),{constraint:void 0});this.tc_=new ei(c,{assembly:dr,axes:[E,L,E,L],parser:me,value:this.value,viewProps:this.viewProps}),this.view.textElement.appendChild(this.tc_.view.element)}get allFocusableElements(){return[this.gc_.view.element,...this.tc_.view.textViews.map(c=>c.inputElement)]}refresh(){this.gc_.refresh()}}class Es{constructor(c,p){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=p.value,this.viewProps=p.viewProps,this.foldable_=ue(p.expanded),this.view=new ca(c,{foldable:this.foldable_,pickerLayout:p.pickerLayout,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("blur",this.onButtonBlur_),this.view.buttonElement.addEventListener("click",this.onButtonClick_),this.tc_=new fe(c,{parser:mo,props:A.fromObject({formatter:fo}),value:this.value,viewProps:this.viewProps}),this.view.textElement.appendChild(this.tc_.view.element),this.popC_=p.pickerLayout==="popup"?new St(c,{viewProps:this.viewProps}):null;const E=new da(c,{axis:p.axis,value:this.value,viewProps:this.viewProps});E.allFocusableElements.forEach(L=>{L.addEventListener("blur",this.onPopupChildBlur_),L.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=E,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),S(this.popC_.shows,L=>{L&&E.refresh()}),en({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:L=>L.rawValue,backward:(L,G)=>G.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),N(this.foldable_,this.view.pickerElement))}onButtonBlur_(c){if(!this.popC_)return;const p=c.relatedTarget;(!p||!this.popC_.view.element.contains(p))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.allFocusableElements[0].focus()}onPopupChildBlur_(c){if(!this.popC_)return;const p=this.popC_.view.element,E=De(c);E&&p.contains(E)||E&&E===this.view.buttonElement&&!Vt(p.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(c){this.popC_&&c.key==="Escape"&&(this.popC_.shows.rawValue=!1)}}function mr(){return new io({assembly:dr,components:[0,1,2,3].map(v=>v%2===0?new lt({min:0,max:1}):void 0)})}const ii={id:"cubic-bezier",type:"blade",css:'.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',accept(v){const c=ct,p=Z(v,{value:c.required.array(c.required.number),view:c.required.constant("cubicbezier"),expanded:c.optional.boolean,label:c.optional.string,picker:c.optional.custom(E=>E==="inline"||E==="popup"?E:void 0)});return p?{params:p}:null},controller(v){var c,p;const E=new qn(...v.params.value),L=T(E,{constraint:mr(),equals:qn.equals}),G=new Es(v.document,{axis:{baseStep:.1,textProps:A.fromObject({draggingScale:.01,formatter:ce(2)})},expanded:(c=v.params.expanded)!==null&&c!==void 0?c:!1,pickerLayout:(p=v.params.picker)!==null&&p!==void 0?p:"popup",value:L,viewProps:v.viewProps});return new st(v.document,{blade:v.blade,props:A.fromObject({label:v.params.label}),valueController:G})},api(v){return!(v.controller instanceof st)||!(v.controller.valueController instanceof Es)?null:new la(v.controller)}};class Ee extends i{begin(){this.controller_.valueController.begin()}end(){this.controller_.valueController.end()}}const _r=20;class Re{constructor(){this.start_=null,this.duration_=0,this.fps_=null,this.frameCount_=0,this.timestamps_=[]}get duration(){return this.duration_}get fps(){return this.fps_}begin(c){this.start_=c.getTime()}calculateFps_(c){if(this.timestamps_.length===0)return null;const p=this.timestamps_[0];return 1e3*(this.frameCount_-p.frameCount)/(c-p.time)}compactTimestamps_(){if(this.timestamps_.length<=_r)return;const c=this.timestamps_.length-_r;this.timestamps_.splice(0,c);const p=this.timestamps_[0].frameCount;this.timestamps_.forEach(E=>{E.frameCount-=p}),this.frameCount_-=p}end(c){if(this.start_===null)return;const p=c.getTime();this.duration_=p-this.start_,this.start_=null,this.fps_=this.calculateFps_(p),this.timestamps_.push({frameCount:this.frameCount_,time:p}),++this.frameCount_,this.compactTimestamps_()}}const Si=b("fps");class $e{constructor(c,p){this.element=c.createElement("div"),this.element.classList.add(Si()),p.viewProps.bindClassModifiers(this.element),this.graphElement=c.createElement("div"),this.graphElement.classList.add(Si("g")),this.element.appendChild(this.graphElement);const E=c.createElement("div");E.classList.add(Si("l")),this.element.appendChild(E);const L=c.createElement("span");L.classList.add(Si("v")),L.textContent="--",E.appendChild(L),this.valueElement=L;const G=c.createElement("span");G.classList.add(Si("u")),G.textContent="FPS",E.appendChild(G)}}class vr{constructor(c,p){this.stopwatch_=new Re,this.onTick_=this.onTick_.bind(this),this.ticker_=p.ticker,this.ticker_.emitter.on("tick",this.onTick_),this.value_=p.value,this.viewProps=p.viewProps,this.view=new $e(c,{viewProps:this.viewProps}),this.graphC_=new oo(c,{formatter:ce(0),lineCount:p.lineCount,props:A.fromObject({maxValue:p.maxValue,minValue:p.minValue}),value:this.value_,viewProps:this.viewProps}),this.view.graphElement.appendChild(this.graphC_.view.element),this.viewProps.handleDispose(()=>{this.graphC_.viewProps.set("disposed",!0),this.ticker_.dispose()})}begin(){this.stopwatch_.begin(new Date)}end(){this.stopwatch_.end(new Date)}onTick_(){const c=this.stopwatch_.fps;if(c!==null){const p=this.value_.rawValue;this.value_.rawValue=gs(p,c),this.view.valueElement.textContent=c.toFixed(0)}}}function Yi(v,c){return c===0?new mt:new _t(v,c??ao.monitor.defaultInterval)}const gr={id:"fpsgraph",type:"blade",accept(v){const c=ct,p=Z(v,{view:c.required.constant("fpsgraph"),interval:c.optional.number,label:c.optional.string,lineCount:c.optional.number,max:c.optional.number,min:c.optional.number});return p?{params:p}:null},controller(v){var c,p,E,L;const G=(c=v.params.interval)!==null&&c!==void 0?c:500;return new le(v.document,{blade:v.blade,props:A.fromObject({label:v.params.label}),valueController:new vr(v.document,{lineCount:(p=v.params.lineCount)!==null&&p!==void 0?p:2,maxValue:(E=v.params.max)!==null&&E!==void 0?E:90,minValue:(L=v.params.min)!==null&&L!==void 0?L:0,ticker:Yi(v.document,G),value:Pe(80),viewProps:v.viewProps})})},api(v){return!(v.controller instanceof le)||!(v.controller.valueController instanceof vr)?null:new Ee(v.controller)}};class Ze{constructor(c,p){this.min=c,this.max=p}static isObject(c){if(typeof c!="object"||c===null)return!1;const p=c.min,E=c.max;return!(typeof p!="number"||typeof E!="number")}static equals(c,p){return c.min===p.min&&c.max===p.max}get length(){return this.max-this.min}toObject(){return{min:this.min,max:this.max}}}const br={fromComponents:v=>new Ze(v[0],v[1]),toComponents:v=>[v.min,v.max]};class $i{constructor(c){this.edge=c}constrain(c){var p,E,L,G,it,vt,oe,rn;if(c.min<=c.max)return new Ze((E=(p=this.edge)===null||p===void 0?void 0:p.constrain(c.min))!==null&&E!==void 0?E:c.min,(G=(L=this.edge)===null||L===void 0?void 0:L.constrain(c.max))!==null&&G!==void 0?G:c.max);const an=(c.min+c.max)/2;return new Ze((vt=(it=this.edge)===null||it===void 0?void 0:it.constrain(an))!==null&&vt!==void 0?vt:an,(rn=(oe=this.edge)===null||oe===void 0?void 0:oe.constrain(an))!==null&&rn!==void 0?rn:an)}}const xr=b("rsltxt");class ys{constructor(c,p){this.sliderView_=p.sliderView,this.textView_=p.textView,this.element=c.createElement("div"),this.element.classList.add(xr());const E=c.createElement("div");E.classList.add(xr("s")),E.appendChild(this.sliderView_.element),this.element.appendChild(E);const L=c.createElement("div");L.classList.add(xr("t")),L.appendChild(this.textView_.element),this.element.appendChild(L)}}const fn=b("rsl");class Zi{constructor(c,p){this.onSliderPropsChange_=this.onSliderPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.sliderProps_=p.sliderProps,this.sliderProps_.emitter.on("change",this.onSliderPropsChange_),this.element=c.createElement("div"),this.element.classList.add(fn()),p.viewProps.bindClassModifiers(this.element),this.value_=p.value,this.value_.emitter.on("change",this.onValueChange_);const E=c.createElement("div");E.classList.add(fn("t")),this.element.appendChild(E),this.trackElement=E;const L=c.createElement("div");L.classList.add(fn("b")),E.appendChild(L),this.barElement=L;const G=["min","max"].map(it=>{const vt=c.createElement("div");return vt.classList.add(fn("k"),fn("k",it)),E.appendChild(vt),vt});this.knobElements=[G[0],G[1]],this.update_()}valueToX_(c){const p=this.sliderProps_.get("minValue"),E=this.sliderProps_.get("maxValue");return wi(Se(c,p,E,0,1),0,1)*100}update_(){const c=this.value_.rawValue;c.length===0?this.element.classList.add(fn(void 0,"zero")):this.element.classList.remove(fn(void 0,"zero"));const p=[this.valueToX_(c.min),this.valueToX_(c.max)];this.barElement.style.left=`${p[0]}%`,this.barElement.style.right=`${100-p[1]}%`,this.knobElements.forEach((E,L)=>{E.style.left=`${p[L]}%`})}onSliderPropsChange_(){this.update_()}onValueChange_(){this.update_()}}class wr{constructor(c,p){this.grabbing_=null,this.grabOffset_=0,this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.sliderProps=p.sliderProps,this.viewProps=p.viewProps,this.value=p.value,this.view=new Zi(c,{sliderProps:this.sliderProps,value:this.value,viewProps:p.viewProps});const E=new xi(this.view.trackElement);E.emitter.on("down",this.onPointerDown_),E.emitter.on("move",this.onPointerMove_),E.emitter.on("up",this.onPointerUp_)}ofs_(){return this.grabbing_==="min"?this.view.knobElements[0].getBoundingClientRect().width/2:this.grabbing_==="max"?-this.view.knobElements[1].getBoundingClientRect().width/2:0}valueFromData_(c){if(!c.point)return null;const p=(c.point.x+this.ofs_())/c.bounds.width,E=this.sliderProps.get("minValue"),L=this.sliderProps.get("maxValue");return Se(p,0,1,E,L)}onPointerDown_(c){if(!c.data.point)return;const p=c.data.point.x/c.data.bounds.width,E=this.value.rawValue,L=this.sliderProps.get("minValue"),G=this.sliderProps.get("maxValue"),it=Se(E.min,L,G,0,1),vt=Se(E.max,L,G,0,1);Math.abs(vt-p)<=.025?this.grabbing_="max":Math.abs(it-p)<=.025?this.grabbing_="min":p>=it&&p<=vt?(this.grabbing_="length",this.grabOffset_=Se(p-it,0,1,0,G-L)):p<it?(this.grabbing_="min",this.onPointerMove_(c)):p>vt&&(this.grabbing_="max",this.onPointerMove_(c))}applyPointToValue_(c,p){const E=this.valueFromData_(c);if(E===null)return;const L=this.sliderProps.get("minValue"),G=this.sliderProps.get("maxValue");if(this.grabbing_==="min")this.value.setRawValue(new Ze(E,this.value.rawValue.max),p);else if(this.grabbing_==="max")this.value.setRawValue(new Ze(this.value.rawValue.min,E),p);else if(this.grabbing_==="length"){const it=this.value.rawValue.length;let vt=E-this.grabOffset_,oe=vt+it;vt<L?(vt=L,oe=L+it):oe>G&&(vt=G-it,oe=G),this.value.setRawValue(new Ze(vt,oe),p)}}onPointerMove_(c){this.applyPointToValue_(c.data,{forceEmit:!1,last:!1})}onPointerUp_(c){this.applyPointToValue_(c.data,{forceEmit:!0,last:!0}),this.grabbing_=null}}class Dn{constructor(c,p){this.value=p.value,this.viewProps=p.viewProps,this.sc_=new wr(c,p);const E={baseStep:p.baseStep,constraint:p.constraint,textProps:A.fromObject({draggingScale:p.draggingScale,formatter:p.formatter})};this.tc_=new ei(c,{assembly:br,axes:[E,E],parser:p.parser,value:this.value,viewProps:p.viewProps}),this.view=new ys(c,{sliderView:this.sc_.view,textView:this.tc_.view})}get textController(){return this.tc_}}function pa(v){return Ze.isObject(v)?new Ze(v.min,v.max):new Ze(0,0)}function Er(v,c){v.writeProperty("max",c.max),v.writeProperty("min",c.min)}function vo(v){const c=[],p=qi(v);p&&c.push(p);const E=ro(v);return E&&c.push(E),new $i(new Et(c))}const Ms={id:"input-interval",type:"input",css:'.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--bld-us)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--bld-s);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-cbzpv_t{margin-top:var(--bld-s)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--bld-us)*5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--bld-us));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--bld-us) - 8px);margin-top:calc((var(--bld-us) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--elm-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}',accept:(v,c)=>{if(!Ze.isObject(v))return null;const p=ct,E=Z(c,{format:p.optional.function,max:p.optional.number,min:p.optional.number,step:p.optional.number});return E?{initialValue:new Ze(v.min,v.max),params:E}:null},binding:{reader:v=>pa,constraint:v=>vo(v.params),equals:Ze.equals,writer:v=>Er},controller(v){var c;const p=v.value,E=v.constraint;if(!(E instanceof $i))throw m.shouldNeverHappen();const L=(p.rawValue.min+p.rawValue.max)/2,G=(c=v.params.format)!==null&&c!==void 0?c:ce(Wi(E.edge,L)),it=E.edge&&At(E.edge,xt);if(it)return new Dn(v.document,{baseStep:lr(E.edge),constraint:E.edge,draggingScale:bs(E.edge,L),formatter:G,parser:me,sliderProps:new A({maxValue:it.values.value("max"),minValue:it.values.value("min")}),value:p,viewProps:v.viewProps});const vt={baseStep:lr(E.edge),constraint:E.edge,textProps:A.fromObject({draggingScale:L,formatter:G})};return new ei(v.document,{assembly:br,axes:[vt,vt],parser:me,value:p,viewProps:v.viewProps})}};class si{constructor(c){this.controller_=c}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(c){this.controller_.viewProps.set("disabled",c)}get title(){var c;return(c=this.controller_.props.get("title"))!==null&&c!==void 0?c:""}set title(c){this.controller_.props.set("title",c)}}class ri extends l{constructor(c,p,E,L,G){super(c,L,G),this.cell=p,this.index=E}}class Ji extends i{constructor(c){super(c),this.cellToApiMap_=new Map,this.controller_.valueController.cellControllers.forEach(E=>{const L=new si(E);this.cellToApiMap_.set(E,L)})}get value(){return this.controller_.value}cell(c,p){const E=this.controller_.valueController,L=E.cellControllers[p*E.size[0]+c];return this.cellToApiMap_.get(L)}on(c,p){const E=p.bind(this);this.controller_.value.emitter.on(c,L=>{const G=this.controller_.valueController,it=G.findCellByValue(L.rawValue);if(!it)return;const vt=this.cellToApiMap_.get(it);if(!vt)return;const oe=G.cellControllers.indexOf(it);E(new ri(this,vt,[oe%G.size[0],Math.floor(oe/G.size[0])],L.rawValue,void 0))})}}const Qi=b("rad");class fa{constructor(c,p){this.element=c.createElement("div"),this.element.classList.add(Qi()),p.viewProps.bindClassModifiers(this.element);const E=c.createElement("label");E.classList.add(Qi("l")),this.element.appendChild(E);const L=c.createElement("input");L.classList.add(Qi("i")),L.name=p.name,L.type="radio",p.viewProps.bindDisabled(L),E.appendChild(L),this.inputElement=L;const G=c.createElement("div");G.classList.add(Qi("b")),E.appendChild(G);const it=c.createElement("div");it.classList.add(Qi("t")),G.appendChild(it),w(p.props,"title",vt=>{it.textContent=vt})}}class ma{constructor(c,p){this.props=p.props,this.viewProps=p.viewProps,this.view=new fa(c,{name:p.name,props:this.props,viewProps:this.viewProps})}}class Ss{constructor(c,p){this.cellCs_=[],this.cellValues_=[],this.onCellInputChange_=this.onCellInputChange_.bind(this),this.size=p.size;const[E,L]=this.size;for(let G=0;G<L;G++)for(let it=0;it<E;it++){const vt=new ma(c,{name:p.groupName,props:A.fromObject(Object.assign({},p.cellConfig(it,G))),viewProps:gt.create()});this.cellCs_.push(vt),this.cellValues_.push(p.cellConfig(it,G).value)}this.value=p.value,S(this.value,G=>{const it=this.findCellByValue(G);it&&(it.view.inputElement.checked=!0)}),this.viewProps=gt.create(),this.view=new P(c,{viewProps:this.viewProps,viewName:"radgrid"}),this.view.element.style.gridTemplateColumns=`repeat(${E}, 1fr)`,this.cellCs_.forEach(G=>{G.view.inputElement.addEventListener("change",this.onCellInputChange_),this.view.element.appendChild(G.view.element)})}get cellControllers(){return this.cellCs_}findCellByValue(c){const p=this.cellValues_.findIndex(E=>E===c);return p<0?null:this.cellCs_[p]}onCellInputChange_(c){const p=c.currentTarget,E=this.cellCs_.findIndex(L=>L.view.inputElement===p);E<0||(this.value.rawValue=this.cellValues_[E])}}const ai=function(){return{id:"radiogrid",type:"blade",accept(v){const c=ct,p=Z(v,{cells:c.required.function,groupName:c.required.string,size:c.required.array(c.required.number),value:c.required.raw,view:c.required.constant("radiogrid"),label:c.optional.string});return p?{params:p}:null},controller(v){return new st(v.document,{blade:v.blade,props:A.fromObject({label:v.params.label}),valueController:new Ss(v.document,{groupName:v.params.groupName,cellConfig:v.params.cells,size:v.params.size,value:T(v.params.value)})})},api(v){return!(v.controller instanceof st)||!(v.controller.valueController instanceof Ss)?null:new Ji(v.controller)}}}();function yr(v){return{id:"input-radiogrid",type:"input",accept(c,p){if(!v.isType(c))return null;const E=ct,L=Z(p,{cells:E.required.function,groupName:E.required.string,size:E.required.array(E.required.number),view:E.required.constant("radiogrid")});return L?{initialValue:c,params:L}:null},binding:v.binding,controller:c=>new Ss(c.document,{cellConfig:c.params.cells,groupName:c.params.groupName,size:c.params.size,value:c.value})}}const go=yr({isType:v=>typeof v=="number",binding:{reader:v=>Me,writer:v=>pn}}),bo=yr({isType:v=>typeof v=="string",binding:{reader:v=>ie,writer:v=>pn}}),xo=yr({isType:v=>typeof v=="boolean",binding:{reader:v=>V,writer:v=>pn}}),_a=[co,ii,gr,Ms,ai,xo,go,bo];e.ButtonCellApi=aa,e.ButtonGridApi=oa,e.ButtonGridController=hr,e.CubicBezier=qn,e.CubicBezierApi=la,e.CubicBezierAssembly=dr,e.CubicBezierController=Es,e.CubicBezierGraphController=Mn,e.CubicBezierGraphView=Ne,e.CubicBezierPickerController=da,e.CubicBezierPickerView=ha,e.CubicBezierPreviewView=Mi,e.CubicBezierView=ca,e.FpsGraphBladeApi=Ee,e.FpsGraphController=vr,e.FpsView=$e,e.Fpswatch=Re,e.Interval=Ze,e.IntervalAssembly=br,e.IntervalConstraint=$i,e.RadioCellApi=si,e.RadioController=ma,e.RadioGridApi=Ji,e.RadioGridController=Ss,e.RadioView=fa,e.RangeSliderController=wr,e.RangeSliderTextController=Dn,e.RangeSliderTextView=ys,e.RangeSliderView=Zi,e.TpRadioGridChangeEvent=ri,e.plugins=_a,Object.defineProperty(e,"__esModule",{value:!0})})})(Sl,Sl.exports);var Tu=Sl.exports;const p0=u0(Tu),f0=Tp({__proto__:null,default:p0},[Tu]),Br=class Br{constructor(){Ce(this,"pane",new d0.Pane);Ce(this,"fpsGraph");Ce(this,"volFolder");Ce(this,"dropzone",document.getElementById("dropzone"));const t=qa.getInstance();this.pane.registerPlugin(f0),this.fpsGraph=this.pane.addBlade({view:"fpsgraph",label:"FPS (while active)",lineCount:2}),this.pane.addInput(t.controls,"enableGizmos",{label:"Gizmos"}).on("change",e=>{t.controls.setGizmosVisible(e.value)}),this.volFolder=this.pane.addFolder({title:"Volume"}),document.addEventListener("dragenter",e=>{e.preventDefault(),this.dropzone.style.visibility="visible"}),document.addEventListener("dragover",e=>{e.preventDefault(),this.dropzone.style.visibility="visible"}),document.addEventListener("dragleave",e=>{e.preventDefault(),this.dropzone.style.visibility="hidden"})}static getInstance(){return Br.instance?this.instance:(this.instance=new Br,this.instance)}};Ce(Br,"instance");let Cl=Br;/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Xh=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(Xh(""))}catch{Xh=function(t){return"data:application/javascript;charset=UTF-8,"+encodeURI(t)}}var gn=Uint8Array,Oi=Uint16Array,Tl=Uint32Array,Pu=new gn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Au=new gn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),m0=new gn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ru=function(s,t){for(var e=new Oi(31),i=0;i<31;++i)e[i]=t+=1<<s[i-1];for(var r=new Tl(e[30]),i=1;i<30;++i)for(var l=e[i];l<e[i+1];++l)r[l]=l-e[i]<<5|i;return[e,r]},Lu=Ru(Pu,2),Du=Lu[0],_0=Lu[1];Du[28]=258,_0[258]=28;var v0=Ru(Au,0),g0=v0[0],Pl=new Oi(32768);for(var Te=0;Te<32768;++Te){var Ii=(Te&43690)>>>1|(Te&21845)<<1;Ii=(Ii&52428)>>>2|(Ii&13107)<<2,Ii=(Ii&61680)>>>4|(Ii&3855)<<4,Pl[Te]=((Ii&65280)>>>8|(Ii&255)<<8)>>>1}var kr=function(s,t,e){for(var i=s.length,r=0,l=new Oi(t);r<i;++r)++l[s[r]-1];var h=new Oi(t);for(r=0;r<t;++r)h[r]=h[r-1]+l[r-1]<<1;var u;if(e){u=new Oi(1<<t);var f=15-t;for(r=0;r<i;++r)if(s[r])for(var m=r<<4|s[r],_=t-s[r],g=h[s[r]-1]++<<_,b=g|(1<<_)-1;g<=b;++g)u[Pl[g]>>>f]=m}else for(u=new Oi(i),r=0;r<i;++r)s[r]&&(u[r]=Pl[h[s[r]-1]++]>>>15-s[r]);return u},$r=new gn(288);for(var Te=0;Te<144;++Te)$r[Te]=8;for(var Te=144;Te<256;++Te)$r[Te]=9;for(var Te=256;Te<280;++Te)$r[Te]=7;for(var Te=280;Te<288;++Te)$r[Te]=8;var Uu=new gn(32);for(var Te=0;Te<32;++Te)Uu[Te]=5;var b0=kr($r,9,1),x0=kr(Uu,5,1),pl=function(s){for(var t=s[0],e=1;e<s.length;++e)s[e]>t&&(t=s[e]);return t},zn=function(s,t,e){var i=t/8|0;return(s[i]|s[i+1]<<8)>>(t&7)&e},fl=function(s,t){var e=t/8|0;return(s[e]|s[e+1]<<8|s[e+2]<<16)>>(t&7)},w0=function(s){return(s/8|0)+(s&7&&1)},E0=function(s,t,e){(t==null||t<0)&&(t=0),(e==null||e>s.length)&&(e=s.length);var i=new(s instanceof Oi?Oi:s instanceof Tl?Tl:gn)(e-t);return i.set(s.subarray(t,e)),i},y0=function(s,t,e){var i=s.length;if(!i||e&&!e.l&&i<5)return t||new gn(0);var r=!t||e,l=!e||e.i;e||(e={}),t||(t=new gn(i*3));var h=function(Rt){var Gt=t.length;if(Rt>Gt){var Tt=new gn(Math.max(Gt*2,Rt));Tt.set(t),t=Tt}},u=e.f||0,f=e.p||0,m=e.b||0,_=e.l,g=e.d,b=e.m,y=e.n,C=i*8;do{if(!_){e.f=u=zn(s,f,1);var S=zn(s,f+1,3);if(f+=3,S)if(S==1)_=b0,g=x0,b=9,y=5;else if(S==2){var R=zn(s,f,31)+257,D=zn(s,f+10,15)+4,O=R+zn(s,f+5,31)+1;f+=14;for(var k=new gn(O),z=new gn(19),H=0;H<D;++H)z[m0[H]]=zn(s,f+H*3,7);f+=D*3;for(var T=pl(z),A=(1<<T)-1,nt=kr(z,T,1),H=0;H<O;){var rt=nt[zn(s,f,A)];f+=rt&15;var w=rt>>>4;if(w<16)k[H++]=w;else{var j=0,$=0;for(w==16?($=3+zn(s,f,3),f+=2,j=k[H-1]):w==17?($=3+zn(s,f,7),f+=3):w==18&&($=11+zn(s,f,127),f+=7);$--;)k[H++]=j}}var et=k.subarray(0,R),ct=k.subarray(R);b=pl(et),y=pl(ct),_=kr(et,b,1),g=kr(ct,y,1)}else throw"invalid block type";else{var w=w0(f)+4,x=s[w-4]|s[w-3]<<8,I=w+x;if(I>i){if(l)throw"unexpected EOF";break}r&&h(m+x),t.set(s.subarray(w,I),m),e.b=m+=x,e.p=f=I*8;continue}if(f>C){if(l)throw"unexpected EOF";break}}r&&h(m+131072);for(var Z=(1<<b)-1,q=(1<<y)-1,dt=f;;dt=f){var j=_[fl(s,f)&Z],ht=j>>>4;if(f+=j&15,f>C){if(l)throw"unexpected EOF";break}if(!j)throw"invalid length/literal";if(ht<256)t[m++]=ht;else if(ht==256){dt=f,_=null;break}else{var J=ht-254;if(ht>264){var H=ht-257,Q=Pu[H];J=zn(s,f,(1<<Q)-1)+Du[H],f+=Q}var gt=g[fl(s,f)&q],ut=gt>>>4;if(!gt)throw"invalid distance";f+=gt&15;var ct=g0[ut];if(ut>3){var Q=Au[ut];ct+=fl(s,f)&(1<<Q)-1,f+=Q}if(f>C){if(l)throw"unexpected EOF";break}r&&h(m+131072);for(var ft=m+J;m<ft;m+=4)t[m]=t[m-ct],t[m+1]=t[m+1-ct],t[m+2]=t[m+2-ct],t[m+3]=t[m+3-ct];m=ft}}e.l=_,e.p=dt,e.b=m,_&&(u=1,e.m=b,e.d=g,e.n=y)}while(!u);return m==t.length?t:E0(t,0,m)},M0=new gn(0),S0=function(s){if(s[0]!=31||s[1]!=139||s[2]!=8)throw"invalid gzip data";var t=s[3],e=10;t&4&&(e+=s[10]|(s[11]<<8)+2);for(var i=(t>>3&1)+(t>>4&1);i>0;i-=!s[e++]);return e+(t&2)},C0=function(s){var t=s.length;return(s[t-4]|s[t-3]<<8|s[t-2]<<16|s[t-1]<<24)>>>0};function T0(s,t){return y0(s.subarray(S0(s),-8),t||new gn(C0(s)))}var P0=typeof TextDecoder<"u"&&new TextDecoder,A0=0;try{P0.decode(M0,{stream:!0}),A0=1}catch{}class R0{constructor(t,e,i){const r=this;this.volume=t,e=e||0,Object.defineProperty(this,"index",{get:function(){return e},set:function(u){return e=u,r.geometryNeedsUpdate=!0,e}}),this.axis=i||"z",this.canvas=document.createElement("canvas"),this.canvasBuffer=document.createElement("canvas"),this.updateGeometry();const l=new tn(this.canvas);l.minFilter=ln,l.wrapS=l.wrapT=An,l.colorSpace=Qt;const h=new Nl({map:l,side:Bn,transparent:!0});this.mesh=new $n(this.geometry,h),this.mesh.matrixAutoUpdate=!1,this.geometryNeedsUpdate=!0,this.repaint()}repaint(){this.geometryNeedsUpdate&&this.updateGeometry();const t=this.iLength,e=this.jLength,i=this.sliceAccess,r=this.volume,l=this.canvasBuffer,h=this.ctxBuffer,u=h.getImageData(0,0,t,e),f=u.data,m=r.data,_=r.upperThreshold,g=r.lowerThreshold,b=r.windowLow,y=r.windowHigh;let C=0;if(r.dataType==="label")for(let S=0;S<e;S++)for(let w=0;w<t;w++){let x=m[i(w,S)];x=x>=this.colorMap.length?x%this.colorMap.length+1:x;const I=this.colorMap[x];f[4*C]=I>>24&255,f[4*C+1]=I>>16&255,f[4*C+2]=I>>8&255,f[4*C+3]=I&255,C++}else for(let S=0;S<e;S++)for(let w=0;w<t;w++){let x=m[i(w,S)],I=255;I=_>=x&&g<=x?I:0,x=Math.floor(255*(x-b)/(y-b)),x=x>255?255:x<0?0:x|0,f[4*C]=x,f[4*C+1]=x,f[4*C+2]=x,f[4*C+3]=I,C++}h.putImageData(u,0,0),this.ctx.drawImage(l,0,0,t,e,0,0,this.canvas.width,this.canvas.height),this.mesh.material.map.needsUpdate=!0}updateGeometry(){const t=this.volume.extractPerpendicularPlane(this.axis,this.index);this.sliceAccess=t.sliceAccess,this.jLength=t.jLength,this.iLength=t.iLength,this.matrix=t.matrix,this.canvas.width=t.planeWidth,this.canvas.height=t.planeHeight,this.canvasBuffer.width=this.iLength,this.canvasBuffer.height=this.jLength,this.ctx=this.canvas.getContext("2d"),this.ctxBuffer=this.canvasBuffer.getContext("2d"),this.geometry&&this.geometry.dispose(),this.geometry=new Ya(t.planeWidth,t.planeHeight),this.mesh&&(this.mesh.geometry=this.geometry,this.mesh.matrix.identity(),this.mesh.applyMatrix4(this.matrix)),this.geometryNeedsUpdate=!1}}let L0=class{constructor(t,e,i,r,l){if(t!==void 0){switch(this.xLength=Number(t)||1,this.yLength=Number(e)||1,this.zLength=Number(i)||1,this.axisOrder=["x","y","z"],r){case"Uint8":case"uint8":case"uchar":case"unsigned char":case"uint8_t":this.data=new Uint8Array(l);break;case"Int8":case"int8":case"signed char":case"int8_t":this.data=new Int8Array(l);break;case"Int16":case"int16":case"short":case"short int":case"signed short":case"signed short int":case"int16_t":this.data=new Int16Array(l);break;case"Uint16":case"uint16":case"ushort":case"unsigned short":case"unsigned short int":case"uint16_t":this.data=new Uint16Array(l);break;case"Int32":case"int32":case"int":case"signed int":case"int32_t":this.data=new Int32Array(l);break;case"Uint32":case"uint32":case"uint":case"unsigned int":case"uint32_t":this.data=new Uint32Array(l);break;case"longlong":case"long long":case"long long int":case"signed long long":case"signed long long int":case"int64":case"int64_t":case"ulonglong":case"unsigned long long":case"unsigned long long int":case"uint64":case"uint64_t":throw new Error("Error in Volume constructor : this type is not supported in JavaScript");case"Float32":case"float32":case"float":this.data=new Float32Array(l);break;case"Float64":case"float64":case"double":this.data=new Float64Array(l);break;default:this.data=new Uint8Array(l)}if(this.data.length!==this.xLength*this.yLength*this.zLength)throw new Error("Error in Volume constructor, lengths are not matching arrayBuffer size")}this.spacing=[1,1,1],this.offset=[0,0,0],this.matrix=new se,this.matrix.identity();let h=-1/0;Object.defineProperty(this,"lowerThreshold",{get:function(){return h},set:function(f){h=f,this.sliceList.forEach(function(m){m.geometryNeedsUpdate=!0})}});let u=1/0;Object.defineProperty(this,"upperThreshold",{get:function(){return u},set:function(f){u=f,this.sliceList.forEach(function(m){m.geometryNeedsUpdate=!0})}}),this.sliceList=[],this.segmentation=!1}getData(t,e,i){return this.data[i*this.xLength*this.yLength+e*this.xLength+t]}access(t,e,i){return i*this.xLength*this.yLength+e*this.xLength+t}reverseAccess(t){const e=Math.floor(t/(this.yLength*this.xLength)),i=Math.floor((t-e*this.yLength*this.xLength)/this.xLength);return[t-e*this.yLength*this.xLength-i*this.xLength,i,e]}map(t,e){const i=this.data.length;e=e||this;for(let r=0;r<i;r++)this.data[r]=t.call(e,this.data[r],r,this.data);return this}extractPerpendicularPlane(t,e){let i,r,l,h;const u=new B,f=new B,m=new B,_=new qt().identity(),g=this,b=new B(this.xLength,this.yLength,this.zLength);switch(t){case"x":u.set(1,0,0),f.set(0,0,-1),m.set(0,-1,0),i=this.spacing[this.axisOrder.indexOf("z")],r=this.spacing[this.axisOrder.indexOf("y")],h=new B(e,0,0),_.multiply(new qt().makeRotationY(Math.PI/2)),l=(g.RASDimensions[0]-1)/2,_.setPosition(new B(e-l,0,0));break;case"y":u.set(0,1,0),f.set(1,0,0),m.set(0,0,1),i=this.spacing[this.axisOrder.indexOf("x")],r=this.spacing[this.axisOrder.indexOf("z")],h=new B(0,e,0),_.multiply(new qt().makeRotationX(-Math.PI/2)),l=(g.RASDimensions[1]-1)/2,_.setPosition(new B(0,e-l,0));break;case"z":default:u.set(0,0,1),f.set(1,0,0),m.set(0,-1,0),i=this.spacing[this.axisOrder.indexOf("x")],r=this.spacing[this.axisOrder.indexOf("y")],h=new B(0,0,e),l=(g.RASDimensions[2]-1)/2,_.setPosition(new B(0,0,e-l));break}let y,C;this.segmentation||(f.applyMatrix4(g.inverseMatrix).normalize(),m.applyMatrix4(g.inverseMatrix).normalize(),u.applyMatrix4(g.inverseMatrix).normalize()),f.arglet="i",m.arglet="j",y=Math.floor(Math.abs(f.dot(b))),C=Math.floor(Math.abs(m.dot(b)));const S=Math.abs(y*i),w=Math.abs(C*r);h=Math.abs(Math.round(h.applyMatrix4(g.inverseMatrix).dot(u)));const x=[new B(1,0,0),new B(0,1,0),new B(0,0,1)],I=[f,m,u].find(function(k){return Math.abs(k.dot(x[0]))>.9}),R=[f,m,u].find(function(k){return Math.abs(k.dot(x[1]))>.9}),D=[f,m,u].find(function(k){return Math.abs(k.dot(x[2]))>.9});function O(k,z){const H=I===u?h:I.arglet==="i"?k:z,T=R===u?h:R.arglet==="i"?k:z,A=D===u?h:D.arglet==="i"?k:z,nt=I.dot(x[0])>0?H:g.xLength-1-H,rt=R.dot(x[1])>0?T:g.yLength-1-T,j=D.dot(x[2])>0?A:g.zLength-1-A;return g.access(nt,rt,j)}return{iLength:y,jLength:C,sliceAccess:O,matrix:_,planeWidth:S,planeHeight:w}}extractSlice(t,e){const i=new R0(this,e,t);return this.sliceList.push(i),i}repaintAllSlices(){return this.sliceList.forEach(function(t){t.repaint()}),this}computeMinMax(){let t=1/0,e=-1/0;const i=this.data.length;let r=0;for(r=0;r<i;r++)if(!isNaN(this.data[r])){const l=this.data[r];t=Math.min(t,l),e=Math.max(e,l)}return this.min=t,this.max=e,[t,e]}};class qh extends Yr{constructor(t){super(t)}load(t,e,i,r){const l=this,h=new Zb(l.manager);h.setPath(l.path),h.setResponseType("arraybuffer"),h.setRequestHeader(l.requestHeader),h.setWithCredentials(l.withCredentials),h.load(t,function(u){try{e(l.parse(u))}catch(f){r?r(f):console.error(f),l.manager.itemError(t)}},i,r)}setSegmentation(t){this.segmentation=t}parse(t){let e=t,i=0;const r=new Int8Array(new Int16Array([1]).buffer)[0]>0,l=!0,h={};function u(H,T){T==null&&(T=1);let A=1,nt=Uint8Array;switch(H){case"uchar":break;case"schar":nt=Int8Array;break;case"ushort":nt=Uint16Array,A=2;break;case"sshort":nt=Int16Array,A=2;break;case"uint":nt=Uint32Array,A=4;break;case"sint":nt=Int32Array,A=4;break;case"float":nt=Float32Array,A=4;break;case"complex":nt=Float64Array,A=8;break;case"double":nt=Float64Array,A=8;break}let rt=new nt(e.slice(i,i+=T*A));return r!=l&&(rt=f(rt,A)),T==1?rt[0]:rt}function f(H,T){const A=new Uint8Array(H.buffer,H.byteOffset,H.byteLength);for(let nt=0;nt<H.byteLength;nt+=T)for(let rt=nt+T-1,j=nt;rt>j;rt--,j++){const $=A[j];A[j]=A[rt],A[rt]=$}return H}function m(H){let T,A,nt,rt,j,$,et,ct;const Z=H.split(/\r?\n/);for(et=0,ct=Z.length;et<ct;et++)j=Z[et],j.match(/NRRD\d+/)?h.isNrrd=!0:!j.match(/^#/)&&($=j.match(/(.*):(.*)/))&&(A=$[1].trim(),T=$[2].trim(),nt=D0[A],nt?nt.call(h,T):h[A]=T);if(!h.isNrrd)throw new Error("Not an NRRD file");if(h.encoding==="bz2"||h.encoding==="bzip2")throw new Error("Bzip is not supported");if(!h.vectors&&(h.vectors=[],h.vectors.push([1,0,0]),h.vectors.push([0,1,0]),h.vectors.push([0,0,1]),h.spacings)){for(rt=0;rt<=2;rt++)if(!isNaN(h.spacings[rt]))for(let q=0;q<=2;q++)h.vectors[rt][q]*=h.spacings[rt]}}function _(H,T,A){let nt="";T=T||0,A=A||H.length;let rt;const j=h.sizes.reduce(function(q,dt){return q*dt},1);let $=10;h.encoding==="hex"&&($=16);const et=new h.__array(j);let ct=0,Z=parseInt;(h.__array===Float32Array||h.__array===Float64Array)&&(Z=parseFloat);for(let q=T;q<A;q++)rt=H[q],(rt<9||rt>13)&&rt!==32?nt+=String.fromCharCode(rt):(nt!==""&&(et[ct]=Z(nt,$),ct++),nt="");return nt!==""&&(et[ct]=Z(nt,$),ct++),et}const g=u("uchar",t.byteLength),b=g.length;let y=null,C=0,S;for(S=1;S<b;S++)if(g[S-1]==10&&g[S]==10){y=this.parseChars(g,0,S-2),C=S+1;break}if(m(y),e=g.subarray(C),h.encoding.substring(0,2)==="gz")e=T0(new Uint8Array(e));else if(h.encoding==="ascii"||h.encoding==="text"||h.encoding==="txt"||h.encoding==="hex")e=_(e);else if(h.encoding==="raw"){const H=new Uint8Array(e.length);for(let T=0;T<e.length;T++)H[T]=e[T];e=H}e=e.buffer;const w=new L0;w.header=h,w.segmentation=this.segmentation,w.data=new h.__array(e);const x=w.computeMinMax(),I=x[0],R=x[1];if(w.windowLow=I,w.windowHigh=R,w.dimensions=[h.sizes[0],h.sizes[1],h.sizes[2]],w.xLength=w.dimensions[0],w.yLength=w.dimensions[1],w.zLength=w.dimensions[2],h.vectors){const H=h.vectors.findIndex(rt=>rt[0]!==0),T=h.vectors.findIndex(rt=>rt[1]!==0),A=h.vectors.findIndex(rt=>rt[2]!==0),nt=[];H!==T&&H!==A&&T!==A?(nt[H]="x",nt[T]="y",nt[A]="z"):(nt[0]="x",nt[1]="y",nt[2]="z"),w.axisOrder=nt}else w.axisOrder=["x","y","z"];const D=new B().fromArray(h.vectors[0]).length(),O=new B().fromArray(h.vectors[1]).length(),k=new B().fromArray(h.vectors[2]).length();w.spacing=[D,O,k],w.matrix=new qt;const z=new qt;if(h.space==="left-posterior-superior"?z.set(-1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1):h.space==="left-anterior-superior"&&z.set(1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1),!h.vectors)w.matrix.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);else{const H=h.vectors,T=new qt().set(H[0][0],H[1][0],H[2][0],0,H[0][1],H[1][1],H[2][1],0,H[0][2],H[1][2],H[2][2],0,0,0,0,1),A=new qt().multiplyMatrices(T,z);w.matrix=A}return w.inverseMatrix=new qt,w.inverseMatrix.copy(w.matrix).invert(),w.RASDimensions=[Math.floor(w.xLength*D),Math.floor(w.yLength*O),Math.floor(w.zLength*k)],w.lowerThreshold===-1/0&&(w.lowerThreshold=I),w.upperThreshold===1/0&&(w.upperThreshold=R),w}parseChars(t,e,i){e===void 0&&(e=0),i===void 0&&(i=t.length);let r="",l=0;for(l=e;l<i;++l)r+=String.fromCharCode(t[l]);return r}}const D0={type:function(s){switch(s){case"uchar":case"unsigned char":case"uint8":case"uint8_t":this.__array=Uint8Array;break;case"signed char":case"int8":case"int8_t":this.__array=Int8Array;break;case"short":case"short int":case"signed short":case"signed short int":case"int16":case"int16_t":this.__array=Int16Array;break;case"ushort":case"unsigned short":case"unsigned short int":case"uint16":case"uint16_t":this.__array=Uint16Array;break;case"int":case"signed int":case"int32":case"int32_t":this.__array=Int32Array;break;case"uint":case"unsigned int":case"uint32":case"uint32_t":this.__array=Uint32Array;break;case"float":this.__array=Float32Array;break;case"double":this.__array=Float64Array;break;default:throw new Error("Unsupported NRRD data type: "+s)}return this.type=s},endian:function(s){return this.endian=s},encoding:function(s){return this.encoding=s},dimension:function(s){return this.dim=parseInt(s,10)},sizes:function(s){let t;return this.sizes=function(){const e=s.split(/\s+/),i=[];for(let r=0,l=e.length;r<l;r++)t=e[r],i.push(parseInt(t,10));return i}()},space:function(s){return this.space=s},"space origin":function(s){return this.space_origin=s.split("(")[1].split(")")[0].split(",")},"space directions":function(s){let t,e;const i=s.match(/\(.*?\)/g);return this.vectors=function(){const r=[];for(let l=0,h=i.length;l<h;l++)e=i[l],r.push(function(){const u=e.slice(1,-1).split(/,/),f=[];for(let m=0,_=u.length;m<_;m++)t=u[m],f.push(parseFloat(t));return f}());return r}()},spacings:function(s){let t;const e=s.split(/\s+/);return this.spacings=function(){const i=[];for(let r=0,l=e.length;r<l;r++)t=e[r],i.push(parseFloat(t));return i}()}},U0={uniforms:{u_size:{value:new B(1,1,1)},u_clim:{value:new pe(0,1)},u_data:{value:null},u_cmdata:{value:null},u_threshold:{value:0},u_style:{value:0},u_step_size:{value:1},u_zmax:{value:1e3},u_sample_modulo:{value:1},u_lower_bound_mip:{value:0},u_modelMat:{value:new qt},u_iModelMat:{value:new qt},u_mvp:{value:new qt},u_view:{value:new qt},u_proj:{value:new qt},u_max_steps:{value:2500}},vertexShaderNew:`
	#pragma vscode_glsllint_stage : vert
	varying vec3 fragPos;

	void main() {
		fragPos = position;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
	`,fragmentShaderNew:`
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
	`};class I0{constructor(t,e){Ce(this,"obj");Ce(this,"texture");Ce(this,"geo");Ce(this,"mat");Ce(this,"mesh");Ce(this,"config",{threshold:0,style:"mip",colormap:"viridis",cm_lower:0,cm_upper:1,step_size:1,sample_modulo:1,auto_perf:!1,zmax:1e3,lower_mip_bound:.2});Ce(this,"colors",["gray","viridis","red_alpha","rainbow","spectral","inferno"]);Ce(this,"colormaps",this.colors.reduce((t,e)=>(t[e]=new Qb().load(`./colormaps/${e}.png`),t),{}));e&&this.loadNRRD(e,t),document.addEventListener("drop",i=>{if(i.preventDefault(),i.stopPropagation(),t.ui.dropzone.style.visibility="hidden",i.dataTransfer){if(i.dataTransfer.files.length>1){const h=document.getElementById("volumeError");h.textContent="Error loading file: only one file can be loaded at a time.";return}const r=new FileReader,l=i.dataTransfer.files[0].name;r.addEventListener("load",h=>{this.loadNRRD(r.result,t,!0,l)}),r.readAsArrayBuffer(i.dataTransfer.files[0])}else{const r=document.getElementById("volumeError");r.textContent="Error: no dataTransfer object found!";return}})}loadNRRD(t,e,i=!1,r=""){if(i)try{const l=new qh().parse(t);this.loadVolume(l,e);const h=document.getElementById("volumeName");h.textContent=`${r}`}catch(l){console.log(l);const h=document.getElementById("volumeError");h.textContent="Error in parsing NRRD file, check the console for more details."}else new qh().load(t,l=>{this.loadVolume(l,e);const h=document.getElementById("volumeName");h.textContent=`${t.replace(/^.*[\\\/]/,"")}`},l=>{console.log(`${t} loaded: ${l.loaded} / ${l.total}`);const h=document.getElementById("volumeSize");h.textContent=`Loaded ${l.loaded} / ${l.total} bytes (${Math.round(l.loaded/l.total*100)}%)`,setTimeout(()=>{h.textContent=""},3e3)},l=>{console.log(`Error loading ${t}: ${l.message}`);const h=document.getElementById("volumeError");h.textContent=`Error loading ${t}: ${l.message}`})}loadVolume(t,e){const i=U0;this.obj=t,this.config.zmax=t.zLength,this.texture=new uu(t.data,t.xLength,t.yLength,t.zLength),this.texture.format=eu,this.texture.type=gi,this.texture.minFilter=this.texture.magFilter=ln,this.texture.unpackAlignment=1,this.texture.needsUpdate=!0;const r=_u.clone(i.uniforms);r.u_size.value.set(t.xLength,t.yLength,t.zLength),r.u_data.value=this.texture,r.u_clim.value.set(0,1),r.u_cmdata.value=this.colormaps.viridis,r.u_threshold.value=this.config.threshold,r.u_style.value=0,r.u_step_size.value=1,r.u_sample_modulo.value=1,r.u_zmax.value=t.zLength,r.u_lower_bound_mip.value=.3,this.mat=new Vi({uniforms:r,vertexShader:i.vertexShaderNew,fragmentShader:i.fragmentShaderNew,side:Bn,transparent:!0,depthTest:!0,depthWrite:!0,alphaTest:.05}),e.scene.remove(this.mesh),this.geo=new ir(t.xLength,t.yLength,t.zLength),this.mesh=new $n(this.geo,this.mat),r.u_modelMat.value=this.mesh.matrixWorld,r.u_iModelMat.value=this.mesh.matrixWorld.invert(),r.u_max_steps.value=2500,e.scene.add(this.mesh),this.setupUI(e);const l=e.camera;l.mainCam.position.set(0,-t.yLength*2,0),l.mainCam.lookAt(0,0,0),l.mainCam.updateProjectionMatrix(),l.controls.update(),this.updateUniforms(),e.render()}setupUI(t){const e=t.ui.volFolder;e.on("change",()=>{this.updateUniforms(),t.render()}),e.children.forEach(h=>e.remove(h));const i=e.addFolder({title:"Visuals"}),r=e.addFolder({title:"Performance"}),l=i.addInput(this.config,"threshold",{min:0,max:1,step:.01,label:"Threshold",disabled:this.config.style!=="iso"});i.addInput(this.config,"colormap",{options:this.colors.reduce((h,u)=>(h[u]=u,h),{})}),i.addInput(this.config,"cm_lower",{min:0,max:1,step:.01,label:"CM Lower bound"}),i.addInput(this.config,"cm_upper",{min:0,max:1,step:.01,label:"CM Upper bound"}),i.addInput(this.config,"zmax",{min:0,max:this.obj.zLength,step:1,label:"Max Z stack"}),r.addInput(this.config,"auto_perf",{label:"Dynamic performance"}),r.addInput(this.config,"step_size",{min:1,max:50,step:.2}),r.addInput(this.config,"sample_modulo",{min:1,max:5,step:.2}),e.addInput(this.config,"style",{options:{mip:"mip",iso:"iso"},label:"Method"}).on("change",h=>{l.disabled=h.value==="mip",h.value==="mip"&&(this.config.threshold=0),t.ui.pane.refresh()})}updateUniforms(){const t=this.mesh.material.uniforms;t.u_threshold.value=this.config.threshold,t.u_style.value=this.config.style==="iso",t.u_cmdata.value=this.colormaps[this.config.colormap],t.u_clim.value.set(this.config.cm_lower,this.config.cm_upper),t.u_step_size.value=this.config.step_size,t.u_zmax.value=this.config.zmax,t.u_sample_modulo.value=this.config.sample_modulo,t.u_lower_bound_mip.value=this.config.lower_mip_bound}}const Gr=class Gr{constructor(){Ce(this,"canvas");Ce(this,"renderer");Ce(this,"scene");Ce(this,"camera");Ce(this,"ui");Ce(this,"vol");this.canvas=document.querySelector("#mainCanvas"),this.renderer=new Su({canvas:this.canvas,antialias:!0,alpha:!0,premultipliedAlpha:!1}),this.renderer.setClearColor(new ge(0,0,0),1),this.scene=new Xb,this.camera=qa.getInstance(this.scene),this.camera.controls.addEventListener("change",()=>this.render()),this.ui=Cl.getInstance(),this.vol=new I0(this,"./volumes/skull.nrrd")}render(){this.ui.fpsGraph.begin(),this.camera.resizeCam(this.canvas,this.renderer),this.renderer.render(this.scene,this.camera.mainCam),this.ui.fpsGraph.end()}static getInstance(){return Gr.instance?this.instance:(this.instance=new Gr,this.instance)}};Ce(Gr,"instance");let Al=Gr;Al.getInstance();
