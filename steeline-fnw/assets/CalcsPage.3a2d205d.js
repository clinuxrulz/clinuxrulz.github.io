import{i as f,b as w,c as j,a as g,g as U,e as u,f as W,t as d}from"./index.c8182bb0.js";import{S as X}from"./utils.8ae0a69e.js";const Y=d('<div style="padding-left: 5px; overflow: auto;"><h2>Calcs Page</h2><hr><hr><hr></div>'),Z=d('<input class="btn btn-primary" type="button" value="Close">'),tt=d("<h3>Convert Markup from/to GP</h3>"),q=d('<div style="font-size: 18pt; margin-top: 20pt;"></div>'),B=d("<br>"),et=d('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Markup:</b></td><td><input type="text" size="10"></td><td>%</td><td style="font-size: 25pt; padding-left: 20px; padding-right: 20px;">&harr;</td><td><b>GP:</b></td><td><input type="text" size="10"></td><td>%</td></tr></tbody></table>'),it=d("<h3>Span to Roof Sheet Length</h3>"),rt=d('<div style="padding-left: 10px;">(Formulas are for Skillion. For gable make the frame_span &frac12; of the building span.)</div>'),nt=d('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Dist Into Gutter:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Cladding Thickness:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Frame Span:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Pitch:</b></td><td><input type="text" size="10"></td><td>&deg;</td></tr><tr><td><b>Roof Sheet Length:</b></td><td></td></tr></tbody></table>'),dt=v=>(()=>{const m=Y.cloneNode(!0),y=m.firstChild,h=y.nextSibling,b=h.nextSibling,_=b.nextSibling;return f(m,w(X,{get when(){return v.onClose},keyed:!0,children:S=>(()=>{const e=Z.cloneNode(!0);return e.$$click=()=>S()(),e})()}),h),f(m,w(lt,{}),b),f(m,w(mt,{}),_),m})(),lt=()=>{let v=()=>{let i=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return i.setAttribute("display","block"),i.innerHTML=`<mtable>
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
</mtable>`,i},m=i=>(1-1/(1+i/100))*100,y=i=>(1/(1-i/100)-1)*100,h=i=>{let o=Number.parseFloat(i);return Number.isFinite(o)?m(o).toFixed(4):""},b=i=>{let o=Number.parseFloat(i);return Number.isFinite(o)?y(o).toFixed(4):""},_="35.0000",S=h(_),[e,a]=j({markupPctText:_,gpPctText:S}),N=g(()=>!Number.isFinite(Number.parseFloat(e.markupPctText))),F=g(()=>!Number.isFinite(Number.parseFloat(e.gpPctText)));return[tt.cloneNode(!0),(()=>{const i=q.cloneNode(!0);return f(i,w(v,{})),i})(),B.cloneNode(!0),(()=>{const i=et.cloneNode(!0),o=i.firstChild,C=o.nextSibling,t=C.firstChild,s=t.firstChild,x=s.nextSibling,c=x.firstChild,p=x.nextSibling,I=p.nextSibling,T=I.nextSibling,P=T.nextSibling,$=P.firstChild;return s.style.setProperty("padding-right","5px"),c.$$input=n=>{let l=n.currentTarget.value;U(()=>{a("markupPctText",l),a("gpPctText",h(l))})},T.style.setProperty("padding-right","5px"),$.$$input=n=>{let l=n.currentTarget.value;U(()=>{a("gpPctText",l),a("markupPctText",b(l))})},u(n=>{const l=N()?"red":"black",k=F()?"red":"black";return l!==n._v$&&s.style.setProperty("color",n._v$=l),k!==n._v$2&&T.style.setProperty("color",n._v$2=k),n},{_v$:void 0,_v$2:void 0}),u(()=>c.value=e.markupPctText),u(()=>$.value=e.gpPctText),i})()]},mt=()=>{let v=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.setAttribute("display","block"),t.innerHTML=`<mtable>
    <mrow>
        <mi>dist_into_gutter</mi><mo>=</mo><mn>20mm</mn><mspace width="20px"/><mtext>(usually)</mtext>
    </mrow>
    <mrow>
        <mspace height="20pt"></mspace>
    </mrow>
    <mrow>
        <mi>cladding_thickness</mi><mo>=</mo><mn>30mm</mn><mspace width="20px"/><mtext>(usually)</mtext>
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

</mtable>`,t},m=t=>(t.frameSpan+t.claddingThickness)/Math.cos(t.pitch*Math.PI/180)+t.distIntoGutter,y=t=>{let s=Number.parseFloat(t.distIntoGutterText);if(!Number.isFinite(s))return"";let x=Number.parseFloat(t.claddingThicknessText);if(!Number.isFinite(x))return"";let c=Number.parseFloat(t.frameSpanText);if(!Number.isFinite(c))return"";let p=Number.parseFloat(t.pitchText);return Number.isFinite(p)?m({distIntoGutter:s,claddingThickness:x,frameSpan:c,pitch:p}).toFixed(0)+"mm":""},h="20",b="30",_="3000",S="15",[e,a]=j({distIntoGutterText:h,claddingThicknessText:b,frameSpanText:_,pitchText:S}),N=g(()=>y({distIntoGutterText:e.distIntoGutterText,claddingThicknessText:e.claddingThicknessText,frameSpanText:e.frameSpanText,pitchText:e.pitchText})),F=g(()=>!Number.isFinite(Number.parseFloat(e.distIntoGutterText))),i=g(()=>!Number.isFinite(Number.parseFloat(e.claddingThicknessText))),o=g(()=>!Number.isFinite(Number.parseFloat(e.frameSpanText))),C=g(()=>!Number.isFinite(Number.parseFloat(e.pitchText)));return[it.cloneNode(!0),rt.cloneNode(!0),(()=>{const t=q.cloneNode(!0);return f(t,w(v,{})),t})(),B.cloneNode(!0),(()=>{const t=nt.cloneNode(!0),s=t.firstChild,x=s.nextSibling,c=x.firstChild,p=c.firstChild,I=p.nextSibling,T=I.firstChild,P=c.nextSibling,$=P.firstChild,n=$.nextSibling,l=n.firstChild,k=P.nextSibling,M=k.firstChild,J=M.nextSibling,L=J.firstChild,z=k.nextSibling,G=z.firstChild,K=G.nextSibling,E=K.firstChild,O=z.nextSibling,Q=O.firstChild,V=Q.nextSibling;return p.style.setProperty("padding-right","5px"),T.$$input=r=>{a("distIntoGutterText",r.currentTarget.value)},$.style.setProperty("padding-right","5px"),l.$$input=r=>{a("claddingThicknessText",r.currentTarget.value)},M.style.setProperty("padding-right","5px"),L.$$input=r=>{a("frameSpanText",r.currentTarget.value)},G.style.setProperty("padding-right","5px"),E.$$input=r=>{a("pitchText",r.currentTarget.value)},f(V,N),u(r=>{const R=F()?"red":"black",A=i()?"red":"black",D=o()?"red":"black",H=C()?"red":"black";return R!==r._v$3&&p.style.setProperty("color",r._v$3=R),A!==r._v$4&&$.style.setProperty("color",r._v$4=A),D!==r._v$5&&M.style.setProperty("color",r._v$5=D),H!==r._v$6&&G.style.setProperty("color",r._v$6=H),r},{_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),u(()=>T.value=e.distIntoGutterText),u(()=>l.value=e.claddingThicknessText),u(()=>L.value=e.frameSpanText),u(()=>E.value=e.pitchText),t})()]};W(["click","input"]);export{dt as default};
