import{a as $,i as k,b as S,S as F,m as xe,e as ge,I as we,t as I}from"./index.d01bdad3.js";import{_ as be,B as te,r as Me,V as Ne,aD as Xe,l as G,b as V,O as Ce,J as ne,K as le,$ as ee,T as re,aC as oe,a2 as ke,Q as ae}from"./Component.dacedbe4.js";import{V as j,P as fe,r as Pe}from"./three_js_component_renderer.dec372bf.js";import{c as pe,F as Ye}from"./PropertiesForm.45a14da9.js";import{a as Q}from"./Vec3.ce1f4f7a.js";import{S as Se}from"./utils.0603f061.js";class se{constructor(e){this.top=0,this.array=new Float32Array(e)}write(e){this.array[this.top++]=e.x,this.array[this.top++]=e.y,this.array[this.top++]=e.z}}class Te{constructor(e){this.top=0,this.array=new Float32Array(e)}write(e){this.array[this.top++]=e.x,this.array[this.top++]=e.y}}class E{constructor(e){this.plane=null,this.front=null,this.back=null,this.polygons=[],e&&this.build(e)}clone(){const e=new E;return e.plane=this.plane&&this.plane.clone(),e.front=this.front&&this.front.clone(),e.back=this.back&&this.back.clone(),e.polygons=this.polygons.map(t=>t.clone()),e}invert(){for(let t=0;t<this.polygons.length;t++)this.polygons[t].flip();this.plane&&this.plane.flip(),this.front&&this.front.invert(),this.back&&this.back.invert();const e=this.front;this.front=this.back,this.back=e}clipPolygons(e){if(!this.plane)return e.slice();let t=new Array,o=new Array;for(let s=0;s<e.length;s++)this.plane.splitPolygon(e[s],t,o,t,o);return this.front&&(t=this.front.clipPolygons(t)),this.back?o=this.back.clipPolygons(o):o=[],t.concat(o)}clipTo(e){this.polygons=e.clipPolygons(this.polygons),this.front&&this.front.clipTo(e),this.back&&this.back.clipTo(e)}allPolygons(){let e=this.polygons.slice();return this.front&&(e=e.concat(this.front.allPolygons())),this.back&&(e=e.concat(this.back.allPolygons())),e}build(e){if(!e.length)return;this.plane||(this.plane=e[0].plane.clone());const t=[],o=[];for(let s=0;s<e.length;s++)this.plane.splitPolygon(e[s],this.polygons,this.polygons,t,o);t.length&&(this.front||(this.front=new E),this.front.build(t)),o.length&&(this.back||(this.back=new E),this.back.build(o))}}class ie{constructor(e,t,o,s){this.pos=new j().copy(e),this.normal=new j().copy(t),this.uv=new j().copy(o),this.uv.z=0,s&&(this.color=new j().copy(s))}clone(){return new ie(this.pos,this.normal,this.uv,this.color)}flip(){this.normal.negate()}interpolate(e,t){return new ie(this.pos.clone().lerp(e.pos,t),this.normal.clone().lerp(e.normal,t),this.uv.clone().lerp(e.uv,t),this.color&&e.color&&this.color.clone().lerp(e.color,t))}}class L{constructor(){this.polygons=new Array}static fromPolygons(e){const t=new L;return t.polygons=e,t}static fromGeometry(e,t){let o=[];const s=e.attributes.position,l=e.attributes.normal,y=e.attributes.uv,v=e.attributes.color,r=e.groups;let a;if(e.index)a=e.index.array;else{a=new Array(s.array.length/s.itemSize|0);for(let h=0;h<a.length;h++)a[h]=h}const i=a.length/3|0;o=new Array(i);for(let h=0,f=0,P=a.length;h<P;h+=3,f++){const b=new Array(3);for(let Y=0;Y<3;Y++){const z=a[h+Y],T=z*3,_=z*2,U=s.array[T],W=s.array[T+1],d=s.array[T+2],u=l.array[T],p=l.array[T+1],n=l.array[T+2],c=y?.array[_],g=y?.array[_+1];b[Y]=new ie(new j(U,W,d),new j(u,p,n),new j(c,g,0),v&&new j(v.array[_],v.array[_+1],v.array[_+2]))}if(t===void 0&&r&&r.length>0)for(const Y of r)h>=Y.start&&h<Y.start+Y.count&&(o[f]=new fe(b,Y.materialIndex));else o[f]=new fe(b,t)}return L.fromPolygons(o.filter(h=>!isNaN(h.plane.normal.x)))}static toGeometry(e,t){let o=0;const s=e.polygons;for(const P of s)o+=P.vertices.length-2;const l=new be,y=new se(o*3*3),v=new se(o*3*3),r=new Te(o*2*3);let a;const i=[],h=[];for(const P of s){const b=P.vertices,Y=b.length;P.shared!==void 0&&(i[P.shared]||(i[P.shared]=[])),Y&&b[0].color!==void 0&&(a||(a=new se(o*3*3)));for(let z=3;z<=Y;z++)(P.shared===void 0?h:i[P.shared]).push(y.top/3,y.top/3+1,y.top/3+2),y.write(b[0].pos),y.write(b[z-2].pos),y.write(b[z-1].pos),v.write(b[0].normal),v.write(b[z-2].normal),v.write(b[z-1].normal),r&&(r.write(b[0].uv),r.write(b[z-2].uv),r.write(b[z-1].uv)),a&&(a.write(b[0].color),a.write(b[z-2].color),a.write(b[z-1].color))}l.setAttribute("position",new te(y.array,3)),l.setAttribute("normal",new te(v.array,3)),r&&l.setAttribute("uv",new te(r.array,2)),a&&l.setAttribute("color",new te(a.array,3));for(let P=0;P<i.length;P++)i[P]===void 0&&(i[P]=[]);if(i.length){let P=[],b=0;for(let Y=0;Y<i.length;Y++)l.addGroup(b,i[Y].length,Y),b+=i[Y].length,P=P.concat(i[Y]);l.addGroup(b,h.length,i.length),P=P.concat(h),l.setIndex(P)}const f=new Me().copy(t).invert();return l.applyMatrix4(f),l.computeBoundingSphere(),l.computeBoundingBox(),l}static fromMesh(e,t){const o=L.fromGeometry(e.geometry,t),s=new Ne,l=new Xe;l.getNormalMatrix(e.matrix);for(let y=0;y<o.polygons.length;y++){const v=o.polygons[y];for(let r=0;r<v.vertices.length;r++){const a=v.vertices[r];a.pos.copy(s.copy(a.pos.toVector3()).applyMatrix4(e.matrix)),a.normal.copy(s.copy(a.normal.toVector3()).applyMatrix3(l))}}return o}static toMesh(e,t,o){const s=L.toGeometry(e,t),l=new G(s,o);return l.matrix.copy(t),l.matrix.decompose(l.position,l.quaternion,l.scale),l.rotation.setFromQuaternion(l.quaternion),l.updateMatrixWorld(),l.castShadow=l.receiveShadow=!0,l}static union(e,t){const o=L.fromMesh(e),s=L.fromMesh(t);return L.toMesh(o.union(s),e.matrix,e.material)}static subtract(e,t){const o=L.fromMesh(e),s=L.fromMesh(t);return L.toMesh(o.subtract(s),e.matrix,e.material)}static intersect(e,t){const o=L.fromMesh(e),s=L.fromMesh(t);return L.toMesh(o.intersect(s),e.matrix,e.material)}clone(){const e=new L;return e.polygons=this.polygons.map(t=>t.clone()).filter(t=>Number.isFinite(t.plane.w)),e}toPolygons(){return this.polygons}union(e){const t=new E(this.clone().polygons),o=new E(e.clone().polygons);return t.clipTo(o),o.clipTo(t),o.invert(),o.clipTo(t),o.invert(),t.build(o.allPolygons()),L.fromPolygons(t.allPolygons())}subtract(e){const t=new E(this.clone().polygons),o=new E(e.clone().polygons);return t.invert(),t.clipTo(o),o.clipTo(t),o.invert(),o.clipTo(t),o.invert(),t.build(o.allPolygons()),t.invert(),L.fromPolygons(t.allPolygons())}intersect(e){const t=new E(this.clone().polygons),o=new E(e.clone().polygons);return t.invert(),o.clipTo(t),o.invert(),t.clipTo(o),o.clipTo(t),t.build(o.allPolygons()),t.invert(),L.fromPolygons(t.allPolygons())}inverse(){const e=this.clone();for(const t of e.polygons)t.flip();return e}toMesh(e,t){return L.toMesh(this,e,t)}toGeometry(e){return L.toGeometry(this,e)}}function Fe(){let X=28,e=762,t=4,o=e/t,s=X,l=X,y=5,v=5,r=(o-2*s-2*y)/4,a=r,i=r,h=r,f=r,P=y,b=v,Y=s,z=l,T=[{x:0,y:X}],_=(U,W)=>{let d=T[T.length-1];T.push({x:d.x+U,y:d.y+W})};for(let U=0;U<t;++U)_(a,0),_(s,-l),_(i,0),_(y,y),_(h,0),_(P,-b),_(f,0),_(Y,z);return T}const ze=Fe();function _e(){let X=16,e=[],t=762,o=10,s=8;for(let l=0;l<o;++l){let y=t*l/o;for(let v=0;v<s;++v){let r=y+t/o*v/s,a=2*Math.PI*v/s,i=Math.sin(a);e.push({x:r,y:.5*(X+X*i)})}}return e}const Le=_e();function $e(){let X=27,e=7,t=4,o=14,s=6,l=4,y=27,v=7,r=14,a=20,i=[{x:0,y:0}],h=(b,Y)=>{let z=i[i.length-1];i.push({x:z.x+b,y:z.y+Y})},f=6;for(let b=0;b<f;++b)h(X,e),h(t,0),h(o,s),h(l,0),h(y,v),h(r,-a);let P=762/i[i.length-1].x;for(let b=0;b<i.length;++b)i[b].x*=P;return i}const Re=$e();function Ie(){let X=14,e=19,t=55,o=14,s=19,l=55,y=[{x:0,y:e}],v=(i,h)=>{let f=y[y.length-1];y.push({x:f.x+i,y:f.y+h})},r=4;for(let i=0;i<r;++i)v(X,-e),v(t,0),v(o,s),v(l,0);let a=762/y[y.length-1].x;for(let i=0;i<y.length;++i)y[i].x*=a;return y}const Ue=Ie();let ce;function mt(){if(ce!=null)return ce;let X=document.createElement("canvas"),e=128;X.width=e,X.height=1;let t=X.getContext("2d");if(t==null)return"";let o=1;for(var s=0;s<e;++s){let y=.762*s/e,v=2*Math.PI*o/.762,r=.03*v*Math.cos(v*y),a=1,h=-(r*a),f=a,P=Math.sqrt(h*h+f*f);h/=P,f/=P;let b=Math.round((h+1)/2*255);b<0&&(b=0),b>255&&(b=255);let Y=Math.round((f+1)/2*255);Y<0&&(Y=0),Y>255&&(Y=255),t.fillStyle="rgb("+b+", 0, "+Y+")",t.fillRect(s,0,1,1)}let l=X.toDataURL("img/png");return ce=l,l}let ue;function ht(){if(ue!=null)return ue;let X=28,o=762/4,s=X,l=5,y=(o-2*s-2*l)/4,v=y,r=y,a=y,i=y,h=l,f=s,P=document.createElement("canvas"),b=256;P.width=b,P.height=1;let Y=P.getContext("2d");if(Y==null)return"";let z=v+s+r+l+a+h+i+f,T=[v,s,r,l,a,h,i,f],_=[];{let x=0;for(let N of T)x+=N,_.push(x)}let U=x=>Math.round((x+1)/2*255),W=U(-Math.SQRT1_2),d=U(Math.SQRT1_2),u=0,p=U(1),n=U(Math.SQRT1_2),c=U(Math.SQRT1_2);for(let x=0;x<b;++x){let N=z*x/(b-1),M;for(let C=0;C<_.length;++C)if(N<_[C]){M=C;break}M==null&&(M=_.length-1);let m,w;switch(M){default:case 0:m=u,w=p;break;case 1:m=n,w=c;break;case 2:m=u,w=p;break;case 3:m=W,w=d;break;case 4:m=u,w=p;break;case 5:m=n,w=c;break;case 6:m=u,w=p;break;case 7:m=W,w=d;break}Y.fillStyle="rgb("+m+", 0, "+w+")",Y.fillRect(x,0,1,1)}let g=P.toDataURL("img/png");return ue=g,g}class O{constructor(e){this.ranges=e}static single(e,t){return new O([{from:e,to:t}])}static get empty(){return Ae}static get full(){return ye}invert(){if(this.ranges.length==0)return ye;let e=[];Number.isFinite(this.ranges[0].from)&&e.push({from:Number.NEGATIVE_INFINITY,to:this.ranges[0].from});for(let t=0;t<this.ranges.length-1;++t)e.push({from:this.ranges[t].to,to:this.ranges[t+1].from});return Number.isFinite(this.ranges[this.ranges.length-1].to)&&e.push({from:this.ranges[this.ranges.length-1].to,to:Number.POSITIVE_INFINITY}),new O(e)}union(e){let t=[...this.ranges];for(let o of e.ranges){let s=o.from,l=o.to;for(let y=t.length-1;y>=0;--y)t[y].from<=l&&t[y].to>=s&&(s=Math.min(s,t[y].from),l=Math.max(l,t[y].to),t.splice(y,1));t.push({from:s,to:l})}return t.sort((o,s)=>{let l=o.from-s.from;return l!=0?l:o.to-s.to}),new O(t)}intersect(e){return this.invert().union(e.invert()).invert()}subtract(e){return this.invert().union(e).invert()}}const Ae=new O([]),ye=new O([{from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY}]);class dt{constructor(e){let t=$(()=>{let d,u,p,n;for(let c of e.outline())(d==null||c.x<d)&&(d=c.x),(u==null||c.x>u)&&(u=c.x),(p==null||c.y<p)&&(p=c.y),(n==null||c.y>n)&&(n=c.y);if(!(d==null||u==null||p==null||n==null))return{minX:d,minY:p,maxX:u,maxY:n}}),o=$(()=>{if(e.bays==null)return;let d=e.bays(),u=[],p=0;for(let n of d){let c=p+n.baySize;u.push({...n,minX:p,maxX:c}),p=c}return u}),s;{let d={minY:void 0,maxY:void 0};s=(u,p)=>{let n,c;y(u,d),n=d.minY,c=d.maxY,y(p,d),(n==null||d.minY!=null&&d.minY<n)&&(n=d.minY),(c==null||d.maxY!=null&&d.maxY>c)&&(c=d.maxY);for(let m of e.outline())u<m.x&&m.x<p&&((n==null||m.y<n)&&(n=m.y),(c==null||m.y>c)&&(c=m.y));if(d.minY=void 0,d.maxY=void 0,n==null||c==null)return O.empty;let g=o();if(g==null)return O.single(n,c);let x=0;for(let m=0;m<g.length;++m){let w=g[m];if(u<w.maxX){x=m;break}}let N=g.length-1;for(let m=g.length-1;m>=0;--m){let w=g[m];if(p>w.minX){N=m;break}}let M=O.empty;for(let m=x;m<=N;++m){let w=g[m];switch(w.sheetedStyle.type){case"Fully Open":break;case"Fully Sheeted":return O.single(n,c);case"Upper Infill":M=M.union(O.single(w.sheetedStyle.fromHeight,c));break;case"Lower Infill":M=M.union(O.single(n,w.sheetedStyle.toHeight));break;case"Skirted":M=M.union(O.single(w.sheetedStyle.fromHeight,w.sheetedStyle.toHeight));break}}return M}}let l=$(()=>{let d=0;for(let p=0;p<e.outline().length;++p){let n=e.outline()[p],c=e.outline()[(p+1)%e.outline().length];d+=n.cross(c)}return Math.abs(.5*d)}),y=(d,u)=>{u.minY=void 0,u.maxY=void 0;let p=e.outline();for(let n=0;n<p.length;++n){let c=p[n],g=p[(n+1)%p.length],x=Math.min(c.x,g.x),N=Math.max(c.x,g.x);if(x<=d&&d<=N){let M=g.x-c.x,m=g.y-c.y,w=c.y+(d-c.x)*m/M;if(!Number.isFinite(w))continue;u.minY==null||u.maxY==null?(u.minY=w,u.maxY=w):(w<u.minY&&(u.minY=w),w>u.maxY&&(u.maxY=w))}}},v=(d,u)=>{u.minX=void 0,u.maxX=void 0;let p=e.outline();for(let n=0;n<p.length;++n){let c=p[n],g=p[(n+1)%p.length],x=Math.min(c.y,g.y),N=Math.max(c.y,g.y);if(x<=d&&d<=N){let M=g.x-c.x,m=g.y-c.y,w=c.x+(d-c.y)*M/m;if(!Number.isFinite(w))continue;u.minX==null||u.maxX==null?(u.minX=w,u.maxX=w):(w<u.minX&&(u.minX=w),w>u.maxX&&(u.maxX=w))}}},r=e.sheetingType??(()=>"Corrugated 0.42"),a=e.sheetingDirection??(()=>"Vertical"),i=e.startSheetingAtOppositeEnd??(()=>!1),h=e.sheetingLowPoly??(()=>!1),f=()=>{switch(r()){case"Long Line 305":return 305;default:return 762}},P=()=>{let d=[],u=t();if(u==null)return d;let p=u.minY,n={minX:void 0,maxX:void 0};for(;p<u.maxY;){let c,g;v(p,n),c=n.minX,g=n.maxX,v(p+f(),n),(c==null||n.minX!=null&&n.minX<c)&&(c=n.minX),(g==null||n.maxX!=null&&n.maxX>g)&&(g=n.maxX);for(let x of e.outline())p<x.y&&x.y<p+f()&&((c==null||x.x<c)&&(c=x.x),(g==null||x.x>g)&&(g=x.x));if(c!=null&&g!=null){let x=[{minX:c,maxX:g}],N=[],M=p,m=p+f();for(let w of e.openings()){let C=w.pos.x,R=w.pos.x+w.width,q=w.pos.y,B=w.pos.y+w.height;if(q<=M&&B>=m){for(let A of x)if(C<A.maxX&&R>A.minX){let Z=A.minX,D=C;Z<D&&N.push({minX:Z,maxX:D});let J=R,K=A.maxX;J<K&&N.push({minX:J,maxX:K})}else N.push(A);{let A=x;x=N,N=A,N.splice(0,N.length)}}}for(let w of x){let C=w.minX,R=w.maxX;d.push(new V({itemName:r,usage:e.usage,length:()=>R-C}))}}p+=f()}return d},b=()=>{let d=[],u=t();if(u==null)return d;let p=i(),n=p?u.maxX:u.minX;for(;p?n>u.minX:n<u.maxX;){let c=s(p?n-f():n,p?n:n+f());for(let g of c.ranges){let x=g.from,N=g.to,M=[{minY:x,maxY:N}],m=[],w=n,C=n+f();for(let R of e.openings()){let q=R.pos.x,B=R.pos.x+R.width,A=R.pos.y,Z=R.pos.y+R.height;if(q<w&&B>C){for(let D of M)if(A<D.maxY&&Z>D.minY){let J=D.minY,K=A;J<K&&m.push({minY:J,maxY:K});let he=Z,de=D.maxY;he<de&&m.push({minY:he,maxY:de})}else m.push(D);{let D=M;M=m,m=D,m.splice(0,m.length)}}}for(let R of M){let q=R.minY,B=R.maxY;d.push(new V({itemName:r,usage:e.usage,length:()=>B-q}))}}n+=p?-f():f()}return d},Y=$(()=>{switch(a()){case"Vertical":return b();case"Horizontal":return P()}}),z=()=>{switch(e.type()){default:case"Wall Sheeting":return"Tek Screw Hex W/seal 10x16 Colorbond";case"Roof Sheeting":return"50mm Multi Purpose Roof Screw Colorbond"}},T=$(()=>{let d=Math.round(l()*(200/(18e6/Math.cos(15*Math.PI/180))));return[new V({itemName:z,usage:e.usage,qty:()=>d})]}),_=$(()=>{let d=t();if(d==null)return;let u=[],p=762,n;switch(r()){case"Corrugated 0.42":n=Le;break;case"Supersaw":n=Re;break;case"Unirib":n=Ue;break;default:case"Steelclad 0.42":n=ze;break}switch(a()){case"Vertical":{let c=d.minX;for(u.push(n[0]);;){let g=!1;for(let x=1;x<n.length;++x){let N=n[x];if(c+N.x>=d.maxX){g=!0;break}u.push({x:c+N.x,y:N.y})}if(g)break;c+=p}break}case"Horizontal":{let c=d.minY;for(u.push(n[0]);;){let g=!1;for(let x=1;x<n.length;++x){let N=n[x];if(c+N.x>=d.maxY){g=!0;break}u.push({x:c+N.x,y:N.y})}if(g)break;c+=p}break}}return u});const U=new Ce({color:"#808080",polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});this.fullSheetedAreaMesh=$(()=>{let d=t();if(d==null)return;let u=d,p=g=>{let x=u,N=o();if(N!=null)for(let M of N)switch(M.sheetedStyle.type){case"Fully Sheeted":continue;case"Fully Open":{let m=new ee((M.baySize+.1)/1e3,1,(x.maxY-x.minY)/1e3);m.translate(.5*(M.minX+M.maxX)/1e3,0,.5*(x.minY+x.maxY)/1e3),g=L.subtract(g,new G(m));break}case"Upper Infill":continue;case"Lower Infill":{let m=new ee((M.baySize+.1)/1e3,1,(x.maxY-M.sheetedStyle.toHeight)/1e3);m.translate(.5*(M.minX+M.maxX)/1e3,0,.5*(M.sheetedStyle.toHeight+x.maxY)/1e3),g=L.subtract(g,new G(m));break}case"Skirted":continue}return g};if(h()||r()=="Long Line 305"||r()=="Flat"){let g=new ne,x=1/1e3;g.moveTo(e.outline()[0].x*x,e.outline()[0].y*x);for(let m=1;m<e.outline().length;++m)g.lineTo(e.outline()[m].x*x,e.outline()[m].y*x);g.closePath();let N=new le(g,{depth:2*x,bevelEnabled:!1});N.rotateX(90*Math.PI/180);let M=new G(N,U);for(let m of e.openings()){let w=new ee(m.width/1e3,1,m.height/1e3);w.translate(m.pos.x/1e3+.5*(m.width/1e3),0,m.pos.y/1e3+.5*(m.height/1e3)),M=L.subtract(M,new G(w))}return M=p(M),M}let n=_();if(n==null)return;let c;switch(a()){case"Vertical":{let g=u.maxY-u.minY,x=3,N=new ne;N.moveTo(n[0].x/1e3,n[0].y/1e3);for(let C=1;C<n.length;++C)N.lineTo(n[C].x/1e3,n[C].y/1e3);for(let C=n.length-1;C>=0;--C)N.lineTo(n[C].x/1e3,(n[C].y+x)/1e3);N.closePath();let M=new le(N,{depth:g/1e3,bevelEnabled:!1});M.translate(0,x/1e3,-g/1e3),M.rotateX(Math.PI);let m=M.attributes.position,w={minY:void 0,maxY:void 0};for(let C=0;C<m.count;++C){let R=m.getX(C),q=m.getZ(C);y(R*1e3,w);let B=w.minY,A=w.maxY;Math.abs(q)<.001&&B!=null&&m.setZ(C,B/1e3),Math.abs(q-g/1e3)<.001&&A!=null&&m.setZ(C,A/1e3)}c=new G(M,U);break}case"Horizontal":{let g=u.maxX-u.minX,x=3,N=new ne;N.moveTo(n[0].x/1e3,n[0].y/1e3);for(let C=1;C<n.length;++C)N.lineTo(n[C].x/1e3,n[C].y/1e3);for(let C=n.length-1;C>=0;--C)N.lineTo(n[C].x/1e3,(n[C].y+x)/1e3);N.closePath();let M=new le(N,{depth:g/1e3,bevelEnabled:!1});M.rotateX(Math.PI),M.rotateY(-.5*Math.PI);let m=M.attributes.position,w={minX:void 0,maxX:void 0};for(let C=0;C<m.count;++C){let R=m.getX(C),q=m.getZ(C);v(q*1e3,w);let B=w.minX,A=w.maxX;Math.abs(R)<.001&&B!=null&&m.setX(C,B/1e3),Math.abs(R-g/1e3)<.001&&A!=null&&m.setX(C,A/1e3)}c=new G(M,U);break}}for(let g of e.openings()){let x=new ee(g.width/1e3,1,g.height/1e3);x.translate(g.pos.x/1e3+.5*(g.width/1e3),0,g.pos.y/1e3+.5*(g.height/1e3)),c=L.subtract(c,new G(x))}return c=p(c),c});let W=$(()=>{let d=this.fullSheetedAreaMesh();if(d==null)return new G;let u=e.previewOpening();if(u==null)return d;let p=new ee(u.width/1e3,1,u.height/1e3);return p.translate(u.pos.x/1e3+.5*(u.width/1e3),0,u.pos.y/1e3+.5*(u.height/1e3)),L.subtract(d,new G(p))});this.components=$(()=>[new V({transform:()=>re.identity,layers:()=>[oe.Cladding],mkObject3d:()=>{let d=W(),u=e.colour(),p;pe[u]!=null&&(p=new ke({color:pe[u].colourHex,...h()&&e.textures!=null?{normalMap:r().indexOf("Corrugated")!=-1?a()=="Vertical"?e.textures().corroNormalMap:e.textures().horizontalCorroNormalMap:a()=="Vertical"?e.textures().steelCladNormalMap:e.textures().horizontalSteelCladNormalMap}:{},metalness:.1,roughness:.5,reflectivity:.8}));let n=p??d.material;return()=>{let c=new G(d.geometry,n);return c.castShadow=!0,c}},colour:e.colour}),...Y(),...T()])}}class gt{constructor(e){let t=$(()=>[new V({itemName:()=>"Quad Gutter 0.42 125mm Slotted",layers:()=>[oe.Cladding],transform:()=>re.create(Q.create(e.length(),-30,0),ae.fromWU(Q.unitZ,Q.negUnitX)),length:e.length,flashingProfile:()=>Pe,colour:$(()=>e.colour?.call(e.colour)??"Basalt")})]),o=$(()=>{let l=$(()=>new Ye({width:98,thickness:5}));return[new V({itemName:()=>"Quad Stop End Left Colorbond",layers:$(()=>[oe.Cladding]),qty:()=>1,usage:()=>"Gutter",length:()=>160,flatProperties:l,colour:$(()=>e.colour?.call(e.colour)??"Basalt"),transform:$(()=>re.create(Q.create(0,0,0),ae.fromWU(Q.unitX,Q.negUnitY)))}),new V({itemName:()=>"Quad Stop End Right Colorbond",layers:$(()=>[oe.Cladding]),qty:()=>1,usage:()=>"Gutter",length:()=>160,flatProperties:l,colour:$(()=>e.colour?.call(e.colour)??"Basalt"),transform:$(()=>re.create(Q.create(e.length(),0,0),ae.fromWU(Q.unitX,Q.negUnitY)))})]}),s=$(()=>{let l=Math.ceil(e.length()/1e3)+1;return[new V({itemName:()=>"Quad Bkt Internal",qty:()=>l,usage:()=>"Gutter"}),new V({itemName:()=>"Quad Gutter Overstraps",qty:()=>l,usage:()=>"Gutter"})]});this.components=$(()=>[...t(),...o(),...s()])}}const ft=`void main() {
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
}`,pt=`precision mediump float;
      
uniform vec2 resolution;
uniform float screenDistance;
uniform vec3 cameraLocation;
uniform vec3 cameraForward;
uniform vec3 cameraUp;

varying lowp vec4 vColor;

void calculateRay(out vec3 ro, out vec3 rd) {
    vec3 up = normalize(cameraUp);
    vec3 forward = normalize(cameraForward);
    vec3 right = cross(cameraForward, cameraUp);
    rd.x = (gl_FragCoord.x - resolution.x * 0.5) * right.x;
    rd.x += (gl_FragCoord.y - resolution.y * 0.5) * up.x;
    rd.x += screenDistance * forward.x;
    rd.y = (gl_FragCoord.x - resolution.x * 0.5) * right.y;
    rd.y += (gl_FragCoord.y - resolution.y * 0.5) * up.y;
    rd.y += screenDistance * forward.y;
    rd.z = (gl_FragCoord.x - resolution.x * 0.5) * right.z;
    rd.z += (gl_FragCoord.y - resolution.y * 0.5) * up.z;
    rd.z += screenDistance * forward.z;
    rd = normalize(rd);
    ro = cameraLocation;
}

void main(void) {
    vec3 skyColour = vec3(0.3, 0.4, 0.6);
    vec3 horizSkyColour = vec3(0.5, 0.5, 0.6);
    vec3 groundColour = vec3(0.4, 0.6, 0.4);
    vec3 c;
    vec3 ro, rd;
    calculateRay(ro,rd);
    if (ro.z < 0.0) {
        c = skyColour;
    } else {
        if (rd.z > 0.03) {
            c = skyColour;
        } else if (rd.z > 0.0) {
            c = horizSkyColour * (0.03 - rd.z)/0.03 + skyColour * rd.z/0.03;
        } else {
            c = groundColour;
        }
    }
    gl_FragColor = vec4(c, 1.0);
}
`,yt=`precision mediump float;
      
uniform vec2 resolution;
uniform float screenDistance;
uniform vec3 cameraLocation;
uniform vec3 cameraForward;
uniform vec3 cameraUp;
uniform float depthRangeNear;
uniform float depthRangeFar;

varying lowp vec4 vColor;

void calculateRay(out vec3 ro, out vec3 rd) {
    vec3 up = normalize(cameraUp);
    vec3 forward = normalize(cameraForward);
    vec3 right = cross(cameraForward, cameraUp);
    rd.x = (gl_FragCoord.x - resolution.x * 0.5) * right.x;
    rd.x += (gl_FragCoord.y - resolution.y * 0.5) * up.x;
    rd.x += screenDistance * forward.x;
    rd.y = (gl_FragCoord.x - resolution.x * 0.5) * right.y;
    rd.y += (gl_FragCoord.y - resolution.y * 0.5) * up.y;
    rd.y += screenDistance * forward.y;
    rd.z = (gl_FragCoord.x - resolution.x * 0.5) * right.z;
    rd.z += (gl_FragCoord.y - resolution.y * 0.5) * up.z;
    rd.z += screenDistance * forward.z;
    rd = normalize(rd);
    ro = cameraLocation;
}

float getGrid(float size, vec3 ro, vec3 rd) {
    vec2 r = (ro + (rd * (-ro.z / rd.z))).xy;
    vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
    float line = min(grid.x, grid.y);
    return 1.0 - min(line, 1.0);
}

float ecToFragDepth(float z, float near, float far) {
    return far / (far - near) + ((far * near / (near - far)) / z);
}

void main(void) {
    vec3 skyColour = vec3(0.3, 0.4, 0.6);
    vec3 horizSkyColour = vec3(0.5, 0.5, 0.6);
    vec3 groundColour = vec3(0.4, 0.6, 0.4);
    vec3 gridColour = vec3(0.3, 0.3, 0.3);
    vec3 c;
    vec3 ro, rd;
    calculateRay(ro,rd);
    float a = 1.0;
    if (ro.z < 0.0) {
        c = skyColour;
    } else {
        if (rd.z > 0.03) {
            c = skyColour;
        } else if (rd.z > 0.0) {
            c = horizSkyColour * (0.03 - rd.z)/0.03 + skyColour * rd.z/0.03;
        } else {
            float d = 1.0 - min(ro.z / 8000.0, 1.0);
            float g1 = getGrid(1.0f, ro, rd);
            float g2 = getGrid(10.0f, ro, rd);
            vec4 fc = vec4(vec3(1.0f), mix(g2, g1, g1) * pow(d, 3.0));
            float fca = mix(0.5 * fc.a, fc.a, g2);
            if (fca <= 0.0) {
                c = groundColour;
            } else {
                c = mix(groundColour, gridColour, fca);
            }
            a = 0.9;
        }
    }
    gl_FragColor = vec4(c, a);
    /*
    if (ro.z > 0.001 && rd.z < -0.001) {
        float t = -ro.z / rd.z;
        vec3 p = rd * t;
        float depth = dot(normalize(cameraForward), p);
        gl_FragDepth = clamp(ecToFragDepth(depth, depthRangeNear, depthRangeFar), 0.0, 1.0);
    } else {
        gl_FragDepth = 1.0;
    }
    */
}
`,vt=`precision mediump float;
      
uniform vec2 resolution;
uniform float scale;
uniform vec3 cameraLocation;
uniform vec3 cameraForward;
uniform vec3 cameraUp;

varying lowp vec4 vColor;

void calculateRay(out vec3 ro, out vec3 rd) {
    vec3 up = normalize(cameraUp);
    vec3 forward = normalize(cameraForward);
    vec3 right = cross(cameraForward, cameraUp);
    rd = forward;
    ro.x = (gl_FragCoord.x - resolution.x * 0.5) * right.x;
    ro.x += (gl_FragCoord.y - resolution.y * 0.5) * up.x;
    ro.y = (gl_FragCoord.x - resolution.x * 0.5) * right.y;
    ro.y += (gl_FragCoord.y - resolution.y * 0.5) * up.y;
    ro.z = (gl_FragCoord.x - resolution.x * 0.5) * right.z;
    ro.z += (gl_FragCoord.y - resolution.y * 0.5) * up.z;
    ro *= scale;
    ro += cameraLocation;
}

float getGrid(float size, vec3 ro, vec3 rd) {
    vec2 r = (ro + (rd * (-ro.z / rd.z))).xy;
    vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
    float line = min(grid.x, grid.y);
    return 1.0 - min(line, 1.0);
}

void main(void) {
    vec3 gridColour = vec3(0.3, 0.3, 0.3);
    vec3 c;
    vec3 ro, rd;
    calculateRay(ro,rd);
    float d = 1.0 - min(ro.z / 8000.0, 1.0);
    float g1 = getGrid(1.0f, ro, rd);
    float g2 = getGrid(10.0f, ro, rd);
    vec4 fc = vec4(vec3(1.0f), mix(g2, g1, g1) * pow(d, 3.0));
    float fca = mix(0.5 * fc.a, fc.a, g2);
    if (fca <= 0.0) {
        discard;
    } else {
        gl_FragColor = vec4(gridColour, fca);
    }
}
`;function ve(X){switch(X.unit){case"/ea":return X.cost_per_unit==null?void 0:(X.quantity??1)*X.cost_per_unit;case"/m":return X.length==null||X.cost_per_unit==null?void 0:(X.quantity??1)*(X.length/1e3)*X.cost_per_unit;default:return}}function xt(X){let e=0;for(let t of X){let o=ve(t);o!=null&&(o=Math.round(o*100),e+=o)}return e/=100,e}const He=I("<th>Order Code</th>"),Oe=I("<th>Qty</th>"),Be=I("<th>Length</th>"),Ge=I("<th>Supplier</th>"),qe=I("<th>Description</th>"),De=I("<th>Usage</th>"),Ee=I("<th>Piece Mark</th>"),Ve=I("<th>Specifications</th>"),Qe=I("<th>Notes</th>"),We=I("<th>User Notes To Supplier</th>"),je=I("<th>Weight</th>"),Ze=I("<th>Cost Per Unit</th>"),Je=I("<th>Unit</th>"),Ke=I("<th>Total Cost</th>"),et=I('<div style="flex-grow: 1; overflow-y: scroll; display: flex; flex-direction: column;"><table><thead><tr></tr></thead><tbody></tbody></table></div>'),H=I("<td></td>"),tt=I('<td style="vertical-align: middle;"></td>'),rt=I("<tr></tr>"),ot=I("<div></div>"),wt=X=>{let e=$(()=>{let t=new Set;if(X.hiddenColumns==null)return t;for(let o of X.hiddenColumns)t.add(o);return t});return(()=>{const t=et.cloneNode(!0),o=t.firstChild,s=o.firstChild,l=s.firstChild,y=s.nextSibling;return k(l,S(F,{get when(){return!e().has("Order Code")},get children(){return He.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Qty")},get children(){return Oe.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Length")},get children(){return Be.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Supplier")},get children(){return Ge.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Description")},get children(){return qe.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Usage")},get children(){return De.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Piece Mark")},get children(){return Ee.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Specifications")},get children(){return Ve.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Notes")},get children(){return Qe.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("User Notes To Supplier")},get children(){return We.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Weight")},get children(){return je.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Cost Per Unit")},get children(){return Ze.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Unit")},get children(){return Je.cloneNode(!0)}}),null),k(l,S(F,{get when(){return!e().has("Total Cost")},get children(){return Ke.cloneNode(!0)}}),null),k(y,S(we,{get each(){return X.orderLines},children:v=>{let r=$(()=>{let a=ve(v());return a==null?"":"$"+a.toFixed(2)});return(()=>{const a=rt.cloneNode(!0);return k(a,S(F,{get when(){return!e().has("Order Code")},get children(){const i=H.cloneNode(!0);return k(i,()=>v().orderCode??""),i}}),null),k(a,S(F,{get when(){return!e().has("Qty")},get children(){const i=H.cloneNode(!0);return k(i,()=>v().quantity??""),i}}),null),k(a,S(F,{get when(){return!e().has("Length")},get children(){const i=H.cloneNode(!0);return i.style.setProperty("white-space","nowrap"),k(i,(()=>{const h=xe(()=>v().length==null,!0);return()=>h()?"--":v().length?.toString()+" mm"})()),ge(()=>i.style.setProperty("text-align",v().length==null?"center":void 0)),i}}),null),k(a,S(F,{get when(){return!e().has("Supplier")},get children(){const i=H.cloneNode(!0);return k(i,()=>v().supplier??""),i}}),null),k(a,S(F,{get when(){return!e().has("Description")},get children(){const i=tt.cloneNode(!0);return k(i,S(Se,{get when(){return v().colourMark},keyed:!0,children:h=>(()=>{const f=ot.cloneNode(!0);return f.style.setProperty("width","16px"),f.style.setProperty("height","16px"),f.style.setProperty("display","inline-block"),ge(()=>f.style.setProperty("background-color",h())),f})()}),null),k(i,()=>v().description??"",null),i}}),null),k(a,S(F,{get when(){return!e().has("Usage")},get children(){const i=H.cloneNode(!0);return k(i,()=>v().usage??""),i}}),null),k(a,S(F,{get when(){return!e().has("Piece Mark")},get children(){const i=H.cloneNode(!0);return k(i,()=>v().pieceMark??""),i}}),null),k(a,S(F,{get when(){return!e().has("Specifications")},get children(){const i=H.cloneNode(!0);return k(i,()=>v().variationDescription??""),i}}),null),k(a,S(F,{get when(){return!e().has("Notes")},get children(){const i=H.cloneNode(!0);return k(i,()=>v().notes),i}}),null),k(a,S(F,{get when(){return!e().has("User Notes To Supplier")},get children(){return H.cloneNode(!0)}}),null),k(a,S(F,{get when(){return!e().has("Weight")},get children(){return H.cloneNode(!0)}}),null),k(a,S(F,{get when(){return!e().has("Cost Per Unit")},get children(){const i=H.cloneNode(!0);return k(i,()=>v().cost_per_unit??""),i}}),null),k(a,S(F,{get when(){return!e().has("Unit")},get children(){const i=H.cloneNode(!0);return k(i,()=>v().unit??""),i}}),null),k(a,S(F,{get when(){return!e().has("Total Cost")},get children(){const i=H.cloneNode(!0);return k(i,r),i}}),null),a})()}})),t})()},me={"RHS 75*50*3mm GAL /MTR":{itemCode:"2360M",unit:"MTR"},"RHS 100*50*3mm GAL /MTR":{itemCode:"234LM",unit:"MTR"},"SHS 25*25*3mm GAL /MTR":{itemCode:"230FM",unit:"MTR"},"SHS 50*50*2mm GAL /MTR":{itemCode:"230WM",unit:"MTR"},"SHS 50*50*3mm GAL /MTR":{itemCode:"230YM",unit:"MTR"},"SHS 75*75*3mm GAL /MTR":{itemCode:"231BM",unit:"MTR"},"SHS 100*100*3mm GAL /MTR":{itemCode:"22ZSM",unit:"MTR"}};function it(X){let e=me[X];return e==null&&(()=>{{let t=X.match("([0-9]+)x([0-9]+(.[0-9]+)?) SHS");if(t!=null){let o=t[2];o.endsWith(".0")&&(o=o.substring(0,o.length-2));let s="SHS "+t[1]+"*"+t[1]+"*"+o+"mm GAL /MTR";e=me[s];return}}{let t=X.match("([0-9]+)x([0-9]+)x([0-9]+(.[0-9]+)?) RHS");if(t!=null){let o=t[3];o.endsWith(".0")&&(o=o.substring(0,o.length-2));let s="RHS "+t[1]+"*"+t[2]+"*"+o+"mm GAL /MTR";e=me[s];return}}})(),e==null?Promise.resolve(void 0):e.priceCache!=null?Promise.resolve({price:e.priceCache,unit:e.unit}):fetch("https://cselke1.wixsite.com/test/_functions/prontoPrice?pronto_code="+e.itemCode).then(t=>t.json()).then(t=>{if(t.type=="success"){let o=Number.parseFloat(t.value);return e.priceCache=o,{price:o,unit:e.unit}}})}async function bt(X){for(let e of X)if(e.cost_per_unit==null&&e.description!=null){let t=await it(e.description);if(t!=null)switch(e.cost_per_unit=t.price,t.unit){case"EACH":e.unit="/ea";break;case"MTR":e.unit="/m";break}}}function Mt(X,e,t,o){let s={},l=[];for(let v of X)for(l.push(v);;){let r=l.pop();if(r==null)break;if(r.children!=null)for(let T of r.children())r.usage!=null&&(T=new V({...T,usage:r.usage})),l.push(T);if(r.itemName==null)continue;let a;if(e==null||r.hasLabel==null||!r.hasLabel())a="--";else{let T=e.lookupLabelForComponent(r);T==null?a="--":a=T}let i;r.itemMarkColour!=null?i=r.itemMarkColour()??"--":i="--";let h;r.length==null?h="--":h=Math.round(r.length()).toFixed(0)+" mm";let f;r.openingProperties==null?f=void 0:f=r.openingProperties().modelName;let P;f==null?P="":P="_"+f;let b;r.description==null?b="":b="_"+r.description();let Y=r.itemName()+"_"+a+"_"+i+"_"+P+"_"+b+"_"+h,z=s[Y];if(z==null){let T=new Map;r.usage!=null&&T.set(r.usage(),r.qty==null?1:r.qty());let _;e==null||r.hasLabel==null||!r.hasLabel()?_=void 0:_=e.lookupLabelForComponent(r),s[Y]={itemName:r.itemName(),label:_,colourMark:r.itemMarkColour!=null?r.itemMarkColour():void 0,modelName:f,qty:r.qty==null?1:r.qty(),description:r.description==null?"":r.description(),usage:T,length:r.length==null?void 0:Math.round(r.length()),fixedCost:r.fixedCost==null?void 0:r.fixedCost()}}else if(z.qty+=r.qty==null?1:r.qty(),r.usage!=null){let T=z.usage.get(r.usage())??0;z.usage.set(r.usage(),T+(r.qty==null?1:r.qty()))}}let y=[];for(let v in s){let r=s[v];r.label;let a="";{let f=!0;for(let[P,b]of r.usage)f?f=!1:a+="; ",a+=P+" ("+b+")"}r.description!=""&&(a==""?a=r.description:a=r.description+" - "+a);let i,h;r.fixedCost!=null?(i=r.fixedCost.cost,h=r.fixedCost.unit):t!=null&&(r.itemName.match(/^C[0-9]+$/)?(i=t.lookupCeePrice(r.itemName,o),h="/m"):r.itemName.match(/^C[0-9]+ Channel$/)?(i=t.lookupChannelPrice(r.itemName,o),h="/m"):r.itemName.match(/^Corrugated [0-9]+\.[0-9]+$/)||r.itemName.match(/^Steelclad [0-9]+\.[0-9]+$/)?(i=t.lookupSheetingPrice(r.itemName,o),h="/m"):r.itemName.match(/^Strap Brace [0-9]+mm x [0-9]+\.[0-9]+mm$/)&&r.length!=null?(i=t.lookupStrapPrice(r.itemName,r.length,o),h="/ea"):r.itemName.match(/^Tek Screw Hex W\/seal [0-9]+x[0-9]+ Colorbond$/)?(i=t.lookupFastenerPrice(r.itemName,o),h="/ea"):r.itemName.match(/^Quad Gutter 0.42 125mm Slotted$/)?(i=t.lookupTrimEavePrice(r.itemName,o),h="/ea"):r.itemName.match(/^Quad Stop End (Left|Right) Colorbond$/)?(i=t.lookupTrimMiscellaneousPrice(r.itemName,o),h="/ea"):r.itemName.match(/^Quad Bkt Internal$/)||r.itemName.match(/^Quad Gutter Overstraps$/)?(i=t.lookupTrimGutterStrapPrice(r.itemName,o),h="/ea"):r.itemName.match(/^Flashing - Barge .*$/)?(i=t.lookupTrimRakePrice(r.itemName,o),h="/m"):r.itemName.match(/^Flashing - Corner .*$/)?(i=t.lookupTrimCornerPrice(r.itemName,o),h="/m"):r.itemName.match(/^Flashing - \"L\".*$/)||r.itemName.match(/^Flashing - \"J\".*$/)?(i=t.lookupTrimHeadJambPrice(r.itemName,o),h="/m"):r.itemName.match(/^Flashing - Opening 75 x 115mm$/)?(i=t.lookupTrimAnglePrice(r.itemName,o),h="/m"):r.itemName.match(/^14-24 X 38 CL4 Fine Hex Series 500 SDS$/)||r.itemName.match(/^14 X 20 X 22 Hex Tek No Neo B8 CI 4$/)||r.itemName.match(/^50mm Multi Purpose Roof Screw Colorbond$/)?(i=t.lookupFastenerPrice(r.itemName,o),h="/ea"):r.itemName.match(/^Powers PTB-PRO M12 x 120mm embedded 91mm$/)?(i=t.lookupFastenerAnchorBoltsPrice(r.itemName,o),h="/ea"):r.itemName.match(/^H[0-9]+xW[0-9]+ ROW$/)&&r.modelName!=null&&(i=t.lookupRollerDoorPrice(r.itemName,r.modelName,o),h="/ea")),y.push({orderCode:r.itemName,colourMark:r.colourMark,description:r.itemName,quantity:r.qty,length:r.length,usage:a,pieceMark:r.label,cost_per_unit:i,unit:h})}return y.sort((v,r)=>{let a;return v.orderCode==null?r.orderCode==null?a=0:a=-1:r.orderCode==null?a=1:a=v.orderCode.localeCompare(r.orderCode),a!=0?a:v.length==null?r.length==null?0:-1:r.length==null?1:v.length-r.length}),y}export{L as C,gt as G,wt as O,O as R,dt as S,ht as a,bt as b,Mt as c,vt as d,pt as e,yt as f,mt as g,xt as t,ft as v};