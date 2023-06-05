"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[687],{6283:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ae}});var o=t(9439),a=t(2791),r=t(9434),i=t(4942),s=t(1413),c=t(4925),u=t(3433),l=t(8182),d=["theme","type"],p=["delay","staleId"],f=function(e){return"number"==typeof e&&!isNaN(e)},m=function(e){return"string"==typeof e},h=function(e){return"function"==typeof e},g=function(e){return m(e)||h(e)?e:null},v=function(e){return(0,a.isValidElement)(e)||m(e)||h(e)||f(e)};function x(e){var n=e.enter,t=e.exit,o=e.appendPosition,r=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,d=e.done,p=e.nodeRef,f=e.isIn,m=r?"".concat(n,"--").concat(i):n,h=r?"".concat(t,"--").concat(i):t,g=(0,a.useRef)(0);return(0,a.useLayoutEffect)((function(){var e,n=p.current,t=m.split(" "),o=function e(o){var a;o.target===p.current&&(n.dispatchEvent(new Event("d")),n.removeEventListener("animationend",e),n.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(a=n.classList).remove.apply(a,(0,u.Z)(t)))};(e=n.classList).add.apply(e,(0,u.Z)(t)),n.addEventListener("animationend",o),n.addEventListener("animationcancel",o)}),[]),(0,a.useEffect)((function(){var e=p.current,n=function n(){e.removeEventListener("animationend",n),s?function(e,n,t){void 0===t&&(t=300);var o=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(t,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(n,t)}))}))}(e,d,l):d()};f||(c?n():(g.current=1,e.className+=" ".concat(h),e.addEventListener("animationend",n)))}),[f]),a.createElement(a.Fragment,null,o)}}function b(e,n){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:n}:{}}var y={list:new Map,emitQueue:new Map,on:function(e,n){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(n),this},off:function(e,n){if(n){var t=this.list.get(e).filter((function(e){return e!==n}));return this.list.set(e,t),this}return this.list.delete(e),this},cancelEmit:function(e){var n=this.emitQueue.get(e);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var n=arguments,t=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,u.Z)([].slice.call(n,1)))}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(a)}))}},T=function(e){var n=e.theme,t=e.type,o=(0,c.Z)(e,d);return a.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":"var(--toastify-icon-color-".concat(t,")")},o))},E={info:function(e){return a.createElement(T,(0,s.Z)({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return a.createElement(T,(0,s.Z)({},e),a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return a.createElement(T,(0,s.Z)({},e),a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return a.createElement(T,(0,s.Z)({},e),a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function Z(e){var n=(0,a.useReducer)((function(e){return e+1}),0),t=(0,o.Z)(n,2)[1],r=(0,a.useState)([]),i=(0,o.Z)(r,2),l=i[0],d=i[1],x=(0,a.useRef)(null),T=(0,a.useRef)(new Map).current,Z=function(e){return-1!==l.indexOf(e)},C=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:Z,getToast:function(e){return T.get(e)}}).current;function w(e){var n=e.containerId;!C.props.limit||n&&C.containerId!==n||(C.count-=C.queue.length,C.queue=[])}function A(e){d((function(n){return null==e?[]:n.filter((function(n){return n!==e}))}))}function I(){var e=C.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function k(e,n){var r=n.delay,i=n.staleId,u=(0,c.Z)(n,p);if(v(e)&&!function(e){return!x.current||C.props.enableMultiContainer&&e.containerId!==C.props.containerId||T.has(e.toastId)&&null==e.updateId}(u)){var l=u.toastId,d=u.updateId,Z=u.data,w=C.props,k=function(){return A(l)},O=null==d;O&&C.count++;var N,P,R=(0,s.Z)((0,s.Z)((0,s.Z)({},w),{},{style:w.toastStyle,key:C.toastKey++},Object.fromEntries(Object.entries(u).filter((function(e){var n=(0,o.Z)(e,2);n[0];return null!=n[1]})))),{},{toastId:l,updateId:d,data:Z,closeToast:k,isIn:!1,className:g(u.className||w.toastClassName),bodyClassName:g(u.bodyClassName||w.bodyClassName),progressClassName:g(u.progressClassName||w.progressClassName),autoClose:!u.isLoading&&(N=u.autoClose,P=w.autoClose,!1===N||f(N)&&N>0?N:P),deleteToast:function(){var e=b(T.get(l),"removed");T.delete(l),y.emit(4,e);var n=C.queue.length;if(C.count=null==l?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),n>0){var o=null==l?C.props.limit:1;if(1===n||1===o)C.displayedToast++,I();else{var a=o>n?n:o;C.displayedToast=a;for(var r=0;r<a;r++)I()}}else t()}});R.iconOut=function(e){var n=e.theme,t=e.type,o=e.isLoading,r=e.icon,i=null,s={theme:n,type:t};return!1===r||(h(r)?i=r(s):(0,a.isValidElement)(r)?i=(0,a.cloneElement)(r,s):m(r)||f(r)?i=r:o?i=E.spinner():function(e){return e in E}(t)&&(i=E[t](s))),i}(R),h(u.onOpen)&&(R.onOpen=u.onOpen),h(u.onClose)&&(R.onClose=u.onClose),R.closeButton=w.closeButton,!1===u.closeButton||v(u.closeButton)?R.closeButton=u.closeButton:!0===u.closeButton&&(R.closeButton=!v(w.closeButton)||w.closeButton);var S=e;(0,a.isValidElement)(e)&&!m(e.type)?S=(0,a.cloneElement)(e,{closeToast:k,toastProps:R,data:Z}):h(e)&&(S=e({closeToast:k,toastProps:R,data:Z})),w.limit&&w.limit>0&&C.count>w.limit&&O?C.queue.push({toastContent:S,toastProps:R,staleId:i}):f(r)?setTimeout((function(){L(S,R,i)}),r):L(S,R,i)}}function L(e,n,t){var o=n.toastId;t&&T.delete(t);var a={content:e,props:n};T.set(o,a),d((function(e){return[].concat((0,u.Z)(e),[o]).filter((function(e){return e!==t}))})),y.emit(4,b(a,null==a.props.updateId?"added":"updated"))}return(0,a.useEffect)((function(){return C.containerId=e.containerId,y.cancelEmit(3).on(0,k).on(1,(function(e){return x.current&&A(e)})).on(5,w).emit(2,C),function(){T.clear(),y.emit(3,C)}}),[]),(0,a.useEffect)((function(){C.props=e,C.isToastActive=Z,C.displayedToast=l.length})),{getToastToRender:function(n){var t=new Map,o=Array.from(T.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var n=e.props.position;t.has(n)||t.set(n,[]),t.get(n).push(e)})),Array.from(t,(function(e){return n(e[0],e[1])}))},containerRef:x,isToastActive:Z}}function C(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function A(e){var n=(0,a.useState)(!1),t=(0,o.Z)(n,2),r=t[0],i=t[1],s=(0,a.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],d=(0,a.useRef)(null),p=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,f=(0,a.useRef)(e),m=e.autoClose,g=e.pauseOnHover,v=e.closeToast,x=e.onClick,b=e.closeOnClick;function y(n){if(e.draggable){"touchstart"===n.nativeEvent.type&&n.nativeEvent.preventDefault(),p.didMove=!1,document.addEventListener("mousemove",A),document.addEventListener("mouseup",I),document.addEventListener("touchmove",A),document.addEventListener("touchend",I);var t=d.current;p.canCloseOnClick=!0,p.canDrag=!0,p.boundingRect=t.getBoundingClientRect(),t.style.transition="",p.x=C(n.nativeEvent),p.y=w(n.nativeEvent),"x"===e.draggableDirection?(p.start=p.x,p.removalDistance=t.offsetWidth*(e.draggablePercent/100)):(p.start=p.y,p.removalDistance=t.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(n){if(p.boundingRect){var t=p.boundingRect,o=t.top,a=t.bottom,r=t.left,i=t.right;"touchend"!==n.nativeEvent.type&&e.pauseOnHover&&p.x>=r&&p.x<=i&&p.y>=o&&p.y<=a?Z():E()}}function E(){i(!0)}function Z(){i(!1)}function A(n){var t=d.current;p.canDrag&&t&&(p.didMove=!0,r&&Z(),p.x=C(n),p.y=w(n),p.delta="x"===e.draggableDirection?p.x-p.start:p.y-p.start,p.start!==p.x&&(p.canCloseOnClick=!1),t.style.transform="translate".concat(e.draggableDirection,"(").concat(p.delta,"px)"),t.style.opacity=""+(1-Math.abs(p.delta/p.removalDistance)))}function I(){document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",I);var n=d.current;if(p.canDrag&&p.didMove&&n){if(p.canDrag=!1,Math.abs(p.delta)>p.removalDistance)return l(!0),void e.closeToast();n.style.transition="transform 0.2s, opacity 0.2s",n.style.transform="translate".concat(e.draggableDirection,"(0)"),n.style.opacity="1"}}(0,a.useEffect)((function(){f.current=e})),(0,a.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),h(e.onOpen)&&e.onOpen((0,a.isValidElement)(e.children)&&e.children.props),function(){var e=f.current;h(e.onClose)&&e.onClose((0,a.isValidElement)(e.children)&&e.children.props)}}),[]),(0,a.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||Z(),window.addEventListener("focus",E),window.addEventListener("blur",Z)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",Z))}}),[e.pauseOnFocusLoss]);var k={onMouseDown:y,onTouchStart:y,onMouseUp:T,onTouchEnd:T};return m&&g&&(k.onMouseEnter=Z,k.onMouseLeave=E),b&&(k.onClick=function(e){x&&x(e),p.canCloseOnClick&&v()}),{playToast:E,pauseToast:Z,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:k}}function I(e){var n=e.closeToast,t=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return a.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(t),type:"button",onClick:function(e){e.stopPropagation(),n(e)},"aria-label":r},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function k(e){var n=e.delay,t=e.isRunning,o=e.closeToast,r=e.type,c=void 0===r?"default":r,u=e.hide,d=e.className,p=e.style,f=e.controlledProgress,m=e.progress,g=e.rtl,v=e.isIn,x=e.theme,b=u||f&&0===m,y=(0,s.Z)((0,s.Z)({},p),{},{animationDuration:"".concat(n,"ms"),animationPlayState:t?"running":"paused",opacity:b?0:1});f&&(y.transform="scaleX(".concat(m,")"));var T=(0,l.Z)("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(x),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":g}),E=h(d)?d({rtl:g,type:c,defaultClassName:T}):(0,l.Z)(T,d);return a.createElement("div",(0,i.Z)({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:E,style:y},f&&m>=1?"onTransitionEnd":"onAnimationEnd",f&&m<1?null:function(){v&&o()}))}var L=function(e){var n=A(e),t=n.isRunning,o=n.preventExitTransition,r=n.toastRef,i=n.eventHandlers,c=e.closeButton,u=e.children,d=e.autoClose,p=e.onClick,f=e.type,m=e.hideProgressBar,g=e.closeToast,v=e.transition,x=e.position,b=e.className,y=e.style,T=e.bodyClassName,E=e.bodyStyle,Z=e.progressClassName,C=e.progressStyle,w=e.updateId,L=e.role,O=e.progress,N=e.rtl,P=e.toastId,R=e.deleteToast,S=e.isIn,_=e.isLoading,M=e.iconOut,B=e.closeOnClick,j=e.theme,D=(0,l.Z)("Toastify__toast","Toastify__toast-theme--".concat(j),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":B}),F=h(b)?b({rtl:N,position:x,type:f,defaultClassName:D}):(0,l.Z)(D,b),z=!!O||!d,H={closeToast:g,type:f,theme:j},Y=null;return!1===c||(Y=h(c)?c(H):(0,a.isValidElement)(c)?(0,a.cloneElement)(c,H):I(H)),a.createElement(v,{isIn:S,done:R,position:x,preventExitTransition:o,nodeRef:r},a.createElement("div",(0,s.Z)((0,s.Z)({id:P,onClick:p,className:F},i),{},{style:y,ref:r}),a.createElement("div",(0,s.Z)((0,s.Z)({},S&&{role:L}),{},{className:h(T)?T({type:f}):(0,l.Z)("Toastify__toast-body",T),style:E}),null!=M&&a.createElement("div",{className:(0,l.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!_})},M),a.createElement("div",null,u)),Y,a.createElement(k,(0,s.Z)((0,s.Z)({},w&&!z?{key:"pb-".concat(w)}:{}),{},{rtl:N,theme:j,delay:d,isRunning:t,isIn:S,closeToast:g,hide:m,type:f,style:C,className:Z,controlledProgress:z,progress:O||0}))))},O=function(e,n){return void 0===n&&(n=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:n}},N=x(O("bounce",!0)),P=(x(O("slide",!0)),x(O("zoom")),x(O("flip")),(0,a.forwardRef)((function(e,n){var t=Z(e),o=t.getToastToRender,r=t.containerRef,i=t.isToastActive,c=e.className,u=e.style,d=e.rtl,p=e.containerId;function f(e){var n=(0,l.Z)("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":d});return h(c)?c({position:e,rtl:d,defaultClassName:n}):(0,l.Z)(n,g(c))}return(0,a.useEffect)((function(){n&&(n.current=r.current)}),[]),a.createElement("div",{ref:r,className:"Toastify",id:p},o((function(e,n){var t=n.length?(0,s.Z)({},u):(0,s.Z)((0,s.Z)({},u),{},{pointerEvents:"none"});return a.createElement("div",{className:f(e),style:t,key:"container-".concat(e)},n.map((function(e,t){var o=e.content,r=e.props;return a.createElement(L,(0,s.Z)((0,s.Z)({},r),{},{isIn:i(r.toastId),style:(0,s.Z)((0,s.Z)({},r.style),{},{"--nth":t+1,"--len":n.length}),key:"toast-".concat(r.key)}),o)})))})))})));P.displayName="ToastContainer",P.defaultProps={position:"top-right",transition:N,autoClose:5e3,closeButton:I,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var R,S=new Map,_=[],M=1;function B(){return""+M++}function j(e){return e&&(m(e.toastId)||f(e.toastId))?e.toastId:B()}function D(e,n){return S.size>0?y.emit(0,e,n):_.push({content:e,options:n}),n.toastId}function F(e,n){return(0,s.Z)((0,s.Z)({},n),{},{type:n&&n.type||e,toastId:j(n)})}function z(e){return function(n,t){return D(n,F(e,t))}}function H(e,n){return D(e,F("default",n))}H.loading=function(e,n){return D(e,F("default",(0,s.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},n)))},H.promise=function(e,n,t){var o,a=n.pending,r=n.error,i=n.success;a&&(o=m(a)?H.loading(a,t):H.loading(a.render,(0,s.Z)((0,s.Z)({},t),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,n,a){if(null!=n){var r=(0,s.Z)((0,s.Z)((0,s.Z)({type:e},c),t),{},{data:a}),i=m(n)?{render:n}:n;return o?H.update(o,(0,s.Z)((0,s.Z)({},r),i)):H(i.render,(0,s.Z)((0,s.Z)({},r),i)),a}H.dismiss(o)},l=h(e)?e():e;return l.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",r,e)})),l},H.success=z("success"),H.info=z("info"),H.error=z("error"),H.warning=z("warning"),H.warn=H.warning,H.dark=function(e,n){return D(e,F("default",(0,s.Z)({theme:"dark"},n)))},H.dismiss=function(e){S.size>0?y.emit(1,e):_=_.filter((function(n){return null!=e&&n.options.toastId!==e}))},H.clearWaitingQueue=function(e){return void 0===e&&(e={}),y.emit(5,e)},H.isActive=function(e){var n=!1;return S.forEach((function(t){t.isToastActive&&t.isToastActive(e)&&(n=!0)})),n},H.update=function(e,n){void 0===n&&(n={}),setTimeout((function(){var t=function(e,n){var t=n.containerId,o=S.get(t||R);return o&&o.getToast(e)}(e,n);if(t){var o=t.props,a=t.content,r=(0,s.Z)((0,s.Z)((0,s.Z)({delay:100},o),n),{},{toastId:n.toastId||e,updateId:B()});r.toastId!==e&&(r.staleId=e);var i=r.render||a;delete r.render,D(i,r)}}),0)},H.done=function(e){H.update(e,{progress:1})},H.onChange=function(e){return y.on(4,e),function(){y.off(4,e)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},y.on(2,(function(e){R=e.containerId||e,S.set(R,e),_.forEach((function(e){y.emit(0,e.content,e.options)})),_=[]})).on(3,(function(e){S.delete(e.containerId||e),0===S.size&&y.off(0).off(1).off(5)}));var Y,G,J,Q,W,U,X,K,q,V,$,ee,ne=t(2286),te=t(2526),oe=t.p+"static/media/background.6c52ceea786ad6626067.png",ae=t(9351),re=t(168),ie=t(6444),se=t.p+"static/media/ellipse.619bf971a2d518bcc70c.png",ce=ie.ZP.li(Y||(Y=(0,re.Z)(["\n  position: relative;\n  width: 100%;\n  height: 460px;\n  padding: 28px 36px 36px;\n  color: #ebd8ff;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  text-align: center;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n\n  &:not(:last-child) {\n    @media (max-width: 767px) {\n      margin-bottom: 24px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    flex-basis: calc((100% / 2 - 40px));\n    margin: 40px 0 0 40px;\n  }\n\n  @media (min-width: 1280px) {\n    flex-basis: calc((100% / 3 - 58px));\n    margin: 58px 0 0 58px;\n  }\n"]))),ue=ie.ZP.img(G||(G=(0,re.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 76px;\n  height: auto;\n"]))),le=ie.ZP.img(J||(J=(0,re.Z)(["\n  width: 308px;\n  height: auto;\n  margin: 0 auto 88px;\n\n  @media (max-width: 767px) {\n    margin-bottom: 116px;\n  }\n\n  @media (min-width: 768px) and (max-width: 1279px) {\n    margin-bottom: 103px;\n  }\n"]))),de=ie.ZP.div(Q||(Q=(0,re.Z)(["\n  position: absolute;\n  top: 214px;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),pe=ie.ZP.div(W||(W=(0,re.Z)(["\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: 178px;\n  left: 128px;\n\n  @media (min-width: 768px) {\n    left: 136px;\n  }\n\n  @media (min-width: 1280px) {\n    left: 150px;\n  }\n\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"])),se),fe=ie.ZP.img(U||(U=(0,re.Z)(["\n  position: absolute;\n  top: 7px;\n  left: 12px;\n  width: 57px;\n  border-radius: 50%;\n"]))),me=ie.ZP.p(X||(X=(0,re.Z)(["\n  margin-bottom: 16px;\n"]))),he=ie.ZP.p(K||(K=(0,re.Z)(["\n  margin-bottom: 26px;\n"]))),ge=ie.ZP.button(q||(q=(0,re.Z)(["\n  margin: 0 auto;\n  width: 196px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #373737;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  font-family: inherit;\n  cursor: pointer;\n  border: none;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #e7e7e7;\n  }\n"]))),ve=(0,ie.ZP)(ge)(V||(V=(0,re.Z)(["\n  background-color: #5cd3a8;\n\n  &:hover {\n    background-color: #b8ecec;\n  }\n"]))),xe=t(184),be=function(e){var n=e.userCard,t=n.user,o=n.avatar,a=n.tweets,i=n.followers,s=n.following,c=(0,r.I0)(),u=(0,r.v9)(ne.xU),l=(0,r.v9)(ne.zh);return(0,xe.jsxs)(xe.Fragment,{children:[u&&!l&&(0,xe.jsx)(ae.Z,{}),(0,xe.jsxs)(ce,{children:[(0,xe.jsx)(ue,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAsCAYAAACZmXFCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR1SURBVHgB7Zw/TxtBEMXHUSiIFCNBJCigAAkihQIKipAiRep85jSRAkVSUJjCSKbABRQu7Eh24UhkHp6LDnt3b+9mFyMyP2llOO+N9m6f5t7+Obfu7++/klHQabVa16SA7+c2fxyT8cArMsocskA2yEiGCWyRIxbZGzKSYAJbBOI6YZG9JkONCcxNm8t7MtSYwPzschbbJUOFCSyMmX4lJrBqzPQrMIFVY6ZfgQksDjP9DTGBxWOmvwEmsHqY6a9JLl8x5XLHZSh/T7isclnhssZlnWbepmnsEZdb+bsAsd9xeauIHQNM/zmvWY7p6enQ7NrL4LpPIuvWBdbgkBSkFtiAS5dv/qCqomSCAy6xGQFiwkL0NcefeupcS+wd/tinPEIrTP8PbscfelpG8/c2MMIdxfRDCI5NWlIKrNZOBLn4M76IPZoJLdSWGy6XAWHNx0b9G459ILFTU5j+DhlBUnmwi6bbXPi8HoU7ChnxIlZcc7G7OJ/yYKY/ghQC60rGaISk+H3P130RSWMyi8xMfwXaR+QoJAARDww9jOhE6o9L3+P4R3J7JdQLxca5bYk9DfkNtFGEkEMMyzT9IXY84u/Ne0e5l65srPawWoE5H23SYOzq3HR81y2JEnV8F9H3dRrH2OKPI5qJqzg2pnDGw/FTSs8yTX+Ibc/xPpf5duI+5vCqKoGNA1nDKS7hQLYV3wXqgL7roIjLNSx/I7HJJTK0VUSYY2Rppt+DRmC3roMyRVAWDjp14qiKTikLdK3UnmHgkfOBwkBkA4/4IepcxnxXBFx7MPKS0Qhs4jm+Nff/VcwggDsHj6/CM/z21EHsmAwEkbsENqS8YFKyT8Y/NKNIn8BWSY8ve7UpjnXP8afwSJbBSmgy2AqlpSxYX7tiO2+qPL8p8H7PbTS5VDQZzCcC7foX8C5/UBw5s6uPnnbO7iWiEZivs+b91irmY0ol5jHnnK8S4x6TIe48x9coDxhRX5KxgEZgO66DIoLyshHmV05LZY+qWQnMkF9QmF5gUBGaFmkKBH9OhhONwLwi4A7GfJDLj8ADxa7whwT83RO768skMn2SYw7s1zOcxX82aGfykZ3OXF8Ua4AlEWIEN66xaL3N5yIbjRyxMd3wjb/HIw+P6oc9YhWx9yk9XWmL4UG72L0hW2K8IONIGTbYEXEcetlCYt5KfG9saWPq7GWmPoIUuykOtNtWJMu5/BEGBJ80b/Rk2hNmpj6SVPvBsG3lsK4QsCiO82hm/n3zahDZ57rvJpZiJxcXmamPJuWOVmSxTe7UK/4chIyvZCws+2DRO2bCFuL6wudhGaZbEbvYerJL6SeDwTJNfduxjbnu3B5irCpjRNPK+AN0GO0VL2gAiASChri0HT8qxR9LPMRvU549XwWV28LtB+gek/Nt5aKjtyg9bYpfl0xFr6X89cP/EXsvMo6RmfpmmMCqwSP4JxmNMIFVYzP1CkxgYTo2U6/DBObHTH0CTGBuzNQnwgS2iJn6hJjAFjFTnxAT2GPM1CfmL+yVuehCxcKmAAAAAElFTkSuQmCC"}),(0,xe.jsx)(le,{src:oe}),(0,xe.jsx)(de,{}),(0,xe.jsx)(pe,{children:(0,xe.jsx)(fe,{src:o,alt:t})}),(0,xe.jsxs)(me,{children:[a," tweets"]}),(0,xe.jsxs)(he,{children:[String((i/1e3).toFixed(3)).replace(".",",")," followers"]}),s?(0,xe.jsx)(ve,{type:"button",onClick:function(){return H.warning("You have successfully unsubscribed from ".concat(t)),c((0,te.Wi)({userCard:n,value:-1}))},children:"following"}):(0,xe.jsx)(ge,{type:"button",onClick:function(){return H.success("You have successfully subscribed on ".concat(t)),c((0,te.Wi)({userCard:n,value:1}))},children:"follow"})]}),(0,xe.jsx)(P,{autoClose:2e3,theme:"dark"})]})},ye=ie.ZP.ul($||($=(0,re.Z)(["\n  display: flex;\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n  }\n\n  @media (min-width: 768px) {\n    margin-bottom: 40px;\n    flex-wrap: wrap;\n    margin-right: auto;\n\n    margin-left: calc(-1 * 40px);\n    margin-top: calc(-1 * 40px);\n  }\n\n  @media (min-width: 1280px) {\n    margin-left: calc(-1 * 58px);\n    margin-top: calc(-1 * 58px);\n  }\n"]))),Te=function(){var e=(0,r.v9)(ne.P2);return(0,xe.jsx)(ye,{children:e.map((function(e){return(0,xe.jsx)(be,{userCard:e},e.id)}))})},Ee=t(2330),Ze=t(1429),Ce=t(1087),we=(0,ie.ZP)(Ce.OL)(ee||(ee=(0,re.Z)(["\n  margin: 0 auto 12px 0;\n  width: 76px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #373737;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 3;\n  font-family: inherit;\n  cursor: pointer;\n  border: none;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #fff;\n  }\n"]))),Ae=function(){var e=(0,r.I0)(),n=(0,r.v9)(ne.xU),t=(0,r.v9)(ne.zh),i=(0,r.v9)(ne.YN),s=(0,r.v9)(ne.aT),c=(0,a.useState)(1),u=(0,o.Z)(c,2),l=u[0],d=u[1];return(0,a.useEffect)((function(){e((0,Ze.b)(Ee.H.all)),e(1===l?(0,te.uh)():(0,te.jv)(l))}),[e,l]),(0,xe.jsxs)(xe.Fragment,{children:[n&&!t&&(0,xe.jsx)(ae.Z,{}),(0,xe.jsx)(we,{to:"/",children:"Go back"}),(0,xe.jsx)(Te,{}),15!==i.length&&"all"===s&&(0,xe.jsx)(ge,{type:"button",onClick:function(){return d((function(e){return e+1}))},children:"Load more"}),(0,xe.jsx)(P,{autoClose:2e3,theme:"dark"})]})}}}]);
//# sourceMappingURL=687.11c78aad.chunk.js.map