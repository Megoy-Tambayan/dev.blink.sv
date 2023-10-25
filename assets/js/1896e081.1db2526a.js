"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),h=n,m=s["".concat(p,".").concat(h)]||s[h]||d[h]||l;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={id:"learn-more",title:"Learn more",slug:"/api/learn-more"},o=void 0,i={unversionedId:"api/learn-more",id:"api/learn-more",title:"Learn more",description:"GraphQL playground",source:"@site/docs/api/learn-more.md",sourceDirName:"api",slug:"/api/learn-more",permalink:"/api/learn-more",draft:!1,tags:[],version:"current",frontMatter:{id:"learn-more",title:"Learn more",slug:"/api/learn-more"},sidebar:"apiSidebar",previous:{title:"Postman collection",permalink:"/api/postman"}},p={},u=[{value:"GraphQL playground",id:"graphql-playground",level:2},{value:"Galoy public API reference",id:"galoy-public-api-reference",level:2},{value:"Preformed GraphQL queries",id:"preformed-graphql-queries",level:2},{value:"Videos",id:"videos",level:2},{value:"Using the Galoy GraphQL API",id:"using-the-galoy-graphql-api",level:3},{value:"Getting started with the Galoy API",id:"getting-started-with-the-galoy-api",level:3}],c={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"graphql-playground"},"GraphQL playground"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Find the staging API endpoint and GraphQL playground at:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://api.staging.galoy.io/graphql"},"https://api.staging.galoy.io/graphql"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the mainnet API endpoint and GraphQL playground connect to:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://api.blink.sv/graphql"},"https://api.blink.sv/graphql")))),(0,n.kt)("h2",{id:"galoy-public-api-reference"},(0,n.kt)("a",{parentName:"h2",href:"https://dev.galoy.io/public-api-reference.html"},"Galoy public API reference")),(0,n.kt)("h2",{id:"preformed-graphql-queries"},"Preformed GraphQL queries"),(0,n.kt)("p",null,"Dive deeper into constructing GraphQL queries with these preformed queries:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/GaloyMoney/galoy/tree/main/core/api/test/bats/gql"},"galoy/tree/main/core/api/test/bats/gql")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/GaloyMoney/galoy-mobile/blob/main/app/graphql/generated.gql"},"galoy-mobile/blob/main/app/graphql/generated.gql"))),(0,n.kt)("h2",{id:"videos"},"Videos"),(0,n.kt)("h3",{id:"using-the-galoy-graphql-api"},"Using the Galoy GraphQL API"),(0,n.kt)("p",null,"Arvin demoes the Galoy GraphQL API on 2022-Oct-26."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/RRdpKnFe8qQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h3",{id:"getting-started-with-the-galoy-api"},"Getting started with the Galoy API"),(0,n.kt)("p",null,"Arvin walks through how to use the Galoy API to send USD over Lightning on 2022-Mar-29."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bp5Dc6Wvnbw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}d.isMDXComponent=!0}}]);