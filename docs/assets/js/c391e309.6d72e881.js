"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[66],{557:(e,t,a)=>{a.d(t,{Z:()=>E});var s=a(7294),n=a(6010);class r{static months=["January","February","March","April","May","June","July","August","September","October","November","December"];static monthsAbr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];static getLetterFormatedDate=(e,t)=>{if(!e)return"";if(!Number.isInteger(e))return"";"boolean"!=typeof t&&(t=!1);const a=new Date(1e3*e);return t?a.getDate()+" "+this.monthsAbr[a.getMonth()]+" "+a.getFullYear():a.getDate()+" "+this.months[a.getMonth()]+" "+a.getFullYear()};static getNumberFormatedDate=(e,t,a)=>{if(!e)return"";if(!Number.isInteger(e))return"";t&&"string"==typeof t||(t="-"),"boolean"!=typeof a&&(a=!1);const s=new Date(1e3*e);let n=s.getDate(),r=s.getMonth()+1;return a&&(n=n<10?"0"+n:n,r=r<10?"0"+r:r),n+t+r+t+s.getFullYear()};static getDayOrdinal=e=>{const t=e.toString(),a=t.slice(-1);return"1"===a&&"11"!==t?`${t}st`:"2"===a&&"12"!==t?`${t}nd`:"3"===a&&"13"!==t?`${t}rd`:`${t}th`}}var i=a(2255);const l={tag:"tag_fsVy",small:"small_nozE",g:"g_bCVl",o:"o_GyY6",r:"r_n39y",b:"b_qYpg"};function o(e){let{className:t,color:a,children:r,size:i}=e;return s.createElement("span",{className:(0,n.Z)(l.tag,"green"==a&&l.g,"yellow"==a&&l.o,"red"==a&&l.r,"small"==i&&l.small,t&&""!==t&&t)},r)}var c=a(3510);const d={infoRow:"infoRow_KMxO",bars:"bars_xPEC",barsRow:"barsRow_jRzY",capitalBars:"capitalBars_rA2J",roiBars:"roiBars_jCYE",payoutMonth:"payoutMonth_BvXT",currentMonth:"currentMonth_t6uD",gridCol:"gridCol_A_4D"};function m(e){let{startDate:t,endDate:a,payoutFrequencyInDays:i,payoutRoiInPercent:l,capital:o}=e;const m=Math.floor((a-t)/2592e3),g=new Array(m).fill(0),u=Math.floor(i/30),h=Math.floor(l/u),E=h*m,y=Math.floor(E/100),p=y>0?new Array(y).fill(0):[],b=Math.floor(m/6),f=b>1?new Array(b).fill(0):[],w=Math.floor((Math.floor(Date.now()/1e3)-t)/2592e3);return s.createElement("ul",{className:"clean-list"},s.createElement("li",{className:d.infoRow},s.createElement("span",null,s.createElement(c.ZP,{title:"Capital"},s.createElement(c.$d,{size:"big"},o))),s.createElement("span",null,s.createElement(c.ZP,{title:"Growth",textPos:"right"},s.createElement(c.gG,{size:"big"},h*w)))),s.createElement("li",{className:d.infoRow},s.createElement("ul",{className:(0,n.Z)("clean-list",d.bars)},s.createElement("li",{className:(0,n.Z)(d.barsRow,d.capitalBars)},g.map(((e,t)=>s.createElement("span",{key:t})))),s.createElement("li",{className:(0,n.Z)(d.barsRow,d.roiBars)},g.map(((e,t)=>{const a=w-1==t;return s.createElement("span",{key:t,className:(0,n.Z)(a&&d.currentMonth,Number.isInteger((t+1)/u)&&d.payoutMonth)},a?s.createElement("span",{style:{height:h*(t+1)+"%"},"data-growth":h*(t+1)+"%"}):s.createElement("span",{style:{height:h*(t+1)+"%"}}))}))),p.map(((e,t)=>s.createElement("li",{key:t,className:d.barsRow}))),b>1&&s.createElement("li",{className:d.gridCol},f.map(((e,t)=>s.createElement("span",{key:t})))))),s.createElement("li",{className:d.infoRow},s.createElement("span",null,s.createElement(c.ZP,{title:"Invested On"},r.getLetterFormatedDate(Number(t),!0))),s.createElement("span",null,s.createElement(c.ZP,{title:"Invested Till",textPos:"right"},r.getLetterFormatedDate(Number(a),!0)))))}const g={dtlC:"dtlC_zwOy",dtlH:"dtlH_RnMk",widget:"widget_NZj1"};function u(e){let{id:t,investmentObj:a,onGoBack:r}=e;const l=Math.round((Number(a.end)-Date.now()/1e3)/86400);return s.createElement("ul",{className:(0,n.Z)("clean-list",g.dtlC)},s.createElement("li",{className:g.dtlH},r&&"function"==typeof r&&s.createElement(i.ZP,{variant:"tertiary",onClick:r,icon:"arrow-left-circle"}),s.createElement(c.ZP,{title:"Investment ID"},t),s.createElement(o,{color:l<0?"red":l<=15?"yellow":"green"},l<0?"Ended":l<=15?`Ending in ${l} days`:"Active")),s.createElement("li",{className:g.widget},s.createElement("div",null,s.createElement(m,{startDate:t,endDate:a.end,payoutFrequencyInDays:a.payoutDaysCyc,payoutRoiInPercent:a.prcntROI,capital:a.amt}))))}const h={investments:"investments_ltoN",amt:"amt_O0Hx",sts:"sts_CXIZ",start:"start_gVCD",end:"end_CLKh",id:"id_HO_3",roi:"roi_ESma",bot:"bot_o7YJ",act:"act_qgaW",active:"active_f0i3",closed:"closed_yYQo",botTag:"botTag_Ivwh",botTagX1:"botTagX1_1R0U",botTagX2:"botTagX2_rS5E",botTagX3:"botTagX3_lM1u",botTagX4:"botTagX4_ip6z"};function E(e){let{investmentsObj:t}=e;const[a,l]=(0,s.useState)(null);return null!=a?s.createElement(u,{id:a,onGoBack:()=>{l(null)},investmentObj:t[a]}):Object.keys(t).length>0?s.createElement("ul",{className:(0,n.Z)(h.investments,"clean-list")},s.createElement("li",{key:"header"},s.createElement("span",{className:h.bot},"Bot"),s.createElement("span",{className:h.start},"Start Date"),s.createElement("span",{className:h.end},"End Date"),s.createElement("span",{className:h.id},"ID"),s.createElement("span",{className:h.sts},"Status"),s.createElement("span",{className:h.amt},"Capital Amt"),s.createElement("span",{className:h.roi},"ROI Payout"),s.createElement("span",{className:h.act},"Actions")),Object.keys(t).map(((e,a)=>{const d=Math.round((Number(t[e].end)-Date.now()/1e3)/86400),m=Number(t[e].amt);return s.createElement("li",{key:e,className:d<0?h.closed:h.active},s.createElement("span",{className:h.bot},s.createElement("span",{className:(0,n.Z)(h.botTag,m<2e5?h.botTagX1:m<4e5?h.botTagX2:m<1e6?h.botTagX3:h.botTagX4)})),s.createElement("span",{className:h.start},r.getLetterFormatedDate(Number(e),!0)),s.createElement("span",{className:h.end},r.getLetterFormatedDate(Number(t[e].end),!0)),s.createElement("span",{className:h.id},e),s.createElement("span",{className:h.sts},s.createElement(o,{color:d<0?"red":d<=15?"yellow":"green",size:"small"},d<0?"Ended":d<=15?`Ending in ${d} days`:"Active")),s.createElement("span",{className:h.amt},s.createElement(c.$d,{size:"big"},m)),s.createElement("span",{className:h.roi},t[e].prcntROI+"% every "+t[e].payoutDaysCyc+" days"),s.createElement("div",{className:h.act},s.createElement(i.ZP,{variant:"primary",size:"smaller",onClick:()=>{l(e)},icon:"arrow-right",isIconOnRight:!0},"View")))}))):s.createElement("div",{className:"text--center"},"No Investments")}},7678:(e,t,a)=>{a.d(t,{Z:()=>f});var s=a(7294),n=a(6010),r=a(2255),i=a(238),l=a(9316);const o="wrap_yJiq",c="isViz_Fkpq",d="bg_p5Qx",m="sheet_hneH",g="xBtn_P64I";class u extends s.Component{constructor(e){super(e),this.state={isVisible:!1}}_openBtmSheet=()=>new Promise((e=>{document&&document.body&&(document.body.style.overflow="hidden"),setTimeout((()=>{this.setState({isVisible:!0}),setTimeout((()=>{e()}),200)}),10)}));close=()=>new Promise((e=>{this.setState({isVisible:!1}),setTimeout((()=>{document&&document.body&&(document.body.style.overflow="visible"),e()}),200)}));closeAndDo=()=>{this.close().then((()=>{this.props.doOnClose&&"function"==typeof this.props.doOnClose&&this.props.doOnClose()}))};componentDidMount(){this._openBtmSheet()}render(){const{title:e,desc:t,useCloseBtn:a,children:r}=this.props;return s.createElement("div",{className:(0,n.Z)(o,this.state.isVisible&&c)},a?s.createElement("div",{className:d}):s.createElement("div",{className:d,onClick:this.closeAndDo}),s.createElement("div",{className:m},(e||t)&&s.createElement("header",null,e&&s.createElement("div",null,e),t&&s.createElement("div",null,t)),s.createElement("main",null,"function"==typeof r?r(this.close):r),a&&s.createElement("span",{className:g,onClick:this.closeAndDo})))}}var h=a(8964),E=a(557);const y="cstmrList_lill",p="nam_LyjJ",b="eml_gtMj";class f extends s.Component{constructor(e){super(e),this.state={isWip:!0,isLoadMoreWip:!1,dataAry:[],selectedForViewing:-1,lastEvalKey:null}}fetchDataFromDb=async()=>{let e={};try{let t={TableName:"LunaticCapital_Users",IndexName:"Manager-index",KeyConditionExpression:"#ManagerId = :u",ExpressionAttributeNames:{"#ManagerId":"Mngr"},ExpressionAttributeValues:{":u":this.props.cognitoUser.id},Select:"ALL_PROJECTED_ATTRIBUTES",ScanIndexForward:!1,Limit:10};if(this.state.lastEvalKey&&(t.ExclusiveStartKey=this.state.lastEvalKey),e=await i.Z.queryData(t),e.Count<1)return this.props.notify(this.state.lastEvalKey?"No more customer records":"No customer on record"),this.setState({lastEvalKey:null}),null;null!=this.state.lastEvalKey?this.setState((t=>({dataAry:[...t.dataAry,...e.Items]}))):this.setState({dataAry:e.Items}),e.LastEvaluatedKey?this.setState({lastEvalKey:e.LastEvaluatedKey}):this.setState({lastEvalKey:null})}catch(t){console.log("fetchDataFromDb():",t.message||t.name||t.code||"Error fetching customers"),this.props.notify(t.message||t.name||t.code||"Error fetching customers","err")}};doLoadMore=()=>{this.setState({isLoadMoreWip:!0}),this.fetchDataFromDb().finally((()=>{this.setState({isLoadMoreWip:!1})}))};setSelectedForViewing=e=>{this.setState({selectedForViewing:e})};unsetSelection=()=>{this.setState({selectedForViewing:-1})};componentDidMount(){this.fetchDataFromDb().finally((()=>{this.setState({isWip:!1})}))}render(){return this.state.dataAry.length>0?s.createElement(s.Fragment,null,s.createElement("div",null,s.createElement("ul",{className:(0,n.Z)(y,"clean-list")},s.createElement("li",{key:"header"},s.createElement("div",null,s.createElement("span",{className:p},"Name"),s.createElement("span",{className:b},"Email")),s.createElement("i",null)),this.state.dataAry.map(((e,t)=>s.createElement("li",{key:e.ID,onClick:()=>{this.setSelectedForViewing(t)}},s.createElement("div",null,s.createElement("span",{className:p},e.Dtls.n||"Customer-"+(t+1)),s.createElement("span",{className:b},e.Dtls.eml)),s.createElement(h.Z,{icon:"chevron-right"}))))),this.state.lastEvalKey&&s.createElement(r.pi,null,s.createElement(r.ZP,{variant:"secondary",size:"small",onClick:this.doLoadMore,isWip:this.state.isWip,wipText:"Loading"},"Load more")),this.state.isWip&&0==this.state.dataAry.length&&s.createElement(l.Z,{note:"Loading"})),this.state.selectedForViewing>-1&&s.createElement(u,{title:this.state.dataAry[this.state.selectedForViewing].Dtls.eml,doOnClose:this.unsetSelection,useCloseBtn:!0},s.createElement(E.Z,{investmentsObj:this.state.dataAry[this.state.selectedForViewing].Invst}))):this.state.isWip?s.createElement("div",null,"Loading..."):s.createElement("div",null,"No Customers")}}},3510:(e,t,a)=>{a.d(t,{$d:()=>o,gG:()=>c,ZP:()=>l});var s=a(7294),n=a(6010);const r={infoLbl:"infoLbl_HVaW",txtR:"txtR_XmRq",txtC:"txtC_CKU3",cpy:"cpy_yrtj"},i={amt:"amt_OMye",prcnt:"prcnt_YUVf",light:"light_T39C",big:"big_rUzH",bigger:"bigger_RdkH",biggest:"biggest_OW94",large:"large_dwuq",larger:"larger_YFnI",short:"short_NwYw",cr:"cr_lfU0",l:"l_M3xS",k:"k_cpDz"};function l(e){let{title:t,children:a,textPos:i,className:l}=e;return s.createElement("div",{className:(0,n.Z)(r.infoLbl,"right"==i&&r.txtR,"center"==i&&r.txtC,l&&""!==l&&l),"data-title":t},a)}function o(e){let{children:t,useShortForm:a,size:r,useLightColor:l}=e;if(isNaN(t))return s.createElement(s.Fragment,null,"0");const o=Intl.NumberFormat("en-IN").format(t),c=t>=1e7?t/1e7:null,d=t<1e7&&t>=1e5?t/1e5:null,m=t<1e5?t/1e3:null;return s.createElement("span",{className:(0,n.Z)(i.amt,"big"===r&&i.big,"bigger"===r&&i.bigger,"biggest"===r&&i.biggest,"large"===r&&i.large,"larger"===r&&i.larger,l&&i.light,c&&i.cr,d&&i.l,m&&i.k,a&&i.short)},a&&(c||d||m)||o)}function c(e){let{children:t,size:a,useLightColor:r}=e;return s.createElement("span",{className:(0,n.Z)(i.prcnt,"big"===a&&i.big,"bigger"===a&&i.bigger,"biggest"===a&&i.biggest,"large"===a&&i.large,"larger"===a&&i.larger,r&&i.light)},t)}},238:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(6036),n=a(3446),r=a(4057),i=a(7167),l=a(934);class o{static creds=null;static lastLoggedInUserEmail=null;static lastReadIdTokenIssuedAt=0;static lastReadIdTokenExpiry=0;static _clear=()=>{this.creds=null,this.lastLoggedInUserEmail=null,this.lastReadIdTokenIssuedAt=0,this.lastReadIdTokenExpiry=0};static _isCredsExpired=()=>{if(!this.creds)return!0;if(!this.creds.expiration)return!0;const e=new Date(this.creds.expiration).getTime();if(isNaN(e))return!0;return Date.now()>=e-15e3};static _getIdToken=async()=>{try{const e=new i.AM({UserPoolId:r.Om,ClientId:r.In});if(!e)throw new Error("Error reading from user pool");const t=e.getCurrentUser(),a=await new Promise(((e,a)=>{t.getSession(((t,s)=>{if(t)return a(t.message||JSON.stringify(t));if(!s)return a("No active user session");if(!s.isValid?.())return a("Invalid session");const n=s.getIdToken?.();return n?e(n):a()}))}));if(!a)throw new Error;return a}catch(e){}};static _getJwtIdToken=async()=>{try{const e=await this._getIdToken(),t=e.getJwtToken?.();if(!t)throw new Error;return t}catch(e){}};static _readIdTokenDetails=async()=>{try{const e=await this._getIdToken(),t=e.decodePayload?.();if(!t)throw new Error;return{email:t.email,issuedAt:e.getIssuedAt?.(),exp:e.getExpiration?.()}}catch(e){}};static _isUserSessionChangedOrExpired=async()=>{try{const{email:t,issuedAt:a,exp:s}=await this._readIdTokenDetails();var e=!1;return this.lastLoggedInUserEmail==t&&this.lastReadIdTokenIssuedAt==a&&this.lastReadIdTokenExpiry==s||(e=!0),this.lastLoggedInUserEmail=t,this.lastReadIdTokenIssuedAt=a,this.lastReadIdTokenExpiry=s,e?(this.creds=null,!0):s<=Math.floor(Date.now()/1e3)-10}catch(t){throw new Error(t)}};static _fetchCredsForLoggedInUser=async e=>{try{const e=await this._getJwtIdToken(),t=(0,l.s)({identityPoolId:r.vX,clientConfig:{region:r.U3},logins:{[`cognito-idp.${r.U3}.amazonaws.com/${r.Om}`]:e}});if(!t)throw new Error("Error getting fn that fetches credentials");const a=await t();return this.creds=a,a}catch(t){throw new Error("Error fetching credentials for logged-in user")}};static isExpired=async()=>!!await this._isUserSessionChangedOrExpired()||!!this._isCredsExpired();static getCredsForLoggedInUser=async()=>{try{if(await this.isExpired()){return{creds:await this._fetchCredsForLoggedInUser(),isFromCache:!1}}return{creds:this.creds,isFromCache:!0}}catch(e){throw new Error("Error getting credentials for logged-in user")}}}class c{static ddbClient=null;static ddbDocClient=null;static close=()=>{this.ddbDocClient&&(this.ddbDocClient.destroy(),this.ddbDocClient=null),this.ddbClient&&(this.ddbClient.destroy(),this.ddbClient=null)};static _initIfNotAlready=async()=>{try{const{creds:e,isFromCache:t}=await o.getCredsForLoggedInUser();return t?(this.ddbClient&&"DynamoDBClient"===this.ddbClient.constructor.name&&this.ddbDocClient||(this.close(),this.ddbClient=new s.c({region:r.U3,credentials:e}),this.ddbDocClient=n.m1.from(this.ddbClient)),this.ddbDocClient):(this.close(),this.ddbClient=new s.c({region:r.U3,credentials:e}),this.ddbDocClient=n.m1.from(this.ddbClient),this.ddbDocClient)}catch(e){console.log("getDynamoDbDocClient():",e.message||e.code||e.name||"Error initiating DB client")}};static queryData=async e=>{try{if(!e)throw new Error("No query specified");await this._initIfNotAlready();return await this.ddbDocClient.send(new n.cI(e))}catch(t){console.log("queryData():",t.message||t.code||t.name||"Error querying data from database")}};static getItemData=async e=>{try{if(!e)throw new Error("No query specified");await this._initIfNotAlready();return await this.ddbDocClient.send(new n.Bj(e))}catch(t){console.log("getItemData():",t.message||t.code||t.name||"Error fetching data from database")}}}},8914:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var s=a(7294),n=a(6550),r=a(2263),i=a(9230),l=a(6787),o=a(1705),c=a(1262);function d(){const[e,t]=s.useState(!0),[d,m]=s.useState(""),{siteConfig:g}=(0,r.Z)(),u=s.useContext(l._1),{notify:h}=s.useContext(o.z);return s.useEffect((()=>{(async()=>{try{const e=await u.getLoggedInCognitoUser();m(e.groups.includes("Manager")?"y":"n"),t(!1)}catch(e){}})()}),[]),u.isLoggedIn?e?s.createElement(s.Fragment,null):"n"==d?s.createElement(n.l_,{to:`${g.baseUrl}console`}):"y"==d&&s.createElement(i.Z,{title:"My Clients",description:"My clients at Lunatic Capital"},s.createElement("main",{className:"container margin-vert--lg"},s.createElement("h1",null,"My Clients"),s.createElement(c.Z,null,(()=>{const e=a(7678).Z;return s.createElement(e,{cognitoUser:u,notify:h})})))):s.createElement(n.l_,{to:`${g.baseUrl}login`})}}}]);