"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[127],{3688:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const l={horizontalPanCntnr:"horizontalPanCntnr_p8KI","no-pan":"no-pan_b5sk",horizontalPanList:"horizontalPanList_GPd6"};function a(e){let{children:t}=e;return n.createElement("div",{className:l.horizontalPanCntnr},n.createElement("ul",{className:l.horizontalPanList},t.map(((e,t)=>n.createElement("li",{key:t},e)))))}},3510:(e,t,r)=>{r.d(t,{$d:()=>c,gG:()=>m,ZP:()=>s});var n=r(7294),l=r(6010);const a={infoLbl:"infoLbl_HVaW",txtR:"txtR_XmRq",txtC:"txtC_CKU3",cpy:"cpy_yrtj"},i={amt:"amt_OMye",prcnt:"prcnt_YUVf",light:"light_T39C",big:"big_rUzH",bigger:"bigger_RdkH",biggest:"biggest_OW94",large:"large_dwuq",larger:"larger_YFnI",short:"short_NwYw",cr:"cr_lfU0",l:"l_M3xS",k:"k_cpDz"};function s(e){let{title:t,children:r,textPos:i,className:s}=e;return n.createElement("div",{className:(0,l.Z)(a.infoLbl,"right"==i&&a.txtR,"center"==i&&a.txtC,s&&""!==s&&s),"data-title":t},r)}function c(e){let{children:t,useShortForm:r,size:a,useLightColor:s}=e;if(isNaN(t))return n.createElement(n.Fragment,null,"0");const c=Intl.NumberFormat("en-IN").format(t),m=t>=1e7?t/1e7:null,u=t<1e7&&t>=1e5?t/1e5:null,o=t<1e5?t/1e3:null;return n.createElement("span",{className:(0,l.Z)(i.amt,"big"===a&&i.big,"bigger"===a&&i.bigger,"biggest"===a&&i.biggest,"large"===a&&i.large,"larger"===a&&i.larger,s&&i.light,m&&i.cr,u&&i.l,o&&i.k,r&&i.short)},r&&(m||u||o)||c)}function m(e){let{children:t,size:r,useLightColor:a}=e;return n.createElement("span",{className:(0,l.Z)(i.prcnt,"big"===r&&i.big,"bigger"===r&&i.bigger,"biggest"===r&&i.biggest,"large"===r&&i.large,"larger"===r&&i.larger,a&&i.light)},t)}},9425:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const l={card:"card_IU2s"};function a(e){let{children:t,title:r}=e;return n.createElement("div",{className:l.card},r&&""!==r.trim()&&n.createElement("h2",null,r),t)}},243:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(7294),l=r(9230),a=r(3688),i=r(9425),s=r(3510),c=r(2255);const m=[{title:"Plan 1",yearlyPremium:"25000",totalPremium:"50000",sumInsured:"400000"},{title:"Plan 2",yearlyPremium:"50000",totalPremium:"100000",sumInsured:"800000"},{title:"Plan 3",yearlyPremium:"100000",totalPremium:"200000",sumInsured:"1600000"}];function u(){return n.createElement(a.Z,null,m.map(((e,t)=>n.createElement(i.Z,{key:t,title:e.title},n.createElement(s.ZP,{title:"Premium",textPos:"center"},n.createElement(s.$d,{size:"big"},e.yearlyPremium)," per Year"),n.createElement(s.ZP,{title:"Term Tenure",textPos:"center"},"2 Years"),n.createElement(s.ZP,{title:"Insurance Cover",textPos:"center"},n.createElement(s.$d,{size:"big"},e.sumInsured)),n.createElement(c.pi,null,n.createElement(c.Qj,{to:"/contact",variant:"primary",size:"smaller"},"Inquire"))))))}function o(){return n.createElement(l.Z,{title:"Startup Booster",description:"Insurance for your startup"},n.createElement("h1",{className:"text--center margin-vert--sm"},"Startup Booster"),n.createElement(u,null))}}}]);