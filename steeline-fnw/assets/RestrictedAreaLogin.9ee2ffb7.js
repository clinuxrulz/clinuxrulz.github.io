import{c as U,o as h,e as v,s as R,f as j,t as z,L as J,h as d,u as K}from"./index.0b945867.js";const M=z(`<div><div><h2 style="color: red;">Restricted Area</h2></div><div style="flex-grow: 1; display: flex; align-items: center; justify-content: center;"><div><label for="restrictedAreaPassword" style="color:red;"><b>What's the password?</b></label><br><table><thead></thead><tbody><tr><td style="border: none;"><input id="restrictedAreaPassword" class="form-control"></td><td style="border: none;"><button type="button" class="btn btn-primary"><i class="fa-solid"></i></button></td><td style="border: none; margin-left: 5px;"><button type="button" class="btn btn-primary">Sign In</button></td></tr></tbody></table></div></div></div>`),T=w=>{let n,[s,a]=U({password:"",showPassword:!1});h(()=>{n?.focus()});const c=async()=>{try{await J(s.password),w.onSiteIn()}catch(e){alert(e)}},x=e=>{e.key=="Enter"&&c()},m=()=>{fetch("./restricted_area_bg.txt").then(e=>e.text()).then(e=>{let o=d.exports.enc.Base64.parse(e);d.exports.AES.decrypt(o,"Tool Box");let i="data:image/jpg;base64,"+d.exports.enc.Base64.stringify(o);a("backgroundImageUrl",i)})};return h(()=>m()),(()=>{const e=M.cloneNode(!0),o=e.firstChild,i=o.nextSibling,P=i.firstChild,k=P.firstChild,S=k.nextSibling,C=S.nextSibling,I=C.firstChild,E=I.nextSibling,A=E.firstChild,u=A.firstChild,r=u.firstChild,f=u.nextSibling,y=f.firstChild,b=y.firstChild,L=f.nextSibling,B=L.firstChild;e.style.setProperty("flex-grow","1"),e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("background-size","contain"),e.style.setProperty("background-repeat","no-repeat"),e.style.setProperty("background-position","center"),e.style.setProperty("background-color","black"),r.addEventListener("keypress",x),r.$$input=t=>{let l=t.target;a("password",l.value)};const g=n;return typeof g=="function"?K(g,r):n=r,y.$$click=t=>{a("showPassword",!s.showPassword)},B.$$click=t=>{c()},v(t=>{const l=s.backgroundImageUrl==null?void 0:"url("+s.backgroundImageUrl+")",p=s.showPassword?"text":"password",$=!s.showPassword,_=!!s.showPassword;return l!==t._v$&&e.style.setProperty("background-image",t._v$=l),p!==t._v$2&&R(r,"type",t._v$2=p),$!==t._v$3&&b.classList.toggle("fa-eye",t._v$3=$),_!==t._v$4&&b.classList.toggle("fa-eye-slash",t._v$4=_),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),v(()=>r.value=s.password),e})()};j(["input","click"]);export{T as default};