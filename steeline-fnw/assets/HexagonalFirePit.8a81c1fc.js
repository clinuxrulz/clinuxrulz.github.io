import{a as e,z as V}from"./index.9f620141.js";import{G as q,g as G,h as z,i as T,k as j,L as A,j as E,l as F}from"./three.module.b542931e.js";import{T as k,Q as D,C as f}from"./Component.12bca87e.js";import{V as r,a as d}from"./Vec3.ce1f4f7a.js";class R{constructor(n){let g=e(()=>({plate:new I({outline:e(()=>{let t=n.baseDiameter(),l=[];for(let i=0;i<6;++i){let c=2*Math.PI*i/6;l.push(r.create(Math.cos(c)*.5*t,Math.sin(c)*.5*t))}return l}),thickness:()=>4}),space:e(()=>k.create(d.create(0,0,n.baseHeight()),D.identity))})),o=e(()=>new f({children:g().plate.components,transform:g().space})),m=e(()=>{let t=n.baseDiameter(),l=[],i;i=new I({outline:e(()=>{let a=n.baseDiameter()*Math.cos(Math.PI/3),s=n.diameter()*Math.cos(Math.PI/3),h;{let p=.5*(n.diameter()-n.baseDiameter())*Math.sin(Math.PI/3),M=n.headHeight()-n.baseHeight();h=Math.sqrt(p*p+M*M)}return[r.create(0,0),r.create(a,0),r.create(a+.5*(s-a),h),r.create(-.5*(s-a),h)]}),thickness:()=>4});let c;{let a=.5*(n.diameter()-n.baseDiameter())*Math.sin(Math.PI/3),s=n.headHeight()-n.baseHeight(),h=Math.sqrt(a*a+s*s);c=r.create(a/h,s/h)}for(let a=0;a<6;++a){let s=2*Math.PI*a/6,h=2*Math.PI*(a+1)/6,p=Math.cos(s)*.5*t,M=Math.sin(s)*.5*t,x=Math.cos(h)*.5*t,C=Math.sin(h)*.5*t,H=d.create(x-p,C-M,0).normalize(),S=d.create(H.y*c.x,-H.x*c.x,c.y);l.push({plate:i,space:e(()=>k.create(d.create(p,M,n.baseHeight()),D.fromUV(H,S)))})}return l}),b=e(()=>m().map(({plate:t,space:l})=>new f({children:t.components,transform:l}))),u=e(()=>{let t=n.legPitch()*Math.PI/180,l=Math.cos(t),i=Math.sin(t),c=new I({outline:e(()=>[r.zero,r.create(100,0),r.create(100+150*l,150*i),r.create(230*l,230*i)]),thickness:()=>4}),a=[],s=.5*n.baseDiameter()+100+150*l;for(let h=0;h<6;++h){let p=2*Math.PI*h/6,M=Math.cos(p),x=Math.sin(p),C=k.create(d.create(M*s,x*s,4),D.fromUV(d.create(-M,-x,0),d.unitZ));a.push({plate:c,space:()=>C})}return a}),w=e(()=>u().map(({plate:t,space:l})=>new f({children:t.components,transform:l}))),P=e(()=>{let t=new I({outline:e(()=>[r.zero,r.create(40,0),r.create(40,140),r.create(0,140)]),thickness:()=>4});return u().map(({space:l})=>({plate:t,space:e(()=>{let i=l().o,c=l().u,a=l().w;return k.create(i.sub(a.scale(.5*40)).add(c.scale(.5*100-.5*140)).sub(d.create(0,0,4)),D.fromWU(d.unitZ,a))})}))}),y=e(()=>P().map(({plate:t,space:l})=>new f({children:t.components,transform:l})));this.components=e(()=>[o(),...b(),...w(),...y()]),this.totalPlateArea=e(()=>[g(),...m(),...u(),...P()].reduce((t,l)=>t+l.plate.plateArea(),0)),this.allocateLabels=t=>{},this.mkPlatesForDoc=t=>e(()=>[e(()=>({label:"Base Plate",quantity:1,outline:g().plate.outline()})),e(()=>({label:"Side Plate",quantity:6,outline:m()[0].plate.outline()})),e(()=>({label:"Leg Plate",quantity:6,outline:u()[0].plate.outline()})),e(()=>({label:"Feet",quantity:6,outline:P()[0].plate.outline()}))])}}class I{constructor(n){let g=e(()=>new f({mkObject3d:e(()=>{let o=n.outline();if(o.length<3)return()=>new q;let m=n.thickness();return b=>{let u=.001,w=new G;w.moveTo(o[0].x*u,o[0].y*u);for(let s=1;s<o.length;++s)w.lineTo(o[s].x*u,o[s].y*u);w.closePath();let P=new z(w,{bevelEnabled:!1,depth:m*u}),y=new T({color:"#808080"}),t=new j(P),l=new A({color:"black"});V(()=>{P.dispose(),y.dispose(),t.dispose(),l.dispose()});let i=new E(P,y),c=new F(t,l),a=new q;return a.add(i),a.add(c),a}})}));this.outline=n.outline,this.components=e(()=>[g()]),this.plateArea=e(()=>{let o=n.outline(),m=0;for(let b=0;b<o.length;++b){let u=(b+1)%o.length;m+=o[b].cross(o[u])}return .5*Math.abs(m)/1e6})}}export{R as H};