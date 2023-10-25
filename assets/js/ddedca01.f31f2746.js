"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[71],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4746:(e,t,n)=>{n.d(t,{H:()=>i,a:()=>l});var a=n(7294);const r=(0,a.createContext)(),l=()=>(0,a.useContext)(r),i=e=>{let{children:t}=e;const[n,l]=(0,a.useState)(null),[i,o]=(0,a.useState)("https://api.blink.sv/graphql"),[c,p]=(0,a.useState)(""),[s,u]=(0,a.useState)(""),d={authToken:n,setAuthToken:l,apiEndpoint:i,setApiEndpoint:o,accountWalletId:c,setAccountWalletId:p,paymentRequest:s,setPaymentRequest:u};return a.createElement(r.Provider,{value:d},t)}},9549:(e,t,n)=>{n.d(t,{c:()=>o});var a=n(7294),r=n(7900),l=n(4746),i=n(2620);function o(){const{authToken:e,apiEndpoint:t}=(0,l.a)(),[n,o]=(0,a.useState)(""),[c,p]=(0,a.useState)(null),[s,u]=(0,a.useState)(null),d="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,i.yL)({operation:d,setCurlCommand:o,authToken:e,apiEndpoint:t})}),[e,t]),a.createElement("div",null,a.createElement("button",{onClick:async()=>{u(null),p(null);try{const n=await(0,r.K)(e,t,d);p(n),(0,i.yL)({operation:d,setCurlCommand:o,authToken:e,apiEndpoint:t})}catch(n){u(n.message)}}},"Send the request"),a.createElement("div",{style:{marginTop:"10px"}}),s&&a.createElement("div",{style:{color:"red"}},"Error: ",s),c&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(c,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to check the balance of your wallets"),a.createElement("div",{style:{marginTop:"10px"}}),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},n)))}},4495:(e,t,n)=>{n.d(t,{k:()=>o});var a=n(7294),r=n(7900),l=n(4746),i=n(2620);function o(){const{authToken:e,apiEndpoint:t}=(0,l.a)(),[n,o]=(0,a.useState)(""),[c,p]=(0,a.useState)(null),[s,u]=(0,a.useState)(null),d="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,i.yL)({operation:d,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:t,walletCurrency:"BTC"})}),[e,t]),a.createElement("div",null,a.createElement("button",{onClick:async()=>{u(null),p(null);try{const n=await(0,r.K)(e,t,d);p(n),(0,i.yL)({operation:d,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:t,walletCurrency:"BTC"})}catch(n){u(n.message)}}},"Send the request"),a.createElement("div",{style:{marginTop:"10px"}}),s&&a.createElement("div",{style:{color:"red"}},"Error: ",s),c&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(c,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to get the BTC wallet ID"),a.createElement("div",{style:{marginTop:"10px"}}),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},n)))}},8608:(e,t,n)=>{n.d(t,{M:()=>o});var a=n(7294),r=n(7900),l=n(4746),i=n(2620);function o(){const{authToken:e,apiEndpoint:t,accountWalletId:n,setAccountWalletId:o}=(0,l.a)(),[c,p]=(0,a.useState)(21),[s,u]=(0,a.useState)(""),[d,m]=(0,a.useState)(null),[h,g]=(0,a.useState)(null),y="mutation LnInvoiceCreate($input: LnInvoiceCreateInput!) {\n  lnInvoiceCreate(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}";(0,a.useEffect)((()=>{(0,i.yL)({operation:y,type:"invoice",setCurlCommand:u,authToken:e,apiEndpoint:t,amount:c,walletId:n})}),[e,t,c,n]);return a.createElement("div",null,a.createElement("div",null,a.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),a.createElement("div",{style:{marginTop:"10px"}}),a.createElement("div",null,a.createElement("label",null,a.createElement("div",null,"Amount (sats):"),a.createElement("input",{type:"number",value:c,onChange:e=>{p(e.target.value)},style:{marginLeft:"10px",width:"50%"}}))),a.createElement("label",null,a.createElement("div",null,"BTC wallet ID:"),a.createElement("input",{type:"text",value:n,onChange:e=>{o(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"}))),a.createElement("div",{style:{marginTop:"10px"}}),a.createElement("button",{onClick:async()=>{g(null),m(null);const a={input:{amount:c.toString(),walletId:n}};try{const l=await(0,r.K)(e,t,y,a);m(l),(0,i.yL)({operation:y,type:"invoice",setCurlCommand:u,authToken:e,apiEndpoint:t,amount:c,walletId:n})}catch(l){g(l.message)}}},"Create invoice"),a.createElement("div",{style:{marginTop:"10px"}}),h&&a.createElement("div",{style:{color:"red"}},"Error: ",h),d&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(d,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to generate an invoice"),a.createElement("div",{style:{marginTop:"10px"}}),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},s)))}},2698:(e,t,n)=>{n.d(t,{k:()=>l});var a=n(7294),r=n(4746);function l(){const{apiEndpoint:e,setApiEndpoint:t}=(0,r.a)();return a.createElement("div",null,a.createElement("div",null,"The GraphQL endpoint to connect to:"),a.createElement("select",{type:"text",value:e,onChange:e=>{t(e.target.value)},style:{width:"50%",marginBottom:"10px"}},a.createElement("option",{value:"https://api.blink.sv/graphql"},"Blink (mainnet) - https://api.blink.sv/graphql"),a.createElement("option",{value:"https://api.staging.galoy.io/graphql"},"Staging (signet) - https://api.staging.galoy.io/graphql")))}},65:(e,t,n)=>{n.d(t,{T:()=>l});var a=n(7294),r=n(4746);function l(){const{setAuthToken:e}=(0,r.a)();return a.createElement("div",null,a.createElement("div",null,"A valid authentication token is required in the header as a bearer token:"),a.createElement("input",{type:"text",placeholder:"Paste the authentication token to use it",onChange:t=>{e(t.target.value)},style:{width:"50%",marginBottom:"10px"}}))}},7900:(e,t,n)=>{n.d(t,{K:()=>a});const a=async function(e,t,n,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!n)throw new Error("No GraphQL query provided");try{const r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${e}`},body:JSON.stringify({query:n,variables:a})});if(!r.ok){const e=await r.text();throw new Error(`Error response from server: ${e}`)}const l=r.headers.get("content-type");if(l&&l.includes("application/json")){return await r.json()}throw new Error(`Unexpected content type: ${l}`)}catch(r){throw console.error("There was an error making the authenticated request:",r),r}}},2620:(e,t,n)=>{n.d(t,{OP:()=>a,qF:()=>r,yL:()=>l});const a=(e,t)=>{const n={email:t};return`curl -X POST '${e}/email/code' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify(n)}'`},r=(e,t,n)=>`curl -X POST '${`${e}/email/login`}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify({code:n,emailLoginId:t})}'`;function l(e){let{operation:t,type:n="",setCurlCommand:a,authToken:r,apiEndpoint:l,amount:i,paymentRequest:o="",walletId:c="",walletCurrency:p="",address:s}=e,u={query:t.trim(),variables:{}};const d=r?`--header 'Authorization: Bearer ${r}'`:"--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";"invoice"===n?u.variables.input={amount:i.toString(),walletId:c}:"feeProbe"===n||"lnInvoicePaymentSend"===n?u.variables.input={paymentRequest:o,walletId:c}:"onChainTxFee"===n?u.variables={walletId:c,address:s,amount:i}:"onChainSend"===n&&(u.variables.input={walletId:c,address:s,amount:i});let m=JSON.stringify(u).replace(/\n/g,"");a("wallet"===n?`curl -sS --request POST --header 'content-type: application/json' \\\n  ${d} \\\n  --url '${l}' \\\n  --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n| jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "${p}") .id'`:`curl --request POST --header 'content-type: application/json' \\\n  ${d} \\\n  --url '${l}' \\\n  --data '${m}'`)}},8947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var a=n(7462),r=(n(7294),n(3905)),l=n(4746),i=n(2698),o=n(65),c=n(4495),p=n(8608),s=n(9549);const u={id:"btc-ln-receive",title:"Receive BTC on Lightning",slug:"/api/btc-ln-receive"},d=void 0,m={unversionedId:"api/btc-ln-receive",id:"api/btc-ln-receive",title:"Receive BTC on Lightning",description:"Get the wallet IDs and check the balances",source:"@site/docs/api/btc-ln-receive.mdx",sourceDirName:"api",slug:"/api/btc-ln-receive",permalink:"/api/btc-ln-receive",draft:!1,tags:[],version:"current",frontMatter:{id:"btc-ln-receive",title:"Receive BTC on Lightning",slug:"/api/btc-ln-receive"},sidebar:"apiSidebar",previous:{title:"Get an authentication token",permalink:"/api/auth"},next:{title:"Send BTC over Lightning",permalink:"/api/btc-ln-send"}},h={},g=[{value:"Get the wallet IDs and check the balances",id:"get-the-wallet-ids-and-check-the-balances",level:3},{value:"Generate a lightning invoice",id:"generate-a-lightning-invoice",level:3},{value:"Once paid check the balance again",id:"once-paid-check-the-balance-again",level:3}],y={toc:g},v="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(v,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.H,{mdxType:"AuthProvider"},(0,r.kt)(i.k,{mdxType:"SetApiEndpoint"}),(0,r.kt)(o.T,{mdxType:"SetAuthToken"}),(0,r.kt)("h3",{id:"get-the-wallet-ids-and-check-the-balances"},"Get the wallet IDs and check the balances"),(0,r.kt)("p",null,"Can run this query at any stage to confirm the change in the balances.",(0,r.kt)("br",null),'\nThe "BTC" wallet balance is denominated in satoshis.',(0,r.kt)("br",null),'\nThe "USD" wallet balance is in cents.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The body of the GraphQL request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        id\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n")),(0,r.kt)(c.k,{mdxType:"GetWalletDataBtc"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"generate-a-lightning-invoice"},"Generate a lightning invoice"),(0,r.kt)("p",null,"Receive satoshis to your BTC balance.",(0,r.kt)("br",null),"\nUse the ",(0,r.kt)("inlineCode",{parentName:"p"},"paymentRequest")," from the response and pay it with a lightning wallet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The body of the GraphQL request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation LnInvoiceCreate($input: LnInvoiceCreateInput!) {\n  lnInvoiceCreate(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}\n")),(0,r.kt)(p.M,{mdxType:"LnInvoiceCreate"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"once-paid-check-the-balance-again"},"Once paid check the balance again"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The body of the GraphQL request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n")),(0,r.kt)(s.c,{mdxType:"GetBalance"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To test the GraphQL requests further use the GraphQL playground at ",(0,r.kt)("a",{parentName:"p",href:"https://api.blink.sv/graphql"},"api.blink.sv/graphql")," for mainnet or ",(0,r.kt)("a",{parentName:"p",href:"https://api.staging.galoy.io/graphql"},"api.staging.galoy.io/graphql")," for staging.\nCan also use the ",(0,r.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#ac3751d8-c116-408b-9129-d6e365da590b"},"Galoy API Postman collection")," to find examples in multiple programming languages.")))}f.isMDXComponent=!0}}]);