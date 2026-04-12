(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Un extends Error{source;constructor(e){super(),this.source=e}}class Ia extends Error{source;constructor(e,t){super(t instanceof Error?t.message:String(t),{cause:t}),this.source=e}}const Ll=0,tr=1,Is=2,wo=4,yi=8,ho=16,Ei=32,fo=64,or=128,Ul=256,La=512,Ut=1,dn=2,ei=4,Es=1,Si=2,Nl=3,_t={},cf={},uf="sp",Ou={},hf=Symbol("refresh");function Bu(n,e){const t=(n.i?.t?n.i.u?.o:n.i?.o)??-1;t>=n.o&&(n.o=t+1);const i=n.o,s=e.l[i];if(s===void 0)e.l[i]=n;else{const r=s.T;r.S=n,n.T=r,s.T=n}i>e.R&&(e.R=i)}function zu(n,e){let t=n.O;t&(yi|wo)||(t&tr?n.O=t&-4|Is|yi:n.O=t|yi,t&ho||Bu(n,e))}function Vu(n,e){let t=n.O;t&(yi|wo|ho)||(n.O=t|ho,Bu(n,e))}function _r(n,e){const t=n.O;if(!(t&(yi|ho)))return;n.O=t&-25;const i=n.o;if(n.T===n)e.l[i]=void 0;else{const s=n.S,r=e.l[i],o=s??r;n===r?e.l[i]=s:n.T.S=s,o.T=n.T}n.T=n,n.S=void 0}function ff(n){if(!n._){n._=!0;for(let e=0;e<=n.R;e++)for(let t=n.l[e];t!==void 0;t=t.S)t.O&yi&&po(t)}}function po(n,e=Is){const t=n.O;if(!((t&(tr|Is))>=e)){n.O=t&-4|e;for(let i=n.I;i!==null;i=i.p)po(i.h,tr);if(n.A!==null)for(let i=n.A;i!==null;i=i.N)for(let s=i.I;s!==null;s=s.p)po(s.h,tr)}}function Qr(n,e){for(n._=!1,n.P=0;n.P<=n.R;n.P++){let t=n.l[n.P];for(;t!==void 0;)t.O&yi?e(t):df(t,n),t=n.l[n.P]}n.R=0}function df(n,e){_r(n,e);let t=n.o;for(let i=n.C;i;i=i.D){const s=i.m,r=s.V||s;r.L&&r.o>=t&&(t=r.o+1)}if(n.o!==t){n.o=t;for(let i=n.I;i!==null;i=i.p)Vu(i.h,e)}}const br=new Set,Wt={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0},zn={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0};let Ot=0,Ie=null,ar=!1,lr=!1;function Tr(n){for(const e of bi){if(e.k||e.U.size>0)continue;const t=e.W[n-1];t.length&&(e.W[n-1]=[],mo(t,n))}}function ts(n){lr=n}function Zi(){ar||(ar=!0,!St.H&&!lr&&queueMicrotask(Ua))}class pf{i=null;G=[[],[]];F=[];created=Ot;addChild(e){this.F.push(e),e.i=this}removeChild(e){const t=this.F.indexOf(e);t>=0&&(this.F.splice(t,1),e.i=null)}notify(e,t,i,s){return this.i?this.i.notify(e,t,i,s):!1}run(e){if(this.G[e-1].length){const t=this.G[e-1];this.G[e-1]=[],mo(t,e)}for(let t=0;t<this.F.length;t++)this.F[t].run?.(e)}enqueue(e,t){e&&(Sn?Zt(Sn).W[e-1].push(t):this.G[e-1].push(t)),Zi()}stashQueues(e){e.G[0].push(...this.G[0]),e.G[1].push(...this.G[1]),this.G=[[],[]];for(let t=0;t<this.F.length;t++){let i=this.F[t],s=e.F[t];s||(s={G:[[],[]],F:[]},e.F[t]=s),i.stashQueues(s)}}restoreQueues(e){this.G[0].push(...e.G[0]),this.G[1].push(...e.G[1]);for(let t=0;t<e.F.length;t++){const i=e.F[t];let s=this.F[t];s&&s.restoreQueues(i)}}}class ti extends pf{H=!1;M=[];$=[];j=new Set;static K;static Y;static B=null;flush(){if(!this.H){this.H=!0;try{if(Qr(Wt,ti.K),Ie){if(!mf(Ie)){let i=Ie;Qr(zn,ti.K),this.M=[],this.$=[],this.j=new Set,Tr(Es),Tr(Si),this.stashQueues(Ie.Z),Ot++,ar=Wt.R>=Wt.P,dc(Ie.M),Ie=null,Oo(null,!0);return}this.M!==Ie.M&&this.M.push(...Ie.M),this.restoreQueues(Ie.Z),br.delete(Ie);const t=Ie;Ie=null,dc(this.M),Oo(t)}else br.size&&Qr(zn,ti.K),Oo();Ot++,ar=Wt.R>=Wt.P,Tr(Es),this.run(Es),Tr(Si),this.run(Si)}finally{this.H=!1}}}notify(e,t,i,s){if(t&Ut){if(i&Ut){const r=s!==void 0?s:e.q;Ie&&r&&!Ie.X.includes(r.source)&&(Ie.X.push(r.source),Zi())}return!0}return!1}initTransition(e){if(e&&(e=ku(e)),!(e&&e===Ie)&&!(!e&&Ie&&Ie.J===Ot)){if(!Ie)Ie=e??{J:Ot,M:[],X:[],$:[],j:new Set,ee:[],Z:{G:[[],[]],F:[]},te:!1};else if(e){const t=Ie;t.te=e,e.ee.push(...t.ee);for(const i of bi)i.ne===t&&(i.ne=e);e.$.push(...t.$);for(const i of t.j)e.j.add(i);br.delete(t),Ie=e}br.add(Ie),Ie.J=Ot;for(let t=0;t<this.M.length;t++){const i=this.M[t];i.ne=Ie,Ie.M.push(i)}this.M=Ie.M;for(let t=0;t<this.$.length;t++){const i=this.$[t];i.ne=Ie,Ie.$.push(i)}this.$=Ie.$;for(const t of bi)t.ne||(t.ne=Ie);for(const t of this.j)Ie.j.add(t);this.j=Ie.j}}}function Ls(n,e=!1){const t=n.ie||Sn,i=n.re!==void 0;for(let s=n.I;s!==null;s=s.p){if(i&&s.h.oe){s.h.O|=Ul;continue}e&&t?(s.h.O|=or,Wu(s.h,t)):e&&(s.h.O|=or,s.h.ie=void 0);const r=s.h;if(r.se===Nl){r.ue||(r.ue=!0,r.ce.enqueue(Si,r.ae));continue}const o=s.h.O&Ei?zn:Wt;o.P>s.h.o&&(o.P=s.h.o),zu(s.h,o)}}function hc(){const n=St.M;for(let e=0;e<n.length;e++){const t=n[e];if(t.le!==_t&&(t.fe=t.le,t.le=_t,t.se&&t.se!==Nl&&(t.ue=!0)),t.Ee&Ut){const i=t.q?.source;i&&!(i.Ee&Ut)&&(t.Ee&=-6,t.q=null)}else t.Ee&=~ei;t.L&&ti.Y(t,!1,!0)}n.length=0}function Oo(n=null,e=!1){let t=!e;if(t&&hc(),e||Gu(St),Wt.R>=Wt.P&&Qr(Wt,ti.K),t){hc();const i=n?n.$:St.$;for(let s=0;s<i.length;s++){const r=i[s];r.ie=void 0,r.le!==_t&&(r.fe=r.le,r.le=_t);const o=r.Te;r.Te=_t,o!==_t&&r.fe!==o&&Ls(r,!0),r.ne=null}i.length=0,n?n.j:St.j;for(const s of bi)(n?s.ne===n:!s.ne)&&(s.k||(s.W[0].length&&mo(s.W[0],Es),s.W[1].length&&mo(s.W[1],Si)),s.de.ie===s&&(s.de.ie=void 0),s.U.clear(),s.W[0].length=0,s.W[1].length=0,bi.delete(s),_o.delete(s.de))}}function Gu(n){for(const e of n.F)e.checkSources?.(),Gu(e)}function fc(n){St.j.add(n),Zi()}function dc(n){for(let e=0;e<n.length;e++)n[e].ne=Ie}const St=new ti;function Ua(){for(;ar;)St.flush()}function mo(n,e){for(let t=0;t<n.length;t++)n[t](e)}function mf(n){if(n.te)return!0;if(n.ee.length)return!1;let e=!0;for(let t=0;t<n.X.length;t++){const i=n.X[t];if(i.Ee&Ut&&i.q?.source===i){e=!1;break}}return e&&(n.te=!0),e}function ku(n){for(;n.te&&typeof n.te=="object";)n=n.te;return n}function _f(n,e){const t=Ie;try{return Ie=ku(n),e()}finally{Ie=t}}const _o=new WeakMap,bi=new Set;function gf(n){let e=_o.get(n);if(e)return Zt(e);const t=n.Se,i=t?.ie?Zt(t.ie):null;return e={de:n,U:new Set,W:[[],[]],k:null,ne:Ie,Re:i},_o.set(n,e),bi.add(e),n.Oe=!1,e}function Zt(n){for(;n.k;)n=n.k;return n}function Hu(n,e){if(n=Zt(n),e=Zt(e),n===e)return n;e.k=n;for(const t of e.U)n.U.add(t);return n.W[0].push(...e.W[0]),n.W[1].push(...e.W[1]),n}function go(n){const e=n.ie;if(!e)return;const t=Zt(e);if(bi.has(t))return t;n.ie=void 0}function Fl(n){return n.Te!==void 0&&n.Te!==_t}function Wu(n,e){const t=Zt(e),i=n.ie;if(i){if(i.k){n.ie=e;return}const s=Zt(i);if(bi.has(s)){s!==t&&!Fl(n)&&(t.Re&&Zt(t.Re)===s?n.ie=e:s.Re&&Zt(s.Re)===t||Hu(t,s));return}}n.ie=e}function Xu(n,e,t){const i=typeof e=="object"&&e!==null,s=i&&fn(()=>e[Symbol.asyncIterator]),r=!s&&i&&fn(()=>typeof e.then=="function");if(!r&&!s)return n._e=null,e;n._e=e;let o;const a=l=>{n._e===e&&(St.initTransition(n.ne),xo(n,l instanceof Un?Ut:dn,l),n.J=Ot)},c=(l,u)=>{if(n._e!==e||n.O&(Is|or))return;St.initTransition(n.ne),Ol(n);const h=go(n);if(h&&h.U.delete(n),t)t(l);else if(n.Te!==void 0)n.Te!==void 0&&n.Te!==_t?n.le=l:(n.fe=l,Ls(n)),n.J=Ot;else if(h){const f=n.fe,p=n.Ie;(!p||!p(l,f))&&(n.fe=l,n.J=Ot,n.pe&&rt(n.pe,l),Ls(n,!0))}else rt(n,()=>l);Zi(),Ua(),u?.()};if(r){let l=!1,u=!0;if(e.then(h=>{u?(o=h,l=!0):c(h)},h=>{u||a(h)}),u=!1,!l)throw St.initTransition(n.ne),new Un(Qe)}if(s){const l=e[Symbol.asyncIterator]();let u=!1;const h=()=>{let p,_=!1,v=!0;return l.next().then(m=>{v?(p=m,_=!0):m.done?(Zi(),Ua()):c(m.value,h)},m=>{v||a(m)}),v=!1,_&&!p.done?(o=p.value,u=!0,h()):_&&p.done},f=h();if(!u&&!f)throw St.initTransition(n.ne),new Un(Qe)}return o}function Ol(n){n.Ee=n.Ee&ei,n.q=null,ur(n),n.he?.()}function xo(n,e,t,i,s){e===dn&&!(t instanceof Ia)&&!(t instanceof Un)&&(t=new Ia(n,t));const r=t instanceof Un&&t.source===n,o=e===Ut&&n.Te!==void 0&&!r,a=o&&Fl(n);if(i||(n.Ee=e|(e!==dn?n.Ee&ei:0),n.q=t,ur(n)),s&&!i&&Wu(n,s),a&&Ie&&t instanceof Un){const u=t.source;Ie.X.includes(u)||Ie.X.push(u)}const c=i||a,l=i||o?void 0:s;if(n.he){c?n.he(e,t):n.he();return}for(let u=n.I;u!==null;u=u.p)u.h.J=Ot,u.h.q!==t&&(!u.h.ne&&St.M.push(u.h),xo(u.h,e,t,c,l));for(let u=n.A;u!==null;u=u.N)for(let h=u.I;h!==null;h=h.p)h.h.J=Ot,h.h.q!==t&&(!h.h.ne&&St.M.push(h.h),xo(h.h,e,t,c,l))}function Bl(n){const e=n.m,t=n.D,i=n.p,s=n.Ae;return i!==null?i.Ae=s:e.Ne=s,s!==null?s.p=i:(e.I=i,i===null&&(e.ge?.(),e.L&&!e.Pe&&!(e.O&Ei)&&xf(e))),t}function xf(n){_r(n,n.O&Ei?zn:Wt);let e=n.C;for(;e!==null;)e=Bl(e);n.C=null,gr(n,!0)}function Bo(n,e){const t=e.Ce;if(t!==null&&t.m===n)return;let i=null;const s=e.O&wo;if(s&&(i=t!==null?t.D:e.C,i!==null&&i.m===n)){e.Ce=i;return}const r=n.Ne;if(r!==null&&r.h===e&&(!s||vf(r,e)))return;const o=e.Ce=n.Ne={m:n,h:e,D:i,Ae:r,p:null};t!==null?t.D=o:e.C=o,r!==null?r.p=o:n.I=o}function vf(n,e){const t=e.Ce;if(t!==null){let i=e.C;do{if(i===n)return!0;if(i===t)break;i=i.D}while(i!==null)}return!1}function qu(n){let e=n.De;for(;e;)e.O|=Ei,e.O&yi&&(_r(e,Wt),zu(e,zn)),qu(e),e=e.ye}function gr(n,e=!1,t){if(n.O&fo)return;e&&(n.O=fo);let i=t?n.ve:n.De;for(;i;){const s=i.ye;if(i.C){const r=i;_r(r,r.O&Ei?zn:Wt);let o=r.C;do o=Bl(o);while(o!==null);r.C=null,r.Ce=null}gr(i,!0),i=s}t?n.ve=null:(n.De=null,n.we=0),yf(n,t)}function yf(n,e){let t=e?n.be:n.me;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){const s=t[i];s.call(s)}else t.call(t);e?n.be=null:n.me=null}}function Sf(n,e){let t=n;for(;t.Ve&&t.i;)t=t.i;if(t.id!=null)return Mf(t.id,t.we++);throw new Error("Cannot get child id from owner without an id")}function Yu(n){return Sf(n)}function Mf(n,e){const t=e.toString(36),i=t.length-1;return n+(i?String.fromCharCode(64+i):"")+t}function jt(){return Qt?Qe:null}function Ef(){return Qe}function bs(n){return Qe&&(Qe.me?Array.isArray(Qe.me)?Qe.me.push(n):Qe.me=[Qe.me,n]:Qe.me=n),n}function nr(n){const e=Qe,t=n?.transparent??!1,i={id:n?.id??(t?e?.id:e?.id!=null?Yu(e):void 0),Ve:t||void 0,t:!0,u:e?.t?e.u:e,De:null,ye:null,me:null,ce:e?.ce??St,Le:e?.Le||Ou,we:0,be:null,ve:null,i:e,dispose(s=!0){gr(i,s)}};if(e){const s=e.De;s===null||(i.ye=s),e.De=i}return i}function Ji(n,e){const t=nr(e);return Ms(t,()=>n(t.dispose))}function $u(n,e,t,i,s){let r=!1;const o=Ro(s?.render?a=>wf(()=>n(a)):n,i,{...s,equals:()=>(o.ue=!o.q,r&&o.ce.enqueue(o.se,zo.bind(o)),!1),lazy:!0});o.ke=i,o.Ue=e,o.xe=t,o.We=void 0,o.se=s?.render?Es:Si,o.he=(a,c)=>{const l=a!==void 0?a:o.Ee,u=c!==void 0?c:o.q;if(l&dn){let h=u;if(o.ce.notify(o,Ut,0),o.se===Si)try{return o.xe?o.xe(h,()=>{o.We?.(),o.We=void 0}):console.error(h)}catch(f){h=f}if(!o.ce.notify(o,dn,dn))throw h}else o.se===Es&&o.ce.notify(o,Ut|dn,l,u)},Mi(o,!0),!s?.defer&&(o.se===Si?o.ce.enqueue(o.se,zo.bind(o)):zo.call(o)),r=!0,bs(()=>o.We?.())}function zo(){if(!(!this.ue||this.O&fo)){this.We?.(),this.We=void 0;try{this.We=this.Ue(this.fe,this.ke)}catch(n){if(this.q=new Ia(this,n),this.Ee|=dn,!this.ce.notify(this,dn,dn))throw n}finally{this.ke=this.fe,this.ue=!1}}}let bf=null;ti.K=Mi;ti.Y=gr;let Qt=!1,Ts=!1,Qe=null,Sn=null,Tf=!1;function Mi(n,e=!1){const t=n.se;e||(n.ne&&(!t||Ie)&&Ie!==n.ne&&St.initTransition(n.ne),_r(n,n.O&Ei?zn:Wt),n.ne||t===Nl?gr(n):(qu(n),n.be=n.me,n.ve=n.De,n.me=null,n.De=null,n.we=0));const i=!!(n.O&or),s=n.Te!==void 0&&n.Te!==_t,r=!!(n.Ee&Ut),o=Qe;Qe=n,n.Ce=null,n.O=wo,n.J=Ot;let a=n.le===_t?n.fe:n.le,c=n.o,l=Qt,u=Sn;if(Qt=!0,i){const h=go(n);h&&(Sn=h)}try{a=Xu(n,n.L(a)),Ol(n);const h=go(n);h&&(h.U.delete(n),ur(h.de))}catch(h){if(h instanceof Un&&Sn){const f=Zt(Sn);f.de!==n&&(f.U.add(n),n.ie=f,ur(f.de))}xo(n,h instanceof Un?Ut:dn,h,void 0,h instanceof Un?n.ie:void 0)}finally{Qt=l,n.O=Ll|(e?n.O&Ul:0),Qe=o}if(!n.q){const h=n.Ce;let f=h!==null?h.D:n.C;if(f!==null){do f=Bl(f);while(f!==null);h!==null?h.D=null:n.C=null}const p=s?n.Te:n.le===_t?n.fe:n.le;if(!n.Ie||!n.Ie(p,a)){const v=s?n.Te:void 0;e||t&&Ie!==n.ne||i?(n.fe=a,s&&i&&(n.Te=a,n.le=a)):n.le=a,s&&!i&&r&&!n.Oe&&(n.Te=a),(!s||i||n.Te!==v)&&Ls(n,i||s)}else if(s)n.le=a;else if(n.o!=c)for(let v=n.I;v!==null;v=v.p)Vu(v.h,v.h.O&Ei?zn:Wt)}Sn=u,(!e||n.Ee&Ut)&&!n.ne&&!(Ie&&s)&&St.M.push(n),n.ne&&t&&Ie!==n.ne&&_f(n.ne,()=>Mi(n))}function Zu(n){if(n.O&tr)for(let e=n.C;e;e=e.D){const t=e.m,i=t.V||t;if(i.L&&Zu(i),n.O&Is)break}(n.O&(Is|or)||n.q&&n.J<Ot&&!n._e)&&Mi(n),n.O=Ll|n.O&Ul}function Ro(n,e,t){const i=t?.transparent??!1,s={id:t?.id??(i?Qe?.id:Qe?.id!=null?Yu(Qe):void 0),Ve:i||void 0,Ie:t?.equals!=null?t.equals:cr,Ge:!!t?.pureWrite,ge:t?.unobserved,me:null,ce:Qe?.ce??St,Le:Qe?.Le??Ou,we:0,L:n,fe:e,o:0,A:null,S:void 0,T:null,C:null,Ce:null,I:null,Ne:null,i:Qe,ye:null,De:null,O:t?.lazy?La:Ll,Ee:ei,J:Ot,le:_t,be:null,ve:null,_e:null,ne:null};s.T=s;const r=Qe?.t?Qe.u:Qe;if(Qe){const o=Qe.De;o===null||(s.ye=o),Qe.De=s}return r&&(s.o=r.o+1),!t?.lazy&&Mi(s,!0),s}function ir(n,e,t=null){const i={Ie:e?.equals!=null?e.equals:cr,Ge:!!e?.pureWrite,Qe:!!e?.Qe,ge:e?.unobserved,fe:n,I:null,Ne:null,J:Ot,V:t,N:t?.A||null,le:_t};return t&&(t.A=i),i}function cr(n,e){return n===e}function fn(n,e){if(!Qt)return n();const t=Qt;Qt=!1;try{return n()}finally{Qt=t}}function Hi(n){let e=Qe;e?.t&&(e=e.u),n.O&La&&(n.O&=~La,Mi(n,!0));const t=n.V||n;if(e&&Qt&&(n.L&&n.O&fo&&Mi(n),Bo(n,e),t.L)){const i=n.O&Ei;t.o>=(i?zn.P:Wt.P)&&(po(e),ff(i?zn:Wt),Zu(t));const s=t.o;s>=e.o&&n.i!==e&&(e.o=s+1)}if(t.Ee&Ut){const i=t.q?.source;if(i&&!(i.Ee&Ut))Ol(t);else if(e&&!(Ts&&t.ne&&Ie!==t.ne))if(Sn){const s=t.ie,r=Zt(Sn);if(s&&Zt(s)===r&&!Fl(t))throw!Qt&&n!==e&&Bo(n,e),t.q}else throw!Qt&&n!==e&&Bo(n,e),t.q;else if(!e&&t.Ee&ei)throw t.q}if(n.L&&n.Ee&dn){if(n.J<Ot)return Mi(n,!0),Hi(n);throw n.q}return n.Te!==void 0&&n.Te!==_t?n.Te:!e||Sn!==null&&(n.Te!==void 0||n.ie||t===n&&Ts||t.Ee&Ut)||n.le===_t||Ts&&n.ne&&Ie!==n.ne?n.fe:n.le}function rt(n,e){n.ne&&Ie!==n.ne&&St.initTransition(n.ne);const t=n.Te!==void 0&&!lr,i=n.Te!==void 0&&n.Te!==_t,s=t?i?n.Te:n.fe:n.le===_t?n.fe:n.le;if(typeof e=="function"&&(e=e(s)),!(!n.Ie||!n.Ie(s,e)||!!(n.Ee&ei)))return t&&i&&n.L&&(Ls(n,!0),Zi()),e;if(t){const o=n.Te===_t;!o&&n.ne&&St.initTransition(n.ne),o&&(n.le=n.fe,St.$.push(n)),n.Oe=!0;const a=gf(n);n.ie=a,n.Te=e}else n.le===_t&&St.M.push(n),n.le=e;return ur(n),n.pe&&rt(n.pe,e),n.J=Ot,Ls(n,t),Zi(),e}function Ms(n,e){const t=Qe,i=Qt;Qe=n,Qt=!1;try{return e()}finally{Qe=t,Qt=i}}function Af(n){const e=n;if(n.Te!==void 0&&n.Te!==_t){if(e.Ee&Ut&&!(e.Ee&ei))return!0;if(n.Se){const t=n.ie?Zt(n.ie):null;return!!(t&&t.U.size>0)}return!0}return n.le!==_t&&!(e.Ee&ei)?!0:!!(e.Ee&Ut&&!(e.Ee&ei))}function ur(n){if(n.Fe){const e=Af(n),t=n.Fe;if(rt(t,e),!e&&t.ie){const i=go(n);if(i&&i.U.size>0){const s=Zt(t.ie);s!==i&&Hu(i,s)}_o.delete(t),t.ie=void 0}}}function wf(n,e=!0){const t=Ts;Ts=e;try{return n()}finally{Ts=t}}function As(n){const e=Hi.bind(null,n);return e.$r=!0,e}function Rf(n,e,t){if(typeof n=="function"){const s=Ro(n,e,t);return[As(s),rt.bind(null,s)]}const i=ir(n,e);return[As(i),rt.bind(null,i)]}function zl(n,e,t){let i=Ro(n,e,t);return As(i)}function Cf(n,e,t,i){$u(n,e.effect||e,e.error,t,i)}function Pf(n,e,t,i){$u(n,e,void 0,t,{render:!0,...i})}function pc(n){return n?.[ws]?.[mt]??n}function ns(n,e,t,i,s){return s&&i in s?s[i]:e&&i in e?e[i]:n[i]}function Df(n,e,t){const i=eh(n,e),s=Object.keys(t);return Array.from(new Set([...i,...s]))}function vs(n,e,t){const i=e?.[ws];if(!i)return;const s=i[Yt],r=i[pt],o=i[dt];let a=i[mt];if(!(n===s&&!r&&!o)){if((i[Ku]||Na).set(n,i[Cn]),i[Yt]=n,i[pt]=void 0,Array.isArray(s)){let c=!1;const l=ns(s,r,a,"length",o);if(n.length&&l&&n[0]&&t(n[0])!=null){let u,h,f,p,_,v,m,d;for(f=0,p=Math.min(l,n.length);f<p&&((v=ns(s,r,a,f,o))===n[f]||v&&n[f]&&t(v)===t(n[f]));f++)vs(n[f],on(v,i),t);const y=new Array(n.length),b=new Map;for(p=l-1,_=n.length-1;p>=f&&_>=f&&((v=ns(s,r,a,p,o))===n[_]||v&&n[_]&&t(v)===t(n[_]));p--,_--)y[_]=v;if(f>_||f>p){for(h=f;h<=_;h++)c=!0,i[mt][h]&&rt(i[mt][h],on(n[h],i));for(;h<n.length;h++){c=!0;const M=on(y[h],i);i[mt][h]&&rt(i[mt][h],M),vs(n[h],M,t)}c&&i[mt][an]&&rt(i[mt][an],void 0),l!==n.length&&i[mt].length&&rt(i[mt].length,n.length);return}for(m=new Array(_+1),h=_;h>=f;h--)v=n[h],d=v&&t(v),u=b.get(d),m[h]=u===void 0?-1:u,b.set(d,h);for(u=f;u<=p;u++)v=ns(s,r,a,u,o),d=v&&t(v),h=b.get(d),h!==void 0&&h!==-1&&(y[h]=v,h=m[h],b.set(d,h));for(h=f;h<n.length;h++)if(h in y){const M=on(y[h],i);i[mt][h]&&rt(i[mt][h],M),vs(n[h],M,t)}else i[mt][h]&&rt(i[mt][h],on(n[h],i));f<n.length&&(c=!0)}else if(n.length)for(let u=0,h=n.length;u<h;u++){const f=ns(s,r,a,u,o);Dn(f)?vs(n[u],on(f,i),t):i[mt][u]&&rt(i[mt][u],n[u])}l!==n.length&&(c=!0,i[mt].length&&rt(i[mt].length,n.length)),c&&i[mt][an]&&rt(i[mt][an],void 0);return}if(a){const c=a[an],l=c?Df(s,r,n):Object.keys(a);for(let u=0,h=l.length;u<h;u++){const f=l[u],p=a[f],_=pc(ns(s,r,a,f,o));let v=pc(n[f]);_!==v&&(!_||!Dn(_)||!Dn(v)||t(_)!=null&&t(_)!==t(v)?(c&&rt(c,void 0),p&&rt(p,Dn(v)?on(v,i):v)):vs(v,on(_,i),t))}}if(a=i[ys]){const c=Object.keys(a);for(let l=0,u=c.length;l<u;l++){const h=c[l];rt(a[h],h in n)}}}}function mc(n,e){return t=>{if(t==null)throw new Error("Cannot reconcile null or undefined state");const i=typeof e=="string"?r=>r[e]:e;if(i(t)!==void 0&&i(n)!==i(t))throw new Error("Cannot reconcile states with different identity");vs(n,t,i)}}function If(n,e={},t){let i;const s=new WeakMap,r=c=>{c[vo]=o,c[Ku]=s,Object.defineProperty(c,zi,{get(){return i},configurable:!0})},o=c=>{if(s.has(c))return s.get(c);if(c[ws]?.[vo]===o)return c;const l=Ju(c,th,r);return s.set(c,l),l},a=o(e);return i=Ro(()=>{const c=Ef();Oa(new Proxy(a,ju),l=>{const u=Xu(c,n(l),h=>{h!==l&&h!==void 0&&Oa(a,mc(h,t?.key||"id"))});u!==l&&u!==void 0&&mc(u,t?.key||"id")(a)})}),i.Pe=!0,{store:a,node:i}}const ju={get(n,e){let t;is(!0),ts(!0);try{t=n[e]}finally{is(!1),ts(!1)}return typeof t=="object"&&t!==null?new Proxy(t,ju):t},set(n,e,t){is(!0),ts(!0);try{n[e]=t}finally{is(!1),ts(!1)}return!0},deleteProperty(n,e){is(!0),ts(!0);try{delete n[e]}finally{is(!1),ts(!1)}return!0}},an=Symbol(0),ws=Symbol(0),Cn=Symbol(0),vn=Symbol(0),Yt="v",pt="o",dt="x",mt="n",ys="h",vo="w",Ku="l",zi="f",Ss="p";function Ju(n,e=th,t){let i;return Array.isArray(n)?(i=[],i.v=n):i={v:n},t&&t(i),i[Cn]=new Proxy(i,e)}const Na=new WeakMap;function on(n,e){if(e?.[vo])return e[vo](n,e);let t=n[Cn]||Na.get(n);return t||Na.set(n,t=Ju(n)),t}function Dn(n){return n!=null&&typeof n=="object"&&!Object.isFrozen(n)}let Qu=!1;function is(n){Qu=n}function Vo(n){return Qu||!!Vi?.has(n)}function Ks(n,e){let t=n[e];return t||(n[e]=t=Object.create(null)),t}function Fa(n,e,t,i,s=cr,r,o){if(n[e])return n[e];const a=ir(t,{equals:s,unobserved(){delete n[e]}},i);if(r&&(a.Te=_t),o&&e in o){const c=o[e];a.re=c===void 0?cf:c}return n[e]=a}function _c(n,e=an){jt()&&Hi(Fa(Ks(n,mt),e,void 0,n[zi],!1,n[Ss]))}function eh(n,e,t=!0){const i=fn(()=>t?Object.keys(n):Reflect.ownKeys(n));if(!e)return i;const s=new Set(i),r=Reflect.ownKeys(e);for(const o of r)e[o]!==vn?s.add(o):s.delete(o);return Array.from(s)}function gc(n,e,t){let i=n;if(e&&t in e){if(i[t]===vn)return;t in i||(i=e)}return Reflect.getOwnPropertyDescriptor(i,t)}let Vi=null;const th={get(n,e,t){if(e===ws)return n;if(e===Cn)return t;if(e===hf)return n[zi];if(e===an)return _c(n),t;const i=Ks(n,mt),s=i[e],r=n[dt]&&e in n[dt],o=r||n[pt]&&e in n[pt],a=!!n[Yt][ws],c=r?n[dt]:n[pt]&&e in n[pt]?n[pt]:n[Yt];if(!s){const u=Object.getOwnPropertyDescriptor(c,e);if(u&&u.get)return u.get.call(t)}if(Vo(t)){let u=s&&(o||!a)?s.Te!==void 0&&s.Te!==_t?s.Te:s.le!==_t?s.le:s.fe:c[e];if(u===vn&&(u=void 0),!Dn(u))return u;const h=on(u,n);return Vi?.add(h),h}let l=s?o||!a?Hi(i[e]):(Hi(i[e]),c[e]):c[e];if(l===vn&&(l=void 0),!s){if(!o&&typeof l=="function"&&!c.hasOwnProperty(e)){let u;return!Array.isArray(n[Yt])&&(u=Object.getPrototypeOf(n[Yt]))&&u!==Object.prototype?l.bind(c):l}else if(jt())return Hi(Fa(i,e,Dn(l)?on(l,n):l,n[zi],cr,n[Ss],n[uf]))}return Dn(l)?on(l,n):l},has(n,e){if(e===Cn||e===an||e==="__proto__")return!0;const t=n[dt]&&e in n[dt]?n[dt][e]!==vn:n[pt]&&e in n[pt]?n[pt][e]!==vn:e in n[Yt];return jt()&&Hi(Fa(Ks(n,ys),e,t,n[zi],cr,n[Ss])),t},set(n,e,t){const i=n[Cn];if(Vo(i)){if(n[Ss]){const s=n[zi];s?.ne&&St.initTransition(s.ne)}fn(()=>{const s=n[Yt],r=s[e];Tf&&typeof e!="symbol"&&(n[zi]?.Ee??0)&Ut;const o=n[Ss]&&!lr,a=o?dt:pt;o&&fc(i);const c=n[dt]&&e in n[dt]?n[dt][e]:n[pt]&&e in n[pt]?n[pt][e]:r,l=t?.[ws]?.[Yt]??t;if(c===l)return!0;const u=n[dt]?.length||n[pt]?.length||s.length;l!==void 0&&l===r?delete n[a][e]:(n[a]||(n[a]=Object.create(null)))[e]=l;const h=Dn(l);n[ys]?.[e]&&rt(n[ys][e],!0);const f=Ks(n,mt);if(f[e]&&rt(f[e],()=>h?on(l,n):l),Array.isArray(s))if(e==="length")f.length&&rt(f.length,l);else{const p=parseInt(e)+1;p>u&&f.length&&rt(f.length,p)}f[an]&&rt(f[an],void 0)})}return!0},deleteProperty(n,e){const t=n[dt]?.[e]===vn,i=n[pt]?.[e]===vn;return Vo(n[Cn])&&!t&&!i&&fn(()=>{const s=n[Ss]&&!lr,r=s?dt:pt;s&&fc(n[Cn]);const o=n[dt]&&e in n[dt]?n[dt][e]:n[pt]&&e in n[pt]?n[pt][e]:n[Yt][e];if(e in n[Yt]||n[pt]&&e in n[pt])(n[r]||(n[r]=Object.create(null)))[e]=vn;else if(n[r]&&e in n[r])delete n[r][e];else return!0;n[ys]?.[e]&&rt(n[ys][e],!1);const a=Ks(n,mt);a[e]&&rt(a[e],void 0),a[an]&&rt(a[an],void 0)}),!0},ownKeys(n){_c(n);let e=eh(n[Yt],n[pt],!1);if(n[dt]){const t=new Set(e);for(const i of Reflect.ownKeys(n[dt]))n[dt][i]!==vn?t.add(i):t.delete(i);e=Array.from(t)}return e},getOwnPropertyDescriptor(n,e){if(e===Cn)return{value:n[Cn],writable:!0,configurable:!0};if(n[dt]&&e in n[dt]){if(n[dt][e]===vn)return;const t=gc(n[Yt],n[pt],e);return t?{...t,value:n[dt][e]}:{value:n[dt][e],writable:!0,enumerable:!0,configurable:!0}}return gc(n[Yt],n[pt],e)},getPrototypeOf(n){return Object.getPrototypeOf(n[Yt])}};function Oa(n,e){const t=Vi;Vi=new Set,Vi.add(n);try{const i=e(n);if(i!==n&&i!==void 0)if(Array.isArray(i)){for(let s=0,r=i.length;s<r;s++)n[s]=i[s];n.length=i.length}else new Set([...Object.keys(n),...Object.keys(i)]).forEach(r=>{r in i?n[r]=i[r]:delete n[r]})}finally{Vi.clear(),Vi=t}}function Lf(n,e,t){const i=typeof n=="function",s=i?If(n,e,t).store:on(n);return[s,r=>Oa(s,r)]}const nh=Symbol(0);function Js(n,e,t=0){let i,s=n;if(t<e.length-1){i=e[t];const o=typeof i,a=Array.isArray(n);if(Array.isArray(i)){for(let c=0;c<i.length;c++)e[t]=i[c],Js(n,e,t);e[t]=i;return}else if(a&&o==="function"){for(let c=0;c<n.length;c++)i(n[c],c)&&(e[t]=c,Js(n,e,t));e[t]=i;return}else if(a&&o==="object"){const{from:c=0,to:l=n.length-1,by:u=1}=i;for(let h=c;h<=l;h+=u)e[t]=h,Js(n,e,t);e[t]=i;return}else if(t<e.length-2){Js(n[i],e,t+1);return}s=n[i]}let r=e[e.length-1];if(!(typeof r=="function"&&(r=r(s),r===s))&&!(i===void 0&&r==null))if(r===nh)delete n[i];else if(i===void 0||Dn(s)&&Dn(r)&&!Array.isArray(r)){const o=i!==void 0?n[i]:n,a=Object.keys(r);for(let c=0;c<a.length;c++)o[a[c]]=r[a[c]]}else n[i]=r}Object.assign(function(...e){return t=>{Js(t,e)}},{DELETE:nh});function Go(n,e,t){const s=e.length>1,r=e;return zl(Uf.bind({Me:nr(),$e:0,je:n,Ke:[],Ye:r,Be:[],Ze:[],qe:void 0,Xe:void 0,ze:s?[]:void 0,Je:t?.fallback}))}const ko={pureWrite:!0};function Uf(){const n=this.je()||[],e=n.length;return n[an],Ms(this.Me,()=>{let t,i,s=this.Xe?()=>(this.Xe[i]=ir(n[i],ko),this.ze&&(this.ze[i]=ir(i,ko)),this.Ye(As(this.Xe[i]),this.ze?As(this.ze[i]):void 0)):this.ze?()=>{const r=n[i];return this.ze[i]=ir(i,ko),this.Ye(()=>r,As(this.ze[i]))}:()=>{const r=n[i];return this.Ye(()=>r)};if(e===0)this.$e!==0&&(this.Me.dispose(!1),this.Ze=[],this.Ke=[],this.Be=[],this.$e=0,this.Xe&&(this.Xe=[]),this.ze&&(this.ze=[])),this.Je&&!this.Be[0]&&(this.Be[0]=Ms(this.Ze[0]=nr(),this.Je));else if(this.$e===0){for(this.Ze[0]&&this.Ze[0].dispose(),this.Be=new Array(e),i=0;i<e;i++)this.Ke[i]=n[i],this.Be[i]=Ms(this.Ze[i]=nr(),s);this.$e=e}else{let r,o,a,c,l,u,h,f=new Array(e),p=new Array(e),_=this.Xe?new Array(e):void 0,v=this.ze?new Array(e):void 0;for(r=0,o=Math.min(this.$e,e);r<o&&(this.Ke[r]===n[r]||this.Xe&&xc(this.qe,this.Ke[r],n[r]));r++)this.Xe&&rt(this.Xe[r],n[r]);for(o=this.$e-1,a=e-1;o>=r&&a>=r&&(this.Ke[o]===n[a]||this.Xe&&xc(this.qe,this.Ke[o],n[a]));o--,a--)f[a]=this.Be[o],p[a]=this.Ze[o],_&&(_[a]=this.Xe[o]),v&&(v[a]=this.ze[o]);for(u=new Map,h=new Array(a+1),i=a;i>=r;i--)c=n[i],l=this.qe?this.qe(c):c,t=u.get(l),h[i]=t===void 0?-1:t,u.set(l,i);for(t=r;t<=o;t++)c=this.Ke[t],l=this.qe?this.qe(c):c,i=u.get(l),i!==void 0&&i!==-1?(f[i]=this.Be[t],p[i]=this.Ze[t],_&&(_[i]=this.Xe[t]),v&&(v[i]=this.ze[t]),i=h[i],u.set(l,i)):this.Ze[t].dispose();for(i=r;i<e;i++)i in f?(this.Be[i]=f[i],this.Ze[i]=p[i],_&&(this.Xe[i]=_[i],rt(this.Xe[i],n[i])),v&&(this.ze[i]=v[i],rt(this.ze[i],i))):this.Be[i]=Ms(this.Ze[i]=nr(),s);this.Be=this.Be.slice(0,this.$e=e),this.Ke=n.slice(0)}}),this.Be}function xc(n,e,t){return n?n(e)===n(t):!0}function ih(n,e){if(typeof n=="function"&&!n.length){if(e?.doNotUnwrap)return n;do n=n();while(typeof n=="function"&&!n.length)}if(!(e?.skipNonRendered&&(n==null||n===!0||n===!1||n===""))){if(Array.isArray(n)){let t=[];return Ba(n,t,e)?()=>{let i=[];return Ba(t,i,{...e,doNotUnwrap:!1}),i}:t}return n}}function Ba(n,e=[],t){let i=null,s=!1;for(let r=0;r<n.length;r++)try{let o=n[r];if(typeof o=="function"&&!o.length){if(t?.doNotUnwrap){e.push(o),s=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?s=Ba(o,e,t):t?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||e.push(o)}catch(o){if(!(o instanceof Un))throw o;i=o}if(i)throw i;return s}const Ht=(...n)=>zl(...n),lt=(...n)=>Rf(...n),Nf=(...n)=>Lf(...n),Ff=(...n)=>Pf(...n),vc=(...n)=>Cf(...n);function eo(n,e){return fn(()=>n(e||{}))}const Rs=(n,e,t)=>Ff(n,e,t,{transparent:!0}),Of=(n,e)=>e?n.$r?n:zl(()=>n(),void 0,{transparent:!0}):Ht(()=>n());function Bf(n,e,t){let i=t.length,s=e.length,r=i,o=0,a=0,c=e[s-1].nextSibling,l=null;for(;o<s||a<r;){if(e[o]===t[a]){o++,a++;continue}for(;e[s-1]===t[r-1];)s--,r--;if(s===o){const u=r<i?a?t[a-1].nextSibling:t[r-a]:c;for(;a<r;)n.insertBefore(t[a++],u)}else if(r===a)for(;o<s;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[r-1]&&t[a]===e[s-1]){const u=e[--s].nextSibling;n.insertBefore(t[a++],e[o++].nextSibling),n.insertBefore(t[--r],u),e[s]=t[r]}else{if(!l){l=new Map;let h=a;for(;h<r;)l.set(t[h],h++)}const u=l.get(e[o]);if(u!=null)if(a<u&&u<r){let h=o,f=1,p;for(;++h<s&&h<r&&!((p=l.get(e[h]))==null||p!==u+f);)f++;if(f>u-a){const _=e[o];for(;a<u;)n.insertBefore(t[a++],_)}else n.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const yc="_$DX_DELEGATE";function zf(n,e,t,i={}){let s;return Ji(r=>{s=r,e===document?ih(n):to(e,n(),e.firstChild?null:void 0,t)},{id:i.renderId}),()=>{s(),e.textContent=""}}function xr(n,e,t,i){let s;const r=a=>{const c=document.createElement("template");return c.innerHTML=n,c.content.firstChild};return a=>(s||(s=r())).cloneNode(!0)}function Vl(n,e=window.document){const t=e[yc]||(e[yc]=new Set);for(let i=0,s=n.length;i<s;i++){const r=n[i];t.has(r)||(t.add(r),e.addEventListener(r,Gf))}}function Tt(n,e,t){t!=null?n.style.setProperty(e,t):n.style.removeProperty(e)}function Vf(n,e){Array.isArray(n)?n.flat(1/0).forEach(t=>t&&t(e)):n(e)}function Co(n,e){const t=fn(n);Ms(null,()=>Vf(t,e))}function to(n,e,t,i){const s=t!==void 0;if(s&&!i&&(i=[]),typeof e!="function"&&(e=Mc(e,i,s,!0),typeof e!="function"))return Sc(n,e,i,t);if(e=Of(e,!0),s&&i.length===0){const r=document.createTextNode("");n.insertBefore(r,t),i=[r]}Rs(r=>Mc(e,r,s),(r,o)=>Sc(n,r,o,t),i)}function Gf(n){let e=n.target;const t=`$$${n.type}`,i=n.target,s=n.currentTarget,r=c=>Object.defineProperty(n,"target",{configurable:!0,value:c}),o=()=>{const c=e[t];if(c&&!e.disabled){const l=e[`${t}Data`];if(l!==void 0?c.call(e,l,n):c.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&r(e.host),!0},a=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const c=n.composedPath();r(c[0]);for(let l=0;l<c.length-2&&(e=c[l],!!o());l++){if(e._$host){e=e._$host,a();break}if(e.parentNode===s)break}}else a();r(i)}function Sc(n,e,t,i){if(e===t)return;const s=typeof e,r=i!==void 0;if(s==="string"||s==="number"){const o=typeof t;o==="string"||o==="number"?n.firstChild.data=e:n.textContent=e}else if(e===void 0)Ar(n,t,i);else if(e.nodeType)Array.isArray(t)?Ar(n,t,r?i:null,e):t===void 0||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);else if(Array.isArray(e)){const o=t&&Array.isArray(t);e.length===0?Ar(n,t,i):o?t.length===0?Ec(n,e,i):Bf(n,t,e):(t&&Ar(n),Ec(n,e))}}function Mc(n,e,t,i){if(n=ih(n,{skipNonRendered:!0,doNotUnwrap:i}),i&&typeof n=="function")return n;if(t&&!Array.isArray(n)&&(n=[n??""]),Array.isArray(n))for(let s=0,r=n.length;s<r;s++){const o=n[s],a=e&&e[s],c=typeof o;(c==="string"||c==="number")&&(n[s]=a&&a.nodeType===3&&a.data===""+o?a:document.createTextNode(o))}return n}function Ec(n,e,t=null){for(let i=0,s=e.length;i<s;i++)n.insertBefore(e[i],t)}function Ar(n,e,t,i){if(t===void 0)return n.textContent="";if(e.length){let s=!1;for(let r=e.length-1;r>=0;r--){const o=e[r];if(i!==o){const a=o.parentNode===n;i&&!s&&!r?a?n.replaceChild(i,o):n.insertBefore(i,t):a&&o.remove()}else s=!0}}else i&&n.insertBefore(i,t)}function kf(...n){return zf(...n)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gl="183",Hf=0,bc=1,Wf=2,no=1,Xf=2,Qs=3,Ti=0,en=1,jn=2,ni=0,Cs=1,Tc=2,Ac=3,wc=4,qf=5,Gi=100,Yf=101,$f=102,Zf=103,jf=104,Kf=200,Jf=201,Qf=202,ed=203,za=204,Va=205,td=206,nd=207,id=208,sd=209,rd=210,od=211,ad=212,ld=213,cd=214,Ga=0,ka=1,Ha=2,Us=3,Wa=4,Xa=5,qa=6,Ya=7,sh=0,ud=1,hd=2,Nn=0,rh=1,oh=2,ah=3,lh=4,ch=5,uh=6,hh=7,fh=300,ji=301,Ns=302,Ho=303,Wo=304,Po=306,$a=1e3,Kn=1001,Za=1002,Bt=1003,fd=1004,wr=1005,Xt=1006,Xo=1007,Wi=1008,ln=1009,dh=1010,ph=1011,hr=1012,kl=1013,Vn=1014,In=1015,ri=1016,Hl=1017,Wl=1018,fr=1020,mh=35902,_h=35899,gh=1021,xh=1022,En=1023,oi=1026,Xi=1027,vh=1028,Xl=1029,Fs=1030,ql=1031,Yl=1033,io=33776,so=33777,ro=33778,oo=33779,ja=35840,Ka=35841,Ja=35842,Qa=35843,el=36196,tl=37492,nl=37496,il=37488,sl=37489,rl=37490,ol=37491,al=37808,ll=37809,cl=37810,ul=37811,hl=37812,fl=37813,dl=37814,pl=37815,ml=37816,_l=37817,gl=37818,xl=37819,vl=37820,yl=37821,Sl=36492,Ml=36494,El=36495,bl=36283,Tl=36284,Al=36285,wl=36286,dd=3200,$l=0,pd=1,gi="",un="srgb",Os="srgb-linear",yo="linear",st="srgb",ss=7680,Rc=519,md=512,_d=513,gd=514,Zl=515,xd=516,vd=517,jl=518,yd=519,Cc=35044,Pc="300 es",Ln=2e3,dr=2001;function Sd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function So(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Md(){const n=So("canvas");return n.style.display="block",n}const Dc={};function Ic(...n){const e="THREE."+n.shift();console.log(e,...n)}function yh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=yh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Je(...n){n=yh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Mo(...n){const e=n.join(" ");e in Dc||(Dc[e]=!0,Ne(...n))}function Ed(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const bd={[Ga]:ka,[Ha]:qa,[Wa]:Ya,[Us]:Xa,[ka]:Ga,[qa]:Ha,[Ya]:Wa,[Xa]:Us};class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qo=Math.PI/180,Rl=180/Math.PI;function vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function Td(n,e){return(n%e+e)%e}function Yo(n,e,t){return(1-t)*n+t*e}function Ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(h!==v||c!==f||l!==p||u!==_){let m=c*f+l*p+u*_+h*v;m<0&&(f=-f,p=-p,_=-_,v=-v,m=-m);let d=1-a;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);d=Math.sin(d*y)/b,a=Math.sin(a*y)/b,c=c*d+f*a,l=l*d+p*a,u=u*d+_*a,h=h*d+v*a}else{c=c*d+f*a,l=l*d+p*a,u=u*d+_*a,h=h*d+v*a;const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*p-l*f,e[t+1]=c*_+u*f+l*h-a*p,e[t+2]=l*_+u*p+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"YZX":this._x=f*u*h+l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h-f*p*_;break;case"XZY":this._x=f*u*h-l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h+f*p*_;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $o=new G,Lc=new Vs;class Ve{constructor(e,t,i,s,r,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],v=s[0],m=s[3],d=s[6],y=s[1],b=s[4],M=s[7],T=s[2],A=s[5],w=s[8];return r[0]=o*v+a*y+c*T,r[3]=o*m+a*b+c*A,r[6]=o*d+a*M+c*w,r[1]=l*v+u*y+h*T,r[4]=l*m+u*b+h*A,r[7]=l*d+u*M+h*w,r[2]=f*v+p*y+_*T,r[5]=f*m+p*b+_*A,r[8]=f*d+p*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,_=t*h+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zo=new Ve,Uc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ad(){const n={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===st&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Os]:{primaries:e,whitePoint:i,transfer:yo,toXYZ:Uc,fromXYZ:Nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Uc,fromXYZ:Nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}const Ze=Ad();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class wd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=So("canvas")),rs.width=e.width,rs.height=e.height;const s=rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rd=0;class Kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jo(s[o].image)):r.push(jo(s[o]))}else r=jo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let Cd=0;const Ko=new G;class Kt extends zs{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=Kn,s=Kn,r=Xt,o=Wi,a=En,c=ln,l=Kt.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=vr(),this.name="",this.source=new Kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ko).x}get height(){return this.source.getSize(Ko).y}get depth(){return this.source.getSize(Ko).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=fh;Kt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,s=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],_=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,M=(p+1)/2,T=(d+1)/2,A=(u+f)/4,w=(h+v)/4,g=(_+m)/4;return b>M&&b>T?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=w/i):M>T?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=g/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=w/r,s=g/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pd extends zs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Kt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Kl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Pd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sh extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dd extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mt{constructor(e,t,i,s,r,o,a,c,l,u,h,f,p,_,v,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,f,p,_,v,m)}set(e,t,i,s,r,o,a,c,l,u,h,f,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,_=l*u,v=l*h;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,_=l*u,v=l*h;t[0]=f-v*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=_*l-p,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=v-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,p=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Id,e,Ld)}lookAt(e,t,i){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ui.crossVectors(i,nn),ui.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ui.crossVectors(i,nn)),ui.normalize(),Rr.crossVectors(nn,ui),s[0]=ui.x,s[4]=Rr.x,s[8]=nn.x,s[1]=ui.y,s[5]=Rr.y,s[9]=nn.y,s[2]=ui.z,s[6]=Rr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],y=i[3],b=i[7],M=i[11],T=i[15],A=s[0],w=s[4],g=s[8],S=s[12],B=s[1],C=s[5],D=s[9],L=s[13],z=s[2],N=s[6],I=s[10],U=s[14],j=s[3],Z=s[7],ne=s[11],le=s[15];return r[0]=o*A+a*B+c*z+l*j,r[4]=o*w+a*C+c*N+l*Z,r[8]=o*g+a*D+c*I+l*ne,r[12]=o*S+a*L+c*U+l*le,r[1]=u*A+h*B+f*z+p*j,r[5]=u*w+h*C+f*N+p*Z,r[9]=u*g+h*D+f*I+p*ne,r[13]=u*S+h*L+f*U+p*le,r[2]=_*A+v*B+m*z+d*j,r[6]=_*w+v*C+m*N+d*Z,r[10]=_*g+v*D+m*I+d*ne,r[14]=_*S+v*L+m*U+d*le,r[3]=y*A+b*B+M*z+T*j,r[7]=y*w+b*C+M*N+T*Z,r[11]=y*g+b*D+M*I+T*ne,r[15]=y*S+b*L+M*U+T*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15],y=c*p-l*f,b=a*p-l*h,M=a*f-c*h,T=o*p-l*u,A=o*f-c*u,w=o*h-a*u;return t*(v*y-m*b+d*M)-i*(_*y-m*T+d*A)+s*(_*b-v*T+d*w)-r*(_*M-v*A+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],y=t*a-i*o,b=t*c-s*o,M=t*l-r*o,T=i*c-s*a,A=i*l-r*a,w=s*l-r*c,g=u*v-h*_,S=u*m-f*_,B=u*d-p*_,C=h*m-f*v,D=h*d-p*v,L=f*d-p*m,z=y*L-b*D+M*C+T*B-A*S+w*g;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return e[0]=(a*L-c*D+l*C)*N,e[1]=(s*D-i*L-r*C)*N,e[2]=(v*w-m*A+d*T)*N,e[3]=(f*A-h*w-p*T)*N,e[4]=(c*B-o*L-l*S)*N,e[5]=(t*L-s*B+r*S)*N,e[6]=(m*M-_*w-d*b)*N,e[7]=(u*w-f*M+p*b)*N,e[8]=(o*D-a*B+l*g)*N,e[9]=(i*B-t*D-r*g)*N,e[10]=(_*A-v*M+d*y)*N,e[11]=(h*M-u*A-p*y)*N,e[12]=(a*S-o*C-c*g)*N,e[13]=(t*C-i*S+s*g)*N,e[14]=(v*b-_*T-m*y)*N,e[15]=(u*T-h*b+f*y)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,_=r*h,v=o*u,m=o*h,d=a*h,y=c*l,b=c*u,M=c*h,T=i.x,A=i.y,w=i.z;return s[0]=(1-(v+d))*T,s[1]=(p+M)*T,s[2]=(_-b)*T,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(f+d))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(_+b)*w,s[9]=(m-y)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=os.set(s[0],s[1],s[2]).length();const a=os.set(s[4],s[5],s[6]).length(),c=os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_n.copy(this);const l=1/o,u=1/a,h=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Ln,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let _,v;if(c)_=r/(o-r),v=o*r/(o-r);else if(a===Ln)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===dr)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ln,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let _,v;if(c)_=1/(o-r),v=o/(o-r);else if(a===Ln)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===dr)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const os=new G,_n=new Mt,Id=new G(0,0,0),Ld=new G(1,1,1),ui=new G,Rr=new G,nn=new G,Fc=new Mt,Oc=new Vs;class Gn{constructor(e=0,t=0,i=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ud=0;const Bc=new G,as=new Vs,Xn=new Mt,Cr=new G,Xs=new G,Nd=new G,Fd=new Vs,zc=new G(1,0,0),Vc=new G(0,1,0),Gc=new G(0,0,1),kc={type:"added"},Od={type:"removed"},ls={type:"childadded",child:null},Jo={type:"childremoved",child:null};class qt extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new G,t=new Gn,i=new Vs,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ve}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(zc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(Gc,e)}translateOnAxis(e,t){return Bc.copy(e).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(Gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cr.copy(e):Cr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Xs,Cr,this.up):Xn.lookAt(Cr,Xs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Xn),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),ls.child=e,this.dispatchEvent(ls),ls.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Od),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,Nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Fd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}qt.DEFAULT_UP=new G(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qi extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bd={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=Td(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ea(o,r,e+1/3),this.g=ea(o,r,e),this.b=ea(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=Eh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Ze.workingToColorSpace(Gt.copy(this),e),Math.round(Ye(Gt.r*255,0,255))*65536+Math.round(Ye(Gt.g*255,0,255))*256+Math.round(Ye(Gt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=un){Ze.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Pr);const i=Yo(hi.h,Pr.h,t),s=Yo(hi.s,Pr.s,t),r=Yo(hi.l,Pr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new tt;tt.NAMES=Eh;class zd extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gn=new G,qn=new G,ta=new G,Yn=new G,cs=new G,us=new G,Hc=new G,na=new G,ia=new G,sa=new G,ra=new yt,oa=new yt,aa=new yt;class Mn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gn.subVectors(e,t),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gn.subVectors(s,t),qn.subVectors(i,t),ta.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(qn),c=gn.dot(ta),l=qn.dot(qn),u=qn.dot(ta),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(o,Yn.y),c.addScaledVector(a,Yn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ra.setScalar(0),oa.setScalar(0),aa.setScalar(0),ra.fromBufferAttribute(e,t),oa.fromBufferAttribute(e,i),aa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ra,r.x),o.addScaledVector(oa,r.y),o.addScaledVector(aa,r.z),o}static isFrontFacing(e,t,i,s){return gn.subVectors(i,t),qn.subVectors(e,t),gn.cross(qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),gn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;cs.subVectors(s,i),us.subVectors(r,i),na.subVectors(e,i);const c=cs.dot(na),l=us.dot(na);if(c<=0&&l<=0)return t.copy(i);ia.subVectors(e,s);const u=cs.dot(ia),h=us.dot(ia);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(cs,o);sa.subVectors(e,r);const p=cs.dot(sa),_=us.dot(sa);if(_>=0&&p<=_)return t.copy(r);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(us,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Hc.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Hc,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gs{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Ir.subVectors(this.max,qs),hs.subVectors(e.a,qs),fs.subVectors(e.b,qs),ds.subVectors(e.c,qs),fi.subVectors(fs,hs),di.subVectors(ds,fs),Pi.subVectors(hs,ds);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Pi.z,Pi.y,fi.z,0,-fi.x,di.z,0,-di.x,Pi.z,0,-Pi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Pi.y,Pi.x,0];return!la(t,hs,fs,ds,Ir)||(t=[1,0,0,0,1,0,0,0,1],!la(t,hs,fs,ds,Ir))?!1:(Lr.crossVectors(fi,di),t=[Lr.x,Lr.y,Lr.z],la(t,hs,fs,ds,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new G,new G,new G,new G,new G,new G,new G,new G],xn=new G,Dr=new Gs,hs=new G,fs=new G,ds=new G,fi=new G,di=new G,Pi=new G,qs=new G,Ir=new G,Lr=new G,Di=new G;function la(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Di.fromArray(n,r);const a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const bt=new G,Ur=new Be;let Vd=0;class On{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}}class bh extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Th extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nt extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Gd=new Gs,Ys=new G,ca=new G;class Jl{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ys,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(ca)),this.expandByPoint(Ys.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kd=0;const cn=new Mt,ua=new qt,ps=new G,sn=new Gs,$s=new Gs,Dt=new G;class pn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sd(e)?Th:bh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(sn.min,$s.min),sn.expandByPoint(Dt),Dt.addVectors(sn.max,$s.max),sn.expandByPoint(Dt)):(sn.expandByPoint($s.min),sn.expandByPoint($s.max))}sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Dt.fromBufferAttribute(a,l),c&&(ps.fromBufferAttribute(e,l),Dt.add(ps)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let g=0;g<i.count;g++)a[g]=new G,c[g]=new G;const l=new G,u=new G,h=new G,f=new Be,p=new Be,_=new Be,v=new G,m=new G;function d(g,S,B){l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,B),f.fromBufferAttribute(r,g),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,B),u.sub(l),h.sub(l),p.sub(f),_.sub(f);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(C),a[g].add(v),a[S].add(v),a[B].add(v),c[g].add(m),c[S].add(m),c[B].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let g=0,S=y.length;g<S;++g){const B=y[g],C=B.start,D=B.count;for(let L=C,z=C+D;L<z;L+=3)d(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new G,M=new G,T=new G,A=new G;function w(g){T.fromBufferAttribute(s,g),A.copy(T);const S=a[g];b.copy(S),b.sub(T.multiplyScalar(T.dot(S))).normalize(),M.crossVectors(A,S);const C=M.dot(c[g])<0?-1:1;o.setXYZW(g,b.x,b.y,b.z,C)}for(let g=0,S=y.length;g<S;++g){const B=y[g],C=B.start,D=B.count;for(let L=C,z=C+D;L<z;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,u=new G,h=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let d=0;d<u;d++)f[_++]=l[p++]}return new On(f,u,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Hd=0;class ks extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=Cs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Va,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==Va&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zn=new G,ha=new G,Nr=new G,pi=new G,fa=new G,Fr=new G,da=new G;class Wd{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ha.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(ha);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Nr),a=pi.dot(this.direction),c=-pi.dot(Nr),l=pi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ha).addScaledVector(Nr,f),p}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,s,r){fa.subVectors(t,e),Fr.subVectors(i,e),da.crossVectors(fa,Fr);let o=this.direction.dot(da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const c=a*this.direction.dot(Fr.crossVectors(pi,Fr));if(c<0)return null;const l=a*this.direction.dot(fa.cross(pi));if(l<0||c+l>o)return null;const u=-a*pi.dot(da);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Eo extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wc=new Mt,Ii=new Wd,Or=new Jl,Xc=new G,Br=new G,zr=new G,Vr=new G,pa=new G,Gr=new G,qc=new G,kr=new G;class Ke extends qt{constructor(e=new pn,t=new Eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(pa.fromBufferAttribute(h,e),o?Gr.addScaledVector(pa,u):Gr.addScaledVector(pa.sub(t),u))}t.add(Gr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(Or.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Or,Xc)===null||Ii.origin.distanceToSquared(Xc)>(e.far-e.near)**2))&&(Wc.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Wc),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=o[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,T=b;M<T;M+=3){const A=a.getX(M),w=a.getX(M+1),g=a.getX(M+2);s=Hr(this,d,e,i,l,u,h,A,w,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const y=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=Hr(this,o,e,i,l,u,h,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=o[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,T=b;M<T;M+=3){const A=M,w=M+1,g=M+2;s=Hr(this,d,e,i,l,u,h,A,w,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const y=m,b=m+1,M=m+2;s=Hr(this,o,e,i,l,u,h,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Xd(n,e,t,i,s,r,o,a){let c;if(e.side===en?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ti,a),c===null)return null;kr.copy(a),kr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(kr);return l<t.near||l>t.far?null:{distance:l,point:kr.clone(),object:n}}function Hr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Br),n.getVertexPosition(c,zr),n.getVertexPosition(l,Vr);const u=Xd(n,e,t,i,Br,zr,Vr,qc);if(u){const h=new G;Mn.getBarycoord(qc,Br,zr,Vr,h),s&&(u.uv=Mn.getInterpolatedAttribute(s,a,c,l,h,new Be)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,a,c,l,h,new Be)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,c,l,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new G,materialIndex:0};Mn.getNormal(Br,zr,Vr,f.normal),u.face=f,u.barycoord=h}return u}class qd extends Kt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Bt,u=Bt,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ma=new G,Yd=new G,$d=new Ve;class Fi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ma.subVectors(i,t).cross(Yd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ma),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$d.getNormalMatrix(e),s=this.coplanarPoint(ma).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Jl,Zd=new Be(.5,.5),Wr=new G;class Ql{constructor(e=new Fi,t=new Fi,i=new Fi,s=new Fi,r=new Fi,o=new Fi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],_=r[8],v=r[9],m=r[10],d=r[11],y=r[12],b=r[13],M=r[14],T=r[15];if(s[0].setComponents(l-o,p-u,d-_,T-y).normalize(),s[1].setComponents(l+o,p+u,d+_,T+y).normalize(),s[2].setComponents(l+a,p+h,d+v,T+b).normalize(),s[3].setComponents(l-a,p-h,d-v,T-b).normalize(),i)s[4].setComponents(c,f,m,M).normalize(),s[5].setComponents(l-c,p-f,d-m,T-M).normalize();else if(s[4].setComponents(l-c,p-f,d-m,T-M).normalize(),t===Ln)s[5].setComponents(l+c,p+f,d+m,T+M).normalize();else if(t===dr)s[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=Zd.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ah extends Kt{constructor(e=[],t=ji,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pr extends Kt{constructor(e,t,i=Vn,s,r,o,a=Bt,c=Bt,l,u=oi,h=1){if(u!==oi&&u!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jd extends pr{constructor(e,t=Vn,i=ji,s,r,o=Bt,a=Bt,c,l=oi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wh extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kt extends pn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function _(v,m,d,y,b,M,T,A,w,g,S){const B=M/w,C=T/g,D=M/2,L=T/2,z=A/2,N=w+1,I=g+1;let U=0,j=0;const Z=new G;for(let ne=0;ne<I;ne++){const le=ne*C-L;for(let J=0;J<N;J++){const Ce=J*B-D;Z[v]=Ce*y,Z[m]=le*b,Z[d]=z,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[d]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(J/w),h.push(1-ne/g),U+=1}}for(let ne=0;ne<g;ne++)for(let le=0;le<w;le++){const J=f+le+N*ne,Ce=f+le+N*(ne+1),ke=f+(le+1)+N*(ne+1),et=f+(le+1)+N*ne;c.push(J,Ce,et),c.push(Ce,ke,et),j+=6}a.addGroup(p,j,S),p+=j,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bo extends pn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new G,u=new Be;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=i+h/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(a,3)),this.setAttribute("uv",new Nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class To extends pn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let _=0;const v=[],m=i/2;let d=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(p,2));function y(){const M=new G,T=new G;let A=0;const w=(t-e)/i;for(let g=0;g<=r;g++){const S=[],B=g/r,C=B*(t-e)+e;for(let D=0;D<=s;D++){const L=D/s,z=L*c+a,N=Math.sin(z),I=Math.cos(z);T.x=C*N,T.y=-B*i+m,T.z=C*I,h.push(T.x,T.y,T.z),M.set(N,w,I).normalize(),f.push(M.x,M.y,M.z),p.push(L,1-B),S.push(_++)}v.push(S)}for(let g=0;g<s;g++)for(let S=0;S<r;S++){const B=v[S][g],C=v[S+1][g],D=v[S+1][g+1],L=v[S][g+1];(e>0||S!==0)&&(u.push(B,C,L),A+=3),(t>0||S!==r-1)&&(u.push(C,D,L),A+=3)}l.addGroup(d,A,0),d+=A}function b(M){const T=_,A=new Be,w=new G;let g=0;const S=M===!0?e:t,B=M===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*B,0),f.push(0,B,0),p.push(.5,.5),_++;const C=_;for(let D=0;D<=s;D++){const z=D/s*c+a,N=Math.cos(z),I=Math.sin(z);w.x=S*I,w.y=m*B,w.z=S*N,h.push(w.x,w.y,w.z),f.push(0,B,0),A.x=N*.5+.5,A.y=I*.5*B+.5,p.push(A.x,A.y),_++}for(let D=0;D<s;D++){const L=T+D,z=C+D;M===!0?u.push(z,z+1,L):u.push(z+1,z,L),g+=3}l.addGroup(d,g,M===!0?1:2),d+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Do extends pn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const y=d*f-o;for(let b=0;b<l;b++){const M=b*h-r;_.push(M,-y,0),v.push(0,0,1),m.push(b/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){const b=y+l*d,M=y+l*(d+1),T=y+1+l*(d+1),A=y+1+l*d;p.push(b,M,A),p.push(M,T,A)}this.setIndex(p),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ao extends pn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new G,f=new G,p=[],_=[],v=[],m=[];for(let d=0;d<=i;d++){const y=[],b=d/i;let M=0;d===0&&o===0?M=.5/t:d===i&&c===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){const A=T/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+b*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(A+M,1-b),y.push(l++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){const b=u[d][y+1],M=u[d][y],T=u[d+1][y],A=u[d+1][y+1];(d!==0||o>0)&&p.push(b,M,A),(d!==i-1||c<Math.PI)&&p.push(M,T,A)}this.setIndex(p),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Bs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Bs(n[t]);for(const s in i)e[s]=i[s]}return e}function Kd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Jd={clone:Bs,merge:$t};var Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tp extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ms extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class np extends ks{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ip extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sp extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ch extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const _a=new Mt,Yc=new G,$c=new G;class rp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ql,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===dr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xr=new G,qr=new Vs,An=new G;class Ph extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xr,qr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,An.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Xr,qr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mi=new G,Zc=new Be,jc=new Be;class hn extends Ph{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,jc),t.subVectors(jc,Zc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ec extends Ph{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class op extends rp{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ap extends Ch{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new op}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class lp extends Ch{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const _s=-90,gs=1;class cp extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(_s,gs,e,t);s.layers=this.layers,this.add(s);const r=new hn(_s,gs,e,t);r.layers=this.layers,this.add(r);const o=new hn(_s,gs,e,t);o.layers=this.layers,this.add(o);const a=new hn(_s,gs,e,t);a.layers=this.layers,this.add(a);const c=new hn(_s,gs,e,t);c.layers=this.layers,this.add(c);const l=new hn(_s,gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class up extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Kc(n,e,t,i){const s=hp(i);switch(t){case gh:return n*e;case vh:return n*e/s.components*s.byteLength;case Xl:return n*e/s.components*s.byteLength;case Fs:return n*e*2/s.components*s.byteLength;case ql:return n*e*2/s.components*s.byteLength;case xh:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case Yl:return n*e*4/s.components*s.byteLength;case io:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Qa:return Math.max(n,16)*Math.max(e,8)/4;case ja:case Ja:return Math.max(n,8)*Math.max(e,8)/2;case el:case tl:case il:case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nl:case rl:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sl:case Ml:case El:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bl:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Al:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hp(n){switch(n){case ln:case dh:return{byteLength:1,components:1};case hr:case ph:case ri:return{byteLength:2,components:1};case Hl:case Wl:return{byteLength:2,components:4};case Vn:case kl:case In:return{byteLength:4,components:1};case mh:case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fp(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],v=h[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const v=h[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
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
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vp=`#ifdef USE_AOMAP
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
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
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
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
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
#endif`,wp=`#ifdef USE_BUMPMAP
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Fp=`#define PI 3.141592653589793
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
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
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
}`,tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
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
#endif`,hm=`uniform sampler2D dfgLUT;
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
}`,fm=`
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
#endif`,dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mm=`#if defined( USE_POINTS_UV )
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
#endif`,Em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,e_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t_=`#ifdef USE_SKINNING
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
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o_=`#ifdef USE_TRANSMISSION
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
#endif`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d_=`uniform sampler2D t2D;
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`#include <common>
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
}`,v_=`#if DEPTH_PACKING == 3200
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
}`,y_=`#define DISTANCE
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
}`,S_=`#define DISTANCE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
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
}`,T_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,w_=`uniform vec3 diffuse;
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
}`,R_=`#define LAMBERT
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
}`,C_=`#define LAMBERT
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
}`,P_=`#define MATCAP
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
}`,D_=`#define MATCAP
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
}`,I_=`#define NORMAL
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
}`,L_=`#define NORMAL
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
}`,U_=`#define PHONG
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
}`,N_=`#define PHONG
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
}`,F_=`#define STANDARD
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
}`,O_=`#define STANDARD
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
}`,B_=`#define TOON
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
}`,z_=`#define TOON
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
}`,V_=`uniform float size;
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
}`,G_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,H_=`uniform vec3 color;
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
}`,W_=`uniform float rotation;
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
}`,X_=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:dp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:_p,alphatest_fragment:gp,alphatest_pars_fragment:xp,aomap_fragment:vp,aomap_pars_fragment:yp,batching_pars_vertex:Sp,batching_vertex:Mp,begin_vertex:Ep,beginnormal_vertex:bp,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:wp,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Pp,clipping_planes_vertex:Dp,color_fragment:Ip,color_pars_fragment:Lp,color_pars_vertex:Up,color_vertex:Np,common:Fp,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Bp,displacementmap_pars_vertex:zp,displacementmap_vertex:Vp,emissivemap_fragment:Gp,emissivemap_pars_fragment:kp,colorspace_fragment:Hp,colorspace_pars_fragment:Wp,envmap_fragment:Xp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Yp,envmap_pars_vertex:$p,envmap_physical_pars_fragment:rm,envmap_vertex:Zp,fog_vertex:jp,fog_pars_vertex:Kp,fog_fragment:Jp,fog_pars_fragment:Qp,gradientmap_pars_fragment:em,lightmap_pars_fragment:tm,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:om,lights_toon_pars_fragment:am,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:um,lights_physical_pars_fragment:hm,lights_fragment_begin:fm,lights_fragment_maps:dm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:gm,logdepthbuf_vertex:xm,map_fragment:vm,map_pars_fragment:ym,map_particle_fragment:Sm,map_particle_pars_fragment:Mm,metalnessmap_fragment:Em,metalnessmap_pars_fragment:bm,morphinstance_vertex:Tm,morphcolor_vertex:Am,morphnormal_vertex:wm,morphtarget_pars_vertex:Rm,morphtarget_vertex:Cm,normal_fragment_begin:Pm,normal_fragment_maps:Dm,normal_pars_fragment:Im,normal_pars_vertex:Lm,normal_vertex:Um,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:zm,opaque_fragment:Vm,packing:Gm,premultiplied_alpha_fragment:km,project_vertex:Hm,dithering_fragment:Wm,dithering_pars_fragment:Xm,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:Zm,shadowmap_vertex:jm,shadowmask_pars_fragment:Km,skinbase_vertex:Jm,skinning_pars_vertex:Qm,skinning_vertex:e_,skinnormal_vertex:t_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:s_,tonemapping_pars_fragment:r_,transmission_fragment:o_,transmission_pars_fragment:a_,uv_pars_fragment:l_,uv_pars_vertex:c_,uv_vertex:u_,worldpos_vertex:h_,background_vert:f_,background_frag:d_,backgroundCube_vert:p_,backgroundCube_frag:m_,cube_vert:__,cube_frag:g_,depth_vert:x_,depth_frag:v_,distance_vert:y_,distance_frag:S_,equirect_vert:M_,equirect_frag:E_,linedashed_vert:b_,linedashed_frag:T_,meshbasic_vert:A_,meshbasic_frag:w_,meshlambert_vert:R_,meshlambert_frag:C_,meshmatcap_vert:P_,meshmatcap_frag:D_,meshnormal_vert:I_,meshnormal_frag:L_,meshphong_vert:U_,meshphong_frag:N_,meshphysical_vert:F_,meshphysical_frag:O_,meshtoon_vert:B_,meshtoon_frag:z_,points_vert:V_,points_frag:G_,shadow_vert:k_,shadow_frag:H_,sprite_vert:W_,sprite_frag:X_},ce={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Pn={basic:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:$t([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:$t([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:$t([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:$t([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:$t([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:$t([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:$t([ce.common,ce.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:$t([ce.lights,ce.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Pn.physical={uniforms:$t([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Yr={r:0,b:0,g:0},Ui=new Gn,q_=new Mt;function Y_(n,e,t,i,s,r){const o=new tt(0);let a=s===!0?0:1,c,l,u=null,h=0,f=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function _(y){let b=!1;const M=p(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,b){const M=p(b);M&&(M.isCubeTexture||M.mapping===Po)?(l===void 0&&(l=new Ke(new kt(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Bs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Ui.copy(b.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(q_.makeRotationFromEuler(Ui)),l.material.toneMapped=Ze.getTransfer(M.colorSpace)!==st,(u!==M||h!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ke(new Do(2,2),new kn({name:"BackgroundMaterial",uniforms:Bs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,b){y.getRGB(Yr,Rh(n)),t.buffers.color.setClear(Yr.r,Yr.g,Yr.b,b,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:_,addToRenderList:v,dispose:d}}function $_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(C,D,L,z,N){let I=!1;const U=h(C,z,L,D);r!==U&&(r=U,l(r.object)),I=p(C,z,L,N),I&&_(C,z,L,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,M(C,D,L,z),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function h(C,D,L,z){const N=z.wireframe===!0;let I=i[D.id];I===void 0&&(I={},i[D.id]=I);const U=C.isInstancedMesh===!0?C.id:0;let j=I[U];j===void 0&&(j={},I[U]=j);let Z=j[L.id];Z===void 0&&(Z={},j[L.id]=Z);let ne=Z[N];return ne===void 0&&(ne=f(c()),Z[N]=ne),ne}function f(C){const D=[],L=[],z=[];for(let N=0;N<t;N++)D[N]=0,L[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:z,object:C,attributes:{},index:null}}function p(C,D,L,z){const N=r.attributes,I=D.attributes;let U=0;const j=L.getAttributes();for(const Z in j)if(j[Z].location>=0){const le=N[Z];let J=I[Z];if(J===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),le===void 0||le.attribute!==J||J&&le.data!==J.data)return!0;U++}return r.attributesNum!==U||r.index!==z}function _(C,D,L,z){const N={},I=D.attributes;let U=0;const j=L.getAttributes();for(const Z in j)if(j[Z].location>=0){let le=I[Z];le===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(le=C.instanceColor));const J={};J.attribute=le,le&&le.data&&(J.data=le.data),N[Z]=J,U++}r.attributes=N,r.attributesNum=U,r.index=z}function v(){const C=r.newAttributes;for(let D=0,L=C.length;D<L;D++)C[D]=0}function m(C){d(C,0)}function d(C,D){const L=r.newAttributes,z=r.enabledAttributes,N=r.attributeDivisors;L[C]=1,z[C]===0&&(n.enableVertexAttribArray(C),z[C]=1),N[C]!==D&&(n.vertexAttribDivisor(C,D),N[C]=D)}function y(){const C=r.newAttributes,D=r.enabledAttributes;for(let L=0,z=D.length;L<z;L++)D[L]!==C[L]&&(n.disableVertexAttribArray(L),D[L]=0)}function b(C,D,L,z,N,I,U){U===!0?n.vertexAttribIPointer(C,D,L,N,I):n.vertexAttribPointer(C,D,L,z,N,I)}function M(C,D,L,z){v();const N=z.attributes,I=L.getAttributes(),U=D.defaultAttributeValues;for(const j in I){const Z=I[j];if(Z.location>=0){let ne=N[j];if(ne===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor)),ne!==void 0){const le=ne.normalized,J=ne.itemSize,Ce=e.get(ne);if(Ce===void 0)continue;const ke=Ce.buffer,et=Ce.type,Y=Ce.bytesPerElement,ie=et===n.INT||et===n.UNSIGNED_INT||ne.gpuType===kl;if(ne.isInterleavedBufferAttribute){const re=ne.data,we=re.stride,ye=ne.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<Z.locationSize;Re++)d(Z.location+Re,re.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<Z.locationSize;Re++)m(Z.location+Re);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Re=0;Re<Z.locationSize;Re++)b(Z.location+Re,J/Z.locationSize,et,le,we*Y,(ye+J/Z.locationSize*Re)*Y,ie)}else{if(ne.isInstancedBufferAttribute){for(let re=0;re<Z.locationSize;re++)d(Z.location+re,ne.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let re=0;re<Z.locationSize;re++)m(Z.location+re);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let re=0;re<Z.locationSize;re++)b(Z.location+re,J/Z.locationSize,et,le,J*Y,J/Z.locationSize*re*Y,ie)}}else if(U!==void 0){const le=U[j];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(Z.location,le);break;case 3:n.vertexAttrib3fv(Z.location,le);break;case 4:n.vertexAttrib4fv(Z.location,le);break;default:n.vertexAttrib1fv(Z.location,le)}}}}y()}function T(){S();for(const C in i){const D=i[C];for(const L in D){const z=D[L];for(const N in z){const I=z[N];for(const U in I)u(I[U].object),delete I[U];delete z[N]}}delete i[C]}}function A(C){if(i[C.id]===void 0)return;const D=i[C.id];for(const L in D){const z=D[L];for(const N in z){const I=z[N];for(const U in I)u(I[U].object),delete I[U];delete z[N]}}delete i[C.id]}function w(C){for(const D in i){const L=i[D];for(const z in L){const N=L[z];if(N[C.id]===void 0)continue;const I=N[C.id];for(const U in I)u(I[U].object),delete I[U];delete N[C.id]}}}function g(C){for(const D in i){const L=i[D],z=C.isInstancedMesh===!0?C.id:0,N=L[z];if(N!==void 0){for(const I in N){const U=N[I];for(const j in U)u(U[j].object),delete U[j];delete N[I]}delete L[z],Object.keys(L).length===0&&delete i[D]}}}function S(){B(),o=!0,r!==s&&(r=s,l(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:B,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Z_(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*f[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function j_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==En&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const g=w===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ln&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==In&&!g)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ne("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:A}}function K_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Fi,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const y=r?0:i,b=y*4;let M=d.clippingState||null;c.value=M,M=u(_,f,b,p);for(let T=0;T!==b;++T)M[T]=t[T];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const d=p+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,M=p;b!==v;++b,M+=4)o.copy(h[b]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const vi=4,Jc=[.125,.215,.35,.446,.526,.582],ki=20,J_=256,Zs=new ec,Qc=new tt;let ga=null,xa=0,va=0,ya=!1;const Q_=new G;class eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Q_}=r;ga=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,xa,va),this._renderer.xr.enabled=ya,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:ri,format:En,colorSpace:Os,depthBuffer:!1},s=tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eg(r)),this._blurMaterial=ng(r,e,t),this._ggxMaterial=tg(r,e,t)}return s}_compileMaterial(e){const t=new Ke(new pn,e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,s,r){const c=new hn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Qc),h.toneMapping=Nn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new kt,new Eo({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,d=!0):(m.color.copy(Qc),d=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const T=this._cubeSize;xs(s,M*T,b>2?T:0,T,T),h.setRenderTarget(s),d&&h.render(v,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ji||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;xs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=0+l*1.25,p=h*f,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-vi?i-_+vi:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,xs(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(a,Zs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,xs(e,m,d,3*v,2*v),s.setRenderTarget(e),s.render(a,Zs)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=l;const f=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):ki;m>ki&&Ne(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const d=[];let y=0;for(let w=0;w<ki;++w){const g=w/v,S=Math.exp(-g*g/2);d.push(S),w===0?y+=S:w<m&&(y+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const M=this._sizeLods[s],T=3*M*(s>b-vi?s-b+vi:0),A=4*(this._cubeSize-M);xs(t,T,A,3*M,2*M),c.setRenderTarget(t),c.render(h,Zs)}}function eg(n){const e=[],t=[],i=[];let s=n;const r=n-vi+1+Jc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-vi?c=Jc[o-n+vi-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,v=3,m=2,d=1,y=new Float32Array(v*_*p),b=new Float32Array(m*_*p),M=new Float32Array(d*_*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,g=A>2?0:-1,S=[w,g,0,w+2/3,g,0,w+2/3,g+1,0,w,g,0,w+2/3,g+1,0,w,g+1,0];y.set(S,v*_*A),b.set(f,m*_*A);const B=[A,A,A,A,A,A];M.set(B,d*_*A)}const T=new pn;T.setAttribute("position",new On(y,v)),T.setAttribute("uv",new On(b,m)),T.setAttribute("faceIndex",new On(M,d)),i.push(new Ke(T,null)),s>vi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function tu(n,e,t){const i=new Fn(n,e,t);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tg(n,e,t){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ng(n,e,t){const i=new Float32Array(ki),s=new G(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Io(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function nu(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function iu(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}class Ih extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ah(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:ni});r.uniforms.tEquirect.value=t;const o=new Ke(s,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Xt),new cp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function ig(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?o(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===Ho||p===Wo)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const v=new Ih(_.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,_=p===Ho||p===Wo,v=p===ji||p===Ns;if(_||v){let m=t.get(f);const d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new eu(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return _&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new eu(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,p){return p===Ho?f.mapping=ji:p===Wo&&(f.mapping=Ns),f}function c(f){let p=0;const _=6;for(let v=0;v<_;v++)f[v]!==void 0&&p++;return p===_}function l(f){const p=f.target;p.removeEventListener("dispose",l);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function sg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Mo("WebGLRenderer: "+i+" extension not supported."),s}}}function rg(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,_=h.attributes.position;let v=0;if(_===void 0)return;if(p!==null){const y=p.array;v=p.version;for(let b=0,M=y.length;b<M;b+=3){const T=y[b+0],A=y[b+1],w=y[b+2];f.push(T,A,A,w,w,T)}}else{const y=_.array;v=_.version;for(let b=0,M=y.length/3-1;b<M;b+=3){const T=b+0,A=b+1,w=b+2;f.push(T,A,A,w,w,T)}}const m=new(_.count>=65535?Th:bh)(f,1);m.version=v;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function og(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function l(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function h(f,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,_);let d=0;for(let y=0;y<_;y++)d+=p[y]*v[y];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ag(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lg(n,e,t){const i=new WeakMap,s=new yt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let B=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",B)};var p=B;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let T=a.attributes.position.count*M,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*A*4*h),g=new Sh(w,T,A,h);g.type=In,g.needsUpdate=!0;const S=M*4;for(let C=0;C<h;C++){const D=d[C],L=y[C],z=b[C],N=T*A*4*C;for(let I=0;I<D.count;I++){const U=I*S;_===!0&&(s.fromBufferAttribute(D,I),w[N+U+0]=s.x,w[N+U+1]=s.y,w[N+U+2]=s.z,w[N+U+3]=0),v===!0&&(s.fromBufferAttribute(L,I),w[N+U+4]=s.x,w[N+U+5]=s.y,w[N+U+6]=s.z,w[N+U+7]=0),m===!0&&(s.fromBufferAttribute(z,I),w[N+U+8]=s.x,w[N+U+9]=s.y,w[N+U+10]=s.z,w[N+U+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:g,size:new Be(T,A)},i.set(a,f),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function cg(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const ug={[rh]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[lh]:"ACES_FILMIC_TONE_MAPPING",[uh]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[ch]:"CUSTOM_TONE_MAPPING"};function hg(n,e,t,i,s){const r=new Fn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Fn(e,t,{type:ri,depthBuffer:!1,stencilBuffer:!1}),a=new pn;a.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Nt([0,2,0,0,2,0],2));const c=new tp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Ke(a,c),u=new ec(-1,1,1,-1,0,1);let h=null,f=null,p=!1,_,v=null,m=[],d=!1;this.setSize=function(y,b){r.setSize(y,b),o.setSize(y,b);for(let M=0;M<m.length;M++){const T=m[M];T.setSize&&T.setSize(y,b)}},this.setEffects=function(y){m=y,d=m.length>0&&m[0].isRenderPass===!0;const b=r.width,M=r.height;for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(b,M)}},this.begin=function(y,b){if(p||y.toneMapping===Nn&&m.length===0)return!1;if(v=b,b!==null){const M=b.width,T=b.height;(r.width!==M||r.height!==T)&&this.setSize(M,T)}return d===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=Nn,!0},this.hasRenderPass=function(){return d},this.end=function(y,b){y.toneMapping=_,p=!0;let M=r,T=o;for(let A=0;A<m.length;A++){const w=m[A];if(w.enabled!==!1&&(w.render(y,T,M,b),w.needsSwap!==!1)){const g=M;M=T,T=g}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,c.defines={},Ze.getTransfer(h)===st&&(c.defines.SRGB_TRANSFER="");const A=ug[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(v),y.render(l,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Lh=new Kt,Cl=new pr(1,1),Uh=new Sh,Nh=new Dd,Fh=new Ah,su=[],ru=[],ou=new Float32Array(16),au=new Float32Array(9),lu=new Float32Array(4);function Hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=su[s];if(r===void 0&&(r=new Float32Array(s),su[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lo(n,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function _g(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;lu.set(i),n.uniformMatrix2fv(this.addr,!1,lu),Ct(t,i)}}function gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;au.set(i),n.uniformMatrix3fv(this.addr,!1,au),Ct(t,i)}}function xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;ou.set(i),n.uniformMatrix4fv(this.addr,!1,ou),Ct(t,i)}}function vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function Eg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function wg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Cl.compareFunction=t.isReversedDepthBuffer()?jl:Zl,r=Cl):r=Lh,t.setTexture2D(e||r,s)}function Rg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Nh,s)}function Cg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Fh,s)}function Pg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Uh,s)}function Dg(n){switch(n){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return _g;case 35675:return gg;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return Sg;case 35669:case 35673:return Mg;case 5125:return Eg;case 36294:return bg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Ig(n,e){n.uniform1fv(this.addr,e)}function Lg(n,e){const t=Hs(e,this.size,2);n.uniform2fv(this.addr,t)}function Ug(n,e){const t=Hs(e,this.size,3);n.uniform3fv(this.addr,t)}function Ng(n,e){const t=Hs(e,this.size,4);n.uniform4fv(this.addr,t)}function Fg(n,e){const t=Hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Og(n,e){const t=Hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bg(n,e){const t=Hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zg(n,e){n.uniform1iv(this.addr,e)}function Vg(n,e){n.uniform2iv(this.addr,e)}function Gg(n,e){n.uniform3iv(this.addr,e)}function kg(n,e){n.uniform4iv(this.addr,e)}function Hg(n,e){n.uniform1uiv(this.addr,e)}function Wg(n,e){n.uniform2uiv(this.addr,e)}function Xg(n,e){n.uniform3uiv(this.addr,e)}function qg(n,e){n.uniform4uiv(this.addr,e)}function Yg(n,e,t){const i=this.cache,s=e.length,r=Lo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Cl:o=Lh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function $g(n,e,t){const i=this.cache,s=e.length,r=Lo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Nh,r[o])}function Zg(n,e,t){const i=this.cache,s=e.length,r=Lo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fh,r[o])}function jg(n,e,t){const i=this.cache,s=e.length,r=Lo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Uh,r[o])}function Kg(n){switch(n){case 5126:return Ig;case 35664:return Lg;case 35665:return Ug;case 35666:return Ng;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return kg;case 5125:return Hg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return jg}}class Jg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dg(t.type)}}class Qg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kg(t.type)}}class e0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function cu(n,e){n.seq.push(e),n.map[e.id]=e}function t0(n,e,t){const i=n.name,s=i.length;for(Sa.lastIndex=0;;){const r=Sa.exec(i),o=Sa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){cu(t,l===void 0?new Jg(a,n,e):new Qg(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new e0(a),cu(t,h)),t=h}}}class ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);t0(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function uu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const n0=37297;let i0=0;function s0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const hu=new Ve;function r0(n){Ze._getMatrix(hu,Ze.workingColorSpace,n);const e=`mat3( ${hu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case yo:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+s0(n.getShaderSource(e),a)}else return r}function o0(n,e){const t=r0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const a0={[rh]:"Linear",[oh]:"Reinhard",[ah]:"Cineon",[lh]:"ACESFilmic",[uh]:"AgX",[hh]:"Neutral",[ch]:"Custom"};function l0(n,e){const t=a0[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new G;function c0(){Ze.getLuminanceCoefficients($r);const n=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function h0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function f0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function er(n){return n!==""}function du(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(n){return n.replace(d0,m0)}const p0=new Map;function m0(n,e){let t=Ge[e];if(t===void 0){const i=p0.get(e);if(i!==void 0)t=Ge[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pl(t)}const _0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(n){return n.replace(_0,g0)}function g0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _u(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const x0={[no]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function v0(n){return x0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const y0={[ji]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE_UV"};function S0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":y0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const M0={[Ns]:"ENVMAP_MODE_REFRACTION"};function E0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":M0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const b0={[sh]:"ENVMAP_BLENDING_MULTIPLY",[ud]:"ENVMAP_BLENDING_MIX",[hd]:"ENVMAP_BLENDING_ADD"};function T0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":b0[n.combine]||"ENVMAP_BLENDING_NONE"}function A0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function w0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=v0(t),l=S0(t),u=E0(t),h=T0(t),f=A0(t),p=u0(t),_=h0(r),v=s.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),d.length>0&&(d+=`
`)):(m=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),d=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Nn?l0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,o0("linearToOutputTexel",t.outputColorSpace),c0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=Pl(o),o=du(o,t),o=pu(o,t),a=Pl(a),a=du(a,t),a=pu(a,t),o=mu(o),a=mu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=y+m+o,M=y+d+a,T=uu(s,s.VERTEX_SHADER,b),A=uu(s,s.FRAGMENT_SHADER,M);s.attachShader(v,T),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(C){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(T)||"",z=s.getShaderInfoLog(A)||"",N=D.trim(),I=L.trim(),U=z.trim();let j=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,T,A);else{const ne=fu(s,T,"vertex"),le=fu(s,A,"fragment");Je("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+ne+`
`+le)}else N!==""?Ne("WebGLProgram: Program Info Log:",N):(I===""||U==="")&&(Z=!1);Z&&(C.diagnostics={runnable:j,programLog:N,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:d}})}s.deleteShader(T),s.deleteShader(A),g=new ao(s,v),S=f0(s,v)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(v,n0)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=A,this}let R0=0;class C0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new P0(e),t.set(e,i)),i}}class P0{constructor(e){this.id=R0++,this.code=e,this.usedTimes=0}}function D0(n,e,t,i,s,r){const o=new Mh,a=new C0,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return c.add(g),g===0?"uv":`uv${g}`}function v(g,S,B,C,D){const L=C.fog,z=D.geometry,N=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,I=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,U=e.get(g.envMap||N,I),j=U&&U.mapping===Po?U.image.height:null,Z=p[g.type];g.precision!==null&&(f=i.getMaxPrecision(g.precision),f!==g.precision&&Ne("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));const ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=ne!==void 0?ne.length:0;let J=0;z.morphAttributes.position!==void 0&&(J=1),z.morphAttributes.normal!==void 0&&(J=2),z.morphAttributes.color!==void 0&&(J=3);let Ce,ke,et,Y;if(Z){const it=Pn[Z];Ce=it.vertexShader,ke=it.fragmentShader}else Ce=g.vertexShader,ke=g.fragmentShader,a.update(g),et=a.getVertexShaderID(g),Y=a.getFragmentShaderID(g);const ie=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),we=D.isInstancedMesh===!0,ye=D.isBatchedMesh===!0,Re=!!g.map,ht=!!g.matcap,De=!!U,We=!!g.aoMap,nt=!!g.lightMap,Fe=!!g.bumpMap,gt=!!g.normalMap,P=!!g.displacementMap,ct=!!g.emissiveMap,Xe=!!g.metalnessMap,$e=!!g.roughnessMap,xe=g.anisotropy>0,R=g.clearcoat>0,x=g.dispersion>0,O=g.iridescence>0,$=g.sheen>0,K=g.transmission>0,X=xe&&!!g.anisotropyMap,me=R&&!!g.clearcoatMap,se=R&&!!g.clearcoatNormalMap,be=R&&!!g.clearcoatRoughnessMap,Pe=O&&!!g.iridescenceMap,Q=O&&!!g.iridescenceThicknessMap,te=$&&!!g.sheenColorMap,ge=$&&!!g.sheenRoughnessMap,ve=!!g.specularMap,he=!!g.specularColorMap,ze=!!g.specularIntensityMap,F=K&&!!g.transmissionMap,ae=K&&!!g.thicknessMap,oe=!!g.gradientMap,_e=!!g.alphaMap,ee=g.alphaTest>0,q=!!g.alphaHash,Se=!!g.extensions;let Ue=Nn;g.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const ft={shaderID:Z,shaderType:g.type,shaderName:g.name,vertexShader:Ce,fragmentShader:ke,defines:g.defines,customVertexShaderID:et,customFragmentShaderID:Y,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:ye,batchingColor:ye&&D._colorsTexture!==null,instancing:we,instancingColor:we&&D.instanceColor!==null,instancingMorph:we&&D.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Os,alphaToCoverage:!!g.alphaToCoverage,map:Re,matcap:ht,envMap:De,envMapMode:De&&U.mapping,envMapCubeUVHeight:j,aoMap:We,lightMap:nt,bumpMap:Fe,normalMap:gt,displacementMap:P,emissiveMap:ct,normalMapObjectSpace:gt&&g.normalMapType===pd,normalMapTangentSpace:gt&&g.normalMapType===$l,metalnessMap:Xe,roughnessMap:$e,anisotropy:xe,anisotropyMap:X,clearcoat:R,clearcoatMap:me,clearcoatNormalMap:se,clearcoatRoughnessMap:be,dispersion:x,iridescence:O,iridescenceMap:Pe,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:te,sheenRoughnessMap:ge,specularMap:ve,specularColorMap:he,specularIntensityMap:ze,transmission:K,transmissionMap:F,thicknessMap:ae,gradientMap:oe,opaque:g.transparent===!1&&g.blending===Cs&&g.alphaToCoverage===!1,alphaMap:_e,alphaTest:ee,alphaHash:q,combine:g.combine,mapUv:Re&&_(g.map.channel),aoMapUv:We&&_(g.aoMap.channel),lightMapUv:nt&&_(g.lightMap.channel),bumpMapUv:Fe&&_(g.bumpMap.channel),normalMapUv:gt&&_(g.normalMap.channel),displacementMapUv:P&&_(g.displacementMap.channel),emissiveMapUv:ct&&_(g.emissiveMap.channel),metalnessMapUv:Xe&&_(g.metalnessMap.channel),roughnessMapUv:$e&&_(g.roughnessMap.channel),anisotropyMapUv:X&&_(g.anisotropyMap.channel),clearcoatMapUv:me&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:te&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(g.sheenRoughnessMap.channel),specularMapUv:ve&&_(g.specularMap.channel),specularColorMapUv:he&&_(g.specularColorMap.channel),specularIntensityMapUv:ze&&_(g.specularIntensityMap.channel),transmissionMapUv:F&&_(g.transmissionMap.channel),thicknessMapUv:ae&&_(g.thicknessMap.channel),alphaMapUv:_e&&_(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(gt||xe),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Re||_e),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||z.attributes.normal===void 0&&gt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:re,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:J,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Re&&g.map.isVideoTexture===!0&&Ze.getTransfer(g.map.colorSpace)===st,decodeVideoTextureEmissive:ct&&g.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(g.emissiveMap.colorSpace)===st,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===jn,flipSided:g.side===en,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Se&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&g.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function m(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const B in g.defines)S.push(B),S.push(g.defines[B]);return g.isRawShaderMaterial===!1&&(d(S,g),y(S,g),S.push(n.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function d(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function y(g,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),g.push(o.mask)}function b(g){const S=p[g.type];let B;if(S){const C=Pn[S];B=Jd.clone(C.uniforms)}else B=g.uniforms;return B}function M(g,S){let B=u.get(S);return B!==void 0?++B.usedTimes:(B=new w0(n,S,g,s),l.push(B),u.set(S,B)),B}function T(g){if(--g.usedTimes===0){const S=l.indexOf(g);l[S]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){a.remove(g)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:w}}function I0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function L0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function gu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,_,v,m,d){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:p,material:_,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},n[e]=y):(y.id=f.id,y.object=f,y.geometry=p,y.material=_,y.materialVariant=o(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=m,y.group=d),e++,y}function c(f,p,_,v,m,d){const y=a(f,p,_,v,m,d);_.transmission>0?i.push(y):_.transparent===!0?s.push(y):t.push(y)}function l(f,p,_,v,m,d){const y=a(f,p,_,v,m,d);_.transmission>0?i.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function u(f,p){t.length>1&&t.sort(f||L0),i.length>1&&i.sort(p||gu),s.length>1&&s.sort(p||gu)}function h(){for(let f=e,p=n.length;f<p;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function U0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new xu,n.set(i,[o])):s>=r.length?(o=new xu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function N0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new tt};break;case"SpotLight":t={position:new G,direction:new G,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function F0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let O0=0;function B0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function z0(n){const e=new N0,t=F0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);const s=new G,r=new Mt,o=new Mt;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,y=0,b=0,M=0,T=0,A=0,w=0;l.sort(B0);for(let S=0,B=l.length;S<B;S++){const C=l[S],D=C.color,L=C.intensity,z=C.distance;let N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Fs?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=D.r*L,h+=D.g*L,f+=D.b*L;else if(C.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(C.sh.coefficients[I],L);w++}else if(C.isDirectionalLight){const I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const U=C.shadow,j=t.get(C);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=C.shadow.matrix,y++}i.directional[p]=I,p++}else if(C.isSpotLight){const I=e.get(C);I.position.setFromMatrixPosition(C.matrixWorld),I.color.copy(D).multiplyScalar(L),I.distance=z,I.coneCos=Math.cos(C.angle),I.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),I.decay=C.decay,i.spot[v]=I;const U=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,U.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[v]=U.matrix,C.castShadow){const j=t.get(C);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=N,M++}v++}else if(C.isRectAreaLight){const I=e.get(C);I.color.copy(D).multiplyScalar(L),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=I,m++}else if(C.isPointLight){const I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),I.distance=C.distance,I.decay=C.decay,C.castShadow){const U=C.shadow,j=t.get(C);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,j.shadowCameraNear=U.camera.near,j.shadowCameraFar=U.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=N,i.pointShadowMatrix[_]=C.shadow.matrix,b++}i.point[_]=I,_++}else if(C.isHemisphereLight){const I=e.get(C);I.skyColor.copy(C.color).multiplyScalar(L),I.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[d]=I,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const g=i.hash;(g.directionalLength!==p||g.pointLength!==_||g.spotLength!==v||g.rectAreaLength!==m||g.hemiLength!==d||g.numDirectionalShadows!==y||g.numPointShadows!==b||g.numSpotShadows!==M||g.numSpotMaps!==T||g.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,g.directionalLength=p,g.pointLength=_,g.spotLength=v,g.rectAreaLength=m,g.hemiLength=d,g.numDirectionalShadows=y,g.numPointShadows=b,g.numSpotShadows=M,g.numSpotMaps=T,g.numLightProbes=w,i.version=O0++)}function c(l,u){let h=0,f=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let d=0,y=l.length;d<y;d++){const b=l[d];if(b.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function vu(n){const e=new z0(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function V0(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new vu(n),e.set(s,[a])):r>=o.length?(a=new vu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`,H0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],W0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],yu=new Mt,js=new G,Ma=new G;function X0(n,e,t){let i=new Ql;const s=new Be,r=new Be,o=new yt,a=new ip,c=new sp,l={},u=t.maxTextureSize,h={[Ti]:en,[en]:Ti,[jn]:jn},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:G0,fragmentShader:k0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ke(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let d=this.type;this.render=function(A,w,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Xf&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=no);const S=n.getRenderTarget(),B=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ni),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=d!==this.type;L&&w.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(N=>N.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,N=A.length;z<N;z++){const I=A[z],U=I.shadow;if(U===void 0){Ne("WebGLShadowMap:",I,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const j=U.getFrameExtents();s.multiply(j),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,U.mapSize.y=r.y));const Z=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=Z,U.map===null||L===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Qs){if(I.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Fn(s.x,s.y,{format:Fs,type:ri,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),U.map.texture.name=I.name+".shadowMap",U.map.depthTexture=new pr(s.x,s.y,In),U.map.depthTexture.name=I.name+".shadowMapDepth",U.map.depthTexture.format=oi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Bt,U.map.depthTexture.magFilter=Bt}else I.isPointLight?(U.map=new Ih(s.x),U.map.depthTexture=new jd(s.x,Vn)):(U.map=new Fn(s.x,s.y),U.map.depthTexture=new pr(s.x,s.y,Vn)),U.map.depthTexture.name=I.name+".shadowMap",U.map.depthTexture.format=oi,this.type===no?(U.map.depthTexture.compareFunction=Z?jl:Zl,U.map.depthTexture.minFilter=Xt,U.map.depthTexture.magFilter=Xt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Bt,U.map.depthTexture.magFilter=Bt);U.camera.updateProjectionMatrix()}const ne=U.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<ne;le++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,le),n.clear();else{le===0&&(n.setRenderTarget(U.map),n.clear());const J=U.getViewport(le);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),D.viewport(o)}if(I.isPointLight){const J=U.camera,Ce=U.matrix,ke=I.distance||J.far;ke!==J.far&&(J.far=ke,J.updateProjectionMatrix()),js.setFromMatrixPosition(I.matrixWorld),J.position.copy(js),Ma.copy(J.position),Ma.add(H0[le]),J.up.copy(W0[le]),J.lookAt(Ma),J.updateMatrixWorld(),Ce.makeTranslation(-js.x,-js.y,-js.z),yu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),U._frustum.setFromProjectionMatrix(yu,J.coordinateSystem,J.reversedDepth)}else U.updateMatrices(I);i=U.getFrustum(),M(w,g,U.camera,I,this.type)}U.isPointLightShadow!==!0&&this.type===Qs&&y(U,g),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,B,C)};function y(A,w){const g=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fn(s.x,s.y,{format:Fs,type:ri})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,g,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,g,p,v,null)}function b(A,w,g,S){let B=null;const C=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)B=C;else if(B=g.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=B.uuid,L=w.uuid;let z=l[D];z===void 0&&(z={},l[D]=z);let N=z[L];N===void 0&&(N=B.clone(),z[L]=N,w.addEventListener("dispose",T)),B=N}if(B.visible=w.visible,B.wireframe=w.wireframe,S===Qs?B.side=w.shadowSide!==null?w.shadowSide:w.side:B.side=w.shadowSide!==null?w.shadowSide:h[w.side],B.alphaMap=w.alphaMap,B.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,B.map=w.map,B.clipShadows=w.clipShadows,B.clippingPlanes=w.clippingPlanes,B.clipIntersection=w.clipIntersection,B.displacementMap=w.displacementMap,B.displacementScale=w.displacementScale,B.displacementBias=w.displacementBias,B.wireframeLinewidth=w.wireframeLinewidth,B.linewidth=w.linewidth,g.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const D=n.properties.get(B);D.light=g}return B}function M(A,w,g,S,B){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&B===Qs)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);const L=e.update(A),z=A.material;if(Array.isArray(z)){const N=L.groups;for(let I=0,U=N.length;I<U;I++){const j=N[I],Z=z[j.materialIndex];if(Z&&Z.visible){const ne=b(A,Z,S,B);A.onBeforeShadow(n,A,w,g,L,ne,j),n.renderBufferDirect(g,null,L,ne,A,j),A.onAfterShadow(n,A,w,g,L,ne,j)}}}else if(z.visible){const N=b(A,z,S,B);A.onBeforeShadow(n,A,w,g,L,N,null),n.renderBufferDirect(g,null,L,N,A,null),A.onAfterShadow(n,A,w,g,L,N,null)}}const D=A.children;for(let L=0,z=D.length;L<z;L++)M(D[L],w,g,S,B)}function T(A){A.target.removeEventListener("dispose",T);for(const g in l){const S=l[g],B=A.target.uuid;B in S&&(S[B].dispose(),delete S[B])}}}function q0(n,e){function t(){let F=!1;const ae=new yt;let oe=null;const _e=new yt(0,0,0,0);return{setMask:function(ee){oe!==ee&&!F&&(n.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){F=ee},setClear:function(ee,q,Se,Ue,ft){ft===!0&&(ee*=Ue,q*=Ue,Se*=Ue),ae.set(ee,q,Se,Ue),_e.equals(ae)===!1&&(n.clearColor(ee,q,Se,Ue),_e.copy(ae))},reset:function(){F=!1,oe=null,_e.set(-1,0,0,0)}}}function i(){let F=!1,ae=!1,oe=null,_e=null,ee=null;return{setReversed:function(q){if(ae!==q){const Se=e.get("EXT_clip_control");q?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ae=q;const Ue=ee;ee=null,this.setClear(Ue)}},getReversed:function(){return ae},setTest:function(q){q?ie(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(q){oe!==q&&!F&&(n.depthMask(q),oe=q)},setFunc:function(q){if(ae&&(q=bd[q]),_e!==q){switch(q){case Ga:n.depthFunc(n.NEVER);break;case ka:n.depthFunc(n.ALWAYS);break;case Ha:n.depthFunc(n.LESS);break;case Us:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=q}},setLocked:function(q){F=q},setClear:function(q){ee!==q&&(ee=q,ae&&(q=1-q),n.clearDepth(q))},reset:function(){F=!1,oe=null,_e=null,ee=null,ae=!1}}}function s(){let F=!1,ae=null,oe=null,_e=null,ee=null,q=null,Se=null,Ue=null,ft=null;return{setTest:function(it){F||(it?ie(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(it){ae!==it&&!F&&(n.stencilMask(it),ae=it)},setFunc:function(it,Hn,Wn){(oe!==it||_e!==Hn||ee!==Wn)&&(n.stencilFunc(it,Hn,Wn),oe=it,_e=Hn,ee=Wn)},setOp:function(it,Hn,Wn){(q!==it||Se!==Hn||Ue!==Wn)&&(n.stencilOp(it,Hn,Wn),q=it,Se=Hn,Ue=Wn)},setLocked:function(it){F=it},setClear:function(it){ft!==it&&(n.clearStencil(it),ft=it)},reset:function(){F=!1,ae=null,oe=null,_e=null,ee=null,q=null,Se=null,Ue=null,ft=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,y=null,b=null,M=null,T=null,A=null,w=new tt(0,0,0),g=0,S=!1,B=null,C=null,D=null,L=null,z=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,U=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(j)[1]),I=U>=1):j.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),I=U>=2);let Z=null,ne={};const le=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),Ce=new yt().fromArray(le),ke=new yt().fromArray(J);function et(F,ae,oe,_e){const ee=new Uint8Array(4),q=n.createTexture();n.bindTexture(F,q),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<oe;Se++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(ae+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return q}const Y={};Y[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(Us),Fe(!1),gt(bc),ie(n.CULL_FACE),We(ni);function ie(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function re(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function we(F,ae){return h[F]!==ae?(n.bindFramebuffer(F,ae),h[F]=ae,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ae),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function ye(F,ae){let oe=p,_e=!1;if(F){oe=f.get(ae),oe===void 0&&(oe=[],f.set(ae,oe));const ee=F.textures;if(oe.length!==ee.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let q=0,Se=ee.length;q<Se;q++)oe[q]=n.COLOR_ATTACHMENT0+q;oe.length=ee.length,_e=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,_e=!0);_e&&n.drawBuffers(oe)}function Re(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const ht={[Gi]:n.FUNC_ADD,[Yf]:n.FUNC_SUBTRACT,[$f]:n.FUNC_REVERSE_SUBTRACT};ht[Zf]=n.MIN,ht[jf]=n.MAX;const De={[Kf]:n.ZERO,[Jf]:n.ONE,[Qf]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[rd]:n.SRC_ALPHA_SATURATE,[id]:n.DST_COLOR,[td]:n.DST_ALPHA,[ed]:n.ONE_MINUS_SRC_COLOR,[Va]:n.ONE_MINUS_SRC_ALPHA,[sd]:n.ONE_MINUS_DST_COLOR,[nd]:n.ONE_MINUS_DST_ALPHA,[od]:n.CONSTANT_COLOR,[ad]:n.ONE_MINUS_CONSTANT_COLOR,[ld]:n.CONSTANT_ALPHA,[cd]:n.ONE_MINUS_CONSTANT_ALPHA};function We(F,ae,oe,_e,ee,q,Se,Ue,ft,it){if(F===ni){v===!0&&(re(n.BLEND),v=!1);return}if(v===!1&&(ie(n.BLEND),v=!0),F!==qf){if(F!==m||it!==S){if((d!==Gi||M!==Gi)&&(n.blendEquation(n.FUNC_ADD),d=Gi,M=Gi),it)switch(F){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tc:n.blendFunc(n.ONE,n.ONE);break;case Ac:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Je("WebGLState: Invalid blending: ",F);break}else switch(F){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ac:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wc:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",F);break}y=null,b=null,T=null,A=null,w.set(0,0,0),g=0,m=F,S=it}return}ee=ee||ae,q=q||oe,Se=Se||_e,(ae!==d||ee!==M)&&(n.blendEquationSeparate(ht[ae],ht[ee]),d=ae,M=ee),(oe!==y||_e!==b||q!==T||Se!==A)&&(n.blendFuncSeparate(De[oe],De[_e],De[q],De[Se]),y=oe,b=_e,T=q,A=Se),(Ue.equals(w)===!1||ft!==g)&&(n.blendColor(Ue.r,Ue.g,Ue.b,ft),w.copy(Ue),g=ft),m=F,S=!1}function nt(F,ae){F.side===jn?re(n.CULL_FACE):ie(n.CULL_FACE);let oe=F.side===en;ae&&(oe=!oe),Fe(oe),F.blending===Cs&&F.transparent===!1?We(ni):We(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const _e=F.stencilWrite;a.setTest(_e),_e&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ct(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(F){B!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),B=F)}function gt(F){F!==Hf?(ie(n.CULL_FACE),F!==C&&(F===bc?n.cullFace(n.BACK):F===Wf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),C=F}function P(F){F!==D&&(I&&n.lineWidth(F),D=F)}function ct(F,ae,oe){F?(ie(n.POLYGON_OFFSET_FILL),(L!==ae||z!==oe)&&(L=ae,z=oe,o.getReversed()&&(ae=-ae),n.polygonOffset(ae,oe))):re(n.POLYGON_OFFSET_FILL)}function Xe(F){F?ie(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function $e(F){F===void 0&&(F=n.TEXTURE0+N-1),Z!==F&&(n.activeTexture(F),Z=F)}function xe(F,ae,oe){oe===void 0&&(Z===null?oe=n.TEXTURE0+N-1:oe=Z);let _e=ne[oe];_e===void 0&&(_e={type:void 0,texture:void 0},ne[oe]=_e),(_e.type!==F||_e.texture!==ae)&&(Z!==oe&&(n.activeTexture(oe),Z=oe),n.bindTexture(F,ae||Y[F]),_e.type=F,_e.texture=ae)}function R(){const F=ne[Z];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function $(){try{n.texSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function K(){try{n.texSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function se(){try{n.texStorage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function be(){try{n.texStorage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function Pe(){try{n.texImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function Q(){try{n.texImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function te(F){Ce.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ce.copy(F))}function ge(F){ke.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ke.copy(F))}function ve(F,ae){let oe=l.get(ae);oe===void 0&&(oe=new WeakMap,l.set(ae,oe));let _e=oe.get(F);_e===void 0&&(_e=n.getUniformBlockIndex(ae,F.name),oe.set(F,_e))}function he(F,ae){const _e=l.get(ae).get(F);c.get(ae)!==_e&&(n.uniformBlockBinding(ae,_e,F.__bindingPointIndex),c.set(ae,_e))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,ne={},h={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,y=null,b=null,M=null,T=null,A=null,w=new tt(0,0,0),g=0,S=!1,B=null,C=null,D=null,L=null,z=null,Ce.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:re,bindFramebuffer:we,drawBuffers:ye,useProgram:Re,setBlending:We,setMaterial:nt,setFlipSided:Fe,setCullFace:gt,setLineWidth:P,setPolygonOffset:ct,setScissorTest:Xe,activeTexture:$e,bindTexture:xe,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Pe,texImage3D:Q,updateUBOMapping:ve,uniformBlockBinding:he,texStorage2D:se,texStorage3D:be,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:me,scissor:te,viewport:ge,reset:ze}}function Y0(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,x){return p?new OffscreenCanvas(R,x):So("canvas")}function v(R,x,O){let $=1;const K=xe(R);if((K.width>O||K.height>O)&&($=O/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor($*K.width),me=Math.floor($*K.height);h===void 0&&(h=_(X,me));const se=x?_(X,me):h;return se.width=X,se.height=me,se.getContext("2d").drawImage(R,0,0,X,me),Ne("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+me+")."),se}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,x,O,$,K=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=x;if(x===n.RED&&(O===n.FLOAT&&(X=n.R32F),O===n.HALF_FLOAT&&(X=n.R16F),O===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.R8UI),O===n.UNSIGNED_SHORT&&(X=n.R16UI),O===n.UNSIGNED_INT&&(X=n.R32UI),O===n.BYTE&&(X=n.R8I),O===n.SHORT&&(X=n.R16I),O===n.INT&&(X=n.R32I)),x===n.RG&&(O===n.FLOAT&&(X=n.RG32F),O===n.HALF_FLOAT&&(X=n.RG16F),O===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RG8UI),O===n.UNSIGNED_SHORT&&(X=n.RG16UI),O===n.UNSIGNED_INT&&(X=n.RG32UI),O===n.BYTE&&(X=n.RG8I),O===n.SHORT&&(X=n.RG16I),O===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGB8UI),O===n.UNSIGNED_SHORT&&(X=n.RGB16UI),O===n.UNSIGNED_INT&&(X=n.RGB32UI),O===n.BYTE&&(X=n.RGB8I),O===n.SHORT&&(X=n.RGB16I),O===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),O===n.UNSIGNED_INT&&(X=n.RGBA32UI),O===n.BYTE&&(X=n.RGBA8I),O===n.SHORT&&(X=n.RGBA16I),O===n.INT&&(X=n.RGBA32I)),x===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),x===n.RGBA){const me=K?yo:Ze.getTransfer($);O===n.FLOAT&&(X=n.RGBA32F),O===n.HALF_FLOAT&&(X=n.RGBA16F),O===n.UNSIGNED_BYTE&&(X=me===st?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(R,x){let O;return R?x===null||x===Vn||x===fr?O=n.DEPTH24_STENCIL8:x===In?O=n.DEPTH32F_STENCIL8:x===hr&&(O=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vn||x===fr?O=n.DEPTH_COMPONENT24:x===In?O=n.DEPTH_COMPONENT32F:x===hr&&(O=n.DEPTH_COMPONENT16),O}function T(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bt&&R.minFilter!==Xt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){const x=R.target;x.removeEventListener("dispose",A),g(x),x.isVideoTexture&&u.delete(x)}function w(R){const x=R.target;x.removeEventListener("dispose",w),B(x)}function g(R){const x=i.get(R);if(x.__webglInit===void 0)return;const O=R.source,$=f.get(O);if($){const K=$[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(R),Object.keys($).length===0&&f.delete(O)}i.remove(R)}function S(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const O=R.source,$=f.get(O);delete $[x.__cacheKey],o.memory.textures--}function B(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let K=0;K<x.__webglFramebuffer[$].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[$][K]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=R.textures;for(let $=0,K=O.length;$<K;$++){const X=i.get(O[$]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(O[$])}i.remove(R)}let C=0;function D(){C=0}function L(){const R=C;return R>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function z(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function N(R,x){const O=i.get(R);if(R.isVideoTexture&&Xe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const $=R.image;if($===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,R,x);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function I(R,x){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Y(O,R,x);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function U(R,x){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Y(O,R,x);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function j(R,x){const O=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){ie(O,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}const Z={[$a]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},ne={[Bt]:n.NEAREST,[fd]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[Xo]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},le={[md]:n.NEVER,[yd]:n.ALWAYS,[_d]:n.LESS,[Zl]:n.LEQUAL,[gd]:n.EQUAL,[jl]:n.GEQUAL,[xd]:n.GREATER,[vd]:n.NOTEQUAL};function J(R,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Xt||x.magFilter===Xo||x.magFilter===wr||x.magFilter===Wi||x.minFilter===Xt||x.minFilter===Xo||x.minFilter===wr||x.minFilter===Wi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Z[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ne[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ne[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bt||x.minFilter!==wr&&x.minFilter!==Wi||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ce(R,x){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));const $=x.source;let K=f.get($);K===void 0&&(K={},f.set($,K));const X=z(x);if(X!==R.__cacheKey){K[X]===void 0&&(K[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[X].usedTimes++;const me=K[R.__cacheKey];me!==void 0&&(K[R.__cacheKey].usedTimes--,me.usedTimes===0&&S(x)),R.__cacheKey=X,R.__webglTexture=K[X].texture}return O}function ke(R,x,O){return Math.floor(Math.floor(R/O)/x)}function et(R,x,O,$){const X=R.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,O,$,x.data);else{X.sort((Q,te)=>Q.start-te.start);let me=0;for(let Q=1;Q<X.length;Q++){const te=X[me],ge=X[Q],ve=te.start+te.count,he=ke(ge.start,x.width,4),ze=ke(te.start,x.width,4);ge.start<=ve+1&&he===ze&&ke(ge.start+ge.count-1,x.width,4)===he?te.count=Math.max(te.count,ge.start+ge.count-te.start):(++me,X[me]=ge)}X.length=me+1;const se=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Q=0,te=X.length;Q<te;Q++){const ge=X[Q],ve=Math.floor(ge.start/4),he=Math.ceil(ge.count/4),ze=ve%x.width,F=Math.floor(ve/x.width),ae=he,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,ze,F,ae,oe,O,$,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function Y(R,x,O){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);const K=Ce(R,x),X=x.source;t.bindTexture($,R.__webglTexture,n.TEXTURE0+O);const me=i.get(X);if(X.version!==me.__version||K===!0){t.activeTexture(n.TEXTURE0+O);const se=Ze.getPrimaries(Ze.workingColorSpace),be=x.colorSpace===gi?null:Ze.getPrimaries(x.colorSpace),Pe=x.colorSpace===gi||se===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Q=v(x.image,!1,s.maxTextureSize);Q=$e(x,Q);const te=r.convert(x.format,x.colorSpace),ge=r.convert(x.type);let ve=b(x.internalFormat,te,ge,x.colorSpace,x.isVideoTexture);J($,x);let he;const ze=x.mipmaps,F=x.isVideoTexture!==!0,ae=me.__version===void 0||K===!0,oe=X.dataReady,_e=T(x,Q);if(x.isDepthTexture)ve=M(x.format===Xi,x.type),ae&&(F?t.texStorage2D(n.TEXTURE_2D,1,ve,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ve,Q.width,Q.height,0,te,ge,null));else if(x.isDataTexture)if(ze.length>0){F&&ae&&t.texStorage2D(n.TEXTURE_2D,_e,ve,ze[0].width,ze[0].height);for(let ee=0,q=ze.length;ee<q;ee++)he=ze[ee],F?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,te,ge,he.data):t.texImage2D(n.TEXTURE_2D,ee,ve,he.width,he.height,0,te,ge,he.data);x.generateMipmaps=!1}else F?(ae&&t.texStorage2D(n.TEXTURE_2D,_e,ve,Q.width,Q.height),oe&&et(x,Q,te,ge)):t.texImage2D(n.TEXTURE_2D,0,ve,Q.width,Q.height,0,te,ge,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,ze[0].width,ze[0].height,Q.depth);for(let ee=0,q=ze.length;ee<q;ee++)if(he=ze[ee],x.format!==En)if(te!==null)if(F){if(oe)if(x.layerUpdates.size>0){const Se=Kc(he.width,he.height,x.format,x.type);for(const Ue of x.layerUpdates){const ft=he.data.subarray(Ue*Se/he.data.BYTES_PER_ELEMENT,(Ue+1)*Se/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Ue,he.width,he.height,1,te,ft)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,Q.depth,te,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,ve,he.width,he.height,Q.depth,0,he.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,Q.depth,te,ge,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,ve,he.width,he.height,Q.depth,0,te,ge,he.data)}else{F&&ae&&t.texStorage2D(n.TEXTURE_2D,_e,ve,ze[0].width,ze[0].height);for(let ee=0,q=ze.length;ee<q;ee++)he=ze[ee],x.format!==En?te!==null?F?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,te,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,ve,he.width,he.height,0,he.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,te,ge,he.data):t.texImage2D(n.TEXTURE_2D,ee,ve,he.width,he.height,0,te,ge,he.data)}else if(x.isDataArrayTexture)if(F){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,Q.width,Q.height,Q.depth),oe)if(x.layerUpdates.size>0){const ee=Kc(Q.width,Q.height,x.format,x.type);for(const q of x.layerUpdates){const Se=Q.data.subarray(q*ee/Q.data.BYTES_PER_ELEMENT,(q+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,te,ge,Se)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,te,ge,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,Q.width,Q.height,Q.depth,0,te,ge,Q.data);else if(x.isData3DTexture)F?(ae&&t.texStorage3D(n.TEXTURE_3D,_e,ve,Q.width,Q.height,Q.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,te,ge,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ve,Q.width,Q.height,Q.depth,0,te,ge,Q.data);else if(x.isFramebufferTexture){if(ae)if(F)t.texStorage2D(n.TEXTURE_2D,_e,ve,Q.width,Q.height);else{let ee=Q.width,q=Q.height;for(let Se=0;Se<_e;Se++)t.texImage2D(n.TEXTURE_2D,Se,ve,ee,q,0,te,ge,null),ee>>=1,q>>=1}}else if(ze.length>0){if(F&&ae){const ee=xe(ze[0]);t.texStorage2D(n.TEXTURE_2D,_e,ve,ee.width,ee.height)}for(let ee=0,q=ze.length;ee<q;ee++)he=ze[ee],F?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,te,ge,he):t.texImage2D(n.TEXTURE_2D,ee,ve,te,ge,he);x.generateMipmaps=!1}else if(F){if(ae){const ee=xe(Q);t.texStorage2D(n.TEXTURE_2D,_e,ve,ee.width,ee.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,ge,Q)}else t.texImage2D(n.TEXTURE_2D,0,ve,te,ge,Q);m(x)&&d($),me.__version=X.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ie(R,x,O){if(x.image.length!==6)return;const $=Ce(R,x),K=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+O);const X=i.get(K);if(K.version!==X.__version||$===!0){t.activeTexture(n.TEXTURE0+O);const me=Ze.getPrimaries(Ze.workingColorSpace),se=x.colorSpace===gi?null:Ze.getPrimaries(x.colorSpace),be=x.colorSpace===gi||me===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,te=[];for(let q=0;q<6;q++)!Pe&&!Q?te[q]=v(x.image[q],!0,s.maxCubemapSize):te[q]=Q?x.image[q].image:x.image[q],te[q]=$e(x,te[q]);const ge=te[0],ve=r.convert(x.format,x.colorSpace),he=r.convert(x.type),ze=b(x.internalFormat,ve,he,x.colorSpace),F=x.isVideoTexture!==!0,ae=X.__version===void 0||$===!0,oe=K.dataReady;let _e=T(x,ge);J(n.TEXTURE_CUBE_MAP,x);let ee;if(Pe){F&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,ze,ge.width,ge.height);for(let q=0;q<6;q++){ee=te[q].mipmaps;for(let Se=0;Se<ee.length;Se++){const Ue=ee[Se];x.format!==En?ve!==null?F?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,0,0,Ue.width,Ue.height,ve,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,ze,Ue.width,Ue.height,0,Ue.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,0,0,Ue.width,Ue.height,ve,he,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se,ze,Ue.width,Ue.height,0,ve,he,Ue.data)}}}else{if(ee=x.mipmaps,F&&ae){ee.length>0&&_e++;const q=xe(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,ze,q.width,q.height)}for(let q=0;q<6;q++)if(Q){F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,te[q].width,te[q].height,ve,he,te[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ze,te[q].width,te[q].height,0,ve,he,te[q].data);for(let Se=0;Se<ee.length;Se++){const ft=ee[Se].image[q].image;F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,0,0,ft.width,ft.height,ve,he,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,ze,ft.width,ft.height,0,ve,he,ft.data)}}else{F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ve,he,te[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ze,ve,he,te[q]);for(let Se=0;Se<ee.length;Se++){const Ue=ee[Se];F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,0,0,ve,he,Ue.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se+1,ze,ve,he,Ue.image[q])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),X.__version=K.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function re(R,x,O,$,K,X){const me=r.convert(O.format,O.colorSpace),se=r.convert(O.type),be=b(O.internalFormat,me,se,O.colorSpace),Pe=i.get(x),Q=i.get(O);if(Q.__renderTarget=x,!Pe.__hasExternalTextures){const te=Math.max(1,x.width>>X),ge=Math.max(1,x.height>>X);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,X,be,te,ge,x.depth,0,me,se,null):t.texImage2D(K,X,be,te,ge,0,me,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ct(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,K,Q.__webglTexture,0,P(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,K,Q.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(R,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const $=x.depthTexture,K=$&&$.isDepthTexture?$.type:null,X=M(x.stencilBuffer,K),me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ct(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),X,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,R)}else{const $=x.textures;for(let K=0;K<$.length;K++){const X=$[K],me=r.convert(X.format,X.colorSpace),se=r.convert(X.type),be=b(X.internalFormat,me,se,X.colorSpace);ct(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),be,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(R,x,O){const $=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),J(n.TEXTURE_CUBE_MAP,x.depthTexture);const Pe=r.convert(x.depthTexture.format),Q=r.convert(x.depthTexture.type);let te;x.depthTexture.format===oi?te=n.DEPTH_COMPONENT24:x.depthTexture.format===Xi&&(te=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,te,x.width,x.height,0,Pe,Q,null)}}else N(x.depthTexture,0);const X=K.__webglTexture,me=P(x),se=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,be=x.depthTexture.format===Xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===oi)ct(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,se,X,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,be,se,X,0);else if(x.depthTexture.format===Xi)ct(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,se,X,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,be,se,X,0);else throw new Error("Unknown depthTexture format")}function Re(R){const x=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=$}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let $=0;$<6;$++)ye(x.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?ye(x.__webglFramebuffer[0],R,0):ye(x.__webglFramebuffer,R,0)}else if(O){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),we(x.__webglDepthbuffer[$],R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),we(x.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(R,x,O){const $=i.get(R);x!==void 0&&re($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Re(R)}function De(R){const x=R.texture,O=i.get(R),$=i.get(x);R.addEventListener("dispose",w);const K=R.textures,X=R.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let be=0;be<x.mipmaps.length;be++)O.__webglFramebuffer[se][be]=n.createFramebuffer()}else O.__webglFramebuffer[se]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)O.__webglFramebuffer[se]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(me)for(let se=0,be=K.length;se<be;se++){const Pe=i.get(K[se]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ct(R)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<K.length;se++){const be=K[se];O.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const Pe=r.convert(be.format,be.colorSpace),Q=r.convert(be.type),te=b(be.internalFormat,Pe,Q,be.colorSpace,R.isXRRenderTarget===!0),ge=P(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,O.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),we(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),J(n.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)re(O.__webglFramebuffer[se][be],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be);else re(O.__webglFramebuffer[se],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let se=0,be=K.length;se<be;se++){const Pe=K[se],Q=i.get(Pe);let te=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,Q.__webglTexture),J(te,Pe),re(O.__webglFramebuffer,R,Pe,n.COLOR_ATTACHMENT0+se,te,0),m(Pe)&&d(te)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),J(se,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)re(O.__webglFramebuffer[be],R,x,n.COLOR_ATTACHMENT0,se,be);else re(O.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,se,0);m(x)&&d(se),t.unbindTexture()}R.depthBuffer&&Re(R)}function We(R){const x=R.textures;for(let O=0,$=x.length;O<$;O++){const K=x[O];if(m(K)){const X=y(R),me=i.get(K).__webglTexture;t.bindTexture(X,me),d(X),t.unbindTexture()}}}const nt=[],Fe=[];function gt(R){if(R.samples>0){if(ct(R)===!1){const x=R.textures,O=R.width,$=R.height;let K=n.COLOR_BUFFER_BIT;const X=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(R),se=x.length>1;if(se)for(let Pe=0;Pe<x.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Pe=0;Pe<x.length;Pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]);const Q=i.get(x[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,O,$,0,0,O,$,K,n.NEAREST),c===!0&&(nt.length=0,Fe.length=0,nt.push(n.COLOR_ATTACHMENT0+Pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(nt.push(X),Fe.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Pe=0;Pe<x.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]);const Q=i.get(x[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function P(R){return Math.min(s.maxSamples,R.samples)}function ct(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Xe(R){const x=o.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function $e(R,x){const O=R.colorSpace,$=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Os&&O!==gi&&(Ze.getTransfer(O)===st?($!==En||K!==ln)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",O)),x}function xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=N,this.setTexture2DArray=I,this.setTexture3D=U,this.setTextureCube=j,this.rebindTextures=ht,this.setupRenderTarget=De,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $0(n,e){function t(i,s=gi){let r;const o=Ze.getTransfer(s);if(i===ln)return n.UNSIGNED_BYTE;if(i===Hl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dh)return n.BYTE;if(i===ph)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===kl)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===ri)return n.HALF_FLOAT;if(i===gh)return n.ALPHA;if(i===xh)return n.RGB;if(i===En)return n.RGBA;if(i===oi)return n.DEPTH_COMPONENT;if(i===Xi)return n.DEPTH_STENCIL;if(i===vh)return n.RED;if(i===Xl)return n.RED_INTEGER;if(i===Fs)return n.RG;if(i===ql)return n.RG_INTEGER;if(i===Yl)return n.RGBA_INTEGER;if(i===io||i===so||i===ro||i===oo)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ja||i===Ka||i===Ja||i===Qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===el||i===tl)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===il)return r.COMPRESSED_R11_EAC;if(i===sl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===rl)return r.COMPRESSED_RG11_EAC;if(i===ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===al||i===ll||i===cl||i===ul||i===hl||i===fl||i===dl||i===pl||i===ml||i===_l||i===gl||i===xl||i===vl||i===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===al)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ll)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ml)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sl||i===Ml||i===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sl)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bl||i===Tl||i===Al||i===wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j0=`
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

}`;class K0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new kn({vertexShader:Z0,fragmentShader:j0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Do(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J0 extends zs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new K0,d={},y=t.getContextAttributes();let b=null,M=null;const T=[],A=[],w=new Be;let g=null;const S=new hn;S.viewport=new yt;const B=new hn;B.viewport=new yt;const C=[S,B],D=new up;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=T[Y];return ie===void 0&&(ie=new Qo,T[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=T[Y];return ie===void 0&&(ie=new Qo,T[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=T[Y];return ie===void 0&&(ie=new Qo,T[Y]=ie),ie.getHandSpace()};function N(Y){const ie=A.indexOf(Y.inputSource);if(ie===-1)return;const re=T[ie];re!==void 0&&(re.update(Y.inputSource,Y.frame,l||o),re.dispatchEvent({type:Y.type,data:Y.inputSource}))}function I(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",U);for(let Y=0;Y<T.length;Y++){const ie=A[Y];ie!==null&&(A[Y]=null,T[Y].disconnect(ie))}L=null,z=null,m.reset();for(const Y in d)delete d[Y];e.setRenderTarget(b),p=null,f=null,h=null,s=null,M=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",I),s.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,we=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?Xi:oi,we=y.stencil?fr:Vn);const Re={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Re),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Fn(f.textureWidth,f.textureHeight,{format:En,type:ln,depthTexture:new pr(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Fn(p.framebufferWidth,p.framebufferHeight,{format:En,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(Y){for(let ie=0;ie<Y.removed.length;ie++){const re=Y.removed[ie],we=A.indexOf(re);we>=0&&(A[we]=null,T[we].disconnect(re))}for(let ie=0;ie<Y.added.length;ie++){const re=Y.added[ie];let we=A.indexOf(re);if(we===-1){for(let Re=0;Re<T.length;Re++)if(Re>=A.length){A.push(re),we=Re;break}else if(A[Re]===null){A[Re]=re,we=Re;break}if(we===-1)break}const ye=T[we];ye&&ye.connect(re)}}const j=new G,Z=new G;function ne(Y,ie,re){j.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(re.matrixWorld);const we=j.distanceTo(Z),ye=ie.projectionMatrix.elements,Re=re.projectionMatrix.elements,ht=ye[14]/(ye[10]-1),De=ye[14]/(ye[10]+1),We=(ye[9]+1)/ye[5],nt=(ye[9]-1)/ye[5],Fe=(ye[8]-1)/ye[0],gt=(Re[8]+1)/Re[0],P=ht*Fe,ct=ht*gt,Xe=we/(-Fe+gt),$e=Xe*-Fe;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($e),Y.translateZ(Xe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ye[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const xe=ht+Xe,R=De+Xe,x=P-$e,O=ct+(we-$e),$=We*De/R*xe,K=nt*De/R*xe;Y.projectionMatrix.makePerspective(x,O,$,K,xe,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function le(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ie=Y.near,re=Y.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(re=m.depthFar)),D.near=B.near=S.near=ie,D.far=B.far=S.far=re,(L!==D.near||z!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,z=D.far),D.layers.mask=Y.layers.mask|6,S.layers.mask=D.layers.mask&-5,B.layers.mask=D.layers.mask&-3;const we=Y.parent,ye=D.cameras;le(D,we);for(let Re=0;Re<ye.length;Re++)le(ye[Re],we);ye.length===2?ne(D,S,B):D.projectionMatrix.copy(S.projectionMatrix),J(Y,D,we)};function J(Y,ie,re){re===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(re.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Rl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Y){return d[Y]};let Ce=null;function ke(Y,ie){if(u=ie.getViewerPose(l||o),_=ie,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let we=!1;re.length!==D.cameras.length&&(D.cameras.length=0,we=!0);for(let De=0;De<re.length;De++){const We=re[De];let nt=null;if(p!==null)nt=p.getViewport(We);else{const gt=h.getViewSubImage(f,We);nt=gt.viewport,De===0&&(e.setRenderTargetTextures(M,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(M))}let Fe=C[De];Fe===void 0&&(Fe=new hn,Fe.layers.enable(De),Fe.viewport=new yt,C[De]=Fe),Fe.matrix.fromArray(We.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(We.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(nt.x,nt.y,nt.width,nt.height),De===0&&(D.matrix.copy(Fe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),we===!0&&D.cameras.push(Fe)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const De=h.getDepthInformation(re[0]);De&&De.isValid&&De.texture&&m.init(De,s.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let De=0;De<re.length;De++){const We=re[De].camera;if(We){let nt=d[We];nt||(nt=new wh,d[We]=nt);const Fe=h.getCameraImage(We);nt.sourceTexture=Fe}}}}for(let re=0;re<T.length;re++){const we=A[re],ye=T[re];we!==null&&ye!==void 0&&ye.update(we,ie,l||o)}Ce&&Ce(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const et=new Dh;et.setAnimationLoop(ke),this.setAnimationLoop=function(Y){Ce=Y},this.dispose=function(){}}}const Ni=new Gn,Q0=new Mt;function ex(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Rh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,b,M){d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===en&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===en&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,Ni.copy(M),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(Ni)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const M=b.program;i.uniformBlockBinding(y,M)}function l(y,b){let M=s[y.id];M===void 0&&(_(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",m));const T=b.program;i.updateUBOMapping(y,T);const A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function u(y){const b=h();y.__bindingPointIndex=b;const M=n.createBuffer(),T=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const b=s[y.id],M=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,w=M.length;A<w;A++){const g=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,B=g.length;S<B;S++){const C=g[S];if(p(C,A,S,T)===!0){const D=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let N=0;N<L.length;N++){const I=L[N],U=v(I);typeof I=="number"||typeof I=="boolean"?(C.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,D+z,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=0,C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=0,C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=0):(I.toArray(C.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,b,M,T){const A=y.value,w=b+"_"+M;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{const g=T[w];if(typeof A=="number"||typeof A=="boolean"){if(g!==A)return T[w]=A,!0}else if(g.equals(A)===!1)return g.copy(A),!0}return!1}function _(y){const b=y.uniforms;let M=0;const T=16;for(let w=0,g=b.length;w<g;w++){const S=Array.isArray(b[w])?b[w]:[b[w]];for(let B=0,C=S.length;B<C;B++){const D=S[B],L=Array.isArray(D.value)?D.value:[D.value];for(let z=0,N=L.length;z<N;z++){const I=L[z],U=v(I),j=M%T,Z=j%U.boundary,ne=j+Z;M+=Z,ne!==0&&T-ne<U.storage&&(M+=T-ne),D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=U.storage}}}const A=M%T;return A>0&&(M+=T-A),y.__size=M,y.__cache={},this}function v(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}const nx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function ix(){return wn===null&&(wn=new qd(nx,16,16,Fs,ri),wn.name="DFG_LUT",wn.minFilter=Xt,wn.magFilter=Xt,wn.wrapS=Kn,wn.wrapT=Kn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class sx{constructor(e={}){const{canvas:t=Md(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ln}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const v=p,m=new Set([Yl,ql,Xl]),d=new Set([ln,Vn,hr,fr,Hl,Wl]),y=new Uint32Array(4),b=new Int32Array(4);let M=null,T=null;const A=[],w=[];let g=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let B=!1;this._outputColorSpace=un;let C=0,D=0,L=null,z=-1,N=null;const I=new yt,U=new yt;let j=null;const Z=new tt(0);let ne=0,le=t.width,J=t.height,Ce=1,ke=null,et=null;const Y=new yt(0,0,le,J),ie=new yt(0,0,le,J);let re=!1;const we=new Ql;let ye=!1,Re=!1;const ht=new Mt,De=new G,We=new yt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function gt(){return L===null?Ce:1}let P=i;function ct(E,V){return t.getContext(E,V)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gl}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ft,!1),P===null){const V="webgl2";if(P=ct(V,E),P===null)throw ct(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Je("WebGLRenderer: "+E.message),E}let Xe,$e,xe,R,x,O,$,K,X,me,se,be,Pe,Q,te,ge,ve,he,ze,F,ae,oe,_e;function ee(){Xe=new sg(P),Xe.init(),ae=new $0(P,Xe),$e=new j_(P,Xe,e,ae),xe=new q0(P,Xe),$e.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),R=new ag(P),x=new I0,O=new Y0(P,Xe,xe,x,$e,ae,R),$=new ig(S),K=new fp(P),oe=new $_(P,K),X=new rg(P,K,R,oe),me=new cg(P,X,K,oe,R),he=new lg(P,$e,O),te=new K_(x),se=new D0(S,$,Xe,$e,oe,te),be=new ex(S,x),Pe=new U0,Q=new V0(Xe),ve=new Y_(S,$,xe,me,_,c),ge=new X0(S,me,$e),_e=new tx(P,R,$e,xe),ze=new Z_(P,Xe,R),F=new og(P,Xe,R),R.programs=se.programs,S.capabilities=$e,S.extensions=Xe,S.properties=x,S.renderLists=Pe,S.shadowMap=ge,S.state=xe,S.info=R}ee(),v!==ln&&(g=new hg(v,t.width,t.height,s,r));const q=new J0(S,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(E){E!==void 0&&(Ce=E,this.setSize(le,J,!1))},this.getSize=function(E){return E.set(le,J)},this.setSize=function(E,V,W=!0){if(q.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}le=E,J=V,t.width=Math.floor(E*Ce),t.height=Math.floor(V*Ce),W===!0&&(t.style.width=E+"px",t.style.height=V+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(le*Ce,J*Ce).floor()},this.setDrawingBufferSize=function(E,V,W){le=E,J=V,Ce=W,t.width=Math.floor(E*W),t.height=Math.floor(V*W),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(v===ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,V,W,H){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,V,W,H),xe.viewport(I.copy(Y).multiplyScalar(Ce).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,V,W,H){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,V,W,H),xe.scissor(U.copy(ie).multiplyScalar(Ce).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){xe.setScissorTest(re=E)},this.setOpaqueSort=function(E){ke=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,W=!0){let H=0;if(E){let k=!1;if(L!==null){const fe=L.texture.format;k=m.has(fe)}if(k){const fe=L.texture.type,pe=d.has(fe),de=ve.getClearColor(),Me=ve.getClearAlpha(),Te=de.r,Oe=de.g,He=de.b;pe?(y[0]=Te,y[1]=Oe,y[2]=He,y[3]=Me,P.clearBufferuiv(P.COLOR,0,y)):(b[0]=Te,b[1]=Oe,b[2]=He,b[3]=Me,P.clearBufferiv(P.COLOR,0,b))}else H|=P.COLOR_BUFFER_BIT}V&&(H|=P.DEPTH_BUFFER_BIT),W&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),ve.dispose(),Pe.dispose(),Q.dispose(),x.dispose(),$.dispose(),me.dispose(),oe.dispose(),_e.dispose(),se.dispose(),q.dispose(),q.removeEventListener("sessionstart",ic),q.removeEventListener("sessionend",sc),Ri.stop()};function Se(E){E.preventDefault(),Ic("WebGLRenderer: Context Lost."),B=!0}function Ue(){Ic("WebGLRenderer: Context Restored."),B=!1;const E=R.autoReset,V=ge.enabled,W=ge.autoUpdate,H=ge.needsUpdate,k=ge.type;ee(),R.autoReset=E,ge.enabled=V,ge.autoUpdate=W,ge.needsUpdate=H,ge.type=k}function ft(E){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const V=E.target;V.removeEventListener("dispose",it),Hn(V)}function Hn(E){Wn(E),x.remove(E)}function Wn(E){const V=x.get(E).programs;V!==void 0&&(V.forEach(function(W){se.releaseProgram(W)}),E.isShaderMaterial&&se.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,W,H,k,fe){V===null&&(V=nt);const pe=k.isMesh&&k.matrixWorld.determinant()<0,de=nf(E,V,W,H,k);xe.setMaterial(H,pe);let Me=W.index,Te=1;if(H.wireframe===!0){if(Me=X.getWireframeAttribute(W),Me===void 0)return;Te=2}const Oe=W.drawRange,He=W.attributes.position;let Ae=Oe.start*Te,ot=(Oe.start+Oe.count)*Te;fe!==null&&(Ae=Math.max(Ae,fe.start*Te),ot=Math.min(ot,(fe.start+fe.count)*Te)),Me!==null?(Ae=Math.max(Ae,0),ot=Math.min(ot,Me.count)):He!=null&&(Ae=Math.max(Ae,0),ot=Math.min(ot,He.count));const Et=ot-Ae;if(Et<0||Et===1/0)return;oe.setup(k,H,de,W,Me);let xt,at=ze;if(Me!==null&&(xt=K.get(Me),at=F,at.setIndex(xt)),k.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*gt()),at.setMode(P.LINES)):at.setMode(P.TRIANGLES);else if(k.isLine){let zt=H.linewidth;zt===void 0&&(zt=1),xe.setLineWidth(zt*gt()),k.isLineSegments?at.setMode(P.LINES):k.isLineLoop?at.setMode(P.LINE_LOOP):at.setMode(P.LINE_STRIP)}else k.isPoints?at.setMode(P.POINTS):k.isSprite&&at.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Mo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))at.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const zt=k._multiDrawStarts,Ee=k._multiDrawCounts,tn=k._multiDrawCount,je=Me?K.get(Me).bytesPerElement:1,mn=x.get(H).currentProgram.getUniforms();for(let Tn=0;Tn<tn;Tn++)mn.setValue(P,"_gl_DrawID",Tn),at.render(zt[Tn]/je,Ee[Tn])}else if(k.isInstancedMesh)at.renderInstances(Ae,Et,k.count);else if(W.isInstancedBufferGeometry){const zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,zt);at.renderInstances(Ae,Et,Ee)}else at.render(Ae,Et)};function nc(E,V,W){E.transparent===!0&&E.side===jn&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,Er(E,V,W),E.side=Ti,E.needsUpdate=!0,Er(E,V,W),E.side=jn):Er(E,V,W)}this.compile=function(E,V,W=null){W===null&&(W=E),T=Q.get(W),T.init(V),w.push(T),W.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),E!==W&&E.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights();const H=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const fe=k.material;if(fe)if(Array.isArray(fe))for(let pe=0;pe<fe.length;pe++){const de=fe[pe];nc(de,W,k),H.add(de)}else nc(fe,W,k),H.add(fe)}),T=w.pop(),H},this.compileAsync=function(E,V,W=null){const H=this.compile(E,V,W);return new Promise(k=>{function fe(){if(H.forEach(function(pe){x.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){k(E);return}setTimeout(fe,10)}Xe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let No=null;function tf(E){No&&No(E)}function ic(){Ri.stop()}function sc(){Ri.start()}const Ri=new Dh;Ri.setAnimationLoop(tf),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(E){No=E,q.setAnimationLoop(E),E===null?Ri.stop():Ri.start()},q.addEventListener("sessionstart",ic),q.addEventListener("sessionend",sc),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const W=q.enabled===!0&&q.isPresenting===!0,H=g!==null&&(L===null||W)&&g.begin(S,L);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(V),V=q.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,V,L),T=Q.get(E,w.length),T.init(V),w.push(T),ht.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),we.setFromProjectionMatrix(ht,Ln,V.reversedDepth),Re=this.localClippingEnabled,ye=te.init(this.clippingPlanes,Re),M=Pe.get(E,A.length),M.init(),A.push(M),q.enabled===!0&&q.isPresenting===!0){const pe=S.xr.getDepthSensingMesh();pe!==null&&Fo(pe,V,-1/0,S.sortObjects)}Fo(E,V,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(ke,et),Fe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Fe&&ve.addToRenderList(M,E),this.info.render.frame++,ye===!0&&te.beginShadows();const k=T.state.shadowsArray;if(ge.render(k,E,V),ye===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&g.hasRenderPass())===!1){const pe=M.opaque,de=M.transmissive;if(T.setupLights(),V.isArrayCamera){const Me=V.cameras;if(de.length>0)for(let Te=0,Oe=Me.length;Te<Oe;Te++){const He=Me[Te];oc(pe,de,E,He)}Fe&&ve.render(E);for(let Te=0,Oe=Me.length;Te<Oe;Te++){const He=Me[Te];rc(M,E,He,He.viewport)}}else de.length>0&&oc(pe,de,E,V),Fe&&ve.render(E),rc(M,E,V)}L!==null&&D===0&&(O.updateMultisampleRenderTarget(L),O.updateRenderTargetMipmap(L)),H&&g.end(S),E.isScene===!0&&E.onAfterRender(S,E,V),oe.resetDefaultState(),z=-1,N=null,w.pop(),w.length>0?(T=w[w.length-1],ye===!0&&te.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Fo(E,V,W,H){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||we.intersectsSprite(E)){H&&We.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);const pe=me.update(E),de=E.material;de.visible&&M.push(E,pe,de,W,We.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||we.intersectsObject(E))){const pe=me.update(E),de=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),We.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),We.copy(pe.boundingSphere.center)),We.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(de)){const Me=pe.groups;for(let Te=0,Oe=Me.length;Te<Oe;Te++){const He=Me[Te],Ae=de[He.materialIndex];Ae&&Ae.visible&&M.push(E,pe,Ae,W,We.z,He)}}else de.visible&&M.push(E,pe,de,W,We.z,null)}}const fe=E.children;for(let pe=0,de=fe.length;pe<de;pe++)Fo(fe[pe],V,W,H)}function rc(E,V,W,H){const{opaque:k,transmissive:fe,transparent:pe}=E;T.setupLightsView(W),ye===!0&&te.setGlobalState(S.clippingPlanes,W),H&&xe.viewport(I.copy(H)),k.length>0&&Mr(k,V,W),fe.length>0&&Mr(fe,V,W),pe.length>0&&Mr(pe,V,W),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function oc(E,V,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Ae=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Fn(1,1,{generateMipmaps:!0,type:Ae?ri:ln,minFilter:Wi,samples:Math.max(4,$e.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const fe=T.state.transmissionRenderTarget[H.id],pe=H.viewport||I;fe.setSize(pe.z*S.transmissionResolutionScale,pe.w*S.transmissionResolutionScale);const de=S.getRenderTarget(),Me=S.getActiveCubeFace(),Te=S.getActiveMipmapLevel();S.setRenderTarget(fe),S.getClearColor(Z),ne=S.getClearAlpha(),ne<1&&S.setClearColor(16777215,.5),S.clear(),Fe&&ve.render(W);const Oe=S.toneMapping;S.toneMapping=Nn;const He=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),ye===!0&&te.setGlobalState(S.clippingPlanes,H),Mr(E,W,H),O.updateMultisampleRenderTarget(fe),O.updateRenderTargetMipmap(fe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ot=0,Et=V.length;ot<Et;ot++){const xt=V[ot],{object:at,geometry:zt,material:Ee,group:tn}=xt;if(Ee.side===jn&&at.layers.test(H.layers)){const je=Ee.side;Ee.side=en,Ee.needsUpdate=!0,ac(at,W,H,zt,Ee,tn),Ee.side=je,Ee.needsUpdate=!0,Ae=!0}}Ae===!0&&(O.updateMultisampleRenderTarget(fe),O.updateRenderTargetMipmap(fe))}S.setRenderTarget(de,Me,Te),S.setClearColor(Z,ne),He!==void 0&&(H.viewport=He),S.toneMapping=Oe}function Mr(E,V,W){const H=V.isScene===!0?V.overrideMaterial:null;for(let k=0,fe=E.length;k<fe;k++){const pe=E[k],{object:de,geometry:Me,group:Te}=pe;let Oe=pe.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),de.layers.test(W.layers)&&ac(de,V,W,Me,Oe,Te)}}function ac(E,V,W,H,k,fe){E.onBeforeRender(S,V,W,H,k,fe),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(S,V,W,H,E,fe),k.transparent===!0&&k.side===jn&&k.forceSinglePass===!1?(k.side=en,k.needsUpdate=!0,S.renderBufferDirect(W,V,H,k,E,fe),k.side=Ti,k.needsUpdate=!0,S.renderBufferDirect(W,V,H,k,E,fe),k.side=jn):S.renderBufferDirect(W,V,H,k,E,fe),E.onAfterRender(S,V,W,H,k,fe)}function Er(E,V,W){V.isScene!==!0&&(V=nt);const H=x.get(E),k=T.state.lights,fe=T.state.shadowsArray,pe=k.state.version,de=se.getParameters(E,k.state,fe,V,W),Me=se.getProgramCacheKey(de);let Te=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,H.fog=V.fog;const Oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=$.get(E.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",it),Te=new Map,H.programs=Te);let He=Te.get(Me);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===pe)return cc(E,de),He}else de.uniforms=se.getUniforms(E),E.onBeforeCompile(de,S),He=se.acquireProgram(de,Me),Te.set(Me,He),H.uniforms=de.uniforms;const Ae=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=te.uniform),cc(E,de),H.needsLights=rf(E),H.lightsStateVersion=pe,H.needsLights&&(Ae.ambientLightColor.value=k.state.ambient,Ae.lightProbe.value=k.state.probe,Ae.directionalLights.value=k.state.directional,Ae.directionalLightShadows.value=k.state.directionalShadow,Ae.spotLights.value=k.state.spot,Ae.spotLightShadows.value=k.state.spotShadow,Ae.rectAreaLights.value=k.state.rectArea,Ae.ltc_1.value=k.state.rectAreaLTC1,Ae.ltc_2.value=k.state.rectAreaLTC2,Ae.pointLights.value=k.state.point,Ae.pointLightShadows.value=k.state.pointShadow,Ae.hemisphereLights.value=k.state.hemi,Ae.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ae.spotLightMatrix.value=k.state.spotLightMatrix,Ae.spotLightMap.value=k.state.spotLightMap,Ae.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=He,H.uniformsList=null,He}function lc(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=ao.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function cc(E,V){const W=x.get(E);W.outputColorSpace=V.outputColorSpace,W.batching=V.batching,W.batchingColor=V.batchingColor,W.instancing=V.instancing,W.instancingColor=V.instancingColor,W.instancingMorph=V.instancingMorph,W.skinning=V.skinning,W.morphTargets=V.morphTargets,W.morphNormals=V.morphNormals,W.morphColors=V.morphColors,W.morphTargetsCount=V.morphTargetsCount,W.numClippingPlanes=V.numClippingPlanes,W.numIntersection=V.numClipIntersection,W.vertexAlphas=V.vertexAlphas,W.vertexTangents=V.vertexTangents,W.toneMapping=V.toneMapping}function nf(E,V,W,H,k){V.isScene!==!0&&(V=nt),O.resetTextureUnits();const fe=V.fog,pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?V.environment:null,de=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Os,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=$.get(H.envMap||pe,Me),Oe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color;let xt=Nn;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xt=S.toneMapping);const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,zt=at!==void 0?at.length:0,Ee=x.get(H),tn=T.state.lights;if(ye===!0&&(Re===!0||E!==N)){const Pt=E===N&&H.id===z;te.setState(H,E,Pt)}let je=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==tn.state.version||Ee.outputColorSpace!==de||k.isBatchedMesh&&Ee.batching===!1||!k.isBatchedMesh&&Ee.batching===!0||k.isBatchedMesh&&Ee.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ee.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ee.instancing===!1||!k.isInstancedMesh&&Ee.instancing===!0||k.isSkinnedMesh&&Ee.skinning===!1||!k.isSkinnedMesh&&Ee.skinning===!0||k.isInstancedMesh&&Ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ee.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ee.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ee.instancingMorph===!1&&k.morphTexture!==null||Ee.envMap!==Te||H.fog===!0&&Ee.fog!==fe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==te.numPlanes||Ee.numIntersection!==te.numIntersection)||Ee.vertexAlphas!==Oe||Ee.vertexTangents!==He||Ee.morphTargets!==Ae||Ee.morphNormals!==ot||Ee.morphColors!==Et||Ee.toneMapping!==xt||Ee.morphTargetsCount!==zt)&&(je=!0):(je=!0,Ee.__version=H.version);let mn=Ee.currentProgram;je===!0&&(mn=Er(H,V,k));let Tn=!1,Ci=!1,Qi=!1;const ut=mn.getUniforms(),Ft=Ee.uniforms;if(xe.useProgram(mn.program)&&(Tn=!0,Ci=!0,Qi=!0),H.id!==z&&(z=H.id,Ci=!0),Tn||N!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",E.projectionMatrix),ut.setValue(P,"viewMatrix",E.matrixWorldInverse);const ci=ut.map.cameraPosition;ci!==void 0&&ci.setValue(P,De.setFromMatrixPosition(E.matrixWorld)),$e.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ut.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),N!==E&&(N=E,Ci=!0,Qi=!0)}if(Ee.needsLights&&(tn.state.directionalShadowMap.length>0&&ut.setValue(P,"directionalShadowMap",tn.state.directionalShadowMap,O),tn.state.spotShadowMap.length>0&&ut.setValue(P,"spotShadowMap",tn.state.spotShadowMap,O),tn.state.pointShadowMap.length>0&&ut.setValue(P,"pointShadowMap",tn.state.pointShadowMap,O)),k.isSkinnedMesh){ut.setOptional(P,k,"bindMatrix"),ut.setOptional(P,k,"bindMatrixInverse");const Pt=k.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ut.setValue(P,"boneTexture",Pt.boneTexture,O))}k.isBatchedMesh&&(ut.setOptional(P,k,"batchingTexture"),ut.setValue(P,"batchingTexture",k._matricesTexture,O),ut.setOptional(P,k,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",k._indirectTexture,O),ut.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",k._colorsTexture,O));const li=W.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&he.update(k,W,mn),(Ci||Ee.receiveShadow!==k.receiveShadow)&&(Ee.receiveShadow=k.receiveShadow,ut.setValue(P,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&V.environment!==null&&(Ft.envMapIntensity.value=V.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=ix()),Ci&&(ut.setValue(P,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&sf(Ft,Qi),fe&&H.fog===!0&&be.refreshFogUniforms(Ft,fe),be.refreshMaterialUniforms(Ft,H,Ce,J,T.state.transmissionRenderTarget[E.id]),ao.upload(P,lc(Ee),Ft,O)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ao.upload(P,lc(Ee),Ft,O),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ut.setValue(P,"center",k.center),ut.setValue(P,"modelViewMatrix",k.modelViewMatrix),ut.setValue(P,"normalMatrix",k.normalMatrix),ut.setValue(P,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Pt=H.uniformsGroups;for(let ci=0,es=Pt.length;ci<es;ci++){const uc=Pt[ci];_e.update(uc,mn),_e.bind(uc,mn)}}return mn}function sf(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function rf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,V,W){const H=x.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),x.get(E.texture).__webglTexture=V,x.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){const W=x.get(E);W.__webglFramebuffer=V,W.__useDefaultFramebuffer=V===void 0};const of=P.createFramebuffer();this.setRenderTarget=function(E,V=0,W=0){L=E,C=V,D=W;let H=null,k=!1,fe=!1;if(E){const de=x.get(E);if(de.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),I.copy(E.viewport),U.copy(E.scissor),j=E.scissorTest,xe.viewport(I),xe.scissor(U),xe.setScissorTest(j),z=-1;return}else if(de.__webglFramebuffer===void 0)O.setupRenderTarget(E);else if(de.__hasExternalTextures)O.rebindTextures(E,x.get(E.texture).__webglTexture,x.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(de.__boundDepthTexture!==Oe){if(Oe!==null&&x.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(fe=!0);const Te=x.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[V])?H=Te[V][W]:H=Te[V],k=!0):E.samples>0&&O.useMultisampledRTT(E)===!1?H=x.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[W]:H=Te,I.copy(E.viewport),U.copy(E.scissor),j=E.scissorTest}else I.copy(Y).multiplyScalar(Ce).floor(),U.copy(ie).multiplyScalar(Ce).floor(),j=re;if(W!==0&&(H=of),xe.bindFramebuffer(P.FRAMEBUFFER,H)&&xe.drawBuffers(E,H),xe.viewport(I),xe.scissor(U),xe.setScissorTest(j),k){const de=x.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+V,de.__webglTexture,W)}else if(fe){const de=V;for(let Me=0;Me<E.textures.length;Me++){const Te=x.get(E.textures[Me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Me,Te.__webglTexture,W,de)}}else if(E!==null&&W!==0){const de=x.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(E,V,W,H,k,fe,pe,de=0){if(!(E&&E.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){xe.bindFramebuffer(P.FRAMEBUFFER,Me);try{const Te=E.textures[de],Oe=Te.format,He=Te.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!$e.textureFormatReadable(Oe)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(He)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-H&&W>=0&&W<=E.height-k&&P.readPixels(V,W,H,k,ae.convert(Oe),ae.convert(He),fe)}finally{const Te=L!==null?x.get(L).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,V,W,H,k,fe,pe,de=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me)if(V>=0&&V<=E.width-H&&W>=0&&W<=E.height-k){xe.bindFramebuffer(P.FRAMEBUFFER,Me);const Te=E.textures[de],Oe=Te.format,He=Te.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!$e.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),P.readPixels(V,W,H,k,ae.convert(Oe),ae.convert(He),0);const ot=L!==null?x.get(L).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,ot);const Et=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ed(P,Et,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer(Ae),P.deleteSync(Et),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,W=0){const H=Math.pow(2,-W),k=Math.floor(E.image.width*H),fe=Math.floor(E.image.height*H),pe=V!==null?V.x:0,de=V!==null?V.y:0;O.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,pe,de,k,fe),xe.unbindTexture()};const af=P.createFramebuffer(),lf=P.createFramebuffer();this.copyTextureToTexture=function(E,V,W=null,H=null,k=0,fe=0){let pe,de,Me,Te,Oe,He,Ae,ot,Et;const xt=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(W!==null)pe=W.max.x-W.min.x,de=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Te=W.min.x,Oe=W.min.y,He=W.isBox3?W.min.z:0;else{const Ft=Math.pow(2,-k);pe=Math.floor(xt.width*Ft),de=Math.floor(xt.height*Ft),E.isDataArrayTexture?Me=xt.depth:E.isData3DTexture?Me=Math.floor(xt.depth*Ft):Me=1,Te=0,Oe=0,He=0}H!==null?(Ae=H.x,ot=H.y,Et=H.z):(Ae=0,ot=0,Et=0);const at=ae.convert(V.format),zt=ae.convert(V.type);let Ee;V.isData3DTexture?(O.setTexture3D(V,0),Ee=P.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(O.setTexture2DArray(V,0),Ee=P.TEXTURE_2D_ARRAY):(O.setTexture2D(V,0),Ee=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);const tn=P.getParameter(P.UNPACK_ROW_LENGTH),je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Tn=P.getParameter(P.UNPACK_SKIP_ROWS),Ci=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Te),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,He);const Qi=E.isDataArrayTexture||E.isData3DTexture,ut=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const Ft=x.get(E),li=x.get(V),Pt=x.get(Ft.__renderTarget),ci=x.get(li.__renderTarget);xe.bindFramebuffer(P.READ_FRAMEBUFFER,Pt.__webglFramebuffer),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let es=0;es<Me;es++)Qi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(E).__webglTexture,k,He+es),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(V).__webglTexture,fe,Et+es)),P.blitFramebuffer(Te,Oe,pe,de,Ae,ot,pe,de,P.DEPTH_BUFFER_BIT,P.NEAREST);xe.bindFramebuffer(P.READ_FRAMEBUFFER,null),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||x.has(E)){const Ft=x.get(E),li=x.get(V);xe.bindFramebuffer(P.READ_FRAMEBUFFER,af),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,lf);for(let Pt=0;Pt<Me;Pt++)Qi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,k,He+Pt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ft.__webglTexture,k),ut?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,li.__webglTexture,fe,Et+Pt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,li.__webglTexture,fe),k!==0?P.blitFramebuffer(Te,Oe,pe,de,Ae,ot,pe,de,P.COLOR_BUFFER_BIT,P.NEAREST):ut?P.copyTexSubImage3D(Ee,fe,Ae,ot,Et+Pt,Te,Oe,pe,de):P.copyTexSubImage2D(Ee,fe,Ae,ot,Te,Oe,pe,de);xe.bindFramebuffer(P.READ_FRAMEBUFFER,null),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ut?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Ee,fe,Ae,ot,Et,pe,de,Me,at,zt,xt.data):V.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,fe,Ae,ot,Et,pe,de,Me,at,xt.data):P.texSubImage3D(Ee,fe,Ae,ot,Et,pe,de,Me,at,zt,xt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,Ae,ot,pe,de,at,zt,xt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,Ae,ot,xt.width,xt.height,at,xt.data):P.texSubImage2D(P.TEXTURE_2D,fe,Ae,ot,pe,de,at,zt,xt);P.pixelStorei(P.UNPACK_ROW_LENGTH,tn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ci),fe===0&&V.generateMipmaps&&P.generateMipmap(Ee),xe.unbindTexture()},this.initRenderTarget=function(E){x.get(E).__webglFramebuffer===void 0&&O.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?O.setTextureCube(E,0):E.isData3DTexture?O.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?O.setTexture2DArray(E,0):O.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){C=0,D=0,L=null,xe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}var rx=xr('<div style=position:absolute;user-select:none;touch-action:none><div style="position:absolute;transform:translate(-50%, -50%);border:5px solid rgba(255,255,255,0.5)"><div style=position:absolute;transform:translate(-50%,-50%);background-color:rgba(255,255,255,0.5)>');function ox(n){let e=lt(n.position),t=lt(typeof n.hitAreaSize=="function"?n.hitAreaSize():n.hitAreaSize),i=lt(n.outerRingSize),s=lt(n.knobSize),r=lt(),o=Ht(()=>{let c=r[0]();return c==null?new Be:new Be().copy(c).multiplyScalar(1/i[0]())});return{position:e,hitAreaSize:t,outerRingSize:i,knobSize:s,dragOffset:r,value:o,UI:()=>{let[c,l]=lt(!1),[u,h]=lt(),[f,p]=r,[_,v]=lt(),m,d=M=>{let T=_();if(T==null)return;m=M.pointerId,T.setPointerCapture(m);let A=T.getBoundingClientRect();h(new Be(M.clientX-A.left,M.clientY-A.top)),p(new Be)},y=M=>{let T=_();if(T==null)return;let A=u();if(A==null)return;T.setPointerCapture(M.pointerId);let w=T.getBoundingClientRect(),g=new Be(M.clientX-w.left-A.x,M.clientY-w.top-A.y),S=g.length();S>.5*i[0]()&&g.multiplyScalar(.5*i[0]()/S),p(g)},b=M=>{_()!=null&&m!=null&&(h(void 0),p(void 0))};return(()=>{var M=rx(),T=M.firstChild,A=T.firstChild;M.$$contextmenu=g=>g.preventDefault(),M.$$pointerup=b,M.$$pointermove=y,M.$$pointerdown=d;var w=v;return typeof w=="function"||Array.isArray(w)?Co(()=>w,M):v=M,Rs(()=>({e:`${e[0]().x}px`,t:`${e[0]().y}px`,a:`${t[0]()}px`,o:`${t[0]()}px`,i:`${u()?.x??.5*t[0]()}px`,n:`${u()?.y??.5*t[0]()}px`,s:`${i[0]()}px`,h:`${i[0]()}px`,r:`${.5*i[0]()+2.5}px`,d:`${.5*i[0]()+(f()?.x??0)}px`,l:`${.5*i[0]()+(f()?.y??0)}px`,u:`${s[0]()}px`,c:`${s[0]()}px`,w:`${.5*s[0]()}px`}),({e:g,t:S,a:B,o:C,i:D,n:L,s:z,h:N,r:I,d:U,l:j,u:Z,c:ne,w:le},J)=>{g!==J.e&&Tt(M,"left",g),S!==J.t&&Tt(M,"top",S),B!==J.a&&Tt(M,"width",B),C!==J.o&&Tt(M,"height",C),D!==J.i&&Tt(T,"left",D),L!==J.n&&Tt(T,"top",L),z!==J.s&&Tt(T,"width",z),N!==J.h&&Tt(T,"height",N),I!==J.r&&Tt(T,"border-radius",I),U!==J.d&&Tt(A,"left",U),j!==J.l&&Tt(A,"top",j),Z!==J.u&&Tt(A,"width",Z),ne!==J.c&&Tt(A,"height",ne),le!==J.w&&Tt(A,"border-radius",le)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0}),M})()}}}Vl(["pointerdown","pointermove","pointerup","contextmenu"]);var ax=xr("<div style=position:absolute;user-select:none;touch-action:none>");function lx(n){let e=lt(n.position),t=lt(n.size()),[i,s]=lt(!1);return{position:e,size:t,pressed:i,UI:()=>{let[o,a]=lt(),c,l=h=>{let f=o();f!=null&&(c=h.pointerId,f.setPointerCapture(c),s(!0))},u=h=>{o()!=null&&c!=null&&s(!1)};return(()=>{var h=ax();h.$$contextmenu=p=>p.preventDefault(),h.$$pointerup=u,h.$$pointerdown=l;var f=a;return typeof f=="function"||Array.isArray(f)?Co(()=>f,h):a=h,Rs(()=>({e:`${e[0]().x}px`,t:`${e[0]().y}px`,a:`${t[0]()}px`,o:`${t[0]()}px`,i:`${.5*t[0]()}px`,n:i()?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.5)"}),({e:p,t:_,a:v,o:m,i:d,n:y},b)=>{p!==b.e&&Tt(h,"left",p),_!==b.t&&Tt(h,"top",_),v!==b.a&&Tt(h,"width",v),m!==b.o&&Tt(h,"height",m),d!==b.i&&Tt(h,"border-radius",d),y!==b.n&&Tt(h,"background-color",y)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),h})()}}}Vl(["pointerdown","pointerup","contextmenu"]);class cx extends Error{constructor(e,t,i){super(e),this.is_operational=t,this.context=i,this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}var Oh=(n=>(n.EID_MAX_INDEX_OVERFLOW="EID_MAX_INDEX_OVERFLOW",n.EID_MAX_GEN_OVERFLOW="EID_MAX_GEN_OVERFLOW",n.COMPONENT_NOT_REGISTERED="COMPONENT_NOT_REGISTERED",n.ENTITY_NOT_ALIVE="ENTITY_NOT_ALIVE",n.CIRCULAR_SYSTEM_DEPENDENCY="CIRCULAR_SYSTEM_DEPENDENCY",n.DUPLICATE_SYSTEM="DUPLICATE_SYSTEM",n.ARCHETYPE_NOT_FOUND="ARCHETYPE_NOT_FOUND",n.RESOURCE_NOT_REGISTERED="RESOURCE_NOT_REGISTERED",n))(Oh||{});class ux extends cx{constructor(e,t,i){super(t??e,!0,i),this.category=e}}function yr(n,e,t){return n}const Rn=-1,yn=-1,sr=Object.freeze(Object.create(null)),Oi=5,Bi=31,hx=2166136261,fx=16777619,dx=2654435769,px=1367130551,ai=16,Su=2,Bh=1024,Zr=0,Mu=0,mx=31,_x=1/60,gx=4,xx=0,vx=4;class si{_words;constructor(e){this._words=e??new Array(vx).fill(0)}has(e){const t=e>>>Oi;return t>=this._words.length?!1:(this._words[t]&1<<(e&Bi))!==0}set(e){const t=e>>>Oi;t>=this._words.length&&this.grow(t+1),this._words[t]|=1<<(e&Bi)}clear(e){const t=e>>>Oi;t>=this._words.length||(this._words[t]&=~(1<<(e&Bi)))}overlaps(e){const t=this._words,i=e._words,s=t.length<i.length?t.length:i.length;for(let r=0;r<s;r++)if((t[r]&i[r])!==0)return!0;return!1}contains(e){const t=e._words,i=this._words,s=i.length;for(let r=0;r<t.length;r++){const o=t[r];if(o!==0&&(r>=s||(i[r]&o)!==o))return!1}return!0}equals(e){const t=this._words,i=e._words,s=t.length>i.length?t.length:i.length;for(let r=0;r<s;r++){const o=r<t.length?t[r]:0,a=r<i.length?i[r]:0;if(o!==a)return!1}return!0}copy(){return new si(this._words.slice())}copy_with_set(e){const t=e>>>Oi,i=t+1,s=this._words.length>i?this._words.length:i,r=new Array(s).fill(0);for(let o=0;o<this._words.length;o++)r[o]=this._words[o];return r[t]|=1<<(e&Bi),new si(r)}copy_with_clear(e){const t=this._words.slice(),i=e>>>Oi;return i<t.length&&(t[i]&=~(1<<(e&Bi))),new si(t)}hash(){let e=hx;const t=this._words;let i=t.length-1;for(;i>=0&&t[i]===0;)i--;for(let s=0;s<=i;s++)e^=t[s],e=Math.imul(e,fx);return e}for_each(e){const t=this._words;for(let i=0;i<t.length;i++){let s=t[i];if(s===0)continue;const r=i<<Oi;for(;s!==0;){const o=s&-s>>>0,a=Bi-Math.clz32(o);e(r+a),s^=o}}}grow(e){let t=this._words.length;for(;t<e;)t*=2;const i=new Array(t).fill(0);for(let s=0;s<this._words.length;s++)i[s]=this._words[s];this._words=i}}class Ai{constructor(e,t=ai){this._ctor=e,this._buf=new e(t)}_buf;_len=0;get length(){return this._len}push(e){this._len>=this._buf.length&&this._grow(),this._buf[this._len++]=e}pop(){return this._buf[--this._len]}get(e){return this._buf[e]}set_at(e,t){this._buf[e]=t}swap_remove(e){const t=this._buf[e];return this._buf[e]=this._buf[--this._len],t}clear(){this._len=0}get buf(){return this._buf}view(){return this._buf.subarray(0,this._len)}[Symbol.iterator](){let e=0;const t=this._buf,i=this._len;return{next(){return e<i?{value:t[e++],done:!1}:{value:0,done:!0}}}}ensure_capacity(e){if(e<=this._buf.length)return;let t=this._buf.length||1;for(;t<e;)t*=Su;const i=new this._ctor(t);i.set(this._buf.subarray(0,this._len)),this._buf=i}bulk_append(e,t,i){this.ensure_capacity(this._len+i),this._buf.set(e.subarray(t,t+i),this._len),this._len+=i}bulk_append_zeroes(e){this.ensure_capacity(this._len+e),this._buf.fill(0,this._len,this._len+e),this._len+=e}_grow(){const e=new this._ctor(this._buf.length*Su);e.set(this._buf),this._buf=e}}class yx extends Ai{constructor(e=ai){super(Float32Array,e)}}class Sx extends Ai{constructor(e=ai){super(Float64Array,e)}}class Mx extends Ai{constructor(e=ai){super(Int8Array,e)}}class Ex extends Ai{constructor(e=ai){super(Int16Array,e)}}class bx extends Ai{constructor(e=ai){super(Int32Array,e)}}class Tx extends Ai{constructor(e=ai){super(Uint8Array,e)}}class Ax extends Ai{constructor(e=ai){super(Uint16Array,e)}}class zh extends Ai{constructor(e=ai){super(Uint32Array,e)}}const wx={f32:yx,f64:Sx,i8:Mx,i16:Ex,i32:bx,u8:Tx,u16:Ax,u32:zh},$i=20,lo=(1<<$i)-1,Rx=mx-$i,Eu=(1<<Rx)-1,Cx=(n,e)=>e<<$i|n,rn=n=>n&lo,bu=n=>n>>$i,Px=n=>yr(n),Dx=n=>yr(n);class Ix{field_names;columns;reader;constructor(e){this.field_names=e,this.columns=[];for(let i=0;i<e.length;i++)this.columns.push([]);const t={length:0};for(let i=0;i<e.length;i++)t[e[i]]=this.columns[i];this.reader=t}emit(e){const t=this.field_names,i=this.columns;for(let s=0;s<t.length;s++)i[s].push(e[t[s]]);this.reader.length++}emit_signal(){this.reader.length++}clear(){this.reader.length=0;const e=this.columns;for(let t=0;t<e.length;t++)e[t].length=0}}const Lx=n=>yr(n);class Ux{field_names;field_index;columns;reader;constructor(e,t){this.field_names=e,this.field_index=Object.create(null),this.columns=[];for(let r=0;r<e.length;r++)this.field_index[e[r]]=r,this.columns.push([t[e[r]]??0]);const i=Object.create(null),s=this.columns;for(let r=0;r<e.length;r++){const o=s[r];Object.defineProperty(i,e[r],{get(){return o[Zr]},enumerable:!0})}this.reader=i}write(e){const t=this.field_names,i=this.columns;for(let s=0;s<t.length;s++)t[s]in e&&(i[s][Zr]=e[t[s]])}read_field(e){return this.columns[e][Zr]}write_field(e,t){this.columns[e][Zr]=t}}const Nx=n=>yr(n);class Fx{id;mask;has_columns;_entity_ids;length=0;edges=[];_flat_columns=[];_col_offset=[];_field_count=[];_field_index=[];_field_names=[];column_groups=[];_column_ids=[];constructor(e,t,i,s=Bh){if(this.id=e,this.mask=t,this._entity_ids=new zh(s),i){let r=0;for(let o=0;o<i.length;o++){const a=i[o],c=a.component_id,l=new Array(a.field_names.length);this._col_offset[c]=r,this._field_count[c]=a.field_names.length,this._field_index[c]=a.field_index,this._field_names[c]=a.field_names;for(let u=0;u<a.field_names.length;u++){const h=new wx[a.field_types[u]](s);l[u]=h,this._flat_columns[r++]=h}this.column_groups[c]={layout:a,columns:l},this._column_ids.push(c)}}this.has_columns=this._column_ids.length>0}get entity_count(){return this.length}get entity_ids(){return this._entity_ids.buf}get entity_list(){return this._entity_ids.view()}has_component(e){return this.mask.has(e)}matches(e){return this.mask.contains(e)}get_column(e,t){const i=e,s=this._field_index[i][t];return this._flat_columns[this._col_offset[i]+s].buf}write_fields(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return;const o=this._field_names[s],a=this._flat_columns;for(let c=0;c<o.length;c++)a[r+c].buf[e]=i[o[c]]}write_fields_positional(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return;const o=this._flat_columns;for(let a=0;a<i.length;a++)o[r+a].buf[e]=i[a]}read_field(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return NaN;const o=this._field_index[s][i];return o===void 0?NaN:this._flat_columns[r+o].buf[e]}copy_shared_from(e,t,i){const s=e._col_offset,r=e._field_count,o=e._flat_columns,a=this._flat_columns,c=this._column_ids;for(let l=0;l<c.length;l++){const u=c[l],h=s[u];if(h===void 0)continue;const f=this._col_offset[u],p=r[u];for(let _=0;_<p;_++)a[f+_].buf[i]=o[h+_].buf[t]}}add_entity(e){const t=this.length;this._entity_ids.push(e);const i=this._flat_columns;for(let s=0;s<i.length;s++)i[s].push(0);return this.length++,t}remove_entity(e){const t=this.length-1;let i=yn;const s=this._flat_columns,r=this._entity_ids.buf;if(e!==t){r[e]=r[t],i=rn(r[e]);for(let o=0;o<s.length;o++)s[o].swap_remove(e)}else for(let o=0;o<s.length;o++)s[o].pop();return this._entity_ids.pop(),this.length--,i}add_entity_tag(e){const t=this.length;return this._entity_ids.push(e),this.length++,t}remove_entity_tag(e){const t=this.length-1;let i=yn;const s=this._entity_ids.buf;return e!==t&&(s[e]=s[t],i=rn(s[e])),this._entity_ids.pop(),this.length--,i}move_entity_from(e,t,i,s){const r=this.length;this._entity_ids.push(i);const o=this._flat_columns,a=e._flat_columns;for(let l=0;l<o.length;l++){const u=s[l];o[l].push(u>=0?a[u].buf[t]:0)}this.length++;const c=e.has_columns?e.remove_entity(t):e.remove_entity_tag(t);vt[0]=r,vt[1]=c}move_entity_from_tag(e,t,i){const s=this.length;this._entity_ids.push(i),this.length++;const r=e.remove_entity_tag(t);vt[0]=s,vt[1]=r}bulk_move_all_from(e,t){const i=e.length;if(i===0)return this.length;const s=this.length,r=this._flat_columns,o=e._flat_columns;this._entity_ids.bulk_append(e._entity_ids.buf,0,i);for(let a=0;a<r.length;a++){const c=t[a];c>=0?r[a].bulk_append(o[c].buf,0,i):r[a].bulk_append_zeroes(i)}this.length+=i,e.length=0,e._entity_ids.clear();for(let a=0;a<o.length;a++)o[a].clear();return s}get_edge(e){return this.edges[e]}set_edge(e,t){this.edges[e]=t}}const vt=[0,yn];function jr(n,e){const t=e._flat_columns,i=new Int16Array(t.length),s=e._column_ids,r=n._col_offset,o=e._col_offset,a=e._field_count;for(let c=0;c<s.length;c++){const l=s[c],u=o[l],h=a[l],f=r[l];if(f!==void 0)for(let p=0;p<h;p++)i[u+p]=f+p;else for(let p=0;p<h;p++)i[u+p]=-1}return i}function Vh(n,e,t){const i=n.get(e);i!==void 0?i.push(t):n.set(e,[t])}class Ox{entity_generations=[];entity_high_water=0;entity_free_indices=[];entity_alive_count=0;component_metas=[];component_count=0;event_channels=[];event_count=0;resource_channels=[];resource_count=0;archetypes=[];archetype_map=new Map;next_archetype_id=0;component_index=new Map;registered_queries=[];empty_archetype_id;entity_archetype=[];entity_row=[];pending_destroy=[];pending_add_ids=[];pending_add_defs=[];pending_add_values=[];pending_remove_ids=[];pending_remove_defs=[];initial_capacity;constructor(e){this.initial_capacity=e??Bh,this.empty_archetype_id=this.arch_get_or_create_from_mask(new si)}arch_get(e){return this.archetypes[e]}arch_get_or_create_from_mask(e){const t=e.hash(),i=this.archetype_map.get(t);if(i!==void 0){for(let c=0;c<i.length;c++)if(this.archetypes[i[c]].mask.equals(e))return i[c]}const s=Nx(this.next_archetype_id++),r=[];e.for_each(c=>{const l=c,u=this.component_metas[l];u&&u.field_names.length>0&&r.push({component_id:l,field_names:u.field_names,field_index:u.field_index,field_types:u.field_types})});const o=new Fx(s,e,r,this.initial_capacity);this.archetypes.push(o),Vh(this.archetype_map,t,s),e.for_each(c=>{const l=c;let u=this.component_index.get(l);u||(u=new Set,this.component_index.set(l,u)),u.add(s)});const a=this.registered_queries;for(let c=0;c<a.length;c++){const l=a[c];o.matches(l.include_mask)&&(!l.exclude_mask||!o.mask.overlaps(l.exclude_mask))&&(!l.any_of_mask||o.mask.overlaps(l.any_of_mask))&&l.result.push(o)}return s}arch_resolve_add(e,t){const i=this.arch_get(e);if(i.mask.has(t))return e;const s=i.get_edge(t);if(s?.add!=null)return s.add;const r=this.arch_get_or_create_from_mask(i.mask.copy_with_set(t));return this.arch_cache_edge(i,this.arch_get(r),t),r}arch_resolve_remove(e,t){const i=this.arch_get(e);if(!i.mask.has(t))return e;const s=i.get_edge(t);if(s?.remove!=null)return s.remove;const r=this.arch_get_or_create_from_mask(i.mask.copy_with_clear(t));return this.arch_cache_edge(this.arch_get(r),i,t),r}arch_cache_edge(e,t,i){const s=e.get_edge(i)??{add:null,remove:null,add_map:null,remove_map:null};s.add=t.id,s.add_map=jr(e,t),e.set_edge(i,s);const r=t.get_edge(i)??{add:null,remove:null,add_map:null,remove_map:null};r.remove=e.id,r.remove_map=jr(t,e),t.set_edge(i,r)}create_entity(){let e,t;this.entity_free_indices.length>0?(e=this.entity_free_indices.pop(),t=this.entity_generations[e]):(e=this.entity_high_water++,this.entity_generations[e]=Mu,t=Mu),this.entity_alive_count++;const i=Cx(e,t);return this.entity_archetype[e]=this.empty_archetype_id,this.entity_row[e]=Rn,i}destroy_entity(e){if(!this.is_alive(e))return;const t=rn(e),i=this.entity_row[t];if(i!==Rn){const r=this.arch_get(this.entity_archetype[t]).remove_entity(i);r!==yn&&(this.entity_row[r]=i)}this.entity_archetype[t]=Rn,this.entity_row[t]=Rn;const s=bu(e);this.entity_generations[t]=s+1&Eu,this.entity_free_indices.push(t),this.entity_alive_count--}is_alive(e){const t=rn(e);return t<this.entity_high_water&&this.entity_generations[t]===bu(e)}get entity_count(){return this.entity_alive_count}destroy_entity_deferred(e){this.pending_destroy.push(e)}flush_destroyed(){const e=this.pending_destroy;if(e.length===0)return;const t=this.entity_archetype,i=this.entity_row,s=this.entity_generations,r=this.archetypes,o=this.entity_high_water;for(let a=0;a<e.length;a++){const c=e[a],l=c&lo,u=c>>$i;if(l>=o||s[l]!==u)continue;const h=i[l];if(h!==Rn){const f=r[t[l]],p=f.has_columns?f.remove_entity(h):f.remove_entity_tag(h);p!==yn&&(i[p]=h)}t[l]=Rn,i[l]=Rn,s[l]=u+1&Eu,this.entity_free_indices.push(l),this.entity_alive_count--}e.length=0}get pending_destroy_count(){return this.pending_destroy.length}add_component_deferred(e,t,i){this.pending_add_ids.push(e),this.pending_add_defs.push(t),this.pending_add_values.push(i??sr)}remove_component_deferred(e,t){this.pending_remove_ids.push(e),this.pending_remove_defs.push(t)}flush_structural(){this.pending_add_ids.length>0&&this._flush_adds(),this.pending_remove_ids.length>0&&this._flush_removes()}_flush_adds(){const e=this.pending_add_ids,t=this.pending_add_defs,i=this.pending_add_values,s=e.length,r=this.entity_archetype,o=this.entity_row,a=this.entity_generations,c=this.archetypes,l=this.component_metas,u=this.entity_high_water;for(let h=0;h<s;h++){const f=e[h],p=f&lo,_=f>>$i;if(p>=u||a[p]!==_)continue;const v=r[p],m=t[h],d=c[v];if(d.mask.has(m)){l[m].field_names.length>0&&d.write_fields(o[p],m,i[h]);continue}const y=this.arch_resolve_add(v,m),b=c[y],M=o[p],T=!b.has_columns&&!d.has_columns;let A;if(M!==Rn){if(T)b.move_entity_from_tag(d,M,f);else{const w=d.get_edge(m);b.move_entity_from(d,M,f,w.add_map)}A=vt[0],vt[1]!==yn&&(o[vt[1]]=M)}else A=T?b.add_entity_tag(f):b.add_entity(f);l[m].field_names.length>0&&b.write_fields(A,m,i[h]),r[p]=y,o[p]=A}e.length=0,t.length=0,i.length=0}_flush_removes(){const e=this.pending_remove_ids,t=this.pending_remove_defs,i=e.length,s=this.entity_archetype,r=this.entity_row,o=this.entity_generations,a=this.archetypes,c=this.entity_high_water;for(let l=0;l<i;l++){const u=e[l],h=u&lo,f=u>>$i;if(h>=c||o[h]!==f)continue;const p=s[h],_=t[l],v=a[p];if(!v.mask.has(_))continue;const m=this.arch_resolve_remove(p,_),d=a[m],y=r[h];if(!d.has_columns&&!v.has_columns)d.move_entity_from_tag(v,y,u);else{const b=v.get_edge(_);d.move_entity_from(v,y,u,b.remove_map)}vt[1]!==yn&&(r[vt[1]]=y),s[h]=m,r[h]=vt[0]}e.length=0,t.length=0}get pending_structural_count(){return this.pending_add_ids.length+this.pending_remove_ids.length}register_component(e){const t=Px(this.component_count++),i=Object.keys(e),s=new Array(i.length),r=Object.create(null);for(let o=0;o<i.length;o++)r[i[o]]=o,s[o]=e[i[o]];return this.component_metas.push({field_names:i,field_index:r,field_types:s}),t}add_component(e,t,i){if(!this.is_alive(e))return;const s=rn(e),r=this.entity_archetype[s],o=this.arch_get(r);if(o.has_component(t)){o.write_fields(this.entity_row[s],t,i);return}const a=this.arch_resolve_add(r,t),c=this.arch_get(a),l=this.entity_row[s];let u;if(l!==Rn){const h=o.get_edge(t);!c.has_columns&&!o.has_columns?c.move_entity_from_tag(o,l,e):c.move_entity_from(o,l,e,h.add_map),u=vt[0],vt[1]!==yn&&(this.entity_row[vt[1]]=l)}else u=c.has_columns?c.add_entity(e):c.add_entity_tag(e);c.write_fields(u,t,i),this.entity_archetype[s]=a,this.entity_row[s]=u}add_components(e,t){if(!this.is_alive(e))return;const i=rn(e),s=this.entity_archetype[i];let r=s;for(let o=0;o<t.length;o++)r=this.arch_resolve_add(r,t[o].def);if(r!==s){const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[i];let l;if(c!==Rn){const u=jr(o,a);a.move_entity_from(o,c,e,u),l=vt[0],vt[1]!==yn&&(this.entity_row[vt[1]]=c)}else l=a.add_entity(e);for(let u=0;u<t.length;u++)a.write_fields(l,t[u].def,t[u].values??sr);this.entity_archetype[i]=r,this.entity_row[i]=l}else{const o=this.arch_get(s),a=this.entity_row[i];for(let c=0;c<t.length;c++)o.write_fields(a,t[c].def,t[c].values??sr)}}remove_component(e,t){if(!this.is_alive(e))return;const i=rn(e),s=this.entity_archetype[i],r=this.arch_get(s);if(!r.has_component(t))return;const o=this.arch_resolve_remove(s,t),a=this.arch_get(o),c=this.entity_row[i],l=r.get_edge(t);!a.has_columns&&!r.has_columns?a.move_entity_from_tag(r,c,e):a.move_entity_from(r,c,e,l.remove_map),vt[1]!==yn&&(this.entity_row[vt[1]]=c),this.entity_archetype[i]=o,this.entity_row[i]=vt[0]}remove_components(e,t){if(!this.is_alive(e))return;const i=rn(e),s=this.entity_archetype[i];let r=s;for(let u=0;u<t.length;u++)r=this.arch_resolve_remove(r,t[u]);if(r===s)return;const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[i],l=jr(o,a);a.move_entity_from(o,c,e,l),vt[1]!==yn&&(this.entity_row[vt[1]]=c),this.entity_archetype[i]=r,this.entity_row[i]=vt[0]}has_component(e,t){if(!this.is_alive(e))return!1;const i=rn(e);return this.arch_get(this.entity_archetype[i]).has_component(t)}batch_add_component(e,t,i){if(e.length===0)return;const s=t;if(e.mask.has(s))return;const r=this.arch_resolve_add(e.id,s),o=this.arch_get(r),a=e.get_edge(s),c=e.length,l=this.entity_archetype,u=this.entity_row,h=o.bulk_move_all_from(e,a.add_map);for(let f=0;f<c;f++){const p=rn(o.entity_ids[h+f]);l[p]=r,u[p]=h+f}if(this.component_metas[s].field_names.length>0&&i)for(let f=0;f<c;f++)o.write_fields(h+f,s,i)}batch_remove_component(e,t){if(e.length===0)return;const i=t;if(!e.mask.has(i))return;const s=this.arch_resolve_remove(e.id,i),r=this.arch_get(s),o=e.get_edge(i),a=e.length,c=r.bulk_move_all_from(e,o.remove_map),l=this.entity_archetype,u=this.entity_row;for(let h=0;h<a;h++){const f=rn(r.entity_ids[c+h]);l[f]=s,u[f]=c+h}}get_entity_archetype(e){return this.arch_get(this.entity_archetype[rn(e)])}get_entity_row(e){return this.entity_row[rn(e)]}get_matching_archetypes(e,t,i){const s=e._words;let r=!1;for(let l=0;l<s.length;l++)if(s[l]!==0){r=!0;break}if(!r)return this.archetypes.filter(l=>(!t||!l.mask.overlaps(t))&&(!i||l.mask.overlaps(i)));let o,a=!1;for(let l=0;l<s.length;l++){let u=s[l];if(u===0)continue;const h=l<<Oi;for(;u!==0;){const f=u&-u>>>0,p=h+(Bi-Math.clz32(f));u^=f;const _=this.component_index.get(p);if(!_||_.size===0){a=!0;break}(!o||_.size<o.size)&&(o=_)}if(a)break}if(a||!o)return[];const c=[];for(const l of o){const u=this.arch_get(l);u.matches(e)&&(!t||!u.mask.overlaps(t))&&(!i||u.mask.overlaps(i))&&c.push(u)}return c}register_query(e,t,i){const s=this.get_matching_archetypes(e,t,i);return this.registered_queries.push({include_mask:e.copy(),exclude_mask:t?t.copy():null,any_of_mask:i?i.copy():null,result:s}),s}get archetype_count(){return this.archetypes.length}register_event(e){const t=Dx(this.event_count++),i=new Ix(e);return this.event_channels.push(i),t}emit_event(e,t){this.event_channels[e].emit(t)}emit_signal(e){this.event_channels[e].emit_signal()}get_event_reader(e){return this.event_channels[e].reader}clear_events(){const e=this.event_channels;for(let t=0;t<e.length;t++)e[t].clear()}register_resource(e,t){const i=Lx(this.resource_count++),s=new Ux(e,t);return this.resource_channels.push(s),i}get_resource_reader(e){return this.resource_channels[e].reader}get_resource_channel(e){return this.resource_channels[e]}}const Ea=["PRE_STARTUP","STARTUP","POST_STARTUP"],ba=["PRE_UPDATE","UPDATE","POST_UPDATE"];class Bx{label_systems=new Map;sorted_cache=new Map;system_index=new Map;next_insertion_order=0;constructor(){for(let e=0;e<Ea.length;e++)this.label_systems.set(Ea[e],[]);this.label_systems.set("FIXED_UPDATE",[]);for(let e=0;e<ba.length;e++)this.label_systems.set(ba[e],[])}add_systems(e,...t){for(const i of t){const s="system"in i?i.system:i,r="system"in i?i.ordering:void 0,o={descriptor:s,insertion_order:this.next_insertion_order++,before:new Set(r?.before??[]),after:new Set(r?.after??[])};this.label_systems.get(e).push(o),this.system_index.set(s,e),this.sorted_cache.delete(e)}}remove_system(e){const t=this.system_index.get(e);if(t===void 0)return;const i=this.label_systems.get(t),s=i.findIndex(r=>r.descriptor===e);if(s!==-1){const r=i.length-1;s!==r&&(i[s]=i[r]),i.pop();for(const o of i)o.before.delete(e),o.after.delete(e)}this.system_index.delete(e),this.sorted_cache.delete(t)}run_startup(e){for(const t of Ea)this.run_label(t,e,xx)}run_update(e,t){for(const i of ba)this.run_label(i,e,t)}run_fixed_update(e,t){this.run_label("FIXED_UPDATE",e,t)}has_fixed_systems(){return this.label_systems.get("FIXED_UPDATE").length>0}get_all_systems(){const e=[];for(const t of this.label_systems.values())for(const i of t)e.push(i.descriptor);return e}has_system(e){return this.system_index.has(e)}clear(){for(const e of this.label_systems.values())e.length=0;this.sorted_cache.clear(),this.system_index.clear()}run_label(e,t,i){const s=this.get_sorted(e);for(let r=0;r<s.length;r++)s[r].fn(t,i);t.flush()}get_sorted(e){const t=this.sorted_cache.get(e);if(t!==void 0)return t;const i=this.label_systems.get(e),s=this.topological_sort(i,e);return this.sorted_cache.set(e,s),s}topological_sort(e,t){if(e.length===0)return[];const i=new Map,s=new Map,r=new Map,o=new Set;for(const l of e)i.set(l.descriptor,new Set),s.set(l.descriptor,0),r.set(l.descriptor,l.insertion_order),o.add(l.descriptor);for(const l of e){for(const u of l.before)o.has(u)&&(i.get(l.descriptor).add(u),s.set(u,s.get(u)+1));for(const u of l.after)o.has(u)&&(i.get(u).add(l.descriptor),s.set(l.descriptor,s.get(l.descriptor)+1))}let a=[];for(const l of e)s.get(l.descriptor)===0&&a.push(l.descriptor);a.sort((l,u)=>r.get(u)-r.get(l));const c=[];for(;a.length>0;){const l=a.pop();c.push(l);for(const u of i.get(l)){const h=s.get(u)-1;s.set(u,h),h===0&&a.push(u)}a.sort((u,h)=>r.get(h)-r.get(u))}if(c.length!==e.length){const l=new Set(c),u=e.filter(h=>!l.has(h.descriptor)).map(h=>h.descriptor.name??`system_${h.descriptor.id}`);throw new ux(Oh.CIRCULAR_SYSTEM_DEPENDENCY,`Circular system dependency detected in ${t}: [${u.join(", ")}]`)}return c}}const Tu=new WeakMap;function zx(n,e){let t=Tu.get(n);if(!t){t=Object.create(null);const{field_names:r}=n.layout;for(let o=0;o<r.length;o++){const a=o;Object.defineProperty(t,r[o],{get(){return this._columns[a][this._row]},set(c){this._columns[a][this._row]=c},enumerable:!0,configurable:!1})}Tu.set(n,t)}const i=Object.create(t),s=new Array(n.columns.length);for(let r=0;r<n.columns.length;r++)s[r]=n.columns[r].buf;return i._columns=s,i._row=e,i}class Vx{_archetypes;_defs;_resolver;_include;_exclude;_any_of;constructor(e,t,i,s,r,o){this._archetypes=e,this._defs=t,this._resolver=i,this._include=s,this._exclude=r,this._any_of=o}get archetype_count(){return this._archetypes.length}count(){const e=this._archetypes;let t=0;for(let i=0;i<e.length;i++)t+=e[i].entity_count;return t}get archetypes(){return this._archetypes}*[Symbol.iterator](){const e=this._archetypes;for(let t=0;t<e.length;t++)e[t].entity_count>0&&(yield e[t])}and(...e){const t=this._include.copy(),i=this._defs.slice();for(let s=0;s<e.length;s++)t.has(e[s])||(t.set(e[s]),i.push(e[s]));return this._resolver._resolve_query(t,this._exclude,this._any_of,i)}not(...e){const t=this._exclude?this._exclude.copy():new si;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(this._include,t,this._any_of,this._defs)}any_of(...e){const t=this._any_of?this._any_of.copy():new si;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(this._include,this._exclude,t,this._defs)}}class Gx{constructor(e){this._resolver=e}every(...e){const t=new si;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(t,null,null,e)}}class kx{store;constructor(e){this.store=e}create_entity(){return this.store.create_entity()}get_field(e,t,i){const s=this.store.get_entity_archetype(e),r=this.store.get_entity_row(e);return s.read_field(r,t,i)}set_field(e,t,i,s){const r=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),a=r.get_column(t,i);a[o]=s}ref(e,t){const i=this.store.get_entity_archetype(t),s=this.store.get_entity_row(t);return zx(i.column_groups[e],s)}destroy_entity(e){return this.store.destroy_entity_deferred(e),this}add_component(e,t,i){return this.store.add_component_deferred(e,t,i??sr),this}remove_component(e,t){return this.store.remove_component_deferred(e,t),this}flush(){this.store.flush_structural(),this.store.flush_destroyed()}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}read(e){return this.store.get_event_reader(e)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}}const Hx=n=>yr(n);class Wx{store;schedule;ctx;systems=new Set;next_system_id=0;_fixed_timestep;_accumulator=0;_max_fixed_steps;query_cache=new Map;scratch_mask=new si;constructor(e){this.store=new Ox(e?.initial_capacity),this.schedule=new Bx,this.ctx=new kx(this.store),this._fixed_timestep=e?.fixed_timestep??_x,this._max_fixed_steps=e?.max_fixed_steps??gx}get fixed_timestep(){return this._fixed_timestep}set fixed_timestep(e){this._fixed_timestep=e}get fixed_alpha(){return this._accumulator/this._fixed_timestep}register_component(e,t){if(Array.isArray(e)){const i=t??"f64",s=Object.create(null);for(const r of e)s[r]=i;return this.store.register_component(s)}return this.store.register_component(e)}register_tag(){return this.store.register_component({})}register_event(e){return this.store.register_event(e)}register_signal(){return this.store.register_event([])}register_resource(e,t){return this.store.register_resource(e,t)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}create_entity(){return this.store.create_entity()}destroy_entity_deferred(e){this.store.destroy_entity_deferred(e)}is_alive(e){return this.store.is_alive(e)}get entity_count(){return this.store.entity_count}add_component(e,t,i){return this.store.add_component(e,t,i??sr),this}add_components(e,t){this.store.add_components(e,t)}remove_component(e,t){return this.store.remove_component(e,t),this}remove_components(e,...t){this.store.remove_components(e,t)}has_component(e,t){return this.store.has_component(e,t)}batch_add_component(e,t,i){this.store.batch_add_component(e,t,i)}batch_remove_component(e,t){this.store.batch_remove_component(e,t)}get_field(e,t,i){const s=this.store.get_entity_archetype(e),r=this.store.get_entity_row(e);return s.read_field(r,t,i)}set_field(e,t,i,s){const r=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),a=r.get_column(t,i);a[o]=s}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}query(...e){const t=this.scratch_mask;t._words.fill(0);for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolve_query(t.copy(),null,null,e)}_resolve_query(e,t,i,s){const r=e.hash(),o=t?t.hash():0,a=i?i.hash():0,c=r^Math.imul(o,dx)^Math.imul(a,px)|0,l=this._find_cached(c,e,t,i);if(l!==void 0)return l.query;const u=this.store.register_query(e,t??void 0,i??void 0),h=new Vx(u,s,this,e.copy(),t?.copy()??null,i?.copy()??null);return Vh(this.query_cache,c,{include_mask:e.copy(),exclude_mask:t?.copy()??null,any_of_mask:i?.copy()??null,query:h}),h}_find_cached(e,t,i,s){const r=this.query_cache.get(e);if(r)for(let o=0;o<r.length;o++){const a=r[o];if(!(!a.include_mask.equals(t)||!(i===null?a.exclude_mask===null:a.exclude_mask!==null&&a.exclude_mask.equals(i))||!(s===null?a.any_of_mask===null:a.any_of_mask!==null&&a.any_of_mask.equals(s))))return a}}register_system(e,t){let i;if(typeof e=="function")if(t!==void 0){const o=t(new Gx(this)),a=this.ctx,c=e;i={fn:(l,u)=>c(o,a,u)}}else i={fn:e};else i=e;const s=Hx(this.next_system_id++),r=Object.freeze(Object.assign({id:s},i));return this.systems.add(r),r}add_systems(e,...t){return this.schedule.add_systems(e,...t),this}remove_system(e){this.schedule.remove_system(e),e.on_removed?.(),this.systems.delete(e)}get system_count(){return this.systems.size}startup(){for(const e of this.systems.values())e.on_added?.(this.ctx);this.schedule.run_startup(this.ctx)}update(e){if(this.schedule.has_fixed_systems()){this._accumulator+=e;const t=this._max_fixed_steps*this._fixed_timestep;for(this._accumulator>t&&(this._accumulator=t);this._accumulator>=this._fixed_timestep;)this.schedule.run_fixed_update(this.ctx,this._fixed_timestep),this._accumulator-=this._fixed_timestep}this.schedule.run_update(this.ctx,e),this.store.clear_events()}flush(){this.ctx.flush()}dispose(){for(const e of this.systems.values())e.dispose?.(),e.on_removed?.();this.systems.clear(),this.schedule.clear()}}class Xx{#e;#n;constructor(){const[e,t]=Nf({});this.#e=e,this.#n=t}track(e){e in this.#e||this.#n(t=>(t[e]=0,t)),this.#e[e]}untrack(e){this.#n(t=>(delete t[e],t))}dirty(e){e in this.#e&&this.#n(t=>(t[e]=1-t[e],t))}}class Dl{#e;#n;#t;#s;#i=0;#r=!1;#o;constructor(e,t,i,s,r){this.#t=e,this.#s=t,this.#e=i,this.#n=s,this.#o=r}get value(){return this.#t.track(this.#s),jt()!==null&&(this.#i++,this.#r||(this.#r=!0,bs(()=>{this.#i--,this.#i===0&&queueMicrotask(()=>{this.#i===0&&(this.#r=!1,this.#o?.())})}))),this.#e()}dirty(){this.#n()}}class qx{#e;#n;#t;#s;#i;constructor(e,t,i){this.#e=e,this.#n=t,this.#t=i,this.#i=`resource:${t.toString()}`,this.#s=new Map}get resourceKey(){return this.#i}#r(e){if(jt()===null)return this.#t[e];const i=`${this.#i}:${e}`;let s=this.#s.get(e);return s===void 0&&(s=new Dl(this.#e,i,()=>this.#t[e],()=>this.#e.dirty(i),()=>{this.#e.untrack(i),this.#s.delete(e)}),this.#s.set(e,s)),s.value}get delta(){return this.#r("delta")}get elapsed(){return this.#r("elapsed")}get(e){return this.#r(e)}}class Yx{#e;#n;#t;#s;#i;constructor(e,t,i){this.#e=e,this.#n=t,this.#t=i,this.#s=new Map,this.#i=new Map}get id(){return this.#t}hasComponent(e){if(jt()===null)return this.#n.has_component(this.#t,e);const i=`entity:${this.#t}:has:${e}`;let s=this.#s.get(i);return s===void 0&&(s=new Dl(this.#e,i,()=>this.#n.has_component(this.#t,e),()=>this.#e.dirty(i),()=>{this.#e.untrack(i),this.#s.delete(i)}),this.#s.set(i,s)),s.value}getField(e,t){if(jt()===null)return this.#n.get_field(this.#t,e,t);const s=`entity:${this.#t}:${e}:${t}`;let r=this.#i.get(s);return r===void 0&&(r=new Dl(this.#e,s,()=>this.#n.get_field(this.#t,e,t),()=>this.#e.dirty(s),()=>{this.#e.untrack(s),this.#i.delete(s)}),this.#i.set(s,r)),r.value}}class rr{#e;#n;#t;#s;#i;constructor(e,t,i,s){this.#e=e,this.#n=t,this.#s=i,this.#i=s,this.#t=t.query(...i)}get queryKey(){return this.#i}get archetype_count(){return jt()===null?this.#t.archetype_count:(this.#e.track(`${this.#i}:archetype_count`),this.#t.archetype_count)}count(){return jt()===null?this.#t.count():(this.#e.track(`${this.#i}:count`),this.#e.track("world:entities"),this.#t.count())}get archetypes(){return jt()===null?this.#t.archetypes:(this.#e.track(`${this.#i}:archetypes`),this.#e.track("world:entities"),this.#t.archetypes)}*[Symbol.iterator](){const e=jt();if(this.#t.archetypes,e===null){for(const t of this.#t)yield t;return}this.#e.track(`${this.#i}:archetypes`);for(const t of this.#t)yield new $x(this.#e,this.#n,t,this.#i)}and(...e){return new rr(this.#e,this.#n,[...this.#s,...e],`${this.#i}:and`)}not(...e){return new rr(this.#e,this.#n,this.#s,`${this.#i}:not`)}any_of(...e){return new rr(this.#e,this.#n,this.#s,`${this.#i}:any_of`)}}class $x{#e;#n;#t;#s;constructor(e,t,i,s){this.#e=e,this.#n=t,this.#t=i,this.#s=s}get entity_ids(){if(jt()===null)return this.#t.entity_ids;const t=`arch:${this.#t.id}:entity_ids`;return this.#e.track(t),this.#t.entity_ids}get entity_count(){if(jt()===null)return this.#t.entity_count;const t=`arch:${this.#t.id}:count`;return this.#e.track(t),this.#t.entity_count}has_component(e){if(jt()===null)return this.#t.has_component(e);const i=`arch:${this.#t.id}:has:${e}`;return this.#e.track(i),this.#t.has_component(e)}get_column(e,t){if(jt()===null)return this.#t.get_column(e,t);const s=`arch:${this.#t.id}:col`;return this.#e.track(s),this.#t.get_column(e,t)}}class Zx{#e;#n;constructor(e){this.#e=e,this.#n=new Xx}get ecs(){return this.#e}dirty(e){this.#n.dirty(e)}query(...e){const t=`query:${e.map(i=>i.toString()).join(",")}`;return new rr(this.#n,this.#e,e,t)}resource(e){return new qx(this.#n,e,this.#e.resource(e))}entity(e){return new Yx(this.#n,this.#e,e)}create_entity(){const e=this.#e.create_entity();return fn(()=>this.#n.dirty("world:entities")),e}destroy_entity_deferred(e){this.#e.destroy_entity_deferred(e),fn(()=>this.#n.dirty("world:entities"))}add_component(e,t,i){const s=`entity:${e}:has:${t}`;return this.#e.add_component(e,t,i),fn(()=>{this.#n.dirty(s),this.#n.dirty("world:entities")}),this}remove_component(e,t){const i=`entity:${e}:has:${t}`;return this.#e.remove_component(e,t),fn(()=>{this.#n.dirty(i),this.#n.dirty("world:entities")}),this}set_field(e,t,i,s){const r=`entity:${e}:${t}:${i}`;this.#e.set_field(e,t,i,s),fn(()=>this.#n.dirty(r))}set_resource(e,t){const i=this.#e.resource(e);this.#e.set_resource(e,t);for(const s of Object.keys(i))this.#n.dirty(`resource:${e.toString()}:${s}`)}}const jx={def:{x:"f64",y:"f64",z:"f64"}},Kx={def:{x:"f64",y:"f64",z:"f64"}},Jx={def:{playerType:"u8",facingForward:"u8"}},Qx={def:[]},ev={def:[]},tv={def:{x:"f64",z:"f64",jump:"u8"}},nv={def:{width:"f64",length:"f64",netHeight:"f64"}},iv={def:{size:"f64"}},sv={def:{minX:"f64",minY:"f64",minZ:"f64",maxX:"f64",maxY:"f64",maxZ:"f64"}},rv={def:[]},ov={def:{meshId:"u32"}},av={schema:{x:0,y:0,z:0}},lv={schema:{servingPlayer:0}},cv={def:{phase:"u8",serverPlayer:"u8",throwTime:"f64"}},uv={def:{side:"i8"}},wt=new Wx,hv=new Zx(wt),ue=wt.register_component(jx.def),Le=wt.register_component(Kx.def),At=wt.register_component(Jx.def),mr=wt.register_component(Qx.def),Yi=wt.register_component(ev.def),It=wt.register_component(tv.def),Jn=wt.register_component(nv.def),Ki=wt.register_component(iv.def),_i=wt.register_component(sv.def),Gh=wt.register_component(rv.def);wt.register_component(ov.def);const Uo=wt.register_resource(["x","y","z"],av.schema),fv=wt.register_resource(["servingPlayer"],lv.schema),qe=wt.register_component(cv.def),Qn=wt.register_component(uv.def);function dv(){return wt.startup(),wt.set_resource(fv,{servingPlayer:0}),wt.set_resource(Uo,{x:0,y:-10,z:0}),{ecs:hv}}function kh(n){const e=n.reactiveEcs,t=e.create_entity();e.add_component(t,ue,{x:n.position.x,y:n.position.y,z:n.position.z}),e.add_component(t,Le,{x:n.velocity.x,y:n.velocity.y,z:n.velocity.z});const i=n.playerType==="Cubey"?0:1,s=n.facingForward?1:0;return e.add_component(t,At,{playerType:i,facingForward:s}),t}function pv(n){const e=n.reactiveEcs,t=e.create_entity();return e.add_component(t,Jn,{width:n.width,length:n.length,netHeight:n.netHeight}),t}function mv(n){const e=n.reactiveEcs,t=n.position(),i=new G(0,0,0),s=e.create_entity();e.add_component(s,ue,{x:t.x,y:t.y,z:t.z}),e.add_component(s,Le,{x:i.x,y:i.y,z:i.z}),e.add_component(s,Ki,{size:n.size()});const r=n.boundary();return e.add_component(s,_i,{minX:r.min.x,minY:r.min.y,minZ:r.min.z,maxX:r.max.x,maxY:r.max.y,maxZ:r.max.z}),e.add_component(s,Gh,{}),s}function _v(n,e){return Ji(t=>(Ht(Go(Ht(()=>{let i=[];for(let s of n.query(ue,At)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i());s.getField(At,"playerType"),s.getField(At,"facingForward");let r=new qi,o,a,c=[],l,u=[];const h=new ms({color:16711680}),f=new ms({color:16776960}),p=new kt(.5,.2,.5);o=new Ke(p,h),o.position.set(0,.1,0);const _=new kt(.5,.25,.5);a=new Ke(_,h),a.position.set(0,.45,0);const v=new kt(.1,.2,.1),m=new Ke(v,f),d=new Ke(v,f);m.position.set(-.14,.3,.3),d.position.set(.14,.3,.3),c=[m,d];const y=new kt(.1,.4,.1);l=new Ke(y,f),l.position.set(0,.3,.3);const b=new Ao(.08),M=new Ke(b,f),T=new Ke(b,f);M.position.set(-.15,.48,.25),T.position.set(.15,.48,.25),u=[M,T],r.add(o),r.add(a),c.forEach(N=>r.add(N)),r.add(l),u.forEach(N=>r.add(N));const A=new qi,w=new ms({color:9127187}),g=new To(.02,.02,.3,8),S=new Ke(g,w);S.position.set(0,0,0),S.rotation.x=Math.PI/2,A.add(S);const B=new To(.4,.4,.02,16),C=new Ke(B,w);C.position.set(0,0,.15),C.rotation.x=Math.PI/2,A.add(C),A.position.set(.4,.5,.3),r.add(A);const D=new bo(.4,32);D.scale(1,.5,1);const L=new Eo({color:0,transparent:!0,opacity:.3}),z=new Ke(D,L);z.rotation.x=-Math.PI/2,z.position.y=.01,e.add(z),e.add(r),bs(()=>{e.remove(r),e.remove(z),p.dispose(),_.dispose(),v.dispose(),y.dispose(),b.dispose(),g.dispose(),B.dispose(),D.dispose(),h.dispose(),f.dispose(),w.dispose(),L.dispose()}),Ht(()=>{let N=s.getField(ue,"x"),I=s.getField(ue,"y"),U=s.getField(ue,"z"),j=s.getField(At,"facingForward"),Z=s.getField(Qn,"side");r.position.set(N,I,U),j===1?r.quaternion.set(0,1,0,0):r.quaternion.set(0,0,0,1);const ne=Z*.4;A.position.set(ne,.5,.3);const le=Math.max(.3,1-I*.1);z.scale.set(le,le,le),z.position.set(N,.01,U)})})),Ht(Go(Ht(()=>{let i=[];for(let s of n.query(Jn)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i()),r={width:s.getField(Jn,"width"),length:s.getField(Jn,"length"),netHeight:s.getField(Jn,"netHeight")};const o=new qi,a=new ms({color:3968845}),c=new ms({color:13421772,transparent:!0,opacity:.5}),l=new kt(r.width,.1,r.length),u=new Ke(l,a);u.position.y-=.05,o.add(u);const h=new ms({color:16777215}),f=.05,p=.01,_=new kt(r.width,p,f),v=new Ke(_,h);v.position.set(0,.01,-r.length/2),o.add(v);const m=new Ke(_,h);m.position.set(0,.01,r.length/2),o.add(m);const d=new kt(f,p,r.length),y=new Ke(d,h);y.position.set(-r.width/2,.01,0),o.add(y);const b=new Ke(d,h);b.position.set(r.width/2,.01,0),o.add(b);const M=6.4,T=new kt(r.width-2*f,p,f),A=new Ke(T,h);A.position.set(0,.01,-M),o.add(A);const w=new Ke(T,h);w.position.set(0,.01,M),o.add(w);const g=new kt(f,p,M*2),S=new Ke(g,h);S.position.set(0,.01,0),o.add(S);const B=8.23,C=new kt(f,p,r.length),D=new Ke(C,h);D.position.set(-B/2,.01,0),o.add(D);const L=new Ke(C,h);L.position.set(B/2,.01,0),o.add(L);const z=new kt(r.width,r.netHeight,.1),N=new Ke(z,c);N.position.y=.5*r.netHeight,o.add(N),e.add(o),bs(()=>{e.remove(o),l.dispose(),z.dispose(),a.dispose(),c.dispose(),h.dispose(),_.dispose(),d.dispose(),T.dispose(),g.dispose(),C.dispose()})})),Ht(Go(Ht(()=>{let i=[];for(let s of n.query(ue,Ki)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i()),r=s.getField(Ki,"size");const o=new Ao(r),a=new np,c=new Ke(o,a);e.add(c);const l=new bo(r,32);l.scale(1,.5,1);const u=new Eo({color:0,transparent:!0,opacity:.3}),h=new Ke(l,u);h.rotation.x=-Math.PI/2,h.position.y=.01,e.add(h),bs(()=>{e.remove(c),e.remove(h),o.dispose(),a.dispose(),l.dispose(),u.dispose()}),Ht(()=>{let f=s.getField(ue,"x"),p=s.getField(ue,"y"),_=s.getField(ue,"z");c.position.set(f,p,_);const v=Math.max(.3,1-p*.1);h.scale.set(v,v,v),h.position.set(f,.01,_)})})),{update:()=>{},dispose:t}))}function gv(n,e,t,i,s,r){return{update:()=>{const a=[],c=n.query(mr,It);for(const l of c){l.get_column(It,"x"),l.get_column(It,"z");const u=l.entity_ids;for(let h=0;h<l.entity_count;h++){const f=u[h];let p=0,_=0;i()&&(p-=1),s()&&(p+=1),t()&&(_+=1),e()&&(_-=1),p+=r().x,_+=r().y,a.push({entityId:f,moveX:p,moveZ:_})}}for(const{entityId:l,moveX:u,moveZ:h}of a){const f=l;n.set_field(f,It,"x",u),n.set_field(f,It,"z",h)}},dispose:()=>{}}}function xv(n,e){return Ji(t=>({update:s=>{const r=n.resource(Uo),a=n.query(Jn).archetypes[0],c=a?{width:a.get_column(Jn,"width")[0],length:a.get_column(Jn,"length")[0],netHeight:a.get_column(Jn,"netHeight")[0]}:void 0;let l=0,u=!1,h=!1;const f=1,p=n.query(qe);if(p.archetypes.length>0){const d=p.archetypes[0],y=d.get_column(qe,"phase");l=d.get_column(qe,"serverPlayer")[0],u=y[0]!==2,h=y[0]===f}const _=(d,y)=>{const b=d.get_column(ue,"x"),M=d.get_column(ue,"y"),T=d.get_column(ue,"z"),A=d.get_column(Le,"x"),w=d.get_column(Le,"y"),g=d.get_column(Le,"z"),S=d.get_column(It,"x"),B=d.get_column(It,"z"),C=d.get_column(It,"jump"),D=d.get_column(At,"playerType"),L=d.get_column(At,"facingForward"),z=d.entity_ids,N=d.get_column(Qn,"side");for(let I=0;I<d.entity_count;I++){const U=z[I],j={x:b[I],y:M[I],z:T[I]},Z={x:A[I],y:w[I],z:g[I]},ne={x:S[I],z:B[I],jump:C[I]},le={playerType:D[I],facingForward:L[I]};let J=j.x,Ce=j.y,ke=j.z,et=Z.x,Y=Z.y,ie=Z.z;const re=le.playerType===l;let we=N[I];if(h&&re||(J+=ne.x*7*s,ke+=ne.z*7*s,ne.x>.1?we=-1:ne.x<-.1&&(we=1)),!u&&Ce<=0?(y&&e()||!y&&ne.jump===1)&&(Y=5):Ce>0&&(Y+=r.get("y")*s),J+=et*s,Ce+=Y*s,ke+=ie*s,Ce<=0&&(Ce=0,Y=0),c){const Re=.5*c.width,ht=.5*c.length,De=.25;J<-Re+De&&(J=-Re+De),J>Re-De&&(J=Re-De),le.facingForward===1?(ke>ht-De&&(ke=ht-De),ke<De&&(ke=De)):(ke<-ht+De&&(ke=-ht+De),ke>-De&&(ke=-De))}const ye=U;n.set_field(ye,ue,"x",J),n.set_field(ye,ue,"y",Ce),n.set_field(ye,ue,"z",ke),n.set_field(ye,Le,"x",et),n.set_field(ye,Le,"y",Y),n.set_field(ye,Le,"z",ie),n.set_field(ye,Qn,"side",we)}},v=n.query(ue,Le,It,At,Qn,mr);for(const d of v.archetypes)_(d,!0);const m=n.query(ue,Le,It,At,Qn,Yi);for(const d of m.archetypes)_(d,!1)},dispose:t}))}class vv{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t)}off(e,t){const i=this.listeners.get(e);if(i){const s=i.indexOf(t);s>-1&&i.splice(s,1)}}emit(e,t){const i=this.listeners.get(e);i&&i.forEach(s=>s(t))}}const bn=new vv;bn.on("ballBounce",n=>console.log("Ball bounce:",n));function yv(n){return Ji(e=>{let t=!0,i=0;return{update:r=>{if(r===0)return;const o=n.resource(Uo);i>0&&(i-=r);const a=[];for(const c of n.query(ue,Le,Ki,_i,Gh)){const l=c.get_column(ue,"x"),u=c.get_column(ue,"y"),h=c.get_column(ue,"z"),f=c.get_column(Le,"x"),p=c.get_column(Le,"y"),_=c.get_column(Le,"z"),v=c.get_column(Ki,"size"),m=c.get_column(_i,"minX"),d=c.get_column(_i,"minY"),y=c.get_column(_i,"minZ"),b=c.get_column(_i,"maxX"),M=c.get_column(_i,"maxY"),T=c.get_column(_i,"maxZ"),A=c.entity_ids;for(let w=0;w<c.entity_count;w++){const g=A[w],S={x:l[w],y:u[w],z:h[w]},B={x:f[w],y:p[w],z:_[w]},C={size:v[w]},D={minX:m[w],minY:d[w],minZ:y[w],maxX:b[w],maxY:M[w],maxZ:T[w]};let L=B.x,z=B.y,N=B.z;L+=o.get("x")*r,z+=o.get("y")*r,N+=o.get("z")*r;let I=S.x+L*r,U=S.y+z*r,j=S.z+N*r;const Z=C.size*.5,ne=D.minX+Z,le=D.maxX-Z,J=D.minY+Z,Ce=D.maxY-Z,ke=D.minZ+Z,et=D.maxZ-Z,Y=U<=J;t&&Y&&z<0&&bn.emit("ballBounce",{z:j,y:U}),t=!Y;const ie=n.query(qe);let re=!1;if(ie.archetypes.length>0&&ie.archetypes[0].get_column(qe,"phase")[0]!==2&&(re=!0),i<=0&&!re)for(const we of n.query(ue,Le,At,Qn)){const ye=we.get_column(ue,"x")[0],Re=we.get_column(ue,"y")[0],ht=we.get_column(ue,"z")[0],De=we.get_column(Le,"x")[0],We=we.get_column(At,"playerType")[0],nt=we.get_column(At,"facingForward")[0],Fe=we.get_column(Qn,"side")[0],gt=Fe*.5,P=ye+gt,ct=Re+.5,Xe=ht+(nt===1?-.4:.4),$e=.6,xe=I-P,R=U-ct,x=j-Xe,O=Math.sqrt(xe*xe+R*R+x*x);if(console.log(`Player ${We}: pos=(${ye.toFixed(2)}, ${Re.toFixed(2)}, ${ht.toFixed(2)}), racketSide=${Fe}, racket=(${P.toFixed(2)}, ${ct.toFixed(2)}, ${Xe.toFixed(2)}), ball=(${I.toFixed(2)}, ${U.toFixed(2)}, ${j.toFixed(2)}), dist=${O.toFixed(2)}`),O<$e+Z){console.log(`HIT Player ${We}!`);const se=We===0?1:-1,be=De*3;L=xe*2+be,z=4,N=se*10,U=ct+$e+Z,i=.3,bn.emit("ballHit",{player:We});break}const $=I-S.x,K=U-S.y,X=j-S.z,me=Math.sqrt($*$+K*K+X*X);if(me>.01){const se=Math.max(0,Math.min(1,((P-S.x)*$+(ct-S.y)*K+(Xe-S.z)*X)/(me*me))),be=S.x+se*$,Pe=S.y+se*K,Q=S.z+se*X,te=be-P,ge=Pe-ct,ve=Q-Xe,he=Math.sqrt(te*te+ge*ge+ve*ve);if(console.log(`  Ray check: closestDist=${he.toFixed(2)}, racketRadius=${$e}`),he<$e+Z){console.log(`RAY HIT Player ${We}!`);const ze=We===0?1:-1,F=1-he/($e+Z),ae=De*3;L=te/he*5*F+ae,z=4,N=ze*12,U=Math.max(U,ct+$e+Z),i=.3,bn.emit("ballHit",{player:We});break}}}I<ne?(I=ne,L=-L*.8):I>le&&(I=le,L=-L*.8),U<J?(U=J,z=-z*.8,Math.abs(z)<.1&&(z=0)):U>Ce&&(U=Ce,z=-z*.8),j<ke?(j=ke,N=-N*.8):j>et&&(j=et,N=-N*.8),a.push({entityId:g,newPosX:I,newPosY:U,newPosZ:j,newVelX:L,newVelY:z,newVelZ:N})}}for(const{entityId:c,newPosX:l,newPosY:u,newPosZ:h,newVelX:f,newVelY:p,newVelZ:_}of a){const v=c;n.set_field(v,ue,"x",l),n.set_field(v,ue,"y",u),n.set_field(v,ue,"z",h),n.set_field(v,Le,"x",f),n.set_field(v,Le,"y",p),n.set_field(v,Le,"z",_)}},dispose:e}})}const Ta=0,Aa=1,Sv=2;function Mv(n,e,t,i){return Ji(s=>{let r=!1;return{update:a=>{const c=n.query(ue,At),l=n.query(ue,Le),u=n.query(qe);if(u.archetypes.length===0)return;const h=u.archetypes[0],f=h.get_column(qe,"phase"),p=h.get_column(qe,"serverPlayer"),_=h.get_column(qe,"throwTime"),v=h.entity_ids[0],m=f[0],d=p[0];_[0];let y={x:0,y:0,z:0},b={x:0,y:0,z:0};for(const T of c){const A=T.get_column(ue,"x"),w=T.get_column(ue,"y"),g=T.get_column(ue,"z"),S=T.get_column(At,"playerType");for(let B=0;B<T.entity_count;B++)if(S[B]===d){y={x:A[B],y:w[B],z:g[B]};break}}for(const T of l){const A=T.get_column(ue,"x"),w=T.get_column(ue,"y"),g=T.get_column(ue,"z"),S=T.get_column(Le,"x"),B=T.get_column(Le,"y"),C=T.get_column(Le,"z");b={x:A[0],y:w[0],z:g[0]},S[0],B[0],C[0]}if(m===Aa){const T=b.x-y.x,A=b.z-y.z;Math.sqrt(T*T+A*A)<.5&&b.y<y.y+.3&&(n.set_field(v,qe,"phase",Ta),n.set_field(v,qe,"throwTime",0))}if(m===Ta){const T=n.query(ue);if(T.archetypes.length>0){const w=T.archetypes[0].entity_ids[0],g=d===0?-.5:.5;n.set_field(w,ue,"x",y.x+g),n.set_field(w,ue,"y",y.y+.8),n.set_field(w,ue,"z",y.z)}}const M=e()&&!r;if(r=e(),M){if(m===Ta)n.set_field(v,qe,"phase",Aa),n.set_field(v,qe,"throwTime",0),n.set_field(l.archetypes[0].entity_ids[0],ue,"x",y.x),n.set_field(l.archetypes[0].entity_ids[0],ue,"y",y.y+1.5),n.set_field(l.archetypes[0].entity_ids[0],ue,"z",y.z),n.set_field(l.archetypes[0].entity_ids[0],Le,"x",0),n.set_field(l.archetypes[0].entity_ids[0],Le,"y",4),n.set_field(l.archetypes[0].entity_ids[0],Le,"z",0);else if(m===Aa){n.set_field(v,qe,"phase",Sv);const w=4*t()+(Math.random()-.5)*1,g=3+Math.random()*2,S=d===0?8:-8;n.set_field(l.archetypes[0].entity_ids[0],Le,"x",w),n.set_field(l.archetypes[0].entity_ids[0],Le,"y",g),n.set_field(l.archetypes[0].entity_ids[0],Le,"z",S),bn.emit("ballHit",{player:d});const B=n.query(ue,At);for(const C of B){const D=C.get_column(ue,"x"),L=C.get_column(ue,"y"),z=C.get_column(ue,"z"),N=C.get_column(At,"playerType");for(let I=0;I<C.entity_count;I++)if(N[I]===d){const U=C.entity_ids[I];n.set_field(U,ue,"x",D[I]),n.set_field(U,ue,"y",L[I]),n.set_field(U,ue,"z",z[I]);break}}}}},dispose:s}})}const Kr=0,Au=2,wu=23.77,Ru=10.97,Cu=["0","15","30","40","ADV"];function Ev(n,e){return Ji(t=>{let i=0,s=0;const[r,o]=lt(0),[a,c]=lt(0),[l,u]=lt(0),h=()=>{e&&e(r(),a(),l())},f=()=>{const m=r(),d=a();let y,b;return m>=4&&d>=4?m===d?(y="40",b="40"):m>d?(y="ADV",b="40"):(y="40",b="ADV"):(y=Cu[Math.min(m,4)],b=Cu[Math.min(d,4)]),{p0:y,p1:b,server:l()}},p=m=>{const d=n.query(qe);if(d.archetypes.length===0)return;const y=d.archetypes[0],b=y.get_column(qe,"phase"),M=y.get_column(qe,"serverPlayer"),T=y.entity_ids[0],A=b[0],w=M[0];if(A!==Au)return;const g=m.z<0,S=m.z>0;if(g&&(i++,console.log(`Bounce on P0 side: ${i}`),i>=2)){console.log("P0 double bounce! Point to P1"),c(a()+1),u(1-w),h();const B=l();n.set_field(T,qe,"phase",Kr),n.set_field(T,qe,"serverPlayer",B),_(n,w,B,r(),a());return}if(S&&(s++,console.log(`Bounce on P1 side: ${s}`),s>=2)){console.log("P1 double bounce! Point to P0"),o(r()+1),u(1-w),h();const B=l();n.set_field(T,qe,"phase",Kr),n.set_field(T,qe,"serverPlayer",B),_(n,w,B,r(),a());return}};bn.on("ballBounce",p);const _=(m,d,y,b,M)=>{const T=m.query(ue,At);let A={x:0,z:0};for(const g of T){const S=g.get_column(ue,"x"),B=g.get_column(ue,"y"),C=g.get_column(ue,"z"),D=g.get_column(At,"playerType");for(let L=0;L<g.entity_count;L++)if(D[L]===y){A={x:S[L],y:B[L],z:C[L]};break}}const w=m.query(ue,Le);if(w.archetypes.length>0){const S=w.archetypes[0].entity_ids[0];m.set_field(S,ue,"x",A.x),m.set_field(S,ue,"y",.1),m.set_field(S,ue,"z",A.z),m.set_field(S,Le,"x",0),m.set_field(S,Le,"y",0),m.set_field(S,Le,"z",0)}i=0,s=0,console.log(`Reset to server ${y}, score: P0=${b}, P1=${M}`)};return{update:m=>{const d=n.query(qe);if(d.archetypes.length===0)return;const y=d.archetypes[0],b=y.get_column(qe,"phase"),M=y.get_column(qe,"serverPlayer"),T=y.entity_ids[0],A=b[0],w=M[0];if(A!==Au){i=0,s=0;return}const g=n.query(ue,Le,Ki);if(g.archetypes.length===0)return;const S=g.archetypes[0],B=S.get_column(ue,"x"),C=S.get_column(ue,"y"),D=S.get_column(ue,"z"),L=S.get_column(Le,"x"),z=S.get_column(Le,"y"),N=S.get_column(Le,"z");S.entity_ids[0];const I={x:B[0],y:C[0],z:D[0]};if(L[0],z[0],N[0],I.z<-wu/2-.5||I.z>wu/2+.5||I.x<-Ru/2-.5||I.x>Ru/2+.5)if(console.log("Ball out of bounds"),I.z<0){c(a()+1),u(1-w),h();const U=l();n.set_field(T,qe,"phase",Kr),n.set_field(T,qe,"serverPlayer",U),_(n,w,U,r(),a())}else{o(r()+1),u(1-w),h();const U=l();n.set_field(T,qe,"phase",Kr),n.set_field(T,qe,"serverPlayer",U),_(n,w,U,r(),a())}},dispose:()=>{bn.off("ballBounce",p),t()},getScore:f}})}var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},co={exports:{}},bv=co.exports,Pu;function Tv(){return Pu||(Pu=1,(function(n,e){(function(t,i){i()})(bv,function(){function t(l,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\uFEFF",l],{type:l.type}):l}function i(l,u,h){var f=new XMLHttpRequest;f.open("GET",l),f.responseType="blob",f.onload=function(){c(f.response,u,h)},f.onerror=function(){console.error("could not download file")},f.send()}function s(l){var u=new XMLHttpRequest;u.open("HEAD",l,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function r(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Jr=="object"&&Jr.global===Jr?Jr:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(l,u,h){var f=o.URL||o.webkitURL,p=document.createElement("a");u=u||l.name||"download",p.download=u,p.rel="noopener",typeof l=="string"?(p.href=l,p.origin===location.origin?r(p):s(p.href)?i(l,u,h):r(p,p.target="_blank")):(p.href=f.createObjectURL(l),setTimeout(function(){f.revokeObjectURL(p.href)},4e4),setTimeout(function(){r(p)},0))}:"msSaveOrOpenBlob"in navigator?function(l,u,h){if(u=u||l.name||"download",typeof l!="string")navigator.msSaveOrOpenBlob(t(l,h),u);else if(s(l))i(l,u,h);else{var f=document.createElement("a");f.href=l,f.target="_blank",setTimeout(function(){r(f)})}}:function(l,u,h,f){if(f=f||open("","_blank"),f&&(f.document.title=f.document.body.innerText="downloading..."),typeof l=="string")return i(l,u,h);var p=l.type==="application/octet-stream",_=/constructor/i.test(o.HTMLElement)||o.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||p&&_||a)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var b=m.result;b=v?b:b.replace(/^data:[^;]*;/,"data:attachment/file;"),f?f.location.href=b:location=b,f=null},m.readAsDataURL(l)}else{var d=o.URL||o.webkitURL,y=d.createObjectURL(l);f?f.location=y:location.href=y,f=null,setTimeout(function(){d.revokeObjectURL(y)},4e4)}});o.saveAs=c.saveAs=c,n.exports=c})})(co)),co.exports}var Av=Tv();class Sr{inputSize;hiddenSizes;outputSize;weights1;biases1;weights2;biases2;constructor(e){this.inputSize=e.inputSize,this.hiddenSizes=e.hiddenSizes,this.outputSize=e.outputSize,this.weights1=this.createMatrix(this.inputSize,this.hiddenSizes[0]),this.biases1=new Array(this.hiddenSizes[0]).fill(0),this.weights2=this.createMatrix(this.hiddenSizes[0],this.outputSize),this.biases2=new Array(this.outputSize).fill(0),this.initializeWeights()}createMatrix(e,t){return Array.from({length:e},()=>Array(t).fill(0))}initializeWeights(){const e=Math.sqrt(2/this.inputSize);for(let i=0;i<this.weights1.length;i++)for(let s=0;s<this.weights1[i].length;s++)this.weights1[i][s]=(Math.random()-.5)*2*e;const t=Math.sqrt(2/this.hiddenSizes[0]);for(let i=0;i<this.weights2.length;i++)for(let s=0;s<this.weights2[i].length;s++)this.weights2[i][s]=(Math.random()-.5)*2*t}relu(e){return Math.max(0,e)}reluDeriv(e){return e>0?1:0}tanh(e){return Math.tanh(e)}sigmoid(e){return 1/(1+Math.exp(-Math.max(-500,Math.min(500,e))))}forward(e){const t=new Array(this.hiddenSizes[0]).fill(0);for(let s=0;s<this.hiddenSizes[0];s++){let r=this.biases1[s];for(let o=0;o<this.inputSize;o++)r+=e[o]*this.weights1[o][s];t[s]=this.relu(r)}const i=new Array(this.outputSize).fill(0);for(let s=0;s<this.outputSize;s++){let r=this.biases2[s];for(let o=0;o<this.hiddenSizes[0];o++)r+=t[o]*this.weights2[o][s];i[s]=this.tanh(r)}return i}train(e,t,i){const s=new Array(this.hiddenSizes[0]).fill(0);for(let c=0;c<this.hiddenSizes[0];c++){let l=this.biases1[c];for(let u=0;u<this.inputSize;u++)l+=e[u]*this.weights1[u][c];s[c]=this.relu(l)}const r=new Array(this.outputSize).fill(0);for(let c=0;c<this.outputSize;c++){let l=this.biases2[c];for(let u=0;u<this.hiddenSizes[0];u++)l+=s[u]*this.weights2[u][c];r[c]=this.tanh(l)}const o=new Array(this.outputSize).fill(0);for(let c=0;c<this.outputSize;c++)o[c]=(t[c]-r[c])*(1-r[c]*r[c]);const a=new Array(this.hiddenSizes[0]).fill(0);for(let c=0;c<this.hiddenSizes[0];c++){let l=0;for(let u=0;u<this.outputSize;u++)l+=o[u]*this.weights2[c][u];a[c]=l*this.reluDeriv(s[c])}for(let c=0;c<this.outputSize;c++){this.biases2[c]+=i*o[c];for(let l=0;l<this.hiddenSizes[0];l++)this.weights2[l][c]+=i*o[c]*s[l]}for(let c=0;c<this.hiddenSizes[0];c++){this.biases1[c]+=i*a[c];for(let l=0;l<this.inputSize;l++)this.weights1[l][c]+=i*a[c]*e[l]}}toJSON(){return{inputSize:this.inputSize,hiddenSizes:this.hiddenSizes,outputSize:this.outputSize,weights1:this.weights1,biases1:this.biases1,weights2:this.weights2,biases2:this.biases2}}static fromJSON(e){const t=new Sr({inputSize:e.inputSize,hiddenSizes:e.hiddenSizes,outputSize:e.outputSize});return t.weights1=e.weights1,t.biases1=e.biases1,t.weights2=e.weights2,t.biases2=e.biases2,t}}const wv=16,Rv=3,Cv=32;let Bn=null;const Hh="tennis-nn";async function Wh(){try{return navigator.storage?.getDirectory?await navigator.storage.getDirectory():null}catch{return null}}async function Xh(n){try{const e=await Wh();if(!e)return!1;const i=await(await e.getFileHandle(Hh,{create:!0})).createWritable();return await i.write(n),await i.close(),!0}catch{return!1}}async function Pv(){try{const n=await Wh();return n?await(await(await n.getFileHandle(Hh)).getFile()).text():null}catch{return null}}async function Dv(){const n=await Pv();if(n)try{const e=JSON.parse(n),t=Sr.fromJSON(e);qh(t)}catch{}}async function Iv(){if(!Bn)return;const n=JSON.stringify(Bn.toJSON());await Xh(n)}function Lv(){return Bn||(Bn=new Sr({inputSize:wv,hiddenSizes:[Cv],outputSize:Rv})),Bn}function qh(n){Bn=n}function Uv(){if(!Bn)return;const n=JSON.stringify(Bn.toJSON()),e=new Blob([n],{type:"application/json"});Av.saveAs(e,"tennis-nn.json"),Xh(n)}function Nv(n){const e=new FileReader;e.onload=t=>{try{const i=JSON.parse(t.target?.result),s=Sr.fromJSON(i);qh(s)}catch(i){console.error("Failed to load neural network:",i)}},e.readAsText(n)}const Ds=[],Fv=1e4;function Ov(n,e){Ds.length>=Fv&&Ds.shift(),Ds.push({input:[...n],target:[...e]})}let wa=0;function Bv(n,e){if(!(!Bn||Ds.length<e)){for(let t=0;t<e;t++){const i=Math.floor(Math.random()*Ds.length),s=Ds[i];Bn.train(s.input,s.target,n)}wa++,wa>=600&&(wa=0,Iv())}}function zv(n,e,t,i,s,r,o,a,c,l,u){const h=l===0?c<0:c>0,f=l===0?r<0:r>0;return[n/10,e/5,t/12,i/10,s/5,r/12,o/15,a/15,c/15,u/20,h?1:0,f?1:0,l,n>0?1:-1,s>e+1?1:0,Math.abs(r-t)]}const Ra=0,Du=1,Ca=2;function Vv(n,e,t){if(e.z>=0)return null;const i=.05,s=e.y,r=n.y,a=.5*t,c=s,l=r-i,u=c*c-4*a*l;if(u<0)return null;const h=(-c-Math.sqrt(u))/(2*a);return h<0?null:{x:n.x+e.x*h,z:n.z+e.z*h,time:h}}let Yh=()=>!1,$h=()=>!1;function Gv(n,e){Yh=n,$h=e}function kv(n,e,t,i,s,r,o){let a=0,c=0,l=0;const u=r===0?s.z>0:s.z<0,f=(r===0?i.z<0:i.z>0)&&(r===0?s.z<0:s.z>0),p=i.y<3;if(f)if(p){const d=i.z+(r===0?-.8:.8)-t;Math.abs(d)>.2&&(c=d>0?1:-1)}else{const m=Vv(i,s,o);if(m){const y=(r===0?Math.max(-5,Math.min(-.5,m.z-.5)):Math.min(5,Math.max(.5,m.z+.5)))-t;Math.abs(y)>.3&&(c=y>0?1:-1)}else c=r===0?-1:1}else if(u){const d=(r===0?-6:6)-t;Math.abs(d)>.3&&(c=d>0?1:-1)}else{const d=(r===0?-2:2)-t;Math.abs(d)>.3&&(c=d>0?1:-1)}if(f||(r===0?i.z>0:i.z<0)){const m=i.x-n;Math.abs(m)>.2&&(a=m>0?1:-1)}const _=i.y>e+.5&&i.y<e+2.5,v=Math.abs(i.z-t)<1.5&&Math.abs(i.x-n)<1;return _&&v&&(l=1),{moveX:a,moveZ:c,jump:l}}function Hv(n){return Ji(e=>{let t=0,i=!1;return{update:r=>{const a=n.resource(Uo).get("y");i=$h(),t>0&&(t-=r);const c=n.query(ue,Le,It,At,Yi),l=n.query(ue,Le,Ki),u=n.query(qe);let h={x:0,y:0,z:0},f={x:0,y:0,z:0};for(const y of l){const b=y.get_column(ue,"x"),M=y.get_column(ue,"y"),T=y.get_column(ue,"z"),A=y.get_column(Le,"x"),w=y.get_column(Le,"y"),g=y.get_column(Le,"z");y.entity_count>0&&(h={x:b[0],y:M[0],z:T[0]},f={x:A[0],y:w[0],z:g[0]})}let p=Ra,_=0,v=null;if(u.archetypes.length>0){const y=u.archetypes[0],b=y.get_column(qe,"phase"),M=y.get_column(qe,"serverPlayer");p=b[0],_=M[0],v=y.entity_ids[0]}const m=Yh(),d=m?Lv():null;for(const y of c){const b=y.get_column(ue,"x"),M=y.get_column(ue,"y"),T=y.get_column(ue,"z"),A=y.get_column(At,"playerType"),w=y.entity_ids;for(let g=0;g<y.entity_count;g++){const S=A[g],B=T[g],C=S===_;if(C&&t<=0&&p!==Ca){if(p===Ra){const D=w[g];if(n.set_field(D,It,"x",0),n.set_field(D,It,"z",0),v){n.set_field(v,qe,"phase",Du),n.set_field(v,qe,"throwTime",0);const L={x:b[g],y:M[g],z:T[g]};for(const z of l){const N=z.entity_ids[0];n.set_field(N,ue,"x",L.x),n.set_field(N,ue,"y",L.y+1.5),n.set_field(N,ue,"z",L.z),n.set_field(N,Le,"x",0),n.set_field(N,Le,"y",4),n.set_field(N,Le,"z",0)}}}else if(p===Du){const D=h.x-b[g],L=h.z-T[g];if(Math.sqrt(D*D+L*L)<.5&&f.y<1&&h.y>1.5&&v){n.set_field(v,qe,"phase",Ca);for(const N of l){const I=N.entity_ids[0],U=(Math.random()-.5)*1.5,j=3+Math.random()*1.5,Z=S===0?8:-8;n.set_field(I,Le,"x",U),n.set_field(I,Le,"y",j),n.set_field(I,Le,"z",Z)}t=2}}}if(!C||p===Ca||p===Ra){const D=b[g],L=M[g];let z=0,N=0,I=0;const U=zv(D,L,B,h.x,h.y,h.z,f.x,f.y,f.z,S,a),j=kv(D,L,B,h,f,S,a);if(d&&m){const ne=d.forward(U);z=ne[0]>.3?1:ne[0]<-.3?-1:0,N=ne[1]>.3?1:ne[1]<-.3?-1:0,I=ne[2]>.3?1:0,i&&(Math.abs(z-j.moveX)>.1||Math.abs(N-j.moveZ)>.1||I!==j.jump)&&Ov(U,[j.moveX,j.moveZ,j.jump])}else z=j.moveX,N=j.moveZ,I=j.jump;const Z=w[g];n.set_field(Z,It,"x",z),n.set_field(Z,It,"z",N),n.set_field(Z,It,"jump",I)}}}},dispose:e}})}function Wv(n){const e=new(window.AudioContext||window.webkitAudioContext);let t=!1,i=null,s=null;async function r(){function u(h,f){const p=e.sampleRate,_=Math.ceil(h*p),v=new OfflineAudioContext(2,_,p),m=v.destination;return f(v,m),v.startRendering()}i=await u(.12,(h,f)=>{const v=h.sampleRate*.02,m=h.createBuffer(1,v,h.sampleRate),d=m.getChannelData(0);for(let D=0;D<v;D++)d[D]=Math.random()*2-1;const y=h.createBufferSource();y.buffer=m;const b=h.createGain();b.gain.setValueAtTime(.8,0),b.gain.exponentialRampToValueAtTime(.001,0+.015);const M=h.createBiquadFilter();M.type="highpass",M.frequency.value=2e3,y.connect(M),M.connect(b);const T=h.createOscillator();T.type="sine",T.frequency.setValueAtTime(180,0),T.frequency.exponentialRampToValueAtTime(80,0+.12);const A=h.createOscillator();A.type="triangle",A.frequency.setValueAtTime(350,0),A.frequency.exponentialRampToValueAtTime(120,0+.12*.5);const w=h.createGain();w.gain.setValueAtTime(.6,0),w.gain.exponentialRampToValueAtTime(.001,0+.12);const g=h.createGain();g.gain.setValueAtTime(.3,0),g.gain.exponentialRampToValueAtTime(.001,0+.12*.4);const S=h.createBiquadFilter();S.type="lowpass",S.frequency.setValueAtTime(1500,0),S.frequency.exponentialRampToValueAtTime(400,0+.12);const B=h.createDynamicsCompressor();B.threshold.value=-20,B.knee.value=10,B.ratio.value=8,B.attack.value=.001,B.release.value=.1;const C=h.createGain();C.gain.setValueAtTime(.9,0),b.connect(S),T.connect(w),A.connect(g),w.connect(S),g.connect(S),S.connect(C),C.connect(B),B.connect(f),y.start(0),y.stop(0+.02),T.start(0),T.stop(0+.12),A.start(0),A.stop(0+.12*.5)}),s=await u(.2,(h,f)=>{const v=h.sampleRate*.015,m=h.createBuffer(1,v,h.sampleRate),d=m.getChannelData(0);for(let z=0;z<v;z++)d[z]=Math.random()*2-1;const y=h.createBufferSource();y.buffer=m;const b=h.createGain();b.gain.setValueAtTime(.5,0),b.gain.exponentialRampToValueAtTime(.001,0+.012);const M=h.createBiquadFilter();M.type="bandpass",M.frequency.value=3e3,M.Q.value=1,y.connect(M),M.connect(b);const T=h.createOscillator();T.type="sine",T.frequency.setValueAtTime(250,0),T.frequency.exponentialRampToValueAtTime(100,0+.2);const A=h.createOscillator();A.type="triangle",A.frequency.setValueAtTime(500,0),A.frequency.exponentialRampToValueAtTime(180,0+.2*.3);const w=h.createOscillator();w.type="square",w.frequency.setValueAtTime(120,0),w.frequency.exponentialRampToValueAtTime(60,0+.2);const g=h.createGain();g.gain.setValueAtTime(.5,0),g.gain.exponentialRampToValueAtTime(.001,0+.2);const S=h.createGain();S.gain.setValueAtTime(.25,0),S.gain.exponentialRampToValueAtTime(.001,0+.2*.3);const B=h.createGain();B.gain.setValueAtTime(.15,0),B.gain.exponentialRampToValueAtTime(.001,0+.2);const C=h.createBiquadFilter();C.type="lowpass",C.frequency.setValueAtTime(4e3,0),C.frequency.exponentialRampToValueAtTime(800,0+.2);const D=h.createDynamicsCompressor();D.threshold.value=-18,D.knee.value=12,D.ratio.value=10,D.attack.value=.001,D.release.value=.08;const L=h.createGain();L.gain.setValueAtTime(.8,0),b.connect(C),T.connect(g),A.connect(S),w.connect(B),g.connect(C),S.connect(C),B.connect(C),C.connect(L),L.connect(D),D.connect(f),y.start(0),y.stop(0+.015),T.start(0),T.stop(0+.2),A.start(0),A.stop(0+.2*.3),w.start(0),w.stop(0+.2)}),console.log("Procedural sounds prerendered: bounce and racket hit buffers ready")}r();const o={play:()=>{if(t||!i)return;const u=e;u.state==="suspended"&&u.resume();const h=u.createBufferSource();h.buffer=i,h.connect(u.destination),h.start(0)}},a={play:()=>{if(t||!s)return;const u=e;u.state==="suspended"&&u.resume();const h=u.createBufferSource();h.buffer=s,h.connect(u.destination),h.start(0)}},c=u=>{n()&&o.play()},l=u=>{n()&&a.play()};return bn.on("ballBounce",c),bn.on("ballHit",l),{dispose:()=>{t=!0,bn.off("ballBounce",c),bn.off("ballHit",l),e.close()}}}var Xv=xr('<div style="position:absolute;top:10px;left:50%;transform:translateX(-50%);background-color:rgba(0, 0, 0, 0.7);color:white;padding:8px 15px;border-radius:5px;font-family:Arial, sans-serif;font-size:14px;display:flex;align-items:center;gap:10px;z-index:100"><label style=display:flex;align-items:center;gap:4px;cursor:pointer><input type=checkbox><span>Sound</span></label><span style=color:#888>|</span><label style=display:flex;align-items:center;gap:4px;cursor:pointer><input type=checkbox><span>AI vs AI</span></label><span style=color:#888>|</span><label style=display:flex;align-items:center;gap:4px;cursor:pointer><input type=checkbox><span>Use NN</span></label><button style="background:#444;color:white;border:none;padding:4px 8px;border-radius:3px;cursor:pointer;font-size:12px">Save NN</button><button style="background:#444;color:white;border:none;padding:4px 8px;border-radius:3px;cursor:pointer;font-size:12px">Load NN</button><input type=file accept=.json style=display:none>'),qv=xr('<div style="position:absolute;top:60px;left:50%;transform:translateX(-50%);background-color:rgba(0, 0, 0, 0.7);color:white;padding:15px 30px;border-radius:10px;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;text-align:center;display:flex;flex-direction:column;gap:10px"><div style=display:flex;gap:40px><div><div style=font-size:14px;color:#aaa>P0</div><div></div></div><div style=font-size:20px;color:#888>:</div><div><div style=font-size:14px;color:#aaa>P1</div><div></div></div></div><div style=font-size:12px;color:#ffd700>Serving: P'),Yv=xr("<canvas style=width:100%;height:100%;position:absolute;top:0;left:0;z-index:0>");const[Iu,$v]=lt(0),[Lu,Zv]=lt(0),[jv,Kv]=lt(0),[Zh,Jv]=lt(!0),[uo,Qv]=lt(!1),[Il,ey]=lt(!1);let Pa;const ty=["0","15","30","40","ADV"];function Uu(n,e){return n>=4&&e>=4?n===e?"40":n>e?"ADV":"40":ty[Math.min(n,4)]}function ny(){return[(()=>{var n=Xv(),e=n.firstChild,t=e.firstChild,i=e.nextSibling,s=i.nextSibling,r=s.firstChild,o=s.nextSibling,a=o.nextSibling,c=a.firstChild,l=a.nextSibling,u=l.nextSibling,h=u.nextSibling;t.addEventListener("change",p=>Jv(p.target.checked)),r.addEventListener("change",p=>Qv(p.target.checked)),c.addEventListener("change",p=>ey(p.target.checked)),l.$$click=()=>Uv(),u.$$click=()=>Pa?.click(),h.addEventListener("change",p=>{const _=p.target.files?.[0];_&&Nv(_)});var f=Pa;return typeof f=="function"||Array.isArray(f)?Co(()=>f,h):Pa=h,Rs(Zh,p=>{t.checked=p}),Rs(uo,p=>{r.checked=p}),Rs(Il,p=>{c.checked=p}),n})(),(()=>{var n=qv(),e=n.firstChild,t=e.firstChild,i=t.firstChild,s=i.nextSibling,r=t.nextSibling,o=r.nextSibling,a=o.firstChild,c=a.nextSibling,l=e.nextSibling;return l.firstChild,to(s,()=>Uu(Iu(),Lu())),to(c,()=>Uu(Lu(),Iu())),to(l,jv,null),n})()]}let[Da,iy]=lt(),Lt=dv();const xi=kh({position:new G(0,0,2.5),velocity:new G(0,0,0),playerType:"Melty",facingForward:!0,reactiveEcs:Lt.ecs});Lt.ecs.add_component(xi,mr,{});Lt.ecs.add_component(xi,It,{x:0,z:0,jump:0});Lt.ecs.add_component(xi,Qn,{side:1});const tc=kh({position:new G(0,0,-2.5),velocity:new G(0,0,0),playerType:"Cubey",facingForward:!1,reactiveEcs:Lt.ecs});Lt.ecs.add_component(tc,Yi,{});Lt.ecs.add_component(tc,It,{x:0,z:0,jump:0});Lt.ecs.add_component(tc,Qn,{side:-1});pv({width:10.97,length:23.77,netHeight:.914,reactiveEcs:Lt.ecs});mv({position:Ht(()=>new G(0,.1,2.5)),size:Ht(()=>.1),boundary:Ht(()=>new Gs(new G(-5.5,0,-12),new G(5.5,5,12))),reactiveEcs:Lt.ecs});const sy=Lt.ecs.create_entity();Lt.ecs.add_component(sy,qe,{phase:0,serverPlayer:0,throwTime:0});Dv();let[ry,jh]=lt(!1),[oy,Kh]=lt(!1),[Nu,Jh]=lt(!1),[Fu,Qh]=lt(!1),[ay,ef]=lt(!1);function ly(){debugger;let n=150,e=ox({position:Ht(()=>new Be(50,(Da()?.y??0)-50-n)),hitAreaSize:n,outerRingSize:()=>.8*n,knobSize:()=>70}),t=80,i=lx({position:Ht(()=>new Be((Da()?.x??0)-50-t,(Da()?.y??0)-50-t)),size:()=>t});vc(()=>uo(),c=>{const l=Lt.ecs.entity(xi);c?l.hasComponent(Yi)||(Lt.ecs.remove_component(xi,mr),Lt.ecs.add_component(xi,Yi,{})):l.hasComponent(Yi)&&(Lt.ecs.remove_component(xi,Yi),Lt.ecs.add_component(xi,mr,{}))});const s=(c,l)=>{const u=gv(c,ry,oy,Nu,Fu,e.value),h=()=>ay()||i.pressed(),f=xv(c,h),p=yv(c);_v(c,l);const _=Mv(c,h,()=>(Nu()?-1:0)+(Fu()?1:0)+e.value().x),v=Ev(c,(b,M,T)=>{$v(b),Zv(M),Kv(T)}),m=Hv(c),d=Wv(Zh);Gv(Il,uo);const y=[u.dispose,f.dispose,p.dispose,_.dispose,v.dispose,m.dispose,d.dispose];return{update:b=>{u.update(),m.update(b),f.update(b),p.update(b),_.update(b),v.update(b),Il()&&uo()&&Bv(.001,4)},dispose:()=>{y.forEach(b=>b())},tennisRules:v}};let r=Ht(()=>!0),[o,a]=lt();return vc(o,c=>{if(c==null)return;let l=c.getBoundingClientRect();const u=l.width,h=l.height;if(u==0&&h==0){a(void 0),setTimeout(()=>a(c));return}new ResizeObserver(()=>{let g=c.getBoundingClientRect();iy(new Be(g.width,g.height))}).observe(c);const p=new hn(50,u/h,.01,100);p.position.set(0,15,16),p.lookAt(0,0,-2);const _=new zd,v=new lp(16777215,.5);_.add(v);const m=new ap(16777215,1);m.position.set(5,10,7),_.add(m);const d=s(Lt.ecs,_),y=new sx({antialias:!0,canvas:c});y.setSize(u,h);let b=0,M=0;const T=1/60,A=.25;let w=g=>{let S=b===0?T:(g-b)/1e3;for(b=g,S>A&&(S=A),M+=S;M>=T;)d.update(T),M-=T;y.render(_,p),r()&&requestAnimationFrame(w)};requestAnimationFrame(w),bs(()=>{d.dispose(),y.dispose()})}),[(()=>{var c=Yv(),l=a;return typeof l=="function"||Array.isArray(l)?Co(()=>l,c):a=c,c})(),eo(ny,{}),eo(e.UI,{}),eo(i.UI,{})]}document.body.style.setProperty("overflow","hidden");let wi=document.createElement("div");wi.style.setProperty("position","absolute");wi.style.setProperty("left","0");wi.style.setProperty("top","0");wi.style.setProperty("right","0");wi.style.setProperty("bottom","0");wi.style.setProperty("background-color","black");document.body.append(wi);kf(()=>eo(ly,{}),wi);document.addEventListener("keydown",n=>{switch(n.key){case"ArrowUp":jh(!0);break;case"ArrowDown":Kh(!0);break;case"ArrowLeft":Jh(!0);break;case"ArrowRight":Qh(!0);break;case" ":ef(!0);break}});document.addEventListener("keyup",n=>{switch(n.key){case"ArrowUp":jh(!1);break;case"ArrowDown":Kh(!1);break;case"ArrowLeft":Jh(!1);break;case"ArrowRight":Qh(!1);break;case" ":ef(!1);break}});Vl(["click"]);
