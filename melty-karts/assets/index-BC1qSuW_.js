(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class Xe extends Error{source;constructor(t){super(),this.source=t}}class el extends Error{source;constructor(t,e){super(e instanceof Error?e.message:String(e),{cause:e}),this.source=t}}const Rh=0,cr=1,Fs=2,Jo=4,ii=8,yr=16,An=32,Mr=64,Sr=128,cc=256,nl=512,pe=1,pn=2,ln=4,Cs=1,Bn=2,Fr=3,de={},ud={},hd="sp",Ch={},fd=Symbol("refresh");function Ph(i,t){const e=(i.i?.t?i.i.u?.o:i.i?.o)??-1;e>=i.o&&(i.o=e+1);const n=i.o,s=t.l[n];if(s===void 0)t.l[n]=i;else{const r=s.T;r.S=i,i.T=r,s.T=i}n>t.R&&(t.R=n)}function Qo(i,t){let e=i.O;e&(ii|Jo)||(e&cr?i.O=e&-4|Fs|ii:i.O=e|ii,e&yr||Ph(i,t))}function Lh(i,t){let e=i.O;e&(ii|Jo|yr)||(i.O=e|yr,Ph(i,t))}function Or(i,t){const e=i.O;if(!(e&(ii|yr)))return;i.O=e&-25;const n=i.o;if(i.T===i)t.l[n]=void 0;else{const s=i.S,r=t.l[n],o=s??r;i===r?t.l[n]=s:i.T.S=s,o.T=i.T}i.T=i,i.S=void 0}function dd(i){if(!i._){i._=!0;for(let t=0;t<=i.R;t++)for(let e=i.l[t];e!==void 0;e=e.S)e.O&ii&&Bo(e)}}function Bo(i,t=Fs){const e=i.O;if(!((e&(cr|Fs))>=t)){i.O=e&-4|t;for(let n=i.I;n!==null;n=n.h)Bo(n.p,cr);if(i.A!==null)for(let n=i.A;n!==null;n=n.N)for(let s=n.I;s!==null;s=s.h)Bo(s.p,cr)}}function Ao(i,t){for(i._=!1,i.P=0;i.P<=i.R;i.P++){let e=i.l[i.P];for(;e!==void 0;)e.O&ii?t(e):pd(e,i),e=i.l[i.P]}i.R=0}function pd(i,t){Or(i,t);let e=i.o;for(let n=i.C;n;n=n.D){const s=n.m,r=s.V||s;r.L&&r.o>=e&&(e=r.o+1)}if(i.o!==e){i.o=e;for(let n=i.I;n!==null;n=n.h)Lh(n.p,t)}}const Xr=new Set,Ie={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0},mn={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0};let Oe=0,Ht=null,Er=!1,Br=!1,Ro=null;function md(i){return!!Ro?.has(i)}function qr(i){for(const t of Ai){if(t.U||t.k.size>0)continue;const e=t.G[i-1];e.length&&(t.G[i-1]=[],zo(e,i))}}function gd(i){for(let t=i.I;t!==null;t=t.h){const e=t.p;if(!e.W)continue;if(e.W===Fr){e.H||(e.H=!0,e.F.enqueue(Bn,e.M));continue}const n=e.O&An?mn:Ie;n.P>e.o&&(n.P=e.o),Qo(e,n)}}function pi(i){Br=i}function _d(i,t){t.j=i,i.$.push(...t.$);for(const e of Ai)e.K===t&&(e.K=i);i.Y.push(...t.Y);for(const e of t.Z)i.Z.add(e);for(const[e,n]of t.B){let s=i.B.get(e);s||i.B.set(e,s=new Set);for(const r of n)s.add(r)}}function xd(i){for(let t=0;t<i.length;t++){const e=i[t];e.q=void 0,e.X!==de&&(e.J=e.X,e.X=de);const n=e.ee;e.ee=de,n!==de&&e.J!==n&&Os(e,!0),e.K=null}i.length=0}function vd(i){for(const t of Ai)(i?t.K===i:!t.K)&&(t.U||(t.G[0].length&&zo(t.G[0],Cs),t.G[1].length&&zo(t.G[1],Bn)),t.te.q===t&&(t.te.q=void 0),t.k.clear(),t.G[0].length=0,t.G[1].length=0,Ai.delete(t),ko.delete(t.te))}function wi(){Er||(Er=!0,!Se.ne&&!Br&&queueMicrotask(il))}class yd{i=null;ie=[[],[]];re=[];created=Oe;addChild(t){this.re.push(t),t.i=this}removeChild(t){const e=this.re.indexOf(t);e>=0&&(this.re.splice(e,1),t.i=null)}notify(t,e,n,s){return this.i?this.i.notify(t,e,n,s):!1}run(t){if(this.ie[t-1].length){const e=this.ie[t-1];this.ie[t-1]=[],zo(e,t)}for(let e=0;e<this.re.length;e++)this.re[e].run?.(t)}enqueue(t,e){t&&(En?qe(En).G[t-1].push(e):this.ie[t-1].push(e)),wi()}stashQueues(t){t.ie[0].push(...this.ie[0]),t.ie[1].push(...this.ie[1]),this.ie=[[],[]];for(let e=0;e<this.re.length;e++){let n=this.re[e],s=t.re[e];s||(s={ie:[[],[]],re:[]},t.re[e]=s),n.stashQueues(s)}}restoreQueues(t){this.ie[0].push(...t.ie[0]),this.ie[1].push(...t.ie[1]);for(let e=0;e<t.re.length;e++){const n=t.re[e];let s=this.re[e];s&&s.restoreQueues(n)}}}class si extends yd{ne=!1;se=[];Y=[];Z=new Set;static oe;static ue;static ce=null;flush(){if(!this.ne){this.ne=!0;try{if(Ao(Ie,si.oe),Ht){if(!Sd(Ht)){const n=Ht;if(Ao(mn,si.oe),this.se=[],this.Y=[],this.Z=new Set,qr(Cs),qr(Bn),this.stashQueues(n.ae),Oe++,Er=Ie.R>=Ie.P,$c(n.se),Ht=null,!n.$.length&&n.Y.length){Ro=new Set;for(let s=0;s<n.Y.length;s++){const r=n.Y[s];r.L||r.le||(Ro.add(r),gd(r))}}try{ua(null,!0)}finally{Ro=null}return}this.se!==Ht.se&&this.se.push(...Ht.se),this.restoreQueues(Ht.ae),Xr.delete(Ht);const e=Ht;Ht=null,$c(this.se),ua(e)}else Xr.size&&Ao(mn,si.oe),ua();Oe++,Er=Ie.R>=Ie.P,qr(Cs),this.run(Cs),qr(Bn),this.run(Bn)}finally{this.ne=!1}}}notify(t,e,n,s){if(e&pe){if(n&pe){const r=s!==void 0?s:t.fe;if(Ht&&r){const o=r.source;let a=Ht.B.get(o);a||Ht.B.set(o,a=new Set);const c=a.size;a.add(t),a.size!==c&&wi()}}return!0}return!1}initTransition(t){if(t&&(t=Nh(t)),!(t&&t===Ht)&&!(!t&&Ht&&Ht.Ee===Oe)){if(!Ht)Ht=t??{Ee:Oe,se:[],B:new Map,Y:[],Z:new Set,$:[],ae:{ie:[[],[]],re:[]},j:!1};else if(t){const e=Ht;_d(t,e),Xr.delete(e),Ht=t}if(Xr.add(Ht),Ht.Ee=Oe,this.se!==Ht.se){for(let e=0;e<this.se.length;e++){const n=this.se[e];n.K=Ht,Ht.se.push(n)}this.se=Ht.se}if(this.Y!==Ht.Y){for(let e=0;e<this.Y.length;e++){const n=this.Y[e];n.K=Ht,Ht.Y.push(n)}this.Y=Ht.Y}for(const e of Ai)e.K||(e.K=Ht);if(this.Z!==Ht.Z){for(const e of this.Z)Ht.Z.add(e);this.Z=Ht.Z}}}}function Os(i,t=!1){const e=i.q||En,n=i.de!==void 0;for(let s=i.I;s!==null;s=s.h){if(n&&s.p.Te){s.p.O|=cc;continue}t&&e?(s.p.O|=Sr,Fh(s.p,e)):t&&(s.p.O|=Sr,s.p.q=void 0);const r=s.p;if(r.W===Fr){r.H||(r.H=!0,r.F.enqueue(Bn,r.M));continue}const o=s.p.O&An?mn:Ie;o.P>s.p.o&&(o.P=s.p.o),Qo(s.p,o)}}function jc(){const i=Se.se;for(let t=0;t<i.length;t++){const e=i[t];e.X!==de&&(e.J=e.X,e.X=de,e.W&&e.W!==Fr&&(e.H=!0)),e.Se&pe||(e.Se&=~ln),e.L&&si.ue(e,!1,!0)}i.length=0}function ua(i=null,t=!1){const e=!t;e&&jc(),t||Ih(Se),Ie.R>=Ie.P&&Ao(Ie,si.oe),e&&(jc(),xd(i?i.Y:Se.Y),i?i.Z:Se.Z,vd(i))}function Ih(i){for(const t of i.re)t.checkSources?.(),Ih(t)}function Dh(i){Se.Z.add(i),wi()}function $c(i){for(let t=0;t<i.length;t++)i[t].K=Ht}const Se=new si;function il(){if(!Se.ne)for(;Er||Ht;)Se.flush()}function zo(i,t){for(let e=0;e<i.length;e++)i[e](t)}function Md(i,t){if(i.O&(An|Mr))return!1;if(i.Re===t||i.Oe?.has(t))return!0;for(let e=i.C;e;e=e.D){let n=e.m;for(;n;){if(n===t||n.V===t)return!0;n=n._e}}return!!(i.Se&pe&&i.fe instanceof Xe&&i.fe.source===t)}function Sd(i){if(i.j)return!0;if(i.$.length)return!1;let t=!0;for(const[e,n]of i.B){let s=!1;for(const r of n){if(Md(r,e)){s=!0;break}n.delete(r)}if(!s)i.B.delete(e);else if(e.Se&pe&&e.fe?.source===e){t=!1;break}}if(t)for(let e=0;e<i.Y.length;e++){const n=i.Y[e];if(ta(n)&&"Se"in n&&n.Se&pe&&n.fe instanceof Xe&&n.fe.source!==n){t=!1;break}}return t&&(i.j=!0),t}function Nh(i){for(;i.j&&typeof i.j=="object";)i=i.j;return i}function Ed(i,t){const e=Ht;try{return Ht=Nh(i),t()}finally{Ht=e}}const ko=new WeakMap,Ai=new Set;function bd(i){let t=ko.get(i);if(t)return qe(t);const e=i._e,n=e?.q?qe(e.q):null;return t={te:i,k:new Set,G:[[],[]],U:null,K:Ht,Ie:n},ko.set(i,t),Ai.add(t),i.he=!1,t}function qe(i){for(;i.U;)i=i.U;return i}function Uh(i,t){if(i=qe(i),t=qe(t),i===t)return i;t.U=i;for(const e of t.k)i.k.add(e);return i.G[0].push(...t.G[0]),i.G[1].push(...t.G[1]),i}function br(i){const t=i.q;if(!t)return;const e=qe(t);if(Ai.has(e))return e;i.q=void 0}function nr(i){return br(i)?.K??i.K}function ta(i){return i.ee!==void 0&&i.ee!==de}function Fh(i,t){const e=qe(t),n=i.q;if(n){if(n.U){i.q=t;return}const s=qe(n);if(Ai.has(s)){s!==e&&!ta(i)&&(e.Ie&&qe(e.Ie)===s?i.q=t:s.Ie&&qe(s.Ie)===e||Uh(e,s));return}}i.q=t}function uc(i){const t=i.m,e=i.D,n=i.h,s=i.pe;return n!==null?n.pe=s:t.Ae=s,s!==null?s.h=n:(t.I=n,n===null&&(t.Ne?.(),t.L&&!t.Pe&&!(t.O&An)&&Td(t))),e}function Td(i){Or(i,i.O&An?mn:Ie);let t=i.C;for(;t!==null;)t=uc(t);i.C=null,zr(i,!0)}function Yr(i,t){const e=t.ge;if(e!==null&&e.m===i)return;let n=null;const s=t.O&Jo;if(s&&(n=e!==null?e.D:t.C,n!==null&&n.m===i)){t.ge=n;return}const r=i.Ae;if(r!==null&&r.p===t&&(!s||wd(r,t)))return;const o=t.ge=i.Ae={m:i,p:t,D:n,pe:r,h:null};e!==null?e.D=o:t.C=o,r!==null?r.h=o:i.I=o}function wd(i,t){const e=t.ge;if(e!==null){let n=t.C;do{if(n===i)return!0;if(n===e)break;n=n.D}while(n!==null)}return!1}function Oh(i){let t=i.Ce;for(;t;)t.O|=An,t.O&ii&&(Or(t,Ie),Qo(t,mn)),Oh(t),t=t.De}function zr(i,t=!1,e){if(i.O&Mr)return;t&&(i.O=Mr),t&&i.L&&(i.ye=null);let n=e?i.ve:i.Ce;for(;n;){const s=n.De;if(n.C){const r=n;Or(r,r.O&An?mn:Ie);let o=r.C;do o=uc(o);while(o!==null);r.C=null,r.ge=null}zr(n,!0),n=s}e?i.ve=null:(i.Ce=null,i.me=0),Ad(i,e)}function Ad(i,t){let e=t?i.we:i.Ve;if(e){if(Array.isArray(e))for(let n=0;n<e.length;n++){const s=e[n];s.call(s)}else e.call(e);t?i.we=null:i.Ve=null}}function Rd(i,t){let e=i;for(;e.be&&e.i;)e=e.i;if(e.id!=null)return Cd(e.id,e.me++);throw new Error("Cannot get child id from owner without an id")}function Bh(i){return Rd(i)}function Cd(i,t){const e=t.toString(36),n=e.length-1;return i+(n?String.fromCharCode(64+n):"")+e}function Ye(){return je?ie:null}function Pd(){return ie}function hc(i){return ie&&(ie.Ve?Array.isArray(ie.Ve)?ie.Ve.push(i):ie.Ve=[ie.Ve,i]:ie.Ve=i),i}function ur(i){const t=ie,e=i?.transparent??!1,n={id:i?.id??(e?t?.id:t?.id!=null?Bh(t):void 0),be:e||void 0,t:!0,u:t?.t?t.u:t,Ce:null,De:null,Ve:null,F:t?.F??Se,Le:t?.Le||Ch,me:0,we:null,ve:null,i:t,dispose(s=!0){zr(n,s)}};if(t){const s=t.Ce;s===null||(n.De=s),t.Ce=n}return n}function fc(i,t){const e=ur(t);return ws(e,()=>i(e.dispose))}function Ld(i,t){return i.Re===t||i.Oe?.has(t)?!1:i.Re?(i.Oe?i.Oe.add(t):i.Oe=new Set([i.Re,t]),i.Re=void 0,!0):(i.Re=t,!0)}function Id(i,t){return i.Re?i.Re!==t?!1:(i.Re=void 0,!0):i.Oe?.delete(t)?(i.Oe.size===1?(i.Re=i.Oe.values().next().value,i.Oe=void 0):i.Oe.size===0&&(i.Oe=void 0),!0):!1}function zh(i){i.Re=void 0,i.Oe?.clear(),i.Oe=void 0}function Vo(i,t,e){if(!t){i.fe=null;return}if(e instanceof Xe&&e.source===t){i.fe=e;return}const n=i.fe;(!(n instanceof Xe)||n.source!==t)&&(i.fe=new Xe(t))}function sl(i,t){for(let e=i.I;e!==null;e=e.h)t(e.p);for(let e=i.A;e!==null;e=e.N)for(let n=e.I;n!==null;n=n.h)t(n.p)}function Dd(i){let t=!1;const e=new Set,n=s=>{if(e.has(s)||!Id(s,i))return;e.add(s),s.Ee=Oe;const r=s.Re??s.Oe?.values().next().value;if(r)Vo(s,r),ts(s);else{if(s.Se&=~pe,Vo(s),ts(s),s.Ue){if(s.W===Fr){const o=s;o.H||(o.H=!0,o.F.enqueue(Bn,o.M))}else{const o=s.O&An?mn:Ie;o.P>s.o&&(o.P=s.o),Qo(s,o)}t=!0}s.Ue=!1}sl(s,n)};sl(i,n),t&&wi()}function kh(i,t,e){const n=typeof t=="object"&&t!==null,s=n&&on(()=>t[Symbol.asyncIterator]),r=!s&&n&&on(()=>typeof t.then=="function");if(!r&&!s)return i.ye=null,t;i.ye=t;let o;const a=l=>{i.ye===t&&(Se.initTransition(nr(i)),dc(i,l instanceof Xe?pe:pn,l),i.Ee=Oe)},c=(l,u)=>{if(i.ye!==t||i.O&(Fs|Sr))return;Se.initTransition(nr(i));const f=!!(i.Se&ln);Vh(i);const h=br(i);if(h&&h.k.delete(i),e)e(l);else if(i.ee!==void 0)i.ee!==void 0&&i.ee!==de?i.X=l:(i.J=l,Os(i)),i.Ee=Oe;else if(h){const d=i.W,m=i.J,y=i.ke;(!d&&f||!y||!y(l,m))&&(i.J=l,i.Ee=Oe,i.xe&&he(i.xe,l),Os(i,!0))}else he(i,()=>l);Dd(i),wi(),il(),u?.()};if(r){let l=!1,u=!0;if(t.then(f=>{u?(o=f,l=!0):c(f)},f=>{u||a(f)}),u=!1,!l)throw Se.initTransition(nr(i)),new Xe(ie)}if(s){const l=t[Symbol.asyncIterator]();let u=!1,f=!1;hc(()=>{if(!f){f=!0;try{const m=l.return?.();m&&typeof m.then=="function"&&m.then(void 0,()=>{})}catch{}}});const h=()=>{let m,y=!1,g=!0;return l.next().then(p=>{if(g)m=p,y=!0,p.done&&(f=!0);else{if(i.ye!==t)return;p.done?(f=!0,wi(),il()):c(p.value,h)}},p=>{!g&&i.ye===t&&(f=!0,a(p))}),g=!1,y&&!m.done?(o=m.value,u=!0,h()):y&&m.done},d=h();if(!u&&!d)throw Se.initTransition(nr(i)),new Xe(ie)}return o}function Vh(i,t=!1){zh(i),i.Ue=!1,i.Se=t?0:i.Se&ln,Vo(i),ts(i),i.Ge?.()}function dc(i,t,e,n,s){t===pn&&!(e instanceof el)&&!(e instanceof Xe)&&(e=new el(i,e));const r=t===pe&&e instanceof Xe?e.source:void 0,o=r===i,a=t===pe&&i.ee!==void 0&&!o,c=a&&ta(i);n||(t===pe&&r?(Ld(i,r),i.Se=pe|i.Se&ln,Vo(i,r,e)):(zh(i),i.Se=t|(t!==pn?i.Se&ln:0),i.fe=e),ts(i)),s&&!n&&Fh(i,s);const l=n||c,u=n||a?void 0:s;if(i.Ge){if(n&&t===pe)return;l?i.Ge(t,e):i.Ge();return}sl(i,f=>{f.Ee=Oe,(t===pe&&r&&f.Re!==r&&!f.Oe?.has(r)||t!==pe&&(f.fe!==e||f.Re||f.Oe))&&(!l&&!f.K&&Se.se.push(f),dc(f,t,e,l,u))})}let Nd=null;si.oe=Ti;si.ue=zr;let je=!1,Yi=!1,ie=null,En=null;function Ti(i,t=!1){const e=i.W;t||(i.K&&(!e||Ht)&&Ht!==i.K&&Se.initTransition(i.K),Or(i,i.O&An?mn:Ie),i.ye=null,i.K||e===Fr?zr(i):(Oh(i),i.we=i.Ve,i.ve=i.Ce,i.Ve=null,i.Ce=null,i.me=0));const n=!!(i.O&Sr),s=i.ee!==void 0&&i.ee!==de,r=!!(i.Se&pe),o=!!(i.Se&ln),a=ie;ie=i,i.ge=null,i.O=Jo,i.Ee=Oe;let c=i.X===de?i.J:i.X,l=i.o,u=je,f=En;if(je=!0,n){const h=br(i);h&&(En=h)}try{c=kh(i,i.L(c)),Vh(i,t);const h=br(i);h&&(h.k.delete(i),ts(h.te))}catch(h){if(h instanceof Xe&&En){const d=qe(En);d.te!==i&&(d.k.add(i),i.q=d,ts(d.te))}h instanceof Xe&&(i.Ue=!0),dc(i,h instanceof Xe?pe:pn,h,void 0,h instanceof Xe?i.q:void 0)}finally{je=u,i.O=Rh|(t?i.O&cc:0),ie=a}if(!i.fe){const h=i.ge;let d=h!==null?h.D:i.C;if(d!==null){do d=uc(d);while(d!==null);h!==null?h.D=null:i.C=null}const m=s?i.ee:i.X===de?i.J:i.X;if(!e&&o||!i.ke||!i.ke(m,c)){const g=s?i.ee:void 0;t||e&&Ht!==i.K||n?(i.J=c,s&&n&&(i.ee=c,i.X=c)):i.X=c,s&&!n&&r&&!i.he&&(i.ee=c),(!s||n||i.ee!==g)&&Os(i,n||s)}else if(s)i.X=c;else if(i.o!=l)for(let g=i.I;g!==null;g=g.h)Lh(g.p,g.p.O&An?mn:Ie)}En=f,(!t||i.Se&pe)&&!i.K&&!(Ht&&s)&&Se.se.push(i),i.K&&e&&Ht!==i.K&&Ed(i.K,()=>Ti(i))}function Gh(i){if(i.O&cr)for(let t=i.C;t;t=t.D){const e=t.m,n=e.V||e;if(n.L&&Gh(n),i.O&Fs)break}(i.O&(Fs|Sr)||i.fe&&i.Ee<Oe&&!i.ye)&&Ti(i),i.O=i.O&(cc|ii|yr)}function ea(i,t,e){const n=e?.transparent??!1,s={id:e?.id??(n?ie?.id:ie?.id!=null?Bh(ie):void 0),be:n||void 0,ke:e?.equals!=null?e.equals:Tr,le:!!e?.pureWrite,Ne:e?.unobserved,Ve:null,F:ie?.F??Se,Le:ie?.Le??Ch,me:0,L:i,J:t,o:0,A:null,S:void 0,T:null,C:null,ge:null,I:null,Ae:null,i:ie,De:null,Ce:null,O:e?.lazy?nl:Rh,Se:ln,Ee:Oe,X:de,we:null,ve:null,ye:null,K:null};s.T=s;const r=ie?.t?ie.u:ie;if(ie){const o=ie.Ce;o===null||(s.De=o),ie.Ce=s}return r&&(s.o=r.o+1),!e?.lazy&&Ti(s,!0),s}function hr(i,t,e=null){const n={ke:t?.equals!=null?t.equals:Tr,le:!!t?.pureWrite,He:!!t?.He,Ne:t?.unobserved,J:i,I:null,Ae:null,Ee:Oe,V:e,N:e?.A||null,X:de};return e&&(e.A=n),n}function Tr(i,t){return i===t}function on(i,t){if(!je)return i();const e=je;je=!1;try{return i()}finally{je=e}}function ji(i){let t=ie;t?.t&&(t=t.u),i.O&nl&&(i.O&=~nl,Ti(i,!0));const e=i.V||i;if(t&&je&&(i.L&&i.O&Mr&&Ti(i),Yr(i,t),e.L)){const n=i.O&An;e.o>=(n?mn.P:Ie.P)&&(Bo(t),dd(n?mn:Ie),Gh(e));const s=e.o;s>=t.o&&i.i!==t&&(t.o=s+1)}if(e.Se&pe)if(t&&!(Yi&&e.K&&Ht!==e.K))if(En){const n=e.q,s=qe(En);if(n&&qe(n)===s&&!ta(e))throw!je&&i!==t&&Yr(i,t),e.fe}else throw!je&&i!==t&&Yr(i,t),e.fe;else{if(t&&e!==i&&e.Se&ln)throw!je&&i!==t&&Yr(i,t),e.fe;if(!t&&e.Se&ln)throw e.fe}if(i.L&&i.Se&pn){if(i.Ee<Oe)return Ti(i),ji(i);throw i.fe}return i.ee!==void 0&&i.ee!==de?t&&Yi&&md(i)?i.J:i.ee:!t||En!==null&&(i.ee!==void 0||i.q||e===i&&Yi||e.Se&pe)||i.X===de||Yi&&i.K&&Ht!==i.K?i.J:i.X}function he(i,t){i.K&&Ht!==i.K&&Se.initTransition(i.K);const e=i.ee!==void 0&&!Br,n=i.ee!==void 0&&i.ee!==de,s=e?n?i.ee:i.J:i.X===de?i.J:i.X;if(typeof t=="function"&&(t=t(s)),!(!i.ke||!i.ke(s,t)||!!(i.Se&ln)))return e&&n&&i.L&&(Os(i,!0),wi()),t;if(e){const o=i.ee===de;o||Se.initTransition(nr(i)),o&&(i.X=i.J,Se.Y.push(i)),i.he=!0;const a=bd(i);i.q=a,i.ee=t}else i.X===de&&Se.se.push(i),i.X=t;return ts(i),i.xe&&he(i.xe,t),i.Ee=Oe,Os(i,e),wi(),t}function ws(i,t){const e=ie,n=je;ie=i,je=!1;try{return t()}finally{ie=e,je=n}}function Ud(i){const t=i,e=i.V;if(e&&i.X!==de)return!e.ye&&!(e.Se&pe);if(i.ee!==void 0&&i.ee!==de){if(t.Se&pe&&!(t.Se&ln))return!0;if(i._e){const n=i.q?qe(i.q):null;return!!(n&&n.k.size>0)}return!0}return i.ee!==void 0&&i.ee===de&&!i._e?!1:i.X!==de&&!(t.Se&ln)?!0:!!(t.Se&pe&&!(t.Se&ln))}function ts(i){if(i.Fe){const t=Ud(i),e=i.Fe;if(he(e,t),!t&&e.q){const n=br(i);if(n&&n.k.size>0){const s=qe(e.q);s!==n&&Uh(n,s)}ko.delete(e),e.q=void 0}}}function Fd(i,t=!0){const e=Yi;Yi=t;try{return i()}finally{Yi=e}}function Hh(i,t,e,n,s){let r=!1;const o=ea(s?.render?a=>Fd(()=>i(a)):i,n,{...s,equals:()=>(o.H=!o.fe,r&&o.F.enqueue(o.W,ha.bind(o)),!1),lazy:!0});o.Qe=n,o.Me=t,o.je=e,o.$e=void 0,o.W=s?.render?Cs:Bn,o.Ge=(a,c)=>{const l=a!==void 0?a:o.Se,u=c!==void 0?c:o.fe;if(l&pn){let f=u;if(o.F.notify(o,pe,0),o.W===Bn)try{return o.je?o.je(f,()=>{o.$e?.(),o.$e=void 0}):console.error(f)}catch(h){f=h}if(!o.F.notify(o,pn,pn))throw f}else o.W===Cs&&o.F.notify(o,pe|pn,l,u)},Ti(o,!0),!s?.defer&&(o.W===Bn?o.F.enqueue(o.W,ha.bind(o)):ha.call(o)),r=!0,hc(()=>o.$e?.())}function ha(){if(!(!this.H||this.O&Mr)){this.$e?.(),this.$e=void 0;try{const i=this.Me(this.J,this.Qe);this.$e=i}catch(i){if(this.fe=new el(this,i),this.Se|=pn,!this.F.notify(this,pn,pn))throw i}finally{this.Qe=this.J,this.H=!1}}}function na(i){return hc(i)}function Ps(i){const t=ji.bind(null,i);return t.$r=!0,t}function Od(i,t,e){if(typeof i=="function"){const s=ea(i,t,e);return[Ps(s),he.bind(null,s)]}const n=hr(i,t);return[Ps(n),he.bind(null,n)]}function pc(i,t,e){let n=ea(i,t,e);return Ps(n)}function Bd(i,t,e,n){Hh(i,t.effect||t,t.error,e,n)}function zd(i,t,e,n){Hh(i,t,void 0,e,{render:!0,...n})}function Zc(i){return i?.[$i]?.[ge]??i}function cs(i,t,e,n,s){return s&&n in s?s[n]:t&&n in t?t[n]:i[n]}function kd(i,t,e){const n=Yh(i,t),s=Object.keys(e);return Array.from(new Set([...n,...s]))}function bs(i,t,e){const n=t?.[$i];if(!n)return;const s=n[Fe],r=n[ue],o=n[le];let a=n[ge];if(!(i===s&&!r&&!o)){if((n[Wh]||rl).set(i,n[hn]),n[Fe]=i,n[ue]=void 0,Array.isArray(s)){let c=!1;const l=cs(s,r,a,"length",o);if(i.length&&l&&i[0]&&e(i[0])!=null){let u,f,h,d,m,y,g,p;for(h=0,d=Math.min(l,i.length);h<d&&((y=cs(s,r,a,h,o))===i[h]||y&&i[h]&&e(y)===e(i[h]));h++)bs(i[h],sn(y,n),e);const M=new Array(i.length),v=new Map;for(d=l-1,m=i.length-1;d>=h&&m>=h&&((y=cs(s,r,a,d,o))===i[m]||y&&i[m]&&e(y)===e(i[m]));d--,m--)M[m]=y;if(h>m||h>d){for(f=h;f<=m;f++)c=!0,n[ge][f]&&he(n[ge][f],sn(i[f],n));for(;f<i.length;f++){c=!0;const _=sn(M[f],n);n[ge][f]&&he(n[ge][f],_),bs(i[f],_,e)}c&&n[ge][bn]&&he(n[ge][bn],void 0),l!==i.length&&n[ge].length&&he(n[ge].length,i.length);return}for(g=new Array(m+1),f=m;f>=h;f--)y=i[f],p=y&&e(y),u=v.get(p),g[f]=u===void 0?-1:u,v.set(p,f);for(u=h;u<=d;u++)y=cs(s,r,a,u,o),p=y&&e(y),f=v.get(p),f!==void 0&&f!==-1&&(M[f]=y,f=g[f],v.set(p,f));for(f=h;f<i.length;f++)if(f in M){const _=sn(M[f],n);n[ge][f]&&he(n[ge][f],_),bs(i[f],_,e)}else n[ge][f]&&he(n[ge][f],sn(i[f],n));h<i.length&&(c=!0)}else if(i.length)for(let u=0,f=i.length;u<f;u++){const h=cs(s,r,a,u,o);Un(h)?bs(i[u],sn(h,n),e):n[ge][u]&&he(n[ge][u],i[u])}l!==i.length&&(c=!0,n[ge].length&&he(n[ge].length,i.length)),c&&n[ge][bn]&&he(n[ge][bn],void 0);return}if(a){const c=a[bn],l=c?kd(s,r,i):Object.keys(a);for(let u=0,f=l.length;u<f;u++){const h=l[u],d=a[h],m=Zc(cs(s,r,a,h,o));let y=Zc(i[h]);m!==y&&(!m||!Un(m)||!Un(y)||e(m)!=null&&e(m)!==e(y)?(c&&he(c,void 0),d&&he(d,Un(y)?sn(y,n):y)):bs(y,sn(m,n),e))}}if(a=n[Go]){const c=Object.keys(a);for(let l=0,u=c.length;l<u;l++){const f=c[l];he(a[f],f in i)}}}}function Kc(i,t){return e=>{if(e==null)throw new Error("Cannot reconcile null or undefined state");const n=typeof t=="string"?r=>r[t]:t;if(n(e)!==void 0&&n(i)!==n(e))throw new Error("Cannot reconcile states with different identity");bs(i,e,n)}}function Vd(i,t={},e){let n;const s=new WeakMap,r=c=>{c[Ho]=o,c[Wh]=s,Object.defineProperty(c,Ls,{get(){return n},configurable:!0})},o=c=>{if(s.has(c))return s.get(c);if(c[$i]?.[Ho]===o)return c;const l=Xh(c,jh,r);return s.set(c,l),l},a=o(t);return n=ea(()=>{const c=Pd();let l=!1,u;const f=new Proxy(a,Gd(()=>!l||c.ye===u));al(f,h=>{u=i(h),l=!0;const d=kh(c,u,m=>{m!==h&&m!==void 0&&al(a,Kc(m,e?.key||"id"))});d!==h&&d!==void 0&&Kc(d,e?.key||"id")(a)})}),n.Pe=!0,{store:a,node:n}}function Gd(i){const t={get(e,n){let s;mi(!0),pi(!0);try{s=e[n]}finally{mi(!1),pi(!1)}return typeof s=="object"&&s!==null?new Proxy(s,t):s},has(e,n){let s;mi(!0),pi(!0);try{s=n in e}finally{mi(!1),pi(!1)}return s},set(e,n,s){if(i&&!i())return!0;mi(!0),pi(!0);try{e[n]=s}finally{mi(!1),pi(!1)}return!0},deleteProperty(e,n){if(i&&!i())return!0;mi(!0),pi(!0);try{delete e[n]}finally{mi(!1),pi(!1)}return!0}};return t}const bn=Symbol(0),$i=Symbol(0),hn=Symbol(0),Mn=Symbol(0),Fe="v",ue="o",le="x",ge="n",Go="h",Ho="w",Wh="l",Ls="f",Is="p";function Xh(i,t=jh,e){let n;return Array.isArray(i)?(n=[],n.v=i):n={v:i},e&&e(n),n[hn]=new Proxy(n,t)}const rl=new WeakMap;function sn(i,t){if(t?.[Ho])return t[Ho](i,t);let e=i[hn]||rl.get(i);return e||rl.set(i,e=Xh(i)),e}function Un(i){return i!=null&&typeof i=="object"&&!Object.isFrozen(i)&&!(typeof Node<"u"&&i instanceof Node)}let qh=!1;function mi(i){qh=i}function js(i){return qh||!!Wi?.has(i)}function fr(i,t){let e=i[t];return e||(i[t]=e=Object.create(null)),e}function ol(i,t,e,n,s=Tr,r,o){if(i[t])return i[t];const a=hr(e,{equals:s,unobserved(){delete i[t]}},n);if(r&&(a.ee=de),o&&t in o){const c=o[t];a.de=c===void 0?ud:c}return i[t]=a}function Jc(i,t=bn){Ye()&&ji(ol(fr(i,ge),t,void 0,i[Ls],!1,i[Is]))}function Yh(i,t,e=!0){const n=on(()=>e?Object.keys(i):Reflect.ownKeys(i));if(!t)return n;const s=new Set(n),r=Reflect.ownKeys(t);for(const o of r)t[o]!==Mn?s.add(o):s.delete(o);return Array.from(s)}function Qc(i,t,e){if(t&&e in t){if(t[e]===Mn)return;const n=Reflect.getOwnPropertyDescriptor(t,e);if(n?.get||n?.set||!(e in i))return n}return Reflect.getOwnPropertyDescriptor(i,e)}function tu(i,t,e){if(i[Is]){const a=i[Ls];a?.K&&Se.initTransition(a.K)}const n=i[Fe],s=n[e],r=i[Is]&&!Br,o=r?le:ue;return r&&Dh(t),{base:s,overrideKey:o,state:n}}function fa(i,t,e,n){i[Go]?.[t]&&he(i[Go][t],e!=="delete");const s=fr(i,ge);e==="set"?s[t]&&he(s[t],()=>Un(n)?sn(n,i):n):e==="invalidate"?s[t]&&(he(s[t],{}),delete s[t]):s[t]&&he(s[t],void 0),s[bn]&&he(s[bn],void 0)}let Wi=null;const jh={get(i,t,e){if(t===$i)return i;if(t===hn)return e;if(t===fd)return i[Ls];if(t===bn)return Jc(i),e;const n=fr(i,ge),s=n[t],r=i[le]&&t in i[le],o=r||i[ue]&&t in i[ue],a=!!i[Fe][$i],c=r?i[le]:i[ue]&&t in i[ue]?i[ue]:i[Fe];if(!s){const u=Object.getOwnPropertyDescriptor(c,t);if(u&&u.get)return u.get.call(e)}if(js(e)){let u=s&&(o||!a)?s.ee!==void 0&&s.ee!==de?s.ee:s.X!==de?s.X:s.J:c[t];if(u===Mn&&(u=void 0),!Un(u))return u;const f=sn(u,i);return Wi?.add(f),f}let l=s?o||!a?ji(n[t]):(ji(n[t]),c[t]):c[t];if(l===Mn&&(l=void 0),!s){if(!o&&typeof l=="function"&&!c.hasOwnProperty(t)){let u;return!Array.isArray(i[Fe])&&(u=Object.getPrototypeOf(i[Fe]))&&u!==Object.prototype?l.bind(c):l}else if(Ye())return ji(ol(n,t,Un(l)?sn(l,i):l,i[Ls],Tr,i[Is],i[hd]))}return Un(l)?sn(l,i):l},has(i,t){if(t===hn||t===bn||t==="__proto__")return!0;const e=i[le]&&t in i[le]?i[le][t]!==Mn:i[ue]&&t in i[ue]?i[ue][t]!==Mn:t in i[Fe];return js(i[hn])||Ye()&&ji(ol(fr(i,Go),t,e,i[Ls],Tr,i[Is])),e},set(i,t,e){const n=i[hn];return js(n)&&on(()=>{const{base:s,overrideKey:r,state:o}=tu(i,n,t),a=i[le]&&t in i[le]?i[le][t]:i[ue]&&t in i[ue]?i[ue][t]:s,c=e?.[$i]?.[Fe]??e,l=Array.isArray(o)&&t!=="length",u=l?parseInt(t)+1:0,f=l&&(i[le]&&"length"in i[le]?i[le].length:i[ue]&&"length"in i[ue]?i[ue].length:o.length),h=l&&u>f?u:void 0;if(a===c&&h===void 0)return!0;if(c!==void 0&&c===s&&h===void 0)delete i[r]?.[t];else{const d=i[r]||(i[r]=Object.create(null));d[t]=c,h!==void 0&&(d.length=h)}if(fa(i,t,"set",c),Array.isArray(o)){const d=fr(i,ge),m=t==="length"?c:h;m!==void 0&&d.length&&he(d.length,m)}}),!0},defineProperty(i,t,e){const n=i[hn];return js(n)&&on(()=>{const{base:s,overrideKey:r}=tu(i,n,t),o="value"in e?{...e,value:e.value?.[$i]?.[Fe]??e.value}:e;Object.defineProperty(i[r]||(i[r]=Object.create(null)),t,o),fa(i,t,"invalidate")}),!0},deleteProperty(i,t){const e=i[le]?.[t]===Mn,n=i[ue]?.[t]===Mn;return js(i[hn])&&!e&&!n&&on(()=>{const s=i[Is]&&!Br,r=s?le:ue;s&&Dh(i[hn]);const o=i[le]&&t in i[le]?i[le][t]:i[ue]&&t in i[ue]?i[ue][t]:i[Fe][t];if(t in i[Fe]||i[ue]&&t in i[ue])(i[r]||(i[r]=Object.create(null)))[t]=Mn;else if(i[r]&&t in i[r])delete i[r][t];else return!0;fa(i,t,"delete")}),!0},ownKeys(i){Jc(i);let t=Yh(i[Fe],i[ue],!1);if(i[le]){const e=new Set(t);for(const n of Reflect.ownKeys(i[le]))i[le][n]!==Mn?e.add(n):e.delete(n);t=Array.from(e)}return t},getOwnPropertyDescriptor(i,t){if(t===hn)return{value:i[hn],writable:!0,configurable:!0};if(i[le]&&t in i[le]){if(i[le][t]===Mn)return;const e=Reflect.getOwnPropertyDescriptor(i[le],t);if(e?.get||e?.set||!(t in i[Fe]))return e;const n=Qc(i[Fe],i[ue],t);return n?{...n,value:i[le][t]}:{value:i[le][t],writable:!0,enumerable:!0,configurable:!0}}return Qc(i[Fe],i[ue],t)},getPrototypeOf(i){return Object.getPrototypeOf(i[Fe])}};function al(i,t){const e=Wi;Wi=new Set,Wi.add(i);try{const n=t(i);if(n!==i&&n!==void 0)if(Array.isArray(n)){for(let s=0,r=n.length;s<r;s++)i[s]=n[s];i.length=n.length}else new Set([...Object.keys(i),...Object.keys(n)]).forEach(r=>{r in n?i[r]=n[r]:delete i[r]})}finally{Wi.clear(),Wi=e}}function Hd(i,t,e){const n=typeof i=="function",s=n?Vd(i,t,e).store:sn(i);return[s,r=>al(s,r)]}const $h=Symbol(0);function ir(i,t,e=0){let n,s=i;if(e<t.length-1){n=t[e];const o=typeof n,a=Array.isArray(i);if(Array.isArray(n)){for(let c=0;c<n.length;c++)t[e]=n[c],ir(i,t,e);t[e]=n;return}else if(a&&o==="function"){for(let c=0;c<i.length;c++)n(i[c],c)&&(t[e]=c,ir(i,t,e));t[e]=n;return}else if(a&&o==="object"){const{from:c=0,to:l=i.length-1,by:u=1}=n;for(let f=c;f<=l;f+=u)t[e]=f,ir(i,t,e);t[e]=n;return}else if(e<t.length-2){ir(i[n],t,e+1);return}s=i[n]}let r=t[t.length-1];if(!(typeof r=="function"&&(r=r(s),r===s))&&!(n===void 0&&r==null))if(r===$h)delete i[n];else if(n===void 0||Un(s)&&Un(r)&&!Array.isArray(r)){const o=n!==void 0?i[n]:i,a=Object.keys(r);for(let c=0;c<a.length;c++){const l=a[c],u=Object.getOwnPropertyDescriptor(r,l);u.get||u.set?Object.defineProperty(o,l,u):o[l]=u.value}}else i[n]=r}Object.assign(function(...t){return e=>{ir(e,t)}},{DELETE:$h});function Wd(i,t,e){const s=t.length>1,r=t;return pc(Xd.bind({Ye:ur(),Ze:0,Be:i,qe:[],Xe:r,ze:[],Je:[],et:void 0,tt:void 0,nt:s?[]:void 0,it:e?.fallback}))}const da={pureWrite:!0};function Xd(){const i=this.Be()||[],t=i.length;return i[bn],ws(this.Ye,()=>{let e,n,s=this.tt?()=>(this.tt[n]=hr(i[n],da),this.nt&&(this.nt[n]=hr(n,da)),this.Xe(Ps(this.tt[n]),this.nt?Ps(this.nt[n]):void 0)):this.nt?()=>{const r=i[n];return this.nt[n]=hr(n,da),this.Xe(()=>r,Ps(this.nt[n]))}:()=>{const r=i[n];return this.Xe(()=>r)};if(t===0)this.Ze!==0&&(this.Ye.dispose(!1),this.Je=[],this.qe=[],this.ze=[],this.Ze=0,this.tt&&(this.tt=[]),this.nt&&(this.nt=[])),this.it&&!this.ze[0]&&(this.ze[0]=ws(this.Je[0]=ur(),this.it));else if(this.Ze===0){for(this.Je[0]&&this.Je[0].dispose(),this.ze=new Array(t),n=0;n<t;n++)this.qe[n]=i[n],this.ze[n]=ws(this.Je[n]=ur(),s);this.Ze=t}else{let r,o,a,c,l,u,f,h=new Array(t),d=new Array(t),m=this.tt?new Array(t):void 0,y=this.nt?new Array(t):void 0;for(r=0,o=Math.min(this.Ze,t);r<o&&(this.qe[r]===i[r]||this.tt&&eu(this.et,this.qe[r],i[r]));r++)this.tt&&he(this.tt[r],i[r]);for(o=this.Ze-1,a=t-1;o>=r&&a>=r&&(this.qe[o]===i[a]||this.tt&&eu(this.et,this.qe[o],i[a]));o--,a--)h[a]=this.ze[o],d[a]=this.Je[o],m&&(m[a]=this.tt[o]),y&&(y[a]=this.nt[o]);for(u=new Map,f=new Array(a+1),n=a;n>=r;n--)c=i[n],l=this.et?this.et(c):c,e=u.get(l),f[n]=e===void 0?-1:e,u.set(l,n);for(e=r;e<=o;e++)c=this.qe[e],l=this.et?this.et(c):c,n=u.get(l),n!==void 0&&n!==-1?(h[n]=this.ze[e],d[n]=this.Je[e],m&&(m[n]=this.tt[e]),y&&(y[n]=this.nt[e]),n=f[n],u.set(l,n)):this.Je[e].dispose();for(n=r;n<t;n++)n in h?(this.ze[n]=h[n],this.Je[n]=d[n],m&&(this.tt[n]=m[n],he(this.tt[n],i[n])),y&&(this.nt[n]=y[n],he(this.nt[n],n))):this.ze[n]=ws(this.Je[n]=ur(),s);this.ze=this.ze.slice(0,this.Ze=t),this.qe=i.slice(0)}}),this.ze}function eu(i,t,e){return i?i(t)===i(e):!0}function Zh(i,t){if(typeof i=="function"&&!i.length){if(t?.doNotUnwrap)return i;do i=i();while(typeof i=="function"&&!i.length)}if(!(t?.skipNonRendered&&(i==null||i===!0||i===!1||i===""))){if(Array.isArray(i)){let e=[];return ll(i,e,t)?()=>{let n=[];return ll(e,n,{...t,doNotUnwrap:!1}),n}:e}return i}}function ll(i,t=[],e){let n=null,s=!1;for(let r=0;r<i.length;r++)try{let o=i[r];if(typeof o=="function"&&!o.length){if(e?.doNotUnwrap){t.push(o),s=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?s=ll(o,t,e):e?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||t.push(o)}catch(o){if(!(o instanceof Xe))throw o;n=o}if(n)throw n;return s}const ri=(...i)=>pc(...i),_e=(...i)=>Od(...i),qd=(...i)=>Hd(...i),Kh=(...i)=>zd(...i),As=(...i)=>Bd(...i);function cl(i,t){return on(()=>i(t||{}))}const ia=(i,t,e)=>Kh(i,t,e,{transparent:!0}),Yd=(i,t)=>t?i.$r?i:pc(()=>i(),void 0,{transparent:!0}):ri(()=>i());function jd(i,t,e){let n=e.length,s=t.length,r=n,o=0,a=0,c=t[s-1].nextSibling,l=null;for(;o<s||a<r;){if(t[o]===e[a]){o++,a++;continue}for(;t[s-1]===e[r-1];)s--,r--;if(s===o){const u=r<n?a?e[a-1].nextSibling:e[r-a]:c;for(;a<r;)i.insertBefore(e[a++],u)}else if(r===a)for(;o<s;)(!l||!l.has(t[o]))&&t[o].remove(),o++;else if(t[o]===e[r-1]&&e[a]===t[s-1]){const u=t[--s].nextSibling;i.insertBefore(e[a++],t[o++].nextSibling),i.insertBefore(e[--r],u),t[s]=e[r]}else{if(!l){l=new Map;let f=a;for(;f<r;)l.set(e[f],f++)}const u=l.get(t[o]);if(u!=null)if(a<u&&u<r){let f=o,h=1,d;for(;++f<s&&f<r&&!((d=l.get(t[f]))==null||d!==u+h);)h++;if(h>u-a){const m=t[o];for(;a<u;)i.insertBefore(e[a++],m)}else i.replaceChild(e[a++],t[o++])}else o++;else t[o++].remove()}}}const nu="_$DX_DELEGATE";function $d(i,t,e,n={}){let s;return fc(r=>{s=r,t===document?Zh(i):hl(t,i(),t.firstChild?null:void 0,e)},{id:n.renderId}),()=>{s(),t.textContent=""}}function mc(i,t,e,n){let s;const r=a=>{const c=document.createElement("template");return c.innerHTML=i,c.content.firstChild};return a=>(s||(s=r())).cloneNode(!0)}function Jh(i,t=window.document){const e=t[nu]||(t[nu]=new Set);for(let n=0,s=i.length;n<s;n++){const r=i[n];e.has(r)||(e.add(r),t.addEventListener(r,Kd))}}function Pe(i,t,e){e!=null?i.style.setProperty(t,e):i.style.removeProperty(t)}function Zd(i,t){Array.isArray(i)?i.flat(1/0).forEach(e=>e&&e(t)):i(t)}function ul(i,t){const e=on(i);ws(null,()=>Zd(e,t))}function hl(i,t,e,n){const s=e!==void 0;if(s&&!n&&(n=[]),typeof t!="function"&&(t=su(t,n,s,!0),typeof t!="function"))return iu(i,t,n,e);if(t=Yd(t,!0),s&&n.length===0){const r=document.createTextNode("");i.insertBefore(r,e),n=[r]}ia(r=>su(t,r,s),(r,o)=>iu(i,r,o,e),n)}function Kd(i){let t=i.target;const e=`$$${i.type}`,n=i.target,s=i.currentTarget,r=c=>Object.defineProperty(i,"target",{configurable:!0,value:c}),o=()=>{const c=t[e];if(c&&!t.disabled){const l=t[`${e}Data`];if(l!==void 0?c.call(t,l,i):c.call(t,i),i.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(i.target)&&r(t.host),!0},a=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return t||document}}),i.composedPath){const c=i.composedPath();r(c[0]);for(let l=0;l<c.length-2&&(t=c[l],!!o());l++){if(t._$host){t=t._$host,a();break}if(t.parentNode===s)break}}else a();r(n)}function iu(i,t,e,n){if(t===e)return;const s=typeof t,r=n!==void 0;if(s==="string"||s==="number"){const o=typeof e;o==="string"||o==="number"?i.firstChild.data=t:i.textContent=t}else if(t===void 0)jr(i,e,n);else if(t.nodeType)Array.isArray(e)?jr(i,e,r?n:null,t):e===void 0||!i.firstChild?i.appendChild(t):i.replaceChild(t,i.firstChild);else if(Array.isArray(t)){const o=e&&Array.isArray(e);t.length===0?jr(i,e,n):o?e.length===0?ru(i,t,n):jd(i,e,t):(e&&jr(i),ru(i,t))}}function su(i,t,e,n){if(i=Zh(i,{skipNonRendered:!0,doNotUnwrap:n}),n&&typeof i=="function")return i;if(e&&!Array.isArray(i)&&(i=[i??""]),Array.isArray(i))for(let s=0,r=i.length;s<r;s++){const o=i[s],a=t&&t[s],c=typeof o;(c==="string"||c==="number")&&(i[s]=a&&a.nodeType===3&&a.data===""+o?a:document.createTextNode(o))}return i}function ru(i,t,e=null){for(let n=0,s=t.length;n<s;n++)i.insertBefore(t[n],e)}function jr(i,t,e,n){if(e===void 0)return i.textContent="";if(t.length){let s=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(n!==o){const a=o.parentNode===i;n&&!s&&!r?a?i.replaceChild(n,o):i.insertBefore(n,e):a&&o.remove()}else s=!0}}else n&&i.insertBefore(n,e)}function Jd(...i){return $d(...i)}const gc="183",Qd=0,ou=1,tp=2,Co=1,Qh=2,sr=3,Ri=0,Je=1,dn=2,oi=0,Ds=1,au=2,lu=3,cu=4,ep=5,Xi=100,np=101,ip=102,sp=103,rp=104,op=200,ap=201,lp=202,cp=203,fl=204,dl=205,up=206,hp=207,fp=208,dp=209,pp=210,mp=211,gp=212,_p=213,xp=214,pl=0,ml=1,gl=2,Bs=3,_l=4,xl=5,vl=6,yl=7,_c=0,vp=1,yp=2,zn=0,tf=1,ef=2,nf=3,sf=4,rf=5,of=6,af=7,lf=300,es=301,zs=302,pa=303,ma=304,sa=306,Ml=1e3,ni=1001,Sl=1002,Be=1003,Mp=1004,$r=1005,Ge=1006,ga=1007,Zi=1008,an=1009,cf=1010,uf=1011,wr=1012,xc=1013,Hn=1014,Fn=1015,ci=1016,vc=1017,yc=1018,Ar=1020,hf=35902,ff=35899,df=1021,pf=1022,wn=1023,ui=1026,Ki=1027,mf=1028,Mc=1029,ks=1030,Sc=1031,Ec=1033,Po=33776,Lo=33777,Io=33778,Do=33779,El=35840,bl=35841,Tl=35842,wl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37488,Ll=37489,Il=37490,Dl=37491,Nl=37808,Ul=37809,Fl=37810,Ol=37811,Bl=37812,zl=37813,kl=37814,Vl=37815,Gl=37816,Hl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,jl=36492,$l=36494,Zl=36495,Kl=36283,Jl=36284,Ql=36285,tc=36286,Sp=3200,bc=0,Ep=1,Si="",rn="srgb",Vs="srgb-linear",Wo="linear",re="srgb",us=7680,uu=519,bp=512,Tp=513,wp=514,Tc=515,Ap=516,Rp=517,wc=518,Cp=519,hu=35044,fu="300 es",On=2e3,Rr=2001;function Pp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lp(){const i=Xo("canvas");return i.style.display="block",i}const du={};function pu(...i){const t="THREE."+i.shift();console.log(t,...i)}function gf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=gf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function te(...i){i=gf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function qo(...i){const t=i.join(" ");t in du||(du[t]=!0,Gt(...i))}function Ip(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Dp={[pl]:ml,[gl]:vl,[_l]:yl,[Bs]:xl,[ml]:pl,[vl]:gl,[yl]:_l,[xl]:Bs};class Xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mu=1234567;const dr=Math.PI/180,Cr=180/Math.PI;function ss(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Ac(i,t){return(i%t+t)%t}function Np(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Up(i,t,e){return i!==t?(e-i)/(t-i):0}function pr(i,t,e){return(1-e)*i+e*t}function Fp(i,t,e,n){return pr(i,t,1-Math.exp(-e*n))}function Op(i,t=1){return t-Math.abs(Ac(i,t*2)-t)}function Bp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Vp(i,t){return i+Math.random()*(t-i)}function Gp(i){return i*(.5-Math.random())}function Hp(i){i!==void 0&&(mu=i);let t=mu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wp(i){return i*dr}function Xp(i){return i*Cr}function qp(i){return(i&i-1)===0&&i!==0}function Yp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $p(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*u,a*l);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ts(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gu={DEG2RAD:dr,RAD2DEG:Cr,generateUUID:ss,clamp:Zt,euclideanModulo:Ac,mapLinear:Np,inverseLerp:Up,lerp:pr,damp:Fp,pingpong:Op,smoothstep:Bp,smootherstep:zp,randInt:kp,randFloat:Vp,randFloatSpread:Gp,seededRandom:Hp,degToRad:Wp,radToDeg:Xp,isPowerOfTwo:qp,ceilPowerOfTwo:Yp,floorPowerOfTwo:jp,setQuaternionFromProperEuler:$p,normalize:He,denormalize:Ts};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],m=r[o+2],y=r[o+3];if(f!==y||c!==h||l!==d||u!==m){let g=c*h+l*d+u*m+f*y;g<0&&(h=-h,d=-d,m=-m,y=-y,g=-g);let p=1-a;if(g<.9995){const M=Math.acos(g),v=Math.sin(M);p=Math.sin(p*M)/v,a=Math.sin(a*M)/v,c=c*p+h*a,l=l*p+d*a,u=u*p+m*a,f=f*p+y*a}else{c=c*p+h*a,l=l*p+d*a,u=u*p+m*a,f=f*p+y*a;const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*f+c*d-l*h,t[e+1]=c*m+u*h+l*f-a*d,t[e+2]=l*m+u*d+a*h-c*f,t[e+3]=u*m-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new O,_u=new kn;class Xt{constructor(t,e,n,s,r,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],y=s[0],g=s[3],p=s[6],M=s[1],v=s[4],_=s[7],A=s[2],b=s[5],P=s[8];return r[0]=o*y+a*M+c*A,r[3]=o*g+a*v+c*b,r[6]=o*p+a*_+c*P,r[1]=l*y+u*M+f*A,r[4]=l*g+u*v+f*b,r[7]=l*p+u*_+f*P,r[2]=h*y+d*M+m*A,r[5]=h*g+d*v+m*b,r[8]=h*p+d*_+m*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,m=e*f+n*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return t[0]=f*y,t[1]=(s*l-u*n)*y,t[2]=(a*n-s*o)*y,t[3]=h*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new Xt,xu=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zp(){const i={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vs]:{primaries:t,whitePoint:n,transfer:Wo,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:re,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const ee=Zp();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hs;class Kp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hs===void 0&&(hs=Xo("canvas")),hs.width=t.width,hs.height=t.height;const s=hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jp=0;class Rc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let Qp=0;const ya=new O;class Ze extends Xs{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=ni,s=ni,r=Ge,o=Zi,a=wn,c=an,l=Ze.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=ss(),this.name="",this.source=new Rc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ml:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ml:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=lf;Ze.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,_=(d+1)/2,A=(p+1)/2,b=(u+h)/4,P=(f+y)/4,x=(m+g)/4;return v>_&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=P/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=x/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-y)/M,this.z=(h-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tm extends Xs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ze(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Rc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends tm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _f extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class em extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class me{constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,m,y,g){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,m,y,g)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,m,y,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,m=a*u,y=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+m*l,e[5]=h-y*l,e[9]=-a*c,e[2]=y-h*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,m=l*u,y=l*f;e[0]=h+y*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=y+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,m=l*u,y=l*f;e[0]=h-y*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,m=a*u,y=a*f;e[0]=c*u,e[4]=m*l-d,e[8]=h*l+y,e[1]=c*f,e[5]=y*l+h,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,m=a*c,y=a*l;e[0]=c*u,e[4]=y-h*f,e[8]=m*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+m,e[10]=h-y*f}else if(t.order==="XZY"){const h=o*c,d=o*l,m=a*c,y=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+y,e[5]=o*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nm,t,im)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),gi.crossVectors(n,tn),gi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),gi.crossVectors(n,tn)),gi.normalize(),Zr.crossVectors(tn,gi),s[0]=gi.x,s[4]=Zr.x,s[8]=tn.x,s[1]=gi.y,s[5]=Zr.y,s[9]=tn.y,s[2]=gi.z,s[6]=Zr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],y=n[6],g=n[10],p=n[14],M=n[3],v=n[7],_=n[11],A=n[15],b=s[0],P=s[4],x=s[8],T=s[12],N=s[1],I=s[5],U=s[9],V=s[13],Y=s[2],G=s[6],H=s[10],B=s[14],j=s[3],ot=s[7],ht=s[11],gt=s[15];return r[0]=o*b+a*N+c*Y+l*j,r[4]=o*P+a*I+c*G+l*ot,r[8]=o*x+a*U+c*H+l*ht,r[12]=o*T+a*V+c*B+l*gt,r[1]=u*b+f*N+h*Y+d*j,r[5]=u*P+f*I+h*G+d*ot,r[9]=u*x+f*U+h*H+d*ht,r[13]=u*T+f*V+h*B+d*gt,r[2]=m*b+y*N+g*Y+p*j,r[6]=m*P+y*I+g*G+p*ot,r[10]=m*x+y*U+g*H+p*ht,r[14]=m*T+y*V+g*B+p*gt,r[3]=M*b+v*N+_*Y+A*j,r[7]=M*P+v*I+_*G+A*ot,r[11]=M*x+v*U+_*H+A*ht,r[15]=M*T+v*V+_*B+A*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],y=t[7],g=t[11],p=t[15],M=c*d-l*h,v=a*d-l*f,_=a*h-c*f,A=o*d-l*u,b=o*h-c*u,P=o*f-a*u;return e*(y*M-g*v+p*_)-n*(m*M-g*A+p*b)+s*(m*v-y*A+p*P)-r*(m*_-y*b+g*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],y=t[13],g=t[14],p=t[15],M=e*a-n*o,v=e*c-s*o,_=e*l-r*o,A=n*c-s*a,b=n*l-r*a,P=s*l-r*c,x=u*y-f*m,T=u*g-h*m,N=u*p-d*m,I=f*g-h*y,U=f*p-d*y,V=h*p-d*g,Y=M*V-v*U+_*I+A*N-b*T+P*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/Y;return t[0]=(a*V-c*U+l*I)*G,t[1]=(s*U-n*V-r*I)*G,t[2]=(y*P-g*b+p*A)*G,t[3]=(h*b-f*P-d*A)*G,t[4]=(c*N-o*V-l*T)*G,t[5]=(e*V-s*N+r*T)*G,t[6]=(g*_-m*P-p*v)*G,t[7]=(u*P-h*_+d*v)*G,t[8]=(o*U-a*N+l*x)*G,t[9]=(n*N-e*U-r*x)*G,t[10]=(m*b-y*_+p*M)*G,t[11]=(f*_-u*b-d*M)*G,t[12]=(a*T-o*I-c*x)*G,t[13]=(e*I-n*T+s*x)*G,t[14]=(y*v-m*A-g*M)*G,t[15]=(u*A-f*v+h*M)*G,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,m=r*f,y=o*u,g=o*f,p=a*f,M=c*l,v=c*u,_=c*f,A=n.x,b=n.y,P=n.z;return s[0]=(1-(y+p))*A,s[1]=(d+_)*A,s[2]=(m-v)*A,s[3]=0,s[4]=(d-_)*b,s[5]=(1-(h+p))*b,s[6]=(g+M)*b,s[7]=0,s[8]=(m+v)*P,s[9]=(g-M)*P,s[10]=(1-(h+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fs.set(s[0],s[1],s[2]).length();const a=fs.set(s[4],s[5],s[6]).length(),c=fs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xn.copy(this);const l=1/o,u=1/a,f=1/c;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,e.setFromRotationMatrix(xn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=On,c=!1){const l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let m,y;if(c)m=r/(o-r),y=o*r/(o-r);else if(a===On)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Rr)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=On,c=!1){const l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,y;if(c)m=1/(o-r),y=o/(o-r);else if(a===On)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===Rr)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fs=new O,xn=new me,nm=new O(0,0,0),im=new O(1,1,1),gi=new O,Zr=new O,tn=new O,yu=new me,Mu=new kn;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class xf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sm=0;const Su=new O,ds=new kn,jn=new me,Kr=new O,$s=new O,rm=new O,om=new kn,Eu=new O(1,0,0),bu=new O(0,1,0),Tu=new O(0,0,1),wu={type:"added"},am={type:"removed"},ps={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Ne extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new O,e=new gn,n=new kn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Xt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Eu,t)}rotateY(t){return this.rotateOnAxis(bu,t)}rotateZ(t){return this.rotateOnAxis(Tu,t)}translateOnAxis(t,e){return Su.copy(t).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eu,t)}translateY(t){return this.translateOnAxis(bu,t)}translateZ(t){return this.translateOnAxis(Tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt($s,Kr,this.up):jn.lookAt(Kr,$s,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(jn),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wu),ps.child=t,this.dispatchEvent(ps),ps.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(am),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wu),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,rm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,om,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new O(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $e extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lm={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const y of t.hand.values()){const g=e.getJointPose(y,n),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Ac(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ea(o,r,t+1/3),this.g=Ea(o,r,t),this.b=Ea(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=vf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ee.workingToColorSpace(Ve.copy(this),t),Math.round(Zt(Ve.r*255,0,255))*65536+Math.round(Zt(Ve.g*255,0,255))*256+Math.round(Zt(Ve.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=rn){ee.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Jr);const n=pr(_i.h,Jr.h,e),s=pr(_i.s,Jr.s,e),r=pr(_i.l,Jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Jt;Jt.NAMES=vf;class cm extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const vn=new O,$n=new O,ba=new O,Zn=new O,ms=new O,gs=new O,Au=new O,Ta=new O,wa=new O,Aa=new O,Ra=new Me,Ca=new Me,Pa=new Me;class Tn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),$n.subVectors(n,e),ba.subVectors(t,e);const o=vn.dot(vn),a=vn.dot($n),c=vn.dot(ba),l=$n.dot($n),u=$n.dot(ba),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,m=(o*u-a*c)*h;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,n),Pa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ra,r.x),o.addScaledVector(Ca,r.y),o.addScaledVector(Pa,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),$n.subVectors(t,e),vn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),vn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ms.subVectors(s,n),gs.subVectors(r,n),Ta.subVectors(t,n);const c=ms.dot(Ta),l=gs.dot(Ta);if(c<=0&&l<=0)return e.copy(n);wa.subVectors(t,s);const u=ms.dot(wa),f=gs.dot(wa);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ms,o);Aa.subVectors(t,r);const d=ms.dot(Aa),m=gs.dot(Aa);if(m>=0&&d<=m)return e.copy(r);const y=d*l-c*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(gs,a);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Au.subVectors(r,s),a=(f-u)/(f-u+(d-m)),e.copy(s).addScaledVector(Au,a);const p=1/(g+y+h);return o=y*p,a=h*p,e.copy(n).addScaledVector(ms,o).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class qs{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),to.subVectors(this.max,Zs),_s.subVectors(t.a,Zs),xs.subVectors(t.b,Zs),vs.subVectors(t.c,Zs),xi.subVectors(xs,_s),vi.subVectors(vs,xs),Ii.subVectors(_s,vs);let e=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Ii.z,Ii.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Ii.z,0,-Ii.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Ii.y,Ii.x,0];return!La(e,_s,xs,vs,to)||(e=[1,0,0,0,1,0,0,0,1],!La(e,_s,xs,vs,to))?!1:(eo.crossVectors(xi,vi),e=[eo.x,eo.y,eo.z],La(e,_s,xs,vs,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Kn=[new O,new O,new O,new O,new O,new O,new O,new O],yn=new O,Qr=new qs,_s=new O,xs=new O,vs=new O,xi=new O,vi=new O,Ii=new O,Zs=new O,to=new O,eo=new O,Di=new O;function La(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Di.fromArray(i,r);const a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=t.dot(Di),l=e.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Te=new O,no=new ct;let um=0;class Gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hu,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hu&&(t.usage=this.usage),t}}class yf extends Gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mf extends Gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const hm=new qs,Ks=new O,Ia=new O;class kr{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Ia)),this.expandByPoint(Ks.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fm=0;const cn=new me,Da=new Ne,ys=new O,en=new qs,Js=new qs,Ce=new O;class be extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pp(t)?Mf:yf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(en.min,Js.min),en.expandByPoint(Ce),Ce.addVectors(en.max,Js.max),en.expandByPoint(Ce)):(en.expandByPoint(Js.min),en.expandByPoint(Js.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ce.fromBufferAttribute(a,l),c&&(ys.fromBufferAttribute(t,l),Ce.add(ys)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new O,c[x]=new O;const l=new O,u=new O,f=new O,h=new ct,d=new ct,m=new ct,y=new O,g=new O;function p(x,T,N){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,N),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,N),u.sub(l),f.sub(l),d.sub(h),m.sub(h);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(I),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(I),a[x].add(y),a[T].add(y),a[N].add(y),c[x].add(g),c[T].add(g),c[N].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,T=M.length;x<T;++x){const N=M[x],I=N.start,U=N.count;for(let V=I,Y=I+U;V<Y;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const v=new O,_=new O,A=new O,b=new O;function P(x){A.fromBufferAttribute(s,x),b.copy(A);const T=a[x];v.copy(T),v.sub(A.multiplyScalar(A.dot(T))).normalize(),_.crossVectors(b,T);const I=_.dot(c[x])<0?-1:1;o.setXYZW(x,v.x,v.y,v.z,I)}for(let x=0,T=M.length;x<T;++x){const N=M[x],I=N.start,U=N.count;for(let V=I,Y=I+U;V<Y;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,f=new O;if(t)for(let h=0,d=t.count;h<d;h+=3){const m=t.getX(h+0),y=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,m=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let p=0;p<u;p++)h[m++]=l[d++]}return new Gn(h,u,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let dm=0;class Rn extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Ds,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Jn=new O,Na=new O,io=new O,yi=new O,Ua=new O,so=new O,Fa=new O;class Cc{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Na.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(Na);const r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=yi.dot(this.direction),c=-yi.dot(io),l=yi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*c-a,h=o*a-c,m=r*u,f>=0)if(h>=-m)if(h<=m){const y=1/u;f*=y,h*=y,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Na).addScaledVector(io,h),d}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){Ua.subVectors(e,t),so.subVectors(n,t),Fa.crossVectors(Ua,so);let o=this.direction.dot(Fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);const c=a*this.direction.dot(so.crossVectors(yi,so));if(c<0)return null;const l=a*this.direction.dot(Ua.cross(yi));if(l<0||c+l>o)return null;const u=-a*yi.dot(Fa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pc extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ru=new me,Ni=new Cc,ro=new kr,Cu=new O,oo=new O,ao=new O,lo=new O,Oa=new O,co=new O,Pu=new O,uo=new O;class Kt extends Ne{constructor(t=new be,e=new Pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(Oa.fromBufferAttribute(f,t),o?co.addScaledVector(Oa,u):co.addScaledVector(Oa.sub(e),u))}e.add(co)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(ro.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(ro,Cu)===null||Ni.origin.distanceToSquared(Cu)>(t.far-t.near)**2))&&(Ru.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Ru),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){const g=h[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,A=v;_<A;_+=3){const b=a.getX(_),P=a.getX(_+1),x=a.getX(_+2);s=ho(this,p,t,n,l,u,f,b,P,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let g=m,p=y;g<p;g+=3){const M=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=ho(this,o,t,n,l,u,f,M,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){const g=h[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,A=v;_<A;_+=3){const b=_,P=_+1,x=_+2;s=ho(this,p,t,n,l,u,f,b,P,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let g=m,p=y;g<p;g+=3){const M=g,v=g+1,_=g+2;s=ho(this,o,t,n,l,u,f,M,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function pm(i,t,e,n,s,r,o,a){let c;if(t.side===Je?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ri,a),c===null)return null;uo.copy(a),uo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(uo);return l<e.near||l>e.far?null:{distance:l,point:uo.clone(),object:i}}function ho(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,oo),i.getVertexPosition(c,ao),i.getVertexPosition(l,lo);const u=pm(i,t,e,n,oo,ao,lo,Pu);if(u){const f=new O;Tn.getBarycoord(Pu,oo,ao,lo,f),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,c,l,f,new ct)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,c,l,f,new ct)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,c,l,f,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new O,materialIndex:0};Tn.getNormal(oo,ao,lo,h.normal),u.face=h,u.barycoord=f}return u}class mm extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Be,u=Be,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ba=new O,gm=new O,_m=new Xt;class zi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ba.subVectors(n,e).cross(gm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||_m.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new kr,xm=new ct(.5,.5),fo=new O;class Lc{constructor(t=new zi,e=new zi,n=new zi,s=new zi,r=new zi,o=new zi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],y=r[9],g=r[10],p=r[11],M=r[12],v=r[13],_=r[14],A=r[15];if(s[0].setComponents(l-o,d-u,p-m,A-M).normalize(),s[1].setComponents(l+o,d+u,p+m,A+M).normalize(),s[2].setComponents(l+a,d+f,p+y,A+v).normalize(),s[3].setComponents(l-a,d-f,p-y,A-v).normalize(),n)s[4].setComponents(c,h,g,_).normalize(),s[5].setComponents(l-c,d-h,p-g,A-_).normalize();else if(s[4].setComponents(l-c,d-h,p-g,A-_).normalize(),e===On)s[5].setComponents(l+c,d+h,p+g,A+_).normalize();else if(e===Rr)s[5].setComponents(c,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);const e=xm.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fo.x=s.normal.x>0?t.max.x:t.min.x,fo.y=s.normal.y>0?t.max.y:t.min.y,fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class No extends Rn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yo=new O,jo=new O,Lu=new me,Qs=new Cc,po=new kr,za=new O,Iu=new O;class vm extends Ne{constructor(t=new be,e=new No){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Yo.fromBufferAttribute(e,s-1),jo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Yo.distanceTo(jo);t.setAttribute("lineDistance",new Qt(n,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;Lu.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(Lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=d,g=m-1;y<g;y+=l){const p=u.getX(y),M=u.getX(y+1),v=mo(this,t,Qs,c,p,M,y);v&&e.push(v)}if(this.isLineLoop){const y=u.getX(m-1),g=u.getX(d),p=mo(this,t,Qs,c,y,g,m-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let y=d,g=m-1;y<g;y+=l){const p=mo(this,t,Qs,c,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){const y=mo(this,t,Qs,c,m-1,d,m-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mo(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Yo.fromBufferAttribute(a,s),jo.fromBufferAttribute(a,r),e.distanceSqToSegment(Yo,jo,za,Iu)>n)return;za.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(za);if(!(l<t.near||l>t.far))return{distance:l,point:Iu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Du=new O,Nu=new O;class Uu extends vm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Du.fromBufferAttribute(e,s),Nu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Du.distanceTo(Nu);t.setAttribute("lineDistance",new Qt(n,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rr extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fu=new me,ec=new Cc,go=new kr,_o=new O;class ka extends Ne{constructor(t=new be,e=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;Fu.copy(s).invert(),ec.copy(t.ray).applyMatrix4(Fu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=h,y=d;m<y;m++){const g=l.getX(m);_o.fromBufferAttribute(f,g),Ou(_o,g,c,s,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,y=d;m<y;m++)_o.fromBufferAttribute(f,m),Ou(_o,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ou(i,t,e,n,s,r,o){const a=ec.distanceSqToPoint(i);if(a<e){const c=new O;ec.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Sf extends Ze{constructor(t=[],e=es,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pr extends Ze{constructor(t,e,n=Hn,s,r,o,a=Be,c=Be,l,u=ui,f=1){if(u!==ui&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ym extends Pr{constructor(t,e=Hn,n=es,s,r,o=Be,a=Be,c,l=ui){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ef extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rs extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function m(y,g,p,M,v,_,A,b,P,x,T){const N=_/P,I=A/x,U=_/2,V=A/2,Y=b/2,G=P+1,H=x+1;let B=0,j=0;const ot=new O;for(let ht=0;ht<H;ht++){const gt=ht*I-V;for(let Mt=0;Mt<G;Mt++){const Ot=Mt*N-U;ot[y]=Ot*M,ot[g]=gt*v,ot[p]=Y,l.push(ot.x,ot.y,ot.z),ot[y]=0,ot[g]=0,ot[p]=b>0?1:-1,u.push(ot.x,ot.y,ot.z),f.push(Mt/P),f.push(1-ht/x),B+=1}}for(let ht=0;ht<x;ht++)for(let gt=0;gt<P;gt++){const Mt=h+gt+G*ht,Ot=h+gt+G*(ht+1),J=h+(gt+1)+G*(ht+1),k=h+(gt+1)+G*ht;c.push(Mt,Ot,k),c.push(Ot,J,k),j+=6}a.addGroup(d,j,T),d+=j,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class os extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let m=0;const y=[],g=n/2;let p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function M(){const _=new O,A=new O;let b=0;const P=(e-t)/n;for(let x=0;x<=r;x++){const T=[],N=x/r,I=N*(e-t)+t;for(let U=0;U<=s;U++){const V=U/s,Y=V*c+a,G=Math.sin(Y),H=Math.cos(Y);A.x=I*G,A.y=-N*n+g,A.z=I*H,f.push(A.x,A.y,A.z),_.set(G,P,H).normalize(),h.push(_.x,_.y,_.z),d.push(V,1-N),T.push(m++)}y.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const N=y[T][x],I=y[T+1][x],U=y[T+1][x+1],V=y[T][x+1];(t>0||T!==0)&&(u.push(N,I,V),b+=3),(e>0||T!==r-1)&&(u.push(I,U,V),b+=3)}l.addGroup(p,b,0),p+=b}function v(_){const A=m,b=new ct,P=new O;let x=0;const T=_===!0?t:e,N=_===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,g*N,0),h.push(0,N,0),d.push(.5,.5),m++;const I=m;for(let U=0;U<=s;U++){const Y=U/s*c+a,G=Math.cos(Y),H=Math.sin(Y);P.x=T*H,P.y=g*N,P.z=T*G,f.push(P.x,P.y,P.z),h.push(0,N,0),b.x=G*.5+.5,b.y=H*.5*N+.5,d.push(b.x,b.y),m++}for(let U=0;U<s;U++){const V=A+U,Y=I+U;_===!0?u.push(Y,Y+1,V):u.push(Y+1,Y,V),x+=3}l.addGroup(p,x,_===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vr extends os{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Vr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ic extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new O,_=new O,A=new O;for(let b=0;b<e.length;b+=3)d(e[b+0],v),d(e[b+1],_),d(e[b+2],A),c(v,_,A,M)}function c(M,v,_,A){const b=A+1,P=[];for(let x=0;x<=b;x++){P[x]=[];const T=M.clone().lerp(_,x/b),N=v.clone().lerp(_,x/b),I=b-x;for(let U=0;U<=I;U++)U===0&&x===b?P[x][U]=T:P[x][U]=T.clone().lerp(N,U/I)}for(let x=0;x<b;x++)for(let T=0;T<2*(b-x)-1;T++){const N=Math.floor(T/2);T%2===0?(h(P[x][N+1]),h(P[x+1][N]),h(P[x][N])):(h(P[x][N+1]),h(P[x+1][N+1]),h(P[x+1][N]))}}function l(M){const v=new O;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(M),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function u(){const M=new O;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const _=g(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;o.push(_,1-A)}m(),f()}function f(){for(let M=0;M<o.length;M+=6){const v=o[M+0],_=o[M+2],A=o[M+4],b=Math.max(v,_,A),P=Math.min(v,_,A);b>.9&&P<.1&&(v<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function d(M,v){const _=M*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function m(){const M=new O,v=new O,_=new O,A=new O,b=new ct,P=new ct,x=new ct;for(let T=0,N=0;T<r.length;T+=9,N+=6){M.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),b.set(o[N+0],o[N+1]),P.set(o[N+2],o[N+3]),x.set(o[N+4],o[N+5]),A.copy(M).add(v).add(_).divideScalar(3);const I=g(A);y(b,N+0,M,I),y(P,N+2,v,I),y(x,N+4,_,I)}}function y(M,v,_,A){A<0&&M.x===1&&(o[v]=M.x-1),_.x===0&&_.z===0&&(o[v]=A/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ic(t.vertices,t.indices,t.radius,t.detail)}}class Dc extends Ic{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Dc(t.radius,t.detail)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ct:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,s=[],r=[],o=[],a=new O,c=new me;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Zt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Zt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nc extends Xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mm extends Nc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Uc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const xo=new O,Va=new Uc,Ga=new Uc,Ha=new Uc;class $o extends Xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(xo.subVectors(s[0],s[1]).add(s[0]),l=xo);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=xo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Va.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,y,g),Ga.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,y,g),Ha.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,y,g)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Ga.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Ha.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Va.calc(c),Ga.calc(c),Ha.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Sm(i,t){const e=1-i;return e*e*t}function Em(i,t){return 2*(1-i)*i*t}function bm(i,t){return i*i*t}function mr(i,t,e,n){return Sm(i,t)+Em(i,e)+bm(i,n)}function Tm(i,t){const e=1-i;return e*e*e*t}function wm(i,t){const e=1-i;return 3*e*e*i*t}function Am(i,t){return 3*(1-i)*i*i*t}function Rm(i,t){return i*i*i*t}function gr(i,t,e,n,s){return Tm(i,t)+wm(i,e)+Am(i,n)+Rm(i,s)}class bf extends Xn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cm extends Xn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y),gr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tf extends Xn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pm extends Xn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wf extends Xn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Af extends Xn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y),mr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rf extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Bu(a,c.x,l.x,u.x,f.x),Bu(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Zo=Object.freeze({__proto__:null,ArcCurve:Mm,CatmullRomCurve3:$o,CubicBezierCurve:bf,CubicBezierCurve3:Cm,EllipseCurve:Nc,LineCurve:Tf,LineCurve3:Pm,QuadraticBezierCurve:wf,QuadraticBezierCurve3:Af,SplineCurve:Rf});class Lm extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Zo[s.type]().fromJSON(s))}return this}}class Us extends Lm{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Tf(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new wf(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new bf(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Rf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Nc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ji extends Us{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Us().fromJSON(s))}return this}}function Im(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Cf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Om(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,f=c;for(let h=e;h<s;h+=e){const d=i[h],m=i[h+1];d<a&&(a=d),m<c&&(c=m),d>u&&(u=d),m>f&&(f=m)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Lr(r,o,e,a,c,l,0),o}function Cf(i,t,e,n,s){let r;if(s===jm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=zu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=zu(o/n|0,i[o],i[o+1],r);return r&&Gs(r,r.next)&&(Dr(r),r=r.next),r}function ns(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Gs(e,e.next)||xe(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Gm(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Nm(i,n,s,r):Dm(i)){t.push(c.i,i.i,l.i),Dr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Um(ns(i),t),Lr(i,t,e,n,s,r,2)):o===2&&Fm(i,t,e,n,s,r):Lr(ns(i),t,e,n,s,r,1);break}}}function Dm(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l);let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&or(s,a,r,c,o,l,m.x,m.y)&&xe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Nm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(xe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),m=Math.min(u,f,h),y=Math.max(a,c,l),g=Math.max(u,f,h),p=nc(d,m,t,e,n),M=nc(y,g,t,e,n);let v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=M;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&or(a,u,c,f,l,h,v.x,v.y)&&xe(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&or(a,u,c,f,l,h,_.x,_.y)&&xe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&or(a,u,c,f,l,h,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&or(a,u,c,f,l,h,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Um(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Gs(n,s)&&Lf(n,e,e.next,s)&&Ir(n,s)&&Ir(s,n)&&(t.push(n.i,e.i,s.i),Dr(e),Dr(e.next),e=i=s),e=e.next}while(e!==i);return ns(e)}function Fm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xm(o,a)){let c=If(o,a);o=ns(o,o.next),c=ns(c,c.next),Lr(o,t,e,n,s,r,0),Lr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Om(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Cf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Wm(l))}s.sort(Bm);for(let r=0;r<s.length;r++)e=zm(s[r],e);return e}function Bm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function zm(i,t){const e=km(i,t);if(!e)return t;const n=If(e,i);return ns(n,n.next),ns(e,e.next)}function km(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Gs(i,e))return e;do{if(Gs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Pf(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Ir(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Vm(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Vm(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function Gm(i,t,e,n){let s=i;do s.z===0&&(s.z=nc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hm(s)}function Hm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function nc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Wm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function or(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Pf(i,t,e,n,s,r,o,a)}function Xm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!qm(i,t)&&(Ir(i,t)&&Ir(t,i)&&Ym(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||Gs(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Gs(i,t){return i.x===t.x&&i.y===t.y}function Lf(i,t,e,n){const s=yo(xe(i,t,e)),r=yo(xe(i,t,n)),o=yo(xe(e,n,i)),a=yo(xe(e,n,t));return!!(s!==r&&o!==a||s===0&&vo(i,e,t)||r===0&&vo(i,n,t)||o===0&&vo(e,i,n)||a===0&&vo(e,t,n))}function vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yo(i){return i>0?1:i<0?-1:0}function qm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Lf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function Ym(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function If(i,t){const e=ic(i.i,i.x,i.y),n=ic(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zu(i,t,e,n){const s=ic(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ic(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class $m{static triangulate(t,e,n=2){return Im(t,e,n)}}class Ei{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ei.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ku(t),Vu(n,t);let o=t.length;e.forEach(ku);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Vu(n,e[c]);const a=$m.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ku(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Rs extends be{constructor(t=new Ji([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Zm;let v,_=!1,A,b,P,x;if(p){v=p.getSpacedPoints(u),_=!0,h=!1;const z=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,z),b=new O,P=new O,x=new O}h||(g=0,d=0,m=0,y=0);const T=a.extractPoints(l);let N=T.shape;const I=T.holes;if(!Ei.isClockWise(N)){N=N.reverse();for(let z=0,$=I.length;z<$;z++){const K=I[z];Ei.isClockWise(K)&&(I[z]=K.reverse())}}function V(z){const K=10000000000000001e-36;let rt=z[0];for(let E=1;E<=z.length;E++){const D=E%z.length,at=z[D],xt=at.x-rt.x,pt=at.y-rt.y,L=xt*xt+pt*pt,S=Math.max(Math.abs(at.x),Math.abs(at.y),Math.abs(rt.x),Math.abs(rt.y)),W=K*S*S;if(L<=W){z.splice(D,1),E--;continue}rt=at}}V(N),I.forEach(V);const Y=I.length,G=N;for(let z=0;z<Y;z++){const $=I[z];N=N.concat($)}function H(z,$,K){return $||te("ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector($,K)}const B=N.length;function j(z,$,K){let rt,E,D;const at=z.x-$.x,xt=z.y-$.y,pt=K.x-z.x,L=K.y-z.y,S=at*at+xt*xt,W=at*L-xt*pt;if(Math.abs(W)>Number.EPSILON){const tt=Math.sqrt(S),ft=Math.sqrt(pt*pt+L*L),it=$.x-xt/tt,At=$.y+at/tt,vt=K.x-L/ft,Ut=K.y+pt/ft,Nt=((vt-it)*L-(Ut-At)*pt)/(at*L-xt*pt);rt=it+at*Nt-z.x,E=At+xt*Nt-z.y;const mt=rt*rt+E*E;if(mt<=2)return new ct(rt,E);D=Math.sqrt(mt/2)}else{let tt=!1;at>Number.EPSILON?pt>Number.EPSILON&&(tt=!0):at<-Number.EPSILON?pt<-Number.EPSILON&&(tt=!0):Math.sign(xt)===Math.sign(L)&&(tt=!0),tt?(rt=-xt,E=at,D=Math.sqrt(S)):(rt=at,E=xt,D=Math.sqrt(S/2))}return new ct(rt/D,E/D)}const ot=[];for(let z=0,$=G.length,K=$-1,rt=z+1;z<$;z++,K++,rt++)K===$&&(K=0),rt===$&&(rt=0),ot[z]=j(G[z],G[K],G[rt]);const ht=[];let gt,Mt=ot.concat();for(let z=0,$=Y;z<$;z++){const K=I[z];gt=[];for(let rt=0,E=K.length,D=E-1,at=rt+1;rt<E;rt++,D++,at++)D===E&&(D=0),at===E&&(at=0),gt[rt]=j(K[rt],K[D],K[at]);ht.push(gt),Mt=Mt.concat(gt)}let Ot;if(g===0)Ot=Ei.triangulateShape(G,I);else{const z=[],$=[];for(let K=0;K<g;K++){const rt=K/g,E=d*Math.cos(rt*Math.PI/2),D=m*Math.sin(rt*Math.PI/2)+y;for(let at=0,xt=G.length;at<xt;at++){const pt=H(G[at],ot[at],D);nt(pt.x,pt.y,-E),rt===0&&z.push(pt)}for(let at=0,xt=Y;at<xt;at++){const pt=I[at];gt=ht[at];const L=[];for(let S=0,W=pt.length;S<W;S++){const tt=H(pt[S],gt[S],D);nt(tt.x,tt.y,-E),rt===0&&L.push(tt)}rt===0&&$.push(L)}}Ot=Ei.triangulateShape(z,$)}const J=Ot.length,k=m+y;for(let z=0;z<B;z++){const $=h?H(N[z],Mt[z],k):N[z];_?(P.copy(A.normals[0]).multiplyScalar($.x),b.copy(A.binormals[0]).multiplyScalar($.y),x.copy(v[0]).add(P).add(b),nt(x.x,x.y,x.z)):nt($.x,$.y,0)}for(let z=1;z<=u;z++)for(let $=0;$<B;$++){const K=h?H(N[$],Mt[$],k):N[$];_?(P.copy(A.normals[z]).multiplyScalar(K.x),b.copy(A.binormals[z]).multiplyScalar(K.y),x.copy(v[z]).add(P).add(b),nt(x.x,x.y,x.z)):nt(K.x,K.y,f/u*z)}for(let z=g-1;z>=0;z--){const $=z/g,K=d*Math.cos($*Math.PI/2),rt=m*Math.sin($*Math.PI/2)+y;for(let E=0,D=G.length;E<D;E++){const at=H(G[E],ot[E],rt);nt(at.x,at.y,f+K)}for(let E=0,D=I.length;E<D;E++){const at=I[E];gt=ht[E];for(let xt=0,pt=at.length;xt<pt;xt++){const L=H(at[xt],gt[xt],rt);_?nt(L.x,L.y+v[u-1].y,v[u-1].x+K):nt(L.x,L.y,f+K)}}}w(),R();function w(){const z=s.length/3;if(h){let $=0,K=B*$;for(let rt=0;rt<J;rt++){const E=Ot[rt];X(E[2]+K,E[1]+K,E[0]+K)}$=u+g*2,K=B*$;for(let rt=0;rt<J;rt++){const E=Ot[rt];X(E[0]+K,E[1]+K,E[2]+K)}}else{for(let $=0;$<J;$++){const K=Ot[$];X(K[2],K[1],K[0])}for(let $=0;$<J;$++){const K=Ot[$];X(K[0]+B*u,K[1]+B*u,K[2]+B*u)}}n.addGroup(z,s.length/3-z,0)}function R(){const z=s.length/3;let $=0;F(G,$),$+=G.length;for(let K=0,rt=I.length;K<rt;K++){const E=I[K];F(E,$),$+=E.length}n.addGroup(z,s.length/3-z,1)}function F(z,$){let K=z.length;for(;--K>=0;){const rt=K;let E=K-1;E<0&&(E=z.length-1);for(let D=0,at=u+g*2;D<at;D++){const xt=B*D,pt=B*(D+1),L=$+rt+xt,S=$+E+xt,W=$+E+pt,tt=$+rt+pt;lt(L,S,W,tt)}}}function nt(z,$,K){c.push(z),c.push($),c.push(K)}function X(z,$,K){_t(z),_t($),_t(K);const rt=s.length/3,E=M.generateTopUV(n,s,rt-3,rt-2,rt-1);dt(E[0]),dt(E[1]),dt(E[2])}function lt(z,$,K,rt){_t(z),_t($),_t(rt),_t($),_t(K),_t(rt);const E=s.length/3,D=M.generateSideWallUV(n,s,E-6,E-3,E-2,E-1);dt(D[0]),dt(D[1]),dt(D[3]),dt(D[1]),dt(D[2]),dt(D[3])}function _t(z){s.push(c[z*3+0]),s.push(c[z*3+1]),s.push(c[z*3+2])}function dt(z){r.push(z.x),r.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Km(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zo[s.type]().fromJSON(s)),new Rs(n,t.options)}}const Zm={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ct(r,o),new ct(a,c),new ct(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],m=t[s*3+2],y=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ct(o,1-c),new ct(l,1-f),new ct(h,1-m),new ct(y,1-p)]:[new ct(a,1-c),new ct(u,1-f),new ct(d,1-m),new ct(g,1-p)]}};function Km(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Hs extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],m=[],y=[],g=[];for(let p=0;p<u;p++){const M=p*h-o;for(let v=0;v<l;v++){const _=v*f-r;m.push(_,-M,0),y.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const v=M+l*p,_=M+l*(p+1),A=M+1+l*(p+1),b=M+1+l*p;d.push(v,_,b),d.push(_,A,b)}this.setIndex(d),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Nr extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new O,h=new O,d=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const b=A/e;f.x=-t*Math.cos(s+b*r)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(s+b*r)*Math.sin(o+v*a),m.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),g.push(b+_,1-v),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const v=u[p][M+1],_=u[p][M],A=u[p+1][M],b=u[p+1][M+1];(p!==0||o>0)&&d.push(v,_,b),(p!==n-1||c<Math.PI)&&d.push(_,A,b)}this.setIndex(d),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fc extends be{constructor(t=new Af(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,c=new O,l=new ct;let u=new O;const f=[],h=[],d=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function y(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),M(),p()}function g(v){u=t.getPointAt(v/e,u);const _=o.normals[v],A=o.binormals[v];for(let b=0;b<=s;b++){const P=b/s*Math.PI*2,x=Math.sin(P),T=-Math.cos(P);c.x=T*_.x+x*A.x,c.y=T*_.y+x*A.y,c.z=T*_.z+x*A.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){const A=(s+1)*(v-1)+(_-1),b=(s+1)*v+(_-1),P=(s+1)*v+_,x=(s+1)*(v-1)+_;m.push(A,b,x),m.push(b,P,x)}}function M(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)l.x=v/e,l.y=_/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Fc(new Zo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=Ws(i[e]);for(const s in n)t[s]=n[s]}return t}function Jm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Df(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Qm={clone:Ws,merge:We};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=Jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ng extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class De extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ig extends Rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=_c,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sg extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rg extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Hu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Hu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Hu(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class og{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ag=new og;class ra{constructor(t){this.manager=t!==void 0?t:ag,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ra.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class lg extends Error{constructor(t,e){super(t),this.response=e}}class Nf extends ra{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Gu.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Qn[t]!==void 0){Qn[t].push({onLoad:e,onProgress:n,onError:s});return}Qn[t]=[],Qn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Gt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Qn[t],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let y=0;const g=new ReadableStream({start(p){M();function M(){f.read().then(({done:v,value:_})=>{if(v)p.close();else{y+=_.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:d});for(let b=0,P=u.length;b<P;b++){const x=u[b];x.onProgress&&x.onProgress(A)}p.enqueue(_),M()}},v=>{p.error(v)})}}});return new Response(g)}else throw new lg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Gu.add(`file:${t}`,l);const u=Qn[t];delete Qn[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Qn[t];if(u===void 0)throw this.manager.itemError(t),l;delete Qn[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Uf extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Wa=new me,Wu=new O,Xu=new O;class cg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Rr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mo=new O,So=new kn,Ln=new O;class Ff extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mo,So,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,So,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Mo,So,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,So,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new O,qu=new ct,Yu=new ct;class fn extends Ff{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,qu,Yu),e.subVectors(Yu,qu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Oc extends Ff{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ug extends cg{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hg extends Uf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new ug}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class fg extends Uf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ms=-90,Ss=1;class dg extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Ms,Ss,t,e);s.layers=this.layers,this.add(s);const r=new fn(Ms,Ss,t,e);r.layers=this.layers,this.add(r);const o=new fn(Ms,Ss,t,e);o.layers=this.layers,this.add(o);const a=new fn(Ms,Ss,t,e);a.layers=this.layers,this.add(a);const c=new fn(Ms,Ss,t,e);c.layers=this.layers,this.add(c);const l=new fn(Ms,Ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class pg extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ju=new ct;class mg{constructor(t=new ct(1/0,1/0),e=new ct(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ju.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ju).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class Fi{constructor(){this.type="ShapePath",this.color=new Jt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Us,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const M=[];for(let v=0,_=p.length;v<_;v++){const A=p[v],b=new Ji;b.curves=A.curves,M.push(b)}return M}function n(p,M){const v=M.length;let _=!1;for(let A=v-1,b=0;b<v;A=b++){let P=M[A],x=M[b],T=x.x-P.x,N=x.y-P.y;if(Math.abs(N)>Number.EPSILON){if(N<0&&(P=M[b],T=-T,x=M[A],N=-N),p.y<P.y||p.y>x.y)continue;if(p.y===P.y){if(p.x===P.x)return!0}else{const I=N*(p.x-P.x)-T*(p.y-P.y);if(I===0)return!0;if(I<0)continue;_=!_}}else{if(p.y!==P.y)continue;if(x.x<=p.x&&p.x<=P.x||P.x<=p.x&&p.x<=x.x)return!0}}return _}const s=Ei.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Ji,c.curves=a.curves,l.push(c),l;let u=!s(r[0].getPoints());u=t?!u:u;const f=[],h=[];let d=[],m=0,y;h[m]=void 0,d[m]=[];for(let p=0,M=r.length;p<M;p++)a=r[p],y=a.getPoints(),o=s(y),o=t?!o:o,o?(!u&&h[m]&&m++,h[m]={s:new Ji,p:y},h[m].s.curves=a.curves,u&&m++,d[m]=[]):d[m].push({h:a,p:y[0]});if(!h[0])return e(r);if(h.length>1){let p=!1,M=0;for(let v=0,_=h.length;v<_;v++)f[v]=[];for(let v=0,_=h.length;v<_;v++){const A=d[v];for(let b=0;b<A.length;b++){const P=A[b];let x=!0;for(let T=0;T<h.length;T++)n(P.p,h[T].p)&&(v!==T&&M++,x?(x=!1,f[T].push(P)):p=!0);x&&f[v].push(P)}}M>0&&p===!1&&(d=f)}let g;for(let p=0,M=h.length;p<M;p++){c=h[p].s,l.push(c),g=d[p];for(let v=0,_=g.length;v<_;v++)c.holes.push(g[v].h)}return l}}function $u(i,t,e,n){const s=gg(n);switch(e){case df:return i*t;case mf:return i*t/s.components*s.byteLength;case Mc:return i*t/s.components*s.byteLength;case ks:return i*t*2/s.components*s.byteLength;case Sc:return i*t*2/s.components*s.byteLength;case pf:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Ec:return i*t*4/s.components*s.byteLength;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Io:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:case wl:return Math.max(i,16)*Math.max(t,8)/4;case El:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case Al:case Rl:case Pl:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cl:case Il:case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jl:case $l:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gg(i){switch(i){case an:case cf:return{byteLength:1,components:1};case wr:case uf:case ci:return{byteLength:2,components:1};case vc:case yc:return{byteLength:2,components:4};case Hn:case xc:case Fn:return{byteLength:4,components:1};case hf:case ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);function Of(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _g(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],y=f[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const y=f[d];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
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
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
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
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wg=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ig=`#ifdef USE_BUMPMAP
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`#define PI 3.141592653589793
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
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zg=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,e_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
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
}`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
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
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,h_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
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
#endif`,g_=`uniform sampler2D dfgLUT;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
}`,__=`
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
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A_=`#if defined( USE_POINTS_UV )
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
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
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
#endif`,N_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k_=`#ifdef USE_NORMALMAP
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
#endif`,V_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
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
}`,b0=`#if DEPTH_PACKING == 3200
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
}`,T0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,N0=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,U0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,O0=`#define NORMAL
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
}`,B0=`#define NORMAL
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
}`,z0=`#define PHONG
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
}`,k0=`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,V0=`#define STANDARD
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
}`,G0=`#define STANDARD
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
}`,H0=`#define TOON
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
}`,W0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,j0=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,$0=`uniform float rotation;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:xg,alphahash_pars_fragment:vg,alphamap_fragment:yg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:Eg,aomap_fragment:bg,aomap_pars_fragment:Tg,batching_pars_vertex:wg,batching_vertex:Ag,begin_vertex:Rg,beginnormal_vertex:Cg,bsdfs:Pg,iridescence_fragment:Lg,bumpmap_pars_fragment:Ig,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Fg,color_fragment:Og,color_pars_fragment:Bg,color_pars_vertex:zg,color_vertex:kg,common:Vg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:qg,emissivemap_pars_fragment:Yg,colorspace_fragment:jg,colorspace_pars_fragment:$g,envmap_fragment:Zg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:u_,envmap_vertex:t_,fog_vertex:e_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:o_,lights_lambert_fragment:a_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:h_,lights_toon_pars_fragment:f_,lights_phong_fragment:d_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:__,lights_fragment_maps:x_,lights_fragment_end:v_,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:M_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:E_,map_fragment:b_,map_pars_fragment:T_,map_particle_fragment:w_,map_particle_pars_fragment:A_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:C_,morphinstance_vertex:P_,morphcolor_vertex:L_,morphnormal_vertex:I_,morphtarget_pars_vertex:D_,morphtarget_vertex:N_,normal_fragment_begin:U_,normal_fragment_maps:F_,normal_pars_fragment:O_,normal_pars_vertex:B_,normal_vertex:z_,normalmap_pars_fragment:k_,clearcoat_normal_fragment_begin:V_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:W_,opaque_fragment:X_,packing:q_,premultiplied_alpha_fragment:Y_,project_vertex:j_,dithering_fragment:$_,dithering_pars_fragment:Z_,roughnessmap_fragment:K_,roughnessmap_pars_fragment:J_,shadowmap_pars_fragment:Q_,shadowmap_pars_vertex:t0,shadowmap_vertex:e0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:o0,specularmap_fragment:a0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:u0,transmission_fragment:h0,transmission_pars_fragment:f0,uv_pars_fragment:d0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:_0,background_frag:x0,backgroundCube_vert:v0,backgroundCube_frag:y0,cube_vert:M0,cube_frag:S0,depth_vert:E0,depth_frag:b0,distance_vert:T0,distance_frag:w0,equirect_vert:A0,equirect_frag:R0,linedashed_vert:C0,linedashed_frag:P0,meshbasic_vert:L0,meshbasic_frag:I0,meshlambert_vert:D0,meshlambert_frag:N0,meshmatcap_vert:U0,meshmatcap_frag:F0,meshnormal_vert:O0,meshnormal_frag:B0,meshphong_vert:z0,meshphong_frag:k0,meshphysical_vert:V0,meshphysical_frag:G0,meshtoon_vert:H0,meshtoon_frag:W0,points_vert:X0,points_frag:q0,shadow_vert:Y0,shadow_frag:j0,sprite_vert:$0,sprite_frag:Z0},Tt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Nn={basic:{uniforms:We([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:We([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:We([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:We([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:We([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:We([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:We([Tt.points,Tt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:We([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:We([Tt.common,Tt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:We([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:We([Tt.sprite,Tt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:We([Tt.common,Tt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:We([Tt.lights,Tt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Nn.physical={uniforms:We([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Eo={r:0,b:0,g:0},Oi=new gn,K0=new me;function J0(i,t,e,n,s,r){const o=new Jt(0);let a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(M){let v=M.isScene===!0?M.background:null;if(v&&v.isTexture){const _=M.backgroundBlurriness>0;v=t.get(v,_)}return v}function m(M){let v=!1;const _=d(M);_===null?g(o,a):_&&_.isColor&&(g(_,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,v){const _=d(v);_&&(_.isCubeTexture||_.mapping===sa)?(l===void 0&&(l=new Kt(new rs(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Ws(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Oi.copy(v.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(Oi)),l.material.toneMapped=ee.getTransfer(_.colorSpace)!==re,(u!==_||f!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Kt(new Hs(2,2),new Wn({name:"BackgroundMaterial",uniforms:Ws(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ee.getTransfer(_.colorSpace)!==re,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,v){M.getRGB(Eo,Df(i)),e.buffers.color.setClear(Eo.r,Eo.g,Eo.b,v,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),a=v,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:y,dispose:p}}function Q0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(I,U,V,Y,G){let H=!1;const B=f(I,Y,V,U);r!==B&&(r=B,l(r.object)),H=d(I,Y,V,G),H&&m(I,Y,V,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(I,U,V,Y),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,U,V,Y){const G=Y.wireframe===!0;let H=n[U.id];H===void 0&&(H={},n[U.id]=H);const B=I.isInstancedMesh===!0?I.id:0;let j=H[B];j===void 0&&(j={},H[B]=j);let ot=j[V.id];ot===void 0&&(ot={},j[V.id]=ot);let ht=ot[G];return ht===void 0&&(ht=h(c()),ot[G]=ht),ht}function h(I){const U=[],V=[],Y=[];for(let G=0;G<e;G++)U[G]=0,V[G]=0,Y[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:Y,object:I,attributes:{},index:null}}function d(I,U,V,Y){const G=r.attributes,H=U.attributes;let B=0;const j=V.getAttributes();for(const ot in j)if(j[ot].location>=0){const gt=G[ot];let Mt=H[ot];if(Mt===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(Mt=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(Mt=I.instanceColor)),gt===void 0||gt.attribute!==Mt||Mt&&gt.data!==Mt.data)return!0;B++}return r.attributesNum!==B||r.index!==Y}function m(I,U,V,Y){const G={},H=U.attributes;let B=0;const j=V.getAttributes();for(const ot in j)if(j[ot].location>=0){let gt=H[ot];gt===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(gt=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(gt=I.instanceColor));const Mt={};Mt.attribute=gt,gt&&gt.data&&(Mt.data=gt.data),G[ot]=Mt,B++}r.attributes=G,r.attributesNum=B,r.index=Y}function y(){const I=r.newAttributes;for(let U=0,V=I.length;U<V;U++)I[U]=0}function g(I){p(I,0)}function p(I,U){const V=r.newAttributes,Y=r.enabledAttributes,G=r.attributeDivisors;V[I]=1,Y[I]===0&&(i.enableVertexAttribArray(I),Y[I]=1),G[I]!==U&&(i.vertexAttribDivisor(I,U),G[I]=U)}function M(){const I=r.newAttributes,U=r.enabledAttributes;for(let V=0,Y=U.length;V<Y;V++)U[V]!==I[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function v(I,U,V,Y,G,H,B){B===!0?i.vertexAttribIPointer(I,U,V,G,H):i.vertexAttribPointer(I,U,V,Y,G,H)}function _(I,U,V,Y){y();const G=Y.attributes,H=V.getAttributes(),B=U.defaultAttributeValues;for(const j in H){const ot=H[j];if(ot.location>=0){let ht=G[j];if(ht===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ht=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ht=I.instanceColor)),ht!==void 0){const gt=ht.normalized,Mt=ht.itemSize,Ot=t.get(ht);if(Ot===void 0)continue;const J=Ot.buffer,k=Ot.type,w=Ot.bytesPerElement,R=k===i.INT||k===i.UNSIGNED_INT||ht.gpuType===xc;if(ht.isInterleavedBufferAttribute){const F=ht.data,nt=F.stride,X=ht.offset;if(F.isInstancedInterleavedBuffer){for(let lt=0;lt<ot.locationSize;lt++)p(ot.location+lt,F.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let lt=0;lt<ot.locationSize;lt++)g(ot.location+lt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let lt=0;lt<ot.locationSize;lt++)v(ot.location+lt,Mt/ot.locationSize,k,gt,nt*w,(X+Mt/ot.locationSize*lt)*w,R)}else{if(ht.isInstancedBufferAttribute){for(let F=0;F<ot.locationSize;F++)p(ot.location+F,ht.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let F=0;F<ot.locationSize;F++)g(ot.location+F);i.bindBuffer(i.ARRAY_BUFFER,J);for(let F=0;F<ot.locationSize;F++)v(ot.location+F,Mt/ot.locationSize,k,gt,Mt*w,Mt/ot.locationSize*F*w,R)}}else if(B!==void 0){const gt=B[j];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(ot.location,gt);break;case 3:i.vertexAttrib3fv(ot.location,gt);break;case 4:i.vertexAttrib4fv(ot.location,gt);break;default:i.vertexAttrib1fv(ot.location,gt)}}}}M()}function A(){T();for(const I in n){const U=n[I];for(const V in U){const Y=U[V];for(const G in Y){const H=Y[G];for(const B in H)u(H[B].object),delete H[B];delete Y[G]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const U=n[I.id];for(const V in U){const Y=U[V];for(const G in Y){const H=Y[G];for(const B in H)u(H[B].object),delete H[B];delete Y[G]}}delete n[I.id]}function P(I){for(const U in n){const V=n[U];for(const Y in V){const G=V[Y];if(G[I.id]===void 0)continue;const H=G[I.id];for(const B in H)u(H[B].object),delete H[B];delete G[I.id]}}}function x(I){for(const U in n){const V=n[U],Y=I.isInstancedMesh===!0?I.id:0,G=V[Y];if(G!==void 0){for(const H in G){const B=G[H];for(const j in B)u(B[j].object),delete B[j];delete G[H]}delete V[Y],Object.keys(V).length===0&&delete n[U]}}}function T(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function tx(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];e.update(d,n,1)}function c(l,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,f);let m=0;for(let y=0;y<f;y++)m+=u[y]*h[y];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ex(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==wn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const x=P===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==an&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fn&&!x)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Gt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,maxSamples:A,samples:b}}function nx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new zi,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const M=r?0:n,v=M*4;let _=p.clippingState||null;c.value=_,_=u(m,h,v,d);for(let A=0;A!==v;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,m){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=c.value,m!==!0||g===null){const p=d+y*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=d;v!==y;++v,_+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}const bi=4,Zu=[.125,.215,.35,.446,.526,.582],qi=20,ix=256,tr=new Oc,Ku=new Jt;let Xa=null,qa=0,Ya=0,ja=!1;const sx=new O;class Ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=sx}=r;Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=ja,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:ci,format:wn,colorSpace:Vs,depthBuffer:!1},s=Qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rx(r)),this._blurMaterial=ax(r,t,e),this._ggxMaterial=ox(r,t,e)}return s}_compileMaterial(t){const e=new Kt(new be,t);this._renderer.compile(e,tr)}_sceneToCubeUV(t,e,n,s,r){const c=new fn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Ku),f.toneMapping=zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new rs,new Pc({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let p=!1;const M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(Ku),p=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));const A=this._cubeSize;Es(s,_*A,v>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(y,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===es||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Es(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,tr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,d=f*h,{_lodMax:m}=this,y=this._sizeLods[n],g=3*y*(n>m-bi?n-m+bi:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,Es(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(a,tr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Es(t,g,p,3*y,2*y),s.setRenderTarget(t),s.render(a,tr)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&te("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=l;const h=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*qi-1),y=r/m,g=isFinite(r)?1+Math.floor(u*y):qi;g>qi&&Gt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qi}`);const p=[];let M=0;for(let P=0;P<qi;++P){const x=P/y,T=Math.exp(-x*x/2);p.push(T),P===0?M+=T:P<g&&(M+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-n;const _=this._sizeLods[s],A=3*_*(s>v-bi?s-v+bi:0),b=4*(this._cubeSize-_);Es(e,A,b,3*_,2*_),c.setRenderTarget(e),c.render(f,tr)}}function rx(i){const t=[],e=[],n=[];let s=i;const r=i-bi+1+Zu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-bi?c=Zu[o-i+bi-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,y=3,g=2,p=1,M=new Float32Array(y*m*d),v=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let b=0;b<d;b++){const P=b%3*2/3-1,x=b>2?0:-1,T=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];M.set(T,y*m*b),v.set(h,g*m*b);const N=[b,b,b,b,b,b];_.set(N,p*m*b)}const A=new be;A.setAttribute("position",new Gn(M,y)),A.setAttribute("uv",new Gn(v,g)),A.setAttribute("faceIndex",new Gn(_,p)),n.push(new Kt(A,null)),s>bi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Qu(i,t,e){const n=new Vn(i,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ox(i,t,e){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oa(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ax(i,t,e){const n=new Float32Array(qi),s=new O(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function th(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function eh(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function oa(){return`

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
	`}class Bf extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rs(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:oi});r.uniforms.tEquirect.value=e;const o=new Kt(s,r),a=e.minFilter;return e.minFilter===Zi&&(e.minFilter=Ge),new dg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function lx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===pa||d===ma)if(t.has(h)){const m=t.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const y=new Bf(m.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,m=d===pa||d===ma,y=d===es||d===zs;if(m||y){let g=e.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Ju(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return m&&M&&M.height>0||y&&M&&c(M)?(n===null&&(n=new Ju(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,d){return d===pa?h.mapping=es:d===ma&&(h.mapping=zs),h}function c(h){let d=0;const m=6;for(let y=0;y<m;y++)h[y]!==void 0&&d++;return d===m}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function cx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&qo("WebGLRenderer: "+n+" extension not supported."),s}}}function ux(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,m=f.attributes.position;let y=0;if(m===void 0)return;if(d!==null){const M=d.array;y=d.version;for(let v=0,_=M.length;v<_;v+=3){const A=M[v+0],b=M[v+1],P=M[v+2];h.push(A,b,b,P,P,A)}}else{const M=m.array;y=m.version;for(let v=0,_=M.length/3-1;v<_;v+=3){const A=v+0,b=v+1,P=v+2;h.push(A,b,b,P,P,A)}}const g=new(m.count>=65535?Mf:yf)(h,1);g.version=y;const p=r.get(f);p&&t.remove(p),r.set(f,g)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function hx(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function l(h,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,h*o,m),e.update(d,n,m))}function u(h,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function f(h,d,m,y){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/o,d[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,y,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*y[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function fx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:te("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dx(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let N=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",N)};var d=N;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),y===!0&&(_=2),g===!0&&(_=3);let A=a.attributes.position.count*_,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*b*4*f),x=new _f(P,A,b,f);x.type=Fn,x.needsUpdate=!0;const T=_*4;for(let I=0;I<f;I++){const U=p[I],V=M[I],Y=v[I],G=A*b*4*I;for(let H=0;H<U.count;H++){const B=H*T;m===!0&&(s.fromBufferAttribute(U,H),P[G+B+0]=s.x,P[G+B+1]=s.y,P[G+B+2]=s.z,P[G+B+3]=0),y===!0&&(s.fromBufferAttribute(V,H),P[G+B+4]=s.x,P[G+B+5]=s.y,P[G+B+6]=s.z,P[G+B+7]=0),g===!0&&(s.fromBufferAttribute(Y,H),P[G+B+8]=s.x,P[G+B+9]=s.y,P[G+B+10]=s.z,P[G+B+11]=Y.itemSize===4?s.w:1)}}h={count:f,texture:x,size:new ct(A,b)},n.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const y=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function px(i,t,e,n,s){let r=new WeakMap;function o(l){const u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const mx={[tf]:"LINEAR_TONE_MAPPING",[ef]:"REINHARD_TONE_MAPPING",[nf]:"CINEON_TONE_MAPPING",[sf]:"ACES_FILMIC_TONE_MAPPING",[of]:"AGX_TONE_MAPPING",[af]:"NEUTRAL_TONE_MAPPING",[rf]:"CUSTOM_TONE_MAPPING"};function gx(i,t,e,n,s){const r=new Vn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),o=new Vn(t,e,{type:ci,depthBuffer:!1,stencilBuffer:!1}),a=new be;a.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const c=new ng({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Kt(a,c),u=new Oc(-1,1,1,-1,0,1);let f=null,h=null,d=!1,m,y=null,g=[],p=!1;this.setSize=function(M,v){r.setSize(M,v),o.setSize(M,v);for(let _=0;_<g.length;_++){const A=g[_];A.setSize&&A.setSize(M,v)}},this.setEffects=function(M){g=M,p=g.length>0&&g[0].isRenderPass===!0;const v=r.width,_=r.height;for(let A=0;A<g.length;A++){const b=g[A];b.setSize&&b.setSize(v,_)}},this.begin=function(M,v){if(d||M.toneMapping===zn&&g.length===0)return!1;if(y=v,v!==null){const _=v.width,A=v.height;(r.width!==_||r.height!==A)&&this.setSize(_,A)}return p===!1&&M.setRenderTarget(r),m=M.toneMapping,M.toneMapping=zn,!0},this.hasRenderPass=function(){return p},this.end=function(M,v){M.toneMapping=m,d=!0;let _=r,A=o;for(let b=0;b<g.length;b++){const P=g[b];if(P.enabled!==!1&&(P.render(M,A,_,v),P.needsSwap!==!1)){const x=_;_=A,A=x}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,c.defines={},ee.getTransfer(f)===re&&(c.defines.SRGB_TRANSFER="");const b=mx[h];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(y),M.render(l,u),y=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const zf=new Ze,sc=new Pr(1,1),kf=new _f,Vf=new em,Gf=new Sf,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function Ys(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function aa(i,t){let e=ih[t];e===void 0&&(e=new Int32Array(t),ih[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _x(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function vx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function yx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Mx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),Ae(e,n)}}function Sx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),Ae(e,n)}}function Ex(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),Ae(e,n)}}function bx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Rx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function Ix(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=e.isReversedDepthBuffer()?wc:Tc,r=sc):r=zf,e.setTexture2D(t||r,s)}function Dx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vf,s)}function Nx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gf,s)}function Ux(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kf,s)}function Fx(i){switch(i){case 5126:return _x;case 35664:return xx;case 35665:return vx;case 35666:return yx;case 35674:return Mx;case 35675:return Sx;case 35676:return Ex;case 5124:case 35670:return bx;case 35667:case 35671:return Tx;case 35668:case 35672:return wx;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Px;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}function Ox(i,t){i.uniform1fv(this.addr,t)}function Bx(i,t){const e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function zx(i,t){const e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function kx(i,t){const e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function Vx(i,t){const e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gx(i,t){const e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hx(i,t){const e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wx(i,t){i.uniform1iv(this.addr,t)}function Xx(i,t){i.uniform2iv(this.addr,t)}function qx(i,t){i.uniform3iv(this.addr,t)}function Yx(i,t){i.uniform4iv(this.addr,t)}function jx(i,t){i.uniform1uiv(this.addr,t)}function $x(i,t){i.uniform2uiv(this.addr,t)}function Zx(i,t){i.uniform3uiv(this.addr,t)}function Kx(i,t){i.uniform4uiv(this.addr,t)}function Jx(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=sc:o=zf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Qx(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vf,r[o])}function tv(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gf,r[o])}function ev(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kf,r[o])}function nv(i){switch(i){case 5126:return Ox;case 35664:return Bx;case 35665:return zx;case 35666:return kx;case 35674:return Vx;case 35675:return Gx;case 35676:return Hx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return qx;case 35669:case 35673:return Yx;case 5125:return jx;case 36294:return $x;case 36295:return Zx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return ev}}class iv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fx(e.type)}}class sv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nv(e.type)}}class rv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function ah(i,t){i.seq.push(t),i.map[t.id]=t}function ov(i,t,e){const n=i.name,s=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),o=$a.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ah(e,l===void 0?new iv(a,i,t):new sv(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new rv(a),ah(e,f)),e=f}}}class Uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);ov(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function lh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const av=37297;let lv=0;function cv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ch=new Xt;function uv(i){ee._getMatrix(ch,ee.workingColorSpace,i);const t=`mat3( ${ch.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Wo:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+cv(i.getShaderSource(t),a)}else return r}function hv(i,t){const e=uv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const fv={[tf]:"Linear",[ef]:"Reinhard",[nf]:"Cineon",[sf]:"ACESFilmic",[of]:"AgX",[af]:"Neutral",[rf]:"Custom"};function dv(i,t){const e=fv[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bo=new O;function pv(){ee.getLuminanceCoefficients(bo);const i=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function gv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _v(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ar(i){return i!==""}function hh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(xv,yv)}const vv=new Map;function yv(i,t){let e=jt[t];if(e===void 0){const n=vv.get(t);if(n!==void 0)e=jt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rc(e)}const Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(i){return i.replace(Mv,Sv)}function Sv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Ev={[Co]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function bv(i){return Ev[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tv={[es]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function wv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Tv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Av={[zs]:"ENVMAP_MODE_REFRACTION"};function Rv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Av[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cv={[_c]:"ENVMAP_BLENDING_MULTIPLY",[vp]:"ENVMAP_BLENDING_MIX",[yp]:"ENVMAP_BLENDING_ADD"};function Pv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cv[i.combine]||"ENVMAP_BLENDING_NONE"}function Lv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Iv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=bv(e),l=wv(e),u=Rv(e),f=Pv(e),h=Lv(e),d=mv(e),m=gv(r),y=s.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ar).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(g=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?jt.tonemapping_pars_fragment:"",e.toneMapping!==zn?dv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,hv("linearToOutputTexel",e.outputColorSpace),pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),o=rc(o),o=hh(o,e),o=fh(o,e),a=rc(a),a=hh(a,e),a=fh(a,e),o=dh(o),a=dh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+g+o,_=M+p+a,A=lh(s,s.VERTEX_SHADER,v),b=lh(s,s.FRAGMENT_SHADER,_);s.attachShader(y,A),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(I){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(b)||"",G=U.trim(),H=V.trim(),B=Y.trim();let j=!0,ot=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,b);else{const ht=uh(s,A,"vertex"),gt=uh(s,b,"fragment");te("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+ht+`
`+gt)}else G!==""?Gt("WebGLProgram: Program Info Log:",G):(H===""||B==="")&&(ot=!1);ot&&(I.diagnostics={runnable:j,programLog:G,vertexShader:{log:H,prefix:g},fragmentShader:{log:B,prefix:p}})}s.deleteShader(A),s.deleteShader(b),x=new Uo(s,y),T=_v(s,y)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(y,av)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=b,this}let Dv=0;class Nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uv(t),e.set(t,n)),n}}class Uv{constructor(t){this.id=Dv++,this.code=t,this.usedTimes=0}}function Fv(i,t,e,n,s,r){const o=new xf,a=new Nv,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,T,N,I,U){const V=I.fog,Y=U.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=t.get(x.envMap||G,H),j=B&&B.mapping===sa?B.image.height:null,ot=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Gt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gt=ht!==void 0?ht.length:0;let Mt=0;Y.morphAttributes.position!==void 0&&(Mt=1),Y.morphAttributes.normal!==void 0&&(Mt=2),Y.morphAttributes.color!==void 0&&(Mt=3);let Ot,J,k,w;if(ot){const se=Nn[ot];Ot=se.vertexShader,J=se.fragmentShader}else Ot=x.vertexShader,J=x.fragmentShader,a.update(x),k=a.getVertexShaderID(x),w=a.getFragmentShaderID(x);const R=i.getRenderTarget(),F=i.state.buffers.depth.getReversed(),nt=U.isInstancedMesh===!0,X=U.isBatchedMesh===!0,lt=!!x.map,_t=!!x.matcap,dt=!!B,z=!!x.aoMap,$=!!x.lightMap,K=!!x.bumpMap,rt=!!x.normalMap,E=!!x.displacementMap,D=!!x.emissiveMap,at=!!x.metalnessMap,xt=!!x.roughnessMap,pt=x.anisotropy>0,L=x.clearcoat>0,S=x.dispersion>0,W=x.iridescence>0,tt=x.sheen>0,ft=x.transmission>0,it=pt&&!!x.anisotropyMap,At=L&&!!x.clearcoatMap,vt=L&&!!x.clearcoatNormalMap,Ut=L&&!!x.clearcoatRoughnessMap,Nt=W&&!!x.iridescenceMap,mt=W&&!!x.iridescenceThicknessMap,yt=tt&&!!x.sheenColorMap,Pt=tt&&!!x.sheenRoughnessMap,Lt=!!x.specularMap,wt=!!x.specularColorMap,Wt=!!x.specularIntensityMap,q=ft&&!!x.transmissionMap,bt=ft&&!!x.thicknessMap,Et=!!x.gradientMap,Dt=!!x.alphaMap,St=x.alphaTest>0,ut=!!x.alphaHash,Ft=!!x.extensions;let qt=zn;x.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(qt=i.toneMapping);const fe={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:J,defines:x.defines,customVertexShaderID:k,customFragmentShaderID:w,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:X,batchingColor:X&&U._colorsTexture!==null,instancing:nt,instancingColor:nt&&U.instanceColor!==null,instancingMorph:nt&&U.morphTexture!==null,outputColorSpace:R===null?i.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vs,alphaToCoverage:!!x.alphaToCoverage,map:lt,matcap:_t,envMap:dt,envMapMode:dt&&B.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:$,bumpMap:K,normalMap:rt,displacementMap:E,emissiveMap:D,normalMapObjectSpace:rt&&x.normalMapType===Ep,normalMapTangentSpace:rt&&x.normalMapType===bc,metalnessMap:at,roughnessMap:xt,anisotropy:pt,anisotropyMap:it,clearcoat:L,clearcoatMap:At,clearcoatNormalMap:vt,clearcoatRoughnessMap:Ut,dispersion:S,iridescence:W,iridescenceMap:Nt,iridescenceThicknessMap:mt,sheen:tt,sheenColorMap:yt,sheenRoughnessMap:Pt,specularMap:Lt,specularColorMap:wt,specularIntensityMap:Wt,transmission:ft,transmissionMap:q,thicknessMap:bt,gradientMap:Et,opaque:x.transparent===!1&&x.blending===Ds&&x.alphaToCoverage===!1,alphaMap:Dt,alphaTest:St,alphaHash:ut,combine:x.combine,mapUv:lt&&m(x.map.channel),aoMapUv:z&&m(x.aoMap.channel),lightMapUv:$&&m(x.lightMap.channel),bumpMapUv:K&&m(x.bumpMap.channel),normalMapUv:rt&&m(x.normalMap.channel),displacementMapUv:E&&m(x.displacementMap.channel),emissiveMapUv:D&&m(x.emissiveMap.channel),metalnessMapUv:at&&m(x.metalnessMap.channel),roughnessMapUv:xt&&m(x.roughnessMap.channel),anisotropyMapUv:it&&m(x.anisotropyMap.channel),clearcoatMapUv:At&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:vt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&m(x.sheenRoughnessMap.channel),specularMapUv:Lt&&m(x.specularMap.channel),specularColorMapUv:wt&&m(x.specularColorMap.channel),specularIntensityMapUv:Wt&&m(x.specularIntensityMap.channel),transmissionMapUv:q&&m(x.transmissionMap.channel),thicknessMapUv:bt&&m(x.thicknessMap.channel),alphaMapUv:Dt&&m(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(rt||pt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(lt||Dt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Y.attributes.normal===void 0&&rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:F,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Mt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:lt&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:D&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dn,flipSided:x.side===Je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ft&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&x.extensions.multiDraw===!0||X)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)T.push(N),T.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(T,x),M(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const T=d[x.type];let N;if(T){const I=Nn[T];N=Qm.clone(I.uniforms)}else N=x.uniforms;return N}function _(x,T){let N=u.get(T);return N!==void 0?++N.usedTimes:(N=new Iv(i,T,x,s),l.push(N),u.set(T,N)),N}function A(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function P(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:v,acquireProgram:_,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:P}}function Ov(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Bv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,y,g,p){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:p},i[t]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=m,M.materialVariant=o(h),M.groupOrder=y,M.renderOrder=h.renderOrder,M.z=g,M.group=p),t++,M}function c(h,d,m,y,g,p){const M=a(h,d,m,y,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function l(h,d,m,y,g,p){const M=a(h,d,m,y,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,d){e.length>1&&e.sort(h||Bv),n.length>1&&n.sort(d||mh),s.length>1&&s.sort(d||mh)}function f(){for(let h=t,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function zv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new gh,i.set(n,[o])):s>=r.length?(o=new gh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Jt};break;case"SpotLight":e={position:new O,direction:new O,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Vv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gv=0;function Hv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wv(i){const t=new kv,e=Vv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const s=new O,r=new me,o=new me;function a(l){let u=0,f=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,m=0,y=0,g=0,p=0,M=0,v=0,_=0,A=0,b=0,P=0;l.sort(Hv);for(let T=0,N=l.length;T<N;T++){const I=l[T],U=I.color,V=I.intensity,Y=I.distance;let G=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ks?G=I.shadow.map.texture:G=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=U.r*V,f+=U.g*V,h+=U.b*V;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],V);P++}else if(I.isDirectionalLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,j=e.get(I);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=I.shadow.matrix,M++}n.directional[d]=H,d++}else if(I.isSpotLight){const H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(U).multiplyScalar(V),H.distance=Y,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[y]=H;const B=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,B.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[y]=B.matrix,I.castShadow){const j=e.get(I);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=G,_++}y++}else if(I.isRectAreaLight){const H=t.get(I);H.color.copy(U).multiplyScalar(V),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=H,g++}else if(I.isPointLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const B=I.shadow,j=e.get(I);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,j.shadowCameraNear=B.camera.near,j.shadowCameraFar=B.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=I.shadow.matrix,v++}n.point[m]=H,m++}else if(I.isHemisphereLight){const H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(V),H.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[p]=H,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==d||x.pointLength!==m||x.spotLength!==y||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==v||x.numSpotShadows!==_||x.numSpotMaps!==A||x.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=P,x.directionalLength=d,x.pointLength=m,x.spotLength=y,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=v,x.numSpotShadows=_,x.numSpotMaps=A,x.numLightProbes=P,n.version=Gv++)}function c(l,u){let f=0,h=0,d=0,m=0,y=0;const g=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const v=l[p];if(v.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(v.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(v.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const _=n.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:n}}function _h(i){const t=new Wv(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Xv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new _h(i),t.set(s,[a])):r>=o.length?(a=new _h(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
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
}`,jv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],$v=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],xh=new me,er=new O,Za=new O;function Zv(i,t,e){let n=new Lc;const s=new ct,r=new ct,o=new Me,a=new sg,c=new rg,l={},u=e.maxTextureSize,f={[Ri]:Je,[Je]:Ri,[dn]:dn},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:qv,fragmentShader:Yv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new be;m.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Kt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let p=this.type;this.render=function(b,P,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Qh&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Co);const T=i.getRenderTarget(),N=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(oi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=p!==this.type;V&&P.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(G=>G.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,G=b.length;Y<G;Y++){const H=b[Y],B=H.shadow;if(B===void 0){Gt("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const j=B.getFrameExtents();s.multiply(j),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,B.mapSize.y=r.y));const ot=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ot,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===sr){if(H.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Vn(s.x,s.y,{format:ks,type:ci,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new Pr(s.x,s.y,Fn),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=ui,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Be,B.map.depthTexture.magFilter=Be}else H.isPointLight?(B.map=new Bf(s.x),B.map.depthTexture=new ym(s.x,Hn)):(B.map=new Vn(s.x,s.y),B.map.depthTexture=new Pr(s.x,s.y,Hn)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=ui,this.type===Co?(B.map.depthTexture.compareFunction=ot?wc:Tc,B.map.depthTexture.minFilter=Ge,B.map.depthTexture.magFilter=Ge):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Be,B.map.depthTexture.magFilter=Be);B.camera.updateProjectionMatrix()}const ht=B.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<ht;gt++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,gt),i.clear();else{gt===0&&(i.setRenderTarget(B.map),i.clear());const Mt=B.getViewport(gt);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),U.viewport(o)}if(H.isPointLight){const Mt=B.camera,Ot=B.matrix,J=H.distance||Mt.far;J!==Mt.far&&(Mt.far=J,Mt.updateProjectionMatrix()),er.setFromMatrixPosition(H.matrixWorld),Mt.position.copy(er),Za.copy(Mt.position),Za.add(jv[gt]),Mt.up.copy($v[gt]),Mt.lookAt(Za),Mt.updateMatrixWorld(),Ot.makeTranslation(-er.x,-er.y,-er.z),xh.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(xh,Mt.coordinateSystem,Mt.reversedDepth)}else B.updateMatrices(H);n=B.getFrustum(),_(P,x,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===sr&&M(B,x),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,N,I)};function M(b,P){const x=t.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vn(s.x,s.y,{format:ks,type:ci})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(P,null,x,h,y,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(P,null,x,d,y,null)}function v(b,P,x,T){let N=null;const I=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)N=I;else if(N=x.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=N.uuid,V=P.uuid;let Y=l[U];Y===void 0&&(Y={},l[U]=Y);let G=Y[V];G===void 0&&(G=N.clone(),Y[V]=G,P.addEventListener("dispose",A)),N=G}if(N.visible=P.visible,N.wireframe=P.wireframe,T===sr?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:f[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const U=i.properties.get(N);U.light=x}return N}function _(b,P,x,T,N){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===sr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const V=t.update(b),Y=b.material;if(Array.isArray(Y)){const G=V.groups;for(let H=0,B=G.length;H<B;H++){const j=G[H],ot=Y[j.materialIndex];if(ot&&ot.visible){const ht=v(b,ot,T,N);b.onBeforeShadow(i,b,P,x,V,ht,j),i.renderBufferDirect(x,null,V,ht,b,j),b.onAfterShadow(i,b,P,x,V,ht,j)}}}else if(Y.visible){const G=v(b,Y,T,N);b.onBeforeShadow(i,b,P,x,V,G,null),i.renderBufferDirect(x,null,V,G,b,null),b.onAfterShadow(i,b,P,x,V,G,null)}}const U=b.children;for(let V=0,Y=U.length;V<Y;V++)_(U[V],P,x,T,N)}function A(b){b.target.removeEventListener("dispose",A);for(const x in l){const T=l[x],N=b.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function Kv(i,t){function e(){let q=!1;const bt=new Me;let Et=null;const Dt=new Me(0,0,0,0);return{setMask:function(St){Et!==St&&!q&&(i.colorMask(St,St,St,St),Et=St)},setLocked:function(St){q=St},setClear:function(St,ut,Ft,qt,fe){fe===!0&&(St*=qt,ut*=qt,Ft*=qt),bt.set(St,ut,Ft,qt),Dt.equals(bt)===!1&&(i.clearColor(St,ut,Ft,qt),Dt.copy(bt))},reset:function(){q=!1,Et=null,Dt.set(-1,0,0,0)}}}function n(){let q=!1,bt=!1,Et=null,Dt=null,St=null;return{setReversed:function(ut){if(bt!==ut){const Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),bt=ut;const qt=St;St=null,this.setClear(qt)}},getReversed:function(){return bt},setTest:function(ut){ut?R(i.DEPTH_TEST):F(i.DEPTH_TEST)},setMask:function(ut){Et!==ut&&!q&&(i.depthMask(ut),Et=ut)},setFunc:function(ut){if(bt&&(ut=Dp[ut]),Dt!==ut){switch(ut){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case xl:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=ut}},setLocked:function(ut){q=ut},setClear:function(ut){St!==ut&&(St=ut,bt&&(ut=1-ut),i.clearDepth(ut))},reset:function(){q=!1,Et=null,Dt=null,St=null,bt=!1}}}function s(){let q=!1,bt=null,Et=null,Dt=null,St=null,ut=null,Ft=null,qt=null,fe=null;return{setTest:function(se){q||(se?R(i.STENCIL_TEST):F(i.STENCIL_TEST))},setMask:function(se){bt!==se&&!q&&(i.stencilMask(se),bt=se)},setFunc:function(se,qn,Yn){(Et!==se||Dt!==qn||St!==Yn)&&(i.stencilFunc(se,qn,Yn),Et=se,Dt=qn,St=Yn)},setOp:function(se,qn,Yn){(ut!==se||Ft!==qn||qt!==Yn)&&(i.stencilOp(se,qn,Yn),ut=se,Ft=qn,qt=Yn)},setLocked:function(se){q=se},setClear:function(se){fe!==se&&(i.clearStencil(se),fe=se)},reset:function(){q=!1,bt=null,Et=null,Dt=null,St=null,ut=null,Ft=null,qt=null,fe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,y=!1,g=null,p=null,M=null,v=null,_=null,A=null,b=null,P=new Jt(0,0,0),x=0,T=!1,N=null,I=null,U=null,V=null,Y=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=B>=1):j.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=B>=2);let ot=null,ht={};const gt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Ot=new Me().fromArray(gt),J=new Me().fromArray(Mt);function k(q,bt,Et,Dt){const St=new Uint8Array(4),ut=i.createTexture();i.bindTexture(q,ut),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<Et;Ft++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(bt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return ut}const w={};w[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),w[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),w[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),R(i.DEPTH_TEST),o.setFunc(Bs),K(!1),rt(ou),R(i.CULL_FACE),z(oi);function R(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function F(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function nt(q,bt){return f[q]!==bt?(i.bindFramebuffer(q,bt),f[q]=bt,q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=bt),q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function X(q,bt){let Et=d,Dt=!1;if(q){Et=h.get(bt),Et===void 0&&(Et=[],h.set(bt,Et));const St=q.textures;if(Et.length!==St.length||Et[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ft=St.length;ut<Ft;ut++)Et[ut]=i.COLOR_ATTACHMENT0+ut;Et.length=St.length,Dt=!0}}else Et[0]!==i.BACK&&(Et[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(Et)}function lt(q){return m!==q?(i.useProgram(q),m=q,!0):!1}const _t={[Xi]:i.FUNC_ADD,[np]:i.FUNC_SUBTRACT,[ip]:i.FUNC_REVERSE_SUBTRACT};_t[sp]=i.MIN,_t[rp]=i.MAX;const dt={[op]:i.ZERO,[ap]:i.ONE,[lp]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[pp]:i.SRC_ALPHA_SATURATE,[fp]:i.DST_COLOR,[up]:i.DST_ALPHA,[cp]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[dp]:i.ONE_MINUS_DST_COLOR,[hp]:i.ONE_MINUS_DST_ALPHA,[mp]:i.CONSTANT_COLOR,[gp]:i.ONE_MINUS_CONSTANT_COLOR,[_p]:i.CONSTANT_ALPHA,[xp]:i.ONE_MINUS_CONSTANT_ALPHA};function z(q,bt,Et,Dt,St,ut,Ft,qt,fe,se){if(q===oi){y===!0&&(F(i.BLEND),y=!1);return}if(y===!1&&(R(i.BLEND),y=!0),q!==ep){if(q!==g||se!==T){if((p!==Xi||_!==Xi)&&(i.blendEquation(i.FUNC_ADD),p=Xi,_=Xi),se)switch(q){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case au:i.blendFunc(i.ONE,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",q);break}else switch(q){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case au:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lu:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cu:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",q);break}M=null,v=null,A=null,b=null,P.set(0,0,0),x=0,g=q,T=se}return}St=St||bt,ut=ut||Et,Ft=Ft||Dt,(bt!==p||St!==_)&&(i.blendEquationSeparate(_t[bt],_t[St]),p=bt,_=St),(Et!==M||Dt!==v||ut!==A||Ft!==b)&&(i.blendFuncSeparate(dt[Et],dt[Dt],dt[ut],dt[Ft]),M=Et,v=Dt,A=ut,b=Ft),(qt.equals(P)===!1||fe!==x)&&(i.blendColor(qt.r,qt.g,qt.b,fe),P.copy(qt),x=fe),g=q,T=!1}function $(q,bt){q.side===dn?F(i.CULL_FACE):R(i.CULL_FACE);let Et=q.side===Je;bt&&(Et=!Et),K(Et),q.blending===Ds&&q.transparent===!1?z(oi):z(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);const Dt=q.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),D(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?R(i.SAMPLE_ALPHA_TO_COVERAGE):F(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(q){N!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),N=q)}function rt(q){q!==Qd?(R(i.CULL_FACE),q!==I&&(q===ou?i.cullFace(i.BACK):q===tp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):F(i.CULL_FACE),I=q}function E(q){q!==U&&(H&&i.lineWidth(q),U=q)}function D(q,bt,Et){q?(R(i.POLYGON_OFFSET_FILL),(V!==bt||Y!==Et)&&(V=bt,Y=Et,o.getReversed()&&(bt=-bt),i.polygonOffset(bt,Et))):F(i.POLYGON_OFFSET_FILL)}function at(q){q?R(i.SCISSOR_TEST):F(i.SCISSOR_TEST)}function xt(q){q===void 0&&(q=i.TEXTURE0+G-1),ot!==q&&(i.activeTexture(q),ot=q)}function pt(q,bt,Et){Et===void 0&&(ot===null?Et=i.TEXTURE0+G-1:Et=ot);let Dt=ht[Et];Dt===void 0&&(Dt={type:void 0,texture:void 0},ht[Et]=Dt),(Dt.type!==q||Dt.texture!==bt)&&(ot!==Et&&(i.activeTexture(Et),ot=Et),i.bindTexture(q,bt||w[q]),Dt.type=q,Dt.texture=bt)}function L(){const q=ht[ot];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(q){te("WebGLState:",q)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(q){te("WebGLState:",q)}}function tt(){try{i.texSubImage2D(...arguments)}catch(q){te("WebGLState:",q)}}function ft(){try{i.texSubImage3D(...arguments)}catch(q){te("WebGLState:",q)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(q){te("WebGLState:",q)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(q){te("WebGLState:",q)}}function vt(){try{i.texStorage2D(...arguments)}catch(q){te("WebGLState:",q)}}function Ut(){try{i.texStorage3D(...arguments)}catch(q){te("WebGLState:",q)}}function Nt(){try{i.texImage2D(...arguments)}catch(q){te("WebGLState:",q)}}function mt(){try{i.texImage3D(...arguments)}catch(q){te("WebGLState:",q)}}function yt(q){Ot.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Ot.copy(q))}function Pt(q){J.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),J.copy(q))}function Lt(q,bt){let Et=l.get(bt);Et===void 0&&(Et=new WeakMap,l.set(bt,Et));let Dt=Et.get(q);Dt===void 0&&(Dt=i.getUniformBlockIndex(bt,q.name),Et.set(q,Dt))}function wt(q,bt){const Dt=l.get(bt).get(q);c.get(bt)!==Dt&&(i.uniformBlockBinding(bt,Dt,q.__bindingPointIndex),c.set(bt,Dt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,ht={},f={},h=new WeakMap,d=[],m=null,y=!1,g=null,p=null,M=null,v=null,_=null,A=null,b=null,P=new Jt(0,0,0),x=0,T=!1,N=null,I=null,U=null,V=null,Y=null,Ot.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:R,disable:F,bindFramebuffer:nt,drawBuffers:X,useProgram:lt,setBlending:z,setMaterial:$,setFlipSided:K,setCullFace:rt,setLineWidth:E,setPolygonOffset:D,setScissorTest:at,activeTexture:xt,bindTexture:pt,unbindTexture:L,compressedTexImage2D:S,compressedTexImage3D:W,texImage2D:Nt,texImage3D:mt,updateUBOMapping:Lt,uniformBlockBinding:wt,texStorage2D:vt,texStorage3D:Ut,texSubImage2D:tt,texSubImage3D:ft,compressedTexSubImage2D:it,compressedTexSubImage3D:At,scissor:yt,viewport:Pt,reset:Wt}}function Jv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,S){return d?new OffscreenCanvas(L,S):Xo("canvas")}function y(L,S,W){let tt=1;const ft=pt(L);if((ft.width>W||ft.height>W)&&(tt=W/Math.max(ft.width,ft.height)),tt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const it=Math.floor(tt*ft.width),At=Math.floor(tt*ft.height);f===void 0&&(f=m(it,At));const vt=S?m(it,At):f;return vt.width=it,vt.height=At,vt.getContext("2d").drawImage(L,0,0,it,At),Gt("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+it+"x"+At+")."),vt}else return"data"in L&&Gt("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),L;return L}function g(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(L,S,W,tt,ft=!1){if(L!==null){if(i[L]!==void 0)return i[L];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let it=S;if(S===i.RED&&(W===i.FLOAT&&(it=i.R32F),W===i.HALF_FLOAT&&(it=i.R16F),W===i.UNSIGNED_BYTE&&(it=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.R8UI),W===i.UNSIGNED_SHORT&&(it=i.R16UI),W===i.UNSIGNED_INT&&(it=i.R32UI),W===i.BYTE&&(it=i.R8I),W===i.SHORT&&(it=i.R16I),W===i.INT&&(it=i.R32I)),S===i.RG&&(W===i.FLOAT&&(it=i.RG32F),W===i.HALF_FLOAT&&(it=i.RG16F),W===i.UNSIGNED_BYTE&&(it=i.RG8)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RG8UI),W===i.UNSIGNED_SHORT&&(it=i.RG16UI),W===i.UNSIGNED_INT&&(it=i.RG32UI),W===i.BYTE&&(it=i.RG8I),W===i.SHORT&&(it=i.RG16I),W===i.INT&&(it=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGB8UI),W===i.UNSIGNED_SHORT&&(it=i.RGB16UI),W===i.UNSIGNED_INT&&(it=i.RGB32UI),W===i.BYTE&&(it=i.RGB8I),W===i.SHORT&&(it=i.RGB16I),W===i.INT&&(it=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),W===i.UNSIGNED_INT&&(it=i.RGBA32UI),W===i.BYTE&&(it=i.RGBA8I),W===i.SHORT&&(it=i.RGBA16I),W===i.INT&&(it=i.RGBA32I)),S===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),S===i.RGBA){const At=ft?Wo:ee.getTransfer(tt);W===i.FLOAT&&(it=i.RGBA32F),W===i.HALF_FLOAT&&(it=i.RGBA16F),W===i.UNSIGNED_BYTE&&(it=At===re?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function _(L,S){let W;return L?S===null||S===Hn||S===Ar?W=i.DEPTH24_STENCIL8:S===Fn?W=i.DEPTH32F_STENCIL8:S===wr&&(W=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hn||S===Ar?W=i.DEPTH_COMPONENT24:S===Fn?W=i.DEPTH_COMPONENT32F:S===wr&&(W=i.DEPTH_COMPONENT16),W}function A(L,S){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Be&&L.minFilter!==Ge?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function b(L){const S=L.target;S.removeEventListener("dispose",b),x(S),S.isVideoTexture&&u.delete(S)}function P(L){const S=L.target;S.removeEventListener("dispose",P),N(S)}function x(L){const S=n.get(L);if(S.__webglInit===void 0)return;const W=L.source,tt=h.get(W);if(tt){const ft=tt[S.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&T(L),Object.keys(tt).length===0&&h.delete(W)}n.remove(L)}function T(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const W=L.source,tt=h.get(W);delete tt[S.__cacheKey],o.memory.textures--}function N(L){const S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(S.__webglFramebuffer[tt]))for(let ft=0;ft<S.__webglFramebuffer[tt].length;ft++)i.deleteFramebuffer(S.__webglFramebuffer[tt][ft]);else i.deleteFramebuffer(S.__webglFramebuffer[tt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[tt])}else{if(Array.isArray(S.__webglFramebuffer))for(let tt=0;tt<S.__webglFramebuffer.length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[tt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let tt=0;tt<S.__webglColorRenderbuffer.length;tt++)S.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[tt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=L.textures;for(let tt=0,ft=W.length;tt<ft;tt++){const it=n.get(W[tt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(W[tt])}n.remove(L)}let I=0;function U(){I=0}function V(){const L=I;return L>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function Y(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function G(L,S){const W=n.get(L);if(L.isVideoTexture&&at(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const tt=L.image;if(tt===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{w(W,L,S);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function H(L,S){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){w(W,L,S);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function B(L,S){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){w(W,L,S);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function j(L,S){const W=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){R(W,L,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}const ot={[Ml]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},ht={[Be]:i.NEAREST,[Mp]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},gt={[bp]:i.NEVER,[Cp]:i.ALWAYS,[Tp]:i.LESS,[Tc]:i.LEQUAL,[wp]:i.EQUAL,[wc]:i.GEQUAL,[Ap]:i.GREATER,[Rp]:i.NOTEQUAL};function Mt(L,S){if(S.type===Fn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ge||S.magFilter===ga||S.magFilter===$r||S.magFilter===Zi||S.minFilter===Ge||S.minFilter===ga||S.minFilter===$r||S.minFilter===Zi)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ot[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ot[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ot[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ht[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Be||S.minFilter!==$r&&S.minFilter!==Zi||S.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ot(L,S){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",b));const tt=S.source;let ft=h.get(tt);ft===void 0&&(ft={},h.set(tt,ft));const it=Y(S);if(it!==L.__cacheKey){ft[it]===void 0&&(ft[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ft[it].usedTimes++;const At=ft[L.__cacheKey];At!==void 0&&(ft[L.__cacheKey].usedTimes--,At.usedTimes===0&&T(S)),L.__cacheKey=it,L.__webglTexture=ft[it].texture}return W}function J(L,S,W){return Math.floor(Math.floor(L/W)/S)}function k(L,S,W,tt){const it=L.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,W,tt,S.data);else{it.sort((mt,yt)=>mt.start-yt.start);let At=0;for(let mt=1;mt<it.length;mt++){const yt=it[At],Pt=it[mt],Lt=yt.start+yt.count,wt=J(Pt.start,S.width,4),Wt=J(yt.start,S.width,4);Pt.start<=Lt+1&&wt===Wt&&J(Pt.start+Pt.count-1,S.width,4)===wt?yt.count=Math.max(yt.count,Pt.start+Pt.count-yt.start):(++At,it[At]=Pt)}it.length=At+1;const vt=i.getParameter(i.UNPACK_ROW_LENGTH),Ut=i.getParameter(i.UNPACK_SKIP_PIXELS),Nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let mt=0,yt=it.length;mt<yt;mt++){const Pt=it[mt],Lt=Math.floor(Pt.start/4),wt=Math.ceil(Pt.count/4),Wt=Lt%S.width,q=Math.floor(Lt/S.width),bt=wt,Et=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,Wt,q,bt,Et,W,tt,S.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,vt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nt)}}function w(L,S,W){let tt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=i.TEXTURE_3D);const ft=Ot(L,S),it=S.source;e.bindTexture(tt,L.__webglTexture,i.TEXTURE0+W);const At=n.get(it);if(it.version!==At.__version||ft===!0){e.activeTexture(i.TEXTURE0+W);const vt=ee.getPrimaries(ee.workingColorSpace),Ut=S.colorSpace===Si?null:ee.getPrimaries(S.colorSpace),Nt=S.colorSpace===Si||vt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let mt=y(S.image,!1,s.maxTextureSize);mt=xt(S,mt);const yt=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type);let Lt=v(S.internalFormat,yt,Pt,S.colorSpace,S.isVideoTexture);Mt(tt,S);let wt;const Wt=S.mipmaps,q=S.isVideoTexture!==!0,bt=At.__version===void 0||ft===!0,Et=it.dataReady,Dt=A(S,mt);if(S.isDepthTexture)Lt=_(S.format===Ki,S.type),bt&&(q?e.texStorage2D(i.TEXTURE_2D,1,Lt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,mt.width,mt.height,0,yt,Pt,null));else if(S.isDataTexture)if(Wt.length>0){q&&bt&&e.texStorage2D(i.TEXTURE_2D,Dt,Lt,Wt[0].width,Wt[0].height);for(let St=0,ut=Wt.length;St<ut;St++)wt=Wt[St],q?Et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,wt.width,wt.height,yt,Pt,wt.data):e.texImage2D(i.TEXTURE_2D,St,Lt,wt.width,wt.height,0,yt,Pt,wt.data);S.generateMipmaps=!1}else q?(bt&&e.texStorage2D(i.TEXTURE_2D,Dt,Lt,mt.width,mt.height),Et&&k(S,mt,yt,Pt)):e.texImage2D(i.TEXTURE_2D,0,Lt,mt.width,mt.height,0,yt,Pt,mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){q&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Lt,Wt[0].width,Wt[0].height,mt.depth);for(let St=0,ut=Wt.length;St<ut;St++)if(wt=Wt[St],S.format!==wn)if(yt!==null)if(q){if(Et)if(S.layerUpdates.size>0){const Ft=$u(wt.width,wt.height,S.format,S.type);for(const qt of S.layerUpdates){const fe=wt.data.subarray(qt*Ft/wt.data.BYTES_PER_ELEMENT,(qt+1)*Ft/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,qt,wt.width,wt.height,1,yt,fe)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,wt.width,wt.height,mt.depth,yt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,Lt,wt.width,wt.height,mt.depth,0,wt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,wt.width,wt.height,mt.depth,yt,Pt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,Lt,wt.width,wt.height,mt.depth,0,yt,Pt,wt.data)}else{q&&bt&&e.texStorage2D(i.TEXTURE_2D,Dt,Lt,Wt[0].width,Wt[0].height);for(let St=0,ut=Wt.length;St<ut;St++)wt=Wt[St],S.format!==wn?yt!==null?q?Et&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,wt.width,wt.height,yt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,St,Lt,wt.width,wt.height,0,wt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,wt.width,wt.height,yt,Pt,wt.data):e.texImage2D(i.TEXTURE_2D,St,Lt,wt.width,wt.height,0,yt,Pt,wt.data)}else if(S.isDataArrayTexture)if(q){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Lt,mt.width,mt.height,mt.depth),Et)if(S.layerUpdates.size>0){const St=$u(mt.width,mt.height,S.format,S.type);for(const ut of S.layerUpdates){const Ft=mt.data.subarray(ut*St/mt.data.BYTES_PER_ELEMENT,(ut+1)*St/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,mt.width,mt.height,1,yt,Pt,Ft)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,yt,Pt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,mt.width,mt.height,mt.depth,0,yt,Pt,mt.data);else if(S.isData3DTexture)q?(bt&&e.texStorage3D(i.TEXTURE_3D,Dt,Lt,mt.width,mt.height,mt.depth),Et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,yt,Pt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,mt.width,mt.height,mt.depth,0,yt,Pt,mt.data);else if(S.isFramebufferTexture){if(bt)if(q)e.texStorage2D(i.TEXTURE_2D,Dt,Lt,mt.width,mt.height);else{let St=mt.width,ut=mt.height;for(let Ft=0;Ft<Dt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Lt,St,ut,0,yt,Pt,null),St>>=1,ut>>=1}}else if(Wt.length>0){if(q&&bt){const St=pt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Lt,St.width,St.height)}for(let St=0,ut=Wt.length;St<ut;St++)wt=Wt[St],q?Et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,yt,Pt,wt):e.texImage2D(i.TEXTURE_2D,St,Lt,yt,Pt,wt);S.generateMipmaps=!1}else if(q){if(bt){const St=pt(mt);e.texStorage2D(i.TEXTURE_2D,Dt,Lt,St.width,St.height)}Et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Pt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,yt,Pt,mt);g(S)&&p(tt),At.__version=it.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function R(L,S,W){if(S.image.length!==6)return;const tt=Ot(L,S),ft=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);const it=n.get(ft);if(ft.version!==it.__version||tt===!0){e.activeTexture(i.TEXTURE0+W);const At=ee.getPrimaries(ee.workingColorSpace),vt=S.colorSpace===Si?null:ee.getPrimaries(S.colorSpace),Ut=S.colorSpace===Si||At===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Nt=S.isCompressedTexture||S.image[0].isCompressedTexture,mt=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let ut=0;ut<6;ut++)!Nt&&!mt?yt[ut]=y(S.image[ut],!0,s.maxCubemapSize):yt[ut]=mt?S.image[ut].image:S.image[ut],yt[ut]=xt(S,yt[ut]);const Pt=yt[0],Lt=r.convert(S.format,S.colorSpace),wt=r.convert(S.type),Wt=v(S.internalFormat,Lt,wt,S.colorSpace),q=S.isVideoTexture!==!0,bt=it.__version===void 0||tt===!0,Et=ft.dataReady;let Dt=A(S,Pt);Mt(i.TEXTURE_CUBE_MAP,S);let St;if(Nt){q&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Wt,Pt.width,Pt.height);for(let ut=0;ut<6;ut++){St=yt[ut].mipmaps;for(let Ft=0;Ft<St.length;Ft++){const qt=St[Ft];S.format!==wn?Lt!==null?q?Et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,0,0,qt.width,qt.height,Lt,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,Wt,qt.width,qt.height,0,qt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,0,0,qt.width,qt.height,Lt,wt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,Wt,qt.width,qt.height,0,Lt,wt,qt.data)}}}else{if(St=S.mipmaps,q&&bt){St.length>0&&Dt++;const ut=pt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Wt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(mt){q?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,yt[ut].width,yt[ut].height,Lt,wt,yt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Wt,yt[ut].width,yt[ut].height,0,Lt,wt,yt[ut].data);for(let Ft=0;Ft<St.length;Ft++){const fe=St[Ft].image[ut].image;q?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,0,0,fe.width,fe.height,Lt,wt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,Wt,fe.width,fe.height,0,Lt,wt,fe.data)}}else{q?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Lt,wt,yt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Wt,Lt,wt,yt[ut]);for(let Ft=0;Ft<St.length;Ft++){const qt=St[Ft];q?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,0,0,Lt,wt,qt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,Wt,Lt,wt,qt.image[ut])}}}g(S)&&p(i.TEXTURE_CUBE_MAP),it.__version=ft.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function F(L,S,W,tt,ft,it){const At=r.convert(W.format,W.colorSpace),vt=r.convert(W.type),Ut=v(W.internalFormat,At,vt,W.colorSpace),Nt=n.get(S),mt=n.get(W);if(mt.__renderTarget=S,!Nt.__hasExternalTextures){const yt=Math.max(1,S.width>>it),Pt=Math.max(1,S.height>>it);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,it,Ut,yt,Pt,S.depth,0,At,vt,null):e.texImage2D(ft,it,Ut,yt,Pt,0,At,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),D(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,ft,mt.__webglTexture,0,E(S)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,ft,mt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(L,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){const tt=S.depthTexture,ft=tt&&tt.isDepthTexture?tt.type:null,it=_(S.stencilBuffer,ft),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;D(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E(S),it,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,E(S),it,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,it,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,L)}else{const tt=S.textures;for(let ft=0;ft<tt.length;ft++){const it=tt[ft],At=r.convert(it.format,it.colorSpace),vt=r.convert(it.type),Ut=v(it.internalFormat,At,vt,it.colorSpace);D(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E(S),Ut,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,E(S),Ut,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(L,S,W){const tt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=n.get(S.depthTexture);if(ft.__renderTarget=S,(!ft.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),tt){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,S.depthTexture.addEventListener("dispose",b)),ft.__webglTexture===void 0){ft.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,S.depthTexture);const Nt=r.convert(S.depthTexture.format),mt=r.convert(S.depthTexture.type);let yt;S.depthTexture.format===ui?yt=i.DEPTH_COMPONENT24:S.depthTexture.format===Ki&&(yt=i.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,yt,S.width,S.height,0,Nt,mt,null)}}else G(S.depthTexture,0);const it=ft.__webglTexture,At=E(S),vt=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,Ut=S.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ui)D(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ut,vt,it,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,Ut,vt,it,0);else if(S.depthTexture.format===Ki)D(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ut,vt,it,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,Ut,vt,it,0);else throw new Error("Unknown depthTexture format")}function lt(L){const S=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const tt=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),tt){const ft=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,tt.removeEventListener("dispose",ft)};tt.addEventListener("dispose",ft),S.__depthDisposeCallback=ft}S.__boundDepthTexture=tt}if(L.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let tt=0;tt<6;tt++)X(S.__webglFramebuffer[tt],L,tt);else{const tt=L.texture.mipmaps;tt&&tt.length>0?X(S.__webglFramebuffer[0],L,0):X(S.__webglFramebuffer,L,0)}else if(W){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]===void 0)S.__webglDepthbuffer[tt]=i.createRenderbuffer(),nt(S.__webglDepthbuffer[tt],L,!1);else{const ft=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,it)}}else{const tt=L.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),nt(S.__webglDepthbuffer,L,!1);else{const ft=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(L,S,W){const tt=n.get(L);S!==void 0&&F(tt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&lt(L)}function dt(L){const S=L.texture,W=n.get(L),tt=n.get(S);L.addEventListener("dispose",P);const ft=L.textures,it=L.isWebGLCubeRenderTarget===!0,At=ft.length>1;if(At||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=S.version,o.memory.textures++),it){W.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[vt]=[];for(let Ut=0;Ut<S.mipmaps.length;Ut++)W.__webglFramebuffer[vt][Ut]=i.createFramebuffer()}else W.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)W.__webglFramebuffer[vt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(At)for(let vt=0,Ut=ft.length;vt<Ut;vt++){const Nt=n.get(ft[vt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&D(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let vt=0;vt<ft.length;vt++){const Ut=ft[vt];W.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[vt]);const Nt=r.convert(Ut.format,Ut.colorSpace),mt=r.convert(Ut.type),yt=v(Ut.internalFormat,Nt,mt,Ut.colorSpace,L.isXRRenderTarget===!0),Pt=E(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,yt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,W.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(W.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,S);for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ut=0;Ut<S.mipmaps.length;Ut++)F(W.__webglFramebuffer[vt][Ut],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ut);else F(W.__webglFramebuffer[vt],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);g(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let vt=0,Ut=ft.length;vt<Ut;vt++){const Nt=ft[vt],mt=n.get(Nt);let yt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,mt.__webglTexture),Mt(yt,Nt),F(W.__webglFramebuffer,L,Nt,i.COLOR_ATTACHMENT0+vt,yt,0),g(Nt)&&p(yt)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,tt.__webglTexture),Mt(vt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ut=0;Ut<S.mipmaps.length;Ut++)F(W.__webglFramebuffer[Ut],L,S,i.COLOR_ATTACHMENT0,vt,Ut);else F(W.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,vt,0);g(S)&&p(vt),e.unbindTexture()}L.depthBuffer&&lt(L)}function z(L){const S=L.textures;for(let W=0,tt=S.length;W<tt;W++){const ft=S[W];if(g(ft)){const it=M(L),At=n.get(ft).__webglTexture;e.bindTexture(it,At),p(it),e.unbindTexture()}}}const $=[],K=[];function rt(L){if(L.samples>0){if(D(L)===!1){const S=L.textures,W=L.width,tt=L.height;let ft=i.COLOR_BUFFER_BIT;const it=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(L),vt=S.length>1;if(vt)for(let Nt=0;Nt<S.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Ut=L.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Nt=0;Nt<S.length;Nt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Nt]);const mt=n.get(S[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,W,tt,0,0,W,tt,ft,i.NEAREST),c===!0&&($.length=0,K.length=0,$.push(i.COLOR_ATTACHMENT0+Nt),L.depthBuffer&&L.resolveDepthBuffer===!1&&($.push(it),K.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Nt=0;Nt<S.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Nt]);const mt=n.get(S[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function E(L){return Math.min(s.maxSamples,L.samples)}function D(L){const S=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(L){const S=o.render.frame;u.get(L)!==S&&(u.set(L,S),L.update())}function xt(L,S){const W=L.colorSpace,tt=L.format,ft=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Vs&&W!==Si&&(ee.getTransfer(W)===re?(tt!==wn||ft!==an)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",W)),S}function pt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=j,this.rebindTextures=_t,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=F,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Qv(i,t){function e(n,s=Si){let r;const o=ee.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ff)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cf)return i.BYTE;if(n===uf)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===xc)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===ci)return i.HALF_FLOAT;if(n===df)return i.ALPHA;if(n===pf)return i.RGB;if(n===wn)return i.RGBA;if(n===ui)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===mf)return i.RED;if(n===Mc)return i.RED_INTEGER;if(n===ks)return i.RG;if(n===Sc)return i.RG_INTEGER;if(n===Ec)return i.RGBA_INTEGER;if(n===Po||n===Lo||n===Io||n===Do)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===bl||n===Tl||n===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Il||n===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Rl)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return r.COMPRESSED_R11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Il)return r.COMPRESSED_RG11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jl||n===$l||n===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jl)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===Jl||n===Ql||n===tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ey=`
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

}`;class ny{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ef(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:ty,fragmentShader:ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iy extends Xs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null;const y=typeof XRWebGLBinding<"u",g=new ny,p={},M=e.getContextAttributes();let v=null,_=null;const A=[],b=[],P=new ct;let x=null;const T=new fn;T.viewport=new Me;const N=new fn;N.viewport=new Me;const I=[T,N],U=new pg;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let R=A[w];return R===void 0&&(R=new Sa,A[w]=R),R.getTargetRaySpace()},this.getControllerGrip=function(w){let R=A[w];return R===void 0&&(R=new Sa,A[w]=R),R.getGripSpace()},this.getHand=function(w){let R=A[w];return R===void 0&&(R=new Sa,A[w]=R),R.getHandSpace()};function G(w){const R=b.indexOf(w.inputSource);if(R===-1)return;const F=A[R];F!==void 0&&(F.update(w.inputSource,w.frame,l||o),F.dispatchEvent({type:w.type,data:w.inputSource}))}function H(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",B);for(let w=0;w<A.length;w++){const R=b[w];R!==null&&(b[w]=null,A[w].disconnect(R))}V=null,Y=null,g.reset();for(const w in p)delete p[w];t.setRenderTarget(v),d=null,h=null,f=null,s=null,_=null,k.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){r=w,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){a=w,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(w){l=w},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(w){if(s=w,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",H),s.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,nt=null,X=null;M.depth&&(X=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=M.stencil?Ki:ui,nt=M.stencil?Ar:Hn);const lt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(lt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Vn(h.textureWidth,h.textureHeight,{format:wn,type:an,depthTexture:new Pr(h.textureWidth,h.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const F={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,F),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Vn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),k.setContext(s),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(w){for(let R=0;R<w.removed.length;R++){const F=w.removed[R],nt=b.indexOf(F);nt>=0&&(b[nt]=null,A[nt].disconnect(F))}for(let R=0;R<w.added.length;R++){const F=w.added[R];let nt=b.indexOf(F);if(nt===-1){for(let lt=0;lt<A.length;lt++)if(lt>=b.length){b.push(F),nt=lt;break}else if(b[lt]===null){b[lt]=F,nt=lt;break}if(nt===-1)break}const X=A[nt];X&&X.connect(F)}}const j=new O,ot=new O;function ht(w,R,F){j.setFromMatrixPosition(R.matrixWorld),ot.setFromMatrixPosition(F.matrixWorld);const nt=j.distanceTo(ot),X=R.projectionMatrix.elements,lt=F.projectionMatrix.elements,_t=X[14]/(X[10]-1),dt=X[14]/(X[10]+1),z=(X[9]+1)/X[5],$=(X[9]-1)/X[5],K=(X[8]-1)/X[0],rt=(lt[8]+1)/lt[0],E=_t*K,D=_t*rt,at=nt/(-K+rt),xt=at*-K;if(R.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(xt),w.translateZ(at),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),X[10]===-1)w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{const pt=_t+at,L=dt+at,S=E-xt,W=D+(nt-xt),tt=z*dt/L*pt,ft=$*dt/L*pt;w.projectionMatrix.makePerspective(S,W,tt,ft,pt,L),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function gt(w,R){R===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(R.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(s===null)return;let R=w.near,F=w.far;g.texture!==null&&(g.depthNear>0&&(R=g.depthNear),g.depthFar>0&&(F=g.depthFar)),U.near=N.near=T.near=R,U.far=N.far=T.far=F,(V!==U.near||Y!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,Y=U.far),U.layers.mask=w.layers.mask|6,T.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;const nt=w.parent,X=U.cameras;gt(U,nt);for(let lt=0;lt<X.length;lt++)gt(X[lt],nt);X.length===2?ht(U,T,N):U.projectionMatrix.copy(T.projectionMatrix),Mt(w,U,nt)};function Mt(w,R,F){F===null?w.matrix.copy(R.matrixWorld):(w.matrix.copy(F.matrixWorld),w.matrix.invert(),w.matrix.multiply(R.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Cr*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(w){c=w,h!==null&&(h.fixedFoveation=w),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=w)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(w){return p[w]};let Ot=null;function J(w,R){if(u=R.getViewerPose(l||o),m=R,u!==null){const F=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let nt=!1;F.length!==U.cameras.length&&(U.cameras.length=0,nt=!0);for(let dt=0;dt<F.length;dt++){const z=F[dt];let $=null;if(d!==null)$=d.getViewport(z);else{const rt=f.getViewSubImage(h,z);$=rt.viewport,dt===0&&(t.setRenderTargetTextures(_,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(_))}let K=I[dt];K===void 0&&(K=new fn,K.layers.enable(dt),K.viewport=new Me,I[dt]=K),K.matrix.fromArray(z.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(z.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set($.x,$.y,$.width,$.height),dt===0&&(U.matrix.copy(K.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),nt===!0&&U.cameras.push(K)}const X=s.enabledFeatures;if(X&&X.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const dt=f.getDepthInformation(F[0]);dt&&dt.isValid&&dt.texture&&g.init(dt,s.renderState)}if(X&&X.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let dt=0;dt<F.length;dt++){const z=F[dt].camera;if(z){let $=p[z];$||($=new Ef,p[z]=$);const K=f.getCameraImage(z);$.sourceTexture=K}}}}for(let F=0;F<A.length;F++){const nt=b[F],X=A[F];nt!==null&&X!==void 0&&X.update(nt,R,l||o)}Ot&&Ot(w,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),m=null}const k=new Of;k.setAnimationLoop(J),this.setAnimationLoop=function(w){Ot=w},this.dispose=function(){}}}const Bi=new gn,sy=new me;function ry(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Df(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,v,_){p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,_=M.envMapRotation;v&&(g.envMap.value=v,Bi.copy(_),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),g.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(Bi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oy(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const _=v.program;n.uniformBlockBinding(M,_)}function l(M,v){let _=s[M.id];_===void 0&&(m(M),_=u(M),s[M.id]=_,M.addEventListener("dispose",g));const A=v.program;n.updateUBOMapping(M,A);const b=t.render.frame;r[M.id]!==b&&(h(M),r[M.id]=b)}function u(M){const v=f();M.__bindingPointIndex=v;const _=i.createBuffer(),A=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const v=s[M.id],_=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,P=_.length;b<P;b++){const x=Array.isArray(_[b])?_[b]:[_[b]];for(let T=0,N=x.length;T<N;T++){const I=x[T];if(d(I,b,T,A)===!0){const U=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let G=0;G<V.length;G++){const H=V[G],B=y(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+Y,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,Y),Y+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,_,A){const b=M.value,P=v+"_"+_;if(A[P]===void 0)return typeof b=="number"||typeof b=="boolean"?A[P]=b:A[P]=b.clone(),!0;{const x=A[P];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return A[P]=b,!0}else if(x.equals(b)===!1)return x.copy(b),!0}return!1}function m(M){const v=M.uniforms;let _=0;const A=16;for(let P=0,x=v.length;P<x;P++){const T=Array.isArray(v[P])?v[P]:[v[P]];for(let N=0,I=T.length;N<I;N++){const U=T[N],V=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,G=V.length;Y<G;Y++){const H=V[Y],B=y(H),j=_%A,ot=j%B.boundary,ht=j+ot;_+=ot,ht!==0&&A-ht<B.storage&&(_+=A-ht),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=B.storage}}}const b=_%A;return b>0&&(_+=A-b),M.__size=_,M.__cache={},this}function y(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Gt("WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){const v=M.target;v.removeEventListener("dispose",g);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}const ay=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function ly(){return In===null&&(In=new mm(ay,16,16,ks,ci),In.name="DFG_LUT",In.minFilter=Ge,In.magFilter=Ge,In.wrapS=ni,In.wrapT=ni,In.generateMipmaps=!1,In.needsUpdate=!0),In}class cy{constructor(t={}){const{canvas:e=Lp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=an}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const y=d,g=new Set([Ec,Sc,Mc]),p=new Set([an,Hn,wr,Ar,vc,yc]),M=new Uint32Array(4),v=new Int32Array(4);let _=null,A=null;const b=[],P=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let N=!1;this._outputColorSpace=rn;let I=0,U=0,V=null,Y=-1,G=null;const H=new Me,B=new Me;let j=null;const ot=new Jt(0);let ht=0,gt=e.width,Mt=e.height,Ot=1,J=null,k=null;const w=new Me(0,0,gt,Mt),R=new Me(0,0,gt,Mt);let F=!1;const nt=new Lc;let X=!1,lt=!1;const _t=new me,dt=new O,z=new Me,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function rt(){return V===null?Ot:1}let E=n;function D(C,Z){return e.getContext(C,Z)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",fe,!1),E===null){const Z="webgl2";if(E=D(Z,C),E===null)throw D(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw te("WebGLRenderer: "+C.message),C}let at,xt,pt,L,S,W,tt,ft,it,At,vt,Ut,Nt,mt,yt,Pt,Lt,wt,Wt,q,bt,Et,Dt;function St(){at=new cx(E),at.init(),bt=new Qv(E,at),xt=new ex(E,at,t,bt),pt=new Kv(E,at),xt.reversedDepthBuffer&&h&&pt.buffers.depth.setReversed(!0),L=new fx(E),S=new Ov,W=new Jv(E,at,pt,S,xt,bt,L),tt=new lx(T),ft=new _g(E),Et=new Q0(E,ft),it=new ux(E,ft,L,Et),At=new px(E,it,ft,Et,L),wt=new dx(E,xt,W),yt=new nx(S),vt=new Fv(T,tt,at,xt,Et,yt),Ut=new ry(T,S),Nt=new zv,mt=new Xv(at),Lt=new J0(T,tt,pt,At,m,c),Pt=new Zv(T,At,xt),Dt=new oy(E,L,xt,pt),Wt=new tx(E,at,L),q=new hx(E,at,L),L.programs=vt.programs,T.capabilities=xt,T.extensions=at,T.properties=S,T.renderLists=Nt,T.shadowMap=Pt,T.state=pt,T.info=L}St(),y!==an&&(x=new gx(y,e.width,e.height,s,r));const ut=new iy(T,E);this.xr=ut,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ot},this.setPixelRatio=function(C){C!==void 0&&(Ot=C,this.setSize(gt,Mt,!1))},this.getSize=function(C){return C.set(gt,Mt)},this.setSize=function(C,Z,st=!0){if(ut.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=C,Mt=Z,e.width=Math.floor(C*Ot),e.height=Math.floor(Z*Ot),st===!0&&(e.style.width=C+"px",e.style.height=Z+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(gt*Ot,Mt*Ot).floor()},this.setDrawingBufferSize=function(C,Z,st){gt=C,Mt=Z,Ot=st,e.width=Math.floor(C*st),e.height=Math.floor(Z*st),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(y===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(w)},this.setViewport=function(C,Z,st,et){C.isVector4?w.set(C.x,C.y,C.z,C.w):w.set(C,Z,st,et),pt.viewport(H.copy(w).multiplyScalar(Ot).round())},this.getScissor=function(C){return C.copy(R)},this.setScissor=function(C,Z,st,et){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,Z,st,et),pt.scissor(B.copy(R).multiplyScalar(Ot).round())},this.getScissorTest=function(){return F},this.setScissorTest=function(C){pt.setScissorTest(F=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,st=!0){let et=0;if(C){let Q=!1;if(V!==null){const Rt=V.texture.format;Q=g.has(Rt)}if(Q){const Rt=V.texture.type,It=p.has(Rt),Ct=Lt.getClearColor(),Bt=Lt.getClearAlpha(),kt=Ct.r,Yt=Ct.g,$t=Ct.b;It?(M[0]=kt,M[1]=Yt,M[2]=$t,M[3]=Bt,E.clearBufferuiv(E.COLOR,0,M)):(v[0]=kt,v[1]=Yt,v[2]=$t,v[3]=Bt,E.clearBufferiv(E.COLOR,0,v))}else et|=E.COLOR_BUFFER_BIT}Z&&(et|=E.DEPTH_BUFFER_BIT),st&&(et|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&E.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),Lt.dispose(),Nt.dispose(),mt.dispose(),S.dispose(),tt.dispose(),At.dispose(),Et.dispose(),Dt.dispose(),vt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",kc),ut.removeEventListener("sessionend",Vc),Pi.stop()};function Ft(C){C.preventDefault(),pu("WebGLRenderer: Context Lost."),N=!0}function qt(){pu("WebGLRenderer: Context Restored."),N=!1;const C=L.autoReset,Z=Pt.enabled,st=Pt.autoUpdate,et=Pt.needsUpdate,Q=Pt.type;St(),L.autoReset=C,Pt.enabled=Z,Pt.autoUpdate=st,Pt.needsUpdate=et,Pt.type=Q}function fe(C){te("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function se(C){const Z=C.target;Z.removeEventListener("dispose",se),qn(Z)}function qn(C){Yn(C),S.remove(C)}function Yn(C){const Z=S.get(C).programs;Z!==void 0&&(Z.forEach(function(st){vt.releaseProgram(st)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,st,et,Q,Rt){Z===null&&(Z=$);const It=Q.isMesh&&Q.matrixWorld.determinant()<0,Ct=sd(C,Z,st,et,Q);pt.setMaterial(et,It);let Bt=st.index,kt=1;if(et.wireframe===!0){if(Bt=it.getWireframeAttribute(st),Bt===void 0)return;kt=2}const Yt=st.drawRange,$t=st.attributes.position;let Vt=Yt.start*kt,oe=(Yt.start+Yt.count)*kt;Rt!==null&&(Vt=Math.max(Vt,Rt.start*kt),oe=Math.min(oe,(Rt.start+Rt.count)*kt)),Bt!==null?(Vt=Math.max(Vt,0),oe=Math.min(oe,Bt.count)):$t!=null&&(Vt=Math.max(Vt,0),oe=Math.min(oe,$t.count));const Ee=oe-Vt;if(Ee<0||Ee===1/0)return;Et.setup(Q,et,Ct,st,Bt);let ve,ae=Wt;if(Bt!==null&&(ve=ft.get(Bt),ae=q,ae.setIndex(ve)),Q.isMesh)et.wireframe===!0?(pt.setLineWidth(et.wireframeLinewidth*rt()),ae.setMode(E.LINES)):ae.setMode(E.TRIANGLES);else if(Q.isLine){let ze=et.linewidth;ze===void 0&&(ze=1),pt.setLineWidth(ze*rt()),Q.isLineSegments?ae.setMode(E.LINES):Q.isLineLoop?ae.setMode(E.LINE_LOOP):ae.setMode(E.LINE_STRIP)}else Q.isPoints?ae.setMode(E.POINTS):Q.isSprite&&ae.setMode(E.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ae.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ze=Q._multiDrawStarts,zt=Q._multiDrawCounts,Qe=Q._multiDrawCount,ne=Bt?ft.get(Bt).bytesPerElement:1,_n=S.get(et).currentProgram.getUniforms();for(let Pn=0;Pn<Qe;Pn++)_n.setValue(E,"_gl_DrawID",Pn),ae.render(ze[Pn]/ne,zt[Pn])}else if(Q.isInstancedMesh)ae.renderInstances(Vt,Ee,Q.count);else if(st.isInstancedBufferGeometry){const ze=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,zt=Math.min(st.instanceCount,ze);ae.renderInstances(Vt,Ee,zt)}else ae.render(Vt,Ee)};function zc(C,Z,st){C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=Je,C.needsUpdate=!0,Wr(C,Z,st),C.side=Ri,C.needsUpdate=!0,Wr(C,Z,st),C.side=dn):Wr(C,Z,st)}this.compile=function(C,Z,st=null){st===null&&(st=C),A=mt.get(st),A.init(Z),P.push(A),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),C!==st&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),A.setupLights();const et=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Rt=Q.material;if(Rt)if(Array.isArray(Rt))for(let It=0;It<Rt.length;It++){const Ct=Rt[It];zc(Ct,st,Q),et.add(Ct)}else zc(Rt,st,Q),et.add(Rt)}),A=P.pop(),et},this.compileAsync=function(C,Z,st=null){const et=this.compile(C,Z,st);return new Promise(Q=>{function Rt(){if(et.forEach(function(It){S.get(It).currentProgram.isReady()&&et.delete(It)}),et.size===0){Q(C);return}setTimeout(Rt,10)}at.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let la=null;function id(C){la&&la(C)}function kc(){Pi.stop()}function Vc(){Pi.start()}const Pi=new Of;Pi.setAnimationLoop(id),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(C){la=C,ut.setAnimationLoop(C),C===null?Pi.stop():Pi.start()},ut.addEventListener("sessionstart",kc),ut.addEventListener("sessionend",Vc),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const st=ut.enabled===!0&&ut.isPresenting===!0,et=x!==null&&(V===null||st)&&x.begin(T,V);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Z),Z=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,Z,V),A=mt.get(C,P.length),A.init(Z),P.push(A),_t.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),nt.setFromProjectionMatrix(_t,On,Z.reversedDepth),lt=this.localClippingEnabled,X=yt.init(this.clippingPlanes,lt),_=Nt.get(C,b.length),_.init(),b.push(_),ut.enabled===!0&&ut.isPresenting===!0){const It=T.xr.getDepthSensingMesh();It!==null&&ca(It,Z,-1/0,T.sortObjects)}ca(C,Z,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(J,k),K=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,K&&Lt.addToRenderList(_,C),this.info.render.frame++,X===!0&&yt.beginShadows();const Q=A.state.shadowsArray;if(Pt.render(Q,C,Z),X===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&x.hasRenderPass())===!1){const It=_.opaque,Ct=_.transmissive;if(A.setupLights(),Z.isArrayCamera){const Bt=Z.cameras;if(Ct.length>0)for(let kt=0,Yt=Bt.length;kt<Yt;kt++){const $t=Bt[kt];Hc(It,Ct,C,$t)}K&&Lt.render(C);for(let kt=0,Yt=Bt.length;kt<Yt;kt++){const $t=Bt[kt];Gc(_,C,$t,$t.viewport)}}else Ct.length>0&&Hc(It,Ct,C,Z),K&&Lt.render(C),Gc(_,C,Z)}V!==null&&U===0&&(W.updateMultisampleRenderTarget(V),W.updateRenderTargetMipmap(V)),et&&x.end(T),C.isScene===!0&&C.onAfterRender(T,C,Z),Et.resetDefaultState(),Y=-1,G=null,P.pop(),P.length>0?(A=P[P.length-1],X===!0&&yt.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function ca(C,Z,st,et){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)A.pushLight(C),C.castShadow&&A.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||nt.intersectsSprite(C)){et&&z.setFromMatrixPosition(C.matrixWorld).applyMatrix4(_t);const It=At.update(C),Ct=C.material;Ct.visible&&_.push(C,It,Ct,st,z.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||nt.intersectsObject(C))){const It=At.update(C),Ct=C.material;if(et&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),z.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),z.copy(It.boundingSphere.center)),z.applyMatrix4(C.matrixWorld).applyMatrix4(_t)),Array.isArray(Ct)){const Bt=It.groups;for(let kt=0,Yt=Bt.length;kt<Yt;kt++){const $t=Bt[kt],Vt=Ct[$t.materialIndex];Vt&&Vt.visible&&_.push(C,It,Vt,st,z.z,$t)}}else Ct.visible&&_.push(C,It,Ct,st,z.z,null)}}const Rt=C.children;for(let It=0,Ct=Rt.length;It<Ct;It++)ca(Rt[It],Z,st,et)}function Gc(C,Z,st,et){const{opaque:Q,transmissive:Rt,transparent:It}=C;A.setupLightsView(st),X===!0&&yt.setGlobalState(T.clippingPlanes,st),et&&pt.viewport(H.copy(et)),Q.length>0&&Hr(Q,Z,st),Rt.length>0&&Hr(Rt,Z,st),It.length>0&&Hr(It,Z,st),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Hc(C,Z,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[et.id]===void 0){const Vt=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[et.id]=new Vn(1,1,{generateMipmaps:!0,type:Vt?ci:an,minFilter:Zi,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const Rt=A.state.transmissionRenderTarget[et.id],It=et.viewport||H;Rt.setSize(It.z*T.transmissionResolutionScale,It.w*T.transmissionResolutionScale);const Ct=T.getRenderTarget(),Bt=T.getActiveCubeFace(),kt=T.getActiveMipmapLevel();T.setRenderTarget(Rt),T.getClearColor(ot),ht=T.getClearAlpha(),ht<1&&T.setClearColor(16777215,.5),T.clear(),K&&Lt.render(st);const Yt=T.toneMapping;T.toneMapping=zn;const $t=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),A.setupLightsView(et),X===!0&&yt.setGlobalState(T.clippingPlanes,et),Hr(C,st,et),W.updateMultisampleRenderTarget(Rt),W.updateRenderTargetMipmap(Rt),at.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let oe=0,Ee=Z.length;oe<Ee;oe++){const ve=Z[oe],{object:ae,geometry:ze,material:zt,group:Qe}=ve;if(zt.side===dn&&ae.layers.test(et.layers)){const ne=zt.side;zt.side=Je,zt.needsUpdate=!0,Wc(ae,st,et,ze,zt,Qe),zt.side=ne,zt.needsUpdate=!0,Vt=!0}}Vt===!0&&(W.updateMultisampleRenderTarget(Rt),W.updateRenderTargetMipmap(Rt))}T.setRenderTarget(Ct,Bt,kt),T.setClearColor(ot,ht),$t!==void 0&&(et.viewport=$t),T.toneMapping=Yt}function Hr(C,Z,st){const et=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Rt=C.length;Q<Rt;Q++){const It=C[Q],{object:Ct,geometry:Bt,group:kt}=It;let Yt=It.material;Yt.allowOverride===!0&&et!==null&&(Yt=et),Ct.layers.test(st.layers)&&Wc(Ct,Z,st,Bt,Yt,kt)}}function Wc(C,Z,st,et,Q,Rt){C.onBeforeRender(T,Z,st,et,Q,Rt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(T,Z,st,et,C,Rt),Q.transparent===!0&&Q.side===dn&&Q.forceSinglePass===!1?(Q.side=Je,Q.needsUpdate=!0,T.renderBufferDirect(st,Z,et,Q,C,Rt),Q.side=Ri,Q.needsUpdate=!0,T.renderBufferDirect(st,Z,et,Q,C,Rt),Q.side=dn):T.renderBufferDirect(st,Z,et,Q,C,Rt),C.onAfterRender(T,Z,st,et,Q,Rt)}function Wr(C,Z,st){Z.isScene!==!0&&(Z=$);const et=S.get(C),Q=A.state.lights,Rt=A.state.shadowsArray,It=Q.state.version,Ct=vt.getParameters(C,Q.state,Rt,Z,st),Bt=vt.getProgramCacheKey(Ct);let kt=et.programs;et.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,et.fog=Z.fog;const Yt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;et.envMap=tt.get(C.envMap||et.environment,Yt),et.envMapRotation=et.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,kt===void 0&&(C.addEventListener("dispose",se),kt=new Map,et.programs=kt);let $t=kt.get(Bt);if($t!==void 0){if(et.currentProgram===$t&&et.lightsStateVersion===It)return qc(C,Ct),$t}else Ct.uniforms=vt.getUniforms(C),C.onBeforeCompile(Ct,T),$t=vt.acquireProgram(Ct,Bt),kt.set(Bt,$t),et.uniforms=Ct.uniforms;const Vt=et.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=yt.uniform),qc(C,Ct),et.needsLights=od(C),et.lightsStateVersion=It,et.needsLights&&(Vt.ambientLightColor.value=Q.state.ambient,Vt.lightProbe.value=Q.state.probe,Vt.directionalLights.value=Q.state.directional,Vt.directionalLightShadows.value=Q.state.directionalShadow,Vt.spotLights.value=Q.state.spot,Vt.spotLightShadows.value=Q.state.spotShadow,Vt.rectAreaLights.value=Q.state.rectArea,Vt.ltc_1.value=Q.state.rectAreaLTC1,Vt.ltc_2.value=Q.state.rectAreaLTC2,Vt.pointLights.value=Q.state.point,Vt.pointLightShadows.value=Q.state.pointShadow,Vt.hemisphereLights.value=Q.state.hemi,Vt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Vt.spotLightMatrix.value=Q.state.spotLightMatrix,Vt.spotLightMap.value=Q.state.spotLightMap,Vt.pointShadowMatrix.value=Q.state.pointShadowMatrix),et.currentProgram=$t,et.uniformsList=null,$t}function Xc(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Uo.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function qc(C,Z){const st=S.get(C);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function sd(C,Z,st,et,Q){Z.isScene!==!0&&(Z=$),W.resetTextureUnits();const Rt=Z.fog,It=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?Z.environment:null,Ct=V===null?T.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Vs,Bt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,kt=tt.get(et.envMap||It,Bt),Yt=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,$t=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Vt=!!st.morphAttributes.position,oe=!!st.morphAttributes.normal,Ee=!!st.morphAttributes.color;let ve=zn;et.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ve=T.toneMapping);const ae=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ze=ae!==void 0?ae.length:0,zt=S.get(et),Qe=A.state.lights;if(X===!0&&(lt===!0||C!==G)){const Re=C===G&&et.id===Y;yt.setState(et,C,Re)}let ne=!1;et.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Qe.state.version||zt.outputColorSpace!==Ct||Q.isBatchedMesh&&zt.batching===!1||!Q.isBatchedMesh&&zt.batching===!0||Q.isBatchedMesh&&zt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&zt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&zt.instancing===!1||!Q.isInstancedMesh&&zt.instancing===!0||Q.isSkinnedMesh&&zt.skinning===!1||!Q.isSkinnedMesh&&zt.skinning===!0||Q.isInstancedMesh&&zt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&zt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&zt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&zt.instancingMorph===!1&&Q.morphTexture!==null||zt.envMap!==kt||et.fog===!0&&zt.fog!==Rt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==yt.numPlanes||zt.numIntersection!==yt.numIntersection)||zt.vertexAlphas!==Yt||zt.vertexTangents!==$t||zt.morphTargets!==Vt||zt.morphNormals!==oe||zt.morphColors!==Ee||zt.toneMapping!==ve||zt.morphTargetsCount!==ze)&&(ne=!0):(ne=!0,zt.__version=et.version);let _n=zt.currentProgram;ne===!0&&(_n=Wr(et,Z,Q));let Pn=!1,Li=!1,as=!1;const ce=_n.getUniforms(),Ue=zt.uniforms;if(pt.useProgram(_n.program)&&(Pn=!0,Li=!0,as=!0),et.id!==Y&&(Y=et.id,Li=!0),Pn||G!==C){pt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ce.setValue(E,"projectionMatrix",C.projectionMatrix),ce.setValue(E,"viewMatrix",C.matrixWorldInverse);const di=ce.map.cameraPosition;di!==void 0&&di.setValue(E,dt.setFromMatrixPosition(C.matrixWorld)),xt.logarithmicDepthBuffer&&ce.setValue(E,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ce.setValue(E,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,Li=!0,as=!0)}if(zt.needsLights&&(Qe.state.directionalShadowMap.length>0&&ce.setValue(E,"directionalShadowMap",Qe.state.directionalShadowMap,W),Qe.state.spotShadowMap.length>0&&ce.setValue(E,"spotShadowMap",Qe.state.spotShadowMap,W),Qe.state.pointShadowMap.length>0&&ce.setValue(E,"pointShadowMap",Qe.state.pointShadowMap,W)),Q.isSkinnedMesh){ce.setOptional(E,Q,"bindMatrix"),ce.setOptional(E,Q,"bindMatrixInverse");const Re=Q.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ce.setValue(E,"boneTexture",Re.boneTexture,W))}Q.isBatchedMesh&&(ce.setOptional(E,Q,"batchingTexture"),ce.setValue(E,"batchingTexture",Q._matricesTexture,W),ce.setOptional(E,Q,"batchingIdTexture"),ce.setValue(E,"batchingIdTexture",Q._indirectTexture,W),ce.setOptional(E,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ce.setValue(E,"batchingColorTexture",Q._colorsTexture,W));const fi=st.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&wt.update(Q,st,_n),(Li||zt.receiveShadow!==Q.receiveShadow)&&(zt.receiveShadow=Q.receiveShadow,ce.setValue(E,"receiveShadow",Q.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&Z.environment!==null&&(Ue.envMapIntensity.value=Z.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=ly()),Li&&(ce.setValue(E,"toneMappingExposure",T.toneMappingExposure),zt.needsLights&&rd(Ue,as),Rt&&et.fog===!0&&Ut.refreshFogUniforms(Ue,Rt),Ut.refreshMaterialUniforms(Ue,et,Ot,Mt,A.state.transmissionRenderTarget[C.id]),Uo.upload(E,Xc(zt),Ue,W)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Uo.upload(E,Xc(zt),Ue,W),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ce.setValue(E,"center",Q.center),ce.setValue(E,"modelViewMatrix",Q.modelViewMatrix),ce.setValue(E,"normalMatrix",Q.normalMatrix),ce.setValue(E,"modelMatrix",Q.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Re=et.uniformsGroups;for(let di=0,ls=Re.length;di<ls;di++){const Yc=Re[di];Dt.update(Yc,_n),Dt.bind(Yc,_n)}}return _n}function rd(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function od(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,Z,st){const et=S.get(C);et.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),S.get(C.texture).__webglTexture=Z,S.get(C.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const st=S.get(C);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const ad=E.createFramebuffer();this.setRenderTarget=function(C,Z=0,st=0){V=C,I=Z,U=st;let et=null,Q=!1,Rt=!1;if(C){const Ct=S.get(C);if(Ct.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(E.FRAMEBUFFER,Ct.__webglFramebuffer),H.copy(C.viewport),B.copy(C.scissor),j=C.scissorTest,pt.viewport(H),pt.scissor(B),pt.setScissorTest(j),Y=-1;return}else if(Ct.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(Ct.__hasExternalTextures)W.rebindTextures(C,S.get(C.texture).__webglTexture,S.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Yt=C.depthTexture;if(Ct.__boundDepthTexture!==Yt){if(Yt!==null&&S.has(Yt)&&(C.width!==Yt.image.width||C.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Rt=!0);const kt=S.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(kt[Z])?et=kt[Z][st]:et=kt[Z],Q=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?et=S.get(C).__webglMultisampledFramebuffer:Array.isArray(kt)?et=kt[st]:et=kt,H.copy(C.viewport),B.copy(C.scissor),j=C.scissorTest}else H.copy(w).multiplyScalar(Ot).floor(),B.copy(R).multiplyScalar(Ot).floor(),j=F;if(st!==0&&(et=ad),pt.bindFramebuffer(E.FRAMEBUFFER,et)&&pt.drawBuffers(C,et),pt.viewport(H),pt.scissor(B),pt.setScissorTest(j),Q){const Ct=S.get(C.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct.__webglTexture,st)}else if(Rt){const Ct=Z;for(let Bt=0;Bt<C.textures.length;Bt++){const kt=S.get(C.textures[Bt]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Bt,kt.__webglTexture,st,Ct)}}else if(C!==null&&st!==0){const Ct=S.get(C.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ct.__webglTexture,st)}Y=-1},this.readRenderTargetPixels=function(C,Z,st,et,Q,Rt,It,Ct=0){if(!(C&&C.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=S.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt){pt.bindFramebuffer(E.FRAMEBUFFER,Bt);try{const kt=C.textures[Ct],Yt=kt.format,$t=kt.type;if(C.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ct),!xt.textureFormatReadable(Yt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable($t)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-et&&st>=0&&st<=C.height-Q&&E.readPixels(Z,st,et,Q,bt.convert(Yt),bt.convert($t),Rt)}finally{const kt=V!==null?S.get(V).__webglFramebuffer:null;pt.bindFramebuffer(E.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,st,et,Q,Rt,It,Ct=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=S.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt)if(Z>=0&&Z<=C.width-et&&st>=0&&st<=C.height-Q){pt.bindFramebuffer(E.FRAMEBUFFER,Bt);const kt=C.textures[Ct],Yt=kt.format,$t=kt.type;if(C.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ct),!xt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Vt),E.bufferData(E.PIXEL_PACK_BUFFER,Rt.byteLength,E.STREAM_READ),E.readPixels(Z,st,et,Q,bt.convert(Yt),bt.convert($t),0);const oe=V!==null?S.get(V).__webglFramebuffer:null;pt.bindFramebuffer(E.FRAMEBUFFER,oe);const Ee=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Ip(E,Ee,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Vt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Rt),E.deleteBuffer(Vt),E.deleteSync(Ee),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,st=0){const et=Math.pow(2,-st),Q=Math.floor(C.image.width*et),Rt=Math.floor(C.image.height*et),It=Z!==null?Z.x:0,Ct=Z!==null?Z.y:0;W.setTexture2D(C,0),E.copyTexSubImage2D(E.TEXTURE_2D,st,0,0,It,Ct,Q,Rt),pt.unbindTexture()};const ld=E.createFramebuffer(),cd=E.createFramebuffer();this.copyTextureToTexture=function(C,Z,st=null,et=null,Q=0,Rt=0){let It,Ct,Bt,kt,Yt,$t,Vt,oe,Ee;const ve=C.isCompressedTexture?C.mipmaps[Rt]:C.image;if(st!==null)It=st.max.x-st.min.x,Ct=st.max.y-st.min.y,Bt=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,Yt=st.min.y,$t=st.isBox3?st.min.z:0;else{const Ue=Math.pow(2,-Q);It=Math.floor(ve.width*Ue),Ct=Math.floor(ve.height*Ue),C.isDataArrayTexture?Bt=ve.depth:C.isData3DTexture?Bt=Math.floor(ve.depth*Ue):Bt=1,kt=0,Yt=0,$t=0}et!==null?(Vt=et.x,oe=et.y,Ee=et.z):(Vt=0,oe=0,Ee=0);const ae=bt.convert(Z.format),ze=bt.convert(Z.type);let zt;Z.isData3DTexture?(W.setTexture3D(Z,0),zt=E.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(W.setTexture2DArray(Z,0),zt=E.TEXTURE_2D_ARRAY):(W.setTexture2D(Z,0),zt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Z.unpackAlignment);const Qe=E.getParameter(E.UNPACK_ROW_LENGTH),ne=E.getParameter(E.UNPACK_IMAGE_HEIGHT),_n=E.getParameter(E.UNPACK_SKIP_PIXELS),Pn=E.getParameter(E.UNPACK_SKIP_ROWS),Li=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,ve.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ve.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,kt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Yt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,$t);const as=C.isDataArrayTexture||C.isData3DTexture,ce=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Ue=S.get(C),fi=S.get(Z),Re=S.get(Ue.__renderTarget),di=S.get(fi.__renderTarget);pt.bindFramebuffer(E.READ_FRAMEBUFFER,Re.__webglFramebuffer),pt.bindFramebuffer(E.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let ls=0;ls<Bt;ls++)as&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,S.get(C).__webglTexture,Q,$t+ls),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,S.get(Z).__webglTexture,Rt,Ee+ls)),E.blitFramebuffer(kt,Yt,It,Ct,Vt,oe,It,Ct,E.DEPTH_BUFFER_BIT,E.NEAREST);pt.bindFramebuffer(E.READ_FRAMEBUFFER,null),pt.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||S.has(C)){const Ue=S.get(C),fi=S.get(Z);pt.bindFramebuffer(E.READ_FRAMEBUFFER,ld),pt.bindFramebuffer(E.DRAW_FRAMEBUFFER,cd);for(let Re=0;Re<Bt;Re++)as?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ue.__webglTexture,Q,$t+Re):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ue.__webglTexture,Q),ce?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,fi.__webglTexture,Rt,Ee+Re):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,fi.__webglTexture,Rt),Q!==0?E.blitFramebuffer(kt,Yt,It,Ct,Vt,oe,It,Ct,E.COLOR_BUFFER_BIT,E.NEAREST):ce?E.copyTexSubImage3D(zt,Rt,Vt,oe,Ee+Re,kt,Yt,It,Ct):E.copyTexSubImage2D(zt,Rt,Vt,oe,kt,Yt,It,Ct);pt.bindFramebuffer(E.READ_FRAMEBUFFER,null),pt.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else ce?C.isDataTexture||C.isData3DTexture?E.texSubImage3D(zt,Rt,Vt,oe,Ee,It,Ct,Bt,ae,ze,ve.data):Z.isCompressedArrayTexture?E.compressedTexSubImage3D(zt,Rt,Vt,oe,Ee,It,Ct,Bt,ae,ve.data):E.texSubImage3D(zt,Rt,Vt,oe,Ee,It,Ct,Bt,ae,ze,ve):C.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Rt,Vt,oe,It,Ct,ae,ze,ve.data):C.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Rt,Vt,oe,ve.width,ve.height,ae,ve.data):E.texSubImage2D(E.TEXTURE_2D,Rt,Vt,oe,It,Ct,ae,ze,ve);E.pixelStorei(E.UNPACK_ROW_LENGTH,Qe),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ne),E.pixelStorei(E.UNPACK_SKIP_PIXELS,_n),E.pixelStorei(E.UNPACK_SKIP_ROWS,Pn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Li),Rt===0&&Z.generateMipmaps&&E.generateMipmap(zt),pt.unbindTexture()},this.initRenderTarget=function(C){S.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),pt.unbindTexture()},this.resetState=function(){I=0,U=0,V=null,pt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Ur=7.5;class Hf{perm=[];constructor(t=0){const e=[];for(let s=0;s<256;s++)e[s]=s;let n=t;for(let s=255;s>0;s--){n=n*1103515245+12345&2147483647;const r=n%(s+1);[e[s],e[r]]=[e[r],e[s]]}for(let s=0;s<512;s++)this.perm[s]=e[s&255]}fade(t){return t*t*t*(t*(t*6-15)+10)}lerp(t,e,n){return t+n*(e-t)}grad(t,e,n){const s=t&3,r=s<2?e:n,o=s<2?n:e;return((s&1)===0?r:-r)+((s&2)===0?o:-o)}noise(t,e){const n=Math.floor(t)&255,s=Math.floor(e)&255;t-=Math.floor(t),e-=Math.floor(e);const r=this.fade(t),o=this.fade(e),a=this.perm[n]+s,c=this.perm[n+1]+s;return this.lerp(this.lerp(this.grad(this.perm[a],t,e),this.grad(this.perm[c],t-1,e),r),this.lerp(this.grad(this.perm[a+1],t,e-1),this.grad(this.perm[c+1],t-1,e-1),r),o)}fbm(t,e,n=4){let s=0,r=1,o=1,a=0;for(let c=0;c<n;c++)s+=r*this.noise(t*o,e*o),a+=r,r*=.5,o*=2;return s/a}}const uy=new Hf(54321);new Hf(12345);let _r=null;function hy(i=12345){if(_r)return _r;const t=c=>{const l=Math.sin(i*9999+c*7919)*1e4;return l-Math.floor(l)},e=12+Math.floor(t(0)*6),n=15,s=15,r=80,o=[];for(let c=0;c<e;c++){const l=c/e*Math.PI*2,u=.7+t(c+1)*.6,f=n+Math.cos(l)*r*u,h=s+Math.sin(l)*r*u,d=is(f,h)+.1;o.push(new O(f,d,h))}const a=new $o(o);return a.closed=!0,a.curveType="centripetal",a.tension=.5,_r=a,a}function is(i,t,e){const s=uy.fbm(i*.08,t*.08,4)*2;if(e!==void 0){const o=Math.max(0,1-Math.abs(s-e)/4);return s*(1-o)+(e-.15)*o}return s}function fy(i=12345){const t=new $e,e=_=>{const A=Math.sin(i*9999+_*7919)*1e4;return A-Math.floor(A)},n=12+Math.floor(e(0)*6),s=15,r=15,o=80,a=[];for(let _=0;_<n;_++){const A=_/n*Math.PI*2,b=.7+e(_+1)*.6,P=s+Math.cos(A)*o*b,x=r+Math.sin(A)*o*b,T=is(P,x)+.1;a.push(new O(P,T,x))}const c=new $o(a);c.closed=!0,c.curveType="centripetal",c.tension=.5;const l=400,u=c.getSpacedPoints(l),f=[],h=[],d=[],m=Ur/2,y=c.getLength(),g=10;for(let _=0;_<=l;_++){const A=_/l,b=u[_],P=c.getTangentAt(A),x=new ct(P.x,P.z).normalize(),T=new ct(-x.y,x.x),N=A*y/g;if(f.push(b.x+T.x*m,b.y+.05,b.z+T.y*m,b.x-T.x*m,b.y+.05,b.z-T.y*m),d.push(0,N,1,N),_<l){const I=_*2,U=_*2+1,V=(_+1)*2,Y=(_+1)*2+1;h.push(I,V,U,U,V,Y)}}const p=new be;p.setAttribute("position",new Qt(f,3)),p.setAttribute("uv",new Qt(d,2)),p.setIndex(h),p.computeVertexNormals();const M=new De({color:3355443,roughness:.8,side:dn}),v=new Kt(p,M);v.receiveShadow=!0,t.add(v);for(let _=0;_<2;_++){const A=[];for(let I=0;I<=l;I++){const U=I/l,V=u[I],Y=c.getTangentAt(U),G=new ct(Y.x,Y.z).normalize(),H=new ct(-G.y,G.x),B=_===0?-m-.2:m+.2,j=V.x+H.x*B,ot=V.z+H.y*B;A.push(new O(j,V.y+.15,ot))}const b=new $o(A);b.closed=!0;const P=new Fc(b,l,.06,6,!0),x=new De({color:_===0?13369344:14540253,roughness:.3,metalness:.5}),T=new Kt(P,x);T.castShadow=!0,t.add(T);const N=12;for(let I=0;I<N;I++){const U=I/N,V=Math.floor(U*l),Y=A[V],G=c.getTangentAt(V/l),H=new ct(G.x,G.z).normalize();new ct(-H.y,H.x);const B=new rs(.12,.35,.12),j=new Kt(B,x);j.position.set(Y.x,Y.y+.175,Y.z),j.castShadow=!0,t.add(j)}}for(let _=0;_<2;_++)for(let b=0;b<20;b++){const P=b/20,x=Math.floor(P*l),T=u[x],N=c.getTangentAt(x/l),I=new ct(N.x,N.z).normalize(),U=new ct(-I.y,I.x),V=_===0?-m-36-Math.random()*48:m+36+Math.random()*48,Y=T.x+U.x*V,G=T.z+U.y*V,H=is(Y,G)+.1;if(Math.random()>.5){const ot=new Kt(new os(.06999999999999999,.1,.6,8),new De({color:9127187}));ot.position.set(Y,H+.6/2,G),ot.castShadow=!0,t.add(ot);const ht=.35,gt=.5,Mt=new Kt(new Vr(ht,gt,8),new De({color:2263842}));Mt.position.set(Y,H+.6+gt/2-.05,G),Mt.castShadow=!0,t.add(Mt)}else{const B=.2+Math.random()*.3,j=new Kt(new Dc(B,0),new De({color:8947848,roughness:.9}));j.position.set(Y,H+B*.5,G),j.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),j.castShadow=!0,t.add(j)}}return{group:t,curve:c}}function dy(i=18,t=120,e=12345){const{group:n}=fy(e);return n}function py(){return _r}function my(i,t){const e=_r;if(!e)return 1/0;const n=100;let s=1/0;for(let r=0;r<=n;r++){const o=r/n,a=e.getPointAt(o),c=a.x-i,l=a.z-t,u=Math.sqrt(c*c+l*l);u<s&&(s=u)}return s}function gy(i,t=0){const e=new $e,n=i.getPointAt(t),s=i.getTangentAt(t),r=new ct(s.x,s.z).normalize(),o=new ct(-r.y,r.x),a=Ur+.4,c=.6,l=.15,u=Math.ceil(a/l),f=Math.ceil(c/l);for(let A=0;A<u;A++)for(let b=0;b<f;b++){const P=(A+b)%2===0,x=new Hs(l,l),T=new De({color:P?16777215:2236962,side:dn}),N=new Kt(x,T),I=(A-u/2+.5)*l,U=(b-f/2+.5)*l;N.position.set(n.x+o.x*I-r.x*U,n.y+.06,n.z+o.y*I-r.y*U),N.rotation.x=-Math.PI/2,N.rotation.z=Math.atan2(s.x,s.z),e.add(N)}const h=2.5,d=new os(.05,.05,h,8),m=new De({color:8947848,metalness:.5}),y=new Kt(d,m);y.position.set(n.x-o.x*(a/2+.3),n.y+h/2,n.z-o.y*(a/2+.3)),y.castShadow=!0,e.add(y);const g=new Kt(d,m);g.position.set(n.x+o.x*(a/2+.3),n.y+h/2,n.z+o.y*(a/2+.3)),g.castShadow=!0,e.add(g);const p=a+1,M=new Hs(p,.4),v=new De({color:16711680,side:dn,metalness:.3}),_=new Kt(M,v);return _.position.set(n.x,n.y+h,n.z),_.rotation.y=Math.atan2(s.x,s.z),e.add(_),e}class _y extends Error{constructor(t,e,n){super(t),this.is_operational=e,this.context=n,this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}var Wf=(i=>(i.EID_MAX_INDEX_OVERFLOW="EID_MAX_INDEX_OVERFLOW",i.EID_MAX_GEN_OVERFLOW="EID_MAX_GEN_OVERFLOW",i.COMPONENT_NOT_REGISTERED="COMPONENT_NOT_REGISTERED",i.ENTITY_NOT_ALIVE="ENTITY_NOT_ALIVE",i.CIRCULAR_SYSTEM_DEPENDENCY="CIRCULAR_SYSTEM_DEPENDENCY",i.DUPLICATE_SYSTEM="DUPLICATE_SYSTEM",i.ARCHETYPE_NOT_FOUND="ARCHETYPE_NOT_FOUND",i.RESOURCE_NOT_REGISTERED="RESOURCE_NOT_REGISTERED",i))(Wf||{});class xy extends _y{constructor(t,e,n){super(e??t,!0,n),this.category=t}}function Gr(i,t,e){return i}const Dn=-1,Sn=-1,xr=Object.freeze(Object.create(null)),ki=5,Vi=31,vy=2166136261,yy=16777619,My=2654435769,Sy=1367130551,hi=16,vh=2,Xf=1024,To=0,yh=0,Ey=31,by=1/60,Ty=4,wy=0,Ay=4;class li{_words;constructor(t){this._words=t??new Array(Ay).fill(0)}has(t){const e=t>>>ki;return e>=this._words.length?!1:(this._words[e]&1<<(t&Vi))!==0}set(t){const e=t>>>ki;e>=this._words.length&&this.grow(e+1),this._words[e]|=1<<(t&Vi)}clear(t){const e=t>>>ki;e>=this._words.length||(this._words[e]&=~(1<<(t&Vi)))}overlaps(t){const e=this._words,n=t._words,s=e.length<n.length?e.length:n.length;for(let r=0;r<s;r++)if((e[r]&n[r])!==0)return!0;return!1}contains(t){const e=t._words,n=this._words,s=n.length;for(let r=0;r<e.length;r++){const o=e[r];if(o!==0&&(r>=s||(n[r]&o)!==o))return!1}return!0}equals(t){const e=this._words,n=t._words,s=e.length>n.length?e.length:n.length;for(let r=0;r<s;r++){const o=r<e.length?e[r]:0,a=r<n.length?n[r]:0;if(o!==a)return!1}return!0}copy(){return new li(this._words.slice())}copy_with_set(t){const e=t>>>ki,n=e+1,s=this._words.length>n?this._words.length:n,r=new Array(s).fill(0);for(let o=0;o<this._words.length;o++)r[o]=this._words[o];return r[e]|=1<<(t&Vi),new li(r)}copy_with_clear(t){const e=this._words.slice(),n=t>>>ki;return n<e.length&&(e[n]&=~(1<<(t&Vi))),new li(e)}hash(){let t=vy;const e=this._words;let n=e.length-1;for(;n>=0&&e[n]===0;)n--;for(let s=0;s<=n;s++)t^=e[s],t=Math.imul(t,yy);return t}for_each(t){const e=this._words;for(let n=0;n<e.length;n++){let s=e[n];if(s===0)continue;const r=n<<ki;for(;s!==0;){const o=s&-s>>>0,a=Vi-Math.clz32(o);t(r+a),s^=o}}}grow(t){let e=this._words.length;for(;e<t;)e*=2;const n=new Array(e).fill(0);for(let s=0;s<this._words.length;s++)n[s]=this._words[s];this._words=n}}class Ci{constructor(t,e=hi){this._ctor=t,this._buf=new t(e)}_buf;_len=0;get length(){return this._len}push(t){this._len>=this._buf.length&&this._grow(),this._buf[this._len++]=t}pop(){return this._buf[--this._len]}get(t){return this._buf[t]}set_at(t,e){this._buf[t]=e}swap_remove(t){const e=this._buf[t];return this._buf[t]=this._buf[--this._len],e}clear(){this._len=0}get buf(){return this._buf}view(){return this._buf.subarray(0,this._len)}[Symbol.iterator](){let t=0;const e=this._buf,n=this._len;return{next(){return t<n?{value:e[t++],done:!1}:{value:0,done:!0}}}}ensure_capacity(t){if(t<=this._buf.length)return;let e=this._buf.length||1;for(;e<t;)e*=vh;const n=new this._ctor(e);n.set(this._buf.subarray(0,this._len)),this._buf=n}bulk_append(t,e,n){this.ensure_capacity(this._len+n),this._buf.set(t.subarray(e,e+n),this._len),this._len+=n}bulk_append_zeroes(t){this.ensure_capacity(this._len+t),this._buf.fill(0,this._len,this._len+t),this._len+=t}_grow(){const t=new this._ctor(this._buf.length*vh);t.set(this._buf),this._buf=t}}class Ry extends Ci{constructor(t=hi){super(Float32Array,t)}}class Cy extends Ci{constructor(t=hi){super(Float64Array,t)}}class Py extends Ci{constructor(t=hi){super(Int8Array,t)}}class Ly extends Ci{constructor(t=hi){super(Int16Array,t)}}class Iy extends Ci{constructor(t=hi){super(Int32Array,t)}}class Dy extends Ci{constructor(t=hi){super(Uint8Array,t)}}class Ny extends Ci{constructor(t=hi){super(Uint16Array,t)}}class qf extends Ci{constructor(t=hi){super(Uint32Array,t)}}const Uy={f32:Ry,f64:Cy,i8:Py,i16:Ly,i32:Iy,u8:Dy,u16:Ny,u32:qf},Qi=20,Fo=(1<<Qi)-1,Fy=Ey-Qi,Mh=(1<<Fy)-1,Oy=(i,t)=>t<<Qi|i,nn=i=>i&Fo,Sh=i=>i>>Qi,By=i=>Gr(i),zy=i=>Gr(i);class ky{field_names;columns;reader;constructor(t){this.field_names=t,this.columns=[];for(let n=0;n<t.length;n++)this.columns.push([]);const e={length:0};for(let n=0;n<t.length;n++)e[t[n]]=this.columns[n];this.reader=e}emit(t){const e=this.field_names,n=this.columns;for(let s=0;s<e.length;s++)n[s].push(t[e[s]]);this.reader.length++}emit_signal(){this.reader.length++}clear(){this.reader.length=0;const t=this.columns;for(let e=0;e<t.length;e++)t[e].length=0}}const Vy=i=>Gr(i);class Gy{field_names;field_index;columns;reader;constructor(t,e){this.field_names=t,this.field_index=Object.create(null),this.columns=[];for(let r=0;r<t.length;r++)this.field_index[t[r]]=r,this.columns.push([e[t[r]]??0]);const n=Object.create(null),s=this.columns;for(let r=0;r<t.length;r++){const o=s[r];Object.defineProperty(n,t[r],{get(){return o[To]},enumerable:!0})}this.reader=n}write(t){const e=this.field_names,n=this.columns;for(let s=0;s<e.length;s++)e[s]in t&&(n[s][To]=t[e[s]])}read_field(t){return this.columns[t][To]}write_field(t,e){this.columns[t][To]=e}}const Hy=i=>Gr(i);class Wy{id;mask;has_columns;_entity_ids;length=0;edges=[];_flat_columns=[];_col_offset=[];_field_count=[];_field_index=[];_field_names=[];column_groups=[];_column_ids=[];constructor(t,e,n,s=Xf){if(this.id=t,this.mask=e,this._entity_ids=new qf(s),n){let r=0;for(let o=0;o<n.length;o++){const a=n[o],c=a.component_id,l=new Array(a.field_names.length);this._col_offset[c]=r,this._field_count[c]=a.field_names.length,this._field_index[c]=a.field_index,this._field_names[c]=a.field_names;for(let u=0;u<a.field_names.length;u++){const f=new Uy[a.field_types[u]](s);l[u]=f,this._flat_columns[r++]=f}this.column_groups[c]={layout:a,columns:l},this._column_ids.push(c)}}this.has_columns=this._column_ids.length>0}get entity_count(){return this.length}get entity_ids(){return this._entity_ids.buf}get entity_list(){return this._entity_ids.view()}has_component(t){return this.mask.has(t)}matches(t){return this.mask.contains(t)}get_column(t,e){const n=t,s=this._field_index[n][e];return this._flat_columns[this._col_offset[n]+s].buf}write_fields(t,e,n){const s=e,r=this._col_offset[s];if(r===void 0)return;const o=this._field_names[s],a=this._flat_columns;for(let c=0;c<o.length;c++)a[r+c].buf[t]=n[o[c]]}write_fields_positional(t,e,n){const s=e,r=this._col_offset[s];if(r===void 0)return;const o=this._flat_columns;for(let a=0;a<n.length;a++)o[r+a].buf[t]=n[a]}read_field(t,e,n){const s=e,r=this._col_offset[s];if(r===void 0)return NaN;const o=this._field_index[s][n];return o===void 0?NaN:this._flat_columns[r+o].buf[t]}copy_shared_from(t,e,n){const s=t._col_offset,r=t._field_count,o=t._flat_columns,a=this._flat_columns,c=this._column_ids;for(let l=0;l<c.length;l++){const u=c[l],f=s[u];if(f===void 0)continue;const h=this._col_offset[u],d=r[u];for(let m=0;m<d;m++)a[h+m].buf[n]=o[f+m].buf[e]}}add_entity(t){const e=this.length;this._entity_ids.push(t);const n=this._flat_columns;for(let s=0;s<n.length;s++)n[s].push(0);return this.length++,e}remove_entity(t){const e=this.length-1;let n=Sn;const s=this._flat_columns,r=this._entity_ids.buf;if(t!==e){r[t]=r[e],n=nn(r[t]);for(let o=0;o<s.length;o++)s[o].swap_remove(t)}else for(let o=0;o<s.length;o++)s[o].pop();return this._entity_ids.pop(),this.length--,n}add_entity_tag(t){const e=this.length;return this._entity_ids.push(t),this.length++,e}remove_entity_tag(t){const e=this.length-1;let n=Sn;const s=this._entity_ids.buf;return t!==e&&(s[t]=s[e],n=nn(s[t])),this._entity_ids.pop(),this.length--,n}move_entity_from(t,e,n,s){const r=this.length;this._entity_ids.push(n);const o=this._flat_columns,a=t._flat_columns;for(let l=0;l<o.length;l++){const u=s[l];o[l].push(u>=0?a[u].buf[e]:0)}this.length++;const c=t.has_columns?t.remove_entity(e):t.remove_entity_tag(e);ye[0]=r,ye[1]=c}move_entity_from_tag(t,e,n){const s=this.length;this._entity_ids.push(n),this.length++;const r=t.remove_entity_tag(e);ye[0]=s,ye[1]=r}bulk_move_all_from(t,e){const n=t.length;if(n===0)return this.length;const s=this.length,r=this._flat_columns,o=t._flat_columns;this._entity_ids.bulk_append(t._entity_ids.buf,0,n);for(let a=0;a<r.length;a++){const c=e[a];c>=0?r[a].bulk_append(o[c].buf,0,n):r[a].bulk_append_zeroes(n)}this.length+=n,t.length=0,t._entity_ids.clear();for(let a=0;a<o.length;a++)o[a].clear();return s}get_edge(t){return this.edges[t]}set_edge(t,e){this.edges[t]=e}}const ye=[0,Sn];function wo(i,t){const e=t._flat_columns,n=new Int16Array(e.length),s=t._column_ids,r=i._col_offset,o=t._col_offset,a=t._field_count;for(let c=0;c<s.length;c++){const l=s[c],u=o[l],f=a[l],h=r[l];if(h!==void 0)for(let d=0;d<f;d++)n[u+d]=h+d;else for(let d=0;d<f;d++)n[u+d]=-1}return n}function Yf(i,t,e){const n=i.get(t);n!==void 0?n.push(e):i.set(t,[e])}class Xy{entity_generations=[];entity_high_water=0;entity_free_indices=[];entity_alive_count=0;component_metas=[];component_count=0;event_channels=[];event_count=0;resource_channels=[];resource_count=0;archetypes=[];archetype_map=new Map;next_archetype_id=0;component_index=new Map;registered_queries=[];empty_archetype_id;entity_archetype=[];entity_row=[];pending_destroy=[];pending_add_ids=[];pending_add_defs=[];pending_add_values=[];pending_remove_ids=[];pending_remove_defs=[];initial_capacity;constructor(t){this.initial_capacity=t??Xf,this.empty_archetype_id=this.arch_get_or_create_from_mask(new li)}arch_get(t){return this.archetypes[t]}arch_get_or_create_from_mask(t){const e=t.hash(),n=this.archetype_map.get(e);if(n!==void 0){for(let c=0;c<n.length;c++)if(this.archetypes[n[c]].mask.equals(t))return n[c]}const s=Hy(this.next_archetype_id++),r=[];t.for_each(c=>{const l=c,u=this.component_metas[l];u&&u.field_names.length>0&&r.push({component_id:l,field_names:u.field_names,field_index:u.field_index,field_types:u.field_types})});const o=new Wy(s,t,r,this.initial_capacity);this.archetypes.push(o),Yf(this.archetype_map,e,s),t.for_each(c=>{const l=c;let u=this.component_index.get(l);u||(u=new Set,this.component_index.set(l,u)),u.add(s)});const a=this.registered_queries;for(let c=0;c<a.length;c++){const l=a[c];o.matches(l.include_mask)&&(!l.exclude_mask||!o.mask.overlaps(l.exclude_mask))&&(!l.any_of_mask||o.mask.overlaps(l.any_of_mask))&&l.result.push(o)}return s}arch_resolve_add(t,e){const n=this.arch_get(t);if(n.mask.has(e))return t;const s=n.get_edge(e);if(s?.add!=null)return s.add;const r=this.arch_get_or_create_from_mask(n.mask.copy_with_set(e));return this.arch_cache_edge(n,this.arch_get(r),e),r}arch_resolve_remove(t,e){const n=this.arch_get(t);if(!n.mask.has(e))return t;const s=n.get_edge(e);if(s?.remove!=null)return s.remove;const r=this.arch_get_or_create_from_mask(n.mask.copy_with_clear(e));return this.arch_cache_edge(this.arch_get(r),n,e),r}arch_cache_edge(t,e,n){const s=t.get_edge(n)??{add:null,remove:null,add_map:null,remove_map:null};s.add=e.id,s.add_map=wo(t,e),t.set_edge(n,s);const r=e.get_edge(n)??{add:null,remove:null,add_map:null,remove_map:null};r.remove=t.id,r.remove_map=wo(e,t),e.set_edge(n,r)}create_entity(){let t,e;this.entity_free_indices.length>0?(t=this.entity_free_indices.pop(),e=this.entity_generations[t]):(t=this.entity_high_water++,this.entity_generations[t]=yh,e=yh),this.entity_alive_count++;const n=Oy(t,e);return this.entity_archetype[t]=this.empty_archetype_id,this.entity_row[t]=Dn,n}destroy_entity(t){if(!this.is_alive(t))return;const e=nn(t),n=this.entity_row[e];if(n!==Dn){const r=this.arch_get(this.entity_archetype[e]).remove_entity(n);r!==Sn&&(this.entity_row[r]=n)}this.entity_archetype[e]=Dn,this.entity_row[e]=Dn;const s=Sh(t);this.entity_generations[e]=s+1&Mh,this.entity_free_indices.push(e),this.entity_alive_count--}is_alive(t){const e=nn(t);return e<this.entity_high_water&&this.entity_generations[e]===Sh(t)}get entity_count(){return this.entity_alive_count}destroy_entity_deferred(t){this.pending_destroy.push(t)}flush_destroyed(){const t=this.pending_destroy;if(t.length===0)return;const e=this.entity_archetype,n=this.entity_row,s=this.entity_generations,r=this.archetypes,o=this.entity_high_water;for(let a=0;a<t.length;a++){const c=t[a],l=c&Fo,u=c>>Qi;if(l>=o||s[l]!==u)continue;const f=n[l];if(f!==Dn){const h=r[e[l]],d=h.has_columns?h.remove_entity(f):h.remove_entity_tag(f);d!==Sn&&(n[d]=f)}e[l]=Dn,n[l]=Dn,s[l]=u+1&Mh,this.entity_free_indices.push(l),this.entity_alive_count--}t.length=0}get pending_destroy_count(){return this.pending_destroy.length}add_component_deferred(t,e,n){this.pending_add_ids.push(t),this.pending_add_defs.push(e),this.pending_add_values.push(n??xr)}remove_component_deferred(t,e){this.pending_remove_ids.push(t),this.pending_remove_defs.push(e)}flush_structural(){this.pending_add_ids.length>0&&this._flush_adds(),this.pending_remove_ids.length>0&&this._flush_removes()}_flush_adds(){const t=this.pending_add_ids,e=this.pending_add_defs,n=this.pending_add_values,s=t.length,r=this.entity_archetype,o=this.entity_row,a=this.entity_generations,c=this.archetypes,l=this.component_metas,u=this.entity_high_water;for(let f=0;f<s;f++){const h=t[f],d=h&Fo,m=h>>Qi;if(d>=u||a[d]!==m)continue;const y=r[d],g=e[f],p=c[y];if(p.mask.has(g)){l[g].field_names.length>0&&p.write_fields(o[d],g,n[f]);continue}const M=this.arch_resolve_add(y,g),v=c[M],_=o[d],A=!v.has_columns&&!p.has_columns;let b;if(_!==Dn){if(A)v.move_entity_from_tag(p,_,h);else{const P=p.get_edge(g);v.move_entity_from(p,_,h,P.add_map)}b=ye[0],ye[1]!==Sn&&(o[ye[1]]=_)}else b=A?v.add_entity_tag(h):v.add_entity(h);l[g].field_names.length>0&&v.write_fields(b,g,n[f]),r[d]=M,o[d]=b}t.length=0,e.length=0,n.length=0}_flush_removes(){const t=this.pending_remove_ids,e=this.pending_remove_defs,n=t.length,s=this.entity_archetype,r=this.entity_row,o=this.entity_generations,a=this.archetypes,c=this.entity_high_water;for(let l=0;l<n;l++){const u=t[l],f=u&Fo,h=u>>Qi;if(f>=c||o[f]!==h)continue;const d=s[f],m=e[l],y=a[d];if(!y.mask.has(m))continue;const g=this.arch_resolve_remove(d,m),p=a[g],M=r[f];if(!p.has_columns&&!y.has_columns)p.move_entity_from_tag(y,M,u);else{const v=y.get_edge(m);p.move_entity_from(y,M,u,v.remove_map)}ye[1]!==Sn&&(r[ye[1]]=M),s[f]=g,r[f]=ye[0]}t.length=0,e.length=0}get pending_structural_count(){return this.pending_add_ids.length+this.pending_remove_ids.length}register_component(t){const e=By(this.component_count++),n=Object.keys(t),s=new Array(n.length),r=Object.create(null);for(let o=0;o<n.length;o++)r[n[o]]=o,s[o]=t[n[o]];return this.component_metas.push({field_names:n,field_index:r,field_types:s}),e}add_component(t,e,n){if(!this.is_alive(t))return;const s=nn(t),r=this.entity_archetype[s],o=this.arch_get(r);if(o.has_component(e)){o.write_fields(this.entity_row[s],e,n);return}const a=this.arch_resolve_add(r,e),c=this.arch_get(a),l=this.entity_row[s];let u;if(l!==Dn){const f=o.get_edge(e);!c.has_columns&&!o.has_columns?c.move_entity_from_tag(o,l,t):c.move_entity_from(o,l,t,f.add_map),u=ye[0],ye[1]!==Sn&&(this.entity_row[ye[1]]=l)}else u=c.has_columns?c.add_entity(t):c.add_entity_tag(t);c.write_fields(u,e,n),this.entity_archetype[s]=a,this.entity_row[s]=u}add_components(t,e){if(!this.is_alive(t))return;const n=nn(t),s=this.entity_archetype[n];let r=s;for(let o=0;o<e.length;o++)r=this.arch_resolve_add(r,e[o].def);if(r!==s){const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[n];let l;if(c!==Dn){const u=wo(o,a);a.move_entity_from(o,c,t,u),l=ye[0],ye[1]!==Sn&&(this.entity_row[ye[1]]=c)}else l=a.add_entity(t);for(let u=0;u<e.length;u++)a.write_fields(l,e[u].def,e[u].values??xr);this.entity_archetype[n]=r,this.entity_row[n]=l}else{const o=this.arch_get(s),a=this.entity_row[n];for(let c=0;c<e.length;c++)o.write_fields(a,e[c].def,e[c].values??xr)}}remove_component(t,e){if(!this.is_alive(t))return;const n=nn(t),s=this.entity_archetype[n],r=this.arch_get(s);if(!r.has_component(e))return;const o=this.arch_resolve_remove(s,e),a=this.arch_get(o),c=this.entity_row[n],l=r.get_edge(e);!a.has_columns&&!r.has_columns?a.move_entity_from_tag(r,c,t):a.move_entity_from(r,c,t,l.remove_map),ye[1]!==Sn&&(this.entity_row[ye[1]]=c),this.entity_archetype[n]=o,this.entity_row[n]=ye[0]}remove_components(t,e){if(!this.is_alive(t))return;const n=nn(t),s=this.entity_archetype[n];let r=s;for(let u=0;u<e.length;u++)r=this.arch_resolve_remove(r,e[u]);if(r===s)return;const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[n],l=wo(o,a);a.move_entity_from(o,c,t,l),ye[1]!==Sn&&(this.entity_row[ye[1]]=c),this.entity_archetype[n]=r,this.entity_row[n]=ye[0]}has_component(t,e){if(!this.is_alive(t))return!1;const n=nn(t);return this.arch_get(this.entity_archetype[n]).has_component(e)}batch_add_component(t,e,n){if(t.length===0)return;const s=e;if(t.mask.has(s))return;const r=this.arch_resolve_add(t.id,s),o=this.arch_get(r),a=t.get_edge(s),c=t.length,l=this.entity_archetype,u=this.entity_row,f=o.bulk_move_all_from(t,a.add_map);for(let h=0;h<c;h++){const d=nn(o.entity_ids[f+h]);l[d]=r,u[d]=f+h}if(this.component_metas[s].field_names.length>0&&n)for(let h=0;h<c;h++)o.write_fields(f+h,s,n)}batch_remove_component(t,e){if(t.length===0)return;const n=e;if(!t.mask.has(n))return;const s=this.arch_resolve_remove(t.id,n),r=this.arch_get(s),o=t.get_edge(n),a=t.length,c=r.bulk_move_all_from(t,o.remove_map),l=this.entity_archetype,u=this.entity_row;for(let f=0;f<a;f++){const h=nn(r.entity_ids[c+f]);l[h]=s,u[h]=c+f}}get_entity_archetype(t){return this.arch_get(this.entity_archetype[nn(t)])}get_entity_row(t){return this.entity_row[nn(t)]}get_matching_archetypes(t,e,n){const s=t._words;let r=!1;for(let l=0;l<s.length;l++)if(s[l]!==0){r=!0;break}if(!r)return this.archetypes.filter(l=>(!e||!l.mask.overlaps(e))&&(!n||l.mask.overlaps(n)));let o,a=!1;for(let l=0;l<s.length;l++){let u=s[l];if(u===0)continue;const f=l<<ki;for(;u!==0;){const h=u&-u>>>0,d=f+(Vi-Math.clz32(h));u^=h;const m=this.component_index.get(d);if(!m||m.size===0){a=!0;break}(!o||m.size<o.size)&&(o=m)}if(a)break}if(a||!o)return[];const c=[];for(const l of o){const u=this.arch_get(l);u.matches(t)&&(!e||!u.mask.overlaps(e))&&(!n||u.mask.overlaps(n))&&c.push(u)}return c}register_query(t,e,n){const s=this.get_matching_archetypes(t,e,n);return this.registered_queries.push({include_mask:t.copy(),exclude_mask:e?e.copy():null,any_of_mask:n?n.copy():null,result:s}),s}get archetype_count(){return this.archetypes.length}register_event(t){const e=zy(this.event_count++),n=new ky(t);return this.event_channels.push(n),e}emit_event(t,e){this.event_channels[t].emit(e)}emit_signal(t){this.event_channels[t].emit_signal()}get_event_reader(t){return this.event_channels[t].reader}clear_events(){const t=this.event_channels;for(let e=0;e<t.length;e++)t[e].clear()}register_resource(t,e){const n=Vy(this.resource_count++),s=new Gy(t,e);return this.resource_channels.push(s),n}get_resource_reader(t){return this.resource_channels[t].reader}get_resource_channel(t){return this.resource_channels[t]}}const Ka=["PRE_STARTUP","STARTUP","POST_STARTUP"],Ja=["PRE_UPDATE","UPDATE","POST_UPDATE"];class qy{label_systems=new Map;sorted_cache=new Map;system_index=new Map;next_insertion_order=0;constructor(){for(let t=0;t<Ka.length;t++)this.label_systems.set(Ka[t],[]);this.label_systems.set("FIXED_UPDATE",[]);for(let t=0;t<Ja.length;t++)this.label_systems.set(Ja[t],[])}add_systems(t,...e){for(const n of e){const s="system"in n?n.system:n,r="system"in n?n.ordering:void 0,o={descriptor:s,insertion_order:this.next_insertion_order++,before:new Set(r?.before??[]),after:new Set(r?.after??[])};this.label_systems.get(t).push(o),this.system_index.set(s,t),this.sorted_cache.delete(t)}}remove_system(t){const e=this.system_index.get(t);if(e===void 0)return;const n=this.label_systems.get(e),s=n.findIndex(r=>r.descriptor===t);if(s!==-1){const r=n.length-1;s!==r&&(n[s]=n[r]),n.pop();for(const o of n)o.before.delete(t),o.after.delete(t)}this.system_index.delete(t),this.sorted_cache.delete(e)}run_startup(t){for(const e of Ka)this.run_label(e,t,wy)}run_update(t,e){for(const n of Ja)this.run_label(n,t,e)}run_fixed_update(t,e){this.run_label("FIXED_UPDATE",t,e)}has_fixed_systems(){return this.label_systems.get("FIXED_UPDATE").length>0}get_all_systems(){const t=[];for(const e of this.label_systems.values())for(const n of e)t.push(n.descriptor);return t}has_system(t){return this.system_index.has(t)}clear(){for(const t of this.label_systems.values())t.length=0;this.sorted_cache.clear(),this.system_index.clear()}run_label(t,e,n){const s=this.get_sorted(t);for(let r=0;r<s.length;r++)s[r].fn(e,n);e.flush()}get_sorted(t){const e=this.sorted_cache.get(t);if(e!==void 0)return e;const n=this.label_systems.get(t),s=this.topological_sort(n,t);return this.sorted_cache.set(t,s),s}topological_sort(t,e){if(t.length===0)return[];const n=new Map,s=new Map,r=new Map,o=new Set;for(const l of t)n.set(l.descriptor,new Set),s.set(l.descriptor,0),r.set(l.descriptor,l.insertion_order),o.add(l.descriptor);for(const l of t){for(const u of l.before)o.has(u)&&(n.get(l.descriptor).add(u),s.set(u,s.get(u)+1));for(const u of l.after)o.has(u)&&(n.get(u).add(l.descriptor),s.set(l.descriptor,s.get(l.descriptor)+1))}let a=[];for(const l of t)s.get(l.descriptor)===0&&a.push(l.descriptor);a.sort((l,u)=>r.get(u)-r.get(l));const c=[];for(;a.length>0;){const l=a.pop();c.push(l);for(const u of n.get(l)){const f=s.get(u)-1;s.set(u,f),f===0&&a.push(u)}a.sort((u,f)=>r.get(f)-r.get(u))}if(c.length!==t.length){const l=new Set(c),u=t.filter(f=>!l.has(f.descriptor)).map(f=>f.descriptor.name??`system_${f.descriptor.id}`);throw new xy(Wf.CIRCULAR_SYSTEM_DEPENDENCY,`Circular system dependency detected in ${e}: [${u.join(", ")}]`)}return c}}const Eh=new WeakMap;function Yy(i,t){let e=Eh.get(i);if(!e){e=Object.create(null);const{field_names:r}=i.layout;for(let o=0;o<r.length;o++){const a=o;Object.defineProperty(e,r[o],{get(){return this._columns[a][this._row]},set(c){this._columns[a][this._row]=c},enumerable:!0,configurable:!1})}Eh.set(i,e)}const n=Object.create(e),s=new Array(i.columns.length);for(let r=0;r<i.columns.length;r++)s[r]=i.columns[r].buf;return n._columns=s,n._row=t,n}class jy{_archetypes;_defs;_resolver;_include;_exclude;_any_of;constructor(t,e,n,s,r,o){this._archetypes=t,this._defs=e,this._resolver=n,this._include=s,this._exclude=r,this._any_of=o}get archetype_count(){return this._archetypes.length}count(){const t=this._archetypes;let e=0;for(let n=0;n<t.length;n++)e+=t[n].entity_count;return e}get archetypes(){return this._archetypes}*[Symbol.iterator](){const t=this._archetypes;for(let e=0;e<t.length;e++)t[e].entity_count>0&&(yield t[e])}and(...t){const e=this._include.copy(),n=this._defs.slice();for(let s=0;s<t.length;s++)e.has(t[s])||(e.set(t[s]),n.push(t[s]));return this._resolver._resolve_query(e,this._exclude,this._any_of,n)}not(...t){const e=this._exclude?this._exclude.copy():new li;for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolver._resolve_query(this._include,e,this._any_of,this._defs)}any_of(...t){const e=this._any_of?this._any_of.copy():new li;for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolver._resolve_query(this._include,this._exclude,e,this._defs)}}class $y{constructor(t){this._resolver=t}every(...t){const e=new li;for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolver._resolve_query(e,null,null,t)}}class Zy{store;constructor(t){this.store=t}create_entity(){return this.store.create_entity()}get_field(t,e,n){const s=this.store.get_entity_archetype(t),r=this.store.get_entity_row(t);return s.read_field(r,e,n)}set_field(t,e,n,s){const r=this.store.get_entity_archetype(t),o=this.store.get_entity_row(t),a=r.get_column(e,n);a[o]=s}ref(t,e){const n=this.store.get_entity_archetype(e),s=this.store.get_entity_row(e);return Yy(n.column_groups[t],s)}destroy_entity(t){return this.store.destroy_entity_deferred(t),this}add_component(t,e,n){return this.store.add_component_deferred(t,e,n??xr),this}remove_component(t,e){return this.store.remove_component_deferred(t,e),this}flush(){this.store.flush_structural(),this.store.flush_destroyed()}emit(t,e){e===void 0?this.store.emit_signal(t):this.store.emit_event(t,e)}read(t){return this.store.get_event_reader(t)}resource(t){return this.store.get_resource_reader(t)}set_resource(t,e){this.store.get_resource_channel(t).write(e)}}const Ky=i=>Gr(i);class Jy{store;schedule;ctx;systems=new Set;next_system_id=0;_fixed_timestep;_accumulator=0;_max_fixed_steps;query_cache=new Map;scratch_mask=new li;constructor(t){this.store=new Xy(t?.initial_capacity),this.schedule=new qy,this.ctx=new Zy(this.store),this._fixed_timestep=t?.fixed_timestep??by,this._max_fixed_steps=t?.max_fixed_steps??Ty}get fixed_timestep(){return this._fixed_timestep}set fixed_timestep(t){this._fixed_timestep=t}get fixed_alpha(){return this._accumulator/this._fixed_timestep}register_component(t,e){if(Array.isArray(t)){const n=e??"f64",s=Object.create(null);for(const r of t)s[r]=n;return this.store.register_component(s)}return this.store.register_component(t)}register_tag(){return this.store.register_component({})}register_event(t){return this.store.register_event(t)}register_signal(){return this.store.register_event([])}register_resource(t,e){return this.store.register_resource(t,e)}resource(t){return this.store.get_resource_reader(t)}set_resource(t,e){this.store.get_resource_channel(t).write(e)}create_entity(){return this.store.create_entity()}destroy_entity_deferred(t){this.store.destroy_entity_deferred(t)}is_alive(t){return this.store.is_alive(t)}get entity_count(){return this.store.entity_count}add_component(t,e,n){return this.store.add_component(t,e,n??xr),this}add_components(t,e){this.store.add_components(t,e)}remove_component(t,e){return this.store.remove_component(t,e),this}remove_components(t,...e){this.store.remove_components(t,e)}has_component(t,e){return this.store.has_component(t,e)}batch_add_component(t,e,n){this.store.batch_add_component(t,e,n)}batch_remove_component(t,e){this.store.batch_remove_component(t,e)}get_field(t,e,n){const s=this.store.get_entity_archetype(t),r=this.store.get_entity_row(t);return s.read_field(r,e,n)}set_field(t,e,n,s){const r=this.store.get_entity_archetype(t),o=this.store.get_entity_row(t),a=r.get_column(e,n);a[o]=s}emit(t,e){e===void 0?this.store.emit_signal(t):this.store.emit_event(t,e)}query(...t){const e=this.scratch_mask;e._words.fill(0);for(let n=0;n<t.length;n++)e.set(t[n]);return this._resolve_query(e.copy(),null,null,t)}_resolve_query(t,e,n,s){const r=t.hash(),o=e?e.hash():0,a=n?n.hash():0,c=r^Math.imul(o,My)^Math.imul(a,Sy)|0,l=this._find_cached(c,t,e,n);if(l!==void 0)return l.query;const u=this.store.register_query(t,e??void 0,n??void 0),f=new jy(u,s,this,t.copy(),e?.copy()??null,n?.copy()??null);return Yf(this.query_cache,c,{include_mask:t.copy(),exclude_mask:e?.copy()??null,any_of_mask:n?.copy()??null,query:f}),f}_find_cached(t,e,n,s){const r=this.query_cache.get(t);if(r)for(let o=0;o<r.length;o++){const a=r[o];if(!(!a.include_mask.equals(e)||!(n===null?a.exclude_mask===null:a.exclude_mask!==null&&a.exclude_mask.equals(n))||!(s===null?a.any_of_mask===null:a.any_of_mask!==null&&a.any_of_mask.equals(s))))return a}}register_system(t,e){let n;if(typeof t=="function")if(e!==void 0){const o=e(new $y(this)),a=this.ctx,c=t;n={fn:(l,u)=>c(o,a,u)}}else n={fn:t};else n=t;const s=Ky(this.next_system_id++),r=Object.freeze(Object.assign({id:s},n));return this.systems.add(r),r}add_systems(t,...e){return this.schedule.add_systems(t,...e),this}remove_system(t){this.schedule.remove_system(t),t.on_removed?.(),this.systems.delete(t)}get system_count(){return this.systems.size}startup(){for(const t of this.systems.values())t.on_added?.(this.ctx);this.schedule.run_startup(this.ctx)}update(t){if(this.schedule.has_fixed_systems()){this._accumulator+=t;const e=this._max_fixed_steps*this._fixed_timestep;for(this._accumulator>e&&(this._accumulator=e);this._accumulator>=this._fixed_timestep;)this.schedule.run_fixed_update(this.ctx,this._fixed_timestep),this._accumulator-=this._fixed_timestep}this.schedule.run_update(this.ctx,t),this.store.clear_events()}flush(){this.ctx.flush()}dispose(){for(const t of this.systems.values())t.dispose?.(),t.on_removed?.();this.systems.clear(),this.schedule.clear()}}class Qy{#t;#n;constructor(){const[t,e]=qd({});this.#t=t,this.#n=e}track(t){t in this.#t||queueMicrotask(()=>{this.#n(e=>(e[t]=0,e))}),this.#t[t]}untrack(t){this.#n(e=>(delete e[t],e))}dirty(t){t in this.#t&&this.#n(e=>(e[t]=1-e[t],e))}}class oc{#t;#n;#e;#s;#i=0;#r=!1;#o;constructor(t,e,n,s,r){this.#e=t,this.#s=e,this.#t=n,this.#n=s,this.#o=r}get value(){return this.#e.track(this.#s),Ye()!==null&&(this.#i++,this.#r||(this.#r=!0,na(()=>{this.#i--,this.#i===0&&queueMicrotask(()=>{this.#i===0&&(this.#r=!1,this.#o?.())})}))),this.#t()}dirty(){this.#n()}}class tM{#t;#n;#e;#s;#i;constructor(t,e,n){this.#t=t,this.#n=e,this.#e=n,this.#i=`resource:${e.toString()}`,this.#s=new Map}get resourceKey(){return this.#i}#r(t){if(Ye()===null)return this.#e[t];const n=`${this.#i}:${t}`;let s=this.#s.get(t);return s===void 0&&(s=new oc(this.#t,n,()=>this.#e[t],()=>this.#t.dirty(n),()=>{this.#t.untrack(n),this.#s.delete(t)}),this.#s.set(t,s)),s.value}get delta(){return this.#r("delta")}get elapsed(){return this.#r("elapsed")}get(t){return this.#r(t)}}class eM{#t;#n;#e;#s;#i;constructor(t,e,n){this.#t=t,this.#n=e,this.#e=n,this.#s=new Map,this.#i=new Map}get id(){return this.#e}hasComponent(t){if(Ye()===null)return this.#n.has_component(this.#e,t);const n=`entity:${this.#e}:has:${t}`;let s=this.#s.get(n);return s===void 0&&(s=new oc(this.#t,n,()=>this.#n.has_component(this.#e,t),()=>this.#t.dirty(n),()=>{this.#t.untrack(n),this.#s.delete(n)}),this.#s.set(n,s)),s.value}getField(t,e){if(Ye()===null)return this.#n.get_field(this.#e,t,e);const s=`entity:${this.#e}:${t}:${e}`;let r=this.#i.get(s);return r===void 0&&(r=new oc(this.#t,s,()=>this.#n.get_field(this.#e,t,e),()=>this.#t.dirty(s),()=>{this.#t.untrack(s),this.#i.delete(s)}),this.#i.set(s,r)),r.value}}class vr{#t;#n;#e;#s;#i;constructor(t,e,n,s){this.#t=t,this.#n=e,this.#s=n,this.#i=s,this.#e=e.query(...n)}get queryKey(){return this.#i}get archetype_count(){return Ye()===null?this.#e.archetype_count:(this.#t.track(`${this.#i}:archetype_count`),this.#e.archetype_count)}count(){return Ye()===null?this.#e.count():(this.#t.track(`${this.#i}:count`),this.#t.track("world:entities"),this.#e.count())}get archetypes(){return Ye()===null?this.#e.archetypes:(this.#t.track(`${this.#i}:archetypes`),this.#t.track("world:entities"),this.#e.archetypes)}*[Symbol.iterator](){const t=Ye();if(this.#e.archetypes,t===null){for(const e of this.#e)yield e;return}this.#t.track(`${this.#i}:archetypes`);for(const e of this.#e)yield new nM(this.#t,this.#n,e,this.#i)}and(...t){return new vr(this.#t,this.#n,[...this.#s,...t],`${this.#i}:and`)}not(...t){return new vr(this.#t,this.#n,this.#s,`${this.#i}:not`)}any_of(...t){return new vr(this.#t,this.#n,this.#s,`${this.#i}:any_of`)}}class nM{#t;#n;#e;#s;constructor(t,e,n,s){this.#t=t,this.#n=e,this.#e=n,this.#s=s}get entity_ids(){if(Ye()===null)return this.#e.entity_ids;const e=`arch:${this.#e.id}:entity_ids`;return this.#t.track(e),this.#e.entity_ids}get entity_count(){if(Ye()===null)return this.#e.entity_count;const e=`arch:${this.#e.id}:count`;return this.#t.track(e),this.#e.entity_count}has_component(t){if(Ye()===null)return this.#e.has_component(t);const n=`arch:${this.#e.id}:has:${t}`;return this.#t.track(n),this.#e.has_component(t)}get_column(t,e){if(Ye()===null)return this.#e.get_column(t,e);const s=`arch:${this.#e.id}:col`;return this.#t.track(s),this.#e.get_column(t,e)}}class iM{#t;#n;constructor(t){this.#t=t,this.#n=new Qy}get ecs(){return this.#t}dirty(t){this.#n.dirty(t)}query(...t){const e=`query:${t.map(n=>n.toString()).join(",")}`;return new vr(this.#n,this.#t,t,e)}resource(t){return new tM(this.#n,t,this.#t.resource(t))}entity(t){return new eM(this.#n,this.#t,t)}create_entity(){const t=this.#t.create_entity();return on(()=>this.#n.dirty("world:entities")),t}destroy_entity_deferred(t){this.#t.destroy_entity_deferred(t),on(()=>this.#n.dirty("world:entities"))}add_component(t,e,n){const s=`entity:${t}:has:${e}`;return this.#t.add_component(t,e,n),on(()=>{this.#n.dirty(s),this.#n.dirty("world:entities")}),this}remove_component(t,e){const n=`entity:${t}:has:${e}`;return this.#t.remove_component(t,e),on(()=>{this.#n.dirty(n),this.#n.dirty("world:entities")}),this}set_field(t,e,n,s){const r=`entity:${t}:${e}:${n}`;this.#t.set_field(t,e,n,s),on(()=>this.#n.dirty(r))}set_resource(t,e){const n=this.#t.resource(t);this.#t.set_resource(t,e);for(const s of Object.keys(n))this.#n.dirty(`resource:${t.toString()}:${s}`)}}const sM={def:{x:"f64",y:"f64",z:"f64"}},rM={def:{x:"f64",y:"f64",z:"f64"}},oM={def:{x:"f64",y:"f64",z:"f64",w:"f64"}},aM={def:{playerType:"u8",facingForward:"u8"}},lM={def:[]},cM={def:{meshId:"u32"}},uM={def:{speed:"f64"}},hM={schema:{x:0,y:-10,z:0}},Cn=new Jy,fM=new iM(Cn),Ke=Cn.register_component(sM.def),Gi=Cn.register_component(rM.def),Le=Cn.register_component(oM.def),Oo=Cn.register_component(aM.def);Cn.register_component(lM.def);Cn.register_component(cM.def);const ac=Cn.register_component(uM.def),jf=Cn.register_resource(["x","y","z"],hM.schema);function dM(){return Cn.startup(),Cn.set_resource(jf,{x:0,y:-10,z:0}),{ecs:fM}}function pM(i){const t=i.reactiveEcs,e=t.create_entity();return t.add_component(e,Ke,{x:i.position.x,y:i.position.y,z:i.position.z}),t.add_component(e,Gi,{x:i.velocity.x,y:i.velocity.y,z:i.velocity.z}),t.add_component(e,Le,{x:0,y:0,z:0,w:1}),t.add_component(e,Oo,{playerType:1,facingForward:1}),t.add_component(e,ac,{speed:0}),e}const mM=rn;class Ko extends ra{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){const r=this,o=new Nf(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){const e=this;function n(J,k){if(J.nodeType!==1)return;const w=_(J);let R=!1,F=null;switch(J.nodeName){case"svg":k=m(J,k);break;case"style":r(J);break;case"g":k=m(J,k);break;case"path":k=m(J,k),J.hasAttribute("d")&&(F=s(J));break;case"rect":k=m(J,k),F=c(J);break;case"polygon":k=m(J,k),F=l(J);break;case"polyline":k=m(J,k),F=u(J);break;case"circle":k=m(J,k),F=f(J);break;case"ellipse":k=m(J,k),F=h(J);break;case"line":k=m(J,k),F=d(J);break;case"defs":R=!0;break;case"use":k=m(J,k);const lt=(J.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),_t=J.viewportElement.getElementById(lt);_t?n(_t,k):console.warn("SVGLoader: 'use node' references non-existent node id: "+lt);break}F&&(k.fill!==void 0&&k.fill!=="none"&&F.color.setStyle(k.fill,mM),b(F,gt),U.push(F),F.userData={node:J,style:k});const nt=J.childNodes;for(let X=0;X<nt.length;X++){const lt=nt[X];R&&lt.nodeName!=="style"&&lt.nodeName!=="defs"||n(lt,k)}w&&(Y.pop(),Y.length>0?gt.copy(Y[Y.length-1]):gt.identity())}function s(J){const k=new Fi,w=new ct,R=new ct,F=new ct;let nt=!0,X=!1;const lt=J.getAttribute("d");if(lt===""||lt==="none")return null;const _t=lt.match(/[a-df-z][^a-df-z]*/ig);for(let dt=0,z=_t.length;dt<z;dt++){const $=_t[dt],K=$.charAt(0),rt=$.slice(1).trim();nt===!0&&(X=!0,nt=!1);let E;switch(K){case"M":E=g(rt);for(let D=0,at=E.length;D<at;D+=2)w.x=E[D+0],w.y=E[D+1],R.x=w.x,R.y=w.y,D===0?k.moveTo(w.x,w.y):k.lineTo(w.x,w.y),D===0&&F.copy(w);break;case"H":E=g(rt);for(let D=0,at=E.length;D<at;D++)w.x=E[D],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&X===!0&&F.copy(w);break;case"V":E=g(rt);for(let D=0,at=E.length;D<at;D++)w.y=E[D],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&X===!0&&F.copy(w);break;case"L":E=g(rt);for(let D=0,at=E.length;D<at;D+=2)w.x=E[D+0],w.y=E[D+1],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&X===!0&&F.copy(w);break;case"C":E=g(rt);for(let D=0,at=E.length;D<at;D+=6)k.bezierCurveTo(E[D+0],E[D+1],E[D+2],E[D+3],E[D+4],E[D+5]),R.x=E[D+2],R.y=E[D+3],w.x=E[D+4],w.y=E[D+5],D===0&&X===!0&&F.copy(w);break;case"S":E=g(rt);for(let D=0,at=E.length;D<at;D+=4)k.bezierCurveTo(y(w.x,R.x),y(w.y,R.y),E[D+0],E[D+1],E[D+2],E[D+3]),R.x=E[D+0],R.y=E[D+1],w.x=E[D+2],w.y=E[D+3],D===0&&X===!0&&F.copy(w);break;case"Q":E=g(rt);for(let D=0,at=E.length;D<at;D+=4)k.quadraticCurveTo(E[D+0],E[D+1],E[D+2],E[D+3]),R.x=E[D+0],R.y=E[D+1],w.x=E[D+2],w.y=E[D+3],D===0&&X===!0&&F.copy(w);break;case"T":E=g(rt);for(let D=0,at=E.length;D<at;D+=2){const xt=y(w.x,R.x),pt=y(w.y,R.y);k.quadraticCurveTo(xt,pt,E[D+0],E[D+1]),R.x=xt,R.y=pt,w.x=E[D+0],w.y=E[D+1],D===0&&X===!0&&F.copy(w)}break;case"A":E=g(rt,[3,4],7);for(let D=0,at=E.length;D<at;D+=7){if(E[D+5]==w.x&&E[D+6]==w.y)continue;const xt=w.clone();w.x=E[D+5],w.y=E[D+6],R.x=w.x,R.y=w.y,o(k,E[D],E[D+1],E[D+2],E[D+3],E[D+4],xt,w),D===0&&X===!0&&F.copy(w)}break;case"m":E=g(rt);for(let D=0,at=E.length;D<at;D+=2)w.x+=E[D+0],w.y+=E[D+1],R.x=w.x,R.y=w.y,D===0?k.moveTo(w.x,w.y):k.lineTo(w.x,w.y),D===0&&F.copy(w);break;case"h":E=g(rt);for(let D=0,at=E.length;D<at;D++)w.x+=E[D],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&X===!0&&F.copy(w);break;case"v":E=g(rt);for(let D=0,at=E.length;D<at;D++)w.y+=E[D],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&X===!0&&F.copy(w);break;case"l":E=g(rt);for(let D=0,at=E.length;D<at;D+=2)w.x+=E[D+0],w.y+=E[D+1],R.x=w.x,R.y=w.y,k.lineTo(w.x,w.y),D===0&&X===!0&&F.copy(w);break;case"c":E=g(rt);for(let D=0,at=E.length;D<at;D+=6)k.bezierCurveTo(w.x+E[D+0],w.y+E[D+1],w.x+E[D+2],w.y+E[D+3],w.x+E[D+4],w.y+E[D+5]),R.x=w.x+E[D+2],R.y=w.y+E[D+3],w.x+=E[D+4],w.y+=E[D+5],D===0&&X===!0&&F.copy(w);break;case"s":E=g(rt);for(let D=0,at=E.length;D<at;D+=4)k.bezierCurveTo(y(w.x,R.x),y(w.y,R.y),w.x+E[D+0],w.y+E[D+1],w.x+E[D+2],w.y+E[D+3]),R.x=w.x+E[D+0],R.y=w.y+E[D+1],w.x+=E[D+2],w.y+=E[D+3],D===0&&X===!0&&F.copy(w);break;case"q":E=g(rt);for(let D=0,at=E.length;D<at;D+=4)k.quadraticCurveTo(w.x+E[D+0],w.y+E[D+1],w.x+E[D+2],w.y+E[D+3]),R.x=w.x+E[D+0],R.y=w.y+E[D+1],w.x+=E[D+2],w.y+=E[D+3],D===0&&X===!0&&F.copy(w);break;case"t":E=g(rt);for(let D=0,at=E.length;D<at;D+=2){const xt=y(w.x,R.x),pt=y(w.y,R.y);k.quadraticCurveTo(xt,pt,w.x+E[D+0],w.y+E[D+1]),R.x=xt,R.y=pt,w.x=w.x+E[D+0],w.y=w.y+E[D+1],D===0&&X===!0&&F.copy(w)}break;case"a":E=g(rt,[3,4],7);for(let D=0,at=E.length;D<at;D+=7){if(E[D+5]==0&&E[D+6]==0)continue;const xt=w.clone();w.x+=E[D+5],w.y+=E[D+6],R.x=w.x,R.y=w.y,o(k,E[D],E[D+1],E[D+2],E[D+3],E[D+4],xt,w),D===0&&X===!0&&F.copy(w)}break;case"Z":case"z":k.currentPath.autoClose=!0,k.currentPath.curves.length>0&&(w.copy(F),k.currentPath.currentPoint.copy(w),nt=!0);break;default:console.warn($)}X=!1}return k}function r(J){if(!(!J.sheet||!J.sheet.cssRules||!J.sheet.cssRules.length))for(let k=0;k<J.sheet.cssRules.length;k++){const w=J.sheet.cssRules[k];if(w.type!==1)continue;const R=w.selectorText.split(/,/gm).filter(Boolean).map(F=>F.trim());for(let F=0;F<R.length;F++){const nt=Object.fromEntries(Object.entries(w.style).filter(([,X])=>X!==""));V[R[F]]=Object.assign(V[R[F]]||{},nt)}}}function o(J,k,w,R,F,nt,X,lt){if(k==0||w==0){J.lineTo(lt.x,lt.y);return}R=R*Math.PI/180,k=Math.abs(k),w=Math.abs(w);const _t=(X.x-lt.x)/2,dt=(X.y-lt.y)/2,z=Math.cos(R)*_t+Math.sin(R)*dt,$=-Math.sin(R)*_t+Math.cos(R)*dt;let K=k*k,rt=w*w;const E=z*z,D=$*$,at=E/K+D/rt;if(at>1){const vt=Math.sqrt(at);k=vt*k,w=vt*w,K=k*k,rt=w*w}const xt=K*D+rt*E,pt=(K*rt-xt)/xt;let L=Math.sqrt(Math.max(0,pt));F===nt&&(L=-L);const S=L*k*$/w,W=-L*w*z/k,tt=Math.cos(R)*S-Math.sin(R)*W+(X.x+lt.x)/2,ft=Math.sin(R)*S+Math.cos(R)*W+(X.y+lt.y)/2,it=a(1,0,(z-S)/k,($-W)/w),At=a((z-S)/k,($-W)/w,(-z-S)/k,(-$-W)/w)%(Math.PI*2);J.currentPath.absellipse(tt,ft,k,w,it,it+At,nt===0,R)}function a(J,k,w,R){const F=J*w+k*R,nt=Math.sqrt(J*J+k*k)*Math.sqrt(w*w+R*R);let X=Math.acos(Math.max(-1,Math.min(1,F/nt)));return J*R-k*w<0&&(X=-X),X}function c(J){const k=v(J.getAttribute("x")||0),w=v(J.getAttribute("y")||0),R=v(J.getAttribute("rx")||J.getAttribute("ry")||0),F=v(J.getAttribute("ry")||J.getAttribute("rx")||0),nt=v(J.getAttribute("width")),X=v(J.getAttribute("height")),lt=1-.551915024494,_t=new Fi;return _t.moveTo(k+R,w),_t.lineTo(k+nt-R,w),(R!==0||F!==0)&&_t.bezierCurveTo(k+nt-R*lt,w,k+nt,w+F*lt,k+nt,w+F),_t.lineTo(k+nt,w+X-F),(R!==0||F!==0)&&_t.bezierCurveTo(k+nt,w+X-F*lt,k+nt-R*lt,w+X,k+nt-R,w+X),_t.lineTo(k+R,w+X),(R!==0||F!==0)&&_t.bezierCurveTo(k+R*lt,w+X,k,w+X-F*lt,k,w+X-F),_t.lineTo(k,w+F),(R!==0||F!==0)&&_t.bezierCurveTo(k,w+F*lt,k+R*lt,w,k+R,w),_t}function l(J){function k(nt,X,lt){const _t=v(X),dt=v(lt);F===0?R.moveTo(_t,dt):R.lineTo(_t,dt),F++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new Fi;let F=0;return J.getAttribute("points").replace(w,k),R.currentPath.autoClose=!0,R}function u(J){function k(nt,X,lt){const _t=v(X),dt=v(lt);F===0?R.moveTo(_t,dt):R.lineTo(_t,dt),F++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new Fi;let F=0;return J.getAttribute("points").replace(w,k),R.currentPath.autoClose=!1,R}function f(J){const k=v(J.getAttribute("cx")||0),w=v(J.getAttribute("cy")||0),R=v(J.getAttribute("r")||0),F=new Us;F.absarc(k,w,R,0,Math.PI*2);const nt=new Fi;return nt.subPaths.push(F),nt}function h(J){const k=v(J.getAttribute("cx")||0),w=v(J.getAttribute("cy")||0),R=v(J.getAttribute("rx")||0),F=v(J.getAttribute("ry")||0),nt=new Us;nt.absellipse(k,w,R,F,0,Math.PI*2);const X=new Fi;return X.subPaths.push(nt),X}function d(J){const k=v(J.getAttribute("x1")||0),w=v(J.getAttribute("y1")||0),R=v(J.getAttribute("x2")||0),F=v(J.getAttribute("y2")||0),nt=new Fi;return nt.moveTo(k,w),nt.lineTo(R,F),nt.currentPath.autoClose=!1,nt}function m(J,k){k=Object.assign({},k);let w={};if(J.hasAttribute("class")){const X=J.getAttribute("class").split(/\s/).filter(Boolean).map(lt=>lt.trim());for(let lt=0;lt<X.length;lt++)w=Object.assign(w,V["."+X[lt]])}J.hasAttribute("id")&&(w=Object.assign(w,V["#"+J.getAttribute("id")]));function R(X,lt,_t){_t===void 0&&(_t=function(z){return z.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),z}),J.hasAttribute(X)&&(k[lt]=_t(J.getAttribute(X))),w[lt]&&(k[lt]=_t(w[lt])),J.style&&J.style[X]!==""&&(k[lt]=_t(J.style[X]))}function F(X){return Math.max(0,Math.min(1,v(X)))}function nt(X){return Math.max(0,v(X))}return R("fill","fill"),R("fill-opacity","fillOpacity",F),R("fill-rule","fillRule"),R("opacity","opacity",F),R("stroke","stroke"),R("stroke-opacity","strokeOpacity",F),R("stroke-width","strokeWidth",nt),R("stroke-linejoin","strokeLineJoin"),R("stroke-linecap","strokeLineCap"),R("stroke-miterlimit","strokeMiterLimit",nt),R("visibility","visibility"),k}function y(J,k){return J-(k-J)}function g(J,k,w){if(typeof J!="string")throw new TypeError("Invalid input: "+typeof J);const R={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},F=0,nt=1,X=2,lt=3;let _t=F,dt=!0,z="",$="";const K=[];function rt(xt,pt,L){const S=new SyntaxError('Unexpected character "'+xt+'" at index '+pt+".");throw S.partial=L,S}function E(){z!==""&&($===""?K.push(Number(z)):K.push(Number(z)*Math.pow(10,Number($)))),z="",$=""}let D;const at=J.length;for(let xt=0;xt<at;xt++){if(D=J[xt],Array.isArray(k)&&k.includes(K.length%w)&&R.FLAGS.test(D)){_t=nt,z=D,E();continue}if(_t===F){if(R.WHITESPACE.test(D))continue;if(R.DIGIT.test(D)||R.SIGN.test(D)){_t=nt,z=D;continue}if(R.POINT.test(D)){_t=X,z=D;continue}R.COMMA.test(D)&&(dt&&rt(D,xt,K),dt=!0)}if(_t===nt){if(R.DIGIT.test(D)){z+=D;continue}if(R.POINT.test(D)){z+=D,_t=X;continue}if(R.EXP.test(D)){_t=lt;continue}R.SIGN.test(D)&&z.length===1&&R.SIGN.test(z[0])&&rt(D,xt,K)}if(_t===X){if(R.DIGIT.test(D)){z+=D;continue}if(R.EXP.test(D)){_t=lt;continue}R.POINT.test(D)&&z[z.length-1]==="."&&rt(D,xt,K)}if(_t===lt){if(R.DIGIT.test(D)){$+=D;continue}if(R.SIGN.test(D)){if($===""){$+=D;continue}$.length===1&&R.SIGN.test($)&&rt(D,xt,K)}}R.WHITESPACE.test(D)?(E(),_t=F,dt=!1):R.COMMA.test(D)?(E(),_t=F,dt=!0):R.SIGN.test(D)?(E(),_t=nt,z=D):R.POINT.test(D)?(E(),_t=X,z=D):rt(D,xt,K)}return E(),K}const p=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(J){let k="px";if(typeof J=="string"||J instanceof String)for(let R=0,F=p.length;R<F;R++){const nt=p[R];if(J.endsWith(nt)){k=nt,J=J.substring(0,J.length-nt.length);break}}let w;return k==="px"&&e.defaultUnit!=="px"?w=M.in[e.defaultUnit]/e.defaultDPI:(w=M[k][e.defaultUnit],w<0&&(w=M[k].in*e.defaultDPI)),w*parseFloat(J)}function _(J){if(!(J.hasAttribute("transform")||J.nodeName==="use"&&(J.hasAttribute("x")||J.hasAttribute("y"))))return null;const k=A(J);return Y.length>0&&k.premultiply(Y[Y.length-1]),gt.copy(k),Y.push(k),k}function A(J){const k=new Xt,w=G;if(J.nodeName==="use"&&(J.hasAttribute("x")||J.hasAttribute("y"))){const R=v(J.getAttribute("x")||0),F=v(J.getAttribute("y")||0);k.translate(R,F)}if(J.hasAttribute("transform")){const R=J.getAttribute("transform").split(")");for(let F=R.length-1;F>=0;F--){const nt=R[F].trim();if(nt==="")continue;const X=nt.indexOf("("),lt=nt.length;if(X>0&&X<lt){const _t=nt.slice(0,X),dt=g(nt.slice(X+1));switch(w.identity(),_t){case"translate":if(dt.length>=1){const z=dt[0];let $=0;dt.length>=2&&($=dt[1]),w.translate(z,$)}break;case"rotate":if(dt.length>=1){let z=0,$=0,K=0;z=dt[0]*Math.PI/180,dt.length>=3&&($=dt[1],K=dt[2]),H.makeTranslation(-$,-K),B.makeRotation(z),j.multiplyMatrices(B,H),H.makeTranslation($,K),w.multiplyMatrices(H,j)}break;case"scale":if(dt.length>=1){const z=dt[0];let $=z;dt.length>=2&&($=dt[1]),w.scale(z,$)}break;case"skewX":dt.length===1&&w.set(1,Math.tan(dt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":dt.length===1&&w.set(1,0,0,Math.tan(dt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":dt.length===6&&w.set(dt[0],dt[2],dt[4],dt[1],dt[3],dt[5],0,0,1);break}}k.premultiply(w)}}return k}function b(J,k){function w(X){ht.set(X.x,X.y,1).applyMatrix3(k),X.set(ht.x,ht.y)}function R(X){const lt=X.xRadius,_t=X.yRadius,dt=Math.cos(X.aRotation),z=Math.sin(X.aRotation),$=new O(lt*dt,lt*z,0),K=new O(-_t*z,_t*dt,0),rt=$.applyMatrix3(k),E=K.applyMatrix3(k),D=G.set(rt.x,E.x,0,rt.y,E.y,0,0,0,1),at=H.copy(D).invert(),L=B.copy(at).transpose().multiply(at).elements,S=I(L[0],L[1],L[4]),W=Math.sqrt(S.rt1),tt=Math.sqrt(S.rt2);if(X.xRadius=1/W,X.yRadius=1/tt,X.aRotation=Math.atan2(S.sn,S.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const it=H.set(W,0,0,0,tt,0,0,0,1),At=B.set(S.cs,S.sn,0,-S.sn,S.cs,0,0,0,1),vt=it.multiply(At).multiply(D),Ut=Nt=>{const{x:mt,y:yt}=new O(Math.cos(Nt),Math.sin(Nt),0).applyMatrix3(vt);return Math.atan2(yt,mt)};X.aStartAngle=Ut(X.aStartAngle),X.aEndAngle=Ut(X.aEndAngle),P(k)&&(X.aClockwise=!X.aClockwise)}}function F(X){const lt=T(k),_t=N(k);X.xRadius*=lt,X.yRadius*=_t;const dt=lt>Number.EPSILON?Math.atan2(k.elements[1],k.elements[0]):Math.atan2(-k.elements[3],k.elements[4]);X.aRotation+=dt,P(k)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}const nt=J.subPaths;for(let X=0,lt=nt.length;X<lt;X++){const dt=nt[X].curves;for(let z=0;z<dt.length;z++){const $=dt[z];$.isLineCurve?(w($.v1),w($.v2)):$.isCubicBezierCurve?(w($.v0),w($.v1),w($.v2),w($.v3)):$.isQuadraticBezierCurve?(w($.v0),w($.v1),w($.v2)):$.isEllipseCurve&&(ot.set($.aX,$.aY),w(ot),$.aX=ot.x,$.aY=ot.y,x(k)?R($):F($))}}}function P(J){const k=J.elements;return k[0]*k[4]-k[1]*k[3]<0}function x(J){const k=J.elements,w=k[0]*k[3]+k[1]*k[4];if(w===0)return!1;const R=T(J),F=N(J);return Math.abs(w/(R*F))>Number.EPSILON}function T(J){const k=J.elements;return Math.sqrt(k[0]*k[0]+k[1]*k[1])}function N(J){const k=J.elements;return Math.sqrt(k[3]*k[3]+k[4]*k[4])}function I(J,k,w){let R,F,nt,X,lt;const _t=J+w,dt=J-w,z=Math.sqrt(dt*dt+4*k*k);return _t>0?(R=.5*(_t+z),lt=1/R,F=J*lt*w-k*lt*k):_t<0?F=.5*(_t-z):(R=.5*z,F=-.5*z),dt>0?nt=dt+z:nt=dt-z,Math.abs(nt)>2*Math.abs(k)?(lt=-2*k/nt,X=1/Math.sqrt(1+lt*lt),nt=lt*X):Math.abs(k)===0?(nt=1,X=0):(lt=-.5*nt/k,nt=1/Math.sqrt(1+lt*lt),X=lt*nt),dt>0&&(lt=nt,nt=-X,X=lt),{rt1:R,rt2:F,cs:nt,sn:X}}const U=[],V={},Y=[],G=new Xt,H=new Xt,B=new Xt,j=new Xt,ot=new ct,ht=new O,gt=new Xt,Mt=new DOMParser().parseFromString(t,"image/svg+xml");return n(Mt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:U,xml:Mt.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(y,g,p,M){const v=y.x,_=g.x,A=p.x,b=M.x,P=y.y,x=g.y,T=p.y,N=M.y,I=(b-A)*(P-T)-(N-T)*(v-A),U=(_-v)*(P-T)-(x-P)*(v-A),V=(N-T)*(_-v)-(b-A)*(x-P),Y=I/V,G=U/V;if(V===0&&I!==0||Y<=0||Y>=1||G<0||G>1)return null;if(I===0&&V===0){for(let H=0;H<2;H++)if(o(H===0?p:M,y,g),s.loc==n.ORIGIN){const B=H===0?p:M;return{x:B.x,y:B.y,t:s.t}}else if(s.loc==n.BETWEEN){const B=+(v+s.t*(_-v)).toPrecision(10),j=+(P+s.t*(x-P)).toPrecision(10);return{x:B,y:j,t:s.t}}return null}else{for(let j=0;j<2;j++)if(o(j===0?p:M,y,g),s.loc==n.ORIGIN){const ot=j===0?p:M;return{x:ot.x,y:ot.y,t:s.t}}const H=+(v+Y*(_-v)).toPrecision(10),B=+(P+Y*(x-P)).toPrecision(10);return{x:H,y:B,t:Y}}}function o(y,g,p){const M=p.x-g.x,v=p.y-g.y,_=y.x-g.x,A=y.y-g.y,b=M*A-_*v;if(y.x===g.x&&y.y===g.y){s.loc=n.ORIGIN,s.t=0;return}if(y.x===p.x&&y.y===p.y){s.loc=n.DESTINATION,s.t=1;return}if(b<-Number.EPSILON){s.loc=n.LEFT;return}if(b>Number.EPSILON){s.loc=n.RIGHT;return}if(M*_<0||v*A<0){s.loc=n.BEHIND;return}if(Math.sqrt(M*M+v*v)<Math.sqrt(_*_+A*A)){s.loc=n.BEYOND;return}let P;M!==0?P=_/M:P=A/v,s.loc=n.BETWEEN,s.t=P}function a(y,g){const p=[],M=[];for(let v=1;v<y.length;v++){const _=y[v-1],A=y[v];for(let b=1;b<g.length;b++){const P=g[b-1],x=g[b],T=r(_,A,P,x);T!==null&&p.find(N=>N.t<=T.t+Number.EPSILON&&N.t>=T.t-Number.EPSILON)===void 0&&(p.push(T),M.push(new ct(T.x,T.y)))}}return M}function c(y,g,p){const M=new ct;g.getCenter(M);const v=[];return p.forEach(_=>{_.boundingBox.containsPoint(M)&&a(y,_.points).forEach(b=>{v.push({identifier:_.identifier,isCW:_.isCW,point:b})})}),v.sort((_,A)=>_.point.x-A.point.x),v}function l(y,g,p,M,v){(v==null||v==="")&&(v="nonzero");const _=new ct;y.boundingBox.getCenter(_);const A=[new ct(p,_.y),new ct(M,_.y)],b=c(A,y.boundingBox,g);b.sort((U,V)=>U.point.x-V.point.x);const P=[],x=[];b.forEach(U=>{U.identifier===y.identifier?P.push(U):x.push(U)});const T=P[0].point.x,N=[];let I=0;for(;I<x.length&&x[I].point.x<T;)N.length>0&&N[N.length-1]===x[I].identifier?N.pop():N.push(x[I].identifier),I++;if(N.push(y.identifier),v==="evenodd"){const U=N.length%2===0,V=N[N.length-2];return{identifier:y.identifier,isHole:U,for:V}}else if(v==="nonzero"){let U=!0,V=null,Y=null;for(let G=0;G<N.length;G++){const H=N[G];U?(Y=g[H].isCW,U=!1,V=H):Y!==g[H].isCW&&(Y=g[H].isCW,U=!0)}return{identifier:y.identifier,isHole:U,for:V}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let u=999999999,f=-999999999,h=t.subPaths.map(y=>{const g=y.getPoints();let p=-999999999,M=999999999,v=-999999999,_=999999999;for(let A=0;A<g.length;A++){const b=g[A];b.y>p&&(p=b.y),b.y<M&&(M=b.y),b.x>v&&(v=b.x),b.x<_&&(_=b.x)}return f<=v&&(f=v+1),u>=_&&(u=_-1),{curves:y.curves,points:g,isCW:Ei.isClockWise(g),identifier:-1,boundingBox:new mg(new ct(_,M),new ct(v,p))}});h=h.filter(y=>y.points.length>1);for(let y=0;y<h.length;y++)h[y].identifier=y;const d=h.map(y=>l(y,h,u,f,t.userData?t.userData.style.fillRule:void 0)),m=[];return h.forEach(y=>{if(!d[y.identifier].isHole){const p=new Ji;p.curves=y.curves,d.filter(v=>v.isHole&&v.for===y.identifier).forEach(v=>{const _=h[v.identifier],A=new Us;A.curves=_.curves,p.holes.push(A)}),m.push(p)}}),m}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){const r=[],o=[],a=[];if(Ko.pointsToStrokeWithBuffers(t,e,n,s,r,o,a)===0)return null;const c=new be;return c.setAttribute("position",new Qt(r,3)),c.setAttribute("normal",new Qt(o,3)),c.setAttribute("uv",new Qt(a,2)),c}static pointsToStrokeWithBuffers(t,e,n,s,r,o,a,c){const l=new ct,u=new ct,f=new ct,h=new ct,d=new ct,m=new ct,y=new ct,g=new ct,p=new ct,M=new ct,v=new ct,_=new ct,A=new ct,b=new ct,P=new ct,x=new ct,T=new ct;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,t=dt(t);const N=t.length;if(N<2)return 0;const I=t[0].equals(t[N-1]);let U,V=t[0],Y;const G=e.strokeWidth/2,H=1/(N-1);let B=0,j,ot,ht,gt,Mt=!1,Ot=0,J=c*3,k=c*2;w(t[0],t[1],l).multiplyScalar(G),g.copy(t[0]).sub(l),p.copy(t[0]).add(l),M.copy(g),v.copy(p);for(let z=1;z<N;z++){U=t[z],z===N-1?I?Y=t[1]:Y=void 0:Y=t[z+1];const $=l;if(w(V,U,$),f.copy($).multiplyScalar(G),_.copy(U).sub(f),A.copy(U).add(f),j=B+H,ot=!1,Y!==void 0){w(U,Y,u),f.copy(u).multiplyScalar(G),b.copy(U).sub(f),P.copy(U).add(f),ht=!0,f.subVectors(Y,V),$.dot(f)<0&&(ht=!1),z===1&&(Mt=ht),f.subVectors(Y,U),f.normalize();const K=Math.abs($.dot(f));if(K>Number.EPSILON){const rt=G/K;f.multiplyScalar(-rt),h.subVectors(U,V),d.copy(h).setLength(rt).add(f),x.copy(d).negate();const E=d.length(),D=h.length();h.divideScalar(D),m.subVectors(Y,U);const at=m.length();switch(m.divideScalar(at),h.dot(x)<D&&m.dot(x)<at&&(ot=!0),T.copy(d).add(U),x.add(U),gt=!1,ot?ht?(P.copy(x),A.copy(x)):(b.copy(x),_.copy(x)):nt(),e.strokeLineJoin){case"bevel":X(ht,ot,j);break;case"round":lt(ht,ot),ht?F(U,_,b,j,0):F(U,P,A,j,1);break;default:const xt=G*e.strokeMiterLimit/E;if(xt<1)if(e.strokeLineJoin!=="miter-clip"){X(ht,ot,j);break}else lt(ht,ot),ht?(m.subVectors(T,_).multiplyScalar(xt).add(_),y.subVectors(T,b).multiplyScalar(xt).add(b),R(_,j,0),R(m,j,0),R(U,j,.5),R(U,j,.5),R(m,j,0),R(y,j,0),R(U,j,.5),R(y,j,0),R(b,j,0)):(m.subVectors(T,A).multiplyScalar(xt).add(A),y.subVectors(T,P).multiplyScalar(xt).add(P),R(A,j,1),R(m,j,1),R(U,j,.5),R(U,j,.5),R(m,j,1),R(y,j,1),R(U,j,.5),R(y,j,1),R(P,j,1));else ot?(ht?(R(p,B,1),R(g,B,0),R(T,j,0),R(p,B,1),R(T,j,0),R(x,j,1)):(R(p,B,1),R(g,B,0),R(T,j,1),R(g,B,0),R(x,j,0),R(T,j,1)),ht?b.copy(T):P.copy(T)):ht?(R(_,j,0),R(T,j,0),R(U,j,.5),R(U,j,.5),R(T,j,0),R(b,j,0)):(R(A,j,1),R(T,j,1),R(U,j,.5),R(U,j,.5),R(T,j,1),R(P,j,1)),gt=!0;break}}else nt()}else nt();!I&&z===N-1&&_t(t[0],M,v,ht,!0,B),B=j,V=U,g.copy(b),p.copy(P)}if(!I)_t(U,_,A,ht,!1,j);else if(ot&&r){let z=T,$=x;Mt!==ht&&(z=x,$=T),ht?(gt||Mt)&&($.toArray(r,0),$.toArray(r,9),gt&&z.toArray(r,3)):(gt||!Mt)&&($.toArray(r,3),$.toArray(r,9),gt&&z.toArray(r,0))}return Ot;function w(z,$,K){return K.subVectors($,z),K.set(-K.y,K.x).normalize()}function R(z,$,K){r&&(r[J]=z.x,r[J+1]=z.y,r[J+2]=0,o&&(o[J]=0,o[J+1]=0,o[J+2]=1),J+=3,a&&(a[k]=$,a[k+1]=K,k+=2)),Ot+=3}function F(z,$,K,rt,E){l.copy($).sub(z).normalize(),u.copy(K).sub(z).normalize();let D=Math.PI;const at=l.dot(u);Math.abs(at)<1&&(D=Math.abs(Math.acos(at))),D/=n,f.copy($);for(let xt=0,pt=n-1;xt<pt;xt++)h.copy(f).rotateAround(z,D),R(f,rt,E),R(h,rt,E),R(z,rt,.5),f.copy(h);R(h,rt,E),R(K,rt,E),R(z,rt,.5)}function nt(){R(p,B,1),R(g,B,0),R(_,j,0),R(p,B,1),R(_,j,0),R(A,j,1)}function X(z,$,K){$?z?(R(p,B,1),R(g,B,0),R(_,j,0),R(p,B,1),R(_,j,0),R(x,j,1),R(_,K,0),R(b,K,0),R(x,K,.5)):(R(p,B,1),R(g,B,0),R(A,j,1),R(g,B,0),R(x,j,0),R(A,j,1),R(A,K,1),R(x,K,0),R(P,K,1)):z?(R(_,K,0),R(b,K,0),R(U,K,.5)):(R(A,K,1),R(P,K,0),R(U,K,.5))}function lt(z,$){$&&(z?(R(p,B,1),R(g,B,0),R(_,j,0),R(p,B,1),R(_,j,0),R(x,j,1),R(_,B,0),R(U,j,.5),R(x,j,1),R(U,j,.5),R(b,B,0),R(x,j,1)):(R(p,B,1),R(g,B,0),R(A,j,1),R(g,B,0),R(x,j,0),R(A,j,1),R(A,B,1),R(x,j,0),R(U,j,.5),R(U,j,.5),R(x,j,0),R(P,B,1)))}function _t(z,$,K,rt,E,D){switch(e.strokeLineCap){case"round":E?F(z,K,$,D,.5):F(z,$,K,D,.5);break;case"square":if(E)l.subVectors($,z),u.set(l.y,-l.x),f.addVectors(l,u).add(z),h.subVectors(u,l).add(z),rt?(f.toArray(r,3),h.toArray(r,0),h.toArray(r,9)):(f.toArray(r,3),a[7]===1?h.toArray(r,9):f.toArray(r,9),h.toArray(r,0));else{l.subVectors(K,z),u.set(l.y,-l.x),f.addVectors(l,u).add(z),h.subVectors(u,l).add(z);const at=r.length;rt?(f.toArray(r,at-3),h.toArray(r,at-6),h.toArray(r,at-12)):(h.toArray(r,at-6),f.toArray(r,at-3),h.toArray(r,at-12))}break}}function dt(z){let $=!1;for(let rt=1,E=z.length-1;rt<E;rt++)if(z[rt].distanceTo(z[rt+1])<s){$=!0;break}if(!$)return z;const K=[];K.push(z[0]);for(let rt=1,E=z.length-1;rt<E;rt++)z[rt].distanceTo(z[rt+1])>=s&&K.push(z[rt]);return K.push(z[z.length-1]),K}}}function gM(){let i=new $e;const t=new De({color:5343944}),e=new De({color:7779297}),n=new De({color:16768256}),s=new De({color:16777215}),r=new De({color:0}),o=50,l=new Ko().parse('<svg><path d="m 135.55266,65.650453 a 45,45 0 0 0 -48.000001,-15 l -62,20 c 0,0 53,40.000007 94.000001,29.999997 l 3,-0.999997 c 17,-5 23,-21 13,-34 z"/></svg>'),f=Ko.createShapes(l.paths[0])[0],h=.006,d=new Rs(f,{bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:o});d.center();const m=new Kt(d,t);m.position.set(-.05,.16,0),m.scale.set(h,h,h),i.add(m);const y=new Rs(f,{bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:o});y.center();const g=new Kt(y,e);g.position.set(.05,-.16,0),g.rotation.z=Math.PI,g.scale.set(h,h,h),i.add(g);const p=new Ji;p.moveTo(5,0),p.lineTo(-4,6),p.lineTo(-4,-3),p.closePath();const M=o+.8,v=new Rs(p,{bevelEnabled:!1,bevelThickness:.02,bevelSize:.02,bevelSegments:3,depth:M});v.center(),i.rotation.x=Math.PI;let _=new $e;_.add(i);let A=new Nr(.1),b=new Kt(A,s);b.position.set(0,.16,.5*o*h),_.add(b);let P=new Nr(.03),x=new Kt(P,r);x.position.copy(b.position),x.position.z+=.1,_.add(x);let T=b.clone();T.position.z=-T.position.z,_.add(T);let N=x.clone();N.position.z=-N.position.z,_.add(N);let I=new $e,U=.03,V=new os(U,U,.3),Y=new Kt(V,n);Y.position.set(0,-.4,0);let G=new Ji;G.moveTo(-.14,0),G.lineTo(.2,.08),G.lineTo(.2,-.08),G.closePath();let H=new Rs(G,{bevelEnabled:!1,depth:.04}),B=new Kt(H,n);B.rotateX(.5*Math.PI),B.position.set(0,-.51,0),I.add(Y),I.add(B),I.position.set(0,0,.1),_.add(I);let j=I.clone();j.position.z=-j.position.z,_.add(j);const ot=new Kt(v,n);ot.position.set(.375,.14,0),ot.scale.set(h,h,h),_.add(ot);let ht=new $e;return _.rotateY(-.5*Math.PI),_.position.set(0,.55,0),ht.add(_),ht}const _M=/^[og]\s*(.+)?/,xM=/^mtllib /,vM=/^usemtl /,yM=/^usemap /,bh=new O,Qa=new O,Th=new O,wh=new O,un=new O;function MM(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(t,e,n){const s=this.vertices,r=this.object.geometry.normals;bh.fromArray(s,t),Qa.fromArray(s,e),Th.fromArray(s,n),un.subVectors(Th,Qa),wh.subVectors(bh,Qa),un.cross(wh),un.normalize(),r.push(un.x,un.y,un.z),r.push(un.x,un.y,un.z),r.push(un.x,un.y,un.z)},addColor:function(t,e,n){const s=this.colors,r=this.object.geometry.colors;s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(t,e,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,s,r,o,a,c,l){const u=this.vertices.length;let f=this.parseVertexIndex(t,u),h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(n,u);if(this.addVertex(f,h,d),this.addColor(f,h,d),a!==void 0&&a!==""){const m=this.normals.length;f=this.parseNormalIndex(a,m),h=this.parseNormalIndex(c,m),d=this.parseNormalIndex(l,m),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(s!==void 0&&s!==""){const m=this.uvs.length;f=this.parseUVIndex(s,m),h=this.parseUVIndex(r,m),d=this.parseUVIndex(o,m),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,s=t.length;n<s;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,o=t.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,o=e.length;r<o;r++)this.addUVLine(this.parseUVIndex(e[r],s))}};return i.startObject("",!1),i}class SM extends ra{constructor(t){super(t),this.materials=null}load(t,e,n,s){const r=this,o=new Nf(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}setMaterials(t){return this.materials=t,this}parse(t){const e=new MM;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let s="",r="",o=0,a=[];const c=typeof"".trimLeft=="function";for(let f=0,h=n.length;f<h;f++)if(s=n[f],s=c?s.trimLeft():s.trim(),o=s.length,o!==0&&(r=s.charAt(0),r!=="#"))if(r==="v"){const d=s.split(/\s+/);switch(d[0]){case"v":e.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?e.colors.push(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":e.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(r==="f"){const m=s.substr(1).trim().split(/\s+/),y=[];for(let p=0,M=m.length;p<M;p++){const v=m[p];if(v.length>0){const _=v.split("/");y.push(_)}}const g=y[0];for(let p=1,M=y.length-1;p<M;p++){const v=y[p],_=y[p+1];e.addFace(g[0],v[0],_[0],g[1],v[1],_[1],g[2],v[2],_[2])}}else if(r==="l"){const d=s.substring(1).trim().split(" ");let m=[];const y=[];if(s.indexOf("/")===-1)m=d;else for(let g=0,p=d.length;g<p;g++){const M=d[g].split("/");M[0]!==""&&m.push(M[0]),M[1]!==""&&y.push(M[1])}e.addLineGeometry(m,y)}else if(r==="p"){const m=s.substr(1).trim().split(" ");e.addPointGeometry(m)}else if((a=_M.exec(s))!==null){const d=(" "+a[0].substr(1).trim()).substr(1);e.startObject(d)}else if(vM.test(s))e.object.startMaterial(s.substring(7).trim(),e.materialLibraries);else if(xM.test(s))e.materialLibraries.push(s.substring(7).trim());else if(yM.test(s))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(r==="s"){if(a=s.split(" "),a.length>1){const m=a[1].trim().toLowerCase();e.object.smooth=m!=="0"&&m!=="off"}else e.object.smooth=!0;const d=e.object.currentMaterial();d&&(d.smooth=e.object.smooth)}else{if(s==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+s+'"')}e.finalize();const l=new $e;if(l.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let f=0,h=e.objects.length;f<h;f++){const d=e.objects[f],m=d.geometry,y=d.materials,g=m.type==="Line",p=m.type==="Points";let M=!1;if(m.vertices.length===0)continue;const v=new be;v.setAttribute("position",new Qt(m.vertices,3)),m.normals.length>0&&v.setAttribute("normal",new Qt(m.normals,3)),m.colors.length>0&&(M=!0,v.setAttribute("color",new Qt(m.colors,3))),m.hasUVIndices===!0&&v.setAttribute("uv",new Qt(m.uvs,2));const _=[];for(let b=0,P=y.length;b<P;b++){const x=y[b],T=x.name+"_"+x.smooth+"_"+M;let N=e.materials[T];if(this.materials!==null){if(N=this.materials.create(x.name),g&&N&&!(N instanceof No)){const I=new No;Rn.prototype.copy.call(I,N),I.color.copy(N.color),N=I}else if(p&&N&&!(N instanceof rr)){const I=new rr({size:10,sizeAttenuation:!1});Rn.prototype.copy.call(I,N),I.color.copy(N.color),I.map=N.map,N=I}}N===void 0&&(g?N=new No:p?N=new rr({size:1,sizeAttenuation:!1}):N=new ig,N.name=x.name,N.flatShading=!x.smooth,N.vertexColors=M,e.materials[T]=N),_.push(N)}let A;if(_.length>1){for(let b=0,P=y.length;b<P;b++){const x=y[b];v.addGroup(x.groupStart,x.groupCount,b)}g?A=new Uu(v,_):p?A=new ka(v,_):A=new Kt(v,_)}else g?A=new Uu(v,_[0]):p?A=new ka(v,_[0]):A=new Kt(v,_[0]);A.name=d.name,l.add(A)}else if(e.vertices.length>0){const f=new rr({size:1,sizeAttenuation:!1}),h=new be;h.setAttribute("position",new Qt(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(h.setAttribute("color",new Qt(e.colors,3)),f.vertexColors=!0);const d=new ka(h,f);l.add(d)}return l}}const ti=.95,ei=.95,lr=.25,lc=.15,$f=.1;function EM(i){let{ecs:t,entityId:e,turnAmount:n,actionDown:s,driftDown:r}=i;const o=20,a=36,c=2,l=6,u=3,f=.98,h=.96,d=.92,m=[new O(-ti,lr,ei),new O(ti,lr,ei),new O(-ti,lr,-ei),new O(ti,lr,-ei)];let y=0,g=!1;return{update(p){t.resource(jf).get("y");const v=t.entity(e).getField(Ke,"x"),_=t.entity(e).getField(Ke,"y"),A=t.entity(e).getField(Ke,"z"),b=t.entity(e).getField(Gi,"x"),P=t.entity(e).getField(Gi,"y"),x=t.entity(e).getField(Gi,"z"),T=t.entity(e).getField(Le,"x"),N=t.entity(e).getField(Le,"y"),I=t.entity(e).getField(Le,"z"),U=t.entity(e).getField(Le,"w"),V=t.entity(e).getField(ac,"speed"),Y=new O(v,_,A),G=new O(b,P,x),H=new kn(T,N,I,U);let B=new O(0,0,1).applyQuaternion(H);B.y=0,B.normalize();let j=new O(1,0,0).applyQuaternion(H);j.y=0,j.normalize();const ot=Math.sqrt(G.x*G.x+G.z*G.z);let ht=o;y>0&&(ht=a);let gt=V;s()?gt=Math.min(V+c*p,ht):gt=Math.max(V-l*p,0),t.set_field(e,ac,"speed",gt);let Mt=-n()*u*p,Ot=0;n()<-.1?Ot=-1:n()>.1&&(Ot=1);const J=r()&&Ot!==0&&ot>3;if(J&&!g?(g=!0,y=0):!J&&g&&(y>1.5&&(gt=Math.min(gt*1.5,a)),g=!1,y=0),g){y+=p;const tt=Mt*2.5,ft=new kn().setFromAxisAngle(new O(0,1,0),tt);H.multiply(ft)}else if(ot>.1){const tt=Mt*(gt/o),ft=new kn().setFromAxisAngle(new O(0,1,0),tt);H.multiply(ft)}H.normalize();const k=new O(0,0,1).applyQuaternion(H);k.y=0,k.normalize();let w=k.multiplyScalar(gt);const R=g?h:f,F=k.clone().multiplyScalar(G.dot(k)),nt=G.clone().sub(F).multiplyScalar(d);let X=F.add(nt);const lt=X.length()>.01?R:1;X.multiplyScalar(lt),X.x+=(w.x-X.x)*(1-R)*p*10,X.z+=(w.z-X.z)*(1-R)*p*10;const _t=g&&y>1.5?a:o,dt=Math.sqrt(X.x*X.x+X.z*X.z);if(dt>_t){const tt=_t/dt;X.x*=tt,X.z*=tt}let z=Y.add(X.clone().multiplyScalar(p));const $=py();if($){const tt=Ur/2,ft=my(z.x,z.z),it=tt;if(ft>it&&ft<50&&Number.isFinite(z.x)&&Number.isFinite(z.z)){let vt=0,Ut=0,Nt=1/0;for(let Lt=0;Lt<=100;Lt++){const wt=Lt/100,Wt=$.getPointAt(wt),q=Wt.x-z.x,bt=Wt.z-z.z,Et=Math.sqrt(q*q+bt*bt);Et<Nt&&(Nt=Et,vt=Wt.x,Ut=Wt.z)}const mt=(z.x-vt)/Nt,yt=(z.z-Ut)/Nt,Pt=ft-it;z.x-=mt*Pt,z.z-=yt*Pt}}let K=[];for(let tt=0;tt<4;tt++){const ft=m[tt].clone();ft.applyQuaternion(H);const it=new O(z.x,z.y,z.z).add(ft);let At=is(it.x,it.z);if($){let Nt=1/0,mt=0;for(let Pt=0;Pt<100;Pt++){const Lt=Pt/100,wt=$.getPointAt(Lt),Wt=wt.x-it.x,q=wt.z-it.z,bt=Math.sqrt(Wt*Wt+q*q);bt<Nt&&(Nt=bt,mt=wt.y)}const yt=Ur/2+3;if(Nt<yt){const Pt=Math.max(0,1-Nt/yt);At=At*(1-Pt)+(mt-.15)*Pt}}const vt=At+$f+lc;K.push(vt)}const rt=Math.min(...K);z.y=rt+lc;const E=(K[0]+K[1])/2,D=(K[2]+K[3])/2,at=(K[0]+K[2])/2,xt=(K[1]+K[3])/2,pt=Math.atan2(D-E,ei*2),L=Math.atan2(xt-at,ti*2),S=new gn().setFromQuaternion(H,"YXZ"),W=Math.min(1,p*8);S.x=gu.lerp(S.x,pt,W),S.z=gu.lerp(S.z,L,W),H.setFromEuler(S),t.set_field(e,Le,"x",H.x),t.set_field(e,Le,"y",H.y),t.set_field(e,Le,"z",H.z),t.set_field(e,Le,"w",H.w),t.set_field(e,Gi,"x",X.x),t.set_field(e,Gi,"y",X.y),t.set_field(e,Gi,"z",X.z),t.set_field(e,Ke,"x",z.x),t.set_field(e,Ke,"y",z.y),t.set_field(e,Ke,"z",z.z)}}}async function bM(){const i=new SM;try{const t=await fetch("./models/kart.obj");if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=await t.text(),n=i.parse(e);n.traverse(p=>{if(p instanceof Kt&&(p.castShadow=!0,p.receiveShadow=!0,p.material instanceof Rn)){const M=p.material;if(M.name?.includes("Blue"))M.color.setHex(3829413),M.roughness=.5,M.metalness=.2;else if(M.name?.includes("Grey")){const v=M.name.match(/Grey_-_(\d+)/);if(v){const _=parseInt(v[1])/100;M.color.setRGB(_,_,_)}M.roughness=.7,M.metalness=.3}}});const s=new qs().setFromObject(n),r=new O;s.getSize(r);const c=1.5/Math.max(r.x,r.y,r.z);n.scale.setScalar(c);let l=new $e;s.setFromObject(n),n.rotateY(.5*Math.PI),n.position.set(0,-s.min.y,0),l.add(n);const u=(lr-lc)*c,f=new Nr($f*.5,8,8),h=new Pc({color:16711680}),d=new Kt(f,h);d.position.set(-ti*c,u,ei*c),l.add(d);const m=new Kt(f,h);m.position.set(ti*c,u,ei*c),l.add(m);const y=new Kt(f,h);y.position.set(-ti*c,u,-ei*c),l.add(y);const g=new Kt(f,h);return g.position.set(ti*c,u,-ei*c),l.add(g),l}catch(t){throw console.error("Failed to load kart:",t),t}}function TM(i,t){return fc(e=>(ri(Wd(ri(()=>{let n=[];for(let s of i.query(Ke,Le,Oo)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)n.push(r[o])}return n}),n=>{let s=i.entity(n());s.getField(Oo,"playerType"),s.getField(Oo,"facingForward");const r=new $e;Kh(async()=>await bM(),a=>{r.add(a)});const o=gM();o.position.set(0,.32,0),o.scale.setScalar(.5),r.add(o),t.add(r),na(()=>{t.remove(r)}),ri(()=>{let a=s.getField(Ke,"x"),c=s.getField(Ke,"y"),l=s.getField(Ke,"z"),u=s.getField(Le,"x"),f=s.getField(Le,"y"),h=s.getField(Le,"z"),d=s.getField(Le,"w");r.position.set(a,c,l),r.quaternion.set(u,f,h,d)})})),{update:()=>{},dispose:e}))}var wM=mc('<div style=position:absolute;user-select:none;touch-action:none><div style="position:absolute;transform:translate(-50%, -50%);border-radius:50%;border:5px solid rgba(255,255,255,0.5);box-sizing:content-box"><div style=position:absolute;transform:translate(-50%,-50%);border-radius:50%;background-color:rgba(255,255,255,0.5)>');function AM(i){let t=_e(i.position()),e=_e(typeof i.hitAreaSize=="function"?i.hitAreaSize():i.hitAreaSize),n=_e(i.outerRingSize()),s=_e(i.knobSize()),r=_e();As(()=>i.position(),c=>{t[1](c)}),As(()=>typeof i.hitAreaSize=="function"?i.hitAreaSize():i.hitAreaSize,c=>{e[1](c)}),As(()=>i.outerRingSize(),c=>{n[1](c)}),As(()=>i.knobSize(),c=>{s[1](c)});let o=ri(()=>{let c=r[0]();return c==null?new ct:new ct().copy(c).multiplyScalar(1/n[0]())});return{position:t,hitAreaSize:e,outerRingSize:n,knobSize:s,dragOffset:r,value:o,UI:()=>{let[c,l]=_e(!1),[u,f]=_e(),[h,d]=r,[m,y]=_e(),g,p=_=>{let A=m();if(A==null)return;g=_.pointerId,A.setPointerCapture(g);let b=A.getBoundingClientRect();f(new ct(_.clientX-b.left,_.clientY-b.top)),d(new ct)},M=_=>{let A=m();if(A==null)return;let b=u();if(b==null)return;A.setPointerCapture(_.pointerId);let P=A.getBoundingClientRect(),x=new ct(_.clientX-P.left-b.x,_.clientY-P.top-b.y),T=x.length();T>.5*n[0]()&&x.multiplyScalar(.5*n[0]()/T),d(x)},v=_=>{m()!=null&&g!=null&&(f(void 0),d(void 0))};return(()=>{var _=wM(),A=_.firstChild,b=A.firstChild;_.$$contextmenu=x=>x.preventDefault(),_.$$pointerup=v,_.$$pointermove=M,_.$$pointerdown=p;var P=y;return typeof P=="function"||Array.isArray(P)?ul(()=>P,_):y=_,ia(()=>({e:`${t[0]().x}px`,t:`${t[0]().y}px`,a:`${e[0]()}px`,o:`${e[0]()}px`,i:`${u()?.x??.5*e[0]()}px`,n:`${u()?.y??.5*e[0]()}px`,s:`${n[0]()}px`,h:`${n[0]()}px`,r:`calc(50% + ${h()?.x??0}px)`,d:`calc(50% + ${h()?.y??0}px)`,l:`${s[0]()}px`,u:`${s[0]()}px`}),({e:x,t:T,a:N,o:I,i:U,n:V,s:Y,h:G,r:H,d:B,l:j,u:ot},ht={e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0})=>{x!==ht.e&&Pe(_,"left",x),T!==ht.t&&Pe(_,"top",T),N!==ht.a&&Pe(_,"width",N),I!==ht.o&&Pe(_,"height",I),U!==ht.i&&Pe(A,"left",U),V!==ht.n&&Pe(A,"top",V),Y!==ht.s&&Pe(A,"width",Y),G!==ht.h&&Pe(A,"height",G),H!==ht.r&&Pe(b,"left",H),B!==ht.d&&Pe(b,"top",B),j!==ht.l&&Pe(b,"width",j),ot!==ht.u&&Pe(b,"height",ot)}),_})()}}}Jh(["pointerdown","pointermove","pointerup","contextmenu"]);var RM=mc("<div style=position:absolute;user-select:none;touch-action:none>");const CM=1;function PM(i){const[t,e]=_e(!1),[n,s]=_e(0),[r,o]=_e(!1),[a,c]=_e(0),[l,u]=_e(!1),f=i.externalPressed||(()=>!1);let h,d=!1;const m=()=>{h||(h=window.setInterval(()=>{c(b=>b+1)},50))},y=()=>{h&&(clearInterval(h),h=void 0)};na(()=>y()),requestAnimationFrame(function b(){const P=f();P&&!d&&(s(performance.now()),m()),!P&&d&&u(!0),d=P,requestAnimationFrame(b)});const g=()=>t()||f(),p=ri(()=>{a();const b=g(),P=n();if(!b)return 0;const x=(performance.now()-P)/1e3;return Math.min(x/CM,1)}),M=b=>{b.currentTarget.setPointerCapture(b.pointerId),e(!0),s(performance.now()),m()},v=b=>{e(!1),y(),o(!0)},_=b=>{t()&&(e(!1),y(),o(!0))},A=()=>(()=>{var b=RM();return b.$$contextmenu=P=>P.preventDefault(),b.addEventListener("pointerleave",_),b.$$pointerup=v,b.$$pointerdown=M,ia(()=>({e:`${i.position().x}px`,t:`${i.position().y}px`,a:`${i.size()}px`,o:`${i.size()}px`,i:`${.5*i.size()}px`,n:g()?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.5)"}),({e:P,t:x,a:T,o:N,i:I,n:U},V={e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0})=>{P!==V.e&&Pe(b,"left",P),x!==V.t&&Pe(b,"top",x),T!==V.a&&Pe(b,"width",T),N!==V.o&&Pe(b,"height",N),I!==V.i&&Pe(b,"border-radius",I),U!==V.n&&Pe(b,"background-color",U)}),b})();return{position:i.position,size:i.size,pressed:g,power:p,justReleased:()=>r()?(o(!1),!0):!1,justReleasedExternal:()=>l()?(u(!1),!0):!1,UI:A}}Jh(["pointerdown","pointerup","contextmenu"]);var LM=mc("<div style=width:100%;height:100%><canvas style=width:100%;height:100%;display:block;touch-action:none></canvas><div style=position:absolute;top:10px;left:10px;z-index:100><label style=color:white;font-family:sans-serif;font-size:14px><input type=checkbox> Orbit Camera");function IM(i){const t=new $e,e=new os(.15,.2,i*.4,6),n=new De({color:4863784,roughness:.9}),s=new Kt(e,n);s.position.y=i*.2,s.castShadow=!0,t.add(s);const r=new Vr(i*.4,i*.7,6),o=new De({color:2972199,roughness:.8}),a=new Kt(r,o);return a.position.y=i*.6,a.castShadow=!0,t.add(a),t}function DM(i,t,e){const n=new $e,s=new rs(i,t,e),r=[9140069,10518640,10259580,8022618],o=new De({color:r[Math.floor(Math.random()*r.length)],roughness:.7}),a=new Kt(s,o);a.position.y=t/2,a.castShadow=!0,a.receiveShadow=!0,n.add(a);const c=new Vr(Math.max(i,e)*.7,t*.3,4),l=new De({color:5917242,roughness:.8}),u=new Kt(c,l);return u.position.y=t+t*.15,u.rotation.y=Math.PI/4,u.castShadow=!0,n.add(u),n}function NM(i,t){const e=Zf(i,18),n=i.getSpacedPoints(200),s=40,r=15,o=25,a=18,c=l=>{const u=Math.sin(l*7919)*1e4;return u-Math.floor(u)};for(let l=0;l<s+r;l++){let u,f,h,d=0;do{u=(c(l*2)-.5)*a*2+e.centerX,f=(c(l*2+1)-.5)*a*2+e.centerZ,h=1/0;for(const y of n){const g=Math.sqrt((y.x-u)**2+(y.z-f)**2);g<h&&(h=g)}d++}while(h<o&&d<20);if(h<o)continue;const m=is(u,f);if(l<s){const y=IM(1.5+c(l*7)*2);y.position.set(u,m,f),t.add(y)}else{const y=1+c(l*3)*2,g=1.5+c(l*4)*3,p=1+c(l*5)*2,M=DM(y,g,p);M.position.set(u,m,f),t.add(M)}}}function Zf(i,t){const e=i.getSpacedPoints(200);let n=1/0,s=-1/0,r=1/0,o=-1/0;for(const u of e)n=Math.min(n,u.x),s=Math.max(s,u.x),r=Math.min(r,u.z),o=Math.max(o,u.z);const a=(n+s)/2,c=(r+o)/2,l=Math.max(s-n,o-r)/2+t+5;return{centerX:a,centerZ:c,size:l*2}}function UM(i){const t=Zf(i,18),e=t.size,n=80,s=[],r=[],o=[],a=200,c=i.getSpacedPoints(a),l=e/2;for(let h=0;h<=n;h++)for(let d=0;d<=n;d++){const m=t.centerX-l+d/n*e,y=t.centerZ-l+h/n*e;let g=1/0,p=0;for(let v=0;v<a;v++){const _=c[v].x-m,A=c[v].z-y,b=Math.sqrt(_*_+A*A);b<g&&(g=b,p=c[v].y)}const M=is(m,y,g<Ur/2+3?p:void 0);s.push(m,M,y),o.push(d/n*4,h/n*4)}for(let h=0;h<n;h++)for(let d=0;d<n;d++){const m=h*(n+1)+d,y=m+1,g=(h+1)*(n+1)+d,p=g+1;r.push(y,m,p),r.push(g,p,m)}const u=new be;u.setAttribute("position",new Qt(s,3)),u.setAttribute("uv",new Qt(o,2)),u.setIndex(r),u.computeVertexNormals();const f=new De({color:4881471,roughness:.9,flatShading:!0});return{mesh:new Kt(u,f),bounds:t}}let[tl,FM]=_e(),[Hi,Kf]=_e(!1),[HM,Jf]=_e(!1),[WM,Qf]=_e(!1),[OM,td]=_e(!1),[BM,ed]=_e(!1),[zM,Bc]=_e(!1),[kM,nd]=_e(!1);function VM(i,t,e){const n=new cm;n.background=new Jt(6006985);const s=new fg(16777215,.7);n.add(s);const r=new hg(16777215,1);r.position.set(20,50,20),r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,n.add(r);const o=hy(42),a=dy(18,30,42);a.position.set(0,0,0),n.add(a);const c=gy(o,0);n.add(c);const{mesh:l,bounds:u}=UM(o),f=u.size/2;r.shadow.camera.left=u.centerX-f,r.shadow.camera.right=u.centerX+f,r.shadow.camera.top=u.centerZ+f,r.shadow.camera.bottom=u.centerZ-f,l.receiveShadow=!0,n.add(l),NM(o,n);const{ecs:h}=dM(),d=.01,m=o.getPointAt(d),y=d+.01,g=o.getPointAt(y);new O().subVectors(g,m).normalize();const p=new O(0,0,0),M=is(m.x,m.z)+.3;m.y=M;const v=pM({position:m,velocity:p,reactiveEcs:h}),{dispose:_}=TM(h,n),A=ri(()=>{const F=e().x;return Math.abs(F)>.01?F*2:OM()?-1:BM()?1:0}),{update:b}=EM({ecs:h,entityId:v,turnAmount:A,actionDown:zM,driftDown:kM}),P=new cy({antialias:!0,canvas:t});P.shadowMap.enabled=!0,P.shadowMap.type=Qh;const x=new fn(75,1,.1,1e3);let T=0,N=.5,I=5,U=!1,V=0,Y=0,G=0;t.addEventListener("pointerdown",F=>{U=!0,V=F.clientX,Y=F.clientY,t.setPointerCapture(F.pointerId)}),t.addEventListener("pointermove",F=>{if(!U||!Hi())return;const nt=F.clientX-V,X=F.clientY-Y;T-=nt*.01,N=Math.max(.1,Math.min(Math.PI/2-.1,N+X*.01)),V=F.clientX,Y=F.clientY}),t.addEventListener("pointerup",F=>{U=!1}),t.addEventListener("pointercancel",()=>{U=!1}),t.addEventListener("contextmenu",F=>F.preventDefault());let H=!1;t.addEventListener("touchstart",F=>{F.touches.length===1&&(H=!0,V=F.touches[0].clientX,Y=F.touches[0].clientY)},{passive:!1}),t.addEventListener("touchmove",F=>{if(Hi()&&(F.preventDefault(),F.touches.length===1&&H)){const nt=F.touches[0].clientX-V,X=F.touches[0].clientY-Y;T-=nt*.01,N=Math.max(.1,Math.min(Math.PI/2-.1,N+X*.01)),V=F.touches[0].clientX,Y=F.touches[0].clientY}},{passive:!1}),t.addEventListener("touchend",F=>{H=!1}),t.addEventListener("touchstart",F=>{if(F.touches.length===2){const nt=F.touches[0].clientX-F.touches[1].clientX,X=F.touches[0].clientY-F.touches[1].clientY;G=Math.sqrt(nt*nt+X*X)}}),t.addEventListener("touchmove",F=>{if(!Hi()||F.touches.length!==2)return;F.preventDefault();const nt=F.touches[0].clientX-F.touches[1].clientX,X=F.touches[0].clientY-F.touches[1].clientY,lt=Math.sqrt(nt*nt+X*X);I=Math.max(1,Math.min(20,I-(lt-G)*.02)),G=lt},{passive:!1}),t.addEventListener("wheel",F=>{Hi()&&(I=Math.max(1,Math.min(20,I+F.deltaY*.01)))}),window.addEventListener("keydown",F=>{(F.key==="o"||F.key==="O")&&Kf(!Hi())});let B=new ResizeObserver(()=>{let F=i.getBoundingClientRect();FM(new ct(F.width,F.height)),P.setSize(F.width,F.height),x.aspect=F.width/F.height,x.updateProjectionMatrix(),P.render(n,x)});B.observe(i),na(()=>{B.unobserve(i),B.disconnect()});const j=3,ot=6;let ht=0,gt=new O,Mt=new O;const Ot=12;let J=!0,k=performance.now(),w=!0;const R=()=>{if(!J)return;const F=performance.now(),nt=Math.min((F-k)/1e3,.1);k=F;const X=h.entity(v).getField(Ke,"x"),lt=h.entity(v).getField(Ke,"y"),_t=h.entity(v).getField(Ke,"z"),dt=new O(X,lt,_t),z=h.entity(v).getField(Le,"x"),$=h.entity(v).getField(Le,"y"),K=h.entity(v).getField(Le,"z"),rt=h.entity(v).getField(Le,"w"),E=new kn(z,$,K,rt),D=new O(0,0,1).applyQuaternion(E);D.y=0;let at=0;if(D.length()>.001&&(D.normalize(),at=Math.atan2(D.x,D.z)),b(nt),w&&(w=!1,gt.copy(dt),Mt.copy(dt),ht=at),Hi()){const xt=at+T,pt=dt;x.position.set(pt.x+I*Math.sin(xt)*Math.cos(N),pt.y+I*Math.sin(N),pt.z+I*Math.cos(xt)*Math.cos(N)),x.lookAt(pt)}else{let xt=at-ht;for(;xt>Math.PI;)xt-=Math.PI*2;for(;xt<-Math.PI;)xt+=Math.PI*2;ht+=xt*Math.min(1,Ot*nt);const pt=new O(-Math.sin(ht)*ot,j,-Math.cos(ht)*ot),L=dt.clone().add(pt),S=dt.clone().add(new O(Math.sin(ht)*2,.3,Math.cos(ht)*2));gt.lerp(L,1-Math.exp(-Ot*nt*3)),Mt.lerp(S,1-Math.exp(-Ot*nt*3)),x.position.copy(gt),x.lookAt(Mt)}P.render(n,x),requestAnimationFrame(R)};return R(),()=>{J=!1,_(),P.dispose()}}function GM(){let[i,t]=_e(),[e,n]=_e(),s=150,r=AM({position:ri(()=>new ct(50,(tl()?.y??0)-50-s)),hitAreaSize:s,outerRingSize:()=>.8*s,knobSize:()=>70}),o=100,a=PM({position:ri(()=>new ct((tl()?.x??0)-50-o,(tl()?.y??0)-50-o)),size:()=>o});return As(()=>a.pressed(),c=>{Bc(c)}),As(()=>[i(),e()],([c,l])=>{c!=null&&l!==void 0&&fc(u=>(VM(c,l,r.value),u))}),(()=>{var c=LM(),l=c.firstChild,u=l.nextSibling,f=u.firstChild,h=f.firstChild,d=t;typeof d=="function"||Array.isArray(d)?ul(()=>d,c):t=c;var m=n;return typeof m=="function"||Array.isArray(m)?ul(()=>m,l):n=l,h.addEventListener("change",y=>Kf(y.target.checked)),hl(c,cl(r.UI,{}),null),hl(c,cl(a.UI,{}),null),ia(Hi,y=>{h.checked=y}),c})()}const Ah=document.getElementById("root");Ah&&Jd(()=>cl(GM,{}),Ah);document.addEventListener("keydown",i=>{switch(i.key){case"ArrowUp":Jf(!0);break;case"ArrowDown":Qf(!0);break;case"ArrowLeft":td(!0);break;case"ArrowRight":ed(!0);break;case" ":Bc(!0);break;case"z":case"Z":nd(!0);break}});document.addEventListener("keyup",i=>{switch(i.key){case"ArrowUp":Jf(!1);break;case"ArrowDown":Qf(!1);break;case"ArrowLeft":td(!1);break;case"ArrowRight":ed(!1);break;case" ":Bc(!1);break;case"z":case"Z":nd(!1);break}});
