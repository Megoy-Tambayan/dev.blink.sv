"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5818:(e,t,n)=>{n.d(t,{H:()=>o,a:()=>r});var a=n(7294);const l=(0,a.createContext)(),r=()=>(0,a.useContext)(l),o=e=>{let{children:t}=e;const[n,r]=(0,a.useState)(null),[o,i]=(0,a.useState)("https://api.blink.sv/graphql"),[s,c]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),d={authToken:n,setAuthToken:r,apiEndpoint:o,setApiEndpoint:i,accountWalletId:s,setAccountWalletId:c,paymentRequest:u,setPaymentRequest:p};return a.createElement(l.Provider,{value:d},t)}},5510:(e,t,n)=>{n.d(t,{_:()=>i});var a=n(7294),l=n(4029),r=n(5818),o=n(3917);function i(){const{authToken:e,apiEndpoint:t}=(0,r.a)(),[n,i]=(0,a.useState)(""),[s,c]=(0,a.useState)(null),[u,p]=(0,a.useState)(null),d="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,o.yL)({operation:d,type:"wallet",setCurlCommand:i,authToken:e,apiEndpoint:t,walletCurrency:"USD"})}),[e,t]),a.createElement("div",null,a.createElement("button",{onClick:async()=>{p(null),c(null);try{const n=await(0,l.K)(e,t,d);c(n),(0,o.yL)({operation:d,type:"wallet",setCurlCommand:i,authToken:e,apiEndpoint:t,walletCurrency:"USD"})}catch(n){p(n.message)}}},"Send the request"),a.createElement("div",{style:{marginTop:"10px"}}),u&&a.createElement("div",{style:{color:"red"}},"Error: ",u),s&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(s,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to get the USD wallet ID"),a.createElement("div",{style:{marginTop:"10px"}}),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},n)))}},8723:(e,t,n)=>{n.d(t,{k:()=>r});var a=n(7294),l=n(5818);function r(){const{apiEndpoint:e,setApiEndpoint:t}=(0,l.a)();return a.createElement("div",null,a.createElement("div",null,"The GraphQL endpoint to connect to:"),a.createElement("select",{type:"text",value:e,onChange:e=>{t(e.target.value)},style:{width:"50%",marginBottom:"10px"}},a.createElement("option",{value:"https://api.blink.sv/graphql"},"Blink (mainnet) - https://api.blink.sv/graphql"),a.createElement("option",{value:"https://api.staging.galoy.io/graphql"},"Staging (signet) - https://api.staging.galoy.io/graphql")))}},3828:(e,t,n)=>{n.d(t,{T:()=>r});var a=n(7294),l=n(5818);function r(){const{setAuthToken:e}=(0,l.a)();return a.createElement("div",null,a.createElement("div",null,"A valid authentication token is required in the header as a bearer token:"),a.createElement("input",{type:"text",placeholder:"Paste the authentication token to use it",onChange:t=>{e(t.target.value)},style:{width:"50%",marginBottom:"10px"}}))}},4029:(e,t,n)=>{n.d(t,{K:()=>a});const a=async function(e,t,n,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!n)throw new Error("No GraphQL query provided");try{const l=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${e}`},body:JSON.stringify({query:n,variables:a})});if(!l.ok){const e=await l.text();throw new Error(`Error response from server: ${e}`)}const r=l.headers.get("content-type");if(r&&r.includes("application/json")){return await l.json()}throw new Error(`Unexpected content type: ${r}`)}catch(l){throw console.error("There was an error making the authenticated request:",l),l}}},3917:(e,t,n)=>{n.d(t,{OP:()=>a,nM:()=>l,qF:()=>r,yL:()=>o});const a=(e,t)=>{const n={email:t};return`curl -X POST '${e}/email/code' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify(n)}'`},l=(e,t,n)=>{const a={query:"mutation login($input: UserLoginInput!) { userLogin(input: $input) { authToken } }",variables:{input:{phone:t,code:n}}};return`curl '${e}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data-binary '${JSON.stringify(a)}'`},r=(e,t,n)=>`curl -X POST '${`${e}/email/login`}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify({code:n,emailLoginId:t})}'`;function o(e){let{operation:t,type:n="",setCurlCommand:a,authToken:l,apiEndpoint:r,amount:o,paymentRequest:i="",walletId:s="",walletCurrency:c="",address:u}=e,p={query:t.trim(),variables:{}};const d=l?`--header 'Authorization: Bearer ${l}'`:"--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";"invoice"===n?p.variables.input={amount:o.toString(),walletId:s}:"feeProbe"===n||"lnInvoicePaymentSend"===n?p.variables.input={paymentRequest:i,walletId:s}:"onChainTxFee"===n?p.variables={walletId:s,address:u,amount:o}:"onChainSend"===n&&(p.variables.input={walletId:s,address:u,amount:o});let m=JSON.stringify(p).replace(/\n/g,"");a("wallet"===n?`curl -sS --request POST --header 'content-type: application/json' \\\n  ${d} \\\n  --url '${r}' \\\n  --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n| jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "${c}") .id'`:`curl --request POST --header 'content-type: application/json' \\\n  ${d} \\\n  --url '${r}' \\\n  --data '${m}'`)}},2834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>h,metadata:()=>g,toc:()=>f});var a=n(7462),l=n(7294),r=n(3905),o=n(5818),i=n(8723),s=n(3828),c=n(5510),u=n(4029),p=n(3917);function d(){const{authToken:e,apiEndpoint:t,accountWalletId:n,setAccountWalletId:a}=(0,o.a)(),[r,i]=(0,l.useState)(),[s,c]=(0,l.useState)(546),[d,m]=(0,l.useState)(""),[h,y]=(0,l.useState)(null),[g,v]=(0,l.useState)(null),f="query onChainTxFee($walletId: WalletId!, $address: OnChainAddress!, $amount: SatAmount!) {\n  onChainTxFee(walletId: $walletId, address: $address, amount: $amount) {\n    amount\n  }\n}";(0,l.useEffect)((()=>{(0,p.yL)({operation:f,type:"onChainTxFee",setCurlCommand:m,authToken:e,apiEndpoint:t,walletId:n,address:r,amount:s})}),[e,t,n,s,r]);return l.createElement("div",null,l.createElement("div",null,l.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),l.createElement("div",{style:{marginTop:"10px"}}),l.createElement("div",null,l.createElement("label",null,l.createElement("div",null,"Amount (sats):"),l.createElement("input",{type:"number",value:s,onChange:e=>{c(e.target.value)},style:{marginLeft:"10px",width:"50%"}}))),l.createElement("div",null,l.createElement("label",null,l.createElement("div",null,"Onchain address:"),l.createElement("input",{type:"text",value:r,onChange:e=>{i(e.target.value)},style:{marginLeft:"10px",width:"50%"}}))),l.createElement("label",null,l.createElement("div",null,"BTC wallet ID:"),l.createElement("input",{type:"text",value:n,onChange:e=>{a(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"}))),l.createElement("div",{style:{marginTop:"10px"}}),l.createElement("button",{onClick:async()=>{v(null),y(null);const a={walletId:n,address:r,amount:s};try{const l=await(0,u.K)(e,t,f,a);y(l),(0,p.yL)({operation:f,type:"onChainTxFee",setCurlCommand:m,authToken:e,apiEndpoint:t,walletId:n,address:r,amount:s})}catch(l){v(l.message)}}},"Estimate the transaction fee"),l.createElement("div",{style:{marginTop:"10px"}}),g&&l.createElement("div",{style:{color:"red"}},"Error: ",g),h&&l.createElement("div",null,l.createElement("strong",null,"Response:")," ",l.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(h,null,2))),l.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},l.createElement("div",{style:{fontWeight:"bold"}},"curl command to estimate the transaction fee"),l.createElement("div",{style:{marginTop:"10px"}}),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},d)))}function m(){const{authToken:e,apiEndpoint:t,accountWalletId:n,setAccountWalletId:a}=(0,o.a)(),[r,i]=(0,l.useState)(),[s,c]=(0,l.useState)(546),[d,m]=(0,l.useState)(""),[h,y]=(0,l.useState)(null),[g,v]=(0,l.useState)(null),f="mutation onChainPaymentSend($input: OnChainPaymentSendInput!) {\n  onChainPaymentSend(input: $input) {\n    errors {\n      message\n    }\n    status\n  }\n}";(0,l.useEffect)((()=>{(0,p.yL)({operation:f,type:"onChainSend",setCurlCommand:m,authToken:e,apiEndpoint:t,walletId:n,address:r,amount:s})}),[e,t,n,s,r]);return l.createElement("div",null,l.createElement("div",null,l.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),l.createElement("div",{style:{marginTop:"10px"}}),l.createElement("div",null,l.createElement("label",null,l.createElement("div",null,"Amount (sats):"),l.createElement("input",{type:"number",value:s,onChange:e=>{c(e.target.value)},style:{marginLeft:"10px",width:"50%"}}))),l.createElement("div",null,l.createElement("label",null,l.createElement("div",null,"Onchain address:"),l.createElement("input",{type:"text",value:r,onChange:e=>{i(e.target.value)},style:{marginLeft:"10px",width:"50%"}}))),l.createElement("label",null,l.createElement("div",null,"BTC wallet ID:"),l.createElement("input",{type:"text",value:n,onChange:e=>{a(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"}))),l.createElement("div",{style:{marginTop:"10px"}}),l.createElement("button",{onClick:async()=>{v(null),y(null);const a={input:{walletId:n,address:r,amount:s}};try{const l=await(0,u.K)(e,t,f,a);y(l),(0,p.yL)({operation:f,type:"onChainSend",setCurlCommand:m,authToken:e,apiEndpoint:t,walletId:n,address:r,amount:s})}catch(l){v(l.message)}}},"Send the transaction"),l.createElement("div",{style:{marginTop:"10px"}}),g&&l.createElement("div",{style:{color:"red"}},"Error: ",g),h&&l.createElement("div",null,l.createElement("strong",null,"Response:")," ",l.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(h,null,2))),l.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},l.createElement("div",{style:{fontWeight:"bold"}},"curl command to send the transaction"),l.createElement("div",{style:{marginTop:"10px"}}),l.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},d)))}const h={id:"btc-onchain-send",title:"Send BTC onchain",slug:"/api/legacy/btc-onchain-send"},y=void 0,g={unversionedId:"api/legacy/btc-onchain-send",id:"api/legacy/btc-onchain-send",title:"Send BTC onchain",description:"Get the wallet IDs and check the balances",source:"@site/docs/api/legacy/btc-onchain-send.mdx",sourceDirName:"api/legacy",slug:"/api/legacy/btc-onchain-send",permalink:"/api/legacy/btc-onchain-send",draft:!1,tags:[],version:"current",frontMatter:{id:"btc-onchain-send",title:"Send BTC onchain",slug:"/api/legacy/btc-onchain-send"}},v={},f=[{value:"Get the wallet IDs and check the balances",id:"get-the-wallet-ids-and-check-the-balances",level:3},{value:"Estimate",id:"estimate",level:3},{value:"Send a transaction",id:"send-a-transaction",level:3}],E={toc:f},b="wrapper";function w(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.H,{mdxType:"AuthProvider"},(0,r.kt)(i.k,{mdxType:"SetApiEndpoint"}),(0,r.kt)(s.T,{mdxType:"SetAuthToken"}),(0,r.kt)("h3",{id:"get-the-wallet-ids-and-check-the-balances"},"Get the wallet IDs and check the balances"),(0,r.kt)("p",null,"Can run this query at any stage to confirm the change in the balances.",(0,r.kt)("br",null),'\nThe "BTC" wallet balance is denominated in satoshis.',(0,r.kt)("br",null),'\nThe "USD" wallet balance is in cents.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The body of the GraphQL request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        id\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n")),(0,r.kt)(c._,{mdxType:"GetWalletDataUsd"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"estimate"},"Estimate"),(0,r.kt)("p",null,"Estimate how many satoshis the transaction will cost."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The body of the GraphQL request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query onChainTxFee($walletId: WalletId!, $address: OnChainAddress!, $amount: SatAmount!) {\n  onChainTxFee(walletId: $walletId, address: $address, amount: $amount) {\n    amount\n  }\n}\n")),(0,r.kt)(d,{mdxType:"OnChainTxFee"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"send-a-transaction"},"Send a transaction"),(0,r.kt)("p",null,"Send a transaction onchain from your BTC account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The body of the GraphQL request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation onChainUsdPaymentSend($input: OnChainUsdPaymentSendInput!) {\n  onChainUsdPaymentSend(input: $input) {\n    errors {\n      message\n    }\n    status\n  }\n}\n")),(0,r.kt)(m,{mdxType:"OnChainPaymentSend"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To test the GraphQL requests further use the GraphQL playground at ",(0,r.kt)("a",{parentName:"p",href:"https://api.blink.sv/graphql"},"api.blink.sv/graphql")," for mainnet or ",(0,r.kt)("a",{parentName:"p",href:"https://api.staging.galoy.io/graphql"},"api.staging.galoy.io/graphql")," for staging.",(0,r.kt)("br",null),"\nCheck out the ",(0,r.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#ac3751d8-c116-408b-9129-d6e365da590b"},"Galoy API Postman collection")," to find examples in multiple programming languages.")))}w.isMDXComponent=!0}}]);