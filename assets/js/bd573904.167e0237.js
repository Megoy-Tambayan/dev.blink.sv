"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[553],{9769:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>m,default:()=>f,frontMatter:()=>g,metadata:()=>x,toc:()=>j});var a=t(4848),r=t(5680),i=t(1276),s=t(2108),o=t(230),l=t(2685),c=t(6540),d=t(4325),p=t(2556);function h(){const{authToken:e,apiEndpoint:n,accountWalletId:t,setAccountWalletId:r}=(0,i.A)(),[s,o]=(0,c.useState)(""),[l,h]=(0,c.useState)(null),[u,g]=(0,c.useState)(null),m="mutation onChainAddressCreate($input: OnChainAddressCreateInput!) {\n  onChainAddressCreate(input: $input) {\n    address\n    errors {\n      message\n    }\n  }\n}";(0,c.useEffect)((()=>{(0,p.lc)({operation:m,setCurlCommand:o,authToken:e,apiEndpoint:n,walletId:t})}),[e,n,t]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{fontWeight:"bold"},children:"Set the USD wallet ID:"}),(0,a.jsx)("label",{children:(0,a.jsx)("input",{type:"text",value:t,onChange:e=>{r(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the USD wallet ID from the response above"})})]}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("button",{onClick:async()=>{g(null),h(null);const a={input:{walletId:t}};try{const r=await(0,d.t)(e,n,m,a);h(r),(0,p.lc)({operation:m,setCurlCommand:o,authToken:e,apiEndpoint:n,walletId:t})}catch(r){g(r.message)}},children:"Create a new address"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),u&&(0,a.jsxs)("div",{style:{color:"red"},children:["Error: ",u]}),l&&(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Response:"})," ",(0,a.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(l,null,2)})]}),(0,a.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,a.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to generate a new address"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:s})]})]})}var u=t(7146);const g={id:"usd-onchain-receive",title:"Receive USD onchain",slug:"/api/legacy/usd-onchain-receive"},m=void 0,x={id:"api/legacy/usd-onchain-receive",title:"Receive USD onchain",description:"Get the wallet IDs and check the balances",source:"@site/docs/api/legacy/usd-onchain-receive.mdx",sourceDirName:"api/legacy",slug:"/api/legacy/usd-onchain-receive",permalink:"/api/legacy/usd-onchain-receive",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"usd-onchain-receive",title:"Receive USD onchain",slug:"/api/legacy/usd-onchain-receive"}},y={},j=[{value:"Get the wallet IDs and check the balances",id:"get-the-wallet-ids-and-check-the-balances",level:3},{value:"Generate a new address to receive USD",id:"generate-a-new-address-to-receive-usd",level:3},{value:"Once paid check the balance again",id:"once-paid-check-the-balance-again",level:3}];function v(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.RP)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.O,{children:[(0,a.jsx)(s.a,{}),(0,a.jsx)(o.K,{}),(0,a.jsx)(n.h3,{id:"get-the-wallet-ids-and-check-the-balances",children:"Get the wallet IDs and check the balances"}),(0,a.jsxs)(n.p,{children:["Can run this query at any stage to confirm the change in the balances.",(0,a.jsx)("br",{}),'\nThe "BTC" wallet balance is denominated in satoshis.',(0,a.jsx)("br",{}),'\nThe "USD" wallet balance is in cents.']}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        id\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n"})}),(0,a.jsx)(l.S,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"generate-a-new-address-to-receive-usd",children:"Generate a new address to receive USD"}),(0,a.jsxs)(n.p,{children:["Using Stablesats a merchant can generate and onchain address where the bitcoin received will be denominated in USD cents. ",(0,a.jsx)("br",{}),"\nUse the ",(0,a.jsx)(n.code,{children:"address"})," from the response and send to it from any bitcoin wallet.",(0,a.jsx)("br",{}),"\nThe received satoshi amount will reflect the USD/BTC exchange rate at the time it was received and the balance will be kept at the dollar value."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation onChainAddressCreate($input: OnChainAddressCreateInput!) {\n  onChainAddressCreate(input: $input) {\n    address\n    errors {\n      message\n    }\n  }\n}\n"})}),(0,a.jsx)(h,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"once-paid-check-the-balance-again",children:"Once paid check the balance again"}),(0,a.jsxs)(n.p,{children:["The balance will be updated once the transaction is confirmed on the blockchain.",(0,a.jsx)("br",{}),"\nUntil the confirmation the new incoming amount will show in the ",(0,a.jsx)(n.code,{children:"pendingIncomingBalance"})," field."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        walletCurrency\n        balance\n        pendingIncomingBalance\n      }\n    }\n  }\n}\n"})}),(0,a.jsx)(u.c,{})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["To test the GraphQL requests further use the GraphQL playground at ",(0,a.jsx)(n.a,{href:"https://api.blink.sv/graphql",children:"api.blink.sv/graphql"})," for mainnet or ",(0,a.jsx)(n.a,{href:"https://api.staging.galoy.io/graphql",children:"api.staging.galoy.io/graphql"})," for staging.",(0,a.jsx)("br",{}),"\nCheck out the ",(0,a.jsx)(n.a,{href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#ed78e464-9874-4bf7-9b7b-92e5a898db83",children:"Galoy API Postman collection"})," to find examples in multiple programming languages."]})})]})}function f(e={}){const{wrapper:n}={...(0,r.RP)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},5680:(e,n,t)=>{t.d(n,{RP:()=>c});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(t),u=r,g=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return t?a.createElement(g,s(s({ref:n},p),{},{components:t})):a.createElement(g,s({ref:n},p))}));p.displayName="MDXCreateElement"},1276:(e,n,t)=>{t.d(n,{A:()=>s,O:()=>o});var a=t(6540),r=t(4848);const i=(0,a.createContext)(),s=()=>(0,a.useContext)(i),o=e=>{let{children:n}=e;const[t,s]=(0,a.useState)(null),[o,l]=(0,a.useState)("https://api.blink.sv/graphql"),[c,d]=(0,a.useState)(""),[p,h]=(0,a.useState)(""),u={authToken:t,setAuthToken:s,apiEndpoint:o,setApiEndpoint:l,accountWalletId:c,setAccountWalletId:d,paymentRequest:p,setPaymentRequest:h};return(0,r.jsx)(i.Provider,{value:u,children:n})}},7146:(e,n,t)=>{t.d(n,{c:()=>l});var a=t(6540),r=t(4325),i=t(1276),s=t(2556),o=t(4848);function l(){const{authToken:e,apiEndpoint:n}=(0,i.A)(),[t,l]=(0,a.useState)(""),[c,d]=(0,a.useState)(null),[p,h]=(0,a.useState)(null),u="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          walletCurrency\n          balance\n          pendingIncomingBalance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,s.lc)({operation:u,setCurlCommand:l,authToken:e,apiEndpoint:n})}),[e,n]),(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{onClick:async()=>{h(null),d(null);try{const t=await(0,r.t)(e,n,u);d(t),(0,s.lc)({operation:u,setCurlCommand:l,authToken:e,apiEndpoint:n})}catch(t){h(t.message)}},children:"Send the request"}),(0,o.jsx)("div",{style:{marginTop:"10px"}}),p&&(0,o.jsxs)("div",{style:{color:"red"},children:["Error: ",p]}),c&&(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Response:"})," ",(0,o.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(c,null,2)})]}),(0,o.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,o.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to check the balance of your wallets"}),(0,o.jsx)("div",{style:{marginTop:"10px"}}),(0,o.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:t})]})]})}},2685:(e,n,t)=>{t.d(n,{S:()=>l});var a=t(6540),r=t(4325),i=t(1276),s=t(2556),o=t(4848);function l(){const{authToken:e,apiEndpoint:n}=(0,i.A)(),[t,l]=(0,a.useState)(""),[c,d]=(0,a.useState)(null),[p,h]=(0,a.useState)(null),u="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,s.lc)({operation:u,type:"wallet",setCurlCommand:l,authToken:e,apiEndpoint:n,walletCurrency:"USD"})}),[e,n]),(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{onClick:async()=>{h(null),d(null);try{const t=await(0,r.t)(e,n,u);d(t),(0,s.lc)({operation:u,type:"wallet",setCurlCommand:l,authToken:e,apiEndpoint:n,walletCurrency:"USD"})}catch(t){h(t.message)}},children:"Send the request"}),(0,o.jsx)("div",{style:{marginTop:"10px"}}),p&&(0,o.jsxs)("div",{style:{color:"red"},children:["Error: ",p]}),c&&(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Response:"})," ",(0,o.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(c,null,2)})]}),(0,o.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,o.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to get the USD wallet ID"}),(0,o.jsx)("div",{style:{marginTop:"10px"}}),(0,o.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:t})]})]})}},2108:(e,n,t)=>{t.d(n,{a:()=>i});t(6540);var a=t(1276),r=t(4848);function i(){const{apiEndpoint:e,setApiEndpoint:n}=(0,a.A)();return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:"The GraphQL endpoint to connect to:"}),(0,r.jsxs)("select",{type:"text",value:e,onChange:e=>{n(e.target.value)},style:{width:"50%",marginBottom:"10px"},children:[(0,r.jsx)("option",{value:"https://api.blink.sv/graphql",children:"Blink (mainnet) - https://api.blink.sv/graphql"}),(0,r.jsx)("option",{value:"https://api.staging.galoy.io/graphql",children:"Staging (signet) - https://api.staging.galoy.io/graphql"})]})]})}},230:(e,n,t)=>{t.d(n,{K:()=>i});t(6540);var a=t(1276),r=t(4848);function i(){const{setAuthToken:e}=(0,a.A)();return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:"A valid authentication token is required in the header as a bearer token:"}),(0,r.jsx)("input",{type:"text",placeholder:"Paste the authentication token to use it",onChange:n=>{e(n.target.value)},style:{width:"50%",marginBottom:"10px"}})]})}},4325:(e,n,t)=>{t.d(n,{t:()=>a});const a=async function(e,n,t,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!t)throw new Error("No GraphQL query provided");try{const r=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${e}`},body:JSON.stringify({query:t,variables:a})});if(!r.ok){const e=await r.text();throw new Error(`Error response from server: ${e}`)}const i=r.headers.get("content-type");if(i&&i.includes("application/json")){return await r.json()}throw new Error(`Unexpected content type: ${i}`)}catch(r){throw console.error("There was an error making the authenticated request:",r),r}}},2556:(e,n,t)=>{t.d(n,{Wg:()=>r,ZD:()=>a,cp:()=>i,lc:()=>s});const a=(e,n)=>{const t={email:n};return`curl -X POST '${e}/email/code' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify(t)}'`},r=(e,n,t)=>{const a={query:"mutation login($input: UserLoginInput!) { userLogin(input: $input) { authToken } }",variables:{input:{phone:n,code:t}}};return`curl '${e}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data-binary '${JSON.stringify(a)}'`},i=(e,n,t)=>`curl -X POST '${`${e}/email/login`}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify({code:t,emailLoginId:n})}'`;function s(e){let{operation:n,type:t="",setCurlCommand:a,authToken:r,apiEndpoint:i,amount:s,paymentRequest:o="",walletId:l="",walletCurrency:c="",address:d}=e,p={query:n.trim(),variables:{}};const h=r?`--header 'Authorization: Bearer ${r}'`:"--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";"invoice"===t?p.variables.input={amount:s.toString(),walletId:l}:"feeProbe"===t||"lnInvoicePaymentSend"===t?p.variables.input={paymentRequest:o,walletId:l}:"onChainTxFee"===t?p.variables={walletId:l,address:d,amount:s}:"onChainSend"===t&&(p.variables.input={walletId:l,address:d,amount:s});let u=JSON.stringify(p).replace(/\n/g,"");a("wallet"===t?`curl -sS --request POST --header 'content-type: application/json' \\\n  ${h} \\\n  --url '${i}' \\\n  --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n| jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "${c}") .id'`:`curl --request POST --header 'content-type: application/json' \\\n  ${h} \\\n  --url '${i}' \\\n  --data '${u}'`)}}}]);