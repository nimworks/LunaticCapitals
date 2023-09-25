"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[428],{7298:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010),l=r(4534);const i={radioBtnList:"radioBtnList_AV6k"};function s(e){let{className:t,children:r,checkedIdx:s,onChk:o}=e;return n.createElement("ul",{className:(0,a.Z)(i.radioBtnList,"clean-list",t&&""!==t.trim()&&t)},r.map(((e,t)=>n.createElement("li",{key:"radioChk"+t},n.createElement(l.Z,{isChecked:s==t,onToggle:()=>{o(t)}},e)))))}},238:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(6036),a=r(1872),l=r(4057),i=r(7167),s=r(934);class o{static creds=null;static lastLoggedInUserEmail=null;static lastReadIdTokenIssuedAt=0;static lastReadIdTokenExpiry=0;static _clear=()=>{this.creds=null,this.lastLoggedInUserEmail=null,this.lastReadIdTokenIssuedAt=0,this.lastReadIdTokenExpiry=0};static _isCredsExpired=()=>{if(!this.creds)return!0;if(!this.creds.expiration)return!0;const e=new Date(this.creds.expiration).getTime();if(isNaN(e))return!0;return Date.now()>=e-15e3};static _getIdToken=async()=>{try{const e=new i.AM({UserPoolId:l.Om,ClientId:l.In});if(!e)throw new Error("Error reading from user pool");const t=e.getCurrentUser(),r=await new Promise(((e,r)=>{t.getSession(((t,n)=>{if(t)return r(t.message||JSON.stringify(t));if(!n)return r("No active user session");if(!n.isValid?.())return r("Invalid session");const a=n.getIdToken?.();return a?e(a):r()}))}));if(!r)throw new Error;return r}catch(e){}};static _getJwtIdToken=async()=>{try{const e=await this._getIdToken(),t=e.getJwtToken?.();if(!t)throw new Error;return t}catch(e){}};static _readIdTokenDetails=async()=>{try{const e=await this._getIdToken(),t=e.decodePayload?.();if(!t)throw new Error;return{email:t.email,issuedAt:e.getIssuedAt?.(),exp:e.getExpiration?.()}}catch(e){}};static _isUserSessionChangedOrExpired=async()=>{try{const{email:t,issuedAt:r,exp:n}=await this._readIdTokenDetails();var e=!1;return this.lastLoggedInUserEmail==t&&this.lastReadIdTokenIssuedAt==r&&this.lastReadIdTokenExpiry==n||(e=!0),this.lastLoggedInUserEmail=t,this.lastReadIdTokenIssuedAt=r,this.lastReadIdTokenExpiry=n,e?(this.creds=null,!0):n<=Math.floor(Date.now()/1e3)-10}catch(t){throw new Error(t)}};static _fetchCredsForLoggedInUser=async e=>{try{const e=await this._getJwtIdToken(),t=(0,s.s)({identityPoolId:l.vX,clientConfig:{region:l.U3},logins:{[`cognito-idp.${l.U3}.amazonaws.com/${l.Om}`]:e}});if(!t)throw new Error("Error getting fn that fetches credentials");const r=await t();return this.creds=r,r}catch(t){throw new Error("Error fetching credentials for logged-in user")}};static isExpired=async()=>!!await this._isUserSessionChangedOrExpired()||!!this._isCredsExpired();static getCredsForLoggedInUser=async()=>{try{if(await this.isExpired()){return{creds:await this._fetchCredsForLoggedInUser(),isFromCache:!1}}return{creds:this.creds,isFromCache:!0}}catch(e){throw new Error("Error getting credentials for logged-in user")}}}class c{static ddbClient=null;static ddbDocClient=null;static close=()=>{this.ddbDocClient&&(this.ddbDocClient.destroy(),this.ddbDocClient=null),this.ddbClient&&(this.ddbClient.destroy(),this.ddbClient=null)};static _initIfNotAlready=async()=>{try{const{creds:e,isFromCache:t}=await o.getCredsForLoggedInUser();return t?(this.ddbClient&&"DynamoDBClient"===this.ddbClient.constructor.name&&this.ddbDocClient||(this.close(),this.ddbClient=new n.c({region:l.U3,credentials:e}),this.ddbDocClient=a.m1.from(this.ddbClient)),this.ddbDocClient):(this.close(),this.ddbClient=new n.c({region:l.U3,credentials:e}),this.ddbDocClient=a.m1.from(this.ddbClient),this.ddbDocClient)}catch(e){console.log("getDynamoDbDocClient():",e.message||e.code||e.name||"Error initiating DB client")}};static queryData=async e=>{try{if(!e)throw new Error("No query specified");await this._initIfNotAlready();return await this.ddbDocClient.send(new a.cI(e))}catch(t){console.log("queryData():",t.message||t.code||t.name||"Error querying data from database")}};static getItemData=async e=>{try{if(!e)throw new Error("No query specified");await this._initIfNotAlready();return await this.ddbDocClient.send(new a.Bj(e))}catch(t){console.log("getItemData():",t.message||t.code||t.name||"Error fetching data from database")}};static putData=async e=>{try{if(!e)throw new Error("No query specified");await this._initIfNotAlready();return await this.ddbDocClient.send(new a.Yi(e))}catch(t){console.log("putData():",t.message||t.code||t.name||"Error writing to database")}}}},6053:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),a=r(6010),l=r(2255),i=r(6518),s=r(4534),o=r(7298),c=r(238),m=r(9316),u=r(1705);const d={footr:"footr_ZMK3",dataUl:"dataUl_DiL2"};function h(){const[e,t]=n.useState(!1),[r,a]=n.useState(1),[i,s]=n.useState(""),[o,h]=n.useState(""),[v,k]=n.useState(""),[C,w]=n.useState(""),[x,b]=n.useState(""),[S,I]=n.useState(""),[R,_]=n.useState(""),[N,F]=n.useState(""),[D,L]=n.useState(""),[T,Z]=n.useState(""),[V,U]=n.useState(!1),[P,M]=n.useState(0),[O,A]=n.useState(""),[B,H]=n.useState(""),[q,z]=n.useState(""),[W,X]=n.useState(""),[$,J]=n.useState(""),[j,K]=n.useState(""),[Y,G]=n.useState(""),[Q,ee]=n.useState(""),{notify:te}=n.useContext(u.z),re=(e,t)=>!t||e&&""!=e.trim()?t&&e.trim().length<3?"Minimum 3 letters":e.trim().length>40?"Is too long":/[^a-zA-Z ]/.test(e)?"Only alphabets allowed":/^(?:[^\d\W\s_]{3,20})(?:[\s]{1}(?:[^\d\W\s_]{2,20})){0,1}$/.test(e)?null:"Req Format: Firstname Lastname":"Required",ne=e=>e.length>60?"Is too long":""===e.trim()||/^[\w.@]+@+[\w.]+$/.test(e)?null:"Enter valid email",ae=(e,t)=>(null==t&&(t=!0),!t||e&&""!=e.trim()?e.length>0&&!/^[0-9]{10}$/.test(e)?"Enter valid 10 digit number":e.length>0&&10!==e.trim().length?"Should be 10 digits long":null:"Phone required"),le=(e,t)=>!t||e&&""!=e.trim()?e.length>100?"Is too long":/[^a-zA-Z0-9,!. ]/.test(e)?"Invalid character":null:"Required";return n.createElement(n.Fragment,null,n.createElement("div",null,1==r&&n.createElement(E,{name:i,setName:e=>{var t=re(e,!0);h(t||""),s(e)},nameErr:o,phn:v,setPhn:e=>{var t=ae(e,!0);w(t||""),k(e)},phnErr:C}),2==r&&n.createElement(g,{email:x,setEmail:e=>{var t=ne(e);I(t||""),b(e)},emailErr:S,loc:R,setLoc:e=>{var t=le(e,!1);F(t||""),_(e)},locErr:N}),3==r&&n.createElement(f,{vehReg:D,setVehReg:e=>{var t=le(e,!0);Z(t||""),L(e)},vehRegErr:T,isOwned:V,setIsOwned:U,cabServiceChoice:P,setCabServiceChoice:M}),4==r&&n.createElement(y,{ref1name:O,setRef1name:e=>{var t=re(e,""!==q.toString().trim());H(t||""),A(e)},ref1nameErr:B,ref1phn:q,setRef1phn:e=>{var t=ae(e,!1);X(t||""),z(e)},ref1phnErr:W,ref2name:$,setRef2name:e=>{var t=re(e,""!==Y.toString().trim());K(t||""),J(e)},ref2nameErr:j,ref2phn:Y,setRef2phn:e=>{var t=ae(e,!1);ee(t||""),G(e)},ref2phnErr:Q}),5==r&&n.createElement(p,{name:i})),n.createElement("footer",{className:d.footr},n.createElement(l.pi,null,5==r?n.createElement(l.ZP,{variant:"secondary",size:"small",onClick:()=>{s(""),h(""),k(""),w(""),b(""),I(""),_(""),F(""),L(""),Z(""),U(!1),M(0),A(""),H(""),z(""),X(""),J(""),K(""),G(""),ee(""),a(1),t(!1)},icon:"arrow-right",isIconOnRight:!0},"Continue to enroll another"):n.createElement(n.Fragment,null,n.createElement(l.ZP,{variant:"primary",size:"small",onClick:async()=>{if(r>=5)return!1;switch(r){case 1:var e=re(i),n=ae(v);if(null!=e||null!=n)return e&&h(e),n&&w(n),te("Pleae provide required details","err"),!1;a(2);break;case 2:var l=ne(x),s=le(R,!1);if(null!=l||null!=s)return l&&I(l),s&&F(s),te("Pleae provide required details","err"),!1;a(3);break;case 3:var o=le(D,!0);if(null!=o)return o&&Z(o),te("Pleae provide vehicle reg","err"),!1;a(4);break;case 4:var m=ae(q,!1),u=null;""!==q.toString().trim()&&(u=re(O,!0));var d=ae(Y,!1),E=null;if(""!==Y.toString().trim()&&(E=re($,!0)),null!=u||null!=m||null!=E||null!=d)return u&&H(u),m&&X(m),E&&K(E),d&&X(d),te("Please provide name when providing phone number","err"),!1;var g={phn:Number(v),ts:Math.floor((new Date).getTime()/1e3),name:i,veh:D,owned:V,cab:P};""!==x.trim()&&(g.eml=x),""!==R.trim()&&(g.loc=R);var f=[];""!==q.toString().trim()&&""!==O.trim()&&f.push({nm:O,ph:Number(q)}),""!==Y.toString().trim()&&""!==$.trim()&&f.push({nm:$,ph:Number(Y)}),f.length>0&&(g.rfrl=f);try{t(!0);if(!await c.Z.putData({TableName:"LunaticCapital_RikshawDrivers",Item:g}))throw new Error;a(5)}catch(y){te(y.message||y.name||y.code||"Failed to Enroll, Please retry","err"),t(!1)}finally{t(!1)}break;default:te("Unknown action","alert")}},icon:"arrow-right",isIconOnRight:!0},1==r?"ENROLL":4==r?"SUBMIT":"PROCEED"),r>1&&n.createElement(l.ZP,{variant:"secondary",type:"button",size:"small",onClick:()=>{r>1&&a(r-1)},icon:"arrow-left"})))),e&&n.createElement(m.Z,{note:"Saving"}))}function E(e){let{name:t,setName:r,nameErr:l,phn:s,setPhn:o,phnErr:c}=e;return n.createElement("ul",{className:(0,a.Z)(d.dataUl,"clean-list")},n.createElement("li",null,n.createElement("h3",null,"Welcome!"))," ",n.createElement("li",null,n.createElement(i.Z,{title:"Name",placeholder:"Name",onChange:e=>{r(e.target.value)},value:t,error:l,icon:"user",initFocused:!0})),n.createElement("li",null,n.createElement(i.Z,{title:"Phone",placeholder:"Phone",onChange:e=>{o(e.target.value)},value:s,error:c,type:"number"})))}function g(e){let{email:t,setEmail:r,emailErr:l,loc:s,setLoc:o,locErr:c}=e;return n.createElement("ul",{className:(0,a.Z)(d.dataUl,"clean-list")},n.createElement("li",null,n.createElement("h3",null,"More about you!")),n.createElement("li",null,n.createElement(i.Z,{title:"Email",placeholder:"Email",onChange:e=>{r(e.target.value)},value:t,error:l})),n.createElement("li",null,n.createElement(i.Z,{title:"Locality",placeholder:"Locality",onChange:e=>{o(e.target.value)},value:s,error:c})))}function f(e){let{vehReg:t,setVehReg:r,vehRegErr:l,isOwned:c,setIsOwned:m,cabServiceChoice:u,setCabServiceChoice:h}=e;return n.createElement("ul",{className:(0,a.Z)(d.dataUl,"clean-list")},n.createElement("li",null,n.createElement("h3",null,"Vehicle Info")),n.createElement("li",null,n.createElement(i.Z,{title:"Vehicle lic-plate number",placeholder:"Vehicle lic-plate number",onChange:e=>{r(e.target.value)},value:t,error:l,initFocused:!0})),n.createElement("li",null,n.createElement(s.Z,{isChecked:c,onToggle:()=>{m(!c)}},"I own the vehicle")),n.createElement("li",null,n.createElement("h3",null,"Service")),n.createElement("li",null,n.createElement(o.Z,{checkedIdx:u,onChk:h},n.createElement(n.Fragment,null,"None"),n.createElement(n.Fragment,null,"Ola"),n.createElement(n.Fragment,null,"Uber"))))}function y(e){let{ref1name:t,setRef1name:r,ref1nameErr:l,ref1phn:s,setRef1phn:o,ref1phnErr:c,ref2name:m,setRef2name:u,ref2nameErr:h,ref2phn:E,setRef2phn:g,ref2phnErr:f}=e;return n.createElement("ul",{className:(0,a.Z)(d.dataUl,"clean-list")},n.createElement("li",null,n.createElement("h3",null,"Referral Person 1")),n.createElement("li",null,n.createElement(i.Z,{title:"Name",placeholder:"Name",onChange:e=>{r(e.target.value)},value:t,error:l,icon:"user",initFocused:!0})),n.createElement("li",null,n.createElement(i.Z,{title:"Phone",placeholder:"Phone",onChange:e=>{o(e.target.value)},value:s,error:c,type:"number"})),n.createElement("li",null,n.createElement("h3",null,"Referral Person 2")),n.createElement("li",null,n.createElement(i.Z,{title:"Name",placeholder:"Name",onChange:e=>{u(e.target.value)},value:m,error:h,icon:"user"})),n.createElement("li",null,n.createElement(i.Z,{title:"Phone",placeholder:"Phone",onChange:e=>{g(e.target.value)},value:E,error:f,type:"number"})))}function p(e){let{name:t}=e;return n.createElement("ul",{className:(0,a.Z)(d.dataUl,"clean-list")},n.createElement("li",null,n.createElement("h3",null,"Successfully Enrolled ",n.createElement("b",null,t),"!")))}},756:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(7294),a=r(6550),l=r(2263),i=r(7462);function s(e){return n.createElement("svg",(0,i.Z)({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 640 640",enableBackground:"new 0 0 640 640",xmlSpace:"preserve"},e),n.createElement("defs",null,n.createElement("clipPath",{id:"RikFrontVuSvg_skyClip"},n.createElement("path",{d:"M582.7,202.7C704.8,317.4,599,520,427.3,520C162.2,520,0,420.2,0,264.4S139.6,0,369,0C540.7,0,463.5,90.7,582.7,202.7z"}))),n.createElement("symbol",{id:"RikFrontVuSvg_cloud"},n.createElement("circle",{fill:"#fff",cx:"256",cy:"120",r:"120"}),n.createElement("circle",{fill:"#fff",cx:"140",cy:"236",r:"140"}),n.createElement("circle",{fill:"#fff",cx:"328",cy:"256",r:"120"})),n.createElement("symbol",{id:"RikFrontVuSvg_tree",viewBox:"0 0 208 368"},n.createElement("line",{fill:"none",stroke:"#42210B",strokeWidth:"12",strokeLinecap:"round",strokeMiterlimit:"10",x1:"120",y1:"184",x2:"88",y2:"368"}),n.createElement("line",{fill:"none",stroke:"#603813",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",x1:"104",y1:"256",x2:"64",y2:"192"}),n.createElement("circle",{fill:"#009245",cx:"144",cy:"144",r:"64"}),n.createElement("circle",{fill:"#8CC63F",cx:"96",cy:"80",r:"80"}),n.createElement("circle",{fill:"#39B54A",cx:"44",cy:"164",r:"44"})),n.createElement("symbol",{id:"RikFrontVuSvg_sideLight",viewBox:"0 0 48 24"},n.createElement("rect",{width:"48",height:"24",x:"0",y:"0",rx:"8",fill:"#F15A24"})),n.createElement("symbol",{id:"RikFrontVuSvg_tyre",viewBox:"0 0 48 120"},n.createElement("rect",{width:"48",height:"120",x:"0",y:"0",rx:"16",fill:"#000"}),n.createElement("line",{fill:"none",stroke:"#222",strokeWidth:"8",strokeLinecap:"round",strokeMiterlimit:"10",strokeDasharray:"10,15",strokeDashoffset:"100",x1:"16",y1:"0",x2:"16",y2:"120"},n.createElement("animate",{attributeName:"stroke-dashoffset",values:"100;0",dur:"1s",repeatCount:"indefinite"})),n.createElement("line",{fill:"none",stroke:"#222",strokeWidth:"8",strokeLinecap:"round",strokeMiterlimit:"10",strokeDasharray:"15,10",strokeDashoffset:"50",x1:"32",y1:"0",x2:"32",y2:"120"},n.createElement("animate",{attributeName:"stroke-dashoffset",values:"120;20",dur:"1s",repeatCount:"indefinite"}))),n.createElement("symbol",{id:"RikFrontVuSvg_tyreCover",viewBox:"0 0 80 80"},n.createElement("rect",{height:"80",width:"80",x:"0",y:"0",rx:"16",fill:"var(--color-primary-darkest)"})),n.createElement("g",null,n.createElement("path",{fill:"var(--color-primary-accent2)",d:"M582.7,202.7C704.8,317.4,599,520,427.3,520C162.2,520,0,420.2,0,264.4S139.6,0,369,0C540.7,0,463.5,90.7,582.7,202.7z"}),n.createElement("ellipse",{opacity:"0.25",cx:"320",cy:"556",rx:"216",ry:"20"})),n.createElement("g",{clipPath:"url(#RikFrontVuSvg_skyClip)"},n.createElement("use",{xlinkHref:"#RikFrontVuSvg_cloud",width:"448",height:"376",x:"64",y:"0",transform:"scale(1)",opacity:"0.62",style:{transformOrigin:"50% 70%"}},n.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"scale",values:"1;0",dur:"5s",repeatCount:"indefinite"})),n.createElement("use",{xlinkHref:"#RikFrontVuSvg_cloud",width:"448",height:"376",x:"64",y:"0",transform:"scale(2)",style:{transformOrigin:"50% 70%"},opacity:"0.32"},n.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"scale",values:"2;0",dur:"7s",repeatCount:"indefinite"}))),n.createElement("g",{clipPath:"url(#RikFrontVuSvg_skyClip)"},n.createElement("use",{xlinkHref:"#RikFrontVuSvg_tree",width:"299",height:"529",x:"-299",y:"0",transform:"scale(1)",style:{transformOrigin:"50% 80%"}},n.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"scale",values:"1;0",dur:"3s",repeatCount:"indefinite"})),n.createElement("use",{xlinkHref:"#RikFrontVuSvg_tree",width:"208",height:"368",x:"640",y:"152",transform:"scale(1)",style:{transformOrigin:"50% 80%"}},n.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"scale",values:"1;0",dur:"3s",begin:"1.1s",repeatCount:"indefinite"}))),n.createElement("use",{xlinkHref:"#RikFrontVuSvg_tyre",width:"48",height:"120",x:"160",y:"440"},n.createElement("animate",{attributeName:"y",values:"442;438;442",dur:"1s",repeatCount:"indefinite"})),n.createElement("use",{xlinkHref:"#RikFrontVuSvg_tyre",width:"48",height:"120",x:"432",y:"440"},n.createElement("animate",{attributeName:"y",values:"442;438;442",dur:"1s",repeatCount:"indefinite"})),n.createElement("use",{xlinkHref:"#RikFrontVuSvg_tyre",width:"48",height:"120",x:"296",y:"448"},n.createElement("animate",{attributeName:"y",values:"445;451;445",dur:"1s",repeatCount:"indefinite"})),n.createElement("g",{transform:"rotate(10)",style:{transformOrigin:"50% 424px"}},n.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",values:"0.5;-0.5;0.5",dur:"1s",repeatCount:"indefinite"}),n.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"translate",values:"0 0;0 10;0 0",dur:"1.3s",repeatCount:"indefinite",additive:"sum"}),n.createElement("use",{xlinkHref:"#RikFrontVuSvg_tyreCover",width:"320",height:"320",x:"160",y:"104"}),n.createElement("use",{xlinkHref:"#RikFrontVuSvg_tyreCover",width:"80",height:"80",x:"144",y:"424"}),n.createElement("use",{xlinkHref:"#RikFrontVuSvg_tyreCover",width:"80",height:"80",x:"416",y:"424"}),n.createElement("path",{fill:"var(--color-primary-accent1-darker)",d:"M328,520.1c0,0-83.1,0-126,0s-42-200.2-42-200.2h168V520.1z"}),n.createElement("path",{fill:"var(--color-primary-darker)",d:"M312,520.1c0,0,83.1,0,126,0s42-200.2,42-200.2H312V520.1z"}),n.createElement("use",{xlinkHref:"#RikFrontVuSvg_tyreCover",width:"80",height:"80",x:"280",y:"442"}),n.createElement("circle",{fill:"var(--color-primary-accent1-lightest)",cx:"320",cy:"424",r:"24"}),n.createElement("use",{xlinkHref:"#RikFrontVuSvg_sideLight",width:"48",height:"24",x:"152",y:"328"}),n.createElement("use",{xlinkHref:"#RikFrontVuSvg_sideLight",width:"48",height:"24",x:"440",y:"328"}),n.createElement("polygon",{opacity:"0.5",fill:"#7FCDEE",points:"472,296 168,296 176,200 200,144 440,144 464,200"}),n.createElement("line",{fill:"none",stroke:"var(--color-primary-darkest)",strokeWidth:"4",strokeMiterlimit:"10",x1:"240",y1:"144",x2:"240",y2:"280"}),n.createElement("line",{fill:"none",stroke:"var(--color-primary-darkest)",strokeWidth:"4",strokeMiterlimit:"10",x1:"400",y1:"144",x2:"400",y2:"280"}),n.createElement("path",{fill:"#FBB03B",d:"M429.5,136c-41.1,0-176.8,0-218.9,0S160,241,160,320.3c58.9,0,274.8,0,320.1,0 C480,242,470.5,136,429.5,136z M222.1,148.8c37.7,0,159.1,0,195.8,0c36.7,0,45.2,75.5,45.2,131.3c-40.5,0-233.5,0-286.2,0 C176.9,223.6,184.4,148.8,222.1,148.8z"})))}const o={topC:"topC_Dqjt",btmC:"btmC_IJj0",topEdgeSvg:"topEdgeSvg_XdvR"};var c=r(6526);function m(e){let{children:t,topContainerChildren:r}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:o.topC},"function"==typeof r&&r()),n.createElement("div",{className:o.btmC},n.createElement(c.AW,{className:o.topEdgeSvg}),t))}var u=r(6787),d=r(1262);function h(){const[e,t]=n.useState(!0),[i,o]=n.useState(""),{siteConfig:c}=(0,l.Z)(),h=n.useContext(u._1);return n.useEffect((()=>{(async()=>{try{const e=await h.getLoggedInCognitoUser();o(e.groups.includes("Manager")?"y":"n"),t(!1)}catch(e){}})()}),[]),h.isLoggedIn?e?n.createElement("main",null,"Loading..."):"y"==i?n.createElement(m,{topContainerChildren:()=>n.createElement("div",null,n.createElement(s,null))},n.createElement(d.Z,null,(()=>{const e=r(6053).Z;return n.createElement(e,null)}))):n.createElement(a.l_,{to:`${c.baseUrl}`}):n.createElement(a.l_,{to:`${c.baseUrl}login`})}}}]);