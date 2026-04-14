(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class nn extends Error{source;constructor(e){super(),this.source=e}}class Qa extends Error{source;constructor(e,t){super(t instanceof Error?t.message:String(t),{cause:t}),this.source=e}}const Mh=0,dr=1,Bs=2,qo=4,ai=8,Sr=16,Wn=32,Uo=64,Mr=128,sc=256,el=512,vt=1,gn=2,Pn=4,Ls=1,zn=2,Nr=3,_t={},od={},ad="sp",Eh={},ld=Symbol("refresh");function bh(n,e){const t=(n.i?.t?n.i.u?.o:n.i?.o)??-1;t>=n.o&&(n.o=t+1);const i=n.o,s=e.l[i];if(s===void 0)e.l[i]=n;else{const r=s.T;r.S=n,n.T=r,s.T=n}i>e.R&&(e.R=i)}function Yo(n,e){let t=n.O;t&(ai|qo)||(t&dr?n.O=t&-4|Bs|ai:n.O=t|ai,t&Sr||bh(n,e))}function Th(n,e){let t=n.O;t&(ai|qo|Sr)||(n.O=t|Sr,bh(n,e))}function Fr(n,e){const t=n.O;if(!(t&(ai|Sr)))return;n.O=t&-25;const i=n.o;if(n.T===n)e.l[i]=void 0;else{const s=n.S,r=e.l[i],o=s??r;n===r?e.l[i]=s:n.T.S=s,o.T=n.T}n.T=n,n.S=void 0}function cd(n){if(!n._){n._=!0;for(let e=0;e<=n.R;e++)for(let t=n.l[e];t!==void 0;t=t.S)t.O&ai&&No(t)}}function No(n,e=Bs){const t=n.O;if(!((t&(dr|Bs))>=e)){n.O=t&-4|e;for(let i=n.h;i!==null;i=i.I)No(i.p,dr);if(n.A!==null)for(let i=n.A;i!==null;i=i.N)for(let s=i.h;s!==null;s=s.I)No(s.p,dr)}}function Eo(n,e){for(n._=!1,n.P=0;n.P<=n.R;n.P++){let t=n.l[n.P];for(;t!==void 0;)t.O&ai?e(t):ud(t,n),t=n.l[n.P]}n.R=0}function ud(n,e){Fr(n,e);let t=n.o;for(let i=n.C;i;i=i.D){const s=i.m,r=s.V||s;r.L&&r.o>=t&&(t=r.o+1)}if(n.o!==t){n.o=t;for(let i=n.h;i!==null;i=i.I)Th(i.p,e)}}const Gr=new Set,Vt={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0},vn={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0};let Gt=0,ke=null,Er=!1,br=!1,bo=null;function hd(n){return!!bo?.has(n)}function Hr(n){for(const e of Di){if(e.W||e.H.size>0)continue;const t=e.F[n-1];t.length&&(e.F[n-1]=[],Fo(t,n))}}function fd(n){for(let e=n.h;e!==null;e=e.I){const t=e.p;if(!t.M)continue;if(t.M===Nr){t.$||(t.$=!0,t.j.enqueue(zn,t.K));continue}const i=t.O&Wn?vn:Vt;i.P>t.o&&(i.P=t.o),Yo(t,i)}}function gi(n){br=n}function dd(n,e){e.Y=n,n.Z.push(...e.Z);for(const t of Di)t.B===e&&(t.B=n);n.q.push(...e.q);for(const t of e.X)n.X.add(t);for(const t of e.J)n.J.includes(t)||n.J.push(t)}function pd(n){for(let e=0;e<n.length;e++){const t=n[e];t.ee=void 0,t.te!==_t&&(t.ne=t.te,t.te=_t);const i=t.ie;t.ie=_t,i!==_t&&t.ne!==i&&zs(t,!0),t.B=null}n.length=0}function md(n){for(const e of Di)(n?e.B===n:!e.B)&&(e.W||(e.F[0].length&&Fo(e.F[0],Ls),e.F[1].length&&Fo(e.F[1],zn)),e.re.ee===e&&(e.re.ee=void 0),e.H.clear(),e.F[0].length=0,e.F[1].length=0,Di.delete(e),Oo.delete(e.re))}function Pi(){Er||(Er=!0,!Tt.se&&!br&&queueMicrotask(tl))}class _d{i=null;oe=[[],[]];ue=[];created=Gt;addChild(e){this.ue.push(e),e.i=this}removeChild(e){const t=this.ue.indexOf(e);t>=0&&(this.ue.splice(t,1),e.i=null)}notify(e,t,i,s){return this.i?this.i.notify(e,t,i,s):!1}run(e){if(this.oe[e-1].length){const t=this.oe[e-1];this.oe[e-1]=[],Fo(t,e)}for(let t=0;t<this.ue.length;t++)this.ue[t].run?.(e)}enqueue(e,t){e&&(wn?jt(wn).F[e-1].push(t):this.oe[e-1].push(t)),Pi()}stashQueues(e){e.oe[0].push(...this.oe[0]),e.oe[1].push(...this.oe[1]),this.oe=[[],[]];for(let t=0;t<this.ue.length;t++){let i=this.ue[t],s=e.ue[t];s||(s={oe:[[],[]],ue:[]},e.ue[t]=s),i.stashQueues(s)}}restoreQueues(e){this.oe[0].push(...e.oe[0]),this.oe[1].push(...e.oe[1]);for(let t=0;t<e.ue.length;t++){const i=e.ue[t];let s=this.ue[t];s&&s.restoreQueues(i)}}}class li extends _d{se=!1;ce=[];q=[];X=new Set;static ae;static le;static fe=null;flush(){if(!this.se){this.se=!0;try{if(Eo(Vt,li.ae),ke){if(!gd(ke)){const i=ke;if(Eo(vn,li.ae),this.ce=[],this.q=[],this.X=new Set,Hr(Ls),Hr(zn),this.stashQueues(i.Ee),Gt++,Er=Vt.R>=Vt.P,Vc(i.ce),ke=null,!i.Z.length&&i.q.length){bo=new Set;for(let s=0;s<i.q.length;s++){const r=i.q[s];r.L||r.de||(bo.add(r),fd(r))}}try{sa(null,!0)}finally{bo=null}return}this.ce!==ke.ce&&this.ce.push(...ke.ce),this.restoreQueues(ke.Ee),Gr.delete(ke);const t=ke;ke=null,Vc(this.ce),sa(t)}else Gr.size&&Eo(vn,li.ae),sa();Gt++,Er=Vt.R>=Vt.P,Hr(Ls),this.run(Ls),Hr(zn),this.run(zn)}finally{this.se=!1}}}notify(e,t,i,s){if(t&vt){if(i&vt){const r=s!==void 0?s:e.Te;if(ke&&r){const o=r.source;ke.J.includes(o)||(ke.J.push(o),Pi())}}return!0}return!1}initTransition(e){if(e&&(e=Ah(e)),!(e&&e===ke)&&!(!e&&ke&&ke.Se===Gt)){if(!ke)ke=e??{Se:Gt,ce:[],J:[],q:[],X:new Set,Z:[],Ee:{oe:[[],[]],ue:[]},Y:!1};else if(e){const t=ke;dd(e,t),Gr.delete(t),ke=e}if(Gr.add(ke),ke.Se=Gt,this.ce!==ke.ce){for(let t=0;t<this.ce.length;t++){const i=this.ce[t];i.B=ke,ke.ce.push(i)}this.ce=ke.ce}if(this.q!==ke.q){for(let t=0;t<this.q.length;t++){const i=this.q[t];i.B=ke,ke.q.push(i)}this.q=ke.q}for(const t of Di)t.B||(t.B=ke);if(this.X!==ke.X){for(const t of this.X)ke.X.add(t);this.X=ke.X}}}}function zs(n,e=!1){const t=n.ee||wn,i=n.Re!==void 0;for(let s=n.h;s!==null;s=s.I){if(i&&s.p.Oe){s.p.O|=sc;continue}e&&t?(s.p.O|=Mr,Ch(s.p,t)):e&&(s.p.O|=Mr,s.p.ee=void 0);const r=s.p;if(r.M===Nr){r.$||(r.$=!0,r.j.enqueue(zn,r.K));continue}const o=s.p.O&Wn?vn:Vt;o.P>s.p.o&&(o.P=s.p.o),Yo(s.p,o)}}function Bc(){const n=Tt.ce;for(let e=0;e<n.length;e++){const t=n[e];t.te!==_t&&(t.ne=t.te,t.te=_t,t.M&&t.M!==Nr&&(t.$=!0)),t._e&vt||(t._e&=~Pn),t.L&&li.le(t,!1,!0)}n.length=0}function sa(n=null,e=!1){const t=!e;t&&Bc(),e||wh(Tt),Vt.R>=Vt.P&&Eo(Vt,li.ae),t&&(Bc(),pd(n?n.q:Tt.q),n?n.X:Tt.X,md(n))}function wh(n){for(const e of n.ue)e.checkSources?.(),wh(e)}function zc(n){Tt.X.add(n),Pi()}function Vc(n){for(let e=0;e<n.length;e++)n[e].B=ke}const Tt=new li;function tl(){if(!Tt.se)for(;Er||ke;)Tt.flush()}function Fo(n,e){for(let t=0;t<n.length;t++)n[t](e)}function gd(n){if(n.Y)return!0;if(n.Z.length)return!1;let e=!0;for(let t=0;t<n.J.length;t++){const i=n.J[t];if(i._e&vt&&i.Te?.source===i){e=!1;break}}if(e)for(let t=0;t<n.q.length;t++){const i=n.q[t];if($o(i)&&"_e"in i&&i._e&vt&&i.Te instanceof nn&&i.Te.source!==i){e=!1;break}}return e&&(n.Y=!0),e}function Ah(n){for(;n.Y&&typeof n.Y=="object";)n=n.Y;return n}function vd(n,e){const t=ke;try{return ke=Ah(n),e()}finally{ke=t}}const Oo=new WeakMap,Di=new Set;function xd(n){let e=Oo.get(n);if(e)return jt(e);const t=n.he,i=t?.ee?jt(t.ee):null;return e={re:n,H:new Set,F:[[],[]],W:null,B:ke,Ie:i},Oo.set(n,e),Di.add(e),n.pe=!1,e}function jt(n){for(;n.W;)n=n.W;return n}function Rh(n,e){if(n=jt(n),e=jt(e),n===e)return n;e.W=n;for(const t of e.H)n.H.add(t);return n.F[0].push(...e.F[0]),n.F[1].push(...e.F[1]),n}function Tr(n){const e=n.ee;if(!e)return;const t=jt(e);if(Di.has(t))return t;n.ee=void 0}function or(n){return Tr(n)?.B??n.B}function $o(n){return n.ie!==void 0&&n.ie!==_t}function Ch(n,e){const t=jt(e),i=n.ee;if(i){if(i.W){n.ee=e;return}const s=jt(i);if(Di.has(s)){s!==t&&!$o(n)&&(t.Ie&&jt(t.Ie)===s?n.ee=e:s.Ie&&jt(s.Ie)===t||Rh(t,s));return}}n.ee=e}function rc(n){const e=n.m,t=n.D,i=n.I,s=n.Ae;return i!==null?i.Ae=s:e.ge=s,s!==null?s.I=i:(e.h=i,i===null&&(e.Ne?.(),e.L&&!e.Pe&&!(e.O&Wn)&&yd(e))),t}function yd(n){Fr(n,n.O&Wn?vn:Vt);let e=n.C;for(;e!==null;)e=rc(e);n.C=null,Or(n,!0)}function Wr(n,e){const t=e.Ce;if(t!==null&&t.m===n)return;let i=null;const s=e.O&qo;if(s&&(i=t!==null?t.D:e.C,i!==null&&i.m===n)){e.Ce=i;return}const r=n.ge;if(r!==null&&r.p===e&&(!s||Sd(r,e)))return;const o=e.Ce=n.ge={m:n,p:e,D:i,Ae:r,I:null};t!==null?t.D=o:e.C=o,r!==null?r.I=o:n.h=o}function Sd(n,e){const t=e.Ce;if(t!==null){let i=e.C;do{if(i===n)return!0;if(i===t)break;i=i.D}while(i!==null)}return!1}function Ph(n){let e=n.U;for(;e;)e.O|=Wn,e.O&ai&&(Fr(e,Vt),Yo(e,vn)),Ph(e),e=e.k}function Or(n,e=!1,t){if(n.O&Uo)return;e&&(n.O=Uo),e&&n.L&&(n.De=null);let i=t?n.ye:n.U;for(;i;){const s=i.k;if(i.C){const r=i;Fr(r,r.O&Wn?vn:Vt);let o=r.C;do o=rc(o);while(o!==null);r.C=null,r.Ce=null}Or(i,!0),i=s}t?n.ye=null:(n.U=null,n.ve=0),Md(n,t)}function Md(n,e){let t=e?n.me:n.we;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){const s=t[i];s.call(s)}else t.call(t);e?n.me=null:n.we=null}}function Ed(n,e){let t=n;for(;t.Ve&&t.i;)t=t.i;if(t.id!=null)return bd(t.id,t.ve++);throw new Error("Cannot get child id from owner without an id")}function Dh(n){return Ed(n)}function bd(n,e){const t=e.toString(36),i=t.length-1;return n+(i?String.fromCharCode(64+i):"")+t}function Kt(){return Qt?st:null}function Td(){return st}function oc(n){return st&&(st.we?Array.isArray(st.we)?st.we.push(n):st.we=[st.we,n]:st.we=n),n}function pr(n){const e=st,t=n?.transparent??!1,i={id:n?.id??(t?e?.id:e?.id!=null?Dh(e):void 0),Ve:t||void 0,t:!0,u:e?.t?e.u:e,U:null,k:null,we:null,j:e?.j??Tt,be:e?.be||Eh,ve:0,me:null,ye:null,i:e,dispose(s=!0){Or(i,s)}};if(e){const s=e.U;s===null||(i.k=s),e.U=i}return i}function cs(n,e){const t=pr(e);return Ps(t,()=>n(t.dispose))}function wd(n,e){return n.Le===e||n.Ue?.has(e)?!1:n.Le?(n.Ue?n.Ue.add(e):n.Ue=new Set([n.Le,e]),n.Le=void 0,!0):(n.Le=e,!0)}function Ad(n,e){return n.Le?n.Le!==e?!1:(n.Le=void 0,!0):n.Ue?.delete(e)?(n.Ue.size===1?(n.Le=n.Ue.values().next().value,n.Ue=void 0):n.Ue.size===0&&(n.Ue=void 0),!0):!1}function Lh(n){n.Le=void 0,n.Ue?.clear(),n.Ue=void 0}function Bo(n,e,t){if(!e){n.Te=null;return}if(t instanceof nn&&t.source===e){n.Te=t;return}const i=n.Te;(!(i instanceof nn)||i.source!==e)&&(n.Te=new nn(e))}function nl(n,e){for(let t=n.h;t!==null;t=t.I)e(t.p);for(let t=n.A;t!==null;t=t.N)for(let i=t.h;i!==null;i=i.I)e(i.p)}function Rd(n){let e=!1;const t=new Set,i=s=>{if(t.has(s)||!Ad(s,n))return;t.add(s),s.Se=Gt;const r=s.Le??s.Ue?.values().next().value;if(r)Bo(s,r),os(s);else{if(s._e&=~vt,Bo(s),os(s),s.ke){if(s.M===Nr){const o=s;o.$||(o.$=!0,o.j.enqueue(zn,o.K))}else{const o=s.O&Wn?vn:Vt;o.P>s.o&&(o.P=s.o),Yo(s,o)}e=!0}s.ke=!1}nl(s,i)};nl(n,i),e&&Pi()}function Ih(n,e,t){const i=typeof e=="object"&&e!==null,s=i&&_n(()=>e[Symbol.asyncIterator]),r=!s&&i&&_n(()=>typeof e.then=="function");if(!r&&!s)return n.De=null,e;n.De=e;let o;const a=l=>{n.De===e&&(Tt.initTransition(or(n)),ac(n,l instanceof nn?vt:gn,l),n.Se=Gt)},c=(l,u)=>{if(n.De!==e||n.O&(Bs|Mr))return;Tt.initTransition(or(n)),Uh(n);const h=Tr(n);if(h&&h.H.delete(n),t)t(l);else if(n.ie!==void 0)n.ie!==void 0&&n.ie!==_t?n.te=l:(n.ne=l,zs(n)),n.Se=Gt;else if(h){const f=n.ne,d=n.xe;(!d||!d(l,f))&&(n.ne=l,n.Se=Gt,n.Ge&&ht(n.Ge,l),zs(n,!0))}else ht(n,()=>l);Rd(n),Pi(),tl(),u?.()};if(r){let l=!1,u=!0;if(e.then(h=>{u?(o=h,l=!0):c(h)},h=>{u||a(h)}),u=!1,!l)throw Tt.initTransition(or(n)),new nn(st)}if(s){const l=e[Symbol.asyncIterator]();let u=!1,h=!1;oc(()=>{if(!h){h=!0;try{const _=l.return?.();_&&typeof _.then=="function"&&_.then(void 0,()=>{})}catch{}}});const f=()=>{let _,v=!1,m=!0;return l.next().then(p=>{if(m)_=p,v=!0,p.done&&(h=!0);else{if(n.De!==e)return;p.done?(h=!0,Pi(),tl()):c(p.value,f)}},p=>{!m&&n.De===e&&(h=!0,a(p))}),m=!1,v&&!_.done?(o=_.value,u=!0,f()):v&&_.done},d=f();if(!u&&!d)throw Tt.initTransition(or(n)),new nn(st)}return o}function Uh(n,e=!1){Lh(n),n.ke=!1,n._e=e?0:n._e&Pn,Bo(n),os(n),n.We?.()}function ac(n,e,t,i,s){e===gn&&!(t instanceof Qa)&&!(t instanceof nn)&&(t=new Qa(n,t));const r=e===vt&&t instanceof nn?t.source:void 0,o=r===n,a=e===vt&&n.ie!==void 0&&!o,c=a&&$o(n);i||(e===vt&&r?(wd(n,r),n._e=vt|n._e&Pn,Bo(n,r,t)):(Lh(n),n._e=e|(e!==gn?n._e&Pn:0),n.Te=t),os(n)),s&&!i&&Ch(n,s);const l=i||c,u=i||a?void 0:s;if(n.We){if(i&&e===vt)return;l?n.We(e,t):n.We();return}nl(n,h=>{h.Se=Gt,(e===vt&&r&&h.Le!==r&&!h.Ue?.has(r)||e!==vt&&(h.Te!==t||h.Le||h.Ue))&&(!l&&!h.B&&Tt.ce.push(h),ac(h,e,t,l,u))})}let Cd=null;li.ae=Ci;li.le=Or;let Qt=!1,Qi=!1,st=null,wn=null,Pd=!1;function Ci(n,e=!1){const t=n.M;e||(n.B&&(!t||ke)&&ke!==n.B&&Tt.initTransition(n.B),Fr(n,n.O&Wn?vn:Vt),n.De=null,n.B||t===Nr?Or(n):(Ph(n),n.me=n.we,n.ye=n.U,n.we=null,n.U=null,n.ve=0));const i=!!(n.O&Mr),s=n.ie!==void 0&&n.ie!==_t,r=!!(n._e&vt),o=st;st=n,n.Ce=null,n.O=qo,n.Se=Gt;let a=n.te===_t?n.ne:n.te,c=n.o,l=Qt,u=wn;if(Qt=!0,i){const h=Tr(n);h&&(wn=h)}try{a=Ih(n,n.L(a)),Uh(n,e);const h=Tr(n);h&&(h.H.delete(n),os(h.re))}catch(h){if(h instanceof nn&&wn){const f=jt(wn);f.re!==n&&(f.H.add(n),n.ee=f,os(f.re))}h instanceof nn&&(n.ke=!0),ac(n,h instanceof nn?vt:gn,h,void 0,h instanceof nn?n.ee:void 0)}finally{Qt=l,n.O=Mh|(e?n.O&sc:0),st=o}if(!n.Te){const h=n.Ce;let f=h!==null?h.D:n.C;if(f!==null){do f=rc(f);while(f!==null);h!==null?h.D=null:n.C=null}const d=s?n.ie:n.te===_t?n.ne:n.te;if(!n.xe||!n.xe(d,a)){const v=s?n.ie:void 0;e||t&&ke!==n.B||i?(n.ne=a,s&&i&&(n.ie=a,n.te=a)):n.te=a,s&&!i&&r&&!n.pe&&(n.ie=a),(!s||i||n.ie!==v)&&zs(n,i||s)}else if(s)n.te=a;else if(n.o!=c)for(let v=n.h;v!==null;v=v.I)Th(v.p,v.p.O&Wn?vn:Vt)}wn=u,(!e||n._e&vt)&&!n.B&&!(ke&&s)&&Tt.ce.push(n),n.B&&t&&ke!==n.B&&vd(n.B,()=>Ci(n))}function Nh(n){if(n.O&dr)for(let e=n.C;e;e=e.D){const t=e.m,i=t.V||t;if(i.L&&Nh(i),n.O&Bs)break}(n.O&(Bs|Mr)||n.Te&&n.Se<Gt&&!n.De)&&Ci(n),n.O=n.O&(sc|ai|Sr)}function Zo(n,e,t){const i=t?.transparent??!1,s={id:t?.id??(i?st?.id:st?.id!=null?Dh(st):void 0),Ve:i||void 0,xe:t?.equals!=null?t.equals:wr,de:!!t?.pureWrite,Ne:t?.unobserved,we:null,j:st?.j??Tt,be:st?.be??Eh,ve:0,L:n,ne:e,o:0,A:null,S:void 0,T:null,C:null,Ce:null,h:null,ge:null,i:st,k:null,U:null,O:t?.lazy?el:Mh,_e:Pn,Se:Gt,te:_t,me:null,ye:null,De:null,B:null};s.T=s;const r=st?.t?st.u:st;if(st){const o=st.U;o===null||(s.k=o),st.U=s}return r&&(s.o=r.o+1),!t?.lazy&&Ci(s,!0),s}function mr(n,e,t=null){const i={xe:e?.equals!=null?e.equals:wr,de:!!e?.pureWrite,Fe:!!e?.Fe,Ne:e?.unobserved,ne:n,h:null,ge:null,Se:Gt,V:t,N:t?.A||null,te:_t};return t&&(t.A=i),i}function wr(n,e){return n===e}function _n(n,e){if(!Qt)return n();const t=Qt;Qt=!1;try{return n()}finally{Qt=t}}function es(n){let e=st;e?.t&&(e=e.u),n.O&el&&(n.O&=~el,Ci(n,!0));const t=n.V||n;if(e&&Qt&&(n.L&&n.O&Uo&&Ci(n),Wr(n,e),t.L)){const i=n.O&Wn;t.o>=(i?vn.P:Vt.P)&&(No(e),cd(i?vn:Vt),Nh(t));const s=t.o;s>=e.o&&n.i!==e&&(e.o=s+1)}if(t._e&vt)if(e&&!(Qi&&t.B&&ke!==t.B))if(wn){const i=t.ee,s=jt(wn);if(i&&jt(i)===s&&!$o(t))throw!Qt&&n!==e&&Wr(n,e),t.Te}else throw!Qt&&n!==e&&Wr(n,e),t.Te;else{if(e&&t!==n&&t._e&Pn)throw!Qt&&n!==e&&Wr(n,e),t.Te;if(!e&&t._e&Pn)throw t.Te}if(n.L&&n._e&gn){if(n.Se<Gt)return Ci(n),es(n);throw n.Te}return n.ie!==void 0&&n.ie!==_t?e&&Qi&&hd(n)?n.ne:n.ie:!e||wn!==null&&(n.ie!==void 0||n.ee||t===n&&Qi||t._e&vt)||n.te===_t||Qi&&n.B&&ke!==n.B?n.ne:n.te}function ht(n,e){n.B&&ke!==n.B&&Tt.initTransition(n.B);const t=n.ie!==void 0&&!br,i=n.ie!==void 0&&n.ie!==_t,s=t?i?n.ie:n.ne:n.te===_t?n.ne:n.te;if(typeof e=="function"&&(e=e(s)),!(!n.xe||!n.xe(s,e)||!!(n._e&Pn)))return t&&i&&n.L&&(zs(n,!0),Pi()),e;if(t){const o=n.ie===_t;o||Tt.initTransition(or(n)),o&&(n.te=n.ne,Tt.q.push(n)),n.pe=!0;const a=xd(n);n.ee=a,n.ie=e}else n.te===_t&&Tt.ce.push(n),n.te=e;return os(n),n.Ge&&ht(n.Ge,e),n.Se=Gt,zs(n,t),Pi(),e}function Ps(n,e){const t=st,i=Qt;st=n,Qt=!1;try{return e()}finally{st=t,Qt=i}}function Dd(n){const e=n,t=n.V;if(t&&n.te!==_t)return!t.De&&!(t._e&vt);if(n.ie!==void 0&&n.ie!==_t){if(e._e&vt&&!(e._e&Pn))return!0;if(n.he){const i=n.ee?jt(n.ee):null;return!!(i&&i.H.size>0)}return!0}return n.ie!==void 0&&n.ie===_t&&!n.he?!1:n.te!==_t&&!(e._e&Pn)?!0:!!(e._e&vt&&!(e._e&Pn))}function os(n){if(n.Qe){const e=Dd(n),t=n.Qe;if(ht(t,e),!e&&t.ee){const i=Tr(n);if(i&&i.H.size>0){const s=jt(t.ee);s!==i&&Rh(i,s)}Oo.delete(t),t.ee=void 0}}}function Ld(n,e=!0){const t=Qi;Qi=e;try{return n()}finally{Qi=t}}function Fh(n,e,t,i,s){let r=!1;const o=Zo(s?.render?a=>Ld(()=>n(a)):n,i,{...s,equals:()=>(o.$=!o.Te,r&&o.j.enqueue(o.M,ra.bind(o)),!1),lazy:!0});o.Me=i,o.$e=e,o.je=t,o.Ke=void 0,o.M=s?.render?Ls:zn,o.We=(a,c)=>{const l=a!==void 0?a:o._e,u=c!==void 0?c:o.Te;if(l&gn){let h=u;if(o.j.notify(o,vt,0),o.M===zn)try{return o.je?o.je(h,()=>{o.Ke?.(),o.Ke=void 0}):console.error(h)}catch(f){h=f}if(!o.j.notify(o,gn,gn))throw h}else o.M===Ls&&o.j.notify(o,vt|gn,l,u)},Ci(o,!0),!s?.defer&&(o.M===zn?o.j.enqueue(o.M,ra.bind(o)):ra.call(o)),r=!0,oc(()=>o.Ke?.())}function ra(){if(!(!this.$||this.O&Uo)){this.Ke?.(),this.Ke=void 0;try{const n=this.$e(this.ne,this.Me);this.Ke=n}catch(n){if(this.Te=new Qa(this,n),this._e|=gn,!this.j.notify(this,gn,gn))throw n}finally{this.Me=this.ne,this.$=!1}}}function Ot(n){return oc(n)}function Is(n){const e=es.bind(null,n);return e.$r=!0,e}function Id(n,e,t){if(typeof n=="function"){const s=Zo(n,e,t);return[Is(s),ht.bind(null,s)]}const i=mr(n,e);return[Is(i),ht.bind(null,i)]}function lc(n,e,t){let i=Zo(n,e,t);return Is(i)}function Ud(n,e,t,i){Fh(n,e.effect||e,e.error,t,i)}function Nd(n,e,t,i){Fh(n,e,void 0,t,{render:!0,...i})}function kc(n){return n?.[Us]?.[xt]??n}function fs(n,e,t,i,s){return s&&i in s?s[i]:e&&i in e?e[i]:n[i]}function Fd(n,e,t){const i=Vh(n,e),s=Object.keys(t);return Array.from(new Set([...i,...s]))}function As(n,e,t){const i=e?.[Us];if(!i)return;const s=i[Zt],r=i[pt],o=i[dt];let a=i[xt];if(!(n===s&&!r&&!o)){if((i[Oh]||il).set(n,i[bn]),i[Zt]=n,i[pt]=void 0,Array.isArray(s)){let c=!1;const l=fs(s,r,a,"length",o);if(n.length&&l&&n[0]&&t(n[0])!=null){let u,h,f,d,_,v,m,p;for(f=0,d=Math.min(l,n.length);f<d&&((v=fs(s,r,a,f,o))===n[f]||v&&n[f]&&t(v)===t(n[f]));f++)As(n[f],cn(v,i),t);const y=new Array(n.length),M=new Map;for(d=l-1,_=n.length-1;d>=f&&_>=f&&((v=fs(s,r,a,d,o))===n[_]||v&&n[_]&&t(v)===t(n[_]));d--,_--)y[_]=v;if(f>_||f>d){for(h=f;h<=_;h++)c=!0,i[xt][h]&&ht(i[xt][h],cn(n[h],i));for(;h<n.length;h++){c=!0;const S=cn(y[h],i);i[xt][h]&&ht(i[xt][h],S),As(n[h],S,t)}c&&i[xt][un]&&ht(i[xt][un],void 0),l!==n.length&&i[xt].length&&ht(i[xt].length,n.length);return}for(m=new Array(_+1),h=_;h>=f;h--)v=n[h],p=v&&t(v),u=M.get(p),m[h]=u===void 0?-1:u,M.set(p,h);for(u=f;u<=d;u++)v=fs(s,r,a,u,o),p=v&&t(v),h=M.get(p),h!==void 0&&h!==-1&&(y[h]=v,h=m[h],M.set(p,h));for(h=f;h<n.length;h++)if(h in y){const S=cn(y[h],i);i[xt][h]&&ht(i[xt][h],S),As(n[h],S,t)}else i[xt][h]&&ht(i[xt][h],cn(n[h],i));f<n.length&&(c=!0)}else if(n.length)for(let u=0,h=n.length;u<h;u++){const f=fs(s,r,a,u,o);Fn(f)?As(n[u],cn(f,i),t):i[xt][u]&&ht(i[xt][u],n[u])}l!==n.length&&(c=!0,i[xt].length&&ht(i[xt].length,n.length)),c&&i[xt][un]&&ht(i[xt][un],void 0);return}if(a){const c=a[un],l=c?Fd(s,r,n):Object.keys(a);for(let u=0,h=l.length;u<h;u++){const f=l[u],d=a[f],_=kc(fs(s,r,a,f,o));let v=kc(n[f]);_!==v&&(!_||!Fn(_)||!Fn(v)||t(_)!=null&&t(_)!==t(v)?(c&&ht(c,void 0),d&&ht(d,Fn(v)?cn(v,i):v)):As(v,cn(_,i),t))}}if(a=i[Rs]){const c=Object.keys(a);for(let l=0,u=c.length;l<u;l++){const h=c[l];ht(a[h],h in n)}}}}function Gc(n,e){return t=>{if(t==null)throw new Error("Cannot reconcile null or undefined state");const i=typeof e=="string"?r=>r[e]:e;if(i(t)!==void 0&&i(n)!==i(t))throw new Error("Cannot reconcile states with different identity");As(n,t,i)}}function Od(n,e={},t){let i;const s=new WeakMap,r=c=>{c[zo]=o,c[Oh]=s,Object.defineProperty(c,$i,{get(){return i},configurable:!0})},o=c=>{if(s.has(c))return s.get(c);if(c[Us]?.[zo]===o)return c;const l=Bh(c,kh,r);return s.set(c,l),l},a=o(e);return i=Zo(()=>{const c=Td();let l=!1,u;const h=new Proxy(a,Bd(()=>!l||c.De===u));rl(h,f=>{u=n(f),l=!0;const d=Ih(c,u,_=>{_!==f&&_!==void 0&&rl(a,Gc(_,t?.key||"id"))});d!==f&&d!==void 0&&Gc(d,t?.key||"id")(a)})}),i.Pe=!0,{store:a,node:i}}function Bd(n){const e={get(t,i){let s;vi(!0),gi(!0);try{s=t[i]}finally{vi(!1),gi(!1)}return typeof s=="object"&&s!==null?new Proxy(s,e):s},has(t,i){let s;vi(!0),gi(!0);try{s=i in t}finally{vi(!1),gi(!1)}return s},set(t,i,s){if(n&&!n())return!0;vi(!0),gi(!0);try{t[i]=s}finally{vi(!1),gi(!1)}return!0},deleteProperty(t,i){if(n&&!n())return!0;vi(!0),gi(!0);try{delete t[i]}finally{vi(!1),gi(!1)}return!0}};return e}const un=Symbol(0),Us=Symbol(0),bn=Symbol(0),En=Symbol(0),Zt="v",pt="o",dt="x",xt="n",Rs="h",zo="w",Oh="l",$i="f",Cs="p";function Bh(n,e=kh,t){let i;return Array.isArray(n)?(i=[],i.v=n):i={v:n},t&&t(i),i[bn]=new Proxy(i,e)}const il=new WeakMap;function cn(n,e){if(e?.[zo])return e[zo](n,e);let t=n[bn]||il.get(n);return t||il.set(n,t=Bh(n)),t}function Fn(n){return n!=null&&typeof n=="object"&&!Object.isFrozen(n)&&!(typeof Node<"u"&&n instanceof Node)}let zh=!1;function vi(n){zh=n}function Xr(n){return zh||!!Zi?.has(n)}function ar(n,e){let t=n[e];return t||(n[e]=t=Object.create(null)),t}function sl(n,e,t,i,s=wr,r,o){if(n[e])return n[e];const a=mr(t,{equals:s,unobserved(){delete n[e]}},i);if(r&&(a.ie=_t),o&&e in o){const c=o[e];a.Re=c===void 0?od:c}return n[e]=a}function Hc(n,e=un){Kt()&&es(sl(ar(n,xt),e,void 0,n[$i],!1,n[Cs]))}function Vh(n,e,t=!0){const i=_n(()=>t?Object.keys(n):Reflect.ownKeys(n));if(!e)return i;const s=new Set(i),r=Reflect.ownKeys(e);for(const o of r)e[o]!==En?s.add(o):s.delete(o);return Array.from(s)}function Wc(n,e,t){let i=n;if(e&&t in e){if(i[t]===En)return;t in i||(i=e)}return Reflect.getOwnPropertyDescriptor(i,t)}let Zi=null;const kh={get(n,e,t){if(e===Us)return n;if(e===bn)return t;if(e===ld)return n[$i];if(e===un)return Hc(n),t;const i=ar(n,xt),s=i[e],r=n[dt]&&e in n[dt],o=r||n[pt]&&e in n[pt],a=!!n[Zt][Us],c=r?n[dt]:n[pt]&&e in n[pt]?n[pt]:n[Zt];if(!s){const u=Object.getOwnPropertyDescriptor(c,e);if(u&&u.get)return u.get.call(t)}if(Xr(t)){let u=s&&(o||!a)?s.ie!==void 0&&s.ie!==_t?s.ie:s.te!==_t?s.te:s.ne:c[e];if(u===En&&(u=void 0),!Fn(u))return u;const h=cn(u,n);return Zi?.add(h),h}let l=s?o||!a?es(i[e]):(es(i[e]),c[e]):c[e];if(l===En&&(l=void 0),!s){if(!o&&typeof l=="function"&&!c.hasOwnProperty(e)){let u;return!Array.isArray(n[Zt])&&(u=Object.getPrototypeOf(n[Zt]))&&u!==Object.prototype?l.bind(c):l}else if(Kt())return es(sl(i,e,Fn(l)?cn(l,n):l,n[$i],wr,n[Cs],n[ad]))}return Fn(l)?cn(l,n):l},has(n,e){if(e===bn||e===un||e==="__proto__")return!0;const t=n[dt]&&e in n[dt]?n[dt][e]!==En:n[pt]&&e in n[pt]?n[pt][e]!==En:e in n[Zt];return Xr(n[bn])||Kt()&&es(sl(ar(n,Rs),e,t,n[$i],wr,n[Cs])),t},set(n,e,t){const i=n[bn];if(Xr(i)){if(n[Cs]){const s=n[$i];s?.B&&Tt.initTransition(s.B)}_n(()=>{const s=n[Zt],r=s[e];Pd&&typeof e!="symbol"&&(n[$i]?._e??0)&vt;const o=n[Cs]&&!br,a=o?dt:pt;o&&zc(i);const c=n[dt]&&e in n[dt]?n[dt][e]:n[pt]&&e in n[pt]?n[pt][e]:r,l=t?.[Us]?.[Zt]??t,u=Array.isArray(s)&&e!=="length",h=u?parseInt(e)+1:0,f=u&&(n[dt]&&"length"in n[dt]?n[dt].length:n[pt]&&"length"in n[pt]?n[pt].length:s.length),d=u&&h>f?h:void 0;if(c===l&&d===void 0)return!0;if(l!==void 0&&l===r&&d===void 0)delete n[a]?.[e];else{const m=n[a]||(n[a]=Object.create(null));m[e]=l,d!==void 0&&(m.length=d)}const _=Fn(l);n[Rs]?.[e]&&ht(n[Rs][e],!0);const v=ar(n,xt);if(v[e]&&ht(v[e],()=>_?cn(l,n):l),Array.isArray(s)){const m=e==="length"?l:d;m!==void 0&&v.length&&ht(v.length,m)}v[un]&&ht(v[un],void 0)})}return!0},deleteProperty(n,e){const t=n[dt]?.[e]===En,i=n[pt]?.[e]===En;return Xr(n[bn])&&!t&&!i&&_n(()=>{const s=n[Cs]&&!br,r=s?dt:pt;s&&zc(n[bn]);const o=n[dt]&&e in n[dt]?n[dt][e]:n[pt]&&e in n[pt]?n[pt][e]:n[Zt][e];if(e in n[Zt]||n[pt]&&e in n[pt])(n[r]||(n[r]=Object.create(null)))[e]=En;else if(n[r]&&e in n[r])delete n[r][e];else return!0;n[Rs]?.[e]&&ht(n[Rs][e],!1);const a=ar(n,xt);a[e]&&ht(a[e],void 0),a[un]&&ht(a[un],void 0)}),!0},ownKeys(n){Hc(n);let e=Vh(n[Zt],n[pt],!1);if(n[dt]){const t=new Set(e);for(const i of Reflect.ownKeys(n[dt]))n[dt][i]!==En?t.add(i):t.delete(i);e=Array.from(t)}return e},getOwnPropertyDescriptor(n,e){if(e===bn)return{value:n[bn],writable:!0,configurable:!0};if(n[dt]&&e in n[dt]){if(n[dt][e]===En)return;const t=Wc(n[Zt],n[pt],e);return t?{...t,value:n[dt][e]}:{value:n[dt][e],writable:!0,enumerable:!0,configurable:!0}}return Wc(n[Zt],n[pt],e)},getPrototypeOf(n){return Object.getPrototypeOf(n[Zt])}};function rl(n,e){const t=Zi;Zi=new Set,Zi.add(n);try{const i=e(n);if(i!==n&&i!==void 0)if(Array.isArray(i)){for(let s=0,r=i.length;s<r;s++)n[s]=i[s];n.length=i.length}else new Set([...Object.keys(n),...Object.keys(i)]).forEach(r=>{r in i?n[r]=i[r]:delete n[r]})}finally{Zi.clear(),Zi=t}}function zd(n,e,t){const i=typeof n=="function",s=i?Od(n,e,t).store:cn(n);return[s,r=>rl(s,r)]}const Gh=Symbol(0);function lr(n,e,t=0){let i,s=n;if(t<e.length-1){i=e[t];const o=typeof i,a=Array.isArray(n);if(Array.isArray(i)){for(let c=0;c<i.length;c++)e[t]=i[c],lr(n,e,t);e[t]=i;return}else if(a&&o==="function"){for(let c=0;c<n.length;c++)i(n[c],c)&&(e[t]=c,lr(n,e,t));e[t]=i;return}else if(a&&o==="object"){const{from:c=0,to:l=n.length-1,by:u=1}=i;for(let h=c;h<=l;h+=u)e[t]=h,lr(n,e,t);e[t]=i;return}else if(t<e.length-2){lr(n[i],e,t+1);return}s=n[i]}let r=e[e.length-1];if(!(typeof r=="function"&&(r=r(s),r===s))&&!(i===void 0&&r==null))if(r===Gh)delete n[i];else if(i===void 0||Fn(s)&&Fn(r)&&!Array.isArray(r)){const o=i!==void 0?n[i]:n,a=Object.keys(r);for(let c=0;c<a.length;c++)o[a[c]]=r[a[c]]}else n[i]=r}Object.assign(function(...e){return t=>{lr(t,e)}},{DELETE:Gh});function oa(n,e,t){const s=e.length>1,r=e;return lc(Vd.bind({Ze:pr(),Be:0,qe:n,ze:[],Xe:r,Je:[],et:[],tt:void 0,nt:void 0,it:s?[]:void 0,rt:t?.fallback}))}const aa={pureWrite:!0};function Vd(){const n=this.qe()||[],e=n.length;return n[un],Ps(this.Ze,()=>{let t,i,s=this.nt?()=>(this.nt[i]=mr(n[i],aa),this.it&&(this.it[i]=mr(i,aa)),this.Xe(Is(this.nt[i]),this.it?Is(this.it[i]):void 0)):this.it?()=>{const r=n[i];return this.it[i]=mr(i,aa),this.Xe(()=>r,Is(this.it[i]))}:()=>{const r=n[i];return this.Xe(()=>r)};if(e===0)this.Be!==0&&(this.Ze.dispose(!1),this.et=[],this.ze=[],this.Je=[],this.Be=0,this.nt&&(this.nt=[]),this.it&&(this.it=[])),this.rt&&!this.Je[0]&&(this.Je[0]=Ps(this.et[0]=pr(),this.rt));else if(this.Be===0){for(this.et[0]&&this.et[0].dispose(),this.Je=new Array(e),i=0;i<e;i++)this.ze[i]=n[i],this.Je[i]=Ps(this.et[i]=pr(),s);this.Be=e}else{let r,o,a,c,l,u,h,f=new Array(e),d=new Array(e),_=this.nt?new Array(e):void 0,v=this.it?new Array(e):void 0;for(r=0,o=Math.min(this.Be,e);r<o&&(this.ze[r]===n[r]||this.nt&&Xc(this.tt,this.ze[r],n[r]));r++)this.nt&&ht(this.nt[r],n[r]);for(o=this.Be-1,a=e-1;o>=r&&a>=r&&(this.ze[o]===n[a]||this.nt&&Xc(this.tt,this.ze[o],n[a]));o--,a--)f[a]=this.Je[o],d[a]=this.et[o],_&&(_[a]=this.nt[o]),v&&(v[a]=this.it[o]);for(u=new Map,h=new Array(a+1),i=a;i>=r;i--)c=n[i],l=this.tt?this.tt(c):c,t=u.get(l),h[i]=t===void 0?-1:t,u.set(l,i);for(t=r;t<=o;t++)c=this.ze[t],l=this.tt?this.tt(c):c,i=u.get(l),i!==void 0&&i!==-1?(f[i]=this.Je[t],d[i]=this.et[t],_&&(_[i]=this.nt[t]),v&&(v[i]=this.it[t]),i=h[i],u.set(l,i)):this.et[t].dispose();for(i=r;i<e;i++)i in f?(this.Je[i]=f[i],this.et[i]=d[i],_&&(this.nt[i]=_[i],ht(this.nt[i],n[i])),v&&(this.it[i]=v[i],ht(this.it[i],i))):this.Je[i]=Ps(this.et[i]=pr(),s);this.Je=this.Je.slice(0,this.Be=e),this.ze=n.slice(0)}}),this.Je}function Xc(n,e,t){return n?n(e)===n(t):!0}function Hh(n,e){if(typeof n=="function"&&!n.length){if(e?.doNotUnwrap)return n;do n=n();while(typeof n=="function"&&!n.length)}if(!(e?.skipNonRendered&&(n==null||n===!0||n===!1||n===""))){if(Array.isArray(n)){let t=[];return ol(n,t,e)?()=>{let i=[];return ol(t,i,{...e,doNotUnwrap:!1}),i}:t}return n}}function ol(n,e=[],t){let i=null,s=!1;for(let r=0;r<n.length;r++)try{let o=n[r];if(typeof o=="function"&&!o.length){if(t?.doNotUnwrap){e.push(o),s=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?s=ol(o,e,t):t?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||e.push(o)}catch(o){if(!(o instanceof nn))throw o;i=o}if(i)throw i;return s}const Ft=(...n)=>lc(...n),rt=(...n)=>Id(...n),kd=(...n)=>zd(...n),Gd=(...n)=>Nd(...n),qc=(...n)=>Ud(...n);function cr(n,e){return _n(()=>n(e||{}))}const ss=(n,e,t)=>Gd(n,e,t,{transparent:!0}),Hd=(n,e)=>e?n.$r?n:lc(()=>n(),void 0,{transparent:!0}):Ft(()=>n());function Wd(n,e,t){let i=t.length,s=e.length,r=i,o=0,a=0,c=e[s-1].nextSibling,l=null;for(;o<s||a<r;){if(e[o]===t[a]){o++,a++;continue}for(;e[s-1]===t[r-1];)s--,r--;if(s===o){const u=r<i?a?t[a-1].nextSibling:t[r-a]:c;for(;a<r;)n.insertBefore(t[a++],u)}else if(r===a)for(;o<s;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[r-1]&&t[a]===e[s-1]){const u=e[--s].nextSibling;n.insertBefore(t[a++],e[o++].nextSibling),n.insertBefore(t[--r],u),e[s]=t[r]}else{if(!l){l=new Map;let h=a;for(;h<r;)l.set(t[h],h++)}const u=l.get(e[o]);if(u!=null)if(a<u&&u<r){let h=o,f=1,d;for(;++h<s&&h<r&&!((d=l.get(e[h]))==null||d!==u+f);)f++;if(f>u-a){const _=e[o];for(;a<u;)n.insertBefore(t[a++],_)}else n.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const Yc="_$DX_DELEGATE";function Xd(n,e,t,i={}){let s;return cs(r=>{s=r,e===document?Hh(n):Ji(e,n(),e.firstChild?null:void 0,t)},{id:i.renderId}),()=>{s(),e.textContent=""}}function Ui(n,e,t,i){let s;const r=a=>{const c=document.createElement("template");return c.innerHTML=n,c.content.firstChild};return a=>(s||(s=r())).cloneNode(!0)}function cc(n,e=window.document){const t=e[Yc]||(e[Yc]=new Set);for(let i=0,s=n.length;i<s;i++){const r=n[i];t.has(r)||(t.add(r),e.addEventListener(r,Yd))}}function gt(n,e,t){t!=null?n.style.setProperty(e,t):n.style.removeProperty(e)}function qd(n,e){Array.isArray(n)?n.flat(1/0).forEach(t=>t&&t(e)):n(e)}function uc(n,e){const t=_n(n);Ps(null,()=>qd(t,e))}function Ji(n,e,t,i){const s=t!==void 0;if(s&&!i&&(i=[]),typeof e!="function"&&(e=Zc(e,i,s,!0),typeof e!="function"))return $c(n,e,i,t);if(e=Hd(e,!0),s&&i.length===0){const r=document.createTextNode("");n.insertBefore(r,t),i=[r]}ss(r=>Zc(e,r,s),(r,o)=>$c(n,r,o,t),i)}function Yd(n){let e=n.target;const t=`$$${n.type}`,i=n.target,s=n.currentTarget,r=c=>Object.defineProperty(n,"target",{configurable:!0,value:c}),o=()=>{const c=e[t];if(c&&!e.disabled){const l=e[`${t}Data`];if(l!==void 0?c.call(e,l,n):c.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&r(e.host),!0},a=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const c=n.composedPath();r(c[0]);for(let l=0;l<c.length-2&&(e=c[l],!!o());l++){if(e._$host){e=e._$host,a();break}if(e.parentNode===s)break}}else a();r(i)}function $c(n,e,t,i){if(e===t)return;const s=typeof e,r=i!==void 0;if(s==="string"||s==="number"){const o=typeof t;o==="string"||o==="number"?n.firstChild.data=e:n.textContent=e}else if(e===void 0)qr(n,t,i);else if(e.nodeType)Array.isArray(t)?qr(n,t,r?i:null,e):t===void 0||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);else if(Array.isArray(e)){const o=t&&Array.isArray(t);e.length===0?qr(n,t,i):o?t.length===0?Jc(n,e,i):Wd(n,t,e):(t&&qr(n),Jc(n,e))}}function Zc(n,e,t,i){if(n=Hh(n,{skipNonRendered:!0,doNotUnwrap:i}),i&&typeof n=="function")return n;if(t&&!Array.isArray(n)&&(n=[n??""]),Array.isArray(n))for(let s=0,r=n.length;s<r;s++){const o=n[s],a=e&&e[s],c=typeof o;(c==="string"||c==="number")&&(n[s]=a&&a.nodeType===3&&a.data===""+o?a:document.createTextNode(o))}return n}function Jc(n,e,t=null){for(let i=0,s=e.length;i<s;i++)n.insertBefore(e[i],t)}function qr(n,e,t,i){if(t===void 0)return n.textContent="";if(e.length){let s=!1;for(let r=e.length-1;r>=0;r--){const o=e[r];if(i!==o){const a=o.parentNode===n;i&&!s&&!r?a?n.replaceChild(i,o):n.insertBefore(i,t):a&&o.remove()}else s=!0}}else i&&n.insertBefore(i,t)}function $d(...n){return Xd(...n)}const hc="183",Zd=0,jc=1,Jd=2,To=1,jd=2,ur=3,Li=0,sn=1,ni=2,ci=0,Ns=1,Kc=2,Qc=3,eu=4,Kd=5,ji=100,Qd=101,ep=102,tp=103,np=104,ip=200,sp=201,rp=202,op=203,al=204,ll=205,ap=206,lp=207,cp=208,up=209,hp=210,fp=211,dp=212,pp=213,mp=214,cl=0,ul=1,hl=2,Vs=3,fl=4,dl=5,pl=6,ml=7,Wh=0,_p=1,gp=2,Vn=0,Xh=1,qh=2,Yh=3,$h=4,Zh=5,Jh=6,jh=7,Kh=300,as=301,ks=302,la=303,ca=304,Jo=306,_l=1e3,ii=1001,gl=1002,Ht=1003,vp=1004,Yr=1005,Yt=1006,ua=1007,ts=1008,hn=1009,Qh=1010,ef=1011,Ar=1012,fc=1013,Xn=1014,On=1015,fi=1016,dc=1017,pc=1018,Rr=1020,tf=35902,nf=35899,sf=1021,rf=1022,Rn=1023,di=1026,ns=1027,of=1028,mc=1029,Gs=1030,_c=1031,gc=1033,wo=33776,Ao=33777,Ro=33778,Co=33779,vl=35840,xl=35841,yl=35842,Sl=35843,Ml=36196,El=37492,bl=37496,Tl=37488,wl=37489,Al=37490,Rl=37491,Cl=37808,Pl=37809,Dl=37810,Ll=37811,Il=37812,Ul=37813,Nl=37814,Fl=37815,Ol=37816,Bl=37817,zl=37818,Vl=37819,kl=37820,Gl=37821,Hl=36492,Wl=36494,Xl=36495,ql=36283,Yl=36284,$l=36285,Zl=36286,xp=3200,vc=0,yp=1,Ti="",pn="srgb",Hs="srgb-linear",Vo="linear",lt="srgb",ds=7680,tu=519,Sp=512,Mp=513,Ep=514,xc=515,bp=516,Tp=517,yc=518,wp=519,nu=35044,iu="300 es",Bn=2e3,Cr=2001;function Ap(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rp(){const n=ko("canvas");return n.style.display="block",n}const su={};function ru(...n){const e="THREE."+n.shift();console.log(e,...n)}function af(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=af(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=af(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Go(...n){const e=n.join(" ");e in su||(su[e]=!0,Ge(...n))}function Cp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Pp={[cl]:ul,[hl]:pl,[fl]:ml,[Vs]:dl,[ul]:cl,[pl]:hl,[ml]:fl,[dl]:Vs};class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,Jl=180/Math.PI;function Ys(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Dp(n,e){return(n%e+e)%e}function fa(n,e,t){return(1-t)*n+t*e}function Ks(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $s{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],_=r[o+2],v=r[o+3];if(h!==v||c!==f||l!==d||u!==_){let m=c*f+l*d+u*_+h*v;m<0&&(f=-f,d=-d,_=-_,v=-v,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,c=c*p+f*a,l=l*p+d*a,u=u*p+_*a,h=h*p+v*a}else{c=c*p+f*a,l=l*p+d*a,u=u*p+_*a,h=h*p+v*a;const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*d-l*f,e[t+1]=c*_+u*f+l*h-a*d,e[t+2]=l*_+u*d+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new V,ou=new $s;class Ye{constructor(e,t,i,s,r,o,a,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],v=s[0],m=s[3],p=s[6],y=s[1],M=s[4],S=s[7],w=s[2],T=s[5],R=s[8];return r[0]=o*v+a*y+c*w,r[3]=o*m+a*M+c*T,r[6]=o*p+a*S+c*R,r[1]=l*v+u*y+h*w,r[4]=l*m+u*M+h*T,r[7]=l*p+u*S+h*R,r[2]=f*v+d*y+_*w,r[5]=f*m+d*M+_*T,r[8]=f*p+d*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,_=t*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new Ye,au=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lp(){const n={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Hs]:{primaries:e,whitePoint:i,transfer:Vo,toXYZ:au,fromXYZ:lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:au,fromXYZ:lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}const nt=Lp();function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ps;class Ip{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ps===void 0&&(ps=ko("canvas")),ps.width=e.width,ps.height=e.height;const s=ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ko("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Up=0;class Sc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ma(s[o].image)):r.push(ma(s[o]))}else r=ma(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ma(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ip.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let Np=0;const _a=new V;class en extends qs{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=ii,s=ii,r=Yt,o=ts,a=Rn,c=hn,l=en.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Ys(),this.name="",this.source=new Sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _l:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _l:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Kh;en.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,S=(d+1)/2,w=(p+1)/2,T=(u+f)/4,R=(h+v)/4,g=(_+m)/4;return M>S&&M>w?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=R/i):S>w?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=g/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=g/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fp extends qs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new en(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Sc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Fp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lf extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Op extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class St{constructor(e,t,i,s,r,o,a,c,l,u,h,f,d,_,v,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,f,d,_,v,m)}set(e,t,i,s,r,o,a,c,l,u,h,f,d,_,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=_+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,_=l*u,v=l*h;t[0]=f+v*a,t[4]=_*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,_=l*u,v=l*h;t[0]=f-v*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=_*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=v-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,d=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bp,e,zp)}lookAt(e,t,i){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),xi.crossVectors(i,on),xi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),xi.crossVectors(i,on)),xi.normalize(),$r.crossVectors(on,xi),s[0]=xi.x,s[4]=$r.x,s[8]=on.x,s[1]=xi.y,s[5]=$r.y,s[9]=on.y,s[2]=xi.z,s[6]=$r.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],v=i[6],m=i[10],p=i[14],y=i[3],M=i[7],S=i[11],w=i[15],T=s[0],R=s[4],g=s[8],E=s[12],U=s[1],C=s[5],D=s[9],L=s[13],N=s[2],I=s[6],z=s[10],F=s[14],$=s[3],J=s[7],ie=s[11],se=s[15];return r[0]=o*T+a*U+c*N+l*$,r[4]=o*R+a*C+c*I+l*J,r[8]=o*g+a*D+c*z+l*ie,r[12]=o*E+a*L+c*F+l*se,r[1]=u*T+h*U+f*N+d*$,r[5]=u*R+h*C+f*I+d*J,r[9]=u*g+h*D+f*z+d*ie,r[13]=u*E+h*L+f*F+d*se,r[2]=_*T+v*U+m*N+p*$,r[6]=_*R+v*C+m*I+p*J,r[10]=_*g+v*D+m*z+p*ie,r[14]=_*E+v*L+m*F+p*se,r[3]=y*T+M*U+S*N+w*$,r[7]=y*R+M*C+S*I+w*J,r[11]=y*g+M*D+S*z+w*ie,r[15]=y*E+M*L+S*F+w*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],v=e[7],m=e[11],p=e[15],y=c*d-l*f,M=a*d-l*h,S=a*f-c*h,w=o*d-l*u,T=o*f-c*u,R=o*h-a*u;return t*(v*y-m*M+p*S)-i*(_*y-m*w+p*T)+s*(_*M-v*w+p*R)-r*(_*S-v*T+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],v=e[13],m=e[14],p=e[15],y=t*a-i*o,M=t*c-s*o,S=t*l-r*o,w=i*c-s*a,T=i*l-r*a,R=s*l-r*c,g=u*v-h*_,E=u*m-f*_,U=u*p-d*_,C=h*m-f*v,D=h*p-d*v,L=f*p-d*m,N=y*L-M*D+S*C+w*U-T*E+R*g;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=(a*L-c*D+l*C)*I,e[1]=(s*D-i*L-r*C)*I,e[2]=(v*R-m*T+p*w)*I,e[3]=(f*T-h*R-d*w)*I,e[4]=(c*U-o*L-l*E)*I,e[5]=(t*L-s*U+r*E)*I,e[6]=(m*S-_*R-p*M)*I,e[7]=(u*R-f*S+d*M)*I,e[8]=(o*D-a*U+l*g)*I,e[9]=(i*U-t*D-r*g)*I,e[10]=(_*T-v*S+p*y)*I,e[11]=(h*S-u*T-d*y)*I,e[12]=(a*E-o*C-c*g)*I,e[13]=(t*C-i*E+s*g)*I,e[14]=(v*M-_*w-m*y)*I,e[15]=(u*w-h*M+f*y)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,_=r*h,v=o*u,m=o*h,p=a*h,y=c*l,M=c*u,S=c*h,w=i.x,T=i.y,R=i.z;return s[0]=(1-(v+p))*w,s[1]=(d+S)*w,s[2]=(_-M)*w,s[3]=0,s[4]=(d-S)*T,s[5]=(1-(f+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(_+M)*R,s[9]=(m-y)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ms.set(s[0],s[1],s[2]).length();const a=ms.set(s[4],s[5],s[6]).length(),c=ms.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yn.copy(this);const l=1/o,u=1/a,h=1/c;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Bn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let _,v;if(c)_=r/(o-r),v=o*r/(o-r);else if(a===Bn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Cr)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Bn,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let _,v;if(c)_=1/(o-r),v=o/(o-r);else if(a===Bn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===Cr)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ms=new V,yn=new St,Bp=new V(0,0,0),zp=new V(1,1,1),xi=new V,$r=new V,on=new V,cu=new St,uu=new $s;class qn{constructor(e=0,t=0,i=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vp=0;const hu=new V,_s=new $s,jn=new St,Zr=new V,Qs=new V,kp=new V,Gp=new $s,fu=new V(1,0,0),du=new V(0,1,0),pu=new V(0,0,1),mu={type:"added"},Hp={type:"removed"},gs={type:"childadded",child:null},ga={type:"childremoved",child:null};class $t extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new V,t=new qn,i=new $s,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Ye}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Qs,Zr,this.up):jn.lookAt(Zr,Qs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(jn),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mu),gs.child=e,this.dispatchEvent(gs),gs.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hp),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mu),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new V(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class si extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Dp(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=xa(o,r,e+1/3),this.g=xa(o,r,e),this.b=xa(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=pn){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=uf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return nt.workingToColorSpace(qt.copy(this),e),Math.round(Ke(qt.r*255,0,255))*65536+Math.round(Ke(qt.g*255,0,255))*256+Math.round(Ke(qt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(qt.copy(this),t);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=pn){nt.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,s=qt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Jr);const i=fa(yi.h,Jr.h,t),s=fa(yi.s,Jr.s,t),r=fa(yi.l,Jr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new ot;ot.NAMES=uf;class Xp extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sn=new V,Kn=new V,ya=new V,Qn=new V,vs=new V,xs=new V,_u=new V,Sa=new V,Ma=new V,Ea=new V,ba=new bt,Ta=new bt,wa=new bt;class An{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Sn.subVectors(e,t),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Sn.subVectors(s,t),Kn.subVectors(i,t),ya.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(Kn),c=Sn.dot(ya),l=Kn.dot(Kn),u=Kn.dot(ya),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(a,Qn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ba.setScalar(0),Ta.setScalar(0),wa.setScalar(0),ba.fromBufferAttribute(e,t),Ta.fromBufferAttribute(e,i),wa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ba,r.x),o.addScaledVector(Ta,r.y),o.addScaledVector(wa,r.z),o}static isFrontFacing(e,t,i,s){return Sn.subVectors(i,t),Kn.subVectors(e,t),Sn.cross(Kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Sn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;vs.subVectors(s,i),xs.subVectors(r,i),Sa.subVectors(e,i);const c=vs.dot(Sa),l=xs.dot(Sa);if(c<=0&&l<=0)return t.copy(i);Ma.subVectors(e,s);const u=vs.dot(Ma),h=xs.dot(Ma);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(vs,o);Ea.subVectors(e,r);const d=vs.dot(Ea),_=xs.dot(Ea);if(_>=0&&d<=_)return t.copy(r);const v=d*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(xs,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return _u.subVectors(r,s),a=(h-u)/(h-u+(d-_)),t.copy(s).addScaledVector(_u,a);const p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(vs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zs{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Kr.subVectors(this.max,er),ys.subVectors(e.a,er),Ss.subVectors(e.b,er),Ms.subVectors(e.c,er),Si.subVectors(Ss,ys),Mi.subVectors(Ms,Ss),zi.subVectors(ys,Ms);let t=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-zi.z,zi.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,zi.z,0,-zi.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-zi.y,zi.x,0];return!Aa(t,ys,Ss,Ms,Kr)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,ys,Ss,Ms,Kr))?!1:(Qr.crossVectors(Si,Mi),t=[Qr.x,Qr.y,Qr.z],Aa(t,ys,Ss,Ms,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new V,new V,new V,new V,new V,new V,new V,new V],Mn=new V,jr=new Zs,ys=new V,Ss=new V,Ms=new V,Si=new V,Mi=new V,zi=new V,er=new V,Kr=new V,Qr=new V,Vi=new V;function Aa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Vi.fromArray(n,r);const a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),u=i.dot(Vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const At=new V,eo=new fe;let qp=0;class Gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nu,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}}class hf extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ff extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Yp=new Zs,tr=new V,Ra=new V;class Mc{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(tr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(Ra)),this.expandByPoint(tr.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $p=0;const dn=new St,Ca=new $t,Es=new V,an=new Zs,nr=new Zs,Nt=new V;class fn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ap(e)?ff:hf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(an.min,nr.min),an.expandByPoint(Nt),Nt.addVectors(an.max,nr.max),an.expandByPoint(Nt)):(an.expandByPoint(nr.min),an.expandByPoint(nr.max))}an.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Nt.fromBufferAttribute(a,l),c&&(Es.fromBufferAttribute(e,l),Nt.add(Es)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let g=0;g<i.count;g++)a[g]=new V,c[g]=new V;const l=new V,u=new V,h=new V,f=new fe,d=new fe,_=new fe,v=new V,m=new V;function p(g,E,U){l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,U),f.fromBufferAttribute(r,g),d.fromBufferAttribute(r,E),_.fromBufferAttribute(r,U),u.sub(l),h.sub(l),d.sub(f),_.sub(f);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(C),a[g].add(v),a[E].add(v),a[U].add(v),c[g].add(m),c[E].add(m),c[U].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let g=0,E=y.length;g<E;++g){const U=y[g],C=U.start,D=U.count;for(let L=C,N=C+D;L<N;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new V,S=new V,w=new V,T=new V;function R(g){w.fromBufferAttribute(s,g),T.copy(w);const E=a[g];M.copy(E),M.sub(w.multiplyScalar(w.dot(E))).normalize(),S.crossVectors(T,E);const C=S.dot(c[g])<0?-1:1;o.setXYZW(g,M.x,M.y,M.z,C)}for(let g=0,E=y.length;g<E;++g){const U=y[g],C=U.start,D=U.count;for(let L=C,N=C+D;L<N;L+=3)R(e.getX(L+0)),R(e.getX(L+1)),R(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,o=new V,a=new V,c=new V,l=new V,u=new V,h=new V;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new Gn(f,u,h)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Zp=0;class Js extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Ns,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==ll&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ti=new V,Pa=new V,to=new V,Ei=new V,Da=new V,no=new V,La=new V;class Jp{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Pa.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Pa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=Ei.dot(this.direction),c=-Ei.dot(to),l=Ei.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Pa).addScaledVector(to,f),d}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){Da.subVectors(t,e),no.subVectors(i,e),La.crossVectors(Da,no);let o=this.direction.dot(La),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);const c=a*this.direction.dot(no.crossVectors(Ei,no));if(c<0)return null;const l=a*this.direction.dot(Da.cross(Ei));if(l<0||c+l>o)return null;const u=-a*Ei.dot(La);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ho extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gu=new St,ki=new Jp,io=new Mc,vu=new V,so=new V,ro=new V,oo=new V,Ia=new V,ao=new V,xu=new V,lo=new V;class je extends $t{constructor(e=new fn,t=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ia.fromBufferAttribute(h,e),o?ao.addScaledVector(Ia,u):ao.addScaledVector(Ia.sub(t),u))}t.add(ao)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(io.containsPoint(ki.origin)===!1&&(ki.intersectSphere(io,vu)===null||ki.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(gu.copy(r).invert(),ki.copy(e.ray).applyMatrix4(gu),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,w=M;S<w;S+=3){const T=a.getX(S),R=a.getX(S+1),g=a.getX(S+2);s=co(this,p,e,i,l,u,h,T,R,g),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);s=co(this,o,e,i,l,u,h,y,M,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,w=M;S<w;S+=3){const T=S,R=S+1,g=S+2;s=co(this,p,e,i,l,u,h,T,R,g),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const y=m,M=m+1,S=m+2;s=co(this,o,e,i,l,u,h,y,M,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function jp(n,e,t,i,s,r,o,a){let c;if(e.side===sn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Li,a),c===null)return null;lo.copy(a),lo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(lo);return l<t.near||l>t.far?null:{distance:l,point:lo.clone(),object:n}}function co(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,so),n.getVertexPosition(c,ro),n.getVertexPosition(l,oo);const u=jp(n,e,t,i,so,ro,oo,xu);if(u){const h=new V;An.getBarycoord(xu,so,ro,oo,h),s&&(u.uv=An.getInterpolatedAttribute(s,a,c,l,h,new fe)),r&&(u.uv1=An.getInterpolatedAttribute(r,a,c,l,h,new fe)),o&&(u.normal=An.getInterpolatedAttribute(o,a,c,l,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new V,materialIndex:0};An.getNormal(so,ro,oo,f.normal),u.face=f,u.barycoord=h}return u}class Kp extends en{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Ht,u=Ht,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ua=new V,Qp=new V,em=new Ye;class Xi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ua.subVectors(i,t).cross(Qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ua),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||em.getNormalMatrix(e),s=this.coplanarPoint(Ua).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Mc,tm=new fe(.5,.5),uo=new V;class Ec{constructor(e=new Xi,t=new Xi,i=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],v=r[9],m=r[10],p=r[11],y=r[12],M=r[13],S=r[14],w=r[15];if(s[0].setComponents(l-o,d-u,p-_,w-y).normalize(),s[1].setComponents(l+o,d+u,p+_,w+y).normalize(),s[2].setComponents(l+a,d+h,p+v,w+M).normalize(),s[3].setComponents(l-a,d-h,p-v,w-M).normalize(),i)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,d-f,p-m,w-S).normalize();else if(s[4].setComponents(l-c,d-f,p-m,w-S).normalize(),t===Bn)s[5].setComponents(l+c,d+f,p+m,w+S).normalize();else if(t===Cr)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const t=tm.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class df extends en{constructor(e=[],t=as,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pr extends en{constructor(e,t,i=Xn,s,r,o,a=Ht,c=Ht,l,u=di,h=1){if(u!==di&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nm extends Pr{constructor(e,t=Xn,i=as,s,r,o=Ht,a=Ht,c,l=di){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pf extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rt extends fn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2));function _(v,m,p,y,M,S,w,T,R,g,E){const U=S/R,C=w/g,D=S/2,L=w/2,N=T/2,I=R+1,z=g+1;let F=0,$=0;const J=new V;for(let ie=0;ie<z;ie++){const se=ie*C-L;for(let ee=0;ee<I;ee++){const Ue=ee*U-D;J[v]=Ue*y,J[m]=se*M,J[p]=N,l.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[p]=T>0?1:-1,u.push(J.x,J.y,J.z),h.push(ee/R),h.push(1-ie/g),F+=1}}for(let ie=0;ie<g;ie++)for(let se=0;se<R;se++){const ee=f+se+I*ie,Ue=f+se+I*(ie+1),We=f+(se+1)+I*(ie+1),Xe=f+(se+1)+I*ie;c.push(ee,Ue,Xe),c.push(Ue,We,Xe),$+=6}a.addGroup(d,$,E),d+=$,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wo extends fn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new V,u=new fe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=i+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xo extends fn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const v=[],m=i/2;let p=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(d,2));function y(){const S=new V,w=new V;let T=0;const R=(t-e)/i;for(let g=0;g<=r;g++){const E=[],U=g/r,C=U*(t-e)+e;for(let D=0;D<=s;D++){const L=D/s,N=L*c+a,I=Math.sin(N),z=Math.cos(N);w.x=C*I,w.y=-U*i+m,w.z=C*z,h.push(w.x,w.y,w.z),S.set(I,R,z).normalize(),f.push(S.x,S.y,S.z),d.push(L,1-U),E.push(_++)}v.push(E)}for(let g=0;g<s;g++)for(let E=0;E<r;E++){const U=v[E][g],C=v[E+1][g],D=v[E+1][g+1],L=v[E][g+1];(e>0||E!==0)&&(u.push(U,C,L),T+=3),(t>0||E!==r-1)&&(u.push(C,D,L),T+=3)}l.addGroup(p,T,0),p+=T}function M(S){const w=_,T=new fe,R=new V;let g=0;const E=S===!0?e:t,U=S===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*U,0),f.push(0,U,0),d.push(.5,.5),_++;const C=_;for(let D=0;D<=s;D++){const N=D/s*c+a,I=Math.cos(N),z=Math.sin(N);R.x=E*z,R.y=m*U,R.z=E*I,h.push(R.x,R.y,R.z),f.push(0,U,0),T.x=I*.5+.5,T.y=z*.5*U+.5,d.push(T.x,T.y),_++}for(let D=0;D<s;D++){const L=w+D,N=C+D;S===!0?u.push(N,N+1,L):u.push(N+1,N,L),g+=3}l.addGroup(p,g,S===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new fe:new V);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new V,s=[],r=[],o=[],a=new V,c=new St;for(let d=0;d<=e;d++){const _=d/e;s[d]=this.getTangentAt(_,new V)}r[0]=new V,o[0]=new V;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ke(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bc extends $n{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new fe){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class im extends bc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const ho=new V,Na=new Tc,Fa=new Tc,Oa=new Tc;class sm extends $n{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new V){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ho.subVectors(s[0],s[1]).add(s[0]),l=ho);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ho),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),Na.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,_,v,m),Fa.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,_,v,m),Oa.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,_,v,m)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Fa.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Oa.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Na.calc(c),Fa.calc(c),Oa.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function yu(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function rm(n,e){const t=1-n;return t*t*e}function om(n,e){return 2*(1-n)*n*e}function am(n,e){return n*n*e}function _r(n,e,t,i){return rm(n,e)+om(n,t)+am(n,i)}function lm(n,e){const t=1-n;return t*t*t*e}function cm(n,e){const t=1-n;return 3*t*t*n*e}function um(n,e){return 3*(1-n)*n*n*e}function hm(n,e){return n*n*n*e}function gr(n,e,t,i,s){return lm(n,e)+cm(n,t)+um(n,i)+hm(n,s)}class mf extends $n{constructor(e=new fe,t=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new fe){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(e,s.x,r.x,o.x,a.x),gr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fm extends $n{constructor(e=new V,t=new V,i=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new V){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(e,s.x,r.x,o.x,a.x),gr(e,s.y,r.y,o.y,a.y),gr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _f extends $n{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dm extends $n{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gf extends $n{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(e,s.x,r.x,o.x),_r(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pm extends $n{constructor(e=new V,t=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new V){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(e,s.x,r.x,o.x),_r(e,s.y,r.y,o.y),_r(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vf extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(yu(a,c.x,l.x,u.x,h.x),yu(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var jl=Object.freeze({__proto__:null,ArcCurve:im,CatmullRomCurve3:sm,CubicBezierCurve:mf,CubicBezierCurve3:fm,EllipseCurve:bc,LineCurve:_f,LineCurve3:dm,QuadraticBezierCurve:gf,QuadraticBezierCurve3:pm,SplineCurve:vf});class mm extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new jl[s.type]().fromJSON(s))}return this}}class vr extends mm{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new _f(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new gf(this.currentPoint.clone(),new fe(e,t),new fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new mf(this.currentPoint.clone(),new fe(e,t),new fe(i,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new vf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new bc(e,t,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xf extends vr{constructor(e){super(e),this.uuid=Ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new vr().fromJSON(s))}return this}}function _m(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=yf(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Sm(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,h=c;for(let f=t;f<s;f+=t){const d=n[f],_=n[f+1];d<a&&(a=d),_<c&&(c=_),d>u&&(u=d),_>h&&(h=_)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Dr(r,o,t,a,c,l,0),o}function yf(n,e,t,i,s){let r;if(s===Lm(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Su(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Su(o/i|0,n[o],n[o+1],r);return r&&Ws(r,r.next)&&(Ir(r),r=r.next),r}function ls(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ws(t,t.next)||yt(t.prev,t,t.next)===0)){if(Ir(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Dr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&wm(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?vm(n,i,s,r):gm(n)){e.push(c.i,n.i,l.i),Ir(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=xm(ls(n),e),Dr(n,e,t,i,s,r,2)):o===2&&ym(n,e,t,i,s,r):Dr(ls(n),e,t,i,s,r,1);break}}}function gm(n){const e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),h=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&hr(s,a,r,c,o,l,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function vm(n,e,t,i){const s=n.prev,r=n,o=n.next;if(yt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,c,l),_=Math.min(u,h,f),v=Math.max(a,c,l),m=Math.max(u,h,f),p=Kl(d,_,e,t,i),y=Kl(v,m,e,t,i);let M=n.prevZ,S=n.nextZ;for(;M&&M.z>=p&&S&&S.z<=y;){if(M.x>=d&&M.x<=v&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&hr(a,u,c,h,l,f,M.x,M.y)&&yt(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=d&&S.x<=v&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&hr(a,u,c,h,l,f,S.x,S.y)&&yt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&hr(a,u,c,h,l,f,M.x,M.y)&&yt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=v&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&hr(a,u,c,h,l,f,S.x,S.y)&&yt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function xm(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ws(i,s)&&Mf(i,t,t.next,s)&&Lr(i,s)&&Lr(s,i)&&(e.push(i.i,t.i,s.i),Ir(t),Ir(t.next),t=n=s),t=t.next}while(t!==n);return ls(t)}function ym(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cm(o,a)){let c=Ef(o,a);o=ls(o,o.next),c=ls(c,c.next),Dr(o,e,t,i,s,r,0),Dr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Sm(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=yf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Rm(l))}s.sort(Mm);for(let r=0;r<s.length;r++)t=Em(s[r],t);return t}function Mm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Em(n,e){const t=bm(n,e);if(!t)return e;const i=Ef(t,n);return ls(i,i.next),ls(t,t.next)}function bm(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Ws(n,t))return t;do{if(Ws(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Sf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const h=Math.abs(s-t.y)/(i-t.x);Lr(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Tm(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Tm(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function wm(n,e,t,i){let s=n;do s.z===0&&(s.z=Kl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Am(s)}function Am(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Kl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Rm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Sf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function hr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Sf(n,e,t,i,s,r,o,a)}function Cm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Pm(n,e)&&(Lr(n,e)&&Lr(e,n)&&Dm(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||Ws(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ws(n,e){return n.x===e.x&&n.y===e.y}function Mf(n,e,t,i){const s=po(yt(n,e,t)),r=po(yt(n,e,i)),o=po(yt(t,i,n)),a=po(yt(t,i,e));return!!(s!==r&&o!==a||s===0&&fo(n,t,e)||r===0&&fo(n,i,e)||o===0&&fo(t,n,i)||a===0&&fo(t,e,i))}function fo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function po(n){return n>0?1:n<0?-1:0}function Pm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Mf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Lr(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function Dm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ef(n,e){const t=Ql(n.i,n.x,n.y),i=Ql(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Su(n,e,t,i){const s=Ql(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ir(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ql(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lm(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Im{static triangulate(e,t,i=2){return _m(e,t,i)}}class Ds{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ds.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Mu(e),Eu(i,e);let o=e.length;t.forEach(Mu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Eu(i,t[c]);const a=Im.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Mu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Eu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class wc extends fn{constructor(e=new xf([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Pt(s,3)),this.setAttribute("uv",new Pt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Um;let M,S=!1,w,T,R,g;if(p){M=p.getSpacedPoints(u),S=!0,f=!1;const j=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,j),T=new V,R=new V,g=new V}f||(m=0,d=0,_=0,v=0);const E=a.extractPoints(l);let U=E.shape;const C=E.holes;if(!Ds.isClockWise(U)){U=U.reverse();for(let j=0,te=C.length;j<te;j++){const Q=C[j];Ds.isClockWise(Q)&&(C[j]=Q.reverse())}}function L(j){const Q=10000000000000001e-36;let pe=j[0];for(let P=1;P<=j.length;P++){const Ne=P%j.length,ge=j[Ne],ze=ge.x-pe.x,le=ge.y-pe.y,A=ze*ze+le*le,x=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs(pe.x),Math.abs(pe.y)),O=Q*x*x;if(A<=O){j.splice(Ne,1),P--;continue}pe=ge}}L(U),C.forEach(L);const N=C.length,I=U;for(let j=0;j<N;j++){const te=C[j];U=U.concat(te)}function z(j,te,Q){return te||tt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(te,Q)}const F=U.length;function $(j,te,Q){let pe,P,Ne;const ge=j.x-te.x,ze=j.y-te.y,le=Q.x-j.x,A=Q.y-j.y,x=ge*ge+ze*ze,O=ge*A-ze*le;if(Math.abs(O)>Number.EPSILON){const X=Math.sqrt(x),K=Math.sqrt(le*le+A*A),q=te.x-ze/X,Me=te.y+ge/X,ae=Q.x-A/K,Ae=Q.y+le/K,Fe=((ae-q)*A-(Ae-Me)*le)/(ge*A-ze*le);pe=q+ge*Fe-j.x,P=Me+ze*Fe-j.y;const ne=pe*pe+P*P;if(ne<=2)return new fe(pe,P);Ne=Math.sqrt(ne/2)}else{let X=!1;ge>Number.EPSILON?le>Number.EPSILON&&(X=!0):ge<-Number.EPSILON?le<-Number.EPSILON&&(X=!0):Math.sign(ze)===Math.sign(A)&&(X=!0),X?(pe=-ze,P=ge,Ne=Math.sqrt(x)):(pe=ge,P=ze,Ne=Math.sqrt(x/2))}return new fe(pe/Ne,P/Ne)}const J=[];for(let j=0,te=I.length,Q=te-1,pe=j+1;j<te;j++,Q++,pe++)Q===te&&(Q=0),pe===te&&(pe=0),J[j]=$(I[j],I[Q],I[pe]);const ie=[];let se,ee=J.concat();for(let j=0,te=N;j<te;j++){const Q=C[j];se=[];for(let pe=0,P=Q.length,Ne=P-1,ge=pe+1;pe<P;pe++,Ne++,ge++)Ne===P&&(Ne=0),ge===P&&(ge=0),se[pe]=$(Q[pe],Q[Ne],Q[ge]);ie.push(se),ee=ee.concat(se)}let Ue;if(m===0)Ue=Ds.triangulateShape(I,C);else{const j=[],te=[];for(let Q=0;Q<m;Q++){const pe=Q/m,P=d*Math.cos(pe*Math.PI/2),Ne=_*Math.sin(pe*Math.PI/2)+v;for(let ge=0,ze=I.length;ge<ze;ge++){const le=z(I[ge],J[ge],Ne);De(le.x,le.y,-P),pe===0&&j.push(le)}for(let ge=0,ze=N;ge<ze;ge++){const le=C[ge];se=ie[ge];const A=[];for(let x=0,O=le.length;x<O;x++){const X=z(le[x],se[x],Ne);De(X.x,X.y,-P),pe===0&&A.push(X)}pe===0&&te.push(A)}}Ue=Ds.triangulateShape(j,te)}const We=Ue.length,Xe=_+v;for(let j=0;j<F;j++){const te=f?z(U[j],ee[j],Xe):U[j];S?(R.copy(w.normals[0]).multiplyScalar(te.x),T.copy(w.binormals[0]).multiplyScalar(te.y),g.copy(M[0]).add(R).add(T),De(g.x,g.y,g.z)):De(te.x,te.y,0)}for(let j=1;j<=u;j++)for(let te=0;te<F;te++){const Q=f?z(U[te],ee[te],Xe):U[te];S?(R.copy(w.normals[j]).multiplyScalar(Q.x),T.copy(w.binormals[j]).multiplyScalar(Q.y),g.copy(M[j]).add(R).add(T),De(g.x,g.y,g.z)):De(Q.x,Q.y,h/u*j)}for(let j=m-1;j>=0;j--){const te=j/m,Q=d*Math.cos(te*Math.PI/2),pe=_*Math.sin(te*Math.PI/2)+v;for(let P=0,Ne=I.length;P<Ne;P++){const ge=z(I[P],J[P],pe);De(ge.x,ge.y,h+Q)}for(let P=0,Ne=C.length;P<Ne;P++){const ge=C[P];se=ie[P];for(let ze=0,le=ge.length;ze<le;ze++){const A=z(ge[ze],se[ze],pe);S?De(A.x,A.y+M[u-1].y,M[u-1].x+Q):De(A.x,A.y,h+Q)}}}Z(),oe();function Z(){const j=s.length/3;if(f){let te=0,Q=F*te;for(let pe=0;pe<We;pe++){const P=Ue[pe];Se(P[2]+Q,P[1]+Q,P[0]+Q)}te=u+m*2,Q=F*te;for(let pe=0;pe<We;pe++){const P=Ue[pe];Se(P[0]+Q,P[1]+Q,P[2]+Q)}}else{for(let te=0;te<We;te++){const Q=Ue[te];Se(Q[2],Q[1],Q[0])}for(let te=0;te<We;te++){const Q=Ue[te];Se(Q[0]+F*u,Q[1]+F*u,Q[2]+F*u)}}i.addGroup(j,s.length/3-j,0)}function oe(){const j=s.length/3;let te=0;ce(I,te),te+=I.length;for(let Q=0,pe=C.length;Q<pe;Q++){const P=C[Q];ce(P,te),te+=P.length}i.addGroup(j,s.length/3-j,1)}function ce(j,te){let Q=j.length;for(;--Q>=0;){const pe=Q;let P=Q-1;P<0&&(P=j.length-1);for(let Ne=0,ge=u+m*2;Ne<ge;Ne++){const ze=F*Ne,le=F*(Ne+1),A=te+pe+ze,x=te+P+ze,O=te+P+le,X=te+pe+le;Be(A,x,O,X)}}}function De(j,te,Q){c.push(j),c.push(te),c.push(Q)}function Se(j,te,Q){et(j),et(te),et(Q);const pe=s.length/3,P=y.generateTopUV(i,s,pe-3,pe-2,pe-1);Le(P[0]),Le(P[1]),Le(P[2])}function Be(j,te,Q,pe){et(j),et(te),et(pe),et(te),et(Q),et(pe);const P=s.length/3,Ne=y.generateSideWallUV(i,s,P-6,P-3,P-2,P-1);Le(Ne[0]),Le(Ne[1]),Le(Ne[3]),Le(Ne[1]),Le(Ne[2]),Le(Ne[3])}function et(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function Le(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Nm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new jl[s.type]().fromJSON(s)),new wc(i,e.options)}}const Um={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new fe(r,o),new fe(a,c),new fe(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],d=e[s*3+1],_=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new fe(o,1-c),new fe(l,1-h),new fe(f,1-_),new fe(v,1-p)]:[new fe(a,1-c),new fe(u,1-h),new fe(d,1-_),new fe(m,1-p)]}};function Nm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class jo extends fn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,d=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let M=0;M<l;M++){const S=M*h-r;_.push(S,-y,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const M=y+l*p,S=y+l*(p+1),w=y+1+l*(p+1),T=y+1+l*p;d.push(M,S,T),d.push(S,w,T)}this.setIndex(d),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ko extends fn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new V,f=new V,d=[],_=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],M=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&c===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const T=w/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(T+S,1-M),y.push(l++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const M=u[p][y+1],S=u[p][y],w=u[p+1][y],T=u[p+1][y+1];(p!==0||o>0)&&d.push(M,S,T),(p!==i-1||c<Math.PI)&&d.push(S,w,T)}this.setIndex(d),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Xs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=Xs(n[t]);for(const s in i)e[s]=i[s]}return e}function Fm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Om={clone:Xs,merge:Jt};var Bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bm,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vm extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ai extends Js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class km extends Js{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Gm extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hm extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tf extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ba=new St,bu=new V,Tu=new V;class Wm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),Tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tu),t.updateMatrixWorld(),Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Cr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mo=new V,_o=new $s,Ln=new V;class wf extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mo,_o,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,_o,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(mo,_o,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,_o,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bi=new V,wu=new fe,Au=new fe;class mn extends wf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jl*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Au),t.subVectors(Au,wu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ac extends wf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xm extends Wm{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qm extends Tf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Xm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ym extends Tf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const bs=-90,Ts=1;class $m extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(bs,Ts,e,t);s.layers=this.layers,this.add(s);const r=new mn(bs,Ts,e,t);r.layers=this.layers,this.add(r);const o=new mn(bs,Ts,e,t);o.layers=this.layers,this.add(o);const a=new mn(bs,Ts,e,t);a.layers=this.layers,this.add(a);const c=new mn(bs,Ts,e,t);c.layers=this.layers,this.add(c);const l=new mn(bs,Ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Zm extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ru(n,e,t,i){const s=Jm(i);switch(t){case sf:return n*e;case of:return n*e/s.components*s.byteLength;case mc:return n*e/s.components*s.byteLength;case Gs:return n*e*2/s.components*s.byteLength;case _c:return n*e*2/s.components*s.byteLength;case rf:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case gc:return n*e*4/s.components*s.byteLength;case wo:case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:case Sl:return Math.max(n,16)*Math.max(e,8)/4;case vl:case yl:return Math.max(n,8)*Math.max(e,8)/2;case Ml:case El:case Tl:case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bl:case Al:case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ql:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $l:case Zl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jm(n){switch(n){case hn:case Qh:return{byteLength:1,components:1};case Ar:case ef:case fi:return{byteLength:2,components:1};case dc:case pc:return{byteLength:2,components:4};case Xn:case fc:case On:return{byteLength:4,components:1};case tf:case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);function Af(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jm(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],v=h[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const v=h[d];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
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
#endif`,e_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s_=`#ifdef USE_AOMAP
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
#endif`,r_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o_=`#ifdef USE_BATCHING
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
#endif`,a_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h_=`#ifdef USE_IRIDESCENCE
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
#endif`,f_=`#ifdef USE_BUMPMAP
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
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,S_=`#define PI 3.141592653589793
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
} // validated`,M_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E_=`vec3 transformedNormal = objectNormal;
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
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R_="gl_FragColor = linearToOutputTexel( gl_FragColor );",C_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P_=`#ifdef USE_ENVMAP
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
#endif`,D_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,N_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z_=`#ifdef USE_GRADIENTMAP
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
}`,V_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H_=`uniform bool receiveShadow;
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
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,X_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z_=`PhysicalMaterial material;
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
#endif`,J_=`uniform sampler2D dfgLUT;
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
}`,j_=`
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
#endif`,K_=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ag=`#if defined( USE_POINTS_UV )
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
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yg=`#ifdef USE_NORMALMAP
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
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fg=`float getShadowMask() {
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
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`#include <common>
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
}`,s0=`#if DEPTH_PACKING == 3200
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
}`,r0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
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
}`,u0=`uniform vec3 diffuse;
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
}`,h0=`#include <common>
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
}`,f0=`uniform vec3 diffuse;
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
}`,d0=`#define LAMBERT
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define MATCAP
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
}`,_0=`#define MATCAP
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
}`,g0=`#define NORMAL
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
}`,v0=`#define NORMAL
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
}`,x0=`#define PHONG
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
}`,y0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,M0=`#define STANDARD
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
}`,E0=`#define TOON
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
}`,b0=`#define TOON
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
}`,T0=`uniform float size;
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
}`,w0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 color;
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
}`,C0=`uniform float rotation;
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
}`,P0=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Km,alphahash_pars_fragment:Qm,alphamap_fragment:e_,alphamap_pars_fragment:t_,alphatest_fragment:n_,alphatest_pars_fragment:i_,aomap_fragment:s_,aomap_pars_fragment:r_,batching_pars_vertex:o_,batching_vertex:a_,begin_vertex:l_,beginnormal_vertex:c_,bsdfs:u_,iridescence_fragment:h_,bumpmap_pars_fragment:f_,clipping_planes_fragment:d_,clipping_planes_pars_fragment:p_,clipping_planes_pars_vertex:m_,clipping_planes_vertex:__,color_fragment:g_,color_pars_fragment:v_,color_pars_vertex:x_,color_vertex:y_,common:S_,cube_uv_reflection_fragment:M_,defaultnormal_vertex:E_,displacementmap_pars_vertex:b_,displacementmap_vertex:T_,emissivemap_fragment:w_,emissivemap_pars_fragment:A_,colorspace_fragment:R_,colorspace_pars_fragment:C_,envmap_fragment:P_,envmap_common_pars_fragment:D_,envmap_pars_fragment:L_,envmap_pars_vertex:I_,envmap_physical_pars_fragment:W_,envmap_vertex:U_,fog_vertex:N_,fog_pars_vertex:F_,fog_fragment:O_,fog_pars_fragment:B_,gradientmap_pars_fragment:z_,lightmap_pars_fragment:V_,lights_lambert_fragment:k_,lights_lambert_pars_fragment:G_,lights_pars_begin:H_,lights_toon_fragment:X_,lights_toon_pars_fragment:q_,lights_phong_fragment:Y_,lights_phong_pars_fragment:$_,lights_physical_fragment:Z_,lights_physical_pars_fragment:J_,lights_fragment_begin:j_,lights_fragment_maps:K_,lights_fragment_end:Q_,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:sg,map_pars_fragment:rg,map_particle_fragment:og,map_particle_pars_fragment:ag,metalnessmap_fragment:lg,metalnessmap_pars_fragment:cg,morphinstance_vertex:ug,morphcolor_vertex:hg,morphnormal_vertex:fg,morphtarget_pars_vertex:dg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:_g,normal_pars_fragment:gg,normal_pars_vertex:vg,normal_vertex:xg,normalmap_pars_fragment:yg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:bg,opaque_fragment:Tg,packing:wg,premultiplied_alpha_fragment:Ag,project_vertex:Rg,dithering_fragment:Cg,dithering_pars_fragment:Pg,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Ug,shadowmap_vertex:Ng,shadowmask_pars_fragment:Fg,skinbase_vertex:Og,skinning_pars_vertex:Bg,skinning_vertex:zg,skinnormal_vertex:Vg,specularmap_fragment:kg,specularmap_pars_fragment:Gg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:qg,uv_pars_fragment:Yg,uv_pars_vertex:$g,uv_vertex:Zg,worldpos_vertex:Jg,background_vert:jg,background_frag:Kg,backgroundCube_vert:Qg,backgroundCube_frag:e0,cube_vert:t0,cube_frag:n0,depth_vert:i0,depth_frag:s0,distance_vert:r0,distance_frag:o0,equirect_vert:a0,equirect_frag:l0,linedashed_vert:c0,linedashed_frag:u0,meshbasic_vert:h0,meshbasic_frag:f0,meshlambert_vert:d0,meshlambert_frag:p0,meshmatcap_vert:m0,meshmatcap_frag:_0,meshnormal_vert:g0,meshnormal_frag:v0,meshphong_vert:x0,meshphong_frag:y0,meshphysical_vert:S0,meshphysical_frag:M0,meshtoon_vert:E0,meshtoon_frag:b0,points_vert:T0,points_frag:w0,shadow_vert:A0,shadow_frag:R0,sprite_vert:C0,sprite_frag:P0},_e={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Nn={basic:{uniforms:Jt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Jt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Jt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Jt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Jt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Jt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Jt([_e.points,_e.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Jt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Jt([_e.common,_e.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Jt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Jt([_e.sprite,_e.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Jt([_e.common,_e.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Jt([_e.lights,_e.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Nn.physical={uniforms:Jt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const go={r:0,b:0,g:0},Hi=new qn,D0=new St;function L0(n,e,t,i,s,r){const o=new ot(0);let a=s===!0?0:1,c,l,u=null,h=0,f=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const S=y.backgroundBlurriness>0;M=e.get(M,S)}return M}function _(y){let M=!1;const S=d(y);S===null?m(o,a):S&&S.isColor&&(m(S,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,M){const S=d(M);S&&(S.isCubeTexture||S.mapping===Jo)?(l===void 0&&(l=new je(new Rt(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Xs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Hi.copy(M.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(D0.makeRotationFromEuler(Hi)),l.material.toneMapped=nt.getTransfer(S.colorSpace)!==lt,(u!==S||h!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new je(new jo(2,2),new Yn({name:"BackgroundMaterial",uniforms:Xs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=nt.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(go,bf(n)),t.buffers.color.setClear(go.r,go.g,go.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:_,addToRenderList:v,dispose:p}}function I0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(C,D,L,N,I){let z=!1;const F=h(C,N,L,D);r!==F&&(r=F,l(r.object)),z=d(C,N,L,I),z&&_(C,N,L,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(C,D,L,N),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function h(C,D,L,N){const I=N.wireframe===!0;let z=i[D.id];z===void 0&&(z={},i[D.id]=z);const F=C.isInstancedMesh===!0?C.id:0;let $=z[F];$===void 0&&($={},z[F]=$);let J=$[L.id];J===void 0&&(J={},$[L.id]=J);let ie=J[I];return ie===void 0&&(ie=f(c()),J[I]=ie),ie}function f(C){const D=[],L=[],N=[];for(let I=0;I<t;I++)D[I]=0,L[I]=0,N[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:N,object:C,attributes:{},index:null}}function d(C,D,L,N){const I=r.attributes,z=D.attributes;let F=0;const $=L.getAttributes();for(const J in $)if($[J].location>=0){const se=I[J];let ee=z[J];if(ee===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),se===void 0||se.attribute!==ee||ee&&se.data!==ee.data)return!0;F++}return r.attributesNum!==F||r.index!==N}function _(C,D,L,N){const I={},z=D.attributes;let F=0;const $=L.getAttributes();for(const J in $)if($[J].location>=0){let se=z[J];se===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const ee={};ee.attribute=se,se&&se.data&&(ee.data=se.data),I[J]=ee,F++}r.attributes=I,r.attributesNum=F,r.index=N}function v(){const C=r.newAttributes;for(let D=0,L=C.length;D<L;D++)C[D]=0}function m(C){p(C,0)}function p(C,D){const L=r.newAttributes,N=r.enabledAttributes,I=r.attributeDivisors;L[C]=1,N[C]===0&&(n.enableVertexAttribArray(C),N[C]=1),I[C]!==D&&(n.vertexAttribDivisor(C,D),I[C]=D)}function y(){const C=r.newAttributes,D=r.enabledAttributes;for(let L=0,N=D.length;L<N;L++)D[L]!==C[L]&&(n.disableVertexAttribArray(L),D[L]=0)}function M(C,D,L,N,I,z,F){F===!0?n.vertexAttribIPointer(C,D,L,I,z):n.vertexAttribPointer(C,D,L,N,I,z)}function S(C,D,L,N){v();const I=N.attributes,z=L.getAttributes(),F=D.defaultAttributeValues;for(const $ in z){const J=z[$];if(J.location>=0){let ie=I[$];if(ie===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),ie!==void 0){const se=ie.normalized,ee=ie.itemSize,Ue=e.get(ie);if(Ue===void 0)continue;const We=Ue.buffer,Xe=Ue.type,Z=Ue.bytesPerElement,oe=Xe===n.INT||Xe===n.UNSIGNED_INT||ie.gpuType===fc;if(ie.isInterleavedBufferAttribute){const ce=ie.data,De=ce.stride,Se=ie.offset;if(ce.isInstancedInterleavedBuffer){for(let Be=0;Be<J.locationSize;Be++)p(J.location+Be,ce.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Be=0;Be<J.locationSize;Be++)m(J.location+Be);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Be=0;Be<J.locationSize;Be++)M(J.location+Be,ee/J.locationSize,Xe,se,De*Z,(Se+ee/J.locationSize*Be)*Z,oe)}else{if(ie.isInstancedBufferAttribute){for(let ce=0;ce<J.locationSize;ce++)p(J.location+ce,ie.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ce=0;ce<J.locationSize;ce++)m(J.location+ce);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ce=0;ce<J.locationSize;ce++)M(J.location+ce,ee/J.locationSize,Xe,se,ee*Z,ee/J.locationSize*ce*Z,oe)}}else if(F!==void 0){const se=F[$];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(J.location,se);break;case 3:n.vertexAttrib3fv(J.location,se);break;case 4:n.vertexAttrib4fv(J.location,se);break;default:n.vertexAttrib1fv(J.location,se)}}}}y()}function w(){E();for(const C in i){const D=i[C];for(const L in D){const N=D[L];for(const I in N){const z=N[I];for(const F in z)u(z[F].object),delete z[F];delete N[I]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const D=i[C.id];for(const L in D){const N=D[L];for(const I in N){const z=N[I];for(const F in z)u(z[F].object),delete z[F];delete N[I]}}delete i[C.id]}function R(C){for(const D in i){const L=i[D];for(const N in L){const I=L[N];if(I[C.id]===void 0)continue;const z=I[C.id];for(const F in z)u(z[F].object),delete z[F];delete I[C.id]}}}function g(C){for(const D in i){const L=i[D],N=C.isInstancedMesh===!0?C.id:0,I=L[N];if(I!==void 0){for(const z in I){const F=I[z];for(const $ in F)u(F[$].object),delete F[$];delete I[z]}delete L[N],Object.keys(L).length===0&&delete i[D]}}}function E(){U(),o=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function U0(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*f[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function N0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Rn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const g=R===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==hn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==On&&!g)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ge("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:S,maxSamples:w,samples:T}}function F0(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Xi,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const y=r?0:i,M=y*4;let S=p.clippingState||null;c.value=S,S=u(_,f,M,d);for(let w=0;w!==M;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const p=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=d;M!==v;++M,S+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Ri=4,Cu=[.125,.215,.35,.446,.526,.582],Ki=20,O0=256,ir=new Ac,Pu=new ot;let za=null,Va=0,ka=0,Ga=!1;const B0=new V;class Du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=B0}=r;za=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Va,ka),this._renderer.xr.enabled=Ga,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:fi,format:Rn,colorSpace:Hs,depthBuffer:!1},s=Lu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z0(r)),this._blurMaterial=k0(r,e,t),this._ggxMaterial=V0(r,e,t)}return s}_compileMaterial(e){const t=new je(new fn,e);this._renderer.compile(t,ir)}_sceneToCubeUV(e,t,i,s,r){const c=new mn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Pu),h.toneMapping=Vn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new Rt,new Ho({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Pu),p=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):S===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));const w=this._cubeSize;ws(s,S*w,M>2?w:0,w,w),h.setRenderTarget(s),p&&h.render(v,c),h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===as||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ws(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ir)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=0+l*1.25,d=h*f,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-Ri?i-_+Ri:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=_-t,ws(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,ir),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,ws(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,ir)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=l;const f=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):Ki;m>Ki&&Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let y=0;for(let R=0;R<Ki;++R){const g=R/v,E=Math.exp(-g*g/2);p.push(E),R===0?y+=E:R<m&&(y+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const S=this._sizeLods[s],w=3*S*(s>M-Ri?s-M+Ri:0),T=4*(this._cubeSize-S);ws(t,w,T,3*S,2*S),c.setRenderTarget(t),c.render(h,ir)}}function z0(n){const e=[],t=[],i=[];let s=n;const r=n-Ri+1+Cu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Ri?c=Cu[o-n+Ri-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,v=3,m=2,p=1,y=new Float32Array(v*_*d),M=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let T=0;T<d;T++){const R=T%3*2/3-1,g=T>2?0:-1,E=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];y.set(E,v*_*T),M.set(f,m*_*T);const U=[T,T,T,T,T,T];S.set(U,p*_*T)}const w=new fn;w.setAttribute("position",new Gn(y,v)),w.setAttribute("uv",new Gn(M,m)),w.setAttribute("faceIndex",new Gn(S,p)),i.push(new je(w,null)),s>Ri&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Lu(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=Jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function V0(n,e,t){return new Yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function k0(n,e,t){const i=new Float32Array(Ki),s=new V(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Iu(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Uu(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}class Rf extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new df(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rt(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ci});r.uniforms.tEquirect.value=t;const o=new je(s,r),a=t.minFilter;return t.minFilter===ts&&(t.minFilter=Yt),new $m(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function G0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===la||d===ca)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const v=new Rf(_.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,_=d===la||d===ca,v=d===as||d===ks;if(_||v){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Du(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return _&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new Du(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===la?f.mapping=as:d===ca&&(f.mapping=ks),f}function c(f){let d=0;const _=6;for(let v=0;v<_;v++)f[v]!==void 0&&d++;return d===_}function l(f){const d=f.target;d.removeEventListener("dispose",l);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function H0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Go("WebGLRenderer: "+i+" extension not supported."),s}}}function W0(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,_=h.attributes.position;let v=0;if(_===void 0)return;if(d!==null){const y=d.array;v=d.version;for(let M=0,S=y.length;M<S;M+=3){const w=y[M+0],T=y[M+1],R=y[M+2];f.push(w,T,T,R,R,w)}}else{const y=_.array;v=_.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const w=M+0,T=M+1,R=M+2;f.push(w,T,T,R,R,w)}}const m=new(_.count>=65535?ff:hf)(f,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function X0(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function l(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function h(f,d,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,_);let p=0;for(let y=0;y<_;y++)p+=d[y]*v[y];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function q0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Y0(n,e,t){const i=new WeakMap,s=new bt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let U=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",U)};var d=U;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let w=a.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*T*4*h),g=new lf(R,w,T,h);g.type=On,g.needsUpdate=!0;const E=S*4;for(let C=0;C<h;C++){const D=p[C],L=y[C],N=M[C],I=w*T*4*C;for(let z=0;z<D.count;z++){const F=z*E;_===!0&&(s.fromBufferAttribute(D,z),R[I+F+0]=s.x,R[I+F+1]=s.y,R[I+F+2]=s.z,R[I+F+3]=0),v===!0&&(s.fromBufferAttribute(L,z),R[I+F+4]=s.x,R[I+F+5]=s.y,R[I+F+6]=s.z,R[I+F+7]=0),m===!0&&(s.fromBufferAttribute(N,z),R[I+F+8]=s.x,R[I+F+9]=s.y,R[I+F+10]=s.z,R[I+F+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:g,size:new fe(w,T)},i.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function $0(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Z0={[Xh]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[$h]:"ACES_FILMIC_TONE_MAPPING",[Jh]:"AGX_TONE_MAPPING",[jh]:"NEUTRAL_TONE_MAPPING",[Zh]:"CUSTOM_TONE_MAPPING"};function J0(n,e,t,i,s){const r=new kn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new kn(e,t,{type:fi,depthBuffer:!1,stencilBuffer:!1}),a=new fn;a.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const c=new Vm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new je(a,c),u=new Ac(-1,1,1,-1,0,1);let h=null,f=null,d=!1,_,v=null,m=[],p=!1;this.setSize=function(y,M){r.setSize(y,M),o.setSize(y,M);for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(y,M)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const M=r.width,S=r.height;for(let w=0;w<m.length;w++){const T=m[w];T.setSize&&T.setSize(M,S)}},this.begin=function(y,M){if(d||y.toneMapping===Vn&&m.length===0)return!1;if(v=M,M!==null){const S=M.width,w=M.height;(r.width!==S||r.height!==w)&&this.setSize(S,w)}return p===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=Vn,!0},this.hasRenderPass=function(){return p},this.end=function(y,M){y.toneMapping=_,d=!0;let S=r,w=o;for(let T=0;T<m.length;T++){const R=m[T];if(R.enabled!==!1&&(R.render(y,w,S,M),R.needsSwap!==!1)){const g=S;S=w,w=g}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,c.defines={},nt.getTransfer(h)===lt&&(c.defines.SRGB_TRANSFER="");const T=Z0[f];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(v),y.render(l,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Cf=new en,ec=new Pr(1,1),Pf=new lf,Df=new Op,Lf=new df,Nu=[],Fu=[],Ou=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ea(n,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function K0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function Q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;zu.set(i),n.uniformMatrix2fv(this.addr,!1,zu),It(t,i)}}function nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Bu.set(i),n.uniformMatrix3fv(this.addr,!1,Bu),It(t,i)}}function iv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Ou.set(i),n.uniformMatrix4fv(this.addr,!1,Ou),It(t,i)}}function sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function lv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function fv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ec.compareFunction=t.isReversedDepthBuffer()?yc:xc,r=ec):r=Cf,t.setTexture2D(e||r,s)}function dv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Df,s)}function pv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Lf,s)}function mv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Pf,s)}function _v(n){switch(n){case 5126:return j0;case 35664:return K0;case 35665:return Q0;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return sv;case 35667:case 35671:return rv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return uv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}function gv(n,e){n.uniform1fv(this.addr,e)}function vv(n,e){const t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function xv(n,e){const t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function yv(n,e){const t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function Sv(n,e){const t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mv(n,e){const t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ev(n,e){const t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bv(n,e){n.uniform1iv(this.addr,e)}function Tv(n,e){n.uniform2iv(this.addr,e)}function wv(n,e){n.uniform3iv(this.addr,e)}function Av(n,e){n.uniform4iv(this.addr,e)}function Rv(n,e){n.uniform1uiv(this.addr,e)}function Cv(n,e){n.uniform2uiv(this.addr,e)}function Pv(n,e){n.uniform3uiv(this.addr,e)}function Dv(n,e){n.uniform4uiv(this.addr,e)}function Lv(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=ec:o=Cf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Iv(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Df,r[o])}function Uv(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Lf,r[o])}function Nv(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Pf,r[o])}function Fv(n){switch(n){case 5126:return gv;case 35664:return vv;case 35665:return xv;case 35666:return yv;case 35674:return Sv;case 35675:return Mv;case 35676:return Ev;case 5124:case 35670:return bv;case 35667:case 35671:return Tv;case 35668:case 35672:return wv;case 35669:case 35673:return Av;case 5125:return Rv;case 36294:return Cv;case 36295:return Pv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Nv}}class Ov{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}}class Bv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fv(t.type)}}class zv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function Vu(n,e){n.seq.push(e),n.map[e.id]=e}function Vv(n,e,t){const i=n.name,s=i.length;for(Ha.lastIndex=0;;){const r=Ha.exec(i),o=Ha.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Vu(t,l===void 0?new Ov(a,n,e):new Bv(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new zv(a),Vu(t,h)),t=h}}}class Po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Vv(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ku(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const kv=37297;let Gv=0;function Hv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Gu=new Ye;function Wv(n){nt._getMatrix(Gu,nt.workingColorSpace,n);const e=`mat3( ${Gu.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Vo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Hv(n.getShaderSource(e),a)}else return r}function Xv(n,e){const t=Wv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qv={[Xh]:"Linear",[qh]:"Reinhard",[Yh]:"Cineon",[$h]:"ACESFilmic",[Jh]:"AgX",[jh]:"Neutral",[Zh]:"Custom"};function Yv(n,e){const t=qv[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vo=new V;function $v(){nt.getLuminanceCoefficients(vo);const n=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Jv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fr(n){return n!==""}function Wu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(n){return n.replace(Kv,ex)}const Qv=new Map;function ex(n,e){let t=Ze[e];if(t===void 0){const i=Qv.get(e);if(i!==void 0)t=Ze[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tc(t)}const tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(n){return n.replace(tx,nx)}function nx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const ix={[To]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function sx(n){return ix[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rx={[as]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[Jo]:"ENVMAP_TYPE_CUBE_UV"};function ox(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":rx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const ax={[ks]:"ENVMAP_MODE_REFRACTION"};function lx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ax[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cx={[Wh]:"ENVMAP_BLENDING_MULTIPLY",[_p]:"ENVMAP_BLENDING_MIX",[gp]:"ENVMAP_BLENDING_ADD"};function ux(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cx[n.combine]||"ENVMAP_BLENDING_NONE"}function hx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fx(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=sx(t),l=ox(t),u=lx(t),h=ux(t),f=hx(t),d=Zv(t),_=Jv(r),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(m=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Xv("linearToOutputTexel",t.outputColorSpace),$v(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=tc(o),o=Wu(o,t),o=Xu(o,t),a=tc(a),a=Wu(a,t),a=Xu(a,t),o=qu(o),a=qu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,S=y+p+a,w=ku(s,s.VERTEX_SHADER,M),T=ku(s,s.FRAGMENT_SHADER,S);s.attachShader(v,w),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(C){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(w)||"",N=s.getShaderInfoLog(T)||"",I=D.trim(),z=L.trim(),F=N.trim();let $=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,T);else{const ie=Hu(s,w,"vertex"),se=Hu(s,T,"fragment");tt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+ie+`
`+se)}else I!==""?Ge("WebGLProgram: Program Info Log:",I):(z===""||F==="")&&(J=!1);J&&(C.diagnostics={runnable:$,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(w),s.deleteShader(T),g=new Po(s,v),E=jv(s,v)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(v,kv)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let dx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mx(e),t.set(e,i)),i}}class mx{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}}function _x(n,e,t,i,s,r){const o=new cf,a=new px,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return c.add(g),g===0?"uv":`uv${g}`}function v(g,E,U,C,D){const L=C.fog,N=D.geometry,I=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,F=e.get(g.envMap||I,z),$=F&&F.mapping===Jo?F.image.height:null,J=d[g.type];g.precision!==null&&(f=i.getMaxPrecision(g.precision),f!==g.precision&&Ge("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));const ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=ie!==void 0?ie.length:0;let ee=0;N.morphAttributes.position!==void 0&&(ee=1),N.morphAttributes.normal!==void 0&&(ee=2),N.morphAttributes.color!==void 0&&(ee=3);let Ue,We,Xe,Z;if(J){const at=Nn[J];Ue=at.vertexShader,We=at.fragmentShader}else Ue=g.vertexShader,We=g.fragmentShader,a.update(g),Xe=a.getVertexShaderID(g),Z=a.getFragmentShaderID(g);const oe=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),De=D.isInstancedMesh===!0,Se=D.isBatchedMesh===!0,Be=!!g.map,et=!!g.matcap,Le=!!F,j=!!g.aoMap,te=!!g.lightMap,Q=!!g.bumpMap,pe=!!g.normalMap,P=!!g.displacementMap,Ne=!!g.emissiveMap,ge=!!g.metalnessMap,ze=!!g.roughnessMap,le=g.anisotropy>0,A=g.clearcoat>0,x=g.dispersion>0,O=g.iridescence>0,X=g.sheen>0,K=g.transmission>0,q=le&&!!g.anisotropyMap,Me=A&&!!g.clearcoatMap,ae=A&&!!g.clearcoatNormalMap,Ae=A&&!!g.clearcoatRoughnessMap,Fe=O&&!!g.iridescenceMap,ne=O&&!!g.iridescenceThicknessMap,ue=X&&!!g.sheenColorMap,Te=X&&!!g.sheenRoughnessMap,we=!!g.specularMap,ye=!!g.specularColorMap,$e=!!g.specularIntensityMap,B=K&&!!g.transmissionMap,de=K&&!!g.thicknessMap,he=!!g.gradientMap,be=!!g.alphaMap,re=g.alphaTest>0,Y=!!g.alphaHash,Re=!!g.extensions;let He=Vn;g.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(He=n.toneMapping);const mt={shaderID:J,shaderType:g.type,shaderName:g.name,vertexShader:Ue,fragmentShader:We,defines:g.defines,customVertexShaderID:Xe,customFragmentShaderID:Z,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:Se,batchingColor:Se&&D._colorsTexture!==null,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Hs,alphaToCoverage:!!g.alphaToCoverage,map:Be,matcap:et,envMap:Le,envMapMode:Le&&F.mapping,envMapCubeUVHeight:$,aoMap:j,lightMap:te,bumpMap:Q,normalMap:pe,displacementMap:P,emissiveMap:Ne,normalMapObjectSpace:pe&&g.normalMapType===yp,normalMapTangentSpace:pe&&g.normalMapType===vc,metalnessMap:ge,roughnessMap:ze,anisotropy:le,anisotropyMap:q,clearcoat:A,clearcoatMap:Me,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ae,dispersion:x,iridescence:O,iridescenceMap:Fe,iridescenceThicknessMap:ne,sheen:X,sheenColorMap:ue,sheenRoughnessMap:Te,specularMap:we,specularColorMap:ye,specularIntensityMap:$e,transmission:K,transmissionMap:B,thicknessMap:de,gradientMap:he,opaque:g.transparent===!1&&g.blending===Ns&&g.alphaToCoverage===!1,alphaMap:be,alphaTest:re,alphaHash:Y,combine:g.combine,mapUv:Be&&_(g.map.channel),aoMapUv:j&&_(g.aoMap.channel),lightMapUv:te&&_(g.lightMap.channel),bumpMapUv:Q&&_(g.bumpMap.channel),normalMapUv:pe&&_(g.normalMap.channel),displacementMapUv:P&&_(g.displacementMap.channel),emissiveMapUv:Ne&&_(g.emissiveMap.channel),metalnessMapUv:ge&&_(g.metalnessMap.channel),roughnessMapUv:ze&&_(g.roughnessMap.channel),anisotropyMapUv:q&&_(g.anisotropyMap.channel),clearcoatMapUv:Me&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(g.sheenRoughnessMap.channel),specularMapUv:we&&_(g.specularMap.channel),specularColorMapUv:ye&&_(g.specularColorMap.channel),specularIntensityMapUv:$e&&_(g.specularIntensityMap.channel),transmissionMapUv:B&&_(g.transmissionMap.channel),thicknessMapUv:de&&_(g.thicknessMap.channel),alphaMapUv:be&&_(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pe||le),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(Be||be),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||N.attributes.normal===void 0&&pe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ce,skinning:D.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Be&&g.map.isVideoTexture===!0&&nt.getTransfer(g.map.colorSpace)===lt,decodeVideoTextureEmissive:Ne&&g.emissiveMap.isVideoTexture===!0&&nt.getTransfer(g.emissiveMap.colorSpace)===lt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ni,flipSided:g.side===sn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Re&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&g.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function m(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)E.push(U),E.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(p(E,g),y(E,g),E.push(n.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function p(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function y(g,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),g.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),g.push(o.mask)}function M(g){const E=d[g.type];let U;if(E){const C=Nn[E];U=Om.clone(C.uniforms)}else U=g.uniforms;return U}function S(g,E){let U=u.get(E);return U!==void 0?++U.usedTimes:(U=new fx(n,E,g,s),l.push(U),u.set(E,U)),U}function w(g){if(--g.usedTimes===0){const E=l.indexOf(g);l[E]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function T(g){a.remove(g)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:l,dispose:R}}function gx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function vx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,_,v,m,p){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:_,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:p},n[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=_,y.materialVariant=o(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=m,y.group=p),e++,y}function c(f,d,_,v,m,p){const y=a(f,d,_,v,m,p);_.transmission>0?i.push(y):_.transparent===!0?s.push(y):t.push(y)}function l(f,d,_,v,m,p){const y=a(f,d,_,v,m,p);_.transmission>0?i.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||vx),i.length>1&&i.sort(d||$u),s.length>1&&s.sort(d||$u)}function h(){for(let f=e,d=n.length;f<d;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function xx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Zu,n.set(i,[o])):s>=r.length?(o=new Zu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ot};break;case"SpotLight":t={position:new V,direction:new V,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function Sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Mx=0;function Ex(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bx(n){const e=new yx,t=Sx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);const s=new V,r=new St,o=new St;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,_=0,v=0,m=0,p=0,y=0,M=0,S=0,w=0,T=0,R=0;l.sort(Ex);for(let E=0,U=l.length;E<U;E++){const C=l[E],D=C.color,L=C.intensity,N=C.distance;let I=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Gs?I=C.shadow.map.texture:I=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=D.r*L,h+=D.g*L,f+=D.b*L;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],L);R++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const F=C.shadow,$=t.get(C);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=I,i.directionalShadowMatrix[d]=C.shadow.matrix,y++}i.directional[d]=z,d++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(D).multiplyScalar(L),z.distance=N,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[v]=z;const F=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,F.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[v]=F.matrix,C.castShadow){const $=t.get(C);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=I,S++}v++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(D).multiplyScalar(L),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const F=C.shadow,$=t.get(C);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=I,i.pointShadowMatrix[_]=C.shadow.matrix,M++}i.point[_]=z,_++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(L),z.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[p]=z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const g=i.hash;(g.directionalLength!==d||g.pointLength!==_||g.spotLength!==v||g.rectAreaLength!==m||g.hemiLength!==p||g.numDirectionalShadows!==y||g.numPointShadows!==M||g.numSpotShadows!==S||g.numSpotMaps!==w||g.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,g.directionalLength=d,g.pointLength=_,g.spotLength=v,g.rectAreaLength=m,g.hemiLength=p,g.numDirectionalShadows=y,g.numPointShadows=M,g.numSpotShadows=S,g.numSpotMaps=w,g.numLightProbes=R,i.version=Mx++)}function c(l,u){let h=0,f=0,d=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const M=l[p];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(M.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function Ju(n){const e=new bx(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Tx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ju(n),e.set(s,[a])):r>=o.length?(a=new Ju(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`,Rx=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Cx=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],ju=new St,sr=new V,Wa=new V;function Px(n,e,t){let i=new Ec;const s=new fe,r=new fe,o=new bt,a=new Gm,c=new Hm,l={},u=t.maxTextureSize,h={[Li]:sn,[sn]:Li,[ni]:ni},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:wx,fragmentShader:Ax}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new fn;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new je(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let p=this.type;this.render=function(T,R,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===jd&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=To);const E=n.getRenderTarget(),U=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ci),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=p!==this.type;L&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(I=>I.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,I=T.length;N<I;N++){const z=T[N],F=z.shadow;if(F===void 0){Ge("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const $=F.getFrameExtents();s.multiply($),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,F.mapSize.y=r.y));const J=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=J,F.map===null||L===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ur){if(z.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new kn(s.x,s.y,{format:Gs,type:fi,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new Pr(s.x,s.y,On),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=di,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ht,F.map.depthTexture.magFilter=Ht}else z.isPointLight?(F.map=new Rf(s.x),F.map.depthTexture=new nm(s.x,Xn)):(F.map=new kn(s.x,s.y),F.map.depthTexture=new Pr(s.x,s.y,Xn)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=di,this.type===To?(F.map.depthTexture.compareFunction=J?yc:xc,F.map.depthTexture.minFilter=Yt,F.map.depthTexture.magFilter=Yt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ht,F.map.depthTexture.magFilter=Ht);F.camera.updateProjectionMatrix()}const ie=F.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<ie;se++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,se),n.clear();else{se===0&&(n.setRenderTarget(F.map),n.clear());const ee=F.getViewport(se);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),D.viewport(o)}if(z.isPointLight){const ee=F.camera,Ue=F.matrix,We=z.distance||ee.far;We!==ee.far&&(ee.far=We,ee.updateProjectionMatrix()),sr.setFromMatrixPosition(z.matrixWorld),ee.position.copy(sr),Wa.copy(ee.position),Wa.add(Rx[se]),ee.up.copy(Cx[se]),ee.lookAt(Wa),ee.updateMatrixWorld(),Ue.makeTranslation(-sr.x,-sr.y,-sr.z),ju.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ju,ee.coordinateSystem,ee.reversedDepth)}else F.updateMatrices(z);i=F.getFrustum(),S(R,g,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===ur&&y(F,g),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,U,C)};function y(T,R){const g=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new kn(s.x,s.y,{format:Gs,type:fi})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,g,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,g,d,v,null)}function M(T,R,g,E){let U=null;const C=g.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)U=C;else if(U=g.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=U.uuid,L=R.uuid;let N=l[D];N===void 0&&(N={},l[D]=N);let I=N[L];I===void 0&&(I=U.clone(),N[L]=I,R.addEventListener("dispose",w)),U=I}if(U.visible=R.visible,U.wireframe=R.wireframe,E===ur?U.side=R.shadowSide!==null?R.shadowSide:R.side:U.side=R.shadowSide!==null?R.shadowSide:h[R.side],U.alphaMap=R.alphaMap,U.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,g.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const D=n.properties.get(U);D.light=g}return U}function S(T,R,g,E,U){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===ur)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,T.matrixWorld);const L=e.update(T),N=T.material;if(Array.isArray(N)){const I=L.groups;for(let z=0,F=I.length;z<F;z++){const $=I[z],J=N[$.materialIndex];if(J&&J.visible){const ie=M(T,J,E,U);T.onBeforeShadow(n,T,R,g,L,ie,$),n.renderBufferDirect(g,null,L,ie,T,$),T.onAfterShadow(n,T,R,g,L,ie,$)}}}else if(N.visible){const I=M(T,N,E,U);T.onBeforeShadow(n,T,R,g,L,I,null),n.renderBufferDirect(g,null,L,I,T,null),T.onAfterShadow(n,T,R,g,L,I,null)}}const D=T.children;for(let L=0,N=D.length;L<N;L++)S(D[L],R,g,E,U)}function w(T){T.target.removeEventListener("dispose",w);for(const g in l){const E=l[g],U=T.target.uuid;U in E&&(E[U].dispose(),delete E[U])}}}function Dx(n,e){function t(){let B=!1;const de=new bt;let he=null;const be=new bt(0,0,0,0);return{setMask:function(re){he!==re&&!B&&(n.colorMask(re,re,re,re),he=re)},setLocked:function(re){B=re},setClear:function(re,Y,Re,He,mt){mt===!0&&(re*=He,Y*=He,Re*=He),de.set(re,Y,Re,He),be.equals(de)===!1&&(n.clearColor(re,Y,Re,He),be.copy(de))},reset:function(){B=!1,he=null,be.set(-1,0,0,0)}}}function i(){let B=!1,de=!1,he=null,be=null,re=null;return{setReversed:function(Y){if(de!==Y){const Re=e.get("EXT_clip_control");Y?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),de=Y;const He=re;re=null,this.setClear(He)}},getReversed:function(){return de},setTest:function(Y){Y?oe(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(Y){he!==Y&&!B&&(n.depthMask(Y),he=Y)},setFunc:function(Y){if(de&&(Y=Pp[Y]),be!==Y){switch(Y){case cl:n.depthFunc(n.NEVER);break;case ul:n.depthFunc(n.ALWAYS);break;case hl:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case fl:n.depthFunc(n.EQUAL);break;case dl:n.depthFunc(n.GEQUAL);break;case pl:n.depthFunc(n.GREATER);break;case ml:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=Y}},setLocked:function(Y){B=Y},setClear:function(Y){re!==Y&&(re=Y,de&&(Y=1-Y),n.clearDepth(Y))},reset:function(){B=!1,he=null,be=null,re=null,de=!1}}}function s(){let B=!1,de=null,he=null,be=null,re=null,Y=null,Re=null,He=null,mt=null;return{setTest:function(at){B||(at?oe(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(at){de!==at&&!B&&(n.stencilMask(at),de=at)},setFunc:function(at,Zn,Jn){(he!==at||be!==Zn||re!==Jn)&&(n.stencilFunc(at,Zn,Jn),he=at,be=Zn,re=Jn)},setOp:function(at,Zn,Jn){(Y!==at||Re!==Zn||He!==Jn)&&(n.stencilOp(at,Zn,Jn),Y=at,Re=Zn,He=Jn)},setLocked:function(at){B=at},setClear:function(at){mt!==at&&(n.clearStencil(at),mt=at)},reset:function(){B=!1,de=null,he=null,be=null,re=null,Y=null,Re=null,He=null,mt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,v=!1,m=null,p=null,y=null,M=null,S=null,w=null,T=null,R=new ot(0,0,0),g=0,E=!1,U=null,C=null,D=null,L=null,N=null;const I=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,F=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec($)[1]),z=F>=1):$.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=F>=2);let J=null,ie={};const se=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),Ue=new bt().fromArray(se),We=new bt().fromArray(ee);function Xe(B,de,he,be){const re=new Uint8Array(4),Y=n.createTexture();n.bindTexture(B,Y),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<he;Re++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(de+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return Y}const Z={};Z[n.TEXTURE_2D]=Xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Vs),Q(!1),pe(jc),oe(n.CULL_FACE),j(ci);function oe(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function ce(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function De(B,de){return h[B]!==de?(n.bindFramebuffer(B,de),h[B]=de,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=de),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Se(B,de){let he=d,be=!1;if(B){he=f.get(de),he===void 0&&(he=[],f.set(de,he));const re=B.textures;if(he.length!==re.length||he[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,Re=re.length;Y<Re;Y++)he[Y]=n.COLOR_ATTACHMENT0+Y;he.length=re.length,be=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,be=!0);be&&n.drawBuffers(he)}function Be(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const et={[ji]:n.FUNC_ADD,[Qd]:n.FUNC_SUBTRACT,[ep]:n.FUNC_REVERSE_SUBTRACT};et[tp]=n.MIN,et[np]=n.MAX;const Le={[ip]:n.ZERO,[sp]:n.ONE,[rp]:n.SRC_COLOR,[al]:n.SRC_ALPHA,[hp]:n.SRC_ALPHA_SATURATE,[cp]:n.DST_COLOR,[ap]:n.DST_ALPHA,[op]:n.ONE_MINUS_SRC_COLOR,[ll]:n.ONE_MINUS_SRC_ALPHA,[up]:n.ONE_MINUS_DST_COLOR,[lp]:n.ONE_MINUS_DST_ALPHA,[fp]:n.CONSTANT_COLOR,[dp]:n.ONE_MINUS_CONSTANT_COLOR,[pp]:n.CONSTANT_ALPHA,[mp]:n.ONE_MINUS_CONSTANT_ALPHA};function j(B,de,he,be,re,Y,Re,He,mt,at){if(B===ci){v===!0&&(ce(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),B!==Kd){if(B!==m||at!==E){if((p!==ji||S!==ji)&&(n.blendEquation(n.FUNC_ADD),p=ji,S=ji),at)switch(B){case Ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",B);break}else switch(B){case Ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qc:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",B);break}y=null,M=null,w=null,T=null,R.set(0,0,0),g=0,m=B,E=at}return}re=re||de,Y=Y||he,Re=Re||be,(de!==p||re!==S)&&(n.blendEquationSeparate(et[de],et[re]),p=de,S=re),(he!==y||be!==M||Y!==w||Re!==T)&&(n.blendFuncSeparate(Le[he],Le[be],Le[Y],Le[Re]),y=he,M=be,w=Y,T=Re),(He.equals(R)===!1||mt!==g)&&(n.blendColor(He.r,He.g,He.b,mt),R.copy(He),g=mt),m=B,E=!1}function te(B,de){B.side===ni?ce(n.CULL_FACE):oe(n.CULL_FACE);let he=B.side===sn;de&&(he=!he),Q(he),B.blending===Ns&&B.transparent===!1?j(ci):j(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const be=B.stencilWrite;a.setTest(be),be&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ne(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(B){U!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),U=B)}function pe(B){B!==Zd?(oe(n.CULL_FACE),B!==C&&(B===jc?n.cullFace(n.BACK):B===Jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),C=B}function P(B){B!==D&&(z&&n.lineWidth(B),D=B)}function Ne(B,de,he){B?(oe(n.POLYGON_OFFSET_FILL),(L!==de||N!==he)&&(L=de,N=he,o.getReversed()&&(de=-de),n.polygonOffset(de,he))):ce(n.POLYGON_OFFSET_FILL)}function ge(B){B?oe(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function ze(B){B===void 0&&(B=n.TEXTURE0+I-1),J!==B&&(n.activeTexture(B),J=B)}function le(B,de,he){he===void 0&&(J===null?he=n.TEXTURE0+I-1:he=J);let be=ie[he];be===void 0&&(be={type:void 0,texture:void 0},ie[he]=be),(be.type!==B||be.texture!==de)&&(J!==he&&(n.activeTexture(he),J=he),n.bindTexture(B,de||Z[B]),be.type=B,be.texture=de)}function A(){const B=ie[J];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(B){tt("WebGLState:",B)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(B){tt("WebGLState:",B)}}function X(){try{n.texSubImage2D(...arguments)}catch(B){tt("WebGLState:",B)}}function K(){try{n.texSubImage3D(...arguments)}catch(B){tt("WebGLState:",B)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(B){tt("WebGLState:",B)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(B){tt("WebGLState:",B)}}function ae(){try{n.texStorage2D(...arguments)}catch(B){tt("WebGLState:",B)}}function Ae(){try{n.texStorage3D(...arguments)}catch(B){tt("WebGLState:",B)}}function Fe(){try{n.texImage2D(...arguments)}catch(B){tt("WebGLState:",B)}}function ne(){try{n.texImage3D(...arguments)}catch(B){tt("WebGLState:",B)}}function ue(B){Ue.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ue.copy(B))}function Te(B){We.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),We.copy(B))}function we(B,de){let he=l.get(de);he===void 0&&(he=new WeakMap,l.set(de,he));let be=he.get(B);be===void 0&&(be=n.getUniformBlockIndex(de,B.name),he.set(B,be))}function ye(B,de){const be=l.get(de).get(B);c.get(de)!==be&&(n.uniformBlockBinding(de,be,B.__bindingPointIndex),c.set(de,be))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,ie={},h={},f=new WeakMap,d=[],_=null,v=!1,m=null,p=null,y=null,M=null,S=null,w=null,T=null,R=new ot(0,0,0),g=0,E=!1,U=null,C=null,D=null,L=null,N=null,Ue.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:ce,bindFramebuffer:De,drawBuffers:Se,useProgram:Be,setBlending:j,setMaterial:te,setFlipSided:Q,setCullFace:pe,setLineWidth:P,setPolygonOffset:Ne,setScissorTest:ge,activeTexture:ze,bindTexture:le,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Fe,texImage3D:ne,updateUBOMapping:we,uniformBlockBinding:ye,texStorage2D:ae,texStorage3D:Ae,texSubImage2D:X,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:Me,scissor:ue,viewport:Te,reset:$e}}function Lx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return d?new OffscreenCanvas(A,x):ko("canvas")}function v(A,x,O){let X=1;const K=le(A);if((K.width>O||K.height>O)&&(X=O/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(X*K.width),Me=Math.floor(X*K.height);h===void 0&&(h=_(q,Me));const ae=x?_(q,Me):h;return ae.width=q,ae.height=Me,ae.getContext("2d").drawImage(A,0,0,q,Me),Ge("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+Me+")."),ae}else return"data"in A&&Ge("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,x,O,X,K=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=x;if(x===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),x===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),x===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),x===n.RGBA){const Me=K?Vo:nt.getTransfer(X);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=Me===lt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(A,x){let O;return A?x===null||x===Xn||x===Rr?O=n.DEPTH24_STENCIL8:x===On?O=n.DEPTH32F_STENCIL8:x===Ar&&(O=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===Rr?O=n.DEPTH_COMPONENT24:x===On?O=n.DEPTH_COMPONENT32F:x===Ar&&(O=n.DEPTH_COMPONENT16),O}function w(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==Yt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function T(A){const x=A.target;x.removeEventListener("dispose",T),g(x),x.isVideoTexture&&u.delete(x)}function R(A){const x=A.target;x.removeEventListener("dispose",R),U(x)}function g(A){const x=i.get(A);if(x.__webglInit===void 0)return;const O=A.source,X=f.get(O);if(X){const K=X[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(A),Object.keys(X).length===0&&f.delete(O)}i.remove(A)}function E(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const O=A.source,X=f.get(O);delete X[x.__cacheKey],o.memory.textures--}function U(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let K=0;K<x.__webglFramebuffer[X].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[X][K]);else n.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)n.deleteFramebuffer(x.__webglFramebuffer[X]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=A.textures;for(let X=0,K=O.length;X<K;X++){const q=i.get(O[X]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(O[X])}i.remove(A)}let C=0;function D(){C=0}function L(){const A=C;return A>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function N(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function I(A,x){const O=i.get(A);if(A.isVideoTexture&&ge(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const X=A.image;if(X===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,A,x);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function z(A,x){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Z(O,A,x);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function F(A,x){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Z(O,A,x);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function $(A,x){const O=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){oe(O,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}const J={[_l]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},ie={[Ht]:n.NEAREST,[vp]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[ua]:n.LINEAR_MIPMAP_NEAREST,[ts]:n.LINEAR_MIPMAP_LINEAR},se={[Sp]:n.NEVER,[wp]:n.ALWAYS,[Mp]:n.LESS,[xc]:n.LEQUAL,[Ep]:n.EQUAL,[yc]:n.GEQUAL,[bp]:n.GREATER,[Tp]:n.NOTEQUAL};function ee(A,x){if(x.type===On&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Yt||x.magFilter===ua||x.magFilter===Yr||x.magFilter===ts||x.minFilter===Yt||x.minFilter===ua||x.minFilter===Yr||x.minFilter===ts)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,J[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,J[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,J[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ie[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ie[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,se[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ht||x.minFilter!==Yr&&x.minFilter!==ts||x.type===On&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ue(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",T));const X=x.source;let K=f.get(X);K===void 0&&(K={},f.set(X,K));const q=N(x);if(q!==A.__cacheKey){K[q]===void 0&&(K[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[q].usedTimes++;const Me=K[A.__cacheKey];Me!==void 0&&(K[A.__cacheKey].usedTimes--,Me.usedTimes===0&&E(x)),A.__cacheKey=q,A.__webglTexture=K[q].texture}return O}function We(A,x,O){return Math.floor(Math.floor(A/O)/x)}function Xe(A,x,O,X){const q=A.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,O,X,x.data);else{q.sort((ne,ue)=>ne.start-ue.start);let Me=0;for(let ne=1;ne<q.length;ne++){const ue=q[Me],Te=q[ne],we=ue.start+ue.count,ye=We(Te.start,x.width,4),$e=We(ue.start,x.width,4);Te.start<=we+1&&ye===$e&&We(Te.start+Te.count-1,x.width,4)===ye?ue.count=Math.max(ue.count,Te.start+Te.count-ue.start):(++Me,q[Me]=Te)}q.length=Me+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ne=0,ue=q.length;ne<ue;ne++){const Te=q[ne],we=Math.floor(Te.start/4),ye=Math.ceil(Te.count/4),$e=we%x.width,B=Math.floor(we/x.width),de=ye,he=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,$e,B,de,he,O,X,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function Z(A,x,O){let X=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=n.TEXTURE_3D);const K=Ue(A,x),q=x.source;t.bindTexture(X,A.__webglTexture,n.TEXTURE0+O);const Me=i.get(q);if(q.version!==Me.__version||K===!0){t.activeTexture(n.TEXTURE0+O);const ae=nt.getPrimaries(nt.workingColorSpace),Ae=x.colorSpace===Ti?null:nt.getPrimaries(x.colorSpace),Fe=x.colorSpace===Ti||ae===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ne=v(x.image,!1,s.maxTextureSize);ne=ze(x,ne);const ue=r.convert(x.format,x.colorSpace),Te=r.convert(x.type);let we=M(x.internalFormat,ue,Te,x.colorSpace,x.isVideoTexture);ee(X,x);let ye;const $e=x.mipmaps,B=x.isVideoTexture!==!0,de=Me.__version===void 0||K===!0,he=q.dataReady,be=w(x,ne);if(x.isDepthTexture)we=S(x.format===ns,x.type),de&&(B?t.texStorage2D(n.TEXTURE_2D,1,we,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,we,ne.width,ne.height,0,ue,Te,null));else if(x.isDataTexture)if($e.length>0){B&&de&&t.texStorage2D(n.TEXTURE_2D,be,we,$e[0].width,$e[0].height);for(let re=0,Y=$e.length;re<Y;re++)ye=$e[re],B?he&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,ue,Te,ye.data):t.texImage2D(n.TEXTURE_2D,re,we,ye.width,ye.height,0,ue,Te,ye.data);x.generateMipmaps=!1}else B?(de&&t.texStorage2D(n.TEXTURE_2D,be,we,ne.width,ne.height),he&&Xe(x,ne,ue,Te)):t.texImage2D(n.TEXTURE_2D,0,we,ne.width,ne.height,0,ue,Te,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,we,$e[0].width,$e[0].height,ne.depth);for(let re=0,Y=$e.length;re<Y;re++)if(ye=$e[re],x.format!==Rn)if(ue!==null)if(B){if(he)if(x.layerUpdates.size>0){const Re=Ru(ye.width,ye.height,x.format,x.type);for(const He of x.layerUpdates){const mt=ye.data.subarray(He*Re/ye.data.BYTES_PER_ELEMENT,(He+1)*Re/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,He,ye.width,ye.height,1,ue,mt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,ne.depth,ue,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,we,ye.width,ye.height,ne.depth,0,ye.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?he&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,ne.depth,ue,Te,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,we,ye.width,ye.height,ne.depth,0,ue,Te,ye.data)}else{B&&de&&t.texStorage2D(n.TEXTURE_2D,be,we,$e[0].width,$e[0].height);for(let re=0,Y=$e.length;re<Y;re++)ye=$e[re],x.format!==Rn?ue!==null?B?he&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,ue,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,re,we,ye.width,ye.height,0,ye.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?he&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,ue,Te,ye.data):t.texImage2D(n.TEXTURE_2D,re,we,ye.width,ye.height,0,ue,Te,ye.data)}else if(x.isDataArrayTexture)if(B){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,we,ne.width,ne.height,ne.depth),he)if(x.layerUpdates.size>0){const re=Ru(ne.width,ne.height,x.format,x.type);for(const Y of x.layerUpdates){const Re=ne.data.subarray(Y*re/ne.data.BYTES_PER_ELEMENT,(Y+1)*re/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,ne.width,ne.height,1,ue,Te,Re)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Te,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ne.width,ne.height,ne.depth,0,ue,Te,ne.data);else if(x.isData3DTexture)B?(de&&t.texStorage3D(n.TEXTURE_3D,be,we,ne.width,ne.height,ne.depth),he&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Te,ne.data)):t.texImage3D(n.TEXTURE_3D,0,we,ne.width,ne.height,ne.depth,0,ue,Te,ne.data);else if(x.isFramebufferTexture){if(de)if(B)t.texStorage2D(n.TEXTURE_2D,be,we,ne.width,ne.height);else{let re=ne.width,Y=ne.height;for(let Re=0;Re<be;Re++)t.texImage2D(n.TEXTURE_2D,Re,we,re,Y,0,ue,Te,null),re>>=1,Y>>=1}}else if($e.length>0){if(B&&de){const re=le($e[0]);t.texStorage2D(n.TEXTURE_2D,be,we,re.width,re.height)}for(let re=0,Y=$e.length;re<Y;re++)ye=$e[re],B?he&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ue,Te,ye):t.texImage2D(n.TEXTURE_2D,re,we,ue,Te,ye);x.generateMipmaps=!1}else if(B){if(de){const re=le(ne);t.texStorage2D(n.TEXTURE_2D,be,we,re.width,re.height)}he&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Te,ne)}else t.texImage2D(n.TEXTURE_2D,0,we,ue,Te,ne);m(x)&&p(X),Me.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function oe(A,x,O){if(x.image.length!==6)return;const X=Ue(A,x),K=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);const q=i.get(K);if(K.version!==q.__version||X===!0){t.activeTexture(n.TEXTURE0+O);const Me=nt.getPrimaries(nt.workingColorSpace),ae=x.colorSpace===Ti?null:nt.getPrimaries(x.colorSpace),Ae=x.colorSpace===Ti||Me===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Fe=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let Y=0;Y<6;Y++)!Fe&&!ne?ue[Y]=v(x.image[Y],!0,s.maxCubemapSize):ue[Y]=ne?x.image[Y].image:x.image[Y],ue[Y]=ze(x,ue[Y]);const Te=ue[0],we=r.convert(x.format,x.colorSpace),ye=r.convert(x.type),$e=M(x.internalFormat,we,ye,x.colorSpace),B=x.isVideoTexture!==!0,de=q.__version===void 0||X===!0,he=K.dataReady;let be=w(x,Te);ee(n.TEXTURE_CUBE_MAP,x);let re;if(Fe){B&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,$e,Te.width,Te.height);for(let Y=0;Y<6;Y++){re=ue[Y].mipmaps;for(let Re=0;Re<re.length;Re++){const He=re[Re];x.format!==Rn?we!==null?B?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,0,0,He.width,He.height,we,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,$e,He.width,He.height,0,He.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,0,0,He.width,He.height,we,ye,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,$e,He.width,He.height,0,we,ye,He.data)}}}else{if(re=x.mipmaps,B&&de){re.length>0&&be++;const Y=le(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,$e,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ne){B?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ue[Y].width,ue[Y].height,we,ye,ue[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,$e,ue[Y].width,ue[Y].height,0,we,ye,ue[Y].data);for(let Re=0;Re<re.length;Re++){const mt=re[Re].image[Y].image;B?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,0,0,mt.width,mt.height,we,ye,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,$e,mt.width,mt.height,0,we,ye,mt.data)}}else{B?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,we,ye,ue[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,$e,we,ye,ue[Y]);for(let Re=0;Re<re.length;Re++){const He=re[Re];B?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,0,0,we,ye,He.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,$e,we,ye,He.image[Y])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),q.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ce(A,x,O,X,K,q){const Me=r.convert(O.format,O.colorSpace),ae=r.convert(O.type),Ae=M(O.internalFormat,Me,ae,O.colorSpace),Fe=i.get(x),ne=i.get(O);if(ne.__renderTarget=x,!Fe.__hasExternalTextures){const ue=Math.max(1,x.width>>q),Te=Math.max(1,x.height>>q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,q,Ae,ue,Te,x.depth,0,Me,ae,null):t.texImage2D(K,q,Ae,ue,Te,0,Me,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,K,ne.__webglTexture,0,P(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,K,ne.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(A,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const X=x.depthTexture,K=X&&X.isDepthTexture?X.type:null,q=S(x.stencilBuffer,K),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),q,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,A)}else{const X=x.textures;for(let K=0;K<X.length;K++){const q=X[K],Me=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),Ae=M(q.internalFormat,Me,ae,q.colorSpace);Ne(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),Ae,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),Ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(A,x,O){const X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ee(n.TEXTURE_CUBE_MAP,x.depthTexture);const Fe=r.convert(x.depthTexture.format),ne=r.convert(x.depthTexture.type);let ue;x.depthTexture.format===di?ue=n.DEPTH_COMPONENT24:x.depthTexture.format===ns&&(ue=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ue,x.width,x.height,0,Fe,ne,null)}}else I(x.depthTexture,0);const q=K.__webglTexture,Me=P(x),ae=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,Ae=x.depthTexture.format===ns?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===di)Ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ae,q,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ae,q,0);else if(x.depthTexture.format===ns)Ne(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,ae,q,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,ae,q,0);else throw new Error("Unknown depthTexture format")}function Be(A){const x=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let X=0;X<6;X++)Se(x.__webglFramebuffer[X],A,X);else{const X=A.texture.mipmaps;X&&X.length>0?Se(x.__webglFramebuffer[0],A,0):Se(x.__webglFramebuffer,A,0)}else if(O){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=n.createRenderbuffer(),De(x.__webglDepthbuffer[X],A,!1);else{const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}else{const X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),De(x.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(A,x,O){const X=i.get(A);x!==void 0&&ce(X.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Be(A)}function Le(A){const x=A.texture,O=i.get(A),X=i.get(x);A.addEventListener("dispose",R);const K=A.textures,q=A.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)O.__webglFramebuffer[ae][Ae]=n.createFramebuffer()}else O.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)O.__webglFramebuffer[ae]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ae=0,Ae=K.length;ae<Ae;ae++){const Fe=i.get(K[ae]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Ne(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const Ae=K[ae];O.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const Fe=r.convert(Ae.format,Ae.colorSpace),ne=r.convert(Ae.type),ue=M(Ae.internalFormat,Fe,ne,Ae.colorSpace,A.isXRRenderTarget===!0),Te=P(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ue,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),De(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ee(n.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)ce(O.__webglFramebuffer[ae][Ae],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae);else ce(O.__webglFramebuffer[ae],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,Ae=K.length;ae<Ae;ae++){const Fe=K[ae],ne=i.get(Fe);let ue=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),ee(ue,Fe),ce(O.__webglFramebuffer,A,Fe,n.COLOR_ATTACHMENT0+ae,ue,0),m(Fe)&&p(ue)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,X.__webglTexture),ee(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)ce(O.__webglFramebuffer[Ae],A,x,n.COLOR_ATTACHMENT0,ae,Ae);else ce(O.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,ae,0);m(x)&&p(ae),t.unbindTexture()}A.depthBuffer&&Be(A)}function j(A){const x=A.textures;for(let O=0,X=x.length;O<X;O++){const K=x[O];if(m(K)){const q=y(A),Me=i.get(K).__webglTexture;t.bindTexture(q,Me),p(q),t.unbindTexture()}}}const te=[],Q=[];function pe(A){if(A.samples>0){if(Ne(A)===!1){const x=A.textures,O=A.width,X=A.height;let K=n.COLOR_BUFFER_BIT;const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(A),ae=x.length>1;if(ae)for(let Fe=0;Fe<x.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Fe=0;Fe<x.length;Fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Fe]);const ne=i.get(x[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,O,X,0,0,O,X,K,n.NEAREST),c===!0&&(te.length=0,Q.length=0,te.push(n.COLOR_ATTACHMENT0+Fe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(te.push(q),Q.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Fe=0;Fe<x.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Fe]);const ne=i.get(x[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function P(A){return Math.min(s.maxSamples,A.samples)}function Ne(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ge(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function ze(A,x){const O=A.colorSpace,X=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Hs&&O!==Ti&&(nt.getTransfer(O)===lt?(X!==Rn||K!==hn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",O)),x}function le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=I,this.setTexture2DArray=z,this.setTexture3D=F,this.setTextureCube=$,this.rebindTextures=et,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ix(n,e){function t(i,s=Ti){let r;const o=nt.getTransfer(s);if(i===hn)return n.UNSIGNED_BYTE;if(i===dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qh)return n.BYTE;if(i===ef)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===fc)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===sf)return n.ALPHA;if(i===rf)return n.RGB;if(i===Rn)return n.RGBA;if(i===di)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===of)return n.RED;if(i===mc)return n.RED_INTEGER;if(i===Gs)return n.RG;if(i===_c)return n.RG_INTEGER;if(i===gc)return n.RGBA_INTEGER;if(i===wo||i===Ao||i===Ro||i===Co)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vl||i===xl||i===yl||i===Sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ml||i===El||i===bl||i===Tl||i===wl||i===Al||i===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ml||i===El)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tl)return r.COMPRESSED_R11_EAC;if(i===wl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Al)return r.COMPRESSED_RG11_EAC;if(i===Rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Cl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===zl||i===Vl||i===kl||i===Gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ll)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Il)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ul)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ol)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hl||i===Wl||i===Xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Hl)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ql||i===Yl||i===$l||i===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ql)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nx=`
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

}`;class Fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new pf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yn({vertexShader:Ux,fragmentShader:Nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ox extends qs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const v=typeof XRWebGLBinding<"u",m=new Fx,p={},y=t.getContextAttributes();let M=null,S=null;const w=[],T=[],R=new fe;let g=null;const E=new mn;E.viewport=new bt;const U=new mn;U.viewport=new bt;const C=[E,U],D=new Zm;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=w[Z];return oe===void 0&&(oe=new va,w[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=w[Z];return oe===void 0&&(oe=new va,w[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=w[Z];return oe===void 0&&(oe=new va,w[Z]=oe),oe.getHandSpace()};function I(Z){const oe=T.indexOf(Z.inputSource);if(oe===-1)return;const ce=w[oe];ce!==void 0&&(ce.update(Z.inputSource,Z.frame,l||o),ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",F);for(let Z=0;Z<w.length;Z++){const oe=T[Z];oe!==null&&(T[Z]=null,w[Z].disconnect(oe))}L=null,N=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(M),d=null,f=null,h=null,s=null,S=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",z),s.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,De=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=y.stencil?ns:di,De=y.stencil?Rr:Xn);const Be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Be),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new kn(f.textureWidth,f.textureHeight,{format:Rn,type:hn,depthTexture:new Pr(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new kn(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(Z){for(let oe=0;oe<Z.removed.length;oe++){const ce=Z.removed[oe],De=T.indexOf(ce);De>=0&&(T[De]=null,w[De].disconnect(ce))}for(let oe=0;oe<Z.added.length;oe++){const ce=Z.added[oe];let De=T.indexOf(ce);if(De===-1){for(let Be=0;Be<w.length;Be++)if(Be>=T.length){T.push(ce),De=Be;break}else if(T[Be]===null){T[Be]=ce,De=Be;break}if(De===-1)break}const Se=w[De];Se&&Se.connect(ce)}}const $=new V,J=new V;function ie(Z,oe,ce){$.setFromMatrixPosition(oe.matrixWorld),J.setFromMatrixPosition(ce.matrixWorld);const De=$.distanceTo(J),Se=oe.projectionMatrix.elements,Be=ce.projectionMatrix.elements,et=Se[14]/(Se[10]-1),Le=Se[14]/(Se[10]+1),j=(Se[9]+1)/Se[5],te=(Se[9]-1)/Se[5],Q=(Se[8]-1)/Se[0],pe=(Be[8]+1)/Be[0],P=et*Q,Ne=et*pe,ge=De/(-Q+pe),ze=ge*-Q;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ze),Z.translateZ(ge),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Se[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const le=et+ge,A=Le+ge,x=P-ze,O=Ne+(De-ze),X=j*Le/A*le,K=te*Le/A*le;Z.projectionMatrix.makePerspective(x,O,X,K,le,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let oe=Z.near,ce=Z.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),D.near=U.near=E.near=oe,D.far=U.far=E.far=ce,(L!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,N=D.far),D.layers.mask=Z.layers.mask|6,E.layers.mask=D.layers.mask&-5,U.layers.mask=D.layers.mask&-3;const De=Z.parent,Se=D.cameras;se(D,De);for(let Be=0;Be<Se.length;Be++)se(Se[Be],De);Se.length===2?ie(D,E,U):D.projectionMatrix.copy(E.projectionMatrix),ee(Z,D,De)};function ee(Z,oe,ce){ce===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Jl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Z){return p[Z]};let Ue=null;function We(Z,oe){if(u=oe.getViewerPose(l||o),_=oe,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let De=!1;ce.length!==D.cameras.length&&(D.cameras.length=0,De=!0);for(let Le=0;Le<ce.length;Le++){const j=ce[Le];let te=null;if(d!==null)te=d.getViewport(j);else{const pe=h.getViewSubImage(f,j);te=pe.viewport,Le===0&&(e.setRenderTargetTextures(S,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(S))}let Q=C[Le];Q===void 0&&(Q=new mn,Q.layers.enable(Le),Q.viewport=new bt,C[Le]=Q),Q.matrix.fromArray(j.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(j.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(te.x,te.y,te.width,te.height),Le===0&&(D.matrix.copy(Q.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),De===!0&&D.cameras.push(Q)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const Le=h.getDepthInformation(ce[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,s.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let Le=0;Le<ce.length;Le++){const j=ce[Le].camera;if(j){let te=p[j];te||(te=new pf,p[j]=te);const Q=h.getCameraImage(j);te.sourceTexture=Q}}}}for(let ce=0;ce<w.length;ce++){const De=T[ce],Se=w[ce];De!==null&&Se!==void 0&&Se.update(De,oe,l||o)}Ue&&Ue(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),_=null}const Xe=new Af;Xe.setAnimationLoop(We),this.setAnimationLoop=function(Z){Ue=Z},this.dispose=function(){}}}const Wi=new qn,Bx=new St;function zx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,S){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,S=y.envMapRotation;M&&(m.envMap.value=M,Wi.copy(S),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(Wi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const S=M.program;i.uniformBlockBinding(y,S)}function l(y,M){let S=s[y.id];S===void 0&&(_(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",m));const w=M.program;i.updateUBOMapping(y,w);const T=e.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function u(y){const M=h();y.__bindingPointIndex=M;const S=n.createBuffer(),w=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=s[y.id],S=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,R=S.length;T<R;T++){const g=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,U=g.length;E<U;E++){const C=g[E];if(d(C,T,E,w)===!0){const D=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let I=0;I<L.length;I++){const z=L[I],F=v(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,D+N,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,N),N+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,M,S,w){const T=y.value,R=M+"_"+S;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:w[R]=T.clone(),!0;{const g=w[R];if(typeof T=="number"||typeof T=="boolean"){if(g!==T)return w[R]=T,!0}else if(g.equals(T)===!1)return g.copy(T),!0}return!1}function _(y){const M=y.uniforms;let S=0;const w=16;for(let R=0,g=M.length;R<g;R++){const E=Array.isArray(M[R])?M[R]:[M[R]];for(let U=0,C=E.length;U<C;U++){const D=E[U],L=Array.isArray(D.value)?D.value:[D.value];for(let N=0,I=L.length;N<I;N++){const z=L[N],F=v(z),$=S%w,J=$%F.boundary,ie=$+J;S+=J,ie!==0&&w-ie<F.storage&&(S+=w-ie),D.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=F.storage}}}const T=S%w;return T>0&&(S+=w-T),y.__size=S,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ge("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}const kx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function Gx(){return In===null&&(In=new Kp(kx,16,16,Gs,fi),In.name="DFG_LUT",In.minFilter=Yt,In.magFilter=Yt,In.wrapS=ii,In.wrapT=ii,In.generateMipmaps=!1,In.needsUpdate=!0),In}class Hx{constructor(e={}){const{canvas:t=Rp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=hn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const v=d,m=new Set([gc,_c,mc]),p=new Set([hn,Xn,Ar,Rr,dc,pc]),y=new Uint32Array(4),M=new Int32Array(4);let S=null,w=null;const T=[],R=[];let g=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let U=!1;this._outputColorSpace=pn;let C=0,D=0,L=null,N=-1,I=null;const z=new bt,F=new bt;let $=null;const J=new ot(0);let ie=0,se=t.width,ee=t.height,Ue=1,We=null,Xe=null;const Z=new bt(0,0,se,ee),oe=new bt(0,0,se,ee);let ce=!1;const De=new Ec;let Se=!1,Be=!1;const et=new St,Le=new V,j=new bt,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function pe(){return L===null?Ue:1}let P=i;function Ne(b,k){return t.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hc}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",mt,!1),P===null){const k="webgl2";if(P=Ne(k,b),P===null)throw Ne(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw tt("WebGLRenderer: "+b.message),b}let ge,ze,le,A,x,O,X,K,q,Me,ae,Ae,Fe,ne,ue,Te,we,ye,$e,B,de,he,be;function re(){ge=new H0(P),ge.init(),de=new Ix(P,ge),ze=new N0(P,ge,e,de),le=new Dx(P,ge),ze.reversedDepthBuffer&&f&&le.buffers.depth.setReversed(!0),A=new q0(P),x=new gx,O=new Lx(P,ge,le,x,ze,de,A),X=new G0(E),K=new jm(P),he=new I0(P,K),q=new W0(P,K,A,he),Me=new $0(P,q,K,he,A),ye=new Y0(P,ze,O),ue=new F0(x),ae=new _x(E,X,ge,ze,he,ue),Ae=new zx(E,x),Fe=new xx,ne=new Tx(ge),we=new L0(E,X,le,Me,_,c),Te=new Px(E,Me,ze),be=new Vx(P,A,ze,le),$e=new U0(P,ge,A),B=new X0(P,ge,A),A.programs=ae.programs,E.capabilities=ze,E.extensions=ge,E.properties=x,E.renderLists=Fe,E.shadowMap=Te,E.state=le,E.info=A}re(),v!==hn&&(g=new J0(v,t.width,t.height,s,r));const Y=new Ox(E,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(b){b!==void 0&&(Ue=b,this.setSize(se,ee,!1))},this.getSize=function(b){return b.set(se,ee)},this.setSize=function(b,k,W=!0){if(Y.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}se=b,ee=k,t.width=Math.floor(b*Ue),t.height=Math.floor(k*Ue),W===!0&&(t.style.width=b+"px",t.style.height=k+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(se*Ue,ee*Ue).floor()},this.setDrawingBufferSize=function(b,k,W){se=b,ee=k,Ue=W,t.width=Math.floor(b*W),t.height=Math.floor(k*W),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(v===hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,k,W,H){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,k,W,H),le.viewport(z.copy(Z).multiplyScalar(Ue).round())},this.getScissor=function(b){return b.copy(oe)},this.setScissor=function(b,k,W,H){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,k,W,H),le.scissor(F.copy(oe).multiplyScalar(Ue).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){le.setScissorTest(ce=b)},this.setOpaqueSort=function(b){We=b},this.setTransparentSort=function(b){Xe=b},this.getClearColor=function(b){return b.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,W=!0){let H=0;if(b){let G=!1;if(L!==null){const ve=L.texture.format;G=m.has(ve)}if(G){const ve=L.texture.type,Ee=p.has(ve),xe=we.getClearColor(),Ce=we.getClearAlpha(),Ie=xe.r,qe=xe.g,Je=xe.b;Ee?(y[0]=Ie,y[1]=qe,y[2]=Je,y[3]=Ce,P.clearBufferuiv(P.COLOR,0,y)):(M[0]=Ie,M[1]=qe,M[2]=Je,M[3]=Ce,P.clearBufferiv(P.COLOR,0,M))}else H|=P.COLOR_BUFFER_BIT}k&&(H|=P.DEPTH_BUFFER_BIT),W&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),we.dispose(),Fe.dispose(),ne.dispose(),x.dispose(),X.dispose(),Me.dispose(),he.dispose(),be.dispose(),ae.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Pc),Y.removeEventListener("sessionend",Dc),Oi.stop()};function Re(b){b.preventDefault(),ru("WebGLRenderer: Context Lost."),U=!0}function He(){ru("WebGLRenderer: Context Restored."),U=!1;const b=A.autoReset,k=Te.enabled,W=Te.autoUpdate,H=Te.needsUpdate,G=Te.type;re(),A.autoReset=b,Te.enabled=k,Te.autoUpdate=W,Te.needsUpdate=H,Te.type=G}function mt(b){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function at(b){const k=b.target;k.removeEventListener("dispose",at),Zn(k)}function Zn(b){Jn(b),x.remove(b)}function Jn(b){const k=x.get(b).programs;k!==void 0&&(k.forEach(function(W){ae.releaseProgram(W)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,W,H,G,ve){k===null&&(k=te);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,xe=ed(b,k,W,H,G);le.setMaterial(H,Ee);let Ce=W.index,Ie=1;if(H.wireframe===!0){if(Ce=q.getWireframeAttribute(W),Ce===void 0)return;Ie=2}const qe=W.drawRange,Je=W.attributes.position;let Oe=qe.start*Ie,ct=(qe.start+qe.count)*Ie;ve!==null&&(Oe=Math.max(Oe,ve.start*Ie),ct=Math.min(ct,(ve.start+ve.count)*Ie)),Ce!==null?(Oe=Math.max(Oe,0),ct=Math.min(ct,Ce.count)):Je!=null&&(Oe=Math.max(Oe,0),ct=Math.min(ct,Je.count));const wt=ct-Oe;if(wt<0||wt===1/0)return;he.setup(G,H,xe,W,Ce);let Mt,ut=$e;if(Ce!==null&&(Mt=K.get(Ce),ut=B,ut.setIndex(Mt)),G.isMesh)H.wireframe===!0?(le.setLineWidth(H.wireframeLinewidth*pe()),ut.setMode(P.LINES)):ut.setMode(P.TRIANGLES);else if(G.isLine){let Wt=H.linewidth;Wt===void 0&&(Wt=1),le.setLineWidth(Wt*pe()),G.isLineSegments?ut.setMode(P.LINES):G.isLineLoop?ut.setMode(P.LINE_LOOP):ut.setMode(P.LINE_STRIP)}else G.isPoints?ut.setMode(P.POINTS):G.isSprite&&ut.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Go("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Wt=G._multiDrawStarts,Pe=G._multiDrawCounts,rn=G._multiDrawCount,it=Ce?K.get(Ce).bytesPerElement:1,xn=x.get(H).currentProgram.getUniforms();for(let Dn=0;Dn<rn;Dn++)xn.setValue(P,"_gl_DrawID",Dn),ut.render(Wt[Dn]/it,Pe[Dn])}else if(G.isInstancedMesh)ut.renderInstances(Oe,wt,G.count);else if(W.isInstancedBufferGeometry){const Wt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pe=Math.min(W.instanceCount,Wt);ut.renderInstances(Oe,wt,Pe)}else ut.render(Oe,wt)};function Cc(b,k,W){b.transparent===!0&&b.side===ni&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,kr(b,k,W),b.side=Li,b.needsUpdate=!0,kr(b,k,W),b.side=ni):kr(b,k,W)}this.compile=function(b,k,W=null){W===null&&(W=b),w=ne.get(W),w.init(k),R.push(w),W.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),b!==W&&b.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const xe=ve[Ee];Cc(xe,W,G),H.add(xe)}else Cc(ve,W,G),H.add(ve)}),w=R.pop(),H},this.compileAsync=function(b,k,W=null){const H=this.compile(b,k,W);return new Promise(G=>{function ve(){if(H.forEach(function(Ee){x.get(Ee).currentProgram.isReady()&&H.delete(Ee)}),H.size===0){G(b);return}setTimeout(ve,10)}ge.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let na=null;function Qf(b){na&&na(b)}function Pc(){Oi.stop()}function Dc(){Oi.start()}const Oi=new Af;Oi.setAnimationLoop(Qf),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(b){na=b,Y.setAnimationLoop(b),b===null?Oi.stop():Oi.start()},Y.addEventListener("sessionstart",Pc),Y.addEventListener("sessionend",Dc),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const W=Y.enabled===!0&&Y.isPresenting===!0,H=g!==null&&(L===null||W)&&g.begin(E,L);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,k,L),w=ne.get(b,R.length),w.init(k),R.push(w),et.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),De.setFromProjectionMatrix(et,Bn,k.reversedDepth),Be=this.localClippingEnabled,Se=ue.init(this.clippingPlanes,Be),S=Fe.get(b,T.length),S.init(),T.push(S),Y.enabled===!0&&Y.isPresenting===!0){const Ee=E.xr.getDepthSensingMesh();Ee!==null&&ia(Ee,k,-1/0,E.sortObjects)}ia(b,k,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(We,Xe),Q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Q&&we.addToRenderList(S,b),this.info.render.frame++,Se===!0&&ue.beginShadows();const G=w.state.shadowsArray;if(Te.render(G,b,k),Se===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&g.hasRenderPass())===!1){const Ee=S.opaque,xe=S.transmissive;if(w.setupLights(),k.isArrayCamera){const Ce=k.cameras;if(xe.length>0)for(let Ie=0,qe=Ce.length;Ie<qe;Ie++){const Je=Ce[Ie];Ic(Ee,xe,b,Je)}Q&&we.render(b);for(let Ie=0,qe=Ce.length;Ie<qe;Ie++){const Je=Ce[Ie];Lc(S,b,Je,Je.viewport)}}else xe.length>0&&Ic(Ee,xe,b,k),Q&&we.render(b),Lc(S,b,k)}L!==null&&D===0&&(O.updateMultisampleRenderTarget(L),O.updateRenderTargetMipmap(L)),H&&g.end(E),b.isScene===!0&&b.onAfterRender(E,b,k),he.resetDefaultState(),N=-1,I=null,R.pop(),R.length>0?(w=R[R.length-1],Se===!0&&ue.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function ia(b,k,W,H){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||De.intersectsSprite(b)){H&&j.setFromMatrixPosition(b.matrixWorld).applyMatrix4(et);const Ee=Me.update(b),xe=b.material;xe.visible&&S.push(b,Ee,xe,W,j.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||De.intersectsObject(b))){const Ee=Me.update(b),xe=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),j.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),j.copy(Ee.boundingSphere.center)),j.applyMatrix4(b.matrixWorld).applyMatrix4(et)),Array.isArray(xe)){const Ce=Ee.groups;for(let Ie=0,qe=Ce.length;Ie<qe;Ie++){const Je=Ce[Ie],Oe=xe[Je.materialIndex];Oe&&Oe.visible&&S.push(b,Ee,Oe,W,j.z,Je)}}else xe.visible&&S.push(b,Ee,xe,W,j.z,null)}}const ve=b.children;for(let Ee=0,xe=ve.length;Ee<xe;Ee++)ia(ve[Ee],k,W,H)}function Lc(b,k,W,H){const{opaque:G,transmissive:ve,transparent:Ee}=b;w.setupLightsView(W),Se===!0&&ue.setGlobalState(E.clippingPlanes,W),H&&le.viewport(z.copy(H)),G.length>0&&Vr(G,k,W),ve.length>0&&Vr(ve,k,W),Ee.length>0&&Vr(Ee,k,W),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ic(b,k,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Oe=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new kn(1,1,{generateMipmaps:!0,type:Oe?fi:hn,minFilter:ts,samples:Math.max(4,ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const ve=w.state.transmissionRenderTarget[H.id],Ee=H.viewport||z;ve.setSize(Ee.z*E.transmissionResolutionScale,Ee.w*E.transmissionResolutionScale);const xe=E.getRenderTarget(),Ce=E.getActiveCubeFace(),Ie=E.getActiveMipmapLevel();E.setRenderTarget(ve),E.getClearColor(J),ie=E.getClearAlpha(),ie<1&&E.setClearColor(16777215,.5),E.clear(),Q&&we.render(W);const qe=E.toneMapping;E.toneMapping=Vn;const Je=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Se===!0&&ue.setGlobalState(E.clippingPlanes,H),Vr(b,W,H),O.updateMultisampleRenderTarget(ve),O.updateRenderTargetMipmap(ve),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ct=0,wt=k.length;ct<wt;ct++){const Mt=k[ct],{object:ut,geometry:Wt,material:Pe,group:rn}=Mt;if(Pe.side===ni&&ut.layers.test(H.layers)){const it=Pe.side;Pe.side=sn,Pe.needsUpdate=!0,Uc(ut,W,H,Wt,Pe,rn),Pe.side=it,Pe.needsUpdate=!0,Oe=!0}}Oe===!0&&(O.updateMultisampleRenderTarget(ve),O.updateRenderTargetMipmap(ve))}E.setRenderTarget(xe,Ce,Ie),E.setClearColor(J,ie),Je!==void 0&&(H.viewport=Je),E.toneMapping=qe}function Vr(b,k,W){const H=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ve=b.length;G<ve;G++){const Ee=b[G],{object:xe,geometry:Ce,group:Ie}=Ee;let qe=Ee.material;qe.allowOverride===!0&&H!==null&&(qe=H),xe.layers.test(W.layers)&&Uc(xe,k,W,Ce,qe,Ie)}}function Uc(b,k,W,H,G,ve){b.onBeforeRender(E,k,W,H,G,ve),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(E,k,W,H,b,ve),G.transparent===!0&&G.side===ni&&G.forceSinglePass===!1?(G.side=sn,G.needsUpdate=!0,E.renderBufferDirect(W,k,H,G,b,ve),G.side=Li,G.needsUpdate=!0,E.renderBufferDirect(W,k,H,G,b,ve),G.side=ni):E.renderBufferDirect(W,k,H,G,b,ve),b.onAfterRender(E,k,W,H,G,ve)}function kr(b,k,W){k.isScene!==!0&&(k=te);const H=x.get(b),G=w.state.lights,ve=w.state.shadowsArray,Ee=G.state.version,xe=ae.getParameters(b,G.state,ve,k,W),Ce=ae.getProgramCacheKey(xe);let Ie=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,H.fog=k.fog;const qe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=X.get(b.envMap||H.environment,qe),H.envMapRotation=H.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Ie===void 0&&(b.addEventListener("dispose",at),Ie=new Map,H.programs=Ie);let Je=Ie.get(Ce);if(Je!==void 0){if(H.currentProgram===Je&&H.lightsStateVersion===Ee)return Fc(b,xe),Je}else xe.uniforms=ae.getUniforms(b),b.onBeforeCompile(xe,E),Je=ae.acquireProgram(xe,Ce),Ie.set(Ce,Je),H.uniforms=xe.uniforms;const Oe=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=ue.uniform),Fc(b,xe),H.needsLights=nd(b),H.lightsStateVersion=Ee,H.needsLights&&(Oe.ambientLightColor.value=G.state.ambient,Oe.lightProbe.value=G.state.probe,Oe.directionalLights.value=G.state.directional,Oe.directionalLightShadows.value=G.state.directionalShadow,Oe.spotLights.value=G.state.spot,Oe.spotLightShadows.value=G.state.spotShadow,Oe.rectAreaLights.value=G.state.rectArea,Oe.ltc_1.value=G.state.rectAreaLTC1,Oe.ltc_2.value=G.state.rectAreaLTC2,Oe.pointLights.value=G.state.point,Oe.pointLightShadows.value=G.state.pointShadow,Oe.hemisphereLights.value=G.state.hemi,Oe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Oe.spotLightMatrix.value=G.state.spotLightMatrix,Oe.spotLightMap.value=G.state.spotLightMap,Oe.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=Je,H.uniformsList=null,Je}function Nc(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Po.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Fc(b,k){const W=x.get(b);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function ed(b,k,W,H,G){k.isScene!==!0&&(k=te),O.resetTextureUnits();const ve=k.fog,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?k.environment:null,xe=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Hs,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ie=X.get(H.envMap||Ee,Ce),qe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Je=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Oe=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,wt=!!W.morphAttributes.color;let Mt=Vn;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Mt=E.toneMapping);const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Wt=ut!==void 0?ut.length:0,Pe=x.get(H),rn=w.state.lights;if(Se===!0&&(Be===!0||b!==I)){const Ut=b===I&&H.id===N;ue.setState(H,b,Ut)}let it=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==rn.state.version||Pe.outputColorSpace!==xe||G.isBatchedMesh&&Pe.batching===!1||!G.isBatchedMesh&&Pe.batching===!0||G.isBatchedMesh&&Pe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Pe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Pe.instancing===!1||!G.isInstancedMesh&&Pe.instancing===!0||G.isSkinnedMesh&&Pe.skinning===!1||!G.isSkinnedMesh&&Pe.skinning===!0||G.isInstancedMesh&&Pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pe.instancingMorph===!1&&G.morphTexture!==null||Pe.envMap!==Ie||H.fog===!0&&Pe.fog!==ve||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ue.numPlanes||Pe.numIntersection!==ue.numIntersection)||Pe.vertexAlphas!==qe||Pe.vertexTangents!==Je||Pe.morphTargets!==Oe||Pe.morphNormals!==ct||Pe.morphColors!==wt||Pe.toneMapping!==Mt||Pe.morphTargetsCount!==Wt)&&(it=!0):(it=!0,Pe.__version=H.version);let xn=Pe.currentProgram;it===!0&&(xn=kr(H,k,G));let Dn=!1,Bi=!1,us=!1;const ft=xn.getUniforms(),kt=Pe.uniforms;if(le.useProgram(xn.program)&&(Dn=!0,Bi=!0,us=!0),H.id!==N&&(N=H.id,Bi=!0),Dn||I!==b){le.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(P,"projectionMatrix",b.projectionMatrix),ft.setValue(P,"viewMatrix",b.matrixWorldInverse);const _i=ft.map.cameraPosition;_i!==void 0&&_i.setValue(P,Le.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),I!==b&&(I=b,Bi=!0,us=!0)}if(Pe.needsLights&&(rn.state.directionalShadowMap.length>0&&ft.setValue(P,"directionalShadowMap",rn.state.directionalShadowMap,O),rn.state.spotShadowMap.length>0&&ft.setValue(P,"spotShadowMap",rn.state.spotShadowMap,O),rn.state.pointShadowMap.length>0&&ft.setValue(P,"pointShadowMap",rn.state.pointShadowMap,O)),G.isSkinnedMesh){ft.setOptional(P,G,"bindMatrix"),ft.setOptional(P,G,"bindMatrixInverse");const Ut=G.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ft.setValue(P,"boneTexture",Ut.boneTexture,O))}G.isBatchedMesh&&(ft.setOptional(P,G,"batchingTexture"),ft.setValue(P,"batchingTexture",G._matricesTexture,O),ft.setOptional(P,G,"batchingIdTexture"),ft.setValue(P,"batchingIdTexture",G._indirectTexture,O),ft.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&ft.setValue(P,"batchingColorTexture",G._colorsTexture,O));const mi=W.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&ye.update(G,W,xn),(Bi||Pe.receiveShadow!==G.receiveShadow)&&(Pe.receiveShadow=G.receiveShadow,ft.setValue(P,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&k.environment!==null&&(kt.envMapIntensity.value=k.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=Gx()),Bi&&(ft.setValue(P,"toneMappingExposure",E.toneMappingExposure),Pe.needsLights&&td(kt,us),ve&&H.fog===!0&&Ae.refreshFogUniforms(kt,ve),Ae.refreshMaterialUniforms(kt,H,Ue,ee,w.state.transmissionRenderTarget[b.id]),Po.upload(P,Nc(Pe),kt,O)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Po.upload(P,Nc(Pe),kt,O),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(P,"center",G.center),ft.setValue(P,"modelViewMatrix",G.modelViewMatrix),ft.setValue(P,"normalMatrix",G.normalMatrix),ft.setValue(P,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ut=H.uniformsGroups;for(let _i=0,hs=Ut.length;_i<hs;_i++){const Oc=Ut[_i];be.update(Oc,xn),be.bind(Oc,xn)}}return xn}function td(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function nd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,k,W){const H=x.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=k,x.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const W=x.get(b);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const id=P.createFramebuffer();this.setRenderTarget=function(b,k=0,W=0){L=b,C=k,D=W;let H=null,G=!1,ve=!1;if(b){const xe=x.get(b);if(xe.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(P.FRAMEBUFFER,xe.__webglFramebuffer),z.copy(b.viewport),F.copy(b.scissor),$=b.scissorTest,le.viewport(z),le.scissor(F),le.setScissorTest($),N=-1;return}else if(xe.__webglFramebuffer===void 0)O.setupRenderTarget(b);else if(xe.__hasExternalTextures)O.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const qe=b.depthTexture;if(xe.__boundDepthTexture!==qe){if(qe!==null&&x.has(qe)&&(b.width!==qe.image.width||b.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(b)}}const Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ve=!0);const Ie=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?H=Ie[k][W]:H=Ie[k],G=!0):b.samples>0&&O.useMultisampledRTT(b)===!1?H=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?H=Ie[W]:H=Ie,z.copy(b.viewport),F.copy(b.scissor),$=b.scissorTest}else z.copy(Z).multiplyScalar(Ue).floor(),F.copy(oe).multiplyScalar(Ue).floor(),$=ce;if(W!==0&&(H=id),le.bindFramebuffer(P.FRAMEBUFFER,H)&&le.drawBuffers(b,H),le.viewport(z),le.scissor(F),le.setScissorTest($),G){const xe=x.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,xe.__webglTexture,W)}else if(ve){const xe=k;for(let Ce=0;Ce<b.textures.length;Ce++){const Ie=x.get(b.textures[Ce]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ce,Ie.__webglTexture,W,xe)}}else if(b!==null&&W!==0){const xe=x.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,W)}N=-1},this.readRenderTargetPixels=function(b,k,W,H,G,ve,Ee,xe=0){if(!(b&&b.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){le.bindFramebuffer(P.FRAMEBUFFER,Ce);try{const Ie=b.textures[xe],qe=Ie.format,Je=Ie.type;if(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),!ze.textureFormatReadable(qe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Je)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-H&&W>=0&&W<=b.height-G&&P.readPixels(k,W,H,G,de.convert(qe),de.convert(Je),ve)}finally{const Ie=L!==null?x.get(L).__webglFramebuffer:null;le.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(b,k,W,H,G,ve,Ee,xe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce)if(k>=0&&k<=b.width-H&&W>=0&&W<=b.height-G){le.bindFramebuffer(P.FRAMEBUFFER,Ce);const Ie=b.textures[xe],qe=Ie.format,Je=Ie.type;if(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),!ze.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Oe),P.bufferData(P.PIXEL_PACK_BUFFER,ve.byteLength,P.STREAM_READ),P.readPixels(k,W,H,G,de.convert(qe),de.convert(Je),0);const ct=L!==null?x.get(L).__webglFramebuffer:null;le.bindFramebuffer(P.FRAMEBUFFER,ct);const wt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Cp(P,wt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Oe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ve),P.deleteBuffer(Oe),P.deleteSync(wt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,W=0){const H=Math.pow(2,-W),G=Math.floor(b.image.width*H),ve=Math.floor(b.image.height*H),Ee=k!==null?k.x:0,xe=k!==null?k.y:0;O.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,Ee,xe,G,ve),le.unbindTexture()};const sd=P.createFramebuffer(),rd=P.createFramebuffer();this.copyTextureToTexture=function(b,k,W=null,H=null,G=0,ve=0){let Ee,xe,Ce,Ie,qe,Je,Oe,ct,wt;const Mt=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(W!==null)Ee=W.max.x-W.min.x,xe=W.max.y-W.min.y,Ce=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,qe=W.min.y,Je=W.isBox3?W.min.z:0;else{const kt=Math.pow(2,-G);Ee=Math.floor(Mt.width*kt),xe=Math.floor(Mt.height*kt),b.isDataArrayTexture?Ce=Mt.depth:b.isData3DTexture?Ce=Math.floor(Mt.depth*kt):Ce=1,Ie=0,qe=0,Je=0}H!==null?(Oe=H.x,ct=H.y,wt=H.z):(Oe=0,ct=0,wt=0);const ut=de.convert(k.format),Wt=de.convert(k.type);let Pe;k.isData3DTexture?(O.setTexture3D(k,0),Pe=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(O.setTexture2DArray(k,0),Pe=P.TEXTURE_2D_ARRAY):(O.setTexture2D(k,0),Pe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const rn=P.getParameter(P.UNPACK_ROW_LENGTH),it=P.getParameter(P.UNPACK_IMAGE_HEIGHT),xn=P.getParameter(P.UNPACK_SKIP_PIXELS),Dn=P.getParameter(P.UNPACK_SKIP_ROWS),Bi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ie),P.pixelStorei(P.UNPACK_SKIP_ROWS,qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Je);const us=b.isDataArrayTexture||b.isData3DTexture,ft=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const kt=x.get(b),mi=x.get(k),Ut=x.get(kt.__renderTarget),_i=x.get(mi.__renderTarget);le.bindFramebuffer(P.READ_FRAMEBUFFER,Ut.__webglFramebuffer),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let hs=0;hs<Ce;hs++)us&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(b).__webglTexture,G,Je+hs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(k).__webglTexture,ve,wt+hs)),P.blitFramebuffer(Ie,qe,Ee,xe,Oe,ct,Ee,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);le.bindFramebuffer(P.READ_FRAMEBUFFER,null),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||x.has(b)){const kt=x.get(b),mi=x.get(k);le.bindFramebuffer(P.READ_FRAMEBUFFER,sd),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,rd);for(let Ut=0;Ut<Ce;Ut++)us?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,G,Je+Ut):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,kt.__webglTexture,G),ft?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mi.__webglTexture,ve,wt+Ut):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mi.__webglTexture,ve),G!==0?P.blitFramebuffer(Ie,qe,Ee,xe,Oe,ct,Ee,xe,P.COLOR_BUFFER_BIT,P.NEAREST):ft?P.copyTexSubImage3D(Pe,ve,Oe,ct,wt+Ut,Ie,qe,Ee,xe):P.copyTexSubImage2D(Pe,ve,Oe,ct,Ie,qe,Ee,xe);le.bindFramebuffer(P.READ_FRAMEBUFFER,null),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Pe,ve,Oe,ct,wt,Ee,xe,Ce,ut,Wt,Mt.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,ve,Oe,ct,wt,Ee,xe,Ce,ut,Mt.data):P.texSubImage3D(Pe,ve,Oe,ct,wt,Ee,xe,Ce,ut,Wt,Mt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ve,Oe,ct,Ee,xe,ut,Wt,Mt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ve,Oe,ct,Mt.width,Mt.height,ut,Mt.data):P.texSubImage2D(P.TEXTURE_2D,ve,Oe,ct,Ee,xe,ut,Wt,Mt);P.pixelStorei(P.UNPACK_ROW_LENGTH,rn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,it),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Dn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Bi),ve===0&&k.generateMipmaps&&P.generateMipmap(Pe),le.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&O.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?O.setTextureCube(b,0):b.isData3DTexture?O.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?O.setTexture2DArray(b,0):O.setTexture2D(b,0),le.unbindTexture()},this.resetState=function(){C=0,D=0,L=null,le.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}var Wx=Ui('<div style=position:absolute;user-select:none;touch-action:none><div style="position:absolute;transform:translate(-50%, -50%);border:5px solid rgba(255,255,255,0.5)"><div style=position:absolute;transform:translate(-50%,-50%);background-color:rgba(255,255,255,0.5)>');function Xx(n){let e=rt(n.position),t=rt(typeof n.hitAreaSize=="function"?n.hitAreaSize():n.hitAreaSize),i=rt(n.outerRingSize),s=rt(n.knobSize),r=rt(),o=Ft(()=>{let c=r[0]();return c==null?new fe:new fe().copy(c).multiplyScalar(1/i[0]())});return{position:e,hitAreaSize:t,outerRingSize:i,knobSize:s,dragOffset:r,value:o,UI:()=>{let[c,l]=rt(!1),[u,h]=rt(),[f,d]=r,[_,v]=rt(),m,p=S=>{let w=_();if(w==null)return;m=S.pointerId,w.setPointerCapture(m);let T=w.getBoundingClientRect();h(new fe(S.clientX-T.left,S.clientY-T.top)),d(new fe)},y=S=>{let w=_();if(w==null)return;let T=u();if(T==null)return;w.setPointerCapture(S.pointerId);let R=w.getBoundingClientRect(),g=new fe(S.clientX-R.left-T.x,S.clientY-R.top-T.y),E=g.length();E>.5*i[0]()&&g.multiplyScalar(.5*i[0]()/E),d(g)},M=S=>{_()!=null&&m!=null&&(h(void 0),d(void 0))};return(()=>{var S=Wx(),w=S.firstChild,T=w.firstChild;S.$$contextmenu=g=>g.preventDefault(),S.$$pointerup=M,S.$$pointermove=y,S.$$pointerdown=p;var R=v;return typeof R=="function"||Array.isArray(R)?uc(()=>R,S):v=S,ss(()=>({e:`${e[0]().x}px`,t:`${e[0]().y}px`,a:`${t[0]()}px`,o:`${t[0]()}px`,i:`${u()?.x??.5*t[0]()}px`,n:`${u()?.y??.5*t[0]()}px`,s:`${i[0]()}px`,h:`${i[0]()}px`,r:`${.5*i[0]()+2.5}px`,d:`${.5*i[0]()+(f()?.x??0)}px`,l:`${.5*i[0]()+(f()?.y??0)}px`,u:`${s[0]()}px`,c:`${s[0]()}px`,w:`${.5*s[0]()}px`}),({e:g,t:E,a:U,o:C,i:D,n:L,s:N,h:I,r:z,d:F,l:$,u:J,c:ie,w:se},ee)=>{g!==ee.e&&gt(S,"left",g),E!==ee.t&&gt(S,"top",E),U!==ee.a&&gt(S,"width",U),C!==ee.o&&gt(S,"height",C),D!==ee.i&&gt(w,"left",D),L!==ee.n&&gt(w,"top",L),N!==ee.s&&gt(w,"width",N),I!==ee.h&&gt(w,"height",I),z!==ee.r&&gt(w,"border-radius",z),F!==ee.d&&gt(T,"left",F),$!==ee.l&&gt(T,"top",$),J!==ee.u&&gt(T,"width",J),ie!==ee.c&&gt(T,"height",ie),se!==ee.w&&gt(T,"border-radius",se)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0}),S})()}}}cc(["pointerdown","pointermove","pointerup","contextmenu"]);var qx=Ui("<div style=position:absolute;user-select:none;touch-action:none>");const Yx=1;function $x(n){const[e,t]=rt(!1),[i,s]=rt(0),[r,o]=rt(!1),[a,c]=rt(0),[l,u]=rt(!1),h=n.externalPressed||(()=>!1);let f,d=!1;const _=()=>{f||(f=window.setInterval(()=>{c(T=>T+1)},50))},v=()=>{f&&(clearInterval(f),f=void 0)};Ot(()=>v()),requestAnimationFrame(function T(){const R=h();R&&!d&&(s(performance.now()),_()),!R&&d&&u(!0),d=R,requestAnimationFrame(T)});const m=()=>e()||h(),p=Ft(()=>{a();const T=m(),R=i();if(!T)return 0;const g=(performance.now()-R)/1e3;return Math.min(g/Yx,1)}),y=T=>{T.currentTarget.setPointerCapture(T.pointerId),t(!0),s(performance.now()),_()},M=T=>{t(!1),v(),o(!0)},S=T=>{e()&&(t(!1),v(),o(!0))},w=()=>(()=>{var T=qx();return T.$$contextmenu=R=>R.preventDefault(),T.addEventListener("pointerleave",S),T.$$pointerup=M,T.$$pointerdown=y,ss(()=>({e:`${n.position().x}px`,t:`${n.position().y}px`,a:`${n.size()}px`,o:`${n.size()}px`,i:`${.5*n.size()}px`,n:m()?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.5)"}),({e:R,t:g,a:E,o:U,i:C,n:D},L)=>{R!==L.e&&gt(T,"left",R),g!==L.t&&gt(T,"top",g),E!==L.a&&gt(T,"width",E),U!==L.o&&gt(T,"height",U),C!==L.i&&gt(T,"border-radius",C),D!==L.n&&gt(T,"background-color",D)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),T})();return{position:n.position,size:n.size,pressed:m,power:p,justReleased:()=>r()?(o(!1),!0):!1,justReleasedExternal:()=>l()?(u(!1),!0):!1,UI:w}}cc(["pointerdown","pointerup","contextmenu"]);var Zx=Ui('<div style="position:absolute;background-color:rgba(0, 0, 0, 0.5);border:2px solid rgba(255, 255, 255, 0.8);border-radius:4px;overflow:hidden;user-select:none;touch-action:none"><div style="position:absolute;left:0px;bottom:0px;width:100%;background:linear-gradient(to top, #00ff00, #ffff00, #ff0000);transition:height 0.05s">');function Jx(n){const e=()=>(()=>{var t=Zx(),i=t.firstChild;return ss(()=>({e:`${n.position().x}px`,t:`${n.position().y}px`,a:`${n.width()}px`,o:`${n.height()}px`,i:`${n.power()*100}%`}),({e:s,t:r,a:o,o:a,i:c},l)=>{s!==l.e&&gt(t,"left",s),r!==l.t&&gt(t,"top",r),o!==l.a&&gt(t,"width",o),a!==l.o&&gt(t,"height",a),c!==l.i&&gt(i,"height",c)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),t})();return{position:n.position,UI:e}}class jx extends Error{constructor(e,t,i){super(e),this.is_operational=t,this.context=i,this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}var If=(n=>(n.EID_MAX_INDEX_OVERFLOW="EID_MAX_INDEX_OVERFLOW",n.EID_MAX_GEN_OVERFLOW="EID_MAX_GEN_OVERFLOW",n.COMPONENT_NOT_REGISTERED="COMPONENT_NOT_REGISTERED",n.ENTITY_NOT_ALIVE="ENTITY_NOT_ALIVE",n.CIRCULAR_SYSTEM_DEPENDENCY="CIRCULAR_SYSTEM_DEPENDENCY",n.DUPLICATE_SYSTEM="DUPLICATE_SYSTEM",n.ARCHETYPE_NOT_FOUND="ARCHETYPE_NOT_FOUND",n.RESOURCE_NOT_REGISTERED="RESOURCE_NOT_REGISTERED",n))(If||{});class Kx extends jx{constructor(e,t,i){super(t??e,!0,i),this.category=e}}function Br(n,e,t){return n}const Un=-1,Tn=-1,xr=Object.freeze(Object.create(null)),qi=5,Yi=31,Qx=2166136261,ey=16777619,ty=2654435769,ny=1367130551,pi=16,Ku=2,Uf=1024,xo=0,Qu=0,iy=31,sy=1/60,ry=4,oy=0,ay=4;class hi{_words;constructor(e){this._words=e??new Array(ay).fill(0)}has(e){const t=e>>>qi;return t>=this._words.length?!1:(this._words[t]&1<<(e&Yi))!==0}set(e){const t=e>>>qi;t>=this._words.length&&this.grow(t+1),this._words[t]|=1<<(e&Yi)}clear(e){const t=e>>>qi;t>=this._words.length||(this._words[t]&=~(1<<(e&Yi)))}overlaps(e){const t=this._words,i=e._words,s=t.length<i.length?t.length:i.length;for(let r=0;r<s;r++)if((t[r]&i[r])!==0)return!0;return!1}contains(e){const t=e._words,i=this._words,s=i.length;for(let r=0;r<t.length;r++){const o=t[r];if(o!==0&&(r>=s||(i[r]&o)!==o))return!1}return!0}equals(e){const t=this._words,i=e._words,s=t.length>i.length?t.length:i.length;for(let r=0;r<s;r++){const o=r<t.length?t[r]:0,a=r<i.length?i[r]:0;if(o!==a)return!1}return!0}copy(){return new hi(this._words.slice())}copy_with_set(e){const t=e>>>qi,i=t+1,s=this._words.length>i?this._words.length:i,r=new Array(s).fill(0);for(let o=0;o<this._words.length;o++)r[o]=this._words[o];return r[t]|=1<<(e&Yi),new hi(r)}copy_with_clear(e){const t=this._words.slice(),i=e>>>qi;return i<t.length&&(t[i]&=~(1<<(e&Yi))),new hi(t)}hash(){let e=Qx;const t=this._words;let i=t.length-1;for(;i>=0&&t[i]===0;)i--;for(let s=0;s<=i;s++)e^=t[s],e=Math.imul(e,ey);return e}for_each(e){const t=this._words;for(let i=0;i<t.length;i++){let s=t[i];if(s===0)continue;const r=i<<qi;for(;s!==0;){const o=s&-s>>>0,a=Yi-Math.clz32(o);e(r+a),s^=o}}}grow(e){let t=this._words.length;for(;t<e;)t*=2;const i=new Array(t).fill(0);for(let s=0;s<this._words.length;s++)i[s]=this._words[s];this._words=i}}class Ni{constructor(e,t=pi){this._ctor=e,this._buf=new e(t)}_buf;_len=0;get length(){return this._len}push(e){this._len>=this._buf.length&&this._grow(),this._buf[this._len++]=e}pop(){return this._buf[--this._len]}get(e){return this._buf[e]}set_at(e,t){this._buf[e]=t}swap_remove(e){const t=this._buf[e];return this._buf[e]=this._buf[--this._len],t}clear(){this._len=0}get buf(){return this._buf}view(){return this._buf.subarray(0,this._len)}[Symbol.iterator](){let e=0;const t=this._buf,i=this._len;return{next(){return e<i?{value:t[e++],done:!1}:{value:0,done:!0}}}}ensure_capacity(e){if(e<=this._buf.length)return;let t=this._buf.length||1;for(;t<e;)t*=Ku;const i=new this._ctor(t);i.set(this._buf.subarray(0,this._len)),this._buf=i}bulk_append(e,t,i){this.ensure_capacity(this._len+i),this._buf.set(e.subarray(t,t+i),this._len),this._len+=i}bulk_append_zeroes(e){this.ensure_capacity(this._len+e),this._buf.fill(0,this._len,this._len+e),this._len+=e}_grow(){const e=new this._ctor(this._buf.length*Ku);e.set(this._buf),this._buf=e}}class ly extends Ni{constructor(e=pi){super(Float32Array,e)}}class cy extends Ni{constructor(e=pi){super(Float64Array,e)}}class uy extends Ni{constructor(e=pi){super(Int8Array,e)}}class hy extends Ni{constructor(e=pi){super(Int16Array,e)}}class fy extends Ni{constructor(e=pi){super(Int32Array,e)}}class dy extends Ni{constructor(e=pi){super(Uint8Array,e)}}class py extends Ni{constructor(e=pi){super(Uint16Array,e)}}class Nf extends Ni{constructor(e=pi){super(Uint32Array,e)}}const my={f32:ly,f64:cy,i8:uy,i16:hy,i32:fy,u8:dy,u16:py,u32:Nf},rs=20,Do=(1<<rs)-1,_y=iy-rs,eh=(1<<_y)-1,gy=(n,e)=>e<<rs|n,ln=n=>n&Do,th=n=>n>>rs,vy=n=>Br(n),xy=n=>Br(n);class yy{field_names;columns;reader;constructor(e){this.field_names=e,this.columns=[];for(let i=0;i<e.length;i++)this.columns.push([]);const t={length:0};for(let i=0;i<e.length;i++)t[e[i]]=this.columns[i];this.reader=t}emit(e){const t=this.field_names,i=this.columns;for(let s=0;s<t.length;s++)i[s].push(e[t[s]]);this.reader.length++}emit_signal(){this.reader.length++}clear(){this.reader.length=0;const e=this.columns;for(let t=0;t<e.length;t++)e[t].length=0}}const Sy=n=>Br(n);class My{field_names;field_index;columns;reader;constructor(e,t){this.field_names=e,this.field_index=Object.create(null),this.columns=[];for(let r=0;r<e.length;r++)this.field_index[e[r]]=r,this.columns.push([t[e[r]]??0]);const i=Object.create(null),s=this.columns;for(let r=0;r<e.length;r++){const o=s[r];Object.defineProperty(i,e[r],{get(){return o[xo]},enumerable:!0})}this.reader=i}write(e){const t=this.field_names,i=this.columns;for(let s=0;s<t.length;s++)t[s]in e&&(i[s][xo]=e[t[s]])}read_field(e){return this.columns[e][xo]}write_field(e,t){this.columns[e][xo]=t}}const Ey=n=>Br(n);class by{id;mask;has_columns;_entity_ids;length=0;edges=[];_flat_columns=[];_col_offset=[];_field_count=[];_field_index=[];_field_names=[];column_groups=[];_column_ids=[];constructor(e,t,i,s=Uf){if(this.id=e,this.mask=t,this._entity_ids=new Nf(s),i){let r=0;for(let o=0;o<i.length;o++){const a=i[o],c=a.component_id,l=new Array(a.field_names.length);this._col_offset[c]=r,this._field_count[c]=a.field_names.length,this._field_index[c]=a.field_index,this._field_names[c]=a.field_names;for(let u=0;u<a.field_names.length;u++){const h=new my[a.field_types[u]](s);l[u]=h,this._flat_columns[r++]=h}this.column_groups[c]={layout:a,columns:l},this._column_ids.push(c)}}this.has_columns=this._column_ids.length>0}get entity_count(){return this.length}get entity_ids(){return this._entity_ids.buf}get entity_list(){return this._entity_ids.view()}has_component(e){return this.mask.has(e)}matches(e){return this.mask.contains(e)}get_column(e,t){const i=e,s=this._field_index[i][t];return this._flat_columns[this._col_offset[i]+s].buf}write_fields(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return;const o=this._field_names[s],a=this._flat_columns;for(let c=0;c<o.length;c++)a[r+c].buf[e]=i[o[c]]}write_fields_positional(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return;const o=this._flat_columns;for(let a=0;a<i.length;a++)o[r+a].buf[e]=i[a]}read_field(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return NaN;const o=this._field_index[s][i];return o===void 0?NaN:this._flat_columns[r+o].buf[e]}copy_shared_from(e,t,i){const s=e._col_offset,r=e._field_count,o=e._flat_columns,a=this._flat_columns,c=this._column_ids;for(let l=0;l<c.length;l++){const u=c[l],h=s[u];if(h===void 0)continue;const f=this._col_offset[u],d=r[u];for(let _=0;_<d;_++)a[f+_].buf[i]=o[h+_].buf[t]}}add_entity(e){const t=this.length;this._entity_ids.push(e);const i=this._flat_columns;for(let s=0;s<i.length;s++)i[s].push(0);return this.length++,t}remove_entity(e){const t=this.length-1;let i=Tn;const s=this._flat_columns,r=this._entity_ids.buf;if(e!==t){r[e]=r[t],i=ln(r[e]);for(let o=0;o<s.length;o++)s[o].swap_remove(e)}else for(let o=0;o<s.length;o++)s[o].pop();return this._entity_ids.pop(),this.length--,i}add_entity_tag(e){const t=this.length;return this._entity_ids.push(e),this.length++,t}remove_entity_tag(e){const t=this.length-1;let i=Tn;const s=this._entity_ids.buf;return e!==t&&(s[e]=s[t],i=ln(s[e])),this._entity_ids.pop(),this.length--,i}move_entity_from(e,t,i,s){const r=this.length;this._entity_ids.push(i);const o=this._flat_columns,a=e._flat_columns;for(let l=0;l<o.length;l++){const u=s[l];o[l].push(u>=0?a[u].buf[t]:0)}this.length++;const c=e.has_columns?e.remove_entity(t):e.remove_entity_tag(t);Et[0]=r,Et[1]=c}move_entity_from_tag(e,t,i){const s=this.length;this._entity_ids.push(i),this.length++;const r=e.remove_entity_tag(t);Et[0]=s,Et[1]=r}bulk_move_all_from(e,t){const i=e.length;if(i===0)return this.length;const s=this.length,r=this._flat_columns,o=e._flat_columns;this._entity_ids.bulk_append(e._entity_ids.buf,0,i);for(let a=0;a<r.length;a++){const c=t[a];c>=0?r[a].bulk_append(o[c].buf,0,i):r[a].bulk_append_zeroes(i)}this.length+=i,e.length=0,e._entity_ids.clear();for(let a=0;a<o.length;a++)o[a].clear();return s}get_edge(e){return this.edges[e]}set_edge(e,t){this.edges[e]=t}}const Et=[0,Tn];function yo(n,e){const t=e._flat_columns,i=new Int16Array(t.length),s=e._column_ids,r=n._col_offset,o=e._col_offset,a=e._field_count;for(let c=0;c<s.length;c++){const l=s[c],u=o[l],h=a[l],f=r[l];if(f!==void 0)for(let d=0;d<h;d++)i[u+d]=f+d;else for(let d=0;d<h;d++)i[u+d]=-1}return i}function Ff(n,e,t){const i=n.get(e);i!==void 0?i.push(t):n.set(e,[t])}class Ty{entity_generations=[];entity_high_water=0;entity_free_indices=[];entity_alive_count=0;component_metas=[];component_count=0;event_channels=[];event_count=0;resource_channels=[];resource_count=0;archetypes=[];archetype_map=new Map;next_archetype_id=0;component_index=new Map;registered_queries=[];empty_archetype_id;entity_archetype=[];entity_row=[];pending_destroy=[];pending_add_ids=[];pending_add_defs=[];pending_add_values=[];pending_remove_ids=[];pending_remove_defs=[];initial_capacity;constructor(e){this.initial_capacity=e??Uf,this.empty_archetype_id=this.arch_get_or_create_from_mask(new hi)}arch_get(e){return this.archetypes[e]}arch_get_or_create_from_mask(e){const t=e.hash(),i=this.archetype_map.get(t);if(i!==void 0){for(let c=0;c<i.length;c++)if(this.archetypes[i[c]].mask.equals(e))return i[c]}const s=Ey(this.next_archetype_id++),r=[];e.for_each(c=>{const l=c,u=this.component_metas[l];u&&u.field_names.length>0&&r.push({component_id:l,field_names:u.field_names,field_index:u.field_index,field_types:u.field_types})});const o=new by(s,e,r,this.initial_capacity);this.archetypes.push(o),Ff(this.archetype_map,t,s),e.for_each(c=>{const l=c;let u=this.component_index.get(l);u||(u=new Set,this.component_index.set(l,u)),u.add(s)});const a=this.registered_queries;for(let c=0;c<a.length;c++){const l=a[c];o.matches(l.include_mask)&&(!l.exclude_mask||!o.mask.overlaps(l.exclude_mask))&&(!l.any_of_mask||o.mask.overlaps(l.any_of_mask))&&l.result.push(o)}return s}arch_resolve_add(e,t){const i=this.arch_get(e);if(i.mask.has(t))return e;const s=i.get_edge(t);if(s?.add!=null)return s.add;const r=this.arch_get_or_create_from_mask(i.mask.copy_with_set(t));return this.arch_cache_edge(i,this.arch_get(r),t),r}arch_resolve_remove(e,t){const i=this.arch_get(e);if(!i.mask.has(t))return e;const s=i.get_edge(t);if(s?.remove!=null)return s.remove;const r=this.arch_get_or_create_from_mask(i.mask.copy_with_clear(t));return this.arch_cache_edge(this.arch_get(r),i,t),r}arch_cache_edge(e,t,i){const s=e.get_edge(i)??{add:null,remove:null,add_map:null,remove_map:null};s.add=t.id,s.add_map=yo(e,t),e.set_edge(i,s);const r=t.get_edge(i)??{add:null,remove:null,add_map:null,remove_map:null};r.remove=e.id,r.remove_map=yo(t,e),t.set_edge(i,r)}create_entity(){let e,t;this.entity_free_indices.length>0?(e=this.entity_free_indices.pop(),t=this.entity_generations[e]):(e=this.entity_high_water++,this.entity_generations[e]=Qu,t=Qu),this.entity_alive_count++;const i=gy(e,t);return this.entity_archetype[e]=this.empty_archetype_id,this.entity_row[e]=Un,i}destroy_entity(e){if(!this.is_alive(e))return;const t=ln(e),i=this.entity_row[t];if(i!==Un){const r=this.arch_get(this.entity_archetype[t]).remove_entity(i);r!==Tn&&(this.entity_row[r]=i)}this.entity_archetype[t]=Un,this.entity_row[t]=Un;const s=th(e);this.entity_generations[t]=s+1&eh,this.entity_free_indices.push(t),this.entity_alive_count--}is_alive(e){const t=ln(e);return t<this.entity_high_water&&this.entity_generations[t]===th(e)}get entity_count(){return this.entity_alive_count}destroy_entity_deferred(e){this.pending_destroy.push(e)}flush_destroyed(){const e=this.pending_destroy;if(e.length===0)return;const t=this.entity_archetype,i=this.entity_row,s=this.entity_generations,r=this.archetypes,o=this.entity_high_water;for(let a=0;a<e.length;a++){const c=e[a],l=c&Do,u=c>>rs;if(l>=o||s[l]!==u)continue;const h=i[l];if(h!==Un){const f=r[t[l]],d=f.has_columns?f.remove_entity(h):f.remove_entity_tag(h);d!==Tn&&(i[d]=h)}t[l]=Un,i[l]=Un,s[l]=u+1&eh,this.entity_free_indices.push(l),this.entity_alive_count--}e.length=0}get pending_destroy_count(){return this.pending_destroy.length}add_component_deferred(e,t,i){this.pending_add_ids.push(e),this.pending_add_defs.push(t),this.pending_add_values.push(i??xr)}remove_component_deferred(e,t){this.pending_remove_ids.push(e),this.pending_remove_defs.push(t)}flush_structural(){this.pending_add_ids.length>0&&this._flush_adds(),this.pending_remove_ids.length>0&&this._flush_removes()}_flush_adds(){const e=this.pending_add_ids,t=this.pending_add_defs,i=this.pending_add_values,s=e.length,r=this.entity_archetype,o=this.entity_row,a=this.entity_generations,c=this.archetypes,l=this.component_metas,u=this.entity_high_water;for(let h=0;h<s;h++){const f=e[h],d=f&Do,_=f>>rs;if(d>=u||a[d]!==_)continue;const v=r[d],m=t[h],p=c[v];if(p.mask.has(m)){l[m].field_names.length>0&&p.write_fields(o[d],m,i[h]);continue}const y=this.arch_resolve_add(v,m),M=c[y],S=o[d],w=!M.has_columns&&!p.has_columns;let T;if(S!==Un){if(w)M.move_entity_from_tag(p,S,f);else{const R=p.get_edge(m);M.move_entity_from(p,S,f,R.add_map)}T=Et[0],Et[1]!==Tn&&(o[Et[1]]=S)}else T=w?M.add_entity_tag(f):M.add_entity(f);l[m].field_names.length>0&&M.write_fields(T,m,i[h]),r[d]=y,o[d]=T}e.length=0,t.length=0,i.length=0}_flush_removes(){const e=this.pending_remove_ids,t=this.pending_remove_defs,i=e.length,s=this.entity_archetype,r=this.entity_row,o=this.entity_generations,a=this.archetypes,c=this.entity_high_water;for(let l=0;l<i;l++){const u=e[l],h=u&Do,f=u>>rs;if(h>=c||o[h]!==f)continue;const d=s[h],_=t[l],v=a[d];if(!v.mask.has(_))continue;const m=this.arch_resolve_remove(d,_),p=a[m],y=r[h];if(!p.has_columns&&!v.has_columns)p.move_entity_from_tag(v,y,u);else{const M=v.get_edge(_);p.move_entity_from(v,y,u,M.remove_map)}Et[1]!==Tn&&(r[Et[1]]=y),s[h]=m,r[h]=Et[0]}e.length=0,t.length=0}get pending_structural_count(){return this.pending_add_ids.length+this.pending_remove_ids.length}register_component(e){const t=vy(this.component_count++),i=Object.keys(e),s=new Array(i.length),r=Object.create(null);for(let o=0;o<i.length;o++)r[i[o]]=o,s[o]=e[i[o]];return this.component_metas.push({field_names:i,field_index:r,field_types:s}),t}add_component(e,t,i){if(!this.is_alive(e))return;const s=ln(e),r=this.entity_archetype[s],o=this.arch_get(r);if(o.has_component(t)){o.write_fields(this.entity_row[s],t,i);return}const a=this.arch_resolve_add(r,t),c=this.arch_get(a),l=this.entity_row[s];let u;if(l!==Un){const h=o.get_edge(t);!c.has_columns&&!o.has_columns?c.move_entity_from_tag(o,l,e):c.move_entity_from(o,l,e,h.add_map),u=Et[0],Et[1]!==Tn&&(this.entity_row[Et[1]]=l)}else u=c.has_columns?c.add_entity(e):c.add_entity_tag(e);c.write_fields(u,t,i),this.entity_archetype[s]=a,this.entity_row[s]=u}add_components(e,t){if(!this.is_alive(e))return;const i=ln(e),s=this.entity_archetype[i];let r=s;for(let o=0;o<t.length;o++)r=this.arch_resolve_add(r,t[o].def);if(r!==s){const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[i];let l;if(c!==Un){const u=yo(o,a);a.move_entity_from(o,c,e,u),l=Et[0],Et[1]!==Tn&&(this.entity_row[Et[1]]=c)}else l=a.add_entity(e);for(let u=0;u<t.length;u++)a.write_fields(l,t[u].def,t[u].values??xr);this.entity_archetype[i]=r,this.entity_row[i]=l}else{const o=this.arch_get(s),a=this.entity_row[i];for(let c=0;c<t.length;c++)o.write_fields(a,t[c].def,t[c].values??xr)}}remove_component(e,t){if(!this.is_alive(e))return;const i=ln(e),s=this.entity_archetype[i],r=this.arch_get(s);if(!r.has_component(t))return;const o=this.arch_resolve_remove(s,t),a=this.arch_get(o),c=this.entity_row[i],l=r.get_edge(t);!a.has_columns&&!r.has_columns?a.move_entity_from_tag(r,c,e):a.move_entity_from(r,c,e,l.remove_map),Et[1]!==Tn&&(this.entity_row[Et[1]]=c),this.entity_archetype[i]=o,this.entity_row[i]=Et[0]}remove_components(e,t){if(!this.is_alive(e))return;const i=ln(e),s=this.entity_archetype[i];let r=s;for(let u=0;u<t.length;u++)r=this.arch_resolve_remove(r,t[u]);if(r===s)return;const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[i],l=yo(o,a);a.move_entity_from(o,c,e,l),Et[1]!==Tn&&(this.entity_row[Et[1]]=c),this.entity_archetype[i]=r,this.entity_row[i]=Et[0]}has_component(e,t){if(!this.is_alive(e))return!1;const i=ln(e);return this.arch_get(this.entity_archetype[i]).has_component(t)}batch_add_component(e,t,i){if(e.length===0)return;const s=t;if(e.mask.has(s))return;const r=this.arch_resolve_add(e.id,s),o=this.arch_get(r),a=e.get_edge(s),c=e.length,l=this.entity_archetype,u=this.entity_row,h=o.bulk_move_all_from(e,a.add_map);for(let f=0;f<c;f++){const d=ln(o.entity_ids[h+f]);l[d]=r,u[d]=h+f}if(this.component_metas[s].field_names.length>0&&i)for(let f=0;f<c;f++)o.write_fields(h+f,s,i)}batch_remove_component(e,t){if(e.length===0)return;const i=t;if(!e.mask.has(i))return;const s=this.arch_resolve_remove(e.id,i),r=this.arch_get(s),o=e.get_edge(i),a=e.length,c=r.bulk_move_all_from(e,o.remove_map),l=this.entity_archetype,u=this.entity_row;for(let h=0;h<a;h++){const f=ln(r.entity_ids[c+h]);l[f]=s,u[f]=c+h}}get_entity_archetype(e){return this.arch_get(this.entity_archetype[ln(e)])}get_entity_row(e){return this.entity_row[ln(e)]}get_matching_archetypes(e,t,i){const s=e._words;let r=!1;for(let l=0;l<s.length;l++)if(s[l]!==0){r=!0;break}if(!r)return this.archetypes.filter(l=>(!t||!l.mask.overlaps(t))&&(!i||l.mask.overlaps(i)));let o,a=!1;for(let l=0;l<s.length;l++){let u=s[l];if(u===0)continue;const h=l<<qi;for(;u!==0;){const f=u&-u>>>0,d=h+(Yi-Math.clz32(f));u^=f;const _=this.component_index.get(d);if(!_||_.size===0){a=!0;break}(!o||_.size<o.size)&&(o=_)}if(a)break}if(a||!o)return[];const c=[];for(const l of o){const u=this.arch_get(l);u.matches(e)&&(!t||!u.mask.overlaps(t))&&(!i||u.mask.overlaps(i))&&c.push(u)}return c}register_query(e,t,i){const s=this.get_matching_archetypes(e,t,i);return this.registered_queries.push({include_mask:e.copy(),exclude_mask:t?t.copy():null,any_of_mask:i?i.copy():null,result:s}),s}get archetype_count(){return this.archetypes.length}register_event(e){const t=xy(this.event_count++),i=new yy(e);return this.event_channels.push(i),t}emit_event(e,t){this.event_channels[e].emit(t)}emit_signal(e){this.event_channels[e].emit_signal()}get_event_reader(e){return this.event_channels[e].reader}clear_events(){const e=this.event_channels;for(let t=0;t<e.length;t++)e[t].clear()}register_resource(e,t){const i=Sy(this.resource_count++),s=new My(e,t);return this.resource_channels.push(s),i}get_resource_reader(e){return this.resource_channels[e].reader}get_resource_channel(e){return this.resource_channels[e]}}const Xa=["PRE_STARTUP","STARTUP","POST_STARTUP"],qa=["PRE_UPDATE","UPDATE","POST_UPDATE"];class wy{label_systems=new Map;sorted_cache=new Map;system_index=new Map;next_insertion_order=0;constructor(){for(let e=0;e<Xa.length;e++)this.label_systems.set(Xa[e],[]);this.label_systems.set("FIXED_UPDATE",[]);for(let e=0;e<qa.length;e++)this.label_systems.set(qa[e],[])}add_systems(e,...t){for(const i of t){const s="system"in i?i.system:i,r="system"in i?i.ordering:void 0,o={descriptor:s,insertion_order:this.next_insertion_order++,before:new Set(r?.before??[]),after:new Set(r?.after??[])};this.label_systems.get(e).push(o),this.system_index.set(s,e),this.sorted_cache.delete(e)}}remove_system(e){const t=this.system_index.get(e);if(t===void 0)return;const i=this.label_systems.get(t),s=i.findIndex(r=>r.descriptor===e);if(s!==-1){const r=i.length-1;s!==r&&(i[s]=i[r]),i.pop();for(const o of i)o.before.delete(e),o.after.delete(e)}this.system_index.delete(e),this.sorted_cache.delete(t)}run_startup(e){for(const t of Xa)this.run_label(t,e,oy)}run_update(e,t){for(const i of qa)this.run_label(i,e,t)}run_fixed_update(e,t){this.run_label("FIXED_UPDATE",e,t)}has_fixed_systems(){return this.label_systems.get("FIXED_UPDATE").length>0}get_all_systems(){const e=[];for(const t of this.label_systems.values())for(const i of t)e.push(i.descriptor);return e}has_system(e){return this.system_index.has(e)}clear(){for(const e of this.label_systems.values())e.length=0;this.sorted_cache.clear(),this.system_index.clear()}run_label(e,t,i){const s=this.get_sorted(e);for(let r=0;r<s.length;r++)s[r].fn(t,i);t.flush()}get_sorted(e){const t=this.sorted_cache.get(e);if(t!==void 0)return t;const i=this.label_systems.get(e),s=this.topological_sort(i,e);return this.sorted_cache.set(e,s),s}topological_sort(e,t){if(e.length===0)return[];const i=new Map,s=new Map,r=new Map,o=new Set;for(const l of e)i.set(l.descriptor,new Set),s.set(l.descriptor,0),r.set(l.descriptor,l.insertion_order),o.add(l.descriptor);for(const l of e){for(const u of l.before)o.has(u)&&(i.get(l.descriptor).add(u),s.set(u,s.get(u)+1));for(const u of l.after)o.has(u)&&(i.get(u).add(l.descriptor),s.set(l.descriptor,s.get(l.descriptor)+1))}let a=[];for(const l of e)s.get(l.descriptor)===0&&a.push(l.descriptor);a.sort((l,u)=>r.get(u)-r.get(l));const c=[];for(;a.length>0;){const l=a.pop();c.push(l);for(const u of i.get(l)){const h=s.get(u)-1;s.set(u,h),h===0&&a.push(u)}a.sort((u,h)=>r.get(h)-r.get(u))}if(c.length!==e.length){const l=new Set(c),u=e.filter(h=>!l.has(h.descriptor)).map(h=>h.descriptor.name??`system_${h.descriptor.id}`);throw new Kx(If.CIRCULAR_SYSTEM_DEPENDENCY,`Circular system dependency detected in ${t}: [${u.join(", ")}]`)}return c}}const nh=new WeakMap;function Ay(n,e){let t=nh.get(n);if(!t){t=Object.create(null);const{field_names:r}=n.layout;for(let o=0;o<r.length;o++){const a=o;Object.defineProperty(t,r[o],{get(){return this._columns[a][this._row]},set(c){this._columns[a][this._row]=c},enumerable:!0,configurable:!1})}nh.set(n,t)}const i=Object.create(t),s=new Array(n.columns.length);for(let r=0;r<n.columns.length;r++)s[r]=n.columns[r].buf;return i._columns=s,i._row=e,i}class Ry{_archetypes;_defs;_resolver;_include;_exclude;_any_of;constructor(e,t,i,s,r,o){this._archetypes=e,this._defs=t,this._resolver=i,this._include=s,this._exclude=r,this._any_of=o}get archetype_count(){return this._archetypes.length}count(){const e=this._archetypes;let t=0;for(let i=0;i<e.length;i++)t+=e[i].entity_count;return t}get archetypes(){return this._archetypes}*[Symbol.iterator](){const e=this._archetypes;for(let t=0;t<e.length;t++)e[t].entity_count>0&&(yield e[t])}and(...e){const t=this._include.copy(),i=this._defs.slice();for(let s=0;s<e.length;s++)t.has(e[s])||(t.set(e[s]),i.push(e[s]));return this._resolver._resolve_query(t,this._exclude,this._any_of,i)}not(...e){const t=this._exclude?this._exclude.copy():new hi;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(this._include,t,this._any_of,this._defs)}any_of(...e){const t=this._any_of?this._any_of.copy():new hi;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(this._include,this._exclude,t,this._defs)}}class Cy{constructor(e){this._resolver=e}every(...e){const t=new hi;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(t,null,null,e)}}class Py{store;constructor(e){this.store=e}create_entity(){return this.store.create_entity()}get_field(e,t,i){const s=this.store.get_entity_archetype(e),r=this.store.get_entity_row(e);return s.read_field(r,t,i)}set_field(e,t,i,s){const r=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),a=r.get_column(t,i);a[o]=s}ref(e,t){const i=this.store.get_entity_archetype(t),s=this.store.get_entity_row(t);return Ay(i.column_groups[e],s)}destroy_entity(e){return this.store.destroy_entity_deferred(e),this}add_component(e,t,i){return this.store.add_component_deferred(e,t,i??xr),this}remove_component(e,t){return this.store.remove_component_deferred(e,t),this}flush(){this.store.flush_structural(),this.store.flush_destroyed()}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}read(e){return this.store.get_event_reader(e)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}}const Dy=n=>Br(n);class Ly{store;schedule;ctx;systems=new Set;next_system_id=0;_fixed_timestep;_accumulator=0;_max_fixed_steps;query_cache=new Map;scratch_mask=new hi;constructor(e){this.store=new Ty(e?.initial_capacity),this.schedule=new wy,this.ctx=new Py(this.store),this._fixed_timestep=e?.fixed_timestep??sy,this._max_fixed_steps=e?.max_fixed_steps??ry}get fixed_timestep(){return this._fixed_timestep}set fixed_timestep(e){this._fixed_timestep=e}get fixed_alpha(){return this._accumulator/this._fixed_timestep}register_component(e,t){if(Array.isArray(e)){const i=t??"f64",s=Object.create(null);for(const r of e)s[r]=i;return this.store.register_component(s)}return this.store.register_component(e)}register_tag(){return this.store.register_component({})}register_event(e){return this.store.register_event(e)}register_signal(){return this.store.register_event([])}register_resource(e,t){return this.store.register_resource(e,t)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}create_entity(){return this.store.create_entity()}destroy_entity_deferred(e){this.store.destroy_entity_deferred(e)}is_alive(e){return this.store.is_alive(e)}get entity_count(){return this.store.entity_count}add_component(e,t,i){return this.store.add_component(e,t,i??xr),this}add_components(e,t){this.store.add_components(e,t)}remove_component(e,t){return this.store.remove_component(e,t),this}remove_components(e,...t){this.store.remove_components(e,t)}has_component(e,t){return this.store.has_component(e,t)}batch_add_component(e,t,i){this.store.batch_add_component(e,t,i)}batch_remove_component(e,t){this.store.batch_remove_component(e,t)}get_field(e,t,i){const s=this.store.get_entity_archetype(e),r=this.store.get_entity_row(e);return s.read_field(r,t,i)}set_field(e,t,i,s){const r=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),a=r.get_column(t,i);a[o]=s}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}query(...e){const t=this.scratch_mask;t._words.fill(0);for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolve_query(t.copy(),null,null,e)}_resolve_query(e,t,i,s){const r=e.hash(),o=t?t.hash():0,a=i?i.hash():0,c=r^Math.imul(o,ty)^Math.imul(a,ny)|0,l=this._find_cached(c,e,t,i);if(l!==void 0)return l.query;const u=this.store.register_query(e,t??void 0,i??void 0),h=new Ry(u,s,this,e.copy(),t?.copy()??null,i?.copy()??null);return Ff(this.query_cache,c,{include_mask:e.copy(),exclude_mask:t?.copy()??null,any_of_mask:i?.copy()??null,query:h}),h}_find_cached(e,t,i,s){const r=this.query_cache.get(e);if(r)for(let o=0;o<r.length;o++){const a=r[o];if(!(!a.include_mask.equals(t)||!(i===null?a.exclude_mask===null:a.exclude_mask!==null&&a.exclude_mask.equals(i))||!(s===null?a.any_of_mask===null:a.any_of_mask!==null&&a.any_of_mask.equals(s))))return a}}register_system(e,t){let i;if(typeof e=="function")if(t!==void 0){const o=t(new Cy(this)),a=this.ctx,c=e;i={fn:(l,u)=>c(o,a,u)}}else i={fn:e};else i=e;const s=Dy(this.next_system_id++),r=Object.freeze(Object.assign({id:s},i));return this.systems.add(r),r}add_systems(e,...t){return this.schedule.add_systems(e,...t),this}remove_system(e){this.schedule.remove_system(e),e.on_removed?.(),this.systems.delete(e)}get system_count(){return this.systems.size}startup(){for(const e of this.systems.values())e.on_added?.(this.ctx);this.schedule.run_startup(this.ctx)}update(e){if(this.schedule.has_fixed_systems()){this._accumulator+=e;const t=this._max_fixed_steps*this._fixed_timestep;for(this._accumulator>t&&(this._accumulator=t);this._accumulator>=this._fixed_timestep;)this.schedule.run_fixed_update(this.ctx,this._fixed_timestep),this._accumulator-=this._fixed_timestep}this.schedule.run_update(this.ctx,e),this.store.clear_events()}flush(){this.ctx.flush()}dispose(){for(const e of this.systems.values())e.dispose?.(),e.on_removed?.();this.systems.clear(),this.schedule.clear()}}class Iy{#e;#n;constructor(){const[e,t]=kd({});this.#e=e,this.#n=t}track(e){e in this.#e||this.#n(t=>(t[e]=0,t)),this.#e[e]}untrack(e){this.#n(t=>(delete t[e],t))}dirty(e){e in this.#e&&this.#n(t=>(t[e]=1-t[e],t))}}class nc{#e;#n;#t;#s;#i=0;#r=!1;#o;constructor(e,t,i,s,r){this.#t=e,this.#s=t,this.#e=i,this.#n=s,this.#o=r}get value(){return this.#t.track(this.#s),Kt()!==null&&(this.#i++,this.#r||(this.#r=!0,Ot(()=>{this.#i--,this.#i===0&&queueMicrotask(()=>{this.#i===0&&(this.#r=!1,this.#o?.())})}))),this.#e()}dirty(){this.#n()}}class Uy{#e;#n;#t;#s;#i;constructor(e,t,i){this.#e=e,this.#n=t,this.#t=i,this.#i=`resource:${t.toString()}`,this.#s=new Map}get resourceKey(){return this.#i}#r(e){if(Kt()===null)return this.#t[e];const i=`${this.#i}:${e}`;let s=this.#s.get(e);return s===void 0&&(s=new nc(this.#e,i,()=>this.#t[e],()=>this.#e.dirty(i),()=>{this.#e.untrack(i),this.#s.delete(e)}),this.#s.set(e,s)),s.value}get delta(){return this.#r("delta")}get elapsed(){return this.#r("elapsed")}get(e){return this.#r(e)}}class Ny{#e;#n;#t;#s;#i;constructor(e,t,i){this.#e=e,this.#n=t,this.#t=i,this.#s=new Map,this.#i=new Map}get id(){return this.#t}hasComponent(e){if(Kt()===null)return this.#n.has_component(this.#t,e);const i=`entity:${this.#t}:has:${e}`;let s=this.#s.get(i);return s===void 0&&(s=new nc(this.#e,i,()=>this.#n.has_component(this.#t,e),()=>this.#e.dirty(i),()=>{this.#e.untrack(i),this.#s.delete(i)}),this.#s.set(i,s)),s.value}getField(e,t){if(Kt()===null)return this.#n.get_field(this.#t,e,t);const s=`entity:${this.#t}:${e}:${t}`;let r=this.#i.get(s);return r===void 0&&(r=new nc(this.#e,s,()=>this.#n.get_field(this.#t,e,t),()=>this.#e.dirty(s),()=>{this.#e.untrack(s),this.#i.delete(s)}),this.#i.set(s,r)),r.value}}class yr{#e;#n;#t;#s;#i;constructor(e,t,i,s){this.#e=e,this.#n=t,this.#s=i,this.#i=s,this.#t=t.query(...i)}get queryKey(){return this.#i}get archetype_count(){return Kt()===null?this.#t.archetype_count:(this.#e.track(`${this.#i}:archetype_count`),this.#t.archetype_count)}count(){return Kt()===null?this.#t.count():(this.#e.track(`${this.#i}:count`),this.#e.track("world:entities"),this.#t.count())}get archetypes(){return Kt()===null?this.#t.archetypes:(this.#e.track(`${this.#i}:archetypes`),this.#e.track("world:entities"),this.#t.archetypes)}*[Symbol.iterator](){const e=Kt();if(this.#t.archetypes,e===null){for(const t of this.#t)yield t;return}this.#e.track(`${this.#i}:archetypes`);for(const t of this.#t)yield new Fy(this.#e,this.#n,t,this.#i)}and(...e){return new yr(this.#e,this.#n,[...this.#s,...e],`${this.#i}:and`)}not(...e){return new yr(this.#e,this.#n,this.#s,`${this.#i}:not`)}any_of(...e){return new yr(this.#e,this.#n,this.#s,`${this.#i}:any_of`)}}class Fy{#e;#n;#t;#s;constructor(e,t,i,s){this.#e=e,this.#n=t,this.#t=i,this.#s=s}get entity_ids(){if(Kt()===null)return this.#t.entity_ids;const t=`arch:${this.#t.id}:entity_ids`;return this.#e.track(t),this.#t.entity_ids}get entity_count(){if(Kt()===null)return this.#t.entity_count;const t=`arch:${this.#t.id}:count`;return this.#e.track(t),this.#t.entity_count}has_component(e){if(Kt()===null)return this.#t.has_component(e);const i=`arch:${this.#t.id}:has:${e}`;return this.#e.track(i),this.#t.has_component(e)}get_column(e,t){if(Kt()===null)return this.#t.get_column(e,t);const s=`arch:${this.#t.id}:col`;return this.#e.track(s),this.#t.get_column(e,t)}}class Oy{#e;#n;constructor(e){this.#e=e,this.#n=new Iy}get ecs(){return this.#e}dirty(e){this.#n.dirty(e)}query(...e){const t=`query:${e.map(i=>i.toString()).join(",")}`;return new yr(this.#n,this.#e,e,t)}resource(e){return new Uy(this.#n,e,this.#e.resource(e))}entity(e){return new Ny(this.#n,this.#e,e)}create_entity(){const e=this.#e.create_entity();return _n(()=>this.#n.dirty("world:entities")),e}destroy_entity_deferred(e){this.#e.destroy_entity_deferred(e),_n(()=>this.#n.dirty("world:entities"))}add_component(e,t,i){const s=`entity:${e}:has:${t}`;return this.#e.add_component(e,t,i),_n(()=>{this.#n.dirty(s),this.#n.dirty("world:entities")}),this}remove_component(e,t){const i=`entity:${e}:has:${t}`;return this.#e.remove_component(e,t),_n(()=>{this.#n.dirty(i),this.#n.dirty("world:entities")}),this}set_field(e,t,i,s){const r=`entity:${e}:${t}:${i}`;this.#e.set_field(e,t,i,s),_n(()=>this.#n.dirty(r))}set_resource(e,t){const i=this.#e.resource(e);this.#e.set_resource(e,t);for(const s of Object.keys(i))this.#n.dirty(`resource:${e.toString()}:${s}`)}}const By={def:{x:"f64",y:"f64",z:"f64"}},zy={def:{x:"f64",y:"f64",z:"f64"}},Vy={def:{playerType:"u8",facingForward:"u8"}},ky={def:[]},Gy={def:[]},Hy={def:{x:"f64",z:"f64",jump:"u8"}},Wy={def:{width:"f64",length:"f64",netHeight:"f64"}},Xy={def:{size:"f64"}},qy={def:{minX:"f64",minY:"f64",minZ:"f64",maxX:"f64",maxY:"f64",maxZ:"f64"}},Yy={def:[]},$y={def:{meshId:"u32"}},Zy={schema:{x:0,y:0,z:0}},Jy={schema:{servingPlayer:0}},jy={def:{phase:"u8",serverPlayer:"u8",throwTime:"f64"}},Ky={def:{side:"i8"}},Dt=new Ly,Qy=new Oy(Dt),me=Dt.register_component(By.def),Ve=Dt.register_component(zy.def),Ct=Dt.register_component(Vy.def),Ur=Dt.register_component(ky.def),is=Dt.register_component(Gy.def),Bt=Dt.register_component(Hy.def),ri=Dt.register_component(Wy.def),Ii=Dt.register_component(Xy.def),eS=Dt.register_component(qy.def),Of=Dt.register_component(Yy.def);Dt.register_component($y.def);const ta=Dt.register_resource(["x","y","z"],Zy.schema),tS=Dt.register_resource(["servingPlayer"],Jy.schema),Qe=Dt.register_component(jy.def),oi=Dt.register_component(Ky.def);function nS(){return Dt.startup(),Dt.set_resource(tS,{servingPlayer:0}),Dt.set_resource(ta,{x:0,y:-10,z:0}),{ecs:Qy}}function Bf(n){const e=n.reactiveEcs,t=e.create_entity();e.add_component(t,me,{x:n.position.x,y:n.position.y,z:n.position.z}),e.add_component(t,Ve,{x:n.velocity.x,y:n.velocity.y,z:n.velocity.z});const i=n.playerType==="Cubey"?0:1,s=n.facingForward?1:0;return e.add_component(t,Ct,{playerType:i,facingForward:s}),t}function iS(n){const e=n.reactiveEcs,t=e.create_entity();return e.add_component(t,ri,{width:n.width,length:n.length,netHeight:n.netHeight}),t}function sS(n){const e=n.reactiveEcs,t=n.position(),i=new V(0,0,0),s=e.create_entity();e.add_component(s,me,{x:t.x,y:t.y,z:t.z}),e.add_component(s,Ve,{x:i.x,y:i.y,z:i.z}),e.add_component(s,Ii,{size:n.size()});const r=n.boundary();return e.add_component(s,eS,{minX:r.min.x,minY:r.min.y,minZ:r.min.z,maxX:r.max.x,maxY:r.max.y,maxZ:r.max.z}),e.add_component(s,Of,{}),s}function rS(){let n=new si,e,t,i=[],s,r=[];const o=new Ai({color:16711680}),a=new Ai({color:16776960});Ot(()=>{o.dispose(),a.dispose()});const c=new Rt(.5,.2,.5);Ot(()=>c.dispose()),e=new je(c,o),e.position.set(0,.1,0);const l=new Rt(.5,.25,.5);Ot(()=>l.dispose()),t=new je(l,o),t.position.set(0,.45,0);const u=new Rt(.1,.2,.1);Ot(()=>u.dispose());const h=new je(u,a),f=new je(u,a);h.position.set(-.14,.3,.3),f.position.set(.14,.3,.3),i=[h,f];const d=new Rt(.1,.4,.1);Ot(()=>d.dispose()),s=new je(d,a),s.position.set(0,.3,.3);const _=new Ko(.08);Ot(()=>_.dispose());const v=new je(_,a),m=new je(_,a);return v.position.set(-.15,.48,.25),m.position.set(.15,.48,.25),r=[v,m],n.add(e),n.add(t),i.forEach(p=>n.add(p)),n.add(s),r.forEach(p=>n.add(p)),n}function oS(){let n=new si;const e=new Ai({color:"#ffff00"}),t=new Ai({color:"#00bbff"});Ot(()=>{e.dispose(),t.dispose()});const i=.5,s=.5,r=.5,o=.1,a=.1,c=.05,l=-.2*i,u=-l,h=.25*s,f=.7*i,d=.1,_=-.2*s;{let v=new xf;v.moveTo(-.5*i,-.5*s),v.lineTo(.5*i,-.5*s),v.lineTo(.5*i,.5*s),v.lineTo(-.5*s,.5*s),v.closePath();{let y=new vr;y.moveTo(l-.5*o,h-.5*a),y.lineTo(l+.5*o,h-.5*a),y.lineTo(l+.5*o,h+.5*a),y.lineTo(l-.5*o,h+.5*a),y.closePath(),v.holes.push(y);let M=new Rt(o,a,c*.1);Ot(()=>M.dispose());let S=new je(M,t);S.position.set(l,.5*s+h,.5*r-c+c*.1),n.add(S)}{let y=new vr;y.moveTo(u-.5*o,h-.5*a),y.lineTo(u+.5*o,h-.5*a),y.lineTo(u+.5*o,h+.5*a),y.lineTo(u-.5*o,h+.5*a),y.closePath(),v.holes.push(y);let M=new Rt(o,a,c*.1);Ot(()=>M.dispose());let S=new je(M,t);S.position.set(u,.5*s+h,.5*r-c+c*.1),n.add(S)}{let y=new vr;y.moveTo(-.5*f,_-.5*d),y.lineTo(.5*f,_-.5*d),y.lineTo(.5*f,_+.5*d),y.lineTo(-.5*f,_+.5*d),y.closePath(),v.holes.push(y);let M=new Rt(f,a,c*.1);Ot(()=>M.dispose());let S=new je(M,t);S.position.set(0,.5*s+_,.5*r-c+c*.1),n.add(S)}let m=new wc(v,{bevelEnabled:!1,depth:c});Ot(()=>m.dispose());let p=new je(m,e);p.translateY(.5*s),p.translateZ(.5*r-c),n.add(p)}{let v=new Rt(i,s,r-c);Ot(()=>v.dispose());let m=new je(v,e);m.translateY(.5*s),m.translateZ(-.5*c),n.add(m)}return n}function aS(n,e){return cs(t=>(Ft(oa(Ft(()=>{let i=[];for(let s of n.query(me,Ct)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i()),r={playerType:s.getField(Ct,"playerType"),facingForward:s.getField(Ct,"facingForward")},o=new si;if(r.playerType==0){let m=oS();o.add(m)}else{let m=rS();o.add(m)}const a=new si,c=new Ai({color:9127187}),l=new Xo(.02,.02,.3,8),u=new je(l,c);u.position.set(0,0,0),u.rotation.x=Math.PI/2,a.add(u);const h=new Xo(.4,.4,.02,16),f=new je(h,c);f.position.set(0,0,.15),f.rotation.x=Math.PI/2,a.add(f),a.position.set(.4,.5,.3),o.add(a);const d=new Wo(.4,32);d.scale(1,.5,1);const _=new Ho({color:0,transparent:!0,opacity:.3}),v=new je(d,_);v.rotation.x=-Math.PI/2,v.position.y=.01,e.add(v),e.add(o),Ot(()=>{e.remove(o),e.remove(v),l.dispose(),h.dispose(),d.dispose(),c.dispose(),_.dispose()}),Ft(()=>{let m=s.getField(me,"x"),p=s.getField(me,"y"),y=s.getField(me,"z"),M=s.getField(Ct,"facingForward"),S=s.getField(oi,"side");o.position.set(m,p,y),M===1?o.quaternion.set(0,1,0,0):o.quaternion.set(0,0,0,1);const w=S*.4;a.position.set(w,.5,.3);const T=Math.max(.3,1-p*.1);v.scale.set(T,T,T),v.position.set(m,.01,y)})})),Ft(oa(Ft(()=>{let i=[];for(let s of n.query(ri)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i()),r={width:s.getField(ri,"width"),length:s.getField(ri,"length"),netHeight:s.getField(ri,"netHeight")};const o=new si,a=new Ai({color:3968845}),c=new Ai({color:13421772,transparent:!0,opacity:.5}),l=new Rt(r.width,.1,r.length),u=new je(l,a);u.position.y-=.05,o.add(u);const h=new Ai({color:16777215}),f=.05,d=.01,_=new Rt(r.width,d,f),v=new je(_,h);v.position.set(0,.01,-r.length/2),o.add(v);const m=new je(_,h);m.position.set(0,.01,r.length/2),o.add(m);const p=new Rt(f,d,r.length),y=new je(p,h);y.position.set(-r.width/2,.01,0),o.add(y);const M=new je(p,h);M.position.set(r.width/2,.01,0),o.add(M);const S=6.4,w=new Rt(r.width-2*f,d,f),T=new je(w,h);T.position.set(0,.01,-S),o.add(T);const R=new je(w,h);R.position.set(0,.01,S),o.add(R);const g=new Rt(f,d,S*2),E=new je(g,h);E.position.set(0,.01,0),o.add(E);const U=8.23,C=new Rt(f,d,r.length),D=new je(C,h);D.position.set(-U/2,.01,0),o.add(D);const L=new je(C,h);L.position.set(U/2,.01,0),o.add(L);const N=new Rt(r.width,r.netHeight,.1),I=new je(N,c);I.position.y=.5*r.netHeight,o.add(I),e.add(o),Ot(()=>{e.remove(o),l.dispose(),N.dispose(),a.dispose(),c.dispose(),h.dispose(),_.dispose(),p.dispose(),w.dispose(),g.dispose(),C.dispose()})})),Ft(oa(Ft(()=>{let i=[];for(let s of n.query(me,Ii)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i()),r=s.getField(Ii,"size");const o=new Ko(r),a=new km,c=new je(o,a);e.add(c);const l=new Wo(r,32);l.scale(1,.5,1);const u=new Ho({color:0,transparent:!0,opacity:.3}),h=new je(l,u);h.rotation.x=-Math.PI/2,h.position.y=.01,e.add(h),Ot(()=>{e.remove(c),e.remove(h),o.dispose(),a.dispose(),l.dispose(),u.dispose()}),Ft(()=>{let f=s.getField(me,"x"),d=s.getField(me,"y"),_=s.getField(me,"z");c.position.set(f,d,_);const v=Math.max(.3,1-d*.1);h.scale.set(v,v,v),h.position.set(f,.01,_)})})),{update:()=>{},dispose:t}))}function lS(n,e,t,i,s,r){return{update:()=>{const a=[],c=n.query(Ur,Bt);for(const l of c){l.get_column(Bt,"x"),l.get_column(Bt,"z");const u=l.entity_ids;for(let h=0;h<l.entity_count;h++){const f=u[h];let d=0,_=0;i()&&(d-=1),s()&&(d+=1),t()&&(_+=1),e()&&(_-=1),d+=r().x,_+=r().y,a.push({entityId:f,moveX:d,moveZ:_})}}for(const{entityId:l,moveX:u,moveZ:h}of a){const f=l;n.set_field(f,Bt,"x",u),n.set_field(f,Bt,"z",h)}},dispose:()=>{}}}function cS(n){return cs(e=>({update:i=>{const s=n.resource(ta),o=n.query(ri).archetypes[0],a=o?{width:o.get_column(ri,"width")[0],length:o.get_column(ri,"length")[0],netHeight:o.get_column(ri,"netHeight")[0]}:void 0;let c=0,l=!1;const u=1,h=n.query(Qe);if(h.archetypes.length>0){const p=h.archetypes[0],y=p.get_column(Qe,"phase");c=p.get_column(Qe,"serverPlayer")[0],y[0],l=y[0]===u}let f={x:0,z:0};const d=n.query(me,Ve,Ii);if(d.archetypes.length>0){const p=d.archetypes[0],y=p.get_column(me,"x"),M=p.get_column(me,"y"),S=p.get_column(me,"z"),w=p.get_column(Ve,"x"),T=p.get_column(Ve,"y"),R=p.get_column(Ve,"z");f={x:y[0],y:M[0],z:S[0]},w[0],T[0],R[0]}const _=(p,y)=>{const M=p.get_column(me,"x"),S=p.get_column(me,"y"),w=p.get_column(me,"z"),T=p.get_column(Ve,"x"),R=p.get_column(Ve,"y"),g=p.get_column(Ve,"z"),E=p.get_column(Bt,"x"),U=p.get_column(Bt,"z"),C=p.get_column(Bt,"jump"),D=p.get_column(Ct,"playerType"),L=p.get_column(Ct,"facingForward"),N=p.entity_ids,I=p.get_column(oi,"side");for(let z=0;z<p.entity_count;z++){const F=N[z],$={x:M[z],y:S[z],z:w[z]},J={x:T[z],y:R[z],z:g[z]},ie={x:E[z],z:U[z],jump:C[z]},se={playerType:D[z],facingForward:L[z]};let ee=$.x,Ue=$.y,We=$.z,Xe=J.x,Z=J.y,oe=J.z;const ce=se.playerType===c;let De=I[z];if(l&&ce||(ee+=ie.x*5.25*i,We+=ie.z*5.25*i,Xe=ie.x*5.25,oe=ie.z*5.25,ie.x>.1?De=-1:ie.x<-.1&&(De=1)),f.x-$.x,f.z-$.z,Ue>0&&(Z+=s.get("y")*i),ee+=Xe*i,Ue+=Z*i,We+=oe*i,Ue<=0&&(Ue=0,Z=0),a){const Be=.5*a.width,et=.5*a.length,Le=.25;ee<-Be+Le&&(ee=-Be+Le),ee>Be-Le&&(ee=Be-Le),se.facingForward===1?(We>et-Le&&(We=et-Le),We<Le&&(We=Le)):(We<-et+Le&&(We=-et+Le),We>-Le&&(We=-Le))}const Se=F;n.set_field(Se,me,"x",ee),n.set_field(Se,me,"y",Ue),n.set_field(Se,me,"z",We),n.set_field(Se,Ve,"x",Xe),n.set_field(Se,Ve,"y",Z),n.set_field(Se,Ve,"z",oe),n.set_field(Se,oi,"side",De)}},v=n.query(me,Ve,Bt,Ct,oi,Ur);for(const p of v.archetypes)_(p);const m=n.query(me,Ve,Bt,Ct,oi,is);for(const p of m.archetypes)_(p)},dispose:e}))}class uS{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t)}off(e,t){const i=this.listeners.get(e);if(i){const s=i.indexOf(t);s>-1&&i.splice(s,1)}}emit(e,t){const i=this.listeners.get(e);i&&i.forEach(s=>s(t))}}const Cn=new uS;function hS(n,e,t){return cs(i=>{let s=0,r=!0;return{update:a=>{const c=n.resource(ta);s>0&&(s-=a);const l=[];for(const u of n.query(me,Ve,Ii,Of)){const h=u.get_column(me,"x"),f=u.get_column(me,"y"),d=u.get_column(me,"z"),_=u.get_column(Ve,"x"),v=u.get_column(Ve,"y"),m=u.get_column(Ve,"z"),p=u.get_column(Ii,"size"),y=u.entity_ids;for(let M=0;M<u.entity_count;M++){const S=y[M],w={x:h[M],y:f[M],z:d[M]},T={x:_[M],y:v[M],z:m[M]},R={size:p[M]};let g=T.x,E=T.y,U=T.z;g+=c.get("x")*a,E+=c.get("y")*a,U+=c.get("z")*a;let C=w.x+g*a,D=w.y+E*a,L=w.z+U*a;const N=R.size*.5;D<N&&(D=N,E=-E*.7,U=U*.7,Math.abs(E)<.3&&(E=0),r&&Cn.emit("ballBounce",{z:L,y:D})),r=D>N;const I=n.query(Qe);let z=!1;if(I.archetypes.length>0&&I.archetypes[0].get_column(Qe,"phase")[0]!==2&&(z=!0),s<=0&&!z)for(const F of n.query(me,Ve,Ct,oi)){const $=F.get_column(me,"x"),J=F.get_column(me,"y"),ie=F.get_column(me,"z"),se=F.get_column(Ve,"x"),ee=F.get_column(Ct,"playerType"),Ue=F.get_column(Ct,"facingForward"),We=F.get_column(oi,"side");for(let Xe=0;Xe<F.entity_count;Xe++){const Z=$[Xe],oe=J[Xe],ce=ie[Xe],De=se[Xe],Se=ee[Xe],Be=Ue[Xe],Le=We[Xe]*.5,j=Z+Le,te=oe+.5,Q=ce+(Be===1?-.4:.4),pe=.8,P=C-j,Ne=D-te,ge=L-Q;if(Math.sqrt(P*P+Ne*Ne+ge*ge)<pe+N+.3){const X=Se===0?1:-1,K=De*.5,ae=1+.7*.5,Ae=j+P*.5,Fe=te+.3;g=(C-Ae)*.8+K,E=4.5*ae,U=X*6*ae,D=Fe+N,s=.3,Cn.emit("ballHit",{player:Se});break}const le=C-w.x,A=D-w.y,x=L-w.z,O=Math.sqrt(le*le+A*A+x*x);if(O>.01){const X=Math.max(0,Math.min(1,((j-w.x)*le+(te-w.y)*A+(Q-w.z)*x)/(O*O))),K=w.x+X*le,q=w.y+X*A,Me=w.z+X*x,ae=K-j,Ae=q-te,Fe=Me-Q,ne=Math.sqrt(ae*ae+Ae*Ae+Fe*Fe);if(ne<pe+N+.3){const ue=Se===0?1:-1,Te=1-ne/(pe+N+.3),we=De*.5,B=1+.7*.5;g=ae/ne*.8*Te+we,E=1.5*B,U=ue*6*B,D=Math.max(D,te+pe+N+.2),s=.3,Cn.emit("ballHit",{player:Se});break}}}}l.push({entityId:S,newPosX:C,newPosY:D,newPosZ:L,newVelX:g,newVelY:E,newVelZ:U})}}for(const{entityId:u,newPosX:h,newPosY:f,newPosZ:d,newVelX:_,newVelY:v,newVelZ:m}of l){const p=u;n.set_field(p,me,"x",h),n.set_field(p,me,"y",f),n.set_field(p,me,"z",d),n.set_field(p,Ve,"x",_),n.set_field(p,Ve,"y",v),n.set_field(p,Ve,"z",m)}},dispose:i}})}const Ya=0,$a=1,fS=2;function dS(n,e,t,i,s,r){return cs(o=>{let a=!1,c=0;return{update:u=>{const h=n.query(me,Ct),f=n.query(me,Ve),d=n.query(Qe);if(d.archetypes.length===0)return;const _=d.archetypes[0],v=_.get_column(Qe,"phase"),m=_.get_column(Qe,"serverPlayer"),p=_.get_column(Qe,"throwTime"),y=_.entity_ids[0],M=v[0],S=m[0];p[0];let w={x:0,y:0,z:0},T={x:0,y:0,z:0};for(const E of h){const U=E.get_column(me,"x"),C=E.get_column(me,"y"),D=E.get_column(me,"z"),L=E.get_column(Ct,"playerType");for(let N=0;N<E.entity_count;N++)if(L[N]===S){w={x:U[N],y:C[N],z:D[N]};break}}for(const E of f){const U=E.get_column(me,"x"),C=E.get_column(me,"y"),D=E.get_column(me,"z"),L=E.get_column(Ve,"x"),N=E.get_column(Ve,"y"),I=E.get_column(Ve,"z");T={x:U[0],y:C[0],z:D[0]},L[0],N[0],I[0]}if(M===$a){const E=T.x-w.x,U=T.z-w.z;Math.sqrt(E*E+U*U)<.5&&T.y<w.y+.3&&(n.set_field(y,Qe,"phase",Ya),n.set_field(y,Qe,"throwTime",0))}if(M===Ya){const E=n.query(me);if(E.archetypes.length>0){const C=E.archetypes[0].entity_ids[0],D=S===0?-.5:.5;n.set_field(C,me,"x",w.x+D),n.set_field(C,me,"y",w.y+.8),n.set_field(C,me,"z",w.z)}}const R=e()&&!a,g=r();if(a=e(),R&&(c=s(),M===Ya&&(n.set_field(y,Qe,"phase",$a),n.set_field(y,Qe,"throwTime",0),n.set_field(f.archetypes[0].entity_ids[0],me,"x",w.x),n.set_field(f.archetypes[0].entity_ids[0],me,"y",w.y+1.5),n.set_field(f.archetypes[0].entity_ids[0],me,"z",w.z),n.set_field(f.archetypes[0].entity_ids[0],Ve,"x",0),n.set_field(f.archetypes[0].entity_ids[0],Ve,"y",4),n.set_field(f.archetypes[0].entity_ids[0],Ve,"z",0))),g&&M===$a){n.set_field(y,Qe,"phase",fS);const E=t(),C=1+c*.375,D=4*E+(Math.random()-.5)*1,L=(3+Math.random()*2)*C,N=(S===0?8:-8)*C;n.set_field(f.archetypes[0].entity_ids[0],Ve,"x",D),n.set_field(f.archetypes[0].entity_ids[0],Ve,"y",L),n.set_field(f.archetypes[0].entity_ids[0],Ve,"z",N),Cn.emit("ballHit",{player:S});const I=n.query(me,Ct);for(const z of I){const F=z.get_column(me,"x"),$=z.get_column(me,"y"),J=z.get_column(me,"z"),ie=z.get_column(Ct,"playerType");for(let se=0;se<z.entity_count;se++)if(ie[se]===S){const ee=z.entity_ids[se];n.set_field(ee,me,"x",F[se]),n.set_field(ee,me,"y",$[se]),n.set_field(ee,me,"z",J[se]);break}}}},dispose:o}})}const So=0,ih=2,sh=23.77,rh=10.97,oh=["0","15","30","40","ADV"];function pS(n,e,t,i){return cs(s=>{let r=0,o=0;const[a,c]=rt(0),[l,u]=rt(0),[h,f]=rt(0),d=()=>{e&&e(a(),l(),h()),_()},_=()=>{const w=a(),T=l();if(w>=6){v(0);return}if(T>=6){v(1);return}},v=w=>{console.log(`Player ${w} wins the game!`),c(0),u(0),t&&t(w),i&&i()},m=()=>{const w=a(),T=l();let R,g;return w>=4&&T>=4?w===T?(R="40",g="40"):w>T?(R="ADV",g="40"):(R="40",g="ADV"):(R=oh[Math.min(w,4)],g=oh[Math.min(T,4)]),{p0:R,p1:g,server:h()}},p=w=>{const T=n.query(Qe);if(T.archetypes.length===0)return;const R=T.archetypes[0],g=R.get_column(Qe,"phase"),E=R.get_column(Qe,"serverPlayer"),U=R.entity_ids[0],C=g[0],D=E[0];if(C!==ih)return;const L=w.z<0,N=w.z>0;if(L&&(r++,r>=2)){u(l()+1),f(1-D),d();const I=h();n.set_field(U,Qe,"phase",So),n.set_field(U,Qe,"serverPlayer",I),M(n,D,I,a(),l());return}if(N&&(o++,o>=2)){c(a()+1),f(1-D),d();const I=h();n.set_field(U,Qe,"phase",So),n.set_field(U,Qe,"serverPlayer",I),M(n,D,I,a(),l());return}};Cn.on("ballBounce",p);const y=()=>{r=0,o=0};Cn.on("ballHit",y);const M=(w,T,R,g,E)=>{const U=w.query(me,Ct);let C={x:0,z:0};for(const L of U){const N=L.get_column(me,"x"),I=L.get_column(me,"y"),z=L.get_column(me,"z"),F=L.get_column(Ct,"playerType");for(let $=0;$<L.entity_count;$++)if(F[$]===R){C={x:N[$],y:I[$],z:z[$]};break}}const D=w.query(me,Ve);if(D.archetypes.length>0){const N=D.archetypes[0].entity_ids[0];w.set_field(N,me,"x",C.x),w.set_field(N,me,"y",.1),w.set_field(N,me,"z",C.z),w.set_field(N,Ve,"x",0),w.set_field(N,Ve,"y",0),w.set_field(N,Ve,"z",0)}r=0,o=0};return{update:w=>{const T=n.query(Qe);if(T.archetypes.length===0)return;const R=T.archetypes[0],g=R.get_column(Qe,"phase"),E=R.get_column(Qe,"serverPlayer"),U=R.entity_ids[0],C=g[0],D=E[0];if(C!==ih){r=0,o=0;return}const L=n.query(me,Ve,Ii);if(L.archetypes.length===0)return;const N=L.archetypes[0],I=N.get_column(me,"x"),z=N.get_column(me,"y"),F=N.get_column(me,"z"),$=N.get_column(Ve,"x"),J=N.get_column(Ve,"y"),ie=N.get_column(Ve,"z");N.entity_ids[0];const se={x:I[0],y:z[0],z:F[0]};if($[0],J[0],ie[0],se.z<-sh/2-.5||se.z>sh/2+.5||se.x<-rh/2-.5||se.x>rh/2+.5)if(se.z<0){u(l()+1),f(1-D),d();const ee=h();n.set_field(U,Qe,"phase",So),n.set_field(U,Qe,"serverPlayer",ee),M(n,D,ee,a(),l())}else{c(a()+1),f(1-D),d();const ee=h();n.set_field(U,Qe,"phase",So),n.set_field(U,Qe,"serverPlayer",ee),M(n,D,ee,a(),l())}},dispose:()=>{Cn.off("ballBounce",p),s()},getScore:m}})}var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Lo={exports:{}},mS=Lo.exports,ah;function _S(){return ah||(ah=1,(function(n,e){(function(t,i){i()})(mS,function(){function t(l,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\uFEFF",l],{type:l.type}):l}function i(l,u,h){var f=new XMLHttpRequest;f.open("GET",l),f.responseType="blob",f.onload=function(){c(f.response,u,h)},f.onerror=function(){console.error("could not download file")},f.send()}function s(l){var u=new XMLHttpRequest;u.open("HEAD",l,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function r(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Mo=="object"&&Mo.global===Mo?Mo:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(l,u,h){var f=o.URL||o.webkitURL,d=document.createElement("a");u=u||l.name||"download",d.download=u,d.rel="noopener",typeof l=="string"?(d.href=l,d.origin===location.origin?r(d):s(d.href)?i(l,u,h):r(d,d.target="_blank")):(d.href=f.createObjectURL(l),setTimeout(function(){f.revokeObjectURL(d.href)},4e4),setTimeout(function(){r(d)},0))}:"msSaveOrOpenBlob"in navigator?function(l,u,h){if(u=u||l.name||"download",typeof l!="string")navigator.msSaveOrOpenBlob(t(l,h),u);else if(s(l))i(l,u,h);else{var f=document.createElement("a");f.href=l,f.target="_blank",setTimeout(function(){r(f)})}}:function(l,u,h,f){if(f=f||open("","_blank"),f&&(f.document.title=f.document.body.innerText="downloading..."),typeof l=="string")return i(l,u,h);var d=l.type==="application/octet-stream",_=/constructor/i.test(o.HTMLElement)||o.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||d&&_||a)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var M=m.result;M=v?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),f?f.location.href=M:location=M,f=null},m.readAsDataURL(l)}else{var p=o.URL||o.webkitURL,y=p.createObjectURL(l);f?f.location=y:location.href=y,f=null,setTimeout(function(){p.revokeObjectURL(y)},4e4)}});o.saveAs=c.saveAs=c,n.exports=c})})(Lo)),Lo.exports}var gS=_S();class zr{inputSize;hiddenSizes;outputSize;weights1;biases1;weights2;biases2;constructor(e){this.inputSize=e.inputSize,this.hiddenSizes=e.hiddenSizes,this.outputSize=e.outputSize,this.weights1=this.createMatrix(this.inputSize,this.hiddenSizes[0]),this.biases1=new Array(this.hiddenSizes[0]).fill(0),this.weights2=this.createMatrix(this.hiddenSizes[0],this.outputSize),this.biases2=new Array(this.outputSize).fill(0),this.initializeWeights()}createMatrix(e,t){return Array.from({length:e},()=>Array(t).fill(0))}initializeWeights(){const e=Math.sqrt(2/this.inputSize);for(let i=0;i<this.weights1.length;i++)for(let s=0;s<this.weights1[i].length;s++)this.weights1[i][s]=(Math.random()-.5)*2*e;const t=Math.sqrt(2/this.hiddenSizes[0]);for(let i=0;i<this.weights2.length;i++)for(let s=0;s<this.weights2[i].length;s++)this.weights2[i][s]=(Math.random()-.5)*2*t}relu(e){return Math.max(0,e)}reluDeriv(e){return e>0?1:0}tanh(e){return Math.tanh(e)}sigmoid(e){return 1/(1+Math.exp(-Math.max(-500,Math.min(500,e))))}forward(e){const t=new Array(this.hiddenSizes[0]).fill(0);for(let s=0;s<this.hiddenSizes[0];s++){let r=this.biases1[s];for(let o=0;o<this.inputSize;o++)r+=e[o]*this.weights1[o][s];t[s]=this.relu(r)}const i=new Array(this.outputSize).fill(0);for(let s=0;s<this.outputSize;s++){let r=this.biases2[s];for(let o=0;o<this.hiddenSizes[0];o++)r+=t[o]*this.weights2[o][s];i[s]=this.tanh(r)}return i}train(e,t,i){const s=new Array(this.hiddenSizes[0]).fill(0);for(let c=0;c<this.hiddenSizes[0];c++){let l=this.biases1[c];for(let u=0;u<this.inputSize;u++)l+=e[u]*this.weights1[u][c];s[c]=this.relu(l)}const r=new Array(this.outputSize).fill(0);for(let c=0;c<this.outputSize;c++){let l=this.biases2[c];for(let u=0;u<this.hiddenSizes[0];u++)l+=s[u]*this.weights2[u][c];r[c]=this.tanh(l)}const o=new Array(this.outputSize).fill(0);for(let c=0;c<this.outputSize;c++)o[c]=(t[c]-r[c])*(1-r[c]*r[c]);const a=new Array(this.hiddenSizes[0]).fill(0);for(let c=0;c<this.hiddenSizes[0];c++){let l=0;for(let u=0;u<this.outputSize;u++)l+=o[u]*this.weights2[c][u];a[c]=l*this.reluDeriv(s[c])}for(let c=0;c<this.outputSize;c++){this.biases2[c]+=i*o[c];for(let l=0;l<this.hiddenSizes[0];l++)this.weights2[l][c]+=i*o[c]*s[l]}for(let c=0;c<this.hiddenSizes[0];c++){this.biases1[c]+=i*a[c];for(let l=0;l<this.inputSize;l++)this.weights1[l][c]+=i*a[c]*e[l]}}toJSON(){return{inputSize:this.inputSize,hiddenSizes:this.hiddenSizes,outputSize:this.outputSize,weights1:this.weights1,biases1:this.biases1,weights2:this.weights2,biases2:this.biases2}}static fromJSON(e){const t=new zr({inputSize:e.inputSize,hiddenSizes:e.hiddenSizes,outputSize:e.outputSize});return t.weights1=e.weights1,t.biases1=e.biases1,t.weights2=e.weights2,t.biases2=e.biases2,t}}const vS=16,xS=3,yS=32;let Hn=null;const zf="tennis-nn";async function Vf(){try{return navigator.storage?.getDirectory?await navigator.storage.getDirectory():null}catch{return null}}async function kf(n){try{const e=await Vf();if(!e)return!1;const i=await(await e.getFileHandle(zf,{create:!0})).createWritable();return await i.write(n),await i.close(),!0}catch{return!1}}async function SS(){try{const n=await Vf();return n?await(await(await n.getFileHandle(zf)).getFile()).text():null}catch{return null}}async function MS(){const n=await SS();if(n)try{const e=JSON.parse(n),t=zr.fromJSON(e);Gf(t)}catch{}}async function ES(){if(!Hn)return;const n=JSON.stringify(Hn.toJSON());await kf(n)}function bS(){return Hn||(Hn=new zr({inputSize:vS,hiddenSizes:[yS],outputSize:xS})),Hn}function Gf(n){Hn=n}function TS(){if(!Hn)return;const n=JSON.stringify(Hn.toJSON()),e=new Blob([n],{type:"application/json"});gS.saveAs(e,"tennis-nn.json"),kf(n)}function wS(n){const e=new FileReader;e.onload=t=>{try{const i=JSON.parse(t.target?.result),s=zr.fromJSON(i);Gf(s)}catch(i){console.error("Failed to load neural network:",i)}},e.readAsText(n)}const Os=[],AS=1e4;function RS(n,e){Os.length>=AS&&Os.shift(),Os.push({input:[...n],target:[...e]})}let Za=0;function CS(n,e){if(!(!Hn||Os.length<e)){for(let t=0;t<e;t++){const i=Math.floor(Math.random()*Os.length),s=Os[i];Hn.train(s.input,s.target,n)}Za++,Za>=600&&(Za=0,ES())}}function PS(n,e,t,i,s,r,o,a,c,l,u){const h=l===0?c<0:c>0,f=l===0?r<0:r>0;return[n/10,e/5,t/12,i/10,s/5,r/12,o/15,a/15,c/15,u/20,h?1:0,f?1:0,l,n>0?1:-1,s>e+1?1:0,Math.abs(r-t)]}const Ja=0,lh=1,ja=2;function DS(n,e,t){if(e.z>=0)return null;const i=.05,s=e.y,r=n.y,a=.5*t,c=s,l=r-i,u=c*c-4*a*l;if(u<0)return null;const h=(-c-Math.sqrt(u))/(2*a);return h<0?null:{x:n.x+e.x*h,z:n.z+e.z*h,time:h}}let Hf=()=>!1,Wf=()=>!1;function LS(n,e){Hf=n,Wf=e}function IS(n,e,t,i,s,r,o){let a=0,c=0,l=0;const u=r===0?s.z>0:s.z<0,f=(r===0?i.z<0:i.z>0)&&(r===0?s.z<0:s.z>0),d=i.y<3;if(f)if(d){const p=i.z+(r===0?-.5:.5)-t;Math.abs(p)>.2&&(c=p>0?1:-1)}else{const m=DS(i,s,o);if(m){const y=(r===0?Math.max(-5,Math.min(-.5,m.z-.5)):Math.min(5,Math.max(.5,m.z+.5)))-t;Math.abs(y)>.3&&(c=y>0?1:-1)}else c=r===0?-1:1}else if(u){const p=(r===0?-4:4)-t;Math.abs(p)>.3&&(c=p>0?1:-1)}else{const p=(r===0?-3:3)-t;Math.abs(p)>.3&&(c=p>0?1:-1)}if(f||(r===0?i.z>0:i.z<0)){const m=i.x-n;Math.abs(m)>.2&&(a=m>0?1:-1)}const _=i.y>e+.5&&i.y<e+2.5,v=Math.abs(i.z-t)<1.5&&Math.abs(i.x-n)<1;return _&&v&&(l=1),{moveX:a,moveZ:c,jump:l}}function US(n){return cs(e=>{let t=0,i=!1;return{update:r=>{const a=n.resource(ta).get("y");i=Wf(),t>0&&(t-=r);const c=n.query(me,Ve,Bt,Ct,is),l=n.query(me,Ve,Ii),u=n.query(Qe);let h={x:0,y:0,z:0},f={x:0,y:0,z:0};for(const y of l){const M=y.get_column(me,"x"),S=y.get_column(me,"y"),w=y.get_column(me,"z"),T=y.get_column(Ve,"x"),R=y.get_column(Ve,"y"),g=y.get_column(Ve,"z");y.entity_count>0&&(h={x:M[0],y:S[0],z:w[0]},f={x:T[0],y:R[0],z:g[0]})}let d=Ja,_=0,v=null;if(u.archetypes.length>0){const y=u.archetypes[0],M=y.get_column(Qe,"phase"),S=y.get_column(Qe,"serverPlayer");d=M[0],_=S[0],v=y.entity_ids[0]}const m=Hf(),p=m?bS():null;for(const y of c){const M=y.get_column(me,"x"),S=y.get_column(me,"y"),w=y.get_column(me,"z"),T=y.get_column(Ct,"playerType"),R=y.entity_ids;for(let g=0;g<y.entity_count;g++){const E=T[g],U=w[g],C=E===_;if(C&&t<=0&&d!==ja){if(d===Ja){const D=R[g];if(n.set_field(D,Bt,"x",0),n.set_field(D,Bt,"z",0),v){n.set_field(v,Qe,"phase",lh),n.set_field(v,Qe,"throwTime",0);const L={x:M[g],y:S[g],z:w[g]};for(const N of l){const I=N.entity_ids[0];n.set_field(I,me,"x",L.x),n.set_field(I,me,"y",L.y+1.5),n.set_field(I,me,"z",L.z),n.set_field(I,Ve,"x",0),n.set_field(I,Ve,"y",4),n.set_field(I,Ve,"z",0)}}}else if(d===lh){const D=h.x-M[g],L=h.z-w[g];if(Math.sqrt(D*D+L*L)<.5&&h.y>.5&&h.y<3&&v){n.set_field(v,Qe,"phase",ja);for(const I of l){const z=I.entity_ids[0],F=(Math.random()-.5)*1.5,$=3+Math.random()*1.5,J=E===0?8:-8;n.set_field(z,Ve,"x",F),n.set_field(z,Ve,"y",$),n.set_field(z,Ve,"z",J)}t=2}}}if(!C||d===ja||d===Ja){const D=M[g],L=S[g];let N=0,I=0,z=0;const F=PS(D,L,U,h.x,h.y,h.z,f.x,f.y,f.z,E,a),$=IS(D,L,U,h,f,E,a);if(p&&m){const ie=p.forward(F);N=ie[0]>.3?1:ie[0]<-.3?-1:0,I=ie[1]>.3?1:ie[1]<-.3?-1:0,z=ie[2]>.3?1:0,i&&(Math.abs(N-$.moveX)>.1||Math.abs(I-$.moveZ)>.1||z!==$.jump)&&RS(F,[$.moveX,$.moveZ,$.jump])}else N=$.moveX,I=$.moveZ,z=$.jump;const J=R[g];n.set_field(J,Bt,"x",N),n.set_field(J,Bt,"z",I),n.set_field(J,Bt,"jump",z)}}}},dispose:e}})}function NS(n){const e=new(window.AudioContext||window.webkitAudioContext);let t=!1,i=null,s=null;async function r(){function u(h,f){const d=e.sampleRate,_=Math.ceil(h*d),v=new OfflineAudioContext(2,_,d),m=v.destination;return f(v,m),v.startRendering()}i=await u(.12,(h,f)=>{const v=h.sampleRate*.02,m=h.createBuffer(1,v,h.sampleRate),p=m.getChannelData(0);for(let D=0;D<v;D++)p[D]=Math.random()*2-1;const y=h.createBufferSource();y.buffer=m;const M=h.createGain();M.gain.setValueAtTime(.8,0),M.gain.exponentialRampToValueAtTime(.001,0+.015);const S=h.createBiquadFilter();S.type="highpass",S.frequency.value=2e3,y.connect(S),S.connect(M);const w=h.createOscillator();w.type="sine",w.frequency.setValueAtTime(180,0),w.frequency.exponentialRampToValueAtTime(80,0+.12);const T=h.createOscillator();T.type="triangle",T.frequency.setValueAtTime(350,0),T.frequency.exponentialRampToValueAtTime(120,0+.12*.5);const R=h.createGain();R.gain.setValueAtTime(.6,0),R.gain.exponentialRampToValueAtTime(.001,0+.12);const g=h.createGain();g.gain.setValueAtTime(.3,0),g.gain.exponentialRampToValueAtTime(.001,0+.12*.4);const E=h.createBiquadFilter();E.type="lowpass",E.frequency.setValueAtTime(1500,0),E.frequency.exponentialRampToValueAtTime(400,0+.12);const U=h.createDynamicsCompressor();U.threshold.value=-20,U.knee.value=10,U.ratio.value=8,U.attack.value=.001,U.release.value=.1;const C=h.createGain();C.gain.setValueAtTime(.9,0),M.connect(E),w.connect(R),T.connect(g),R.connect(E),g.connect(E),E.connect(C),C.connect(U),U.connect(f),y.start(0),y.stop(0+.02),w.start(0),w.stop(0+.12),T.start(0),T.stop(0+.12*.5)}),s=await u(.2,(h,f)=>{const v=h.sampleRate*.015,m=h.createBuffer(1,v,h.sampleRate),p=m.getChannelData(0);for(let N=0;N<v;N++)p[N]=Math.random()*2-1;const y=h.createBufferSource();y.buffer=m;const M=h.createGain();M.gain.setValueAtTime(.5,0),M.gain.exponentialRampToValueAtTime(.001,0+.012);const S=h.createBiquadFilter();S.type="bandpass",S.frequency.value=3e3,S.Q.value=1,y.connect(S),S.connect(M);const w=h.createOscillator();w.type="sine",w.frequency.setValueAtTime(250,0),w.frequency.exponentialRampToValueAtTime(100,0+.2);const T=h.createOscillator();T.type="triangle",T.frequency.setValueAtTime(500,0),T.frequency.exponentialRampToValueAtTime(180,0+.2*.3);const R=h.createOscillator();R.type="square",R.frequency.setValueAtTime(120,0),R.frequency.exponentialRampToValueAtTime(60,0+.2);const g=h.createGain();g.gain.setValueAtTime(.5,0),g.gain.exponentialRampToValueAtTime(.001,0+.2);const E=h.createGain();E.gain.setValueAtTime(.25,0),E.gain.exponentialRampToValueAtTime(.001,0+.2*.3);const U=h.createGain();U.gain.setValueAtTime(.15,0),U.gain.exponentialRampToValueAtTime(.001,0+.2);const C=h.createBiquadFilter();C.type="lowpass",C.frequency.setValueAtTime(4e3,0),C.frequency.exponentialRampToValueAtTime(800,0+.2);const D=h.createDynamicsCompressor();D.threshold.value=-18,D.knee.value=12,D.ratio.value=10,D.attack.value=.001,D.release.value=.08;const L=h.createGain();L.gain.setValueAtTime(.8,0),M.connect(C),w.connect(g),T.connect(E),R.connect(U),g.connect(C),E.connect(C),U.connect(C),C.connect(L),L.connect(D),D.connect(f),y.start(0),y.stop(0+.015),w.start(0),w.stop(0+.2),T.start(0),T.stop(0+.2*.3),R.start(0),R.stop(0+.2)}),console.log("Procedural sounds prerendered: bounce and racket hit buffers ready")}r();const o={play:()=>{if(t||!i)return;const u=e;u.state==="suspended"&&u.resume();const h=u.createBufferSource();h.buffer=i,h.connect(u.destination),h.start(0)}},a={play:()=>{if(t||!s)return;const u=e;u.state==="suspended"&&u.resume();const h=u.createBufferSource();h.buffer=s,h.connect(u.destination),h.start(0)}},c=u=>{n()&&o.play()},l=u=>{n()&&a.play()};return Cn.on("ballBounce",c),Cn.on("ballHit",l),{dispose:()=>{t=!0,Cn.off("ballBounce",c),Cn.off("ballHit",l),e.close()}}}var ch=Ui('<div style="width:16px;height:16px;border-radius:50%;background:#ffd700;border:2px solid #b8860b">'),FS=Ui("<span style=font-size:14px;color:#ffd700;font-weight:bold>x"),OS=Ui('<div style="position:absolute;top:10px;left:50%;transform:translateX(-50%);background-color:rgba(0, 0, 0, 0.7);color:white;padding:8px 15px;border-radius:5px;font-family:Arial, sans-serif;font-size:14px;display:flex;align-items:center;gap:10px;z-index:100"><label style=display:flex;align-items:center;gap:4px;cursor:pointer><input type=checkbox><span>Sound</span></label><span style=color:#888>|</span><label style=display:flex;align-items:center;gap:4px;cursor:pointer><input type=checkbox><span>AI vs AI</span></label><span style=color:#888>|</span><label style=display:flex;align-items:center;gap:4px;cursor:pointer><input type=checkbox><span>Use NN</span></label><button style="background:#444;color:white;border:none;padding:4px 8px;border-radius:3px;cursor:pointer;font-size:12px">Save NN</button><button style="background:#444;color:white;border:none;padding:4px 8px;border-radius:3px;cursor:pointer;font-size:12px">Load NN</button><input type=file accept=.json style=display:none>'),BS=Ui('<div style="position:absolute;top:60px;left:50%;transform:translateX(-50%);background-color:rgba(0, 0, 0, 0.7);color:white;padding:15px 30px;border-radius:10px;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;text-align:center;display:flex;flex-direction:column;gap:10px"><div style=display:flex;gap:40px><div><div style=font-size:14px;color:#aaa>P0</div><div></div><div style=display:flex;gap:4px;justify-content:center;margin-top:4px;flex-wrap:wrap;max-width:60px></div></div><div style=font-size:20px;color:#888>:</div><div><div style=font-size:14px;color:#aaa>P1</div><div></div><div style=display:flex;gap:4px;justify-content:center;margin-top:4px;flex-wrap:wrap;max-width:60px></div></div></div><div style=font-size:12px;color:#ffd700>Serving: P'),zS=Ui("<canvas style=width:100%;height:100%;position:absolute;top:0;left:0;z-index:0>");const[uh,hh]=rt(0),[fh,dh]=rt(0),[VS,ph]=rt(0),[Xf,kS]=rt(0),[qf,GS]=rt(0),[Yf,HS]=rt(!0),[Io,WS]=rt(!1),[ic,XS]=rt(!1);let Ka;const qS=["0","15","30","40","ADV"];function mh(n,e){return n>=4&&e>=4?n===e?"40":n>e?"ADV":"40":qS[Math.min(n,4)]}function _h(n){const e=[];if(n<=4)for(let t=0;t<n;t++)e.push(ch());else e.push((()=>{var t=FS(),i=t.firstChild;return Ji(t,n,i),t})()),e.push(ch());return e}function YS(){return[(()=>{var n=OS(),e=n.firstChild,t=e.firstChild,i=e.nextSibling,s=i.nextSibling,r=s.firstChild,o=s.nextSibling,a=o.nextSibling,c=a.firstChild,l=a.nextSibling,u=l.nextSibling,h=u.nextSibling;t.addEventListener("change",d=>HS(d.target.checked)),r.addEventListener("change",d=>WS(d.target.checked)),c.addEventListener("change",d=>XS(d.target.checked)),l.$$click=()=>TS(),u.$$click=()=>Ka?.click(),h.addEventListener("change",d=>{const _=d.target.files?.[0];_&&wS(_)});var f=Ka;return typeof f=="function"||Array.isArray(f)?uc(()=>f,h):Ka=h,ss(Yf,d=>{t.checked=d}),ss(Io,d=>{r.checked=d}),ss(ic,d=>{c.checked=d}),n})(),(()=>{var n=BS(),e=n.firstChild,t=e.firstChild,i=t.firstChild,s=i.nextSibling,r=s.nextSibling,o=t.nextSibling,a=o.nextSibling,c=a.firstChild,l=c.nextSibling,u=l.nextSibling,h=e.nextSibling;return h.firstChild,Ji(s,()=>mh(uh(),fh())),Ji(r,()=>_h(Xf())),Ji(l,()=>mh(fh(),uh())),Ji(u,()=>_h(qf())),Ji(h,VS,null),n})()]}let[rr,$S]=rt(),zt=nS();const wi=Bf({position:new V(0,0,2.5),velocity:new V(0,0,0),playerType:"Melty",facingForward:!0,reactiveEcs:zt.ecs});zt.ecs.add_component(wi,Ur,{});zt.ecs.add_component(wi,Bt,{x:0,z:0,jump:0});zt.ecs.add_component(wi,oi,{side:1});const Rc=Bf({position:new V(0,0,-2.5),velocity:new V(0,0,0),playerType:"Cubey",facingForward:!1,reactiveEcs:zt.ecs});zt.ecs.add_component(Rc,is,{});zt.ecs.add_component(Rc,Bt,{x:0,z:0,jump:0});zt.ecs.add_component(Rc,oi,{side:-1});iS({width:10.97,length:23.77,netHeight:.914,reactiveEcs:zt.ecs});sS({position:Ft(()=>new V(0,.1,2.5)),size:Ft(()=>.1),boundary:Ft(()=>new Zs(new V(-5.5,0,-12),new V(5.5,5,12))),reactiveEcs:zt.ecs});const ZS=zt.ecs.create_entity();zt.ecs.add_component(ZS,Qe,{phase:0,serverPlayer:0,throwTime:0});MS();let[gh,$f]=rt(!1),[vh,Zf]=rt(!1),[xh,Jf]=rt(!1),[yh,jf]=rt(!1),[Sh,Kf]=rt(!1);function JS(){debugger;let n=150,e=Xx({position:Ft(()=>new fe(50,(rr()?.y??0)-50-n)),hitAreaSize:n,outerRingSize:()=>.8*n,knobSize:()=>70}),t=80,i=$x({position:Ft(()=>new fe((rr()?.x??0)-50-t,(rr()?.y??0)-50-t)),size:()=>t,externalPressed:Sh}),s=30,r=150,o=Jx({position:Ft(()=>({x:(rr()?.x??0)-50-s,y:(rr()?.y??0)-50-t-20-r})),width:()=>s,height:()=>r,power:i.power}),a=!1;qc(()=>Io(),f=>{const d=zt.ecs.entity(wi);f?d.hasComponent(is)||(zt.ecs.remove_component(wi,Ur),zt.ecs.add_component(wi,is,{})):d.hasComponent(is)&&(zt.ecs.remove_component(wi,is),zt.ecs.add_component(wi,Ur,{}))});const c=(f,d)=>{const _=lS(f,gh,vh,xh,yh,e.value),v=()=>Sh()||i.pressed(),m=cS(f),p=hS(f);aS(f,d);const y=dS(f,v,()=>(xh()?-1:0)+(yh()?1:0)+e.value().x,()=>(gh()?-1:0)+(vh()?1:0),i.power,()=>a),M=pS(f,(R,g,E)=>{hh(R),dh(g),ph(E)},R=>{R===0?kS(Xf()+1):GS(qf()+1)},()=>{hh(0),dh(0),ph(0)}),S=US(f),w=NS(Yf);LS(ic,Io);const T=[_.dispose,m.dispose,p.dispose,y.dispose,M.dispose,S.dispose,w.dispose];return{update:R=>{a=i.justReleased()||i.justReleasedExternal(),_.update(),S.update(R),m.update(R),p.update(R),y.update(R),M.update(R),ic()&&Io()&&CS(.001,4)},dispose:()=>{T.forEach(R=>R())},tennisRules:M}};let l=Ft(()=>!0),[u,h]=rt();return qc(u,f=>{if(f==null)return;let d=f.getBoundingClientRect();const _=d.width,v=d.height;if(_==0&&v==0){h(void 0),setTimeout(()=>h(f));return}new ResizeObserver(()=>{let D=f.getBoundingClientRect();$S(new fe(D.width,D.height))}).observe(f);const p=new mn(50,_/v,.01,100);p.position.set(0,15,16),p.lookAt(0,0,-2);const y=new Xp,M=new Ym(16777215,.5);y.add(M);const S=new qm(16777215,1);S.position.set(5,10,7),y.add(S);const w=c(zt.ecs,y),T=new Hx({antialias:!0,canvas:f});T.setSize(_,v);let R=0,g=0;const E=1/60,U=.25;let C=D=>{let L=R===0?E:(D-R)/1e3;for(R=D,L>U&&(L=U),g+=L;g>=E;)w.update(E),g-=E;T.render(y,p),l()&&requestAnimationFrame(C)};requestAnimationFrame(C),Ot(()=>{w.dispose(),T.dispose()})}),[(()=>{var f=zS(),d=h;return typeof d=="function"||Array.isArray(d)?uc(()=>d,f):h=f,f})(),cr(YS,{}),cr(e.UI,{}),cr(i.UI,{}),cr(o.UI,{})]}document.body.style.setProperty("overflow","hidden");let Fi=document.createElement("div");Fi.style.setProperty("position","absolute");Fi.style.setProperty("left","0");Fi.style.setProperty("top","0");Fi.style.setProperty("right","0");Fi.style.setProperty("bottom","0");Fi.style.setProperty("background-color","black");document.body.append(Fi);$d(()=>cr(JS,{}),Fi);document.addEventListener("keydown",n=>{switch(n.key){case"ArrowUp":$f(!0);break;case"ArrowDown":Zf(!0);break;case"ArrowLeft":Jf(!0);break;case"ArrowRight":jf(!0);break;case" ":Kf(!0);break}});document.addEventListener("keyup",n=>{switch(n.key){case"ArrowUp":$f(!1);break;case"ArrowDown":Zf(!1);break;case"ArrowLeft":Jf(!1);break;case"ArrowRight":jf(!1);break;case" ":Kf(!1);break}});cc(["click"]);
