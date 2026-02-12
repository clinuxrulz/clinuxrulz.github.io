(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ch=!1,Ph=(i,e)=>i===e,Ai=Symbol("solid-proxy"),oo=Symbol("solid-track"),Vr={equals:Ph};let hu=_u;const Jn=1,Gr=2,fu={owned:null,cleanups:null,context:null,owner:null};var Et=null;let xa=null,Dh=null,yt=null,Zt=null,jn=null,aa=0;function Ns(i,e){const t=yt,n=Et,s=i.length===0,r=e===void 0?n:e,a=s?fu:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=s?i:()=>i(()=>Ot(()=>zs(a)));Et=a,yt=null;try{return Pi(o,!0)}finally{yt=t,Et=n}}function en(i,e){e=e?Object.assign({},Vr,e):Vr;const t={value:i,observers:null,observerSlots:null,comparator:e.equals||void 0},n=s=>(typeof s=="function"&&(s=s(t.value)),gu(t,s));return[mu.bind(t),n]}function an(i,e,t){const n=oa(i,e,!0,Jn);fs(n)}function tn(i,e,t){const n=oa(i,e,!1,Jn);fs(n)}function du(i,e,t){hu=Oh;const n=oa(i,e,!1,Jn);(!t||!t.render)&&(n.user=!0),jn?jn.push(n):fs(n)}function $e(i,e,t){t=t?Object.assign({},Vr,t):Vr;const n=oa(i,e,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=t.equals||void 0,fs(n),mu.bind(n)}function Bs(i){return Pi(i,!1)}function Ot(i){if(yt===null)return i();const e=yt;yt=null;try{return i()}finally{yt=e}}function on(i,e,t){const n=Array.isArray(i);let s,r=t&&t.defer;return a=>{let o;if(n){o=Array(i.length);for(let c=0;c<i.length;c++)o[c]=i[c]()}else o=i();if(r)return r=!1,a;const l=Ot(()=>e(o,s,a));return s=o,l}}function pu(i){du(()=>Ot(i))}function Rn(i){return Et===null||(Et.cleanups===null?Et.cleanups=[i]:Et.cleanups.push(i)),i}function lo(){return yt}function Ih(){return Et}function Lh(i,e){const t=Et,n=yt;Et=i,yt=null;try{return Pi(e,!0)}catch(s){cl(s)}finally{Et=t,yt=n}}function Uh(i){const e=$e(i),t=$e(()=>co(e()));return t.toArray=()=>{const n=t();return Array.isArray(n)?n:n!=null?[n]:[]},t}function mu(){if(this.sources&&this.state)if(this.state===Jn)fs(this);else{const i=Zt;Zt=null,Pi(()=>Wr(this),!1),Zt=i}if(yt){const i=this.observers?this.observers.length:0;yt.sources?(yt.sources.push(this),yt.sourceSlots.push(i)):(yt.sources=[this],yt.sourceSlots=[i]),this.observers?(this.observers.push(yt),this.observerSlots.push(yt.sources.length-1)):(this.observers=[yt],this.observerSlots=[yt.sources.length-1])}return this.value}function gu(i,e,t){let n=i.value;return(!i.comparator||!i.comparator(n,e))&&(i.value=e,i.observers&&i.observers.length&&Pi(()=>{for(let s=0;s<i.observers.length;s+=1){const r=i.observers[s],a=xa&&xa.running;a&&xa.disposed.has(r),(a?!r.tState:!r.state)&&(r.pure?Zt.push(r):jn.push(r),r.observers&&xu(r)),a||(r.state=Jn)}if(Zt.length>1e6)throw Zt=[],new Error},!1)),e}function fs(i){if(!i.fn)return;zs(i);const e=aa;Nh(i,i.value,e)}function Nh(i,e,t){let n;const s=Et,r=yt;yt=Et=i;try{n=i.fn(e)}catch(a){return i.pure&&(i.state=Jn,i.owned&&i.owned.forEach(zs),i.owned=null),i.updatedAt=t+1,cl(a)}finally{yt=r,Et=s}(!i.updatedAt||i.updatedAt<=t)&&(i.updatedAt!=null&&"observers"in i?gu(i,n):i.value=n,i.updatedAt=t)}function oa(i,e,t,n=Jn,s){const r={fn:i,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:Et,context:Et?Et.context:null,pure:t};return Et===null||Et!==fu&&(Et.owned?Et.owned.push(r):Et.owned=[r]),r}function Hr(i){if(i.state===0)return;if(i.state===Gr)return Wr(i);if(i.suspense&&Ot(i.suspense.inFallback))return i.suspense.effects.push(i);const e=[i];for(;(i=i.owner)&&(!i.updatedAt||i.updatedAt<aa);)i.state&&e.push(i);for(let t=e.length-1;t>=0;t--)if(i=e[t],i.state===Jn)fs(i);else if(i.state===Gr){const n=Zt;Zt=null,Pi(()=>Wr(i,e[0]),!1),Zt=n}}function Pi(i,e){if(Zt)return i();let t=!1;e||(Zt=[]),jn?t=!0:jn=[],aa++;try{const n=i();return Fh(t),n}catch(n){t||(jn=null),Zt=null,cl(n)}}function Fh(i){if(Zt&&(_u(Zt),Zt=null),i)return;const e=jn;jn=null,e.length&&Pi(()=>hu(e),!1)}function _u(i){for(let e=0;e<i.length;e++)Hr(i[e])}function Oh(i){let e,t=0;for(e=0;e<i.length;e++){const n=i[e];n.user?i[t++]=n:Hr(n)}for(e=0;e<t;e++)Hr(i[e])}function Wr(i,e){i.state=0;for(let t=0;t<i.sources.length;t+=1){const n=i.sources[t];if(n.sources){const s=n.state;s===Jn?n!==e&&(!n.updatedAt||n.updatedAt<aa)&&Hr(n):s===Gr&&Wr(n,e)}}}function xu(i){for(let e=0;e<i.observers.length;e+=1){const t=i.observers[e];t.state||(t.state=Gr,t.pure?Zt.push(t):jn.push(t),t.observers&&xu(t))}}function zs(i){let e;if(i.sources)for(;i.sources.length;){const t=i.sources.pop(),n=i.sourceSlots.pop(),s=t.observers;if(s&&s.length){const r=s.pop(),a=t.observerSlots.pop();n<s.length&&(r.sourceSlots[a]=n,s[n]=r,t.observerSlots[n]=a)}}if(i.tOwned){for(e=i.tOwned.length-1;e>=0;e--)zs(i.tOwned[e]);delete i.tOwned}if(i.owned){for(e=i.owned.length-1;e>=0;e--)zs(i.owned[e]);i.owned=null}if(i.cleanups){for(e=i.cleanups.length-1;e>=0;e--)i.cleanups[e]();i.cleanups=null}i.state=0}function Bh(i){return i instanceof Error?i:new Error(typeof i=="string"?i:"Unknown error",{cause:i})}function cl(i,e=Et){throw Bh(i)}function co(i){if(typeof i=="function"&&!i.length)return co(i());if(Array.isArray(i)){const e=[];for(let t=0;t<i.length;t++){const n=co(i[t]);Array.isArray(n)?e.push.apply(e,n):e.push(n)}return e}return i}const zh=Symbol("fallback");function Ol(i){for(let e=0;e<i.length;e++)i[e]()}function kh(i,e,t={}){let n=[],s=[],r=[],a=0,o=e.length>1?[]:null;return Rn(()=>Ol(r)),()=>{let l=i()||[],c=l.length,u,h;return l[oo],Ot(()=>{let d,g,_,m,p,M,E,S,T;if(c===0)a!==0&&(Ol(r),r=[],n=[],s=[],a=0,o&&(o=[])),t.fallback&&(n=[zh],s[0]=Ns(A=>(r[0]=A,t.fallback())),a=1);else if(a===0){for(s=new Array(c),h=0;h<c;h++)n[h]=l[h],s[h]=Ns(f);a=c}else{for(_=new Array(c),m=new Array(c),o&&(p=new Array(c)),M=0,E=Math.min(a,c);M<E&&n[M]===l[M];M++);for(E=a-1,S=c-1;E>=M&&S>=M&&n[E]===l[S];E--,S--)_[S]=s[E],m[S]=r[E],o&&(p[S]=o[E]);for(d=new Map,g=new Array(S+1),h=S;h>=M;h--)T=l[h],u=d.get(T),g[h]=u===void 0?-1:u,d.set(T,h);for(u=M;u<=E;u++)T=n[u],h=d.get(T),h!==void 0&&h!==-1?(_[h]=s[u],m[h]=r[u],o&&(p[h]=o[u]),h=g[h],d.set(T,h)):r[u]();for(h=M;h<c;h++)h in _?(s[h]=_[h],r[h]=m[h],o&&(o[h]=p[h],o[h](h))):s[h]=Ns(f);s=s.slice(0,a=c),n=l.slice(0)}return s});function f(d){if(r[h]=d,o){const[g,_]=en(h);return o[h]=_,e(l[h],g)}return e(l[h])}}}function Ht(i,e){return Ot(()=>i(e||{}))}const vu=i=>`Stale read from <${i}>.`;function Vh(i){const e="fallback"in i&&{fallback:()=>i.fallback};return $e(kh(()=>i.each,i.children,e||void 0))}function As(i){const e=i.keyed,t=$e(()=>i.when,void 0,void 0),n=e?t:$e(t,void 0,{equals:(s,r)=>!s==!r});return $e(()=>{const s=n();if(s){const r=i.children;return typeof r=="function"&&r.length>0?Ot(()=>r(e?s:()=>{if(!Ot(n))throw vu("Show");return t()})):r}return i.fallback},void 0,void 0)}function Gh(i){const e=Uh(()=>i.children),t=$e(()=>{const n=e(),s=Array.isArray(n)?n:[n];let r=()=>{};for(let a=0;a<s.length;a++){const o=a,l=s[a],c=r,u=$e(()=>c()?void 0:l.when,void 0,void 0),h=l.keyed?u:$e(u,void 0,{equals:(f,d)=>!f==!d});r=()=>c()||(h()?[o,u,l]:void 0)}return r});return $e(()=>{const n=t()();if(!n)return i.fallback;const[s,r,a]=n,o=a.children;return typeof o=="function"&&o.length>0?Ot(()=>o(a.keyed?r():()=>{if(Ot(t)()?.[0]!==s)throw vu("Match");return r()})):o},void 0,void 0)}function Bl(i){return i}const Hh=i=>$e(()=>i());function Wh(i,e,t){let n=t.length,s=e.length,r=n,a=0,o=0,l=e[s-1].nextSibling,c=null;for(;a<s||o<r;){if(e[a]===t[o]){a++,o++;continue}for(;e[s-1]===t[r-1];)s--,r--;if(s===a){const u=r<n?o?t[o-1].nextSibling:t[r-o]:l;for(;o<r;)i.insertBefore(t[o++],u)}else if(r===o)for(;a<s;)(!c||!c.has(e[a]))&&e[a].remove(),a++;else if(e[a]===t[r-1]&&t[o]===e[s-1]){const u=e[--s].nextSibling;i.insertBefore(t[o++],e[a++].nextSibling),i.insertBefore(t[--r],u),e[s]=t[r]}else{if(!c){c=new Map;let h=o;for(;h<r;)c.set(t[h],h++)}const u=c.get(e[a]);if(u!=null)if(o<u&&u<r){let h=a,f=1,d;for(;++h<s&&h<r&&!((d=c.get(e[h]))==null||d!==u+f);)f++;if(f>u-o){const g=e[a];for(;o<u;)i.insertBefore(t[o++],g)}else i.replaceChild(t[o++],e[a++])}else a++;else e[a++].remove()}}}const zl="_$DX_DELEGATE";function Xh(i,e,t,n={}){let s;return Ns(r=>{s=r,e===document?i():vn(e,i(),e.firstChild?null:void 0,t)},n.owner),()=>{s(),e.textContent=""}}function mt(i,e,t,n){let s;const r=()=>{const o=document.createElement("template");return o.innerHTML=i,o.content.firstChild},a=()=>(s||(s=r())).cloneNode(!0);return a.cloneNode=a,a}function Di(i,e=window.document){const t=e[zl]||(e[zl]=new Set);for(let n=0,s=i.length;n<s;n++){const r=i[n];t.has(r)||(t.add(r),e.addEventListener(r,Yh))}}function Mt(i,e,t){t!=null?i.style.setProperty(e,t):i.style.removeProperty(e)}function Xr(i,e,t){return Ot(()=>i(e,t))}function vn(i,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return Yr(i,e,n,t);tn(s=>Yr(i,e(),s,t),n)}function Yh(i){let e=i.target;const t=`$$${i.type}`,n=i.target,s=i.currentTarget,r=l=>Object.defineProperty(i,"target",{configurable:!0,value:l}),a=()=>{const l=e[t];if(l&&!e.disabled){const c=e[`${t}Data`];if(c!==void 0?l.call(e,c,i):l.call(e,i),i.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(i.target)&&r(e.host),!0},o=()=>{for(;a()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return e||document}}),i.composedPath){const l=i.composedPath();r(l[0]);for(let c=0;c<l.length-2&&(e=l[c],!!a());c++){if(e._$host){e=e._$host,o();break}if(e.parentNode===s)break}}else o();r(n)}function Yr(i,e,t,n,s){for(;typeof t=="function";)t=t();if(e===t)return t;const r=typeof e,a=n!==void 0;if(i=a&&t[0]&&t[0].parentNode||i,r==="string"||r==="number"){if(r==="number"&&(e=e.toString(),e===t))return t;if(a){let o=t[0];o&&o.nodeType===3?o.data!==e&&(o.data=e):o=document.createTextNode(e),t=Ui(i,t,n,o)}else t!==""&&typeof t=="string"?t=i.firstChild.data=e:t=i.textContent=e}else if(e==null||r==="boolean")t=Ui(i,t,n);else{if(r==="function")return tn(()=>{let o=e();for(;typeof o=="function";)o=o();t=Yr(i,o,t,n)}),()=>t;if(Array.isArray(e)){const o=[],l=t&&Array.isArray(t);if(uo(o,e,t,s))return tn(()=>t=Yr(i,o,t,n,!0)),()=>t;if(o.length===0){if(t=Ui(i,t,n),a)return t}else l?t.length===0?kl(i,o,n):Wh(i,t,o):(t&&Ui(i),kl(i,o));t=o}else if(e.nodeType){if(Array.isArray(t)){if(a)return t=Ui(i,t,n,e);Ui(i,t,null,e)}else t==null||t===""||!i.firstChild?i.appendChild(e):i.replaceChild(e,i.firstChild);t=e}}return t}function uo(i,e,t,n){let s=!1;for(let r=0,a=e.length;r<a;r++){let o=e[r],l=t&&t[i.length],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)=="object"&&o.nodeType)i.push(o);else if(Array.isArray(o))s=uo(i,o,l)||s;else if(c==="function")if(n){for(;typeof o=="function";)o=o();s=uo(i,Array.isArray(o)?o:[o],Array.isArray(l)?l:[l])||s}else i.push(o),s=!0;else{const u=String(o);l&&l.nodeType===3&&l.data===u?i.push(l):i.push(document.createTextNode(u))}}return s}function kl(i,e,t=null){for(let n=0,s=e.length;n<s;n++)i.insertBefore(e[n],t)}function Ui(i,e,t,n){if(t===void 0)return i.textContent="";const s=n||document.createTextNode("");if(e.length){let r=!1;for(let a=e.length-1;a>=0;a--){const o=e[a];if(s!==o){const l=o.parentNode===i;!r&&!a?l?i.replaceChild(s,o):i.insertBefore(s,t):l&&o.remove()}else r=!0}}else i.insertBefore(s,t);return[s]}const jh="http://www.w3.org/2000/svg";function qh(i,e=!1,t=void 0){return e?document.createElementNS(jh,i):document.createElement(i,{is:t})}function $h(i){const{useShadow:e}=i,t=document.createTextNode(""),n=()=>i.mount||document.body,s=Ih();let r;return du(()=>{r||(r=Lh(s,()=>$e(()=>i.children)));const a=n();if(a instanceof HTMLHeadElement){const[o,l]=en(!1),c=()=>l(!0);Ns(u=>vn(a,()=>o()?u():r(),null)),Rn(c)}else{const o=qh(i.isSVG?"g":"div",i.isSVG),l=e&&o.attachShadow?o.attachShadow({mode:"open"}):o;Object.defineProperty(o,"_$host",{get(){return t.parentNode},configurable:!0}),vn(l,r),a.appendChild(o),i.ref&&i.ref(o),Rn(()=>a.removeChild(o))}},void 0,{render:!0}),t}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="182",ns={ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zh=0,Vl=1,Kh=2,Rr=1,Jh=2,Rs=3,ui=0,cn=1,yn=2,qn=0,is=1,Gl=2,Hl=3,Wl=4,Qh=5,Si=100,ef=101,tf=102,nf=103,sf=104,rf=200,af=201,of=202,lf=203,ho=204,fo=205,cf=206,uf=207,hf=208,ff=209,df=210,pf=211,mf=212,gf=213,_f=214,po=0,mo=1,go=2,os=3,_o=4,xo=5,vo=6,Mo=7,Mu=0,xf=1,vf=2,On=0,yu=1,Su=2,Eu=3,bu=4,Tu=5,wu=6,Au=7,Ru=300,Ri=301,ls=302,yo=303,So=304,ca=306,jr=1e3,Nt=1001,qr=1002,It=1003,Cu=1004,Cs=1005,Ct=1006,Cr=1007,li=1008,$t=1009,Pu=1010,Du=1011,ks=1012,ul=1013,Bn=1014,Nn=1015,Zn=1016,hl=1017,fl=1018,Vs=1020,Iu=35902,Lu=35899,Uu=1021,Nu=1022,ln=1023,Kn=1026,wi=1027,dl=1028,pl=1029,cs=1030,ml=1031,gl=1033,Pr=33776,Dr=33777,Ir=33778,Lr=33779,Eo=35840,bo=35841,To=35842,wo=35843,Ao=36196,Ro=37492,Co=37496,Po=37488,Do=37489,Io=37490,Lo=37491,Uo=37808,No=37809,Fo=37810,Oo=37811,Bo=37812,zo=37813,ko=37814,Vo=37815,Go=37816,Ho=37817,Wo=37818,Xo=37819,Yo=37820,jo=37821,qo=36492,$o=36494,Zo=36495,Ko=36283,Jo=36284,Qo=36285,el=36286,Mf=2300,yf=2301,Sf=3200,Fu=0,Ef=1,Yn="",mn="srgb",us="srgb-linear",$r="linear",ct="srgb",Ni=7680,Xl=519,bf=512,Tf=513,wf=514,_l=515,Af=516,Rf=517,xl=518,Cf=519,Yl=35044,jl="300 es",Fn=2e3,Zr=2001;function Ou(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pf(){const i=Gs("canvas");return i.style.display="block",i}const ql={};function $l(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ie(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Oe(...i){const e="THREE."+i.shift();console.error(e,...i)}function Hs(...i){const e=i.join(" ");e in ql||(ql[e]=!0,Ie(...i))}function Df(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zl=1234567;const Fs=Math.PI/180,Ws=180/Math.PI;function ds(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function vl(i,e){return(i%e+e)%e}function If(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lf(i,e,t){return i!==e?(t-i)/(e-i):0}function Os(i,e,t){return(1-t)*i+t*e}function Uf(i,e,t,n){return Os(i,e,1-Math.exp(-t*n))}function Nf(i,e=1){return e-Math.abs(vl(i,e*2)-e)}function Ff(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Of(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Bf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zf(i,e){return i+Math.random()*(e-i)}function kf(i){return i*(.5-Math.random())}function Vf(i){i!==void 0&&(Zl=i);let e=Zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gf(i){return i*Fs}function Hf(i){return i*Ws}function Wf(i){return(i&i-1)===0&&i!==0}function Xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jf(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kr={DEG2RAD:Fs,RAD2DEG:Ws,generateUUID:ds,clamp:Ye,euclideanModulo:vl,mapLinear:If,inverseLerp:Lf,lerp:Os,damp:Uf,pingpong:Nf,smoothstep:Ff,smootherstep:Of,randInt:Bf,randFloat:zf,randFloatSpread:kf,seededRandom:Vf,degToRad:Gf,radToDeg:Hf,isPowerOfTwo:Wf,ceilPowerOfTwo:Xf,floorPowerOfTwo:Yf,setQuaternionFromProperEuler:jf,normalize:Jt,denormalize:Ki};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,l=l*p+f*o,c=c*p+d*o,u=u*p+g*o,h=h*p+_*o}else{l=l*p+f*o,c=c*p+d*o,u=u*p+g*o,h=h*p+_*o;const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new D,Kl=new Dt;class ze{constructor(e,t,n,s,r,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],E=s[4],S=s[7],T=s[2],A=s[5],w=s[8];return r[0]=a*_+o*M+l*T,r[3]=a*m+o*E+l*A,r[6]=a*p+o*S+l*w,r[1]=c*_+u*M+h*T,r[4]=c*m+u*E+h*A,r[7]=c*p+u*S+h*w,r[2]=f*_+d*M+g*T,r[5]=f*m+d*E+g*A,r[8]=f*p+d*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new ze,Jl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){const i={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[us]:{primaries:e,whitePoint:n,transfer:$r,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),i}const et=qf();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class Bu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fi===void 0&&(Fi=Gs("canvas")),Fi.width=e.width,Fi.height=e.height;const s=Fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $f=0;class ua{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ya(s[a].image)):r.push(ya(s[a]))}else r=ya(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Zf=0;const Sa=new D;class Wt extends Ii{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Nt,s=Nt,r=Ct,a=li,o=ln,l=$t,c=Wt.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=ds(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sa).x}get height(){return this.source.getSize(Sa).y}get depth(){return this.source.getSize(Sa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jr:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jr:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Ru;Wt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(d+1)/2,T=(p+1)/2,A=(u+f)/4,w=(h+_)/4,C=(g+m)/4;return E>S&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=w/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=C/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kf extends Ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Wt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ua(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Kf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zu extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ur extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(e.matrixWorld),this.union(Qs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),er.subVectors(this.max,xs),Oi.subVectors(e.a,xs),Bi.subVectors(e.b,xs),zi.subVectors(e.c,xs),Qn.subVectors(Bi,Oi),ei.subVectors(zi,Bi),pi.subVectors(Oi,zi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-pi.z,pi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,pi.z,0,-pi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-pi.y,pi.x,0];return!Ea(t,Oi,Bi,zi,er)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,Oi,Bi,zi,er))?!1:(tr.crossVectors(Qn,ei),t=[tr.x,tr.y,tr.z],Ea(t,Oi,Bi,zi,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new D,new D,new D,new D,new D,new D,new D,new D],En=new D,Qs=new Ci,Oi=new D,Bi=new D,zi=new D,Qn=new D,ei=new D,pi=new D,xs=new D,er=new D,tr=new D,mi=new D;function Ea(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Jf=new Ci,vs=new D,ba=new D;class ha{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(ba)),this.expandByPoint(vs.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vn=new D,Ta=new D,nr=new D,ti=new D,wa=new D,ir=new D,Aa=new D;class ps{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ta.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Ta);const r=e.distanceTo(t)*.5,a=-this.direction.dot(nr),o=ti.dot(this.direction),l=-ti.dot(nr),c=ti.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ta).addScaledVector(nr,f),d}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){wa.subVectors(t,e),ir.subVectors(n,e),Aa.crossVectors(wa,ir);let a=this.direction.dot(Aa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,e);const l=o*this.direction.dot(ir.crossVectors(ti,ir));if(l<0)return null;const c=o*this.direction.dot(wa.cross(ti));if(c<0||l+c>a)return null;const u=-o*ti.dot(Aa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,a,o,l,c,u,h,f,d,g,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,d,g,_,m)}set(e,t,n,s,r,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qf,e,ed)}lookAt(e,t,n){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ni.crossVectors(n,fn),ni.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ni.crossVectors(n,fn)),ni.normalize(),sr.crossVectors(fn,ni),s[0]=ni.x,s[4]=sr.x,s[8]=fn.x,s[1]=ni.y,s[5]=sr.y,s[9]=fn.y,s[2]=ni.z,s[6]=sr.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],E=n[7],S=n[11],T=n[15],A=s[0],w=s[4],C=s[8],x=s[12],y=s[1],R=s[5],I=s[9],N=s[13],z=s[2],k=s[6],V=s[10],U=s[14],q=s[3],ee=s[7],H=s[11],Y=s[15];return r[0]=a*A+o*y+l*z+c*q,r[4]=a*w+o*R+l*k+c*ee,r[8]=a*C+o*I+l*V+c*H,r[12]=a*x+o*N+l*U+c*Y,r[1]=u*A+h*y+f*z+d*q,r[5]=u*w+h*R+f*k+d*ee,r[9]=u*C+h*I+f*V+d*H,r[13]=u*x+h*N+f*U+d*Y,r[2]=g*A+_*y+m*z+p*q,r[6]=g*w+_*R+m*k+p*ee,r[10]=g*C+_*I+m*V+p*H,r[14]=g*x+_*N+m*U+p*Y,r[3]=M*A+E*y+S*z+T*q,r[7]=M*w+E*R+S*k+T*ee,r[11]=M*C+E*I+S*V+T*H,r[15]=M*x+E*N+S*U+T*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=l*d-c*f,E=o*d-c*h,S=o*f-l*h,T=a*d-c*u,A=a*f-l*u,w=a*h-o*u;return t*(_*M-m*E+p*S)-n*(g*M-m*T+p*A)+s*(g*E-_*T+p*w)-r*(g*S-_*A+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,E=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,S=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,T=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,A=t*M+n*E+s*S+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=M*w,e[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*w,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*w,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*d-n*l*d)*w,e[4]=E*w,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*w,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*d+t*l*d)*w,e[8]=S*w,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*w,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*w,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*w,e[12]=T*w,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*m+t*h*m)*w,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,_=a*u,m=a*h,p=o*h,M=l*c,E=l*u,S=l*h,T=n.x,A=n.y,w=n.z;return s[0]=(1-(_+p))*T,s[1]=(d+S)*T,s[2]=(g-E)*T,s[3]=0,s[4]=(d-S)*A,s[5]=(1-(f+p))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+E)*w,s[9]=(m-M)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=ki.set(s[0],s[1],s[2]).length();const a=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),bn.copy(this);const c=1/r,u=1/a,h=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Fn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Fn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Zr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Fn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Fn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Zr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new D,bn=new st,Qf=new D(0,0,0),ed=new D(1,1,1),ni=new D,sr=new D,fn=new D,ec=new st,tc=new Dt;class Cn{constructor(e=0,t=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let td=0;const nc=new D,Vi=new Dt,Gn=new st,rr=new D,Ms=new D,nd=new D,id=new Dt,ic=new D(1,0,0),sc=new D(0,1,0),rc=new D(0,0,1),ac={type:"added"},sd={type:"removed"},Gi={type:"childadded",child:null},Ra={type:"childremoved",child:null};class Lt extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new D,t=new Cn,n=new Dt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new ze}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(ic,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ic,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ms,rr,this.up):Gn.lookAt(rr,Ms,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ac),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sd),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ac),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new D(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new D,Hn=new D,Ca=new D,Wn=new D,Hi=new D,Wi=new D,oc=new D,Pa=new D,Da=new D,Ia=new D,La=new bt,Ua=new bt,Na=new bt;class wn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Hn.subVectors(n,t),Ca.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(Hn),l=Tn.dot(Ca),c=Hn.dot(Hn),u=Hn.dot(Ca),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return La.setScalar(0),Ua.setScalar(0),Na.setScalar(0),La.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),Na.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Ua,r.y),a.addScaledVector(Na,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Hn.subVectors(e,t),Tn.cross(Hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Tn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Hi.subVectors(s,n),Wi.subVectors(r,n),Pa.subVectors(e,n);const l=Hi.dot(Pa),c=Wi.dot(Pa);if(l<=0&&c<=0)return t.copy(n);Da.subVectors(e,s);const u=Hi.dot(Da),h=Wi.dot(Da);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Hi,a);Ia.subVectors(e,r);const d=Hi.dot(Ia),g=Wi.dot(Ia);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Wi,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return oc.subVectors(r,s),o=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(oc,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(Hi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Fa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=vl(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fa(a,r,e+1/3),this.g=Fa(a,r,e),this.b=Fa(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=mn){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const n=ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return et.workingToColorSpace(Yt.copy(this),e),Math.round(Ye(Yt.r*255,0,255))*65536+Math.round(Ye(Yt.g*255,0,255))*256+Math.round(Ye(Yt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=mn){et.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,s=Yt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(ar);const n=Os(ii.h,ar.h,t),s=Os(ii.s,ar.s,t),r=Os(ii.l,ar.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ze;Ze.NAMES=ku;let rd=0;class ms extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=is,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=fo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fa extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new D,or=new Pe;let ad=0;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ad++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yl&&(e.usage=this.usage),e}}class Vu extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gu extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let od=0;const xn=new st,Oa=new Lt,Xi=new D,dn=new Ci,ys=new Ci,Vt=new D;class Bt extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Gu:Vu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(dn.min,ys.min),dn.expandByPoint(Vt),Vt.addVectors(dn.max,ys.max),dn.expandByPoint(Vt)):(dn.expandByPoint(ys.min),dn.expandByPoint(ys.max))}dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Vt.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(e,c),Vt.add(Xi)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new D,l[C]=new D;const c=new D,u=new D,h=new D,f=new Pe,d=new Pe,g=new Pe,_=new D,m=new D;function p(C,x,y){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),o[C].add(_),o[x].add(_),o[y].add(_),l[C].add(m),l[x].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,x=M.length;C<x;++C){const y=M[C],R=y.start,I=y.count;for(let N=R,z=R+I;N<z;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const E=new D,S=new D,T=new D,A=new D;function w(C){T.fromBufferAttribute(s,C),A.copy(T);const x=o[C];E.copy(x),E.sub(T.multiplyScalar(T.dot(x))).normalize(),S.crossVectors(A,x);const R=S.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,R)}for(let C=0,x=M.length;C<x;++C){const y=M[C],R=y.start,I=y.count;for(let N=R,z=R+I;N<z;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ft(f,u,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new st,gi=new ps,lr=new ha,cc=new D,cr=new D,ur=new D,hr=new D,Ba=new D,fr=new D,uc=new D,dr=new D;class ce extends Lt{constructor(e=new Bt,t=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ba.fromBufferAttribute(h,e),a?fr.addScaledVector(Ba,u):fr.addScaledVector(Ba.sub(t),u))}t.add(fr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(lr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(lr,cc)===null||gi.origin.distanceToSquared(cc)>(e.far-e.near)**2))&&(lc.copy(r).invert(),gi.copy(e.ray).applyMatrix4(lc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,T=E;S<T;S+=3){const A=o.getX(S),w=o.getX(S+1),C=o.getX(S+2);s=pr(this,p,e,n,c,u,h,A,w,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=pr(this,a,e,n,c,u,h,M,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,T=E;S<T;S+=3){const A=S,w=S+1,C=S+2;s=pr(this,p,e,n,c,u,h,A,w,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,E=m+1,S=m+2;s=pr(this,a,e,n,c,u,h,M,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ld(i,e,t,n,s,r,a,o){let l;if(e.side===cn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ui,o),l===null)return null;dr.copy(o),dr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:i}}function pr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,cr),i.getVertexPosition(l,ur),i.getVertexPosition(c,hr);const u=ld(i,e,t,n,cr,ur,hr,uc);if(u){const h=new D;wn.getBarycoord(uc,cr,ur,hr,h),s&&(u.uv=wn.getInterpolatedAttribute(s,o,l,c,h,new Pe)),r&&(u.uv1=wn.getInterpolatedAttribute(r,o,l,c,h,new Pe)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};wn.getNormal(cr,ur,hr,f.normal),u.face=f,u.barycoord=h}return u}class Rt extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(h,2));function g(_,m,p,M,E,S,T,A,w,C,x){const y=S/w,R=T/C,I=S/2,N=T/2,z=A/2,k=w+1,V=C+1;let U=0,q=0;const ee=new D;for(let H=0;H<V;H++){const Y=H*R-N;for(let he=0;he<k;he++){const Me=he*y-I;ee[_]=Me*M,ee[m]=Y*E,ee[p]=z,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(he/w),h.push(1-H/C),U+=1}}for(let H=0;H<C;H++)for(let Y=0;Y<w;Y++){const he=f+Y+k*H,Me=f+Y+k*(H+1),ke=f+(Y+1)+k*(H+1),Je=f+(Y+1)+k*H;l.push(he,Me,Je),l.push(Me,ke,Je),q+=6}o.addGroup(d,q,x),d+=q,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=hs(i[t]);for(const s in n)e[s]=n[s]}return e}function cd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const ud={clone:hs,merge:Qt};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wu extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new D,hc=new Pe,fc=new Pe;class Mn extends Wu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,hc,fc),t.subVectors(fc,hc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,ji=1;class dd extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Yi,ji,e,t);s.layers=this.layers,this.add(s);const r=new Mn(Yi,ji,e,t);r.layers=this.layers,this.add(r);const a=new Mn(Yi,ji,e,t);a.layers=this.layers,this.add(a);const o=new Mn(Yi,ji,e,t);o.layers=this.layers,this.add(o);const l=new Mn(Yi,ji,e,t);l.layers=this.layers,this.add(l);const c=new Mn(Yi,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xu extends Wt{constructor(e=[],t=Ri,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yu extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rt(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:qn});r.uniforms.tEquirect.value=t;const a=new ce(s,r),o=t.minFilter;return t.minFilter===li&&(t.minFilter=Ct),new dd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class es extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pd={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new es;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tl extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class md extends Wt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=It,u=It,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ka=new D,gd=new D,_d=new ze;class oi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ka.subVectors(n,t).cross(gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_d.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new ha,xd=new Pe(.5,.5),mr=new D;class yl{constructor(e=new oi,t=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],E=r[13],S=r[14],T=r[15];if(s[0].setComponents(c-a,d-u,p-g,T-M).normalize(),s[1].setComponents(c+a,d+u,p+g,T+M).normalize(),s[2].setComponents(c+o,d+h,p+_,T+E).normalize(),s[3].setComponents(c-o,d-h,p-_,T-E).normalize(),n)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,d-f,p-m,T-S).normalize();else if(s[4].setComponents(c-l,d-f,p-m,T-S).normalize(),t===Fn)s[5].setComponents(c+l,d+f,p+m,T+S).normalize();else if(t===Zr)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=xd.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(mr.x=s.normal.x>0?e.max.x:e.min.x,mr.y=s.normal.y>0?e.max.y:e.min.y,mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ju extends ms{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jr=new D,Qr=new D,dc=new st,Ss=new ps,gr=new ha,Va=new D,pc=new D;class ri extends Lt{constructor(e=new Bt,t=new ju){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Jr.fromBufferAttribute(t,s-1),Qr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Jr.distanceTo(Qr);e.setAttribute("lineDistance",new pt(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,e.ray.intersectsSphere(gr)===!1)return;dc.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(dc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),E=_r(this,e,Ss,l,p,M,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=_r(this,e,Ss,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=_r(this,e,Ss,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=_r(this,e,Ss,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _r(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Jr.fromBufferAttribute(o,s),Qr.fromBufferAttribute(o,r),t.distanceSqToSegment(Jr,Qr,Va,pc)>n)return;Va.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Va);if(!(c<e.near||c>e.far))return{distance:c,point:pc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Ga extends Wt{constructor(e,t,n,s,r,a,o,l,c,u,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Xs extends Wt{constructor(e,t,n=Bn,s,r,a,o=It,l=It,c,u=Kn,h=1){if(u!==Kn&&u!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vd extends Xs{constructor(e,t=Bn,n=Ri,s,r,a=It,o=It,l,c=Kn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qu extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jt extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new pt(h,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(d,2));function M(){const S=new D,T=new D;let A=0;const w=(t-e)/n;for(let C=0;C<=r;C++){const x=[],y=C/r,R=y*(t-e)+e;for(let I=0;I<=s;I++){const N=I/s,z=N*l+o,k=Math.sin(z),V=Math.cos(z);T.x=R*k,T.y=-y*n+m,T.z=R*V,h.push(T.x,T.y,T.z),S.set(k,w,V).normalize(),f.push(S.x,S.y,S.z),d.push(N,1-y),x.push(g++)}_.push(x)}for(let C=0;C<s;C++)for(let x=0;x<r;x++){const y=_[x][C],R=_[x+1][C],I=_[x+1][C+1],N=_[x][C+1];(e>0||x!==0)&&(u.push(y,R,N),A+=3),(t>0||x!==r-1)&&(u.push(R,I,N),A+=3)}c.addGroup(p,A,0),p+=A}function E(S){const T=g,A=new Pe,w=new D;let C=0;const x=S===!0?e:t,y=S===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const R=g;for(let I=0;I<=s;I++){const z=I/s*l+o,k=Math.cos(z),V=Math.sin(z);w.x=x*V,w.y=m*y,w.z=x*k,h.push(w.x,w.y,w.z),f.push(0,y,0),A.x=k*.5+.5,A.y=V*.5*y+.5,d.push(A.x,A.y),g++}for(let I=0;I<s;I++){const N=T+I,z=R+I;S===!0?u.push(z,z+1,N):u.push(z+1,z,N),C+=3}c.addGroup(p,C,S===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sl extends Bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const E=new D,S=new D,T=new D;for(let A=0;A<t.length;A+=3)d(t[A+0],E),d(t[A+1],S),d(t[A+2],T),l(E,S,T,M)}function l(M,E,S,T){const A=T+1,w=[];for(let C=0;C<=A;C++){w[C]=[];const x=M.clone().lerp(S,C/A),y=E.clone().lerp(S,C/A),R=A-C;for(let I=0;I<=R;I++)I===0&&C===A?w[C][I]=x:w[C][I]=x.clone().lerp(y,I/R)}for(let C=0;C<A;C++)for(let x=0;x<2*(A-C)-1;x++){const y=Math.floor(x/2);x%2===0?(f(w[C][y+1]),f(w[C+1][y]),f(w[C][y])):(f(w[C][y+1]),f(w[C+1][y+1]),f(w[C+1][y]))}}function c(M){const E=new D;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(M),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function u(){const M=new D;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const S=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;a.push(S,1-T)}g(),h()}function h(){for(let M=0;M<a.length;M+=6){const E=a[M+0],S=a[M+2],T=a[M+4],A=Math.max(E,S,T),w=Math.min(E,S,T);A>.9&&w<.1&&(E<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,E){const S=M*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function g(){const M=new D,E=new D,S=new D,T=new D,A=new Pe,w=new Pe,C=new Pe;for(let x=0,y=0;x<r.length;x+=9,y+=6){M.set(r[x+0],r[x+1],r[x+2]),E.set(r[x+3],r[x+4],r[x+5]),S.set(r[x+6],r[x+7],r[x+8]),A.set(a[y+0],a[y+1]),w.set(a[y+2],a[y+3]),C.set(a[y+4],a[y+5]),T.copy(M).add(E).add(S).divideScalar(3);const R=m(T);_(A,y+0,M,R),_(w,y+2,E,R),_(C,y+4,S,R)}}function _(M,E,S,T){T<0&&M.x===1&&(a[E]=M.x-1),S.x===0&&S.z===0&&(a[E]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.vertices,e.indices,e.radius,e.detail)}}class ts extends Sl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ts(e.radius,e.detail)}}class qs extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let E=0;E<c;E++){const S=E*h-r;g.push(S,-M,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const E=M+c*p,S=M+c*(p+1),T=M+1+c*(p+1),A=M+1+c*p;d.push(E,S,A),d.push(S,T,A)}this.setIndex(d),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class hi extends Bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],E=p/n;let S=0;p===0&&a===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const A=T/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+S,1-E),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const E=u[p][M+1],S=u[p][M],T=u[p+1][M],A=u[p+1][M+1];(p!==0||a>0)&&d.push(E,S,A),(p!==n-1||l<Math.PI)&&d.push(S,T,A)}this.setIndex(d),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ei extends Bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new D,h=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;a.push(_,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Md extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rs extends ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yd extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sd extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ha={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ed{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bd=new Ed;class El{constructor(e){this.manager=e!==void 0?e:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}El.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi=new WeakMap;class Td extends El{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ha.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=qi.get(a);h===void 0&&(h=[],qi.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Gs("img");function l(){u(),t&&t(this);const h=qi.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}qi.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Ha.remove(`image:${e}`);const f=qi.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}qi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ha.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class mc extends El{constructor(e){super(e)}load(e,t,n,s){const r=new Wt,a=new Td(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class wd extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Wa=new st,gc=new D,_c=new D;class Ad{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(gc),_c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_c),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $s extends Wu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rd extends Ad{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cd extends wd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Rd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Pd extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bl="\\[\\]\\.:\\/",Dd=new RegExp("["+bl+"]","g"),Tl="[^"+bl+"]",Id="[^"+bl.replace("\\.","")+"]",Ld=/((?:WC+[\/:])*)/.source.replace("WC",Tl),Ud=/(WCOD+)?/.source.replace("WCOD",Id),Nd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),Fd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),Od=new RegExp("^"+Ld+Ud+Nd+Fd+"$"),Bd=["material","materials","bones","map"];class zd{constructor(e,t,n){const s=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dd,"")}static parseTrackName(e){const t=Od.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Bd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=zd;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const xc=new st;class nl{constructor(e,t,n=0,s=1/0){this.ray=new ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Oe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xc),this}intersectObject(e,t=!0,n=[]){return il(e,this,n,t),n.sort(vc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)il(e[s],this,n,t);return n.sort(vc),n}}function vc(i,e){return i.distance-e.distance}function il(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)il(r[a],e,t,!0)}}class Mc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $u extends Ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function yc(i,e,t,n){const s=kd(n);switch(t){case Uu:return i*e;case dl:return i*e/s.components*s.byteLength;case pl:return i*e/s.components*s.byteLength;case cs:return i*e*2/s.components*s.byteLength;case ml:return i*e*2/s.components*s.byteLength;case Nu:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case gl:return i*e*4/s.components*s.byteLength;case Pr:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:case wo:return Math.max(i,16)*Math.max(e,8)/4;case Eo:case To:return Math.max(i,8)*Math.max(e,8)/2;case Ao:case Ro:case Po:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Co:case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qo:case $o:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ko:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qo:case el:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kd(i){switch(i){case $t:case Pu:return{byteLength:1,components:1};case ks:case Du:case Zn:return{byteLength:2,components:1};case hl:case fl:return{byteLength:2,components:4};case Bn:case ul:case Nn:return{byteLength:4,components:1};case Iu:case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vd(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
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
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qd=`#ifdef USE_AOMAP
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
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
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
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hp=`#define PI 3.141592653589793
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
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
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
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
#endif`,kp=`uniform sampler2D dfgLUT;
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
}`,Vp=`
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kp=`#if defined( USE_POINTS_UV )
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
#endif`,Jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
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
}`,qm=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Zm=`#define DISTANCE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
}`,e0=`uniform vec3 diffuse;
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
}`,t0=`#include <common>
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#define LAMBERT
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define MATCAP
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
}`,a0=`#define MATCAP
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
}`,o0=`#define NORMAL
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
}`,l0=`#define NORMAL
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
}`,c0=`#define PHONG
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
}`,u0=`#define PHONG
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
}`,h0=`#define STANDARD
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
}`,f0=`#define STANDARD
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
}`,d0=`#define TOON
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
}`,p0=`#define TOON
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
}`,m0=`uniform float size;
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,x0=`uniform vec3 color;
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
}`,v0=`uniform float rotation;
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
}`,M0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Gd,alphahash_pars_fragment:Hd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:Yd,alphatest_pars_fragment:jd,aomap_fragment:qd,aomap_pars_fragment:$d,batching_pars_vertex:Zd,batching_vertex:Kd,begin_vertex:Jd,beginnormal_vertex:Qd,bsdfs:ep,iridescence_fragment:tp,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:ap,color_fragment:op,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:up,common:hp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:dp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:_p,colorspace_fragment:xp,colorspace_pars_fragment:vp,envmap_fragment:Mp,envmap_common_pars_fragment:yp,envmap_pars_fragment:Sp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Up,envmap_vertex:bp,fog_vertex:Tp,fog_pars_vertex:wp,fog_fragment:Ap,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Lp,lights_toon_fragment:Np,lights_toon_pars_fragment:Fp,lights_phong_fragment:Op,lights_phong_pars_fragment:Bp,lights_physical_fragment:zp,lights_physical_pars_fragment:kp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:Hp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:jp,map_fragment:qp,map_pars_fragment:$p,map_particle_fragment:Zp,map_particle_pars_fragment:Kp,metalnessmap_fragment:Jp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:am,normal_pars_fragment:om,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:xm,dithering_fragment:vm,dithering_pars_fragment:Mm,roughnessmap_fragment:ym,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:bm,shadowmap_vertex:Tm,shadowmask_pars_fragment:wm,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Dm,specularmap_pars_fragment:Im,tonemapping_fragment:Lm,tonemapping_pars_fragment:Um,transmission_fragment:Nm,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:km,background_vert:Vm,background_frag:Gm,backgroundCube_vert:Hm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:Ym,depth_vert:jm,depth_frag:qm,distance_vert:$m,distance_frag:Zm,equirect_vert:Km,equirect_frag:Jm,linedashed_vert:Qm,linedashed_frag:e0,meshbasic_vert:t0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:s0,meshmatcap_vert:r0,meshmatcap_frag:a0,meshnormal_vert:o0,meshnormal_frag:l0,meshphong_vert:c0,meshphong_frag:u0,meshphysical_vert:h0,meshphysical_frag:f0,meshtoon_vert:d0,meshtoon_frag:p0,points_vert:m0,points_frag:g0,shadow_vert:_0,shadow_frag:x0,sprite_vert:v0,sprite_frag:M0},ue={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Un={basic:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Qt([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Qt([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Qt([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Qt([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Qt([ue.lights,ue.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Un.physical={uniforms:Qt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const xr={r:0,b:0,g:0},xi=new Cn,y0=new st;function S0(i,e,t,n,s,r,a){const o=new Ze(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function _(E){let S=!1;const T=g(E);T===null?p(o,l):T&&T.isColor&&(p(T,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===ca)?(u===void 0&&(u=new ce(new Rt(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:hs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xi.copy(S.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(y0.makeRotationFromEuler(xi)),u.material.toneMapped=et.getTransfer(T.colorSpace)!==ct,(h!==T||f!==T.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ce(new qs(2,2),new Sn({name:"BackgroundMaterial",uniforms:hs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(xr,Hu(i)),n.buffers.color.setClear(xr.r,xr.g,xr.b,S,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:M}}function E0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(y,R,I,N,z){let k=!1;const V=h(N,I,R);r!==V&&(r=V,c(r.object)),k=d(y,N,I,z),k&&g(y,N,I,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,S(y,R,I,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,R,I){const N=I.wireframe===!0;let z=n[y.id];z===void 0&&(z={},n[y.id]=z);let k=z[R.id];k===void 0&&(k={},z[R.id]=k);let V=k[N];return V===void 0&&(V=f(l()),k[N]=V),V}function f(y){const R=[],I=[],N=[];for(let z=0;z<t;z++)R[z]=0,I[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:N,object:y,attributes:{},index:null}}function d(y,R,I,N){const z=r.attributes,k=R.attributes;let V=0;const U=I.getAttributes();for(const q in U)if(U[q].location>=0){const H=z[q];let Y=k[q];if(Y===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),H===void 0||H.attribute!==Y||Y&&H.data!==Y.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function g(y,R,I,N){const z={},k=R.attributes;let V=0;const U=I.getAttributes();for(const q in U)if(U[q].location>=0){let H=k[q];H===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(H=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(H=y.instanceColor));const Y={};Y.attribute=H,H&&H.data&&(Y.data=H.data),z[q]=Y,V++}r.attributes=z,r.attributesNum=V,r.index=N}function _(){const y=r.newAttributes;for(let R=0,I=y.length;R<I;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const I=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;I[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),z[y]!==R&&(i.vertexAttribDivisor(y,R),z[y]=R)}function M(){const y=r.newAttributes,R=r.enabledAttributes;for(let I=0,N=R.length;I<N;I++)R[I]!==y[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function E(y,R,I,N,z,k,V){V===!0?i.vertexAttribIPointer(y,R,I,z,k):i.vertexAttribPointer(y,R,I,N,z,k)}function S(y,R,I,N){_();const z=N.attributes,k=I.getAttributes(),V=R.defaultAttributeValues;for(const U in k){const q=k[U];if(q.location>=0){let ee=z[U];if(ee===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ee!==void 0){const H=ee.normalized,Y=ee.itemSize,he=e.get(ee);if(he===void 0)continue;const Me=he.buffer,ke=he.type,Je=he.bytesPerElement,Z=ke===i.INT||ke===i.UNSIGNED_INT||ee.gpuType===ul;if(ee.isInterleavedBufferAttribute){const Q=ee.data,me=Q.stride,Le=ee.offset;if(Q.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e,Q.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let _e=0;_e<q.locationSize;_e++)E(q.location+_e,Y/q.locationSize,ke,H,me*Je,(Le+Y/q.locationSize*_e)*Je,Z)}else{if(ee.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)p(q.location+Q,ee.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Q=0;Q<q.locationSize;Q++)m(q.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Q=0;Q<q.locationSize;Q++)E(q.location+Q,Y/q.locationSize,ke,H,Y*Je,Y/q.locationSize*Q*Je,Z)}}else if(V!==void 0){const H=V[U];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(q.location,H);break;case 3:i.vertexAttrib3fv(q.location,H);break;case 4:i.vertexAttrib4fv(q.location,H);break;default:i.vertexAttrib1fv(q.location,H)}}}}M()}function T(){C();for(const y in n){const R=n[y];for(const I in R){const N=R[I];for(const z in N)u(N[z].object),delete N[z];delete R[I]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const I in R){const N=R[I];for(const z in N)u(N[z].object),delete N[z];delete R[I]}delete n[y.id]}function w(y){for(const R in n){const I=n[R];if(I[y.id]===void 0)continue;const N=I[y.id];for(const z in N)u(N[z].object),delete N[z];delete I[y.id]}}function C(){x(),a=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function b0(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function T0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==$t&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Nn&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:S,maxSamples:T,samples:A}}function w0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new oi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,E=M*4;let S=p.clippingState||null;l.value=S,S=u(g,f,E,d);for(let T=0;T!==E;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=d;E!==_;++E,S+=4)a.copy(h[E]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function A0(i){let e=new WeakMap;function t(a,o){return o===yo?a.mapping=Ri:o===So&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===yo||o===So)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yu(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ci=4,Sc=[.125,.215,.35,.446,.526,.582],bi=20,R0=256,Es=new $s,Ec=new Ze;let Xa=null,Ya=0,ja=0,qa=!1;const C0=new D;class bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=C0}=r;Xa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,Ya,ja),this._renderer.xr.enabled=qa,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Zn,format:ln,colorSpace:us,depthBuffer:!1},s=Tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P0(r)),this._blurMaterial=I0(r,e,t),this._ggxMaterial=D0(r,e,t)}return s}_compileMaterial(e){const t=new ce(new Bt,e);this._renderer.compile(t,Es)}_sceneToCubeUV(e,t,n,s,r){const l=new Mn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ec),h.toneMapping=On,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ce(new Rt,new fa({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Ec),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const T=this._cubeSize;$i(s,S*T,E>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ri||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;$i(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Es)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-ci?n-g+ci:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,$i(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Es),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,$i(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Es)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*bi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):bi;m>bi&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const p=[];let M=0;for(let w=0;w<bi;++w){const C=w/_,x=Math.exp(-C*C/2);p.push(x),w===0?M+=x:w<m&&(M+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const S=this._sizeLods[s],T=3*S*(s>E-ci?s-E+ci:0),A=4*(this._cubeSize-S);$i(t,T,A,3*S,2*S),l.setRenderTarget(t),l.render(h,Es)}}function P0(i){const e=[],t=[],n=[];let s=i;const r=i-ci+1+Sc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ci?l=Sc[a-i+ci-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),E=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,C=A>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(x,_*g*A),E.set(f,m*g*A);const y=[A,A,A,A,A,A];S.set(y,p*g*A)}const T=new Bt;T.setAttribute("position",new Ft(M,_)),T.setAttribute("uv",new Ft(E,m)),T.setAttribute("faceIndex",new Ft(S,p)),n.push(new ce(T,null)),s>ci&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Tc(i,e,t){const n=new An(i,e,t);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function D0(i,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:da(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function I0(i,e,t){const n=new Float32Array(bi),s=new D(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:da(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function wc(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ac(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function da(){return`

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
	`}function L0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===yo||l===So,u=l===Ri||l===ls;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new bc(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new bc(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function U0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Hs("WebGLRenderer: "+n+" extension not supported."),s}}}function N0(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let E=0,S=M.length;E<S;E+=3){const T=M[E+0],A=M[E+1],w=M[E+2];f.push(T,A,A,w,w,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let E=0,S=M.length/3-1;E<S;E+=3){const T=E+0,A=E+1,w=E+2;f.push(T,A,A,w,w,T)}}else return;const m=new(Ou(f)?Gu:Vu)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function F0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function O0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function B0(i,e,t){const n=new WeakMap,s=new bt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*A*4*h),C=new zu(w,T,A,h);C.type=Nn,C.needsUpdate=!0;const x=S*4;for(let R=0;R<h;R++){const I=p[R],N=M[R],z=E[R],k=T*A*4*R;for(let V=0;V<I.count;V++){const U=V*x;g===!0&&(s.fromBufferAttribute(I,V),w[k+U+0]=s.x,w[k+U+1]=s.y,w[k+U+2]=s.z,w[k+U+3]=0),_===!0&&(s.fromBufferAttribute(N,V),w[k+U+4]=s.x,w[k+U+5]=s.y,w[k+U+6]=s.z,w[k+U+7]=0),m===!0&&(s.fromBufferAttribute(z,V),w[k+U+8]=s.x,w[k+U+9]=s.y,w[k+U+10]=s.z,w[k+U+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new Pe(T,A)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function z0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const k0={[yu]:"LINEAR_TONE_MAPPING",[Su]:"REINHARD_TONE_MAPPING",[Eu]:"CINEON_TONE_MAPPING",[bu]:"ACES_FILMIC_TONE_MAPPING",[wu]:"AGX_TONE_MAPPING",[Au]:"NEUTRAL_TONE_MAPPING",[Tu]:"CUSTOM_TONE_MAPPING"};function V0(i,e,t,n,s){const r=new An(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new An(e,t,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),o=new Bt;o.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new pt([0,2,0,0,2,0],2));const l=new Md({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ce(o,l),u=new $s(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(M,E){r.setSize(M,E),a.setSize(M,E);for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(M,E)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const E=r.width,S=r.height;for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(E,S)}},this.begin=function(M,E){if(d||M.toneMapping===On&&m.length===0)return!1;if(_=E,E!==null){const S=E.width,T=E.height;(r.width!==S||r.height!==T)&&this.setSize(S,T)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=On,!0},this.hasRenderPass=function(){return p},this.end=function(M,E){M.toneMapping=g,d=!0;let S=r,T=a;for(let A=0;A<m.length;A++){const w=m[A];if(w.enabled!==!1&&(w.render(M,T,S,E),w.needsSwap!==!1)){const C=S;S=T,T=C}}if(h!==M.outputColorSpace||f!==M.toneMapping){h=M.outputColorSpace,f=M.toneMapping,l.defines={},et.getTransfer(h)===ct&&(l.defines.SRGB_TRANSFER="");const A=k0[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(_),M.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ku=new Wt,sl=new Xs(1,1),Ju=new zu,Qu=new Ur,eh=new Xu,Rc=[],Cc=[],Pc=new Float32Array(16),Dc=new Float32Array(9),Ic=new Float32Array(4);function gs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Rc[s];if(r===void 0&&(r=new Float32Array(s),Rc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function pa(i,e){let t=Cc[e];t===void 0&&(t=new Int32Array(e),Cc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function G0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function Y0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Ic.set(n),i.uniformMatrix2fv(this.addr,!1,Ic),kt(t,n)}}function j0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Dc.set(n),i.uniformMatrix3fv(this.addr,!1,Dc),kt(t,n)}}function q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Pc.set(n),i.uniformMatrix4fv(this.addr,!1,Pc),kt(t,n)}}function $0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function Q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sl.compareFunction=t.isReversedDepthBuffer()?xl:_l,r=sl):r=Ku,t.setTexture2D(e||r,s)}function sg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qu,s)}function rg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||eh,s)}function ag(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ju,s)}function og(i){switch(i){case 5126:return G0;case 35664:return H0;case 35665:return W0;case 35666:return X0;case 35674:return Y0;case 35675:return j0;case 35676:return q0;case 5124:case 35670:return $0;case 35667:case 35671:return Z0;case 35668:case 35672:return K0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}function lg(i,e){i.uniform1fv(this.addr,e)}function cg(i,e){const t=gs(e,this.size,2);i.uniform2fv(this.addr,t)}function ug(i,e){const t=gs(e,this.size,3);i.uniform3fv(this.addr,t)}function hg(i,e){const t=gs(e,this.size,4);i.uniform4fv(this.addr,t)}function fg(i,e){const t=gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dg(i,e){const t=gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pg(i,e){const t=gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mg(i,e){i.uniform1iv(this.addr,e)}function gg(i,e){i.uniform2iv(this.addr,e)}function _g(i,e){i.uniform3iv(this.addr,e)}function xg(i,e){i.uniform4iv(this.addr,e)}function vg(i,e){i.uniform1uiv(this.addr,e)}function Mg(i,e){i.uniform2uiv(this.addr,e)}function yg(i,e){i.uniform3uiv(this.addr,e)}function Sg(i,e){i.uniform4uiv(this.addr,e)}function Eg(i,e,t){const n=this.cache,s=e.length,r=pa(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sl:a=Ku;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function bg(i,e,t){const n=this.cache,s=e.length,r=pa(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qu,r[a])}function Tg(i,e,t){const n=this.cache,s=e.length,r=pa(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||eh,r[a])}function wg(i,e,t){const n=this.cache,s=e.length,r=pa(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ju,r[a])}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return ug;case 35666:return hg;case 35674:return fg;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return vg;case 36294:return Mg;case 36295:return yg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return wg}}class Rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=og(t.type)}}class Cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ag(t.type)}}class Pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Lc(i,e){i.seq.push(e),i.map[e.id]=e}function Dg(i,e,t){const n=i.name,s=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),a=$a.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lc(t,c===void 0?new Rg(o,i,e):new Cg(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Pg(o),Lc(t,h)),t=h}}}class Nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Dg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Uc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ig=37297;let Lg=0;function Ug(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Nc=new ze;function Ng(i){et._getMatrix(Nc,et.workingColorSpace,i);const e=`mat3( ${Nc.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case $r:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ug(i.getShaderSource(e),o)}else return r}function Fg(i,e){const t=Ng(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Og={[yu]:"Linear",[Su]:"Reinhard",[Eu]:"Cineon",[bu]:"ACESFilmic",[wu]:"AgX",[Au]:"Neutral",[Tu]:"Custom"};function Bg(i,e){const t=Og[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vr=new D;function zg(){et.getLuminanceCoefficients(vr);const i=vr.x.toFixed(4),e=vr.y.toFixed(4),t=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function Vg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ps(i){return i!==""}function Oc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(Hg,Xg)}const Wg=new Map;function Xg(i,e){let t=Ge[e];if(t===void 0){const n=Wg.get(e);if(n!==void 0)t=Ge[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(i){return i.replace(Yg,jg)}function jg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kc(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qg={[Rr]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function $g(i){return qg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zg={[Ri]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE_UV"};function Kg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Jg={[ls]:"ENVMAP_MODE_REFRACTION"};function Qg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e_={[Mu]:"ENVMAP_BLENDING_MULTIPLY",[xf]:"ENVMAP_BLENDING_MIX",[vf]:"ENVMAP_BLENDING_ADD"};function t_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":e_[i.combine]||"ENVMAP_BLENDING_NONE"}function n_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function i_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$g(t),c=Kg(t),u=Qg(t),h=t_(t),f=n_(t),d=kg(t),g=Vg(r),_=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(m=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ge.tonemapping_pars_fragment:"",t.toneMapping!==On?Bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Fg("linearToOutputTexel",t.outputColorSpace),zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),a=rl(a),a=Oc(a,t),a=Bc(a,t),o=rl(o),o=Oc(o,t),o=Bc(o,t),a=zc(a),o=zc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+m+a,S=M+p+o,T=Uc(s,s.VERTEX_SHADER,E),A=Uc(s,s.FRAGMENT_SHADER,S);s.attachShader(_,T),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(T)||"",z=s.getShaderInfoLog(A)||"",k=I.trim(),V=N.trim(),U=z.trim();let q=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,A);else{const H=Fc(s,T,"vertex"),Y=Fc(s,A,"fragment");Oe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+H+`
`+Y)}else k!==""?Ie("WebGLProgram: Program Info Log:",k):(V===""||U==="")&&(ee=!1);ee&&(R.diagnostics={runnable:q,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(T),s.deleteShader(A),C=new Nr(s,_),x=Gg(s,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Ig)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let s_=0;class r_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new a_(e),t.set(e,n)),n}}class a_{constructor(e){this.id=s_++,this.code=e,this.usedTimes=0}}function o_(i,e,t,n,s,r,a){const o=new Ml,l=new r_,c=new Set,u=[],h=new Map,f=s.logarithmicDepthBuffer;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,R,I,N){const z=I.fog,k=N.geometry,V=x.isMeshStandardMaterial?I.environment:null,U=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),q=U&&U.mapping===ca?U.image.height:null,ee=g[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const H=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Y=H!==void 0?H.length:0;let he=0;k.morphAttributes.position!==void 0&&(he=1),k.morphAttributes.normal!==void 0&&(he=2),k.morphAttributes.color!==void 0&&(he=3);let Me,ke,Je,Z;if(ee){const ot=Un[ee];Me=ot.vertexShader,ke=ot.fragmentShader}else Me=x.vertexShader,ke=x.fragmentShader,l.update(x),Je=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);const Q=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Le=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,je=!!x.map,St=!!x.matcap,He=!!U,Qe=!!x.aoMap,rt=!!x.lightMap,Be=!!x.bumpMap,Tt=!!x.normalMap,L=!!x.displacementMap,Ae=!!x.emissiveMap,at=!!x.metalnessMap,gt=!!x.roughnessMap,Ee=x.anisotropy>0,P=x.clearcoat>0,v=x.dispersion>0,O=x.iridescence>0,$=x.sheen>0,J=x.transmission>0,j=Ee&&!!x.anisotropyMap,Te=P&&!!x.clearcoatMap,re=P&&!!x.clearcoatNormalMap,Se=P&&!!x.clearcoatRoughnessMap,Ue=O&&!!x.iridescenceMap,ne=O&&!!x.iridescenceThicknessMap,oe=$&&!!x.sheenColorMap,ye=$&&!!x.sheenRoughnessMap,be=!!x.specularMap,ae=!!x.specularColorMap,We=!!x.specularIntensityMap,F=J&&!!x.transmissionMap,de=J&&!!x.thicknessMap,ie=!!x.gradientMap,ge=!!x.alphaMap,te=x.alphaTest>0,K=!!x.alphaHash,se=!!x.extensions;let Fe=On;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const _t={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Me,fragmentShader:ke,defines:x.defines,customVertexShaderID:Je,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:us,alphaToCoverage:!!x.alphaToCoverage,map:je,matcap:St,envMap:He,envMapMode:He&&U.mapping,envMapCubeUVHeight:q,aoMap:Qe,lightMap:rt,bumpMap:Be,normalMap:Tt,displacementMap:L,emissiveMap:Ae,normalMapObjectSpace:Tt&&x.normalMapType===Ef,normalMapTangentSpace:Tt&&x.normalMapType===Fu,metalnessMap:at,roughnessMap:gt,anisotropy:Ee,anisotropyMap:j,clearcoat:P,clearcoatMap:Te,clearcoatNormalMap:re,clearcoatRoughnessMap:Se,dispersion:v,iridescence:O,iridescenceMap:Ue,iridescenceThicknessMap:ne,sheen:$,sheenColorMap:oe,sheenRoughnessMap:ye,specularMap:be,specularColorMap:ae,specularIntensityMap:We,transmission:J,transmissionMap:F,thicknessMap:de,gradientMap:ie,opaque:x.transparent===!1&&x.blending===is&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:K,combine:x.combine,mapUv:je&&_(x.map.channel),aoMapUv:Qe&&_(x.aoMap.channel),lightMapUv:rt&&_(x.lightMap.channel),bumpMapUv:Be&&_(x.bumpMap.channel),normalMapUv:Tt&&_(x.normalMap.channel),displacementMapUv:L&&_(x.displacementMap.channel),emissiveMapUv:Ae&&_(x.emissiveMap.channel),metalnessMapUv:at&&_(x.metalnessMap.channel),roughnessMapUv:gt&&_(x.roughnessMap.channel),anisotropyMapUv:j&&_(x.anisotropyMap.channel),clearcoatMapUv:Te&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(x.sheenRoughnessMap.channel),specularMapUv:be&&_(x.specularMap.channel),specularColorMapUv:ae&&_(x.specularColorMap.channel),specularIntensityMapUv:We&&_(x.specularIntensityMap.channel),transmissionMapUv:F&&_(x.transmissionMap.channel),thicknessMapUv:de&&_(x.thicknessMap.channel),alphaMapUv:ge&&_(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Tt||Ee),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(je||ge),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:he,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:je&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:Ae&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yn,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)y.push(R),y.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(M(y,x),E(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function M(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){const y=g[x.type];let R;if(y){const I=Un[y];R=ud.clone(I.uniforms)}else R=x.uniforms;return R}function T(x,y){let R=h.get(y);return R!==void 0?++R.usedTimes:(R=new i_(i,y,x,r),u.push(R),h.set(y,R)),R}function A(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:C}}function l_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function c_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||c_),n.length>1&&n.sort(f||Vc),s.length>1&&s.sort(f||Vc)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function u_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Gc,i.set(n,[a])):s>=r.length?(a=new Gc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function h_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ze};break;case"SpotLight":t={position:new D,direction:new D,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function f_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let d_=0;function p_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function m_(i){const e=new h_,t=f_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new st,a=new st;function o(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,E=0,S=0,T=0,A=0,w=0;c.sort(p_);for(let x=0,y=c.length;x<y;x++){const R=c[x],I=R.color,N=R.intensity,z=R.distance;let k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===cs?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*N,h+=I.g*N,f+=I.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],N);w++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const U=R.shadow,q=t.get(R);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=R.shadow.matrix,M++}n.directional[d]=V,d++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(I).multiplyScalar(N),V.distance=z,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[_]=V;const U=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,U.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=U.matrix,R.castShadow){const q=t.get(R);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=k,S++}_++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(I).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=V,m++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const U=R.shadow,q=t.get(R);q.shadowIntensity=U.intensity,q.shadowBias=U.bias,q.shadowNormalBias=U.normalBias,q.shadowRadius=U.radius,q.shadowMapSize=U.mapSize,q.shadowCameraNear=U.camera.near,q.shadowCameraFar=U.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=V,g++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==E||C.numSpotShadows!==S||C.numSpotMaps!==T||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=E,C.numSpotShadows=S,C.numSpotMaps=T,C.numLightProbes=w,n.version=d_++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const E=c[p];if(E.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(E.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Hc(i){const e=new m_(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function g_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Hc(i),e.set(s,[o])):r>=a.length?(o=new Hc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`,v_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],M_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Wc=new st,bs=new D,Za=new D;function y_(i,e,t){let n=new yl;const s=new Pe,r=new Pe,a=new bt,o=new yd,l=new Sd,c={},u=t.maxTextureSize,h={[ui]:cn,[cn]:ui,[yn]:yn},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:__,fragmentShader:x_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ce(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let p=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===Jh&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=Rr);const x=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(qn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=p!==this.type;N&&w.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(k=>k.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,k=A.length;z<k;z++){const V=A[z],U=V.shadow;if(U===void 0){Ie("WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const q=U.getFrameExtents();if(s.multiply(q),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,U.mapSize.y=r.y)),U.map===null||N===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Rs){if(V.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new An(s.x,s.y,{format:cs,type:Zn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),U.map.texture.name=V.name+".shadowMap",U.map.depthTexture=new Xs(s.x,s.y,Nn),U.map.depthTexture.name=V.name+".shadowMapDepth",U.map.depthTexture.format=Kn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=It,U.map.depthTexture.magFilter=It}else{V.isPointLight?(U.map=new Yu(s.x),U.map.depthTexture=new vd(s.x,Bn)):(U.map=new An(s.x,s.y),U.map.depthTexture=new Xs(s.x,s.y,Bn)),U.map.depthTexture.name=V.name+".shadowMap",U.map.depthTexture.format=Kn;const H=i.state.buffers.depth.getReversed();this.type===Rr?(U.map.depthTexture.compareFunction=H?xl:_l,U.map.depthTexture.minFilter=Ct,U.map.depthTexture.magFilter=Ct):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=It,U.map.depthTexture.magFilter=It)}U.camera.updateProjectionMatrix()}const ee=U.map.isWebGLCubeRenderTarget?6:1;for(let H=0;H<ee;H++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,H),i.clear();else{H===0&&(i.setRenderTarget(U.map),i.clear());const Y=U.getViewport(H);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),I.viewport(a)}if(V.isPointLight){const Y=U.camera,he=U.matrix,Me=V.distance||Y.far;Me!==Y.far&&(Y.far=Me,Y.updateProjectionMatrix()),bs.setFromMatrixPosition(V.matrixWorld),Y.position.copy(bs),Za.copy(Y.position),Za.add(v_[H]),Y.up.copy(M_[H]),Y.lookAt(Za),Y.updateMatrixWorld(),he.makeTranslation(-bs.x,-bs.y,-bs.z),Wc.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Wc,Y.coordinateSystem,Y.reversedDepth)}else U.updateMatrices(V);n=U.getFrustum(),S(w,C,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===Rs&&M(U,C),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,y,R)};function M(A,w){const C=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new An(s.x,s.y,{format:cs,type:Zn})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,C,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,C,d,_,null)}function E(A,w,C,x){let y=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=C.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=y.uuid,N=w.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let k=z[N];k===void 0&&(k=y.clone(),z[N]=k,w.addEventListener("dispose",T)),y=k}if(y.visible=w.visible,y.wireframe=w.wireframe,x===Rs?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=i.properties.get(y);I.light=C}return y}function S(A,w,C,x,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Rs)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const N=e.update(A),z=A.material;if(Array.isArray(z)){const k=N.groups;for(let V=0,U=k.length;V<U;V++){const q=k[V],ee=z[q.materialIndex];if(ee&&ee.visible){const H=E(A,ee,x,y);A.onBeforeShadow(i,A,w,C,N,H,q),i.renderBufferDirect(C,null,N,H,A,q),A.onAfterShadow(i,A,w,C,N,H,q)}}}else if(z.visible){const k=E(A,z,x,y);A.onBeforeShadow(i,A,w,C,N,k,null),i.renderBufferDirect(C,null,N,k,A,null),A.onAfterShadow(i,A,w,C,N,k,null)}}const I=A.children;for(let N=0,z=I.length;N<z;N++)S(I[N],w,C,x,y)}function T(A){A.target.removeEventListener("dispose",T);for(const C in c){const x=c[C],y=A.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const S_={[po]:mo,[go]:vo,[_o]:Mo,[os]:xo,[mo]:po,[vo]:go,[Mo]:_o,[xo]:os};function E_(i,e){function t(){let F=!1;const de=new bt;let ie=null;const ge=new bt(0,0,0,0);return{setMask:function(te){ie!==te&&!F&&(i.colorMask(te,te,te,te),ie=te)},setLocked:function(te){F=te},setClear:function(te,K,se,Fe,_t){_t===!0&&(te*=Fe,K*=Fe,se*=Fe),de.set(te,K,se,Fe),ge.equals(de)===!1&&(i.clearColor(te,K,se,Fe),ge.copy(de))},reset:function(){F=!1,ie=null,ge.set(-1,0,0,0)}}}function n(){let F=!1,de=!1,ie=null,ge=null,te=null;return{setReversed:function(K){if(de!==K){const se=e.get("EXT_clip_control");K?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),de=K;const Fe=te;te=null,this.setClear(Fe)}},getReversed:function(){return de},setTest:function(K){K?Q(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(K){ie!==K&&!F&&(i.depthMask(K),ie=K)},setFunc:function(K){if(de&&(K=S_[K]),ge!==K){switch(K){case po:i.depthFunc(i.NEVER);break;case mo:i.depthFunc(i.ALWAYS);break;case go:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case xo:i.depthFunc(i.GEQUAL);break;case vo:i.depthFunc(i.GREATER);break;case Mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=K}},setLocked:function(K){F=K},setClear:function(K){te!==K&&(de&&(K=1-K),i.clearDepth(K),te=K)},reset:function(){F=!1,ie=null,ge=null,te=null,de=!1}}}function s(){let F=!1,de=null,ie=null,ge=null,te=null,K=null,se=null,Fe=null,_t=null;return{setTest:function(ot){F||(ot?Q(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(ot){de!==ot&&!F&&(i.stencilMask(ot),de=ot)},setFunc:function(ot,Pn,zn){(ie!==ot||ge!==Pn||te!==zn)&&(i.stencilFunc(ot,Pn,zn),ie=ot,ge=Pn,te=zn)},setOp:function(ot,Pn,zn){(K!==ot||se!==Pn||Fe!==zn)&&(i.stencilOp(ot,Pn,zn),K=ot,se=Pn,Fe=zn)},setLocked:function(ot){F=ot},setClear:function(ot){_t!==ot&&(i.clearStencil(ot),_t=ot)},reset:function(){F=!1,de=null,ie=null,ge=null,te=null,K=null,se=null,Fe=null,_t=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,E=null,S=null,T=null,A=null,w=new Ze(0,0,0),C=0,x=!1,y=null,R=null,I=null,N=null,z=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,U=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=U>=1):q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=U>=2);let ee=null,H={};const Y=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),Me=new bt().fromArray(Y),ke=new bt().fromArray(he);function Je(F,de,ie,ge){const te=new Uint8Array(4),K=i.createTexture();i.bindTexture(F,K),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<ie;se++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(de+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return K}const Z={};Z[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(os),Be(!1),Tt(Vl),Q(i.CULL_FACE),Qe(qn);function Q(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function me(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Le(F,de){return h[F]!==de?(i.bindFramebuffer(F,de),h[F]=de,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function _e(F,de){let ie=d,ge=!1;if(F){ie=f.get(de),ie===void 0&&(ie=[],f.set(de,ie));const te=F.textures;if(ie.length!==te.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let K=0,se=te.length;K<se;K++)ie[K]=i.COLOR_ATTACHMENT0+K;ie.length=te.length,ge=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ie)}function je(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const St={[Si]:i.FUNC_ADD,[ef]:i.FUNC_SUBTRACT,[tf]:i.FUNC_REVERSE_SUBTRACT};St[nf]=i.MIN,St[sf]=i.MAX;const He={[rf]:i.ZERO,[af]:i.ONE,[of]:i.SRC_COLOR,[ho]:i.SRC_ALPHA,[df]:i.SRC_ALPHA_SATURATE,[hf]:i.DST_COLOR,[cf]:i.DST_ALPHA,[lf]:i.ONE_MINUS_SRC_COLOR,[fo]:i.ONE_MINUS_SRC_ALPHA,[ff]:i.ONE_MINUS_DST_COLOR,[uf]:i.ONE_MINUS_DST_ALPHA,[pf]:i.CONSTANT_COLOR,[mf]:i.ONE_MINUS_CONSTANT_COLOR,[gf]:i.CONSTANT_ALPHA,[_f]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(F,de,ie,ge,te,K,se,Fe,_t,ot){if(F===qn){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),F!==Qh){if(F!==m||ot!==x){if((p!==Si||S!==Si)&&(i.blendEquation(i.FUNC_ADD),p=Si,S=Si),ot)switch(F){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gl:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",F);break}else switch(F){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hl:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",F);break}M=null,E=null,T=null,A=null,w.set(0,0,0),C=0,m=F,x=ot}return}te=te||de,K=K||ie,se=se||ge,(de!==p||te!==S)&&(i.blendEquationSeparate(St[de],St[te]),p=de,S=te),(ie!==M||ge!==E||K!==T||se!==A)&&(i.blendFuncSeparate(He[ie],He[ge],He[K],He[se]),M=ie,E=ge,T=K,A=se),(Fe.equals(w)===!1||_t!==C)&&(i.blendColor(Fe.r,Fe.g,Fe.b,_t),w.copy(Fe),C=_t),m=F,x=!1}function rt(F,de){F.side===yn?me(i.CULL_FACE):Q(i.CULL_FACE);let ie=F.side===cn;de&&(ie=!ie),Be(ie),F.blending===is&&F.transparent===!1?Qe(qn):Qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const ge=F.stencilWrite;o.setTest(ge),ge&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ae(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function Tt(F){F!==Zh?(Q(i.CULL_FACE),F!==R&&(F===Vl?i.cullFace(i.BACK):F===Kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),R=F}function L(F){F!==I&&(V&&i.lineWidth(F),I=F)}function Ae(F,de,ie){F?(Q(i.POLYGON_OFFSET_FILL),(N!==de||z!==ie)&&(i.polygonOffset(de,ie),N=de,z=ie)):me(i.POLYGON_OFFSET_FILL)}function at(F){F?Q(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function gt(F){F===void 0&&(F=i.TEXTURE0+k-1),ee!==F&&(i.activeTexture(F),ee=F)}function Ee(F,de,ie){ie===void 0&&(ee===null?ie=i.TEXTURE0+k-1:ie=ee);let ge=H[ie];ge===void 0&&(ge={type:void 0,texture:void 0},H[ie]=ge),(ge.type!==F||ge.texture!==de)&&(ee!==ie&&(i.activeTexture(ie),ee=ie),i.bindTexture(F,de||Z[F]),ge.type=F,ge.texture=de)}function P(){const F=H[ee];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function $(){try{i.texSubImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function J(){try{i.texSubImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function re(){try{i.texStorage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function Se(){try{i.texStorage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function Ue(){try{i.texImage2D(...arguments)}catch(F){Oe("WebGLState:",F)}}function ne(){try{i.texImage3D(...arguments)}catch(F){Oe("WebGLState:",F)}}function oe(F){Me.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Me.copy(F))}function ye(F){ke.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ke.copy(F))}function be(F,de){let ie=c.get(de);ie===void 0&&(ie=new WeakMap,c.set(de,ie));let ge=ie.get(F);ge===void 0&&(ge=i.getUniformBlockIndex(de,F.name),ie.set(F,ge))}function ae(F,de){const ge=c.get(de).get(F);l.get(de)!==ge&&(i.uniformBlockBinding(de,ge,F.__bindingPointIndex),l.set(de,ge))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ee=null,H={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,E=null,S=null,T=null,A=null,w=new Ze(0,0,0),C=0,x=!1,y=null,R=null,I=null,N=null,z=null,Me.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:me,bindFramebuffer:Le,drawBuffers:_e,useProgram:je,setBlending:Qe,setMaterial:rt,setFlipSided:Be,setCullFace:Tt,setLineWidth:L,setPolygonOffset:Ae,setScissorTest:at,activeTexture:gt,bindTexture:Ee,unbindTexture:P,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Ue,texImage3D:ne,updateUBOMapping:be,uniformBlockBinding:ae,texStorage2D:re,texStorage3D:Se,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:j,compressedTexSubImage3D:Te,scissor:oe,viewport:ye,reset:We}}function b_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,v){return d?new OffscreenCanvas(P,v):Gs("canvas")}function _(P,v,O){let $=1;const J=Ee(P);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor($*J.width),Te=Math.floor($*J.height);h===void 0&&(h=g(j,Te));const re=v?g(j,Te):h;return re.width=j,re.height=Te,re.getContext("2d").drawImage(P,0,0,j,Te),Ie("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Te+")."),re}else return"data"in P&&Ie("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(P,v,O,$,J=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=v;if(v===i.RED&&(O===i.FLOAT&&(j=i.R32F),O===i.HALF_FLOAT&&(j=i.R16F),O===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.R8UI),O===i.UNSIGNED_SHORT&&(j=i.R16UI),O===i.UNSIGNED_INT&&(j=i.R32UI),O===i.BYTE&&(j=i.R8I),O===i.SHORT&&(j=i.R16I),O===i.INT&&(j=i.R32I)),v===i.RG&&(O===i.FLOAT&&(j=i.RG32F),O===i.HALF_FLOAT&&(j=i.RG16F),O===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RG8UI),O===i.UNSIGNED_SHORT&&(j=i.RG16UI),O===i.UNSIGNED_INT&&(j=i.RG32UI),O===i.BYTE&&(j=i.RG8I),O===i.SHORT&&(j=i.RG16I),O===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGB8UI),O===i.UNSIGNED_SHORT&&(j=i.RGB16UI),O===i.UNSIGNED_INT&&(j=i.RGB32UI),O===i.BYTE&&(j=i.RGB8I),O===i.SHORT&&(j=i.RGB16I),O===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),O===i.UNSIGNED_INT&&(j=i.RGBA32UI),O===i.BYTE&&(j=i.RGBA8I),O===i.SHORT&&(j=i.RGBA16I),O===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){const Te=J?$r:et.getTransfer($);O===i.FLOAT&&(j=i.RGBA32F),O===i.HALF_FLOAT&&(j=i.RGBA16F),O===i.UNSIGNED_BYTE&&(j=Te===ct?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(P,v){let O;return P?v===null||v===Bn||v===Vs?O=i.DEPTH24_STENCIL8:v===Nn?O=i.DEPTH32F_STENCIL8:v===ks&&(O=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Bn||v===Vs?O=i.DEPTH_COMPONENT24:v===Nn?O=i.DEPTH_COMPONENT32F:v===ks&&(O=i.DEPTH_COMPONENT16),O}function T(P,v){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==It&&P.minFilter!==Ct?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function A(P){const v=P.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&u.delete(v)}function w(P){const v=P.target;v.removeEventListener("dispose",w),y(v)}function C(P){const v=n.get(P);if(v.__webglInit===void 0)return;const O=P.source,$=f.get(O);if($){const J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(P),Object.keys($).length===0&&f.delete(O)}n.remove(P)}function x(P){const v=n.get(P);i.deleteTexture(v.__webglTexture);const O=P.source,$=f.get(O);delete $[v.__cacheKey],a.memory.textures--}function y(P){const v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[$][J]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=P.textures;for(let $=0,J=O.length;$<J;$++){const j=n.get(O[$]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(P)}let R=0;function I(){R=0}function N(){const P=R;return P>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function z(P){const v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function k(P,v){const O=n.get(P);if(P.isVideoTexture&&at(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){const $=P.image;if($===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,P,v);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function V(P,v){const O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){Z(O,P,v);return}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function U(P,v){const O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){Z(O,P,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function q(P,v){const O=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&O.__version!==P.version){Q(O,P,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const ee={[jr]:i.REPEAT,[Nt]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},H={[It]:i.NEAREST,[Cu]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},Y={[bf]:i.NEVER,[Cf]:i.ALWAYS,[Tf]:i.LESS,[_l]:i.LEQUAL,[wf]:i.EQUAL,[xl]:i.GEQUAL,[Af]:i.GREATER,[Rf]:i.NOTEQUAL};function he(P,v){if(v.type===Nn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ct||v.magFilter===Cr||v.magFilter===Cs||v.magFilter===li||v.minFilter===Ct||v.minFilter===Cr||v.minFilter===Cs||v.minFilter===li)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ee[v.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ee[v.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ee[v.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,H[v.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,H[v.minFilter]),v.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Y[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===It||v.minFilter!==Cs&&v.minFilter!==li||v.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Me(P,v){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",A));const $=v.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const j=z(v);if(j!==P.__cacheKey){J[j]===void 0&&(J[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[j].usedTimes++;const Te=J[P.__cacheKey];Te!==void 0&&(J[P.__cacheKey].usedTimes--,Te.usedTimes===0&&x(v)),P.__cacheKey=j,P.__webglTexture=J[j].texture}return O}function ke(P,v,O){return Math.floor(Math.floor(P/O)/v)}function Je(P,v,O,$){const j=P.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,$,v.data);else{j.sort((ne,oe)=>ne.start-oe.start);let Te=0;for(let ne=1;ne<j.length;ne++){const oe=j[Te],ye=j[ne],be=oe.start+oe.count,ae=ke(ye.start,v.width,4),We=ke(oe.start,v.width,4);ye.start<=be+1&&ae===We&&ke(ye.start+ye.count-1,v.width,4)===ae?oe.count=Math.max(oe.count,ye.start+ye.count-oe.start):(++Te,j[Te]=ye)}j.length=Te+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),Ue=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ne=0,oe=j.length;ne<oe;ne++){const ye=j[ne],be=Math.floor(ye.start/4),ae=Math.ceil(ye.count/4),We=be%v.width,F=Math.floor(be/v.width),de=ae,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,We,F,de,ie,O,$,v.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ue)}}function Z(P,v,O){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const J=Me(P,v),j=v.source;t.bindTexture($,P.__webglTexture,i.TEXTURE0+O);const Te=n.get(j);if(j.version!==Te.__version||J===!0){t.activeTexture(i.TEXTURE0+O);const re=et.getPrimaries(et.workingColorSpace),Se=v.colorSpace===Yn?null:et.getPrimaries(v.colorSpace),Ue=v.colorSpace===Yn||re===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ne=_(v.image,!1,s.maxTextureSize);ne=gt(v,ne);const oe=r.convert(v.format,v.colorSpace),ye=r.convert(v.type);let be=E(v.internalFormat,oe,ye,v.colorSpace,v.isVideoTexture);he($,v);let ae;const We=v.mipmaps,F=v.isVideoTexture!==!0,de=Te.__version===void 0||J===!0,ie=j.dataReady,ge=T(v,ne);if(v.isDepthTexture)be=S(v.format===wi,v.type),de&&(F?t.texStorage2D(i.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,be,ne.width,ne.height,0,oe,ye,null));else if(v.isDataTexture)if(We.length>0){F&&de&&t.texStorage2D(i.TEXTURE_2D,ge,be,We[0].width,We[0].height);for(let te=0,K=We.length;te<K;te++)ae=We[te],F?ie&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ae.width,ae.height,oe,ye,ae.data):t.texImage2D(i.TEXTURE_2D,te,be,ae.width,ae.height,0,oe,ye,ae.data);v.generateMipmaps=!1}else F?(de&&t.texStorage2D(i.TEXTURE_2D,ge,be,ne.width,ne.height),ie&&Je(v,ne,oe,ye)):t.texImage2D(i.TEXTURE_2D,0,be,ne.width,ne.height,0,oe,ye,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,be,We[0].width,We[0].height,ne.depth);for(let te=0,K=We.length;te<K;te++)if(ae=We[te],v.format!==ln)if(oe!==null)if(F){if(ie)if(v.layerUpdates.size>0){const se=yc(ae.width,ae.height,v.format,v.type);for(const Fe of v.layerUpdates){const _t=ae.data.subarray(Fe*se/ae.data.BYTES_PER_ELEMENT,(Fe+1)*se/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Fe,ae.width,ae.height,1,oe,_t)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ae.width,ae.height,ne.depth,oe,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,be,ae.width,ae.height,ne.depth,0,ae.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ae.width,ae.height,ne.depth,oe,ye,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,be,ae.width,ae.height,ne.depth,0,oe,ye,ae.data)}else{F&&de&&t.texStorage2D(i.TEXTURE_2D,ge,be,We[0].width,We[0].height);for(let te=0,K=We.length;te<K;te++)ae=We[te],v.format!==ln?oe!==null?F?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,te,be,ae.width,ae.height,0,ae.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ie&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ae.width,ae.height,oe,ye,ae.data):t.texImage2D(i.TEXTURE_2D,te,be,ae.width,ae.height,0,oe,ye,ae.data)}else if(v.isDataArrayTexture)if(F){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,be,ne.width,ne.height,ne.depth),ie)if(v.layerUpdates.size>0){const te=yc(ne.width,ne.height,v.format,v.type);for(const K of v.layerUpdates){const se=ne.data.subarray(K*te/ne.data.BYTES_PER_ELEMENT,(K+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,oe,ye,se)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,ye,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,oe,ye,ne.data);else if(v.isData3DTexture)F?(de&&t.texStorage3D(i.TEXTURE_3D,ge,be,ne.width,ne.height,ne.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,ye,ne.data)):t.texImage3D(i.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,oe,ye,ne.data);else if(v.isFramebufferTexture){if(de)if(F)t.texStorage2D(i.TEXTURE_2D,ge,be,ne.width,ne.height);else{let te=ne.width,K=ne.height;for(let se=0;se<ge;se++)t.texImage2D(i.TEXTURE_2D,se,be,te,K,0,oe,ye,null),te>>=1,K>>=1}}else if(We.length>0){if(F&&de){const te=Ee(We[0]);t.texStorage2D(i.TEXTURE_2D,ge,be,te.width,te.height)}for(let te=0,K=We.length;te<K;te++)ae=We[te],F?ie&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,oe,ye,ae):t.texImage2D(i.TEXTURE_2D,te,be,oe,ye,ae);v.generateMipmaps=!1}else if(F){if(de){const te=Ee(ne);t.texStorage2D(i.TEXTURE_2D,ge,be,te.width,te.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,ye,ne)}else t.texImage2D(i.TEXTURE_2D,0,be,oe,ye,ne);m(v)&&p($),Te.__version=j.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Q(P,v,O){if(v.image.length!==6)return;const $=Me(P,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+O);const j=n.get(J);if(J.version!==j.__version||$===!0){t.activeTexture(i.TEXTURE0+O);const Te=et.getPrimaries(et.workingColorSpace),re=v.colorSpace===Yn?null:et.getPrimaries(v.colorSpace),Se=v.colorSpace===Yn||Te===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ue=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let K=0;K<6;K++)!Ue&&!ne?oe[K]=_(v.image[K],!0,s.maxCubemapSize):oe[K]=ne?v.image[K].image:v.image[K],oe[K]=gt(v,oe[K]);const ye=oe[0],be=r.convert(v.format,v.colorSpace),ae=r.convert(v.type),We=E(v.internalFormat,be,ae,v.colorSpace),F=v.isVideoTexture!==!0,de=j.__version===void 0||$===!0,ie=J.dataReady;let ge=T(v,ye);he(i.TEXTURE_CUBE_MAP,v);let te;if(Ue){F&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,We,ye.width,ye.height);for(let K=0;K<6;K++){te=oe[K].mipmaps;for(let se=0;se<te.length;se++){const Fe=te[se];v.format!==ln?be!==null?F?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,Fe.width,Fe.height,be,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,We,Fe.width,Fe.height,0,Fe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,Fe.width,Fe.height,be,ae,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,We,Fe.width,Fe.height,0,be,ae,Fe.data)}}}else{if(te=v.mipmaps,F&&de){te.length>0&&ge++;const K=Ee(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,We,K.width,K.height)}for(let K=0;K<6;K++)if(ne){F?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,oe[K].width,oe[K].height,be,ae,oe[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,oe[K].width,oe[K].height,0,be,ae,oe[K].data);for(let se=0;se<te.length;se++){const _t=te[se].image[K].image;F?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,_t.width,_t.height,be,ae,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,We,_t.width,_t.height,0,be,ae,_t.data)}}else{F?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,ae,oe[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,be,ae,oe[K]);for(let se=0;se<te.length;se++){const Fe=te[se];F?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,be,ae,Fe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,We,be,ae,Fe.image[K])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),j.__version=J.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function me(P,v,O,$,J,j){const Te=r.convert(O.format,O.colorSpace),re=r.convert(O.type),Se=E(O.internalFormat,Te,re,O.colorSpace),Ue=n.get(v),ne=n.get(O);if(ne.__renderTarget=v,!Ue.__hasExternalTextures){const oe=Math.max(1,v.width>>j),ye=Math.max(1,v.height>>j);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,j,Se,oe,ye,v.depth,0,Te,re,null):t.texImage2D(J,j,Se,oe,ye,0,Te,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Ae(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,ne.__webglTexture,0,L(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,ne.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(P,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,P),v.depthBuffer){const $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,j=S(v.stencilBuffer,J),Te=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(v),j,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(v),j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,P)}else{const $=v.textures;for(let J=0;J<$.length;J++){const j=$[J],Te=r.convert(j.format,j.colorSpace),re=r.convert(j.type),Se=E(j.internalFormat,Te,re,j.colorSpace);Ae(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(v),Se,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(v),Se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Se,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(P,v,O){const $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),he(i.TEXTURE_CUBE_MAP,v.depthTexture);const Ue=r.convert(v.depthTexture.format),ne=r.convert(v.depthTexture.type);let oe;v.depthTexture.format===Kn?oe=i.DEPTH_COMPONENT24:v.depthTexture.format===wi&&(oe=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,oe,v.width,v.height,0,Ue,ne,null)}}else k(v.depthTexture,0);const j=J.__webglTexture,Te=L(v),re=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Se=v.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Kn)Ae(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,re,j,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,Se,re,j,0);else if(v.depthTexture.format===wi)Ae(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,re,j,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,Se,re,j,0);else throw new Error("Unknown depthTexture format")}function je(P){const v=n.get(P),O=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let $=0;$<6;$++)_e(v.__webglFramebuffer[$],P,$);else{const $=P.texture.mipmaps;$&&$.length>0?_e(v.__webglFramebuffer[0],P,0):_e(v.__webglFramebuffer,P,0)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),Le(v.__webglDepthbuffer[$],P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}}else{const $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Le(v.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function St(P,v,O){const $=n.get(P);v!==void 0&&me($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&je(P)}function He(P){const v=P.texture,O=n.get(P),$=n.get(v);P.addEventListener("dispose",w);const J=P.textures,j=P.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let Se=0;Se<v.mipmaps.length;Se++)O.__webglFramebuffer[re][Se]=i.createFramebuffer()}else O.__webglFramebuffer[re]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)O.__webglFramebuffer[re]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Te)for(let re=0,Se=J.length;re<Se;re++){const Ue=n.get(J[re]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Ae(P)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const Se=J[re];O.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const Ue=r.convert(Se.format,Se.colorSpace),ne=r.convert(Se.type),oe=E(Se.internalFormat,Ue,ne,Se.colorSpace,P.isXRRenderTarget===!0),ye=L(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,oe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,O.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),he(i.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)me(O.__webglFramebuffer[re][Se],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se);else me(O.__webglFramebuffer[re],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let re=0,Se=J.length;re<Se;re++){const Ue=J[re],ne=n.get(Ue);let oe=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(oe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,ne.__webglTexture),he(oe,Ue),me(O.__webglFramebuffer,P,Ue,i.COLOR_ATTACHMENT0+re,oe,0),m(Ue)&&p(oe)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),he(re,v),v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)me(O.__webglFramebuffer[Se],P,v,i.COLOR_ATTACHMENT0,re,Se);else me(O.__webglFramebuffer,P,v,i.COLOR_ATTACHMENT0,re,0);m(v)&&p(re),t.unbindTexture()}P.depthBuffer&&je(P)}function Qe(P){const v=P.textures;for(let O=0,$=v.length;O<$;O++){const J=v[O];if(m(J)){const j=M(P),Te=n.get(J).__webglTexture;t.bindTexture(j,Te),p(j),t.unbindTexture()}}}const rt=[],Be=[];function Tt(P){if(P.samples>0){if(Ae(P)===!1){const v=P.textures,O=P.width,$=P.height;let J=i.COLOR_BUFFER_BIT;const j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(P),re=v.length>1;if(re)for(let Ue=0;Ue<v.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=P.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ue=0;Ue<v.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]);const ne=n.get(v[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,J,i.NEAREST),l===!0&&(rt.length=0,Be.length=0,rt.push(i.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(rt.push(j),Be.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ue=0;Ue<v.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]);const ne=n.get(v[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const v=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function L(P){return Math.min(s.maxSamples,P.samples)}function Ae(P){const v=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function at(P){const v=a.render.frame;u.get(P)!==v&&(u.set(P,v),P.update())}function gt(P,v){const O=P.colorSpace,$=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==us&&O!==Yn&&(et.getTransfer(O)===ct?($!==ln||J!==$t)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",O)),v}function Ee(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=U,this.setTextureCube=q,this.rebindTextures=St,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function T_(i,e){function t(n,s=Yn){let r;const a=et.getTransfer(s);if(n===$t)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pu)return i.BYTE;if(n===Du)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===Uu)return i.ALPHA;if(n===Nu)return i.RGB;if(n===ln)return i.RGBA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===dl)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===cs)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===Pr||n===Dr||n===Ir||n===Lr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===bo||n===To||n===wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===Ro||n===Co||n===Po||n===Do||n===Io||n===Lo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ao||n===Ro)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Co)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Po)return r.COMPRESSED_R11_EAC;if(n===Do)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Io)return r.COMPRESSED_RG11_EAC;if(n===Lo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Vo||n===Go||n===Ho||n===Wo||n===Xo||n===Yo||n===jo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Go)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===$o||n===Zo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qo)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ko||n===Jo||n===Qo||n===el)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
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

}`;class R_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new qu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sn({vertexShader:w_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C_ extends Ii{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new R_,p={},M=t.getContextAttributes();let E=null,S=null;const T=[],A=[],w=new Pe;let C=null;const x=new Mn;x.viewport=new bt;const y=new Mn;y.viewport=new bt;const R=[x,y],I=new Pd;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=T[Z];return Q===void 0&&(Q=new za,T[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=T[Z];return Q===void 0&&(Q=new za,T[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=T[Z];return Q===void 0&&(Q=new za,T[Z]=Q),Q.getHandSpace()};function k(Z){const Q=A.indexOf(Z.inputSource);if(Q===-1)return;const me=T[Q];me!==void 0&&(me.update(Z.inputSource,Z.frame,c||a),me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",U);for(let Z=0;Z<T.length;Z++){const Q=A[Z];Q!==null&&(A[Z]=null,T[Z].disconnect(Q))}N=null,z=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(E),d=null,f=null,h=null,s=null,S=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",U),M.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Le=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?wi:Kn,Le=M.stencil?Vs:Bn);const je={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new An(f.textureWidth,f.textureHeight,{format:ln,type:$t,depthTexture:new Xs(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new An(d.framebufferWidth,d.framebufferHeight,{format:ln,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(Z){for(let Q=0;Q<Z.removed.length;Q++){const me=Z.removed[Q],Le=A.indexOf(me);Le>=0&&(A[Le]=null,T[Le].disconnect(me))}for(let Q=0;Q<Z.added.length;Q++){const me=Z.added[Q];let Le=A.indexOf(me);if(Le===-1){for(let je=0;je<T.length;je++)if(je>=A.length){A.push(me),Le=je;break}else if(A[je]===null){A[je]=me,Le=je;break}if(Le===-1)break}const _e=T[Le];_e&&_e.connect(me)}}const q=new D,ee=new D;function H(Z,Q,me){q.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(me.matrixWorld);const Le=q.distanceTo(ee),_e=Q.projectionMatrix.elements,je=me.projectionMatrix.elements,St=_e[14]/(_e[10]-1),He=_e[14]/(_e[10]+1),Qe=(_e[9]+1)/_e[5],rt=(_e[9]-1)/_e[5],Be=(_e[8]-1)/_e[0],Tt=(je[8]+1)/je[0],L=St*Be,Ae=St*Tt,at=Le/(-Be+Tt),gt=at*-Be;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(gt),Z.translateZ(at),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_e[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ee=St+at,P=He+at,v=L-gt,O=Ae+(Le-gt),$=Qe*He/P*Ee,J=rt*He/P*Ee;Z.projectionMatrix.makePerspective(v,O,$,J,Ee,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Y(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,me=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(me=m.depthFar)),I.near=y.near=x.near=Q,I.far=y.far=x.far=me,(N!==I.near||z!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,z=I.far),I.layers.mask=Z.layers.mask|6,x.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const Le=Z.parent,_e=I.cameras;Y(I,Le);for(let je=0;je<_e.length;je++)Y(_e[je],Le);_e.length===2?H(I,x,y):I.projectionMatrix.copy(x.projectionMatrix),he(Z,I,Le)};function he(Z,Q,me){me===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ws*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return p[Z]};let Me=null;function ke(Z,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){const me=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Le=!1;me.length!==I.cameras.length&&(I.cameras.length=0,Le=!0);for(let He=0;He<me.length;He++){const Qe=me[He];let rt=null;if(d!==null)rt=d.getViewport(Qe);else{const Tt=h.getViewSubImage(f,Qe);rt=Tt.viewport,He===0&&(e.setRenderTargetTextures(S,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(S))}let Be=R[He];Be===void 0&&(Be=new Mn,Be.layers.enable(He),Be.viewport=new bt,R[He]=Be),Be.matrix.fromArray(Qe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Qe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(rt.x,rt.y,rt.width,rt.height),He===0&&(I.matrix.copy(Be.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Le===!0&&I.cameras.push(Be)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const He=h.getDepthInformation(me[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let He=0;He<me.length;He++){const Qe=me[He].camera;if(Qe){let rt=p[Qe];rt||(rt=new qu,p[Qe]=rt);const Be=h.getCameraImage(Qe);rt.sourceTexture=Be}}}}for(let me=0;me<T.length;me++){const Le=A[me],_e=T[me];Le!==null&&_e!==void 0&&_e.update(Le,Q,c||a)}Me&&Me(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Je=new Zu;Je.setAnimationLoop(ke),this.setAnimationLoop=function(Z){Me=Z},this.dispose=function(){}}}const vi=new Cn,P_=new st;function D_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),E=M.envMap,S=M.envMapRotation;E&&(m.envMap.value=E,vi.copy(S),vi.x*=-1,vi.y*=-1,vi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(vi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I_(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const S=E.program;n.uniformBlockBinding(M,S)}function c(M,E){let S=s[M.id];S===void 0&&(g(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",m));const T=E.program;n.updateUBOMapping(M,T);const A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function u(M){const E=h();M.__bindingPointIndex=E;const S=i.createBuffer(),T=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const E=s[M.id],S=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,w=S.length;A<w;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,y=C.length;x<y;x++){const R=C[x];if(d(R,A,x,T)===!0){const I=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let k=0;k<N.length;k++){const V=N[k],U=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,I+z,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,E,S,T){const A=M.value,w=E+"_"+S;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{const C=T[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return T[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(M){const E=M.uniforms;let S=0;const T=16;for(let w=0,C=E.length;w<C;w++){const x=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,R=x.length;y<R;y++){const I=x[y],N=Array.isArray(I.value)?I.value:[I.value];for(let z=0,k=N.length;z<k;z++){const V=N[z],U=_(V),q=S%T,ee=q%U.boundary,H=q+ee;S+=ee,H!==0&&T-H<U.storage&&(S+=T-H),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=U.storage}}}const A=S%T;return A>0&&(S+=T-A),M.__size=S,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const L_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function U_(){return Dn===null&&(Dn=new md(L_,16,16,cs,Zn),Dn.name="DFG_LUT",Dn.minFilter=Ct,Dn.magFilter=Ct,Dn.wrapS=Nt,Dn.wrapT=Nt,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class N_{constructor(e={}){const{canvas:t=Pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=$t}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=d,m=new Set([gl,ml,pl]),p=new Set([$t,Bn,ks,Vs,hl,fl]),M=new Uint32Array(4),E=new Int32Array(4);let S=null,T=null;const A=[],w=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=mn;let R=0,I=0,N=null,z=-1,k=null;const V=new bt,U=new bt;let q=null;const ee=new Ze(0);let H=0,Y=t.width,he=t.height,Me=1,ke=null,Je=null;const Z=new bt(0,0,Y,he),Q=new bt(0,0,Y,he);let me=!1;const Le=new yl;let _e=!1,je=!1;const St=new st,He=new D,Qe=new bt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Tt(){return N===null?Me:1}let L=n;function Ae(b,B){return t.getContext(b,B)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${la}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",ot,!1),L===null){const B="webgl2";if(L=Ae(B,b),L===null)throw Ae(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Oe("WebGLRenderer: "+b.message),b}let at,gt,Ee,P,v,O,$,J,j,Te,re,Se,Ue,ne,oe,ye,be,ae,We,F,de,ie,ge,te;function K(){at=new U0(L),at.init(),ie=new T_(L,at),gt=new T0(L,at,e,ie),Ee=new E_(L,at),gt.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),P=new O0(L),v=new l_,O=new b_(L,at,Ee,v,gt,ie,P),$=new A0(x),J=new L0(x),j=new Vd(L),ge=new E0(L,j),Te=new N0(L,j,P,ge),re=new z0(L,Te,j,P),We=new B0(L,gt,O),ye=new w0(v),Se=new o_(x,$,J,at,gt,ge,ye),Ue=new D_(x,v),ne=new u_,oe=new g_(at),ae=new S0(x,$,J,Ee,re,g,l),be=new y_(x,re,gt),te=new I_(L,P,gt,Ee),F=new b0(L,at,P),de=new F0(L,at,P),P.programs=Se.programs,x.capabilities=gt,x.extensions=at,x.properties=v,x.renderLists=ne,x.shadowMap=be,x.state=Ee,x.info=P}K(),_!==$t&&(C=new V0(_,t.width,t.height,s,r));const se=new C_(x,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=at.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=at.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(b){b!==void 0&&(Me=b,this.setSize(Y,he,!1))},this.getSize=function(b){return b.set(Y,he)},this.setSize=function(b,B,X=!0){if(se.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,he=B,t.width=Math.floor(b*Me),t.height=Math.floor(B*Me),X===!0&&(t.style.width=b+"px",t.style.height=B+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(Y*Me,he*Me).floor()},this.setDrawingBufferSize=function(b,B,X){Y=b,he=B,Me=X,t.width=Math.floor(b*X),t.height=Math.floor(B*X),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(_===$t){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,B,X,W){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,B,X,W),Ee.viewport(V.copy(Z).multiplyScalar(Me).round())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,B,X,W){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,B,X,W),Ee.scissor(U.copy(Q).multiplyScalar(Me).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(b){Ee.setScissorTest(me=b)},this.setOpaqueSort=function(b){ke=b},this.setTransparentSort=function(b){Je=b},this.getClearColor=function(b){return b.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,X=!0){let W=0;if(b){let G=!1;if(N!==null){const le=N.texture.format;G=m.has(le)}if(G){const le=N.texture.type,xe=p.has(le),fe=ae.getClearColor(),ve=ae.getClearAlpha(),we=fe.r,De=fe.g,Re=fe.b;xe?(M[0]=we,M[1]=De,M[2]=Re,M[3]=ve,L.clearBufferuiv(L.COLOR,0,M)):(E[0]=we,E[1]=De,E[2]=Re,E[3]=ve,L.clearBufferiv(L.COLOR,0,E))}else W|=L.COLOR_BUFFER_BIT}B&&(W|=L.DEPTH_BUFFER_BIT),X&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),ae.dispose(),ne.dispose(),oe.dispose(),v.dispose(),$.dispose(),J.dispose(),re.dispose(),ge.dispose(),te.dispose(),Se.dispose(),se.dispose(),se.removeEventListener("sessionstart",Pl),se.removeEventListener("sessionend",Dl),fi.stop()};function Fe(b){b.preventDefault(),$l("WebGLRenderer: Context Lost."),y=!0}function _t(){$l("WebGLRenderer: Context Restored."),y=!1;const b=P.autoReset,B=be.enabled,X=be.autoUpdate,W=be.needsUpdate,G=be.type;K(),P.autoReset=b,be.enabled=B,be.autoUpdate=X,be.needsUpdate=W,be.type=G}function ot(b){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pn(b){const B=b.target;B.removeEventListener("dispose",Pn),zn(B)}function zn(b){yh(b),v.remove(b)}function yh(b){const B=v.get(b).programs;B!==void 0&&(B.forEach(function(X){Se.releaseProgram(X)}),b.isShaderMaterial&&Se.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,X,W,G,le){B===null&&(B=rt);const xe=G.isMesh&&G.matrixWorld.determinant()<0,fe=Eh(b,B,X,W,G);Ee.setMaterial(W,xe);let ve=X.index,we=1;if(W.wireframe===!0){if(ve=Te.getWireframeAttribute(X),ve===void 0)return;we=2}const De=X.drawRange,Re=X.attributes.position;let Xe=De.start*we,ut=(De.start+De.count)*we;le!==null&&(Xe=Math.max(Xe,le.start*we),ut=Math.min(ut,(le.start+le.count)*we)),ve!==null?(Xe=Math.max(Xe,0),ut=Math.min(ut,ve.count)):Re!=null&&(Xe=Math.max(Xe,0),ut=Math.min(ut,Re.count));const wt=ut-Xe;if(wt<0||wt===1/0)return;ge.setup(G,W,fe,X,ve);let At,ft=F;if(ve!==null&&(At=j.get(ve),ft=de,ft.setIndex(At)),G.isMesh)W.wireframe===!0?(Ee.setLineWidth(W.wireframeLinewidth*Tt()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(G.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),Ee.setLineWidth(Ce*Tt()),G.isLineSegments?ft.setMode(L.LINES):G.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else G.isPoints?ft.setMode(L.POINTS):G.isSprite&&ft.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Hs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ft.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ce=G._multiDrawStarts,lt=G._multiDrawCounts,tt=G._multiDrawCount,un=ve?j.get(ve).bytesPerElement:1,Li=v.get(W).currentProgram.getUniforms();for(let hn=0;hn<tt;hn++)Li.setValue(L,"_gl_DrawID",hn),ft.render(Ce[hn]/un,lt[hn])}else if(G.isInstancedMesh)ft.renderInstances(Xe,wt,G.count);else if(X.isInstancedBufferGeometry){const Ce=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,lt=Math.min(X.instanceCount,Ce);ft.renderInstances(Xe,wt,lt)}else ft.render(Xe,wt)};function Cl(b,B,X){b.transparent===!0&&b.side===yn&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,Js(b,B,X),b.side=ui,b.needsUpdate=!0,Js(b,B,X),b.side=yn):Js(b,B,X)}this.compile=function(b,B,X=null){X===null&&(X=b),T=oe.get(X),T.init(B),w.push(T),X.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const W=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const le=G.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const fe=le[xe];Cl(fe,X,G),W.add(fe)}else Cl(le,X,G),W.add(le)}),T=w.pop(),W},this.compileAsync=function(b,B,X=null){const W=this.compile(b,B,X);return new Promise(G=>{function le(){if(W.forEach(function(xe){v.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){G(b);return}setTimeout(le,10)}at.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ma=null;function Sh(b){ma&&ma(b)}function Pl(){fi.stop()}function Dl(){fi.start()}const fi=new Zu;fi.setAnimationLoop(Sh),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(b){ma=b,se.setAnimationLoop(b),b===null?fi.stop():fi.start()},se.addEventListener("sessionstart",Pl),se.addEventListener("sessionend",Dl),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const X=se.enabled===!0&&se.isPresenting===!0,W=C!==null&&(N===null||X)&&C.begin(x,N);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(B),B=se.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,B,N),T=oe.get(b,w.length),T.init(B),w.push(T),St.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Le.setFromProjectionMatrix(St,Fn,B.reversedDepth),je=this.localClippingEnabled,_e=ye.init(this.clippingPlanes,je),S=ne.get(b,A.length),S.init(),A.push(S),se.enabled===!0&&se.isPresenting===!0){const xe=x.xr.getDepthSensingMesh();xe!==null&&ga(xe,B,-1/0,x.sortObjects)}ga(b,B,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(ke,Je),Be=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Be&&ae.addToRenderList(S,b),this.info.render.frame++,_e===!0&&ye.beginShadows();const G=T.state.shadowsArray;if(be.render(G,b,B),_e===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&C.hasRenderPass())===!1){const xe=S.opaque,fe=S.transmissive;if(T.setupLights(),B.isArrayCamera){const ve=B.cameras;if(fe.length>0)for(let we=0,De=ve.length;we<De;we++){const Re=ve[we];Ll(xe,fe,b,Re)}Be&&ae.render(b);for(let we=0,De=ve.length;we<De;we++){const Re=ve[we];Il(S,b,Re,Re.viewport)}}else fe.length>0&&Ll(xe,fe,b,B),Be&&ae.render(b),Il(S,b,B)}N!==null&&I===0&&(O.updateMultisampleRenderTarget(N),O.updateRenderTargetMipmap(N)),W&&C.end(x),b.isScene===!0&&b.onAfterRender(x,b,B),ge.resetDefaultState(),z=-1,k=null,w.pop(),w.length>0?(T=w[w.length-1],_e===!0&&ye.setGlobalState(x.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function ga(b,B,X,W){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Le.intersectsSprite(b)){W&&Qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(St);const xe=re.update(b),fe=b.material;fe.visible&&S.push(b,xe,fe,X,Qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Le.intersectsObject(b))){const xe=re.update(b),fe=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qe.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Qe.copy(xe.boundingSphere.center)),Qe.applyMatrix4(b.matrixWorld).applyMatrix4(St)),Array.isArray(fe)){const ve=xe.groups;for(let we=0,De=ve.length;we<De;we++){const Re=ve[we],Xe=fe[Re.materialIndex];Xe&&Xe.visible&&S.push(b,xe,Xe,X,Qe.z,Re)}}else fe.visible&&S.push(b,xe,fe,X,Qe.z,null)}}const le=b.children;for(let xe=0,fe=le.length;xe<fe;xe++)ga(le[xe],B,X,W)}function Il(b,B,X,W){const{opaque:G,transmissive:le,transparent:xe}=b;T.setupLightsView(X),_e===!0&&ye.setGlobalState(x.clippingPlanes,X),W&&Ee.viewport(V.copy(W)),G.length>0&&Ks(G,B,X),le.length>0&&Ks(le,B,X),xe.length>0&&Ks(xe,B,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ll(b,B,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const Xe=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new An(1,1,{generateMipmaps:!0,type:Xe?Zn:$t,minFilter:li,samples:gt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const le=T.state.transmissionRenderTarget[W.id],xe=W.viewport||V;le.setSize(xe.z*x.transmissionResolutionScale,xe.w*x.transmissionResolutionScale);const fe=x.getRenderTarget(),ve=x.getActiveCubeFace(),we=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(ee),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Be&&ae.render(X);const De=x.toneMapping;x.toneMapping=On;const Re=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),_e===!0&&ye.setGlobalState(x.clippingPlanes,W),Ks(b,X,W),O.updateMultisampleRenderTarget(le),O.updateRenderTargetMipmap(le),at.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let ut=0,wt=B.length;ut<wt;ut++){const At=B[ut],{object:ft,geometry:Ce,material:lt,group:tt}=At;if(lt.side===yn&&ft.layers.test(W.layers)){const un=lt.side;lt.side=cn,lt.needsUpdate=!0,Ul(ft,X,W,Ce,lt,tt),lt.side=un,lt.needsUpdate=!0,Xe=!0}}Xe===!0&&(O.updateMultisampleRenderTarget(le),O.updateRenderTargetMipmap(le))}x.setRenderTarget(fe,ve,we),x.setClearColor(ee,H),Re!==void 0&&(W.viewport=Re),x.toneMapping=De}function Ks(b,B,X){const W=B.isScene===!0?B.overrideMaterial:null;for(let G=0,le=b.length;G<le;G++){const xe=b[G],{object:fe,geometry:ve,group:we}=xe;let De=xe.material;De.allowOverride===!0&&W!==null&&(De=W),fe.layers.test(X.layers)&&Ul(fe,B,X,ve,De,we)}}function Ul(b,B,X,W,G,le){b.onBeforeRender(x,B,X,W,G,le),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(x,B,X,W,b,le),G.transparent===!0&&G.side===yn&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,x.renderBufferDirect(X,B,W,G,b,le),G.side=ui,G.needsUpdate=!0,x.renderBufferDirect(X,B,W,G,b,le),G.side=yn):x.renderBufferDirect(X,B,W,G,b,le),b.onAfterRender(x,B,X,W,G,le)}function Js(b,B,X){B.isScene!==!0&&(B=rt);const W=v.get(b),G=T.state.lights,le=T.state.shadowsArray,xe=G.state.version,fe=Se.getParameters(b,G.state,le,B,X),ve=Se.getProgramCacheKey(fe);let we=W.programs;W.environment=b.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(b.isMeshStandardMaterial?J:$).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,we===void 0&&(b.addEventListener("dispose",Pn),we=new Map,W.programs=we);let De=we.get(ve);if(De!==void 0){if(W.currentProgram===De&&W.lightsStateVersion===xe)return Fl(b,fe),De}else fe.uniforms=Se.getUniforms(b),b.onBeforeCompile(fe,x),De=Se.acquireProgram(fe,ve),we.set(ve,De),W.uniforms=fe.uniforms;const Re=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=ye.uniform),Fl(b,fe),W.needsLights=Th(b),W.lightsStateVersion=xe,W.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMap.value=G.state.directionalShadowMap,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotShadowMap.value=G.state.spotShadowMap,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMap.value=G.state.pointShadowMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=De,W.uniformsList=null,De}function Nl(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Nr.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Fl(b,B){const X=v.get(b);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Eh(b,B,X,W,G){B.isScene!==!0&&(B=rt),O.resetTextureUnits();const le=B.fog,xe=W.isMeshStandardMaterial?B.environment:null,fe=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:us,ve=(W.isMeshStandardMaterial?J:$).get(W.envMap||xe),we=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,De=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!X.morphAttributes.position,Xe=!!X.morphAttributes.normal,ut=!!X.morphAttributes.color;let wt=On;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(wt=x.toneMapping);const At=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=At!==void 0?At.length:0,Ce=v.get(W),lt=T.state.lights;if(_e===!0&&(je===!0||b!==k)){const Kt=b===k&&W.id===z;ye.setState(W,b,Kt)}let tt=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==lt.state.version||Ce.outputColorSpace!==fe||G.isBatchedMesh&&Ce.batching===!1||!G.isBatchedMesh&&Ce.batching===!0||G.isBatchedMesh&&Ce.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ce.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||G.isInstancedMesh&&Ce.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ce.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ce.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ce.instancingMorph===!1&&G.morphTexture!==null||Ce.envMap!==ve||W.fog===!0&&Ce.fog!==le||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ye.numPlanes||Ce.numIntersection!==ye.numIntersection)||Ce.vertexAlphas!==we||Ce.vertexTangents!==De||Ce.morphTargets!==Re||Ce.morphNormals!==Xe||Ce.morphColors!==ut||Ce.toneMapping!==wt||Ce.morphTargetsCount!==ft)&&(tt=!0):(tt=!0,Ce.__version=W.version);let un=Ce.currentProgram;tt===!0&&(un=Js(W,B,G));let Li=!1,hn=!1,_s=!1;const xt=un.getUniforms(),nn=Ce.uniforms;if(Ee.useProgram(un.program)&&(Li=!0,hn=!0,_s=!0),W.id!==z&&(z=W.id,hn=!0),Li||k!==b){Ee.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xt.setValue(L,"projectionMatrix",b.projectionMatrix),xt.setValue(L,"viewMatrix",b.matrixWorldInverse);const sn=xt.map.cameraPosition;sn!==void 0&&sn.setValue(L,He.setFromMatrixPosition(b.matrixWorld)),gt.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),k!==b&&(k=b,hn=!0,_s=!0)}if(Ce.needsLights&&(lt.state.directionalShadowMap.length>0&&xt.setValue(L,"directionalShadowMap",lt.state.directionalShadowMap,O),lt.state.spotShadowMap.length>0&&xt.setValue(L,"spotShadowMap",lt.state.spotShadowMap,O),lt.state.pointShadowMap.length>0&&xt.setValue(L,"pointShadowMap",lt.state.pointShadowMap,O)),G.isSkinnedMesh){xt.setOptional(L,G,"bindMatrix"),xt.setOptional(L,G,"bindMatrixInverse");const Kt=G.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),xt.setValue(L,"boneTexture",Kt.boneTexture,O))}G.isBatchedMesh&&(xt.setOptional(L,G,"batchingTexture"),xt.setValue(L,"batchingTexture",G._matricesTexture,O),xt.setOptional(L,G,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",G._indirectTexture,O),xt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",G._colorsTexture,O));const _n=X.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&We.update(G,X,un),(hn||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,xt.setValue(L,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(nn.envMap.value=ve,nn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(nn.envMapIntensity.value=B.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=U_()),hn&&(xt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&bh(nn,_s),le&&W.fog===!0&&Ue.refreshFogUniforms(nn,le),Ue.refreshMaterialUniforms(nn,W,Me,he,T.state.transmissionRenderTarget[b.id]),Nr.upload(L,Nl(Ce),nn,O)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Nr.upload(L,Nl(Ce),nn,O),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xt.setValue(L,"center",G.center),xt.setValue(L,"modelViewMatrix",G.modelViewMatrix),xt.setValue(L,"normalMatrix",G.normalMatrix),xt.setValue(L,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Kt=W.uniformsGroups;for(let sn=0,_a=Kt.length;sn<_a;sn++){const di=Kt[sn];te.update(di,un),te.bind(di,un)}}return un}function bh(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Th(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,B,X){const W=v.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),v.get(b.texture).__webglTexture=B,v.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const X=v.get(b);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const wh=L.createFramebuffer();this.setRenderTarget=function(b,B=0,X=0){N=b,R=B,I=X;let W=null,G=!1,le=!1;if(b){const fe=v.get(b);if(fe.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),V.copy(b.viewport),U.copy(b.scissor),q=b.scissorTest,Ee.viewport(V),Ee.scissor(U),Ee.setScissorTest(q),z=-1;return}else if(fe.__webglFramebuffer===void 0)O.setupRenderTarget(b);else if(fe.__hasExternalTextures)O.rebindTextures(b,v.get(b.texture).__webglTexture,v.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const De=b.depthTexture;if(fe.__boundDepthTexture!==De){if(De!==null&&v.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(b)}}const ve=b.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(le=!0);const we=v.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(we[B])?W=we[B][X]:W=we[B],G=!0):b.samples>0&&O.useMultisampledRTT(b)===!1?W=v.get(b).__webglMultisampledFramebuffer:Array.isArray(we)?W=we[X]:W=we,V.copy(b.viewport),U.copy(b.scissor),q=b.scissorTest}else V.copy(Z).multiplyScalar(Me).floor(),U.copy(Q).multiplyScalar(Me).floor(),q=me;if(X!==0&&(W=wh),Ee.bindFramebuffer(L.FRAMEBUFFER,W)&&Ee.drawBuffers(b,W),Ee.viewport(V),Ee.scissor(U),Ee.setScissorTest(q),G){const fe=v.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe.__webglTexture,X)}else if(le){const fe=B;for(let ve=0;ve<b.textures.length;ve++){const we=v.get(b.textures[ve]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ve,we.__webglTexture,X,fe)}}else if(b!==null&&X!==0){const fe=v.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,X)}z=-1},this.readRenderTargetPixels=function(b,B,X,W,G,le,xe,fe=0){if(!(b&&b.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve){Ee.bindFramebuffer(L.FRAMEBUFFER,ve);try{const we=b.textures[fe],De=we.format,Re=we.type;if(!gt.textureFormatReadable(De)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Re)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-W&&X>=0&&X<=b.height-G&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),L.readPixels(B,X,W,G,ie.convert(De),ie.convert(Re),le))}finally{const we=N!==null?v.get(N).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(b,B,X,W,G,le,xe,fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve)if(B>=0&&B<=b.width-W&&X>=0&&X<=b.height-G){Ee.bindFramebuffer(L.FRAMEBUFFER,ve);const we=b.textures[fe],De=we.format,Re=we.type;if(!gt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xe),L.bufferData(L.PIXEL_PACK_BUFFER,le.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),L.readPixels(B,X,W,G,ie.convert(De),ie.convert(Re),0);const ut=N!==null?v.get(N).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,ut);const wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Df(L,wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,le),L.deleteBuffer(Xe),L.deleteSync(wt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,X=0){const W=Math.pow(2,-X),G=Math.floor(b.image.width*W),le=Math.floor(b.image.height*W),xe=B!==null?B.x:0,fe=B!==null?B.y:0;O.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,xe,fe,G,le),Ee.unbindTexture()};const Ah=L.createFramebuffer(),Rh=L.createFramebuffer();this.copyTextureToTexture=function(b,B,X=null,W=null,G=0,le=null){le===null&&(G!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=G,G=0):le=0);let xe,fe,ve,we,De,Re,Xe,ut,wt;const At=b.isCompressedTexture?b.mipmaps[le]:b.image;if(X!==null)xe=X.max.x-X.min.x,fe=X.max.y-X.min.y,ve=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,De=X.min.y,Re=X.isBox3?X.min.z:0;else{const _n=Math.pow(2,-G);xe=Math.floor(At.width*_n),fe=Math.floor(At.height*_n),b.isDataArrayTexture?ve=At.depth:b.isData3DTexture?ve=Math.floor(At.depth*_n):ve=1,we=0,De=0,Re=0}W!==null?(Xe=W.x,ut=W.y,wt=W.z):(Xe=0,ut=0,wt=0);const ft=ie.convert(B.format),Ce=ie.convert(B.type);let lt;B.isData3DTexture?(O.setTexture3D(B,0),lt=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(O.setTexture2DArray(B,0),lt=L.TEXTURE_2D_ARRAY):(O.setTexture2D(B,0),lt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const tt=L.getParameter(L.UNPACK_ROW_LENGTH),un=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Li=L.getParameter(L.UNPACK_SKIP_PIXELS),hn=L.getParameter(L.UNPACK_SKIP_ROWS),_s=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re);const xt=b.isDataArrayTexture||b.isData3DTexture,nn=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const _n=v.get(b),Kt=v.get(B),sn=v.get(_n.__renderTarget),_a=v.get(Kt.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,sn.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,_a.__webglFramebuffer);for(let di=0;di<ve;di++)xt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(b).__webglTexture,G,Re+di),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,v.get(B).__webglTexture,le,wt+di)),L.blitFramebuffer(we,De,xe,fe,Xe,ut,xe,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||v.has(b)){const _n=v.get(b),Kt=v.get(B);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Ah),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rh);for(let sn=0;sn<ve;sn++)xt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_n.__webglTexture,G,Re+sn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_n.__webglTexture,G),nn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Kt.__webglTexture,le,wt+sn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Kt.__webglTexture,le),G!==0?L.blitFramebuffer(we,De,xe,fe,Xe,ut,xe,fe,L.COLOR_BUFFER_BIT,L.NEAREST):nn?L.copyTexSubImage3D(lt,le,Xe,ut,wt+sn,we,De,xe,fe):L.copyTexSubImage2D(lt,le,Xe,ut,we,De,xe,fe);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else nn?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(lt,le,Xe,ut,wt,xe,fe,ve,ft,Ce,At.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(lt,le,Xe,ut,wt,xe,fe,ve,ft,At.data):L.texSubImage3D(lt,le,Xe,ut,wt,xe,fe,ve,ft,Ce,At):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,le,Xe,ut,xe,fe,ft,Ce,At.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,le,Xe,ut,At.width,At.height,ft,At.data):L.texSubImage2D(L.TEXTURE_2D,le,Xe,ut,xe,fe,ft,Ce,At);L.pixelStorei(L.UNPACK_ROW_LENGTH,tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,un),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Li),L.pixelStorei(L.UNPACK_SKIP_ROWS,hn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_s),le===0&&B.generateMipmaps&&L.generateMipmap(lt),Ee.unbindTexture()},this.initRenderTarget=function(b){v.get(b).__webglFramebuffer===void 0&&O.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?O.setTextureCube(b,0):b.isData3DTexture?O.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?O.setTexture2DArray(b,0):O.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){R=0,I=0,N=null,Ee.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Xc={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class ea{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Y_(e)}),this.register(function(e){return new j_(e)}),this.register(function(e){return new K_(e)}),this.register(function(e){return new J_(e)}),this.register(function(e){return new Q_(e)}),this.register(function(e){return new ex(e)}),this.register(function(e){return new q_(e)}),this.register(function(e){return new $_(e)}),this.register(function(e){return new Z_(e)}),this.register(function(e){return new tx(e)}),this.register(function(e){return new nx(e)}),this.register(function(e){return new ix(e)}),this.register(function(e){return new sx(e)}),this.register(function(e){return new rx(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){const r=new X_,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}}const qe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Ka="KHR_mesh_quantization",gn={};gn[It]=qe.NEAREST;gn[Cu]=qe.NEAREST_MIPMAP_NEAREST;gn[Cs]=qe.NEAREST_MIPMAP_LINEAR;gn[Ct]=qe.LINEAR;gn[Cr]=qe.LINEAR_MIPMAP_NEAREST;gn[li]=qe.LINEAR_MIPMAP_LINEAR;gn[Nt]=qe.CLAMP_TO_EDGE;gn[jr]=qe.REPEAT;gn[qr]=qe.MIRRORED_REPEAT;const Yc={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},F_=new Ze,jc=12,O_=1179937895,B_=2,qc=8,z_=1313821514,k_=5130562;function Ds(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function V_(i){return new TextEncoder().encode(i).buffer}function G_(i){return Ds(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function H_(i,e,t){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let a;i.itemSize>4?a=i.array[s*i.itemSize+r]:(r===0?a=i.getX(s):r===1?a=i.getY(s):r===2?a=i.getZ(s):r===3&&(a=i.getW(s)),i.normalized===!0&&(a=Kr.normalize(a,i.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function th(i){return Math.ceil(i/4)*4}function Ja(i,e=0){const t=th(i.byteLength);if(t!==i.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function $c(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function W_(i,e){if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}else return new Promise(t=>i.toBlob(t,e))}class X_{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+la}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const s=this,r=s.buffers,a=s.json;n=s.options;const o=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),u=Object.keys(o),h=Object.keys(l);if(u.length>0&&(a.extensionsUsed=u),h.length>0&&(a.extensionsRequired=h),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const f=new FileReader;f.readAsArrayBuffer(c),f.onloadend=function(){const d=Ja(f.result),g=new DataView(new ArrayBuffer(qc));g.setUint32(0,d.byteLength,!0),g.setUint32(4,k_,!0);const _=Ja(V_(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(qc));m.setUint32(0,_.byteLength,!0),m.setUint32(4,z_,!0);const p=new ArrayBuffer(jc),M=new DataView(p);M.setUint32(0,O_,!0),M.setUint32(4,B_,!0);const E=jc+m.byteLength+_.byteLength+g.byteLength+d.byteLength;M.setUint32(8,E,!0);const S=new Blob([p,m,_,g,d],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(S),T.onloadend=function(){t(T.result)}}}else if(a.buffers&&a.buffers.length>0){const f=new FileReader;f.readAsDataURL(c),f.onloadend=function(){const d=f.result;a.buffers[0].uri=d,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],s[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new D;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),s=new D;for(let r=0,a=n.count;r<a;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(d){return d.colorSpace===mn?function(_){return _<.04045?_*.0773993808:Math.pow(_*.9478672986+.0521327014,2.4)}:function(_){return _}}e instanceof Ga&&(e=await this.decompressTextureAsync(e)),t instanceof Ga&&(t=await this.decompressTextureAsync(t));const s=e?e.image:null,r=t?t.image:null,a=Math.max(s?s.width:0,r?r.width:0),o=Math.max(s?s.height:0,r?r.height:0),l=$c();l.width=a,l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);const u=c.getImageData(0,0,a,o);if(s){c.drawImage(s,0,0,a,o);const d=n(e),g=c.getImageData(0,0,a,o).data;for(let _=2;_<g.length;_+=4)u.data[_]=d(g[_]/256)*256}if(r){c.drawImage(r,0,0,a,o);const d=n(t),g=c.getImageData(0,0,a,o).data;for(let _=1;_<g.length;_+=4)u.data[_]=d(g[_]/256)*256}c.putImageData(u,0,0);const f=(e||t).clone();return f.source=new ua(l),f.colorSpace=Yn,f.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),f}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){const a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case qe.BYTE:case qe.UNSIGNED_BYTE:o=1;break;case qe.SHORT:case qe.UNSIGNED_SHORT:o=2;break;default:o=4}let l=e.itemSize*o;r===qe.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=th(s*l),u=new DataView(new ArrayBuffer(c));let h=0;for(let g=n;g<n+s;g++){for(let _=0;_<e.itemSize;_++){let m;e.itemSize>4?m=e.array[g*e.itemSize+_]:(_===0?m=e.getX(g):_===1?m=e.getY(g):_===2?m=e.getZ(g):_===3&&(m=e.getW(g)),e.normalized===!0&&(m=Kr.normalize(m,e.array))),t===qe.FLOAT?u.setFloat32(h,m,!0):t===qe.INT?u.setInt32(h,m,!0):t===qe.UNSIGNED_INT?u.setUint32(h,m,!0):t===qe.SHORT?u.setInt16(h,m,!0):t===qe.UNSIGNED_SHORT?u.setUint16(h,m,!0):t===qe.BYTE?u.setInt8(h,m):t===qe.UNSIGNED_BYTE&&u.setUint8(h,m),h+=o}h%l!==0&&(h+=l-h%l)}const f={buffer:this.processBuffer(u.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(f.target=r),r===qe.ARRAY_BUFFER&&(f.byteStride=l),this.byteOffset+=c,a.bufferViews.push(f),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const a=Ja(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,s(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,s){const r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=qe.FLOAT;else if(e.array.constructor===Int32Array)o=qe.INT;else if(e.array.constructor===Uint32Array)o=qe.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=qe.SHORT;else if(e.array.constructor===Uint16Array)o=qe.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=qe.BYTE;else if(e.array.constructor===Uint8Array)o=qe.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;const l=H_(e,n,s);let c;t!==void 0&&(c=e===t.index?qe.ELEMENT_ARRAY_BUFFER:qe.ARRAY_BUFFER);const u=this.processBufferView(e,o,n,s,c),h={bufferView:u.id,byteOffset:u.byteOffset,componentType:o,count:s,max:l.max,min:l.min,type:a[e.itemSize]};return e.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(e,t,n,s="image/png"){if(e!==null){const r=this,a=r.cache,o=r.json,l=r.options,c=r.pending;a.images.has(e)||a.images.set(e,{});const u=a.images.get(e),h=s+":flipY/"+n.toString();if(u[h]!==void 0)return u[h];o.images||(o.images=[]);const f={mimeType:s},d=$c();d.width=Math.min(e.width,l.maxTextureSize),d.height=Math.min(e.height,l.maxTextureSize);const g=d.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,d.height),g.scale(1,-1)),e.data!==void 0){t!==ln&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const m=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=e.data[p+0],m[p+1]=e.data[p+1],m[p+2]=e.data[p+2],m[p+3]=e.data[p+3];g.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(W_(d,s).then(m=>r.processBufferViewImage(m)).then(m=>{f.bufferView=m})):f.uri=Bu.getDataURL(d,s);const _=o.images.push(f)-1;return u[h]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:gn[e.magFilter],minFilter:gn[e.minFilter],wrapS:gn[e.wrapS],wrapT:gn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof Ga&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let a=e.userData.mimeType;a==="image/webp"&&(a="image/png");const o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,a)};e.name&&(o.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,o)});const l=r.textures.push(o)-1;return s.textures.set(e,l),l}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(Ds(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const o=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(o),texCoord:o.channel};this.applyTextureTransform(l,o),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const o={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),s.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),s.emissiveTexture=c}}if(e.normalMap){const o={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),s.normalTexture=o}if(e.aoMap){const o={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),s.occlusionTexture=o}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===yn&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(o){o.writeMaterialAsync&&await o.writeMaterialAsync(e,s)});const a=n.materials.push(s)-1;return t.materials.set(e,a),a}async processMeshAsync(e){const t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let S=0,T=e.material.length;S<T;S++)s.push(e.material[S].uuid);else s.push(e.material.uuid);const r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);const a=e.geometry;let o;e.isLineSegments?o=qe.LINES:e.isLineLoop?o=qe.LINE_LOOP:e.isLine?o=qe.LINE_STRIP:e.isPoints?o=qe.POINTS:o=e.material.wireframe?qe.LINES:qe.TRIANGLES;const l={},c={},u=[],h=[],f={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=a.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let g=null;for(let S in a.attributes){if(S.slice(0,5)==="morph")continue;const T=a.attributes[S];if(S=f[S]||S.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(S)||(S="_"+S),t.attributes.has(this.getUID(T))){c[S]=t.attributes.get(this.getUID(T));continue}g=null;const w=T.array;S==="JOINTS_0"&&!(w instanceof Uint16Array)&&!(w instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new Ft(new Uint16Array(w),T.itemSize,T.normalized)):(w instanceof Uint32Array||w instanceof Int32Array)&&!S.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${S}" converted to type FLOAT.`),g=ea.Utils.toFloat32BufferAttribute(T));const C=this.processAccessor(g||T,a);C!==null&&(S.startsWith("_")||this.detectMeshQuantization(S,T),c[S]=C,t.attributes.set(this.getUID(T),C))}if(d!==void 0&&a.setAttribute("normal",d),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const S=[],T=[],A={};if(e.morphTargetDictionary!==void 0)for(const w in e.morphTargetDictionary)A[e.morphTargetDictionary[w]]=w;for(let w=0;w<e.morphTargetInfluences.length;++w){const C={};let x=!1;for(const y in a.morphAttributes){if(y!=="position"&&y!=="normal"){x||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),x=!0);continue}const R=a.morphAttributes[y][w],I=y.toUpperCase(),N=a.attributes[y];if(t.attributes.has(this.getUID(R,!0))){C[I]=t.attributes.get(this.getUID(R,!0));continue}const z=R.clone();if(!a.morphTargetsRelative)for(let k=0,V=R.count;k<V;k++)for(let U=0;U<R.itemSize;U++)U===0&&z.setX(k,R.getX(k)-N.getX(k)),U===1&&z.setY(k,R.getY(k)-N.getY(k)),U===2&&z.setZ(k,R.getZ(k)-N.getZ(k)),U===3&&z.setW(k,R.getW(k)-N.getW(k));C[I]=this.processAccessor(z,a),t.attributes.set(this.getUID(N,!0),C[I])}h.push(C),S.push(e.morphTargetInfluences[w]),e.morphTargetDictionary!==void 0&&T.push(A[w])}l.weights=S,T.length>0&&(l.extras={},l.extras.targetNames=T)}const _=Array.isArray(e.material);if(_&&a.groups.length===0)return null;let m=!1;if(_&&a.index===null){const S=[];for(let T=0,A=a.attributes.position.count;T<A;T++)S[T]=T;a.setIndex(S),m=!0}const p=_?e.material:[e.material],M=_?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let S=0,T=M.length;S<T;S++){const A={mode:o,attributes:c};if(this.serializeUserData(a,A),h.length>0&&(A.targets=h),a.index!==null){let C=this.getUID(a.index);(M[S].start!==void 0||M[S].count!==void 0)&&(C+=":"+M[S].start+":"+M[S].count),t.attributes.has(C)?A.indices=t.attributes.get(C):(A.indices=this.processAccessor(a.index,a,M[S].start,M[S].count),t.attributes.set(C,A.indices)),A.indices===null&&delete A.indices}const w=await this.processMaterialAsync(p[M[S].materialIndex]);w!==null&&(A.material=w),u.push(A)}m===!0&&a.setIndex(null),l.primitives=u,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(S){S.writeMesh&&S.writeMesh(e,l)});const E=n.meshes.push(l)-1;return t.meshes.set(r,E),E}detectMeshQuantization(e,t){if(this.extensionsUsed[Ka])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const s=e.split("_",1)[0];Xc[s]&&Xc[s].includes(n)&&(this.extensionsUsed[Ka]=!0,this.extensionsRequired[Ka]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:Kr.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=ea.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){const u=r[c],h=it.parseTrackName(u.name);let f=it.findNode(t,h.nodeName);const d=Yc[h.propertyName];if(h.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(h.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',u.name);continue}const g=1;let _=u.values.length/u.times.length;d===Yc.morphTargetInfluences&&(_/=f.morphTargetInfluences.length);let m;u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",_/=3):u.getInterpolation()===Mf?m="STEP":m="LINEAR",o.push({input:this.processAccessor(new Ft(u.times,g)),output:this.processAccessor(new Ft(u.values,_)),interpolation:m}),a.push({sampler:o.length-1,target:{node:s.get(f),path:d}})}const l={name:e.name||"clip_"+n.animations.length,samplers:o,channels:a};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(r.bones.length*16),c=new st;for(let h=0;h<r.bones.length;++h)o.push(n.get(r.bones[h])),c.copy(r.boneInverses[h]),c.multiply(e.bindMatrix).toArray(l,h*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Ft(l,16)),joints:o,skeleton:n.get(a)}),s.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Ds(o,[0,0,0,1])||(r.rotation=o),Ds(l,[0,0,0])||(r.translation=l),Ds(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),G_(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const o=await this.processMeshAsync(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);const a=t.nodes.push(r)-1;if(s.set(e,a),e.children.length>0){const o=[];for(let l=0,c=e.children.length;l<c;l++){const u=e.children[l];if(u.visible||n.onlyVisible===!1){const h=await this.processNodeAsync(u);h!==null&&o.push(h)}}o.length>0&&(r.children=o)}return await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,r)}),a}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);const r=[];for(let a=0,o=e.children.length;a<o;a++){const l=e.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){const t=new tl;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});const n=[];for(let s=0;s<e.length;s++)e[s]instanceof tl?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class Y_{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,s=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);const o=s.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class j_{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class q_{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const a={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){const a={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(a.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class $_{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class Z_{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const a={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const a={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class K_{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const a={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class J_{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const a={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class Q_{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class ex{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(F_)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){const a={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){const a={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class tx{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const a={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){const a={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class nx{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){const a={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class ix{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class sx{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){const a={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class rx{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,s=e,r=new Float32Array(s.count*3),a=new Float32Array(s.count*4),o=new Float32Array(s.count*3),l=new st,c=new D,u=new Dt,h=new D;for(let d=0;d<s.count;d++)s.getMatrixAt(d,l),l.decompose(c,u,h),c.toArray(r,d*3),u.toArray(a,d*4),h.toArray(o,d*3);const f={TRANSLATION:n.processAccessor(new Ft(r,3)),ROTATION:n.processAccessor(new Ft(a,4)),SCALE:n.processAccessor(new Ft(o,3))};s.instanceColor&&(f._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:f},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}ea.Utils={insertKeyframe:function(i,e){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n));let o;if(i.times.length===0){s[0]=e;for(let l=0;l<n;l++)r[l]=0;o=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(a.evaluate(e),0),r.set(i.values,n),o=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(a.evaluate(e),i.values.length),o=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-e)<.001)return l;if(i.times[l]<e&&i.times[l+1]>e){s.set(i.times.slice(0,l+1),0),s[l+1]=e,s.set(i.times.slice(l+1),l+2),r.set(i.values.slice(0,(l+1)*n),0),r.set(a.evaluate(e),(l+1)*n),r.set(i.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return i.times=s,i.values=r,o},mergeMorphTargetTracks:function(i,e){const t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let a=s[r];const o=it.parseTrackName(a.name),l=it.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(yf)}const c=l.morphTargetInfluences.length,u=l.morphTargetDictionary[o.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let h;if(n[l.uuid]===void 0){h=a.clone();const d=new h.ValueBufferType(c*h.times.length);for(let g=0;g<h.times.length;g++)d[g*c+u]=h.values[g];h.name=(o.nodeName||"")+".morphTargetInfluences",h.values=d,n[l.uuid]=h,t.push(h);continue}const f=a.createInterpolant(new a.ValueBufferType(1));h=n[l.uuid];for(let d=0;d<h.times.length;d++)h.values[d*c+u]=f.evaluate(h.times[d]);for(let d=0;d<a.times.length;d++){const g=this.insertKeyframe(h,a.times[d]);h.values[g*c+u]=a.values[d]}}return i.tracks=t,i},toFloat32BufferAttribute:function(i){const e=new Ft(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return e.array.set(i.array),e;for(let t=0,n=i.count;t<n;t++)for(let s=0;s<i.itemSize;s++)e.setComponent(t,s,i.getComponent(t,s));return e}};const nh=10,ih=1<<nh,Gt=3,pn=1<<Gt,Qa=pn-1,Fr=nh-Gt,nt=1<<Fr,pe=pn+2,Ke=9,Ve=1<<Ke,Ne=Math.floor(Ve/pe),Zc=Ne*Ne*Ne,ax=nt*nt*nt*4,Ln=10,ox=(ih>>1)*Ln;class wl{indirectionData=new Uint8Array(ax);atlasData=new Uint8Array(Ve**3);colourData=new Uint8Array(Ve**3*4);freeBricks=[];brickMap=new Map;dirtyAtlasBricks=new Set;dirtyColourBricks=new Set;forceAllAtlasDirty=!1;get numBricks(){return this.brickMap.size}constructor(){for(let e=0;e<Zc;e++)this.freeBricks.push(e)}async load(e){await e.read(this.indirectionData,0,this.indirectionData.length);let t=new Set;this.brickMap.clear();let n=new Uint8Array(pe**3);for(let s=0,r=0;s<this.indirectionData.length;s+=4,++r){let a=this.indirectionData[s],o=this.indirectionData[s+1],l=this.indirectionData[s+2];if(this.indirectionData[s+3]==255){let u=l*(Ne*Ne)+o*Ne+a;this.brickMap.set(r,u),t.add(u),await e.read(n,0,n.length);let h=l*pe<<Ke+Ke|o*pe<<Ke|a*pe,f=1,d=1<<Ke,g=1<<Ke+Ke,_=0;for(let m=0;m<pe;++m,h+=g){let p=h;for(let M=0;M<pe;++M,p+=d){let E=p;for(let S=0;S<pe;++S,E+=f)this.atlasData[E]=n[_++]}}}}this.freeBricks.splice(0,this.freeBricks.length);for(let s=0;s<Zc;++s)t.has(s)||this.freeBricks.push(s);this.forceAllAtlasDirty=!0}async save(e){await e.write(this.indirectionData);let t=new Uint8Array(pe**3);for(let n=0,s=0;n<this.indirectionData.length;n+=4,++s){let r=this.indirectionData[n],a=this.indirectionData[n+1],o=this.indirectionData[n+2];if(this.indirectionData[n+3]==255){let c=o*pe<<Ke+Ke|a*pe<<Ke|r*pe,u=1,h=1<<Ke,f=1<<Ke+Ke,d=0;for(let g=0;g<pe;++g,c+=f){let _=c;for(let m=0;m<pe;++m,_+=h){let p=_;for(let M=0;M<pe;++M,p+=u)t[d++]=this.atlasData[p]}}await e.write(t)}}}getGridIdx(e,t,n){return n*nt*nt+t*nt+e}copy(e){for(let t=0;t<this.indirectionData.length;++t)this.indirectionData[t]=e.indirectionData[t];for(let t=0;t<this.atlasData.length;++t)this.atlasData[t]=e.atlasData[t];this.freeBricks.splice(0,this.freeBricks.length);for(let t=0;t<e.freeBricks.length;++t)this.freeBricks.push(e.freeBricks[t]);this.brickMap.clear();for(let t of e.brickMap)this.brickMap.set(t[0],t[1]);return this}get(e,t,n){const s=e>>Gt,r=t>>Gt,a=n>>Gt,o=this.getGridIdx(s,r,a);let l=this.brickMap.get(o);if(l==null)return this.indirectionData[o*4+3]>=128?255:0;const c=l%Ne,u=Math.floor(l/Ne)%Ne,h=Math.floor(l/(Ne*Ne)),f=(e&Qa)+1,d=(t&Qa)+1,g=(n&Qa)+1,_=(h*pe+g)*Ve*Ve+(u*pe+d)*Ve+(c*pe+f);return this.atlasData[_]}_set_collapse={allPositive:!1,allNegative:!1};set(e,t,n,s){const r=e-1>>Gt,a=e+1>>Gt,o=t-1>>Gt,l=t+1>>Gt,c=n-1>>Gt,u=n+1>>Gt;for(let h=c;h<=u;h++)for(let f=o;f<=l;f++)for(let d=r;d<=a;d++){if(d<0||d>=nt||f<0||f>=nt||h<0||h>=nt)continue;const g=this.getGridIdx(d,f,h),_=e-d*pn+1,m=t-f*pn+1,p=n-h*pn+1;if(!(_<0||_>=pe||m<0||m>=pe||p<0||p>=pe)&&(this.ensureBrickAllocated(d,f,h),this.brickMap.has(g))){const M=this.brickMap.get(g);let E=_==pe-1&&m==pe-1&&p==pe-1;if(this.writeToAtlas(M,_,m,p,s,E,this._set_collapse),this.dirtyAtlasBricks.add(M),E){let S=this._set_collapse.allPositive,T=this._set_collapse.allNegative;(S||T)&&(this.deallocateBrick(g,T),this.dirtyAtlasBricks.delete(M))}}}}paint(e,t,n,s,r,a){s=255-s,r=255-r,a=255-a;const o=e-1>>Gt,l=e+1>>Gt,c=t-1>>Gt,u=t+1>>Gt,h=n-1>>Gt,f=n+1>>Gt;for(let d=h;d<=f;d++)for(let g=c;g<=u;g++)for(let _=o;_<=l;_++){if(_<0||_>=nt||g<0||g>=nt||d<0||d>=nt)continue;const m=this.getGridIdx(_,g,d),p=e-_*pn+1,M=t-g*pn+1,E=n-d*pn+1;if(!(p<0||p>=pe||M<0||M>=pe||E<0||E>=pe)&&this.brickMap.has(m)){let S=this.brickMap.get(m),T=S%Ne,A=Math.floor(S/Ne)%Ne,x=(Math.floor(S/(Ne*Ne))*pe+E)*Ve*Ve+(A*pe+M)*Ve+(T*pe+p)<<2;this.colourData[x]=s,this.colourData[x+1]=r,this.colourData[x+2]=a,this.colourData[x+3]=255,this.dirtyColourBricks.add(S)}}}_march_tmpV3_1=new D;march(e,t,n){n[0]=0;for(let o=0;o<200;++o){let l=this._march_tmpV3_1.copy(t).multiplyScalar(n[0]).add(e),c=this.map(l,t);if(c<5)return!0;if(n[0]+=c,n[0]>1e4)break}return!1}_map_tmpV3_1=new D;_map_tmpV3_2=new D;_map_tmpV3_3=new D;_map_tmpV3_4=new D;_map_tmpV3_5=new D;_map_tmpV3_6=new D;_map_tmpV3_7=new D;_map_tmpV3_8=new D;_map_tmpV4_1=new bt;map(e,t){let n=this._map_tmpV3_1.copy(e).addScalar(ox),s=this._map_tmpV3_2.copy(n).multiplyScalar(1/(nt*pn*Ln)),r=this._map_tmpV4_1;this.readIndirectionTexture01(s,r);let a=this._map_tmpV3_3.copy(s).multiplyScalar(nt);if(a.set(a.x-Math.floor(a.x),a.y-Math.floor(a.y),a.z-Math.floor(a.z)),r.w==0){let h=this._map_tmpV3_4.copy(a).subScalar(.5),f=this._map_tmpV3_5.copy(t);f.x=1/f.x,f.y=1/f.y,f.z=1/f.z;let d=this._map_tmpV3_6.copy(h).multiply(f),g=this._map_tmpV3_7.copy(f).multiplyScalar(.5);g.x=Math.abs(g.x),g.y=Math.abs(g.y),g.z=Math.abs(g.z);let _=this._map_tmpV3_8.copy(d).negate().add(g),m=Math.min(_.x,_.y,_.z);return Math.max(Ln,m*(pn*Ln))}let o=this._map_tmpV3_4.copy(r).multiplyScalar(2550),l=this._map_tmpV3_5.copy(o).addScalar(1).add(this._map_tmpV3_6.copy(a).multiplyScalar(8)),c=this._map_tmpV3_6.copy(l).divideScalar(Ve);return(.5-this.readAtlasTexture01(c))*2*Ln}readIndirectionTexture01(e,t){let n=Math.max(0,Math.min(nt-1,Math.floor(e.x*nt))),s=Math.max(0,Math.min(nt-1,Math.floor(e.y*nt))),a=(Math.max(0,Math.min(nt-1,Math.floor(e.z*nt)))<<Fr+Fr|s<<Fr|n)<<2;t.x=this.indirectionData[a+0]/255,t.y=this.indirectionData[a+1]/255,t.z=this.indirectionData[a+2]/255,t.w=this.indirectionData[a+3]/255}readAtlasTexture01(e){let t=Math.max(0,Math.min(Ve-1,Math.floor(e.x*Ve))),n=Math.max(0,Math.min(Ve-1,Math.floor(e.y*Ve))),s=Math.max(0,Math.min(Ve-1,Math.floor(e.z*Ve)));return this.atlasData[s<<Ke+Ke|n<<Ke|t]/255}ensureBrickAllocated(e,t,n){const s=this.getGridIdx(e,t,n);let r=this.indirectionData[(s<<2)+3];if(!this.brickMap.has(s)){const a=this.freeBricks.pop();if(a===void 0)return;if(r==128){const l=a%Ne,c=Math.floor(a/Ne)%Ne;let h=Math.floor(a/(Ne*Ne))*pe<<Ke+Ke|c*pe<<Ke|l*pe,f=1,d=1<<Ke,g=1<<Ke+Ke;for(let _=0;_<pe;++_,h+=g){let m=h;for(let p=0;p<pe;++p,m+=d){let M=m;for(let E=0;E<pe;++E,M+=f)this.atlasData[M]=255}}}this.brickMap.set(s,a);const o=s*4;this.indirectionData[o]=a%Ne,this.indirectionData[o+1]=Math.floor(a/Ne)%Ne,this.indirectionData[o+2]=Math.floor(a/(Ne*Ne)),this.indirectionData[o+3]=255}}deallocateBrick(e,t){let n=this.brickMap.get(e);if(n!=null){this.brickMap.delete(e),this.freeBricks.push(n);let s=e<<2;this.indirectionData[s+3]=t?128:0;const r=n%Ne,a=Math.floor(n/Ne)%Ne;let l=Math.floor(n/(Ne*Ne))*pe<<Ke+Ke|a*pe<<Ke|r*pe,c=1,u=1<<Ke,h=1<<Ke+Ke;for(let f=0;f<pe;++f,l+=h){let d=l;for(let g=0;g<pe;++g,d+=u){let _=d;for(let m=0;m<pe;++m,_+=c)this.atlasData[_]=0}}}}writeToAtlas(e,t,n,s,r,a,o){const l=e%Ne,c=Math.floor(e/Ne)%Ne,u=Math.floor(e/(Ne*Ne)),h=(u*pe+s)*Ve*Ve+(c*pe+n)*Ve+(l*pe+t);if(this.atlasData[h]=r,a){let f=u*pe<<Ke+Ke|c*pe<<Ke|l*pe,d=1,g=1<<Ke,_=1<<Ke+Ke,m=!0,p=!0;e:for(let M=0;M<pe;++M,f+=_){let E=f;for(let S=0;S<pe;++S,E+=g){let T=E;for(let A=0;A<pe;++A,T+=d){let w=this.atlasData[T];if(w<128&&(p=!1,!m)||w>128&&(m=!1,!p))break e}}}o.allPositive=m,o.allNegative=p}}initTexturesThreeJs(e){let t=e.uniforms;t==null&&(t={},e.uniforms=t);let n=new Ur(this.indirectionData,nt,nt,nt);n.format=ln,n.type=$t,n.minFilter=It,n.magFilter=It,n.wrapS=Nt,n.wrapT=Nt,n.wrapR=Nt,n.unpackAlignment=1,n.needsUpdate=!0;let s=new Ur(this.atlasData,Ve,Ve,Ve);s.format=dl,s.internalFormat="R8",s.type=$t,s.minFilter=Ct,s.magFilter=Ct,s.wrapS=Nt,s.wrapT=Nt,s.wrapR=Nt,s.unpackAlignment=1,s.needsUpdate=!0;let r=new Ur(this.colourData,Ve,Ve,Ve);return r.format=ln,r.internalFormat="RGBA8",r.type=$t,r.minFilter=Ct,r.magFilter=Ct,r.wrapS=Nt,r.wrapT=Nt,r.wrapR=Nt,r.unpackAlignment=1,r.needsUpdate=!0,t.uIndirectionTex={value:n},t.uAtlasTex={value:s},t.uColourTex={value:r},{iTex:n,aTex:s,cTex:r}}tempAtlasDataBuffer=new Uint8Array(pe**3);updateTexturesThreeJs(e,t){t.iTex.needsUpdate=!0;{const n=e.getContext();let s=e.properties.get(t.aTex);if(this.forceAllAtlasDirty){t.aTex.needsUpdate=!0,this.dirtyAtlasBricks.clear(),this.forceAllAtlasDirty=!1;return}if(!s.__webglTexture){t.aTex.needsUpdate=!0,this.dirtyAtlasBricks.clear();return}n.bindTexture(n.TEXTURE_3D,s.__webglTexture),n.pixelStorei(n.UNPACK_ALIGNMENT,1),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.bindBuffer(n.PIXEL_UNPACK_BUFFER,null);for(let r of this.dirtyAtlasBricks){let a=r%Ne,o=Math.floor(r/Ne)%Ne,l=Math.floor(r/(Ne*Ne));const c=a*pe,u=o*pe,h=l*pe;let f=0;for(let d=0;d<pe;d++){let g=(h+d)*Ve*Ve+u*Ve+c;for(let _=0;_<pe;_++){let m=g+_*Ve;for(let p=0;p<pe;p++){let M=m+p;this.tempAtlasDataBuffer[f++]=this.atlasData[M]}}}n.texSubImage3D(n.TEXTURE_3D,0,c,u,h,pe,pe,pe,n.RED,n.UNSIGNED_BYTE,this.tempAtlasDataBuffer)}this.dirtyAtlasBricks.clear(),e.state.reset()}}tempColourDataBuffer=new Uint8Array(pe**3<<2);updatePaintThreeJs(e,t){const n=e.getContext();let s=e.properties.get(t.cTex);if(!s.__webglTexture){t.cTex.needsUpdate=!0,this.dirtyColourBricks.clear();return}n.bindTexture(n.TEXTURE_3D,s.__webglTexture),n.pixelStorei(n.UNPACK_ALIGNMENT,1),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.bindBuffer(n.PIXEL_UNPACK_BUFFER,null);for(let r of this.dirtyColourBricks){let a=r%Ne,o=Math.floor(r/Ne)%Ne,l=Math.floor(r/(Ne*Ne));const c=a*pe,u=o*pe,h=l*pe;let f=0;for(let d=0;d<pe;d++){let g=(h+d)*Ve*Ve+u*Ve+c<<2;for(let _=0;_<pe;_++){let m=g+(_*Ve<<2);for(let p=0;p<pe;p++){let M=m+(p<<2);this.tempColourDataBuffer[f++]=this.colourData[M],this.tempColourDataBuffer[f++]=this.colourData[M+1],this.tempColourDataBuffer[f++]=this.colourData[M+2],this.tempColourDataBuffer[f++]=this.colourData[M+3]}}}n.texSubImage3D(n.TEXTURE_3D,0,c,u,h,pe,pe,pe,n.RGBA,n.UNSIGNED_BYTE,this.tempColourDataBuffer)}this.dirtyColourBricks.clear(),e.state.reset()}initTextures(e,t){let n=e.getUniformLocation(t,"uIndirectionTex"),s=e.getUniformLocation(t,"uAtlasTex");e.uniform1i(n,0),e.uniform1i(s,1),e.activeTexture(e.TEXTURE0);const r=e.createTexture();e.bindTexture(e.TEXTURE_3D,r),e.texImage3D(e.TEXTURE_3D,0,e.RGBA8,nt,nt,nt,0,e.RGBA,e.UNSIGNED_BYTE,this.indirectionData),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),e.activeTexture(e.TEXTURE1);const a=e.createTexture();return e.bindTexture(e.TEXTURE_3D,a),e.texImage3D(e.TEXTURE_3D,0,e.R8,Ve,Ve,Ve,0,e.RED,e.UNSIGNED_BYTE,this.atlasData),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),{iTex:r,aTex:a}}updateTextures(e,t){e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_3D,t.iTex),e.texSubImage3D(e.TEXTURE_3D,0,0,0,0,nt,nt,nt,e.RGBA,e.UNSIGNED_BYTE,this.indirectionData),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_3D,t.aTex),e.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Ve,Ve,Ve,e.RED,e.UNSIGNED_BYTE,this.atlasData)}writeShaderCode(){return`uniform sampler3D uIndirectionTex;
uniform sampler3D uAtlasTex;
uniform sampler3D uColourTex;

const float VOXEL_SIZE = ${Ln.toFixed(1)};
const float GRID_RES = ${nt.toFixed(1)};
const float ATLAS_RES = ${Ve.toFixed(1)};
const float HALF_VOLUME_SIZE = ${((ih>>1)*Ln).toFixed(1)};

vec4 colour(vec3 p) {
  vec3 p_local = p + HALF_VOLUME_SIZE;
  vec3 uvw = p_local / ${(nt*pn*Ln).toFixed(1)};
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
    vec3 uvw = p_local / ${(nt*pn*Ln).toFixed(1)};
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
    float jumpDist = max(VOXEL_SIZE, distToBound * ${(pn*Ln).toFixed(1)});

    if (brickInfo.a > 0.4) {
        return -jumpDist;
    }
    return jumpDist;
}
`}}const Kc={type:"change"},Al={type:"start"},sh={type:"end"},Mr=new ps,Jc=new oi,lx=Math.cos(70*Kr.DEG2RAD),Ut=new D,rn=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},eo=1e-6;class cx extends $u{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Dt,this._lastTargetPosition=new D,this._quat=new Dt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mc,this._sphericalDelta=new Mc,this._scale=1,this._panOffset=new D,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new D,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hx.bind(this),this._onPointerDown=ux.bind(this),this._onPointerUp=fx.bind(this),this._onContextMenu=vx.bind(this),this._onMouseWheel=mx.bind(this),this._onKeyDown=gx.bind(this),this._onTouchStart=_x.bind(this),this._onTouchMove=xx.bind(this),this._onMouseDown=dx.bind(this),this._onMouseMove=px.bind(this),this._interceptControlDown=Mx.bind(this),this._interceptControlUp=yx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kc),this.update(),this.state=ht.NONE}update(e=null){const t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ut.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Mr.origin.copy(this.object.position),Mr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mr.direction))<lx?this.object.lookAt(this.target):(Jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mr.intersectPlane(Jc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>eo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>eo||this._lastTargetPosition.distanceToSquared(this.target)>eo?(this.dispatchEvent(Kc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ut.copy(s).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ux(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function hx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sh),this.state=ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function dx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ht.DOLLY;break;case ns.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ht.ROTATE}break;case ns.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Al)}function px(i){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function mx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(i.preventDefault(),this.dispatchEvent(Al),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(sh))}function gx(i){this.enabled!==!1&&this._handleKeyDown(i)}function _x(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ht.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ht.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Al)}function xx(i){switch(this._trackPointer(i),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ht.NONE}}function vx(i){this.enabled!==!1&&i.preventDefault()}function Mx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Sx=new $s(-1,1,1,-1,0,1);class Ex extends Bt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}}const bx=new Ex;class Tx{constructor(e){this._mesh=new ce(bx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Mi=new nl,qt=new D,ai=new D,vt=new Dt,Qc={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},to={type:"change"},eu={type:"mouseDown",mode:null},tu={type:"mouseUp",mode:null},nu={type:"objectChange"};class wx extends $u{constructor(e,t=null){super(void 0,t);const n=new Ix(this);this._root=n;const s=new Lx;this._gizmo=s,n.add(s);const r=new Ux;this._plane=r,n.add(r);const a=this;function o(E,S){let T=S;Object.defineProperty(a,E,{get:function(){return T!==void 0?T:S},set:function(A){T!==A&&(T=A,r[E]=A,s[E]=A,a.dispatchEvent({type:E+"-changed",value:A}),a.dispatchEvent(to))}}),a[E]=S,r[E]=S,s[E]=S}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0),o("minX",-1/0),o("maxX",1/0),o("minY",-1/0),o("maxY",1/0),o("minZ",-1/0),o("maxZ",1/0);const l=new D,c=new D,u=new Dt,h=new Dt,f=new D,d=new Dt,g=new D,_=new D,m=new D,p=0,M=new D;o("worldPosition",l),o("worldPositionStart",c),o("worldQuaternion",u),o("worldQuaternionStart",h),o("cameraPosition",f),o("cameraQuaternion",d),o("pointStart",g),o("pointEnd",_),o("rotationAxis",m),o("rotationAngle",p),o("eye",M),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new Dt,this._parentQuaternionInv=new Dt,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new Dt,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new Dt,this._scaleStart=new D,this._getPointer=Ax.bind(this),this._onPointerDown=Cx.bind(this),this._onPointerHover=Rx.bind(this),this._onPointerMove=Px.bind(this),this._onPointerUp=Dx.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Mi.setFromCamera(e,this.camera);const t=no(this._gizmo.picker[this.mode],Mi);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Mi.setFromCamera(e,this.camera);const t=no(this._plane,Mi,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,eu.mode=this.mode,this.dispatchEvent(eu)}}pointerMove(e){const t=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Mi.setFromCamera(e,this.camera);const a=no(this._plane,Mi,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(vt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(qt.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(qt.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),ai.set(o,o,o)}else qt.copy(this.pointStart),ai.copy(this.pointEnd),qt.applyQuaternion(this._worldQuaternionInv),ai.applyQuaternion(this._worldQuaternionInv),ai.divide(qt),t.search("X")===-1&&(ai.x=1),t.search("Y")===-1&&(ai.y=1),t.search("Z")===-1&&(ai.z=1);s.scale.copy(this._scaleStart).multiply(ai),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(qt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(qt.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Qc[t]),qt.copy(Qc[t]),r==="local"&&qt.applyQuaternion(this.worldQuaternion),qt.cross(this.eye),qt.length()===0?l=!0:this.rotationAngle=this._offset.dot(qt.normalize())*o),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(vt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(vt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(to),this.dispatchEvent(nu)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(tu.mode=this.mode,this.dispatchEvent(tu)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(to),this.dispatchEvent(nu),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Mi}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){const r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}}function Ax(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function Rx(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Cx(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Px(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Dx(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function no(i,e,t){const n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}const yr=new Cn,dt=new D(0,1,0),iu=new D(0,0,0),su=new st,Sr=new Dt,Or=new Dt,In=new D,ru=new st,Is=new D(1,0,0),yi=new D(0,1,0),Ls=new D(0,0,1),Er=new D,Ts=new D,ws=new D;class Ix extends Lt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class Lx extends Lt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new fa({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ju({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const s=t.clone();s.opacity=.5;const r=e.clone();r.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25;const d=e.clone();d.color.setHex(16776960);const g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:a,zAxis:o,active:d,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:u,activeTransparent:f};const _=new jt(0,.04,.1,12);_.translate(0,.05,0);const m=new Rt(.08,.08,.08);m.translate(0,.04,0);const p=new Bt;p.setAttribute("position",new pt([0,0,0,1,0,0],3));const M=new jt(.0075,.0075,.5,3);M.translate(0,.25,0);function E(k,V){const U=new Ei(k,.0075,3,64,V*Math.PI*2);return U.rotateY(Math.PI/2),U.rotateX(Math.PI/2),U}function S(){const k=new Bt;return k.setAttribute("position",new pt([0,0,0,1,1,1],3)),k}const T={X:[[new ce(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new ce(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new ce(M,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ce(_,a),[0,.5,0]],[new ce(_,a),[0,-.5,0],[Math.PI,0,0]],[new ce(M,a)]],Z:[[new ce(_,o),[0,0,.5],[Math.PI/2,0,0]],[new ce(_,o),[0,0,-.5],[-Math.PI/2,0,0]],[new ce(M,o),null,[Math.PI/2,0,0]]],XYZ:[[new ce(new ts(.1,0),h),[0,0,0]]],XY:[[new ce(new Rt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ce(new Rt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Rt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new ce(new jt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ce(new jt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ce(new jt(.2,0,.6,4),n),[0,.3,0]],[new ce(new jt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ce(new jt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ce(new jt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ce(new ts(.2,0),n)]],XY:[[new ce(new Rt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ce(new Rt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Rt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},w={START:[[new ce(new ts(.01,2),s),null,null,null,"helper"]],END:[[new ce(new ts(.01,2),s),null,null,null,"helper"]],DELTA:[[new ri(S(),s),null,null,null,"helper"]],X:[[new ri(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ri(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ri(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C={XYZE:[[new ce(E(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ce(E(.5,.5),r)]],Y:[[new ce(E(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new ce(E(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new ce(E(.75,1),f),null,[0,Math.PI/2,0]]]},x={AXIS:[[new ri(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},y={XYZE:[[new ce(new hi(.25,10,8),n)]],X:[[new ce(new Ei(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ce(new Ei(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ce(new Ei(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ce(new Ei(.75,.1,2,24),n)]]},R={X:[[new ce(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new ce(M,r),[0,0,0],[0,0,-Math.PI/2]],[new ce(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ce(m,a),[0,.5,0]],[new ce(M,a)],[new ce(m,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ce(m,o),[0,0,.5],[Math.PI/2,0,0]],[new ce(M,o),[0,0,0],[Math.PI/2,0,0]],[new ce(m,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ce(new Rt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ce(new Rt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Rt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ce(new Rt(.1,.1,.1),h)]]},I={X:[[new ce(new jt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ce(new jt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ce(new jt(.2,0,.6,4),n),[0,.3,0]],[new ce(new jt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ce(new jt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ce(new jt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ce(new Rt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ce(new Rt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new Rt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ce(new Rt(.2,.2,.2),n),[0,0,0]]]},N={X:[[new ri(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ri(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ri(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function z(k){const V=new Lt;for(const U in k)for(let q=k[U].length;q--;){const ee=k[U][q][0].clone(),H=k[U][q][1],Y=k[U][q][2],he=k[U][q][3],Me=k[U][q][4];ee.name=U,ee.tag=Me,H&&ee.position.set(H[0],H[1],H[2]),Y&&ee.rotation.set(Y[0],Y[1],Y[2]),he&&ee.scale.set(he[0],he[1],he[2]),ee.updateMatrix();const ke=ee.geometry.clone();ke.applyMatrix4(ee.matrix),ee.geometry=ke,ee.renderOrder=1/0,ee.position.set(0,0,0),ee.rotation.set(0,0,0),ee.scale.set(1,1,1),V.add(ee)}return V}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=z(T)),this.add(this.gizmo.rotate=z(C)),this.add(this.gizmo.scale=z(R)),this.add(this.picker.translate=z(A)),this.add(this.picker.rotate=z(y)),this.add(this.picker.scale=z(I)),this.add(this.helper.translate=z(w)),this.add(this.helper.rotate=z(x)),this.add(this.helper.scale=z(N)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Or;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const a=s[r];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(vt.setFromEuler(yr.set(0,0,0)),a.quaternion.copy(n).multiply(vt),Math.abs(dt.copy(Is).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(vt.setFromEuler(yr.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(vt),Math.abs(dt.copy(yi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(vt.setFromEuler(yr.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(vt),Math.abs(dt.copy(Ls).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(vt.setFromEuler(yr.set(0,Math.PI/2,0)),dt.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(su.lookAt(iu,dt,yi)),a.quaternion.multiply(vt),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),qt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),qt.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(qt),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(dt.copy(Is).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(dt.copy(yi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(dt.copy(Ls).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(dt.copy(Ls).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(dt.copy(Is).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(dt.copy(yi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Sr.copy(n),dt.copy(this.eye).applyQuaternion(vt.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(su.lookAt(this.eye,iu,yi)),a.name==="X"&&(vt.setFromAxisAngle(Is,Math.atan2(-dt.y,dt.z)),vt.multiplyQuaternions(Sr,vt),a.quaternion.copy(vt)),a.name==="Y"&&(vt.setFromAxisAngle(yi,Math.atan2(dt.x,dt.z)),vt.multiplyQuaternions(Sr,vt),a.quaternion.copy(vt)),a.name==="Z"&&(vt.setFromAxisAngle(Ls,Math.atan2(dt.y,dt.x)),vt.multiplyQuaternions(Sr,vt),a.quaternion.copy(vt))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis?(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1):this.axis.split("").some(function(l){return a.name===l})&&(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1))}super.updateMatrixWorld(e)}}class Ux extends ce{constructor(){super(new qs(1e5,1e5,2,2),new fa({visible:!1,wireframe:!0,side:yn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Er.copy(Is).applyQuaternion(t==="local"?this.worldQuaternion:Or),Ts.copy(yi).applyQuaternion(t==="local"?this.worldQuaternion:Or),ws.copy(Ls).applyQuaternion(t==="local"?this.worldQuaternion:Or),dt.copy(Ts),this.mode){case"translate":case"scale":switch(this.axis){case"X":dt.copy(this.eye).cross(Er),In.copy(Er).cross(dt);break;case"Y":dt.copy(this.eye).cross(Ts),In.copy(Ts).cross(dt);break;case"Z":dt.copy(this.eye).cross(ws),In.copy(ws).cross(dt);break;case"XY":In.copy(ws);break;case"YZ":In.copy(Er);break;case"XZ":dt.copy(ws),In.copy(Ts);break;case"XYZ":case"E":In.set(0,0,0);break}break;case"rotate":default:In.set(0,0,0)}In.length()===0?this.quaternion.copy(this.cameraQuaternion):(ru.lookAt(qt.set(0,0,0),In,dt),this.quaternion.setFromRotationMatrix(ru)),super.updateMatrixWorld(e)}}var Nx=mt("<canvas>");const au=50,Fx=i=>{let[e,t]=en(),[n,s]=en(),[r,a]=en(),[o,l]=en(),[c,u]=en(),[h,f]=en(),d=new tl,g=new Cd;g.position.set(1,1,1),d.add(g);let m=`
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
`).map((C,x)=>`${x+1}: ${C}`).join(`
`));let p={uniforms:{resolution:{value:new Pe},uFocalLength:{value:0},viewMatrixInverse:{value:new st},projectionMatrixInverse:{value:new st},uCameraViewMatrix:{value:new st},uCameraProjectionMatrix:{value:new st},cameraPosition:{value:new D}},fragmentShader:m,depthWrite:!0},M=i.brickMap.initTexturesThreeJs(p),E=new Sn(p),S=new Tx(E),T;{let C=!1;T=()=>{C||(C=!0,requestAnimationFrame(()=>{let x=o();if(x==null)return;let y=r();if(y==null)return;let R=c();R!=null&&(R.update(),E.uniforms.viewMatrixInverse.value.copy(y.matrixWorld),E.uniforms.projectionMatrixInverse.value.copy(y.projectionMatrixInverse),E.uniforms.uCameraViewMatrix.value.copy(y.matrixWorldInverse),E.uniforms.uCameraProjectionMatrix.value.copy(y.projectionMatrix),E.uniforms.cameraPosition.value.copy(y.position),x.clearDepth(),i.hideBrickMap||S.render(x),x.render(d,y),C=!1)}))}}let A=new nl,w=new Pe;return i.onInit({canvasSize:n,onBrickMapChanged(){i.brickMap.updateTexturesThreeJs(o(),M),T()},onBrickMapPaintChanged(){i.brickMap.updatePaintThreeJs(o(),M),T()},rerender:T,moveTransform(){h()?.setMode("translate")},rotateTransform(){h()?.setMode("rotate")},scaleTransform(){h()?.setMode("scale")},screenCoordsToRay(C,x){let y=n();if(y==null)return;let R=r();if(R==null)return;let I=w.set(C.x/y.x*2-1,-(C.y/y.y)*2+1),N=A;N.setFromCamera(I,R),x.copy(N.ray)},*getThreeObjectsUnderScreenCoords(C){let x=n();if(x==null)return;let y=r();if(y==null)return;let R=new Pe(C.x/x.x*2-1,-(C.y/x.y)*2+1),I=new nl;I.setFromCamera(R,y);for(let N of I.intersectObject(d,!0))yield N.object},renderer:o}),pu(()=>{let C=e();if(C==null)return;let x=new Mn(au,1,10,1e4);x.position.set(0,0,5e3),x.lookAt(new D(0,0,0));let y=new N_({canvas:C});y.setPixelRatio(window.devicePixelRatio),y.autoClear=!1;let R=()=>{let U=C.getBoundingClientRect();s(new Pe(U.width,U.height)),x.aspect=U.width/U.height,x.updateProjectionMatrix();let q=U.width*window.devicePixelRatio,ee=U.height*window.devicePixelRatio,H=.5*ee/Math.tan(.5*au*Math.PI/180),Y=1/i.pixelSize;y.setSize(Y*U.width,Y*U.height,!1),E.uniforms.resolution.value.set(Y*q,Y*ee),E.uniforms.uFocalLength.value=Y*H,T()},I=new ResizeObserver(()=>{R()});an(on(()=>i.pixelSize,()=>R(),{defer:!0})),I.observe(C),Rn(()=>{I.unobserve(C),I.disconnect()});let N=new cx(x,C);N.enableDamping=!1,N.update(),N.addEventListener("change",()=>T());let z=new wx(x,C);an(on(()=>i.useTransformControlOnObject3D,U=>{U==null?z.detach():z.attach(U)}));let[k,V]=en(!1);z.addEventListener("dragging-changed",U=>{let q=U.value;V(q),i.onDragingEvent(q)}),an(()=>{N.enabled=!(k()||i.disableOrbit)}),z.addEventListener("change",()=>{T()}),d.add(z.getHelper()),Bs(()=>{a(x),l(y),u(N),f(z)}),T()}),an(on(()=>i.overlayObject3D,C=>{C!=null&&(d.add(C),Rn(()=>{d.remove(C)}),Ot(()=>T()))})),(()=>{var C=Nx(),x=t;return typeof x=="function"?Xr(x,C):t=C,Mt(C,"width","100%"),Mt(C,"height","100%"),C})()},al=Symbol("store-raw"),as=Symbol("store-node"),Xn=Symbol("store-has"),rh=Symbol("store-self");function ah(i){let e=i[Ai];if(!e&&(Object.defineProperty(i,Ai,{value:e=new Proxy(i,zx)}),!Array.isArray(i))){const t=Object.keys(i),n=Object.getOwnPropertyDescriptors(i);for(let s=0,r=t.length;s<r;s++){const a=t[s];n[a].get&&Object.defineProperty(i,a,{enumerable:n[a].enumerable,get:n[a].get.bind(e)})}}return e}function ta(i){let e;return i!=null&&typeof i=="object"&&(i[Ai]||!(e=Object.getPrototypeOf(i))||e===Object.prototype||Array.isArray(i))}function Ys(i,e=new Set){let t,n,s,r;if(t=i!=null&&i[al])return t;if(!ta(i)||e.has(i))return i;if(Array.isArray(i)){Object.isFrozen(i)?i=i.slice(0):e.add(i);for(let a=0,o=i.length;a<o;a++)s=i[a],(n=Ys(s,e))!==s&&(i[a]=n)}else{Object.isFrozen(i)?i=Object.assign({},i):e.add(i);const a=Object.keys(i),o=Object.getOwnPropertyDescriptors(i);for(let l=0,c=a.length;l<c;l++)r=a[l],!o[r].get&&(s=i[r],(n=Ys(s,e))!==s&&(i[r]=n))}return i}function na(i,e){let t=i[e];return t||Object.defineProperty(i,e,{value:t=Object.create(null)}),t}function js(i,e,t){if(i[e])return i[e];const[n,s]=en(t,{equals:!1,internal:!0});return n.$=s,i[e]=n}function Ox(i,e){const t=Reflect.getOwnPropertyDescriptor(i,e);return!t||t.get||!t.configurable||e===Ai||e===as||(delete t.value,delete t.writable,t.get=()=>i[Ai][e]),t}function oh(i){lo()&&js(na(i,as),rh)()}function Bx(i){return oh(i),Reflect.ownKeys(i)}const zx={get(i,e,t){if(e===al)return i;if(e===Ai)return t;if(e===oo)return oh(i),t;const n=na(i,as),s=n[e];let r=s?s():i[e];if(e===as||e===Xn||e==="__proto__")return r;if(!s){const a=Object.getOwnPropertyDescriptor(i,e);lo()&&(typeof r!="function"||i.hasOwnProperty(e))&&!(a&&a.get)&&(r=js(n,e,r)())}return ta(r)?ah(r):r},has(i,e){return e===al||e===Ai||e===oo||e===as||e===Xn||e==="__proto__"?!0:(lo()&&js(na(i,Xn),e)(),e in i)},set(){return!0},deleteProperty(){return!0},ownKeys:Bx,getOwnPropertyDescriptor:Ox};function ia(i,e,t,n=!1){if(!n&&i[e]===t)return;const s=i[e],r=i.length;t===void 0?(delete i[e],i[Xn]&&i[Xn][e]&&s!==void 0&&i[Xn][e].$()):(i[e]=t,i[Xn]&&i[Xn][e]&&s===void 0&&i[Xn][e].$());let a=na(i,as),o;if((o=js(a,e,s))&&o.$(()=>t),Array.isArray(i)&&i.length!==r){for(let l=i.length;l<r;l++)(o=a[l])&&o.$();(o=js(a,"length",r))&&o.$(i.length)}(o=a[rh])&&o.$()}function lh(i,e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1){const s=t[n];ia(i,s,e[s])}}function kx(i,e){if(typeof e=="function"&&(e=e(i)),e=Ys(e),Array.isArray(e)){if(i===e)return;let t=0,n=e.length;for(;t<n;t++){const s=e[t];i[t]!==s&&ia(i,t,s)}ia(i,"length",n)}else lh(i,e)}function Us(i,e,t=[]){let n,s=i;if(e.length>1){n=e.shift();const a=typeof n,o=Array.isArray(i);if(Array.isArray(n)){for(let l=0;l<n.length;l++)Us(i,[n[l]].concat(e),t);return}else if(o&&a==="function"){for(let l=0;l<i.length;l++)n(i[l],l)&&Us(i,[l].concat(e),t);return}else if(o&&a==="object"){const{from:l=0,to:c=i.length-1,by:u=1}=n;for(let h=l;h<=c;h+=u)Us(i,[h].concat(e),t);return}else if(e.length>1){Us(i[n],e,[n].concat(t));return}s=i[n],t=[n].concat(t)}let r=e[0];typeof r=="function"&&(r=r(s,t),r===s)||n===void 0&&r==null||(r=Ys(r),n===void 0||ta(s)&&ta(r)&&!Array.isArray(r)?lh(s,r):ia(i,n,r))}function Zs(...[i,e]){const t=Ys(i||{}),n=Array.isArray(t),s=ah(t);function r(...a){Bs(()=>{n&&a.length===1?kx(t,a[0]):Us(t,a)})}return[s,r]}class ou{constructor(e){}}var Vx=mt('<button class="btn btn-primary">End Draw Mode');class Gx{instructions;disableOrbit=()=>!0;constructor(e){let t=$e(()=>e.canvasSize()!=null),n=$e(()=>e.pointerPos()!=null);an(on([t,n,e.pointerDown],([r,a,o])=>{if(!r||!a||!o)return;let l=e.canvasSize,c=e.pointerPos,u,h;{let f=Ot(l),d=Ot(c);u=d.x-.5*f.x,h=-d.y+.5*f.y}Hx(e.brickMap,u,h),e.updateSdf(),an(on(c,f=>{let d=Ot(l),g=f.x-.5*d.x,_=-f.y+.5*d.y,m=g-u,p=_-h;m*m+p*p<=25||(Wx(e.brickMap,u,h,g,_),u=g,h=_,e.updateSdf())},{defer:!0}))}));let s=()=>(()=>{var r=Vx();return r.$$click=()=>e.endMode(),r})();this.instructions=s}}function Hx(i,e,t){let n=512+Math.round(e),s=512+Math.round(t),r=512,a=20;for(let o=-a-2;o<=a+2;++o)for(let l=-a-2;l<=a+2;++l)for(let c=-a-2;c<=a+2;++c){let u=Math.sqrt(o*o+l*l+c*c)-a;if(u/=Math.sqrt(3),u<-1||u>1)continue;let h=128-Math.floor(Math.max(-1,Math.min(1,u))*127);h<1&&(h=1),h>255&&(h=255);let f=n+c,d=s+l,g=r+o;f<0||f>=1024||d<0||d>=1024||g<0||g>=1024||i.set(f,d,g,h)}}function Wx(i,e,t,n,s){let r=512+Math.round(e),a=512+Math.round(t),o=512,l=512+Math.round(n),c=512+Math.round(s),u=512,h=20,f=l-r,d=c-a,g=u-o,_=f*f+d*d+g*g,m=(w,C,x)=>{let y=((w-r)*f+(C-a)*d+(x-o)*g)/_;y=Math.max(0,Math.min(1,y));let R=r+f*y,I=a+d*y,N=o+g*y,z=w-R,k=C-I,V=x-N;return Math.sqrt(z*z+k*k+V*V)-h},p=Math.min(r,l)-h,M=Math.max(r,l)+h,E=Math.min(a,c)-h,S=Math.max(a,c)+h,T=Math.min(o,u)-h,A=Math.max(o,u)+h;for(let w=T-2;w<=A+2;++w)for(let C=E-2;C<=S+2;++C)for(let x=p-2;x<=M+2;++x){if(w<0||w>=1024||C<0||C>=1024||x<0||x>=1024)continue;let y=m(x,C,w);if(y/=Math.sqrt(3),y<-1||y>1)continue;let R=128-Math.floor(Math.max(-1,Math.min(1,y))*127);R<1&&(R=1),R>255&&(R=255);let I=i.get(x,C,w);I!=0&&(R=Math.max(R,I)),i.set(x,C,w,R)}}Di(["click"]);class Xx{value;constructor(e){this.value=e}}function Yx(i,e){const{width:t,height:n}=e,s=new Uint8Array(4*t*n);i.readRenderTargetPixels(e,0,0,t,n,s);const r=document.createElement("canvas");r.width=t,r.height=n;const a=r.getContext("2d");if(a==null)return;const o=new ImageData(new Uint8ClampedArray(s),t,n);return a.save(),a.scale(1,-1),a.translate(0,-n),a.putImageData(o,0,0),a.restore(),r.toDataURL("image/png")}var jx=mt('<div><label class="label bg-base-100">Select a primitive to insert, OR select an existing primitive on the screen to transform:'),qx=mt('<button class="btn btn-primary">Sphere'),$x=mt('<button class="btn btn-primary ml-2">Cube'),Zx=mt('<div><label class="label bg-base-100">Otherwise if your finish, press the I am finished button:'),Kx=mt('<button class="btn btn-primary">I am finished'),Jx=mt('<div><label class="label bg-base-100">Transform the primitive, then click place it:'),Qx=mt('<button class="btn btn-primary">Place It');const Zi=1500,br=1e3;class ev{instructions;overlayObject3D;useTransformControlOnObject3D;onClick;constructor(e){let[t,n]=Zs({existingPrimitives:[],movingExistingPrimitive:void 0,insertingPrimitive:void 0});Rn(()=>{for(let f of t.existingPrimitives)f.value.cleanup();n("existingPrimitives",[])});let s=f=>{n("insertingPrimitive",f)},r=()=>{let f=o();f!=null?(f.autoCleanup=!1,Bs(()=>{n("insertingPrimitive",void 0),n("existingPrimitives",d=>[...d,new Xx({primitive:f.primitive,object:f.object,cleanup:f.cleanup})])})):t.movingExistingPrimitive!=null&&n("movingExistingPrimitive",void 0)},a=()=>{let f=[];for(let w of t.existingPrimitives){let C=w.value,x=C.object,y=new D,R=new Dt,I=new D;x.matrix.decompose(y,R,I);let N,z=new Dt;if(z.copy(R),z.conjugate(),C.primitive=="Sphere"){let k=new D(br,br,br).multiply(I),V=new D,U=new D,q=new D().copy(k).multiply(k);N=ee=>{V.copy(ee),V.sub(y),V.applyQuaternion(z),U.copy(V),V.divide(k),U.divide(q);let H=V.length(),Y=U.length();return H*(H-1)/Y}}else{let k=new D(Zi,Zi,Zi).multiply(I).multiplyScalar(.5),V=new D,U=new D;N=q=>{V.copy(q),V.sub(y),V.applyQuaternion(z),U.copy(V),U.x=Math.abs(U.x),U.y=Math.abs(U.y),U.z=Math.abs(U.z),U.sub(k);let ee=Math.min(Math.max(U.x,U.y,U.z),0);return U.x=Math.max(U.x,0),U.y=Math.max(U.y,0),U.z=Math.max(U.z,0),U.length()+ee}}f.push(N)}let d=w=>{let C=f[0](w);for(let x=1;x<f.length;++x)C=Math.min(C,f[x](w));return C},g=new Ci;{let w=!0,C=new Ci;for(let x of t.existingPrimitives){let y=x.value.object;y instanceof ce&&y.geometry instanceof Bt&&y.geometry.computeBoundingBox(),C.setFromObject(y),w?(g.copy(C),w=!1):g.union(C)}}let _=Math.sqrt(3),m=new D,p=Math.max(0,512+Math.floor(g.min.z/10))-1,M=Math.min(1023,512+Math.ceil(g.max.z/10))+1,E=Math.max(0,512+Math.floor(g.min.y/10))-1,S=Math.min(1023,512+Math.ceil(g.max.y/10))+1,T=Math.max(0,512+Math.floor(g.min.x/10))-1,A=Math.min(1023,512+Math.ceil(g.max.x/10))+1;for(let w=p;w<=M;++w){let C=(w-512)*10;for(let x=E;x<=S;++x){let y=(x-512)*10;for(let R=T;R<=A;++R){let I=(R-512)*10;m.set(I,y,C);let N=d(m)/(10*_),z=128-Math.floor(Math.max(-1,Math.min(1,N))*127);z<1&&(z=1),z>255&&(z=255),z=Math.max(z,e.brickMap.get(R,x,w)),e.brickMap.set(R,x,w,z)}}}e.updateSdf(),e.endMode()},o=$e(on(()=>t.insertingPrimitive,f=>{if(f==null)return;let d,g=new rs({color:"blue"});switch(f){case"Cube":{d=new Rt(Zi,Zi,Zi);break}case"Sphere":{d=new hi(br);break}default:throw new Error("Unreachable")}let _=new ce(d,g),m={primitive:f,autoCleanup:!0,cleanup:()=>{d.dispose(),g.dispose()},object:_};return Rn(()=>{m.autoCleanup&&m.cleanup()}),m})),l=()=>Ht(Gh,{get children(){return[Ht(Bl,{get when(){return Hh(()=>t.insertingPrimitive==null)()&&t.movingExistingPrimitive==null},get children(){return[jx(),(()=>{var f=qx();return f.$$click=()=>s("Sphere"),f})(),(()=>{var f=$x();return f.$$click=()=>s("Cube"),f})(),Zx(),(()=>{var f=Kx();return f.$$click=()=>a(),f})()]}}),Ht(Bl,{get when(){return t.insertingPrimitive!=null||t.movingExistingPrimitive!=null},get children(){return[Jx(),(()=>{var f=Qx();return f.$$click=()=>r(),f})()]}})]}}),c=$e(()=>{let f=o()?.object;if(f==null&&t.existingPrimitives.length==0)return;let d=new es;f!=null&&d.add(f);for(let g of t.existingPrimitives)d.add(g.value.object);return d}),u=$e(()=>o()?.object??t.movingExistingPrimitive),h=()=>{if(t.movingExistingPrimitive!=null||t.insertingPrimitive!=null)return;let f=e.pointerPos();if(f!=null){let d=new Set;for(let g of t.existingPrimitives)d.add(g.value.object);for(let g of e.getThreeObjectsUnderScreenCoords(f))if(d.has(g)){n("movingExistingPrimitive",g);break}}};this.instructions=l,this.overlayObject3D=c,this.useTransformControlOnObject3D=u,this.onClick=h}}Di(["click"]);var tv=mt('<div class=join><label class=label>Brush<input type=radio name=BrushSign class="btn btn-sm join-item"aria-label=-><input type=radio name=BrushSign class="btn btn-sm join-item"aria-label=+>'),nv=mt("<label class=label>Brush Size:<input type=range class=range min=8 max=40>"),iv=mt("<label class=label>Softness:<input type=range class=range min=0 max=1 step=0.05>"),sv=mt('<button class="btn btn-primary ml-2">End Sculpt Mode');class rv{instructions;disableOrbit;overlayObject3D;constructor(e){let[t,n]=Zs({brushSize:8,softness:0,isNegativeBrush:!0}),s=new wl().copy(e.brickMap),r=$e(()=>{let d=e.pointerPos();if(d==null)return;let g=new ps;return e.screenCoordsToRay(d,g),g}),a=$e(()=>{let d=r();if(d==null)return;let g=[0];return s.march(d.origin,d.direction,g)?new D().copy(d.direction).multiplyScalar(g[0]).add(d.origin):void 0});an(on(e.pointerDown,d=>{if(!d){s.copy(e.brickMap);return}let g=$e(()=>a()!=null);an(on(g,_=>{if(!_)return;let m=a;av(e.brickMap,m(),t.isNegativeBrush,t.brushSize,t.softness*t.brushSize/8),e.updateSdf();let p=m();an(on(m,M=>{p.distanceTo(M)<15||(ov(e.brickMap,p,M,t.isNegativeBrush,t.brushSize,t.softness*t.brushSize/8),e.updateSdf(),p=M)},{defer:!0}))}))},{defer:!0}));let o=new hi(.5*Ot(()=>t.brushSize)*10),l=new rs({color:"blue"}),c=new ce(o,l);an(on(()=>t.brushSize,d=>{o.dispose(),o=new hi(.5*d*10),c=new ce(o,l),e.rerender()})),Rn(()=>{o.dispose(),l.dispose()});let u=()=>[(()=>{var d=tv(),g=d.firstChild,_=g.firstChild,m=_.nextSibling,p=m.nextSibling;return m.addEventListener("change",M=>{M.currentTarget.checked&&n("isNegativeBrush",!0)}),p.addEventListener("change",M=>{M.currentTarget.checked&&n("isNegativeBrush",!1)}),tn(()=>m.checked=t.isNegativeBrush),tn(()=>p.checked=!t.isNegativeBrush),d})(),(()=>{var d=nv(),g=d.firstChild,_=g.nextSibling;return _.$$input=m=>{let p=Number.parseInt(m.currentTarget.value);Number.isNaN(p)||n("brushSize",p)},tn(()=>_.value=t.brushSize.toString()),d})(),(()=>{var d=iv(),g=d.firstChild,_=g.nextSibling;return _.$$input=m=>{let p=Number.parseFloat(m.currentTarget.value);Number.isNaN(p)||n("softness",p)},tn(()=>_.value=t.softness),d})(),(()=>{var d=sv();return d.$$click=()=>e.endMode(),d})()],h=$e(()=>a()!=null),f=$e(()=>{let d=a();if(d==null){e.rerender();return}return c.position.copy(d),c.updateMatrix(),c.matrixWorldNeedsUpdate=!0,e.rerender(),c});this.instructions=u,this.disableOrbit=h,this.overlayObject3D=f}}function Rl(i,e,t){if(t==0)return Math.min(i,e);t*=4;let n=Math.max(t-Math.abs(i-e),0);return Math.min(i,e)-n*n*.25/t}function ch(i,e,t){return-Rl(-i,e,t)}function uh(i,e,t,n){return(128-i.get(e,t,n))/127}function hh(i,e,t,n,s){let r=128-Math.floor(Math.max(-1,Math.min(1,s))*127);r<1&&(r=1),r>255&&(r=255),i.set(e,t,n,r)}function av(i,e,t,n,s){let r=512+Math.round(e.x/10),a=512+Math.round(e.y/10),o=512+Math.round(e.z/10),l=Math.round(.5*n),c=l+Math.ceil(s);for(let u=-c-2;u<=c+2;++u)for(let h=-c-2;h<=c+2;++h)for(let f=-c-2;f<=c+2;++f){let d=r+f,g=a+h,_=o+u;if(d<0||d>=1024||g<0||g>=1024||_<0||_>=1024)continue;let m=Math.sqrt(u*u+h*h+f*f)-l;m/=Math.sqrt(3);let p=uh(i,d,g,_),M;t?M=ch(p,m,s):M=Rl(p,m,s),hh(i,d,g,_,M)}}function ov(i,e,t,n,s,r){let a=512+Math.round(e.x/10),o=512+Math.round(e.y/10),l=512+Math.round(e.z/10),c=512+Math.round(t.x/10),u=512+Math.round(t.y/10),h=512+Math.round(t.z/10),f=Math.round(.5*s),d=c-a,g=u-o,_=h-l,m=d*d+g*g+_*_,p=(x,y,R)=>{let I=((x-a)*d+(y-o)*g+(R-l)*_)/m;I=Math.max(0,Math.min(1,I));let N=a+d*I,z=o+g*I,k=l+_*I,V=x-N,U=y-z,q=R-k;return Math.sqrt(V*V+U*U+q*q)-f},M=f+Math.ceil(r),E=Math.min(a,c)-M,S=Math.max(a,c)+M,T=Math.min(o,u)-M,A=Math.max(o,u)+M,w=Math.min(l,h)-M,C=Math.max(l,h)+M;for(let x=w-2;x<=C+2;++x)for(let y=T-2;y<=A+2;++y)for(let R=E-2;R<=S+2;++R){if(x<0||x>=1024||y<0||y>=1024||R<0||R>=1024)continue;let I=p(R,y,x);I/=Math.sqrt(3);let N=uh(i,R,y,x),z;n?z=ch(N,I,r):z=Rl(N,I,r),hh(i,R,y,x,z)}}Di(["input","click"]);class fh{reader;leftOver=void 0;leftOverOffset=0;constructor(e){this.reader=e}async read(e,t,n){let s=t,r=s+n;for(;s<r;){if(this.leftOver==null){let l=await this.reader.read();if(l.done)return s-t;this.leftOver=l.value}let a=this.leftOver.length-this.leftOverOffset,o=Math.min(a,r-s);e.set(this.leftOver.subarray(this.leftOverOffset,this.leftOverOffset+o),s),o==a?(this.leftOver=void 0,this.leftOverOffset=0):this.leftOverOffset+=o,s+=o}return n}readBuffer=new Uint8Array(16);async readU16(){return await this.read(this.readBuffer,0,2),this.readBuffer[0]|this.readBuffer[1]<<8}}async function lv(i,e,t){let n=new fh(e);await t.load(n)}async function cv(i,e,t){await t.save(e)}async function uv(i,e){let t=i.getReader(),n,s;{let o=new fh(t);n=await o.readU16(),o.leftOver!=null?s=o.leftOver.subarray(o.leftOverOffset):s=void 0}let a=new ReadableStream({async start(o){try{for(s!=null&&o.enqueue(s);;){let{value:l,done:c}=await t.read();if(c)break;o.enqueue(l)}o.close()}catch(l){o.error(l)}finally{t.releaseLock()}}}).pipeThrough(new DecompressionStream("gzip")).getReader();await lv(n,a,e)}async function hv(i,e){let t=1,n=new Uint8Array([t&255,t>>8&255]);{let o=i.getWriter();await o.write(n),o.releaseLock()}let s=new CompressionStream("gzip"),r=s.writable.getWriter(),a=(async()=>{await cv(t,r,e),await r.close()})();await s.readable.pipeTo(i),await a}async function fv(i,e){let t=await navigator.storage.getDirectory(),n;try{n=await t.getFileHandle(i)}catch(a){if(a instanceof DOMException&&a.name=="NotFoundError")return!1;throw a}let s=await n.getFile(),r=await s.stream();return await uv(r,e),console.log("File size:",s.size),!0}async function dv(i,e){let n=await(await navigator.storage.getDirectory()).getFileHandle(i,{create:!0}),s=await n.createWritable();await hv(s,e);let r=await n.getFile();console.log("File size:",r.size)}var pv=mt("<label class=label>Brush Size:<input type=range class=range min=8 max=40>"),mv=mt('<button class="btn btn-primary ml-2">End Paint Mode');class gv{instructions;disableOrbit;overlayObject3D;constructor(e){let[t,n]=Zs({brushSize:8}),s=new wl().copy(e.brickMap),r=$e(()=>{let g=e.pointerPos();if(g==null)return;let _=new ps;return e.screenCoordsToRay(g,_),_}),a=$e(()=>{let g=r();if(g==null)return;let _=[0];return s.march(g.origin,g.direction,_)?new D().copy(g.direction).multiplyScalar(_[0]).add(g.origin):void 0}),o=new Ze("blue");an(on(e.pointerDown,g=>{if(!g){s.copy(e.brickMap);return}let _=$e(()=>a()!=null);an(on(_,m=>{if(!m)return;let p=a;_v(e.brickMap,p(),t.brushSize,Ot(e.currentColour)??o),e.updateSdf();let M=p();an(on(p,E=>{M.distanceTo(E)<15||(xv(e.brickMap,M,E,t.brushSize,Ot(e.currentColour)??o),e.updatePaint(),M=E)},{defer:!0}))}))},{defer:!0}));let l=new hi(.5*Ot(()=>t.brushSize)*10),c=new rs({color:"blue"}),u=new ce(l,c);an(on(()=>t.brushSize,g=>{l.dispose(),l=new hi(.5*g*10),u=new ce(l,c),e.rerender()})),Rn(()=>{l.dispose(),c.dispose()});let h=()=>[(()=>{var g=pv(),_=g.firstChild,m=_.nextSibling;return m.$$input=p=>{let M=Number.parseInt(p.currentTarget.value);Number.isNaN(M)||n("brushSize",M)},tn(()=>m.value=t.brushSize.toString()),g})(),(()=>{var g=mv();return g.$$click=()=>e.endMode(),g})()],f=$e(()=>a()!=null),d=$e(()=>{let g=a();if(g==null){e.rerender();return}return u.position.copy(g),u.updateMatrix(),u.matrixWorldNeedsUpdate=!0,e.rerender(),u});this.instructions=h,this.disableOrbit=f,this.overlayObject3D=d}}function _v(i,e,t,n){let s=Math.floor(n.r*255),r=Math.floor(n.g*255),a=Math.floor(n.b*255),o=512+Math.round(e.x/10),l=512+Math.round(e.y/10),c=512+Math.round(e.z/10),u=Math.round(.5*t);for(let h=-u-2;h<=u+2;++h)for(let f=-u-2;f<=u+2;++f)for(let d=-u-2;d<=u+2;++d){let g=o+d,_=l+f,m=c+h;if(g<0||g>=1024||_<0||_>=1024||m<0||m>=1024)continue;let p=Math.sqrt(h*h+f*f+d*d)-u;p/=Math.sqrt(3),!(p>0)&&i.paint(g,_,m,s,r,a)}}function xv(i,e,t,n,s){let r=Math.floor(s.r*255),a=Math.floor(s.g*255),o=Math.floor(s.b*255),l=512+Math.round(e.x/10),c=512+Math.round(e.y/10),u=512+Math.round(e.z/10),h=512+Math.round(t.x/10),f=512+Math.round(t.y/10),d=512+Math.round(t.z/10),g=Math.round(.5*n),_=h-l,m=f-c,p=d-u,M=_*_+m*m+p*p,E=(y,R,I)=>{let N=((y-l)*_+(R-c)*m+(I-u)*p)/M;N=Math.max(0,Math.min(1,N));let z=l+_*N,k=c+m*N,V=u+p*N,U=y-z,q=R-k,ee=I-V;return Math.sqrt(U*U+q*q+ee*ee)-g},S=Math.min(l,h)-g,T=Math.max(l,h)+g,A=Math.min(c,f)-g,w=Math.max(c,f)+g,C=Math.min(u,d)-g,x=Math.max(u,d)+g;for(let y=C-2;y<=x+2;++y)for(let R=A-2;R<=w+2;++R)for(let I=S-2;I<=T+2;++I){if(y<0||y>=1024||R<0||R>=1024||I<0||I>=1024)continue;let N=E(I,R,y);N/=Math.sqrt(3),!(N>0)&&i.paint(I,R,y,r,a,o)}}Di(["input","click"]);var vv=mt("<div class=bg-base-200 style=display:grid;width:fit-content;padding:10px><div class=m-1 style=cursor:pointer>+"),Mv=mt("<div class=m-1 style=cursor:pointer>");const yv=i=>(()=>{var e=vv(),t=e.firstChild;return vn(e,Ht(Vh,{get each(){return i.colours},children:n=>(()=>{var s=Mv();return s.$$click=()=>i.setSelectedColour(n.id),tn(r=>{var a=`${i.squareSize}px`,o=`${i.squareSize}px`,l=`#${n.colour.getHexString()}`;return a!==r.e&&Mt(s,"width",r.e=a),o!==r.t&&Mt(s,"height",r.t=o),l!==r.a&&Mt(s,"background-color",r.a=l),r},{e:void 0,t:void 0,a:void 0}),s})()}),t),tn(n=>{var s=Array(i.numColumns).fill("min-content").join(" "),r=`${i.squareSize}px`,a=`${i.squareSize}px`;return s!==n.e&&Mt(e,"grid-template-columns",n.e=s),r!==n.t&&Mt(t,"width",n.t=r),a!==n.a&&Mt(t,"height",n.a=a),n},{e:void 0,t:void 0,a:void 0}),e})();Di(["click"]);var Sv=mt("<div tabindex=-1 style=position:absolute>"),Ev=mt("<div class=m-2 style=cursor:pointer>");const bv=i=>{let[e,t]=Zs({showingPalette:!1}),[n,s]=en(),r=$e(()=>{if(i.selectedColourById==null)return"";let o=i.colours.find(({id:l})=>l===i.selectedColourById);return o==null?"":`#${o.colour.getHexString()}`}),a=()=>{let o=n();if(o==null)return;let[l,c]=en();pu(()=>{l()?.focus()});let u=o.getBoundingClientRect();return(()=>{var h=Sv();h.$$focusout=()=>{t("showingPalette",!1)};var f=c;return typeof f=="function"?Xr(f,h):c=h,vn(h,Ht(yv,{numColumns:8,get squareSize(){return i.squareSize},get colours(){return i.colours},get addColour(){return i.addColour},get removeColour(){return i.removeColour},get selectedColourById(){return i.selectedColourById},setSelectedColour:d=>{i.setSelectedColour(d),t("showingPalette",!1)}})),tn(d=>{var g=`${u.right}px`,_=`${u.top}px`;return g!==d.e&&Mt(h,"left",d.e=g),_!==d.t&&Mt(h,"top",d.t=_),d},{e:void 0,t:void 0}),h})()};return(()=>{var o=Ev();o.$$click=()=>{t("showingPalette",!0)};var l=s;return typeof l=="function"?Xr(l,o):s=o,vn(o,Ht(As,{get when(){return e.showingPalette},get children(){return Ht($h,{get children(){return Ht(a,{})}})}})),tn(c=>{var u=`${i.squareSize}px`,h=`${i.squareSize}px`,f=r();return u!==c.e&&Mt(o,"width",c.e=u),h!==c.t&&Mt(o,"height",c.t=h),f!==c.a&&Mt(o,"background-color",c.a=f),c},{e:void 0,t:void 0,a:void 0}),o})()};Di(["focusout","click"]);const io=[[.5,0,0],[1,0,.5],[.5,0,1],[0,0,.5],[.5,1,0],[1,1,.5],[.5,1,1],[0,1,.5],[0,.5,0],[1,.5,0],[1,.5,1],[0,.5,1]],so=[[0,1],[1,2],[3,2],[0,3],[4,5],[5,6],[7,6],[4,7],[0,4],[1,5],[2,6],[3,7]],Tv=[[],[0,8,3],[0,1,9],[1,8,3,9,8,1],[1,2,10],[0,8,3,1,2,10],[9,2,10,0,2,9],[2,8,3,2,10,8,10,9,8],[3,11,2],[0,11,2,8,11,0],[1,9,0,2,3,11],[1,11,2,1,9,11,9,8,11],[3,10,1,11,10,3],[0,10,1,0,8,10,8,11,10],[3,9,0,3,11,9,11,10,9],[9,8,10,10,8,11],[4,7,8],[4,3,0,7,3,4],[0,1,9,8,4,7],[4,1,9,4,7,1,7,3,1],[1,2,10,8,4,7],[3,4,7,3,0,4,1,2,10],[9,2,10,9,0,2,8,4,7],[2,10,9,2,9,7,2,7,3,7,9,4],[8,4,7,3,11,2],[11,4,7,11,2,4,2,0,4],[9,0,1,8,4,7,2,3,11],[4,7,11,9,4,11,9,11,2,9,2,1],[3,10,1,3,11,10,7,8,4],[1,11,10,1,4,11,1,0,4,7,11,4],[4,7,8,9,0,11,9,11,10,11,0,3],[4,7,11,4,11,9,9,11,10],[9,5,4],[9,5,4,0,8,3],[0,5,4,1,5,0],[8,5,4,8,3,5,3,1,5],[1,2,10,9,5,4],[3,0,8,1,2,10,4,9,5],[5,2,10,5,4,2,4,0,2],[2,10,5,3,2,5,3,5,4,3,4,8],[9,5,4,2,3,11],[0,11,2,0,8,11,4,9,5],[0,5,4,0,1,5,2,3,11],[2,1,5,2,5,8,2,8,11,4,8,5],[10,3,11,10,1,3,9,5,4],[4,9,5,0,8,1,8,10,1,8,11,10],[5,4,0,5,0,11,5,11,10,11,0,3],[5,4,8,5,8,10,10,8,11],[9,7,8,5,7,9],[9,3,0,9,5,3,5,7,3],[0,7,8,0,1,7,1,5,7],[1,5,3,3,5,7],[9,7,8,9,5,7,10,1,2],[10,1,2,9,5,0,5,3,0,5,7,3],[8,0,2,8,2,5,8,5,7,10,5,2],[2,10,5,2,5,3,3,5,7],[7,9,5,7,8,9,3,11,2],[9,5,7,9,7,2,9,2,0,2,7,11],[2,3,11,0,1,8,1,7,8,1,5,7],[11,2,1,11,1,7,7,1,5],[9,5,8,8,5,7,10,1,3,10,3,11],[5,7,0,5,0,9,7,11,0,1,0,10,11,10,0],[11,10,0,11,0,3,10,5,0,8,0,7,5,7,0],[11,10,5,7,11,5],[10,6,5],[0,8,3,5,10,6],[9,0,1,5,10,6],[1,8,3,1,9,8,5,10,6],[1,6,5,2,6,1],[1,6,5,1,2,6,3,0,8],[9,6,5,9,0,6,0,2,6],[5,9,8,5,8,2,5,2,6,3,2,8],[2,3,11,10,6,5],[11,0,8,11,2,0,10,6,5],[0,1,9,2,3,11,5,10,6],[5,10,6,1,9,2,9,11,2,9,8,11],[6,3,11,6,5,3,5,1,3],[0,8,11,0,11,5,0,5,1,5,11,6],[3,11,6,0,3,6,0,6,5,0,5,9],[6,5,9,6,9,11,11,9,8],[5,10,6,4,7,8],[4,3,0,4,7,3,6,5,10],[1,9,0,5,10,6,8,4,7],[10,6,5,1,9,7,1,7,3,7,9,4],[6,1,2,6,5,1,4,7,8],[1,2,5,5,2,6,3,0,4,3,4,7],[8,4,7,9,0,5,0,6,5,0,2,6],[7,3,9,7,9,4,3,2,9,5,9,6,2,6,9],[3,11,2,7,8,4,10,6,5],[5,10,6,4,7,2,4,2,0,2,7,11],[0,1,9,4,7,8,2,3,11,5,10,6],[9,2,1,9,11,2,9,4,11,7,11,4,5,10,6],[8,4,7,3,11,5,3,5,1,5,11,6],[5,1,11,5,11,6,1,0,11,7,11,4,0,4,11],[0,5,9,0,6,5,0,3,6,11,6,3,8,4,7],[6,5,9,6,9,11,4,7,9,7,11,9],[10,4,9,6,4,10],[4,10,6,4,9,10,0,8,3],[10,0,1,10,6,0,6,4,0],[8,3,1,8,1,6,8,6,4,6,1,10],[1,4,9,1,2,4,2,6,4],[3,0,8,1,2,9,2,4,9,2,6,4],[0,2,4,4,2,6],[8,3,2,8,2,4,4,2,6],[10,4,9,10,6,4,11,2,3],[0,8,2,2,8,11,4,9,10,4,10,6],[3,11,2,0,1,6,0,6,4,6,1,10],[6,4,1,6,1,10,4,8,1,2,1,11,8,11,1],[9,6,4,9,3,6,9,1,3,11,6,3],[8,11,1,8,1,0,11,6,1,9,1,4,6,4,1],[3,11,6,3,6,0,0,6,4],[6,4,8,11,6,8],[7,10,6,7,8,10,8,9,10],[0,7,3,0,10,7,0,9,10,6,7,10],[10,6,7,1,10,7,1,7,8,1,8,0],[10,6,7,10,7,1,1,7,3],[1,2,6,1,6,8,1,8,9,8,6,7],[2,6,9,2,9,1,6,7,9,0,9,3,7,3,9],[7,8,0,7,0,6,6,0,2],[7,3,2,6,7,2],[2,3,11,10,6,8,10,8,9,8,6,7],[2,0,7,2,7,11,0,9,7,6,7,10,9,10,7],[1,8,0,1,7,8,1,10,7,6,7,10,2,3,11],[11,2,1,11,1,7,10,6,1,6,7,1],[8,9,6,8,6,7,9,1,6,11,6,3,1,3,6],[0,9,1,11,6,7],[7,8,0,7,0,6,3,11,0,11,6,0],[7,11,6],[7,6,11],[3,0,8,11,7,6],[0,1,9,11,7,6],[8,1,9,8,3,1,11,7,6],[10,1,2,6,11,7],[1,2,10,3,0,8,6,11,7],[2,9,0,2,10,9,6,11,7],[6,11,7,2,10,3,10,8,3,10,9,8],[7,2,3,6,2,7],[7,0,8,7,6,0,6,2,0],[2,7,6,2,3,7,0,1,9],[1,6,2,1,8,6,1,9,8,8,7,6],[10,7,6,10,1,7,1,3,7],[10,7,6,1,7,10,1,8,7,1,0,8],[0,3,7,0,7,10,0,10,9,6,10,7],[7,6,10,7,10,8,8,10,9],[6,8,4,11,8,6],[3,6,11,3,0,6,0,4,6],[8,6,11,8,4,6,9,0,1],[9,4,6,9,6,3,9,3,1,11,3,6],[6,8,4,6,11,8,2,10,1],[1,2,10,3,0,11,0,6,11,0,4,6],[4,11,8,4,6,11,0,2,9,2,10,9],[10,9,3,10,3,2,9,4,3,11,3,6,4,6,3],[8,2,3,8,4,2,4,6,2],[0,4,2,4,6,2],[1,9,0,2,3,4,2,4,6,4,3,8],[1,9,4,1,4,2,2,4,6],[8,1,3,8,6,1,8,4,6,6,10,1],[10,1,0,10,0,6,6,0,4],[4,6,3,4,3,8,6,10,3,0,3,9,10,9,3],[10,9,4,6,10,4],[4,9,5,7,6,11],[0,8,3,4,9,5,11,7,6],[5,0,1,5,4,0,7,6,11],[11,7,6,8,3,4,3,5,4,3,1,5],[9,5,4,10,1,2,7,6,11],[6,11,7,1,2,10,0,8,3,4,9,5],[7,6,11,5,4,10,4,2,10,4,0,2],[3,4,8,3,5,4,3,2,5,10,5,2,11,7,6],[7,2,3,7,6,2,5,4,9],[9,5,4,0,8,6,0,6,2,6,8,7],[3,6,2,3,7,6,1,5,0,5,4,0],[6,2,8,6,8,7,2,1,8,4,8,5,1,5,8],[9,5,4,10,1,6,1,7,6,1,3,7],[1,6,10,1,7,6,1,0,7,8,7,0,9,5,4],[4,0,10,4,10,5,0,3,10,6,10,7,3,7,10],[7,6,10,7,10,8,5,4,10,4,8,10],[6,9,5,6,11,9,11,8,9],[3,6,11,0,6,3,0,5,6,0,9,5],[0,11,8,0,5,11,0,1,5,5,6,11],[6,11,3,6,3,5,5,3,1],[1,2,10,9,5,11,9,11,8,11,5,6],[0,11,3,0,6,11,0,9,6,5,6,9,1,2,10],[11,8,5,11,5,6,8,0,5,10,5,2,0,2,5],[6,11,3,6,3,5,2,10,3,10,5,3],[5,8,9,5,2,8,5,6,2,3,8,2],[9,5,6,9,6,0,0,6,2],[1,5,8,1,8,0,5,6,8,3,8,2,6,2,8],[1,5,6,2,1,6],[1,3,6,1,6,10,3,8,6,5,6,9,8,9,6],[10,1,0,10,0,6,9,5,0,5,6,0],[0,3,8,5,6,10],[10,5,6],[11,5,10,7,5,11],[11,5,10,11,7,5,8,3,0],[5,11,7,5,10,11,1,9,0],[10,7,5,10,11,7,9,8,1,8,3,1],[11,1,2,11,7,1,7,5,1],[0,8,3,1,2,7,1,7,5,7,2,11],[9,7,5,9,2,7,9,0,2,2,11,7],[7,5,2,7,2,11,5,9,2,3,2,8,9,8,2],[2,5,10,2,3,5,3,7,5],[8,2,0,8,5,2,8,7,5,10,2,5],[9,0,1,5,10,3,5,3,7,3,10,2],[9,8,2,9,2,1,8,7,2,10,2,5,7,5,2],[1,3,5,3,7,5],[0,8,7,0,7,1,1,7,5],[9,0,3,9,3,5,5,3,7],[9,8,7,5,9,7],[5,8,4,5,10,8,10,11,8],[5,0,4,5,11,0,5,10,11,11,3,0],[0,1,9,8,4,10,8,10,11,10,4,5],[10,11,4,10,4,5,11,3,4,9,4,1,3,1,4],[2,5,1,2,8,5,2,11,8,4,5,8],[0,4,11,0,11,3,4,5,11,2,11,1,5,1,11],[0,2,5,0,5,9,2,11,5,4,5,8,11,8,5],[9,4,5,2,11,3],[2,5,10,3,5,2,3,4,5,3,8,4],[5,10,2,5,2,4,4,2,0],[3,10,2,3,5,10,3,8,5,4,5,8,0,1,9],[5,10,2,5,2,4,1,9,2,9,4,2],[8,4,5,8,5,3,3,5,1],[0,4,5,1,0,5],[8,4,5,8,5,3,9,0,5,0,3,5],[9,4,5],[4,11,7,4,9,11,9,10,11],[0,8,3,4,9,7,9,11,7,9,10,11],[1,10,11,1,11,4,1,4,0,7,4,11],[3,1,4,3,4,8,1,10,4,7,4,11,10,11,4],[4,11,7,9,11,4,9,2,11,9,1,2],[9,7,4,9,11,7,9,1,11,2,11,1,0,8,3],[11,7,4,11,4,2,2,4,0],[11,7,4,11,4,2,8,3,4,3,2,4],[2,9,10,2,7,9,2,3,7,7,4,9],[9,10,7,9,7,4,10,2,7,8,7,0,2,0,7],[3,7,10,3,10,2,7,4,10,1,10,0,4,0,10],[1,10,2,8,7,4],[4,9,1,4,1,7,7,1,3],[4,9,1,4,1,7,0,8,1,8,7,1],[4,0,3,7,4,3],[4,8,7],[9,10,8,10,11,8],[3,0,9,3,9,11,11,9,10],[0,1,10,0,10,8,8,10,11],[3,1,10,11,3,10],[1,2,11,1,11,9,9,11,8],[3,0,9,3,9,11,1,2,9,2,11,9],[0,2,11,8,0,11],[3,2,11],[2,3,8,2,8,10,10,8,9],[9,10,2,0,9,2],[2,3,8,2,8,10,0,1,8,1,10,8],[1,10,2],[1,3,8,9,1,8],[0,9,1],[0,3,8],[]];function wv(i){let e=new Bt;const t=new Float32Array(i.points),n=new pt(t,3);return e.setAttribute("position",n),e.setIndex(i.triangles),e.computeVertexNormals(),e}function Av(i){let e=Math.ceil((i.maxX-i.minX)/i.cubeSize),t=Math.ceil((i.maxY-i.minY)/i.cubeSize),n=Math.ceil((i.maxZ-i.minZ)/i.cubeSize),s=.5*(i.minX+i.maxX-e*i.cubeSize),r=.5*(i.minY+i.maxY-t*i.cubeSize),a=.5*(i.minZ+i.maxZ-n*i.cubeSize),o=i.sdf,l=[0,0,0,0,0,0,0,0],c=[],u=[],h=new Map,f=0,d=0,g=0,_=(m,p,M)=>{let E=f+m,S=d+p,T=g+M,A=`${E}_${S}_${T}`,w=h.get(A);return w!=null||(w=c.length/3,c.push(E,S,T),h.set(A,w)),w};f=s;for(let m=0;m<e;++m,f+=i.cubeSize){let p=f+i.cubeSize;d=r;for(let M=0;M<t;++M,d+=i.cubeSize){let E=d+i.cubeSize;g=a;for(let S=0;S<n;++S,g+=i.cubeSize){let T=g+i.cubeSize;l[0]=o(f,d,g),l[1]=o(p,d,g),l[2]=o(p,d,T),l[3]=o(f,d,T),l[4]=o(f,E,g),l[5]=o(p,E,g),l[6]=o(p,E,T),l[7]=o(f,E,T);let A=0;for(let C=0,x=1;C<8;++C,x<<=1)l[C]<0&&(A|=x);let w=Tv[A];for(let C=0;C<w.length-2;C+=3){let x=io[w[C]],y=io[w[C+1]],R=io[w[C+2]];if(i.interpolate){const I=so[w[C]],N=so[w[C+1]],z=so[w[C+2]];let k=Math.abs(l[I[0]])/Math.abs(l[I[1]]-l[I[0]]),V=Math.abs(l[N[0]])/Math.abs(l[N[1]]-l[N[0]]),U=Math.abs(l[z[0]])/Math.abs(l[z[1]]-l[z[0]]),q=_(x[0]===.5?k:x[0],x[1]===.5?k:x[1],x[2]===.5?k:x[2]),ee=_(y[0]===.5?V:y[0],y[1]===.5?V:y[1],y[2]===.5?V:y[2]),H=_(R[0]===.5?U:R[0],R[1]===.5?U:R[1],R[2]===.5?U:R[2]);u.push(q,ee,H)}else{let I=_(x[0],x[1],x[2]),N=_(y[0],y[1],y[2]),z=_(R[0],R[1],R[2]);u.push(I,N,z)}}}}}return{points:c,triangles:u}}/*! For license information please see index.js.LICENSE.txt */var ol={d:(i,e)=>{for(var t in e)ol.o(e,t)&&!ol.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},o:(i,e)=>Object.prototype.hasOwnProperty.call(i,e)},dh={};ol.d(dh,{e:()=>Lv});var ro=function(i,e,t,n){return new(t||(t=Promise))((function(s,r){function a(c){try{l(n.next(c))}catch(u){r(u)}}function o(c){try{l(n.throw(c))}catch(u){r(u)}}function l(c){var u;c.done?s(c.value):(u=c.value,u instanceof t?u:new t((function(h){h(u)}))).then(a,o)}l((n=n.apply(i,[])).next())}))};class Rv{constructor(e,t={resolution:2048},n={},s=!1,r=!1,a=!1){this.THREE=e,this.packOptions=t,this.chartOptions=n,this.useNormals=s,this.timeUnwrap=r,this.logProgress=a,this._libraryLoaded=!1,this._isUnwrapping=!1,this.xAtlas=this._createXAtlas()}loadLibrary(e,t,n){return ro(this,void 0,void 0,(function*(){if(!this._libraryLoaded){for(yield new Promise(((s,r)=>{try{this.xAtlas.init(s,e,t,n)}catch(a){r(a)}}));!this.xAtlas.api||!(yield this.xAtlas.api.loaded);)yield new Promise((s=>setTimeout(s,100)));this._libraryLoaded=!0}}))}packAtlas(e,t="uv2",n="uv"){return ro(this,void 0,void 0,(function*(){if(!this._libraryLoaded)throw new Error("xatlas-three: library not loaded");if(!e)throw new Error("xatlas-three: nodeList argument not provided");if(e.length<1)throw new Error("xatlas-three: nodeList must have non-zero length");const s=this.chartOptions.useInputMeshUvs;for(;this._isUnwrapping;)console.log("xatlas-three: unwrapping another mesh, waiting 100 ms"),yield new Promise((c=>setTimeout(c,100)));this._isUnwrapping=!0,yield this.xAtlas.api.setProgressLogging(this.logProgress),yield this.xAtlas.api.createAtlas();let r=[],a="";for(let c of e){let{uuid:u,index:h,attributes:f}=c;const d=c.userData.worldScale||1;r.push(u),h&&f.position&&f.position.itemSize===3?(a="Mesh"+r.length+" added to atlas: "+u,this.timeUnwrap&&console.time(a),yield this.xAtlas.api.addMesh(h.array,f.position.array,f.normal?f.normal.array:void 0,f.uv?f.uv.array:void 0,u,this.useNormals,s,d),this.timeUnwrap&&console.timeEnd(a)):console.warn("xatlas-three: Geometry not supported: ",c)}a="Generated atlas with "+r.length+" meshes",this.timeUnwrap&&console.time(a);const o=yield this.xAtlas.api.generateAtlas(this.chartOptions,this.packOptions,!0);this.timeUnwrap&&console.timeEnd(a);let l=[];for(let c of o.meshes){let u=e.find((d=>d.uuid===c.mesh));if(!u){console.error("xatlas-three: Geometry not found: ",c.mesh);continue}c.vertex.vertices&&u.setAttribute("position",new this.THREE.BufferAttribute(c.vertex.vertices,3,!1)),c.vertex.normals&&u.setAttribute("normal",new this.THREE.BufferAttribute(c.vertex.normals,3,!0)),c.vertex.coords1&&u.setAttribute(t,new this.THREE.BufferAttribute(c.vertex.coords1,2,!1)),c.vertex.coords&&t!==n&&u.setAttribute(n,new this.THREE.BufferAttribute(c.vertex.coords,2,!1)),c.index&&u.setIndex(new this.THREE.BufferAttribute(c.index,1,!1)),c.subMeshes&&(u.userData.xAtlasSubMeshes=structuredClone(c.subMeshes));const h=c.oldIndexes,f=u.attributes;for(const d in f){if(d==="position"||d==="normal"||d===t||d===n)continue;const g=f[d],_=g.array.constructor,m=g.itemSize,p=g.array,M=new _(h.length*m),E=new this.THREE.BufferAttribute(M,m,g.normalized);E.gpuType=g.gpuType;for(let S=0,T=h.length;S<T;S++){const A=h[S];for(let w=0;w<m;w++)M[S*m+w]=p[A*m+w]}u.setAttribute(d,E)}l.push(u)}return yield this.xAtlas.api.destroyAtlas(),this._isUnwrapping=!1,{width:o.width,height:o.height,atlasCount:o.atlasCount,meshCount:o.meshCount,texelsPerUnit:o.texelsPerUnit,geometries:l,meshes:o.meshes}}))}unwrapGeometry(e,t="uv",n="uv2"){return ro(this,void 0,void 0,(function*(){return this.packAtlas([e],t,n)}))}}class Cv{}const ph=Symbol("Comlink.proxy"),Pv=Symbol("Comlink.endpoint"),Dv=Symbol("Comlink.releaseProxy"),ao=Symbol("Comlink.finalizer"),Br=Symbol("Comlink.thrown"),lu=i=>typeof i=="object"&&i!==null||typeof i=="function",mh=new Map([["proxy",{canHandle:i=>lu(i)&&i[ph],serialize(i){const{port1:e,port2:t}=new MessageChannel;return gh(i,e),[t,[t]]},deserialize:i=>(i.start(),xh(i))}],["throw",{canHandle:i=>lu(i)&&Br in i,serialize({value:i}){let e;return e=i instanceof Error?{isError:!0,value:{message:i.message,name:i.name,stack:i.stack}}:{isError:!1,value:i},[e,[]]},deserialize(i){throw i.isError?Object.assign(new Error(i.value.message),i.value):i.value}}]]);function gh(i,e=globalThis,t=["*"]){e.addEventListener("message",(function n(s){if(!s||!s.data)return;if(!(function(u,h){for(const f of u)if(h===f||f==="*"||f instanceof RegExp&&f.test(h))return!0;return!1})(t,s.origin))return void console.warn(`Invalid origin '${s.origin}' for comlink proxy`);const{id:r,type:a,path:o}=Object.assign({path:[]},s.data),l=(s.data.argumentList||[]).map(Ti);let c;try{const u=o.slice(0,-1).reduce(((f,d)=>f[d]),i),h=o.reduce(((f,d)=>f[d]),i);switch(a){case"GET":c=h;break;case"SET":u[o.slice(-1)[0]]=Ti(s.data.value),c=!0;break;case"APPLY":c=h.apply(u,l);break;case"CONSTRUCT":c=zr(new h(...l));break;case"ENDPOINT":{const{port1:f,port2:d}=new MessageChannel;gh(i,d),c=(function(g,_){return Mh.set(g,_),g})(f,[f])}break;case"RELEASE":c=void 0;break;default:return}}catch(u){c={value:u,[Br]:0}}Promise.resolve(c).catch((u=>({value:u,[Br]:0}))).then((u=>{const[h,f]=ra(u);e.postMessage(Object.assign(Object.assign({},h),{id:r}),f),a==="RELEASE"&&(e.removeEventListener("message",n),_h(e),ao in i&&typeof i[ao]=="function"&&i[ao]())})).catch((u=>{const[h,f]=ra({value:new TypeError("Unserializable return value"),[Br]:0});e.postMessage(Object.assign(Object.assign({},h),{id:r}),f)}))})),e.start&&e.start()}function _h(i){(function(e){return e.constructor.name==="MessagePort"})(i)&&i.close()}function xh(i,e){return ll(i,[],e)}function Tr(i){if(i)throw new Error("Proxy has been released and is not useable")}function vh(i){return Ji(i,{type:"RELEASE"}).then((()=>{_h(i)}))}const sa=new WeakMap,wr="FinalizationRegistry"in globalThis&&new FinalizationRegistry((i=>{const e=(sa.get(i)||0)-1;sa.set(i,e),e===0&&vh(i)}));function ll(i,e=[],t=function(){}){let n=!1;const s=new Proxy(t,{get(r,a){if(Tr(n),a===Dv)return()=>{(function(o){wr&&wr.unregister(o)})(s),vh(i),n=!0};if(a==="then"){if(e.length===0)return{then:()=>s};const o=Ji(i,{type:"GET",path:e.map((l=>l.toString()))}).then(Ti);return o.then.bind(o)}return ll(i,[...e,a])},set(r,a,o){Tr(n);const[l,c]=ra(o);return Ji(i,{type:"SET",path:[...e,a].map((u=>u.toString())),value:l},c).then(Ti)},apply(r,a,o){Tr(n);const l=e[e.length-1];if(l===Pv)return Ji(i,{type:"ENDPOINT"}).then(Ti);if(l==="bind")return ll(i,e.slice(0,-1));const[c,u]=cu(o);return Ji(i,{type:"APPLY",path:e.map((h=>h.toString())),argumentList:c},u).then(Ti)},construct(r,a){Tr(n);const[o,l]=cu(a);return Ji(i,{type:"CONSTRUCT",path:e.map((c=>c.toString())),argumentList:o},l).then(Ti)}});return(function(r,a){const o=(sa.get(a)||0)+1;sa.set(a,o),wr&&wr.register(r,a,r)})(s,i),s}function cu(i){const e=i.map(ra);return[e.map((n=>n[0])),(t=e.map((n=>n[1])),Array.prototype.concat.apply([],t))];var t}const Mh=new WeakMap;function zr(i){return Object.assign(i,{[ph]:!0})}function ra(i){for(const[e,t]of mh)if(t.canHandle(i)){const[n,s]=t.serialize(i);return[{type:"HANDLER",name:e,value:n},s]}return[{type:"RAW",value:i},Mh.get(i)||[]]}function Ti(i){switch(i.type){case"HANDLER":return mh.get(i.name).deserialize(i.value);case"RAW":return i.value}}function Ji(i,e,t){return new Promise((n=>{const s=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");i.addEventListener("message",(function r(a){a.data&&a.data.id&&a.data.id===s&&(i.removeEventListener("message",r),n(a.data))})),i.start&&i.start(),i.postMessage(Object.assign({id:s},e),t)}))}class Iv extends Cv{init(e,t,n,s){if(!this.api){if(!s)throw new Error("workerFilePath is required");(()=>{var r,a,o,l;r=this,a=void 0,l=function*(){const c=yield fetch(s).then((f=>f.blob())),u=URL.createObjectURL(c),h=new Worker(u,{type:"module"});this.api=yield new(xh(h))(zr((()=>{e(),URL.revokeObjectURL(u)})),zr(((f,d)=>f==="xatlas.wasm"?n:f+d)),zr(t))},new((o=void 0)||(o=Promise))((function(c,u){function h(g){try{d(l.next(g))}catch(_){u(_)}}function f(g){try{d(l.throw(g))}catch(_){u(_)}}function d(g){var _;g.done?c(g.value):(_=g.value,_ instanceof o?_:new o((function(m){m(_)}))).then(h,f)}d((l=l.apply(r,a||[])).next())}))})()}}}class Lv extends Rv{_createXAtlas(){return new Iv}}var Uv=dh.e,Ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var kr={exports:{}},Fv=kr.exports,uu;function Ov(){return uu||(uu=1,(function(i,e){(function(t,n){n()})(Fv,function(){function t(c,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function n(c,u,h){var f=new XMLHttpRequest;f.open("GET",c),f.responseType="blob",f.onload=function(){l(f.response,u,h)},f.onerror=function(){console.error("could not download file")},f.send()}function s(c){var u=new XMLHttpRequest;u.open("HEAD",c,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function r(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(u)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Ar=="object"&&Ar.global===Ar?Ar:void 0,o=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(c,u,h){var f=a.URL||a.webkitURL,d=document.createElement("a");u=u||c.name||"download",d.download=u,d.rel="noopener",typeof c=="string"?(d.href=c,d.origin===location.origin?r(d):s(d.href)?n(c,u,h):r(d,d.target="_blank")):(d.href=f.createObjectURL(c),setTimeout(function(){f.revokeObjectURL(d.href)},4e4),setTimeout(function(){r(d)},0))}:"msSaveOrOpenBlob"in navigator?function(c,u,h){if(u=u||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(t(c,h),u);else if(s(c))n(c,u,h);else{var f=document.createElement("a");f.href=c,f.target="_blank",setTimeout(function(){r(f)})}}:function(c,u,h,f){if(f=f||open("","_blank"),f&&(f.document.title=f.document.body.innerText="downloading..."),typeof c=="string")return n(c,u,h);var d=c.type==="application/octet-stream",g=/constructor/i.test(a.HTMLElement)||a.safari,_=/CriOS\/[\d]+/.test(navigator.userAgent);if((_||d&&g||o)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var E=m.result;E=_?E:E.replace(/^data:[^;]*;/,"data:attachment/file;"),f?f.location.href=E:location=E,f=null},m.readAsDataURL(c)}else{var p=a.URL||a.webkitURL,M=p.createObjectURL(c);f?f.location=M:location.href=M,f=null,setTimeout(function(){p.revokeObjectURL(M)},4e4)}});a.saveAs=l.saveAs=l,i.exports=l})})(kr)),kr.exports}var Bv=Ov();const zv=Nv(Bv);var kv=mt('<button class="btn btn-primary ml-2">March'),Vv=mt('<button class="btn btn-primary ml-2">Clear March'),Gv=mt('<button class="btn btn-primary ml-2">Bake'),Hv=mt('<button class="btn btn-primary ml-2">Export'),Wv=mt('<button class="btn btn-primary ml-2">Move'),Xv=mt('<button class="btn btn-primary ml-2">Rotate'),Yv=mt('<button class="btn btn-primary ml-2">Scale'),jv=mt('<div><div style=touch-action:none></div><div class="ml-2 mt-2"style=pointer-events:none><div style=pointer-events:auto><button class="btn btn-primary">Insert Primitive</button><button class="btn btn-primary ml-2">Draw</button><button class="btn btn-primary ml-2">Sculpt</button><button class="btn btn-primary ml-2">Paint</button><button class="btn btn-primary ml-2">Load</button><button class="btn btn-primary ml-2">Save</button><div class=join><label class=label>Px<input type=radio name=PxSize class="btn btn-sm join-item"aria-label=1x><input type=radio name=PxSize class="btn btn-sm join-item"aria-label=2x><input type=radio name=PxSize class="btn btn-sm join-item"aria-label=4x></label></div></div><div style=pointer-events:auto;width:fit-content></div><div style=pointer-events:auto;width:fit-content>');const qv=["#FFFFFF","#F2F2F2","#E6E6E6","#CCCCCC","#999999","#666666","#333333","#000000","#FFEBEE","#FFCDD2","#EF9A9A","#E57373","#EF5350","#F44336","#D32F2F","#B71C1C","#FFF3E0","#FFE0B2","#FFCC80","#FFB74D","#FFA726","#FF9800","#F57C00","#E65100","#FFFDE7","#FFF9C4","#FFF59D","#FFF176","#FFEE58","#FFEB3B","#FBC02D","#F57F17","#E8F5E9","#C8E6C9","#A5D6A7","#81C784","#66BB6A","#4CAF50","#388E3C","#1B5E20","#E0F7FA","#B2EBF2","#80DEEA","#4DD0E1","#26C6DA","#00BCD4","#0097A7","#006064","#E3F2FD","#BBDEFB","#90CAF9","#64B5F6","#42A5F5","#2196F3","#1976D2","#0D47A1","#F3E5F5","#E1BEE7","#CE93D8","#BA68C8","#AB47BC","#9C27B0","#7B1FA2","#4A148C"],$v=()=>{let i=qv.map((H,Y)=>{let he=new Ze().set(H);return{id:window.crypto.randomUUID(),colour:he}}),[e,t]=Zs({mkMode:ou,pointerPos:void 0,pointerDown:!1,pixelSize:4,palette:i,selectedColourById:i[50].id,showingMarchedGeometry:void 0});Rn(()=>{let H=e.showingMarchedGeometry;H?.dispose(),t("showingMarchedGeometry",void 0)});let n=$e(()=>{let H=e.selectedColourById;if(H!=null)return e.palette.find(({id:Y})=>Y===H)?.colour}),s=new wl,[r,a]=en(),o=H=>t("mkMode",()=>H),l={endMode:()=>o(ou),brickMap:s,canvasSize:()=>r()?.canvasSize(),pointerPos:()=>e.pointerPos,pointerDown:()=>e.pointerDown,currentColour:n,updateSdf:()=>{r()?.onBrickMapChanged()},updatePaint:()=>{r()?.onBrickMapPaintChanged()},rerender:()=>{r()?.rerender()},screenCoordsToRay(H,Y){r()?.screenCoordsToRay(H,Y)},*getThreeObjectsUnderScreenCoords(H){let Y=r()?.getThreeObjectsUnderScreenCoords(H);Y!=null&&(yield*Y)}},c=$e(()=>new e.mkMode(l)),u=()=>Ht(As,{get when(){return c().instructions},keyed:!0,children:H=>Ht(H,{})}),h=$e(()=>c().disableOrbit?.()??!1),f=$e(()=>c().overlayObject3D?.()),d=$e(()=>c().useTransformControlOnObject3D?.()),[g,_]=en(),[m,p]=en(!1),M=$e(()=>d()!=null),E,S=H=>{if(m())return;let Y=g();if(Y==null)return;Y.setPointerCapture(H.pointerId);let he=Y.getBoundingClientRect(),Me=H.clientX-he.left,ke=H.clientY-he.top;Bs(()=>{t("pointerPos",new Pe(Me,ke)),t("pointerDown",!0)}),E=performance.now()},T=H=>{if(m())return;let Y=g();if(Y==null)return;Y.setPointerCapture(H.pointerId);let he=Y.getBoundingClientRect(),Me=H.clientX-he.left,ke=H.clientY-he.top;t("pointerPos",new Pe(Me,ke))},A=H=>{if(m())return;let Y=g();if(Y==null)return;let he;E!=null&&(he=performance.now()-E),E=void 0,Y.releasePointerCapture(H.pointerId);let Me=Y.getBoundingClientRect();H.clientX-Me.left,H.clientY-Me.top,Bs(()=>{t("pointerDown",!1)}),he!=null&&he<300&&w()},w=()=>{c().onClick?.()},C=()=>{r()?.moveTransform()},x=()=>{r()?.rotateTransform()},y=()=>{r()?.scaleTransform()},R=async()=>{await fv("quicksave.dat",s),l.updateSdf()},I=async()=>{await dv("quicksave.dat",s)},N=()=>{let H=Av({sdf:(he,Me,ke)=>(128-s.get(512+he*10/2,512+Me*10/2,512+ke*10/2))/127,minX:-102,minY:-102,minZ:-102,maxX:102,maxY:102,maxZ:102,cubeSize:1,interpolate:!0});for(let he=0;he<H.points.length;++he)H.points[he]*=50;let Y=wv(H);t("showingMarchedGeometry",Y)},z=()=>{e.showingMarchedGeometry!=null&&(e.showingMarchedGeometry.dispose(),t("showingMarchedGeometry",void 0),l.rerender())},k=new rs({color:"blue"});Rn(()=>{k.dispose()});let V=$e(()=>{if(e.showingMarchedGeometry==null)return;let H=e.showingMarchedGeometry,Y=new ce(H,k);return l.rerender(),(async()=>{let he=new Uv({BufferAttribute:Ft});await he.loadLibrary((ke,Je)=>{console.log(ke,Je)},"https://cdn.jsdelivr.net/npm/xatlasjs@0.2.0/dist/xatlas.wasm","https://cdn.jsdelivr.net/npm/xatlasjs@0.2.0/dist/xatlas.js"),await he.unwrapGeometry(H);let Me=new mc().load("./uvdebug.jpg",()=>{k.dispose(),k=new rs({map:Me}),Y.material=k,l.rerender()})})(),Y}),U=async()=>{const H=r()?.renderer(),Y=V();if(!H||!Y)return;const he=`
      varying vec3 vWorldPosition;
      void main() {
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
      }
    `,Me=`
      ${s.writeShaderCode()}

      varying vec3 vWorldPosition;
      //vec3 colorFunc(vec3 p) { return vec3(sin(p.x), cos(p.y), sin(p.z)); }
      void main() { gl_FragColor = vec4(colour(vWorldPosition).rgb, 1.0); }
    `,ke=1024,Je=new An(ke,ke),Z=new $s(-1,1,1,-1,0,1);let Q={vertexShader:he,fragmentShader:Me,side:yn};s.initTexturesThreeJs(Q);const me=new Sn(Q),Le=Y.material,_e=H.getRenderTarget();Y.material=me,H.setRenderTarget(Je),H.render(Y,Z);let je=Yx(H,Je);if(je==null)return;H.setRenderTarget(_e);let St=await new mc().loadAsync(je);St.flipY=!1;const He=new rs({map:St});Y.material=He,Le&&Le.dispose(),me.dispose(),l.rerender()},q=async()=>{const H=V();if(H==null)return;let Y=window.prompt("Enter filename:");if(Y==null||(Y=Y.trim(),Y==""))return;Y.toLowerCase().endsWith(".glb")||(Y+=".glb");let Me=await new ea().parseAsync(H,{binary:!0});zv.saveAs(new Blob([Me],{type:"model/gltf-binary"}),Y)},ee=$e(()=>{let H=[f(),V()].filter(Y=>Y!==void 0);if(H.length!=0){if(H.length==1)return H[0];{let Y=new es;return Y.add(...H),Y}}});return(()=>{var H=jv(),Y=H.firstChild,he=Y.nextSibling,Me=he.firstChild,ke=Me.firstChild,Je=ke.nextSibling,Z=Je.nextSibling,Q=Z.nextSibling,me=Q.nextSibling,Le=me.nextSibling,_e=Le.nextSibling,je=_e.firstChild,St=je.firstChild,He=St.nextSibling,Qe=He.nextSibling,rt=Qe.nextSibling,Be=Me.nextSibling,Tt=Be.nextSibling;Mt(H,"position","relative"),Mt(H,"width","100%"),Mt(H,"height","100%"),Y.$$pointerup=A,Y.$$pointermove=T,Y.$$pointerdown=S;var L=_;return typeof L=="function"?Xr(L,Y):_=Y,Mt(Y,"position","absolute"),Mt(Y,"left","0"),Mt(Y,"top","0"),Mt(Y,"right","0"),Mt(Y,"bottom","0"),vn(Y,Ht(Fx,{brickMap:s,get hideBrickMap(){return V()!=null},onDragingEvent:Ae=>{p(Ae)},onInit:Ae=>{a(Ae)},get disableOrbit(){return h()},get overlayObject3D(){return ee()},get useTransformControlOnObject3D(){return d()},get pixelSize(){return e.pixelSize}})),Mt(he,"position","absolute"),Mt(he,"left","0"),Mt(he,"top","0"),ke.$$click=()=>o(ev),Je.$$click=()=>o(Gx),Z.$$click=()=>o(rv),Q.$$click=()=>o(gv),me.$$click=()=>R(),Le.$$click=()=>I(),vn(Me,Ht(As,{get when(){return e.showingMarchedGeometry==null},get children(){var Ae=kv();return Ae.$$click=()=>N(),Ae}}),_e),vn(Me,Ht(As,{get when(){return e.showingMarchedGeometry!=null},get children(){return[(()=>{var Ae=Vv();return Ae.$$click=()=>z(),Ae})(),(()=>{var Ae=Gv();return Ae.$$click=()=>U(),Ae})(),(()=>{var Ae=Hv();return Ae.$$click=()=>q(),Ae})()]}}),_e),vn(Me,Ht(As,{get when(){return M()},get children(){return[(()=>{var Ae=Wv();return Ae.$$click=()=>C(),Ae})(),(()=>{var Ae=Xv();return Ae.$$click=()=>x(),Ae})(),(()=>{var Ae=Yv();return Ae.$$click=()=>y(),Ae})()]}}),_e),He.addEventListener("change",Ae=>{Ae.currentTarget.checked&&t("pixelSize",1)}),Qe.addEventListener("change",Ae=>{Ae.currentTarget.checked&&t("pixelSize",2)}),rt.addEventListener("change",Ae=>{Ae.currentTarget.checked&&t("pixelSize",4)}),vn(Be,Ht(u,{})),vn(Tt,Ht(bv,{squareSize:20,get colours(){return e.palette},addColour:()=>({id:""}),removeColour:()=>{},get selectedColourById(){return e.selectedColourById},setSelectedColour:Ae=>t("selectedColourById",Ae)})),tn(()=>He.checked=e.pixelSize==1),tn(()=>Qe.checked=e.pixelSize==2),tn(()=>rt.checked=e.pixelSize==4),H})()};Di(["pointerdown","pointermove","pointerup","click"]);const Zv=document.getElementById("root");Xh(()=>Ht($v,{}),Zv);
