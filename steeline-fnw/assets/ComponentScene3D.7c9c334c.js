import{y,f as H,o as L,z as $,t as v,F as x,u as R}from"./index.c6da8adc.js";import{G as b,W as F,S as z,C as M,P as B,a as V,A as U}from"./Component.d2f17f7a.js";import{O as G}from"./OrbitControls.073eccf7.js";import{G as j}from"./GLTFExporter.213a5845.js";import{C as X}from"./PropertiesForm.9314d512.js";import{h as Y}from"./three_js_component_renderer.126df2dc.js";import"./Vec3.ce1f4f7a.js";import"./Component.56f38553.js";import"./Line3D.2b8117f1.js";const q=`ISO-10303-21;
HEADER;
FILE_DESCRIPTION((''),'2;1');
FILE_NAME('','2018-12-21T13:08:42',(''),(''),'BuildingSmart IfcKit by Constructivity','IfcDoc 12.0.0.0','');
FILE_SCHEMA(('IFC4'));
ENDSEC;
DATA;
#1= IfcProject('0xScRe4drECQ4DMSqUjd6d',#2,'proxy with tessellation',$,$,$,$,(#3),#4);
#2= IfcOwnerHistory(#6,#7,$,.ADDED.,1320688800,$,$,1320688800);
#3= IfcGeometricRepresentationContext($,'Model',3,1.0E-05,#8,$);
#4= IfcUnitAssignment((#10,#11));
#6= IfcPersonAndOrganization(#12,#13,$);
#7= IfcApplication(#13,'1.0','IFC text editor','ifcTE');
#8= IfcAxis2Placement3D(#14,$,$);
#9= IfcGeometricRepresentationSubContext('Body','Model',0,$,$,$,#3,$,.MODEL_VIEW.,$);
#10= IfcSIUnit($,.LENGTHUNIT.,.MILLI.,.METRE.);
#11= IfcConversionBasedUnit(#16,.PLANEANGLEUNIT.,'degree',#17);
#12= IfcPerson($,'Liebich','Thomas',$,$,$,$,$);
#13= IfcOrganization($,'buildingSMART International',$,$,$);
#14= IfcCartesianPoint((0.,0.,0.));
#15= IfcShapeRepresentation(#9,'Body','Tessellation',(#18));
#16= IfcDimensionalExponents(0,0,0,0,0,0,0);
#17= IfcMeasureWithUnit(IfcPlaneAngleMeasure(0.017453293),#20);
#18= IfcTriangulatedFaceSet(#21,$,.T.,((1,6,5),(1,2,6),(6,2,7),(7,2,3),(7,8,6),(6,8,5),(5,8,1),(1,8,4),(4,2,1),(2,4,3),(4,8,7),(7,3,4)),$);
#19= IfcProductDefinitionShape($,$,(#15));
#20= IfcSIUnit($,.PLANEANGLEUNIT.,$,.RADIAN.);
#21= IfcCartesianPointList3D(((-500.,-500.,0.),(500.,-500.,0.),(500.,500.,0.),(-500.,500.,0.),(-500.,-500.,2000.),(500.,-500.,2000.),(500.,500.,2000.),(-500.,500.,2000.)));
#5= IfcRelAggregates('2YBqaV_8L15eWJ9DA1sGmT',$,$,$,#1,(#23));
#22= IfcBuildingElementProxy('1kTvXnbbzCWw8lcMd1dR4o',$,'P-1','sample proxy',$,#24,#19,$,$);
#24= IfcLocalPlacement(#26,#27);
#26= IfcLocalPlacement($,#28);
#27= IfcAxis2Placement3D(#29,$,$);
#28= IfcAxis2Placement3D(#14,$,$);
#29= IfcCartesianPoint((1000.,0.,0.));
#23= IfcBuilding('2FCZDorxHDT8NI01kdXi8P',$,'Test Building',$,$,#26,$,$,.ELEMENT.,$,$,$);`,J=`ENDSEC;
END-ISO-10303-21;`,K=50;class N{constructor(e){this.id=e}}const Q=new N(19),Z=new N(23),I=class{constructor(o,e){this.id=o,this.displayValue=e,I.allValues[e]=this}static parseEnum(o){return I.allValues[o]}};let w=I;w.allValues={};w.GraphView=new I(0,"GRAPH_VIEW");w.SketchView=new I(1,"SKETCH_VIEW");w.ModelView=new I(2,"MODEL_VIEW");w.PlanView=new I(3,"PLAN_VIEW");w.ReflectedPlanView=new I(4,"REFLECTED_PLAN_VIEW");w.SectionView=new I(5,"SECTION_VIEW");w.ElevationView=new I(6,"ELEVATION_VIEW");w.UserDefined=new I(7,"USERDEFINED");w.NotDefined=new I(8,"NOTDEFINED");const k=class{constructor(o,e){this.id=o,this.displayValue=e,k.allValues[e]=this}static parseEnum(o){return k.allValues[o]}};let g=k;g.allValues={};g.Complex=new k(0,"COMPLEX");g.Element=new k(1,"ELEMENT");g.Partial=new k(2,"PARTIAL");const f=class{constructor(o,e){this.id=o,this.displayValue=e,f.allValues[e]=this}static parseEnum(o){return f.allValues[o]}};let S=f;S.allValues={};S.Brace=new f(0,"BRACE");S.Chord=new f(1,"CHORD");S.Collar=new f(2,"COLLAR");S.Member=new f(3,"MEMBER");S.Mullion=new f(4,"MULLION");S.Plate=new f(5,"PLATE");S.Post=new f(6,"POST");S.Purlin=new f(7,"PURLIN");S.Rafter=new f(8,"RAFTER");S.Stringer=new f(9,"STRINGER");S.Strut=new f(10,"STRUT");S.Stud=new f(11,"STUD");S.StiffeningRib=new f(12,"STIFFENING_RIB");S.ArchSegment=new f(13,"ARCH_SEGMENT");S.SuspensionCable=new f(14,"SUSPENSION_CABLE");S.Suspender=new f(15,"SUSPENDER");S.StayCable=new f(16,"STAY_CABLE");S.UserDefined=new f(17,"USERDEFINED");S.NotDefined=new f(18,"NOTDEFINED");const T=class{constructor(o,e){this.id=o,this.displayValue=e,T.allValues[e]=this}static parseEnum(o){return T.allValues[o]}};let D=T;D.allValues={};D.Curve=new T(0,"CURVE");D.Area=new T(1,"AREA");class n{constructor(){this.result=q+`\r
`,this.freeExpressId=K}end(){this.result+=J}allocId(){return this.freeExpressId++}write(e){let c=this.allocId();return this.result+="#"+c+"= "+e+`;\r
`,new N(c)}static encodeHandleOp(e){return e==null?"$":"#"+e.id}static encodeBoolOp(e){return e==null?"$":e?"TRUE":"FALSE"}static encodeStrOp(e){return e==null?"$":"'"+e+"'"}static encodeNumOp(e){if(e==null)return"$";{let c=e.toString();return c.includes(".")?c:c+"."}}static encodeIntOp(e){return e==null?"$":e.toFixed(0)}static encodeEnumOp(e){return e==null?"$":"."+e.displayValue+"."}static encodeArrayOfOp(e,c){if(c==null)return"$";{let i="(",a=!0;for(let d of c)a?a=!1:i+=",",i+=e(d);return i+=")",i}}static encodeArrayOfNumOp(e){return n.encodeArrayOfOp(n.encodeNumOp,e)}static encodeArrayOfHandlesOp(e){return n.encodeArrayOfOp(n.encodeHandleOp,e)}mkIfcArbitraryClosedProfileDef(e){return this.write("IFCARBITRARYCLOSEDPROFILEDEF("+n.encodeEnumOp(e.profileType)+","+n.encodeStrOp(e.profileName)+","+n.encodeHandleOp(e.outerCurve)+")")}mkIfcArbitraryProfileDefWithVoids(e){return this.write("IFCARBITRARYPROFILEDEFWITHVOIDS("+n.encodeEnumOp(e.profileType)+","+n.encodeStrOp(e.profileName)+","+n.encodeHandleOp(e.outerCurve)+","+n.encodeArrayOfHandlesOp(e.innerCurves)+")")}mkIfcAxis2Placement2D(e){return this.write("IFCAXIS2PLACEMENT2D("+n.encodeHandleOp(e.location)+","+n.encodeHandleOp(e.refDirection)+")")}mkIfcAxis2Placement3D(e){return this.write("IFCAXIS2PLACEMENT3D("+n.encodeHandleOp(e.location)+","+n.encodeHandleOp(e.axis)+","+n.encodeHandleOp(e.refDirection)+")")}mkIfcBuilding(e){return this.write("IFCBUILDING("+n.encodeStrOp(e.guid)+","+n.encodeHandleOp(e.ownerHistory)+","+n.encodeStrOp(e.name)+","+n.encodeStrOp(e.description)+","+n.encodeStrOp(e.objectType)+","+n.encodeHandleOp(e.objectPlacement)+","+n.encodeHandleOp(e.representation)+","+n.encodeStrOp(e.longName)+","+n.encodeEnumOp(e.compositionType)+","+n.encodeNumOp(e.elevationOfRefHeight)+","+n.encodeNumOp(e.elevationOfTerrain)+","+n.encodeHandleOp(e.buildingAddress)+")")}mkIfcBuildingElementProxy(e){return this.write("IFCBUILDINGELEMENTPROXY("+n.encodeStrOp(e.guid)+","+n.encodeHandleOp(e.ownerHistory)+","+n.encodeStrOp(e.name)+","+n.encodeStrOp(e.description)+","+n.encodeStrOp(e.objectType)+","+n.encodeHandleOp(e.objectPlacement)+","+n.encodeHandleOp(e.representation)+","+n.encodeStrOp(e.tag)+",$)")}mkIfcBuildingStorey(e){return this.write("IFCBUILDINGSTOREY("+n.encodeStrOp(e.guid)+","+n.encodeHandleOp(e.ownerHistory)+","+n.encodeStrOp(e.description)+","+n.encodeStrOp(e.objectType)+","+n.encodeHandleOp(e.objectPlacement)+","+n.encodeHandleOp(e.representation)+","+n.encodeStrOp(e.longName)+","+n.encodeEnumOp(e.compositionType)+","+n.encodeNumOp(e.elevation)+")")}mkIfcCartesianPoint(e){return this.write("IFCCARTESIANPOINT("+n.encodeArrayOfNumOp(e)+")")}mkIfcCartesianPointList2D(e){return this.write("IFCCARTESIANPOINTLIST2D("+n.encodeArrayOfOp(c=>n.encodeArrayOfNumOp(c),e.coordList)+","+n.encodeArrayOfOp(n.encodeStrOp,e.tagList)+")")}mkIfcCartesianPointList3D(e){return this.write("IFCCARTESIANPOINTLIST3D("+n.encodeArrayOfOp(c=>n.encodeArrayOfNumOp(c),e.coordList)+","+n.encodeArrayOfOp(n.encodeStrOp,e.tagList)+")")}mkIfcDirection(e){return this.write("IFCDIRECTION("+n.encodeArrayOfNumOp(e)+")")}mkIfcExtrudedAreaSolid(e){return this.write("IFCEXTRUDEDAREASOLID("+n.encodeHandleOp(e.sweptArea)+","+n.encodeHandleOp(e.position)+","+n.encodeHandleOp(e.extrudedDirection)+","+n.encodeNumOp(e.depth)+")")}mkIfcIndexedPolyCurve(e){return this.write("IFCINDEXEDPOLYCURVE("+n.encodeHandleOp(e.points)+","+n.encodeArrayOfOp(n.encodeArrayOfNumOp,e.segments)+","+n.encodeBoolOp(e.selfIntersect)+")")}mkIfcLocalPlacement(e){return this.write("IFCLOCALPLACEMENT("+n.encodeHandleOp(e.placementRelTo)+","+n.encodeHandleOp(e.relativePlacement)+")")}mkIfcMember(e){return this.write("IFCMEMBER("+n.encodeStrOp(e.guid)+","+n.encodeHandleOp(e.ownerHistory)+","+n.encodeStrOp(e.name)+","+n.encodeStrOp(e.description)+","+n.encodeStrOp(e.objectType)+","+n.encodeHandleOp(e.objectPlacement)+","+n.encodeHandleOp(e.representation)+","+n.encodeStrOp(e.tag)+","+n.encodeEnumOp(e.predefinedType)+")")}mkIfcProductRepresentation(e){return this.write("IFCPRODUCTREPRESENTATION("+n.encodeStrOp(e.name)+","+n.encodeStrOp(e.description)+","+n.encodeHandleOp(e.representation)+")")}mkIfcProductDefinitionShape(e){return this.write("IFCPRODUCTDEFINITIONSHAPE("+n.encodeStrOp(e.name)+","+n.encodeStrOp(e.description)+","+n.encodeArrayOfOp(n.encodeHandleOp,e.representations)+")")}mkIfcRelAggregates(e){return this.write("IFCRELAGGREGATES("+n.encodeStrOp(e.guid)+","+n.encodeHandleOp(e.ownerHistory)+","+n.encodeHandleOp(e.relatingObject)+","+n.encodeArrayOfHandlesOp(e.relatedObjects)+")")}mkIfcRelContainedInSpatialStructure(e){return this.write("IFCRELCONTAINEDINSPATIALSTRUCTURE("+n.encodeStrOp(e.guid)+","+n.encodeHandleOp(e.ownerHistory)+","+n.encodeStrOp(e.name)+","+n.encodeStrOp(e.description)+","+n.encodeArrayOfHandlesOp(e.relatedElements)+","+n.encodeHandleOp(e.relatingStructure)+")")}mkIfcShapeRepresentation(e){return this.write("IFCSHAPEREPRESENTATION("+n.encodeHandleOp(e.contextOfItems)+","+n.encodeStrOp(e.representationIdentifier)+","+n.encodeStrOp(e.representationType)+","+n.encodeArrayOfHandlesOp(e.items)+")")}mkIfcTriangulatedFaceSet(e){return this.write("IFCTRIANGULATEDFACESET("+n.encodeHandleOp(e.coordinates)+",$,"+n.encodeBoolOp(e.closed)+","+n.encodeArrayOfOp(c=>n.encodeArrayOfOp(n.encodeIntOp,c),e.coordIndex)+","+n.encodeArrayOfOp(n.encodeIntOp,e.pnIndex)+")")}mkIfcGeometricRepresentationContext(e){return this.write("IFCGEOMETRICREPRESENTATIONCONTEXT("+n.encodeStrOp(e.contextIdentifier)+","+n.encodeStrOp(e.contextType)+","+n.encodeIntOp(e.coordinateSpaceDimension)+","+n.encodeNumOp(e.precision)+","+n.encodeHandleOp(e.worldCoordinateSystem)+","+n.encodeHandleOp(e.trueNorth)+")")}mkIfcGeometricRepresentationSubContext(e){return this.write("IFCGEOMETRICREPRESENTATIONSUBCONTEXT("+n.encodeStrOp(e.contextIdentifier)+","+n.encodeStrOp(e.contextType)+","+n.encodeIntOp(e.coordinateSpaceDimension)+","+n.encodeNumOp(e.precision)+","+n.encodeHandleOp(e.worldCoordinateSystem)+","+n.encodeHandleOp(e.trueNorth)+","+n.encodeHandleOp(e.parentContext)+","+n.encodeNumOp(e.targetScale)+","+n.encodeEnumOp(e.targetView)+","+n.encodeStrOp(e.userDefinedTargetView)+")")}mkIfcSpatialElement(e){return this.write("IFCSPATIALELEMENT("+n.encodeStrOp(e.guid)+","+n.encodeHandleOp(e.ownerHistory)+","+n.encodeStrOp(e.name)+","+n.encodeStrOp(e.description)+","+n.encodeStrOp(e.objectType)+","+n.encodeHandleOp(e.objectPlacement)+","+n.encodeHandleOp(e.representation)+","+n.encodeStrOp(e.longName)+")")}}const _=o=>{let e={};return(c,i)=>{let a=i.webSize+","+i.flangeSize+","+i.lipSize+","+i.thickness,d=e[a];if(d!=null)return d;let r=i.webSize,l=i.flangeSize,u=Math.max(i.lipSize,i.thickness),t=i.thickness,O;i.lipSize>i.thickness?O=o.mkIfcCartesianPointList2D({coordList:[[0,0],[l,0],[l,u],[l-t,u],[l-t,t],[t,t],[t,r-t],[l-t,r-t],[l-t,r-u],[l,r-u],[l,r],[0,r]]}):O=o.mkIfcCartesianPointList2D({coordList:[[0,0],[l,0],[l,t],[t,t],[t,r-t],[l,r-t],[l,r],[0,r]]});let m=o.mkIfcIndexedPolyCurve({points:O});return d=o.mkIfcArbitraryClosedProfileDef({profileType:D.Area,profileName:c,outerCurve:m}),e[a]=d,d}},W=o=>{let e={};return(c,i)=>{let a=i.webSize+","+i.flangeSize+","+i.thickness+","+(i.kgPerM??""),d=e[a];if(d!=null)return d;let r=i.webSize,l=i.flangeSize,u=i.thickness,t=o.mkIfcCartesianPointList2D({coordList:[[0,0],[l,0],[l,u],[.5*l+.5*u,u],[.5*l+.5*u,r-u],[l,r-u],[l,r],[0,r],[0,r-u],[.5*l-.5*u,r-u],[.5*l-.5*u,u],[0,u]]}),O=o.mkIfcIndexedPolyCurve({points:t});return d=o.mkIfcArbitraryClosedProfileDef({profileType:D.Area,profileName:c,outerCurve:O}),e[a]=d,d}},ee=o=>{let e={};return(c,i,a)=>{let d=Math.round(i)+","+a.webSize+","+a.flangeSize+","+a.lipSize+","+a.thickness,r=e[d];if(r!=null)return r;let l=a.webSize,u=a.flangeSize;a.lipSize,a.thickness;let t=o.mkIfcCartesianPointList3D({coordList:[[0,0,0],[u,0,0],[u,l,0],[0,l,0],[0,0,i],[u,0,i],[u,l,i],[0,l,i]]});return r=o.mkIfcTriangulatedFaceSet({coordinates:t,coordIndex:[[1,6,5],[1,2,6],[6,2,7],[7,2,3],[7,8,6],[6,8,5],[5,8,1],[1,8,4],[4,2,1],[2,4,3],[4,8,7],[7,3,4]]}),e[d]=r,r}},ne=o=>{let e={};return(c,i)=>{let a=i.size+","+i.thickness,d=e[a];if(d!=null)return d;let r=i.size,l=i.thickness,u=o.mkIfcCartesianPointList2D({coordList:[[0,0],[r,0],[r,r],[0,r]]}),t=o.mkIfcIndexedPolyCurve({points:u}),O=o.mkIfcCartesianPointList2D({coordList:[[l,l],[r-l,l],[r-l,r-l],[l,r-l]]}),m=o.mkIfcIndexedPolyCurve({points:O});return d=o.mkIfcArbitraryProfileDefWithVoids({profileType:D.Area,profileName:c,outerCurve:t,innerCurves:[m]}),e[a]=d,d}};function te(o){let e=new n;const c=t=>{if(t!=null)return t()},i=_(e),a=ee(e),d=ne(e),r=W(e);let l=e.mkIfcGeometricRepresentationSubContext({contextIdentifier:"Framing",contextType:"Model",coordinateSpaceDimension:0,worldCoordinateSystem:e.mkIfcAxis2Placement3D({location:e.mkIfcCartesianPoint([0,0,0])}),parentContext:Q,targetView:w.ModelView}),u=[];for(let t of o)if(t.transform!=null&&t.length!=null){if(t.ceeProperties!=null){let O;{let h=i(c(t.itemName),t.ceeProperties());O=e.mkIfcExtrudedAreaSolid({sweptArea:h,position:e.mkIfcAxis2Placement3D({location:e.mkIfcCartesianPoint([0,-t.ceeProperties().webSize,0])}),extrudedDirection:e.mkIfcDirection([0,0,1]),depth:t.length()})}let m=t.transform().o,s=t.transform().u,p=t.transform().w;p.cross(s);let E;E=m;let C=e.mkIfcLocalPlacement({relativePlacement:e.mkIfcAxis2Placement3D({location:e.mkIfcCartesianPoint([E.x,E.y,E.z]),axis:e.mkIfcDirection([s.x,s.y,s.z]),refDirection:e.mkIfcDirection([p.x,p.y,p.z])})}),A=e.mkIfcProductDefinitionShape({representations:[e.mkIfcShapeRepresentation({contextOfItems:l,representationIdentifier:"Framing",representationType:"SweptSolid",items:[O]})]}),P=e.mkIfcBuildingElementProxy({guid:y(),representation:A,objectPlacement:C});u.push(P)}if(t.flatProperties!=null){let O;O=a(c(t.itemName),t.length(),X.create({webSize:t.flatProperties().width,flangeSize:t.flatProperties().thickness,lipSize:0,thickness:3,webHoleDistApart:0}));let m=t.transform().o,s=t.transform().u,p=t.transform().w,E=p.cross(s),C=m.add(E.scale(t.flatProperties().width)),A=e.mkIfcLocalPlacement({relativePlacement:e.mkIfcAxis2Placement3D({location:e.mkIfcCartesianPoint([C.x,C.y,C.z]),axis:e.mkIfcDirection([s.x,s.y,s.z]),refDirection:e.mkIfcDirection([p.x,p.y,p.z])})}),P=e.mkIfcProductDefinitionShape({representations:[e.mkIfcShapeRepresentation({contextOfItems:l,representationIdentifier:"Framing",representationType:"SweptSolid",items:[O]})]}),h=e.mkIfcBuildingElementProxy({guid:y(),representation:P,objectPlacement:A});u.push(h)}if(t.shsProperties!=null){let O,m=d(c(t.itemName),t.shsProperties());O=e.mkIfcExtrudedAreaSolid({sweptArea:m,position:e.mkIfcAxis2Placement3D({location:e.mkIfcCartesianPoint([0,-t.shsProperties().size,0])}),extrudedDirection:e.mkIfcDirection([0,0,1]),depth:t.length()});let s=t.transform().o,p=t.transform().u,E=t.transform().w,C=e.mkIfcLocalPlacement({relativePlacement:e.mkIfcAxis2Placement3D({location:e.mkIfcCartesianPoint([s.x,s.y,s.z]),axis:e.mkIfcDirection([p.x,p.y,p.z]),refDirection:e.mkIfcDirection([E.x,E.y,E.z])})}),A=e.mkIfcProductDefinitionShape({representations:[e.mkIfcShapeRepresentation({contextOfItems:l,representationIdentifier:"Framing",representationType:"SweptSolid",items:[O]})]}),P=e.mkIfcBuildingElementProxy({guid:y(),representation:A,objectPlacement:C});u.push(P)}if(t.ubProperties!=null){let O,m=r(c(t.itemName),t.ubProperties());O=e.mkIfcExtrudedAreaSolid({sweptArea:m,position:e.mkIfcAxis2Placement3D({location:e.mkIfcCartesianPoint([0,-t.ubProperties().webSize,0])}),extrudedDirection:e.mkIfcDirection([0,0,1]),depth:t.length()});let s=t.transform().o,p=t.transform().u,E=t.transform().w;E.cross(p);let C=e.mkIfcLocalPlacement({relativePlacement:e.mkIfcAxis2Placement3D({location:e.mkIfcCartesianPoint([s.x,s.y,s.z]),axis:e.mkIfcDirection([p.x,p.y,p.z]),refDirection:e.mkIfcDirection([E.x,E.y,E.z])})}),A=e.mkIfcProductDefinitionShape({representations:[e.mkIfcShapeRepresentation({contextOfItems:l,representationIdentifier:"Framing",representationType:"SweptSolid",items:[O]})]}),P=e.mkIfcBuildingElementProxy({guid:y(),representation:A,objectPlacement:C});u.push(P)}}return e.mkIfcRelContainedInSpatialStructure({guid:y(),relatedElements:u,relatingStructure:Z}),e.end(),e.result}const oe=v('<div style="flex-grow: 1; display: flex; flex-direction: column; overflow: hidden;"><div><button class="btn btn-primary">Export</button><button class="btn btn-primary">Export as IFC</button></div><div style="flex-grow: 1; position: relative; overflow: hidden;"><canvas style="position: absolute; left: 0; top: 0; border: 4px solid;"></canvas></div></div>'),me=o=>{let e,c,i,a,d,r=new b;L(()=>{if(e==null)return;a=new F({canvas:c,antialias:!0}),a.useLegacyLights=!0,a.setPixelRatio(window.devicePixelRatio),i=new z;let m=new b;m.rotateX(-90*Math.PI/180),m.position.setY(100/1e3),m.add(r),i.add(m),i.background=new M(16777215),d=new B(45,e.clientWidth/e.clientHeight,.01,100),o.initCamPos!=null?d.position.set(o.initCamPos.x/1e3,o.initCamPos.z/1e3,-o.initCamPos.y/1e3):d.position.set(12,12,12);let s=new G(d,c);s.target.set(9,3,0),o.initCamLookAt!=null?(d.lookAt(o.initCamLookAt.x/1e3,o.initCamLookAt.z/1e3,-o.initCamLookAt.y/1e3),s.target.set(o.initCamLookAt.x/1e3,o.initCamLookAt.z/1e3,-o.initCamLookAt.y/1e3)):(d.lookAt(9,3,0),s.target.set(9,3,0)),s.maxPolarAngle=.5*Math.PI,s.addEventListener("change",()=>{a==null||i==null||d==null||a.render(i,d)}),s.update();const p=[];p[0]=new V(16777215,1,0),p[0].position.set(200,300,500),i.add(p[0]);{const E=new U(4210752,4);i.add(E)}a.render(i,d)});const l=()=>{e==null||c==null||a==null||i==null||d==null||(c.style.width=e.clientWidth+"px",c.style.height=e.clientHeight+"px",c.width=e.clientWidth,c.height=e.clientHeight,d.aspect=e.clientWidth/e.clientHeight,d.updateProjectionMatrix(),a.setSize(c.width,c.height),a.render(i,d))},u=()=>{l()};L(()=>{window.addEventListener("resize",u),l()}),$(()=>{window.removeEventListener("resize",u)}),Y({group:r,components:()=>o.components,rerender:()=>{a!=null&&i!=null&&d!=null&&a.render(i,d)}});const t=()=>{if(r==null)return;new j().parse(r,s=>{if(s instanceof ArrayBuffer){let p=new Blob([s],{type:"model/gltf-binary"});x.saveAs(p,"export.glb")}else{let p=new Blob([JSON.stringify(s)],{type:"model/gltf+json"});x.saveAs(p,"export.gltf")}},s=>{console.log(s)},{})},O=()=>{let m=te(o.components),s=new Blob([m],{type:"model/application/x-step"});x.saveAs(s,"test.ifc")};return(()=>{const m=oe.cloneNode(!0),s=m.firstChild,p=s.firstChild,E=p.nextSibling,C=s.nextSibling,A=C.firstChild;p.$$click=()=>t(),E.$$click=()=>O();const P=e;typeof P=="function"?R(P,C):e=C;const h=c;return typeof h=="function"?R(h,A):c=A,m})()};H(["click"]);export{me as default};