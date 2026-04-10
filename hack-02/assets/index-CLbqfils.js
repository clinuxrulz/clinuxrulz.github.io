(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Ln extends Error{source;constructor(e){super(),this.source=e}}class ma extends Error{source;constructor(e,t){super(t instanceof Error?t.message:String(t),{cause:t}),this.source=e}}const _l=0,Zs=1,As=2,fo=4,gi=8,Qr=16,yi=32,eo=64,er=128,gl=256,_a=512,Lt=1,dn=2,Jn=4,xs=1,xi=2,xl=3,mt={},Gh={},kh="sp",Mu={},Hh=Symbol("refresh");function Su(n,e){const t=(n.i?.t?n.i.u?.o:n.i?.o)??-1;t>=n.o&&(n.o=t+1);const i=n.o,s=e.l[i];if(s===void 0)e.l[i]=n;else{const r=s.T;r.S=n,n.T=r,s.T=n}i>e.R&&(e.R=i)}function Eu(n,e){let t=n.O;t&(gi|fo)||(t&Zs?n.O=t&-4|As|gi:n.O=t|gi,t&Qr||Su(n,e))}function Tu(n,e){let t=n.O;t&(gi|fo|Qr)||(n.O=t|Qr,Su(n,e))}function cr(n,e){const t=n.O;if(!(t&(gi|Qr)))return;n.O=t&-25;const i=n.o;if(n.T===n)e.l[i]=void 0;else{const s=n.S,r=e.l[i],o=s??r;n===r?e.l[i]=s:n.T.S=s,o.T=n.T}n.T=n,n.S=void 0}function Wh(n){if(!n._){n._=!0;for(let e=0;e<=n.R;e++)for(let t=n.l[e];t!==void 0;t=t.S)t.O&gi&&to(t)}}function to(n,e=As){const t=n.O;if(!((t&(Zs|As))>=e)){n.O=t&-4|e;for(let i=n.I;i!==null;i=i.p)to(i.h,Zs);if(n.A!==null)for(let i=n.A;i!==null;i=i.N)for(let s=i.I;s!==null;s=s.p)to(s.h,Zs)}}function Xr(n,e){for(n._=!1,n.P=0;n.P<=n.R;n.P++){let t=n.l[n.P];for(;t!==void 0;)t.O&gi?e(t):Xh(t,n),t=n.l[n.P]}n.R=0}function Xh(n,e){cr(n,e);let t=n.o;for(let i=n.C;i;i=i.D){const s=i.m,r=s.V||s;r.L&&r.o>=t&&(t=r.o+1)}if(n.o!==t){n.o=t;for(let i=n.I;i!==null;i=i.p)Tu(i.h,e)}}const mr=new Set,kt={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0},On={l:new Array(2e3).fill(void 0),_:!1,P:0,R:0};let Nt=0,De=null,tr=!1,nr=!1;function _r(n){for(const e of Mi){if(e.k||e.U.size>0)continue;const t=e.W[n-1];t.length&&(e.W[n-1]=[],no(t,n))}}function ji(n){nr=n}function Xi(){tr||(tr=!0,!Mt.H&&!nr&&queueMicrotask(ga))}class qh{i=null;G=[[],[]];F=[];created=Nt;addChild(e){this.F.push(e),e.i=this}removeChild(e){const t=this.F.indexOf(e);t>=0&&(this.F.splice(t,1),e.i=null)}notify(e,t,i,s){return this.i?this.i.notify(e,t,i,s):!1}run(e){if(this.G[e-1].length){const t=this.G[e-1];this.G[e-1]=[],no(t,e)}for(let t=0;t<this.F.length;t++)this.F[t].run?.(e)}enqueue(e,t){e&&(yn?Yt(yn).W[e-1].push(t):this.G[e-1].push(t)),Xi()}stashQueues(e){e.G[0].push(...this.G[0]),e.G[1].push(...this.G[1]),this.G=[[],[]];for(let t=0;t<this.F.length;t++){let i=this.F[t],s=e.F[t];s||(s={G:[[],[]],F:[]},e.F[t]=s),i.stashQueues(s)}}restoreQueues(e){this.G[0].push(...e.G[0]),this.G[1].push(...e.G[1]);for(let t=0;t<e.F.length;t++){const i=e.F[t];let s=this.F[t];s&&s.restoreQueues(i)}}}class Qn extends qh{H=!1;M=[];$=[];j=new Set;static K;static Y;static B=null;flush(){if(!this.H){this.H=!0;try{if(Xr(kt,Qn.K),De){if(!Yh(De)){let i=De;Xr(On,Qn.K),this.M=[],this.$=[],this.j=new Set,_r(xs),_r(xi),this.stashQueues(De.Z),Nt++,tr=kt.R>=kt.P,nc(De.M),De=null,Mo(null,!0);return}this.M!==De.M&&this.M.push(...De.M),this.restoreQueues(De.Z),mr.delete(De);const t=De;De=null,nc(this.M),Mo(t)}else mr.size&&Xr(On,Qn.K),Mo();Nt++,tr=kt.R>=kt.P,_r(xs),this.run(xs),_r(xi),this.run(xi)}finally{this.H=!1}}}notify(e,t,i,s){if(t&Lt){if(i&Lt){const r=s!==void 0?s:e.q;De&&r&&!De.X.includes(r.source)&&(De.X.push(r.source),Xi())}return!0}return!1}initTransition(e){if(e&&(e=Au(e)),!(e&&e===De)&&!(!e&&De&&De.J===Nt)){if(!De)De=e??{J:Nt,M:[],X:[],$:[],j:new Set,ee:[],Z:{G:[[],[]],F:[]},te:!1};else if(e){const t=De;t.te=e,e.ee.push(...t.ee);for(const i of Mi)i.ne===t&&(i.ne=e);e.$.push(...t.$);for(const i of t.j)e.j.add(i);mr.delete(t),De=e}mr.add(De),De.J=Nt;for(let t=0;t<this.M.length;t++){const i=this.M[t];i.ne=De,De.M.push(i)}this.M=De.M;for(let t=0;t<this.$.length;t++){const i=this.$[t];i.ne=De,De.$.push(i)}this.$=De.$;for(const t of Mi)t.ne||(t.ne=De);for(const t of this.j)De.j.add(t);this.j=De.j}}}function ws(n,e=!1){const t=n.ie||yn,i=n.re!==void 0;for(let s=n.I;s!==null;s=s.p){if(i&&s.h.oe){s.h.O|=gl;continue}e&&t?(s.h.O|=er,Ru(s.h,t)):e&&(s.h.O|=er,s.h.ie=void 0);const r=s.h;if(r.se===xl){r.ue||(r.ue=!0,r.ce.enqueue(xi,r.ae));continue}const o=s.h.O&yi?On:kt;o.P>s.h.o&&(o.P=s.h.o),Eu(s.h,o)}}function ec(){const n=Mt.M;for(let e=0;e<n.length;e++){const t=n[e];if(t.le!==mt&&(t.fe=t.le,t.le=mt,t.se&&t.se!==xl&&(t.ue=!0)),t.Ee&Lt){const i=t.q?.source;i&&!(i.Ee&Lt)&&(t.Ee&=-6,t.q=null)}else t.Ee&=~Jn;t.L&&Qn.Y(t,!1,!0)}n.length=0}function Mo(n=null,e=!1){let t=!e;if(t&&ec(),e||bu(Mt),kt.R>=kt.P&&Xr(kt,Qn.K),t){ec();const i=n?n.$:Mt.$;for(let s=0;s<i.length;s++){const r=i[s];r.ie=void 0,r.le!==mt&&(r.fe=r.le,r.le=mt);const o=r.Te;r.Te=mt,o!==mt&&r.fe!==o&&ws(r,!0),r.ne=null}i.length=0,n?n.j:Mt.j;for(const s of Mi)(n?s.ne===n:!s.ne)&&(s.k||(s.W[0].length&&no(s.W[0],xs),s.W[1].length&&no(s.W[1],xi)),s.de.ie===s&&(s.de.ie=void 0),s.U.clear(),s.W[0].length=0,s.W[1].length=0,Mi.delete(s),io.delete(s.de))}}function bu(n){for(const e of n.F)e.checkSources?.(),bu(e)}function tc(n){Mt.j.add(n),Xi()}function nc(n){for(let e=0;e<n.length;e++)n[e].ne=De}const Mt=new Qn;function ga(){for(;tr;)Mt.flush()}function no(n,e){for(let t=0;t<n.length;t++)n[t](e)}function Yh(n){if(n.te)return!0;if(n.ee.length)return!1;let e=!0;for(let t=0;t<n.X.length;t++){const i=n.X[t];if(i.Ee&Lt&&i.q?.source===i){e=!1;break}}return e&&(n.te=!0),e}function Au(n){for(;n.te&&typeof n.te=="object";)n=n.te;return n}function $h(n,e){const t=De;try{return De=Au(n),e()}finally{De=t}}const io=new WeakMap,Mi=new Set;function Zh(n){let e=io.get(n);if(e)return Yt(e);const t=n.Se,i=t?.ie?Yt(t.ie):null;return e={de:n,U:new Set,W:[[],[]],k:null,ne:De,Re:i},io.set(n,e),Mi.add(e),n.Oe=!1,e}function Yt(n){for(;n.k;)n=n.k;return n}function wu(n,e){if(n=Yt(n),e=Yt(e),n===e)return n;e.k=n;for(const t of e.U)n.U.add(t);return n.W[0].push(...e.W[0]),n.W[1].push(...e.W[1]),n}function so(n){const e=n.ie;if(!e)return;const t=Yt(e);if(Mi.has(t))return t;n.ie=void 0}function vl(n){return n.Te!==void 0&&n.Te!==mt}function Ru(n,e){const t=Yt(e),i=n.ie;if(i){if(i.k){n.ie=e;return}const s=Yt(i);if(Mi.has(s)){s!==t&&!vl(n)&&(t.Re&&Yt(t.Re)===s?n.ie=e:s.Re&&Yt(s.Re)===t||wu(t,s));return}}n.ie=e}function Cu(n,e,t){const i=typeof e=="object"&&e!==null,s=i&&fn(()=>e[Symbol.asyncIterator]),r=!s&&i&&fn(()=>typeof e.then=="function");if(!r&&!s)return n._e=null,e;n._e=e;let o;const a=l=>{n._e===e&&(Mt.initTransition(n.ne),ro(n,l instanceof Ln?Lt:dn,l),n.J=Nt)},c=(l,u)=>{if(n._e!==e||n.O&(As|er))return;Mt.initTransition(n.ne),yl(n);const h=so(n);if(h&&h.U.delete(n),t)t(l);else if(n.Te!==void 0)n.Te!==void 0&&n.Te!==mt?n.le=l:(n.fe=l,ws(n)),n.J=Nt;else if(h){const f=n.fe,m=n.Ie;(!m||!m(l,f))&&(n.fe=l,n.J=Nt,n.pe&&ot(n.pe,l),ws(n,!0))}else ot(n,()=>l);Xi(),ga(),u?.()};if(r){let l=!1,u=!0;if(e.then(h=>{u?(o=h,l=!0):c(h)},h=>{u||a(h)}),u=!1,!l)throw Mt.initTransition(n.ne),new Ln(Qe)}if(s){const l=e[Symbol.asyncIterator]();let u=!1;const h=()=>{let m,_=!1,g=!0;return l.next().then(p=>{g?(m=p,_=!0):p.done?(Xi(),ga()):c(p.value,h)},p=>{g||a(p)}),g=!1,_&&!m.done?(o=m.value,u=!0,h()):_&&m.done},f=h();if(!u&&!f)throw Mt.initTransition(n.ne),new Ln(Qe)}return o}function yl(n){n.Ee=n.Ee&Jn,n.q=null,sr(n),n.he?.()}function ro(n,e,t,i,s){e===dn&&!(t instanceof ma)&&!(t instanceof Ln)&&(t=new ma(n,t));const r=t instanceof Ln&&t.source===n,o=e===Lt&&n.Te!==void 0&&!r,a=o&&vl(n);if(i||(n.Ee=e|(e!==dn?n.Ee&Jn:0),n.q=t,sr(n)),s&&!i&&Ru(n,s),a&&De&&t instanceof Ln){const u=t.source;De.X.includes(u)||De.X.push(u)}const c=i||a,l=i||o?void 0:s;if(n.he){c?n.he(e,t):n.he();return}for(let u=n.I;u!==null;u=u.p)u.h.J=Nt,u.h.q!==t&&(!u.h.ne&&Mt.M.push(u.h),ro(u.h,e,t,c,l));for(let u=n.A;u!==null;u=u.N)for(let h=u.I;h!==null;h=h.p)h.h.J=Nt,h.h.q!==t&&(!h.h.ne&&Mt.M.push(h.h),ro(h.h,e,t,c,l))}function Ml(n){const e=n.m,t=n.D,i=n.p,s=n.Ae;return i!==null?i.Ae=s:e.Ne=s,s!==null?s.p=i:(e.I=i,i===null&&(e.ge?.(),e.L&&!e.Pe&&!(e.O&yi)&&Kh(e))),t}function Kh(n){cr(n,n.O&yi?On:kt);let e=n.C;for(;e!==null;)e=Ml(e);n.C=null,ur(n,!0)}function So(n,e){const t=e.Ce;if(t!==null&&t.m===n)return;let i=null;const s=e.O&fo;if(s&&(i=t!==null?t.D:e.C,i!==null&&i.m===n)){e.Ce=i;return}const r=n.Ne;if(r!==null&&r.h===e&&(!s||jh(r,e)))return;const o=e.Ce=n.Ne={m:n,h:e,D:i,Ae:r,p:null};t!==null?t.D=o:e.C=o,r!==null?r.p=o:n.I=o}function jh(n,e){const t=e.Ce;if(t!==null){let i=e.C;do{if(i===n)return!0;if(i===t)break;i=i.D}while(i!==null)}return!1}function Pu(n){let e=n.De;for(;e;)e.O|=yi,e.O&gi&&(cr(e,kt),Eu(e,On)),Pu(e),e=e.ye}function ur(n,e=!1,t){if(n.O&eo)return;e&&(n.O=eo);let i=t?n.ve:n.De;for(;i;){const s=i.ye;if(i.C){const r=i;cr(r,r.O&yi?On:kt);let o=r.C;do o=Ml(o);while(o!==null);r.C=null,r.Ce=null}ur(i,!0),i=s}t?n.ve=null:(n.De=null,n.we=0),Jh(n,t)}function Jh(n,e){let t=e?n.be:n.me;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){const s=t[i];s.call(s)}else t.call(t);e?n.be=null:n.me=null}}function Qh(n,e){let t=n;for(;t.Ve&&t.i;)t=t.i;if(t.id!=null)return ef(t.id,t.we++);throw new Error("Cannot get child id from owner without an id")}function Du(n){return Qh(n)}function ef(n,e){const t=e.toString(36),i=t.length-1;return n+(i?String.fromCharCode(64+i):"")+t}function $t(){return Jt?Qe:null}function tf(){return Qe}function vs(n){return Qe&&(Qe.me?Array.isArray(Qe.me)?Qe.me.push(n):Qe.me=[Qe.me,n]:Qe.me=n),n}function Ks(n){const e=Qe,t=n?.transparent??!1,i={id:n?.id??(t?e?.id:e?.id!=null?Du(e):void 0),Ve:t||void 0,t:!0,u:e?.t?e.u:e,De:null,ye:null,me:null,ce:e?.ce??Mt,Le:e?.Le||Mu,we:0,be:null,ve:null,i:e,dispose(s=!0){ur(i,s)}};if(e){const s=e.De;s===null||(i.ye=s),e.De=i}return i}function $i(n,e){const t=Ks(e);return gs(t,()=>n(t.dispose))}function Iu(n,e,t,i,s){let r=!1;const o=po(s?.render?a=>of(()=>n(a)):n,i,{...s,equals:()=>(o.ue=!o.q,r&&o.ce.enqueue(o.se,Eo.bind(o)),!1),lazy:!0});o.ke=i,o.Ue=e,o.xe=t,o.We=void 0,o.se=s?.render?xs:xi,o.he=(a,c)=>{const l=a!==void 0?a:o.Ee,u=c!==void 0?c:o.q;if(l&dn){let h=u;if(o.ce.notify(o,Lt,0),o.se===xi)try{return o.xe?o.xe(h,()=>{o.We?.(),o.We=void 0}):console.error(h)}catch(f){h=f}if(!o.ce.notify(o,dn,dn))throw h}else o.se===xs&&o.ce.notify(o,Lt|dn,l,u)},vi(o,!0),!s?.defer&&(o.se===xi?o.ce.enqueue(o.se,Eo.bind(o)):Eo.call(o)),r=!0,vs(()=>o.We?.())}function Eo(){if(!(!this.ue||this.O&eo)){this.We?.(),this.We=void 0;try{this.We=this.Ue(this.fe,this.ke)}catch(n){if(this.q=new ma(this,n),this.Ee|=dn,!this.ce.notify(this,dn,dn))throw n}finally{this.ke=this.fe,this.ue=!1}}}let nf=null;Qn.K=vi;Qn.Y=ur;let Jt=!1,ys=!1,Qe=null,yn=null,sf=!1;function vi(n,e=!1){const t=n.se;e||(n.ne&&(!t||De)&&De!==n.ne&&Mt.initTransition(n.ne),cr(n,n.O&yi?On:kt),n.ne||t===xl?ur(n):(Pu(n),n.be=n.me,n.ve=n.De,n.me=null,n.De=null,n.we=0));const i=!!(n.O&er),s=n.Te!==void 0&&n.Te!==mt,r=!!(n.Ee&Lt),o=Qe;Qe=n,n.Ce=null,n.O=fo,n.J=Nt;let a=n.le===mt?n.fe:n.le,c=n.o,l=Jt,u=yn;if(Jt=!0,i){const h=so(n);h&&(yn=h)}try{a=Cu(n,n.L(a)),yl(n);const h=so(n);h&&(h.U.delete(n),sr(h.de))}catch(h){if(h instanceof Ln&&yn){const f=Yt(yn);f.de!==n&&(f.U.add(n),n.ie=f,sr(f.de))}ro(n,h instanceof Ln?Lt:dn,h,void 0,h instanceof Ln?n.ie:void 0)}finally{Jt=l,n.O=_l|(e?n.O&gl:0),Qe=o}if(!n.q){const h=n.Ce;let f=h!==null?h.D:n.C;if(f!==null){do f=Ml(f);while(f!==null);h!==null?h.D=null:n.C=null}const m=s?n.Te:n.le===mt?n.fe:n.le;if(!n.Ie||!n.Ie(m,a)){const g=s?n.Te:void 0;e||t&&De!==n.ne||i?(n.fe=a,s&&i&&(n.Te=a,n.le=a)):n.le=a,s&&!i&&r&&!n.Oe&&(n.Te=a),(!s||i||n.Te!==g)&&ws(n,i||s)}else if(s)n.le=a;else if(n.o!=c)for(let g=n.I;g!==null;g=g.p)Tu(g.h,g.h.O&yi?On:kt)}yn=u,(!e||n.Ee&Lt)&&!n.ne&&!(De&&s)&&Mt.M.push(n),n.ne&&t&&De!==n.ne&&$h(n.ne,()=>vi(n))}function Lu(n){if(n.O&Zs)for(let e=n.C;e;e=e.D){const t=e.m,i=t.V||t;if(i.L&&Lu(i),n.O&As)break}(n.O&(As|er)||n.q&&n.J<Nt&&!n._e)&&vi(n),n.O=_l|n.O&gl}function po(n,e,t){const i=t?.transparent??!1,s={id:t?.id??(i?Qe?.id:Qe?.id!=null?Du(Qe):void 0),Ve:i||void 0,Ie:t?.equals!=null?t.equals:ir,Ge:!!t?.pureWrite,ge:t?.unobserved,me:null,ce:Qe?.ce??Mt,Le:Qe?.Le??Mu,we:0,L:n,fe:e,o:0,A:null,S:void 0,T:null,C:null,Ce:null,I:null,Ne:null,i:Qe,ye:null,De:null,O:t?.lazy?_a:_l,Ee:Jn,J:Nt,le:mt,be:null,ve:null,_e:null,ne:null};s.T=s;const r=Qe?.t?Qe.u:Qe;if(Qe){const o=Qe.De;o===null||(s.ye=o),Qe.De=s}return r&&(s.o=r.o+1),!t?.lazy&&vi(s,!0),s}function js(n,e,t=null){const i={Ie:e?.equals!=null?e.equals:ir,Ge:!!e?.pureWrite,Qe:!!e?.Qe,ge:e?.unobserved,fe:n,I:null,Ne:null,J:Nt,V:t,N:t?.A||null,le:mt};return t&&(t.A=i),i}function ir(n,e){return n===e}function fn(n,e){if(!Jt)return n();const t=Jt;Jt=!1;try{return n()}finally{Jt=t}}function Vi(n){let e=Qe;e?.t&&(e=e.u),n.O&_a&&(n.O&=~_a,vi(n,!0));const t=n.V||n;if(e&&Jt&&(n.L&&n.O&eo&&vi(n),So(n,e),t.L)){const i=n.O&yi;t.o>=(i?On.P:kt.P)&&(to(e),Wh(i?On:kt),Lu(t));const s=t.o;s>=e.o&&n.i!==e&&(e.o=s+1)}if(t.Ee&Lt){const i=t.q?.source;if(i&&!(i.Ee&Lt))yl(t);else if(e&&!(ys&&t.ne&&De!==t.ne))if(yn){const s=t.ie,r=Yt(yn);if(s&&Yt(s)===r&&!vl(t))throw!Jt&&n!==e&&So(n,e),t.q}else throw!Jt&&n!==e&&So(n,e),t.q;else if(!e&&t.Ee&Jn)throw t.q}if(n.L&&n.Ee&dn){if(n.J<Nt)return vi(n,!0),Vi(n);throw n.q}return n.Te!==void 0&&n.Te!==mt?n.Te:!e||yn!==null&&(n.Te!==void 0||n.ie||t===n&&ys||t.Ee&Lt)||n.le===mt||ys&&n.ne&&De!==n.ne?n.fe:n.le}function ot(n,e){n.ne&&De!==n.ne&&Mt.initTransition(n.ne);const t=n.Te!==void 0&&!nr,i=n.Te!==void 0&&n.Te!==mt,s=t?i?n.Te:n.fe:n.le===mt?n.fe:n.le;if(typeof e=="function"&&(e=e(s)),!(!n.Ie||!n.Ie(s,e)||!!(n.Ee&Jn)))return t&&i&&n.L&&(ws(n,!0),Xi()),e;if(t){const o=n.Te===mt;!o&&n.ne&&Mt.initTransition(n.ne),o&&(n.le=n.fe,Mt.$.push(n)),n.Oe=!0;const a=Zh(n);n.ie=a,n.Te=e}else n.le===mt&&Mt.M.push(n),n.le=e;return sr(n),n.pe&&ot(n.pe,e),n.J=Nt,ws(n,t),Xi(),e}function gs(n,e){const t=Qe,i=Jt;Qe=n,Jt=!1;try{return e()}finally{Qe=t,Jt=i}}function rf(n){const e=n;if(n.Te!==void 0&&n.Te!==mt){if(e.Ee&Lt&&!(e.Ee&Jn))return!0;if(n.Se){const t=n.ie?Yt(n.ie):null;return!!(t&&t.U.size>0)}return!0}return n.le!==mt&&!(e.Ee&Jn)?!0:!!(e.Ee&Lt&&!(e.Ee&Jn))}function sr(n){if(n.Fe){const e=rf(n),t=n.Fe;if(ot(t,e),!e&&t.ie){const i=so(n);if(i&&i.U.size>0){const s=Yt(t.ie);s!==i&&wu(i,s)}io.delete(t),t.ie=void 0}}}function of(n,e=!0){const t=ys;ys=e;try{return n()}finally{ys=t}}function Ms(n){const e=Vi.bind(null,n);return e.$r=!0,e}function af(n,e,t){if(typeof n=="function"){const s=po(n,e,t);return[Ms(s),ot.bind(null,s)]}const i=js(n,e);return[Ms(i),ot.bind(null,i)]}function Sl(n,e,t){let i=po(n,e,t);return Ms(i)}function lf(n,e,t,i){Iu(n,e.effect||e,e.error,t,i)}function cf(n,e,t,i){Iu(n,e,void 0,t,{render:!0,...i})}function ic(n){return n?.[Ss]?.[pt]??n}function Ji(n,e,t,i,s){return s&&i in s?s[i]:e&&i in e?e[i]:n[i]}function uf(n,e,t){const i=Bu(n,e),s=Object.keys(t);return Array.from(new Set([...i,...s]))}function ps(n,e,t){const i=e?.[Ss];if(!i)return;const s=i[Xt],r=i[dt],o=i[ft];let a=i[pt];if(!(n===s&&!r&&!o)){if((i[Nu]||xa).set(n,i[Rn]),i[Xt]=n,i[dt]=void 0,Array.isArray(s)){let c=!1;const l=Ji(s,r,a,"length",o);if(n.length&&l&&n[0]&&t(n[0])!=null){let u,h,f,m,_,g,p,d;for(f=0,m=Math.min(l,n.length);f<m&&((g=Ji(s,r,a,f,o))===n[f]||g&&n[f]&&t(g)===t(n[f]));f++)ps(n[f],rn(g,i),t);const y=new Array(n.length),T=new Map;for(m=l-1,_=n.length-1;m>=f&&_>=f&&((g=Ji(s,r,a,m,o))===n[_]||g&&n[_]&&t(g)===t(n[_]));m--,_--)y[_]=g;if(f>_||f>m){for(h=f;h<=_;h++)c=!0,i[pt][h]&&ot(i[pt][h],rn(n[h],i));for(;h<n.length;h++){c=!0;const S=rn(y[h],i);i[pt][h]&&ot(i[pt][h],S),ps(n[h],S,t)}c&&i[pt][on]&&ot(i[pt][on],void 0),l!==n.length&&i[pt].length&&ot(i[pt].length,n.length);return}for(p=new Array(_+1),h=_;h>=f;h--)g=n[h],d=g&&t(g),u=T.get(d),p[h]=u===void 0?-1:u,T.set(d,h);for(u=f;u<=m;u++)g=Ji(s,r,a,u,o),d=g&&t(g),h=T.get(d),h!==void 0&&h!==-1&&(y[h]=g,h=p[h],T.set(d,h));for(h=f;h<n.length;h++)if(h in y){const S=rn(y[h],i);i[pt][h]&&ot(i[pt][h],S),ps(n[h],S,t)}else i[pt][h]&&ot(i[pt][h],rn(n[h],i));f<n.length&&(c=!0)}else if(n.length)for(let u=0,h=n.length;u<h;u++){const f=Ji(s,r,a,u,o);Pn(f)?ps(n[u],rn(f,i),t):i[pt][u]&&ot(i[pt][u],n[u])}l!==n.length&&(c=!0,i[pt].length&&ot(i[pt].length,n.length)),c&&i[pt][on]&&ot(i[pt][on],void 0);return}if(a){const c=a[on],l=c?uf(s,r,n):Object.keys(a);for(let u=0,h=l.length;u<h;u++){const f=l[u],m=a[f],_=ic(Ji(s,r,a,f,o));let g=ic(n[f]);_!==g&&(!_||!Pn(_)||!Pn(g)||t(_)!=null&&t(_)!==t(g)?(c&&ot(c,void 0),m&&ot(m,Pn(g)?rn(g,i):g)):ps(g,rn(_,i),t))}}if(a=i[ms]){const c=Object.keys(a);for(let l=0,u=c.length;l<u;l++){const h=c[l];ot(a[h],h in n)}}}}function sc(n,e){return t=>{if(t==null)throw new Error("Cannot reconcile null or undefined state");const i=typeof e=="string"?r=>r[e]:e;if(i(t)!==void 0&&i(n)!==i(t))throw new Error("Cannot reconcile states with different identity");ps(n,t,i)}}function hf(n,e={},t){let i;const s=new WeakMap,r=c=>{c[oo]=o,c[Nu]=s,Object.defineProperty(c,Fi,{get(){return i},configurable:!0})},o=c=>{if(s.has(c))return s.get(c);if(c[Ss]?.[oo]===o)return c;const l=Fu(c,zu,r);return s.set(c,l),l},a=o(e);return i=po(()=>{const c=tf();ya(new Proxy(a,Uu),l=>{const u=Cu(c,n(l),h=>{h!==l&&h!==void 0&&ya(a,sc(h,t?.key||"id"))});u!==l&&u!==void 0&&sc(u,t?.key||"id")(a)})}),i.Pe=!0,{store:a,node:i}}const Uu={get(n,e){let t;Qi(!0),ji(!0);try{t=n[e]}finally{Qi(!1),ji(!1)}return typeof t=="object"&&t!==null?new Proxy(t,Uu):t},set(n,e,t){Qi(!0),ji(!0);try{n[e]=t}finally{Qi(!1),ji(!1)}return!0},deleteProperty(n,e){Qi(!0),ji(!0);try{delete n[e]}finally{Qi(!1),ji(!1)}return!0}},on=Symbol(0),Ss=Symbol(0),Rn=Symbol(0),xn=Symbol(0),Xt="v",dt="o",ft="x",pt="n",ms="h",oo="w",Nu="l",Fi="f",_s="p";function Fu(n,e=zu,t){let i;return Array.isArray(n)?(i=[],i.v=n):i={v:n},t&&t(i),i[Rn]=new Proxy(i,e)}const xa=new WeakMap;function rn(n,e){if(e?.[oo])return e[oo](n,e);let t=n[Rn]||xa.get(n);return t||xa.set(n,t=Fu(n)),t}function Pn(n){return n!=null&&typeof n=="object"&&!Object.isFrozen(n)}let Ou=!1;function Qi(n){Ou=n}function To(n){return Ou||!!Oi?.has(n)}function Xs(n,e){let t=n[e];return t||(n[e]=t=Object.create(null)),t}function va(n,e,t,i,s=ir,r,o){if(n[e])return n[e];const a=js(t,{equals:s,unobserved(){delete n[e]}},i);if(r&&(a.Te=mt),o&&e in o){const c=o[e];a.re=c===void 0?Gh:c}return n[e]=a}function rc(n,e=on){$t()&&Vi(va(Xs(n,pt),e,void 0,n[Fi],!1,n[_s]))}function Bu(n,e,t=!0){const i=fn(()=>t?Object.keys(n):Reflect.ownKeys(n));if(!e)return i;const s=new Set(i),r=Reflect.ownKeys(e);for(const o of r)e[o]!==xn?s.add(o):s.delete(o);return Array.from(s)}function oc(n,e,t){let i=n;if(e&&t in e){if(i[t]===xn)return;t in i||(i=e)}return Reflect.getOwnPropertyDescriptor(i,t)}let Oi=null;const zu={get(n,e,t){if(e===Ss)return n;if(e===Rn)return t;if(e===Hh)return n[Fi];if(e===on)return rc(n),t;const i=Xs(n,pt),s=i[e],r=n[ft]&&e in n[ft],o=r||n[dt]&&e in n[dt],a=!!n[Xt][Ss],c=r?n[ft]:n[dt]&&e in n[dt]?n[dt]:n[Xt];if(!s){const u=Object.getOwnPropertyDescriptor(c,e);if(u&&u.get)return u.get.call(t)}if(To(t)){let u=s&&(o||!a)?s.Te!==void 0&&s.Te!==mt?s.Te:s.le!==mt?s.le:s.fe:c[e];if(u===xn&&(u=void 0),!Pn(u))return u;const h=rn(u,n);return Oi?.add(h),h}let l=s?o||!a?Vi(i[e]):(Vi(i[e]),c[e]):c[e];if(l===xn&&(l=void 0),!s){if(!o&&typeof l=="function"&&!c.hasOwnProperty(e)){let u;return!Array.isArray(n[Xt])&&(u=Object.getPrototypeOf(n[Xt]))&&u!==Object.prototype?l.bind(c):l}else if($t())return Vi(va(i,e,Pn(l)?rn(l,n):l,n[Fi],ir,n[_s],n[kh]))}return Pn(l)?rn(l,n):l},has(n,e){if(e===Rn||e===on||e==="__proto__")return!0;const t=n[ft]&&e in n[ft]?n[ft][e]!==xn:n[dt]&&e in n[dt]?n[dt][e]!==xn:e in n[Xt];return $t()&&Vi(va(Xs(n,ms),e,t,n[Fi],ir,n[_s])),t},set(n,e,t){const i=n[Rn];if(To(i)){if(n[_s]){const s=n[Fi];s?.ne&&Mt.initTransition(s.ne)}fn(()=>{const s=n[Xt],r=s[e];sf&&typeof e!="symbol"&&(n[Fi]?.Ee??0)&Lt;const o=n[_s]&&!nr,a=o?ft:dt;o&&tc(i);const c=n[ft]&&e in n[ft]?n[ft][e]:n[dt]&&e in n[dt]?n[dt][e]:r,l=t?.[Ss]?.[Xt]??t;if(c===l)return!0;const u=n[ft]?.length||n[dt]?.length||s.length;l!==void 0&&l===r?delete n[a][e]:(n[a]||(n[a]=Object.create(null)))[e]=l;const h=Pn(l);n[ms]?.[e]&&ot(n[ms][e],!0);const f=Xs(n,pt);if(f[e]&&ot(f[e],()=>h?rn(l,n):l),Array.isArray(s))if(e==="length")f.length&&ot(f.length,l);else{const m=parseInt(e)+1;m>u&&f.length&&ot(f.length,m)}f[on]&&ot(f[on],void 0)})}return!0},deleteProperty(n,e){const t=n[ft]?.[e]===xn,i=n[dt]?.[e]===xn;return To(n[Rn])&&!t&&!i&&fn(()=>{const s=n[_s]&&!nr,r=s?ft:dt;s&&tc(n[Rn]);const o=n[ft]&&e in n[ft]?n[ft][e]:n[dt]&&e in n[dt]?n[dt][e]:n[Xt][e];if(e in n[Xt]||n[dt]&&e in n[dt])(n[r]||(n[r]=Object.create(null)))[e]=xn;else if(n[r]&&e in n[r])delete n[r][e];else return!0;n[ms]?.[e]&&ot(n[ms][e],!1);const a=Xs(n,pt);a[e]&&ot(a[e],void 0),a[on]&&ot(a[on],void 0)}),!0},ownKeys(n){rc(n);let e=Bu(n[Xt],n[dt],!1);if(n[ft]){const t=new Set(e);for(const i of Reflect.ownKeys(n[ft]))n[ft][i]!==xn?t.add(i):t.delete(i);e=Array.from(t)}return e},getOwnPropertyDescriptor(n,e){if(e===Rn)return{value:n[Rn],writable:!0,configurable:!0};if(n[ft]&&e in n[ft]){if(n[ft][e]===xn)return;const t=oc(n[Xt],n[dt],e);return t?{...t,value:n[ft][e]}:{value:n[ft][e],writable:!0,enumerable:!0,configurable:!0}}return oc(n[Xt],n[dt],e)},getPrototypeOf(n){return Object.getPrototypeOf(n[Xt])}};function ya(n,e){const t=Oi;Oi=new Set,Oi.add(n);try{const i=e(n);if(i!==n&&i!==void 0)if(Array.isArray(i)){for(let s=0,r=i.length;s<r;s++)n[s]=i[s];n.length=i.length}else new Set([...Object.keys(n),...Object.keys(i)]).forEach(r=>{r in i?n[r]=i[r]:delete n[r]})}finally{Oi.clear(),Oi=t}}function ff(n,e,t){const i=typeof n=="function",s=i?hf(n,e,t).store:rn(n);return[s,r=>ya(s,r)]}const Vu=Symbol(0);function qs(n,e,t=0){let i,s=n;if(t<e.length-1){i=e[t];const o=typeof i,a=Array.isArray(n);if(Array.isArray(i)){for(let c=0;c<i.length;c++)e[t]=i[c],qs(n,e,t);e[t]=i;return}else if(a&&o==="function"){for(let c=0;c<n.length;c++)i(n[c],c)&&(e[t]=c,qs(n,e,t));e[t]=i;return}else if(a&&o==="object"){const{from:c=0,to:l=n.length-1,by:u=1}=i;for(let h=c;h<=l;h+=u)e[t]=h,qs(n,e,t);e[t]=i;return}else if(t<e.length-2){qs(n[i],e,t+1);return}s=n[i]}let r=e[e.length-1];if(!(typeof r=="function"&&(r=r(s),r===s))&&!(i===void 0&&r==null))if(r===Vu)delete n[i];else if(i===void 0||Pn(s)&&Pn(r)&&!Array.isArray(r)){const o=i!==void 0?n[i]:n,a=Object.keys(r);for(let c=0;c<a.length;c++)o[a[c]]=r[a[c]]}else n[i]=r}Object.assign(function(...e){return t=>{qs(t,e)}},{DELETE:Vu});function bo(n,e,t){const s=e.length>1,r=e;return Sl(df.bind({Me:Ks(),$e:0,je:n,Ke:[],Ye:r,Be:[],Ze:[],qe:void 0,Xe:void 0,ze:s?[]:void 0,Je:t?.fallback}))}const Ao={pureWrite:!0};function df(){const n=this.je()||[],e=n.length;return n[on],gs(this.Me,()=>{let t,i,s=this.Xe?()=>(this.Xe[i]=js(n[i],Ao),this.ze&&(this.ze[i]=js(i,Ao)),this.Ye(Ms(this.Xe[i]),this.ze?Ms(this.ze[i]):void 0)):this.ze?()=>{const r=n[i];return this.ze[i]=js(i,Ao),this.Ye(()=>r,Ms(this.ze[i]))}:()=>{const r=n[i];return this.Ye(()=>r)};if(e===0)this.$e!==0&&(this.Me.dispose(!1),this.Ze=[],this.Ke=[],this.Be=[],this.$e=0,this.Xe&&(this.Xe=[]),this.ze&&(this.ze=[])),this.Je&&!this.Be[0]&&(this.Be[0]=gs(this.Ze[0]=Ks(),this.Je));else if(this.$e===0){for(this.Ze[0]&&this.Ze[0].dispose(),this.Be=new Array(e),i=0;i<e;i++)this.Ke[i]=n[i],this.Be[i]=gs(this.Ze[i]=Ks(),s);this.$e=e}else{let r,o,a,c,l,u,h,f=new Array(e),m=new Array(e),_=this.Xe?new Array(e):void 0,g=this.ze?new Array(e):void 0;for(r=0,o=Math.min(this.$e,e);r<o&&(this.Ke[r]===n[r]||this.Xe&&ac(this.qe,this.Ke[r],n[r]));r++)this.Xe&&ot(this.Xe[r],n[r]);for(o=this.$e-1,a=e-1;o>=r&&a>=r&&(this.Ke[o]===n[a]||this.Xe&&ac(this.qe,this.Ke[o],n[a]));o--,a--)f[a]=this.Be[o],m[a]=this.Ze[o],_&&(_[a]=this.Xe[o]),g&&(g[a]=this.ze[o]);for(u=new Map,h=new Array(a+1),i=a;i>=r;i--)c=n[i],l=this.qe?this.qe(c):c,t=u.get(l),h[i]=t===void 0?-1:t,u.set(l,i);for(t=r;t<=o;t++)c=this.Ke[t],l=this.qe?this.qe(c):c,i=u.get(l),i!==void 0&&i!==-1?(f[i]=this.Be[t],m[i]=this.Ze[t],_&&(_[i]=this.Xe[t]),g&&(g[i]=this.ze[t]),i=h[i],u.set(l,i)):this.Ze[t].dispose();for(i=r;i<e;i++)i in f?(this.Be[i]=f[i],this.Ze[i]=m[i],_&&(this.Xe[i]=_[i],ot(this.Xe[i],n[i])),g&&(this.ze[i]=g[i],ot(this.ze[i],i))):this.Be[i]=gs(this.Ze[i]=Ks(),s);this.Be=this.Be.slice(0,this.$e=e),this.Ke=n.slice(0)}}),this.Be}function ac(n,e,t){return n?n(e)===n(t):!0}function Gu(n,e){if(typeof n=="function"&&!n.length){if(e?.doNotUnwrap)return n;do n=n();while(typeof n=="function"&&!n.length)}if(!(e?.skipNonRendered&&(n==null||n===!0||n===!1||n===""))){if(Array.isArray(n)){let t=[];return Ma(n,t,e)?()=>{let i=[];return Ma(t,i,{...e,doNotUnwrap:!1}),i}:t}return n}}function Ma(n,e=[],t){let i=null,s=!1;for(let r=0;r<n.length;r++)try{let o=n[r];if(typeof o=="function"&&!o.length){if(t?.doNotUnwrap){e.push(o),s=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?s=Ma(o,e,t):t?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||e.push(o)}catch(o){if(!(o instanceof Ln))throw o;i=o}if(i)throw i;return s}const Gt=(...n)=>Sl(...n),At=(...n)=>af(...n),pf=(...n)=>ff(...n),mf=(...n)=>cf(...n),_f=(...n)=>lf(...n);function Sa(n,e){return fn(()=>n(e||{}))}const El=(n,e,t)=>mf(n,e,t,{transparent:!0}),gf=(n,e)=>e?n.$r?n:Sl(()=>n(),void 0,{transparent:!0}):Gt(()=>n());function xf(n,e,t){let i=t.length,s=e.length,r=i,o=0,a=0,c=e[s-1].nextSibling,l=null;for(;o<s||a<r;){if(e[o]===t[a]){o++,a++;continue}for(;e[s-1]===t[r-1];)s--,r--;if(s===o){const u=r<i?a?t[a-1].nextSibling:t[r-a]:c;for(;a<r;)n.insertBefore(t[a++],u)}else if(r===a)for(;o<s;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[r-1]&&t[a]===e[s-1]){const u=e[--s].nextSibling;n.insertBefore(t[a++],e[o++].nextSibling),n.insertBefore(t[--r],u),e[s]=t[r]}else{if(!l){l=new Map;let h=a;for(;h<r;)l.set(t[h],h++)}const u=l.get(e[o]);if(u!=null)if(a<u&&u<r){let h=o,f=1,m;for(;++h<s&&h<r&&!((m=l.get(e[h]))==null||m!==u+f);)f++;if(f>u-a){const _=e[o];for(;a<u;)n.insertBefore(t[a++],_)}else n.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const lc="_$DX_DELEGATE";function vf(n,e,t,i={}){let s;return $i(r=>{s=r,e===document?Gu(n):Mf(e,n(),e.firstChild?null:void 0,t)},{id:i.renderId}),()=>{s(),e.textContent=""}}function Tl(n,e,t,i){let s;const r=a=>{const c=document.createElement("template");return c.innerHTML=n,c.content.firstChild};return a=>(s||(s=r())).cloneNode(!0)}function ku(n,e=window.document){const t=e[lc]||(e[lc]=new Set);for(let i=0,s=n.length;i<s;i++){const r=n[i];t.has(r)||(t.add(r),e.addEventListener(r,Sf))}}function bt(n,e,t){t!=null?n.style.setProperty(e,t):n.style.removeProperty(e)}function yf(n,e){Array.isArray(n)?n.flat(1/0).forEach(t=>t&&t(e)):n(e)}function bl(n,e){const t=fn(n);gs(null,()=>yf(t,e))}function Mf(n,e,t,i){const s=t!==void 0;if(s&&!i&&(i=[]),typeof e!="function"&&(e=uc(e,i,s,!0),typeof e!="function"))return cc(n,e,i,t);if(e=gf(e,!0),s&&i.length===0){const r=document.createTextNode("");n.insertBefore(r,t),i=[r]}El(r=>uc(e,r,s),(r,o)=>cc(n,r,o,t),i)}function Sf(n){let e=n.target;const t=`$$${n.type}`,i=n.target,s=n.currentTarget,r=c=>Object.defineProperty(n,"target",{configurable:!0,value:c}),o=()=>{const c=e[t];if(c&&!e.disabled){const l=e[`${t}Data`];if(l!==void 0?c.call(e,l,n):c.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&r(e.host),!0},a=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),n.composedPath){const c=n.composedPath();r(c[0]);for(let l=0;l<c.length-2&&(e=c[l],!!o());l++){if(e._$host){e=e._$host,a();break}if(e.parentNode===s)break}}else a();r(i)}function cc(n,e,t,i){if(e===t)return;const s=typeof e,r=i!==void 0;if(s==="string"||s==="number"){const o=typeof t;o==="string"||o==="number"?n.firstChild.data=e:n.textContent=e}else if(e===void 0)gr(n,t,i);else if(e.nodeType)Array.isArray(t)?gr(n,t,r?i:null,e):t===void 0||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);else if(Array.isArray(e)){const o=t&&Array.isArray(t);e.length===0?gr(n,t,i):o?t.length===0?hc(n,e,i):xf(n,t,e):(t&&gr(n),hc(n,e))}}function uc(n,e,t,i){if(n=Gu(n,{skipNonRendered:!0,doNotUnwrap:i}),i&&typeof n=="function")return n;if(t&&!Array.isArray(n)&&(n=[n??""]),Array.isArray(n))for(let s=0,r=n.length;s<r;s++){const o=n[s],a=e&&e[s],c=typeof o;(c==="string"||c==="number")&&(n[s]=a&&a.nodeType===3&&a.data===""+o?a:document.createTextNode(o))}return n}function hc(n,e,t=null){for(let i=0,s=e.length;i<s;i++)n.insertBefore(e[i],t)}function gr(n,e,t,i){if(t===void 0)return n.textContent="";if(e.length){let s=!1;for(let r=e.length-1;r>=0;r--){const o=e[r];if(i!==o){const a=o.parentNode===n;i&&!s&&!r?a?n.replaceChild(i,o):n.insertBefore(i,t):a&&o.remove()}else s=!0}}else i&&n.insertBefore(i,t)}function Ef(...n){return vf(...n)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Al="183",Tf=0,fc=1,bf=2,qr=1,Af=2,Ys=3,Si=0,Qt=1,$n=2,ei=0,Es=1,dc=2,pc=3,mc=4,wf=5,Bi=100,Rf=101,Cf=102,Pf=103,Df=104,If=200,Lf=201,Uf=202,Nf=203,Ea=204,Ta=205,Ff=206,Of=207,Bf=208,zf=209,Vf=210,Gf=211,kf=212,Hf=213,Wf=214,ba=0,Aa=1,wa=2,Rs=3,Ra=4,Ca=5,Pa=6,Da=7,Hu=0,Xf=1,qf=2,Un=0,Wu=1,Xu=2,qu=3,Yu=4,$u=5,Zu=6,Ku=7,ju=300,qi=301,Cs=302,wo=303,Ro=304,mo=306,Ia=1e3,Zn=1001,La=1002,Ft=1003,Yf=1004,xr=1005,Ht=1006,Co=1007,Gi=1008,an=1009,Ju=1010,Qu=1011,rr=1012,wl=1013,Bn=1014,Dn=1015,ii=1016,Rl=1017,Cl=1018,or=1020,eh=35902,th=35899,nh=1021,ih=1022,Sn=1023,si=1026,ki=1027,sh=1028,Pl=1029,Ps=1030,Dl=1031,Il=1033,Yr=33776,$r=33777,Zr=33778,Kr=33779,Ua=35840,Na=35841,Fa=35842,Oa=35843,Ba=36196,za=37492,Va=37496,Ga=37488,ka=37489,Ha=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,$a=37811,Za=37812,Ka=37813,ja=37814,Ja=37815,Qa=37816,el=37817,tl=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,ll=36283,cl=36284,ul=36285,hl=36286,$f=3200,Ll=0,Zf=1,mi="",un="srgb",Ds="srgb-linear",ao="linear",rt="srgb",es=7680,_c=519,Kf=512,jf=513,Jf=514,Ul=515,Qf=516,ed=517,Nl=518,td=519,gc=35044,xc="300 es",In=2e3,ar=2001;function nd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function id(){const n=lo("canvas");return n.style.display="block",n}const vc={};function yc(...n){const e="THREE."+n.shift();console.log(e,...n)}function rh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=rh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Je(...n){n=rh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function co(...n){const e=n.join(" ");e in vc||(vc[e]=!0,Ne(...n))}function sd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const rd={[ba]:Aa,[wa]:Pa,[Ra]:Da,[Rs]:Ca,[Aa]:ba,[Pa]:wa,[Da]:Ra,[Ca]:Rs};class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Po=Math.PI/180,fl=180/Math.PI;function hr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function He(n,e,t){return Math.max(e,Math.min(t,n))}function od(n,e){return(n%e+e)%e}function Do(n,e,t){return(1-t)*n+t*e}function Bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Us{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(h!==g||c!==f||l!==m||u!==_){let p=c*f+l*m+u*_+h*g;p<0&&(f=-f,m=-m,_=-_,g=-g,p=-p);let d=1-a;if(p<.9995){const y=Math.acos(p),T=Math.sin(y);d=Math.sin(d*y)/T,a=Math.sin(a*y)/T,c=c*d+f*a,l=l*d+m*a,u=u*d+_*a,h=h*d+g*a}else{c=c*d+f*a,l=l*d+m*a,u=u*d+_*a,h=h*d+g*a;const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*m-l*f,e[t+1]=c*_+u*f+l*h-a*m,e[t+2]=l*_+u*m+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),m=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h+f*m*_;break;case"YZX":this._x=f*u*h+l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h-f*m*_;break;case"XZY":this._x=f*u*h-l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h+f*m*_;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Io.copy(this).projectOnVector(e),this.sub(Io)}reflect(e){return this.sub(Io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Io=new G,Mc=new Us;class Oe{constructor(e,t,i,s,r,o,a,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],g=s[0],p=s[3],d=s[6],y=s[1],T=s[4],S=s[7],b=s[2],w=s[5],R=s[8];return r[0]=o*g+a*y+c*b,r[3]=o*p+a*T+c*w,r[6]=o*d+a*S+c*R,r[1]=l*g+u*y+h*b,r[4]=l*p+u*T+h*w,r[7]=l*d+u*S+h*R,r[2]=f*g+m*y+_*b,r[5]=f*p+m*T+_*w,r[8]=f*d+m*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,m=l*r-o*c,_=t*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*l-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=f*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(i*c-l*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new Oe,Sc=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ad(){const n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return co("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return co("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:e,whitePoint:i,transfer:ao,toXYZ:Sc,fromXYZ:Ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Sc,fromXYZ:Ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}const Ke=ad();function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class ld{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ts===void 0&&(ts=lo("canvas")),ts.width=e.width,ts.height=e.height;const s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ts}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ti(t[i]/255)*255):t[i]=ti(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cd=0;class Fl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uo(s[o].image)):r.push(Uo(s[o]))}else r=Uo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ld.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let ud=0;const No=new G;class Zt extends Ls{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=Zn,s=Zn,r=Ht,o=Gi,a=Sn,c=an,l=Zt.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=hr(),this.name="",this.source=new Fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=ju;Zt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],_=c[9],g=c[2],p=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,S=(m+1)/2,b=(d+1)/2,w=(u+f)/4,R=(h+g)/4,v=(_+p)/4;return T>S&&T>b?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=w/i,r=R/i):S>b?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=v/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=R/r,s=v/r),this.set(i,s,r,t),this}let y=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hd extends Ls{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Zt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends hd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class oh extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fd extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class St{constructor(e,t,i,s,r,o,a,c,l,u,h,f,m,_,g,p){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,f,m,_,g,p)}set(e,t,i,s,r,o,a,c,l,u,h,f,m,_,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+_*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,_=l*u,g=l*h;t[0]=f+g*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,_=l*u,g=l*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-m,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*c,m=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+g,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dd,e,pd)}lookAt(e,t,i){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),li.crossVectors(i,tn),li.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),li.crossVectors(i,tn)),li.normalize(),vr.crossVectors(tn,li),s[0]=li.x,s[4]=vr.x,s[8]=tn.x,s[1]=li.y,s[5]=vr.y,s[9]=tn.y,s[2]=li.z,s[6]=vr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],g=i[6],p=i[10],d=i[14],y=i[3],T=i[7],S=i[11],b=i[15],w=s[0],R=s[4],v=s[8],E=s[12],z=s[1],C=s[5],N=s[9],B=s[13],V=s[2],L=s[6],F=s[10],D=s[14],Z=s[3],K=s[7],le=s[11],ce=s[15];return r[0]=o*w+a*z+c*V+l*Z,r[4]=o*R+a*C+c*L+l*K,r[8]=o*v+a*N+c*F+l*le,r[12]=o*E+a*B+c*D+l*ce,r[1]=u*w+h*z+f*V+m*Z,r[5]=u*R+h*C+f*L+m*K,r[9]=u*v+h*N+f*F+m*le,r[13]=u*E+h*B+f*D+m*ce,r[2]=_*w+g*z+p*V+d*Z,r[6]=_*R+g*C+p*L+d*K,r[10]=_*v+g*N+p*F+d*le,r[14]=_*E+g*B+p*D+d*ce,r[3]=y*w+T*z+S*V+b*Z,r[7]=y*R+T*C+S*L+b*K,r[11]=y*v+T*N+S*F+b*le,r[15]=y*E+T*B+S*D+b*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],d=e[15],y=c*m-l*f,T=a*m-l*h,S=a*f-c*h,b=o*m-l*u,w=o*f-c*u,R=o*h-a*u;return t*(g*y-p*T+d*S)-i*(_*y-p*b+d*w)+s*(_*T-g*b+d*R)-r*(_*S-g*w+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],d=e[15],y=t*a-i*o,T=t*c-s*o,S=t*l-r*o,b=i*c-s*a,w=i*l-r*a,R=s*l-r*c,v=u*g-h*_,E=u*p-f*_,z=u*d-m*_,C=h*p-f*g,N=h*d-m*g,B=f*d-m*p,V=y*B-T*N+S*C+b*z-w*E+R*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/V;return e[0]=(a*B-c*N+l*C)*L,e[1]=(s*N-i*B-r*C)*L,e[2]=(g*R-p*w+d*b)*L,e[3]=(f*w-h*R-m*b)*L,e[4]=(c*z-o*B-l*E)*L,e[5]=(t*B-s*z+r*E)*L,e[6]=(p*S-_*R-d*T)*L,e[7]=(u*R-f*S+m*T)*L,e[8]=(o*N-a*z+l*v)*L,e[9]=(i*z-t*N-r*v)*L,e[10]=(_*w-g*S+d*y)*L,e[11]=(h*S-u*w-m*y)*L,e[12]=(a*E-o*C-c*v)*L,e[13]=(t*C-i*E+s*v)*L,e[14]=(g*T-_*b-p*y)*L,e[15]=(u*b-h*T+f*y)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,m=r*u,_=r*h,g=o*u,p=o*h,d=a*h,y=c*l,T=c*u,S=c*h,b=i.x,w=i.y,R=i.z;return s[0]=(1-(g+d))*b,s[1]=(m+S)*b,s[2]=(_-T)*b,s[3]=0,s[4]=(m-S)*w,s[5]=(1-(f+d))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(_+T)*R,s[9]=(p-y)*R,s[10]=(1-(f+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ns.set(s[0],s[1],s[2]).length();const a=ns.set(s[4],s[5],s[6]).length(),c=ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),mn.copy(this);const l=1/o,u=1/a,h=1/c;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=In,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s);let _,g;if(c)_=r/(o-r),g=o*r/(o-r);else if(a===In)_=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ar)_=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=In,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),m=-(i+s)/(i-s);let _,g;if(c)_=1/(o-r),g=o/(o-r);else if(a===In)_=-2/(o-r),g=-(o+r)/(o-r);else if(a===ar)_=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ns=new G,mn=new St,dd=new G(0,0,0),pd=new G(1,1,1),li=new G,vr=new G,tn=new G,Tc=new St,bc=new Us;class zn{constructor(e=0,t=0,i=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bc.setFromEuler(this),this.setFromQuaternion(bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let md=0;const Ac=new G,is=new Us,Hn=new St,yr=new G,zs=new G,_d=new G,gd=new Us,wc=new G(1,0,0),Rc=new G(0,1,0),Cc=new G(0,0,1),Pc={type:"added"},xd={type:"removed"},ss={type:"childadded",child:null},Fo={type:"childremoved",child:null};class Wt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new G,t=new zn,i=new Us,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Oe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Ac.copy(e).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yr.copy(e):yr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(zs,yr,this.up):Hn.lookAt(yr,zs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Hn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pc),ss.child=e,this.dispatchEvent(ss),ss.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xd),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pc),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,_d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new G(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hi extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vd={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),d=this._getHandJoint(l,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Bo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=od(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Bo(o,r,e+1/3),this.g=Bo(o,r,e),this.b=Bo(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=lh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Ke.workingToColorSpace(zt.copy(this),e),Math.round(He(zt.r*255,0,255))*65536+Math.round(He(zt.g*255,0,255))*256+Math.round(He(zt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(zt.copy(this),t);const i=zt.r,s=zt.g,r=zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=un){Ke.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,s=zt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Mr);const i=Do(ci.h,Mr.h,t),s=Do(ci.s,Mr.s,t),r=Do(ci.l,Mr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new et;et.NAMES=lh;class yd extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _n=new G,Wn=new G,zo=new G,Xn=new G,rs=new G,os=new G,Dc=new G,Vo=new G,Go=new G,ko=new G,Ho=new vt,Wo=new vt,Xo=new vt;class Mn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_n.subVectors(s,t),Wn.subVectors(i,t),zo.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Wn),c=_n.dot(zo),l=Wn.dot(Wn),u=Wn.dot(zo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ho.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Ho.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,i),Xo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ho,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector(Xo,r.z),o}static isFrontFacing(e,t,i,s){return _n.subVectors(i,t),Wn.subVectors(e,t),_n.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),_n.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;rs.subVectors(s,i),os.subVectors(r,i),Vo.subVectors(e,i);const c=rs.dot(Vo),l=os.dot(Vo);if(c<=0&&l<=0)return t.copy(i);Go.subVectors(e,s);const u=rs.dot(Go),h=os.dot(Go);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(rs,o);ko.subVectors(e,r);const m=rs.dot(ko),_=os.dot(ko);if(_>=0&&m<=_)return t.copy(r);const g=m*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(os,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return Dc.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(Dc,a);const d=1/(p+g+f);return o=g*d,a=f*d,t.copy(i).addScaledVector(rs,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ns{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Er.subVectors(this.max,Vs),as.subVectors(e.a,Vs),ls.subVectors(e.b,Vs),cs.subVectors(e.c,Vs),ui.subVectors(ls,as),hi.subVectors(cs,ls),wi.subVectors(as,cs);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-wi.z,wi.y,ui.z,0,-ui.x,hi.z,0,-hi.x,wi.z,0,-wi.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-wi.y,wi.x,0];return!qo(t,as,ls,cs,Er)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,as,ls,cs,Er))?!1:(Tr.crossVectors(ui,hi),t=[Tr.x,Tr.y,Tr.z],qo(t,as,ls,cs,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new G,new G,new G,new G,new G,new G,new G,new G],gn=new G,Sr=new Ns,as=new G,ls=new G,cs=new G,ui=new G,hi=new G,wi=new G,Vs=new G,Er=new G,Tr=new G,Ri=new G;function qo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ri.fromArray(n,r);const a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=e.dot(Ri),l=t.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Tt=new G,br=new Be;let Md=0;class Fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gc,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}}class ch extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class uh extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Sd=new Ns,Gs=new G,Yo=new G;class Ol{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Gs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Yo)),this.expandByPoint(Gs.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ed=0;const cn=new St,$o=new Wt,us=new G,nn=new Ns,ks=new Ns,Dt=new G;class En extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?uh:ch)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(nn.min,ks.min),nn.expandByPoint(Dt),Dt.addVectors(nn.max,ks.max),nn.expandByPoint(Dt)):(nn.expandByPoint(ks.min),nn.expandByPoint(ks.max))}nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Dt.fromBufferAttribute(a,l),c&&(us.fromBufferAttribute(e,l),Dt.add(us)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let v=0;v<i.count;v++)a[v]=new G,c[v]=new G;const l=new G,u=new G,h=new G,f=new Be,m=new Be,_=new Be,g=new G,p=new G;function d(v,E,z){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,z),f.fromBufferAttribute(r,v),m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,z),u.sub(l),h.sub(l),m.sub(f),_.sub(f);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(C),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(C),a[v].add(g),a[E].add(g),a[z].add(g),c[v].add(p),c[E].add(p),c[z].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,E=y.length;v<E;++v){const z=y[v],C=z.start,N=z.count;for(let B=C,V=C+N;B<V;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new G,S=new G,b=new G,w=new G;function R(v){b.fromBufferAttribute(s,v),w.copy(b);const E=a[v];T.copy(E),T.sub(b.multiplyScalar(b.dot(E))).normalize(),S.crossVectors(w,E);const C=S.dot(c[v])<0?-1:1;o.setXYZW(v,T.x,T.y,T.z,C)}for(let v=0,E=y.length;v<E;++v){const z=y[v],C=z.start,N=z.count;for(let B=C,V=C+N;B<V;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,u=new G,h=new G;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let m=0,_=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?m=c[g]*a.data.stride+a.offset:m=c[g]*u;for(let d=0;d<u;d++)f[_++]=l[m++]}return new Fn(f,u,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Td=0;class Fs extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Es,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=Ta,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ea&&(i.blendSrc=this.blendSrc),this.blendDst!==Ta&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yn=new G,Zo=new G,Ar=new G,fi=new G,Ko=new G,wr=new G,jo=new G;class bd{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zo.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Zo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ar),a=fi.dot(this.direction),c=-fi.dot(Ar),l=fi.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Zo).addScaledVector(Ar,f),m}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){Ko.subVectors(t,e),wr.subVectors(i,e),jo.crossVectors(Ko,wr);let o=this.direction.dot(jo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const c=a*this.direction.dot(wr.crossVectors(fi,wr));if(c<0)return null;const l=a*this.direction.dot(Ko.cross(fi));if(l<0||c+l>o)return null;const u=-a*fi.dot(jo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hh extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ic=new St,Ci=new bd,Rr=new Ol,Lc=new G,Cr=new G,Pr=new G,Dr=new G,Jo=new G,Ir=new G,Uc=new G,Lr=new G;class nt extends Wt{constructor(e=new En,t=new hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Jo.fromBufferAttribute(h,e),o?Ir.addScaledVector(Jo,u):Ir.addScaledVector(Jo.sub(t),u))}t.add(Ir)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(Rr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Rr,Lc)===null||Ci.origin.distanceToSquared(Lc)>(e.far-e.near)**2))&&(Ic.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Ic),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],y=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,b=T;S<b;S+=3){const w=a.getX(S),R=a.getX(S+1),v=a.getX(S+2);s=Ur(this,d,e,i,l,u,h,w,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const y=a.getX(p),T=a.getX(p+1),S=a.getX(p+2);s=Ur(this,o,e,i,l,u,h,y,T,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],y=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,b=T;S<b;S+=3){const w=S,R=S+1,v=S+2;s=Ur(this,d,e,i,l,u,h,w,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const y=p,T=p+1,S=p+2;s=Ur(this,o,e,i,l,u,h,y,T,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Ad(n,e,t,i,s,r,o,a){let c;if(e.side===Qt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Si,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Lr);return l<t.near||l>t.far?null:{distance:l,point:Lr.clone(),object:n}}function Ur(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Cr),n.getVertexPosition(c,Pr),n.getVertexPosition(l,Dr);const u=Ad(n,e,t,i,Cr,Pr,Dr,Uc);if(u){const h=new G;Mn.getBarycoord(Uc,Cr,Pr,Dr,h),s&&(u.uv=Mn.getInterpolatedAttribute(s,a,c,l,h,new Be)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,a,c,l,h,new Be)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,c,l,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new G,materialIndex:0};Mn.getNormal(Cr,Pr,Dr,f.normal),u.face=f,u.barycoord=h}return u}class wd extends Zt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Ft,u=Ft,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qo=new G,Rd=new G,Cd=new Oe;class Li{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Qo.subVectors(i,t).cross(Rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cd.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Ol,Pd=new Be(.5,.5),Nr=new G;class Bl{constructor(e=new Li,t=new Li,i=new Li,s=new Li,r=new Li,o=new Li){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],m=r[7],_=r[8],g=r[9],p=r[10],d=r[11],y=r[12],T=r[13],S=r[14],b=r[15];if(s[0].setComponents(l-o,m-u,d-_,b-y).normalize(),s[1].setComponents(l+o,m+u,d+_,b+y).normalize(),s[2].setComponents(l+a,m+h,d+g,b+T).normalize(),s[3].setComponents(l-a,m-h,d-g,b-T).normalize(),i)s[4].setComponents(c,f,p,S).normalize(),s[5].setComponents(l-c,m-f,d-p,b-S).normalize();else if(s[4].setComponents(l-c,m-f,d-p,b-S).normalize(),t===In)s[5].setComponents(l+c,m+f,d+p,b+S).normalize();else if(t===ar)s[5].setComponents(c,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=Pd.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Nr.x=s.normal.x>0?e.max.x:e.min.x,Nr.y=s.normal.y>0?e.max.y:e.min.y,Nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fh extends Zt{constructor(e=[],t=qi,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lr extends Zt{constructor(e,t,i=Bn,s,r,o,a=Ft,c=Ft,l,u=si,h=1){if(u!==si&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dd extends lr{constructor(e,t=Bn,i=qi,s,r,o=Ft,a=Ft,c,l=si){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dh extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vt extends En{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(h,2));function _(g,p,d,y,T,S,b,w,R,v,E){const z=S/R,C=b/v,N=S/2,B=b/2,V=w/2,L=R+1,F=v+1;let D=0,Z=0;const K=new G;for(let le=0;le<F;le++){const ce=le*C-B;for(let Q=0;Q<L;Q++){const Re=Q*z-N;K[g]=Re*y,K[p]=ce*T,K[d]=V,l.push(K.x,K.y,K.z),K[g]=0,K[p]=0,K[d]=w>0?1:-1,u.push(K.x,K.y,K.z),h.push(Q/R),h.push(1-le/v),D+=1}}for(let le=0;le<v;le++)for(let ce=0;ce<R;ce++){const Q=f+ce+L*le,Re=f+ce+L*(le+1),tt=f+(ce+1)+L*(le+1),We=f+(ce+1)+L*le;c.push(Q,Re,We),c.push(Re,tt,We),Z+=6}a.addGroup(m,Z,E),m+=Z,f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uo extends En{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let _=0;const g=[],p=i/2;let d=0;y(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(m,2));function y(){const S=new G,b=new G;let w=0;const R=(t-e)/i;for(let v=0;v<=r;v++){const E=[],z=v/r,C=z*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,V=B*c+a,L=Math.sin(V),F=Math.cos(V);b.x=C*L,b.y=-z*i+p,b.z=C*F,h.push(b.x,b.y,b.z),S.set(L,R,F).normalize(),f.push(S.x,S.y,S.z),m.push(B,1-z),E.push(_++)}g.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){const z=g[E][v],C=g[E+1][v],N=g[E+1][v+1],B=g[E][v+1];(e>0||E!==0)&&(u.push(z,C,B),w+=3),(t>0||E!==r-1)&&(u.push(C,N,B),w+=3)}l.addGroup(d,w,0),d+=w}function T(S){const b=_,w=new Be,R=new G;let v=0;const E=S===!0?e:t,z=S===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,p*z,0),f.push(0,z,0),m.push(.5,.5),_++;const C=_;for(let N=0;N<=s;N++){const V=N/s*c+a,L=Math.cos(V),F=Math.sin(V);R.x=E*F,R.y=p*z,R.z=E*L,h.push(R.x,R.y,R.z),f.push(0,z,0),w.x=L*.5+.5,w.y=F*.5*z+.5,m.push(w.x,w.y),_++}for(let N=0;N<s;N++){const B=b+N,V=C+N;S===!0?u.push(V,V+1,B):u.push(V+1,V,B),v+=3}l.addGroup(d,v,S===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends En{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,m=[],_=[],g=[],p=[];for(let d=0;d<u;d++){const y=d*f-o;for(let T=0;T<l;T++){const S=T*h-r;_.push(S,-y,0),g.push(0,0,1),p.push(T/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){const T=y+l*d,S=y+l*(d+1),b=y+1+l*(d+1),w=y+1+l*d;m.push(T,S,w),m.push(S,b,w)}this.setIndex(m),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}class ho extends En{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new G,f=new G,m=[],_=[],g=[],p=[];for(let d=0;d<=i;d++){const y=[],T=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&c===Math.PI&&(S=-.5/t);for(let b=0;b<=t;b++){const w=b/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+T*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),p.push(w+S,1-T),y.push(l++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){const T=u[d][y+1],S=u[d][y],b=u[d+1][y],w=u[d+1][y+1];(d!==0||o>0)&&m.push(T,S,w),(d!==i-1||c<Math.PI)&&m.push(S,b,w)}this.setIndex(m),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Is(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Is(n[t]);for(const s in i)e[s]=i[s]}return e}function Id(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ph(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Ld={clone:Is,merge:qt};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fd extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ea extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fr extends Fs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Od extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bd extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mh extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ta=new St,Nc=new G,Fc=new G;class zd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bl,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ar||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Or=new G,Br=new Us,bn=new G;class _h extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Or,Br,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Br,bn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Or,Br,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Br,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const di=new G,Oc=new Be,Bc=new Be;class hn extends _h{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Bc),t.subVectors(Bc,Oc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Po*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zl extends _h{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vd extends zd{constructor(){super(new zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gd extends mh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Vd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class kd extends mh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const hs=-90,fs=1;class Hd extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(hs,fs,e,t);s.layers=this.layers,this.add(s);const r=new hn(hs,fs,e,t);r.layers=this.layers,this.add(r);const o=new hn(hs,fs,e,t);o.layers=this.layers,this.add(o);const a=new hn(hs,fs,e,t);a.layers=this.layers,this.add(a);const c=new hn(hs,fs,e,t);c.layers=this.layers,this.add(c);const l=new hn(hs,fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wd extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function zc(n,e,t,i){const s=Xd(i);switch(t){case nh:return n*e;case sh:return n*e/s.components*s.byteLength;case Pl:return n*e/s.components*s.byteLength;case Ps:return n*e*2/s.components*s.byteLength;case Dl:return n*e*2/s.components*s.byteLength;case ih:return n*e*3/s.components*s.byteLength;case Sn:return n*e*4/s.components*s.byteLength;case Il:return n*e*4/s.components*s.byteLength;case Yr:case $r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Na:case Oa:return Math.max(n,16)*Math.max(e,8)/4;case Ua:case Fa:return Math.max(n,8)*Math.max(e,8)/2;case Ba:case za:case Ga:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Va:case Ha:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rl:case ol:case al:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ll:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ul:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xd(n){switch(n){case an:case Ju:return{byteLength:1,components:1};case rr:case Qu:case ii:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case Bn:case wl:case Dn:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function qd(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],g=h[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const g=h[m];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
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
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
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
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,op=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
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
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
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
#endif`,Xp=`uniform sampler2D dfgLUT;
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
}`,qp=`
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,e_=`#define DISTANCE
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
}`,t_=`#define DISTANCE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
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
}`,r_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#define LAMBERT
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
}`,c_=`#define LAMBERT
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
}`,u_=`#define MATCAP
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
}`,h_=`#define MATCAP
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
}`,f_=`#define NORMAL
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
}`,d_=`#define NORMAL
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
}`,p_=`#define PHONG
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
}`,m_=`#define PHONG
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
}`,__=`#define STANDARD
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
}`,g_=`#define STANDARD
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
}`,x_=`#define TOON
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
}`,v_=`#define TOON
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
}`,y_=`uniform float size;
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
}`,M_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,E_=`uniform vec3 color;
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
}`,T_=`uniform float rotation;
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
}`,b_=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Yd,alphahash_pars_fragment:$d,alphamap_fragment:Zd,alphamap_pars_fragment:Kd,alphatest_fragment:jd,alphatest_pars_fragment:Jd,aomap_fragment:Qd,aomap_pars_fragment:ep,batching_pars_vertex:tp,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:sp,bsdfs:rp,iridescence_fragment:op,bumpmap_pars_fragment:ap,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:up,clipping_planes_vertex:hp,color_fragment:fp,color_pars_fragment:dp,color_pars_vertex:pp,color_vertex:mp,common:_p,cube_uv_reflection_fragment:gp,defaultnormal_vertex:xp,displacementmap_pars_vertex:vp,displacementmap_vertex:yp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,colorspace_fragment:Ep,colorspace_pars_fragment:Tp,envmap_fragment:bp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:wp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:zp,envmap_vertex:Cp,fog_vertex:Pp,fog_pars_vertex:Dp,fog_fragment:Ip,fog_pars_fragment:Lp,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Np,lights_lambert_fragment:Fp,lights_lambert_pars_fragment:Op,lights_pars_begin:Bp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Gp,lights_phong_fragment:kp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Wp,lights_physical_pars_fragment:Xp,lights_fragment_begin:qp,lights_fragment_maps:Yp,lights_fragment_end:$p,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:jp,logdepthbuf_vertex:Jp,map_fragment:Qp,map_pars_fragment:em,map_particle_fragment:tm,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:om,morphnormal_vertex:am,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:um,normal_fragment_maps:hm,normal_pars_fragment:fm,normal_pars_vertex:dm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:vm,opaque_fragment:ym,packing:Mm,premultiplied_alpha_fragment:Sm,project_vertex:Em,dithering_fragment:Tm,dithering_pars_fragment:bm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Dm,skinbase_vertex:Im,skinning_pars_vertex:Lm,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Fm,specularmap_pars_fragment:Om,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:Vm,transmission_pars_fragment:Gm,uv_pars_fragment:km,uv_pars_vertex:Hm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:$m,backgroundCube_frag:Zm,cube_vert:Km,cube_frag:jm,depth_vert:Jm,depth_frag:Qm,distance_vert:e_,distance_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:r_,meshbasic_vert:o_,meshbasic_frag:a_,meshlambert_vert:l_,meshlambert_frag:c_,meshmatcap_vert:u_,meshmatcap_frag:h_,meshnormal_vert:f_,meshnormal_frag:d_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:__,meshphysical_frag:g_,meshtoon_vert:x_,meshtoon_frag:v_,points_vert:y_,points_frag:M_,shadow_vert:S_,shadow_frag:E_,sprite_vert:T_,sprite_frag:b_},ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Cn={basic:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:qt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:qt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:qt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:qt([ue.common,ue.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:qt([ue.lights,ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Cn.physical={uniforms:qt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const zr={r:0,b:0,g:0},Di=new zn,A_=new St;function w_(n,e,t,i,s,r){const o=new et(0);let a=s===!0?0:1,c,l,u=null,h=0,f=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const S=y.backgroundBlurriness>0;T=e.get(T,S)}return T}function _(y){let T=!1;const S=m(y);S===null?p(o,a):S&&S.isColor&&(p(S,1),T=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,T){const S=m(T);S&&(S.isCubeTexture||S.mapping===mo)?(l===void 0&&(l=new nt(new Vt(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Is(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Di.copy(T.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(A_.makeRotationFromEuler(Di)),l.material.toneMapped=Ke.getTransfer(S.colorSpace)!==rt,(u!==S||h!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new nt(new _o(2,2),new Vn({name:"BackgroundMaterial",uniforms:Is(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,T){y.getRGB(zr,ph(n)),t.buffers.color.setClear(zr.r,zr.g,zr.b,T,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:_,addToRenderList:g,dispose:d}}function R_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(C,N,B,V,L){let F=!1;const D=h(C,V,B,N);r!==D&&(r=D,l(r.object)),F=m(C,V,B,L),F&&_(C,V,B,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,S(C,N,B,V),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function h(C,N,B,V){const L=V.wireframe===!0;let F=i[N.id];F===void 0&&(F={},i[N.id]=F);const D=C.isInstancedMesh===!0?C.id:0;let Z=F[D];Z===void 0&&(Z={},F[D]=Z);let K=Z[B.id];K===void 0&&(K={},Z[B.id]=K);let le=K[L];return le===void 0&&(le=f(c()),K[L]=le),le}function f(C){const N=[],B=[],V=[];for(let L=0;L<t;L++)N[L]=0,B[L]=0,V[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:V,object:C,attributes:{},index:null}}function m(C,N,B,V){const L=r.attributes,F=N.attributes;let D=0;const Z=B.getAttributes();for(const K in Z)if(Z[K].location>=0){const ce=L[K];let Q=F[K];if(Q===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),ce===void 0||ce.attribute!==Q||Q&&ce.data!==Q.data)return!0;D++}return r.attributesNum!==D||r.index!==V}function _(C,N,B,V){const L={},F=N.attributes;let D=0;const Z=B.getAttributes();for(const K in Z)if(Z[K].location>=0){let ce=F[K];ce===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor));const Q={};Q.attribute=ce,ce&&ce.data&&(Q.data=ce.data),L[K]=Q,D++}r.attributes=L,r.attributesNum=D,r.index=V}function g(){const C=r.newAttributes;for(let N=0,B=C.length;N<B;N++)C[N]=0}function p(C){d(C,0)}function d(C,N){const B=r.newAttributes,V=r.enabledAttributes,L=r.attributeDivisors;B[C]=1,V[C]===0&&(n.enableVertexAttribArray(C),V[C]=1),L[C]!==N&&(n.vertexAttribDivisor(C,N),L[C]=N)}function y(){const C=r.newAttributes,N=r.enabledAttributes;for(let B=0,V=N.length;B<V;B++)N[B]!==C[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function T(C,N,B,V,L,F,D){D===!0?n.vertexAttribIPointer(C,N,B,L,F):n.vertexAttribPointer(C,N,B,V,L,F)}function S(C,N,B,V){g();const L=V.attributes,F=B.getAttributes(),D=N.defaultAttributeValues;for(const Z in F){const K=F[Z];if(K.location>=0){let le=L[Z];if(le===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const ce=le.normalized,Q=le.itemSize,Re=e.get(le);if(Re===void 0)continue;const tt=Re.buffer,We=Re.type,$=Re.bytesPerElement,te=We===n.INT||We===n.UNSIGNED_INT||le.gpuType===wl;if(le.isInterleavedBufferAttribute){const ne=le.data,Ce=ne.stride,Te=le.offset;if(ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<K.locationSize;Ee++)d(K.location+Ee,ne.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ee=0;Ee<K.locationSize;Ee++)p(K.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Ee=0;Ee<K.locationSize;Ee++)T(K.location+Ee,Q/K.locationSize,We,ce,Ce*$,(Te+Q/K.locationSize*Ee)*$,te)}else{if(le.isInstancedBufferAttribute){for(let ne=0;ne<K.locationSize;ne++)d(K.location+ne,le.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ne=0;ne<K.locationSize;ne++)p(K.location+ne);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let ne=0;ne<K.locationSize;ne++)T(K.location+ne,Q/K.locationSize,We,ce,Q*$,Q/K.locationSize*ne*$,te)}}else if(D!==void 0){const ce=D[Z];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(K.location,ce);break;case 3:n.vertexAttrib3fv(K.location,ce);break;case 4:n.vertexAttrib4fv(K.location,ce);break;default:n.vertexAttrib1fv(K.location,ce)}}}}y()}function b(){E();for(const C in i){const N=i[C];for(const B in N){const V=N[B];for(const L in V){const F=V[L];for(const D in F)u(F[D].object),delete F[D];delete V[L]}}delete i[C]}}function w(C){if(i[C.id]===void 0)return;const N=i[C.id];for(const B in N){const V=N[B];for(const L in V){const F=V[L];for(const D in F)u(F[D].object),delete F[D];delete V[L]}}delete i[C.id]}function R(C){for(const N in i){const B=i[N];for(const V in B){const L=B[V];if(L[C.id]===void 0)continue;const F=L[C.id];for(const D in F)u(F[D].object),delete F[D];delete L[C.id]}}}function v(C){for(const N in i){const B=i[N],V=C.isInstancedMesh===!0?C.id:0,L=B[V];if(L!==void 0){for(const F in L){const D=L[F];for(const Z in D)u(D[Z].object),delete D[Z];delete L[F]}delete B[V],Object.keys(B).length===0&&delete i[N]}}}function E(){z(),o=!0,r!==s&&(r=s,l(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:z,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function C_(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,i,1)}function c(l,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function P_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const v=R===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==an&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Dn&&!v)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ne("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:S,maxSamples:b,samples:w}}function D_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Li,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):l();else{const y=r?0:i,T=y*4;let S=d.clippingState||null;c.value=S,S=u(_,f,T,m);for(let b=0;b!==T;++b)S[b]=t[b];d.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const d=m+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,S=m;T!==g;++T,S+=4)o.copy(h[T]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const _i=4,Vc=[.125,.215,.35,.446,.526,.582],zi=20,I_=256,Hs=new zl,Gc=new et;let na=null,ia=0,sa=0,ra=!1;const L_=new G;class kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=L_}=r;na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(na,ia,sa),this._renderer.xr.enabled=ra,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ii,format:Sn,colorSpace:Ds,depthBuffer:!1},s=Hc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hc(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=U_(r)),this._blurMaterial=F_(r,e,t),this._ggxMaterial=N_(r,e,t)}return s}_compileMaterial(e){const t=new nt(new En,e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,i,s,r){const c=new hn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Gc),h.toneMapping=Un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nt(new Vt,new hh({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let d=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,d=!0):(p.color.copy(Gc),d=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const b=this._cubeSize;ds(s,S*b,T>2?b:0,b,b),h.setRenderTarget(s),d&&h.render(g,c),h.render(e,c)}h.toneMapping=m,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===qi||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ds(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Hs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=0+l*1.25,m=h*f,{_lodMax:_}=this,g=this._sizeLods[i],p=3*g*(i>_-_i?i-_+_i:0),d=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-t,ds(r,p,d,3*g,2*g),s.setRenderTarget(r),s.render(a,Hs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,ds(e,p,d,3*g,2*g),s.setRenderTarget(e),s.render(a,Hs)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=l;const f=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zi-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):zi;p>zi&&Ne(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const d=[];let y=0;for(let R=0;R<zi;++R){const v=R/g,E=Math.exp(-v*v/2);d.push(E),R===0?y+=E:R<p&&(y+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-i;const S=this._sizeLods[s],b=3*S*(s>T-_i?s-T+_i:0),w=4*(this._cubeSize-S);ds(t,b,w,3*S,2*S),c.setRenderTarget(t),c.render(h,Hs)}}function U_(n){const e=[],t=[],i=[];let s=n;const r=n-_i+1+Vc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-_i?c=Vc[o-n+_i-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,p=2,d=1,y=new Float32Array(g*_*m),T=new Float32Array(p*_*m),S=new Float32Array(d*_*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,v=w>2?0:-1,E=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];y.set(E,g*_*w),T.set(f,p*_*w);const z=[w,w,w,w,w,w];S.set(z,d*_*w)}const b=new En;b.setAttribute("position",new Fn(y,g)),b.setAttribute("uv",new Fn(T,p)),b.setAttribute("faceIndex",new Fn(S,d)),i.push(new nt(b,null)),s>_i&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Hc(n,e,t){const i=new Nn(n,e,t);return i.texture.mapping=mo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function N_(n,e,t){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function F_(n,e,t){const i=new Float32Array(zi),s=new G(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:go(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Wc(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Xc(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function go(){return`

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
	`}class xh extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ei});r.uniforms.tEquirect.value=t;const o=new nt(s,r),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Ht),new Hd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function O_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,m=!1){return f==null?null:m?o(f):r(f)}function r(f){if(f&&f.isTexture){const m=f.mapping;if(m===wo||m===Ro)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const g=new xh(_.height);return g.fromEquirectangularTexture(n,f),e.set(f,g),f.addEventListener("dispose",l),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const m=f.mapping,_=m===wo||m===Ro,g=m===qi||m===Cs;if(_||g){let p=t.get(f);const d=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new kc(n)),p=_?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const y=f.image;return _&&y&&y.height>0||g&&y&&c(y)?(i===null&&(i=new kc(n)),p=_?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,m){return m===wo?f.mapping=qi:m===Ro&&(f.mapping=Cs),f}function c(f){let m=0;const _=6;for(let g=0;g<_;g++)f[g]!==void 0&&m++;return m===_}function l(f){const m=f.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(f){const m=f.target;m.removeEventListener("dispose",u);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function B_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&co("WebGLRenderer: "+i+" extension not supported."),s}}}function z_(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function l(h){const f=[],m=h.index,_=h.attributes.position;let g=0;if(_===void 0)return;if(m!==null){const y=m.array;g=m.version;for(let T=0,S=y.length;T<S;T+=3){const b=y[T+0],w=y[T+1],R=y[T+2];f.push(b,w,w,R,R,b)}}else{const y=_.array;g=_.version;for(let T=0,S=y.length/3-1;T<S;T+=3){const b=T+0,w=T+1,R=T+2;f.push(b,w,w,R,R,b)}}const p=new(_.count>=65535?uh:ch)(f,1);p.version=g;const d=r.get(h);d&&e.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function V_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,m){n.drawElements(i,m,r,f*o),t.update(m,i,1)}function l(f,m,_){_!==0&&(n.drawElementsInstanced(i,m,r,f*o,_),t.update(m,i,_))}function u(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,i,1)}function h(f,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/o,m[d],g[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,g,0,_);let d=0;for(let y=0;y<_;y++)d+=m[y]*g[y];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function G_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function k_(n,e,t){const i=new WeakMap,s=new vt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let z=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",z)};var m=z;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let b=a.attributes.position.count*S,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*w*4*h),v=new oh(R,b,w,h);v.type=Dn,v.needsUpdate=!0;const E=S*4;for(let C=0;C<h;C++){const N=d[C],B=y[C],V=T[C],L=b*w*4*C;for(let F=0;F<N.count;F++){const D=F*E;_===!0&&(s.fromBufferAttribute(N,F),R[L+D+0]=s.x,R[L+D+1]=s.y,R[L+D+2]=s.z,R[L+D+3]=0),g===!0&&(s.fromBufferAttribute(B,F),R[L+D+4]=s.x,R[L+D+5]=s.y,R[L+D+6]=s.z,R[L+D+7]=0),p===!0&&(s.fromBufferAttribute(V,F),R[L+D+8]=s.x,R[L+D+9]=s.y,R[L+D+10]=s.z,R[L+D+11]=V.itemSize===4?s.w:1)}}f={count:h,texture:v,size:new Be(b,w)},i.set(a,f),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function H_(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const W_={[Wu]:"LINEAR_TONE_MAPPING",[Xu]:"REINHARD_TONE_MAPPING",[qu]:"CINEON_TONE_MAPPING",[Yu]:"ACES_FILMIC_TONE_MAPPING",[Zu]:"AGX_TONE_MAPPING",[Ku]:"NEUTRAL_TONE_MAPPING",[$u]:"CUSTOM_TONE_MAPPING"};function X_(n,e,t,i,s){const r=new Nn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Nn(e,t,{type:ii,depthBuffer:!1,stencilBuffer:!1}),a=new En;a.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const c=new Fd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new nt(a,c),u=new zl(-1,1,1,-1,0,1);let h=null,f=null,m=!1,_,g=null,p=[],d=!1;this.setSize=function(y,T){r.setSize(y,T),o.setSize(y,T);for(let S=0;S<p.length;S++){const b=p[S];b.setSize&&b.setSize(y,T)}},this.setEffects=function(y){p=y,d=p.length>0&&p[0].isRenderPass===!0;const T=r.width,S=r.height;for(let b=0;b<p.length;b++){const w=p[b];w.setSize&&w.setSize(T,S)}},this.begin=function(y,T){if(m||y.toneMapping===Un&&p.length===0)return!1;if(g=T,T!==null){const S=T.width,b=T.height;(r.width!==S||r.height!==b)&&this.setSize(S,b)}return d===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=Un,!0},this.hasRenderPass=function(){return d},this.end=function(y,T){y.toneMapping=_,m=!0;let S=r,b=o;for(let w=0;w<p.length;w++){const R=p[w];if(R.enabled!==!1&&(R.render(y,b,S,T),R.needsSwap!==!1)){const v=S;S=b,b=v}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,c.defines={},Ke.getTransfer(h)===rt&&(c.defines.SRGB_TRANSFER="");const w=W_[f];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(g),y.render(l,u),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const vh=new Zt,dl=new lr(1,1),yh=new oh,Mh=new fd,Sh=new fh,qc=[],Yc=[],$c=new Float32Array(16),Zc=new Float32Array(9),Kc=new Float32Array(4);function Os(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xo(n,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function q_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function $_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function Z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function K_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Kc.set(i),n.uniformMatrix2fv(this.addr,!1,Kc),Ct(t,i)}}function j_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Zc.set(i),n.uniformMatrix3fv(this.addr,!1,Zc),Ct(t,i)}}function J_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;$c.set(i),n.uniformMatrix4fv(this.addr,!1,$c),Ct(t,i)}}function Q_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function ag(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(dl.compareFunction=t.isReversedDepthBuffer()?Nl:Ul,r=dl):r=vh,t.setTexture2D(e||r,s)}function lg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Mh,s)}function cg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Sh,s)}function ug(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yh,s)}function hg(n){switch(n){case 5126:return q_;case 35664:return Y_;case 35665:return $_;case 35666:return Z_;case 35674:return K_;case 35675:return j_;case 35676:return J_;case 5124:case 35670:return Q_;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return ug}}function fg(n,e){n.uniform1fv(this.addr,e)}function dg(n,e){const t=Os(e,this.size,2);n.uniform2fv(this.addr,t)}function pg(n,e){const t=Os(e,this.size,3);n.uniform3fv(this.addr,t)}function mg(n,e){const t=Os(e,this.size,4);n.uniform4fv(this.addr,t)}function _g(n,e){const t=Os(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gg(n,e){const t=Os(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xg(n,e){const t=Os(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vg(n,e){n.uniform1iv(this.addr,e)}function yg(n,e){n.uniform2iv(this.addr,e)}function Mg(n,e){n.uniform3iv(this.addr,e)}function Sg(n,e){n.uniform4iv(this.addr,e)}function Eg(n,e){n.uniform1uiv(this.addr,e)}function Tg(n,e){n.uniform2uiv(this.addr,e)}function bg(n,e){n.uniform3uiv(this.addr,e)}function Ag(n,e){n.uniform4uiv(this.addr,e)}function wg(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=dl:o=vh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Rg(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mh,r[o])}function Cg(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Sh,r[o])}function Pg(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yh,r[o])}function Dg(n){switch(n){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return _g;case 35675:return gg;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return Eg;case 36294:return Tg;case 36295:return bg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}class Ig{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hg(t.type)}}class Lg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dg(t.type)}}class Ug{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function jc(n,e){n.seq.push(e),n.map[e.id]=e}function Ng(n,e,t){const i=n.name,s=i.length;for(oa.lastIndex=0;;){const r=oa.exec(i),o=oa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){jc(t,l===void 0?new Ig(a,n,e):new Lg(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Ug(a),jc(t,h)),t=h}}}class jr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Ng(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Jc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Fg=37297;let Og=0;function Bg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Qc=new Oe;function zg(n){Ke._getMatrix(Qc,Ke.workingColorSpace,n);const e=`mat3( ${Qc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case ao:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function eu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bg(n.getShaderSource(e),a)}else return r}function Vg(n,e){const t=zg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Gg={[Wu]:"Linear",[Xu]:"Reinhard",[qu]:"Cineon",[Yu]:"ACESFilmic",[Zu]:"AgX",[Ku]:"Neutral",[$u]:"Custom"};function kg(n,e){const t=Gg[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vr=new G;function Hg(){Ke.getLuminanceCoefficients(Vr);const n=Vr.x.toFixed(4),e=Vr.y.toFixed(4),t=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Xg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function $s(n){return n!==""}function tu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(n){return n.replace(Yg,Zg)}const $g=new Map;function Zg(n,e){let t=ze[e];if(t===void 0){const i=$g.get(e);if(i!==void 0)t=ze[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pl(t)}const Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(n){return n.replace(Kg,jg)}function jg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function su(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Jg={[qr]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function Qg(n){return Jg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const e0={[qi]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE_UV"};function t0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":e0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const n0={[Cs]:"ENVMAP_MODE_REFRACTION"};function i0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":n0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const s0={[Hu]:"ENVMAP_BLENDING_MULTIPLY",[Xf]:"ENVMAP_BLENDING_MIX",[qf]:"ENVMAP_BLENDING_ADD"};function r0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":s0[n.combine]||"ENVMAP_BLENDING_NONE"}function o0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function a0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Qg(t),l=t0(t),u=i0(t),h=r0(t),f=o0(t),m=Wg(t),_=Xg(r),g=s.createProgram();let p,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),d.length>0&&(d+=`
`)):(p=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),d=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?ze.tonemapping_pars_fragment:"",t.toneMapping!==Un?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Vg("linearToOutputTexel",t.outputColorSpace),Hg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=pl(o),o=tu(o,t),o=nu(o,t),a=pl(a),a=tu(a,t),a=nu(a,t),o=iu(o),a=iu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=y+p+o,S=y+d+a,b=Jc(s,s.VERTEX_SHADER,T),w=Jc(s,s.FRAGMENT_SHADER,S);s.attachShader(g,b),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(C){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(b)||"",V=s.getShaderInfoLog(w)||"",L=N.trim(),F=B.trim(),D=V.trim();let Z=!0,K=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,b,w);else{const le=eu(s,b,"vertex"),ce=eu(s,w,"fragment");Je("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+le+`
`+ce)}else L!==""?Ne("WebGLProgram: Program Info Log:",L):(F===""||D==="")&&(K=!1);K&&(C.diagnostics={runnable:Z,programLog:L,vertexShader:{log:F,prefix:p},fragmentShader:{log:D,prefix:d}})}s.deleteShader(b),s.deleteShader(w),v=new jr(s,g),E=qg(s,g)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(g,Fg)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Og++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}let l0=0;class c0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new u0(e),t.set(e,i)),i}}class u0{constructor(e){this.id=l0++,this.code=e,this.usedTimes=0}}function h0(n,e,t,i,s,r){const o=new ah,a=new c0,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,E,z,C,N){const B=C.fog,V=N.geometry,L=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,D=e.get(v.envMap||L,F),Z=D&&D.mapping===mo?D.image.height:null,K=m[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Ne("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=le!==void 0?le.length:0;let Q=0;V.morphAttributes.position!==void 0&&(Q=1),V.morphAttributes.normal!==void 0&&(Q=2),V.morphAttributes.color!==void 0&&(Q=3);let Re,tt,We,$;if(K){const st=Cn[K];Re=st.vertexShader,tt=st.fragmentShader}else Re=v.vertexShader,tt=v.fragmentShader,a.update(v),We=a.getVertexShaderID(v),$=a.getFragmentShaderID(v);const te=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,Te=N.isBatchedMesh===!0,Ee=!!v.map,Xe=!!v.matcap,ke=!!D,qe=!!v.aoMap,Ye=!!v.lightMap,Le=!!v.bumpMap,at=!!v.normalMap,P=!!v.displacementMap,_t=!!v.emissiveMap,$e=!!v.metalnessMap,it=!!v.roughnessMap,_e=v.anisotropy>0,A=v.clearcoat>0,x=v.dispersion>0,U=v.iridescence>0,Y=v.sheen>0,j=v.transmission>0,X=_e&&!!v.anisotropyMap,ge=A&&!!v.clearcoatMap,se=A&&!!v.clearcoatNormalMap,be=A&&!!v.clearcoatRoughnessMap,Pe=U&&!!v.iridescenceMap,J=U&&!!v.iridescenceThicknessMap,ie=Y&&!!v.sheenColorMap,xe=Y&&!!v.sheenRoughnessMap,ye=!!v.specularMap,de=!!v.specularColorMap,Ve=!!v.specularIntensityMap,I=j&&!!v.transmissionMap,ae=j&&!!v.thicknessMap,re=!!v.gradientMap,me=!!v.alphaMap,ee=v.alphaTest>0,q=!!v.alphaHash,ve=!!v.extensions;let Ue=Un;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const ht={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:Re,fragmentShader:tt,defines:v.defines,customVertexShaderID:We,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Te,batchingColor:Te&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ds,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:Xe,envMap:ke,envMapMode:ke&&D.mapping,envMapCubeUVHeight:Z,aoMap:qe,lightMap:Ye,bumpMap:Le,normalMap:at,displacementMap:P,emissiveMap:_t,normalMapObjectSpace:at&&v.normalMapType===Zf,normalMapTangentSpace:at&&v.normalMapType===Ll,metalnessMap:$e,roughnessMap:it,anisotropy:_e,anisotropyMap:X,clearcoat:A,clearcoatMap:ge,clearcoatNormalMap:se,clearcoatRoughnessMap:be,dispersion:x,iridescence:U,iridescenceMap:Pe,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:ie,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:de,specularIntensityMap:Ve,transmission:j,transmissionMap:I,thicknessMap:ae,gradientMap:re,opaque:v.transparent===!1&&v.blending===Es&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:q,combine:v.combine,mapUv:Ee&&_(v.map.channel),aoMapUv:qe&&_(v.aoMap.channel),lightMapUv:Ye&&_(v.lightMap.channel),bumpMapUv:Le&&_(v.bumpMap.channel),normalMapUv:at&&_(v.normalMap.channel),displacementMapUv:P&&_(v.displacementMap.channel),emissiveMapUv:_t&&_(v.emissiveMap.channel),metalnessMapUv:$e&&_(v.metalnessMap.channel),roughnessMapUv:it&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:ge&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(v.sheenRoughnessMap.channel),specularMapUv:ye&&_(v.specularMap.channel),specularColorMapUv:de&&_(v.specularColorMap.channel),specularIntensityMapUv:Ve&&_(v.specularIntensityMap.channel),transmissionMapUv:I&&_(v.transmissionMap.channel),thicknessMapUv:ae&&_(v.thicknessMap.channel),alphaMapUv:me&&_(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(at||_e),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Ee||me),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&at===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ne,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===rt,decodeVideoTextureEmissive:_t&&v.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(v.emissiveMap.colorSpace)===rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$n,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&v.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)E.push(z),E.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(d(E,v),y(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function d(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),v.push(o.mask)}function T(v){const E=m[v.type];let z;if(E){const C=Cn[E];z=Ld.clone(C.uniforms)}else z=v.uniforms;return z}function S(v,E){let z=u.get(E);return z!==void 0?++z.usedTimes:(z=new a0(n,E,v,s),l.push(z),u.set(E,z)),z}function b(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function R(){a.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:R}}function f0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function d0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ru(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ou(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function a(f,m,_,g,p,d){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:m,material:_,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},n[e]=y):(y.id=f.id,y.object=f,y.geometry=m,y.material=_,y.materialVariant=o(f),y.groupOrder=g,y.renderOrder=f.renderOrder,y.z=p,y.group=d),e++,y}function c(f,m,_,g,p,d){const y=a(f,m,_,g,p,d);_.transmission>0?i.push(y):_.transparent===!0?s.push(y):t.push(y)}function l(f,m,_,g,p,d){const y=a(f,m,_,g,p,d);_.transmission>0?i.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function u(f,m){t.length>1&&t.sort(f||d0),i.length>1&&i.sort(m||ru),s.length>1&&s.sort(m||ru)}function h(){for(let f=e,m=n.length;f<m;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function p0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ou,n.set(i,[o])):s>=r.length?(o=new ou,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function m0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new et};break;case"SpotLight":t={position:new G,direction:new G,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function _0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let g0=0;function x0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function v0(n){const e=new m0,t=_0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);const s=new G,r=new St,o=new St;function a(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,g=0,p=0,d=0,y=0,T=0,S=0,b=0,w=0,R=0;l.sort(x0);for(let E=0,z=l.length;E<z;E++){const C=l[E],N=C.color,B=C.intensity,V=C.distance;let L=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ps?L=C.shadow.map.texture:L=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=N.r*B,h+=N.g*B,f+=N.b*B;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],B);R++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const D=C.shadow,Z=t.get(C);Z.shadowIntensity=D.intensity,Z.shadowBias=D.bias,Z.shadowNormalBias=D.normalBias,Z.shadowRadius=D.radius,Z.shadowMapSize=D.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=L,i.directionalShadowMatrix[m]=C.shadow.matrix,y++}i.directional[m]=F,m++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(N).multiplyScalar(B),F.distance=V,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[g]=F;const D=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,D.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[g]=D.matrix,C.castShadow){const Z=t.get(C);Z.shadowIntensity=D.intensity,Z.shadowBias=D.bias,Z.shadowNormalBias=D.normalBias,Z.shadowRadius=D.radius,Z.shadowMapSize=D.mapSize,i.spotShadow[g]=Z,i.spotShadowMap[g]=L,S++}g++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(N).multiplyScalar(B),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=F,p++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const D=C.shadow,Z=t.get(C);Z.shadowIntensity=D.intensity,Z.shadowBias=D.bias,Z.shadowNormalBias=D.normalBias,Z.shadowRadius=D.radius,Z.shadowMapSize=D.mapSize,Z.shadowCameraNear=D.camera.near,Z.shadowCameraFar=D.camera.far,i.pointShadow[_]=Z,i.pointShadowMap[_]=L,i.pointShadowMatrix[_]=C.shadow.matrix,T++}i.point[_]=F,_++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(B),F.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[d]=F,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==g||v.rectAreaLength!==p||v.hemiLength!==d||v.numDirectionalShadows!==y||v.numPointShadows!==T||v.numSpotShadows!==S||v.numSpotMaps!==b||v.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,v.directionalLength=m,v.pointLength=_,v.spotLength=g,v.rectAreaLength=p,v.hemiLength=d,v.numDirectionalShadows=y,v.numPointShadows=T,v.numSpotShadows=S,v.numSpotMaps=b,v.numLightProbes=R,i.version=g0++)}function c(l,u){let h=0,f=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let d=0,y=l.length;d<y;d++){const T=l[d];if(T.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(T.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(T.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:i}}function au(n){const e=new v0(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function y0(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new au(n),e.set(s,[a])):r>=o.length?(a=new au(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const M0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
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
}`,E0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],T0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],lu=new St,Ws=new G,aa=new G;function b0(n,e,t){let i=new Bl;const s=new Be,r=new Be,o=new vt,a=new Od,c=new Bd,l={},u=t.maxTextureSize,h={[Si]:Qt,[Qt]:Si,[$n]:$n},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:M0,fragmentShader:S0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new En;_.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new nt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qr;let d=this.type;this.render=function(w,R,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Af&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qr);const E=n.getRenderTarget(),z=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ei),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=d!==this.type;B&&R.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(L=>L.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,L=w.length;V<L;V++){const F=w[V],D=F.shadow;if(D===void 0){Ne("WebGLShadowMap:",F,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const Z=D.getFrameExtents();s.multiply(Z),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,D.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if(D.camera._reversedDepth=K,D.map===null||B===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Ys){if(F.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new Nn(s.x,s.y,{format:Ps,type:ii,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),D.map.texture.name=F.name+".shadowMap",D.map.depthTexture=new lr(s.x,s.y,Dn),D.map.depthTexture.name=F.name+".shadowMapDepth",D.map.depthTexture.format=si,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ft,D.map.depthTexture.magFilter=Ft}else F.isPointLight?(D.map=new xh(s.x),D.map.depthTexture=new Dd(s.x,Bn)):(D.map=new Nn(s.x,s.y),D.map.depthTexture=new lr(s.x,s.y,Bn)),D.map.depthTexture.name=F.name+".shadowMap",D.map.depthTexture.format=si,this.type===qr?(D.map.depthTexture.compareFunction=K?Nl:Ul,D.map.depthTexture.minFilter=Ht,D.map.depthTexture.magFilter=Ht):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ft,D.map.depthTexture.magFilter=Ft);D.camera.updateProjectionMatrix()}const le=D.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<le;ce++){if(D.map.isWebGLCubeRenderTarget)n.setRenderTarget(D.map,ce),n.clear();else{ce===0&&(n.setRenderTarget(D.map),n.clear());const Q=D.getViewport(ce);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),N.viewport(o)}if(F.isPointLight){const Q=D.camera,Re=D.matrix,tt=F.distance||Q.far;tt!==Q.far&&(Q.far=tt,Q.updateProjectionMatrix()),Ws.setFromMatrixPosition(F.matrixWorld),Q.position.copy(Ws),aa.copy(Q.position),aa.add(E0[ce]),Q.up.copy(T0[ce]),Q.lookAt(aa),Q.updateMatrixWorld(),Re.makeTranslation(-Ws.x,-Ws.y,-Ws.z),lu.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),D._frustum.setFromProjectionMatrix(lu,Q.coordinateSystem,Q.reversedDepth)}else D.updateMatrices(F);i=D.getFrustum(),S(R,v,D.camera,F,this.type)}D.isPointLightShadow!==!0&&this.type===Ys&&y(D,v),D.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(E,z,C)};function y(w,R){const v=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Nn(s.x,s.y,{format:Ps,type:ii})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,v,f,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,v,m,g,null)}function T(w,R,v,E){let z=null;const C=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)z=C;else if(z=v.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=z.uuid,B=R.uuid;let V=l[N];V===void 0&&(V={},l[N]=V);let L=V[B];L===void 0&&(L=z.clone(),V[B]=L,R.addEventListener("dispose",b)),z=L}if(z.visible=R.visible,z.wireframe=R.wireframe,E===Ys?z.side=R.shadowSide!==null?R.shadowSide:R.side:z.side=R.shadowSide!==null?R.shadowSide:h[R.side],z.alphaMap=R.alphaMap,z.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,z.map=R.map,z.clipShadows=R.clipShadows,z.clippingPlanes=R.clippingPlanes,z.clipIntersection=R.clipIntersection,z.displacementMap=R.displacementMap,z.displacementScale=R.displacementScale,z.displacementBias=R.displacementBias,z.wireframeLinewidth=R.wireframeLinewidth,z.linewidth=R.linewidth,v.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const N=n.properties.get(z);N.light=v}return z}function S(w,R,v,E,z){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&z===Ys)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const B=e.update(w),V=w.material;if(Array.isArray(V)){const L=B.groups;for(let F=0,D=L.length;F<D;F++){const Z=L[F],K=V[Z.materialIndex];if(K&&K.visible){const le=T(w,K,E,z);w.onBeforeShadow(n,w,R,v,B,le,Z),n.renderBufferDirect(v,null,B,le,w,Z),w.onAfterShadow(n,w,R,v,B,le,Z)}}}else if(V.visible){const L=T(w,V,E,z);w.onBeforeShadow(n,w,R,v,B,L,null),n.renderBufferDirect(v,null,B,L,w,null),w.onAfterShadow(n,w,R,v,B,L,null)}}const N=w.children;for(let B=0,V=N.length;B<V;B++)S(N[B],R,v,E,z)}function b(w){w.target.removeEventListener("dispose",b);for(const v in l){const E=l[v],z=w.target.uuid;z in E&&(E[z].dispose(),delete E[z])}}}function A0(n,e){function t(){let I=!1;const ae=new vt;let re=null;const me=new vt(0,0,0,0);return{setMask:function(ee){re!==ee&&!I&&(n.colorMask(ee,ee,ee,ee),re=ee)},setLocked:function(ee){I=ee},setClear:function(ee,q,ve,Ue,ht){ht===!0&&(ee*=Ue,q*=Ue,ve*=Ue),ae.set(ee,q,ve,Ue),me.equals(ae)===!1&&(n.clearColor(ee,q,ve,Ue),me.copy(ae))},reset:function(){I=!1,re=null,me.set(-1,0,0,0)}}}function i(){let I=!1,ae=!1,re=null,me=null,ee=null;return{setReversed:function(q){if(ae!==q){const ve=e.get("EXT_clip_control");q?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ae=q;const Ue=ee;ee=null,this.setClear(Ue)}},getReversed:function(){return ae},setTest:function(q){q?te(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(q){re!==q&&!I&&(n.depthMask(q),re=q)},setFunc:function(q){if(ae&&(q=rd[q]),me!==q){switch(q){case ba:n.depthFunc(n.NEVER);break;case Aa:n.depthFunc(n.ALWAYS);break;case wa:n.depthFunc(n.LESS);break;case Rs:n.depthFunc(n.LEQUAL);break;case Ra:n.depthFunc(n.EQUAL);break;case Ca:n.depthFunc(n.GEQUAL);break;case Pa:n.depthFunc(n.GREATER);break;case Da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=q}},setLocked:function(q){I=q},setClear:function(q){ee!==q&&(ee=q,ae&&(q=1-q),n.clearDepth(q))},reset:function(){I=!1,re=null,me=null,ee=null,ae=!1}}}function s(){let I=!1,ae=null,re=null,me=null,ee=null,q=null,ve=null,Ue=null,ht=null;return{setTest:function(st){I||(st?te(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(st){ae!==st&&!I&&(n.stencilMask(st),ae=st)},setFunc:function(st,Gn,kn){(re!==st||me!==Gn||ee!==kn)&&(n.stencilFunc(st,Gn,kn),re=st,me=Gn,ee=kn)},setOp:function(st,Gn,kn){(q!==st||ve!==Gn||Ue!==kn)&&(n.stencilOp(st,Gn,kn),q=st,ve=Gn,Ue=kn)},setLocked:function(st){I=st},setClear:function(st){ht!==st&&(n.clearStencil(st),ht=st)},reset:function(){I=!1,ae=null,re=null,me=null,ee=null,q=null,ve=null,Ue=null,ht=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,d=null,y=null,T=null,S=null,b=null,w=null,R=new et(0,0,0),v=0,E=!1,z=null,C=null,N=null,B=null,V=null;const L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,D=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=D>=1):Z.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=D>=2);let K=null,le={};const ce=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),Re=new vt().fromArray(ce),tt=new vt().fromArray(Q);function We(I,ae,re,me){const ee=new Uint8Array(4),q=n.createTexture();n.bindTexture(I,q),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<re;ve++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(ae+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return q}const $={};$[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(Rs),Le(!1),at(fc),te(n.CULL_FACE),qe(ei);function te(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function ne(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ce(I,ae){return h[I]!==ae?(n.bindFramebuffer(I,ae),h[I]=ae,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ae),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Te(I,ae){let re=m,me=!1;if(I){re=f.get(ae),re===void 0&&(re=[],f.set(ae,re));const ee=I.textures;if(re.length!==ee.length||re[0]!==n.COLOR_ATTACHMENT0){for(let q=0,ve=ee.length;q<ve;q++)re[q]=n.COLOR_ATTACHMENT0+q;re.length=ee.length,me=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,me=!0);me&&n.drawBuffers(re)}function Ee(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const Xe={[Bi]:n.FUNC_ADD,[Rf]:n.FUNC_SUBTRACT,[Cf]:n.FUNC_REVERSE_SUBTRACT};Xe[Pf]=n.MIN,Xe[Df]=n.MAX;const ke={[If]:n.ZERO,[Lf]:n.ONE,[Uf]:n.SRC_COLOR,[Ea]:n.SRC_ALPHA,[Vf]:n.SRC_ALPHA_SATURATE,[Bf]:n.DST_COLOR,[Ff]:n.DST_ALPHA,[Nf]:n.ONE_MINUS_SRC_COLOR,[Ta]:n.ONE_MINUS_SRC_ALPHA,[zf]:n.ONE_MINUS_DST_COLOR,[Of]:n.ONE_MINUS_DST_ALPHA,[Gf]:n.CONSTANT_COLOR,[kf]:n.ONE_MINUS_CONSTANT_COLOR,[Hf]:n.CONSTANT_ALPHA,[Wf]:n.ONE_MINUS_CONSTANT_ALPHA};function qe(I,ae,re,me,ee,q,ve,Ue,ht,st){if(I===ei){g===!0&&(ne(n.BLEND),g=!1);return}if(g===!1&&(te(n.BLEND),g=!0),I!==wf){if(I!==p||st!==E){if((d!==Bi||S!==Bi)&&(n.blendEquation(n.FUNC_ADD),d=Bi,S=Bi),st)switch(I){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Je("WebGLState: Invalid blending: ",I);break}else switch(I){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pc:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",I);break}y=null,T=null,b=null,w=null,R.set(0,0,0),v=0,p=I,E=st}return}ee=ee||ae,q=q||re,ve=ve||me,(ae!==d||ee!==S)&&(n.blendEquationSeparate(Xe[ae],Xe[ee]),d=ae,S=ee),(re!==y||me!==T||q!==b||ve!==w)&&(n.blendFuncSeparate(ke[re],ke[me],ke[q],ke[ve]),y=re,T=me,b=q,w=ve),(Ue.equals(R)===!1||ht!==v)&&(n.blendColor(Ue.r,Ue.g,Ue.b,ht),R.copy(Ue),v=ht),p=I,E=!1}function Ye(I,ae){I.side===$n?ne(n.CULL_FACE):te(n.CULL_FACE);let re=I.side===Qt;ae&&(re=!re),Le(re),I.blending===Es&&I.transparent===!1?qe(ei):qe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const me=I.stencilWrite;a.setTest(me),me&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(I){z!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),z=I)}function at(I){I!==Tf?(te(n.CULL_FACE),I!==C&&(I===fc?n.cullFace(n.BACK):I===bf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),C=I}function P(I){I!==N&&(F&&n.lineWidth(I),N=I)}function _t(I,ae,re){I?(te(n.POLYGON_OFFSET_FILL),(B!==ae||V!==re)&&(B=ae,V=re,o.getReversed()&&(ae=-ae),n.polygonOffset(ae,re))):ne(n.POLYGON_OFFSET_FILL)}function $e(I){I?te(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function it(I){I===void 0&&(I=n.TEXTURE0+L-1),K!==I&&(n.activeTexture(I),K=I)}function _e(I,ae,re){re===void 0&&(K===null?re=n.TEXTURE0+L-1:re=K);let me=le[re];me===void 0&&(me={type:void 0,texture:void 0},le[re]=me),(me.type!==I||me.texture!==ae)&&(K!==re&&(n.activeTexture(re),K=re),n.bindTexture(I,ae||$[I]),me.type=I,me.texture=ae)}function A(){const I=le[K];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(I){Je("WebGLState:",I)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(I){Je("WebGLState:",I)}}function Y(){try{n.texSubImage2D(...arguments)}catch(I){Je("WebGLState:",I)}}function j(){try{n.texSubImage3D(...arguments)}catch(I){Je("WebGLState:",I)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Je("WebGLState:",I)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Je("WebGLState:",I)}}function se(){try{n.texStorage2D(...arguments)}catch(I){Je("WebGLState:",I)}}function be(){try{n.texStorage3D(...arguments)}catch(I){Je("WebGLState:",I)}}function Pe(){try{n.texImage2D(...arguments)}catch(I){Je("WebGLState:",I)}}function J(){try{n.texImage3D(...arguments)}catch(I){Je("WebGLState:",I)}}function ie(I){Re.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Re.copy(I))}function xe(I){tt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),tt.copy(I))}function ye(I,ae){let re=l.get(ae);re===void 0&&(re=new WeakMap,l.set(ae,re));let me=re.get(I);me===void 0&&(me=n.getUniformBlockIndex(ae,I.name),re.set(I,me))}function de(I,ae){const me=l.get(ae).get(I);c.get(ae)!==me&&(n.uniformBlockBinding(ae,me,I.__bindingPointIndex),c.set(ae,me))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,le={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,d=null,y=null,T=null,S=null,b=null,w=null,R=new et(0,0,0),v=0,E=!1,z=null,C=null,N=null,B=null,V=null,Re.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:ne,bindFramebuffer:Ce,drawBuffers:Te,useProgram:Ee,setBlending:qe,setMaterial:Ye,setFlipSided:Le,setCullFace:at,setLineWidth:P,setPolygonOffset:_t,setScissorTest:$e,activeTexture:it,bindTexture:_e,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Pe,texImage3D:J,updateUBOMapping:ye,uniformBlockBinding:de,texStorage2D:se,texStorage3D:be,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:ge,scissor:ie,viewport:xe,reset:Ve}}function w0(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return m?new OffscreenCanvas(A,x):lo("canvas")}function g(A,x,U){let Y=1;const j=_e(A);if((j.width>U||j.height>U)&&(Y=U/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(Y*j.width),ge=Math.floor(Y*j.height);h===void 0&&(h=_(X,ge));const se=x?_(X,ge):h;return se.width=X,se.height=ge,se.getContext("2d").drawImage(A,0,0,X,ge),Ne("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+ge+")."),se}else return"data"in A&&Ne("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,x,U,Y,j=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=x;if(x===n.RED&&(U===n.FLOAT&&(X=n.R32F),U===n.HALF_FLOAT&&(X=n.R16F),U===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(X=n.R8UI),U===n.UNSIGNED_SHORT&&(X=n.R16UI),U===n.UNSIGNED_INT&&(X=n.R32UI),U===n.BYTE&&(X=n.R8I),U===n.SHORT&&(X=n.R16I),U===n.INT&&(X=n.R32I)),x===n.RG&&(U===n.FLOAT&&(X=n.RG32F),U===n.HALF_FLOAT&&(X=n.RG16F),U===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(X=n.RG8UI),U===n.UNSIGNED_SHORT&&(X=n.RG16UI),U===n.UNSIGNED_INT&&(X=n.RG32UI),U===n.BYTE&&(X=n.RG8I),U===n.SHORT&&(X=n.RG16I),U===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(X=n.RGB8UI),U===n.UNSIGNED_SHORT&&(X=n.RGB16UI),U===n.UNSIGNED_INT&&(X=n.RGB32UI),U===n.BYTE&&(X=n.RGB8I),U===n.SHORT&&(X=n.RGB16I),U===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),U===n.UNSIGNED_INT&&(X=n.RGBA32UI),U===n.BYTE&&(X=n.RGBA8I),U===n.SHORT&&(X=n.RGBA16I),U===n.INT&&(X=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),x===n.RGBA){const ge=j?ao:Ke.getTransfer(Y);U===n.FLOAT&&(X=n.RGBA32F),U===n.HALF_FLOAT&&(X=n.RGBA16F),U===n.UNSIGNED_BYTE&&(X=ge===rt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(A,x){let U;return A?x===null||x===Bn||x===or?U=n.DEPTH24_STENCIL8:x===Dn?U=n.DEPTH32F_STENCIL8:x===rr&&(U=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bn||x===or?U=n.DEPTH_COMPONENT24:x===Dn?U=n.DEPTH_COMPONENT32F:x===rr&&(U=n.DEPTH_COMPONENT16),U}function b(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ft&&A.minFilter!==Ht?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){const x=A.target;x.removeEventListener("dispose",w),v(x),x.isVideoTexture&&u.delete(x)}function R(A){const x=A.target;x.removeEventListener("dispose",R),z(x)}function v(A){const x=i.get(A);if(x.__webglInit===void 0)return;const U=A.source,Y=f.get(U);if(Y){const j=Y[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(A),Object.keys(Y).length===0&&f.delete(U)}i.remove(A)}function E(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const U=A.source,Y=f.get(U);delete Y[x.__cacheKey],o.memory.textures--}function z(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let j=0;j<x.__webglFramebuffer[Y].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[Y][j]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=A.textures;for(let Y=0,j=U.length;Y<j;Y++){const X=i.get(U[Y]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(U[Y])}i.remove(A)}let C=0;function N(){C=0}function B(){const A=C;return A>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function L(A,x){const U=i.get(A);if(A.isVideoTexture&&$e(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const Y=A.image;if(Y===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{$(U,A,x);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function F(A,x){const U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){$(U,A,x);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function D(A,x){const U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){$(U,A,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function Z(A,x){const U=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){te(U,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const K={[Ia]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},le={[Ft]:n.NEAREST,[Yf]:n.NEAREST_MIPMAP_NEAREST,[xr]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[Co]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},ce={[Kf]:n.NEVER,[td]:n.ALWAYS,[jf]:n.LESS,[Ul]:n.LEQUAL,[Jf]:n.EQUAL,[Nl]:n.GEQUAL,[Qf]:n.GREATER,[ed]:n.NOTEQUAL};function Q(A,x){if(x.type===Dn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ht||x.magFilter===Co||x.magFilter===xr||x.magFilter===Gi||x.minFilter===Ht||x.minFilter===Co||x.minFilter===xr||x.minFilter===Gi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,K[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,K[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,K[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,le[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,le[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ft||x.minFilter!==xr&&x.minFilter!==Gi||x.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Re(A,x){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));const Y=x.source;let j=f.get(Y);j===void 0&&(j={},f.set(Y,j));const X=V(x);if(X!==A.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),j[X].usedTimes++;const ge=j[A.__cacheKey];ge!==void 0&&(j[A.__cacheKey].usedTimes--,ge.usedTimes===0&&E(x)),A.__cacheKey=X,A.__webglTexture=j[X].texture}return U}function tt(A,x,U){return Math.floor(Math.floor(A/U)/x)}function We(A,x,U,Y){const X=A.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,Y,x.data);else{X.sort((J,ie)=>J.start-ie.start);let ge=0;for(let J=1;J<X.length;J++){const ie=X[ge],xe=X[J],ye=ie.start+ie.count,de=tt(xe.start,x.width,4),Ve=tt(ie.start,x.width,4);xe.start<=ye+1&&de===Ve&&tt(xe.start+xe.count-1,x.width,4)===de?ie.count=Math.max(ie.count,xe.start+xe.count-ie.start):(++ge,X[ge]=xe)}X.length=ge+1;const se=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let J=0,ie=X.length;J<ie;J++){const xe=X[J],ye=Math.floor(xe.start/4),de=Math.ceil(xe.count/4),Ve=ye%x.width,I=Math.floor(ye/x.width),ae=de,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ve,I,ae,re,U,Y,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function $(A,x,U){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const j=Re(A,x),X=x.source;t.bindTexture(Y,A.__webglTexture,n.TEXTURE0+U);const ge=i.get(X);if(X.version!==ge.__version||j===!0){t.activeTexture(n.TEXTURE0+U);const se=Ke.getPrimaries(Ke.workingColorSpace),be=x.colorSpace===mi?null:Ke.getPrimaries(x.colorSpace),Pe=x.colorSpace===mi||se===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let J=g(x.image,!1,s.maxTextureSize);J=it(x,J);const ie=r.convert(x.format,x.colorSpace),xe=r.convert(x.type);let ye=T(x.internalFormat,ie,xe,x.colorSpace,x.isVideoTexture);Q(Y,x);let de;const Ve=x.mipmaps,I=x.isVideoTexture!==!0,ae=ge.__version===void 0||j===!0,re=X.dataReady,me=b(x,J);if(x.isDepthTexture)ye=S(x.format===ki,x.type),ae&&(I?t.texStorage2D(n.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,ie,xe,null));else if(x.isDataTexture)if(Ve.length>0){I&&ae&&t.texStorage2D(n.TEXTURE_2D,me,ye,Ve[0].width,Ve[0].height);for(let ee=0,q=Ve.length;ee<q;ee++)de=Ve[ee],I?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,ie,xe,de.data):t.texImage2D(n.TEXTURE_2D,ee,ye,de.width,de.height,0,ie,xe,de.data);x.generateMipmaps=!1}else I?(ae&&t.texStorage2D(n.TEXTURE_2D,me,ye,J.width,J.height),re&&We(x,J,ie,xe)):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,ie,xe,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,Ve[0].width,Ve[0].height,J.depth);for(let ee=0,q=Ve.length;ee<q;ee++)if(de=Ve[ee],x.format!==Sn)if(ie!==null)if(I){if(re)if(x.layerUpdates.size>0){const ve=zc(de.width,de.height,x.format,x.type);for(const Ue of x.layerUpdates){const ht=de.data.subarray(Ue*ve/de.data.BYTES_PER_ELEMENT,(Ue+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Ue,de.width,de.height,1,ie,ht)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,J.depth,ie,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,ye,de.width,de.height,J.depth,0,de.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,J.depth,ie,xe,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,ye,de.width,de.height,J.depth,0,ie,xe,de.data)}else{I&&ae&&t.texStorage2D(n.TEXTURE_2D,me,ye,Ve[0].width,Ve[0].height);for(let ee=0,q=Ve.length;ee<q;ee++)de=Ve[ee],x.format!==Sn?ie!==null?I?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,ie,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,ye,de.width,de.height,0,de.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,ie,xe,de.data):t.texImage2D(n.TEXTURE_2D,ee,ye,de.width,de.height,0,ie,xe,de.data)}else if(x.isDataArrayTexture)if(I){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,J.width,J.height,J.depth),re)if(x.layerUpdates.size>0){const ee=zc(J.width,J.height,x.format,x.type);for(const q of x.layerUpdates){const ve=J.data.subarray(q*ee/J.data.BYTES_PER_ELEMENT,(q+1)*ee/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,ie,xe,ve)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ie,xe,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,ie,xe,J.data);else if(x.isData3DTexture)I?(ae&&t.texStorage3D(n.TEXTURE_3D,me,ye,J.width,J.height,J.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ie,xe,J.data)):t.texImage3D(n.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,ie,xe,J.data);else if(x.isFramebufferTexture){if(ae)if(I)t.texStorage2D(n.TEXTURE_2D,me,ye,J.width,J.height);else{let ee=J.width,q=J.height;for(let ve=0;ve<me;ve++)t.texImage2D(n.TEXTURE_2D,ve,ye,ee,q,0,ie,xe,null),ee>>=1,q>>=1}}else if(Ve.length>0){if(I&&ae){const ee=_e(Ve[0]);t.texStorage2D(n.TEXTURE_2D,me,ye,ee.width,ee.height)}for(let ee=0,q=Ve.length;ee<q;ee++)de=Ve[ee],I?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ie,xe,de):t.texImage2D(n.TEXTURE_2D,ee,ye,ie,xe,de);x.generateMipmaps=!1}else if(I){if(ae){const ee=_e(J);t.texStorage2D(n.TEXTURE_2D,me,ye,ee.width,ee.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie,xe,J)}else t.texImage2D(n.TEXTURE_2D,0,ye,ie,xe,J);p(x)&&d(Y),ge.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function te(A,x,U){if(x.image.length!==6)return;const Y=Re(A,x),j=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+U);const X=i.get(j);if(j.version!==X.__version||Y===!0){t.activeTexture(n.TEXTURE0+U);const ge=Ke.getPrimaries(Ke.workingColorSpace),se=x.colorSpace===mi?null:Ke.getPrimaries(x.colorSpace),be=x.colorSpace===mi||ge===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,ie=[];for(let q=0;q<6;q++)!Pe&&!J?ie[q]=g(x.image[q],!0,s.maxCubemapSize):ie[q]=J?x.image[q].image:x.image[q],ie[q]=it(x,ie[q]);const xe=ie[0],ye=r.convert(x.format,x.colorSpace),de=r.convert(x.type),Ve=T(x.internalFormat,ye,de,x.colorSpace),I=x.isVideoTexture!==!0,ae=X.__version===void 0||Y===!0,re=j.dataReady;let me=b(x,xe);Q(n.TEXTURE_CUBE_MAP,x);let ee;if(Pe){I&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ve,xe.width,xe.height);for(let q=0;q<6;q++){ee=ie[q].mipmaps;for(let ve=0;ve<ee.length;ve++){const Ue=ee[ve];x.format!==Sn?ye!==null?I?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,0,0,Ue.width,Ue.height,ye,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,Ve,Ue.width,Ue.height,0,Ue.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,0,0,Ue.width,Ue.height,ye,de,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,Ve,Ue.width,Ue.height,0,ye,de,Ue.data)}}}else{if(ee=x.mipmaps,I&&ae){ee.length>0&&me++;const q=_e(ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ve,q.width,q.height)}for(let q=0;q<6;q++)if(J){I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ie[q].width,ie[q].height,ye,de,ie[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ve,ie[q].width,ie[q].height,0,ye,de,ie[q].data);for(let ve=0;ve<ee.length;ve++){const ht=ee[ve].image[q].image;I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,0,0,ht.width,ht.height,ye,de,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,Ve,ht.width,ht.height,0,ye,de,ht.data)}}else{I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ye,de,ie[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ve,ye,de,ie[q]);for(let ve=0;ve<ee.length;ve++){const Ue=ee[ve];I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,0,0,ye,de,Ue.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,Ve,ye,de,Ue.image[q])}}}p(x)&&d(n.TEXTURE_CUBE_MAP),X.__version=j.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ne(A,x,U,Y,j,X){const ge=r.convert(U.format,U.colorSpace),se=r.convert(U.type),be=T(U.internalFormat,ge,se,U.colorSpace),Pe=i.get(x),J=i.get(U);if(J.__renderTarget=x,!Pe.__hasExternalTextures){const ie=Math.max(1,x.width>>X),xe=Math.max(1,x.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,X,be,ie,xe,x.depth,0,ge,se,null):t.texImage2D(j,X,be,ie,xe,0,ge,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),_t(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,j,J.__webglTexture,0,P(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,j,J.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(A,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const Y=x.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,X=S(x.stencilBuffer,j),ge=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_t(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),X,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,A)}else{const Y=x.textures;for(let j=0;j<Y.length;j++){const X=Y[j],ge=r.convert(X.format,X.colorSpace),se=r.convert(X.type),be=T(X.internalFormat,ge,se,X.colorSpace);_t(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(x),be,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(x),be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(A,x,U){const Y=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Q(n.TEXTURE_CUBE_MAP,x.depthTexture);const Pe=r.convert(x.depthTexture.format),J=r.convert(x.depthTexture.type);let ie;x.depthTexture.format===si?ie=n.DEPTH_COMPONENT24:x.depthTexture.format===ki&&(ie=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ie,x.width,x.height,0,Pe,J,null)}}else L(x.depthTexture,0);const X=j.__webglTexture,ge=P(x),se=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,be=x.depthTexture.format===ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===si)_t(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,se,X,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,be,se,X,0);else if(x.depthTexture.format===ki)_t(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,se,X,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,be,se,X,0);else throw new Error("Unknown depthTexture format")}function Ee(A){const x=i.get(A),U=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Y}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let Y=0;Y<6;Y++)Te(x.__webglFramebuffer[Y],A,Y);else{const Y=A.texture.mipmaps;Y&&Y.length>0?Te(x.__webglFramebuffer[0],A,0):Te(x.__webglFramebuffer,A,0)}else if(U){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),Ce(x.__webglDepthbuffer[Y],A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ce(x.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(A,x,U){const Y=i.get(A);x!==void 0&&ne(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ee(A)}function ke(A){const x=A.texture,U=i.get(A),Y=i.get(x);A.addEventListener("dispose",R);const j=A.textures,X=A.isWebGLCubeRenderTarget===!0,ge=j.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,o.memory.textures++),X){U.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[se]=[];for(let be=0;be<x.mipmaps.length;be++)U.__webglFramebuffer[se][be]=n.createFramebuffer()}else U.__webglFramebuffer[se]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)U.__webglFramebuffer[se]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ge)for(let se=0,be=j.length;se<be;se++){const Pe=i.get(j[se]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&_t(A)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const be=j[se];U.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[se]);const Pe=r.convert(be.format,be.colorSpace),J=r.convert(be.type),ie=T(be.internalFormat,Pe,J,be.colorSpace,A.isXRRenderTarget===!0),xe=P(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ie,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,U.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Q(n.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)ne(U.__webglFramebuffer[se][be],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be);else ne(U.__webglFramebuffer[se],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let se=0,be=j.length;se<be;se++){const Pe=j[se],J=i.get(Pe);let ie=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,J.__webglTexture),Q(ie,Pe),ne(U.__webglFramebuffer,A,Pe,n.COLOR_ATTACHMENT0+se,ie,0),p(Pe)&&d(ie)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),Q(se,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)ne(U.__webglFramebuffer[be],A,x,n.COLOR_ATTACHMENT0,se,be);else ne(U.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,se,0);p(x)&&d(se),t.unbindTexture()}A.depthBuffer&&Ee(A)}function qe(A){const x=A.textures;for(let U=0,Y=x.length;U<Y;U++){const j=x[U];if(p(j)){const X=y(A),ge=i.get(j).__webglTexture;t.bindTexture(X,ge),d(X),t.unbindTexture()}}}const Ye=[],Le=[];function at(A){if(A.samples>0){if(_t(A)===!1){const x=A.textures,U=A.width,Y=A.height;let j=n.COLOR_BUFFER_BIT;const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(A),se=x.length>1;if(se)for(let Pe=0;Pe<x.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const be=A.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Pe=0;Pe<x.length;Pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Pe]);const J=i.get(x[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,U,Y,0,0,U,Y,j,n.NEAREST),c===!0&&(Ye.length=0,Le.length=0,Ye.push(n.COLOR_ATTACHMENT0+Pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ye.push(X),Le.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Pe=0;Pe<x.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Pe]);const J=i.get(x[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function P(A){return Math.min(s.maxSamples,A.samples)}function _t(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function $e(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function it(A,x){const U=A.colorSpace,Y=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Ds&&U!==mi&&(Ke.getTransfer(U)===rt?(Y!==Sn||j!==an)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",U)),x}function _e(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=L,this.setTexture2DArray=F,this.setTexture3D=D,this.setTextureCube=Z,this.rebindTextures=Xe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function R0(n,e){function t(i,s=mi){let r;const o=Ke.getTransfer(s);if(i===an)return n.UNSIGNED_BYTE;if(i===Rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===th)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ju)return n.BYTE;if(i===Qu)return n.SHORT;if(i===rr)return n.UNSIGNED_SHORT;if(i===wl)return n.INT;if(i===Bn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===ii)return n.HALF_FLOAT;if(i===nh)return n.ALPHA;if(i===ih)return n.RGB;if(i===Sn)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===ki)return n.DEPTH_STENCIL;if(i===sh)return n.RED;if(i===Pl)return n.RED_INTEGER;if(i===Ps)return n.RG;if(i===Dl)return n.RG_INTEGER;if(i===Il)return n.RGBA_INTEGER;if(i===Yr||i===$r||i===Zr||i===Kr)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ua||i===Na||i===Fa||i===Oa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ba||i===za||i===Va||i===Ga||i===ka||i===Ha||i===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ba||i===za)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Va)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ga)return r.COMPRESSED_R11_EAC;if(i===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ha)return r.COMPRESSED_RG11_EAC;if(i===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xa||i===qa||i===Ya||i===$a||i===Za||i===Ka||i===ja||i===Ja||i===Qa||i===el||i===tl||i===nl||i===il||i===sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ya)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$a)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Za)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ka)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ja)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ja)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===el)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===il)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===ol||i===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===rl)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ll||i===cl||i===ul||i===hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
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

}`;class D0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new dh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Vn({vertexShader:C0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new _o(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I0 extends Ls{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,_=null;const g=typeof XRWebGLBinding<"u",p=new D0,d={},y=t.getContextAttributes();let T=null,S=null;const b=[],w=[],R=new Be;let v=null;const E=new hn;E.viewport=new vt;const z=new hn;z.viewport=new vt;const C=[E,z],N=new Wd;let B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=b[$];return te===void 0&&(te=new Oo,b[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=b[$];return te===void 0&&(te=new Oo,b[$]=te),te.getGripSpace()},this.getHand=function($){let te=b[$];return te===void 0&&(te=new Oo,b[$]=te),te.getHandSpace()};function L($){const te=w.indexOf($.inputSource);if(te===-1)return;const ne=b[te];ne!==void 0&&(ne.update($.inputSource,$.frame,l||o),ne.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",D);for(let $=0;$<b.length;$++){const te=w[$];te!==null&&(w[$]=null,b[$].disconnect(te))}B=null,V=null,p.reset();for(const $ in d)delete d[$];e.setRenderTarget(T),m=null,f=null,h=null,s=null,S=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",F),s.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Ce=null,Te=null;y.depth&&(Te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=y.stencil?ki:si,Ce=y.stencil?or:Bn);const Ee={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ee),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Nn(f.textureWidth,f.textureHeight,{format:Sn,type:an,depthTexture:new lr(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Nn(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),We.setContext(s),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function D($){for(let te=0;te<$.removed.length;te++){const ne=$.removed[te],Ce=w.indexOf(ne);Ce>=0&&(w[Ce]=null,b[Ce].disconnect(ne))}for(let te=0;te<$.added.length;te++){const ne=$.added[te];let Ce=w.indexOf(ne);if(Ce===-1){for(let Ee=0;Ee<b.length;Ee++)if(Ee>=w.length){w.push(ne),Ce=Ee;break}else if(w[Ee]===null){w[Ee]=ne,Ce=Ee;break}if(Ce===-1)break}const Te=b[Ce];Te&&Te.connect(ne)}}const Z=new G,K=new G;function le($,te,ne){Z.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(ne.matrixWorld);const Ce=Z.distanceTo(K),Te=te.projectionMatrix.elements,Ee=ne.projectionMatrix.elements,Xe=Te[14]/(Te[10]-1),ke=Te[14]/(Te[10]+1),qe=(Te[9]+1)/Te[5],Ye=(Te[9]-1)/Te[5],Le=(Te[8]-1)/Te[0],at=(Ee[8]+1)/Ee[0],P=Xe*Le,_t=Xe*at,$e=Ce/(-Le+at),it=$e*-Le;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(it),$.translateZ($e),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const _e=Xe+$e,A=ke+$e,x=P-it,U=_t+(Ce-it),Y=qe*ke/A*_e,j=Ye*ke/A*_e;$.projectionMatrix.makePerspective(x,U,Y,j,_e,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let te=$.near,ne=$.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(ne=p.depthFar)),N.near=z.near=E.near=te,N.far=z.far=E.far=ne,(B!==N.near||V!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,V=N.far),N.layers.mask=$.layers.mask|6,E.layers.mask=N.layers.mask&-5,z.layers.mask=N.layers.mask&-3;const Ce=$.parent,Te=N.cameras;ce(N,Ce);for(let Ee=0;Ee<Te.length;Ee++)ce(Te[Ee],Ce);Te.length===2?le(N,E,z):N.projectionMatrix.copy(E.projectionMatrix),Q($,N,Ce)};function Q($,te,ne){ne===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(ne.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=fl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function($){return d[$]};let Re=null;function tt($,te){if(u=te.getViewerPose(l||o),_=te,u!==null){const ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ce=!1;ne.length!==N.cameras.length&&(N.cameras.length=0,Ce=!0);for(let ke=0;ke<ne.length;ke++){const qe=ne[ke];let Ye=null;if(m!==null)Ye=m.getViewport(qe);else{const at=h.getViewSubImage(f,qe);Ye=at.viewport,ke===0&&(e.setRenderTargetTextures(S,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(S))}let Le=C[ke];Le===void 0&&(Le=new hn,Le.layers.enable(ke),Le.viewport=new vt,C[ke]=Le),Le.matrix.fromArray(qe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(qe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ke===0&&(N.matrix.copy(Le.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ce===!0&&N.cameras.push(Le)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=i.getBinding();const ke=h.getDepthInformation(ne[0]);ke&&ke.isValid&&ke.texture&&p.init(ke,s.renderState)}if(Te&&Te.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let ke=0;ke<ne.length;ke++){const qe=ne[ke].camera;if(qe){let Ye=d[qe];Ye||(Ye=new dh,d[qe]=Ye);const Le=h.getCameraImage(qe);Ye.sourceTexture=Le}}}}for(let ne=0;ne<b.length;ne++){const Ce=w[ne],Te=b[ne];Ce!==null&&Te!==void 0&&Te.update(Ce,te,l||o)}Re&&Re($,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const We=new gh;We.setAnimationLoop(tt),this.setAnimationLoop=function($){Re=$},this.dispose=function(){}}}const Ii=new zn,L0=new St;function U0(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,ph(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,T,S){d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,y,T):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Qt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Qt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d),T=y.envMap,S=y.envMapRotation;T&&(p.envMap.value=T,Ii.copy(S),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),p.envMapRotation.value.setFromMatrix4(L0.makeRotationFromEuler(Ii)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,y,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=T*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N0(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){const S=T.program;i.uniformBlockBinding(y,S)}function l(y,T){let S=s[y.id];S===void 0&&(_(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",p));const b=T.program;i.updateUBOMapping(y,b);const w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function u(y){const T=h();y.__bindingPointIndex=T;const S=n.createBuffer(),b=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,b,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const T=s[y.id],S=y.uniforms,b=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,R=S.length;w<R;w++){const v=Array.isArray(S[w])?S[w]:[S[w]];for(let E=0,z=v.length;E<z;E++){const C=v[E];if(m(C,w,E,b)===!0){const N=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let L=0;L<B.length;L++){const F=B[L],D=g(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,N+V,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,V),V+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,T,S,b){const w=y.value,R=T+"_"+S;if(b[R]===void 0)return typeof w=="number"||typeof w=="boolean"?b[R]=w:b[R]=w.clone(),!0;{const v=b[R];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return b[R]=w,!0}else if(v.equals(w)===!1)return v.copy(w),!0}return!1}function _(y){const T=y.uniforms;let S=0;const b=16;for(let R=0,v=T.length;R<v;R++){const E=Array.isArray(T[R])?T[R]:[T[R]];for(let z=0,C=E.length;z<C;z++){const N=E[z],B=Array.isArray(N.value)?N.value:[N.value];for(let V=0,L=B.length;V<L;V++){const F=B[V],D=g(F),Z=S%b,K=Z%D.boundary,le=Z+K;S+=K,le!==0&&b-le<D.storage&&(S+=b-le),N.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=D.storage}}}const w=S%b;return w>0&&(S+=b-w),y.__size=S,y.__cache={},this}function g(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",y),T}function p(y){const T=y.target;T.removeEventListener("dispose",p);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}const F0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function O0(){return An===null&&(An=new wd(F0,16,16,Ps,ii),An.name="DFG_LUT",An.minFilter=Ht,An.magFilter=Ht,An.wrapS=Zn,An.wrapT=Zn,An.generateMipmaps=!1,An.needsUpdate=!0),An}class B0{constructor(e={}){const{canvas:t=id(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=an}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const g=m,p=new Set([Il,Dl,Pl]),d=new Set([an,Bn,rr,or,Rl,Cl]),y=new Uint32Array(4),T=new Int32Array(4);let S=null,b=null;const w=[],R=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let z=!1;this._outputColorSpace=un;let C=0,N=0,B=null,V=-1,L=null;const F=new vt,D=new vt;let Z=null;const K=new et(0);let le=0,ce=t.width,Q=t.height,Re=1,tt=null,We=null;const $=new vt(0,0,ce,Q),te=new vt(0,0,ce,Q);let ne=!1;const Ce=new Bl;let Te=!1,Ee=!1;const Xe=new St,ke=new G,qe=new vt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function at(){return B===null?Re:1}let P=i;function _t(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Al}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ht,!1),P===null){const O="webgl2";if(P=_t(O,M),P===null)throw _t(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Je("WebGLRenderer: "+M.message),M}let $e,it,_e,A,x,U,Y,j,X,ge,se,be,Pe,J,ie,xe,ye,de,Ve,I,ae,re,me;function ee(){$e=new B_(P),$e.init(),ae=new R0(P,$e),it=new P_(P,$e,e,ae),_e=new A0(P,$e),it.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),A=new G_(P),x=new f0,U=new w0(P,$e,_e,x,it,ae,A),Y=new O_(E),j=new qd(P),re=new R_(P,j),X=new z_(P,j,A,re),ge=new H_(P,X,j,re,A),de=new k_(P,it,U),ie=new D_(x),se=new h0(E,Y,$e,it,re,ie),be=new U0(E,x),Pe=new p0,J=new y0($e),ye=new w_(E,Y,_e,ge,_,c),xe=new b0(E,ge,it),me=new N0(P,A,it,_e),Ve=new C_(P,$e,A),I=new V_(P,$e,A),A.programs=se.programs,E.capabilities=it,E.extensions=$e,E.properties=x,E.renderLists=Pe,E.shadowMap=xe,E.state=_e,E.info=A}ee(),g!==an&&(v=new X_(g,t.width,t.height,s,r));const q=new I0(E,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=$e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(M){M!==void 0&&(Re=M,this.setSize(ce,Q,!1))},this.getSize=function(M){return M.set(ce,Q)},this.setSize=function(M,O,W=!0){if(q.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=M,Q=O,t.width=Math.floor(M*Re),t.height=Math.floor(O*Re),W===!0&&(t.style.width=M+"px",t.style.height=O+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(ce*Re,Q*Re).floor()},this.setDrawingBufferSize=function(M,O,W){ce=M,Q=O,Re=W,t.width=Math.floor(M*W),t.height=Math.floor(O*W),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(g===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(F)},this.getViewport=function(M){return M.copy($)},this.setViewport=function(M,O,W,H){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,O,W,H),_e.viewport(F.copy($).multiplyScalar(Re).round())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,O,W,H){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,O,W,H),_e.scissor(D.copy(te).multiplyScalar(Re).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){_e.setScissorTest(ne=M)},this.setOpaqueSort=function(M){tt=M},this.setTransparentSort=function(M){We=M},this.getClearColor=function(M){return M.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,W=!0){let H=0;if(M){let k=!1;if(B!==null){const he=B.texture.format;k=p.has(he)}if(k){const he=B.texture.type,pe=d.has(he),fe=ye.getClearColor(),Me=ye.getClearAlpha(),Ae=fe.r,Fe=fe.g,Ge=fe.b;pe?(y[0]=Ae,y[1]=Fe,y[2]=Ge,y[3]=Me,P.clearBufferuiv(P.COLOR,0,y)):(T[0]=Ae,T[1]=Fe,T[2]=Ge,T[3]=Me,P.clearBufferiv(P.COLOR,0,T))}else H|=P.COLOR_BUFFER_BIT}O&&(H|=P.DEPTH_BUFFER_BIT),W&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),ye.dispose(),Pe.dispose(),J.dispose(),x.dispose(),Y.dispose(),ge.dispose(),re.dispose(),me.dispose(),se.dispose(),q.dispose(),q.removeEventListener("sessionstart",ql),q.removeEventListener("sessionend",Yl),bi.stop()};function ve(M){M.preventDefault(),yc("WebGLRenderer: Context Lost."),z=!0}function Ue(){yc("WebGLRenderer: Context Restored."),z=!1;const M=A.autoReset,O=xe.enabled,W=xe.autoUpdate,H=xe.needsUpdate,k=xe.type;ee(),A.autoReset=M,xe.enabled=O,xe.autoUpdate=W,xe.needsUpdate=H,xe.type=k}function ht(M){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function st(M){const O=M.target;O.removeEventListener("dispose",st),Gn(O)}function Gn(M){kn(M),x.remove(M)}function kn(M){const O=x.get(M).programs;O!==void 0&&(O.forEach(function(W){se.releaseProgram(W)}),M.isShaderMaterial&&se.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,W,H,k,he){O===null&&(O=Ye);const pe=k.isMesh&&k.matrixWorld.determinant()<0,fe=Nh(M,O,W,H,k);_e.setMaterial(H,pe);let Me=W.index,Ae=1;if(H.wireframe===!0){if(Me=X.getWireframeAttribute(W),Me===void 0)return;Ae=2}const Fe=W.drawRange,Ge=W.attributes.position;let we=Fe.start*Ae,lt=(Fe.start+Fe.count)*Ae;he!==null&&(we=Math.max(we,he.start*Ae),lt=Math.min(lt,(he.start+he.count)*Ae)),Me!==null?(we=Math.max(we,0),lt=Math.min(lt,Me.count)):Ge!=null&&(we=Math.max(we,0),lt=Math.min(lt,Ge.count));const Et=lt-we;if(Et<0||Et===1/0)return;re.setup(k,H,fe,W,Me);let gt,ct=Ve;if(Me!==null&&(gt=j.get(Me),ct=I,ct.setIndex(gt)),k.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*at()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(k.isLine){let Ot=H.linewidth;Ot===void 0&&(Ot=1),_e.setLineWidth(Ot*at()),k.isLineSegments?ct.setMode(P.LINES):k.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else k.isPoints?ct.setMode(P.POINTS):k.isSprite&&ct.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)co("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ot=k._multiDrawStarts,Se=k._multiDrawCounts,en=k._multiDrawCount,je=Me?j.get(Me).bytesPerElement:1,pn=x.get(H).currentProgram.getUniforms();for(let Tn=0;Tn<en;Tn++)pn.setValue(P,"_gl_DrawID",Tn),ct.render(Ot[Tn]/je,Se[Tn])}else if(k.isInstancedMesh)ct.renderInstances(we,Et,k.count);else if(W.isInstancedBufferGeometry){const Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,Ot);ct.renderInstances(we,Et,Se)}else ct.render(we,Et)};function Xl(M,O,W){M.transparent===!0&&M.side===$n&&M.forceSinglePass===!1?(M.side=Qt,M.needsUpdate=!0,pr(M,O,W),M.side=Si,M.needsUpdate=!0,pr(M,O,W),M.side=$n):pr(M,O,W)}this.compile=function(M,O,W=null){W===null&&(W=M),b=J.get(W),b.init(O),R.push(b),W.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),M!==W&&M.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights();const H=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let pe=0;pe<he.length;pe++){const fe=he[pe];Xl(fe,W,k),H.add(fe)}else Xl(he,W,k),H.add(he)}),b=R.pop(),H},this.compileAsync=function(M,O,W=null){const H=this.compile(M,O,W);return new Promise(k=>{function he(){if(H.forEach(function(pe){x.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){k(M);return}setTimeout(he,10)}$e.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let vo=null;function Uh(M){vo&&vo(M)}function ql(){bi.stop()}function Yl(){bi.start()}const bi=new gh;bi.setAnimationLoop(Uh),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(M){vo=M,q.setAnimationLoop(M),M===null?bi.stop():bi.start()},q.addEventListener("sessionstart",ql),q.addEventListener("sessionend",Yl),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const W=q.enabled===!0&&q.isPresenting===!0,H=v!==null&&(B===null||W)&&v.begin(E,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,O,B),b=J.get(M,R.length),b.init(O),R.push(b),Xe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ce.setFromProjectionMatrix(Xe,In,O.reversedDepth),Ee=this.localClippingEnabled,Te=ie.init(this.clippingPlanes,Ee),S=Pe.get(M,w.length),S.init(),w.push(S),q.enabled===!0&&q.isPresenting===!0){const pe=E.xr.getDepthSensingMesh();pe!==null&&yo(pe,O,-1/0,E.sortObjects)}yo(M,O,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(tt,We),Le=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Le&&ye.addToRenderList(S,M),this.info.render.frame++,Te===!0&&ie.beginShadows();const k=b.state.shadowsArray;if(xe.render(k,M,O),Te===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&v.hasRenderPass())===!1){const pe=S.opaque,fe=S.transmissive;if(b.setupLights(),O.isArrayCamera){const Me=O.cameras;if(fe.length>0)for(let Ae=0,Fe=Me.length;Ae<Fe;Ae++){const Ge=Me[Ae];Zl(pe,fe,M,Ge)}Le&&ye.render(M);for(let Ae=0,Fe=Me.length;Ae<Fe;Ae++){const Ge=Me[Ae];$l(S,M,Ge,Ge.viewport)}}else fe.length>0&&Zl(pe,fe,M,O),Le&&ye.render(M),$l(S,M,O)}B!==null&&N===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),H&&v.end(E),M.isScene===!0&&M.onAfterRender(E,M,O),re.resetDefaultState(),V=-1,L=null,R.pop(),R.length>0?(b=R[R.length-1],Te===!0&&ie.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function yo(M,O,W,H){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ce.intersectsSprite(M)){H&&qe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Xe);const pe=ge.update(M),fe=M.material;fe.visible&&S.push(M,pe,fe,W,qe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ce.intersectsObject(M))){const pe=ge.update(M),fe=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),qe.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),qe.copy(pe.boundingSphere.center)),qe.applyMatrix4(M.matrixWorld).applyMatrix4(Xe)),Array.isArray(fe)){const Me=pe.groups;for(let Ae=0,Fe=Me.length;Ae<Fe;Ae++){const Ge=Me[Ae],we=fe[Ge.materialIndex];we&&we.visible&&S.push(M,pe,we,W,qe.z,Ge)}}else fe.visible&&S.push(M,pe,fe,W,qe.z,null)}}const he=M.children;for(let pe=0,fe=he.length;pe<fe;pe++)yo(he[pe],O,W,H)}function $l(M,O,W,H){const{opaque:k,transmissive:he,transparent:pe}=M;b.setupLightsView(W),Te===!0&&ie.setGlobalState(E.clippingPlanes,W),H&&_e.viewport(F.copy(H)),k.length>0&&dr(k,O,W),he.length>0&&dr(he,O,W),pe.length>0&&dr(pe,O,W),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Zl(M,O,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const we=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Nn(1,1,{generateMipmaps:!0,type:we?ii:an,minFilter:Gi,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const he=b.state.transmissionRenderTarget[H.id],pe=H.viewport||F;he.setSize(pe.z*E.transmissionResolutionScale,pe.w*E.transmissionResolutionScale);const fe=E.getRenderTarget(),Me=E.getActiveCubeFace(),Ae=E.getActiveMipmapLevel();E.setRenderTarget(he),E.getClearColor(K),le=E.getClearAlpha(),le<1&&E.setClearColor(16777215,.5),E.clear(),Le&&ye.render(W);const Fe=E.toneMapping;E.toneMapping=Un;const Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),Te===!0&&ie.setGlobalState(E.clippingPlanes,H),dr(M,W,H),U.updateMultisampleRenderTarget(he),U.updateRenderTargetMipmap(he),$e.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let lt=0,Et=O.length;lt<Et;lt++){const gt=O[lt],{object:ct,geometry:Ot,material:Se,group:en}=gt;if(Se.side===$n&&ct.layers.test(H.layers)){const je=Se.side;Se.side=Qt,Se.needsUpdate=!0,Kl(ct,W,H,Ot,Se,en),Se.side=je,Se.needsUpdate=!0,we=!0}}we===!0&&(U.updateMultisampleRenderTarget(he),U.updateRenderTargetMipmap(he))}E.setRenderTarget(fe,Me,Ae),E.setClearColor(K,le),Ge!==void 0&&(H.viewport=Ge),E.toneMapping=Fe}function dr(M,O,W){const H=O.isScene===!0?O.overrideMaterial:null;for(let k=0,he=M.length;k<he;k++){const pe=M[k],{object:fe,geometry:Me,group:Ae}=pe;let Fe=pe.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),fe.layers.test(W.layers)&&Kl(fe,O,W,Me,Fe,Ae)}}function Kl(M,O,W,H,k,he){M.onBeforeRender(E,O,W,H,k,he),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(E,O,W,H,M,he),k.transparent===!0&&k.side===$n&&k.forceSinglePass===!1?(k.side=Qt,k.needsUpdate=!0,E.renderBufferDirect(W,O,H,k,M,he),k.side=Si,k.needsUpdate=!0,E.renderBufferDirect(W,O,H,k,M,he),k.side=$n):E.renderBufferDirect(W,O,H,k,M,he),M.onAfterRender(E,O,W,H,k,he)}function pr(M,O,W){O.isScene!==!0&&(O=Ye);const H=x.get(M),k=b.state.lights,he=b.state.shadowsArray,pe=k.state.version,fe=se.getParameters(M,k.state,he,O,W),Me=se.getProgramCacheKey(fe);let Ae=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Fe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=Y.get(M.envMap||H.environment,Fe),H.envMapRotation=H.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",st),Ae=new Map,H.programs=Ae);let Ge=Ae.get(Me);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===pe)return Jl(M,fe),Ge}else fe.uniforms=se.getUniforms(M),M.onBeforeCompile(fe,E),Ge=se.acquireProgram(fe,Me),Ae.set(Me,Ge),H.uniforms=fe.uniforms;const we=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=ie.uniform),Jl(M,fe),H.needsLights=Oh(M),H.lightsStateVersion=pe,H.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotLightMatrix.value=k.state.spotLightMatrix,we.spotLightMap.value=k.state.spotLightMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function jl(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=jr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Jl(M,O){const W=x.get(M);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Nh(M,O,W,H,k){O.isScene!==!0&&(O=Ye),U.resetTextureUnits();const he=O.fog,pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,fe=B===null?E.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ds,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ae=Y.get(H.envMap||pe,Me),Fe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!W.morphAttributes.position,lt=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color;let gt=Un;H.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(gt=E.toneMapping);const ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ot=ct!==void 0?ct.length:0,Se=x.get(H),en=b.state.lights;if(Te===!0&&(Ee===!0||M!==L)){const Pt=M===L&&H.id===V;ie.setState(H,M,Pt)}let je=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==en.state.version||Se.outputColorSpace!==fe||k.isBatchedMesh&&Se.batching===!1||!k.isBatchedMesh&&Se.batching===!0||k.isBatchedMesh&&Se.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Se.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Se.instancing===!1||!k.isInstancedMesh&&Se.instancing===!0||k.isSkinnedMesh&&Se.skinning===!1||!k.isSkinnedMesh&&Se.skinning===!0||k.isInstancedMesh&&Se.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Se.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Se.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Se.instancingMorph===!1&&k.morphTexture!==null||Se.envMap!==Ae||H.fog===!0&&Se.fog!==he||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ie.numPlanes||Se.numIntersection!==ie.numIntersection)||Se.vertexAlphas!==Fe||Se.vertexTangents!==Ge||Se.morphTargets!==we||Se.morphNormals!==lt||Se.morphColors!==Et||Se.toneMapping!==gt||Se.morphTargetsCount!==Ot)&&(je=!0):(je=!0,Se.__version=H.version);let pn=Se.currentProgram;je===!0&&(pn=pr(H,O,k));let Tn=!1,Ai=!1,Zi=!1;const ut=pn.getUniforms(),Ut=Se.uniforms;if(_e.useProgram(pn.program)&&(Tn=!0,Ai=!0,Zi=!0),H.id!==V&&(V=H.id,Ai=!0),Tn||L!==M){_e.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",M.projectionMatrix),ut.setValue(P,"viewMatrix",M.matrixWorldInverse);const ai=ut.map.cameraPosition;ai!==void 0&&ai.setValue(P,ke.setFromMatrixPosition(M.matrixWorld)),it.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ut.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),L!==M&&(L=M,Ai=!0,Zi=!0)}if(Se.needsLights&&(en.state.directionalShadowMap.length>0&&ut.setValue(P,"directionalShadowMap",en.state.directionalShadowMap,U),en.state.spotShadowMap.length>0&&ut.setValue(P,"spotShadowMap",en.state.spotShadowMap,U),en.state.pointShadowMap.length>0&&ut.setValue(P,"pointShadowMap",en.state.pointShadowMap,U)),k.isSkinnedMesh){ut.setOptional(P,k,"bindMatrix"),ut.setOptional(P,k,"bindMatrixInverse");const Pt=k.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ut.setValue(P,"boneTexture",Pt.boneTexture,U))}k.isBatchedMesh&&(ut.setOptional(P,k,"batchingTexture"),ut.setValue(P,"batchingTexture",k._matricesTexture,U),ut.setOptional(P,k,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",k._indirectTexture,U),ut.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",k._colorsTexture,U));const oi=W.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&de.update(k,W,pn),(Ai||Se.receiveShadow!==k.receiveShadow)&&(Se.receiveShadow=k.receiveShadow,ut.setValue(P,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Ut.envMapIntensity.value=O.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=O0()),Ai&&(ut.setValue(P,"toneMappingExposure",E.toneMappingExposure),Se.needsLights&&Fh(Ut,Zi),he&&H.fog===!0&&be.refreshFogUniforms(Ut,he),be.refreshMaterialUniforms(Ut,H,Re,Q,b.state.transmissionRenderTarget[M.id]),jr.upload(P,jl(Se),Ut,U)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(jr.upload(P,jl(Se),Ut,U),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ut.setValue(P,"center",k.center),ut.setValue(P,"modelViewMatrix",k.modelViewMatrix),ut.setValue(P,"normalMatrix",k.normalMatrix),ut.setValue(P,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Pt=H.uniformsGroups;for(let ai=0,Ki=Pt.length;ai<Ki;ai++){const Ql=Pt[ai];me.update(Ql,pn),me.bind(Ql,pn)}}return pn}function Fh(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Oh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,O,W){const H=x.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),x.get(M.texture).__webglTexture=O,x.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const W=x.get(M);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Bh=P.createFramebuffer();this.setRenderTarget=function(M,O=0,W=0){B=M,C=O,N=W;let H=null,k=!1,he=!1;if(M){const fe=x.get(M);if(fe.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(P.FRAMEBUFFER,fe.__webglFramebuffer),F.copy(M.viewport),D.copy(M.scissor),Z=M.scissorTest,_e.viewport(F),_e.scissor(D),_e.setScissorTest(Z),V=-1;return}else if(fe.__webglFramebuffer===void 0)U.setupRenderTarget(M);else if(fe.__hasExternalTextures)U.rebindTextures(M,x.get(M.texture).__webglTexture,x.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Fe=M.depthTexture;if(fe.__boundDepthTexture!==Fe){if(Fe!==null&&x.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(M)}}const Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(he=!0);const Ae=x.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[O])?H=Ae[O][W]:H=Ae[O],k=!0):M.samples>0&&U.useMultisampledRTT(M)===!1?H=x.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[W]:H=Ae,F.copy(M.viewport),D.copy(M.scissor),Z=M.scissorTest}else F.copy($).multiplyScalar(Re).floor(),D.copy(te).multiplyScalar(Re).floor(),Z=ne;if(W!==0&&(H=Bh),_e.bindFramebuffer(P.FRAMEBUFFER,H)&&_e.drawBuffers(M,H),_e.viewport(F),_e.scissor(D),_e.setScissorTest(Z),k){const fe=x.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,fe.__webglTexture,W)}else if(he){const fe=O;for(let Me=0;Me<M.textures.length;Me++){const Ae=x.get(M.textures[Me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Me,Ae.__webglTexture,W,fe)}}else if(M!==null&&W!==0){const fe=x.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(M,O,W,H,k,he,pe,fe=0){if(!(M&&M.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){_e.bindFramebuffer(P.FRAMEBUFFER,Me);try{const Ae=M.textures[fe],Fe=Ae.format,Ge=Ae.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe),!it.textureFormatReadable(Fe)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ge)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-H&&W>=0&&W<=M.height-k&&P.readPixels(O,W,H,k,ae.convert(Fe),ae.convert(Ge),he)}finally{const Ae=B!==null?x.get(B).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,O,W,H,k,he,pe,fe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me)if(O>=0&&O<=M.width-H&&W>=0&&W<=M.height-k){_e.bindFramebuffer(P.FRAMEBUFFER,Me);const Ae=M.textures[fe],Fe=Ae.format,Ge=Ae.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe),!it.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(O,W,H,k,ae.convert(Fe),ae.convert(Ge),0);const lt=B!==null?x.get(B).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,lt);const Et=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await sd(P,Et,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(we),P.deleteSync(Et),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,W=0){const H=Math.pow(2,-W),k=Math.floor(M.image.width*H),he=Math.floor(M.image.height*H),pe=O!==null?O.x:0,fe=O!==null?O.y:0;U.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,pe,fe,k,he),_e.unbindTexture()};const zh=P.createFramebuffer(),Vh=P.createFramebuffer();this.copyTextureToTexture=function(M,O,W=null,H=null,k=0,he=0){let pe,fe,Me,Ae,Fe,Ge,we,lt,Et;const gt=M.isCompressedTexture?M.mipmaps[he]:M.image;if(W!==null)pe=W.max.x-W.min.x,fe=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Fe=W.min.y,Ge=W.isBox3?W.min.z:0;else{const Ut=Math.pow(2,-k);pe=Math.floor(gt.width*Ut),fe=Math.floor(gt.height*Ut),M.isDataArrayTexture?Me=gt.depth:M.isData3DTexture?Me=Math.floor(gt.depth*Ut):Me=1,Ae=0,Fe=0,Ge=0}H!==null?(we=H.x,lt=H.y,Et=H.z):(we=0,lt=0,Et=0);const ct=ae.convert(O.format),Ot=ae.convert(O.type);let Se;O.isData3DTexture?(U.setTexture3D(O,0),Se=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(U.setTexture2DArray(O,0),Se=P.TEXTURE_2D_ARRAY):(U.setTexture2D(O,0),Se=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const en=P.getParameter(P.UNPACK_ROW_LENGTH),je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pn=P.getParameter(P.UNPACK_SKIP_PIXELS),Tn=P.getParameter(P.UNPACK_SKIP_ROWS),Ai=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge);const Zi=M.isDataArrayTexture||M.isData3DTexture,ut=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const Ut=x.get(M),oi=x.get(O),Pt=x.get(Ut.__renderTarget),ai=x.get(oi.__renderTarget);_e.bindFramebuffer(P.READ_FRAMEBUFFER,Pt.__webglFramebuffer),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let Ki=0;Ki<Me;Ki++)Zi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(M).__webglTexture,k,Ge+Ki),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(O).__webglTexture,he,Et+Ki)),P.blitFramebuffer(Ae,Fe,pe,fe,we,lt,pe,fe,P.DEPTH_BUFFER_BIT,P.NEAREST);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||x.has(M)){const Ut=x.get(M),oi=x.get(O);_e.bindFramebuffer(P.READ_FRAMEBUFFER,zh),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,Vh);for(let Pt=0;Pt<Me;Pt++)Zi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,k,Ge+Pt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,k),ut?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,oi.__webglTexture,he,Et+Pt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,oi.__webglTexture,he),k!==0?P.blitFramebuffer(Ae,Fe,pe,fe,we,lt,pe,fe,P.COLOR_BUFFER_BIT,P.NEAREST):ut?P.copyTexSubImage3D(Se,he,we,lt,Et+Pt,Ae,Fe,pe,fe):P.copyTexSubImage2D(Se,he,we,lt,Ae,Fe,pe,fe);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ut?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Se,he,we,lt,Et,pe,fe,Me,ct,Ot,gt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,he,we,lt,Et,pe,fe,Me,ct,gt.data):P.texSubImage3D(Se,he,we,lt,Et,pe,fe,Me,ct,Ot,gt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,we,lt,pe,fe,ct,Ot,gt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,we,lt,gt.width,gt.height,ct,gt.data):P.texSubImage2D(P.TEXTURE_2D,he,we,lt,pe,fe,ct,Ot,gt);P.pixelStorei(P.UNPACK_ROW_LENGTH,en),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ai),he===0&&O.generateMipmaps&&P.generateMipmap(Se),_e.unbindTexture()},this.initRenderTarget=function(M){x.get(M).__webglFramebuffer===void 0&&U.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?U.setTextureCube(M,0):M.isData3DTexture?U.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?U.setTexture2DArray(M,0):U.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){C=0,N=0,B=null,_e.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}var z0=Tl('<div style=position:absolute;user-select:none;touch-action:none><div style="position:absolute;transform:translate(-50%, -50%);border:5px solid rgba(255,255,255,0.5)"><div style=position:absolute;transform:translate(-50%,-50%);background-color:rgba(255,255,255,0.5)>');function V0(n){let e=At(n.position),t=At(typeof n.hitAreaSize=="function"?n.hitAreaSize():n.hitAreaSize),i=At(n.outerRingSize),s=At(n.knobSize),r=At(),o=Gt(()=>{let c=r[0]();return c==null?new Be:new Be().copy(c).multiplyScalar(1/i[0]())});return{position:e,hitAreaSize:t,outerRingSize:i,knobSize:s,dragOffset:r,value:o,UI:()=>{let[c,l]=At(!1),[u,h]=At(),[f,m]=r,[_,g]=At(),p,d=S=>{let b=_();if(b==null)return;p=S.pointerId,b.setPointerCapture(p);let w=b.getBoundingClientRect();h(new Be(S.clientX-w.left,S.clientY-w.top)),m(new Be)},y=S=>{let b=_();if(b==null)return;let w=u();if(w==null)return;b.setPointerCapture(S.pointerId);let R=b.getBoundingClientRect(),v=new Be(S.clientX-R.left-w.x,S.clientY-R.top-w.y),E=v.length();E>.5*i[0]()&&v.multiplyScalar(.5*i[0]()/E),m(v)},T=S=>{_()!=null&&p!=null&&(h(void 0),m(void 0))};return(()=>{var S=z0(),b=S.firstChild,w=b.firstChild;S.$$contextmenu=v=>v.preventDefault(),S.$$pointerup=T,S.$$pointermove=y,S.$$pointerdown=d;var R=g;return typeof R=="function"||Array.isArray(R)?bl(()=>R,S):g=S,El(()=>({e:`${e[0]().x}px`,t:`${e[0]().y}px`,a:`${t[0]()}px`,o:`${t[0]()}px`,i:`${u()?.x??.5*t[0]()}px`,n:`${u()?.y??.5*t[0]()}px`,s:`${i[0]()}px`,h:`${i[0]()}px`,r:`${.5*i[0]()+2.5}px`,d:`${.5*i[0]()+(f()?.x??0)}px`,l:`${.5*i[0]()+(f()?.y??0)}px`,u:`${s[0]()}px`,c:`${s[0]()}px`,w:`${.5*s[0]()}px`}),({e:v,t:E,a:z,o:C,i:N,n:B,s:V,h:L,r:F,d:D,l:Z,u:K,c:le,w:ce},Q)=>{v!==Q.e&&bt(S,"left",v),E!==Q.t&&bt(S,"top",E),z!==Q.a&&bt(S,"width",z),C!==Q.o&&bt(S,"height",C),N!==Q.i&&bt(b,"left",N),B!==Q.n&&bt(b,"top",B),V!==Q.s&&bt(b,"width",V),L!==Q.h&&bt(b,"height",L),F!==Q.r&&bt(b,"border-radius",F),D!==Q.d&&bt(w,"left",D),Z!==Q.l&&bt(w,"top",Z),K!==Q.u&&bt(w,"width",K),le!==Q.c&&bt(w,"height",le),ce!==Q.w&&bt(w,"border-radius",ce)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0}),S})()}}}ku(["pointerdown","pointermove","pointerup","contextmenu"]);var G0=Tl("<div style=position:absolute;user-select:none;touch-action:none>");function k0(n){let e=At(n.position),t=At(n.size()),[i,s]=At(!1);return{position:e,size:t,pressed:i,UI:()=>{let[o,a]=At(),c,l=h=>{let f=o();f!=null&&(c=h.pointerId,f.setPointerCapture(c),s(!0))},u=h=>{o()!=null&&c!=null&&s(!1)};return(()=>{var h=G0();h.$$contextmenu=m=>m.preventDefault(),h.$$pointerup=u,h.$$pointerdown=l;var f=a;return typeof f=="function"||Array.isArray(f)?bl(()=>f,h):a=h,El(()=>({e:`${e[0]().x}px`,t:`${e[0]().y}px`,a:`${t[0]()}px`,o:`${t[0]()}px`,i:`${.5*t[0]()}px`,n:i()?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.5)"}),({e:m,t:_,a:g,o:p,i:d,n:y},T)=>{m!==T.e&&bt(h,"left",m),_!==T.t&&bt(h,"top",_),g!==T.a&&bt(h,"width",g),p!==T.o&&bt(h,"height",p),d!==T.i&&bt(h,"border-radius",d),y!==T.n&&bt(h,"background-color",y)},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),h})()}}}ku(["pointerdown","pointerup","contextmenu"]);class H0 extends Error{constructor(e,t,i){super(e),this.is_operational=t,this.context=i,this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}var Eh=(n=>(n.EID_MAX_INDEX_OVERFLOW="EID_MAX_INDEX_OVERFLOW",n.EID_MAX_GEN_OVERFLOW="EID_MAX_GEN_OVERFLOW",n.COMPONENT_NOT_REGISTERED="COMPONENT_NOT_REGISTERED",n.ENTITY_NOT_ALIVE="ENTITY_NOT_ALIVE",n.CIRCULAR_SYSTEM_DEPENDENCY="CIRCULAR_SYSTEM_DEPENDENCY",n.DUPLICATE_SYSTEM="DUPLICATE_SYSTEM",n.ARCHETYPE_NOT_FOUND="ARCHETYPE_NOT_FOUND",n.RESOURCE_NOT_REGISTERED="RESOURCE_NOT_REGISTERED",n))(Eh||{});class W0 extends H0{constructor(e,t,i){super(t??e,!0,i),this.category=e}}function fr(n,e,t){return n}const wn=-1,vn=-1,Js=Object.freeze(Object.create(null)),Ui=5,Ni=31,X0=2166136261,q0=16777619,Y0=2654435769,$0=1367130551,ri=16,cu=2,Th=1024,Gr=0,uu=0,Z0=31,K0=1/60,j0=4,J0=0,Q0=4;class ni{_words;constructor(e){this._words=e??new Array(Q0).fill(0)}has(e){const t=e>>>Ui;return t>=this._words.length?!1:(this._words[t]&1<<(e&Ni))!==0}set(e){const t=e>>>Ui;t>=this._words.length&&this.grow(t+1),this._words[t]|=1<<(e&Ni)}clear(e){const t=e>>>Ui;t>=this._words.length||(this._words[t]&=~(1<<(e&Ni)))}overlaps(e){const t=this._words,i=e._words,s=t.length<i.length?t.length:i.length;for(let r=0;r<s;r++)if((t[r]&i[r])!==0)return!0;return!1}contains(e){const t=e._words,i=this._words,s=i.length;for(let r=0;r<t.length;r++){const o=t[r];if(o!==0&&(r>=s||(i[r]&o)!==o))return!1}return!0}equals(e){const t=this._words,i=e._words,s=t.length>i.length?t.length:i.length;for(let r=0;r<s;r++){const o=r<t.length?t[r]:0,a=r<i.length?i[r]:0;if(o!==a)return!1}return!0}copy(){return new ni(this._words.slice())}copy_with_set(e){const t=e>>>Ui,i=t+1,s=this._words.length>i?this._words.length:i,r=new Array(s).fill(0);for(let o=0;o<this._words.length;o++)r[o]=this._words[o];return r[t]|=1<<(e&Ni),new ni(r)}copy_with_clear(e){const t=this._words.slice(),i=e>>>Ui;return i<t.length&&(t[i]&=~(1<<(e&Ni))),new ni(t)}hash(){let e=X0;const t=this._words;let i=t.length-1;for(;i>=0&&t[i]===0;)i--;for(let s=0;s<=i;s++)e^=t[s],e=Math.imul(e,q0);return e}for_each(e){const t=this._words;for(let i=0;i<t.length;i++){let s=t[i];if(s===0)continue;const r=i<<Ui;for(;s!==0;){const o=s&-s>>>0,a=Ni-Math.clz32(o);e(r+a),s^=o}}}grow(e){let t=this._words.length;for(;t<e;)t*=2;const i=new Array(t).fill(0);for(let s=0;s<this._words.length;s++)i[s]=this._words[s];this._words=i}}class Ei{constructor(e,t=ri){this._ctor=e,this._buf=new e(t)}_buf;_len=0;get length(){return this._len}push(e){this._len>=this._buf.length&&this._grow(),this._buf[this._len++]=e}pop(){return this._buf[--this._len]}get(e){return this._buf[e]}set_at(e,t){this._buf[e]=t}swap_remove(e){const t=this._buf[e];return this._buf[e]=this._buf[--this._len],t}clear(){this._len=0}get buf(){return this._buf}view(){return this._buf.subarray(0,this._len)}[Symbol.iterator](){let e=0;const t=this._buf,i=this._len;return{next(){return e<i?{value:t[e++],done:!1}:{value:0,done:!0}}}}ensure_capacity(e){if(e<=this._buf.length)return;let t=this._buf.length||1;for(;t<e;)t*=cu;const i=new this._ctor(t);i.set(this._buf.subarray(0,this._len)),this._buf=i}bulk_append(e,t,i){this.ensure_capacity(this._len+i),this._buf.set(e.subarray(t,t+i),this._len),this._len+=i}bulk_append_zeroes(e){this.ensure_capacity(this._len+e),this._buf.fill(0,this._len,this._len+e),this._len+=e}_grow(){const e=new this._ctor(this._buf.length*cu);e.set(this._buf),this._buf=e}}class ex extends Ei{constructor(e=ri){super(Float32Array,e)}}class tx extends Ei{constructor(e=ri){super(Float64Array,e)}}class nx extends Ei{constructor(e=ri){super(Int8Array,e)}}class ix extends Ei{constructor(e=ri){super(Int16Array,e)}}class sx extends Ei{constructor(e=ri){super(Int32Array,e)}}class rx extends Ei{constructor(e=ri){super(Uint8Array,e)}}class ox extends Ei{constructor(e=ri){super(Uint16Array,e)}}class bh extends Ei{constructor(e=ri){super(Uint32Array,e)}}const ax={f32:ex,f64:tx,i8:nx,i16:ix,i32:sx,u8:rx,u16:ox,u32:bh},Wi=20,Jr=(1<<Wi)-1,lx=Z0-Wi,hu=(1<<lx)-1,cx=(n,e)=>e<<Wi|n,sn=n=>n&Jr,fu=n=>n>>Wi,ux=n=>fr(n),hx=n=>fr(n);class fx{field_names;columns;reader;constructor(e){this.field_names=e,this.columns=[];for(let i=0;i<e.length;i++)this.columns.push([]);const t={length:0};for(let i=0;i<e.length;i++)t[e[i]]=this.columns[i];this.reader=t}emit(e){const t=this.field_names,i=this.columns;for(let s=0;s<t.length;s++)i[s].push(e[t[s]]);this.reader.length++}emit_signal(){this.reader.length++}clear(){this.reader.length=0;const e=this.columns;for(let t=0;t<e.length;t++)e[t].length=0}}const dx=n=>fr(n);class px{field_names;field_index;columns;reader;constructor(e,t){this.field_names=e,this.field_index=Object.create(null),this.columns=[];for(let r=0;r<e.length;r++)this.field_index[e[r]]=r,this.columns.push([t[e[r]]??0]);const i=Object.create(null),s=this.columns;for(let r=0;r<e.length;r++){const o=s[r];Object.defineProperty(i,e[r],{get(){return o[Gr]},enumerable:!0})}this.reader=i}write(e){const t=this.field_names,i=this.columns;for(let s=0;s<t.length;s++)t[s]in e&&(i[s][Gr]=e[t[s]])}read_field(e){return this.columns[e][Gr]}write_field(e,t){this.columns[e][Gr]=t}}const mx=n=>fr(n);class _x{id;mask;has_columns;_entity_ids;length=0;edges=[];_flat_columns=[];_col_offset=[];_field_count=[];_field_index=[];_field_names=[];column_groups=[];_column_ids=[];constructor(e,t,i,s=Th){if(this.id=e,this.mask=t,this._entity_ids=new bh(s),i){let r=0;for(let o=0;o<i.length;o++){const a=i[o],c=a.component_id,l=new Array(a.field_names.length);this._col_offset[c]=r,this._field_count[c]=a.field_names.length,this._field_index[c]=a.field_index,this._field_names[c]=a.field_names;for(let u=0;u<a.field_names.length;u++){const h=new ax[a.field_types[u]](s);l[u]=h,this._flat_columns[r++]=h}this.column_groups[c]={layout:a,columns:l},this._column_ids.push(c)}}this.has_columns=this._column_ids.length>0}get entity_count(){return this.length}get entity_ids(){return this._entity_ids.buf}get entity_list(){return this._entity_ids.view()}has_component(e){return this.mask.has(e)}matches(e){return this.mask.contains(e)}get_column(e,t){const i=e,s=this._field_index[i][t];return this._flat_columns[this._col_offset[i]+s].buf}write_fields(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return;const o=this._field_names[s],a=this._flat_columns;for(let c=0;c<o.length;c++)a[r+c].buf[e]=i[o[c]]}write_fields_positional(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return;const o=this._flat_columns;for(let a=0;a<i.length;a++)o[r+a].buf[e]=i[a]}read_field(e,t,i){const s=t,r=this._col_offset[s];if(r===void 0)return NaN;const o=this._field_index[s][i];return o===void 0?NaN:this._flat_columns[r+o].buf[e]}copy_shared_from(e,t,i){const s=e._col_offset,r=e._field_count,o=e._flat_columns,a=this._flat_columns,c=this._column_ids;for(let l=0;l<c.length;l++){const u=c[l],h=s[u];if(h===void 0)continue;const f=this._col_offset[u],m=r[u];for(let _=0;_<m;_++)a[f+_].buf[i]=o[h+_].buf[t]}}add_entity(e){const t=this.length;this._entity_ids.push(e);const i=this._flat_columns;for(let s=0;s<i.length;s++)i[s].push(0);return this.length++,t}remove_entity(e){const t=this.length-1;let i=vn;const s=this._flat_columns,r=this._entity_ids.buf;if(e!==t){r[e]=r[t],i=sn(r[e]);for(let o=0;o<s.length;o++)s[o].swap_remove(e)}else for(let o=0;o<s.length;o++)s[o].pop();return this._entity_ids.pop(),this.length--,i}add_entity_tag(e){const t=this.length;return this._entity_ids.push(e),this.length++,t}remove_entity_tag(e){const t=this.length-1;let i=vn;const s=this._entity_ids.buf;return e!==t&&(s[e]=s[t],i=sn(s[e])),this._entity_ids.pop(),this.length--,i}move_entity_from(e,t,i,s){const r=this.length;this._entity_ids.push(i);const o=this._flat_columns,a=e._flat_columns;for(let l=0;l<o.length;l++){const u=s[l];o[l].push(u>=0?a[u].buf[t]:0)}this.length++;const c=e.has_columns?e.remove_entity(t):e.remove_entity_tag(t);xt[0]=r,xt[1]=c}move_entity_from_tag(e,t,i){const s=this.length;this._entity_ids.push(i),this.length++;const r=e.remove_entity_tag(t);xt[0]=s,xt[1]=r}bulk_move_all_from(e,t){const i=e.length;if(i===0)return this.length;const s=this.length,r=this._flat_columns,o=e._flat_columns;this._entity_ids.bulk_append(e._entity_ids.buf,0,i);for(let a=0;a<r.length;a++){const c=t[a];c>=0?r[a].bulk_append(o[c].buf,0,i):r[a].bulk_append_zeroes(i)}this.length+=i,e.length=0,e._entity_ids.clear();for(let a=0;a<o.length;a++)o[a].clear();return s}get_edge(e){return this.edges[e]}set_edge(e,t){this.edges[e]=t}}const xt=[0,vn];function kr(n,e){const t=e._flat_columns,i=new Int16Array(t.length),s=e._column_ids,r=n._col_offset,o=e._col_offset,a=e._field_count;for(let c=0;c<s.length;c++){const l=s[c],u=o[l],h=a[l],f=r[l];if(f!==void 0)for(let m=0;m<h;m++)i[u+m]=f+m;else for(let m=0;m<h;m++)i[u+m]=-1}return i}function Ah(n,e,t){const i=n.get(e);i!==void 0?i.push(t):n.set(e,[t])}class gx{entity_generations=[];entity_high_water=0;entity_free_indices=[];entity_alive_count=0;component_metas=[];component_count=0;event_channels=[];event_count=0;resource_channels=[];resource_count=0;archetypes=[];archetype_map=new Map;next_archetype_id=0;component_index=new Map;registered_queries=[];empty_archetype_id;entity_archetype=[];entity_row=[];pending_destroy=[];pending_add_ids=[];pending_add_defs=[];pending_add_values=[];pending_remove_ids=[];pending_remove_defs=[];initial_capacity;constructor(e){this.initial_capacity=e??Th,this.empty_archetype_id=this.arch_get_or_create_from_mask(new ni)}arch_get(e){return this.archetypes[e]}arch_get_or_create_from_mask(e){const t=e.hash(),i=this.archetype_map.get(t);if(i!==void 0){for(let c=0;c<i.length;c++)if(this.archetypes[i[c]].mask.equals(e))return i[c]}const s=mx(this.next_archetype_id++),r=[];e.for_each(c=>{const l=c,u=this.component_metas[l];u&&u.field_names.length>0&&r.push({component_id:l,field_names:u.field_names,field_index:u.field_index,field_types:u.field_types})});const o=new _x(s,e,r,this.initial_capacity);this.archetypes.push(o),Ah(this.archetype_map,t,s),e.for_each(c=>{const l=c;let u=this.component_index.get(l);u||(u=new Set,this.component_index.set(l,u)),u.add(s)});const a=this.registered_queries;for(let c=0;c<a.length;c++){const l=a[c];o.matches(l.include_mask)&&(!l.exclude_mask||!o.mask.overlaps(l.exclude_mask))&&(!l.any_of_mask||o.mask.overlaps(l.any_of_mask))&&l.result.push(o)}return s}arch_resolve_add(e,t){const i=this.arch_get(e);if(i.mask.has(t))return e;const s=i.get_edge(t);if(s?.add!=null)return s.add;const r=this.arch_get_or_create_from_mask(i.mask.copy_with_set(t));return this.arch_cache_edge(i,this.arch_get(r),t),r}arch_resolve_remove(e,t){const i=this.arch_get(e);if(!i.mask.has(t))return e;const s=i.get_edge(t);if(s?.remove!=null)return s.remove;const r=this.arch_get_or_create_from_mask(i.mask.copy_with_clear(t));return this.arch_cache_edge(this.arch_get(r),i,t),r}arch_cache_edge(e,t,i){const s=e.get_edge(i)??{add:null,remove:null,add_map:null,remove_map:null};s.add=t.id,s.add_map=kr(e,t),e.set_edge(i,s);const r=t.get_edge(i)??{add:null,remove:null,add_map:null,remove_map:null};r.remove=e.id,r.remove_map=kr(t,e),t.set_edge(i,r)}create_entity(){let e,t;this.entity_free_indices.length>0?(e=this.entity_free_indices.pop(),t=this.entity_generations[e]):(e=this.entity_high_water++,this.entity_generations[e]=uu,t=uu),this.entity_alive_count++;const i=cx(e,t);return this.entity_archetype[e]=this.empty_archetype_id,this.entity_row[e]=wn,i}destroy_entity(e){if(!this.is_alive(e))return;const t=sn(e),i=this.entity_row[t];if(i!==wn){const r=this.arch_get(this.entity_archetype[t]).remove_entity(i);r!==vn&&(this.entity_row[r]=i)}this.entity_archetype[t]=wn,this.entity_row[t]=wn;const s=fu(e);this.entity_generations[t]=s+1&hu,this.entity_free_indices.push(t),this.entity_alive_count--}is_alive(e){const t=sn(e);return t<this.entity_high_water&&this.entity_generations[t]===fu(e)}get entity_count(){return this.entity_alive_count}destroy_entity_deferred(e){this.pending_destroy.push(e)}flush_destroyed(){const e=this.pending_destroy;if(e.length===0)return;const t=this.entity_archetype,i=this.entity_row,s=this.entity_generations,r=this.archetypes,o=this.entity_high_water;for(let a=0;a<e.length;a++){const c=e[a],l=c&Jr,u=c>>Wi;if(l>=o||s[l]!==u)continue;const h=i[l];if(h!==wn){const f=r[t[l]],m=f.has_columns?f.remove_entity(h):f.remove_entity_tag(h);m!==vn&&(i[m]=h)}t[l]=wn,i[l]=wn,s[l]=u+1&hu,this.entity_free_indices.push(l),this.entity_alive_count--}e.length=0}get pending_destroy_count(){return this.pending_destroy.length}add_component_deferred(e,t,i){this.pending_add_ids.push(e),this.pending_add_defs.push(t),this.pending_add_values.push(i??Js)}remove_component_deferred(e,t){this.pending_remove_ids.push(e),this.pending_remove_defs.push(t)}flush_structural(){this.pending_add_ids.length>0&&this._flush_adds(),this.pending_remove_ids.length>0&&this._flush_removes()}_flush_adds(){const e=this.pending_add_ids,t=this.pending_add_defs,i=this.pending_add_values,s=e.length,r=this.entity_archetype,o=this.entity_row,a=this.entity_generations,c=this.archetypes,l=this.component_metas,u=this.entity_high_water;for(let h=0;h<s;h++){const f=e[h],m=f&Jr,_=f>>Wi;if(m>=u||a[m]!==_)continue;const g=r[m],p=t[h],d=c[g];if(d.mask.has(p)){l[p].field_names.length>0&&d.write_fields(o[m],p,i[h]);continue}const y=this.arch_resolve_add(g,p),T=c[y],S=o[m],b=!T.has_columns&&!d.has_columns;let w;if(S!==wn){if(b)T.move_entity_from_tag(d,S,f);else{const R=d.get_edge(p);T.move_entity_from(d,S,f,R.add_map)}w=xt[0],xt[1]!==vn&&(o[xt[1]]=S)}else w=b?T.add_entity_tag(f):T.add_entity(f);l[p].field_names.length>0&&T.write_fields(w,p,i[h]),r[m]=y,o[m]=w}e.length=0,t.length=0,i.length=0}_flush_removes(){const e=this.pending_remove_ids,t=this.pending_remove_defs,i=e.length,s=this.entity_archetype,r=this.entity_row,o=this.entity_generations,a=this.archetypes,c=this.entity_high_water;for(let l=0;l<i;l++){const u=e[l],h=u&Jr,f=u>>Wi;if(h>=c||o[h]!==f)continue;const m=s[h],_=t[l],g=a[m];if(!g.mask.has(_))continue;const p=this.arch_resolve_remove(m,_),d=a[p],y=r[h];if(!d.has_columns&&!g.has_columns)d.move_entity_from_tag(g,y,u);else{const T=g.get_edge(_);d.move_entity_from(g,y,u,T.remove_map)}xt[1]!==vn&&(r[xt[1]]=y),s[h]=p,r[h]=xt[0]}e.length=0,t.length=0}get pending_structural_count(){return this.pending_add_ids.length+this.pending_remove_ids.length}register_component(e){const t=ux(this.component_count++),i=Object.keys(e),s=new Array(i.length),r=Object.create(null);for(let o=0;o<i.length;o++)r[i[o]]=o,s[o]=e[i[o]];return this.component_metas.push({field_names:i,field_index:r,field_types:s}),t}add_component(e,t,i){if(!this.is_alive(e))return;const s=sn(e),r=this.entity_archetype[s],o=this.arch_get(r);if(o.has_component(t)){o.write_fields(this.entity_row[s],t,i);return}const a=this.arch_resolve_add(r,t),c=this.arch_get(a),l=this.entity_row[s];let u;if(l!==wn){const h=o.get_edge(t);!c.has_columns&&!o.has_columns?c.move_entity_from_tag(o,l,e):c.move_entity_from(o,l,e,h.add_map),u=xt[0],xt[1]!==vn&&(this.entity_row[xt[1]]=l)}else u=c.has_columns?c.add_entity(e):c.add_entity_tag(e);c.write_fields(u,t,i),this.entity_archetype[s]=a,this.entity_row[s]=u}add_components(e,t){if(!this.is_alive(e))return;const i=sn(e),s=this.entity_archetype[i];let r=s;for(let o=0;o<t.length;o++)r=this.arch_resolve_add(r,t[o].def);if(r!==s){const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[i];let l;if(c!==wn){const u=kr(o,a);a.move_entity_from(o,c,e,u),l=xt[0],xt[1]!==vn&&(this.entity_row[xt[1]]=c)}else l=a.add_entity(e);for(let u=0;u<t.length;u++)a.write_fields(l,t[u].def,t[u].values??Js);this.entity_archetype[i]=r,this.entity_row[i]=l}else{const o=this.arch_get(s),a=this.entity_row[i];for(let c=0;c<t.length;c++)o.write_fields(a,t[c].def,t[c].values??Js)}}remove_component(e,t){if(!this.is_alive(e))return;const i=sn(e),s=this.entity_archetype[i],r=this.arch_get(s);if(!r.has_component(t))return;const o=this.arch_resolve_remove(s,t),a=this.arch_get(o),c=this.entity_row[i],l=r.get_edge(t);!a.has_columns&&!r.has_columns?a.move_entity_from_tag(r,c,e):a.move_entity_from(r,c,e,l.remove_map),xt[1]!==vn&&(this.entity_row[xt[1]]=c),this.entity_archetype[i]=o,this.entity_row[i]=xt[0]}remove_components(e,t){if(!this.is_alive(e))return;const i=sn(e),s=this.entity_archetype[i];let r=s;for(let u=0;u<t.length;u++)r=this.arch_resolve_remove(r,t[u]);if(r===s)return;const o=this.arch_get(s),a=this.arch_get(r),c=this.entity_row[i],l=kr(o,a);a.move_entity_from(o,c,e,l),xt[1]!==vn&&(this.entity_row[xt[1]]=c),this.entity_archetype[i]=r,this.entity_row[i]=xt[0]}has_component(e,t){if(!this.is_alive(e))return!1;const i=sn(e);return this.arch_get(this.entity_archetype[i]).has_component(t)}batch_add_component(e,t,i){if(e.length===0)return;const s=t;if(e.mask.has(s))return;const r=this.arch_resolve_add(e.id,s),o=this.arch_get(r),a=e.get_edge(s),c=e.length,l=this.entity_archetype,u=this.entity_row,h=o.bulk_move_all_from(e,a.add_map);for(let f=0;f<c;f++){const m=sn(o.entity_ids[h+f]);l[m]=r,u[m]=h+f}if(this.component_metas[s].field_names.length>0&&i)for(let f=0;f<c;f++)o.write_fields(h+f,s,i)}batch_remove_component(e,t){if(e.length===0)return;const i=t;if(!e.mask.has(i))return;const s=this.arch_resolve_remove(e.id,i),r=this.arch_get(s),o=e.get_edge(i),a=e.length,c=r.bulk_move_all_from(e,o.remove_map),l=this.entity_archetype,u=this.entity_row;for(let h=0;h<a;h++){const f=sn(r.entity_ids[c+h]);l[f]=s,u[f]=c+h}}get_entity_archetype(e){return this.arch_get(this.entity_archetype[sn(e)])}get_entity_row(e){return this.entity_row[sn(e)]}get_matching_archetypes(e,t,i){const s=e._words;let r=!1;for(let l=0;l<s.length;l++)if(s[l]!==0){r=!0;break}if(!r)return this.archetypes.filter(l=>(!t||!l.mask.overlaps(t))&&(!i||l.mask.overlaps(i)));let o,a=!1;for(let l=0;l<s.length;l++){let u=s[l];if(u===0)continue;const h=l<<Ui;for(;u!==0;){const f=u&-u>>>0,m=h+(Ni-Math.clz32(f));u^=f;const _=this.component_index.get(m);if(!_||_.size===0){a=!0;break}(!o||_.size<o.size)&&(o=_)}if(a)break}if(a||!o)return[];const c=[];for(const l of o){const u=this.arch_get(l);u.matches(e)&&(!t||!u.mask.overlaps(t))&&(!i||u.mask.overlaps(i))&&c.push(u)}return c}register_query(e,t,i){const s=this.get_matching_archetypes(e,t,i);return this.registered_queries.push({include_mask:e.copy(),exclude_mask:t?t.copy():null,any_of_mask:i?i.copy():null,result:s}),s}get archetype_count(){return this.archetypes.length}register_event(e){const t=hx(this.event_count++),i=new fx(e);return this.event_channels.push(i),t}emit_event(e,t){this.event_channels[e].emit(t)}emit_signal(e){this.event_channels[e].emit_signal()}get_event_reader(e){return this.event_channels[e].reader}clear_events(){const e=this.event_channels;for(let t=0;t<e.length;t++)e[t].clear()}register_resource(e,t){const i=dx(this.resource_count++),s=new px(e,t);return this.resource_channels.push(s),i}get_resource_reader(e){return this.resource_channels[e].reader}get_resource_channel(e){return this.resource_channels[e]}}const la=["PRE_STARTUP","STARTUP","POST_STARTUP"],ca=["PRE_UPDATE","UPDATE","POST_UPDATE"];class xx{label_systems=new Map;sorted_cache=new Map;system_index=new Map;next_insertion_order=0;constructor(){for(let e=0;e<la.length;e++)this.label_systems.set(la[e],[]);this.label_systems.set("FIXED_UPDATE",[]);for(let e=0;e<ca.length;e++)this.label_systems.set(ca[e],[])}add_systems(e,...t){for(const i of t){const s="system"in i?i.system:i,r="system"in i?i.ordering:void 0,o={descriptor:s,insertion_order:this.next_insertion_order++,before:new Set(r?.before??[]),after:new Set(r?.after??[])};this.label_systems.get(e).push(o),this.system_index.set(s,e),this.sorted_cache.delete(e)}}remove_system(e){const t=this.system_index.get(e);if(t===void 0)return;const i=this.label_systems.get(t),s=i.findIndex(r=>r.descriptor===e);if(s!==-1){const r=i.length-1;s!==r&&(i[s]=i[r]),i.pop();for(const o of i)o.before.delete(e),o.after.delete(e)}this.system_index.delete(e),this.sorted_cache.delete(t)}run_startup(e){for(const t of la)this.run_label(t,e,J0)}run_update(e,t){for(const i of ca)this.run_label(i,e,t)}run_fixed_update(e,t){this.run_label("FIXED_UPDATE",e,t)}has_fixed_systems(){return this.label_systems.get("FIXED_UPDATE").length>0}get_all_systems(){const e=[];for(const t of this.label_systems.values())for(const i of t)e.push(i.descriptor);return e}has_system(e){return this.system_index.has(e)}clear(){for(const e of this.label_systems.values())e.length=0;this.sorted_cache.clear(),this.system_index.clear()}run_label(e,t,i){const s=this.get_sorted(e);for(let r=0;r<s.length;r++)s[r].fn(t,i);t.flush()}get_sorted(e){const t=this.sorted_cache.get(e);if(t!==void 0)return t;const i=this.label_systems.get(e),s=this.topological_sort(i,e);return this.sorted_cache.set(e,s),s}topological_sort(e,t){if(e.length===0)return[];const i=new Map,s=new Map,r=new Map,o=new Set;for(const l of e)i.set(l.descriptor,new Set),s.set(l.descriptor,0),r.set(l.descriptor,l.insertion_order),o.add(l.descriptor);for(const l of e){for(const u of l.before)o.has(u)&&(i.get(l.descriptor).add(u),s.set(u,s.get(u)+1));for(const u of l.after)o.has(u)&&(i.get(u).add(l.descriptor),s.set(l.descriptor,s.get(l.descriptor)+1))}let a=[];for(const l of e)s.get(l.descriptor)===0&&a.push(l.descriptor);a.sort((l,u)=>r.get(u)-r.get(l));const c=[];for(;a.length>0;){const l=a.pop();c.push(l);for(const u of i.get(l)){const h=s.get(u)-1;s.set(u,h),h===0&&a.push(u)}a.sort((u,h)=>r.get(h)-r.get(u))}if(c.length!==e.length){const l=new Set(c),u=e.filter(h=>!l.has(h.descriptor)).map(h=>h.descriptor.name??`system_${h.descriptor.id}`);throw new W0(Eh.CIRCULAR_SYSTEM_DEPENDENCY,`Circular system dependency detected in ${t}: [${u.join(", ")}]`)}return c}}const du=new WeakMap;function vx(n,e){let t=du.get(n);if(!t){t=Object.create(null);const{field_names:r}=n.layout;for(let o=0;o<r.length;o++){const a=o;Object.defineProperty(t,r[o],{get(){return this._columns[a][this._row]},set(c){this._columns[a][this._row]=c},enumerable:!0,configurable:!1})}du.set(n,t)}const i=Object.create(t),s=new Array(n.columns.length);for(let r=0;r<n.columns.length;r++)s[r]=n.columns[r].buf;return i._columns=s,i._row=e,i}class yx{_archetypes;_defs;_resolver;_include;_exclude;_any_of;constructor(e,t,i,s,r,o){this._archetypes=e,this._defs=t,this._resolver=i,this._include=s,this._exclude=r,this._any_of=o}get archetype_count(){return this._archetypes.length}count(){const e=this._archetypes;let t=0;for(let i=0;i<e.length;i++)t+=e[i].entity_count;return t}get archetypes(){return this._archetypes}*[Symbol.iterator](){const e=this._archetypes;for(let t=0;t<e.length;t++)e[t].entity_count>0&&(yield e[t])}and(...e){const t=this._include.copy(),i=this._defs.slice();for(let s=0;s<e.length;s++)t.has(e[s])||(t.set(e[s]),i.push(e[s]));return this._resolver._resolve_query(t,this._exclude,this._any_of,i)}not(...e){const t=this._exclude?this._exclude.copy():new ni;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(this._include,t,this._any_of,this._defs)}any_of(...e){const t=this._any_of?this._any_of.copy():new ni;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(this._include,this._exclude,t,this._defs)}}class Mx{constructor(e){this._resolver=e}every(...e){const t=new ni;for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolver._resolve_query(t,null,null,e)}}class Sx{store;constructor(e){this.store=e}create_entity(){return this.store.create_entity()}get_field(e,t,i){const s=this.store.get_entity_archetype(e),r=this.store.get_entity_row(e);return s.read_field(r,t,i)}set_field(e,t,i,s){const r=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),a=r.get_column(t,i);a[o]=s}ref(e,t){const i=this.store.get_entity_archetype(t),s=this.store.get_entity_row(t);return vx(i.column_groups[e],s)}destroy_entity(e){return this.store.destroy_entity_deferred(e),this}add_component(e,t,i){return this.store.add_component_deferred(e,t,i??Js),this}remove_component(e,t){return this.store.remove_component_deferred(e,t),this}flush(){this.store.flush_structural(),this.store.flush_destroyed()}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}read(e){return this.store.get_event_reader(e)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}}const Ex=n=>fr(n);class Tx{store;schedule;ctx;systems=new Set;next_system_id=0;_fixed_timestep;_accumulator=0;_max_fixed_steps;query_cache=new Map;scratch_mask=new ni;constructor(e){this.store=new gx(e?.initial_capacity),this.schedule=new xx,this.ctx=new Sx(this.store),this._fixed_timestep=e?.fixed_timestep??K0,this._max_fixed_steps=e?.max_fixed_steps??j0}get fixed_timestep(){return this._fixed_timestep}set fixed_timestep(e){this._fixed_timestep=e}get fixed_alpha(){return this._accumulator/this._fixed_timestep}register_component(e,t){if(Array.isArray(e)){const i=t??"f64",s=Object.create(null);for(const r of e)s[r]=i;return this.store.register_component(s)}return this.store.register_component(e)}register_tag(){return this.store.register_component({})}register_event(e){return this.store.register_event(e)}register_signal(){return this.store.register_event([])}register_resource(e,t){return this.store.register_resource(e,t)}resource(e){return this.store.get_resource_reader(e)}set_resource(e,t){this.store.get_resource_channel(e).write(t)}create_entity(){return this.store.create_entity()}destroy_entity_deferred(e){this.store.destroy_entity_deferred(e)}is_alive(e){return this.store.is_alive(e)}get entity_count(){return this.store.entity_count}add_component(e,t,i){return this.store.add_component(e,t,i??Js),this}add_components(e,t){this.store.add_components(e,t)}remove_component(e,t){return this.store.remove_component(e,t),this}remove_components(e,...t){this.store.remove_components(e,t)}has_component(e,t){return this.store.has_component(e,t)}batch_add_component(e,t,i){this.store.batch_add_component(e,t,i)}batch_remove_component(e,t){this.store.batch_remove_component(e,t)}get_field(e,t,i){const s=this.store.get_entity_archetype(e),r=this.store.get_entity_row(e);return s.read_field(r,t,i)}set_field(e,t,i,s){const r=this.store.get_entity_archetype(e),o=this.store.get_entity_row(e),a=r.get_column(t,i);a[o]=s}emit(e,t){t===void 0?this.store.emit_signal(e):this.store.emit_event(e,t)}query(...e){const t=this.scratch_mask;t._words.fill(0);for(let i=0;i<e.length;i++)t.set(e[i]);return this._resolve_query(t.copy(),null,null,e)}_resolve_query(e,t,i,s){const r=e.hash(),o=t?t.hash():0,a=i?i.hash():0,c=r^Math.imul(o,Y0)^Math.imul(a,$0)|0,l=this._find_cached(c,e,t,i);if(l!==void 0)return l.query;const u=this.store.register_query(e,t??void 0,i??void 0),h=new yx(u,s,this,e.copy(),t?.copy()??null,i?.copy()??null);return Ah(this.query_cache,c,{include_mask:e.copy(),exclude_mask:t?.copy()??null,any_of_mask:i?.copy()??null,query:h}),h}_find_cached(e,t,i,s){const r=this.query_cache.get(e);if(r)for(let o=0;o<r.length;o++){const a=r[o];if(!(!a.include_mask.equals(t)||!(i===null?a.exclude_mask===null:a.exclude_mask!==null&&a.exclude_mask.equals(i))||!(s===null?a.any_of_mask===null:a.any_of_mask!==null&&a.any_of_mask.equals(s))))return a}}register_system(e,t){let i;if(typeof e=="function")if(t!==void 0){const o=t(new Mx(this)),a=this.ctx,c=e;i={fn:(l,u)=>c(o,a,u)}}else i={fn:e};else i=e;const s=Ex(this.next_system_id++),r=Object.freeze(Object.assign({id:s},i));return this.systems.add(r),r}add_systems(e,...t){return this.schedule.add_systems(e,...t),this}remove_system(e){this.schedule.remove_system(e),e.on_removed?.(),this.systems.delete(e)}get system_count(){return this.systems.size}startup(){for(const e of this.systems.values())e.on_added?.(this.ctx);this.schedule.run_startup(this.ctx)}update(e){if(this.schedule.has_fixed_systems()){this._accumulator+=e;const t=this._max_fixed_steps*this._fixed_timestep;for(this._accumulator>t&&(this._accumulator=t);this._accumulator>=this._fixed_timestep;)this.schedule.run_fixed_update(this.ctx,this._fixed_timestep),this._accumulator-=this._fixed_timestep}this.schedule.run_update(this.ctx,e),this.store.clear_events()}flush(){this.ctx.flush()}dispose(){for(const e of this.systems.values())e.dispose?.(),e.on_removed?.();this.systems.clear(),this.schedule.clear()}}class bx{#e;#n;constructor(){const[e,t]=pf({});this.#e=e,this.#n=t}track(e){e in this.#e||this.#n(t=>(t[e]=0,t)),this.#e[e]}untrack(e){this.#n(t=>(delete t[e],t))}dirty(e){e in this.#e&&this.#n(t=>(t[e]=1-t[e],t))}}class ml{#e;#n;#t;#s;#i=0;#r=!1;#o;constructor(e,t,i,s,r){this.#t=e,this.#s=t,this.#e=i,this.#n=s,this.#o=r}get value(){return this.#t.track(this.#s),$t()!==null&&(this.#i++,this.#r||(this.#r=!0,vs(()=>{this.#i--,this.#i===0&&queueMicrotask(()=>{this.#i===0&&(this.#r=!1,this.#o?.())})}))),this.#e()}dirty(){this.#n()}}class Ax{#e;#n;#t;#s;#i;constructor(e,t,i){this.#e=e,this.#n=t,this.#t=i,this.#i=`resource:${t.toString()}`,this.#s=new Map}get resourceKey(){return this.#i}#r(e){if($t()===null)return this.#t[e];const i=`${this.#i}:${e}`;let s=this.#s.get(e);return s===void 0&&(s=new ml(this.#e,i,()=>this.#t[e],()=>this.#e.dirty(i),()=>{this.#e.untrack(i),this.#s.delete(e)}),this.#s.set(e,s)),s.value}get delta(){return this.#r("delta")}get elapsed(){return this.#r("elapsed")}get(e){return this.#r(e)}}class wx{#e;#n;#t;#s;#i;constructor(e,t,i){this.#e=e,this.#n=t,this.#t=i,this.#s=new Map,this.#i=new Map}get id(){return this.#t}hasComponent(e){if($t()===null)return this.#n.has_component(this.#t,e);const i=`entity:${this.#t}:has:${e}`;let s=this.#s.get(i);return s===void 0&&(s=new ml(this.#e,i,()=>this.#n.has_component(this.#t,e),()=>this.#e.dirty(i),()=>{this.#e.untrack(i),this.#s.delete(i)}),this.#s.set(i,s)),s.value}getField(e,t){if($t()===null)return this.#n.get_field(this.#t,e,t);const s=`entity:${this.#t}:${e}:${t}`;let r=this.#i.get(s);return r===void 0&&(r=new ml(this.#e,s,()=>this.#n.get_field(this.#t,e,t),()=>this.#e.dirty(s),()=>{this.#e.untrack(s),this.#i.delete(s)}),this.#i.set(s,r)),r.value}}class Qs{#e;#n;#t;#s;#i;constructor(e,t,i,s){this.#e=e,this.#n=t,this.#s=i,this.#i=s,this.#t=t.query(...i)}get queryKey(){return this.#i}get archetype_count(){return $t()===null?this.#t.archetype_count:(this.#e.track(`${this.#i}:archetype_count`),this.#t.archetype_count)}count(){return $t()===null?this.#t.count():(this.#e.track(`${this.#i}:count`),this.#e.track("world:entities"),this.#t.count())}get archetypes(){return $t()===null?this.#t.archetypes:(this.#e.track(`${this.#i}:archetypes`),this.#e.track("world:entities"),this.#t.archetypes)}*[Symbol.iterator](){const e=$t();if(this.#t.archetypes,e===null){for(const t of this.#t)yield t;return}this.#e.track(`${this.#i}:archetypes`);for(const t of this.#t)yield new Rx(this.#e,this.#n,t,this.#i)}and(...e){return new Qs(this.#e,this.#n,[...this.#s,...e],`${this.#i}:and`)}not(...e){return new Qs(this.#e,this.#n,this.#s,`${this.#i}:not`)}any_of(...e){return new Qs(this.#e,this.#n,this.#s,`${this.#i}:any_of`)}}class Rx{#e;#n;#t;#s;constructor(e,t,i,s){this.#e=e,this.#n=t,this.#t=i,this.#s=s}get entity_ids(){if($t()===null)return this.#t.entity_ids;const t=`arch:${this.#t.id}:entity_ids`;return this.#e.track(t),this.#t.entity_ids}get entity_count(){if($t()===null)return this.#t.entity_count;const t=`arch:${this.#t.id}:count`;return this.#e.track(t),this.#t.entity_count}has_component(e){if($t()===null)return this.#t.has_component(e);const i=`arch:${this.#t.id}:has:${e}`;return this.#e.track(i),this.#t.has_component(e)}get_column(e,t){if($t()===null)return this.#t.get_column(e,t);const s=`arch:${this.#t.id}:col`;return this.#e.track(s),this.#t.get_column(e,t)}}class Cx{#e;#n;constructor(e){this.#e=e,this.#n=new bx}get ecs(){return this.#e}dirty(e){this.#n.dirty(e)}query(...e){const t=`query:${e.map(i=>i.toString()).join(",")}`;return new Qs(this.#n,this.#e,e,t)}resource(e){return new Ax(this.#n,e,this.#e.resource(e))}entity(e){return new wx(this.#n,this.#e,e)}create_entity(){const e=this.#e.create_entity();return fn(()=>this.#n.dirty("world:entities")),e}destroy_entity_deferred(e){this.#e.destroy_entity_deferred(e),fn(()=>this.#n.dirty("world:entities"))}add_component(e,t,i){const s=`entity:${e}:has:${t}`;return this.#e.add_component(e,t,i),fn(()=>{this.#n.dirty(s),this.#n.dirty("world:entities")}),this}remove_component(e,t){const i=`entity:${e}:has:${t}`;return this.#e.remove_component(e,t),fn(()=>{this.#n.dirty(i),this.#n.dirty("world:entities")}),this}set_field(e,t,i,s){const r=`entity:${e}:${t}:${i}`;this.#e.set_field(e,t,i,s),fn(()=>this.#n.dirty(r))}set_resource(e,t){const i=this.#e.resource(e);this.#e.set_resource(e,t);for(const s of Object.keys(i))this.#n.dirty(`resource:${e.toString()}:${s}`)}}const Px={def:{x:"f64",y:"f64",z:"f64"}},Dx={def:{x:"f64",y:"f64",z:"f64"}},Ix={def:{playerType:"u8",facingForward:"u8"}},Lx={def:[]},Ux={def:[]},Nx={def:{x:"f64",z:"f64"}},Fx={def:{width:"f64",length:"f64",netHeight:"f64"}},Ox={def:{size:"f64"}},Bx={def:{minX:"f64",minY:"f64",minZ:"f64",maxX:"f64",maxY:"f64",maxZ:"f64"}},zx={def:[]},Vx={def:{meshId:"u32"}},Gx={schema:{x:0,y:0,z:0}},kx={schema:{servingPlayer:0}},Hx={def:{phase:"u8",serverPlayer:"u8",throwTime:"f64"}},Wx={def:{side:"i8"}},wt=new Tx,Xx=new Cx(wt),oe=wt.register_component(Px.def),Ie=wt.register_component(Dx.def),yt=wt.register_component(Ix.def),Vl=wt.register_component(Lx.def),Gl=wt.register_component(Ux.def),It=wt.register_component(Nx.def),Kn=wt.register_component(Fx.def),Yi=wt.register_component(Ox.def),pi=wt.register_component(Bx.def),wh=wt.register_component(zx.def);wt.register_component(Vx.def);const kl=wt.register_resource(["x","y","z"],Gx.schema),qx=wt.register_resource(["servingPlayer"],kx.schema),Ze=wt.register_component(Hx.def),jn=wt.register_component(Wx.def);function Yx(){return wt.startup(),wt.set_resource(qx,{servingPlayer:0}),wt.set_resource(kl,{x:0,y:-10,z:0}),{ecs:Xx}}function Rh(n){const e=n.reactiveEcs,t=e.create_entity();e.add_component(t,oe,{x:n.position.x,y:n.position.y,z:n.position.z}),e.add_component(t,Ie,{x:n.velocity.x,y:n.velocity.y,z:n.velocity.z});const i=n.playerType==="Cubey"?0:1,s=n.facingForward?1:0;return e.add_component(t,yt,{playerType:i,facingForward:s}),t}function $x(n){const e=n.reactiveEcs,t=e.create_entity();return e.add_component(t,Kn,{width:n.width,length:n.length,netHeight:n.netHeight}),t}function Zx(n){const e=n.reactiveEcs,t=n.position(),i=new G(0,0,0),s=e.create_entity();e.add_component(s,oe,{x:t.x,y:t.y,z:t.z}),e.add_component(s,Ie,{x:i.x,y:i.y,z:i.z}),e.add_component(s,Yi,{size:n.size()});const r=n.boundary();return e.add_component(s,pi,{minX:r.min.x,minY:r.min.y,minZ:r.min.z,maxX:r.max.x,maxY:r.max.y,maxZ:r.max.z}),e.add_component(s,wh,{}),s}function Kx(n,e){return $i(t=>(Gt(bo(Gt(()=>{let i=[];for(let s of n.query(oe,yt)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i());s.getField(yt,"playerType"),s.getField(yt,"facingForward");let r=new Hi,o,a,c=[],l,u=[];const h=new Fr,f=new ea,m=new Vt(.5,.2,.5);o=new nt(m,h),o.position.set(0,.1,0);const _=new Vt(.5,.25,.5);a=new nt(_,h),a.position.set(0,.45,0);const g=new Vt(.1,.2,.1),p=new nt(g,f),d=new nt(g,f);p.position.set(-.14,.3,.3),d.position.set(.14,.3,.3),c=[p,d];const y=new Vt(.1,.4,.1);l=new nt(y,f),l.position.set(0,.3,.3);const T=new ho(.08),S=new nt(T,f),b=new nt(T,f);S.position.set(-.15,.48,.25),b.position.set(.15,.48,.25),u=[S,b],r.add(o),r.add(a),c.forEach(N=>r.add(N)),r.add(l),u.forEach(N=>r.add(N));const w=new Hi,R=new ea({color:9127187}),v=new uo(.02,.02,.3,8),E=new nt(v,R);E.position.set(0,0,0),E.rotation.x=Math.PI/2,w.add(E);const z=new uo(.4,.4,.02,16),C=new nt(z,R);C.position.set(0,0,.15),C.rotation.x=Math.PI/2,w.add(C),w.position.set(.4,.5,.3),r.add(w),e.add(r),vs(()=>{e.remove(r),m.dispose(),_.dispose(),g.dispose(),y.dispose(),T.dispose(),v.dispose(),z.dispose(),h.dispose(),f.dispose(),R.dispose()}),Gt(()=>{let N=s.getField(oe,"x"),B=s.getField(oe,"y"),V=s.getField(oe,"z"),L=s.getField(yt,"facingForward"),F=s.getField(jn,"side");r.position.set(N,B,V),L===1?r.quaternion.set(0,1,0,0):r.quaternion.set(0,0,0,1);const D=F*.4;w.position.set(D,.5,.3)})})),Gt(bo(Gt(()=>{let i=[];for(let s of n.query(Kn)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i()),r={width:s.getField(Kn,"width"),length:s.getField(Kn,"length"),netHeight:s.getField(Kn,"netHeight")};const o=new Hi,a=new Fr,c=new Fr({transparent:!0,opacity:.5}),l=new Vt(r.width,.1,r.length),u=new nt(l,a);u.position.y-=.05,o.add(u);const h=new ea({color:16777215}),f=.05,m=.01,_=new Vt(r.width,m,f),g=new nt(_,h);g.position.set(0,.01,-r.length/2),o.add(g);const p=new nt(_,h);p.position.set(0,.01,r.length/2),o.add(p);const d=new Vt(f,m,r.length),y=new nt(d,h);y.position.set(-r.width/2,.01,0),o.add(y);const T=new nt(d,h);T.position.set(r.width/2,.01,0),o.add(T);const S=6.4,b=new Vt(r.width-2*f,m,f),w=new nt(b,h);w.position.set(0,.01,-S),o.add(w);const R=new nt(b,h);R.position.set(0,.01,S),o.add(R);const v=new Vt(f,m,S*2),E=new nt(v,h);E.position.set(0,.01,0),o.add(E);const z=8.23,C=new Vt(f,m,r.length),N=new nt(C,h);N.position.set(-z/2,.01,0),o.add(N);const B=new nt(C,h);B.position.set(z/2,.01,0),o.add(B);const V=new Vt(r.width,r.netHeight,.1),L=new nt(V,c);L.position.y=.5*r.netHeight,o.add(L),e.add(o),vs(()=>{e.remove(o),l.dispose(),V.dispose(),a.dispose(),c.dispose(),h.dispose(),_.dispose(),d.dispose(),b.dispose(),v.dispose(),C.dispose()})})),Gt(bo(Gt(()=>{let i=[];for(let s of n.query(oe,Yi)){let r=s.entity_ids;for(let o=0;o<s.entity_count;++o)i.push(r[o])}return i}),i=>{let s=n.entity(i()),r=s.getField(Yi,"size");const o=new ho(r),a=new Fr,c=new nt(o,a);e.add(c),vs(()=>{e.remove(c),o.dispose(),a.dispose()}),Gt(()=>{let l=s.getField(oe,"x"),u=s.getField(oe,"y"),h=s.getField(oe,"z");c.position.set(l,u,h)})})),{update:()=>{},dispose:t}))}function jx(n,e,t,i,s,r){return{update:()=>{const a=[],c=n.query(Vl,It);for(const l of c){l.get_column(It,"x"),l.get_column(It,"z");const u=l.entity_ids;for(let h=0;h<l.entity_count;h++){const f=u[h];let m=0,_=0;i()&&(m-=1),s()&&(m+=1),t()&&(_+=1),e()&&(_-=1),m+=r().x,_+=r().y,a.push({entityId:f,moveX:m,moveZ:_})}}for(const{entityId:l,moveX:u,moveZ:h}of a){const f=l;n.set_field(f,It,"x",u),n.set_field(f,It,"z",h)}},dispose:()=>{}}}function Jx(n,e){return $i(t=>({update:s=>{const r=n.resource(kl),a=n.query(Kn).archetypes[0],c=a?{width:a.get_column(Kn,"width")[0],length:a.get_column(Kn,"length")[0],netHeight:a.get_column(Kn,"netHeight")[0]}:void 0;let l=0,u=!1,h=!1;const f=1,m=n.query(Ze);if(m.archetypes.length>0){const d=m.archetypes[0],y=d.get_column(Ze,"phase");l=d.get_column(Ze,"serverPlayer")[0],u=y[0]!==2,h=y[0]===f}const _=(d,y)=>{const T=d.get_column(oe,"x"),S=d.get_column(oe,"y"),b=d.get_column(oe,"z"),w=d.get_column(Ie,"x"),R=d.get_column(Ie,"y"),v=d.get_column(Ie,"z"),E=d.get_column(It,"x"),z=d.get_column(It,"z"),C=d.get_column(yt,"playerType"),N=d.get_column(yt,"facingForward"),B=d.entity_ids,V=d.get_column(jn,"side");for(let L=0;L<d.entity_count;L++){const F=B[L],D={x:T[L],y:S[L],z:b[L]},Z={x:w[L],y:R[L],z:v[L]},K={x:E[L],z:z[L]},le={playerType:C[L],facingForward:N[L]};let ce=D.x,Q=D.y,Re=D.z,tt=Z.x,We=Z.y,$=Z.z;const te=le.playerType===l;let ne=V[L];if(h&&te||(ce+=K.x*.1,Re+=K.z*.1,K.x>.1?ne=-1:K.x<-.1&&(ne=1)),!u&&Q<=0?y&&e()&&(We=5):Q>0&&(We+=r.get("y")*s),ce+=tt*s,Q+=We*s,Re+=$*s,Q<=0&&(Q=0,We=0),c){const Te=.5*c.width,Ee=.5*c.length,Xe=.25;ce<-Te+Xe&&(ce=-Te+Xe),ce>Te-Xe&&(ce=Te-Xe),le.facingForward===1?(Re>Ee-Xe&&(Re=Ee-Xe),Re<Xe&&(Re=Xe)):(Re<-Ee+Xe&&(Re=-Ee+Xe),Re>-Xe&&(Re=-Xe))}const Ce=F;n.set_field(Ce,oe,"x",ce),n.set_field(Ce,oe,"y",Q),n.set_field(Ce,oe,"z",Re),n.set_field(Ce,Ie,"x",tt),n.set_field(Ce,Ie,"y",We),n.set_field(Ce,Ie,"z",$),n.set_field(Ce,jn,"side",ne)}},g=n.query(oe,Ie,It,yt,jn,Vl);for(const d of g.archetypes)_(d,!0);const p=n.query(oe,Ie,It,yt,jn,Gl);for(const d of p.archetypes)_(d,!1)},dispose:t}))}class Qx{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t)}off(e,t){const i=this.listeners.get(e);if(i){const s=i.indexOf(t);s>-1&&i.splice(s,1)}}emit(e,t){const i=this.listeners.get(e);i&&i.forEach(s=>s(t))}}const bs=new Qx;bs.on("ballBounce",n=>console.log("Ball bounce:",n));function ev(n){return $i(e=>{let t=!0,i=0;return{update:r=>{if(r===0)return;const o=n.resource(kl);i>0&&(i-=r);const a=[];for(const c of n.query(oe,Ie,Yi,pi,wh)){const l=c.get_column(oe,"x"),u=c.get_column(oe,"y"),h=c.get_column(oe,"z"),f=c.get_column(Ie,"x"),m=c.get_column(Ie,"y"),_=c.get_column(Ie,"z"),g=c.get_column(Yi,"size"),p=c.get_column(pi,"minX"),d=c.get_column(pi,"minY"),y=c.get_column(pi,"minZ"),T=c.get_column(pi,"maxX"),S=c.get_column(pi,"maxY"),b=c.get_column(pi,"maxZ"),w=c.entity_ids;for(let R=0;R<c.entity_count;R++){const v=w[R],E={x:l[R],y:u[R],z:h[R]},z={x:f[R],y:m[R],z:_[R]},C={size:g[R]},N={minX:p[R],minY:d[R],minZ:y[R],maxX:T[R],maxY:S[R],maxZ:b[R]};let B=z.x,V=z.y,L=z.z;B+=o.get("x")*r,V+=o.get("y")*r,L+=o.get("z")*r;let F=E.x+B*r,D=E.y+V*r,Z=E.z+L*r;const K=C.size*.5,le=N.minX+K,ce=N.maxX-K,Q=N.minY+K,Re=N.maxY-K,tt=N.minZ+K,We=N.maxZ-K,$=D<=Q;if(t&&$&&V<0&&bs.emit("ballBounce",{z:Z,y:D}),t=!$,i<=0)for(const te of n.query(oe,yt,jn)){const ne=te.get_column(oe,"x")[0],Ce=te.get_column(oe,"y")[0],Te=te.get_column(oe,"z")[0],Ee=te.get_column(yt,"playerType")[0],Xe=te.get_column(jn,"side")[0],ke=Xe*.5,qe=ne+ke,Ye=Ce+.5,Le=Te+.3,at=.6,P=F-qe,_t=D-Ye,$e=Z-Le,it=Math.sqrt(P*P+_t*_t+$e*$e);if(console.log(`Player ${Ee}: pos=(${ne.toFixed(2)}, ${Ce.toFixed(2)}, ${Te.toFixed(2)}), racketSide=${Xe}, racket=(${qe.toFixed(2)}, ${Ye.toFixed(2)}, ${Le.toFixed(2)}), ball=(${F.toFixed(2)}, ${D.toFixed(2)}, ${Z.toFixed(2)}), dist=${it.toFixed(2)}`),it<at+K){console.log(`HIT Player ${Ee}!`);const Y=Ee===0?1:-1;B=P*2,V=4,L=Y*10,D=Ye+at+K,i=.3,bs.emit("ballHit",{player:Ee});break}const _e=F-E.x,A=D-E.y,x=Z-E.z,U=Math.sqrt(_e*_e+A*A+x*x);if(U>.01){const Y=Math.max(0,Math.min(1,((qe-E.x)*_e+(Ye-E.y)*A+(Le-E.z)*x)/(U*U))),j=E.x+Y*_e,X=E.y+Y*A,ge=E.z+Y*x,se=j-qe,be=X-Ye,Pe=ge-Le,J=Math.sqrt(se*se+be*be+Pe*Pe);if(console.log(`  Ray check: closestDist=${J.toFixed(2)}, racketRadius=${at}`),J<at+K){console.log(`RAY HIT Player ${Ee}!`);const ie=Ee===0?1:-1,xe=1-J/(at+K);B=se/J*5*xe,V=4,L=ie*12,D=Math.max(D,Ye+at+K),i=.3,bs.emit("ballHit",{player:Ee});break}}}F<le?(F=le,B=-B*.8):F>ce&&(F=ce,B=-B*.8),D<Q?(D=Q,V=-V*.8,Math.abs(V)<.1&&(V=0)):D>Re&&(D=Re,V=-V*.8),Z<tt?(Z=tt,L=-L*.8):Z>We&&(Z=We,L=-L*.8),a.push({entityId:v,newPosX:F,newPosY:D,newPosZ:Z,newVelX:B,newVelY:V,newVelZ:L})}}for(const{entityId:c,newPosX:l,newPosY:u,newPosZ:h,newVelX:f,newVelY:m,newVelZ:_}of a){const g=c;n.set_field(g,oe,"x",l),n.set_field(g,oe,"y",u),n.set_field(g,oe,"z",h),n.set_field(g,Ie,"x",f),n.set_field(g,Ie,"y",m),n.set_field(g,Ie,"z",_)}},dispose:e}})}const ua=0,ha=1,tv=2;function nv(n,e,t,i){return $i(s=>{let r=!1;return{update:a=>{const c=n.query(oe,yt),l=n.query(oe,Ie),u=n.query(Ze);if(u.archetypes.length===0)return;const h=u.archetypes[0],f=h.get_column(Ze,"phase"),m=h.get_column(Ze,"serverPlayer"),_=h.get_column(Ze,"throwTime"),g=h.entity_ids[0],p=f[0],d=m[0];_[0];let y={x:0,y:0,z:0},T={x:0,y:0,z:0};for(const b of c){const w=b.get_column(oe,"x"),R=b.get_column(oe,"y"),v=b.get_column(oe,"z"),E=b.get_column(yt,"playerType");for(let z=0;z<b.entity_count;z++)if(E[z]===d){y={x:w[z],y:R[z],z:v[z]};break}}for(const b of l){const w=b.get_column(oe,"x"),R=b.get_column(oe,"y"),v=b.get_column(oe,"z"),E=b.get_column(Ie,"x"),z=b.get_column(Ie,"y"),C=b.get_column(Ie,"z");T={x:w[0],y:R[0],z:v[0]},E[0],z[0],C[0]}if(p===ha){const b=T.x-y.x,w=T.z-y.z;Math.sqrt(b*b+w*w)<.5&&T.y<y.y+.3&&(n.set_field(g,Ze,"phase",ua),n.set_field(g,Ze,"throwTime",0))}if(p===ua){const b=n.query(oe);if(b.archetypes.length>0){const R=b.archetypes[0].entity_ids[0],v=d===0?-.5:.5;n.set_field(R,oe,"x",y.x+v),n.set_field(R,oe,"y",y.y+.8),n.set_field(R,oe,"z",y.z)}}const S=e()&&!r;if(r=e(),S){if(p===ua)n.set_field(g,Ze,"phase",ha),n.set_field(g,Ze,"throwTime",0),n.set_field(l.archetypes[0].entity_ids[0],oe,"x",y.x),n.set_field(l.archetypes[0].entity_ids[0],oe,"y",y.y+1.5),n.set_field(l.archetypes[0].entity_ids[0],oe,"z",y.z),n.set_field(l.archetypes[0].entity_ids[0],Ie,"x",0),n.set_field(l.archetypes[0].entity_ids[0],Ie,"y",4),n.set_field(l.archetypes[0].entity_ids[0],Ie,"z",0);else if(p===ha){n.set_field(g,Ze,"phase",tv);const R=4*t()+(Math.random()-.5)*1,v=3+Math.random()*2,E=d===0?8:-8;n.set_field(l.archetypes[0].entity_ids[0],Ie,"x",R),n.set_field(l.archetypes[0].entity_ids[0],Ie,"y",v),n.set_field(l.archetypes[0].entity_ids[0],Ie,"z",E);const z=n.query(oe,yt);for(const C of z){const N=C.get_column(oe,"x"),B=C.get_column(oe,"y"),V=C.get_column(oe,"z"),L=C.get_column(yt,"playerType");for(let F=0;F<C.entity_count;F++)if(L[F]===d){const D=C.entity_ids[F];n.set_field(D,oe,"x",N[F]),n.set_field(D,oe,"y",B[F]),n.set_field(D,oe,"z",V[F]);break}}}}},dispose:s}})}const Hr=0,pu=2,mu=23.77,_u=10.97;function iv(n){return $i(e=>{let t=0,i=0,s=0,r=0;const o=l=>{const u=n.query(Ze);if(u.archetypes.length===0)return;const h=u.archetypes[0],f=h.get_column(Ze,"phase"),m=h.get_column(Ze,"serverPlayer"),_=h.entity_ids[0],g=f[0],p=m[0];if(g!==pu)return;const d=l.z<0,y=l.z>0;if(d&&(t++,console.log(`Bounce on P0 side: ${t}`),t>=2)){console.log("P0 double bounce! Point to P1"),r++;const T=1-p;n.set_field(_,Ze,"phase",Hr),n.set_field(_,Ze,"serverPlayer",T),a(n,p,T,s,r);return}if(y&&(i++,console.log(`Bounce on P1 side: ${i}`),i>=2)){console.log("P1 double bounce! Point to P0"),s++;const T=1-p;n.set_field(_,Ze,"phase",Hr),n.set_field(_,Ze,"serverPlayer",T),a(n,p,T,s,r);return}};bs.on("ballBounce",o);const a=(l,u,h,f,m)=>{const _=l.query(oe,yt);let g={x:0,z:0};for(const d of _){const y=d.get_column(oe,"x"),T=d.get_column(oe,"y"),S=d.get_column(oe,"z"),b=d.get_column(yt,"playerType");for(let w=0;w<d.entity_count;w++)if(b[w]===h){g={x:y[w],y:T[w],z:S[w]};break}}const p=l.query(oe,Ie);if(p.archetypes.length>0){const y=p.archetypes[0].entity_ids[0];l.set_field(y,oe,"x",g.x),l.set_field(y,oe,"y",.1),l.set_field(y,oe,"z",g.z),l.set_field(y,Ie,"x",0),l.set_field(y,Ie,"y",0),l.set_field(y,Ie,"z",0)}t=0,i=0,console.log(`Reset to server ${h}, score: P0=${f}, P1=${m}`)};return{update:l=>{const u=n.query(Ze);if(u.archetypes.length===0)return;const h=u.archetypes[0],f=h.get_column(Ze,"phase"),m=h.get_column(Ze,"serverPlayer"),_=h.entity_ids[0],g=f[0],p=m[0];if(g!==pu){t=0,i=0;return}const d=n.query(oe,Ie,Yi);if(d.archetypes.length===0)return;const y=d.archetypes[0],T=y.get_column(oe,"x"),S=y.get_column(oe,"y"),b=y.get_column(oe,"z"),w=y.get_column(Ie,"x"),R=y.get_column(Ie,"y"),v=y.get_column(Ie,"z");y.entity_ids[0];const E={x:T[0],y:S[0],z:b[0]};if(w[0],R[0],v[0],E.z<-mu/2-.5||E.z>mu/2+.5||E.x<-_u/2-.5||E.x>_u/2+.5)if(console.log("Ball out of bounds"),E.z<0){r++;const z=1-p;n.set_field(_,Ze,"phase",Hr),n.set_field(_,Ze,"serverPlayer",z),a(n,p,z,s,r)}else{s++;const z=1-p;n.set_field(_,Ze,"phase",Hr),n.set_field(_,Ze,"serverPlayer",z),a(n,p,z,s,r)}},dispose:()=>{bs.off("ballBounce",o),e()}}})}const fa=0,gu=1,da=2,Wr=-9.8;function xu(n,e){if(e.y>=0)return null;const t=e.y>0?-e.y/Wr:0;if(n.y+e.y*t+.5*Wr*t*t>.1){const s=(-e.y+Math.sqrt(e.y*e.y-2*Wr*(n.y-.1)))/-Wr;if(s>0){const r=n.x+e.x*s,o=n.z+e.z*s;return{x:r,z:o}}}return null}function sv(n){return $i(e=>{let t=0;return{update:s=>{t>0&&(t-=s);const r=n.query(oe,Ie,It,yt,Gl),o=n.query(oe,Ie,Yi),a=n.query(Ze);let c={x:0,y:0,z:0},l={x:0,y:0,z:0};for(const g of o){const p=g.get_column(oe,"x"),d=g.get_column(oe,"y"),y=g.get_column(oe,"z"),T=g.get_column(Ie,"x"),S=g.get_column(Ie,"y"),b=g.get_column(Ie,"z");g.entity_count>0&&(c={x:p[0],y:d[0],z:y[0]},l={x:T[0],y:S[0],z:b[0]})}let u=fa,h=0,f=null;if(a.archetypes.length>0){const g=a.archetypes[0],p=g.get_column(Ze,"phase"),d=g.get_column(Ze,"serverPlayer");u=p[0],h=d[0],f=g.entity_ids[0]}const m=0,_=h===m;if(_&&t<=0&&u!==da){if(u===fa){for(const g of r){g.get_column(oe,"x"),g.get_column(oe,"y"),g.get_column(oe,"z");const p=g.get_column(yt,"playerType");for(let d=0;d<g.entity_count;d++)if(p[d]===m){const y=g.entity_ids[d];n.set_field(y,It,"x",0),n.set_field(y,It,"z",0);break}}if(f){n.set_field(f,Ze,"phase",gu),n.set_field(f,Ze,"throwTime",0);let g={x:0,y:0,z:0};for(const p of r){const d=p.get_column(oe,"x"),y=p.get_column(oe,"y"),T=p.get_column(oe,"z"),S=p.get_column(yt,"playerType");for(let b=0;b<p.entity_count;b++)if(S[b]===m){g={x:d[b],y:y[b],z:T[b]};break}}for(const p of o){const d=p.entity_ids[0];n.set_field(d,oe,"x",g.x),n.set_field(d,oe,"y",g.y+1.5),n.set_field(d,oe,"z",g.z),n.set_field(d,Ie,"x",0),n.set_field(d,Ie,"y",4),n.set_field(d,Ie,"z",0)}}}else if(u===gu){let g={x:0,y:0,z:0};for(const T of r){const S=T.get_column(oe,"x"),b=T.get_column(oe,"y"),w=T.get_column(oe,"z"),R=T.get_column(yt,"playerType");for(let v=0;v<T.entity_count;v++)if(R[v]===m){g={x:S[v],y:b[v],z:w[v]};break}}const p=c.x-g.x,d=c.z-g.z;if(Math.sqrt(p*p+d*d)<.5&&c.y<g.y+.3&&f){n.set_field(f,Ze,"phase",da);for(const T of o){const S=T.entity_ids[0],b=(Math.random()-.5)*1.5,w=3+Math.random()*1.5,R=-8;n.set_field(S,Ie,"x",b),n.set_field(S,Ie,"y",w),n.set_field(S,Ie,"z",R)}t=2}}}if(!_||u===da||u===fa)for(const g of r){const p=g.get_column(oe,"x"),d=g.get_column(oe,"y"),y=g.get_column(oe,"z");g.get_column(Ie,"x"),g.get_column(Ie,"y"),g.get_column(Ie,"z"),g.get_column(It,"x"),g.get_column(It,"z");const T=g.get_column(yt,"playerType"),S=g.entity_ids;for(let b=0;b<g.entity_count;b++){if(T[b]!==m)continue;const R=p[b];d[b];const v=y[b];let E=0,z=0;const C=l.z>0&&c.z<v+8&&c.z>v-3,N=l.z<0&&c.z>v,B=c.z>v-2&&c.z<v+2,V=c.y<2;if(C&&!V&&B){const F=xu(c,l);if(F){const Z=Math.max(-10.885,Math.min(-.5,F.z-1.5))-v;Math.abs(Z)>.2&&(z=Z>0?1:-1)}else z=-1}else if(C&&V){const D=Math.max(v-1,c.z-.8)-v;Math.abs(D)>.15&&(z=D>0?1:-1)}else if(N){const F=xu(c,l);if(F){const Z=Math.max(-10.885,Math.min(-.5,F.z-1))-v;Math.abs(Z)>.2&&(z=Z>0?1:-1)}else z=-1}else if(c.z<-5){const Z=Math.max(-3,c.z+2)-v;Math.abs(Z)>.2&&(z=Z>0?1:-1)}else{const D=-3-v;Math.abs(D)>.3&&(z=D>0?1:-1)}if(c.z>-12&&c.z<0){const F=c.x-R;Math.abs(F)>.3&&(E=F>0?1:-1)}const L=S[b];n.set_field(L,It,"x",E),n.set_field(L,It,"z",z)}}},dispose:e}})}var rv=Tl("<canvas style=width:100%;height:100%>");let[pa,ov]=At(),ln=Yx();const Hl=Rh({position:new G(0,0,2.5),velocity:new G(0,0,0),playerType:"Melty",facingForward:!0,reactiveEcs:ln.ecs});ln.ecs.add_component(Hl,Vl,{});ln.ecs.add_component(Hl,It,{x:0,z:0});ln.ecs.add_component(Hl,jn,{side:1});const Wl=Rh({position:new G(0,0,-2.5),velocity:new G(0,0,0),playerType:"Cubey",facingForward:!1,reactiveEcs:ln.ecs});ln.ecs.add_component(Wl,Gl,{});ln.ecs.add_component(Wl,It,{x:0,z:0});ln.ecs.add_component(Wl,jn,{side:-1});$x({width:10.97,length:23.77,netHeight:.914,reactiveEcs:ln.ecs});Zx({position:Gt(()=>new G(0,.1,2.5)),size:Gt(()=>.1),boundary:Gt(()=>new Ns(new G(-5.5,0,-12),new G(5.5,5,12))),reactiveEcs:ln.ecs});const av=ln.ecs.create_entity();ln.ecs.add_component(av,Ze,{phase:0,serverPlayer:0,throwTime:0});let[lv,Ch]=At(!1),[cv,Ph]=At(!1),[vu,Dh]=At(!1),[yu,Ih]=At(!1),[uv,Lh]=At(!1);function hv(){debugger;let n=150,e=V0({position:Gt(()=>new Be(50,(pa()?.y??0)-50-n)),hitAreaSize:n,outerRingSize:()=>.8*n,knobSize:()=>70}),t=80,i=k0({position:Gt(()=>new Be((pa()?.x??0)-50-t,(pa()?.y??0)-50-t)),size:()=>t});const s=(c,l)=>{const u=jx(c,lv,cv,vu,yu,e.value),h=()=>uv()||i.pressed(),f=Jx(c,h),m=ev(c);Kx(c,l);const _=nv(c,h,()=>(vu()?-1:0)+(yu()?1:0)+e.value().x),g=iv(c),p=sv(c),d=[u.dispose,f.dispose,m.dispose,_.dispose,g.dispose,p.dispose];return{update:y=>{u.update(),p.update(y),f.update(y),m.update(y),_.update(y),g.update(y)},dispose:()=>{d.forEach(y=>y())}}};let r=Gt(()=>!0),[o,a]=At();return _f(o,c=>{if(c==null)return;let l=c.getBoundingClientRect();const u=l.width,h=l.height;if(u==0&&h==0){a(void 0),setTimeout(()=>a(c));return}new ResizeObserver(()=>{let b=c.getBoundingClientRect();ov(new Be(b.width,b.height))}).observe(c);const m=new hn(50,u/h,.01,100);m.position.set(0,15,16),m.lookAt(0,0,-2);const _=new yd,g=new kd(16777215,.5);_.add(g);const p=new Gd(16777215,1);p.position.set(5,10,7),_.add(p);const d=s(ln.ecs,_),y=new B0({antialias:!0,canvas:c});y.setSize(u,h);let T=0,S=b=>{let w=T===0?.016666666666666666:(b-T)/1e3;T=b,d.update(w),y.render(_,m),r()&&requestAnimationFrame(S)};requestAnimationFrame(S),vs(()=>{d.dispose(),y.dispose()})}),[(()=>{var c=rv(),l=a;return typeof l=="function"||Array.isArray(l)?bl(()=>l,c):a=c,c})(),Sa(e.UI,{}),Sa(i.UI,{})]}document.body.style.setProperty("overflow","hidden");let Ti=document.createElement("div");Ti.style.setProperty("position","absolute");Ti.style.setProperty("left","0");Ti.style.setProperty("top","0");Ti.style.setProperty("right","0");Ti.style.setProperty("bottom","0");Ti.style.setProperty("background-color","black");document.body.append(Ti);Ef(()=>Sa(hv,{}),Ti);document.addEventListener("keydown",n=>{switch(n.key){case"ArrowUp":Ch(!0);break;case"ArrowDown":Ph(!0);break;case"ArrowLeft":Dh(!0);break;case"ArrowRight":Ih(!0);break;case" ":Lh(!0);break}});document.addEventListener("keyup",n=>{switch(n.key){case"ArrowUp":Ch(!1);break;case"ArrowDown":Ph(!1);break;case"ArrowLeft":Dh(!1);break;case"ArrowRight":Ih(!1);break;case" ":Lh(!1);break}});
