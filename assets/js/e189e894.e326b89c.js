"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[184],{6709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>m,default:()=>f,frontMatter:()=>x,metadata:()=>g,toc:()=>j});var a=t(4848),s=t(8453),i=t(1276),r=t(2108),l=t(230),o=t(2685),d=t(6540),c=t(4325),h=t(2556);function p(){const{authToken:e,apiEndpoint:n,accountWalletId:t,setAccountWalletId:s}=(0,i.A)(),[r,l]=(0,d.useState)(),[o,p]=(0,d.useState)(546),[u,x]=(0,d.useState)(""),[m,g]=(0,d.useState)(null),[y,j]=(0,d.useState)(null),v="query onChainTxFee($walletId: WalletId!, $address: OnChainAddress!, $amount: SatAmount!) {\n  onChainTxFee(walletId: $walletId, address: $address, amount: $amount) {\n    amount\n  }\n}";(0,d.useEffect)((()=>{(0,h.lc)({operation:v,type:"onChainTxFee",setCurlCommand:x,authToken:e,apiEndpoint:n,walletId:t,address:r,amount:o})}),[e,n,t,o,r]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{fontWeight:"bold"},children:"Set the variables"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"Amount (sats):"}),(0,a.jsx)("input",{type:"number",value:o,onChange:e=>{p(e.target.value)},style:{marginLeft:"10px",width:"50%"}})]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"Onchain address:"}),(0,a.jsx)("input",{type:"text",value:r,onChange:e=>{l(e.target.value)},style:{marginLeft:"10px",width:"50%"}})]})}),(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"BTC wallet ID:"}),(0,a.jsx)("input",{type:"text",value:t,onChange:e=>{s(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"})]})]}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("button",{onClick:async()=>{j(null),g(null);const a={walletId:t,address:r,amount:o};try{const s=await(0,c.t)(e,n,v,a);g(s),(0,h.lc)({operation:v,type:"onChainTxFee",setCurlCommand:x,authToken:e,apiEndpoint:n,walletId:t,address:r,amount:o})}catch(s){j(s.message)}},children:"Estimate the transaction fee"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),y&&(0,a.jsxs)("div",{style:{color:"red"},children:["Error: ",y]}),m&&(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Response:"})," ",(0,a.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(m,null,2)})]}),(0,a.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,a.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to estimate the transaction fee"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:u})]})]})}function u(){const{authToken:e,apiEndpoint:n,accountWalletId:t,setAccountWalletId:s}=(0,i.A)(),[r,l]=(0,d.useState)(),[o,p]=(0,d.useState)(546),[u,x]=(0,d.useState)(""),[m,g]=(0,d.useState)(null),[y,j]=(0,d.useState)(null),v="mutation onChainPaymentSend($input: OnChainPaymentSendInput!) {\n  onChainPaymentSend(input: $input) {\n    errors {\n      message\n    }\n    status\n  }\n}";(0,d.useEffect)((()=>{(0,h.lc)({operation:v,type:"onChainSend",setCurlCommand:x,authToken:e,apiEndpoint:n,walletId:t,address:r,amount:o})}),[e,n,t,o,r]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{fontWeight:"bold"},children:"Set the variables"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"Amount (sats):"}),(0,a.jsx)("input",{type:"number",value:o,onChange:e=>{p(e.target.value)},style:{marginLeft:"10px",width:"50%"}})]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"Onchain address:"}),(0,a.jsx)("input",{type:"text",value:r,onChange:e=>{l(e.target.value)},style:{marginLeft:"10px",width:"50%"}})]})}),(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"BTC wallet ID:"}),(0,a.jsx)("input",{type:"text",value:t,onChange:e=>{s(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"})]})]}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("button",{onClick:async()=>{j(null),g(null);const a={input:{walletId:t,address:r,amount:o}};try{const s=await(0,c.t)(e,n,v,a);g(s),(0,h.lc)({operation:v,type:"onChainSend",setCurlCommand:x,authToken:e,apiEndpoint:n,walletId:t,address:r,amount:o})}catch(s){j(s.message)}},children:"Send the transaction"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),y&&(0,a.jsxs)("div",{style:{color:"red"},children:["Error: ",y]}),m&&(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Response:"})," ",(0,a.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(m,null,2)})]}),(0,a.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,a.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to send the transaction"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:u})]})]})}const x={id:"btc-onchain-send",title:"Send BTC onchain",slug:"/api/legacy/btc-onchain-send"},m=void 0,g={id:"api/legacy/btc-onchain-send",title:"Send BTC onchain",description:"Get the wallet IDs and check the balances",source:"@site/docs/api/legacy/btc-onchain-send.mdx",sourceDirName:"api/legacy",slug:"/api/legacy/btc-onchain-send",permalink:"/api/legacy/btc-onchain-send",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"btc-onchain-send",title:"Send BTC onchain",slug:"/api/legacy/btc-onchain-send"}},y={},j=[{value:"Get the wallet IDs and check the balances",id:"get-the-wallet-ids-and-check-the-balances",level:3},{value:"Estimate",id:"estimate",level:3},{value:"Send a transaction",id:"send-a-transaction",level:3}];function v(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.O,{children:[(0,a.jsx)(r.a,{}),(0,a.jsx)(l.K,{}),(0,a.jsx)(n.h3,{id:"get-the-wallet-ids-and-check-the-balances",children:"Get the wallet IDs and check the balances"}),(0,a.jsxs)(n.p,{children:["Can run this query at any stage to confirm the change in the balances.",(0,a.jsx)("br",{}),'\nThe "BTC" wallet balance is denominated in satoshis.',(0,a.jsx)("br",{}),'\nThe "USD" wallet balance is in cents.']}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        id\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n"})}),(0,a.jsx)(o.S,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"estimate",children:"Estimate"}),(0,a.jsx)(n.p,{children:"Estimate how many satoshis the transaction will cost."}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query onChainTxFee($walletId: WalletId!, $address: OnChainAddress!, $amount: SatAmount!) {\n  onChainTxFee(walletId: $walletId, address: $address, amount: $amount) {\n    amount\n  }\n}\n"})}),(0,a.jsx)(p,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"send-a-transaction",children:"Send a transaction"}),(0,a.jsx)(n.p,{children:"Send a transaction onchain from your BTC account."}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation onChainUsdPaymentSend($input: OnChainUsdPaymentSendInput!) {\n  onChainUsdPaymentSend(input: $input) {\n    errors {\n      message\n    }\n    status\n  }\n}\n"})}),(0,a.jsx)(u,{})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["To test the GraphQL requests further use the GraphQL playground at ",(0,a.jsx)(n.a,{href:"https://api.blink.sv/graphql",children:"api.blink.sv/graphql"})," for mainnet or ",(0,a.jsx)(n.a,{href:"https://api.staging.galoy.io/graphql",children:"api.staging.galoy.io/graphql"})," for staging.",(0,a.jsx)("br",{}),"\nCheck out the ",(0,a.jsx)(n.a,{href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#ac3751d8-c116-408b-9129-d6e365da590b",children:"Galoy API Postman collection"})," to find examples in multiple programming languages."]})})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},1276:(e,n,t)=>{t.d(n,{A:()=>r,O:()=>l});var a=t(6540),s=t(4848);const i=(0,a.createContext)(),r=()=>(0,a.useContext)(i),l=e=>{let{children:n}=e;const[t,r]=(0,a.useState)(null),[l,o]=(0,a.useState)("https://api.blink.sv/graphql"),[d,c]=(0,a.useState)(""),[h,p]=(0,a.useState)(""),u={authToken:t,setAuthToken:r,apiEndpoint:l,setApiEndpoint:o,accountWalletId:d,setAccountWalletId:c,paymentRequest:h,setPaymentRequest:p};return(0,s.jsx)(i.Provider,{value:u,children:n})}},2685:(e,n,t)=>{t.d(n,{S:()=>o});var a=t(6540),s=t(4325),i=t(1276),r=t(2556),l=t(4848);function o(){const{authToken:e,apiEndpoint:n}=(0,i.A)(),[t,o]=(0,a.useState)(""),[d,c]=(0,a.useState)(null),[h,p]=(0,a.useState)(null),u="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,r.lc)({operation:u,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:n,walletCurrency:"USD"})}),[e,n]),(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{onClick:async()=>{p(null),c(null);try{const t=await(0,s.t)(e,n,u);c(t),(0,r.lc)({operation:u,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:n,walletCurrency:"USD"})}catch(t){p(t.message)}},children:"Send the request"}),(0,l.jsx)("div",{style:{marginTop:"10px"}}),h&&(0,l.jsxs)("div",{style:{color:"red"},children:["Error: ",h]}),d&&(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Response:"})," ",(0,l.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(d,null,2)})]}),(0,l.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,l.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to get the USD wallet ID"}),(0,l.jsx)("div",{style:{marginTop:"10px"}}),(0,l.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:t})]})]})}},2108:(e,n,t)=>{t.d(n,{a:()=>i});t(6540);var a=t(1276),s=t(4848);function i(){const{apiEndpoint:e,setApiEndpoint:n}=(0,a.A)();return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:"The GraphQL endpoint to connect to:"}),(0,s.jsxs)("select",{type:"text",value:e,onChange:e=>{n(e.target.value)},style:{width:"50%",marginBottom:"10px"},children:[(0,s.jsx)("option",{value:"https://api.blink.sv/graphql",children:"Blink (mainnet) - https://api.blink.sv/graphql"}),(0,s.jsx)("option",{value:"https://api.staging.galoy.io/graphql",children:"Staging (signet) - https://api.staging.galoy.io/graphql"})]})]})}},230:(e,n,t)=>{t.d(n,{K:()=>i});t(6540);var a=t(1276),s=t(4848);function i(){const{setAuthToken:e}=(0,a.A)();return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:"A valid authentication token is required in the header as a bearer token:"}),(0,s.jsx)("input",{type:"text",placeholder:"Paste the authentication token to use it",onChange:n=>{e(n.target.value)},style:{width:"50%",marginBottom:"10px"}})]})}},4325:(e,n,t)=>{t.d(n,{t:()=>a});const a=async function(e,n,t,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!t)throw new Error("No GraphQL query provided");try{const s=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${e}`},body:JSON.stringify({query:t,variables:a})});if(!s.ok){const e=await s.text();throw new Error(`Error response from server: ${e}`)}const i=s.headers.get("content-type");if(i&&i.includes("application/json")){return await s.json()}throw new Error(`Unexpected content type: ${i}`)}catch(s){throw console.error("There was an error making the authenticated request:",s),s}}},2556:(e,n,t)=>{t.d(n,{Wg:()=>s,ZD:()=>a,cp:()=>i,lc:()=>r});const a=(e,n)=>{const t={email:n};return`curl -X POST '${e}/email/code' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify(t)}'`},s=(e,n,t)=>{const a={query:"mutation login($input: UserLoginInput!) { userLogin(input: $input) { authToken } }",variables:{input:{phone:n,code:t}}};return`curl '${e}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data-binary '${JSON.stringify(a)}'`},i=(e,n,t)=>`curl -X POST '${`${e}/email/login`}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify({code:t,emailLoginId:n})}'`;function r(e){let{operation:n,type:t="",setCurlCommand:a,authToken:s,apiEndpoint:i,amount:r,paymentRequest:l="",walletId:o="",walletCurrency:d="",address:c}=e,h={query:n.trim(),variables:{}};const p=s?`--header 'Authorization: Bearer ${s}'`:"--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";"invoice"===t?h.variables.input={amount:r.toString(),walletId:o}:"feeProbe"===t||"lnInvoicePaymentSend"===t?h.variables.input={paymentRequest:l,walletId:o}:"onChainTxFee"===t?h.variables={walletId:o,address:c,amount:r}:"onChainSend"===t&&(h.variables.input={walletId:o,address:c,amount:r});let u=JSON.stringify(h).replace(/\n/g,"");a("wallet"===t?`curl -sS --request POST --header 'content-type: application/json' \\\n  ${p} \\\n  --url '${i}' \\\n  --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n| jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "${d}") .id'`:`curl --request POST --header 'content-type: application/json' \\\n  ${p} \\\n  --url '${i}' \\\n  --data '${u}'`)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(6540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);