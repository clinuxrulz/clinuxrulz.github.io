import{a as n}from"./index.c6da8adc.js";import{b as l,T as g,Q as f}from"./Component.d2f17f7a.js";import{V as w,a as r}from"./Vec3.ce1f4f7a.js";import{L as I}from"./Line2D.139781b3.js";import{F as v,C as ie}from"./PropertiesForm.9314d512.js";class F{constructor(e){let a=n(()=>Math.cos(e.frontBackCutAngle()*Math.PI/180)),b=n(()=>Math.sin(e.frontBackCutAngle()*Math.PI/180)),s=n(()=>Math.cos(e.backBackCutAngle()*Math.PI/180)),W=n(()=>Math.sin(e.backBackCutAngle()*Math.PI/180)),M=n(()=>e.flatProperties().thickness/a()),N=n(()=>e.flatProperties().thickness/s()),P=n(()=>{let t;return e.frontBackCutAngle()>0?t=e.width()*Math.tan(e.frontBackCutAngle()*Math.PI/180):t=0,w.create(M()+t,0)}),k=n(()=>{let t;return e.backBackCutAngle()>0?t=e.width()*Math.tan(e.backBackCutAngle()*Math.PI/180):t=0,w.create(e.length()-N()-t,0)}),p=n(()=>{let t;return e.frontBackCutAngle()<0?t=e.width()*Math.tan(-e.frontBackCutAngle()*Math.PI/180):t=0,w.create(M()+t,e.width())}),C=n(()=>{let t;return e.backBackCutAngle()<0?t=e.width()*Math.tan(-e.backBackCutAngle()*Math.PI/180):t=0,w.create(e.length()-N()-t,e.width())}),O=n(()=>I.create(P(),k())),L=n(()=>I.create(C(),p())),U=n(()=>I.create(p(),P()));const T=n(()=>I.create(k(),C())),y=()=>100,x=()=>80,u=n(()=>Math.max(P().x,p().x)+y()),d=n(()=>Math.min(k().x,C().x)-y()),H=n(()=>{let t=Math.floor((d()-u()+x())/e.width());return e.backBackCutAngle()>0&&(t&1)!=0&&(t+=1),t}),D=n(()=>{let i=(d()-u())/H(),S=[];for(let m=0;m<H();++m){let Z=u()+m*i+.5*x(),re=u()+(m+1)*i-.5*x(),G,j;(m&1)==0?(G=0,j=e.width()):(G=e.width(),j=0);let J=w.create(Z,G),_=w.create(re,j),Y=_.sub(J).normalize(),$=w.create(-Y.y,Y.x),ee=.5*e.webMemberProperties().flangeSize/Math.abs($.y),te=$.scale(-.5*e.webMemberProperties().flangeSize);S.push(I.create(J.add(Y.scale(ee)).add(te),_.sub(Y.scale(ee)).add(te)))}return S}),B=(t,i)=>{let S=t.v2.sub(t.v1).normalize();w.create(-S.y,S.x);let m=t.v1,Z=t.length();return new l({transform:()=>g.create(r.create(m.x,0,m.y),f.fromUV(r.create(S.x,0,S.y),r.create(0,1,0))),length:()=>Z,itemName:()=>i.itemName,ceeProperties:()=>ie.create({webSize:i.webSize,flangeSize:i.flangeSize,lipSize:i.lipSize,thickness:i.thickness,webHoleDistApart:0})})},E=n(()=>B(O(),e.nestingMemberProperties())),V=n(()=>B(L(),e.nestingMemberProperties())),q=n(()=>B(U(),e.nestingMemberProperties())),R=n(()=>B(T(),e.nestingMemberProperties())),z=n(()=>D().map(t=>()=>B(t,e.webMemberProperties())));let h=n(()=>e.nestingMemberProperties().webSize+100),Q=n(()=>{let t=a(),i=b();return new l({itemName:()=>e.flatProperties().itemName,length:h,flatProperties:()=>new v({width:e.flatProperties().width,thickness:e.flatProperties().thickness}),transform:()=>g.create(r.create(P().x,.5*(h()+e.nestingMemberProperties().webSize),0),f.fromUV(r.negUnitY,r.create(-i,0,t)))})}),K=n(()=>{let t=a(),i=b();return new l({itemName:()=>e.flatProperties().itemName,length:()=>h(),flatProperties:()=>new v({width:e.flatProperties().width,thickness:e.flatProperties().thickness}),transform:()=>g.create(r.create(p().x,.5*(e.nestingMemberProperties().webSize-h()),e.width()),f.fromUV(r.unitY,r.create(i,0,-t)))})}),X=n(()=>{let t=s(),i=W();return new l({itemName:()=>e.flatProperties().itemName,length:()=>h(),flatProperties:()=>new v({width:e.flatProperties().width,thickness:e.flatProperties().thickness}),transform:()=>g.create(r.create(k().x,.5*(e.nestingMemberProperties().webSize-h()),0),f.fromUV(r.unitY,r.create(i,0,t)))})}),o=n(()=>{let t=s(),i=W();return new l({itemName:()=>e.flatProperties().itemName,length:()=>h(),flatProperties:()=>new v({width:e.flatProperties().width,thickness:e.flatProperties().thickness}),transform:()=>g.create(r.create(C().x,.5*(h()+e.nestingMemberProperties().webSize),e.width()),f.fromUV(r.negUnitY,r.create(-i,0,-t)))})});const c=n(()=>z().length*2+4),A=n(()=>new l({itemName:()=>"Weld Labour",qty:()=>c()}));this.params=e,this.components=n(()=>{let t=[];t.push(E(),V(),q(),R(),A(),Q(),K(),X(),o());for(let i of z())t.push(i());return t})}}class be{constructor(e){let a=n(()=>e.pitch()*Math.PI/180),b=n(()=>Math.cos(a())),s=n(()=>Math.sin(a())),W=n(()=>Math.tan(a())),M=n(()=>.5*(90+e.pitch())-e.pitch()),N=e.pitch,P=n(()=>e.height()+e.girtHeight()*W()-e.purlinHeight()/b()),k=new F({length:P,width:e.webMemberWidth,frontBackCutAngle:()=>0,backBackCutAngle:M,nestingMemberProperties:e.nestingMemberProperties,webMemberProperties:e.webMemberProperties,flatProperties:e.flatProperties}),p=n(()=>g.create(r.create(e.webMemberWidth()+e.girtHeight(),0,0),f.fromUV(r.unitZ,r.unitY))),C=new F({length:P,width:e.webMemberWidth,frontBackCutAngle:()=>0,backBackCutAngle:M,nestingMemberProperties:e.nestingMemberProperties,webMemberProperties:e.webMemberProperties,flatProperties:e.flatProperties}),O=n(()=>g.create(r.create(e.span()-e.webMemberWidth()-e.girtHeight(),e.nestingMemberProperties().webSize,0),f.fromUV(r.unitZ,r.negUnitY))),L=n(()=>(.5*e.span()-e.girtHeight())/b()),U=new F({length:L,width:e.webMemberWidth,frontBackCutAngle:M,backBackCutAngle:N,nestingMemberProperties:e.nestingMemberProperties,webMemberProperties:e.webMemberProperties,flatProperties:e.flatProperties}),T=n(()=>g.create(r.create(e.girtHeight()+e.webMemberWidth()*s(),0,e.height()+(e.webMemberWidth()*s()+e.girtHeight())*W()-(e.webMemberWidth()+e.purlinHeight())/b()),f.fromUV(r.create(b(),0,s()),r.unitY))),y=new F({length:L,width:e.webMemberWidth,frontBackCutAngle:M,backBackCutAngle:N,nestingMemberProperties:e.nestingMemberProperties,webMemberProperties:e.webMemberProperties,flatProperties:e.flatProperties}),x=n(()=>g.create(r.create(e.span()-e.girtHeight()-e.webMemberWidth()*s(),e.nestingMemberProperties().webSize,e.height()+(e.webMemberWidth()*s()+e.girtHeight())*W()-(e.webMemberWidth()+e.purlinHeight())/b()),f.fromUV(r.create(-b(),0,s()),r.negUnitY)));const u=(o,c)=>n(()=>o().map(A=>{let t=A;if(t.transform==null)return t;let i=t.transform;return{...t,transform:()=>c().fromThisSpace(i())}})),d=(o,c)=>n(()=>o().map(A=>({...A,usage:c})));let H=d(u(k.components,p),()=>"Column"),D=d(u(C.components,O),()=>"Column"),B=d(u(U.components,T),()=>"Rafter"),E=d(u(y.components,x),()=>"Rafter"),V=()=>4,q=()=>"M12x30 Bolt",R=()=>"M12 Nut",z=()=>"M12 Washer Round",h=n(()=>{let o=2*V(),c=V();return[new l({itemName:q,qty:()=>o,usage:()=>"Knee"}),new l({itemName:R,qty:()=>o,usage:()=>"Knee"}),new l({itemName:z,qty:()=>o,usage:()=>"Knee"}),new l({itemName:q,qty:()=>c,usage:()=>"Apex"}),new l({itemName:R,qty:()=>c,usage:()=>"Apex"}),new l({itemName:z,qty:()=>c,usage:()=>"Apex"})]}),Q=()=>4,K=()=>"M16 Chemset Studbolt",X=n(()=>{let o=2*Q();return new l({itemName:K,qty:()=>o,usage:()=>"Column"})});this.components=n(()=>{let o=[];o.push(X());let c=[H(),D(),B(),E(),h()];for(let A of c)for(let t of A)o.push(t);return o}),this.columns=()=>[k,C],this.rafters=()=>[U,y]}}export{be as O};