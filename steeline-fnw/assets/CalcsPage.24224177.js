import{i as b,b as I,N as X,c as R,a as d,g as B,e as a,f as Y,t as y}from"./index.5aba22ff.js";const Z=y('<div style="padding-left: 5px; overflow: auto;"><h2>Calcs Page</h2><hr><hr><hr><hr><hr><hr><hr><hr><hr></div>'),tt=y('<input class="btn btn-primary" type="button" value="Close">'),et=y("<h3>Convert Markup from/to GP</h3>"),U=y('<div style="font-size: 18pt; margin-top: 20pt;"></div>'),V=y("<br>"),it=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Markup:</b></td><td><input type="text" size="10"></td><td>%</td><td style="font-size: 25pt; padding-left: 20px; padding-right: 20px;">&harr;</td><td><b>GP:</b></td><td><input type="text" size="10"></td><td>%</td></tr></tbody></table>'),rt=y("<h3>Price from GP% And GST</h3>"),lt=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>GP:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td style="padding-right: 5px;"><b>Price:</b></td><td></td><td></td></tr></tbody></table>'),J=y("<h3>Price from Markup% And GST</h3>"),nt=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>Markup:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>Price:</b></td><td></td><td></td></tr></tbody></table>'),mt=y("<h3>GP% from Cost, Price and GST</h3>"),ot=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>Price:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GP:</b></td><td></td><td></td></tr></tbody></table>'),dt=y("<h3>Markup% from Cost, Price and GST</h3>"),at=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Cost:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>Price:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>Markup:</b></td><td></td><td></td></tr></tbody></table>'),st=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Price:</b></td><td>$</td><td><input type="text" size="10"></td></tr><tr><td><b>Markup:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>GST:</b></td><td></td><td><input type="text" size="10"></td><td>%</td></tr><tr><td><b>Cost:</b></td><td></td><td></td></tr></tbody></table>'),ut=y("<h3>Span to Roof Sheet Length</h3>"),ct=y(`<div style="padding-left: 10px;">(If roof is gable make the frame_span &frac12; of the building's frame span.)<br>(For skillion roof, cladding_thickness is double because the roof sheet is overhanging two wall claddings instead of one.)</div>`),pt=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Dist Into Gutter:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Cladding Thickness:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Frame Span:</b></td><td><input type="text" size="10"></td><td>mm</td></tr><tr><td><b>Pitch:</b></td><td><input type="text" size="10"></td><td>&deg;</td></tr><tr><td><b>Roof Sheet Length:</b></td><td></td></tr></tbody></table>'),bt=y("<h3>Internal Flashing Angles for Ridge/Hip/Valley</h3>"),xt=y('<table class="table-no-borders"><thead></thead><tbody><tr><td><b>Pitch:</b></td><td><input type="text" size="10"></td><td>&deg;</td></tr><tr><td><b>Ridge Internal Flashing Angle:</b></td><td></td></tr><tr><td><b>Hip/Valley Internal Flashing Angle:</b></td><td></td></tr></tbody></table>'),Nt=k=>(()=>{const i=Z.cloneNode(!0),u=i.firstChild,T=u.nextSibling,F=T.nextSibling,S=F.nextSibling,w=S.nextSibling,t=w.nextSibling,l=t.nextSibling,m=l.nextSibling,o=m.nextSibling,r=o.nextSibling;return b(i,I(X,{get when(){return k.onClose},children:g=>(()=>{const N=tt.cloneNode(!0);return N.$$click=()=>g()(),N})()}),T),b(i,I(gt,{}),F),b(i,I($t,{}),S),b(i,I(_t,{}),w),b(i,I(ht,{}),t),b(i,I(Tt,{}),l),b(i,I(ft,{}),m),b(i,I(vt,{}),o),b(i,I(yt,{}),r),i})(),gt=()=>{let k=()=>{let r=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return r.innerHTML=`<mtable>
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
</mtable>`,r},i=r=>(1-1/(1+r/100))*100,u=r=>(1/(1-r/100)-1)*100,T=r=>{let g=Number.parseFloat(r);return Number.isFinite(g)?i(g).toFixed(4):""},F=r=>{let g=Number.parseFloat(r);return Number.isFinite(g)?u(g).toFixed(4):""},S="35.0000",w=T(S),[t,l]=R({markupPctText:S,gpPctText:w}),m=d(()=>!Number.isFinite(Number.parseFloat(t.markupPctText))),o=d(()=>!Number.isFinite(Number.parseFloat(t.gpPctText)));return[et.cloneNode(!0),(()=>{const r=U.cloneNode(!0);return b(r,I(k,{})),r})(),V.cloneNode(!0),(()=>{const r=it.cloneNode(!0),g=r.firstChild,N=g.nextSibling,n=N.firstChild,p=n.firstChild,s=p.nextSibling,f=s.firstChild,_=s.nextSibling,v=_.nextSibling,$=v.nextSibling,x=$.nextSibling,G=x.firstChild;return p.style.setProperty("padding-right","5px"),f.$$input=h=>{let c=h.currentTarget.value;B(()=>{l("markupPctText",c),l("gpPctText",T(c))})},$.style.setProperty("padding-right","5px"),G.$$input=h=>{let c=h.currentTarget.value;B(()=>{l("gpPctText",c),l("markupPctText",F(c))})},a(h=>{const c=m()?"red":"black",L=o()?"red":"black";return c!==h._v$&&p.style.setProperty("color",h._v$=c),L!==h._v$2&&$.style.setProperty("color",h._v$2=L),h},{_v$:void 0,_v$2:void 0}),a(()=>f.value=t.markupPctText),a(()=>G.value=t.gpPctText),r})()]},$t=()=>{let k=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
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
</mtable>`,t},[i,u]=R({costText:"100.00",gpText:"30",gstText:"10"}),T=d(()=>{let t=Number.parseFloat(i.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(i.gpText);if(!Number.isFinite(l))return"";let m=Number.parseFloat(i.gstText);if(!Number.isFinite(m))return"";let o=t/(1-l/100)*(1+m/100);return"$"+o.toFixed(2)}),F=d(()=>!Number.isFinite(Number.parseFloat(i.costText))),S=d(()=>!Number.isFinite(Number.parseFloat(i.gpText))),w=d(()=>!Number.isFinite(Number.parseFloat(i.gstText)));return[rt.cloneNode(!0),(()=>{const t=U.cloneNode(!0);return b(t,I(k,{})),t})(),V.cloneNode(!0),(()=>{const t=lt.cloneNode(!0),l=t.firstChild,m=l.nextSibling,o=m.firstChild,r=o.firstChild,g=r.nextSibling,N=g.nextSibling,n=N.firstChild,p=o.nextSibling,s=p.firstChild,f=s.nextSibling,_=f.nextSibling,v=_.firstChild,$=p.nextSibling,x=$.firstChild,G=x.nextSibling,h=G.nextSibling,c=h.firstChild,L=$.nextSibling,A=L.firstChild,H=A.nextSibling,E=H.nextSibling;return r.style.setProperty("padding-right","5px"),n.$$input=e=>{u("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),v.$$input=e=>{u("gpText",e.currentTarget.value)},x.style.setProperty("padding-right","5px"),c.$$input=e=>{u("gstText",e.currentTarget.value)},b(E,T),a(e=>{const P=F()?"red":"black",z=S()?"red":"black",C=w()?"red":"black";return P!==e._v$3&&r.style.setProperty("color",e._v$3=P),z!==e._v$4&&s.style.setProperty("color",e._v$4=z),C!==e._v$5&&x.style.setProperty("color",e._v$5=C),e},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),a(()=>n.value=i.costText),a(()=>v.value=i.gpText),a(()=>c.value=i.gstText),t})()]},_t=()=>{let k=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
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
</mtable>`,t},[i,u]=R({costText:"100.00",markupText:"30",gstText:"10"}),T=d(()=>{let t=Number.parseFloat(i.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(i.markupText);if(!Number.isFinite(l))return"";let m=Number.parseFloat(i.gstText);if(!Number.isFinite(m))return"";let o=t*(1+l/100)*(1+m/100);return"$"+o.toFixed(2)}),F=d(()=>!Number.isFinite(Number.parseFloat(i.costText))),S=d(()=>!Number.isFinite(Number.parseFloat(i.markupText))),w=d(()=>!Number.isFinite(Number.parseFloat(i.gstText)));return[J.cloneNode(!0),(()=>{const t=U.cloneNode(!0);return b(t,I(k,{})),t})(),V.cloneNode(!0),(()=>{const t=nt.cloneNode(!0),l=t.firstChild,m=l.nextSibling,o=m.firstChild,r=o.firstChild,g=r.nextSibling,N=g.nextSibling,n=N.firstChild,p=o.nextSibling,s=p.firstChild,f=s.nextSibling,_=f.nextSibling,v=_.firstChild,$=p.nextSibling,x=$.firstChild,G=x.nextSibling,h=G.nextSibling,c=h.firstChild,L=$.nextSibling,A=L.firstChild,H=A.nextSibling,E=H.nextSibling;return r.style.setProperty("padding-right","5px"),n.$$input=e=>{u("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),v.$$input=e=>{u("markupText",e.currentTarget.value)},x.style.setProperty("padding-right","5px"),c.$$input=e=>{u("gstText",e.currentTarget.value)},b(E,T),a(e=>{const P=F()?"red":"black",z=S()?"red":"black",C=w()?"red":"black";return P!==e._v$6&&r.style.setProperty("color",e._v$6=P),z!==e._v$7&&s.style.setProperty("color",e._v$7=z),C!==e._v$8&&x.style.setProperty("color",e._v$8=C),e},{_v$6:void 0,_v$7:void 0,_v$8:void 0}),a(()=>n.value=i.costText),a(()=>v.value=i.markupText),a(()=>c.value=i.gstText),t})()]},ht=()=>{let k=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
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
</mtable>`,t},[i,u]=R({costText:"100.00",priceText:"175.00",gstText:"10.00"}),T=d(()=>{let t=Number.parseFloat(i.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(i.priceText);if(!Number.isFinite(l))return"";let m=Number.parseFloat(i.gstText);return Number.isFinite(m)?((1-t*(1+m/100)/l)*100).toFixed(4)+"%":""}),F=d(()=>!Number.isFinite(Number.parseFloat(i.costText))),S=d(()=>!Number.isFinite(Number.parseFloat(i.priceText))),w=d(()=>!Number.isFinite(Number.parseFloat(i.gstText)));return[mt.cloneNode(!0),(()=>{const t=U.cloneNode(!0);return b(t,I(k,{})),t})(),V.cloneNode(!0),(()=>{const t=ot.cloneNode(!0),l=t.firstChild,m=l.nextSibling,o=m.firstChild,r=o.firstChild,g=r.nextSibling,N=g.nextSibling,n=N.firstChild,p=o.nextSibling,s=p.firstChild,f=s.nextSibling,_=f.nextSibling,v=_.firstChild,$=p.nextSibling,x=$.firstChild,G=x.nextSibling,h=G.nextSibling,c=h.firstChild,L=$.nextSibling,A=L.firstChild,H=A.nextSibling,E=H.nextSibling;return r.style.setProperty("padding-right","5px"),n.$$input=e=>{u("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),v.$$input=e=>{u("priceText",e.currentTarget.value)},x.style.setProperty("padding-right","5px"),c.$$input=e=>{u("gstText",e.currentTarget.value)},b(E,T),a(e=>{const P=F()?"red":"black",z=S()?"red":"black",C=w()?"red":"black";return P!==e._v$9&&r.style.setProperty("color",e._v$9=P),z!==e._v$10&&s.style.setProperty("color",e._v$10=z),C!==e._v$11&&x.style.setProperty("color",e._v$11=C),e},{_v$9:void 0,_v$10:void 0,_v$11:void 0}),a(()=>n.value=i.costText),a(()=>v.value=i.priceText),a(()=>c.value=i.gstText),t})()]},Tt=()=>{let k=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
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
</mtable>`,t},[i,u]=R({costText:"100.00",priceText:"175.00",gstText:"10.00"}),T=d(()=>{let t=Number.parseFloat(i.costText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(i.priceText);if(!Number.isFinite(l))return"";let m=Number.parseFloat(i.gstText);return Number.isFinite(m)?((l/(t*(1+m/100))-1)*100).toFixed(4)+"%":""}),F=d(()=>!Number.isFinite(Number.parseFloat(i.costText))),S=d(()=>!Number.isFinite(Number.parseFloat(i.priceText))),w=d(()=>!Number.isFinite(Number.parseFloat(i.gstText)));return[dt.cloneNode(!0),(()=>{const t=U.cloneNode(!0);return b(t,I(k,{})),t})(),V.cloneNode(!0),(()=>{const t=at.cloneNode(!0),l=t.firstChild,m=l.nextSibling,o=m.firstChild,r=o.firstChild,g=r.nextSibling,N=g.nextSibling,n=N.firstChild,p=o.nextSibling,s=p.firstChild,f=s.nextSibling,_=f.nextSibling,v=_.firstChild,$=p.nextSibling,x=$.firstChild,G=x.nextSibling,h=G.nextSibling,c=h.firstChild,L=$.nextSibling,A=L.firstChild,H=A.nextSibling,E=H.nextSibling;return r.style.setProperty("padding-right","5px"),n.$$input=e=>{u("costText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),v.$$input=e=>{u("priceText",e.currentTarget.value)},x.style.setProperty("padding-right","5px"),c.$$input=e=>{u("gstText",e.currentTarget.value)},b(E,T),a(e=>{const P=F()?"red":"black",z=S()?"red":"black",C=w()?"red":"black";return P!==e._v$12&&r.style.setProperty("color",e._v$12=P),z!==e._v$13&&s.style.setProperty("color",e._v$13=z),C!==e._v$14&&x.style.setProperty("color",e._v$14=C),e},{_v$12:void 0,_v$13:void 0,_v$14:void 0}),a(()=>n.value=i.costText),a(()=>v.value=i.priceText),a(()=>c.value=i.gstText),t})()]},ft=()=>{let k=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
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
</mtable>`,t},[i,u]=R({priceText:"100.00",markupText:"30",gstText:"10"}),T=d(()=>{let t=Number.parseFloat(i.priceText);if(!Number.isFinite(t))return"";let l=Number.parseFloat(i.markupText);if(!Number.isFinite(l))return"";let m=Number.parseFloat(i.gstText);if(!Number.isFinite(m))return"";let o=t/(1+l/100)/(1+m/100);return"$"+o.toFixed(2)}),F=d(()=>!Number.isFinite(Number.parseFloat(i.priceText))),S=d(()=>!Number.isFinite(Number.parseFloat(i.markupText))),w=d(()=>!Number.isFinite(Number.parseFloat(i.gstText)));return[J.cloneNode(!0),(()=>{const t=U.cloneNode(!0);return b(t,I(k,{})),t})(),V.cloneNode(!0),(()=>{const t=st.cloneNode(!0),l=t.firstChild,m=l.nextSibling,o=m.firstChild,r=o.firstChild,g=r.nextSibling,N=g.nextSibling,n=N.firstChild,p=o.nextSibling,s=p.firstChild,f=s.nextSibling,_=f.nextSibling,v=_.firstChild,$=p.nextSibling,x=$.firstChild,G=x.nextSibling,h=G.nextSibling,c=h.firstChild,L=$.nextSibling,A=L.firstChild,H=A.nextSibling,E=H.nextSibling;return r.style.setProperty("padding-right","5px"),n.$$input=e=>{u("priceText",e.currentTarget.value)},s.style.setProperty("padding-right","5px"),v.$$input=e=>{u("markupText",e.currentTarget.value)},x.style.setProperty("padding-right","5px"),c.$$input=e=>{u("gstText",e.currentTarget.value)},b(E,T),a(e=>{const P=F()?"red":"black",z=S()?"red":"black",C=w()?"red":"black";return P!==e._v$15&&r.style.setProperty("color",e._v$15=P),z!==e._v$16&&s.style.setProperty("color",e._v$16=z),C!==e._v$17&&x.style.setProperty("color",e._v$17=C),e},{_v$15:void 0,_v$16:void 0,_v$17:void 0}),a(()=>n.value=i.priceText),a(()=>v.value=i.markupText),a(()=>c.value=i.gstText),t})()]},vt=()=>{let k=()=>{let n=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return n.innerHTML=`<mtable>
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

</mtable>`,n},i=n=>(n.frameSpan+n.claddingThickness)/Math.cos(n.pitch*Math.PI/180)+n.distIntoGutter,u=n=>{let p=Number.parseFloat(n.distIntoGutterText);if(!Number.isFinite(p))return"";let s=Number.parseFloat(n.claddingThicknessText);if(!Number.isFinite(s))return"";let f=Number.parseFloat(n.frameSpanText);if(!Number.isFinite(f))return"";let _=Number.parseFloat(n.pitchText);return Number.isFinite(_)?(_-90)%180==0?"Infinity":i({distIntoGutter:p,claddingThickness:s,frameSpan:f,pitch:_}).toFixed(0)+"mm":""},T="20",F="30",S="3000",w="15",[t,l]=R({distIntoGutterText:T,claddingThicknessText:F,frameSpanText:S,pitchText:w}),m=d(()=>u({distIntoGutterText:t.distIntoGutterText,claddingThicknessText:t.claddingThicknessText,frameSpanText:t.frameSpanText,pitchText:t.pitchText})),o=d(()=>!Number.isFinite(Number.parseFloat(t.distIntoGutterText))),r=d(()=>!Number.isFinite(Number.parseFloat(t.claddingThicknessText))),g=d(()=>!Number.isFinite(Number.parseFloat(t.frameSpanText))),N=d(()=>!Number.isFinite(Number.parseFloat(t.pitchText)));return[ut.cloneNode(!0),ct.cloneNode(!0),(()=>{const n=U.cloneNode(!0);return b(n,I(k,{})),n})(),V.cloneNode(!0),(()=>{const n=pt.cloneNode(!0),p=n.firstChild,s=p.nextSibling,f=s.firstChild,_=f.firstChild,v=_.nextSibling,$=v.firstChild,x=f.nextSibling,G=x.firstChild,h=G.nextSibling,c=h.firstChild,L=x.nextSibling,A=L.firstChild,H=A.nextSibling,E=H.firstChild,e=L.nextSibling,P=e.firstChild,z=P.nextSibling,C=z.firstChild,K=e.nextSibling,Q=K.firstChild,W=Q.nextSibling;return _.style.setProperty("padding-right","5px"),$.$$input=M=>{l("distIntoGutterText",M.currentTarget.value)},G.style.setProperty("padding-right","5px"),c.$$input=M=>{l("claddingThicknessText",M.currentTarget.value)},A.style.setProperty("padding-right","5px"),E.$$input=M=>{l("frameSpanText",M.currentTarget.value)},P.style.setProperty("padding-right","5px"),C.$$input=M=>{l("pitchText",M.currentTarget.value)},b(W,m),a(M=>{const D=o()?"red":"black",O=r()?"red":"black",j=g()?"red":"black",q=N()?"red":"black";return D!==M._v$18&&_.style.setProperty("color",M._v$18=D),O!==M._v$19&&G.style.setProperty("color",M._v$19=O),j!==M._v$20&&A.style.setProperty("color",M._v$20=j),q!==M._v$21&&P.style.setProperty("color",M._v$21=q),M},{_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),a(()=>$.value=t.distIntoGutterText),a(()=>c.value=t.claddingThicknessText),a(()=>E.value=t.frameSpanText),a(()=>C.value=t.pitchText),n})()]},yt=()=>{let k=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.innerHTML=`<mtable>
    <mrow>
        <mi>ridge_internal_angle</mi><mo>=</mo><mn>180&deg;</mn><mo>-</mo><mn>2</mn><mo>&times;</mo><mi>pitch</mi>
    </mrow>
    <mrow>
        <mi>hip_or_valley_internal_angle</mi><mo>=</mo><mn>180&deg;</mn><mo>-</mo>
        <apply><msup><mi>cos</mi><mn>-1</mn></msup><mo>(</mo>
        <apply><mi>cos</mi><mo>(</mo><mi>pitch</mi><mo>)</mo></apply> <mo>&times;</mo> <apply><mi>cos</mi><mo>(</mo><mi>pitch</mi><mo>)</mo></apply>
        <mo>)</mo></apply>
    </mrow>
</mtable>`,t},[i,u]=R({pitchText:"15"}),T=d(()=>{let t=Number.parseFloat(i.pitchText);if(!!Number.isFinite(t))return t}),F=d(()=>{let t=T();return t==null?"":`${(180-2*t).toFixed(2)}\xB0`}),S=d(()=>{let t=T();if(t==null)return"";let l=Math.cos(t*Math.PI/180);return`${(180-Math.acos(l*l)*180/Math.PI).toFixed(2)}\xB0`}),w=d(()=>!Number.isFinite(Number.parseFloat(i.pitchText)));return[bt.cloneNode(!0),(()=>{const t=U.cloneNode(!0);return b(t,I(k,{})),t})(),V.cloneNode(!0),(()=>{const t=xt.cloneNode(!0),l=t.firstChild,m=l.nextSibling,o=m.firstChild,r=o.firstChild,g=r.nextSibling,N=g.firstChild,n=o.nextSibling,p=n.firstChild,s=p.nextSibling,f=n.nextSibling,_=f.firstChild,v=_.nextSibling;return r.style.setProperty("padding-right","5px"),N.$$input=$=>{u("pitchText",$.currentTarget.value)},b(s,F),b(v,S),a(()=>r.style.setProperty("color",w()?"red":"black")),a(()=>N.value=i.pitchText),t})()]};Y(["click","input"]);export{Nt as default};
