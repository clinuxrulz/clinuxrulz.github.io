import{a as R}from"./index.0b945867.js";import{L as K,P as z}from"./Line2D.139781b3.js";import{C as O,T as W,Q as H}from"./Component.12bca87e.js";import{R as D}from"./Ray2D.01cdc921.js";import{V as g,a as M}from"./Vec3.ce1f4f7a.js";import{r as I}from"./Kit.83bb2569.js";import{h as E,Z as Y,T as Z,k as Q,l as j}from"./PropertiesForm.efed0ea8.js";class q{constructor(){this.typeName="ProfileMemberKit",this.displayName="Profile Member",this.propertiesSchema={itemName:{displayName:"Item Name",typeSchema:{type:"String"},defaultValue:""},length:{displayName:"Length",typeSchema:{type:"Number"},defaultValue:1e3},frontBackCutAngle:{displayName:"Front Back Cut Angle",typeSchema:{type:"Number"},defaultValue:void 0},backBackCutAngle:{displayName:"Back Back Cut Angle",typeSchema:{type:"Number"},defaultValue:void 0},flangePunchDistFromWeb:{displayName:"Flange Dist From Web",typeSchema:{type:"MaybeUndefined",elemTypeSchema:{type:"Number"}},optional:!0,defaultValue:void 0},flangePunches:{displayName:"Flange Punches",typeSchema:{type:"MaybeUndefined",elemTypeSchema:{type:"Array",elemTypeSchema:{type:"Number"}}},optional:!0,defaultValue:void 0},webNotchRanges:{displayName:"Web Notch Ranges",typeSchema:{type:"MaybeUndefined",elemTypeSchema:{type:"Array",elemTypeSchema:{type:"Object",properties:{from:{displayName:"From",typeSchema:{type:"Number"},defaultValue:0},to:{displayName:"To",typeSchema:{type:"Number"},defaultValue:0}}}}},optional:!0,defaultValue:void 0},id:{displayName:"Id",typeSchema:{type:"MaybeUndefined",elemTypeSchema:{type:"String"}},optional:!0,defaultValue:void 0},localLabel:{displayName:"Local Label",typeSchema:{type:"MaybeUndefined",elemTypeSchema:{type:"String"}},optional:!0,defaultValue:void 0},usage:{displayName:"Usage",typeSchema:{type:"MaybeUndefined",elemTypeSchema:{type:"String"}},optional:!0,defaultValue:void 0}}}create(t,m,r,i,l){return new J(m,r,i,l)}}let F=new q;I(F);const G=F;class J{constructor(t,m,r,i){this.type=F,this.state=t,this.setState=m,this.kitsUserEdits=r,this.setKitsUserEdits=i;let l=a=>{if(a!=null){let f=a;return()=>f}};this.components=R(()=>[new O({itemName:()=>t.itemName,length:()=>t.length,ceeProperties:l(E[t.itemName]),zedProperties:l(Y[t.itemName]),topHatProperties:l(Z[t.itemName]),panelMemberProperties:l(Q[t.itemName]),shsProperties:l(j[t.itemName]),frontBackCutAngle:l(t.frontBackCutAngle),backBackCutAngle:l(t.backBackCutAngle),flangePunches:l(t.flangePunches),flangePunchDistFromWeb:l(t.flangePunchDistFromWeb),webNotchRanges:l(t.webNotchRanges),id:l(t.id),localLabel:l(t.localLabel),usage:l(t.usage)})])}}const ae=e=>e==null?[]:[e];function re(e){let t=e.dimpleLine;e.inverted&&(t=K.create(t.v2,t.v1));let m=t.v2.sub(t.v1).normalize(),r=g.create(-m.y,m.x),i=t.v1.sub(r.scale(e.profile.profile.dimpleDistFromWeb*(e.inverted?-1:1))),l=t.length(),a=R(()=>W.create(M.create(i.x,.5*(e.maxWebSize-e.profile.profile.webSize)*(e.inverted?-1:1)+(e.inverted?e.maxWebSize:0),i.y),H.fromUV(M.create(m.x,0,m.y),e.inverted?M.negUnitY:M.unitY)));return e.subKitCreator.mkKit({id:e.id,kitType:G,state:{itemName:()=>e.profile.itemName,length:()=>l,flangePunchDistFromWeb:()=>e.profile.profile.dimpleDistFromWeb,flangePunches:e.flangePunches,webNotchRanges:e.webNotchRanges,id:()=>e.componentId,localLabel:e.localLabel,usage:e.usage},space:a})()}const oe=(e,t,m)=>{let r=D.fromOriginDirection(e.v1,e.v2.sub(e.v1)),i=e.length(),l=[];for(let a of m){let f=z.fromPointToPoint(a.v1,a.v2),v=D.fromOriginDirection(a.v1,a.v2.sub(a.v1)),s=r.intersectionTime(f);if(s==null||s<0||s>1)continue;let p=r.pointFromTime(s),u=v.closestTimeToPoint(p);u<0||u>1||l.push(s*i)}if(t)for(let a=0;a<l.length;++a)l[a]=i-l[a];return l},ne=(e,t,m,r,i)=>{let l=e.v2.sub(e.v1),a=l.scale(1/l.length()),f=g.create(-a.y,a.x),v=e.v1.sub(f.scale(m.dimpleDistFromWeb)),s=e.length(),p=(o,c)=>{if(o.y<=0&&c.y>=0||c.y<=0&&o.y>=0){let y=o.x+(0-o.y)*(c.x-o.x)/(c.y-o.y);return Number.isFinite(y)?y:void 0}},u=[];for(let{dimpleLine:o,params:c}of r){let y=o.length(),x=c.flangeSize,V=o.v2.sub(o.v1),N=V.scale(1/V.length()),B=g.create(-N.y,N.x),k=o.v1.sub(B.scale(c.dimpleDistFromWeb)),w=g.create(k.sub(v).dot(a),k.sub(v).dot(f)),S=g.create(N.dot(a),N.dot(f)),L=g.create(-S.y,S.x),T=w,P=w.add(S.scale(y)),U=P.add(L.scale(x)),A=T.add(L.scale(x)),d=[],n=p(T,P);if(n!=null&&d.push(n),n=p(P,U),n!=null&&d.push(n),n=p(U,A),n!=null&&d.push(n),n=p(A,T),n!=null&&d.push(n),d.length<2)continue;let h=Math.max(0,Math.min(s,d[0])),b=Math.max(0,Math.min(s,d[0]));for(let C=1;C<d.length;++C)n=Math.max(0,Math.min(s,d[C])),n<h&&(h=n),n>b&&(b=n);b-h<.001||(h=Math.max(0,h-i),b=Math.min(s,b+i),u.push({from:h,to:b}))}if(t)for(let o=0;o<u.length;++o){let c=s-u[o].to,y=s-u[o].from;u[o].from=c,u[o].to=y}return u};function me(e,t,m){let r;m||t?e<=1600?r={type:"Boxed Stud"}:e<=2200?r={type:"Triple Stud"}:e<=3600?r={type:"Cee",itemName:"C20024"}:r={type:"Cee",itemName:"C25024"}:e<=3600?r={type:"Single Stud"}:r={type:"Boxed Stud"};let i;return m?e<=1900?i={type:"Trussed Header"}:e<=3600?i={type:"Cee",itemName:"C20024"}:i={type:"Cee",itemName:"C25024"}:t?e<=1600?i={type:"Single Plate"}:i={type:"Trussed Header"}:e<=1800?i={type:"Single Plate"}:i={type:"Trussed Header"},{studType:r,headType:i}}export{re as a,me as b,oe as d,ae as o,G as p,ne as w};