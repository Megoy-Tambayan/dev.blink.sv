"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[376],{3066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(4848),i=t(8453);const a={id:"websocket",title:"Websocket connection",slug:"/api/websocket"},c=void 0,r={id:"api/websocket",title:"Websocket connection",description:"Websockets are used to receive real-time updates from the Blink API.",source:"@site/docs/api/websocket.md",sourceDirName:"api",slug:"/api/websocket",permalink:"/api/websocket",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"websocket",title:"Websocket connection",slug:"/api/websocket"},sidebar:"apiSidebar",previous:{title:"Webhooks",permalink:"/api/webhooks"},next:{title:"OAuth2 integration",permalink:"/api/oauth2"}},o={},l=[{value:"Available websocket events",id:"available-websocket-events",level:2},{value:"Websocket endpoint",id:"websocket-endpoint",level:2},{value:"Apollo Playground",id:"apollo-playground",level:2},{value:"Postman",id:"postman",level:2},{value:"Header to use",id:"header-to-use",level:3},{value:"Send the <code>connection_init</code> request",id:"send-the-connection_init-request",level:3},{value:"For authenticated requests",id:"for-authenticated-requests",level:3},{value:"Send a subscription request",id:"send-a-subscription-request",level:3},{value:"websocat",id:"websocat",level:2},{value:"Usage without authentication",id:"usage-without-authentication",level:3},{value:"Example output",id:"example-output",level:3},{value:"Authenticated usage",id:"authenticated-usage",level:3},{value:"Example output",id:"example-output-1",level:3},{value:"Test implementation in the galoy backend",id:"test-implementation-in-the-galoy-backend",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Websockets are used to receive real-time updates from the Blink API.",(0,s.jsx)("br",{}),"\nImplemented using the ",(0,s.jsx)(n.a,{href:"https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md",children:"GraphQL over WebSocket Protocol"})]}),"\n",(0,s.jsx)(n.h2,{id:"available-websocket-events",children:"Available websocket events"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"myUpdates"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"lnInvoicePaymentStatus"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"realtimePrice"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"price"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"websocket-endpoint",children:"Websocket endpoint"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"wss://ws.blink.sv/graphql"})}),"\n",(0,s.jsx)(n.h2,{id:"apollo-playground",children:"Apollo Playground"}),"\n",(0,s.jsxs)(n.p,{children:["To try the subscriptions and explore the schema use the",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.a,{href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.blink.sv%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGcYCMtQBOAlgA4rERIAEAyngSeZUgBQAkxSpMK61AJQQBDADYVEABRJQEASW68AhAEpqwADo1qhEeOJSZCVlx59qnRSjWbt1HXokJpxWeq33P1YmA9fquChQtMIoLm62-p64wlgIflEQAGZJcSgJngC%2BGdnauZkgADQgAG7CJMK4oghYGCCR1BogprxN-A32TbCEukhQAJ5tjSAAqrQAIk1%2B%2BSCZQA",children:"Apollo Playground for Blink subscriptions"})]}),"\n",(0,s.jsx)(n.p,{children:"After loading the playground:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["open the ",(0,s.jsx)(n.code,{children:"SANDBOX"})," connection settings and set:",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.code,{children:"wss://ws.blink.sv/graphql"})," as the ",(0,s.jsx)(n.code,{children:"Subscriptions"})," URL then ",(0,s.jsx)(n.code,{children:"Save"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["add the ",(0,s.jsx)(n.code,{children:"X-API-KEY"})," header with your API key from the ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.a,{href:"https://dashboard.blink.sv",children:"Blink Dashboard"})," to authenticate the connection."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"postman",children:"Postman"}),"\n",(0,s.jsxs)(n.p,{children:["Try the websocket connection examples in the ",(0,s.jsx)(n.a,{href:"https://www.postman.com/avionics-astronomer-21512623/workspace/galoy-api/ws-raw-request/65844dfbf0aa010f3874d5ff",children:"Galoy API collection"})]}),"\n",(0,s.jsx)(n.p,{children:"To use the raw websocket protocol in Postman there are a few steps to follow:"}),"\n",(0,s.jsx)(n.h3,{id:"header-to-use",children:"Header to use"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Define the protocol","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"Sec-WebSocket-Protocol: graphql-transport-ws\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"send-the-connection_init-request",children:["Send the ",(0,s.jsx)(n.code,{children:"connection_init"})," request"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["to get a ",(0,s.jsx)(n.code,{children:"connection_ack"})," response","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type": "connection_init",\n  "payload": {}\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"for-authenticated-requests",children:"For authenticated requests"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["include the api key in the payload of the ",(0,s.jsx)(n.code,{children:"connection_init"})," request","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type": "connection_init",\n  "payload": {\n    "X-API-KEY": "<your api key>"\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"send-a-subscription-request",children:"Send a subscription request"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["use the format described in the ",(0,s.jsx)(n.a,{href:"https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md#subscribe",children:"GraphQL over WebSocket Protocol"})]}),"\n",(0,s.jsxs)(n.li,{children:["need to paste the message in place of the ",(0,s.jsx)(n.code,{children:"connection_init"})," message to continue using the same connection","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "id": "1",\n    "type": "subscribe",\n    "payload": {\n        "query": "subscription  {  price(    input: { amount: 100 amountCurrencyUnit: BTCSAT priceCurrencyUnit: USDCENT }  ) {    errors {      message    }    price {      base      offset      currencyUnit    }  }}",\n        "variables": {}\n    }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"websocat",children:"websocat"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Linux (with a Rust toolchain installed)","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo install websocat\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["MacOS","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install websocat\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Connect to the websocket endpoint"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"websocat ${websocket_endpoint} -H 'Sec-WebSocket-Protocol: graphql-transport-ws' -v\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"usage-without-authentication",children:"Usage without authentication"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Send the ",(0,s.jsx)(n.code,{children:"connection_init"})," request for non-authenticated requests"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "type": "connection_init", "payload": {} }\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"price subscription message"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": "1", "type": "subscribe", "payload": {  "query": "subscription { price( input: { amount: 100 amountCurrencyUnit: BTCSAT priceCurrencyUnit: USDCENT } ) { errors { message } price { base offset currencyUnit } }}",  "variables": {} }}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"realtimePrice subscription message"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": "2", "type": "subscribe", "payload": { "query": "subscription realtimePrice($input: RealtimePriceInput!) { realtimePrice(input: $input) { realtimePrice { id btcSatPrice { base offset } } errors { code message path } }}", "variables": { "input": { "currency": "USD" } } }}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-output",children:"Example output"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'websocat ${websocket_endpoint} -H \'Sec-WebSocket-Protocol: graphql-transport-ws\' -v\n[INFO  websocat::lints] Auto-inserting the line mode\n[INFO  websocat::stdio_threaded_peer] get_stdio_peer (threaded)\n[INFO  websocat::ws_client_peer] get_ws_client_peer\n[INFO  websocat::ws_client_peer] Connected to ws\n{ "type": "connection_init", "payload": {}}\n{"type":"connection_ack"}\n{ "id": "1", "type": "subscribe", "payload": {  "query": "subscription { price( input: { amount: 100 amountCurrencyUnit: BTCSAT priceCurrencyUnit: USDCENT } ) { errors { message } price { base offset currencyUnit } }}",  "variables": {} }}\n{"id":"1","type":"next","payload":{"data":{"price":{"errors":[],"price":{"base":4364414843750,"offset":12,"currencyUnit":"USDCENT"}}}}}\n[INFO  websocat::ws_peer] Received WebSocket ping\n{ "id": "2", "type": "subscribe", "payload": { "query": "subscription realtimePrice($input: RealtimePriceInput!) { realtimePrice(input: $input) { realtimePrice { id btcSatPrice { base offset } } errors { code message path } }}", "variables": { "input": { "currency": "USD" } } }}\n{"id":"2","type":"next","payload":{"data":{"realtimePrice":{"realtimePrice":{"id":"a6e2abdb-431e-5455-81c1-92fbaccfb0de","btcSatPrice":{"base":43623050781,"offset":12}},"errors":[]}}}}\n[INFO  websocat::ws_peer] Received WebSocket ping\n{"id":"1","type":"next","payload":{"data":{"price":{"errors":[],"price":{"base":4362700000000,"offset":12,"currencyUnit":"USDCENT"}}}}}\n{"id":"2","type":"next","payload":{"data":{"realtimePrice":{"realtimePrice":{"id":"6d453741-e0ad-5fec-b27f-3d987571f5ad","btcSatPrice":{"base":43627000000,"offset":12}},"errors":[]}}}}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"authenticated-usage",children:"Authenticated usage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Send the ",(0,s.jsx)(n.code,{children:"connection_init"})," request for authenticated requests"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "type": "connection_init", "payload": { "X-API-KEY": "blink_xxxx" } }\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"myUpdates subscription message"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": "1", "type": "subscribe", "payload": { "query": "subscription { myUpdates { update { ... on LnUpdate { transaction { initiationVia { ... on InitiationViaLn { paymentHash } } direction } } } } }", "variables": {} }}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"lnInvoicePaymentStatus subscription message"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": "2", "type": "subscribe", "payload": { "query": "subscription LnInvoicePaymentStatus($input: LnInvoicePaymentStatusInput!) { lnInvoicePaymentStatus(input: $input) { status errors { code message path } }}", "variables": { "input": { "paymentRequest": "lnbc...." } } }}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-output-1",children:"Example output"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'websocat ${websocket_endpoint} -H \'Sec-WebSocket-Protocol: graphql-transport-ws\' -v\n[INFO  websocat::lints] Auto-inserting the line mode\n[INFO  websocat::stdio_threaded_peer] get_stdio_peer (threaded)\n[INFO  websocat::ws_client_peer] get_ws_client_peer\n[INFO  websocat::ws_client_peer] Connected to ws\n{ "type": "connection_init", "payload": { "X-API-KEY": "blink_xxxx" } }\n{"type":"connection_ack"}\n[INFO  websocat::ws_peer] Received WebSocket ping\n{ "id": "1", "type": "subscribe", "payload": { "query": "subscription { myUpdates { update { ... on LnUpdate { transaction { initiationVia { ... on InitiationViaLn { paymentHash } } direction } } } } }", "variables": {} }}\n{"id":"1","type":"next","payload":{"data":{"myUpdates":{"update":{}}}}}\n{"id":"1","type":"next","payload":{"data":{"myUpdates":{"update":{}}}}}\n[INFO  websocat::ws_peer] Received WebSocket ping\n{"id":"1","type":"next","payload":{"data":{"myUpdates":{"update":{}}}}}\n{"id":"1","type":"next","payload":{"data":{"myUpdates":{"update":{}}}}}\n{ "id": "2", "type": "subscribe", "payload": { "query": "subscription LnInvoicePaymentStatus($input: LnInvoicePaymentStatusInput!) { lnInvoicePaymentStatus(input: $input) { status errors { code message path } }}", "variables": { "input": { "paymentRequest": "lntbs1220n1pjklpx5pp5wn0zrhygl8u8p7k5nggsa3hcj9htkk0t8df5mxm2hrumk5gedgwsdq0w3jhxapqd4jk6mccqzpuxqyz5vqsp566v7qag22wnl5spf3zhrfruxyaek5m3uv5pu4dzpwmffk6adykpq9qyyssq62exrk3zcwfeh9c0hnhlpv9lmn33fryz4l9acmq79myp57lgj29390tucf4rycxn3zxtre8fzuzs6acu0w4umuetu9zr04zusa56duspsmsxv5" } } }}\n{"id":"2","type":"next","payload":{"data":{"lnInvoicePaymentStatus":{"status":"PAID","errors":[]}}}}\n[INFO  websocat::ws_peer] Received WebSocket ping\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"test-implementation-in-the-galoy-backend",children:"Test implementation in the galoy backend"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/GaloyMoney/galoy/blob/e010ac0ac2020d546ec2dbbd1a6680ac1a0282af/bats/helpers/subscriber/src/gql-subscribe.ts",children:"galoy/bats/helpers/subscriber/src/gql-subscribe.ts"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(6540);const i={},a=s.createContext(i);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);