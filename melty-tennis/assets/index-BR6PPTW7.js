(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Un extends Error{source;constructor(e){super(),this.source=e}}class va extends Error{source;constructor(e,t){super(t instanceof Error?t.message:String(t),{cause:t}),this.source=e}}const vl=0,Zs=1,As=2,mo=4,xi=8,to=16,Mi=32,no=64,er=128,yl=256,ya=512,It=1,dn=2,Qn=4,vs=1,vi=2,Ml=3,_t={},qh={},Yh="sp",Au={},$h=Symbol("refresh");function wu(n,e){const t=(n.i?.t?n.i.u?.o:n.i?.o)??-1;t>=n.o&&(n.o=t+1);const i=n.o,s=e.l[i];if(s===void 0)e.l[i]=n;else{const r=s.T;r.S=n,n.T=r,s.T=n}i>e.R&&(e.R=i)}function Ru(n,e){let t=n.O;t&(xi|mo)||(t&Zs?n.O=t&-4|As|xi:n.O=t|xi,t&to||wu(n,e))}function Cu(n,e){let t=n.O;t&(xi|mo|to)||(n.O=t|to,wu(n,e))}function cr(n,e){const t=n.O;if(!(t&(xi|to)))return;n.O=t&-25;const i=n.o;if(n.T===n)e.l[i]=void 0;else{const s=n.S,r=e.l[i],o=s??r;n===r?e.l[i]=s:n.T.S=s,o.T=n.T}n.T=n,n.S=void 0}function Zh(n){if(!n._){n._=!0;for(let e=0;e<=n.R;e++)for(let t=n.l[e];t!==void 0;t=t.S)t.O&xi&&io(t)}}function io(n,e=As){const t=n.O;if(!((t&(Zs|As))>=e)){n.O=t&-4|e;for(let i=n.I;i!==null;i=i.p)io(i.h,Zs);if(n.A!==null)for(let i=n.A;i!==null;i=i.N)for(let s=i.I;s!==null;s=s.p)io(s.h,Zs)}}function Xr(n,e){for(n._=!1,n.P=0;n.P<=n.R;n.P++){let t=n.l[n.P];for(;t!==void 0;)t.O&xi?e(t):Kh(t,n),t=n.l[n.P]}n.R=0}function Kh(n,e){cr(n,e);let t=n.o;for(let i=n.C;i;i=i.D){const s=i.m,r=s.V||s;r.L&&r.o>=t&&(t=r.o+1)}if(n.o!==t){n.o=t;for(let i=n.I;i!==null;i=i.p)Cu(i.h,e)}}const _r=new Set,kt={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0},Bn={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0};let Nt=0,De=null,tr=!1,nr=!1;function gr(n){for(const e of Si){if(e.k||e.U.size>0)continue;const t=e.W[n-1];t.length&&(e.W[n-1]=[],so(t,n))}}function Ji(n){nr=n}function qi(){tr||(tr=!0,!St.H&&!nr&&queueMicrotask(Ma))}class jh{i=null;G=[[],[]];F=[];created=Nt;addChild(e){this.F.push(e),e.i=this}removeChild(e){const t=this.F.indexOf(e);t>=0&&(this.F.splice(t,1),e.i=null)}notify(e,t,i,s){return this.i?this.i.notify(e,t,i,s):!1}run(e){if(this.G[e-1].length){const t=this.G[e-1];this.G[e-1]=[],so(t,e)}for(let t=0;t<this.F.length;t++)this.F[t].run?.(e)}enqueue(e,t){e&&(Mn?$t(Mn).W[e-1].push(t):this.G[e-1].push(t)),qi()}stashQueues(e){e.G[0].push(...this.G[0]),e.G[1].push(...this.G[1]),this.G=[[],[]];for(let t=0;t<this.F.length;t++){let i=this.F[t],s=e.F[t];s||(s={G:[[],[]],F:[]},e.F[t]=s),i.stashQueues(s)}}restoreQueues(e){this.G[0].push(...e.G[0]),this.G[1].push(...e.G[1]);for(let t=0;t<e.F.length;t++){const i=e.F[t];let s=this.F[t];s&&s.restoreQueues(i)}}}class ei extends jh{H=!1;M=[];$=[];j=new Set;static K;static Y;static B=null;flush(){if(!this.H){this.H=!0;try{if(Xr(kt,ei.K),De){if(!Jh(De)){let i=De;Xr(Bn,ei.K),this.M=[],this.$=[],this.j=new Set,gr(vs),gr(vi),this.stashQueues(De.Z),Nt++,tr=kt.R>=kt.P,sc(De.M),De=null,bo(null,!0);return}this.M!==De.M&&this.M.push(...De.M),this.restoreQueues(De.Z),_r.delete(De);const t=De;De=null,sc(this.M),bo(t)}else _r.size&&Xr(Bn,ei.K),bo();Nt++,tr=kt.R>=kt.P,gr(vs),this.run(vs),gr(vi),this.run(vi)}finally{this.H=!1}}}notify(e,t,i,s){if(t&It){if(i&It){const r=s!==void 0?s:e.q;De&&r&&!De.X.includes(r.source)&&(De.X.push(r.source),qi())}return!0}return!1}initTransition(e){if(e&&(e=Du(e)),!(e&&e===De)&&!(!e&&De&&De.J===Nt)){if(!De)De=e??{J:Nt,M:[],X:[],$:[],j:new Set,ee:[],Z:{G:[[],[]],F:[]},te:!1};else if(e){const t=De;t.te=e,e.ee.push(...t.ee);for(const i of Si)i.ne===t&&(i.ne=e);e.$.push(...t.$);for(const i of t.j)e.j.add(i);_r.delete(t),De=e}_r.add(De),De.J=Nt;for(let t=0;t<this.M.length;t++){const i=this.M[t];i.ne=De,De.M.push(i)}this.M=De.M;for(let t=0;t<this.$.length;t++){const i=this.$[t];i.ne=De,De.$.push(i)}this.$=De.$;for(const t of Si)t.ne||(t.ne=De);for(const t of this.j)De.j.add(t);this.j=De.j}}}function ws(n,e=!1){const t=n.ie||Mn,i=n.re!==void 0;for(let s=n.I;s!==null;s=s.p){if(i&&s.h.oe){s.h.O|=yl;continue}e&&t?(s.h.O|=er,Lu(s.h,t)):e&&(s.h.O|=er,s.h.ie=void 0);const r=s.h;if(r.se===Ml){r.ue||(r.ue=!0,r.ce.enqueue(vi,r.ae));continue}const o=s.h.O&Mi?Bn:kt;o.P>s.h.o&&(o.P=s.h.o),Ru(s.h,o)}}function nc(){const n=St.M;for(let e=0;e<n.length;e++){const t=n[e];if(t.le!==_t&&(t.fe=t.le,t.le=_t,t.se&&t.se!==Ml&&(t.ue=!0)),t.Ee&It){const i=t.q?.source;i&&!(i.Ee&It)&&(t.Ee&=-6,t.q=null)}else t.Ee&=~Qn;t.L&&ei.Y(t,!1,!0)}n.length=0}function bo(n=null,e=!1){let t=!e;if(t&&nc(),e||Pu(St),kt.R>=kt.P&&Xr(kt,ei.K),t){nc();const i=n?n.$:St.$;for(let s=0;s<i.length;s++){const r=i[s];r.ie=void 0,r.le!==_t&&(r.fe=r.le,r.le=_t);const o=r.Te;r.Te=_t,o!==_t&&r.fe!==o&&ws(r,!0),r.ne=null}i.length=0,n?n.j:St.j;for(const s of Si)(n?s.ne===n:!s.ne)&&(s.k||(s.W[0].length&&so(s.W[0],vs),s.W[1].length&&so(s.W[1],vi)),s.de.ie===s&&(s.de.ie=void 0),s.U.clear(),s.W[0].length=0,s.W[1].length=0,Si.delete(s),ro.delete(s.de))}}function Pu(n){for(const e of n.F)e.checkSources?.(),Pu(e)}function ic(n){St.j.add(n),qi()}function sc(n){for(let e=0;e<n.length;e++)n[e].ne=De}const St=new ei;function Ma(){for(;tr;)St.flush()}function so(n,e){for(let t=0;t<n.length;t++)n[t](e)}function Jh(n){if(n.te)return!0;if(n.ee.length)return!1;let e=!0;for(let t=0;t<n.X.length;t++){const i=n.X[t];if(i.Ee&It&&i.q?.source===i){e=!1;break}}return e&&(n.te=!0),e}function Du(n){for(;n.te&&typeof n.te=="object";)n=n.te;return n}function Qh(n,e){const t=De;try{return De=Du(n),e()}finally{De=t}}const ro=new WeakMap,Si=new Set;function ef(n){let e=ro.get(n);if(e)return $t(e);const t=n.Se,i=t?.ie?$t(t.ie):null;return e={de:n,U:new Set,W:[[],[]],k:null,ne:De,Re:i},ro.set(n,e),Si.add(e),n.Oe=!1,e}function $t(n){for(;n.k;)n=n.k;return n}function Iu(n,e){if(n=$t(n),e=$t(e),n===e)return n;e.k=n;for(const t of e.U)n.U.add(t);return n.W[0].push(...e.W[0]),n.W[1].push(...e.W[1]),n}function oo(n){const e=n.ie;if(!e)return;const t=$t(e);if(Si.has(t))return t;n.ie=void 0}function Sl(n){return n.Te!==void 0&&n.Te!==_t}function Lu(n,e){const t=$t(e),i=n.ie;if(i){if(i.k){n.ie=e;return}const s=$t(i);if(Si.has(s)){s!==t&&!Sl(n)&&(t.Re&&$t(t.Re)===s?n.ie=e:s.Re&&$t(s.Re)===t||Iu(t,s));return}}n.ie=e}function Uu(n,e,t){const i=typeof e=="object"&&e!==null,s=i&&fn(()=>e[Symbol.asyncIterator]),r=!s&&i&&fn(()=>typeof e.then=="function");if(!r&&!s)return n._e=null,e;n._e=e;let o;const a=l=>{n._e===e&&(St.initTransition(n.ne),ao(n,l instanceof Un?It:dn,l),n.J=Nt)},c=(l,h)=>{if(n._e!==e||n.O&(As|er))return;St.initTransition(n.ne),El(n);const u=oo(n);if(u&&u.U.delete(n),t)t(l);else if(n.Te!==void 0)n.Te!==void 0&&n.Te!==_t?n.le=l:(n.fe=l,ws(n)),n.J=Nt;else if(u){const f=n.fe,p=n.Ie;(!p||!p(l,f))&&(n.fe=l,n.J=Nt,n.pe&&ot(n.pe,l),ws(n,!0))}else ot(n,()=>l);qi(),Ma(),h?.()};if(r){let l=!1,h=!0;if(e.then(u=>{h?(o=u,l=!0):c(u)},u=>{h||a(u)}),h=!1,!l)throw St.initTransition(n.ne),new Un(Qe)}if(s){const l=e[Symbol.asyncIterator]();let h=!1;const u=()=>{let p,_=!1,v=!0;return l.next().then(m=>{v?(p=m,_=!0):m.done?(qi(),Ma()):c(m.value,u)},m=>{v||a(m)}),v=!1,_&&!p.done?(o=p.value,h=!0,u()):_&&p.done},f=u();if(!h&&!f)throw St.initTransition(n.ne),new Un(Qe)}return o}function El(n){n.Ee=n.Ee&Qn,n.q=null,sr(n),n.he?.()}function ao(n,e,t,i,s){e===dn&&!(t instanceof va)&&!(t instanceof Un)&&(t=new va(n,t));const r=t instanceof Un&&t.source===n,o=e===It&&n.Te!==void 0&&!r,a=o&&Sl(n);if(i||(n.Ee=e|(e!==dn?n.Ee&Qn:0),n.q=t,sr(n)),s&&!i&&Lu(n,s),a&&De&&t instanceof Un){const h=t.source;De.X.includes(h)||De.X.push(h)}const c=i||a,l=i||o?void 0:s;if(n.he){c?n.he(e,t):n.he();return}for(let h=n.I;h!==null;h=h.p)h.h.J=Nt,h.h.q!==t&&(!h.h.ne&&St.M.push(h.h),ao(h.h,e,t,c,l));for(let h=n.A;h!==null;h=h.N)for(let u=h.I;u!==null;u=u.p)u.h.J=Nt,u.h.q!==t&&(!u.h.ne&&St.M.push(u.h),ao(u.h,e,t,c,l))}function Tl(n){const e=n.m,t=n.D,i=n.p,s=n.Ae;return i!==null?i.Ae=s:e.Ne=s,s!==null?s.p=i:(e.I=i,i===null&&(e.ge?.(),e.L&&!e.Pe&&!(e.O&Mi)&&tf(e))),t}function tf(n){cr(n,n.O&Mi?Bn:kt);let e=n.C;for(;e!==null;)e=Tl(e);n.C=null,ur(n,!0)}function Ao(n,e){const t=e.Ce;if(t!==null&&t.m===n)return;let i=null;const s=e.O&mo;if(s&&(i=t!==null?t.D:e.C,i!==null&&i.m===n)){e.Ce=i;return}const r=n.Ne;if(r!==null&&r.h===e&&(!s||nf(r,e)))return;const o=e.Ce=n.Ne={m:n,h:e,D:i,Ae:r,p:null};t!==null?t.D=o:e.C=o,r!==null?r.p=o:n.I=o}function nf(n,e){const t=e.Ce;if(t!==null){let i=e.C;do{if(i===n)return!0;if(i===t)break;i=i.D}while(i!==null)}return!1}function Nu(n){let e=n.De;for(;e;)e.O|=Mi,e.O&xi&&(cr(e,kt),Ru(e,Bn)),Nu(e),e=e.ye}function ur(n,e=!1,t){if(n.O&no)return;e&&(n.O=no);let i=t?n.ve:n.De;for(;i;){const s=i.ye;if(i.C){const r=i;cr(r,r.O&Mi?Bn:kt);let o=r.C;do o=Tl(o);while(o!==null);r.C=null,r.Ce=null}ur(i,!0),i=s}t?n.ve=null:(n.De=null,n.we=0),sf(n,t)}function sf(n,e){let t=e?n.be:n.me;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){const s=t[i];s.call(s)}else t.call(t);e?n.be=null:n.me=null}}function rf(n,e){let t=n;for(;t.Ve&&t.i;)t=t.i;if(t.id!=null)return of(t.id,t.we++);throw new Error("Cannot get child id from owner without an id")}function Fu(n){return rf(n)}function of(n,e){const t=e.toString(36),i=t.length-1;return n+(i?String.fromCharCode(64+i):"")+t}function Zt(){return Jt?Qe:null}function af(){return Qe}function ys(n){return Qe&&(Qe.me?Array.isArray(Qe.me)?Qe.me.push(n):Qe.me=[Qe.me,n]:Qe.me=n),n}function Ks(n){const e=Qe,t=n?.transparent??!1,i={id:n?.id??(t?e?.id:e?.id!=null?Fu(e):void 0),Ve:t||void 0,t:!0,u:e?.t?e.u:e,De:null,ye:null,me:null,ce:e?.ce??St,Le:e?.Le||Au,we:0,be:null,ve:null,i:e,dispose(s=!0){ur(i,s)}};if(e){const s=e.De;s===null||(i.ye=s),e.De=i}return i}function Zi(n,e){const t=Ks(e);return xs(t,()=>n(t.dispose))}function Ou(n,e,t,i,s){let r=!1;const o=_o(s?.render?a=>hf(()=>n(a)):n,i,{...s,equals:()=>(o.ue=!o.q,r&&o.ce.enqueue(o.se,wo.bind(o)),!1),lazy:!0});o.ke=i,o.Ue=e,o.xe=t,o.We=void 0,o.se=s?.render?vs:vi,o.he=(a,c)=>{const l=a!==void 0?a:o.Ee,h=c!==void 0?c:o.q;if(l&dn){let u=h;if(o.ce.notify(o,It,0),o.se===vi)try{return o.xe?o.xe(u,()=>{o.We?.(),o.We=void 0}):console.error(u)}catch(f){u=f}if(!o.ce.notify(o,dn,dn))throw u}else o.se===vs&&o.ce.notify(o,It|dn,l,h)},yi(o,!0),!s?.defer&&(o.se===vi?o.ce.enqueue(o.se,wo.bind(o)):wo.call(o)),r=!0,ys(()=>o.We?.())}function wo(){if(!(!this.ue||this.O&no)){this.We?.(),this.We=void 0;try{this.We=this.Ue(this.fe,this.ke)}catch(n){if(this.q=new va(this,n),this.Ee|=dn,!this.ce.notify(this,dn,dn))throw n}finally{this.ke=this.fe,this.ue=!1}}}let lf=null;ei.K=yi;ei.Y=ur;let Jt=!1,Ms=!1,Qe=null,Mn=null,cf=!1;function yi(n,e=!1){const t=n.se;e||(n.ne&&(!t||De)&&De!==n.ne&&St.initTransition(n.ne),cr(n,n.O&Mi?Bn:kt),n.ne||t===Ml?ur(n):(Nu(n),n.be=n.me,n.ve=n.De,n.me=null,n.De=null,n.we=0));const i=!!(n.O&er),s=n.Te!==void 0&&n.Te!==_t,r=!!(n.Ee&It),o=Qe;Qe=n,n.Ce=null,n.O=mo,n.J=Nt;let a=n.le===_t?n.fe:n.le,c=n.o,l=Jt,h=Mn;if(Jt=!0,i){const u=oo(n);u&&(Mn=u)}try{a=Uu(n,n.L(a)),El(n);const u=oo(n);u&&(u.U.delete(n),sr(u.de))}catch(u){if(u instanceof Un&&Mn){const f=$t(Mn);f.de!==n&&(f.U.add(n),n.ie=f,sr(f.de))}ao(n,u instanceof Un?It:dn,u,void 0,u instanceof Un?n.ie:void 0)}finally{Jt=l,n.O=vl|(e?n.O&yl:0),Qe=o}if(!n.q){const u=n.Ce;let f=u!==null?u.D:n.C;if(f!==null){do f=Tl(f);while(f!==null);u!==null?u.D=null:n.C=null}const p=s?n.Te:n.le===_t?n.fe:n.le;if(!n.Ie||!n.Ie(p,a)){const v=s?n.Te:void 0;e||t&&De!==n.ne||i?(n.fe=a,s&&i&&(n.Te=a,n.le=a)):n.le=a,s&&!i&&r&&!n.Oe&&(n.Te=a),(!s||i||n.Te!==v)&&ws(n,i||s)}else if(s)n.le=a;else if(n.o!=c)for(let v=n.I;v!==null;v=v.p)Cu(v.h,v.h.O&Mi?Bn:kt)}Mn=h,(!e||n.Ee&It)&&!n.ne&&!(De&&s)&&St.M.push(n),n.ne&&t&&De!==n.ne&&Qh(n.ne,()=>yi(n))}function Bu(n){if(n.O&Zs)for(let e=n.C;e;e=e.D){const t=e.m,i=t.V||t;if(i.L&&Bu(i),n.O&As)break}(n.O&(As|er)||n.q&&n.J<Nt&&!n._e)&&yi(n),n.O=vl|n.O&yl}function _o(n,e,t){const i=t?.transparent??!1,s={id:t?.id??(i?Qe?.id:Qe?.id!=null?Fu(Qe):void 0),Ve:i||void 0,Ie:t?.equals!=null?t.equals:ir,Ge:!!t?.pureWrite,ge:t?.unobserved,me:null,ce:Qe?.ce??St,Le:Qe?.Le??Au,we:0,L:n,fe:e,o:0,A:null,S:void 0,T:null,C:null,Ce:null,I:null,Ne:null,i:Qe,ye:null,De:null,O:t?.lazy?ya:vl,Ee:Qn,J:Nt,le:_t,be:null,ve:null,_e:null,ne:null};s.T=s;const r=Qe?.t?Qe.u:Qe;if(Qe){const o=Qe.De;o===null||(s.ye=o),Qe.De=s}return r&&(s.o=r.o+1),!t?.lazy&&yi(s,!0),s}function js(n,e,t=null){const i={Ie:e?.equals!=null?e.equals:ir,Ge:!!e?.pureWrite,Qe:!!e?.Qe,ge:e?.unobserved,fe:n,I:null,Ne:null,J:Nt,V:t,N:t?.A||null,le:_t};return t&&(t.A=i),i}function ir(n,e){return n===e}function fn(n,e){if(!Jt)return n();const t=Jt;Jt=!1;try{return n()}finally{Jt=t}}function Gi(n){let e=Qe;e?.t&&(e=e.u),n.O&ya&&(n.O&=~ya,yi(n,!0));const t=n.V||n;if(e&&Jt&&(n.L&&n.O&no&&yi(n),Ao(n,e),t.L)){const i=n.O&Mi;t.o>=(i?Bn.P:kt.P)&&(io(e),Zh(i?Bn:kt),Bu(t));const s=t.o;s>=e.o&&n.i!==e&&(e.o=s+1)}if(t.Ee&It){const i=t.q?.source;if(i&&!(i.Ee&It))El(t);else if(e&&!(Ms&&t.ne&&De!==t.ne))if(Mn){const s=t.ie,r=$t(Mn);if(s&&$t(s)===r&&!Sl(t))throw!Jt&&n!==e&&Ao(n,e),t.q}else throw!Jt&&n!==e&&Ao(n,e),t.q;else if(!e&&t.Ee&Qn)throw t.q}if(n.L&&n.Ee&dn){if(n.J<Nt)return yi(n,!0),Gi(n);throw n.q}return n.Te!==void 0&&n.Te!==_t?n.Te:!e||Mn!==null&&(n.Te!==void 0||n.ie||t===n&&Ms||t.Ee&It)||n.le===_t||Ms&&n.ne&&De!==n.ne?n.fe:n.le}function ot(n,e){n.ne&&De!==n.ne&&St.initTransition(n.ne);const t=n.Te!==void 0&&!nr,i=n.Te!==void 0&&n.Te!==_t,s=t?i?n.Te:n.fe:n.le===_t?n.fe:n.le;if(typeof e=="function"&&(e=e(s)),!(!n.Ie||!n.Ie(s,e)||!!(n.Ee&Qn)))return t&&i&&n.L&&(ws(n,!0),qi()),e;if(t){const o=n.Te===_t;!o&&n.ne&&St.initTransition(n.ne),o&&(n.le=n.fe,St.$.push(n)),n.Oe=!0;const a=ef(n);n.ie=a,n.Te=e}else n.le===_t&&St.M.push(n),n.le=e;return sr(n),n.pe&&ot(n.pe,e),n.J=Nt,ws(n,t),qi(),e}function xs(n,e){const t=Qe,i=Jt;Qe=n,Jt=!1;try{return e()}finally{Qe=t,Jt=i}}function uf(n){const e=n;if(n.Te!==void 0&&n.Te!==_t){if(e.Ee&It&&!(e.Ee&Qn))return!0;if(n.Se){const t=n.ie?$t(n.ie):null;return!!(t&&t.U.size>0)}return!0}return n.le!==_t&&!(e.Ee&Qn)?!0:!!(e.Ee&It&&!(e.Ee&Qn))}function sr(n){if(n.Fe){const e=uf(n),t=n.Fe;if(ot(t,e),!e&&t.ie){const i=oo(n);if(i&&i.U.size>0){const s=$t(t.ie);s!==i&&Iu(i,s)}ro.delete(t),t.ie=void 0}}}function hf(n,e=!0){const t=Ms;Ms=e;try{return n()}finally{Ms=t}}function Ss(n){const e=Gi.bind(null,n);return e.$r=!0,e}function ff(n,e,t){if(typeof n=="function"){const s=_o(n,e,t);return[Ss(s),ot.bind(null,s)]}const i=js(n,e);return[Ss(i),ot.bind(null,i)]}function bl(n,e,t){let i=_o(n,e,t);return Ss(i)}function df(n,e,t,i){Ou(n,e.effect||e,e.error,t,i)}function pf(n,e,t,i){Ou(n,e,void 0,t,{render:!0,...i})}function rc(n){return n?.[Es]?.[mt]??n}function Qi(n,e,t,i,s){return s&&i in s?s[i]:e&&i in e?e[i]:n[i]}function mf(n,e,t){const i=Hu(n,e),s=Object.keys(t);return Array.from(new Set([...i,...s]))}function ms(n,e,t){const i=e?.[Es];if(!i)return;const s=i[qt],r=i[pt],o=i[dt];let a=i[mt];if(!(n===s&&!r&&!o)){if((i[Vu]||Sa).set(n,i[Cn]),i[qt]=n,i[pt]=void 0,Array.isArray(s)){let c=!1;const l=Qi(s,r,a,"length",o);if(n.length&&l&&n[0]&&t(n[0])!=null){let h,u,f,p,_,v,m,d;for(f=0,p=Math.min(l,n.length);f<p&&((v=Qi(s,r,a,f,o))===n[f]||v&&n[f]&&t(v)===t(n[f]));f++)ms(n[f],rn(v,i),t);const y=new Array(n.length),E=new Map;for(p=l-1,_=n.length-1;p>=f&&_>=f&&((v=Qi(s,r,a,p,o))===n[_]||v&&n[_]&&t(v)===t(n[_]));p--,_--)y[_]=v;if(f>_||f>p){for(u=f;u<=_;u++)c=!0,i[mt][u]&&ot(i[mt][u],rn(n[u],i));for(;u<n.length;u++){c=!0;const S=rn(y[u],i);i[mt][u]&&ot(i[mt][u],S),ms(n[u],S,t)}c&&i[mt][on]&&ot(i[mt][on],void 0),l!==n.length&&i[mt].length&&ot(i[mt].length,n.length);return}for(m=new Array(_+1),u=_;u>=f;u--)v=n[u],d=v&&t(v),h=E.get(d),m[u]=h===void 0?-1:h,E.set(d,u);for(h=f;h<=p;h++)v=Qi(s,r,a,h,o),d=v&&t(v),u=E.get(d),u!==void 0&&u!==-1&&(y[u]=v,u=m[u],E.set(d,u));for(u=f;u<n.length;u++)if(u in y){const S=rn(y[u],i);i[mt][u]&&ot(i[mt][u],S),ms(n[u],S,t)}else i[mt][u]&&ot(i[mt][u],rn(n[u],i));f<n.length&&(c=!0)}else if(n.length)for(let h=0,u=n.length;h<u;h++){const f=Qi(s,r,a,h,o);Dn(f)?ms(n[h],rn(f,i),t):i[mt][h]&&ot(i[mt][h],n[h])}l!==n.length&&(c=!0,i[mt].length&&ot(i[mt].length,n.length)),c&&i[mt][on]&&ot(i[mt][on],void 0);return}if(a){const c=a[on],l=c?mf(s,r,n):Object.keys(a);for(let h=0,u=l.length;h<u;h++){const f=l[h],p=a[f],_=rc(Qi(s,r,a,f,o));let v=rc(n[f]);_!==v&&(!_||!Dn(_)||!Dn(v)||t(_)!=null&&t(_)!==t(v)?(c&&ot(c,void 0),p&&ot(p,Dn(v)?rn(v,i):v)):ms(v,rn(_,i),t))}}if(a=i[_s]){const c=Object.keys(a);for(let l=0,h=c.length;l<h;l++){const u=c[l];ot(a[u],u in n)}}}}function oc(n,e){return t=>{if(t==null)throw new Error("Cannot reconcile null or undefined state");const i=typeof e=="string"?r=>r[e]:e;if(i(t)!==void 0&&i(n)!==i(t))throw new Error("Cannot reconcile states with different identity");ms(n,t,i)}}function _f(n,e={},t){let i;const s=new WeakMap,r=c=>{c[lo]=o,c[Vu]=s,Object.defineProperty(c,Oi,{get(){return i},configurable:!0})},o=c=>{if(s.has(c))return s.get(c);if(c[Es]?.[lo]===o)return c;const l=Gu(c,Wu,r);return s.set(c,l),l},a=o(e);return i=_o(()=>{const c=af();Ta(new Proxy(a,zu),l=>{const h=Uu(c,n(l),u=>{u!==l&&u!==void 0&&Ta(a,oc(u,t?.key||"id"))});h!==l&&h!==void 0&&oc(h,t?.key||"id")(a)})}),i.Pe=!0,{store:a,node:i}}const zu={get(n,e){let t;es(!0),Ji(!0);try{t=n[e]}finally{es(!1),Ji(!1)}return typeof t=="object"&&t!==null?new Proxy(t,zu):t},set(n,e,t){es(!0),Ji(!0);try{n[e]=t}finally{es(!1),Ji(!1)}return!0},deleteProperty(n,e){es(!0),Ji(!0);try{delete n[e]}finally{es(!1),Ji(!1)}return!0}},on=Symbol(0),Es=Symbol(0),Cn=Symbol(0),vn=Symbol(0),qt="v",pt="o",dt="x",mt="n",_s="h",lo="w",Vu="l",Oi="f",gs="p";function Gu(n,e=Wu,t){let i;return Array.isArray(n)?(i=[],i.v=n):i={v:n},t&&t(i),i[Cn]=new Proxy(i,e)}const Sa=new WeakMap;function rn(n,e){if(e?.[lo])return e[lo](n,e);let t=n[Cn]||Sa.get(n);return t||Sa.set(n,t=Gu(n)),t}function Dn(n){return n!=null&&typeof n=="object"&&!Object.isFrozen(n)}let ku=!1;function es(n){ku=n}function Ro(n){return ku||!!Bi?.has(n)}function Xs(n,e){let t=n[e];return t||(n[e]=t=Object.create(null)),t}function Ea(n,e,t,i,s=ir,r,o){if(n[e])return n[e];const a=js(t,{equals:s,unobserved(){delete n[e]}},i);if(r&&(a.Te=_t),o&&e in o){const c=o[e];a.re=c===void 0?qh:c}return n[e]=a}function ac(n,e=on){Zt()&&Gi(Ea(Xs(n,mt),e,void 0,n[Oi],!1,n[gs]))}function Hu(n,e,t=!0){const i=fn(()=>t?Object.keys(n):Reflect.ownKeys(n));if(!e)return i;const s=new Set(i),r=Reflect.ownKeys(e);for(const o of r)e[o]!==vn?s.add(o):s.delete(o);return Array.from(s)}function lc(n,e,t){let i=n;if(e&&t in e){if(i[t]===vn)return;t in i||(i=e)}return Reflect.getOwnPropertyDescriptor(i,t)}let Bi=null;const Wu={get(n,e,t){if(e===Es)return n;if(e===Cn)return t;if(e===$h)return n[Oi];if(e===on)return ac(n),t;const i=Xs(n,mt),s=i[e],r=n[dt]&&e in n[dt],o=r||n[pt]&&e in n[pt],a=!!n[qt][Es],c=r?n[dt]:n[pt]&&e in n[pt]?n[pt]:n[qt];if(!s){const h=Object.getOwnPropertyDescriptor(c,e);if(h&&h.get)return h.get.call(t)}if(Ro(t)){let h=s&&(o||!a)?s.Te!==void 0&&s.Te!==_t?s.Te:s.le!==_t?s.le:s.fe:c[e];if(h===vn&&(h=void 0),!Dn(h))return h;const u=rn(h,n);return Bi?.add(u),u}let l=s?o||!a?Gi(i[e]):(Gi(i[e]),c[e]):c[e];if(l===vn&&(l=void 0),!s){if(!o&&typeof l=="function"&&!c.hasOwnProperty(e)){let h;return!Array.isArray(n[qt])&&(h=Object.getPrototypeOf(n[qt]))&&h!==Object.prototype?l.bind(c):l}else if(Zt())return Gi(Ea(i,e,Dn(l)?rn(l,n):l,n[Oi],ir,n[gs],n[Yh]))}return Dn(l)?rn(l,n):l},has(n,e){if(e===Cn||e===on||e==="__proto__")return!0;const t=n[dt]&&e in n[dt]?n[dt][e]!==vn:n[pt]&&e in n[pt]?n[pt][e]!==vn:e in n[qt];return Zt()&&Gi(Ea(Xs(n,_s),e,t,n[Oi],ir,n[gs])),t},set(n,e,t){const i=n[Cn];if(Ro(i)){if(n[gs]){const s=n[Oi];s?.ne&&St.initTransition(s.ne)}fn(()=>{const s=n[qt],r=s[e];cf&&typeof e!="symbol"&&(n[Oi]?.Ee??0)&It;const o=n[gs]&&!nr,a=o?dt:pt;o&&ic(i);const c=n[dt]&&e in n[dt]?n[dt][e]:n[pt]&&e in n[pt]?n[pt][e]:r,l=t?.[Es]?.[qt]??t;if(c===l)return!0;const h=n[dt]?.length||n[pt]?.length||s.length;l!==void 0&&l===r?delete n[a][e]:(n[a]||(n[a]=Object.create(null)))[e]=l;const u=Dn(l);n[_s]?.[e]&&ot(n[_s][e],!0);const f=Xs(n,mt);if(f[e]&&ot(f[e],()=>u?rn(l,n):l),Array.isArray(s))if(e==="length")f.length&&ot(f.length,l);else{const p=parseInt(e)+1;p>h&&f.length&&ot(f.length,p)}f[on]&&ot(f[on],void 0)})}return!0},deleteProperty(n,e){const t=n[dt]?.[e]===vn,i=n[pt]?.[e]===vn;return Ro(n[Cn])&&!t&&!i&&fn(()=>{const s=n[gs]&&!nr,r=s?dt:pt;s&&ic(n[Cn]);const o=n[dt]&&e in n[dt]?n[dt][e]:n[pt]&&e in n[pt]?n[pt][e]:n[qt][e];if(e in n[qt]||n[pt]&&e in n[pt])(n[r]||(n[r]=Object.create(null)))[e]=vn;else if(n[r]&&e in n[r])delete n[r][e];else return!0;n[_s]?.[e]&&ot(n[_s][e],!1);const a=Xs(n,mt);a[e]&&ot(a[e],void 0),a[on]&&ot(a[on],void 0)}),!0},ownKeys(n){ac(n);let e=Hu(n[qt],n[pt],!1);if(n[dt]){const t=new Set(e);for(const i of Reflect.ownKeys(n[dt]))n[dt][i]!==vn?t.add(i):t.delete(i);e=Array.from(t)}return e},getOwnPropertyDescriptor(n,e){if(e===Cn)return{value:n[Cn],writable:!0,configurable:!0};if(n[dt]&&e in n[dt]){if(n[dt][e]===vn)return;const t=lc(n[qt],n[pt],e);return t?{...t,value:n[dt][e]}:{value:n[dt][e],writable:!0,enumerable:!0,configurable:!0}}return lc(n[qt],n[pt],e)},getPrototypeOf(n){return Object.getPrototypeOf(n[qt])}};function Ta(n,e){const t=Bi;Bi=new Set,Bi.add(n);try{const i=e(n);if(i!==n&&i!==void 0)if(Array.isArray(i)){for(let s=0,r=i.length;s<r;s++)n[s]=i[s];n.length=i.length}else new Set([...Object.keys(n),...Object.keys(i)]).forEach(r=>{r in i?n[r]=i[r]:delete n[r]})}finally{Bi.clear(),Bi=t}}function gf(n,e,t){const i=typeof n=="function",s=i?_f(n,e,t).store:rn(n);return[s,r=>Ta(s,r)]}const Xu=Symbol(0);function qs(n,e,t=0){let i,s=n;if(t<e.length-1){i=e[t];const o=typeof i,a=Array.isArray(n);if(Array.isArray(i)){for(let c=0;c<i.length;c++)e[t]=i[c],qs(n,e,t);e[t]=i;return}else if(a&&o==="function"){for(let c=0;c<n.length;c++)i(n[c],c)&&(e[t]=c,qs(n,e,t));e[t]=i;return}else if(a&&o==="object"){const{from:c=0,to:l=n.length-1,by:h=1}=i;for(let u=c;u<=l;u+=h)e[t]=u,qs(n,e,t);e[t]=i;return}else if(t<e.length-2){qs(n[i],e,t+1);return}s=n[i]}let r=e[e.length-1];if(!(typeof r=="function"&&(r=r(s),r===s))&&!(i===void 0&&r==null))if(r===Xu)delete n[i];else if(i===void 0||Dn(s)&&Dn(r)&&!Array.isArray(r)){const o=i!==void 0?n[i]:n,a=Object.keys(r);for(let c=0;c<a.length;c++)o[a[c]]=r[a[c]]}else n[i]=r}Object.assign(function(...e){return t=>{qs(t,e)}},{DELETE:Xu});function Co(n,e,t){const s=e.length>1,r=e;return bl(xf.bind({Me:Ks(),$e:0,je:n,Ke:[],Ye:r,Be:[],Ze:[],qe:void 0,Xe:void 0,ze:s?[]:void 0,Je:t?.fallback}))}const Po={pureWrite:!0};function xf(){const n=this.je()||[],e=n.length;return n[on],xs(this.Me,()=>{let t,i,s=this.Xe?()=>(this.Xe[i]=js(n[i],Po),this.ze&&(this.ze[i]=js(i,Po)),this.Ye(Ss(this.Xe[i]),this.ze?Ss(this.ze[i]):void 0)):this.ze?()=>{const r=n[i];return this.ze[i]=js(i,Po),this.Ye(()=>r,Ss(this.ze[i]))}:()=>{const r=n[i];return this.Ye(()=>r)};if(e===0)this.$e!==0&&(this.Me.dispose(!1),this.Ze=[],this.Ke=[],this.Be=[],this.$e=0,this.Xe&&(this.Xe=[]),this.ze&&(this.ze=[])),this.Je&&!this.Be[0]&&(this.Be[0]=xs(this.Ze[0]=Ks(),this.Je));else if(this.$e===0){for(this.Ze[0]&&this.Ze[0].dispose(),this.Be=new Array(e),i=0;i<e;i++)this.Ke[i]=n[i],this.Be[i]=xs(this.Ze[i]=Ks(),s);this.$e=e}else{let r,o,a,c,l,h,u,f=new Array(e),p=new Array(e),_=this.Xe?new Array(e):void 0,v=this.ze?new Array(e):void 0;for(r=0,o=Math.min(this.$e,e);r<o&&(this.Ke[r]===n[r]||this.Xe&&cc(this.qe,this.Ke[r],n[r]));r++)this.Xe&&ot(this.Xe[r],n[r]);for(o=this.$e-1,a=e-1;o>=r&&a>=r&&(this.Ke[o]===n[a]||this.Xe&&cc(this.qe,this.Ke[o],n[a]));o--,a--)f[a]=this.Be[o],p[a]=this.Ze[o],_&&(_[a]=this.Xe[o]),v&&(v[a]=this.ze[o]);for(h=new Map,u=new Array(a+1),i=a;i>=r;i--)c=n[i],l=this.qe?this.qe(c):c,t=h.get(l),u[i]=t===void 0?-1:t,h.set(l,i);for(t=r;t<=o;t++)c=this.Ke[t],l=this.qe?this.qe(c):c,i=h.get(l),i!==void 0&&i!==-1?(f[i]=this.Be[t],p[i]=this.Ze[t],_&&(_[i]=this.Xe[t]),v&&(v[i]=this.ze[t]),i=u[i],h.set(l,i)):this.Ze[t].dispose();for(i=r;i<e;i++)i in f?(this.Be[i]=f[i],this.Ze[i]=p[i],_&&(this.Xe[i]=_[i],ot(this.Xe[i],n[i])),v&&(this.ze[i]=v[i],ot(this.ze[i],i))):this.Be[i]=xs(this.Ze[i]=Ks(),s);this.Be=this.Be.slice(0,this.$e=e),this.Ke=n.slice(0)}}),this.Be}function cc(n,e,t){return n?n(e)===n(t):!0}function qu(n,e){if(typeof n=="function"&&!n.length){if(e?.doNotUnwrap)return n;do n=n();while(typeof n=="function"&&!n.length)}if(!(e?.skipNonRendered&&(n==null||n===!0||n===!1||n===""))){if(Array.isArray(n)){let t=[];return ba(n,t,e)?()=>{let i=[];return ba(t,i,{...e,doNotUnwrap:!1}),i}:t}return n}}function ba(n,e=[],t){let i=null,s=!1;for(let r=0;r<n.length;r++)try{let o=n[r];if(typeof o=="function"&&!o.length){if(t?.doNotUnwrap){e.push(o),s=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?s=ba(o,e,t):t?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||e.push(o)}catch(o){if(!(o instanceof Un))throw o;i=o}if(i)throw i;return s}const Gt=(...n)=>bl(...n),ft=(...n)=>ff(...n),vf=(...n)=>gf(...n),yf=(...n)=>pf(...n),Mf=(...n)=>df(...n);function qr(n,e){return fn(()=>n(e||{}))}const go=(n,e,t)=>yf(n,e,t,{transparent:!0}),Sf=(n,e)=>e?n.$r?n:bl(()=>n(),void 0,{transparent:!0}):Gt(()=>n());function Ef(n,e,t){let i=t.length,s=e.length,r=i,o=0,a=0,c=e[s-1].nextSibling,l=null;for(;o<s||a<r;){if(e[o]===t[a]){o++,a++;continue}for(;e[s-1]===t[r-1];)s--,r--;if(s===o){const h=r<i?a?t[a-1].nextSibling:t[r-a]:c;for(;a<r;)n.insertBefore(t[a++],h)}else if(r===a)for(;o<s;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[r-1]&&t[a]===e[s-1]){const h=e[--s].nextSibling;n.insertBefore(t[a++],e[o++].nextSibling),n.insertBefore(t[--r],h),e[s]=t[r]}else{if(!l){l=new Map;let u=a;for(;u<r;)l.set(t[u],u++)}const h=l.get(e[o]);if(h!=null)if(a<h&&h<r){let u=o,f=1,p;for(;++u<s&&u<r&&!((p=l.get(e[u]))==null||p!==h+f);)f++;if(f>h-a){const _=e[o];for(;a<h;)n.insertBefore(t[a++],_)}else n.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const uc="_$DX_DELEGATE";function Tf(n,e,t,i={}){let s;return Zi(r=>{s=r,e===document?qu(n):Yr(e,n(),e.firstChild?null:void 0,t)},{id:i.renderId}),()=>{s(),e.textContent=""}}function hr(n,e,t,i){let s;const r=a=>{const c=document.createElement("template");return c.innerHTML=n,c.content.firstChild};return a=>(s||(s=r())).cloneNode(!0)}function Yu(n,e=window.document){const t=e[uc]||(e[uc]=new Set);for(let i=0,s=n.length;i<s;i++){const r=n[i];t.has(r)||(t.add(r),e.addEventListener(r,Af))}}function At(n,e,t){t!=null?n.style.setProperty(e,t):n.style.removeProperty(e)}function bf(n,e){Array.isArray(n)?n.flat(1/0).forEach(t=>t&&t(e)):n(e)}function Al(n,e){const t=fn(n);xs(null,()=>bf(t,e))}function Yr(n,e,t,i){const s=t!==void 0;if(s&&!i&&(i=[]),typeof e!="function"&&(e=fc(e,i,s,!0),typeof e!="function"))return hc(n,e,i,t);if(e=Sf(e,!0),s&&i.length===0){const r=document.createTextNode("");n.insertBefore(r,t),i=[r]}go(r=>fc(e,r,s),(r,o)=>hc(n,r,o,t),i)}function Af(n){let e=n.target;const t=`$$${n.type}`,i=n.target,s=n.currentTarget,r=c=>Object.defineProperty(n,"target",{configurable:!0,value:c}),o=()=>{const c=e[t];if(c&&!e.disabled){const l=e[`${t}Data`];if(l!==void 0?c.call(e,l,n):c.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&r(e.host),!0},a=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const c=n.composedPath();r(c[0]);for(let l=0;l<c.length-2&&(e=c[l],!!o());l++){if(e._$host){e=e._$host,a();break}if(e.parentNode===s)break}}else a();r(i)}function hc(n,e,t,i){if(e===t)return;const s=typeof e,r=i!==void 0;if(s==="string"||s==="number"){const o=typeof t;o==="string"||o==="number"?n.firstChild.data=e:n.textContent=e}else if(e===void 0)xr(n,t,i);else if(e.nodeType)Array.isArray(t)?xr(n,t,r?i:null,e):t===void 0||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);else if(Array.isArray(e)){const o=t&&Array.isArray(t);e.length===0?xr(n,t,i):o?t.length===0?dc(n,e,i):Ef(n,t,e):(t&&xr(n),dc(n,e))}}function fc(n,e,t,i){if(n=qu(n,{skipNonRendered:!0,doNotUnwrap:i}),i&&typeof n=="function")return n;if(t&&!Array.isArray(n)&&(n=[n??""]),Array.isArray(n))for(let s=0,r=n.length;s<r;s++){const o=n[s],a=e&&e[s],c=typeof o;(c==="string"||c==="number")&&(n[s]=a&&a.nodeType===3&&a.data===""+o?a:document.createTextNode(o))}return n}function dc(n,e,t=null){for(let i=0,s=e.length;i<s;i++)n.insertBefore(e[i],t)}function xr(n,e,t,i){if(t===void 0)return n.textContent="";if(e.length){let s=!1;for(let r=e.length-1;r>=0;r--){const o=e[r];if(i!==o){const a=o.parentNode===n;i&&!s&&!r?a?n.replaceChild(i,o):n.insertBefore(i,t):a&&o.remove()}else s=!0}}else i&&n.insertBefore(i,t)}function wf(...n){return Tf(...n)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="183",Rf=0,pc=1,Cf=2,$r=1,Pf=2,Ys=3,Ei=0,Qt=1,Zn=2,ti=0,Ts=1,mc=2,_c=3,gc=4,Df=5,zi=100,If=101,Lf=102,Uf=103,Nf=104,Ff=200,Of=201,Bf=202,zf=203,Aa=204,wa=205,Vf=206,Gf=207,kf=208,Hf=209,Wf=210,Xf=211,qf=212,Yf=213,$f=214,Ra=0,Ca=1,Pa=2,Rs=3,Da=4,Ia=5,La=6,Ua=7,$u=0,Zf=1,Kf=2,Nn=0,Zu=1,Ku=2,ju=3,Ju=4,Qu=5,eh=6,th=7,nh=300,Yi=301,Cs=302,Do=303,Io=304,xo=306,Na=1e3,Kn=1001,Fa=1002,Ft=1003,jf=1004,vr=1005,Wt=1006,Lo=1007,ki=1008,an=1009,ih=1010,sh=1011,rr=1012,Rl=1013,zn=1014,In=1015,si=1016,Cl=1017,Pl=1018,or=1020,rh=35902,oh=35899,ah=1021,lh=1022,En=1023,ri=1026,Hi=1027,ch=1028,Dl=1029,Ps=1030,Il=1031,Ll=1033,Zr=33776,Kr=33777,jr=33778,Jr=33779,Oa=35840,Ba=35841,za=35842,Va=35843,Ga=36196,ka=37492,Ha=37496,Wa=37488,Xa=37489,qa=37490,Ya=37491,$a=37808,Za=37809,Ka=37810,ja=37811,Ja=37812,Qa=37813,el=37814,tl=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,ll=36492,cl=36494,ul=36495,hl=36283,fl=36284,dl=36285,pl=36286,Jf=3200,Ul=0,Qf=1,_i="",un="srgb",Ds="srgb-linear",co="linear",rt="srgb",ts=7680,xc=519,ed=512,td=513,nd=514,Nl=515,id=516,sd=517,Fl=518,rd=519,vc=35044,yc="300 es",Ln=2e3,ar=2001;function od(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ad(){const n=uo("canvas");return n.style.display="block",n}const Mc={};function Sc(...n){const e="THREE."+n.shift();console.log(e,...n)}function uh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ue(...n){n=uh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Je(...n){n=uh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ho(...n){const e=n.join(" ");e in Mc||(Mc[e]=!0,Ue(...n))}function ld(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const cd={[Ra]:Ca,[Pa]:La,[Da]:Ua,[Rs]:Ia,[Ca]:Ra,[La]:Pa,[Ua]:Da,[Ia]:Rs};class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uo=Math.PI/180,ml=180/Math.PI;function fr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function ud(n,e){return(n%e+e)%e}function No(n,e,t){return(1-t)*n+t*e}function Bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Us{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(u!==v||c!==f||l!==p||h!==_){let m=c*f+l*p+h*_+u*v;m<0&&(f=-f,p=-p,_=-_,v=-v,m=-m);let d=1-a;if(m<.9995){const y=Math.acos(m),E=Math.sin(y);d=Math.sin(d*y)/E,a=Math.sin(a*y)/E,c=c*d+f*a,l=l*d+p*a,h=h*d+_*a,u=u*d+v*a}else{c=c*d+f*a,l=l*d+p*a,h=h*d+_*a,u=u*d+v*a;const y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*u+c*p-l*f,e[t+1]=c*_+h*f+l*u-a*p,e[t+2]=l*_+h*p+a*f-c*u,e[t+3]=h*_-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"YZX":this._x=f*h*u+l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u-f*p*_;break;case"XZY":this._x=f*h*u-l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u+f*p*_;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new G,Ec=new Us;class ze{constructor(e,t,i,s,r,o,a,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],p=i[5],_=i[8],v=s[0],m=s[3],d=s[6],y=s[1],E=s[4],S=s[7],b=s[2],A=s[5],w=s[8];return r[0]=o*v+a*y+c*b,r[3]=o*m+a*E+c*A,r[6]=o*d+a*S+c*w,r[1]=l*v+h*y+u*b,r[4]=l*m+h*E+u*A,r[7]=l*d+h*S+u*w,r[2]=f*v+p*y+_*b,r[5]=f*m+p*E+_*A,r[8]=f*d+p*S+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,_=t*u+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(s*l-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new ze,Tc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){const n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:e,whitePoint:i,transfer:co,toXYZ:Tc,fromXYZ:bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Tc,fromXYZ:bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}const Ke=hd();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ns;class fd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ns===void 0&&(ns=uo("canvas")),ns.width=e.width,ns.height=e.height;const s=ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ns}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ni(t[i]/255)*255):t[i]=ni(t[i]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dd=0;class Ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bo(s[o].image)):r.push(Bo(s[o]))}else r=Bo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Bo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let pd=0;const zo=new G;class Kt extends Ls{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=Kn,s=Kn,r=Wt,o=ki,a=En,c=an,l=Kt.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=fr(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Na:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Na:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=nh;Kt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],_=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,S=(p+1)/2,b=(d+1)/2,A=(h+f)/4,w=(u+v)/4,g=(_+m)/4;return E>S&&E>b?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=w/i):S>b?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=g/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=w/r,s=g/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class md extends Ls{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Kt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ol(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends md{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hh extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e,t,i,s,r,o,a,c,l,h,u,f,p,_,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,f,p,_,v,m)}set(e,t,i,s,r,o,a,c,l,h,u,f,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*u,_=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,p=c*u,_=l*h,v=l*u;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,p=c*u,_=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,p=o*u,_=a*h,v=a*u;t[0]=c*h,t[4]=_*l-p,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,_=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=_*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+_,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*c,p=o*l,_=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,xd)}lookAt(e,t,i){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ci.crossVectors(i,tn),ci.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ci.crossVectors(i,tn)),ci.normalize(),yr.crossVectors(tn,ci),s[0]=ci.x,s[4]=yr.x,s[8]=tn.x,s[1]=ci.y,s[5]=yr.y,s[9]=tn.y,s[2]=ci.z,s[6]=yr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],y=i[3],E=i[7],S=i[11],b=i[15],A=s[0],w=s[4],g=s[8],M=s[12],O=s[1],C=s[5],D=s[9],N=s[13],V=s[2],U=s[6],B=s[10],I=s[14],j=s[3],Z=s[7],le=s[11],ce=s[15];return r[0]=o*A+a*O+c*V+l*j,r[4]=o*w+a*C+c*U+l*Z,r[8]=o*g+a*D+c*B+l*le,r[12]=o*M+a*N+c*I+l*ce,r[1]=h*A+u*O+f*V+p*j,r[5]=h*w+u*C+f*U+p*Z,r[9]=h*g+u*D+f*B+p*le,r[13]=h*M+u*N+f*I+p*ce,r[2]=_*A+v*O+m*V+d*j,r[6]=_*w+v*C+m*U+d*Z,r[10]=_*g+v*D+m*B+d*le,r[14]=_*M+v*N+m*I+d*ce,r[3]=y*A+E*O+S*V+b*j,r[7]=y*w+E*C+S*U+b*Z,r[11]=y*g+E*D+S*B+b*le,r[15]=y*M+E*N+S*I+b*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15],y=c*p-l*f,E=a*p-l*u,S=a*f-c*u,b=o*p-l*h,A=o*f-c*h,w=o*u-a*h;return t*(v*y-m*E+d*S)-i*(_*y-m*b+d*A)+s*(_*E-v*b+d*w)-r*(_*S-v*A+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],y=t*a-i*o,E=t*c-s*o,S=t*l-r*o,b=i*c-s*a,A=i*l-r*a,w=s*l-r*c,g=h*v-u*_,M=h*m-f*_,O=h*d-p*_,C=u*m-f*v,D=u*d-p*v,N=f*d-p*m,V=y*N-E*D+S*C+b*O-A*M+w*g;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/V;return e[0]=(a*N-c*D+l*C)*U,e[1]=(s*D-i*N-r*C)*U,e[2]=(v*w-m*A+d*b)*U,e[3]=(f*A-u*w-p*b)*U,e[4]=(c*O-o*N-l*M)*U,e[5]=(t*N-s*O+r*M)*U,e[6]=(m*S-_*w-d*E)*U,e[7]=(h*w-f*S+p*E)*U,e[8]=(o*D-a*O+l*g)*U,e[9]=(i*O-t*D-r*g)*U,e[10]=(_*A-v*S+d*y)*U,e[11]=(u*S-h*A-p*y)*U,e[12]=(a*M-o*C-c*g)*U,e[13]=(t*C-i*M+s*g)*U,e[14]=(v*E-_*b-m*y)*U,e[15]=(h*b-u*E+f*y)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,_=r*u,v=o*h,m=o*u,d=a*u,y=c*l,E=c*h,S=c*u,b=i.x,A=i.y,w=i.z;return s[0]=(1-(v+d))*b,s[1]=(p+S)*b,s[2]=(_-E)*b,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(f+d))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(_+E)*w,s[9]=(m-y)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=is.set(s[0],s[1],s[2]).length();const a=is.set(s[4],s[5],s[6]).length(),c=is.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_n.copy(this);const l=1/o,h=1/a,u=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Ln,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let _,v;if(c)_=r/(o-r),v=o*r/(o-r);else if(a===Ln)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ar)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ln,c=!1){const l=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let _,v;if(c)_=1/(o-r),v=o/(o-r);else if(a===Ln)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===ar)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const is=new G,_n=new Et,gd=new G(0,0,0),xd=new G(1,1,1),ci=new G,yr=new G,tn=new G,Ac=new Et,wc=new Us;class Vn{constructor(e=0,t=0,i=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vd=0;const Rc=new G,ss=new Us,Wn=new Et,Mr=new G,zs=new G,yd=new G,Md=new Us,Cc=new G(1,0,0),Pc=new G(0,1,0),Dc=new G(0,0,1),Ic={type:"added"},Sd={type:"removed"},rs={type:"childadded",child:null},Vo={type:"childremoved",child:null};class Xt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new G,t=new Vn,i=new Us,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Cc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mr.copy(e):Mr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(zs,Mr,this.up):Wn.lookAt(Mr,zs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Wn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ic),rs.child=e,this.dispatchEvent(rs),rs.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sd),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ic),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new G(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wi extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ed={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ed)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function ko(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=ud(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ko(o,r,e+1/3),this.g=ko(o,r,e),this.b=ko(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=dh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Ke.workingToColorSpace(zt.copy(this),e),Math.round(qe(zt.r*255,0,255))*65536+Math.round(qe(zt.g*255,0,255))*256+Math.round(qe(zt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(zt.copy(this),t);const i=zt.r,s=zt.g,r=zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=un){Ke.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,s=zt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Sr);const i=No(ui.h,Sr.h,t),s=No(ui.s,Sr.s,t),r=No(ui.l,Sr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new tt;tt.NAMES=dh;class Td extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gn=new G,Xn=new G,Ho=new G,qn=new G,os=new G,as=new G,Lc=new G,Wo=new G,Xo=new G,qo=new G,Yo=new Mt,$o=new Mt,Zo=new Mt;class Sn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gn.subVectors(e,t),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gn.subVectors(s,t),Xn.subVectors(i,t),Ho.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(Xn),c=gn.dot(Ho),l=Xn.dot(Xn),h=Xn.dot(Ho),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(o,qn.y),c.addScaledVector(a,qn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Yo.setScalar(0),$o.setScalar(0),Zo.setScalar(0),Yo.fromBufferAttribute(e,t),$o.fromBufferAttribute(e,i),Zo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Yo,r.x),o.addScaledVector($o,r.y),o.addScaledVector(Zo,r.z),o}static isFrontFacing(e,t,i,s){return gn.subVectors(i,t),Xn.subVectors(e,t),gn.cross(Xn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),gn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,i),as.subVectors(r,i),Wo.subVectors(e,i);const c=os.dot(Wo),l=as.dot(Wo);if(c<=0&&l<=0)return t.copy(i);Xo.subVectors(e,s);const h=os.dot(Xo),u=as.dot(Xo);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(os,o);qo.subVectors(e,r);const p=os.dot(qo),_=as.dot(qo);if(_>=0&&p<=_)return t.copy(r);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(as,a);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Lc.subVectors(r,s),a=(u-h)/(u-h+(p-_)),t.copy(s).addScaledVector(Lc,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ns{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Tr.subVectors(this.max,Vs),ls.subVectors(e.a,Vs),cs.subVectors(e.b,Vs),us.subVectors(e.c,Vs),hi.subVectors(cs,ls),fi.subVectors(us,cs),Ri.subVectors(ls,us);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Ri.z,Ri.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Ri.z,0,-Ri.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Ri.y,Ri.x,0];return!Ko(t,ls,cs,us,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,ls,cs,us,Tr))?!1:(br.crossVectors(hi,fi),t=[br.x,br.y,br.z],Ko(t,ls,cs,us,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new G,new G,new G,new G,new G,new G,new G,new G],xn=new G,Er=new Ns,ls=new G,cs=new G,us=new G,hi=new G,fi=new G,Ri=new G,Vs=new G,Tr=new G,br=new G,Ci=new G;function Ko(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ci.fromArray(n,r);const a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),c=e.dot(Ci),l=t.dot(Ci),h=i.dot(Ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const bt=new G,Ar=new Oe;let bd=0;class On{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}}class ph extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mh extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Lt extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ad=new Ns,Gs=new G,jo=new G;class Bl{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ad.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Gs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(jo)),this.expandByPoint(Gs.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wd=0;const cn=new Et,Jo=new Xt,hs=new G,nn=new Ns,ks=new Ns,Dt=new G;class pn extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(od(e)?mh:ph)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(nn.min,ks.min),nn.expandByPoint(Dt),Dt.addVectors(nn.max,ks.max),nn.expandByPoint(Dt)):(nn.expandByPoint(ks.min),nn.expandByPoint(ks.max))}nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Dt.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(e,l),Dt.add(hs)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let g=0;g<i.count;g++)a[g]=new G,c[g]=new G;const l=new G,h=new G,u=new G,f=new Oe,p=new Oe,_=new Oe,v=new G,m=new G;function d(g,M,O){l.fromBufferAttribute(i,g),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,O),f.fromBufferAttribute(r,g),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,O),h.sub(l),u.sub(l),p.sub(f),_.sub(f);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(C),a[g].add(v),a[M].add(v),a[O].add(v),c[g].add(m),c[M].add(m),c[O].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let g=0,M=y.length;g<M;++g){const O=y[g],C=O.start,D=O.count;for(let N=C,V=C+D;N<V;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const E=new G,S=new G,b=new G,A=new G;function w(g){b.fromBufferAttribute(s,g),A.copy(b);const M=a[g];E.copy(M),E.sub(b.multiplyScalar(b.dot(M))).normalize(),S.crossVectors(A,M);const C=S.dot(c[g])<0?-1:1;o.setXYZW(g,E.x,E.y,E.z,C)}for(let g=0,M=y.length;g<M;++g){const O=y[g],C=O.start,D=O.count;for(let N=C,V=C+D;N<V;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,h=new G,u=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let d=0;d<h;d++)f[_++]=l[p++]}return new On(f,h,u)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Rd=0;class Fs extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=Ts,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=wa,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Aa&&(i.blendSrc=this.blendSrc),this.blendDst!==wa&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $n=new G,Qo=new G,wr=new G,di=new G,ea=new G,Rr=new G,ta=new G;class Cd{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Qo.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Qo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wr),a=di.dot(this.direction),c=-di.dot(wr),l=di.lengthSq(),h=Math.abs(1-o*o);let u,f,p,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qo).addScaledVector(wr,f),p}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),s=$n.dot($n)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,s,r){ea.subVectors(t,e),Rr.subVectors(i,e),ta.crossVectors(ea,Rr);let o=this.direction.dot(ta),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const c=a*this.direction.dot(Rr.crossVectors(di,Rr));if(c<0)return null;const l=a*this.direction.dot(ea.cross(di));if(l<0||c+l>o)return null;const h=-a*di.dot(ta);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zl extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Uc=new Et,Pi=new Cd,Cr=new Bl,Nc=new G,Pr=new G,Dr=new G,Ir=new G,na=new G,Lr=new G,Fc=new G,Ur=new G;class et extends Xt{constructor(e=new pn,t=new zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(na.fromBufferAttribute(u,e),o?Lr.addScaledVector(na,h):Lr.addScaledVector(na.sub(t),h))}t.add(Lr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Cr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Cr,Nc)===null||Pi.origin.distanceToSquared(Nc)>(e.far-e.near)**2))&&(Uc.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Uc),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=o[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,b=E;S<b;S+=3){const A=a.getX(S),w=a.getX(S+1),g=a.getX(S+2);s=Nr(this,d,e,i,l,h,u,A,w,g),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const y=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);s=Nr(this,o,e,i,l,h,u,y,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=o[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,b=E;S<b;S+=3){const A=S,w=S+1,g=S+2;s=Nr(this,d,e,i,l,h,u,A,w,g),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const y=m,E=m+1,S=m+2;s=Nr(this,o,e,i,l,h,u,y,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Pd(n,e,t,i,s,r,o,a){let c;if(e.side===Qt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ei,a),c===null)return null;Ur.copy(a),Ur.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ur);return l<t.near||l>t.far?null:{distance:l,point:Ur.clone(),object:n}}function Nr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Pr),n.getVertexPosition(c,Dr),n.getVertexPosition(l,Ir);const h=Pd(n,e,t,i,Pr,Dr,Ir,Fc);if(h){const u=new G;Sn.getBarycoord(Fc,Pr,Dr,Ir,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,a,c,l,u,new Oe)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,c,l,u,new Oe)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,c,l,u,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new G,materialIndex:0};Sn.getNormal(Pr,Dr,Ir,f.normal),h.face=f,h.barycoord=u}return h}class Dd extends Kt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Ft,h=Ft,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ia=new G,Id=new G,Ld=new ze;class Ui{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ia.subVectors(i,t).cross(Id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ia),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ld.getNormalMatrix(e),s=this.coplanarPoint(ia).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Bl,Ud=new Oe(.5,.5),Fr=new G;class Vl{constructor(e=new Ui,t=new Ui,i=new Ui,s=new Ui,r=new Ui,o=new Ui){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],p=r[7],_=r[8],v=r[9],m=r[10],d=r[11],y=r[12],E=r[13],S=r[14],b=r[15];if(s[0].setComponents(l-o,p-h,d-_,b-y).normalize(),s[1].setComponents(l+o,p+h,d+_,b+y).normalize(),s[2].setComponents(l+a,p+u,d+v,b+E).normalize(),s[3].setComponents(l-a,p-u,d-v,b-E).normalize(),i)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,p-f,d-m,b-S).normalize();else if(s[4].setComponents(l-c,p-f,d-m,b-S).normalize(),t===Ln)s[5].setComponents(l+c,p+f,d+m,b+S).normalize();else if(t===ar)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);const t=Ud.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _h extends Kt{constructor(e=[],t=Yi,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lr extends Kt{constructor(e,t,i=zn,s,r,o,a=Ft,c=Ft,l,h=ri,u=1){if(h!==ri&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nd extends lr{constructor(e,t=zn,i=Yi,s,r,o=Ft,a=Ft,c,l=ri){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gh extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vt extends pn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function _(v,m,d,y,E,S,b,A,w,g,M){const O=S/w,C=b/g,D=S/2,N=b/2,V=A/2,U=w+1,B=g+1;let I=0,j=0;const Z=new G;for(let le=0;le<B;le++){const ce=le*C-N;for(let Q=0;Q<U;Q++){const Re=Q*O-D;Z[v]=Re*y,Z[m]=ce*E,Z[d]=V,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[d]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Q/w),u.push(1-le/g),I+=1}}for(let le=0;le<g;le++)for(let ce=0;ce<w;ce++){const Q=f+ce+U*le,Re=f+ce+U*(le+1),nt=f+(ce+1)+U*(le+1),Ye=f+(ce+1)+U*le;c.push(Q,Re,Ye),c.push(Re,nt,Ye),j+=6}a.addGroup(p,j,M),p+=j,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Gl extends pn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new G,h=new Oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=i+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class fo extends pn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let _=0;const v=[],m=i/2;let d=0;y(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(f,3)),this.setAttribute("uv",new Lt(p,2));function y(){const S=new G,b=new G;let A=0;const w=(t-e)/i;for(let g=0;g<=r;g++){const M=[],O=g/r,C=O*(t-e)+e;for(let D=0;D<=s;D++){const N=D/s,V=N*c+a,U=Math.sin(V),B=Math.cos(V);b.x=C*U,b.y=-O*i+m,b.z=C*B,u.push(b.x,b.y,b.z),S.set(U,w,B).normalize(),f.push(S.x,S.y,S.z),p.push(N,1-O),M.push(_++)}v.push(M)}for(let g=0;g<s;g++)for(let M=0;M<r;M++){const O=v[M][g],C=v[M+1][g],D=v[M+1][g+1],N=v[M][g+1];(e>0||M!==0)&&(h.push(O,C,N),A+=3),(t>0||M!==r-1)&&(h.push(C,D,N),A+=3)}l.addGroup(d,A,0),d+=A}function E(S){const b=_,A=new Oe,w=new G;let g=0;const M=S===!0?e:t,O=S===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*O,0),f.push(0,O,0),p.push(.5,.5),_++;const C=_;for(let D=0;D<=s;D++){const V=D/s*c+a,U=Math.cos(V),B=Math.sin(V);w.x=M*B,w.y=m*O,w.z=M*U,u.push(w.x,w.y,w.z),f.push(0,O,0),A.x=U*.5+.5,A.y=B*.5*O+.5,p.push(A.x,A.y),_++}for(let D=0;D<s;D++){const N=b+D,V=C+D;S===!0?h.push(V,V+1,N):h.push(V+1,V,N),g+=3}l.addGroup(d,g,S===!0?1:2),d+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vo extends pn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],_=[],v=[],m=[];for(let d=0;d<h;d++){const y=d*f-o;for(let E=0;E<l;E++){const S=E*u-r;_.push(S,-y,0),v.push(0,0,1),m.push(E/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){const E=y+l*d,S=y+l*(d+1),b=y+1+l*(d+1),A=y+1+l*d;p.push(E,S,A),p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.widthSegments,e.heightSegments)}}class po extends pn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new G,f=new G,p=[],_=[],v=[],m=[];for(let d=0;d<=i;d++){const y=[],E=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&c===Math.PI&&(S=-.5/t);for(let b=0;b<=t;b++){const A=b/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+E*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+S,1-E),y.push(l++)}h.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){const E=h[d][y+1],S=h[d][y],b=h[d+1][y],A=h[d+1][y+1];(d!==0||o>0)&&p.push(E,S,A),(d!==i-1||c<Math.PI)&&p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new Lt(_,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Is(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=Is(n[t]);for(const s in i)e[s]=i[s]}return e}function Fd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Od={clone:Is,merge:Yt};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vd extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sa extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Or extends Fs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Gd extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kd extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vh extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ra=new Et,Oc=new G,Bc=new G;class Hd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ar||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Br=new G,zr=new Us,An=new G;class yh extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Br,zr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,zr,An.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Br,zr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,zr,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pi=new G,zc=new Oe,Vc=new Oe;class hn extends yh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Vc),t.subVectors(Vc,zc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kl extends yh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wd extends Hd{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xd extends vh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Wd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class qd extends vh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const fs=-90,ds=1;class Yd extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(fs,ds,e,t);s.layers=this.layers,this.add(s);const r=new hn(fs,ds,e,t);r.layers=this.layers,this.add(r);const o=new hn(fs,ds,e,t);o.layers=this.layers,this.add(o);const a=new hn(fs,ds,e,t);a.layers=this.layers,this.add(a);const c=new hn(fs,ds,e,t);c.layers=this.layers,this.add(c);const l=new hn(fs,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class $d extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Gc(n,e,t,i){const s=Zd(i);switch(t){case ah:return n*e;case ch:return n*e/s.components*s.byteLength;case Dl:return n*e/s.components*s.byteLength;case Ps:return n*e*2/s.components*s.byteLength;case Il:return n*e*2/s.components*s.byteLength;case lh:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case Ll:return n*e*4/s.components*s.byteLength;case Zr:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jr:case Jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ba:case Va:return Math.max(n,16)*Math.max(e,8)/4;case Oa:case za:return Math.max(n,8)*Math.max(e,8)/2;case Ga:case ka:case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ha:case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ll:case cl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zd(n){switch(n){case an:case ih:return{byteLength:1,components:1};case rr:case sh:case si:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case zn:case Rl:case In:return{byteLength:4,components:1};case rh:case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Kd(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){const _=u[f],v=u[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){const v=u[p];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
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
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
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
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,up=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yp=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
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
#endif`,Zp=`uniform sampler2D dfgLUT;
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
}`,Kp=`
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`#include <common>
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
}`,i_=`#if DEPTH_PACKING == 3200
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
}`,s_=`#define DISTANCE
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
}`,r_=`#define DISTANCE
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`uniform float scale;
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
}`,c_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,f_=`#define LAMBERT
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
}`,d_=`#define LAMBERT
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
}`,p_=`#define MATCAP
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
}`,m_=`#define MATCAP
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
}`,__=`#define NORMAL
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
}`,g_=`#define NORMAL
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
}`,x_=`#define PHONG
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
}`,v_=`#define PHONG
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
}`,y_=`#define STANDARD
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
}`,M_=`#define STANDARD
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
}`,S_=`#define TOON
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
}`,E_=`#define TOON
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
}`,T_=`uniform float size;
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
}`,b_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,w_=`uniform vec3 color;
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
}`,R_=`uniform float rotation;
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
}`,C_=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:jd,alphahash_pars_fragment:Jd,alphamap_fragment:Qd,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:op,begin_vertex:ap,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:up,bumpmap_pars_fragment:hp,clipping_planes_fragment:fp,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:_p,color_pars_fragment:gp,color_pars_vertex:xp,color_vertex:vp,common:yp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:Ep,displacementmap_vertex:Tp,emissivemap_fragment:bp,emissivemap_pars_fragment:Ap,colorspace_fragment:wp,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Dp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Hp,envmap_vertex:Lp,fog_vertex:Up,fog_pars_vertex:Np,fog_fragment:Fp,fog_pars_fragment:Op,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:zp,lights_lambert_fragment:Vp,lights_lambert_pars_fragment:Gp,lights_pars_begin:kp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:Yp,lights_physical_fragment:$p,lights_physical_pars_fragment:Zp,lights_fragment_begin:Kp,lights_fragment_maps:jp,lights_fragment_end:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:om,metalnessmap_fragment:am,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:um,morphnormal_vertex:hm,morphtarget_pars_vertex:fm,morphtarget_vertex:dm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:_m,normal_pars_vertex:gm,normal_vertex:xm,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:Em,opaque_fragment:Tm,packing:bm,premultiplied_alpha_fragment:Am,project_vertex:wm,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Lm,shadowmap_vertex:Um,shadowmask_pars_fragment:Nm,skinbase_vertex:Fm,skinning_pars_vertex:Om,skinning_vertex:Bm,skinnormal_vertex:zm,specularmap_fragment:Vm,specularmap_pars_fragment:Gm,tonemapping_fragment:km,tonemapping_pars_fragment:Hm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:$m,worldpos_vertex:Zm,background_vert:Km,background_frag:jm,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:e_,cube_frag:t_,depth_vert:n_,depth_frag:i_,distance_vert:s_,distance_frag:r_,equirect_vert:o_,equirect_frag:a_,linedashed_vert:l_,linedashed_frag:c_,meshbasic_vert:u_,meshbasic_frag:h_,meshlambert_vert:f_,meshlambert_frag:d_,meshmatcap_vert:p_,meshmatcap_frag:m_,meshnormal_vert:__,meshnormal_frag:g_,meshphong_vert:x_,meshphong_frag:v_,meshphysical_vert:y_,meshphysical_frag:M_,meshtoon_vert:S_,meshtoon_frag:E_,points_vert:T_,points_frag:b_,shadow_vert:A_,shadow_frag:w_,sprite_vert:R_,sprite_frag:C_},ue={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Pn={basic:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Yt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Yt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Yt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Yt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Yt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Yt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Yt([ue.common,ue.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Yt([ue.lights,ue.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Pn.physical={uniforms:Yt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Vr={r:0,b:0,g:0},Ii=new Vn,P_=new Et;function D_(n,e,t,i,s,r){const o=new tt(0);let a=s===!0?0:1,c,l,h=null,u=0,f=null;function p(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){const S=y.backgroundBlurriness>0;E=e.get(E,S)}return E}function _(y){let E=!1;const S=p(y);S===null?m(o,a):S&&S.isColor&&(m(S,1),E=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,E){const S=p(E);S&&(S.isCubeTexture||S.mapping===xo)?(l===void 0&&(l=new et(new Vt(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Is(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Ii.copy(E.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(P_.makeRotationFromEuler(Ii)),l.material.toneMapped=Ke.getTransfer(S.colorSpace)!==rt,(h!==S||u!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new et(new vo(2,2),new Gn({name:"BackgroundMaterial",uniforms:Is(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,E){y.getRGB(Vr,xh(n)),t.buffers.color.setClear(Vr.r,Vr.g,Vr.b,E,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:_,addToRenderList:v,dispose:d}}function I_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(C,D,N,V,U){let B=!1;const I=u(C,V,N,D);r!==I&&(r=I,l(r.object)),B=p(C,V,N,U),B&&_(C,V,N,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(C,D,N,V),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function u(C,D,N,V){const U=V.wireframe===!0;let B=i[D.id];B===void 0&&(B={},i[D.id]=B);const I=C.isInstancedMesh===!0?C.id:0;let j=B[I];j===void 0&&(j={},B[I]=j);let Z=j[N.id];Z===void 0&&(Z={},j[N.id]=Z);let le=Z[U];return le===void 0&&(le=f(c()),Z[U]=le),le}function f(C){const D=[],N=[],V=[];for(let U=0;U<t;U++)D[U]=0,N[U]=0,V[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:V,object:C,attributes:{},index:null}}function p(C,D,N,V){const U=r.attributes,B=D.attributes;let I=0;const j=N.getAttributes();for(const Z in j)if(j[Z].location>=0){const ce=U[Z];let Q=B[Z];if(Q===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),ce===void 0||ce.attribute!==Q||Q&&ce.data!==Q.data)return!0;I++}return r.attributesNum!==I||r.index!==V}function _(C,D,N,V){const U={},B=D.attributes;let I=0;const j=N.getAttributes();for(const Z in j)if(j[Z].location>=0){let ce=B[Z];ce===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor));const Q={};Q.attribute=ce,ce&&ce.data&&(Q.data=ce.data),U[Z]=Q,I++}r.attributes=U,r.attributesNum=I,r.index=V}function v(){const C=r.newAttributes;for(let D=0,N=C.length;D<N;D++)C[D]=0}function m(C){d(C,0)}function d(C,D){const N=r.newAttributes,V=r.enabledAttributes,U=r.attributeDivisors;N[C]=1,V[C]===0&&(n.enableVertexAttribArray(C),V[C]=1),U[C]!==D&&(n.vertexAttribDivisor(C,D),U[C]=D)}function y(){const C=r.newAttributes,D=r.enabledAttributes;for(let N=0,V=D.length;N<V;N++)D[N]!==C[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function E(C,D,N,V,U,B,I){I===!0?n.vertexAttribIPointer(C,D,N,U,B):n.vertexAttribPointer(C,D,N,V,U,B)}function S(C,D,N,V){v();const U=V.attributes,B=N.getAttributes(),I=D.defaultAttributeValues;for(const j in B){const Z=B[j];if(Z.location>=0){let le=U[j];if(le===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const ce=le.normalized,Q=le.itemSize,Re=e.get(le);if(Re===void 0)continue;const nt=Re.buffer,Ye=Re.type,$=Re.bytesPerElement,ne=Ye===n.INT||Ye===n.UNSIGNED_INT||le.gpuType===Rl;if(le.isInterleavedBufferAttribute){const ie=le.data,Te=ie.stride,Se=le.offset;if(ie.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Z.locationSize;Ce++)d(Z.location+Ce,ie.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)m(Z.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Ce=0;Ce<Z.locationSize;Ce++)E(Z.location+Ce,Q/Z.locationSize,Ye,ce,Te*$,(Se+Q/Z.locationSize*Ce)*$,ne)}else{if(le.isInstancedBufferAttribute){for(let ie=0;ie<Z.locationSize;ie++)d(Z.location+ie,le.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<Z.locationSize;ie++)m(Z.location+ie);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ie=0;ie<Z.locationSize;ie++)E(Z.location+ie,Q/Z.locationSize,Ye,ce,Q*$,Q/Z.locationSize*ie*$,ne)}}else if(I!==void 0){const ce=I[j];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(Z.location,ce);break;case 3:n.vertexAttrib3fv(Z.location,ce);break;case 4:n.vertexAttrib4fv(Z.location,ce);break;default:n.vertexAttrib1fv(Z.location,ce)}}}}y()}function b(){M();for(const C in i){const D=i[C];for(const N in D){const V=D[N];for(const U in V){const B=V[U];for(const I in B)h(B[I].object),delete B[I];delete V[U]}}delete i[C]}}function A(C){if(i[C.id]===void 0)return;const D=i[C.id];for(const N in D){const V=D[N];for(const U in V){const B=V[U];for(const I in B)h(B[I].object),delete B[I];delete V[U]}}delete i[C.id]}function w(C){for(const D in i){const N=i[D];for(const V in N){const U=N[V];if(U[C.id]===void 0)continue;const B=U[C.id];for(const I in B)h(B[I].object),delete B[I];delete U[C.id]}}}function g(C){for(const D in i){const N=i[D],V=C.isInstancedMesh===!0?C.id:0,U=N[V];if(U!==void 0){for(const B in U){const I=U[B];for(const j in I)h(I[j].object),delete I[j];delete U[B]}delete N[V],Object.keys(N).length===0&&delete i[D]}}}function M(){O(),o=!0,r!==s&&(r=s,l(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:O,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function L_(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,i,1)}function c(l,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*f[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function U_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==En&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const g=w===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==an&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==In&&!g)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ue("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:S,maxSamples:b,samples:A}}function N_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ui,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const y=r?0:i,E=y*4;let S=d.clippingState||null;c.value=S,S=h(_,f,E,p);for(let b=0;b!==E;++b)S[b]=t[b];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const d=p+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,S=p;E!==v;++E,S+=4)o.copy(u[E]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const gi=4,kc=[.125,.215,.35,.446,.526,.582],Vi=20,F_=256,Hs=new kl,Hc=new tt;let oa=null,aa=0,la=0,ca=!1;const O_=new G;class Wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=O_}=r;oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,aa,la),this._renderer.xr.enabled=ca,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:si,format:En,colorSpace:Ds,depthBuffer:!1},s=Xc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=B_(r)),this._blurMaterial=V_(r,e,t),this._ggxMaterial=z_(r,e,t)}return s}_compileMaterial(e){const t=new et(new pn,e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,i,s,r){const c=new hn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Hc),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new Vt,new zl({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,d=!0):(m.color.copy(Hc),d=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const b=this._cubeSize;ps(s,S*b,E>2?b:0,b,b),u.setRenderTarget(s),d&&u.render(v,c),u.render(e,c)}u.toneMapping=p,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Yi||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ps(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Hs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=0+l*1.25,p=u*f,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-gi?i-_+gi:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,ps(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(a,Hs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,ps(e,m,d,3*v,2*v),s.setRenderTarget(e),s.render(a,Hs)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=l;const f=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Vi;m>Vi&&Ue(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const d=[];let y=0;for(let w=0;w<Vi;++w){const g=w/v,M=Math.exp(-g*g/2);d.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const S=this._sizeLods[s],b=3*S*(s>E-gi?s-E+gi:0),A=4*(this._cubeSize-S);ps(t,b,A,3*S,2*S),c.setRenderTarget(t),c.render(u,Hs)}}function B_(n){const e=[],t=[],i=[];let s=n;const r=n-gi+1+kc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-gi?c=kc[o-n+gi-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,v=3,m=2,d=1,y=new Float32Array(v*_*p),E=new Float32Array(m*_*p),S=new Float32Array(d*_*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,g=A>2?0:-1,M=[w,g,0,w+2/3,g,0,w+2/3,g+1,0,w,g,0,w+2/3,g+1,0,w,g+1,0];y.set(M,v*_*A),E.set(f,m*_*A);const O=[A,A,A,A,A,A];S.set(O,d*_*A)}const b=new pn;b.setAttribute("position",new On(y,v)),b.setAttribute("uv",new On(E,m)),b.setAttribute("faceIndex",new On(S,d)),i.push(new et(b,null)),s>gi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Xc(n,e,t){const i=new Fn(n,e,t);return i.texture.mapping=xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function z_(n,e,t){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function V_(n,e,t){const i=new Float32Array(Vi),s=new G(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function qc(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Yc(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function yo(){return`

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
	`}class Sh extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new _h(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ti});r.uniforms.tEquirect.value=t;const o=new et(s,r),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=Wt),new Yd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function G_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?o(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===Do||p===Io)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const v=new Sh(_.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,_=p===Do||p===Io,v=p===Yi||p===Cs;if(_||v){let m=t.get(f);const d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Wc(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return _&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new Wc(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,p){return p===Do?f.mapping=Yi:p===Io&&(f.mapping=Cs),f}function c(f){let p=0;const _=6;for(let v=0;v<_;v++)f[v]!==void 0&&p++;return p===_}function l(f){const p=f.target;p.removeEventListener("dispose",l);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(f){const p=f.target;p.removeEventListener("dispose",h);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function k_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ho("WebGLRenderer: "+i+" extension not supported."),s}}}function H_(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(u){const f=[],p=u.index,_=u.attributes.position;let v=0;if(_===void 0)return;if(p!==null){const y=p.array;v=p.version;for(let E=0,S=y.length;E<S;E+=3){const b=y[E+0],A=y[E+1],w=y[E+2];f.push(b,A,A,w,w,b)}}else{const y=_.array;v=_.version;for(let E=0,S=y.length/3-1;E<S;E+=3){const b=E+0,A=E+1,w=E+2;f.push(b,A,A,w,w,b)}}const m=new(_.count>=65535?mh:ph)(f,1);m.version=v;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function W_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function l(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),t.update(p,i,_))}function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function u(f,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,_);let d=0;for(let y=0;y<_;y++)d+=p[y]*v[y];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function X_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function q_(n,e,t){const i=new WeakMap,s=new Mt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let O=function(){g.dispose(),i.delete(a),a.removeEventListener("dispose",O)};var p=O;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let b=a.attributes.position.count*S,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*A*4*u),g=new hh(w,b,A,u);g.type=In,g.needsUpdate=!0;const M=S*4;for(let C=0;C<u;C++){const D=d[C],N=y[C],V=E[C],U=b*A*4*C;for(let B=0;B<D.count;B++){const I=B*M;_===!0&&(s.fromBufferAttribute(D,B),w[U+I+0]=s.x,w[U+I+1]=s.y,w[U+I+2]=s.z,w[U+I+3]=0),v===!0&&(s.fromBufferAttribute(N,B),w[U+I+4]=s.x,w[U+I+5]=s.y,w[U+I+6]=s.z,w[U+I+7]=0),m===!0&&(s.fromBufferAttribute(V,B),w[U+I+8]=s.x,w[U+I+9]=s.y,w[U+I+10]=s.z,w[U+I+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:g,size:new Oe(b,A)},i.set(a,f),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Y_(n,e,t,i,s){let r=new WeakMap;function o(l){const h=s.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const $_={[Zu]:"LINEAR_TONE_MAPPING",[Ku]:"REINHARD_TONE_MAPPING",[ju]:"CINEON_TONE_MAPPING",[Ju]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[th]:"NEUTRAL_TONE_MAPPING",[Qu]:"CUSTOM_TONE_MAPPING"};function Z_(n,e,t,i,s){const r=new Fn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Fn(e,t,{type:si,depthBuffer:!1,stencilBuffer:!1}),a=new pn;a.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const c=new Vd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new et(a,c),h=new kl(-1,1,1,-1,0,1);let u=null,f=null,p=!1,_,v=null,m=[],d=!1;this.setSize=function(y,E){r.setSize(y,E),o.setSize(y,E);for(let S=0;S<m.length;S++){const b=m[S];b.setSize&&b.setSize(y,E)}},this.setEffects=function(y){m=y,d=m.length>0&&m[0].isRenderPass===!0;const E=r.width,S=r.height;for(let b=0;b<m.length;b++){const A=m[b];A.setSize&&A.setSize(E,S)}},this.begin=function(y,E){if(p||y.toneMapping===Nn&&m.length===0)return!1;if(v=E,E!==null){const S=E.width,b=E.height;(r.width!==S||r.height!==b)&&this.setSize(S,b)}return d===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=Nn,!0},this.hasRenderPass=function(){return d},this.end=function(y,E){y.toneMapping=_,p=!0;let S=r,b=o;for(let A=0;A<m.length;A++){const w=m[A];if(w.enabled!==!1&&(w.render(y,b,S,E),w.needsSwap!==!1)){const g=S;S=b,b=g}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,c.defines={},Ke.getTransfer(u)===rt&&(c.defines.SRGB_TRANSFER="");const A=$_[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(v),y.render(l,h),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Eh=new Kt,_l=new lr(1,1),Th=new hh,bh=new _d,Ah=new _h,$c=[],Zc=[],Kc=new Float32Array(16),jc=new Float32Array(9),Jc=new Float32Array(4);function Os(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=$c[s];if(r===void 0&&(r=new Float32Array(s),$c[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Mo(n,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function K_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function j_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function J_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function Q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function eg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Jc.set(i),n.uniformMatrix2fv(this.addr,!1,Jc),Ct(t,i)}}function tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;jc.set(i),n.uniformMatrix3fv(this.addr,!1,jc),Ct(t,i)}}function ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Kc.set(i),n.uniformMatrix4fv(this.addr,!1,Kc),Ct(t,i)}}function ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function ag(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function hg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_l.compareFunction=t.isReversedDepthBuffer()?Fl:Nl,r=_l):r=Eh,t.setTexture2D(e||r,s)}function fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bh,s)}function dg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ah,s)}function pg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Th,s)}function mg(n){switch(n){case 5126:return K_;case 35664:return j_;case 35665:return J_;case 35666:return Q_;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return lg;case 36295:return cg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return pg}}function _g(n,e){n.uniform1fv(this.addr,e)}function gg(n,e){const t=Os(e,this.size,2);n.uniform2fv(this.addr,t)}function xg(n,e){const t=Os(e,this.size,3);n.uniform3fv(this.addr,t)}function vg(n,e){const t=Os(e,this.size,4);n.uniform4fv(this.addr,t)}function yg(n,e){const t=Os(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mg(n,e){const t=Os(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sg(n,e){const t=Os(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Eg(n,e){n.uniform1iv(this.addr,e)}function Tg(n,e){n.uniform2iv(this.addr,e)}function bg(n,e){n.uniform3iv(this.addr,e)}function Ag(n,e){n.uniform4iv(this.addr,e)}function wg(n,e){n.uniform1uiv(this.addr,e)}function Rg(n,e){n.uniform2uiv(this.addr,e)}function Cg(n,e){n.uniform3uiv(this.addr,e)}function Pg(n,e){n.uniform4uiv(this.addr,e)}function Dg(n,e,t){const i=this.cache,s=e.length,r=Mo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=_l:o=Eh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Ig(n,e,t){const i=this.cache,s=e.length,r=Mo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||bh,r[o])}function Lg(n,e,t){const i=this.cache,s=e.length,r=Mo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ah,r[o])}function Ug(n,e,t){const i=this.cache,s=e.length,r=Mo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Th,r[o])}function Ng(n){switch(n){case 5126:return _g;case 35664:return gg;case 35665:return xg;case 35666:return vg;case 35674:return yg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return bg;case 35669:case 35673:return Ag;case 5125:return wg;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ug}}class Fg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mg(t.type)}}class Og{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ng(t.type)}}class Bg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Qc(n,e){n.seq.push(e),n.map[e.id]=e}function zg(n,e,t){const i=n.name,s=i.length;for(ua.lastIndex=0;;){const r=ua.exec(i),o=ua.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qc(t,l===void 0?new Fg(a,n,e):new Og(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Bg(a),Qc(t,u)),t=u}}}class Qr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);zg(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function eu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Vg=37297;let Gg=0;function kg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const tu=new ze;function Hg(n){Ke._getMatrix(tu,Ke.workingColorSpace,n);const e=`mat3( ${tu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case co:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+kg(n.getShaderSource(e),a)}else return r}function Wg(n,e){const t=Hg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Xg={[Zu]:"Linear",[Ku]:"Reinhard",[ju]:"Cineon",[Ju]:"ACESFilmic",[eh]:"AgX",[th]:"Neutral",[Qu]:"Custom"};function qg(n,e){const t=Xg[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gr=new G;function Yg(){Ke.getLuminanceCoefficients(Gr);const n=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Zg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function $s(n){return n!==""}function iu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function su(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(n){return n.replace(jg,Qg)}const Jg=new Map;function Qg(n,e){let t=Ve[e];if(t===void 0){const i=Jg.get(e);if(i!==void 0)t=Ve[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(n){return n.replace(e0,t0)}function t0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ou(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const n0={[$r]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function i0(n){return n0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s0={[Yi]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE_UV"};function r0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":s0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const o0={[Cs]:"ENVMAP_MODE_REFRACTION"};function a0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":o0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l0={[$u]:"ENVMAP_BLENDING_MULTIPLY",[Zf]:"ENVMAP_BLENDING_MIX",[Kf]:"ENVMAP_BLENDING_ADD"};function c0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":l0[n.combine]||"ENVMAP_BLENDING_NONE"}function u0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function h0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=i0(t),l=r0(t),h=a0(t),u=c0(t),f=u0(t),p=$g(t),_=Zg(r),v=s.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),d.length>0&&(d+=`
`)):(m=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),d=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Nn?qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Wg("linearToOutputTexel",t.outputColorSpace),Yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=gl(o),o=iu(o,t),o=su(o,t),a=gl(a),a=iu(a,t),a=su(a,t),o=ru(o),a=ru(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=y+m+o,S=y+d+a,b=eu(s,s.VERTEX_SHADER,E),A=eu(s,s.FRAGMENT_SHADER,S);s.attachShader(v,b),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(C){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(b)||"",V=s.getShaderInfoLog(A)||"",U=D.trim(),B=N.trim(),I=V.trim();let j=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,b,A);else{const le=nu(s,b,"vertex"),ce=nu(s,A,"fragment");Je("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+le+`
`+ce)}else U!==""?Ue("WebGLProgram: Program Info Log:",U):(B===""||I==="")&&(Z=!1);Z&&(C.diagnostics={runnable:j,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:I,prefix:d}})}s.deleteShader(b),s.deleteShader(A),g=new Qr(s,v),M=Kg(s,v)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(v,Vg)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}let f0=0;class d0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new p0(e),t.set(e,i)),i}}class p0{constructor(e){this.id=f0++,this.code=e,this.usedTimes=0}}function m0(n,e,t,i,s,r){const o=new fh,a=new d0,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return c.add(g),g===0?"uv":`uv${g}`}function v(g,M,O,C,D){const N=C.fog,V=D.geometry,U=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,I=e.get(g.envMap||U,B),j=I&&I.mapping===xo?I.image.height:null,Z=p[g.type];g.precision!==null&&(f=i.getMaxPrecision(g.precision),f!==g.precision&&Ue("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));const le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=le!==void 0?le.length:0;let Q=0;V.morphAttributes.position!==void 0&&(Q=1),V.morphAttributes.normal!==void 0&&(Q=2),V.morphAttributes.color!==void 0&&(Q=3);let Re,nt,Ye,$;if(Z){const st=Pn[Z];Re=st.vertexShader,nt=st.fragmentShader}else Re=g.vertexShader,nt=g.fragmentShader,a.update(g),Ye=a.getVertexShaderID(g),$=a.getFragmentShaderID(g);const ne=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),Te=D.isInstancedMesh===!0,Se=D.isBatchedMesh===!0,Ce=!!g.map,$e=!!g.matcap,He=!!I,ke=!!g.aoMap,it=!!g.lightMap,Ne=!!g.bumpMap,gt=!!g.normalMap,P=!!g.displacementMap,ct=!!g.emissiveMap,We=!!g.metalnessMap,Ze=!!g.roughnessMap,xe=g.anisotropy>0,R=g.clearcoat>0,x=g.dispersion>0,F=g.iridescence>0,Y=g.sheen>0,K=g.transmission>0,X=xe&&!!g.anisotropyMap,me=R&&!!g.clearcoatMap,se=R&&!!g.clearcoatNormalMap,be=R&&!!g.clearcoatRoughnessMap,Pe=F&&!!g.iridescenceMap,J=F&&!!g.iridescenceThicknessMap,te=Y&&!!g.sheenColorMap,ge=Y&&!!g.sheenRoughnessMap,ve=!!g.specularMap,he=!!g.specularColorMap,Be=!!g.specularIntensityMap,L=K&&!!g.transmissionMap,oe=K&&!!g.thicknessMap,re=!!g.gradientMap,_e=!!g.alphaMap,ee=g.alphaTest>0,q=!!g.alphaHash,ye=!!g.extensions;let Le=Nn;g.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=n.toneMapping);const ht={shaderID:Z,shaderType:g.type,shaderName:g.name,vertexShader:Re,fragmentShader:nt,defines:g.defines,customVertexShaderID:Ye,customFragmentShaderID:$,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:Se,batchingColor:Se&&D._colorsTexture!==null,instancing:Te,instancingColor:Te&&D.instanceColor!==null,instancingMorph:Te&&D.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ds,alphaToCoverage:!!g.alphaToCoverage,map:Ce,matcap:$e,envMap:He,envMapMode:He&&I.mapping,envMapCubeUVHeight:j,aoMap:ke,lightMap:it,bumpMap:Ne,normalMap:gt,displacementMap:P,emissiveMap:ct,normalMapObjectSpace:gt&&g.normalMapType===Qf,normalMapTangentSpace:gt&&g.normalMapType===Ul,metalnessMap:We,roughnessMap:Ze,anisotropy:xe,anisotropyMap:X,clearcoat:R,clearcoatMap:me,clearcoatNormalMap:se,clearcoatRoughnessMap:be,dispersion:x,iridescence:F,iridescenceMap:Pe,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:te,sheenRoughnessMap:ge,specularMap:ve,specularColorMap:he,specularIntensityMap:Be,transmission:K,transmissionMap:L,thicknessMap:oe,gradientMap:re,opaque:g.transparent===!1&&g.blending===Ts&&g.alphaToCoverage===!1,alphaMap:_e,alphaTest:ee,alphaHash:q,combine:g.combine,mapUv:Ce&&_(g.map.channel),aoMapUv:ke&&_(g.aoMap.channel),lightMapUv:it&&_(g.lightMap.channel),bumpMapUv:Ne&&_(g.bumpMap.channel),normalMapUv:gt&&_(g.normalMap.channel),displacementMapUv:P&&_(g.displacementMap.channel),emissiveMapUv:ct&&_(g.emissiveMap.channel),metalnessMapUv:We&&_(g.metalnessMap.channel),roughnessMapUv:Ze&&_(g.roughnessMap.channel),anisotropyMapUv:X&&_(g.anisotropyMap.channel),clearcoatMapUv:me&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:te&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(g.sheenRoughnessMap.channel),specularMapUv:ve&&_(g.specularMap.channel),specularColorMapUv:he&&_(g.specularColorMap.channel),specularIntensityMapUv:Be&&_(g.specularIntensityMap.channel),transmissionMapUv:L&&_(g.transmissionMap.channel),thicknessMapUv:oe&&_(g.thicknessMap.channel),alphaMapUv:_e&&_(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(gt||xe),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Ce||_e),fog:!!N,useFog:g.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||V.attributes.normal===void 0&&gt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ce&&g.map.isVideoTexture===!0&&Ke.getTransfer(g.map.colorSpace)===rt,decodeVideoTextureEmissive:ct&&g.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(g.emissiveMap.colorSpace)===rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Zn,flipSided:g.side===Qt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ye&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&g.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function m(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const O in g.defines)M.push(O),M.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(d(M,g),y(M,g),M.push(n.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function d(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function y(g,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),g.push(o.mask)}function E(g){const M=p[g.type];let O;if(M){const C=Pn[M];O=Od.clone(C.uniforms)}else O=g.uniforms;return O}function S(g,M){let O=h.get(M);return O!==void 0?++O.usedTimes:(O=new h0(n,M,g,s),l.push(O),h.set(M,O)),O}function b(g){if(--g.usedTimes===0){const M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){a.remove(g)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:S,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:w}}function _0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function g0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function au(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,_,v,m,d){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:p,material:_,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},n[e]=y):(y.id=f.id,y.object=f,y.geometry=p,y.material=_,y.materialVariant=o(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=m,y.group=d),e++,y}function c(f,p,_,v,m,d){const y=a(f,p,_,v,m,d);_.transmission>0?i.push(y):_.transparent===!0?s.push(y):t.push(y)}function l(f,p,_,v,m,d){const y=a(f,p,_,v,m,d);_.transmission>0?i.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function h(f,p){t.length>1&&t.sort(f||g0),i.length>1&&i.sort(p||au),s.length>1&&s.sort(p||au)}function u(){for(let f=e,p=n.length;f<p;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function x0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new lu,n.set(i,[o])):s>=r.length?(o=new lu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function v0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new tt};break;case"SpotLight":t={position:new G,direction:new G,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function y0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let M0=0;function S0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function E0(n){const e=new v0,t=y0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);const s=new G,r=new Et,o=new Et;function a(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,y=0,E=0,S=0,b=0,A=0,w=0;l.sort(S0);for(let M=0,O=l.length;M<O;M++){const C=l[M],D=C.color,N=C.intensity,V=C.distance;let U=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ps?U=C.shadow.map.texture:U=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*N,u+=D.g*N,f+=D.b*N;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],N);w++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const I=C.shadow,j=t.get(C);j.shadowIntensity=I.intensity,j.shadowBias=I.bias,j.shadowNormalBias=I.normalBias,j.shadowRadius=I.radius,j.shadowMapSize=I.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=C.shadow.matrix,y++}i.directional[p]=B,p++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(D).multiplyScalar(N),B.distance=V,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[v]=B;const I=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,I.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[v]=I.matrix,C.castShadow){const j=t.get(C);j.shadowIntensity=I.intensity,j.shadowBias=I.bias,j.shadowNormalBias=I.normalBias,j.shadowRadius=I.radius,j.shadowMapSize=I.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=U,S++}v++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(D).multiplyScalar(N),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=B,m++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const I=C.shadow,j=t.get(C);j.shadowIntensity=I.intensity,j.shadowBias=I.bias,j.shadowNormalBias=I.normalBias,j.shadowRadius=I.radius,j.shadowMapSize=I.mapSize,j.shadowCameraNear=I.camera.near,j.shadowCameraFar=I.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=C.shadow.matrix,E++}i.point[_]=B,_++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(N),B.groundColor.copy(C.groundColor).multiplyScalar(N),i.hemi[d]=B,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const g=i.hash;(g.directionalLength!==p||g.pointLength!==_||g.spotLength!==v||g.rectAreaLength!==m||g.hemiLength!==d||g.numDirectionalShadows!==y||g.numPointShadows!==E||g.numSpotShadows!==S||g.numSpotMaps!==b||g.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,g.directionalLength=p,g.pointLength=_,g.spotLength=v,g.rectAreaLength=m,g.hemiLength=d,g.numDirectionalShadows=y,g.numPointShadows=E,g.numSpotShadows=S,g.numSpotMaps=b,g.numLightProbes=w,i.version=M0++)}function c(l,h){let u=0,f=0,p=0,_=0,v=0;const m=h.matrixWorldInverse;for(let d=0,y=l.length;d<y;d++){const E=l[d];if(E.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(E.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function cu(n){const e=new E0(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function T0(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new cu(n),e.set(s,[a])):r>=o.length?(a=new cu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A0=`uniform sampler2D shadow_pass;
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
}`,w0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],R0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],uu=new Et,Ws=new G,ha=new G;function C0(n,e,t){let i=new Vl;const s=new Oe,r=new Oe,o=new Mt,a=new Gd,c=new kd,l={},h=t.maxTextureSize,u={[Ei]:Qt,[Qt]:Ei,[Zn]:Zn},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:b0,fragmentShader:A0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new et(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let d=this.type;this.render=function(A,w,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Pf&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$r);const M=n.getRenderTarget(),O=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ti),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=d!==this.type;N&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(U=>U.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,U=A.length;V<U;V++){const B=A[V],I=B.shadow;if(I===void 0){Ue("WebGLShadowMap:",B,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const j=I.getFrameExtents();s.multiply(j),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,I.mapSize.y=r.y));const Z=n.state.buffers.depth.getReversed();if(I.camera._reversedDepth=Z,I.map===null||N===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Ys){if(B.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Fn(s.x,s.y,{format:Ps,type:si,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),I.map.texture.name=B.name+".shadowMap",I.map.depthTexture=new lr(s.x,s.y,In),I.map.depthTexture.name=B.name+".shadowMapDepth",I.map.depthTexture.format=ri,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ft,I.map.depthTexture.magFilter=Ft}else B.isPointLight?(I.map=new Sh(s.x),I.map.depthTexture=new Nd(s.x,zn)):(I.map=new Fn(s.x,s.y),I.map.depthTexture=new lr(s.x,s.y,zn)),I.map.depthTexture.name=B.name+".shadowMap",I.map.depthTexture.format=ri,this.type===$r?(I.map.depthTexture.compareFunction=Z?Fl:Nl,I.map.depthTexture.minFilter=Wt,I.map.depthTexture.magFilter=Wt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ft,I.map.depthTexture.magFilter=Ft);I.camera.updateProjectionMatrix()}const le=I.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<le;ce++){if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,ce),n.clear();else{ce===0&&(n.setRenderTarget(I.map),n.clear());const Q=I.getViewport(ce);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),D.viewport(o)}if(B.isPointLight){const Q=I.camera,Re=I.matrix,nt=B.distance||Q.far;nt!==Q.far&&(Q.far=nt,Q.updateProjectionMatrix()),Ws.setFromMatrixPosition(B.matrixWorld),Q.position.copy(Ws),ha.copy(Q.position),ha.add(w0[ce]),Q.up.copy(R0[ce]),Q.lookAt(ha),Q.updateMatrixWorld(),Re.makeTranslation(-Ws.x,-Ws.y,-Ws.z),uu.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),I._frustum.setFromProjectionMatrix(uu,Q.coordinateSystem,Q.reversedDepth)}else I.updateMatrices(B);i=I.getFrustum(),S(w,g,I.camera,B,this.type)}I.isPointLightShadow!==!0&&this.type===Ys&&y(I,g),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,O,C)};function y(A,w){const g=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fn(s.x,s.y,{format:Ps,type:si})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,g,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,g,p,v,null)}function E(A,w,g,M){let O=null;const C=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)O=C;else if(O=g.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=O.uuid,N=w.uuid;let V=l[D];V===void 0&&(V={},l[D]=V);let U=V[N];U===void 0&&(U=O.clone(),V[N]=U,w.addEventListener("dispose",b)),O=U}if(O.visible=w.visible,O.wireframe=w.wireframe,M===Ys?O.side=w.shadowSide!==null?w.shadowSide:w.side:O.side=w.shadowSide!==null?w.shadowSide:u[w.side],O.alphaMap=w.alphaMap,O.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,O.map=w.map,O.clipShadows=w.clipShadows,O.clippingPlanes=w.clippingPlanes,O.clipIntersection=w.clipIntersection,O.displacementMap=w.displacementMap,O.displacementScale=w.displacementScale,O.displacementBias=w.displacementBias,O.wireframeLinewidth=w.wireframeLinewidth,O.linewidth=w.linewidth,g.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const D=n.properties.get(O);D.light=g}return O}function S(A,w,g,M,O){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===Ys)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);const N=e.update(A),V=A.material;if(Array.isArray(V)){const U=N.groups;for(let B=0,I=U.length;B<I;B++){const j=U[B],Z=V[j.materialIndex];if(Z&&Z.visible){const le=E(A,Z,M,O);A.onBeforeShadow(n,A,w,g,N,le,j),n.renderBufferDirect(g,null,N,le,A,j),A.onAfterShadow(n,A,w,g,N,le,j)}}}else if(V.visible){const U=E(A,V,M,O);A.onBeforeShadow(n,A,w,g,N,U,null),n.renderBufferDirect(g,null,N,U,A,null),A.onAfterShadow(n,A,w,g,N,U,null)}}const D=A.children;for(let N=0,V=D.length;N<V;N++)S(D[N],w,g,M,O)}function b(A){A.target.removeEventListener("dispose",b);for(const g in l){const M=l[g],O=A.target.uuid;O in M&&(M[O].dispose(),delete M[O])}}}function P0(n,e){function t(){let L=!1;const oe=new Mt;let re=null;const _e=new Mt(0,0,0,0);return{setMask:function(ee){re!==ee&&!L&&(n.colorMask(ee,ee,ee,ee),re=ee)},setLocked:function(ee){L=ee},setClear:function(ee,q,ye,Le,ht){ht===!0&&(ee*=Le,q*=Le,ye*=Le),oe.set(ee,q,ye,Le),_e.equals(oe)===!1&&(n.clearColor(ee,q,ye,Le),_e.copy(oe))},reset:function(){L=!1,re=null,_e.set(-1,0,0,0)}}}function i(){let L=!1,oe=!1,re=null,_e=null,ee=null;return{setReversed:function(q){if(oe!==q){const ye=e.get("EXT_clip_control");q?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),oe=q;const Le=ee;ee=null,this.setClear(Le)}},getReversed:function(){return oe},setTest:function(q){q?ne(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(q){re!==q&&!L&&(n.depthMask(q),re=q)},setFunc:function(q){if(oe&&(q=cd[q]),_e!==q){switch(q){case Ra:n.depthFunc(n.NEVER);break;case Ca:n.depthFunc(n.ALWAYS);break;case Pa:n.depthFunc(n.LESS);break;case Rs:n.depthFunc(n.LEQUAL);break;case Da:n.depthFunc(n.EQUAL);break;case Ia:n.depthFunc(n.GEQUAL);break;case La:n.depthFunc(n.GREATER);break;case Ua:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=q}},setLocked:function(q){L=q},setClear:function(q){ee!==q&&(ee=q,oe&&(q=1-q),n.clearDepth(q))},reset:function(){L=!1,re=null,_e=null,ee=null,oe=!1}}}function s(){let L=!1,oe=null,re=null,_e=null,ee=null,q=null,ye=null,Le=null,ht=null;return{setTest:function(st){L||(st?ne(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(st){oe!==st&&!L&&(n.stencilMask(st),oe=st)},setFunc:function(st,kn,Hn){(re!==st||_e!==kn||ee!==Hn)&&(n.stencilFunc(st,kn,Hn),re=st,_e=kn,ee=Hn)},setOp:function(st,kn,Hn){(q!==st||ye!==kn||Le!==Hn)&&(n.stencilOp(st,kn,Hn),q=st,ye=kn,Le=Hn)},setLocked:function(st){L=st},setClear:function(st){ht!==st&&(n.clearStencil(st),ht=st)},reset:function(){L=!1,oe=null,re=null,_e=null,ee=null,q=null,ye=null,Le=null,ht=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,y=null,E=null,S=null,b=null,A=null,w=new tt(0,0,0),g=0,M=!1,O=null,C=null,D=null,N=null,V=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,I=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=I>=1):j.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=I>=2);let Z=null,le={};const ce=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),Re=new Mt().fromArray(ce),nt=new Mt().fromArray(Q);function Ye(L,oe,re,_e){const ee=new Uint8Array(4),q=n.createTexture();n.bindTexture(L,q),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<re;ye++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(oe+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return q}const $={};$[n.TEXTURE_2D]=Ye(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(Rs),Ne(!1),gt(pc),ne(n.CULL_FACE),ke(ti);function ne(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function ie(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Te(L,oe){return u[L]!==oe?(n.bindFramebuffer(L,oe),u[L]=oe,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=oe),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Se(L,oe){let re=p,_e=!1;if(L){re=f.get(oe),re===void 0&&(re=[],f.set(oe,re));const ee=L.textures;if(re.length!==ee.length||re[0]!==n.COLOR_ATTACHMENT0){for(let q=0,ye=ee.length;q<ye;q++)re[q]=n.COLOR_ATTACHMENT0+q;re.length=ee.length,_e=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,_e=!0);_e&&n.drawBuffers(re)}function Ce(L){return _!==L?(n.useProgram(L),_=L,!0):!1}const $e={[zi]:n.FUNC_ADD,[If]:n.FUNC_SUBTRACT,[Lf]:n.FUNC_REVERSE_SUBTRACT};$e[Uf]=n.MIN,$e[Nf]=n.MAX;const He={[Ff]:n.ZERO,[Of]:n.ONE,[Bf]:n.SRC_COLOR,[Aa]:n.SRC_ALPHA,[Wf]:n.SRC_ALPHA_SATURATE,[kf]:n.DST_COLOR,[Vf]:n.DST_ALPHA,[zf]:n.ONE_MINUS_SRC_COLOR,[wa]:n.ONE_MINUS_SRC_ALPHA,[Hf]:n.ONE_MINUS_DST_COLOR,[Gf]:n.ONE_MINUS_DST_ALPHA,[Xf]:n.CONSTANT_COLOR,[qf]:n.ONE_MINUS_CONSTANT_COLOR,[Yf]:n.CONSTANT_ALPHA,[$f]:n.ONE_MINUS_CONSTANT_ALPHA};function ke(L,oe,re,_e,ee,q,ye,Le,ht,st){if(L===ti){v===!0&&(ie(n.BLEND),v=!1);return}if(v===!1&&(ne(n.BLEND),v=!0),L!==Df){if(L!==m||st!==M){if((d!==zi||S!==zi)&&(n.blendEquation(n.FUNC_ADD),d=zi,S=zi),st)switch(L){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFunc(n.ONE,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Je("WebGLState: Invalid blending: ",L);break}else switch(L){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _c:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",L);break}y=null,E=null,b=null,A=null,w.set(0,0,0),g=0,m=L,M=st}return}ee=ee||oe,q=q||re,ye=ye||_e,(oe!==d||ee!==S)&&(n.blendEquationSeparate($e[oe],$e[ee]),d=oe,S=ee),(re!==y||_e!==E||q!==b||ye!==A)&&(n.blendFuncSeparate(He[re],He[_e],He[q],He[ye]),y=re,E=_e,b=q,A=ye),(Le.equals(w)===!1||ht!==g)&&(n.blendColor(Le.r,Le.g,Le.b,ht),w.copy(Le),g=ht),m=L,M=!1}function it(L,oe){L.side===Zn?ie(n.CULL_FACE):ne(n.CULL_FACE);let re=L.side===Qt;oe&&(re=!re),Ne(re),L.blending===Ts&&L.transparent===!1?ke(ti):ke(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const _e=L.stencilWrite;a.setTest(_e),_e&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ct(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(L){O!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),O=L)}function gt(L){L!==Rf?(ne(n.CULL_FACE),L!==C&&(L===pc?n.cullFace(n.BACK):L===Cf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),C=L}function P(L){L!==D&&(B&&n.lineWidth(L),D=L)}function ct(L,oe,re){L?(ne(n.POLYGON_OFFSET_FILL),(N!==oe||V!==re)&&(N=oe,V=re,o.getReversed()&&(oe=-oe),n.polygonOffset(oe,re))):ie(n.POLYGON_OFFSET_FILL)}function We(L){L?ne(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function Ze(L){L===void 0&&(L=n.TEXTURE0+U-1),Z!==L&&(n.activeTexture(L),Z=L)}function xe(L,oe,re){re===void 0&&(Z===null?re=n.TEXTURE0+U-1:re=Z);let _e=le[re];_e===void 0&&(_e={type:void 0,texture:void 0},le[re]=_e),(_e.type!==L||_e.texture!==oe)&&(Z!==re&&(n.activeTexture(re),Z=re),n.bindTexture(L,oe||$[L]),_e.type=L,_e.texture=oe)}function R(){const L=le[Z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function Y(){try{n.texSubImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function K(){try{n.texSubImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function se(){try{n.texStorage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function be(){try{n.texStorage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function Pe(){try{n.texImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function J(){try{n.texImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function te(L){Re.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Re.copy(L))}function ge(L){nt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),nt.copy(L))}function ve(L,oe){let re=l.get(oe);re===void 0&&(re=new WeakMap,l.set(oe,re));let _e=re.get(L);_e===void 0&&(_e=n.getUniformBlockIndex(oe,L.name),re.set(L,_e))}function he(L,oe){const _e=l.get(oe).get(L);c.get(oe)!==_e&&(n.uniformBlockBinding(oe,_e,L.__bindingPointIndex),c.set(oe,_e))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,le={},u={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,y=null,E=null,S=null,b=null,A=null,w=new tt(0,0,0),g=0,M=!1,O=null,C=null,D=null,N=null,V=null,Re.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:ie,bindFramebuffer:Te,drawBuffers:Se,useProgram:Ce,setBlending:ke,setMaterial:it,setFlipSided:Ne,setCullFace:gt,setLineWidth:P,setPolygonOffset:ct,setScissorTest:We,activeTexture:Ze,bindTexture:xe,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Pe,texImage3D:J,updateUBOMapping:ve,uniformBlockBinding:he,texStorage2D:se,texStorage3D:be,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:me,scissor:te,viewport:ge,reset:Be}}function D0(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,x){return p?new OffscreenCanvas(R,x):uo("canvas")}function v(R,x,F){let Y=1;const K=xe(R);if((K.width>F||K.height>F)&&(Y=F/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(Y*K.width),me=Math.floor(Y*K.height);u===void 0&&(u=_(X,me));const se=x?_(X,me):u;return se.width=X,se.height=me,se.getContext("2d").drawImage(R,0,0,X,me),Ue("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+me+")."),se}else return"data"in R&&Ue("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(R,x,F,Y,K=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=x;if(x===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),x===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),x===n.RGBA){const me=K?co:Ke.getTransfer(Y);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=me===rt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(R,x){let F;return R?x===null||x===zn||x===or?F=n.DEPTH24_STENCIL8:x===In?F=n.DEPTH32F_STENCIL8:x===rr&&(F=n.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zn||x===or?F=n.DEPTH_COMPONENT24:x===In?F=n.DEPTH_COMPONENT32F:x===rr&&(F=n.DEPTH_COMPONENT16),F}function b(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ft&&R.minFilter!==Wt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){const x=R.target;x.removeEventListener("dispose",A),g(x),x.isVideoTexture&&h.delete(x)}function w(R){const x=R.target;x.removeEventListener("dispose",w),O(x)}function g(R){const x=i.get(R);if(x.__webglInit===void 0)return;const F=R.source,Y=f.get(F);if(Y){const K=Y[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(R),Object.keys(Y).length===0&&f.delete(F)}i.remove(R)}function M(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const F=R.source,Y=f.get(F);delete Y[x.__cacheKey],o.memory.textures--}function O(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let K=0;K<x.__webglFramebuffer[Y].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[Y][K]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=R.textures;for(let Y=0,K=F.length;Y<K;Y++){const X=i.get(F[Y]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(R)}let C=0;function D(){C=0}function N(){const R=C;return R>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function V(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function U(R,x){const F=i.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const Y=R.image;if(Y===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,R,x);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function B(R,x){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){$(F,R,x);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function I(R,x){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){$(F,R,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function j(R,x){const F=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){ne(F,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const Z={[Na]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[Fa]:n.MIRRORED_REPEAT},le={[Ft]:n.NEAREST,[jf]:n.NEAREST_MIPMAP_NEAREST,[vr]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[Lo]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},ce={[ed]:n.NEVER,[rd]:n.ALWAYS,[td]:n.LESS,[Nl]:n.LEQUAL,[nd]:n.EQUAL,[Fl]:n.GEQUAL,[id]:n.GREATER,[sd]:n.NOTEQUAL};function Q(R,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Wt||x.magFilter===Lo||x.magFilter===vr||x.magFilter===ki||x.minFilter===Wt||x.minFilter===Lo||x.minFilter===vr||x.minFilter===ki)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Z[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,le[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,le[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ft||x.minFilter!==vr&&x.minFilter!==ki||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Re(R,x){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));const Y=x.source;let K=f.get(Y);K===void 0&&(K={},f.set(Y,K));const X=V(x);if(X!==R.__cacheKey){K[X]===void 0&&(K[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[X].usedTimes++;const me=K[R.__cacheKey];me!==void 0&&(K[R.__cacheKey].usedTimes--,me.usedTimes===0&&M(x)),R.__cacheKey=X,R.__webglTexture=K[X].texture}return F}function nt(R,x,F){return Math.floor(Math.floor(R/F)/x)}function Ye(R,x,F,Y){const X=R.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,Y,x.data);else{X.sort((J,te)=>J.start-te.start);let me=0;for(let J=1;J<X.length;J++){const te=X[me],ge=X[J],ve=te.start+te.count,he=nt(ge.start,x.width,4),Be=nt(te.start,x.width,4);ge.start<=ve+1&&he===Be&&nt(ge.start+ge.count-1,x.width,4)===he?te.count=Math.max(te.count,ge.start+ge.count-te.start):(++me,X[me]=ge)}X.length=me+1;const se=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let J=0,te=X.length;J<te;J++){const ge=X[J],ve=Math.floor(ge.start/4),he=Math.ceil(ge.count/4),Be=ve%x.width,L=Math.floor(ve/x.width),oe=he,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Be,L,oe,re,F,Y,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function $(R,x,F){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const K=Re(R,x),X=x.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+F);const me=i.get(X);if(X.version!==me.__version||K===!0){t.activeTexture(n.TEXTURE0+F);const se=Ke.getPrimaries(Ke.workingColorSpace),be=x.colorSpace===_i?null:Ke.getPrimaries(x.colorSpace),Pe=x.colorSpace===_i||se===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let J=v(x.image,!1,s.maxTextureSize);J=Ze(x,J);const te=r.convert(x.format,x.colorSpace),ge=r.convert(x.type);let ve=E(x.internalFormat,te,ge,x.colorSpace,x.isVideoTexture);Q(Y,x);let he;const Be=x.mipmaps,L=x.isVideoTexture!==!0,oe=me.__version===void 0||K===!0,re=X.dataReady,_e=b(x,J);if(x.isDepthTexture)ve=S(x.format===Hi,x.type),oe&&(L?t.texStorage2D(n.TEXTURE_2D,1,ve,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,ve,J.width,J.height,0,te,ge,null));else if(x.isDataTexture)if(Be.length>0){L&&oe&&t.texStorage2D(n.TEXTURE_2D,_e,ve,Be[0].width,Be[0].height);for(let ee=0,q=Be.length;ee<q;ee++)he=Be[ee],L?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,te,ge,he.data):t.texImage2D(n.TEXTURE_2D,ee,ve,he.width,he.height,0,te,ge,he.data);x.generateMipmaps=!1}else L?(oe&&t.texStorage2D(n.TEXTURE_2D,_e,ve,J.width,J.height),re&&Ye(x,J,te,ge)):t.texImage2D(n.TEXTURE_2D,0,ve,J.width,J.height,0,te,ge,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,Be[0].width,Be[0].height,J.depth);for(let ee=0,q=Be.length;ee<q;ee++)if(he=Be[ee],x.format!==En)if(te!==null)if(L){if(re)if(x.layerUpdates.size>0){const ye=Gc(he.width,he.height,x.format,x.type);for(const Le of x.layerUpdates){const ht=he.data.subarray(Le*ye/he.data.BYTES_PER_ELEMENT,(Le+1)*ye/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Le,he.width,he.height,1,te,ht)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,te,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,ve,he.width,he.height,J.depth,0,he.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,te,ge,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,ve,he.width,he.height,J.depth,0,te,ge,he.data)}else{L&&oe&&t.texStorage2D(n.TEXTURE_2D,_e,ve,Be[0].width,Be[0].height);for(let ee=0,q=Be.length;ee<q;ee++)he=Be[ee],x.format!==En?te!==null?L?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,te,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,ve,he.width,he.height,0,he.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,te,ge,he.data):t.texImage2D(n.TEXTURE_2D,ee,ve,he.width,he.height,0,te,ge,he.data)}else if(x.isDataArrayTexture)if(L){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,J.width,J.height,J.depth),re)if(x.layerUpdates.size>0){const ee=Gc(J.width,J.height,x.format,x.type);for(const q of x.layerUpdates){const ye=J.data.subarray(q*ee/J.data.BYTES_PER_ELEMENT,(q+1)*ee/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,te,ge,ye)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,te,ge,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,J.width,J.height,J.depth,0,te,ge,J.data);else if(x.isData3DTexture)L?(oe&&t.texStorage3D(n.TEXTURE_3D,_e,ve,J.width,J.height,J.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,te,ge,J.data)):t.texImage3D(n.TEXTURE_3D,0,ve,J.width,J.height,J.depth,0,te,ge,J.data);else if(x.isFramebufferTexture){if(oe)if(L)t.texStorage2D(n.TEXTURE_2D,_e,ve,J.width,J.height);else{let ee=J.width,q=J.height;for(let ye=0;ye<_e;ye++)t.texImage2D(n.TEXTURE_2D,ye,ve,ee,q,0,te,ge,null),ee>>=1,q>>=1}}else if(Be.length>0){if(L&&oe){const ee=xe(Be[0]);t.texStorage2D(n.TEXTURE_2D,_e,ve,ee.width,ee.height)}for(let ee=0,q=Be.length;ee<q;ee++)he=Be[ee],L?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,te,ge,he):t.texImage2D(n.TEXTURE_2D,ee,ve,te,ge,he);x.generateMipmaps=!1}else if(L){if(oe){const ee=xe(J);t.texStorage2D(n.TEXTURE_2D,_e,ve,ee.width,ee.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,ge,J)}else t.texImage2D(n.TEXTURE_2D,0,ve,te,ge,J);m(x)&&d(Y),me.__version=X.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ne(R,x,F){if(x.image.length!==6)return;const Y=Re(R,x),K=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);const X=i.get(K);if(K.version!==X.__version||Y===!0){t.activeTexture(n.TEXTURE0+F);const me=Ke.getPrimaries(Ke.workingColorSpace),se=x.colorSpace===_i?null:Ke.getPrimaries(x.colorSpace),be=x.colorSpace===_i||me===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,te=[];for(let q=0;q<6;q++)!Pe&&!J?te[q]=v(x.image[q],!0,s.maxCubemapSize):te[q]=J?x.image[q].image:x.image[q],te[q]=Ze(x,te[q]);const ge=te[0],ve=r.convert(x.format,x.colorSpace),he=r.convert(x.type),Be=E(x.internalFormat,ve,he,x.colorSpace),L=x.isVideoTexture!==!0,oe=X.__version===void 0||Y===!0,re=K.dataReady;let _e=b(x,ge);Q(n.TEXTURE_CUBE_MAP,x);let ee;if(Pe){L&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Be,ge.width,ge.height);for(let q=0;q<6;q++){ee=te[q].mipmaps;for(let ye=0;ye<ee.length;ye++){const Le=ee[ye];x.format!==En?ve!==null?L?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,0,0,Le.width,Le.height,ve,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,Be,Le.width,Le.height,0,Le.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,0,0,Le.width,Le.height,ve,he,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye,Be,Le.width,Le.height,0,ve,he,Le.data)}}}else{if(ee=x.mipmaps,L&&oe){ee.length>0&&_e++;const q=xe(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Be,q.width,q.height)}for(let q=0;q<6;q++)if(J){L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,te[q].width,te[q].height,ve,he,te[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Be,te[q].width,te[q].height,0,ve,he,te[q].data);for(let ye=0;ye<ee.length;ye++){const ht=ee[ye].image[q].image;L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,0,0,ht.width,ht.height,ve,he,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,Be,ht.width,ht.height,0,ve,he,ht.data)}}else{L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ve,he,te[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Be,ve,he,te[q]);for(let ye=0;ye<ee.length;ye++){const Le=ee[ye];L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,0,0,ve,he,Le.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ye+1,Be,ve,he,Le.image[q])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),X.__version=K.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ie(R,x,F,Y,K,X){const me=r.convert(F.format,F.colorSpace),se=r.convert(F.type),be=E(F.internalFormat,me,se,F.colorSpace),Pe=i.get(x),J=i.get(F);if(J.__renderTarget=x,!Pe.__hasExternalTextures){const te=Math.max(1,x.width>>X),ge=Math.max(1,x.height>>X);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,X,be,te,ge,x.depth,0,me,se,null):t.texImage2D(K,X,be,te,ge,0,me,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ct(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,K,J.__webglTexture,0,P(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,K,J.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(R,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const Y=x.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,X=S(x.stencilBuffer,K),me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ct(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),X,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,R)}else{const Y=x.textures;for(let K=0;K<Y.length;K++){const X=Y[K],me=r.convert(X.format,X.colorSpace),se=r.convert(X.type),be=E(X.internalFormat,me,se,X.colorSpace);ct(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),be,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(R,x,F){const Y=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Q(n.TEXTURE_CUBE_MAP,x.depthTexture);const Pe=r.convert(x.depthTexture.format),J=r.convert(x.depthTexture.type);let te;x.depthTexture.format===ri?te=n.DEPTH_COMPONENT24:x.depthTexture.format===Hi&&(te=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,te,x.width,x.height,0,Pe,J,null)}}else U(x.depthTexture,0);const X=K.__webglTexture,me=P(x),se=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,be=x.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===ri)ct(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,se,X,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,be,se,X,0);else if(x.depthTexture.format===Hi)ct(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,se,X,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,be,se,X,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const x=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=Y}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let Y=0;Y<6;Y++)Se(x.__webglFramebuffer[Y],R,Y);else{const Y=R.texture.mipmaps;Y&&Y.length>0?Se(x.__webglFramebuffer[0],R,0):Se(x.__webglFramebuffer,R,0)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),Te(x.__webglDepthbuffer[Y],R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Te(x.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(R,x,F){const Y=i.get(R);x!==void 0&&ie(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ce(R)}function He(R){const x=R.texture,F=i.get(R),Y=i.get(x);R.addEventListener("dispose",w);const K=R.textures,X=R.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let be=0;be<x.mipmaps.length;be++)F.__webglFramebuffer[se][be]=n.createFramebuffer()}else F.__webglFramebuffer[se]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)F.__webglFramebuffer[se]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(me)for(let se=0,be=K.length;se<be;se++){const Pe=i.get(K[se]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ct(R)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<K.length;se++){const be=K[se];F.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[se]);const Pe=r.convert(be.format,be.colorSpace),J=r.convert(be.type),te=E(be.internalFormat,Pe,J,be.colorSpace,R.isXRRenderTarget===!0),ge=P(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,F.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Q(n.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)ie(F.__webglFramebuffer[se][be],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be);else ie(F.__webglFramebuffer[se],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let se=0,be=K.length;se<be;se++){const Pe=K[se],J=i.get(Pe);let te=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,J.__webglTexture),Q(te,Pe),ie(F.__webglFramebuffer,R,Pe,n.COLOR_ATTACHMENT0+se,te,0),m(Pe)&&d(te)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),Q(se,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)ie(F.__webglFramebuffer[be],R,x,n.COLOR_ATTACHMENT0,se,be);else ie(F.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,se,0);m(x)&&d(se),t.unbindTexture()}R.depthBuffer&&Ce(R)}function ke(R){const x=R.textures;for(let F=0,Y=x.length;F<Y;F++){const K=x[F];if(m(K)){const X=y(R),me=i.get(K).__webglTexture;t.bindTexture(X,me),d(X),t.unbindTexture()}}}const it=[],Ne=[];function gt(R){if(R.samples>0){if(ct(R)===!1){const x=R.textures,F=R.width,Y=R.height;let K=n.COLOR_BUFFER_BIT;const X=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(R),se=x.length>1;if(se)for(let Pe=0;Pe<x.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Pe=0;Pe<x.length;Pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]);const J=i.get(x[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,K,n.NEAREST),c===!0&&(it.length=0,Ne.length=0,it.push(n.COLOR_ATTACHMENT0+Pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(it.push(X),Ne.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Pe=0;Pe<x.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]);const J=i.get(x[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function P(R){return Math.min(s.maxSamples,R.samples)}function ct(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function We(R){const x=o.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Ze(R,x){const F=R.colorSpace,Y=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Ds&&F!==_i&&(Ke.getTransfer(F)===rt?(Y!==En||K!==an)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",F)),x}function xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=U,this.setTexture2DArray=B,this.setTexture3D=I,this.setTextureCube=j,this.rebindTextures=$e,this.setupRenderTarget=He,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function I0(n,e){function t(i,s=_i){let r;const o=Ke.getTransfer(s);if(i===an)return n.UNSIGNED_BYTE;if(i===Cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===oh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ih)return n.BYTE;if(i===sh)return n.SHORT;if(i===rr)return n.UNSIGNED_SHORT;if(i===Rl)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===si)return n.HALF_FLOAT;if(i===ah)return n.ALPHA;if(i===lh)return n.RGB;if(i===En)return n.RGBA;if(i===ri)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===ch)return n.RED;if(i===Dl)return n.RED_INTEGER;if(i===Ps)return n.RG;if(i===Il)return n.RG_INTEGER;if(i===Ll)return n.RGBA_INTEGER;if(i===Zr||i===Kr||i===jr||i===Jr)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oa||i===Ba||i===za||i===Va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ga||i===ka||i===Ha||i===Wa||i===Xa||i===qa||i===Ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ga||i===ka)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ha)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wa)return r.COMPRESSED_R11_EAC;if(i===Xa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qa)return r.COMPRESSED_RG11_EAC;if(i===Ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$a||i===Za||i===Ka||i===ja||i===Ja||i===Qa||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===ol||i===al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$a)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Za)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ja)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===el)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===il)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===al)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===cl||i===ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ll)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hl||i===fl||i===dl||i===pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===hl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const L0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U0=`
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

}`;class N0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new gh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gn({vertexShader:L0,fragmentShader:U0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new vo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F0 extends Ls{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new N0,d={},y=t.getContextAttributes();let E=null,S=null;const b=[],A=[],w=new Oe;let g=null;const M=new hn;M.viewport=new Mt;const O=new hn;O.viewport=new Mt;const C=[M,O],D=new $d;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=b[$];return ne===void 0&&(ne=new Go,b[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=b[$];return ne===void 0&&(ne=new Go,b[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=b[$];return ne===void 0&&(ne=new Go,b[$]=ne),ne.getHandSpace()};function U($){const ne=A.indexOf($.inputSource);if(ne===-1)return;const ie=b[ne];ie!==void 0&&(ie.update($.inputSource,$.frame,l||o),ie.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",I);for(let $=0;$<b.length;$++){const ne=A[$];ne!==null&&(A[$]=null,b[$].disconnect(ne))}N=null,V=null,m.reset();for(const $ in d)delete d[$];e.setRenderTarget(E),p=null,f=null,u=null,s=null,S=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Te=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=y.stencil?Hi:ri,Te=y.stencil?or:zn);const Ce={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ce),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Fn(f.textureWidth,f.textureHeight,{format:En,type:an,depthTexture:new lr(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Fn(p.framebufferWidth,p.framebufferHeight,{format:En,type:an,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I($){for(let ne=0;ne<$.removed.length;ne++){const ie=$.removed[ne],Te=A.indexOf(ie);Te>=0&&(A[Te]=null,b[Te].disconnect(ie))}for(let ne=0;ne<$.added.length;ne++){const ie=$.added[ne];let Te=A.indexOf(ie);if(Te===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=A.length){A.push(ie),Te=Ce;break}else if(A[Ce]===null){A[Ce]=ie,Te=Ce;break}if(Te===-1)break}const Se=b[Te];Se&&Se.connect(ie)}}const j=new G,Z=new G;function le($,ne,ie){j.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(ie.matrixWorld);const Te=j.distanceTo(Z),Se=ne.projectionMatrix.elements,Ce=ie.projectionMatrix.elements,$e=Se[14]/(Se[10]-1),He=Se[14]/(Se[10]+1),ke=(Se[9]+1)/Se[5],it=(Se[9]-1)/Se[5],Ne=(Se[8]-1)/Se[0],gt=(Ce[8]+1)/Ce[0],P=$e*Ne,ct=$e*gt,We=Te/(-Ne+gt),Ze=We*-Ne;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ze),$.translateZ(We),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const xe=$e+We,R=He+We,x=P-Ze,F=ct+(Te-Ze),Y=ke*He/R*xe,K=it*He/R*xe;$.projectionMatrix.makePerspective(x,F,Y,K,xe,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ne=$.near,ie=$.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),D.near=O.near=M.near=ne,D.far=O.far=M.far=ie,(N!==D.near||V!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,V=D.far),D.layers.mask=$.layers.mask|6,M.layers.mask=D.layers.mask&-5,O.layers.mask=D.layers.mask&-3;const Te=$.parent,Se=D.cameras;ce(D,Te);for(let Ce=0;Ce<Se.length;Ce++)ce(Se[Ce],Te);Se.length===2?le(D,M,O):D.projectionMatrix.copy(M.projectionMatrix),Q($,D,Te)};function Q($,ne,ie){ie===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(ie.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ml*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function($){return d[$]};let Re=null;function nt($,ne){if(h=ne.getViewerPose(l||o),_=ne,h!==null){const ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Te=!1;ie.length!==D.cameras.length&&(D.cameras.length=0,Te=!0);for(let He=0;He<ie.length;He++){const ke=ie[He];let it=null;if(p!==null)it=p.getViewport(ke);else{const gt=u.getViewSubImage(f,ke);it=gt.viewport,He===0&&(e.setRenderTargetTextures(S,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(S))}let Ne=C[He];Ne===void 0&&(Ne=new hn,Ne.layers.enable(He),Ne.viewport=new Mt,C[He]=Ne),Ne.matrix.fromArray(ke.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ke.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(it.x,it.y,it.width,it.height),He===0&&(D.matrix.copy(Ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Te===!0&&D.cameras.push(Ne)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const He=u.getDepthInformation(ie[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let He=0;He<ie.length;He++){const ke=ie[He].camera;if(ke){let it=d[ke];it||(it=new gh,d[ke]=it);const Ne=u.getCameraImage(ke);it.sourceTexture=Ne}}}}for(let ie=0;ie<b.length;ie++){const Te=A[ie],Se=b[ie];Te!==null&&Se!==void 0&&Se.update(Te,ne,l||o)}Re&&Re($,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Ye=new Mh;Ye.setAnimationLoop(nt),this.setAnimationLoop=function($){Re=$},this.dispose=function(){}}}const Li=new Vn,O0=new Et;function B0(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,xh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,E,S){d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Qt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Qt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d),E=y.envMap,S=y.envMapRotation;E&&(m.envMap.value=E,Li.copy(S),Li.x*=-1,Li.y*=-1,Li.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(Li)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function z0(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){const S=E.program;i.uniformBlockBinding(y,S)}function l(y,E){let S=s[y.id];S===void 0&&(_(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",m));const b=E.program;i.updateUBOMapping(y,b);const A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){const E=u();y.__bindingPointIndex=E;const S=n.createBuffer(),b=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const E=s[y.id],S=y.uniforms,b=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,w=S.length;A<w;A++){const g=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,O=g.length;M<O;M++){const C=g[M];if(p(C,A,M,b)===!0){const D=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let U=0;U<N.length;U++){const B=N[U],I=v(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,D+V,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,V),V+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,E,S,b){const A=y.value,w=E+"_"+S;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const g=b[w];if(typeof A=="number"||typeof A=="boolean"){if(g!==A)return b[w]=A,!0}else if(g.equals(A)===!1)return g.copy(A),!0}return!1}function _(y){const E=y.uniforms;let S=0;const b=16;for(let w=0,g=E.length;w<g;w++){const M=Array.isArray(E[w])?E[w]:[E[w]];for(let O=0,C=M.length;O<C;O++){const D=M[O],N=Array.isArray(D.value)?D.value:[D.value];for(let V=0,U=N.length;V<U;V++){const B=N[V],I=v(B),j=S%b,Z=j%I.boundary,le=j+Z;S+=Z,le!==0&&b-le<I.storage&&(S+=b-le),D.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=I.storage}}}const A=S%b;return A>0&&(S+=b-A),y.__size=S,y.__cache={},this}function v(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ue("WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}const V0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function G0(){return wn===null&&(wn=new Dd(V0,16,16,Ps,si),wn.name="DFG_LUT",wn.minFilter=Wt,wn.magFilter=Wt,wn.wrapS=Kn,wn.wrapT=Kn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class k0{constructor(e={}){const{canvas:t=ad(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=an}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const v=p,m=new Set([Ll,Il,Dl]),d=new Set([an,zn,rr,or,Cl,Pl]),y=new Uint32Array(4),E=new Int32Array(4);let S=null,b=null;const A=[],w=[];let g=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let O=!1;this._outputColorSpace=un;let C=0,D=0,N=null,V=-1,U=null;const B=new Mt,I=new Mt;let j=null;const Z=new tt(0);let le=0,ce=t.width,Q=t.height,Re=1,nt=null,Ye=null;const $=new Mt(0,0,ce,Q),ne=new Mt(0,0,ce,Q);let ie=!1;const Te=new Vl;let Se=!1,Ce=!1;const $e=new Et,He=new G,ke=new Mt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function gt(){return N===null?Re:1}let P=i;function ct(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ht,!1),P===null){const z="webgl2";if(P=ct(z,T),P===null)throw ct(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Je("WebGLRenderer: "+T.message),T}let We,Ze,xe,R,x,F,Y,K,X,me,se,be,Pe,J,te,ge,ve,he,Be,L,oe,re,_e;function ee(){We=new k_(P),We.init(),oe=new I0(P,We),Ze=new U_(P,We,e,oe),xe=new P0(P,We),Ze.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),R=new X_(P),x=new _0,F=new D0(P,We,xe,x,Ze,oe,R),Y=new G_(M),K=new Kd(P),re=new I_(P,K),X=new H_(P,K,R,re),me=new Y_(P,X,K,re,R),he=new q_(P,Ze,F),te=new N_(x),se=new m0(M,Y,We,Ze,re,te),be=new B0(M,x),Pe=new x0,J=new T0(We),ve=new D_(M,Y,xe,me,_,c),ge=new C0(M,me,Ze),_e=new z0(P,R,Ze,xe),Be=new L_(P,We,R),L=new W_(P,We,R),R.programs=se.programs,M.capabilities=Ze,M.extensions=We,M.properties=x,M.renderLists=Pe,M.shadowMap=ge,M.state=xe,M.info=R}ee(),v!==an&&(g=new Z_(v,t.width,t.height,s,r));const q=new F0(M,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=We.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=We.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(T){T!==void 0&&(Re=T,this.setSize(ce,Q,!1))},this.getSize=function(T){return T.set(ce,Q)},this.setSize=function(T,z,W=!0){if(q.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=T,Q=z,t.width=Math.floor(T*Re),t.height=Math.floor(z*Re),W===!0&&(t.style.width=T+"px",t.style.height=z+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(ce*Re,Q*Re).floor()},this.setDrawingBufferSize=function(T,z,W){ce=T,Q=z,Re=W,t.width=Math.floor(T*W),t.height=Math.floor(z*W),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(v===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(B)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,z,W,H){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,z,W,H),xe.viewport(B.copy($).multiplyScalar(Re).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,z,W,H){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,z,W,H),xe.scissor(I.copy(ne).multiplyScalar(Re).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){xe.setScissorTest(ie=T)},this.setOpaqueSort=function(T){nt=T},this.setTransparentSort=function(T){Ye=T},this.getClearColor=function(T){return T.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,W=!0){let H=0;if(T){let k=!1;if(N!==null){const fe=N.texture.format;k=m.has(fe)}if(k){const fe=N.texture.type,pe=d.has(fe),de=ve.getClearColor(),Me=ve.getClearAlpha(),Ae=de.r,Fe=de.g,Ge=de.b;pe?(y[0]=Ae,y[1]=Fe,y[2]=Ge,y[3]=Me,P.clearBufferuiv(P.COLOR,0,y)):(E[0]=Ae,E[1]=Fe,E[2]=Ge,E[3]=Me,P.clearBufferiv(P.COLOR,0,E))}else H|=P.COLOR_BUFFER_BIT}z&&(H|=P.DEPTH_BUFFER_BIT),W&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),ve.dispose(),Pe.dispose(),J.dispose(),x.dispose(),Y.dispose(),me.dispose(),re.dispose(),_e.dispose(),se.dispose(),q.dispose(),q.removeEventListener("sessionstart",$l),q.removeEventListener("sessionend",Zl),Ai.stop()};function ye(T){T.preventDefault(),Sc("WebGLRenderer: Context Lost."),O=!0}function Le(){Sc("WebGLRenderer: Context Restored."),O=!1;const T=R.autoReset,z=ge.enabled,W=ge.autoUpdate,H=ge.needsUpdate,k=ge.type;ee(),R.autoReset=T,ge.enabled=z,ge.autoUpdate=W,ge.needsUpdate=H,ge.type=k}function ht(T){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function st(T){const z=T.target;z.removeEventListener("dispose",st),kn(z)}function kn(T){Hn(T),x.remove(T)}function Hn(T){const z=x.get(T).programs;z!==void 0&&(z.forEach(function(W){se.releaseProgram(W)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,W,H,k,fe){z===null&&(z=it);const pe=k.isMesh&&k.matrixWorld.determinant()<0,de=Vh(T,z,W,H,k);xe.setMaterial(H,pe);let Me=W.index,Ae=1;if(H.wireframe===!0){if(Me=X.getWireframeAttribute(W),Me===void 0)return;Ae=2}const Fe=W.drawRange,Ge=W.attributes.position;let we=Fe.start*Ae,at=(Fe.start+Fe.count)*Ae;fe!==null&&(we=Math.max(we,fe.start*Ae),at=Math.min(at,(fe.start+fe.count)*Ae)),Me!==null?(we=Math.max(we,0),at=Math.min(at,Me.count)):Ge!=null&&(we=Math.max(we,0),at=Math.min(at,Ge.count));const Tt=at-we;if(Tt<0||Tt===1/0)return;re.setup(k,H,de,W,Me);let vt,lt=Be;if(Me!==null&&(vt=K.get(Me),lt=L,lt.setIndex(vt)),k.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*gt()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(k.isLine){let Ot=H.linewidth;Ot===void 0&&(Ot=1),xe.setLineWidth(Ot*gt()),k.isLineSegments?lt.setMode(P.LINES):k.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else k.isPoints?lt.setMode(P.POINTS):k.isSprite&&lt.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ho("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ot=k._multiDrawStarts,Ee=k._multiDrawCounts,en=k._multiDrawCount,je=Me?K.get(Me).bytesPerElement:1,mn=x.get(H).currentProgram.getUniforms();for(let bn=0;bn<en;bn++)mn.setValue(P,"_gl_DrawID",bn),lt.render(Ot[bn]/je,Ee[bn])}else if(k.isInstancedMesh)lt.renderInstances(we,Tt,k.count);else if(W.isInstancedBufferGeometry){const Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,Ot);lt.renderInstances(we,Tt,Ee)}else lt.render(we,Tt)};function Yl(T,z,W){T.transparent===!0&&T.side===Zn&&T.forceSinglePass===!1?(T.side=Qt,T.needsUpdate=!0,mr(T,z,W),T.side=Ei,T.needsUpdate=!0,mr(T,z,W),T.side=Zn):mr(T,z,W)}this.compile=function(T,z,W=null){W===null&&(W=T),b=J.get(W),b.init(z),w.push(b),W.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),T!==W&&T.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights();const H=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const fe=k.material;if(fe)if(Array.isArray(fe))for(let pe=0;pe<fe.length;pe++){const de=fe[pe];Yl(de,W,k),H.add(de)}else Yl(fe,W,k),H.add(fe)}),b=w.pop(),H},this.compileAsync=function(T,z,W=null){const H=this.compile(T,z,W);return new Promise(k=>{function fe(){if(H.forEach(function(pe){x.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){k(T);return}setTimeout(fe,10)}We.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Eo=null;function zh(T){Eo&&Eo(T)}function $l(){Ai.stop()}function Zl(){Ai.start()}const Ai=new Mh;Ai.setAnimationLoop(zh),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(T){Eo=T,q.setAnimationLoop(T),T===null?Ai.stop():Ai.start()},q.addEventListener("sessionstart",$l),q.addEventListener("sessionend",Zl),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const W=q.enabled===!0&&q.isPresenting===!0,H=g!==null&&(N===null||W)&&g.begin(M,N);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(z),z=q.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,z,N),b=J.get(T,w.length),b.init(z),w.push(b),$e.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Te.setFromProjectionMatrix($e,Ln,z.reversedDepth),Ce=this.localClippingEnabled,Se=te.init(this.clippingPlanes,Ce),S=Pe.get(T,A.length),S.init(),A.push(S),q.enabled===!0&&q.isPresenting===!0){const pe=M.xr.getDepthSensingMesh();pe!==null&&To(pe,z,-1/0,M.sortObjects)}To(T,z,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(nt,Ye),Ne=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ne&&ve.addToRenderList(S,T),this.info.render.frame++,Se===!0&&te.beginShadows();const k=b.state.shadowsArray;if(ge.render(k,T,z),Se===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&g.hasRenderPass())===!1){const pe=S.opaque,de=S.transmissive;if(b.setupLights(),z.isArrayCamera){const Me=z.cameras;if(de.length>0)for(let Ae=0,Fe=Me.length;Ae<Fe;Ae++){const Ge=Me[Ae];jl(pe,de,T,Ge)}Ne&&ve.render(T);for(let Ae=0,Fe=Me.length;Ae<Fe;Ae++){const Ge=Me[Ae];Kl(S,T,Ge,Ge.viewport)}}else de.length>0&&jl(pe,de,T,z),Ne&&ve.render(T),Kl(S,T,z)}N!==null&&D===0&&(F.updateMultisampleRenderTarget(N),F.updateRenderTargetMipmap(N)),H&&g.end(M),T.isScene===!0&&T.onAfterRender(M,T,z),re.resetDefaultState(),V=-1,U=null,w.pop(),w.length>0?(b=w[w.length-1],Se===!0&&te.setGlobalState(M.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function To(T,z,W,H){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Te.intersectsSprite(T)){H&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4($e);const pe=me.update(T),de=T.material;de.visible&&S.push(T,pe,de,W,ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Te.intersectsObject(T))){const pe=me.update(T),de=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ke.copy(pe.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4($e)),Array.isArray(de)){const Me=pe.groups;for(let Ae=0,Fe=Me.length;Ae<Fe;Ae++){const Ge=Me[Ae],we=de[Ge.materialIndex];we&&we.visible&&S.push(T,pe,we,W,ke.z,Ge)}}else de.visible&&S.push(T,pe,de,W,ke.z,null)}}const fe=T.children;for(let pe=0,de=fe.length;pe<de;pe++)To(fe[pe],z,W,H)}function Kl(T,z,W,H){const{opaque:k,transmissive:fe,transparent:pe}=T;b.setupLightsView(W),Se===!0&&te.setGlobalState(M.clippingPlanes,W),H&&xe.viewport(B.copy(H)),k.length>0&&pr(k,z,W),fe.length>0&&pr(fe,z,W),pe.length>0&&pr(pe,z,W),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function jl(T,z,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const we=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Fn(1,1,{generateMipmaps:!0,type:we?si:an,minFilter:ki,samples:Math.max(4,Ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const fe=b.state.transmissionRenderTarget[H.id],pe=H.viewport||B;fe.setSize(pe.z*M.transmissionResolutionScale,pe.w*M.transmissionResolutionScale);const de=M.getRenderTarget(),Me=M.getActiveCubeFace(),Ae=M.getActiveMipmapLevel();M.setRenderTarget(fe),M.getClearColor(Z),le=M.getClearAlpha(),le<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&ve.render(W);const Fe=M.toneMapping;M.toneMapping=Nn;const Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),Se===!0&&te.setGlobalState(M.clippingPlanes,H),pr(T,W,H),F.updateMultisampleRenderTarget(fe),F.updateRenderTargetMipmap(fe),We.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let at=0,Tt=z.length;at<Tt;at++){const vt=z[at],{object:lt,geometry:Ot,material:Ee,group:en}=vt;if(Ee.side===Zn&&lt.layers.test(H.layers)){const je=Ee.side;Ee.side=Qt,Ee.needsUpdate=!0,Jl(lt,W,H,Ot,Ee,en),Ee.side=je,Ee.needsUpdate=!0,we=!0}}we===!0&&(F.updateMultisampleRenderTarget(fe),F.updateRenderTargetMipmap(fe))}M.setRenderTarget(de,Me,Ae),M.setClearColor(Z,le),Ge!==void 0&&(H.viewport=Ge),M.toneMapping=Fe}function pr(T,z,W){const H=z.isScene===!0?z.overrideMaterial:null;for(let k=0,fe=T.length;k<fe;k++){const pe=T[k],{object:de,geometry:Me,group:Ae}=pe;let Fe=pe.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),de.layers.test(W.layers)&&Jl(de,z,W,Me,Fe,Ae)}}function Jl(T,z,W,H,k,fe){T.onBeforeRender(M,z,W,H,k,fe),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(M,z,W,H,T,fe),k.transparent===!0&&k.side===Zn&&k.forceSinglePass===!1?(k.side=Qt,k.needsUpdate=!0,M.renderBufferDirect(W,z,H,k,T,fe),k.side=Ei,k.needsUpdate=!0,M.renderBufferDirect(W,z,H,k,T,fe),k.side=Zn):M.renderBufferDirect(W,z,H,k,T,fe),T.onAfterRender(M,z,W,H,k,fe)}function mr(T,z,W){z.isScene!==!0&&(z=it);const H=x.get(T),k=b.state.lights,fe=b.state.shadowsArray,pe=k.state.version,de=se.getParameters(T,k.state,fe,z,W),Me=se.getProgramCacheKey(de);let Ae=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,H.fog=z.fog;const Fe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=Y.get(T.envMap||H.environment,Fe),H.envMapRotation=H.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",st),Ae=new Map,H.programs=Ae);let Ge=Ae.get(Me);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===pe)return ec(T,de),Ge}else de.uniforms=se.getUniforms(T),T.onBeforeCompile(de,M),Ge=se.acquireProgram(de,Me),Ae.set(Me,Ge),H.uniforms=de.uniforms;const we=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(we.clippingPlanes=te.uniform),ec(T,de),H.needsLights=kh(T),H.lightsStateVersion=pe,H.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotLightMatrix.value=k.state.spotLightMatrix,we.spotLightMap.value=k.state.spotLightMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function Ql(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Qr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ec(T,z){const W=x.get(T);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Vh(T,z,W,H,k){z.isScene!==!0&&(z=it),F.resetTextureUnits();const fe=z.fog,pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?z.environment:null,de=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ds,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ae=Y.get(H.envMap||pe,Me),Fe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color;let vt=Nn;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(vt=M.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ot=lt!==void 0?lt.length:0,Ee=x.get(H),en=b.state.lights;if(Se===!0&&(Ce===!0||T!==U)){const Pt=T===U&&H.id===V;te.setState(H,T,Pt)}let je=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==en.state.version||Ee.outputColorSpace!==de||k.isBatchedMesh&&Ee.batching===!1||!k.isBatchedMesh&&Ee.batching===!0||k.isBatchedMesh&&Ee.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ee.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ee.instancing===!1||!k.isInstancedMesh&&Ee.instancing===!0||k.isSkinnedMesh&&Ee.skinning===!1||!k.isSkinnedMesh&&Ee.skinning===!0||k.isInstancedMesh&&Ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ee.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ee.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ee.instancingMorph===!1&&k.morphTexture!==null||Ee.envMap!==Ae||H.fog===!0&&Ee.fog!==fe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==te.numPlanes||Ee.numIntersection!==te.numIntersection)||Ee.vertexAlphas!==Fe||Ee.vertexTangents!==Ge||Ee.morphTargets!==we||Ee.morphNormals!==at||Ee.morphColors!==Tt||Ee.toneMapping!==vt||Ee.morphTargetsCount!==Ot)&&(je=!0):(je=!0,Ee.__version=H.version);let mn=Ee.currentProgram;je===!0&&(mn=mr(H,z,k));let bn=!1,wi=!1,Ki=!1;const ut=mn.getUniforms(),Ut=Ee.uniforms;if(xe.useProgram(mn.program)&&(bn=!0,wi=!0,Ki=!0),H.id!==V&&(V=H.id,wi=!0),bn||U!==T){xe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",T.projectionMatrix),ut.setValue(P,"viewMatrix",T.matrixWorldInverse);const li=ut.map.cameraPosition;li!==void 0&&li.setValue(P,He.setFromMatrixPosition(T.matrixWorld)),Ze.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ut.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,wi=!0,Ki=!0)}if(Ee.needsLights&&(en.state.directionalShadowMap.length>0&&ut.setValue(P,"directionalShadowMap",en.state.directionalShadowMap,F),en.state.spotShadowMap.length>0&&ut.setValue(P,"spotShadowMap",en.state.spotShadowMap,F),en.state.pointShadowMap.length>0&&ut.setValue(P,"pointShadowMap",en.state.pointShadowMap,F)),k.isSkinnedMesh){ut.setOptional(P,k,"bindMatrix"),ut.setOptional(P,k,"bindMatrixInverse");const Pt=k.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ut.setValue(P,"boneTexture",Pt.boneTexture,F))}k.isBatchedMesh&&(ut.setOptional(P,k,"batchingTexture"),ut.setValue(P,"batchingTexture",k._matricesTexture,F),ut.setOptional(P,k,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",k._indirectTexture,F),ut.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",k._colorsTexture,F));const ai=W.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&he.update(k,W,mn),(wi||Ee.receiveShadow!==k.receiveShadow)&&(Ee.receiveShadow=k.receiveShadow,ut.setValue(P,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&z.environment!==null&&(Ut.envMapIntensity.value=z.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=G0()),wi&&(ut.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ee.needsLights&&Gh(Ut,Ki),fe&&H.fog===!0&&be.refreshFogUniforms(Ut,fe),be.refreshMaterialUniforms(Ut,H,Re,Q,b.state.transmissionRenderTarget[T.id]),Qr.upload(P,Ql(Ee),Ut,F)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qr.upload(P,Ql(Ee),Ut,F),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ut.setValue(P,"center",k.center),ut.setValue(P,"modelViewMatrix",k.modelViewMatrix),ut.setValue(P,"normalMatrix",k.normalMatrix),ut.setValue(P,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Pt=H.uniformsGroups;for(let li=0,ji=Pt.length;li<ji;li++){const tc=Pt[li];_e.update(tc,mn),_e.bind(tc,mn)}}return mn}function Gh(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function kh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,z,W){const H=x.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),x.get(T.texture).__webglTexture=z,x.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const W=x.get(T);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Hh=P.createFramebuffer();this.setRenderTarget=function(T,z=0,W=0){N=T,C=z,D=W;let H=null,k=!1,fe=!1;if(T){const de=x.get(T);if(de.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),B.copy(T.viewport),I.copy(T.scissor),j=T.scissorTest,xe.viewport(B),xe.scissor(I),xe.setScissorTest(j),V=-1;return}else if(de.__webglFramebuffer===void 0)F.setupRenderTarget(T);else if(de.__hasExternalTextures)F.rebindTextures(T,x.get(T.texture).__webglTexture,x.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Fe=T.depthTexture;if(de.__boundDepthTexture!==Fe){if(Fe!==null&&x.has(Fe)&&(T.width!==Fe.image.width||T.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(T)}}const Me=T.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(fe=!0);const Ae=x.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ae[z])?H=Ae[z][W]:H=Ae[z],k=!0):T.samples>0&&F.useMultisampledRTT(T)===!1?H=x.get(T).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[W]:H=Ae,B.copy(T.viewport),I.copy(T.scissor),j=T.scissorTest}else B.copy($).multiplyScalar(Re).floor(),I.copy(ne).multiplyScalar(Re).floor(),j=ie;if(W!==0&&(H=Hh),xe.bindFramebuffer(P.FRAMEBUFFER,H)&&xe.drawBuffers(T,H),xe.viewport(B),xe.scissor(I),xe.setScissorTest(j),k){const de=x.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,de.__webglTexture,W)}else if(fe){const de=z;for(let Me=0;Me<T.textures.length;Me++){const Ae=x.get(T.textures[Me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Me,Ae.__webglTexture,W,de)}}else if(T!==null&&W!==0){const de=x.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(T,z,W,H,k,fe,pe,de=0){if(!(T&&T.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){xe.bindFramebuffer(P.FRAMEBUFFER,Me);try{const Ae=T.textures[de],Fe=Ae.format,Ge=Ae.type;if(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!Ze.textureFormatReadable(Fe)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ge)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-H&&W>=0&&W<=T.height-k&&P.readPixels(z,W,H,k,oe.convert(Fe),oe.convert(Ge),fe)}finally{const Ae=N!==null?x.get(N).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,z,W,H,k,fe,pe,de=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me)if(z>=0&&z<=T.width-H&&W>=0&&W<=T.height-k){xe.bindFramebuffer(P.FRAMEBUFFER,Me);const Ae=T.textures[de],Fe=Ae.format,Ge=Ae.type;if(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!Ze.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),P.readPixels(z,W,H,k,oe.convert(Fe),oe.convert(Ge),0);const at=N!==null?x.get(N).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,at);const Tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ld(P,Tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer(we),P.deleteSync(Tt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,W=0){const H=Math.pow(2,-W),k=Math.floor(T.image.width*H),fe=Math.floor(T.image.height*H),pe=z!==null?z.x:0,de=z!==null?z.y:0;F.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,pe,de,k,fe),xe.unbindTexture()};const Wh=P.createFramebuffer(),Xh=P.createFramebuffer();this.copyTextureToTexture=function(T,z,W=null,H=null,k=0,fe=0){let pe,de,Me,Ae,Fe,Ge,we,at,Tt;const vt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(W!==null)pe=W.max.x-W.min.x,de=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Fe=W.min.y,Ge=W.isBox3?W.min.z:0;else{const Ut=Math.pow(2,-k);pe=Math.floor(vt.width*Ut),de=Math.floor(vt.height*Ut),T.isDataArrayTexture?Me=vt.depth:T.isData3DTexture?Me=Math.floor(vt.depth*Ut):Me=1,Ae=0,Fe=0,Ge=0}H!==null?(we=H.x,at=H.y,Tt=H.z):(we=0,at=0,Tt=0);const lt=oe.convert(z.format),Ot=oe.convert(z.type);let Ee;z.isData3DTexture?(F.setTexture3D(z,0),Ee=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(F.setTexture2DArray(z,0),Ee=P.TEXTURE_2D_ARRAY):(F.setTexture2D(z,0),Ee=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);const en=P.getParameter(P.UNPACK_ROW_LENGTH),je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mn=P.getParameter(P.UNPACK_SKIP_PIXELS),bn=P.getParameter(P.UNPACK_SKIP_ROWS),wi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,vt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge);const Ki=T.isDataArrayTexture||T.isData3DTexture,ut=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const Ut=x.get(T),ai=x.get(z),Pt=x.get(Ut.__renderTarget),li=x.get(ai.__renderTarget);xe.bindFramebuffer(P.READ_FRAMEBUFFER,Pt.__webglFramebuffer),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ji=0;ji<Me;ji++)Ki&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(T).__webglTexture,k,Ge+ji),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(z).__webglTexture,fe,Tt+ji)),P.blitFramebuffer(Ae,Fe,pe,de,we,at,pe,de,P.DEPTH_BUFFER_BIT,P.NEAREST);xe.bindFramebuffer(P.READ_FRAMEBUFFER,null),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||x.has(T)){const Ut=x.get(T),ai=x.get(z);xe.bindFramebuffer(P.READ_FRAMEBUFFER,Wh),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xh);for(let Pt=0;Pt<Me;Pt++)Ki?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,k,Ge+Pt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,k),ut?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ai.__webglTexture,fe,Tt+Pt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ai.__webglTexture,fe),k!==0?P.blitFramebuffer(Ae,Fe,pe,de,we,at,pe,de,P.COLOR_BUFFER_BIT,P.NEAREST):ut?P.copyTexSubImage3D(Ee,fe,we,at,Tt+Pt,Ae,Fe,pe,de):P.copyTexSubImage2D(Ee,fe,we,at,Ae,Fe,pe,de);xe.bindFramebuffer(P.READ_FRAMEBUFFER,null),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ut?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Ee,fe,we,at,Tt,pe,de,Me,lt,Ot,vt.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,fe,we,at,Tt,pe,de,Me,lt,vt.data):P.texSubImage3D(Ee,fe,we,at,Tt,pe,de,Me,lt,Ot,vt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,we,at,pe,de,lt,Ot,vt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,we,at,vt.width,vt.height,lt,vt.data):P.texSubImage2D(P.TEXTURE_2D,fe,we,at,pe,de,lt,Ot,vt);P.pixelStorei(P.UNPACK_ROW_LENGTH,en),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,bn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wi),fe===0&&z.generateMipmaps&&P.generateMipmap(Ee),xe.unbindTexture()},this.initRenderTarget=function(T){x.get(T).__webglFramebuffer===void 0&&F.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?F.setTextureCube(T,0):T.isData3DTexture?F.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?F.setTexture2DArray(T,0):F.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){C=0,D=0,N=null,xe.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}var H0=hr('<div style=position:absolute;user-select:none;touch-action:none><div style="position:absolute;transform:translate(-50%, -50%);border:5px solid rgba(255,255,255,0.5)"><div style=position:absolute;transform:translate(-50%,-50%);background-color:rgba(255,255,255,0.5)>');function W0(n){let e=ft(n.position),t=ft(typeof n.hitAreaSize=="function"?n.hitAreaSize():n.hitAreaSize),i=ft(n.outerRingSize),s=ft(n.knobSize),r=ft(),o=Gt(()=>{let c=r[0]();return c==null?new Oe:new Oe().copy(c).multiplyScalar(1/i[0]())});return{position:e,hitAreaSize:t,outerRingSize:i,knobSize:s,dragOffset:r,value:o,UI:()=>{let[c,l]=ft(!1),[h,u]=ft(),[f,p]=r,[_,v]=ft(),m,d=S=>{let b=_();if(b==null)return;m=S.pointerId,b.setPointerCapture(m);let A=b.getBoundingClientRect();u(new Oe(S.clientX-A.left,S.clientY-A.top)),p(new Oe)},y=S=>{let b=_();if(b==null)return;let A=h();if(A==null)return;b.setPointerCapture(S.pointerId);let w=b.getBoundingClientRect(),g=new Oe(S.clientX-w.left-A.x,S.clientY-w.top-A.y),M=g.length();M>.5*i[0]()&&g.multiplyScalar(.5*i[0]()/M),p(g)},E=S=>{_()!=null&&m!=null&&(u(void 0),p(void 0))};return(()=>{var S=H0(),b=S.firstChild,A=b.firstChild;S.$$contextmenu=g=>g.preventDefault(),S.$$pointerup=E,S.$$pointermove=y,S.$$pointerdown=d;var w=v;return typeof w=="function"||Array.isArray(w)?Al(()=>w,S):v=S,go(()=>({e:`${e[0]().x}px`,t:`${e[0]().y}px`,a:`${t[0]()}px`,o:`${t[0]()}px`,i:`${h()?.x??.5*t[0]()}px`,n:`${h()?.y??.5*t[0]()}px`,s:`${i[0]()}px`,h:`${i[0]()}px`,r:`${.5*i[0]()+2.5}px`,d:`${.5*i[0]()+(f()?.x??0)}px`,l:`${.5*i[0]()+(f()?.y??0)}px`,u:`${s[0]()}px`,c:`${s[0]()}px`,w:`${.5*s[0]()}px`}),({e:g,t:M,a:O,o:C,i:D,n:N,s:V,h:U,r:B,d:I,l:j,u:Z,c:le,w:ce},Q)=>{g!==Q.e&&At(S,"left",g),M!==Q.t&&At(S,"top",M),O!==Q.a&&At(S,"width",O),C!==Q.o&&At(S,"height",C),D!==Q.i&&At(b,"left",D),N!==Q.n&&At(b,"top",N),V!==Q.s&&At(b,"width",V),U!==Q.h&&At(b,"height",U),B!==Q.r&&At(b,"border-radius",B),I!==Q.d&&At(A,"left",I),j!==Q.l&&At(A,"top",j),Z!==Q.u&&At(A,"width",Z),le!==Q.c&&At(A,"height",le),ce!==Q.w&&At(A,"border-radius",ce)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0}),S})()}}}Yu(["pointerdown","pointermove","pointerup","contextmenu"]);var X0=hr("<div style=position:absolute;user-select:none;touch-action:none>");function q0(n){let e=ft(n.position),t=ft(n.size()),[i,s]=ft(!1);return{position:e,size:t,pressed:i,UI:()=>{let[o,a]=ft(),c,l=u=>{let f=o();f!=null&&(c=u.pointerId,f.setPointerCapture(c),s(!0))},h=u=>{o()!=null&&c!=null&&s(!1)};return(()=>{var u=X0();u.$$contextmenu=p=>p.preventDefault(),u.$$pointerup=h,u.$$pointerdown=l;var f=a;return typeof f=="function"||Array.isArray(f)?Al(()=>f,u):a=u,go(()=>({e:`${e[0]().x}px`,t:`${e[0]().y}px`,a:`${t[0]()}px`,o:`${t[0]()}px`,i:`${.5*t[0]()}px`,n:i()?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.5)"}),({e:p,t:_,a:v,o:m,i:d,n:y},E)=>{p!==E.e&&At(u,"left",p),_!==E.t&&At(u,"top",_),v!==E.a&&At(u,"width",v),m!==E.o&&At(u,"height",m),d!==E.i&&At(u,"border-radius",d),y!==E.n&&At(u,"background-color",y)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),u})()}}}Yu(["pointerdown","pointerup","contextmenu"]);class Y0 extends Error{constructor(e,t,i){super(e),this.is_operational=t,this.context=i,this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}var wh=(n=>(n.EID_MAX_INDEX_OVERFLOW="EID_MAX_INDEX_OVERFLOW",n.EID_MAX_GEN_OVERFLOW="EID_MAX_GEN_OVERFLOW",n.COMPONENT_NOT_REGISTERED="COMPONENT_NOT_REGISTERED",n.ENTITY_NOT_ALIVE="ENTITY_NOT_ALIVE",n.CIRCULAR_SYSTEM_DEPENDENCY="CIRCULAR_SYSTEM_DEPENDENCY",n.DUPLICATE_SYSTEM="DUPLICATE_SYSTEM",n.ARCHETYPE_NOT_FOUND="ARCHETYPE_NOT_FOUND",n.RESOURCE_NOT_REGISTERED="RESOURCE_NOT_REGISTERED",n))(wh||{});class $0 extends Y0{constructor(e,t,i){super(t??e,!0,i),this.category=e}}function dr(n,e,t){return n}const Rn=-1,yn=-1,Js=Object.freeze(Object.create(null)),Ni=5,Fi=31,Z0=2166136261,K0=16777619,j0=2654435769,J0=1367130551,oi=16,hu=2,Rh=1024,kr=0,fu=0,Q0=31,ex=1/60,tx=4,nx=0,ix=4;class ii{_words;constructor(e){this._words=e??new Array(ix).fill(0)}has(e){const t=e>>>Ni;return t>=this._words.length?!1:(this._words[t]&1<<(e&Fi))!==0}set(e){const t=e>>>Ni;t>=this._words.length&&this.grow(t+1),this._words[t]|=1<<(e&Fi)}clear(e){const t=e>>>Ni;t>=this._words.length||(this._words[t]&=~(1<<(e&Fi)))}overlaps(e){const t=this._words,i=e._words,s=t.length<i.length?t.length:i.length;for(let r=0;r<s;r++)if((t[r]&i[r])!==0)return!0;return!1}contains(e){const t=e._words,i=this._words,s=i.length;for(let r=0;r<t.length;r++){const o=t[r];if(o!==0&&(r>=s||(i[r]&o)!==o))return!1}return!0}equals(e){const t=this._words,i=e._words,s=t.length>i.length?t.length:i.length;for(let r=0;r<s;r++){const o=r<t.length?t[r]:0,a=r<i.length?i[r]:0;if(o!==a)return!1}return!0}copy(){return new ii(this._words.slice())}copy_with_set(e){const t=e>>>Ni,i=t+1,s=this._words.length>i?this._words.length:i,r=new Array(s).fill(0);for(let o=0;o<this._words.length;o++)r[o]=this._words[o];return r[t]|=1<<(e&Fi),new ii(r)}copy_with_clear(e){const t=this._words.slice(),i=e>>>Ni;return i<t.length&&(t[i]&=~(1<<(e&Fi))),new ii(t)}hash(){let e=Z0;const t=this._words;let i=t.length-1;for(;i>=0&&t[i]===0;)i--;for(let s=0;s<=i;s++)e^=t[s],e=Math.imul(e,K0);return e}for_each(e){const t=this._words;for(let i=0;i<t.length;i++){let s=t[i];if(s===0)continue;const r=i<<Ni;for(;s!==0;){const o=s&-s>>>0,a=Fi-Math.clz32(o);e(r+a),s^=o}}}grow(e){let t=this._words.length;for(;t<e;)t*=2;const i=new Array(t).fill(0);for(let s=0;s<this._words.length;s++)i[s]=this._words[s];this._words=i}}class Ti{constructor(e,t=oi){this._ctor=e,this._buf=new e(t)}_buf;_len=0;get length(){return this._len}push(e){this._len>=this._buf.length&&this._grow(),this._buf[this._len++]=e}pop(){return this._buf[--this._len]}get(e){return this._buf[e]}set_at(e,t){this._buf[e]=t}swap_remove(e){const t=this._buf[e];return this._buf[e]=this._buf[--this._len],t}clear(){this._len=0}get buf(){return this._buf}view(){return this._buf.subarray(0,this._len)}[Symbol.iterator](){let e=0;const t=this._buf,i=this._len;return{next(){return e<i?{value:t[e++],done:!1}:{value:0,done:!0}}}}ensure_capacity(e){if(e<=this._buf.length)return;let t=this._buf.length||1;for(;t<e;)t*=hu;const i=new this._ctor(t);i.set(this._buf.subarray(0,this._len)),this._buf=i}bulk_append(e,t,i){this.ensure_capacity(this._len+i),this._buf.set(e.subarray(t,t+i),this._len),this._len+=i}bulk_append_zeroes(e){this.ensure_capacity(this._len+e),this._buf.fill(0,this._len,this._len+e),this._len+=e}_grow(){const e=new this._ctor(this._buf.length*hu);e.set(this._buf),this._buf=e}}class sx extends Ti{constructor(e=oi){super(Float32Array,e)}}class rx extends Ti{constructor(e=oi){super(Float64Array,e)}}class ox extends Ti{constructor(e=oi){super(Int8Array,e)}}class ax extends Ti{constructor(e=oi){super(Int16Array,e)}}class lx extends Ti{constructor(e=oi){super(Int32Array,e)}}class cx extends Ti{constructor(e=oi){super(Uint8Array,e)}}class ux extends Ti{constructor(e=oi){super(Uint16Array,e)}}class Ch extends Ti{constructor(e=oi){super(Uint32Array,e)}}const hx={f32:sx,f64:rx,i8:ox,i16:ax,i32:lx,u8:cx,u16:ux,u32:Ch},Xi=20,eo=(1<<Xi)-1,fx=Q0-Xi,du=(1<<fx)-1,dx=(n,e)=>e<<Xi|n,sn=n=>n&eo,pu=n=>n>>Xi,px=n=>dr(n),mx=n=>dr(n);class _x{field_names;columns;reader;constructor(e){this.field_names=e,this.columns=[];for(let i=0;i<e.length;i++)this.columns.push([]);const t={length:0};for(let i=0;i<e.length;i++)t[e[i]]=this.columns[i];this.reader=t}emit(e){const t=this.field_names,i=this.columns;for(let s=0;s<t.length;s++)i[s].push(e[t[s]]);this.reader.length++}emit_signal(){this.reader.length++}clear(){this.reader.length=0;const e=this.columns;for(let t=0;t<e.length;t++)e[t].length=0}}const gx=n=>dr(n);class xx{field_names;field_index;columns;reader;constructor(e,t){this.field_names=e,this.field_index=Object.create(null),this.columns=[];for(let r=0;r<e.length;r++)this.field_index[e[r]]=r,this.columns.push([t[e[r]]??0]);const i=Object.create(null),s=this.columns;for(let r=0;r<e.length;r++){const o=s[r];Object.defineProperty(i,e[r],{get(){return o[kr]},enumerable:!0})}this.reader=i}write(e){const t=this.field_names,i=this.columns;for(let s=0;s<t.length;s++)t[s]in e&&(i[s][kr]=e[t[s]])}read_field(e){return this.columns[e][kr]}write_field(e,t){this.columns[e][kr]=t}}const vx=n=>dr(n);class yx{id;mask;has_columns;_entity_ids;length=0;edges=[];_flat_columns=[];_col_offset=[];_field_count=[];_field_index=[];_field_names=[];column_groups=[];_column_ids=[];constructor(e,t,i,s=Rh){if(this.id=e,this.mask=t,this._entity_ids=new Ch(s),i){let r=0;for(let o=0;o<i.length;o++){const a=i[o],c=a.component_id,l=new Array(a.field_names.length);this._col_offset[c]=r,this._field_count[c]=a.field_names.length,this._field_index[c]=a.field_index,this._field_names[c]=a.field_names;for(let h=0;h<a.field_names.length;h++){const u=new hx[a.field_types[h]](s);l[h]=u,this._flat_columns[r++]=u}this.column_groups[c]={layout:a,columns:l},this._column_ids.push(c)}}this.has_columns=this._column_ids.length>0}get entity_count(){return this.length}get entity_ids(){return this._entity_ids.buf}get entity_list(){return this._entity_ids.view()}has_component(e){return this.mask.has(e)}matches(e){return this.mask.contains(e)}get_column(e,t){const i=e,s=this._field_index[i][t];return this._flat_columns[this._col_offset[i]+s].buf}write_fields(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return;const o=this._field_names[s],a=this._flat_columns;for(let c=0;c<o.length;c++)a[r+c].buf[e]=i[o[c]]}write_fields_positional(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return;const o=this._flat_columns;for(let a=0;a<i.length;a++)o[r+a].buf[e]=i[a]}read_field(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return NaN;const o=this._field_index[s][i];return o===void 0?NaN:this._flat_columns[r+o].buf[e]}copy_shared_from(e,t,i){const s=e._col_offset,r=e._field_count,o=e._flat_columns,a=this._flat_columns,c=this._column_ids;for(let l=0;l<c.length;l++){const h=c[l],u=s[h];if(u===void 0)continue;const f=this._col_offset[h],p=r[h];for(let _=0;_<p;_++)a[f+_].buf[i]=o[u+_].buf[t]}}add_entity(e){const t=this.length;this._entity_ids.push(e);const i=this._flat_columns;for(let s=0;s<i.length;s++)i[s].push(0);return this.length++,t}remove_entity(e){const t=this.length-1;let i=yn;const s=this._flat_columns,r=this._entity_ids.buf;if(e!==t){r[e]=r[t],i=sn(r[e]);for(let o=0;o<s.length;o++)s[o].swap_remove(e)}else for(let o=0;o<s.length;o++)s[o].pop();return this._entity_ids.pop(),this.length--,i}add_entity_tag(e){const t=this.length;return this._entity_ids.push(e),this.length++,t}remove_entity_tag(e){const t=this.length-1;let i=yn;const s=this._entity_ids.buf;return e!==t&&(s[e]=s[t],i=sn(s[e])),this._entity_ids.pop(),this.length--,i}move_entity_from(e,t,i,s){const r=this.length;this._entity_ids.push(i);const o=this._flat_columns,a=e._flat_columns;for(let l=0;l<o.length;l++){const h=s[l];o[l].push(h>=0?a[h].buf[t]:0)}this.length++;const c=e.has_columns?e.remove_entity(t):e.remove_entity_tag(t);yt[0]=r,yt[1]=c}move_entity_from_tag(e,t,i){const s=this.length;this._entity_ids.push(i),this.length++;const r=e.remove_entity_tag(t);yt[0]=s,yt[1]=r}bulk_move_all_from(e,t){const i=e.length;if(i===0)return this.length;const s=this.length,r=this._flat_columns,o=e._flat_columns;this._entity_ids.bulk_append(e._entity_ids.buf,0,i);for(let a=0;a<r.length;a++){const c=t[a];c>=0?r[a].bulk_append(o[c].buf,0,i):r[a].bulk_append_zeroes(i)}this.length+=i,e.length=0,e._entity_ids.clear();for(let a=0;a<o.length;a++)o[a].clear();return s}get_edge(e){return this.edges[e]}set_edge(e,t){this.edges[e]=t}}const yt=[0,yn];function Hr(n,e){const t=e._flat_columns,i=new Int16Array(t.length),s=e._column_ids,r=n._col_offset,o=e._col_offset,a=e._field_count;for(let c=0;c<s.length;c++){const l=s[c],h=o[l],u=a[l],f=r[l];if(f!==void 0)for(let p=0;p<u;p++)i[h+p]=f+p;else for(let p=0;p<u;p++)i[h+p]=-1}return i}function Ph(n,e,t){const i=n.get(e);i!==void 0?i.push(t):n.set(e,[t])}class Mx{entity_generations=[];entity_high_water=0;entity_free_indices=[];entity_alive_count=0;component_metas=[];component_count=0;event_channels=[];event_count=0;resource_channels=[];resource_count=0;archetypes=[];archetype_map=new Map;next_archetype_id=0;component_index=new Map;registered_queries=[];empty_archetype_id;entity_archetype=[];entity_row=[];pending_destroy=[];pending_add_ids=[];pending_add_defs=[];pending_add_values=[];pending_remove_ids=[];pending_remove_defs=[];initial_capacity;constructor(e){this.initial_capacity=e??Rh,this.empty_archetype_id=this.arch_get_or_create_from_mask(new ii)}arch_get(e){return this.archetypes[e]}arch_get_or_create_from_mask(e){const t=e.hash(),i=this.archetype_map.get(t);if(i!==void 0){for(let c=0;c<i.length;c++)if(this.archetypes[i[c]].mask.equals(e))return i[c]}const s=vx(this.next_archetype_id++),r=[];e.for_each(c=>{const l=c,h=this.component_metas[l];h&&h.field_names.length>0&&r.push({component_id:l,field_names:h.field_names,field_index:h.field_index,field_types:h.field_types})});const o=new yx(s,e,r,this.initial_capacity);this.archetypes.push(o),Ph(this.archetype_map,t,s),e.for_each(c=>{const l=c;let h=this.component_index.get(l);h||(h=new Set,this.component_index.set(l,h)),h.add(s)});const a=this.registered_queries;for(let c=0;c<a.length;c++){const l=a[c];o.matches(l.include_mask)&&(!l.exclude_mask||!o.mask.overlaps(l.exclude_mask))&&(!l.any_of_mask||o.mask.overlaps(l.any_of_mask))&&l.result.push(o)}return s}arch_resolve_add(e,t){const i=this.arch_get(e);if(i.mask.has(t))return e;const s=i.get_edge(t);if(s?.add!=null)return s.add;const r=this.arch_get_or_create_from_mask(i.mask.copy_with_set(t));return this.arch_cache_edge(i,this.arch_get(r),t),r}arch_resolve_remove(e,t){const i=this.arch_get(e);if(!i.mask.has(t))return e;const s=i.get_edge(t);if(s?.remove!=null)return s.remove;const r=this.arch_get_or_create_from_mask(i.mask.copy_with_clear(t));return this.arch_cache_edge(this.arch_get(r),i,t),r}arch_cache_edge(e,t,i){const s=e.get_edge(i)??{add:null,remove:null,add_map:null,remove_map:null};s.add=t.id,s.add_map=Hr(e,t),e.set_edge(i,s);const r=t.get_edge(i)??{add:null,remove:null,add_map:null,remove_map:null};r.remove=e.id,r.remove_map=Hr(t,e),t.set_edge(i,r)}create_entity(){let e,t;this.entity_free_indices.length>0?(e=this.entity_free_indices.pop(),t=this.entity_generations[e]):(e=this.entity_high_water++,this.entity_generations[e]=fu,t=fu),this.entity_alive_count++;const i=dx(e,t);return this.entity_archetype[e]=this.empty_archetype_id,this.entity_row[e]=Rn,i}destroy_entity(e){if(!this.is_alive(e))return;const t=sn(e),i=this.entity_row[t];if(i!==Rn){const r=this.arch_get(this.entity_archetype[t]).remove_entity(i);r!==yn&&(this.entity_row[r]=i)}this.entity_archetype[t]=Rn,this.entity_row[t]=Rn;const s=pu(e);this.entity_generations[t]=s+1&du,this.entity_free_indices.push(t),this.entity_alive_count--}is_alive(e){const t=sn(e);return t<this.entity_high_water&&this.entity_generations[t]===pu(e)}get entity_count(){return this.entity_alive_count}destroy_entity_deferred(e){this.pending_destroy.push(e)}flush_destroyed(){const e=this.pending_destroy;if(e.length===0)return;const t=this.entity_archetype,i=this.entity_row,s=this.entity_generations,r=this.archetypes,o=this.entity_high_water;for(let a=0;a<e.length;a++){const c=e[a],l=c&eo,h=c>>Xi;if(l>=o||s[l]!==h)continue;const u=i[l];if(u!==Rn){const f=r[t[l]],p=f.has_columns?f.remove_entity(u):f.remove_entity_tag(u);p!==yn&&(i[p]=u)}t[l]=Rn,i[l]=Rn,s[l]=h+1&du,this.entity_free_indices.push(l),this.entity_alive_count--}e.length=0}get pending_destroy_count(){return this.pending_destroy.length}add_component_deferred(e,t,i){this.pending_add_ids.push(e),this.pending_add_defs.push(t),this.pending_add_values.push(i??Js)}remove_component_deferred(e,t){this.pending_remove_ids.push(e),this.pending_remove_defs.push(t)}flush_structural(){this.pending_add_ids.length>0&&this._flush_adds(),this.pending_remove_ids.length>0&&this._flush_removes()}_flush_adds(){const e=this.pending_add_ids,t=this.pending_add_defs,i=this.pending_add_values,s=e.length,r=this.entity_archetype,o=this.entity_row,a=this.entity_generations,c=this.archetypes,l=this.component_metas,h=this.entity_high_water;for(let u=0;u<s;u++){const f=e[u],p=f&eo,_=f>>Xi;if(p>=h||a[p]!==_)continue;const v=r[p],m=t[u],d=c[v];if(d.mask.has(m)){l[m].field_names.length>0&&d.write_fields(o[p],m,i[u]);continue}const y=this.arch_resolve_add(v,m),E=c[y],S=o[p],b=!E.has_columns&&!d.has_columns;let A;if(S!==Rn){if(b)E.move_entity_from_tag(d,S,f);else{const w=d.get_edge(m);E.move_entity_from(d,S,f,w.add_map)}A=yt[0],yt[1]!==yn&&(o[yt[1]]=S)}else A=b?E.add_entity_tag(f):E.add_entity(f);l[m].field_names.length>0&&E.write_fields(A,m,i[u]),r[p]=y,o[p]=A}e.length=0,t.length=0,i.length=0}_flush_removes(){const e=this.pending_remove_ids,t=this.pending_remove_defs,i=e.length,s=this.entity_archetype,r=this.entity_row,o=this.entity_generations,a=this.archetypes,c=this.entity_high_water;for(let l=0;l<i;l++){const h=e[l],u=h&eo,f=h>>Xi;if(u>=c||o[u]!==f)continue;const p=s[u],_=t[l],v=a[p];if(!v.mask.has(_))continue;const m=this.arch_resolve_remove(p,_),d=a[m],y=r[u];if(!d.has_columns&&!v.has_columns)d.move_entity_from_tag(v,y,h);else{const E=v.get_edge(_);d.move_entity_from(v,y,h,E.remove_map)}yt[1]!==yn&&(r[yt[1]]=y),s[u]=m,r[u]=yt[0]}e.length=0,t.length=0}get pending_structural_count(){return this.pending_add_ids.length+this.pending_remove_ids.length}register_component(e){const t=px(this.component_count++),i=Object.keys(e),s=new Array(i.length),r=Object.create(null);for(let o=0;o<i.length;o++)r[i[o]]=o,s[o]=e[i[o]];return this.component_metas.push({field_names:i,field_index:r,field_types:s}),t}add_component(e,t,i){if(!this.is_alive(e))return;const s=sn(e),r=this.entity_archetype[s],o=this.arch_get(r);if(o.has_component(t)){o.write_fields(this.entity_row[s],t,i);return}const a=this.arch_resolve_add(r,t),c=this.arch_get(a),l=this.entity_row[s];let h;if(l!==Rn){const u=o.get_edge(t);!c.has_columns&&!o.has_columns?c.move_entity_from_tag(o,l,e):c.move_entity_from(o,l,e,u.add_map),h=yt[0],yt[1]!==yn&&(this.entity_row[yt[1]]=l)}else h=c.has_columns?c.add_entity(e):c.add_entity_tag(e);c.write_fields(h,t,i),this.entity_archetype[s]=a,this.entity_row[s]=h}add_components(e,t){if(!this.is_alive(e))return;const i=sn(e),s=this.entity_archetype[i];let r=s;for(let o=0;o<t.length;o++)r=this.arch_resolve_add(r,t[o].def);if(r!==s){const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[i];let l;if(c!==Rn){const h=Hr(o,a);a.move_entity_from(o,c,e,h),l=yt[0],yt[1]!==yn&&(this.entity_row[yt[1]]=c)}else l=a.add_entity(e);for(let h=0;h<t.length;h++)a.write_fields(l,t[h].def,t[h].values??Js);this.entity_archetype[i]=r,this.entity_row[i]=l}else{const o=this.arch_get(s),a=this.entity_row[i];for(let c=0;c<t.length;c++)o.write_fields(a,t[c].def,t[c].values??Js)}}remove_component(e,t){if(!this.is_alive(e))return;const i=sn(e),s=this.entity_archetype[i],r=this.arch_get(s);if(!r.has_component(t))return;const o=this.arch_resolve_remove(s,t),a=this.arch_get(o),c=this.entity_row[i],l=r.get_edge(t);!a.has_columns&&!r.has_columns?a.move_entity_from_tag(r,c,e):a.move_entity_from(r,c,e,l.remove_map),yt[1]!==yn&&(this.entity_row[yt[1]]=c),this.entity_archetype[i]=o,this.entity_row[i]=yt[0]}remove_components(e,t){if(!this.is_alive(e))return;const i=sn(e),s=this.entity_archetype[i];let r=s;for(let h=0;h<t.length;h++)r=this.arch_resolve_remove(r,t[h]);if(r===s)return;const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[i],l=Hr(o,a);a.move_entity_from(o,c,e,l),yt[1]!==yn&&(this.entity_row[yt[1]]=c),this.entity_archetype[i]=r,this.entity_row[i]=yt[0]}has_component(e,t){if(!this.is_alive(e))return!1;const i=sn(e);return this.arch_get(this.entity_archetype[i]).has_component(t)}batch_add_component(e,t,i){if(e.length===0)return;const s=t;if(e.mask.has(s))return;const r=this.arch_resolve_add(e.id,s),o=this.arch_get(r),a=e.get_edge(s),c=e.length,l=this.entity_archetype,h=this.entity_row,u=o.bulk_move_all_from(e,a.add_map);for(let f=0;f<c;f++){const p=sn(o.entity_ids[u+f]);l[p]=r,h[p]=u+f}if(this.component_metas[s].field_names.length>0&&i)for(let f=0;f<c;f++)o.write_fields(u+f,s,i)}batch_remove_component(e,t){if(e.length===0)return;const i=t;if(!e.mask.has(i))return;const s=this.arch_resolve_remove(e.id,i),r=this.arch_get(s),o=e.get_edge(i),a=e.length,c=r.bulk_move_all_from(e,o.remove_map),l=this.entity_archetype,h=this.entity_row;for(let u=0;u<a;u++){const f=sn(r.entity_ids[c+u]);l[f]=s,h[f]=c+u}}get_entity_archetype(e){return this.arch_get(this.entity_archetype[sn(e)])}get_entity_row(e){return this.entity_row[sn(e)]}get_matching_archetypes(e,t,i){const s=e._words;let r=!1;for(let l=0;l<s.length;l++)if(s[l]!==0){r=!0;break}if(!r)return this.archetypes.filter(l=>(!t||!l.mask.overlaps(t))&&(!i||l.mask.overlaps(i)));let o,a=!1;for(let l=0;l<s.length;l++){let h=s[l];if(h===0)continue;const u=l<<Ni;for(;h!==0;){const f=h&-h>>>0,p=u+(Fi-Math.clz32(f));h^=f;const _=this.component_index.get(p);if(!_||_.size===0){a=!0;break}(!o||_.size<o.size)&&(o=_)}if(a)break}if(a||!o)return[];const c=[];for(const l of o){const h=this.arch_get(l);h.matches(e)&&(!t||!h.mask.overlaps(t))&&(!i||h.mask.overlaps(i))&&c.push(h)}return c}register_query(e,t,i){const s=this.get_matching_archetypes(e,t,i);return this.registered_queries.push({include_mask:e.copy(),exclude_mask:t?t.copy():null,any_of_mask:i?i.copy():null,result:s}),s}get archetype_count(){return this.archetypes.length}register_event(e){const t=mx(this.event_count++),i=new _x(e);return this.event_channels.push(i),t}emit_event(e,t){this.event_channels[e].emit(t)}emit_signal(e){this.event_channels[e].emit_signal()}get_event_reader(e){return this.event_channels[e].reader}clear_events(){const e=this.event_channels;for(let t=0;t<e.length;t++)e[t].clear()}register_resource(e,t){const i=gx(this.resource_count++),s=new xx(e,t);return this.resource_channels.push(s),i}get_resource_reader(e){return this.resource_channels[e].reader}get_resource_channel(e){return this.resource_channels[e]}}const fa=["PRE_STARTUP","STARTUP","POST_STARTUP"],da=["PRE_UPDATE","UPDATE","POST_UPDATE"];class Sx{label_systems=new Map;sorted_cache=new Map;system_index=new Map;next_insertion_order=0;constructor(){for(let e=0;e<fa.length;e++)this.label_systems.set(fa[e],[]);this.label_systems.set("FIXED_UPDATE",[]);for(let e=0;e<da.length;e++)this.label_systems.set(da[e],[])}add_systems(e,...t){for(const i of t){const s="system"in i?i.system:i,r="system"in i?i.ordering:void 0,o={descriptor:s,insertion_order:this.next_insertion_order++,before:new Set(r?.before??[]),after:new Set(r?.after??[])};this.label_systems.get(e).push(o),this.system_index.set(s,e),this.sorted_cache.delete(e)}}remove_system(e){const t=this.system_index.get(e);if(t===void 0)return;const i=this.label_systems.get(t),s=i.findIndex(r=>r.descriptor===e);if(s!==-1){const r=i.length-1;s!==r&&(i[s]=i[r]),i.pop();for(const o of i)o.before.delete(e),o.after.delete(e)}this.system_index.delete(e),this.sorted_cache.delete(t)}run_startup(e){for(const t of fa)this.run_label(t,e,nx)}run_update(e,t){for(const i of da)this.run_label(i,e,t)}run_fixed_update(e,t){this.run_label("FIXED_UPDATE",e,t)}has_fixed_systems(){return this.label_systems.get("FIXED_UPDATE").length>0}get_all_systems(){const e=[];for(const t of this.label_systems.values())for(const i of t)e.push(i.descriptor);return e}has_system(e){return this.system_index.has(e)}clear(){for(const e of this.label_systems.values())e.length=0;this.sorted_cache.clear(),this.system_index.clear()}run_label(e,t,i){const s=this.get_sorted(e);for(let r=0;r<s.length;r++)s[r].fn(t,i);t.flush()}get_sorted(e){const t=this.sorted_cache.get(e);if(t!==void 0)return t;const i=this.label_systems.get(e),s=this.topological_sort(i,e);return this.sorted_cache.set(e,s),s}topological_sort(e,t){if(e.length===0)return[];const i=new Map,s=new Map,r=new Map,o=new Set;for(const l of e)i.set(l.descriptor,new Set),s.set(l.descriptor,0),r.set(l.descriptor,l.insertion_order),o.add(l.descriptor);for(const l of e){for(const h of l.before)o.has(h)&&(i.get(l.descriptor).add(h),s.set(h,s.get(h)+1));for(const h of l.after)o.has(h)&&(i.get(h).add(l.descriptor),s.set(l.descriptor,s.get(l.descriptor)+1))}let a=[];for(const l of e)s.get(l.descriptor)===0&&a.push(l.descriptor);a.sort((l,h)=>r.get(h)-r.get(l));const c=[];for(;a.length>0;){const l=a.pop();c.push(l);for(const h of i.get(l)){const u=s.get(h)-1;s.set(h,u),u===0&&a.push(h)}a.sort((h,u)=>r.get(u)-r.get(h))}if(c.length!==e.length){const l=new Set(c),h=e.filter(u=>!l.has(u.descriptor)).map(u=>u.descriptor.name??`system_${u.descriptor.id}`);throw new $0(wh.CIRCULAR_SYSTEM_DEPENDENCY,`Circular system dependency detected in ${t}: [${h.join(", ")}]`)}return c}}const mu=new WeakMap;function Ex(n,e){let t=mu.get(n);if(!t){t=Object.create(null);const{field_names:r}=n.layout;for(let o=0;o<r.length;o++){const a=o;Object.defineProperty(t,r[o],{get(){return this._columns[a][this._row]},set(c){this._columns[a][this._row]=c},enumerable:!0,configurable:!1})}mu.set(n,t)}const i=Object.create(t),s=new Array(n.columns.length);for(let r=0;r<n.columns.length;r++)s[r]=n.columns[r].buf;return i._columns=s,i._row=e,i}class Tx{_archetypes;_defs;_resolver;_include;_exclude;_any_of;constructor(e,t,i,s,r,o){this._archetypes=e,this._defs=t,this._resolver=i,this._include=s,this._exclude=r,this._any_of=o}get archetype_count(){return this._archetypes.length}count(){const e=this._archetypes;let t=0;for(let i=0;i<e.length;i++)t+=e[i].entity_count;return t}get archetypes(){return this._archetypes}*[Symbol.iterator](){const e=this._archetypes;for(let t=0;t<e.length;t++)e[t].entity_count>0&&(yield e[t])}and(...e){const t=this._include.copy(),i=this._defs.slice();for(let s=0;s<e.length;s++)t.has(e[s])||(t.set(e[s]),i.push(e[s]));return this._resolver._resolve_query(t,this._exclude,this._any_of,i)}not(...e){const t=this._exclude?this._exclude.copy():new ii;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(this._include,t,this._any_of,this._defs)}any_of(...e){const t=this._any_of?this._any_of.copy():new ii;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(this._include,this._exclude,t,this._defs)}}class bx{constructor(e){this._resolver=e}every(...e){const t=new ii;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(t,null,null,e)}}class Ax{store;constructor(e){this.store=e}create_entity(){return this.store.create_entity()}get_field(e,t,i){const s=this.store.get_entity_archetype(e),r=this.store.get_entity_row(e);return s.read_field(r,t,i)}set_field(e,t,i,s){const r=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),a=r.get_column(t,i);a[o]=s}ref(e,t){const i=this.store.get_entity_archetype(t),s=this.store.get_entity_row(t);return Ex(i.column_groups[e],s)}destroy_entity(e){return this.store.destroy_entity_deferred(e),this}add_component(e,t,i){return this.store.add_component_deferred(e,t,i??Js),this}remove_component(e,t){return this.store.remove_component_deferred(e,t),this}flush(){this.store.flush_structural(),this.store.flush_destroyed()}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}read(e){return this.store.get_event_reader(e)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}}const wx=n=>dr(n);class Rx{store;schedule;ctx;systems=new Set;next_system_id=0;_fixed_timestep;_accumulator=0;_max_fixed_steps;query_cache=new Map;scratch_mask=new ii;constructor(e){this.store=new Mx(e?.initial_capacity),this.schedule=new Sx,this.ctx=new Ax(this.store),this._fixed_timestep=e?.fixed_timestep??ex,this._max_fixed_steps=e?.max_fixed_steps??tx}get fixed_timestep(){return this._fixed_timestep}set fixed_timestep(e){this._fixed_timestep=e}get fixed_alpha(){return this._accumulator/this._fixed_timestep}register_component(e,t){if(Array.isArray(e)){const i=t??"f64",s=Object.create(null);for(const r of e)s[r]=i;return this.store.register_component(s)}return this.store.register_component(e)}register_tag(){return this.store.register_component({})}register_event(e){return this.store.register_event(e)}register_signal(){return this.store.register_event([])}register_resource(e,t){return this.store.register_resource(e,t)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}create_entity(){return this.store.create_entity()}destroy_entity_deferred(e){this.store.destroy_entity_deferred(e)}is_alive(e){return this.store.is_alive(e)}get entity_count(){return this.store.entity_count}add_component(e,t,i){return this.store.add_component(e,t,i??Js),this}add_components(e,t){this.store.add_components(e,t)}remove_component(e,t){return this.store.remove_component(e,t),this}remove_components(e,...t){this.store.remove_components(e,t)}has_component(e,t){return this.store.has_component(e,t)}batch_add_component(e,t,i){this.store.batch_add_component(e,t,i)}batch_remove_component(e,t){this.store.batch_remove_component(e,t)}get_field(e,t,i){const s=this.store.get_entity_archetype(e),r=this.store.get_entity_row(e);return s.read_field(r,t,i)}set_field(e,t,i,s){const r=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),a=r.get_column(t,i);a[o]=s}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}query(...e){const t=this.scratch_mask;t._words.fill(0);for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolve_query(t.copy(),null,null,e)}_resolve_query(e,t,i,s){const r=e.hash(),o=t?t.hash():0,a=i?i.hash():0,c=r^Math.imul(o,j0)^Math.imul(a,J0)|0,l=this._find_cached(c,e,t,i);if(l!==void 0)return l.query;const h=this.store.register_query(e,t??void 0,i??void 0),u=new Tx(h,s,this,e.copy(),t?.copy()??null,i?.copy()??null);return Ph(this.query_cache,c,{include_mask:e.copy(),exclude_mask:t?.copy()??null,any_of_mask:i?.copy()??null,query:u}),u}_find_cached(e,t,i,s){const r=this.query_cache.get(e);if(r)for(let o=0;o<r.length;o++){const a=r[o];if(!(!a.include_mask.equals(t)||!(i===null?a.exclude_mask===null:a.exclude_mask!==null&&a.exclude_mask.equals(i))||!(s===null?a.any_of_mask===null:a.any_of_mask!==null&&a.any_of_mask.equals(s))))return a}}register_system(e,t){let i;if(typeof e=="function")if(t!==void 0){const o=t(new bx(this)),a=this.ctx,c=e;i={fn:(l,h)=>c(o,a,h)}}else i={fn:e};else i=e;const s=wx(this.next_system_id++),r=Object.freeze(Object.assign({id:s},i));return this.systems.add(r),r}add_systems(e,...t){return this.schedule.add_systems(e,...t),this}remove_system(e){this.schedule.remove_system(e),e.on_removed?.(),this.systems.delete(e)}get system_count(){return this.systems.size}startup(){for(const e of this.systems.values())e.on_added?.(this.ctx);this.schedule.run_startup(this.ctx)}update(e){if(this.schedule.has_fixed_systems()){this._accumulator+=e;const t=this._max_fixed_steps*this._fixed_timestep;for(this._accumulator>t&&(this._accumulator=t);this._accumulator>=this._fixed_timestep;)this.schedule.run_fixed_update(this.ctx,this._fixed_timestep),this._accumulator-=this._fixed_timestep}this.schedule.run_update(this.ctx,e),this.store.clear_events()}flush(){this.ctx.flush()}dispose(){for(const e of this.systems.values())e.dispose?.(),e.on_removed?.();this.systems.clear(),this.schedule.clear()}}class Cx{#e;#n;constructor(){const[e,t]=vf({});this.#e=e,this.#n=t}track(e){e in this.#e||this.#n(t=>(t[e]=0,t)),this.#e[e]}untrack(e){this.#n(t=>(delete t[e],t))}dirty(e){e in this.#e&&this.#n(t=>(t[e]=1-t[e],t))}}class xl{#e;#n;#t;#s;#i=0;#r=!1;#o;constructor(e,t,i,s,r){this.#t=e,this.#s=t,this.#e=i,this.#n=s,this.#o=r}get value(){return this.#t.track(this.#s),Zt()!==null&&(this.#i++,this.#r||(this.#r=!0,ys(()=>{this.#i--,this.#i===0&&queueMicrotask(()=>{this.#i===0&&(this.#r=!1,this.#o?.())})}))),this.#e()}dirty(){this.#n()}}class Px{#e;#n;#t;#s;#i;constructor(e,t,i){this.#e=e,this.#n=t,this.#t=i,this.#i=`resource:${t.toString()}`,this.#s=new Map}get resourceKey(){return this.#i}#r(e){if(Zt()===null)return this.#t[e];const i=`${this.#i}:${e}`;let s=this.#s.get(e);return s===void 0&&(s=new xl(this.#e,i,()=>this.#t[e],()=>this.#e.dirty(i),()=>{this.#e.untrack(i),this.#s.delete(e)}),this.#s.set(e,s)),s.value}get delta(){return this.#r("delta")}get elapsed(){return this.#r("elapsed")}get(e){return this.#r(e)}}class Dx{#e;#n;#t;#s;#i;constructor(e,t,i){this.#e=e,this.#n=t,this.#t=i,this.#s=new Map,this.#i=new Map}get id(){return this.#t}hasComponent(e){if(Zt()===null)return this.#n.has_component(this.#t,e);const i=`entity:${this.#t}:has:${e}`;let s=this.#s.get(i);return s===void 0&&(s=new xl(this.#e,i,()=>this.#n.has_component(this.#t,e),()=>this.#e.dirty(i),()=>{this.#e.untrack(i),this.#s.delete(i)}),this.#s.set(i,s)),s.value}getField(e,t){if(Zt()===null)return this.#n.get_field(this.#t,e,t);const s=`entity:${this.#t}:${e}:${t}`;let r=this.#i.get(s);return r===void 0&&(r=new xl(this.#e,s,()=>this.#n.get_field(this.#t,e,t),()=>this.#e.dirty(s),()=>{this.#e.untrack(s),this.#i.delete(s)}),this.#i.set(s,r)),r.value}}class Qs{#e;#n;#t;#s;#i;constructor(e,t,i,s){this.#e=e,this.#n=t,this.#s=i,this.#i=s,this.#t=t.query(...i)}get queryKey(){return this.#i}get archetype_count(){return Zt()===null?this.#t.archetype_count:(this.#e.track(`${this.#i}:archetype_count`),this.#t.archetype_count)}count(){return Zt()===null?this.#t.count():(this.#e.track(`${this.#i}:count`),this.#e.track("world:entities"),this.#t.count())}get archetypes(){return Zt()===null?this.#t.archetypes:(this.#e.track(`${this.#i}:archetypes`),this.#e.track("world:entities"),this.#t.archetypes)}*[Symbol.iterator](){const e=Zt();if(this.#t.archetypes,e===null){for(const t of this.#t)yield t;return}this.#e.track(`${this.#i}:archetypes`);for(const t of this.#t)yield new Ix(this.#e,this.#n,t,this.#i)}and(...e){return new Qs(this.#e,this.#n,[...this.#s,...e],`${this.#i}:and`)}not(...e){return new Qs(this.#e,this.#n,this.#s,`${this.#i}:not`)}any_of(...e){return new Qs(this.#e,this.#n,this.#s,`${this.#i}:any_of`)}}class Ix{#e;#n;#t;#s;constructor(e,t,i,s){this.#e=e,this.#n=t,this.#t=i,this.#s=s}get entity_ids(){if(Zt()===null)return this.#t.entity_ids;const t=`arch:${this.#t.id}:entity_ids`;return this.#e.track(t),this.#t.entity_ids}get entity_count(){if(Zt()===null)return this.#t.entity_count;const t=`arch:${this.#t.id}:count`;return this.#e.track(t),this.#t.entity_count}has_component(e){if(Zt()===null)return this.#t.has_component(e);const i=`arch:${this.#t.id}:has:${e}`;return this.#e.track(i),this.#t.has_component(e)}get_column(e,t){if(Zt()===null)return this.#t.get_column(e,t);const s=`arch:${this.#t.id}:col`;return this.#e.track(s),this.#t.get_column(e,t)}}class Lx{#e;#n;constructor(e){this.#e=e,this.#n=new Cx}get ecs(){return this.#e}dirty(e){this.#n.dirty(e)}query(...e){const t=`query:${e.map(i=>i.toString()).join(",")}`;return new Qs(this.#n,this.#e,e,t)}resource(e){return new Px(this.#n,e,this.#e.resource(e))}entity(e){return new Dx(this.#n,this.#e,e)}create_entity(){const e=this.#e.create_entity();return fn(()=>this.#n.dirty("world:entities")),e}destroy_entity_deferred(e){this.#e.destroy_entity_deferred(e),fn(()=>this.#n.dirty("world:entities"))}add_component(e,t,i){const s=`entity:${e}:has:${t}`;return this.#e.add_component(e,t,i),fn(()=>{this.#n.dirty(s),this.#n.dirty("world:entities")}),this}remove_component(e,t){const i=`entity:${e}:has:${t}`;return this.#e.remove_component(e,t),fn(()=>{this.#n.dirty(i),this.#n.dirty("world:entities")}),this}set_field(e,t,i,s){const r=`entity:${e}:${t}:${i}`;this.#e.set_field(e,t,i,s),fn(()=>this.#n.dirty(r))}set_resource(e,t){const i=this.#e.resource(e);this.#e.set_resource(e,t);for(const s of Object.keys(i))this.#n.dirty(`resource:${e.toString()}:${s}`)}}const Ux={def:{x:"f64",y:"f64",z:"f64"}},Nx={def:{x:"f64",y:"f64",z:"f64"}},Fx={def:{playerType:"u8",facingForward:"u8"}},Ox={def:[]},Bx={def:[]},zx={def:{x:"f64",z:"f64"}},Vx={def:{width:"f64",length:"f64",netHeight:"f64"}},Gx={def:{size:"f64"}},kx={def:{minX:"f64",minY:"f64",minZ:"f64",maxX:"f64",maxY:"f64",maxZ:"f64"}},Hx={def:[]},Wx={def:{meshId:"u32"}},Xx={schema:{x:0,y:0,z:0}},qx={schema:{servingPlayer:0}},Yx={def:{phase:"u8",serverPlayer:"u8",throwTime:"f64"}},$x={def:{side:"i8"}},wt=new Rx,Zx=new Lx(wt),ae=wt.register_component(Ux.def),Ie=wt.register_component(Nx.def),xt=wt.register_component(Fx.def),Hl=wt.register_component(Ox.def),Wl=wt.register_component(Bx.def),Ht=wt.register_component(zx.def),jn=wt.register_component(Vx.def),$i=wt.register_component(Gx.def),mi=wt.register_component(kx.def),Dh=wt.register_component(Hx.def);wt.register_component(Wx.def);const So=wt.register_resource(["x","y","z"],Xx.schema),Kx=wt.register_resource(["servingPlayer"],qx.schema),Xe=wt.register_component(Yx.def),Jn=wt.register_component($x.def);function jx(){return wt.startup(),wt.set_resource(Kx,{servingPlayer:0}),wt.set_resource(So,{x:0,y:-10,z:0}),{ecs:Zx}}function Ih(n){const e=n.reactiveEcs,t=e.create_entity();e.add_component(t,ae,{x:n.position.x,y:n.position.y,z:n.position.z}),e.add_component(t,Ie,{x:n.velocity.x,y:n.velocity.y,z:n.velocity.z});const i=n.playerType==="Cubey"?0:1,s=n.facingForward?1:0;return e.add_component(t,xt,{playerType:i,facingForward:s}),t}function Jx(n){const e=n.reactiveEcs,t=e.create_entity();return e.add_component(t,jn,{width:n.width,length:n.length,netHeight:n.netHeight}),t}function Qx(n){const e=n.reactiveEcs,t=n.position(),i=new G(0,0,0),s=e.create_entity();e.add_component(s,ae,{x:t.x,y:t.y,z:t.z}),e.add_component(s,Ie,{x:i.x,y:i.y,z:i.z}),e.add_component(s,$i,{size:n.size()});const r=n.boundary();return e.add_component(s,mi,{minX:r.min.x,minY:r.min.y,minZ:r.min.z,maxX:r.max.x,maxY:r.max.y,maxZ:r.max.z}),e.add_component(s,Dh,{}),s}function ev(n,e){return Zi(t=>(Gt(Co(Gt(()=>{let i=[];for(let s of n.query(ae,xt)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i());s.getField(xt,"playerType"),s.getField(xt,"facingForward");let r=new Wi,o,a,c=[],l,h=[];const u=new Or,f=new sa,p=new Vt(.5,.2,.5);o=new et(p,u),o.position.set(0,.1,0);const _=new Vt(.5,.25,.5);a=new et(_,u),a.position.set(0,.45,0);const v=new Vt(.1,.2,.1),m=new et(v,f),d=new et(v,f);m.position.set(-.14,.3,.3),d.position.set(.14,.3,.3),c=[m,d];const y=new Vt(.1,.4,.1);l=new et(y,f),l.position.set(0,.3,.3);const E=new po(.08),S=new et(E,f),b=new et(E,f);S.position.set(-.15,.48,.25),b.position.set(.15,.48,.25),h=[S,b],r.add(o),r.add(a),c.forEach(D=>r.add(D)),r.add(l),h.forEach(D=>r.add(D));const A=new Wi,w=new sa({color:9127187}),g=new fo(.02,.02,.3,8),M=new et(g,w);M.position.set(0,0,0),M.rotation.x=Math.PI/2,A.add(M);const O=new fo(.4,.4,.02,16),C=new et(O,w);C.position.set(0,0,.15),C.rotation.x=Math.PI/2,A.add(C),A.position.set(.4,.5,.3),r.add(A),e.add(r),ys(()=>{e.remove(r),p.dispose(),_.dispose(),v.dispose(),y.dispose(),E.dispose(),g.dispose(),O.dispose(),u.dispose(),f.dispose(),w.dispose()}),Gt(()=>{let D=s.getField(ae,"x"),N=s.getField(ae,"y"),V=s.getField(ae,"z"),U=s.getField(xt,"facingForward"),B=s.getField(Jn,"side");r.position.set(D,N,V),U===1?r.quaternion.set(0,1,0,0):r.quaternion.set(0,0,0,1);const I=B*.4;A.position.set(I,.5,.3)})})),Gt(Co(Gt(()=>{let i=[];for(let s of n.query(jn)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i()),r={width:s.getField(jn,"width"),length:s.getField(jn,"length"),netHeight:s.getField(jn,"netHeight")};const o=new Wi,a=new Or,c=new Or({transparent:!0,opacity:.5}),l=new Vt(r.width,.1,r.length),h=new et(l,a);h.position.y-=.05,o.add(h);const u=new sa({color:16777215}),f=.05,p=.01,_=new Vt(r.width,p,f),v=new et(_,u);v.position.set(0,.01,-r.length/2),o.add(v);const m=new et(_,u);m.position.set(0,.01,r.length/2),o.add(m);const d=new Vt(f,p,r.length),y=new et(d,u);y.position.set(-r.width/2,.01,0),o.add(y);const E=new et(d,u);E.position.set(r.width/2,.01,0),o.add(E);const S=6.4,b=new Vt(r.width-2*f,p,f),A=new et(b,u);A.position.set(0,.01,-S),o.add(A);const w=new et(b,u);w.position.set(0,.01,S),o.add(w);const g=new Vt(f,p,S*2),M=new et(g,u);M.position.set(0,.01,0),o.add(M);const O=8.23,C=new Vt(f,p,r.length),D=new et(C,u);D.position.set(-O/2,.01,0),o.add(D);const N=new et(C,u);N.position.set(O/2,.01,0),o.add(N);const V=new Vt(r.width,r.netHeight,.1),U=new et(V,c);U.position.y=.5*r.netHeight,o.add(U),e.add(o),ys(()=>{e.remove(o),l.dispose(),V.dispose(),a.dispose(),c.dispose(),u.dispose(),_.dispose(),d.dispose(),b.dispose(),g.dispose(),C.dispose()})})),Gt(Co(Gt(()=>{let i=[];for(let s of n.query(ae,$i)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i()),r=s.getField($i,"size");const o=new po(r),a=new Or,c=new et(o,a);e.add(c);const l=new Gl(r,32);l.scale(1,.5,1);const h=new zl({color:0,transparent:!0,opacity:.3}),u=new et(l,h);u.rotation.x=-Math.PI/2,u.position.y=.01,e.add(u),ys(()=>{e.remove(c),e.remove(u),o.dispose(),a.dispose(),l.dispose(),h.dispose()}),Gt(()=>{let f=s.getField(ae,"x"),p=s.getField(ae,"y"),_=s.getField(ae,"z");c.position.set(f,p,_);const v=Math.max(.3,1-p*.1);u.scale.set(v,v,v),u.position.set(f,.01,_)})})),{update:()=>{},dispose:t}))}function tv(n,e,t,i,s,r){return{update:()=>{const a=[],c=n.query(Hl,Ht);for(const l of c){l.get_column(Ht,"x"),l.get_column(Ht,"z");const h=l.entity_ids;for(let u=0;u<l.entity_count;u++){const f=h[u];let p=0,_=0;i()&&(p-=1),s()&&(p+=1),t()&&(_+=1),e()&&(_-=1),p+=r().x,_+=r().y,a.push({entityId:f,moveX:p,moveZ:_})}}for(const{entityId:l,moveX:h,moveZ:u}of a){const f=l;n.set_field(f,Ht,"x",h),n.set_field(f,Ht,"z",u)}},dispose:()=>{}}}function nv(n,e){return Zi(t=>({update:s=>{const r=n.resource(So),a=n.query(jn).archetypes[0],c=a?{width:a.get_column(jn,"width")[0],length:a.get_column(jn,"length")[0],netHeight:a.get_column(jn,"netHeight")[0]}:void 0;let l=0,h=!1,u=!1;const f=1,p=n.query(Xe);if(p.archetypes.length>0){const d=p.archetypes[0],y=d.get_column(Xe,"phase");l=d.get_column(Xe,"serverPlayer")[0],h=y[0]!==2,u=y[0]===f}const _=(d,y)=>{const E=d.get_column(ae,"x"),S=d.get_column(ae,"y"),b=d.get_column(ae,"z"),A=d.get_column(Ie,"x"),w=d.get_column(Ie,"y"),g=d.get_column(Ie,"z"),M=d.get_column(Ht,"x"),O=d.get_column(Ht,"z"),C=d.get_column(xt,"playerType"),D=d.get_column(xt,"facingForward"),N=d.entity_ids,V=d.get_column(Jn,"side");for(let U=0;U<d.entity_count;U++){const B=N[U],I={x:E[U],y:S[U],z:b[U]},j={x:A[U],y:w[U],z:g[U]},Z={x:M[U],z:O[U]},le={playerType:C[U],facingForward:D[U]};let ce=I.x,Q=I.y,Re=I.z,nt=j.x,Ye=j.y,$=j.z;const ne=le.playerType===l;let ie=V[U];if(u&&ne||(ce+=Z.x*7*s,Re+=Z.z*7*s,Z.x>.1?ie=-1:Z.x<-.1&&(ie=1)),!h&&Q<=0?y&&e()&&(Ye=5):Q>0&&(Ye+=r.get("y")*s),ce+=nt*s,Q+=Ye*s,Re+=$*s,Q<=0&&(Q=0,Ye=0),c){const Se=.5*c.width,Ce=.5*c.length,$e=.25;ce<-Se+$e&&(ce=-Se+$e),ce>Se-$e&&(ce=Se-$e),le.facingForward===1?(Re>Ce-$e&&(Re=Ce-$e),Re<$e&&(Re=$e)):(Re<-Ce+$e&&(Re=-Ce+$e),Re>-$e&&(Re=-$e))}const Te=B;n.set_field(Te,ae,"x",ce),n.set_field(Te,ae,"y",Q),n.set_field(Te,ae,"z",Re),n.set_field(Te,Ie,"x",nt),n.set_field(Te,Ie,"y",Ye),n.set_field(Te,Ie,"z",$),n.set_field(Te,Jn,"side",ie)}},v=n.query(ae,Ie,Ht,xt,Jn,Hl);for(const d of v.archetypes)_(d,!0);const m=n.query(ae,Ie,Ht,xt,Jn,Wl);for(const d of m.archetypes)_(d,!1)},dispose:t}))}class iv{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t)}off(e,t){const i=this.listeners.get(e);if(i){const s=i.indexOf(t);s>-1&&i.splice(s,1)}}emit(e,t){const i=this.listeners.get(e);i&&i.forEach(s=>s(t))}}const Tn=new iv;Tn.on("ballBounce",n=>console.log("Ball bounce:",n));function sv(n){return Zi(e=>{let t=!0,i=0;return{update:r=>{if(r===0)return;const o=n.resource(So);i>0&&(i-=r);const a=[];for(const c of n.query(ae,Ie,$i,mi,Dh)){const l=c.get_column(ae,"x"),h=c.get_column(ae,"y"),u=c.get_column(ae,"z"),f=c.get_column(Ie,"x"),p=c.get_column(Ie,"y"),_=c.get_column(Ie,"z"),v=c.get_column($i,"size"),m=c.get_column(mi,"minX"),d=c.get_column(mi,"minY"),y=c.get_column(mi,"minZ"),E=c.get_column(mi,"maxX"),S=c.get_column(mi,"maxY"),b=c.get_column(mi,"maxZ"),A=c.entity_ids;for(let w=0;w<c.entity_count;w++){const g=A[w],M={x:l[w],y:h[w],z:u[w]},O={x:f[w],y:p[w],z:_[w]},C={size:v[w]},D={minX:m[w],minY:d[w],minZ:y[w],maxX:E[w],maxY:S[w],maxZ:b[w]};let N=O.x,V=O.y,U=O.z;N+=o.get("x")*r,V+=o.get("y")*r,U+=o.get("z")*r;let B=M.x+N*r,I=M.y+V*r,j=M.z+U*r;const Z=C.size*.5,le=D.minX+Z,ce=D.maxX-Z,Q=D.minY+Z,Re=D.maxY-Z,nt=D.minZ+Z,Ye=D.maxZ-Z,$=I<=Q;t&&$&&V<0&&Tn.emit("ballBounce",{z:j,y:I}),t=!$;const ne=n.query(Xe);let ie=!1;if(ne.archetypes.length>0&&ne.archetypes[0].get_column(Xe,"phase")[0]!==2&&(ie=!0),i<=0&&!ie)for(const Te of n.query(ae,Ie,xt,Jn)){const Se=Te.get_column(ae,"x")[0],Ce=Te.get_column(ae,"y")[0],$e=Te.get_column(ae,"z")[0],He=Te.get_column(Ie,"x")[0],ke=Te.get_column(xt,"playerType")[0],it=Te.get_column(xt,"facingForward")[0],Ne=Te.get_column(Jn,"side")[0],gt=Ne*.5,P=Se+gt,ct=Ce+.5,We=$e+(it===1?-.4:.4),Ze=.6,xe=B-P,R=I-ct,x=j-We,F=Math.sqrt(xe*xe+R*R+x*x);if(console.log(`Player ${ke}: pos=(${Se.toFixed(2)}, ${Ce.toFixed(2)}, ${$e.toFixed(2)}), racketSide=${Ne}, racket=(${P.toFixed(2)}, ${ct.toFixed(2)}, ${We.toFixed(2)}), ball=(${B.toFixed(2)}, ${I.toFixed(2)}, ${j.toFixed(2)}), dist=${F.toFixed(2)}`),F<Ze+Z){console.log(`HIT Player ${ke}!`);const se=ke===0?1:-1,be=He*3;N=xe*2+be,V=4,U=se*10,I=ct+Ze+Z,i=.3,Tn.emit("ballHit",{player:ke});break}const Y=B-M.x,K=I-M.y,X=j-M.z,me=Math.sqrt(Y*Y+K*K+X*X);if(me>.01){const se=Math.max(0,Math.min(1,((P-M.x)*Y+(ct-M.y)*K+(We-M.z)*X)/(me*me))),be=M.x+se*Y,Pe=M.y+se*K,J=M.z+se*X,te=be-P,ge=Pe-ct,ve=J-We,he=Math.sqrt(te*te+ge*ge+ve*ve);if(console.log(`  Ray check: closestDist=${he.toFixed(2)}, racketRadius=${Ze}`),he<Ze+Z){console.log(`RAY HIT Player ${ke}!`);const Be=ke===0?1:-1,L=1-he/(Ze+Z),oe=He*3;N=te/he*5*L+oe,V=4,U=Be*12,I=Math.max(I,ct+Ze+Z),i=.3,Tn.emit("ballHit",{player:ke});break}}}B<le?(B=le,N=-N*.8):B>ce&&(B=ce,N=-N*.8),I<Q?(I=Q,V=-V*.8,Math.abs(V)<.1&&(V=0)):I>Re&&(I=Re,V=-V*.8),j<nt?(j=nt,U=-U*.8):j>Ye&&(j=Ye,U=-U*.8),a.push({entityId:g,newPosX:B,newPosY:I,newPosZ:j,newVelX:N,newVelY:V,newVelZ:U})}}for(const{entityId:c,newPosX:l,newPosY:h,newPosZ:u,newVelX:f,newVelY:p,newVelZ:_}of a){const v=c;n.set_field(v,ae,"x",l),n.set_field(v,ae,"y",h),n.set_field(v,ae,"z",u),n.set_field(v,Ie,"x",f),n.set_field(v,Ie,"y",p),n.set_field(v,Ie,"z",_)}},dispose:e}})}const pa=0,ma=1,rv=2;function ov(n,e,t,i){return Zi(s=>{let r=!1;return{update:a=>{const c=n.query(ae,xt),l=n.query(ae,Ie),h=n.query(Xe);if(h.archetypes.length===0)return;const u=h.archetypes[0],f=u.get_column(Xe,"phase"),p=u.get_column(Xe,"serverPlayer"),_=u.get_column(Xe,"throwTime"),v=u.entity_ids[0],m=f[0],d=p[0];_[0];let y={x:0,y:0,z:0},E={x:0,y:0,z:0};for(const b of c){const A=b.get_column(ae,"x"),w=b.get_column(ae,"y"),g=b.get_column(ae,"z"),M=b.get_column(xt,"playerType");for(let O=0;O<b.entity_count;O++)if(M[O]===d){y={x:A[O],y:w[O],z:g[O]};break}}for(const b of l){const A=b.get_column(ae,"x"),w=b.get_column(ae,"y"),g=b.get_column(ae,"z"),M=b.get_column(Ie,"x"),O=b.get_column(Ie,"y"),C=b.get_column(Ie,"z");E={x:A[0],y:w[0],z:g[0]},M[0],O[0],C[0]}if(m===ma){const b=E.x-y.x,A=E.z-y.z;Math.sqrt(b*b+A*A)<.5&&E.y<y.y+.3&&(n.set_field(v,Xe,"phase",pa),n.set_field(v,Xe,"throwTime",0))}if(m===pa){const b=n.query(ae);if(b.archetypes.length>0){const w=b.archetypes[0].entity_ids[0],g=d===0?-.5:.5;n.set_field(w,ae,"x",y.x+g),n.set_field(w,ae,"y",y.y+.8),n.set_field(w,ae,"z",y.z)}}const S=e()&&!r;if(r=e(),S){if(m===pa)n.set_field(v,Xe,"phase",ma),n.set_field(v,Xe,"throwTime",0),n.set_field(l.archetypes[0].entity_ids[0],ae,"x",y.x),n.set_field(l.archetypes[0].entity_ids[0],ae,"y",y.y+1.5),n.set_field(l.archetypes[0].entity_ids[0],ae,"z",y.z),n.set_field(l.archetypes[0].entity_ids[0],Ie,"x",0),n.set_field(l.archetypes[0].entity_ids[0],Ie,"y",4),n.set_field(l.archetypes[0].entity_ids[0],Ie,"z",0);else if(m===ma){n.set_field(v,Xe,"phase",rv);const w=4*t()+(Math.random()-.5)*1,g=3+Math.random()*2,M=d===0?8:-8;n.set_field(l.archetypes[0].entity_ids[0],Ie,"x",w),n.set_field(l.archetypes[0].entity_ids[0],Ie,"y",g),n.set_field(l.archetypes[0].entity_ids[0],Ie,"z",M),Tn.emit("ballHit",{player:d});const O=n.query(ae,xt);for(const C of O){const D=C.get_column(ae,"x"),N=C.get_column(ae,"y"),V=C.get_column(ae,"z"),U=C.get_column(xt,"playerType");for(let B=0;B<C.entity_count;B++)if(U[B]===d){const I=C.entity_ids[B];n.set_field(I,ae,"x",D[B]),n.set_field(I,ae,"y",N[B]),n.set_field(I,ae,"z",V[B]);break}}}}},dispose:s}})}const Wr=0,_u=2,gu=23.77,xu=10.97,vu=["0","15","30","40","ADV"];function av(n,e){return Zi(t=>{let i=0,s=0;const[r,o]=ft(0),[a,c]=ft(0),[l,h]=ft(0),u=()=>{e&&e(r(),a(),l())},f=()=>{const m=r(),d=a();let y,E;return m>=4&&d>=4?m===d?(y="40",E="40"):m>d?(y="ADV",E="40"):(y="40",E="ADV"):(y=vu[Math.min(m,4)],E=vu[Math.min(d,4)]),{p0:y,p1:E,server:l()}},p=m=>{const d=n.query(Xe);if(d.archetypes.length===0)return;const y=d.archetypes[0],E=y.get_column(Xe,"phase"),S=y.get_column(Xe,"serverPlayer"),b=y.entity_ids[0],A=E[0],w=S[0];if(A!==_u)return;const g=m.z<0,M=m.z>0;if(g&&(i++,console.log(`Bounce on P0 side: ${i}`),i>=2)){console.log("P0 double bounce! Point to P1"),c(a()+1),h(1-w),u();const O=l();n.set_field(b,Xe,"phase",Wr),n.set_field(b,Xe,"serverPlayer",O),_(n,w,O,r(),a());return}if(M&&(s++,console.log(`Bounce on P1 side: ${s}`),s>=2)){console.log("P1 double bounce! Point to P0"),o(r()+1),h(1-w),u();const O=l();n.set_field(b,Xe,"phase",Wr),n.set_field(b,Xe,"serverPlayer",O),_(n,w,O,r(),a());return}};Tn.on("ballBounce",p);const _=(m,d,y,E,S)=>{const b=m.query(ae,xt);let A={x:0,z:0};for(const g of b){const M=g.get_column(ae,"x"),O=g.get_column(ae,"y"),C=g.get_column(ae,"z"),D=g.get_column(xt,"playerType");for(let N=0;N<g.entity_count;N++)if(D[N]===y){A={x:M[N],y:O[N],z:C[N]};break}}const w=m.query(ae,Ie);if(w.archetypes.length>0){const M=w.archetypes[0].entity_ids[0];m.set_field(M,ae,"x",A.x),m.set_field(M,ae,"y",.1),m.set_field(M,ae,"z",A.z),m.set_field(M,Ie,"x",0),m.set_field(M,Ie,"y",0),m.set_field(M,Ie,"z",0)}i=0,s=0,console.log(`Reset to server ${y}, score: P0=${E}, P1=${S}`)};return{update:m=>{const d=n.query(Xe);if(d.archetypes.length===0)return;const y=d.archetypes[0],E=y.get_column(Xe,"phase"),S=y.get_column(Xe,"serverPlayer"),b=y.entity_ids[0],A=E[0],w=S[0];if(A!==_u){i=0,s=0;return}const g=n.query(ae,Ie,$i);if(g.archetypes.length===0)return;const M=g.archetypes[0],O=M.get_column(ae,"x"),C=M.get_column(ae,"y"),D=M.get_column(ae,"z"),N=M.get_column(Ie,"x"),V=M.get_column(Ie,"y"),U=M.get_column(Ie,"z");M.entity_ids[0];const B={x:O[0],y:C[0],z:D[0]};if(N[0],V[0],U[0],B.z<-gu/2-.5||B.z>gu/2+.5||B.x<-xu/2-.5||B.x>xu/2+.5)if(console.log("Ball out of bounds"),B.z<0){c(a()+1),h(1-w),u();const I=l();n.set_field(b,Xe,"phase",Wr),n.set_field(b,Xe,"serverPlayer",I),_(n,w,I,r(),a())}else{o(r()+1),h(1-w),u();const I=l();n.set_field(b,Xe,"phase",Wr),n.set_field(b,Xe,"serverPlayer",I),_(n,w,I,r(),a())}},dispose:()=>{Tn.off("ballBounce",p),t()},getScore:f}})}const _a=0,yu=1,ga=2;function lv(n,e,t){if(e.z>=0)return null;const i=.05,s=e.y,r=n.y,a=.5*t,c=s,l=r-i,h=c*c-4*a*l;if(h<0)return null;const u=(-c-Math.sqrt(h))/(2*a);return u<0?null:{x:n.x+e.x*u,z:n.z+e.z*u,time:u}}function cv(n){return Zi(e=>{let t=0;return{update:s=>{const o=n.resource(So).get("y");t>0&&(t-=s);const a=n.query(ae,Ie,Ht,xt,Wl),c=n.query(ae,Ie,$i),l=n.query(Xe);let h={x:0,y:0,z:0},u={x:0,y:0,z:0};for(const d of c){const y=d.get_column(ae,"x"),E=d.get_column(ae,"y"),S=d.get_column(ae,"z"),b=d.get_column(Ie,"x"),A=d.get_column(Ie,"y"),w=d.get_column(Ie,"z");d.entity_count>0&&(h={x:y[0],y:E[0],z:S[0]},u={x:b[0],y:A[0],z:w[0]})}let f=_a,p=0,_=null;if(l.archetypes.length>0){const d=l.archetypes[0],y=d.get_column(Xe,"phase"),E=d.get_column(Xe,"serverPlayer");f=y[0],p=E[0],_=d.entity_ids[0]}const v=0,m=p===v;if(m&&t<=0&&f!==ga){if(f===_a){for(const d of a){d.get_column(ae,"x");const y=d.get_column(xt,"playerType");for(let E=0;E<d.entity_count;E++)if(y[E]===v){const S=d.entity_ids[E];n.set_field(S,Ht,"x",0),n.set_field(S,Ht,"z",0);break}}if(_){n.set_field(_,Xe,"phase",yu),n.set_field(_,Xe,"throwTime",0);let d={x:0,y:0,z:0};for(const y of a){const E=y.get_column(ae,"x"),S=y.get_column(ae,"y"),b=y.get_column(ae,"z"),A=y.get_column(xt,"playerType");for(let w=0;w<y.entity_count;w++)if(A[w]===v){d={x:E[w],y:S[w],z:b[w]};break}}for(const y of c){const E=y.entity_ids[0];n.set_field(E,ae,"x",d.x),n.set_field(E,ae,"y",d.y+1.5),n.set_field(E,ae,"z",d.z),n.set_field(E,Ie,"x",0),n.set_field(E,Ie,"y",4),n.set_field(E,Ie,"z",0)}}}else if(f===yu){let d={x:0,z:0};for(const b of a){const A=b.get_column(ae,"x"),w=b.get_column(ae,"y"),g=b.get_column(ae,"z"),M=b.get_column(xt,"playerType");for(let O=0;O<b.entity_count;O++)if(M[O]===v){d={x:A[O],y:w[O],z:g[O]};break}}const y=h.x-d.x,E=h.z-d.z;if(Math.sqrt(y*y+E*E)<.5&&u.y<1&&h.y>1.5&&_){n.set_field(_,Xe,"phase",ga);for(const b of c){const A=b.entity_ids[0],w=(Math.random()-.5)*1.5,g=3+Math.random()*1.5,M=8;n.set_field(A,Ie,"x",w),n.set_field(A,Ie,"y",g),n.set_field(A,Ie,"z",M)}t=2}}}if(!m||f===ga||f===_a)for(const d of a){const y=d.get_column(ae,"x"),E=d.get_column(ae,"z"),S=d.get_column(xt,"playerType"),b=d.entity_ids;for(let A=0;A<d.entity_count;A++){if(S[A]!==v)continue;const g=y[A],M=E[A];let O=0,C=0;const D=u.z<0&&h.z>M-5,N=u.z>0,V=h.y<2.3;if(D&&!V){const B=lv(h,u,o);if(B){const j=Math.max(-10.885,Math.min(-.5,B.z-1.5))-M;Math.abs(j)>.1&&(C=j>0?1:-1)}else C=-1}else if(D&&V){const I=h.z-1.2-M;Math.abs(I)>.1&&(C=I>0?1:-1)}else if(N){const I=-6-M;Math.abs(I)>.2&&(C=I>0?1:-1)}else{const I=-5-M;Math.abs(I)>.2&&(C=I>0?1:-1)}if(D||h.z<0){const B=h.x-g;Math.abs(B)>.2&&(O=B>0?1:-1)}const U=b[A];n.set_field(U,Ht,"x",O),n.set_field(U,Ht,"z",C)}}},dispose:e}})}function uv(n){const e=new(window.AudioContext||window.webkitAudioContext);let t=!1,i=null,s=null;async function r(){function h(u,f){const p=e.sampleRate,_=Math.ceil(u*p),v=new OfflineAudioContext(2,_,p),m=v.destination;return f(v,m),v.startRendering()}i=await h(.12,(u,f)=>{const v=u.sampleRate*.02,m=u.createBuffer(1,v,u.sampleRate),d=m.getChannelData(0);for(let D=0;D<v;D++)d[D]=Math.random()*2-1;const y=u.createBufferSource();y.buffer=m;const E=u.createGain();E.gain.setValueAtTime(.8,0),E.gain.exponentialRampToValueAtTime(.001,0+.015);const S=u.createBiquadFilter();S.type="highpass",S.frequency.value=2e3,y.connect(S),S.connect(E);const b=u.createOscillator();b.type="sine",b.frequency.setValueAtTime(180,0),b.frequency.exponentialRampToValueAtTime(80,0+.12);const A=u.createOscillator();A.type="triangle",A.frequency.setValueAtTime(350,0),A.frequency.exponentialRampToValueAtTime(120,0+.12*.5);const w=u.createGain();w.gain.setValueAtTime(.6,0),w.gain.exponentialRampToValueAtTime(.001,0+.12);const g=u.createGain();g.gain.setValueAtTime(.3,0),g.gain.exponentialRampToValueAtTime(.001,0+.12*.4);const M=u.createBiquadFilter();M.type="lowpass",M.frequency.setValueAtTime(1500,0),M.frequency.exponentialRampToValueAtTime(400,0+.12);const O=u.createDynamicsCompressor();O.threshold.value=-20,O.knee.value=10,O.ratio.value=8,O.attack.value=.001,O.release.value=.1;const C=u.createGain();C.gain.setValueAtTime(.9,0),E.connect(M),b.connect(w),A.connect(g),w.connect(M),g.connect(M),M.connect(C),C.connect(O),O.connect(f),y.start(0),y.stop(0+.02),b.start(0),b.stop(0+.12),A.start(0),A.stop(0+.12*.5)}),s=await h(.2,(u,f)=>{const v=u.sampleRate*.015,m=u.createBuffer(1,v,u.sampleRate),d=m.getChannelData(0);for(let V=0;V<v;V++)d[V]=Math.random()*2-1;const y=u.createBufferSource();y.buffer=m;const E=u.createGain();E.gain.setValueAtTime(.5,0),E.gain.exponentialRampToValueAtTime(.001,0+.012);const S=u.createBiquadFilter();S.type="bandpass",S.frequency.value=3e3,S.Q.value=1,y.connect(S),S.connect(E);const b=u.createOscillator();b.type="sine",b.frequency.setValueAtTime(250,0),b.frequency.exponentialRampToValueAtTime(100,0+.2);const A=u.createOscillator();A.type="triangle",A.frequency.setValueAtTime(500,0),A.frequency.exponentialRampToValueAtTime(180,0+.2*.3);const w=u.createOscillator();w.type="square",w.frequency.setValueAtTime(120,0),w.frequency.exponentialRampToValueAtTime(60,0+.2);const g=u.createGain();g.gain.setValueAtTime(.5,0),g.gain.exponentialRampToValueAtTime(.001,0+.2);const M=u.createGain();M.gain.setValueAtTime(.25,0),M.gain.exponentialRampToValueAtTime(.001,0+.2*.3);const O=u.createGain();O.gain.setValueAtTime(.15,0),O.gain.exponentialRampToValueAtTime(.001,0+.2);const C=u.createBiquadFilter();C.type="lowpass",C.frequency.setValueAtTime(4e3,0),C.frequency.exponentialRampToValueAtTime(800,0+.2);const D=u.createDynamicsCompressor();D.threshold.value=-18,D.knee.value=12,D.ratio.value=10,D.attack.value=.001,D.release.value=.08;const N=u.createGain();N.gain.setValueAtTime(.8,0),E.connect(C),b.connect(g),A.connect(M),w.connect(O),g.connect(C),M.connect(C),O.connect(C),C.connect(N),N.connect(D),D.connect(f),y.start(0),y.stop(0+.015),b.start(0),b.stop(0+.2),A.start(0),A.stop(0+.2*.3),w.start(0),w.stop(0+.2)}),console.log("Procedural sounds prerendered: bounce and racket hit buffers ready")}r();const o={play:()=>{if(t||!i)return;const h=e;h.state==="suspended"&&h.resume();const u=h.createBufferSource();u.buffer=i,u.connect(h.destination),u.start(0)}},a={play:()=>{if(t||!s)return;const h=e;h.state==="suspended"&&h.resume();const u=h.createBufferSource();u.buffer=s,u.connect(h.destination),u.start(0)}},c=h=>{n()&&o.play()},l=h=>{n()&&a.play()};return Tn.on("ballBounce",c),Tn.on("ballHit",l),{dispose:()=>{t=!0,Tn.off("ballBounce",c),Tn.off("ballHit",l),e.close()}}}var hv=hr('<div style="position:absolute;top:20px;left:50%;transform:translateX(-50%);background-color:rgba(0, 0, 0, 0.7);color:white;padding:15px 30px;border-radius:10px;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;text-align:center;display:flex;flex-direction:column;gap:10px"><div style=display:flex;gap:40px><div><div style=font-size:14px;color:#aaa>P0</div><div></div></div><div style=font-size:20px;color:#888>:</div><div><div style=font-size:14px;color:#aaa>P1</div><div></div></div></div><div style=font-size:12px;color:#ffd700>Serving: P'),fv=hr('<div style="position:absolute;top:20px;right:20px;background-color:rgba(0, 0, 0, 0.7);color:white;padding:8px 15px;border-radius:5px;font-family:Arial, sans-serif;font-size:14px;display:flex;align-items:center;gap:8px"><input type=checkbox style=width:16px;height:16px;cursor:pointer><span>Sound'),dv=hr("<canvas style=width:100%;height:100%;position:absolute;top:0;left:0;z-index:0>");const[Mu,pv]=ft(0),[Su,mv]=ft(0),[_v,gv]=ft(0),[Lh,xv]=ft(!0),vv=["0","15","30","40","ADV"];function Eu(n,e){return n>=4&&e>=4?n===e?"40":n>e?"ADV":"40":vv[Math.min(n,4)]}function yv(){return[(()=>{var n=hv(),e=n.firstChild,t=e.firstChild,i=t.firstChild,s=i.nextSibling,r=t.nextSibling,o=r.nextSibling,a=o.firstChild,c=a.nextSibling,l=e.nextSibling;return l.firstChild,Yr(s,()=>Eu(Mu(),Su())),Yr(c,()=>Eu(Su(),Mu())),Yr(l,_v,null),n})(),(()=>{var n=fv(),e=n.firstChild;return e.addEventListener("change",t=>xv(t.target.checked)),go(Lh,t=>{e.checked=t}),n})()]}let[xa,Mv]=ft(),ln=jx();const Xl=Ih({position:new G(0,0,2.5),velocity:new G(0,0,0),playerType:"Melty",facingForward:!0,reactiveEcs:ln.ecs});ln.ecs.add_component(Xl,Hl,{});ln.ecs.add_component(Xl,Ht,{x:0,z:0});ln.ecs.add_component(Xl,Jn,{side:1});const ql=Ih({position:new G(0,0,-2.5),velocity:new G(0,0,0),playerType:"Cubey",facingForward:!1,reactiveEcs:ln.ecs});ln.ecs.add_component(ql,Wl,{});ln.ecs.add_component(ql,Ht,{x:0,z:0});ln.ecs.add_component(ql,Jn,{side:-1});Jx({width:10.97,length:23.77,netHeight:.914,reactiveEcs:ln.ecs});Qx({position:Gt(()=>new G(0,.1,2.5)),size:Gt(()=>.1),boundary:Gt(()=>new Ns(new G(-5.5,0,-12),new G(5.5,5,12))),reactiveEcs:ln.ecs});const Sv=ln.ecs.create_entity();ln.ecs.add_component(Sv,Xe,{phase:0,serverPlayer:0,throwTime:0});let[Ev,Uh]=ft(!1),[Tv,Nh]=ft(!1),[Tu,Fh]=ft(!1),[bu,Oh]=ft(!1),[bv,Bh]=ft(!1);function Av(){debugger;let n=150,e=W0({position:Gt(()=>new Oe(50,(xa()?.y??0)-50-n)),hitAreaSize:n,outerRingSize:()=>.8*n,knobSize:()=>70}),t=80,i=q0({position:Gt(()=>new Oe((xa()?.x??0)-50-t,(xa()?.y??0)-50-t)),size:()=>t});const s=(c,l)=>{const h=tv(c,Ev,Tv,Tu,bu,e.value),u=()=>bv()||i.pressed(),f=nv(c,u),p=sv(c);ev(c,l);const _=ov(c,u,()=>(Tu()?-1:0)+(bu()?1:0)+e.value().x),v=av(c,(E,S,b)=>{pv(E),mv(S),gv(b)}),m=cv(c),d=uv(Lh),y=[h.dispose,f.dispose,p.dispose,_.dispose,v.dispose,m.dispose,d.dispose];return{update:E=>{h.update(),m.update(E),f.update(E),p.update(E),_.update(E),v.update(E)},dispose:()=>{y.forEach(E=>E())},tennisRules:v}};let r=Gt(()=>!0),[o,a]=ft();return Mf(o,c=>{if(c==null)return;let l=c.getBoundingClientRect();const h=l.width,u=l.height;if(h==0&&u==0){a(void 0),setTimeout(()=>a(c));return}new ResizeObserver(()=>{let g=c.getBoundingClientRect();Mv(new Oe(g.width,g.height))}).observe(c);const p=new hn(50,h/u,.01,100);p.position.set(0,15,16),p.lookAt(0,0,-2);const _=new Td,v=new qd(16777215,.5);_.add(v);const m=new Xd(16777215,1);m.position.set(5,10,7),_.add(m);const d=s(ln.ecs,_),y=new k0({antialias:!0,canvas:c});y.setSize(h,u);let E=0,S=0;const b=1/60,A=.25;let w=g=>{let M=E===0?b:(g-E)/1e3;for(E=g,M>A&&(M=A),S+=M;S>=b;)d.update(b),S-=b;y.render(_,p),r()&&requestAnimationFrame(w)};requestAnimationFrame(w),ys(()=>{d.dispose(),y.dispose()})}),[(()=>{var c=dv(),l=a;return typeof l=="function"||Array.isArray(l)?Al(()=>l,c):a=c,c})(),qr(yv,{}),qr(e.UI,{}),qr(i.UI,{})]}document.body.style.setProperty("overflow","hidden");let bi=document.createElement("div");bi.style.setProperty("position","absolute");bi.style.setProperty("left","0");bi.style.setProperty("top","0");bi.style.setProperty("right","0");bi.style.setProperty("bottom","0");bi.style.setProperty("background-color","black");document.body.append(bi);wf(()=>qr(Av,{}),bi);document.addEventListener("keydown",n=>{switch(n.key){case"ArrowUp":Uh(!0);break;case"ArrowDown":Nh(!0);break;case"ArrowLeft":Fh(!0);break;case"ArrowRight":Oh(!0);break;case" ":Bh(!0);break}});document.addEventListener("keyup",n=>{switch(n.key){case"ArrowUp":Uh(!1);break;case"ArrowDown":Nh(!1);break;case"ArrowLeft":Fh(!1);break;case"ArrowRight":Oh(!1);break;case" ":Bh(!1);break}});
