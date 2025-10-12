import{f as M,c as H,a as i,i as u,b as I,e as _,I as P,t as w,K as V}from"./index.5aba22ff.js";import{D as B}from"./DocumentView.3a121409.js";const K=w('<div class="page"></div>'),O=w('<div style="flex-grow: 1; display: flex; flex-direction: row;"><div style="padding: 5px;"><b>Documents</b><ul class="list-group"></ul></div><div style="flex-grow: 1; display: flex; flex-direction: column; overflow: hidden;"><div style="display: flex; flex-direction: row;"><button class="btn btn-primary">Print</button><div style="flex-grow: 1; text-align: center"><button class="btn btn-primary">&lt;</button>Page <!> of <button class="btn btn-primary">></button></div></div></div></div>'),R=w('<li class="list-group-item" style="cursor: default;"></li>'),W=`body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #FAFAFA;
    font: 12pt "Tahoma";
}
* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}
.page {
    overflow: none;
    width: 297mm;
    height: 209mm; /* 210mm */
    padding: 5mm;
    margin: 10mm auto;
    border: 1px #D3D3D3 solid;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.subpage {
    padding: 1cm;
    border: 5px red solid;
    height: 257mm;
    outline: 2cm #FFEAEA solid;
}

@page {
    size: A4 landscape;
    margin: 0;
}
@media print {
    html, body {
        width: 297mm;
        height: 209mm; /* 210mm */
    }
    .page {
        overflow: none;
        margin: 0;
        border: initial;
        border-radius: initial;
        width: initial;
        min-height: initial;
        box-shadow: initial;
        background: initial;
        page-break-after: always;
    }
}`,G=r=>{let[n,h]=H({selectedDocumentIndex:0,selectedPageIndex:0});const v=i(()=>n.selectedDocumentIndex<0||n.selectedDocumentIndex>=r.documents.length?0:r.documents[n.selectedDocumentIndex].pages().length),c=i(()=>{if(v()!=0)return n.selectedPageIndex<0?0:n.selectedPageIndex>=v()?v()-1:n.selectedPageIndex}),x=i(()=>{if(!(n.selectedDocumentIndex<0||n.selectedDocumentIndex>=r.documents.length))return r.documents[n.selectedDocumentIndex]}),k=i(()=>{let e=x();if(e==null)return;let t=c();if(t!=null)return e.pages()[t]}),S=e=>{h("selectedDocumentIndex",e)},C=()=>{if(n.selectedDocumentIndex>=r.documents.length)return;let e=r.documents[n.selectedDocumentIndex],t=document.createElement("div");t.style.backgroundColor="white",t.style.position="absolute",t.style.left="0px",t.style.top="0px",t.style.right="0px",t.style.bottom="0px",t.style.overflow="hidden",t.style.zIndex="99999",document.body.appendChild(t);const d=t.attachShadow({mode:"closed"});let f=document.createElement("style");f.appendChild(document.createTextNode(W)),d.append(f);let a=document.createElement("div");a.className="book",d.append(a);let b=()=>{};window.setTimeout(()=>{let l=window.open();l!=null&&(l.document.body.innerHTML=d.innerHTML,l.print(),b())});let m=V(()=>I(P,{get each(){return e.pages()},children:l=>(()=>{const p=K.cloneNode(!0);return u(p,l),p})()}),a);b=()=>{m(),document.body.removeChild(t)}};let E=i(()=>{let e=c();return e==null?"?":(e+1).toString()}),N=i(()=>{let e=x();return e==null?"0":e.pages().length}),T=i(()=>{let e=c();return!(e==null||e==0)}),A=i(()=>{let e=x();if(e==null)return!1;let t=c();return!(t==null||t==e.pages().length-1)});const z=()=>{let e=c();e==null||e==0||h("selectedPageIndex",e-1)},F=()=>{let e=x();if(e==null)return;let t=e.pages().length,d=c();d==null||d==t-1||h("selectedPageIndex",d+1)};return(()=>{const e=O.cloneNode(!0),t=e.firstChild,d=t.firstChild,f=d.nextSibling,a=t.nextSibling,b=a.firstChild,$=b.firstChild,m=$.nextSibling,l=m.firstChild,p=l.nextSibling,D=p.nextSibling,L=D.nextSibling,y=L.nextSibling;return u(f,I(P,{get each(){return r.documents},children:(o,g)=>(()=>{const s=R.cloneNode(!0);return s.$$click=()=>S(g),u(s,()=>o().name()),_(()=>s.classList.toggle("active",g==n.selectedDocumentIndex)),s})()})),$.$$click=()=>C(),l.$$click=()=>z(),u(m,E,D),u(m,N,y),y.$$click=()=>F(),u(a,I(B,{get document(){return k()}}),null),_(o=>{const g=!T(),s=!A();return g!==o._v$&&(l.disabled=o._v$=g),s!==o._v$2&&(y.disabled=o._v$2=s),o},{_v$:void 0,_v$2:void 0}),e})()};M(["click"]);export{G as D};
