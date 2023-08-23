"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[195],{8138:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(7294),a=n(2263),o=n(9230),l=n(6010),s=n(2255);const c={roiTxtList:"roiTxtList_wK8y",roiTxtListMainAnim:"roiTxtListMainAnim_tkDW",anim:"anim_TLvi",roiTxtListHdrAnim:"roiTxtListHdrAnim_elXb",roiTxtListFtrAnim:"roiTxtListFtrAnim_usFF"};function i(e){let{className:t,preText:n,value:a,isMonthly:o,isAnimated:s}=e;return r.createElement("div",{className:t},r.createElement("ul",{className:(0,l.Z)(c.roiTxtList,s&&c.anim,"clean-list")},r.createElement("li",null,n||"Upto")," ",r.createElement("li",null,a||0),r.createElement("li",null,o?"Monthly":"Annual",r.createElement("br",null),"Returns")))}var m=n(6526);const u={starField:"starField_OZp_"};function h(e){const t=(0,r.useRef)(null),[n,a]=r.useState(!1),o=(0,r.useRef)(!1);var l,s,c,i,m,h=0;const d=(e,t,n)=>{o.current?cancelAnimationFrame(m):(m=requestAnimationFrame((n=>{d(e,t,n)})),(i=(s=n)-c)>l&&(c=s-i%l,f(e,t)))},f=(e,t)=>{t.clearRect(0,0,t.canvas.width,t.canvas.height),e.forEach((function(e,n){const r=v(h*n);E(t,e.x,e.y,e.r,`rgba(255, 255, 255, ${r}`)})),h++},E=(e,t,n,r,a)=>{e.beginPath(),e.fillStyle=a,e.arc(t,n,r,0,2*Math.PI),e.fill()},v=e=>.1+.6*Math.abs(Math.sin(e)),g=e=>Math.floor(Math.random()*e),w=(e,t)=>{e.forEach((e=>{a(e.isIntersecting)}))};return(0,r.useEffect)((()=>{const e=t.current;e.width=e.parentElement.offsetWidth,e.height=e.parentElement.offsetHeight;const r=e.getContext("2d"),a=((e,t,n,r)=>{const a=[];for(let o=0;o<e;o+=n)for(let e=0;e<t;e+=n){const t={x:o+g(n),y:e+g(n),r:Math.random()*r};a.push(t)}return a})(e.offsetWidth,e.offsetHeight,30,1.5);n?(o.current=!1,((e,t,n)=>{l=1e3/n,c=window.performance.now(),c,d(e,t)})(a,r,4)):(window.cancelAnimationFrame(m),o.current=!0)}),[n]),(0,r.useEffect)((()=>{const e=new IntersectionObserver(w,{rootMargin:"0px",threshold:.25});return t.current&&e.observe(t.current),()=>{window.cancelAnimationFrame(m),o.current=!0,t.current&&e.unobserve(t.current)}}),[]),r.createElement("canvas",{className:u.starField,ref:t})}const d={hero:"hero__E0Y",heroTextCntnr:"heroTextCntnr_kiWC",heroH1:"heroH1_nrnC",heroH1_line1:"heroH1_line1_qWNc",heroH1_switcher:"heroH1_switcher_NTmk",heroH2:"heroH2_JSSt",heroH1Switch:"heroH1Switch_aDIw",heroArt:"heroArt_pA_i",ctaBtnsCntnr:"ctaBtnsCntnr_h7Ct",ftrTxt:"ftrTxt_dAmT",svgAstronaut:"svgAstronaut_eb9Z",moonBtmSeperatorSvg:"moonBtmSeperatorSvg_AW5B"};function f(){return r.createElement("header",{className:d.hero},r.createElement("ul",{className:(0,l.Z)("clean-list",d.heroTextCntnr)},r.createElement("li",null,r.createElement("h1",{className:d.heroH1},r.createElement("span",{className:d.heroH1_line1},"Your ",r.createElement("span",{className:d.heroH1_switcher})),"Fund Manager")),r.createElement("li",null,r.createElement("h2",{className:d.heroH2},"We make your money work for you!")),r.createElement("li",{className:d.heroArt},r.createElement(i,{className:d.ftrTxt,value:96,isMonthly:!1,isAnimated:!0}),r.createElement(m.Ww,{className:d.svgAstronaut})),r.createElement("li",{className:d.ctaBtnsCntnr},r.createElement(s.pi,null,r.createElement(s.Qj,{to:"/investment-plans",size:"big",icon:"arrow-right",isIconOnRight:!0},"View Plans"),r.createElement(s.Qj,{to:"/contact",size:"big",variant:"tertiary",icon:"message-square"},"Inquire")))),r.createElement(h,null),r.createElement(m.AW,{className:d.moonBtmSeperatorSvg}))}var E=n(7462);const v={features:"features_t9lD",featureSvg:"featureSvg_GfXr",featureCol:"featureCol_P0tX",isInView:"isInView_g5Ax",isOutOfView:"isOutOfView_oQEw"},g=[{title:"Monthly Payout",Svg:m.UU,description:r.createElement(r.Fragment,null,"With monthly payouts, enjoy the benefits without having to wait too long. 'Your tomorrow brought to you today!'")},{title:"Higher Returns on Investment",Svg:m.d5,description:r.createElement(r.Fragment,null,"Get upto 96% returns on your investment annually! 'Make your money wors for you' and not the other way around")},{title:"Direct to your Bank Acc",Svg:m.EK,description:r.createElement(r.Fragment,null,"Payouts are credited straight to your Bank Account after every 30-day cycle. 'No intermediatery wallets or waiting'")}];function w(e){let{Svg:t,title:n,description:a}=e;const o=r.useRef(null),[s,c]=r.useState(!1),i=(e,t)=>{e.forEach((e=>{c(e.isIntersecting)}))};return(0,r.useEffect)((()=>{const e=new IntersectionObserver(i,{rootMargin:"0px",threshold:.25});return o.current&&e.observe(o.current),()=>{o.current&&e.unobserve(o.current)}}),[o]),r.createElement("div",{ref:o,className:(0,l.Z)("col","col--4",v.featureCol,s?v.isInView:v.isOutOfView)},r.createElement("div",{className:"text--center"},r.createElement(t,{className:v.featureSvg,role:"img"})),r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",null,n),r.createElement("p",null,a)))}function y(){return r.createElement("section",{className:v.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},g.map(((e,t)=>r.createElement(w,(0,E.Z)({key:t},e)))))))}const p={wrap:"wrap_QbRk",isViz:"isViz_pTEK",modalHide:"modalHide_uUI2",modalShow:"modalShow_JQGP",bg:"bg_v78T",modal:"modal_PJ57",xBtn:"xBtn_Qc1I"};function _(e){let{children:t,useCloseBtn:n,doOnClose:a}=e;const[o,s]=(0,r.useState)(!1),c=()=>new Promise((e=>{s(!1),setTimeout((()=>{document&&document.body&&(document.body.style.overflow="visible"),e()}),200)})),i=()=>{c().then((()=>{a&&"function"==typeof a&&a()}))};return(0,r.useEffect)((()=>{new Promise((e=>{document&&document.body&&(document.body.style.overflow="hidden"),setTimeout((()=>{s(!0),setTimeout((()=>{e()}),200)}),10)}))}),[]),r.createElement("div",{className:(0,l.Z)(p.wrap,o&&p.isViz)},n?r.createElement("div",{className:p.bg}):r.createElement("div",{className:p.bg,onClick:i}),r.createElement("div",{className:p.modal},r.createElement("main",null,"function"==typeof t?t(c):t),n&&r.createElement("span",{className:p.xBtn,onClick:i})))}const N={advertWrap:"advertWrap_IQK6",moonSvg:"moonSvg_mseg"};function b(){return r.createElement(_,{useCloseBtn:!1},r.createElement("div",{className:N.advertWrap},r.createElement("header",null,r.createElement("h2",null,"We are honored to welcome"),r.createElement("h1",null,"Chandrayan-3"),r.createElement("h2",null,"to the moon!")),r.createElement(m.xJ,null),r.createElement(m.AW,{className:N.moonSvg})))}function x(){const{siteConfig:e}=(0,a.Z)();return r.createElement(o.Z,{title:e.tagline,description:"A high performance, high returns, low risk investment platform to skyrocket your financial growth"},r.createElement(f,null),r.createElement("main",null,r.createElement(y,null),r.createElement(b,null)))}}}]);