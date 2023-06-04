"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[687],{6283:function(e,t,n){n.r(t),n.d(t,{default:function(){return Le}});var o=n(9439),a=n(2791),r=n(9434),i=n(4942),s=n(1413),c=n(4925),u=n(3433),l=n(8182),d=["theme","type"],f=["delay","staleId"],p=function(e){return"number"==typeof e&&!isNaN(e)},m=function(e){return"string"==typeof e},g=function(e){return"function"==typeof e},h=function(e){return m(e)||g(e)?e:null},v=function(e){return(0,a.isValidElement)(e)||m(e)||g(e)||p(e)};function x(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=r?"".concat(t,"--").concat(i):t,g=r?"".concat(n,"--").concat(i):n,h=(0,a.useRef)(0);return(0,a.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var a;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==o.type&&(a=t.classList).remove.apply(a,(0,u.Z)(n)))};(e=t.classList).add.apply(e,(0,u.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,a.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};p||(c?t():(h.current=1,e.className+=" ".concat(g),e.addEventListener("animationend",t)))}),[p]),a.createElement(a.Fragment,null,o)}}function y(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var b={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,u.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},T=function(e){var t=e.theme,n=e.type,o=(0,c.Z)(e,d);return a.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},E={info:function(e){return a.createElement(T,(0,s.Z)({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return a.createElement(T,(0,s.Z)({},e),a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return a.createElement(T,(0,s.Z)({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return a.createElement(T,(0,s.Z)({},e),a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function Z(e){var t=(0,a.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,a.useState)([]),i=(0,o.Z)(r,2),l=i[0],d=i[1],x=(0,a.useRef)(null),T=(0,a.useRef)(new Map).current,Z=function(e){return-1!==l.indexOf(e)},C=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:Z,getToast:function(e){return T.get(e)}}).current;function A(e){var t=e.containerId;!C.props.limit||t&&C.containerId!==t||(C.count-=C.queue.length,C.queue=[])}function I(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function w(){var e=C.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function k(e,t){var r=t.delay,i=t.staleId,u=(0,c.Z)(t,f);if(v(e)&&!function(e){return!x.current||C.props.enableMultiContainer&&e.containerId!==C.props.containerId||T.has(e.toastId)&&null==e.updateId}(u)){var l=u.toastId,d=u.updateId,Z=u.data,A=C.props,k=function(){return I(l)},O=null==d;O&&C.count++;var N,P,R=(0,s.Z)((0,s.Z)((0,s.Z)({},A),{},{style:A.toastStyle,key:C.toastKey++},Object.fromEntries(Object.entries(u).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:l,updateId:d,data:Z,closeToast:k,isIn:!1,className:h(u.className||A.toastClassName),bodyClassName:h(u.bodyClassName||A.bodyClassName),progressClassName:h(u.progressClassName||A.progressClassName),autoClose:!u.isLoading&&(N=u.autoClose,P=A.autoClose,!1===N||p(N)&&N>0?N:P),deleteToast:function(){var e=y(T.get(l),"removed");T.delete(l),b.emit(4,e);var t=C.queue.length;if(C.count=null==l?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),t>0){var o=null==l?C.props.limit:1;if(1===t||1===o)C.displayedToast++,w();else{var a=o>t?t:o;C.displayedToast=a;for(var r=0;r<a;r++)w()}}else n()}});R.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,i=null,s={theme:t,type:n};return!1===r||(g(r)?i=r(s):(0,a.isValidElement)(r)?i=(0,a.cloneElement)(r,s):m(r)||p(r)?i=r:o?i=E.spinner():function(e){return e in E}(n)&&(i=E[n](s))),i}(R),g(u.onOpen)&&(R.onOpen=u.onOpen),g(u.onClose)&&(R.onClose=u.onClose),R.closeButton=A.closeButton,!1===u.closeButton||v(u.closeButton)?R.closeButton=u.closeButton:!0===u.closeButton&&(R.closeButton=!v(A.closeButton)||A.closeButton);var S=e;(0,a.isValidElement)(e)&&!m(e.type)?S=(0,a.cloneElement)(e,{closeToast:k,toastProps:R,data:Z}):g(e)&&(S=e({closeToast:k,toastProps:R,data:Z})),A.limit&&A.limit>0&&C.count>A.limit&&O?C.queue.push({toastContent:S,toastProps:R,staleId:i}):p(r)?setTimeout((function(){L(S,R,i)}),r):L(S,R,i)}}function L(e,t,n){var o=t.toastId;n&&T.delete(n);var a={content:e,props:t};T.set(o,a),d((function(e){return[].concat((0,u.Z)(e),[o]).filter((function(e){return e!==n}))})),b.emit(4,y(a,null==a.props.updateId?"added":"updated"))}return(0,a.useEffect)((function(){return C.containerId=e.containerId,b.cancelEmit(3).on(0,k).on(1,(function(e){return x.current&&I(e)})).on(5,A).emit(2,C),function(){T.clear(),b.emit(3,C)}}),[]),(0,a.useEffect)((function(){C.props=e,C.isToastActive=Z,C.displayedToast=l.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(T.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:x,isToastActive:Z}}function C(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function A(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function I(e){var t=(0,a.useState)(!1),n=(0,o.Z)(t,2),r=n[0],i=n[1],s=(0,a.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],d=(0,a.useRef)(null),f=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,a.useRef)(e),m=e.autoClose,h=e.pauseOnHover,v=e.closeToast,x=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",I),document.addEventListener("mouseup",w),document.addEventListener("touchmove",I),document.addEventListener("touchend",w);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=C(t.nativeEvent),f.y=A(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,a=n.bottom,r=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=r&&f.x<=i&&f.y>=o&&f.y<=a?Z():E()}}function E(){i(!0)}function Z(){i(!1)}function I(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&Z(),f.x=C(t),f.y=A(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function w(){document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",w);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,a.useEffect)((function(){p.current=e})),(0,a.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),g(e.onOpen)&&e.onOpen((0,a.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;g(e.onClose)&&e.onClose((0,a.isValidElement)(e.children)&&e.children.props)}}),[]),(0,a.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||Z(),window.addEventListener("focus",E),window.addEventListener("blur",Z)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",Z))}}),[e.pauseOnFocusLoss]);var k={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&h&&(k.onMouseEnter=Z,k.onMouseLeave=E),y&&(k.onClick=function(e){x&&x(e),f.canCloseOnClick&&v()}),{playToast:E,pauseToast:Z,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:k}}function w(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return a.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function k(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,c=void 0===r?"default":r,u=e.hide,d=e.className,f=e.style,p=e.controlledProgress,m=e.progress,h=e.rtl,v=e.isIn,x=e.theme,y=u||p&&0===m,b=(0,s.Z)((0,s.Z)({},f),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});p&&(b.transform="scaleX(".concat(m,")"));var T=(0,l.Z)("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(x),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":h}),E=g(d)?d({rtl:h,type:c,defaultClassName:T}):(0,l.Z)(T,d);return a.createElement("div",(0,i.Z)({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:E,style:b},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){v&&o()}))}var L=function(e){var t=I(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,i=t.eventHandlers,c=e.closeButton,u=e.children,d=e.autoClose,f=e.onClick,p=e.type,m=e.hideProgressBar,h=e.closeToast,v=e.transition,x=e.position,y=e.className,b=e.style,T=e.bodyClassName,E=e.bodyStyle,Z=e.progressClassName,C=e.progressStyle,A=e.updateId,L=e.role,O=e.progress,N=e.rtl,P=e.toastId,R=e.deleteToast,S=e.isIn,_=e.isLoading,M=e.iconOut,B=e.closeOnClick,j=e.theme,D=(0,l.Z)("Toastify__toast","Toastify__toast-theme--".concat(j),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":B}),z=g(y)?y({rtl:N,position:x,type:p,defaultClassName:D}):(0,l.Z)(D,y),F=!!O||!d,H={closeToast:h,type:p,theme:j},Y=null;return!1===c||(Y=g(c)?c(H):(0,a.isValidElement)(c)?(0,a.cloneElement)(c,H):w(H)),a.createElement(v,{isIn:S,done:R,position:x,preventExitTransition:o,nodeRef:r},a.createElement("div",(0,s.Z)((0,s.Z)({id:P,onClick:f,className:z},i),{},{style:b,ref:r}),a.createElement("div",(0,s.Z)((0,s.Z)({},S&&{role:L}),{},{className:g(T)?T({type:p}):(0,l.Z)("Toastify__toast-body",T),style:E}),null!=M&&a.createElement("div",{className:(0,l.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!_})},M),a.createElement("div",null,u)),Y,a.createElement(k,(0,s.Z)((0,s.Z)({},A&&!F?{key:"pb-".concat(A)}:{}),{},{rtl:N,theme:j,delay:d,isRunning:n,isIn:S,closeToast:h,hide:m,type:p,style:C,className:Z,controlledProgress:F,progress:O||0}))))},O=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},N=x(O("bounce",!0)),P=(x(O("slide",!0)),x(O("zoom")),x(O("flip")),(0,a.forwardRef)((function(e,t){var n=Z(e),o=n.getToastToRender,r=n.containerRef,i=n.isToastActive,c=e.className,u=e.style,d=e.rtl,f=e.containerId;function p(e){var t=(0,l.Z)("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":d});return g(c)?c({position:e,rtl:d,defaultClassName:t}):(0,l.Z)(t,h(c))}return(0,a.useEffect)((function(){t&&(t.current=r.current)}),[]),a.createElement("div",{ref:r,className:"Toastify",id:f},o((function(e,t){var n=t.length?(0,s.Z)({},u):(0,s.Z)((0,s.Z)({},u),{},{pointerEvents:"none"});return a.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return a.createElement(L,(0,s.Z)((0,s.Z)({},r),{},{isIn:i(r.toastId),style:(0,s.Z)((0,s.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));P.displayName="ToastContainer",P.defaultProps={position:"top-right",transition:N,autoClose:5e3,closeButton:w,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var R,S=new Map,_=[],M=1;function B(){return""+M++}function j(e){return e&&(m(e.toastId)||p(e.toastId))?e.toastId:B()}function D(e,t){return S.size>0?b.emit(0,e,t):_.push({content:e,options:t}),t.toastId}function z(e,t){return(0,s.Z)((0,s.Z)({},t),{},{type:t&&t.type||e,toastId:j(t)})}function F(e){return function(t,n){return D(t,z(e,n))}}function H(e,t){return D(e,z("default",t))}H.loading=function(e,t){return D(e,z("default",(0,s.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},H.promise=function(e,t,n){var o,a=t.pending,r=t.error,i=t.success;a&&(o=m(a)?H.loading(a,n):H.loading(a.render,(0,s.Z)((0,s.Z)({},n),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,a){if(null!=t){var r=(0,s.Z)((0,s.Z)((0,s.Z)({type:e},c),n),{},{data:a}),i=m(t)?{render:t}:t;return o?H.update(o,(0,s.Z)((0,s.Z)({},r),i)):H(i.render,(0,s.Z)((0,s.Z)({},r),i)),a}H.dismiss(o)},l=g(e)?e():e;return l.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",r,e)})),l},H.success=F("success"),H.info=F("info"),H.error=F("error"),H.warning=F("warning"),H.warn=H.warning,H.dark=function(e,t){return D(e,z("default",(0,s.Z)({theme:"dark"},t)))},H.dismiss=function(e){S.size>0?b.emit(1,e):_=_.filter((function(t){return null!=e&&t.options.toastId!==e}))},H.clearWaitingQueue=function(e){return void 0===e&&(e={}),b.emit(5,e)},H.isActive=function(e){var t=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},H.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=S.get(n||R);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,a=n.content,r=(0,s.Z)((0,s.Z)((0,s.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:B()});r.toastId!==e&&(r.staleId=e);var i=r.render||a;delete r.render,D(i,r)}}),0)},H.done=function(e){H.update(e,{progress:1})},H.onChange=function(e){return b.on(4,e),function(){b.off(4,e)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},b.on(2,(function(e){R=e.containerId||e,S.set(R,e),_.forEach((function(e){b.emit(0,e.content,e.options)})),_=[]})).on(3,(function(e){S.delete(e.containerId||e),0===S.size&&b.off(0).off(1).off(5)}));var Y,G,J,Q,U,W,X,K,q,V,$,ee,te,ne,oe,ae=n(2286),re=n(168),ie=n(6444),se=n.p+"static/media/ellipse.619bf971a2d518bcc70c.png",ce=ie.ZP.li(Y||(Y=(0,re.Z)(["\n  position: relative;\n  width: 380px;\n  height: 460px;\n  color: #ebd8ff;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  text-align: center;\n  text-transform: uppercase;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n\n  flex-basis: calc((100% / 3 - 70px));\n  margin-left: 70px;\n  margin-top: 70px;\n\n  &:not(:last-child) {\n    margin-bottom: 24px;\n  }\n"]))),ue=ie.ZP.img(G||(G=(0,re.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 76px;\n  height: auto;\n"]))),le=ie.ZP.img(J||(J=(0,re.Z)(["\n  width: 308px;\n  height: auto;\n  margin: 28px auto 88px;\n"]))),de=ie.ZP.div(Q||(Q=(0,re.Z)(["\n  position: absolute;\n  top: 214px;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),fe=ie.ZP.div(U||(U=(0,re.Z)(["\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: 178px;\n  left: 150px;\n\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"])),se),pe=ie.ZP.img(W||(W=(0,re.Z)(["\n  position: absolute;\n  top: 7px;\n  left: 12px;\n  width: 57px;\n  border-radius: 50%;\n"]))),me=ie.ZP.p(X||(X=(0,re.Z)(["\n  margin-bottom: 16px;\n"]))),ge=ie.ZP.p(K||(K=(0,re.Z)(["\n  margin-bottom: 26px;\n"]))),he=ie.ZP.button(q||(q=(0,re.Z)(["\n  margin: 0 auto;\n  width: 196px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #373737;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  font-family: inherit;\n  cursor: pointer;\n  border: none;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #e7e7e7;\n  }\n"]))),ve=(0,ie.ZP)(he)(V||(V=(0,re.Z)(["\n  background-color: #5cd3a8;\n\n  &:hover {\n    background-color: #b8ecec;\n  }\n"]))),xe=n.p+"static/media/background.6c52ceea786ad6626067.png",ye=n(9351),be=n(2526),Te=n(184),Ee=function(e){var t=e.user,n=t.avatar,o=t.tweets,a=t.followers,i=t.following,s=(0,r.I0)(),c=(0,r.v9)(ae.xU),u=(0,r.v9)(ae.zh);return(0,Te.jsxs)(Te.Fragment,{children:[c&&!u&&(0,Te.jsx)(ye.Z,{}),(0,Te.jsxs)(ce,{children:[(0,Te.jsx)(ue,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAsCAYAAACZmXFCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR1SURBVHgB7Zw/TxtBEMXHUSiIFCNBJCigAAkihQIKipAiRep85jSRAkVSUJjCSKbABRQu7Eh24UhkHp6LDnt3b+9mFyMyP2llOO+N9m6f5t7+Obfu7++/klHQabVa16SA7+c2fxyT8cArMsocskA2yEiGCWyRIxbZGzKSYAJbBOI6YZG9JkONCcxNm8t7MtSYwPzschbbJUOFCSyMmX4lJrBqzPQrMIFVY6ZfgQksDjP9DTGBxWOmvwEmsHqY6a9JLl8x5XLHZSh/T7isclnhssZlnWbepmnsEZdb+bsAsd9xeauIHQNM/zmvWY7p6enQ7NrL4LpPIuvWBdbgkBSkFtiAS5dv/qCqomSCAy6xGQFiwkL0NcefeupcS+wd/tinPEIrTP8PbscfelpG8/c2MMIdxfRDCI5NWlIKrNZOBLn4M76IPZoJLdSWGy6XAWHNx0b9G459ILFTU5j+DhlBUnmwi6bbXPi8HoU7ChnxIlZcc7G7OJ/yYKY/ghQC60rGaISk+H3P130RSWMyi8xMfwXaR+QoJAARDww9jOhE6o9L3+P4R3J7JdQLxca5bYk9DfkNtFGEkEMMyzT9IXY84u/Ne0e5l65srPawWoE5H23SYOzq3HR81y2JEnV8F9H3dRrH2OKPI5qJqzg2pnDGw/FTSs8yTX+Ibc/xPpf5duI+5vCqKoGNA1nDKS7hQLYV3wXqgL7roIjLNSx/I7HJJTK0VUSYY2Rppt+DRmC3roMyRVAWDjp14qiKTikLdK3UnmHgkfOBwkBkA4/4IepcxnxXBFx7MPKS0Qhs4jm+Nff/VcwggDsHj6/CM/z21EHsmAwEkbsENqS8YFKyT8Y/NKNIn8BWSY8ve7UpjnXP8afwSJbBSmgy2AqlpSxYX7tiO2+qPL8p8H7PbTS5VDQZzCcC7foX8C5/UBw5s6uPnnbO7iWiEZivs+b91irmY0ol5jHnnK8S4x6TIe48x9coDxhRX5KxgEZgO66DIoLyshHmV05LZY+qWQnMkF9QmF5gUBGaFmkKBH9OhhONwLwi4A7GfJDLj8ADxa7whwT83RO768skMn2SYw7s1zOcxX82aGfykZ3OXF8Ua4AlEWIEN66xaL3N5yIbjRyxMd3wjb/HIw+P6oc9YhWx9yk9XWmL4UG72L0hW2K8IONIGTbYEXEcetlCYt5KfG9saWPq7GWmPoIUuykOtNtWJMu5/BEGBJ80b/Rk2hNmpj6SVPvBsG3lsK4QsCiO82hm/n3zahDZ57rvJpZiJxcXmamPJuWOVmSxTe7UK/4chIyvZCws+2DRO2bCFuL6wudhGaZbEbvYerJL6SeDwTJNfduxjbnu3B5irCpjRNPK+AN0GO0VL2gAiASChri0HT8qxR9LPMRvU549XwWV28LtB+gek/Nt5aKjtyg9bYpfl0xFr6X89cP/EXsvMo6RmfpmmMCqwSP4JxmNMIFVYzP1CkxgYTo2U6/DBObHTH0CTGBuzNQnwgS2iJn6hJjAFjFTnxAT2GPM1CfmL+yVuehCxcKmAAAAAElFTkSuQmCC"}),(0,Te.jsx)(le,{src:xe}),(0,Te.jsx)(de,{}),(0,Te.jsx)(fe,{children:(0,Te.jsx)(pe,{src:n,alt:"User image"})}),(0,Te.jsxs)(me,{children:[o," tweets"]}),(0,Te.jsxs)(ge,{children:[String((a/1e3).toFixed(3)).replace(".",",")," followers"]}),i?(0,Te.jsx)(ve,{type:"button",onClick:function(){return s((0,be.Wi)({user:t,value:-1}))},children:"following"}):(0,Te.jsx)(he,{type:"button",onClick:function(){return s((0,be.Wi)({user:t,value:1}))},children:"follow"})]}),(0,Te.jsx)(P,{autoClose:2e3,theme:"dark"})]})},Ze=ie.ZP.ul($||($=(0,re.Z)(["\n  font-weight: 700;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: auto;\n  margin-bottom: 60px;\n\n  margin-left: calc(-1 * 70px);\n  margin-top: calc(-1 * 70px);\n"]))),Ce=function(){var e=(0,r.v9)(ae.P2);return(0,Te.jsx)(Ze,{children:e.map((function(e){return(0,Te.jsx)(Ee,{user:e},e.id)}))})},Ae=n(2330),Ie=n(1429),we=n(1087),ke=(0,ie.ZP)(we.OL)(ee||(ee=(0,re.Z)(["\n  margin: 0 auto 12px 0;\n  width: 76px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #373737;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 3;\n  font-family: inherit;\n  cursor: pointer;\n  border: none;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #fff;\n  }\n"]))),Le=(ie.ZP.h2(te||(te=(0,re.Z)(["\n  font-size: 32px;\n  line-height: 1.5;\n  margin-bottom: 16px;\n"]))),ie.ZP.div(ne||(ne=(0,re.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),ie.ZP.div(oe||(oe=(0,re.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),function(){var e=(0,r.I0)(),t=(0,r.v9)(ae.xU),n=(0,r.v9)(ae.zh),i=(0,r.v9)(ae.YN),s=(0,r.v9)(ae.aT),c=(0,a.useState)(1),u=(0,o.Z)(c,2),l=u[0],d=u[1];return(0,a.useEffect)((function(){e((0,Ie.b)(Ae.H.all)),e(1===l?(0,be.uh)():(0,be.jv)(l))}),[e,l]),(0,Te.jsxs)(Te.Fragment,{children:[t&&!n&&(0,Te.jsx)(ye.Z,{}),(0,Te.jsx)(ke,{to:"/",children:"Go back"}),(0,Te.jsx)(Ce,{}),15!==i.length&&"all"===s&&(0,Te.jsx)(he,{type:"button",onClick:function(){return d((function(e){return e+1}))},children:"Load more"}),(0,Te.jsx)(P,{autoClose:2e3,theme:"dark"})]})})}}]);
//# sourceMappingURL=687.c67fefc5.chunk.js.map