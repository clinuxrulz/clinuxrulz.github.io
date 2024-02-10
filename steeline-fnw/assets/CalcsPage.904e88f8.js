import{i as f,b as C,c as H,a as x,g as K,e as d,f as W,t as h}from"./index.57d3a8cf.js";import{S as X}from"./utils.019ddcf3.js";const Y=h('<div style="padding-left: 5px; overflow: auto;"><h2>Calcs Page</h2><hr><hr><hr><hr></div>'),Z=h('<input class="btn btn-primary" type="button" value="Close">'),tt=h("<h3>Convert Markup from/to GP</h3>"),U=h('<div style="font-size: 18pt; margin-top: 20pt;"></div>'),D=h("<br>"),et=h('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Markup:</b></td><td><input type="text" size="10"></td><td>%</td><td style="font-size: 25pt; padding-left: 20px; padding-right: 20px;">&harr;</td><td><b>GP:</b></td><td><input type="text" size="10"></td><td>%</td></tr></tbody></table>'),it=h("<h3>Price from GP% And GST</h3>"),rt=h('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>GP:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td style="padding-right: 5px;"><b>Price:</b></td><td></td><td></td></tr></tbody></table>'),lt=h("<h3>Span to Roof Sheet Length</h3>"),nt=h(`<div style="padding-left: 10px;">(If roof is gable make the frame_span &frac12; of the building's frame span.)<br>(For skillion roof, cladding_thickness is double because the roof sheet is overhanging two wall claddings instead of one.)</div>`),mt=h('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Dist Into Gutter:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Cladding Thickness:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Frame Span:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Pitch:</b></td><td><input type="text" size="10"></td><td>&deg;</td></tr><tr><td><b>Roof Sheet Length:</b></td><td></td></tr></tbody></table>'),pt=P=>(()=>{const r=Y.cloneNode(!0),g=r.firstChild,_=g.nextSibling,v=_.nextSibling,$=v.nextSibling,k=$.nextSibling;return f(r,C(X,{get when(){return P.onClose},keyed:!0,children:t=>(()=>{const l=Z.cloneNode(!0);return l.$$click=()=>t()(),l})()}),_),f(r,C(ot,{}),v),f(r,C(at,{}),$),f(r,C(dt,{}),k),r})(),ot=()=>{let P=()=>{let i=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return i.setAttribute("display","block"),i.innerHTML=`<mtable>
    <mrow>
        <mi>pct_as_decimal</mi>
        <mo>=</mo>
        <mfrac>
            <mi>pct</mi>
            <mn>100</mn>
        </mfrac>
    </mrow>
    <mrow>
        <mspace height="20pt"></mspace>
    </mrow>
    <mrow>
        <mi>pct</mi>
        <mo>=</mo>
        <mi>pct_as_decimal</mi>
        <mo>&times;</mo>
        <mn>100</mn>
    </mrow>
    <mrow>
        <mspace height="20pt"></mspace>
    </mrow>
    <mrow>
        <mi>gp_as_decimal</mi>
        <mo>=</mo>
        <mn>1</mn>
        <mo>-</mo>
        <mfrac>
            <mn>1</mn>
            <mrow>
                <mn>1</mn>
                <mo>+</mo>
                <mi>markup_as_decimal</mi>
            </mrow>
        </mfrac>
    </mrow>
    <mrow>
        <mspace height="20pt"></mspace>
    </mrow>
    <mrow>
        <mi>markup_as_decimal</mi>
        <mo>=</mo>
        <mfrac>
            <mn>1</mn>
            <mrow>
                <mn>1</mn>
                <mo>-</mo>
                <mi>gp_as_decimal</mi>
            </mrow>
        </mfrac>
        <mo>-</mo>
        <mn>1</mn>
    </mrow>
</mtable>`,i},r=i=>(1-1/(1+i/100))*100,g=i=>(1/(1-i/100)-1)*100,_=i=>{let s=Number.parseFloat(i);return Number.isFinite(s)?r(s).toFixed(4):""},v=i=>{let s=Number.parseFloat(i);return Number.isFinite(s)?g(s).toFixed(4):""},$="35.0000",k=_($),[t,l]=H({markupPctText:$,gpPctText:k}),y=x(()=>!Number.isFinite(Number.parseFloat(t.markupPctText))),S=x(()=>!Number.isFinite(Number.parseFloat(t.gpPctText)));return[tt.cloneNode(!0),(()=>{const i=U.cloneNode(!0);return f(i,C(P,{})),i})(),D.cloneNode(!0),(()=>{const i=et.cloneNode(!0),s=i.firstChild,M=s.nextSibling,e=M.firstChild,c=e.firstChild,p=c.nextSibling,b=p.firstChild,u=p.nextSibling,G=u.nextSibling,T=G.nextSibling,w=T.nextSibling,N=w.firstChild;return c.style.setProperty("padding-right","5px"),b.$$input=a=>{let o=a.currentTarget.value;K(()=>{l("markupPctText",o),l("gpPctText",_(o))})},T.style.setProperty("padding-right","5px"),N.$$input=a=>{let o=a.currentTarget.value;K(()=>{l("gpPctText",o),l("markupPctText",v(o))})},d(a=>{const o=y()?"red":"black",F=S()?"red":"black";return o!==a._v$&&c.style.setProperty("color",a._v$=o),F!==a._v$2&&T.style.setProperty("color",a._v$2=F),a},{_v$:void 0,_v$2:void 0}),d(()=>b.value=t.markupPctText),d(()=>N.value=t.gpPctText),i})()]},at=()=>{let P=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
    <mrow>
        <mi>price</mi>
        <mo>=</mo>
        <mfrac>
            <mi>cost</mi>
            <mrow>
                <mn>1</mn>
                <mo>-</mo>
                <mi>gp_as_decimal</mi>
            </mrow>
        </mfrac>
        <mo>&times;</mo>
        <mo>(</mo>
        <mn>1</mn>
        <mo>+</mo>
        <mi>gst_as_decimal</mi>
        <mo>)</mo>
    </mrow>
</mtable>`,t},[r,g]=H({costText:"100.00",gpText:"30",gstText:"10"}),_=x(()=>{let t=Number.parseFloat(r.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(r.gpText);if(!Number.isFinite(l))return"";let y=Number.parseFloat(r.gstText);if(!Number.isFinite(y))return"";let S=t/(1-l/100)*(1+y/100);return"$"+S.toFixed(2)}),v=x(()=>!Number.isFinite(Number.parseFloat(r.costText))),$=x(()=>!Number.isFinite(Number.parseFloat(r.gpText))),k=x(()=>!Number.isFinite(Number.parseFloat(r.gstText)));return[it.cloneNode(!0),(()=>{const t=U.cloneNode(!0);return f(t,C(P,{})),t})(),D.cloneNode(!0),(()=>{const t=rt.cloneNode(!0),l=t.firstChild,y=l.nextSibling,S=y.firstChild,i=S.firstChild,s=i.nextSibling,M=s.nextSibling,e=M.firstChild,c=S.nextSibling,p=c.firstChild,b=p.nextSibling,u=b.nextSibling,G=u.firstChild,T=c.nextSibling,w=T.firstChild,N=w.nextSibling,a=N.nextSibling,o=a.firstChild,F=T.nextSibling,L=F.firstChild,A=L.nextSibling,E=A.nextSibling;return i.style.setProperty("padding-right","5px"),e.$$input=m=>{g("costText",m.currentTarget.value)},p.style.setProperty("padding-right","5px"),G.$$input=m=>{g("gpText",m.currentTarget.value)},w.style.setProperty("padding-right","5px"),o.$$input=m=>{g("gstText",m.currentTarget.value)},f(E,_),d(m=>{const I=v()?"red":"black",R=$()?"red":"black",z=k()?"red":"black";return I!==m._v$3&&i.style.setProperty("color",m._v$3=I),R!==m._v$4&&p.style.setProperty("color",m._v$4=R),z!==m._v$5&&w.style.setProperty("color",m._v$5=z),m},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),d(()=>e.value=r.costText),d(()=>G.value=r.gpText),d(()=>o.value=r.gstText),t})()]},dt=()=>{let P=()=>{let e=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return e.setAttribute("display","block"),e.innerHTML=`<mtable>
    <mrow>
        <mi>dist_into_gutter</mi><mo>=</mo><mn>20mm</mn><mspace width="20px"/><mtext>(usually)</mtext>
    </mrow>
    <mrow>
        <mspace height="20pt"></mspace>
    </mrow>
    <mrow>
        <mi>cladding_thickness</mi><mo>=</mo><mn>30mm</mn><mspace width="10px"/><mtext>if gable,</mtext><mspace width="10px"/><mn>60mm</mn><mspace width="10px"/><mtext>if skillion</mtext><mspace width="10px"/><mtext>(usually)</mtext>
    </mrow>
    <mrow>
        <mspace height="20pt"></mspace>
    </mrow>
    <mrow>
        <mi>roof_sheet_length</mi>
        <mo>=</mo>
        <mfrac>
            <mrow><mi>frame_span</mi><mo>+</mo><mi>cladding_thickness</mi></mrow>
            <apply><mi>cos</mi><mo>(</mo><mi>pitch</mi><mo>)</mo></apply>
        </mfrac>
        <mo>+</mo>
        <mi>dist_into_gutter</mi>
    </mrow>

</mtable>`,e},r=e=>(e.frameSpan+e.claddingThickness)/Math.cos(e.pitch*Math.PI/180)+e.distIntoGutter,g=e=>{let c=Number.parseFloat(e.distIntoGutterText);if(!Number.isFinite(c))return"";let p=Number.parseFloat(e.claddingThicknessText);if(!Number.isFinite(p))return"";let b=Number.parseFloat(e.frameSpanText);if(!Number.isFinite(b))return"";let u=Number.parseFloat(e.pitchText);return Number.isFinite(u)?(u-90)%180==0?"Infinity":r({distIntoGutter:c,claddingThickness:p,frameSpan:b,pitch:u}).toFixed(0)+"mm":""},_="20",v="30",$="3000",k="15",[t,l]=H({distIntoGutterText:_,claddingThicknessText:v,frameSpanText:$,pitchText:k}),y=x(()=>g({distIntoGutterText:t.distIntoGutterText,claddingThicknessText:t.claddingThicknessText,frameSpanText:t.frameSpanText,pitchText:t.pitchText})),S=x(()=>!Number.isFinite(Number.parseFloat(t.distIntoGutterText))),i=x(()=>!Number.isFinite(Number.parseFloat(t.claddingThicknessText))),s=x(()=>!Number.isFinite(Number.parseFloat(t.frameSpanText))),M=x(()=>!Number.isFinite(Number.parseFloat(t.pitchText)));return[lt.cloneNode(!0),nt.cloneNode(!0),(()=>{const e=U.cloneNode(!0);return f(e,C(P,{})),e})(),D.cloneNode(!0),(()=>{const e=mt.cloneNode(!0),c=e.firstChild,p=c.nextSibling,b=p.firstChild,u=b.firstChild,G=u.nextSibling,T=G.firstChild,w=b.nextSibling,N=w.firstChild,a=N.nextSibling,o=a.firstChild,F=w.nextSibling,L=F.firstChild,A=L.nextSibling,E=A.firstChild,m=F.nextSibling,I=m.firstChild,R=I.nextSibling,z=R.firstChild,O=m.nextSibling,Q=O.firstChild,V=Q.nextSibling;return u.style.setProperty("padding-right","5px"),T.$$input=n=>{l("distIntoGutterText",n.currentTarget.value)},N.style.setProperty("padding-right","5px"),o.$$input=n=>{l("claddingThicknessText",n.currentTarget.value)},L.style.setProperty("padding-right","5px"),E.$$input=n=>{l("frameSpanText",n.currentTarget.value)},I.style.setProperty("padding-right","5px"),z.$$input=n=>{l("pitchText",n.currentTarget.value)},f(V,y),d(n=>{const j=S()?"red":"black",q=i()?"red":"black",B=s()?"red":"black",J=M()?"red":"black";return j!==n._v$6&&u.style.setProperty("color",n._v$6=j),q!==n._v$7&&N.style.setProperty("color",n._v$7=q),B!==n._v$8&&L.style.setProperty("color",n._v$8=B),J!==n._v$9&&I.style.setProperty("color",n._v$9=J),n},{_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),d(()=>T.value=t.distIntoGutterText),d(()=>o.value=t.claddingThicknessText),d(()=>E.value=t.frameSpanText),d(()=>z.value=t.pitchText),e})()]};W(["click","input"]);export{pt as default};
