"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[592],{4497:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(7294),n=a(9960),c=(a(2263),a(9230)),r=a(6010),i=a(2255),s=a(3181);const m={hero:"hero_iUX1",moonBtmSeperatorSvg:"moonBtmSeperatorSvg_PAPw",heroH1:"heroH1_OuXV",investmentPlans:"investmentPlans_PeYP",isInView:"isInView_FORi",isOutOfView:"isOutOfView_cAxu",popular:"popular_EzAI",amt:"amt_DvV_",roi:"roi_LRyC",lock:"lock_bh6_",cyc:"cyc_ddhv",details:"details_bcUU",name:"name_GR0I",roiTxt:"roiTxt_csdJ",roiHdr:"roiHdr_ieD3",nameHdr:"nameHdr_lQMk",detailsHdr:"detailsHdr_qV41",amtHdr:"amtHdr_bolc",lockHdr:"lockHdr_EshP",cycHdr:"cycHdr_DxDi"};function o(e){let{className:t,children:a}=e;const n=l.useRef(null),[c,i]=l.useState(!1),s=(e,t)=>{e.forEach((e=>{i(e.isIntersecting)}))};return(0,l.useEffect)((()=>{const e=new IntersectionObserver(s,{rootMargin:"0px",threshold:.2});return n.current&&e.observe(n.current),()=>{n.current&&e.unobserve(n.current)}}),[n]),l.createElement("li",{ref:n,className:(0,r.Z)(c?m.isInView:m.isOutOfView,t)},a)}function u(){return l.createElement("header",{className:m.hero},l.createElement("h1",{className:m.heroH1},"Investment Plans"),l.createElement("ul",{className:(0,r.Z)(m.investmentPlans,"clean-list")},l.createElement("li",null,l.createElement("div",{className:m.nameHdr},"Plan"),l.createElement("div",{className:m.roiHdr},"ROI"),l.createElement("div",{className:m.detailsHdr},l.createElement("div",{className:m.amtHdr},"Min Investment"),l.createElement("div",{className:m.lockHdr},"Capital Lock-in"),l.createElement("div",{className:m.cycHdr},"Payout Cycle"))),l.createElement(o,null,l.createElement("div",{className:m.name},"Helicopter"),l.createElement("div",{className:m.roi},l.createElement("ul",{className:(0,r.Z)(m.roiTxt,"clean-list")},l.createElement("li",null,"Upto"),l.createElement("li",null,"6"),l.createElement("li",null,"Monthly",l.createElement("br",null),"Returns"))),l.createElement("div",{className:m.details},l.createElement("div",{className:m.amt},"1"),l.createElement("div",{className:m.lock},"12 months"),l.createElement("div",{className:m.cyc},"Monthly"))),l.createElement(o,null,l.createElement("div",{className:m.name},"Aeroplane"),l.createElement("div",{className:m.roi},l.createElement("ul",{className:(0,r.Z)(m.roiTxt,"clean-list")},l.createElement("li",null,"Upto"),l.createElement("li",null,"7"),l.createElement("li",null,"Monthly",l.createElement("br",null),"Returns"))),l.createElement("div",{className:m.details},l.createElement("div",{className:m.amt},"3"),l.createElement("div",{className:m.lock},"12 months"),l.createElement("div",{className:m.cyc},"Monthly"))),l.createElement(o,{className:m.popular},l.createElement("div",{className:m.name},"Rocket"),l.createElement("div",{className:m.roi},l.createElement("ul",{className:(0,r.Z)(m.roiTxt,"clean-list")},l.createElement("li",null,"Upto"),l.createElement("li",null,"8"),l.createElement("li",null,"Monthly",l.createElement("br",null),"Returns"))),l.createElement("div",{className:m.details},l.createElement("div",{className:m.amt},"5"),l.createElement("div",{className:m.lock},"12 months"),l.createElement("div",{className:m.cyc},"Monthly"))),l.createElement(o,null,l.createElement("div",{className:m.name},"Starship"),l.createElement("div",{className:m.roi},l.createElement("ul",{className:(0,r.Z)(m.roiTxt,"clean-list")},l.createElement("li",null,"Upto"),l.createElement("li",null,"200"),l.createElement("li",null,"Annual",l.createElement("br",null),"Returns"))),l.createElement("div",{className:m.details},l.createElement("div",{className:m.amt},"10"),l.createElement("div",{className:m.lock},"18 months"),l.createElement("div",{className:m.cyc},"After 18 Months")))),l.createElement(i.pi,null,l.createElement(i.Qj,{size:"bigger",to:"contact",icon:"arrow-right",isIconOnRight:!0},"Start Investing")),l.createElement(s.AW,{className:m.moonBtmSeperatorSvg}))}var d=a(8964);const E={faqC:"faqC_HMPZ",isHid:"isHid_gmDa",ans:"ans_C71O",isViz:"isViz_ARVf",hdr:"hdr_ob9V",faqH2:"faqH2_wP2o",faqLi:"faqLi_zT2n"};function v(e){let{question:t,children:a}=e;const[n,c]=(0,l.useState)(!1);return l.createElement("div",{className:(0,r.Z)(E.faqC,n?E.isViz:E.isHid)},l.createElement("header",{className:E.hdr,onClick:()=>{c(!n)}},l.createElement("h3",null,t),l.createElement(d.Z,{icon:n?"chevron-up":"chevron-down"})),l.createElement("div",{className:E.ans},a))}const h=[{q:"What is the minimum capital needed for investment?",a:l.createElement(l.Fragment,null,"You need minimum of ",l.createElement("b",null,"\u20b9 1,00,000/-")," to invest. Please feel free to reach out to us if you intend to invest via group-pooling")},{q:"What is the minimum lock-in period for invested capital?",a:l.createElement(l.Fragment,null,"Minimum lock-in period for your capital investment is ",l.createElement("b",null,"12 months"),". If you wish to continue receiving interest payout for the next lock-in cycle, you need not withdraw the capital.")},{q:"How do I invest or deposit my capital?",a:l.createElement(l.Fragment,null,"Please get in touch with Lunatic Capitals via ",l.createElement("b",null,l.createElement(n.Z,{to:"/contact"},"contact information"))," provided. A representative will get in touch with you and guide you")},{q:"How do I keep track of my investments?",a:l.createElement(l.Fragment,null,"Once you invest with Lunatic Capital, you shall receive an account you can ",l.createElement("b",null,l.createElement(n.Z,{to:"/login"},"Sign-In"))," to. You shall be able to see a list of your investments along with the returns generated on the invested capital.")}];function N(){return l.createElement("div",null,l.createElement("h2",{className:E.faqH2},"Frequently Asked Questions"),l.createElement("ul",{className:"clean-list"},h.map(((e,t)=>l.createElement("li",{key:t,className:E.faqLi},l.createElement(v,{question:e.q},e.a))))))}function p(){return l.createElement(c.Z,{title:"Investment Plans",description:"Investment plans offered by Lunatic Capitals"},l.createElement(u,null),l.createElement("main",{className:"container container--fluid padding-vert--lg"},l.createElement(N,null)))}}}]);