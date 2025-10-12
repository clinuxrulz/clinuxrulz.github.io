import{a as k,i as o,b as c,S as d,m as z,e as $,N as P,I as S,t as g,aj as M}from"./index.5aba22ff.js";import{b as T}from"./Component.6024a649.js";const Y=`void main() {
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
}`,Z=`precision mediump float;
      
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
`,ee=`precision mediump float;
      
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
`,re=`precision mediump float;
      
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
`;function F(m){switch(m.unit){case"/ea":return m.cost_per_unit==null?void 0:(m.quantity??1)*m.cost_per_unit;case"/m":return m.length==null||m.cost_per_unit==null?void 0:(m.quantity??1)*(m.length/1e3)*m.cost_per_unit;default:return}}function te(m){let t=0;for(let l of m){let u=F(l);u!=null&&(u=Math.round(u*100),t+=u)}return t/=100,t}const U=g("<th>Order Code</th>"),D=g("<th>Qty</th>"),R=g("<th>Length</th>"),q=g("<th>Supplier</th>"),O=g("<th>Description</th>"),G=g("<th>Usage</th>"),Q=g("<th>Piece Mark</th>"),W=g("<th>Specifications</th>"),H=g("<th>Notes</th>"),I=g("<th>User Notes To Supplier</th>"),B=g("<th>Weight</th>"),b=g("<th>Cost Per Unit</th>"),E=g("<th>Unit</th>"),A=g("<th>Total Cost</th>"),J=g('<div style="flex-grow: 1; overflow-y: scroll; display: flex; flex-direction: column;"><table><thead><tr></tr></thead><tbody></tbody></table></div>'),f=g("<td></td>"),K=g('<td style="vertical-align: middle;"></td>'),V=g("<tr></tr>"),X=g("<div></div>"),oe=m=>{let t=k(()=>{let l=new Set;if(m.hiddenColumns==null)return l;for(let u of m.hiddenColumns)l.add(u);return l});return(()=>{const l=J.cloneNode(!0),u=l.firstChild,v=u.firstChild,h=v.firstChild,y=v.nextSibling;return o(h,c(d,{get when(){return!t().has("Order Code")},get children(){return U.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Qty")},get children(){return D.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Length")},get children(){return R.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Supplier")},get children(){return q.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Description")},get children(){return O.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Usage")},get children(){return G.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Piece Mark")},get children(){return Q.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Specifications")},get children(){return W.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Notes")},get children(){return H.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("User Notes To Supplier")},get children(){return I.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Weight")},get children(){return B.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Cost Per Unit")},get children(){return b.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Unit")},get children(){return E.cloneNode(!0)}}),null),o(h,c(d,{get when(){return!t().has("Total Cost")},get children(){return A.cloneNode(!0)}}),null),o(y,c(S,{get each(){return m.orderLines},children:s=>{let e=k(()=>{let i=F(s());return i==null?"":"$"+i.toFixed(2)});return(()=>{const i=V.cloneNode(!0);return o(i,c(d,{get when(){return!t().has("Order Code")},get children(){const r=f.cloneNode(!0);return o(r,()=>s().orderCode??""),r}}),null),o(i,c(d,{get when(){return!t().has("Qty")},get children(){const r=f.cloneNode(!0);return o(r,()=>s().quantity??""),r}}),null),o(i,c(d,{get when(){return!t().has("Length")},get children(){const r=f.cloneNode(!0);return r.style.setProperty("white-space","nowrap"),o(r,(()=>{const n=z(()=>s().length==null,!0);return()=>n()?"--":s().length?.toString()+" mm"})()),$(()=>r.style.setProperty("text-align",s().length==null?"center":void 0)),r}}),null),o(i,c(d,{get when(){return!t().has("Supplier")},get children(){const r=f.cloneNode(!0);return o(r,()=>s().supplier??""),r}}),null),o(i,c(d,{get when(){return!t().has("Description")},get children(){const r=K.cloneNode(!0);return o(r,c(P,{get when(){return s().colourMark},children:n=>(()=>{const a=X.cloneNode(!0);return a.style.setProperty("width","16px"),a.style.setProperty("height","16px"),a.style.setProperty("display","inline-block"),$(()=>a.style.setProperty("background-color",n())),a})()}),null),o(r,()=>s().description??"",null),r}}),null),o(i,c(d,{get when(){return!t().has("Usage")},get children(){const r=f.cloneNode(!0);return o(r,()=>s().usage??""),r}}),null),o(i,c(d,{get when(){return!t().has("Piece Mark")},get children(){const r=f.cloneNode(!0);return o(r,()=>s().pieceMark??""),r}}),null),o(i,c(d,{get when(){return!t().has("Specifications")},get children(){const r=f.cloneNode(!0);return o(r,()=>s().variationDescription??""),r}}),null),o(i,c(d,{get when(){return!t().has("Notes")},get children(){const r=f.cloneNode(!0);return o(r,()=>s().notes),r}}),null),o(i,c(d,{get when(){return!t().has("User Notes To Supplier")},get children(){return f.cloneNode(!0)}}),null),o(i,c(d,{get when(){return!t().has("Weight")},get children(){return f.cloneNode(!0)}}),null),o(i,c(d,{get when(){return!t().has("Cost Per Unit")},get children(){const r=f.cloneNode(!0);return o(r,()=>s().cost_per_unit??""),r}}),null),o(i,c(d,{get when(){return!t().has("Unit")},get children(){const r=f.cloneNode(!0);return o(r,()=>s().unit??""),r}}),null),o(i,c(d,{get when(){return!t().has("Total Cost")},get children(){const r=f.cloneNode(!0);return o(r,e),r}}),null),i})()}})),l})()};async function ie(m){for(let t of m)if(t.cost_per_unit==null&&t.description!=null){let l=await M(t.description);if(l!=null)switch(t.cost_per_unit=l.price,l.unit){case"EACH":t.unit="/ea";break;case"MTR":t.unit="/m";break}}}function le(m,t,l,u){let v={},h=[];for(let s of m)for(h.push(s);;){let e=h.pop();if(e==null)break;if(e.children!=null)for(let p of e.children())e.usage!=null&&(p=new T({...p,usage:e.usage})),h.push(p);if(e.itemName==null)continue;let i;if(t==null||e.hasLabel==null||!e.hasLabel())i="--";else{let p=t.lookupLabelForComponent(e);p==null?i="--":i=p}let r;e.itemMarkColour!=null?r=e.itemMarkColour()??"--":r="--";let n;e.length==null?n="--":n=Math.round(e.length()).toFixed(0)+" mm";let a;e.openingProperties==null?a=void 0:a=e.openingProperties().modelName;let N;a==null?N="":N="_"+a;let C;e.description==null?C="":C="_"+e.description();let x=e.itemName()+"_"+i+"_"+r+"_"+N+"_"+C+"_"+n,_=v[x];if(_==null){let p=new Map;e.usage!=null&&p.set(e.usage(),e.qty==null?1:e.qty());let w;t==null||e.hasLabel==null||!e.hasLabel()?w=void 0:w=t.lookupLabelForComponent(e),v[x]={itemName:e.itemName(),label:w,colourMark:e.itemMarkColour!=null?e.itemMarkColour():void 0,modelName:a,qty:e.qty==null?1:e.qty(),description:e.description==null?"":e.description(),usage:p,length:e.length==null?void 0:Math.round(e.length()),fixedCost:e.fixedCost==null?void 0:e.fixedCost()}}else if(_.qty+=e.qty==null?1:e.qty(),e.usage!=null){let p=_.usage.get(e.usage())??0;_.usage.set(e.usage(),p+(e.qty==null?1:e.qty()))}}let y=[];for(let s in v){let e=v[s];e.label;let i="";{let a=!0;for(let[N,C]of e.usage)a?a=!1:i+="; ",i+=N+" ("+C+")"}e.description!=""&&(i==""?i=e.description:i=e.description+" - "+i);let r,n;e.fixedCost!=null?(r=e.fixedCost.cost,n=e.fixedCost.unit):l!=null&&(e.itemName.match(/^C[0-9]+$/)?(r=l.lookupCeePrice(e.itemName,u),n="/m"):e.itemName.match(/^C[0-9]+ Channel$/)?(r=l.lookupChannelPrice(e.itemName,u),n="/m"):e.itemName.match(/^Corrugated [0-9]+\.[0-9]+$/)||e.itemName.match(/^Steelclad [0-9]+\.[0-9]+$/)?(r=l.lookupSheetingPrice(e.itemName,u),n="/m"):e.itemName.match(/^Strap Brace [0-9]+mm x [0-9]+\.[0-9]+mm$/)&&e.length!=null?(r=l.lookupStrapPrice(e.itemName,e.length,u),n="/ea"):e.itemName.match(/^Tek Screw Hex W\/seal [0-9]+x[0-9]+ Colorbond$/)?(r=l.lookupFastenerPrice(e.itemName,u),n="/ea"):e.itemName.match(/^Quad Gutter 0.42 125mm Slotted$/)?(r=l.lookupTrimEavePrice(e.itemName,u),n="/ea"):e.itemName.match(/^Quad Stop End (Left|Right) Colorbond$/)?(r=l.lookupTrimMiscellaneousPrice(e.itemName,u),n="/ea"):e.itemName.match(/^Quad Bkt Internal$/)||e.itemName.match(/^Quad Gutter Overstraps$/)?(r=l.lookupTrimGutterStrapPrice(e.itemName,u),n="/ea"):e.itemName.match(/^Flashing - Barge .*$/)?(r=l.lookupTrimRakePrice(e.itemName,u),n="/m"):e.itemName.match(/^Flashing - Corner .*$/)?(r=l.lookupTrimCornerPrice(e.itemName,u),n="/m"):e.itemName.match(/^Flashing - \"L\".*$/)||e.itemName.match(/^Flashing - \"J\".*$/)?(r=l.lookupTrimHeadJambPrice(e.itemName,u),n="/m"):e.itemName.match(/^Flashing - Opening 75 x 115mm$/)?(r=l.lookupTrimAnglePrice(e.itemName,u),n="/m"):e.itemName.match(/^14-24 X 38 CL4 Fine Hex Series 500 SDS$/)||e.itemName.match(/^14 X 20 X 22 Hex Tek No Neo B8 CI 4$/)||e.itemName.match(/^50mm Multi Purpose Roof Screw Colorbond$/)?(r=l.lookupFastenerPrice(e.itemName,u),n="/ea"):e.itemName.match(/^Powers PTB-PRO M12 x 120mm embedded 91mm$/)?(r=l.lookupFastenerAnchorBoltsPrice(e.itemName,u),n="/ea"):e.itemName.match(/^H[0-9]+xW[0-9]+ ROW$/)&&e.modelName!=null&&(r=l.lookupRollerDoorPrice(e.itemName,e.modelName,u),n="/ea")),y.push({orderCode:e.itemName,colourMark:e.colourMark,description:e.itemName,quantity:e.qty,length:e.length,usage:i,pieceMark:e.label,cost_per_unit:r,unit:n})}return y.sort((s,e)=>{let i;return s.orderCode==null?e.orderCode==null?i=0:i=-1:e.orderCode==null?i=1:i=s.orderCode.localeCompare(e.orderCode),i!=0?i:s.length==null?e.length==null?0:-1:e.length==null?1:s.length-e.length}),y}export{oe as O,ie as a,re as b,le as c,Z as d,ee as f,te as t,Y as v};
