import{E as I,_,l as b,a2 as y,c as h,o as G,a3 as O,a4 as g,w as m,x as D,K as u,b as s,M as w,a as T,p as j,q as A,a5 as E,a6 as x,g as N,d as C}from"./index.57d3a8cf.js";import M from"./RestrictedAreaLogin.c179ca03.js";const P=I(()=>_(()=>import("./GeneralDesigner.233e21aa.js"),["GeneralDesigner.233e21aa.js","index.57d3a8cf.js","index.540c585d.css","three.module.b542931e.js","Plane3D.472a05fa.js","Vec3.ce1f4f7a.js","Ray3D.5e4c723f.js","PanelUtils.ef4e9277.js","Line2D.139781b3.js","Ray2D.01cdc921.js","Component.12bca87e.js","PropertiesSchema.5f45c645.js","PropertiesForm.e1e7efea.js","three_js_component_renderer.77f1f1a9.js","LockerShed.d039cc2c.js","FlatProperties.4536c8e7.js","components_to_order_lines.39df2ebe.js","utils.019ddcf3.js","Labeler.42ece7e8.js","utils.27b742e5.js","DrawLinesMode.4df95057.js","Transform2D.200bb15c.js","SvgWithPanZoomState.de5738ee.js","StandardBorderLandscapeDoc.cf872f33.js","MezzanineFloor.f54ada51.js","GableTruss.ae1436e4.js","HexagonalFirePit.0f04cefa.js","OpenWebColumnRafterSection.eae4cc1f.js","Fascia.91e92b8f.js","WeldedUBColumnRafterSection.9aa1f3b4.js","ad_components.0e29b88d.js","DocumentsView.56c04a64.js","DocumentView.cb3ebc8e.js","FrameDrawingDoc.18c96cc6.js","ColladaExporter.cb15d293.js","Dialog.7c1c7104.js"],import.meta.url)),z=I(()=>_(()=>import("./GeneralDesignerScenesOverview.15382b46.js"),["GeneralDesignerScenesOverview.15382b46.js","index.57d3a8cf.js","index.540c585d.css"],import.meta.url)),R=l=>{const[S,p]=b(void 0);(async()=>{let a=await y();p(a)})();let[t,r]=h();return G(()=>{l.onInit&&l.onInit({open:async a=>{let e=(await O()).find(({filename:v})=>v==a);if(e==null){alert("File `"+a+"` not found.");return}let o=await g({objectId:e.objectId}),c=m(o),f=D(c),d=new TextDecoder().decode(f),n=JSON.parse(d);r("openedScene",u({file:{objectId:e.objectId,filename:e.filename,initData:n}}))}})}),s(C,{get children(){return[s(w,{get when(){return S()==!0},get children(){return T(()=>{let a=t.openedScene;return a==null?s(z,{get onClose(){return l.onClose},onNew:()=>{r("openedScene",u({}))},onOpen:async(i,e)=>{let o=await g({objectId:i}),c=m(o),f=D(c),d=new TextDecoder().decode(f),n=JSON.parse(d);r("openedScene",u({file:{objectId:i,filename:e,initData:n}}))}}):s(P,{get rootDiv(){return l.rootDiv},onInit:({load:i})=>{if(t.openedScene==null||t.openedScene.file==null)return;let e=t.openedScene.file.initData;e!=null&&(i(e),r("openedScene","file","initData",void 0))},onClose:()=>r("openedScene",void 0),onSave:async i=>{if(t.openedScene==null)return;let e=t.openedScene.file?.filename;if(e==null){let n=window.prompt("Please enter a filename:");if(n==null)return;e=n}let o=JSON.stringify(i),c=new TextEncoder().encode(o),f=j(c),d=A(f);if(t.openedScene.file==null){let{objectId:n}=await E({filename:e,data:d});r("openedScene","file",{objectId:n,filename:e}),alert("Save successful")}else{let n=await x({objectId:t.openedScene.file.objectId,data:d});alert(n.type=="success"?"Save successful":n.message)}},get filename(){return a.file?.filename??"Untitled"}})})}}),s(w,{get when(){return S()==!1},get children(){return s(M,{onSiteIn:()=>{N(()=>{l.setSignedIn(!0),p(!0)})}})}})]}})};export{R as default};