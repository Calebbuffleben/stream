(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9522],{55583:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/chat/users",function(){return n(17988)}])},14403:function(e,t,n){"use strict";var r=n(75263).default,a=n(64836).default;t.Z=void 0;var s=a(n(10434));a(n(18698));var l=r(n(67294));a(n(76092));var o=a(n(53897)),i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},c=l.forwardRef(function(e,t){var n=e.ellipsis,r=e.rel,a=i(e,["ellipsis","rel"]),c=(0,s.default)((0,s.default)({},a),{rel:void 0===r&&"_blank"===a.target?"noopener noreferrer":r});return delete c.navigate,l.createElement(o.default,(0,s.default)({},c,{ref:t,ellipsis:!!n,component:"a"}))});t.Z=c},63121:function(e,t,n){"use strict";var r=n(75263).default,a=n(64836).default;t.Z=void 0;var s=a(n(10434)),l=a(n(18698)),o=a(n(13153)),i=r(n(67294));a(n(76092));var c=a(n(53897)),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};t.Z=i.forwardRef(function(e,t){var n=e.ellipsis,r=d(e,["ellipsis"]),a=i.useMemo(function(){return n&&"object"===(0,l.default)(n)?(0,o.default)(n,["expandable","rows"]):n},[n]);return i.createElement(c.default,(0,s.default)({ref:t},r,{ellipsis:a,component:"span"}))})},17988:function(e,t,n){"use strict";n.r(t),n.d(t,{FETCH_INTERVAL:function(){return I},default:function(){return S}});var r=n(85893),a=n(67294),s=n(89307),l=n(37039),o=n(14403),i=n(63121),c=n(4481),d=n(11992),u=n(78338),p=n(20133),f=n(27043),h=n(61913),m=n(5152),y=n.n(m),g=n(78754),b=n(60089),x=n(74040);let w=y()(()=>n.e(8661).then(n.t.bind(n,78661,23)),{loadableGenerated:{webpack:()=>[78661]},ssr:!1}),j=e=>{let{data:t}=e,n=[{title:"Display Name",key:"username",render:e=>{let{user:t,connectedAt:n,messageCount:a,userAgent:s}=e;return(0,r.jsx)(g.Z,{user:t,connectionInfo:{connectedAt:n,messageCount:a,userAgent:s},children:(0,r.jsx)("span",{className:"display-name",children:t.displayName})})},sorter:(e,t)=>t.user.displayName.localeCompare(e.user.displayName),filterIcon:(0,r.jsx)(w,{}),filterDropdown:e=>{let{setSelectedKeys:t,selectedKeys:n,confirm:a}=e;return 0===n.length?null:(0,r.jsx)("div",{style:{padding:8},children:(0,r.jsx)(p.default,{placeholder:"Search display names...",value:n[0].toString(),onChange:e=>{t(e.target.value?[e.target.value]:[]),a({closeDropdown:!1})}})})},onFilter:(e,t)=>t.user.displayName.includes(e),sortDirections:["descend","ascend"]},{title:"Messages sent",dataIndex:"messageCount",key:"messageCount",className:"number-col",width:"12%",sorter:(e,t)=>e.messageCount-t.messageCount,sortDirections:["descend","ascend"],render:e=>(0,r.jsx)("div",{style:{textAlign:"center"},children:e})},{title:"Connected Time",dataIndex:"connectedAt",key:"connectedAt",defaultSortOrder:"ascend",render:e=>(0,h.Q)(new Date(e)),sorter:(e,t)=>new Date(t.connectedAt).getTime()-new Date(e.connectedAt).getTime(),sortDirections:["descend","ascend"]},{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:e=>(0,x.AB)(e)},{title:"Location",dataIndex:"geo",key:"geo",render:e=>e?"".concat(e.regionName,", ").concat(e.countryCode):"-"},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,r.jsx)(b.e,{user:t.user,isEnabled:!t.user.disabledAt})}];return(0,r.jsx)(f.Z,{className:"table-container",pagination:{hideOnSinglePage:!0},columns:n,dataSource:t,size:"small",rowKey:"id"})};var v=n(56469),k=n(12642);let O=y()(()=>n.e(1577).then(n.t.bind(n,71071,23)),{loadableGenerated:{webpack:()=>[71071]},ssr:!1});async function A(e){try{await (0,d.rQ)(d.RB,{data:{value:e},method:"POST",auth:!0})}catch(e){console.error(e)}}let N=e=>{let{data:t}=e,n=[{title:"IP Address",dataIndex:"ipAddress",key:"ipAddress"},{title:"Reason",dataIndex:"notes",key:"notes"},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:e=>(0,k.WU)(new Date(e),"MMM d H:mma"),sorter:(e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime(),sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,r.jsx)(v.Z,{title:"Remove IP Address Ban",onClick:()=>A(t.ipAddress),icon:(0,r.jsx)(O,{twoToneColor:"#ff4d4f"}),className:"block-user-button"})}];return(0,r.jsx)(f.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:n,dataSource:t,size:"large",rowKey:"ipAddress"})};var C=n(25889);let I=1e4;function S(){let{online:e}=(0,a.useContext)(c.a)||{},[t,n]=(0,a.useState)([]),[p,f]=(0,a.useState)([]),[h,m]=(0,a.useState)([]),[y,g]=(0,a.useState)([]),{t:b}=(0,l.$G)(),x=async()=>{try{let e=await (0,d.rQ)(d.qk);n(e)}catch(e){console.log("==== error",e)}try{let e=await (0,d.rQ)(d.Kp);m(e)}catch(e){console.log("==== error",e)}try{let e=await (0,d.rQ)(d.GC);g(e)}catch(e){console.error("error fetching moderators",e)}try{let e=await (0,d.rQ)(d.Bu);f(e)}catch(e){console.error("error fetching banned ips",e)}};(0,a.useEffect)(()=>{let e=null;return x(),e=setInterval(x,I),()=>{clearInterval(e)}},[e]);let w=e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{data:h}),(0,r.jsxs)("p",{className:"description",children:[b("Visit the")," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/viewers/?source=admin",target:"_blank",rel:"noopener noreferrer",children:b("documentation")})," ",b("to configure additional details about your viewers.")]})]}):(0,r.jsx)("p",{className:"description",children:b("When a stream is active and chat is enabled, connected chat clients will be displayed here.")}),v=(0,r.jsxs)("span",{children:[b("Connected")," (",e?h.length:b("offline"),")"]}),k=(0,r.jsxs)("span",{children:[b("Banned Users")," (",t.length,")"]}),O=(0,r.jsx)(u.K,{data:t}),A=(0,r.jsxs)("span",{children:[b("IP Bans")," (",p.length,")"]}),C=(0,r.jsx)(N,{data:p}),S=(0,r.jsxs)("span",{children:[b("Moderators")," (",y.length,")"]}),_=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:[(0,r.jsxs)(i.Z,{type:"secondary",children:[" ",b("Bring in moderators to help keep your chat in order.")," "]}),(0,r.jsx)(o.Z,{href:"https://owncast.online/docs/chat/moderation/",rel:"noopener noreferrer",target:"_blank",children:b("Learn more about chat moderation here.")})]}),(0,r.jsx)(u.K,{data:y})]});return(0,r.jsx)(s.Z,{defaultActiveKey:"1",items:[{label:v,key:"1",children:w},{label:k,key:"2",children:O},{label:A,key:"3",children:C},{label:S,key:"4",children:_}]})}S.getLayout=function(e){return(0,r.jsx)(C.l,{page:e})}}},function(e){e.O(0,[3247,83,1287,3800,7786,443,9904,3657,1175,2502,7528,9532,449,7043,4065,9307,2642,7039,1913,1408,3897,5889,3064,1236,2888,9774,179],function(){return e(e.s=55583)}),_N_E=e.O()}]);