(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ah=!1,wh=(i,t)=>i===t,Si=Symbol("solid-proxy"),tl=Symbol("solid-track"),vs={equals:wh};let vc=Ec;const Yn=1,Ms=2,Mc={owned:null,cleanups:null,context:null,owner:null};var we=null;let Ws=null,Rh=null,Me=null,He=null,Vn=null,Is=0;function Ch(i,t){const e=Me,n=we,r=i.length===0,s=t===void 0?n:t,a=r?Mc:{owned:null,cleanups:null,context:s?s.context:null,owner:s},o=r?i:()=>i(()=>We(()=>Er(a)));we=a,Me=null;try{return er(o,!0)}finally{Me=e,we=n}}function _n(i,t){t=t?Object.assign({},vs,t):vs;const e={value:i,observers:null,observerSlots:null,comparator:t.equals||void 0},n=r=>(typeof r=="function"&&(r=r(e.value)),yc(e,r));return[Sc.bind(e),n]}function Je(i,t,e){const n=Ls(i,t,!0,Yn);tr(n)}function xn(i,t,e){const n=Ls(i,t,!1,Yn);tr(n)}function Ph(i,t,e){vc=Nh;const n=Ls(i,t,!1,Yn);n.user=!0,Vn?Vn.push(n):tr(n)}function Qt(i,t,e){e=e?Object.assign({},vs,e):vs;const n=Ls(i,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=e.equals||void 0,tr(n),Sc.bind(n)}function yr(i){return er(i,!1)}function We(i){if(Me===null)return i();const t=Me;Me=null;try{return i()}finally{Me=t}}function Qe(i,t,e){const n=Array.isArray(i);let r,s=e&&e.defer;return a=>{let o;if(n){o=Array(i.length);for(let c=0;c<i.length;c++)o[c]=i[c]()}else o=i();if(s)return s=!1,a;const l=We(()=>t(o,r,a));return r=o,l}}function Dh(i){Ph(()=>We(i))}function ji(i){return we===null||(we.cleanups===null?we.cleanups=[i]:we.cleanups.push(i)),i}function wa(){return Me}function Ih(i){const t=Qt(i),e=Qt(()=>Ra(t()));return e.toArray=()=>{const n=e();return Array.isArray(n)?n:n!=null?[n]:[]},e}function Sc(){if(this.sources&&this.state)if(this.state===Yn)tr(this);else{const i=He;He=null,er(()=>ys(this),!1),He=i}if(Me){const i=this.observers?this.observers.length:0;Me.sources?(Me.sources.push(this),Me.sourceSlots.push(i)):(Me.sources=[this],Me.sourceSlots=[i]),this.observers?(this.observers.push(Me),this.observerSlots.push(Me.sources.length-1)):(this.observers=[Me],this.observerSlots=[Me.sources.length-1])}return this.value}function yc(i,t,e){let n=i.value;return(!i.comparator||!i.comparator(n,t))&&(i.value=t,i.observers&&i.observers.length&&er(()=>{for(let r=0;r<i.observers.length;r+=1){const s=i.observers[r],a=Ws&&Ws.running;a&&Ws.disposed.has(s),(a?!s.tState:!s.state)&&(s.pure?He.push(s):Vn.push(s),s.observers&&bc(s)),a||(s.state=Yn)}if(He.length>1e6)throw He=[],new Error},!1)),t}function tr(i){if(!i.fn)return;Er(i);const t=Is;Lh(i,i.value,t)}function Lh(i,t,e){let n;const r=we,s=Me;Me=we=i;try{n=i.fn(t)}catch(a){return i.pure&&(i.state=Yn,i.owned&&i.owned.forEach(Er),i.owned=null),i.updatedAt=e+1,Tc(a)}finally{Me=s,we=r}(!i.updatedAt||i.updatedAt<=e)&&(i.updatedAt!=null&&"observers"in i?yc(i,n):i.value=n,i.updatedAt=e)}function Ls(i,t,e,n=Yn,r){const s={fn:i,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:we,context:we?we.context:null,pure:e};return we===null||we!==Mc&&(we.owned?we.owned.push(s):we.owned=[s]),s}function Ss(i){if(i.state===0)return;if(i.state===Ms)return ys(i);if(i.suspense&&We(i.suspense.inFallback))return i.suspense.effects.push(i);const t=[i];for(;(i=i.owner)&&(!i.updatedAt||i.updatedAt<Is);)i.state&&t.push(i);for(let e=t.length-1;e>=0;e--)if(i=t[e],i.state===Yn)tr(i);else if(i.state===Ms){const n=He;He=null,er(()=>ys(i,t[0]),!1),He=n}}function er(i,t){if(He)return i();let e=!1;t||(He=[]),Vn?e=!0:Vn=[],Is++;try{const n=i();return Uh(e),n}catch(n){e||(Vn=null),He=null,Tc(n)}}function Uh(i){if(He&&(Ec(He),He=null),i)return;const t=Vn;Vn=null,t.length&&er(()=>vc(t),!1)}function Ec(i){for(let t=0;t<i.length;t++)Ss(i[t])}function Nh(i){let t,e=0;for(t=0;t<i.length;t++){const n=i[t];n.user?i[e++]=n:Ss(n)}for(t=0;t<e;t++)Ss(i[t])}function ys(i,t){i.state=0;for(let e=0;e<i.sources.length;e+=1){const n=i.sources[e];if(n.sources){const r=n.state;r===Yn?n!==t&&(!n.updatedAt||n.updatedAt<Is)&&Ss(n):r===Ms&&ys(n,t)}}}function bc(i){for(let t=0;t<i.observers.length;t+=1){const e=i.observers[t];e.state||(e.state=Ms,e.pure?He.push(e):Vn.push(e),e.observers&&bc(e))}}function Er(i){let t;if(i.sources)for(;i.sources.length;){const e=i.sources.pop(),n=i.sourceSlots.pop(),r=e.observers;if(r&&r.length){const s=r.pop(),a=e.observerSlots.pop();n<r.length&&(s.sourceSlots[a]=n,r[n]=s,e.observerSlots[n]=a)}}if(i.tOwned){for(t=i.tOwned.length-1;t>=0;t--)Er(i.tOwned[t]);delete i.tOwned}if(i.owned){for(t=i.owned.length-1;t>=0;t--)Er(i.owned[t]);i.owned=null}if(i.cleanups){for(t=i.cleanups.length-1;t>=0;t--)i.cleanups[t]();i.cleanups=null}i.state=0}function Fh(i){return i instanceof Error?i:new Error(typeof i=="string"?i:"Unknown error",{cause:i})}function Tc(i,t=we){throw Fh(i)}function Ra(i){if(typeof i=="function"&&!i.length)return Ra(i());if(Array.isArray(i)){const t=[];for(let e=0;e<i.length;e++){const n=Ra(i[e]);Array.isArray(n)?t.push.apply(t,n):t.push(n)}return t}return i}function kn(i,t){return We(()=>i(t||{}))}const Ac=i=>`Stale read from <${i}>.`;function el(i){const t=i.keyed,e=Qt(()=>i.when,void 0,void 0),n=t?e:Qt(e,void 0,{equals:(r,s)=>!r==!s});return Qt(()=>{const r=n();if(r){const s=i.children;return typeof s=="function"&&s.length>0?We(()=>s(t?r:()=>{if(!We(n))throw Ac("Show");return e()})):s}return i.fallback},void 0,void 0)}function Oh(i){const t=Ih(()=>i.children),e=Qt(()=>{const n=t(),r=Array.isArray(n)?n:[n];let s=()=>{};for(let a=0;a<r.length;a++){const o=a,l=r[a],c=s,f=Qt(()=>c()?void 0:l.when,void 0,void 0),d=l.keyed?f:Qt(f,void 0,{equals:(u,p)=>!u==!p});s=()=>c()||(d()?[o,f,l]:void 0)}return s});return Qt(()=>{const n=e()();if(!n)return i.fallback;const[r,s,a]=n,o=a.children;return typeof o=="function"&&o.length>0?We(()=>o(a.keyed?s():()=>{if(We(e)()?.[0]!==r)throw Ac("Match");return s()})):o},void 0,void 0)}function nl(i){return i}const Bh=i=>Qt(()=>i());function zh(i,t,e){let n=e.length,r=t.length,s=n,a=0,o=0,l=t[r-1].nextSibling,c=null;for(;a<r||o<s;){if(t[a]===e[o]){a++,o++;continue}for(;t[r-1]===e[s-1];)r--,s--;if(r===a){const f=s<n?o?e[o-1].nextSibling:e[s-o]:l;for(;o<s;)i.insertBefore(e[o++],f)}else if(s===o)for(;a<r;)(!c||!c.has(t[a]))&&t[a].remove(),a++;else if(t[a]===e[s-1]&&e[o]===t[r-1]){const f=t[--r].nextSibling;i.insertBefore(e[o++],t[a++].nextSibling),i.insertBefore(e[--s],f),t[r]=e[s]}else{if(!c){c=new Map;let d=o;for(;d<s;)c.set(e[d],d++)}const f=c.get(t[a]);if(f!=null)if(o<f&&f<s){let d=a,u=1,p;for(;++d<r&&d<s&&!((p=c.get(t[d]))==null||p!==f+u);)u++;if(u>f-o){const _=t[a];for(;o<f;)i.insertBefore(e[o++],_)}else i.replaceChild(e[o++],t[a++])}else a++;else t[a++].remove()}}}const il="_$DX_DELEGATE";function kh(i,t,e,n={}){let r;return Ch(s=>{r=s,t===document?i():ls(t,i(),t.firstChild?null:void 0,e)},n.owner),()=>{r(),t.textContent=""}}function Ie(i,t,e,n){let r;const s=()=>{const o=document.createElement("template");return o.innerHTML=i,o.content.firstChild},a=()=>(r||(r=s())).cloneNode(!0);return a.cloneNode=a,a}function Pr(i,t=window.document){const e=t[il]||(t[il]=new Set);for(let n=0,r=i.length;n<r;n++){const s=i[n];e.has(s)||(e.add(s),t.addEventListener(s,Vh))}}function an(i,t,e){e!=null?i.style.setProperty(t,e):i.style.removeProperty(t)}function wc(i,t,e){return We(()=>i(t,e))}function ls(i,t,e,n){if(e!==void 0&&!n&&(n=[]),typeof t!="function")return Es(i,t,n,e);xn(r=>Es(i,t(),r,e),n)}function Vh(i){let t=i.target;const e=`$$${i.type}`,n=i.target,r=i.currentTarget,s=l=>Object.defineProperty(i,"target",{configurable:!0,value:l}),a=()=>{const l=t[e];if(l&&!t.disabled){const c=t[`${e}Data`];if(c!==void 0?l.call(t,c,i):l.call(t,i),i.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(i.target)&&s(t.host),!0},o=()=>{for(;a()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return t||document}}),i.composedPath){const l=i.composedPath();s(l[0]);for(let c=0;c<l.length-2&&(t=l[c],!!a());c++){if(t._$host){t=t._$host,o();break}if(t.parentNode===r)break}}else o();s(n)}function Es(i,t,e,n,r){for(;typeof e=="function";)e=e();if(t===e)return e;const s=typeof t,a=n!==void 0;if(i=a&&e[0]&&e[0].parentNode||i,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===e))return e;if(a){let o=e[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),e=Ai(i,e,n,o)}else e!==""&&typeof e=="string"?e=i.firstChild.data=t:e=i.textContent=t}else if(t==null||s==="boolean")e=Ai(i,e,n);else{if(s==="function")return xn(()=>{let o=t();for(;typeof o=="function";)o=o();e=Es(i,o,e,n)}),()=>e;if(Array.isArray(t)){const o=[],l=e&&Array.isArray(e);if(Ca(o,t,e,r))return xn(()=>e=Es(i,o,e,n,!0)),()=>e;if(o.length===0){if(e=Ai(i,e,n),a)return e}else l?e.length===0?rl(i,o,n):zh(i,e,o):(e&&Ai(i),rl(i,o));e=o}else if(t.nodeType){if(Array.isArray(e)){if(a)return e=Ai(i,e,n,t);Ai(i,e,null,t)}else e==null||e===""||!i.firstChild?i.appendChild(t):i.replaceChild(t,i.firstChild);e=t}}return e}function Ca(i,t,e,n){let r=!1;for(let s=0,a=t.length;s<a;s++){let o=t[s],l=e&&e[i.length],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)=="object"&&o.nodeType)i.push(o);else if(Array.isArray(o))r=Ca(i,o,l)||r;else if(c==="function")if(n){for(;typeof o=="function";)o=o();r=Ca(i,Array.isArray(o)?o:[o],Array.isArray(l)?l:[l])||r}else i.push(o),r=!0;else{const f=String(o);l&&l.nodeType===3&&l.data===f?i.push(l):i.push(document.createTextNode(f))}}return r}function rl(i,t,e=null){for(let n=0,r=t.length;n<r;n++)i.insertBefore(t[n],e)}function Ai(i,t,e,n){if(e===void 0)return i.textContent="";const r=n||document.createTextNode("");if(t.length){let s=!1;for(let a=t.length-1;a>=0;a--){const o=t[a];if(r!==o){const l=o.parentNode===i;!s&&!a?l?i.replaceChild(r,o):i.insertBefore(r,e):l&&o.remove()}else s=!0}}else i.insertBefore(r,e);return[r]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="182",Wi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gh=0,sl=1,Hh=2,cs=1,Wh=2,_r=3,ri=0,tn=1,An=2,Gn=0,Xi=1,al=2,ol=3,ll=4,Xh=5,_i=100,Yh=101,qh=102,jh=103,$h=104,Zh=200,Kh=201,Jh=202,Qh=203,Pa=204,Da=205,tu=206,eu=207,nu=208,iu=209,ru=210,su=211,au=212,ou=213,lu=214,Ia=0,La=1,Ua=2,$i=3,Na=4,Fa=5,Oa=6,Ba=7,Rc=0,cu=1,hu=2,Cn=0,Cc=1,Pc=2,Dc=3,Ic=4,Lc=5,Uc=6,Nc=7,Fc=300,yi=301,Zi=302,za=303,ka=304,Us=306,Va=1e3,Ne=1001,Ga=1002,Ce=1003,uu=1004,Nr=1005,be=1006,Xs=1007,vi=1008,Ge=1009,Oc=1010,Bc=1011,br=1012,Co=1013,In=1014,wn=1015,Wn=1016,Po=1017,Do=1018,Tr=1020,zc=35902,kc=35899,Vc=1021,Gc=1022,ln=1023,Xn=1026,Mi=1027,Io=1028,Lo=1029,Ki=1030,Uo=1031,No=1033,hs=33776,us=33777,fs=33778,ds=33779,Ha=35840,Wa=35841,Xa=35842,Ya=35843,qa=36196,ja=37492,$a=37496,Za=37488,Ka=37489,Ja=37490,Qa=37491,to=37808,eo=37809,no=37810,io=37811,ro=37812,so=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,_o=36494,go=36495,xo=36283,vo=36284,Mo=36285,So=36286,fu=3200,Hc=0,du=1,ni="",un="srgb",Ji="srgb-linear",bs="linear",se="srgb",wi=7680,cl=519,pu=512,mu=513,_u=514,Fo=515,gu=516,xu=517,Oo=518,vu=519,hl=35044,ul="300 es",Rn=2e3,Ts=2001;function Wc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mu(){const i=As("canvas");return i.style.display="block",i}const fl={};function dl(...i){const t="THREE."+i.shift();console.log(t,...i)}function Pt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Wt(...i){const t="THREE."+i.shift();console.error(t,...i)}function Ar(...i){const t=i.join(" ");t in fl||(fl[t]=!0,Pt(...i))}function Su(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ps=Math.PI/180,yo=180/Math.PI;function Dr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function kt(i,t,e){return Math.max(t,Math.min(e,i))}function yu(i,t){return(i%t+t)%t}function Ys(i,t,e){return(1-e)*i+e*t}function ar(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Eu={DEG2RAD:ps};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Re{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],f=n[r+2],d=n[r+3],u=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=d;return}if(o>=1){t[e+0]=u,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(d!==x||l!==u||c!==p||f!==_){let m=l*u+c*p+f*_+d*x;m<0&&(u=-u,p=-p,_=-_,x=-x,m=-m);let h=1-o;if(m<.9995){const S=Math.acos(m),E=Math.sin(S);h=Math.sin(h*S)/E,o=Math.sin(o*S)/E,l=l*h+u*o,c=c*h+p*o,f=f*h+_*o,d=d*h+x*o}else{l=l*h+u*o,c=c*h+p*o,f=f*h+_*o,d=d*h+x*o;const S=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=S,c*=S,f*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],f=n[r+3],d=s[a],u=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+f*d+l*p-c*u,t[e+1]=l*_+f*u+c*d-o*p,t[e+2]=c*_+f*p+o*u-l*d,t[e+3]=f*_-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(r/2),d=o(s/2),u=l(n/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*f*d+c*p*_,this._y=c*p*d-u*f*_,this._z=c*f*_+u*p*d,this._w=c*f*d-u*p*_;break;case"YXZ":this._x=u*f*d+c*p*_,this._y=c*p*d-u*f*_,this._z=c*f*_-u*p*d,this._w=c*f*d+u*p*_;break;case"ZXY":this._x=u*f*d-c*p*_,this._y=c*p*d+u*f*_,this._z=c*f*_+u*p*d,this._w=c*f*d-u*p*_;break;case"ZYX":this._x=u*f*d-c*p*_,this._y=c*p*d+u*f*_,this._z=c*f*_-u*p*d,this._w=c*f*d+u*p*_;break;case"YZX":this._x=u*f*d+c*p*_,this._y=c*p*d+u*f*_,this._z=c*f*_-u*p*d,this._w=c*f*d-u*p*_;break;case"XZY":this._x=u*f*d-c*p*_,this._y=c*p*d-u*f*_,this._z=c*f*_+u*p*d,this._w=c*f*d+u*p*_;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-r*o,this._w=a*f-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),f=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*f,this.y=n+l*f+o*c-s*d,this.z=r+l*d+s*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qs.copy(this).projectOnVector(t),this.sub(qs)}reflect(t){return this.sub(qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new D,pl=new Re;class Nt{constructor(t,e,n,r,s,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=r,f[2]=o,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],d=n[7],u=n[2],p=n[5],_=n[8],x=r[0],m=r[3],h=r[6],S=r[1],E=r[4],b=r[7],A=r[2],C=r[5],R=r[8];return s[0]=a*x+o*S+l*A,s[3]=a*m+o*E+l*C,s[6]=a*h+o*b+l*R,s[1]=c*x+f*S+d*A,s[4]=c*m+f*E+d*C,s[7]=c*h+f*b+d*R,s[2]=u*x+p*S+_*A,s[5]=u*m+p*E+_*C,s[8]=u*h+p*b+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-n*s*f+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*a-o*c,u=o*l-f*s,p=c*s-a*l,_=e*d+n*u+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=d*x,t[1]=(r*c-f*n)*x,t[2]=(o*n-r*a)*x,t[3]=u*x,t[4]=(f*e-r*l)*x,t[5]=(r*s-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(js.makeScale(t,e)),this}rotate(t){return this.premultiply(js.makeRotation(-t)),this}translate(t,e){return this.premultiply(js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const js=new Nt,ml=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bu(){const i={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===se&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?bs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ji]:{primaries:t,whitePoint:n,transfer:bs,toXYZ:ml,fromXYZ:_l,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:t,whitePoint:n,transfer:se,toXYZ:ml,fromXYZ:_l,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),i}const Xt=bu();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class Tu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ri===void 0&&(Ri=As("canvas")),Ri.width=t.width,Ri.height=t.height;const r=Ri.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=As("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Au=0;class Bo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Dr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($s(r[a].image)):s.push($s(r[a]))}else s=$s(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function $s(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}let wu=0;const Zs=new D;class qe extends bi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=Ne,r=Ne,s=be,a=vi,o=ln,l=Ge,c=qe.DEFAULT_ANISOTROPY,f=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Dr(),this.name="",this.source=new Bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zs).x}get height(){return this.source.getSize(Zs).y}get depth(){return this.source.getSize(Zs).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case Ne:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case Ne:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Fc;qe.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,r=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],f=l[4],d=l[8],u=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,b=(p+1)/2,A=(h+1)/2,C=(f+u)/4,R=(d+x)/4,P=(_+m)/4;return E>b&&E>A?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=R/n):b>A?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=C/r,s=P/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=R/s,r=P/s),this.set(n,r,s,e),this}let S=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(u-f)*(u-f));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-x)/S,this.z=(u-f)/S,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ru extends bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new qe(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Bo(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Ru{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xc extends qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ms extends qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),Or.subVectors(this.max,or),Ci.subVectors(t.a,or),Pi.subVectors(t.b,or),Di.subVectors(t.c,or),qn.subVectors(Pi,Ci),jn.subVectors(Di,Pi),li.subVectors(Ci,Di);let e=[0,-qn.z,qn.y,0,-jn.z,jn.y,0,-li.z,li.y,qn.z,0,-qn.x,jn.z,0,-jn.x,li.z,0,-li.x,-qn.y,qn.x,0,-jn.y,jn.x,0,-li.y,li.x,0];return!Ks(e,Ci,Pi,Di,Or)||(e=[1,0,0,0,1,0,0,0,1],!Ks(e,Ci,Pi,Di,Or))?!1:(Br.crossVectors(qn,jn),e=[Br.x,Br.y,Br.z],Ks(e,Ci,Pi,Di,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Un=[new D,new D,new D,new D,new D,new D,new D,new D],dn=new D,Fr=new Ei,Ci=new D,Pi=new D,Di=new D,qn=new D,jn=new D,li=new D,or=new D,Or=new D,Br=new D,ci=new D;function Ks(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ci.fromArray(i,s);const o=r.x*Math.abs(ci.x)+r.y*Math.abs(ci.y)+r.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),f=n.dot(ci);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Cu=new Ei,lr=new D,Js=new D;class Ns{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);const e=lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(lr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(Js)),this.expandByPoint(lr.copy(t.center).sub(Js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Nn=new D,Qs=new D,zr=new D,$n=new D,ta=new D,kr=new D,ea=new D;class nr{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Qs.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Qs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(zr),o=$n.dot(this.direction),l=-$n.dot(zr),c=$n.lengthSq(),f=Math.abs(1-a*a);let d,u,p,_;if(f>0)if(d=a*l-o,u=a*o-l,_=s*f,d>=0)if(u>=-_)if(u<=_){const x=1/f;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qs).addScaledVector(zr,u),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),f>=0?(s=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(s=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,r,s){ta.subVectors(e,t),kr.subVectors(n,t),ea.crossVectors(ta,kr);let a=this.direction.dot(ea),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);const l=o*this.direction.dot(kr.crossVectors($n,kr));if(l<0)return null;const c=o*this.direction.dot(ta.cross($n));if(c<0||l+c>a)return null;const f=-o*$n.dot(ea);return f<0?null:this.at(f/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,r,s,a,o,l,c,f,d,u,p,_,x,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,f,d,u,p,_,x,m)}set(t,e,n,r,s,a,o,l,c,f,d,u,p,_,x,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Ii.setFromMatrixColumn(t,0).length(),s=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*f,p=a*d,_=o*f,x=o*d;e[0]=l*f,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*f,p=l*d,_=c*f,x=c*d;e[0]=u+x*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*f,e[9]=-o,e[2]=p*o-_,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*f,p=l*d,_=c*f,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*f,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*f,p=a*d,_=o*f,x=o*d;e[0]=l*f,e[4]=_*c-p,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,_=o*l,x=o*c;e[0]=l*f,e[4]=x-u*d,e[8]=_*d+p,e[1]=d,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=p*d+_,e[10]=u-x*d}else if(t.order==="XZY"){const u=a*l,p=a*c,_=o*l,x=o*c;e[0]=l*f,e[4]=-d,e[8]=c*f,e[1]=u*d+x,e[5]=a*f,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*f,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pu,t,Du)}lookAt(t,e,n){const r=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Zn.crossVectors(n,rn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Zn.crossVectors(n,rn)),Zn.normalize(),Vr.crossVectors(rn,Zn),r[0]=Zn.x,r[4]=Vr.x,r[8]=rn.x,r[1]=Zn.y,r[5]=Vr.y,r[9]=rn.y,r[2]=Zn.z,r[6]=Vr.z,r[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],d=n[5],u=n[9],p=n[13],_=n[2],x=n[6],m=n[10],h=n[14],S=n[3],E=n[7],b=n[11],A=n[15],C=r[0],R=r[4],P=r[8],g=r[12],M=r[1],T=r[5],I=r[9],U=r[13],z=r[2],V=r[6],G=r[10],N=r[14],Y=r[3],J=r[7],et=r[11],it=r[15];return s[0]=a*C+o*M+l*z+c*Y,s[4]=a*R+o*T+l*V+c*J,s[8]=a*P+o*I+l*G+c*et,s[12]=a*g+o*U+l*N+c*it,s[1]=f*C+d*M+u*z+p*Y,s[5]=f*R+d*T+u*V+p*J,s[9]=f*P+d*I+u*G+p*et,s[13]=f*g+d*U+u*N+p*it,s[2]=_*C+x*M+m*z+h*Y,s[6]=_*R+x*T+m*V+h*J,s[10]=_*P+x*I+m*G+h*et,s[14]=_*g+x*U+m*N+h*it,s[3]=S*C+E*M+b*z+A*Y,s[7]=S*R+E*T+b*V+A*J,s[11]=S*P+E*I+b*G+A*et,s[15]=S*g+E*U+b*N+A*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],u=t[10],p=t[14],_=t[3],x=t[7],m=t[11],h=t[15],S=l*p-c*u,E=o*p-c*d,b=o*u-l*d,A=a*p-c*f,C=a*u-l*f,R=a*d-o*f;return e*(x*S-m*E+h*b)-n*(_*S-m*A+h*C)+r*(_*E-x*A+h*R)-s*(_*b-x*C+m*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],u=t[10],p=t[11],_=t[12],x=t[13],m=t[14],h=t[15],S=d*m*c-x*u*c+x*l*p-o*m*p-d*l*h+o*u*h,E=_*u*c-f*m*c-_*l*p+a*m*p+f*l*h-a*u*h,b=f*x*c-_*d*c+_*o*p-a*x*p-f*o*h+a*d*h,A=_*d*l-f*x*l-_*o*u+a*x*u+f*o*m-a*d*m,C=e*S+n*E+r*b+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=S*R,t[1]=(x*u*s-d*m*s-x*r*p+n*m*p+d*r*h-n*u*h)*R,t[2]=(o*m*s-x*l*s+x*r*c-n*m*c-o*r*h+n*l*h)*R,t[3]=(d*l*s-o*u*s-d*r*c+n*u*c+o*r*p-n*l*p)*R,t[4]=E*R,t[5]=(f*m*s-_*u*s+_*r*p-e*m*p-f*r*h+e*u*h)*R,t[6]=(_*l*s-a*m*s-_*r*c+e*m*c+a*r*h-e*l*h)*R,t[7]=(a*u*s-f*l*s+f*r*c-e*u*c-a*r*p+e*l*p)*R,t[8]=b*R,t[9]=(_*d*s-f*x*s-_*n*p+e*x*p+f*n*h-e*d*h)*R,t[10]=(a*x*s-_*o*s+_*n*c-e*x*c-a*n*h+e*o*h)*R,t[11]=(f*o*s-a*d*s-f*n*c+e*d*c+a*n*p-e*o*p)*R,t[12]=A*R,t[13]=(f*x*r-_*d*r+_*n*u-e*x*u-f*n*m+e*d*m)*R,t[14]=(_*o*r-a*x*r-_*n*l+e*x*l+a*n*m-e*o*m)*R,t[15]=(a*d*r-f*o*r+f*n*l-e*d*l-a*n*u+e*o*u)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+n,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,f=a+a,d=o+o,u=s*c,p=s*f,_=s*d,x=a*f,m=a*d,h=o*d,S=l*c,E=l*f,b=l*d,A=n.x,C=n.y,R=n.z;return r[0]=(1-(x+h))*A,r[1]=(p+b)*A,r[2]=(_-E)*A,r[3]=0,r[4]=(p-b)*C,r[5]=(1-(u+h))*C,r[6]=(m+S)*C,r[7]=0,r[8]=(_+E)*R,r[9]=(m-S)*R,r[10]=(1-(u+x))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Ii.set(r[0],r[1],r[2]).length();const a=Ii.set(r[4],r[5],r[6]).length(),o=Ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),pn.copy(this);const c=1/s,f=1/a,d=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=f,pn.elements[5]*=f,pn.elements[6]*=f,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,e.setFromRotationMatrix(pn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Rn,l=!1){const c=this.elements,f=2*s/(e-t),d=2*s/(n-r),u=(e+t)/(e-t),p=(n+r)/(n-r);let _,x;if(l)_=s/(a-s),x=a*s/(a-s);else if(o===Rn)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ts)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Rn,l=!1){const c=this.elements,f=2/(e-t),d=2/(n-r),u=-(e+t)/(e-t),p=-(n+r)/(n-r);let _,x;if(l)_=1/(a-s),x=a/(a-s);else if(o===Rn)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ts)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new D,pn=new te,Pu=new D(0,0,0),Du=new D(1,1,1),Zn=new D,Vr=new D,rn=new D,gl=new te,xl=new Re;class vn{constructor(t=0,e=0,n=0,r=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xl.setFromEuler(this),this.setFromQuaternion(xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class zo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Iu=0;const vl=new D,Li=new Re,Fn=new te,Gr=new D,cr=new D,Lu=new D,Uu=new Re,Ml=new D(1,0,0),Sl=new D(0,1,0),yl=new D(0,0,1),El={type:"added"},Nu={type:"removed"},Ui={type:"childadded",child:null},na={type:"childremoved",child:null};class Te extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new D,e=new vn,n=new Re,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new te},normalMatrix:{value:new Nt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Ml,t)}rotateY(t){return this.rotateOnAxis(Sl,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return vl.copy(t).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ml,t)}translateY(t){return this.translateOnAxis(Sl,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gr.copy(t):Gr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(cr,Gr,this.up):Fn.lookAt(Gr,cr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Li.setFromRotationMatrix(Fn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(El),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nu),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(El),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,Lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Uu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Te.DEFAULT_UP=new D(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new D,On=new D,ia=new D,Bn=new D,Ni=new D,Fi=new D,bl=new D,ra=new D,sa=new D,aa=new D,oa=new _e,la=new _e,ca=new _e;class gn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),mn.subVectors(t,e),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){mn.subVectors(r,e),On.subVectors(n,e),ia.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(On),l=mn.dot(ia),c=On.dot(On),f=On.dot(ia),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*f)*u,_=(a*f-o*l)*u;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return oa.setScalar(0),la.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(oa,s.x),a.addScaledVector(la,s.y),a.addScaledVector(ca,s.z),a}static isFrontFacing(t,e,n,r){return mn.subVectors(n,e),On.subVectors(t,e),mn.cross(On).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Ni.subVectors(r,n),Fi.subVectors(s,n),ra.subVectors(t,n);const l=Ni.dot(ra),c=Fi.dot(ra);if(l<=0&&c<=0)return e.copy(n);sa.subVectors(t,r);const f=Ni.dot(sa),d=Fi.dot(sa);if(f>=0&&d<=f)return e.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(Ni,a);aa.subVectors(t,s);const p=Ni.dot(aa),_=Fi.dot(aa);if(_>=0&&p<=_)return e.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Fi,o);const m=f*_-p*d;if(m<=0&&d-f>=0&&p-_>=0)return bl.subVectors(s,r),o=(d-f)/(d-f+(p-_)),e.copy(r).addScaledVector(bl,o);const h=1/(m+x+u);return a=x*h,o=u*h,e.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Xt.workingColorSpace){if(t=yu(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ha(a,s,t+1/3),this.g=ha(a,s,t),this.b=ha(a,s,t-1/3)}return Xt.colorSpaceToWorking(this,r),this}setStyle(t,e=un){function n(s){s!==void 0&&parseFloat(s)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const n=Yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return Xt.workingToColorSpace(ze.copy(this),t),Math.round(kt(ze.r*255,0,255))*65536+Math.round(kt(ze.g*255,0,255))*256+Math.round(kt(ze.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(ze.copy(this),e);const n=ze.r,r=ze.g,s=ze.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=un){Xt.workingToColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,r=ze.b;return t!==un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Hr);const n=Ys(Kn.h,Hr.h,e),r=Ys(Kn.s,Hr.s,e),s=Ys(Kn.l,Hr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Yt;Yt.NAMES=Yc;let Fu=0;class ir extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=Xi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=Da,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pa&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fs extends ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new D,Wr=new At;let Ou=0;class Dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ou++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ar(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hl&&(t.usage=this.usage),t}}class qc extends Dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jc extends Dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends Dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bu=0;const hn=new te,ua=new Te,Oi=new D,sn=new Ei,hr=new Ei,Ue=new D;class Fe extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wc(t)?jc:qc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(sn.min,hr.min),sn.expandByPoint(Ue),Ue.addVectors(sn.max,hr.max),sn.expandByPoint(Ue)):(sn.expandByPoint(hr.min),sn.expandByPoint(hr.max))}sn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ue.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ue));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ue.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(t,c),Ue.add(Oi)),r=Math.max(r,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new D,l[P]=new D;const c=new D,f=new D,d=new D,u=new At,p=new At,_=new At,x=new D,m=new D;function h(P,g,M){c.fromBufferAttribute(n,P),f.fromBufferAttribute(n,g),d.fromBufferAttribute(n,M),u.fromBufferAttribute(s,P),p.fromBufferAttribute(s,g),_.fromBufferAttribute(s,M),f.sub(c),d.sub(c),p.sub(u),_.sub(u);const T=1/(p.x*_.y-_.x*p.y);isFinite(T)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(T),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(T),o[P].add(x),o[g].add(x),o[M].add(x),l[P].add(m),l[g].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,g=S.length;P<g;++P){const M=S[P],T=M.start,I=M.count;for(let U=T,z=T+I;U<z;U+=3)h(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const E=new D,b=new D,A=new D,C=new D;function R(P){A.fromBufferAttribute(r,P),C.copy(A);const g=o[P];E.copy(g),E.sub(A.multiplyScalar(A.dot(g))).normalize(),b.crossVectors(C,g);const T=b.dot(l[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,T)}for(let P=0,g=S.length;P<g;++P){const M=S[P],T=M.start,I=M.count;for(let U=T,z=T+I;U<z;U+=3)R(t.getX(U+0)),R(t.getX(U+1)),R(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,f=new D,d=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){const _=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(f),l.add(f),c.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,d=o.normalized,u=new c.constructor(l.length*f);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*f;for(let h=0;h<f;h++)u[_++]=c[p++]}return new Dn(u,f,d)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const u=c[f],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];f.push(p.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(e))}const s=t.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new te,hi=new nr,Xr=new Ns,Al=new D,Yr=new D,qr=new D,jr=new D,fa=new D,$r=new D,wl=new D,Zr=new D;class ut extends Te{constructor(t=new Fe,e=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){$r.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(fa.fromBufferAttribute(d,t),a?$r.addScaledVector(fa,f):$r.addScaledVector(fa.sub(e),f))}e.add($r)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),hi.copy(t.ray).recast(t.near),!(Xr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Xr,Al)===null||hi.origin.distanceToSquared(Al)>(t.far-t.near)**2))&&(Tl.copy(s).invert(),hi.copy(t.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){const m=u[_],h=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,A=E;b<A;b+=3){const C=o.getX(b),R=o.getX(b+1),P=o.getX(b+2);r=Kr(this,h,t,n,c,f,d,C,R,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const S=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);r=Kr(this,a,t,n,c,f,d,S,E,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){const m=u[_],h=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,A=E;b<A;b+=3){const C=b,R=b+1,P=b+2;r=Kr(this,h,t,n,c,f,d,C,R,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const S=m,E=m+1,b=m+2;r=Kr(this,a,t,n,c,f,d,S,E,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function zu(i,t,e,n,r,s,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===ri,o),l===null)return null;Zr.copy(o),Zr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zr);return c<e.near||c>e.far?null:{distance:c,point:Zr.clone(),object:i}}function Kr(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Yr),i.getVertexPosition(l,qr),i.getVertexPosition(c,jr);const f=zu(i,t,e,n,Yr,qr,jr,wl);if(f){const d=new D;gn.getBarycoord(wl,Yr,qr,jr,d),r&&(f.uv=gn.getInterpolatedAttribute(r,o,l,c,d,new At)),s&&(f.uv1=gn.getInterpolatedAttribute(s,o,l,c,d,new At)),a&&(f.normal=gn.getInterpolatedAttribute(a,o,l,c,d,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};gn.getNormal(Yr,qr,jr,u.normal),f.face=u,f.barycoord=d}return f}class ve extends Fe{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let u=0,p=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(d,2));function _(x,m,h,S,E,b,A,C,R,P,g){const M=b/R,T=A/P,I=b/2,U=A/2,z=C/2,V=R+1,G=P+1;let N=0,Y=0;const J=new D;for(let et=0;et<G;et++){const it=et*T-U;for(let Dt=0;Dt<V;Dt++){const Lt=Dt*M-I;J[x]=Lt*S,J[m]=it*E,J[h]=z,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[h]=C>0?1:-1,f.push(J.x,J.y,J.z),d.push(Dt/R),d.push(1-et/P),N+=1}}for(let et=0;et<P;et++)for(let it=0;it<R;it++){const Dt=u+it+V*et,Lt=u+it+V*(et+1),Kt=u+(it+1)+V*(et+1),ee=u+(it+1)+V*et;l.push(Dt,Lt,ee),l.push(Lt,Kt,ee),Y+=6}o.addGroup(p,Y,g),p+=Y,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=Qi(i[e]);for(const r in n)t[r]=n[r]}return t}function ku(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $c(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Vu={clone:Qi,merge:Ye};var Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zc extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new D,Rl=new At,Cl=new At;class fn extends Zc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,Rl,Cl),e.subVectors(Cl,Rl)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class Wu extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(Bi,zi,t,e);r.layers=this.layers,this.add(r);const s=new fn(Bi,zi,t,e);s.layers=this.layers,this.add(s);const a=new fn(Bi,zi,t,e);a.layers=this.layers,this.add(a);const o=new fn(Bi,zi,t,e);o.layers=this.layers,this.add(o);const l=new fn(Bi,zi,t,e);l.layers=this.layers,this.add(l);const c=new fn(Bi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(d,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Kc extends qe{constructor(t=[],e=yi,n,r,s,a,o,l,c,f){super(t,e,n,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jc extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Kc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ve(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Gn});s.uniforms.tEquirect.value=e;const a=new ut(r,s),o=e.minFilter;return e.minFilter===vi&&(e.minFilter=be),new Wu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class gr extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xu={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Yu extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qu extends qe{constructor(t=null,e=1,n=1,r,s,a,o,l,c=Ce,f=Ce,d,u){super(null,a,o,l,c,f,r,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pa=new D,ju=new D,$u=new Nt;class ei{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=pa.subVectors(n,e).cross(ju.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$u.getNormalMatrix(t),r=this.coplanarPoint(pa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Ns,Zu=new At(.5,.5),Jr=new D;class ko{constructor(t=new ei,e=new ei,n=new ei,r=new ei,s=new ei,a=new ei){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],d=s[5],u=s[6],p=s[7],_=s[8],x=s[9],m=s[10],h=s[11],S=s[12],E=s[13],b=s[14],A=s[15];if(r[0].setComponents(c-a,p-f,h-_,A-S).normalize(),r[1].setComponents(c+a,p+f,h+_,A+S).normalize(),r[2].setComponents(c+o,p+d,h+x,A+E).normalize(),r[3].setComponents(c-o,p-d,h-x,A-E).normalize(),n)r[4].setComponents(l,u,m,b).normalize(),r[5].setComponents(c-l,p-u,h-m,A-b).normalize();else if(r[4].setComponents(c-l,p-u,h-m,A-b).normalize(),e===Rn)r[5].setComponents(c+l,p+u,h+m,A+b).normalize();else if(e===Ts)r[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){ui.center.set(0,0,0);const e=Zu.distanceTo(t.center);return ui.radius=.7071067811865476+e,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Jr.x=r.normal.x>0?t.max.x:t.min.x,Jr.y=r.normal.y>0?t.max.y:t.min.y,Jr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qc extends ir{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ws=new D,Rs=new D,Pl=new te,ur=new nr,Qr=new Ns,ma=new D,Dl=new D;class Qn extends Te{constructor(t=new Fe,e=new Qc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ws.fromBufferAttribute(e,r-1),Rs.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ws.distanceTo(Rs);t.setAttribute("lineDistance",new pe(n,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Qr.radius+=s,t.ray.intersectsSphere(Qr)===!1)return;Pl.copy(r).invert(),ur.copy(t.ray).applyMatrix4(Pl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,u=n.attributes.position;if(f!==null){const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=c){const h=f.getX(x),S=f.getX(x+1),E=ts(this,t,ur,l,h,S,x);E&&e.push(E)}if(this.isLineLoop){const x=f.getX(_-1),m=f.getX(p),h=ts(this,t,ur,l,x,m,_-1);h&&e.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=c){const h=ts(this,t,ur,l,x,x+1,x);h&&e.push(h)}if(this.isLineLoop){const x=ts(this,t,ur,l,_-1,p,_-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ts(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(ws.fromBufferAttribute(o,r),Rs.fromBufferAttribute(o,s),e.distanceSqToSegment(ws,Rs,ma,Dl)>n)return;ma.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ma);if(!(c<t.near||c>t.far))return{distance:c,point:Dl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class wr extends qe{constructor(t,e,n=In,r,s,a,o=Ce,l=Ce,c,f=Xn,d=1){if(f!==Xn&&f!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,r,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ku extends wr{constructor(t,e=In,n=yi,r,s,a=Ce,o=Ce,l,c=Xn){const f={width:t,height:t,depth:1},d=[f,f,f,f,f,f];super(t,t,e,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class th extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ke extends Fe{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],u=[],p=[];let _=0;const x=[],m=n/2;let h=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(p,2));function S(){const b=new D,A=new D;let C=0;const R=(e-t)/n;for(let P=0;P<=s;P++){const g=[],M=P/s,T=M*(e-t)+t;for(let I=0;I<=r;I++){const U=I/r,z=U*l+o,V=Math.sin(z),G=Math.cos(z);A.x=T*V,A.y=-M*n+m,A.z=T*G,d.push(A.x,A.y,A.z),b.set(V,R,G).normalize(),u.push(b.x,b.y,b.z),p.push(U,1-M),g.push(_++)}x.push(g)}for(let P=0;P<r;P++)for(let g=0;g<s;g++){const M=x[g][P],T=x[g+1][P],I=x[g+1][P+1],U=x[g][P+1];(t>0||g!==0)&&(f.push(M,T,U),C+=3),(e>0||g!==s-1)&&(f.push(T,I,U),C+=3)}c.addGroup(h,C,0),h+=C}function E(b){const A=_,C=new At,R=new D;let P=0;const g=b===!0?t:e,M=b===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),_++;const T=_;for(let I=0;I<=r;I++){const z=I/r*l+o,V=Math.cos(z),G=Math.sin(z);R.x=g*G,R.y=m*M,R.z=g*V,d.push(R.x,R.y,R.z),u.push(0,M,0),C.x=V*.5+.5,C.y=G*.5*M+.5,p.push(C.x,C.y),_++}for(let I=0;I<r;I++){const U=A+I,z=T+I;b===!0?f.push(z,z+1,U):f.push(z+1,z,U),P+=3}c.addGroup(h,P,b===!0?1:2),h+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vo extends Fe{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),c(n),f(),this.setAttribute("position",new pe(s,3)),this.setAttribute("normal",new pe(s.slice(),3)),this.setAttribute("uv",new pe(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new D,b=new D,A=new D;for(let C=0;C<e.length;C+=3)p(e[C+0],E),p(e[C+1],b),p(e[C+2],A),l(E,b,A,S)}function l(S,E,b,A){const C=A+1,R=[];for(let P=0;P<=C;P++){R[P]=[];const g=S.clone().lerp(b,P/C),M=E.clone().lerp(b,P/C),T=C-P;for(let I=0;I<=T;I++)I===0&&P===C?R[P][I]=g:R[P][I]=g.clone().lerp(M,I/T)}for(let P=0;P<C;P++)for(let g=0;g<2*(C-P)-1;g++){const M=Math.floor(g/2);g%2===0?(u(R[P][M+1]),u(R[P+1][M]),u(R[P][M])):(u(R[P][M+1]),u(R[P+1][M+1]),u(R[P+1][M]))}}function c(S){const E=new D;for(let b=0;b<s.length;b+=3)E.x=s[b+0],E.y=s[b+1],E.z=s[b+2],E.normalize().multiplyScalar(S),s[b+0]=E.x,s[b+1]=E.y,s[b+2]=E.z}function f(){const S=new D;for(let E=0;E<s.length;E+=3){S.x=s[E+0],S.y=s[E+1],S.z=s[E+2];const b=m(S)/2/Math.PI+.5,A=h(S)/Math.PI+.5;a.push(b,1-A)}_(),d()}function d(){for(let S=0;S<a.length;S+=6){const E=a[S+0],b=a[S+2],A=a[S+4],C=Math.max(E,b,A),R=Math.min(E,b,A);C>.9&&R<.1&&(E<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function u(S){s.push(S.x,S.y,S.z)}function p(S,E){const b=S*3;E.x=t[b+0],E.y=t[b+1],E.z=t[b+2]}function _(){const S=new D,E=new D,b=new D,A=new D,C=new At,R=new At,P=new At;for(let g=0,M=0;g<s.length;g+=9,M+=6){S.set(s[g+0],s[g+1],s[g+2]),E.set(s[g+3],s[g+4],s[g+5]),b.set(s[g+6],s[g+7],s[g+8]),C.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),A.copy(S).add(E).add(b).divideScalar(3);const T=m(A);x(C,M+0,S,T),x(R,M+2,E,T),x(P,M+4,b,T)}}function x(S,E,b,A){A<0&&S.x===1&&(a[E]=S.x-1),b.x===0&&b.z===0&&(a[E]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function h(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.vertices,t.indices,t.radius,t.detail)}}class Hi extends Vo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hi(t.radius,t.detail)}}class Ir extends Fe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,f=l+1,d=t/o,u=e/l,p=[],_=[],x=[],m=[];for(let h=0;h<f;h++){const S=h*u-a;for(let E=0;E<c;E++){const b=E*d-s;_.push(b,-S,0),x.push(0,0,1),m.push(E/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<o;S++){const E=S+c*h,b=S+c*(h+1),A=S+1+c*(h+1),C=S+1+c*h;p.push(E,b,C),p.push(b,A,C)}this.setIndex(p),this.setAttribute("position",new pe(_,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.width,t.height,t.widthSegments,t.heightSegments)}}class si extends Fe{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],d=new D,u=new D,p=[],_=[],x=[],m=[];for(let h=0;h<=n;h++){const S=[],E=h/n;let b=0;h===0&&a===0?b=.5/e:h===n&&l===Math.PI&&(b=-.5/e);for(let A=0;A<=e;A++){const C=A/e;d.x=-t*Math.cos(r+C*s)*Math.sin(a+E*o),d.y=t*Math.cos(a+E*o),d.z=t*Math.sin(r+C*s)*Math.sin(a+E*o),_.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(C+b,1-E),S.push(c++)}f.push(S)}for(let h=0;h<n;h++)for(let S=0;S<e;S++){const E=f[h][S+1],b=f[h][S],A=f[h+1][S],C=f[h+1][S+1];(h!==0||a>0)&&p.push(E,b,C),(h!==n-1||l<Math.PI)&&p.push(b,A,C)}this.setIndex(p),this.setAttribute("position",new pe(_,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gi extends Fe{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],f=new D,d=new D,u=new D;for(let p=0;p<=n;p++)for(let _=0;_<=r;_++){const x=_/r*s,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),u.subVectors(d,f).normalize(),l.push(u.x,u.y,u.z),c.push(_/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,S=(r+1)*p+_;a.push(x,m,S),a.push(m,h,S)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ju extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Go extends ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qu extends ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tf extends ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ef extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const _a=new te,Il=new D,Ll=new D;class nf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Ge,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ll),e.updateMatrixWorld(),_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Os extends Zc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rf extends nf{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sf extends ef{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new rf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class af extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ul=new te;class Eo{constructor(t,e,n=0,r=1/0){this.ray=new nr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ul.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ul),this}intersectObject(t,e=!0,n=[]){return bo(t,this,n,e),n.sort(Nl),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)bo(t[r],this,n,e);return n.sort(Nl),n}}function Nl(i,t){return i.distance-t.distance}function bo(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)bo(s[a],t,e,!0)}}class Fl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class eh extends bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Pt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ol(i,t,e,n){const r=of(n);switch(e){case Vc:return i*t;case Io:return i*t/r.components*r.byteLength;case Lo:return i*t/r.components*r.byteLength;case Ki:return i*t*2/r.components*r.byteLength;case Uo:return i*t*2/r.components*r.byteLength;case Gc:return i*t*3/r.components*r.byteLength;case ln:return i*t*4/r.components*r.byteLength;case No:return i*t*4/r.components*r.byteLength;case hs:case us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fs:case ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case ja:case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mo:case _o:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xo:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Mo:case So:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function of(i){switch(i){case Ge:case Oc:return{byteLength:1,components:1};case br:case Bc:case Wn:return{byteLength:2,components:1};case Po:case Do:return{byteLength:2,components:4};case In:case Co:case wn:return{byteLength:4,components:1};case zc:case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nh(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function lf(i){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const f=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,f);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){const _=d[u],x=d[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){const x=d[p];i.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hf=`#ifdef USE_ALPHAHASH
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
#endif`,uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ef=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,If=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
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
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,td=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,od=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ld=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ud=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xd=`#if defined( USE_POINTS_UV )
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
#endif`,vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dd=`#ifdef USE_NORMALMAP
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
#endif`,Id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$d=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
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
#endif`,Jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ep=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,np=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ip=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,mp=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,gp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ep=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,bp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Tp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ap=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wp=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Rp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Dp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ip=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Lp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Np=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Fp=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Op=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,zp=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Vp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ft={alphahash_fragment:cf,alphahash_pars_fragment:hf,alphamap_fragment:uf,alphamap_pars_fragment:ff,alphatest_fragment:df,alphatest_pars_fragment:pf,aomap_fragment:mf,aomap_pars_fragment:_f,batching_pars_vertex:gf,batching_vertex:xf,begin_vertex:vf,beginnormal_vertex:Mf,bsdfs:Sf,iridescence_fragment:yf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:bf,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:wf,color_fragment:Rf,color_pars_fragment:Cf,color_pars_vertex:Pf,color_vertex:Df,common:If,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Nf,displacementmap_vertex:Ff,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:zf,colorspace_pars_fragment:kf,envmap_fragment:Vf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Hf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:ed,envmap_vertex:Xf,fog_vertex:Yf,fog_pars_vertex:qf,fog_fragment:jf,fog_pars_fragment:$f,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Jf,lights_lambert_pars_fragment:Qf,lights_pars_begin:td,lights_toon_fragment:nd,lights_toon_pars_fragment:id,lights_phong_fragment:rd,lights_phong_pars_fragment:sd,lights_physical_fragment:ad,lights_physical_pars_fragment:od,lights_fragment_begin:ld,lights_fragment_maps:cd,lights_fragment_end:hd,logdepthbuf_fragment:ud,logdepthbuf_pars_fragment:fd,logdepthbuf_pars_vertex:dd,logdepthbuf_vertex:pd,map_fragment:md,map_pars_fragment:_d,map_particle_fragment:gd,map_particle_pars_fragment:xd,metalnessmap_fragment:vd,metalnessmap_pars_fragment:Md,morphinstance_vertex:Sd,morphcolor_vertex:yd,morphnormal_vertex:Ed,morphtarget_pars_vertex:bd,morphtarget_vertex:Td,normal_fragment_begin:Ad,normal_fragment_maps:wd,normal_pars_fragment:Rd,normal_pars_vertex:Cd,normal_vertex:Pd,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Id,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Ud,iridescence_pars_fragment:Nd,opaque_fragment:Fd,packing:Od,premultiplied_alpha_fragment:Bd,project_vertex:zd,dithering_fragment:kd,dithering_pars_fragment:Vd,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:Hd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:Xd,shadowmap_vertex:Yd,shadowmask_pars_fragment:qd,skinbase_vertex:jd,skinning_pars_vertex:$d,skinning_vertex:Zd,skinnormal_vertex:Kd,specularmap_fragment:Jd,specularmap_pars_fragment:Qd,tonemapping_fragment:tp,tonemapping_pars_fragment:ep,transmission_fragment:np,transmission_pars_fragment:ip,uv_pars_fragment:rp,uv_pars_vertex:sp,uv_vertex:ap,worldpos_vertex:op,background_vert:lp,background_frag:cp,backgroundCube_vert:hp,backgroundCube_frag:up,cube_vert:fp,cube_frag:dp,depth_vert:pp,depth_frag:mp,distance_vert:_p,distance_frag:gp,equirect_vert:xp,equirect_frag:vp,linedashed_vert:Mp,linedashed_frag:Sp,meshbasic_vert:yp,meshbasic_frag:Ep,meshlambert_vert:bp,meshlambert_frag:Tp,meshmatcap_vert:Ap,meshmatcap_frag:wp,meshnormal_vert:Rp,meshnormal_frag:Cp,meshphong_vert:Pp,meshphong_frag:Dp,meshphysical_vert:Ip,meshphysical_frag:Lp,meshtoon_vert:Up,meshtoon_frag:Np,points_vert:Fp,points_frag:Op,shadow_vert:Bp,shadow_frag:zp,sprite_vert:kp,sprite_frag:Vp},ht={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ye([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ye([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ye([ht.points,ht.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ye([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ye([ht.common,ht.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ye([ht.sprite,ht.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distance:{uniforms:Ye([ht.common,ht.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distance_vert,fragmentShader:Ft.distance_frag},shadow:{uniforms:Ye([ht.lights,ht.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Tn.physical={uniforms:Ye([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const es={r:0,b:0,g:0},fi=new vn,Gp=new te;function Hp(i,t,e,n,r,s,a){const o=new Yt(0);let l=s===!0?0:1,c,f,d=null,u=0,p=null;function _(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function x(E){let b=!1;const A=_(E);A===null?h(o,l):A&&A.isColor&&(h(A,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){const A=_(b);A&&(A.isCubeTexture||A.mapping===Us)?(f===void 0&&(f=new ut(new ve(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Qi(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),fi.copy(b.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(fi)),f.material.toneMapped=Xt.getTransfer(A.colorSpace)!==se,(d!==A||u!==A.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,d=A,u=A.version,p=i.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ut(new Ir(2,2),new Mn({name:"BackgroundMaterial",uniforms:Qi(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(A.colorSpace)!==se,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,u=A.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,b){E.getRGB(es,$c(i)),n.buffers.color.setClear(es.r,es.g,es.b,b,a)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(o,l)},render:x,addToRenderList:m,dispose:S}}function Wp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(M,T,I,U,z){let V=!1;const G=d(U,I,T);s!==G&&(s=G,c(s.object)),V=p(M,U,I,z),V&&_(M,U,I,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(M,T,I,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function f(M){return i.deleteVertexArray(M)}function d(M,T,I){const U=I.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let V=z[T.id];V===void 0&&(V={},z[T.id]=V);let G=V[U];return G===void 0&&(G=u(l()),V[U]=G),G}function u(M){const T=[],I=[],U=[];for(let z=0;z<e;z++)T[z]=0,I[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:U,object:M,attributes:{},index:null}}function p(M,T,I,U){const z=s.attributes,V=T.attributes;let G=0;const N=I.getAttributes();for(const Y in N)if(N[Y].location>=0){const et=z[Y];let it=V[Y];if(it===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),et===void 0||et.attribute!==it||it&&et.data!==it.data)return!0;G++}return s.attributesNum!==G||s.index!==U}function _(M,T,I,U){const z={},V=T.attributes;let G=0;const N=I.getAttributes();for(const Y in N)if(N[Y].location>=0){let et=V[Y];et===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));const it={};it.attribute=et,et&&et.data&&(it.data=et.data),z[Y]=it,G++}s.attributes=z,s.attributesNum=G,s.index=U}function x(){const M=s.newAttributes;for(let T=0,I=M.length;T<I;T++)M[T]=0}function m(M){h(M,0)}function h(M,T){const I=s.newAttributes,U=s.enabledAttributes,z=s.attributeDivisors;I[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),z[M]!==T&&(i.vertexAttribDivisor(M,T),z[M]=T)}function S(){const M=s.newAttributes,T=s.enabledAttributes;for(let I=0,U=T.length;I<U;I++)T[I]!==M[I]&&(i.disableVertexAttribArray(I),T[I]=0)}function E(M,T,I,U,z,V,G){G===!0?i.vertexAttribIPointer(M,T,I,z,V):i.vertexAttribPointer(M,T,I,U,z,V)}function b(M,T,I,U){x();const z=U.attributes,V=I.getAttributes(),G=T.defaultAttributeValues;for(const N in V){const Y=V[N];if(Y.location>=0){let J=z[N];if(J===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const et=J.normalized,it=J.itemSize,Dt=t.get(J);if(Dt===void 0)continue;const Lt=Dt.buffer,Kt=Dt.type,ee=Dt.bytesPerElement,j=Kt===i.INT||Kt===i.UNSIGNED_INT||J.gpuType===Co;if(J.isInterleavedBufferAttribute){const K=J.data,rt=K.stride,Ut=J.offset;if(K.isInstancedInterleavedBuffer){for(let xt=0;xt<Y.locationSize;xt++)h(Y.location+xt,K.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xt=0;xt<Y.locationSize;xt++)m(Y.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let xt=0;xt<Y.locationSize;xt++)E(Y.location+xt,it/Y.locationSize,Kt,et,rt*ee,(Ut+it/Y.locationSize*xt)*ee,j)}else{if(J.isInstancedBufferAttribute){for(let K=0;K<Y.locationSize;K++)h(Y.location+K,J.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let K=0;K<Y.locationSize;K++)m(Y.location+K);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let K=0;K<Y.locationSize;K++)E(Y.location+K,it/Y.locationSize,Kt,et,it*ee,it/Y.locationSize*K*ee,j)}}else if(G!==void 0){const et=G[N];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(Y.location,et);break;case 3:i.vertexAttrib3fv(Y.location,et);break;case 4:i.vertexAttrib4fv(Y.location,et);break;default:i.vertexAttrib1fv(Y.location,et)}}}}S()}function A(){P();for(const M in n){const T=n[M];for(const I in T){const U=T[I];for(const z in U)f(U[z].object),delete U[z];delete T[I]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const T=n[M.id];for(const I in T){const U=T[I];for(const z in U)f(U[z].object),delete U[z];delete T[I]}delete n[M.id]}function R(M){for(const T in n){const I=n[T];if(I[M.id]===void 0)continue;const U=I[M.id];for(const z in U)f(U[z].object),delete U[z];delete I[M.id]}}function P(){g(),a=!0,s!==r&&(s=r,c(s.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:g,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Xp(i,t,e){let n;function r(c){n=c}function s(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function a(c,f,d){d!==0&&(i.drawArraysInstanced(n,c,f,d),e.update(f,n,d))}function o(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=f[_];e.update(p,n,1)}function l(c,f,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],f[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,f,0,u,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x]*u[x];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ge&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wn&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(Pt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:b,maxSamples:A,samples:C}}function qp(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ei,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||r;return r=u,n=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=f(d,u,0)},this.setState=function(d,u,p){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const S=s?0:n,E=S*4;let b=h.clippingState||null;l.value=b,b=f(_,u,E,p);for(let A=0;A!==E;++A)b[A]=e[A];h.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(d,u,p,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,b=p;E!==x;++E,b+=4)a.copy(d[E]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function jp(i){let t=new WeakMap;function e(a,o){return o===za?a.mapping=yi:o===ka&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===za||o===ka)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Jc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const ii=4,Bl=[.125,.215,.35,.446,.526,.582],xi=20,$p=256,fr=new Os,zl=new Yt;let ga=null,xa=0,va=0,Ma=!1;const Zp=new D;class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=Zp}=s;ga=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,xa,va),this._renderer.xr.enabled=Ma,t.scissorTest=!1,ki(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:be,minFilter:be,generateMipmaps:!1,type:Wn,format:ln,colorSpace:Ji,depthBuffer:!1},r=Vl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Kp(s)),this._blurMaterial=Qp(s,t,e),this._ggxMaterial=Jp(s,t,e)}return r}_compileMaterial(t){const e=new ut(new Fe,t);this._renderer.compile(e,fr)}_sceneToCubeUV(t,e,n,r,s){const l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(zl),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new ve,new Fs({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let h=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,h=!0):(m.color.copy(zl),h=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[E],s.y,s.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[E]));const A=this._cubeSize;ki(r,b*A,E>2?A:0,A,A),d.setRenderTarget(r),h&&d.render(x,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===yi||t.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ki(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),u=0+c*1.25,p=d*u,{_lodMax:_}=this,x=this._sizeLods[n],m=3*x*(n>_-ii?n-_+ii:0),h=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-e,ki(s,m,h,3*x,2*x),r.setRenderTarget(s),r.render(o,fr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,ki(t,m,h,3*x,2*x),r.setRenderTarget(t),r.render(o,fr)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xi-1),x=s/_,m=isFinite(s)?1+Math.floor(f*x):xi;m>xi&&Pt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const h=[];let S=0;for(let R=0;R<xi;++R){const P=R/x,g=Math.exp(-P*P/2);h.push(g),R===0?S+=g:R<m&&(S+=2*g)}for(let R=0;R<h.length;R++)h[R]=h[R]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=_,u.mipInt.value=E-n;const b=this._sizeLods[r],A=3*b*(r>E-ii?r-E+ii:0),C=4*(this._cubeSize-b);ki(e,A,C,3*b,2*b),l.setRenderTarget(e),l.render(d,fr)}}function Kp(i){const t=[],e=[],n=[];let r=i;const s=i-ii+1+Bl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ii?l=Bl[a-i+ii-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,x=3,m=2,h=1,S=new Float32Array(x*_*p),E=new Float32Array(m*_*p),b=new Float32Array(h*_*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,P=C>2?0:-1,g=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];S.set(g,x*_*C),E.set(u,m*_*C);const M=[C,C,C,C,C,C];b.set(M,h*_*C)}const A=new Fe;A.setAttribute("position",new Dn(S,x)),A.setAttribute("uv",new Dn(E,m)),A.setAttribute("faceIndex",new Dn(b,h)),n.push(new ut(A,null)),r>ii&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Vl(i,t,e){const n=new Pn(i,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ki(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Jp(i,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$p,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Qp(i,t,e){const n=new Float32Array(xi),r=new D(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Gl(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Hl(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Bs(){return`

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
	`}function tm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===za||l===ka,f=l===yi||l===Zi;if(c||f){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new kl(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||f&&p&&r(p)?(e===null&&(e=new kl(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function em(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ar("WebGLRenderer: "+n+" extension not supported."),r}}}function nm(i,t,e,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const S=p.array;x=p.version;for(let E=0,b=S.length;E<b;E+=3){const A=S[E+0],C=S[E+1],R=S[E+2];u.push(A,C,C,R,R,A)}}else if(_!==void 0){const S=_.array;x=_.version;for(let E=0,b=S.length/3-1;E<b;E+=3){const A=E+0,C=E+1,R=E+2;u.push(A,C,C,R,R,A)}}else return;const m=new(Wc(u)?jc:qc)(u,1);m.version=x;const h=s.get(d);h&&t.remove(h),s.set(d,m)}function f(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function im(i,t,e){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,s,u*a),e.update(p,n,1)}function c(u,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,u*a,_),e.update(p,n,_))}function f(u,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];e.update(m,n,1)}function d(u,p,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<u.length;h++)c(u[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,x,0,_);let h=0;for(let S=0;S<_;S++)h+=p[S]*x[S];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function rm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function sm(i,t,e){const n=new WeakMap,r=new _e;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let A=o.attributes.position.count*b,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*C*4*d),P=new Xc(R,A,C,d);P.type=wn,P.needsUpdate=!0;const g=b*4;for(let T=0;T<d;T++){const I=h[T],U=S[T],z=E[T],V=A*C*4*T;for(let G=0;G<I.count;G++){const N=G*g;_===!0&&(r.fromBufferAttribute(I,G),R[V+N+0]=r.x,R[V+N+1]=r.y,R[V+N+2]=r.z,R[V+N+3]=0),x===!0&&(r.fromBufferAttribute(U,G),R[V+N+4]=r.x,R[V+N+5]=r.y,R[V+N+6]=r.z,R[V+N+7]=0),m===!0&&(r.fromBufferAttribute(z,G),R[V+N+8]=r.x,R[V+N+9]=r.y,R[V+N+10]=r.z,R[V+N+11]=z.itemSize===4?r.w:1)}}u={count:d,texture:P,size:new At(A,C)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function am(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const om={[Cc]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[Ic]:"ACES_FILMIC_TONE_MAPPING",[Uc]:"AGX_TONE_MAPPING",[Nc]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function lm(i,t,e,n,r){const s=new Pn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new Pn(t,e,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),o=new Fe;o.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new pe([0,2,0,0,2,0],2));const l=new Ju({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ut(o,l),f=new Os(-1,1,1,-1,0,1);let d=null,u=null,p=!1,_,x=null,m=[],h=!1;this.setSize=function(S,E){s.setSize(S,E),a.setSize(S,E);for(let b=0;b<m.length;b++){const A=m[b];A.setSize&&A.setSize(S,E)}},this.setEffects=function(S){m=S,h=m.length>0&&m[0].isRenderPass===!0;const E=s.width,b=s.height;for(let A=0;A<m.length;A++){const C=m[A];C.setSize&&C.setSize(E,b)}},this.begin=function(S,E){if(p||S.toneMapping===Cn&&m.length===0)return!1;if(x=E,E!==null){const b=E.width,A=E.height;(s.width!==b||s.height!==A)&&this.setSize(b,A)}return h===!1&&S.setRenderTarget(s),_=S.toneMapping,S.toneMapping=Cn,!0},this.hasRenderPass=function(){return h},this.end=function(S,E){S.toneMapping=_,p=!0;let b=s,A=a;for(let C=0;C<m.length;C++){const R=m[C];if(R.enabled!==!1&&(R.render(S,A,b,E),R.needsSwap!==!1)){const P=b;b=A,A=P}}if(d!==S.outputColorSpace||u!==S.toneMapping){d=S.outputColorSpace,u=S.toneMapping,l.defines={},Xt.getTransfer(d)===se&&(l.defines.SRGB_TRANSFER="");const C=om[u];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(x),S.render(c,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const ih=new qe,To=new wr(1,1),rh=new Xc,sh=new ms,ah=new Kc,Wl=[],Xl=[],Yl=new Float32Array(16),ql=new Float32Array(9),jl=new Float32Array(4);function rr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Wl[r];if(s===void 0&&(s=new Float32Array(r),Wl[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zs(i,t){let e=Xl[t];e===void 0&&(e=new Int32Array(t),Xl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),De(e,n)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;ql.set(n),i.uniformMatrix3fv(this.addr,!1,ql),De(e,n)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;Yl.set(n),i.uniformMatrix4fv(this.addr,!1,Yl),De(e,n)}}function _m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function bm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(To.compareFunction=e.isReversedDepthBuffer()?Oo:Fo,s=To):s=ih,e.setTexture2D(t||s,r)}function Tm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||sh,r)}function Am(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ah,r)}function wm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||rh,r)}function Rm(i){switch(i){case 5126:return cm;case 35664:return hm;case 35665:return um;case 35666:return fm;case 35674:return dm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return _m;case 35667:case 35671:return gm;case 35668:case 35672:return xm;case 35669:case 35673:return vm;case 5125:return Mm;case 36294:return Sm;case 36295:return ym;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return wm}}function Cm(i,t){i.uniform1fv(this.addr,t)}function Pm(i,t){const e=rr(t,this.size,2);i.uniform2fv(this.addr,e)}function Dm(i,t){const e=rr(t,this.size,3);i.uniform3fv(this.addr,e)}function Im(i,t){const e=rr(t,this.size,4);i.uniform4fv(this.addr,e)}function Lm(i,t){const e=rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Um(i,t){const e=rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nm(i,t){const e=rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fm(i,t){i.uniform1iv(this.addr,t)}function Om(i,t){i.uniform2iv(this.addr,t)}function Bm(i,t){i.uniform3iv(this.addr,t)}function zm(i,t){i.uniform4iv(this.addr,t)}function km(i,t){i.uniform1uiv(this.addr,t)}function Vm(i,t){i.uniform2uiv(this.addr,t)}function Gm(i,t){i.uniform3uiv(this.addr,t)}function Hm(i,t){i.uniform4uiv(this.addr,t)}function Wm(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Pe(n,s)||(i.uniform1iv(this.addr,s),De(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=To:a=ih;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function Xm(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Pe(n,s)||(i.uniform1iv(this.addr,s),De(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||sh,s[a])}function Ym(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Pe(n,s)||(i.uniform1iv(this.addr,s),De(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ah,s[a])}function qm(i,t,e){const n=this.cache,r=t.length,s=zs(e,r);Pe(n,s)||(i.uniform1iv(this.addr,s),De(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||rh,s[a])}function jm(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Dm;case 35666:return Im;case 35674:return Lm;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return km;case 36294:return Vm;case 36295:return Gm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return qm}}class $m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rm(e.type)}}class Zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jm(e.type)}}class Km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function $l(i,t){i.seq.push(t),i.map[t.id]=t}function Jm(i,t,e){const n=i.name,r=n.length;for(Sa.lastIndex=0;;){const s=Sa.exec(n),a=Sa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$l(e,c===void 0?new $m(o,i,t):new Zm(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Km(o),$l(e,d)),e=d}}}class _s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Jm(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Zl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qm=37297;let t_=0;function e_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Kl=new Nt;function n_(i){Xt._getMatrix(Kl,Xt.workingColorSpace,i);const t=`mat3( ${Kl.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case bs:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+e_(i.getShaderSource(t),o)}else return s}function i_(i,t){const e=n_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const r_={[Cc]:"Linear",[Pc]:"Reinhard",[Dc]:"Cineon",[Ic]:"ACESFilmic",[Uc]:"AgX",[Nc]:"Neutral",[Lc]:"Custom"};function s_(i,t){const e=r_[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ns=new D;function a_(){Xt.getLuminanceCoefficients(ns);const i=ns.x.toFixed(4),t=ns.y.toFixed(4),e=ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function l_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function xr(i){return i!==""}function Ql(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(i){return i.replace(h_,f_)}const u_=new Map;function f_(i,t){let e=Ft[t];if(e===void 0){const n=u_.get(t);if(n!==void 0)e=Ft[n],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ao(e)}const d_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(i){return i.replace(d_,p_)}function p_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const m_={[cs]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function __(i){return m_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g_={[yi]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE_UV"};function x_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":g_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const v_={[Zi]:"ENVMAP_MODE_REFRACTION"};function M_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":v_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S_={[Rc]:"ENVMAP_BLENDING_MULTIPLY",[cu]:"ENVMAP_BLENDING_MIX",[hu]:"ENVMAP_BLENDING_ADD"};function y_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":S_[i.combine]||"ENVMAP_BLENDING_NONE"}function E_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function b_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=__(e),c=x_(e),f=M_(e),d=y_(e),u=E_(e),p=o_(e),_=l_(s),x=r.createProgram();let m,h,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xr).join(`
`),h.length>0&&(h+=`
`)):(m=[nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),h=[nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Cn?s_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,i_("linearToOutputTexel",e.outputColorSpace),a_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),a=Ao(a),a=Ql(a,e),a=tc(a,e),o=Ao(o),o=Ql(o,e),o=tc(o,e),a=ec(a),o=ec(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=S+m+a,b=S+h+o,A=Zl(r,r.VERTEX_SHADER,E),C=Zl(r,r.FRAGMENT_SHADER,b);r.attachShader(x,A),r.attachShader(x,C),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(T){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(x)||"",U=r.getShaderInfoLog(A)||"",z=r.getShaderInfoLog(C)||"",V=I.trim(),G=U.trim(),N=z.trim();let Y=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,A,C);else{const et=Jl(r,A,"vertex"),it=Jl(r,C,"fragment");Wt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+V+`
`+et+`
`+it)}else V!==""?Pt("WebGLProgram: Program Info Log:",V):(G===""||N==="")&&(J=!1);J&&(T.diagnostics={runnable:Y,programLog:V,vertexShader:{log:G,prefix:m},fragmentShader:{log:N,prefix:h}})}r.deleteShader(A),r.deleteShader(C),P=new _s(r,x),g=c_(r,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let g;this.getAttributes=function(){return g===void 0&&R(this),g};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Qm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=C,this}let T_=0;class A_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new w_(t),e.set(t,n)),n}}class w_{constructor(t){this.id=T_++,this.code=t,this.usedTimes=0}}function R_(i,t,e,n,r,s,a){const o=new zo,l=new A_,c=new Set,f=[],d=new Map,u=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return c.add(g),g===0?"uv":`uv${g}`}function m(g,M,T,I,U){const z=I.fog,V=U.geometry,G=g.isMeshStandardMaterial?I.environment:null,N=(g.isMeshStandardMaterial?e:t).get(g.envMap||G),Y=N&&N.mapping===Us?N.image.height:null,J=_[g.type];g.precision!==null&&(p=r.getMaxPrecision(g.precision),p!==g.precision&&Pt("WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));const et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,it=et!==void 0?et.length:0;let Dt=0;V.morphAttributes.position!==void 0&&(Dt=1),V.morphAttributes.normal!==void 0&&(Dt=2),V.morphAttributes.color!==void 0&&(Dt=3);let Lt,Kt,ee,j;if(J){const ie=Tn[J];Lt=ie.vertexShader,Kt=ie.fragmentShader}else Lt=g.vertexShader,Kt=g.fragmentShader,l.update(g),ee=l.getVertexShaderID(g),j=l.getFragmentShaderID(g);const K=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),Ut=U.isInstancedMesh===!0,xt=U.isBatchedMesh===!0,qt=!!g.map,Le=!!g.matcap,Ht=!!N,ne=!!g.aoMap,le=!!g.lightMap,Ot=!!g.bumpMap,Se=!!g.normalMap,L=!!g.displacementMap,ye=!!g.emissiveMap,Jt=!!g.metalnessMap,ue=!!g.roughnessMap,Mt=g.anisotropy>0,w=g.clearcoat>0,v=g.dispersion>0,O=g.iridescence>0,q=g.sheen>0,Z=g.transmission>0,X=Mt&&!!g.anisotropyMap,yt=w&&!!g.clearcoatMap,at=w&&!!g.clearcoatNormalMap,vt=w&&!!g.clearcoatRoughnessMap,Ct=O&&!!g.iridescenceMap,tt=O&&!!g.iridescenceThicknessMap,lt=q&&!!g.sheenColorMap,gt=q&&!!g.sheenRoughnessMap,St=!!g.specularMap,ot=!!g.specularColorMap,Bt=!!g.specularIntensityMap,F=Z&&!!g.transmissionMap,dt=Z&&!!g.thicknessMap,nt=!!g.gradientMap,pt=!!g.alphaMap,Q=g.alphaTest>0,$=!!g.alphaHash,st=!!g.extensions;let It=Cn;g.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(It=i.toneMapping);const fe={shaderID:J,shaderType:g.type,shaderName:g.name,vertexShader:Lt,fragmentShader:Kt,defines:g.defines,customVertexShaderID:ee,customFragmentShaderID:j,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,batching:xt,batchingColor:xt&&U._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&U.instanceColor!==null,instancingMorph:Ut&&U.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ji,alphaToCoverage:!!g.alphaToCoverage,map:qt,matcap:Le,envMap:Ht,envMapMode:Ht&&N.mapping,envMapCubeUVHeight:Y,aoMap:ne,lightMap:le,bumpMap:Ot,normalMap:Se,displacementMap:L,emissiveMap:ye,normalMapObjectSpace:Se&&g.normalMapType===du,normalMapTangentSpace:Se&&g.normalMapType===Hc,metalnessMap:Jt,roughnessMap:ue,anisotropy:Mt,anisotropyMap:X,clearcoat:w,clearcoatMap:yt,clearcoatNormalMap:at,clearcoatRoughnessMap:vt,dispersion:v,iridescence:O,iridescenceMap:Ct,iridescenceThicknessMap:tt,sheen:q,sheenColorMap:lt,sheenRoughnessMap:gt,specularMap:St,specularColorMap:ot,specularIntensityMap:Bt,transmission:Z,transmissionMap:F,thicknessMap:dt,gradientMap:nt,opaque:g.transparent===!1&&g.blending===Xi&&g.alphaToCoverage===!1,alphaMap:pt,alphaTest:Q,alphaHash:$,combine:g.combine,mapUv:qt&&x(g.map.channel),aoMapUv:ne&&x(g.aoMap.channel),lightMapUv:le&&x(g.lightMap.channel),bumpMapUv:Ot&&x(g.bumpMap.channel),normalMapUv:Se&&x(g.normalMap.channel),displacementMapUv:L&&x(g.displacementMap.channel),emissiveMapUv:ye&&x(g.emissiveMap.channel),metalnessMapUv:Jt&&x(g.metalnessMap.channel),roughnessMapUv:ue&&x(g.roughnessMap.channel),anisotropyMapUv:X&&x(g.anisotropyMap.channel),clearcoatMapUv:yt&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:at&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(g.sheenRoughnessMap.channel),specularMapUv:St&&x(g.specularMap.channel),specularColorMapUv:ot&&x(g.specularColorMap.channel),specularIntensityMapUv:Bt&&x(g.specularIntensityMap.channel),transmissionMapUv:F&&x(g.transmissionMap.channel),thicknessMapUv:dt&&x(g.thicknessMap.channel),alphaMapUv:pt&&x(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Se||Mt),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(qt||pt),fog:!!z,useFog:g.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:rt,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:qt&&g.map.isVideoTexture===!0&&Xt.getTransfer(g.map.colorSpace)===se,decodeVideoTextureEmissive:ye&&g.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(g.emissiveMap.colorSpace)===se,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===An,flipSided:g.side===tn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:st&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&g.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function h(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const T in g.defines)M.push(T),M.push(g.defines[T]);return g.isRawShaderMaterial===!1&&(S(M,g),E(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function S(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function E(g,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),g.push(o.mask)}function b(g){const M=_[g.type];let T;if(M){const I=Tn[M];T=Vu.clone(I.uniforms)}else T=g.uniforms;return T}function A(g,M){let T=d.get(M);return T!==void 0?++T.usedTimes:(T=new b_(i,M,g,s),f.push(T),d.set(M,T)),T}function C(g){if(--g.usedTimes===0){const M=f.indexOf(g);f[M]=f[f.length-1],f.pop(),d.delete(g.cacheKey),g.destroy()}}function R(g){l.remove(g)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:A,releaseProgram:C,releaseShaderCache:R,programs:f,dispose:P}}function C_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function P_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ic(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,u,p,_,x,m){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:u,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},i[t]=h):(h.id=d.id,h.object=d,h.geometry=u,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=x,h.group=m),t++,h}function o(d,u,p,_,x,m){const h=a(d,u,p,_,x,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):e.push(h)}function l(d,u,p,_,x,m){const h=a(d,u,p,_,x,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function c(d,u){e.length>1&&e.sort(d||P_),n.length>1&&n.sort(u||ic),r.length>1&&r.sort(u||ic)}function f(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function D_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new rc,i.set(n,[a])):r>=s.length?(a=new rc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function I_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Yt};break;case"SpotLight":e={position:new D,direction:new D,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function L_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let U_=0;function N_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function F_(i){const t=new I_,e=L_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const r=new D,s=new te,a=new te;function o(c){let f=0,d=0,u=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,S=0,E=0,b=0,A=0,C=0,R=0;c.sort(N_);for(let g=0,M=c.length;g<M;g++){const T=c[g],I=T.color,U=T.intensity,z=T.distance;let V=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Ki?V=T.shadow.map.texture:V=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)f+=I.r*U,d+=I.g*U,u+=I.b*U;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],U);R++}else if(T.isDirectionalLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const N=T.shadow,Y=e.get(T);Y.shadowIntensity=N.intensity,Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=T.shadow.matrix,S++}n.directional[p]=G,p++}else if(T.isSpotLight){const G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(I).multiplyScalar(U),G.distance=z,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[x]=G;const N=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,N.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[x]=N.matrix,T.castShadow){const Y=e.get(T);Y.shadowIntensity=N.intensity,Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=V,b++}x++}else if(T.isRectAreaLight){const G=t.get(T);G.color.copy(I).multiplyScalar(U),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=G,m++}else if(T.isPointLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const N=T.shadow,Y=e.get(T);Y.shadowIntensity=N.intensity,Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,Y.shadowCameraNear=N.camera.near,Y.shadowCameraFar=N.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=V,n.pointShadowMatrix[_]=T.shadow.matrix,E++}n.point[_]=G,_++}else if(T.isHemisphereLight){const G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(U),G.groundColor.copy(T.groundColor).multiplyScalar(U),n.hemi[h]=G,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==b||P.numSpotMaps!==A||P.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,P.directionalLength=p,P.pointLength=_,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=b,P.numSpotMaps=A,P.numLightProbes=R,n.version=U_++)}function l(c,f){let d=0,u=0,p=0,_=0,x=0;const m=f.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const E=c[h];if(E.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(E.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function sc(i){const t=new F_(i),e=[],n=[];function r(f){c.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function o(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function O_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new sc(i),t.set(r,[o])):s>=a.length?(o=new sc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const B_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,k_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],V_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ac=new te,dr=new D,ya=new D;function G_(i,t,e){let n=new ko;const r=new At,s=new At,a=new _e,o=new Qu,l=new tf,c={},f=e.maxTextureSize,d={[ri]:tn,[tn]:ri,[An]:An},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:B_,fragmentShader:z_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Fe;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ut(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let h=this.type;this.render=function(C,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===Wh&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=cs);const g=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Gn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=h!==this.type;U&&R.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(V=>V.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,V=C.length;z<V;z++){const G=C[z],N=G.shadow;if(N===void 0){Pt("WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Y=N.getFrameExtents();if(r.multiply(Y),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,N.mapSize.y=s.y)),N.map===null||U===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===_r){if(G.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Pn(r.x,r.y,{format:Ki,type:Wn,minFilter:be,magFilter:be,generateMipmaps:!1}),N.map.texture.name=G.name+".shadowMap",N.map.depthTexture=new wr(r.x,r.y,wn),N.map.depthTexture.name=G.name+".shadowMapDepth",N.map.depthTexture.format=Xn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ce,N.map.depthTexture.magFilter=Ce}else{G.isPointLight?(N.map=new Jc(r.x),N.map.depthTexture=new Ku(r.x,In)):(N.map=new Pn(r.x,r.y),N.map.depthTexture=new wr(r.x,r.y,In)),N.map.depthTexture.name=G.name+".shadowMap",N.map.depthTexture.format=Xn;const et=i.state.buffers.depth.getReversed();this.type===cs?(N.map.depthTexture.compareFunction=et?Oo:Fo,N.map.depthTexture.minFilter=be,N.map.depthTexture.magFilter=be):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ce,N.map.depthTexture.magFilter=Ce)}N.camera.updateProjectionMatrix()}const J=N.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<J;et++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,et),i.clear();else{et===0&&(i.setRenderTarget(N.map),i.clear());const it=N.getViewport(et);a.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),I.viewport(a)}if(G.isPointLight){const it=N.camera,Dt=N.matrix,Lt=G.distance||it.far;Lt!==it.far&&(it.far=Lt,it.updateProjectionMatrix()),dr.setFromMatrixPosition(G.matrixWorld),it.position.copy(dr),ya.copy(it.position),ya.add(k_[et]),it.up.copy(V_[et]),it.lookAt(ya),it.updateMatrixWorld(),Dt.makeTranslation(-dr.x,-dr.y,-dr.z),ac.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),N._frustum.setFromProjectionMatrix(ac,it.coordinateSystem,it.reversedDepth)}else N.updateMatrices(G);n=N.getFrustum(),b(R,P,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===_r&&S(N,P),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(g,M,T)};function S(C,R){const P=t.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pn(r.x,r.y,{format:Ki,type:Wn})),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,P,u,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,P,p,x,null)}function E(C,R,P,g){let M=null;const T=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)M=T;else if(M=P.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=M.uuid,U=R.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let V=z[U];V===void 0&&(V=M.clone(),z[U]=V,R.addEventListener("dispose",A)),M=V}if(M.visible=R.visible,M.wireframe=R.wireframe,g===_r?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=P}return M}function b(C,R,P,g,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===_r)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const U=t.update(C),z=C.material;if(Array.isArray(z)){const V=U.groups;for(let G=0,N=V.length;G<N;G++){const Y=V[G],J=z[Y.materialIndex];if(J&&J.visible){const et=E(C,J,g,M);C.onBeforeShadow(i,C,R,P,U,et,Y),i.renderBufferDirect(P,null,U,et,C,Y),C.onAfterShadow(i,C,R,P,U,et,Y)}}}else if(z.visible){const V=E(C,z,g,M);C.onBeforeShadow(i,C,R,P,U,V,null),i.renderBufferDirect(P,null,U,V,C,null),C.onAfterShadow(i,C,R,P,U,V,null)}}const I=C.children;for(let U=0,z=I.length;U<z;U++)b(I[U],R,P,g,M)}function A(C){C.target.removeEventListener("dispose",A);for(const P in c){const g=c[P],M=C.target.uuid;M in g&&(g[M].dispose(),delete g[M])}}}const H_={[Ia]:La,[Ua]:Oa,[Na]:Ba,[$i]:Fa,[La]:Ia,[Oa]:Ua,[Ba]:Na,[Fa]:$i};function W_(i,t){function e(){let F=!1;const dt=new _e;let nt=null;const pt=new _e(0,0,0,0);return{setMask:function(Q){nt!==Q&&!F&&(i.colorMask(Q,Q,Q,Q),nt=Q)},setLocked:function(Q){F=Q},setClear:function(Q,$,st,It,fe){fe===!0&&(Q*=It,$*=It,st*=It),dt.set(Q,$,st,It),pt.equals(dt)===!1&&(i.clearColor(Q,$,st,It),pt.copy(dt))},reset:function(){F=!1,nt=null,pt.set(-1,0,0,0)}}}function n(){let F=!1,dt=!1,nt=null,pt=null,Q=null;return{setReversed:function($){if(dt!==$){const st=t.get("EXT_clip_control");$?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),dt=$;const It=Q;Q=null,this.setClear(It)}},getReversed:function(){return dt},setTest:function($){$?K(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function($){nt!==$&&!F&&(i.depthMask($),nt=$)},setFunc:function($){if(dt&&($=H_[$]),pt!==$){switch($){case Ia:i.depthFunc(i.NEVER);break;case La:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case Na:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=$}},setLocked:function($){F=$},setClear:function($){Q!==$&&(dt&&($=1-$),i.clearDepth($),Q=$)},reset:function(){F=!1,nt=null,pt=null,Q=null,dt=!1}}}function r(){let F=!1,dt=null,nt=null,pt=null,Q=null,$=null,st=null,It=null,fe=null;return{setTest:function(ie){F||(ie?K(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(ie){dt!==ie&&!F&&(i.stencilMask(ie),dt=ie)},setFunc:function(ie,Sn,Ln){(nt!==ie||pt!==Sn||Q!==Ln)&&(i.stencilFunc(ie,Sn,Ln),nt=ie,pt=Sn,Q=Ln)},setOp:function(ie,Sn,Ln){($!==ie||st!==Sn||It!==Ln)&&(i.stencilOp(ie,Sn,Ln),$=ie,st=Sn,It=Ln)},setLocked:function(ie){F=ie},setClear:function(ie){fe!==ie&&(i.clearStencil(ie),fe=ie)},reset:function(){F=!1,dt=null,nt=null,pt=null,Q=null,$=null,st=null,It=null,fe=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let f={},d={},u=new WeakMap,p=[],_=null,x=!1,m=null,h=null,S=null,E=null,b=null,A=null,C=null,R=new Yt(0,0,0),P=0,g=!1,M=null,T=null,I=null,U=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,N=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=N>=1):Y.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=N>=2);let J=null,et={};const it=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Lt=new _e().fromArray(it),Kt=new _e().fromArray(Dt);function ee(F,dt,nt,pt){const Q=new Uint8Array(4),$=i.createTexture();i.bindTexture(F,$),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<nt;st++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(dt+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return $}const j={};j[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc($i),Ot(!1),Se(sl),K(i.CULL_FACE),ne(Gn);function K(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function rt(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function Ut(F,dt){return d[F]!==dt?(i.bindFramebuffer(F,dt),d[F]=dt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function xt(F,dt){let nt=p,pt=!1;if(F){nt=u.get(dt),nt===void 0&&(nt=[],u.set(dt,nt));const Q=F.textures;if(nt.length!==Q.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let $=0,st=Q.length;$<st;$++)nt[$]=i.COLOR_ATTACHMENT0+$;nt.length=Q.length,pt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(nt)}function qt(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const Le={[_i]:i.FUNC_ADD,[Yh]:i.FUNC_SUBTRACT,[qh]:i.FUNC_REVERSE_SUBTRACT};Le[jh]=i.MIN,Le[$h]=i.MAX;const Ht={[Zh]:i.ZERO,[Kh]:i.ONE,[Jh]:i.SRC_COLOR,[Pa]:i.SRC_ALPHA,[ru]:i.SRC_ALPHA_SATURATE,[nu]:i.DST_COLOR,[tu]:i.DST_ALPHA,[Qh]:i.ONE_MINUS_SRC_COLOR,[Da]:i.ONE_MINUS_SRC_ALPHA,[iu]:i.ONE_MINUS_DST_COLOR,[eu]:i.ONE_MINUS_DST_ALPHA,[su]:i.CONSTANT_COLOR,[au]:i.ONE_MINUS_CONSTANT_COLOR,[ou]:i.CONSTANT_ALPHA,[lu]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(F,dt,nt,pt,Q,$,st,It,fe,ie){if(F===Gn){x===!0&&(rt(i.BLEND),x=!1);return}if(x===!1&&(K(i.BLEND),x=!0),F!==Xh){if(F!==m||ie!==g){if((h!==_i||b!==_i)&&(i.blendEquation(i.FUNC_ADD),h=_i,b=_i),ie)switch(F){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFunc(i.ONE,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Wt("WebGLState: Invalid blending: ",F);break}else switch(F){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ol:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ll:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",F);break}S=null,E=null,A=null,C=null,R.set(0,0,0),P=0,m=F,g=ie}return}Q=Q||dt,$=$||nt,st=st||pt,(dt!==h||Q!==b)&&(i.blendEquationSeparate(Le[dt],Le[Q]),h=dt,b=Q),(nt!==S||pt!==E||$!==A||st!==C)&&(i.blendFuncSeparate(Ht[nt],Ht[pt],Ht[$],Ht[st]),S=nt,E=pt,A=$,C=st),(It.equals(R)===!1||fe!==P)&&(i.blendColor(It.r,It.g,It.b,fe),R.copy(It),P=fe),m=F,g=!1}function le(F,dt){F.side===An?rt(i.CULL_FACE):K(i.CULL_FACE);let nt=F.side===tn;dt&&(nt=!nt),Ot(nt),F.blending===Xi&&F.transparent===!1?ne(Gn):ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const pt=F.stencilWrite;o.setTest(pt),pt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ye(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function Se(F){F!==Gh?(K(i.CULL_FACE),F!==T&&(F===sl?i.cullFace(i.BACK):F===Hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),T=F}function L(F){F!==I&&(G&&i.lineWidth(F),I=F)}function ye(F,dt,nt){F?(K(i.POLYGON_OFFSET_FILL),(U!==dt||z!==nt)&&(i.polygonOffset(dt,nt),U=dt,z=nt)):rt(i.POLYGON_OFFSET_FILL)}function Jt(F){F?K(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function ue(F){F===void 0&&(F=i.TEXTURE0+V-1),J!==F&&(i.activeTexture(F),J=F)}function Mt(F,dt,nt){nt===void 0&&(J===null?nt=i.TEXTURE0+V-1:nt=J);let pt=et[nt];pt===void 0&&(pt={type:void 0,texture:void 0},et[nt]=pt),(pt.type!==F||pt.texture!==dt)&&(J!==nt&&(i.activeTexture(nt),J=nt),i.bindTexture(F,dt||j[F]),pt.type=F,pt.texture=dt)}function w(){const F=et[J];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function q(){try{i.texSubImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function Z(){try{i.texSubImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function yt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function at(){try{i.texStorage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function vt(){try{i.texStorage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function Ct(){try{i.texImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function tt(){try{i.texImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function lt(F){Lt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Lt.copy(F))}function gt(F){Kt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Kt.copy(F))}function St(F,dt){let nt=c.get(dt);nt===void 0&&(nt=new WeakMap,c.set(dt,nt));let pt=nt.get(F);pt===void 0&&(pt=i.getUniformBlockIndex(dt,F.name),nt.set(F,pt))}function ot(F,dt){const pt=c.get(dt).get(F);l.get(dt)!==pt&&(i.uniformBlockBinding(dt,pt,F.__bindingPointIndex),l.set(dt,pt))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},J=null,et={},d={},u=new WeakMap,p=[],_=null,x=!1,m=null,h=null,S=null,E=null,b=null,A=null,C=null,R=new Yt(0,0,0),P=0,g=!1,M=null,T=null,I=null,U=null,z=null,Lt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:rt,bindFramebuffer:Ut,drawBuffers:xt,useProgram:qt,setBlending:ne,setMaterial:le,setFlipSided:Ot,setCullFace:Se,setLineWidth:L,setPolygonOffset:ye,setScissorTest:Jt,activeTexture:ue,bindTexture:Mt,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Ct,texImage3D:tt,updateUBOMapping:St,uniformBlockBinding:ot,texStorage2D:at,texStorage3D:vt,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:yt,scissor:lt,viewport:gt,reset:Bt}}function X_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,f=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return p?new OffscreenCanvas(w,v):As("canvas")}function x(w,v,O){let q=1;const Z=Mt(w);if((Z.width>O||Z.height>O)&&(q=O/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(q*Z.width),yt=Math.floor(q*Z.height);d===void 0&&(d=_(X,yt));const at=v?_(X,yt):d;return at.width=X,at.height=yt,at.getContext("2d").drawImage(w,0,0,X,yt),Pt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+yt+")."),at}else return"data"in w&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function m(w){return w.generateMipmaps}function h(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,v,O,q,Z=!1){if(w!==null){if(i[w]!==void 0)return i[w];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=v;if(v===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),v===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){const yt=Z?bs:Xt.getTransfer(q);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=yt===se?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function b(w,v){let O;return w?v===null||v===In||v===Tr?O=i.DEPTH24_STENCIL8:v===wn?O=i.DEPTH32F_STENCIL8:v===br&&(O=i.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===In||v===Tr?O=i.DEPTH_COMPONENT24:v===wn?O=i.DEPTH_COMPONENT32F:v===br&&(O=i.DEPTH_COMPONENT16),O}function A(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ce&&w.minFilter!==be?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){const v=w.target;v.removeEventListener("dispose",C),P(v),v.isVideoTexture&&f.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),M(v)}function P(w){const v=n.get(w);if(v.__webglInit===void 0)return;const O=w.source,q=u.get(O);if(q){const Z=q[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&g(w),Object.keys(q).length===0&&u.delete(O)}n.remove(w)}function g(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const O=w.source,q=u.get(O);delete q[v.__cacheKey],a.memory.textures--}function M(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let Z=0;Z<v.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=w.textures;for(let q=0,Z=O.length;q<Z;q++){const X=n.get(O[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(w)}let T=0;function I(){T=0}function U(){const w=T;return w>=r.maxTextures&&Pt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),T+=1,w}function z(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function V(w,v){const O=n.get(w);if(w.isVideoTexture&&Jt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const q=w.image;if(q===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,w,v);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function G(w,v){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,v);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function N(w,v){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function Y(w,v){const O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){K(O,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const J={[Va]:i.REPEAT,[Ne]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},et={[Ce]:i.NEAREST,[uu]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[be]:i.LINEAR,[Xs]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},it={[pu]:i.NEVER,[vu]:i.ALWAYS,[mu]:i.LESS,[Fo]:i.LEQUAL,[_u]:i.EQUAL,[Oo]:i.GEQUAL,[gu]:i.GREATER,[xu]:i.NOTEQUAL};function Dt(w,v){if(v.type===wn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===be||v.magFilter===Xs||v.magFilter===Nr||v.magFilter===vi||v.minFilter===be||v.minFilter===Xs||v.minFilter===Nr||v.minFilter===vi)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,J[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,J[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,J[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,et[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,et[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,it[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ce||v.minFilter!==Nr&&v.minFilter!==vi||v.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Lt(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));const q=v.source;let Z=u.get(q);Z===void 0&&(Z={},u.set(q,Z));const X=z(v);if(X!==w.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[X].usedTimes++;const yt=Z[w.__cacheKey];yt!==void 0&&(Z[w.__cacheKey].usedTimes--,yt.usedTimes===0&&g(v)),w.__cacheKey=X,w.__webglTexture=Z[X].texture}return O}function Kt(w,v,O){return Math.floor(Math.floor(w/O)/v)}function ee(w,v,O,q){const X=w.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,q,v.data);else{X.sort((tt,lt)=>tt.start-lt.start);let yt=0;for(let tt=1;tt<X.length;tt++){const lt=X[yt],gt=X[tt],St=lt.start+lt.count,ot=Kt(gt.start,v.width,4),Bt=Kt(lt.start,v.width,4);gt.start<=St+1&&ot===Bt&&Kt(gt.start+gt.count-1,v.width,4)===ot?lt.count=Math.max(lt.count,gt.start+gt.count-lt.start):(++yt,X[yt]=gt)}X.length=yt+1;const at=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ct=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let tt=0,lt=X.length;tt<lt;tt++){const gt=X[tt],St=Math.floor(gt.start/4),ot=Math.ceil(gt.count/4),Bt=St%v.width,F=Math.floor(St/v.width),dt=ot,nt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Bt,F,dt,nt,O,q,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,at),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function j(w,v,O){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);const Z=Lt(w,v),X=v.source;e.bindTexture(q,w.__webglTexture,i.TEXTURE0+O);const yt=n.get(X);if(X.version!==yt.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const at=Xt.getPrimaries(Xt.workingColorSpace),vt=v.colorSpace===ni?null:Xt.getPrimaries(v.colorSpace),Ct=v.colorSpace===ni||at===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let tt=x(v.image,!1,r.maxTextureSize);tt=ue(v,tt);const lt=s.convert(v.format,v.colorSpace),gt=s.convert(v.type);let St=E(v.internalFormat,lt,gt,v.colorSpace,v.isVideoTexture);Dt(q,v);let ot;const Bt=v.mipmaps,F=v.isVideoTexture!==!0,dt=yt.__version===void 0||Z===!0,nt=X.dataReady,pt=A(v,tt);if(v.isDepthTexture)St=b(v.format===Mi,v.type),dt&&(F?e.texStorage2D(i.TEXTURE_2D,1,St,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,St,tt.width,tt.height,0,lt,gt,null));else if(v.isDataTexture)if(Bt.length>0){F&&dt&&e.texStorage2D(i.TEXTURE_2D,pt,St,Bt[0].width,Bt[0].height);for(let Q=0,$=Bt.length;Q<$;Q++)ot=Bt[Q],F?nt&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ot.width,ot.height,lt,gt,ot.data):e.texImage2D(i.TEXTURE_2D,Q,St,ot.width,ot.height,0,lt,gt,ot.data);v.generateMipmaps=!1}else F?(dt&&e.texStorage2D(i.TEXTURE_2D,pt,St,tt.width,tt.height),nt&&ee(v,tt,lt,gt)):e.texImage2D(i.TEXTURE_2D,0,St,tt.width,tt.height,0,lt,gt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,St,Bt[0].width,Bt[0].height,tt.depth);for(let Q=0,$=Bt.length;Q<$;Q++)if(ot=Bt[Q],v.format!==ln)if(lt!==null)if(F){if(nt)if(v.layerUpdates.size>0){const st=Ol(ot.width,ot.height,v.format,v.type);for(const It of v.layerUpdates){const fe=ot.data.subarray(It*st/ot.data.BYTES_PER_ELEMENT,(It+1)*st/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,It,ot.width,ot.height,1,lt,fe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,tt.depth,lt,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,St,ot.width,ot.height,tt.depth,0,ot.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?nt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,tt.depth,lt,gt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,St,ot.width,ot.height,tt.depth,0,lt,gt,ot.data)}else{F&&dt&&e.texStorage2D(i.TEXTURE_2D,pt,St,Bt[0].width,Bt[0].height);for(let Q=0,$=Bt.length;Q<$;Q++)ot=Bt[Q],v.format!==ln?lt!==null?F?nt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ot.width,ot.height,lt,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,St,ot.width,ot.height,0,ot.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?nt&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ot.width,ot.height,lt,gt,ot.data):e.texImage2D(i.TEXTURE_2D,Q,St,ot.width,ot.height,0,lt,gt,ot.data)}else if(v.isDataArrayTexture)if(F){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,St,tt.width,tt.height,tt.depth),nt)if(v.layerUpdates.size>0){const Q=Ol(tt.width,tt.height,v.format,v.type);for(const $ of v.layerUpdates){const st=tt.data.subarray($*Q/tt.data.BYTES_PER_ELEMENT,($+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,lt,gt,st)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,gt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,tt.width,tt.height,tt.depth,0,lt,gt,tt.data);else if(v.isData3DTexture)F?(dt&&e.texStorage3D(i.TEXTURE_3D,pt,St,tt.width,tt.height,tt.depth),nt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,gt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,St,tt.width,tt.height,tt.depth,0,lt,gt,tt.data);else if(v.isFramebufferTexture){if(dt)if(F)e.texStorage2D(i.TEXTURE_2D,pt,St,tt.width,tt.height);else{let Q=tt.width,$=tt.height;for(let st=0;st<pt;st++)e.texImage2D(i.TEXTURE_2D,st,St,Q,$,0,lt,gt,null),Q>>=1,$>>=1}}else if(Bt.length>0){if(F&&dt){const Q=Mt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,pt,St,Q.width,Q.height)}for(let Q=0,$=Bt.length;Q<$;Q++)ot=Bt[Q],F?nt&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt,gt,ot):e.texImage2D(i.TEXTURE_2D,Q,St,lt,gt,ot);v.generateMipmaps=!1}else if(F){if(dt){const Q=Mt(tt);e.texStorage2D(i.TEXTURE_2D,pt,St,Q.width,Q.height)}nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,gt,tt)}else e.texImage2D(i.TEXTURE_2D,0,St,lt,gt,tt);m(v)&&h(q),yt.__version=X.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function K(w,v,O){if(v.image.length!==6)return;const q=Lt(w,v),Z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const X=n.get(Z);if(Z.version!==X.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const yt=Xt.getPrimaries(Xt.workingColorSpace),at=v.colorSpace===ni?null:Xt.getPrimaries(v.colorSpace),vt=v.colorSpace===ni||yt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Ct=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,lt=[];for(let $=0;$<6;$++)!Ct&&!tt?lt[$]=x(v.image[$],!0,r.maxCubemapSize):lt[$]=tt?v.image[$].image:v.image[$],lt[$]=ue(v,lt[$]);const gt=lt[0],St=s.convert(v.format,v.colorSpace),ot=s.convert(v.type),Bt=E(v.internalFormat,St,ot,v.colorSpace),F=v.isVideoTexture!==!0,dt=X.__version===void 0||q===!0,nt=Z.dataReady;let pt=A(v,gt);Dt(i.TEXTURE_CUBE_MAP,v);let Q;if(Ct){F&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Bt,gt.width,gt.height);for(let $=0;$<6;$++){Q=lt[$].mipmaps;for(let st=0;st<Q.length;st++){const It=Q[st];v.format!==ln?St!==null?F?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,0,0,It.width,It.height,St,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,Bt,It.width,It.height,0,It.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,0,0,It.width,It.height,St,ot,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,Bt,It.width,It.height,0,St,ot,It.data)}}}else{if(Q=v.mipmaps,F&&dt){Q.length>0&&pt++;const $=Mt(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Bt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,lt[$].width,lt[$].height,St,ot,lt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,lt[$].width,lt[$].height,0,St,ot,lt[$].data);for(let st=0;st<Q.length;st++){const fe=Q[st].image[$].image;F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,0,0,fe.width,fe.height,St,ot,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,Bt,fe.width,fe.height,0,St,ot,fe.data)}}else{F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,St,ot,lt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,St,ot,lt[$]);for(let st=0;st<Q.length;st++){const It=Q[st];F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,0,0,St,ot,It.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,Bt,St,ot,It.image[$])}}}m(v)&&h(i.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function rt(w,v,O,q,Z,X){const yt=s.convert(O.format,O.colorSpace),at=s.convert(O.type),vt=E(O.internalFormat,yt,at,O.colorSpace),Ct=n.get(v),tt=n.get(O);if(tt.__renderTarget=v,!Ct.__hasExternalTextures){const lt=Math.max(1,v.width>>X),gt=Math.max(1,v.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,vt,lt,gt,v.depth,0,yt,at,null):e.texImage2D(Z,X,vt,lt,gt,0,yt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,tt.__webglTexture,0,L(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,tt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(w,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const q=v.depthTexture,Z=q&&q.isDepthTexture?q.type:null,X=b(v.stencilBuffer,Z),yt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ye(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(v),X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(v),X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,w)}else{const q=v.textures;for(let Z=0;Z<q.length;Z++){const X=q[Z],yt=s.convert(X.format,X.colorSpace),at=s.convert(X.type),vt=E(X.internalFormat,yt,at,X.colorSpace);ye(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(v),vt,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(v),vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,vt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(w,v,O){const q=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,v.depthTexture);const Ct=s.convert(v.depthTexture.format),tt=s.convert(v.depthTexture.type);let lt;v.depthTexture.format===Xn?lt=i.DEPTH_COMPONENT24:v.depthTexture.format===Mi&&(lt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,lt,v.width,v.height,0,Ct,tt,null)}}else V(v.depthTexture,0);const X=Z.__webglTexture,yt=L(v),at=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,vt=v.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Xn)ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,at,X,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,at,X,0);else if(v.depthTexture.format===Mi)ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,at,X,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,at,X,0);else throw new Error("Unknown depthTexture format")}function qt(w){const v=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=q}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let q=0;q<6;q++)xt(v.__webglFramebuffer[q],w,q);else{const q=w.texture.mipmaps;q&&q.length>0?xt(v.__webglFramebuffer[0],w,0):xt(v.__webglFramebuffer,w,0)}else if(O){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),Ut(v.__webglDepthbuffer[q],w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ut(v.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(w,v,O){const q=n.get(w);v!==void 0&&rt(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&qt(w)}function Ht(w){const v=w.texture,O=n.get(w),q=n.get(v);w.addEventListener("dispose",R);const Z=w.textures,X=w.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let vt=0;vt<v.mipmaps.length;vt++)O.__webglFramebuffer[at][vt]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(yt)for(let at=0,vt=Z.length;at<vt;at++){const Ct=n.get(Z[at]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ye(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const vt=Z[at];O.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[at]);const Ct=s.convert(vt.format,vt.colorSpace),tt=s.convert(vt.type),lt=E(vt.internalFormat,Ct,tt,vt.colorSpace,w.isXRRenderTarget===!0),gt=L(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,lt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,O.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)rt(O.__webglFramebuffer[at][vt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,vt);else rt(O.__webglFramebuffer[at],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(v)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let at=0,vt=Z.length;at<vt;at++){const Ct=Z[at],tt=n.get(Ct);let lt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(lt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),Dt(lt,Ct),rt(O.__webglFramebuffer,w,Ct,i.COLOR_ATTACHMENT0+at,lt,0),m(Ct)&&h(lt)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(at=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,q.__webglTexture),Dt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)rt(O.__webglFramebuffer[vt],w,v,i.COLOR_ATTACHMENT0,at,vt);else rt(O.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,at,0);m(v)&&h(at),e.unbindTexture()}w.depthBuffer&&qt(w)}function ne(w){const v=w.textures;for(let O=0,q=v.length;O<q;O++){const Z=v[O];if(m(Z)){const X=S(w),yt=n.get(Z).__webglTexture;e.bindTexture(X,yt),h(X),e.unbindTexture()}}}const le=[],Ot=[];function Se(w){if(w.samples>0){if(ye(w)===!1){const v=w.textures,O=w.width,q=w.height;let Z=i.COLOR_BUFFER_BIT;const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(w),at=v.length>1;if(at)for(let Ct=0;Ct<v.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const vt=w.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Ct=0;Ct<v.length;Ct++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Ct]);const tt=n.get(v[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,Z,i.NEAREST),l===!0&&(le.length=0,Ot.length=0,le.push(i.COLOR_ATTACHMENT0+Ct),w.depthBuffer&&w.resolveDepthBuffer===!1&&(le.push(X),Ot.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Ct=0;Ct<v.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Ct]);const tt=n.get(v[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function L(w){return Math.min(r.maxSamples,w.samples)}function ye(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Jt(w){const v=a.render.frame;f.get(w)!==v&&(f.set(w,v),w.update())}function ue(w,v){const O=w.colorSpace,q=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Ji&&O!==ni&&(Xt.getTransfer(O)===se?(q!==ln||Z!==Ge)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",O)),v}function Mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=N,this.setTextureCube=Y,this.rebindTextures=Le,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Y_(i,t){function e(n,r=ni){let s;const a=Xt.getTransfer(r);if(n===Ge)return i.UNSIGNED_BYTE;if(n===Po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Do)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oc)return i.BYTE;if(n===Bc)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===Co)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===Vc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===ln)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===Io)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Uo)return i.RG_INTEGER;if(n===No)return i.RGBA_INTEGER;if(n===hs||n===us||n===fs||n===ds)if(a===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Wa||n===Xa||n===Ya)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===ja||n===$a||n===Za||n===Ka||n===Ja||n===Qa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qa||n===ja)return a===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===$a)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Za)return s.COMPRESSED_R11_EAC;if(n===Ka)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ja)return s.COMPRESSED_RG11_EAC;if(n===Qa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===to||n===eo||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===to)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ro)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ao)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===_o||n===go)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===mo)return a===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===vo||n===Mo||n===So)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mn({vertexShader:q_,fragmentShader:j_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new Ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z_ extends bi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,u=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new $_,h={},S=e.getContextAttributes();let E=null,b=null;const A=[],C=[],R=new At;let P=null;const g=new fn;g.viewport=new _e;const M=new fn;M.viewport=new _e;const T=[g,M],I=new af;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=A[j];return K===void 0&&(K=new da,A[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=A[j];return K===void 0&&(K=new da,A[j]=K),K.getGripSpace()},this.getHand=function(j){let K=A[j];return K===void 0&&(K=new da,A[j]=K),K.getHandSpace()};function V(j){const K=C.indexOf(j.inputSource);if(K===-1)return;const rt=A[K];rt!==void 0&&(rt.update(j.inputSource,j.frame,c||a),rt.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",N);for(let j=0;j<A.length;j++){const K=C[j];K!==null&&(C[j]=null,A[j].disconnect(K))}U=null,z=null,m.reset();for(const j in h)delete h[j];t.setRenderTarget(E),p=null,u=null,d=null,r=null,b=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(E=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",G),r.addEventListener("inputsourceschange",N),S.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Ut=null,xt=null;S.depth&&(xt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=S.stencil?Mi:Xn,Ut=S.stencil?Tr:In);const qt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(qt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Pn(u.textureWidth,u.textureHeight,{format:ln,type:Ge,depthTexture:new wr(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const rt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Pn(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Ge,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(j){for(let K=0;K<j.removed.length;K++){const rt=j.removed[K],Ut=C.indexOf(rt);Ut>=0&&(C[Ut]=null,A[Ut].disconnect(rt))}for(let K=0;K<j.added.length;K++){const rt=j.added[K];let Ut=C.indexOf(rt);if(Ut===-1){for(let qt=0;qt<A.length;qt++)if(qt>=C.length){C.push(rt),Ut=qt;break}else if(C[qt]===null){C[qt]=rt,Ut=qt;break}if(Ut===-1)break}const xt=A[Ut];xt&&xt.connect(rt)}}const Y=new D,J=new D;function et(j,K,rt){Y.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(rt.matrixWorld);const Ut=Y.distanceTo(J),xt=K.projectionMatrix.elements,qt=rt.projectionMatrix.elements,Le=xt[14]/(xt[10]-1),Ht=xt[14]/(xt[10]+1),ne=(xt[9]+1)/xt[5],le=(xt[9]-1)/xt[5],Ot=(xt[8]-1)/xt[0],Se=(qt[8]+1)/qt[0],L=Le*Ot,ye=Le*Se,Jt=Ut/(-Ot+Se),ue=Jt*-Ot;if(K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ue),j.translateZ(Jt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),xt[10]===-1)j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Mt=Le+Jt,w=Ht+Jt,v=L-ue,O=ye+(Ut-ue),q=ne*Ht/w*Mt,Z=le*Ht/w*Mt;j.projectionMatrix.makePerspective(v,O,q,Z,Mt,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function it(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let K=j.near,rt=j.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),I.near=M.near=g.near=K,I.far=M.far=g.far=rt,(U!==I.near||z!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,z=I.far),I.layers.mask=j.layers.mask|6,g.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Ut=j.parent,xt=I.cameras;it(I,Ut);for(let qt=0;qt<xt.length;qt++)it(xt[qt],Ut);xt.length===2?et(I,g,M):I.projectionMatrix.copy(g.projectionMatrix),Dt(j,I,Ut)};function Dt(j,K,rt){rt===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(rt.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=yo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(j){return h[j]};let Lt=null;function Kt(j,K){if(f=K.getViewerPose(c||a),_=K,f!==null){const rt=f.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let Ut=!1;rt.length!==I.cameras.length&&(I.cameras.length=0,Ut=!0);for(let Ht=0;Ht<rt.length;Ht++){const ne=rt[Ht];let le=null;if(p!==null)le=p.getViewport(ne);else{const Se=d.getViewSubImage(u,ne);le=Se.viewport,Ht===0&&(t.setRenderTargetTextures(b,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(b))}let Ot=T[Ht];Ot===void 0&&(Ot=new fn,Ot.layers.enable(Ht),Ot.viewport=new _e,T[Ht]=Ot),Ot.matrix.fromArray(ne.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(ne.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(le.x,le.y,le.width,le.height),Ht===0&&(I.matrix.copy(Ot.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ut===!0&&I.cameras.push(Ot)}const xt=r.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Ht=d.getDepthInformation(rt[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,r.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Ht=0;Ht<rt.length;Ht++){const ne=rt[Ht].camera;if(ne){let le=h[ne];le||(le=new th,h[ne]=le);const Ot=d.getCameraImage(ne);le.sourceTexture=Ot}}}}for(let rt=0;rt<A.length;rt++){const Ut=C[rt],xt=A[rt];Ut!==null&&xt!==void 0&&xt.update(Ut,K,c||a)}Lt&&Lt(j,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const ee=new nh;ee.setAnimationLoop(Kt),this.setAnimationLoop=function(j){Lt=j},this.dispose=function(){}}}const di=new vn,K_=new te;function J_(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,$c(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,S,E,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),f(m,h)):h.isMeshStandardMaterial?(s(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,S,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===tn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===tn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=t.get(h),E=S.envMap,b=S.envMapRotation;E&&(m.envMap.value=E,di.copy(b),di.x*=-1,di.y*=-1,di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(di)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=E*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===tn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const S=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Q_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const b=E.program;n.uniformBlockBinding(S,b)}function c(S,E){let b=r[S.id];b===void 0&&(_(S),b=f(S),r[S.id]=b,S.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(S,A);const C=t.render.frame;s[S.id]!==C&&(u(S),s[S.id]=C)}function f(S){const E=d();S.__bindingPointIndex=E;const b=i.createBuffer(),A=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const E=r[S.id],b=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,R=b.length;C<R;C++){const P=Array.isArray(b[C])?b[C]:[b[C]];for(let g=0,M=P.length;g<M;g++){const T=P[g];if(p(T,C,g,A)===!0){const I=T.__offset,U=Array.isArray(T.value)?T.value:[T.value];let z=0;for(let V=0;V<U.length;V++){const G=U[V],N=x(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,I+z,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,z),z+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,b,A){const C=S.value,R=E+"_"+b;if(A[R]===void 0)return typeof C=="number"||typeof C=="boolean"?A[R]=C:A[R]=C.clone(),!0;{const P=A[R];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return A[R]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function _(S){const E=S.uniforms;let b=0;const A=16;for(let R=0,P=E.length;R<P;R++){const g=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,T=g.length;M<T;M++){const I=g[M],U=Array.isArray(I.value)?I.value:[I.value];for(let z=0,V=U.length;z<V;z++){const G=U[z],N=x(G),Y=b%A,J=Y%N.boundary,et=Y+J;b+=J,et!==0&&A-et<N.storage&&(b+=A-et),I.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=N.storage}}}const C=b%A;return C>0&&(b+=A-C),S.__size=b,S.__cache={},this}function x(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pt("WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}const t0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function e0(){return yn===null&&(yn=new qu(t0,16,16,Ki,Wn),yn.name="DFG_LUT",yn.minFilter=be,yn.magFilter=be,yn.wrapS=Ne,yn.wrapT=Ne,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class n0{constructor(t={}){const{canvas:e=Mu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Ge}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const x=p,m=new Set([No,Uo,Lo]),h=new Set([Ge,In,br,Tr,Po,Do]),S=new Uint32Array(4),E=new Int32Array(4);let b=null,A=null;const C=[],R=[];let P=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let M=!1;this._outputColorSpace=un;let T=0,I=0,U=null,z=-1,V=null;const G=new _e,N=new _e;let Y=null;const J=new Yt(0);let et=0,it=e.width,Dt=e.height,Lt=1,Kt=null,ee=null;const j=new _e(0,0,it,Dt),K=new _e(0,0,it,Dt);let rt=!1;const Ut=new ko;let xt=!1,qt=!1;const Le=new te,Ht=new D,ne=new _e,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Se(){return U===null?Lt:1}let L=n;function ye(y,B){return e.getContext(y,B)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ro}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",ie,!1),L===null){const B="webgl2";if(L=ye(B,y),L===null)throw ye(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Wt("WebGLRenderer: "+y.message),y}let Jt,ue,Mt,w,v,O,q,Z,X,yt,at,vt,Ct,tt,lt,gt,St,ot,Bt,F,dt,nt,pt,Q;function $(){Jt=new em(L),Jt.init(),nt=new Y_(L,Jt),ue=new Yp(L,Jt,t,nt),Mt=new W_(L,Jt),ue.reversedDepthBuffer&&u&&Mt.buffers.depth.setReversed(!0),w=new rm(L),v=new C_,O=new X_(L,Jt,Mt,v,ue,nt,w),q=new jp(g),Z=new tm(g),X=new lf(L),pt=new Wp(L,X),yt=new nm(L,X,w,pt),at=new am(L,yt,X,w),Bt=new sm(L,ue,O),gt=new qp(v),vt=new R_(g,q,Z,Jt,ue,pt,gt),Ct=new J_(g,v),tt=new D_,lt=new O_(Jt),ot=new Hp(g,q,Z,Mt,at,_,l),St=new G_(g,at,ue),Q=new Q_(L,w,ue,Mt),F=new Xp(L,Jt,w),dt=new im(L,Jt,w),w.programs=vt.programs,g.capabilities=ue,g.extensions=Jt,g.properties=v,g.renderLists=tt,g.shadowMap=St,g.state=Mt,g.info=w}$(),x!==Ge&&(P=new lm(x,e.width,e.height,r,s));const st=new Z_(g,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Jt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Jt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Lt},this.setPixelRatio=function(y){y!==void 0&&(Lt=y,this.setSize(it,Dt,!1))},this.getSize=function(y){return y.set(it,Dt)},this.setSize=function(y,B,W=!0){if(st.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}it=y,Dt=B,e.width=Math.floor(y*Lt),e.height=Math.floor(B*Lt),W===!0&&(e.style.width=y+"px",e.style.height=B+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(it*Lt,Dt*Lt).floor()},this.setDrawingBufferSize=function(y,B,W){it=y,Dt=B,Lt=W,e.width=Math.floor(y*W),e.height=Math.floor(B*W),this.setViewport(0,0,y,B)},this.setEffects=function(y){if(x===Ge){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let B=0;B<y.length;B++)if(y[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(G)},this.getViewport=function(y){return y.copy(j)},this.setViewport=function(y,B,W,H){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,B,W,H),Mt.viewport(G.copy(j).multiplyScalar(Lt).round())},this.getScissor=function(y){return y.copy(K)},this.setScissor=function(y,B,W,H){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,B,W,H),Mt.scissor(N.copy(K).multiplyScalar(Lt).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(y){Mt.setScissorTest(rt=y)},this.setOpaqueSort=function(y){Kt=y},this.setTransparentSort=function(y){ee=y},this.getClearColor=function(y){return y.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,W=!0){let H=0;if(y){let k=!1;if(U!==null){const ct=U.texture.format;k=m.has(ct)}if(k){const ct=U.texture.type,mt=h.has(ct),ft=ot.getClearColor(),_t=ot.getClearAlpha(),Et=ft.r,Rt=ft.g,bt=ft.b;mt?(S[0]=Et,S[1]=Rt,S[2]=bt,S[3]=_t,L.clearBufferuiv(L.COLOR,0,S)):(E[0]=Et,E[1]=Rt,E[2]=bt,E[3]=_t,L.clearBufferiv(L.COLOR,0,E))}else H|=L.COLOR_BUFFER_BIT}B&&(H|=L.DEPTH_BUFFER_BIT),W&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),ot.dispose(),tt.dispose(),lt.dispose(),v.dispose(),q.dispose(),Z.dispose(),at.dispose(),pt.dispose(),Q.dispose(),vt.dispose(),st.dispose(),st.removeEventListener("sessionstart",qo),st.removeEventListener("sessionend",jo),ai.stop()};function It(y){y.preventDefault(),dl("WebGLRenderer: Context Lost."),M=!0}function fe(){dl("WebGLRenderer: Context Restored."),M=!1;const y=w.autoReset,B=St.enabled,W=St.autoUpdate,H=St.needsUpdate,k=St.type;$(),w.autoReset=y,St.enabled=B,St.autoUpdate=W,St.needsUpdate=H,St.type=k}function ie(y){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Sn(y){const B=y.target;B.removeEventListener("dispose",Sn),Ln(B)}function Ln(y){xh(y),v.remove(y)}function xh(y){const B=v.get(y).programs;B!==void 0&&(B.forEach(function(W){vt.releaseProgram(W)}),y.isShaderMaterial&&vt.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,W,H,k,ct){B===null&&(B=le);const mt=k.isMesh&&k.matrixWorld.determinant()<0,ft=Mh(y,B,W,H,k);Mt.setMaterial(H,mt);let _t=W.index,Et=1;if(H.wireframe===!0){if(_t=yt.getWireframeAttribute(W),_t===void 0)return;Et=2}const Rt=W.drawRange,bt=W.attributes.position;let zt=Rt.start*Et,ae=(Rt.start+Rt.count)*Et;ct!==null&&(zt=Math.max(zt,ct.start*Et),ae=Math.min(ae,(ct.start+ct.count)*Et)),_t!==null?(zt=Math.max(zt,0),ae=Math.min(ae,_t.count)):bt!=null&&(zt=Math.max(zt,0),ae=Math.min(ae,bt.count));const ge=ae-zt;if(ge<0||ge===1/0)return;pt.setup(k,H,ft,W,_t);let xe,ce=F;if(_t!==null&&(xe=X.get(_t),ce=dt,ce.setIndex(xe)),k.isMesh)H.wireframe===!0?(Mt.setLineWidth(H.wireframeLinewidth*Se()),ce.setMode(L.LINES)):ce.setMode(L.TRIANGLES);else if(k.isLine){let Tt=H.linewidth;Tt===void 0&&(Tt=1),Mt.setLineWidth(Tt*Se()),k.isLineSegments?ce.setMode(L.LINES):k.isLineLoop?ce.setMode(L.LINE_LOOP):ce.setMode(L.LINE_STRIP)}else k.isPoints?ce.setMode(L.POINTS):k.isSprite&&ce.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ar("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Tt=k._multiDrawStarts,re=k._multiDrawCounts,jt=k._multiDrawCount,en=_t?X.get(_t).bytesPerElement:1,Ti=v.get(H).currentProgram.getUniforms();for(let nn=0;nn<jt;nn++)Ti.setValue(L,"_gl_DrawID",nn),ce.render(Tt[nn]/en,re[nn])}else if(k.isInstancedMesh)ce.renderInstances(zt,ge,k.count);else if(W.isInstancedBufferGeometry){const Tt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,re=Math.min(W.instanceCount,Tt);ce.renderInstances(zt,ge,re)}else ce.render(zt,ge)};function Yo(y,B,W){y.transparent===!0&&y.side===An&&y.forceSinglePass===!1?(y.side=tn,y.needsUpdate=!0,Ur(y,B,W),y.side=ri,y.needsUpdate=!0,Ur(y,B,W),y.side=An):Ur(y,B,W)}this.compile=function(y,B,W=null){W===null&&(W=y),A=lt.get(W),A.init(B),R.push(A),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights();const H=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ct=k.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){const ft=ct[mt];Yo(ft,W,k),H.add(ft)}else Yo(ct,W,k),H.add(ct)}),A=R.pop(),H},this.compileAsync=function(y,B,W=null){const H=this.compile(y,B,W);return new Promise(k=>{function ct(){if(H.forEach(function(mt){v.get(mt).currentProgram.isReady()&&H.delete(mt)}),H.size===0){k(y);return}setTimeout(ct,10)}Jt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Vs=null;function vh(y){Vs&&Vs(y)}function qo(){ai.stop()}function jo(){ai.start()}const ai=new nh;ai.setAnimationLoop(vh),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(y){Vs=y,st.setAnimationLoop(y),y===null?ai.stop():ai.start()},st.addEventListener("sessionstart",qo),st.addEventListener("sessionend",jo),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const W=st.enabled===!0&&st.isPresenting===!0,H=P!==null&&(U===null||W)&&P.begin(g,U);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(B),B=st.getCamera()),y.isScene===!0&&y.onBeforeRender(g,y,B,U),A=lt.get(y,R.length),A.init(B),R.push(A),Le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ut.setFromProjectionMatrix(Le,Rn,B.reversedDepth),qt=this.localClippingEnabled,xt=gt.init(this.clippingPlanes,qt),b=tt.get(y,C.length),b.init(),C.push(b),st.enabled===!0&&st.isPresenting===!0){const mt=g.xr.getDepthSensingMesh();mt!==null&&Gs(mt,B,-1/0,g.sortObjects)}Gs(y,B,0,g.sortObjects),b.finish(),g.sortObjects===!0&&b.sort(Kt,ee),Ot=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ot&&ot.addToRenderList(b,y),this.info.render.frame++,xt===!0&&gt.beginShadows();const k=A.state.shadowsArray;if(St.render(k,y,B),xt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&P.hasRenderPass())===!1){const mt=b.opaque,ft=b.transmissive;if(A.setupLights(),B.isArrayCamera){const _t=B.cameras;if(ft.length>0)for(let Et=0,Rt=_t.length;Et<Rt;Et++){const bt=_t[Et];Zo(mt,ft,y,bt)}Ot&&ot.render(y);for(let Et=0,Rt=_t.length;Et<Rt;Et++){const bt=_t[Et];$o(b,y,bt,bt.viewport)}}else ft.length>0&&Zo(mt,ft,y,B),Ot&&ot.render(y),$o(b,y,B)}U!==null&&I===0&&(O.updateMultisampleRenderTarget(U),O.updateRenderTargetMipmap(U)),H&&P.end(g),y.isScene===!0&&y.onAfterRender(g,y,B),pt.resetDefaultState(),z=-1,V=null,R.pop(),R.length>0?(A=R[R.length-1],xt===!0&&gt.setGlobalState(g.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?b=C[C.length-1]:b=null};function Gs(y,B,W,H){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ut.intersectsSprite(y)){H&&ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Le);const mt=at.update(y),ft=y.material;ft.visible&&b.push(y,mt,ft,W,ne.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ut.intersectsObject(y))){const mt=at.update(y),ft=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ne.copy(y.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),ne.copy(mt.boundingSphere.center)),ne.applyMatrix4(y.matrixWorld).applyMatrix4(Le)),Array.isArray(ft)){const _t=mt.groups;for(let Et=0,Rt=_t.length;Et<Rt;Et++){const bt=_t[Et],zt=ft[bt.materialIndex];zt&&zt.visible&&b.push(y,mt,zt,W,ne.z,bt)}}else ft.visible&&b.push(y,mt,ft,W,ne.z,null)}}const ct=y.children;for(let mt=0,ft=ct.length;mt<ft;mt++)Gs(ct[mt],B,W,H)}function $o(y,B,W,H){const{opaque:k,transmissive:ct,transparent:mt}=y;A.setupLightsView(W),xt===!0&&gt.setGlobalState(g.clippingPlanes,W),H&&Mt.viewport(G.copy(H)),k.length>0&&Lr(k,B,W),ct.length>0&&Lr(ct,B,W),mt.length>0&&Lr(mt,B,W),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Zo(y,B,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const zt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Pn(1,1,{generateMipmaps:!0,type:zt?Wn:Ge,minFilter:vi,samples:ue.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}const ct=A.state.transmissionRenderTarget[H.id],mt=H.viewport||G;ct.setSize(mt.z*g.transmissionResolutionScale,mt.w*g.transmissionResolutionScale);const ft=g.getRenderTarget(),_t=g.getActiveCubeFace(),Et=g.getActiveMipmapLevel();g.setRenderTarget(ct),g.getClearColor(J),et=g.getClearAlpha(),et<1&&g.setClearColor(16777215,.5),g.clear(),Ot&&ot.render(W);const Rt=g.toneMapping;g.toneMapping=Cn;const bt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),xt===!0&&gt.setGlobalState(g.clippingPlanes,H),Lr(y,W,H),O.updateMultisampleRenderTarget(ct),O.updateRenderTargetMipmap(ct),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let ae=0,ge=B.length;ae<ge;ae++){const xe=B[ae],{object:ce,geometry:Tt,material:re,group:jt}=xe;if(re.side===An&&ce.layers.test(H.layers)){const en=re.side;re.side=tn,re.needsUpdate=!0,Ko(ce,W,H,Tt,re,jt),re.side=en,re.needsUpdate=!0,zt=!0}}zt===!0&&(O.updateMultisampleRenderTarget(ct),O.updateRenderTargetMipmap(ct))}g.setRenderTarget(ft,_t,Et),g.setClearColor(J,et),bt!==void 0&&(H.viewport=bt),g.toneMapping=Rt}function Lr(y,B,W){const H=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ct=y.length;k<ct;k++){const mt=y[k],{object:ft,geometry:_t,group:Et}=mt;let Rt=mt.material;Rt.allowOverride===!0&&H!==null&&(Rt=H),ft.layers.test(W.layers)&&Ko(ft,B,W,_t,Rt,Et)}}function Ko(y,B,W,H,k,ct){y.onBeforeRender(g,B,W,H,k,ct),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(g,B,W,H,y,ct),k.transparent===!0&&k.side===An&&k.forceSinglePass===!1?(k.side=tn,k.needsUpdate=!0,g.renderBufferDirect(W,B,H,k,y,ct),k.side=ri,k.needsUpdate=!0,g.renderBufferDirect(W,B,H,k,y,ct),k.side=An):g.renderBufferDirect(W,B,H,k,y,ct),y.onAfterRender(g,B,W,H,k,ct)}function Ur(y,B,W){B.isScene!==!0&&(B=le);const H=v.get(y),k=A.state.lights,ct=A.state.shadowsArray,mt=k.state.version,ft=vt.getParameters(y,k.state,ct,B,W),_t=vt.getProgramCacheKey(ft);let Et=H.programs;H.environment=y.isMeshStandardMaterial?B.environment:null,H.fog=B.fog,H.envMap=(y.isMeshStandardMaterial?Z:q).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,Et===void 0&&(y.addEventListener("dispose",Sn),Et=new Map,H.programs=Et);let Rt=Et.get(_t);if(Rt!==void 0){if(H.currentProgram===Rt&&H.lightsStateVersion===mt)return Qo(y,ft),Rt}else ft.uniforms=vt.getUniforms(y),y.onBeforeCompile(ft,g),Rt=vt.acquireProgram(ft,_t),Et.set(_t,Rt),H.uniforms=ft.uniforms;const bt=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(bt.clippingPlanes=gt.uniform),Qo(y,ft),H.needsLights=yh(y),H.lightsStateVersion=mt,H.needsLights&&(bt.ambientLightColor.value=k.state.ambient,bt.lightProbe.value=k.state.probe,bt.directionalLights.value=k.state.directional,bt.directionalLightShadows.value=k.state.directionalShadow,bt.spotLights.value=k.state.spot,bt.spotLightShadows.value=k.state.spotShadow,bt.rectAreaLights.value=k.state.rectArea,bt.ltc_1.value=k.state.rectAreaLTC1,bt.ltc_2.value=k.state.rectAreaLTC2,bt.pointLights.value=k.state.point,bt.pointLightShadows.value=k.state.pointShadow,bt.hemisphereLights.value=k.state.hemi,bt.directionalShadowMap.value=k.state.directionalShadowMap,bt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,bt.spotShadowMap.value=k.state.spotShadowMap,bt.spotLightMatrix.value=k.state.spotLightMatrix,bt.spotLightMap.value=k.state.spotLightMap,bt.pointShadowMap.value=k.state.pointShadowMap,bt.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Rt,H.uniformsList=null,Rt}function Jo(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=_s.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function Qo(y,B){const W=v.get(y);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Mh(y,B,W,H,k){B.isScene!==!0&&(B=le),O.resetTextureUnits();const ct=B.fog,mt=H.isMeshStandardMaterial?B.environment:null,ft=U===null?g.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ji,_t=(H.isMeshStandardMaterial?Z:q).get(H.envMap||mt),Et=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Rt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!W.morphAttributes.position,zt=!!W.morphAttributes.normal,ae=!!W.morphAttributes.color;let ge=Cn;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ge=g.toneMapping);const xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ce=xe!==void 0?xe.length:0,Tt=v.get(H),re=A.state.lights;if(xt===!0&&(qt===!0||y!==V)){const Xe=y===V&&H.id===z;gt.setState(H,y,Xe)}let jt=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==re.state.version||Tt.outputColorSpace!==ft||k.isBatchedMesh&&Tt.batching===!1||!k.isBatchedMesh&&Tt.batching===!0||k.isBatchedMesh&&Tt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Tt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Tt.instancing===!1||!k.isInstancedMesh&&Tt.instancing===!0||k.isSkinnedMesh&&Tt.skinning===!1||!k.isSkinnedMesh&&Tt.skinning===!0||k.isInstancedMesh&&Tt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Tt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Tt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Tt.instancingMorph===!1&&k.morphTexture!==null||Tt.envMap!==_t||H.fog===!0&&Tt.fog!==ct||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==gt.numPlanes||Tt.numIntersection!==gt.numIntersection)||Tt.vertexAlphas!==Et||Tt.vertexTangents!==Rt||Tt.morphTargets!==bt||Tt.morphNormals!==zt||Tt.morphColors!==ae||Tt.toneMapping!==ge||Tt.morphTargetsCount!==ce)&&(jt=!0):(jt=!0,Tt.__version=H.version);let en=Tt.currentProgram;jt===!0&&(en=Ur(H,B,k));let Ti=!1,nn=!1,sr=!1;const de=en.getUniforms(),je=Tt.uniforms;if(Mt.useProgram(en.program)&&(Ti=!0,nn=!0,sr=!0),H.id!==z&&(z=H.id,nn=!0),Ti||V!==y){Mt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),de.setValue(L,"projectionMatrix",y.projectionMatrix),de.setValue(L,"viewMatrix",y.matrixWorldInverse);const $e=de.map.cameraPosition;$e!==void 0&&$e.setValue(L,Ht.setFromMatrixPosition(y.matrixWorld)),ue.logarithmicDepthBuffer&&de.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&de.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),V!==y&&(V=y,nn=!0,sr=!0)}if(Tt.needsLights&&(re.state.directionalShadowMap.length>0&&de.setValue(L,"directionalShadowMap",re.state.directionalShadowMap,O),re.state.spotShadowMap.length>0&&de.setValue(L,"spotShadowMap",re.state.spotShadowMap,O),re.state.pointShadowMap.length>0&&de.setValue(L,"pointShadowMap",re.state.pointShadowMap,O)),k.isSkinnedMesh){de.setOptional(L,k,"bindMatrix"),de.setOptional(L,k,"bindMatrixInverse");const Xe=k.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),de.setValue(L,"boneTexture",Xe.boneTexture,O))}k.isBatchedMesh&&(de.setOptional(L,k,"batchingTexture"),de.setValue(L,"batchingTexture",k._matricesTexture,O),de.setOptional(L,k,"batchingIdTexture"),de.setValue(L,"batchingIdTexture",k._indirectTexture,O),de.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&de.setValue(L,"batchingColorTexture",k._colorsTexture,O));const cn=W.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Bt.update(k,W,en),(nn||Tt.receiveShadow!==k.receiveShadow)&&(Tt.receiveShadow=k.receiveShadow,de.setValue(L,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(je.envMap.value=_t,je.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&B.environment!==null&&(je.envMapIntensity.value=B.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=e0()),nn&&(de.setValue(L,"toneMappingExposure",g.toneMappingExposure),Tt.needsLights&&Sh(je,sr),ct&&H.fog===!0&&Ct.refreshFogUniforms(je,ct),Ct.refreshMaterialUniforms(je,H,Lt,Dt,A.state.transmissionRenderTarget[y.id]),_s.upload(L,Jo(Tt),je,O)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_s.upload(L,Jo(Tt),je,O),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&de.setValue(L,"center",k.center),de.setValue(L,"modelViewMatrix",k.modelViewMatrix),de.setValue(L,"normalMatrix",k.normalMatrix),de.setValue(L,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Xe=H.uniformsGroups;for(let $e=0,Hs=Xe.length;$e<Hs;$e++){const oi=Xe[$e];Q.update(oi,en),Q.bind(oi,en)}}return en}function Sh(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function yh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,B,W){const H=v.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(y.texture).__webglTexture=B,v.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){const W=v.get(y);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const Eh=L.createFramebuffer();this.setRenderTarget=function(y,B=0,W=0){U=y,T=B,I=W;let H=null,k=!1,ct=!1;if(y){const ft=v.get(y);if(ft.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(L.FRAMEBUFFER,ft.__webglFramebuffer),G.copy(y.viewport),N.copy(y.scissor),Y=y.scissorTest,Mt.viewport(G),Mt.scissor(N),Mt.setScissorTest(Y),z=-1;return}else if(ft.__webglFramebuffer===void 0)O.setupRenderTarget(y);else if(ft.__hasExternalTextures)O.rebindTextures(y,v.get(y.texture).__webglTexture,v.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Rt=y.depthTexture;if(ft.__boundDepthTexture!==Rt){if(Rt!==null&&v.has(Rt)&&(y.width!==Rt.image.width||y.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(y)}}const _t=y.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ct=!0);const Et=v.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Et[B])?H=Et[B][W]:H=Et[B],k=!0):y.samples>0&&O.useMultisampledRTT(y)===!1?H=v.get(y).__webglMultisampledFramebuffer:Array.isArray(Et)?H=Et[W]:H=Et,G.copy(y.viewport),N.copy(y.scissor),Y=y.scissorTest}else G.copy(j).multiplyScalar(Lt).floor(),N.copy(K).multiplyScalar(Lt).floor(),Y=rt;if(W!==0&&(H=Eh),Mt.bindFramebuffer(L.FRAMEBUFFER,H)&&Mt.drawBuffers(y,H),Mt.viewport(G),Mt.scissor(N),Mt.setScissorTest(Y),k){const ft=v.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,ft.__webglTexture,W)}else if(ct){const ft=B;for(let _t=0;_t<y.textures.length;_t++){const Et=v.get(y.textures[_t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_t,Et.__webglTexture,W,ft)}}else if(y!==null&&W!==0){const ft=v.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(y,B,W,H,k,ct,mt,ft=0){if(!(y&&y.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=v.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t){Mt.bindFramebuffer(L.FRAMEBUFFER,_t);try{const Et=y.textures[ft],Rt=Et.format,bt=Et.type;if(!ue.textureFormatReadable(Rt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(bt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-H&&W>=0&&W<=y.height-k&&(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),L.readPixels(B,W,H,k,nt.convert(Rt),nt.convert(bt),ct))}finally{const Et=U!==null?v.get(U).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(y,B,W,H,k,ct,mt,ft=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=v.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t)if(B>=0&&B<=y.width-H&&W>=0&&W<=y.height-k){Mt.bindFramebuffer(L.FRAMEBUFFER,_t);const Et=y.textures[ft],Rt=Et.format,bt=Et.type;if(!ue.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,zt),L.bufferData(L.PIXEL_PACK_BUFFER,ct.byteLength,L.STREAM_READ),y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),L.readPixels(B,W,H,k,nt.convert(Rt),nt.convert(bt),0);const ae=U!==null?v.get(U).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,ae);const ge=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Su(L,ge,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,zt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ct),L.deleteBuffer(zt),L.deleteSync(ge),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,W=0){const H=Math.pow(2,-W),k=Math.floor(y.image.width*H),ct=Math.floor(y.image.height*H),mt=B!==null?B.x:0,ft=B!==null?B.y:0;O.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,mt,ft,k,ct),Mt.unbindTexture()};const bh=L.createFramebuffer(),Th=L.createFramebuffer();this.copyTextureToTexture=function(y,B,W=null,H=null,k=0,ct=null){ct===null&&(k!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=k,k=0):ct=0);let mt,ft,_t,Et,Rt,bt,zt,ae,ge;const xe=y.isCompressedTexture?y.mipmaps[ct]:y.image;if(W!==null)mt=W.max.x-W.min.x,ft=W.max.y-W.min.y,_t=W.isBox3?W.max.z-W.min.z:1,Et=W.min.x,Rt=W.min.y,bt=W.isBox3?W.min.z:0;else{const cn=Math.pow(2,-k);mt=Math.floor(xe.width*cn),ft=Math.floor(xe.height*cn),y.isDataArrayTexture?_t=xe.depth:y.isData3DTexture?_t=Math.floor(xe.depth*cn):_t=1,Et=0,Rt=0,bt=0}H!==null?(zt=H.x,ae=H.y,ge=H.z):(zt=0,ae=0,ge=0);const ce=nt.convert(B.format),Tt=nt.convert(B.type);let re;B.isData3DTexture?(O.setTexture3D(B,0),re=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(O.setTexture2DArray(B,0),re=L.TEXTURE_2D_ARRAY):(O.setTexture2D(B,0),re=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const jt=L.getParameter(L.UNPACK_ROW_LENGTH),en=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ti=L.getParameter(L.UNPACK_SKIP_PIXELS),nn=L.getParameter(L.UNPACK_SKIP_ROWS),sr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Et),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bt);const de=y.isDataArrayTexture||y.isData3DTexture,je=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){const cn=v.get(y),Xe=v.get(B),$e=v.get(cn.__renderTarget),Hs=v.get(Xe.__renderTarget);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,$e.__webglFramebuffer),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let oi=0;oi<_t;oi++)de&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(y).__webglTexture,k,bt+oi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(B).__webglTexture,ct,ge+oi)),L.blitFramebuffer(Et,Rt,mt,ft,zt,ae,mt,ft,L.DEPTH_BUFFER_BIT,L.NEAREST);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||v.has(y)){const cn=v.get(y),Xe=v.get(B);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,bh),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Th);for(let $e=0;$e<_t;$e++)de?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,cn.__webglTexture,k,bt+$e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,cn.__webglTexture,k),je?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xe.__webglTexture,ct,ge+$e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xe.__webglTexture,ct),k!==0?L.blitFramebuffer(Et,Rt,mt,ft,zt,ae,mt,ft,L.COLOR_BUFFER_BIT,L.NEAREST):je?L.copyTexSubImage3D(re,ct,zt,ae,ge+$e,Et,Rt,mt,ft):L.copyTexSubImage2D(re,ct,zt,ae,Et,Rt,mt,ft);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else je?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(re,ct,zt,ae,ge,mt,ft,_t,ce,Tt,xe.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(re,ct,zt,ae,ge,mt,ft,_t,ce,xe.data):L.texSubImage3D(re,ct,zt,ae,ge,mt,ft,_t,ce,Tt,xe):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ct,zt,ae,mt,ft,ce,Tt,xe.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ct,zt,ae,xe.width,xe.height,ce,xe.data):L.texSubImage2D(L.TEXTURE_2D,ct,zt,ae,mt,ft,ce,Tt,xe);L.pixelStorei(L.UNPACK_ROW_LENGTH,jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,en),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ti),L.pixelStorei(L.UNPACK_SKIP_ROWS,nn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,sr),ct===0&&B.generateMipmaps&&L.generateMipmap(re),Mt.unbindTexture()},this.initRenderTarget=function(y){v.get(y).__webglFramebuffer===void 0&&O.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?O.setTextureCube(y,0):y.isData3DTexture?O.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?O.setTexture2DArray(y,0):O.setTexture2D(y,0),Mt.unbindTexture()},this.resetState=function(){T=0,I=0,U=null,Mt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}const oh=10,lh=1<<oh,Oe=3,on=1<<Oe,Ea=on-1,gs=oh-Oe,Zt=1<<gs,wt=on+2,Gt=9,$t=1<<Gt,Vt=Math.floor($t/wt),oc=Vt*Vt*Vt,i0=Zt*Zt*Zt*4,bn=10,r0=(lh>>1)*bn;class Ho{indirectionData=new Uint8Array(i0);atlasData=new Uint8Array($t**3);colourData=new Uint8Array($t**3*4);freeBricks=[];brickMap=new Map;constructor(){for(let t=0;t<oc;t++)this.freeBricks.push(t)}async load(t){await t.read(this.indirectionData,0,this.indirectionData.length);let e=new Set;this.brickMap.clear();let n=new Uint8Array(wt**3);for(let r=0,s=0;r<this.indirectionData.length;r+=4,++s){let a=this.indirectionData[r],o=this.indirectionData[r+1],l=this.indirectionData[r+2];if(this.indirectionData[r+3]==255){let f=l*(Vt*Vt)+o*Vt+a;this.brickMap.set(s,f),e.add(f),await t.read(n,0,n.length);let d=l*wt<<Gt+Gt|o*wt<<Gt|a*wt,u=1,p=1<<Gt,_=1<<Gt+Gt,x=0;for(let m=0;m<wt;++m,d+=_){let h=d;for(let S=0;S<wt;++S,h+=p){let E=h;for(let b=0;b<wt;++b,E+=u)this.atlasData[E]=n[x++]}}}}this.freeBricks.splice(0,this.freeBricks.length);for(let r=0;r<oc;++r)e.has(r)||this.freeBricks.push(r)}async save(t){await t.write(this.indirectionData);let e=new Uint8Array(wt**3);for(let n=0,r=0;n<this.indirectionData.length;n+=4,++r){let s=this.indirectionData[n],a=this.indirectionData[n+1],o=this.indirectionData[n+2];if(this.indirectionData[n+3]==255){let c=o*wt<<Gt+Gt|a*wt<<Gt|s*wt,f=1,d=1<<Gt,u=1<<Gt+Gt,p=0;for(let _=0;_<wt;++_,c+=u){let x=c;for(let m=0;m<wt;++m,x+=d){let h=x;for(let S=0;S<wt;++S,h+=f)e[p++]=this.atlasData[h]}}await t.write(e)}}}getGridIdx(t,e,n){return n*Zt*Zt+e*Zt+t}copy(t){for(let e=0;e<this.indirectionData.length;++e)this.indirectionData[e]=t.indirectionData[e];for(let e=0;e<this.atlasData.length;++e)this.atlasData[e]=t.atlasData[e];this.freeBricks.splice(0,this.freeBricks.length);for(let e=0;e<t.freeBricks.length;++e)this.freeBricks.push(t.freeBricks[e]);this.brickMap.clear();for(let e of t.brickMap)this.brickMap.set(e[0],e[1]);return this}get(t,e,n){const r=t>>Oe,s=e>>Oe,a=n>>Oe,o=this.getGridIdx(r,s,a);let l=this.brickMap.get(o);if(l==null)return this.indirectionData[o*4+3]>=128?255:0;const c=l%Vt,f=Math.floor(l/Vt)%Vt,d=Math.floor(l/(Vt*Vt)),u=(t&Ea)+1,p=(e&Ea)+1,_=(n&Ea)+1,x=(d*wt+_)*$t*$t+(f*wt+p)*$t+(c*wt+u);return this.atlasData[x]}_set_collapse={allPositive:!1,allNegative:!1};set(t,e,n,r){const s=t-1>>Oe,a=t+1>>Oe,o=e-1>>Oe,l=e+1>>Oe,c=n-1>>Oe,f=n+1>>Oe;for(let d=c;d<=f;d++)for(let u=o;u<=l;u++)for(let p=s;p<=a;p++){if(p<0||p>=Zt||u<0||u>=Zt||d<0||d>=Zt)continue;const _=this.getGridIdx(p,u,d),x=t-p*on+1,m=e-u*on+1,h=n-d*on+1;if(!(x<0||x>=wt||m<0||m>=wt||h<0||h>=wt)&&(this.ensureBrickAllocated(p,u,d),this.brickMap.has(_))){const S=this.brickMap.get(_);let E=x==wt-1&&m==wt-1&&h==wt-1;if(this.writeToAtlas(S,x,m,h,r,E,this._set_collapse),E){let b=this._set_collapse.allPositive,A=this._set_collapse.allNegative;(b||A)&&this.deallocateBrick(_,A)}}}}paint(t,e,n,r,s,a){r=255-r,s=255-s,a=255-a;const o=t-1>>Oe,l=t+1>>Oe,c=e-1>>Oe,f=e+1>>Oe,d=n-1>>Oe,u=n+1>>Oe;for(let p=d;p<=u;p++)for(let _=c;_<=f;_++)for(let x=o;x<=l;x++){if(x<0||x>=Zt||_<0||_>=Zt||p<0||p>=Zt)continue;const m=this.getGridIdx(x,_,p),h=t-x*on+1,S=e-_*on+1,E=n-p*on+1;if(!(h<0||h>=wt||S<0||S>=wt||E<0||E>=wt)&&this.brickMap.has(m)){let b=this.brickMap.get(m),A=b%Vt,C=Math.floor(b/Vt)%Vt,g=(Math.floor(b/(Vt*Vt))*wt+E)*$t*$t+(C*wt+S)*$t+(A*wt+h)<<2;this.colourData[g]=r,this.colourData[g+1]=s,this.colourData[g+2]=a,this.colourData[g+3]=255}}}_march_tmpV3_1=new D;march(t,e,n){n[0]=0;for(let o=0;o<200;++o){let l=this._march_tmpV3_1.copy(e).multiplyScalar(n[0]).add(t),c=this.map(l,e);if(c<5)return!0;if(n[0]+=c,n[0]>1e4)break}return!1}_map_tmpV3_1=new D;_map_tmpV3_2=new D;_map_tmpV3_3=new D;_map_tmpV3_4=new D;_map_tmpV3_5=new D;_map_tmpV3_6=new D;_map_tmpV3_7=new D;_map_tmpV3_8=new D;_map_tmpV4_1=new _e;map(t,e){let n=this._map_tmpV3_1.copy(t).addScalar(r0),r=this._map_tmpV3_2.copy(n).multiplyScalar(1/(Zt*on*bn)),s=this._map_tmpV4_1;this.readIndirectionTexture01(r,s);let a=this._map_tmpV3_3.copy(r).multiplyScalar(Zt);if(a.set(a.x-Math.floor(a.x),a.y-Math.floor(a.y),a.z-Math.floor(a.z)),s.w==0){let d=this._map_tmpV3_4.copy(a).subScalar(.5),u=this._map_tmpV3_5.copy(e);u.x=1/u.x,u.y=1/u.y,u.z=1/u.z;let p=this._map_tmpV3_6.copy(d).multiply(u),_=this._map_tmpV3_7.copy(u).multiplyScalar(.5);_.x=Math.abs(_.x),_.y=Math.abs(_.y),_.z=Math.abs(_.z);let x=this._map_tmpV3_8.copy(p).negate().add(_),m=Math.min(x.x,x.y,x.z);return Math.max(bn,m*(on*bn))}let o=this._map_tmpV3_4.copy(s).multiplyScalar(2550),l=this._map_tmpV3_5.copy(o).addScalar(1).add(this._map_tmpV3_6.copy(a).multiplyScalar(8)),c=this._map_tmpV3_6.copy(l).divideScalar($t);return(.5-this.readAtlasTexture01(c))*2*bn}readIndirectionTexture01(t,e){let n=Math.max(0,Math.min(Zt-1,Math.floor(t.x*Zt))),r=Math.max(0,Math.min(Zt-1,Math.floor(t.y*Zt))),a=(Math.max(0,Math.min(Zt-1,Math.floor(t.z*Zt)))<<gs+gs|r<<gs|n)<<2;e.x=this.indirectionData[a+0]/255,e.y=this.indirectionData[a+1]/255,e.z=this.indirectionData[a+2]/255,e.w=this.indirectionData[a+3]/255}readAtlasTexture01(t){let e=Math.max(0,Math.min($t-1,Math.floor(t.x*$t))),n=Math.max(0,Math.min($t-1,Math.floor(t.y*$t))),r=Math.max(0,Math.min($t-1,Math.floor(t.z*$t)));return this.atlasData[r<<Gt+Gt|n<<Gt|e]/255}ensureBrickAllocated(t,e,n){const r=this.getGridIdx(t,e,n);let s=this.indirectionData[(r<<2)+3];if(!this.brickMap.has(r)){const a=this.freeBricks.pop();if(a===void 0)return;if(s==128){const l=a%Vt,c=Math.floor(a/Vt)%Vt;let d=Math.floor(a/(Vt*Vt))*wt<<Gt+Gt|c*wt<<Gt|l*wt,u=1,p=1<<Gt,_=1<<Gt+Gt;for(let x=0;x<wt;++x,d+=_){let m=d;for(let h=0;h<wt;++h,m+=p){let S=m;for(let E=0;E<wt;++E,S+=u)this.atlasData[S]=255}}}this.brickMap.set(r,a);const o=r*4;this.indirectionData[o]=a%Vt,this.indirectionData[o+1]=Math.floor(a/Vt)%Vt,this.indirectionData[o+2]=Math.floor(a/(Vt*Vt)),this.indirectionData[o+3]=255}}deallocateBrick(t,e){let n=this.brickMap.get(t);if(n!=null){this.brickMap.delete(t),this.freeBricks.push(n);let r=t<<2;this.indirectionData[r+3]=e?128:0;const s=n%Vt,a=Math.floor(n/Vt)%Vt;let l=Math.floor(n/(Vt*Vt))*wt<<Gt+Gt|a*wt<<Gt|s*wt,c=1,f=1<<Gt,d=1<<Gt+Gt;for(let u=0;u<wt;++u,l+=d){let p=l;for(let _=0;_<wt;++_,p+=f){let x=p;for(let m=0;m<wt;++m,x+=c)this.atlasData[x]=0}}}}writeToAtlas(t,e,n,r,s,a,o){const l=t%Vt,c=Math.floor(t/Vt)%Vt,f=Math.floor(t/(Vt*Vt)),d=(f*wt+r)*$t*$t+(c*wt+n)*$t+(l*wt+e);if(this.atlasData[d]=s,a){let u=f*wt<<Gt+Gt|c*wt<<Gt|l*wt,p=1,_=1<<Gt,x=1<<Gt+Gt,m=!0,h=!0;t:for(let S=0;S<wt;++S,u+=x){let E=u;for(let b=0;b<wt;++b,E+=_){let A=E;for(let C=0;C<wt;++C,A+=p){let R=this.atlasData[A];if(R<128&&(h=!1,!m)||R>128&&(m=!1,!h))break t}}}o.allPositive=m,o.allNegative=h}}initTexturesThreeJs(t){let e=t.uniforms;e==null&&(e={},t.uniforms=e);let n=new ms(this.indirectionData,Zt,Zt,Zt);n.format=ln,n.type=Ge,n.minFilter=Ce,n.magFilter=Ce,n.wrapS=Ne,n.wrapT=Ne,n.wrapR=Ne,n.unpackAlignment=1,n.needsUpdate=!0;let r=new ms(this.atlasData,$t,$t,$t);r.format=Io,r.type=Ge,r.minFilter=be,r.magFilter=be,r.wrapS=Ne,r.wrapT=Ne,r.wrapR=Ne,r.unpackAlignment=1,r.needsUpdate=!0;let s=new ms(this.colourData,$t,$t,$t);return s.format=ln,s.type=Ge,s.minFilter=be,s.magFilter=be,s.wrapS=Ne,s.wrapT=Ne,s.wrapR=Ne,s.unpackAlignment=1,s.needsUpdate=!0,e.uIndirectionTex={value:n},e.uAtlasTex={value:r},e.uColourTex={value:s},{iTex:n,aTex:r,cTex:s}}updateTexturesThreeJs(t){t.iTex.needsUpdate=!0,t.aTex.needsUpdate=!0}updatePaintThreeJs(t){t.cTex.needsUpdate=!0}initTextures(t,e){let n=t.getUniformLocation(e,"uIndirectionTex"),r=t.getUniformLocation(e,"uAtlasTex");t.uniform1i(n,0),t.uniform1i(r,1),t.activeTexture(t.TEXTURE0);const s=t.createTexture();t.bindTexture(t.TEXTURE_3D,s),t.texImage3D(t.TEXTURE_3D,0,t.RGBA8,Zt,Zt,Zt,0,t.RGBA,t.UNSIGNED_BYTE,this.indirectionData),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),t.activeTexture(t.TEXTURE1);const a=t.createTexture();return t.bindTexture(t.TEXTURE_3D,a),t.texImage3D(t.TEXTURE_3D,0,t.R8,$t,$t,$t,0,t.RED,t.UNSIGNED_BYTE,this.atlasData),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_3D,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),{iTex:s,aTex:a}}updateTextures(t,e){t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_3D,e.iTex),t.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Zt,Zt,Zt,t.RGBA,t.UNSIGNED_BYTE,this.indirectionData),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_3D,e.aTex),t.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$t,$t,$t,t.RED,t.UNSIGNED_BYTE,this.atlasData)}writeShaderCode(){return`uniform sampler3D uIndirectionTex;
uniform sampler3D uAtlasTex;
uniform sampler3D uColourTex;

const float VOXEL_SIZE = ${bn.toFixed(1)};
const float GRID_RES = ${Zt.toFixed(1)};
const float ATLAS_RES = ${$t.toFixed(1)};
const float HALF_VOLUME_SIZE = ${((lh>>1)*bn).toFixed(1)};

vec4 colour(vec3 p) {
  vec3 p_local = p + HALF_VOLUME_SIZE;
  vec3 uvw = p_local / ${(Zt*on*bn).toFixed(1)};
  vec4 brickInfo = texture(uIndirectionTex, uvw);
  vec3 cellLocal = fract(uvw * GRID_RES);
  if (brickInfo.a < 0.9) {
    return vec4(0.0, 0.0, 0.0, 1.0);
  }
  vec3 brickBase = brickInfo.xyz * 255.0 * 10.0;
  vec3 atlasVoxelPos = brickBase + 1.0 + (cellLocal * 8.0);
  vec3 atlasUVW = atlasVoxelPos / ATLAS_RES;
  vec4 c = texture(uColourTex, atlasUVW);
  return vec4(1.0 - c.r, 1.0 - c.g, 1.0 - c.b, 1.0);
}

float map(vec3 p, vec3 rd) {
    vec3 p_local = p + HALF_VOLUME_SIZE;
    vec3 uvw = p_local / ${(Zt*on*bn).toFixed(1)};
    vec4 brickInfo = texture(uIndirectionTex, uvw);
    vec3 cellLocal = fract(uvw * GRID_RES);
    if (brickInfo.a > 0.9) {
        vec3 brickBase = brickInfo.xyz * 255.0 * 10.0;
        vec3 atlasVoxelPos = brickBase + 1.0 + (cellLocal * 8.0);
        vec3 atlasUVW = atlasVoxelPos / ATLAS_RES;
        float val = texture(uAtlasTex, atlasUVW).r;
        return (0.5 - val) * 2.0 * VOXEL_SIZE;
    }
    vec3 p2 = cellLocal - 0.5;
    vec3 m = 1.0 / rd;
    vec3 n = p2 * m;
    vec3 k = abs(m) * 0.5;
    vec3 t = -n + k;
    float distToBound = min(t.x, min(t.y, t.z));
    float jumpDist = max(VOXEL_SIZE, distToBound * ${(on*bn).toFixed(1)});

    if (brickInfo.a > 0.4) {
        return -jumpDist;
    }
    return jumpDist;
}
`}}const lc={type:"change"},Wo={type:"start"},ch={type:"end"},is=new nr,cc=new ei,s0=Math.cos(70*Eu.DEG2RAD),Ae=new D,Ke=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ba=1e-6;class a0 extends eh{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Re,this._lastTargetPosition=new D,this._quat=new Re().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fl,this._sphericalDelta=new Fl,this._scale=1,this._panOffset=new D,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new D,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=l0.bind(this),this._onPointerDown=o0.bind(this),this._onPointerUp=c0.bind(this),this._onContextMenu=_0.bind(this),this._onMouseWheel=f0.bind(this),this._onKeyDown=d0.bind(this),this._onTouchStart=p0.bind(this),this._onTouchMove=m0.bind(this),this._onMouseDown=h0.bind(this),this._onMouseMove=u0.bind(this),this._interceptControlDown=g0.bind(this),this._interceptControlUp=x0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lc),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),r<-Math.PI?r+=Ke:r>Math.PI&&(r-=Ke),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ae.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(is.origin.copy(this.object.position),is.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(is.direction))<s0?this.object.lookAt(this.target):(cc.setFromNormalAndCoplanarPoint(this.object.up,this.target),is.intersectPlane(cc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ba||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ba||this._lastTargetPosition.distanceToSquared(this.target)>ba?(this.dispatchEvent(lc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ae.copy(r).sub(this.target);let s=Ae.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function o0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function l0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function c0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ch),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function h0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=oe.DOLLY;break;case Wi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}break;case Wi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Wo)}function u0(i){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function f0(i){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(i.preventDefault(),this.dispatchEvent(Wo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ch))}function d0(i){this.enabled!==!1&&this._handleKeyDown(i)}function p0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=oe.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=oe.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Wo)}function m0(i){switch(this._trackPointer(i),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=oe.NONE}}function _0(i){this.enabled!==!1&&i.preventDefault()}function g0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const v0=new Os(-1,1,1,-1,0,1);class M0 extends Fe{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}}const S0=new M0;class y0{constructor(t){this._mesh=new ut(S0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,v0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}const pi=new Eo,Ve=new D,ti=new D,me=new Re,hc={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},Ta={type:"change"},uc={type:"mouseDown",mode:null},fc={type:"mouseUp",mode:null},dc={type:"objectChange"};class E0 extends eh{constructor(t,e=null){super(void 0,e);const n=new C0(this);this._root=n;const r=new P0;this._gizmo=r,n.add(r);const s=new D0;this._plane=s,n.add(s);const a=this;function o(E,b){let A=b;Object.defineProperty(a,E,{get:function(){return A!==void 0?A:b},set:function(C){A!==C&&(A=C,s[E]=C,r[E]=C,a.dispatchEvent({type:E+"-changed",value:C}),a.dispatchEvent(Ta))}}),a[E]=b,s[E]=b,r[E]=b}o("camera",t),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0),o("minX",-1/0),o("maxX",1/0),o("minY",-1/0),o("maxY",1/0),o("minZ",-1/0),o("maxZ",1/0);const l=new D,c=new D,f=new Re,d=new Re,u=new D,p=new Re,_=new D,x=new D,m=new D,h=0,S=new D;o("worldPosition",l),o("worldPositionStart",c),o("worldQuaternion",f),o("worldQuaternionStart",d),o("cameraPosition",u),o("cameraQuaternion",p),o("pointStart",_),o("pointEnd",x),o("rotationAxis",m),o("rotationAngle",h),o("eye",S),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new Re,this._parentQuaternionInv=new Re,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new Re,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new Re,this._scaleStart=new D,this._getPointer=b0.bind(this),this._onPointerDown=A0.bind(this),this._onPointerHover=T0.bind(this),this._onPointerMove=w0.bind(this),this._onPointerUp=R0.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&pi.setFromCamera(t,this.camera);const e=Aa(this._gizmo.picker[this.mode],pi);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&pi.setFromCamera(t,this.camera);const e=Aa(this._plane,pi,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,uc.mode=this.mode,this.dispatchEvent(uc)}}pointerMove(t){const e=this.axis,n=this.mode,r=this.object;let s=this.space;if(n==="scale"?s="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(s="world"),r===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&pi.setFromCamera(t,this.camera);const a=Aa(this._plane,pi,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(me.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Ve.setFromMatrixPosition(r.parent.matrixWorld)),e.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Ve.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),ti.set(o,o,o)}else Ve.copy(this.pointStart),ti.copy(this.pointEnd),Ve.applyQuaternion(this._worldQuaternionInv),ti.applyQuaternion(this._worldQuaternionInv),ti.divide(Ve),e.search("X")===-1&&(ti.x=1),e.search("Y")===-1&&(ti.y=1),e.search("Z")===-1&&(ti.z=1);r.scale.copy(this._scaleStart).multiply(ti),this.scaleSnap&&(e.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(Ve.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ve.copy(this.rotationAxis).cross(this.eye))*o):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(hc[e]),Ve.copy(hc[e]),s==="local"&&Ve.applyQuaternion(this.worldQuaternion),Ve.cross(this.eye),Ve.length()===0?l=!0:this.rotationAngle=this._offset.dot(Ve.normalize())*o),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&e!=="E"&&e!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(me.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(me.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Ta),this.dispatchEvent(dc)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(fc.mode=this.mode,this.dispatchEvent(fc)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Ta),this.dispatchEvent(dc),this.pointStart.copy(this.pointEnd))}getRaycaster(){return pi}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,r){const s=this._gizmo.materialLib;s.xAxis.color.set(t),s.yAxis.color.set(e),s.zAxis.color.set(n),s.active.color.set(r),s.xAxisTransparent.color.set(t),s.yAxisTransparent.color.set(e),s.zAxisTransparent.color.set(n),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(t),s.yAxis._color&&s.yAxis._color.set(e),s.zAxis._color&&s.zAxis._color.set(n),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(t),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(e),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(n),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function b0(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function T0(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function A0(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function w0(i){this.enabled&&this.pointerMove(this._getPointer(i))}function R0(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Aa(i,t,e){const n=t.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||e)return n[r];return!1}const rs=new vn,he=new D(0,1,0),pc=new D(0,0,0),mc=new te,ss=new Re,xs=new Re,En=new D,_c=new te,vr=new D(1,0,0),mi=new D(0,1,0),Mr=new D(0,0,1),as=new D,pr=new D,mr=new D;class C0 extends Te{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class P0 extends Te{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new Fs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new Qc({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const r=e.clone();r.opacity=.5;const s=t.clone();s.color.setHex(16711680);const a=t.clone();a.color.setHex(65280);const o=t.clone();o.color.setHex(255);const l=t.clone();l.color.setHex(16711680),l.opacity=.5;const c=t.clone();c.color.setHex(65280),c.opacity=.5;const f=t.clone();f.color.setHex(255),f.opacity=.5;const d=t.clone();d.opacity=.25;const u=t.clone();u.color.setHex(16776960),u.opacity=.25;const p=t.clone();p.color.setHex(16776960);const _=t.clone();_.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:a,zAxis:o,active:p,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:f,activeTransparent:u};const x=new ke(0,.04,.1,12);x.translate(0,.05,0);const m=new ve(.08,.08,.08);m.translate(0,.04,0);const h=new Fe;h.setAttribute("position",new pe([0,0,0,1,0,0],3));const S=new ke(.0075,.0075,.5,3);S.translate(0,.25,0);function E(V,G){const N=new gi(V,.0075,3,64,G*Math.PI*2);return N.rotateY(Math.PI/2),N.rotateX(Math.PI/2),N}function b(){const V=new Fe;return V.setAttribute("position",new pe([0,0,0,1,1,1],3)),V}const A={X:[[new ut(x,s),[.5,0,0],[0,0,-Math.PI/2]],[new ut(x,s),[-.5,0,0],[0,0,Math.PI/2]],[new ut(S,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ut(x,a),[0,.5,0]],[new ut(x,a),[0,-.5,0],[Math.PI,0,0]],[new ut(S,a)]],Z:[[new ut(x,o),[0,0,.5],[Math.PI/2,0,0]],[new ut(x,o),[0,0,-.5],[-Math.PI/2,0,0]],[new ut(S,o),null,[Math.PI/2,0,0]]],XYZ:[[new ut(new Hi(.1,0),d),[0,0,0]]],XY:[[new ut(new ve(.15,.15,.01),f),[.15,.15,0]]],YZ:[[new ut(new ve(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ut(new ve(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new ut(new ke(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ut(new ke(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ut(new ke(.2,0,.6,4),n),[0,.3,0]],[new ut(new ke(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ut(new ke(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ut(new ke(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ut(new Hi(.2,0),n)]],XY:[[new ut(new ve(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ut(new ve(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ut(new ve(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new ut(new Hi(.01,2),r),null,null,null,"helper"]],END:[[new ut(new Hi(.01,2),r),null,null,null,"helper"]],DELTA:[[new Qn(b(),r),null,null,null,"helper"]],X:[[new Qn(h,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Qn(h,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Qn(h,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},P={XYZE:[[new ut(E(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new ut(E(.5,.5),s)]],Y:[[new ut(E(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new ut(E(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new ut(E(.75,1),u),null,[0,Math.PI/2,0]]]},g={AXIS:[[new Qn(h,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new ut(new si(.25,10,8),n)]],X:[[new ut(new gi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ut(new gi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ut(new gi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ut(new gi(.75,.1,2,24),n)]]},T={X:[[new ut(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new ut(S,s),[0,0,0],[0,0,-Math.PI/2]],[new ut(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ut(m,a),[0,.5,0]],[new ut(S,a)],[new ut(m,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ut(m,o),[0,0,.5],[Math.PI/2,0,0]],[new ut(S,o),[0,0,0],[Math.PI/2,0,0]],[new ut(m,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ut(new ve(.15,.15,.01),f),[.15,.15,0]]],YZ:[[new ut(new ve(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ut(new ve(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ut(new ve(.1,.1,.1),d)]]},I={X:[[new ut(new ke(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ut(new ke(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ut(new ke(.2,0,.6,4),n),[0,.3,0]],[new ut(new ke(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ut(new ke(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ut(new ke(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ut(new ve(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ut(new ve(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ut(new ve(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ut(new ve(.2,.2,.2),n),[0,0,0]]]},U={X:[[new Qn(h,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Qn(h,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Qn(h,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function z(V){const G=new Te;for(const N in V)for(let Y=V[N].length;Y--;){const J=V[N][Y][0].clone(),et=V[N][Y][1],it=V[N][Y][2],Dt=V[N][Y][3],Lt=V[N][Y][4];J.name=N,J.tag=Lt,et&&J.position.set(et[0],et[1],et[2]),it&&J.rotation.set(it[0],it[1],it[2]),Dt&&J.scale.set(Dt[0],Dt[1],Dt[2]),J.updateMatrix();const Kt=J.geometry.clone();Kt.applyMatrix4(J.matrix),J.geometry=Kt,J.renderOrder=1/0,J.position.set(0,0,0),J.rotation.set(0,0,0),J.scale.set(1,1,1),G.add(J)}return G}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=z(A)),this.add(this.gizmo.rotate=z(P)),this.add(this.gizmo.scale=z(T)),this.add(this.picker.translate=z(C)),this.add(this.picker.rotate=z(M)),this.add(this.picker.scale=z(I)),this.add(this.helper.translate=z(R)),this.add(this.helper.rotate=z(g)),this.add(this.helper.scale=z(U)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:xs;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const a=r[s];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(me.setFromEuler(rs.set(0,0,0)),a.quaternion.copy(n).multiply(me),Math.abs(he.copy(vr).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(me.setFromEuler(rs.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(me),Math.abs(he.copy(mi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(me.setFromEuler(rs.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(me),Math.abs(he.copy(Mr).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(me.setFromEuler(rs.set(0,Math.PI/2,0)),he.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(mc.lookAt(pc,he,mi)),a.quaternion.multiply(me),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),Ve.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ve.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(Ve),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(he.copy(vr).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(he.copy(mi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(he.copy(Mr).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(he.copy(Mr).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(he.copy(vr).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(he.copy(mi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(ss.copy(n),he.copy(this.eye).applyQuaternion(me.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(mc.lookAt(this.eye,pc,mi)),a.name==="X"&&(me.setFromAxisAngle(vr,Math.atan2(-he.y,he.z)),me.multiplyQuaternions(ss,me),a.quaternion.copy(me)),a.name==="Y"&&(me.setFromAxisAngle(mi,Math.atan2(he.x,he.z)),me.multiplyQuaternions(ss,me),a.quaternion.copy(me)),a.name==="Z"&&(me.setFromAxisAngle(Mr,Math.atan2(he.y,he.x)),me.multiplyQuaternions(ss,me),a.quaternion.copy(me))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis?(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1):this.axis.split("").some(function(l){return a.name===l})&&(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1))}super.updateMatrixWorld(t)}}class D0 extends ut{constructor(){super(new Ir(1e5,1e5,2,2),new Fs({visible:!1,wireframe:!0,side:An,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),as.copy(vr).applyQuaternion(e==="local"?this.worldQuaternion:xs),pr.copy(mi).applyQuaternion(e==="local"?this.worldQuaternion:xs),mr.copy(Mr).applyQuaternion(e==="local"?this.worldQuaternion:xs),he.copy(pr),this.mode){case"translate":case"scale":switch(this.axis){case"X":he.copy(this.eye).cross(as),En.copy(as).cross(he);break;case"Y":he.copy(this.eye).cross(pr),En.copy(pr).cross(he);break;case"Z":he.copy(this.eye).cross(mr),En.copy(mr).cross(he);break;case"XY":En.copy(mr);break;case"YZ":En.copy(as);break;case"XZ":he.copy(mr),En.copy(pr);break;case"XYZ":case"E":En.set(0,0,0);break}break;case"rotate":default:En.set(0,0,0)}En.length()===0?this.quaternion.copy(this.cameraQuaternion):(_c.lookAt(Ve.set(0,0,0),En,he),this.quaternion.setFromRotationMatrix(_c)),super.updateMatrixWorld(t)}}var I0=Ie("<canvas>");const gc=50,L0=i=>{let[t,e]=_n(),[n,r]=_n(),[s,a]=_n(),[o,l]=_n(),[c,f]=_n(),[d,u]=_n(),p=new Yu,_=new sf;_.position.set(1,1,1),p.add(_);let m=`
precision highp float;
precision highp int;
precision highp usampler3D;
precision highp sampler3D;

uniform vec2 resolution;
uniform float uFocalLength;
uniform mat4 viewMatrixInverse;
uniform mat4 projectionMatrixInverse;
uniform mat4 uCameraViewMatrix;
uniform mat4 uCameraProjectionMatrix;

//out vec4 fragColour;

${i.brickMap.writeShaderCode()}

float map2(vec3 p) {
  p += 512.0 * VOXEL_SIZE;
  return abs(length(p - vec3(512.0*VOXEL_SIZE)) - 100.0 * VOXEL_SIZE);
}

const int MAX_STEPS = 200;
const float MIN_DIST = 1.0;
const float MAX_DIST = 10000.0;

bool negativeMarch(vec3 ro, vec3 rd, out float t) {
    t = 0.0;
    for(int i = 0; i < MAX_STEPS; i++) {
        vec3 p = ro + rd * t;
        float d = -map(p, rd);
        
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

bool march(vec3 ro, vec3 rd, out float t, out bool negative) {
    t = 0.0;
    for(int i = 0; i < MAX_STEPS; i++) {
        vec3 p = ro + rd * t;
        float d = map(p, rd);

        if (d < 0.0) {
            negative = true;
            return negativeMarch(ro, rd, t);
        }
        
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
    const float eps = 4.0;
    const vec2 h = vec2(eps, 0);
    const vec3 z = vec3(0.0);
    return normalize(vec3(
        map(p + h.xyy, z) - map(p - h.xyy, z),
        map(p + h.yxy, z) - map(p - h.yxy, z),
        map(p + h.yyx, z) - map(p - h.yyx, z)
    ));
}

void main(void) {
  float fl = uFocalLength;
  vec2 uv = gl_FragCoord.xy / resolution;
  vec4 ndc = vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  vec4 viewPos = projectionMatrixInverse * ndc;
  viewPos /= viewPos.w;
  vec4 worldPos = viewMatrixInverse * viewPos;
  vec3 ro = cameraPosition;
  vec3 rd = normalize(worldPos.xyz - ro);
  float t = 0.0;
  bool negative = false;
  bool hit = march(ro, rd, t, negative);
  if (!hit) {
    gl_FragColor = vec4(0.2, 0.2, 0.2, 1.0);
    gl_FragDepth = 1.0; 
    return;
  }
  vec3 p = ro + rd*t;
  vec3 n = normal(p);
  if (negative) {
    n = -n;
  }
  float s = 0.8*dot(n,normalize(vec3(1,1,1))) + 0.2;
  vec4 c = colour(p);
  c = vec4(c.rgb * s, c.a);
  gl_FragColor = c;
  vec4 clipPos = uCameraProjectionMatrix * uCameraViewMatrix * vec4(p, 1.0);
  float ndcDepth = clipPos.z / clipPos.w;
  if (ndcDepth < -1.0 || ndcDepth > 1.0) {
    ndcDepth = 1.0;
  }
  gl_FragDepth = (ndcDepth + 1.0) * 0.5;
}
`;console.log(m.split(`
`).map((P,g)=>`${g+1}: ${P}`).join(`
`));let h={uniforms:{resolution:{value:new At},uFocalLength:{value:0},viewMatrixInverse:{value:new te},projectionMatrixInverse:{value:new te},uCameraViewMatrix:{value:new te},uCameraProjectionMatrix:{value:new te},cameraPosition:{value:new D}},fragmentShader:m,depthWrite:!0},S=i.brickMap.initTexturesThreeJs(h),E=new Mn(h),b=new y0(E),A;{let P=!1;A=()=>{P||(P=!0,requestAnimationFrame(()=>{let g=o();if(g==null)return;let M=s();if(M==null)return;let T=c();T!=null&&(T.update(),E.uniforms.viewMatrixInverse.value.copy(M.matrixWorld),E.uniforms.projectionMatrixInverse.value.copy(M.projectionMatrixInverse),E.uniforms.uCameraViewMatrix.value.copy(M.matrixWorldInverse),E.uniforms.uCameraProjectionMatrix.value.copy(M.projectionMatrix),E.uniforms.cameraPosition.value.copy(M.position),g.clearDepth(),b.render(g),g.render(p,M),P=!1)}))}}let C=new Eo,R=new At;return i.onInit({canvasSize:n,onBrickMapChanged(){i.brickMap.updateTexturesThreeJs(S),A()},onBrickMapPaintChanged(){i.brickMap.updatePaintThreeJs(S),A()},rerender:A,moveTransform(){d()?.setMode("translate")},rotateTransform(){d()?.setMode("rotate")},scaleTransform(){d()?.setMode("scale")},screenCoordsToRay(P,g){let M=n();if(M==null)return;let T=s();if(T==null)return;let I=R.set(P.x/M.x*2-1,-(P.y/M.y)*2+1),U=C;U.setFromCamera(I,T),g.copy(U.ray)},*getThreeObjectsUnderScreenCoords(P){let g=n();if(g==null)return;let M=s();if(M==null)return;let T=new At(P.x/g.x*2-1,-(P.y/g.y)*2+1),I=new Eo;I.setFromCamera(T,M);for(let U of I.intersectObject(p,!0))yield U.object}}),Dh(()=>{let P=t();if(P==null)return;let g=new fn(gc,1,10,1e4);g.position.set(0,0,5e3),g.lookAt(new D(0,0,0));let M=new n0({canvas:P});M.setPixelRatio(window.devicePixelRatio),M.autoClear=!1;let T=()=>{let N=P.getBoundingClientRect();r(new At(N.width,N.height)),g.aspect=N.width/N.height,g.updateProjectionMatrix();let Y=N.width*window.devicePixelRatio,J=N.height*window.devicePixelRatio,et=.5*J/Math.tan(.5*gc*Math.PI/180),it=1/i.pixelSize;M.setSize(it*N.width,it*N.height,!1),E.uniforms.resolution.value.set(it*Y,it*J),E.uniforms.uFocalLength.value=it*et,A()},I=new ResizeObserver(()=>{T()});Je(Qe(()=>i.pixelSize,()=>T(),{defer:!0})),I.observe(P),ji(()=>{I.unobserve(P),I.disconnect()});let U=new a0(g,P);U.enableDamping=!1,U.update(),U.addEventListener("change",()=>A());let z=new E0(g,P);Je(Qe(()=>i.useTransformControlOnObject3D,N=>{N==null?z.detach():z.attach(N)}));let[V,G]=_n(!1);z.addEventListener("dragging-changed",N=>{let Y=N.value;G(Y),i.onDragingEvent(Y)}),Je(()=>{U.enabled=!(V()||i.disableOrbit)}),z.addEventListener("change",()=>{A()}),p.add(z.getHelper()),yr(()=>{a(g),l(M),f(U),u(z)}),A()}),Je(Qe(()=>i.overlayObject3D,P=>{P!=null&&(p.add(P),ji(()=>{p.remove(P)}),We(()=>A()))})),(()=>{var P=I0(),g=e;return typeof g=="function"?wc(g,P):e=P,an(P,"width","100%"),an(P,"height","100%"),P})()},wo=Symbol("store-raw"),qi=Symbol("store-node"),zn=Symbol("store-has"),hh=Symbol("store-self");function uh(i){let t=i[Si];if(!t&&(Object.defineProperty(i,Si,{value:t=new Proxy(i,F0)}),!Array.isArray(i))){const e=Object.keys(i),n=Object.getOwnPropertyDescriptors(i);for(let r=0,s=e.length;r<s;r++){const a=e[r];n[a].get&&Object.defineProperty(i,a,{enumerable:n[a].enumerable,get:n[a].get.bind(t)})}}return t}function Cs(i){let t;return i!=null&&typeof i=="object"&&(i[Si]||!(t=Object.getPrototypeOf(i))||t===Object.prototype||Array.isArray(i))}function Rr(i,t=new Set){let e,n,r,s;if(e=i!=null&&i[wo])return e;if(!Cs(i)||t.has(i))return i;if(Array.isArray(i)){Object.isFrozen(i)?i=i.slice(0):t.add(i);for(let a=0,o=i.length;a<o;a++)r=i[a],(n=Rr(r,t))!==r&&(i[a]=n)}else{Object.isFrozen(i)?i=Object.assign({},i):t.add(i);const a=Object.keys(i),o=Object.getOwnPropertyDescriptors(i);for(let l=0,c=a.length;l<c;l++)s=a[l],!o[s].get&&(r=i[s],(n=Rr(r,t))!==r&&(i[s]=n))}return i}function Ps(i,t){let e=i[t];return e||Object.defineProperty(i,t,{value:e=Object.create(null)}),e}function Cr(i,t,e){if(i[t])return i[t];const[n,r]=_n(e,{equals:!1,internal:!0});return n.$=r,i[t]=n}function U0(i,t){const e=Reflect.getOwnPropertyDescriptor(i,t);return!e||e.get||!e.configurable||t===Si||t===qi||(delete e.value,delete e.writable,e.get=()=>i[Si][t]),e}function fh(i){wa()&&Cr(Ps(i,qi),hh)()}function N0(i){return fh(i),Reflect.ownKeys(i)}const F0={get(i,t,e){if(t===wo)return i;if(t===Si)return e;if(t===tl)return fh(i),e;const n=Ps(i,qi),r=n[t];let s=r?r():i[t];if(t===qi||t===zn||t==="__proto__")return s;if(!r){const a=Object.getOwnPropertyDescriptor(i,t);wa()&&(typeof s!="function"||i.hasOwnProperty(t))&&!(a&&a.get)&&(s=Cr(n,t,s)())}return Cs(s)?uh(s):s},has(i,t){return t===wo||t===Si||t===tl||t===qi||t===zn||t==="__proto__"?!0:(wa()&&Cr(Ps(i,zn),t)(),t in i)},set(){return!0},deleteProperty(){return!0},ownKeys:N0,getOwnPropertyDescriptor:U0};function Ds(i,t,e,n=!1){if(!n&&i[t]===e)return;const r=i[t],s=i.length;e===void 0?(delete i[t],i[zn]&&i[zn][t]&&r!==void 0&&i[zn][t].$()):(i[t]=e,i[zn]&&i[zn][t]&&r===void 0&&i[zn][t].$());let a=Ps(i,qi),o;if((o=Cr(a,t,r))&&o.$(()=>e),Array.isArray(i)&&i.length!==s){for(let l=i.length;l<s;l++)(o=a[l])&&o.$();(o=Cr(a,"length",s))&&o.$(i.length)}(o=a[hh])&&o.$()}function dh(i,t){const e=Object.keys(t);for(let n=0;n<e.length;n+=1){const r=e[n];Ds(i,r,t[r])}}function O0(i,t){if(typeof t=="function"&&(t=t(i)),t=Rr(t),Array.isArray(t)){if(i===t)return;let e=0,n=t.length;for(;e<n;e++){const r=t[e];i[e]!==r&&Ds(i,e,r)}Ds(i,"length",n)}else dh(i,t)}function Sr(i,t,e=[]){let n,r=i;if(t.length>1){n=t.shift();const a=typeof n,o=Array.isArray(i);if(Array.isArray(n)){for(let l=0;l<n.length;l++)Sr(i,[n[l]].concat(t),e);return}else if(o&&a==="function"){for(let l=0;l<i.length;l++)n(i[l],l)&&Sr(i,[l].concat(t),e);return}else if(o&&a==="object"){const{from:l=0,to:c=i.length-1,by:f=1}=n;for(let d=l;d<=c;d+=f)Sr(i,[d].concat(t),e);return}else if(t.length>1){Sr(i[n],t,[n].concat(e));return}r=i[n],e=[n].concat(e)}let s=t[0];typeof s=="function"&&(s=s(r,e),s===r)||n===void 0&&s==null||(s=Rr(s),n===void 0||Cs(r)&&Cs(s)&&!Array.isArray(s)?dh(r,s):Ds(i,n,s))}function ks(...[i,t]){const e=Rr(i||{}),n=Array.isArray(e),r=uh(e);function s(...a){yr(()=>{n&&a.length===1?O0(e,a[0]):Sr(e,a)})}return[r,s]}class xc{constructor(t){}}var B0=Ie('<button class="btn btn-primary">End Draw Mode');class z0{instructions;disableOrbit=()=>!0;constructor(t){let e=Qt(()=>t.canvasSize()!=null),n=Qt(()=>t.pointerPos()!=null);Je(Qe([e,n,t.pointerDown],([s,a,o])=>{if(!s||!a||!o)return;let l=t.canvasSize,c=t.pointerPos,f,d;{let u=We(l),p=We(c);f=p.x-.5*u.x,d=-p.y+.5*u.y}k0(t.brickMap,f,d),t.updateSdf(),Je(Qe(c,u=>{let p=We(l),_=u.x-.5*p.x,x=-u.y+.5*p.y,m=_-f,h=x-d;m*m+h*h<=25||(V0(t.brickMap,f,d,_,x),f=_,d=x,t.updateSdf())},{defer:!0}))}));let r=()=>(()=>{var s=B0();return s.$$click=()=>t.endMode(),s})();this.instructions=r}}function k0(i,t,e){let n=512+Math.round(t),r=512+Math.round(e),s=512,a=20;for(let o=-a-2;o<=a+2;++o)for(let l=-a-2;l<=a+2;++l)for(let c=-a-2;c<=a+2;++c){let f=Math.sqrt(o*o+l*l+c*c)-a;if(f/=Math.sqrt(3),f<-1||f>1)continue;let d=128-Math.floor(Math.max(-1,Math.min(1,f))*127);d<1&&(d=1),d>255&&(d=255);let u=n+c,p=r+l,_=s+o;u<0||u>=1024||p<0||p>=1024||_<0||_>=1024||i.set(u,p,_,d)}}function V0(i,t,e,n,r){let s=512+Math.round(t),a=512+Math.round(e),o=512,l=512+Math.round(n),c=512+Math.round(r),f=512,d=20,u=l-s,p=c-a,_=f-o,x=u*u+p*p+_*_,m=(R,P,g)=>{let M=((R-s)*u+(P-a)*p+(g-o)*_)/x;M=Math.max(0,Math.min(1,M));let T=s+u*M,I=a+p*M,U=o+_*M,z=R-T,V=P-I,G=g-U;return Math.sqrt(z*z+V*V+G*G)-d},h=Math.min(s,l)-d,S=Math.max(s,l)+d,E=Math.min(a,c)-d,b=Math.max(a,c)+d,A=Math.min(o,f)-d,C=Math.max(o,f)+d;for(let R=A-2;R<=C+2;++R)for(let P=E-2;P<=b+2;++P)for(let g=h-2;g<=S+2;++g){if(R<0||R>=1024||P<0||P>=1024||g<0||g>=1024)continue;let M=m(g,P,R);if(M/=Math.sqrt(3),M<-1||M>1)continue;let T=128-Math.floor(Math.max(-1,Math.min(1,M))*127);T<1&&(T=1),T>255&&(T=255);let I=i.get(g,P,R);I!=0&&(T=Math.max(T,I)),i.set(g,P,R,T)}}Pr(["click"]);class G0{value;constructor(t){this.value=t}}var H0=Ie('<div><label class="label bg-base-100">Select a primitive to insert, OR select an existing primitive on the screen to transform:'),W0=Ie('<button class="btn btn-primary">Sphere'),X0=Ie('<button class="btn btn-primary ml-2">Cube'),Y0=Ie('<div><label class="label bg-base-100">Otherwise if your finish, press the I am finished button:'),q0=Ie('<button class="btn btn-primary">I am finished'),j0=Ie('<div><label class="label bg-base-100">Transform the primitive, then click place it:'),$0=Ie('<button class="btn btn-primary">Place It');const Vi=1500,os=1e3;class Z0{instructions;overlayObject3D;useTransformControlOnObject3D;onClick;constructor(t){let[e,n]=ks({existingPrimitives:[],movingExistingPrimitive:void 0,insertingPrimitive:void 0});ji(()=>{for(let u of e.existingPrimitives)u.value.cleanup();n("existingPrimitives",[])});let r=u=>{n("insertingPrimitive",u)},s=()=>{let u=o();u!=null?(u.autoCleanup=!1,yr(()=>{n("insertingPrimitive",void 0),n("existingPrimitives",p=>[...p,new G0({primitive:u.primitive,object:u.object,cleanup:u.cleanup})])})):e.movingExistingPrimitive!=null&&n("movingExistingPrimitive",void 0)},a=()=>{let u=[];for(let R of e.existingPrimitives){let P=R.value,g=P.object,M=new D,T=new Re,I=new D;g.matrix.decompose(M,T,I);let U,z=new Re;if(z.copy(T),z.conjugate(),P.primitive=="Sphere"){let V=new D(os,os,os).multiply(I),G=new D,N=new D,Y=new D().copy(V).multiply(V);U=J=>{G.copy(J),G.sub(M),G.applyQuaternion(z),N.copy(G),G.divide(V),N.divide(Y);let et=G.length(),it=N.length();return et*(et-1)/it}}else{let V=new D(Vi,Vi,Vi).multiply(I).multiplyScalar(.5),G=new D,N=new D;U=Y=>{G.copy(Y),G.sub(M),G.applyQuaternion(z),N.copy(G),N.x=Math.abs(N.x),N.y=Math.abs(N.y),N.z=Math.abs(N.z),N.sub(V);let J=Math.min(Math.max(N.x,N.y,N.z),0);return N.x=Math.max(N.x,0),N.y=Math.max(N.y,0),N.z=Math.max(N.z,0),N.length()+J}}u.push(U)}let p=R=>{let P=u[0](R);for(let g=1;g<u.length;++g)P=Math.min(P,u[g](R));return P},_=new Ei;{let R=!0,P=new Ei;for(let g of e.existingPrimitives){let M=g.value.object;M instanceof ut&&M.geometry instanceof Fe&&M.geometry.computeBoundingBox(),P.setFromObject(M),R?(_.copy(P),R=!1):_.union(P)}}let x=Math.sqrt(3),m=new D,h=Math.max(0,512+Math.floor(_.min.z/10))-1,S=Math.min(1023,512+Math.ceil(_.max.z/10))+1,E=Math.max(0,512+Math.floor(_.min.y/10))-1,b=Math.min(1023,512+Math.ceil(_.max.y/10))+1,A=Math.max(0,512+Math.floor(_.min.x/10))-1,C=Math.min(1023,512+Math.ceil(_.max.x/10))+1;for(let R=h;R<=S;++R){let P=(R-512)*10;for(let g=E;g<=b;++g){let M=(g-512)*10;for(let T=A;T<=C;++T){let I=(T-512)*10;m.set(I,M,P);let U=p(m)/(10*x),z=128-Math.floor(Math.max(-1,Math.min(1,U))*127);z<1&&(z=1),z>255&&(z=255),z=Math.max(z,t.brickMap.get(T,g,R)),t.brickMap.set(T,g,R,z)}}}t.updateSdf(),t.endMode()},o=Qt(Qe(()=>e.insertingPrimitive,u=>{if(u==null)return;let p,_=new Go({color:"blue"});switch(u){case"Cube":{p=new ve(Vi,Vi,Vi);break}case"Sphere":{p=new si(os);break}default:throw new Error("Unreachable")}let x=new ut(p,_),m={primitive:u,autoCleanup:!0,cleanup:()=>{p.dispose(),_.dispose()},object:x};return ji(()=>{m.autoCleanup&&m.cleanup()}),m})),l=()=>kn(Oh,{get children(){return[kn(nl,{get when(){return Bh(()=>e.insertingPrimitive==null)()&&e.movingExistingPrimitive==null},get children(){return[H0(),(()=>{var u=W0();return u.$$click=()=>r("Sphere"),u})(),(()=>{var u=X0();return u.$$click=()=>r("Cube"),u})(),Y0(),(()=>{var u=q0();return u.$$click=()=>a(),u})()]}}),kn(nl,{get when(){return e.insertingPrimitive!=null||e.movingExistingPrimitive!=null},get children(){return[j0(),(()=>{var u=$0();return u.$$click=()=>s(),u})()]}})]}}),c=Qt(()=>{let u=o()?.object;if(u==null&&e.existingPrimitives.length==0)return;let p=new gr;u!=null&&p.add(u);for(let _ of e.existingPrimitives)p.add(_.value.object);return p}),f=Qt(()=>o()?.object??e.movingExistingPrimitive),d=()=>{if(e.movingExistingPrimitive!=null||e.insertingPrimitive!=null)return;let u=t.pointerPos();if(u!=null){let p=new Set;for(let _ of e.existingPrimitives)p.add(_.value.object);for(let _ of t.getThreeObjectsUnderScreenCoords(u))if(p.has(_)){n("movingExistingPrimitive",_);break}}};this.instructions=l,this.overlayObject3D=c,this.useTransformControlOnObject3D=f,this.onClick=d}}Pr(["click"]);var K0=Ie('<div class=join><label class=label>Brush<input type=radio name=BrushSign class="btn btn-sm join-item"aria-label=-><input type=radio name=BrushSign class="btn btn-sm join-item"aria-label=+>'),J0=Ie("<label class=label>Brush Size:<input type=range class=range min=8 max=40>"),Q0=Ie("<label class=label>Softness:<input type=range class=range min=0 max=1 step=0.05>"),tg=Ie('<button class="btn btn-primary ml-2">End Sculpt Mode');class eg{instructions;disableOrbit;overlayObject3D;constructor(t){let[e,n]=ks({brushSize:8,softness:0,isNegativeBrush:!0}),r=new Ho().copy(t.brickMap),s=Qt(()=>{let p=t.pointerPos();if(p==null)return;let _=new nr;return t.screenCoordsToRay(p,_),_}),a=Qt(()=>{let p=s();if(p==null)return;let _=[0];return r.march(p.origin,p.direction,_)?new D().copy(p.direction).multiplyScalar(_[0]).add(p.origin):void 0});Je(Qe(t.pointerDown,p=>{if(!p){r.copy(t.brickMap);return}let _=Qt(()=>a()!=null);Je(Qe(_,x=>{if(!x)return;let m=a;ng(t.brickMap,m(),e.isNegativeBrush,e.brushSize,e.softness*e.brushSize/8),t.updateSdf();let h=m();Je(Qe(m,S=>{h.distanceTo(S)<15||(ig(t.brickMap,h,S,e.isNegativeBrush,e.brushSize,e.softness*e.brushSize/8),t.updateSdf(),h=S)},{defer:!0}))}))},{defer:!0}));let o=new si(.5*We(()=>e.brushSize)*10),l=new Go({color:"blue"}),c=new ut(o,l);Je(Qe(()=>e.brushSize,p=>{o.dispose(),o=new si(.5*p*10),c=new ut(o,l),t.rerender()})),ji(()=>{o.dispose(),l.dispose()});let f=()=>[(()=>{var p=K0(),_=p.firstChild,x=_.firstChild,m=x.nextSibling,h=m.nextSibling;return m.addEventListener("change",S=>{S.currentTarget.checked&&n("isNegativeBrush",!0)}),h.addEventListener("change",S=>{S.currentTarget.checked&&n("isNegativeBrush",!1)}),xn(()=>m.checked=e.isNegativeBrush),xn(()=>h.checked=!e.isNegativeBrush),p})(),(()=>{var p=J0(),_=p.firstChild,x=_.nextSibling;return x.$$input=m=>{let h=Number.parseInt(m.currentTarget.value);Number.isNaN(h)||n("brushSize",h)},xn(()=>x.value=e.brushSize.toString()),p})(),(()=>{var p=Q0(),_=p.firstChild,x=_.nextSibling;return x.$$input=m=>{let h=Number.parseFloat(m.currentTarget.value);Number.isNaN(h)||n("softness",h)},xn(()=>x.value=e.softness),p})(),(()=>{var p=tg();return p.$$click=()=>t.endMode(),p})()],d=Qt(()=>a()!=null),u=Qt(()=>{let p=a();if(p==null){t.rerender();return}return c.position.copy(p),c.updateMatrix(),c.matrixWorldNeedsUpdate=!0,t.rerender(),c});this.instructions=f,this.disableOrbit=d,this.overlayObject3D=u}}function Xo(i,t,e){if(e==0)return Math.min(i,t);e*=4;let n=Math.max(e-Math.abs(i-t),0);return Math.min(i,t)-n*n*.25/e}function ph(i,t,e){return-Xo(-i,t,e)}function mh(i,t,e,n){return(128-i.get(t,e,n))/127}function _h(i,t,e,n,r){let s=128-Math.floor(Math.max(-1,Math.min(1,r))*127);s<1&&(s=1),s>255&&(s=255),i.set(t,e,n,s)}function ng(i,t,e,n,r){let s=512+Math.round(t.x/10),a=512+Math.round(t.y/10),o=512+Math.round(t.z/10),l=Math.round(.5*n),c=l+Math.ceil(r);for(let f=-c-2;f<=c+2;++f)for(let d=-c-2;d<=c+2;++d)for(let u=-c-2;u<=c+2;++u){let p=s+u,_=a+d,x=o+f;if(p<0||p>=1024||_<0||_>=1024||x<0||x>=1024)continue;let m=Math.sqrt(f*f+d*d+u*u)-l;m/=Math.sqrt(3);let h=mh(i,p,_,x),S;e?S=ph(h,m,r):S=Xo(h,m,r),_h(i,p,_,x,S)}}function ig(i,t,e,n,r,s){let a=512+Math.round(t.x/10),o=512+Math.round(t.y/10),l=512+Math.round(t.z/10),c=512+Math.round(e.x/10),f=512+Math.round(e.y/10),d=512+Math.round(e.z/10),u=Math.round(.5*r),p=c-a,_=f-o,x=d-l,m=p*p+_*_+x*x,h=(g,M,T)=>{let I=((g-a)*p+(M-o)*_+(T-l)*x)/m;I=Math.max(0,Math.min(1,I));let U=a+p*I,z=o+_*I,V=l+x*I,G=g-U,N=M-z,Y=T-V;return Math.sqrt(G*G+N*N+Y*Y)-u},S=u+Math.ceil(s),E=Math.min(a,c)-S,b=Math.max(a,c)+S,A=Math.min(o,f)-S,C=Math.max(o,f)+S,R=Math.min(l,d)-S,P=Math.max(l,d)+S;for(let g=R-2;g<=P+2;++g)for(let M=A-2;M<=C+2;++M)for(let T=E-2;T<=b+2;++T){if(g<0||g>=1024||M<0||M>=1024||T<0||T>=1024)continue;let I=h(T,M,g);I/=Math.sqrt(3);let U=mh(i,T,M,g),z;n?z=ph(U,I,s):z=Xo(U,I,s),_h(i,T,M,g,z)}}Pr(["input","click"]);class gh{reader;leftOver=void 0;leftOverOffset=0;constructor(t){this.reader=t}async read(t,e,n){let r=e,s=r+n;for(;r<s;){if(this.leftOver==null){let l=await this.reader.read();if(l.done)return r-e;this.leftOver=l.value}let a=this.leftOver.length-this.leftOverOffset,o=Math.min(a,s-r);t.set(this.leftOver.subarray(this.leftOverOffset,this.leftOverOffset+o),r),o==a?(this.leftOver=void 0,this.leftOverOffset=0):this.leftOverOffset+=o,r+=o}return n}readBuffer=new Uint8Array(16);async readU16(){return await this.read(this.readBuffer,0,2),this.readBuffer[0]|this.readBuffer[1]<<8}}async function rg(i,t,e){let n=new gh(t);await e.load(n)}async function sg(i,t,e){await e.save(t)}async function ag(i,t){let e=i.getReader(),n,r;{let o=new gh(e);n=await o.readU16(),o.leftOver!=null?r=o.leftOver.subarray(o.leftOverOffset):r=void 0}let a=new ReadableStream({async start(o){try{for(r!=null&&o.enqueue(r);;){let{value:l,done:c}=await e.read();if(c)break;o.enqueue(l)}o.close()}catch(l){o.error(l)}finally{e.releaseLock()}}}).pipeThrough(new DecompressionStream("gzip")).getReader();await rg(n,a,t)}async function og(i,t){let e=1,n=new Uint8Array([e&255,e>>8&255]);{let o=i.getWriter();await o.write(n),o.releaseLock()}let r=new CompressionStream("gzip"),s=r.writable.getWriter(),a=(async()=>{await sg(e,s,t),await s.close()})();await r.readable.pipeTo(i),await a}async function lg(i,t){let e=await navigator.storage.getDirectory(),n;try{n=await e.getFileHandle(i)}catch(a){if(a instanceof DOMException&&a.name=="NotFoundError")return!1;throw a}let r=await n.getFile(),s=await r.stream();return await ag(s,t),console.log("File size:",r.size),!0}async function cg(i,t){let n=await(await navigator.storage.getDirectory()).getFileHandle(i,{create:!0}),r=await n.createWritable();await og(r,t);let s=await n.getFile();console.log("File size:",s.size)}var hg=Ie("<label class=label>Brush Size:<input type=range class=range min=8 max=40>"),ug=Ie('<button class="btn btn-primary ml-2">End Paint Mode');class fg{instructions;disableOrbit;overlayObject3D;constructor(t){let[e,n]=ks({brushSize:8,colour:new Yt("blue")}),r=new Ho().copy(t.brickMap),s=Qt(()=>{let p=t.pointerPos();if(p==null)return;let _=new nr;return t.screenCoordsToRay(p,_),_}),a=Qt(()=>{let p=s();if(p==null)return;let _=[0];return r.march(p.origin,p.direction,_)?new D().copy(p.direction).multiplyScalar(_[0]).add(p.origin):void 0});Je(Qe(t.pointerDown,p=>{if(!p){r.copy(t.brickMap);return}let _=Qt(()=>a()!=null);Je(Qe(_,x=>{if(!x)return;let m=a;dg(t.brickMap,m(),e.brushSize,e.colour),t.updateSdf();let h=m();Je(Qe(m,S=>{h.distanceTo(S)<15||(pg(t.brickMap,h,S,e.brushSize,e.colour),t.updatePaint(),h=S)},{defer:!0}))}))},{defer:!0}));let o=new si(.5*We(()=>e.brushSize)*10),l=new Go({color:"blue"}),c=new ut(o,l);Je(Qe(()=>e.brushSize,p=>{o.dispose(),o=new si(.5*p*10),c=new ut(o,l),t.rerender()})),ji(()=>{o.dispose(),l.dispose()});let f=()=>[(()=>{var p=hg(),_=p.firstChild,x=_.nextSibling;return x.$$input=m=>{let h=Number.parseInt(m.currentTarget.value);Number.isNaN(h)||n("brushSize",h)},xn(()=>x.value=e.brushSize.toString()),p})(),(()=>{var p=ug();return p.$$click=()=>t.endMode(),p})()],d=Qt(()=>a()!=null),u=Qt(()=>{let p=a();if(p==null){t.rerender();return}return c.position.copy(p),c.updateMatrix(),c.matrixWorldNeedsUpdate=!0,t.rerender(),c});this.instructions=f,this.disableOrbit=d,this.overlayObject3D=u}}function dg(i,t,e,n){let r=Math.floor(n.r*255),s=Math.floor(n.g*255),a=Math.floor(n.b*255),o=512+Math.round(t.x/10),l=512+Math.round(t.y/10),c=512+Math.round(t.z/10),f=Math.round(.5*e);for(let d=-f-2;d<=f+2;++d)for(let u=-f-2;u<=f+2;++u)for(let p=-f-2;p<=f+2;++p){let _=o+p,x=l+u,m=c+d;if(_<0||_>=1024||x<0||x>=1024||m<0||m>=1024)continue;let h=Math.sqrt(d*d+u*u+p*p)-f;h/=Math.sqrt(3),!(h>0)&&i.paint(_,x,m,r,s,a)}}function pg(i,t,e,n,r){let s=Math.floor(r.r*255),a=Math.floor(r.g*255),o=Math.floor(r.b*255),l=512+Math.round(t.x/10),c=512+Math.round(t.y/10),f=512+Math.round(t.z/10),d=512+Math.round(e.x/10),u=512+Math.round(e.y/10),p=512+Math.round(e.z/10),_=Math.round(.5*n),x=d-l,m=u-c,h=p-f,S=x*x+m*m+h*h,E=(M,T,I)=>{let U=((M-l)*x+(T-c)*m+(I-f)*h)/S;U=Math.max(0,Math.min(1,U));let z=l+x*U,V=c+m*U,G=f+h*U,N=M-z,Y=T-V,J=I-G;return Math.sqrt(N*N+Y*Y+J*J)-_},b=Math.min(l,d)-_,A=Math.max(l,d)+_,C=Math.min(c,u)-_,R=Math.max(c,u)+_,P=Math.min(f,p)-_,g=Math.max(f,p)+_;for(let M=P-2;M<=g+2;++M)for(let T=C-2;T<=R+2;++T)for(let I=b-2;I<=A+2;++I){if(M<0||M>=1024||T<0||T>=1024||I<0||I>=1024)continue;let U=E(I,T,M);U/=Math.sqrt(3),!(U>0)&&i.paint(I,T,M,s,a,o)}}Pr(["input","click"]);var mg=Ie('<button class="btn btn-primary ml-2">Move'),_g=Ie('<button class="btn btn-primary ml-2">Rotate'),gg=Ie('<button class="btn btn-primary ml-2">Scale'),xg=Ie('<div><div style=touch-action:none></div><div class="ml-2 mt-2"><div><button class="btn btn-primary">Insert Primitive</button><button class="btn btn-primary ml-2">Draw</button><button class="btn btn-primary ml-2">Sculpt</button><button class="btn btn-primary ml-2">Paint</button><button class="btn btn-primary ml-2">Load</button><button class="btn btn-primary ml-2">Save</button><div class=join><label class=label>Px<input type=radio name=PxSize class="btn btn-sm join-item"aria-label=1x><input type=radio name=PxSize class="btn btn-sm join-item"aria-label=2x><input type=radio name=PxSize class="btn btn-sm join-item"aria-label=4x>');const vg=()=>{let[i,t]=ks({mkMode:xc,pointerPos:void 0,pointerDown:!1,pixelSize:1}),e=new Ho,[n,r]=_n(),s=T=>t("mkMode",()=>T),a={endMode:()=>s(xc),brickMap:e,canvasSize:()=>n()?.canvasSize(),pointerPos:()=>i.pointerPos,pointerDown:()=>i.pointerDown,updateSdf:()=>{n()?.onBrickMapChanged()},updatePaint:()=>{n()?.onBrickMapPaintChanged()},rerender:()=>{n()?.rerender()},screenCoordsToRay(T,I){n()?.screenCoordsToRay(T,I)},*getThreeObjectsUnderScreenCoords(T){let I=n()?.getThreeObjectsUnderScreenCoords(T);I!=null&&(yield*I)}},o=Qt(()=>new i.mkMode(a)),l=()=>kn(el,{get when(){return o().instructions},keyed:!0,children:T=>kn(T,{})}),c=Qt(()=>o().disableOrbit?.()??!1),f=Qt(()=>o().overlayObject3D?.()),d=Qt(()=>o().useTransformControlOnObject3D?.()),[u,p]=_n(),[_,x]=_n(!1),m=Qt(()=>d()!=null),h,S=T=>{if(_())return;let I=u();if(I==null)return;I.setPointerCapture(T.pointerId);let U=I.getBoundingClientRect(),z=T.clientX-U.left,V=T.clientY-U.top;yr(()=>{t("pointerPos",new At(z,V)),t("pointerDown",!0)}),h=performance.now()},E=T=>{if(_())return;let I=u();if(I==null)return;I.setPointerCapture(T.pointerId);let U=I.getBoundingClientRect(),z=T.clientX-U.left,V=T.clientY-U.top;t("pointerPos",new At(z,V))},b=T=>{if(_())return;let I=u();if(I==null)return;let U;h!=null&&(U=performance.now()-h),h=void 0,I.releasePointerCapture(T.pointerId);let z=I.getBoundingClientRect();T.clientX-z.left,T.clientY-z.top,yr(()=>{t("pointerDown",!1)}),U!=null&&U<300&&A()},A=()=>{o().onClick?.()},C=()=>{n()?.moveTransform()},R=()=>{n()?.rotateTransform()},P=()=>{n()?.scaleTransform()},g=async()=>{await lg("quicksave.dat",e),a.updateSdf()},M=async()=>{await cg("quicksave.dat",e)};return(()=>{var T=xg(),I=T.firstChild,U=I.nextSibling,z=U.firstChild,V=z.firstChild,G=V.nextSibling,N=G.nextSibling,Y=N.nextSibling,J=Y.nextSibling,et=J.nextSibling,it=et.nextSibling,Dt=it.firstChild,Lt=Dt.firstChild,Kt=Lt.nextSibling,ee=Kt.nextSibling,j=ee.nextSibling;an(T,"position","relative"),an(T,"width","100%"),an(T,"height","100%"),I.$$pointerup=b,I.$$pointermove=E,I.$$pointerdown=S;var K=p;return typeof K=="function"?wc(K,I):p=I,an(I,"position","absolute"),an(I,"left","0"),an(I,"top","0"),an(I,"right","0"),an(I,"bottom","0"),ls(I,kn(L0,{brickMap:e,onDragingEvent:rt=>{x(rt)},onInit:rt=>{r(rt)},get disableOrbit(){return c()},get overlayObject3D(){return f()},get useTransformControlOnObject3D(){return d()},get pixelSize(){return i.pixelSize}})),an(U,"position","absolute"),an(U,"left","0"),an(U,"top","0"),V.$$click=()=>s(Z0),G.$$click=()=>s(z0),N.$$click=()=>s(eg),Y.$$click=()=>s(fg),J.$$click=()=>g(),et.$$click=()=>M(),ls(z,kn(el,{get when(){return m()},get children(){return[(()=>{var rt=mg();return rt.$$click=()=>C(),rt})(),(()=>{var rt=_g();return rt.$$click=()=>R(),rt})(),(()=>{var rt=gg();return rt.$$click=()=>P(),rt})()]}}),it),Kt.addEventListener("change",rt=>{rt.currentTarget.checked&&t("pixelSize",1)}),ee.addEventListener("change",rt=>{rt.currentTarget.checked&&t("pixelSize",2)}),j.addEventListener("change",rt=>{rt.currentTarget.checked&&t("pixelSize",4)}),ls(U,kn(l,{}),null),xn(()=>Kt.checked=i.pixelSize==1),xn(()=>ee.checked=i.pixelSize==2),xn(()=>j.checked=i.pixelSize==4),T})()};Pr(["pointerdown","pointermove","pointerup","click"]);const Mg=document.getElementById("root");kh(()=>kn(vg,{}),Mg);
