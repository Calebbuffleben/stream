(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8399],{88054:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readonly",function(){return n(35106)}])},98947:function(t,e,n){"use strict";n.d(e,{c4:function(){return a}});var r=n(4942),c=n(87462),a=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},i=new Map,s=-1,l={};e.ZP={matchHandlers:{},dispatch:function(t){return l=t,i.forEach(function(t){return t(l)}),i.size>=1},subscribe:function(t){return i.size||this.register(),s+=1,i.set(s,t),t(l),s},unsubscribe:function(t){i.delete(t),i.size||this.unregister()},unregister:function(){var t=this;Object.keys(o).forEach(function(e){var n=o[e],r=t.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)}),i.clear()},register:function(){var t=this;Object.keys(o).forEach(function(e){var n=o[e],a=function(n){var a=n.matches;t.dispatch((0,c.Z)((0,c.Z)({},l),(0,r.Z)({},e,a)))},i=window.matchMedia(n);i.addListener(a),t.matchHandlers[n]={mql:i,listener:a},a(i)})}}},50563:function(t,e,n){"use strict";var r=(0,n(67294).createContext)({});e.Z=r},78235:function(t,e,n){"use strict";var r=n(4942),c=n(87462),a=n(71002),o=n(93967),i=n.n(o),s=n(67294),l=n(17399),u=n(50563),f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,r=Object.getOwnPropertySymbols(t);c<r.length;c++)0>e.indexOf(r[c])&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]]);return n},d=["xs","sm","md","lg","xl","xxl"],p=s.forwardRef(function(t,e){var n=s.useContext(l.E_),o=n.getPrefixCls,p=n.direction,m=s.useContext(u.Z),h=m.gutter,v=m.wrap,x=m.supportFlexGap,Z=t.prefixCls,b=t.span,g=t.order,y=t.offset,w=t.push,j=t.pull,O=t.className,E=t.children,C=t.flex,N=t.style,P=f(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),_=o("col",Z),S={};d.forEach(function(e){var n={},o=t[e];"number"==typeof o?n.span=o:"object"===(0,a.Z)(o)&&(n=o||{}),delete P[e],S=(0,c.Z)((0,c.Z)({},S),(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},"".concat(_,"-").concat(e,"-").concat(n.span),void 0!==n.span),"".concat(_,"-").concat(e,"-order-").concat(n.order),n.order||0===n.order),"".concat(_,"-").concat(e,"-offset-").concat(n.offset),n.offset||0===n.offset),"".concat(_,"-").concat(e,"-push-").concat(n.push),n.push||0===n.push),"".concat(_,"-").concat(e,"-pull-").concat(n.pull),n.pull||0===n.pull),"".concat(_,"-rtl"),"rtl"===p))});var k=i()(_,(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},"".concat(_,"-").concat(b),void 0!==b),"".concat(_,"-order-").concat(g),g),"".concat(_,"-offset-").concat(y),y),"".concat(_,"-push-").concat(w),w),"".concat(_,"-pull-").concat(j),j),O,S),A={};if(h&&h[0]>0){var R=h[0]/2;A.paddingLeft=R,A.paddingRight=R}if(h&&h[1]>0&&!x){var H=h[1]/2;A.paddingTop=H,A.paddingBottom=H}return C&&(A.flex="number"==typeof C?"".concat(C," ").concat(C," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(C)?"0 0 ".concat(C):C,!1!==v||A.minWidth||(A.minWidth=0)),s.createElement("div",(0,c.Z)({},P,{style:(0,c.Z)((0,c.Z)({},A),N),className:k,ref:e}),E)});e.Z=p},79338:function(t,e,n){"use strict";var r=n(87462),c=n(4942),a=n(71002),o=n(97685),i=n(93967),s=n.n(i),l=n(67294),u=n(17399),f=n(90136),d=n(98947),p=n(3227),m=n(50563),h=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,r=Object.getOwnPropertySymbols(t);c<r.length;c++)0>e.indexOf(r[c])&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]]);return n};function v(t,e){var n=l.useState("string"==typeof t?t:""),r=(0,o.Z)(n,2),c=r[0],i=r[1],s=function(){if("string"==typeof t&&i(t),"object"===(0,a.Z)(t))for(var n=0;n<d.c4.length;n++){var r=d.c4[n];if(e[r]){var c=t[r];if(void 0!==c){i(c);return}}}};return l.useEffect(function(){s()},[JSON.stringify(t),e]),c}(0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between","space-evenly");var x=l.forwardRef(function(t,e){var n,i=t.prefixCls,p=t.justify,x=t.align,Z=t.className,b=t.style,g=t.children,y=t.gutter,w=void 0===y?0:y,j=t.wrap,O=h(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),E=l.useContext(u.E_),C=E.getPrefixCls,N=E.direction,P=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),_=(0,o.Z)(P,2),S=_[0],k=_[1],A=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),R=(0,o.Z)(A,2),H=R[0],T=R[1],I=v(x,H),J=v(p,H),L=(0,f.Z)(),M=l.useRef(w);l.useEffect(function(){var t=d.ZP.subscribe(function(t){T(t);var e=M.current||0;(!Array.isArray(e)&&"object"===(0,a.Z)(e)||Array.isArray(e)&&("object"===(0,a.Z)(e[0])||"object"===(0,a.Z)(e[1])))&&k(t)});return function(){return d.ZP.unsubscribe(t)}},[]);var z=C("row",i),G=(n=[void 0,void 0],(Array.isArray(w)?w:[w,void 0]).forEach(function(t,e){if("object"===(0,a.Z)(t))for(var r=0;r<d.c4.length;r++){var c=d.c4[r];if(S[c]&&void 0!==t[c]){n[e]=t[c];break}}else n[e]=t}),n),W=s()(z,(0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)({},"".concat(z,"-no-wrap"),!1===j),"".concat(z,"-").concat(J),J),"".concat(z,"-").concat(I),I),"".concat(z,"-rtl"),"rtl"===N),Z),q={},B=null!=G[0]&&G[0]>0?-(G[0]/2):void 0,F=null!=G[1]&&G[1]>0?-(G[1]/2):void 0;if(B&&(q.marginLeft=B,q.marginRight=B),L){var X=(0,o.Z)(G,2);q.rowGap=X[1]}else F&&(q.marginTop=F,q.marginBottom=F);var Q=(0,o.Z)(G,2),U=Q[0],V=Q[1],$=l.useMemo(function(){return{gutter:[U,V],wrap:j,supportFlexGap:L}},[U,V,j,L]);return l.createElement(m.Z.Provider,{value:$},l.createElement("div",(0,r.Z)({},O,{className:W,style:(0,r.Z)((0,r.Z)({},q),b),ref:e}),g))});e.Z=x},35106:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(85893),c=n(4480),a=n(4511),o=n(49246),i=n(28049),s=n(83073),l=n(69583);function u(){let t=(0,c.sJ)(i.db),e=(0,c.sJ)(i.pH),n=(0,c.sJ)(i.di);return(0,r.jsx)("div",{children:(0,r.jsxs)(a.SV,{fallbackRender:t=>{let{error:e}=t;return(0,r.jsx)(l.A,{componentName:"ReadWriteChatEmbed",message:e.message})},children:[(0,r.jsx)(i.me,{}),(0,r.jsx)(s.Q,{}),t&&(0,r.jsx)(o.ChatContainer,{messages:e,usernameToHighlight:t.displayName,chatUserId:t.id,isModerator:!1,showInput:!1,height:"100vh",chatAvailable:n})]})})}}},function(t){t.O(0,[4283,3800,5888,885,2154,944,2888,9774,179],function(){return t(t.s=88054)}),_N_E=t.O()}]);