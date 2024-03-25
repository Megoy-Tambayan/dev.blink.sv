"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[186],{6599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(4848),i=t(8453);const o={id:"webhooks",title:"Webhooks",slug:"/api/webhooks"},l="Webhooks",s={id:"api/webhooks",title:"Webhooks",description:"The Blink API offers a selection of webhooks (or callbacks), allowing external applications to receive instantaneous notifications about activities on your account. For example the webhooks can be used to make a LED light up or a beer tap to open on the receipt of a payment.",source:"@site/docs/api/webhooks.md",sourceDirName:"api",slug:"/api/webhooks",permalink:"/api/webhooks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"webhooks",title:"Webhooks",slug:"/api/webhooks"},sidebar:"apiSidebar",previous:{title:"Pagination",permalink:"/api/pagination"},next:{title:"Websocket connection",permalink:"/api/websocket"}},c={},d=[{value:"Currently available webhook events",id:"currently-available-webhook-events",level:2},{value:"Retries",id:"retries",level:2},{value:"Create a webhook endpoint to receive events",id:"create-a-webhook-endpoint-to-receive-events",level:2},{value:"Using the Blink Dashboard to manage webhooks",id:"using-the-blink-dashboard-to-manage-webhooks",level:2},{value:"Using the API to manage webhooks",id:"using-the-api-to-manage-webhooks",level:2},{value:"Add a callback endpoint",id:"add-a-callback-endpoint",level:3},{value:"List the configured callback endpoints",id:"list-the-configured-callback-endpoints",level:3},{value:"Delete a callback endpoint",id:"delete-a-callback-endpoint",level:3}];function r(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"webhooks",children:"Webhooks"}),"\n",(0,a.jsx)(n.p,{children:"The Blink API offers a selection of webhooks (or callbacks), allowing external applications to receive instantaneous notifications about activities on your account. For example the webhooks can be used to make a LED light up or a beer tap to open on the receipt of a payment."}),"\n",(0,a.jsx)(n.h2,{id:"currently-available-webhook-events",children:"Currently available webhook events"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"send.lightning"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"receive.lightning"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"send.intraledger"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"receive.intraledger"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"send.onchain"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"receive.onchain"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"retries",children:"Retries"}),"\n",(0,a.jsxs)(n.p,{children:["If the callback endpoint is not available the message is scheduled for retries with an exponential backoff. Read about the schedule details in the ",(0,a.jsx)(n.a,{href:"https://docs.svix.com/retries",children:"Svix documentation"})," which is the service module used to send the webhooks."]}),"\n",(0,a.jsx)(n.h2,{id:"create-a-webhook-endpoint-to-receive-events",children:"Create a webhook endpoint to receive events"}),"\n",(0,a.jsxs)(n.p,{children:["Visit ",(0,a.jsx)(n.a,{href:"https://play.svix.com/",children:"play.svix.com"})," to quickly set up a webhook endpoint for testing."]}),"\n",(0,a.jsx)(n.p,{children:"Your endpoint MUST return a 2xx HTTP status code in a timely manner. If the backend doesn't receive that response it will be taken as the endpoint is offline and the Blink API will retry to send the event a few times."}),"\n",(0,a.jsxs)(n.p,{children:["Example payload sent on a ",(0,a.jsx)(n.code,{children:"receive.lightning"})," event:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n   "accountId":"1580f7f2-0e4c-4187-b97f-9ed6eaff8f55",\n   "eventType":"receive.lightning",\n   "walletId":"21087d73-80d8-4556-a73a-e1b6b0657784",\n   "transaction":{\n      "createdAt":"2023-11-21T01:49:38.375Z",\n      "id":"655cd1926445716f60b89418",\n      "initiationVia":{\n         "paymentHash":"bf6b61f814b2e2284f5cbb7c9f9e67887018ffe3f53bedb9b70dec0a15ebca1c",\n         "pubkey":"d75a81acb76fd85dafe491799bbd1940a25e8a8fa776cacccda4ee8444555e3e",\n         "type":"lightning"\n      },\n      "memo":null,\n      "settlementAmount":2707,\n      "settlementCurrency":"BTC",\n      "settlementDisplayAmount":"1.00",\n      "settlementDisplayFee":"0.00",\n      "settlementDisplayPrice":{\n         "base":"36941263391",\n         "displayCurrency":"USD",\n         "offset":"12",\n         "walletCurrency":"BTC"\n      },\n      "settlementFee":0,\n      "settlementVia":{\n         "type":"lightning"\n      },\n      "status":"success",\n      "walletId":"21087d73-80d8-4556-a73a-e1b6b0657784"\n   }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"using-the-blink-dashboard-to-manage-webhooks",children:"Using the Blink Dashboard to manage webhooks"}),"\n",(0,a.jsxs)(n.p,{children:["Log in to the ",(0,a.jsx)(n.a,{href:"https://dashboard.blink.sv",children:"Blink Dashboard"})," and select the ",(0,a.jsx)(n.code,{children:"Callback Endpoints"})," page to add or remove the webhooks."]}),"\n",(0,a.jsx)("img",{src:"/img/webhooks_dashboard.png",alt:"Webhooks",width:"800"}),"\n",(0,a.jsx)(n.h2,{id:"using-the-api-to-manage-webhooks",children:"Using the API to manage webhooks"}),"\n",(0,a.jsx)(n.h3,{id:"add-a-callback-endpoint",children:"Add a callback endpoint"}),"\n",(0,a.jsxs)(n.p,{children:["Use the graphql mutation ",(0,a.jsx)(n.code,{children:"callbackEndpointAdd"})," to add a callback endpoint to the account."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation CallbackEndpointAdd($input: CallbackEndpointAddInput!) {\n  callbackEndpointAdd(input: $input) {\n    id\n    errors {\n      code\n      message\n      path\n    }\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Variables to use (change to your own endpoint):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "input": {\n    "url": "https://play.svix.com/view/e_G9H4c3IhcV64t2rn5yXrf6PAhzP"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"list-the-configured-callback-endpoints",children:"List the configured callback endpoints"}),"\n",(0,a.jsxs)(n.p,{children:["Use the graphql query ",(0,a.jsx)(n.code,{children:"callbackEndpoints"})," to list the callback endpoints configured for the account."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query CallbackEndpoints {\n  me {\n    defaultAccount {\n      callbackEndpoints {\n        id\n        url\n      }\n    }\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "me": {\n      "defaultAccount": {\n        "callbackEndpoints": [\n          {\n            "url": "https://play.svix.com/in/e_199jAau4I029pKkrMpkeQF5ll6E/",\n            "id": "ep_2XFLziymYU6yesALDZBaI3Zrk7L"\n          }\n        ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"delete-a-callback-endpoint",children:"Delete a callback endpoint"}),"\n",(0,a.jsxs)(n.p,{children:["Use the graphql mutation ",(0,a.jsx)(n.code,{children:"callbackEndpointDelete"})," to delete a callback endpoint from the account."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation CallbackEndpointDelete($input: CallbackEndpointDeleteInput!) {\n  callbackEndpointDelete(input: $input) {\n    success\n    errors {\n      code\n      message\n      path\n    }\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Variables to use (change to the endpoint id you want to delete):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "input": {\n    "id": "ep_2XFLziymYU6yesALDZBaI3Zrk7L"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["To test the GraphQL requests further use the GraphQL playground at ",(0,a.jsx)(n.a,{href:"https://api.blink.sv/graphql",children:"api.blink.sv/graphql"})," for mainnet or ",(0,a.jsx)(n.a,{href:"https://api.staging.galoy.io/graphql",children:"api.staging.galoy.io/graphql"})," for staging.",(0,a.jsx)("br",{}),"\nCheck out the ",(0,a.jsx)(n.a,{href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#0be26540-d31c-4d0e-b7ac-400fc73bdb80",children:"Galoy API Postman collection"})," to find examples in multiple programming languages."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var a=t(6540);const i={},o=a.createContext(i);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);