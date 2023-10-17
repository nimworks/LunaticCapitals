(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}s.m=e,s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,a)=>(s.f[a](e,t),t)),[])),s.u=e=>e+".sw.js",s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/",(()=>{var e={179:1};s.f.i=(t,a)=>{e[t]||importScripts(s.p+s.u(t))};var t=self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[],a=t.push.bind(t);t.push=t=>{var[n,r,i]=t;for(var c in r)s.o(r,c)&&(s.m[c]=r[c]);for(i&&i(s);n.length;)e[n.pop()]=1;a(t)}})(),(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),r=e=>e||n(a.precache),i=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),r=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:r.href}}class l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class h{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=s?s(r):r,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,i)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const r=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const r=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:l}=this._strategy,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const r=Object.assign(Object.assign({},a),{ignoreSearch:!0}),i=await e.keys(t,r);for(const t of i)if(n===d(t.url,s))return e.match(t,a)}(h,r.clone(),["__WB_REVISION__"],l):null;try{await h.put(r,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=i(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(n=await r({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}class m extends v{constructor(e={}){e.cacheName=r(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,r=e.integrity,i=!r||r===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||t:void 0})),t&&i&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class _{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:r(e),plugins:[...t,new h({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),r="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new l;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"5953a354f14598cb4876b66daca548f2","url":"306.sw.js"},{"revision":"c6fe9e05600d8929b6bbeb19a90e0bf0","url":"404.html"},{"revision":"81d0ffb13adc97841772bd00a854942a","url":"about.html"},{"revision":"912ea732b0c39c5e3768968b64ad5577","url":"assets/css/styles.cc3f8e8f.css"},{"revision":"c7df0068f0235368009d5a96934d40b7","url":"assets/js/08462523.0a6ecec6.js"},{"revision":"86e1168110a48588e2994904a4d9e0b7","url":"assets/js/131.40a94a17.js"},{"revision":"279fe30933966d6879bb95c74baac9e5","url":"assets/js/17896441.596c5e7c.js"},{"revision":"edbee277801dfea9b1b0f18ff0863427","url":"assets/js/1be78505.d58daa25.js"},{"revision":"81c1b239d8d83726570f6ef6745ffdf5","url":"assets/js/1d6d9fa9.499c1ce4.js"},{"revision":"c295d0d5ef915834a1d8199833516bfc","url":"assets/js/1f391b9e.19129a5b.js"},{"revision":"c5ea795bb34afc9f2708c36c40827428","url":"assets/js/230.44a5b42c.js"},{"revision":"f464cadf181079f371f59398967c7c04","url":"assets/js/275.6cdc4341.js"},{"revision":"bf30f71d484dd95690f64a2133db73f1","url":"assets/js/283.593f5a1f.js"},{"revision":"3fd567b2a5bc4dac5fef0563f2cee955","url":"assets/js/2c1a2ca2.3ea213ae.js"},{"revision":"973e3dce1eca3442c9191591fc524c33","url":"assets/js/35efb5aa.9c0e27dc.js"},{"revision":"784040a2cf0a9b4500da632df0b47b12","url":"assets/js/376.ef023d54.js"},{"revision":"f01525b48a520a7c60661b927759a644","url":"assets/js/37c08465.8aa214c1.js"},{"revision":"589c63b512ca5d54313e5fb6f35bf413","url":"assets/js/40c2c131.d34407e8.js"},{"revision":"02c8099f3af15c4cf131b06d53a4f0c4","url":"assets/js/5f249b7b.436057c3.js"},{"revision":"1fed0976f69b727db6374d820dea3a7e","url":"assets/js/699b3005.54f760b2.js"},{"revision":"df83d09d25e30587e1ec28af550d857f","url":"assets/js/73b2026e.77f2edc9.js"},{"revision":"ea2051ce8eeeaab99fd51831dd1adff0","url":"assets/js/75f7457c.52d99f5e.js"},{"revision":"a629058d52a1f7f54034e6588a1b41e2","url":"assets/js/830.926527dc.js"},{"revision":"c8a1479e52e977e3261c2e94e01336b5","url":"assets/js/87f26539.6bf4a8b8.js"},{"revision":"8110879a68ae289e51dfaa9f2f04344a","url":"assets/js/935f2afb.deaac8e4.js"},{"revision":"c9e97b0e01c8c986867a4aa352c69fab","url":"assets/js/972.ada57ab5.js"},{"revision":"4e445768fffc4e4ebfbc248e80a80081","url":"assets/js/a1d52cc4.a9989e97.js"},{"revision":"093b06b2815bbcea1a77362100afebc6","url":"assets/js/b9f64bd2.59978181.js"},{"revision":"47d720bd575b712d077034fa4654686c","url":"assets/js/c377a04b.4bc413b5.js"},{"revision":"94465c9dd26ec87da5bcd43f63e1c7a1","url":"assets/js/c391e309.74e2ceab.js"},{"revision":"a711e89d25b8cfb695d60e1e06f0c1a5","url":"assets/js/c4f5d8e4.96ba0eae.js"},{"revision":"686957c313dd3a847e5f88d935ee7736","url":"assets/js/cab5affc.e56f3a0a.js"},{"revision":"12c9baa99352fdc762bf979c82e7f0a5","url":"assets/js/e9d071a5.7ed0056a.js"},{"revision":"c5f69ad43272a9e9a1d8c4381a9602e7","url":"assets/js/main.f3901251.js"},{"revision":"eabdde99bf8856c3c086c9fdaf15011f","url":"assets/js/runtime~main.832e8739.js"},{"revision":"0f7dbbb40a91f83e6130bd2194855827","url":"console.html"},{"revision":"7c9ca358545a49a5e609ca19ad40ddc0","url":"console/my-clients.html"},{"revision":"f1a2d6b3bf16dbe4e540a99f9a518250","url":"console/my-investments.html"},{"revision":"c32c183aa0f3992937b94a81925265a6","url":"console/my-profile.html"},{"revision":"44706225263e9f58228592d003db9536","url":"console/my-referrals.html"},{"revision":"90b711d1d2053d244e4f857987590af4","url":"console/prospect.html"},{"revision":"e10356a4aee7d516b82f3713cf932371","url":"console/rik.html"},{"revision":"d279244e36c8b51154697e29b7740911","url":"contact.html"},{"revision":"e885d7333319d793a6586ad9b645dbf5","url":"docs.html"},{"revision":"00997604d561661300a4ca03fd40f98b","url":"index.html"},{"revision":"60093c3c469fc6f7af6640c7f262eb7f","url":"login.html"},{"revision":"61d1b373df1dfceb8da598785f006241","url":"lunatic-bots.html"},{"revision":"13757ceaf8519468fd246402c99863e2","url":"manifest.json"},{"revision":"6895943af2c1e4d47ac156c56fb55dea","url":"privacy-policy.html"},{"revision":"6ebd904e8a6d73e085015a73224e71e6","url":"terms-and-conditions.html"},{"revision":"a927d97f215dad40f512ca782f711e5b","url":"welcome.html"},{"revision":"7e5dfe3119706adcac771688be329d90","url":"img/favicon.ico"},{"revision":"e7d0b0a2f2363b0588d01e665fad8a9e","url":"img/icons/icons-192.png"},{"revision":"562932f1711336e04c4c1d72a6610c65","url":"img/icons/icons-512.png"},{"revision":"26d77e2667fbb16adc1d113fd1e8a847","url":"img/icons/icons-vector.svg"},{"revision":"8cdee6dbb1fe94f6e566c8676e333627","url":"img/logo-light.svg"},{"revision":"3dee51b7e2a1507f7c0ea2c148615023","url":"img/logo.svg"},{"revision":"240bb7bef65d772817b25527634891ef","url":"img/screenshots/screenshot-narrow-home.png"},{"revision":"e933c1b3f99b10efabcbf125a01752a2","url":"img/screenshots/screenshot-narrow-investmentPlans.png"},{"revision":"d759d5564a7ba60b661527c04128157a","url":"img/screenshots/screenshot-wide-home.png"},{"revision":"88ddb8fc239463a08b178199595d53b2","url":"img/screenshots/screenshot-wide-investmentPlans.png"},{"revision":"7fe3e4c884592969c7dabf70cbb990f1","url":"assets/fonts/lunaticCapital-9b8984d9b440e93a467951eb45535414.woff"}],a=new _({fallbackToNetwork:!0});e.offlineMode&&(a.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){{const t=await s.e(306).then(s.bind(s,306));"function"==typeof t.default?t.default(e):e.debug&&console.warn("[Docusaurus-PWA][SW]: swCustom should have a default export function")}}(e),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(a.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(a.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const s=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(s);for(const r of n){const i=a.getCacheKeyForURL(r);if(i){const a=caches.match(i);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:r,possibleURLs:n,cacheKey:i,cachedResponse:a}),t.respondWith(a);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();