import{o as Z,c as C,a as O,z as j,i as U,b as E,M as B,d as G,I as A,e as F,s as _,f as H,t as L,g as X,H as Y,u as q}from"./index.712cfb61.js";import{L as D}from"./Line2D.139781b3.js";import{V as I,a as K}from"./Vec3.ce1f4f7a.js";import{m as J,a as Q,S as ee}from"./SvgWithPanZoomState.0437024a.js";import{P as W}from"./Plane3D.472a05fa.js";import{R as N}from"./Ray3D.5e4c723f.js";import"./Ray2D.01cdc921.js";const te=z=>{let w={ridges:[],debugSplit:[]},n=[];const x=(u,t,v)=>{let h=t.sub(u).normalize(),o=K.create(-h.y,h.x,1).normalize(),g=h.toVec3().cross(o),l=v.sub(t).normalize(),e=K.create(-l.y,l.x,1).normalize(),r=l.toVec3().cross(e),f=g.cross(r).normalize();return h.cross(l)<0&&(f=f.scale(-1)),f};for(let u=0;u<z.length;++u){let t=(u+z.length-1)%z.length,v=(u+1)%z.length,i=z[t],h=z[u],o=z[v],g=x(i,h,o),a=N.create(h.toVec3(),g);n.push({ray:a})}for(let u=0;u<n.length;++u){let t=(u+n.length-1)%n.length,v=(u+1)%n.length,i=n[u];i.left=n[t],i.right=n[v]}let k=[n],R=500;for(let u=0;u<R;++u){let t;for(let v=0;v<k.length;++v){let i=k[v];for(let h=0;h<i.length;++h){let o=i[h],g=[o.left,o.right];for(let a of g){let l=a.ray.closestTimeOnThisRayWithOtherRay(o.ray);if(l!=null&&l>=-.001){let e=a.ray.positionFromTime(l),r=e.z;(t==null||r<t.height)&&(t={height:r,event:{type:"merge",vertex_list_index:v,vert1:o,vert2:a,newPt:e.xy()}})}}for(let a=0;a<i.length;++a){(a+1)%i.length;let l=i[a],e=l.right;if(l==o||e==o)continue;let r;{let m=l.ray.direction.xy(),p=I.create(-m.y,m.x).normalize(),s=W.fromKnownPtAndNormal(l.ray.origin,p.toVec3());s.n.dot(e.ray.origin)+s.d<0&&(s=W.fromKnownPtAndNormal(l.ray.origin,s.n.scale(-1))),r=s}let f;{let m=e.ray.direction.xy(),p=I.create(-m.y,m.x).normalize(),s=W.fromKnownPtAndNormal(e.ray.origin,p.toVec3());s.n.dot(l.ray.origin)+s.d<0&&(s=W.fromKnownPtAndNormal(e.ray.origin,s.n.scale(-1))),f=s}let b=l.ray.direction.cross(e.ray.direction).normalize();if(o.ray.direction.dot(b)<=.001)continue;let M=W.fromKnownPtAndNormal(l.ray.origin,b),$=o.ray.collisionTimeWithPlane(M);if($!=null&&$>-.001){let m=o.ray.positionFromTime($);if(r.n.dot(m)+r.d<.001||f.n.dot(m)+f.d<.001)continue;let p=m.z;if(p==0)continue;{let s=l.ray.origin.add(l.ray.direction.scale((m.z-l.ray.origin.z)/l.ray.direction.z)),d=e.ray.origin.add(e.ray.direction.scale((m.z-e.ray.origin.z)/e.ray.direction.z)),y=d.sub(s),c=m.sub(s).dot(d.sub(s))/y.dot(y);if(c<0||c>1)continue}if((t==null||p<t.height-.001)&&(t={height:p,event:{type:"split",vertex_list_index:v,leftVert:l,midVert:o,rightVert:e,newPt:m.xy()}},w.debugSplit.length==0))for(let s=0;s<i.length;++s){let d=i[s],y=d.ray.origin.add(d.ray.direction.scale((p-d.ray.origin.z)/d.ray.direction.z)).xy();d=d.right;let c=d.ray.origin.add(d.ray.direction.scale((p-d.ray.origin.z)/d.ray.direction.z)).xy();w.debugSplit.push(D.create(y,c))}}}}}if(t==null)break;switch(t.event.type){case"merge":{let v=k[t.event.vertex_list_index],i,h;t.event.vert1.left==t.event.vert2?(i=t.event.vert2,h=t.event.vert1):(i=t.event.vert1,h=t.event.vert2);for(let $=v.length-1;$>=0;--$)if(v[$]==h){v.splice($,1);break}i.right=h.right,i.left==h&&(i.left=i),i.right==h&&(i.right=i),i.left.right=i,i.right.left=i;let o=i.ray.closestTimeOnThisRayWithOtherRay(h.ray);if(o==null)continue;let g=i.ray.positionFromTime(o),a=i.left,l=i.right,e=a.ray.positionFromTime((g.z-a.ray.origin.z)/a.ray.direction.z).xy(),r=l.ray.positionFromTime((g.z-l.ray.origin.z)/l.ray.direction.z).xy(),f=x(e,g.xy(),r),b=i.ray,M=h.ray;i.ray=N.create(g,f),w.ridges.push(D.create(b.origin.xy(),i.ray.origin.xy())),w.ridges.push(D.create(M.origin.xy(),i.ray.origin.xy()));break}case"split":{let v=k[t.event.vertex_list_index],i;{let o=t.event.midVert.left,g=t.event.midVert,a=t.event.rightVert,l=o.ray.origin.add(o.ray.direction.scale((t.height-o.ray.origin.z)/o.ray.direction.z)),e=g.ray.origin.add(g.ray.direction.scale((t.height-g.ray.origin.z)/g.ray.direction.z)),r=a.ray.origin.add(a.ray.direction.scale((t.height-a.ray.origin.z)/a.ray.direction.z));i=x(l.xy(),e.xy(),r.xy())}let h;{let o=t.event.leftVert,g=t.event.midVert,a=t.event.midVert.right,l=o.ray.origin.add(o.ray.direction.scale((t.height-o.ray.origin.z)/o.ray.direction.z)),e=g.ray.origin.add(g.ray.direction.scale((t.height-g.ray.origin.z)/g.ray.direction.z)),r=a.ray.origin.add(a.ray.direction.scale((t.height-a.ray.origin.z)/a.ray.direction.z));h=x(l.xy(),e.xy(),r.xy())}for(let o=0;o<v.length;++o)if(v[o]==t.event.midVert){let g=t.event.newPt.toVec3().add(K.create(0,0,t.height)),a=N.create(g,i),l=N.create(g,h),e={ray:a,left:t.event.midVert.left,right:t.event.rightVert},r={ray:l,left:t.event.leftVert,right:t.event.midVert.right};e.left.right=e,e.right.left=e,r.left.right=r,r.right.left=r,v.splice(o,1,e,r),w.ridges.push(D.create(t.event.midVert.ray.origin.xy(),g.xy()));for(let f=0;f<v.length;++f){let b=v[f];b.id=f}break}break}}}return w},re=L("<b>Draw Edge Mode:</b>"),ie=L('<div style="flex-grow: 1; display: flex; flex-direction: column;"><div><h2>Straight Edge Skeleton Test</h2><br><button type="button" class="btn btn-primary" style="margin-left: 5px; margin-bottom: 5px">Draw Edge</button><br></div><div style="flex-grow: 1; display: flex; flex-direction: row;"><div style="flex-grow: 1;"></div></div></div>'),ne=L('<svg><line stroke="black"></line></svg>',4,!0),oe=L('<svg><line stroke="red"></line></svg>',4,!0),le=L('<svg><line stroke="#A0FFA0"></line></svg>',4,!0),he=z=>{Z(()=>{document.title="Tool Box - Straight Edge Test"});let w;const[n,x]=C({vertices:[],skeleton:{ridges:[],debugSplit:[]}}),[k,R]=C(J()),u=()=>{X(()=>{x("vertices",[]),x("skeleton","ridges",[]),x("skeleton","debugSplit",[]),x("mode",Y({type:"DrawingEdge"}))})},t=O(()=>n.mode!=null&&n.mode.type=="DrawingEdge");let v=new Q({state:k,setState:R,disablePan:t});const i=e=>{n.mode?.type=="DrawingEdge"&&x("vertices",r=>n.mode?.nextPt==null?r:[...r,n.mode?.nextPt]),v.onMouseDown(e)},h=e=>{v.onMouseUp(e)},o=e=>{if(n.mode?.type=="DrawingEdge"){let r=v.screenPtToWorldPt(e.offsetX,e.offsetY);x("mode","nextPt",I.create(r.x,r.y))}v.onMouseMove(e)},g=e=>{v.onWheel(e)},a=e=>{if(e.key=="Escape"&&(n.mode!=null&&x("mode",void 0),n.vertices.length>2)){let r=te(n.vertices);x("skeleton",r)}};Z(()=>{document.addEventListener("keydown",a)}),j(()=>{document.removeEventListener("keydown",a)});const l=O(()=>{let e=[];for(let r=0;r<n.vertices.length-1;++r)e.push(D.create(n.vertices[r],n.vertices[r+1]));if(n.mode?.type=="DrawingEdge"){if(n.mode?.nextPt!=null&&n.vertices.length>0){let r=n.vertices[n.vertices.length-1],f=n.mode.nextPt;e.push(D.create(r,f))}}else if(n.vertices.length>2){let r=n.vertices[n.vertices.length-1],f=n.vertices[0];e.push(D.create(r,f))}return e});return(()=>{const e=ie.cloneNode(!0),r=e.firstChild,f=r.firstChild,b=f.nextSibling,M=b.nextSibling;M.nextSibling;const $=r.nextSibling,m=$.firstChild;M.$$click=()=>u(),U(r,E(G,{get children(){return E(B,{get when(){return n.mode?.type=="DrawingEdge"},get children(){return re.cloneNode(!0)}})}}),null);const p=w;return typeof p=="function"?q(p,m):w=m,U(m,E(ee,{showGrid:!0,fontSize:12,state:k,onMouseDown:i,onMouseUp:h,onMouseMove:o,onWheel:g,style:{width:"100%",height:"100%"},get children(){return[E(A,{get each(){return l()},children:s=>(()=>{const d=ne.cloneNode(!0);return F(y=>{const c=s().v1.x,P=-s().v1.y,V=s().v2.x,S=-s().v2.y;return c!==y._v$&&_(d,"x1",y._v$=c),P!==y._v$2&&_(d,"y1",y._v$2=P),V!==y._v$3&&_(d,"x2",y._v$3=V),S!==y._v$4&&_(d,"y2",y._v$4=S),y},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),d})()}),E(A,{get each(){return n.skeleton.ridges},children:s=>{let d=s();return(()=>{const y=oe.cloneNode(!0);return F(c=>{const P=d.v1.x,V=-d.v1.y,S=d.v2.x,T=-d.v2.y;return P!==c._v$5&&_(y,"x1",c._v$5=P),V!==c._v$6&&_(y,"y1",c._v$6=V),S!==c._v$7&&_(y,"x2",c._v$7=S),T!==c._v$8&&_(y,"y2",c._v$8=T),c},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),y})()}}),E(A,{get each(){return n.skeleton.debugSplit},children:s=>{let d=s();return(()=>{const y=le.cloneNode(!0);return F(c=>{const P=d.v1.x,V=-d.v1.y,S=d.v2.x,T=-d.v2.y;return P!==c._v$9&&_(y,"x1",c._v$9=P),V!==c._v$10&&_(y,"y1",c._v$10=V),S!==c._v$11&&_(y,"x2",c._v$11=S),T!==c._v$12&&_(y,"y2",c._v$12=T),c},{_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),y})()}})]}})),e})()};H(["click"]);export{he as default};