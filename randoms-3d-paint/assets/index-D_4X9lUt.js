(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const Ve=!1,ke=(t,e)=>t===e,ve={equals:ke};let Re=Me;const k=1,oe=2,we={owned:null,cleanups:null,context:null,owner:null};var _=null;let ue=null,ze=null,x=null,b=null,V=null,le=0;function qe(t,e){const r=x,n=_,i=t.length===0,o=e===void 0?n:e,l=i?we:{owned:null,cleanups:null,context:o?o.context:null,owner:o},s=i?t:()=>t(()=>H(()=>Q(l)));_=l,x=null;try{return ee(s,!0)}finally{x=r,_=n}}function _e(t,e){e=e?Object.assign({},ve,e):ve;const r={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},n=i=>(typeof i=="function"&&(i=i(r.value)),be(r,i));return[je.bind(r),n]}function Ye(t,e,r){const n=Ee(t,e,!0,k);J(n)}function he(t,e,r){const n=Ee(t,e,!1,k);J(n)}function We(t,e,r){Re=Je;const n=Ee(t,e,!1,k);n.user=!0,V?V.push(n):J(n)}function H(t){if(x===null)return t();const e=x;x=null;try{return t()}finally{x=e}}function Se(t,e,r){const n=Array.isArray(t);let i;return o=>{let l;if(n){l=Array(t.length);for(let u=0;u<t.length;u++)l[u]=t[u]()}else l=t();const s=H(()=>e(l,i,o));return i=l,s}}function Ke(t){We(()=>H(t))}function Ze(t){return _===null||(_.cleanups===null?_.cleanups=[t]:_.cleanups.push(t)),t}function je(){if(this.sources&&this.state)if(this.state===k)J(this);else{const t=b;b=null,ee(()=>se(this),!1),b=t}if(x){const t=this.observers?this.observers.length:0;x.sources?(x.sources.push(this),x.sourceSlots.push(t)):(x.sources=[this],x.sourceSlots=[t]),this.observers?(this.observers.push(x),this.observerSlots.push(x.sources.length-1)):(this.observers=[x],this.observerSlots=[x.sources.length-1])}return this.value}function be(t,e,r){let n=t.value;return(!t.comparator||!t.comparator(n,e))&&(t.value=e,t.observers&&t.observers.length&&ee(()=>{for(let i=0;i<t.observers.length;i+=1){const o=t.observers[i],l=ue&&ue.running;l&&ue.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?b.push(o):V.push(o),o.observers&&Ie(o)),l||(o.state=k)}if(b.length>1e6)throw b=[],new Error},!1)),e}function J(t){if(!t.fn)return;Q(t);const e=le;He(t,t.value,e)}function He(t,e,r){let n;const i=_,o=x;x=_=t;try{n=t.fn(e)}catch(l){return t.pure&&(t.state=k,t.owned&&t.owned.forEach(Q),t.owned=null),t.updatedAt=r+1,De(l)}finally{x=o,_=i}(!t.updatedAt||t.updatedAt<=r)&&(t.updatedAt!=null&&"observers"in t?be(t,n):t.value=n,t.updatedAt=r)}function Ee(t,e,r,n=k,i){const o={fn:t,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:_,context:_?_.context:null,pure:r};return _===null||_!==we&&(_.owned?_.owned.push(o):_.owned=[o]),o}function ne(t){if(t.state===0)return;if(t.state===oe)return se(t);if(t.suspense&&H(t.suspense.inFallback))return t.suspense.effects.push(t);const e=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<le);)t.state&&e.push(t);for(let r=e.length-1;r>=0;r--)if(t=e[r],t.state===k)J(t);else if(t.state===oe){const n=b;b=null,ee(()=>se(t,e[0]),!1),b=n}}function ee(t,e){if(b)return t();let r=!1;e||(b=[]),V?r=!0:V=[],le++;try{const n=t();return Qe(r),n}catch(n){r||(V=null),b=null,De(n)}}function Qe(t){if(b&&(Me(b),b=null),t)return;const e=V;V=null,e.length&&ee(()=>Re(e),!1)}function Me(t){for(let e=0;e<t.length;e++)ne(t[e])}function Je(t){let e,r=0;for(e=0;e<t.length;e++){const n=t[e];n.user?t[r++]=n:ne(n)}for(e=0;e<r;e++)ne(t[e])}function se(t,e){t.state=0;for(let r=0;r<t.sources.length;r+=1){const n=t.sources[r];if(n.sources){const i=n.state;i===k?n!==e&&(!n.updatedAt||n.updatedAt<le)&&ne(n):i===oe&&se(n,e)}}}function Ie(t){for(let e=0;e<t.observers.length;e+=1){const r=t.observers[e];r.state||(r.state=oe,r.pure?b.push(r):V.push(r),r.observers&&Ie(r))}}function Q(t){let e;if(t.sources)for(;t.sources.length;){const r=t.sources.pop(),n=t.sourceSlots.pop(),i=r.observers;if(i&&i.length){const o=i.pop(),l=r.observerSlots.pop();n<i.length&&(o.sourceSlots[l]=n,i[n]=o,r.observerSlots[n]=l)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)Q(t.tOwned[e]);delete t.tOwned}if(t.owned){for(e=t.owned.length-1;e>=0;e--)Q(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}t.state=0}function et(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function De(t,e=_){throw et(t)}function tt(t,e){return H(()=>t(e||{}))}function rt(t,e,r){let n=r.length,i=e.length,o=n,l=0,s=0,u=e[i-1].nextSibling,p=null;for(;l<i||s<o;){if(e[l]===r[s]){l++,s++;continue}for(;e[i-1]===r[o-1];)i--,o--;if(i===l){const m=o<n?s?r[s-1].nextSibling:r[o-s]:u;for(;s<o;)t.insertBefore(r[s++],m)}else if(o===s)for(;l<i;)(!p||!p.has(e[l]))&&e[l].remove(),l++;else if(e[l]===r[o-1]&&r[s]===e[i-1]){const m=e[--i].nextSibling;t.insertBefore(r[s++],e[l++].nextSibling),t.insertBefore(r[--o],m),e[i]=r[o]}else{if(!p){p=new Map;let A=s;for(;A<o;)p.set(r[A],A++)}const m=p.get(e[l]);if(m!=null)if(s<m&&m<o){let A=l,y=1,D;for(;++A<i&&A<o&&!((D=p.get(e[A]))==null||D!==m+y);)y++;if(y>m-s){const P=e[l];for(;s<m;)t.insertBefore(r[s++],P)}else t.replaceChild(r[s++],e[l++])}else l++;else e[l++].remove()}}}const Ae="_$DX_DELEGATE";function it(t,e,r,n={}){let i;return qe(o=>{i=o,e===document?t():at(e,t(),e.firstChild?null:void 0,r)},n.owner),()=>{i(),e.textContent=""}}function ot(t,e,r,n){let i;const o=()=>{const s=document.createElement("template");return s.innerHTML=t,s.content.firstChild},l=()=>(i||(i=o())).cloneNode(!0);return l.cloneNode=l,l}function nt(t,e=window.document){const r=e[Ae]||(e[Ae]=new Set);for(let n=0,i=t.length;n<i;n++){const o=t[n];r.has(o)||(r.add(o),e.addEventListener(o,lt))}}function U(t,e,r){r!=null?t.style.setProperty(e,r):t.style.removeProperty(e)}function st(t,e,r){return H(()=>t(e,r))}function at(t,e,r,n){if(r!==void 0&&!n&&(n=[]),typeof e!="function")return ae(t,e,n,r);he(i=>ae(t,e(),i,r),n)}function lt(t){let e=t.target;const r=`$$${t.type}`,n=t.target,i=t.currentTarget,o=u=>Object.defineProperty(t,"target",{configurable:!0,value:u}),l=()=>{const u=e[r];if(u&&!e.disabled){const p=e[`${r}Data`];if(p!==void 0?u.call(e,p,t):u.call(e,t),t.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(t.target)&&o(e.host),!0},s=()=>{for(;l()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return e||document}}),t.composedPath){const u=t.composedPath();o(u[0]);for(let p=0;p<u.length-2&&(e=u[p],!!l());p++){if(e._$host){e=e._$host,s();break}if(e.parentNode===i)break}}else s();o(n)}function ae(t,e,r,n,i){for(;typeof r=="function";)r=r();if(e===r)return r;const o=typeof e,l=n!==void 0;if(t=l&&r[0]&&r[0].parentNode||t,o==="string"||o==="number"){if(o==="number"&&(e=e.toString(),e===r))return r;if(l){let s=r[0];s&&s.nodeType===3?s.data!==e&&(s.data=e):s=document.createTextNode(e),r=j(t,r,n,s)}else r!==""&&typeof r=="string"?r=t.firstChild.data=e:r=t.textContent=e}else if(e==null||o==="boolean")r=j(t,r,n);else{if(o==="function")return he(()=>{let s=e();for(;typeof s=="function";)s=s();r=ae(t,s,r,n)}),()=>r;if(Array.isArray(e)){const s=[],u=r&&Array.isArray(r);if(pe(s,e,r,i))return he(()=>r=ae(t,s,r,n,!0)),()=>r;if(s.length===0){if(r=j(t,r,n),l)return r}else u?r.length===0?ye(t,s,n):rt(t,r,s):(r&&j(t),ye(t,s));r=s}else if(e.nodeType){if(Array.isArray(r)){if(l)return r=j(t,r,n,e);j(t,r,null,e)}else r==null||r===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);r=e}}return r}function pe(t,e,r,n){let i=!1;for(let o=0,l=e.length;o<l;o++){let s=e[o],u=r&&r[t.length],p;if(!(s==null||s===!0||s===!1))if((p=typeof s)=="object"&&s.nodeType)t.push(s);else if(Array.isArray(s))i=pe(t,s,u)||i;else if(p==="function")if(n){for(;typeof s=="function";)s=s();i=pe(t,Array.isArray(s)?s:[s],Array.isArray(u)?u:[u])||i}else t.push(s),i=!0;else{const m=String(s);u&&u.nodeType===3&&u.data===m?t.push(u):t.push(document.createTextNode(m))}}return i}function ye(t,e,r=null){for(let n=0,i=e.length;n<i;n++)t.insertBefore(e[n],r)}function j(t,e,r,n){if(r===void 0)return t.textContent="";const i=n||document.createTextNode("");if(e.length){let o=!1;for(let l=e.length-1;l>=0;l--){const s=e[l];if(i!==s){const u=s.parentNode===t;!o&&!l?u?t.replaceChild(i,s):t.insertBefore(i,r):u&&s.remove()}else o=!0}}else t.insertBefore(i,r);return[i]}const Le=10,ct=1<<Le,C=3,K=1<<C,de=K-1,ft=Le-C,w=1<<ft,W=K+2,ut=9,I=1<<ut,S=Math.floor(I/W),dt=S*S*S,ht=w*w*w*4;class pt{indirectionData=new Uint8Array(ht);atlasData=new Uint8Array(I**3);freeBricks=[];brickMap=new Map;constructor(){for(let e=0;e<dt;e++)this.freeBricks.push(e)}getGridIdx(e,r,n){return n*w*w+r*w+e}get(e,r,n){const i=e>>C,o=r>>C,l=n>>C,s=this.getGridIdx(i,o,l);let u=this.brickMap.get(s);if(u==null)return 0;const p=u%S,m=Math.floor(u/S)%S,A=Math.floor(u/(S*S)),y=(e&de)+1,D=(r&de)+1,P=(n&de)+1,q=(A*W+P)*I*I+(m*W+D)*I+(p*W+y);return this.atlasData[q]}set(e,r,n,i){const o=e-1>>C,l=e+1>>C,s=r-1>>C,u=r+1>>C,p=n-1>>C,m=n+1>>C,A=i>5&&i<250;for(let y=p;y<=m;y++)for(let D=s;D<=u;D++)for(let P=o;P<=l;P++){if(P<0||P>=w||D<0||D>=w||y<0||y>=w)continue;const q=this.getGridIdx(P,D,y),Y=e-P*K+1,ce=r-D*K+1,fe=n-y*K+1;if(A&&this.ensureBrickAllocated(P,D,y),this.brickMap.has(q)){const z=this.brickMap.get(q);this.writeToAtlas(z,Y,ce,fe,i)}}}ensureBrickAllocated(e,r,n){const i=this.getGridIdx(e,r,n);if(!this.brickMap.has(i)){const o=this.freeBricks.pop();if(o===void 0)return;this.brickMap.set(i,o);const l=i*4;this.indirectionData[l]=o%S,this.indirectionData[l+1]=Math.floor(o/S)%S,this.indirectionData[l+2]=Math.floor(o/(S*S)),this.indirectionData[l+3]=255}}writeToAtlas(e,r,n,i,o){const l=e%S,s=Math.floor(e/S)%S,p=(Math.floor(e/(S*S))*W+i)*I*I+(s*W+n)*I+(l*W+r);this.atlasData[p]=o}initTextures(e,r){let n=e.getUniformLocation(r,"uIndirectionTex"),i=e.getUniformLocation(r,"uAtlasTex");e.uniform1i(n,0),e.uniform1i(i,1),e.activeTexture(e.TEXTURE0);const o=e.createTexture();e.bindTexture(e.TEXTURE_3D,o),e.texImage3D(e.TEXTURE_3D,0,e.RGBA8,w,w,w,0,e.RGBA,e.UNSIGNED_BYTE,this.indirectionData),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),e.activeTexture(e.TEXTURE1);const l=e.createTexture();return e.bindTexture(e.TEXTURE_3D,l),e.texImage3D(e.TEXTURE_3D,0,e.R8,I,I,I,0,e.RED,e.UNSIGNED_BYTE,this.atlasData),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),{iTex:o,aTex:l}}updateTextures(e,r){e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_3D,r.iTex),e.texSubImage3D(e.TEXTURE_3D,0,0,0,0,w,w,w,e.RGBA,e.UNSIGNED_BYTE,this.indirectionData),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_3D,r.aTex),e.texSubImage3D(e.TEXTURE_3D,0,0,0,0,I,I,I,e.RED,e.UNSIGNED_BYTE,this.atlasData)}writeShaderCode(){let e=10;return`uniform sampler3D uIndirectionTex;
uniform sampler3D uAtlasTex;

const float VOXEL_SIZE = ${e.toFixed(1)};
const float GRID_RES = ${w.toFixed(1)};
const float ATLAS_RES = ${I.toFixed(1)};
const float HALF_VOLUME_SIZE = ${((ct>>1)*e).toFixed(1)};

float map(vec3 p) {
    vec3 p_local = p + HALF_VOLUME_SIZE;
    // calc grid coords
    vec3 uvw = p_local / ${(w*K*e).toFixed(1)};
    vec4 brickInfo = texture(uIndirectionTex, uvw);
    if (brickInfo.a == 0.0) return ${(.5*K*e).toFixed(1)};

    vec3 cellLocal = fract(uvw * GRID_RES);

    // Map the 0.0->1.0 logical range to the 1.0->9.0 physical range (the padding)
    // Physical coordinate = (BrickIndex * 10.0) + 1.0 (offset) + (local * 8.0)
    vec3 brickBase = brickInfo.xyz * 255.0 * 10.0;
    vec3 atlasVoxelPos = brickBase + 1.0 + (cellLocal * 8.0);
    
    vec3 atlasUVW = atlasVoxelPos / ATLAS_RES;

    // hardware based trilinear interpolation
    float val = texture(uAtlasTex, atlasUVW).r;
    //
    return (0.5 - val) * 2.0 * VOXEL_SIZE;
}
`}}var Et=ot('<div><canvas style=touch-action:none></canvas><div class="ml-2 mt-2"><button class="btn btn-primary">Draw</button><button class="btn btn-primary ml-2">Spin');const Tt=50,mt=()=>{let[t,e]=_e(),[r,n]=_e(),i=new pt,o=new Float32Array(12),l,s,u,p,m,A,y;function D(a,c,f){let h=a,d=c,E=f;return Math.sqrt(h*h+d*d+E*E)-100}for(let a=-105;a<=105;++a)for(let c=-105;c<=105;++c)for(let f=-105;f<=105;++f){let h=D(a,c,f);if(h/=Math.sqrt(3),h<-1||h>1)continue;let d=128-Math.floor(Math.max(-1,Math.min(1,h))*127);d<1&&(d=1),d>255&&(d=255),i.set(512+f,512+c,512+a,d)}let P=i.writeShaderCode(),q=()=>{let a=t();if(a==null)return;let c=r();if(c==null||l===void 0||s===void 0||u===void 0||p===void 0||m===void 0)return;let f=a.width,h=a.height;const d=.5*h/Math.tan(.5*Tt*Math.PI/180);o[0]=0,o[1]=0,o[2]=f,o[3]=0,o[4]=f,o[5]=h,o[6]=0,o[7]=0,o[8]=f,o[9]=h,o[10]=0,o[11]=h,c.enableVertexAttribArray(s),c.bindBuffer(c.ARRAY_BUFFER,l),c.bufferData(c.ARRAY_BUFFER,o,c.DYNAMIC_DRAW),c.vertexAttribPointer(s,2,c.FLOAT,!1,0,0),c.disableVertexAttribArray(s);function E(v,M,L,R){var X=-1,B=1,g=M-v,te=R-L,re=B-X;return[2/g,0,0,0,0,2/te,0,0,0,0,-2/re,0,-(M+v)/g,-(R+L)/te,-0/re,1]}const T=new Float32Array(E(0,f,0,h));c.uniform2f(u,f,h),c.uniform1f(p,d),c.uniformMatrix4fv(m,!1,T),c.viewport(0,0,f,h),Y()},Y;{let a=!1;Y=()=>{let c=r();c!=null&&(a||(a=!0,requestAnimationFrame(()=>{l!==void 0&&s!==void 0&&(a=!1,c.enableVertexAttribArray(s),c.bindBuffer(c.ARRAY_BUFFER,l),c.drawArrays(c.TRIANGLES,0,6),c.disableVertexAttribArray(s))})))}}Ke(Se(t,a=>{if(a==null)return;let c=new ResizeObserver(()=>{let h=a.getBoundingClientRect();a.width=h.width*window.devicePixelRatio,a.height=h.height*window.devicePixelRatio,q()});c.observe(a),Ze(()=>{c.unobserve(a),c.disconnect()});let f=a.getContext("webgl2");f!=null&&n(f)})),Ye(Se(r,a=>{if(a==null)return;let c=a.createShader(a.VERTEX_SHADER);if(c==null)return;if(a.shaderSource(c,`#version 300 es
        in vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;

        void main(void) {
          gl_Position = uModelViewMatrix * aVertexPosition;
        }
      `),a.compileShader(c),!a.getShaderParameter(c,a.COMPILE_STATUS)){console.error("An error occurred compiling the vertex shader: "+a.getShaderInfoLog(c)),a.deleteShader(c);return}let f=a.createShader(a.FRAGMENT_SHADER);if(f==null){a.deleteShader(c);return}let h=`#version 300 es

precision highp float;
precision highp int;
precision highp usampler3D;
precision highp sampler3D;

uniform vec2 resolution;
uniform float uFocalLength;
uniform float uAngle;

out vec4 fragColour;

${P}

float map2(vec3 p) {
  p += 512.0 * VOXEL_SIZE;
  return abs(length(p - vec3(512.0*VOXEL_SIZE)) - 100.0 * VOXEL_SIZE);
}

const int MAX_STEPS = 200;
const float MIN_DIST = 5.0;
const float MAX_DIST = 10000.0;

bool march(vec3 ro, vec3 rd, out float t) {
    t = 0.0;
    for(int i = 0; i < MAX_STEPS; i++) {
        vec3 p = ro + rd * t;
        float d = map(p);
        
        if(d < MIN_DIST) {
            return true;
        }
        
        t += d;
        
        if(t > MAX_DIST) {
            break;
        }
    }
    return false;
}

vec3 normal(vec3 p) {
    const float eps = 0.1;
    const vec2 h = vec2(eps, 0);
    return normalize(vec3(
        map(p + h.xyy) - map(p - h.xyy),
        map(p + h.yxy) - map(p - h.yxy),
        map(p + h.yyx) - map(p - h.yyx)
    ));
}

void main(void) {
  float fl = uFocalLength;
  float mn = min(resolution.x, resolution.y);
  vec2 uv = (gl_FragCoord.xy - 0.5 * resolution) / mn;
  if (false) {
    vec3 p = vec3(uv.x*10240.0/3.0,uv.y*10240.0/3.0,201.0);
    float v = map(p);
    fragColour = vec4(0.0, 0.0, 0.5*(sin(v*0.015)+1.0), 1.0);
    return;
  }
  float ca = cos(uAngle * acos(-1.0) / 180.0);
  float sa = sin(uAngle * acos(-1.0) / 180.0);
  vec3 w = normalize(vec3(sa, 0.0, ca));
  vec3 u = normalize(cross(vec3(0,1,0),w));
  vec3 v = cross(w,u);
  vec3 ro = vec3(5000.0 * sa, 0.0, 5000.0 * ca);
  vec3 rd = normalize(
    (gl_FragCoord.x - 0.5 * resolution.x) * u +
    (gl_FragCoord.y - 0.5 * resolution.y) * v +
    -fl * w
  );
  float t = 0.0;
  bool hit = march(ro, rd, t);
  if (!hit) {
    fragColour = vec4(0.2, 0.2, 0.2, 1.0);
    return;
  }
  vec3 p = ro + rd*t;
  vec3 n = normal(p);
  float s = 0.8*dot(n,normalize(vec3(1,1,1))) + 0.2;
  vec4 c = vec4(1.0, 1.0, 1.0, 1.0);
  c = vec4(c.rgb * s, c.a);
  fragColour = c;
}
      `;if(console.log(h.split(`
`).map((E,T)=>`${T+1}: ${E}`).join(`
`)),a.shaderSource(f,h),a.compileShader(f),!a.getShaderParameter(f,a.COMPILE_STATUS)){console.error("An error occurred compiling the fragment shader: "+a.getShaderInfoLog(f)),a.deleteShader(f);return}let d=a.createProgram();if(a.attachShader(d,c),a.attachShader(d,f),a.linkProgram(d),!a.getProgramParameter(d,a.LINK_STATUS)){console.error("Unable to initialize the shader program: "+a.getProgramInfoLog(d)),a.detachShader(d,c),a.detachShader(d,f),a.deleteShader(c),a.deleteShader(f),a.deleteProgram(d);return}a.useProgram(d),A=i.initTextures(a,d),s=a.getAttribLocation(d,"aVertexPosition"),u=a.getUniformLocation(d,"resolution"),p=a.getUniformLocation(d,"uFocalLength"),m=a.getUniformLocation(d,"uModelViewMatrix"),y=a.getUniformLocation(d,"uAngle"),l=a.createBuffer(),q()}));let ce=(a,c)=>{let f=512+Math.round(a),h=512+Math.round(c),d=512,E=5;for(let T=-E-2;T<=E+2;++T)for(let v=-E-2;v<=E+2;++v)for(let M=-E-2;M<=E+2;++M){let L=Math.sqrt(T*T+v*v+M*M)-E;if(L/=Math.sqrt(3),L<-1||L>1)continue;let R=128-Math.floor(Math.max(-1,Math.min(1,L))*127);R<1&&(R=1),R>255&&(R=255);let X=f+M,B=h+v,g=d+T;X<0||X>=1024||B<0||B>=1024||g<0||g>=1024||i.set(X,B,g,R)}},fe=(a,c,f,h)=>{let d=512+Math.round(a),E=512+Math.round(c),T=512,v=512+Math.round(f),M=512+Math.round(h),L=512,R=20,X=v-d,B=M-E,g=L-T,te=X*X+B*B+g*g,re=(N,O,F)=>{let G=((N-d)*X+(O-E)*B+(F-T)*g)/te;G=Math.max(0,Math.min(1,G));let $=d+X*G,ie=E+B*G,$e=T+g*G,Te=N-$,me=O-ie,xe=F-$e;return Math.sqrt(Te*Te+me*me+xe*xe)-R},Xe=Math.min(d,v)-R,Be=Math.max(d,v)+R,Ne=Math.min(E,M)-R,Oe=Math.max(E,M)+R,Fe=Math.min(T,L)-R,Ge=Math.max(T,L)+R;for(let N=Fe-2;N<=Ge+2;++N)for(let O=Ne-2;O<=Oe+2;++O)for(let F=Xe-2;F<=Be+2;++F){if(N<0||N>=1024||O<0||O>=1024||F<0||F>=1024)continue;let G=re(F,O,N);if(G/=Math.sqrt(3),G<-1||G>1)continue;let $=128-Math.floor(Math.max(-1,Math.min(1,G))*127);$<1&&($=1),$>255&&($=255);let ie=i.get(F,O,N);ie!=0&&($=Math.max($,ie)),i.set(F,O,N,$)}},z,Z,Pe=a=>{let c=t();if(c==null)return;c.setPointerCapture(a.pointerId);let f=r();if(f==null||A==null)return;let h=c.getBoundingClientRect(),d=a.clientX-h.left,E=a.clientY-h.top,T=d-.5*h.width,v=-E+.5*h.height;z=T,Z=v,ce(T,v),i.updateTextures(f,A),Y()},ge=a=>{if(z==null||Z==null)return;let c=t();if(c==null)return;let f=r();if(f==null||A==null)return;let h=c.getBoundingClientRect(),d=a.clientX-h.left,E=a.clientY-h.top,T=d-.5*h.width,v=-E+.5*h.height,M=T-z,L=v-Z;M*M+L*L<=25||(fe(z,Z,T,v),z=T,Z=v,i.updateTextures(f,A),Y())},Ue=a=>{let c=t();c!=null&&(c.releasePointerCapture(a.pointerId),z=void 0,Z=void 0)},Ce=()=>{let a=0,c=()=>{let f=r();f!=null&&y!==void 0&&(a+=10,f.uniform1f(y,a),Y(),requestAnimationFrame(c))};requestAnimationFrame(c)};return(()=>{var a=Et(),c=a.firstChild,f=c.nextSibling,h=f.firstChild,d=h.nextSibling;U(a,"position","relative"),U(a,"width","100%"),U(a,"height","100%"),c.$$pointerup=Ue,c.$$pointermove=ge,c.$$pointerdown=Pe;var E=e;return typeof E=="function"?st(E,c):e=c,U(c,"position","absolute"),U(c,"left","0"),U(c,"top","0"),U(c,"width","100%"),U(c,"height","100%"),U(f,"position","absolute"),U(f,"left","0"),U(f,"top","0"),d.$$click=()=>Ce(),a})()};nt(["pointerdown","pointermove","pointerup","click"]);const xt=document.getElementById("root");it(()=>tt(mt,{}),xt);
