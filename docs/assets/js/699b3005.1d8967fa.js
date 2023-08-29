"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[414],{3510:(e,t,a)=>{a.d(t,{$d:()=>s,gG:()=>m,ZP:()=>i});var l=a(7294),n=a(6010);const r={infoLbl:"infoLbl_HVaW",txtR:"txtR_XmRq",txtC:"txtC_CKU3",cpy:"cpy_yrtj"},c={amt:"amt_OMye",prcnt:"prcnt_YUVf",light:"light_T39C",big:"big_rUzH",bigger:"bigger_RdkH",biggest:"biggest_OW94",large:"large_dwuq",larger:"larger_YFnI",short:"short_NwYw",cr:"cr_lfU0",l:"l_M3xS",k:"k_cpDz"};function i(e){let{title:t,children:a,textPos:c,className:i}=e;return l.createElement("div",{className:(0,n.Z)(r.infoLbl,"right"==c&&r.txtR,"center"==c&&r.txtC,i&&""!==i&&i),"data-title":t},a)}function s(e){let{children:t,useShortForm:a,size:r,useLightColor:i}=e;if(isNaN(t))return l.createElement(l.Fragment,null,"0");const s=Intl.NumberFormat("en-IN").format(t),m=t>=1e7?t/1e7:null,o=t<1e7&&t>=1e5?t/1e5:null,u=t<1e5?t/1e3:null;return l.createElement("span",{className:(0,n.Z)(c.amt,"big"===r&&c.big,"bigger"===r&&c.bigger,"biggest"===r&&c.biggest,"large"===r&&c.large,"larger"===r&&c.larger,i&&c.light,m&&c.cr,o&&c.l,u&&c.k,a&&c.short)},a&&(m||o||u)||s)}function m(e){let{children:t,size:a,useLightColor:r}=e;return l.createElement("span",{className:(0,n.Z)(c.prcnt,"big"===a&&c.big,"bigger"===a&&c.bigger,"biggest"===a&&c.biggest,"large"===a&&c.large,"larger"===a&&c.larger,r&&c.light)},t)}},7973:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(7294),n=a(9960),r=(a(2263),a(9230)),c=a(6010),i=a(2255),s=a(3510),m=a(6526);const o={hero:"hero_heDR",moonBtmSeperatorSvg:"moonBtmSeperatorSvg_wQ0X",heroH1:"heroH1_yiqo",investmentPlans:"investmentPlans_M_9a",isInView:"isInView_FP3T",isOutOfView:"isOutOfView_J7CQ",popular:"popular_k_ro",amt:"amt_uvqY",roi:"roi_RnBg",lock:"lock_VbWs",cyc:"cyc_j0RT",cp:"cp_Xi4y",name:"name_Q_Tr",details:"details_eLO0",roiTxt:"roiTxt_muPx",roiHdr:"roiHdr_CcHH",nameHdr:"nameHdr_Zuut",detailsHdr:"detailsHdr_SENS",amtHdr:"amtHdr_qCq3",lockHdr:"lockHdr_jhJz",cycHdr:"cycHdr_FKt5",cpHdr:"cpHdr_hfha"};function u(e){let{className:t,children:a}=e;const n=l.useRef(null),[r,i]=l.useState(!1),s=(e,t)=>{e.forEach((e=>{i(e.isIntersecting)}))};return(0,l.useEffect)((()=>{const e=new IntersectionObserver(s,{rootMargin:"0px",threshold:.2});return n.current&&e.observe(n.current),()=>{n.current&&e.unobserve(n.current)}}),[n]),l.createElement("li",{ref:n,className:(0,c.Z)(r?o.isInView:o.isOutOfView,t)},a)}function d(){return l.createElement("header",{className:o.hero},l.createElement("h1",{className:o.heroH1},"Lunatic Bots"),l.createElement("ul",{className:(0,c.Z)(o.investmentPlans,"clean-list")},l.createElement("li",null,l.createElement("div",{className:o.nameHdr},"Plan"),l.createElement("div",{className:o.roiHdr},"ROI"),l.createElement("div",{className:o.detailsHdr},l.createElement("div",{className:o.amtHdr},"Min Investment"),l.createElement("div",{className:o.lockHdr},"Capital Lock-in"),l.createElement("div",{className:o.cycHdr},"Payout Cycle"),l.createElement("div",{className:o.cpHdr},"Price"))),l.createElement(u,null,l.createElement("div",{className:o.name},"Bot X1"),l.createElement("div",{className:o.roi},l.createElement("ul",{className:(0,c.Z)(o.roiTxt,"clean-list")},l.createElement("li",null,"Upto"),l.createElement("li",null,"4"),l.createElement("li",null,"Monthly",l.createElement("br",null),"Returns"))),l.createElement("div",{className:o.details},l.createElement("div",{className:o.amt},"1"),l.createElement("div",{className:o.lock},"12 months"),l.createElement("div",{className:o.cyc},"Monthly"),l.createElement("div",{className:o.cp},l.createElement(s.$d,{size:"big"},"999")))),l.createElement(u,null,l.createElement("div",{className:o.name},"Bot X2"),l.createElement("div",{className:o.roi},l.createElement("ul",{className:(0,c.Z)(o.roiTxt,"clean-list")},l.createElement("li",null,"Upto"),l.createElement("li",null,"6"),l.createElement("li",null,"Monthly",l.createElement("br",null),"Returns"))),l.createElement("div",{className:o.details},l.createElement("div",{className:o.amt},"2"),l.createElement("div",{className:o.lock},"12 months"),l.createElement("div",{className:o.cyc},"Monthly"),l.createElement("div",{className:o.cp},l.createElement(s.$d,{size:"big"},"1599")))),l.createElement(u,{className:o.popular},l.createElement("div",{className:o.name},"Bot X3"),l.createElement("div",{className:o.roi},l.createElement("ul",{className:(0,c.Z)(o.roiTxt,"clean-list")},l.createElement("li",null,"Upto"),l.createElement("li",null,"8"),l.createElement("li",null,"Monthly",l.createElement("br",null),"Returns"))),l.createElement("div",{className:o.details},l.createElement("div",{className:o.amt},"4"),l.createElement("div",{className:o.lock},"12 months"),l.createElement("div",{className:o.cyc},"Monthly"),l.createElement("div",{className:o.cp},l.createElement(s.$d,{size:"big"},"2499")))),l.createElement(u,null,l.createElement("div",{className:o.name},"Bot X4"),l.createElement("div",{className:o.roi},l.createElement("ul",{className:(0,c.Z)(o.roiTxt,"clean-list")},l.createElement("li",null,"Upto"),l.createElement("li",null,"400"),l.createElement("li",null,"Overall",l.createElement("br",null),"Returns"))),l.createElement("div",{className:o.details},l.createElement("div",{className:o.amt},"10"),l.createElement("div",{className:o.lock},"18 months"),l.createElement("div",{className:o.cyc},"After 18 Months"),l.createElement("div",{className:o.cp},l.createElement(s.gG,{size:"big"},"20")," of profit")))),l.createElement(i.pi,null,l.createElement(i.Qj,{size:"bigger",to:"contact",icon:"arrow-right",isIconOnRight:!0},"Start Investing")),l.createElement(m.AW,{className:o.moonBtmSeperatorSvg}))}var E=a(8964);const g={faqC:"faqC_HMPZ",isHid:"isHid_gmDa",ans:"ans_C71O",isViz:"isViz_ARVf",hdr:"hdr_ob9V",faqH2:"faqH2_wP2o",faqLi:"faqLi_zT2n"};function h(e){let{question:t,children:a}=e;const[n,r]=(0,l.useState)(!1);return l.createElement("div",{className:(0,c.Z)(g.faqC,n?g.isViz:g.isHid)},l.createElement("header",{className:g.hdr,onClick:()=>{r(!n)}},l.createElement("h3",null,t),l.createElement(E.Z,{icon:n?"chevron-up":"chevron-down"})),l.createElement("div",{className:g.ans},a))}const v=[{q:"What is the minimum capital needed for investment?",a:l.createElement(l.Fragment,null,"You need minimum of ",l.createElement("b",null,"\u20b9 1,00,000/-")," to invest. Please feel free to reach out to us if you intend to invest via group-pooling")},{q:"What is the minimum lock-in period for invested capital?",a:l.createElement(l.Fragment,null,"Minimum lock-in period for your capital investment is ",l.createElement("b",null,"12 months"),". If you wish to continue receiving interest payout for the next lock-in cycle, you need not withdraw the capital.")},{q:"How do I invest or deposit my capital?",a:l.createElement(l.Fragment,null,"Please get in touch with Lunatic Capitals via ",l.createElement("b",null,l.createElement(n.Z,{to:"/contact"},"contact information"))," provided. A representative will get in touch with you and guide you")},{q:"How do I keep track of my investments?",a:l.createElement(l.Fragment,null,"Once you invest with Lunatic Capital, you shall receive an account you can ",l.createElement("b",null,l.createElement(n.Z,{to:"/login"},"Sign-In"))," to. You shall be able to see a list of your investments along with the returns generated on the invested capital.")}];function N(){return l.createElement("div",null,l.createElement("h2",{className:g.faqH2},"Frequently Asked Questions"),l.createElement("ul",{className:"clean-list"},v.map(((e,t)=>l.createElement("li",{key:t,className:g.faqLi},l.createElement(h,{question:e.q},e.a))))))}function p(){return l.createElement(r.Z,{title:"Lunatic Bots",description:"Capital Growth Bots offered by Lunatic Capitals"},l.createElement(d,null),l.createElement("main",{className:"container container--fluid padding-vert--lg"},l.createElement(N,null)))}}}]);