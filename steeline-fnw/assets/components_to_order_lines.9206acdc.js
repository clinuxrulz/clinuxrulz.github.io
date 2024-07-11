import{a as L,i as k,b as F,S,m as ve,e as de,N as xe,I as we,t as R,aj as be}from"./index.ed89eeae.js";import{_ as Ne,B as te,r as Xe,V as Me,aD as ke,l as D,b as Q,O as Ce,J as ne,K as ie,$ as ee,T as re,aC as oe,a2 as Pe,Q as ae}from"./Component.6d23e898.js";import{V as j,P as ge,r as Ye}from"./three_js_component_renderer.4fd6b17b.js";import{c as fe,F as Fe}from"./PropertiesForm.8a6db3d2.js";import{a as G}from"./Vec3.ce1f4f7a.js";class se{constructor(e){this.top=0,this.array=new Float32Array(e)}write(e){this.array[this.top++]=e.x,this.array[this.top++]=e.y,this.array[this.top++]=e.z}}class ze{constructor(e){this.top=0,this.array=new Float32Array(e)}write(e){this.array[this.top++]=e.x,this.array[this.top++]=e.y}}class V{constructor(e){this.plane=null,this.front=null,this.back=null,this.polygons=[],e&&this.build(e)}clone(){const e=new V;return e.plane=this.plane&&this.plane.clone(),e.front=this.front&&this.front.clone(),e.back=this.back&&this.back.clone(),e.polygons=this.polygons.map(r=>r.clone()),e}invert(){for(let r=0;r<this.polygons.length;r++)this.polygons[r].flip();this.plane&&this.plane.flip(),this.front&&this.front.invert(),this.back&&this.back.invert();const e=this.front;this.front=this.back,this.back=e}clipPolygons(e){if(!this.plane)return e.slice();let r=new Array,o=new Array;for(let m=0;m<e.length;m++)this.plane.splitPolygon(e[m],r,o,r,o);return this.front&&(r=this.front.clipPolygons(r)),this.back?o=this.back.clipPolygons(o):o=[],r.concat(o)}clipTo(e){this.polygons=e.clipPolygons(this.polygons),this.front&&this.front.clipTo(e),this.back&&this.back.clipTo(e)}allPolygons(){let e=this.polygons.slice();return this.front&&(e=e.concat(this.front.allPolygons())),this.back&&(e=e.concat(this.back.allPolygons())),e}build(e){if(!e.length)return;this.plane||(this.plane=e[0].plane.clone());const r=[],o=[];for(let m=0;m<e.length;m++)this.plane.splitPolygon(e[m],this.polygons,this.polygons,r,o);r.length&&(this.front||(this.front=new V),this.front.build(r)),o.length&&(this.back||(this.back=new V),this.back.build(o))}}class le{constructor(e,r,o,m){this.pos=new j().copy(e),this.normal=new j().copy(r),this.uv=new j().copy(o),this.uv.z=0,m&&(this.color=new j().copy(m))}clone(){return new le(this.pos,this.normal,this.uv,this.color)}flip(){this.normal.negate()}interpolate(e,r){return new le(this.pos.clone().lerp(e.pos,r),this.normal.clone().lerp(e.normal,r),this.uv.clone().lerp(e.uv,r),this.color&&e.color&&this.color.clone().lerp(e.color,r))}}class ${constructor(){this.polygons=new Array}static fromPolygons(e){const r=new $;return r.polygons=e,r}static fromGeometry(e,r){let o=[];const m=e.attributes.position,i=e.attributes.normal,y=e.attributes.uv,v=e.attributes.color,t=e.groups;let a;if(e.index)a=e.index.array;else{a=new Array(m.array.length/m.itemSize|0);for(let h=0;h<a.length;h++)a[h]=h}const l=a.length/3|0;o=new Array(l);for(let h=0,f=0,P=a.length;h<P;h+=3,f++){const b=new Array(3);for(let Y=0;Y<3;Y++){const _=a[h+Y],z=_*3,T=_*2,U=m.array[z],W=m.array[z+1],d=m.array[z+2],c=i.array[z],p=i.array[z+1],n=i.array[z+2],s=y?.array[T],g=y?.array[T+1];b[Y]=new le(new j(U,W,d),new j(c,p,n),new j(s,g,0),v&&new j(v.array[T],v.array[T+1],v.array[T+2]))}if(r===void 0&&t&&t.length>0)for(const Y of t)h>=Y.start&&h<Y.start+Y.count&&(o[f]=new ge(b,Y.materialIndex));else o[f]=new ge(b,r)}return $.fromPolygons(o.filter(h=>!isNaN(h.plane.normal.x)))}static toGeometry(e,r){let o=0;const m=e.polygons;for(const P of m)o+=P.vertices.length-2;const i=new Ne,y=new se(o*3*3),v=new se(o*3*3),t=new ze(o*2*3);let a;const l=[],h=[];for(const P of m){const b=P.vertices,Y=b.length;P.shared!==void 0&&(l[P.shared]||(l[P.shared]=[])),Y&&b[0].color!==void 0&&(a||(a=new se(o*3*3)));for(let _=3;_<=Y;_++)(P.shared===void 0?h:l[P.shared]).push(y.top/3,y.top/3+1,y.top/3+2),y.write(b[0].pos),y.write(b[_-2].pos),y.write(b[_-1].pos),v.write(b[0].normal),v.write(b[_-2].normal),v.write(b[_-1].normal),t&&(t.write(b[0].uv),t.write(b[_-2].uv),t.write(b[_-1].uv)),a&&(a.write(b[0].color),a.write(b[_-2].color),a.write(b[_-1].color))}i.setAttribute("position",new te(y.array,3)),i.setAttribute("normal",new te(v.array,3)),t&&i.setAttribute("uv",new te(t.array,2)),a&&i.setAttribute("color",new te(a.array,3));for(let P=0;P<l.length;P++)l[P]===void 0&&(l[P]=[]);if(l.length){let P=[],b=0;for(let Y=0;Y<l.length;Y++)i.addGroup(b,l[Y].length,Y),b+=l[Y].length,P=P.concat(l[Y]);i.addGroup(b,h.length,l.length),P=P.concat(h),i.setIndex(P)}const f=new Xe().copy(r).invert();return i.applyMatrix4(f),i.computeBoundingSphere(),i.computeBoundingBox(),i}static fromMesh(e,r){const o=$.fromGeometry(e.geometry,r),m=new Me,i=new ke;i.getNormalMatrix(e.matrix);for(let y=0;y<o.polygons.length;y++){const v=o.polygons[y];for(let t=0;t<v.vertices.length;t++){const a=v.vertices[t];a.pos.copy(m.copy(a.pos.toVector3()).applyMatrix4(e.matrix)),a.normal.copy(m.copy(a.normal.toVector3()).applyMatrix3(i))}}return o}static toMesh(e,r,o){const m=$.toGeometry(e,r),i=new D(m,o);return i.matrix.copy(r),i.matrix.decompose(i.position,i.quaternion,i.scale),i.rotation.setFromQuaternion(i.quaternion),i.updateMatrixWorld(),i.castShadow=i.receiveShadow=!0,i}static union(e,r){const o=$.fromMesh(e),m=$.fromMesh(r);return $.toMesh(o.union(m),e.matrix,e.material)}static subtract(e,r){const o=$.fromMesh(e),m=$.fromMesh(r);return $.toMesh(o.subtract(m),e.matrix,e.material)}static intersect(e,r){const o=$.fromMesh(e),m=$.fromMesh(r);return $.toMesh(o.intersect(m),e.matrix,e.material)}clone(){const e=new $;return e.polygons=this.polygons.map(r=>r.clone()).filter(r=>Number.isFinite(r.plane.w)),e}toPolygons(){return this.polygons}union(e){const r=new V(this.clone().polygons),o=new V(e.clone().polygons);return r.clipTo(o),o.clipTo(r),o.invert(),o.clipTo(r),o.invert(),r.build(o.allPolygons()),$.fromPolygons(r.allPolygons())}subtract(e){const r=new V(this.clone().polygons),o=new V(e.clone().polygons);return r.invert(),r.clipTo(o),o.clipTo(r),o.invert(),o.clipTo(r),o.invert(),r.build(o.allPolygons()),r.invert(),$.fromPolygons(r.allPolygons())}intersect(e){const r=new V(this.clone().polygons),o=new V(e.clone().polygons);return r.invert(),o.clipTo(r),o.invert(),r.clipTo(o),o.clipTo(r),r.build(o.allPolygons()),r.invert(),$.fromPolygons(r.allPolygons())}inverse(){const e=this.clone();for(const r of e.polygons)r.flip();return e}toMesh(e,r){return $.toMesh(this,e,r)}toGeometry(e){return $.toGeometry(this,e)}}function Se(){let C=28,e=762,r=4,o=e/r,m=C,i=C,y=5,v=5,t=(o-2*m-2*y)/4,a=t,l=t,h=t,f=t,P=y,b=v,Y=m,_=i,z=[{x:0,y:C}],T=(U,W)=>{let d=z[z.length-1];z.push({x:d.x+U,y:d.y+W})};for(let U=0;U<r;++U)T(a,0),T(m,-i),T(l,0),T(y,y),T(h,0),T(P,-b),T(f,0),T(Y,_);return z}const _e=Se();function Te(){let C=16,e=[],r=762,o=10,m=8;for(let i=0;i<o;++i){let y=r*i/o;for(let v=0;v<m;++v){let t=y+r/o*v/m,a=2*Math.PI*v/m,l=Math.sin(a);e.push({x:t,y:.5*(C+C*l)})}}return e}const $e=Te();function Le(){let C=27,e=7,r=4,o=14,m=6,i=4,y=27,v=7,t=14,a=20,l=[{x:0,y:0}],h=(b,Y)=>{let _=l[l.length-1];l.push({x:_.x+b,y:_.y+Y})},f=6;for(let b=0;b<f;++b)h(C,e),h(r,0),h(o,m),h(i,0),h(y,v),h(t,-a);let P=762/l[l.length-1].x;for(let b=0;b<l.length;++b)l[b].x*=P;return l}const Ie=Le();function Re(){let C=14,e=19,r=55,o=14,m=19,i=55,y=[{x:0,y:e}],v=(l,h)=>{let f=y[y.length-1];y.push({x:f.x+l,y:f.y+h})},t=4;for(let l=0;l<t;++l)v(C,-e),v(r,0),v(o,m),v(i,0);let a=762/y[y.length-1].x;for(let l=0;l<y.length;++l)y[l].x*=a;return y}const Ue=Re();let ce;function ct(){if(ce!=null)return ce;let C=document.createElement("canvas"),e=128;C.width=e,C.height=1;let r=C.getContext("2d");if(r==null)return"";let o=1;for(var m=0;m<e;++m){let y=.762*m/e,v=2*Math.PI*o/.762,t=.03*v*Math.cos(v*y),a=1,h=-(t*a),f=a,P=Math.sqrt(h*h+f*f);h/=P,f/=P;let b=Math.round((h+1)/2*255);b<0&&(b=0),b>255&&(b=255);let Y=Math.round((f+1)/2*255);Y<0&&(Y=0),Y>255&&(Y=255),r.fillStyle="rgb("+b+", 0, "+Y+")",r.fillRect(m,0,1,1)}let i=C.toDataURL("img/png");return ce=i,i}let ue;function ut(){if(ue!=null)return ue;let C=28,o=762/4,m=C,i=5,y=(o-2*m-2*i)/4,v=y,t=y,a=y,l=y,h=i,f=m,P=document.createElement("canvas"),b=256;P.width=b,P.height=1;let Y=P.getContext("2d");if(Y==null)return"";let _=v+m+t+i+a+h+l+f,z=[v,m,t,i,a,h,l,f],T=[];{let x=0;for(let X of z)x+=X,T.push(x)}let U=x=>Math.round((x+1)/2*255),W=U(-Math.SQRT1_2),d=U(Math.SQRT1_2),c=0,p=U(1),n=U(Math.SQRT1_2),s=U(Math.SQRT1_2);for(let x=0;x<b;++x){let X=_*x/(b-1),N;for(let M=0;M<T.length;++M)if(X<T[M]){N=M;break}N==null&&(N=T.length-1);let u,w;switch(N){default:case 0:u=c,w=p;break;case 1:u=n,w=s;break;case 2:u=c,w=p;break;case 3:u=W,w=d;break;case 4:u=c,w=p;break;case 5:u=n,w=s;break;case 6:u=c,w=p;break;case 7:u=W,w=d;break}Y.fillStyle="rgb("+u+", 0, "+w+")",Y.fillRect(x,0,1,1)}let g=P.toDataURL("img/png");return ue=g,g}class q{constructor(e){this.ranges=e}static single(e,r){return new q([{from:e,to:r}])}static get empty(){return Oe}static get full(){return pe}invert(){if(this.ranges.length==0)return pe;let e=[];Number.isFinite(this.ranges[0].from)&&e.push({from:Number.NEGATIVE_INFINITY,to:this.ranges[0].from});for(let r=0;r<this.ranges.length-1;++r)e.push({from:this.ranges[r].to,to:this.ranges[r+1].from});return Number.isFinite(this.ranges[this.ranges.length-1].to)&&e.push({from:this.ranges[this.ranges.length-1].to,to:Number.POSITIVE_INFINITY}),new q(e)}union(e){let r=[...this.ranges];for(let o of e.ranges){let m=o.from,i=o.to;for(let y=r.length-1;y>=0;--y)r[y].from<=i&&r[y].to>=m&&(m=Math.min(m,r[y].from),i=Math.max(i,r[y].to),r.splice(y,1));r.push({from:m,to:i})}return r.sort((o,m)=>{let i=o.from-m.from;return i!=0?i:o.to-m.to}),new q(r)}intersect(e){return this.invert().union(e.invert()).invert()}subtract(e){return this.invert().union(e).invert()}}const Oe=new q([]),pe=new q([{from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY}]);class mt{constructor(e){let r=L(()=>{let d,c,p,n;for(let s of e.outline())(d==null||s.x<d)&&(d=s.x),(c==null||s.x>c)&&(c=s.x),(p==null||s.y<p)&&(p=s.y),(n==null||s.y>n)&&(n=s.y);if(!(d==null||c==null||p==null||n==null))return{minX:d,minY:p,maxX:c,maxY:n}}),o=L(()=>{if(e.bays==null)return;let d=e.bays(),c=[],p=0;for(let n of d){let s=p+n.baySize;c.push({...n,minX:p,maxX:s}),p=s}return c}),m;{let d={minY:void 0,maxY:void 0};m=(c,p)=>{let n,s;y(c,d),n=d.minY,s=d.maxY,y(p,d),(n==null||d.minY!=null&&d.minY<n)&&(n=d.minY),(s==null||d.maxY!=null&&d.maxY>s)&&(s=d.maxY);for(let u of e.outline())c<u.x&&u.x<p&&((n==null||u.y<n)&&(n=u.y),(s==null||u.y>s)&&(s=u.y));if(d.minY=void 0,d.maxY=void 0,n==null||s==null)return q.empty;let g=o();if(g==null)return q.single(n,s);let x=0;for(let u=0;u<g.length;++u){let w=g[u];if(c<w.maxX){x=u;break}}let X=g.length-1;for(let u=g.length-1;u>=0;--u){let w=g[u];if(p>w.minX){X=u;break}}let N=q.empty;for(let u=x;u<=X;++u){let w=g[u];switch(w.sheetedStyle.type){case"Fully Open":break;case"Fully Sheeted":return q.single(n,s);case"Upper Infill":N=N.union(q.single(w.sheetedStyle.fromHeight,s));break;case"Lower Infill":N=N.union(q.single(n,w.sheetedStyle.toHeight));break;case"Skirted":N=N.union(q.single(w.sheetedStyle.fromHeight,w.sheetedStyle.toHeight));break}}return N}}let i=L(()=>{let d=0;for(let p=0;p<e.outline().length;++p){let n=e.outline()[p],s=e.outline()[(p+1)%e.outline().length];d+=n.cross(s)}return Math.abs(.5*d)}),y=(d,c)=>{c.minY=void 0,c.maxY=void 0;let p=e.outline();for(let n=0;n<p.length;++n){let s=p[n],g=p[(n+1)%p.length],x=Math.min(s.x,g.x),X=Math.max(s.x,g.x);if(x<=d&&d<=X){let N=g.x-s.x,u=g.y-s.y,w=s.y+(d-s.x)*u/N;if(!Number.isFinite(w))continue;c.minY==null||c.maxY==null?(c.minY=w,c.maxY=w):(w<c.minY&&(c.minY=w),w>c.maxY&&(c.maxY=w))}}},v=(d,c)=>{c.minX=void 0,c.maxX=void 0;let p=e.outline();for(let n=0;n<p.length;++n){let s=p[n],g=p[(n+1)%p.length],x=Math.min(s.y,g.y),X=Math.max(s.y,g.y);if(x<=d&&d<=X){let N=g.x-s.x,u=g.y-s.y,w=s.x+(d-s.y)*N/u;if(!Number.isFinite(w))continue;c.minX==null||c.maxX==null?(c.minX=w,c.maxX=w):(w<c.minX&&(c.minX=w),w>c.maxX&&(c.maxX=w))}}},t=e.sheetingType??(()=>"Corrugated 0.42"),a=e.sheetingDirection??(()=>"Vertical"),l=e.startSheetingAtOppositeEnd??(()=>!1),h=e.sheetingLowPoly??(()=>!1),f=()=>{switch(t()){case"Long Line 305":return 305;default:return 762}},P=()=>{let d=[],c=r();if(c==null)return d;let p=c.minY,n={minX:void 0,maxX:void 0};for(;p<c.maxY;){let s,g;v(p,n),s=n.minX,g=n.maxX,v(p+f(),n),(s==null||n.minX!=null&&n.minX<s)&&(s=n.minX),(g==null||n.maxX!=null&&n.maxX>g)&&(g=n.maxX);for(let x of e.outline())p<x.y&&x.y<p+f()&&((s==null||x.x<s)&&(s=x.x),(g==null||x.x>g)&&(g=x.x));if(s!=null&&g!=null){let x=[{minX:s,maxX:g}],X=[],N=p,u=p+f();for(let w of e.openings()){let M=w.pos.x,I=w.pos.x+w.width,E=w.pos.y,A=w.pos.y+w.height;if(E<=N&&A>=u){for(let O of x)if(M<O.maxX&&I>O.minX){let Z=O.minX,H=M;Z<H&&X.push({minX:Z,maxX:H});let J=I,K=O.maxX;J<K&&X.push({minX:J,maxX:K})}else X.push(O);{let O=x;x=X,X=O,X.splice(0,X.length)}}}for(let w of x){let M=w.minX,I=w.maxX;d.push(new Q({itemName:t,usage:e.usage,length:()=>I-M}))}}p+=f()}return d},b=()=>{let d=[],c=r();if(c==null)return d;let p=l(),n=p?c.maxX:c.minX;for(;p?n>c.minX:n<c.maxX;){let s=m(p?n-f():n,p?n:n+f());for(let g of s.ranges){let x=g.from,X=g.to,N=[{minY:x,maxY:X}],u=[],w=n,M=n+f();for(let I of e.openings()){let E=I.pos.x,A=I.pos.x+I.width,O=I.pos.y,Z=I.pos.y+I.height;if(E<w&&A>M){for(let H of N)if(O<H.maxY&&Z>H.minY){let J=H.minY,K=O;J<K&&u.push({minY:J,maxY:K});let me=Z,he=H.maxY;me<he&&u.push({minY:me,maxY:he})}else u.push(H);{let H=N;N=u,u=H,u.splice(0,u.length)}}}for(let I of N){let E=I.minY,A=I.maxY;d.push(new Q({itemName:t,usage:e.usage,length:()=>A-E}))}}n+=p?-f():f()}return d},Y=L(()=>{switch(a()){case"Vertical":return b();case"Horizontal":return P()}}),_=()=>{switch(e.type()){default:case"Wall Sheeting":return"Tek Screw Hex W/seal 10x16 Colorbond";case"Roof Sheeting":return"50mm Multi Purpose Roof Screw Colorbond"}},z=L(()=>{let d=Math.round(i()*(200/(18e6/Math.cos(15*Math.PI/180))));return[new Q({itemName:_,usage:e.usage,qty:()=>d})]}),T=L(()=>{let d=r();if(d==null)return;let c=[],p=762,n;switch(t()){case"Corrugated 0.42":n=$e;break;case"Supersaw":n=Ie;break;case"Unirib":n=Ue;break;default:case"Steelclad 0.42":n=_e;break}switch(a()){case"Vertical":{let s=d.minX;for(c.push(n[0]);;){let g=!1;for(let x=1;x<n.length;++x){let X=n[x];if(s+X.x>=d.maxX){g=!0;break}c.push({x:s+X.x,y:X.y})}if(g)break;s+=p}break}case"Horizontal":{let s=d.minY;for(c.push(n[0]);;){let g=!1;for(let x=1;x<n.length;++x){let X=n[x];if(s+X.x>=d.maxY){g=!0;break}c.push({x:s+X.x,y:X.y})}if(g)break;s+=p}break}}return c});const U=new Ce({color:"#808080",polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});this.fullSheetedAreaMesh=L(()=>{let d=r();if(d==null)return;let c=d,p=g=>{let x=c,X=o();if(X!=null)for(let N of X)switch(N.sheetedStyle.type){case"Fully Sheeted":continue;case"Fully Open":{let u=new ee((N.baySize+.1)/1e3,1,(x.maxY-x.minY)/1e3);u.translate(.5*(N.minX+N.maxX)/1e3,0,.5*(x.minY+x.maxY)/1e3),g=$.subtract(g,new D(u));break}case"Upper Infill":continue;case"Lower Infill":{let u=new ee((N.baySize+.1)/1e3,1,(x.maxY-N.sheetedStyle.toHeight)/1e3);u.translate(.5*(N.minX+N.maxX)/1e3,0,.5*(N.sheetedStyle.toHeight+x.maxY)/1e3),g=$.subtract(g,new D(u));break}case"Skirted":continue}return g};if(h()||t()=="Long Line 305"||t()=="Flat"){let g=new ne,x=1/1e3;g.moveTo(e.outline()[0].x*x,e.outline()[0].y*x);for(let u=1;u<e.outline().length;++u)g.lineTo(e.outline()[u].x*x,e.outline()[u].y*x);g.closePath();let X=new ie(g,{depth:2*x,bevelEnabled:!1});X.rotateX(90*Math.PI/180);let N=new D(X,U);for(let u of e.openings()){let w=new ee(u.width/1e3,1,u.height/1e3);w.translate(u.pos.x/1e3+.5*(u.width/1e3),0,u.pos.y/1e3+.5*(u.height/1e3)),N=$.subtract(N,new D(w))}return N=p(N),N}let n=T();if(n==null)return;let s;switch(a()){case"Vertical":{let g=c.maxY-c.minY,x=3,X=new ne;X.moveTo(n[0].x/1e3,n[0].y/1e3);for(let M=1;M<n.length;++M)X.lineTo(n[M].x/1e3,n[M].y/1e3);for(let M=n.length-1;M>=0;--M)X.lineTo(n[M].x/1e3,(n[M].y+x)/1e3);X.closePath();let N=new ie(X,{depth:g/1e3,bevelEnabled:!1});N.translate(0,x/1e3,-g/1e3),N.rotateX(Math.PI);let u=N.attributes.position,w={minY:void 0,maxY:void 0};for(let M=0;M<u.count;++M){let I=u.getX(M),E=u.getZ(M);y(I*1e3,w);let A=w.minY,O=w.maxY;Math.abs(E)<.001&&A!=null&&u.setZ(M,A/1e3),Math.abs(E-g/1e3)<.001&&O!=null&&u.setZ(M,O/1e3)}s=new D(N,U);break}case"Horizontal":{let g=c.maxX-c.minX,x=3,X=new ne;X.moveTo(n[0].x/1e3,n[0].y/1e3);for(let M=1;M<n.length;++M)X.lineTo(n[M].x/1e3,n[M].y/1e3);for(let M=n.length-1;M>=0;--M)X.lineTo(n[M].x/1e3,(n[M].y+x)/1e3);X.closePath();let N=new ie(X,{depth:g/1e3,bevelEnabled:!1});N.rotateX(Math.PI),N.rotateY(-.5*Math.PI);let u=N.attributes.position,w={minX:void 0,maxX:void 0};for(let M=0;M<u.count;++M){let I=u.getX(M),E=u.getZ(M);v(E*1e3,w);let A=w.minX,O=w.maxX;Math.abs(I)<.001&&A!=null&&u.setX(M,A/1e3),Math.abs(I-g/1e3)<.001&&O!=null&&u.setX(M,O/1e3)}s=new D(N,U);break}}for(let g of e.openings()){let x=new ee(g.width/1e3,1,g.height/1e3);x.translate(g.pos.x/1e3+.5*(g.width/1e3),0,g.pos.y/1e3+.5*(g.height/1e3)),s=$.subtract(s,new D(x))}return s=p(s),s});let W=L(()=>{let d=this.fullSheetedAreaMesh();if(d==null)return new D;let c=e.previewOpening();if(c==null)return d;let p=new ee(c.width/1e3,1,c.height/1e3);return p.translate(c.pos.x/1e3+.5*(c.width/1e3),0,c.pos.y/1e3+.5*(c.height/1e3)),$.subtract(d,new D(p))});this.components=L(()=>[new Q({transform:()=>re.identity,layers:()=>[oe.Cladding],mkObject3d:()=>{let d=W(),c=e.colour(),p;fe[c]!=null&&(p=new Pe({color:fe[c].colourHex,...h()&&e.textures!=null?{normalMap:t().indexOf("Corrugated")!=-1?a()=="Vertical"?e.textures().corroNormalMap:e.textures().horizontalCorroNormalMap:a()=="Vertical"?e.textures().steelCladNormalMap:e.textures().horizontalSteelCladNormalMap}:{},metalness:.1,roughness:.5,reflectivity:.8}));let n=p??d.material;return()=>{let s=new D(d.geometry,n);return s.castShadow=!0,s}},colour:e.colour}),...Y(),...z()])}}class ht{constructor(e){let r=L(()=>[new Q({itemName:()=>"Quad Gutter 0.42 125mm Slotted",layers:()=>[oe.Cladding],transform:()=>re.create(G.create(e.length(),-30,0),ae.fromWU(G.unitZ,G.negUnitX)),length:e.length,flashingProfile:()=>Ye,colour:L(()=>e.colour?.call(e.colour)??"Basalt")})]),o=L(()=>{let i=L(()=>new Fe({width:98,thickness:5}));return[new Q({itemName:()=>"Quad Stop End Left Colorbond",layers:L(()=>[oe.Cladding]),qty:()=>1,usage:()=>"Gutter",length:()=>160,flatProperties:i,colour:L(()=>e.colour?.call(e.colour)??"Basalt"),transform:L(()=>re.create(G.create(0,0,0),ae.fromWU(G.unitX,G.negUnitY)))}),new Q({itemName:()=>"Quad Stop End Right Colorbond",layers:L(()=>[oe.Cladding]),qty:()=>1,usage:()=>"Gutter",length:()=>160,flatProperties:i,colour:L(()=>e.colour?.call(e.colour)??"Basalt"),transform:L(()=>re.create(G.create(e.length(),0,0),ae.fromWU(G.unitX,G.negUnitY)))})]}),m=L(()=>{let i=Math.ceil(e.length()/1e3)+1;return[new Q({itemName:()=>"Quad Bkt Internal",qty:()=>i,usage:()=>"Gutter"}),new Q({itemName:()=>"Quad Gutter Overstraps",qty:()=>i,usage:()=>"Gutter"})]});this.components=L(()=>[...r(),...o(),...m()])}}const dt=`void main() {
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
}`,gt=`precision mediump float;
      
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
`,ft=`precision mediump float;
      
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
`,pt=`precision mediump float;
      
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
`;function ye(C){switch(C.unit){case"/ea":return C.cost_per_unit==null?void 0:(C.quantity??1)*C.cost_per_unit;case"/m":return C.length==null||C.cost_per_unit==null?void 0:(C.quantity??1)*(C.length/1e3)*C.cost_per_unit;default:return}}function yt(C){let e=0;for(let r of C){let o=ye(r);o!=null&&(o=Math.round(o*100),e+=o)}return e/=100,e}const Be=R("<th>Order Code</th>"),qe=R("<th>Qty</th>"),Ae=R("<th>Length</th>"),De=R("<th>Supplier</th>"),Ee=R("<th>Description</th>"),He=R("<th>Usage</th>"),Ve=R("<th>Piece Mark</th>"),Qe=R("<th>Specifications</th>"),Ge=R("<th>Notes</th>"),We=R("<th>User Notes To Supplier</th>"),je=R("<th>Weight</th>"),Ze=R("<th>Cost Per Unit</th>"),Je=R("<th>Unit</th>"),Ke=R("<th>Total Cost</th>"),et=R('<div style="flex-grow: 1; overflow-y: scroll; display: flex; flex-direction: column;"><table><thead><tr></tr></thead><tbody></tbody></table></div>'),B=R("<td></td>"),tt=R('<td style="vertical-align: middle;"></td>'),rt=R("<tr></tr>"),ot=R("<div></div>"),vt=C=>{let e=L(()=>{let r=new Set;if(C.hiddenColumns==null)return r;for(let o of C.hiddenColumns)r.add(o);return r});return(()=>{const r=et.cloneNode(!0),o=r.firstChild,m=o.firstChild,i=m.firstChild,y=m.nextSibling;return k(i,F(S,{get when(){return!e().has("Order Code")},get children(){return Be.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Qty")},get children(){return qe.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Length")},get children(){return Ae.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Supplier")},get children(){return De.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Description")},get children(){return Ee.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Usage")},get children(){return He.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Piece Mark")},get children(){return Ve.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Specifications")},get children(){return Qe.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Notes")},get children(){return Ge.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("User Notes To Supplier")},get children(){return We.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Weight")},get children(){return je.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Cost Per Unit")},get children(){return Ze.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Unit")},get children(){return Je.cloneNode(!0)}}),null),k(i,F(S,{get when(){return!e().has("Total Cost")},get children(){return Ke.cloneNode(!0)}}),null),k(y,F(we,{get each(){return C.orderLines},children:v=>{let t=L(()=>{let a=ye(v());return a==null?"":"$"+a.toFixed(2)});return(()=>{const a=rt.cloneNode(!0);return k(a,F(S,{get when(){return!e().has("Order Code")},get children(){const l=B.cloneNode(!0);return k(l,()=>v().orderCode??""),l}}),null),k(a,F(S,{get when(){return!e().has("Qty")},get children(){const l=B.cloneNode(!0);return k(l,()=>v().quantity??""),l}}),null),k(a,F(S,{get when(){return!e().has("Length")},get children(){const l=B.cloneNode(!0);return l.style.setProperty("white-space","nowrap"),k(l,(()=>{const h=ve(()=>v().length==null,!0);return()=>h()?"--":v().length?.toString()+" mm"})()),de(()=>l.style.setProperty("text-align",v().length==null?"center":void 0)),l}}),null),k(a,F(S,{get when(){return!e().has("Supplier")},get children(){const l=B.cloneNode(!0);return k(l,()=>v().supplier??""),l}}),null),k(a,F(S,{get when(){return!e().has("Description")},get children(){const l=tt.cloneNode(!0);return k(l,F(xe,{get when(){return v().colourMark},keyed:!0,children:h=>(()=>{const f=ot.cloneNode(!0);return f.style.setProperty("width","16px"),f.style.setProperty("height","16px"),f.style.setProperty("display","inline-block"),de(()=>f.style.setProperty("background-color",h())),f})()}),null),k(l,()=>v().description??"",null),l}}),null),k(a,F(S,{get when(){return!e().has("Usage")},get children(){const l=B.cloneNode(!0);return k(l,()=>v().usage??""),l}}),null),k(a,F(S,{get when(){return!e().has("Piece Mark")},get children(){const l=B.cloneNode(!0);return k(l,()=>v().pieceMark??""),l}}),null),k(a,F(S,{get when(){return!e().has("Specifications")},get children(){const l=B.cloneNode(!0);return k(l,()=>v().variationDescription??""),l}}),null),k(a,F(S,{get when(){return!e().has("Notes")},get children(){const l=B.cloneNode(!0);return k(l,()=>v().notes),l}}),null),k(a,F(S,{get when(){return!e().has("User Notes To Supplier")},get children(){return B.cloneNode(!0)}}),null),k(a,F(S,{get when(){return!e().has("Weight")},get children(){return B.cloneNode(!0)}}),null),k(a,F(S,{get when(){return!e().has("Cost Per Unit")},get children(){const l=B.cloneNode(!0);return k(l,()=>v().cost_per_unit??""),l}}),null),k(a,F(S,{get when(){return!e().has("Unit")},get children(){const l=B.cloneNode(!0);return k(l,()=>v().unit??""),l}}),null),k(a,F(S,{get when(){return!e().has("Total Cost")},get children(){const l=B.cloneNode(!0);return k(l,t),l}}),null),a})()}})),r})()};async function xt(C){for(let e of C)if(e.cost_per_unit==null&&e.description!=null){let r=await be(e.description);if(r!=null)switch(e.cost_per_unit=r.price,r.unit){case"EACH":e.unit="/ea";break;case"MTR":e.unit="/m";break}}}function wt(C,e,r,o){let m={},i=[];for(let v of C)for(i.push(v);;){let t=i.pop();if(t==null)break;if(t.children!=null)for(let z of t.children())t.usage!=null&&(z=new Q({...z,usage:t.usage})),i.push(z);if(t.itemName==null)continue;let a;if(e==null||t.hasLabel==null||!t.hasLabel())a="--";else{let z=e.lookupLabelForComponent(t);z==null?a="--":a=z}let l;t.itemMarkColour!=null?l=t.itemMarkColour()??"--":l="--";let h;t.length==null?h="--":h=Math.round(t.length()).toFixed(0)+" mm";let f;t.openingProperties==null?f=void 0:f=t.openingProperties().modelName;let P;f==null?P="":P="_"+f;let b;t.description==null?b="":b="_"+t.description();let Y=t.itemName()+"_"+a+"_"+l+"_"+P+"_"+b+"_"+h,_=m[Y];if(_==null){let z=new Map;t.usage!=null&&z.set(t.usage(),t.qty==null?1:t.qty());let T;e==null||t.hasLabel==null||!t.hasLabel()?T=void 0:T=e.lookupLabelForComponent(t),m[Y]={itemName:t.itemName(),label:T,colourMark:t.itemMarkColour!=null?t.itemMarkColour():void 0,modelName:f,qty:t.qty==null?1:t.qty(),description:t.description==null?"":t.description(),usage:z,length:t.length==null?void 0:Math.round(t.length()),fixedCost:t.fixedCost==null?void 0:t.fixedCost()}}else if(_.qty+=t.qty==null?1:t.qty(),t.usage!=null){let z=_.usage.get(t.usage())??0;_.usage.set(t.usage(),z+(t.qty==null?1:t.qty()))}}let y=[];for(let v in m){let t=m[v];t.label;let a="";{let f=!0;for(let[P,b]of t.usage)f?f=!1:a+="; ",a+=P+" ("+b+")"}t.description!=""&&(a==""?a=t.description:a=t.description+" - "+a);let l,h;t.fixedCost!=null?(l=t.fixedCost.cost,h=t.fixedCost.unit):r!=null&&(t.itemName.match(/^C[0-9]+$/)?(l=r.lookupCeePrice(t.itemName,o),h="/m"):t.itemName.match(/^C[0-9]+ Channel$/)?(l=r.lookupChannelPrice(t.itemName,o),h="/m"):t.itemName.match(/^Corrugated [0-9]+\.[0-9]+$/)||t.itemName.match(/^Steelclad [0-9]+\.[0-9]+$/)?(l=r.lookupSheetingPrice(t.itemName,o),h="/m"):t.itemName.match(/^Strap Brace [0-9]+mm x [0-9]+\.[0-9]+mm$/)&&t.length!=null?(l=r.lookupStrapPrice(t.itemName,t.length,o),h="/ea"):t.itemName.match(/^Tek Screw Hex W\/seal [0-9]+x[0-9]+ Colorbond$/)?(l=r.lookupFastenerPrice(t.itemName,o),h="/ea"):t.itemName.match(/^Quad Gutter 0.42 125mm Slotted$/)?(l=r.lookupTrimEavePrice(t.itemName,o),h="/ea"):t.itemName.match(/^Quad Stop End (Left|Right) Colorbond$/)?(l=r.lookupTrimMiscellaneousPrice(t.itemName,o),h="/ea"):t.itemName.match(/^Quad Bkt Internal$/)||t.itemName.match(/^Quad Gutter Overstraps$/)?(l=r.lookupTrimGutterStrapPrice(t.itemName,o),h="/ea"):t.itemName.match(/^Flashing - Barge .*$/)?(l=r.lookupTrimRakePrice(t.itemName,o),h="/m"):t.itemName.match(/^Flashing - Corner .*$/)?(l=r.lookupTrimCornerPrice(t.itemName,o),h="/m"):t.itemName.match(/^Flashing - \"L\".*$/)||t.itemName.match(/^Flashing - \"J\".*$/)?(l=r.lookupTrimHeadJambPrice(t.itemName,o),h="/m"):t.itemName.match(/^Flashing - Opening 75 x 115mm$/)?(l=r.lookupTrimAnglePrice(t.itemName,o),h="/m"):t.itemName.match(/^14-24 X 38 CL4 Fine Hex Series 500 SDS$/)||t.itemName.match(/^14 X 20 X 22 Hex Tek No Neo B8 CI 4$/)||t.itemName.match(/^50mm Multi Purpose Roof Screw Colorbond$/)?(l=r.lookupFastenerPrice(t.itemName,o),h="/ea"):t.itemName.match(/^Powers PTB-PRO M12 x 120mm embedded 91mm$/)?(l=r.lookupFastenerAnchorBoltsPrice(t.itemName,o),h="/ea"):t.itemName.match(/^H[0-9]+xW[0-9]+ ROW$/)&&t.modelName!=null&&(l=r.lookupRollerDoorPrice(t.itemName,t.modelName,o),h="/ea")),y.push({orderCode:t.itemName,colourMark:t.colourMark,description:t.itemName,quantity:t.qty,length:t.length,usage:a,pieceMark:t.label,cost_per_unit:l,unit:h})}return y.sort((v,t)=>{let a;return v.orderCode==null?t.orderCode==null?a=0:a=-1:t.orderCode==null?a=1:a=v.orderCode.localeCompare(t.orderCode),a!=0?a:v.length==null?t.length==null?0:-1:t.length==null?1:v.length-t.length}),y}export{$ as C,ht as G,vt as O,q as R,mt as S,ut as a,xt as b,wt as c,pt as d,gt as e,ft as f,ct as g,yt as t,dt as v};
