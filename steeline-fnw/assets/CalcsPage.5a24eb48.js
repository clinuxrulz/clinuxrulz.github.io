import{i as g,b as z,c as R,a as u,g as K,e as m,f as W,t as f}from"./index.9f620141.js";import{S as X}from"./utils.f164d3c2.js";const Y=f('<div style="padding-left: 5px; overflow: auto;"><h2>Calcs Page</h2><hr><hr><hr><hr><hr><hr><hr></div>'),Z=f('<input class="btn btn-primary" type="button" value="Close">'),tt=f("<h3>Convert Markup from/to GP</h3>"),U=f('<div style="font-size: 18pt; margin-top: 20pt;"></div>'),D=f("<br>"),et=f('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Markup:</b></td><td><input type="text" size="10"></td><td>%</td><td style="font-size: 25pt; padding-left: 20px; padding-right: 20px;">&harr;</td><td><b>GP:</b></td><td><input type="text" size="10"></td><td>%</td></tr></tbody></table>'),rt=f("<h3>Price from GP% And GST</h3>"),it=f('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>GP:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td style="padding-right: 5px;"><b>Price:</b></td><td></td><td></td></tr></tbody></table>'),lt=f("<h3>Price from Markup% And GST</h3>"),nt=f('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>Markup:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>Price:</b></td><td></td><td></td></tr></tbody></table>'),ot=f("<h3>GP% from Cost, Price and GST</h3>"),mt=f('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>Price:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GP:</b></td><td></td><td></td></tr></tbody></table>'),dt=f("<h3>Markup% from Cost, Price and GST</h3>"),st=f('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>Price:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>Markup:</b></td><td></td><td></td></tr></tbody></table>'),at=f("<h3>Span to Roof Sheet Length</h3>"),ut=f(`<div style="padding-left: 10px;">(If roof is gable make the frame_span &frac12; of the building's frame span.)<br>(For skillion roof, cladding_thickness is double because the roof sheet is overhanging two wall claddings instead of one.)</div>`),ct=f('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Dist Into Gutter:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Cladding Thickness:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Frame Span:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Pitch:</b></td><td><input type="text" size="10"></td><td>&deg;</td></tr><tr><td><b>Roof Sheet Length:</b></td><td></td></tr></tbody></table>'),ft=M=>(()=>{const r=Y.cloneNode(!0),c=r.firstChild,y=c.nextSibling,P=y.nextSibling,S=P.nextSibling,w=S.nextSibling,t=w.nextSibling,l=t.nextSibling,o=l.nextSibling;return g(r,z(X,{get when(){return M.onClose},keyed:!0,children:d=>(()=>{const i=Z.cloneNode(!0);return i.$$click=()=>d()(),i})()}),y),g(r,z(pt,{}),P),g(r,z(bt,{}),S),g(r,z(xt,{}),w),g(r,z($t,{}),t),g(r,z(gt,{}),l),g(r,z(_t,{}),o),r})(),pt=()=>{let M=()=>{let i=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return i.innerHTML=`<mtable>
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
</mtable>`,i},r=i=>(1-1/(1+i/100))*100,c=i=>(1/(1-i/100)-1)*100,y=i=>{let _=Number.parseFloat(i);return Number.isFinite(_)?r(_).toFixed(4):""},P=i=>{let _=Number.parseFloat(i);return Number.isFinite(_)?c(_).toFixed(4):""},S="35.0000",w=y(S),[t,l]=R({markupPctText:S,gpPctText:w}),o=u(()=>!Number.isFinite(Number.parseFloat(t.markupPctText))),d=u(()=>!Number.isFinite(Number.parseFloat(t.gpPctText)));return[tt.cloneNode(!0),(()=>{const i=U.cloneNode(!0);return g(i,z(M,{})),i})(),D.cloneNode(!0),(()=>{const i=et.cloneNode(!0),_=i.firstChild,L=_.nextSibling,n=L.firstChild,p=n.firstChild,s=p.nextSibling,v=s.firstChild,h=s.nextSibling,N=h.nextSibling,$=N.nextSibling,b=$.nextSibling,k=b.firstChild;return p.style.setProperty("padding-right","5px"),v.$$input=x=>{let a=x.currentTarget.value;K(()=>{l("markupPctText",a),l("gpPctText",y(a))})},$.style.setProperty("padding-right","5px"),k.$$input=x=>{let a=x.currentTarget.value;K(()=>{l("gpPctText",a),l("markupPctText",P(a))})},m(x=>{const a=o()?"red":"black",G=d()?"red":"black";return a!==x._v$&&p.style.setProperty("color",x._v$=a),G!==x._v$2&&$.style.setProperty("color",x._v$2=G),x},{_v$:void 0,_v$2:void 0}),m(()=>v.value=t.markupPctText),m(()=>k.value=t.gpPctText),i})()]},bt=()=>{let M=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
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
</mtable>`,t},[r,c]=R({costText:"100.00",gpText:"30",gstText:"10"}),y=u(()=>{let t=Number.parseFloat(r.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(r.gpText);if(!Number.isFinite(l))return"";let o=Number.parseFloat(r.gstText);if(!Number.isFinite(o))return"";let d=t/(1-l/100)*(1+o/100);return"$"+d.toFixed(2)}),P=u(()=>!Number.isFinite(Number.parseFloat(r.costText))),S=u(()=>!Number.isFinite(Number.parseFloat(r.gpText))),w=u(()=>!Number.isFinite(Number.parseFloat(r.gstText)));return[rt.cloneNode(!0),(()=>{const t=U.cloneNode(!0);return g(t,z(M,{})),t})(),D.cloneNode(!0),(()=>{const t=it.cloneNode(!0),l=t.firstChild,o=l.nextSibling,d=o.firstChild,i=d.firstChild,_=i.nextSibling,L=_.nextSibling,n=L.firstChild,p=d.nextSibling,s=p.firstChild,v=s.nextSibling,h=v.nextSibling,N=h.firstChild,$=p.nextSibling,b=$.firstChild,k=b.nextSibling,x=k.nextSibling,a=x.firstChild,G=$.nextSibling,E=G.firstChild,H=E.nextSibling,A=H.nextSibling;return i.style.setProperty("padding-right","5px"),n.$$input=e=>{c("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),N.$$input=e=>{c("gpText",e.currentTarget.value)},b.style.setProperty("padding-right","5px"),a.$$input=e=>{c("gstText",e.currentTarget.value)},g(A,y),m(e=>{const F=P()?"red":"black",I=S()?"red":"black",C=w()?"red":"black";return F!==e._v$3&&i.style.setProperty("color",e._v$3=F),I!==e._v$4&&s.style.setProperty("color",e._v$4=I),C!==e._v$5&&b.style.setProperty("color",e._v$5=C),e},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),m(()=>n.value=r.costText),m(()=>N.value=r.gpText),m(()=>a.value=r.gstText),t})()]},xt=()=>{let M=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
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
</mtable>`,t},[r,c]=R({costText:"100.00",markupText:"30",gstText:"10"}),y=u(()=>{let t=Number.parseFloat(r.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(r.markupText);if(!Number.isFinite(l))return"";let o=Number.parseFloat(r.gstText);if(!Number.isFinite(o))return"";let d=t*(1+l/100)*(1+o/100);return"$"+d.toFixed(2)}),P=u(()=>!Number.isFinite(Number.parseFloat(r.costText))),S=u(()=>!Number.isFinite(Number.parseFloat(r.markupText))),w=u(()=>!Number.isFinite(Number.parseFloat(r.gstText)));return[lt.cloneNode(!0),(()=>{const t=U.cloneNode(!0);return g(t,z(M,{})),t})(),D.cloneNode(!0),(()=>{const t=nt.cloneNode(!0),l=t.firstChild,o=l.nextSibling,d=o.firstChild,i=d.firstChild,_=i.nextSibling,L=_.nextSibling,n=L.firstChild,p=d.nextSibling,s=p.firstChild,v=s.nextSibling,h=v.nextSibling,N=h.firstChild,$=p.nextSibling,b=$.firstChild,k=b.nextSibling,x=k.nextSibling,a=x.firstChild,G=$.nextSibling,E=G.firstChild,H=E.nextSibling,A=H.nextSibling;return i.style.setProperty("padding-right","5px"),n.$$input=e=>{c("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),N.$$input=e=>{c("markupText",e.currentTarget.value)},b.style.setProperty("padding-right","5px"),a.$$input=e=>{c("gstText",e.currentTarget.value)},g(A,y),m(e=>{const F=P()?"red":"black",I=S()?"red":"black",C=w()?"red":"black";return F!==e._v$6&&i.style.setProperty("color",e._v$6=F),I!==e._v$7&&s.style.setProperty("color",e._v$7=I),C!==e._v$8&&b.style.setProperty("color",e._v$8=C),e},{_v$6:void 0,_v$7:void 0,_v$8:void 0}),m(()=>n.value=r.costText),m(()=>N.value=r.markupText),m(()=>a.value=r.gstText),t})()]},$t=()=>{let M=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
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
</mtable>`,t},[r,c]=R({costText:"100.00",priceText:"175.00",gstText:"10.00"}),y=u(()=>{let t=Number.parseFloat(r.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(r.priceText);if(!Number.isFinite(l))return"";let o=Number.parseFloat(r.gstText);return Number.isFinite(o)?((1-t*(1+o/100)/l)*100).toFixed(4)+"%":""}),P=u(()=>!Number.isFinite(Number.parseFloat(r.costText))),S=u(()=>!Number.isFinite(Number.parseFloat(r.priceText))),w=u(()=>!Number.isFinite(Number.parseFloat(r.gstText)));return[ot.cloneNode(!0),(()=>{const t=U.cloneNode(!0);return g(t,z(M,{})),t})(),D.cloneNode(!0),(()=>{const t=mt.cloneNode(!0),l=t.firstChild,o=l.nextSibling,d=o.firstChild,i=d.firstChild,_=i.nextSibling,L=_.nextSibling,n=L.firstChild,p=d.nextSibling,s=p.firstChild,v=s.nextSibling,h=v.nextSibling,N=h.firstChild,$=p.nextSibling,b=$.firstChild,k=b.nextSibling,x=k.nextSibling,a=x.firstChild,G=$.nextSibling,E=G.firstChild,H=E.nextSibling,A=H.nextSibling;return i.style.setProperty("padding-right","5px"),n.$$input=e=>{c("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),N.$$input=e=>{c("priceText",e.currentTarget.value)},b.style.setProperty("padding-right","5px"),a.$$input=e=>{c("gstText",e.currentTarget.value)},g(A,y),m(e=>{const F=P()?"red":"black",I=S()?"red":"black",C=w()?"red":"black";return F!==e._v$9&&i.style.setProperty("color",e._v$9=F),I!==e._v$10&&s.style.setProperty("color",e._v$10=I),C!==e._v$11&&b.style.setProperty("color",e._v$11=C),e},{_v$9:void 0,_v$10:void 0,_v$11:void 0}),m(()=>n.value=r.costText),m(()=>N.value=r.priceText),m(()=>a.value=r.gstText),t})()]},gt=()=>{let M=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
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
</mtable>`,t},[r,c]=R({costText:"100.00",priceText:"175.00",gstText:"10.00"}),y=u(()=>{let t=Number.parseFloat(r.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(r.priceText);if(!Number.isFinite(l))return"";let o=Number.parseFloat(r.gstText);return Number.isFinite(o)?((l/(t*(1+o/100))-1)*100).toFixed(4)+"%":""}),P=u(()=>!Number.isFinite(Number.parseFloat(r.costText))),S=u(()=>!Number.isFinite(Number.parseFloat(r.priceText))),w=u(()=>!Number.isFinite(Number.parseFloat(r.gstText)));return[dt.cloneNode(!0),(()=>{const t=U.cloneNode(!0);return g(t,z(M,{})),t})(),D.cloneNode(!0),(()=>{const t=st.cloneNode(!0),l=t.firstChild,o=l.nextSibling,d=o.firstChild,i=d.firstChild,_=i.nextSibling,L=_.nextSibling,n=L.firstChild,p=d.nextSibling,s=p.firstChild,v=s.nextSibling,h=v.nextSibling,N=h.firstChild,$=p.nextSibling,b=$.firstChild,k=b.nextSibling,x=k.nextSibling,a=x.firstChild,G=$.nextSibling,E=G.firstChild,H=E.nextSibling,A=H.nextSibling;return i.style.setProperty("padding-right","5px"),n.$$input=e=>{c("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),N.$$input=e=>{c("priceText",e.currentTarget.value)},b.style.setProperty("padding-right","5px"),a.$$input=e=>{c("gstText",e.currentTarget.value)},g(A,y),m(e=>{const F=P()?"red":"black",I=S()?"red":"black",C=w()?"red":"black";return F!==e._v$12&&i.style.setProperty("color",e._v$12=F),I!==e._v$13&&s.style.setProperty("color",e._v$13=I),C!==e._v$14&&b.style.setProperty("color",e._v$14=C),e},{_v$12:void 0,_v$13:void 0,_v$14:void 0}),m(()=>n.value=r.costText),m(()=>N.value=r.priceText),m(()=>a.value=r.gstText),t})()]},_t=()=>{let M=()=>{let n=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return n.innerHTML=`<mtable>
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

</mtable>`,n},r=n=>(n.frameSpan+n.claddingThickness)/Math.cos(n.pitch*Math.PI/180)+n.distIntoGutter,c=n=>{let p=Number.parseFloat(n.distIntoGutterText);if(!Number.isFinite(p))return"";let s=Number.parseFloat(n.claddingThicknessText);if(!Number.isFinite(s))return"";let v=Number.parseFloat(n.frameSpanText);if(!Number.isFinite(v))return"";let h=Number.parseFloat(n.pitchText);return Number.isFinite(h)?(h-90)%180==0?"Infinity":r({distIntoGutter:p,claddingThickness:s,frameSpan:v,pitch:h}).toFixed(0)+"mm":""},y="20",P="30",S="3000",w="15",[t,l]=R({distIntoGutterText:y,claddingThicknessText:P,frameSpanText:S,pitchText:w}),o=u(()=>c({distIntoGutterText:t.distIntoGutterText,claddingThicknessText:t.claddingThicknessText,frameSpanText:t.frameSpanText,pitchText:t.pitchText})),d=u(()=>!Number.isFinite(Number.parseFloat(t.distIntoGutterText))),i=u(()=>!Number.isFinite(Number.parseFloat(t.claddingThicknessText))),_=u(()=>!Number.isFinite(Number.parseFloat(t.frameSpanText))),L=u(()=>!Number.isFinite(Number.parseFloat(t.pitchText)));return[at.cloneNode(!0),ut.cloneNode(!0),(()=>{const n=U.cloneNode(!0);return g(n,z(M,{})),n})(),D.cloneNode(!0),(()=>{const n=ct.cloneNode(!0),p=n.firstChild,s=p.nextSibling,v=s.firstChild,h=v.firstChild,N=h.nextSibling,$=N.firstChild,b=v.nextSibling,k=b.firstChild,x=k.nextSibling,a=x.firstChild,G=b.nextSibling,E=G.firstChild,H=E.nextSibling,A=H.firstChild,e=G.nextSibling,F=e.firstChild,I=F.nextSibling,C=I.firstChild,O=e.nextSibling,Q=O.firstChild,V=Q.nextSibling;return h.style.setProperty("padding-right","5px"),$.$$input=T=>{l("distIntoGutterText",T.currentTarget.value)},k.style.setProperty("padding-right","5px"),a.$$input=T=>{l("claddingThicknessText",T.currentTarget.value)},E.style.setProperty("padding-right","5px"),A.$$input=T=>{l("frameSpanText",T.currentTarget.value)},F.style.setProperty("padding-right","5px"),C.$$input=T=>{l("pitchText",T.currentTarget.value)},g(V,o),m(T=>{const j=d()?"red":"black",q=i()?"red":"black",B=_()?"red":"black",J=L()?"red":"black";return j!==T._v$15&&h.style.setProperty("color",T._v$15=j),q!==T._v$16&&k.style.setProperty("color",T._v$16=q),B!==T._v$17&&E.style.setProperty("color",T._v$17=B),J!==T._v$18&&F.style.setProperty("color",T._v$18=J),T},{_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0}),m(()=>$.value=t.distIntoGutterText),m(()=>a.value=t.claddingThicknessText),m(()=>A.value=t.frameSpanText),m(()=>C.value=t.pitchText),n})()]};W(["click","input"]);export{ft as default};
