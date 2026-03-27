import{_ as bI,c as WQ,o as OI,a as GQ,d as xI,u as qI,t as jI}from"./index-jhfazPeM.js";var TI=Object.defineProperty,XI=(j,VA,MA)=>VA in j?TI(j,VA,{enumerable:!0,configurable:!0,writable:!0,value:MA}):j[VA]=MA,u=(j,VA,MA)=>XI(j,typeof VA!="symbol"?VA+"":VA,MA);let eQ,Hg,Sg,zQ,Zg;(async()=>{const j=(A,Q)=>A===Q,VA=Symbol("solid-proxy"),MA=typeof Proxy=="function",NQ=Symbol("solid-track"),WA={equals:j};let kQ=vQ;const bA=1,PA=2,oQ={owned:null,cleanups:null,context:null,owner:null};var EA=null;let xA=null,tA=null,sA=null,YA=null,gQ=0;function qA(A,Q){const g=tA,I=EA,C=A.length===0,B=Q===void 0?I:Q,i=C?oQ:{owned:null,cleanups:null,context:B?B.context:null,owner:B},E=C?A:()=>A(()=>pA(()=>nQ(i)));EA=i,tA=null;try{return sQ(E,!0)}finally{tA=g,EA=I}}function eA(A,Q){Q=Q?Object.assign({},WA,Q):WA;const g={value:A,observers:null,observerSlots:null,comparator:Q.equals||void 0},I=C=>(typeof C=="function"&&(C=C(g.value)),O(g,C));return[R.bind(g),I]}function b(A,Q,g){const I=nA(A,Q,!1,bA);_(I)}function jA(A,Q,g){kQ=Og;const I=nA(A,Q,!1,bA);I.user=!0,YA?YA.push(I):_(I)}function LA(A,Q,g){g=g?Object.assign({},WA,g):WA;const I=nA(A,Q,!0,0);return I.observers=null,I.observerSlots=null,I.comparator=g.equals||void 0,_(I),R.bind(I)}function pA(A){if(tA===null)return A();const Q=tA;tA=null;try{return A()}finally{tA=Q}}function Y(A){jA(()=>pA(A))}function k(A){return EA===null||(EA.cleanups===null?EA.cleanups=[A]:EA.cleanups.push(A)),A}function R(){if(this.sources&&this.state)if(this.state===bA)_(this);else{const A=sA;sA=null,sQ(()=>FQ(this),!1),sA=A}if(tA){const A=this.observers?this.observers.length:0;tA.sources?(tA.sources.push(this),tA.sourceSlots.push(A)):(tA.sources=[this],tA.sourceSlots=[A]),this.observers?(this.observers.push(tA),this.observerSlots.push(tA.sources.length-1)):(this.observers=[tA],this.observerSlots=[tA.sources.length-1])}return this.value}function O(A,Q,g){let I=A.value;return(!A.comparator||!A.comparator(I,Q))&&(A.value=Q,A.observers&&A.observers.length&&sQ(()=>{for(let C=0;C<A.observers.length;C+=1){const B=A.observers[C],i=xA&&xA.running;i&&xA.disposed.has(B),(i?!B.tState:!B.state)&&(B.pure?sA.push(B):YA.push(B),B.observers&&PQ(B)),i||(B.state=bA)}if(sA.length>1e6)throw sA=[],new Error},!1)),Q}function _(A){if(!A.fn)return;nQ(A);const Q=gQ;IA(A,A.value,Q)}function IA(A,Q,g){let I;const C=EA,B=tA;tA=EA=A;try{I=A.fn(Q)}catch(i){return A.pure&&(A.state=bA,A.owned&&A.owned.forEach(nQ),A.owned=null),A.updatedAt=g+1,_Q(i)}finally{tA=B,EA=C}(!A.updatedAt||A.updatedAt<=g)&&(A.updatedAt!=null&&"observers"in A?O(A,I):A.value=I,A.updatedAt=g)}function nA(A,Q,g,I=bA,C){const B={fn:A,state:I,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:Q,owner:EA,context:EA?EA.context:null,pure:g};return EA===null||EA!==oQ&&(EA.owned?EA.owned.push(B):EA.owned=[B]),B}function OA(A){if(A.state===0)return;if(A.state===PA)return FQ(A);if(A.suspense&&pA(A.suspense.inFallback))return A.suspense.effects.push(A);const Q=[A];for(;(A=A.owner)&&(!A.updatedAt||A.updatedAt<gQ);)A.state&&Q.push(A);for(let g=Q.length-1;g>=0;g--)if(A=Q[g],A.state===bA)_(A);else if(A.state===PA){const I=sA;sA=null,sQ(()=>FQ(A,Q[0]),!1),sA=I}}function sQ(A,Q){if(sA)return A();let g=!1;Q||(sA=[]),YA?g=!0:YA=[],gQ++;try{const I=A();return bg(g),I}catch(I){g||(YA=null),sA=null,_Q(I)}}function bg(A){if(sA&&(vQ(sA),sA=null),A)return;const Q=YA;YA=null,Q.length&&sQ(()=>kQ(Q),!1)}function vQ(A){for(let Q=0;Q<A.length;Q++)OA(A[Q])}function Og(A){let Q,g=0;for(Q=0;Q<A.length;Q++){const I=A[Q];I.user?A[g++]=I:OA(I)}for(Q=0;Q<g;Q++)OA(A[Q])}function FQ(A,Q){A.state=0;for(let g=0;g<A.sources.length;g+=1){const I=A.sources[g];if(I.sources){const C=I.state;C===bA?I!==Q&&(!I.updatedAt||I.updatedAt<gQ)&&OA(I):C===PA&&FQ(I,Q)}}}function PQ(A){for(let Q=0;Q<A.observers.length;Q+=1){const g=A.observers[Q];g.state||(g.state=PA,g.pure?sA.push(g):YA.push(g),g.observers&&PQ(g))}}function nQ(A){let Q;if(A.sources)for(;A.sources.length;){const g=A.sources.pop(),I=A.sourceSlots.pop(),C=g.observers;if(C&&C.length){const B=C.pop(),i=g.observerSlots.pop();I<C.length&&(B.sourceSlots[i]=I,C[I]=B,g.observerSlots[I]=i)}}if(A.tOwned){for(Q=A.tOwned.length-1;Q>=0;Q--)nQ(A.tOwned[Q]);delete A.tOwned}if(A.owned){for(Q=A.owned.length-1;Q>=0;Q--)nQ(A.owned[Q]);A.owned=null}if(A.cleanups){for(Q=A.cleanups.length-1;Q>=0;Q--)A.cleanups[Q]();A.cleanups=null}A.state=0}function xg(A){return A instanceof Error?A:new Error(typeof A=="string"?A:"Unknown error",{cause:A})}function _Q(A,Q=EA){throw xg(A)}const bQ=Symbol("fallback");function dQ(A){for(let Q=0;Q<A.length;Q++)A[Q]()}function qg(A,Q,g={}){let I=[],C=[],B=[],i=0,E=Q.length>1?[]:null;return k(()=>dQ(B)),()=>{let a=A()||[],F=a.length,y,w;return a[NQ],pA(()=>{let QA,iA,aA,cA,m,r,e,s,c;if(F===0)i!==0&&(dQ(B),B=[],I=[],C=[],i=0,E&&(E=[])),g.fallback&&(I=[bQ],C[0]=qA(f=>(B[0]=f,g.fallback())),i=1);else if(i===0){for(C=new Array(F),w=0;w<F;w++)I[w]=a[w],C[w]=qA(X);i=F}else{for(aA=new Array(F),cA=new Array(F),E&&(m=new Array(F)),r=0,e=Math.min(i,F);r<e&&I[r]===a[r];r++);for(e=i-1,s=F-1;e>=r&&s>=r&&I[e]===a[s];e--,s--)aA[s]=C[e],cA[s]=B[e],E&&(m[s]=E[e]);for(QA=new Map,iA=new Array(s+1),w=s;w>=r;w--)c=a[w],y=QA.get(c),iA[w]=y===void 0?-1:y,QA.set(c,w);for(y=r;y<=e;y++)c=I[y],w=QA.get(c),w!==void 0&&w!==-1?(aA[w]=C[y],cA[w]=B[y],E&&(m[w]=E[y]),w=iA[w],QA.set(c,w)):B[y]();for(w=r;w<F;w++)w in aA?(C[w]=aA[w],B[w]=cA[w],E&&(E[w]=m[w],E[w](w))):C[w]=qA(X);C=C.slice(0,i=F),I=a.slice(0)}return C});function X(QA){if(B[w]=QA,E){const[iA,aA]=eA(w);return E[w]=aA,Q(a[w],iA)}return Q(a[w])}}}function jg(A,Q,g={}){let I=[],C=[],B=[],i=[],E=0,a;return k(()=>dQ(B)),()=>{const F=A()||[],y=F.length;return F[NQ],pA(()=>{if(y===0)return E!==0&&(dQ(B),B=[],I=[],C=[],E=0,i=[]),g.fallback&&(I=[bQ],C[0]=qA(X=>(B[0]=X,g.fallback())),E=1),C;for(I[0]===bQ&&(B[0](),B=[],I=[],C=[],E=0),a=0;a<y;a++)a<I.length&&I[a]!==F[a]?i[a](()=>F[a]):a>=I.length&&(C[a]=qA(w));for(;a<I.length;a++)B[a]();return E=i.length=B.length=y,I=F.slice(0),C=C.slice(0,E)});function w(X){B[a]=X;const[QA,iA]=eA(F[a]);return i[a]=iA,Q(QA,a)}}}function T(A,Q){return pA(()=>A(Q||{}))}function yQ(){return!0}const Tg={get(A,Q,g){return Q===VA?g:A.get(Q)},has(A,Q){return Q===VA?!0:A.has(Q)},set:yQ,deleteProperty:yQ,getOwnPropertyDescriptor(A,Q){return{configurable:!0,enumerable:!0,get(){return A.get(Q)},set:yQ,deleteProperty:yQ}},ownKeys(A){return A.keys()}};function OQ(A){return(A=typeof A=="function"?A():A)?A:{}}function Xg(){for(let A=0,Q=this.length;A<Q;++A){const g=this[A]();if(g!==void 0)return g}}function $Q(...A){let Q=!1;for(let i=0;i<A.length;i++){const E=A[i];Q=Q||!!E&&VA in E,A[i]=typeof E=="function"?(Q=!0,LA(E)):E}if(MA&&Q)return new Proxy({get(i){for(let E=A.length-1;E>=0;E--){const a=OQ(A[E])[i];if(a!==void 0)return a}},has(i){for(let E=A.length-1;E>=0;E--)if(i in OQ(A[E]))return!0;return!1},keys(){const i=[];for(let E=0;E<A.length;E++)i.push(...Object.keys(OQ(A[E])));return[...new Set(i)]}},Tg);const g={},I=Object.create(null);for(let i=A.length-1;i>=0;i--){const E=A[i];if(!E)continue;const a=Object.getOwnPropertyNames(E);for(let F=a.length-1;F>=0;F--){const y=a[F];if(y==="__proto__"||y==="constructor")continue;const w=Object.getOwnPropertyDescriptor(E,y);if(!I[y])I[y]=w.get?{enumerable:!0,configurable:!0,get:Xg.bind(g[y]=[w.get.bind(E)])}:w.value!==void 0?w:void 0;else{const X=g[y];X&&(w.get?X.push(w.get.bind(E)):w.value!==void 0&&X.push(()=>w.value))}}}const C={},B=Object.keys(I);for(let i=B.length-1;i>=0;i--){const E=B[i],a=I[E];a&&a.get?Object.defineProperty(C,E,a):C[E]=a?a.value:void 0}return C}const Kg=A=>`Stale read from <${A}>.`;function TA(A){const Q="fallback"in A&&{fallback:()=>A.fallback};return LA(qg(()=>A.each,A.children,Q||void 0))}function Wg(A){const Q="fallback"in A&&{fallback:()=>A.fallback};return LA(jg(()=>A.each,A.children,Q||void 0))}function JA(A){const Q=A.keyed,g=LA(()=>A.when,void 0,void 0),I=Q?g:LA(g,void 0,{equals:(C,B)=>!C==!B});return LA(()=>{const C=I();if(C){const B=A.children;return typeof B=="function"&&B.length>0?pA(()=>B(Q?C:()=>{if(!pA(I))throw Kg("Show");return g()})):B}return A.fallback},void 0,void 0)}const Ag=A=>LA(()=>A());function zg(A,Q,g){let I=g.length,C=Q.length,B=I,i=0,E=0,a=Q[C-1].nextSibling,F=null;for(;i<C||E<B;){if(Q[i]===g[E]){i++,E++;continue}for(;Q[C-1]===g[B-1];)C--,B--;if(C===i){const y=B<I?E?g[E-1].nextSibling:g[B-E]:a;for(;E<B;)A.insertBefore(g[E++],y)}else if(B===E)for(;i<C;)(!F||!F.has(Q[i]))&&Q[i].remove(),i++;else if(Q[i]===g[B-1]&&g[E]===Q[C-1]){const y=Q[--C].nextSibling;A.insertBefore(g[E++],Q[i++].nextSibling),A.insertBefore(g[--B],y),Q[C]=g[B]}else{if(!F){F=new Map;let w=E;for(;w<B;)F.set(g[w],w++)}const y=F.get(Q[i]);if(y!=null)if(E<y&&y<B){let w=i,X=1,QA;for(;++w<C&&w<B&&!((QA=F.get(Q[w]))==null||QA!==y+X);)X++;if(X>y-E){const iA=Q[i];for(;E<y;)A.insertBefore(g[E++],iA)}else A.replaceChild(g[E++],Q[i++])}else i++;else Q[i++].remove()}}}const Qg="_$DX_DELEGATE";function vg(A,Q,g,I={}){let C;return qA(B=>{C=B,Q===document?A():dA(Q,A(),Q.firstChild?null:void 0,g)},I.owner),()=>{C(),Q.textContent=""}}function NA(A,Q,g,I){let C;const B=()=>{const E=document.createElement("template");return E.innerHTML=A,E.content.firstChild},i=()=>(C||(C=B())).cloneNode(!0);return i.cloneNode=i,i}function gg(A,Q=window.document){const g=Q[Qg]||(Q[Qg]=new Set);for(let I=0,C=A.length;I<C;I++){const B=A[I];g.has(B)||(g.add(B),Q.addEventListener(B,$g))}}function Pg(A,Q,g){A.removeAttribute(Q)}function _g(A,Q,g){if(!Q)return g?Pg(A,"style"):Q;const I=A.style;if(typeof Q=="string")return I.cssText=Q;typeof g=="string"&&(I.cssText=g=void 0),g||(g={}),Q||(Q={});let C,B;for(B in g)Q[B]==null&&I.removeProperty(B),delete g[B];for(B in Q)C=Q[B],C!==g[B]&&(I.setProperty(B,C),g[B]=C);return g}function aQ(A,Q,g){g!=null?A.style.setProperty(Q,g):A.style.removeProperty(Q)}function Ig(A,Q,g){return pA(()=>A(Q,g))}function dA(A,Q,g,I){if(g!==void 0&&!I&&(I=[]),typeof Q!="function")return MQ(A,Q,I,g);b(C=>MQ(A,Q(),C,g),I)}function $g(A){let Q=A.target;const g=`$$${A.type}`,I=A.target,C=A.currentTarget,B=a=>Object.defineProperty(A,"target",{configurable:!0,value:a}),i=()=>{const a=Q[g];if(a&&!Q.disabled){const F=Q[`${g}Data`];if(F!==void 0?a.call(Q,F,A):a.call(Q,A),A.cancelBubble)return}return Q.host&&typeof Q.host!="string"&&!Q.host._$host&&Q.contains(A.target)&&B(Q.host),!0},E=()=>{for(;i()&&(Q=Q._$host||Q.parentNode||Q.host););};if(Object.defineProperty(A,"currentTarget",{configurable:!0,get(){return Q||document}}),A.composedPath){const a=A.composedPath();B(a[0]);for(let F=0;F<a.length-2&&(Q=a[F],!!i());F++){if(Q._$host){Q=Q._$host,E();break}if(Q.parentNode===C)break}}else E();B(I)}function MQ(A,Q,g,I,C){for(;typeof g=="function";)g=g();if(Q===g)return g;const B=typeof Q,i=I!==void 0;if(A=i&&g[0]&&g[0].parentNode||A,B==="string"||B==="number"){if(B==="number"&&(Q=Q.toString(),Q===g))return g;if(i){let E=g[0];E&&E.nodeType===3?E.data!==Q&&(E.data=Q):E=document.createTextNode(Q),g=IQ(A,g,I,E)}else g!==""&&typeof g=="string"?g=A.firstChild.data=Q:g=A.textContent=Q}else if(Q==null||B==="boolean")g=IQ(A,g,I);else{if(B==="function")return b(()=>{let E=Q();for(;typeof E=="function";)E=E();g=MQ(A,E,g,I)}),()=>g;if(Array.isArray(Q)){const E=[],a=g&&Array.isArray(g);if(xQ(E,Q,g,C))return b(()=>g=MQ(A,E,g,I,!0)),()=>g;if(E.length===0){if(g=IQ(A,g,I),i)return g}else a?g.length===0?Cg(A,E,I):zg(A,g,E):(g&&IQ(A),Cg(A,E));g=E}else if(Q.nodeType){if(Array.isArray(g)){if(i)return g=IQ(A,g,I,Q);IQ(A,g,null,Q)}else g==null||g===""||!A.firstChild?A.appendChild(Q):A.replaceChild(Q,A.firstChild);g=Q}}return g}function xQ(A,Q,g,I){let C=!1;for(let B=0,i=Q.length;B<i;B++){let E=Q[B],a=g&&g[A.length],F;if(!(E==null||E===!0||E===!1))if((F=typeof E)=="object"&&E.nodeType)A.push(E);else if(Array.isArray(E))C=xQ(A,E,a)||C;else if(F==="function")if(I){for(;typeof E=="function";)E=E();C=xQ(A,Array.isArray(E)?E:[E],Array.isArray(a)?a:[a])||C}else A.push(E),C=!0;else{const y=String(E);a&&a.nodeType===3&&a.data===y?A.push(a):A.push(document.createTextNode(y))}}return C}function Cg(A,Q,g=null){for(let I=0,C=Q.length;I<C;I++)A.insertBefore(Q[I],g)}function IQ(A,Q,g,I){if(g===void 0)return A.textContent="";const C=I||document.createTextNode("");if(Q.length){let B=!1;for(let i=Q.length-1;i>=0;i--){const E=Q[i];if(C!==E){const a=E.parentNode===A;!B&&!i?a?A.replaceChild(C,E):A.insertBefore(C,g):a&&E.remove()}else B=!0}}else A.insertBefore(C,g);return[C]}const AI=A=>LA(()=>A());function QI({createElement:A,createTextNode:Q,isTextNode:g,replaceText:I,insertNode:C,removeNode:B,setProperty:i,getParentNode:E,getFirstChild:a,getNextSibling:F}){function y(r,e,s,c){if(s!==void 0&&!c&&(c=[]),typeof e!="function")return w(r,e,c,s);b(f=>w(r,e(),f,s),c)}function w(r,e,s,c,f){for(;typeof s=="function";)s=s();if(e===s)return s;const t=typeof e,h=c!==void 0;if(t==="string"||t==="number")if(t==="number"&&(e=e.toString()),h){let l=s[0];l&&g(l)?I(l,e):l=Q(e),s=iA(r,s,c,l)}else s!==""&&typeof s=="string"?I(a(r),s=e):(iA(r,s,c,Q(e)),s=e);else if(e==null||t==="boolean")s=iA(r,s,c);else{if(t==="function")return b(()=>{let l=e();for(;typeof l=="function";)l=l();s=w(r,l,s,c)}),()=>s;if(Array.isArray(e)){const l=[];if(X(l,e,f))return b(()=>s=w(r,l,s,c,!0)),()=>s;if(l.length===0){const V=iA(r,s,c);if(h)return s=V}else Array.isArray(s)?s.length===0?aA(r,l,c):QA(r,s,l):s==null||s===""?aA(r,l):QA(r,h&&s||[a(r)],l);s=l}else{if(Array.isArray(s)){if(h)return s=iA(r,s,c,e);iA(r,s,null,e)}else s==null||s===""||!a(r)?C(r,e):cA(r,e,a(r));s=e}}return s}function X(r,e,s){let c=!1;for(let f=0,t=e.length;f<t;f++){let h=e[f],l;if(!(h==null||h===!0||h===!1))if(Array.isArray(h))c=X(r,h)||c;else if((l=typeof h)=="string"||l==="number")r.push(Q(h));else if(l==="function")if(s){for(;typeof h=="function";)h=h();c=X(r,Array.isArray(h)?h:[h])||c}else r.push(h),c=!0;else r.push(h)}return c}function QA(r,e,s){let c=s.length,f=e.length,t=c,h=0,l=0,V=F(e[f-1]),H=null;for(;h<f||l<t;){if(e[h]===s[l]){h++,l++;continue}for(;e[f-1]===s[t-1];)f--,t--;if(f===h){const K=t<c?l?F(s[l-1]):s[t-l]:V;for(;l<t;)C(r,s[l++],K)}else if(t===l)for(;h<f;)(!H||!H.has(e[h]))&&B(r,e[h]),h++;else if(e[h]===s[t-1]&&s[l]===e[f-1]){const K=F(e[--f]);C(r,s[l++],F(e[h++])),C(r,s[--t],K),e[f]=s[t]}else{if(!H){H=new Map;let U=l;for(;U<t;)H.set(s[U],U++)}const K=H.get(e[h]);if(K!=null)if(l<K&&K<t){let U=h,oA=1,lA;for(;++U<f&&U<t&&!((lA=H.get(e[U]))==null||lA!==K+oA);)oA++;if(oA>K-l){const RA=e[h];for(;l<K;)C(r,s[l++],RA)}else cA(r,s[l++],e[h++])}else h++;else B(r,e[h++])}}}function iA(r,e,s,c){if(s===void 0){let t;for(;t=a(r);)B(r,t);return c&&C(r,c),""}const f=c||Q("");if(e.length){let t=!1;for(let h=e.length-1;h>=0;h--){const l=e[h];if(f!==l){const V=E(l)===r;!t&&!h?V?cA(r,f,l):C(r,f,s):V&&B(r,l)}else t=!0}}else C(r,f,s);return[f]}function aA(r,e,s){for(let c=0,f=e.length;c<f;c++)C(r,e[c],s)}function cA(r,e,s){C(r,e,s),B(r,s)}function m(r,e,s={},c){return e||(e={}),c||b(()=>s.children=w(r,e.children,s.children)),b(()=>e.ref&&e.ref(r)),b(()=>{for(const f in e){if(f==="children"||f==="ref")continue;const t=e[f];t!==s[f]&&(i(r,f,t,s[f]),s[f]=t)}}),s}return{render(r,e){let s;return qA(c=>{s=c,y(e,r())}),s},insert:y,spread(r,e,s){typeof e=="function"?b(c=>m(r,e(),c,s)):m(r,e,void 0,s)},createElement:A,createTextNode:Q,insertNode:C,setProp(r,e,s,c){return i(r,e,s,c),s},mergeProps:$Q,effect:b,memo:AI,createComponent:T,use(r,e,s){return pA(()=>r(e,s))}}}function gI(A){const Q=QI(A);return Q.mergeProps=$Q,Q}const YQ=new WeakMap;let Bg=0;const II=A=>A.children,{render:CI,effect:Eg,createComponent:BI,createElement:v,createTextNode:EI,insertNode:uA,insert:hA,setProp:o}=gI({createElement(A){let Q=A.charAt(0).toUpperCase()+A.slice(1);return A==="tui-box"&&(Q="Box"),A==="tui-text"&&(Q="Text"),{__id:++Bg,type:Q,props:{},children:[]}},createTextNode(A){return{__id:++Bg,type:"Text",props:{content:String(A)},children:[]}},replaceText(A,Q){A.props.content=String(Q)},setProperty(A,Q,g){A.props||(A.props={}),typeof g=="function"&&!Q.startsWith("on")?Eg(()=>{A.props[Q]=g()}):A.props[Q]=g},insertNode(A,Q,g){if(!(!A||!Q)){if(A.children||(A.children=[]),g){const I=A.children.indexOf(g);I!==-1?A.children.splice(I,0,Q):A.children.push(Q)}else A.children.push(Q);YQ.set(Q,A)}},isTextNode(A){return A.type==="Text"},removeNode(A,Q){const g=A.children.indexOf(Q);g!==-1&&A.children.splice(g,1),YQ.delete(Q)},getParentNode(A){return YQ.get(A)},getFirstChild(A){return A.children[0]},getNextSibling(A){const Q=YQ.get(A);if(!Q)return;const g=Q.children.indexOf(A);return Q.children[g+1]}});function ig(A,Q,...g){if(typeof A=="function"){const B={...Q};g.length>0&&(B.children=g.length<=1?g[0]:g);const i={};for(const E in B){const a=B[E];typeof a=="function"&&!E.startsWith("on")&&E!=="children"?Object.defineProperty(i,E,{get(){return a()},enumerable:!0,configurable:!0}):i[E]=a}return BI(A,i)}const I=v(A);if(Q)for(const B in Q){if(B==="children")continue;const i=Q[B];typeof i=="function"&&!B.startsWith("on")?Eg(()=>o(I,B,i())):o(I,B,i)}const C=g.flat(1/0);for(const B of C)B!=null&&(typeof B=="string"||typeof B=="number"?uA(I,EI(String(B))):hA(I,B));return I}var iI=NA("<canvas style=width:100%;height:100%;border:none>");let tg,eg,og,sg,ng,ag,Dg,rg,cg,wg,hg,lg,Vg,Gg,Ng,kA,CQ;tg=A=>{let Q,g=null,I=null,C=null,B=null,i=null,E=null,a,F=null;const y="bold 24px monospace",w=()=>{const t=document.createElement("canvas").getContext("2d");t.font=y;let h=0;for(let l=32;l<127;l++){const V=t.measureText(String.fromCharCode(l));V.width>h&&(h=V.width)}return{cellWidth:Math.ceil(h)+2,cellHeight:32}},{cellWidth:X,cellHeight:QA}=w(),iA=`#version 300 es
    in vec2 position;
    out vec2 vUv;
    void main() {
      vUv = position * 0.5 + 0.5;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `,aA=`#version 300 es
    precision highp float;
    in vec2 vUv;
    out vec4 fragColor;

    uniform sampler2D fontTex;
    uniform sampler2D charsTex;
    uniform sampler2D fgsTex;
    uniform sampler2D bgsTex;
    uniform vec2 gridRes;
    uniform bool showCursor;
    uniform vec2 cursorPos; // New: x, y in grid coordinates
    uniform float time; // New: for animation
    uniform float curveIntensity; // New: for curve
    uniform float scanlineIntensity; // New: for scanlines
    uniform float tearIntensity; // New: for screen tearing

    // Function to apply a subtle curve distortion
    vec2 curve(vec2 uv) {
        uv = uv * 2.0 - 1.0; // scale from [0,1] to [-1,1]
        // Apply a quadratic distortion, more pronounced towards edges
        uv.x *= 1.0 + curveIntensity * (uv.y * uv.y);
        uv.y *= 1.0 + curveIntensity * (uv.x * uv.x);
        return uv * 0.5 + 0.5; // scale back to [0,1]
    }

    void main() {
      vec2 uv = vUv;

      // Animated Screen Tearing effect
      // This effect displaces scanlines horizontally based on time and y-position
      float tearOffset = 0.0;
      float tearFrequency = 50.0; // How many tears along the y-axis
      float tearSpeed = 10.0; // How fast the tears animate
      float tearWave = sin(uv.y * tearFrequency + time * tearSpeed) * cos(uv.y * tearFrequency * 0.5 + time * tearSpeed * 0.7);
      
      // Apply tearing only to certain bands or at certain times for a more dynamic effect
      // The 'mod' function creates bands where the tearing is visible
      if (mod(floor(uv.y * gridRes.y + time * 0.5), 10.0) < 2.0) { // Affects certain horizontal bands
        tearOffset = tearWave * 0.01 * tearIntensity; // Scale by tear intensity
      }
      uv.x += tearOffset; // Apply horizontal displacement

      // Apply curvature to the UVs
      uv = curve(uv);

      // Ensure UVs remain within [0,1] after distortion and tearing,
      // otherwise, texture sampling might result in undefined behavior
      uv = clamp(uv, 0.0, 1.0);

      // TUI grid: (0,0) is top-left.
      // vUv: (0,0) is bottom-left.
      vec2 tuiUv = vec2(uv.x, 1.0 - uv.y);
      
      // Calculate cell coordinates and local coordinates within the cell
      vec2 cellCoord = floor(tuiUv * gridRes);
      vec2 localCoord = fract(tuiUv * gridRes);
      
      // Sample character index, foreground, and background colors from textures
      float charIdx = texture(charsTex, (cellCoord + 0.5) / gridRes).r * 255.0;
      vec3 fg = texture(fgsTex, (cellCoord + 0.5) / gridRes).rgb;
      vec3 bg = texture(bgsTex, (cellCoord + 0.5) / gridRes).rgb;

      // Font Atlas (16x16 grid).
      // Row 0 (char 0-15) is at the TOP of the texture (Y=1.0) due to UNPACK_FLIP_Y_WEBGL.
      float row = floor(charIdx / 16.0);
      float col = mod(charIdx, 16.0);
      
      // Adjust localCoord.y for font texture sampling (0 at top of cell -> 1 at top)
      vec2 fontUv = (vec2(col, 15.0 - row) + vec2(localCoord.x, 1.0 - localCoord.y)) / 16.0;
      
      // Sample font texture and mix foreground/background colors
      float fontSample = texture(fontTex, fontUv).r;

      if (showCursor) {
          // Handle Cursor: blinking underscore effect
          // Check if this cell matches the cursor position
          if (floor(cellCoord.x + 0.5) == floor(cursorPos.x + 0.5) && 
              floor(cellCoord.y + 0.5) == floor(cursorPos.y + 0.5)) {
              // Blinking effect: toggle every 500ms
              if (mod(time, 1.0) < 0.5) {
                  // Draw underscore at the bottom of the cell (localCoord.y is 0 at top, 1 at bottom for tuiUv logic?)
                  // Wait, let's re-examine: tuiUv = vec2(uv.x, 1.0 - uv.y);
                  // localCoord = fract(tuiUv * gridRes);
                  // localCoord.y = 0 at the top of the cell, 1 at the bottom.
                  if (localCoord.y > 0.875) {
                      // Force foreground color for the underscore
                      fontSample = 1.0;
                  }
              }
          }
      }

      vec3 finalColor = mix(bg, fg, fontSample);

      // Scanline effect: Darken every other scanline
      // gl_FragCoord.y provides the pixel's y-coordinate on the screen
      if (mod(floor(gl_FragCoord.y), 2.0) < 1.0) { // Every other line
          finalColor *= (1.0 - scanlineIntensity); // Reduce brightness
      }

      fragColor = vec4(finalColor, 1.0);
    }
  `,cA=()=>{if(!Q||(g=Q.getContext("webgl2",{alpha:!1,antialias:!1}),!g))return;a=performance.now();const t=(U,oA,lA)=>{const RA=U.createShader(oA);return U.shaderSource(RA,lA),U.compileShader(RA),RA},h=t(g,g.VERTEX_SHADER,iA),l=t(g,g.FRAGMENT_SHADER,aA);I=g.createProgram(),g.attachShader(I,h),g.attachShader(I,l),g.linkProgram(I),g.useProgram(I),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,!0),C=e(g),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,!1);const V=new Float32Array([-1,-1,1,-1,-1,1,1,1]),H=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,H),g.bufferData(g.ARRAY_BUFFER,V,g.STATIC_DRAW);const K=g.getAttribLocation(I,"position");g.enableVertexAttribArray(K),g.vertexAttribPointer(K,2,g.FLOAT,!1,0,0),B=g.createTexture(),i=g.createTexture(),E=g.createTexture(),[B,i,E].forEach(U=>{g.bindTexture(g.TEXTURE_2D,U),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.NEAREST),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.NEAREST),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE)})};function m(t){return/^[ -~]$/.test(t)}const r={1:"│",2:"─",3:"┌",4:"┐",5:"└",6:"┘",7:"├",8:"┤",9:"┬",10:"┴",11:"┼",12:"╭",13:"╮",14:"╯",15:"╰"},e=t=>{const h=document.createElement("canvas"),l=X*16,V=QA*16;h.width=l,h.height=V;const H=h.getContext("2d");H.fillStyle="black",H.fillRect(0,0,l,V),H.fillStyle="white",H.font=y,H.textAlign="center",H.textBaseline="middle";for(let U=0;U<256;U++){let oA="";if(m(String.fromCharCode(U)))oA=String.fromCharCode(U);else if(r[U])oA=r[U];else continue;const lA=U%16*X+X/2,RA=Math.floor(U/16)*QA+QA/2;H.fillText(oA,lA,RA)}const K=t.createTexture();return t.bindTexture(t.TEXTURE_2D,K),t.texImage2D(t.TEXTURE_2D,0,t.R8,l,V,0,t.RED,t.UNSIGNED_BYTE,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),K},s=()=>{g&&(g.pixelStorei(g.UNPACK_ALIGNMENT,1),g.bindTexture(g.TEXTURE_2D,B),g.texImage2D(g.TEXTURE_2D,0,g.R8,A.width,A.height,0,g.RED,g.UNSIGNED_BYTE,A.chars),g.bindTexture(g.TEXTURE_2D,i),g.texImage2D(g.TEXTURE_2D,0,g.RGB8,A.width,A.height,0,g.RGB,g.UNSIGNED_BYTE,A.fgs),g.bindTexture(g.TEXTURE_2D,E),g.texImage2D(g.TEXTURE_2D,0,g.RGB8,A.width,A.height,0,g.RGB,g.UNSIGNED_BYTE,A.bgs))},c=()=>{if(F=null,!(!g||!I||!Q))try{const t=Q.clientWidth,h=Q.clientHeight;(Q.width!==t||Q.height!==h)&&(Q.width=t,Q.height=h),g.viewport(0,0,g.canvas.width,g.canvas.height),g.useProgram(I),g.activeTexture(g.TEXTURE0),g.bindTexture(g.TEXTURE_2D,C),g.activeTexture(g.TEXTURE1),g.bindTexture(g.TEXTURE_2D,B),g.activeTexture(g.TEXTURE2),g.bindTexture(g.TEXTURE_2D,i),g.activeTexture(g.TEXTURE3),g.bindTexture(g.TEXTURE_2D,E),g.uniform1i(g.getUniformLocation(I,"fontTex"),0),g.uniform1i(g.getUniformLocation(I,"charsTex"),1),g.uniform1i(g.getUniformLocation(I,"fgsTex"),2),g.uniform1i(g.getUniformLocation(I,"bgsTex"),3),g.uniform2f(g.getUniformLocation(I,"gridRes"),A.width,A.height),g.uniform1i(g.getUniformLocation(I,"showCursor"),A.showCursor?1:0),g.uniform2f(g.getUniformLocation(I,"cursorPos"),A.cursorX,A.cursorY);const l=(performance.now()-a)/1e3;g.uniform1f(g.getUniformLocation(I,"time"),l);const V=A.crtEnabled?{curve:.05,scanline:.3,tear:1}:{curve:0,scanline:0,tear:0};g.uniform1f(g.getUniformLocation(I,"curveIntensity"),V.curve),g.uniform1f(g.getUniformLocation(I,"scanlineIntensity"),V.scanline),g.uniform1f(g.getUniformLocation(I,"tearIntensity"),V.tear),g.drawArrays(g.TRIANGLE_STRIP,0,4)}finally{A.crtEnabled&&(F=requestAnimationFrame(c))}},f=()=>{F===null&&(F=requestAnimationFrame(c))};return Y(()=>{cA(),A.onMeasure&&A.onMeasure({width:X,height:QA}),f(),window.addEventListener("resize",f),k(()=>{window.removeEventListener("resize",f),F!==null&&cancelAnimationFrame(F)})}),jA(()=>{A.chars,A.fgs,A.bgs,A.width,A.height,A.cursorX,A.cursorY,A.crtEnabled,A.showKeyboard,s(),f()}),jA(()=>{if(!A.crtEnabled){const t=setInterval(()=>{f()},500);k(()=>clearInterval(t))}}),(()=>{var t=iI(),h=Q;return typeof h=="function"?Ig(h,t):Q=t,t})()},eg=`
export default {
  metadata: {
    name: "context-menu",
    description: "Core context menu functionality"
  },
  setup: (api: any) => {
    api.registerContextMenuItem({
      label: "Paste",
      priority: 100,
      action: async () => {
        try {
          const text = await navigator.clipboard.readText();
          if (text) {
            api.insertText(text);
          }
        } catch (err: any) {
          api.log("Paste failed: " + err.message);
        }
      }
    });
  }
};
`,og=`
export default {
  metadata: {
    name: "eruda",
    description: "Mobile console for debugging"
  },
  setup: (api: any) => {
    // Check if we are in a browser environment
    if (typeof document === 'undefined') return;

    // Register a command to show/hide eruda manually if needed
    api.registerCommand("eruda", (args: string[]) => {
      // @ts-ignore
      if (typeof eruda !== 'undefined') {
        // @ts-ignore
        eruda.show();
      } else {
        api.log("Eruda is not loaded yet.");
      }
    });

    if (document.getElementById('eruda-cdn')) {
      api.log("Eruda script already present.");
      return;
    }

    api.log("Loading Eruda from CDN...");
    
    const script = document.createElement('script');
    script.id = 'eruda-cdn';
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    script.onload = () => {
      // @ts-ignore
      if (typeof eruda !== 'undefined') {
        // @ts-ignore
        eruda.init();
        api.log("Eruda initialized successfully.");
      }
    };
    script.onerror = () => {
      api.log("Failed to load Eruda from CDN.");
    };
    document.head.appendChild(script);
  }
};
`,sg=`
export default {
  metadata: {
    name: "external-fs",
    description: "Access local device folders using :ed"
  },
  setup: (api: any) => {
    const createExternalFS = (rootHandle: any) => {
      const getHandle = async (path: string, create = false) => {
        const parts = path.split("/").filter((p: string) => p.length > 0);
        
        let current = rootHandle;
        if (parts.length === 0) return { dir: current, name: "" };

        // Navigate all but last
        for (let i = 0; i < parts.length - 1; i++) {
          current = await current.getDirectoryHandle(parts[i], { create });
        }
        return { dir: current, name: parts[parts.length - 1] };
      };

      return {
        readFile: async (path: string) => {
          try {
            const { dir, name } = await getHandle(path);
            if (!name) return null; // Root is a directory
            const fileHandle = await dir.getFileHandle(name);
            const file = await fileHandle.getFile();
            return await file.text();
          } catch (e) { return null; }
        },
        writeFile: async (path: string, content: string) => {
          const { dir, name } = await getHandle(path, true);
          const fileHandle = await dir.getFileHandle(name, { create: true });
          const writable = await fileHandle.createWritable();
          await writable.write(content);
          await writable.close();
        },
        listDirectory: async (path: string) => {
          try {
            let dir = rootHandle;
            if (path && path !== "." && path !== "/") {
              const parts = path.split("/").filter((p: string) => p.length > 0);
              for (const part of parts) {
                dir = await dir.getDirectoryHandle(part);
              }
            }
            const entries = [];
            // @ts-ignore
            for await (const [name, handle] of dir.entries()) {
              entries.push(handle.kind === "directory" ? name + "/" : name);
            }
            return entries;
          } catch (e: any) { 
            api.log("List dir failed: " + e.message);
            return []; 
          }
        },
        isDirectory: async (path: string) => {
          if (!path || path === "." || path === "/") return true;
          try {
            const parts = path.split("/").filter((p: string) => p.length > 0);
            let current = rootHandle;
            for (const part of parts) {
              current = await current.getDirectoryHandle(part);
            }
            return true;
          } catch (e) { return false; }
        }
      };
    };

    api.registerCommand("ed", async (args: string[]) => {
      if (args[0] === "reset" || args[0] === "opfs") {
        api.resetFS();
        api.log("Switched back to OPFS");
        api.executeCommand("e .");
        return;
      }

      if (args[0] === "bridge") {
        const port = args[1] || "8080";
        const key = args[2];
        
        if (!key) {
          api.log("Usage: :ed bridge <port> <security-key>");
          return;
        }

        const baseUrl = \`http://localhost:\${port}\`;
        const headers = {
          'X-Bridge-Key': key
        };
        
        const bridgeFS = {
          baseUrl,
          apiKey: key,
          readFile: async (path: string) => {
            try {
              const response = await fetch(\`\${baseUrl}/cat?path=\${encodeURIComponent(path)}\`, { headers });
              if (response.status === 404) return null;
              if (response.status === 401) { api.log("Bridge Error: Unauthorized (Invalid Key)"); return null; }
              if (!response.ok) return null; // Silently fail other errors to avoid log spam during probing
              return await response.text();
            } catch (err: any) {
              // Only log true network errors or crashes
              if (err.name !== 'TypeError') {
                api.log('BridgeFS readFile error: ' + err.message);
              }
              return null;
            }
          },
          writeFile: async (path: string, content: string) => {
            try {
              const response = await fetch(\`\${baseUrl}/write?path=\${encodeURIComponent(path)}\`, {
                method: 'POST',
                body: content,
                headers
              });
              if (response.status === 401) { api.log("Bridge Error: Unauthorized (Invalid Key)"); throw new Error("Unauthorized"); }
              if (!response.ok) throw new Error(await response.text());
            } catch (err: any) {
              api.log('BridgeFS writeFile error: ' + err.message);
              throw err;
            }
          },
          listDirectory: async (path: string) => {
            try {
              const response = await fetch(\`\${baseUrl}/ls?path=\${encodeURIComponent(path)}\`, { headers });
              if (response.status === 401) { api.log("Bridge Error: Unauthorized (Invalid Key)"); return []; }
              if (!response.ok) throw new Error(await response.text());
              return await response.json();
            } catch (err: any) {
              api.log('BridgeFS listDirectory error: ' + err.message);
              return [];
            }
          },
          isDirectory: async (path: string) => {
            try {
              const response = await fetch(\`\${baseUrl}/is_dir?path=\${encodeURIComponent(path)}\`, { headers });
              if (response.status === 401) { api.log("Bridge Error: Unauthorized (Invalid Key)"); return false; }
              if (!response.ok) throw new Error(await response.text());
              const data = await response.json();
              return data.is_dir;
            } catch (err: any) {
              api.log('BridgeFS isDirectory error: ' + err.message);
              return false;
            }
          }
        };

        api.setFS(bridgeFS);
        api.log(\`Connected to Bridge at \${baseUrl} with key protection\`);
        api.executeCommand("e .");
        return;
      }

      try {
        // @ts-ignore
        const handle = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        
        // @ts-ignore
        if (await handle.queryPermission({ mode: "readwrite" }) !== "granted") {
          // @ts-ignore
          await handle.requestPermission({ mode: "readwrite" });
        }

        const fs = createExternalFS(handle);
        api.setFS(fs);
        api.log("Mounted external folder");
        api.executeCommand("e ."); // Refresh explorer to root
      } catch (err: any) {
        api.log("Failed to mount folder: " + err.message);
      }
    });
    
    api.log("External-FS plugin ready. Use :ed to mount a folder.");
  }
};
`,ng=`
export default {
  metadata: {
    name: 'fuzzy-finder',
    description: 'Fuzzy find files and grep contents',
    author: 'Net-Vim Team'
  },
  setup: (api: any) => {
    const walk = async (path: string, allFiles: string[]) => {
      // Skip common large/irrelevant directories
      if (path.includes('.git') || path.includes('node_modules') || path.includes('dist') || path.includes('build')) return;
      
      try {
        const entries = await api.fs.listDirectory(path);
        for (const entry of entries) {
          const isDir = entry.endsWith('/');
          const name = isDir ? entry.slice(0, -1) : entry;
          const fullPath = path ? (path.endsWith('/') ? path + name : path + '/' + name) : name;
          
          if (isDir) {
            await walk(fullPath, allFiles);
          } else {
            allFiles.push(fullPath);
          }
        }
      } catch (e: any) {
        api.log('FuzzyFinder: Walk error at ' + path + ': ' + e.message);
      }
    };

    api.registerCommand('fuzzyFiles', async () => {
      api.log('FuzzyFinder: Searching files...');
      const allFiles: string[] = [];
      await walk('', allFiles);
      
      api.showPicker({
        placeholder: 'Find Files',
        items: allFiles.map(f => ({ label: f, id: f })),
        onSelect: (item: any) => {
          api.executeCommand(\`e \${item.id}\`);
        }
      });
    });

    api.registerCommand('liveGrep', async () => {
      api.log('FuzzyFinder: Live Grep...');
      const allFiles: string[] = [];
      await walk('', allFiles);

      api.showPicker({
        placeholder: 'Live Grep',
        items: async (query: string) => {
          if (!query || query.length < 2) return [];
          
          const results: any[] = [];
          const q = query.toLowerCase();
          
          // Limit to first 100 results for performance
          for (const file of allFiles) {
            if (results.length >= 100) break;
            
            // Skip binary or large files if we had a way to check, but for now just try
            try {
              const content = await api.fs.readFile(file);
              if (!content) continue;
              
              const lines = content.split('\\n');
              for (let i = 0; i < lines.length; i++) {
                if (lines[i].toLowerCase().includes(q)) {
                  results.push({
                    label: \`\${file}:\${i + 1}\`,
                    detail: lines[i].trim(),
                    id: \`\${file}:\${i + 1}\`,
                    file,
                    line: i
                  });
                  if (results.length >= 100) break;
                }
              }
            } catch (e) {}
          }
          return results;
        },
        onSelect: (item: any) => {
          api.executeCommand(\`e \${item.file}\`);
          // Need a way to set cursor after opening
          setTimeout(() => {
            api.setCursor(0, item.line);
          }, 100);
        }
      });
    });
    
    api.log('FuzzyFinder plugin initialized');
  }
};
`,ag=`
export default {
  metadata: {
    name: "hello-plugin",
    description: "A simple plugin that greets you and tracks mode changes."
  },
  setup: (api: any) => {
    api.log("Hello from the virtual prelude!");
    
    api.registerCommand("hello", (args: string[]) => {
      api.log("Command :hello executed with args:", args);
      console.log("HELLO FROM PRELUDE PLUGIN!", args);
    });

    api.on("ModeChanged", (data: any) => {
      api.log("Mode changed from " + data.from + " to " + data.to);
    });
  }
};
`,Dg="# Net-Vim Help\n\nWelcome to Net-Vim, a TUI-based editor running in your browser!\n\n## Modes\n- **Normal Mode**: The default mode for navigation and commands. Press `Esc` to return here.\n- **Insert Mode**: For typing text. Press `i` to enter.\n- **Visual Mode**: For selecting text. Press `v` to enter/exit.\n- **Command Mode**: For entering colon commands. Press `:` to enter.\n\n## Navigation (Normal/Visual)\n- `h`, `j`, `k`, `l` or **Arrow Keys**: Move cursor left, down, up, right.\n- `Home` / `End`: Move to start/end of line.\n- `PageUp` / `PageDown`: Scroll up/down by a page.\n- `Ctrl-u` / `Ctrl-d`: Scroll up/down by half a page.\n- `Ctrl-y` / `Ctrl-e`: Scroll up/down by one line.\n- `Ctrl + Mouse Wheel`: Zoom in/out.\n\n## Editing (Normal)\n- `i`: Enter Insert Mode at cursor.\n- `x`: Delete character under cursor.\n- `dd`: Delete current line (and yank to clipboard).\n- `yy`: Yank current line to clipboard.\n- `p`: Put clipboard content after cursor (Normal) or replace selection (Visual).\n\n## Editing (Visual)\n- `d` or `x`: Delete selection (and yank to clipboard).\n- `y`: Yank selection to clipboard.\n- `p`: Replace selection with clipboard content.\n\n## Commands (Command Mode)\n- `:w [file]`: Save current buffer to file.\n- `:e [file]`: Open a file or directory. Use `.` for root.\n- `:q`: Quit (currently just logs to console).\n- `:set wrap`: Enable line wrapping.\n- `:set nowrap`: Disable line wrapping.\n- `:set wrap!`: Toggle line wrapping.\n- `:crt`: Toggle CRT effect (Easter Egg).\n\n## LSP & Diagnostics (Normal)\n- `leader d` or `Ctrl-w d`: Show diagnostics for current line.\n- `[d`: Go to previous diagnostic.\n- `]d`: Go to next diagnostic.\n- `leader e`: Show hover information (e.g., types, documentation).\n\n*Note: The 'leader' key is currently set to `Space`.*\n\n## Explorer\n- When opening a directory, use `j`/`k` to navigate and `Enter` to open a file or subdirectory.\n- Select `../` to go up one directory.\n\n## Configuration\n- **First Run**: Use `:create-init` to create a default `.config/net-vim/init.ts` in your storage. This file is loaded every time you start Net-Vim.\n- **Customization**: You can edit `.config/net-vim/init.ts` to load plugins, set options, and more.\n- **FS Recovery**: If OPFS is restricted, Net-Vim will fall back to a memory-based file system.\n",rg=`export { default as contextMenu } from './context-menu';
export { default as eruda } from './eruda';
export { default as externalFs } from './external-fs';
export { default as fuzzyFinder } from './fuzzy-finder';
export { default as hello } from './hello';
export { default as lineNumbers } from './line-numbers';
export { default as markdownSyntax } from './markdown-syntax';
export { default as tsLsp } from './ts-lsp';
export { default as monacoTsLsp } from './monaco-ts-lsp';
export { default as sshTerminal } from './ssh-terminal';
`,cg=`
export default {
  metadata: {
    name: "line-numbers",
    author: "Net-Vim Team",
    version: "1.0.0",
    description: "Provides line numbers in the gutter"
  },
  setup: (api: any) => {
    api.log("Setting up line-numbers plugin...");
    api.registerGutter({
      name: "line-numbers",
      width: 4,
      priority: 100,
      render: ({ lineIndex, isCursorLine }: any) => {
        const getVal = (val: any) => (typeof val === "function" ? val() : val);
        const num = () => (getVal(lineIndex) + 1).toString().padStart(3, " ");
        return (
          <tui-text 
            content={() => num() + " "} 
            color={() => getVal(isCursorLine) ? "#ffffff" : "#888888"} 
          />
        );
      }
    });
    api.log("Line-numbers gutter registered");
  }
};
`,wg=`
// @ts-nocheck
export default {
  metadata: {
    name: 'markdown-syntax',
    description: 'Basic Markdown syntax highlighting'
  },
  setup: (api: any) => {
    api.registerLineRenderer({
      name: 'markdown-highlighter',
      priority: 20, // Higher priority than default
      render: ({ lineIndex, lineContent, leftCol, viewportWidth, visualStart, mode, cursor, currentFilePath }: any) => {
        const path = typeof currentFilePath === 'function' ? currentFilePath() : currentFilePath;
        if (!path || !path.endsWith('.md')) return null;

        const content = typeof lineContent === 'function' ? lineContent() : lineContent;
        const startCol = typeof leftCol === 'function' ? leftCol() : leftCol;
        const width = typeof viewportWidth === 'function' ? viewportWidth() : viewportWidth;
        const idx = typeof lineIndex === 'function' ? lineIndex() : lineIndex;

        // Basic regex for markdown
        const headerRegex = /^(#{1,6}\\s+.*)$/;
        const listRegex = /^(\\s*[*+-]\\s+.*)$/;
        const numListRegex = /^(\\s*\\d+\\.\\s+.*)$/;
        const quoteRegex = /^(\\s*>.*)$/;
        const codeRegex = /^(\\s*\`.*\`\\s*)$/;

        let color = '#ffffff';
        if (headerRegex.test(content)) {
          color = '#569cd6'; // Blue for headers
        } else if (listRegex.test(content) || numListRegex.test(content)) {
          color = '#ce9178'; // Orange/Salmon for lists
        } else if (quoteRegex.test(content)) {
          color = '#6a9955'; // Green for quotes
        } else if (codeRegex.test(content)) {
          color = '#b5cea8'; // Light green for inline code
        } else if (content.startsWith('\`\`\`') || content.endsWith('\`\`\`')) {
          color = '#808080'; // Gray for code blocks
        }

        const visibleContent = content.slice(startCol, startCol + width);
        
        // Handle Visual Mode highlighting
        const start = typeof visualStart === 'function' ? visualStart() : visualStart;
        const currentMode = typeof mode === 'function' ? mode() : mode;
        const currentCursor = typeof cursor === 'function' ? cursor() : cursor;

        if (start && currentMode === 'Visual') {
          let s = start;
          let e = currentCursor;
          if (s.y > e.y || (s.y === e.y && s.x > e.x)) {
            [s, e] = [e, s];
          }

          if (idx >= s.y && idx <= e.y) {
            const highlightStart = (idx === s.y) ? s.x : 0;
            let highlightEnd = (idx === e.y) ? e.x : content.length;
            highlightEnd = Math.min(content.length, highlightEnd + 1);

            const tokens = [];
            const tokenStart = startCol;
            const tokenEnd = startCol + visibleContent.length;

            const splitPoints = [highlightStart, highlightEnd].filter(p => p > tokenStart && p < tokenEnd);
            let lastP = tokenStart;
            for (const p of [...splitPoints, tokenEnd]) {
              const partContent = content.slice(lastP, p);
              if (partContent.length > 0) {
                const isHighlighted = lastP >= highlightStart && lastP < highlightEnd;
                tokens.push({
                  x: lastP - startCol,
                  content: partContent,
                  color: color,
                  bg_color: isHighlighted ? "#004b72" : undefined
                });
              }
              lastP = p;
            }
            return tokens.map(t => (
              <tui-text x={t.x} y={0} content={t.content} color={t.color} bg_color={t.bg_color} />
            ));
          }
        }

        return (
          <tui-text x={0} y={0} content={visibleContent} color={color} />
        );
      }
    });
  }
};
`,hg=`
// @ts-nocheck
export default {
  metadata: {
    name: 'monaco-ts-lsp',
    description: 'TypeScript LSP powered by Monaco editor instance'
  },
  setup: async (api: any) => {
    let monaco: any = null;
    let isInitialized = false;
    let currentPath = '';
    let lints: any[] = [];
    let classificationsMap = new Map<string, any>();
    let debounceTimer: any = null;
    let modelsMap = new Map<string, any>();
    let extraLibsSet = new Set<string>();

    // Monaco TS-LSP plugin loaded (lazy - waits for activation command)

    const ensureMonaco = async () => {
      if (isInitialized) return true;
      
      if (typeof window === 'undefined' || !window.monaco) {
        return false;
      }

      monaco = window.monaco;
      isInitialized = true;
      return true;
    };

    const getFileUri = (absolutePath: string) => {
      const normalizedPath = absolutePath.startsWith('/') ? absolutePath.slice(1) : absolutePath;
      return \`file:///\${normalizedPath}\`;
    };

    const getOrCreateModel = (absolutePath: string, content: string) => {
      const uri = monaco.Uri.parse(getFileUri(absolutePath));
      let model = monaco.editor.getModel(uri);
      if (!model) {
        model = monaco.editor.createModel(content, 'typescript', uri);
        modelsMap.set(absolutePath, model);
      } else {
        model.setValue(content);
        model.setLanguage('typescript');
      }
      return model;
    };

    const getTypeScriptWorker = async (absolutePath: string) => {
      const buffer = api.getBuffer().join('\\n');
      getOrCreateModel(absolutePath, buffer);
      const getWorker = await monaco.languages.typescript.getTypeScriptWorker();
      const worker = await getWorker(monaco.Uri.parse(getFileUri(absolutePath)));
      return worker;
    };

    const addFileToProject = async (absolutePath: string, content: string) => {
      try {
        const defaults = monaco.languages.typescript.typescriptDefaults;
        
        defaults.setCompilerOptions({
          ...defaults.getCompilerOptions(),
          allowJs: true,
          checkJs: true,
          allowNonTsExtensions: true,
          target: monaco.languages.typescript.ScriptTarget.ES2020,
          module: monaco.languages.typescript.ModuleKind.ESNext,
          moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        });
        
        const uri = getFileUri(absolutePath);
        if (!extraLibsSet.has(uri)) {
          defaults.addExtraLib(content, uri);
          extraLibsSet.add(uri);
        }
        
        return true;
      } catch (e) {
        return false;
      }
    };

    const getColorForClassification = (type: string) => {
      const colorMap: Record<string, string> = {
        'comment': '#6a9955',
        'comment.ts': '#6a9955',
        'keyword': '#569cd6',
        'keyword.ts': '#569cd6',
        'keyword.control': '#569cd6',
        'keyword.control.ts': '#569cd6',
        'keyword.operator': '#d4d4d4',
        'keyword.operator.ts': '#d4d4d4',
        'number': '#b5cea8',
        'number.ts': '#b5cea8',
        'string': '#ce9178',
        'string.ts': '#ce9178',
        'string.js': '#ce9178',
        'regexp': '#d16969',
        'regexp.ts': '#d16969',
        'operator': '#d4d4d4',
        'operator.ts': '#d4d4d4',
        'delimiter': '#d4d4d4',
        'delimiter.ts': '#d4d4d4',
        'delimiter.bracket': '#d4d4d4',
        'delimiter.bracket.ts': '#d4d4d4',
        'delimiter.parenthesis': '#d4d4d4',
        'delimiter.parenthesis.ts': '#d4d4d4',
        'delimiter.square': '#d4d4d4',
        'delimiter.square.ts': '#d4d4d4',
        'identifier': '#9cdcfe',
        'identifier.ts': '#9cdcfe',
        'type': '#4ec9b0',
        'type.ts': '#4ec9b0',
        'type.identifier': '#4ec9b0',
        'type.identifier.ts': '#4ec9b0',
        'class': '#4ec9b0',
        'class.ts': '#4ec9b0',
        'interface': '#4ec9b0',
        'interface.ts': '#4ec9b0',
        'enum': '#4ec9b0',
        'enum.ts': '#4ec9b0',
        'function': '#dcdcaa',
        'function.ts': '#dcdcaa',
        'method': '#dcdcaa',
        'method.ts': '#dcdcaa',
        'variable': '#9cdcfe',
        'variable.ts': '#9cdcfe',
        'variable.predefined': '#569cd6',
        'variable.predefined.ts': '#569cd6',
        'parameter': '#9cdcfe',
        'parameter.ts': '#9cdcfe',
        'property': '#9cdcfe',
        'property.ts': '#9cdcfe',
        'constant': '#4fc1ff',
        'constant.ts': '#4fc1ff',
        'event': '#ff9791',
        'event.ts': '#ff9791',
        'tag': '#569cd6',
        'tag.ts': '#569cd6',
        'attribute.name': '#9cdcfe',
        'attribute.name.ts': '#9cdcfe',
        'attribute.value': '#ce9178',
        'attribute.value.ts': '#ce9178',
        'metatag': '#c586c0',
        'metatag.ts': '#c586c0',
        'annotation': '#dcdcaa',
        'annotation.ts': '#dcdcaa',
      };
      return colorMap[type] || '#dcdcaa';
    };

    const updateDiagnostics = async (absolutePath: string) => {
      if (!monaco) return;
      
      try {
        const fileUri = getFileUri(absolutePath);
        const worker = await getTypeScriptWorker(absolutePath);
        
        const semantic = await worker.getSemanticDiagnostics(fileUri);
        const syntactic = await worker.getSyntacticDiagnostics(fileUri);
        
        lints = [];
        
        const processDiags = (diagnostics: any[], category: number) => {
          for (const diag of diagnostics) {
            if (diag.start !== undefined && diag.length !== undefined) {
              const message = typeof diag.messageText === 'string' 
                ? diag.messageText 
                : (diag.messageText?.messageText || String(diag.messageText || diag));
                
              lints.push({
                from: diag.start,
                to: diag.start + diag.length,
                message: message,
                category
              });
            }
          }
        };
        
        processDiags(syntactic || [], 1);
        processDiags(semantic || [], 1);
        
        api.rerender();
      } catch (err: any) {
        console.error('Monaco-TS-LSP Diagnostics:', err);
      }
    };

    const getCompletions = async (absolutePath: string, position: number) => {
      if (!monaco) return [];
      
      try {
        const fileUri = getFileUri(absolutePath);
        const worker = await getTypeScriptWorker(absolutePath);
        const completions = await worker.getCompletionsAtPosition(fileUri, position);
        
        if (!completions) return [];
        
        return completions.entries.map((item: any) => ({
          label: item.name,
          kind: item.kind,
          detail: item.kindModifiers,
          documentation: item.documentation?.map((d: any) => d.text).join(''),
          insertText: item.insertText || item.name,
        }));
      } catch (err: any) {
        console.error('Monaco-TS-LSP Completions:', err);
        return [];
      }
    };

    const getHover = async (absolutePath: string, position: number) => {
      if (!monaco) return null;
      
      try {
        const fileUri = getFileUri(absolutePath);
        const worker = await getTypeScriptWorker(absolutePath);
        const hover = await worker.getQuickInfoAtPosition(fileUri, position);
        
        if (hover && hover.textSpan) {
          const displayParts = hover.displayParts || [];
          const docs = hover.documentation || [];
          return {
            display: [...displayParts, ...docs].map((d: any) => d.text).join(''),
            range: {
              start: hover.textSpan.start,
              end: hover.textSpan.start + hover.textSpan.length
            }
          };
        }
        return null;
      } catch (err: any) {
        console.error('Monaco-TS-LSP Hover:', err);
        return null;
      }
    };

    const getDefinition = async (absolutePath: string, position: number) => {
      if (!monaco) return null;
      
      try {
        const fileUri = getFileUri(absolutePath);
        const worker = await getTypeScriptWorker(absolutePath);
        const definitions = await worker.getDefinitionAtPosition(fileUri, position);
        
        if (definitions && definitions.length > 0) {
          const def = definitions[0];
          return {
            uri: def.file,
            range: def
          };
        }
        return null;
      } catch (err: any) {
        return null;
      }
    };

    const getClassifications = async (absolutePath: string) => {
      if (!monaco) return null;
      
      try {
        const buffer = api.getBuffer().join('\\n');
        const bufferLines = api.getBuffer();
        getOrCreateModel(absolutePath, buffer);
        
        const tokens = monaco.editor.tokenize(buffer, 'typescript');
        if (!tokens || !Array.isArray(tokens)) return null;
        
        const result: any[] = [];
        let lineOffset = 0;
        
        for (let lineIdx = 0; lineIdx < tokens.length; lineIdx++) {
          const lineTokens = tokens[lineIdx];
          const lineLength = (bufferLines[lineIdx]?.length || 0);
          
          if (!lineTokens || lineTokens.length === 0) {
            lineOffset += lineLength + 1;
            continue;
          }
          
          for (let i = 0; i < lineTokens.length; i++) {
            const token = lineTokens[i];
            const offset = token.startIndex ?? token.offset ?? 0;
            const nextToken = lineTokens[i + 1];
            const nextOffset = nextToken ? (nextToken.startIndex ?? nextToken.offset ?? 0) : lineLength;
            const length = nextOffset - offset;
            
            result.push({
              start: lineOffset + offset,
              length: length,
              type: token.type
            });
          }
          lineOffset += lineLength + 1;
        }
        
        return result;
      } catch (err: any) {
        return null;
      }
    };

    const getLintsForLine = (lineIdx: number) => {
      const buffer = api.getBuffer();
      let lineStart = 0;
      for (let i = 0; i < lineIdx; i++) lineStart += (buffer[i]?.length || 0) + 1;
      const lineEnd = lineStart + (buffer[lineIdx]?.length || 0);
      return lints.filter(l => {
        const lFrom = l.from ?? 0;
        const lTo = l.to ?? lFrom;
        return lFrom <= lineEnd && lTo >= lineStart;
      });
    };

    let originalCompletions: any[] = [];
    let completionTriggerPos: { x: number, y: number } | null = null;

    const showFilteredCompletions = () => {
      if (!completionTriggerPos) return;
      const cursor = api.getCursor();
      if (cursor.y !== completionTriggerPos.y || cursor.x < completionTriggerPos.x) {
        api.hideCompletions();
        originalCompletions = [];
        completionTriggerPos = null;
        return;
      }

      const line = api.getBuffer()[cursor.y];
      const filterText = line.slice(completionTriggerPos.x, cursor.x).toLowerCase();
      
      const filtered = originalCompletions.filter(item => 
        item.label.toLowerCase().includes(filterText)
      );

      if (filtered.length > 0) {
        api.showCompletions(filtered, (item: any) => {
          const currentBuffer = api.getBuffer();
          const currentLine = currentBuffer[cursor.y];
          const newLine = currentLine.slice(0, completionTriggerPos.x) + item.label + currentLine.slice(cursor.x);
          currentBuffer[cursor.y] = newLine;
          api.setBuffer(currentBuffer);
          api.setCursor(completionTriggerPos.x + item.label.length, cursor.y);
          
          originalCompletions = [];
          completionTriggerPos = null;
        });
      } else {
        api.hideCompletions();
      }
    };

    const triggerCompletions = async () => {
      if (api.getMode() !== 'Insert' || !currentPath) return;
      
      const cursor = api.getCursor();
      const bufferLines = api.getBuffer();
      const line = bufferLines[cursor.y] || "";
      
      let triggerX = cursor.x;
      if (line[cursor.x - 1] === '.') {
        triggerX = cursor.x;
      } else {
        while (triggerX > 0 && /[a-zA-Z0-9_$]/.test(line[triggerX - 1])) {
          triggerX--;
        }
      }

      let pos = 0;
      for (let i = 0; i < cursor.y; i++) {
        pos += bufferLines[i].length + 1;
      }
      pos += triggerX;
      
      const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
      const completions = await getCompletions(absolutePath, pos);
      
      if (completions && completions.length > 0) {
        originalCompletions = completions;
        completionTriggerPos = { x: triggerX, y: cursor.y };
        showFilteredCompletions();
      }
    };

    const updateClassifications = async () => {
      if (!currentPath || !currentPath.match(/\\.(ts|tsx|js|jsx)$/)) return;
      const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
      
      try {
        const classifications = await getClassifications(absolutePath);
        if (classifications && classifications.length > 0) {
          classificationsMap.set(absolutePath, classifications);
          api.rerender();
        }
      } catch (e) {
        console.error('Monaco-TS-LSP Classification:', e);
      }
    };

    api.registerCommand('MonacoTSStart', async () => {
      if (await ensureMonaco()) {
        const currentFile = api.getCurrentFilePath();
        if (currentFile && currentFile.match(/\\.(ts|tsx|js|jsx)$/)) {
          currentPath = currentFile;
          const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
          await updateDiagnostics(absolutePath);
          await updateClassifications();
        }
      }
    });

    api.registerCommand('MonacoTSStop', () => {
      isInitialized = false;
      monaco = null;
      lints = [];
      classificationsMap.clear();
      for (const model of modelsMap.values()) {
        model.dispose();
      }
      modelsMap.clear();
      extraLibsSet.clear();
      api.log('Monaco-TS-LSP: Deactivated');
    });

    api.registerCommand('hover', async () => {
      if (!isInitialized || !currentPath) return;
      
      const cursor = api.getCursor();
      const bufferLines = api.getBuffer();
      let pos = 0;
      for (let i = 0; i < cursor.y; i++) {
        pos += bufferLines[i].length + 1;
      }
      pos += cursor.x;
      
      const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
      const hover = await getHover(absolutePath, pos);
      
      if (hover) {
        api.showHover(hover.display, cursor.x, cursor.y);
        setTimeout(() => api.hideHover(), 3000);
      }
    });

    api.registerCommand('MonacoTSHover', () => api.executeCommand('hover'));

    api.registerCommand('definition', async () => {
      if (!isInitialized || !currentPath) return;
      
      const cursor = api.getCursor();
      const bufferLines = api.getBuffer();
      let pos = 0;
      for (let i = 0; i < cursor.y; i++) {
        pos += bufferLines[i].length + 1;
      }
      pos += cursor.x;
      
      const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
      const definition = await getDefinition(absolutePath, pos);
      
      if (definition && definition.uri) {
        api.log(\`Monaco-TS-LSP: Definition at \${definition.uri}\`);
      }
    });

    api.registerCommand('MonacoTSDefinition', () => api.executeCommand('definition'));

    api.registerCommand('showDiagnostics', () => {
      const cursor = api.getCursor();
      const lineLints = getLintsForLine(cursor.y);
      if (lineLints.length > 0) {
        const messages = lineLints.map((l: any) => l.message).join('\\n');
        api.showHover(messages, cursor.x, cursor.y);
        setTimeout(() => api.hideHover(), 5000);
      }
    });

    api.registerCommand('nextDiagnostic', () => {
      const cursor = api.getCursor();
      const buffer = api.getBuffer();
      let currentPos = 0;
      for (let i = 0; i < cursor.y; i++) currentPos += (buffer[i]?.length || 0) + 1;
      currentPos += cursor.x;

      const next = lints.find(l => l.from > currentPos && l.category === 1);
      if (next) {
        let pos = 0;
        for (let i = 0; i < buffer.length; i++) {
          const lineLen = (buffer[i]?.length || 0) + 1;
          if (pos + lineLen > next.from) {
            api.setCursor(next.from - pos, i);
            return;
          }
          pos += lineLen;
        }
      }
    });

    api.registerCommand('prevDiagnostic', () => {
      const cursor = api.getCursor();
      const buffer = api.getBuffer();
      let currentPos = 0;
      for (let i = 0; i < cursor.y; i++) currentPos += (buffer[i]?.length || 0) + 1;
      currentPos += cursor.x;

      const prev = [...lints].reverse().find(l => l.from < currentPos && l.category === 1);
      if (prev) {
        let pos = 0;
        for (let i = 0; i < buffer.length; i++) {
          const lineLen = (buffer[i]?.length || 0) + 1;
          if (pos + lineLen > prev.from) {
            api.setCursor(prev.from - pos, i);
            return;
          }
          pos += lineLen;
        }
      }
    });

    api.registerGutter({
      name: 'monaco-ts-lint',
      width: 2,
      priority: 50,
      render: ({ lineIndex }: any) => {
        const idx = typeof lineIndex === 'function' ? lineIndex() : lineIndex;
        const lineLints = getLintsForLine(idx);
        const hasError = lineLints.some((l: any) => l.category === 1);

        return (
          <tui-text content={hasError ? ' E' : '  '} color="#ff0000" />
        );
      }
    });

    api.on('BufferLoaded', async (data: any) => {
      if (!isInitialized) return;
      
      currentPath = data.path;
      if (currentPath.match(/\\.(ts|tsx|js|jsx)$/)) {
        const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
        await updateDiagnostics(absolutePath);
        await updateClassifications();
      }
    });

    api.on('TextChanged', () => {
      if (!isInitialized || !currentPath) return;
      
      if (debounceTimer) clearTimeout(debounceTimer);
      
      debounceTimer = setTimeout(async () => {
        const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
        await updateDiagnostics(absolutePath);
        await updateClassifications();
        
        if (api.getMode() === 'Insert') {
          const cursor = api.getCursor();
          const bufferLines = api.getBuffer();
          const line = bufferLines[cursor.y];
          if (line && line[cursor.x - 1] === '.') {
            await triggerCompletions();
          } else if (completionTriggerPos) {
            showFilteredCompletions();
          }
        }
      }, 300);
    });

    api.on('KeyDown', async (data: any) => {
      if (!isInitialized) return;
      
      if (data.key === ' ' && data.ctrl) {
        await triggerCompletions();
      }
      if (data.key === 'Escape') {
        originalCompletions = [];
        completionTriggerPos = null;
        api.hideCompletions();
      }
    });

    api.registerLineRenderer({
      name: 'monaco-ts-highlighter',
      priority: 10,
      render: ({ lineIndex, lineContent, leftCol, viewportWidth, visualStart, mode, cursor, currentFilePath }: any) => {
        if (!isInitialized) return null;
        
        const path = typeof currentFilePath === 'function' ? currentFilePath() : currentFilePath;
        if (!path || !path.match(/\\.(ts|tsx|js|jsx)$/)) return null;

        const content = typeof lineContent === 'function' ? lineContent() : lineContent;
        const startCol = typeof leftCol === 'function' ? leftCol() : leftCol;
        const width = typeof viewportWidth === 'function' ? viewportWidth() : viewportWidth;
        const idx = typeof lineIndex === 'function' ? lineIndex() : lineIndex;

        const visualStartVal = typeof visualStart === 'function' ? visualStart() : visualStart;
        const currentMode = typeof mode === 'function' ? mode() : mode;
        const currentCursor = typeof cursor === 'function' ? cursor() : cursor;

        let highlightStart = -1;
        let highlightEnd = -1;

        if (visualStartVal && currentMode === 'Visual') {
          let s = visualStartVal;
          let e = currentCursor;
          if (s.y > e.y || (s.y === e.y && s.x > e.x)) {
            [s, e] = [e, s];
          }

          if (idx >= s.y && idx <= e.y) {
            highlightStart = (idx === s.y) ? s.x : 0;
            highlightEnd = (idx === e.y) ? e.x : content.length;
            highlightEnd = Math.min(content.length, highlightEnd + 1);
          }
        }

        const getRawTokens = () => {
          const absolutePath = path.startsWith('/') ? path : '/' + path;
          const classifications = classificationsMap.get(absolutePath);
          if (!classifications) {
            return [{ x: 0, content: content.slice(startCol, startCol + width), color: '#dcdcaa' }];
          }

          const bufferLines = api.getBuffer();
          let lineStartOffset = 0;
          for (let i = 0; i < idx; i++) {
            lineStartOffset += (bufferLines[i]?.length || 0) + 1;
          }
          const lineEndOffset = lineStartOffset + content.length;

          const relevantSpans = classifications.filter((span: any) => 
            span.start + (span.length || 0) > lineStartOffset && span.start < lineEndOffset
          );

          const tokens = [];
          let currentPos = lineStartOffset;
          const visibleEndCol = startCol + width;

          for (const span of relevantSpans) {
            if (span.start < currentPos) continue;

            if (span.start > currentPos) {
              const gapStart = Math.max(startCol, currentPos - lineStartOffset);
              const gapEnd = Math.min(visibleEndCol, span.start - lineStartOffset);
              if (gapEnd > gapStart) {
                tokens.push({
                  x: gapStart - startCol,
                  content: content.slice(gapStart, gapEnd),
                  color: '#ffffff'
                });
              }
            }

            const spanStart = Math.max(startCol, span.start - lineStartOffset);
            const spanEnd = Math.min(visibleEndCol, span.start + span.length - lineStartOffset);
            if (spanEnd > spanStart) {
              const color = getColorForClassification(span.type);
              tokens.push({
                x: spanStart - startCol,
                content: content.slice(spanStart, spanEnd),
                color
              });
            }
            currentPos = span.start + span.length;
          }

          if (currentPos < lineEndOffset) {
            const gapStart = Math.max(startCol, currentPos - lineStartOffset);
            const gapEnd = Math.min(visibleEndCol, content.length);
            if (gapEnd > gapStart) {
              tokens.push({
                x: gapStart - startCol,
                content: content.slice(gapStart, gapEnd),
                color: '#ffffff'
              });
            }
          }
          return tokens;
        };

        const rawTokens = getRawTokens();
        const finalTokens = [];

        for (const t of rawTokens) {
          const tokenStart = t.x + startCol;
          const tokenEnd = tokenStart + t.content.length;

          if (highlightStart === -1 || tokenEnd <= highlightStart || tokenStart >= highlightEnd) {
            finalTokens.push(t);
          } else {
            const splitPoints = [highlightStart, highlightEnd].filter(p => p > tokenStart && p < tokenEnd);
            let lastP = tokenStart;
            for (const p of [...splitPoints, tokenEnd]) {
              const partContent = t.content.slice(lastP - tokenStart, p - tokenStart);
              if (partContent.length > 0) {
                const isHighlighted = lastP >= highlightStart && lastP < highlightEnd;
                finalTokens.push({
                  x: lastP - startCol,
                  content: partContent,
                  color: t.color,
                  bg_color: isHighlighted ? "#004b72" : undefined
                });
              }
              lastP = p;
            }
          }
        }
        
        return finalTokens.map(t => (
          <tui-text 
            x={t.x} 
            y={0} 
            content={t.content} 
            color={t.color} 
            bg_color={t.bg_color} 
          />
        ));
      }
    });
  }
};
`,lg=`
// @ts-nocheck
export default {
  metadata: {
    name: "ssh-terminal",
    description: "SSH Terminal access for Net-Vim"
  },
  setup: async (api: any) => {
    api.log("SSH Terminal plugin loading...");

    let activeTerm: any = null;
    let currentSSH: any = null;

    const getColor = (color: number | string) => {
      // Basic ANSI colors
      if (typeof color === 'string') return color;
      const colors = [
        '#000000', '#cd0000', '#00cd00', '#cdcd00', '#0000ee', '#cd00cd', '#00cdcd', '#e5e5e5',
        '#7f7f7f', '#ff0000', '#00ff00', '#ffff00', '#5c5cff', '#ff00ff', '#00ffff', '#ffffff'
      ];
      return colors[color] || '#ffffff';
    };

    const updateBuffer = () => {
      if (!activeTerm) return;
      const buffer = [];
      const rows = activeTerm.rows;
      for (let i = 0; i < rows; i++) {
        const line = activeTerm.buffer.active.getLine(i);
        buffer.push(line ? line.translateToString() : "");
      }
      api.setBuffer(buffer);
      const { cursorX, cursorY } = activeTerm.buffer.active;
      api.setCursor(cursorX, cursorY);
    };

    api.on("Resize", (dims: any) => {
       if (activeTerm) {
         activeTerm.resize(dims.width, dims.height);
         updateBuffer();
       }
    });

    api.registerLineRenderer({
      name: 'ssh-terminal-renderer',
      priority: 30,
      render: ({ lineIndex, currentFilePath }: any) => {
        const path = typeof currentFilePath === 'function' ? currentFilePath() : currentFilePath;
        if (!path || !path.startsWith('term://')) return null;

        const idx = typeof lineIndex === 'function' ? lineIndex() : lineIndex;
        if (!activeTerm) return null;

        const line = activeTerm.buffer.active.getLine(idx);
        if (!line) return null;

        const tokens = [];
        let currentText = "";
        let currentColor = null;
        let currentBg = null;

        for (let i = 0; i < line.length; i++) {
          const cell = line.getCell(i);
          if (!cell) continue;

          const char = cell.getChars();
          const fg = cell.getFgColor();
          const bg = cell.getBgColor();
          
          const fgColor = getColor(fg);
          const bgColor = bg === -1 ? undefined : getColor(bg);

          if (fgColor !== currentColor || bgColor !== currentBg) {
            if (currentText) {
              tokens.push({ x: i - currentText.length, content: currentText, color: currentColor, bg_color: currentBg });
            }
            currentText = char || " ";
            currentColor = fgColor;
            currentBg = bgColor;
          } else {
            currentText += char || " ";
          }
        }
        if (currentText) {
          tokens.push({ x: line.length - currentText.length, content: currentText, color: currentColor, bg_color: currentBg });
        }

        return tokens.map(t => (
          <tui-text x={t.x} y={0} content={t.content} color={t.color} bg_color={t.bg_color} />
        ));
      }
    });

    api.registerCommand("ssh", async (args: string[]) => {
      const host = args[0];
      const port = args[1] || "22";
      
      if (!host) {
        api.log("Usage: :ssh <host> [port]");
        return;
      }

      api.log(\`Connecting to \${host}:\${port}...\`);
      
      // Load xterm.js
      if (!activeTerm) {
        try {
          const { Terminal } = await import("https://esm.sh/@xterm/xterm");
          activeTerm = new Terminal({
            cols: api.getViewportWidth ? api.getViewportWidth() : 80,
            rows: api.getViewportHeight ? api.getViewportHeight() : 24
          });
          activeTerm.onTitleChange((title: string) => {
            api.log("Terminal Title: " + title);
          });
        } catch (err) {
          api.log("Failed to load xterm.js: " + err.message);
          return;
        }
      }

      // Read keys
      const fs = api.getFS();
      let privateKey = null;
      try {
        privateKey = await fs.readFile(".ssh/id_rsa");
        if (!privateKey) privateKey = await fs.readFile(".ssh/id_ed25519");
      } catch (e) {}

      // Create a virtual buffer
      const termPath = \`term://\${host}\`;
      api.executeCommand(\`e \${termPath}\`);
      
      // Mock Terminal content for now
      activeTerm.write(\`Connecting to \${host}:\${port}...\\r\\n\`);
      if (privateKey) {
        activeTerm.write("Found SSH key in .ssh/\\r\\n");
      }

      // Update Vim buffer to match xterm.js
      updateBuffer();

      activeTerm.onData((data: string) => {
        // Send data to SSH connection (to be implemented)
        // if (ws && ws.readyState === WebSocket.OPEN) {
        //   ws.send(data);
        // }
      });

      // Dummy output loop to show it's working
      activeTerm.write("\\r\\n\\x1b[32mSSH Terminal Mock\\x1b[0m\\r\\n");
      activeTerm.write("Type characters in \\x1b[1mInsert Mode\\x1b[0m to interact.\\r\\n");
      activeTerm.write("Press \\x1b[1mEscape\\x1b[0m to return to Normal Mode.\\r\\n");
      activeTerm.write("$ ");
      
      updateBuffer();

      let lastMode = api.getMode();

      // Intercept keys
      const keyHandler = (data: any) => {
        const path = api.getCurrentFilePath();
        if (path && path.startsWith('term://')) {
          if (api.getMode() === 'Insert') {
            let termKey = data.key;
            if (termKey === 'Enter') termKey = '\\r';
            else if (termKey === 'Backspace') termKey = '\\x7f';
            else if (termKey === 'Tab') termKey = '\\t';
            else if (termKey === 'ArrowUp') termKey = '\\x1b[A';
            else if (termKey === 'ArrowDown') termKey = '\\x1b[B';
            else if (termKey === 'ArrowRight') termKey = '\\x1b[C';
            else if (termKey === 'ArrowLeft') termKey = '\\x1b[D';
            else if (termKey.length > 1 && !data.ctrl) return; // Ignore other special keys
            
            if (data.ctrl) {
              const code = termKey.toLowerCase().charCodeAt(0) - 96;
              if (code >= 1 && code <= 26) {
                termKey = String.fromCharCode(code);
              }
            }

            activeTerm.write(termKey);
            // We'll update the buffer on the next tick to avoid race conditions with Vim's own insertion
            setTimeout(updateBuffer, 0);
          }
        }
      };

      api.on("KeyDown", keyHandler);
      
      // Setup SSH connection via bridge if available
      const currentFS = api.getFS();
      const bridgeUrl = currentFS.baseUrl || \`http://localhost:8080\`;
      const bridgeKey = currentFS.apiKey;

      try {
        const headers: any = { 'Content-Type': 'application/json' };
        if (bridgeKey) headers['X-Bridge-Key'] = bridgeKey;

        const response = await fetch(\`\${bridgeUrl}/ssh_connect\`, {
          method: 'POST',
          body: JSON.stringify({ host, port, key: privateKey }),
          headers
        });
        
        if (response.ok) {
           const { sessionId } = await response.json();
           api.log(\`SSH session established: \${sessionId}\`);
           
           // Start WebSocket for SSH data
           const wsUrl = bridgeUrl.replace(/^http/, 'ws');
           const ws = new WebSocket(\`\${wsUrl}/ssh_ws?sessionId=\${sessionId}\`);
           ws.onmessage = (msg) => {
             activeTerm.write(msg.data);
             updateBuffer();
           };
           
           activeTerm.onData((data: string) => {
             ws.send(data);
           });
        } else {
           api.log("SSH Bridge connection failed. Running in offline mock mode.");
        }
      } catch (err) {
        api.log("SSH Bridge not found. Running in offline mock mode.");
      }
    });
  }
};
`,Vg=`
// @ts-nocheck
import * as Comlink from "https://esm.sh/comlink@4.4.1";

let ts = null;
let vfs = null;

async function ensureTs() {
  if (!ts) {
    try {
      console.log("TS-LSP Worker: Importing TypeScript...");
      ts = await import("https://esm.sh/typescript@5.7.2");
      console.log("TS-LSP Worker: TypeScript imported. Loading @typescript/vfs...");
      vfs = await import("https://esm.sh/@typescript/vfs@1.6.4?bundle");
      
      console.log("TS-LSP Worker: Fetching standard library types...");
      const libs = [
        "lib.d.ts", 
        "lib.es5.d.ts",
        "lib.es6.d.ts",
        "lib.esnext.d.ts", 
        "lib.dom.d.ts", 
        "lib.dom.iterable.d.ts",
        "lib.es2015.d.ts",
        "lib.es2015.collection.d.ts",
        "lib.es2015.core.d.ts",
        "lib.es2015.generator.d.ts",
        "lib.es2015.iterable.d.ts",
        "lib.es2015.promise.d.ts",
        "lib.es2015.proxy.d.ts",
        "lib.es2015.reflect.d.ts",
        "lib.es2015.symbol.d.ts",
        "lib.es2015.symbol.wellknown.d.ts",
        "lib.es2016.d.ts",
        "lib.es2017.d.ts",
        "lib.es2018.d.ts",
        "lib.es2019.d.ts",
        "lib.es2020.d.ts",
        "lib.es2021.d.ts",
        "lib.es2022.d.ts"
      ];
      await Promise.all(libs.map(async (lib) => {
        try {
          const res = await fetch("https://esm.sh/typescript@5.7.2/lib/" + lib);
          if (res.ok) {
            const text = await res.text();
            fsMap.set("/" + lib, text);
            console.log("TS-LSP Worker: Loaded " + lib);
          }
        } catch (e) {
          console.warn("TS-LSP Worker: Failed to load " + lib, e);
        }
      }));
      
      console.log("TS-LSP Worker: All dependencies loaded");
    } catch (e) {
      console.error("TS-LSP Worker: Import failed!", e);
      throw e;
    }
  }
  return { ts, vfs };
}

const fsMap = new Map();

const worker = {
  env: null,
  async ping() {
    return "pong";
  },
  async initialize() {
    console.log("TS-LSP Worker: Starting initialize...");
    try {
      const { ts: tsInstance, vfs: vfsInstance } = await ensureTs();
      console.log("TS-LSP Worker: TS and VFS loaded", !!tsInstance, !!vfsInstance);
      const system = vfsInstance.createSystem(fsMap);
      const compilerOptions = {
        target: tsInstance.ScriptTarget.ESNext,
        module: tsInstance.ModuleKind.ESNext,
        moduleResolution: tsInstance.ModuleResolutionKind.Bundler,
        jsx: tsInstance.JsxEmit.Preserve,
        jsxImportSource: "solid-js",
        lib: ["esnext", "dom", "dom.iterable"],
        strict: false,
        allowNonTsExtensions: true,
        noLib: false,
        skipLibCheck: true,
      };
      
      const rootFiles = Array.from(fsMap.keys());
      console.log("TS-LSP Worker: Creating environment with root files:", rootFiles);
      this.env = vfsInstance.createVirtualTypeScriptEnvironment(system, rootFiles, tsInstance, compilerOptions);
      console.log("TS-LSP Worker: Environment created");
    } catch (e) {
      console.error("TS-LSP Worker: Initialize failed", e);
      throw e;
    }
  },

  updateFile(path, content) {
    if (!this.env) return;
    if (this.env.getSourceFile(path)) {
      this.env.updateFile(path, content);
    } else {
      this.env.createFile(path, content);
    }
  },

  async getImportedModules(path, content) {
    const { ts } = await ensureTs();
    const info = ts.preProcessFile(content);
    return info.importedFiles.map(f => f.fileName);
  },

  getLints(path) {
    if (!this.env) return [];
    const syntatic = this.env.languageService.getSyntacticDiagnostics(path);
    const semantic = this.env.languageService.getSemanticDiagnostics(path);
    return [...syntatic, ...semantic].map((d) => ({
      from: d.start,
      to: (d.start || 0) + (d.length || 0),
      message: typeof d.messageText === 'string' ? d.messageText : d.messageText.messageText,
      category: d.category
    }));
  },

  getCompletions(path, pos) {
    if (!this.env) return null;
    const info = this.env.languageService.getCompletionsAtPosition(path, pos, {});
    if (!info) return null;
    return info.entries.map((entry) => ({
      label: entry.name,
      kind: entry.kind,
    }));
  },

  getHover(path, pos) {
    if (!this.env) return null;
    const info = this.env.languageService.getQuickInfoAtPosition(path, pos);
    if (!info) return null;
    // @ts-ignore
    const display = ts.displayPartsToString(info.displayParts);
    return {
      display,
      range: { start: info.textSpan.start, length: info.textSpan.length }
    };
  },

  getClassifications(path, start, length) {
    if (!this.env) return null;
    try {
      const syntactic = this.env.languageService.getEncodedSyntacticClassifications(path, { start, length });
      const semantic = this.env.languageService.getEncodedSemanticClassifications(path, { start, length });
      return {
        syntactic: Array.from(syntactic.spans),
        semantic: Array.from(semantic.spans)
      };
    } catch (e) {
      console.error("TS-LSP Worker: getClassifications failed", e);
      return null;
    }
  }
};

Comlink.expose(worker);
`,Gg=`
// @ts-nocheck
export default {
  metadata: {
    name: 'ts-lsp',
    description: 'TypeScript LSP for Net-Vim'
  },
  setup: async (api: any) => {
    try {
      api.log('TS-LSP: Loading Comlink...');
      const Comlink = await import("https://esm.sh/comlink@4.4.1");
      api.log('TS-LSP: Comlink loaded. Loading worker source...');
      
      let effectiveWorkerSource: string | null = null;
      
      // Attempt to load bundled worker source (Vite handles this)
      try {
        // @ts-ignore
        const mod = await import('./ts-lsp-worker.ts?raw');
        effectiveWorkerSource = mod.default;
      } catch (e) {
        // Ignore bundling error if loading dynamically
      }

      if (!effectiveWorkerSource) {
        effectiveWorkerSource = await api.configFs.readFile(".config/net-vim/prelude/ts-lsp-worker.ts");
      }
      
      if (!effectiveWorkerSource) {
        api.log("TS-LSP Error: Could not find worker source (checked bundle and filesystem)");
        return;
      }
      
      const blob = new Blob([effectiveWorkerSource], { type: 'application/javascript' });
      const workerUrl = URL.createObjectURL(blob);
      api.log('TS-LSP: Spawning worker...');
      
      const workerInstance = new Worker(workerUrl, { type: 'module' });
      workerInstance.onerror = (e: any) => api.log('TS-LSP Worker Error: ' + (e.message || 'Check console'));
      
      const worker = Comlink.wrap(workerInstance);
      
      api.log('TS-LSP: Testing connection (ping)...');
      const pong = await worker.ping();
      api.log('TS-LSP: Connection ok: ' + pong);
      
      api.log('TS-LSP: Calling worker.initialize()...');
      await worker.initialize();
      api.log('TS-LSP: Worker initialized successfully');

      let lints: any[] = [];
      let currentPath = '';
      const indexedPackages = new Set<string>();
      const indexedFiles = new Set<string>();
      const failedLookups = new Set<string>();
      const classificationsMap = new Map<string, any>();

      const updateClassifications = async () => {
        if (!currentPath || !(currentPath.endsWith('.ts') || currentPath.endsWith('.tsx'))) return;
        const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
        const buffer = api.getBuffer().join('\\n');
        try {
          const classifications = await worker.getClassifications(absolutePath, 0, buffer.length);
          if (classifications) {
            classificationsMap.set(absolutePath, classifications);
            api.rerender();
          }
        } catch (e) {
          api.log('TS-LSP: Error updating classifications: ' + e.message);
        }
      };

      const getColorForClassification = (type: number) => {
        switch (type) {
          case 1: return '#6a9955'; // comment
          case 3: return '#569cd6'; // keyword
          case 4: return '#b5cea8'; // numericLiteral
          case 6: return '#ce9178'; // stringLiteral
          case 7: return '#d16969'; // regularExpressionLiteral
          case 10: return '#d4d4d4'; // punctuation
          case 11: // className
          case 12: // enumName
          case 13: // interfaceName
          case 14: // moduleName
          case 15: // typeParameterName
          case 16: return '#4ec9b0'; // typeAliasName
          case 2: // identifier
          case 17: // parameterName
          case 22: return '#9cdcfe'; // jsxAttribute
          case 18: return '#608b4e'; // docCommentTagName
          case 19: // jsxOpenTagName
          case 20: // jsxCloseTagName
          case 21: return '#569cd6'; // jsxSelfClosingTagName
          case 24: return '#ce9178'; // jsxAttributeStringLiteralValue
          case 25: return '#b5cea8'; // bigIntLiteral
          default: return '#ffffff';
        }
      };

      // Global semaphore for all indexing tasks
      let activeFetches = 0;
      const MAX_CONCURRENT_FETCHES = 10;
      const waitForSlot = async () => {
        while (activeFetches >= MAX_CONCURRENT_FETCHES) {
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      };

      const pathJoin = (...parts: string[]) => {
        const joined = parts.join('/').split('/');
        const result: string[] = [];
        const isAbsolute = parts[0]?.startsWith('/') || false;
        for (const part of joined) {
          if (part === '..') result.pop();
          else if (part !== '.' && part !== '') result.push(part);
        }
        return (isAbsolute ? '/' : '') + result.join('/');
      };

      const indexFile = async (fullPath: string) => {
        if (indexedFiles.has(fullPath) || failedLookups.has(fullPath)) return;

        const fs = api.getFS();
        
        await waitForSlot();
        activeFetches++;
        let content;
        try {
          content = await fs.readFile(fullPath);
        } finally {
          activeFetches--;
        }

        if (content === null) {
          failedLookups.add(fullPath);
          return;
        }

        indexedFiles.add(fullPath);
        const absolutePath = fullPath.startsWith('/') ? fullPath : '/' + fullPath;
        await worker.updateFile(absolutePath, content);
        
        // Log sparingly
        if (indexedFiles.size % 20 === 0) api.log(\`TS-LSP: Indexed \${indexedFiles.size} files...\`);

        try {
          const imports = await worker.getImportedModules(absolutePath, content);
          const dir = fullPath.split('/').slice(0, -1).join('/');

          const tasks = imports.map(async (imp) => {
            if (imp.startsWith('.')) {
              // Relative import
              const resolvedPath = pathJoin(dir, imp);
              const possiblePaths = [
                resolvedPath,
                resolvedPath + '.d.ts',
                resolvedPath.replace(/\\.js$/, '.d.ts'),
                resolvedPath.replace(/\\.ts$/, '.d.ts'),
                resolvedPath + '/index.d.ts',
                resolvedPath + '.ts',
                resolvedPath + '.tsx'
              ];
              for (const p of possiblePaths) {
                if (failedLookups.has(p)) continue;
                if (indexedFiles.has(p)) break;

                // Try reading directly to check existence
                await waitForSlot();
                activeFetches++;
                let c;
                try {
                  c = await fs.readFile(p);
                } finally {
                  activeFetches--;
                }

                if (c !== null) {
                  await indexFile(p);
                  break;
                } else {
                  failedLookups.add(p);
                }
              }
            } else if (!imp.startsWith('/')) {
              // Package import
              await indexPackageTypes(imp);
            }
          });
          await Promise.all(tasks);
        } catch (e) {}
      };

      const indexPackageTypes = async (pkgName: string) => {
        // Handle sub-packages (e.g., solid-js/web -> solid-js)
        const parts = pkgName.split('/');
        const basePkgName = pkgName.startsWith('@') ? \`\${parts[0]}/\${parts[1]}\` : parts[0];
        
        if (indexedPackages.has(basePkgName)) return;
        indexedPackages.add(basePkgName);

        const fs = api.getFS();
        
        const tryPackage = async (name: string) => {
          try {
            const pkgJsonPath = \`node_modules/\${name}/package.json\`;
            if (failedLookups.has(pkgJsonPath)) return false;

            await waitForSlot();
            activeFetches++;
            let pkgJsonStr;
            try {
              pkgJsonStr = await fs.readFile(pkgJsonPath);
            } finally {
              activeFetches--;
            }

            if (!pkgJsonStr) {
              failedLookups.add(pkgJsonPath);
              return false;
            }
            
            // Critical: Index package.json in the worker for resolution!
            await worker.updateFile('/' + pkgJsonPath, pkgJsonStr);
            
            const pkgJson = JSON.parse(pkgJsonStr);
            let typesPath = pkgJson.types || pkgJson.typings;
            
            if (!typesPath) {
              const possiblePaths = [
                \`node_modules/\${name}/index.d.ts\`,
                \`node_modules/\${name}/dist/index.d.ts\`,
                \`node_modules/\${name}/types.d.ts\`,
              ];
              for (const p of possiblePaths) {
                if (failedLookups.has(p)) continue;
                
                await waitForSlot();
                activeFetches++;
                let content;
                try {
                  content = await fs.readFile(p);
                } finally {
                  activeFetches--;
                }

                if (content !== null) {
                  typesPath = p.replace(\`node_modules/\${name}/\`, '');
                  break;
                } else {
                  failedLookups.add(p);
                }
              }
            }
            
            if (typesPath) {
              const fullTypesPath = \`node_modules/\${name}/\${typesPath}\`;
              await indexFile(fullTypesPath);
              
              // Special case for solid-js to ensure JSX types are loaded
              if (name === 'solid-js') {
                await indexFile('node_modules/solid-js/types/jsx.d.ts');
                // Also index sub-packages that are common
                await indexFile('node_modules/solid-js/web/types/index.d.ts');
              }
              return true;
            }
          } catch (e) {}
          return false;
        };

        if (await tryPackage(basePkgName)) return;
        await tryPackage(\`@types/\${basePkgName}\`);
      };

      const resolveImports = async (fullPath: string, content: string) => {
        try {
          const absolutePath = fullPath.startsWith('/') ? fullPath : '/' + fullPath;
          const imports = await worker.getImportedModules(absolutePath, content);
          const dir = fullPath.split('/').slice(0, -1).join('/');

          const tasks = imports.map(async (imp) => {
            if (imp.startsWith('.')) {
              // Relative import
              const resolvedPath = pathJoin(dir, imp);
              const possiblePaths = [
                resolvedPath,
                resolvedPath + '.d.ts',
                resolvedPath.replace(/\\.js$/, '.d.ts'),
                resolvedPath.replace(/\\.ts$/, '.d.ts'),
                resolvedPath + '/index.d.ts',
                resolvedPath + '.ts',
                resolvedPath + '.tsx'
              ];
              for (const p of possiblePaths) {
                if (failedLookups.has(p)) continue;
                if (indexedFiles.has(p)) break;

                await waitForSlot();
                activeFetches++;
                let c;
                try {
                  c = await api.getFS().readFile(p);
                } finally {
                  activeFetches--;
                }

                if (c !== null) {
                  await indexFile(p);
                  break;
                } else {
                  failedLookups.add(p);
                }
              }
            } else if (!imp.startsWith('/')) {
              // Package import
              await indexPackageTypes(imp);
            }
          });
          await Promise.all(tasks);
        } catch (e) {}
      };

      const updateLints = async () => {
        if (!currentPath) return;
        const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
        lints = await worker.getLints(absolutePath);
        if (lints.length > 0) {
          api.log(\`TS-LSP: Found \${lints.length} lints for \${absolutePath}\`);
        }
      };

      const getLintsForLine = (lineIdx: number) => {
        const buffer = api.getBuffer();
        let lineStart = 0;
        for (let i = 0; i < lineIdx; i++) lineStart += (buffer[i]?.length || 0) + 1;
        const lineEnd = lineStart + (buffer[lineIdx]?.length || 0);
        return lints.filter(l => {
          const lFrom = l.from ?? 0;
          const lTo = l.to ?? lFrom;
          // Check for overlap: [lFrom, lTo] intersects [lineStart, lineEnd]
          return lFrom <= lineEnd && lTo >= lineStart;
        });
      };

      api.registerCommand('showDiagnostics', () => {
        const cursor = api.getCursor();
        const lineLints = getLintsForLine(cursor.y);
        if (lineLints.length > 0) {
          const messages = lineLints.map((l: any) => l.message).join('\\n');
          api.showHover(messages, cursor.x, cursor.y);
          setTimeout(() => api.hideHover(), 5000);
        }
      });

      api.registerCommand('nextDiagnostic', () => {
        const cursor = api.getCursor();
        const buffer = api.getBuffer();
        let currentPos = 0;
        for (let i = 0; i < cursor.y; i++) currentPos += (buffer[i]?.length || 0) + 1;
        currentPos += cursor.x;

        const next = lints.find(l => l.from > currentPos && l.category === 1);
        if (next) {
          let pos = 0;
          for (let i = 0; i < buffer.length; i++) {
            const lineLen = (buffer[i]?.length || 0) + 1;
            if (pos + lineLen > next.from) {
              api.setCursor(next.from - pos, i);
              return;
            }
            pos += lineLen;
          }
        }
      });

      api.registerCommand('prevDiagnostic', () => {
        const cursor = api.getCursor();
        const buffer = api.getBuffer();
        let currentPos = 0;
        for (let i = 0; i < cursor.y; i++) currentPos += (buffer[i]?.length || 0) + 1;
        currentPos += cursor.x;

        const prev = [...lints].reverse().find(l => l.from < currentPos && l.category === 1);
        if (prev) {
          let pos = 0;
          for (let i = 0; i < buffer.length; i++) {
            const lineLen = (buffer[i]?.length || 0) + 1;
            if (pos + lineLen > prev.from) {
              api.setCursor(prev.from - pos, i);
              return;
            }
            pos += lineLen;
          }
        }
      });

      let isSyncing = false;
      const syncFileSystem = async () => {
        if (isSyncing) {
          api.log('TS-LSP: Sync already in progress...');
          return;
        }
        isSyncing = true;
        api.log('TS-LSP: Syncing file system...');
        const fs = api.getFS();
        let count = 0;
        const CONCURRENCY_LIMIT = 5;
        let activeTasks = 0;
        const startTime = Date.now();

        const walk = async (path: string) => {
          // Skip common large/irrelevant directories
          if (path.includes('.git') || path.includes('dist') || path.includes('build') || path.includes('.next') || path.includes('node_modules')) return;
          
          try {
            const entries = await fs.listDirectory(path);
            for (const entry of entries) {
              const isDir = entry.endsWith('/');
              const name = isDir ? entry.slice(0, -1) : entry;
              const fullPath = path ? (path.endsWith('/') ? path + name : path + '/' + name) : name;
              
              if (isDir) {
                await walk(fullPath);
              } else {
                const isTS = fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.d.ts');
                const isJS = fullPath.endsWith('.js') || fullPath.endsWith('.jsx');
                const isConfig = fullPath.endsWith('package.json') || fullPath.endsWith('tsconfig.json');
                
                if (isTS || isJS || isConfig) {
                  while (activeTasks >= CONCURRENCY_LIMIT) {
                    await new Promise(resolve => setTimeout(resolve, 50));
                  }
                  activeTasks++;
                  (async () => {
                    try {
                      const content = await fs.readFile(fullPath);
                      if (content !== null) {
                        const absolutePath = fullPath.startsWith('/') ? fullPath : '/' + fullPath;
                        await worker.updateFile(absolutePath, content);
                        count++;
                        if (count % 50 === 0) api.log(\`TS-LSP: Indexed \${count} files...\`);
                      }
                    } catch (e) {
                    } finally {
                      activeTasks--;
                    }
                  })();
                }
              }
            }
          } catch (e: any) {
            api.log('TS-LSP: Walk error at ' + path + ': ' + e.message);
          }
        };

        try {
          await walk('');
          while (activeTasks > 0) {
            await new Promise(resolve => setTimeout(resolve, 100));
          }
          const duration = ((Date.now() - startTime) / 1000).toFixed(1);
          api.log(\`TS-LSP: Sync complete. Indexed \${count} files in \${duration}s.\`);
        } catch (err: any) {
          api.log('TS-LSP: Sync failed: ' + err.message);
        } finally {
          isSyncing = false;
        }
      };

      // Initial sync and sync on FS change
      syncFileSystem();
      api.on('FSChanged', () => {
        syncFileSystem();
      });

      api.on('BufferLoaded', async (data: any) => {
        currentPath = data.path;
        if (currentPath.endsWith('.ts') || currentPath.endsWith('.tsx')) {
          const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
          await worker.updateFile(absolutePath, data.content);
          await resolveImports(absolutePath, data.content);
          await updateLints();
          await updateClassifications();
        }
      });
      
      api.registerCommand('TSSync', () => {
        syncFileSystem();
      });
      
      let debounceTimer: any = null;
      let originalCompletions: any[] = [];
      let completionTriggerPos: { x: number, y: number } | null = null;

      const showFilteredCompletions = () => {
        if (!completionTriggerPos) return;
        const cursor = api.getCursor();
        if (cursor.y !== completionTriggerPos.y || cursor.x < completionTriggerPos.x) {
          api.hideCompletions();
          originalCompletions = [];
          completionTriggerPos = null;
          return;
        }

        const line = api.getBuffer()[cursor.y];
        const filterText = line.slice(completionTriggerPos.x, cursor.x).toLowerCase();
        
        const filtered = originalCompletions.filter(item => 
          item.label.toLowerCase().includes(filterText)
        );

        if (filtered.length > 0) {
          api.showCompletions(filtered, (item: any) => {
            const currentBuffer = api.getBuffer();
            const currentLine = currentBuffer[cursor.y];
            const newLine = currentLine.slice(0, completionTriggerPos.x) + item.label + currentLine.slice(cursor.x);
            currentBuffer[cursor.y] = newLine;
            api.setBuffer(currentBuffer);
            api.setCursor(completionTriggerPos.x + item.label.length, cursor.y);
            
            originalCompletions = [];
            completionTriggerPos = null;
          });
        } else {
          api.hideCompletions();
        }
      };

      const triggerCompletions = async () => {
        if (api.getMode() !== 'Insert') return;
        const cursor = api.getCursor();
        const bufferLines = api.getBuffer();
        const line = bufferLines[cursor.y] || "";
        
        // Find the start of the word/expression being completed
        let triggerX = cursor.x;
        if (line[cursor.x - 1] === '.') {
          triggerX = cursor.x;
        } else {
          // Backtrack to find the start of the current word
          while (triggerX > 0 && /[a-zA-Z0-9_$]/.test(line[triggerX - 1])) {
            triggerX--;
          }
        }

        let pos = 0;
        for (let i = 0; i < cursor.y; i++) {
          pos += bufferLines[i].length + 1;
        }
        pos += triggerX;
        
        const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
        const completions = await worker.getCompletions(absolutePath, pos);
        if (completions && completions.length > 0) {
          originalCompletions = completions;
          completionTriggerPos = { x: triggerX, y: cursor.y };
          showFilteredCompletions();
        } else {
          api.hideCompletions();
          originalCompletions = [];
          completionTriggerPos = null;
        }
      };

      api.on('KeyDown', async (data: any) => {
        if (data.key === ' ' && data.ctrl) {
          await triggerCompletions();
        }
        if (data.key === 'Escape') {
          originalCompletions = [];
          completionTriggerPos = null;
          api.hideCompletions();
        }
      });

      api.on('TextChanged', async () => {
        if (debounceTimer) clearTimeout(debounceTimer);
        
        debounceTimer = setTimeout(async () => {
          const buffer = api.getBuffer().join('\\n');
          if (currentPath && (currentPath.endsWith('.ts') || currentPath.endsWith('.tsx'))) {
            const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
            await worker.updateFile(absolutePath, buffer);
            await resolveImports(absolutePath, buffer);
            await updateLints();
            await updateClassifications();
            
            if (api.getMode() === 'Insert') {
              const cursor = api.getCursor();
              const bufferLines = api.getBuffer();
              const line = bufferLines[cursor.y];
              if (line && line[cursor.x - 1] === '.') {
                await triggerCompletions();
              } else if (completionTriggerPos) {
                showFilteredCompletions();
              } else {
                api.hideCompletions();
                originalCompletions = [];
                completionTriggerPos = null;
              }
            }
          }
        }, 300);
      });
            api.registerGutter({
        name: 'ts-lint',
        width: 2,
        priority: 50,
        render: ({ lineIndex }: any) => {
          const idx = typeof lineIndex === 'function' ? lineIndex() : lineIndex;
          const lineLints = getLintsForLine(idx);
          const hasError = lineLints.some((l: any) => l.category === 1);

          return (
            <tui-text content={hasError ? ' E' : '  '} color="#ff0000" />
          );
        }
      });

      api.registerCommand('hover', async () => {
        if (!currentPath) return;
        const cursor = api.getCursor();
        const bufferLines = api.getBuffer();
        let pos = 0;
        for (let i = 0; i < cursor.y; i++) {
          pos += bufferLines[i].length + 1;
        }
        pos += cursor.x;
        
        const absolutePath = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
        const hover = await worker.getHover(absolutePath, pos);
        if (hover) {
          api.showHover(hover.display, cursor.x, cursor.y);
          setTimeout(() => api.hideHover(), 3000);
        }
      });

      api.registerLineRenderer({
        name: 'ts-highlighter',
        priority: 10,
        render: ({ lineIndex, lineContent, leftCol, viewportWidth, visualStart, mode, cursor, currentFilePath }: any) => {
          const path = typeof currentFilePath === 'function' ? currentFilePath() : currentFilePath;
          if (!path || !(path.endsWith('.ts') || path.endsWith('.tsx'))) return null;

          const content = typeof lineContent === 'function' ? lineContent() : lineContent;
          const startCol = typeof leftCol === 'function' ? leftCol() : leftCol;
          const width = typeof viewportWidth === 'function' ? viewportWidth() : viewportWidth;
          const idx = typeof lineIndex === 'function' ? lineIndex() : lineIndex;

          const start = typeof visualStart === 'function' ? visualStart() : visualStart;
          const currentMode = typeof mode === 'function' ? mode() : mode;
          const currentCursor = typeof cursor === 'function' ? cursor() : cursor;

          let highlightStart = -1;
          let highlightEnd = -1;

          if (start && currentMode === 'Visual') {
            let s = start;
            let e = currentCursor;
            if (s.y > e.y || (s.y === e.y && s.x > e.x)) {
              [s, e] = [e, s];
            }

            if (idx >= s.y && idx <= e.y) {
              highlightStart = (idx === s.y) ? s.x : 0;
              highlightEnd = (idx === e.y) ? e.x : content.length;
              // Inclusive of cursor character in visual mode
              highlightEnd = Math.min(content.length, highlightEnd + 1);
            }
          }

          const getRawTokens = () => {
            const absolutePath = path.startsWith('/') ? path : '/' + path;
            const classifications = classificationsMap.get(absolutePath);
            if (!classifications) {
              return [{ x: 0, content: content.slice(startCol, startCol + width), color: '#ffffff' }];
            }

            const bufferLines = api.getBuffer();
            let lineStartOffset = 0;
            for (let i = 0; i < idx; i++) {
              lineStartOffset += (bufferLines[i]?.length || 0) + 1;
            }
            const lineEndOffset = lineStartOffset + content.length;

            const relevantSpans: any[] = [];
            const { syntactic, semantic } = classifications;

            const addSpans = (spans: number[], isSemantic: boolean) => {
              if (!spans) return;
              for (let i = 0; i < spans.length; i += 3) {
                const start = spans[i];
                const length = spans[i + 1];
                const type = spans[i + 2];
                if (start + length > lineStartOffset && start < lineEndOffset) {
                  relevantSpans.push({ start, length, type, isSemantic });
                }
              }
            };

            addSpans(syntactic, false);
            addSpans(semantic, true);

            relevantSpans.sort((a, b) => a.start - b.start || b.length - a.length || (a.isSemantic ? -1 : 1));

            const tokens = [];
            let currentPos = lineStartOffset;
            const visibleEndCol = startCol + width;

            for (const span of relevantSpans) {
              if (span.start < currentPos) continue;

              if (span.start > currentPos) {
                const gapStart = Math.max(startCol, currentPos - lineStartOffset);
                const gapEnd = Math.min(visibleEndCol, span.start - lineStartOffset);
                if (gapEnd > gapStart) {
                  tokens.push({
                    x: gapStart - startCol,
                    content: content.slice(gapStart, gapEnd),
                    color: '#ffffff'
                  });
                }
              }

              const spanStart = Math.max(startCol, span.start - lineStartOffset);
              const spanEnd = Math.min(visibleEndCol, span.start + span.length - lineStartOffset);
              if (spanEnd > spanStart) {
                tokens.push({
                  x: spanStart - startCol,
                  content: content.slice(spanStart, spanEnd),
                  color: getColorForClassification(span.type)
                });
              }
              currentPos = span.start + span.length;
            }

            if (currentPos < lineEndOffset) {
              const gapStart = Math.max(startCol, currentPos - lineStartOffset);
              const gapEnd = Math.min(visibleEndCol, content.length);
              if (gapEnd > gapStart) {
                tokens.push({
                  x: gapStart - startCol,
                  content: content.slice(gapStart, gapEnd),
                  color: '#ffffff'
                });
              }
            }
            return tokens;
          };

          const rawTokens = getRawTokens();
          const finalTokens = [];

          for (const t of rawTokens) {
            const tokenStart = t.x + startCol;
            const tokenEnd = tokenStart + t.content.length;

            if (highlightStart === -1 || tokenEnd <= highlightStart || tokenStart >= highlightEnd) {
              finalTokens.push(t);
            } else {
              const splitPoints = [highlightStart, highlightEnd].filter(p => p > tokenStart && p < tokenEnd);
              let lastP = tokenStart;
              for (const p of [...splitPoints, tokenEnd]) {
                const partContent = t.content.slice(lastP - tokenStart, p - tokenStart);
                if (partContent.length > 0) {
                  const isHighlighted = lastP >= highlightStart && lastP < highlightEnd;
                  finalTokens.push({
                    x: lastP - startCol,
                    content: partContent,
                    color: t.color,
                    bg_color: isHighlighted ? "#004b72" : undefined
                  });
                }
                lastP = p;
              }
            }
          }

          return finalTokens.map(t => (
            <tui-text 
              x={t.x} 
              y={0} 
              content={t.content} 
              color={t.color} 
              bg_color={t.bg_color} 
            />
          ));
        }
      });
    } catch (err: any) {
      api.log('TS-LSP Setup Error: ' + err.message);
    }
  }
};
`,Ng=Object.assign({"./prelude/context-menu.tsx":eg,"./prelude/eruda.tsx":og,"./prelude/external-fs.tsx":sg,"./prelude/fuzzy-finder.tsx":ng,"./prelude/hello.tsx":ag,"./prelude/help.md":Dg,"./prelude/index.ts":rg,"./prelude/line-numbers.tsx":cg,"./prelude/markdown-syntax.tsx":wg,"./prelude/monaco-ts-lsp.tsx":hg,"./prelude/ssh-terminal.tsx":lg,"./prelude/ts-lsp-worker.ts":Vg,"./prelude/ts-lsp.tsx":Gg}),eQ=Object.entries(Ng).reduce((A,[Q,g])=>{const I=Q.split("/").pop();return I==="index.ts"||(A[I]=g),A},{}),Object.freeze(Object.defineProperty({__proto__:null,PRELUDE_PLUGINS:eQ},Symbol.toStringTag,{value:"Module"})),kA=".config/net-vim/prelude",CQ=new Map;for(const[A,Q]of Object.entries(eQ))CQ.set(`${kA}/${A}`,Q);const tI={readFile:async A=>CQ.get(A)||null,writeFile:async(A,Q)=>{if(A.startsWith(kA))throw new Error("Cannot write to read-only virtual prelude path");CQ.set(A,Q)},listDirectory:async A=>{const Q=A.endsWith("/")?A.slice(0,-1):A,g=new Set;for(const I of CQ.keys())if(I.startsWith(Q+"/")||Q===""&&!I.includes("/")){const C=(Q===""?I:I.slice(Q.length+1)).split("/");C.length>1?g.add(C[0]+"/"):g.add(C[0])}return Array.from(g).sort()},isDirectory:async A=>{if(A===""||A==="."||A==="./")return!0;const Q=A.endsWith("/")?A.slice(0,-1):A;for(const g of CQ.keys())if(g.startsWith(Q+"/"))return!0;return!1}};let BQ=null;function eI(A){BQ=A}async function pQ(){if(BQ)return BQ;try{const A=await navigator.storage.getDirectory();await A.getDirectoryHandle(".test-access",{create:!0}),await A.removeEntry(".test-access"),BQ=oI,console.log("[FS] Using OPFS")}catch(A){console.warn("[FS] OPFS not available or restricted, falling back to MemoryFS",A),BQ=tI}return BQ}const oI={readFile:sI,writeFile:nI,listDirectory:aI,isDirectory:DI},HA={readFile:async A=>(await pQ()).readFile(A),writeFile:async(A,Q)=>(await pQ()).writeFile(A,Q),listDirectory:async A=>(await pQ()).listDirectory(A),isDirectory:async A=>(await pQ()).isDirectory(A)};async function sI(A){if(A.startsWith(kA+"/")){const Q=A.slice(kA.length+1);return eQ[Q]||null}try{const Q=await navigator.storage.getDirectory(),g=A.split("/").filter(C=>C.length>0);let I=Q;for(let C=0;C<g.length-1;C++)I=await I.getDirectoryHandle(g[C],{create:!1});return await(await(await I.getFileHandle(g[g.length-1])).getFile()).text()}catch{return null}}async function nI(A,Q){if(A.startsWith(kA))throw new Error("Cannot write to read-only virtual prelude path");const g=await navigator.storage.getDirectory(),I=A.split("/").filter(i=>i.length>0);let C=g;for(let i=0;i<I.length-1;i++)C=await C.getDirectoryHandle(I[i],{create:!0});const B=await(await C.getFileHandle(I[I.length-1],{create:!0})).createWritable();await B.write(Q),await B.close()}async function aI(A){const Q=[];if(A===kA||A===kA+"/")return Object.keys(eQ).sort();try{const g=await navigator.storage.getDirectory(),I=A.split("/").filter(B=>B.length>0);let C=g;for(const B of I)C=await C.getDirectoryHandle(B,{create:!1});for await(const[B,i]of C.entries())Q.push(i.kind==="directory"?`${B}/`:B);return(A===".config/net-vim"||A===".config/net-vim/")&&(Q.includes("prelude/")||Q.push("prelude/")),Q.sort()}catch{if(kA.startsWith(A)&&A.length>0){const g=kA.slice(A.length).split("/").filter(I=>I.length>0)[0];if(g)return[`${g}/`]}return[]}}async function DI(A){if(A==="."||A==="./"||A==="")return!0;const Q=A.endsWith("/")?A.slice(0,-1):A;if(Q===kA)return!0;try{const g=await navigator.storage.getDirectory(),I=A.split("/").filter(B=>B.length>0);let C=g;for(let B=0;B<I.length-1;B++)C=await C.getDirectoryHandle(I[B],{create:!1});return await C.getDirectoryHandle(I[I.length-1],{create:!1}),!0}catch{return!!(kA.startsWith(Q)&&Q.length>0)}}Hg=class{constructor(A){u(this,"plugins",new Map),u(this,"pluginStates",new Map),u(this,"getBaseAPI"),this.getBaseAPI=A}async loadPluginFromSource(A,Q){console.log(`[PluginManager] Starting to load plugin: ${A}`);try{const g=this.getBaseAPI().babel;if(!g)throw new Error(`Babel not found while trying to load plugin ${A}. Make sure VimEngine is initialized.`);console.log(`[PluginManager] Transpiling ${A}...`);const I=g.transform(Q,{filename:`${A}.tsx`,presets:[["typescript",{isTSX:!0,allExtensions:!0}]],plugins:[["transform-modules-commonjs",{loose:!0}],["transform-react-jsx",{pragma:"h",pragmaFrag:"Fragment"}]],retainLines:!0}).code;console.log(`[PluginManager] Transpiled ${A} successfully. Running code...`);const C={exports:{}},B=C.exports;new Function("module","exports","require","h","Fragment",I)(C,B,E=>{throw new Error(`Require is not supported in plugins: ${E}`)},ig,II),console.log(`[PluginManager] Ran ${A} successfully. Extracting plugin...`);const i=C.exports.default||C.exports;if(!i||typeof i.setup!="function")throw new Error(`Plugin ${A} does not export a valid 'setup' function.`);return console.log(`[PluginManager] Registering ${A}...`),await this.registerPlugin(A,i),!0}catch(g){return console.error(`[PluginManager] Failed to load plugin ${A}:`,g),!1}}async loadPlugin(A){var Q;const g=((Q=A.metadata)==null?void 0:Q.name)||`plugin-${Math.random().toString(36).slice(2,9)}`;return await this.registerPlugin(g,A),!0}async registerPlugin(A,Q){var g;const I=((g=Q.metadata)==null?void 0:g.name)||A;console.log(`[PluginManager] Registering plugin: ${I}`),this.plugins.set(A,Q),this.pluginStates.set(A,new Map);const C=this.createScopedAPI(A);try{console.log(`[PluginManager] Calling setup for plugin: ${I}`),await Q.setup(C),console.log(`[PluginManager] Plugin "${I}" initialized successfully.`)}catch(B){console.error(`[PluginManager] Error during plugin "${I}" setup:`,B)}}createScopedAPI(A){const Q=this.getBaseAPI(),g=this.pluginStates.get(A);return{...Q,storage:{get:I=>g.get(I),set:(I,C)=>g.set(I,C)},log:(...I)=>{console.log(`[Plugin: ${A}]`,...I)},fs:{readFile:I=>Q.getFS().readFile(I),writeFile:(I,C)=>Q.getFS().writeFile(I,C),listDirectory:I=>Q.getFS().listDirectory(I),isDirectory:I=>Q.getFS().isDirectory(I)},configFs:{readFile:I=>HA.readFile(I),writeFile:(I,C)=>HA.writeFile(I,C)},h:ig}}getLoadedPlugins(){return Array.from(this.plugins.values()).map(A=>A.metadata)}},zQ=class{constructor(A,Q){u(this,"buffer",["Welcome to Net-Vim!","Press i to insert text","Press Esc to return to Normal mode","Type :q to quit"]),u(this,"cursor",{x:0,y:0}),u(this,"visualStart",null),u(this,"topLine",0),u(this,"leftCol",0),u(this,"viewportHeight",22),u(this,"viewportWidth",80),u(this,"mode","Normal"),u(this,"commandText",""),u(this,"commandCursorX",0),u(this,"currentFilePath",null),u(this,"isExplorer",!1),u(this,"explorerPath",""),u(this,"isReadOnly",!1),u(this,"gutters",[]),u(this,"lineRenderers",[]),u(this,"contextMenuItems",[]),u(this,"commands",{}),u(this,"onUpdate"),u(this,"requestFocus"),u(this,"eventListeners",new Map),u(this,"pluginManager"),u(this,"fs",HA),u(this,"leader"," "),u(this,"pendingSequence",""),u(this,"isInitialized",!1),u(this,"completionItems",[]),u(this,"selectedCompletionIndex",0),u(this,"onCompletionSelect",null),u(this,"hoverText",null),u(this,"hoverPos",{x:0,y:0}),u(this,"hoverScrollOffset",0),u(this,"statusMessage",null),u(this,"messageTimeout",null),u(this,"wrap",!0),u(this,"lineEnding","LF"),u(this,"pickerActive",!1),u(this,"pickerQuery",""),u(this,"pickerItems",[]),u(this,"pickerSelectedIndex",0),u(this,"pickerPlaceholder","Search..."),u(this,"pickerLoading",!1),u(this,"pickerOptions",null),u(this,"pickerDebounceTimeout",null),u(this,"lastSearchPattern",""),u(this,"lastSearchForward",!0),u(this,"babelModule",null),this.onUpdate=A,this.requestFocus=Q,this.registerBuiltinCommands(),this.pluginManager=new Hg(()=>this.getAPI())}async init(){if(!this.isInitialized){try{this.babelModule=await bI(()=>import("https://esm.sh/@babel/standalone"),[],import.meta.url).then(async A=>(await A.__tla,A)),console.log("[VimEngine] Babel Standalone loaded")}catch(A){console.error("[VimEngine] Failed to load Babel Standalone:",A)}this.buffer.length===4&&this.buffer[0]==="Welcome to Net-Vim!"&&await this.openFile(kA+"/help.md"),this.isInitialized=!0}}setUpdateCallback(A){this.onUpdate=A,this.onUpdate()}setRequestFocus(A){this.requestFocus=A}registerBuiltinCommands(){this.commands.set=A=>{const Q=A[0];Q==="wrap"?this.wrap=!0:Q==="nowrap"?this.wrap=!1:Q==="wrap!"&&(this.wrap=!this.wrap),this.onUpdate()},this.commands.q=()=>{console.log("Quitting...")},this.commands.w=async A=>{if(this.isExplorer){console.error("Cannot save a directory buffer");return}if(this.isReadOnly){console.error("Cannot save a read-only buffer");return}const Q=A[0]||this.currentFilePath;if(!Q){console.error("No file name");return}try{const g=this.lineEnding==="CRLF"?`\r
`:`
`,I=this.buffer.join(g);await this.fs.writeFile(Q,I),this.currentFilePath=Q,console.log(`"${Q}" saved (${this.lineEnding})`),this.trigger("FileChanged",{path:Q,content:I}),this.onUpdate()}catch(g){console.error("Failed to save file:",g)}},this.commands.e=async A=>{let Q=A[0]||".";Q==="."&&(Q="");try{await this.fs.isDirectory(Q)?await this.openDirectory(Q):await this.openFile(Q)}catch(g){console.error("Failed to open:",g)}},this.commands.help=async()=>{await this.openFile(kA+"/help.md")}}async openDirectory(A){const Q=await this.fs.listDirectory(A);this.buffer=[`" Explorer: ${A||"/"}`,'" ============================================================================',"../",...Q.sort((g,I)=>g.endsWith("/")&&!I.endsWith("/")?-1:!g.endsWith("/")&&I.endsWith("/")?1:g.localeCompare(I))],this.isExplorer=!0,this.explorerPath=A,this.currentFilePath=null,this.cursor={x:0,y:2},this.onUpdate()}async openFile(A){const Q=await this.fs.readFile(A);Q!==null?(this.lineEnding=Q.includes(`\r
`)?"CRLF":"LF",this.buffer=Q.replace(/\r\n/g,`
`).split(`
`),this.currentFilePath=A,this.isExplorer=!1,this.isReadOnly=A.startsWith(kA),this.cursor={x:0,y:0},this.trigger("TextChanged"),this.trigger("BufferLoaded",{path:A,content:Q}),this.onUpdate(),console.log(`Opened "${A}"${this.isReadOnly?" [ReadOnly]":""} (${this.lineEnding})`)):(this.buffer=[""],this.lineEnding="LF",this.currentFilePath=A,this.isExplorer=!1,this.isReadOnly=!1,this.cursor={x:0,y:0},this.onUpdate(),console.log(`[New File] "${A}"`))}getAPI(){return{registerCommand:(A,Q)=>{this.commands[A]=Q},getBuffer:()=>[...this.buffer],setBuffer:A=>{this.buffer=[...A],this.trigger("TextChanged"),this.onUpdate()},requestFocus:()=>this.requestFocus(),getCursor:()=>({...this.cursor}),setCursor:(A,Q)=>{this.setCursor(A,Q)},getVisualStart:()=>this.visualStart?{...this.visualStart}:null,getMode:()=>this.mode,getViewportWidth:()=>this.viewportWidth,getViewportHeight:()=>this.viewportHeight,getCurrentFilePath:()=>this.currentFilePath,on:(A,Q)=>{this.eventListeners.has(A)||this.eventListeners.set(A,[]),this.eventListeners.get(A).push(Q)},executeCommand:A=>this.executeCommand(A),loadPluginFromSource:(A,Q)=>this.loadPluginFromSource(A,Q),loadPlugin:A=>this.loadPlugin(A),getLoadedPlugins:()=>this.pluginManager.getLoadedPlugins(),registerGutter:A=>{console.log(`[VimEngine] Registering gutter: ${A.name}`,A),this.gutters.push(A),this.gutters.sort((Q,g)=>(g.priority||0)-(Q.priority||0)),this.onUpdate()},registerLineRenderer:A=>{console.log(`[VimEngine] Registering line renderer: ${A.name}`),this.lineRenderers.push(A),this.lineRenderers.sort((Q,g)=>(g.priority||0)-(Q.priority||0)),this.onUpdate()},showCompletions:(A,Q)=>{this.completionItems=A,this.selectedCompletionIndex=0,this.onCompletionSelect=Q,this.onUpdate()},hideCompletions:()=>{this.completionItems=[],this.onCompletionSelect=null,this.onUpdate()},showHover:(A,Q,g)=>{this.hoverText=A,this.hoverPos={x:Q,y:g},this.hoverScrollOffset=0,this.onUpdate()},hideHover:()=>{this.hoverText=null,this.hoverScrollOffset=0,this.onUpdate()},registerContextMenuItem:A=>{this.contextMenuItems.push(A),this.contextMenuItems.sort((Q,g)=>(g.priority||0)-(Q.priority||0)),this.onUpdate()},insertText:A=>this.insertText(A),rerender:()=>this.onUpdate(),showPicker:A=>{this.pickerActive=!0,this.pickerOptions=A,this.pickerQuery="",this.pickerSelectedIndex=0,this.pickerPlaceholder=A.placeholder||"Search...",this.pickerItems=[],this.updatePickerResults(),this.onUpdate()},hidePicker:()=>{this.pickerActive=!1,this.pickerOptions=null,this.onUpdate()},setFS:A=>{this.fs=A,this.trigger("FSChanged"),this.onUpdate()},getFS:()=>this.fs,resetFS:()=>{this.fs=HA,this.trigger("FSChanged"),this.onUpdate()},babel:this.babelModule}}async updatePickerResults(){if(this.pickerOptions){if(Array.isArray(this.pickerOptions.items)){const A=this.pickerQuery.toLowerCase();this.pickerItems=this.pickerOptions.items.filter(Q=>Q.label.toLowerCase().includes(A)||Q.detail&&Q.detail.toLowerCase().includes(A)),this.pickerSelectedIndex=Math.min(this.pickerSelectedIndex,Math.max(0,this.pickerItems.length-1)),this.onUpdate()}else if(typeof this.pickerOptions.items=="function"){this.pickerLoading=!0,this.onUpdate();try{const A=await this.pickerOptions.items(this.pickerQuery);this.pickerItems=A,this.pickerSelectedIndex=Math.min(this.pickerSelectedIndex,Math.max(0,this.pickerItems.length-1))}catch(A){console.error("Picker error:",A)}finally{this.pickerLoading=!1,this.onUpdate()}}}}insertText(A){if(this.isReadOnly&&this.mode!=="Command")return;if(this.mode==="Command"){const B=this.commandText.slice(0,this.commandCursorX),i=this.commandText.slice(this.commandCursorX),E=A.replace(/\r?\n/g,"");this.commandText=B+E+i,this.commandCursorX+=E.length,this.onUpdate();return}const Q=A.split(/\r?\n/),g=this.buffer[this.cursor.y]||"",I=g.slice(0,this.cursor.x),C=g.slice(this.cursor.x);if(Q.length===1)this.buffer[this.cursor.y]=I+Q[0]+C,this.setCursor(this.cursor.x+Q[0].length,this.cursor.y);else{this.buffer[this.cursor.y]=I+Q[0];const B=Q.slice(1,-1),i=Q[Q.length-1]+C,E=[this.buffer[this.cursor.y],...B,i];this.buffer.splice(this.cursor.y,1,...E),this.setCursor(Q[Q.length-1].length,this.cursor.y+Q.length-1)}this.trigger("TextChanged"),this.onUpdate()}hideCompletions(){this.completionItems=[],this.onCompletionSelect=null,this.onUpdate()}setViewportHeight(A){this.viewportHeight=A,this.scrollCursorIntoView(),this.trigger("Resize",{width:this.viewportWidth,height:this.viewportHeight}),this.onUpdate()}setViewportWidth(A){this.viewportWidth=A,this.scrollCursorIntoView(),this.trigger("Resize",{width:this.viewportWidth,height:this.viewportHeight}),this.onUpdate()}scrollCursorIntoView(){var A,Q;if(this.wrap)if(this.cursor.y<this.topLine)this.topLine=this.cursor.y;else{let g=0;for(let I=this.topLine;I<this.cursor.y;I++)g+=Math.max(1,Math.ceil((((A=this.buffer[I])==null?void 0:A.length)||0)/this.viewportWidth));if(g+=Math.floor(this.cursor.x/this.viewportWidth),g>=this.viewportHeight)for(;g>=this.viewportHeight&&this.topLine<this.cursor.y;)g-=Math.max(1,Math.ceil((((Q=this.buffer[this.topLine])==null?void 0:Q.length)||0)/this.viewportWidth)),this.topLine++}else this.cursor.y<this.topLine?this.topLine=this.cursor.y:this.cursor.y>=this.topLine+this.viewportHeight&&(this.topLine=this.cursor.y-this.viewportHeight+1);this.wrap?this.leftCol=0:this.cursor.x<this.leftCol?this.leftCol=this.cursor.x:this.cursor.x>=this.leftCol+this.viewportWidth&&(this.leftCol=this.cursor.x-this.viewportWidth+1)}trigger(A,...Q){var g;(g=this.eventListeners.get(A))==null||g.forEach(I=>I(...Q))}async loadPluginFromSource(A,Q){return this.pluginManager.loadPluginFromSource(A,Q)}async loadPlugin(A){return this.pluginManager.loadPlugin(A)}setCursor(A,Q){var g;this.cursor.y=Math.max(0,Math.min(this.buffer.length-1,Q));const I=((g=this.buffer[this.cursor.y])==null?void 0:g.length)||0;this.cursor.x=Math.max(0,Math.min(I,A)),this.scrollCursorIntoView(),this.trigger("CursorMoved",this.cursor),this.onUpdate()}getState(){return{buffer:[...this.buffer],cursor:{...this.cursor},visualStart:this.visualStart?{...this.visualStart}:null,topLine:this.topLine,leftCol:this.leftCol,viewportHeight:this.viewportHeight,viewportWidth:this.viewportWidth,mode:this.mode,commandText:this.commandText,commandCursorX:this.commandCursorX,currentFilePath:this.currentFilePath,isExplorer:this.isExplorer,explorerPath:this.explorerPath,isReadOnly:this.isReadOnly,plugins:this.pluginManager.getLoadedPlugins(),gutters:this.gutters,lineRenderers:this.lineRenderers,contextMenuItems:this.contextMenuItems,completionItems:this.completionItems,selectedCompletionIndex:this.selectedCompletionIndex,hoverText:this.hoverText,hoverPos:this.hoverPos,hoverScrollOffset:this.hoverScrollOffset,statusMessage:this.statusMessage,wrap:this.wrap,lineEnding:this.lineEnding,picker:this.pickerActive?{active:!0,query:this.pickerQuery,items:this.pickerItems,selectedIndex:this.pickerSelectedIndex,placeholder:this.pickerPlaceholder,loading:this.pickerLoading}:null}}showMessage(A){this.statusMessage=A,this.messageTimeout&&clearTimeout(this.messageTimeout),this.messageTimeout=setTimeout(()=>{this.statusMessage=null,this.onUpdate()},3e3),this.onUpdate()}handleKey(A,Q=!1){if(this.trigger("KeyDown",{key:A,ctrl:Q}),this.pickerActive){this.handlePickerKey(A,Q);return}if(this.completionItems.length>0){if(A==="ArrowDown"||A==="n"&&Q){this.selectedCompletionIndex=(this.selectedCompletionIndex+1)%this.completionItems.length,this.onUpdate();return}if(A==="ArrowUp"||A==="p"&&Q){this.selectedCompletionIndex=(this.selectedCompletionIndex-1+this.completionItems.length)%this.completionItems.length,this.onUpdate();return}if(A==="Enter"||A==="Tab"){const I=this.completionItems[this.selectedCompletionIndex];this.onCompletionSelect&&this.onCompletionSelect(I),this.hideCompletions();return}if(A==="Escape"){this.hideCompletions();return}}if(this.isExplorer&&this.mode==="Normal"&&A==="Enter"){this.handleExplorerSelect(),this.onUpdate();return}const g=this.mode;this.mode==="Normal"?this.handleNormalMode(A,Q):this.mode==="Insert"?this.handleInsertMode(A,Q):this.mode==="Command"?this.handleCommandMode(A,Q):this.mode==="Search"?this.handleSearchMode(A,Q):this.mode==="Visual"&&this.handleVisualMode(A,Q),this.mode!==g&&this.trigger("ModeChanged",{from:g,to:this.mode}),(this.mode==="Insert"||this.mode==="Normal"&&A==="x")&&this.trigger("TextChanged"),this.onUpdate()}handlePickerKey(A,Q){var g,I;if(A==="Escape"||A==="c"&&Q){(g=this.pickerOptions)!=null&&g.onCancel&&this.pickerOptions.onCancel(),this.pickerActive=!1,this.onUpdate();return}if(A==="ArrowDown"||A==="n"&&Q||A==="j"&&Q){this.pickerSelectedIndex=(this.pickerSelectedIndex+1)%Math.max(1,this.pickerItems.length),this.onUpdate();return}if(A==="ArrowUp"||A==="p"&&Q||A==="k"&&Q){this.pickerSelectedIndex=(this.pickerSelectedIndex-1+this.pickerItems.length)%Math.max(1,this.pickerItems.length),this.onUpdate();return}if(A==="Enter"){const C=this.pickerItems[this.pickerSelectedIndex];C&&((I=this.pickerOptions)!=null&&I.onSelect)&&this.pickerOptions.onSelect(C),this.pickerActive=!1,this.onUpdate();return}if(A==="Backspace"){this.pickerQuery=this.pickerQuery.slice(0,-1),this.debouncedPickerUpdate(),this.onUpdate();return}if(A.length===1&&!Q){this.pickerQuery+=A,this.debouncedPickerUpdate(),this.onUpdate();return}}debouncedPickerUpdate(){this.pickerDebounceTimeout&&clearTimeout(this.pickerDebounceTimeout),this.pickerDebounceTimeout=setTimeout(()=>{this.updatePickerResults()},150)}async handleExplorerSelect(){const A=this.buffer[this.cursor.y];if(!A||A.startsWith('"'))return;let Q=A.trim(),g="";if(Q==="../"){const C=this.explorerPath.split("/").filter(B=>B.length>0);C.pop(),g=C.join("/")}else g=this.explorerPath?`${this.explorerPath}/${Q}`:Q;const I=g.endsWith("/")?g.slice(0,-1):g;await this.fs.isDirectory(I)?await this.openDirectory(I):await this.openFile(I)}moveCursor(A){var Q,g;switch(A){case"left":this.cursor.x=Math.max(0,this.cursor.x-1);break;case"down":this.cursor.y=Math.min(this.buffer.length-1,this.cursor.y+1);break;case"up":this.cursor.y=Math.max(0,this.cursor.y-1);break;case"right":const C=((Q=this.buffer[this.cursor.y])==null?void 0:Q.length)||0;this.cursor.x=Math.min(C,this.cursor.x+1);break}const I=((g=this.buffer[this.cursor.y])==null?void 0:g.length)||0;this.cursor.x>I&&(this.cursor.x=Math.max(0,I)),this.scrollCursorIntoView()}async putFromClipboard(A=!0){try{const Q=await navigator.clipboard.readText();if(!Q)return;if(this.mode==="Visual")this.deleteSelection(),this.insertText(Q),this.mode="Normal",this.visualStart=null;else if(Q.endsWith(`
`)){const g=A?this.cursor.y+1:this.cursor.y,I=Q.split(`
`);I[I.length-1]===""&&I.pop(),this.buffer.splice(g,0,...I),this.setCursor(0,g)}else{const g=this.buffer[this.cursor.y]||"",I=A?Math.min(g.length,this.cursor.x+1):this.cursor.x,C=Q.split(`
`),B=g.slice(0,I),i=g.slice(I);if(C.length===1)this.buffer[this.cursor.y]=B+C[0]+i,this.setCursor(I+C[0].length-1,this.cursor.y);else{this.buffer[this.cursor.y]=B+C[0];const E=C.slice(1,-1),a=C[C.length-1]+i,F=[this.buffer[this.cursor.y],...E,a];this.buffer.splice(this.cursor.y,1,...F),this.setCursor(C[C.length-1].length-1,this.cursor.y+C.length-1)}}this.trigger("TextChanged"),this.onUpdate()}catch(Q){this.showMessage("Failed to read from clipboard"),console.error(Q)}}handleNormalMode(A,Q){var g;let I=this.pendingSequence;if(Q?I+="Ctrl-"+A:A===this.leader?I+="leader":I+=A,I==="Ctrl-w"){this.pendingSequence="Ctrl-w";return}if(I==="Ctrl-wd"){this.pendingSequence="",this.executeCommand("showDiagnostics");return}if(I==="leader"){this.pendingSequence="leader";return}if(I==="leaderd"){this.pendingSequence="",this.executeCommand("showDiagnostics");return}if(I==="leadere"){this.pendingSequence="",this.executeCommand("hover");return}if(I==="leaderf"){this.pendingSequence="leaderf";return}if(I==="leaderff"){this.pendingSequence="",this.executeCommand("fuzzyFiles");return}if(I==="leaderfg"){this.pendingSequence="",this.executeCommand("liveGrep");return}if(I==="["){this.pendingSequence="[";return}if(I==="[d"){this.pendingSequence="",this.executeCommand("prevDiagnostic");return}if(I==="]"){this.pendingSequence="]";return}if(I==="]d"){this.pendingSequence="",this.executeCommand("nextDiagnostic");return}if(I==="y"){this.pendingSequence="y";return}if(I==="yy"){this.pendingSequence="";const C=this.buffer[this.cursor.y]||"";this.yankToClipboard(C+`
`);return}if(I==="d"){this.pendingSequence="d";return}if(I==="dd"){this.pendingSequence="";const C=this.buffer[this.cursor.y]||"";this.yankToClipboard(C+`
`),this.buffer.splice(this.cursor.y,1),this.buffer.length===0&&(this.buffer=[""]),this.setCursor(this.cursor.x,this.cursor.y),this.trigger("TextChanged");return}if(I===">"){this.pendingSequence=">";return}if(I===">>"){this.pendingSequence="",this.indentLine(this.cursor.y),this.trigger("TextChanged");return}if(I==="<"){this.pendingSequence="<";return}if(I==="<<"){this.pendingSequence="",this.deindentLine(this.cursor.y),this.trigger("TextChanged");return}if(this.pendingSequence!==""){this.pendingSequence="",this.handleNormalMode(A,Q);return}if(this.hoverText&&Q){if(A==="d"||A==="e"){this.hoverScrollOffset+=A==="d"?5:1,this.onUpdate();return}if(A==="u"||A==="y"){this.hoverScrollOffset=Math.max(0,this.hoverScrollOffset-(A==="u"?5:1)),this.onUpdate();return}}if(Q){switch(A){case"d":const C=Math.floor(this.viewportHeight/2);this.setCursor(this.cursor.x,this.cursor.y+C);break;case"u":const B=Math.floor(this.viewportHeight/2);this.setCursor(this.cursor.x,this.cursor.y-B);break;case"e":this.topLine<this.buffer.length-1&&(this.topLine++,this.cursor.y<this.topLine&&this.setCursor(this.cursor.x,this.topLine));break;case"y":this.topLine>0&&(this.topLine--,this.cursor.y>=this.topLine+this.viewportHeight&&this.setCursor(this.cursor.x,this.topLine+this.viewportHeight-1));break}return}switch(A){case"i":this.mode="Insert";break;case"v":this.mode==="Visual"?(this.mode="Normal",this.visualStart=null):(this.mode="Visual",this.visualStart={...this.cursor});break;case":":this.mode="Command",this.commandText="",this.commandCursorX=0;break;case"/":this.mode="Search",this.commandText="",this.commandCursorX=0,this.lastSearchForward=!0;break;case"?":this.mode="Search",this.commandText="",this.commandCursorX=0,this.lastSearchForward=!1;break;case"n":this.repeatSearch(this.lastSearchForward);break;case"N":this.repeatSearch(!this.lastSearchForward);break;case"ArrowLeft":case"h":this.moveCursor("left");break;case"ArrowDown":case"j":this.moveCursor("down");break;case"ArrowUp":case"k":this.moveCursor("up");break;case"ArrowRight":case"l":this.moveCursor("right");break;case"Home":this.setCursor(0,this.cursor.y);break;case"End":this.setCursor(((g=this.buffer[this.cursor.y])==null?void 0:g.length)||0,this.cursor.y);break;case"PageUp":this.setCursor(this.cursor.x,this.cursor.y-this.viewportHeight);break;case"PageDown":this.setCursor(this.cursor.x,this.cursor.y+this.viewportHeight);break;case"p":this.putFromClipboard(!0);break;case"P":this.putFromClipboard(!1);break;case"x":const C=this.buffer[this.cursor.y];C&&C.length>0&&(this.buffer[this.cursor.y]=C.slice(0,this.cursor.x)+C.slice(this.cursor.x+1));break}}handleInsertMode(A,Q){var g,I;if(A==="Escape"){this.mode="Normal";return}if(A==="ArrowLeft"){this.moveCursor("left");return}if(A==="ArrowDown"){this.moveCursor("down");return}if(A==="ArrowUp"){this.moveCursor("up");return}if(A==="ArrowRight"){this.moveCursor("right");return}if(A==="Home"){this.setCursor(0,this.cursor.y);return}if(A==="End"){this.setCursor(((g=this.buffer[this.cursor.y])==null?void 0:g.length)||0,this.cursor.y);return}if(A==="PageUp"){this.setCursor(this.cursor.x,this.cursor.y-this.viewportHeight);return}if(A==="PageDown"){this.setCursor(this.cursor.x,this.cursor.y+this.viewportHeight);return}if(A==="Backspace"){if(this.cursor.x>0){const C=this.buffer[this.cursor.y];this.buffer[this.cursor.y]=C.slice(0,this.cursor.x-1)+C.slice(this.cursor.x),this.setCursor(this.cursor.x-1,this.cursor.y)}else if(this.cursor.y>0){const C=this.buffer[this.cursor.y-1],B=this.buffer[this.cursor.y],i=C.length;this.buffer[this.cursor.y-1]=C+B,this.buffer.splice(this.cursor.y,1),this.setCursor(i,this.cursor.y-1)}}else if(A==="Enter"){const C=this.buffer[this.cursor.y],B=C.slice(0,this.cursor.x),i=C.slice(this.cursor.x),E=((I=B.match(/^\s*/))==null?void 0:I[0])??"";this.buffer[this.cursor.y]=B,this.buffer.splice(this.cursor.y+1,0,E+i),this.setCursor(E.length,this.cursor.y+1)}else if(A.length===1&&!Q){const C=this.buffer[this.cursor.y]||"";this.buffer[this.cursor.y]=C.slice(0,this.cursor.x)+A+C.slice(this.cursor.x),this.setCursor(this.cursor.x+1,this.cursor.y)}}handleVisualMode(A,Q){var g;if(A==="Escape"){this.mode="Normal",this.visualStart=null;return}switch(A){case"ArrowLeft":case"h":this.moveCursor("left");break;case"ArrowDown":case"j":this.moveCursor("down");break;case"ArrowUp":case"k":this.moveCursor("up");break;case"ArrowRight":case"l":this.moveCursor("right");break;case"Home":this.setCursor(0,this.cursor.y);break;case"End":this.setCursor(((g=this.buffer[this.cursor.y])==null?void 0:g.length)||0,this.cursor.y);break;case"PageUp":this.setCursor(this.cursor.x,this.cursor.y-this.viewportHeight);break;case"PageDown":this.setCursor(this.cursor.x,this.cursor.y+this.viewportHeight);break;case"v":this.mode="Normal",this.visualStart=null;break;case"p":this.putFromClipboard(!0);break;case"d":case"x":const I=this.getSelectionText();this.yankToClipboard(I),this.deleteSelection(),this.mode="Normal",this.visualStart=null;break;case"y":const C=this.getSelectionText();this.yankToClipboard(C),this.mode="Normal",this.visualStart=null;break;case">":this.indentSelection(),this.mode="Normal",this.visualStart=null;break;case"<":this.deindentSelection(),this.mode="Normal",this.visualStart=null;break}}indentLine(A){if(A<0||A>=this.buffer.length)return;this.buffer[A]="  "+this.buffer[A];const Q=this.buffer[A].search(/\S/);this.setCursor(Q!==-1?Q:0,A)}deindentLine(A){if(A<0||A>=this.buffer.length)return;const Q=this.buffer[A];let g=0;Q.startsWith("  ")?g=2:Q.startsWith(" ")&&(g=1),g>0&&(this.buffer[A]=Q.slice(g));const I=this.buffer[A].search(/\S/);this.setCursor(I!==-1?I:0,A)}indentSelection(){if(!this.visualStart)return;let A=Math.min(this.visualStart.y,this.cursor.y),Q=Math.max(this.visualStart.y,this.cursor.y);for(let I=A;I<=Q;I++)I<0||I>=this.buffer.length||(this.buffer[I]="  "+this.buffer[I]);const g=this.buffer[A].search(/\S/);this.setCursor(g!==-1?g:0,A),this.trigger("TextChanged")}deindentSelection(){if(!this.visualStart)return;let A=Math.min(this.visualStart.y,this.cursor.y),Q=Math.max(this.visualStart.y,this.cursor.y);for(let I=A;I<=Q;I++){if(I<0||I>=this.buffer.length)continue;const C=this.buffer[I];let B=0;C.startsWith("  ")?B=2:C.startsWith(" ")&&(B=1),B>0&&(this.buffer[I]=C.slice(B))}const g=this.buffer[A].search(/\S/);this.setCursor(g!==-1?g:0,A),this.trigger("TextChanged")}async yankToClipboard(A){try{await navigator.clipboard.writeText(A);const Q=A.split(`
`).length-(A.endsWith(`
`)?1:0);Q>1?this.showMessage(`${Q} lines yanked`):this.showMessage(`Yanked ${A.length} characters`)}catch(Q){this.showMessage("Failed to copy to clipboard"),console.error("Failed to copy to clipboard:",Q)}}getSelectionText(){if(!this.visualStart)return"";let A=this.visualStart,Q=this.cursor;if((A.y>Q.y||A.y===Q.y&&A.x>Q.x)&&([A,Q]=[Q,A]),A.y===Q.y)return this.buffer[A.y].slice(A.x,Q.x+1);{const g=[];g.push(this.buffer[A.y].slice(A.x));for(let I=A.y+1;I<Q.y;I++)g.push(this.buffer[I]);return g.push(this.buffer[Q.y].slice(0,Q.x+1)),g.join(`
`)}}deleteSelection(){if(!this.visualStart)return;let A=this.visualStart,Q=this.cursor;if((A.y>Q.y||A.y===Q.y&&A.x>Q.x)&&([A,Q]=[Q,A]),A.y===Q.y){const g=this.buffer[A.y];this.buffer[A.y]=g.slice(0,A.x)+g.slice(Q.x+1),this.setCursor(A.x,A.y)}else{const g=this.buffer[A.y],I=this.buffer[Q.y];this.buffer[A.y]=g.slice(0,A.x)+I.slice(Q.x+1),this.buffer.splice(A.y+1,Q.y-A.y),this.setCursor(A.x,A.y)}this.trigger("TextChanged")}handleCommandMode(A,Q){if(A==="Escape")this.mode="Normal",this.commandText="",this.commandCursorX=0;else if(A==="Enter")this.executeCommand(this.commandText),this.mode="Normal",this.commandText="",this.commandCursorX=0;else if(A==="Backspace")if(this.commandCursorX>0){const g=this.commandText.slice(0,this.commandCursorX-1),I=this.commandText.slice(this.commandCursorX);this.commandText=g+I,this.commandCursorX--}else this.commandText.length===0&&(this.mode="Normal");else if(A==="Delete"){if(this.commandCursorX<this.commandText.length){const g=this.commandText.slice(0,this.commandCursorX),I=this.commandText.slice(this.commandCursorX+1);this.commandText=g+I}}else if(A==="ArrowLeft")this.commandCursorX=Math.max(0,this.commandCursorX-1);else if(A==="ArrowRight")this.commandCursorX=Math.min(this.commandText.length,this.commandCursorX+1);else if(A==="Home")this.commandCursorX=0;else if(A==="End")this.commandCursorX=this.commandText.length;else if(A.length===1&&!Q){const g=this.commandText.slice(0,this.commandCursorX),I=this.commandText.slice(this.commandCursorX);this.commandText=g+A+I,this.commandCursorX++}}executeCommand(A){const[Q,...g]=A.trim().split(/\s+/);this.commands[Q]?this.commands[Q](g):console.warn(`Command not found: ${Q}`)}handleSearchMode(A,Q){if(A==="Escape")this.mode="Normal",this.commandText="",this.commandCursorX=0;else if(A==="Enter")this.commandText&&(this.lastSearchPattern=this.commandText),this.lastSearchPattern&&this.repeatSearch(this.lastSearchForward),this.mode="Normal",this.commandText="",this.commandCursorX=0;else if(A==="Backspace")if(this.commandCursorX>0){const g=this.commandText.slice(0,this.commandCursorX-1),I=this.commandText.slice(this.commandCursorX);this.commandText=g+I,this.commandCursorX--}else this.commandText.length===0&&(this.mode="Normal");else if(A==="Delete"){if(this.commandCursorX<this.commandText.length){const g=this.commandText.slice(0,this.commandCursorX),I=this.commandText.slice(this.commandCursorX+1);this.commandText=g+I}}else if(A==="ArrowLeft")this.commandCursorX=Math.max(0,this.commandCursorX-1);else if(A==="ArrowRight")this.commandCursorX=Math.min(this.commandText.length,this.commandCursorX+1);else if(A==="Home")this.commandCursorX=0;else if(A==="End")this.commandCursorX=this.commandText.length;else if(A.length===1&&!Q){const g=this.commandText.slice(0,this.commandCursorX),I=this.commandText.slice(this.commandCursorX);this.commandText=g+A+I,this.commandCursorX++}}repeatSearch(A){if(this.lastSearchPattern)try{const Q=new RegExp(this.lastSearchPattern,"g");let g=!1;if(A){for(let I=this.cursor.y;I<this.buffer.length;I++){const C=this.buffer[I],B=I===this.cursor.y?this.cursor.x+1:0;if(B>=C.length&&I===this.cursor.y)continue;Q.lastIndex=B;const i=Q.exec(C);if(i){this.setCursor(i.index,I),g=!0;break}}if(!g)for(let I=0;I<=this.cursor.y;I++){const C=this.buffer[I];Q.lastIndex=0;const B=Q.exec(C);if(B){if(I===this.cursor.y&&B.index>this.cursor.x)continue;this.setCursor(B.index,I),g=!0;break}}}else{for(let I=this.cursor.y;I>=0;I--){const C=this.buffer[I],B=I===this.cursor.y?this.cursor.x-1:C.length;let i=-1;Q.lastIndex=0;let E;for(;(E=Q.exec(C))!==null&&!(E.index>B);)i=E.index,Q.lastIndex===E.index&&Q.lastIndex++;if(i!==-1){this.setCursor(i,I),g=!0;break}}if(!g)for(let I=this.buffer.length-1;I>=this.cursor.y;I--){const C=this.buffer[I];let B=-1;Q.lastIndex=0;let i;for(;(i=Q.exec(C))!==null&&!(I===this.cursor.y&&i.index>=this.cursor.x);)B=i.index,Q.lastIndex===i.index&&Q.lastIndex++;if(B!==-1){this.setCursor(B,I),g=!0;break}}}g||this.showMessage("Pattern not found: "+this.lastSearchPattern)}catch{this.showMessage("Invalid pattern: "+this.lastSearchPattern)}}};const rI=A=>{const Q=p=>typeof p=="function"?p():p,g=()=>Q(A.buffer)||[],I=()=>Q(A.cursor)||{x:0,y:0},C=()=>Q(A.visualStart)??null,B=()=>Q(A.topLine)||0,i=()=>Q(A.leftCol)||0,E=()=>Q(A.mode)||"Normal",a=()=>Q(A.commandText)||"",F=()=>Q(A.commandCursorX)??0,y=()=>Q(A.width)||80,w=()=>Q(A.height)||24,X=()=>Q(A.currentFilePath)??null,QA=()=>Q(A.isExplorer),iA=()=>Q(A.explorerPath),aA=()=>Q(A.isReadOnly),cA=()=>Q(A.gutters)||[],m=()=>Q(A.lineRenderers)||[],r=()=>Q(A.completionItems)||[],e=()=>Q(A.selectedCompletionIndex)||0,s=()=>Q(A.hoverText),c=()=>Q(A.hoverPos)||{x:0,y:0},f=()=>Q(A.hoverScrollOffset)||0,t=()=>Q(A.statusMessage),h=()=>Q(A.wrap),l=()=>Q(A.lineEnding),V=()=>A.picker?A.picker():null,H=()=>w()-2,K=()=>w()-1,U=()=>w()-2,oA=()=>cA().reduce((p,L)=>p+L.width,0),lA=()=>y()-oA(),RA=(p,L,BA)=>{const gA=m();for(const D of gA){const N=D.render({lineIndex:p,lineContent:L,isCursorLine:()=>I().y===p(),gutterWidth:oA,leftCol:()=>BA,viewportWidth:lA,visualStart:C(),mode:E(),cursor:I(),currentFilePath:X});if(N!=null)return N}return null},tQ=()=>{var p;if(E()==="Command"||E()==="Search")return K();const L=I(),BA=B(),gA=lA(),D=g();if(L.y<BA)return-1;let N=0;for(let x=BA;x<L.y;x++)h()?N+=Math.max(1,Math.ceil((((p=D[x])==null?void 0:p.length)||0)/gA)):N+=1;return h()&&(N+=Math.floor(L.x/gA)),N},wQ=()=>{if(E()==="Command"||E()==="Search")return F()+1;const p=I(),L=lA(),BA=oA();return h()?p.x%L+BA:p.x-i()+BA};jA(()=>{A.onCursorChange&&A.onCursorChange({x:wQ(),y:tQ()})});const LQ=()=>QA()?`Explorer: ${iA()||"/"}`:(X()||"[No Name]")+(aA()?" [RO]":""),HQ=()=>{const p=g(),L=B(),BA=U(),gA=lA(),D=[];let N=0;for(let x=L;x<p.length&&N<BA;x++){const AA=p[x];if(h()){const z=[];if(AA.length===0)z.push("");else for(let G=0;G<AA.length;G+=gA)z.push(AA.slice(G,G+gA));for(let G=0;G<z.length&&N<BA;G++)D.push({content:z[G],bufferIndex:x,isFirstDisplayRow:G===0,rowInLine:G}),N++}else D.push({content:AA.slice(i(),i()+gA),bufferIndex:x,isFirstDisplayRow:!0,rowInLine:0}),N++}return D},XA=6,hQ=()=>{const p=r(),L=e();return p.length<=XA||L<XA/2?0:L>p.length-XA/2?p.length-XA:Math.floor(L-XA/2)},lQ=()=>{const p=hQ();return r().slice(p,p+XA)},SQ=()=>Math.min(y()-4,60),XQ=()=>Math.min(w()-4,15),VQ=()=>{const p=(s()||"").split(`
`),L=[],BA=SQ()-2;for(const gA of p)if(gA.length<=BA)L.push(gA);else{let D=gA;for(;D.length>BA;){let N=D.lastIndexOf(" ",BA);N<BA/2&&(N=BA),L.push(D.slice(0,N)),D=D.slice(N).trim()}D&&L.push(D)}return L},n=()=>Math.min(VQ().length+2,XQ()),J=()=>{const p=VQ();return p.length===0?20:Math.max(20,Math.min(SQ(),Math.max(...p.map(L=>L.length+2))))},q=()=>VQ().slice(f(),f()+n()-2),M=()=>lQ().length+2,S=()=>{const p=tQ()+1,L=M();if(p+L>w()){const BA=tQ()-L;return Math.max(0,BA)}return p},d=()=>Math.max(0,Math.min(wQ(),y()-30)),W=()=>Math.floor(y()*.8),$=()=>Math.floor(w()*.6),yA=()=>Math.floor((y()-W())/2),SA=()=>Math.floor((w()-$())/2),KA=()=>Math.max(0,$()-4);return(()=>{var p=v("tui-box"),L=v("tui-box"),BA=v("tui-text"),gA=v("tui-box");return uA(p,L),uA(p,gA),o(p,"x",0),o(p,"y",0),o(p,"border",!1),hA(p,T(Wg,{get each(){return HQ()},children:(D,N)=>{const x=()=>D().bufferIndex,AA=()=>I().y===x(),z=()=>g()[x()]||"";return(()=>{var G=v("tui-box");return o(G,"x",0),o(G,"y",N),o(G,"height",1),hA(G,T(TA,{get each(){return cA()},children:(DA,GA)=>{const wA=()=>cA().slice(0,GA()).reduce((rA,Z)=>rA+Z.width,0);return(()=>{var rA=v("tui-box");return o(rA,"y",0),o(rA,"height",1),hA(rA,T(JA,{get when(){return D().isFirstDisplayRow},get children(){return DA.render({lineIndex:x(),lineContent:z(),isCursorLine:AA()})}})),b(Z=>{var FA=wA(),fA=DA.width;return FA!==Z.e&&(Z.e=o(rA,"x",FA,Z.e)),fA!==Z.t&&(Z.t=o(rA,"width",fA,Z.t)),Z},{e:void 0,t:void 0}),rA})()}}),null),hA(G,()=>{const DA=h()?D().rowInLine*lA():i(),GA=RA(x,z(),DA);if(GA)return(()=>{var P=v("tui-box");return o(P,"y",0),o(P,"height",1),hA(P,GA),b(UA=>{var vA=oA(),AQ=lA();return vA!==UA.e&&(UA.e=o(P,"x",vA,UA.e)),AQ!==UA.t&&(UA.t=o(P,"width",AQ,UA.t)),UA},{e:void 0,t:void 0}),P})();const wA=C(),rA=x(),Z=D().content,FA=lA(),fA=oA();if(!wA||E()!=="Visual")return(()=>{var P=v("tui-text");return o(P,"x",fA),o(P,"y",0),o(P,"content",Z),P})();const $A=I();let ZA=wA,zA=$A;if((ZA.y>zA.y||ZA.y===zA.y&&ZA.x>zA.x)&&([ZA,zA]=[zA,ZA]),rA<ZA.y||rA>zA.y)return(()=>{var P=v("tui-text");return o(P,"x",fA),o(P,"y",0),o(P,"content",Z),P})();const ZQ=D().rowInLine*FA,SI=ZQ+FA;let Yg=0,pg=z().length;rA===ZA.y&&(Yg=ZA.x),rA===zA.y&&(pg=zA.x+1);const fg=Math.max(ZQ,Yg),Jg=Math.min(SI,pg);if(fg>=Jg)return(()=>{var P=v("tui-text");return o(P,"x",fA),o(P,"y",0),o(P,"content",Z),P})();const ug=Math.max(0,fg-ZQ),mg=Math.min(FA,Jg-ZQ),KQ=Z.slice(0,ug),Rg=Z.slice(ug,mg),ZI=Z.slice(mg);return(()=>{var P=v("tui-box"),UA=v("tui-text"),vA=v("tui-text"),AQ=v("tui-text");return uA(P,UA),uA(P,vA),uA(P,AQ),o(P,"x",fA),o(P,"y",0),o(P,"width",FA),o(P,"height",1),o(UA,"x",0),o(UA,"y",0),o(UA,"content",KQ),o(vA,"y",0),o(vA,"content",Rg),o(vA,"bg_color","#004b72"),o(AQ,"y",0),o(AQ,"content",ZI),b(QQ=>{var Ug=KQ.length,Lg=KQ.length+Rg.length;return Ug!==QQ.e&&(QQ.e=o(vA,"x",Ug,QQ.e)),Lg!==QQ.t&&(QQ.t=o(AQ,"x",Lg,QQ.t)),QQ},{e:void 0,t:void 0}),P})()},null),b(DA=>o(G,"width",y(),DA)),G})()}}),L),uA(L,BA),o(L,"x",0),o(L,"height",1),o(L,"border",!1),o(BA,"x",0),o(BA,"y",0),o(gA,"x",0),o(gA,"height",1),o(gA,"border",!1),hA(gA,T(JA,{get when(){return E()==="Command"},get children(){var D=v("tui-text");return o(D,"x",0),o(D,"y",0),b(N=>o(D,"content",`:${a()}`,N)),D}}),null),hA(gA,T(JA,{get when(){return E()==="Search"},get children(){var D=v("tui-text");return o(D,"x",0),o(D,"y",0),b(N=>o(D,"content",`/${a()}`,N)),D}}),null),hA(gA,T(JA,{get when(){return Ag(()=>E()!=="Command"&&E()!=="Search")()&&t()},get children(){var D=v("tui-text");return o(D,"x",0),o(D,"y",0),b(N=>o(D,"content",t(),N)),D}}),null),hA(p,T(JA,{get when(){return r().length>0},get children(){var D=v("tui-box");return o(D,"width",30),o(D,"border",!0),o(D,"title","Completions"),hA(D,T(TA,{get each(){return lQ()},children:(N,x)=>{const AA=()=>x()+hQ()===e();return(()=>{var z=v("tui-text");return o(z,"x",1),b(G=>{var DA=x()+1,GA=(AA()?"> ":"  ")+N.label.slice(0,26),wA=AA()?"#007acc":"#ffffff";return DA!==G.e&&(G.e=o(z,"y",DA,G.e)),GA!==G.t&&(G.t=o(z,"content",GA,G.t)),wA!==G.a&&(G.a=o(z,"color",wA,G.a)),G},{e:void 0,t:void 0,a:void 0}),z})()}})),b(N=>{var x=d(),AA=S(),z=M();return x!==N.e&&(N.e=o(D,"x",x,N.e)),AA!==N.t&&(N.t=o(D,"y",AA,N.t)),z!==N.a&&(N.a=o(D,"height",z,N.a)),N},{e:void 0,t:void 0,a:void 0}),D}}),null),hA(p,T(JA,{get when(){return s()},get children(){var D=v("tui-box");return o(D,"border",!0),hA(D,T(TA,{get each(){return q()},children:(N,x)=>(()=>{var AA=v("tui-text");return o(AA,"x",1),o(AA,"content",N),b(z=>o(AA,"y",x()+1,z)),AA})()})),b(N=>{var x=Math.min(y()-J(),oA()+c().x-i()),AA=Math.max(0,c().y-B()-n()),z=J(),G=n();return x!==N.e&&(N.e=o(D,"x",x,N.e)),AA!==N.t&&(N.t=o(D,"y",AA,N.t)),z!==N.a&&(N.a=o(D,"width",z,N.a)),G!==N.o&&(N.o=o(D,"height",G,N.o)),N},{e:void 0,t:void 0,a:void 0,o:void 0}),D}}),null),hA(p,T(JA,{get when(){return Ag(()=>!!V())()&&V().active},get children(){var D=v("tui-box"),N=v("tui-box"),x=v("tui-text"),AA=v("tui-text"),z=v("tui-box");return uA(D,N),uA(D,AA),uA(D,z),o(D,"border",!0),uA(N,x),o(N,"x",1),o(N,"y",1),o(N,"height",1),o(x,"content",()=>"> "+V().query),hA(N,T(JA,{get when(){return V().loading},get children(){var G=v("tui-text");return o(G,"content","Loading..."),o(G,"color","#888888"),b(DA=>o(G,"x",W()-12,DA)),G}}),null),o(AA,"x",0),o(AA,"y",2),o(AA,"color","#444444"),o(z,"x",1),o(z,"y",3),hA(z,T(TA,{get each(){return V().items.slice(0,KA())},children:(G,DA)=>{const GA=()=>DA()===V().selectedIndex;return(()=>{var wA=v("tui-box"),rA=v("tui-text");return uA(wA,rA),o(wA,"x",0),o(wA,"height",1),o(rA,"content",()=>(GA()?"> ":"  ")+G.label),hA(wA,T(JA,{get when(){return G.detail},get children(){var Z=v("tui-text");return o(Z,"content",()=>G.detail.slice(0,W()-G.label.length-8)),o(Z,"color","#666666"),b(FA=>o(Z,"x",G.label.length+4,FA)),Z}}),null),b(Z=>{var FA=DA(),fA=W()-2,$A=GA()?"#569cd6":"#ffffff";return FA!==Z.e&&(Z.e=o(wA,"y",FA,Z.e)),fA!==Z.t&&(Z.t=o(wA,"width",fA,Z.t)),$A!==Z.a&&(Z.a=o(rA,"color",$A,Z.a)),Z},{e:void 0,t:void 0,a:void 0}),wA})()}})),b(G=>{var DA=yA(),GA=SA(),wA=W(),rA=$(),Z=V().placeholder,FA=W()-2,fA="".padStart(W(),"─"),$A=W()-2,ZA=KA();return DA!==G.e&&(G.e=o(D,"x",DA,G.e)),GA!==G.t&&(G.t=o(D,"y",GA,G.t)),wA!==G.a&&(G.a=o(D,"width",wA,G.a)),rA!==G.o&&(G.o=o(D,"height",rA,G.o)),Z!==G.i&&(G.i=o(D,"title",Z,G.i)),FA!==G.n&&(G.n=o(N,"width",FA,G.n)),fA!==G.s&&(G.s=o(AA,"content",fA,G.s)),$A!==G.h&&(G.h=o(z,"width",$A,G.h)),ZA!==G.r&&(G.r=o(z,"height",ZA,G.r)),G},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),D}}),null),b(D=>{var N=y(),x=w(),AA=H(),z=y(),G=`-- ${E().toUpperCase()} --   ${LQ()} [${l()}]   ${I().y+1},${I().x+1}`,DA=K(),GA=y();return N!==D.e&&(D.e=o(p,"width",N,D.e)),x!==D.t&&(D.t=o(p,"height",x,D.t)),AA!==D.a&&(D.a=o(L,"y",AA,D.a)),z!==D.o&&(D.o=o(L,"width",z,D.o)),G!==D.i&&(D.i=o(BA,"content",G,D.i)),DA!==D.n&&(D.n=o(gA,"y",DA,D.n)),GA!==D.s&&(D.s=o(gA,"width",GA,D.s)),D},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),p})()};var cI=NA('<svg viewBox="0 0 24 24"style=width:24px;height:24px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;box-sizing:border-box><path d="M12 4L4 12H8V20H16V12H20L12 4Z">'),wI=NA('<svg viewBox="0 0 24 24"style=width:24px;height:24px;fill:currentColor;stroke:none;box-sizing:border-box><path d="M21 4H8L1 12L8 20H21C22.1 20 23 19.1 23 18V6C23 4.9 22.1 4 21 4Z"></path><path d="M18 8L12 14M12 8L18 14"stroke=black stroke-width=2 stroke-linecap=round>'),hI=NA('<svg viewBox="0 0 24 24"style=width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;box-sizing:border-box><path d="M19 8V12C19 14.2091 17.2091 16 15 16H5M5 16L9 12M5 16L9 20">'),lI=NA('<svg viewBox="0 0 24 24"style=width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;box-sizing:border-box><path d="M21 12H3M21 12L17 8M21 12L17 16M3 7V17">'),VI=NA('<svg viewBox="0 0 24 24"style=width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;box-sizing:border-box><path d="M7 10l5 5 5-5">'),GI=NA("<button style=color:#fff;border:none;flex:1;display:flex;justify-content:center;align-items:center;font-size:0.85rem;font-weight:500;cursor:pointer;height:28px;user-select:none;box-sizing:border-box;padding:0;margin:0>"),NI=NA("<button>"),kI=NA('<div style="background-color:#000;padding:2px 4px;width:100%;max-width:100vw;box-sizing:border-box;display:flex;flex-direction:column;gap:4px;user-select:none;padding-bottom:calc(env(safe-area-inset-bottom, 0px) + 8px);overflow:hidden;margin:0;position:relative"><div style=display:flex;justify-content:center;align-items:center;height:20px;width:100%;margin-bottom:-2px><button style=background:none;border:none;color:#666;width:60px;height:100%;display:flex;align-items:center;justify-content:center;cursor:pointer></button></div><div style=display:flex;flex-direction:column;gap:1px;background-color:#000;padding-bottom:4px;box-sizing:border-box>'),FI=NA("<div style=display:flex;gap:1px;height:28px;box-sizing:border-box;width:100%>"),dI=NA("<div style=display:flex;gap:4px;justify-content:center;width:100%;box-sizing:border-box>");const yI=A=>{const[Q,g]=eA("alpha"),[I,C]=eA(!1),[B,i]=eA(!1),[E,a]=eA(!1);let F=null,y=null;const w=()=>{F&&(clearTimeout(F),F=null),y&&(clearInterval(y),y=null)},X=t=>{w(),["↑","↓","←","→","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","backspace","HOME","END","PGUP","PGDN"].includes(t)&&(F=setTimeout(()=>{y=setInterval(()=>{s(t,!0)},50)},500))},QA=[["ESC","/","-","HOME","↑","END","PGUP"],["TAB","CTRL","ALT","←","↓","→","PGDN"]],iA={alpha:[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["shift","z","x","c","v","b","n","m","backspace"],["!#1",",","English (AU)",".","enter"]],sym1:[["1","2","3","4","5","6","7","8","9","0"],["@","#","$","%","&","-","+","(",")"],["*",'"',"'",":",";","!","?"],["1/2","_","/","\\","|","~","<",">","backspace"],["ABC",",","Space",".","enter"]],sym2:[["1","2","3","4","5","6","7","8","9","0"],["`","•","√","π","÷","×","¶","∆","£","¥"],["€","¢","^","°","=","{","}","[","]"],["2/2","©","®","™","℅","§","...","backspace"],["ABC",",","Space",".","enter"]]},aA=t=>(()=>{var h=cI();return b(l=>aQ(h,"fill",t.active?"currentColor":"none")),h})(),cA=()=>wI(),m=()=>hI(),r=()=>lI(),e=()=>VI(),s=(t,h=!1)=>{var l;if(t==="shift"){C(!I());return}else if(t==="!#1"||t==="1/2"||t==="2/2"){t==="!#1"&&g("sym1"),t==="1/2"&&g("sym2"),t==="2/2"&&g("sym1");return}else if(t==="ABC"){g("alpha");return}else if(t==="CTRL"){i(!B());return}else if(t==="ALT"){a(!E());return}let V=t;const H=I(),K=B(),U=E();Q()==="alpha"&&H&&t.length===1&&(V=V.toUpperCase(),h||C(!1)),(V==="English (AU)"||V==="Space")&&(V=" "),(l=A.onKeyPress)==null||l.call(A,V,{ctrl:K,alt:U,shift:H}),h||(K&&i(!1),U&&a(!1))},c=t=>{const h=()=>t==="TAB"?T(r,{}):t,l=()=>t==="CTRL"?B():t==="ALT"?E():!1;return(()=>{var V=GI();return V.addEventListener("pointerleave",()=>w()),V.$$pointerup=()=>w(),V.$$pointerdown=H=>{H.preventDefault(),s(t),X(t)},dA(V,h),b(H=>aQ(V,"background",l()?"#444":"#000")),V})()},f=t=>{const h=()=>t==="shift"?T(aA,{get active(){return I()}}):t==="backspace"?T(cA,{}):t==="English (AU)"||t==="Space"?Q()==="alpha"?"English (AU)":"":t==="enter"?T(m,{}):Q()==="alpha"&&t.length===1&&t.match(/[a-z]/)&&I()?t.toUpperCase():t,l=()=>{let V={background:"#2c2c2c",color:"#fff",border:"none","border-radius":"6px",height:"38px",display:"flex","justify-content":"center","align-items":"center","font-size":"1.1rem","font-weight":"400",cursor:"pointer",flex:"1 1 0","min-width":"0","box-shadow":"0 1px 2px rgba(0, 0, 0, 0.3)","user-select":"none","box-sizing":"border-box",padding:"0",margin:"0"};return t==="shift"?(V.flex="1.4",V.background=I()?"#fff":"#3b3b3b",V.color=I()?"#000":"#fff"):t==="backspace"?(V.flex="1.4",V.background="#3b3b3b"):t==="!#1"||t==="ABC"?(V.flex="1.4",V.background="#3b3b3b",V["font-size"]="1.1rem"):t==="English (AU)"||t==="Space"?(V.flex="5",V.background="#3b3b3b",V["font-size"]="1rem"):t==="enter"?(V.flex="1.4",V.background="#3b3b3b"):t==="1/2"||t==="2/2"?(V.flex="1.4",V.background="#3b3b3b",V["font-size"]="0.9rem"):(t===","||t===".")&&(V.background="#3b3b3b"),V};return(()=>{var V=NI();return V.addEventListener("pointerleave",()=>w()),V.$$pointerup=()=>w(),V.$$pointerdown=H=>{H.preventDefault(),s(t),X(t)},dA(V,h),b(H=>_g(V,l(),H)),V})()};return(()=>{var t=kI(),h=t.firstChild,l=h.firstChild,V=h.nextSibling;return l.$$pointerup=H=>{var K;H.preventDefault(),(K=A.onCollapse)==null||K.call(A)},dA(l,T(e,{})),dA(V,T(TA,{each:QA,children:H=>(()=>{var K=FI();return dA(K,T(TA,{each:H,children:U=>c(U)})),K})()})),dA(t,T(TA,{get each(){return iA[Q()]},children:(H,K)=>(()=>{var U=dI();return dA(U,T(TA,{each:H,children:oA=>f(oA)})),b(oA=>aQ(U,"padding",K()===2?"0 5%":"0")),U})()}),null),t})()};gg(["pointerdown","pointerup"]);let CA,EQ=0,DQ=null;function fQ(){return(DQ===null||DQ.byteLength===0)&&(DQ=new Uint8Array(CA.memory.buffer)),DQ}const JQ=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},MI=typeof JQ.encodeInto=="function"?function(A,Q){return JQ.encodeInto(A,Q)}:function(A,Q){const g=JQ.encode(A);return Q.set(g),{read:A.length,written:g.length}};function uQ(A,Q,g){if(g===void 0){const E=JQ.encode(A),a=Q(E.length,1)>>>0;return fQ().subarray(a,a+E.length).set(E),EQ=E.length,a}let I=A.length,C=Q(I,1)>>>0;const B=fQ();let i=0;for(;i<I;i++){const E=A.charCodeAt(i);if(E>127)break;B[C+i]=E}if(i!==I){i!==0&&(A=A.slice(i)),C=g(C,I,I=i+A.length*3,1)>>>0;const E=fQ().subarray(C+i,C+I),a=MI(A,E);i+=a.written,C=g(C,I,i,1)>>>0}return EQ=i,C}let _A=null;function mA(){return(_A===null||_A.buffer.detached===!0||_A.buffer.detached===void 0&&_A.buffer!==CA.memory.buffer)&&(_A=new DataView(CA.memory.buffer)),_A}function YI(A){const Q=CA.__externref_table_alloc();return CA.__wbindgen_export_4.set(Q,A),Q}function mQ(A,Q){try{return A.apply(this,Q)}catch(g){const I=YI(g);CA.__wbindgen_exn_store(I)}}const kg=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&kg.decode();function RQ(A,Q){return A=A>>>0,kg.decode(fQ().subarray(A,A+Q))}function rQ(A){return A==null}function qQ(A){const Q=typeof A;if(Q=="number"||Q=="boolean"||A==null)return`${A}`;if(Q=="string")return`"${A}"`;if(Q=="symbol"){const C=A.description;return C==null?"Symbol":`Symbol(${C})`}if(Q=="function"){const C=A.name;return typeof C=="string"&&C.length>0?`Function(${C})`:"Function"}if(Array.isArray(A)){const C=A.length;let B="[";C>0&&(B+=qQ(A[0]));for(let i=1;i<C;i++)B+=", "+qQ(A[i]);return B+="]",B}const g=/\[object ([^\]]+)\]/.exec(toString.call(A));let I;if(g&&g.length>1)I=g[1];else return toString.call(A);if(I=="Object")try{return"Object("+JSON.stringify(A)+")"}catch{return"Object"}return A instanceof Error?`${A.name}: ${A.message}
${A.stack}`:I}const Fg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(A=>CA.__wbg_engine_free(A>>>0,1));class dg{__destroy_into_raw(){const Q=this.__wbg_ptr;return this.__wbg_ptr=0,Fg.unregister(this),Q}free(){const Q=this.__destroy_into_raw();CA.__wbg_engine_free(Q,0)}constructor(Q,g){const I=CA.engine_new(Q,g);return this.__wbg_ptr=I>>>0,Fg.register(this,this.__wbg_ptr,this),this}render(Q){return CA.engine_render(this.__wbg_ptr,Q)}}async function pI(A,Q){if(typeof Response=="function"&&A instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(A,Q)}catch(I){if(A.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",I);else throw I}const g=await A.arrayBuffer();return await WebAssembly.instantiate(g,Q)}else{const g=await WebAssembly.instantiate(A,Q);return g instanceof WebAssembly.Instance?{instance:g,module:A}:g}}function fI(){const A={};return A.wbg={},A.wbg.__wbg_String_8f0eb39a4a4c2f66=function(Q,g){const I=String(g),C=uQ(I,CA.__wbindgen_malloc,CA.__wbindgen_realloc),B=EQ;mA().setInt32(Q+4,B,!0),mA().setInt32(Q+0,C,!0)},A.wbg.__wbg_buffer_609cc3eee51ed158=function(Q){return Q.buffer},A.wbg.__wbg_call_672a4d21634d4a24=function(){return mQ(function(Q,g){return Q.call(g)},arguments)},A.wbg.__wbg_done_769e5ede4b31c67b=function(Q){return Q.done},A.wbg.__wbg_entries_3265d4158b33e5dc=function(Q){return Object.entries(Q)},A.wbg.__wbg_error_1004b8c64097413f=function(Q,g){console.error(Q,g)},A.wbg.__wbg_error_7534b8e9a36f1ab4=function(Q,g){let I,C;try{I=Q,C=g,console.error(RQ(Q,g))}finally{CA.__wbindgen_free(I,C,1)}},A.wbg.__wbg_get_67b2ba62fc30de12=function(){return mQ(function(Q,g){return Reflect.get(Q,g)},arguments)},A.wbg.__wbg_get_b9b93047fe3cf45b=function(Q,g){return Q[g>>>0]},A.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc=function(Q){let g;try{g=Q instanceof ArrayBuffer}catch{g=!1}return g},A.wbg.__wbg_instanceof_Map_f3469ce2244d2430=function(Q){let g;try{g=Q instanceof Map}catch{g=!1}return g},A.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9=function(Q){let g;try{g=Q instanceof Uint8Array}catch{g=!1}return g},A.wbg.__wbg_isArray_a1eab7e0d067391b=function(Q){return Array.isArray(Q)},A.wbg.__wbg_isSafeInteger_343e2beeeece1bb0=function(Q){return Number.isSafeInteger(Q)},A.wbg.__wbg_iterator_9a24c88df860dc65=function(){return Symbol.iterator},A.wbg.__wbg_length_a446193dc22c12f8=function(Q){return Q.length},A.wbg.__wbg_length_e2d2a49132c1b256=function(Q){return Q.length},A.wbg.__wbg_new_405e22f390576ce2=function(){return new Object},A.wbg.__wbg_new_78feb108b6472713=function(){return new Array},A.wbg.__wbg_new_8a6f238a6ece86ea=function(){return new Error},A.wbg.__wbg_new_a12002a7f91c75be=function(Q){return new Uint8Array(Q)},A.wbg.__wbg_next_25feadfc0913fea9=function(Q){return Q.next},A.wbg.__wbg_next_6574e1a8a62d1055=function(){return mQ(function(Q){return Q.next()},arguments)},A.wbg.__wbg_set_37837023f3d740e8=function(Q,g,I){Q[g>>>0]=I},A.wbg.__wbg_set_3f1d0b984ed272ed=function(Q,g,I){Q[g]=I},A.wbg.__wbg_set_65595bdd868b3009=function(Q,g,I){Q.set(g,I>>>0)},A.wbg.__wbg_stack_0ed75d68575b0f3c=function(Q,g){const I=g.stack,C=uQ(I,CA.__wbindgen_malloc,CA.__wbindgen_realloc),B=EQ;mA().setInt32(Q+4,B,!0),mA().setInt32(Q+0,C,!0)},A.wbg.__wbg_stringify_f7ed6987935b4a24=function(){return mQ(function(Q){return JSON.stringify(Q)},arguments)},A.wbg.__wbg_value_cd1ffa7b1ab794f1=function(Q){return Q.value},A.wbg.__wbindgen_bigint_from_i64=function(Q){return Q},A.wbg.__wbindgen_bigint_from_u64=function(Q){return BigInt.asUintN(64,Q)},A.wbg.__wbindgen_bigint_get_as_i64=function(Q,g){const I=g,C=typeof I=="bigint"?I:void 0;mA().setBigInt64(Q+8,rQ(C)?BigInt(0):C,!0),mA().setInt32(Q+0,!rQ(C),!0)},A.wbg.__wbindgen_boolean_get=function(Q){const g=Q;return typeof g=="boolean"?g?1:0:2},A.wbg.__wbindgen_debug_string=function(Q,g){const I=qQ(g),C=uQ(I,CA.__wbindgen_malloc,CA.__wbindgen_realloc),B=EQ;mA().setInt32(Q+4,B,!0),mA().setInt32(Q+0,C,!0)},A.wbg.__wbindgen_error_new=function(Q,g){return new Error(RQ(Q,g))},A.wbg.__wbindgen_in=function(Q,g){return Q in g},A.wbg.__wbindgen_init_externref_table=function(){const Q=CA.__wbindgen_export_4,g=Q.grow(4);Q.set(0,void 0),Q.set(g+0,void 0),Q.set(g+1,null),Q.set(g+2,!0),Q.set(g+3,!1)},A.wbg.__wbindgen_is_bigint=function(Q){return typeof Q=="bigint"},A.wbg.__wbindgen_is_function=function(Q){return typeof Q=="function"},A.wbg.__wbindgen_is_object=function(Q){const g=Q;return typeof g=="object"&&g!==null},A.wbg.__wbindgen_jsval_eq=function(Q,g){return Q===g},A.wbg.__wbindgen_jsval_loose_eq=function(Q,g){return Q==g},A.wbg.__wbindgen_memory=function(){return CA.memory},A.wbg.__wbindgen_number_get=function(Q,g){const I=g,C=typeof I=="number"?I:void 0;mA().setFloat64(Q+8,rQ(C)?0:C,!0),mA().setInt32(Q+0,!rQ(C),!0)},A.wbg.__wbindgen_number_new=function(Q){return Q},A.wbg.__wbindgen_string_get=function(Q,g){const I=g,C=typeof I=="string"?I:void 0;var B=rQ(C)?0:uQ(C,CA.__wbindgen_malloc,CA.__wbindgen_realloc),i=EQ;mA().setInt32(Q+4,i,!0),mA().setInt32(Q+0,B,!0)},A.wbg.__wbindgen_string_new=function(Q,g){return RQ(Q,g)},A.wbg.__wbindgen_throw=function(Q,g){throw new Error(RQ(Q,g))},A}function JI(A,Q){return CA=A.exports,jQ.__wbindgen_wasm_module=Q,_A=null,DQ=null,CA.__wbindgen_start(),CA}async function jQ(A){if(CA!==void 0)return CA;typeof A<"u"&&(Object.getPrototypeOf(A)===Object.prototype?{module_or_path:A}=A:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof A>"u"&&(A=new URL("data:application/wasm;base64,AGFzbQEAAAABwQIuYAAAYAABf2AAAW9gAX8AYAF/AX9gAn9/AGACf38Bf2ACf38Bb2ADf39/AGADf39/AX9gBH9/f38AYAR/f39/AX9gBX9/f39/AGAFf39/f38Bf2AGf39/f39/AGAGf39/f39/AX9gB39/f39/f38AYAh/f39/f39/fwBgE39/f39/f39/f39/f39/f39/f38Bf2AJf39/f39/fn5+AGAEf39+fwBgBX9/fn9/AGAFf399f38AYAV/f3x/fwBgBH9+f38AYAV/fn5+fgBgBH99f38AYAR/fH9/AGAEf3x/fwF/YAJ/bwBgAn9vAW9gAX4Bf2ABfgFvYAJ+fwF/YAN+f38Bf2ABfAF/YAF8AW9gAW8Bf2ABbwFvYAJvfwFvYANvf28AYAJvbwBgAm9vAX9gAm9vAW9gA29vfwBgA29vbwACxAwwA3diZxVfX3diaW5kZ2VuX3N0cmluZ19uZXcABwN3YmcWX193YmluZGdlbl9ib29sZWFuX2dldAAlA3diZxRfX3diaW5kZ2VuX2lzX2JpZ2ludAAlA3diZxVfX3diaW5kZ2VuX251bWJlcl9nZXQAHQN3YmcVX193YmluZGdlbl9zdHJpbmdfZ2V0AB0Dd2JnFF9fd2JpbmRnZW5faXNfb2JqZWN0ACUDd2JnDV9fd2JpbmRnZW5faW4AKgN3YmcaX193YmluZGdlbl9iaWdpbnRfZnJvbV9pNjQAIAN3YmcTX193YmluZGdlbl9qc3ZhbF9lcQAqA3diZxpfX3diaW5kZ2VuX2JpZ2ludF9mcm9tX3U2NAAgA3diZxRfX3diaW5kZ2VuX2Vycm9yX25ldwAHA3diZxxfX3diZ19lcnJvcl8xMDA0YjhjNjQwOTc0MTNmACkDd2JnGV9fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXEAKgN3YmcaX193Ymdfc2V0XzNmMWQwYjk4NGVkMjcyZWQALQN3YmcdX193YmdfU3RyaW5nXzhmMGViMzlhNGE0YzJmNjYAHQN3YmcVX193YmluZGdlbl9udW1iZXJfbmV3ACQDd2JnGl9fd2JnX25ld183OGZlYjEwOGI2NDcyNzEzAAIDd2JnGl9fd2JnX25ld180MDVlMjJmMzkwNTc2Y2UyAAIDd2JnGl9fd2JnX25ld19hMTIwMDJhN2Y5MWM3NWJlACYDd2JnHV9fd2JnX2J1ZmZlcl82MDljYzNlZWU1MWVkMTU4ACYDd2JnHV9fd2JnX2xlbmd0aF9hNDQ2MTkzZGMyMmMxMmY4ACUDd2JnGl9fd2JnX3NldF82NTU5NWJkZDg2OGIzMDA5ACwDd2JnG19fd2JnX2RvbmVfNzY5ZTVlZGU0YjMxYzY3YgAlA3diZxxfX3diZ192YWx1ZV9jZDFmZmE3YjFhYjc5NGYxACYDd2JnJV9fd2JnX2luc3RhbmNlb2ZfTWFwX2YzNDY5Y2UyMjQ0ZDI0MzAAJQN3YmcsX193YmdfaW5zdGFuY2VvZl9VaW50OEFycmF5XzE3MTU2YmNmMTE4MDg2YTkAJQN3YmctX193YmdfaW5zdGFuY2VvZl9BcnJheUJ1ZmZlcl9lMTQ1ODU0MzJlMzczN2ZjACUDd2JnGl9fd2JnX2dldF9iOWI5MzA0N2ZlM2NmNDViACcDd2JnGl9fd2JnX3NldF8zNzgzNzAyM2YzZDc0MGU4ACgDd2JnHV9fd2JnX2xlbmd0aF9lMmQyYTQ5MTMyYzFiMjU2ACUDd2JnHl9fd2JnX2lzQXJyYXlfYTFlYWI3ZTBkMDY3MzkxYgAlA3diZyRfX3diZ19pc1NhZmVJbnRlZ2VyXzM0M2UyYmVlZWVjZTFiYjAAJQN3YmceX193YmdfZW50cmllc18zMjY1ZDQxNThiMzNlNWRjACYDd2JnH19fd2JnX2l0ZXJhdG9yXzlhMjRjODhkZjg2MGRjNjUAAgN3YmcbX193YmdfY2FsbF82NzJhNGQyMTYzNGQ0YTI0ACsDd2JnFl9fd2JpbmRnZW5faXNfZnVuY3Rpb24AJQN3YmcbX193YmdfbmV4dF8yNWZlYWRmYzA5MTNmZWE5ACYDd2JnG19fd2JnX25leHRfNjU3NGUxYThhNjJkMTA1NQAmA3diZxpfX3diZ19nZXRfNjdiMmJhNjJmYzMwZGUxMgArA3diZyBfX3diZ19zdHJpbmdpZnlfZjdlZDY5ODc5MzViNGEyNAAmA3diZxpfX3diZ19uZXdfOGE2ZjIzOGE2ZWNlODZlYQACA3diZxxfX3diZ19zdGFja18wZWQ3NWQ2ODU3NWIwZjNjAB0Dd2JnHF9fd2JnX2Vycm9yXzc1MzRiOGU5YTM2ZjFhYjQABQN3YmccX193YmluZGdlbl9iaWdpbnRfZ2V0X2FzX2k2NAAdA3diZxFfX3diaW5kZ2VuX21lbW9yeQACA3diZxBfX3diaW5kZ2VuX3Rocm93AAUDd2JnF19fd2JpbmRnZW5fZGVidWdfc3RyaW5nAB0Dd2JnH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUAAAPZA9cDCggIDAgOCAUEDgUFBgwIBQYGBgYKCgwIFAYIBQgICQYMCQwcCwwKCQQKBgUKDxwIAwoIBQUICgkFBggIBgkGBQsICQUEIgkGBQUFBQUDCAUFBQkFBQgICgYKBQQTBQUFBQQFCAUIBQgFBQgFEAQEBQUKBgoFBQQNCgoABgYFBgghCgYGBQgDAwMDDAYFCAYFDQgDEQkFCwQEBAQFCQUFBgsFEggDBQgDDAgODg4MDAMDDgYGBggDBgwFBQwFBgsICAYDBQUFBAoGBgUZBgYKAwUICgMDAwYGBgMFCAUFBQkKBQoKAwgMCAgICQkJBgYGBggFCQkJCQYGBgYFBQQGBgADAwMDBQYFBQUFBgQFCAgGBgYICAMFAwYNDgsGBgYFAwMJAwMDBAUPFg0MDBcMDRUDCgoGCQYDBQoFAwYFAwMIBgYeCAUFBQYDAwgGBgYEBAQEBAQECAYJHx8jCAwGBgEBAQEBBgYGCwYEDAYDBgYGBgYGBgYFBgQICAUIBAQECAQECQkJBQkJAAYJAwMGBgUGBgYGBgYGBgYGBgYABQAGCAYGBgYGBQUFBgkGBQUFBQUFBgYGBgYEBAYDAwUBBQQEBAQEBAQEBAQEBAUFBQEGAAEBAQEABAkCcAFra28AgAEFAwEAEgYJAX8BQYCAwAALB+sBDAZtZW1vcnkCABFfX3diZ19lbmdpbmVfZnJlZQC8AQplbmdpbmVfbmV3AL4BDWVuZ2luZV9yZW5kZXIA8wIPaW5pdF9wYW5pY19ob29rALACEV9fd2JpbmRnZW5fbWFsbG9jAMACEl9fd2JpbmRnZW5fcmVhbGxvYwDLAhRfX3diaW5kZ2VuX2V4bl9zdG9yZQCdAxdfX2V4dGVybnJlZl90YWJsZV9hbGxvYwD/AxNfX3diaW5kZ2VuX2V4cG9ydF80AQEPX193YmluZGdlbl9mcmVlAIYDEF9fd2JpbmRnZW5fc3RhcnQALwneAQIAQQELasgD5gPnA8cDwwPC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CEEAIQpBACEADAELAkACQCAAQQ1JDQAgAEEQIABBEEsbIQoCQAJAIABB/v//B0sNACAKQYCAgMB9ciEIIAoQvAIhCgwBC0H////HfSEIIAoQ9gEhCgsgCkUNBiAARQ0BIAogBSAA/AoAAAwBCyADQQA2AJcBIANCADcDkAEgAyAAQcABcjoAmwECQCAARQ0AIANBkAFqIAUgAPwKAAALIAMoApgBIQggAygClAEhACADKAKQASEKCyAIQYCAgHhxQYCAgNB9Rg0ECwJAIA8gAUEYbGoiAS0AE0HYAUcNACABQQhqENMCCyABIAg2AhAgASAANgIMIAEgCjYCCAwFCyABIAlGDQMCQCAPDQAgAiAMQX9qIARB8NHAABDGASAFIAAQTiEBDAULIAIgDCAEQYDSwAAQxgEgBSAAEMQBIQEMBAsgAyACNgKQASADIANBjAFqNgKYASADIANBiAFqNgKUASADQZABahCUAgALIAEgCkHg0cAAEKECAAtBjNPAABDQAgALIAIgCSAEQZDSwAAQxgEgBSAAEE4hAQsCQCAGQf8BcUETRg0AIAEgBjYCAAsCQCAHQf8BcUETRg0AIAEgBzYCBAsgASABLwEUIA5yIA1Bf3NxOwEUAkAgDEEBaiIBQf//A3EgEEH//wNxIg1PDQACQAJAA0AgAyAEOwGMASADIAE7AYgBIAFB//8DcSIFIAIvAQwiAEkNASAEIAIvAQ4iCEH//wNxIgdJDQEgBSAAIAIvARAiCkH//wNxaiIGQf//AyAGQf//A0kbQf//A3FPDQEgBCAHIAIvARJqIgVB//8DIAVB//8DSRtB//8DcU8NASACKAIIIgUgASAAayAEIAhrIApsakH//wNxIgBNDQICQCACKAIEIABBGGxqIgAtABNB2AFHDQAgAEEIahDTAgsgAEIANwAJIABBIDoACCAAQcEBOgATIABBADoAFiAAQQA7ARQgAEEAOgAEIABBADoAACAAQRFqQQA7AAAgAUEBaiIBQf//A3EgDU8NAwwACwsgAyACNgKQASADIANBjAFqNgKYASADIANBiAFqNgKUASADQZABahCUAgALIAAgBUGg0sAAEKECAAsgAygCLCEBIBAhDAwACwsgA0GgAWokAA8LIAcgBSABIABB7LjAABCNAwALIA8gDjYCACADIAMoAogBNgKUASADIAMo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oQIAC0GM08AAENACAAsgAyACNgIQIAMgA0EOajYCGCADIANBDGo2AhQgA0EQahCUAgALIAEgBEGM1MAAEKECAAtBjNPAABDQAgALIAMgAjYCECADIANBDmo2AhggAyADQQxqNgIUIANBEGoQlAIACyABIAhB7NPAABChAgALQYzTwAAQ0AIACyADIAI2AhAgAyADQQ5qNgIYIAMgA0EMajYCFCADQRBqEJQCAAsgASAIQfzTwAAQoQIAC0GM08AAENACAAsgAyACNgIQIAMgA0EOajYCGCADIANBDGo2AhQgA0EQahCUAgALIAEgBkHc08AAEKECAAtBjNPAABDQAgAL9CcCHH8DfiMAQcAGayIFJAACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCABKQMAIiFCAFENACABKQMIIiJCAFENASABKQMQIiNCAFENAiAjICFCf4VWDQMgISAiVA0EIAEuARghASAFICE+AgwgBUEBQQIgIUKAgICAEFQiBhs2AqwBIAVBACAhQiCIpyAGGzYCEAJAQZgBRQ0AIAVBFGpBAEGYAfwLAAsCQEGcAUUNACAFQbQBakEAQZwB/AsACyAFQQE2ArABIAVBATYC0AIgAawgIUJ/fHl9QsKawegEfkKAoc2gtAJ8QiCIpyIGwSEHAkACQCABQQBIDQAgBUEMaiABEG4aDAELIAVBsAFqQQAgAWvBEG4aCwJAAkAgB0F/Sg0AIAVBDGpBACAHa0H//wNxEEkaDAELIAVBsAFqIAZB//8BcRBJGgsCQEGkAUUNACAFQZwFaiAFQbABakGkAfwKAAALIAMhCAJAIANBCkkNACAFQZwFakF4aiEJIAMhCANAIAUoArwGIgFBKU8NBwJAIAFFDQACQAJAIAFBAnQiAUF8aiIKDQAgBUGcBWogAWohAUIAISEMAQsgCSABaiEBIApBAnZBAWpB/v///wdxIQZCACEhA0AgAUEEaiILICFCIIYgCzUCAIQiIUKAlOvcA4AiIj4CACABICEgIkKAlOvcA359QiCGIAE1AgCEIiFCgJTr3AOAIiI+AgAgISAiQoCU69wDfn0hISABQXhqIQEgBkF+aiIGDQALIAFBCGohASAhQiCGISELIApBBHENACABQXxqIgEgISABNQIA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QAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgASgCACIEQYCAgIB4c0EVIARBAEgbDhYAAQIDBAUGBwgJCgsMDQ4PEBESExQVAAsgAS0ABCEBIANBADoACCADIAE6AAkgA0EIaiACQaCBwAAQmgIhASAAQZWAgIB4NgIIIAAgATYCAAwYCyABMQAEIRsgA0EBOgAIIAMgGzcDECADQQhqIAJBoIHAABCaAiEBIABBlYCAgHg2AgggACABNgIADBcLIAEzAQQhGyADQQE6AAggAyAbNwMQIANBCGogAkGggcAAEJoCIQEgAEGVgICAeDYCCCAAIAE2AgAMFgsgATUCBCEbIANBAToACCADIBs3AxAgA0EIaiACQaCBwAAQmgIhASAAQZWAgIB4NgIIIAAgATYCAAwVCyABKQMIIRsgA0EBOgAIIAMgGzcDECADQQhqIAJBoIHAABCaAiEBIABBlYCAgHg2AgggACABNgIADBQLIAEwAAQhGyADQQI6AAggAyAbNwMQIANBCGogAkGggcAAEJoCIQEgAEGVgICAeDYCCCAAIAE2AgAMEwsgATIBBCEbIANBAjoACCADIBs3AxAgA0EIaiACQaCBwAAQmgIhASAAQZWAgIB4NgIIIAAgATYCAAwSCyABNAIEIRsgA0ECOgAIIAMgGzcDECADQQhqIAJBoIHAABCaAiEBIABBlYCAgHg2AgggACABNgIADBELIAEpAwghGyADQQI6AAggAyAbNwMQIANBCGogAkGggcAAEJoCIQEgAEGVgICAeDYCCCAAIAE2AgAMEAsgASoCBCEdIANBAzoACCADIB27OQMQIANBCGogAkGggcAAEJoCIQEgAEGVgICAeDYCCCAAIAE2AgAMDwsgASsDCCEeIANBAzoACCADIB45AxAgA0EIaiACQaCBwAAQmgIhASAAQZWAgIB4NgIIIAAgATYCAAwOCyAAIAIgASgCBBC9AQwNCyAAIAIgAUEEahCXAgwMCyABKQIEIRsgA0EFOgAIIAMgGzcCDCADQQhqIAJBoIHAABCaAiEBIABBlYCAgHg2AgggACABNgIADAsLIAAgAiABQQRqEJgCDAoLIAEpAgQhGyADQQY6AAggAyAbNwIMIANBCGogAkGggcAAEJoCIQEgAEGVgICAeDYCCCAAIAE2AgAMCQsgA0EIOgAIIANBCGogAkGggcAAEJoCIQEgAEGVgICAeDYCCCAAIAE2AgAMCAsgA0EIakEIaiABKAIEIgFBCGopAwA3AwAgAyABKQMANwMIIAAgAiADQQhqEMMCIAFBEEEIEKoDDAcLIANBBzoACCADQQhqIAJBoIHAABCaAiEBIABBlYCAgHg2AgggACABNgIADAYLIANBCGpBCGogASgCBCIBQQhqKQMANwMAIAMgASkDADcDCCAAIAIgA0EIahDEAiABQRBBCBCqAwwFCyACKAIEIQUgAigCACEGIAEoAgwhByABKAIIIQIgAyABKAIENgJgIAMgAjYCWCADIAIgB0EEdGoiCDYCZAJAIAcNACACIQEMAwsgAyACQRBqIgE2AlwgAigCACIHQZWAgIB4Rg0CIANBMGpBDGogAkEMaigCADYCACADIAIpAgQ3AjQgAyAHNgIwIANBATYCaCADQfAAaiADQTBqEHMCQCADLQBwQQFHDQAgAygCdCECIABBlYCAgHg2AgggACACNgIADAQLIAMtAHEhASADQYABaiADQdgAahCEASADKAKAAUGVgICAeEYNASADQT9qIANBgAFqQQhqKQMAIhs3AAAgACABOgAAIAMgAykDgAE3ADcgACADKQAwNwABIABBEGoiAiAbNwAAIABBCWogA0EwakEIaikAADcAACADKAJkIQggAygCXCEBIAAoAghBlYCAgHhGDQMgA0EIakEQaiACKQMANwMAIANBCGpBCGogAEEIaikDADcDACADIAApAwA3AwggCCABa0EEdiEFIAMoAmghCSADKAJgIQcgAygCWCEGAkAgCCABRiIIDQAgBSECA0AgARC4ASABQRBqIQEgAkF/aiICDQALCwJAIAdFDQAgBiAHQQR0QQgQqgMLIAgNBCADIAk2AjAgBSAJaiADQTBqQfCCwAAQjwIhASAAQZWAgIB4NgIIIAAgATYCACADQRBqELYBDAQLIAIoAgQhCiACKAIAIQsgAyAENgIgIANBADYCKCADQZWAgIB4NgIIIAMgASgCBCIMNgIcIAMgDDYCGCADIAwgASgCCCIBQQV0IgJqIg02AiQCQAJAAkACQCABDQAgA0EANgJUIANCgICAgIABNwJMIAwhAgwBCxCBBAJAAkAgAUGAgAIgAUGAgAJJGyIBQQV0IgdBCBDKAyII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CCAEa00NACADQQhqIAQgCBDwASADKAIMIQYgAygCECELCyAGIAtqIQsCQAJAIAcNACAKQT9xQYB/ciEHIApBBnYhDQJAIApBgBBPDQAgCyAHOgABIAsgDUHAAXI6AAAMAgsgCkEMdiEOIA1BP3FBgH9yIQ0CQCAKQf//A0sNACALIAc6AAIgCyANOgABIAsgDkHgAXI6AAAMAgsgCyAHOgADIAsgDToAAiALIA5BP3FBgH9yOgABIAsgCkESdkFwcjoAAAwBCyALIAo6AAALIAMgCCAEaiILNgIQDAQLIAMgCiALaiIINgIQAkACQCAEQYABSSIHRQ0AQQEhCgwBCwJAIARBgBBPDQBBAiEKDAELQQNBBCAEQYCABEkbIQoLIAghCwJAIAogAygCCCAIa00NACADQQhqIAggChDwASADKAIQIQsLIAMoAgwiBiALaiELAkACQCAHDQAgBEE/cUGAf3IhByAEQQZ2IQ0CQCAEQYAQTw0AIAsgBzoAASALIA1BwAFyOgAADAILIARBDHYhDiANQT9xQYB/ciENAkAgBEH//wNLDQAgCyAHOgACIAsgDToAASALIA5B4AFyOgAADAILIAsgBzoAAyALIA06AAIgCyAOQT9xQYB/cjoAASALIARBEnZBcHI6AAAMAQsgCyAEOgAACyADIAogCGoiCzYCEAwDCyADIAggC2oiCzYCEAwCC0GDASEHCyALIQQCQCADKAIIIAtrQQFLDQAgA0EIaiALQQIQ8AEgAygCECEECyADKAIMIgYgBGoiBCAHOgABIARBzwE6AAAgAyALQQJqIgs2AhAgECEMIA4hCQsgCSAPRw0ACwsgACADKQIINwIAIABBCGogA0EIakEIaigCADYCACADQSBqJAAPCyAEIAIQ9wIACyABIAIgE0ECaiACQfjtwgAQjQMACyABIAJBACATQejtwgAQjQMAC4YlBB1/An4BfQF8IwBBoAFrIgIkAEEAIQNBgICAgHghBAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAEoAgAiBUGAgICAeHNBFSAFQQBIGw4WAAECAwQFBgcICQoLDA0ODxAREhMUFQALIAEtAAQhASACQQA6ADggAiABOgA5IAJBOGogAkGfAWpByKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDBcLIAExAAQhHyACQQE6ADggAiAfNwNAIAJBOGogAkGfAWpByKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDBYLIAEzAQQhHyACQQE6ADggAiAfNwNAIAJBOGogAkGfAWpByKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDBULIAE1AgQhHyACQQE6ADggAiAfNwNAIAJBOGogAkGfAWpByKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDBQLIAEpAwghHyACQQE6ADggAiAfNwNAIAJBOGogAkGfAWpByKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDBMLIAEwAAQhHyACQQI6ADggAiAfNwNAIAJBOGogAkGfAWpByKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDBILIAEyAQQhHyACQQI6ADggAiAfNwNAIAJBOGogAkGfAWpByKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDBELIAE0AgQhHyACQQI6ADggAiAfNwNAIAJBOGogAkGfAWpByKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDBALIAEpAwghHyACQQI6ADggAiAfNwNAIAJBOGogAkGfAWpByKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDA8LIAEqAgQhISACQQM6ADggAiAhuzkDQCACQThqIAJBnwFqQcinwAAQmgIhASAAQYGAgIB4NgIAIAAgATYCBAwOCyABKwMIISIgAkEDOgA4IAIgIjkDQCACQThqIAJBnwFqQcinwAAQmgIhASAAQYGAgIB4NgIAIAAgATYCBAwNCyABKAIEIQEgAkEANgIQIAFBgAFJDQogAUE/cUGAf3IhBiABQQZ2IQcCQCABQYAQTw0AIAIgBjoAESACIAdBwAFyOgAQQQIhAQwMCyABQQx2IQMgB0E/cUGAf3IhBwJAIAFB//8DSw0AIAIgBjoAEiACIAc6ABEgAiADQeABcjoAEEEDIQEMDAsgAiAGOgATIAIgBzoAEiACIANBP3FBgH9yOgARIAIgAUESdkFwcjoAEEEEIQEMCwsgASgCBCEGIAEoAgghByACIAEoAgw2AkAgAiAHNgI8IAJBBToAOCACQThqIAJBnwFqQcinwAAQmgIhASAAQYGAgIB4NgIAIAAgATYCBCAGRQ0LIAcgBkEBEKoDDAsLIAEpAgQhHyACQQU6ADggAiAfNwI8IAJBOGogAkGfAWpByKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDAoLIAJBCGogAUEMaigCADYCACACIAEpAgQ3AwAgACACEI0CDAkLIAEpAgQhHyACQQY6ADggAiAfNwI8IAJBOGogAkGfAWpByKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDAgLIAJBCDoAOCACQThqIAJBnwFqQcinwAAQmgIhASAAQYGAgIB4NgIAIAAgATYCBAwHCyACQThqQQhqIAEoAgQiAUEIaikDADcDACACIAEpAwA3AzggACACQThqELgCIAFBEEEIEKoDDAYLIAJBBzoAOCACQThqIAJBnwFqQcinwAAQmgIhASAAQYGAgIB4NgIAIAAgATYCBAwFCyACQThqQQhqIAEoAgQiAUEIaikDADcDACACIAEpAwA3AzggACACQThqELoCIAFBEEEIEKoDDAQLIAEoAggiByABKAIMIghBBHRqIQMgASgCBCEFIAchBgJAAkACQCAIRQ0AIAdBEGohBiAHKAIAIgFBlYCAgHhGDQAgAkHgAGpBDGogB0EMaigCADYCACACIAcpAgQ3AmQgAiABNgJgIAJBEGogAkHgAGogAiACIAIgAhA1IAIoAhQhCAJAIAIoAhAiBEGBgICAeEcNACAAQYGAgIB4NgIAIAAgCDYCBAwDCyACQZABaiACQSBqKQIANwMAIAIgAikCGDcDiAFBASEJDAELQQAhCSACQZQBakEAOwEAIAJCADcCjAFBgICAgHghBAsCQAJAAkAgBiADRw0AIAMhAUGAgICAeCEGDAELIAZBEGohAQJAIAYoAgAiCkGVgICAeEcNAEGAgICAeCEGDAELIAJBEGpBDGogBkEMaigCADYCACACIAYpAgQ3AhQgAiAKNgIQIAJB4ABqIAJBEGoQgAEgAigCZCEKIAIoAmAiBkGAgICAeEYNASAJQQFqIQkgAigCaCELCyAAIAg2AhQgAEGAgICAeDYCACAAQRBqIgwgBDYCACAAQRhqIgQgAikDiAE3AgAgAEEgaiINIAJBiAFqQQhqKQMANwIAIABBACALIAZBgICAgHhGIggbNgIMIABBCGoiC0EEIAogCBs2AgAgAEEAIAYgCBs2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AEH4h8QANgKAiERBAEGIiMQANgKUiERBAEGAiMQANgKIiERBAEGIiMQANgKQiERBAEGQiMQANgKciERBAEGQiMQANgKYiERBAEGYiMQANgKkiERBAEGYiMQANgKgiERBAEGgiMQANgKsiERBAEGgiMQANgKoiERBAEGoiMQANgK0iERBAEGoiMQANgKwiERBAEGwiMQANgK8iERBAEGwiMQANgK4iERBAEG4iMQANgLEiERBAEG4iMQANgLAiERBAEHAiMQANgLMiERBAEHAiMQANgLIiERBAEHIiMQANgLUiERBAEHQiMQANgLciERBAEHIiMQANgLQiERBAEHYiMQANgLkiERBAEHQiMQANgLYiERBAEHgiMQANgLsiERBAEHYiMQANgLgiERBAEHoiMQANgL0iERBAEHgiMQANgLoiERBAEHwiMQANgL8iERBAEHoiMQANgLwiERBAEH4iMQANgKEiURBAEHwiMQANgL4iERBAEGAicQANgKMiURBAEH4iMQANgKAiURBAEGIicQANgKUiURBAEGAicQANgKIiURBAEGQicQANgKciURBAEGIicQANgKQiURBAEGYicQANgKkiURBAEGQicQANgKYiURBAEGgicQANgKsiURBAEGYicQANgKgiURBAEGoicQANgK0iURBAEGgicQANgKoiURBAEGwicQANgK8iURBAEGoicQANgKwiURBAEG4icQANgLEiURBAEGwicQANgK4iURBAEHAicQANgLMiURBAEG4icQANgLAiURBACAGQQ9qQXhxIgBBeGoiAjYC5IlEQQBBwInEADYCyIlEQQAgBiAAayAJQVhqIgBqQQhqIgc2AtyJRCACIAdBAXI2AgQgBiAAakEoNgIEQQBBgICAATYC8IlEDAgLIAIgBk8NACAHIAJLDQAgACgCDCIHQQFxDQAgB0EBdiAFRg0DC0EAQQAoAvSJRCIAIAYgACAGSRs2AvSJRCAGIAlqIQdBuIfEACEAAkACQAJAA0AgACgCACIIIAdGDQEgACgCCCIADQAMAgsLIAAoAgwiB0EBcQ0AIAdBAXYgBUYNAQtBuIfEACEAAkADQAJAIAAoAgAiByACSw0AIAIgByAAKAIEaiIHSQ0CCyAAKAIIIQAMAAsLQQAgBkEPakF4cSIAQXhqIgg2AuSJREEAIAYgAGsgCUFYaiIAakEIaiIENgLciUQgCCAEQQFyNgIEIAYgAGpBKDYCBEEAQYCAgAE2AvCJRCACIAdBYGpBeHFBeGoiACAAIAJBEGpJGyIIQRs2AgRBACkCuIdEIQogCEEQakEAKQLAh0Q3AgAgCEEIaiIAIAo3AgBBACAFNgLEh0RBACAJNgK8h0RBACAGNgK4h0RBACAANgLAh0QgCEEcaiEAA0AgAEEHNgIAIABBBGoiACAHSQ0ACyAIIAJGDQcgCCAIKAIEQX5xNgIEIAIgCCACayIAQQFyNgIEIAggADYCAAJAIABBgAJJDQAgAiAAEKQBDAgLAkACQEEAKALQiUQiB0EBIABBA3Z0IgZxDQBBACAHIAZyNgLQiUQgAEH4AXFByIfEAGoiACEHDAELIABB+AFxIgBByIfEAGohByAAQdCHxABqKAIAIQALIAcgAjYCCCAAIAI2AgwgAiAHNgIMIAIgADYCCAwHCyAAIAY2AgAgACAAKAIEIAlqNgIEIAZBD2pBeHFBeGoiByADQQNyNgIEIAhBD2pBeHFBeGoiAiAHIANqIgBrIQMgAkEAKALkiURGDQMgAkEAKALgiURGDQQCQCACKAIEIgZBA3FBAUcNACACIAZBeHEiBhCUASAGIANqIQMgAiAGaiICKAIEIQYLIAIgBkF+cTYCBCAAIANBAXI2AgQgACADaiADNgIAAkAgA0GAAkkNACAAIAMQpAEMBgsCQAJAQQAoAtCJRCICQQEgA0EDdnQiBnENAEEAIAIgBnI2AtCJRCADQfgBcUHIh8QAaiIDIQIMAQsgA0H4AXEiA0HIh8QAaiECIANB0IfEAGooAgAhAwsgAiAANgIIIAMgADYCDCAAIAI2AgwgACADNgIIDAULQQAgACADayICNgLciURBAEEAKALkiUQiACADaiIHNgLkiUQgByACQQFyNgIEIAAgA0EDcjYCBCAAQQhqIQAMBgtBACgC4IlEIQICQAJAIAAgA2siB0EPSw0AQQBBADYC4IlEQQBBADYC2IlEIAIgAEEDcjYCBCACIABqIgAgACgCBEEBcjYCBAwBC0EAIAc2AtiJREEAIAIgA2oiBjYC4IlEIAYgB0EBcjYCBCACIABqIAc2AgAgAiADQQNyNgIECyACQQhqIQAMBQsgACAIIAlqNgIEQQBBACgC5IlEIgBBD2pBeHEiAkF4aiIHNgLkiURBACAAIAJrQQAoAtyJRCAJaiICakEIaiIGNgLciUQgByAGQQFyNgIEIAAgAmpBKDYCBEEAQYCAgAE2AvCJRAwDC0EAIAA2AuSJREEAQQAoAtyJRCADaiIDNgLciUQgACADQQFyNgIEDAELQQAgADYC4IlEQQBBACgC2IlEIANqIgM2AtiJRCAAIANBAXI2AgQgACADaiADNgIACyAHQQhqIQAMAQtBACEAQQAoAtyJRCICIANNDQBBACACIANrIgI2AtyJREEAQQAoAuSJRCIAIANqIgc2AuSJRCAHIAJBAXI2AgQgACADQQNyNgIEIABBCGohAAsgAUEQaiQAIAALpSICG38CfiMAQeAAayIGJABBACEHQYCAgIB4IQgCQAJAAkACQAJAAkACQAJAAkAgASgCACIJQYCAgIB4c0EVIAlBAEgbQWxqDgIBAgALIAEgBkHfAGpBsIDAABDSAiEKIABBgICAgHg2AgAgACAKNgIEDAcLIAEoAggiCyABKAIMIgpBBHRqIQwgASgCBCENQQEhDkEAIQcCQAJAIAoNAEEAIQ9BACEIIAshCgwBCyALQRBqIQoCQCALKAIAIhBBlYCAgHhHDQBBACEPQQAhCAwBCyAGQQxqIAtBDGooAgA2AgAgBiALKQIENwIEIAYgEDYCACAGQcgAaiAGEJkBIAYoAkwhDgJAIAYoAkgiB0GAgICAeEcNACAAQYCAgIB4NgIAIAAgDjYCBAwGCyAGKAJQIQhBASEPCyAMIRACQAJAAkACQCAKIAxGDQAgCkEQaiEQQQAhEQJAIAooAgAiEkGVgICAeEYNACAGQQxqIApBDGooAgA2AgAgBiAKKQIENwIEIAYgEjYCACAGQcgAaiAGEG8gBi8BSA0HIA9BAWohDyAGLwFKIRELIBAgDEYhEiAMIRAgEg0AIApBIGohEEEAIRMCQCAKKAIQIhJBlYCAgHhGDQAgBkEMaiAKQRxqKAIANgIAIAYgCikCFDcCBCAGIBI2AgAgBkHIAGogBhBvIAYvAUgNBiAPQQFqIQ8gBi8BSiETCyAQIAxGIRIgDCEQIBINACAKQTBqIRAgCigCICISQZWAgIB4Rg0AIAZBDGogCkEsaigCADYCACAGIAopAiQ3AgQgBiASNgIAIAZByABqIAYQxQEgBigCTCESIAYoAkgiFEGBgICAeEYNASAQIAxGIRUgDCEQIBUNAiAKQcAAaiEQIAooAjAiFUGVgICAeEYNAiAGKAJQIRYgBkEMaiAKQTxqKAIANgIAIAYgCikCNDcCBCAGIBU2AgAgBkHIAGogBhDFASAGKAJMIRUgBigCSCIXQYGAgIB4Rg0DIAYoAlAhCiAAIBM7ASYgACAROwEkIAAgCjYCICAAIBU2AhwgACAXNgIYIAAgFjYCFCAAIBI2AhAgACAUNgIMIAAgCDYCCCAAIA42AgQgACAHNgIAIAwgEGtBBHYhEQJAIAwgEEYiDA0AIBEhCgNAIBAQuAEgEEEQaiEQIApBf2oiCg0ACwsCQCANRQ0AIAsgDUEEdEEIEKoDCyAMDQkgBiAPQQJqIgo2AgAgCiARaiAGQfCCwAAQjwIhCiAAQYCAgIB4NgIAIAAgCjYCBAJAIAdFDQAgDiAHQQEQqgMLAkAgFEGAgICAeHJBgICAgHhGDQAgEiAUQQEQqgMLIBdBgICAgHhyQYCAgIB4Rg0JIBUgF0EBEKoDDAkLQQNB2ILAAEGUgsAAEI8CIRILIABBgICAgHg2AgAgACASNgIEDAULQQRB2ILAAEGUgsAAEI8CIRULIABBgICAgHg2AgAgACAVNgIEIBRBgICAgHhyQYCAgIB4Rg0DIBIgFEEBEKoDDAMLIAEoAgghCiABKAIEIQ0gBiAJNgIYIAYgDTYCFCAGIA02AhAgBkEANgIgIAZBlYCAgHg2AgAgBiANIApBBXQiDGoiFzYCHAJAAkAgCg0AIA0hCkGBgICAeCEUQYGAgIB4IRNBACEQQQAhDAwBCwJAAkAgDSgCACIQQZWAgIB4Rw0AIA1BIGohCkGBgICAeCETQYCAgIB4IQhBACEHQQAhGEEAIRlBgYCAgHghFAwBCyAGQcgAakEEciESIAZBBHIhESAMQWBqIRVBASELQQAhDEEAIRhBACEZQYGAgIB4IRRBgYCAgHghE0GAgICAeCEIAkADQCALIQcgDSAMaiIKQQRqKAIAIQsgCkEIaigCACEOIApBDGooAgAhDyAGQQhqIApBGGopAgA3AwAgBiAKQRBqKQIANwMAIAYgDzYCRCAGIA42AkAgBiALNgI8IAYgEDYCOAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAQQYCAgIB4c0EVIBBBAEgbQX9qDg8ABwcBBwcHBwcHBwIDBgQHCyALQf8BcSIQQQUgEEEFSRshEAwJCyAGKQNAIiFCBSAhQgVUG6chEAwICwJAAkACQAJAAkACQCAPQX9qDggBBAQEAgQAAwQLIA5B5KjAAEEHEKQCDQNBACEQDAQLQQFBAkEFIA4tAAAiEEH5AEYbIBBB+ABGGyEQDAMLIA5B66jAAEEFEKQCDQFBAyEQDAILIA4pAABBACkA8KhAUg0AQQQhEAwBC0EFIRALIAYgEDoALSALRQ0IIA4gC0EBEKoDDAgLAkACQAJAAkACQCAOQX9qDggBBAQEAgQAAwQLIAtB5KjAAEEHEKQCDQNBACEQDAoLQQFBAkEFIAstAAAiEEH5AEYbIBBB+ABGGyEQDAkLIAtB66jAAEEFEKQCDQFBAyEQDAgLIAspAABBACkA8KhAUQ0CC0EFIRAMBgsCQAJAAkACQCAOQX9qDggBCAgIAggAAwgLIAstAABB4wBHDQcgCy0AAUHvAEcNByALLQACQe4ARw0HIAstAANB9ABHDQcgCy0ABEHlAEcNByALLQAFQe4ARw0HIAstAAZB9ABHDQdBACEQDAgLQQFBAkEFIAstAAAiEEH5AEYbIBBB+ABGGyEQDAcLIAstAABB4wBHDQUgCy0AAUHvAEcNBSALLQACQewARw0FIAstAANB7wBHDQUgCy0ABEHyAEcNBUEDIRAMBgsgCy0AAEHiAEcNBCALLQABQecARw0EIAstAAJB3wBHDQQgCy0AA0HjAEcNBCALLQAEQe8ARw0EIAstAAVB7ABHDQQgCy0ABkHvAEcNBCALLQAHQfIARw0EC0EEIRAMBAsgBiAPNgJQIAYgDjYCTCAGIAs2AkggBkEsaiAGQcgAahClASAGLQAsDQEMBAsgBiAHNgIgIAYgCkEgajYCFCAGIAZBOGogBkHfAGpB8IDAABDSAjYCMAwECyAGIAc2AiAgBiAKQSBqNgIUDAMLQQUhEAsgBiAQOgAtIAZBOGoQtgELAkACQAJAAkACQAJAIAYtAC0OBQECAwQFAAsgBigCACEQIAZBlYCAgHg2AgAgEEGVgICAeEYNBiASIBEpAgA3AgAgEkEIaiARQQhqKAIANgIAIAYgEDYCSCAGQcgAahC2AQwQCwJAIAhBgICAgHhGDQAgBiAHNgIgIAYgCkEgajYCFEGkgsAAQQcQqgIhEAwOCyAGKAIAIRAgBkGVgICAeDYCACAQQZWAgIB4Rg0GIBIgESkCADcCACASQQhqIBFBCGooAgA2AgAgBiAQNgJIIAZBLGogBkHIAGoQmQEgBigCMCEQAkAgBigCLCIIQYCAgIB4Rw0AIAYgBzYCICAGIApBIGo2AhRBgICAgHghCAwOCyAGKAI0IRogECEWDA8LIBlB//8DcUEBRg0LIAYoAgAhECAGQZWAgIB4NgIAIBBBlYCAgHhGDQYgEiARKQIANwIAIBJBCGogEUEIaigCADYCACAGIBA2AkggBkEsaiAGQcgAahBvAkAgBi8BLEEBRw0AIAYgBzYCICAGIApBIGo2AhQMBAsgBi8BLiEbQQEhGQwOCyAYQf//A3FBAUYNCSAGKAIAIRAgBkGVgICAeDYCACAQQZWAgIB4Rg0GIBIgESkCADcCACASQQhqIBFBCGooAgA2AgAgBiAQNgJIIAZBLGogBkHIAGoQbwJAIAYvASxBAUcNACAGIAc2AiAgBiAKQSBqNgIUDAMLIAYvAS4hHEEBIRgMDQsCQCATQYGAgIB4Rg0AIAYgBzYCICAGIApBIGo2AhRBq4LAAEEFEKoCIRAMCwsgBigCACEQIAZBlYCAgHg2AgAgEEGVgICAeEYNBiASIBEpAgA3AgAgEkEIaiARQQhqKAIANgIAIAYgEDYCSCAGQSxqIAZByABqEMUBIAYoAjAhEAJAIAYoAiwiE0GBgICAeEcNACAGIAc2AiAgBiAKQSBqNgIUQYGAgIB4IRMMCwsgBigCNCEdIBAhHgwMCwJAIBRBgYCAgHhGDQAgBiAHNgIgIAYgCkEgajYCFEGwgsAAQQgQqgIhEAwKCyAGKAIAIRAgBkGVgICAeDYCACAQQZWAgIB4Rg0GIBIgESkCADcCACASQQhqIBFBCGooAgA2AgAgBiAQNgJIIAZBLGogBkHIAGoQxQEgBigCMCEfAkAgBigCLCIUQYGAgIB4Rw0AIAYgBzYCICAGIApBIGo2AhQgAEGAgICAeDYCACAAIB82AgQMCwsgBigCNCEgDAsLIAYoAjAhEAwICyAGIAc2AiAgBiAKQSBqNgIUQYCDwABBLEGop8AAEL8CAAsgBiAHNgIgIAYgCkEgajYCFEGAg8AAQSxBqKfAABC/AgALIAYgBzYCICAGIApBIGo2AhRBgIPAAEEsQainwAAQvwIACyAGIAc2AiAgBiAKQSBqNgIUQYCDwABBLEGop8AAEL8CAAsgBiAHNgIgIAYgCkEgajYCFEGAg8AAQSxBqKfAABC/AgALIAYgBzYCICAGIApBIGo2AhRBgIPAAEEsQainwAAQvwIACyAGIAc2AiAgBiAKQSBqNgIUQeGBwABBARCqAiEQDAELIAYgBzYCICAGIApBIGo2AhRB4IHAAEEBEKoCIRALIABBgICAgHg2AgAgACAQNgIEIBRBgoCAgHhIDQAgFEUNACAfIBRBARCqAwsCQCATQYKAgIB4SA0AIBNFDQAgHiATQQEQqgMLAkAgCEGAgICAeHJBgICAgHhGDQAgFiAIQQEQqgMLAkAgFSAMRg0AIApBMGohCiAVIAxrQQV2IRADQCAKQXBqELgBIAoQuAEgCkEgaiEKIBBBf2oiEA0ACwsCQCAJRQ0AIA0gCUEFdEEIEKoDCyAGKAIAQZWAgIB4Rg0JIAYQtgEMCQsgFSAMRg0BIAdBAWohCyAMQSBqIQwgCkEgaigCACIQQZWAgIB4Rw0ACyANIAxqQSBqIQoMAQsgCkEgaiEKCyAGIAc2AiAgBiAKNgIUIBxBACAYQQFxGyEQIBtBACAZQQFxGyEMICCtQiCGIB+thCEhIB2tQiCGIB6thCEiCyAAIBA7ASYgACAMOwEkIAAgITcCHCAAICI3AhAgAEGAgICAeCAUIBRBgYCAgHhGGyIPNgIYIABBgICAgHggEyATQYGAgIB4RhsiEjYCDCAAQQAgGiAIQYCAgIB4RiIQGzYCCCAAQQEgFiAQGyITNgIEIABBACAIIBAbIgs2AgAgFyAKa0EFdiERIAYoAgAhDgJAIBcgCkYiDA0AIBEhEANAIAoQuAEgCkEQahC4ASAKQSBqIQogEEF/aiIQDQALCwJAIAlFDQAgDSAJQQV0QQgQqgMLAkAgDA0AIAYgBzYCSCAHIBFqIAZByABqQeCCwAAQjwIhCgsCQCAOQZWAgIB4Rg0AIAYQtgELIAwNBCAAQYCAgIB4NgIAIAAgCjYCBAJAIAtFDQAgEyALQQEQqgMLAkAgEkGAgICAeHJBgICAgHhGDQAgIqcgEkEBEKoDCyAPQYCAgIB4ckGAgICAeEYNBCAhpyAPQQEQqgMMBAsgBigCTCEKIABBgICAgHg2AgAgACAKNgIEDAELIAYoAkwhCiAAQYCAgIB4NgIAIAAgCjYCBAsCQCAHRQ0AIA4gB0EBEKoDCyAQIQoLAkAgDCAKRg0AIAwgCmtBBHYhEANAIAoQuAEgCkEQaiEKIBBBf2oiEA0ACwsgDUUNACALIA1BBHRBCBCqAwsgCUF/Sg0AIAlBfnFBlICAgHhGDQAgARC2AQsgBkHgAGokAAuqIAQcfwR+AX0BfCMAQbABayICJABBACEDQYCAgIB4IQQCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCABKAIAIgVBgICAgHhzQRUgBUEASBsOFgABAgMEBQYHCAkKCwwNDg8QERITFBUACyABLQAEIQEgAkEAOgBoIAIgAToAaSACQegAaiACQaABakG4p8AAEJoCIQEgAEGBgICAeDYCACAAIAE2AgQMFwsgATEABCEeIAJBAToAaCACIB43A3AgAkHoAGogAkGgAWpBuKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDBYLIAEzAQQhHiACQQE6AGggAiAeNwNwIAJB6ABqIAJBoAFqQbinwAAQmgIhASAAQYGAgIB4NgIAIAAgATYCBAwVCyABNQIEIR4gAkEBOgBoIAIgHjcDcCACQegAaiACQaABakG4p8AAEJoCIQEgAEGBgICAeDYCACAAIAE2AgQMFAsgASkDCCEeIAJBAToAaCACIB43A3AgAkHoAGogAkGgAWpBuKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDBMLIAEwAAQhHiACQQI6AGggAiAeNwNwIAJB6ABqIAJBoAFqQbinwAAQmgIhASAAQYGAgIB4NgIAIAAgATYCBAwSCyABMgEEIR4gAkECOgBoIAIgHjcDcCACQegAaiACQaABakG4p8AAEJoCIQEgAEGBgICAeDYCACAAIAE2AgQMEQsgATQCBCEeIAJBAjoAaCACIB43A3AgAkHoAGogAkGgAWpBuKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDBALIAEpAwghHiACQQI6AGggAiAeNwNwIAJB6ABqIAJBoAFqQbinwAAQmgIhASAAQYGAgIB4NgIAIAAgATYCBAwPCyABKgIEISIgAkEDOgBoIAIgIrs5A3AgAkHoAGogAkGgAWpBuKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDA4LIAErAwghIyACQQM6AGggAiAjOQNwIAJB6ABqIAJBoAFqQbinwAAQmgIhASAAQYGAgIB4NgIAIAAgATYCBAwNCyABKAIEIQEgAkEANgJAIAFBgAFJDQogAUE/cUGAf3IhBiABQQZ2IQcCQCABQYAQTw0AIAIgBjoAQSACIAdBwAFyOgBAQQIhAQwMCyABQQx2IQMgB0E/cUGAf3IhBwJAIAFB//8DSw0AIAIgBjoAQiACIAc6AEEgAiADQeABcjoAQEEDIQEMDAsgAiAGOgBDIAIgBzoAQiACIANBP3FBgH9yOgBBIAIgAUESdkFwcjoAQEEEIQEMCwsgASgCBCEGIAEoAgghByACIAEoAgw2AnAgAiAHNgJsIAJBBToAaCACQegAaiACQaABakG4p8AAEJoCIQEgAEGBgICAeDYCACAAIAE2AgQgBkUNCyAHIAZBARCqAwwLCyABKQIEIR4gAkEFOgBoIAIgHjcCbCACQegAaiACQaABakG4p8AAEJoCIQEgAEGBgICAeDYCACAAIAE2AgQMCgsgAkEQaiABQQxqKAIANgIAIAIgASkCBDcDCCAAIAJBCGoQjAIMCQsgASkCBCEeIAJBBjoAaCACIB43AmwgAkHoAGogAkGgAWpBuKfAABCaAiEBIABBgYCAgHg2AgAgACABNgIEDAgLIAJBCDoAaCACQegAaiACQaABakG4p8AAEJoCIQEgAEGBgICAeDYCACAAIAE2AgQMBwsgAkHoAGpBCGogASgCBCIBQQhqKQMANwMAIAIgASkDADcDaCAAIAJB6ABqELcCIAFBEEEIEKoDDAYLIAJBBzoAaCACQegAaiACQaABakG4p8AAEJoCIQEgAEGBgICAeDYCACAAIAE2AgQMBQsgAkHoAGpBCGogASgCBCIBQQhqKQMANwMAIAIgASkDADcDaCAAIAJB6ABqELkCIAFBEEEIEKoDDAQLIAEoAgwiBkEEdCEFIAEoAgghByABKAIEIQgCQAJAAkACQAJAIAYNACAHIQEMAQsgB0EQaiEBIAcoAgAiA0GVgICAeEcNAQtBACEEQYCAgIB4IQMMAQsgAkEYakEMaiAHQQxqKAIANgIAIAIgBykCBDcCHCACIAM2AhggAkHoAGogAkEYaiACIAIgAiACEDkgAigCbCEJIAIoAmgiA0GAgICAeEYNASACLwGOASEKIAIvAYwBIQsgAikChAEhHyACKAKAASEMIAIpAnghHiACKAJ0IQ0gAigCcCEOQQEhBAsgAEGAgICAeCANIANBgICAgHhGIgYbNgIMIABBCGoiDUEAIA4gBhs2AgAgACAfNwIcIABBGGoiDkGAgICAeCAMIAYbNgIAIABBACAKIAYbOwEmIABBACALIAYbOwEkIABBASAJIAYbNgIEIABBACADIAYbNgIAIABBEGogHjcCACACQcAAakEQaiAeNwMAIAJBwABqQQhqIA0pAgA3AwAgAkHAAGpBGGogDikCADcDACACQcAAakEgaiAAQSBqKQIANwMAIAIgACkCADcDQCAHIAVqIgYgAWtBBHYhCQJAIAYgAUYiAw0AIAkhBgNAIAEQuAEgAUEQaiEBIAZBf2oiBg0ACwsCQCAIRQ0AIAcgCEEEdEEIEKoDCyADDQQgAiAENgJoIAkgBGogAkHoAGpB8ILAABCPAiEBIABBgYCAgHg2AgAgACABNgIEIAJBwABqENQBDAQLIABBgYCAgHg2AgAgACAJNgIEAkAgBkEBRg0AIAVBcGpBBHYhBgNAIAEQuAEgAUEQaiEBIAZBf2oiBg0ACwsgCEUNAyAHIAhBBHRBCBCqAwwDCyACIAU2AjAgAkEANgI4IAJBlYCAgHg2AhggAiABKAIEIgg2AiwgAiAINgIoIAIgCCABKAIIIgFBBXQiB2oiDzYCNEEBIRACQAJAAkACQAJAAkACQAJAAkAgAQ0AIAghAUEAIREMAQtBgICAgHghBEEAIRECQAJAIAgoAgAiBkGVgICAeEcNACAIQSBqIQFCACEeQQAhA0GAgICAeCELQgAhH0IAISBCACEhDAELIAJB6ABqQQRyIQ0gAkGgAWpBBHIhEiACQRhqQQRyIQkgB0FgaiETQQEhCkEAIQdBgICAgHghCwJAAkADQCAKIQMgAkEYakEIaiAIIAdqIgFBGGopAgA3AwAgAiABQRBqKQIANwMYIAIgAUEMaigCACIMNgKcASACIAFBCGooAgAiDjYCmAEgAiABQQRqKAIAIgo2ApQBIAIgBjYCkAECQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAGQYCAgIB4c0EVIAZBAEgbQX9qDg8HCAgGCAgICAgICAABAgMICwJAAkAgDEEFRw0AIA5B+qvAAEEFEKQCIQYgCg0BIAZBAEchBgwKCyAKRQ0KIA4gCkEBEKoDDAoLIA4gCkEBEKoDIAYNCQwKCyAOQQVHDQIgCkH6q8AAQQUQpAIhBiACQZABahC2ASAGDQgMCQtBASEGAkAgDEEFRw0AIA4tAABB8ABHDQAgDi0AAUHyAEcNACAOLQACQe8ARw0AIA4tAANB8ABHDQAgDi0ABEHzAEchBgsgCkUNBiAOIApBARCqAyAGDQcMCAsgDkEFRw0AIAotAABB8ABHDQAgCi0AAUHyAEcNACAKLQACQe8ARw0AIAotAANB8ABGDQELIAJBkAFqELYBDAULIAotAAQhBiACQZABahC2ASAGQfMARw0EDAULIAIpA5gBIR4gAkGQAWoQtgEgHlANBAwDCyACQZABahC2ASAKQf8BcQ0CDAMLIAIgAzYCOCACIAFBIGo2AiwgAkGQAWogAkGgAWpB0IDAABDSAiEGIABBgYCAgHg2AgAgACAGNgIEIAtBgICAgHhGDQsgC0UNCgwJCyAGRQ0BCyACKAIYIQYgAkGVgICAeDYCGCAGQZWAgIB4Rg0MIA0gCSkCADcCACANQQhqIAlBCGooAgA2AgAgAiAGNgJoIAJB6ABqELYBDAELAkAgC0GAgICAeEYNACACIAM2AjggAiABQSBqNgIsQcCBwABBBRCqAiEGIABBgYCAgHg2AgAgACAGNgIEIAsNBwwICyACKAIYIQYgAkGVgICAeDYCGCAGQZWAgIB4Rg0MIBIgCSkCADcCACASQQhqIAlBCGooAgA2AgAgAiAGNgKgASACQegAaiACQaABaiACIAIgAiACEDkgAigCbCEUAkAgAigCaCILQYCAgIB4Rw0AIAIgAzYCOCACIAFBIGo2AiwgAEGBgICAeDYCACAAIBQ2AgQMCQsgAi8BjgEhFSACLwGMASEWIAIoAogBIRcgAigChAEhGCACKAKAASEZIAIoAnwhGiACKAJ4IRsgAigCdCEcIAIoAnAhHQsgEyAHRg0BIANBAWohCiAHQSBqIQcgAUEgaigCACIGQZWAgIB4Rw0ACyAIIAdqQSBqIQEMAQsgAUEgaiEBCyAXrUIghiEfIBqtQiCGISEgGK0hHiAbrSEgCyACIAM2AjggAiABNgIsIAtBgICAgHhHDQQLQQAhFUGAgICAeCEZQQAhC0EAIR0MBAsgFCALQQEQqgMLAkAgHEGAgICAeHJBgICAgHhGDQAgGyAcQQEQqgMLIBlBgICAgHhyQYCAgIB4Rg0AIBggGUEBEKoDCwJAIBMgB0YNACABQTBqIQEgEyAHa0EFdiEGA0AgAUFwahC4ASABELgBIAFBIGohASAGQX9qIgYNAAsLAkAgBUUNACAIIAVBBXRBCBCqAwsgAigCGEGVgICAeEYNBiACQRhqELYBDAYLIB8gHoQhHyAhICCEIR4gFiERIBwhBCAUIRALIAAgFTsBJiAAIBE7ASQgACAfNwIcIAAgBDYCDCAAQQhqIgYgHTYCACAAQRhqIgcgGTYCACAAIBA2AgQgACALNgIAIABBEGogHjcCACACQcAAakEQaiAeNwMAIAJBwABqQSBqIABBIGopAgA3AwAgAkHAAGpBCGogBikCADcDACACQcAAakEYaiAHKQIANwMAIAIgACkCADcDQCAPIAFrQQV2IQogAigCGCEJAkAgDyABRiIHDQAgCiEGA0AgARC4ASABQRBqELgBIAFBIGohASAGQX9qIgYNAAsLAkAgBUUNACAIIAVBBXRBCBCqAwsCQCAHDQAgAiADNgJoIAMgCmogAkHoAGpB4ILAABCPAiEBCwJAIAlBlYCAgHhGDQAgAkEYahC2AQsgBw0EIABBgYCAgHg2AgAgACABNgIEIAJBwABqENQBDAQLIAIgAzYCOCACIAFBIGo2AixBgIPAAEEsQainwAAQvwIACyACIAM2AjggAiABQSBqNgIsQYCDwABBLEGop8AAEL8CAAsgAiABOgBAQQEhAQsgAiABNgJwIAJBBToAaCACIAJBwABqNgJsIAJB6ABqIAJBoAFqQbinwAAQmgIhASAAQYGAgIB4NgIAIAAgATYCBAsgAkGwAWokAAv0GgIZfwF+IwBBgARrIgIkAAJAAkAgAS8BUEUNACABQShqIQMgAUEcaiEEIAFBOGohBSACQakCaiEGIAJBpQJqIQcgAkHIAmpBAXIhCCACQSxqQfwAaiEJIAJBpAJqIQogAkGdAWohCyACQfACakECaiEMIAJBmQJqIg1BB2ohDgNAAkAgASgCDCIPRQ0AIAEgD0F/ajYCDCABIAEoAggiD0EBaiIQQQAgASgCACIRIBAgEUkbazYCCCABKAIEIA9BDGxqIg8oAgAiEUGAgICAeEYNACAPKQIEIhtCIIinIQkgG6chEkEAIRACQCAbQoCAgIAQVA0AIBJBEGohDyAJQRRsQRRuIQpBACEQA0AgECAPQXxqKAIAIA8oAgAQQmohECAPQRRqIQ8gCkF/aiIKDQALCyABKAIYIRMgASAJNgIYIAEoAhQhFCABIBI2AhQgASgCECEPIAEgETYCEAJAIA9FDQACQCABKAJAIgogASgCOEcNACAFEIQCCyABKAI8IApBDGxqIgkgEzYCCCAJIBQ2AgQgCSAPNgIAIAEgCkEBajYCQCABKAIYIQkgASgCFCESCyAAIBA7AQggACAJNgIEIAAgEjYCACABLQBTIQ8MAwsgASgCRCIPIAEoAkhGDQEgASAPQRxqNgJEIAEoAkwiEC0ADCEUIAwgEEEPai0AADoAACACIBAvAA07AfACIBBBEWohESAPLQAQIRUCQCAPLQAMIhJBE0YNACAMIA9BD2otAAA6AAAgAiAPLwANOwHwAiASIRQLIBAtABAhFiAQLwEUIRcgEC8BFiEYIA8vARQhEiAPLwEWIRMgAkEsakECaiIZIBFBAmotAAA6AAAgAiARLwAAOwEsAkAgFUH/AXFBE0YNACAZIA9BEWoiEUECai0AADoAACACIBEvAAA7ASwgFSEWCyACQRxqQQJqIhUgDC0AADoAACACQRhqQQJqIhogGS0AADoAACACIAIvAfACOwEcIAIgAi8BLDsBGCAPKAIEIREgDygCCCEZIAEgEC0AqQEgDy0AGCIPIA9BA0YbOgBTIBggEkF/c3EhDyAXIBNBf3NxIRAgGUEYbCEZAkACQCABKAJAIhcNACACQoCAgIDAADcDIAwBCyABIBdBf2oiFzYCQCABKAI8IBdBDGxqIhcpAgAhGyACQSBqQQhqIBdBCGooAgA2AgAgAiAbNwMgCyAPIBNyIQ8gECASciEQIBEgGWohEiABQQA2AiQCQCABKAI0RQ0AIAFBADYCNAtBACEXIAFBADYCMCACQQA2AiggByACLwEcOwAAIAdBAmogFS0AADoAACAGIAIvARg7AAAgBkECaiAaLQAAOgAAIAIgFDoApAIgAkECNgKoASACQQI2AiwgAiAWOgCoAiACIBI2ArQCIAIgETYCsAIgAiAPOwGuAiACIBA7AawCQQAhE0EAIRVBACESA0ACQAJAAkAgAigCLEECRg0AAkADQCACQRBqIAJBLGoQPyACKAIQIg9FDQECQCACKAIUIhBBAUcNACAPLQAAQQpGDQELCyACLQCcASIRQRRHDQILIAJBAjYCLAsCQCACLQCkAkEURg0AIAIoArACIg8gAigCtAJGDQAgAiAPQRhqNgKwAiACQfADakEIaiAKQQhqKAEANgIAIAIgCikBADcD8AMgAkHwAmogDyACQfADahB+IAIoAvACQQJGDQBB/ABFDQMgAkEsaiACQfACakH8APwKAAAMAwsCQCACKAKoAUECRg0AA0AgAkEIaiAJED8gAigCCCIPRQ0BAkAgAigCDCIQQQFHDQAgDy0AAEEKRg0BCwsgAiANKQAANwO4AiACIA4oAAA2AL8CIAItAJgCIhFBFEcNAgsgASgCNCEPAkACQCACKAIoDQBBACEQQQAhEQJAIAEoAiQNAEEAIREgD0UNAAJAIAEoAgwiDyABKAIAIhFHDQAgARDfASABKAIAIREgASgCDCEPCyABIA9BAWo2AgwgASgCBCABKAIIIA9qIg9BACARIA8gEUkba0EMbGoiD0EANgIIIA9CgICAgMAANwIAIAIoAighEQsCQCARDQAgAS0AUkEBcQ0CCyABKAI0IQ8LIAFBADYCNCACIA82AjwgAkIANwI0IAIgDzYCMCACIAM2AiwgAkEgaiACQSxqEJgBIAIoAighEAsgASgCICERAkAgASgCJCIPIAIoAiAgEGtNDQAgAkEgaiAQIA9BBEEUEN0BIAIoAighEAsCQCAPQRRsIhJFDQAgAigCJCAQQRRsaiARIBL8CgAACyABQQA2AiQgAiACKAIoIA9qIg82AigCQAJAAkAgDw0AIAIoAiANASABKAIMDQZBACEPAkAgASgCACIQDQAgARDfASABKAIAIRAgASgCDCEPCyABIA9BAWo2AgwgASgCBCABKAIIIA9qIg9BACAQIA8gEEkba0EMbGoiD0EANgIIIA9CgICAgMAANwIAIAIoAiAiD0UNBiACKAIkIA9BFGxBBBCqAwwGCyACQfACakEIaiIRIAJBIGpBCGooAgA2AgAgAiACKQMgNwPwAgJAIAEoAgwiDyABKAIAIhBHDQAgARDfASABKAIAIRAgASgCDCEPCyABIA9BAWo2AgwgASgCBCABKAIIIA9qIg9BACAQIA8gEEkba0EMbGoiDyACKQPwAjcC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aiEIAkADQCAIKAIAIgsgCCgCBCALGyIRIAdxIgshEAJAIAQgC2opAABCgIGChIiQoMCAf4MiFEIAUg0AQQghDSALIRADQCAQIA1qIRAgDUEIaiENIAQgECAHcSIQaikAAEKAgYKEiJCgwIB/gyIUUA0ACwsCQCAEIBR6p0EDdiAQaiAHcSIQaiwAAEEASA0AIAQpAwBCgIGChIiQoMCAf4N6p0EDdiEQCwJAIBAgC2sgAiALa3MgB3FBCEkNACAEIBBqIgstAAAhDSALIBFBGXYiEToAACASIBBBeGogB3FqIBE6AAAgDiAQQXRsaiELIA1B/wFGDQIgDygAACEQIA8gCygAADYAACALIBA2AAAgCygABCEQIAsgDygABDYABCAPIBA2AAQgDygACCEQIA8gCygACDYACCALIBA2AAgMAQsLIAwgEUEZdiILOgAAIBIgAkF4aiAHcWogCzoAAAwBCyAMQf8BOgAAIBIgAkF4aiAHcWpB/wE6AAAgC0EIaiAPQQhqKAAANgAAIAsgDykAADcAAAsgAiAHRw0ACwsgASAKIAZrNgIIQYGAgIB4IQQLDAELIAUgBBDoAiAFKAIEIQIgBSgCACEECyAAIAI2AgQgACAENgIAIAVBIGokAAuTDgMDfwF+AXwjAEHgAGsiAyQAIAMgATYCDAJAAkACQAJAAkACQAJAAkACQAJAAkAgA0EMahCaAw0AQQAhBCABEPADDgICAQMLIANBEGpBCGogAkEIaikCADcDACADIAIpAgA3AxAgA0EHOgBIIANByABqIANBEGpBoIHAABCaAiECIABBlYCAgHg2AgggACACNgIADAMLQQEhBAsgA0EQakEIaiACQQhqKQIANwMAIAMgAikCADcDECADQQA6AEggAyAEOgBJIANByABqIANBEGpBoIHAABCaAiECIABBlYCAgHg2AgggACACNgIADAELIAEQ8QNBAUYNAyADQcgAaiABEN0DAkAgAygCSA0AIANByABqIAEQ3gMCQCADKAJIIgRFDQAgAyADKAJMIgU2AiwgAyAENgIoIAMgBTYCJCADQcgAakEIaiACQQhqKQIANwMAIAMgAikCADcDSCAAIANByABqIANBJGoQmQIMAgsCQAJAIANBDGoQsQMNACADQRBqIANBDGoQ6QEgAygCEEGAgICAeEYNASADQTBqQQhqIANBEGpBCGooAgA2AgAgAyADKQIQNwMwIANByABqQQhqIAJBCGopAgA3AwAgAyACKQIANwNIIAAgA0HIAGogA0EwahCYAgwDCyADIAE2AhAgA0EQahCxA0UNAyADQcgAaiADQRBqEOoCIANBADYCVCAAIAIgA0HIAGoQrwEMBAsCQAJAAkAgARDyA0EBRw0AEIQEIgQgARC+A0EBRw0BAkAgBEGEAUkNACAEEMcCCyADQQxqEK0DDQILIANByABqQQhqIAJBCGopAgA3AwAgAyACKQIANwNIIANBDGogA0HIAGpByK3AABCCASECIABBlYCAgHg2AgggACACNgIADAMLIARBhAFJDQAgBBDHAgsgAyABNgJAIANByABqIANBwABqELQBIAMoAkghBAJAAkACQAJAIAMtAEwiBUF+ag4CAgABCyAAQZWAgIB4NgIIIAAgBDYCACABQYMBSw0IDAkLIAMgBToAVCADIAQ2AlAgA0EANgJIIAAgAiADQcgAahBNDAELIAMgA0HAAGoQzwICQCADKAIAQQFxRQ0AIAMgAygCBCIENgJEIANB0ABqIANBxABqEOoCIANBADYCXCADQQA2AkggACACIANByABqEEwgBEGEAUkNASAEEMcCDAELIANByABqQQhqIAJBCGopAgA3AwAgAyACKQIANwNIIANBwABqIANByABqQcitwAAQggEhAiAAQZWAgIB4NgIIIAAgAjYCAAsgAUGEAU8NBQwGCyADKwNQIQcCQCADQQxqELIDDQAgA0EQakEIaiACQQhqKQIANwMAIAMgAikCADcDECADQQM6AEggAyAHOQNQIANByABqIANBEGpBoIHAABCaAiECIABBlYCAgHg2AgggACACNgIADAELIANBEGpBCGogAkEIaikCADcDACADIAIpAgA3AxAgA0ECOgBIIAMgB/wGNwNQIANByABqIANBEGpBoIHAABCaAiECIABBlYCAgHg2AgggACACNgIACyABQYQBTw0DDAQLIANByABqIANBEGoQtAEgAygCSCEEAkACQAJAIAMtAEwiBUF+ag4CAQACCyAAQZWAgIB4NgIIIAAgBDYCACABQYMBSw0EDAULIANByABqQQhqIAJBCGopAgA3AwAgAyACKQIANwNIIANBEGogA0HIAGpByK3AABCCASECIABBlYCAgHg2Aggg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QAJAAkACQAJAAkACQCAFIAlB//8DcSIHTQ0AQQAhACABDgQDAQIDAwtBACEAIAEOBAUDBAUFC0EAIAUgB2siASABIAVLG0EBdiEADAELQQAgBSAHayIBIAEgBUsbIQALIAogCCADQQhqIAIgABBQDAMLQQAgByAFayIBIAEgB0sbQQF2IQAMAQtBACAHIAVrIgEgASAHSxshAAsgA0EBOwEWIAMgBDsBEiADQQAgCUH//wNxIgEgAEH//wNxIgVrIgcgByABSxs7ARQgAyAGIAVqIgFB//8DIAFB//8DSRs7ARAgCiAIIANBEGogAkEAEFALIANBIGokAAvdBAEGfyMAQTBrIgMkACADIAI2AgggAyABNgIEIANBIGogA0EEahB5AkACQAJAAkAgAygCICIERQ0AIAMoAiQhASADKAIsRQ0BAkACQCACDQBBASEFDAELEIEEIAJBARDKAyIFRQ0EC0EAIQYgA0EANgIUIAMgBTYCECADIAI2AgwCQCABIAJNDQAgA0EMakEAIAEQ8AEgAygCDCECIAMoAhAhBSADKAIUIQYLAkAgAUUNACAFIAZqIAQgAfwKAAALIAMgBiABaiIBNgIUAkAgAiABa0ECSw0AIANBDGogAUEDEPABIAMoAhAhBSADKAIUIQELIAUgAWoiAkEALwCI7kIiBzsAACACQQJqQQAtAIruQiIIOgAAIAMgAUEDaiICNgIUIAMgAykCBDcCGCADQSBqIANBGGoQeQJAIAMoAiAiBkUNAANAIAMoAiwhBQJAIAMoAiQiASADKAIMIAJrTQ0AIANBDGogAiABEPABIAMoAhQhAgsgAygCECEEAkAgAUUNACAEIAJqIAYgAfwKAAALIAMgAiABaiICNgIUAkAgBUUNAAJAIAMoAgwgAmtBAksNACADQQxqIAJBAxDwASADKAIQIQQgAygCFCECCyAEIAJqIgEgBzsAACABQQJqIAg6AAAgAyACQQNqIgI2AhQLIANBIGogA0EYahB5IAMoAiAiBg0ACwsgACADKQIMNwIAIABBCGogA0EMakEIaigCADYCAAwCC0EAIQFBASEECyAAIAE2AgggACAENgIEIABBgICAgHg2AgALIANBMGokAA8LQQEgAhD3AgAL+AQCB38DfiMAQRBrIgIkAAJAQQAtAKiGREEBRg0AEKoBCwJAAkACQEEA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CyACQSRqQQhqIgRBADYCACACIAU2AiggAiADNgIkIAJBJGogAyACQQhqEJcBIABBCGogBCgCADYCACAAIAIpAiQ3AgAgACABKQEANwIMIAJBMGokAAvpAQECfyABKAIEIQICQAJAAkACQCABKAIIQXtqDgQAAgIBAgsgAi0AAEHwAEcNASACLQABQfIARw0BIAItAAJB7wBHDQEgAi0AA0HwAEcNASACLQAEQfMARw0BQQAhAwwCCyACLQAAQeMARw0AIAItAAFB6ABHDQAgAi0AAkHpAEcNACACLQADQewARw0AIAItAARB5ABHDQAgAi0ABUHyAEcNACACLQAGQeUARw0AIAItAAdB7gBHDQBBASEDDAELQQIhAwsgAEEAOgAAIAAgAzoAAQJAIAEoAgAiAUUNACACIAFBARCqAwsL1QEBBH8jAEEQayICJAACQAJAAkAgAC8BACIAQecHSw0AQQUhAyAAIQQgAEEKSQ0CIABB5ABuIQRBAyEDIAAhBQwBC0EBIQMgAiAAIABBkM4AbiIEQZDOAGxrIgVB//8DcUHkAG5BAXQvAKWAQzsADAsgAiAFQf//A3FB5ABwQQF0LwClgEM7AA4LAkACQCAARQ0AIARFDQELIAJBC2ogA0F/aiIDaiAEQQF0LQCmgEM6AAALIAFBAUEBQQAgAkELaiADakEFIANrEF0hACACQRBqJAAgAAvUAQEGfyMAQRBrIgQkACAEIAI7AQIgBCABOwEAAkAgAUH//wNxIAAvAQwiBUkNACACQf//A3EgAC8BDiIGQf//A3EiB0kNACABQf//A3EgBSAALwEQIghB//8DcWoiCUH//wMgCUH//wNJG0H//wNxTw0AIAJB//8DcSAHIAAvARJqIgdB//8DIAdB//8DSRtB//8DcU8NACAEQRBqJAAgASAFayACIAZrIAhsakH//wNxDwsgBCAANgIEIAQgBEECajYCDCAEIAQ2AgggBEEEahCUAgAL5wEBBH8jAEEQayICJAAgAiABNgIAIAJBBGogARDeAwJAAkAgAigCBCIDRQ0AAkACQAJAAkACQCACKAIIIgRBfWoOAgABAwsgA0G+q8AAQQMQpAINAkEAIQUMAQsgAygAAEEAKADBq0BHDQFBASEFCyAAQQA6AAAgACAFOgABDAELIAMgBEHIq8AAQQIQ7gEhBSAAQQE6AAAgACAFNgIEIARFDQILIAMgBEEBEKoDDAELIAIgAkEPakG4rcAAEIIBIQMgAEEBOgAAIAAgAzYCBAsCQCABQYQBSQ0AIAEQxwILIAJBEGokAAvgAQEBfyMAQRBrIhMkACAAKAIAIAEgAiAAKAIEKAIMEQkAIQIgE0EAOgANIBMgAjoADCATIAA2AgggE0EIaiADIAQgBSAGEKcBIAcgCCAJIAoQpwEgCyAMIA0gDhCnASAPIBAgESASEKcBIRIgEy0ADSICIBMtAAwiAXIhAAJAIAJBAUcNACABQQFxDQACQCASKAIAIgAtAApBgAFxDQAgACgCAEHRgsMAQQIgACgCBCgCDBEJACEADAELIAAoAgBB0ILDAEEBIAAoAgQoAgwRCQAhAAsgE0EQaiQAIABBAXEL2QEBA38jAEEwayIDJAAgA0EMaiABIAIQYgJAAkACQCADKAIMQQFHDQAgAyACNgIgIAMgATYCHCADQQY6ABggA0EYaiADQS9qQZitwAAQmwIhAiAAQYCAgIB4NgIAIAAgAjYCBAwBC0EAIQEgAygCFCICQQBIDQEgAygCECEEAkACQCACDQBBASEFDAELEIEEQQEhASACQQEQygMiBUUNAgsCQCACRQ0AIAUgBCAC/AoAAAsgACACNgIIIAAgBTYCBCAAIAI2AgALIANBMGokAA8LIAEgAhD3AgAL3gEBA38CQAJAIAAoAgAiAUGAgICAeEcNAAJAIAAoAhAiAUGAgICAeEYNACABRQ0AIAAoAhQgAUEBEKoDCyAAKAIIIQICQCAAKAIMIgNFDQAgAiEBA0AgARDXASABQShqIQEgA0F/aiIDDQALCyAAKAIEIgFFDQEgAiABQShsQQQQqgMPCwJAIAFFDQAgACgCBCABQQEQqgMLAkAgACgCDCIBQYCAgIB4Rg0AIAFFDQAgACgCECABQQEQqgMLIAAoAhgiAUGAgICAeEYNACABRQ0AIAAoAhwgAUEBEKoDCwvbAQEDfyMAQSBrIgIkACACIAE2AgwCQAJAAkACQCACQQxqELEDRQ0AIAJBEGogAkEMahDqAiACQQA2AhwgACACQRBqEIMBDAELIAJBEGogAkEMahC0ASACKAIQIQMCQAJAAkAgAi0AFCIEQX5qDgIBAAILIABBlYCAgHg2AgAgACADNgIEIAFBgwFNDQQMAwsgAkEMaiACQRBqQaitwAAQggEhAyAAQZWAgIB4NgIAIAAgAzYCBAwBCyAAIAMgBEEBcRCVAQsgAUGDAU0NAQsgARDHAgsgAkEgaiQAC9wBAQF/IwBBEGsiAyQAAkACQAJAAkAgAkF9ag4CAAECCyABLQAAQcIARw0BIAEtAAFB7wBHDQEgAS0AAkH4AEcNASAAQQA7AQAMAgsgAS0AAEHUAEcNACABLQABQeUARw0AIAEtAAJB+ABHDQAgAS0AA0H0AEcNACAAQYACOwEADAELIANBBGogASACENEDIAMoAggiAiADKAIMQcirwABBAhDuASEBIABBAToAACAAIAE2AgQgAygCBCIBQYCAgIB4ckGAgICAeEYNACACIAFBARCqAwsgA0EQaiQAC+QBAQN/AkACQCAAKAIAIgFBgICAgHhHDQACQCAAKAIQIgFBgICAgHhyQYCAgIB4Rg0AIAAoAhQgAUEBEKoDCyAAKAIIIQICQCAAKAIMIgNFDQAgAiEBA0AgARDXASABQShqIQEgA0F/aiIDDQALCyAAKAIEIgFFDQEgAiABQShsQQQQqgMPCwJAIAFFDQAgACgCBCABQQEQqgMLAkAgACgCDCIBQYCAgIB4ckGAgICAeEYNACAAKAIQIAFBARCqAwsgACgCGCIBQYCAgIB4ckGAgICAeEYNACAAKAIcIAFBARCqAwsL3wEBAn8jAEEgayIFJAACQAJAQQEQrQJB/wFxIgZBAkYNACAGQQFxRQ0BIAVBCGogACABKAIYEQUADAELQQAoApCKRCIGQX9MDQBBACAGQQFqNgKQikQCQAJAQQAoApSKREUNACAFIAAgASgCFBEFACAFIAQ6AB0gBSADOgAcIAUgAjYCGCAFIAUpAwA3AhBBACgClIpEIAVBEGpBACgCmIpEKAIUEQUADAELQYCAgIB4IAUQ7QILQQBBACgCkIpEQX9qNgKQikRBAEEAOgCIikQgA0UNACAAIAEQtgMACwALwQEBBX8gACABIAIQMgJAIAAoAggiA0UNACAAKAIEIQRBACEFA0ACQCAEIAVBBXRqIgYoAggiAUUNACAGKAIEIQIDQAJAIAIoAgAiB0GAgICAeEYNACAHRQ0AIAJBBGooAgAgB0EBEKoDCyACQRhqIQIgAUF/aiIBDQALCwJAIAYoAgAiAkUNACAGKAIEIAJBGGxBBBCqAwsgBUEBaiIFIANHDQALCwJAIAAoAgAiAkUNACAAKAIEIAJBBXRBBBCqAwsLuQECAn8BfkEBIQZBBCEHAkACQCAEIAVqQX9qQQAgBGtxrSADrX4iCEIgiKdFDQBBACEDDAELAkAgCKciA0GAgICAeCAEa00NAEEAIQMMAQsCQAJAAkACQCABRQ0AIAIgBSABbCAEIAMQmAMhBwwBCwJAIAMNACAEIQcMAgsQgQQgAyAEEMoDIQcLIAcNACAAIAQ2AgQMAQsgACAHNgIEQQAhBgtBCCEHCyAAIAdqIAM2AgAgACAGNgIAC7kBAgJ/AX5BASEGQQQhBwJAAkAgBCAFakF/akEAIARrca0gA61+IghCIIinRQ0AQQAhAwwBCwJAIAinIgNBgICAgHggBGtNDQBBACEDDAELAkACQAJAAkAgAUUNACACIAUgAWwgBCADEJgDIQcMAQsCQCADDQAgBCEHDAILEIEEIAMgBBDKAyEHCyAHDQAgACAENgIEDAELIAAgBzYCBEEAIQYLQQghBwsgACAHaiADNgIAIAAgBjYCAAu5AQICfwF+QQEhBkEEIQcCQAJAIAQgBWpBf2pBACAEa3GtIAOtfiIIQiCIp0UNAEEAIQMMAQsCQCAIpyIDQYCAgIB4IARrTQ0AQQAhAwwBCwJAAkACQAJAIAFFDQAgAiAFIAFsIAQgAxCYAyEHDAELAkAgAw0AIAQhBwwCCxCBBCADIAQQygMhBwsgBw0AIAAgBDYCBAwBCyAAIAc2AgRBACEGC0EIIQcLIAAgB2ogAzYCACAAIAY2AgALsAEBAX8jAEEQayIFJAACQCAEDQBBAEEAEPcCAAsCQCACIAFqIgEgAk8NAEEAQQAQ9wIACyAFQQRqIAAoAgAiAiAAKAIEIAEgAkEBdCICIAEgAksbIgJBCEEEQQEgBEGBCEkbIARBAUYbIgEgAiABSxsiAiADIAQQ2wECQCAFKAIEQQFHDQAgBSgCCCAFKAIMEPcCAAsgBSgCCCEEIAAgAjYCACAAIAQ2AgQgBUEQaiQAC7ABAgJ/AX5BASEFQQQhBgJAAkAgBEEDakEcca0gA61+IgdCIIinRQ0AQQAhAwwBCwJAIAenIgNB/P///wdNDQBBACEDDAELAkACQAJAAkAgAUUNACACIAQgAWxBBCADEJgDIQYMAQsCQCADDQBBBCEGDAILEIEEIANBBBDKAyEGCyAGDQAgAEEENgIEDAELIAAgBjYCBEEAIQULQQghBgsgACAGaiADNgIAIAAgBTYCAAulAQEFfyAAKAIAIQEgABCEAgJAIAAoAggiAiABIAAoAgwiA2tNDQAgACgCACEEAkACQCABIAJrIgUgAyAFayIDTQ0AIAQgAWsgA08NAQsgBCAFayEBAkAgBUEMbCIDRQ0AIAAoAgQiBSABQQxsaiAFIAJBDGxqIAP8CgAACyAAIAE2AggPCyADQQxsIgJFDQAgACgCBCIAIAFBDGxqIAAgAvwKAAALC6UBAQV/IAAoAgAhASAAEIMCAkAgACgCCCICIAEgACgCDCIDa00NACAAKAIAIQQCQAJAIAEgAmsiBSADIAVrIgNNDQAgBCABayADTw0BCyAEIAVrIQECQCAFQRRsIgNFDQAgACgCBCIFIAFBFGxqIAUgAkEUbGogA/wKAAALIAAgATYCCA8LIANBFGwiAkUNACAAKAIEIgAgAUEUbGogACAC/AoAAAsLrwEBAX8jAEEQayIGJAACQAJAIAFFDQAgBkEEaiABIAMgBCAFIAIoAhARDAACQAJAIAYoAgQiBSAGKAIMIgFLDQAgBigCCCEFDAELIAVBAnQhBCAGKAIIIQMCQCABDQBBBCEFIAMgBEEEEKoDDAELIAMgBEEEIAFBAnQiAhCYAyIFRQ0CCyAAIAE2AgQgACAFNgIAIAZBEGokAA8LQaixwABBMhDOAwALQQQgAhD3AgALqAEBBH8jAEEQayICJABBASEDAkACQAJAIAFBAXFFDQAgAUEBdiEEQQAhBQJAIAFBAkkNABCBBCAEQQEQygMiA0UNAyAEIQULIARFDQEgAyAAIAT8CgAADAELIAJBBGogACABEIYBIAIoAgQhBSACKAIMIQQgAigCCCEDCyADIAQQ/gIhAQJAIAVFDQAgAyAFQQEQqgMLIAJBEGokACABDwtBASAEEPcCAAunAQEDfyMAQRBrIgIkAEEBIQMCQAJAAkAgAUEBcUUNACABQQF2IQQCQCABQQJJDQAQgQQgBEEBEMoDIgNFDQMLAkAgBEUNACADIAAgBPwKAAALIAQhAQwBCyACQQRqIAAgARCGASACKAIMIQQgAigCCCEDIAIoAgQhAQsgAyAEEP4CIQQCQCABRQ0AIAMgAUEBEKoDCyACQRBqJAAgBA8LQQEgBBD3AgALuwEBAX8jAEEQayICJAACQAJAIAApAwBC////////////AINCgICAgICAgPj/AFMNACACQTutQiCGIACthDcDCCABKAIAIAEoAgRB6IjAACACQQhqEHAhAAwBCyACQQA6AAQgAiABNgIAIAJBO61CIIYgAK2ENwMIAkAgAkHstcAAQeiIwAAgAkEIahBwDQACQCACLQAEDQAgAUGEtsAAQQIQiAMNAQtBACEADAELQQEhAAsgAkEQaiQAIAALwQEAAkACQAJAAkACQAJAAkACQCACQX9qDggDBgYGAAEGAgYLQQUhAiABQc6owABBBRCkAg0EQQAhAgwGC0EGIQIgAUHTqMAAQQYQpAINAkEBIQIMBQsgASkAAELj2JWLpu6XsecAUg0DQQIhAgwEC0EDQQRBByABLQAAIgJB+QBGGyACQfgARhshAgwDCyABQd6owABBBhCkAg0BDAILIAFB2ajAAEEFEKQCRQ0BC0EHIQILIABBADoAACAAIAI6AAELnQEBBH8CQCAAKAIIIgFFDQAgAUEYbCECIAAoAgQhA0EAIQEDQAJAIAMgAWoiAEETaiIELQAAQdgBRw0AIABBCGoQ0wILIABBADoAACAAQQhqQSA6AAAgBEHBAToAACAAQQlqQgA3AAAgAEERakEAOwAAIABBFmpBADoAACAAQRRqQQA7AQAgAEEEakEAOgAAIAIgAUEYaiIBRw0ACwsLmAEBAX8jAEEQayICJAACQAJAIAFB/wBJDQACQCABIAAoAhhJDQAgASAAKAIcSw0AIAAtACAhAAwCCyACQQRqIAEQigEgAEEYaiIBQQhqIAJBBGpBCGooAgA2AgAgASACKQIENwIAIAAtACAhAAwBC0EAIQAgAUEfSw0AQQdBAUECIAFBDUYbIAFBCkYbIQALIAJBEGokACAAC5gBAQF/IwBBEGsiBSQAAkAgAiABaiIBIAJPDQBBAEEAEPcCAAsgBUEEaiAAKAIAIgIgACgCBCABIAJBAXQiAiABIAJLGyICQQhBBCAEQQFGGyIBIAIgAUsbIgIgAyAEENwBAkAgBSgCBEEBRw0AIAUoAgggBSgCDBD3AgALIAUoAgghBCAAIAI2AgAgACAENgIEIAVBEGokAAujAQEBfyMAQRBrIgIkAAJAAkAgARCuA0UNACACQQRqIAEQ6gEgAEEIaiACQQRqQQhqKAIANgIAIAAgAikCBDcCAAwBCwJAIAEQrwNFDQAgAiABEOgDIgE2AgAgAkEEaiACEOoBIABBCGogAkEEakEIaigCADYCACAAIAIpAgQ3AgAgAUGEAUkNASABEMcCDAELIABBgICAgHg2AgALIAJBEGokAAuoAQEEf0EAIQICQCABKAIAIgMQ8wMiAUEASA0AAkACQCABDQBBASEEDAELEIEEQQEhAiABQQEQygMiBEUNAQsgACAENgIEIAAgATYCABCFBCICEIADIgUQ/wIhAQJAIAVBhAFJDQAgBRDHAgsgASADIAQQqQMCQCABQYQBSQ0AIAEQxwILAkAgAkGEAUkNACACEMcCCyAAIAMQ8wM2AggPCyACIAEQ9wIAC5UBAQJ/IwBBEGsiBSQAIAVBBGogASgCACIGIAEoAgQgAkEBaiICIAZBAXQiBiACIAZLGyICQQQgAkEESxsiAiADIAQQ2gECQAJAIAUoAgRFDQAgBSgCDCEBIAUoAgghAgwBCyAFKAIIIQQgASACNgIAIAEgBDYCBEGBgICAeCECCyAAIAE2AgQgACACNgIAIAVBEGokAAukAQIDfwF+IwBBIGsiAiQAAkAgASgCAEGAgICAeEcNACABKAIMIQMgAkEUakEIaiIEQQA2AgAgAkKAgICAEDcCFCACQRRqQeDpwgAgAygCACIDKAIAIAMoAgQQcBogAkEIakEIaiAEKAIAIgM2AgAgAiACKQIUIgU3AwggAUEIaiADNgIAIAEgBTcCAAsgAEGU7MIANgIEIAAgATYCACACQSBqJAALmAEBBH8jAEEQayICJABBASEDAkAgASgCACIEQScgASgCBCIFKAIQIgERBgANACACIAAoAgBBgQIQZQJAAkAgAi0ADSIDQYEBSQ0AIAQgAigCACABEQYARQ0BQQEhAwwCCyAEIAIgAi0ADCIAaiADIABrIAUoAgwRCQBFDQBBASEDDAELIARBJyABEQYAIQMLIAJBEGokACADC4wBAQF/IwBBIGsiBCQAIAQgATYCBCAEIAA2AgACQAJAIAMNACAEQRetQiCGIASthDcDEEHqiMAAIARBEGoQ4gEhAwwBCyAEIAM2AgwgBCACNgIIIARBGa1CIIYgBEEIaq2ENwMYIARBF61CIIYgBK2ENwMQQa2GwAAgBEEQahDiASEDCyAEQSBqJAAgAwuKAQEBfyMAQRBrIgMkAAJAIAIgAWoiASACTw0AQQBBABD3AgALIANBBGogACgCACICIAAoAgQgASACQQF0IgIgASACSxsiAkEIIAJBCEsbIgIQggICQCADKAIEQQFHDQAgAygCCCADKAIMEPcCAAsgAygCCCEBIAAgAjYCACAAIAE2AgQgA0EQaiQAC4oBAQF/IwBBEGsiAyQAAkAgAiABaiIBIAJPDQBBAEEAEPcCAAsgA0EEaiAAKAIAIgIgACgCBCABIAJBAXQiAiABIAJLGyICQQggAkEISxsiAhD3AQJAIAMoAgRBAUcNACADKAIIIAMoAgwQ9wIACyADKAIIIQEgACACNgIAIAAgATYCBCADQRBqJAALjgEBAX8jAEEgayICJAAgACgCACEAIAJCADcDGCACQRhqIAAQ4gMgAiACKAIcIgA2AhQgAiACKAIYNgIQIAIgADYCDCACQTGtQiCGIAJBDGqthDcDGCABKAIAIAEoAgRB2abAACACQRhqEHAhAQJAIAIoAgwiAEUNACACKAIQIABBARCqAwsgAkEgaiQAIAELiwEBAn8CQCAAKAIAIgEoAhQiAkUNACABKAIQQRNqIQADQAJAIAAtAABB2AFHDQAgAEF1ahDTAgsgAEEYaiEAIAJBf2oiAg0ACwsCQCABKAIMIgBFDQAgASgCECAAQRhsQQQQqgMLAkAgAUF/Rg0AIAEgASgCBEF/aiIANgIEIAANACABQSRBBBCqAwsLkwEBAX8jAEEQayICJAACQAJAAkACQCABLQAuQX9qDgIBAAILIABBBDYCACAAQQE6AAQMAgsgAEEENgIAIABBADoABAwBCwJAIAEoAgBBAUcNACAAQQA2AgAgACABKAIENgIEDAELIAJBxgCtQiCGQbTtwACthDcDCEG3iMAAIAJBCGpBvO3AABC+AgALIAJBEGokAAuTAQEBfyMAQRBrIgIkAAJAAkACQAJAIAEtAC5Bf2oOAgEAAgsgAEEENgIAIABBAToABAwCCyAAQQQ2AgAgAEEAOgAEDAELAkAgASgCAEEBRw0AIABBADYCACAAIAEoAgQ2AgQMAQsgAkHKAK1CIIZBvIjBAK2ENwMIQbeIwAAgAkEIakHEiMEAEL4CAAsgAkEQaiQAC5QBAQR/AkACQCABLQAERQ0AQQIhAgwBCyABKAIAEIQDIQNBACgCtIZEIQRBACgCsIZEIQVBAEIANwKwhkRBASECAkAgBUEBRw0AIAFBAToABAwBCwJAAkAgAxD0Aw0AQQAhAiADEIEDIQQMAQsgAUEBOgAEQQIhAgsgA0GEAUkNACADEMcCCyAAIAQ2AgQgACACNgIAC5UBAQJ/IwBBEGsiASQAAkACQCAAQQBIDQAgAEH4////B0sNARCBBAJAAkAgAEEHakH8////B3FBBBDKAyICDQBBACEADAELIAIgADYCACACQQRqIQALIAFBEGokACAADwtB5O/AAEEOIAFBD2pBuO/AAEH078AAEJYCAAtByO/AAEEMIAFBD2pBuO/AAEHU78AAEJYCAAuHAQACQAJAIANBAE4NAEEBIQFBBCECQQAhAwwBCwJAAkACQAJAIAFFDQAgAiABQQEgAxCYAyEBDAELAkAgAw0AQQEhAQwCCxCBBCADQQEQygMhAQsgAQ0AQQEhASAAQQE2AgQMAQsgACABNgIEQQAhAQtBCCECCyAAIAJqIAM2AgAgACABNgIAC3sBA38jAEEQayICJAAgAC8BACEDQQAhAANAIAJBDGogAGpBA2ogA0EPcUGUgsMAai0AADoAACAAQX9qIQAgA0H//wNxIgRBBHYhAyAEQQ9LDQALIAFBAUGSgsMAQQIgAkEMaiAAakEEakEAIABrEF0hACACQRBqJAAgAAt7AQN/IwBBEGsiAiQAIAAvAQAhA0EAIQADQCACQQxqIABqQQNqIANBD3FBgoLDAGotAAA6AAAgAEF/aiEAIANB//8DcSIEQQR2IQMgBEEPSw0ACyABQQFBkoLDAEECIAJBDGogAGpBBGpBACAAaxBdIQAgAkEQaiQAIAALjQEBAn8CQAJAAkACQCAALQALQah+ag4CAQACCwJAIAFFDQAgACgCACECAkAgASAAKAIEIgNJDQAgASADRg0BDAQLIAIgAWosAABBv39MDQMLIABBgICAyH02AggLIAAgATYCBA8LAkAgAUEMTw0AIAAgAUHAAXI6AAsLDwsgAiADQQAgAUGo78AAEI0DAAtuAQZ+IAAgA0L/////D4MiBSABQv////8PgyIGfiIHIANCIIgiCCAGfiIGIAUgAUIgiCIJfnwiBUIghnwiCjcDACAAIAggCX4gBSAGVK1CIIYgBUIgiIR8IAogB1StfCAEIAF+IAMgAn58fDcDCAt0AQN/IwBBEGsiAiQAIAAoAgAhAEEAIQMDQCACQQhqIANqQQdqIABBD3EtAIKCQzoAACADQX9qIQMgAEEPSyEEIABBBHYhACAEDQALIAFBAUGSgsMAQQIgAkEIaiADakEIakEAIANrEF0hACACQRBqJAAgAAt0AQN/IwBBEGsiAiQAIAAoAgAhAEEAIQMDQCACQQhqIANqQQdqIABBD3EtAJSCQzoAACADQX9qIQMgAEEPSyEEIABBBHYhACAEDQALIAFBAUGSgsMAQQIgAkEIaiADakEIakEAIANrEF0hACACQRBqJAAgAAtqAQJ/AkAgAiADSQ0AIAAgAiABaiAAKAIIIgRqIgVBACAAKAIAIgEgBSABSRtrIAQgAmoiAkEAIAEgAiABSRtrIAMQYQ8LIAAgACgCCCIDIAMgAWoiA0EAIAAoAgAiASADIAFJG2sgAhBhC4oBAQN/IwBBEGsiASQAAkAgACgCACICKAIEIgNBAXFFDQAgAigCACECIAEgA0EBdjYCBCABIAI2AgAgAUH46cIAIAAoAgQgACgCCCIALQAIIAAtAAkQ2AEACyABQYCAgIB4NgIAIAEgADYCDCABQZTqwgAgACgCBCAAKAIIIgAtAAggAC0ACRDYAQALlQEBAX8CQAJAAkBBACgCjIpEQf////8HcUUNABDuA0UNAQtBACgCkIpEDQFBACgCmIpEIQJBACABNgKYikRBACgClIpEIQFBACAANgKUikQCQCABRQ0AAkAgAigCACIARQ0AIAEgABEDAAsgAigCBCIARQ0AIAEgACACKAIIEKoDCw8LQbDqwgBB6QBB5OrCABC+AgsAC30BAX8jAEEwayIDJAAgA0EAOwEsIAMgAjYCKCADQQA2AiQgA0EBOgAgIANBCjYCHCADIAI2AhggA0EANgIUIAMgAjYCECADIAE2AgwgA0EKNgIIIAAgA0EIahB/IABBAzoAGCAAQQA2AhQgAEKTgICAsAI3AgwgA0EwaiQAC3MAAkAgA0F/Sg0AIABBADYCBCAAQQE2AgAPCwJAAkAgAUUNACACIAFBASADEJgDIQEMAQsQgQQgA0EBEMoDIQELAkAgAQ0AIAAgAzYCCCAAQQE2AgQgAEEBNgIADwsgACADNgIIIAAgATYCBCAAQQA2AgALbQEDfyMAQRBrIgEkACABQQRqIAAoAgAiAiAAKAIEIAJBAXQiAkEEIAJBBEsbIgJBBEEUENsBAkAgASgCBEEBRw0AIAEoAgggASgCDBD3AgALIAEoAgghAyAAIAI2AgAgACADNgIEIAFBEGokAAttAQN/IwBBEGsiASQAIAFBBGogACgCACICIAAoAgQgAkEBdCICQQQgAkEESxsiAkEEQQwQ2wECQCABKAIEQQFHDQAgASgCCCABKAIMEPcCAAsgASgCCCEDIAAgAjYCACAAIAM2AgQgAUEQaiQAC34BAn8jAEEQayIBJAACQAJAIABBfGoiAigAACIAQQBIDQAgAEH4////B0sNASACIABBB2pB/P///wdxQQQQqgMgAUEQaiQADwtB5O/AAEEOIAFBD2pBuO/AAEH078AAEJYCAAtByO/AAEEMIAFBD2pBuO/AAEHU78AAEJYCAAuDAQEBfyMAQRBrIgIkAAJAAkACQAJAAkAgACgCAA4EAAECAwALIAIgAEEEajYCDCABQbC4wABBCiACQQxqQaC4wAAQwAEhAAwDCyABQbq4wABBCRCIAyEADAILIAFBw7jAAEEJEIgDIQAMAQsgAUHMuMAAQQ0QiAMhAAsgAkEQaiQAIAALgwEBAX8jAEEQayICJAACQAJAAkACQAJAIAAoAgAOBAABAgMACyACIABBBGo2AgwgAUHA0sAAQQogAkEMakGw0sAAEMABIQAMAwsgAUHK0sAAQQkQiAMhAAwCCyABQdPSwABBCRCIAyEADAELIAFB3NLAAEENEIgDIQALIAJBEGokACAAC4MBAQF/IwBBEGsiAiQAAkACQAJAAkACQCAAKAIADgQAAQIDAAsgAiAAQQRqNgIMIAFB7O3AAEEKIAJBDGpB3O3AABDAASEADAMLIAFB9u3AAEEJEIgDIQAMAgsgAUH/7cAAQQkQiAMhAAwBCyABQYjuwABBDRCIAyEACyACQRBqJAAgAAtpAQN/IwBBEGsiASQAIAFBBGogACgCACICIAAoAgQgAkEBdCICQQggAkEISxsiAhD3AQJAIAEoAgRBAUcNACABKAIIIAEoAgwQ9wIACyABKAIIIQMgACACNgIAIAAgAzYCBCABQRBqJAALcwECfwJAIAEtAAsiAkHZAUcNACABEMIBIAEtAAshAgtBDCEDAkAgAkH/AXFB2AFHDQAgASgCCCEDIAEoAgAhAQJAIANB////x31HDQAgAUF8aigAACEDDAELIANB////B3EhAwsgACADNgIEIAAgATYCAAtgAQJ/AkACQCACQRB2IAJB//8DcUEAR2oiAkAAIgNBf0cNAEEAIQJBACEEDAELIAJBEHQiBEFwaiAEIANBEHQiAkEAIARrRhshBAsgAEEANgIIIAAgBDYCBCAAIAI2AgALbwEDfyMAQSBrIgIkACABKAIEIQMgAiABKAIINgIQIAIgAzYCDCACQQY6AAggAkEIaiACQR9qQbinwAAQmgIhBCAAQYGAgIB4NgIAIAAgBDYCBAJAIAEoAgAiAUUNACADIAFBARCqAwsgAkEgaiQAC28BA38jAEEgayICJAAgASgCBCEDIAIgASgCCDYCECACIAM2AgwgAkEGOgAIIAJBCGogAkEfakHIp8AAEJoCIQQgAEGBgICAeDYCACAAIAQ2AgQCQCABKAIAIgFFDQAgAyABQQEQqgMLIAJBIGokAAtrAQN/AkACQAJAIAEoAgAiAiABKAIIIgNLDQAgASgCBCEBDAELIAEoAgQhBAJAIAMNAEEBIQEgBCACQQEQqgMMAQsgBCACQQEgAxCYAyIBRQ0BCyAAIAM2AgQgACABNgIADwtBASADEPcCAAteAQF/IwBBIGsiAyQAIAMgAjYCDCADIAE2AgggAyAANgIEIANBFa1CIIYgA0EIaq2ENwMYIANBGK1CIIYgA0EEaq2ENwMQQc+GwAAgA0EQahDiASECIANBIGokACACC3sAAkACQAJAAkACQAJAIAAtAAAOBAEABQIBCyABRQ0CCyAAQQI6AAAgAigCACICLQAAIQEgAkEAOgAAIAFFDQJBAUHorsAAEIACIABBAzoAAAsPC0GAr8AAQdUAIAMQvgIAC0Hkr8AAEL0DAAtBqq/AAEHxACADEL4CAAtgAQJ/IwBBEGsiAiQAAkAgAUUNACABQQJ0IQMDQCACIAAoAgAiATYCDAJAIAFBhAFJDQAgAdBvJgFB+IXEACACQQxqEKABCyAAQQRqIQAgA0F8aiIDDQALCyACQRBqJAALbAEBfwJAAkAgAygCCCACRw0AIAMoAgQiBCABIAIQpAJFDQELIABBjICAgHg2AgAgACADKQIANwIEIABBDGogA0EIaigCADYCAA8LIABBlYCAgHg2AgACQCADKAIAIgNFDQAgBCADQQEQqgMLC2wBAX8CQAJAIAMoAgggAkcNACADKAIEIgQgASACEKQCRQ0BCyAAQY6AgIB4NgIAIAAgAykCADcCBCAAQQxqIANBCGooAgA2AgAPCyAAQZWAgIB4NgIAAkAgAygCACIDRQ0AIAQgA0EBEKoDCwtgAgJ/An4jAEEgayIBJAAgACgCACECIAA1AgQhAyABQT+tQiCGIgQgADUCCIQ3AxggASAEIAOENwMQIAFBwACtQiCGIAJBDGqthDcDCEHmpsAAIAFBCGpB9LbAABC+AgALYgECfwJAAkAgAEF8aigCACIDQXhxIgRBBEEIIANBA3EiAxsgAWpJDQACQCADRQ0AIAQgAUEnaksNAgsgABBgDwtBlOvCAEEuQcTrwgAQ+wIAC0HU68IAQS5BhOzCABD7AgALXAEBfyMAQSBrIgUkACAFIAE2AgQgBSAANgIAIAUgAzYCDCAFIAI2AgggBUHlAK1CIIYgBUEIaq2ENwMYIAVB4QCtQiCGIAWthDcDEEHkiMAAIAVBEGogBBC+AgALaQECfyMAQRBrIgMkACACKAIEIQQgAyACKAIINgIIIAMgBDYCBCADQQU6AAAgAyABQaCBwAAQmgIhASAAQZWAgIB4NgIIIAAgATYCAAJAIAIoAgAiAkUNACAEIAJBARCqAwsgA0EQaiQAC2kBAn8jAEEQayIDJAAgAigCBCEEIAMgAigCCDYCCCADIAQ2AgQgA0EGOgAAIAMgAUGggcAAEJoCIQEgAEGVgICAeDYCCCAAIAE2AgACQCACKAIAIgJFDQAgBCACQQEQqgMLIANBEGokAAtpAQJ/IwBBEGsiAyQAIAIoAgQhBCADIAIoAgg2AgggAyAENgIEIANBBToAACADIAFBoIHAABCaAiEBIABBlYCAgHg2AgggACABNgIAAkAgAigCACICRQ0AIAQgAkEBEKoDCyADQRBqJAALVAEBfyMAQSBrIgMkACADIAI2AgwgAyABNgIIIANBFa1CIIYgA0EIaq2ENwMYIANBFq1CIIYgAK2ENwMQQY2HwAAgA0EQahDiASECIANBIGokACACC1QBAX8jAEEgayIDJAAgAyACNgIMIAMgATYCCCADQRWtQiCGIANBCGqthDcDGCADQRatQiCGIACthDcDEEHuhsAAIANBEGoQ4gEhAiADQSBqJAAgAgtUAQF/IwBBIGsiAyQAIAMgAjYCDCADIAE2AgggA0EdrUIghiADQQhqrYQ3AxggA0EWrUIghiAArYQ3AxBBjYfAACADQRBqEOMBIQIgA0EgaiQAIAILXQEBfyMAQRBrIgIkAAJAAkAgACgCAEEBRw0AIAFBp7TAAEEQEIgDIQAMAQsgAkEYrUIghiAArYQ3AwggASgCACABKAIEQYulwAAgAkEIahBwIQALIAJBEGokACAAC10BAX8jAEEQayICJAACQAJAIAAoAgBBAUcNACABQbe0wABBFRCIAyEADAELIAJBGK1CIIYgAK2ENwMIIAEoAgAgASgCBEHCpcAAIAJBCGoQcCEACyACQRBqJAAgAAtvAQF/IwBBEGsiAiQAIAIgAEEGajYCDCABQci2wABBBEHMtsAAQQEgAEGotsAAQc22wABBASAAQQJqQai2wABBzrbAAEEFIABBBGpBqLbAAEHTtsAAQQYgAkEMakG4tsAAENIBIQAgAkEQaiQAIAALTwIBfwJ+IwBBIGsiAiQAIAEgACkDACIDQn9VQQFBACACQQxqIAMgA0I/hyIEhSAEfSACQQxqQRQQdSIAakEUIABrEF0hACACQSBqJAAgAAtPAgF/AX4jAEEgayIDJAAgAyABNgIMIAMgADYCCCADQRitQiCGIgQgA0EIaq2ENwMYIAMgBCADQQxqrYQ3AxBB/ITAACADQRBqIAIQvgIAC1EBA38jAEEQayICJAAgAiABNgIMIAJBDGpBABDLAyEDIAJBDGpBARDLAyEEAkAgAUGEAUkNACABEMcCCyAAIAQ2AgQgACADNgIAIAJBEGokAAtRAQF/AkAgAiAAKAIAIAAoAggiA2tNDQAgACADIAJBAUEBEOgBIAAoAgghAwsCQCACRQ0AIAAoAgQgA2ogASAC/AoAAAsgACADIAJqNgIIQQALSgEDf0EAIQMCQCACRQ0AAkADQCAALQAAIgQgAS0AACIFRw0BIABBAWohACABQQFqIQEgAkF/aiICRQ0CDAALCyAEIAVrIQMLIAMLTQEBfwJAIAIgACgCACAAKAIIIgNrTQ0AIAAgAyACEO8BIAAoAgghAwsCQCACRQ0AIAAoAgQgA2ogASAC/AoAAAsgACADIAJqNgIIQQALTQEBfwJAIAIgACgCACAAKAIIIgNrTQ0AIAAgAyACEPABIAAoAgghAwsCQCACRQ0AIAAoAgQgA2ogASAC/AoAAAsgACADIAJqNgIIQQALSQECfyMAQRBrIgIkACACQQhqIAAoAgAQ3wMgAigCCCIDIAIoAgwiACABENsDIQECQCAARQ0AIAMgAEEBEKoDCyACQRBqJAAgAQtPAQJ/IAAoAgQhAiAAKAIAIQMCQCAAKAIIIgAtAABFDQAgA0HZhcQAQQQgAigCDBEJAEUNAEEBDwsgACABQQpGOgAAIAMgASACKAIQEQYAC0IBAX8jAEEQayICJAAgAiABNgIEIAIgADYCACACQRetQiCGIAKthDcDCEGppsAAIAJBCGoQ4gEhASACQRBqJAAgAQtCAQF/IwBBEGsiAiQAIAIgATYCBCACIAA2AgAgAkEXrUIghiACrYQ3AwhBvabAACACQQhqEOIBIQEgAkEQaiQAIAELSgECfwJAAkAgASgCBCICIAEoAghJDQBBACEDDAELQQEhAyABIAJBAWo2AgQgASgCACgCACACEPgCIQELIAAgATYCBCAAIAM2AgALQgECfyAAIAEoAgggAUEIaiABLQATIgJB1wFLIgMbNgIAIAAgASgCDCACQcAAakH/AXEiAUEMIAFBDEkbIAMbNgIEC1IBAn9BACEBQQBBACgCjIpEIgJBAWo2AoyKRAJAIAJBAEgNAEEBIQFBAC0AiIpEDQBBACAAOgCIikRBAEEAKAKEikRBAWo2AoSKREECIQELIAELPQEBfyMAQRBrIgIkACABQQFBAUEAIAJBBmogACgCACACQQZqQQoQdiIAakEKIABrEF0hACACQRBqJAAgAAs9AQF/IwBBIGsiAiQAIAFBAUEBQQAgAkEMaiAAKQMAIAJBDGpBFBB1IgBqQRQgAGsQXSEAIAJBIGokACAAC0gBAX8jAEEQayIAJAACQEEALQCshkRBA0YNACAAQQE6AAsgACAAQQtqNgIMQayGxABBACAAQQxqQZyowAAQkAILIABBEGokAAtFAQF/IwBBEGsiASQAIAFBCGogACAAKAIAQQRBKBDrAQJAIAEoAggiAEGBgICAeEYNACAAIAEoAgwQ9wIACyABQRBqJAALRQEBfyMAQRBrIgEkACABQQhqIAAgACgCAEEIQSAQ6wECQCABKAIIIgBBgYCAgHhGDQAgACABKAIMEPcCAAsgAUEQaiQAC0UBAX8jAEEQayIBJAAgAUEIaiAAIAAoAgBBCEEQEOsBAkAgASgCCCIAQYGAgIB4Rg0AIAAgASgCDBD3AgALIAFBEGokAAtFAQF/IwBBEGsiASQAIAFBCGogACAAKAIAQQRBIBDrAQJAIAEoAggiAEGBgICAeEYNACAAIAEoAgwQ9wIACyABQRBqJAALSAIBfwF+IwBBEGsiAiQAIAIgASgCABDhAwJAAkAgAigCAA0AQgAhAwwBCyAAIAIpAwg3AwhCASEDCyAAIAM3AwAgAkEQaiQAC0gCAn8BfCABKAIIIgJBgICAAXEhAyAAKwMAIQQCQCACQYCAgIABcQ0AIAEgBCADQQBHQQAQXg8LIAEgBCADQQBHIAEvAQ4QUwtGAQJ/IwBBIGsiAiQAIAJBCDoACCACQQhqIAJBH2pBuKfAABCaAiEDIABBgYCAgHg2AgAgACADNgIEIAEQtwEgAkEgaiQAC0YBAn8jAEEgayICJAAgAkEIOgAIIAJBCGogAkEfakHIp8AAEJoCIQMgAEGBgICAeDYCACAAIAM2AgQgARC3ASACQSBqJAALRgECfyMAQSBrIgIkACACQQk6AAggAkEIaiACQR9qQbinwAAQmgIhAyAAQYGAgIB4NgIAIAAgAzYCBCABELcBIAJBIGokAAtGAQJ/IwBBIGsiAiQAIAJBCToACCACQQhqIAJBH2pByKfAABCaAiEDIABBgYCAgHg2AgAgACADNgIEIAEQtwEgAkEgaiQACz0BAX8jAEEQayICJAAgAkEyrUIghiAArYQ3AwggASgCACABKAIEQZ6lwAAgAkEIahBwIQEgAkEQaiQAIAELRgEBfyMAQRBrIgEkAAJAIABBf0oNAEHk78AAQQ4gAUEPakG478AAQYTwwAAQlgIACxCBBCAAQQEQygMhACABQRBqJAAgAAtKAQJ/IAEoAgQhAiABKAIAIQMQgQQCQEEIQQQQygMiAQ0AQQRBCBDZAwALIAEgAjYCBCABIAM2AgAgAEGE68IANgIEIAAgATYCAAs8AQF/IwBBIGsiAyQAIAMgATYCECADIAA2AgwgA0EBOwEcIAMgAjYCGCADIANBDGo2AhQgA0EUahDUAgALOwEBfyMAQRBrIgMkACADIAE2AgQgAyAANgIAIANB4QCtQiCGIAOthDcDCEHoiMAAIANBCGogAhC+AgALNgACQCABaUEBRw0AIABBgICAgHggAWtLDQACQCAARQ0AEIEEIAAgARDKAyIBRQ0BCyABDwsAC0EBAX8gACgCACEAAkAgASgCCCICQYCAgBBxDQACQCACQYCAgCBxDQAgACABEM8BDwsgACABEPgBDwsgACABEPkBC0EBAX8gACgCACEAAkAgASgCCCICQYCAgBBxDQACQCACQYCAgCBxDQAgACABEK4CDwsgACABEP0BDwsgACABEPwBC0ABAX8jAEEQayIDJAAgA0EIOgAAIAMgAUGggcAAEJoCIQEgAEGVgICAeDYCCCAAIAE2AgAgAhC2ASADQRBqJAALQAEBfyMAQRBrIgMkACADQQk6AAAgAyABQaCBwAAQmgIhASAAQZWAgIB4NgIIIAAgATYCACACELYBIANBEGokAAs4AQF/AkAgACgCCCIBRQ0AIAAoAgQhAANAIAAQuAEgAEEQahC4ASAAQSBqIQAgAUF/aiIBDQALCwtBAQJ/IAEoAgAQhQMhAUEAKAK0hkQhAkEAKAKwhkQhA0EAQgA3ArCGRCAAIAIgASADQQFGIgMbNgIEIAAgAzYCAAs5AQF/IwBBEGsiASQAIAEgADYCDAJAIABBhAFJDQAgANBvJgFB+IXEACABQQxqEKABCyABQRBqJAALQQACQCAAKAIAQYCAgIB4Rg0AIAEgACgCBCAAKAIIEIgDDwsgASgCACABKAIEIAAoAgwoAgAiACgCACAAKAIEEHALOQACQCACQYCAxABGDQAgACACIAEoAhARBgBFDQBBAQ8LAkAgAw0AQQAPCyAAIAMgBCABKAIMEQkACzsBAX8jAEEQayIGJAAgBiACNgIMIAYgATYCCCAAIAZBCGpBpIXEACAGQQxqQaSFxAAgAyAEIAUQwwEACy8AAkAgA2lBAUcNACABQYCAgIB4IANrSw0AIAAgASADIAIQmAMiA0UNACADDwsACzoBAX8CQCABKAIIIgJBgICAEHENAAJAIAJBgICAIHENACAAIAEQzwEPCyAAIAEQ+AEPCyAAIAEQ+QELOwEBf0EBIQICQCAAIAEQqwENACABKAIAQb+FxABBAiABKAIEKAIMEQkADQAgAEEEaiABEKsBIQILIAILNQEBfyMAQRBrIgIkACACIAA2AgwgAUHIrMAAQQUgAkEMakG4rMAAEMABIQAgAkEQaiQAIAALNgEBf0EBIQICQAJAIAEoAgAQ8gNBAUYNAEEAIQIMAQsgARDpAyEBCyAAIAE2AgQgACACNgIACy0BAX8jAEEQayIBJAAgAUHIAK1CIIYgAUEPaq2ENwMAQeiIwAAgASAAEL4CAAstAQF/IwBBEGsiASQAIAFB5ACtQiCGIAFBD2qthDcDAEHoiMAAIAEgABC+AgALLQEBfyMAQRBrIgMkACADIAAQlgEgAyABIAIQmgIhAiAAELYBIANBEGokACACCzMBAX8gACgCACEBAkAgACgCCCIAQf///8d9Rw0AIAEQhQIPCyABIABB////B3FBARCqAwstAgF/AX4jAEEQayIBJAAgACkCACECIAEgADYCDCABIAI3AgQgAUEEahDrAwALKAEBfwJAIAAoAgBFDQAgACgCBCIBRQ0AIAAoAgggAUECdEEEEKoDCwsrAQF/AkAgACgCCCIBQf///8d9Rw0AIAAoAgBBfGooAAAPCyABQf///wdxCyQBAX8jAEEQayICJAAgAiABNgIMIAIgADYCCCACQQhqEOwDAAsmAAJAIAANAEGoscAAQTIQzgMACyAAIAIgAyAEIAUgASgCEBENAAskAAJAIAANAEGoscAAQTIQzgMACyAAIAIgAyAEIAEoAhARGgALJAACQCAADQBBqLHAAEEyEM4DAAsgACACIAMgBCABKAIQEQsACyQAAkAgAA0AQaixwABBMhDOAwALIAAgAiADIAQgASgCEBEKAAskAAJAIAANAEGoscAAQTIQzgMACyAAIAIgAyAEIAEoAhARCgALJAACQCAADQBBqLHAAEEyEM4DAAsgACACIAMgBCABKAIQERsACyQAAkAgAA0AQaixwABBMhDOAwALIAAgAiADIAQgASgCEBEKAAskAAJAIAANAEGoscAAQTIQzgMACyAAIAIgAyAEIAEoAhARCwALJAACQCAADQBBqLHAAEEyEM4DAAsgACACIAMgBCABKAIQERgACyoBAX8CQCAAKAIAIgFBgICAgHhyQYCAgIB4Rg0AIAAoAgQgAUEBEKoDCwsgAAJAIAFFDQAgAiADENkDAAsgACADNgIEIAAgAjYCAAsiAAJAIAANAEGoscAAQTIQzgMACyAAIAIgAyABKAIQEQgACyMAAkAgAC0AAA0AIAFBnIDDAEEFEGcPCyABQaGAwwBBBBBnCyAAAkAgAA0AQaixwABBMhDOAwALIAAgAiABKAIQEQYACxwAIAAgAUEuRiAALQAEcjoABCAAKAIAIAEQjwMLHwAgACgCACAAKAIEQQAoAoCKRCIAQcsAIAAbEQUAAAshAAJAIAFFDQBBpOzCAEE5QcDswgAQvgIACyAAQQA2AgALHgEBfxCCBCEEIABBADYCCCAAIAQ2AgQgACABNgIACx0AIAAgASgCABD4AzYCCCAAQQA2AgQgACABNgIACx0BAX8CQCAAKAIAIgFFDQAgACgCBCABQQEQqgMLCxgAAkAgAUEJSQ0AIAEgABCIAQ8LIAAQOAsgAAJAIABBgICAgHhyQYCAgIB4Rg0AIAEgAEEBEKoDCwsdAQF/AkAgACgCACIBRQ0AIAAoAgQgAUEBEKoDCwsdAQF/AkAgACgCACIBRQ0AIAAoAgQgAUEBEKoDCwsaACAAJQEgASUBIAEQxwIgAiUBIAIQxwIQDQsdAgF/AW8gACUBIAElARAiIQMQ/wMiAiADJgEgAgsdAgF/AW8gACUBIAElARAmIQMQ/wMiAiADJgEgAgscAQF/IAAQ/wMiAiABJgEgAhA8IgIlASACEMcCCxgAIAAgAkH/AXG4EIsDNgIEIABBADYCAAsdACAAQQhqQQApAsjpQjcCACAAQQApAsDpQjcCAAsdACAAQQhqQQApAtjpQjcCACAAQQApAtDpQjcCAAsWAAJAIABFDQAgACABENkDAAsQuQMACxsCAX8BbyAAJQEgARAbIQMQ/wMiAiADJgEgAgsXAAJAIAAoAgAiAEGEAUkNACAAEMcCCwscACAAQQA2AhAgAEIANwIIIABCgICAgMAANwIACxIAIAAgAUEBdEEBciACEL4CAAsYACABKAIAIAEoAgQgACgCACAAKAIEEHALGQIBfwFvIAAgARAAIQMQ/wMiAiADJgEgAgsZAgF/AW8gACABEAohAxD/AyICIAMmASACCxkCAX8BbyAAJQEQEiECEP8DIgEgAiYBIAELGQIBfwFvIAAlARATIQIQ/wMiASACJgEgAQsZAgF/AW8gACUBEBchAhD/AyIBIAImASABCxkCAX8BbyAAJQEQICECEP8DIgEgAiYBIAELGQIBfwFvIAAlARAkIQIQ/wMiASACJgEgAQsZAgF/AW8gACUBECUhAhD/AyIBIAImASABCxkCAX8BbyAAJQEQJyECEP8DIgEgAiYBIAELEwACQCABRQ0AIAAgASACEKoDCwsWACAAKAIAIgAoAgAgACgCBCABENsDCxYAIAAoAgAgASACIAAoAgQoAgwRCQALFwIBfwFvIAAQByECEP8DIgEgAiYBIAELFwIBfwFvIAAQCSECEP8DIgEgAiYBIAELFwIBfwFvIAAQDyECEP8DIgEgAiYBIAELEwAgACUBIAEgAiUBIAIQxwIQHAsPACAAIAEgAiADIAQQUgALFAAgACgCACABIAAoAgQoAgwRBgALFAAgACgCACABIAAoAgQoAhARBgALFQIBfwFvEBAhARD/AyIAIAEmASAACxUCAX8BbxARIQEQ/wMiACABJgEgAAsVAgF/AW8QISEBEP8DIgAgASYBIAALFQIBfwFvECghARD/AyIAIAEmASAACxUCAX8BbxAsIQEQ/wMiACABJgEgAAsRACABIAAoAgggACgCDBCIAwsRACAAKAIAIAAoAgQgARC1AwsRACAAKAIAIAAoAgQgARDbAwsNACAAIAEgAiADEFQPCxEAIAAoAgAgACgCBCABELUDCxAAIAAoAgBBgQEQwQNBAEcLEQAgABCDBDYCBCAAIAE2AgALEQAgACgCBCAAKAIIIAEQ2wMLFABBACAANgK0hkRBAEEBNgKwhkQLEQAgACgCACAAKAIEIAEQ2wMLEAAgACgCACAAKAIEIAEQUQsRACAAKAIAIAAoAgQgARDbAwsRACABIAAoAgAgACgCBBCIAwsRACAAKAIAIAAoAgQgARDbAwsRACAAKAIAIAAoAgQgARDbAwsRACAAKAIAIAAoAgQgARDbAwsRACABIAAoAgAgACgCBBCIAwsTACAAQYTrwgA2AgQgACABNgIACxAAIAEgACgCACAAKAIEEGcLEQEBfxD/AyIBIAAlASYBIAELDgAgACUBIAElASACEBULDAAgACABIAIQlQIPCw8AIAAoAgAgASgCABDAAwsOACAAKAIAIAEgAhDwAgsNACAAKAIAEPUDQQBHCw0AIAAoAgAQ9gNBAEcLDQAgACgCABD3A0EARwsOACAAKAIAIAEgAhCMAwsNACAAKAIAEPkDQQBHCw0AIAAoAgAQ+gNBAEcLDwAgAEHkscAAIAEgAhBwCw8AIABB7LXAACABIAIQcAsOACAAIAIgASgCDBEGAAsLACAAIAEQgAQaAAsPACAAQeDpwgAg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aW52YWxpZCB2YWx1ZTogwAssIGV4cGVjdGVkIMAADmludmFsaWQgdHlwZTogwAssIGV4cGVjdGVkIMAAEGFzc2VydGlvbiBgbGVmdCDAFyByaWdodGAgZmFpbGVkCiAgbGVmdDogwAkKIHJpZ2h0OiDAABBhc3NlcnRpb24gYGxlZnQgwBAgcmlnaHRgIGZhaWxlZDogwAkKICBsZWZ0OiDACQogcmlnaHQ6IMAAF0Rlc2VyaWFsaXphdGlvbiBlcnJvcjogwAAqaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZTogwADAAjogwAARdW5rbm93biB2YXJpYW50IGDAGGAsIHRoZXJlIGFyZSBubyB2YXJpYW50cwAvaG9tZS9jbGludXhydWx6Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvcmF0YXR1aS0wLjI4LjEvc3JjL3dpZGdldHMvcmVmbG93LnJzAC9ydXN0Yy80YTRlZjQ5M2UzYTE0ODhjNmUzMjE1NzAyMzgwODRiMzg5NDhmNmRiL2xpYnJhcnkvY29yZS9zcmMvbnVtL2ZsdDJkZWMvc3RyYXRlZ3kvZ3Jpc3UucnMAL3J1c3RjLzRhNGVmNDkzZTNhMTQ4OGM2ZTMyMTU3MDIzODA4NGIzODk0OGY2ZGIvbGlicmFyeS9hbGxvYy9zcmMvZm10LnJzAC9ydXN0Yy80YTRlZjQ5M2UzYTE0ODhjNmUzMjE1NzAyMzgwODRiMzg5NDhmNmRiL2xpYnJhcnkvY29yZS9zcmMvbnVtL2RpeV9mbG9hdC5ycwAvaG9tZS9jbGludXhydWx6Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvdW5pY29kZS13aWR0aC0wLjEuMTQvc3JjL3RhYmxlcy5ycwAvaG9tZS9jbGludXhydWx6Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvdW5pY29kZS1zZWdtZW50YXRpb24tMS4xMi4wL3NyYy90YWJsZXMucnMAL2hvbWUvY2xpbnV4cnVsei8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLXg4Nl82NC11bmtub3duLWxpbnV4LWdudS9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L3N0ZC9zcmMvc3lzL3RocmVhZF9sb2NhbC9ub190aHJlYWRzLnJzAC9ob21lL2NsaW51eHJ1bHovLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi9jb21wYWN0X3N0ci0wLjguMS9zcmMvcmVwci9zdGF0aWNfc3RyLnJzAC9ydXN0Yy80YTRlZjQ5M2UzYTE0ODhjNmUzMjE1NzAyMzgwODRiMzg5NDhmNmRiL2xpYnJhcnkvYWxsb2Mvc3JjL3N0ci5ycwAvaG9tZS9jbGludXhydWx6Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvcmF0YXR1aS0wLjI4LjEvc3JjL2J1ZmZlci9idWZmZXIucnMAL2hvbWUvY2xpbnV4cnVsei8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL2NvbXBhY3Rfc3RyLTAuOC4xL3NyYy9yZXByL2hlYXAucnMAL2hvbWUvY2xpbnV4cnVsei8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLXg4Nl82NC11bmtub3duLWxpbnV4LWdudS9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAC9ydXN0Yy80YTRlZjQ5M2UzYTE0ODhjNmUzMjE1NzAyMzgwODRiMzg5NDhmNmRiL2xpYnJhcnkvY29yZS9zcmMvbnVtL2ZsdDJkZWMvc3RyYXRlZ3kvZHJhZ29uLnJzAC9ob21lL2NsaW51eHJ1bHovLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi9yYXRhdHVpLTAuMjguMS9zcmMvdGV4dC9zcGFuLnJzAC9ydXN0Yy80YTRlZjQ5M2UzYTE0ODhjNmUzMjE1NzAyMzgwODRiMzg5NDhmNmRiL2xpYnJhcnkvY29yZS9zcmMvbnVtL2JpZ251bS5ycwAvcnVzdGMvNGE0ZWY0OTNlM2ExNDg4YzZlMzIxNTcwMjM4MDg0YjM4OTQ4ZjZkYi9saWJyYXJ5L2NvcmUvc3JjL2ZtdC9udW0ucnMAL2hvbWUvY2xpbnV4cnVsei8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL3JhdGF0dWktMC4yOC4xL3NyYy9idWZmZXIvY2VsbC5ycwAvaG9tZS9jbGludXhydWx6Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvcmF0YXR1aS0wLjI4LjEvc3JjL3dpZGdldHMvYmxvY2sucnMAL2hvbWUvY2xpbnV4cnVsei8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL3JhdGF0dWktMC4yOC4xL3NyYy93aWRnZXRzL3BhcmFncmFwaC5ycwAvaG9tZS9jbGludXhydWx6Ly5ydXN0dXAvdG9vbGNoYWlucy9zdGFibGUteDg2XzY0LXVua25vd24tbGludXgtZ251L2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwAvcnVzdGMvNGE0ZWY0OTNlM2ExNDg4YzZlMzIxNTcwMjM4MDg0YjM4OTQ4ZjZkYi9saWJyYXJ5L3N0ZC9zcmMvcGFuaWNraW5nLnJzAC9ob21lL2NsaW51eHJ1bHovLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi9zZXJkZV9jb3JlLTEuMC4yMjgvc3JjL2RlL3ZhbHVlLnJzAC9ob21lL2NsaW51eHJ1bHovLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi91bmljb2RlLXNlZ21lbnRhdGlvbi0xLjEyLjAvc3JjL2dyYXBoZW1lLnJzAC9ydXN0Yy80YTRlZjQ5M2UzYTE0ODhjNmUzMjE1NzAyMzgwODRiMzg5NDhmNmRiL2xpYnJhcnkvY29yZS9zcmMvdW5pY29kZS9wcmludGFibGUucnMAL2hvbWUvY2xpbnV4cnVsei8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL3NlcmRlLTEuMC4yMjgvc3JjL3ByaXZhdGUvZGUucnMAL2hvbWUvY2xpbnV4cnVsei8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLXg4Nl82NC11bmtub3duLWxpbnV4LWdudS9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L3N0ZC9zcmMvc3luYy9vbmNlLnJzAC9ydXN0L2RlcHMvaGFzaGJyb3duLTAuMTYuMS9zcmMvcmF3L21vZC5ycwAvcnVzdGMvNGE0ZWY0OTNlM2ExNDg4YzZlMzIxNTcwMjM4MDg0YjM4OTQ4ZjZkYi9saWJyYXJ5L2NvcmUvc3JjL2ZtdC9tb2QucnMAL2hvbWUvY2xpbnV4cnVsei8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL2NvbXBhY3Rfc3RyLTAuOC4xL3NyYy9yZXByL21vZC5ycwAvaG9tZS9jbGludXhydWx6Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvc2VyZGVfY29yZS0xLjAuMjI4L3NyYy9kZS9tb2QucnMAL3J1c3RjLzRhNGVmNDkzZTNhMTQ4OGM2ZTMyMTU3MDIzODA4NGIzODk0OGY2ZGIvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy9tb2QucnMAL3J1c3RjLzRhNGVmNDkzZTNhMTQ4OGM2ZTMyMTU3MDIzODA4NGIzODk0OGY2ZGIvbGlicmFyeS9jb3JlL3NyYy9udW0vZmx0MmRlYy9tb2QucnMAL3J1c3QvZGVwcy9kbG1hbGxvYy0wLjIuMTEvc3JjL2RsbWFsbG9jLnJzAC9ob21lL2NsaW51eHJ1bHovLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi9jb25zb2xlX2Vycm9yX3BhbmljX2hvb2stMC4xLjcvc3JjL2xpYi5ycwAvaG9tZS9jbGludXhydWx6Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvc2VyZGUtd2FzbS1iaW5kZ2VuLTAuNi41L3NyYy9saWIucnMAL2hvbWUvY2xpbnV4cnVsei8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL29uY2VfY2VsbC0xLjIxLjMvc3JjL2xpYi5ycwAvaG9tZS9jbGludXhydWx6Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvdW5pY29kZS10cnVuY2F0ZS0xLjEuMC9zcmMvbGliLnJzAMAQIGVsZW1lbnRzIGluIG1hcAAMYSB0eXBlIHRhZyBgwBRgIG9yIGFueSBvdGhlciB2YWx1ZQDAFSBlbGVtZW50cyBpbiBzZXF1ZW5jZQAQZmxvYXRpbmcgcG9pbnQgYMABYAABYMAGYCBvciBgwAFgAAtjaGFyYWN0ZXIgYMABYAAJaW50ZWdlciBgwAFgAAlib29sZWFuIGDAAWAAD21pc3NpbmcgZmllbGQgYMABYAARZHVwbGljYXRlIGZpZWxkIGDAAWAAAWDAAWAACEpzVmFsdWUowAEpACVpbmRleCBvdXRzaWRlIG9mIGJ1ZmZlcjogdGhlIGFyZWEgaXMgwA8gYnV0IGluZGV4IGlzICjAAiwgwAEpAAAAAPUNEABlAAAAtAYAAB8AAAAAAAAAAAAAAAEAAAAOAAAAAAAAAAAAAAABAAAADwAAAIASEAAKAAAA8gAAACYAAACAEhAACgAAAPMAAAAmAAAAd2hpdGVibGFja3JlZGdyZWVueWVsbG93bWFnZW50YWdyYXkA5xAQAG8AAACVAAAADgAAAHR5cGVpbnRlcm5hbGx5IHRhZ2dlZCBlbnVtIFR1aU5vZGV0aXRsZWJvcmRlcndpZHRoaGVpZ2h0Y29udGVudGNvbG9yYmdfY29sb3JSZW5kZXJPdXRwdXRjaGFyc2Znc2Jnc+KUjOKUkOKUlOKUmOKUguKUgAAAAI8UEAADAAAAkhQQAAMAAACVFBAAAwAAAJgUEAADAAAAmxQQAAMAAACbFBAAAwAAAJ4UEAADAAAAnhQQAAMAAACAEhAACgAAALgAAABAAAAAIOKUnOKUpOKUrOKUtOKUvOKVreKVruKVr+KVsBAAAAAEAAAABAAAABEAAABjYWxsZWQgYFJlc3VsdDo6dW53cmFwKClgIG9uIGFuIGBFcnJgIHZhbHVlAIASEAAKAAAAlAAAAC8AAABpbnZhbGlkIGpzb25zdHJ1Y3QgdmFyaWFudCBUdWlOb2RlOjpCb3hzdHJ1Y3QgdmFyaWFudCBUdWlOb2RlOjpUZXh0c3RydWN0IEJveFByb3Bzc3RydWN0IFRleHRQcm9wc0JveFRleHQAAAC+FRAAAwAAAMEVEAAEAAAAdmFyaWFudCBpZGVudGlmaWVyZmllbGQgaWRlbnRpZmllcnByb3BzY2hpbGRyZW52YXJpYW50IGluZGV4IDAgPD0gaSA8IDIABxYQABgAAAAAAAAACAAAAAQAAAAKAAAAAAAAAAQAAAAEAAAAEgAAAEVycm9yYXR0ZW1wdGVkIHRvIHRha2Ugb3duZXJzaGlwIG9mIFJ1c3QgdmFsdWUgd2hpbGUgaXQgd2FzIGJvcnJvd2VkYSBzZXF1ZW5jZQAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAQAAABMAAAAAAAAAAAAAAAEAAAAHAAAAAAAAABAAAAAEAAAACAAAAAAAAAAIAAAABAAAABQAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwX3Rocm93KClgIG9uIGEgYE5vbmVgIHZhbHVlQ291bGRuJ3QgZGVzZXJpYWxpemUgaTY0IG9yIHU2NCBmcm9tIGEgQmlnSW50IG91dHNpZGUgaTY0OjpNSU4uLnU2NDo6TUFYIGJvdW5kcwAAAAAAAAAAAQAAABoAAAAbAAAAHAAAAE9uY2UgaW5zdGFuY2UgaGFzIHByZXZpb3VzbHkgYmVlbiBwb2lzb25lZG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AABbDhAAdQAAAJ8AAAAyAAAATWFwQWNjZXNzOjpuZXh0X3ZhbHVlIGNhbGxlZCBiZWZvcmUgbmV4dF9rZXnEDBAAaAAAAGcFAAAbAAAAVxEQAGkAAAA1AAAADgAAAP//////////QBgQAAAAAAAAAAAAAAAAAEF0dGVtcHRlZCB0byBpbml0aWFsaXplIHRocmVhZC1sb2NhbCB3aGlsZSBpdCBp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ABsAAAAtDRAAcQAAAGMCAAA+AAAALQ0QAHEAAAB/AgAAMgAAAC0NEABxAAAAhgIAACwAAAAtDRAAcQAAAIoCAAApAAAALQ0QAHEAAAATAwAAHQAAAC0NEABxAAAAFgMAACIAAAAAAwAAbwMAAIMEAACJBAAAkQUAAL0FAAC/BQAAvwUAAMEFAADCBQAAxAUAAMUFAADHBQAAxwUAABAGAAAaBgAASwYAAF8GAABwBgAAcAYAANYGAADcBgAA3wYAAOQGAADnBgAA6AYAAOoGAADtBgAAEQcAABEHAAAwBwAASgcAAKYHAACwBwAA6wcAAPMHAAD9BwAA/QcAABYIAAAZCAAAGwgAACMIAAAlCAAAJwgAACkIAAAtCAAAWQgAAFsIAACXCAAAnwgAAMoIAADhCAAA4wgAAAIJAAA6CQAAOgkAADwJAAA8CQAAQQkAAEgJAABRCQAAVwkAAGIJAABjCQAAgQkAAIEJAAC8CQAAvAkAAL4JAAC+CQAAwQkAAMQJAADXCQAA1wkAAOIJAADjCQAA/gkAAP4JAAABCgAAAgoAADwKAAA8CgAAQQoAAEIKAABHCgAASAoAAEsKAABNCgAAUQoAAFEKAABwCgAAcQoAAHUKAAB1CgAAgQoAAIIKAAC8CgAAvAoAAMEKAADFCgAAxwoAAMgKAADiCgAA4woAAPoKAAD/CgAAAQsAAAELAAA8CwAAPAsAAD4LAAA/CwAAQQsAAEQLAABVCwAAVwsAAGILAABjCwAAggsAAIILAAC+CwAAvgsAAMALAADACwAAzQsAAM0LAADXCwAA1wsAAAAMAAAADAAABAwAAAQMAAA8DAAAPAwAAD4MAABADAAARgwAAEgMAABKDAAATAwAAFUMAABWDAAAYgwAAGMMAACBDAAAgQwAALwMAAC8DAAAvwwAAMAMAADCDAAAwgwAAMYMAADIDAAAygwAAM0MAADVDAAA1gwAAOIMAADjDAAAAA0AAAENAAA7DQAAPA0AAD4NAAA+DQAAQQ0AAEQNAABXDQAAVw0AAGINAABjDQAAgQ0AAIENAADKDQAAyg0AAM8NAADPDQAA0g0AANQNAADWDQAA1g0AAN8NAADfDQAAMQ4AADEOAAA0DgAAOg4AAEcOAABODgAAsQ4AALEOAAC0DgAAvA4AAMgOAADODgAAGA8AABkPAAA1DwAANQ8A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APMeAQD0HgEAAB8BAAEfAQA2HwEAOh8BAEAfAQBCHwEAWh8BAFofAQBANAEAQDQBAEc0AQBVNAEAHmEBAClhAQAtYQEAL2EBAPBqAQD0agEAMGsBADZrAQBPbwEAT28BAI9vAQCSbwEA5G8BAORvAQDwbwEA8W8BAJ28AQCevAEAAM8BAC3PAQAwzwEARs8BAGXRAQBp0QEAbdEBAHLRAQB70QEAgtEBAIXRAQCL0QEAqtEBAK3RAQBC0gEARNIBAADaAQA22gEAO9oBAGzaAQB12gEAddoBAITaAQCE2gEAm9oBAJ/aAQCh2gEAr9oBAADgAQAG4AEACOABABjgAQAb4AEAIeABACPgAQAk4AEAJuABACrgAQCP4AEAj+ABADDhAQA24QEAruIBAK7iAQDs4gEA7+IBAOzkAQDv5AEA7uUBAO/lAQDQ6AEA1ugBAETpAQBK6QEA+/MBAP/zAQAgAA4AfwAOAAABDgDvAQ4AaW5jb25zaXN0ZW50IHN0YXRlAAAoRBAAEgAAAC0NEABxAAAAzQEAAA0AAAAAAAUACQAJAAkACQAJAAoACgAKAAsACwAQABUAGgAdACAAJQApADgASwBVAGUAdwCAAI0AmgCnALEAtQC5AMAAxQDPANQA1QDXANcA1wDYANgA2ADYANgA2ADYANgA3ADkAOcA6QDxAPEA/gD/AAUBEgEWAR4BHgEfAR8BHwEfAR8BJwEoASoBLAEsASwBLgEyATIBMwEzATcBOQE6AUkBTQFNAU0BTgFOAU4BTgFSAVIBUgFTAVQBVQFVAVUBVQFVAVgBWQFZAVkBWQFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFbAVsBWwFdAV8BXwFfAWYBawFwAXoBgwGNAY0BlAGdAacBrwG5AcEBywHUAd0B5wHvAfkBAQILAhQCHQInAi8COQJBAksCVAJdAmcCbwJ5AoECiwKUAp0CpwKvArkCwQLLAtQC3QLnAu8C+QIBAwsDFAMdAycDLwM5A0EDSwNUA10DZwNvA3kDgQOLA5QDnQOnA68DuQPBA8sD1APdA+cD7wP5AwEECwQUBB0EJwQvBDkEQQRLBFQEXQRnBG8EeQSBBIsElASdBKcErwS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtAS0BLQEtQS1BLUEtQS1BLUEtwS4BLgEugS6BLoEugS7BLsEvAS9BL0EvQS9BL0EvQS9BL0EvQS9BL0EvQS9BL0EwgTDBMMEwwTDBMMExQTFBMUExwTIBMkEzwTYBN4E6ATuBPEE/wQLBRIFHQUdBSUFKwUwBTYFNgU6BToFQwVJBVIFVgVWBVYFWwViBWgFbgVuBXAFeAV4BXgFeAV4BXgFeAV4BXgFeAV4BXgFeAV4BXgFeAV4BXgFeAV4BXgFeAV4BXgFeAV4BXgFeAV4BXgFeAV4BXgFeAV4BXgFeAV4BXgFeAV4BXgFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFewV7BXsFfgV+BX4FfgV+BX4FfgV+BX4FfgV+BX4FfgV+BX4FfgV+BX4FfgV/BYAFgAWABYAFggWCBYIFggWDBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFhwWHBYcFiQWJBYkFiQWJBYkFiQWJBYkFiQWJBYkFiQWJBYkFiQWJBYkFiQWJBYkFiQWJBYkFiQWJBYkFiQWJBYkFiQWJBYkFiQWJBYkFiQWLBYsFiwWLBY4FkQWSBZIFkgWSBZIFkgWSBZIFkgWSBZIFkgWSBZIFkgWSBZUFmAWYBZgFmAWYBZgFmAWYBZgFmAWYBZ0FngWfBZ8FnwWhBaEFoQWhBaIFogWjBaMFowWjBaMFowWkBaUFpQWlBaUFpQWlBaUFpQWlBaUFpQWlBaUFpQWlBaYFqgWuBbMFswWzBbUFtQW1BbYFtgW3BbgFuQW6Bb0FvwXBBcEFwQXCBcIFwgXCBcIFwgXCBcIFwgXCBQAAAAAJAAAAAgAAAAoAAAAKAAAABwAAAAsAAAAMAAAAAgAAAA0AAAANAAAAAQAAAA4AAAAfAAAAAgAAAH8AAACfAAAAAgAAAKkAAACpAAAABAAAAK0AAACtAAAAAgAAAK4AAACuAAAABAAAAAADAABvAwAAAwAAAIMEAACJBAAAAwAAAJEFAAC9BQAAAwAAAL8FAAC/BQAAAwAAAMEFAADCBQAAAwAAAMQFAADFBQAAAwAAAMcFAADHBQAAAwAAAAAGAAAFBgAACgAAABAGAAAaBgAAAwAAABwGAAAcBgAAAgAAAEsGAABfBgAAAwAAAHAGAABwBgAAAwAAANYGAADcBgAAAwAAAN0GAADdBgAACgAAAN8GAADkBgAAAwAAAOcGAADoBgAAAwAAAOoGAADtBgAAAwAAAA8HAAAPBwAACgAAABEHAAARBwAAAwAAADAHAABKBwAAAwAAAKYHAACwBwAAAwAAAOsHAADzBwAAAwAAAP0HAAD9BwAAAwAAABYIAAAZCAAAAwAAABsIAAAjCAAAAwAAACUIAAAnCAAAAwAAACkIAAAtCAAAAwAAAFkIAABbCAAAAwAAAJAIAACRCAAACgAAAJcIAACfCAAAAwAAAMoIAADhCAAAAwAAAOIIAADiCAAACgAAAOMIAAACCQAAAwAAAAMJAAADCQAADAAAABUJAAA5CQAABQAAADoJAAA6CQAAAwAAADsJAAA7CQAADAAAADwJAAA8CQAAAwAAAD4JAABACQAADAAAAEEJAABICQAAAwAAAEkJAABMCQAADAAAAE0JAABNCQAAAwAAAE4JAABPCQAADAAAAFEJAABXCQAAAwAAAFgJAABfCQAABQAAAGIJAABjCQAAAwAAAHgJAAB/CQAABQAAAIEJAACBCQAAAwAAAIIJAACDCQAADAAAAJUJAACoCQAABQAAAKoJAACwCQAABQAAALIJAACyCQAABQAAALYJAAC5CQAABQAAALwJAAC8CQAAAwAAAL4JAAC+CQAAAwAAAL8JAADACQAADAAAAMEJAADECQAAAwAAAMcJAADICQAADAAAAMsJAADMCQAADAAAAM0JAADNCQAAAwAAANcJAADXCQAAAwAAANwJAADdCQAABQAAAN8JAADfCQAABQAAAOIJAADjCQAAAwAAAPAJAADxCQAABQAAAP4JAAD+CQAAAwAAAAEKAAACCgAAAwAAAAMKAAADCgAADAAAADwKAAA8CgAAAwAAAD4KAABACgAADAAAAEEKAABCCgAAAwAAAEcKAABICgAAAwAAAEsKAABNCgAAAwAAAFEKAABRCgAAAwAAAHAKAABxCgAAAwAAAHUKAAB1CgAAAwAAAIEKAACCCgAAAwAAAIMKAACDCgAADAAAAJUKAACoCgAABQAAAKoKAACwCgAABQAAALIKAACzCgAABQAAALUKAAC5CgAABQAAALwKAAC8CgAAAwAAAL4KAADACgAADAAAAMEKAADFCgAAAwAAAMcKAADICgAAAwAAAMkKAADJCgAADAAAAMsKAADMCgAADAAAAM0KAADNCgAAAwAAAOIKAADjCgAAAwAAAPkKAAD5CgAABQAAAPoKAAD/CgAAAwAAAAELAAABCwAAAwAAAAILAAADCwAADAAAABULAAAoCwAABQAAACoLAAAwCwAABQAAADILAAAzCwAABQAAADULAAA5CwAABQAAADwLAAA8CwAAAwAAAD4LAAA/CwAAAwAAAEALAABACwAADAAAAEELAABECwAAAwAAAEcLAABICwAADAAAAEsLAABMCwAADAAAAE0LAABNCwAAAwAAAFULAABXCwAAAwAAAFwLAABdCwAABQAAAF8LAABfCwAABQAAAGILAABjCwAAAwAAAHELAABxCwAABQAAAIILAACCCwAAAwAAAL4LAAC+CwAAAwAAAL8LAAC/CwAADAAAAMALAADACwAAAwAAAMELAADCCwAADAAAAMYLAADICwAADAAAAMoLAADMCwAADAAAAM0LAADNCwAAAwAAANcLAADXCwAAAwAAAAAMAAAADAAAAwAAAAEMAAADDAAADAAAAAQMAAAEDAAAAwAAABUMAAAoDAAABQAAACoMAAA5DAAABQAAADwMAAA8DAAAAwAAAD4MAABADAAAAwAAAEEMAABEDAAADAAAAEYMAABIDAAAAwAAAEoMAABNDAAAAwAAAFUMAABWDAAAAwAAAFgMAABaDAAABQAAAGIMAABjDAAAAwAAAIEMAACBDAAAAwAAAIIMAACDDAAADAAAALwMAAC8DAAAAwAAAL4MAAC+DAAADAAAAL8MAADADAAAAwAAAMEMAADBDAAADAAAAMIMAADCDAAAAwAAAMMMAADEDAAADAAAAMYMAADIDAAAAwAAAMoMAADNDAAAAwAAANUMAADWDAAAAwAAAOIMAADjDAAAAwAAAPMMAADzDAAADAAAAAANAAABDQAAAwAAAAINAAADDQAADAAAABUNAAA6DQAABQAAADsNAAA8DQAAAwAAAD4NAAA+DQAAAwAAAD8NAABADQAADAAAAEENAABEDQAAAwAAAEYNAABIDQAADAAAAEoNAABMDQAADAAAAE0NAABNDQAAAwAAAE4NAABODQAACgAAAFcNAABXDQAAAwAAAGINAABjDQAAAwAAAIENAACBDQAAAwAAAIINAACDDQAADAAAAMoNAADKDQAAAwAAAM8NAADPDQAAAwAAANANAADRDQAADAAAANINAADUDQAAAwAAANYNAADWDQAAAwAAANgNAADeDQAADAAAAN8NAADfDQAAAwAAAPINAADzDQAADAAAADEOAAAxDgAAAwAAADMOAAAzDgAADAAAADQOAAA6DgAAAwAAAEcOAABODgAAAwAAALEOAACxDgAAAwAAALMOAACzDgAADAAAALQOAAC8DgAAAwAAAMgOAADODgAAAwAAABgPAAAZDwAAAwAAADUPAAA1DwAAAwAAADcPAAA3DwAAAwAAADkPAAA5DwAAAwAAAD4PAAA/DwAADAAAAHEPAAB+DwAAAwAAAH8PAAB/DwAADAAAAIAPAACEDwAAAwAAAIYPAACHDwAAAwAAAI0PAACXDwAAAwAAAJkPAAC8DwAAAwAAAMYPAADGDwAAAwAAAC0QAAAwEAAAAwAAADEQAAAxEAAADAAAADIQAAA3EAAAAwAAADkQAAA6EAAAAwAAADsQAAA8EAAADAAAAD0QAAA+EAAAAwAAAFYQAABXEAAADAAAAFgQAABZEAAAAwAAAF4QAABgEAAAAwAAAHEQAAB0EAAAAwAAAIIQAACCEAAAAwAAAIQQAACEEAAADAAAAIUQAACGEAAAAwAAAI0QAACNEAAAAwAAAJ0QAACdEAAAAwAAAAARAABfEQAABgAAAGARAACnEQAADgAAAKgRAAD/EQAADQAAAF0TAABfEwAAAwAAABIXAAAVFwAAAwAAADIXAAA0FwAAAwAAAFIXAABTFwAAAwAAAHIXAABzFwAAAwAAALQXAAC1FwAAAwAAALYXAAC2FwAADAAAALcXAAC9FwAAAwAAAL4XAADFFwAADAAAAMYXAADGFwAAAwAAAMcXAADIFwAADAAAAMkXAADTFwAAAwAAAN0XAADdFwAAAwAAAAsYAAANGAAAAwAAAA4YAAAOGAAAAgAAAA8YAAAPGAAAAwAAAIUYAACGGAAAAwAAAKkYAACpGAAAAwAAACAZAAAiGQAAAwAAACMZAAAmGQAADAAAACcZAAAoGQAAAwAAACkZAAArGQAADAAAADAZAAAxGQAADAAAADIZAAAyGQAAAwAAADMZAAA4GQAADAAAADkZAAA7GQAAAwAAABcaAAAYGgAAAwAAABkaAAAaGgAADAAAABsaAAAbGgAAAwAAAFUaAABVGgAADAAAAFYaAABWGgAAAwAAAFcaAABXGgAADAAAAFgaAABeGgAAAwAAAGAaAABgGgAAAwAAAGIaAABiGgAAAwAAAGUaAABsGgAAAwAAAG0aAAByGgAADAAAAHMaAAB8GgAAAwAAAH8aAAB/GgAAAwAAALAaAADOGgAAAwAAAAAbAAADGwAAAwAAAAQbAAAEGwAADAAAADQbAAA9GwAAAwAAAD4bAABBGwAADAAAAEIbAABEGwAAAwAAAGsbAABzGwAAAwAAAIAbAACBGwAAAwAAAIIbAACCGwAADAAAAKEbAAChGwAADAAAAKIbAAClGwAAAwAAAKYbAACnGwAADAAAAKgbAACtGwAAAwAAAOYbAADmGwAAAwAAAOcbAADnGwAADAAAAOgbAADpGwAAAwAAAOobAADsGwAADAAAAO0bAADtGwAAAwAAAO4bAADuGwAADAAAAO8bAADzGwAAAwAAACQcAAArHAAADAAAACwcAAAzHAAAAwAAADQcAAA1HAAADAAAADYcAAA3HAAAAwAAANAcAADSHAAAAwAAANQcAADgHAAAAwAAAOEcAADhHAAADAAAAOIcAADoHAAAAwAAAO0cAADtHAAAAwAAAPQcAAD0HAAAAwAAAPccAAD3HAAADAAAAPgcAAD5HAAAAwAAAMAdAAD/HQAAAwAAAAsgAAALIAAAAgAAAAwgAAAMIAAAAwAAAA0gAAANIAAADwAAAA4gAAAPIAAAAgAAACggAAAuIAAAAgAAADwgAAA8IAAABAAAAEkgAABJIAAABAAAAGAgAABvIAAAAgAAANAgAADwIAAAAwAAACIhAAAiIQAABAAAADkhAAA5IQAABAAAAJQhAACZIQAABAAAAKkhAACqIQAABAAAABojAAAbIwAABAAAACgjAAAoIwAABAAAAIgjAACIIwAABAAAAM8jAADPIwAABAAAAOkjAADzIwAABAAAAPgjAAD6IwAABAAAAMIkAADCJAAABAAAAKolAACrJQAABAAAALYlAAC2JQAABAAAAMAlAADAJQAABAAAAPslAAD+JQAABAAAAAAmAAAFJgAABAAAAAcmAAASJgAABAAAABQmAACFJgAABAAAAJAmAAAFJwAABAAAAAgnAAASJwAABAAAABQnAAAUJwAABAAAABYnAAAWJwAABAAAAB0nAAAdJwAABAAAACEnAAAhJwAABAAAACgnAAAoJwAABAAAADMnAAA0JwAABAAAAEQnAABEJwAABAAAAEcnAABHJwAABAAAAEwnAABMJwAABAAAAE4nAABOJwAABAAAAFMnAABVJwAABAAAAFcnAABXJwAABAAAAGMnAABnJwAABAAAAJUnAACXJwAABAAAAKEnAAChJwAABAAAALAnAACwJwAABAAAAL8nAAC/JwAABAAAADQpAAA1KQAABAAAAAUrAAAHKwAABAAAABsrAAAcKwAABAAAAFArAABQKwAABAAAAFUrAABVKwAABAAAAO8sAADxLAAAAwAAAH8tAAB/LQAAAwAAAOAtAAD/LQAAAwAAACowAAAvMAAAAwAAADAwAAAwMAAABAAAAD0wAAA9MAAABAAAAJkwAACaMAAAAwAAAJcyAACXMgAABAAAAJkyAACZMgAABAAAAG+mAABypgAAAwAAAHSmAAB9pgAAAwAAAJ6mAACfpgAAAwAAAPCmAADxpgAAAwAAAAKoAAACqAAAAwAAAAaoAAAGqAAAAwAAAAuoAAALqAAAAwAAACOoAAAkqAAADAAAACWoAAAmqAAAAwAAACeoAAAnqAAADAAAACyoAAAsqAAAAwAAAICoAACBqAAADAAAALSoAADDqAAADAAAAMSoAADFqAAAAwAAAOCoAADxqAAAAwAAAP+oAAD/qAAAAwAAACapAAAtqQAAAwAAAEepAABRqQAAAwAAAFKpAABSqQAADAAAAFOpAABTqQAAAwAAAGCpAAB8qQAABgAAAICpAACCqQAAAwAAAIOpAACDqQAADAAAALOpAACzqQAAAwAAALSpAAC1qQAADAAAALapAAC5qQAAAwAAALqpAAC7qQAADAAAALypAAC9qQAAAwAAAL6pAAC/qQAADAAAAMCpAADAqQAAAwAAAOWpAADlqQAAAwAAACmqAAAuqgAAAwAAAC+qAAAwqgAADAAAADGqAAAyqgAAAwAAADOqAAA0qgAADAAAADWqAAA2qgAAAwAAAEOqAABDqgAAAwAAAEyqAABMqgAAAwAAAE2qAABNqgAADAAAAHyqAAB8qgAAAwAAALCqAACwqgAAAwAAALKqAAC0qgAAAwAAALeqAAC4qgAAAwAAAL6qAAC/qgAAAwAAAMGqAADBqgAAAwAAAOuqAADrqgAADAAAAOyqAADtqgAAAwAAAO6qAADvqgAADAAAAPWqAAD1qgAADAAAAPaqAAD2qgAAAwAAAOOrAADkqwAADAAAAOWrAADlqwAAAwAAAOarAADnqwAADAAAAOirAADoqwAAAwAAAOmrAADqqwAADAAAAOyrAADsqwAADAAAAO2rAADtqwAAAwAAAACsAAAArAAACAAAAAGsAAAbrAAACQAAABysAAAcrAAACAAAAB2sAAA3rAAACQAAADisAAA4rAAACAAAADmsAABTrAAACQAAAFSsAABUrAAACAAAAFWsAABvrAAACQAAAHCsAABwrAAACAAAAHGsAACLrAAACQAAAIysAACMrAAACAAAAI2sAACnrAAACQAAAKisAACorAAACAAAAKmsAADDrAAACQAAAMSsAADErAAACAAAAMWsAADfrAAACQAAAOCsAADgrAAACAAAAOGsAAD7rAAACQAAAPysAAD8rAAACAAAAP2sAAAXrQAACQAAABitAAAYrQAACAAAABmtAAAzrQAACQAAADStAAA0rQAACAAAADWtAABPrQAACQAAAFCtAABQrQAACAAAAFGtAABrrQAACQAAAGytAABsrQAACAAAAG2tAACHrQAACQAAAIitAACIrQAACAAAAImtAACjrQAACQAAAKStAACkrQAACAAAAKWtAAC/rQAACQAAAMCtAADArQAACAAAAMGtAADbrQAACQAAANytAADcrQAACAAAAN2tAAD3rQAACQAAAPitAAD4rQAACAAAAPmtAAATrgAACQAAABSuAAAUrgAACAAAABWuAAAvrgAACQAAADCuAAAwrgAACAAAADGuAABLrgAACQAAAEyuAABMrgAACAAAAE2uAABnrgAACQAAAGiuAABorgAACAAAAGmuAACDrgAACQAAAISuAACErgAACAAAAIWuAACfrgAACQAAAKCuAACgrgAACAAAAKGuAAC7rgAACQAAALyuAAC8rgAACAAAAL2uAADXrgAACQAAANiuAADYrgAACAAAANmuAADzrgAACQAAAPSuAAD0rgAACAAAAPWuAAAPrwAACQAAABCvAAAQrwAACAAAABGvAAArrwAACQAAACyvAAAsrwAACAAAAC2vAABHrwAACQAAAEivAABIrwAACAAAAEmvAABjrwAACQAAAGSvAABkrwAACAAAAGWvAAB/rwAACQAAAICvAACArwAACAAAAIGvAACbrwAACQAAAJyvAACcrwAACAAAAJ2vAAC3rwAACQAAALivAAC4rwAACAAAALmvAADTrwAACQAAANSvAADUrwAACAAAANWvAADvrwAACQAAAPCvAADwrwAACAAAAPGvAAALsAAACQAAAAywAAAMsAAACAAAAA2wAAAnsAAACQAAACiwAAAosAAACAAAACmwAABDsAAACQAAAESwAABEsAAACAAAAEWwAABfsAAACQAAAGCwAABgsAAACAAAAGGwAAB7sAAACQAAAHywAAB8sAAACAAAAH2wAACXsAAACQAAAJiwAACYsAAACAAAAJmwAACzsAAACQAAALSwAAC0sAAACAAAALWwAADPsAAACQAAANCwAADQsAAACAAAANGwAADrsAAACQAAAOywAADssAAACAAAAO2wAAAHsQAACQAAAAixAAAIsQAACAAAAAmxAAAjsQAACQAAACSxAAAksQAACAAAACWxAAA/sQAACQAAAECxAABAsQAACAAAAEGxAABbsQAACQAAAFyxAABcsQAACAAAAF2xAAB3sQAACQAAAHixAAB4sQAACAAAAHmxAACTsQAACQAAAJSxAACUsQAACAAAAJWxAACvsQAACQAAALCxAACwsQAACAAAALGxAADLsQAACQAAAMyxAADMsQAACAAAAM2xAADnsQAACQAAAOixAADosQAACAAAAOmxAAADsgAACQAAAASyAAAEsgAACAAAAAWyAAAfsgAACQAAACCyAAAgsgAACAAAACGyAAA7sgAACQAAADyyAAA8sgAACAAAAD2yAABXsgAACQAAAFiyAABYsgAACAAAAFmyAABzsgAACQAAAHSyAAB0sgAACAAAAHWyAACPsgAACQAAAJCyAACQsgAACAAAAJGyAACrsgAACQAAAKyyAACssgAACAAAAK2yAADHsgAACQAAAMiyAADIsgAACAAAAMmyAADjsgAACQAAAOSyAADksgAACAAAAOWyAAD/sgAACQAAAACzAAAAswAACAAAAAGzAAAbswAACQAAAByzAAAcswAACAAAAB2zAAA3swAACQAAADizAAA4swAACAAAADmzAABTswAACQAAAFSzAABUswAACAAAAFWzAABvswAACQAAAHCzAABwswAACAAAAHGzAACLswAACQAAAIyzAACMswAACAAAAI2zAACnswAACQAAAKizAACoswAACAAAAKmzAADDswAACQAAAMSzAADEswAACAAAAMWzAADfswAACQAAAOCzAADgswAACAAAAOGzAAD7swAACQAAAPyzAAD8swAACAAAAP2zAAAXtAAACQAAABi0AAAYtAAACAAAABm0AAAztAAACQAAADS0AAA0tAAACAAAADW0AABPtAAACQAAAFC0AABQtAAACAAAAFG0AABrtAAACQAAAGy0AABstAAACAAAAG20AACHtAAACQAAAIi0AACItAAACAAAAIm0AACjtAAACQAAAKS0AACktAAACAAAAKW0AAC/tAAACQAAAMC0AADAtAAACAAAAMG0AADbtAAACQAAANy0AADctAAACAAAAN20AAD3tAAACQAAAPi0AAD4tAAACAAAAPm0AAATtQAACQAAABS1AAAUtQAACAAAABW1AAAvtQAACQAAADC1AAAwtQAACAAAADG1AABLtQAACQAAAEy1AABMtQAACAAAAE21AABntQAACQAAAGi1AABotQAACAAAAGm1AACDtQAACQAAAIS1AACEtQAACAAAAIW1AACftQAACQAAAKC1AACgtQAACAAAAKG1AAC7tQAACQAAALy1AAC8tQAACAAAAL21AADXtQAACQAAANi1AADYtQAACAAAANm1AADztQAACQAAAPS1AAD0tQAACAAAAPW1AAAPtgAACQAAABC2AAAQtgAACAAAABG2AAArtgAACQAAACy2AAAstgAACAAAAC22AABHtgAACQAAAEi2AABItgAACAAAAEm2AABjtgAACQAAAGS2AABktgAACAAAAGW2AAB/tgAACQAAAIC2AACAtgAACAAAAIG2AACbtgAACQAAAJy2AACctgAACAAAAJ22AAC3tgAACQAAALi2AAC4tgAACAAAALm2AADTtgAACQAAANS2AADUtgAACAAAANW2AADvtgAACQAAAPC2AADwtgAACAAAAPG2AAALtwAACQAAAAy3AAAMtwAACAAAAA23AAAntwAACQAAACi3AAAotwAACAAAACm3AABDtwAACQAAAES3AABEtwAACAAAAEW3AABftwAACQAAAGC3AABgtwAACAAAAGG3AAB7twAACQAAAHy3AAB8twAACAAAAH23AACXtwAACQAAAJi3AACYtwAACAAAAJm3AACztwAACQAAALS3AAC0twAACAAAALW3AADPtwAACQAAANC3AADQtwAACAAAANG3AADrtwAACQAAAOy3AADstwAACAAAAO23AAAHuAAACQAAAAi4AAAIuAAACAAAAAm4AAAjuAAACQAAACS4AAAkuAAACAAAACW4AAA/uAAACQAAAEC4AABAuAAACAAAAEG4AABbuAAACQAAAFy4AABcuAAACAAAAF24AAB3uAAACQAAAHi4AAB4uAAACAAAAHm4AACTuAAACQAAAJS4AACUuAAACAAAAJW4AACvuAAACQAAALC4AACwuAAACAAAALG4AADLuAAACQAAAMy4AADMuAAACAAAAM24AADnuAAACQAAAOi4AADouAAACAAAAOm4AAADuQAACQAAAAS5AAAEuQAACAAAAAW5AAAfuQAACQAAACC5AAAguQAACAAAACG5AAA7uQAACQAAADy5AAA8uQAACAAAAD25AABXuQAACQAAAFi5AABYuQAACAAAAFm5AABzuQAACQAAAHS5AAB0uQAACAAAAHW5AACPuQAACQAAAJC5AACQuQAACAAAAJG5AACruQAACQAAAKy5AACsuQAACAAAAK25AADHuQAACQAAAMi5AADIuQAACAAAAMm5AADjuQAACQAAAOS5AADkuQAACAAAAOW5AAD/uQAACQAAAAC6AAAAugAACAAAAAG6AAAbugAACQAAABy6AAAcugAACAAAAB26AAA3ugAACQAAADi6AAA4ugAACAAAADm6AABTugAACQAAAFS6AABUugAACAAAAFW6AABvugAACQAAAHC6AABwugAACAAAAHG6AACLugAACQAAAIy6AACMugAACAAAAI26AACnugAACQAAAKi6AACougAACAAAAKm6AADDugAACQAAAMS6AADEugAACAAAAMW6AADfugAACQAAAOC6AADgugAACAAAAOG6AAD7ugAACQAAAPy6AAD8ugAACAAAAP26AAAXuwAACQAAABi7AAAYuwAACAAAABm7AAAzuwAACQAAADS7AAA0uwAACAAAADW7AABPuwAACQAAAFC7AABQuwAACAAAAFG7AABruwAACQAAAGy7AABsuwAACAAAAG27AACHuwAACQAAAIi7AACIuwAACAAAAIm7AACjuwAACQAAAKS7AACkuwAACAAAAKW7AAC/uwAACQAAAMC7AADAuwAACAAAAMG7AADbuwAACQAAANy7AADcuwAACAAAAN27AAD3uwAACQAAAPi7AAD4uwAACAAAAPm7AAATvAAACQAAABS8AAAUvAAACAAAABW8AAAvvAAACQAAADC8AAAwvAAACAAAADG8AABLvAAACQAAAEy8AABMvAAACAAAAE28AABnvAAACQAAAGi8AABovAAACAAAAGm8AACDvAAACQAAAIS8AACEvAAACAAAAIW8AACfvAAACQAAAKC8AACgvAAACAAAAKG8AAC7vAAACQAAALy8AAC8vAAACAAAAL28AADXvAAACQAAANi8AADYvAAACAAAANm8AADzvAAACQAAAPS8AAD0vAAACAAAAPW8AAAPvQAACQAAABC9AAAQvQAACAAAABG9AAArvQAACQAAACy9AAAsvQAACAAAAC29AABHvQAACQAAAEi9AABIvQAACAAAAEm9AABjvQAACQAAAGS9AABkvQAACAAAAGW9AAB/vQAACQAAAIC9AACAvQAACAAAAIG9AACbvQAACQAAAJy9AACcvQAACAAAAJ29AAC3vQAACQAAALi9AAC4vQAACAAAALm9AADTvQAACQAAANS9AADUvQAACAAAANW9AADvvQAACQAAAPC9AADwvQAACAAAAPG9AAALvgAACQAAAAy+AAAMvgAACAAAAA2+AAAnvgAACQAAACi+AAAovgAACAAAACm+AABDvgAACQAAAES+AABEvgAACAAAAEW+AABfvgAACQAAAGC+AABgvgAACAAAAGG+AAB7vgAACQAAAHy+AAB8vgAACAAAAH2+AACXvgAACQAAAJi+AACYvgAACAAAAJm+AACzvgAACQAAALS+AAC0vgAACAAAALW+AADPvgAACQAAANC+AADQvgAACAAAANG+AADrvgAACQAAAOy+AADsvgAACAAAAO2+AAAHvwAACQAAAAi/AAAIvwAACAAAAAm/AAAjvwAACQAAACS/AAAkvwAACAAAACW/AAA/vwAACQAAAEC/AABAvwAACAAAAEG/AABbvwAACQAAAFy/AABcvwAACAAAAF2/AAB3vwAACQAAAHi/AAB4vwAACAAAAHm/AACTvwAACQAAAJS/AACUvwAACAAAAJW/AACvvwAACQAAALC/AACwvwAACAAAALG/AADLvwAACQAAAMy/AADMvwAACAAAAM2/AADnvwAACQAAAOi/AADovwAACAAAAOm/AAADwAAACQAAAATAAAAEwAAACAAAAAXAAAAfwAAACQAAACDAAAAgwAAACAAAACHAAAA7wAAACQAAADzAAAA8wAAACAAAAD3AAABXwAAACQAAAFjAAABYwAAACAAAAFnAAABzwAAACQAAAHTAAAB0wAAACAAAAHXAAACPwAAACQAAAJDAAACQwAAACAAAAJHAAACrwAAACQAAAKzAAACswAAACAAAAK3AAADHwAAACQAAAMjAAADIwAAACAAAAMnAAADjwAAACQAAAOTAAADkwAAACAAAAOXAAAD/wAAACQAAAADBAAAAwQAACAAAAAHBAAAbwQAACQAAABzBAAAcwQAACAAAAB3BAAA3wQAACQAAADjBAAA4wQAACAAAADnBAABTwQAACQAAAFTBAABUwQAACAAAAFXBAABvwQAACQAAAHDBAABwwQAACAAAAHHBAACLwQAACQAAAIzBAACMwQAACAAAAI3BAACnwQAACQAAAKjBAACowQAACAAAAKnBAADDwQAACQAAAMTBAADEwQAACAAAAMXBAADfwQAACQAAAODBAADgwQAACAAAAOHBAAD7wQAACQAAAPzBAAD8wQAACAAAAP3BAAAXwgAACQAAABjCAAAYwgAACAAAABnCAAAzwgAACQAAADTCAAA0wgAACAAAADXCAABPwgAACQAAAFDCAABQwgAACAAAAFHCAABrwgAACQAAAGzCAABswgAACAAAAG3CAACHwgAACQAAAIjCAACIwgAACAAAAInCAACjwgAACQAAAKTCAACkwgAACAAAAKXCAAC/wgAACQAAAMDCAADAwgAACAAAAMHCAADbwgAACQAAANzCAADcwgAACAAAAN3CAAD3wgAACQAAAPjCAAD4wgAACAAAAPnCAAATwwAACQAAABTDAAAUwwAACAAAABXDAAAvwwAACQAAADDDAAAwwwAACAAAADHDAABLwwAACQAAAEzDAABMwwAACAAAAE3DAABnwwAACQAAAGjDAABowwAACAAAAGnDAACDwwAACQAAAITDAACEwwAACAAAAIXDAACfwwAACQAAAKDDAACgwwAACAAAAKHDAAC7wwAACQAAALzDAAC8wwAACAAAAL3DAADXwwAACQAAANjDAADYwwAACAAAANnDAADzwwAACQAAAPTDAAD0wwAACAAAAPXDAAAPxAAACQAAABDEAAAQxAAACAAAABHEAAArxAAACQAAACzEAAAsxAAACAAAAC3EAABHxAAACQAAAEjEAABIxAAACAAAAEnEAABjxAAACQAAAGTEAABkxAAACAAAAGXEAAB/xAAACQAAAIDEAACAxAAACAAAAIHEAACbxAAACQAAAJzEAACcxAAACAAAAJ3EAAC3xAAACQAAALjEAAC4xAAACAAAALnEAADTxAAACQAAANTEAADUxAAACAAAANXEAADvxAAACQAAAPDEAADwxAAACAAAAPHEAAALxQAACQAAAAzFAAAMxQAACAAAAA3FAAAnxQAACQAAACjFAAAoxQAACAAAACnFAABDxQAACQAAAETFAABExQAACAAAAEXFAABfxQAACQAAAGDFAABgxQAACAAAAGHFAAB7xQAACQAAAHzFAAB8xQAACAAAAH3FAACXxQAACQAAAJjFAACYxQAACAAAAJnFAACzxQAACQAAALTFAAC0xQAACAAAALXFAADPxQAACQAAANDFAADQxQAACAAAANHFAADrxQAACQAAAOzFAADsxQAACAAAAO3FAAAHxgAACQAAAAjGAAAIxgAACAAAAAnGAAAjxgAACQAAACTGAAAkxgAACAAAACXGAAA/xgAACQAAAEDGAABAxgAACAAAAEHGAABbxgAACQAAAFzGAABcxgAACAAAAF3GAAB3xgAACQAAAHjGAAB4xgAACAAAAHnGAACTxgAACQAAAJTGAACUxgAACAAAAJXGAACvxgAACQAAALDGAACwxgAACAAAALHGAADLxgAACQAAAMzGAADMxgAACAAAAM3GAADnxgAACQAAAOjGAADoxgAACAAAAOnGAAADxwAACQAAAATHAAAExwAACAAAAAXHAAAfxwAACQAAACDHAAAgxwAACAAAACHHAAA7xwAACQAAADzHAAA8xwAACAAAAD3HAABXxwAACQAAAFjHAABYxwAACAAAAFnHAABzxwAACQAAAHTHAAB0xwAACAAAAHXHAACPxwAACQAAAJDHAACQxwAACAAAAJHHAACrxwAACQAAAKzHAACsxwAACAAAAK3HAADHxwAACQAAAMjHAADIxwAACAAAAMnHAADjxwAACQAAAOTHAADkxwAACAAAAOXHAAD/xwAACQAAAADIAAAAyAAACAAAAAHIAAAbyAAACQAAABzIAAAcyAAACAAAAB3IAAA3yAAACQAAADjIAAA4yAAACAAAADnIAABTyAAACQAAAFTIAABUyAAACAAAAFXIAABvyAAACQAAAHDIAABwyAAACAAAAHHIAACLyAAACQAAAIzIAACMyAAACAAAAI3IAACnyAAACQAAAKjIAACoyAAACAAAAKnIAADDyAAACQAAAMTIAADEyAAACAAAAMXIAADfyAAACQAAAODIAADgyAAACAAAAOHIAAD7yAAACQAAAPzIAAD8yAAACAAAAP3IAAAXyQAACQAAABjJAAAYyQAACAAAABnJAAAzyQAACQAAADTJAAA0yQAACAAAADXJAABPyQAACQAAAFDJAABQyQAACAAAAFHJAABryQAACQAAAGzJAABsyQAACAAAAG3JAACHyQAACQAAAIjJAACIyQAACAAAAInJAACjyQAACQAAAKTJAACkyQAACAAAAKXJAAC/yQAACQAAAMDJAADAyQAACAAAAMHJAADbyQAACQAAANzJAADcyQAACAAAAN3JAAD3yQAACQAAAPjJAAD4yQAACAAAAPnJAAATygAACQAAABTKAAAUygAACAAAABXKAAAvygAACQAAADDKAAAwygAACAAAADHKAABLygAACQAAAEzKAABMygAACAAAAE3KAABnygAACQAAAGjKAABoygAACAAAAGnKAACDygAACQAAAITKAACEygAACAAAAIXKAACfygAACQAAAKDKAACgygAACAAAAKHKAAC7ygAACQAAALzKAAC8ygAACAAAAL3KAADXygAACQAAANjKAADYygAACAAAANnKAADzygAACQAAAPTKAAD0ygAACAAAAPXKAAAPywAACQAAABDLAAAQywAACAAAABHLAAArywAACQAAACzLAAAsywAACAAAAC3LAABHywAACQAAAEjLAABIywAACAAAAEnLAABjywAACQAAAGTLAABkywAACAAAAGXLAAB/ywAACQAAAIDLAACAywAACAAAAIHLAACbywAACQAAAJzLAACcywAACAAAAJ3LAAC3ywAACQAAALjLAAC4ywAACAAAALnLAADTywAACQAAANTLAADUywAACAAAANXLAADvywAACQAAAPDLAADwywAACAAAAPHLAAALzAAACQAAAAzMAAAMzAAACAAAAA3MAAAnzAAACQAAACjMAAAozAAACAAAACnMAABDzAAACQAAAETMAABEzAAACAAAAEXMAABfzAAACQAAAGDMAABgzAAACAAAAGHMAAB7zAAACQAAAHzMAAB8zAAACAAAAH3MAACXzAAACQAAAJjMAACYzAAACAAAAJnMAACzzAAACQAAALTMAAC0zAAACAAAALXMAADPzAAACQAAANDMAADQzAAACAAAANHMAADrzAAACQAAAOzMAADszAAACAAAAO3MAAAHzQAACQAAAAjNAAAIzQAACAAAAAnNAAAjzQAACQAAACTNAAAkzQAACAAAACXNAAA/zQAACQAAAEDNAABAzQAACAAAAEHNAABbzQAACQAAAFzNAABczQAACAAAAF3NAAB3zQAACQAAAHjNAAB4zQAACAAAAHnNAACTzQAACQAAAJTNAACUzQAACAAAAJXNAACvzQAACQAAALDNAACwzQAACAAAALHNAADLzQAACQAAAMzNAADMzQAACAAAAM3NAADnzQAACQAAAOjNAADozQAACAAAAOnNAAADzgAACQAAAATOAAAEzgAACAAAAAXOAAAfzgAACQAAACDOAAAgzgAACAAAACHOAAA7zgAACQAAADzOAAA8zgAACAAAAD3OAABXzgAACQAAAFjOAABYzgAACAAAAFnOAABzzgAACQAAAHTOAAB0zgAACAAAAHXOAACPzgAACQAAAJDOAACQzgAACAAAAJHOAACrzgAACQAAAKzOAACszgAACAAAAK3OAADHzgAACQAAAMjOAADIzgAACAAAAMnOAADjzgAACQAAAOTOAADkzgAACAAAAOXOAAD/zgAACQAAAADPAAAAzwAACAAAAAHPAAAbzwAACQAAABzPAAAczwAACAAAAB3PAAA3zwAACQAAADjPAAA4zwAACAAAADnPAABTzwAACQAAAFTPAABUzwAACAAAAFXPAABvzwAACQAAAHDPAABwzwAACAAAAHHPAACLzwAACQAAAIzPAACMzwAACAAAAI3PAACnzwAACQAAAKjPAACozwAACAAAAKnPAADDzwAACQAAAMTPAADEzwAACAAAAMXPAADfzwAACQAAAODPAADgzwAACAAAAOHPAAD7zwAACQAAAPzPAAD8zwAACAAAAP3PAAAX0AAACQAAABjQAAAY0AAACAAAABnQAAAz0AAACQAAADTQAAA00AAACAAAADXQAABP0AAACQAAAFDQAABQ0AAACAAAAFHQAABr0AAACQAAAGzQAABs0AAACAAAAG3QAACH0AAACQAAAIjQAACI0AAACAAAAInQAACj0AAACQAAAKTQAACk0AAACAAAAKXQAAC/0AAACQAAAMDQAADA0AAACAAAAMHQAADb0AAACQAAANzQAADc0AAACAAAAN3QAAD30AAACQAAAPjQAAD40AAACAAAAPnQAAAT0QAACQAAABTRAAAU0QAACAAAABXRAAAv0QAACQAAADDRAAAw0QAACAAAADHRAABL0QAACQAAAEzRAABM0QAACAAAAE3RAABn0QAACQAAAGjRAABo0QAACAAAAGnRAACD0QAACQAAAITRAACE0QAACAAAAIXRAACf0QAACQAAAKDRAACg0QAACAAAAKHRAAC70QAACQAAALzRAAC80QAACAAAAL3RAADX0QAACQAAANjRAADY0QAACAAAANnRAADz0QAACQAAAPTRAAD00QAACAAAAPXRAAAP0gAACQAAABDSAAAQ0gAACAAAABHSAAAr0gAACQAAACzSAAAs0gAACAAAAC3SAABH0gAACQAAAEjSAABI0gAACAAAAEnSAABj0gAACQAAAGTSAABk0gAACAAAAGXSAAB/0gAACQAAAIDSAACA0gAACAAAAIHSAACb0gAACQAAAJzSAACc0gAACAAAAJ3SAAC30gAACQAAALjSAAC40gAACAAAALnSAADT0gAACQAAANTSAADU0gAACAAAANXSAADv0gAACQAAAPDSAADw0gAACAAAAPHSAAAL0wAACQAAAAzTAAAM0wAACAAAAA3TAAAn0wAACQAAACjTAAAo0wAACAAAACnTAABD0wAACQAAAETTAABE0wAACAAAAEXTAABf0wAACQAAAGDTAABg0wAACAAAAGHTAAB70wAACQAAAHzTAAB80wAACAAAAH3TAACX0wAACQAAAJjTAACY0wAACAAAAJnTAACz0wAACQAAALTTAAC00wAACAAAALXTAADP0wAACQAAANDTAADQ0wAACAAAANHTAADr0wAACQAAAOzTAADs0wAACAAAAO3TAAAH1AAACQAAAAjUAAAI1AAACAAAAAnUAAAj1AAACQAAACTUAAAk1AAACAAAACXUAAA/1AAACQAAAEDUAABA1AAACAAAAEHUAABb1AAACQAAAFzUAABc1AAACAAAAF3UAAB31AAACQAAAHjUAAB41AAACAAAAHnUAACT1AAACQAAAJTUAACU1AAACAAAAJXUAACv1AAACQAAALDUAACw1AAACAAAALHUAADL1AAACQAAAMzUAADM1AAACAAAAM3UAADn1AAACQAAAOjUAADo1AAACAAAAOnUAAAD1QAACQAAAATVAAAE1QAACAAAAAXVAAAf1QAACQAAACDVAAAg1QAACAAAACHVAAA71QAACQAAADzVAAA81QAACAAAAD3VAABX1QAACQAAAFjVAABY1QAACAAAAFnVAABz1QAACQAAAHTVAAB01QAACAAAAHXVAACP1QAACQAAAJDVAACQ1QAACAAAAJHVAACr1QAACQAAAKzVAACs1QAACAAAAK3VAADH1QAACQAAAMjVAADI1QAACAAAAMnVAADj1QAACQAAAOTVAADk1QAACAAAAOXVAAD/1QAACQAAAADWAAAA1gAACAAAAAHWAAAb1gAACQAAABzWAAAc1gAACAAAAB3WAAA31gAACQAAADjWAAA41gAACAAAADnWAABT1gAACQAAAFTWAABU1gAACAAAAFXWAABv1gAACQAAAHDWAABw1gAACAAAAHHWAACL1gAACQAAAIzWAACM1gAACAAAAI3WAACn1gAACQAAAKjWAACo1gAACAAAAKnWAADD1gAACQAAAMTWAADE1gAACAAAAMXWAADf1gAACQAAAODWAADg1gAACAAAAOHWAAD71gAACQAAAPzWAAD81gAACAAAAP3WAAAX1wAACQAAABjXAAAY1wAACAAAABnXAAAz1wAACQAAADTXAAA01wAACAAAADXXAABP1wAACQAAAFDXAABQ1wAACAAAAFHXAABr1wAACQAAAGzXAABs1wAACAAAAG3XAACH1wAACQAAAIjXAACI1wAACAAAAInXAACj1wAACQAAALDXAADG1wAADgAAAMvXAAD71wAADQAAAB77AAAe+wAAAwAAAAD+AAAP/gAAAwAAACD+AAAv/gAAAwAAAP/+AAD//gAAAgAAAJ7/AACf/wAAAwAAAPD/AAD7/wAAAgAAAP0BAQD9AQEAAwAAAOACAQDgAgEAAwAAAHYDAQB6AwEAAwAAAAEKAQADCgEAAwAAAAUKAQAGCgEAAwAAAAwKAQAPCgEAAwAAADgKAQA6CgEAAwAAAD8KAQA/CgEAAwAAAOUKAQDmCgEAAwAAACQNAQAnDQEAAwAA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VVVVVVVVVVVVVVVVVVVVVVUBAAAAAAAAAAAAABBBEFVVVVVVV1VVVVVVVVVVVVFVVQAAQFT13VVVVVVVVVVVFQAAAAAAVVVVVfxdVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUFABQAFARQVVVVVVVVVRVRVVVVVVVVVQAAAAAAAEBVVVVVVVVVVVXVV1VVVVVVVVVVVVVVBQAAVFVVVVVVVVVVVVVVVVUVAABVVVFVVVVVVQUQAAABAVBVVVVVVVVVVVVVAVVVVVVV/////39VVVVQVQAAVVVVVVVVVVVVVQUAAAAAAAAAAAAAAAAAQFVVVVVVVVVVVVVVVVVFVAEAVFEBAFVVBVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVEAVRVUVUVVVUFVVVVVVVVRUFVVVVVVVVVVVVVVVVVVVRBFRRQUVVVVVVVVVVQUVVVQVVVVVVVVVVVVVVVVVVVVAEQVFFVVVVVBVVVVVVVBQBRVVVVVVVVVVVVVVVVVVUEAVRVUVUBVVUFVVVVVVVVVUVVVVVVVVVVVVVVVVVVVUVUVVVRVRVVVVVVVVVVVVVVVFRVVVVVVVVVVVVVVVVVBFQFBFBVQVVVBVVVVVVVVVVRVVVVVVVVVVVVVVVVVVUURAUEUFVBVVUFVVVVVVVVVVBVVVVVVVVVVVVVVVVVFUQBVFVBVRVVVQVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVRRUFRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVRAEBVVRUAQFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVEAAFRVVQBAVVVVVVVVVVVVVVVVVVVVVVVVUFVVVVVVVRFRVVVVVVVVVVVVVVVVVQEAAEAABFUBAAABAAAAAAAAAABUVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAQQAQUFVVVVVVVVQBVRVVVUBVFVVRUFVUVVVVVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUBVVVVVVVVVVVVVVVVBVRVVVVVVVUFVVVVVVVVVQVVVVVVVVVVBVVVVX///ff//ddfd9bV11UQAFBVRQEAAFVXUVVVVVVVVVVVVVUVAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQBVUVUVVAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVcVFFVVVVVVVVVVVVVVVVVVRQBARAEAVBUAABRVVVVVVVVVVVVVVVUAAAAAAAAAQFVVVVVVVVVVVVVVVQBVVVVVVVVVVVVVVVUAAFAFVVVVVVVVVVVVFQAAVVVVUFVVVVVVVVUFUBBQVVVVVVVVVVVVVVVVVUVQEVBVVVVVVVVVVVVVVVVVVQAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQAAAAAQAVFFVVFBVVVVVVVVVVVVVVVVVVVVVVQAAAAAAAAAAAAAAAAAAAABVVRUAVVVVVVVVBUBVVVVVVVVVVVVVVVUAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAAAAAAAAAABUVVVVVVVVVVVV9VVVVWlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf1X11VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV9VVVVVVVfVVVVVVVVVVVVVVVV////VVVVVVVVVVVVVdVVVVVV1VVVVV1V9VVVVVV9VV9VdVVXVVVVVXVV9V11XVVd9VVVVVVVVVVXVVVVVVVVVVV31d9VVVVVVVVVVVVVVVVVVVX9VVVVVVVVV1VV1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVXVV1VVVVVVVVVVVVVVVVddVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVQVVVVVVVVVVVVVVVVVVVV/f///////////////19V1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAAAAAAAAAAKqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVVVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpaVVVVVVVVqqqqqqqqqqqqqqqqqqoKAKqqqmqpqqqqqqqqqqqqqqqqqqqqqqqqqqpqgaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpVqaqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqKqqqqqqqqqqqmqqqqqqqqqqqqqqqqqqqqqqqqqqqqpVVZWqqqqqqqqqqqqqqmqqqqqqqqqqqqqqVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVVVVVVVVVVVVVVVVVVVVVaqqqlaqqqqqqqqqqqqqqqqqalVVVVVVVVVVVVVVVVVfVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFUAAAFBVVVVVVVVVBVVVVVVVVVVVVVVVVVVVVVVVVVVVUFVVVUVFFVVVVVVVVUFVVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQVVVVVVVVAAAAAFBVRRVVVVVVVVVVVVUFAFBVVVVVVRUAAFBVVVWqqqqqqqqqVkBVVVVVVVVVVVVVVRUFUFBVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVQFAQUFVVRVVVVRVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVUEFFQFUVVVVVVVVVVVVVVQVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVFFVVVVVqqqqqqqqqqqqVVVVAAAAAABAFQAAAAAAAAAAAAAAAFVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQAAAPCqqlpVAAAAAKqqqqqqqqqqaqqqqqpqqlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRWpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpWVVVVVVVVVVVVVVVVVVUFVFVVVVVVVVVVVVVVVVVVVapqVVUAAFRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBUBVAUFVAFVVVVVVVVVVVVVAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQVVVVVVVVdVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVRVVVVVVVVVVVVVVVVVVVVVVVVVAVVVVVVVVVVVVVVVVVVVVVVVBQAAVFVVVVVVVVVVVVVVBVBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVQAAAEBVVVVVVVVVVVVVFFRVFVBVVVVVVVVVVVVVVRVAQVVFVVVVVVVVVVVVVVVVVVVVQFVVVVVVVVVVFQABAFRVVVVVVVVVVVVVVVVVVRVVVVVQVVVVVVVVVVVVVVVVBQBABVUBFFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVAEVUVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVFQBAVVVVVVVQVVVVVVVVVVVVVVVVVRVEVFVVVVUVVVVVBQBUAFRVVVVVVVVVVVVVVVVVVVVVAAAFRFVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVFABEEQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRUFUFUQVFVVVVVVVVBVVVVVVVVVVVVVVVVVVVVVVVVVVRUAQBFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVRABBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAQUQAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFQAAQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFUVBBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUABVVUVVVVVVVVVQEAQFVVVVVVVVVVVRUABEBVFVVVAUABVVVVVVVVVVVVVQAAAABAUFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAQAAQVVVVVVVVVVVVVVVVVVVVVVVVVVUFAAAAAAAFAARBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAUBFEAAAVVVVVVVVVVVVVVVVVVVVVVVVUBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVVFVVQFVVVVVVVVVVVVVVVQVAVURVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBUAAABQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAVFVVVVVVVVVVVVVVVVVVAEBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVRVAVVVVVVVVVVVVVVVVVVVVVVVVVapUVVVaVVVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqpaVVVVVVVVVVVVVaqqVlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaqpqmmqqqqqqqqqqmpVVVVlVVVVVVVVVWpZVVVVqlVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpVVVVVVVVVVUEAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAAAAAAAAAAAAAAFAAAAAAAEBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVURUAUAAAAAQAEAVVVVVVVVVQVQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBVRVVVVVVVVVVVVVVVVVVQAAAAAAAAAAAAAAAABAFQAAAAAAAAAAAAAAAFRVUVVVVVRVVVVVFQABAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVUAQAAAAAAUABAEQFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAEBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAQFVVVVVVVVVVVVVVVVVVV1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXVVVVVVVVVVVVVVVVVVVVVdf3/f1VVVVVVVVVVVVVVVVVVVVVVVfX///////9uVVVVqqq6qqqqqur6v79VqqpWVV9VVVWqWlVVVVVVVf//////////V1VV/f/f///////////////////////3//////9VVVX/////////////f9X/VVVV/////1dX//////////////////////9/9//////////////////////////////////////////////////////////////X////////////////////X1VV1X////////9VVVVVdVVVVVVVVX1VVVVXVVVVVVVVVVVVVVVVVVVVVVVVVVXV////////////////////////////VVVVVVVVVVVVVVVV//////////////////////9fVVd//VX/VVXVV1X//1dVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX///9VV1VVVVVVVf//////////////f///3/////////////////////////////////////////////////////////////9VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV////V///V1X//////////////9//X1X1////Vf//V1X//1dVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlpVVVVVVVVVVVmWVWGqpVmqVVVVVVWVVVVVVVVVVZVVVQAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAABVVVVVVZVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRUAlmpaWmqqBUCmWZVlVVVVVVVVVVUAAAAAVVZVValWVVVVVVVVVVVVVlVVVVVVVVVVAAAAAAAAAABUVVVVlVlZVVVlVVVpVVVVVVVVVVVVVVWVVpVqqqqqVaqqWlVVVVlVqqqqVVVVVWVVVVpVVVVVpWVWVVVVlVVVVVVVVaaWmpZZWWWplqqqZlWqVVpZVVpWZVVVVWqqpaVaVVVVpapaVVVZWVVVWVVVVVVVlVVVVVVVVVVVVVVVVVVVVVVVVVVVZVX1VVVVaVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVaqqqqqqqqqqqlVVVaqqqqqlWlVVmqpaVaWlVVpapZalWlVVVaVaVZVVVVV9VWlZpVVfVWZVVVVVVVVVVWZV////VVVVmppqmlVVVdVVVVVV1VVVpV1V9VVVVVW9Va+quqqrqqqaVbqq+q66rlVd9VVVVVVVVVVX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ADQBAAA1AQAANgEAADcBAAA5AQAAOgEAADsBAAA8AQAAPQEAAD4BAAA/AQAAQAEAAEEBAABCAQAAQwEAAEQBAABFAQAARgEAAEcBAABIAQAASgEAAEsBAABMAQAATQEAAE4BAABPAQAAUAEAAFEBAABSAQAAUwEAAFQBAABVAQAAVgEAAFcBAABYAQAAWQEAAFoBAABbAQAAXAEAAF0BAABeAQAAXwEAAGABAABhAQAAYgEAAGMBAABkAQAAZQEAAGYBAABnAQAAaAEAAGkBAABqAQAAawEAAGwBAABtAQAAbgEAAG8BAABwAQAAcQEAAHIBAABzAQAAdAEAAHUBAAB2AQAAdwEAAHgBAAD/AAAAeQEAAHoBAAB7AQAAfAEAAH0BAAB+AQAAgQEAAFMCAACCAQAAgwEAAIQBAACFAQAAhgEAAFQCAACHAQAAiAEAAIkBAABWAgAAigEAAFcCAACLAQAAjAEAAI4BAADdAQAAjwEAAFkCAACQAQAAWwIAAJEBAACSAQAAkwEAAGACAACUAQAAYwIAAJYBAABpAgAAlwEAAGgCAACYAQAAmQEAAJwBAABvAgAAnQEAAHICAACfAQAAdQIAAKABAAChAQAAogEAAKMBAACkAQAApQEAAKYBAACAAgAApwEAAKgBAACpAQAAgwIAAKwBAACtAQAArgEAAIgCAACvAQAAsAEAALEBAACKAgAAsgEAAIsCAACzAQAAtAEAALUBAAC2AQAAtwEAAJICAAC4AQAAuQEAALwBAAC9AQAAxAEAAMYBAADFAQAAxgEAAMcBAADJAQAAyAEAAMkBAADKAQAAzAEAAMsBAADMAQAAzQEAAM4BAADPAQAA0AEAANEBAADSAQAA0wEAANQBAADVAQAA1gEAANcBAADYAQAA2QEAANoBAADbAQAA3AEAAN4BAADfAQAA4AEAAOEBAADiAQAA4wEAAOQBAADlAQAA5gEAAOcBAADoAQAA6QEAAOoBAADrAQAA7AEAAO0BAADuAQAA7wEAAPEBAADzAQAA8gEAAPMBAAD0AQAA9QEAAPYBAACVAQAA9wEAAL8BAAD4AQAA+QEAAPoBAAD7AQAA/AEAAP0BAAD+AQAA/wEAAAACAAABAgAAAgIAAAMCAAAEAgAABQIAAAYCAAAHAgAACAIAAAkCAAAKAgAACwIAAAwCAAANAgAADgIAAA8CAAAQAgAAEQIAABICAAATAgAAFAIAABUCAAAWAgAAFwIAABgCAAAZAgAAGgIAABsCAAAcAgAAHQIAAB4CAAAfAgAAIAIAAJ4BAAAiAgAAIwIAACQCAAAlAgAAJgIAACcCAAAoAgAAKQIAACoCAAArAgAALAIAAC0CAAAuAgAALwIAADACAAAxAgAAMgIAADMCAAA6AgAAZSwAADsCAAA8AgAAPQIAAJoBAAA+AgAAZiwAAEECAABCAgAAQwIAAIABAABEAgAAiQIAAEUCAACMAgAARgIAAEcCAABIAgAASQIAAEoCAABLAgAATAIAAE0CAABOAgAATwIAAHADAABxAwAAcgMAAHMDAAB2AwAAdwMAAH8DAADzAwAAhgMAAKwDAACIAwAArQMAAIkDAACuAwAAigMAAK8DAACMAwAAzAMAAI4DAADNAwAAjwMAAM4DAACRAwAAsQMAAJIDAACyAwAAkwMAALMDAACUAwAAtAMAAJUDAAC1AwAAlgMAALYDAACXAwAAtwMAAJgDAAC4AwAAmQMAALkDAACaAwAAugMAAJsDAAC7AwAAnAMAALwDAACdAwAAvQMAAJ4DAAC+AwAAnwMAAL8DAACgAwAAwAMAAKEDAADBAwAAowMAAMMDAACkAwAAxAMAAKUDAADFAwAApgMAAMYDAACnAwAAxwMAAKgDAADIAwAAqQMAAMkDAACqAwAAygMAAKsDAADLAwAAzwMAANcDAADYAwAA2QMAANoDAADbAwAA3AMAAN0DAADeAwAA3wMAAOADAADhAwAA4gMAAOMDAADkAwAA5QMAAOYDAADnAwAA6AMAAOkDAADqAwAA6wMAAOwDAADtAwAA7gMAAO8DAAD0AwAAuAMAAPcDAAD4AwAA+QMAAPIDAAD6AwAA+wMAAP0DAAB7AwAA/gMAAHwDAAD/AwAAfQMAAAAEAABQBAAAAQQAAFEEAAACBAAAUgQAAAMEAABTBAAABAQAAFQEAAAFBAAAVQQAAAYEAABWBAAABwQAAFcEAAAIBAAAWAQAAAkEAABZBAAACgQAAFoEAAALBAAAWwQAAAwEAABcBAAADQQAAF0EAAAOBAAAXgQAAA8EAABfBAAAEAQAADAEAAARBAAAMQQAABIEAAAyBAAAEwQAADMEAAAUBAAANAQAABUEAAA1BAAAFgQAADYEAAAXBAAANwQAABgEAAA4BAAAGQQAADkEAAAaBAAAOgQAABsEAAA7BAAAHAQAADwEAAAdBAAAPQQAAB4EAAA+BAAAHwQAAD8EAAAgBAAAQAQAACEEAABBBAAAIgQAAEIEAAAjBAAAQwQAACQEAABEBAAAJQQAAEUEAAAmBAAARgQAACcEAABHBAAAKAQAAEgEAAApBAAASQQAACoEAABKBAAAKwQAAEsEAAAsBAAATAQAAC0EAABNBAAALgQAAE4EAAAvBAAATwQAAGAEAABhBAAAYgQAAGMEAABkBAAAZQQAAGYEAABnBAAAaAQAAGkEAABqBAAAawQAAGwEAABtBAAAbgQAAG8EAABwBAAAcQQAAHIEAABzBAAAdAQAAHUEAAB2BAAAdwQAAHgEAAB5BAAAegQAAHsEAAB8BAAAfQQAAH4EAAB/BAAAgAQAAIEEAACKBAAAiwQAAIwEAACNBAAAjgQAAI8EAACQBAAAkQQAAJIEAACTBAAAlAQAAJUEAACWBAAAlwQAAJgEAACZBAAAmgQAAJsEAACcBAAAnQQAAJ4EAACfBAAAoAQAAKEEAACiBAAAowQAAKQEAAClBAAApgQAAKcEAACoBAAAqQQAAKoEAACrBAAArAQAAK0EAACuBAAArwQAALAEAACxBAAAsgQAALMEAAC0BAAAtQQAALYEAAC3BAAAuAQAALkEAAC6BAAAuwQAALwEAAC9BAAAvgQAAL8EAADABAAAzwQAAMEEAADCBAAAwwQAAMQEAADFBAAAxgQAAMcEAADIBAAAyQQAAMoEAADLBAAAzAQAAM0EAADOBAAA0AQAANEEAADSBAAA0wQAANQEAADVBAAA1gQAANcEAADYBAAA2QQAANoEAADbBAAA3AQAAN0EAADeBAAA3wQAAOAEAADhBAAA4gQAAOMEAADkBAAA5QQAAOYEAADnBAAA6AQAAOkEAADqBAAA6wQAAOwEAADtBAAA7gQAAO8EAADwBAAA8QQAAPIEAADzBAAA9AQAAPUEAAD2BAAA9wQAAPgEAAD5BAAA+gQAAPsEAAD8BAAA/QQAAP4EAAD/BAAAAAUAAAEFAAACBQAAAwUAAAQFAAAFBQAABgUAAAcFAAAIBQAACQUAAAoFAAALBQAADAUAAA0FAAAOBQAADwUAABAFAAARBQAAEgUAABMFAAAUBQAAFQUAABYFAAAXBQAAGAUAABkFAAAaBQAAGwUAABwFAAAdBQAAHgUAAB8FAAAgBQAAIQUAACIFAAAjBQAAJAUAACUFAAAmBQAAJwUAACgFAAApBQAAKgUAACsFAAAsBQAALQUAAC4FAAAvBQAAMQUAAGEFAAAyBQAAYgUAADMFAABjBQAANAUAAGQFAAA1BQAAZQUAADYFAABmBQAANwUAAGcFAAA4BQAAaAUAADkFAABpBQAAOgUAAGoFAAA7BQAAawUAADwFAABsBQAAPQUAAG0FAAA+BQAAbgUAAD8FAABvBQAAQAUAAHAFAABBBQAAcQUAAEIFAAByBQAAQwUAAHMFAABEBQAAdAUAAEUFAAB1BQAARgUAAHYFAABHBQAAdwUAAEgFAAB4BQAASQUAAHkFAABKBQAAegUAAEsFAAB7BQAATAUAAHwFAABNBQAAfQUAAE4FAAB+BQAATwUAAH8FAABQBQAAgAUAAFEFAACBBQAAUgUAAIIFAABTBQAAgwUAAFQFAACEBQAAVQUAAIUFAABWBQAAhgUAAKAQAAAALQAAoRAAAAEtAACiEAAAAi0AAKMQAAADLQAApBAAAAQtAAClEAAABS0AAKYQAAAGLQAApxAAAActAACoEAAACC0AAKkQAAAJLQAAqhAAAAotAACrEAAACy0AAKwQAAAMLQAArRAAAA0tAACuEAAADi0AAK8QAAAPLQAAsBAAABAtAACxEAAAES0AALIQAAASLQAAsxAAABMtAAC0EAAAFC0AALUQAAAVLQAAthAAABYtAAC3EAAAFy0AALgQAAAYLQAAuRAAABktAAC6EAAAGi0AALsQAAAbLQAAvBAAABwtAAC9EAAAHS0AAL4QAAAeLQAAvxAAAB8tAADAEAAAIC0AAMEQAAAhLQAAwhAAACItAADDEAAAIy0AAMQQAAAkLQAAxRAAACUtAADHEAAAJy0AAM0QAAAtLQAAoBMAAHCrAAChEwAAcasAAKITAAByqwAAoxMAAHOrAACkEwAAdKsAAKUTAAB1qwAAphMAAHarAACnEwAAd6sAAKgTAAB4qwAAqRMAAHmrAACqEwAAeqsAAKsTAAB7qwAArBMAAHyrAACtEwAAfasAAK4TAAB+qwAArxMAAH+rAACwEwAAgKsAALETAACBqwAAshMAAIKrAACzEwAAg6sAALQTAACEqwAAtRMAAIWrAAC2EwAAhqsAALcTAACHqwAAuBMAAIirAAC5EwAAiasAALoTAACKqwAAuxMAAIurAAC8EwAAjKsAAL0TAACNqwAAvhMAAI6rAAC/EwAAj6sAAMATAACQqwAAwRMAAJGrAADCEwAAkqsAAMMTAACTqwAAxBMAAJSrAADFEwAAlasAAMYTAACWqwAAxxMAAJerAADIEwAAmKsAAMkTAACZqwAAyhMAAJqrAADLEwAAm6sAAMwTAACcqwAAzRMAAJ2rAADOEwAAnqsAAM8TAACfqwAA0BMAAKCrAADREwAAoasAANITAACiqwAA0xMAAKOrAADUEwAApKsAANUTAAClqwAA1hMAAKarAADXEwAAp6sAANgTAACoqwAA2RMAAKmrAADaEwAAqqsAANsTAACrqwAA3BMAAKyrAADdEwAArasAAN4TAACuqwAA3xMAAK+rAADgEwAAsKsAAOETAACxqwAA4hMAALKrAADjEwAAs6sAAOQTAAC0qwAA5RMAALWrAADmEwAAtqsAAOcTAAC3qwAA6BMAALirAADpEwAAuasAAOoTAAC6qwAA6xMAALurAADsEwAAvKsAAO0TAAC9qwAA7hMAAL6rAADvEwAAv6sAAPATAAD4EwAA8RMAAPkTAADyEwAA+hMAAPMTAAD7EwAA9BMAAPwTAAD1EwAA/RMAAIkcAACKHAAAkBwAANAQAACRHAAA0RAAAJIcAADSEAAAkxwAANMQAACUHAAA1BAAAJUcAADVEAAAlhwAANYQAACXHAAA1xAAAJgcAADYEAAAmRwAANkQAACaHAAA2hAAAJscAADbEAAAnBwAANwQAACdHAAA3RAAAJ4cAADeEAAAnxwAAN8QAACgHAAA4BAAAKEcAADhEAAAohwAAOIQAACjHAAA4xAAAKQcAADkEAAApRwAAOUQAACmHAAA5hAAAKccAADnEAAAqBwAAOgQAACpHAAA6RAAAKocAADqEAAAqxwAAOsQAACsHAAA7BAAAK0cAADtEAAArhwAAO4QAACvHAAA7xAAALAcAADwEAAAsRwAAPEQAACyHAAA8hAAALMcAADzEAAAtBwAAPQQAAC1HAAA9RAAALYcAAD2EAAAtxwAAPcQAAC4HAAA+BAAALkcAAD5EAAAuhwAAPoQAAC9HAAA/RAAAL4cAAD+EAAAvxwAAP8QAAAAHgAAAR4AAAIeAAADHgAABB4AAAUeAAAGHgAABx4AAAgeAAAJHgAACh4AAAseAAAMHgAADR4AAA4eAAAPHgAAEB4AABEeAAASHgAAEx4AABQeAAAVHgAAFh4AABceAAAYHgAAGR4AABoeAAAbHgAAHB4AAB0eAAAeHgAAHx4AACAeAAAhHgAAIh4AACMeAAAkHgAAJR4AACYeAAAnHgAAKB4AACkeAAAqHgAAKx4AACweAAAtHgAALh4AAC8eAAAwHgAAMR4AADIeAAAzHgAANB4AADUeAAA2HgAANx4AADgeAAA5HgAAOh4AADseAAA8HgAAPR4AAD4eAAA/HgAAQB4AAEEeAABCHgAAQx4AAEQeAABFHgAARh4AAEceAABIHgAASR4AAEoeAABLHgAATB4AAE0eAABOHgAATx4AAFAeAABRHgAAUh4AAFMeAABUHgAAVR4AAFYeAABXHgAAWB4AAFkeAABaHgAAWx4AAFweAABdHgAAXh4AAF8eAABgHgAAYR4AAGIeAABjHgAAZB4AAGUeAABmHgAAZx4AAGgeAABpHgAAah4AAGseAABsHgAAbR4AAG4eAABvHgAAcB4AAHEeAAByHgAAcx4AAHQeAAB1HgAAdh4AAHceAAB4HgAAeR4AAHoeAAB7HgAAfB4AAH0eAAB+HgAAfx4AAIAeAACBHgAAgh4AAIMeAACEHgAAhR4AAIYeAACHHgAAiB4AAIkeAACKHgAAix4AAIweAACNHgAAjh4AAI8eAACQHgAAkR4AAJIeAACTHgAAlB4AAJUeAACeHgAA3wAAAKAeAAChHgAAoh4AAKMeAACkHgAApR4AAKYeAACnHgAAqB4AAKkeAACqHgAAqx4AAKweAACtHgAArh4AAK8eAACwHgAAsR4AALIeAACzHgAAtB4AALUeAAC2HgAAtx4AALgeAAC5HgAAuh4AALseAAC8HgAAvR4AAL4eAAC/HgAAwB4AAMEeAADCHgAAwx4AAMQeAADFHgAAxh4AAMceAADIHgAAyR4AAMoeAADLHgAAzB4AAM0eAADOHgAAzx4AANAeAADRHgAA0h4AANMeAADUHgAA1R4AANYeAADXHgAA2B4AANkeAADaHgAA2x4AANweAADdHgAA3h4AAN8eAADgHgAA4R4AAOIeAADjHgAA5B4AAOUeAADmHgAA5x4AAOgeAADpHgAA6h4AAOseAADsHgAA7R4AAO4eAADvHgAA8B4AAPEeAADyHgAA8x4AAPQeAAD1HgAA9h4AAPceAAD4HgAA+R4AAPoeAAD7HgAA/B4AAP0eAAD+HgAA/x4AAAgfAAAAHwAACR8AAAEfAAAKHwAAAh8AAAsfAAADHwAADB8AAAQfAAANHwAABR8AAA4fAAAGHwAADx8AAAcfAAAYHwAAEB8AABkfAAARHwAAGh8AABIfAAAbHwAAEx8AABwfAAAUHwAAHR8AABUfAAAoHwAAIB8AACkfAAAhHwAAKh8AACIfAAArHwAAIx8AACwfAAAkHwAALR8AACUfAAAuHwAAJh8AAC8fAAAnHwAAOB8AADAfAAA5HwAAMR8AADofAAAyHwAAOx8AADMfAAA8HwAANB8AAD0fAAA1HwAAPh8AADYfAAA/HwAANx8AAEgfAABAHwAASR8AAEEfAABKHwAAQh8AAEsfAABDHwAATB8AAEQfAABNHwAARR8AAFkfAABRHwAAWx8AAFMfAABdHwAAVR8AAF8fAABXHwAAaB8AAGAfAABpHwAAYR8AAGofAABiHwAAax8AAGMfAABsHwAAZB8AAG0fAABlHwAAbh8AAGYfAABvHwAAZx8AAIgfAACAHwAAiR8AAIEfAACKHwAAgh8AAIsfAACDHwAAjB8AAIQfAACNHwAAhR8AAI4fAACGHwAAjx8AAIcfAACYHwAAkB8AAJkfAACRHwAAmh8AAJIfAACbHwAAkx8AAJwfAACUHwAAnR8AAJUfAACeHwAAlh8AAJ8fAACXHwAAqB8AAKAfAACpHwAAoR8AAKofAACiHwAAqx8AAKMfAACsHwAApB8AAK0fAAClHwAArh8AAKYfAACvHwAApx8AALgfAACwHwAAuR8AALEfAAC6HwAAcB8AALsfAABxHwAAvB8AALMfAADIHwAAch8AAMkfAABzHwAAyh8AAHQfAADLHwAAdR8AAMwfAADDHwAA2B8AANAfAADZHwAA0R8AANofAAB2HwAA2x8AAHcfAADoHwAA4B8AAOkfAADhHwAA6h8AAHofAADrHwAAex8AAOwfAADlHwAA+B8AAHgfAAD5HwAAeR8AAPofAAB8HwAA+x8AAH0fAAD8HwAA8x8AACYhAADJAwAAKiEAAGsAAAArIQAA5QAAADIhAABOIQAAYCEAAHAhAABhIQAAcSEAAGIhAAByIQAAYyEAAHMhAABkIQAAdCEAAGUhAAB1IQAAZiEAAHYhAABnIQAAdyEAAGghAAB4IQAAaSEAAHkhAABqIQAAeiEAAGshAAB7IQAAbCEAAHwhAABtIQAAfSEAAG4hAAB+IQAAbyEAAH8hAACDIQAAhCEAALYkAADQJAAAtyQAANEkAAC4JAAA0iQAALkkAADTJAAAuiQAANQkAAC7JAAA1SQAALwkAADWJAAAvSQAANckAAC+JAAA2CQAAL8kAADZJAAAwCQAANokAADBJAAA2yQAAMIkAADcJAAAwyQAAN0kAADEJAAA3iQAAMUkAADfJAAAxiQAAOAkAADHJAAA4SQAAMgkAADiJAAAySQAAOMkAADKJAAA5CQAAMskAADlJAAAzCQAAOYkAADNJAAA5yQAAM4kAADoJAAAzyQAAOkkAAAALAAAMCwAAAEsAAAxLAAAAiwAADIsAAADLAAAMywAAAQsAAA0LAAABSwAADUsAAAGLAAANiwAAAcsAAA3LAAACCwAADgsAAAJLAAAOSwAAAosAAA6LAAACywAADssAAAMLAAAPCwAAA0sAAA9LAAADiwAAD4sAAAPLAAAPywAABAsAABALAAAESwAAEEsAAASLAAAQiwAABMsAABDLAAAFCwAAEQsAAAVLAAARSwAABYsAABGLAAAFywAAEcsAAAYLAAASCwAABksAABJLAAAGiwAAEosAAAbLAAASywAABwsAABMLAAAHSwAAE0sAAAeLAAATiwAAB8sAABPLAAAICwAAFAsAAAhLAAAUSwAACIsAABSLAAAIywAAFMsAAAkLAAAVCwAACUsAABVLAAAJiwAAFYsAAAnLAAAVywAACgsAABYLAAAKSwAAFksAAAqLAAAWiwAACssAABbLAAALCwAAFwsAAAtLAAAXSwAAC4sAABeLAAALywAAF8sAABgLAAAYSwAAGIsAABrAgAAYywAAH0dAABkLAAAfQIAAGcsAABoLAAAaSwAAGosAABrLAAAbCwAAG0sAABRAgAAbiwAAHECAABvLAAAUAIAAHAsAABSAgAAciwAAHMsAAB1LAAAdiwAAH4sAAA/AgAAfywAAEACAACALAAAgSwAAIIsAACDLAAAhCwAAIUsAACGLAAAhywAAIgsAACJLAAAiiwAAIssAACMLAAAjSwAAI4sAACPLAAAkCwAAJEsAACSLAAAkywAAJQsAACVLAAAliwAAJcsAACYLAAAmSwAAJosAACbLAAAnCwAAJ0sAACeLAAAnywAAKAsAAChLAAAoiwAAKMsAACkLAAApSwAAKYsAACnLAAAqCwAAKksAACqLAAAqywAAKwsAACtLAAAriwAAK8sAACwLAAAsSwAALIsAACzLAAAtCwAALUsAAC2LAAAtywAALgsAAC5LAAAuiwAALssAAC8LAAAvSwAAL4sAAC/LAAAwCwAAMEsAADCLAAAwywAAMQsAADFLAAAxiwAAMcsAADILAAAySwAAMosAADLLAAAzCwAAM0sAADOLAAAzywAANAsAADRLAAA0iwAANMsAADULAAA1SwAANYsAADXLAAA2CwAANksAADaLAAA2ywAANwsAADdLAAA3iwAAN8sAADgLAAA4SwAAOIsAADjLAAA6ywAAOwsAADtLAAA7iwAAPIsAADzLAAAQKYAAEGmAABCpgAAQ6YAAESmAABFpgAARqYAAEemAABIpgAASaYAAEqmAABLpgAATKYAAE2mAABOpgAAT6YAAFCmAABRpgAAUqYAAFOmAABUpgAAVaYAAFamAABXpgAAWKYAAFmmAABapgAAW6YAAFymAABdpgAAXqYAAF+mAABgpgAAYaYAAGKmAABjpgAAZKYAAGWmAABmpgAAZ6YAAGimAABppgAAaqYAAGumAABspgAAbaYAAICmAACBpgAAgqYAAIOmAACEpgAAhaYAAIamAACHpgAAiKYAAImmAACKpgAAi6YAAIymAACNpgAAjqYAAI+mAACQpgAAkaYAAJKmAACTpgAAlKYAAJWmAACWpgAAl6YAAJimAACZpgAAmqYAAJumAAAipwAAI6cAACSnAAAlpwAAJqcAACenAAAopwAAKacAACqnAAArpwAALKcAAC2nAAAupwAAL6cAADKnAAAzpwAANKcAADWnAAA2pwAAN6cAADinAAA5pwAAOqcAADunAAA8pwAAPacAAD6nAAA/pwAAQKcAAEGnAABCpwAAQ6cAAESnAABFpwAARqcAAEenAABIpwAASacAAEqnAABLpwAATKcAAE2nAABOpwAAT6cAAFCnAABRpwAAUqcAAFOnAABUpwAAVacAAFanAABXpwAAWKcAAFmnAABapwAAW6cAAFynAABdpwAAXqcAAF+nAABgpwAAYacAAGKnAABjpwAAZKcAAGWnAABmpwAAZ6cAAGinAABppwAAaqcAAGunAABspwAAbacAAG6nAABvpwAAeacAAHqnAAB7pwAAfKcAAH2nAAB5HQAAfqcAAH+nAACApwAAgacAAIKnAACDpwAAhKcAAIWnAACGpwAAh6cAAIunAACMpwAAjacAAGUCAACQpwAAkacAAJKnAACTpwAAlqcAAJenAACYpwAAmacAAJqnAACbpwAAnKcAAJ2nAACepwAAn6cAAKCnAAChpwAAoqcAAKOnAACkpwAApacAAKanAACnpwAAqKcAAKmnAACqpwAAZgIAAKunAABcAgAArKcAAGECAACtpwAAbAIAAK6nAABqAgAAsKcAAJ4CAACxpwAAhwIAALKnAACdAgAAs6cAAFOrAAC0pwAAtacAALanAAC3pwAAuKcAALmnAAC6pwAAu6cAALynAAC9pwAAvqcAAL+nAADApwAAwacAAMKnAADDpwAAxKcAAJSnAADFpwAAggIAAManAACOHQAAx6cAAMinAADJpwAAyqcAAMunAABkAgAAzKcAAM2nAADOpwAAz6cAANCnAADRpwAA0qcAANOnAADUpwAA1acAANanAADXpwAA2KcAANmnAADapwAA26cAANynAACbAQAA9acAAPanAAAh/wAAQf8AACL/AABC/wAAI/8AAEP/AAAk/wAARP8AACX/AABF/wAAJv8AAEb/AAAn/wAAR/8AACj/AABI/wAAKf8AAEn/AAAq/wAASv8AACv/AABL/wAALP8AAEz/AAAt/wAATf8AAC7/AABO/wAAL/8AAE//AAAw/wAAUP8AADH/AABR/wAAMv8AAFL/AAAz/wAAU/8AADT/AABU/wAANf8AAFX/AAA2/wAAVv8AADf/AABX/wAAOP8AAFj/AAA5/wAAWf8AADr/AABa/wAAAAQBACgEAQABBAEAKQQBAAIEAQAqBAEAAwQBACsEAQAEBAEALAQBAAUEAQAtBAEABgQBAC4EAQAHBAEALwQBAAgEAQAwBAEACQQBADEEAQAKBAEAMgQBAAsEAQAzBAEADAQBADQEAQANBAEANQQBAA4EAQA2BAEADwQBADcEAQAQBAEAOAQBABEEAQA5BAEAEgQBADoEAQATBAEAOwQBABQEAQA8BAEAFQQBAD0EAQAWBAEAPgQBABcEAQA/BAEAGAQBAEAEAQAZBAEAQQQBABoEAQBCBAEAGwQBAEMEAQAcBAEARAQBAB0EAQBFBAEAHgQBAEYEAQAfBAEARwQBACAEAQBIBAEAIQQBAEkEAQAiBAEASgQBACMEAQBLBAEAJAQBAEwEAQAlBAEATQQBACYEAQBOBAEAJwQBAE8EAQCwBAEA2AQBALEEAQDZBAEAsgQBANoEAQCzBAEA2wQBALQEAQDcBAEAtQQBAN0EAQC2BAEA3gQBALcEAQDfBAEAuAQBAOAEAQC5BAEA4QQBALoEAQDiBAEAuwQBAOMEAQC8BAEA5AQBAL0EAQDlBAEAvgQBAOYEAQC/BAEA5wQBAMAEAQDoBAEAwQQBAOkEAQDCBAEA6gQBAMMEAQDrBAEAxAQBAOwEAQDFBAEA7QQBAMYEAQDuBAEAxwQBAO8EAQDIBAEA8AQBAMkEAQDxBAEAygQBAPIEAQDLBAEA8wQBAMwEAQD0BAEAzQQBAPUEAQDOBAEA9gQBAM8EAQD3BAEA0AQBAPgEAQDRBAEA+QQBANIEAQD6BAEA0wQBAPsEAQBwBQEAlwUBAHEFAQCYBQEAcgUBAJkFAQBzBQEAmgUBAHQFAQCbBQEAdQUBAJwFAQB2BQEAnQUBAHcFAQCeBQEAeAUBAJ8FAQB5BQEAoAUBAHoFAQChBQEAfAUBAKMFAQB9BQEApAUBAH4FAQClBQEAfwUBAKYFAQCABQEApwUBAIEFAQCoBQEAggUBAKkFAQCDBQEAqgUBAIQFAQCrBQEAhQUBAKwFAQCGBQEArQUBAIcFAQCuBQEAiAUBAK8FAQCJBQEAsAUBAIoFAQCxBQEAjAUBALMFAQCNBQEAtAUBAI4FAQC1BQEAjwUBALYFAQCQBQEAtwUBAJEFAQC4BQEAkgUBALkFAQCUBQEAuwUBAJUFAQC8BQEAgAwBAMAMAQCBDAEAwQwBAIIMAQDCDAEAgwwBAMMMAQCEDAEAxAwBAIUMAQDFDAEAhgwBAMYMAQCHDAEAxwwBAIgMAQDIDAEAiQwBAMkMAQCKDAEAygwBAIsMAQDLDAEAjAwBAMwMAQCNDAEAzQwBAI4MAQDODAEAjwwBAM8MAQCQDAEA0AwBAJEMAQDRDAEAkgwBANIMAQCTDAEA0wwBAJQMAQDUDAEAlQwBANUMAQCWDAEA1gwBAJcMAQDXDAEAmAwBANgMAQCZDAEA2QwBAJoMAQDaDAEAmwwB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OTU0ZTUzMTI2YgQ2d2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX3N0cmluZ19nZXQ6OmhhMmIxOTY5OWNiYjdiZGJhBTV3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5faXNfb2JqZWN0OjpoYzhkOGI2Mzc1ZmI2OTFiNwYud2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX2luOjpoNTIyYTI3MTI2ZDFjNGU5ZAc7d2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX2JpZ2ludF9mcm9tX2k2NDo6aGM4OTk1YjhmMzY1NWM0ZTcINHdhc21fYmluZGdlbjo6X193YmluZGdlbl9qc3ZhbF9lcTo6aDIzODc2YWQ0MTRmMTE2NDEJO3dhc21fYmluZGdlbjo6X193YmluZGdlbl9iaWdpbnRfZnJvbV91NjQ6Omg3MTI1MzM0MDc5ZmQ0NmNlCjV3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5fZXJyb3JfbmV3OjpoM2U2YzRjYTJiM2U5YTg2Ngthd2ViX3N5czo6ZmVhdHVyZXM6Omdlbl9jb25zb2xlOjpjb25zb2xlOjplcnJvcl8yOjpfX3diZ19lcnJvcl8xMDA0YjhjNjQwOTc0MTNmOjpoOTNiYTkxNzZjNTZhNmNmMQw6d2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX2pzdmFsX2xvb3NlX2VxOjpoMGY3YWIxYWY3YzExOTYzNA1Rc2VyZGVfd2FzbV9iaW5kZ2VuOjpPYmplY3RFeHQ6OnNldDo6X193Ymdfc2V0XzNmMWQwYjk4NGVkMjcyZWQ6Omg4N2E0NzYxMWE0ZjFlMTBhDno8c2VyZGVfd2FzbV9iaW5kZ2VuOjplcnJvcjo6RXJyb3IgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10Ojp0b19zdHJpbmc6Ol9fd2JnX1N0cmluZ184ZjBlYjM5YTRhNGMyZjY2OjpoYjRhMzdiY2JiNDA1NGVlOQ82d2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX251bWJlcl9uZXc6OmhlZTk1NzRjOTY0Y2JiOWQ1EEFqc19zeXM6OkFycmF5OjpuZXc6Ol9fd2JnX25ld183OGZlYjEwOGI2NDcyNzEzOjpoZDU1Y2UwNThlN2FiNjdhNRFCanNfc3lzOjpPYmplY3Q6Om5ldzo6X193YmdfbmV3XzQwNWUyMmYzOTA1NzZjZTI6Omg0ZDRhNzdkZmZlYzFjMjBkEkZqc19zeXM6OlVpbnQ4QXJyYXk6Om5ldzo6X193YmdfbmV3X2ExMjAwMmE3ZjkxYzc1YmU6Omg3OGIyNDkwOTE0ZWNkYjVhE1Vqc19zeXM6OldlYkFzc2VtYmx5OjpNZW1vcnk6OmJ1ZmZlcjo6X193YmdfYnVmZmVyXzYwOWNjM2VlZTUxZWQxNTg6Omg0MWNhNmY1NWEyMmY0NDMxFExqc19zeXM6OlVpbnQ4QXJyYXk6Omxlbmd0aDo6X193YmdfbGVuZ3RoX2E0NDYxOTNkYzIyYzEyZjg6OmhlNzJlNmNlOTVmZmVmNzY2FUZqc19zeXM6OlVpbnQ4QXJyYXk6OnNldDo6X193Ymdfc2V0XzY1NTk1YmRkODY4YjMwMDk6OmgzOWJhM2ZhZjM0NWE0NWRmFkpqc19zeXM6Okl0ZXJhdG9yTmV4dDo6ZG9uZTo6X193YmdfZG9uZV83NjllNWVkZTRiMzFjNjdiOjpoZWMyZTNlZWRkM2FkMWRhMhdManNfc3lzOjpJdGVyYXRvck5leHQ6OnZhbHVlOjpfX3diZ192YWx1ZV9jZDFmZmE3YjFhYjc5NGYxOjpoYWZiZThkYTczNmE0N2VkOBiCAWpzX3N5czo6Xzo6PGltcGwgd2FzbV9iaW5kZ2VuOjpjYXN0OjpKc0Nhc3QgZm9yIGpzX3N5czo6TWFwPjo6aW5zdGFuY2VvZjo6X193YmdfaW5zdGFuY2VvZl9NYXBfZjM0NjljZTIyNDRkMjQzMDo6aGNmODFlODVmZTEwODQ2MTMZkAFqc19zeXM6Ol86OjxpbXBsIHdhc21fYmluZGdlbjo6Y2FzdDo6SnNDYXN0IGZvciBqc19zeXM6OlVpbnQ4QXJyYXk+OjppbnN0YW5jZW9mOjpfX3diZ19pbnN0YW5jZW9mX1VpbnQ4QXJyYXlfMTcxNTZiY2YxMTgwODZhOTo6aGQ5NDNmZjdkMGViMDc0NTAakgFqc19zeXM6Ol86OjxpbXBsIHdhc21fYmluZGdlbjo6Y2FzdDo6SnNDYXN0IGZvciBqc19zeXM6OkFycmF5QnVmZmVyPjo6aW5zdGFuY2VvZjo6X193YmdfaW5zdGFuY2VvZl9BcnJheUJ1ZmZlcl9lMTQ1ODU0MzJlMzczN2ZjOjpoZjZmNGU1YWJhNWE3NzkwMxtBanNfc3lzOjpBcnJheTo6Z2V0OjpfX3diZ19nZXRfYjliOTMwNDdmZTNjZjQ1Yjo6aDNlMmU0ZGRhOWQzYzFhOWMcQWpzX3N5czo6QXJyYXk6OnNldDo6X193Ymdfc2V0XzM3ODM3MDIzZjNkNzQwZTg6Omg1YmUxMGNlNDg0MTJjMjlmHUdqc19zeXM6OkFycmF5OjpsZW5ndGg6Ol9fd2JnX2xlbmd0aF9lMmQyYTQ5MTMyYzFiMjU2OjpoOGUzNjBmYjZmNTQ0YzJmNh5KanNfc3lzOjpBcnJheTo6aXNfYXJyYXk6Ol9fd2JnX2lzQXJyYXlfYTFlYWI3ZTBkMDY3MzkxYjo6aGQ3ZTcyMzg3NDZkOTQ0MjkfWGpzX3N5czo6TnVtYmVyOjppc19zYWZlX2ludGVnZXI6Ol9fd2JnX2lzU2FmZUludGVnZXJfMzQzZTJiZWVlZWNlMWJiMDo6aGQzZmEyNDg2YjZjN2M4YjQgSmpzX3N5czo6T2JqZWN0OjplbnRyaWVzOjpfX3diZ19lbnRyaWVzXzMyNjVkNDE1OGIzM2U1ZGM6Omg0NmEzMDFmNWExYmFiMjFhIUxqc19zeXM6OlN5bWJvbDo6aXRlcmF0b3I6Ol9fd2JnX2l0ZXJhdG9yXzlhMjRjODhkZjg2MGRjNjU6OmhjOGM5NDMxYTM1ZDY2NjM5Ikdqc19zeXM6OkZ1bmN0aW9uOjpjYWxsMDo6X193YmdfY2FsbF82NzJhNGQyMTYzNGQ0YTI0OjpoZWYyMTFiNDRkZDkzMDIwYiM3d2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX2lzX2Z1bmN0aW9uOjpoNDUyNDJiOGE5N2ZlYzI0MCRqanNfc3lzOjpJdGVyYXRvcjo6bG9va3NfbGlrZV9pdGVyYXRvcjo6TWF5YmVJdGVyYXRvcjo6bmV4dDo6X193YmdfbmV4dF8yNWZlYWRmYzA5MTNmZWE5OjpoN2FlY2JiNTYwNmUyYTk4YiVGanNfc3lzOjpJdGVyYXRvcjo6bmV4dDo6X193YmdfbmV4dF82NTc0ZTFhOGE2MmQxMDU1OjpoNzJhZWE3Y2JlNThmN2FlOCZDanNfc3lzOjpSZWZsZWN0OjpnZXQ6Ol9fd2JnX2dldF82N2IyYmE2MmZjMzBkZTEyOjpoZmYzNjgyNDc3ZGZhN2FkYSdManNfc3lzOjpKU09OOjpzdHJpbmdpZnk6Ol9fd2JnX3N0cmluZ2lmeV9mN2VkNjk4NzkzNWI0YTI0OjpoOWU0NmJlYmQ2OTQxNzgyYyhTY29uc29sZV9lcnJvcl9wYW5pY19ob29rOjpFcnJvcjo6bmV3OjpfX3diZ19uZXdfOGE2ZjIzOGE2ZWNlODZlYTo6aDBkMTcyOTAxZmIxNTRiYmIpV2NvbnNvbGVfZXJyb3JfcGFuaWNfaG9vazo6RXJyb3I6OnN0YWNrOjpfX3diZ19zdGFja18wZWQ3NWQ2ODU3NWIwZjNjOjpoNzlmY2JhNTVmZDgwN2JhZSpQY29uc29sZV9lcnJvcl9wYW5pY19ob29rOjplcnJvcjo6X193YmdfZXJyb3JfNzUzNGI4ZTlhMzZmMWFiNDo6aDgxNmZiNzlmM2U5ZTljM2UrPXdhc21fYmluZGdlbjo6X193YmluZGdlbl9iaWdpbnRfZ2V0X2FzX2k2NDo6aDNkYWE0ZWE4MGY5YzgyMWMsMndhc21fYmluZGdlbjo6X193YmluZGdlbl9tZW1vcnk6Omg1YmFkYjdiNjM2ODY5YzAwLTF3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5fdGhyb3c6OmhmODRlOTA3YjZlYzlhZDI2Ljh3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5fZGVidWdfc3RyaW5nOjpoMmUyYjRhMTg3OGE5Y2I3YzBIY29yZTo6bnVtOjpmbHQyZGVjOjpzdHJhdGVneTo6ZHJhZ29uOjpmb3JtYXRfc2hvcnRlc3Q6Omg1MDU3MmYxMGY3MDhjZjNmMVk8cmF0YXR1aTo6dGV4dDo6c3Bhbjo6U3BhbiBhcyByYXRhdHVpOjp3aWRnZXRzOjpXaWRnZXRSZWY+OjpyZW5kZXJfcmVmOjpoZDQ4YWM5YTgwOWRhNTAwMjJePHJhdGF0dWk6OndpZGdldHM6OmJsb2NrOjpCbG9jayBhcyByYXRhdHVpOjp3aWRnZXRzOjpXaWRnZXRSZWY+OjpyZW5kZXJfcmVmOjpoNDBmMDY0MjczNjFhYWY2NDNFY29yZTo6bnVtOjpmbHQyZGVjOjpzdHJhdGVneTo6ZHJhZ29uOjpmb3JtYXRfZXhhY3Q6Omg0NzAwMTRkOGVmMzA1NmY4NHk8c2VyZGU6OnByaXZhdGU6OmRlOjpjb250ZW50OjpDb250ZW50RGVzZXJpYWxpemVyPEU+IGFzIHNlcmRlX2NvcmU6OmRlOjpEZXNlcmlhbGl6ZXI+OjpkZXNlcmlhbGl6ZV9hbnk6Omg3MDMyOWNiMGRmOWI4Mjg2NXw8c2VyZGU6OnByaXZhdGU6OmRlOjpjb250ZW50OjpDb250ZW50RGVzZXJpYWxpemVyPEU+IGFzIHNlcmRlX2NvcmU6OmRlOjpEZXNlcmlhbGl6ZXI+OjpkZXNlcmlhbGl6ZV9zdHJ1Y3Q6OmhmY2U1YjYwNmUzNjU5ZWY3NjdhbGxvYzo6c3RyOjo8aW1wbCBzdHI+Ojp0b19sb3dlcmNhc2U6Omg4ZDI0NjhlZDFjOTY1ZDNmN3k8c2VyZGU6OnByaXZhdGU6OmRlOjpjb250ZW50OjpDb250ZW50RGVzZXJpYWxpemVyPEU+IGFzIHNlcmRlX2NvcmU6OmRlOjpEZXNlcmlhbGl6ZXI+OjpkZXNlcmlhbGl6ZV9hbnk6OmhkZjhmMDA3NGFiNmMwZjQ5ODpkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+OjptYWxsb2M6Omg1NmQwZGRjMWNkZDJhODM1OXw8c2VyZGU6OnByaXZhdGU6OmRlOjpjb250ZW50OjpDb250ZW50RGVzZXJpYWxpemVyPEU+IGFzIHNlcmRlX2NvcmU6OmRlOjpEZXNlcmlhbGl6ZXI+OjpkZXNlcmlhbGl6ZV9zdHJ1Y3Q6OmhiZDMyOTk2YmVkYjA5ZTJhOnk8c2VyZGU6OnByaXZhdGU6OmRlOjpjb250ZW50OjpDb250ZW50RGVzZXJpYWxpemVyPEU+IGFzIHNlcmRlX2NvcmU6OmRlOjpEZXNlcmlhbGl6ZXI+OjpkZXNlcmlhbGl6ZV9hbnk6OmhjOTVhNzM4ZjY3ZTYxMTlhO3Q8cmF0YXR1aTo6d2lkZ2V0czo6cmVmbG93OjpXb3JkV3JhcHBlcjxPLEk+IGFzIHJhdGF0dWk6OndpZGdldHM6OnJlZmxvdzo6TGluZUNvbXBvc2VyPjo6bmV4dF9saW5lOjpoZTUxZTEyNzRmY2M4Y2QxNzwNZW5naW5lX3JlbmRlcj1QdW5pY29kZV9zZWdtZW50YXRpb246OmdyYXBoZW1lOjpHcmFwaGVtZUN1cnNvcjo6cHJldl9ib3VuZGFyeTo6aDRlZTMyNDNkNDdmYzEyOTc+ZjxyYXRhdHVpOjp3aWRnZXRzOjpwYXJhZ3JhcGg6OlBhcmFncmFwaCBhcyByYXRhdHVpOjp3aWRnZXRzOjpXaWRnZXRSZWY+OjpyZW5kZXJfcmVmOjpoNTA4OGZkMDc2Mjg0Y2M5Zj9uPHVuaWNvZGVfc2VnbWVudGF0aW9uOjpncmFwaGVtZTo6R3JhcGhlbWVzIGFzIGNvcmU6Oml0ZXI6OnRyYWl0czo6aXRlcmF0b3I6Okl0ZXJhdG9yPjo6bmV4dDo6aDBiODA4OWNiMzY3YTdjMjlAM3VuaWNvZGVfd2lkdGg6OnRhYmxlczo6c3RyX3dpZHRoOjpoNGRhMWEyMTBmOWFmNDdiM0EzdW5pY29kZV93aWR0aDo6dGFibGVzOjpzdHJfd2lkdGg6Omg0ZGExYTIxMGY5YWY0N2IzQjN1bmljb2RlX3dpZHRoOjp0YWJsZXM6OnN0cl93aWR0aDo6aDRkYTFhMjEwZjlhZjQ3YjNDM3VuaWNvZGVfd2lkdGg6OnRhYmxlczo6c3RyX3dpZHRoOjpoNGRhMWEyMTBmOWFmNDdiM0QydHVpX2VuZ2luZTo6RW5naW5lOjpyZW5kZXJfbm9kZTo6aDU5MzVjY2M4MzM5MDE4ZDZFS2NvcmU6Om51bTo6Zmx0MmRlYzo6c3RyYXRlZ3k6OmdyaXN1Ojpmb3JtYXRfc2hvcnRlc3Rfb3B0OjpoNWU4YTIzNTE1OTg1YWI5MUZAaGFzaGJyb3duOjpyYXc6OlJhd1RhYmxlPFQsQT46OnJlc2VydmVfcmVoYXNoOjpoMGQ5ZDgzMDRhMGRkODI5ZUdqPHNlcmRlX3dhc21fYmluZGdlbjo6ZGU6OkRlc2VyaWFsaXplciBhcyBzZXJkZV9jb3JlOjpkZTo6RGVzZXJpYWxpemVyPjo6ZGVzZXJpYWxpemVfYW55OjpoNDY4ZGEwNjJkYjQ0MzNkN0hIcmF0YXR1aTo6d2lkZ2V0czo6YmxvY2s6OkJsb2NrOjpyZW5kZXJfdGl0bGVfcG9zaXRpb246OmhlOGM2NDNjODhhOGJmOWRlSUJjb3JlOjpudW06OmZsdDJkZWM6OnN0cmF0ZWd5OjpkcmFnb246Om11bF9wb3cxMDo6aDI1Nzc5MzlkZjM1OWU0ZTVKPXJhdGF0dWk6OmJ1ZmZlcjo6YnVmZmVyOjpCdWZmZXI6OnNldF9zdHlsZTo6aDNkZThkOTU0ZmFjODBhMWZLdjxyYXRhdHVpOjp3aWRnZXRzOjpyZWZsb3c6OkxpbmVUcnVuY2F0b3I8TyxJPiBhcyByYXRhdHVpOjp3aWRnZXRzOjpyZWZsb3c6OkxpbmVDb21wb3Nlcj46Om5leHRfbGluZTo6aGQ5YzE5OWFhNmJkZDQ3OWRMbzxzZXJkZTo6cHJpdmF0ZTo6ZGU6OmNvbnRlbnQ6OlRhZ2dlZENvbnRlbnRWaXNpdG9yPFQ+IGFzIHNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yPjo6dmlzaXRfbWFwOjpoNjdkZjFmNzNkYTY3NjM4Zk1vPHNlcmRlOjpwcml2YXRlOjpkZTo6Y29udGVudDo6VGFnZ2VkQ29udGVudFZpc2l0b3I8VD4gYXMgc2VyZGVfY29yZTo6ZGU6OlZpc2l0b3I+Ojp2aXNpdF9tYXA6Omg3ZmZhMDJmMDc4NjI0ZDhlTj1yYXRhdHVpOjpidWZmZXI6OmNlbGw6OkNlbGw6OmFwcGVuZF9zeW1ib2w6OmhjMmMwNGRlN2RkNDg5ZGNiTzNjb3JlOjpzdHI6OmNvdW50Ojpkb19jb3VudF9jaGFyczo6aDUzZWRhNDY5MjQ1MTE2NTlQNHJhdGF0dWk6OnRleHQ6OmxpbmU6OnJlbmRlcl9zcGFuczo6aDE5MDhlZmQ1MGY5NDMxZmFRMTxzdHIgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aDljZWZmOTUyYmUwZTM3YTVSMWNvcmU6OnN0cjo6c2xpY2VfZXJyb3JfZmFpbF9ydDo6aGNlMTM2MzVkOTdiZTRlOGNTQmNvcmU6OmZtdDo6ZmxvYXQ6OmZsb2F0X3RvX2RlY2ltYWxfY29tbW9uX2V4YWN0OjpoMjQyZjcwMTEyMjM0NzdhYVQoX19ydXN0Y1s0NDI1YTdlMjBiNGM4NjE5XTo6X19yZGxfcmVhbGxvY1VIY29yZTo6bnVtOjpmbHQyZGVjOjpzdHJhdGVneTo6Z3Jpc3U6OmZvcm1hdF9leGFjdF9vcHQ6Omg3N2Y5Zjk4OWRhMWQ4ZWI5Vlh1bmljb2RlX3NlZ21lbnRhdGlvbjo6Z3JhcGhlbWU6OkdyYXBoZW1lQ3Vyc29yOjpoYW5kbGVfaW5jYl9jb25zb25hbnQ6OmgxNzU1MWQ1NTY1OTE3MzkyVzpjb3JlOjpudW06OmJpZ251bTo6QmlnMzJ4NDA6Om11bF9kaWdpdHM6OmhhY2U2NWM0ZTgwYjNjZGE3WDljb3JlOjp1bmljb2RlOjpwcmludGFibGU6OmlzX3ByaW50YWJsZTo6aDliM2VmNmRjMzRhZmNhZjZZajxzZXJkZV93YXNtX2JpbmRnZW46OmRlOjpEZXNlcmlhbGl6ZXIgYXMgc2VyZGVfY29yZTo6ZGU6OkRlc2VyaWFsaXplcj46OmRlc2VyaWFsaXplX2FueTo6aDFjNWRiOGQwNWY1Mjg3NTdaKnR1aV9lbmdpbmU6OnBhcnNlX2NvbG9yOjpoZmM1NjM2MjUzNmEwZDhjOVtJc2VyZGVfY29yZTo6ZGU6OkRlc2VyaWFsaXplcjo6X19kZXNlcmlhbGl6ZV9jb250ZW50X3YxOjpoZTIwMTNlY2IwYTE4OGEzMVxqPGNvcmU6Oml0ZXI6OmFkYXB0ZXJzOjpyZXY6OlJldjxJPiBhcyBjb3JlOjppdGVyOjp0cmFpdHM6Oml0ZXJhdG9yOjpJdGVyYXRvcj46OnRyeV9mb2xkOjpoNDFmMjBiNmUyMmJhNjlhMV01Y29yZTo6Zm10OjpGb3JtYXR0ZXI6OnBhZF9pbnRlZ3JhbDo6aGMxNjBjNDk0ZjQyZjVjODdeRWNvcmU6OmZtdDo6ZmxvYXQ6OmZsb2F0X3RvX2RlY2ltYWxfY29tbW9uX3Nob3J0ZXN0OjpoOTAzNzBkZTMyNzU2OWFjNl9YdW5pY29kZV9zZWdtZW50YXRpb246OmdyYXBoZW1lOjpHcmFwaGVtZUN1cnNvcjo6aGFuZGxlX2luY2JfY29uc29uYW50OjpoMTc1NTFkNTU2NTkxNzM5MmA4ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6ZnJlZTo6aDFlZDdiODRjMTc4MjQwZjlhSmFsbG9jOjpjb2xsZWN0aW9uczo6dmVjX2RlcXVlOjpWZWNEZXF1ZTxULEE+Ojp3cmFwX2NvcHk6Omg1Zjk5MWMxYTU3MzhhYTY1YjFjb3JlOjpzdHI6OmNvbnZlcnRzOjpmcm9tX3V0Zjg6Omg4MmM4ODhhOTg4ZGI1YzZiY1s8Y29yZTo6c3RyOjppdGVyOjpMaW5lcyBhcyBjb3JlOjppdGVyOjp0cmFpdHM6Oml0ZXJhdG9yOjpJdGVyYXRvcj46Om5leHQ6OmhjZjJjOTRlODhiMzQxNmRiZHA8YWxsb2M6OnZlYzo6VmVjPFQ+IGFzIGFsbG9jOjp2ZWM6OnNwZWNfZnJvbV9pdGVyX25lc3RlZDo6U3BlY0Zyb21JdGVyTmVzdGVkPFQsST4+Ojpmcm9tX2l0ZXI6Omg4YjQ4NDMwYTlkMTdhZjc0ZUVjb3JlOjpjaGFyOjptZXRob2RzOjo8aW1wbCBjaGFyPjo6ZXNjYXBlX2RlYnVnX2V4dDo6aDAxYjZhMDlkMmY5OTE3M2VmT3VuaWNvZGVfc2VnbWVudGF0aW9uOjpncmFwaGVtZTo6R3JhcGhlbWVDdXJzb3I6OmhhbmRsZV9lbW9qaTo6aDAyOWRjNDIxY2E1ZmRiMTJnLGNvcmU6OmZtdDo6Rm9ybWF0dGVyOjpwYWQ6Omg3NGEzNDBmZDg3Mjc1MmFhaGY8c2VyZGU6OnByaXZhdGU6OmRlOjpjb250ZW50OjpDb250ZW50VmlzaXRvciBhcyBzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcj46OnZpc2l0X21hcDo6aDUxOWRjMjM3MmRhMzExMDhpPGNvcmU6OmZtdDo6Rm9ybWF0dGVyOjpwYWRfZm9ybWF0dGVkX3BhcnRzOjpoM2Y4ZTViYjdhYmRlNTFiOGpZPHJhdGF0dWk6OnRleHQ6OmxpbmU6OkxpbmUgYXMgcmF0YXR1aTo6d2lkZ2V0czo6V2lkZ2V0UmVmPjo6cmVuZGVyX3JlZjo6aDQ4MTFmZTg0MzZiOTQ3YzNrOWFsbG9jOjpzdHJpbmc6OlN0cmluZzo6ZnJvbV91dGY4X2xvc3N5OjpoODhlYzZhYTJmZGJiNWU4Ymw3c2VyZGVfd2FzbV9iaW5kZ2VuOjpzdGF0aWNfc3RyX3RvX2pzOjpoMTI2ZTZhMTMwYmVkM2RiZG1TPGNvcmU6OmZtdDo6YnVpbGRlcnM6OlBhZEFkYXB0ZXIgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX3N0cjo6aDI1NTg0NmExNjlkMDI3ODVuOGNvcmU6Om51bTo6YmlnbnVtOjpCaWczMng0MDo6bXVsX3BvdzI6Omg0MjEwZWE2MmIwOWVmZDAxb2E8Y29yZTo6bWFya2VyOjpQaGFudG9tRGF0YTxUPiBhcyBzZXJkZV9jb3JlOjpkZTo6RGVzZXJpYWxpemVTZWVkPjo6ZGVzZXJpYWxpemU6OmhmYzlkOTUwZDczYmYxYTdicCNjb3JlOjpmbXQ6OndyaXRlOjpoOGEzOTMzZTMyYjJkNmE5MXE4cmF0YXR1aTo6d2lkZ2V0czo6YmxvY2s6OkJsb2NrOjppbm5lcjo6aGRlNTFiYzNlZTZlYTkyZGNyPmNvcmU6OmZtdDo6Rm9ybWF0dGVyOjp3cml0ZV9mb3JtYXR0ZWRfcGFydHM6OmhiNmI0YTcyNjJiZDRiNzQxc2E8Y29yZTo6bWFya2VyOjpQaGFudG9tRGF0YTxUPiBhcyBzZXJkZV9jb3JlOjpkZTo6RGVzZXJpYWxpemVTZWVkPjo6ZGVzZXJpYWxpemU6OmgyMjRhZWI0YTJhNmE5OWY3dD53YXNtX2JpbmRnZW46Ol9fcnQ6OkxhenlDZWxsPFQsRj46OnRyeV93aXRoOjpoYTYxMmQwOWRiYjdmZGM3MXU+Y29yZTo6Zm10OjpudW06OmltcDo6PGltcGwgdTY0Pjo6X2ZtdF9pbm5lcjo6aGEwZjg5NzBmYTEzOTNhOTZ2PmNvcmU6OmZtdDo6bnVtOjppbXA6OjxpbXBsIHUzMj46Ol9mbXRfaW5uZXI6Omg2ODlmYjdjNmMwZGE3OWMzd0o8c2VyZGVfY29yZTo6ZGU6OlVuZXhwZWN0ZWQgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoZmUyOWQyYjI4Yzk2ZjQ0NninATxzZXJkZV9jb3JlOjpkZTo6aW1wbHM6OjxpbXBsIHNlcmRlX2NvcmU6OmRlOjpEZXNlcmlhbGl6ZSBmb3IgYWxsb2M6OnZlYzo6VmVjPFQ+Pjo6ZGVzZXJpYWxpemU6OlZlY1Zpc2l0b3I8VD4gYXMgc2VyZGVfY29yZTo6ZGU6OlZpc2l0b3I+Ojp2aXNpdF9zZXE6OmhkMTgxYTY5ODgzOTdjYzFmeWE8Y29yZTo6c3RyOjpsb3NzeTo6VXRmOENodW5rcyBhcyBjb3JlOjppdGVyOjp0cmFpdHM6Oml0ZXJhdG9yOjpJdGVyYXRvcj46Om5leHQ6Omg0ODU1OTEyMzhlNmY1MmVjemY8c2VyZGU6OnByaXZhdGU6OmRlOjpjb250ZW50OjpDb250ZW50VmlzaXRvciBhcyBzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcj46OnZpc2l0X21hcDo6aGM2MTQ2YTU5YzcwZDljNWV7QWRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46OmRpc3Bvc2VfY2h1bms6OmhhZTU4OGI4YjE3OTQ1NjgyfHA8YWxsb2M6OnZlYzo6VmVjPFQ+IGFzIGFsbG9jOjp2ZWM6OnNwZWNfZnJvbV9pdGVyX25lc3RlZDo6U3BlY0Zyb21JdGVyTmVzdGVkPFQsST4+Ojpmcm9tX2l0ZXI6OmhkYzRiZmQ0YzQ3Y2FiMDk2fTFjb25zb2xlX2Vycm9yX3BhbmljX2hvb2s6Omhvb2s6OmgyMzI1YThiNzY5YjM2NWRlfj5yYXRhdHVpOjp0ZXh0OjpzcGFuOjpTcGFuOjpzdHlsZWRfZ3JhcGhlbWVzOjpoYzE4NWI0NGIyZWNlNDczMH9wPGFsbG9jOjp2ZWM6OlZlYzxUPiBhcyBhbGxvYzo6dmVjOjpzcGVjX2Zyb21faXRlcl9uZXN0ZWQ6OlNwZWNGcm9tSXRlck5lc3RlZDxULEk+Pjo6ZnJvbV9pdGVyOjpoNDYyOTY0YmE3Nzc1M2Q3YYABeTxzZXJkZTo6cHJpdmF0ZTo6ZGU6OmNvbnRlbnQ6OkNvbnRlbnREZXNlcmlhbGl6ZXI8RT4gYXMgc2VyZGVfY29yZTo6ZGU6OkRlc2VyaWFsaXplcj46OmRlc2VyaWFsaXplX3NlcTo6aGMwZmI4MzMwOTM5NTU1ZjOBATpzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcjo6dmlzaXRfYnl0ZV9idWY6Omg1YmRjOGIzMGYyNDAwZmY0ggFGc2VyZGVfd2FzbV9iaW5kZ2VuOjpkZTo6RGVzZXJpYWxpemVyOjppbnZhbGlkX3R5cGVfOjpoYmVkZjkxNjQwZWFiZjljNIMBZjxzZXJkZTo6cHJpdmF0ZTo6ZGU6OmNvbnRlbnQ6OkNvbnRlbnRWaXNpdG9yIGFzIHNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yPjo6dmlzaXRfc2VxOjpoOTdmZjBiMDI1MzZmYWZhMoQBZjxzZXJkZTo6cHJpdmF0ZTo6ZGU6OmNvbnRlbnQ6OkNvbnRlbnRWaXNpdG9yIGFzIHNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yPjo6dmlzaXRfc2VxOjpoMDRlOGYwZTI4YTFkNzdjMYUBT3VuaWNvZGVfc2VnbWVudGF0aW9uOjpncmFwaGVtZTo6R3JhcGhlbWVDdXJzb3I6OmhhbmRsZV9lbW9qaTo6aDAyOWRjNDIxY2E1ZmRiMTKGATNhbGxvYzo6Zm10Ojpmb3JtYXQ6OmZvcm1hdF9pbm5lcjo6aDMyYzQ0MzJkZjY2Y2I2ODWHAVJ1bmljb2RlX3NlZ21lbnRhdGlvbjo6Z3JhcGhlbWU6OkdyYXBoZW1lQ3Vyc29yOjpoYW5kbGVfcmVnaW9uYWw6Omg5NjFkZGQ4MzUyZmY1MzYwiAE8ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6bWVtYWxpZ246OmhhZjM0OWRkNzZjOWE1MDkxiQFqPHNlcmRlX3dhc21fYmluZGdlbjo6ZGU6OkRlc2VyaWFsaXplciBhcyBzZXJkZV9jb3JlOjpkZTo6RGVzZXJpYWxpemVyPjo6ZGVzZXJpYWxpemVfbWFwOjpoNjlhMGM5ZTM4NjQ2ZmJkMYoBTHVuaWNvZGVfc2VnbWVudGF0aW9uOjp0YWJsZXM6OmdyYXBoZW1lOjpncmFwaGVtZV9jYXRlZ29yeTo6aDEyYTFiYjM4NGExZGM3Y2aLAUN1bmljb2RlX3dpZHRoOjp0YWJsZXM6OmlzX3RyYW5zcGFyZW50X3plcm9fd2lkdGg6OmhlYzAzMzA3OGFkMGE5MWI3jAFYY29yZTo6bnVtOjpmbHQyZGVjOjpzdHJhdGVneTo6Z3Jpc3U6OmZvcm1hdF9leGFjdF9vcHQ6OnBvc3NpYmx5X3JvdW5kOjpoMThhMDE3MzdlNzE1MmY0Zo0BNnVuaWNvZGVfd2lkdGg6OnRhYmxlczo6bG9va3VwX3dpZHRoOjpoY2VjMTBlNTgzYzdlMmU0ZY4BNnVuaWNvZGVfd2lkdGg6OnRhYmxlczo6bG9va3VwX3dpZHRoOjpoY2VjMTBlNTgzYzdlMmU0ZY8BNnVuaWNvZGVfd2lkdGg6OnRhYmxlczo6bG9va3VwX3dpZHRoOjpoY2VjMTBlNTgzYzdlMmU0ZZABNnVuaWNvZGVfd2lkdGg6OnRhYmxlczo6bG9va3VwX3dpZHRoOjpoY2VjMTBlNTgzYzdlMmU0ZZEBSXJhdGF0dWk6OnRleHQ6OmdyYXBoZW1lOjpTdHlsZWRHcmFwaGVtZTo6aXNfd2hpdGVzcGFjZTo6aDVlMWIxZTIyZGU3Y2VlOTWSAUVjb3JlOjp1bmljb2RlOjp1bmljb2RlX2RhdGE6OmNvbnZlcnNpb25zOjp0b19sb3dlcjo6aDI2NTRlMzg1YTZjOTY1ZmWTAV88cmF0YXR1aTo6d2lkZ2V0czo6cGFyYWdyYXBoOjpQYXJhZ3JhcGggYXMgcmF0YXR1aTo6d2lkZ2V0czo6V2lkZ2V0Pjo6cmVuZGVyOjpoN2Y4ODI1YjNlMDZiNWM4M5QBQGRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46OnVubGlua19jaHVuazo6aDczZThmYzBhOGY4ZTc1YjKVAWY8c2VyZGU6OnByaXZhdGU6OmRlOjpjb250ZW50OjpDb250ZW50VmlzaXRvciBhcyBzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcj46OnZpc2l0X3NlcTo6aGNjMTVkMGRiMTFmY2YwMWSWAUJzZXJkZTo6cHJpdmF0ZTo6ZGU6OmNvbnRlbnQ6OmNvbnRlbnRfdW5leHBlY3RlZDo6aGViMWU2MjMxMDYyNDIwYzeXATRhbGxvYzo6dmVjOjpWZWM8VCxBPjo6ZXh0ZW5kX3dpdGg6OmgxM2QxN2MwMDA3N2M4ODMxmAE5YWxsb2M6OnZlYzo6VmVjPFQsQT46OmV4dGVuZF9kZXN1Z2FyZWQ6Omg0ZThiYTMyYzhkYjE1ZDIzmQF8PHNlcmRlOjpwcml2YXRlOjpkZTo6Y29udGVudDo6Q29udGVudERlc2VyaWFsaXplcjxFPiBhcyBzZXJkZV9jb3JlOjpkZTo6RGVzZXJpYWxpemVyPjo6ZGVzZXJpYWxpemVfc3RyaW5nOjpoMDdmM2RkNDY5OGU0YTk4NpoBP2NvbXBhY3Rfc3RyOjpyZXByOjpoZWFwOjpIZWFwQnVmZmVyOjpyZWFsbG9jOjpoNGRjMDQxYzgxM2VmMjRiOZsBdDxzZXJkZTo6cHJpdmF0ZTo6ZGU6OmNvbnRlbnQ6OlNlcURlc2VyaWFsaXplcjxFPiBhcyBzZXJkZV9jb3JlOjpkZTo6U2VxQWNjZXNzPjo6bmV4dF9lbGVtZW50X3NlZWQ6OmgxYTllNGFmN2ViODljMjBlnAE4Y29yZTo6bnVtOjpmbHQyZGVjOjpkaWdpdHNfdG9fZGVjX3N0cjo6aGE1OGMyNzBmOGQ3NjJiZTSdAUxjb3JlOjp1bmljb2RlOjp1bmljb2RlX2RhdGE6OmdyYXBoZW1lX2V4dGVuZDo6bG9va3VwX3Nsb3c6OmgzNmE5ZmI1Yzg4NzUxYjFlngFLY29yZTo6dW5pY29kZTo6dW5pY29kZV9kYXRhOjpjYXNlX2lnbm9yYWJsZTo6bG9va3VwX3Nsb3c6Omg0MGNiYTZjOGYzZTcxNjk5nwFuPHNlcmRlX2NvcmU6OmRlOjp2YWx1ZTo6TWFwRGVzZXJpYWxpemVyPEksRT4gYXMgc2VyZGVfY29yZTo6ZGU6Ok1hcEFjY2Vzcz46Om5leHRfZW50cnlfc2VlZDo6aDUxM2JmYzI4MzE2NWNjZGagAT53YXNtX2JpbmRnZW46Ol9fcnQ6OkxhenlDZWxsPFQsRj46OnRyeV93aXRoOjpoYTRiNzkxZGU0MzAzNTA5MKEBajxzZXJkZV93YXNtX2JpbmRnZW46OmRlOjpEZXNlcmlhbGl6ZXIgYXMgc2VyZGVfY29yZTo6ZGU6OkRlc2VyaWFsaXplcj46OmRlc2VyaWFsaXplX3NlcTo6aGY4YjgxMzMzMDZiYTM0YzWiAUU8c2VyZGVfY29yZTo6ZGU6Ok9uZU9mIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDkzMDBmMjY0MTQwMDBjMTejAThyYXRhdHVpOjp3aWRnZXRzOjpyZWZsb3c6OnRyaW1fb2Zmc2V0OjpoNTcxMjA4ZjRiZjlhYTg5Y6QBRmRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46Omluc2VydF9sYXJnZV9jaHVuazo6aDA1NTkxYjJiNGI4OGMyYzClATpzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcjo6dmlzaXRfYnl0ZV9idWY6OmhiZjY2N2VlZjVhZTQyMDk2pgFCY29yZTo6dW5pY29kZTo6dW5pY29kZV9kYXRhOjpjYXNlZDo6bG9va3VwX3Nsb3c6OmhlM2U4NDZjNDEyOGU5MTBhpwE6Y29yZTo6Zm10OjpidWlsZGVyczo6RGVidWdTdHJ1Y3Q6OmZpZWxkOjpoMzM2NWY3YTlmNTZkNDI5ZKgBN2NvcmU6OnNsaWNlOjppbmRleDo6c2xpY2VfaW5kZXhfZmFpbDo6aGQ1ODIwYThlNjY3YmI1NDepATZjb3JlOjpzbGljZTo6bWVtY2hyOjptZW1jaHJfYWxpZ25lZDo6aDkwNGZlNjJhMzY4N2M2YTiqAVFzdGQ6OnN5czo6dGhyZWFkX2xvY2FsOjpub190aHJlYWRzOjpMYXp5U3RvcmFnZTxUPjo6aW5pdGlhbGl6ZTo6aGIxYTEyMTk2NjQzYmFhODGrAUdjb3JlOjpmbXQ6Om51bTo6PGltcGwgY29yZTo6Zm10OjpEZWJ1ZyBmb3IgdTMyPjo6Zm10OjpoMThmODkzZGJlYTEzNDE1MqwBSTxzdGQ6OnBhbmljOjpQYW5pY0hvb2tJbmZvIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDgyYTg4YjIzMGY4MDg3MGStAVU8Y29tcGFjdF9zdHI6OnJlcHI6OlJlcHIgYXMgY29yZTo6Y2xvbmU6OkNsb25lPjo6Y2xvbmU6OmNsb25lX2hlYXA6OmhiZTFjYWI2NmNkZjA0NTYyrgFKPGFsbG9jOjpzdHJpbmc6OlN0cmluZyBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfY2hhcjo6aGM5NTBhYWI1ZGViNWViMDmvAW88c2VyZGU6OnByaXZhdGU6OmRlOjpjb250ZW50OjpUYWdnZWRDb250ZW50VmlzaXRvcjxUPiBhcyBzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcj46OnZpc2l0X3NlcTo6aGVhZmFhMDNlMmY1NDVjNDWwAUdjb3JlOjpmbXQ6Om51bTo6PGltcGwgY29yZTo6Zm10OjpEZWJ1ZyBmb3IgdTY0Pjo6Zm10OjpoNWZjODVlZDdmN2YxMGE2ZrEBbzxzZXJkZTo6cHJpdmF0ZTo6ZGU6OmNvbnRlbnQ6OlRhZ2dlZENvbnRlbnRWaXNpdG9yPFQ+IGFzIHNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yPjo6dmlzaXRfc2VxOjpoNGEzMzFkNjE0YmU1OGQ1ZbIBSjxhbGxvYzo6c3RyaW5nOjpTdHJpbmcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX2NoYXI6OmhjOTUwYWFiNWRlYjVlYjA5swFKPGFsbG9jOjpzdHJpbmc6OlN0cmluZyBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfY2hhcjo6aGM5NTBhYWI1ZGViNWViMDm0ASNqc19zeXM6OnRyeV9pdGVyOjpoNWViYTZlMzE0MGJhYmRhNrUBUTxyYXRhdHVpOjp0ZXh0Ojp0ZXh0OjpUZXh0IGFzIGNvcmU6OmNvbnZlcnQ6OkZyb208JnN0cj4+Ojpmcm9tOjpoMDNmMGUxOGI1YWJiMjJmOLYBUmNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxzZXJkZV9jb3JlOjpwcml2YXRlOjpjb250ZW50OjpDb250ZW50Pjo6aGU5OTlmYTNjZDMzOTA3ZjG3AVJjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8c2VyZGVfY29yZTo6cHJpdmF0ZTo6Y29udGVudDo6Q29udGVudD46OmhlOTk5ZmEzY2QzMzkwN2YxuAFSY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPHNlcmRlX2NvcmU6OnByaXZhdGU6OmNvbnRlbnQ6OkNvbnRlbnQ+OjpoZTk5OWZhM2NkMzM5MDdmMbkBUmNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxzZXJkZV9jb3JlOjpwcml2YXRlOjpjb250ZW50OjpDb250ZW50Pjo6aGU5OTlmYTNjZDMzOTA3ZjG6AXM8c2VyZGVfd2FzbV9iaW5kZ2VuOjpzZXI6Ok9iamVjdFNlcmlhbGl6ZXIgYXMgc2VyZGVfY29yZTo6c2VyOjpTZXJpYWxpemVTdHJ1Y3Q+OjpzZXJpYWxpemVfZmllbGQ6Omg2MzQwZmIzNmY5ODZlZGRmuwE0PGNoYXIgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoOTZlZjYyNWU3OGNhMzlhMbwBEV9fd2JnX2VuZ2luZV9mcmVlvQE2c2VyZGVfY29yZTo6ZGU6OlZpc2l0b3I6OnZpc2l0X2NoYXI6Omg1OTY0ZjhiMWI3OGExODdmvgEKZW5naW5lX25ld78BajxzZXJkZV93YXNtX2JpbmRnZW46OmRlOjpEZXNlcmlhbGl6ZXIgYXMgc2VyZGVfY29yZTo6ZGU6OkRlc2VyaWFsaXplcj46OmRlc2VyaWFsaXplX21hcDo6aGJiNTEzNDcyNTRmNzI4ZjLAAUJjb3JlOjpmbXQ6OkZvcm1hdHRlcjo6ZGVidWdfdHVwbGVfZmllbGQxX2ZpbmlzaDo6aGJiNTRiYjYyZDA3YmM1MDjBAVJ1bmljb2RlX3NlZ21lbnRhdGlvbjo6Z3JhcGhlbWU6OkdyYXBoZW1lQ3Vyc29yOjpoYW5kbGVfcmVnaW9uYWw6Omg5NjFkZGQ4MzUyZmY1MzYwwgFJY29tcGFjdF9zdHI6OnJlcHI6OlJlcHI6OmFzX211dF9idWY6OmlubGluZV9zdGF0aWNfc3RyOjpoZDU4N2IyYmU5Y2EzZGJiNcMBN2NvcmU6OnBhbmlja2luZzo6YXNzZXJ0X2ZhaWxlZF9pbm5lcjo6aGZiMDM5MzYwZWNlMTE1OWTEATpyYXRhdHVpOjpidWZmZXI6OmNlbGw6OkNlbGw6OnNldF9zeW1ib2w6OmhlYjYyNDkwMWJiZGQyMjYyxQF8PHNlcmRlOjpwcml2YXRlOjpkZTo6Y29udGVudDo6Q29udGVudERlc2VyaWFsaXplcjxFPiBhcyBzZXJkZV9jb3JlOjpkZTo6RGVzZXJpYWxpemVyPjo6ZGVzZXJpYWxpemVfb3B0aW9uOjpoYmM0ZTkyNmQ1MTczY2VjZMYBO3JhdGF0dWk6OmJ1ZmZlcjo6YnVmZmVyOjpCdWZmZXI6OmdldF9tdXQ6OmhlYTA5NTc5MDBiNjhlOTdmxwFAdW5pY29kZV93aWR0aDo6dGFibGVzOjppc19lbW9qaV9tb2RpZmllcl9iYXNlOjpoOWZlMWRmMGY4NWRkNzljMcgBQHVuaWNvZGVfd2lkdGg6OnRhYmxlczo6aXNfZW1vamlfbW9kaWZpZXJfYmFzZTo6aDlmZTFkZjBmODVkZDc5YzHJAUB1bmljb2RlX3dpZHRoOjp0YWJsZXM6OmlzX2Vtb2ppX21vZGlmaWVyX2Jhc2U6Omg5ZmUxZGYwZjg1ZGQ3OWMxygFAdW5pY29kZV93aWR0aDo6dGFibGVzOjppc19lbW9qaV9tb2RpZmllcl9iYXNlOjpoOWZlMWRmMGY4NWRkNzljMcsBbjxzdGQ6OnBhbmlja2luZzo6cGFuaWNfaGFuZGxlcjo6Rm9ybWF0U3RyaW5nUGF5bG9hZCBhcyBjb3JlOjpwYW5pYzo6UGFuaWNQYXlsb2FkPjo6dGFrZV9ib3g6Omg4ZTJkNTQyM2VmNzlmYWNlzAGGATw8c2VyZGVfY29yZTo6ZGU6OldpdGhEZWNpbWFsUG9pbnQgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpMb29rRm9yRGVjaW1hbFBvaW50IGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9zdHI6Omg5ZDcyZmEwNTllNGM0NTQ3zQE5cmF0YXR1aTo6YnVmZmVyOjpidWZmZXI6OkJ1ZmZlcjo6ZW1wdHk6Omg0YzExN2M4OGMxODhjYTNlzgE6c2VyZGVfY29yZTo6ZGU6OlZpc2l0b3I6OnZpc2l0X2J5dGVfYnVmOjpoZjM5MTA1MGYzZDE5NWVkNc8BTmNvcmU6OmZtdDo6bnVtOjppbXA6OjxpbXBsIGNvcmU6OmZtdDo6RGlzcGxheSBmb3IgdTE2Pjo6Zm10OjpoMmJkN2NmMzc0MmE4NDg0N9ABPHJhdGF0dWk6OmJ1ZmZlcjo6YnVmZmVyOjpCdWZmZXI6OmluZGV4X29mOjpoYjdmZjgzZDNjNjI5YjA0YdEBcTxzZXJkZV93YXNtX2JpbmRnZW46OmRlOjpEZXNlcmlhbGl6ZXIgYXMgc2VyZGVfY29yZTo6ZGU6OkRlc2VyaWFsaXplcj46OmRlc2VyaWFsaXplX2lkZW50aWZpZXI6OmgzOGYxOTk0OTQ5NzMxOGRi0gFDY29yZTo6Zm10OjpGb3JtYXR0ZXI6OmRlYnVnX3N0cnVjdF9maWVsZDRfZmluaXNoOjpoODNhYjY3NGQwMDQwNWJhOdMBYTxzZXJkZV9jb3JlOjpkZTo6aW1wbHM6OlN0cmluZ1Zpc2l0b3IgYXMgc2VyZGVfY29yZTo6ZGU6OlZpc2l0b3I+Ojp2aXNpdF9ieXRlczo6aDM5ODY0NzdiMzQ0N2UzNmLUAUBjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8dHVpX2VuZ2luZTo6VHVpTm9kZT46OmgwYmE2MjM4ZGYwYTVjZWIy1QFqPHNlcmRlX3dhc21fYmluZGdlbjo6ZGU6OkRlc2VyaWFsaXplciBhcyBzZXJkZV9jb3JlOjpkZTo6RGVzZXJpYWxpemVyPjo6ZGVzZXJpYWxpemVfc2VxOjpoYTFkNjQ0MmRjZGNhNWE0ZNYBowE8dHVpX2VuZ2luZTo6Xzo6PGltcGwgc2VyZGVfY29yZTo6ZGU6OkRlc2VyaWFsaXplIGZvciB0dWlfZW5naW5lOjpUdWlOb2RlPjo6ZGVzZXJpYWxpemU6Ol9fRmllbGRWaXNpdG9yIGFzIHNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yPjo6dmlzaXRfYnl0ZXM6OmgwZjFlODZhZWRmZjNiYWJk1wFAY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPHR1aV9lbmdpbmU6OlR1aU5vZGU+OjpoMGJhNjIzOGRmMGE1Y2ViMtgBMnN0ZDo6cGFuaWNraW5nOjpwYW5pY193aXRoX2hvb2s6OmhiNDRmZjdhN2RiMWQ0YTM22QFXPHJhdGF0dWk6OndpZGdldHM6OmJsb2NrOjpCbG9jayBhcyByYXRhdHVpOjp3aWRnZXRzOjpXaWRnZXQ+OjpyZW5kZXI6Omg5YjZkYTJlYWIzMGFhZjgx2gE+YWxsb2M6OnJhd192ZWM6OlJhd1ZlY0lubmVyPEE+OjpmaW5pc2hfZ3Jvdzo6aDhiOWE1MjAyNDRiNzU5NGbbAT5hbGxvYzo6cmF3X3ZlYzo6UmF3VmVjSW5uZXI8QT46OmZpbmlzaF9ncm93OjpoNDRkYjZhYmMxMDg3YThhZdwBPmFsbG9jOjpyYXdfdmVjOjpSYXdWZWNJbm5lcjxBPjo6ZmluaXNoX2dyb3c6OmgyOTYwNDkwZWFlYzA5YzU03QFRYWxsb2M6OnJhd192ZWM6OlJhd1ZlY0lubmVyPEE+OjpyZXNlcnZlOjpkb19yZXNlcnZlX2FuZF9oYW5kbGU6Omg0NmZkMjNmZTg3YTU3ZmJm3gE+YWxsb2M6OnJhd192ZWM6OlJhd1ZlY0lubmVyPEE+OjpmaW5pc2hfZ3Jvdzo6aGE3ODgwODM5MmE2ZDMyZWPfAUVhbGxvYzo6Y29sbGVjdGlvbnM6OnZlY19kZXF1ZTo6VmVjRGVxdWU8VCxBPjo6Z3Jvdzo6aGVkNWNjY2U5NDFiZWY0OTHgAUVhbGxvYzo6Y29sbGVjdGlvbnM6OnZlY19kZXF1ZTo6VmVjRGVxdWU8VCxBPjo6Z3Jvdzo6aDkzZmYzNDQ4YjY3NWI4ZDLhAT93YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmNsb3N1cmVzOjppbnZva2UzX211dDo6aDRmNTg3NzlkOWFmZjEyZjjiAVY8c2VyZGVfd2FzbV9iaW5kZ2VuOjplcnJvcjo6RXJyb3IgYXMgc2VyZGVfY29yZTo6ZGU6OkVycm9yPjo6Y3VzdG9tOjpoZTM1YTNmMGI5YzJkMzkyYeMBOHNlcmRlX3dhc21fYmluZGdlbjo6ZXJyb3I6OkVycm9yOjpuZXc6Omg2MGVkZjk3ODBlMjNkY2Y25AFQPHNlcmRlX2NvcmU6OmRlOjpXaXRoRGVjaW1hbFBvaW50IGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aGRiYzE3ZjQ3YzU0NGRjNzPlAaIBPHR1aV9lbmdpbmU6Ol86OjxpbXBsIHNlcmRlX2NvcmU6OmRlOjpEZXNlcmlhbGl6ZSBmb3IgdHVpX2VuZ2luZTo6Qm94UHJvcHM+OjpkZXNlcmlhbGl6ZTo6X19GaWVsZFZpc2l0b3IgYXMgc2VyZGVfY29yZTo6ZGU6OlZpc2l0b3I+Ojp2aXNpdF9zdHI6Omg2NTZiOGFkYjAzNmFhZDlk5gE5cmF0YXR1aTo6YnVmZmVyOjpidWZmZXI6OkJ1ZmZlcjo6cmVzZXQ6OmgwOTBhOTY0NmZhNzhmODM35wFUdW5pY29kZV9zZWdtZW50YXRpb246OmdyYXBoZW1lOjpHcmFwaGVtZUN1cnNvcjo6Z3JhcGhlbWVfY2F0ZWdvcnk6Omg0YzNiZGM3N2NjY2JhMjY46AFRYWxsb2M6OnJhd192ZWM6OlJhd1ZlY0lubmVyPEE+OjpyZXNlcnZlOjpkb19yZXNlcnZlX2FuZF9oYW5kbGU6OmhmZGMwZTE1ODAxNmEzNzg26QFBc2VyZGVfd2FzbV9iaW5kZ2VuOjpkZTo6RGVzZXJpYWxpemVyOjphc19ieXRlczo6aDIxZGY2ZjlmZDBiMTA0NDPqAS1qc19zeXM6OlVpbnQ4QXJyYXk6OnRvX3ZlYzo6aDQwMzEzOWVlNTA5MjJmNGPrAUFhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjSW5uZXI8QT46Omdyb3dfYW1vcnRpemVkOjpoZTM1OTM3ZDZhOWM0MjAzYuwBaTxzdGQ6OnBhbmlja2luZzo6cGFuaWNfaGFuZGxlcjo6Rm9ybWF0U3RyaW5nUGF5bG9hZCBhcyBjb3JlOjpwYW5pYzo6UGFuaWNQYXlsb2FkPjo6Z2V0OjpoMzhlMjkwOWUyYWQxYmMxYe0BMjxjaGFyIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6OmhlNjdhMWZiNmQ1N2EzYmNi7gE5c2VyZGVfY29yZTo6ZGU6OkVycm9yOjp1bmtub3duX3ZhcmlhbnQ6OmhjOTA3MDZiNzY0MGI0MTMy7wFRYWxsb2M6OnJhd192ZWM6OlJhd1ZlY0lubmVyPEE+OjpyZXNlcnZlOjpkb19yZXNlcnZlX2FuZF9oYW5kbGU6OmgzZTE4YjYxZjQ4YjAxNWU18AFRYWxsb2M6OnJhd192ZWM6OlJhd1ZlY0lubmVyPEE+OjpyZXNlcnZlOjpkb19yZXNlcnZlX2FuZF9oYW5kbGU6OmhlNDMwNDM0NjYyNGY5NGQz8QFDPHdhc21fYmluZGdlbjo6SnNWYWx1ZSBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoMDgwYTlhNjIxMWY0NGQ3OPIBMGFsbG9jOjpyYzo6UmM8VCxBPjo6ZHJvcF9zbG93OjpoNGY5ODQzYzM0YjdjYmNlNPMBVXVuaWNvZGVfc2VnbWVudGF0aW9uOjpncmFwaGVtZTo6R3JhcGhlbWVDdXJzb3I6OmlzX2JvdW5kYXJ5X3Jlc3VsdDo6aDUwMTE2YTAyMjdmZTk3M2P0AVV1bmljb2RlX3NlZ21lbnRhdGlvbjo6Z3JhcGhlbWU6OkdyYXBoZW1lQ3Vyc29yOjppc19ib3VuZGFyeV9yZXN1bHQ6Omg1MDExNmEwMjI3ZmU5NzNj9QFVPGpzX3N5czo6SW50b0l0ZXIgYXMgY29yZTo6aXRlcjo6dHJhaXRzOjppdGVyYXRvcjo6SXRlcmF0b3I+OjpuZXh0OjpoMWE5NzU3ZTk2MDVlZjIyZfYBWGNvbXBhY3Rfc3RyOjpyZXByOjpoZWFwOjphbGxvY2F0ZV9wdHI6OmFsbG9jYXRlX3dpdGhfY2FwYWNpdHlfb25faGVhcDo6aDEyZDIxOTRlODc4MTZhM2H3AT5hbGxvYzo6cmF3X3ZlYzo6UmF3VmVjSW5uZXI8QT46OmZpbmlzaF9ncm93OjpoZjRlMzAzZjI2MDQ3NTQ4NPgBSmNvcmU6OmZtdDo6bnVtOjo8aW1wbCBjb3JlOjpmbXQ6OlVwcGVySGV4IGZvciB1MTY+OjpmbXQ6Omg2OWY3MjU2OWRiOGY1ZDQ5+QFKY29yZTo6Zm10OjpudW06OjxpbXBsIGNvcmU6OmZtdDo6TG93ZXJIZXggZm9yIHUxNj46OmZtdDo6aGJlYzA2MjI0NTkyNDMxZmP6ATNjb21wYWN0X3N0cjo6cmVwcjo6UmVwcjo6c2V0X2xlbjo6aDZkNGY0ZWViN2MyNTA4ODn7AQhfX211bHRpM/wBSmNvcmU6OmZtdDo6bnVtOjo8aW1wbCBjb3JlOjpmbXQ6Okxvd2VySGV4IGZvciB1MzI+OjpmbXQ6OmhmM2E3YjE0MTgwYTg1ZGUy/QFKY29yZTo6Zm10OjpudW06OjxpbXBsIGNvcmU6OmZtdDo6VXBwZXJIZXggZm9yIHUzMj46OmZtdDo6aGExMGZjMzU4ODE1MDNlYjb+AbIBPDxhbGxvYzo6Y29sbGVjdGlvbnM6OnZlY19kZXF1ZTo6ZHJhaW46OkRyYWluPFQsQT4gYXMgY29yZTo6b3BzOjpkcm9wOjpEcm9wPjo6ZHJvcDo6RHJvcEd1YXJkPFQsQT4gYXMgY29yZTo6b3BzOjpkcm9wOjpEcm9wPjo6ZHJvcDo6am9pbl9oZWFkX2FuZF90YWlsX3dyYXBwaW5nOjpoMDk3NWI3ODI2OWVjNWNkMP8BPXN0ZDo6cGFuaWNraW5nOjpwYW5pY19oYW5kbGVyOjp7e2Nsb3N1cmV9fTo6aGM0NTc1M2QzOGMyM2FiY2aAAitzdGQ6OnBhbmlja2luZzo6c2V0X2hvb2s6Omg2ZTFjYzBlODM3M2MwMjg0gQJRPHJhdGF0dWk6OnRleHQ6OmxpbmU6OkxpbmUgYXMgY29yZTo6Y29udmVydDo6RnJvbTwmc3RyPj46OmZyb206OmhjZDUyMTY1NzA0ZDY0YzUwggI+YWxsb2M6OnJhd192ZWM6OlJhd1ZlY0lubmVyPEE+OjpmaW5pc2hfZ3Jvdzo6aDAwZjZjNzJhODMzNzhhMjWDAjhhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46Omdyb3dfb25lOjpoMzIyMDJjNTk5MGZlOWJjZoQCOGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6Z3Jvd19vbmU6OmhiOWVjNTIzMmI2MmYxNTkwhQJcY29tcGFjdF9zdHI6OnJlcHI6OmhlYXA6OmRlYWxsb2NhdGVfcHRyOjpkZWFsbG9jYXRlX3dpdGhfY2FwYWNpdHlfb25faGVhcDo6aDBmNzY5ZWVlZDliNDQzNjGGAmA8dW5pY29kZV9zZWdtZW50YXRpb246OmdyYXBoZW1lOjpHcmFwaGVtZUluY29tcGxldGUgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aGI3MjQxMDk3NmE4NWFkN2KHAmA8dW5pY29kZV9zZWdtZW50YXRpb246OmdyYXBoZW1lOjpHcmFwaGVtZUluY29tcGxldGUgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aGI3MjQxMDk3NmE4NWFkN2KIAmA8dW5pY29kZV9zZWdtZW50YXRpb246OmdyYXBoZW1lOjpHcmFwaGVtZUluY29tcGxldGUgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aGI3MjQxMDk3NmE4NWFkN2KJAjhhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46Omdyb3dfb25lOjpoM2NmODVmM2Q3NTI5ZDYxMooCNmNvbXBhY3Rfc3RyOjpyZXByOjpSZXByOjphc19tdXRfYnVmOjpoYzNmMWQ0NWM4NjMzMzY3YYsCSDxkbG1hbGxvYzo6c3lzOjpTeXN0ZW0gYXMgZGxtYWxsb2M6OkFsbG9jYXRvcj46OmFsbG9jOjpoNWUwZDI4YzAwOWU1ZDYyY4wCOnNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yOjp2aXNpdF9ieXRlX2J1Zjo6aDEyNzlhMTNiMzUyMDQ5NzSNAjpzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcjo6dmlzaXRfYnl0ZV9idWY6OmhhNmY2ODgzNmU2NzA1YzUyjgI5YWxsb2M6OnZlYzo6VmVjPFQsQT46OmludG9fYm94ZWRfc2xpY2U6OmhkNjA1OTQ3ZWIxODIyZTY4jwI4c2VyZGVfY29yZTo6ZGU6OkVycm9yOjppbnZhbGlkX2xlbmd0aDo6aDIyMGZlMDBkMjY0OWZhNTKQAj9zdGQ6OnN5czo6c3luYzo6b25jZTo6bm9fdGhyZWFkczo6T25jZTo6Y2FsbDo6aDU2NzZhMDk2NWRmNjE0ZWKRAhZfX2V4dGVybnJlZl9kcm9wX3NsaWNlkgJuPHNlcmRlOjpwcml2YXRlOjpkZTo6Y29udGVudDo6VGFnT3JDb250ZW50VmlzaXRvciBhcyBzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcj46OnZpc2l0X3N0cmluZzo6aGI5MjhhMTA0NTg5ZGQ0ZDaTAnA8c2VyZGU6OnByaXZhdGU6OmRlOjpjb250ZW50OjpUYWdPckNvbnRlbnRWaXNpdG9yIGFzIHNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yPjo6dmlzaXRfYnl0ZV9idWY6Omg5OTM4MjZmY2YzNmJkZWQylAJJcmF0YXR1aTo6YnVmZmVyOjpidWZmZXI6OkJ1ZmZlcjo6aW5kZXhfb2Y6Ont7Y2xvc3VyZX19OjpoNWUyZmZkYTUwMTI5NjJmNJUCKF9fcnVzdGNbNDQyNWE3ZTIwYjRjODYxOV06Ol9fcmRsX2RlYWxsb2OWAi5jb3JlOjpyZXN1bHQ6OnVud3JhcF9mYWlsZWQ6OmgwZjM1MzVlYTFhMjE4MTQzlwI4c2VyZGVfY29yZTo6ZGU6OlZpc2l0b3I6OnZpc2l0X3N0cmluZzo6aDVjNTFlZTEwMGE1ZjQ3ODGYAjpzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcjo6dmlzaXRfYnl0ZV9idWY6OmgxNzQ5YjNiOGJjZjYxMWZkmQI4c2VyZGVfY29yZTo6ZGU6OlZpc2l0b3I6OnZpc2l0X3N0cmluZzo6aDVjNTFlZTEwMGE1ZjQ3ODGaAjZzZXJkZV9jb3JlOjpkZTo6RXJyb3I6OmludmFsaWRfdHlwZTo6aGE3MjAyOGJlYWM5ZDVjNzebAjdzZXJkZV9jb3JlOjpkZTo6RXJyb3I6OmludmFsaWRfdmFsdWU6OmhjZjc4MzY4M2UzM2I2OGZjnAI2c2VyZGVfY29yZTo6ZGU6OkVycm9yOjppbnZhbGlkX3R5cGU6OmhkMzczZWU2MmUxYmUzYzE4nQJgPHNlcmRlOjpwcml2YXRlOjpkZTo6Y29udGVudDo6RXhwZWN0ZWRJbk1hcCBhcyBzZXJkZV9jb3JlOjpkZTo6RXhwZWN0ZWQ+OjpmbXQ6OmgwNjg2MTBkZWU1ZDg1MTExngJgPHNlcmRlOjpwcml2YXRlOjpkZTo6Y29udGVudDo6RXhwZWN0ZWRJblNlcSBhcyBzZXJkZV9jb3JlOjpkZTo6RXhwZWN0ZWQ+OjpmbXQ6OmhkYzcxNzg4MzlkMzZjMWE5nwJJPHJhdGF0dWk6OmxheW91dDo6cmVjdDo6UmVjdCBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoODAzNTIyNDcyZGRlODVhM6ACTmNvcmU6OmZtdDo6bnVtOjppbXA6OjxpbXBsIGNvcmU6OmZtdDo6RGlzcGxheSBmb3IgaTY0Pjo6Zm10OjpoNDY3NTk4NTVhMzA3MzIxOaECNmNvcmU6OnBhbmlja2luZzo6cGFuaWNfYm91bmRzX2NoZWNrOjpoNzU3OWVhZjcyNDM3YzY4ZKICN3NlcmRlX3dhc21fYmluZGdlbjo6ZGU6OmNvbnZlcnRfcGFpcjo6aDZkMjczYWVhYzE5YjI0NzCjAkk8YWxsb2M6OnN0cmluZzo6U3RyaW5nIGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9zdHI6OmgwMTZiM2U2MDQ4MjUzZDNjpAIGbWVtY21wpQJJPGFsbG9jOjpzdHJpbmc6OlN0cmluZyBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfc3RyOjpoMDE2YjNlNjA0ODI1M2QzY6YCSTxhbGxvYzo6c3RyaW5nOjpTdHJpbmcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX3N0cjo6aDAxNmIzZTYwNDgyNTNkM2OnAlA8c2VyZGVfd2FzbV9iaW5kZ2VuOjplcnJvcjo6RXJyb3IgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoZTNiMWM4YmYzYzI2YjRkNKgCVDxjb3JlOjpmbXQ6OmJ1aWxkZXJzOjpQYWRBZGFwdGVyIGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9jaGFyOjpoOGM0MzA4ZTVjMWExZWNlYakCN3NlcmRlX2NvcmU6OmRlOjpFcnJvcjo6bWlzc2luZ19maWVsZDo6aGIzNzhiOGU0Yzc0YzZkZmKqAjlzZXJkZV9jb3JlOjpkZTo6RXJyb3I6OmR1cGxpY2F0ZV9maWVsZDo6aDA2MjQwMDg4ZjM3YTYwNDSrAlY8anNfc3lzOjpBcnJheUl0ZXIgYXMgY29yZTo6aXRlcjo6dHJhaXRzOjppdGVyYXRvcjo6SXRlcmF0b3I+OjpuZXh0OjpoNGE0MTRkNDMzOTczZjNjMqwCNnJhdGF0dWk6OmJ1ZmZlcjo6Y2VsbDo6Q2VsbDo6c3ltYm9sOjpoYTk2M2VmYmFhZmIxN2ExM60COHN0ZDo6cGFuaWNraW5nOjpwYW5pY19jb3VudDo6aW5jcmVhc2U6OmhlYzQwZThlNGVlMzIzNDdlrgJOY29yZTo6Zm10OjpudW06OmltcDo6PGltcGwgY29yZTo6Zm10OjpEaXNwbGF5IGZvciB1MzI+OjpmbXQ6Omg3YWFhNmQ1MTBkMDQ0ZWE3rwJOY29yZTo6Zm10OjpudW06OmltcDo6PGltcGwgY29yZTo6Zm10OjpEaXNwbGF5IGZvciB1NjQ+OjpmbXQ6Omg1MmYyMmUyMzM2NmU0YTFmsAIPaW5pdF9wYW5pY19ob29rsQI4YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+Ojpncm93X29uZTo6aDAyNTJkZGJlYjZmNzc0MDKyAjhhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46Omdyb3dfb25lOjpoMmE4M2U1ZjZmZGE4NjgxM7MCOGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6Z3Jvd19vbmU6Omg5MzQ3MWRlMjY5N2NmNjM4tAI4YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+Ojpncm93X29uZTo6aDlhYjE4NjYzNmUyMzc0Yje1AjJ3YXNtX2JpbmRnZW46OmJpZ2ludF9nZXRfYXNfaTY0OjpoNGIyNDc0NmJhYjU0NGNkOLYCS2NvcmU6OmZtdDo6ZmxvYXQ6OjxpbXBsIGNvcmU6OmZtdDo6RGlzcGxheSBmb3IgZjY0Pjo6Zm10OjpoYTZjNTc5MmMzNDBkZWZiNbcCNnNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yOjp2aXNpdF9zb21lOjpoNDMxOGRjMjYzMjE4MmNlZLgCNnNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yOjp2aXNpdF9zb21lOjpoNTdkNzE2OTM1YjI1YmYyN7kCQHNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yOjp2aXNpdF9uZXd0eXBlX3N0cnVjdDo6aDE1MDgyNzI0NjQ4MTBkZDO6AkBzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcjo6dmlzaXRfbmV3dHlwZV9zdHJ1Y3Q6Omg5YTVjN2Q1YTMzMWVkN2FkuwJrPHNlcmRlOjpwcml2YXRlOjpkZTo6Y29udGVudDo6VGFnT3JDb250ZW50VmlzaXRvciBhcyBzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcj46OmV4cGVjdGluZzo6aGZmNzg1M2NiMDQ4MzBkNDi8AkJjb21wYWN0X3N0cjo6cmVwcjo6aGVhcDo6aW5saW5lX2NhcGFjaXR5OjphbGxvYzo6aDQ5ZTBiMjFhMjZhYzQwMjK9Ams8c3RkOjpwYW5pY2tpbmc6OnBhbmljX2hhbmRsZXI6OlN0YXRpY1N0clBheWxvYWQgYXMgY29yZTo6cGFuaWM6OlBhbmljUGF5bG9hZD46OnRha2VfYm94OjpoMTkxZjY5ZjE4NWZjYmJhOL4CLWNvcmU6OnBhbmlja2luZzo6cGFuaWNfZm10OjpoYjhiYWRiOWE5MzljY2Y3Yb8CLmNvcmU6Om9wdGlvbjo6ZXhwZWN0X2ZhaWxlZDo6aGI0NWQ2YzhlMDJmYTI4NTHAAhFfX3diaW5kZ2VuX21hbGxvY8ECMDwmVCBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoNmIzMTcwNzU0MWVjZWIyNcICMDwmVCBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoOGRkNTBjMGQ5ODAyZDU5NMMCNnNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yOjp2aXNpdF9zb21lOjpoYTAzNDUzOGI0OWE1NTUyY8QCQHNlcmRlX2NvcmU6OmRlOjpWaXNpdG9yOjp2aXNpdF9uZXd0eXBlX3N0cnVjdDo6aGU1NzdmZGUwZTQ5ZTQ0ZWPFAkg8YWxsb2M6OnZlYzo6VmVjPFQsQT4gYXMgY29yZTo6b3BzOjpkcm9wOjpEcm9wPjo6ZHJvcDo6aDc2MDI3OTliNmNhNGMyODLGAipqc19zeXM6OkpTT046OnN0cmluZ2lmeTo6aGFmY2JlNmZhZGJkNjkzYTnHAhlfX2V4dGVybnJlZl90YWJsZV9kZWFsbG9jyAJiPHN0ZDo6cGFuaWNraW5nOjpwYW5pY19oYW5kbGVyOjpGb3JtYXRTdHJpbmdQYXlsb2FkIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aGViNDYyNGNkMTYzMjZkMGHJAkNjb3JlOjpmbXQ6OkZvcm1hdHRlcjo6cGFkX2ludGVncmFsOjp3cml0ZV9wcmVmaXg6OmhiYWM3MjY1MDZjNDY1NDU2ygIxY29yZTo6cGFuaWNraW5nOjphc3NlcnRfZmFpbGVkOjpoODljZTYzNDkyYzQwMWFiYcsCEl9fd2JpbmRnZW5fcmVhbGxvY8wCR2NvcmU6OmZtdDo6bnVtOjo8aW1wbCBjb3JlOjpmbXQ6OkRlYnVnIGZvciB1MTY+OjpmbXQ6OmhiZWM3YzkzNmQ2ODVkMDM5zQJKPGNvcmU6Om9wczo6cmFuZ2U6OlJhbmdlPElkeD4gYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aDMyMWFlNzQwNjNlM2QxYjnOAk48c2VyZGVfd2FzbV9iaW5kZ2VuOjplcnJvcjo6RXJyb3IgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aDhiY2M5MDE4ZTQ2MGZiOWHPAkpzZXJkZV93YXNtX2JpbmRnZW46OmRlOjpEZXNlcmlhbGl6ZXI6OmFzX29iamVjdF9lbnRyaWVzOjpoYTUwY2QxNTkyMmExYWM2OdACNGNvbXBhY3Rfc3RyOjp1bndyYXBfd2l0aF9tc2dfZmFpbDo6aGM5MzMwMzY0ZGI1OTU1MTXRAjVjb3JlOjpjZWxsOjpwYW5pY19hbHJlYWR5X2JvcnJvd2VkOjpoN2I4MDRkMzA1ODIwN2JhYdICVHNlcmRlOjpwcml2YXRlOjpkZTo6Y29udGVudDo6Q29udGVudERlc2VyaWFsaXplcjxFPjo6aW52YWxpZF90eXBlOjpoZjMxMmM2YmIzYWZiZmEzZdMCWjxjb21wYWN0X3N0cjo6cmVwcjo6UmVwciBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpvdXRsaW5lZF9kcm9wOjpoZmUxODE3ZmE2NzBjYzk2YdQCLF9fcnVzdGNbNDQyNWE3ZTIwYjRjODYxOV06OnJ1c3RfYmVnaW5fdW53aW5k1QJ1Y29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGNvcmU6OnJlc3VsdDo6UmVzdWx0PCgpLGNvcmU6OmNlbGw6OkNlbGw8d2FzbV9iaW5kZ2VuOjpleHRlcm5yZWY6OlNsYWI+Pj46Omg1Nzc3ODEwZjNkM2YzZjNl1gJDY29tcGFjdF9zdHI6OnJlcHI6OlJlcHI6OmNhcGFjaXR5OjpoZWFwX2NhcGFjaXR5OjpoMTBmZjFjZTE4NmM2MzQyMtcCJ3N0ZDo6YWxsb2M6OnJ1c3Rfb29tOjpoN2E4ZDllYjZlNGExNTQ3N9gCP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTRfbXV0OjpoNzU0ZTEwYzZkMTcyNTgxZdkCP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoMDBjMzk3NTJlZDQ2NWFmMNoCP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoMmIyMTU4M2JhOWJmMjcyNNsCP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoNDBiNzk4ZWRmYjhlY2MzNdwCP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoNDBmZTUzMDNlMDQ3OTZlMd0CP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoNmI3MWY0MzZmOGUwYTkxNt4CP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoOGNiM2E3YTFlYjY1ZTA5ZN8CP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoZDgyNmUyMGU2NTRiOGQzMOACP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoZTJkMjA0MDgzOGE4YzE4ZOECX2NvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxzdGQ6OnBhbmlja2luZzo6cGFuaWNfaGFuZGxlcjo6Rm9ybWF0U3RyaW5nUGF5bG9hZD46OmgyNzdhZDZjMTkwYWFjNDAw4gI5aGFzaGJyb3duOjpyYXc6OkZhbGxpYmlsaXR5OjphbGxvY19lcnI6OmgyYzJiYzEyMzg0M2IwM2I24wI/d2FzbV9iaW5kZ2VuOjpjb252ZXJ0OjpjbG9zdXJlczo6aW52b2tlMl9tdXQ6Omg1OWE5NWRhMGM3MmM0MzE25AI0PGJvb2wgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoNGM5Y2M2MWNmZjFjMTYzZuUCP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTFfbXV0OjpoNThhMjhiMzk2NzdiOTY3MuYChwE8PHNlcmRlX2NvcmU6OmRlOjpXaXRoRGVjaW1hbFBvaW50IGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6TG9va0ZvckRlY2ltYWxQb2ludCBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfY2hhcjo6aDllYzY4ZTJhZmJiOTY1ZDnnAjRzdGQ6OmFsbG9jOjpydXN0X29vbTo6e3tjbG9zdXJlfX06OmhkMTNiY2M1MTk3MWExNzIx6AJBaGFzaGJyb3duOjpyYXc6OkZhbGxpYmlsaXR5OjpjYXBhY2l0eV9vdmVyZmxvdzo6aDhmNTA3YWJmYTEyOTIxMzbpAmc8JnNlcmRlX3dhc21fYmluZGdlbjo6c2VyOjpTZXJpYWxpemVyIGFzIHNlcmRlX2NvcmU6OnNlcjo6U2VyaWFsaXplcj46OnNlcmlhbGl6ZV9zZXE6OmhmMzEzMzFlOGQwZmFlN2U36gImanNfc3lzOjpBcnJheTo6aXRlcjo6aDVhMzJmZDE3ZTA2NDc3OTfrAkJjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8YWxsb2M6OnN0cmluZzo6U3RyaW5nPjo6aDUxNDRlMmMzYzA2MzM0ODTsAiZfX3J1c3RjWzQ0MjVhN2UyMGI0Yzg2MTldOjpfX3JkbF9hbGxvY+0CVmNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxjb3JlOjpvcHRpb246Ok9wdGlvbjxhbGxvYzo6dmVjOjpWZWM8dTg+Pj46Omg5NTNjNzcxOTEwNTQ5NWUx7gJCY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGFsbG9jOjpzdHJpbmc6OlN0cmluZz46OmhkOGJiMGQ5NjlkYzg0ZDM07wJCY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGFsbG9jOjpzdHJpbmc6OlN0cmluZz46OmhmOTMyNDdiNWY1ZGRiY2Zh8AIpX193Ymdfc2V0XzNmMWQwYjk4NGVkMjcyZWQgZXh0ZXJucmVmIHNoaW3xAipfX3diZ19jYWxsXzY3MmE0ZDIxNjM0ZDRhMjQgZXh0ZXJucmVmIHNoaW3yAilfX3diZ19nZXRfNjdiMmJhNjJmYzMwZGUxMiBleHRlcm5yZWYgc2hpbfMCHGVuZ2luZV9yZW5kZXIgZXh0ZXJucmVmIHNoaW30AmY8JnNlcmRlX3dhc21fYmluZGdlbjo6c2VyOjpTZXJpYWxpemVyIGFzIHNlcmRlX2NvcmU6OnNlcjo6U2VyaWFsaXplcj46OnNlcmlhbGl6ZV91ODo6aDYwMmJkNzZmMGI3N2ZhMGb1AjE8VCBhcyBjb3JlOjphbnk6OkFueT46OnR5cGVfaWQ6Omg2MTk3ZjBlYmNkZGMyN2Qx9gIxPFQgYXMgY29yZTo6YW55OjpBbnk+Ojp0eXBlX2lkOjpoYjA2OGU0ZTIwNjdjMTBkYfcCL2FsbG9jOjpyYXdfdmVjOjpoYW5kbGVfZXJyb3I6Omg0ZTJmMDhjMTVlODU3MTVj+AIpX193YmdfZ2V0X2I5YjkzMDQ3ZmUzY2Y0NWIgZXh0ZXJucmVmIHNoaW35Ak1jb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8c2VyZGVfd2FzbV9iaW5kZ2VuOjplcnJvcjo6RXJyb3I+OjpoMDk4ZmVhOGY2YjAwYmJhNfoCOWNvcmU6Om9wczo6ZnVuY3Rpb246OkZuT25jZTo6Y2FsbF9vbmNlOjpoMDBiZDBhYTRmMjk3YTRhZPsCKWNvcmU6OnBhbmlja2luZzo6cGFuaWM6OmgxOTgxNDI2MzExMjI1NmMw/AJEPGNvcmU6OmZtdDo6QXJndW1lbnRzIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aGUwNDNjMmEyZmEyOTU1OTn9AiRfX3diaW5kZ2VuX3N0cmluZ19uZXcgZXh0ZXJucmVmIHNoaW3+AiNfX3diaW5kZ2VuX2Vycm9yX25ldyBleHRlcm5yZWYgc2hpbf8CKV9fd2JnX25ld19hMTIwMDJhN2Y5MWM3NWJlIGV4dGVybnJlZiBzaGltgAMsX193YmdfYnVmZmVyXzYwOWNjM2VlZTUxZWQxNTggZXh0ZXJucmVmIHNoaW2BAytfX3diZ192YWx1ZV9jZDFmZmE3YjFhYjc5NGYxIGV4dGVybnJlZiBzaGltggMtX193YmdfZW50cmllc18zMjY1ZDQxNThiMzNlNWRjIGV4dGVybnJlZiBzaGltgwMqX193YmdfbmV4dF8yNWZlYWRmYzA5MTNmZWE5IGV4dGVybnJlZiBzaGlthAMqX193YmdfbmV4dF82NTc0ZTFhOGE2MmQxMDU1IGV4dGVybnJlZiBzaGlthQMvX193Ymdfc3RyaW5naWZ5X2Y3ZWQ2OTg3OTM1YjRhMjQgZXh0ZXJucmVmIHNoaW2GAw9fX3diaW5kZ2VuX2ZyZWWHAzI8JlQgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoM2QzYTFjM2M1YmNlMmNiNIgDMmNvcmU6OmZtdDo6Rm9ybWF0dGVyOjp3cml0ZV9zdHI6OmhlYmIyYjFlYmY4MGIwMjUziQMpX193YmluZGdlbl9iaWdpbnRfZnJvbV9pNjQgZXh0ZXJucmVmIHNoaW2KAylfX3diaW5kZ2VuX2JpZ2ludF9mcm9tX3U2NCBleHRlcm5yZWYgc2hpbYsDJF9fd2JpbmRnZW5fbnVtYmVyX25ldyBleHRlcm5yZWYgc2hpbYwDKV9fd2JnX3NldF8zNzgzNzAyM2YzZDc0MGU4IGV4dGVybnJlZiBzaGltjQMuY29yZTo6c3RyOjpzbGljZV9lcnJvcl9mYWlsOjpoNWUwNzMxNGM2N2NhNTI0Zo4DMDwmVCBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoYmI2NzM5MjY3ZTE3OTI2MY8DSTxjb3JlOjpmbXQ6OkZvcm1hdHRlciBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfY2hhcjo6aDJjOWE0MGY1ODcwZGFhYTiQAylfX3diZ19uZXdfNzhmZWIxMDhiNjQ3MjcxMyBleHRlcm5yZWYgc2hpbZEDKV9fd2JnX25ld180MDVlMjJmMzkwNTc2Y2UyIGV4dGVybnJlZiBzaGltkgMuX193YmdfaXRlcmF0b3JfOWEyNGM4OGRmODYwZGM2NSBleHRlcm5yZWYgc2hpbZMDKV9fd2JnX25ld184YTZmMjM4YTZlY2U4NmVhIGV4dGVybnJlZiBzaGltlAMgX193YmluZGdlbl9tZW1vcnkgZXh0ZXJucmVmIHNoaW2VAzc8VCBhcyBzZXJkZV9jb3JlOjpkZTo6RXhwZWN0ZWQ+OjpmbXQ6OmhmZmUyNDQ4NTAyNTA5ZGVjlgMyPCZUIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDg1YWM3MTNhM2EyYmM3MDeXAzI8JlQgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoZDY1MWUyMjdhYWVlYTQ0ZpgDKV9fcnVzdGNbNDQyNWE3ZTIwYjRjODYxOV06Ol9fcnVzdF9yZWFsbG9jmQMyPCZUIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDBlYmRlMmE3NmE3YmYwNTCaA0NzZXJkZV93YXNtX2JpbmRnZW46OmRlOjpEZXNlcmlhbGl6ZXI6OmlzX251bGxpc2g6OmhmODY5MmUyMDdkZDhiNmNmmwNqPCZzZXJkZV93YXNtX2JpbmRnZW46OnNlcjo6U2VyaWFsaXplciBhcyBzZXJkZV9jb3JlOjpzZXI6OlNlcmlhbGl6ZXI+OjpzZXJpYWxpemVfc3RydWN0OjpoYjJiN2M4ZmMzZDRkNWJhNZwDRTxhbGxvYzo6c3RyaW5nOjpTdHJpbmcgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoNmE1OTA4MjY2MDNkODM5N50DFF9fd2JpbmRnZW5fZXhuX3N0b3JlngMyPCZUIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDVhOTZlNWQ2MTBlMDIzM2GfAzA8JlQgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aGRiMDYwZDI0NTkwN2E0NWOgAzI8JlQgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoNDU0NDNlNGZjMWY5NGQwYqEDOjwmc3RyIGFzIHNlcmRlX2NvcmU6OmRlOjpFeHBlY3RlZD46OmZtdDo6aDQ4ODFhNGE5Y2M5ZjkwNzOiAzI8JlQgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoNjQwNDdhMDQyYjZlZWQ2NqMDMjwmVCBhcyBjb3JlOjpmbXQ6OkRpc3BsYXk+OjpmbXQ6Omg1OWRlYzhlOWI3Y2U1YTg3pAMyPCZUIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDQxNGQzMmJkNWJhYjY3NDalA188c3RkOjpwYW5pY2tpbmc6OnBhbmljX2hhbmRsZXI6OlN0YXRpY1N0clBheWxvYWQgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoYzA5ZTU0M2I3N2U0NWQ5NaYDZjxzdGQ6OnBhbmlja2luZzo6cGFuaWNfaGFuZGxlcjo6U3RhdGljU3RyUGF5bG9hZCBhcyBjb3JlOjpwYW5pYzo6UGFuaWNQYXlsb2FkPjo6Z2V0OjpoOWRmYjVhZjJkOWQ2OWE4ZKcDMjwmVCBhcyBjb3JlOjpmbXQ6OkRpc3BsYXk+OjpmbXQ6Omg2MDExZDFiNDBmZmE3ZmMyqAMbX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmqQMpX193Ymdfc2V0XzY1NTk1YmRkODY4YjMwMDkgZXh0ZXJucmVmIHNoaW2qAylfX3J1c3RjWzQ0MjVhN2UyMGI0Yzg2MTldOjpfX3J1c3RfZGVhbGxvY6sDQ3dlYl9zeXM6OmZlYXR1cmVzOjpnZW5fY29uc29sZTo6Y29uc29sZTo6ZXJyb3JfMjo6aGE3ZTk5Y2E0Y2NjOTIxYjesAzVzZXJkZV93YXNtX2JpbmRnZW46Ok9iamVjdEV4dDo6c2V0OjpoY2YzZDBmNzBjODI1YjNkMq0DW2pzX3N5czo6Xzo6PGltcGwgd2FzbV9iaW5kZ2VuOjpjYXN0OjpKc0Nhc3QgZm9yIGpzX3N5czo6TWFwPjo6aW5zdGFuY2VvZjo6aDJjOGQ1OThlN2IxM2I4MmWuA2Jqc19zeXM6Ol86OjxpbXBsIHdhc21fYmluZGdlbjo6Y2FzdDo6SnNDYXN0IGZvciBqc19zeXM6OlVpbnQ4QXJyYXk+OjppbnN0YW5jZW9mOjpoODNkZDNjZjIzMTEzNDcyN68DY2pzX3N5czo6Xzo6PGltcGwgd2FzbV9iaW5kZ2VuOjpjYXN0OjpKc0Nhc3QgZm9yIGpzX3N5czo6QXJyYXlCdWZmZXI+OjppbnN0YW5jZW9mOjpoZjY5NWUyZTUzNzkwNzk1OLADJWpzX3N5czo6QXJyYXk6OnNldDo6aDY1YTgxZTMyY2EwNGIzMjixAypqc19zeXM6OkFycmF5Ojppc19hcnJheTo6aDQ5OWFiYTc4NmEzYzFjNDSyAzJqc19zeXM6Ok51bWJlcjo6aXNfc2FmZV9pbnRlZ2VyOjpoM2MxN2Q1ODIxZTA1NTcyNrMDLmNvcmU6OmZtdDo6V3JpdGU6OndyaXRlX2ZtdDo6aDkwMDNmM2IzNjQ4YTNkMmK0Ay5jb3JlOjpmbXQ6OldyaXRlOjp3cml0ZV9mbXQ6Omg3NmM0ZTgxODI1MTZmZTEwtQNMPGR5biBzZXJkZV9jb3JlOjpkZTo6RXhwZWN0ZWQgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoOTA2ZjAzMzZkNjQ2ZWNhY7YDJV9fcnVzdGNbNDQyNWE3ZTIwYjRjODYxOV06OnJ1c3RfcGFuaWO3Ay5jb3JlOjpmbXQ6OldyaXRlOjp3cml0ZV9mbXQ6OmhjMTFlYjE2YzliZDAyNDA4uAMuY29yZTo6Zm10OjpXcml0ZTo6d3JpdGVfZm10OjpoNTBlYTlkZTBiYmY0NzY5Y7kDNGFsbG9jOjpyYXdfdmVjOjpjYXBhY2l0eV9vdmVyZmxvdzo6aGFlYjY1MmYyYjJmMDg2ZmK6AzA8JlQgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aGZlZWVkMzRmNGYyYzI2MDe7Ay5jb3JlOjpmbXQ6OldyaXRlOjp3cml0ZV9mbXQ6OmhhNmRkMzYzMGNkOWNjZTA5vANIY29yZTo6cGFuaWNraW5nOjpwYW5pY19jb25zdDo6cGFuaWNfY29uc3RfZGl2X2J5X3plcm86OmgwMDk5OTNiZmE5MTU0MzgyvQMuY29yZTo6b3B0aW9uOjp1bndyYXBfZmFpbGVkOjpoOGViYmE5OTc5OTE3NjM1OL4DHF9fd2JpbmRnZW5faW4gZXh0ZXJucmVmIHNoaW2/AyJfX3diaW5kZ2VuX2pzdmFsX2VxIGV4dGVybnJlZiBzaGltwAMrX193YmdfZXJyb3JfMTAwNGI4YzY0MDk3NDEzZiBleHRlcm5yZWYgc2hpbcEDKF9fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXEgZXh0ZXJucmVmIHNoaW3CAzc8VCBhcyBzZXJkZV9jb3JlOjpkZTo6RXhwZWN0ZWQ+OjpmbXQ6OmgxZGQ5MGFjMGJmNGRhYzMxwwM3PFQgYXMgc2VyZGVfY29yZTo6ZGU6OkV4cGVjdGVkPjo6Zm10OjpoNDIxNDExMTQ4ZjM4YWU3NcQDNzxUIGFzIHNlcmRlX2NvcmU6OmRlOjpFeHBlY3RlZD46OmZtdDo6aDU1OTUyMDJiMzc2ODk3MWPFAzc8VCBhcyBzZXJkZV9jb3JlOjpkZTo6RXhwZWN0ZWQ+OjpmbXQ6Omg1OWViMjViZGZkNzQzMDE2xgM3PFQgYXMgc2VyZGVfY29yZTo6ZGU6OkV4cGVjdGVkPjo6Zm10OjpoNjJmMTAwM2FhNGUwYTg0M8cDNzxUIGFzIHNlcmRlX2NvcmU6OmRlOjpFeHBlY3RlZD46OmZtdDo6aDY2ZWY4MDg1MTY4Mzk5ZGPIAzc8VCBhcyBzZXJkZV9jb3JlOjpkZTo6RXhwZWN0ZWQ+OjpmbXQ6OmhhODljOTIzMWViNTFmNjAzyQMwPCZUIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6OmgzNmE5NjFmMjEyODc5NjJlygMnX19ydXN0Y1s0NDI1YTdlMjBiNGM4NjE5XTo6X19ydXN0X2FsbG9jywMlanNfc3lzOjpBcnJheTo6Z2V0OjpoMWQxZjAwMjdjMTRlOGFiY8wDPjxjb3JlOjpmbXQ6OkVycm9yIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6OmgyNTAwOWQ0NGIxYjYzNzdhzQMxd2FzbV9iaW5kZ2VuOjpfX3J0Ojp0aHJvd19udWxsOjpoMjgxMDc1ZWRmODVjZmJkOc4DKndhc21fYmluZGdlbjo6dGhyb3dfc3RyOjpoYWJhOWRiZjM2M2FjNjFhM88DMndhc21fYmluZGdlbjo6X19ydDo6Ym9ycm93X2ZhaWw6OmgzZmNlZWUzMjU0ZDgxYzA40ANmPHNlcmRlOjpwcml2YXRlOjpkZTo6Y29udGVudDo6Q29udGVudFZpc2l0b3IgYXMgc2VyZGVfY29yZTo6ZGU6OlZpc2l0b3I+OjpleHBlY3Rpbmc6OmhmYTQyMjlhMTE4NDk0NmE10QM/c2VyZGVfY29yZTo6cHJpdmF0ZTo6c3RyaW5nOjpmcm9tX3V0ZjhfbG9zc3k6Omg0NDdmYTU3OWMyZjY1NDVi0gObATxzZXJkZV9jb3JlOjpkZTo6aW1wbHM6OjxpbXBsIHNlcmRlX2NvcmU6OmRlOjpEZXNlcmlhbGl6ZSBmb3IgdTE2Pjo6ZGVzZXJpYWxpemU6OlByaW1pdGl2ZVZpc2l0b3IgYXMgc2VyZGVfY29yZTo6ZGU6OlZpc2l0b3I+OjpleHBlY3Rpbmc6Omg4MTkwY2IyY2FiNzMzNmM50wNdPHNlcmRlX2NvcmU6OmRlOjppbXBsczo6Qm9vbFZpc2l0b3IgYXMgc2VyZGVfY29yZTo6ZGU6OlZpc2l0b3I+OjpleHBlY3Rpbmc6OmhjZTRjYWFiZjhhZDU5NDYw1ANfPHNlcmRlX2NvcmU6OmRlOjppbXBsczo6U3RyaW5nVmlzaXRvciBhcyBzZXJkZV9jb3JlOjpkZTo6VmlzaXRvcj46OmV4cGVjdGluZzo6aDgxNDliNzg1MzJkNGI1ZjfVA0k8Y29tcGFjdF9zdHI6OlJlc2VydmVFcnJvciBhcyBjb3JlOjpmbXQ6OkRpc3BsYXk+OjpmbXQ6Omg5MzhjZmM0MDVjZmE3NmZh1gNOPGNvcmU6OmFsbG9jOjpsYXlvdXQ6OkxheW91dEVycm9yIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6OmgyMjIwNTBlNjAwNWE5NDI21wM1X19ydXN0Y1s0NDI1YTdlMjBiNGM4NjE5XTo6X19ydXN0X2FsbG9jX2Vycm9yX2hhbmRsZXLYA2k8c3RkOjpwYW5pY2tpbmc6OnBhbmljX2hhbmRsZXI6OlN0YXRpY1N0clBheWxvYWQgYXMgY29yZTo6cGFuaWM6OlBhbmljUGF5bG9hZD46OmFzX3N0cjo6aDBlYzAwNTMxM2RjZWQ0ZDXZAzNhbGxvYzo6YWxsb2M6OmhhbmRsZV9hbGxvY19lcnJvcjo6aDZmMWYyY2JlYjU0MDUzMTfaAz48Y29yZTo6Zm10OjpFcnJvciBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoMjUwMDlkNDRiMWI2Mzc3YdsDMzxzdHIgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoMmMyNjQzMzIwYWYwYmJjNdwDSjxjb3JlOjpjZWxsOjpCb3Jyb3dNdXRFcnJvciBhcyBjb3JlOjpmbXQ6OkRpc3BsYXk+OjpmbXQ6OmhkNDMwMWE5MzVmMjdkYjVm3QMkX193YmluZGdlbl9udW1iZXJfZ2V0IGV4dGVybnJlZiBzaGlt3gMkX193YmluZGdlbl9zdHJpbmdfZ2V0IGV4dGVybnJlZiBzaGlt3wMsX193YmdfU3RyaW5nXzhmMGViMzlhNGE0YzJmNjYgZXh0ZXJucmVmIHNoaW3gAytfX3diZ19zdGFja18wZWQ3NWQ2ODU3NWIwZjNjIGV4dGVybnJlZiBzaGlt4QMrX193YmluZGdlbl9iaWdpbnRfZ2V0X2FzX2k2NCBleHRlcm5yZWYgc2hpbeIDJl9fd2JpbmRnZW5fZGVidWdfc3RyaW5nIGV4dGVybnJlZiBzaGlt4wM3PFQgYXMgc2VyZGVfY29yZTo6ZGU6OkV4cGVjdGVkPjo6Zm10OjpoODgxMzA4NWVjMTk2NDQ3M+QDNzxUIGFzIHNlcmRlX2NvcmU6OmRlOjpFeHBlY3RlZD46OmZtdDo6aGY4YWJjOGRlMWFkY2VjM2XlAzc8VCBhcyBzZXJkZV9jb3JlOjpkZTo6RXhwZWN0ZWQ+OjpmbXQ6OmgzZjQyY2FmOWUyMDM0Njk55gM3PFQgYXMgc2VyZGVfY29yZTo6ZGU6OkV4cGVjdGVkPjo6Zm10OjpoODcxZWM0ZTk1NWYyMzg0N+cDNzxUIGFzIHNlcmRlX2NvcmU6OmRlOjpFeHBlY3RlZD46OmZtdDo6aDkyZGYyYzQyZTJmMDUwZjDoAypqc19zeXM6OlVpbnQ4QXJyYXk6Om5ldzo6aDYxNGI1ODNlMWNjZDEzNWXpAypqc19zeXM6Ok9iamVjdDo6ZW50cmllczo6aGZhNTc1ODAxZjcyZDk3OTXqA0g8anNfc3lzOjpKc1N0cmluZyBhcyBjb3JlOjpjb252ZXJ0OjpGcm9tPCZzdHI+Pjo6ZnJvbTo6aGE5ZDNlZGY0MmIyZTU5ZDbrA0JzdGQ6OnN5czo6YmFja3RyYWNlOjpfX3J1c3RfZW5kX3Nob3J0X2JhY2t0cmFjZTo6aGM4Mjg3NTI5YTM5MTVhYTHsA0JzdGQ6OnN5czo6YmFja3RyYWNlOjpfX3J1c3RfZW5kX3Nob3J0X2JhY2t0cmFjZTo6aDM0MWNjY2E2NmYzMDkzZjPtAzdzdGQ6OmFsbG9jOjpkZWZhdWx0X2FsbG9jX2Vycm9yX2hvb2s6Omg2ZTBhNTNlOWQyZjNhYmFl7gNBc3RkOjpwYW5pY2tpbmc6OnBhbmljX2NvdW50Ojppc196ZXJvX3Nsb3dfcGF0aDo6aGRhZDY3MGM3NDNkMDI0Y2HvAzRjb3JlOjpwYW5pYzo6UGFuaWNQYXlsb2FkOjphc19zdHI6Omg0OGZiOWQ1Y2U0MGQzMjIy8AMlX193YmluZGdlbl9ib29sZWFuX2dldCBleHRlcm5yZWYgc2hpbfEDI19fd2JpbmRnZW5faXNfYmlnaW50IGV4dGVybnJlZiBzaGlt8gMjX193YmluZGdlbl9pc19vYmplY3QgZXh0ZXJucmVmIHNoaW3zAyxfX3diZ19sZW5ndGhfYTQ0NjE5M2RjMjJjMTJmOCBleHRlcm5yZWYgc2hpbfQDKl9fd2JnX2RvbmVfNzY5ZTVlZGU0YjMxYzY3YiBleHRlcm5yZWYgc2hpbfUDNF9fd2JnX2luc3RhbmNlb2ZfTWFwX2YzNDY5Y2UyMjQ0ZDI0MzAgZXh0ZXJucmVmIHNoaW32AztfX3diZ19pbnN0YW5jZW9mX1VpbnQ4QXJyYXlfMTcxNTZiY2YxMTgwODZhOSBleHRlcm5yZWYgc2hpbfcDPF9fd2JnX2luc3RhbmNlb2ZfQXJyYXlCdWZmZXJfZTE0NTg1NDMyZTM3MzdmYyBleHRlcm5yZWYgc2hpbfgDLF9fd2JnX2xlbmd0aF9lMmQyYTQ5MTMyYzFiMjU2IGV4dGVybnJlZiBzaGlt+QMtX193YmdfaXNBcnJheV9hMWVhYjdlMGQwNjczOTFiIGV4dGVybnJlZiBzaGlt+gMzX193YmdfaXNTYWZlSW50ZWdlcl8zNDNlMmJlZWVlY2UxYmIwIGV4dGVybnJlZiBzaGlt+wMlX193YmluZGdlbl9pc19mdW5jdGlvbiBleHRlcm5yZWYgc2hpbfwDMGNvcmU6Om9wczo6ZnVuY3Rpb246OkZuOjpjYWxsOjpoNmFjMDBjMDlhNjc4MDBkZP0DN2NvcmU6Om9wczo6ZnVuY3Rpb246OkZuTXV0OjpjYWxsX211dDo6aGNjNTMwNGFmNGMyYmUyNmL+A0hjb3JlOjpvcHM6OmZ1bmN0aW9uOjpGbk9uY2U6OmNhbGxfb25jZXt7dnRhYmxlLnNoaW19fTo6aDQ3ZmNmNzQxZDk3MDdkZTT/AxdfX2V4dGVybnJlZl90YWJsZV9hbGxvY4AELV9fcnVzdGNbNDQyNWE3ZTIwYjRjODYxOV06Ol9fcnVzdF9zdGFydF9wYW5pY4EEPl9fcnVzdGNbNDQyNWE3ZTIwYjRjODYxOV06Ol9fcnVzdF9ub19hbGxvY19zaGltX2lzX3Vuc3RhYmxlX3YyggQlanNfc3lzOjpBcnJheTo6bmV3OjpoMDc5ZmU5NmVkZGI1NjMzNIMEJmpzX3N5czo6T2JqZWN0OjpuZXc6Omg0NWRiYzdkYjY1MTU3Njg0hAQranNfc3lzOjpTeW1ib2w6Oml0ZXJhdG9yOjpoYWEzZDg0NmQyZjFkNDVjZIUEJ3dhc21fYmluZGdlbjo6bWVtb3J5OjpoNWFjMjI0NzMwNjNmMTkwYoYEJ19fcnVzdGNbNDQyNWE3ZTIwYjRjODYxOV06Ol9fcnVzdF9hYm9ydAcSAQAPX19zdGFja19wb2ludGVyCRECAAcucm9kYXRhAQUuZGF0YQB8CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS45NC4wICg0YTRlZjQ5M2UgMjAyNi0wMy0wMikGd2FscnVzBjAuMjMuMwx3YXNtLWJpbmRnZW4TMC4yLjEwMCAoMjQwNWVjMmI0KQCUAQ90YXJnZXRfZmVhdHVyZXMIKwtidWxrLW1lbW9yeSsPYnVsay1tZW1vcnktb3B0KxZjYWxsLWluZGlyZWN0LW92ZXJsb25nKwptdWx0aXZhbHVlKw9tdXRhYmxlLWdsb2JhbHMrE25vbnRyYXBwaW5nLWZwdG9pbnQrD3JlZmVyZW5jZS10eXBlcysIc2lnbi1leHQ=",import.meta.url));const Q=fI();(typeof A=="string"||typeof Request=="function"&&A instanceof Request||typeof URL=="function"&&A instanceof URL)&&(A=fetch(A));const{instance:g,module:I}=await pI(await A,Q);return JI(g,I)}var uI=NA("<div style=width:100%;display:flex;justify-content:center>"),mI=NA('<div style="position:fixed;background:#252526;border:1px solid #454545;box-shadow:0 2px 10px rgba(0,0,0,0.5);z-index:1000;padding:4px 0;min-width:150px">'),RI=NA("<div style=width:100%;height:100%;position:relative;background:#050505;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden><div tabindex=-1 style=width:100%;flex:1;position:relative;background:black;display:flex;flex-direction:column;overflow:hidden></div><div style=width:100%;margin-top:0px;overflow:hidden>"),UI=NA('<div style="padding:6px 12px;cursor:pointer;color:#cccccc;font-size:14px;font-family:sans-serif">');const iQ=".config/net-vim/init.ts",yg=`
export default {
  metadata: {
    name: "user-init",
    description: "User startup configuration"
  },
  setup: async (api) => {
    api.log("Custom init.ts loaded!");
    
    // Load built-in plugins from the virtual prelude if desired:
    const lineNumbers = await api.configFs.readFile(".config/net-vim/prelude/line-numbers.tsx");
    if (lineNumbers) {
      await api.loadPluginFromSource("line-numbers", lineNumbers);
    }
    
    const contextMenu = await api.configFs.readFile(".config/net-vim/prelude/context-menu.tsx");
    if (contextMenu) {
      await api.loadPluginFromSource("context-menu", contextMenu);
    }

    const tsLsp = await api.configFs.readFile(".config/net-vim/prelude/ts-lsp.tsx");
    if (tsLsp) {
      await api.loadPluginFromSource("ts-lsp", tsLsp);
    }

    const externalFs = await api.configFs.readFile(".config/net-vim/prelude/external-fs.tsx");
    if (externalFs) {
      await api.loadPluginFromSource("external-fs", externalFs);
    }

    const eruda = await api.configFs.readFile(".config/net-vim/prelude/eruda.tsx");
    if (eruda) {
      await api.loadPluginFromSource("eruda", eruda);
    }

    const markdownSyntax = await api.configFs.readFile(".config/net-vim/prelude/markdown-syntax.tsx");
    if (markdownSyntax) {
      await api.loadPluginFromSource("markdown-syntax", markdownSyntax);
    }

    const fuzzyFinder = await api.configFs.readFile(".config/net-vim/prelude/fuzzy-finder.tsx");
    if (fuzzyFinder) {
      await api.loadPluginFromSource("fuzzy-finder", fuzzyFinder);
    }

    const sshTerminal = await api.configFs.readFile(".config/net-vim/prelude/ssh-terminal.tsx");
    if (sshTerminal) {
      await api.loadPluginFromSource("ssh-terminal", sshTerminal);
    }
  }
};
`,LI=new Map([["x","number"],["y","number"],["width","number"],["height","number"]]),HI=new Map([["number",A=>Number.parseFloat(A)]]),[UQ,TQ]=eA({width:10,height:20});Sg=function(A){const[Q,g]=eA({width:80,height:24}),[I,C]=eA(!1),[B,i]=eA(!1),[E,a]=eA(!1),[F,y]=eA(null);let[w,X]=eA(!1);const[QA,iA]=eA({x:0,y:0}),[aA,cA]=eA({chars:new Uint8Array(1920),fgs:new Uint8Array(1920*3),bgs:new Uint8Array(1920*3)}),[m,r]=eA({buffer:[],cursor:{x:0,y:0},visualStart:null,topLine:0,leftCol:0,viewportHeight:22,viewportWidth:80,mode:"Normal",commandText:"",currentFilePath:null,isExplorer:!1,explorerPath:"",isReadOnly:!1,plugins:[],gutters:[],lineRenderers:[],contextMenuItems:[],completionItems:[],selectedCompletionIndex:0,hoverText:null,hoverPos:{x:0,y:0},hoverScrollOffset:0,statusMessage:null,commandCursorX:0,wrap:!1,lineEnding:"LF",picker:null});let e,s=null,c=A.engine||null,f=0,t={width:10,height:20},h=0,l=0;const V=()=>{if(!e)return;const n=UQ(),J=Math.max(10,Math.floor(e.clientWidth/n.width)),q=Math.max(5,Math.floor(e.clientHeight/n.height));if((J!==Q().width||q!==Q().height)&&(g({width:J,height:q}),s&&(s=new dg(J,q)),c)){const M=m().gutters.reduce((S,d)=>S+d.width,0);c.setViewportHeight(q-2),c.setViewportWidth(J-M),r(c.getState())}};Y(async()=>{(()=>{const n=window.matchMedia("(pointer: coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);C(n)})();try{await jQ();const n=()=>{c&&r(c.getState())},J=()=>{e?.focus()};A.engine?(c=A.engine,c.setUpdateCallback(n)):c=new zQ(n,J),await c.init(),A.ref&&A.ref(c),s=new dg(Q().width,Q().height),V();const q=c.getState().gutters.reduce((M,S)=>M+S.width,0);if(c.setViewportHeight(Q().height-2),c.setViewportWidth(Q().width-q),!c.getAPI().getLoadedPlugins().some(M=>M.name==="user-init"||M.name==="init.ts"))try{let M=await HA.readFile(iQ);!M&&A.autoCreateInit&&(console.log("[VimEditor] Auto-creating default init.ts at",iQ),await HA.writeFile(iQ,yg),M=await HA.readFile(iQ)),M&&await c.loadPluginFromSource("init.ts",M)}catch(M){console.error("Error loading init.ts:",M)}c.getAPI().registerCommand("crt",()=>{a(!E())}),c.getAPI().registerCommand("create-init",async()=>{await HA.writeFile(iQ,yg),console.log("Created default init.ts at",iQ)}),r(c.getState())}catch(n){console.error("Failed to initialize TUI engine:",n)}}),jA(()=>{const n=m(),J=Q(),q=n.gutters.reduce((d,W)=>d+W.width,0),M=Math.max(1,J.width-q),S=Math.max(1,J.height-2);c&&(n.viewportWidth!==M||n.viewportHeight!==S)&&(c.setViewportWidth(M),c.setViewportHeight(S))});const H={type:"Box",props:{x:0,y:0,width:Q().width,height:Q().height,__root:!0},children:[]};k(CI(()=>T(rI,{buffer:()=>m().buffer,cursor:()=>m().cursor,visualStart:()=>m().visualStart,topLine:()=>m().topLine,leftCol:()=>m().leftCol,mode:()=>m().mode,commandText:()=>m().commandText,commandCursorX:()=>m().commandCursorX,currentFilePath:()=>m().currentFilePath,isExplorer:()=>m().isExplorer,explorerPath:()=>m().explorerPath,isReadOnly:()=>m().isReadOnly,plugins:()=>m().plugins,gutters:()=>m().gutters,lineRenderers:()=>m().lineRenderers,completionItems:()=>m().completionItems,selectedCompletionIndex:()=>m().selectedCompletionIndex,hoverText:()=>m().hoverText,hoverPos:()=>m().hoverPos,hoverScrollOffset:()=>m().hoverScrollOffset,statusMessage:()=>m().statusMessage,wrap:()=>m().wrap,lineEnding:()=>m().lineEnding,picker:()=>m().picker,width:()=>Q().width,height:()=>Q().height,onCursorChange:n=>iA(n)}),H));const K=()=>{try{H.props.width=Q().width,H.props.height=Q().height;const n=M=>{if(!M)return[];let S="",d={},W=[];if(M instanceof Element){const $=M.localName;S=$==="box"?"Box":$==="text"?"Text":$.charAt(0).toUpperCase()+$.slice(1);for(let yA=0;yA<M.attributes.length;yA++){const SA=M.attributes[yA];let KA=SA.value,p=LI.get(SA.name);if(p!=null){let L=HI.get(p);L!=null&&(KA=L(KA))}d[SA.name]=KA}W=Array.from(M.childNodes)}else if(M instanceof Text)S="Text",d={content:M.textContent||""};else if(M.type&&!M.nodeType)S=M.type,d={...M.props},W=Array.isArray(M.children)?M.children:[];else if(typeof M=="function")try{return n(M())}catch{return[]}else return[];return["x","y","width","height"].forEach($=>{if(d[$]!==void 0){const yA=Number(d[$]);d[$]=isNaN(yA)?0:Math.max(0,Math.floor(yA))}}),d.border=d.border===!0||d.border==="true",d.clear_bg=d.clearBg!==void 0?d.clearBg===!0||d.clearBg==="true":d.clear_bg!==void 0?d.clear_bg===!0||d.clear_bg==="true":!0,d.content!==void 0&&(d.content=String(d.content??"")),d.title!==void 0&&(d.title=String(d.title??"")),d.color!==void 0&&(d.color=String(d.color)),d.bg_color!==void 0&&(d.bg_color=String(d.bg_color)),d.bgColor!==void 0&&(d.bg_color=String(d.bgColor)),[{type:S,props:d,children:W.flatMap(n)}]},J=n(H),q=J.length>0?J[0]:null;if(q&&s){const M=s.render(q);M&&cA({chars:new Uint8Array(M.chars),fgs:new Uint8Array(M.fgs),bgs:new Uint8Array(M.bgs)})}}catch(n){console.error("Error in TUI tick:",n)}};jA(()=>{m(),Q(),K()});const U=(n,J=!1)=>{const q={ESC:"Escape",TAB:"Tab","↑":"ArrowUp","↓":"ArrowDown","←":"ArrowLeft","→":"ArrowRight",PGUP:"PageUp",PGDN:"PageDown",HOME:"Home",END:"End",backspace:"Backspace",enter:"Enter"}[n]||n;c&&c.handleKey(q,J)};window.processKey=U;const oA=n=>{if(!I()&&(["Escape","Backspace","Enter","Tab","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","PageUp","PageDown","Insert","Delete","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"].includes(n.key)||n.ctrlKey||n.altKey||n.metaKey)){if(n.key==="F12"||n.ctrlKey&&(n.key==="r"||n.key==="R"||n.key==="i"||n.key==="I"))return;n.preventDefault(),U(n.key,n.ctrlKey)}},lA=n=>{I()||n.ctrlKey&&(n.key===" "||n.keyCode===32)&&(n.preventDefault(),n.stopPropagation(),U(" ",!0))},RA=n=>{I()||(n.preventDefault(),U(n.key,n.ctrlKey))},tQ=n=>{if(c){if(n.ctrlKey){n.preventDefault();const J=-n.deltaY>0?1.1:.9,q=UQ(),M=q.height/q.width,S=Math.max(5,Math.min(50,q.width*J)),d=S*M;TQ({width:S,height:d}),V();return}n.deltaY>0?U("e",!0):n.deltaY<0&&U("y",!0),n.preventDefault()}},wQ=n=>{B()&&i(!1)};let LQ=0;const HQ=n=>{if(n.touches.length===2){const q=n.touches[0].clientX-n.touches[1].clientX,M=n.touches[0].clientY-n.touches[1].clientY;f=Math.sqrt(q*q+M*M),t=UQ()}else n.touches.length===1&&(h=n.touches[0].clientY,l=0);const J=Date.now();J-LQ<300&&n.preventDefault(),LQ=J},XA=n=>{if(n.touches.length===2&&f>0){n.preventDefault();const J=n.touches[0].clientX-n.touches[1].clientX,q=n.touches[0].clientY-n.touches[1].clientY,M=Math.sqrt(J*J+q*q)/f,S=t.height/t.width,d=Math.max(5,Math.min(50,t.width*M)),W=d*S;TQ({width:d,height:W}),V()}else if(n.touches.length===1&&c){const J=n.touches[0].clientY,q=h-J;h=J,l+=q;const M=UQ().height;if(Math.abs(l)>=M){const S=Math.floor(Math.abs(l)/M);for(let d=0;d<S;d++)l>0?U("e",!0):U("y",!0);l%=M}n.preventDefault()}},hQ=n=>{n.touches.length<2&&(f=0),n.touches.length===0&&(l=0)};Y(()=>{const n=()=>{V()};if(jA(()=>{B(),V()}),e==null)return;e.addEventListener("keydown",oA),e.addEventListener("keypress",RA),e.addEventListener("wheel",tQ,{passive:!1}),e.addEventListener("resize",V),window.addEventListener("popstate",wQ),window.addEventListener("keydown",lA,!0),e.addEventListener("touchstart",HQ,{passive:!1}),e.addEventListener("touchmove",XA,{passive:!1}),e.addEventListener("touchend",hQ);let J=new ResizeObserver(()=>{n()});J.observe(e),k(()=>{J.unobserve(e),J.disconnect(),e.removeEventListener("keydown",oA),e.removeEventListener("keypress",RA),e.removeEventListener("wheel",tQ),e.removeEventListener("resize",V),window.removeEventListener("popstate",wQ),window.removeEventListener("keydown",lA,!0),e.removeEventListener("touchstart",HQ),e.removeEventListener("touchmove",XA),e.removeEventListener("touchend",hQ),delete window.processKey})});let lQ=0;const SQ=n=>{if(lQ=Date.now(),F()){y(null);return}if(!e||!c)return;const J=e.getBoundingClientRect(),q=n.clientX-J.left,M=n.clientY-J.top,S=Q();if(q>=0&&q<=J.width&&M>=0&&M<=J.height){const d=Math.floor(q/J.width*S.width),W=Math.floor(M/J.height*S.height);if(W<S.height-2){const $=m(),yA=$.gutters.reduce((p,L)=>p+L.width,0),SA=Math.max(1,S.width-yA),KA=d-yA;if($.wrap){let p=0;const L=$.buffer,BA=$.topLine;for(let gA=BA;gA<L.length;gA++){const D=L[gA],N=Math.max(1,Math.ceil((D?.length||0)/SA));if(p+N>W){const x=(W-p)*SA+KA;c.setCursor(Math.max(0,Math.min(x,D?.length||0)),gA);return}if(p+=N,p>=S.height-2)break}}else c.setCursor(Math.max(0,KA+$.leftCol),W+$.topLine)}}},XQ=n=>{const J=Date.now()-lQ;I()&&J<300&&(B()||(i(!0),window.history.pushState({keyboard:!0},"")))},VQ=n=>{if(n.preventDefault(),!e||!e.contains(n.target))return;const J=m();J.contextMenuItems&&J.contextMenuItems.length>0&&y({x:n.clientX,y:n.clientY,items:J.contextMenuItems})};return(()=>{var n=RI(),J=n.firstChild,q=J.nextSibling;n.$$contextmenu=VQ,n.$$pointerup=XQ,n.$$pointerdown=SQ,J.$$focusout=()=>X(!1),J.$$focusin=()=>X(!0);var M=e;return typeof M=="function"?Ig(M,J):e=J,dA(J,T(tg,{get chars(){return aA().chars},get fgs(){return aA().fgs},get bgs(){return aA().bgs},get width(){return Q().width},get height(){return Q().height},get showCursor(){return w()},get cursorX(){return QA().x},get cursorY(){return QA().y},get crtEnabled(){return E()},get showKeyboard(){return B()},onMeasure:S=>{console.log("Measured font size:",S),TQ(S),V()}})),dA(q,T(JA,{get when(){return I()},get children(){return T(JA,{get when(){return B()},get children(){var S=uI();return dA(S,T(yI,{onKeyPress:(d,W)=>{var $;return($=window.processKey)==null?void 0:$.call(window,d,W.ctrl)},onCollapse:()=>{var d;i(!1),(d=window.history.state)!=null&&d.keyboard&&window.history.back()}})),S}})}})),dA(n,T(JA,{get when(){return F()},get children(){var S=mI();return S.$$pointerdown=d=>d.stopPropagation(),dA(S,T(TA,{get each(){var d;return(d=F())==null?void 0:d.items},children:d=>(()=>{var W=UI();return W.$$click=()=>{d.action(),y(null)},W.$$mouseout=$=>$.currentTarget.style.background="transparent",W.$$mouseover=$=>$.currentTarget.style.background="#094771",dA(W,()=>d.label),W})()})),b(d=>{var W,$,yA=`${(W=F())==null?void 0:W.y}px`,SA=`${($=F())==null?void 0:$.x}px`;return yA!==d.e&&aQ(S,"top",d.e=yA),SA!==d.t&&aQ(S,"left",d.t=SA),d},{e:void 0,t:void 0}),S}}),null),n})()},gg(["pointerdown","pointerup","contextmenu","focusin","focusout","mouseover","mouseout","click"]);let cQ,Mg;cQ=".config/net-vim/init.ts",Mg=`
export default {
  metadata: {
    name: "user-init",
    description: "User startup configuration"
  },
  setup: async (api) => {
    api.log("Custom init.ts loaded!");
    
    // Load built-in plugins from the virtual prelude if desired:
    const lineNumbers = await api.configFs.readFile(".config/net-vim/prelude/line-numbers.tsx");
    if (lineNumbers) {
      await api.loadPluginFromSource("line-numbers", lineNumbers);
    }
    
    const contextMenu = await api.configFs.readFile(".config/net-vim/prelude/context-menu.tsx");
    if (contextMenu) {
      await api.loadPluginFromSource("context-menu", contextMenu);
    }

    const tsLsp = await api.configFs.readFile(".config/net-vim/prelude/ts-lsp.tsx");
    if (tsLsp) {
      await api.loadPluginFromSource("ts-lsp", tsLsp);
    }

    const externalFs = await api.configFs.readFile(".config/net-vim/prelude/external-fs.tsx");
    if (externalFs) {
      await api.loadPluginFromSource("external-fs", externalFs);
    }

    const eruda = await api.configFs.readFile(".config/net-vim/prelude/eruda.tsx");
    if (eruda) {
      await api.loadPluginFromSource("eruda", eruda);
    }

    const markdownSyntax = await api.configFs.readFile(".config/net-vim/prelude/markdown-syntax.tsx");
    if (markdownSyntax) {
      await api.loadPluginFromSource("markdown-syntax", markdownSyntax);
    }

    const fuzzyFinder = await api.configFs.readFile(".config/net-vim/prelude/fuzzy-finder.tsx");
    if (fuzzyFinder) {
      await api.loadPluginFromSource("fuzzy-finder", fuzzyFinder);
    }
  }
};
`,Zg=async function(A,Q={}){Q.fileSystem&&eI(Q.fileSystem),await jQ(Q.wasmUrl);const g=new zQ(()=>{},()=>{});await g.init();try{let C=await HA.readFile(cQ);!C&&Q.autoCreateInit&&(console.log("[init] Auto-creating default init.ts at",cQ),await HA.writeFile(cQ,Mg),C=await HA.readFile(cQ)),C&&await g.loadPluginFromSource("init.ts",C)}catch(C){console.error("[init] Error loading init.ts:",C)}const I=vg(()=>T(Sg,{engine:g}),A);return{vim:g,dispose:I}}})();const KI=`
// @ts-nocheck
/**
 * This is a Net-Vim plugin. It will be transpiled by Net-Vim's internal Babel
 * and injected with the correct 'h' and 'Fragment' functions for TUI rendering.
 */
export default {
  metadata: {
    name: 'shared-lsp-adapter',
    description: 'Bridges the apps shared LSP worker to Net-Vim'
  },
  setup: async (api: any) => {
    // Get the shared worker from the global scope
    const lspWorker = (window as any).__LSP_WORKER__;
    if (!lspWorker) {
      api.log('LSP-Adapter Error: Global __LSP_WORKER__ not found');
      return;
    }
    const worker = lspWorker.instance;
    if (typeof worker.ready === 'function') {
      await worker.ready();
    }

    let lints: any[] = [];
    let debounceTimer: any = null;
    const classificationsMap = new Map<string, any>();

    const getColorForClassification = (type: number) => {
      switch (type) {
        case 1: return '#6a9955'; // comment
        case 3: return '#569cd6'; // keyword
        case 4: return '#b5cea8'; // numericLiteral
        case 6: return '#ce9178'; // stringLiteral
        case 7: return '#d16969'; // regularExpressionLiteral
        case 10: return '#d4d4d4'; // punctuation
        case 11: // className
        case 12: // enumName
        case 13: // interfaceName
        case 14: // moduleName
        case 15: // typeParameterName
        case 16: return '#4ec9b0'; // typeAliasName
        case 2: // identifier
        case 17: // parameterName
        case 22: return '#9cdcfe'; // jsxAttribute
        case 18: return '#608b4e'; // docCommentTagName
        case 19: // jsxOpenTagName
        case 20: // jsxCloseTagName
        case 21: return '#569cd6'; // jsxSelfClosingTagName
        case 24: return '#ce9178'; // jsxAttributeStringLiteralValue
        case 25: return '#b5cea8'; // bigIntLiteral
        default: return '#ffffff';
      }
    };

    const updateClassifications = async (path: string, content: string) => {
      if (!path || !(path.endsWith('.ts') || path.endsWith('.tsx'))) return;
      const absolutePath = path.startsWith('/') ? path : '/' + path;
      try {
        const classifications = await worker.getClassifications(absolutePath, 0, content.length);
        if (classifications) {
          classificationsMap.set(absolutePath, classifications);
          api.rerender();
        }
      } catch (e) {
        api.log('LSP: Error updating classifications: ' + e.message);
      }
    };

    const updateLints = async (path: string) => {
      if (!path) return;
      const absolutePath = path.startsWith('/') ? path : '/' + path;
      try {
        lints = await worker.getLints({ path: absolutePath });
        api.rerender();
      } catch (e) {
        api.log('LSP: Error updating lints: ' + e.message);
      }
    };

    const getLintsForLine = (lineIdx: number) => {
      const buffer = api.getBuffer();
      let lineStart = 0;
      for (let i = 0; i < lineIdx; i++) lineStart += (buffer[i]?.length || 0) + 1;
      const lineEnd = lineStart + (buffer[lineIdx]?.length || 0);
      return lints.filter(l => {
        const lFrom = l.from ?? 0;
        const lTo = l.to ?? lFrom;
        return lFrom <= lineEnd && lTo >= lineStart;
      });
    };

    api.registerCommand('showDiagnostics', () => {
      const cursor = api.getCursor();
      const lineLints = getLintsForLine(cursor.y);
      if (lineLints.length > 0) {
        const messages = lineLints.map((l: any) => l.message).join('\\n');
        api.showHover(messages, cursor.x, cursor.y);
        setTimeout(() => api.hideHover(), 5000);
      }
    });

    api.registerCommand('hover', async () => {
      const path = api.getCurrentFilePath();
      if (!path) return;
      const cursor = api.getCursor();
      const bufferLines = api.getBuffer();
      let pos = 0;
      for (let i = 0; i < cursor.y; i++) {
        pos += (bufferLines[i]?.length || 0) + 1;
      }
      pos += cursor.x;
      
      const absolutePath = path.startsWith('/') ? path : '/' + path;
      const hover = await worker.getHover({ path: absolutePath, pos });
      if (hover && hover.quickInfo) {
        const content = hover.quickInfo.displayParts.map((p: any) => p.text).join('');
        api.showHover(content, cursor.x, cursor.y);
        setTimeout(() => api.hideHover(), 3000);
      }
    });

    api.registerGutter({
      name: 'lsp-lint',
      width: 2,
      priority: 50,
      render: ({ lineIndex }: any) => {
        const idx = typeof lineIndex === 'function' ? lineIndex() : lineIndex;
        const lineLints = getLintsForLine(idx);
        const hasError = lineLints.some((l: any) => l.severity === 'error');
        const hasWarning = lineLints.some((l: any) => l.severity === 'warning');

        if (hasError) return <tui-text content=" E" color="#ff0000" />;
        if (hasWarning) return <tui-text content=" W" color="#ffa500" />;
        return <tui-text content="  " />;
      }
    });

    api.registerLineRenderer({
      name: 'lsp-highlighter',
      priority: 10,
      render: ({ lineIndex, lineContent, leftCol, viewportWidth, currentFilePath, visualStart, mode, cursor }: any) => {
        const path = typeof currentFilePath === 'function' ? currentFilePath() : currentFilePath;
        if (!path || !(path.endsWith('.ts') || path.endsWith('.tsx'))) return null;

        const content = typeof lineContent === 'function' ? lineContent() : lineContent;
        const startCol = typeof leftCol === 'function' ? leftCol() : leftCol;
        const width = typeof viewportWidth === 'function' ? viewportWidth() : viewportWidth;
        const idx = typeof lineIndex === 'function' ? lineIndex() : lineIndex;

        const start = typeof visualStart === 'function' ? visualStart() : visualStart;
        const currentMode = typeof mode === 'function' ? mode() : mode;
        const currentCursor = typeof cursor === 'function' ? cursor() : cursor;

        let highlightStart = -1;
        let highlightEnd = -1;

        if (start && currentMode === 'Visual') {
          const minLine = Math.min(start.y, currentCursor.y);
          const maxLine = Math.max(start.y, currentCursor.y);

          if (idx >= minLine && idx <= maxLine) {
            if (minLine === maxLine) {
              highlightStart = Math.min(start.x, currentCursor.x);
              highlightEnd = Math.max(start.x, currentCursor.x) + 1;
            } else if (idx === minLine) {
              highlightStart = (start.y === minLine) ? start.x : currentCursor.x;
              highlightEnd = content.length;
            } else if (idx === maxLine) {
              highlightStart = 0;
              highlightEnd = (start.y === maxLine) ? start.x : currentCursor.x;
              highlightEnd += 1;
            } else {
              highlightStart = 0;
              highlightEnd = content.length;
            }
          }
        }

        const absolutePath = path.startsWith('/') ? path : '/' + path;
        const classifications = classificationsMap.get(absolutePath);
        
        const selectionColor = '#004b72';
        const tokens = [];

        const addToken = (x: number, tokenContent: string, color: string) => {
          for (let i = 0; i < tokenContent.length; i++) {
            const col = x + i;
            // Add startCol to handle horizontal scroll and word wrap
            const logicalCol = startCol + col;
            const isHighlighted = logicalCol >= highlightStart && logicalCol < highlightEnd;
            
            let j = i + 1;
            while (j < tokenContent.length) {
              const nextLogicalCol = startCol + x + j;
              const nextIsHighlighted = nextLogicalCol >= highlightStart && nextLogicalCol < highlightEnd;
              if (nextIsHighlighted !== isHighlighted) break;
              j++;
            }
            
            const part = tokenContent.slice(i, j);
            tokens.push({
              x: col,
              content: part,
              color,
              bg_color: isHighlighted ? selectionColor : undefined
            });
            i = j - 1;
          }
        };

        if (!classifications) {
          addToken(0, content.slice(startCol, startCol + width), '#ffffff');
          return tokens.map(t => <tui-text x={t.x} content={t.content} color={t.color} bg_color={t.bg_color} />);
        }

        const bufferLines = api.getBuffer();
        let lineStartOffset = 0;
        for (let i = 0; i < idx; i++) {
          lineStartOffset += (bufferLines[i]?.length || 0) + 1;
        }
        const lineEndOffset = lineStartOffset + content.length;

        const relevantSpans: any[] = [];
        const { syntactic, semantic } = classifications;

        const addSpans = (spans: number[], isSemantic: boolean) => {
          if (!spans) return;
          for (let i = 0; i < spans.length; i += 3) {
            const startOffset = spans[i];
            const length = spans[i + 1];
            const type = spans[i + 2];
            if (startOffset + length > lineStartOffset && startOffset < lineEndOffset) {
              relevantSpans.push({ start: startOffset, length, type, isSemantic });
            }
          }
        };

        addSpans(syntactic, false);
        addSpans(semantic, true);
        relevantSpans.sort((a, b) => a.start - b.start || b.length - a.length || (a.isSemantic ? -1 : 1));

        let currentPos = lineStartOffset;
        const visibleEndCol = startCol + width;

        for (const span of relevantSpans) {
          if (span.start < currentPos) continue;
          if (span.start > currentPos) {
            const gapStart = Math.max(startCol, currentPos - lineStartOffset);
            const gapEnd = Math.min(visibleEndCol, span.start - lineStartOffset);
            if (gapEnd > gapStart) {
              addToken(gapStart - startCol, content.slice(gapStart, gapEnd), '#ffffff');
            }
          }
          const spanStart = Math.max(startCol, span.start - lineStartOffset);
          const spanEnd = Math.min(visibleEndCol, span.start + span.length - lineStartOffset);
          if (spanEnd > spanStart) {
            addToken(spanStart - startCol, content.slice(spanStart, spanEnd), getColorForClassification(span.type));
          }
          currentPos = span.start + span.length;
        }

        if (currentPos < lineEndOffset) {
          const gapStart = Math.max(startCol, currentPos - lineStartOffset);
          const gapEnd = Math.min(visibleEndCol, content.length);
          if (gapEnd > gapStart) {
            addToken(gapStart - startCol, content.slice(gapStart, gapEnd), '#ffffff');
          }
        }

        return tokens.map(t => <tui-text x={t.x} content={t.content} color={t.color} bg_color={t.bg_color} />);
      }
    });

    // Completion
    let originalCompletions: any[] = [];
    let completionTriggerPos: { x: number, y: number } | null = null;

    const showFilteredCompletions = () => {
      if (!completionTriggerPos) return;
      const cursor = api.getCursor();
      if (cursor.y !== completionTriggerPos.y || cursor.x < completionTriggerPos.x) {
        api.hideCompletions();
        originalCompletions = [];
        completionTriggerPos = null;
        return;
      }
      const line = api.getBuffer()[cursor.y];
      const filterText = line.slice(completionTriggerPos.x, cursor.x).toLowerCase();
      const filtered = originalCompletions.filter(item => item.label.toLowerCase().includes(filterText));

      if (filtered.length > 0) {
        api.showCompletions(filtered.map(f => ({ label: f.label })), (item: any) => {
          const currentBuffer = api.getBuffer();
          const currentLine = currentBuffer[cursor.y];
          const newLine = currentLine.slice(0, completionTriggerPos.x) + item.label + currentLine.slice(cursor.x);
          currentBuffer[cursor.y] = newLine;
          api.setBuffer(currentBuffer);
          api.setCursor(completionTriggerPos.x + item.label.length, cursor.y);
          originalCompletions = [];
          completionTriggerPos = null;
        });
      } else {
        api.hideCompletions();
      }
    };

    const triggerCompletions = async () => {
      if (api.getMode() !== 'Insert') return;
      const cursor = api.getCursor();
      const bufferLines = api.getBuffer();
      const line = bufferLines[cursor.y] || "";
      const path = api.getCurrentFilePath();
      if (!path) return;
      let triggerX = cursor.x;
      if (line[cursor.x - 1] === '.') triggerX = cursor.x;
      else {
        while (triggerX > 0 && /[a-zA-Z0-9_$]/.test(line[triggerX - 1])) triggerX--;
      }
      let pos = 0;
      for (let i = 0; i < cursor.y; i++) pos += (bufferLines[i]?.length || 0) + 1;
      pos += cursor.x;
      const absolutePath = path.startsWith('/') ? path : '/' + path;
      const result = await worker.getAutocompletion({ path: absolutePath, context: { pos, explicit: true } });
      if (result && result.options && result.options.length > 0) {
        originalCompletions = result.options;
        completionTriggerPos = { x: triggerX, y: cursor.y };
        showFilteredCompletions();
      } else {
        api.hideCompletions();
        originalCompletions = [];
        completionTriggerPos = null;
      }
    };

    api.on('BufferLoaded', async (data: any) => {
      if (data.path.endsWith('.ts') || data.path.endsWith('.tsx')) {
        const absolutePath = data.path.startsWith('/') ? data.path : '/' + data.path;
        await worker.updateFile({ path: absolutePath, code: data.content });
        await updateLints(absolutePath);
        await updateClassifications(absolutePath, data.content);
      }
    });

    api.on('KeyDown', async (data: any) => {
      if (data.key === ' ' && data.ctrl) await triggerCompletions();
      if (data.key === 'Escape') {
        originalCompletions = [];
        completionTriggerPos = null;
        api.hideCompletions();
      }
    });

    api.on('TextChanged', async () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(async () => {
        const bufferLines = api.getBuffer();
        const path = api.getCurrentFilePath();
        if (path && (path.endsWith('.ts') || path.endsWith('.tsx'))) {
          const absolutePath = path.startsWith('/') ? path : '/' + path;
          await worker.updateFile({ path: absolutePath, code: bufferLines.join('\\n') });
          await updateLints(absolutePath);
          await updateClassifications(absolutePath, bufferLines.join('\\n'));
          if (api.getMode() === 'Insert') {
            const cursor = api.getCursor();
            const line = bufferLines[cursor.y];
            if (line && line[cursor.x - 1] === '.') await triggerCompletions();
            else if (completionTriggerPos) showFilteredCompletions();
          }
        }
      }, 300);
    });

    const initialPath = api.getCurrentFilePath();
    const initialContent = api.getBuffer().join('\\n');
    if (initialPath) {
      const absolutePath = initialPath.startsWith('/') ? initialPath : '/' + initialPath;
      await worker.updateFile({ path: absolutePath, code: initialContent });
      await updateLints(absolutePath);
      await updateClassifications(absolutePath, initialContent);
    }
  }
};
`;var WI=jI('<div class="h-full w-full overflow-hidden bg-black">');function vI(j){let VA;const[MA,NQ]=WQ(),[WA,kQ]=WQ(!1),[bA,PA]=WQ("opfs");let oQ,EA=!1,xA=null,tA=!1;const sA=new Map,YA=Y=>Y.replace(/^\/+/,""),gQ=Y=>new Promise(k=>{const R=YA(Y),O=sA.get(R);if(O){O.add(k);return}sA.set(R,new Set([k]))}),qA=Y=>{const k=YA(Y),R=sA.get(k);R&&(sA.delete(k),R.forEach(O=>O()))},eA=async(Y,k)=>{EA=!0;try{const R=gQ(k);Y.executeCommand(`e ${k}`),await R}finally{EA=!1}},b=()=>({readFile:async Y=>{if(Y.startsWith(".config/"))return null;try{const k=await navigator.storage.getDirectory(),R=Y.split("/").filter(nA=>nA.length>0);let O=k;for(let nA=0;nA<R.length-1;nA++)O=await O.getDirectoryHandle(R[nA]);return await(await(await O.getFileHandle(R[R.length-1])).getFile()).text()}catch{return null}},writeFile:async(Y,k)=>{if(!Y.startsWith(".config/"))try{const R=await navigator.storage.getDirectory(),O=Y.split("/").filter(OA=>OA.length>0);let _=R;for(let OA=0;OA<O.length-1;OA++)_=await _.getDirectoryHandle(O[OA],{create:!0});const nA=await(await _.getFileHandle(O[O.length-1],{create:!0})).createWritable();await nA.write(k),await nA.close()}catch(R){console.error("FS Write Error:",R)}},listDirectory:async Y=>{if(Y.startsWith(".config/"))return[];try{const k=await navigator.storage.getDirectory(),R=Y.split("/").filter(IA=>IA.length>0);let O=k;for(const IA of R)O=await O.getDirectoryHandle(IA);const _=[];for await(const[IA,nA]of O.entries())_.push(nA.kind==="directory"?`${IA}/`:IA);return _}catch{return[]}},isDirectory:async Y=>{if(Y===""||Y==="."||Y==="./")return!0;if(Y.startsWith(".config/"))return!1;try{const k=await navigator.storage.getDirectory(),R=Y.split("/").filter(_=>_.length>0);let O=k;for(const _ of R)O=await O.getDirectoryHandle(_);return!0}catch{return!1}}}),jA=Y=>({readFile:async k=>k.startsWith(".config/")?null:await Y.readFile(k),writeFile:async(k,R)=>{k.startsWith(".config/")||await Y.writeFile(k,R)},listDirectory:async k=>k.startsWith(".config/")?[]:await Y.listDirectory(k),isDirectory:async k=>k===""||k==="."||k==="./"?!0:k.startsWith(".config/")?!1:await Y.isDirectory(k)});OI(async()=>{if(!VA)return;const Y=!!j.bridgeFS;PA(Y?"bridge":"opfs");const k=Y?jA(j.bridgeFS):b(),{vim:R,dispose:O}=await Zg(VA,{fileSystem:k}),_=R.getAPI();NQ(_),oQ=O,_.on("BufferLoaded",IA=>{IA?.path&&qA(IA.path)});for(const[IA,nA]of Object.entries(eQ))!IA.includes("ts-lsp")&&(IA.endsWith(".ts")||IA.endsWith(".tsx"))&&await _.loadPluginFromSource(IA,nA);j.lspReady&&j.lspWorker&&await LA(_)&&await pA(_,j.fileName),j.fileName&&await eA(_,j.fileName),_.on("TextChanged",()=>{const IA=MA();if(EA||!IA)return;const nA=IA.getBuffer().join(`
`);j.onCodeChange(nA)})});const LA=async Y=>{if(!j.lspReady||!j.lspWorker||WA())return!1;if(xA)return xA;const k="lsp-adapter";window.__LSP_WORKER__=j.lspWorker,xA=(async()=>{const R=await Y.loadPluginFromSource(k,KI);return R&&kQ(!0),!!R})();try{return await xA}finally{xA=null}},pA=async(Y,k)=>{!k||tA||(tA=!0,await eA(Y,k))};return GQ(()=>{const Y=j.lspReady,k=j.lspWorker,R=MA();Y&&k&&R&&!WA()&&(async()=>{const O=R.getCurrentFilePath(),_=await LA(R),IA=O||j.fileName;_&&IA&&await pA(R,IA)})()}),GQ(()=>{const Y=j.fileName,k=MA();k&&Y&&k.getCurrentFilePath()!==Y&&eA(k,Y)}),GQ(()=>{const Y=j.lspTypesVersion?.(),k=MA(),R=j.lspWorker;if(Y&&k&&R&&WA()){const O=k.getCurrentFilePath();O&&(async()=>{const _=YA(O),nA=k.getBuffer().join(`
`);await R.instance.updateFile({path:_,code:nA}),await eA(k,O)})()}}),GQ(()=>{const Y=j.bridgeFS,k=MA();if(k&&j.fileName){const R=Y?"bridge":"opfs",O=bA();R!==O&&(PA(R),eA(k,j.fileName))}}),GQ(()=>{const Y=MA(),k=j.code;Y&&j.fileName&&Y.getCurrentFilePath()===j.fileName&&Y.getBuffer().join(`
`)!==k&&!EA&&eA(Y,j.fileName)}),xI(()=>{oQ?.()}),(()=>{var Y=WI(),k=VA;return typeof k=="function"?qI(k,Y):VA=Y,Y})()}export{vI as default};
