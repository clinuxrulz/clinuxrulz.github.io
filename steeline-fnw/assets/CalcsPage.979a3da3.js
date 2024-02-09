import{c as R,a as _,i as h,b as P,g as $,e as o,f as j,t as f}from"./index.98d696f7.js";import{S as q}from"./utils.95884e54.js";const B=f('<div><h2>Calcs Page</h2><hr><h3>Convert Markup from/to GP</h3><div style="font-size: 18pt; margin-top: 20pt;"></div><br><table class="table-no-borders"><thead></thead><tbody><tr><td><b>Markup:</b></td><td><input type="text" size="10"></td><td>%</td><td style="font-size: 25pt; padding-left: 20px; padding-right: 20px;">&harr;</td><td><b>GP:</b></td><td><input type="text" size="10"></td><td>%</td></tr></tbody></table><hr></div>'),D=f('<input class="btn btn-primary" type="button" value="Close">'),O=T=>{let w=()=>{let t=document.createElementNS("http://www.w3.org/1998/Math/MathML","math");return t.setAttribute("display","block"),t.innerHTML=`
    <mtable>
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
    </mtable>
`,t},k=t=>(1-1/(1+t/100))*100,v=t=>(1/(1-t/100)-1)*100,c=t=>{let m=Number.parseFloat(t);return Number.isFinite(m)?k(m).toFixed(4):""},y=t=>{let m=Number.parseFloat(t);return Number.isFinite(m)?v(m).toFixed(4):""},p="35.0000",S=c(p),[i,a]=R({markupPctText:p,gpPctText:S}),C=_(()=>!Number.isFinite(Number.parseFloat(i.markupPctText))),M=_(()=>!Number.isFinite(Number.parseFloat(i.gpPctText)));return(()=>{const t=B.cloneNode(!0),m=t.firstChild,s=m.nextSibling,N=s.nextSibling,d=N.nextSibling,F=d.nextSibling,G=F.nextSibling,z=G.firstChild,E=z.nextSibling,I=E.firstChild,l=I.firstChild,u=l.nextSibling,b=u.firstChild,L=u.nextSibling,A=L.nextSibling,n=A.nextSibling,H=n.nextSibling,g=H.firstChild;return h(t,P(q,{get when(){return T.onClose},keyed:!0,children:e=>(()=>{const r=D.cloneNode(!0);return r.$$click=()=>e()(),r})()}),s),h(d,P(w,{})),l.style.setProperty("padding-right","5px"),b.$$input=e=>{let r=e.currentTarget.value;$(()=>{a("markupPctText",r),a("gpPctText",c(r))})},n.style.setProperty("padding-right","5px"),g.$$input=e=>{let r=e.currentTarget.value;$(()=>{a("gpPctText",r),a("markupPctText",y(r))})},o(e=>{const r=C()?"red":"black",x=M()?"red":"black";return r!==e._v$&&l.style.setProperty("color",e._v$=r),x!==e._v$2&&n.style.setProperty("color",e._v$2=x),e},{_v$:void 0,_v$2:void 0}),o(()=>b.value=i.markupPctText),o(()=>g.value=i.gpPctText),t})()};j(["input","click"]);export{O as default};
