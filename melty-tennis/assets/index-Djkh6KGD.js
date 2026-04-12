(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Un extends Error{source;constructor(e){super(),this.source=e}}class Pa extends Error{source;constructor(e,t){super(t instanceof Error?t.message:String(t),{cause:t}),this.source=e}}const Dl=0,sr=1,Ls=2,wo=4,vi=8,ho=16,Mi=32,fo=64,cr=128,Il=256,Da=512,Nt=1,dn=2,ei=4,As=1,yi=2,Ll=3,xt={},xf={},vf="sp",Wu={},yf=Symbol("refresh");function Xu(n,e){const t=(n.i?.t?n.i.u?.o:n.i?.o)??-1;t>=n.o&&(n.o=t+1);const i=n.o,s=e.l[i];if(s===void 0)e.l[i]=n;else{const r=s.T;r.S=n,n.T=r,s.T=n}i>e.R&&(e.R=i)}function qu(n,e){let t=n.O;t&(vi|wo)||(t&sr?n.O=t&-4|Ls|vi:n.O=t|vi,t&ho||Xu(n,e))}function Yu(n,e){let t=n.O;t&(vi|wo|ho)||(n.O=t|ho,Xu(n,e))}function vr(n,e){const t=n.O;if(!(t&(vi|ho)))return;n.O=t&-25;const i=n.o;if(n.T===n)e.l[i]=void 0;else{const s=n.S,r=e.l[i],o=s??r;n===r?e.l[i]=s:n.T.S=s,o.T=n.T}n.T=n,n.S=void 0}function Sf(n){if(!n._){n._=!0;for(let e=0;e<=n.R;e++)for(let t=n.l[e];t!==void 0;t=t.S)t.O&vi&&po(t)}}function po(n,e=Ls){const t=n.O;if(!((t&(sr|Ls))>=e)){n.O=t&-4|e;for(let i=n.I;i!==null;i=i.p)po(i.h,sr);if(n.A!==null)for(let i=n.A;i!==null;i=i.N)for(let s=i.I;s!==null;s=s.p)po(s.h,sr)}}function to(n,e){for(n._=!1,n.P=0;n.P<=n.R;n.P++){let t=n.l[n.P];for(;t!==void 0;)t.O&vi?e(t):Mf(t,n),t=n.l[n.P]}n.R=0}function Mf(n,e){vr(n,e);let t=n.o;for(let i=n.C;i;i=i.D){const s=i.m,r=s.V||s;r.L&&r.o>=t&&(t=r.o+1)}if(n.o!==t){n.o=t;for(let i=n.I;i!==null;i=i.p)Yu(i.h,e)}}const Ar=new Set,Wt={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0},zn={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0};let Bt=0,Pe=null,ur=!1,hr=!1;function wr(n){for(const e of Ei){if(e.k||e.U.size>0)continue;const t=e.W[n-1];t.length&&(e.W[n-1]=[],mo(t,n))}}function ss(n){hr=n}function Qi(){ur||(ur=!0,!Mt.H&&!hr&&queueMicrotask(Ia))}class Ef{i=null;G=[[],[]];F=[];created=Bt;addChild(e){this.F.push(e),e.i=this}removeChild(e){const t=this.F.indexOf(e);t>=0&&(this.F.splice(t,1),e.i=null)}notify(e,t,i,s){return this.i?this.i.notify(e,t,i,s):!1}run(e){if(this.G[e-1].length){const t=this.G[e-1];this.G[e-1]=[],mo(t,e)}for(let t=0;t<this.F.length;t++)this.F[t].run?.(e)}enqueue(e,t){e&&(Sn?jt(Sn).W[e-1].push(t):this.G[e-1].push(t)),Qi()}stashQueues(e){e.G[0].push(...this.G[0]),e.G[1].push(...this.G[1]),this.G=[[],[]];for(let t=0;t<this.F.length;t++){let i=this.F[t],s=e.F[t];s||(s={G:[[],[]],F:[]},e.F[t]=s),i.stashQueues(s)}}restoreQueues(e){this.G[0].push(...e.G[0]),this.G[1].push(...e.G[1]);for(let t=0;t<e.F.length;t++){const i=e.F[t];let s=this.F[t];s&&s.restoreQueues(i)}}}class ti extends Ef{H=!1;M=[];$=[];j=new Set;static K;static Y;static B=null;flush(){if(!this.H){this.H=!0;try{if(to(Wt,ti.K),Pe){if(!bf(Pe)){let i=Pe;to(zn,ti.K),this.M=[],this.$=[],this.j=new Set,wr(As),wr(yi),this.stashQueues(Pe.Z),Bt++,ur=Wt.R>=Wt.P,fc(Pe.M),Pe=null,Fo(null,!0);return}this.M!==Pe.M&&this.M.push(...Pe.M),this.restoreQueues(Pe.Z),Ar.delete(Pe);const t=Pe;Pe=null,fc(this.M),Fo(t)}else Ar.size&&to(zn,ti.K),Fo();Bt++,ur=Wt.R>=Wt.P,wr(As),this.run(As),wr(yi),this.run(yi)}finally{this.H=!1}}}notify(e,t,i,s){if(t&Nt){if(i&Nt){const r=s!==void 0?s:e.q;Pe&&r&&!Pe.X.includes(r.source)&&(Pe.X.push(r.source),Qi())}return!0}return!1}initTransition(e){if(e&&(e=ju(e)),!(e&&e===Pe)&&!(!e&&Pe&&Pe.J===Bt)){if(!Pe)Pe=e??{J:Bt,M:[],X:[],$:[],j:new Set,ee:[],Z:{G:[[],[]],F:[]},te:!1};else if(e){const t=Pe;t.te=e,e.ee.push(...t.ee);for(const i of Ei)i.ne===t&&(i.ne=e);e.$.push(...t.$);for(const i of t.j)e.j.add(i);Ar.delete(t),Pe=e}Ar.add(Pe),Pe.J=Bt;for(let t=0;t<this.M.length;t++){const i=this.M[t];i.ne=Pe,Pe.M.push(i)}this.M=Pe.M;for(let t=0;t<this.$.length;t++){const i=this.$[t];i.ne=Pe,Pe.$.push(i)}this.$=Pe.$;for(const t of Ei)t.ne||(t.ne=Pe);for(const t of this.j)Pe.j.add(t);this.j=Pe.j}}}function Us(n,e=!1){const t=n.ie||Sn,i=n.re!==void 0;for(let s=n.I;s!==null;s=s.p){if(i&&s.h.oe){s.h.O|=Il;continue}e&&t?(s.h.O|=cr,Ku(s.h,t)):e&&(s.h.O|=cr,s.h.ie=void 0);const r=s.h;if(r.se===Ll){r.ue||(r.ue=!0,r.ce.enqueue(yi,r.ae));continue}const o=s.h.O&Mi?zn:Wt;o.P>s.h.o&&(o.P=s.h.o),qu(s.h,o)}}function uc(){const n=Mt.M;for(let e=0;e<n.length;e++){const t=n[e];if(t.le!==xt&&(t.fe=t.le,t.le=xt,t.se&&t.se!==Ll&&(t.ue=!0)),t.Ee&Nt){const i=t.q?.source;i&&!(i.Ee&Nt)&&(t.Ee&=-6,t.q=null)}else t.Ee&=~ei;t.L&&ti.Y(t,!1,!0)}n.length=0}function Fo(n=null,e=!1){let t=!e;if(t&&uc(),e||$u(Mt),Wt.R>=Wt.P&&to(Wt,ti.K),t){uc();const i=n?n.$:Mt.$;for(let s=0;s<i.length;s++){const r=i[s];r.ie=void 0,r.le!==xt&&(r.fe=r.le,r.le=xt);const o=r.Te;r.Te=xt,o!==xt&&r.fe!==o&&Us(r,!0),r.ne=null}i.length=0,n?n.j:Mt.j;for(const s of Ei)(n?s.ne===n:!s.ne)&&(s.k||(s.W[0].length&&mo(s.W[0],As),s.W[1].length&&mo(s.W[1],yi)),s.de.ie===s&&(s.de.ie=void 0),s.U.clear(),s.W[0].length=0,s.W[1].length=0,Ei.delete(s),_o.delete(s.de))}}function $u(n){for(const e of n.F)e.checkSources?.(),$u(e)}function hc(n){Mt.j.add(n),Qi()}function fc(n){for(let e=0;e<n.length;e++)n[e].ne=Pe}const Mt=new ti;function Ia(){for(;ur;)Mt.flush()}function mo(n,e){for(let t=0;t<n.length;t++)n[t](e)}function bf(n){if(n.te)return!0;if(n.ee.length)return!1;let e=!0;for(let t=0;t<n.X.length;t++){const i=n.X[t];if(i.Ee&Nt&&i.q?.source===i){e=!1;break}}return e&&(n.te=!0),e}function ju(n){for(;n.te&&typeof n.te=="object";)n=n.te;return n}function Tf(n,e){const t=Pe;try{return Pe=ju(n),e()}finally{Pe=t}}const _o=new WeakMap,Ei=new Set;function Af(n){let e=_o.get(n);if(e)return jt(e);const t=n.Se,i=t?.ie?jt(t.ie):null;return e={de:n,U:new Set,W:[[],[]],k:null,ne:Pe,Re:i},_o.set(n,e),Ei.add(e),n.Oe=!1,e}function jt(n){for(;n.k;)n=n.k;return n}function Zu(n,e){if(n=jt(n),e=jt(e),n===e)return n;e.k=n;for(const t of e.U)n.U.add(t);return n.W[0].push(...e.W[0]),n.W[1].push(...e.W[1]),n}function go(n){const e=n.ie;if(!e)return;const t=jt(e);if(Ei.has(t))return t;n.ie=void 0}function Ul(n){return n.Te!==void 0&&n.Te!==xt}function Ku(n,e){const t=jt(e),i=n.ie;if(i){if(i.k){n.ie=e;return}const s=jt(i);if(Ei.has(s)){s!==t&&!Ul(n)&&(t.Re&&jt(t.Re)===s?n.ie=e:s.Re&&jt(s.Re)===t||Zu(t,s));return}}n.ie=e}function Ju(n,e,t){const i=typeof e=="object"&&e!==null,s=i&&fn(()=>e[Symbol.asyncIterator]),r=!s&&i&&fn(()=>typeof e.then=="function");if(!r&&!s)return n._e=null,e;n._e=e;let o;const a=l=>{n._e===e&&(Mt.initTransition(n.ne),xo(n,l instanceof Un?Nt:dn,l),n.J=Bt)},c=(l,u)=>{if(n._e!==e||n.O&(Ls|cr))return;Mt.initTransition(n.ne),Nl(n);const h=go(n);if(h&&h.U.delete(n),t)t(l);else if(n.Te!==void 0)n.Te!==void 0&&n.Te!==xt?n.le=l:(n.fe=l,Us(n)),n.J=Bt;else if(h){const f=n.fe,p=n.Ie;(!p||!p(l,f))&&(n.fe=l,n.J=Bt,n.pe&&ot(n.pe,l),Us(n,!0))}else ot(n,()=>l);Qi(),Ia(),u?.()};if(r){let l=!1,u=!0;if(e.then(h=>{u?(o=h,l=!0):c(h)},h=>{u||a(h)}),u=!1,!l)throw Mt.initTransition(n.ne),new Un(Qe)}if(s){const l=e[Symbol.asyncIterator]();let u=!1;const h=()=>{let p,_=!1,v=!0;return l.next().then(m=>{v?(p=m,_=!0):m.done?(Qi(),Ia()):c(m.value,h)},m=>{v||a(m)}),v=!1,_&&!p.done?(o=p.value,u=!0,h()):_&&p.done},f=h();if(!u&&!f)throw Mt.initTransition(n.ne),new Un(Qe)}return o}function Nl(n){n.Ee=n.Ee&ei,n.q=null,dr(n),n.he?.()}function xo(n,e,t,i,s){e===dn&&!(t instanceof Pa)&&!(t instanceof Un)&&(t=new Pa(n,t));const r=t instanceof Un&&t.source===n,o=e===Nt&&n.Te!==void 0&&!r,a=o&&Ul(n);if(i||(n.Ee=e|(e!==dn?n.Ee&ei:0),n.q=t,dr(n)),s&&!i&&Ku(n,s),a&&Pe&&t instanceof Un){const u=t.source;Pe.X.includes(u)||Pe.X.push(u)}const c=i||a,l=i||o?void 0:s;if(n.he){c?n.he(e,t):n.he();return}for(let u=n.I;u!==null;u=u.p)u.h.J=Bt,u.h.q!==t&&(!u.h.ne&&Mt.M.push(u.h),xo(u.h,e,t,c,l));for(let u=n.A;u!==null;u=u.N)for(let h=u.I;h!==null;h=h.p)h.h.J=Bt,h.h.q!==t&&(!h.h.ne&&Mt.M.push(h.h),xo(h.h,e,t,c,l))}function Fl(n){const e=n.m,t=n.D,i=n.p,s=n.Ae;return i!==null?i.Ae=s:e.Ne=s,s!==null?s.p=i:(e.I=i,i===null&&(e.ge?.(),e.L&&!e.Pe&&!(e.O&Mi)&&wf(e))),t}function wf(n){vr(n,n.O&Mi?zn:Wt);let e=n.C;for(;e!==null;)e=Fl(e);n.C=null,yr(n,!0)}function Oo(n,e){const t=e.Ce;if(t!==null&&t.m===n)return;let i=null;const s=e.O&wo;if(s&&(i=t!==null?t.D:e.C,i!==null&&i.m===n)){e.Ce=i;return}const r=n.Ne;if(r!==null&&r.h===e&&(!s||Rf(r,e)))return;const o=e.Ce=n.Ne={m:n,h:e,D:i,Ae:r,p:null};t!==null?t.D=o:e.C=o,r!==null?r.p=o:n.I=o}function Rf(n,e){const t=e.Ce;if(t!==null){let i=e.C;do{if(i===n)return!0;if(i===t)break;i=i.D}while(i!==null)}return!1}function Qu(n){let e=n.De;for(;e;)e.O|=Mi,e.O&vi&&(vr(e,Wt),qu(e,zn)),Qu(e),e=e.ye}function yr(n,e=!1,t){if(n.O&fo)return;e&&(n.O=fo);let i=t?n.ve:n.De;for(;i;){const s=i.ye;if(i.C){const r=i;vr(r,r.O&Mi?zn:Wt);let o=r.C;do o=Fl(o);while(o!==null);r.C=null,r.Ce=null}yr(i,!0),i=s}t?n.ve=null:(n.De=null,n.we=0),Cf(n,t)}function Cf(n,e){let t=e?n.be:n.me;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){const s=t[i];s.call(s)}else t.call(t);e?n.be=null:n.me=null}}function Pf(n,e){let t=n;for(;t.Ve&&t.i;)t=t.i;if(t.id!=null)return Df(t.id,t.we++);throw new Error("Cannot get child id from owner without an id")}function eh(n){return Pf(n)}function Df(n,e){const t=e.toString(36),i=t.length-1;return n+(i?String.fromCharCode(64+i):"")+t}function Zt(){return Qt?Qe:null}function If(){return Qe}function Zi(n){return Qe&&(Qe.me?Array.isArray(Qe.me)?Qe.me.push(n):Qe.me=[Qe.me,n]:Qe.me=n),n}function rr(n){const e=Qe,t=n?.transparent??!1,i={id:n?.id??(t?e?.id:e?.id!=null?eh(e):void 0),Ve:t||void 0,t:!0,u:e?.t?e.u:e,De:null,ye:null,me:null,ce:e?.ce??Mt,Le:e?.Le||Wu,we:0,be:null,ve:null,i:e,dispose(s=!0){yr(i,s)}};if(e){const s=e.De;s===null||(i.ye=s),e.De=i}return i}function ts(n,e){const t=rr(e);return Ts(t,()=>n(t.dispose))}function th(n,e,t,i,s){let r=!1;const o=Ro(s?.render?a=>Ff(()=>n(a)):n,i,{...s,equals:()=>(o.ue=!o.q,r&&o.ce.enqueue(o.se,Bo.bind(o)),!1),lazy:!0});o.ke=i,o.Ue=e,o.xe=t,o.We=void 0,o.se=s?.render?As:yi,o.he=(a,c)=>{const l=a!==void 0?a:o.Ee,u=c!==void 0?c:o.q;if(l&dn){let h=u;if(o.ce.notify(o,Nt,0),o.se===yi)try{return o.xe?o.xe(h,()=>{o.We?.(),o.We=void 0}):console.error(h)}catch(f){h=f}if(!o.ce.notify(o,dn,dn))throw h}else o.se===As&&o.ce.notify(o,Nt|dn,l,u)},Si(o,!0),!s?.defer&&(o.se===yi?o.ce.enqueue(o.se,Bo.bind(o)):Bo.call(o)),r=!0,Zi(()=>o.We?.())}function Bo(){if(!(!this.ue||this.O&fo)){this.We?.(),this.We=void 0;try{this.We=this.Ue(this.fe,this.ke)}catch(n){if(this.q=new Pa(this,n),this.Ee|=dn,!this.ce.notify(this,dn,dn))throw n}finally{this.ke=this.fe,this.ue=!1}}}let Lf=null;ti.K=Si;ti.Y=yr;let Qt=!1,ws=!1,Qe=null,Sn=null,Uf=!1;function Si(n,e=!1){const t=n.se;e||(n.ne&&(!t||Pe)&&Pe!==n.ne&&Mt.initTransition(n.ne),vr(n,n.O&Mi?zn:Wt),n.ne||t===Ll?yr(n):(Qu(n),n.be=n.me,n.ve=n.De,n.me=null,n.De=null,n.we=0));const i=!!(n.O&cr),s=n.Te!==void 0&&n.Te!==xt,r=!!(n.Ee&Nt),o=Qe;Qe=n,n.Ce=null,n.O=wo,n.J=Bt;let a=n.le===xt?n.fe:n.le,c=n.o,l=Qt,u=Sn;if(Qt=!0,i){const h=go(n);h&&(Sn=h)}try{a=Ju(n,n.L(a)),Nl(n);const h=go(n);h&&(h.U.delete(n),dr(h.de))}catch(h){if(h instanceof Un&&Sn){const f=jt(Sn);f.de!==n&&(f.U.add(n),n.ie=f,dr(f.de))}xo(n,h instanceof Un?Nt:dn,h,void 0,h instanceof Un?n.ie:void 0)}finally{Qt=l,n.O=Dl|(e?n.O&Il:0),Qe=o}if(!n.q){const h=n.Ce;let f=h!==null?h.D:n.C;if(f!==null){do f=Fl(f);while(f!==null);h!==null?h.D=null:n.C=null}const p=s?n.Te:n.le===xt?n.fe:n.le;if(!n.Ie||!n.Ie(p,a)){const v=s?n.Te:void 0;e||t&&Pe!==n.ne||i?(n.fe=a,s&&i&&(n.Te=a,n.le=a)):n.le=a,s&&!i&&r&&!n.Oe&&(n.Te=a),(!s||i||n.Te!==v)&&Us(n,i||s)}else if(s)n.le=a;else if(n.o!=c)for(let v=n.I;v!==null;v=v.p)Yu(v.h,v.h.O&Mi?zn:Wt)}Sn=u,(!e||n.Ee&Nt)&&!n.ne&&!(Pe&&s)&&Mt.M.push(n),n.ne&&t&&Pe!==n.ne&&Tf(n.ne,()=>Si(n))}function nh(n){if(n.O&sr)for(let e=n.C;e;e=e.D){const t=e.m,i=t.V||t;if(i.L&&nh(i),n.O&Ls)break}(n.O&(Ls|cr)||n.q&&n.J<Bt&&!n._e)&&Si(n),n.O=Dl|n.O&Il}function Ro(n,e,t){const i=t?.transparent??!1,s={id:t?.id??(i?Qe?.id:Qe?.id!=null?eh(Qe):void 0),Ve:i||void 0,Ie:t?.equals!=null?t.equals:fr,Ge:!!t?.pureWrite,ge:t?.unobserved,me:null,ce:Qe?.ce??Mt,Le:Qe?.Le??Wu,we:0,L:n,fe:e,o:0,A:null,S:void 0,T:null,C:null,Ce:null,I:null,Ne:null,i:Qe,ye:null,De:null,O:t?.lazy?Da:Dl,Ee:ei,J:Bt,le:xt,be:null,ve:null,_e:null,ne:null};s.T=s;const r=Qe?.t?Qe.u:Qe;if(Qe){const o=Qe.De;o===null||(s.ye=o),Qe.De=s}return r&&(s.o=r.o+1),!t?.lazy&&Si(s,!0),s}function or(n,e,t=null){const i={Ie:e?.equals!=null?e.equals:fr,Ge:!!e?.pureWrite,Qe:!!e?.Qe,ge:e?.unobserved,fe:n,I:null,Ne:null,J:Bt,V:t,N:t?.A||null,le:xt};return t&&(t.A=i),i}function fr(n,e){return n===e}function fn(n,e){if(!Qt)return n();const t=Qt;Qt=!1;try{return n()}finally{Qt=t}}function Xi(n){let e=Qe;e?.t&&(e=e.u),n.O&Da&&(n.O&=~Da,Si(n,!0));const t=n.V||n;if(e&&Qt&&(n.L&&n.O&fo&&Si(n),Oo(n,e),t.L)){const i=n.O&Mi;t.o>=(i?zn.P:Wt.P)&&(po(e),Sf(i?zn:Wt),nh(t));const s=t.o;s>=e.o&&n.i!==e&&(e.o=s+1)}if(t.Ee&Nt){const i=t.q?.source;if(i&&!(i.Ee&Nt))Nl(t);else if(e&&!(ws&&t.ne&&Pe!==t.ne))if(Sn){const s=t.ie,r=jt(Sn);if(s&&jt(s)===r&&!Ul(t))throw!Qt&&n!==e&&Oo(n,e),t.q}else throw!Qt&&n!==e&&Oo(n,e),t.q;else if(!e&&t.Ee&ei)throw t.q}if(n.L&&n.Ee&dn){if(n.J<Bt)return Si(n,!0),Xi(n);throw n.q}return n.Te!==void 0&&n.Te!==xt?n.Te:!e||Sn!==null&&(n.Te!==void 0||n.ie||t===n&&ws||t.Ee&Nt)||n.le===xt||ws&&n.ne&&Pe!==n.ne?n.fe:n.le}function ot(n,e){n.ne&&Pe!==n.ne&&Mt.initTransition(n.ne);const t=n.Te!==void 0&&!hr,i=n.Te!==void 0&&n.Te!==xt,s=t?i?n.Te:n.fe:n.le===xt?n.fe:n.le;if(typeof e=="function"&&(e=e(s)),!(!n.Ie||!n.Ie(s,e)||!!(n.Ee&ei)))return t&&i&&n.L&&(Us(n,!0),Qi()),e;if(t){const o=n.Te===xt;!o&&n.ne&&Mt.initTransition(n.ne),o&&(n.le=n.fe,Mt.$.push(n)),n.Oe=!0;const a=Af(n);n.ie=a,n.Te=e}else n.le===xt&&Mt.M.push(n),n.le=e;return dr(n),n.pe&&ot(n.pe,e),n.J=Bt,Us(n,t),Qi(),e}function Ts(n,e){const t=Qe,i=Qt;Qe=n,Qt=!1;try{return e()}finally{Qe=t,Qt=i}}function Nf(n){const e=n;if(n.Te!==void 0&&n.Te!==xt){if(e.Ee&Nt&&!(e.Ee&ei))return!0;if(n.Se){const t=n.ie?jt(n.ie):null;return!!(t&&t.U.size>0)}return!0}return n.le!==xt&&!(e.Ee&ei)?!0:!!(e.Ee&Nt&&!(e.Ee&ei))}function dr(n){if(n.Fe){const e=Nf(n),t=n.Fe;if(ot(t,e),!e&&t.ie){const i=go(n);if(i&&i.U.size>0){const s=jt(t.ie);s!==i&&Zu(i,s)}_o.delete(t),t.ie=void 0}}}function Ff(n,e=!0){const t=ws;ws=e;try{return n()}finally{ws=t}}function Rs(n){const e=Xi.bind(null,n);return e.$r=!0,e}function Of(n,e,t){if(typeof n=="function"){const s=Ro(n,e,t);return[Rs(s),ot.bind(null,s)]}const i=or(n,e);return[Rs(i),ot.bind(null,i)]}function Ol(n,e,t){let i=Ro(n,e,t);return Rs(i)}function Bf(n,e,t,i){th(n,e.effect||e,e.error,t,i)}function zf(n,e,t,i){th(n,e,void 0,t,{render:!0,...i})}function dc(n){return n?.[Cs]?.[gt]??n}function rs(n,e,t,i,s){return s&&i in s?s[i]:e&&i in e?e[i]:n[i]}function Vf(n,e,t){const i=ah(n,e),s=Object.keys(t);return Array.from(new Set([...i,...s]))}function Ms(n,e,t){const i=e?.[Cs];if(!i)return;const s=i[Yt],r=i[pt],o=i[dt];let a=i[gt];if(!(n===s&&!r&&!o)){if((i[sh]||La).set(n,i[Cn]),i[Yt]=n,i[pt]=void 0,Array.isArray(s)){let c=!1;const l=rs(s,r,a,"length",o);if(n.length&&l&&n[0]&&t(n[0])!=null){let u,h,f,p,_,v,m,d;for(f=0,p=Math.min(l,n.length);f<p&&((v=rs(s,r,a,f,o))===n[f]||v&&n[f]&&t(v)===t(n[f]));f++)Ms(n[f],on(v,i),t);const y=new Array(n.length),b=new Map;for(p=l-1,_=n.length-1;p>=f&&_>=f&&((v=rs(s,r,a,p,o))===n[_]||v&&n[_]&&t(v)===t(n[_]));p--,_--)y[_]=v;if(f>_||f>p){for(h=f;h<=_;h++)c=!0,i[gt][h]&&ot(i[gt][h],on(n[h],i));for(;h<n.length;h++){c=!0;const M=on(y[h],i);i[gt][h]&&ot(i[gt][h],M),Ms(n[h],M,t)}c&&i[gt][an]&&ot(i[gt][an],void 0),l!==n.length&&i[gt].length&&ot(i[gt].length,n.length);return}for(m=new Array(_+1),h=_;h>=f;h--)v=n[h],d=v&&t(v),u=b.get(d),m[h]=u===void 0?-1:u,b.set(d,h);for(u=f;u<=p;u++)v=rs(s,r,a,u,o),d=v&&t(v),h=b.get(d),h!==void 0&&h!==-1&&(y[h]=v,h=m[h],b.set(d,h));for(h=f;h<n.length;h++)if(h in y){const M=on(y[h],i);i[gt][h]&&ot(i[gt][h],M),Ms(n[h],M,t)}else i[gt][h]&&ot(i[gt][h],on(n[h],i));f<n.length&&(c=!0)}else if(n.length)for(let u=0,h=n.length;u<h;u++){const f=rs(s,r,a,u,o);Dn(f)?Ms(n[u],on(f,i),t):i[gt][u]&&ot(i[gt][u],n[u])}l!==n.length&&(c=!0,i[gt].length&&ot(i[gt].length,n.length)),c&&i[gt][an]&&ot(i[gt][an],void 0);return}if(a){const c=a[an],l=c?Vf(s,r,n):Object.keys(a);for(let u=0,h=l.length;u<h;u++){const f=l[u],p=a[f],_=dc(rs(s,r,a,f,o));let v=dc(n[f]);_!==v&&(!_||!Dn(_)||!Dn(v)||t(_)!=null&&t(_)!==t(v)?(c&&ot(c,void 0),p&&ot(p,Dn(v)?on(v,i):v)):Ms(v,on(_,i),t))}}if(a=i[Es]){const c=Object.keys(a);for(let l=0,u=c.length;l<u;l++){const h=c[l];ot(a[h],h in n)}}}}function pc(n,e){return t=>{if(t==null)throw new Error("Cannot reconcile null or undefined state");const i=typeof e=="string"?r=>r[e]:e;if(i(t)!==void 0&&i(n)!==i(t))throw new Error("Cannot reconcile states with different identity");Ms(n,t,i)}}function kf(n,e={},t){let i;const s=new WeakMap,r=c=>{c[vo]=o,c[sh]=s,Object.defineProperty(c,Vi,{get(){return i},configurable:!0})},o=c=>{if(s.has(c))return s.get(c);if(c[Cs]?.[vo]===o)return c;const l=rh(c,lh,r);return s.set(c,l),l},a=o(e);return i=Ro(()=>{const c=If();Na(new Proxy(a,ih),l=>{const u=Ju(c,n(l),h=>{h!==l&&h!==void 0&&Na(a,pc(h,t?.key||"id"))});u!==l&&u!==void 0&&pc(u,t?.key||"id")(a)})}),i.Pe=!0,{store:a,node:i}}const ih={get(n,e){let t;os(!0),ss(!0);try{t=n[e]}finally{os(!1),ss(!1)}return typeof t=="object"&&t!==null?new Proxy(t,ih):t},set(n,e,t){os(!0),ss(!0);try{n[e]=t}finally{os(!1),ss(!1)}return!0},deleteProperty(n,e){os(!0),ss(!0);try{delete n[e]}finally{os(!1),ss(!1)}return!0}},an=Symbol(0),Cs=Symbol(0),Cn=Symbol(0),vn=Symbol(0),Yt="v",pt="o",dt="x",gt="n",Es="h",vo="w",sh="l",Vi="f",bs="p";function rh(n,e=lh,t){let i;return Array.isArray(n)?(i=[],i.v=n):i={v:n},t&&t(i),i[Cn]=new Proxy(i,e)}const La=new WeakMap;function on(n,e){if(e?.[vo])return e[vo](n,e);let t=n[Cn]||La.get(n);return t||La.set(n,t=rh(n)),t}function Dn(n){return n!=null&&typeof n=="object"&&!Object.isFrozen(n)}let oh=!1;function os(n){oh=n}function zo(n){return oh||!!ki?.has(n)}function Qs(n,e){let t=n[e];return t||(n[e]=t=Object.create(null)),t}function Ua(n,e,t,i,s=fr,r,o){if(n[e])return n[e];const a=or(t,{equals:s,unobserved(){delete n[e]}},i);if(r&&(a.Te=xt),o&&e in o){const c=o[e];a.re=c===void 0?xf:c}return n[e]=a}function mc(n,e=an){Zt()&&Xi(Ua(Qs(n,gt),e,void 0,n[Vi],!1,n[bs]))}function ah(n,e,t=!0){const i=fn(()=>t?Object.keys(n):Reflect.ownKeys(n));if(!e)return i;const s=new Set(i),r=Reflect.ownKeys(e);for(const o of r)e[o]!==vn?s.add(o):s.delete(o);return Array.from(s)}function _c(n,e,t){let i=n;if(e&&t in e){if(i[t]===vn)return;t in i||(i=e)}return Reflect.getOwnPropertyDescriptor(i,t)}let ki=null;const lh={get(n,e,t){if(e===Cs)return n;if(e===Cn)return t;if(e===yf)return n[Vi];if(e===an)return mc(n),t;const i=Qs(n,gt),s=i[e],r=n[dt]&&e in n[dt],o=r||n[pt]&&e in n[pt],a=!!n[Yt][Cs],c=r?n[dt]:n[pt]&&e in n[pt]?n[pt]:n[Yt];if(!s){const u=Object.getOwnPropertyDescriptor(c,e);if(u&&u.get)return u.get.call(t)}if(zo(t)){let u=s&&(o||!a)?s.Te!==void 0&&s.Te!==xt?s.Te:s.le!==xt?s.le:s.fe:c[e];if(u===vn&&(u=void 0),!Dn(u))return u;const h=on(u,n);return ki?.add(h),h}let l=s?o||!a?Xi(i[e]):(Xi(i[e]),c[e]):c[e];if(l===vn&&(l=void 0),!s){if(!o&&typeof l=="function"&&!c.hasOwnProperty(e)){let u;return!Array.isArray(n[Yt])&&(u=Object.getPrototypeOf(n[Yt]))&&u!==Object.prototype?l.bind(c):l}else if(Zt())return Xi(Ua(i,e,Dn(l)?on(l,n):l,n[Vi],fr,n[bs],n[vf]))}return Dn(l)?on(l,n):l},has(n,e){if(e===Cn||e===an||e==="__proto__")return!0;const t=n[dt]&&e in n[dt]?n[dt][e]!==vn:n[pt]&&e in n[pt]?n[pt][e]!==vn:e in n[Yt];return Zt()&&Xi(Ua(Qs(n,Es),e,t,n[Vi],fr,n[bs])),t},set(n,e,t){const i=n[Cn];if(zo(i)){if(n[bs]){const s=n[Vi];s?.ne&&Mt.initTransition(s.ne)}fn(()=>{const s=n[Yt],r=s[e];Uf&&typeof e!="symbol"&&(n[Vi]?.Ee??0)&Nt;const o=n[bs]&&!hr,a=o?dt:pt;o&&hc(i);const c=n[dt]&&e in n[dt]?n[dt][e]:n[pt]&&e in n[pt]?n[pt][e]:r,l=t?.[Cs]?.[Yt]??t;if(c===l)return!0;const u=n[dt]?.length||n[pt]?.length||s.length;l!==void 0&&l===r?delete n[a][e]:(n[a]||(n[a]=Object.create(null)))[e]=l;const h=Dn(l);n[Es]?.[e]&&ot(n[Es][e],!0);const f=Qs(n,gt);if(f[e]&&ot(f[e],()=>h?on(l,n):l),Array.isArray(s))if(e==="length")f.length&&ot(f.length,l);else{const p=parseInt(e)+1;p>u&&f.length&&ot(f.length,p)}f[an]&&ot(f[an],void 0)})}return!0},deleteProperty(n,e){const t=n[dt]?.[e]===vn,i=n[pt]?.[e]===vn;return zo(n[Cn])&&!t&&!i&&fn(()=>{const s=n[bs]&&!hr,r=s?dt:pt;s&&hc(n[Cn]);const o=n[dt]&&e in n[dt]?n[dt][e]:n[pt]&&e in n[pt]?n[pt][e]:n[Yt][e];if(e in n[Yt]||n[pt]&&e in n[pt])(n[r]||(n[r]=Object.create(null)))[e]=vn;else if(n[r]&&e in n[r])delete n[r][e];else return!0;n[Es]?.[e]&&ot(n[Es][e],!1);const a=Qs(n,gt);a[e]&&ot(a[e],void 0),a[an]&&ot(a[an],void 0)}),!0},ownKeys(n){mc(n);let e=ah(n[Yt],n[pt],!1);if(n[dt]){const t=new Set(e);for(const i of Reflect.ownKeys(n[dt]))n[dt][i]!==vn?t.add(i):t.delete(i);e=Array.from(t)}return e},getOwnPropertyDescriptor(n,e){if(e===Cn)return{value:n[Cn],writable:!0,configurable:!0};if(n[dt]&&e in n[dt]){if(n[dt][e]===vn)return;const t=_c(n[Yt],n[pt],e);return t?{...t,value:n[dt][e]}:{value:n[dt][e],writable:!0,enumerable:!0,configurable:!0}}return _c(n[Yt],n[pt],e)},getPrototypeOf(n){return Object.getPrototypeOf(n[Yt])}};function Na(n,e){const t=ki;ki=new Set,ki.add(n);try{const i=e(n);if(i!==n&&i!==void 0)if(Array.isArray(i)){for(let s=0,r=i.length;s<r;s++)n[s]=i[s];n.length=i.length}else new Set([...Object.keys(n),...Object.keys(i)]).forEach(r=>{r in i?n[r]=i[r]:delete n[r]})}finally{ki.clear(),ki=t}}function Gf(n,e,t){const i=typeof n=="function",s=i?kf(n,e,t).store:on(n);return[s,r=>Na(s,r)]}const ch=Symbol(0);function er(n,e,t=0){let i,s=n;if(t<e.length-1){i=e[t];const o=typeof i,a=Array.isArray(n);if(Array.isArray(i)){for(let c=0;c<i.length;c++)e[t]=i[c],er(n,e,t);e[t]=i;return}else if(a&&o==="function"){for(let c=0;c<n.length;c++)i(n[c],c)&&(e[t]=c,er(n,e,t));e[t]=i;return}else if(a&&o==="object"){const{from:c=0,to:l=n.length-1,by:u=1}=i;for(let h=c;h<=l;h+=u)e[t]=h,er(n,e,t);e[t]=i;return}else if(t<e.length-2){er(n[i],e,t+1);return}s=n[i]}let r=e[e.length-1];if(!(typeof r=="function"&&(r=r(s),r===s))&&!(i===void 0&&r==null))if(r===ch)delete n[i];else if(i===void 0||Dn(s)&&Dn(r)&&!Array.isArray(r)){const o=i!==void 0?n[i]:n,a=Object.keys(r);for(let c=0;c<a.length;c++)o[a[c]]=r[a[c]]}else n[i]=r}Object.assign(function(...e){return t=>{er(t,e)}},{DELETE:ch});function Vo(n,e,t){const s=e.length>1,r=e;return Ol(Hf.bind({Me:rr(),$e:0,je:n,Ke:[],Ye:r,Be:[],Ze:[],qe:void 0,Xe:void 0,ze:s?[]:void 0,Je:t?.fallback}))}const ko={pureWrite:!0};function Hf(){const n=this.je()||[],e=n.length;return n[an],Ts(this.Me,()=>{let t,i,s=this.Xe?()=>(this.Xe[i]=or(n[i],ko),this.ze&&(this.ze[i]=or(i,ko)),this.Ye(Rs(this.Xe[i]),this.ze?Rs(this.ze[i]):void 0)):this.ze?()=>{const r=n[i];return this.ze[i]=or(i,ko),this.Ye(()=>r,Rs(this.ze[i]))}:()=>{const r=n[i];return this.Ye(()=>r)};if(e===0)this.$e!==0&&(this.Me.dispose(!1),this.Ze=[],this.Ke=[],this.Be=[],this.$e=0,this.Xe&&(this.Xe=[]),this.ze&&(this.ze=[])),this.Je&&!this.Be[0]&&(this.Be[0]=Ts(this.Ze[0]=rr(),this.Je));else if(this.$e===0){for(this.Ze[0]&&this.Ze[0].dispose(),this.Be=new Array(e),i=0;i<e;i++)this.Ke[i]=n[i],this.Be[i]=Ts(this.Ze[i]=rr(),s);this.$e=e}else{let r,o,a,c,l,u,h,f=new Array(e),p=new Array(e),_=this.Xe?new Array(e):void 0,v=this.ze?new Array(e):void 0;for(r=0,o=Math.min(this.$e,e);r<o&&(this.Ke[r]===n[r]||this.Xe&&gc(this.qe,this.Ke[r],n[r]));r++)this.Xe&&ot(this.Xe[r],n[r]);for(o=this.$e-1,a=e-1;o>=r&&a>=r&&(this.Ke[o]===n[a]||this.Xe&&gc(this.qe,this.Ke[o],n[a]));o--,a--)f[a]=this.Be[o],p[a]=this.Ze[o],_&&(_[a]=this.Xe[o]),v&&(v[a]=this.ze[o]);for(u=new Map,h=new Array(a+1),i=a;i>=r;i--)c=n[i],l=this.qe?this.qe(c):c,t=u.get(l),h[i]=t===void 0?-1:t,u.set(l,i);for(t=r;t<=o;t++)c=this.Ke[t],l=this.qe?this.qe(c):c,i=u.get(l),i!==void 0&&i!==-1?(f[i]=this.Be[t],p[i]=this.Ze[t],_&&(_[i]=this.Xe[t]),v&&(v[i]=this.ze[t]),i=h[i],u.set(l,i)):this.Ze[t].dispose();for(i=r;i<e;i++)i in f?(this.Be[i]=f[i],this.Ze[i]=p[i],_&&(this.Xe[i]=_[i],ot(this.Xe[i],n[i])),v&&(this.ze[i]=v[i],ot(this.ze[i],i))):this.Be[i]=Ts(this.Ze[i]=rr(),s);this.Be=this.Be.slice(0,this.$e=e),this.Ke=n.slice(0)}}),this.Be}function gc(n,e,t){return n?n(e)===n(t):!0}function uh(n,e){if(typeof n=="function"&&!n.length){if(e?.doNotUnwrap)return n;do n=n();while(typeof n=="function"&&!n.length)}if(!(e?.skipNonRendered&&(n==null||n===!0||n===!1||n===""))){if(Array.isArray(n)){let t=[];return Fa(n,t,e)?()=>{let i=[];return Fa(t,i,{...e,doNotUnwrap:!1}),i}:t}return n}}function Fa(n,e=[],t){let i=null,s=!1;for(let r=0;r<n.length;r++)try{let o=n[r];if(typeof o=="function"&&!o.length){if(t?.doNotUnwrap){e.push(o),s=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?s=Fa(o,e,t):t?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||e.push(o)}catch(o){if(!(o instanceof Un))throw o;i=o}if(i)throw i;return s}const It=(...n)=>Ol(...n),tt=(...n)=>Of(...n),Wf=(...n)=>Gf(...n),Xf=(...n)=>zf(...n),xc=(...n)=>Bf(...n);function tr(n,e){return fn(()=>n(e||{}))}const Ki=(n,e,t)=>Xf(n,e,t,{transparent:!0}),qf=(n,e)=>e?n.$r?n:Ol(()=>n(),void 0,{transparent:!0}):It(()=>n());function Yf(n,e,t){let i=t.length,s=e.length,r=i,o=0,a=0,c=e[s-1].nextSibling,l=null;for(;o<s||a<r;){if(e[o]===t[a]){o++,a++;continue}for(;e[s-1]===t[r-1];)s--,r--;if(s===o){const u=r<i?a?t[a-1].nextSibling:t[r-a]:c;for(;a<r;)n.insertBefore(t[a++],u)}else if(r===a)for(;o<s;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[r-1]&&t[a]===e[s-1]){const u=e[--s].nextSibling;n.insertBefore(t[a++],e[o++].nextSibling),n.insertBefore(t[--r],u),e[s]=t[r]}else{if(!l){l=new Map;let h=a;for(;h<r;)l.set(t[h],h++)}const u=l.get(e[o]);if(u!=null)if(a<u&&u<r){let h=o,f=1,p;for(;++h<s&&h<r&&!((p=l.get(e[h]))==null||p!==u+f);)f++;if(f>u-a){const _=e[o];for(;a<u;)n.insertBefore(t[a++],_)}else n.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const vc="_$DX_DELEGATE";function $f(n,e,t,i={}){let s;return ts(r=>{s=r,e===document?uh(n):Gi(e,n(),e.firstChild?null:void 0,t)},{id:i.renderId}),()=>{s(),e.textContent=""}}function Ai(n,e,t,i){let s;const r=a=>{const c=document.createElement("template");return c.innerHTML=n,c.content.firstChild};return a=>(s||(s=r())).cloneNode(!0)}function Bl(n,e=window.document){const t=e[vc]||(e[vc]=new Set);for(let i=0,s=n.length;i<s;i++){const r=n[i];t.has(r)||(t.add(r),e.addEventListener(r,Zf))}}function mt(n,e,t){t!=null?n.style.setProperty(e,t):n.style.removeProperty(e)}function jf(n,e){Array.isArray(n)?n.flat(1/0).forEach(t=>t&&t(e)):n(e)}function zl(n,e){const t=fn(n);Ts(null,()=>jf(t,e))}function Gi(n,e,t,i){const s=t!==void 0;if(s&&!i&&(i=[]),typeof e!="function"&&(e=Sc(e,i,s,!0),typeof e!="function"))return yc(n,e,i,t);if(e=qf(e,!0),s&&i.length===0){const r=document.createTextNode("");n.insertBefore(r,t),i=[r]}Ki(r=>Sc(e,r,s),(r,o)=>yc(n,r,o,t),i)}function Zf(n){let e=n.target;const t=`$$${n.type}`,i=n.target,s=n.currentTarget,r=c=>Object.defineProperty(n,"target",{configurable:!0,value:c}),o=()=>{const c=e[t];if(c&&!e.disabled){const l=e[`${t}Data`];if(l!==void 0?c.call(e,l,n):c.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&r(e.host),!0},a=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const c=n.composedPath();r(c[0]);for(let l=0;l<c.length-2&&(e=c[l],!!o());l++){if(e._$host){e=e._$host,a();break}if(e.parentNode===s)break}}else a();r(i)}function yc(n,e,t,i){if(e===t)return;const s=typeof e,r=i!==void 0;if(s==="string"||s==="number"){const o=typeof t;o==="string"||o==="number"?n.firstChild.data=e:n.textContent=e}else if(e===void 0)Rr(n,t,i);else if(e.nodeType)Array.isArray(t)?Rr(n,t,r?i:null,e):t===void 0||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);else if(Array.isArray(e)){const o=t&&Array.isArray(t);e.length===0?Rr(n,t,i):o?t.length===0?Mc(n,e,i):Yf(n,t,e):(t&&Rr(n),Mc(n,e))}}function Sc(n,e,t,i){if(n=uh(n,{skipNonRendered:!0,doNotUnwrap:i}),i&&typeof n=="function")return n;if(t&&!Array.isArray(n)&&(n=[n??""]),Array.isArray(n))for(let s=0,r=n.length;s<r;s++){const o=n[s],a=e&&e[s],c=typeof o;(c==="string"||c==="number")&&(n[s]=a&&a.nodeType===3&&a.data===""+o?a:document.createTextNode(o))}return n}function Mc(n,e,t=null){for(let i=0,s=e.length;i<s;i++)n.insertBefore(e[i],t)}function Rr(n,e,t,i){if(t===void 0)return n.textContent="";if(e.length){let s=!1;for(let r=e.length-1;r>=0;r--){const o=e[r];if(i!==o){const a=o.parentNode===n;i&&!s&&!r?a?n.replaceChild(i,o):n.insertBefore(i,t):a&&o.remove()}else s=!0}}else i&&n.insertBefore(i,t)}function Kf(...n){return $f(...n)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vl="183",Jf=0,Ec=1,Qf=2,no=1,ed=2,nr=3,bi=0,en=1,Zn=2,ni=0,Ps=1,bc=2,Tc=3,Ac=4,td=5,Hi=100,nd=101,id=102,sd=103,rd=104,od=200,ad=201,ld=202,cd=203,Oa=204,Ba=205,ud=206,hd=207,fd=208,dd=209,pd=210,md=211,_d=212,gd=213,xd=214,za=0,Va=1,ka=2,Ns=3,Ga=4,Ha=5,Wa=6,Xa=7,hh=0,vd=1,yd=2,Nn=0,fh=1,dh=2,ph=3,mh=4,_h=5,gh=6,xh=7,vh=300,es=301,Fs=302,Go=303,Ho=304,Co=306,qa=1e3,Kn=1001,Ya=1002,zt=1003,Sd=1004,Cr=1005,Xt=1006,Wo=1007,qi=1008,ln=1009,yh=1010,Sh=1011,pr=1012,kl=1013,Vn=1014,In=1015,ri=1016,Gl=1017,Hl=1018,mr=1020,Mh=35902,Eh=35899,bh=1021,Th=1022,En=1023,oi=1026,Yi=1027,Ah=1028,Wl=1029,Os=1030,Xl=1031,ql=1033,io=33776,so=33777,ro=33778,oo=33779,$a=35840,ja=35841,Za=35842,Ka=35843,Ja=36196,Qa=37492,el=37496,tl=37488,nl=37489,il=37490,sl=37491,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,ul=37813,hl=37814,fl=37815,dl=37816,pl=37817,ml=37818,_l=37819,gl=37820,xl=37821,vl=36492,yl=36494,Sl=36495,Ml=36283,El=36284,bl=36285,Tl=36286,Md=3200,Yl=0,Ed=1,_i="",un="srgb",Bs="srgb-linear",yo="linear",rt="srgb",as=7680,wc=519,bd=512,Td=513,Ad=514,$l=515,wd=516,Rd=517,jl=518,Cd=519,Rc=35044,Cc="300 es",Ln=2e3,_r=2001;function Pd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function So(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dd(){const n=So("canvas");return n.style.display="block",n}const Pc={};function Dc(...n){const e="THREE."+n.shift();console.log(e,...n)}function wh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Fe(...n){n=wh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Je(...n){n=wh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Mo(...n){const e=n.join(" ");e in Pc||(Pc[e]=!0,Fe(...n))}function Id(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Ld={[za]:Va,[ka]:Wa,[Ga]:Xa,[Ns]:Ha,[Va]:za,[Wa]:ka,[Xa]:Ga,[Ha]:Ns};class Vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xo=Math.PI/180,Al=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Ud(n,e){return(n%e+e)%e}function qo(n,e,t){return(1-t)*n+t*e}function Xs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ks{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(h!==v||c!==f||l!==p||u!==_){let m=c*f+l*p+u*_+h*v;m<0&&(f=-f,p=-p,_=-_,v=-v,m=-m);let d=1-a;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);d=Math.sin(d*y)/b,a=Math.sin(a*y)/b,c=c*d+f*a,l=l*d+p*a,u=u*d+_*a,h=h*d+v*a}else{c=c*d+f*a,l=l*d+p*a,u=u*d+_*a,h=h*d+v*a;const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*p-l*f,e[t+1]=c*_+u*f+l*h-a*p,e[t+2]=l*_+u*p+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"YZX":this._x=f*u*h+l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h-f*p*_;break;case"XZY":this._x=f*u*h-l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h+f*p*_;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new k,Ic=new ks;class ze{constructor(e,t,i,s,r,o,a,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],v=s[0],m=s[3],d=s[6],y=s[1],b=s[4],M=s[7],A=s[2],T=s[5],w=s[8];return r[0]=o*v+a*y+c*A,r[3]=o*m+a*b+c*T,r[6]=o*d+a*M+c*w,r[1]=l*v+u*y+h*A,r[4]=l*m+u*b+h*T,r[7]=l*d+u*M+h*w,r[2]=f*v+p*y+_*A,r[5]=f*m+p*b+_*T,r[8]=f*d+p*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,_=t*h+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new ze,Lc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nd(){const n={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bs]:{primaries:e,whitePoint:i,transfer:yo,toXYZ:Lc,fromXYZ:Uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Lc,fromXYZ:Uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}const $e=Nd();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ls;class Fd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=So("canvas")),ls.width=e.width,ls.height=e.height;const s=ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Od=0;class Zl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jo(s[o].image)):r.push(jo(s[o]))}else r=jo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let Bd=0;const Zo=new k;class Kt extends Vs{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=Kn,s=Kn,r=Xt,o=qi,a=En,c=ln,l=Kt.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Sr(),this.name="",this.source=new Zl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zo).x}get height(){return this.source.getSize(Zo).y}get depth(){return this.source.getSize(Zo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=vh;Kt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],_=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,M=(p+1)/2,A=(d+1)/2,T=(u+f)/4,w=(h+v)/4,g=(_+m)/4;return b>M&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=w/i):M>A?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=g/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=w/r,s=g/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zd extends Vs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Kt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends zd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rh extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vd extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e,t,i,s,r,o,a,c,l,u,h,f,p,_,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,f,p,_,v,m)}set(e,t,i,s,r,o,a,c,l,u,h,f,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,_=l*u,v=l*h;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,_=l*u,v=l*h;t[0]=f-v*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=_*l-p,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=v-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,p=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kd,e,Gd)}lookAt(e,t,i){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ui.crossVectors(i,nn),ui.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ui.crossVectors(i,nn)),ui.normalize(),Pr.crossVectors(nn,ui),s[0]=ui.x,s[4]=Pr.x,s[8]=nn.x,s[1]=ui.y,s[5]=Pr.y,s[9]=nn.y,s[2]=ui.z,s[6]=Pr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],y=i[3],b=i[7],M=i[11],A=i[15],T=s[0],w=s[4],g=s[8],S=s[12],O=s[1],C=s[5],P=s[9],I=s[13],L=s[2],U=s[6],F=s[10],B=s[14],$=s[3],Z=s[7],Q=s[11],ie=s[15];return r[0]=o*T+a*O+c*L+l*$,r[4]=o*w+a*C+c*U+l*Z,r[8]=o*g+a*P+c*F+l*Q,r[12]=o*S+a*I+c*B+l*ie,r[1]=u*T+h*O+f*L+p*$,r[5]=u*w+h*C+f*U+p*Z,r[9]=u*g+h*P+f*F+p*Q,r[13]=u*S+h*I+f*B+p*ie,r[2]=_*T+v*O+m*L+d*$,r[6]=_*w+v*C+m*U+d*Z,r[10]=_*g+v*P+m*F+d*Q,r[14]=_*S+v*I+m*B+d*ie,r[3]=y*T+b*O+M*L+A*$,r[7]=y*w+b*C+M*U+A*Z,r[11]=y*g+b*P+M*F+A*Q,r[15]=y*S+b*I+M*B+A*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15],y=c*p-l*f,b=a*p-l*h,M=a*f-c*h,A=o*p-l*u,T=o*f-c*u,w=o*h-a*u;return t*(v*y-m*b+d*M)-i*(_*y-m*A+d*T)+s*(_*b-v*A+d*w)-r*(_*M-v*T+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],y=t*a-i*o,b=t*c-s*o,M=t*l-r*o,A=i*c-s*a,T=i*l-r*a,w=s*l-r*c,g=u*v-h*_,S=u*m-f*_,O=u*d-p*_,C=h*m-f*v,P=h*d-p*v,I=f*d-p*m,L=y*I-b*P+M*C+A*O-T*S+w*g;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return e[0]=(a*I-c*P+l*C)*U,e[1]=(s*P-i*I-r*C)*U,e[2]=(v*w-m*T+d*A)*U,e[3]=(f*T-h*w-p*A)*U,e[4]=(c*O-o*I-l*S)*U,e[5]=(t*I-s*O+r*S)*U,e[6]=(m*M-_*w-d*b)*U,e[7]=(u*w-f*M+p*b)*U,e[8]=(o*P-a*O+l*g)*U,e[9]=(i*O-t*P-r*g)*U,e[10]=(_*T-v*M+d*y)*U,e[11]=(h*M-u*T-p*y)*U,e[12]=(a*S-o*C-c*g)*U,e[13]=(t*C-i*S+s*g)*U,e[14]=(v*b-_*A-m*y)*U,e[15]=(u*A-h*b+f*y)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,_=r*h,v=o*u,m=o*h,d=a*h,y=c*l,b=c*u,M=c*h,A=i.x,T=i.y,w=i.z;return s[0]=(1-(v+d))*A,s[1]=(p+M)*A,s[2]=(_-b)*A,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+d))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(_+b)*w,s[9]=(m-y)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=cs.set(s[0],s[1],s[2]).length();const a=cs.set(s[4],s[5],s[6]).length(),c=cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_n.copy(this);const l=1/o,u=1/a,h=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Ln,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let _,v;if(c)_=r/(o-r),v=o*r/(o-r);else if(a===Ln)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===_r)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ln,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let _,v;if(c)_=1/(o-r),v=o/(o-r);else if(a===Ln)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===_r)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cs=new k,_n=new Et,kd=new k(0,0,0),Gd=new k(1,1,1),ui=new k,Pr=new k,nn=new k,Nc=new Et,Fc=new ks;class kn{constructor(e=0,t=0,i=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hd=0;const Oc=new k,us=new ks,Xn=new Et,Dr=new k,qs=new k,Wd=new k,Xd=new ks,Bc=new k(1,0,0),zc=new k(0,1,0),Vc=new k(0,0,1),kc={type:"added"},qd={type:"removed"},hs={type:"childadded",child:null},Ko={type:"childremoved",child:null};class qt extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new k,t=new kn,i=new ks,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Bc,e)}rotateY(e){return this.rotateOnAxis(zc,e)}rotateZ(e){return this.rotateOnAxis(Vc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bc,e)}translateY(e){return this.translateOnAxis(zc,e)}translateZ(e){return this.translateOnAxis(Vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dr.copy(e):Dr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(qs,Dr,this.up):Xn.lookAt(Dr,qs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Xn),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),hs.child=e,this.dispatchEvent(hs),hs.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qd),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}qt.DEFAULT_UP=new k(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $i extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yd={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Qo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=Ud(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Qo(o,r,e+1/3),this.g=Qo(o,r,e),this.b=Qo(o,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=Ph[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return $e.workingToColorSpace(Gt.copy(this),e),Math.round(Xe(Gt.r*255,0,255))*65536+Math.round(Xe(Gt.g*255,0,255))*256+Math.round(Xe(Gt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=un){$e.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Ir);const i=qo(hi.h,Ir.h,t),s=qo(hi.s,Ir.s,t),r=qo(hi.l,Ir.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new nt;nt.NAMES=Ph;class $d extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gn=new k,qn=new k,ea=new k,Yn=new k,fs=new k,ds=new k,Gc=new k,ta=new k,na=new k,ia=new k,sa=new St,ra=new St,oa=new St;class Mn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gn.subVectors(e,t),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gn.subVectors(s,t),qn.subVectors(i,t),ea.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(qn),c=gn.dot(ea),l=qn.dot(qn),u=qn.dot(ea),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(o,Yn.y),c.addScaledVector(a,Yn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return sa.setScalar(0),ra.setScalar(0),oa.setScalar(0),sa.fromBufferAttribute(e,t),ra.fromBufferAttribute(e,i),oa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sa,r.x),o.addScaledVector(ra,r.y),o.addScaledVector(oa,r.z),o}static isFrontFacing(e,t,i,s){return gn.subVectors(i,t),qn.subVectors(e,t),gn.cross(qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),gn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;fs.subVectors(s,i),ds.subVectors(r,i),ta.subVectors(e,i);const c=fs.dot(ta),l=ds.dot(ta);if(c<=0&&l<=0)return t.copy(i);na.subVectors(e,s);const u=fs.dot(na),h=ds.dot(na);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(fs,o);ia.subVectors(e,r);const p=fs.dot(ia),_=ds.dot(ia);if(_>=0&&p<=_)return t.copy(r);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(ds,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Gc.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Gc,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gs{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lr.copy(i.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Ur.subVectors(this.max,Ys),ps.subVectors(e.a,Ys),ms.subVectors(e.b,Ys),_s.subVectors(e.c,Ys),fi.subVectors(ms,ps),di.subVectors(_s,ms),Di.subVectors(ps,_s);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Di.z,Di.y,fi.z,0,-fi.x,di.z,0,-di.x,Di.z,0,-Di.x,-fi.y,fi.x,0,-di.y,di.x,0,-Di.y,Di.x,0];return!aa(t,ps,ms,_s,Ur)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,ps,ms,_s,Ur))?!1:(Nr.crossVectors(fi,di),t=[Nr.x,Nr.y,Nr.z],aa(t,ps,ms,_s,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new k,new k,new k,new k,new k,new k,new k,new k],xn=new k,Lr=new Gs,ps=new k,ms=new k,_s=new k,fi=new k,di=new k,Di=new k,Ys=new k,Ur=new k,Nr=new k,Ii=new k;function aa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ii.fromArray(n,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Tt=new k,Fr=new Be;let jd=0;class On{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}}class Dh extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ih extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ft extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Zd=new Gs,$s=new k,la=new k;class Kl{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector($s,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(la.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(la)),this.expandByPoint($s.copy(e.center).sub(la))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Kd=0;const cn=new Et,ca=new qt,gs=new k,sn=new Gs,js=new Gs,Dt=new k;class pn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?Ih:Dh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return ca.lookAt(e),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(sn.min,js.min),sn.expandByPoint(Dt),Dt.addVectors(sn.max,js.max),sn.expandByPoint(Dt)):(sn.expandByPoint(js.min),sn.expandByPoint(js.max))}sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Dt.fromBufferAttribute(a,l),c&&(gs.fromBufferAttribute(e,l),Dt.add(gs)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let g=0;g<i.count;g++)a[g]=new k,c[g]=new k;const l=new k,u=new k,h=new k,f=new Be,p=new Be,_=new Be,v=new k,m=new k;function d(g,S,O){l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,O),f.fromBufferAttribute(r,g),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,O),u.sub(l),h.sub(l),p.sub(f),_.sub(f);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(C),a[g].add(v),a[S].add(v),a[O].add(v),c[g].add(m),c[S].add(m),c[O].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let g=0,S=y.length;g<S;++g){const O=y[g],C=O.start,P=O.count;for(let I=C,L=C+P;I<L;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const b=new k,M=new k,A=new k,T=new k;function w(g){A.fromBufferAttribute(s,g),T.copy(A);const S=a[g];b.copy(S),b.sub(A.multiplyScalar(A.dot(S))).normalize(),M.crossVectors(T,S);const C=M.dot(c[g])<0?-1:1;o.setXYZW(g,b.x,b.y,b.z,C)}for(let g=0,S=y.length;g<S;++g){const O=y[g],C=O.start,P=O.count;for(let I=C,L=C+P;I<L;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,o=new k,a=new k,c=new k,l=new k,u=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let d=0;d<u;d++)f[_++]=l[p++]}return new On(f,u,h)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Jd=0;class Hs extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Ps,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ba&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jn=new k,ua=new k,Or=new k,pi=new k,ha=new k,Br=new k,fa=new k;class Qd{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ua.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(ua);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Or),a=pi.dot(this.direction),c=-pi.dot(Or),l=pi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ua).addScaledVector(Or,f),p}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,s,r){ha.subVectors(t,e),Br.subVectors(i,e),fa.crossVectors(ha,Br);let o=this.direction.dot(fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const c=a*this.direction.dot(Br.crossVectors(pi,Br));if(c<0)return null;const l=a*this.direction.dot(ha.cross(pi));if(l<0||c+l>o)return null;const u=-a*pi.dot(fa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Eo extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hc=new Et,Li=new Qd,zr=new Kl,Wc=new k,Vr=new k,kr=new k,Gr=new k,da=new k,Hr=new k,Xc=new k,Wr=new k;class Ke extends qt{constructor(e=new pn,t=new Eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(da.fromBufferAttribute(h,e),o?Hr.addScaledVector(da,u):Hr.addScaledVector(da.sub(t),u))}t.add(Hr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(zr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(zr,Wc)===null||Li.origin.distanceToSquared(Wc)>(e.far-e.near)**2))&&(Hc.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Hc),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=o[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,A=b;M<A;M+=3){const T=a.getX(M),w=a.getX(M+1),g=a.getX(M+2);s=Xr(this,d,e,i,l,u,h,T,w,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const y=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=Xr(this,o,e,i,l,u,h,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=o[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,A=b;M<A;M+=3){const T=M,w=M+1,g=M+2;s=Xr(this,d,e,i,l,u,h,T,w,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const y=m,b=m+1,M=m+2;s=Xr(this,o,e,i,l,u,h,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ep(n,e,t,i,s,r,o,a){let c;if(e.side===en?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===bi,a),c===null)return null;Wr.copy(a),Wr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Wr);return l<t.near||l>t.far?null:{distance:l,point:Wr.clone(),object:n}}function Xr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Vr),n.getVertexPosition(c,kr),n.getVertexPosition(l,Gr);const u=ep(n,e,t,i,Vr,kr,Gr,Xc);if(u){const h=new k;Mn.getBarycoord(Xc,Vr,kr,Gr,h),s&&(u.uv=Mn.getInterpolatedAttribute(s,a,c,l,h,new Be)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,a,c,l,h,new Be)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,c,l,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new k,materialIndex:0};Mn.getNormal(Vr,kr,Gr,f.normal),u.face=f,u.barycoord=h}return u}class tp extends Kt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=zt,u=zt,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pa=new k,np=new k,ip=new ze;class Oi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=pa.subVectors(i,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ip.getNormalMatrix(e),s=this.coplanarPoint(pa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Kl,sp=new Be(.5,.5),qr=new k;class Jl{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],_=r[8],v=r[9],m=r[10],d=r[11],y=r[12],b=r[13],M=r[14],A=r[15];if(s[0].setComponents(l-o,p-u,d-_,A-y).normalize(),s[1].setComponents(l+o,p+u,d+_,A+y).normalize(),s[2].setComponents(l+a,p+h,d+v,A+b).normalize(),s[3].setComponents(l-a,p-h,d-v,A-b).normalize(),i)s[4].setComponents(c,f,m,M).normalize(),s[5].setComponents(l-c,p-f,d-m,A-M).normalize();else if(s[4].setComponents(l-c,p-f,d-m,A-M).normalize(),t===Ln)s[5].setComponents(l+c,p+f,d+m,A+M).normalize();else if(t===_r)s[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);const t=sp.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qr.x=s.normal.x>0?e.max.x:e.min.x,qr.y=s.normal.y>0?e.max.y:e.min.y,qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lh extends Kt{constructor(e=[],t=es,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gr extends Kt{constructor(e,t,i=Vn,s,r,o,a=zt,c=zt,l,u=oi,h=1){if(u!==oi&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rp extends gr{constructor(e,t=Vn,i=es,s,r,o=zt,a=zt,c,l=oi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Uh extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ht extends pn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(h,2));function _(v,m,d,y,b,M,A,T,w,g,S){const O=M/w,C=A/g,P=M/2,I=A/2,L=T/2,U=w+1,F=g+1;let B=0,$=0;const Z=new k;for(let Q=0;Q<F;Q++){const ie=Q*C-I;for(let J=0;J<U;J++){const De=J*O-P;Z[v]=De*y,Z[m]=ie*b,Z[d]=L,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[d]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(J/w),h.push(1-Q/g),B+=1}}for(let Q=0;Q<g;Q++)for(let ie=0;ie<w;ie++){const J=f+ie+U*Q,De=f+ie+U*(Q+1),He=f+(ie+1)+U*(Q+1),et=f+(ie+1)+U*Q;c.push(J,De,et),c.push(De,He,et),$+=6}a.addGroup(p,$,S),p+=$,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bo extends pn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new k,u=new Be;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=i+h/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class To extends pn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let _=0;const v=[],m=i/2;let d=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ft(h,3)),this.setAttribute("normal",new Ft(f,3)),this.setAttribute("uv",new Ft(p,2));function y(){const M=new k,A=new k;let T=0;const w=(t-e)/i;for(let g=0;g<=r;g++){const S=[],O=g/r,C=O*(t-e)+e;for(let P=0;P<=s;P++){const I=P/s,L=I*c+a,U=Math.sin(L),F=Math.cos(L);A.x=C*U,A.y=-O*i+m,A.z=C*F,h.push(A.x,A.y,A.z),M.set(U,w,F).normalize(),f.push(M.x,M.y,M.z),p.push(I,1-O),S.push(_++)}v.push(S)}for(let g=0;g<s;g++)for(let S=0;S<r;S++){const O=v[S][g],C=v[S+1][g],P=v[S+1][g+1],I=v[S][g+1];(e>0||S!==0)&&(u.push(O,C,I),T+=3),(t>0||S!==r-1)&&(u.push(C,P,I),T+=3)}l.addGroup(d,T,0),d+=T}function b(M){const A=_,T=new Be,w=new k;let g=0;const S=M===!0?e:t,O=M===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*O,0),f.push(0,O,0),p.push(.5,.5),_++;const C=_;for(let P=0;P<=s;P++){const L=P/s*c+a,U=Math.cos(L),F=Math.sin(L);w.x=S*F,w.y=m*O,w.z=S*U,h.push(w.x,w.y,w.z),f.push(0,O,0),T.x=U*.5+.5,T.y=F*.5*O+.5,p.push(T.x,T.y),_++}for(let P=0;P<s;P++){const I=A+P,L=C+P;M===!0?u.push(L,L+1,I):u.push(L+1,L,I),g+=3}l.addGroup(d,g,M===!0?1:2),d+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Po extends pn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const y=d*f-o;for(let b=0;b<l;b++){const M=b*h-r;_.push(M,-y,0),v.push(0,0,1),m.push(b/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){const b=y+l*d,M=y+l*(d+1),A=y+1+l*(d+1),T=y+1+l*d;p.push(b,M,T),p.push(M,A,T)}this.setIndex(p),this.setAttribute("position",new Ft(_,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ao extends pn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new k,f=new k,p=[],_=[],v=[],m=[];for(let d=0;d<=i;d++){const y=[],b=d/i;let M=0;d===0&&o===0?M=.5/t:d===i&&c===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const T=A/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(T+M,1-b),y.push(l++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){const b=u[d][y+1],M=u[d][y],A=u[d+1][y],T=u[d+1][y+1];(d!==0||o>0)&&p.push(b,M,T),(d!==i-1||c<Math.PI)&&p.push(M,A,T)}this.setIndex(p),this.setAttribute("position",new Ft(_,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=zs(n[t]);for(const s in i)e[s]=i[s]}return e}function op(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const ap={clone:zs,merge:$t};var lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=op(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class up extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xs extends Hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hp extends Hs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class fp extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dp extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fh extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ma=new Et,qc=new k,Yc=new k;class pp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(qc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===_r||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yr=new k,$r=new ks,An=new k;class Oh extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yr,$r,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,$r,An.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Yr,$r,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,$r,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mi=new k,$c=new Be,jc=new Be;class hn extends Oh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,$c,jc),t.subVectors(jc,$c)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ql extends Oh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mp extends pp{constructor(){super(new Ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _p extends Fh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new mp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class gp extends Fh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const vs=-90,ys=1;class xp extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(vs,ys,e,t);s.layers=this.layers,this.add(s);const r=new hn(vs,ys,e,t);r.layers=this.layers,this.add(r);const o=new hn(vs,ys,e,t);o.layers=this.layers,this.add(o);const a=new hn(vs,ys,e,t);a.layers=this.layers,this.add(a);const c=new hn(vs,ys,e,t);c.layers=this.layers,this.add(c);const l=new hn(vs,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_r)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class vp extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Zc(n,e,t,i){const s=yp(i);switch(t){case bh:return n*e;case Ah:return n*e/s.components*s.byteLength;case Wl:return n*e/s.components*s.byteLength;case Os:return n*e*2/s.components*s.byteLength;case Xl:return n*e*2/s.components*s.byteLength;case Th:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case ql:return n*e*4/s.components*s.byteLength;case io:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:case Ka:return Math.max(n,16)*Math.max(e,8)/4;case $a:case Za:return Math.max(n,8)*Math.max(e,8)/2;case Ja:case Qa:case tl:case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case el:case il:case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vl:case yl:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ml:case El:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bl:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yp(n){switch(n){case ln:case yh:return{byteLength:1,components:1};case pr:case Sh:case ri:return{byteLength:2,components:1};case Gl:case Hl:return{byteLength:2,components:4};case Vn:case kl:case In:return{byteLength:4,components:1};case Mh:case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Sp(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],v=h[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const v=h[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yp=`vec3 transformedNormal = objectNormal;
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
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
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
#endif`,ym=`uniform sampler2D dfgLUT;
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
}`,Sm=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dm=`#if defined( USE_POINTS_UV )
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
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
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
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o_=`float getShadowMask() {
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
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
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
#endif`,c_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u_=`#ifdef USE_SKINNING
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
#endif`,h_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#ifdef USE_TRANSMISSION
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`#include <common>
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
}`,R_=`#if DEPTH_PACKING == 3200
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
}`,C_=`#define DISTANCE
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
}`,P_=`#define DISTANCE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`uniform float scale;
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
}`,U_=`uniform vec3 diffuse;
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
}`,N_=`#include <common>
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
}`,F_=`uniform vec3 diffuse;
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
}`,O_=`#define LAMBERT
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
}`,B_=`#define LAMBERT
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
}`,z_=`#define MATCAP
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
}`,V_=`#define MATCAP
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
}`,k_=`#define NORMAL
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
}`,G_=`#define NORMAL
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
}`,H_=`#define PHONG
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
}`,W_=`#define PHONG
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
}`,X_=`#define STANDARD
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
}`,q_=`#define STANDARD
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
}`,Y_=`#define TOON
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
}`,$_=`#define TOON
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
}`,j_=`uniform float size;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,J_=`uniform vec3 color;
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
}`,Q_=`uniform float rotation;
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
}`,eg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Mp,alphahash_pars_fragment:Ep,alphamap_fragment:bp,alphamap_pars_fragment:Tp,alphatest_fragment:Ap,alphatest_pars_fragment:wp,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Dp,begin_vertex:Ip,beginnormal_vertex:Lp,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Vp,color_fragment:kp,color_pars_fragment:Gp,color_pars_vertex:Hp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:$p,displacementmap_vertex:jp,emissivemap_fragment:Zp,emissivemap_pars_fragment:Kp,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:um,lights_lambert_fragment:hm,lights_lambert_pars_fragment:fm,lights_pars_begin:dm,lights_toon_fragment:mm,lights_toon_pars_fragment:_m,lights_phong_fragment:gm,lights_phong_pars_fragment:xm,lights_physical_fragment:vm,lights_physical_pars_fragment:ym,lights_fragment_begin:Sm,lights_fragment_maps:Mm,lights_fragment_end:Em,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:wm,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Dm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Um,morphcolor_vertex:Nm,morphnormal_vertex:Fm,morphtarget_pars_vertex:Om,morphtarget_vertex:Bm,normal_fragment_begin:zm,normal_fragment_maps:Vm,normal_pars_fragment:km,normal_pars_vertex:Gm,normal_vertex:Hm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:$m,opaque_fragment:jm,packing:Zm,premultiplied_alpha_fragment:Km,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:e_,roughnessmap_fragment:t_,roughnessmap_pars_fragment:n_,shadowmap_pars_fragment:i_,shadowmap_pars_vertex:s_,shadowmap_vertex:r_,shadowmask_pars_fragment:o_,skinbase_vertex:a_,skinning_pars_vertex:l_,skinning_vertex:c_,skinnormal_vertex:u_,specularmap_fragment:h_,specularmap_pars_fragment:f_,tonemapping_fragment:d_,tonemapping_pars_fragment:p_,transmission_fragment:m_,transmission_pars_fragment:__,uv_pars_fragment:g_,uv_pars_vertex:x_,uv_vertex:v_,worldpos_vertex:y_,background_vert:S_,background_frag:M_,backgroundCube_vert:E_,backgroundCube_frag:b_,cube_vert:T_,cube_frag:A_,depth_vert:w_,depth_frag:R_,distance_vert:C_,distance_frag:P_,equirect_vert:D_,equirect_frag:I_,linedashed_vert:L_,linedashed_frag:U_,meshbasic_vert:N_,meshbasic_frag:F_,meshlambert_vert:O_,meshlambert_frag:B_,meshmatcap_vert:z_,meshmatcap_frag:V_,meshnormal_vert:k_,meshnormal_frag:G_,meshphong_vert:H_,meshphong_frag:W_,meshphysical_vert:X_,meshphysical_frag:q_,meshtoon_vert:Y_,meshtoon_frag:$_,points_vert:j_,points_frag:Z_,shadow_vert:K_,shadow_frag:J_,sprite_vert:Q_,sprite_frag:eg},ue={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Pn={basic:{uniforms:$t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:$t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:$t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:$t([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:$t([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:$t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:$t([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:$t([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:$t([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:$t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:$t([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:$t([ue.common,ue.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:$t([ue.lights,ue.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Pn.physical={uniforms:$t([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const jr={r:0,b:0,g:0},Ni=new kn,tg=new Et;function ng(n,e,t,i,s,r){const o=new nt(0);let a=s===!0?0:1,c,l,u=null,h=0,f=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function _(y){let b=!1;const M=p(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),b=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,b){const M=p(b);M&&(M.isCubeTexture||M.mapping===Co)?(l===void 0&&(l=new Ke(new Ht(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:zs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Ni.copy(b.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(Ni)),l.material.toneMapped=$e.getTransfer(M.colorSpace)!==rt,(u!==M||h!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ke(new Po(2,2),new Gn({name:"BackgroundMaterial",uniforms:zs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$e.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,b){y.getRGB(jr,Nh(n)),t.buffers.color.setClear(jr.r,jr.g,jr.b,b,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:_,addToRenderList:v,dispose:d}}function ig(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(C,P,I,L,U){let F=!1;const B=h(C,L,I,P);r!==B&&(r=B,l(r.object)),F=p(C,L,I,U),F&&_(C,L,I,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(C,P,I,L),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function h(C,P,I,L){const U=L.wireframe===!0;let F=i[P.id];F===void 0&&(F={},i[P.id]=F);const B=C.isInstancedMesh===!0?C.id:0;let $=F[B];$===void 0&&($={},F[B]=$);let Z=$[I.id];Z===void 0&&(Z={},$[I.id]=Z);let Q=Z[U];return Q===void 0&&(Q=f(c()),Z[U]=Q),Q}function f(C){const P=[],I=[],L=[];for(let U=0;U<t;U++)P[U]=0,I[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:L,object:C,attributes:{},index:null}}function p(C,P,I,L){const U=r.attributes,F=P.attributes;let B=0;const $=I.getAttributes();for(const Z in $)if($[Z].location>=0){const ie=U[Z];let J=F[Z];if(J===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),ie===void 0||ie.attribute!==J||J&&ie.data!==J.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function _(C,P,I,L){const U={},F=P.attributes;let B=0;const $=I.getAttributes();for(const Z in $)if($[Z].location>=0){let ie=F[Z];ie===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor));const J={};J.attribute=ie,ie&&ie.data&&(J.data=ie.data),U[Z]=J,B++}r.attributes=U,r.attributesNum=B,r.index=L}function v(){const C=r.newAttributes;for(let P=0,I=C.length;P<I;P++)C[P]=0}function m(C){d(C,0)}function d(C,P){const I=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;I[C]=1,L[C]===0&&(n.enableVertexAttribArray(C),L[C]=1),U[C]!==P&&(n.vertexAttribDivisor(C,P),U[C]=P)}function y(){const C=r.newAttributes,P=r.enabledAttributes;for(let I=0,L=P.length;I<L;I++)P[I]!==C[I]&&(n.disableVertexAttribArray(I),P[I]=0)}function b(C,P,I,L,U,F,B){B===!0?n.vertexAttribIPointer(C,P,I,U,F):n.vertexAttribPointer(C,P,I,L,U,F)}function M(C,P,I,L){v();const U=L.attributes,F=I.getAttributes(),B=P.defaultAttributeValues;for(const $ in F){const Z=F[$];if(Z.location>=0){let Q=U[$];if(Q===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){const ie=Q.normalized,J=Q.itemSize,De=e.get(Q);if(De===void 0)continue;const He=De.buffer,et=De.type,Y=De.bytesPerElement,ee=et===n.INT||et===n.UNSIGNED_INT||Q.gpuType===kl;if(Q.isInterleavedBufferAttribute){const se=Q.data,Ce=se.stride,xe=Q.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<Z.locationSize;we++)d(Z.location+we,se.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<Z.locationSize;we++)m(Z.location+we);n.bindBuffer(n.ARRAY_BUFFER,He);for(let we=0;we<Z.locationSize;we++)b(Z.location+we,J/Z.locationSize,et,ie,Ce*Y,(xe+J/Z.locationSize*we)*Y,ee)}else{if(Q.isInstancedBufferAttribute){for(let se=0;se<Z.locationSize;se++)d(Z.location+se,Q.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let se=0;se<Z.locationSize;se++)m(Z.location+se);n.bindBuffer(n.ARRAY_BUFFER,He);for(let se=0;se<Z.locationSize;se++)b(Z.location+se,J/Z.locationSize,et,ie,J*Y,J/Z.locationSize*se*Y,ee)}}else if(B!==void 0){const ie=B[$];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(Z.location,ie);break;case 3:n.vertexAttrib3fv(Z.location,ie);break;case 4:n.vertexAttrib4fv(Z.location,ie);break;default:n.vertexAttrib1fv(Z.location,ie)}}}}y()}function A(){S();for(const C in i){const P=i[C];for(const I in P){const L=P[I];for(const U in L){const F=L[U];for(const B in F)u(F[B].object),delete F[B];delete L[U]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const P=i[C.id];for(const I in P){const L=P[I];for(const U in L){const F=L[U];for(const B in F)u(F[B].object),delete F[B];delete L[U]}}delete i[C.id]}function w(C){for(const P in i){const I=i[P];for(const L in I){const U=I[L];if(U[C.id]===void 0)continue;const F=U[C.id];for(const B in F)u(F[B].object),delete F[B];delete U[C.id]}}}function g(C){for(const P in i){const I=i[P],L=C.isInstancedMesh===!0?C.id:0,U=I[L];if(U!==void 0){for(const F in U){const B=U[F];for(const $ in B)u(B[$].object),delete B[$];delete U[F]}delete I[L],Object.keys(I).length===0&&delete i[P]}}}function S(){O(),o=!0,r!==s&&(r=s,l(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:O,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function sg(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*f[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==En&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const g=w===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ln&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==In&&!g)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Fe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:A,samples:T}}function og(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Oi,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const y=r?0:i,b=y*4;let M=d.clippingState||null;c.value=M,M=u(_,f,b,p);for(let A=0;A!==b;++A)M[A]=t[A];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const d=p+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,M=p;b!==v;++b,M+=4)o.copy(h[b]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const xi=4,Kc=[.125,.215,.35,.446,.526,.582],Wi=20,ag=256,Zs=new Ql,Jc=new nt;let _a=null,ga=0,xa=0,va=!1;const lg=new k;class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=lg}=r;_a=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,ga,xa),this._renderer.xr.enabled=va,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:ri,format:En,colorSpace:Bs,depthBuffer:!1},s=eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cg(r)),this._blurMaterial=hg(r,e,t),this._ggxMaterial=ug(r,e,t)}return s}_compileMaterial(e){const t=new Ke(new pn,e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,s,r){const c=new hn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Jc),h.toneMapping=Nn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new Ht,new Eo({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,d=!0):(m.color.copy(Jc),d=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const A=this._cubeSize;Ss(s,M*A,b>2?A:0,A,A),h.setRenderTarget(s),d&&h.render(v,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===es||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ss(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=0+l*1.25,p=h*f,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-xi?i-_+xi:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,Ss(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(a,Zs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,Ss(e,m,d,3*v,2*v),s.setRenderTarget(e),s.render(a,Zs)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=l;const f=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Wi-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):Wi;m>Wi&&Fe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const d=[];let y=0;for(let w=0;w<Wi;++w){const g=w/v,S=Math.exp(-g*g/2);d.push(S),w===0?y+=S:w<m&&(y+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const M=this._sizeLods[s],A=3*M*(s>b-xi?s-b+xi:0),T=4*(this._cubeSize-M);Ss(t,A,T,3*M,2*M),c.setRenderTarget(t),c.render(h,Zs)}}function cg(n){const e=[],t=[],i=[];let s=n;const r=n-xi+1+Kc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-xi?c=Kc[o-n+xi-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,v=3,m=2,d=1,y=new Float32Array(v*_*p),b=new Float32Array(m*_*p),M=new Float32Array(d*_*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,g=T>2?0:-1,S=[w,g,0,w+2/3,g,0,w+2/3,g+1,0,w,g,0,w+2/3,g+1,0,w,g+1,0];y.set(S,v*_*T),b.set(f,m*_*T);const O=[T,T,T,T,T,T];M.set(O,d*_*T)}const A=new pn;A.setAttribute("position",new On(y,v)),A.setAttribute("uv",new On(b,m)),A.setAttribute("faceIndex",new On(M,d)),i.push(new Ke(A,null)),s>xi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function eu(n,e,t){const i=new Fn(n,e,t);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ug(n,e,t){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ag,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Do(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function hg(n,e,t){const i=new Float32Array(Wi),s=new k(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Do(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function tu(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function nu(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Do(){return`

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
	`}class zh extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Lh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:ni});r.uniforms.tEquirect.value=t;const o=new Ke(s,r),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=Xt),new xp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function fg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?o(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===Go||p===Ho)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const v=new zh(_.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,_=p===Go||p===Ho,v=p===es||p===Fs;if(_||v){let m=t.get(f);const d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Qc(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return _&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new Qc(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,p){return p===Go?f.mapping=es:p===Ho&&(f.mapping=Fs),f}function c(f){let p=0;const _=6;for(let v=0;v<_;v++)f[v]!==void 0&&p++;return p===_}function l(f){const p=f.target;p.removeEventListener("dispose",l);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function dg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Mo("WebGLRenderer: "+i+" extension not supported."),s}}}function pg(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,_=h.attributes.position;let v=0;if(_===void 0)return;if(p!==null){const y=p.array;v=p.version;for(let b=0,M=y.length;b<M;b+=3){const A=y[b+0],T=y[b+1],w=y[b+2];f.push(A,T,T,w,w,A)}}else{const y=_.array;v=_.version;for(let b=0,M=y.length/3-1;b<M;b+=3){const A=b+0,T=b+1,w=b+2;f.push(A,T,T,w,w,A)}}const m=new(_.count>=65535?Ih:Dh)(f,1);m.version=v;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function mg(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function l(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function h(f,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,_);let d=0;for(let y=0;y<_;y++)d+=p[y]*v[y];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _g(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function gg(n,e,t){const i=new WeakMap,s=new St;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let O=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",O)};var p=O;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let A=a.attributes.position.count*M,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*T*4*h),g=new Rh(w,A,T,h);g.type=In,g.needsUpdate=!0;const S=M*4;for(let C=0;C<h;C++){const P=d[C],I=y[C],L=b[C],U=A*T*4*C;for(let F=0;F<P.count;F++){const B=F*S;_===!0&&(s.fromBufferAttribute(P,F),w[U+B+0]=s.x,w[U+B+1]=s.y,w[U+B+2]=s.z,w[U+B+3]=0),v===!0&&(s.fromBufferAttribute(I,F),w[U+B+4]=s.x,w[U+B+5]=s.y,w[U+B+6]=s.z,w[U+B+7]=0),m===!0&&(s.fromBufferAttribute(L,F),w[U+B+8]=s.x,w[U+B+9]=s.y,w[U+B+10]=s.z,w[U+B+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:g,size:new Be(A,T)},i.set(a,f),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function xg(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const vg={[fh]:"LINEAR_TONE_MAPPING",[dh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[mh]:"ACES_FILMIC_TONE_MAPPING",[gh]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[_h]:"CUSTOM_TONE_MAPPING"};function yg(n,e,t,i,s){const r=new Fn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Fn(e,t,{type:ri,depthBuffer:!1,stencilBuffer:!1}),a=new pn;a.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ft([0,2,0,0,2,0],2));const c=new up({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Ke(a,c),u=new Ql(-1,1,1,-1,0,1);let h=null,f=null,p=!1,_,v=null,m=[],d=!1;this.setSize=function(y,b){r.setSize(y,b),o.setSize(y,b);for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(y,b)}},this.setEffects=function(y){m=y,d=m.length>0&&m[0].isRenderPass===!0;const b=r.width,M=r.height;for(let A=0;A<m.length;A++){const T=m[A];T.setSize&&T.setSize(b,M)}},this.begin=function(y,b){if(p||y.toneMapping===Nn&&m.length===0)return!1;if(v=b,b!==null){const M=b.width,A=b.height;(r.width!==M||r.height!==A)&&this.setSize(M,A)}return d===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=Nn,!0},this.hasRenderPass=function(){return d},this.end=function(y,b){y.toneMapping=_,p=!0;let M=r,A=o;for(let T=0;T<m.length;T++){const w=m[T];if(w.enabled!==!1&&(w.render(y,A,M,b),w.needsSwap!==!1)){const g=M;M=A,A=g}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,c.defines={},$e.getTransfer(h)===rt&&(c.defines.SRGB_TRANSFER="");const T=vg[f];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(v),y.render(l,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Vh=new Kt,wl=new gr(1,1),kh=new Rh,Gh=new Vd,Hh=new Lh,iu=[],su=[],ru=new Float32Array(16),ou=new Float32Array(9),au=new Float32Array(4);function Ws(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Io(n,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function Tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;au.set(i),n.uniformMatrix2fv(this.addr,!1,au),Ct(t,i)}}function Ag(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;ou.set(i),n.uniformMatrix3fv(this.addr,!1,ou),Ct(t,i)}}function wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;ru.set(i),n.uniformMatrix4fv(this.addr,!1,ru),Ct(t,i)}}function Rg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function Ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function Fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wl.compareFunction=t.isReversedDepthBuffer()?jl:$l,r=wl):r=Vh,t.setTexture2D(e||r,s)}function Og(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Gh,s)}function Bg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Hh,s)}function zg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||kh,s)}function Vg(n){switch(n){case 5126:return Sg;case 35664:return Mg;case 35665:return Eg;case 35666:return bg;case 35674:return Tg;case 35675:return Ag;case 35676:return wg;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Dg;case 5125:return Ig;case 36294:return Lg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}function kg(n,e){n.uniform1fv(this.addr,e)}function Gg(n,e){const t=Ws(e,this.size,2);n.uniform2fv(this.addr,t)}function Hg(n,e){const t=Ws(e,this.size,3);n.uniform3fv(this.addr,t)}function Wg(n,e){const t=Ws(e,this.size,4);n.uniform4fv(this.addr,t)}function Xg(n,e){const t=Ws(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qg(n,e){const t=Ws(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yg(n,e){const t=Ws(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $g(n,e){n.uniform1iv(this.addr,e)}function jg(n,e){n.uniform2iv(this.addr,e)}function Zg(n,e){n.uniform3iv(this.addr,e)}function Kg(n,e){n.uniform4iv(this.addr,e)}function Jg(n,e){n.uniform1uiv(this.addr,e)}function Qg(n,e){n.uniform2uiv(this.addr,e)}function e0(n,e){n.uniform3uiv(this.addr,e)}function t0(n,e){n.uniform4uiv(this.addr,e)}function n0(n,e,t){const i=this.cache,s=e.length,r=Io(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=wl:o=Vh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function i0(n,e,t){const i=this.cache,s=e.length,r=Io(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Gh,r[o])}function s0(n,e,t){const i=this.cache,s=e.length,r=Io(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hh,r[o])}function r0(n,e,t){const i=this.cache,s=e.length,r=Io(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kh,r[o])}function o0(n){switch(n){case 5126:return kg;case 35664:return Gg;case 35665:return Hg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return $g;case 35667:case 35671:return jg;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return Jg;case 36294:return Qg;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}class a0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vg(t.type)}}class l0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o0(t.type)}}class c0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function lu(n,e){n.seq.push(e),n.map[e.id]=e}function u0(n,e,t){const i=n.name,s=i.length;for(ya.lastIndex=0;;){const r=ya.exec(i),o=ya.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){lu(t,l===void 0?new a0(a,n,e):new l0(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new c0(a),lu(t,h)),t=h}}}class ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);u0(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function cu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const h0=37297;let f0=0;function d0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const uu=new ze;function p0(n){$e._getMatrix(uu,$e.workingColorSpace,n);const e=`mat3( ${uu.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case yo:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+d0(n.getShaderSource(e),a)}else return r}function m0(n,e){const t=p0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const _0={[fh]:"Linear",[dh]:"Reinhard",[ph]:"Cineon",[mh]:"ACESFilmic",[gh]:"AgX",[xh]:"Neutral",[_h]:"Custom"};function g0(n,e){const t=_0[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new k;function x0(){$e.getLuminanceCoefficients(Zr);const n=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function y0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function S0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ir(n){return n!==""}function fu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function du(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(n){return n.replace(M0,b0)}const E0=new Map;function b0(n,e){let t=Ve[e];if(t===void 0){const i=E0.get(e);if(i!==void 0)t=Ve[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(n){return n.replace(T0,A0)}function A0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const w0={[no]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function R0(n){return w0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C0={[es]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE_UV"};function P0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":C0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const D0={[Fs]:"ENVMAP_MODE_REFRACTION"};function I0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":D0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L0={[hh]:"ENVMAP_BLENDING_MULTIPLY",[vd]:"ENVMAP_BLENDING_MIX",[yd]:"ENVMAP_BLENDING_ADD"};function U0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":L0[n.combine]||"ENVMAP_BLENDING_NONE"}function N0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function F0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=R0(t),l=P0(t),u=I0(t),h=U0(t),f=N0(t),p=v0(t),_=y0(r),v=s.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ir).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ir).join(`
`),d.length>0&&(d+=`
`)):(m=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),d=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Nn?g0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,m0("linearToOutputTexel",t.outputColorSpace),x0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),o=Rl(o),o=fu(o,t),o=du(o,t),a=Rl(a),a=fu(a,t),a=du(a,t),o=pu(o),a=pu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=y+m+o,M=y+d+a,A=cu(s,s.VERTEX_SHADER,b),T=cu(s,s.FRAGMENT_SHADER,M);s.attachShader(v,A),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(C){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(v)||"",I=s.getShaderInfoLog(A)||"",L=s.getShaderInfoLog(T)||"",U=P.trim(),F=I.trim(),B=L.trim();let $=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,T);else{const Q=hu(s,A,"vertex"),ie=hu(s,T,"fragment");Je("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+Q+`
`+ie)}else U!==""?Fe("WebGLProgram: Program Info Log:",U):(F===""||B==="")&&(Z=!1);Z&&(C.diagnostics={runnable:$,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(A),s.deleteShader(T),g=new ao(s,v),S=S0(s,v)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(v,h0)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let O0=0;class B0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new z0(e),t.set(e,i)),i}}class z0{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}}function V0(n,e,t,i,s,r){const o=new Ch,a=new B0,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return c.add(g),g===0?"uv":`uv${g}`}function v(g,S,O,C,P){const I=C.fog,L=P.geometry,U=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,F=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=e.get(g.envMap||U,F),$=B&&B.mapping===Co?B.image.height:null,Z=p[g.type];g.precision!==null&&(f=i.getMaxPrecision(g.precision),f!==g.precision&&Fe("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ie=Q!==void 0?Q.length:0;let J=0;L.morphAttributes.position!==void 0&&(J=1),L.morphAttributes.normal!==void 0&&(J=2),L.morphAttributes.color!==void 0&&(J=3);let De,He,et,Y;if(Z){const st=Pn[Z];De=st.vertexShader,He=st.fragmentShader}else De=g.vertexShader,He=g.fragmentShader,a.update(g),et=a.getVertexShaderID(g),Y=a.getFragmentShaderID(g);const ee=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),Ce=P.isInstancedMesh===!0,xe=P.isBatchedMesh===!0,we=!!g.map,ut=!!g.matcap,Le=!!B,qe=!!g.aoMap,je=!!g.lightMap,Ue=!!g.bumpMap,ft=!!g.normalMap,D=!!g.displacementMap,_t=!!g.emissiveMap,Ye=!!g.metalnessMap,it=!!g.roughnessMap,pe=g.anisotropy>0,R=g.clearcoat>0,x=g.dispersion>0,z=g.iridescence>0,j=g.sheen>0,K=g.transmission>0,X=pe&&!!g.anisotropyMap,ge=R&&!!g.clearcoatMap,ae=R&&!!g.clearcoatNormalMap,be=R&&!!g.clearcoatRoughnessMap,Ie=z&&!!g.iridescenceMap,te=z&&!!g.iridescenceThicknessMap,re=j&&!!g.sheenColorMap,ve=j&&!!g.sheenRoughnessMap,Se=!!g.specularMap,de=!!g.specularColorMap,ke=!!g.specularIntensityMap,N=K&&!!g.transmissionMap,le=K&&!!g.thicknessMap,oe=!!g.gradientMap,_e=!!g.alphaMap,ne=g.alphaTest>0,q=!!g.alphaHash,ye=!!g.extensions;let Ne=Nn;g.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const ht={shaderID:Z,shaderType:g.type,shaderName:g.name,vertexShader:De,fragmentShader:He,defines:g.defines,customVertexShaderID:et,customFragmentShaderID:Y,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:xe,batchingColor:xe&&P._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&P.instanceColor!==null,instancingMorph:Ce&&P.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Bs,alphaToCoverage:!!g.alphaToCoverage,map:we,matcap:ut,envMap:Le,envMapMode:Le&&B.mapping,envMapCubeUVHeight:$,aoMap:qe,lightMap:je,bumpMap:Ue,normalMap:ft,displacementMap:D,emissiveMap:_t,normalMapObjectSpace:ft&&g.normalMapType===Ed,normalMapTangentSpace:ft&&g.normalMapType===Yl,metalnessMap:Ye,roughnessMap:it,anisotropy:pe,anisotropyMap:X,clearcoat:R,clearcoatMap:ge,clearcoatNormalMap:ae,clearcoatRoughnessMap:be,dispersion:x,iridescence:z,iridescenceMap:Ie,iridescenceThicknessMap:te,sheen:j,sheenColorMap:re,sheenRoughnessMap:ve,specularMap:Se,specularColorMap:de,specularIntensityMap:ke,transmission:K,transmissionMap:N,thicknessMap:le,gradientMap:oe,opaque:g.transparent===!1&&g.blending===Ps&&g.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:q,combine:g.combine,mapUv:we&&_(g.map.channel),aoMapUv:qe&&_(g.aoMap.channel),lightMapUv:je&&_(g.lightMap.channel),bumpMapUv:Ue&&_(g.bumpMap.channel),normalMapUv:ft&&_(g.normalMap.channel),displacementMapUv:D&&_(g.displacementMap.channel),emissiveMapUv:_t&&_(g.emissiveMap.channel),metalnessMapUv:Ye&&_(g.metalnessMap.channel),roughnessMapUv:it&&_(g.roughnessMap.channel),anisotropyMapUv:X&&_(g.anisotropyMap.channel),clearcoatMapUv:ge&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:re&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(g.sheenRoughnessMap.channel),specularMapUv:Se&&_(g.specularMap.channel),specularColorMapUv:de&&_(g.specularColorMap.channel),specularIntensityMapUv:ke&&_(g.specularIntensityMap.channel),transmissionMapUv:N&&_(g.transmissionMap.channel),thicknessMapUv:le&&_(g.thicknessMap.channel),alphaMapUv:_e&&_(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ft||pe),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(we||_e),fog:!!I,useFog:g.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&ft===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:se,skinning:P.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:J,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:we&&g.map.isVideoTexture===!0&&$e.getTransfer(g.map.colorSpace)===rt,decodeVideoTextureEmissive:_t&&g.emissiveMap.isVideoTexture===!0&&$e.getTransfer(g.emissiveMap.colorSpace)===rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Zn,flipSided:g.side===en,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ye&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&g.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function m(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const O in g.defines)S.push(O),S.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(d(S,g),y(S,g),S.push(n.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function d(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function y(g,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),g.push(o.mask)}function b(g){const S=p[g.type];let O;if(S){const C=Pn[S];O=ap.clone(C.uniforms)}else O=g.uniforms;return O}function M(g,S){let O=u.get(S);return O!==void 0?++O.usedTimes:(O=new F0(n,S,g,s),l.push(O),u.set(S,O)),O}function A(g){if(--g.usedTimes===0){const S=l.indexOf(g);l[S]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function T(g){a.remove(g)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:w}}function k0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function G0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function _u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,_,v,m,d){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:p,material:_,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},n[e]=y):(y.id=f.id,y.object=f,y.geometry=p,y.material=_,y.materialVariant=o(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=m,y.group=d),e++,y}function c(f,p,_,v,m,d){const y=a(f,p,_,v,m,d);_.transmission>0?i.push(y):_.transparent===!0?s.push(y):t.push(y)}function l(f,p,_,v,m,d){const y=a(f,p,_,v,m,d);_.transmission>0?i.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function u(f,p){t.length>1&&t.sort(f||G0),i.length>1&&i.sort(p||_u),s.length>1&&s.sort(p||_u)}function h(){for(let f=e,p=n.length;f<p;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function H0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new gu,n.set(i,[o])):s>=r.length?(o=new gu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function W0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new nt};break;case"SpotLight":t={position:new k,direction:new k,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function X0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let q0=0;function Y0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $0(n){const e=new W0,t=X0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const s=new k,r=new Et,o=new Et;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,y=0,b=0,M=0,A=0,T=0,w=0;l.sort(Y0);for(let S=0,O=l.length;S<O;S++){const C=l[S],P=C.color,I=C.intensity,L=C.distance;let U=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Os?U=C.shadow.map.texture:U=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=P.r*I,h+=P.g*I,f+=P.b*I;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],I);w++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,$=t.get(C);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=C.shadow.matrix,y++}i.directional[p]=F,p++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(P).multiplyScalar(I),F.distance=L,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[v]=F;const B=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,B.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[v]=B.matrix,C.castShadow){const $=t.get(C);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=U,M++}v++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(P).multiplyScalar(I),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=F,m++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const B=C.shadow,$=t.get(C);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=C.shadow.matrix,b++}i.point[_]=F,_++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(I),F.groundColor.copy(C.groundColor).multiplyScalar(I),i.hemi[d]=F,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const g=i.hash;(g.directionalLength!==p||g.pointLength!==_||g.spotLength!==v||g.rectAreaLength!==m||g.hemiLength!==d||g.numDirectionalShadows!==y||g.numPointShadows!==b||g.numSpotShadows!==M||g.numSpotMaps!==A||g.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,g.directionalLength=p,g.pointLength=_,g.spotLength=v,g.rectAreaLength=m,g.hemiLength=d,g.numDirectionalShadows=y,g.numPointShadows=b,g.numSpotShadows=M,g.numSpotMaps=A,g.numLightProbes=w,i.version=q0++)}function c(l,u){let h=0,f=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let d=0,y=l.length;d<y;d++){const b=l[d];if(b.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function xu(n){const e=new $0(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function j0(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new xu(n),e.set(s,[a])):r>=o.length?(a=new xu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
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
}`,J0=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Q0=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],vu=new Et,Ks=new k,Sa=new k;function ex(n,e,t){let i=new Jl;const s=new Be,r=new Be,o=new St,a=new fp,c=new dp,l={},u=t.maxTextureSize,h={[bi]:en,[en]:bi,[Zn]:Zn},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Z0,fragmentShader:K0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ke(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let d=this.type;this.render=function(T,w,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===ed&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=no);const S=n.getRenderTarget(),O=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(ni),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=d!==this.type;I&&w.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(U=>U.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,U=T.length;L<U;L++){const F=T[L],B=F.shadow;if(B===void 0){Fe("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const $=B.getFrameExtents();s.multiply($),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,B.mapSize.y=r.y));const Z=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Z,B.map===null||I===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===nr){if(F.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Fn(s.x,s.y,{format:Os,type:ri,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new gr(s.x,s.y,In),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=oi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt}else F.isPointLight?(B.map=new zh(s.x),B.map.depthTexture=new rp(s.x,Vn)):(B.map=new Fn(s.x,s.y),B.map.depthTexture=new gr(s.x,s.y,Vn)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=oi,this.type===no?(B.map.depthTexture.compareFunction=Z?jl:$l,B.map.depthTexture.minFilter=Xt,B.map.depthTexture.magFilter=Xt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt);B.camera.updateProjectionMatrix()}const Q=B.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<Q;ie++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(B.map),n.clear());const J=B.getViewport(ie);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),P.viewport(o)}if(F.isPointLight){const J=B.camera,De=B.matrix,He=F.distance||J.far;He!==J.far&&(J.far=He,J.updateProjectionMatrix()),Ks.setFromMatrixPosition(F.matrixWorld),J.position.copy(Ks),Sa.copy(J.position),Sa.add(J0[ie]),J.up.copy(Q0[ie]),J.lookAt(Sa),J.updateMatrixWorld(),De.makeTranslation(-Ks.x,-Ks.y,-Ks.z),vu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),B._frustum.setFromProjectionMatrix(vu,J.coordinateSystem,J.reversedDepth)}else B.updateMatrices(F);i=B.getFrustum(),M(w,g,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===nr&&y(B,g),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,O,C)};function y(T,w){const g=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fn(s.x,s.y,{format:Os,type:ri})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,g,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,g,p,v,null)}function b(T,w,g,S){let O=null;const C=g.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)O=C;else if(O=g.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const P=O.uuid,I=w.uuid;let L=l[P];L===void 0&&(L={},l[P]=L);let U=L[I];U===void 0&&(U=O.clone(),L[I]=U,w.addEventListener("dispose",A)),O=U}if(O.visible=w.visible,O.wireframe=w.wireframe,S===nr?O.side=w.shadowSide!==null?w.shadowSide:w.side:O.side=w.shadowSide!==null?w.shadowSide:h[w.side],O.alphaMap=w.alphaMap,O.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,O.map=w.map,O.clipShadows=w.clipShadows,O.clippingPlanes=w.clippingPlanes,O.clipIntersection=w.clipIntersection,O.displacementMap=w.displacementMap,O.displacementScale=w.displacementScale,O.displacementBias=w.displacementBias,O.wireframeLinewidth=w.wireframeLinewidth,O.linewidth=w.linewidth,g.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const P=n.properties.get(O);P.light=g}return O}function M(T,w,g,S,O){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===nr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,T.matrixWorld);const I=e.update(T),L=T.material;if(Array.isArray(L)){const U=I.groups;for(let F=0,B=U.length;F<B;F++){const $=U[F],Z=L[$.materialIndex];if(Z&&Z.visible){const Q=b(T,Z,S,O);T.onBeforeShadow(n,T,w,g,I,Q,$),n.renderBufferDirect(g,null,I,Q,T,$),T.onAfterShadow(n,T,w,g,I,Q,$)}}}else if(L.visible){const U=b(T,L,S,O);T.onBeforeShadow(n,T,w,g,I,U,null),n.renderBufferDirect(g,null,I,U,T,null),T.onAfterShadow(n,T,w,g,I,U,null)}}const P=T.children;for(let I=0,L=P.length;I<L;I++)M(P[I],w,g,S,O)}function A(T){T.target.removeEventListener("dispose",A);for(const g in l){const S=l[g],O=T.target.uuid;O in S&&(S[O].dispose(),delete S[O])}}}function tx(n,e){function t(){let N=!1;const le=new St;let oe=null;const _e=new St(0,0,0,0);return{setMask:function(ne){oe!==ne&&!N&&(n.colorMask(ne,ne,ne,ne),oe=ne)},setLocked:function(ne){N=ne},setClear:function(ne,q,ye,Ne,ht){ht===!0&&(ne*=Ne,q*=Ne,ye*=Ne),le.set(ne,q,ye,Ne),_e.equals(le)===!1&&(n.clearColor(ne,q,ye,Ne),_e.copy(le))},reset:function(){N=!1,oe=null,_e.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,oe=null,_e=null,ne=null;return{setReversed:function(q){if(le!==q){const ye=e.get("EXT_clip_control");q?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),le=q;const Ne=ne;ne=null,this.setClear(Ne)}},getReversed:function(){return le},setTest:function(q){q?ee(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(q){oe!==q&&!N&&(n.depthMask(q),oe=q)},setFunc:function(q){if(le&&(q=Ld[q]),_e!==q){switch(q){case za:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case ka:n.depthFunc(n.LESS);break;case Ns:n.depthFunc(n.LEQUAL);break;case Ga:n.depthFunc(n.EQUAL);break;case Ha:n.depthFunc(n.GEQUAL);break;case Wa:n.depthFunc(n.GREATER);break;case Xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=q}},setLocked:function(q){N=q},setClear:function(q){ne!==q&&(ne=q,le&&(q=1-q),n.clearDepth(q))},reset:function(){N=!1,oe=null,_e=null,ne=null,le=!1}}}function s(){let N=!1,le=null,oe=null,_e=null,ne=null,q=null,ye=null,Ne=null,ht=null;return{setTest:function(st){N||(st?ee(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(st){le!==st&&!N&&(n.stencilMask(st),le=st)},setFunc:function(st,Hn,Wn){(oe!==st||_e!==Hn||ne!==Wn)&&(n.stencilFunc(st,Hn,Wn),oe=st,_e=Hn,ne=Wn)},setOp:function(st,Hn,Wn){(q!==st||ye!==Hn||Ne!==Wn)&&(n.stencilOp(st,Hn,Wn),q=st,ye=Hn,Ne=Wn)},setLocked:function(st){N=st},setClear:function(st){ht!==st&&(n.clearStencil(st),ht=st)},reset:function(){N=!1,le=null,oe=null,_e=null,ne=null,q=null,ye=null,Ne=null,ht=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,y=null,b=null,M=null,A=null,T=null,w=new nt(0,0,0),g=0,S=!1,O=null,C=null,P=null,I=null,L=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),F=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),F=B>=2);let Z=null,Q={};const ie=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),De=new St().fromArray(ie),He=new St().fromArray(J);function et(N,le,oe,_e){const ne=new Uint8Array(4),q=n.createTexture();n.bindTexture(N,q),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<oe;ye++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(le+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return q}const Y={};Y[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(Ns),Ue(!1),ft(Ec),ee(n.CULL_FACE),qe(ni);function ee(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function se(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ce(N,le){return h[N]!==le?(n.bindFramebuffer(N,le),h[N]=le,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=le),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=le),!0):!1}function xe(N,le){let oe=p,_e=!1;if(N){oe=f.get(le),oe===void 0&&(oe=[],f.set(le,oe));const ne=N.textures;if(oe.length!==ne.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let q=0,ye=ne.length;q<ye;q++)oe[q]=n.COLOR_ATTACHMENT0+q;oe.length=ne.length,_e=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,_e=!0);_e&&n.drawBuffers(oe)}function we(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const ut={[Hi]:n.FUNC_ADD,[nd]:n.FUNC_SUBTRACT,[id]:n.FUNC_REVERSE_SUBTRACT};ut[sd]=n.MIN,ut[rd]=n.MAX;const Le={[od]:n.ZERO,[ad]:n.ONE,[ld]:n.SRC_COLOR,[Oa]:n.SRC_ALPHA,[pd]:n.SRC_ALPHA_SATURATE,[fd]:n.DST_COLOR,[ud]:n.DST_ALPHA,[cd]:n.ONE_MINUS_SRC_COLOR,[Ba]:n.ONE_MINUS_SRC_ALPHA,[dd]:n.ONE_MINUS_DST_COLOR,[hd]:n.ONE_MINUS_DST_ALPHA,[md]:n.CONSTANT_COLOR,[_d]:n.ONE_MINUS_CONSTANT_COLOR,[gd]:n.CONSTANT_ALPHA,[xd]:n.ONE_MINUS_CONSTANT_ALPHA};function qe(N,le,oe,_e,ne,q,ye,Ne,ht,st){if(N===ni){v===!0&&(se(n.BLEND),v=!1);return}if(v===!1&&(ee(n.BLEND),v=!0),N!==td){if(N!==m||st!==S){if((d!==Hi||M!==Hi)&&(n.blendEquation(n.FUNC_ADD),d=Hi,M=Hi),st)switch(N){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bc:n.blendFunc(n.ONE,n.ONE);break;case Tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ac:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Je("WebGLState: Invalid blending: ",N);break}else switch(N){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tc:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",N);break}y=null,b=null,A=null,T=null,w.set(0,0,0),g=0,m=N,S=st}return}ne=ne||le,q=q||oe,ye=ye||_e,(le!==d||ne!==M)&&(n.blendEquationSeparate(ut[le],ut[ne]),d=le,M=ne),(oe!==y||_e!==b||q!==A||ye!==T)&&(n.blendFuncSeparate(Le[oe],Le[_e],Le[q],Le[ye]),y=oe,b=_e,A=q,T=ye),(Ne.equals(w)===!1||ht!==g)&&(n.blendColor(Ne.r,Ne.g,Ne.b,ht),w.copy(Ne),g=ht),m=N,S=!1}function je(N,le){N.side===Zn?se(n.CULL_FACE):ee(n.CULL_FACE);let oe=N.side===en;le&&(oe=!oe),Ue(oe),N.blending===Ps&&N.transparent===!1?qe(ni):qe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const _e=N.stencilWrite;a.setTest(_e),_e&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),_t(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(N){O!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),O=N)}function ft(N){N!==Jf?(ee(n.CULL_FACE),N!==C&&(N===Ec?n.cullFace(n.BACK):N===Qf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),C=N}function D(N){N!==P&&(F&&n.lineWidth(N),P=N)}function _t(N,le,oe){N?(ee(n.POLYGON_OFFSET_FILL),(I!==le||L!==oe)&&(I=le,L=oe,o.getReversed()&&(le=-le),n.polygonOffset(le,oe))):se(n.POLYGON_OFFSET_FILL)}function Ye(N){N?ee(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function it(N){N===void 0&&(N=n.TEXTURE0+U-1),Z!==N&&(n.activeTexture(N),Z=N)}function pe(N,le,oe){oe===void 0&&(Z===null?oe=n.TEXTURE0+U-1:oe=Z);let _e=Q[oe];_e===void 0&&(_e={type:void 0,texture:void 0},Q[oe]=_e),(_e.type!==N||_e.texture!==le)&&(Z!==oe&&(n.activeTexture(oe),Z=oe),n.bindTexture(N,le||Y[N]),_e.type=N,_e.texture=le)}function R(){const N=Q[Z];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function j(){try{n.texSubImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function K(){try{n.texSubImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function ae(){try{n.texStorage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function be(){try{n.texStorage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function Ie(){try{n.texImage2D(...arguments)}catch(N){Je("WebGLState:",N)}}function te(){try{n.texImage3D(...arguments)}catch(N){Je("WebGLState:",N)}}function re(N){De.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),De.copy(N))}function ve(N){He.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function Se(N,le){let oe=l.get(le);oe===void 0&&(oe=new WeakMap,l.set(le,oe));let _e=oe.get(N);_e===void 0&&(_e=n.getUniformBlockIndex(le,N.name),oe.set(N,_e))}function de(N,le){const _e=l.get(le).get(N);c.get(le)!==_e&&(n.uniformBlockBinding(le,_e,N.__bindingPointIndex),c.set(le,_e))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,Q={},h={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,y=null,b=null,M=null,A=null,T=null,w=new nt(0,0,0),g=0,S=!1,O=null,C=null,P=null,I=null,L=null,De.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:se,bindFramebuffer:Ce,drawBuffers:xe,useProgram:we,setBlending:qe,setMaterial:je,setFlipSided:Ue,setCullFace:ft,setLineWidth:D,setPolygonOffset:_t,setScissorTest:Ye,activeTexture:it,bindTexture:pe,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:Ie,texImage3D:te,updateUBOMapping:Se,uniformBlockBinding:de,texStorage2D:ae,texStorage3D:be,texSubImage2D:j,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:ge,scissor:re,viewport:ve,reset:ke}}function nx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,x){return p?new OffscreenCanvas(R,x):So("canvas")}function v(R,x,z){let j=1;const K=pe(R);if((K.width>z||K.height>z)&&(j=z/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(j*K.width),ge=Math.floor(j*K.height);h===void 0&&(h=_(X,ge));const ae=x?_(X,ge):h;return ae.width=X,ae.height=ge,ae.getContext("2d").drawImage(R,0,0,X,ge),Fe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+ge+")."),ae}else return"data"in R&&Fe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,x,z,j,K=!1){if(R!==null){if(n[R]!==void 0)return n[R];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=x;if(x===n.RED&&(z===n.FLOAT&&(X=n.R32F),z===n.HALF_FLOAT&&(X=n.R16F),z===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.R8UI),z===n.UNSIGNED_SHORT&&(X=n.R16UI),z===n.UNSIGNED_INT&&(X=n.R32UI),z===n.BYTE&&(X=n.R8I),z===n.SHORT&&(X=n.R16I),z===n.INT&&(X=n.R32I)),x===n.RG&&(z===n.FLOAT&&(X=n.RG32F),z===n.HALF_FLOAT&&(X=n.RG16F),z===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RG8UI),z===n.UNSIGNED_SHORT&&(X=n.RG16UI),z===n.UNSIGNED_INT&&(X=n.RG32UI),z===n.BYTE&&(X=n.RG8I),z===n.SHORT&&(X=n.RG16I),z===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGB8UI),z===n.UNSIGNED_SHORT&&(X=n.RGB16UI),z===n.UNSIGNED_INT&&(X=n.RGB32UI),z===n.BYTE&&(X=n.RGB8I),z===n.SHORT&&(X=n.RGB16I),z===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),z===n.UNSIGNED_INT&&(X=n.RGBA32UI),z===n.BYTE&&(X=n.RGBA8I),z===n.SHORT&&(X=n.RGBA16I),z===n.INT&&(X=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),x===n.RGBA){const ge=K?yo:$e.getTransfer(j);z===n.FLOAT&&(X=n.RGBA32F),z===n.HALF_FLOAT&&(X=n.RGBA16F),z===n.UNSIGNED_BYTE&&(X=ge===rt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(R,x){let z;return R?x===null||x===Vn||x===mr?z=n.DEPTH24_STENCIL8:x===In?z=n.DEPTH32F_STENCIL8:x===pr&&(z=n.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vn||x===mr?z=n.DEPTH_COMPONENT24:x===In?z=n.DEPTH_COMPONENT32F:x===pr&&(z=n.DEPTH_COMPONENT16),z}function A(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==Xt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function T(R){const x=R.target;x.removeEventListener("dispose",T),g(x),x.isVideoTexture&&u.delete(x)}function w(R){const x=R.target;x.removeEventListener("dispose",w),O(x)}function g(R){const x=i.get(R);if(x.__webglInit===void 0)return;const z=R.source,j=f.get(z);if(j){const K=j[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(R),Object.keys(j).length===0&&f.delete(z)}i.remove(R)}function S(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const z=R.source,j=f.get(z);delete j[x.__cacheKey],o.memory.textures--}function O(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let K=0;K<x.__webglFramebuffer[j].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[j][K]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=R.textures;for(let j=0,K=z.length;j<K;j++){const X=i.get(z[j]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(z[j])}i.remove(R)}let C=0;function P(){C=0}function I(){const R=C;return R>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function L(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function U(R,x){const z=i.get(R);if(R.isVideoTexture&&Ye(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const j=R.image;if(j===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,R,x);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function F(R,x){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Y(z,R,x);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function B(R,x){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Y(z,R,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function $(R,x){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){ee(z,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}const Z={[qa]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[Ya]:n.MIRRORED_REPEAT},Q={[zt]:n.NEAREST,[Sd]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[Wo]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},ie={[bd]:n.NEVER,[Cd]:n.ALWAYS,[Td]:n.LESS,[$l]:n.LEQUAL,[Ad]:n.EQUAL,[jl]:n.GEQUAL,[wd]:n.GREATER,[Rd]:n.NOTEQUAL};function J(R,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Xt||x.magFilter===Wo||x.magFilter===Cr||x.magFilter===qi||x.minFilter===Xt||x.minFilter===Wo||x.minFilter===Cr||x.minFilter===qi)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Z[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Q[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===zt||x.minFilter!==Cr&&x.minFilter!==qi||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function De(R,x){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",T));const j=x.source;let K=f.get(j);K===void 0&&(K={},f.set(j,K));const X=L(x);if(X!==R.__cacheKey){K[X]===void 0&&(K[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[X].usedTimes++;const ge=K[R.__cacheKey];ge!==void 0&&(K[R.__cacheKey].usedTimes--,ge.usedTimes===0&&S(x)),R.__cacheKey=X,R.__webglTexture=K[X].texture}return z}function He(R,x,z){return Math.floor(Math.floor(R/z)/x)}function et(R,x,z,j){const X=R.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,j,x.data);else{X.sort((te,re)=>te.start-re.start);let ge=0;for(let te=1;te<X.length;te++){const re=X[ge],ve=X[te],Se=re.start+re.count,de=He(ve.start,x.width,4),ke=He(re.start,x.width,4);ve.start<=Se+1&&de===ke&&He(ve.start+ve.count-1,x.width,4)===de?re.count=Math.max(re.count,ve.start+ve.count-re.start):(++ge,X[ge]=ve)}X.length=ge+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let te=0,re=X.length;te<re;te++){const ve=X[te],Se=Math.floor(ve.start/4),de=Math.ceil(ve.count/4),ke=Se%x.width,N=Math.floor(Se/x.width),le=de,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,ke,N,le,oe,z,j,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function Y(R,x,z){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);const K=De(R,x),X=x.source;t.bindTexture(j,R.__webglTexture,n.TEXTURE0+z);const ge=i.get(X);if(X.version!==ge.__version||K===!0){t.activeTexture(n.TEXTURE0+z);const ae=$e.getPrimaries($e.workingColorSpace),be=x.colorSpace===_i?null:$e.getPrimaries(x.colorSpace),Ie=x.colorSpace===_i||ae===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let te=v(x.image,!1,s.maxTextureSize);te=it(x,te);const re=r.convert(x.format,x.colorSpace),ve=r.convert(x.type);let Se=b(x.internalFormat,re,ve,x.colorSpace,x.isVideoTexture);J(j,x);let de;const ke=x.mipmaps,N=x.isVideoTexture!==!0,le=ge.__version===void 0||K===!0,oe=X.dataReady,_e=A(x,te);if(x.isDepthTexture)Se=M(x.format===Yi,x.type),le&&(N?t.texStorage2D(n.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Se,te.width,te.height,0,re,ve,null));else if(x.isDataTexture)if(ke.length>0){N&&le&&t.texStorage2D(n.TEXTURE_2D,_e,Se,ke[0].width,ke[0].height);for(let ne=0,q=ke.length;ne<q;ne++)de=ke[ne],N?oe&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,re,ve,de.data):t.texImage2D(n.TEXTURE_2D,ne,Se,de.width,de.height,0,re,ve,de.data);x.generateMipmaps=!1}else N?(le&&t.texStorage2D(n.TEXTURE_2D,_e,Se,te.width,te.height),oe&&et(x,te,re,ve)):t.texImage2D(n.TEXTURE_2D,0,Se,te.width,te.height,0,re,ve,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Se,ke[0].width,ke[0].height,te.depth);for(let ne=0,q=ke.length;ne<q;ne++)if(de=ke[ne],x.format!==En)if(re!==null)if(N){if(oe)if(x.layerUpdates.size>0){const ye=Zc(de.width,de.height,x.format,x.type);for(const Ne of x.layerUpdates){const ht=de.data.subarray(Ne*ye/de.data.BYTES_PER_ELEMENT,(Ne+1)*ye/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Ne,de.width,de.height,1,re,ht)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,te.depth,re,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Se,de.width,de.height,te.depth,0,de.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,te.depth,re,ve,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Se,de.width,de.height,te.depth,0,re,ve,de.data)}else{N&&le&&t.texStorage2D(n.TEXTURE_2D,_e,Se,ke[0].width,ke[0].height);for(let ne=0,q=ke.length;ne<q;ne++)de=ke[ne],x.format!==En?re!==null?N?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,re,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Se,de.width,de.height,0,de.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?oe&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,re,ve,de.data):t.texImage2D(n.TEXTURE_2D,ne,Se,de.width,de.height,0,re,ve,de.data)}else if(x.isDataArrayTexture)if(N){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Se,te.width,te.height,te.depth),oe)if(x.layerUpdates.size>0){const ne=Zc(te.width,te.height,x.format,x.type);for(const q of x.layerUpdates){const ye=te.data.subarray(q*ne/te.data.BYTES_PER_ELEMENT,(q+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,te.width,te.height,1,re,ve,ye)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,re,ve,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,re,ve,te.data);else if(x.isData3DTexture)N?(le&&t.texStorage3D(n.TEXTURE_3D,_e,Se,te.width,te.height,te.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,re,ve,te.data)):t.texImage3D(n.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,re,ve,te.data);else if(x.isFramebufferTexture){if(le)if(N)t.texStorage2D(n.TEXTURE_2D,_e,Se,te.width,te.height);else{let ne=te.width,q=te.height;for(let ye=0;ye<_e;ye++)t.texImage2D(n.TEXTURE_2D,ye,Se,ne,q,0,re,ve,null),ne>>=1,q>>=1}}else if(ke.length>0){if(N&&le){const ne=pe(ke[0]);t.texStorage2D(n.TEXTURE_2D,_e,Se,ne.width,ne.height)}for(let ne=0,q=ke.length;ne<q;ne++)de=ke[ne],N?oe&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,re,ve,de):t.texImage2D(n.TEXTURE_2D,ne,Se,re,ve,de);x.generateMipmaps=!1}else if(N){if(le){const ne=pe(te);t.texStorage2D(n.TEXTURE_2D,_e,Se,ne.width,ne.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re,ve,te)}else t.texImage2D(n.TEXTURE_2D,0,Se,re,ve,te);m(x)&&d(j),ge.__version=X.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ee(R,x,z){if(x.image.length!==6)return;const j=De(R,x),K=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const X=i.get(K);if(K.version!==X.__version||j===!0){t.activeTexture(n.TEXTURE0+z);const ge=$e.getPrimaries($e.workingColorSpace),ae=x.colorSpace===_i?null:$e.getPrimaries(x.colorSpace),be=x.colorSpace===_i||ge===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ie=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,re=[];for(let q=0;q<6;q++)!Ie&&!te?re[q]=v(x.image[q],!0,s.maxCubemapSize):re[q]=te?x.image[q].image:x.image[q],re[q]=it(x,re[q]);const ve=re[0],Se=r.convert(x.format,x.colorSpace),de=r.convert(x.type),ke=b(x.internalFormat,Se,de,x.colorSpace),N=x.isVideoTexture!==!0,le=X.__version===void 0||j===!0,oe=K.dataReady;let _e=A(x,ve);J(n.TEXTURE_CUBE_MAP,x);let ne;if(Ie){N&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,ke,ve.width,ve.height);for(let q=0;q<6;q++){ne=re[q].mipmaps;for(let ye=0;ye<ne.length;ye++){const Ne=ne[ye];x.format!==En?Se!==null?N?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,0,0,Ne.width,Ne.height,Se,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,ke,Ne.width,Ne.height,0,Ne.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,0,0,Ne.width,Ne.height,Se,de,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,ke,Ne.width,Ne.height,0,Se,de,Ne.data)}}}else{if(ne=x.mipmaps,N&&le){ne.length>0&&_e++;const q=pe(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,ke,q.width,q.height)}for(let q=0;q<6;q++)if(te){N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,re[q].width,re[q].height,Se,de,re[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ke,re[q].width,re[q].height,0,Se,de,re[q].data);for(let ye=0;ye<ne.length;ye++){const ht=ne[ye].image[q].image;N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,0,0,ht.width,ht.height,Se,de,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,ke,ht.width,ht.height,0,Se,de,ht.data)}}else{N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Se,de,re[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ke,Se,de,re[q]);for(let ye=0;ye<ne.length;ye++){const Ne=ne[ye];N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,0,0,Se,de,Ne.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,ke,Se,de,Ne.image[q])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),X.__version=K.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function se(R,x,z,j,K,X){const ge=r.convert(z.format,z.colorSpace),ae=r.convert(z.type),be=b(z.internalFormat,ge,ae,z.colorSpace),Ie=i.get(x),te=i.get(z);if(te.__renderTarget=x,!Ie.__hasExternalTextures){const re=Math.max(1,x.width>>X),ve=Math.max(1,x.height>>X);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,X,be,re,ve,x.depth,0,ge,ae,null):t.texImage2D(K,X,be,re,ve,0,ge,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),_t(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,te.__webglTexture,0,D(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,K,te.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(R,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const j=x.depthTexture,K=j&&j.isDepthTexture?j.type:null,X=M(x.stencilBuffer,K),ge=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_t(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(x),X,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(x),X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,R)}else{const j=x.textures;for(let K=0;K<j.length;K++){const X=j[K],ge=r.convert(X.format,X.colorSpace),ae=r.convert(X.type),be=b(X.internalFormat,ge,ae,X.colorSpace);_t(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(x),be,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(x),be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(R,x,z){const j=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),J(n.TEXTURE_CUBE_MAP,x.depthTexture);const Ie=r.convert(x.depthTexture.format),te=r.convert(x.depthTexture.type);let re;x.depthTexture.format===oi?re=n.DEPTH_COMPONENT24:x.depthTexture.format===Yi&&(re=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,re,x.width,x.height,0,Ie,te,null)}}else U(x.depthTexture,0);const X=K.__webglTexture,ge=D(x),ae=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,be=x.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===oi)_t(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ae,X,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,be,ae,X,0);else if(x.depthTexture.format===Yi)_t(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ae,X,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,be,ae,X,0);else throw new Error("Unknown depthTexture format")}function we(R){const x=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=j}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let j=0;j<6;j++)xe(x.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?xe(x.__webglFramebuffer[0],R,0):xe(x.__webglFramebuffer,R,0)}else if(z){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=n.createRenderbuffer(),Ce(x.__webglDepthbuffer[j],R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ce(x.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(R,x,z){const j=i.get(R);x!==void 0&&se(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&we(R)}function Le(R){const x=R.texture,z=i.get(R),j=i.get(x);R.addEventListener("dispose",w);const K=R.textures,X=R.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,o.memory.textures++),X){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let be=0;be<x.mipmaps.length;be++)z.__webglFramebuffer[ae][be]=n.createFramebuffer()}else z.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)z.__webglFramebuffer[ae]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ge)for(let ae=0,be=K.length;ae<be;ae++){const Ie=i.get(K[ae]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&_t(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const be=K[ae];z.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ae]);const Ie=r.convert(be.format,be.colorSpace),te=r.convert(be.type),re=b(be.internalFormat,Ie,te,be.colorSpace,R.isXRRenderTarget===!0),ve=D(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,re,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,z.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),J(n.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)se(z.__webglFramebuffer[ae][be],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be);else se(z.__webglFramebuffer[ae],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ae=0,be=K.length;ae<be;ae++){const Ie=K[ae],te=i.get(Ie);let re=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,te.__webglTexture),J(re,Ie),se(z.__webglFramebuffer,R,Ie,n.COLOR_ATTACHMENT0+ae,re,0),m(Ie)&&d(re)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),J(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)se(z.__webglFramebuffer[be],R,x,n.COLOR_ATTACHMENT0,ae,be);else se(z.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,ae,0);m(x)&&d(ae),t.unbindTexture()}R.depthBuffer&&we(R)}function qe(R){const x=R.textures;for(let z=0,j=x.length;z<j;z++){const K=x[z];if(m(K)){const X=y(R),ge=i.get(K).__webglTexture;t.bindTexture(X,ge),d(X),t.unbindTexture()}}}const je=[],Ue=[];function ft(R){if(R.samples>0){if(_t(R)===!1){const x=R.textures,z=R.width,j=R.height;let K=n.COLOR_BUFFER_BIT;const X=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(R),ae=x.length>1;if(ae)for(let Ie=0;Ie<x.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ie=0;Ie<x.length;Ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Ie]);const te=i.get(x[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,z,j,0,0,z,j,K,n.NEAREST),c===!0&&(je.length=0,Ue.length=0,je.push(n.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(je.push(X),Ue.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Ie=0;Ie<x.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Ie]);const te=i.get(x[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function D(R){return Math.min(s.maxSamples,R.samples)}function _t(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ye(R){const x=o.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function it(R,x){const z=R.colorSpace,j=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Bs&&z!==_i&&($e.getTransfer(z)===rt?(j!==En||K!==ln)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",z)),x}function pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=U,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=ut,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=se,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ix(n,e){function t(i,s=_i){let r;const o=$e.getTransfer(s);if(i===ln)return n.UNSIGNED_BYTE;if(i===Gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Eh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yh)return n.BYTE;if(i===Sh)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===kl)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===ri)return n.HALF_FLOAT;if(i===bh)return n.ALPHA;if(i===Th)return n.RGB;if(i===En)return n.RGBA;if(i===oi)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===Ah)return n.RED;if(i===Wl)return n.RED_INTEGER;if(i===Os)return n.RG;if(i===Xl)return n.RG_INTEGER;if(i===ql)return n.RGBA_INTEGER;if(i===io||i===so||i===ro||i===oo)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$a||i===ja||i===Za||i===Ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ja||i===Qa||i===el||i===tl||i===nl||i===il||i===sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ja||i===Qa)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===el)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===tl)return r.COMPRESSED_R11_EAC;if(i===nl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===il)return r.COMPRESSED_RG11_EAC;if(i===sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rl||i===ol||i===al||i===ll||i===cl||i===ul||i===hl||i===fl||i===dl||i===pl||i===ml||i===_l||i===gl||i===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===al)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_l)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vl||i===yl||i===Sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===vl)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ml||i===El||i===bl||i===Tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(i===El)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`;class ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Uh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gn({vertexShader:sx,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ax extends Vs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new ox,d={},y=t.getContextAttributes();let b=null,M=null;const A=[],T=[],w=new Be;let g=null;const S=new hn;S.viewport=new St;const O=new hn;O.viewport=new St;const C=[S,O],P=new vp;let I=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=A[Y];return ee===void 0&&(ee=new Jo,A[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=A[Y];return ee===void 0&&(ee=new Jo,A[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=A[Y];return ee===void 0&&(ee=new Jo,A[Y]=ee),ee.getHandSpace()};function U(Y){const ee=T.indexOf(Y.inputSource);if(ee===-1)return;const se=A[ee];se!==void 0&&(se.update(Y.inputSource,Y.frame,l||o),se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",B);for(let Y=0;Y<A.length;Y++){const ee=T[Y];ee!==null&&(T[Y]=null,A[Y].disconnect(ee))}I=null,L=null,m.reset();for(const Y in d)delete d[Y];e.setRenderTarget(b),p=null,f=null,h=null,s=null,M=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ce=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=y.stencil?Yi:oi,Ce=y.stencil?mr:Vn);const we={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(we),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Fn(f.textureWidth,f.textureHeight,{format:En,type:ln,depthTexture:new gr(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Fn(p.framebufferWidth,p.framebufferHeight,{format:En,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Y){for(let ee=0;ee<Y.removed.length;ee++){const se=Y.removed[ee],Ce=T.indexOf(se);Ce>=0&&(T[Ce]=null,A[Ce].disconnect(se))}for(let ee=0;ee<Y.added.length;ee++){const se=Y.added[ee];let Ce=T.indexOf(se);if(Ce===-1){for(let we=0;we<A.length;we++)if(we>=T.length){T.push(se),Ce=we;break}else if(T[we]===null){T[we]=se,Ce=we;break}if(Ce===-1)break}const xe=A[Ce];xe&&xe.connect(se)}}const $=new k,Z=new k;function Q(Y,ee,se){$.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);const Ce=$.distanceTo(Z),xe=ee.projectionMatrix.elements,we=se.projectionMatrix.elements,ut=xe[14]/(xe[10]-1),Le=xe[14]/(xe[10]+1),qe=(xe[9]+1)/xe[5],je=(xe[9]-1)/xe[5],Ue=(xe[8]-1)/xe[0],ft=(we[8]+1)/we[0],D=ut*Ue,_t=ut*ft,Ye=Ce/(-Ue+ft),it=Ye*-Ue;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(it),Y.translateZ(Ye),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),xe[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const pe=ut+Ye,R=Le+Ye,x=D-it,z=_t+(Ce-it),j=qe*Le/R*pe,K=je*Le/R*pe;Y.projectionMatrix.makePerspective(x,z,j,K,pe,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ee=Y.near,se=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(se=m.depthFar)),P.near=O.near=S.near=ee,P.far=O.far=S.far=se,(I!==P.near||L!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,L=P.far),P.layers.mask=Y.layers.mask|6,S.layers.mask=P.layers.mask&-5,O.layers.mask=P.layers.mask&-3;const Ce=Y.parent,xe=P.cameras;ie(P,Ce);for(let we=0;we<xe.length;we++)ie(xe[we],Ce);xe.length===2?Q(P,S,O):P.projectionMatrix.copy(S.projectionMatrix),J(Y,P,Ce)};function J(Y,ee,se){se===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Al*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(Y){return d[Y]};let De=null;function He(Y,ee){if(u=ee.getViewerPose(l||o),_=ee,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ce=!1;se.length!==P.cameras.length&&(P.cameras.length=0,Ce=!0);for(let Le=0;Le<se.length;Le++){const qe=se[Le];let je=null;if(p!==null)je=p.getViewport(qe);else{const ft=h.getViewSubImage(f,qe);je=ft.viewport,Le===0&&(e.setRenderTargetTextures(M,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(M))}let Ue=C[Le];Ue===void 0&&(Ue=new hn,Ue.layers.enable(Le),Ue.viewport=new St,C[Le]=Ue),Ue.matrix.fromArray(qe.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(qe.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(je.x,je.y,je.width,je.height),Le===0&&(P.matrix.copy(Ue.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ce===!0&&P.cameras.push(Ue)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const Le=h.getDepthInformation(se[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,s.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let Le=0;Le<se.length;Le++){const qe=se[Le].camera;if(qe){let je=d[qe];je||(je=new Uh,d[qe]=je);const Ue=h.getCameraImage(qe);je.sourceTexture=Ue}}}}for(let se=0;se<A.length;se++){const Ce=T[se],xe=A[se];Ce!==null&&xe!==void 0&&xe.update(Ce,ee,l||o)}De&&De(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const et=new Bh;et.setAnimationLoop(He),this.setAnimationLoop=function(Y){De=Y},this.dispose=function(){}}}const Fi=new kn,lx=new Et;function cx(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Nh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,b,M){d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===en&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===en&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,Fi.copy(M),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(lx.makeRotationFromEuler(Fi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ux(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const M=b.program;i.uniformBlockBinding(y,M)}function l(y,b){let M=s[y.id];M===void 0&&(_(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",m));const A=b.program;i.updateUBOMapping(y,A);const T=e.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function u(y){const b=h();y.__bindingPointIndex=b;const M=n.createBuffer(),A=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const b=s[y.id],M=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,w=M.length;T<w;T++){const g=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,O=g.length;S<O;S++){const C=g[S];if(p(C,T,S,A)===!0){const P=C.__offset,I=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let U=0;U<I.length;U++){const F=I[U],B=v(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,P+L,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,L),L+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,b,M,A){const T=y.value,w=b+"_"+M;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:A[w]=T.clone(),!0;{const g=A[w];if(typeof T=="number"||typeof T=="boolean"){if(g!==T)return A[w]=T,!0}else if(g.equals(T)===!1)return g.copy(T),!0}return!1}function _(y){const b=y.uniforms;let M=0;const A=16;for(let w=0,g=b.length;w<g;w++){const S=Array.isArray(b[w])?b[w]:[b[w]];for(let O=0,C=S.length;O<C;O++){const P=S[O],I=Array.isArray(P.value)?P.value:[P.value];for(let L=0,U=I.length;L<U;L++){const F=I[L],B=v(F),$=M%A,Z=$%B.boundary,Q=$+Z;M+=Z,Q!==0&&A-Q<B.storage&&(M+=A-Q),P.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=B.storage}}}const T=M%A;return T>0&&(M+=A-T),y.__size=M,y.__cache={},this}function v(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}const hx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function fx(){return wn===null&&(wn=new tp(hx,16,16,Os,ri),wn.name="DFG_LUT",wn.minFilter=Xt,wn.magFilter=Xt,wn.wrapS=Kn,wn.wrapT=Kn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class dx{constructor(e={}){const{canvas:t=Dd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ln}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const v=p,m=new Set([ql,Xl,Wl]),d=new Set([ln,Vn,pr,mr,Gl,Hl]),y=new Uint32Array(4),b=new Int32Array(4);let M=null,A=null;const T=[],w=[];let g=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let O=!1;this._outputColorSpace=un;let C=0,P=0,I=null,L=-1,U=null;const F=new St,B=new St;let $=null;const Z=new nt(0);let Q=0,ie=t.width,J=t.height,De=1,He=null,et=null;const Y=new St(0,0,ie,J),ee=new St(0,0,ie,J);let se=!1;const Ce=new Jl;let xe=!1,we=!1;const ut=new Et,Le=new k,qe=new St,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function ft(){return I===null?De:1}let D=i;function _t(E,V){return t.getContext(E,V)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vl}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ht,!1),D===null){const V="webgl2";if(D=_t(V,E),D===null)throw _t(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Je("WebGLRenderer: "+E.message),E}let Ye,it,pe,R,x,z,j,K,X,ge,ae,be,Ie,te,re,ve,Se,de,ke,N,le,oe,_e;function ne(){Ye=new dg(D),Ye.init(),le=new ix(D,Ye),it=new rg(D,Ye,e,le),pe=new tx(D,Ye),it.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),R=new _g(D),x=new k0,z=new nx(D,Ye,pe,x,it,le,R),j=new fg(S),K=new Sp(D),oe=new ig(D,K),X=new pg(D,K,R,oe),ge=new xg(D,X,K,oe,R),de=new gg(D,it,z),re=new og(x),ae=new V0(S,j,Ye,it,oe,re),be=new cx(S,x),Ie=new H0,te=new j0(Ye),Se=new ng(S,j,pe,ge,_,c),ve=new ex(S,ge,it),_e=new ux(D,R,it,pe),ke=new sg(D,Ye,R),N=new mg(D,Ye,R),R.programs=ae.programs,S.capabilities=it,S.extensions=Ye,S.properties=x,S.renderLists=Ie,S.shadowMap=ve,S.state=pe,S.info=R}ne(),v!==ln&&(g=new yg(v,t.width,t.height,s,r));const q=new ax(S,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(E){E!==void 0&&(De=E,this.setSize(ie,J,!1))},this.getSize=function(E){return E.set(ie,J)},this.setSize=function(E,V,W=!0){if(q.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=E,J=V,t.width=Math.floor(E*De),t.height=Math.floor(V*De),W===!0&&(t.style.width=E+"px",t.style.height=V+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(ie*De,J*De).floor()},this.setDrawingBufferSize=function(E,V,W){ie=E,J=V,De=W,t.width=Math.floor(E*W),t.height=Math.floor(V*W),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(v===ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(F)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,V,W,H){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,V,W,H),pe.viewport(F.copy(Y).multiplyScalar(De).round())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,V,W,H){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,V,W,H),pe.scissor(B.copy(ee).multiplyScalar(De).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){pe.setScissorTest(se=E)},this.setOpaqueSort=function(E){He=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,W=!0){let H=0;if(E){let G=!1;if(I!==null){const he=I.texture.format;G=m.has(he)}if(G){const he=I.texture.type,me=d.has(he),fe=Se.getClearColor(),Me=Se.getClearAlpha(),Te=fe.r,Oe=fe.g,Ge=fe.b;me?(y[0]=Te,y[1]=Oe,y[2]=Ge,y[3]=Me,D.clearBufferuiv(D.COLOR,0,y)):(b[0]=Te,b[1]=Oe,b[2]=Ge,b[3]=Me,D.clearBufferiv(D.COLOR,0,b))}else H|=D.COLOR_BUFFER_BIT}V&&(H|=D.DEPTH_BUFFER_BIT),W&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Se.dispose(),Ie.dispose(),te.dispose(),x.dispose(),j.dispose(),ge.dispose(),oe.dispose(),_e.dispose(),ae.dispose(),q.dispose(),q.removeEventListener("sessionstart",nc),q.removeEventListener("sessionend",ic),Ci.stop()};function ye(E){E.preventDefault(),Dc("WebGLRenderer: Context Lost."),O=!0}function Ne(){Dc("WebGLRenderer: Context Restored."),O=!1;const E=R.autoReset,V=ve.enabled,W=ve.autoUpdate,H=ve.needsUpdate,G=ve.type;ne(),R.autoReset=E,ve.enabled=V,ve.autoUpdate=W,ve.needsUpdate=H,ve.type=G}function ht(E){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function st(E){const V=E.target;V.removeEventListener("dispose",st),Hn(V)}function Hn(E){Wn(E),x.remove(E)}function Wn(E){const V=x.get(E).programs;V!==void 0&&(V.forEach(function(W){ae.releaseProgram(W)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,W,H,G,he){V===null&&(V=je);const me=G.isMesh&&G.matrixWorld.determinant()<0,fe=ff(E,V,W,H,G);pe.setMaterial(H,me);let Me=W.index,Te=1;if(H.wireframe===!0){if(Me=X.getWireframeAttribute(W),Me===void 0)return;Te=2}const Oe=W.drawRange,Ge=W.attributes.position;let Ae=Oe.start*Te,at=(Oe.start+Oe.count)*Te;he!==null&&(Ae=Math.max(Ae,he.start*Te),at=Math.min(at,(he.start+he.count)*Te)),Me!==null?(Ae=Math.max(Ae,0),at=Math.min(at,Me.count)):Ge!=null&&(Ae=Math.max(Ae,0),at=Math.min(at,Ge.count));const bt=at-Ae;if(bt<0||bt===1/0)return;oe.setup(G,H,fe,W,Me);let vt,lt=ke;if(Me!==null&&(vt=K.get(Me),lt=N,lt.setIndex(vt)),G.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*ft()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(G.isLine){let Vt=H.linewidth;Vt===void 0&&(Vt=1),pe.setLineWidth(Vt*ft()),G.isLineSegments?lt.setMode(D.LINES):G.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else G.isPoints?lt.setMode(D.POINTS):G.isSprite&&lt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Mo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Vt=G._multiDrawStarts,Ee=G._multiDrawCounts,tn=G._multiDrawCount,Ze=Me?K.get(Me).bytesPerElement:1,mn=x.get(H).currentProgram.getUniforms();for(let Tn=0;Tn<tn;Tn++)mn.setValue(D,"_gl_DrawID",Tn),lt.render(Vt[Tn]/Ze,Ee[Tn])}else if(G.isInstancedMesh)lt.renderInstances(Ae,bt,G.count);else if(W.isInstancedBufferGeometry){const Vt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,Vt);lt.renderInstances(Ae,bt,Ee)}else lt.render(Ae,bt)};function tc(E,V,W){E.transparent===!0&&E.side===Zn&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,Tr(E,V,W),E.side=bi,E.needsUpdate=!0,Tr(E,V,W),E.side=Zn):Tr(E,V,W)}this.compile=function(E,V,W=null){W===null&&(W=E),A=te.get(W),A.init(V),w.push(A),W.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),E!==W&&E.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const H=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const he=G.material;if(he)if(Array.isArray(he))for(let me=0;me<he.length;me++){const fe=he[me];tc(fe,W,G),H.add(fe)}else tc(he,W,G),H.add(he)}),A=w.pop(),H},this.compileAsync=function(E,V,W=null){const H=this.compile(E,V,W);return new Promise(G=>{function he(){if(H.forEach(function(me){x.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){G(E);return}setTimeout(he,10)}Ye.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Uo=null;function hf(E){Uo&&Uo(E)}function nc(){Ci.stop()}function ic(){Ci.start()}const Ci=new Bh;Ci.setAnimationLoop(hf),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(E){Uo=E,q.setAnimationLoop(E),E===null?Ci.stop():Ci.start()},q.addEventListener("sessionstart",nc),q.addEventListener("sessionend",ic),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const W=q.enabled===!0&&q.isPresenting===!0,H=g!==null&&(I===null||W)&&g.begin(S,I);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(V),V=q.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,V,I),A=te.get(E,w.length),A.init(V),w.push(A),ut.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ce.setFromProjectionMatrix(ut,Ln,V.reversedDepth),we=this.localClippingEnabled,xe=re.init(this.clippingPlanes,we),M=Ie.get(E,T.length),M.init(),T.push(M),q.enabled===!0&&q.isPresenting===!0){const me=S.xr.getDepthSensingMesh();me!==null&&No(me,V,-1/0,S.sortObjects)}No(E,V,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(He,et),Ue=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ue&&Se.addToRenderList(M,E),this.info.render.frame++,xe===!0&&re.beginShadows();const G=A.state.shadowsArray;if(ve.render(G,E,V),xe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&g.hasRenderPass())===!1){const me=M.opaque,fe=M.transmissive;if(A.setupLights(),V.isArrayCamera){const Me=V.cameras;if(fe.length>0)for(let Te=0,Oe=Me.length;Te<Oe;Te++){const Ge=Me[Te];rc(me,fe,E,Ge)}Ue&&Se.render(E);for(let Te=0,Oe=Me.length;Te<Oe;Te++){const Ge=Me[Te];sc(M,E,Ge,Ge.viewport)}}else fe.length>0&&rc(me,fe,E,V),Ue&&Se.render(E),sc(M,E,V)}I!==null&&P===0&&(z.updateMultisampleRenderTarget(I),z.updateRenderTargetMipmap(I)),H&&g.end(S),E.isScene===!0&&E.onAfterRender(S,E,V),oe.resetDefaultState(),L=-1,U=null,w.pop(),w.length>0?(A=w[w.length-1],xe===!0&&re.setGlobalState(S.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?M=T[T.length-1]:M=null};function No(E,V,W,H){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ce.intersectsSprite(E)){H&&qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ut);const me=ge.update(E),fe=E.material;fe.visible&&M.push(E,me,fe,W,qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ce.intersectsObject(E))){const me=ge.update(E),fe=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qe.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),qe.copy(me.boundingSphere.center)),qe.applyMatrix4(E.matrixWorld).applyMatrix4(ut)),Array.isArray(fe)){const Me=me.groups;for(let Te=0,Oe=Me.length;Te<Oe;Te++){const Ge=Me[Te],Ae=fe[Ge.materialIndex];Ae&&Ae.visible&&M.push(E,me,Ae,W,qe.z,Ge)}}else fe.visible&&M.push(E,me,fe,W,qe.z,null)}}const he=E.children;for(let me=0,fe=he.length;me<fe;me++)No(he[me],V,W,H)}function sc(E,V,W,H){const{opaque:G,transmissive:he,transparent:me}=E;A.setupLightsView(W),xe===!0&&re.setGlobalState(S.clippingPlanes,W),H&&pe.viewport(F.copy(H)),G.length>0&&br(G,V,W),he.length>0&&br(he,V,W),me.length>0&&br(me,V,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function rc(E,V,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Ae=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Fn(1,1,{generateMipmaps:!0,type:Ae?ri:ln,minFilter:qi,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const he=A.state.transmissionRenderTarget[H.id],me=H.viewport||F;he.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);const fe=S.getRenderTarget(),Me=S.getActiveCubeFace(),Te=S.getActiveMipmapLevel();S.setRenderTarget(he),S.getClearColor(Z),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),Ue&&Se.render(W);const Oe=S.toneMapping;S.toneMapping=Nn;const Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),xe===!0&&re.setGlobalState(S.clippingPlanes,H),br(E,W,H),z.updateMultisampleRenderTarget(he),z.updateRenderTargetMipmap(he),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let at=0,bt=V.length;at<bt;at++){const vt=V[at],{object:lt,geometry:Vt,material:Ee,group:tn}=vt;if(Ee.side===Zn&&lt.layers.test(H.layers)){const Ze=Ee.side;Ee.side=en,Ee.needsUpdate=!0,oc(lt,W,H,Vt,Ee,tn),Ee.side=Ze,Ee.needsUpdate=!0,Ae=!0}}Ae===!0&&(z.updateMultisampleRenderTarget(he),z.updateRenderTargetMipmap(he))}S.setRenderTarget(fe,Me,Te),S.setClearColor(Z,Q),Ge!==void 0&&(H.viewport=Ge),S.toneMapping=Oe}function br(E,V,W){const H=V.isScene===!0?V.overrideMaterial:null;for(let G=0,he=E.length;G<he;G++){const me=E[G],{object:fe,geometry:Me,group:Te}=me;let Oe=me.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),fe.layers.test(W.layers)&&oc(fe,V,W,Me,Oe,Te)}}function oc(E,V,W,H,G,he){E.onBeforeRender(S,V,W,H,G,he),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(S,V,W,H,E,he),G.transparent===!0&&G.side===Zn&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,S.renderBufferDirect(W,V,H,G,E,he),G.side=bi,G.needsUpdate=!0,S.renderBufferDirect(W,V,H,G,E,he),G.side=Zn):S.renderBufferDirect(W,V,H,G,E,he),E.onAfterRender(S,V,W,H,G,he)}function Tr(E,V,W){V.isScene!==!0&&(V=je);const H=x.get(E),G=A.state.lights,he=A.state.shadowsArray,me=G.state.version,fe=ae.getParameters(E,G.state,he,V,W),Me=ae.getProgramCacheKey(fe);let Te=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,H.fog=V.fog;const Oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=j.get(E.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",st),Te=new Map,H.programs=Te);let Ge=Te.get(Me);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===me)return lc(E,fe),Ge}else fe.uniforms=ae.getUniforms(E),E.onBeforeCompile(fe,S),Ge=ae.acquireProgram(fe,Me),Te.set(Me,Ge),H.uniforms=fe.uniforms;const Ae=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=re.uniform),lc(E,fe),H.needsLights=pf(E),H.lightsStateVersion=me,H.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function ac(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=ao.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function lc(E,V){const W=x.get(E);W.outputColorSpace=V.outputColorSpace,W.batching=V.batching,W.batchingColor=V.batchingColor,W.instancing=V.instancing,W.instancingColor=V.instancingColor,W.instancingMorph=V.instancingMorph,W.skinning=V.skinning,W.morphTargets=V.morphTargets,W.morphNormals=V.morphNormals,W.morphColors=V.morphColors,W.morphTargetsCount=V.morphTargetsCount,W.numClippingPlanes=V.numClippingPlanes,W.numIntersection=V.numClipIntersection,W.vertexAlphas=V.vertexAlphas,W.vertexTangents=V.vertexTangents,W.toneMapping=V.toneMapping}function ff(E,V,W,H,G){V.isScene!==!0&&(V=je),z.resetTextureUnits();const he=V.fog,me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?V.environment:null,fe=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Bs,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=j.get(H.envMap||me,Me),Oe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,bt=!!W.morphAttributes.color;let vt=Nn;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(vt=S.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Vt=lt!==void 0?lt.length:0,Ee=x.get(H),tn=A.state.lights;if(xe===!0&&(we===!0||E!==U)){const Pt=E===U&&H.id===L;re.setState(H,E,Pt)}let Ze=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==tn.state.version||Ee.outputColorSpace!==fe||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==Te||H.fog===!0&&Ee.fog!==he||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==re.numPlanes||Ee.numIntersection!==re.numIntersection)||Ee.vertexAlphas!==Oe||Ee.vertexTangents!==Ge||Ee.morphTargets!==Ae||Ee.morphNormals!==at||Ee.morphColors!==bt||Ee.toneMapping!==vt||Ee.morphTargetsCount!==Vt)&&(Ze=!0):(Ze=!0,Ee.__version=H.version);let mn=Ee.currentProgram;Ze===!0&&(mn=Tr(H,V,G));let Tn=!1,Pi=!1,ns=!1;const ct=mn.getUniforms(),Ot=Ee.uniforms;if(pe.useProgram(mn.program)&&(Tn=!0,Pi=!0,ns=!0),H.id!==L&&(L=H.id,Pi=!0),Tn||U!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ct.setValue(D,"projectionMatrix",E.projectionMatrix),ct.setValue(D,"viewMatrix",E.matrixWorldInverse);const ci=ct.map.cameraPosition;ci!==void 0&&ci.setValue(D,Le.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,Pi=!0,ns=!0)}if(Ee.needsLights&&(tn.state.directionalShadowMap.length>0&&ct.setValue(D,"directionalShadowMap",tn.state.directionalShadowMap,z),tn.state.spotShadowMap.length>0&&ct.setValue(D,"spotShadowMap",tn.state.spotShadowMap,z),tn.state.pointShadowMap.length>0&&ct.setValue(D,"pointShadowMap",tn.state.pointShadowMap,z)),G.isSkinnedMesh){ct.setOptional(D,G,"bindMatrix"),ct.setOptional(D,G,"bindMatrixInverse");const Pt=G.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ct.setValue(D,"boneTexture",Pt.boneTexture,z))}G.isBatchedMesh&&(ct.setOptional(D,G,"batchingTexture"),ct.setValue(D,"batchingTexture",G._matricesTexture,z),ct.setOptional(D,G,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",G._indirectTexture,z),ct.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",G._colorsTexture,z));const li=W.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&de.update(G,W,mn),(Pi||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,ct.setValue(D,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&V.environment!==null&&(Ot.envMapIntensity.value=V.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=fx()),Pi&&(ct.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&df(Ot,ns),he&&H.fog===!0&&be.refreshFogUniforms(Ot,he),be.refreshMaterialUniforms(Ot,H,De,J,A.state.transmissionRenderTarget[E.id]),ao.upload(D,ac(Ee),Ot,z)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ao.upload(D,ac(Ee),Ot,z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(D,"center",G.center),ct.setValue(D,"modelViewMatrix",G.modelViewMatrix),ct.setValue(D,"normalMatrix",G.normalMatrix),ct.setValue(D,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Pt=H.uniformsGroups;for(let ci=0,is=Pt.length;ci<is;ci++){const cc=Pt[ci];_e.update(cc,mn),_e.bind(cc,mn)}}return mn}function df(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function pf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,V,W){const H=x.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),x.get(E.texture).__webglTexture=V,x.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){const W=x.get(E);W.__webglFramebuffer=V,W.__useDefaultFramebuffer=V===void 0};const mf=D.createFramebuffer();this.setRenderTarget=function(E,V=0,W=0){I=E,C=V,P=W;let H=null,G=!1,he=!1;if(E){const fe=x.get(E);if(fe.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(D.FRAMEBUFFER,fe.__webglFramebuffer),F.copy(E.viewport),B.copy(E.scissor),$=E.scissorTest,pe.viewport(F),pe.scissor(B),pe.setScissorTest($),L=-1;return}else if(fe.__webglFramebuffer===void 0)z.setupRenderTarget(E);else if(fe.__hasExternalTextures)z.rebindTextures(E,x.get(E.texture).__webglTexture,x.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(fe.__boundDepthTexture!==Oe){if(Oe!==null&&x.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(he=!0);const Te=x.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[V])?H=Te[V][W]:H=Te[V],G=!0):E.samples>0&&z.useMultisampledRTT(E)===!1?H=x.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[W]:H=Te,F.copy(E.viewport),B.copy(E.scissor),$=E.scissorTest}else F.copy(Y).multiplyScalar(De).floor(),B.copy(ee).multiplyScalar(De).floor(),$=se;if(W!==0&&(H=mf),pe.bindFramebuffer(D.FRAMEBUFFER,H)&&pe.drawBuffers(E,H),pe.viewport(F),pe.scissor(B),pe.setScissorTest($),G){const fe=x.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,fe.__webglTexture,W)}else if(he){const fe=V;for(let Me=0;Me<E.textures.length;Me++){const Te=x.get(E.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,Te.__webglTexture,W,fe)}}else if(E!==null&&W!==0){const fe=x.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,W)}L=-1},this.readRenderTargetPixels=function(E,V,W,H,G,he,me,fe=0){if(!(E&&E.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){pe.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Te=E.textures[fe],Oe=Te.format,Ge=Te.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+fe),!it.textureFormatReadable(Oe)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ge)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-H&&W>=0&&W<=E.height-G&&D.readPixels(V,W,H,G,le.convert(Oe),le.convert(Ge),he)}finally{const Te=I!==null?x.get(I).__webglFramebuffer:null;pe.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,V,W,H,G,he,me,fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(V>=0&&V<=E.width-H&&W>=0&&W<=E.height-G){pe.bindFramebuffer(D.FRAMEBUFFER,Me);const Te=E.textures[fe],Oe=Te.format,Ge=Te.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+fe),!it.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(V,W,H,G,le.convert(Oe),le.convert(Ge),0);const at=I!==null?x.get(I).__webglFramebuffer:null;pe.bindFramebuffer(D.FRAMEBUFFER,at);const bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Id(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.deleteBuffer(Ae),D.deleteSync(bt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,W=0){const H=Math.pow(2,-W),G=Math.floor(E.image.width*H),he=Math.floor(E.image.height*H),me=V!==null?V.x:0,fe=V!==null?V.y:0;z.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,me,fe,G,he),pe.unbindTexture()};const _f=D.createFramebuffer(),gf=D.createFramebuffer();this.copyTextureToTexture=function(E,V,W=null,H=null,G=0,he=0){let me,fe,Me,Te,Oe,Ge,Ae,at,bt;const vt=E.isCompressedTexture?E.mipmaps[he]:E.image;if(W!==null)me=W.max.x-W.min.x,fe=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Te=W.min.x,Oe=W.min.y,Ge=W.isBox3?W.min.z:0;else{const Ot=Math.pow(2,-G);me=Math.floor(vt.width*Ot),fe=Math.floor(vt.height*Ot),E.isDataArrayTexture?Me=vt.depth:E.isData3DTexture?Me=Math.floor(vt.depth*Ot):Me=1,Te=0,Oe=0,Ge=0}H!==null?(Ae=H.x,at=H.y,bt=H.z):(Ae=0,at=0,bt=0);const lt=le.convert(V.format),Vt=le.convert(V.type);let Ee;V.isData3DTexture?(z.setTexture3D(V,0),Ee=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(z.setTexture2DArray(V,0),Ee=D.TEXTURE_2D_ARRAY):(z.setTexture2D(V,0),Ee=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const tn=D.getParameter(D.UNPACK_ROW_LENGTH),Ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mn=D.getParameter(D.UNPACK_SKIP_PIXELS),Tn=D.getParameter(D.UNPACK_SKIP_ROWS),Pi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,vt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const ns=E.isDataArrayTexture||E.isData3DTexture,ct=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const Ot=x.get(E),li=x.get(V),Pt=x.get(Ot.__renderTarget),ci=x.get(li.__renderTarget);pe.bindFramebuffer(D.READ_FRAMEBUFFER,Pt.__webglFramebuffer),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let is=0;is<Me;is++)ns&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(E).__webglTexture,G,Ge+is),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(V).__webglTexture,he,bt+is)),D.blitFramebuffer(Te,Oe,me,fe,Ae,at,me,fe,D.DEPTH_BUFFER_BIT,D.NEAREST);pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||x.has(E)){const Ot=x.get(E),li=x.get(V);pe.bindFramebuffer(D.READ_FRAMEBUFFER,_f),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,gf);for(let Pt=0;Pt<Me;Pt++)ns?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.__webglTexture,G,Ge+Pt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ot.__webglTexture,G),ct?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,li.__webglTexture,he,bt+Pt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,li.__webglTexture,he),G!==0?D.blitFramebuffer(Te,Oe,me,fe,Ae,at,me,fe,D.COLOR_BUFFER_BIT,D.NEAREST):ct?D.copyTexSubImage3D(Ee,he,Ae,at,bt+Pt,Te,Oe,me,fe):D.copyTexSubImage2D(Ee,he,Ae,at,Te,Oe,me,fe);pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ct?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ee,he,Ae,at,bt,me,fe,Me,lt,Vt,vt.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,he,Ae,at,bt,me,fe,Me,lt,vt.data):D.texSubImage3D(Ee,he,Ae,at,bt,me,fe,Me,lt,Vt,vt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,he,Ae,at,me,fe,lt,Vt,vt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,he,Ae,at,vt.width,vt.height,lt,vt.data):D.texSubImage2D(D.TEXTURE_2D,he,Ae,at,me,fe,lt,Vt,vt);D.pixelStorei(D.UNPACK_ROW_LENGTH,tn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Tn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pi),he===0&&V.generateMipmaps&&D.generateMipmap(Ee),pe.unbindTexture()},this.initRenderTarget=function(E){x.get(E).__webglFramebuffer===void 0&&z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?z.setTextureCube(E,0):E.isData3DTexture?z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?z.setTexture2DArray(E,0):z.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){C=0,P=0,I=null,pe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}var px=Ai('<div style=position:absolute;user-select:none;touch-action:none><div style="position:absolute;transform:translate(-50%, -50%);border:5px solid rgba(255,255,255,0.5)"><div style=position:absolute;transform:translate(-50%,-50%);background-color:rgba(255,255,255,0.5)>');function mx(n){let e=tt(n.position),t=tt(typeof n.hitAreaSize=="function"?n.hitAreaSize():n.hitAreaSize),i=tt(n.outerRingSize),s=tt(n.knobSize),r=tt(),o=It(()=>{let c=r[0]();return c==null?new Be:new Be().copy(c).multiplyScalar(1/i[0]())});return{position:e,hitAreaSize:t,outerRingSize:i,knobSize:s,dragOffset:r,value:o,UI:()=>{let[c,l]=tt(!1),[u,h]=tt(),[f,p]=r,[_,v]=tt(),m,d=M=>{let A=_();if(A==null)return;m=M.pointerId,A.setPointerCapture(m);let T=A.getBoundingClientRect();h(new Be(M.clientX-T.left,M.clientY-T.top)),p(new Be)},y=M=>{let A=_();if(A==null)return;let T=u();if(T==null)return;A.setPointerCapture(M.pointerId);let w=A.getBoundingClientRect(),g=new Be(M.clientX-w.left-T.x,M.clientY-w.top-T.y),S=g.length();S>.5*i[0]()&&g.multiplyScalar(.5*i[0]()/S),p(g)},b=M=>{_()!=null&&m!=null&&(h(void 0),p(void 0))};return(()=>{var M=px(),A=M.firstChild,T=A.firstChild;M.$$contextmenu=g=>g.preventDefault(),M.$$pointerup=b,M.$$pointermove=y,M.$$pointerdown=d;var w=v;return typeof w=="function"||Array.isArray(w)?zl(()=>w,M):v=M,Ki(()=>({e:`${e[0]().x}px`,t:`${e[0]().y}px`,a:`${t[0]()}px`,o:`${t[0]()}px`,i:`${u()?.x??.5*t[0]()}px`,n:`${u()?.y??.5*t[0]()}px`,s:`${i[0]()}px`,h:`${i[0]()}px`,r:`${.5*i[0]()+2.5}px`,d:`${.5*i[0]()+(f()?.x??0)}px`,l:`${.5*i[0]()+(f()?.y??0)}px`,u:`${s[0]()}px`,c:`${s[0]()}px`,w:`${.5*s[0]()}px`}),({e:g,t:S,a:O,o:C,i:P,n:I,s:L,h:U,r:F,d:B,l:$,u:Z,c:Q,w:ie},J)=>{g!==J.e&&mt(M,"left",g),S!==J.t&&mt(M,"top",S),O!==J.a&&mt(M,"width",O),C!==J.o&&mt(M,"height",C),P!==J.i&&mt(A,"left",P),I!==J.n&&mt(A,"top",I),L!==J.s&&mt(A,"width",L),U!==J.h&&mt(A,"height",U),F!==J.r&&mt(A,"border-radius",F),B!==J.d&&mt(T,"left",B),$!==J.l&&mt(T,"top",$),Z!==J.u&&mt(T,"width",Z),Q!==J.c&&mt(T,"height",Q),ie!==J.w&&mt(T,"border-radius",ie)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0}),M})()}}}Bl(["pointerdown","pointermove","pointerup","contextmenu"]);var _x=Ai("<div style=position:absolute;user-select:none;touch-action:none>");const gx=1;function xx(n){const[e,t]=tt(!1),[i,s]=tt(0),[r,o]=tt(!1),[a,c]=tt(0),[l,u]=tt(!1),h=n.externalPressed||(()=>!1);let f,p=!1;const _=()=>{f||(f=window.setInterval(()=>{c(T=>T+1)},50))},v=()=>{f&&(clearInterval(f),f=void 0)};Zi(()=>v()),requestAnimationFrame(function T(){const w=h();w&&!p&&(s(performance.now()),_()),!w&&p&&u(!0),p=w,requestAnimationFrame(T)});const m=()=>e()||h(),d=It(()=>{a();const T=m(),w=i();if(!T)return 0;const g=(performance.now()-w)/1e3;return Math.min(g/gx,1)}),y=T=>{T.currentTarget.setPointerCapture(T.pointerId),t(!0),s(performance.now()),_()},b=T=>{t(!1),v(),o(!0)},M=T=>{e()&&(t(!1),v(),o(!0))},A=()=>(()=>{var T=_x();return T.$$contextmenu=w=>w.preventDefault(),T.addEventListener("pointerleave",M),T.$$pointerup=b,T.$$pointerdown=y,Ki(()=>({e:`${n.position().x}px`,t:`${n.position().y}px`,a:`${n.size()}px`,o:`${n.size()}px`,i:`${.5*n.size()}px`,n:m()?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.5)"}),({e:w,t:g,a:S,o:O,i:C,n:P},I)=>{w!==I.e&&mt(T,"left",w),g!==I.t&&mt(T,"top",g),S!==I.a&&mt(T,"width",S),O!==I.o&&mt(T,"height",O),C!==I.i&&mt(T,"border-radius",C),P!==I.n&&mt(T,"background-color",P)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),T})();return{position:n.position,size:n.size,pressed:m,power:d,justReleased:()=>r()?(o(!1),!0):!1,justReleasedExternal:()=>l()?(u(!1),!0):!1,UI:A}}Bl(["pointerdown","pointerup","contextmenu"]);var vx=Ai('<div style="position:absolute;background-color:rgba(0, 0, 0, 0.5);border:2px solid rgba(255, 255, 255, 0.8);border-radius:4px;overflow:hidden;user-select:none;touch-action:none"><div style="position:absolute;left:0px;bottom:0px;width:100%;background:linear-gradient(to top, #00ff00, #ffff00, #ff0000);transition:height 0.05s">');function yx(n){const e=()=>(()=>{var t=vx(),i=t.firstChild;return Ki(()=>({e:`${n.position().x}px`,t:`${n.position().y}px`,a:`${n.width()}px`,o:`${n.height()}px`,i:`${n.power()*100}%`}),({e:s,t:r,a:o,o:a,i:c},l)=>{s!==l.e&&mt(t,"left",s),r!==l.t&&mt(t,"top",r),o!==l.a&&mt(t,"width",o),a!==l.o&&mt(t,"height",a),c!==l.i&&mt(i,"height",c)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),t})();return{position:n.position,UI:e}}class Sx extends Error{constructor(e,t,i){super(e),this.is_operational=t,this.context=i,this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}var Wh=(n=>(n.EID_MAX_INDEX_OVERFLOW="EID_MAX_INDEX_OVERFLOW",n.EID_MAX_GEN_OVERFLOW="EID_MAX_GEN_OVERFLOW",n.COMPONENT_NOT_REGISTERED="COMPONENT_NOT_REGISTERED",n.ENTITY_NOT_ALIVE="ENTITY_NOT_ALIVE",n.CIRCULAR_SYSTEM_DEPENDENCY="CIRCULAR_SYSTEM_DEPENDENCY",n.DUPLICATE_SYSTEM="DUPLICATE_SYSTEM",n.ARCHETYPE_NOT_FOUND="ARCHETYPE_NOT_FOUND",n.RESOURCE_NOT_REGISTERED="RESOURCE_NOT_REGISTERED",n))(Wh||{});class Mx extends Sx{constructor(e,t,i){super(t??e,!0,i),this.category=e}}function Mr(n,e,t){return n}const Rn=-1,yn=-1,ar=Object.freeze(Object.create(null)),Bi=5,zi=31,Ex=2166136261,bx=16777619,Tx=2654435769,Ax=1367130551,ai=16,yu=2,Xh=1024,Kr=0,Su=0,wx=31,Rx=1/60,Cx=4,Px=0,Dx=4;class si{_words;constructor(e){this._words=e??new Array(Dx).fill(0)}has(e){const t=e>>>Bi;return t>=this._words.length?!1:(this._words[t]&1<<(e&zi))!==0}set(e){const t=e>>>Bi;t>=this._words.length&&this.grow(t+1),this._words[t]|=1<<(e&zi)}clear(e){const t=e>>>Bi;t>=this._words.length||(this._words[t]&=~(1<<(e&zi)))}overlaps(e){const t=this._words,i=e._words,s=t.length<i.length?t.length:i.length;for(let r=0;r<s;r++)if((t[r]&i[r])!==0)return!0;return!1}contains(e){const t=e._words,i=this._words,s=i.length;for(let r=0;r<t.length;r++){const o=t[r];if(o!==0&&(r>=s||(i[r]&o)!==o))return!1}return!0}equals(e){const t=this._words,i=e._words,s=t.length>i.length?t.length:i.length;for(let r=0;r<s;r++){const o=r<t.length?t[r]:0,a=r<i.length?i[r]:0;if(o!==a)return!1}return!0}copy(){return new si(this._words.slice())}copy_with_set(e){const t=e>>>Bi,i=t+1,s=this._words.length>i?this._words.length:i,r=new Array(s).fill(0);for(let o=0;o<this._words.length;o++)r[o]=this._words[o];return r[t]|=1<<(e&zi),new si(r)}copy_with_clear(e){const t=this._words.slice(),i=e>>>Bi;return i<t.length&&(t[i]&=~(1<<(e&zi))),new si(t)}hash(){let e=Ex;const t=this._words;let i=t.length-1;for(;i>=0&&t[i]===0;)i--;for(let s=0;s<=i;s++)e^=t[s],e=Math.imul(e,bx);return e}for_each(e){const t=this._words;for(let i=0;i<t.length;i++){let s=t[i];if(s===0)continue;const r=i<<Bi;for(;s!==0;){const o=s&-s>>>0,a=zi-Math.clz32(o);e(r+a),s^=o}}}grow(e){let t=this._words.length;for(;t<e;)t*=2;const i=new Array(t).fill(0);for(let s=0;s<this._words.length;s++)i[s]=this._words[s];this._words=i}}class wi{constructor(e,t=ai){this._ctor=e,this._buf=new e(t)}_buf;_len=0;get length(){return this._len}push(e){this._len>=this._buf.length&&this._grow(),this._buf[this._len++]=e}pop(){return this._buf[--this._len]}get(e){return this._buf[e]}set_at(e,t){this._buf[e]=t}swap_remove(e){const t=this._buf[e];return this._buf[e]=this._buf[--this._len],t}clear(){this._len=0}get buf(){return this._buf}view(){return this._buf.subarray(0,this._len)}[Symbol.iterator](){let e=0;const t=this._buf,i=this._len;return{next(){return e<i?{value:t[e++],done:!1}:{value:0,done:!0}}}}ensure_capacity(e){if(e<=this._buf.length)return;let t=this._buf.length||1;for(;t<e;)t*=yu;const i=new this._ctor(t);i.set(this._buf.subarray(0,this._len)),this._buf=i}bulk_append(e,t,i){this.ensure_capacity(this._len+i),this._buf.set(e.subarray(t,t+i),this._len),this._len+=i}bulk_append_zeroes(e){this.ensure_capacity(this._len+e),this._buf.fill(0,this._len,this._len+e),this._len+=e}_grow(){const e=new this._ctor(this._buf.length*yu);e.set(this._buf),this._buf=e}}class Ix extends wi{constructor(e=ai){super(Float32Array,e)}}class Lx extends wi{constructor(e=ai){super(Float64Array,e)}}class Ux extends wi{constructor(e=ai){super(Int8Array,e)}}class Nx extends wi{constructor(e=ai){super(Int16Array,e)}}class Fx extends wi{constructor(e=ai){super(Int32Array,e)}}class Ox extends wi{constructor(e=ai){super(Uint8Array,e)}}class Bx extends wi{constructor(e=ai){super(Uint16Array,e)}}class qh extends wi{constructor(e=ai){super(Uint32Array,e)}}const zx={f32:Ix,f64:Lx,i8:Ux,i16:Nx,i32:Fx,u8:Ox,u16:Bx,u32:qh},Ji=20,lo=(1<<Ji)-1,Vx=wx-Ji,Mu=(1<<Vx)-1,kx=(n,e)=>e<<Ji|n,rn=n=>n&lo,Eu=n=>n>>Ji,Gx=n=>Mr(n),Hx=n=>Mr(n);class Wx{field_names;columns;reader;constructor(e){this.field_names=e,this.columns=[];for(let i=0;i<e.length;i++)this.columns.push([]);const t={length:0};for(let i=0;i<e.length;i++)t[e[i]]=this.columns[i];this.reader=t}emit(e){const t=this.field_names,i=this.columns;for(let s=0;s<t.length;s++)i[s].push(e[t[s]]);this.reader.length++}emit_signal(){this.reader.length++}clear(){this.reader.length=0;const e=this.columns;for(let t=0;t<e.length;t++)e[t].length=0}}const Xx=n=>Mr(n);class qx{field_names;field_index;columns;reader;constructor(e,t){this.field_names=e,this.field_index=Object.create(null),this.columns=[];for(let r=0;r<e.length;r++)this.field_index[e[r]]=r,this.columns.push([t[e[r]]??0]);const i=Object.create(null),s=this.columns;for(let r=0;r<e.length;r++){const o=s[r];Object.defineProperty(i,e[r],{get(){return o[Kr]},enumerable:!0})}this.reader=i}write(e){const t=this.field_names,i=this.columns;for(let s=0;s<t.length;s++)t[s]in e&&(i[s][Kr]=e[t[s]])}read_field(e){return this.columns[e][Kr]}write_field(e,t){this.columns[e][Kr]=t}}const Yx=n=>Mr(n);class $x{id;mask;has_columns;_entity_ids;length=0;edges=[];_flat_columns=[];_col_offset=[];_field_count=[];_field_index=[];_field_names=[];column_groups=[];_column_ids=[];constructor(e,t,i,s=Xh){if(this.id=e,this.mask=t,this._entity_ids=new qh(s),i){let r=0;for(let o=0;o<i.length;o++){const a=i[o],c=a.component_id,l=new Array(a.field_names.length);this._col_offset[c]=r,this._field_count[c]=a.field_names.length,this._field_index[c]=a.field_index,this._field_names[c]=a.field_names;for(let u=0;u<a.field_names.length;u++){const h=new zx[a.field_types[u]](s);l[u]=h,this._flat_columns[r++]=h}this.column_groups[c]={layout:a,columns:l},this._column_ids.push(c)}}this.has_columns=this._column_ids.length>0}get entity_count(){return this.length}get entity_ids(){return this._entity_ids.buf}get entity_list(){return this._entity_ids.view()}has_component(e){return this.mask.has(e)}matches(e){return this.mask.contains(e)}get_column(e,t){const i=e,s=this._field_index[i][t];return this._flat_columns[this._col_offset[i]+s].buf}write_fields(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return;const o=this._field_names[s],a=this._flat_columns;for(let c=0;c<o.length;c++)a[r+c].buf[e]=i[o[c]]}write_fields_positional(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return;const o=this._flat_columns;for(let a=0;a<i.length;a++)o[r+a].buf[e]=i[a]}read_field(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return NaN;const o=this._field_index[s][i];return o===void 0?NaN:this._flat_columns[r+o].buf[e]}copy_shared_from(e,t,i){const s=e._col_offset,r=e._field_count,o=e._flat_columns,a=this._flat_columns,c=this._column_ids;for(let l=0;l<c.length;l++){const u=c[l],h=s[u];if(h===void 0)continue;const f=this._col_offset[u],p=r[u];for(let _=0;_<p;_++)a[f+_].buf[i]=o[h+_].buf[t]}}add_entity(e){const t=this.length;this._entity_ids.push(e);const i=this._flat_columns;for(let s=0;s<i.length;s++)i[s].push(0);return this.length++,t}remove_entity(e){const t=this.length-1;let i=yn;const s=this._flat_columns,r=this._entity_ids.buf;if(e!==t){r[e]=r[t],i=rn(r[e]);for(let o=0;o<s.length;o++)s[o].swap_remove(e)}else for(let o=0;o<s.length;o++)s[o].pop();return this._entity_ids.pop(),this.length--,i}add_entity_tag(e){const t=this.length;return this._entity_ids.push(e),this.length++,t}remove_entity_tag(e){const t=this.length-1;let i=yn;const s=this._entity_ids.buf;return e!==t&&(s[e]=s[t],i=rn(s[e])),this._entity_ids.pop(),this.length--,i}move_entity_from(e,t,i,s){const r=this.length;this._entity_ids.push(i);const o=this._flat_columns,a=e._flat_columns;for(let l=0;l<o.length;l++){const u=s[l];o[l].push(u>=0?a[u].buf[t]:0)}this.length++;const c=e.has_columns?e.remove_entity(t):e.remove_entity_tag(t);yt[0]=r,yt[1]=c}move_entity_from_tag(e,t,i){const s=this.length;this._entity_ids.push(i),this.length++;const r=e.remove_entity_tag(t);yt[0]=s,yt[1]=r}bulk_move_all_from(e,t){const i=e.length;if(i===0)return this.length;const s=this.length,r=this._flat_columns,o=e._flat_columns;this._entity_ids.bulk_append(e._entity_ids.buf,0,i);for(let a=0;a<r.length;a++){const c=t[a];c>=0?r[a].bulk_append(o[c].buf,0,i):r[a].bulk_append_zeroes(i)}this.length+=i,e.length=0,e._entity_ids.clear();for(let a=0;a<o.length;a++)o[a].clear();return s}get_edge(e){return this.edges[e]}set_edge(e,t){this.edges[e]=t}}const yt=[0,yn];function Jr(n,e){const t=e._flat_columns,i=new Int16Array(t.length),s=e._column_ids,r=n._col_offset,o=e._col_offset,a=e._field_count;for(let c=0;c<s.length;c++){const l=s[c],u=o[l],h=a[l],f=r[l];if(f!==void 0)for(let p=0;p<h;p++)i[u+p]=f+p;else for(let p=0;p<h;p++)i[u+p]=-1}return i}function Yh(n,e,t){const i=n.get(e);i!==void 0?i.push(t):n.set(e,[t])}class jx{entity_generations=[];entity_high_water=0;entity_free_indices=[];entity_alive_count=0;component_metas=[];component_count=0;event_channels=[];event_count=0;resource_channels=[];resource_count=0;archetypes=[];archetype_map=new Map;next_archetype_id=0;component_index=new Map;registered_queries=[];empty_archetype_id;entity_archetype=[];entity_row=[];pending_destroy=[];pending_add_ids=[];pending_add_defs=[];pending_add_values=[];pending_remove_ids=[];pending_remove_defs=[];initial_capacity;constructor(e){this.initial_capacity=e??Xh,this.empty_archetype_id=this.arch_get_or_create_from_mask(new si)}arch_get(e){return this.archetypes[e]}arch_get_or_create_from_mask(e){const t=e.hash(),i=this.archetype_map.get(t);if(i!==void 0){for(let c=0;c<i.length;c++)if(this.archetypes[i[c]].mask.equals(e))return i[c]}const s=Yx(this.next_archetype_id++),r=[];e.for_each(c=>{const l=c,u=this.component_metas[l];u&&u.field_names.length>0&&r.push({component_id:l,field_names:u.field_names,field_index:u.field_index,field_types:u.field_types})});const o=new $x(s,e,r,this.initial_capacity);this.archetypes.push(o),Yh(this.archetype_map,t,s),e.for_each(c=>{const l=c;let u=this.component_index.get(l);u||(u=new Set,this.component_index.set(l,u)),u.add(s)});const a=this.registered_queries;for(let c=0;c<a.length;c++){const l=a[c];o.matches(l.include_mask)&&(!l.exclude_mask||!o.mask.overlaps(l.exclude_mask))&&(!l.any_of_mask||o.mask.overlaps(l.any_of_mask))&&l.result.push(o)}return s}arch_resolve_add(e,t){const i=this.arch_get(e);if(i.mask.has(t))return e;const s=i.get_edge(t);if(s?.add!=null)return s.add;const r=this.arch_get_or_create_from_mask(i.mask.copy_with_set(t));return this.arch_cache_edge(i,this.arch_get(r),t),r}arch_resolve_remove(e,t){const i=this.arch_get(e);if(!i.mask.has(t))return e;const s=i.get_edge(t);if(s?.remove!=null)return s.remove;const r=this.arch_get_or_create_from_mask(i.mask.copy_with_clear(t));return this.arch_cache_edge(this.arch_get(r),i,t),r}arch_cache_edge(e,t,i){const s=e.get_edge(i)??{add:null,remove:null,add_map:null,remove_map:null};s.add=t.id,s.add_map=Jr(e,t),e.set_edge(i,s);const r=t.get_edge(i)??{add:null,remove:null,add_map:null,remove_map:null};r.remove=e.id,r.remove_map=Jr(t,e),t.set_edge(i,r)}create_entity(){let e,t;this.entity_free_indices.length>0?(e=this.entity_free_indices.pop(),t=this.entity_generations[e]):(e=this.entity_high_water++,this.entity_generations[e]=Su,t=Su),this.entity_alive_count++;const i=kx(e,t);return this.entity_archetype[e]=this.empty_archetype_id,this.entity_row[e]=Rn,i}destroy_entity(e){if(!this.is_alive(e))return;const t=rn(e),i=this.entity_row[t];if(i!==Rn){const r=this.arch_get(this.entity_archetype[t]).remove_entity(i);r!==yn&&(this.entity_row[r]=i)}this.entity_archetype[t]=Rn,this.entity_row[t]=Rn;const s=Eu(e);this.entity_generations[t]=s+1&Mu,this.entity_free_indices.push(t),this.entity_alive_count--}is_alive(e){const t=rn(e);return t<this.entity_high_water&&this.entity_generations[t]===Eu(e)}get entity_count(){return this.entity_alive_count}destroy_entity_deferred(e){this.pending_destroy.push(e)}flush_destroyed(){const e=this.pending_destroy;if(e.length===0)return;const t=this.entity_archetype,i=this.entity_row,s=this.entity_generations,r=this.archetypes,o=this.entity_high_water;for(let a=0;a<e.length;a++){const c=e[a],l=c&lo,u=c>>Ji;if(l>=o||s[l]!==u)continue;const h=i[l];if(h!==Rn){const f=r[t[l]],p=f.has_columns?f.remove_entity(h):f.remove_entity_tag(h);p!==yn&&(i[p]=h)}t[l]=Rn,i[l]=Rn,s[l]=u+1&Mu,this.entity_free_indices.push(l),this.entity_alive_count--}e.length=0}get pending_destroy_count(){return this.pending_destroy.length}add_component_deferred(e,t,i){this.pending_add_ids.push(e),this.pending_add_defs.push(t),this.pending_add_values.push(i??ar)}remove_component_deferred(e,t){this.pending_remove_ids.push(e),this.pending_remove_defs.push(t)}flush_structural(){this.pending_add_ids.length>0&&this._flush_adds(),this.pending_remove_ids.length>0&&this._flush_removes()}_flush_adds(){const e=this.pending_add_ids,t=this.pending_add_defs,i=this.pending_add_values,s=e.length,r=this.entity_archetype,o=this.entity_row,a=this.entity_generations,c=this.archetypes,l=this.component_metas,u=this.entity_high_water;for(let h=0;h<s;h++){const f=e[h],p=f&lo,_=f>>Ji;if(p>=u||a[p]!==_)continue;const v=r[p],m=t[h],d=c[v];if(d.mask.has(m)){l[m].field_names.length>0&&d.write_fields(o[p],m,i[h]);continue}const y=this.arch_resolve_add(v,m),b=c[y],M=o[p],A=!b.has_columns&&!d.has_columns;let T;if(M!==Rn){if(A)b.move_entity_from_tag(d,M,f);else{const w=d.get_edge(m);b.move_entity_from(d,M,f,w.add_map)}T=yt[0],yt[1]!==yn&&(o[yt[1]]=M)}else T=A?b.add_entity_tag(f):b.add_entity(f);l[m].field_names.length>0&&b.write_fields(T,m,i[h]),r[p]=y,o[p]=T}e.length=0,t.length=0,i.length=0}_flush_removes(){const e=this.pending_remove_ids,t=this.pending_remove_defs,i=e.length,s=this.entity_archetype,r=this.entity_row,o=this.entity_generations,a=this.archetypes,c=this.entity_high_water;for(let l=0;l<i;l++){const u=e[l],h=u&lo,f=u>>Ji;if(h>=c||o[h]!==f)continue;const p=s[h],_=t[l],v=a[p];if(!v.mask.has(_))continue;const m=this.arch_resolve_remove(p,_),d=a[m],y=r[h];if(!d.has_columns&&!v.has_columns)d.move_entity_from_tag(v,y,u);else{const b=v.get_edge(_);d.move_entity_from(v,y,u,b.remove_map)}yt[1]!==yn&&(r[yt[1]]=y),s[h]=m,r[h]=yt[0]}e.length=0,t.length=0}get pending_structural_count(){return this.pending_add_ids.length+this.pending_remove_ids.length}register_component(e){const t=Gx(this.component_count++),i=Object.keys(e),s=new Array(i.length),r=Object.create(null);for(let o=0;o<i.length;o++)r[i[o]]=o,s[o]=e[i[o]];return this.component_metas.push({field_names:i,field_index:r,field_types:s}),t}add_component(e,t,i){if(!this.is_alive(e))return;const s=rn(e),r=this.entity_archetype[s],o=this.arch_get(r);if(o.has_component(t)){o.write_fields(this.entity_row[s],t,i);return}const a=this.arch_resolve_add(r,t),c=this.arch_get(a),l=this.entity_row[s];let u;if(l!==Rn){const h=o.get_edge(t);!c.has_columns&&!o.has_columns?c.move_entity_from_tag(o,l,e):c.move_entity_from(o,l,e,h.add_map),u=yt[0],yt[1]!==yn&&(this.entity_row[yt[1]]=l)}else u=c.has_columns?c.add_entity(e):c.add_entity_tag(e);c.write_fields(u,t,i),this.entity_archetype[s]=a,this.entity_row[s]=u}add_components(e,t){if(!this.is_alive(e))return;const i=rn(e),s=this.entity_archetype[i];let r=s;for(let o=0;o<t.length;o++)r=this.arch_resolve_add(r,t[o].def);if(r!==s){const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[i];let l;if(c!==Rn){const u=Jr(o,a);a.move_entity_from(o,c,e,u),l=yt[0],yt[1]!==yn&&(this.entity_row[yt[1]]=c)}else l=a.add_entity(e);for(let u=0;u<t.length;u++)a.write_fields(l,t[u].def,t[u].values??ar);this.entity_archetype[i]=r,this.entity_row[i]=l}else{const o=this.arch_get(s),a=this.entity_row[i];for(let c=0;c<t.length;c++)o.write_fields(a,t[c].def,t[c].values??ar)}}remove_component(e,t){if(!this.is_alive(e))return;const i=rn(e),s=this.entity_archetype[i],r=this.arch_get(s);if(!r.has_component(t))return;const o=this.arch_resolve_remove(s,t),a=this.arch_get(o),c=this.entity_row[i],l=r.get_edge(t);!a.has_columns&&!r.has_columns?a.move_entity_from_tag(r,c,e):a.move_entity_from(r,c,e,l.remove_map),yt[1]!==yn&&(this.entity_row[yt[1]]=c),this.entity_archetype[i]=o,this.entity_row[i]=yt[0]}remove_components(e,t){if(!this.is_alive(e))return;const i=rn(e),s=this.entity_archetype[i];let r=s;for(let u=0;u<t.length;u++)r=this.arch_resolve_remove(r,t[u]);if(r===s)return;const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[i],l=Jr(o,a);a.move_entity_from(o,c,e,l),yt[1]!==yn&&(this.entity_row[yt[1]]=c),this.entity_archetype[i]=r,this.entity_row[i]=yt[0]}has_component(e,t){if(!this.is_alive(e))return!1;const i=rn(e);return this.arch_get(this.entity_archetype[i]).has_component(t)}batch_add_component(e,t,i){if(e.length===0)return;const s=t;if(e.mask.has(s))return;const r=this.arch_resolve_add(e.id,s),o=this.arch_get(r),a=e.get_edge(s),c=e.length,l=this.entity_archetype,u=this.entity_row,h=o.bulk_move_all_from(e,a.add_map);for(let f=0;f<c;f++){const p=rn(o.entity_ids[h+f]);l[p]=r,u[p]=h+f}if(this.component_metas[s].field_names.length>0&&i)for(let f=0;f<c;f++)o.write_fields(h+f,s,i)}batch_remove_component(e,t){if(e.length===0)return;const i=t;if(!e.mask.has(i))return;const s=this.arch_resolve_remove(e.id,i),r=this.arch_get(s),o=e.get_edge(i),a=e.length,c=r.bulk_move_all_from(e,o.remove_map),l=this.entity_archetype,u=this.entity_row;for(let h=0;h<a;h++){const f=rn(r.entity_ids[c+h]);l[f]=s,u[f]=c+h}}get_entity_archetype(e){return this.arch_get(this.entity_archetype[rn(e)])}get_entity_row(e){return this.entity_row[rn(e)]}get_matching_archetypes(e,t,i){const s=e._words;let r=!1;for(let l=0;l<s.length;l++)if(s[l]!==0){r=!0;break}if(!r)return this.archetypes.filter(l=>(!t||!l.mask.overlaps(t))&&(!i||l.mask.overlaps(i)));let o,a=!1;for(let l=0;l<s.length;l++){let u=s[l];if(u===0)continue;const h=l<<Bi;for(;u!==0;){const f=u&-u>>>0,p=h+(zi-Math.clz32(f));u^=f;const _=this.component_index.get(p);if(!_||_.size===0){a=!0;break}(!o||_.size<o.size)&&(o=_)}if(a)break}if(a||!o)return[];const c=[];for(const l of o){const u=this.arch_get(l);u.matches(e)&&(!t||!u.mask.overlaps(t))&&(!i||u.mask.overlaps(i))&&c.push(u)}return c}register_query(e,t,i){const s=this.get_matching_archetypes(e,t,i);return this.registered_queries.push({include_mask:e.copy(),exclude_mask:t?t.copy():null,any_of_mask:i?i.copy():null,result:s}),s}get archetype_count(){return this.archetypes.length}register_event(e){const t=Hx(this.event_count++),i=new Wx(e);return this.event_channels.push(i),t}emit_event(e,t){this.event_channels[e].emit(t)}emit_signal(e){this.event_channels[e].emit_signal()}get_event_reader(e){return this.event_channels[e].reader}clear_events(){const e=this.event_channels;for(let t=0;t<e.length;t++)e[t].clear()}register_resource(e,t){const i=Xx(this.resource_count++),s=new qx(e,t);return this.resource_channels.push(s),i}get_resource_reader(e){return this.resource_channels[e].reader}get_resource_channel(e){return this.resource_channels[e]}}const Ma=["PRE_STARTUP","STARTUP","POST_STARTUP"],Ea=["PRE_UPDATE","UPDATE","POST_UPDATE"];class Zx{label_systems=new Map;sorted_cache=new Map;system_index=new Map;next_insertion_order=0;constructor(){for(let e=0;e<Ma.length;e++)this.label_systems.set(Ma[e],[]);this.label_systems.set("FIXED_UPDATE",[]);for(let e=0;e<Ea.length;e++)this.label_systems.set(Ea[e],[])}add_systems(e,...t){for(const i of t){const s="system"in i?i.system:i,r="system"in i?i.ordering:void 0,o={descriptor:s,insertion_order:this.next_insertion_order++,before:new Set(r?.before??[]),after:new Set(r?.after??[])};this.label_systems.get(e).push(o),this.system_index.set(s,e),this.sorted_cache.delete(e)}}remove_system(e){const t=this.system_index.get(e);if(t===void 0)return;const i=this.label_systems.get(t),s=i.findIndex(r=>r.descriptor===e);if(s!==-1){const r=i.length-1;s!==r&&(i[s]=i[r]),i.pop();for(const o of i)o.before.delete(e),o.after.delete(e)}this.system_index.delete(e),this.sorted_cache.delete(t)}run_startup(e){for(const t of Ma)this.run_label(t,e,Px)}run_update(e,t){for(const i of Ea)this.run_label(i,e,t)}run_fixed_update(e,t){this.run_label("FIXED_UPDATE",e,t)}has_fixed_systems(){return this.label_systems.get("FIXED_UPDATE").length>0}get_all_systems(){const e=[];for(const t of this.label_systems.values())for(const i of t)e.push(i.descriptor);return e}has_system(e){return this.system_index.has(e)}clear(){for(const e of this.label_systems.values())e.length=0;this.sorted_cache.clear(),this.system_index.clear()}run_label(e,t,i){const s=this.get_sorted(e);for(let r=0;r<s.length;r++)s[r].fn(t,i);t.flush()}get_sorted(e){const t=this.sorted_cache.get(e);if(t!==void 0)return t;const i=this.label_systems.get(e),s=this.topological_sort(i,e);return this.sorted_cache.set(e,s),s}topological_sort(e,t){if(e.length===0)return[];const i=new Map,s=new Map,r=new Map,o=new Set;for(const l of e)i.set(l.descriptor,new Set),s.set(l.descriptor,0),r.set(l.descriptor,l.insertion_order),o.add(l.descriptor);for(const l of e){for(const u of l.before)o.has(u)&&(i.get(l.descriptor).add(u),s.set(u,s.get(u)+1));for(const u of l.after)o.has(u)&&(i.get(u).add(l.descriptor),s.set(l.descriptor,s.get(l.descriptor)+1))}let a=[];for(const l of e)s.get(l.descriptor)===0&&a.push(l.descriptor);a.sort((l,u)=>r.get(u)-r.get(l));const c=[];for(;a.length>0;){const l=a.pop();c.push(l);for(const u of i.get(l)){const h=s.get(u)-1;s.set(u,h),h===0&&a.push(u)}a.sort((u,h)=>r.get(h)-r.get(u))}if(c.length!==e.length){const l=new Set(c),u=e.filter(h=>!l.has(h.descriptor)).map(h=>h.descriptor.name??`system_${h.descriptor.id}`);throw new Mx(Wh.CIRCULAR_SYSTEM_DEPENDENCY,`Circular system dependency detected in ${t}: [${u.join(", ")}]`)}return c}}const bu=new WeakMap;function Kx(n,e){let t=bu.get(n);if(!t){t=Object.create(null);const{field_names:r}=n.layout;for(let o=0;o<r.length;o++){const a=o;Object.defineProperty(t,r[o],{get(){return this._columns[a][this._row]},set(c){this._columns[a][this._row]=c},enumerable:!0,configurable:!1})}bu.set(n,t)}const i=Object.create(t),s=new Array(n.columns.length);for(let r=0;r<n.columns.length;r++)s[r]=n.columns[r].buf;return i._columns=s,i._row=e,i}class Jx{_archetypes;_defs;_resolver;_include;_exclude;_any_of;constructor(e,t,i,s,r,o){this._archetypes=e,this._defs=t,this._resolver=i,this._include=s,this._exclude=r,this._any_of=o}get archetype_count(){return this._archetypes.length}count(){const e=this._archetypes;let t=0;for(let i=0;i<e.length;i++)t+=e[i].entity_count;return t}get archetypes(){return this._archetypes}*[Symbol.iterator](){const e=this._archetypes;for(let t=0;t<e.length;t++)e[t].entity_count>0&&(yield e[t])}and(...e){const t=this._include.copy(),i=this._defs.slice();for(let s=0;s<e.length;s++)t.has(e[s])||(t.set(e[s]),i.push(e[s]));return this._resolver._resolve_query(t,this._exclude,this._any_of,i)}not(...e){const t=this._exclude?this._exclude.copy():new si;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(this._include,t,this._any_of,this._defs)}any_of(...e){const t=this._any_of?this._any_of.copy():new si;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(this._include,this._exclude,t,this._defs)}}class Qx{constructor(e){this._resolver=e}every(...e){const t=new si;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(t,null,null,e)}}class ev{store;constructor(e){this.store=e}create_entity(){return this.store.create_entity()}get_field(e,t,i){const s=this.store.get_entity_archetype(e),r=this.store.get_entity_row(e);return s.read_field(r,t,i)}set_field(e,t,i,s){const r=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),a=r.get_column(t,i);a[o]=s}ref(e,t){const i=this.store.get_entity_archetype(t),s=this.store.get_entity_row(t);return Kx(i.column_groups[e],s)}destroy_entity(e){return this.store.destroy_entity_deferred(e),this}add_component(e,t,i){return this.store.add_component_deferred(e,t,i??ar),this}remove_component(e,t){return this.store.remove_component_deferred(e,t),this}flush(){this.store.flush_structural(),this.store.flush_destroyed()}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}read(e){return this.store.get_event_reader(e)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}}const tv=n=>Mr(n);class nv{store;schedule;ctx;systems=new Set;next_system_id=0;_fixed_timestep;_accumulator=0;_max_fixed_steps;query_cache=new Map;scratch_mask=new si;constructor(e){this.store=new jx(e?.initial_capacity),this.schedule=new Zx,this.ctx=new ev(this.store),this._fixed_timestep=e?.fixed_timestep??Rx,this._max_fixed_steps=e?.max_fixed_steps??Cx}get fixed_timestep(){return this._fixed_timestep}set fixed_timestep(e){this._fixed_timestep=e}get fixed_alpha(){return this._accumulator/this._fixed_timestep}register_component(e,t){if(Array.isArray(e)){const i=t??"f64",s=Object.create(null);for(const r of e)s[r]=i;return this.store.register_component(s)}return this.store.register_component(e)}register_tag(){return this.store.register_component({})}register_event(e){return this.store.register_event(e)}register_signal(){return this.store.register_event([])}register_resource(e,t){return this.store.register_resource(e,t)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}create_entity(){return this.store.create_entity()}destroy_entity_deferred(e){this.store.destroy_entity_deferred(e)}is_alive(e){return this.store.is_alive(e)}get entity_count(){return this.store.entity_count}add_component(e,t,i){return this.store.add_component(e,t,i??ar),this}add_components(e,t){this.store.add_components(e,t)}remove_component(e,t){return this.store.remove_component(e,t),this}remove_components(e,...t){this.store.remove_components(e,t)}has_component(e,t){return this.store.has_component(e,t)}batch_add_component(e,t,i){this.store.batch_add_component(e,t,i)}batch_remove_component(e,t){this.store.batch_remove_component(e,t)}get_field(e,t,i){const s=this.store.get_entity_archetype(e),r=this.store.get_entity_row(e);return s.read_field(r,t,i)}set_field(e,t,i,s){const r=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),a=r.get_column(t,i);a[o]=s}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}query(...e){const t=this.scratch_mask;t._words.fill(0);for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolve_query(t.copy(),null,null,e)}_resolve_query(e,t,i,s){const r=e.hash(),o=t?t.hash():0,a=i?i.hash():0,c=r^Math.imul(o,Tx)^Math.imul(a,Ax)|0,l=this._find_cached(c,e,t,i);if(l!==void 0)return l.query;const u=this.store.register_query(e,t??void 0,i??void 0),h=new Jx(u,s,this,e.copy(),t?.copy()??null,i?.copy()??null);return Yh(this.query_cache,c,{include_mask:e.copy(),exclude_mask:t?.copy()??null,any_of_mask:i?.copy()??null,query:h}),h}_find_cached(e,t,i,s){const r=this.query_cache.get(e);if(r)for(let o=0;o<r.length;o++){const a=r[o];if(!(!a.include_mask.equals(t)||!(i===null?a.exclude_mask===null:a.exclude_mask!==null&&a.exclude_mask.equals(i))||!(s===null?a.any_of_mask===null:a.any_of_mask!==null&&a.any_of_mask.equals(s))))return a}}register_system(e,t){let i;if(typeof e=="function")if(t!==void 0){const o=t(new Qx(this)),a=this.ctx,c=e;i={fn:(l,u)=>c(o,a,u)}}else i={fn:e};else i=e;const s=tv(this.next_system_id++),r=Object.freeze(Object.assign({id:s},i));return this.systems.add(r),r}add_systems(e,...t){return this.schedule.add_systems(e,...t),this}remove_system(e){this.schedule.remove_system(e),e.on_removed?.(),this.systems.delete(e)}get system_count(){return this.systems.size}startup(){for(const e of this.systems.values())e.on_added?.(this.ctx);this.schedule.run_startup(this.ctx)}update(e){if(this.schedule.has_fixed_systems()){this._accumulator+=e;const t=this._max_fixed_steps*this._fixed_timestep;for(this._accumulator>t&&(this._accumulator=t);this._accumulator>=this._fixed_timestep;)this.schedule.run_fixed_update(this.ctx,this._fixed_timestep),this._accumulator-=this._fixed_timestep}this.schedule.run_update(this.ctx,e),this.store.clear_events()}flush(){this.ctx.flush()}dispose(){for(const e of this.systems.values())e.dispose?.(),e.on_removed?.();this.systems.clear(),this.schedule.clear()}}class iv{#e;#n;constructor(){const[e,t]=Wf({});this.#e=e,this.#n=t}track(e){e in this.#e||this.#n(t=>(t[e]=0,t)),this.#e[e]}untrack(e){this.#n(t=>(delete t[e],t))}dirty(e){e in this.#e&&this.#n(t=>(t[e]=1-t[e],t))}}class Cl{#e;#n;#t;#s;#i=0;#r=!1;#o;constructor(e,t,i,s,r){this.#t=e,this.#s=t,this.#e=i,this.#n=s,this.#o=r}get value(){return this.#t.track(this.#s),Zt()!==null&&(this.#i++,this.#r||(this.#r=!0,Zi(()=>{this.#i--,this.#i===0&&queueMicrotask(()=>{this.#i===0&&(this.#r=!1,this.#o?.())})}))),this.#e()}dirty(){this.#n()}}class sv{#e;#n;#t;#s;#i;constructor(e,t,i){this.#e=e,this.#n=t,this.#t=i,this.#i=`resource:${t.toString()}`,this.#s=new Map}get resourceKey(){return this.#i}#r(e){if(Zt()===null)return this.#t[e];const i=`${this.#i}:${e}`;let s=this.#s.get(e);return s===void 0&&(s=new Cl(this.#e,i,()=>this.#t[e],()=>this.#e.dirty(i),()=>{this.#e.untrack(i),this.#s.delete(e)}),this.#s.set(e,s)),s.value}get delta(){return this.#r("delta")}get elapsed(){return this.#r("elapsed")}get(e){return this.#r(e)}}class rv{#e;#n;#t;#s;#i;constructor(e,t,i){this.#e=e,this.#n=t,this.#t=i,this.#s=new Map,this.#i=new Map}get id(){return this.#t}hasComponent(e){if(Zt()===null)return this.#n.has_component(this.#t,e);const i=`entity:${this.#t}:has:${e}`;let s=this.#s.get(i);return s===void 0&&(s=new Cl(this.#e,i,()=>this.#n.has_component(this.#t,e),()=>this.#e.dirty(i),()=>{this.#e.untrack(i),this.#s.delete(i)}),this.#s.set(i,s)),s.value}getField(e,t){if(Zt()===null)return this.#n.get_field(this.#t,e,t);const s=`entity:${this.#t}:${e}:${t}`;let r=this.#i.get(s);return r===void 0&&(r=new Cl(this.#e,s,()=>this.#n.get_field(this.#t,e,t),()=>this.#e.dirty(s),()=>{this.#e.untrack(s),this.#i.delete(s)}),this.#i.set(s,r)),r.value}}class lr{#e;#n;#t;#s;#i;constructor(e,t,i,s){this.#e=e,this.#n=t,this.#s=i,this.#i=s,this.#t=t.query(...i)}get queryKey(){return this.#i}get archetype_count(){return Zt()===null?this.#t.archetype_count:(this.#e.track(`${this.#i}:archetype_count`),this.#t.archetype_count)}count(){return Zt()===null?this.#t.count():(this.#e.track(`${this.#i}:count`),this.#e.track("world:entities"),this.#t.count())}get archetypes(){return Zt()===null?this.#t.archetypes:(this.#e.track(`${this.#i}:archetypes`),this.#e.track("world:entities"),this.#t.archetypes)}*[Symbol.iterator](){const e=Zt();if(this.#t.archetypes,e===null){for(const t of this.#t)yield t;return}this.#e.track(`${this.#i}:archetypes`);for(const t of this.#t)yield new ov(this.#e,this.#n,t,this.#i)}and(...e){return new lr(this.#e,this.#n,[...this.#s,...e],`${this.#i}:and`)}not(...e){return new lr(this.#e,this.#n,this.#s,`${this.#i}:not`)}any_of(...e){return new lr(this.#e,this.#n,this.#s,`${this.#i}:any_of`)}}class ov{#e;#n;#t;#s;constructor(e,t,i,s){this.#e=e,this.#n=t,this.#t=i,this.#s=s}get entity_ids(){if(Zt()===null)return this.#t.entity_ids;const t=`arch:${this.#t.id}:entity_ids`;return this.#e.track(t),this.#t.entity_ids}get entity_count(){if(Zt()===null)return this.#t.entity_count;const t=`arch:${this.#t.id}:count`;return this.#e.track(t),this.#t.entity_count}has_component(e){if(Zt()===null)return this.#t.has_component(e);const i=`arch:${this.#t.id}:has:${e}`;return this.#e.track(i),this.#t.has_component(e)}get_column(e,t){if(Zt()===null)return this.#t.get_column(e,t);const s=`arch:${this.#t.id}:col`;return this.#e.track(s),this.#t.get_column(e,t)}}class av{#e;#n;constructor(e){this.#e=e,this.#n=new iv}get ecs(){return this.#e}dirty(e){this.#n.dirty(e)}query(...e){const t=`query:${e.map(i=>i.toString()).join(",")}`;return new lr(this.#n,this.#e,e,t)}resource(e){return new sv(this.#n,e,this.#e.resource(e))}entity(e){return new rv(this.#n,this.#e,e)}create_entity(){const e=this.#e.create_entity();return fn(()=>this.#n.dirty("world:entities")),e}destroy_entity_deferred(e){this.#e.destroy_entity_deferred(e),fn(()=>this.#n.dirty("world:entities"))}add_component(e,t,i){const s=`entity:${e}:has:${t}`;return this.#e.add_component(e,t,i),fn(()=>{this.#n.dirty(s),this.#n.dirty("world:entities")}),this}remove_component(e,t){const i=`entity:${e}:has:${t}`;return this.#e.remove_component(e,t),fn(()=>{this.#n.dirty(i),this.#n.dirty("world:entities")}),this}set_field(e,t,i,s){const r=`entity:${e}:${t}:${i}`;this.#e.set_field(e,t,i,s),fn(()=>this.#n.dirty(r))}set_resource(e,t){const i=this.#e.resource(e);this.#e.set_resource(e,t);for(const s of Object.keys(i))this.#n.dirty(`resource:${e.toString()}:${s}`)}}const lv={def:{x:"f64",y:"f64",z:"f64"}},cv={def:{x:"f64",y:"f64",z:"f64"}},uv={def:{playerType:"u8",facingForward:"u8"}},hv={def:[]},fv={def:[]},dv={def:{x:"f64",z:"f64",jump:"u8"}},pv={def:{width:"f64",length:"f64",netHeight:"f64"}},mv={def:{size:"f64"}},_v={def:{minX:"f64",minY:"f64",minZ:"f64",maxX:"f64",maxY:"f64",maxZ:"f64"}},gv={def:[]},xv={def:{meshId:"u32"}},vv={schema:{x:0,y:0,z:0}},yv={schema:{servingPlayer:0}},Sv={def:{phase:"u8",serverPlayer:"u8",throwTime:"f64"}},Mv={def:{side:"i8"}},wt=new nv,Ev=new av(wt),ce=wt.register_component(lv.def),Re=wt.register_component(cv.def),At=wt.register_component(uv.def),xr=wt.register_component(hv.def),ji=wt.register_component(fv.def),Lt=wt.register_component(dv.def),Jn=wt.register_component(pv.def),Ti=wt.register_component(mv.def),bv=wt.register_component(_v.def),$h=wt.register_component(gv.def);wt.register_component(xv.def);const Lo=wt.register_resource(["x","y","z"],vv.schema),Tv=wt.register_resource(["servingPlayer"],yv.schema),We=wt.register_component(Sv.def),Qn=wt.register_component(Mv.def);function Av(){return wt.startup(),wt.set_resource(Tv,{servingPlayer:0}),wt.set_resource(Lo,{x:0,y:-10,z:0}),{ecs:Ev}}function jh(n){const e=n.reactiveEcs,t=e.create_entity();e.add_component(t,ce,{x:n.position.x,y:n.position.y,z:n.position.z}),e.add_component(t,Re,{x:n.velocity.x,y:n.velocity.y,z:n.velocity.z});const i=n.playerType==="Cubey"?0:1,s=n.facingForward?1:0;return e.add_component(t,At,{playerType:i,facingForward:s}),t}function wv(n){const e=n.reactiveEcs,t=e.create_entity();return e.add_component(t,Jn,{width:n.width,length:n.length,netHeight:n.netHeight}),t}function Rv(n){const e=n.reactiveEcs,t=n.position(),i=new k(0,0,0),s=e.create_entity();e.add_component(s,ce,{x:t.x,y:t.y,z:t.z}),e.add_component(s,Re,{x:i.x,y:i.y,z:i.z}),e.add_component(s,Ti,{size:n.size()});const r=n.boundary();return e.add_component(s,bv,{minX:r.min.x,minY:r.min.y,minZ:r.min.z,maxX:r.max.x,maxY:r.max.y,maxZ:r.max.z}),e.add_component(s,$h,{}),s}function Cv(n,e){return ts(t=>(It(Vo(It(()=>{let i=[];for(let s of n.query(ce,At)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i());s.getField(At,"playerType"),s.getField(At,"facingForward");let r=new $i,o,a,c=[],l,u=[];const h=new xs({color:16711680}),f=new xs({color:16776960}),p=new Ht(.5,.2,.5);o=new Ke(p,h),o.position.set(0,.1,0);const _=new Ht(.5,.25,.5);a=new Ke(_,h),a.position.set(0,.45,0);const v=new Ht(.1,.2,.1),m=new Ke(v,f),d=new Ke(v,f);m.position.set(-.14,.3,.3),d.position.set(.14,.3,.3),c=[m,d];const y=new Ht(.1,.4,.1);l=new Ke(y,f),l.position.set(0,.3,.3);const b=new Ao(.08),M=new Ke(b,f),A=new Ke(b,f);M.position.set(-.15,.48,.25),A.position.set(.15,.48,.25),u=[M,A],r.add(o),r.add(a),c.forEach(U=>r.add(U)),r.add(l),u.forEach(U=>r.add(U));const T=new $i,w=new xs({color:9127187}),g=new To(.02,.02,.3,8),S=new Ke(g,w);S.position.set(0,0,0),S.rotation.x=Math.PI/2,T.add(S);const O=new To(.4,.4,.02,16),C=new Ke(O,w);C.position.set(0,0,.15),C.rotation.x=Math.PI/2,T.add(C),T.position.set(.4,.5,.3),r.add(T);const P=new bo(.4,32);P.scale(1,.5,1);const I=new Eo({color:0,transparent:!0,opacity:.3}),L=new Ke(P,I);L.rotation.x=-Math.PI/2,L.position.y=.01,e.add(L),e.add(r),Zi(()=>{e.remove(r),e.remove(L),p.dispose(),_.dispose(),v.dispose(),y.dispose(),b.dispose(),g.dispose(),O.dispose(),P.dispose(),h.dispose(),f.dispose(),w.dispose(),I.dispose()}),It(()=>{let U=s.getField(ce,"x"),F=s.getField(ce,"y"),B=s.getField(ce,"z"),$=s.getField(At,"facingForward"),Z=s.getField(Qn,"side");r.position.set(U,F,B),$===1?r.quaternion.set(0,1,0,0):r.quaternion.set(0,0,0,1);const Q=Z*.4;T.position.set(Q,.5,.3);const ie=Math.max(.3,1-F*.1);L.scale.set(ie,ie,ie),L.position.set(U,.01,B)})})),It(Vo(It(()=>{let i=[];for(let s of n.query(Jn)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i()),r={width:s.getField(Jn,"width"),length:s.getField(Jn,"length"),netHeight:s.getField(Jn,"netHeight")};const o=new $i,a=new xs({color:3968845}),c=new xs({color:13421772,transparent:!0,opacity:.5}),l=new Ht(r.width,.1,r.length),u=new Ke(l,a);u.position.y-=.05,o.add(u);const h=new xs({color:16777215}),f=.05,p=.01,_=new Ht(r.width,p,f),v=new Ke(_,h);v.position.set(0,.01,-r.length/2),o.add(v);const m=new Ke(_,h);m.position.set(0,.01,r.length/2),o.add(m);const d=new Ht(f,p,r.length),y=new Ke(d,h);y.position.set(-r.width/2,.01,0),o.add(y);const b=new Ke(d,h);b.position.set(r.width/2,.01,0),o.add(b);const M=6.4,A=new Ht(r.width-2*f,p,f),T=new Ke(A,h);T.position.set(0,.01,-M),o.add(T);const w=new Ke(A,h);w.position.set(0,.01,M),o.add(w);const g=new Ht(f,p,M*2),S=new Ke(g,h);S.position.set(0,.01,0),o.add(S);const O=8.23,C=new Ht(f,p,r.length),P=new Ke(C,h);P.position.set(-O/2,.01,0),o.add(P);const I=new Ke(C,h);I.position.set(O/2,.01,0),o.add(I);const L=new Ht(r.width,r.netHeight,.1),U=new Ke(L,c);U.position.y=.5*r.netHeight,o.add(U),e.add(o),Zi(()=>{e.remove(o),l.dispose(),L.dispose(),a.dispose(),c.dispose(),h.dispose(),_.dispose(),d.dispose(),A.dispose(),g.dispose(),C.dispose()})})),It(Vo(It(()=>{let i=[];for(let s of n.query(ce,Ti)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i()),r=s.getField(Ti,"size");const o=new Ao(r),a=new hp,c=new Ke(o,a);e.add(c);const l=new bo(r,32);l.scale(1,.5,1);const u=new Eo({color:0,transparent:!0,opacity:.3}),h=new Ke(l,u);h.rotation.x=-Math.PI/2,h.position.y=.01,e.add(h),Zi(()=>{e.remove(c),e.remove(h),o.dispose(),a.dispose(),l.dispose(),u.dispose()}),It(()=>{let f=s.getField(ce,"x"),p=s.getField(ce,"y"),_=s.getField(ce,"z");c.position.set(f,p,_);const v=Math.max(.3,1-p*.1);h.scale.set(v,v,v),h.position.set(f,.01,_)})})),{update:()=>{},dispose:t}))}function Pv(n,e,t,i,s,r){return{update:()=>{const a=[],c=n.query(xr,Lt);for(const l of c){l.get_column(Lt,"x"),l.get_column(Lt,"z");const u=l.entity_ids;for(let h=0;h<l.entity_count;h++){const f=u[h];let p=0,_=0;i()&&(p-=1),s()&&(p+=1),t()&&(_+=1),e()&&(_-=1),p+=r().x,_+=r().y,a.push({entityId:f,moveX:p,moveZ:_})}}for(const{entityId:l,moveX:u,moveZ:h}of a){const f=l;n.set_field(f,Lt,"x",u),n.set_field(f,Lt,"z",h)}},dispose:()=>{}}}function Dv(n){return ts(e=>({update:i=>{const s=n.resource(Lo),o=n.query(Jn).archetypes[0],a=o?{width:o.get_column(Jn,"width")[0],length:o.get_column(Jn,"length")[0],netHeight:o.get_column(Jn,"netHeight")[0]}:void 0;let c=0,l=!1;const u=1,h=n.query(We);if(h.archetypes.length>0){const d=h.archetypes[0],y=d.get_column(We,"phase");c=d.get_column(We,"serverPlayer")[0],y[0],l=y[0]===u}let f={x:0,z:0};const p=n.query(ce,Re,Ti);if(p.archetypes.length>0){const d=p.archetypes[0],y=d.get_column(ce,"x"),b=d.get_column(ce,"y"),M=d.get_column(ce,"z"),A=d.get_column(Re,"x"),T=d.get_column(Re,"y"),w=d.get_column(Re,"z");f={x:y[0],y:b[0],z:M[0]},A[0],T[0],w[0]}const _=(d,y)=>{const b=d.get_column(ce,"x"),M=d.get_column(ce,"y"),A=d.get_column(ce,"z"),T=d.get_column(Re,"x"),w=d.get_column(Re,"y"),g=d.get_column(Re,"z"),S=d.get_column(Lt,"x"),O=d.get_column(Lt,"z"),C=d.get_column(Lt,"jump"),P=d.get_column(At,"playerType"),I=d.get_column(At,"facingForward"),L=d.entity_ids,U=d.get_column(Qn,"side");for(let F=0;F<d.entity_count;F++){const B=L[F],$={x:b[F],y:M[F],z:A[F]},Z={x:T[F],y:w[F],z:g[F]},Q={x:S[F],z:O[F],jump:C[F]},ie={playerType:P[F],facingForward:I[F]};let J=$.x,De=$.y,He=$.z,et=Z.x,Y=Z.y,ee=Z.z;const se=ie.playerType===c;let Ce=U[F];if(l&&se||(J+=Q.x*5.25*i,He+=Q.z*5.25*i,et=Q.x*5.25,ee=Q.z*5.25,Q.x>.1?Ce=-1:Q.x<-.1&&(Ce=1)),f.x-$.x,f.z-$.z,De>0&&(Y+=s.get("y")*i),J+=et*i,De+=Y*i,He+=ee*i,De<=0&&(De=0,Y=0),a){const we=.5*a.width,ut=.5*a.length,Le=.25;J<-we+Le&&(J=-we+Le),J>we-Le&&(J=we-Le),ie.facingForward===1?(He>ut-Le&&(He=ut-Le),He<Le&&(He=Le)):(He<-ut+Le&&(He=-ut+Le),He>-Le&&(He=-Le))}const xe=B;n.set_field(xe,ce,"x",J),n.set_field(xe,ce,"y",De),n.set_field(xe,ce,"z",He),n.set_field(xe,Re,"x",et),n.set_field(xe,Re,"y",Y),n.set_field(xe,Re,"z",ee),n.set_field(xe,Qn,"side",Ce)}},v=n.query(ce,Re,Lt,At,Qn,xr);for(const d of v.archetypes)_(d);const m=n.query(ce,Re,Lt,At,Qn,ji);for(const d of m.archetypes)_(d)},dispose:e}))}class Iv{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t)}off(e,t){const i=this.listeners.get(e);if(i){const s=i.indexOf(t);s>-1&&i.splice(s,1)}}emit(e,t){const i=this.listeners.get(e);i&&i.forEach(s=>s(t))}}const bn=new Iv;function Lv(n,e,t){return ts(i=>{let s=0,r=!0;return{update:a=>{const c=n.resource(Lo);s>0&&(s-=a);const l=[];for(const u of n.query(ce,Re,Ti,$h)){const h=u.get_column(ce,"x"),f=u.get_column(ce,"y"),p=u.get_column(ce,"z"),_=u.get_column(Re,"x"),v=u.get_column(Re,"y"),m=u.get_column(Re,"z"),d=u.get_column(Ti,"size"),y=u.entity_ids;for(let b=0;b<u.entity_count;b++){const M=y[b],A={x:h[b],y:f[b],z:p[b]},T={x:_[b],y:v[b],z:m[b]},w={size:d[b]};let g=T.x,S=T.y,O=T.z;g+=c.get("x")*a,S+=c.get("y")*a,O+=c.get("z")*a;let C=A.x+g*a,P=A.y+S*a,I=A.z+O*a;const L=w.size*.5;P<L&&(P=L,S=-S*.7,O=O*.7,Math.abs(S)<.3&&(S=0),r&&bn.emit("ballBounce",{z:I,y:P})),r=P>L;const U=n.query(We);let F=!1;if(U.archetypes.length>0&&U.archetypes[0].get_column(We,"phase")[0]!==2&&(F=!0),s<=0&&!F)for(const B of n.query(ce,Re,At,Qn)){const $=B.get_column(ce,"x")[0],Z=B.get_column(ce,"y")[0],Q=B.get_column(ce,"z")[0],ie=B.get_column(Re,"x")[0],J=B.get_column(At,"playerType")[0],De=B.get_column(At,"facingForward")[0],et=B.get_column(Qn,"side")[0]*.5,Y=$+et,ee=Z+.5,se=Q+(De===1?-.4:.4),Ce=.8,xe=C-Y,we=P-ee,ut=I-se;if(Math.sqrt(xe*xe+we*we+ut*ut)<Ce+L+.3){const D=J===0?1:-1,_t=ie*.5,pe=1+.7*.5,R=Y+xe*.5,x=ee+.3;g=(C-R)*.8+_t,S=4.5*pe,O=D*6*pe,P=x+L,s=.3,bn.emit("ballHit",{player:J});break}const qe=C-A.x,je=P-A.y,Ue=I-A.z,ft=Math.sqrt(qe*qe+je*je+Ue*Ue);if(ft>.01){const D=Math.max(0,Math.min(1,((Y-A.x)*qe+(ee-A.y)*je+(se-A.z)*Ue)/(ft*ft))),_t=A.x+D*qe,Ye=A.y+D*je,it=A.z+D*Ue,pe=_t-Y,R=Ye-ee,x=it-se,z=Math.sqrt(pe*pe+R*R+x*x);if(z<Ce+L+.3){const j=J===0?1:-1,K=1-z/(Ce+L+.3),X=ie*.5,be=1+.7*.5;g=pe/z*.8*K+X,S=1.5*be,O=j*6*be,P=Math.max(P,ee+Ce+L+.2),s=.3,bn.emit("ballHit",{player:J});break}}}l.push({entityId:M,newPosX:C,newPosY:P,newPosZ:I,newVelX:g,newVelY:S,newVelZ:O})}}for(const{entityId:u,newPosX:h,newPosY:f,newPosZ:p,newVelX:_,newVelY:v,newVelZ:m}of l){const d=u;n.set_field(d,ce,"x",h),n.set_field(d,ce,"y",f),n.set_field(d,ce,"z",p),n.set_field(d,Re,"x",_),n.set_field(d,Re,"y",v),n.set_field(d,Re,"z",m)}},dispose:i}})}const ba=0,Ta=1,Uv=2;function Nv(n,e,t,i,s,r){return ts(o=>{let a=!1,c=0;return{update:u=>{const h=n.query(ce,At),f=n.query(ce,Re),p=n.query(We);if(p.archetypes.length===0)return;const _=p.archetypes[0],v=_.get_column(We,"phase"),m=_.get_column(We,"serverPlayer"),d=_.get_column(We,"throwTime"),y=_.entity_ids[0],b=v[0],M=m[0];d[0];let A={x:0,y:0,z:0},T={x:0,y:0,z:0};for(const S of h){const O=S.get_column(ce,"x"),C=S.get_column(ce,"y"),P=S.get_column(ce,"z"),I=S.get_column(At,"playerType");for(let L=0;L<S.entity_count;L++)if(I[L]===M){A={x:O[L],y:C[L],z:P[L]};break}}for(const S of f){const O=S.get_column(ce,"x"),C=S.get_column(ce,"y"),P=S.get_column(ce,"z"),I=S.get_column(Re,"x"),L=S.get_column(Re,"y"),U=S.get_column(Re,"z");T={x:O[0],y:C[0],z:P[0]},I[0],L[0],U[0]}if(b===Ta){const S=T.x-A.x,O=T.z-A.z;Math.sqrt(S*S+O*O)<.5&&T.y<A.y+.3&&(n.set_field(y,We,"phase",ba),n.set_field(y,We,"throwTime",0))}if(b===ba){const S=n.query(ce);if(S.archetypes.length>0){const C=S.archetypes[0].entity_ids[0],P=M===0?-.5:.5;n.set_field(C,ce,"x",A.x+P),n.set_field(C,ce,"y",A.y+.8),n.set_field(C,ce,"z",A.z)}}const w=e()&&!a,g=r();if(a=e(),w&&(c=s(),b===ba&&(n.set_field(y,We,"phase",Ta),n.set_field(y,We,"throwTime",0),n.set_field(f.archetypes[0].entity_ids[0],ce,"x",A.x),n.set_field(f.archetypes[0].entity_ids[0],ce,"y",A.y+1.5),n.set_field(f.archetypes[0].entity_ids[0],ce,"z",A.z),n.set_field(f.archetypes[0].entity_ids[0],Re,"x",0),n.set_field(f.archetypes[0].entity_ids[0],Re,"y",4),n.set_field(f.archetypes[0].entity_ids[0],Re,"z",0))),g&&b===Ta){n.set_field(y,We,"phase",Uv);const S=t(),C=1+c*.375,P=4*S+(Math.random()-.5)*1,I=(3+Math.random()*2)*C,L=(M===0?8:-8)*C;n.set_field(f.archetypes[0].entity_ids[0],Re,"x",P),n.set_field(f.archetypes[0].entity_ids[0],Re,"y",I),n.set_field(f.archetypes[0].entity_ids[0],Re,"z",L),bn.emit("ballHit",{player:M});const U=n.query(ce,At);for(const F of U){const B=F.get_column(ce,"x"),$=F.get_column(ce,"y"),Z=F.get_column(ce,"z"),Q=F.get_column(At,"playerType");for(let ie=0;ie<F.entity_count;ie++)if(Q[ie]===M){const J=F.entity_ids[ie];n.set_field(J,ce,"x",B[ie]),n.set_field(J,ce,"y",$[ie]),n.set_field(J,ce,"z",Z[ie]);break}}}},dispose:o}})}const Qr=0,Tu=2,Au=23.77,wu=10.97,Ru=["0","15","30","40","ADV"];function Fv(n,e,t,i){return ts(s=>{let r=0,o=0;const[a,c]=tt(0),[l,u]=tt(0),[h,f]=tt(0),p=()=>{e&&e(a(),l(),h()),_()},_=()=>{const A=a(),T=l();if(A>=6){v(0);return}if(T>=6){v(1);return}},v=A=>{console.log(`Player ${A} wins the game!`),c(0),u(0),t&&t(A),i&&i()},m=()=>{const A=a(),T=l();let w,g;return A>=4&&T>=4?A===T?(w="40",g="40"):A>T?(w="ADV",g="40"):(w="40",g="ADV"):(w=Ru[Math.min(A,4)],g=Ru[Math.min(T,4)]),{p0:w,p1:g,server:h()}},d=A=>{const T=n.query(We);if(T.archetypes.length===0)return;const w=T.archetypes[0],g=w.get_column(We,"phase"),S=w.get_column(We,"serverPlayer"),O=w.entity_ids[0],C=g[0],P=S[0];if(C!==Tu)return;const I=A.z<0,L=A.z>0;if(I&&(r++,r>=2)){u(l()+1),f(1-P),p();const U=h();n.set_field(O,We,"phase",Qr),n.set_field(O,We,"serverPlayer",U),b(n,P,U,a(),l());return}if(L&&(o++,o>=2)){c(a()+1),f(1-P),p();const U=h();n.set_field(O,We,"phase",Qr),n.set_field(O,We,"serverPlayer",U),b(n,P,U,a(),l());return}};bn.on("ballBounce",d);const y=()=>{r=0,o=0};bn.on("ballHit",y);const b=(A,T,w,g,S)=>{const O=A.query(ce,At);let C={x:0,z:0};for(const I of O){const L=I.get_column(ce,"x"),U=I.get_column(ce,"y"),F=I.get_column(ce,"z"),B=I.get_column(At,"playerType");for(let $=0;$<I.entity_count;$++)if(B[$]===w){C={x:L[$],y:U[$],z:F[$]};break}}const P=A.query(ce,Re);if(P.archetypes.length>0){const L=P.archetypes[0].entity_ids[0];A.set_field(L,ce,"x",C.x),A.set_field(L,ce,"y",.1),A.set_field(L,ce,"z",C.z),A.set_field(L,Re,"x",0),A.set_field(L,Re,"y",0),A.set_field(L,Re,"z",0)}r=0,o=0};return{update:A=>{const T=n.query(We);if(T.archetypes.length===0)return;const w=T.archetypes[0],g=w.get_column(We,"phase"),S=w.get_column(We,"serverPlayer"),O=w.entity_ids[0],C=g[0],P=S[0];if(C!==Tu){r=0,o=0;return}const I=n.query(ce,Re,Ti);if(I.archetypes.length===0)return;const L=I.archetypes[0],U=L.get_column(ce,"x"),F=L.get_column(ce,"y"),B=L.get_column(ce,"z"),$=L.get_column(Re,"x"),Z=L.get_column(Re,"y"),Q=L.get_column(Re,"z");L.entity_ids[0];const ie={x:U[0],y:F[0],z:B[0]};if($[0],Z[0],Q[0],ie.z<-Au/2-.5||ie.z>Au/2+.5||ie.x<-wu/2-.5||ie.x>wu/2+.5)if(ie.z<0){u(l()+1),f(1-P),p();const J=h();n.set_field(O,We,"phase",Qr),n.set_field(O,We,"serverPlayer",J),b(n,P,J,a(),l())}else{c(a()+1),f(1-P),p();const J=h();n.set_field(O,We,"phase",Qr),n.set_field(O,We,"serverPlayer",J),b(n,P,J,a(),l())}},dispose:()=>{bn.off("ballBounce",d),s()},getScore:m}})}var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},co={exports:{}},Ov=co.exports,Cu;function Bv(){return Cu||(Cu=1,(function(n,e){(function(t,i){i()})(Ov,function(){function t(l,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\uFEFF",l],{type:l.type}):l}function i(l,u,h){var f=new XMLHttpRequest;f.open("GET",l),f.responseType="blob",f.onload=function(){c(f.response,u,h)},f.onerror=function(){console.error("could not download file")},f.send()}function s(l){var u=new XMLHttpRequest;u.open("HEAD",l,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function r(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof eo=="object"&&eo.global===eo?eo:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(l,u,h){var f=o.URL||o.webkitURL,p=document.createElement("a");u=u||l.name||"download",p.download=u,p.rel="noopener",typeof l=="string"?(p.href=l,p.origin===location.origin?r(p):s(p.href)?i(l,u,h):r(p,p.target="_blank")):(p.href=f.createObjectURL(l),setTimeout(function(){f.revokeObjectURL(p.href)},4e4),setTimeout(function(){r(p)},0))}:"msSaveOrOpenBlob"in navigator?function(l,u,h){if(u=u||l.name||"download",typeof l!="string")navigator.msSaveOrOpenBlob(t(l,h),u);else if(s(l))i(l,u,h);else{var f=document.createElement("a");f.href=l,f.target="_blank",setTimeout(function(){r(f)})}}:function(l,u,h,f){if(f=f||open("","_blank"),f&&(f.document.title=f.document.body.innerText="downloading..."),typeof l=="string")return i(l,u,h);var p=l.type==="application/octet-stream",_=/constructor/i.test(o.HTMLElement)||o.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||p&&_||a)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var b=m.result;b=v?b:b.replace(/^data:[^;]*;/,"data:attachment/file;"),f?f.location.href=b:location=b,f=null},m.readAsDataURL(l)}else{var d=o.URL||o.webkitURL,y=d.createObjectURL(l);f?f.location=y:location.href=y,f=null,setTimeout(function(){d.revokeObjectURL(y)},4e4)}});o.saveAs=c.saveAs=c,n.exports=c})})(co)),co.exports}var zv=Bv();class Er{inputSize;hiddenSizes;outputSize;weights1;biases1;weights2;biases2;constructor(e){this.inputSize=e.inputSize,this.hiddenSizes=e.hiddenSizes,this.outputSize=e.outputSize,this.weights1=this.createMatrix(this.inputSize,this.hiddenSizes[0]),this.biases1=new Array(this.hiddenSizes[0]).fill(0),this.weights2=this.createMatrix(this.hiddenSizes[0],this.outputSize),this.biases2=new Array(this.outputSize).fill(0),this.initializeWeights()}createMatrix(e,t){return Array.from({length:e},()=>Array(t).fill(0))}initializeWeights(){const e=Math.sqrt(2/this.inputSize);for(let i=0;i<this.weights1.length;i++)for(let s=0;s<this.weights1[i].length;s++)this.weights1[i][s]=(Math.random()-.5)*2*e;const t=Math.sqrt(2/this.hiddenSizes[0]);for(let i=0;i<this.weights2.length;i++)for(let s=0;s<this.weights2[i].length;s++)this.weights2[i][s]=(Math.random()-.5)*2*t}relu(e){return Math.max(0,e)}reluDeriv(e){return e>0?1:0}tanh(e){return Math.tanh(e)}sigmoid(e){return 1/(1+Math.exp(-Math.max(-500,Math.min(500,e))))}forward(e){const t=new Array(this.hiddenSizes[0]).fill(0);for(let s=0;s<this.hiddenSizes[0];s++){let r=this.biases1[s];for(let o=0;o<this.inputSize;o++)r+=e[o]*this.weights1[o][s];t[s]=this.relu(r)}const i=new Array(this.outputSize).fill(0);for(let s=0;s<this.outputSize;s++){let r=this.biases2[s];for(let o=0;o<this.hiddenSizes[0];o++)r+=t[o]*this.weights2[o][s];i[s]=this.tanh(r)}return i}train(e,t,i){const s=new Array(this.hiddenSizes[0]).fill(0);for(let c=0;c<this.hiddenSizes[0];c++){let l=this.biases1[c];for(let u=0;u<this.inputSize;u++)l+=e[u]*this.weights1[u][c];s[c]=this.relu(l)}const r=new Array(this.outputSize).fill(0);for(let c=0;c<this.outputSize;c++){let l=this.biases2[c];for(let u=0;u<this.hiddenSizes[0];u++)l+=s[u]*this.weights2[u][c];r[c]=this.tanh(l)}const o=new Array(this.outputSize).fill(0);for(let c=0;c<this.outputSize;c++)o[c]=(t[c]-r[c])*(1-r[c]*r[c]);const a=new Array(this.hiddenSizes[0]).fill(0);for(let c=0;c<this.hiddenSizes[0];c++){let l=0;for(let u=0;u<this.outputSize;u++)l+=o[u]*this.weights2[c][u];a[c]=l*this.reluDeriv(s[c])}for(let c=0;c<this.outputSize;c++){this.biases2[c]+=i*o[c];for(let l=0;l<this.hiddenSizes[0];l++)this.weights2[l][c]+=i*o[c]*s[l]}for(let c=0;c<this.hiddenSizes[0];c++){this.biases1[c]+=i*a[c];for(let l=0;l<this.inputSize;l++)this.weights1[l][c]+=i*a[c]*e[l]}}toJSON(){return{inputSize:this.inputSize,hiddenSizes:this.hiddenSizes,outputSize:this.outputSize,weights1:this.weights1,biases1:this.biases1,weights2:this.weights2,biases2:this.biases2}}static fromJSON(e){const t=new Er({inputSize:e.inputSize,hiddenSizes:e.hiddenSizes,outputSize:e.outputSize});return t.weights1=e.weights1,t.biases1=e.biases1,t.weights2=e.weights2,t.biases2=e.biases2,t}}const Vv=16,kv=3,Gv=32;let Bn=null;const Zh="tennis-nn";async function Kh(){try{return navigator.storage?.getDirectory?await navigator.storage.getDirectory():null}catch{return null}}async function Jh(n){try{const e=await Kh();if(!e)return!1;const i=await(await e.getFileHandle(Zh,{create:!0})).createWritable();return await i.write(n),await i.close(),!0}catch{return!1}}async function Hv(){try{const n=await Kh();return n?await(await(await n.getFileHandle(Zh)).getFile()).text():null}catch{return null}}async function Wv(){const n=await Hv();if(n)try{const e=JSON.parse(n),t=Er.fromJSON(e);Qh(t)}catch{}}async function Xv(){if(!Bn)return;const n=JSON.stringify(Bn.toJSON());await Jh(n)}function qv(){return Bn||(Bn=new Er({inputSize:Vv,hiddenSizes:[Gv],outputSize:kv})),Bn}function Qh(n){Bn=n}function Yv(){if(!Bn)return;const n=JSON.stringify(Bn.toJSON()),e=new Blob([n],{type:"application/json"});zv.saveAs(e,"tennis-nn.json"),Jh(n)}function $v(n){const e=new FileReader;e.onload=t=>{try{const i=JSON.parse(t.target?.result),s=Er.fromJSON(i);Qh(s)}catch(i){console.error("Failed to load neural network:",i)}},e.readAsText(n)}const Is=[],jv=1e4;function Zv(n,e){Is.length>=jv&&Is.shift(),Is.push({input:[...n],target:[...e]})}let Aa=0;function Kv(n,e){if(!(!Bn||Is.length<e)){for(let t=0;t<e;t++){const i=Math.floor(Math.random()*Is.length),s=Is[i];Bn.train(s.input,s.target,n)}Aa++,Aa>=600&&(Aa=0,Xv())}}function Jv(n,e,t,i,s,r,o,a,c,l,u){const h=l===0?c<0:c>0,f=l===0?r<0:r>0;return[n/10,e/5,t/12,i/10,s/5,r/12,o/15,a/15,c/15,u/20,h?1:0,f?1:0,l,n>0?1:-1,s>e+1?1:0,Math.abs(r-t)]}const wa=0,Pu=1,Ra=2;function Qv(n,e,t){if(e.z>=0)return null;const i=.05,s=e.y,r=n.y,a=.5*t,c=s,l=r-i,u=c*c-4*a*l;if(u<0)return null;const h=(-c-Math.sqrt(u))/(2*a);return h<0?null:{x:n.x+e.x*h,z:n.z+e.z*h,time:h}}let ef=()=>!1,tf=()=>!1;function ey(n,e){ef=n,tf=e}function ty(n,e,t,i,s,r,o){let a=0,c=0,l=0;const u=r===0?s.z>0:s.z<0,f=(r===0?i.z<0:i.z>0)&&(r===0?s.z<0:s.z>0),p=i.y<3;if(f)if(p){const d=i.z+(r===0?-.5:.5)-t;Math.abs(d)>.2&&(c=d>0?1:-1)}else{const m=Qv(i,s,o);if(m){const y=(r===0?Math.max(-5,Math.min(-.5,m.z-.5)):Math.min(5,Math.max(.5,m.z+.5)))-t;Math.abs(y)>.3&&(c=y>0?1:-1)}else c=r===0?-1:1}else if(u){const d=(r===0?-4:4)-t;Math.abs(d)>.3&&(c=d>0?1:-1)}else{const d=(r===0?-3:3)-t;Math.abs(d)>.3&&(c=d>0?1:-1)}if(f||(r===0?i.z>0:i.z<0)){const m=i.x-n;Math.abs(m)>.2&&(a=m>0?1:-1)}const _=i.y>e+.5&&i.y<e+2.5,v=Math.abs(i.z-t)<1.5&&Math.abs(i.x-n)<1;return _&&v&&(l=1),{moveX:a,moveZ:c,jump:l}}function ny(n){return ts(e=>{let t=0,i=!1;return{update:r=>{const a=n.resource(Lo).get("y");i=tf(),t>0&&(t-=r);const c=n.query(ce,Re,Lt,At,ji),l=n.query(ce,Re,Ti),u=n.query(We);let h={x:0,y:0,z:0},f={x:0,y:0,z:0};for(const y of l){const b=y.get_column(ce,"x"),M=y.get_column(ce,"y"),A=y.get_column(ce,"z"),T=y.get_column(Re,"x"),w=y.get_column(Re,"y"),g=y.get_column(Re,"z");y.entity_count>0&&(h={x:b[0],y:M[0],z:A[0]},f={x:T[0],y:w[0],z:g[0]})}let p=wa,_=0,v=null;if(u.archetypes.length>0){const y=u.archetypes[0],b=y.get_column(We,"phase"),M=y.get_column(We,"serverPlayer");p=b[0],_=M[0],v=y.entity_ids[0]}const m=ef(),d=m?qv():null;for(const y of c){const b=y.get_column(ce,"x"),M=y.get_column(ce,"y"),A=y.get_column(ce,"z"),T=y.get_column(At,"playerType"),w=y.entity_ids;for(let g=0;g<y.entity_count;g++){const S=T[g],O=A[g],C=S===_;if(C&&t<=0&&p!==Ra){if(p===wa){const P=w[g];if(n.set_field(P,Lt,"x",0),n.set_field(P,Lt,"z",0),v){n.set_field(v,We,"phase",Pu),n.set_field(v,We,"throwTime",0);const I={x:b[g],y:M[g],z:A[g]};for(const L of l){const U=L.entity_ids[0];n.set_field(U,ce,"x",I.x),n.set_field(U,ce,"y",I.y+1.5),n.set_field(U,ce,"z",I.z),n.set_field(U,Re,"x",0),n.set_field(U,Re,"y",4),n.set_field(U,Re,"z",0)}}}else if(p===Pu){const P=h.x-b[g],I=h.z-A[g];if(Math.sqrt(P*P+I*I)<.5&&h.y>.5&&h.y<3&&v){n.set_field(v,We,"phase",Ra);for(const U of l){const F=U.entity_ids[0],B=(Math.random()-.5)*1.5,$=3+Math.random()*1.5,Z=S===0?8:-8;n.set_field(F,Re,"x",B),n.set_field(F,Re,"y",$),n.set_field(F,Re,"z",Z)}t=2}}}if(!C||p===Ra||p===wa){const P=b[g],I=M[g];let L=0,U=0,F=0;const B=Jv(P,I,O,h.x,h.y,h.z,f.x,f.y,f.z,S,a),$=ty(P,I,O,h,f,S,a);if(d&&m){const Q=d.forward(B);L=Q[0]>.3?1:Q[0]<-.3?-1:0,U=Q[1]>.3?1:Q[1]<-.3?-1:0,F=Q[2]>.3?1:0,i&&(Math.abs(L-$.moveX)>.1||Math.abs(U-$.moveZ)>.1||F!==$.jump)&&Zv(B,[$.moveX,$.moveZ,$.jump])}else L=$.moveX,U=$.moveZ,F=$.jump;const Z=w[g];n.set_field(Z,Lt,"x",L),n.set_field(Z,Lt,"z",U),n.set_field(Z,Lt,"jump",F)}}}},dispose:e}})}function iy(n){const e=new(window.AudioContext||window.webkitAudioContext);let t=!1,i=null,s=null;async function r(){function u(h,f){const p=e.sampleRate,_=Math.ceil(h*p),v=new OfflineAudioContext(2,_,p),m=v.destination;return f(v,m),v.startRendering()}i=await u(.12,(h,f)=>{const v=h.sampleRate*.02,m=h.createBuffer(1,v,h.sampleRate),d=m.getChannelData(0);for(let P=0;P<v;P++)d[P]=Math.random()*2-1;const y=h.createBufferSource();y.buffer=m;const b=h.createGain();b.gain.setValueAtTime(.8,0),b.gain.exponentialRampToValueAtTime(.001,0+.015);const M=h.createBiquadFilter();M.type="highpass",M.frequency.value=2e3,y.connect(M),M.connect(b);const A=h.createOscillator();A.type="sine",A.frequency.setValueAtTime(180,0),A.frequency.exponentialRampToValueAtTime(80,0+.12);const T=h.createOscillator();T.type="triangle",T.frequency.setValueAtTime(350,0),T.frequency.exponentialRampToValueAtTime(120,0+.12*.5);const w=h.createGain();w.gain.setValueAtTime(.6,0),w.gain.exponentialRampToValueAtTime(.001,0+.12);const g=h.createGain();g.gain.setValueAtTime(.3,0),g.gain.exponentialRampToValueAtTime(.001,0+.12*.4);const S=h.createBiquadFilter();S.type="lowpass",S.frequency.setValueAtTime(1500,0),S.frequency.exponentialRampToValueAtTime(400,0+.12);const O=h.createDynamicsCompressor();O.threshold.value=-20,O.knee.value=10,O.ratio.value=8,O.attack.value=.001,O.release.value=.1;const C=h.createGain();C.gain.setValueAtTime(.9,0),b.connect(S),A.connect(w),T.connect(g),w.connect(S),g.connect(S),S.connect(C),C.connect(O),O.connect(f),y.start(0),y.stop(0+.02),A.start(0),A.stop(0+.12),T.start(0),T.stop(0+.12*.5)}),s=await u(.2,(h,f)=>{const v=h.sampleRate*.015,m=h.createBuffer(1,v,h.sampleRate),d=m.getChannelData(0);for(let L=0;L<v;L++)d[L]=Math.random()*2-1;const y=h.createBufferSource();y.buffer=m;const b=h.createGain();b.gain.setValueAtTime(.5,0),b.gain.exponentialRampToValueAtTime(.001,0+.012);const M=h.createBiquadFilter();M.type="bandpass",M.frequency.value=3e3,M.Q.value=1,y.connect(M),M.connect(b);const A=h.createOscillator();A.type="sine",A.frequency.setValueAtTime(250,0),A.frequency.exponentialRampToValueAtTime(100,0+.2);const T=h.createOscillator();T.type="triangle",T.frequency.setValueAtTime(500,0),T.frequency.exponentialRampToValueAtTime(180,0+.2*.3);const w=h.createOscillator();w.type="square",w.frequency.setValueAtTime(120,0),w.frequency.exponentialRampToValueAtTime(60,0+.2);const g=h.createGain();g.gain.setValueAtTime(.5,0),g.gain.exponentialRampToValueAtTime(.001,0+.2);const S=h.createGain();S.gain.setValueAtTime(.25,0),S.gain.exponentialRampToValueAtTime(.001,0+.2*.3);const O=h.createGain();O.gain.setValueAtTime(.15,0),O.gain.exponentialRampToValueAtTime(.001,0+.2);const C=h.createBiquadFilter();C.type="lowpass",C.frequency.setValueAtTime(4e3,0),C.frequency.exponentialRampToValueAtTime(800,0+.2);const P=h.createDynamicsCompressor();P.threshold.value=-18,P.knee.value=12,P.ratio.value=10,P.attack.value=.001,P.release.value=.08;const I=h.createGain();I.gain.setValueAtTime(.8,0),b.connect(C),A.connect(g),T.connect(S),w.connect(O),g.connect(C),S.connect(C),O.connect(C),C.connect(I),I.connect(P),P.connect(f),y.start(0),y.stop(0+.015),A.start(0),A.stop(0+.2),T.start(0),T.stop(0+.2*.3),w.start(0),w.stop(0+.2)}),console.log("Procedural sounds prerendered: bounce and racket hit buffers ready")}r();const o={play:()=>{if(t||!i)return;const u=e;u.state==="suspended"&&u.resume();const h=u.createBufferSource();h.buffer=i,h.connect(u.destination),h.start(0)}},a={play:()=>{if(t||!s)return;const u=e;u.state==="suspended"&&u.resume();const h=u.createBufferSource();h.buffer=s,h.connect(u.destination),h.start(0)}},c=u=>{n()&&o.play()},l=u=>{n()&&a.play()};return bn.on("ballBounce",c),bn.on("ballHit",l),{dispose:()=>{t=!0,bn.off("ballBounce",c),bn.off("ballHit",l),e.close()}}}var Du=Ai('<div style="width:16px;height:16px;border-radius:50%;background:#ffd700;border:2px solid #b8860b">'),sy=Ai("<span style=font-size:14px;color:#ffd700;font-weight:bold>x"),ry=Ai('<div style="position:absolute;top:10px;left:50%;transform:translateX(-50%);background-color:rgba(0, 0, 0, 0.7);color:white;padding:8px 15px;border-radius:5px;font-family:Arial, sans-serif;font-size:14px;display:flex;align-items:center;gap:10px;z-index:100"><label style=display:flex;align-items:center;gap:4px;cursor:pointer><input type=checkbox><span>Sound</span></label><span style=color:#888>|</span><label style=display:flex;align-items:center;gap:4px;cursor:pointer><input type=checkbox><span>AI vs AI</span></label><span style=color:#888>|</span><label style=display:flex;align-items:center;gap:4px;cursor:pointer><input type=checkbox><span>Use NN</span></label><button style="background:#444;color:white;border:none;padding:4px 8px;border-radius:3px;cursor:pointer;font-size:12px">Save NN</button><button style="background:#444;color:white;border:none;padding:4px 8px;border-radius:3px;cursor:pointer;font-size:12px">Load NN</button><input type=file accept=.json style=display:none>'),oy=Ai('<div style="position:absolute;top:60px;left:50%;transform:translateX(-50%);background-color:rgba(0, 0, 0, 0.7);color:white;padding:15px 30px;border-radius:10px;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;text-align:center;display:flex;flex-direction:column;gap:10px"><div style=display:flex;gap:40px><div><div style=font-size:14px;color:#aaa>P0</div><div></div><div style=display:flex;gap:4px;justify-content:center;margin-top:4px;flex-wrap:wrap;max-width:60px></div></div><div style=font-size:20px;color:#888>:</div><div><div style=font-size:14px;color:#aaa>P1</div><div></div><div style=display:flex;gap:4px;justify-content:center;margin-top:4px;flex-wrap:wrap;max-width:60px></div></div></div><div style=font-size:12px;color:#ffd700>Serving: P'),ay=Ai("<canvas style=width:100%;height:100%;position:absolute;top:0;left:0;z-index:0>");const[Iu,Lu]=tt(0),[Uu,Nu]=tt(0),[ly,Fu]=tt(0),[nf,cy]=tt(0),[sf,uy]=tt(0),[rf,hy]=tt(!0),[uo,fy]=tt(!1),[Pl,dy]=tt(!1);let Ca;const py=["0","15","30","40","ADV"];function Ou(n,e){return n>=4&&e>=4?n===e?"40":n>e?"ADV":"40":py[Math.min(n,4)]}function Bu(n){const e=[];if(n<=4)for(let t=0;t<n;t++)e.push(Du());else e.push((()=>{var t=sy(),i=t.firstChild;return Gi(t,n,i),t})()),e.push(Du());return e}function my(){return[(()=>{var n=ry(),e=n.firstChild,t=e.firstChild,i=e.nextSibling,s=i.nextSibling,r=s.firstChild,o=s.nextSibling,a=o.nextSibling,c=a.firstChild,l=a.nextSibling,u=l.nextSibling,h=u.nextSibling;t.addEventListener("change",p=>hy(p.target.checked)),r.addEventListener("change",p=>fy(p.target.checked)),c.addEventListener("change",p=>dy(p.target.checked)),l.$$click=()=>Yv(),u.$$click=()=>Ca?.click(),h.addEventListener("change",p=>{const _=p.target.files?.[0];_&&$v(_)});var f=Ca;return typeof f=="function"||Array.isArray(f)?zl(()=>f,h):Ca=h,Ki(rf,p=>{t.checked=p}),Ki(uo,p=>{r.checked=p}),Ki(Pl,p=>{c.checked=p}),n})(),(()=>{var n=oy(),e=n.firstChild,t=e.firstChild,i=t.firstChild,s=i.nextSibling,r=s.nextSibling,o=t.nextSibling,a=o.nextSibling,c=a.firstChild,l=c.nextSibling,u=l.nextSibling,h=e.nextSibling;return h.firstChild,Gi(s,()=>Ou(Iu(),Uu())),Gi(r,()=>Bu(nf())),Gi(l,()=>Ou(Uu(),Iu())),Gi(u,()=>Bu(sf())),Gi(h,ly,null),n})()]}let[Js,_y]=tt(),Ut=Av();const gi=jh({position:new k(0,0,2.5),velocity:new k(0,0,0),playerType:"Melty",facingForward:!0,reactiveEcs:Ut.ecs});Ut.ecs.add_component(gi,xr,{});Ut.ecs.add_component(gi,Lt,{x:0,z:0,jump:0});Ut.ecs.add_component(gi,Qn,{side:1});const ec=jh({position:new k(0,0,-2.5),velocity:new k(0,0,0),playerType:"Cubey",facingForward:!1,reactiveEcs:Ut.ecs});Ut.ecs.add_component(ec,ji,{});Ut.ecs.add_component(ec,Lt,{x:0,z:0,jump:0});Ut.ecs.add_component(ec,Qn,{side:-1});wv({width:10.97,length:23.77,netHeight:.914,reactiveEcs:Ut.ecs});Rv({position:It(()=>new k(0,.1,2.5)),size:It(()=>.1),boundary:It(()=>new Gs(new k(-5.5,0,-12),new k(5.5,5,12))),reactiveEcs:Ut.ecs});const gy=Ut.ecs.create_entity();Ut.ecs.add_component(gy,We,{phase:0,serverPlayer:0,throwTime:0});Wv();let[zu,of]=tt(!1),[Vu,af]=tt(!1),[ku,lf]=tt(!1),[Gu,cf]=tt(!1),[Hu,uf]=tt(!1);function xy(){debugger;let n=150,e=mx({position:It(()=>new Be(50,(Js()?.y??0)-50-n)),hitAreaSize:n,outerRingSize:()=>.8*n,knobSize:()=>70}),t=80,i=xx({position:It(()=>new Be((Js()?.x??0)-50-t,(Js()?.y??0)-50-t)),size:()=>t,externalPressed:Hu}),s=30,r=150,o=yx({position:It(()=>({x:(Js()?.x??0)-50-s,y:(Js()?.y??0)-50-t-20-r})),width:()=>s,height:()=>r,power:i.power}),a=!1;xc(()=>uo(),f=>{const p=Ut.ecs.entity(gi);f?p.hasComponent(ji)||(Ut.ecs.remove_component(gi,xr),Ut.ecs.add_component(gi,ji,{})):p.hasComponent(ji)&&(Ut.ecs.remove_component(gi,ji),Ut.ecs.add_component(gi,xr,{}))});const c=(f,p)=>{const _=Pv(f,zu,Vu,ku,Gu,e.value),v=()=>Hu()||i.pressed(),m=Dv(f),d=Lv(f);Cv(f,p);const y=Nv(f,v,()=>(ku()?-1:0)+(Gu()?1:0)+e.value().x,()=>(zu()?-1:0)+(Vu()?1:0),i.power,()=>a),b=Fv(f,(w,g,S)=>{Lu(w),Nu(g),Fu(S)},w=>{w===0?cy(nf()+1):uy(sf()+1)},()=>{Lu(0),Nu(0),Fu(0)}),M=ny(f),A=iy(rf);ey(Pl,uo);const T=[_.dispose,m.dispose,d.dispose,y.dispose,b.dispose,M.dispose,A.dispose];return{update:w=>{a=i.justReleased()||i.justReleasedExternal(),_.update(),M.update(w),m.update(w),d.update(w),y.update(w),b.update(w),Pl()&&uo()&&Kv(.001,4)},dispose:()=>{T.forEach(w=>w())},tennisRules:b}};let l=It(()=>!0),[u,h]=tt();return xc(u,f=>{if(f==null)return;let p=f.getBoundingClientRect();const _=p.width,v=p.height;if(_==0&&v==0){h(void 0),setTimeout(()=>h(f));return}new ResizeObserver(()=>{let P=f.getBoundingClientRect();_y(new Be(P.width,P.height))}).observe(f);const d=new hn(50,_/v,.01,100);d.position.set(0,15,16),d.lookAt(0,0,-2);const y=new $d,b=new gp(16777215,.5);y.add(b);const M=new _p(16777215,1);M.position.set(5,10,7),y.add(M);const A=c(Ut.ecs,y),T=new dx({antialias:!0,canvas:f});T.setSize(_,v);let w=0,g=0;const S=1/60,O=.25;let C=P=>{let I=w===0?S:(P-w)/1e3;for(w=P,I>O&&(I=O),g+=I;g>=S;)A.update(S),g-=S;T.render(y,d),l()&&requestAnimationFrame(C)};requestAnimationFrame(C),Zi(()=>{A.dispose(),T.dispose()})}),[(()=>{var f=ay(),p=h;return typeof p=="function"||Array.isArray(p)?zl(()=>p,f):h=f,f})(),tr(my,{}),tr(e.UI,{}),tr(i.UI,{}),tr(o.UI,{})]}document.body.style.setProperty("overflow","hidden");let Ri=document.createElement("div");Ri.style.setProperty("position","absolute");Ri.style.setProperty("left","0");Ri.style.setProperty("top","0");Ri.style.setProperty("right","0");Ri.style.setProperty("bottom","0");Ri.style.setProperty("background-color","black");document.body.append(Ri);Kf(()=>tr(xy,{}),Ri);document.addEventListener("keydown",n=>{switch(n.key){case"ArrowUp":of(!0);break;case"ArrowDown":af(!0);break;case"ArrowLeft":lf(!0);break;case"ArrowRight":cf(!0);break;case" ":uf(!0);break}});document.addEventListener("keyup",n=>{switch(n.key){case"ArrowUp":of(!1);break;case"ArrowDown":af(!1);break;case"ArrowLeft":lf(!1);break;case"ArrowRight":cf(!1);break;case" ":uf(!1);break}});Bl(["click"]);
