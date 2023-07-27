"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[345],{970:(e,t,s)=>{s.d(t,{Z:()=>v});var a=s(7294),r=s(6010),n=s(2255),i=s(6036),o=s(2557),l=s(4057),c=s(7167),d=s(934);class h{static creds=null;static lastLoggedInUserEmail=null;static lastReadIdTokenIssuedAt=0;static lastReadIdTokenExpiry=0;static _clear=()=>{this.creds=null,this.lastLoggedInUserEmail=null,this.lastReadIdTokenIssuedAt=0,this.lastReadIdTokenExpiry=0};static _isCredsExpired=()=>{if(!this.creds)return!0;if(!this.creds.expiration)return!0;const e=new Date(this.creds.expiration).getTime();if(isNaN(e))return!0;return Date.now()>=e-15e3};static _getIdToken=async()=>{try{const e=new c.AM({UserPoolId:l.Om,ClientId:l.In});if(!e)throw new Error("Error reading from user pool");const t=e.getCurrentUser(),s=await new Promise(((e,s)=>{t.getSession(((t,a)=>{if(t)return s(t.message||JSON.stringify(t));if(!a)return s("No active user session");if(!a.isValid?.())return s("Invalid session");const r=a.getIdToken?.();return r?e(r):s()}))}));if(!s)throw new Error;return s}catch(e){}};static _getJwtIdToken=async()=>{try{const e=await this._getIdToken(),t=e.getJwtToken?.();if(!t)throw new Error;return t}catch(e){}};static _readIdTokenDetails=async()=>{try{const e=await this._getIdToken(),t=e.decodePayload?.();if(!t)throw new Error;return{email:t.email,issuedAt:e.getIssuedAt?.(),exp:e.getExpiration?.()}}catch(e){}};static _isUserSessionChangedOrExpired=async()=>{try{const{email:t,issuedAt:s,exp:a}=await this._readIdTokenDetails();var e=!1;return this.lastLoggedInUserEmail==t&&this.lastReadIdTokenIssuedAt==s&&this.lastReadIdTokenExpiry==a||(e=!0),this.lastLoggedInUserEmail=t,this.lastReadIdTokenIssuedAt=s,this.lastReadIdTokenExpiry=a,e?(this.creds=null,!0):a<=Math.floor(Date.now()/1e3)-10}catch(t){throw new Error(t)}};static _fetchCredsForLoggedInUser=async e=>{try{const e=await this._getJwtIdToken(),t=(0,d.s)({identityPoolId:l.vX,clientConfig:{region:l.U3},logins:{[`cognito-idp.${l.U3}.amazonaws.com/${l.Om}`]:e}});if(!t)throw new Error("Error getting fn that fetches credentials");const s=await t();return this.creds=s,s}catch(t){throw new Error("Error fetching credentials for logged-in user")}};static isExpired=async()=>!!await this._isUserSessionChangedOrExpired()||!!this._isCredsExpired();static getCredsForLoggedInUser=async()=>{try{if(await this.isExpired()){return{creds:await this._fetchCredsForLoggedInUser(),isFromCache:!1}}return{creds:this.creds,isFromCache:!0}}catch(e){throw new Error("Error getting credentials for logged-in user")}}}class m{static ddbClient=null;static ddbDocClient=null;static close=()=>{this.ddbDocClient&&(this.ddbDocClient.destroy(),this.ddbDocClient=null),this.ddbClient&&(this.ddbClient.destroy(),this.ddbClient=null)};static _initIfNotAlready=async()=>{try{const{creds:e,isFromCache:t}=await h.getCredsForLoggedInUser();return t?(this.ddbClient&&"DynamoDBClient"===this.ddbClient.constructor.name&&this.ddbDocClient||(this.close(),this.ddbClient=new i.c({region:l.U3,credentials:e}),this.ddbDocClient=o.m1.from(this.ddbClient)),this.ddbDocClient):(this.close(),this.ddbClient=new i.c({region:l.U3,credentials:e}),this.ddbDocClient=o.m1.from(this.ddbClient),this.ddbDocClient)}catch(e){console.log("getDynamoDbDocClient():",e.message||e.code||e.name||"Error initiating DB client")}};static queryData=async e=>{try{if(!e)throw new Error("No query specified");await this._initIfNotAlready();return await this.ddbDocClient.send(new o.cI(e))}catch(t){console.log("queryData():",t.message||t.code||t.name||"Error querying data from database")}}}var u=s(9316);const g="investments_PghJ",y="id_LKDL",E="start_xEGx",p="end_NChH",f="roi_DSlC",C="sts_pMX4",D="active_utcN",w="closed_tKl3",I="amt_XPn2";class b{static months=["January","February","March","April","May","June","July","August","September","October","November","December"];static monthsAbr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];static getLetterFormatedDate=(e,t)=>{if(!e)return"";if(!Number.isInteger(e))return"";"boolean"!=typeof t&&(t=!1);const s=new Date(1e3*e);return t?s.getDate()+" "+this.monthsAbr[s.getMonth()]+" "+s.getFullYear():s.getDate()+" "+this.months[s.getMonth()]+" "+s.getFullYear()};static getNumberFormatedDate=(e,t,s)=>{if(!e)return"";if(!Number.isInteger(e))return"";t&&"string"==typeof t||(t="-"),"boolean"!=typeof s&&(s=!1);const a=new Date(1e3*e);let r=a.getDate(),n=a.getMonth()+1;return s&&(r=r<10?"0"+r:r,n=n<10?"0"+n:n),r+t+n+t+a.getFullYear()}}class v extends a.Component{constructor(e){super(e),this.state={isWip:!0,isLoadMoreWip:!1,dataAry:[],lastEvalKey:null}}fetchDataFromDb=async()=>{let e={};try{let t={TableName:"LunaticCapital_Investments",KeyConditionExpression:"#User = :u",ExpressionAttributeNames:{"#User":"User"},ExpressionAttributeValues:{":u":this.props.cognitoUser.id},ScanIndexForward:!1,Limit:10};if(this.state.lastEvalKey&&(t.ExclusiveStartKey=this.state.lastEvalKey),e=await m.queryData(t),e.Count<1)return this.props.notify(this.state.lastEvalKey?"No more older investment records":"No investment on record"),this.setState({lastEvalKey:null}),null;null!=this.state.lastEvalKey?this.setState((t=>({dataAry:[...t.dataAry,...e.Items]}))):this.setState({dataAry:e.Items}),e.LastEvaluatedKey?this.setState({lastEvalKey:e.LastEvaluatedKey}):this.setState({lastEvalKey:null})}catch(t){console.log("fetchDataFromDb():",t.message||t.name||t.code||"Error fetching transactions"),this.props.notify(t.message||t.name||t.code||"Error fetching transactions","err")}};doLoadMore=()=>{this.setState({isLoadMoreWip:!0}),this.fetchDataFromDb().finally((()=>{this.setState({isLoadMoreWip:!1})}))};componentDidMount(){this.fetchDataFromDb().finally((()=>{this.setState({isWip:!1})}))}render(){return this.state.dataAry.length>0?a.createElement("div",null,a.createElement("ul",{className:(0,r.Z)(g,"clean-list")},a.createElement("li",{key:"header"},a.createElement("span",{className:E},"Start Date"),a.createElement("span",{className:p},"End Date"),a.createElement("span",{className:y},"ID"),a.createElement("span",{className:C},"Status"),a.createElement("span",{className:I},"Capital Amt"),a.createElement("span",{className:f},"ROI")),this.state.dataAry.map(((e,t)=>{let s="";return Object.prototype.hasOwnProperty.call(e,"End")&&!isNaN(e?.End)&&(s=b.getLetterFormatedDate(e.End,!0)),a.createElement("li",{key:e.Date,className:""==s.trim()?D:w},a.createElement("span",{className:E},b.getLetterFormatedDate(e.Date,!0)),a.createElement("span",{className:p},""==s.trim()?"-":s),a.createElement("span",{className:y},e.Date),a.createElement("span",{className:C},""==s.trim()?"Active":"Closed"),a.createElement("span",{className:I},e.Amt),a.createElement("span",{className:f},e.ROIpercent+"% every "+e.ROIdaysCycle+" days"))}))),this.state.lastEvalKey&&a.createElement(n.pi,null,a.createElement(n.ZP,{variant:"secondary",size:"small",onClick:this.doLoadMore,isWip:this.state.isWip,wipText:"Loading"},"List older investments")),this.state.isWip&&0==this.state.dataAry.length&&a.createElement(u.Z,{note:"Loading"})):this.state.isWip?a.createElement("div",null,"Loading..."):a.createElement("div",null,"No records")}}},5574:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(7294),r=s(6550),n=s(2263),i=s(9230),o=s(3077),l=s(1705),c=s(1262);function d(){const{siteConfig:e}=(0,n.Z)(),t=a.useContext(o._1),{notify:d}=a.useContext(l.z);return t.isLoggedIn?a.createElement(i.Z,{title:`Investments at ${e.title}`,description:"My investments at Lunatic Capital"},a.createElement("main",{className:"container margin-vert--lg"},a.createElement("h1",null,"My Investments"),a.createElement(c.Z,null,(()=>{const e=s(970).Z;return a.createElement(e,{cognitoUser:t,notify:d})})))):a.createElement(r.l_,{to:`${e.baseUrl}login`})}}}]);