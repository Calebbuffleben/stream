(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1487],{99096:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/hardware-info",function(){return n(39138)}])},31112:function(e,t,n){"use strict";n.d(t,{k:function(){return d}});var r=n(85893),o=n(12642),i=n(67294),l=n(71218),a=n(23148),s=n(26495),c=n(56469);function u(e){let t={};return e.forEach(e=>{let n=new Date(e.time);t[(0,o.WU)(n,"H:mma")]=e.value}),t}a.kL.register(a.uw,a.WV,a.f$,a.od,a.jn,a.Dx,a.u,a.De);let d=e=>{let{data:t,title:n,color:o,unit:a,dataCollections:d,yFlipped:f,yLogarithmic:p,minYValue:v,yStepSize:m=0}=e,h=[],g=(0,i.useRef)(null);return t&&t.length>0&&h.push({id:n,label:n,backgroundColor:o,borderColor:o,borderWidth:3,data:u(t)}),d.forEach(e=>{h.push({id:e.name,label:e.name,data:u(e.data),backgroundColor:e.color,borderColor:e.color,borderWidth:3,pointStyle:e.pointStyle||"circle",radius:e.pointRadius||1})}),(0,r.jsxs)("div",{className:"line-chart-container",children:[(0,r.jsx)(s.x1,{ref:g,data:{datasets:h},options:{responsive:!0,clip:!1,scales:{y:{type:p?"logarithmic":"linear",reverse:f,min:v,ticks:{stepSize:m},title:{display:!0,text:a}}}},height:"70vh"}),(0,r.jsx)(c.Z,{size:"small",onClick:()=>{if(g.current){let e=document.createElement("a");e.download="chart.png",e.href=g.current.canvas.toDataURL(),e.click()}},type:"ghost",icon:(0,r.jsx)(l.Z,{}),className:"download-btn"})]})};d.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},26826:function(e,t,n){"use strict";n.d(t,{m:function(){return p}});var r=n(85893),o=n(23657),i=n(92120),l=n(75543),a=n(3816);let{Text:s}=o.default,c={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null},u=e=>{let{prefix:t,value:n,suffix:o,title:i}=e;return(0,r.jsxs)("div",{children:[t,(0,r.jsx)("div",{children:(0,r.jsx)(s,{type:"secondary",children:i})}),(0,r.jsx)("div",{children:(0,r.jsxs)(s,{type:"secondary",children:[n,o||"%"]})})]})},d=e=>{let{title:t,value:n,prefix:o,suffix:l,color:a}=e,s=n>90?"red":a,c=(0,r.jsx)(u,{prefix:o,value:n,suffix:l,title:t});return(0,r.jsx)(i.Z,{type:"dashboard",percent:n,width:120,strokeColor:{"0%":a,"90%":s},format:()=>c})};d.defaultProps=c;let f=e=>{let{title:t,value:n,prefix:o,formatter:i}=e;return(0,r.jsx)(l.Z,{title:t,value:n,prefix:o,formatter:i})};f.defaultProps=c;let p=e=>{let{progress:t,centered:n}=e,o=t?d:f;return(0,r.jsx)(a.default,{type:"inner",children:(0,r.jsx)("div",{style:n?{display:"flex",alignItems:"center",justifyContent:"center"}:{},children:(0,r.jsx)(o,{...e})})})};p.defaultProps=c},39138:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(85893),o=n(23657),i=n(1461),l=n(93879),a=n(10227),s=n(78021),c=n(67294),u=n(5152),d=n.n(u),f=n(37039),p=n(11992),v=n(31112),m=n(26826),h=n(25889);let g=d()(()=>Promise.all([n.e(3247),n.e(6774)]).then(n.t.bind(n,76774,23)),{loadableGenerated:{webpack:()=>[76774]},ssr:!1}),x=d()(()=>Promise.all([n.e(3247),n.e(8818)]).then(n.t.bind(n,28818,23)),{loadableGenerated:{webpack:()=>[28818]},ssr:!1}),y=d()(()=>Promise.all([n.e(3247),n.e(1789)]).then(n.t.bind(n,41789,23)),{loadableGenerated:{webpack:()=>[41789]},ssr:!1});function b(){var e,t,n;let{t:u}=(0,f.$G)(),[d,h]=(0,c.useState)({cpu:[],memory:[],disk:[],message:""}),b=async()=>{try{let e=await (0,p.rQ)(p.nx);h({...e})}catch(e){h({...d,message:e.message})}};if((0,c.useEffect)(()=>{let e=null;return b(),e=setInterval(b,p.NE),()=>{clearInterval(e)}},[]),!d.cpu)return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.default.Title,{children:u("Hardware Info")}),(0,r.jsx)(i.Z,{style:{marginTop:"10px"},banner:!0,message:u("Please wait"),description:u("No hardware details have been collected yet."),type:"info"}),(0,r.jsx)(l.Z,{spinning:!0,style:{width:"100%",margin:"10px"}})]});let w=null===(e=d.cpu[d.cpu.length-1])||void 0===e?void 0:e.value,j=null===(t=d.memory[d.memory.length-1])||void 0===t?void 0:t.value,C=null===(n=d.disk[d.disk.length-1])||void 0===n?void 0:n.value,k=[{name:u("CPU"),color:"#B63FFF",data:d.cpu,pointStyle:"rect"},{name:u("Memory"),color:"#2087E2",data:d.memory,pointStyle:"circle"},{name:u("Disk"),color:"#FF7700",data:d.disk,pointStyle:"rectRounded"}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default.Title,{children:u("Hardware Info")}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.Z,{gutter:[16,16],justify:"space-around",children:[(0,r.jsx)(s.Z,{children:(0,r.jsx)(m.m,{title:k[0].name,value:Math.round(w)||0,prefix:(0,r.jsx)(x,{style:{color:k[0].color}}),color:k[0].color,progress:!0,centered:!0})}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(m.m,{title:k[1].name,value:Math.round(j)||0,prefix:(0,r.jsx)(g,{style:{color:k[1].color}}),color:k[1].color,progress:!0,centered:!0})}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(m.m,{title:k[2].name,value:Math.round(C)||0,prefix:(0,r.jsx)(y,{style:{color:k[2].color}}),color:k[2].color,progress:!0,centered:!0})})]}),(0,r.jsx)(v.k,{title:"% ".concat(u("used")),dataCollections:k,color:"#FF7700",unit:"%"})]})]})}b.getLayout=function(e){return(0,r.jsx)(h.l,{page:e})}},60057:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(4942),o=n(1413),i=n(97685),l=n(45987),a=n(67294),s=n(33322),c=n(93967),u=n.n(c),d={adjustX:1,adjustY:1},f=[0,0],p={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:f},topCenter:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:f},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:f},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:f},bottomCenter:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:f},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:f}},v=n(77524),m=n(15503),h=n(3761),g=v.Z.ESC,x=v.Z.TAB,y=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"],b=a.forwardRef(function(e,t){var n,c,d,f,v,b,w,j,C,k,E,Z,N,P,F,_,R=e.arrow,S=void 0!==R&&R,O=e.prefixCls,T=void 0===O?"rc-dropdown":O,M=e.transitionName,A=e.animation,L=e.align,V=e.placement,W=e.placements,D=e.getPopupContainer,I=e.showAction,G=e.hideAction,H=e.overlayClassName,Q=e.overlayStyle,U=e.visible,X=e.trigger,z=void 0===X?["hover"]:X,B=e.autoFocus,$=(0,l.Z)(e,y),Y=a.useState(),q=(0,i.Z)(Y,2),J=q[0],K=q[1],ee="visible"in e?U:J,et=a.useRef(null);a.useImperativeHandle(t,function(){return et.current}),d=(c={visible:ee,setTriggerVisible:K,triggerRef:et,onVisibleChange:e.onVisibleChange,autoFocus:B}).visible,f=c.setTriggerVisible,v=c.triggerRef,b=c.onVisibleChange,w=c.autoFocus,j=a.useRef(!1),C=function(){if(d&&v.current){var e,t,n,r;null===(e=v.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||null===(r=n.focus)||void 0===r||r.call(n),f(!1),"function"==typeof b&&b(!1)}},k=function(){var e,t,n,r,o=(0,h.tS)(null===(e=v.current)||void 0===e?void 0:null===(t=e.popupRef)||void 0===t?void 0:null===(n=t.current)||void 0===n?void 0:null===(r=n.getElement)||void 0===r?void 0:r.call(n))[0];return null!=o&&!!o.focus&&(o.focus(),j.current=!0,!0)},E=function(e){switch(e.keyCode){case g:C();break;case x:var t=!1;j.current||(t=k()),t?e.preventDefault():C()}},a.useEffect(function(){return d?(window.addEventListener("keydown",E),w&&(0,m.Z)(k,3),function(){window.removeEventListener("keydown",E),j.current=!1}):function(){j.current=!1}},[d]);var en=function(){var t=e.overlay;return"function"==typeof t?t():t},er=function(){var e=en();return a.createElement(a.Fragment,null,S&&a.createElement("div",{className:"".concat(T,"-arrow")}),e)},eo=G;return eo||-1===z.indexOf("contextMenu")||(eo=["click"]),a.createElement(s.Z,(0,o.Z)((0,o.Z)({builtinPlacements:void 0===W?p:W},$),{},{prefixCls:T,ref:et,popupClassName:u()(H,(0,r.Z)({},"".concat(T,"-show-arrow"),S)),popupStyle:Q,action:z,showAction:I,hideAction:eo||[],popupPlacement:void 0===V?"bottomLeft":V,popupAlign:L,popupTransitionName:M,popupAnimation:A,popupVisible:ee,stretch:(Z=e.minOverlayWidthMatchTrigger,N=e.alignPoint,"minOverlayWidthMatchTrigger"in e?Z:!N)?"minWidth":"",popup:"function"==typeof e.overlay?er:er(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;K(t),"function"==typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;K(!1),n&&n(t)},getPopupContainer:D}),(F=(P=e.children).props?P.props:{},_=u()(F.className,void 0!==(n=e.openClassName)?n:"".concat(T,"-open")),ee&&P?a.cloneElement(P,{className:_}):P))})},55945:function(e,t,n){"use strict";function r(e){return t=>{let n=(e?Math[e]:Math.trunc)(t);return 0===n?0:n}}n.d(t,{u:function(){return r}})},64077:function(e,t,n){"use strict";n.d(t,{_:function(){return o}});var r=n(46042);function o(e,t){return+(0,r.Q)(e)-+(0,r.Q)(t)}},94817:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var r=n(55945),o=n(64077);function i(e,t,n){let i=(0,o._)(e,t)/1e3;return(0,r.u)(null==n?void 0:n.roundingMethod)(i)}}},function(e){e.O(0,[2196,83,1287,3800,7786,443,9904,3657,1175,2502,4065,9307,2642,7039,6179,297,9,5889,3064,2888,9774,179],function(){return e(e.s=99096)}),_N_E=e.O()}]);