"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[195],{8921:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(7294),a=r(2263),o=r(9230),i=r(6010),s=r(2255);const l={roiTxtList:"roiTxtList_wK8y",roiTxtListMainAnim:"roiTxtListMainAnim_tkDW",anim:"anim_TLvi",roiTxtListHdrAnim:"roiTxtListHdrAnim_elXb",roiTxtListFtrAnim:"roiTxtListFtrAnim_usFF"};function c(e){let{className:t,preText:r,value:a,isMonthly:o,isAnimated:s}=e;return n.createElement("div",{className:t},n.createElement("ul",{className:(0,i.Z)(l.roiTxtList,s&&l.anim,"clean-list")},n.createElement("li",null,r||"Upto")," ",n.createElement("li",null,a||0),n.createElement("li",null,o?"Monthly":"Annual",n.createElement("br",null),"Returns")))}var u=r(6526);const m={starField:"starField_OZp_"};function h(e){const t=(0,n.useRef)(null),[r,a]=n.useState(!1),o=(0,n.useRef)(!1);var i,s,l,c,u,h=0;const f=(e,t,r)=>{o.current?cancelAnimationFrame(u):(u=requestAnimationFrame((r=>{f(e,t,r)})),(c=(s=r)-l)>i&&(l=s-c%i,E(e,t)))},E=(e,t)=>{t.clearRect(0,0,t.canvas.width,t.canvas.height),e.forEach((function(e,r){const n=g(h*r);d(t,e.x,e.y,e.r,`rgba(255, 255, 255, ${n}`)})),h++},d=(e,t,r,n,a)=>{e.beginPath(),e.fillStyle=a,e.arc(t,r,n,0,2*Math.PI),e.fill()},g=e=>.1+.6*Math.abs(Math.sin(e)),v=e=>Math.floor(Math.random()*e),w=(e,t)=>{e.forEach((e=>{a(e.isIntersecting)}))};return(0,n.useEffect)((()=>{const e=t.current;e.width=e.parentElement.offsetWidth,e.height=e.parentElement.offsetHeight;const n=e.getContext("2d"),a=((e,t,r,n)=>{const a=[];for(let o=0;o<e;o+=r)for(let e=0;e<t;e+=r){const t={x:o+v(r),y:e+v(r),r:Math.random()*n};a.push(t)}return a})(e.offsetWidth,e.offsetHeight,30,1.5);r?(o.current=!1,((e,t,r)=>{i=1e3/r,l=window.performance.now(),l,f(e,t)})(a,n,4)):(window.cancelAnimationFrame(u),o.current=!0)}),[r]),(0,n.useEffect)((()=>{const e=new IntersectionObserver(w,{rootMargin:"0px",threshold:.25});return t.current&&e.observe(t.current),()=>{window.cancelAnimationFrame(u),o.current=!0,t.current&&e.unobserve(t.current)}}),[]),n.createElement("canvas",{className:m.starField,ref:t})}const f={hero:"hero__E0Y",heroTextCntnr:"heroTextCntnr_kiWC",heroH1:"heroH1_nrnC",heroH1_line1:"heroH1_line1_qWNc",heroH1_switcher:"heroH1_switcher_NTmk",heroH2:"heroH2_JSSt",heroH1Switch:"heroH1Switch_aDIw",heroArt:"heroArt_pA_i",ctaBtnsCntnr:"ctaBtnsCntnr_h7Ct",ftrTxt:"ftrTxt_dAmT",svgAstronaut:"svgAstronaut_eb9Z",moonBtmSeperatorSvg:"moonBtmSeperatorSvg_AW5B"};function E(){return n.createElement("header",{className:f.hero},n.createElement("ul",{className:(0,i.Z)("clean-list",f.heroTextCntnr)},n.createElement("li",null,n.createElement("h1",{className:f.heroH1},n.createElement("span",{className:f.heroH1_line1},"Your ",n.createElement("span",{className:f.heroH1_switcher})),"Fund Manager")),n.createElement("li",null,n.createElement("h2",{className:f.heroH2},"We make your money work for you!")),n.createElement("li",{className:f.heroArt},n.createElement(c,{className:f.ftrTxt,value:96,isMonthly:!1,isAnimated:!0}),n.createElement(u.Ww,{className:f.svgAstronaut})),n.createElement("li",{className:f.ctaBtnsCntnr},n.createElement(s.pi,null,n.createElement(s.Qj,{to:"/investment-plans",size:"big",icon:"arrow-right",isIconOnRight:!0},"View Plans"),n.createElement(s.Qj,{to:"/contact",size:"big",variant:"tertiary",icon:"message-square"},"Inquire")))),n.createElement(h,null),n.createElement(u.AW,{className:f.moonBtmSeperatorSvg}))}var d=r(7462);const g={features:"features_t9lD",featureSvg:"featureSvg_GfXr",featureCol:"featureCol_P0tX",isInView:"isInView_g5Ax",isOutOfView:"isOutOfView_oQEw"},v=[{title:"Monthly Payout",Svg:u.UU,description:n.createElement(n.Fragment,null,"With monthly payouts, enjoy the benefits without having to wait too long. 'Your tomorrow brought to you today!'")},{title:"Higher Returns on Investment",Svg:u.d5,description:n.createElement(n.Fragment,null,"Get upto 96% returns on your investment annually! 'Make your money wors for you' and not the other way around")},{title:"Direct to your Bank Acc",Svg:u.EK,description:n.createElement(n.Fragment,null,"Payouts are credited straight to your Bank Account after every 30-day cycle. 'No intermediatery wallets or waiting'")}];function w(e){let{Svg:t,title:r,description:a}=e;const o=n.useRef(null),[s,l]=n.useState(!1),c=(e,t)=>{e.forEach((e=>{l(e.isIntersecting)}))};return(0,n.useEffect)((()=>{const e=new IntersectionObserver(c,{rootMargin:"0px",threshold:.25});return o.current&&e.observe(o.current),()=>{o.current&&e.unobserve(o.current)}}),[o]),n.createElement("div",{ref:o,className:(0,i.Z)("col","col--4",g.featureCol,s?g.isInView:g.isOutOfView)},n.createElement("div",{className:"text--center"},n.createElement(t,{className:g.featureSvg,role:"img"})),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,r),n.createElement("p",null,a)))}function y(){return n.createElement("section",{className:g.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},v.map(((e,t)=>n.createElement(w,(0,d.Z)({key:t},e)))))))}function p(){const{siteConfig:e}=(0,a.Z)();return n.createElement(o.Z,{title:e.tagline,description:"A high performance, high returns, low risk investment platform to skyrocket your financial growth"},n.createElement(E,null),n.createElement("main",null,n.createElement(y,null)))}}}]);