"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[409],{6029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(4848),s=t(5680);const a={id:"pagination",title:"Pagination",slug:"/api/pagination"},i=void 0,o={id:"api/pagination",title:"Pagination",description:"When you access the list of transactions all items will have an associated cursor position. This cursor can be used to paginate through the list by defining the after variable in the GraphQL request.",source:"@site/docs/api/pagination.md",sourceDirName:"api",slug:"/api/pagination",permalink:"/api/pagination",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"pagination",title:"Pagination",slug:"/api/pagination"},sidebar:"apiSidebar",previous:{title:"Send USD onchain",permalink:"/api/usd-onchain-send"},next:{title:"Webhooks",permalink:"/api/webhooks"}},c={},l=[{value:"Example request with pagination",id:"example-request-with-pagination",level:2},{value:"Variables",id:"variables",level:3},{value:"Sample response showing the first 3 transactions",id:"sample-response-showing-the-first-3-transactions",level:3},{value:"Variables to show the next two transactions",id:"variables-to-show-the-next-two-transactions",level:2},{value:"Sample response showing the next two transactions",id:"sample-response-showing-the-next-two-transactions",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["When you access the list of transactions all items will have an associated cursor position. This cursor can be used to paginate through the list by defining the ",(0,r.jsx)(n.code,{children:"after"})," variable in the GraphQL request."]}),"\n",(0,r.jsx)(n.h2,{id:"example-request-with-pagination",children:"Example request with pagination"}),"\n",(0,r.jsxs)(n.p,{children:["Note the ",(0,r.jsx)(n.code,{children:"pageInfo"})," object containing the cursor and page values. The ",(0,r.jsx)(n.code,{children:"edges"})," object contains the transaction data."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"endCursor"}),": When paginating forwards, the cursor to continue."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hasNextPage"}),": When paginating forwards, are there more items?"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"query transactionsForAccount($walletIds: [WalletId], $first: Int, $after: String) {\n  me {\n    id\n    defaultAccount {\n      transactions(walletIds: $walletIds, first: $first, after: $after) {\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n        edges {\n          cursor\n          node {\n            direction\n            settlementCurrency\n            settlementDisplayAmount\n            status\n            createdAt\n          }\n        }\n      }\n    }\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"variables",children:"Variables"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"first"})," (Int): Returns the first n items from the list."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"after"})," (String): Returns the items in the list that come after the specified cursor."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The variables used in the request to show the 3 most recent transactions for the default account:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "first": 2,\n  "after": null\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"sample-response-showing-the-first-3-transactions",children:"Sample response showing the first 3 transactions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "me": {\n      "id": "dd3771d0-66b2-4b28-8757-b1a5db0f8fcf",\n      "defaultAccount": {\n        "transactions": {\n          "pageInfo": {\n            "endCursor": "653787e933905fc03c13e2bc",\n            "hasNextPage": true\n          },\n          "edges": [\n            {\n              "cursor": "6538bda9491e13fd6416b5f3",\n              "node": {\n                "direction": "RECEIVE",\n                "settlementCurrency": "USD",\n                "settlementDisplayAmount": "0.01",\n                "status": "SUCCESS",\n                "createdAt": 1698217385\n              }\n            },\n            {\n              "cursor": "6538b68c491e13fd6416722d",\n              "node": {\n                "direction": "RECEIVE",\n                "settlementCurrency": "USD",\n                "settlementDisplayAmount": "1.00",\n                "status": "SUCCESS",\n                "createdAt": 1698215564\n              }\n            },\n            {\n              "cursor": "653787e933905fc03c13e2bc",\n              "node": {\n                "direction": "RECEIVE",\n                "settlementCurrency": "BTC",\n                "settlementDisplayAmount": "0.47",\n                "status": "SUCCESS",\n                "createdAt": 1698138089\n              }\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"variables-to-show-the-next-two-transactions",children:"Variables to show the next two transactions"}),"\n",(0,r.jsxs)(n.p,{children:["To show the next two transactions the ",(0,r.jsx)(n.code,{children:"endCursor"})," value from the previous response is used as the ",(0,r.jsx)(n.code,{children:"after"})," variable in the next request:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "first": 2,\n  "after": "653787e933905fc03c13e2bc"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"sample-response-showing-the-next-two-transactions",children:"Sample response showing the next two transactions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "me": {\n      "id": "dd3771d0-66b2-4b28-8757-b1a5db0f8fcf",\n      "defaultAccount": {\n        "transactions": {\n          "pageInfo": {\n            "endCursor": "653787c033905fc03c13e0a3",\n            "hasNextPage": true\n          },\n          "edges": [\n            {\n              "cursor": "653787e933905fc03c13e286",\n              "node": {\n                "direction": "SEND",\n                "settlementCurrency": "BTC",\n                "settlementDisplayAmount": "-0.47",\n                "status": "SUCCESS",\n                "createdAt": 1698138089\n              }\n            },\n            {\n              "cursor": "653787c033905fc03c13e0a3",\n              "node": {\n                "direction": "SEND",\n                "settlementCurrency": "BTC",\n                "settlementDisplayAmount": "-0.47",\n                "status": "SUCCESS",\n                "createdAt": 1698138048\n              }\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To test the GraphQL requests further use the GraphQL playground at ",(0,r.jsx)(n.a,{href:"https://api.blink.sv/graphql",children:"api.blink.sv/graphql"})," for mainnet or ",(0,r.jsx)(n.a,{href:"https://api.staging.galoy.io/graphql",children:"api.staging.galoy.io/graphql"})," for staging.",(0,r.jsx)("br",{}),"\nCheck out the ",(0,r.jsx)(n.a,{href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#ae685bc1-d637-48b2-8e32-4600eefc9a4e",children:"Galoy API Postman collection"})," to find examples in multiple programming languages."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.RP)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5680:(e,n,t)=>{t.d(n,{RP:()=>l});var r=t(6540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=l(t),u=s,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return t?r.createElement(f,i(i({ref:n},h),{},{components:t})):r.createElement(f,i({ref:n},h))}));h.displayName="MDXCreateElement"}}]);