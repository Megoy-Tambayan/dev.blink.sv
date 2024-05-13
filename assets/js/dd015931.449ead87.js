"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[508],{4820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>x,default:()=>f,frontMatter:()=>g,metadata:()=>m,toc:()=>y});var a=t(4848),i=t(8453),r=t(1276),l=t(2108),s=t(230),o=t(8415),c=t(6540),d=t(4325),p=t(2556);function h(){const{authToken:e,apiEndpoint:n,accountWalletId:t,setAccountWalletId:i}=(0,r.A)(),[l,s]=(0,c.useState)(21),[o,h]=(0,c.useState)(""),[u,g]=(0,c.useState)(null),[x,m]=(0,c.useState)(null),v="mutation LnInvoiceCreate($input: LnInvoiceCreateInput!) {\n  lnInvoiceCreate(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}";(0,c.useEffect)((()=>{(0,p.lc)({operation:v,type:"invoice",setCurlCommand:h,authToken:e,apiEndpoint:n,amount:l,walletId:t})}),[e,n,l,t]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{fontWeight:"bold"},children:"Set the variables"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"Amount (sats):"}),(0,a.jsx)("input",{type:"number",value:l,onChange:e=>{s(e.target.value)},style:{marginLeft:"10px",width:"50%"}})]})}),(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"BTC wallet ID:"}),(0,a.jsx)("input",{type:"text",value:t,onChange:e=>{i(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"})]})]}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("button",{onClick:async()=>{m(null),g(null);const a={input:{amount:l.toString(),walletId:t}};try{const i=await(0,d.t)(e,n,v,a);g(i),(0,p.lc)({operation:v,type:"invoice",setCurlCommand:h,authToken:e,apiEndpoint:n,amount:l,walletId:t})}catch(i){m(i.message)}},children:"Create invoice"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),x&&(0,a.jsxs)("div",{style:{color:"red"},children:["Error: ",x]}),u&&(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Response:"})," ",(0,a.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(u,null,2)})]}),(0,a.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,a.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to generate an invoice"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:o})]})]})}var u=t(5195);const g={id:"btc-ln-receive",title:"Receive BTC on Lightning",slug:"/api/legacy/btc-ln-receive"},x=void 0,m={id:"api/legacy/btc-ln-receive",title:"Receive BTC on Lightning",description:"Get the wallet IDs and check the balances",source:"@site/docs/api/legacy/btc-ln-receive.mdx",sourceDirName:"api/legacy",slug:"/api/legacy/btc-ln-receive",permalink:"/api/legacy/btc-ln-receive",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"btc-ln-receive",title:"Receive BTC on Lightning",slug:"/api/legacy/btc-ln-receive"}},v={},y=[{value:"Get the wallet IDs and check the balances",id:"get-the-wallet-ids-and-check-the-balances",level:3},{value:"Generate a lightning invoice",id:"generate-a-lightning-invoice",level:3},{value:"Once paid check the balance again",id:"once-paid-check-the-balance-again",level:3}];function j(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.O,{children:[(0,a.jsx)(l.a,{}),(0,a.jsx)(s.K,{}),(0,a.jsx)(n.h3,{id:"get-the-wallet-ids-and-check-the-balances",children:"Get the wallet IDs and check the balances"}),(0,a.jsxs)(n.p,{children:["Can run this query at any stage to confirm the change in the balances.",(0,a.jsx)("br",{}),'\nThe "BTC" wallet balance is denominated in satoshis.',(0,a.jsx)("br",{}),'\nThe "USD" wallet balance is in cents.']}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        id\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n"})}),(0,a.jsx)(o.z,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"generate-a-lightning-invoice",children:"Generate a lightning invoice"}),(0,a.jsxs)(n.p,{children:["Receive satoshis to your BTC balance.",(0,a.jsx)("br",{}),"\nUse the ",(0,a.jsx)(n.code,{children:"paymentRequest"})," from the response and pay it with a lightning wallet."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation LnInvoiceCreate($input: LnInvoiceCreateInput!) {\n  lnInvoiceCreate(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}\n"})}),(0,a.jsx)(h,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"once-paid-check-the-balance-again",children:"Once paid check the balance again"}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n"})}),(0,a.jsx)(u.d,{})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["To test the GraphQL requests further use the GraphQL playground at ",(0,a.jsx)(n.a,{href:"https://api.blink.sv/graphql",children:"api.blink.sv/graphql"})," for mainnet or ",(0,a.jsx)(n.a,{href:"https://api.staging.blink.sv/graphql",children:"api.staging.blink.sv/graphql"})," for staging.",(0,a.jsx)("br",{}),"\nCheck out the ",(0,a.jsx)(n.a,{href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#ac3751d8-c116-408b-9129-d6e365da590b",children:"Galoy API Postman collection"})," to find examples in multiple programming languages."]})})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},1276:(e,n,t)=>{t.d(n,{A:()=>l,O:()=>s});var a=t(6540),i=t(4848);const r=(0,a.createContext)(),l=()=>(0,a.useContext)(r),s=e=>{let{children:n}=e;const[t,l]=(0,a.useState)(null),[s,o]=(0,a.useState)("https://api.blink.sv/graphql"),[c,d]=(0,a.useState)(""),[p,h]=(0,a.useState)(""),u={authToken:t,setAuthToken:l,apiEndpoint:s,setApiEndpoint:o,accountWalletId:c,setAccountWalletId:d,paymentRequest:p,setPaymentRequest:h};return(0,i.jsx)(r.Provider,{value:u,children:n})}},5195:(e,n,t)=>{t.d(n,{d:()=>o});var a=t(6540),i=t(4325),r=t(1276),l=t(2556),s=t(4848);function o(){const{authToken:e,apiEndpoint:n}=(0,r.A)(),[t,o]=(0,a.useState)(""),[c,d]=(0,a.useState)(null),[p,h]=(0,a.useState)(null),u="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,l.lc)({operation:u,setCurlCommand:o,authToken:e,apiEndpoint:n})}),[e,n]),(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{onClick:async()=>{h(null),d(null);try{const t=await(0,i.t)(e,n,u);d(t),(0,l.lc)({operation:u,setCurlCommand:o,authToken:e,apiEndpoint:n})}catch(t){h(t.message)}},children:"Send the request"}),(0,s.jsx)("div",{style:{marginTop:"10px"}}),p&&(0,s.jsxs)("div",{style:{color:"red"},children:["Error: ",p]}),c&&(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Response:"})," ",(0,s.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(c,null,2)})]}),(0,s.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,s.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to check the balance of your wallets"}),(0,s.jsx)("div",{style:{marginTop:"10px"}}),(0,s.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:t})]})]})}},8415:(e,n,t)=>{t.d(n,{z:()=>o});var a=t(6540),i=t(4325),r=t(1276),l=t(2556),s=t(4848);function o(){const{authToken:e,apiEndpoint:n}=(0,r.A)(),[t,o]=(0,a.useState)(""),[c,d]=(0,a.useState)(null),[p,h]=(0,a.useState)(null),u="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,l.lc)({operation:u,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:n,walletCurrency:"BTC"})}),[e,n]),(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{onClick:async()=>{h(null),d(null);try{const t=await(0,i.t)(e,n,u);d(t),(0,l.lc)({operation:u,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:n,walletCurrency:"BTC"})}catch(t){h(t.message)}},children:"Send the request"}),(0,s.jsx)("div",{style:{marginTop:"10px"}}),p&&(0,s.jsxs)("div",{style:{color:"red"},children:["Error: ",p]}),c&&(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Response:"})," ",(0,s.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(c,null,2)})]}),(0,s.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,s.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to get the BTC wallet ID"}),(0,s.jsx)("div",{style:{marginTop:"10px"}}),(0,s.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:t})]})]})}},2108:(e,n,t)=>{t.d(n,{a:()=>r});t(6540);var a=t(1276),i=t(4848);function r(){const{apiEndpoint:e,setApiEndpoint:n}=(0,a.A)();return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:"The GraphQL endpoint to connect to:"}),(0,i.jsxs)("select",{type:"text",value:e,onChange:e=>{n(e.target.value)},style:{width:"50%",marginBottom:"10px"},children:[(0,i.jsx)("option",{value:"https://api.blink.sv/graphql",children:"Blink (mainnet) - https://api.blink.sv/graphql"}),(0,i.jsx)("option",{value:"https://api.staging.blink.sv/graphql",children:"Staging (signet) - https://api.staging.blink.sv/graphql"})]})]})}},230:(e,n,t)=>{t.d(n,{K:()=>r});t(6540);var a=t(1276),i=t(4848);function r(){const{setAuthToken:e}=(0,a.A)();return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:"A valid authentication token is required in the header as a bearer token:"}),(0,i.jsx)("input",{type:"text",placeholder:"Paste the authentication token to use it",onChange:n=>{e(n.target.value)},style:{width:"50%",marginBottom:"10px"}})]})}},4325:(e,n,t)=>{t.d(n,{t:()=>a});const a=async function(e,n,t,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!t)throw new Error("No GraphQL query provided");try{const i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${e}`},body:JSON.stringify({query:t,variables:a})});if(!i.ok){const e=await i.text();throw new Error(`Error response from server: ${e}`)}const r=i.headers.get("content-type");if(r&&r.includes("application/json")){return await i.json()}throw new Error(`Unexpected content type: ${r}`)}catch(i){throw console.error("There was an error making the authenticated request:",i),i}}},2556:(e,n,t)=>{t.d(n,{Wg:()=>i,ZD:()=>a,cp:()=>r,lc:()=>l});const a=(e,n)=>{const t={email:n};return`curl -X POST '${e}/email/code' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify(t)}'`},i=(e,n,t)=>{const a={query:"mutation login($input: UserLoginInput!) { userLogin(input: $input) { authToken } }",variables:{input:{phone:n,code:t}}};return`curl '${e}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data-binary '${JSON.stringify(a)}'`},r=(e,n,t)=>`curl -X POST '${`${e}/email/login`}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'Accept: application/json' \\\n  --data '${JSON.stringify({code:t,emailLoginId:n})}'`;function l(e){let{operation:n,type:t="",setCurlCommand:a,authToken:i,apiEndpoint:r,amount:l,paymentRequest:s="",walletId:o="",walletCurrency:c="",address:d}=e,p={query:n.trim(),variables:{}};const h=i?`--header 'Authorization: Bearer ${i}'`:"--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";"invoice"===t?p.variables.input={amount:l.toString(),walletId:o}:"feeProbe"===t||"lnInvoicePaymentSend"===t?p.variables.input={paymentRequest:s,walletId:o}:"onChainTxFee"===t?p.variables={walletId:o,address:d,amount:l}:"onChainSend"===t&&(p.variables.input={walletId:o,address:d,amount:l});let u=JSON.stringify(p).replace(/\n/g,"");a("wallet"===t?`curl -sS --request POST --header 'content-type: application/json' \\\n  ${h} \\\n  --url '${r}' \\\n  --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n| jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "${c}") .id'`:`curl --request POST --header 'content-type: application/json' \\\n  ${h} \\\n  --url '${r}' \\\n  --data '${u}'`)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var a=t(6540);const i={},r=a.createContext(i);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);