import{i as _,b as z,c as U,a,g as K,e as o,f as X,t as y}from"./index.d01bdad3.js";import{S as Y}from"./utils.0603f061.js";const Z=y('<div style="padding-left: 5px; overflow: auto;"><h2>Calcs Page</h2><hr><hr><hr><hr><hr><hr><hr><hr></div>'),tt=y('<input class="btn btn-primary" type="button" value="Close">'),et=y("<h3>Convert Markup from/to GP</h3>"),R=y('<div style="font-size: 18pt; margin-top: 20pt;"></div>'),D=y("<br>"),rt=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Markup:</b></td><td><input type="text" size="10"></td><td>%</td><td style="font-size: 25pt; padding-left: 20px; padding-right: 20px;">&harr;</td><td><b>GP:</b></td><td><input type="text" size="10"></td><td>%</td></tr></tbody></table>'),it=y("<h3>Price from GP% And GST</h3>"),lt=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>GP:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td style="padding-right: 5px;"><b>Price:</b></td><td></td><td></td></tr></tbody></table>'),O=y("<h3>Price from Markup% And GST</h3>"),nt=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>Markup:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>Price:</b></td><td></td><td></td></tr></tbody></table>'),dt=y("<h3>GP% from Cost, Price and GST</h3>"),mt=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>Price:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GP:</b></td><td></td><td></td></tr></tbody></table>'),ot=y("<h3>Markup% from Cost, Price and GST</h3>"),st=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>Price:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>Markup:</b></td><td></td><td></td></tr></tbody></table>'),at=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Price:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>Markup:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>Cost:</b></td><td></td><td></td></tr></tbody></table>'),ut=y("<h3>Span to Roof Sheet Length</h3>"),ct=y(`<div style="padding-left: 10px;">(If roof is gable make the frame_span &frac12; of the building's frame span.)<br>(For skillion roof, cladding_thickness is double because the roof sheet is overhanging two wall claddings instead of one.)</div>`),pt=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Dist Into Gutter:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Cladding Thickness:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Frame Span:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Pitch:</b></td><td><input type="text" size="10"></td><td>&deg;</td></tr><tr><td><b>Roof Sheet Length:</b></td><td></td></tr></tbody></table>'),yt=G=>(()=>{const r=Z.cloneNode(!0),c=r.firstChild,S=c.nextSibling,k=S.nextSibling,N=k.nextSibling,w=N.nextSibling,t=w.nextSibling,l=t.nextSibling,d=l.nextSibling,m=d.nextSibling;return _(r,z(Y,{get when(){return G.onClose},keyed:!0,children:i=>(()=>{const x=tt.cloneNode(!0);return x.$$click=()=>i()(),x})()}),S),_(r,z(bt,{}),k),_(r,z(xt,{}),N),_(r,z($t,{}),w),_(r,z(gt,{}),t),_(r,z(_t,{}),l),_(r,z(ht,{}),d),_(r,z(Tt,{}),m),r})(),bt=()=>{let G=()=>{let i=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return i.innerHTML=`<mtable>
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
</mtable>`,i},r=i=>(1-1/(1+i/100))*100,c=i=>(1/(1-i/100)-1)*100,S=i=>{let x=Number.parseFloat(i);return Number.isFinite(x)?r(x).toFixed(4):""},k=i=>{let x=Number.parseFloat(i);return Number.isFinite(x)?c(x).toFixed(4):""},N="35.0000",w=S(N),[t,l]=U({markupPctText:N,gpPctText:w}),d=a(()=>!Number.isFinite(Number.parseFloat(t.markupPctText))),m=a(()=>!Number.isFinite(Number.parseFloat(t.gpPctText)));return[et.cloneNode(!0),(()=>{const i=R.cloneNode(!0);return _(i,z(G,{})),i})(),D.cloneNode(!0),(()=>{const i=rt.cloneNode(!0),x=i.firstChild,L=x.nextSibling,n=L.firstChild,b=n.firstChild,s=b.nextSibling,T=s.firstChild,h=s.nextSibling,f=h.nextSibling,$=f.nextSibling,p=$.nextSibling,C=p.firstChild;return b.style.setProperty("padding-right","5px"),T.$$input=g=>{let u=g.currentTarget.value;K(()=>{l("markupPctText",u),l("gpPctText",S(u))})},$.style.setProperty("padding-right","5px"),C.$$input=g=>{let u=g.currentTarget.value;K(()=>{l("gpPctText",u),l("markupPctText",k(u))})},o(g=>{const u=d()?"red":"black",I=m()?"red":"black";return u!==g._v$&&b.style.setProperty("color",g._v$=u),I!==g._v$2&&$.style.setProperty("color",g._v$2=I),g},{_v$:void 0,_v$2:void 0}),o(()=>T.value=t.markupPctText),o(()=>C.value=t.gpPctText),i})()]},xt=()=>{let G=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
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
</mtable>`,t},[r,c]=U({costText:"100.00",gpText:"30",gstText:"10"}),S=a(()=>{let t=Number.parseFloat(r.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(r.gpText);if(!Number.isFinite(l))return"";let d=Number.parseFloat(r.gstText);if(!Number.isFinite(d))return"";let m=t/(1-l/100)*(1+d/100);return"$"+m.toFixed(2)}),k=a(()=>!Number.isFinite(Number.parseFloat(r.costText))),N=a(()=>!Number.isFinite(Number.parseFloat(r.gpText))),w=a(()=>!Number.isFinite(Number.parseFloat(r.gstText)));return[it.cloneNode(!0),(()=>{const t=R.cloneNode(!0);return _(t,z(G,{})),t})(),D.cloneNode(!0),(()=>{const t=lt.cloneNode(!0),l=t.firstChild,d=l.nextSibling,m=d.firstChild,i=m.firstChild,x=i.nextSibling,L=x.nextSibling,n=L.firstChild,b=m.nextSibling,s=b.firstChild,T=s.nextSibling,h=T.nextSibling,f=h.firstChild,$=b.nextSibling,p=$.firstChild,C=p.nextSibling,g=C.nextSibling,u=g.firstChild,I=$.nextSibling,E=I.firstChild,H=E.nextSibling,A=H.nextSibling;return i.style.setProperty("padding-right","5px"),n.$$input=e=>{c("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),f.$$input=e=>{c("gpText",e.currentTarget.value)},p.style.setProperty("padding-right","5px"),u.$$input=e=>{c("gstText",e.currentTarget.value)},_(A,S),o(e=>{const v=k()?"red":"black",M=N()?"red":"black",F=w()?"red":"black";return v!==e._v$3&&i.style.setProperty("color",e._v$3=v),M!==e._v$4&&s.style.setProperty("color",e._v$4=M),F!==e._v$5&&p.style.setProperty("color",e._v$5=F),e},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),o(()=>n.value=r.costText),o(()=>f.value=r.gpText),o(()=>u.value=r.gstText),t})()]},$t=()=>{let G=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
    <mrow>
        <mi>price</mi>
        <mo>=</mo>
        <mi>cost</mi>
        <mo>&times;</mo>
        <mo>(</mo>
        <mn>1</mn>
        <mo>+</mo>
        <mi>markup_as_decimal</mi>
        <mo>)</mo>
        <mo>&times;</mo>
        <mo>(</mo>
        <mn>1</mn>
        <mo>+</mo>
        <mi>gst_as_decimal</mi>
        <mo>)</mo>
    </mrow>
</mtable>`,t},[r,c]=U({costText:"100.00",markupText:"30",gstText:"10"}),S=a(()=>{let t=Number.parseFloat(r.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(r.markupText);if(!Number.isFinite(l))return"";let d=Number.parseFloat(r.gstText);if(!Number.isFinite(d))return"";let m=t*(1+l/100)*(1+d/100);return"$"+m.toFixed(2)}),k=a(()=>!Number.isFinite(Number.parseFloat(r.costText))),N=a(()=>!Number.isFinite(Number.parseFloat(r.markupText))),w=a(()=>!Number.isFinite(Number.parseFloat(r.gstText)));return[O.cloneNode(!0),(()=>{const t=R.cloneNode(!0);return _(t,z(G,{})),t})(),D.cloneNode(!0),(()=>{const t=nt.cloneNode(!0),l=t.firstChild,d=l.nextSibling,m=d.firstChild,i=m.firstChild,x=i.nextSibling,L=x.nextSibling,n=L.firstChild,b=m.nextSibling,s=b.firstChild,T=s.nextSibling,h=T.nextSibling,f=h.firstChild,$=b.nextSibling,p=$.firstChild,C=p.nextSibling,g=C.nextSibling,u=g.firstChild,I=$.nextSibling,E=I.firstChild,H=E.nextSibling,A=H.nextSibling;return i.style.setProperty("padding-right","5px"),n.$$input=e=>{c("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),f.$$input=e=>{c("markupText",e.currentTarget.value)},p.style.setProperty("padding-right","5px"),u.$$input=e=>{c("gstText",e.currentTarget.value)},_(A,S),o(e=>{const v=k()?"red":"black",M=N()?"red":"black",F=w()?"red":"black";return v!==e._v$6&&i.style.setProperty("color",e._v$6=v),M!==e._v$7&&s.style.setProperty("color",e._v$7=M),F!==e._v$8&&p.style.setProperty("color",e._v$8=F),e},{_v$6:void 0,_v$7:void 0,_v$8:void 0}),o(()=>n.value=r.costText),o(()=>f.value=r.markupText),o(()=>u.value=r.gstText),t})()]},gt=()=>{let G=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
    <mrow>
        <mi>gp_as_decimal</mi>
        <mo>=</mo>
        <mi>1</mi>
        <mo>-</mo>
        <mfrac>
            <mrow>
                <mi>cost</mi>
                <mo>&times;</mo>
                <mo>(</mo>
                <mn>1</mn>
                <mo>+</mo>
                <mi>gst_as_decimal</mi>
                <mo>)</mo>
            </mrow>
            <mi>price</mi>
        </mfrac>
    </mrow>
</mtable>`,t},[r,c]=U({costText:"100.00",priceText:"175.00",gstText:"10.00"}),S=a(()=>{let t=Number.parseFloat(r.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(r.priceText);if(!Number.isFinite(l))return"";let d=Number.parseFloat(r.gstText);return Number.isFinite(d)?((1-t*(1+d/100)/l)*100).toFixed(4)+"%":""}),k=a(()=>!Number.isFinite(Number.parseFloat(r.costText))),N=a(()=>!Number.isFinite(Number.parseFloat(r.priceText))),w=a(()=>!Number.isFinite(Number.parseFloat(r.gstText)));return[dt.cloneNode(!0),(()=>{const t=R.cloneNode(!0);return _(t,z(G,{})),t})(),D.cloneNode(!0),(()=>{const t=mt.cloneNode(!0),l=t.firstChild,d=l.nextSibling,m=d.firstChild,i=m.firstChild,x=i.nextSibling,L=x.nextSibling,n=L.firstChild,b=m.nextSibling,s=b.firstChild,T=s.nextSibling,h=T.nextSibling,f=h.firstChild,$=b.nextSibling,p=$.firstChild,C=p.nextSibling,g=C.nextSibling,u=g.firstChild,I=$.nextSibling,E=I.firstChild,H=E.nextSibling,A=H.nextSibling;return i.style.setProperty("padding-right","5px"),n.$$input=e=>{c("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),f.$$input=e=>{c("priceText",e.currentTarget.value)},p.style.setProperty("padding-right","5px"),u.$$input=e=>{c("gstText",e.currentTarget.value)},_(A,S),o(e=>{const v=k()?"red":"black",M=N()?"red":"black",F=w()?"red":"black";return v!==e._v$9&&i.style.setProperty("color",e._v$9=v),M!==e._v$10&&s.style.setProperty("color",e._v$10=M),F!==e._v$11&&p.style.setProperty("color",e._v$11=F),e},{_v$9:void 0,_v$10:void 0,_v$11:void 0}),o(()=>n.value=r.costText),o(()=>f.value=r.priceText),o(()=>u.value=r.gstText),t})()]},_t=()=>{let G=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
    <mrow>
        <mi>markup_as_decimal</mi>
        <mo>=</mo>
        <mfrac>
            <mi>price</mi>
            <mrow>
                <mi>cost</mi>
                <mo>&times;</mo>
                <mo>(</mo>
                <mn>1</mn>
                <mo>+</mo>
                <mi>gst_as_decimal</mi>
                <mo>)</mo>
            </mrow>
        </mfrac>
        <mo>-</mo>
        <mn>1</mn>
    </mrow>
</mtable>`,t},[r,c]=U({costText:"100.00",priceText:"175.00",gstText:"10.00"}),S=a(()=>{let t=Number.parseFloat(r.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(r.priceText);if(!Number.isFinite(l))return"";let d=Number.parseFloat(r.gstText);return Number.isFinite(d)?((l/(t*(1+d/100))-1)*100).toFixed(4)+"%":""}),k=a(()=>!Number.isFinite(Number.parseFloat(r.costText))),N=a(()=>!Number.isFinite(Number.parseFloat(r.priceText))),w=a(()=>!Number.isFinite(Number.parseFloat(r.gstText)));return[ot.cloneNode(!0),(()=>{const t=R.cloneNode(!0);return _(t,z(G,{})),t})(),D.cloneNode(!0),(()=>{const t=st.cloneNode(!0),l=t.firstChild,d=l.nextSibling,m=d.firstChild,i=m.firstChild,x=i.nextSibling,L=x.nextSibling,n=L.firstChild,b=m.nextSibling,s=b.firstChild,T=s.nextSibling,h=T.nextSibling,f=h.firstChild,$=b.nextSibling,p=$.firstChild,C=p.nextSibling,g=C.nextSibling,u=g.firstChild,I=$.nextSibling,E=I.firstChild,H=E.nextSibling,A=H.nextSibling;return i.style.setProperty("padding-right","5px"),n.$$input=e=>{c("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),f.$$input=e=>{c("priceText",e.currentTarget.value)},p.style.setProperty("padding-right","5px"),u.$$input=e=>{c("gstText",e.currentTarget.value)},_(A,S),o(e=>{const v=k()?"red":"black",M=N()?"red":"black",F=w()?"red":"black";return v!==e._v$12&&i.style.setProperty("color",e._v$12=v),M!==e._v$13&&s.style.setProperty("color",e._v$13=M),F!==e._v$14&&p.style.setProperty("color",e._v$14=F),e},{_v$12:void 0,_v$13:void 0,_v$14:void 0}),o(()=>n.value=r.costText),o(()=>f.value=r.priceText),o(()=>u.value=r.gstText),t})()]},ht=()=>{let G=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
    <mrow>
        <mi>cost</mi>
        <mo>=</mo>
        <mfrac>
            <mi>price</mi>
            <mrow>
                <mo>(</mo>
                    <mn>1</mn>
                    <mo>+</mo>
                    <mi>gst_as_decimal</mi>
                <mo>)</mo>
                <mo>&times;</mo>
                <mo>(</mo>
                    <mn>1</mn>
                    <mo>+</mo>
                    <mi>markup_as_decimal</mi>
                <mo>)</mo>
            </mrow>
        </mfrac>
    </mrow>
</mtable>`,t},[r,c]=U({priceText:"100.00",markupText:"30",gstText:"10"}),S=a(()=>{let t=Number.parseFloat(r.priceText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(r.markupText);if(!Number.isFinite(l))return"";let d=Number.parseFloat(r.gstText);if(!Number.isFinite(d))return"";let m=t/(1+l/100)/(1+d/100);return"$"+m.toFixed(2)}),k=a(()=>!Number.isFinite(Number.parseFloat(r.priceText))),N=a(()=>!Number.isFinite(Number.parseFloat(r.markupText))),w=a(()=>!Number.isFinite(Number.parseFloat(r.gstText)));return[O.cloneNode(!0),(()=>{const t=R.cloneNode(!0);return _(t,z(G,{})),t})(),D.cloneNode(!0),(()=>{const t=at.cloneNode(!0),l=t.firstChild,d=l.nextSibling,m=d.firstChild,i=m.firstChild,x=i.nextSibling,L=x.nextSibling,n=L.firstChild,b=m.nextSibling,s=b.firstChild,T=s.nextSibling,h=T.nextSibling,f=h.firstChild,$=b.nextSibling,p=$.firstChild,C=p.nextSibling,g=C.nextSibling,u=g.firstChild,I=$.nextSibling,E=I.firstChild,H=E.nextSibling,A=H.nextSibling;return i.style.setProperty("padding-right","5px"),n.$$input=e=>{c("priceText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),f.$$input=e=>{c("markupText",e.currentTarget.value)},p.style.setProperty("padding-right","5px"),u.$$input=e=>{c("gstText",e.currentTarget.value)},_(A,S),o(e=>{const v=k()?"red":"black",M=N()?"red":"black",F=w()?"red":"black";return v!==e._v$15&&i.style.setProperty("color",e._v$15=v),M!==e._v$16&&s.style.setProperty("color",e._v$16=M),F!==e._v$17&&p.style.setProperty("color",e._v$17=F),e},{_v$15:void 0,_v$16:void 0,_v$17:void 0}),o(()=>n.value=r.priceText),o(()=>f.value=r.markupText),o(()=>u.value=r.gstText),t})()]},Tt=()=>{let G=()=>{let n=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return n.innerHTML=`<mtable>
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

</mtable>`,n},r=n=>(n.frameSpan+n.claddingThickness)/Math.cos(n.pitch*Math.PI/180)+n.distIntoGutter,c=n=>{let b=Number.parseFloat(n.distIntoGutterText);if(!Number.isFinite(b))return"";let s=Number.parseFloat(n.claddingThicknessText);if(!Number.isFinite(s))return"";let T=Number.parseFloat(n.frameSpanText);if(!Number.isFinite(T))return"";let h=Number.parseFloat(n.pitchText);return Number.isFinite(h)?(h-90)%180==0?"Infinity":r({distIntoGutter:b,claddingThickness:s,frameSpan:T,pitch:h}).toFixed(0)+"mm":""},S="20",k="30",N="3000",w="15",[t,l]=U({distIntoGutterText:S,claddingThicknessText:k,frameSpanText:N,pitchText:w}),d=a(()=>c({distIntoGutterText:t.distIntoGutterText,claddingThicknessText:t.claddingThicknessText,frameSpanText:t.frameSpanText,pitchText:t.pitchText})),m=a(()=>!Number.isFinite(Number.parseFloat(t.distIntoGutterText))),i=a(()=>!Number.isFinite(Number.parseFloat(t.claddingThicknessText))),x=a(()=>!Number.isFinite(Number.parseFloat(t.frameSpanText))),L=a(()=>!Number.isFinite(Number.parseFloat(t.pitchText)));return[ut.cloneNode(!0),ct.cloneNode(!0),(()=>{const n=R.cloneNode(!0);return _(n,z(G,{})),n})(),D.cloneNode(!0),(()=>{const n=pt.cloneNode(!0),b=n.firstChild,s=b.nextSibling,T=s.firstChild,h=T.firstChild,f=h.nextSibling,$=f.firstChild,p=T.nextSibling,C=p.firstChild,g=C.nextSibling,u=g.firstChild,I=p.nextSibling,E=I.firstChild,H=E.nextSibling,A=H.firstChild,e=I.nextSibling,v=e.firstChild,M=v.nextSibling,F=M.firstChild,Q=e.nextSibling,V=Q.firstChild,W=V.nextSibling;return h.style.setProperty("padding-right","5px"),$.$$input=P=>{l("distIntoGutterText",P.currentTarget.value)},C.style.setProperty("padding-right","5px"),u.$$input=P=>{l("claddingThicknessText",P.currentTarget.value)},E.style.setProperty("padding-right","5px"),A.$$input=P=>{l("frameSpanText",P.currentTarget.value)},v.style.setProperty("padding-right","5px"),F.$$input=P=>{l("pitchText",P.currentTarget.value)},_(W,d),o(P=>{const j=m()?"red":"black",q=i()?"red":"black",B=x()?"red":"black",J=L()?"red":"black";return j!==P._v$18&&h.style.setProperty("color",P._v$18=j),q!==P._v$19&&C.style.setProperty("color",P._v$19=q),B!==P._v$20&&E.style.setProperty("color",P._v$20=B),J!==P._v$21&&v.style.setProperty("color",P._v$21=J),P},{_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),o(()=>$.value=t.distIntoGutterText),o(()=>u.value=t.claddingThicknessText),o(()=>A.value=t.frameSpanText),o(()=>F.value=t.pitchText),n})()]};X(["click","input"]);export{yt as default};