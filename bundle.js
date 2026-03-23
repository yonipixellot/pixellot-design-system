(()=>{var oy=Object.create;var xu=Object.defineProperty;var iy=Object.getOwnPropertyDescriptor;var ry=Object.getOwnPropertyNames;var ny=Object.getPrototypeOf,sy=Object.prototype.hasOwnProperty;var Ta=(e,a)=>()=>(a||e((a={exports:{}}).exports,a),a.exports);var dy=(e,a,t,l)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of ry(a))!sy.call(e,r)&&r!==t&&xu(e,r,{get:()=>a[r],enumerable:!(l=iy(a,r))||l.enumerable});return e};var F=(e,a,t)=>(t=e!=null?oy(ny(e)):{},dy(a||!e||!e.__esModule?xu(t,"default",{value:e,enumerable:!0}):t,e));var Au=Ta(pe=>{"use strict";function wn(e,a){var t=e.length;e.push(a);e:for(;0<t;){var l=t-1>>>1,r=e[l];if(0<Fi(r,a))e[l]=a,e[t]=r,t=l;else break e}}function Da(e){return e.length===0?null:e[0]}function Ei(e){if(e.length===0)return null;var a=e[0],t=e.pop();if(t!==a){e[0]=t;e:for(var l=0,r=e.length,n=r>>>1;l<n;){var s=2*(l+1)-1,d=e[s],c=s+1,p=e[c];if(0>Fi(d,t))c<r&&0>Fi(p,d)?(e[l]=p,e[c]=t,l=c):(e[l]=d,e[s]=t,l=s);else if(c<r&&0>Fi(p,t))e[l]=p,e[c]=t,l=c;else break e}}return a}function Fi(e,a){var t=e.sortIndex-a.sortIndex;return t!==0?t:e.id-a.id}pe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(bu=performance,pe.unstable_now=function(){return bu.now()}):(Ln=Date,Su=Ln.now(),pe.unstable_now=function(){return Ln.now()-Su});var bu,Ln,Su,Ga=[],pt=[],uy=1,da=null,He=3,zn=!1,Bo=!1,Ao=!1,Bn=!1,ku=typeof setTimeout=="function"?setTimeout:null,Iu=typeof clearTimeout=="function"?clearTimeout:null,Cu=typeof setImmediate<"u"?setImmediate:null;function Mi(e){for(var a=Da(pt);a!==null;){if(a.callback===null)Ei(pt);else if(a.startTime<=e)Ei(pt),a.sortIndex=a.expirationTime,wn(Ga,a);else break;a=Da(pt)}}function An(e){if(Ao=!1,Mi(e),!Bo)if(Da(Ga)!==null)Bo=!0,zl||(zl=!0,wl());else{var a=Da(pt);a!==null&&Tn(An,a.startTime-e)}}var zl=!1,To=-1,wu=5,zu=-1;function Bu(){return Bn?!0:!(pe.unstable_now()-zu<wu)}function kn(){if(Bn=!1,zl){var e=pe.unstable_now();zu=e;var a=!0;try{e:{Bo=!1,Ao&&(Ao=!1,Iu(To),To=-1),zn=!0;var t=He;try{a:{for(Mi(e),da=Da(Ga);da!==null&&!(da.expirationTime>e&&Bu());){var l=da.callback;if(typeof l=="function"){da.callback=null,He=da.priorityLevel;var r=l(da.expirationTime<=e);if(e=pe.unstable_now(),typeof r=="function"){da.callback=r,Mi(e),a=!0;break a}da===Da(Ga)&&Ei(Ga),Mi(e)}else Ei(Ga);da=Da(Ga)}if(da!==null)a=!0;else{var n=Da(pt);n!==null&&Tn(An,n.startTime-e),a=!1}}break e}finally{da=null,He=t,zn=!1}a=void 0}}finally{a?wl():zl=!1}}}var wl;typeof Cu=="function"?wl=function(){Cu(kn)}:typeof MessageChannel<"u"?(In=new MessageChannel,Lu=In.port2,In.port1.onmessage=kn,wl=function(){Lu.postMessage(null)}):wl=function(){ku(kn,0)};var In,Lu;function Tn(e,a){To=ku(function(){e(pe.unstable_now())},a)}pe.unstable_IdlePriority=5;pe.unstable_ImmediatePriority=1;pe.unstable_LowPriority=4;pe.unstable_NormalPriority=3;pe.unstable_Profiling=null;pe.unstable_UserBlockingPriority=2;pe.unstable_cancelCallback=function(e){e.callback=null};pe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):wu=0<e?Math.floor(1e3/e):5};pe.unstable_getCurrentPriorityLevel=function(){return He};pe.unstable_next=function(e){switch(He){case 1:case 2:case 3:var a=3;break;default:a=He}var t=He;He=a;try{return e()}finally{He=t}};pe.unstable_requestPaint=function(){Bn=!0};pe.unstable_runWithPriority=function(e,a){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=He;He=e;try{return a()}finally{He=t}};pe.unstable_scheduleCallback=function(e,a,t){var l=pe.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?l+t:l):t=l,e){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,e={id:uy++,callback:a,priorityLevel:e,startTime:t,expirationTime:r,sortIndex:-1},t>l?(e.sortIndex=t,wn(pt,e),Da(Ga)===null&&e===Da(pt)&&(Ao?(Iu(To),To=-1):Ao=!0,Tn(An,t-l))):(e.sortIndex=r,wn(Ga,e),Bo||zn||(Bo=!0,zl||(zl=!0,wl()))),e};pe.unstable_shouldYield=Bu;pe.unstable_wrapCallback=function(e){var a=He;return function(){var t=He;He=a;try{return e.apply(this,arguments)}finally{He=t}}}});var Du=Ta((Tv,Tu)=>{"use strict";Tu.exports=Au()});var Gu=Ta(_=>{"use strict";var Rn=Symbol.for("react.transitional.element"),cy=Symbol.for("react.portal"),fy=Symbol.for("react.fragment"),py=Symbol.for("react.strict_mode"),gy=Symbol.for("react.profiler"),my=Symbol.for("react.consumer"),yy=Symbol.for("react.context"),hy=Symbol.for("react.forward_ref"),vy=Symbol.for("react.suspense"),xy=Symbol.for("react.memo"),Eu=Symbol.for("react.lazy"),by=Symbol.for("react.activity"),Pu=Symbol.iterator;function Sy(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var _u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hu=Object.assign,Uu={};function Al(e,a,t){this.props=e,this.context=a,this.refs=Uu,this.updater=t||_u}Al.prototype.isReactComponent={};Al.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};Al.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ou(){}Ou.prototype=Al.prototype;function Fn(e,a,t){this.props=e,this.context=a,this.refs=Uu,this.updater=t||_u}var Mn=Fn.prototype=new Ou;Mn.constructor=Fn;Hu(Mn,Al.prototype);Mn.isPureReactComponent=!0;var Ru=Array.isArray;function Pn(){}var de={H:null,A:null,T:null,S:null},qu=Object.prototype.hasOwnProperty;function En(e,a,t){var l=t.ref;return{$$typeof:Rn,type:e,key:a,ref:l!==void 0?l:null,props:t}}function Cy(e,a){return En(e.type,a,e.props)}function _n(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rn}function Ly(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return a[t]})}var Fu=/\/+/g;function Dn(e,a){return typeof e=="object"&&e!==null&&e.key!=null?Ly(""+e.key):a.toString(36)}function ky(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Pn,Pn):(e.status="pending",e.then(function(a){e.status==="pending"&&(e.status="fulfilled",e.value=a)},function(a){e.status==="pending"&&(e.status="rejected",e.reason=a)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Bl(e,a,t,l,r){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(n){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Rn:case cy:s=!0;break;case Eu:return s=e._init,Bl(s(e._payload),a,t,l,r)}}if(s)return r=r(e),s=l===""?"."+Dn(e,0):l,Ru(r)?(t="",s!=null&&(t=s.replace(Fu,"$&/")+"/"),Bl(r,a,t,"",function(p){return p})):r!=null&&(_n(r)&&(r=Cy(r,t+(r.key==null||e&&e.key===r.key?"":(""+r.key).replace(Fu,"$&/")+"/")+s)),a.push(r)),1;s=0;var d=l===""?".":l+":";if(Ru(e))for(var c=0;c<e.length;c++)l=e[c],n=d+Dn(l,c),s+=Bl(l,a,t,n,r);else if(c=Sy(e),typeof c=="function")for(e=c.call(e),c=0;!(l=e.next()).done;)l=l.value,n=d+Dn(l,c++),s+=Bl(l,a,t,n,r);else if(n==="object"){if(typeof e.then=="function")return Bl(ky(e),a,t,l,r);throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return s}function _i(e,a,t){if(e==null)return e;var l=[],r=0;return Bl(e,l,"","",function(n){return a.call(t,n,r++)}),l}function Iy(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var Mu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wy={map:_i,forEach:function(e,a,t){_i(e,function(){a.apply(this,arguments)},t)},count:function(e){var a=0;return _i(e,function(){a++}),a},toArray:function(e){return _i(e,function(a){return a})||[]},only:function(e){if(!_n(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Activity=by;_.Children=wy;_.Component=Al;_.Fragment=fy;_.Profiler=gy;_.PureComponent=Fn;_.StrictMode=py;_.Suspense=vy;_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=de;_.__COMPILER_RUNTIME={__proto__:null,c:function(e){return de.H.useMemoCache(e)}};_.cache=function(e){return function(){return e.apply(null,arguments)}};_.cacheSignal=function(){return null};_.cloneElement=function(e,a,t){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=Hu({},e.props),r=e.key;if(a!=null)for(n in a.key!==void 0&&(r=""+a.key),a)!qu.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(l[n]=a[n]);var n=arguments.length-2;if(n===1)l.children=t;else if(1<n){for(var s=Array(n),d=0;d<n;d++)s[d]=arguments[d+2];l.children=s}return En(e.type,r,l)};_.createContext=function(e){return e={$$typeof:yy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:my,_context:e},e};_.createElement=function(e,a,t){var l,r={},n=null;if(a!=null)for(l in a.key!==void 0&&(n=""+a.key),a)qu.call(a,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(r[l]=a[l]);var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){for(var d=Array(s),c=0;c<s;c++)d[c]=arguments[c+2];r.children=d}if(e&&e.defaultProps)for(l in s=e.defaultProps,s)r[l]===void 0&&(r[l]=s[l]);return En(e,n,r)};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:hy,render:e}};_.isValidElement=_n;_.lazy=function(e){return{$$typeof:Eu,_payload:{_status:-1,_result:e},_init:Iy}};_.memo=function(e,a){return{$$typeof:xy,type:e,compare:a===void 0?null:a}};_.startTransition=function(e){var a=de.T,t={};de.T=t;try{var l=e(),r=de.S;r!==null&&r(t,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(Pn,Mu)}catch(n){Mu(n)}finally{a!==null&&t.types!==null&&(a.types=t.types),de.T=a}};_.unstable_useCacheRefresh=function(){return de.H.useCacheRefresh()};_.use=function(e){return de.H.use(e)};_.useActionState=function(e,a,t){return de.H.useActionState(e,a,t)};_.useCallback=function(e,a){return de.H.useCallback(e,a)};_.useContext=function(e){return de.H.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e,a){return de.H.useDeferredValue(e,a)};_.useEffect=function(e,a){return de.H.useEffect(e,a)};_.useEffectEvent=function(e){return de.H.useEffectEvent(e)};_.useId=function(){return de.H.useId()};_.useImperativeHandle=function(e,a,t){return de.H.useImperativeHandle(e,a,t)};_.useInsertionEffect=function(e,a){return de.H.useInsertionEffect(e,a)};_.useLayoutEffect=function(e,a){return de.H.useLayoutEffect(e,a)};_.useMemo=function(e,a){return de.H.useMemo(e,a)};_.useOptimistic=function(e,a){return de.H.useOptimistic(e,a)};_.useReducer=function(e,a,t){return de.H.useReducer(e,a,t)};_.useRef=function(e){return de.H.useRef(e)};_.useState=function(e){return de.H.useState(e)};_.useSyncExternalStore=function(e,a,t){return de.H.useSyncExternalStore(e,a,t)};_.useTransition=function(){return de.H.useTransition()};_.version="19.2.4"});var Ie=Ta((Pv,Wu)=>{"use strict";Wu.exports=Gu()});var Vu=Ta(Oe=>{"use strict";var zy=Ie();function Nu(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function gt(){}var Ue={d:{f:gt,r:function(){throw Error(Nu(522))},D:gt,C:gt,L:gt,m:gt,X:gt,S:gt,M:gt},p:0,findDOMNode:null},By=Symbol.for("react.portal");function Ay(e,a,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:By,key:l==null?null:""+l,children:e,containerInfo:a,implementation:t}}var Do=zy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Hi(e,a){if(e==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ue;Oe.createPortal=function(e,a){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(Nu(299));return Ay(e,a,null,t)};Oe.flushSync=function(e){var a=Do.T,t=Ue.p;try{if(Do.T=null,Ue.p=2,e)return e()}finally{Do.T=a,Ue.p=t,Ue.d.f()}};Oe.preconnect=function(e,a){typeof e=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Ue.d.C(e,a))};Oe.prefetchDNS=function(e){typeof e=="string"&&Ue.d.D(e)};Oe.preinit=function(e,a){if(typeof e=="string"&&a&&typeof a.as=="string"){var t=a.as,l=Hi(t,a.crossOrigin),r=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;t==="style"?Ue.d.S(e,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:l,integrity:r,fetchPriority:n}):t==="script"&&Ue.d.X(e,{crossOrigin:l,integrity:r,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Oe.preinitModule=function(e,a){if(typeof e=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var t=Hi(a.as,a.crossOrigin);Ue.d.M(e,{crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Ue.d.M(e)};Oe.preload=function(e,a){if(typeof e=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var t=a.as,l=Hi(t,a.crossOrigin);Ue.d.L(e,t,{crossOrigin:l,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Oe.preloadModule=function(e,a){if(typeof e=="string")if(a){var t=Hi(a.as,a.crossOrigin);Ue.d.m(e,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Ue.d.m(e)};Oe.requestFormReset=function(e){Ue.d.r(e)};Oe.unstable_batchedUpdates=function(e,a){return e(a)};Oe.useFormState=function(e,a,t){return Do.H.useFormState(e,a,t)};Oe.useFormStatus=function(){return Do.H.useHostTransitionStatus()};Oe.version="19.2.4"});var Yu=Ta((Fv,Xu)=>{"use strict";function ju(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ju)}catch(e){console.error(e)}}ju(),Xu.exports=Vu()});var nm=Ta(un=>{"use strict";var ze=Du(),Sf=Ie(),Ty=Yu();function L(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Cf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function Lf(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function kf(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Zu(e){if(hi(e)!==e)throw Error(L(188))}function Dy(e){var a=e.alternate;if(!a){if(a=hi(e),a===null)throw Error(L(188));return a!==e?null:e}for(var t=e,l=a;;){var r=t.return;if(r===null)break;var n=r.alternate;if(n===null){if(l=r.return,l!==null){t=l;continue}break}if(r.child===n.child){for(n=r.child;n;){if(n===t)return Zu(r),e;if(n===l)return Zu(r),a;n=n.sibling}throw Error(L(188))}if(t.return!==l.return)t=r,l=n;else{for(var s=!1,d=r.child;d;){if(d===t){s=!0,t=r,l=n;break}if(d===l){s=!0,l=r,t=n;break}d=d.sibling}if(!s){for(d=n.child;d;){if(d===t){s=!0,t=n,l=r;break}if(d===l){s=!0,l=n,t=r;break}d=d.sibling}if(!s)throw Error(L(189))}}if(t.alternate!==l)throw Error(L(190))}if(t.tag!==3)throw Error(L(188));return t.stateNode.current===t?e:a}function If(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=If(e),a!==null)return a;e=e.sibling}return null}var fe=Object.assign,Py=Symbol.for("react.element"),Ui=Symbol.for("react.transitional.element"),Uo=Symbol.for("react.portal"),Ml=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),hs=Symbol.for("react.profiler"),zf=Symbol.for("react.consumer"),Qa=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),vs=Symbol.for("react.suspense"),xs=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),bs=Symbol.for("react.activity"),Ry=Symbol.for("react.memo_cache_sentinel"),Qu=Symbol.iterator;function Po(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var Fy=Symbol.for("react.client.reference");function Ss(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fy?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ml:return"Fragment";case hs:return"Profiler";case wf:return"StrictMode";case vs:return"Suspense";case xs:return"SuspenseList";case bs:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Uo:return"Portal";case Qa:return e.displayName||"Context";case zf:return(e._context.displayName||"Context")+".Consumer";case fd:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pd:return a=e.displayName||null,a!==null?a:Ss(e.type)||"Memo";case mt:a=e._payload,e=e._init;try{return Ss(e(a))}catch{}}return null}var Oo=Array.isArray,M=Sf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=Ty.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$t={pending:!1,data:null,method:null,action:null},Cs=[],El=-1;function Ea(e){return{current:e}}function Te(e){0>El||(e.current=Cs[El],Cs[El]=null,El--)}function re(e,a){El++,Cs[El]=e.current,e.current=a}var Ma=Ea(null),li=Ea(null),wt=Ea(null),vr=Ea(null);function xr(e,a){switch(re(wt,a),re(li,e),re(Ma,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?lf(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=lf(a),e=Xg(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Te(Ma),re(Ma,e)}function eo(){Te(Ma),Te(li),Te(wt)}function Ls(e){e.memoizedState!==null&&re(vr,e);var a=Ma.current,t=Xg(a,e.type);a!==t&&(re(li,e),re(Ma,t))}function br(e){li.current===e&&(Te(Ma),Te(li)),vr.current===e&&(Te(vr),gi._currentValue=$t)}var Hn,Ju;function Zt(e){if(Hn===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Hn=a&&a[1]||"",Ju=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hn+e+Ju}var Un=!1;function On(e,a){if(!e||Un)return"";Un=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(h){var f=h}Reflect.construct(e,[],m)}else{try{m.call()}catch(h){f=h}e.call(m.prototype)}}else{try{throw Error()}catch(h){f=h}(m=e())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(h){if(h&&f&&typeof h.stack=="string")return[h.stack,f.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),s=n[0],d=n[1];if(s&&d){var c=s.split(`
`),p=d.split(`
`);for(r=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;r<p.length&&!p[r].includes("DetermineComponentFrameRoot");)r++;if(l===c.length||r===p.length)for(l=c.length-1,r=p.length-1;1<=l&&0<=r&&c[l]!==p[r];)r--;for(;1<=l&&0<=r;l--,r--)if(c[l]!==p[r]){if(l!==1||r!==1)do if(l--,r--,0>r||c[l]!==p[r]){var x=`
`+c[l].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=l&&0<=r);break}}}finally{Un=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Zt(t):""}function My(e,a){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return e.child!==a&&a!==null?Zt("Suspense Fallback"):Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return On(e.type,!1);case 11:return On(e.type.render,!1);case 1:return On(e.type,!0);case 31:return Zt("Activity");default:return""}}function Ku(e){try{var a="",t=null;do a+=My(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ks=Object.prototype.hasOwnProperty,gd=ze.unstable_scheduleCallback,qn=ze.unstable_cancelCallback,Ey=ze.unstable_shouldYield,_y=ze.unstable_requestPaint,ea=ze.unstable_now,Hy=ze.unstable_getCurrentPriorityLevel,Bf=ze.unstable_ImmediatePriority,Af=ze.unstable_UserBlockingPriority,Sr=ze.unstable_NormalPriority,Uy=ze.unstable_LowPriority,Tf=ze.unstable_IdlePriority,Oy=ze.log,qy=ze.unstable_setDisableYieldValue,vi=null,aa=null;function St(e){if(typeof Oy=="function"&&qy(e),aa&&typeof aa.setStrictMode=="function")try{aa.setStrictMode(vi,e)}catch{}}var ta=Math.clz32?Math.clz32:Ny,Gy=Math.log,Wy=Math.LN2;function Ny(e){return e>>>=0,e===0?32:31-(Gy(e)/Wy|0)|0}var Oi=256,qi=262144,Gi=4194304;function Qt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xr(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var r=0,n=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~n,l!==0?r=Qt(l):(s&=d,s!==0?r=Qt(s):t||(t=d&~e,t!==0&&(r=Qt(t))))):(d=l&~n,d!==0?r=Qt(d):s!==0?r=Qt(s):t||(t=l&~e,t!==0&&(r=Qt(t)))),r===0?0:a!==0&&a!==r&&(a&n)===0&&(n=r&-r,t=a&-a,n>=t||n===32&&(t&4194048)!==0)?a:r}function xi(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Vy(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Df(){var e=Gi;return Gi<<=1,(Gi&62914560)===0&&(Gi=4194304),e}function Gn(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function bi(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jy(e,a,t,l,r,n){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var d=e.entanglements,c=e.expirationTimes,p=e.hiddenUpdates;for(t=s&~t;0<t;){var x=31-ta(t),m=1<<x;d[x]=0,c[x]=-1;var f=p[x];if(f!==null)for(p[x]=null,x=0;x<f.length;x++){var h=f[x];h!==null&&(h.lane&=-536870913)}t&=~m}l!==0&&Pf(e,l,0),n!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=n&~(s&~a))}function Pf(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-ta(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Rf(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-ta(t),r=1<<l;r&a|e[l]&a&&(e[l]|=a),t&=~r}}function Ff(e,a){var t=a&-a;return t=(t&42)!==0?1:md(t),(t&(e.suspendedLanes|a))!==0?0:t}function md(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yd(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mf(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:om(e.type))}function $u(e,a){var t=ee.p;try{return ee.p=e,a()}finally{ee.p=t}}var Ut=Math.random().toString(36).slice(2),Re="__reactFiber$"+Ut,Ye="__reactProps$"+Ut,fo="__reactContainer$"+Ut,Is="__reactEvents$"+Ut,Xy="__reactListeners$"+Ut,Yy="__reactHandles$"+Ut,ec="__reactResources$"+Ut,Si="__reactMarker$"+Ut;function hd(e){delete e[Re],delete e[Ye],delete e[Is],delete e[Xy],delete e[Yy]}function _l(e){var a=e[Re];if(a)return a;for(var t=e.parentNode;t;){if(a=t[fo]||t[Re]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=df(e);e!==null;){if(t=e[Re])return t;e=df(e)}return a}e=t,t=e.parentNode}return null}function po(e){if(e=e[Re]||e[fo]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function qo(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(L(33))}function Xl(e){var a=e[ec];return a||(a=e[ec]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ae(e){e[Si]=!0}var Ef=new Set,_f={};function dl(e,a){ao(e,a),ao(e+"Capture",a)}function ao(e,a){for(_f[e]=a,e=0;e<a.length;e++)Ef.add(a[e])}var Zy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ac={},tc={};function Qy(e){return ks.call(tc,e)?!0:ks.call(ac,e)?!1:Zy.test(e)?tc[e]=!0:(ac[e]=!0,!1)}function lr(e,a,t){if(Qy(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Wi(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Wa(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function ca(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hf(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Jy(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,n=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return r.call(this)},set:function(s){t=""+s,n.call(this,s)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function ws(e){if(!e._valueTracker){var a=Hf(e)?"checked":"value";e._valueTracker=Jy(e,a,""+e[a])}}function Uf(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=Hf(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function Cr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ky=/[\n"\\]/g;function ga(e){return e.replace(Ky,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function zs(e,a,t,l,r,n,s,d){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),a!=null?s==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ca(a)):e.value!==""+ca(a)&&(e.value=""+ca(a)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),a!=null?Bs(e,s,ca(a)):t!=null?Bs(e,s,ca(t)):l!=null&&e.removeAttribute("value"),r==null&&n!=null&&(e.defaultChecked=!!n),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+ca(d):e.removeAttribute("name")}function Of(e,a,t,l,r,n,s,d){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),a!=null||t!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){ws(e);return}t=t!=null?""+ca(t):"",a=a!=null?""+ca(a):t,d||a===e.value||(e.value=a),e.defaultValue=a}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),ws(e)}function Bs(e,a,t){a==="number"&&Cr(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Yl(e,a,t,l){if(e=e.options,a){a={};for(var r=0;r<t.length;r++)a["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=a.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&l&&(e[t].defaultSelected=!0)}else{for(t=""+ca(t),a=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}a!==null||e[r].disabled||(a=e[r])}a!==null&&(a.selected=!0)}}function qf(e,a,t){if(a!=null&&(a=""+ca(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+ca(t):""}function Gf(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(L(92));if(Oo(l)){if(1<l.length)throw Error(L(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=ca(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),ws(e)}function to(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var $y=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lc(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||$y.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Wf(e,a,t){if(a!=null&&typeof a!="object")throw Error(L(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in a)l=a[r],a.hasOwnProperty(r)&&t[r]!==l&&lc(e,r,l)}else for(var n in a)a.hasOwnProperty(n)&&lc(e,n,a[n])}function vd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ah=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function or(e){return ah.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ja(){}var As=null;function xd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,Zl=null;function oc(e){var a=po(e);if(a&&(e=a.stateNode)){var t=e[Ye]||null;e:switch(e=a.stateNode,a.type){case"input":if(zs(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ga(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var r=l[Ye]||null;if(!r)throw Error(L(90));zs(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&Uf(l)}break e;case"textarea":qf(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&Yl(e,!!t.multiple,a,!1)}}}var Wn=!1;function Nf(e,a,t){if(Wn)return e(a,t);Wn=!0;try{var l=e(a);return l}finally{if(Wn=!1,(Hl!==null||Zl!==null)&&(rn(),Hl&&(a=Hl,e=Zl,Zl=Hl=null,oc(a),e)))for(a=0;a<e.length;a++)oc(e[a])}}function oi(e,a){var t=e.stateNode;if(t===null)return null;var l=t[Ye]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(L(231,a,typeof t));return t}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ts=!1;if(tt)try{Tl={},Object.defineProperty(Tl,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Tl,Tl),window.removeEventListener("test",Tl,Tl)}catch{Ts=!1}var Tl,Ct=null,bd=null,ir=null;function Vf(){if(ir)return ir;var e,a=bd,t=a.length,l,r="value"in Ct?Ct.value:Ct.textContent,n=r.length;for(e=0;e<t&&a[e]===r[e];e++);var s=t-e;for(l=1;l<=s&&a[t-l]===r[n-l];l++);return ir=r.slice(e,1<l?1-l:void 0)}function rr(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function ic(){return!1}function Ze(e){function a(t,l,r,n,s){this._reactName=t,this._targetInst=r,this.type=l,this.nativeEvent=n,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(n):n[d]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ni:ic,this.isPropagationStopped=ic,this}return fe(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),a}var ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yr=Ze(ul),Ci=fe({},ul,{view:0,detail:0}),th=Ze(Ci),Nn,Vn,Ro,Zr=fe({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&e.type==="mousemove"?(Nn=e.screenX-Ro.screenX,Vn=e.screenY-Ro.screenY):Vn=Nn=0,Ro=e),Nn)},movementY:function(e){return"movementY"in e?e.movementY:Vn}}),rc=Ze(Zr),lh=fe({},Zr,{dataTransfer:0}),oh=Ze(lh),ih=fe({},Ci,{relatedTarget:0}),jn=Ze(ih),rh=fe({},ul,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=Ze(rh),sh=fe({},ul,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dh=Ze(sh),uh=fe({},ul,{data:0}),nc=Ze(uh),ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ph={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gh(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=ph[e])?!!a[e]:!1}function Sd(){return gh}var mh=fe({},Ci,{key:function(e){if(e.key){var a=ch[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(e){return e.type==="keypress"?rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yh=Ze(mh),hh=fe({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=Ze(hh),vh=fe({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),xh=Ze(vh),bh=fe({},ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sh=Ze(bh),Ch=fe({},Zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lh=Ze(Ch),kh=fe({},ul,{newState:0,oldState:0}),Ih=Ze(kh),wh=[9,13,27,32],Cd=tt&&"CompositionEvent"in window,No=null;tt&&"documentMode"in document&&(No=document.documentMode);var zh=tt&&"TextEvent"in window&&!No,jf=tt&&(!Cd||No&&8<No&&11>=No),dc=" ",uc=!1;function Xf(e,a){switch(e){case"keyup":return wh.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ul=!1;function Bh(e,a){switch(e){case"compositionend":return Yf(a);case"keypress":return a.which!==32?null:(uc=!0,dc);case"textInput":return e=a.data,e===dc&&uc?null:e;default:return null}}function Ah(e,a){if(Ul)return e==="compositionend"||!Cd&&Xf(e,a)?(e=Vf(),ir=bd=Ct=null,Ul=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return jf&&a.locale!=="ko"?null:a.data;default:return null}}var Th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Th[e.type]:a==="textarea"}function Zf(e,a,t,l){Hl?Zl?Zl.push(l):Zl=[l]:Hl=l,a=Or(a,"onChange"),0<a.length&&(t=new Yr("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var Vo=null,ii=null;function Dh(e){Ng(e,0)}function Qr(e){var a=qo(e);if(Uf(a))return e}function fc(e,a){if(e==="change")return a}var Qf=!1;tt&&(tt?(ji="oninput"in document,ji||(Xn=document.createElement("div"),Xn.setAttribute("oninput","return;"),ji=typeof Xn.oninput=="function"),Vi=ji):Vi=!1,Qf=Vi&&(!document.documentMode||9<document.documentMode));var Vi,ji,Xn;function pc(){Vo&&(Vo.detachEvent("onpropertychange",Jf),ii=Vo=null)}function Jf(e){if(e.propertyName==="value"&&Qr(ii)){var a=[];Zf(a,ii,e,xd(e)),Nf(Dh,a)}}function Ph(e,a,t){e==="focusin"?(pc(),Vo=a,ii=t,Vo.attachEvent("onpropertychange",Jf)):e==="focusout"&&pc()}function Rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qr(ii)}function Fh(e,a){if(e==="click")return Qr(a)}function Mh(e,a){if(e==="input"||e==="change")return Qr(a)}function Eh(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var oa=typeof Object.is=="function"?Object.is:Eh;function ri(e,a){if(oa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var r=t[l];if(!ks.call(a,r)||!oa(e[r],a[r]))return!1}return!0}function gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,a){var t=gc(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=gc(t)}}function Kf(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Kf(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function $f(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Cr(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Cr(e.document)}return a}function Ld(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var _h=tt&&"documentMode"in document&&11>=document.documentMode,Ol=null,Ds=null,jo=null,Ps=!1;function yc(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ps||Ol==null||Ol!==Cr(l)||(l=Ol,"selectionStart"in l&&Ld(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jo&&ri(jo,l)||(jo=l,l=Or(Ds,"onSelect"),0<l.length&&(a=new Yr("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=Ol)))}function Yt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var ql={animationend:Yt("Animation","AnimationEnd"),animationiteration:Yt("Animation","AnimationIteration"),animationstart:Yt("Animation","AnimationStart"),transitionrun:Yt("Transition","TransitionRun"),transitionstart:Yt("Transition","TransitionStart"),transitioncancel:Yt("Transition","TransitionCancel"),transitionend:Yt("Transition","TransitionEnd")},Yn={},ep={};tt&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete ql.animationend.animation,delete ql.animationiteration.animation,delete ql.animationstart.animation),"TransitionEvent"in window||delete ql.transitionend.transition);function cl(e){if(Yn[e])return Yn[e];if(!ql[e])return e;var a=ql[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in ep)return Yn[e]=a[t];return e}var ap=cl("animationend"),tp=cl("animationiteration"),lp=cl("animationstart"),Hh=cl("transitionrun"),Uh=cl("transitionstart"),Oh=cl("transitioncancel"),op=cl("transitionend"),ip=new Map,Rs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rs.push("scrollEnd");function Ba(e,a){ip.set(e,a),dl(a,[e])}var Lr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ua=[],Gl=0,kd=0;function Jr(){for(var e=Gl,a=kd=Gl=0;a<e;){var t=ua[a];ua[a++]=null;var l=ua[a];ua[a++]=null;var r=ua[a];ua[a++]=null;var n=ua[a];if(ua[a++]=null,l!==null&&r!==null){var s=l.pending;s===null?r.next=r:(r.next=s.next,s.next=r),l.pending=r}n!==0&&rp(t,r,n)}}function Kr(e,a,t,l){ua[Gl++]=e,ua[Gl++]=a,ua[Gl++]=t,ua[Gl++]=l,kd|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Id(e,a,t,l){return Kr(e,a,t,l),kr(e)}function fl(e,a){return Kr(e,null,null,a),kr(e)}function rp(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var r=!1,n=e.return;n!==null;)n.childLanes|=t,l=n.alternate,l!==null&&(l.childLanes|=t),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(r=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,r&&a!==null&&(r=31-ta(t),e=n.hiddenUpdates,l=e[r],l===null?e[r]=[a]:l.push(a),a.lane=t|536870912),n):null}function kr(e){if(50<ai)throw ai=0,ed=null,Error(L(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Wl={};function qh(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,a,t,l){return new qh(e,a,t,l)}function wd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $a(e,a){var t=e.alternate;return t===null?(t=Ke(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function np(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function nr(e,a,t,l,r,n){var s=0;if(l=e,typeof e=="function")wd(e)&&(s=1);else if(typeof e=="string")s=N0(e,t,Ma.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case bs:return e=Ke(31,t,a,r),e.elementType=bs,e.lanes=n,e;case Ml:return el(t.children,r,n,a);case wf:s=8,r|=24;break;case hs:return e=Ke(12,t,a,r|2),e.elementType=hs,e.lanes=n,e;case vs:return e=Ke(13,t,a,r),e.elementType=vs,e.lanes=n,e;case xs:return e=Ke(19,t,a,r),e.elementType=xs,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qa:s=10;break e;case zf:s=9;break e;case fd:s=11;break e;case pd:s=14;break e;case mt:s=16,l=null;break e}s=29,t=Error(L(130,e===null?"null":typeof e,"")),l=null}return a=Ke(s,t,a,r),a.elementType=e,a.type=l,a.lanes=n,a}function el(e,a,t,l){return e=Ke(7,e,l,a),e.lanes=t,e}function Zn(e,a,t){return e=Ke(6,e,null,a),e.lanes=t,e}function sp(e){var a=Ke(18,null,null,0);return a.stateNode=e,a}function Qn(e,a,t){return a=Ke(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var hc=new WeakMap;function ma(e,a){if(typeof e=="object"&&e!==null){var t=hc.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Ku(a)},hc.set(e,a),a)}return{value:e,source:a,stack:Ku(a)}}var Nl=[],Vl=0,Ir=null,ni=0,fa=[],pa=0,Mt=null,Pa=1,Ra="";function Ya(e,a){Nl[Vl++]=ni,Nl[Vl++]=Ir,Ir=e,ni=a}function dp(e,a,t){fa[pa++]=Pa,fa[pa++]=Ra,fa[pa++]=Mt,Mt=e;var l=Pa;e=Ra;var r=32-ta(l)-1;l&=~(1<<r),t+=1;var n=32-ta(a)+r;if(30<n){var s=r-r%5;n=(l&(1<<s)-1).toString(32),l>>=s,r-=s,Pa=1<<32-ta(a)+r|t<<r|l,Ra=n+e}else Pa=1<<n|t<<r|l,Ra=e}function zd(e){e.return!==null&&(Ya(e,1),dp(e,1,0))}function Bd(e){for(;e===Ir;)Ir=Nl[--Vl],Nl[Vl]=null,ni=Nl[--Vl],Nl[Vl]=null;for(;e===Mt;)Mt=fa[--pa],fa[pa]=null,Ra=fa[--pa],fa[pa]=null,Pa=fa[--pa],fa[pa]=null}function up(e,a){fa[pa++]=Pa,fa[pa++]=Ra,fa[pa++]=Mt,Pa=a.id,Ra=a.overflow,Mt=e}var Fe=null,ce=null,X=!1,zt=null,ya=!1,Fs=Error(L(519));function Et(e){var a=Error(L(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw si(ma(a,e)),Fs}function vc(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[Re]=e,a[Ye]=l,t){case"dialog":G("cancel",a),G("close",a);break;case"iframe":case"object":case"embed":G("load",a);break;case"video":case"audio":for(t=0;t<fi.length;t++)G(fi[t],a);break;case"source":G("error",a);break;case"img":case"image":case"link":G("error",a),G("load",a);break;case"details":G("toggle",a);break;case"input":G("invalid",a),Of(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":G("invalid",a);break;case"textarea":G("invalid",a),Gf(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||jg(a.textContent,t)?(l.popover!=null&&(G("beforetoggle",a),G("toggle",a)),l.onScroll!=null&&G("scroll",a),l.onScrollEnd!=null&&G("scrollend",a),l.onClick!=null&&(a.onclick=Ja),a=!0):a=!1,a||Et(e,!0)}function xc(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:ya=!1;return;case 27:case 3:ya=!0;return;default:Fe=Fe.return}}function Dl(e){if(e!==Fe)return!1;if(!X)return xc(e),X=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||id(e.type,e.memoizedProps)),t=!t),t&&ce&&Et(e),xc(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));ce=sf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));ce=sf(e)}else a===27?(a=ce,Ot(e.type)?(e=dd,dd=null,ce=e):ce=a):ce=Fe?va(e.stateNode.nextSibling):null;return!0}function ol(){ce=Fe=null,X=!1}function Jn(){var e=zt;return e!==null&&(je===null?je=e:je.push.apply(je,e),zt=null),e}function si(e){zt===null?zt=[e]:zt.push(e)}var Ms=Ea(null),pl=null,Ka=null;function ht(e,a,t){re(Ms,a._currentValue),a._currentValue=t}function et(e){e._currentValue=Ms.current,Te(Ms)}function Es(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function _s(e,a,t,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var n=r.dependencies;if(n!==null){var s=r.child;n=n.firstContext;e:for(;n!==null;){var d=n;n=r;for(var c=0;c<a.length;c++)if(d.context===a[c]){n.lanes|=t,d=n.alternate,d!==null&&(d.lanes|=t),Es(n.return,t,e),l||(s=null);break e}n=d.next}}else if(r.tag===18){if(s=r.return,s===null)throw Error(L(341));s.lanes|=t,n=s.alternate,n!==null&&(n.lanes|=t),Es(s,t,e),s=null}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===e){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}}function go(e,a,t,l){e=null;for(var r=a,n=!1;r!==null;){if(!n){if((r.flags&524288)!==0)n=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var s=r.alternate;if(s===null)throw Error(L(387));if(s=s.memoizedProps,s!==null){var d=r.type;oa(r.pendingProps.value,s.value)||(e!==null?e.push(d):e=[d])}}else if(r===vr.current){if(s=r.alternate,s===null)throw Error(L(387));s.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(gi):e=[gi])}r=r.return}e!==null&&_s(a,e,t,l),a.flags|=262144}function wr(e){for(e=e.firstContext;e!==null;){if(!oa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function il(e){pl=e,Ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Me(e){return cp(pl,e)}function Xi(e,a){return pl===null&&il(e),cp(e,a)}function cp(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Ka===null){if(e===null)throw Error(L(308));Ka=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ka=Ka.next=a;return t}var Gh=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Wh=ze.unstable_scheduleCallback,Nh=ze.unstable_NormalPriority,Le={$$typeof:Qa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ad(){return{controller:new Gh,data:new Map,refCount:0}}function Li(e){e.refCount--,e.refCount===0&&Wh(Nh,function(){e.controller.abort()})}var Xo=null,Hs=0,lo=0,Ql=null;function Vh(e,a){if(Xo===null){var t=Xo=[];Hs=0,lo=eu(),Ql={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Hs++,a.then(bc,bc),a}function bc(){if(--Hs===0&&Xo!==null){Ql!==null&&(Ql.status="fulfilled");var e=Xo;Xo=null,lo=0,Ql=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function jh(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var r=0;r<t.length;r++)(0,t[r])(a)},function(r){for(l.status="rejected",l.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),l}var Sc=M.S;M.S=function(e,a){Ig=ea(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Vh(e,a),Sc!==null&&Sc(e,a)};var al=Ea(null);function Td(){var e=al.current;return e!==null?e:ie.pooledCache}function sr(e,a){a===null?re(al,al.current):re(al,a.pool)}function fp(){var e=Td();return e===null?null:{parent:Le._currentValue,pool:e}}var mo=Error(L(460)),Dd=Error(L(474)),$r=Error(L(542)),zr={then:function(){}};function Cc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pp(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ja,Ja),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,kc(e),e;default:if(typeof a.status=="string")a.then(Ja,Ja);else{if(e=ie,e!==null&&100<e.shellSuspendCounter)throw Error(L(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var r=a;r.status="fulfilled",r.value=l}},function(l){if(a.status==="pending"){var r=a;r.status="rejected",r.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,kc(e),e}throw tl=a,mo}}function Jt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(tl=t,mo):t}}var tl=null;function Lc(){if(tl===null)throw Error(L(459));var e=tl;return tl=null,e}function kc(e){if(e===mo||e===$r)throw Error(L(483))}var Jl=null,di=0;function Yi(e){var a=di;return di+=1,Jl===null&&(Jl=[]),pp(Jl,e,a)}function Fo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Zi(e,a){throw a.$$typeof===Py?Error(L(525)):(e=Object.prototype.toString.call(a),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function gp(e){function a(y,g){if(e){var v=y.deletions;v===null?(y.deletions=[g],y.flags|=16):v.push(g)}}function t(y,g){if(!e)return null;for(;g!==null;)a(y,g),g=g.sibling;return null}function l(y){for(var g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function r(y,g){return y=$a(y,g),y.index=0,y.sibling=null,y}function n(y,g,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<g?(y.flags|=67108866,g):v):(y.flags|=67108866,g)):(y.flags|=1048576,g)}function s(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function d(y,g,v,u){return g===null||g.tag!==6?(g=Zn(v,y.mode,u),g.return=y,g):(g=r(g,v),g.return=y,g)}function c(y,g,v,u){var b=v.type;return b===Ml?x(y,g,v.props.children,u,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===mt&&Jt(b)===g.type)?(g=r(g,v.props),Fo(g,v),g.return=y,g):(g=nr(v.type,v.key,v.props,null,y.mode,u),Fo(g,v),g.return=y,g)}function p(y,g,v,u){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Qn(v,y.mode,u),g.return=y,g):(g=r(g,v.children||[]),g.return=y,g)}function x(y,g,v,u,b){return g===null||g.tag!==7?(g=el(v,y.mode,u,b),g.return=y,g):(g=r(g,v),g.return=y,g)}function m(y,g,v){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Zn(""+g,y.mode,v),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ui:return v=nr(g.type,g.key,g.props,null,y.mode,v),Fo(v,g),v.return=y,v;case Uo:return g=Qn(g,y.mode,v),g.return=y,g;case mt:return g=Jt(g),m(y,g,v)}if(Oo(g)||Po(g))return g=el(g,y.mode,v,null),g.return=y,g;if(typeof g.then=="function")return m(y,Yi(g),v);if(g.$$typeof===Qa)return m(y,Xi(y,g),v);Zi(y,g)}return null}function f(y,g,v,u){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return b!==null?null:d(y,g,""+v,u);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ui:return v.key===b?c(y,g,v,u):null;case Uo:return v.key===b?p(y,g,v,u):null;case mt:return v=Jt(v),f(y,g,v,u)}if(Oo(v)||Po(v))return b!==null?null:x(y,g,v,u,null);if(typeof v.then=="function")return f(y,g,Yi(v),u);if(v.$$typeof===Qa)return f(y,g,Xi(y,v),u);Zi(y,v)}return null}function h(y,g,v,u,b){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return y=y.get(v)||null,d(g,y,""+u,b);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ui:return y=y.get(u.key===null?v:u.key)||null,c(g,y,u,b);case Uo:return y=y.get(u.key===null?v:u.key)||null,p(g,y,u,b);case mt:return u=Jt(u),h(y,g,v,u,b)}if(Oo(u)||Po(u))return y=y.get(v)||null,x(g,y,u,b,null);if(typeof u.then=="function")return h(y,g,v,Yi(u),b);if(u.$$typeof===Qa)return h(y,g,v,Xi(g,u),b);Zi(g,u)}return null}function k(y,g,v,u){for(var b=null,R=null,w=g,E=g=0,q=null;w!==null&&E<v.length;E++){w.index>E?(q=w,w=null):q=w.sibling;var K=f(y,w,v[E],u);if(K===null){w===null&&(w=q);break}e&&w&&K.alternate===null&&a(y,w),g=n(K,g,E),R===null?b=K:R.sibling=K,R=K,w=q}if(E===v.length)return t(y,w),X&&Ya(y,E),b;if(w===null){for(;E<v.length;E++)w=m(y,v[E],u),w!==null&&(g=n(w,g,E),R===null?b=w:R.sibling=w,R=w);return X&&Ya(y,E),b}for(w=l(w);E<v.length;E++)q=h(w,y,E,v[E],u),q!==null&&(e&&q.alternate!==null&&w.delete(q.key===null?E:q.key),g=n(q,g,E),R===null?b=q:R.sibling=q,R=q);return e&&w.forEach(function(ft){return a(y,ft)}),X&&Ya(y,E),b}function z(y,g,v,u){if(v==null)throw Error(L(151));for(var b=null,R=null,w=g,E=g=0,q=null,K=v.next();w!==null&&!K.done;E++,K=v.next()){w.index>E?(q=w,w=null):q=w.sibling;var ft=f(y,w,K.value,u);if(ft===null){w===null&&(w=q);break}e&&w&&ft.alternate===null&&a(y,w),g=n(ft,g,E),R===null?b=ft:R.sibling=ft,R=ft,w=q}if(K.done)return t(y,w),X&&Ya(y,E),b;if(w===null){for(;!K.done;E++,K=v.next())K=m(y,K.value,u),K!==null&&(g=n(K,g,E),R===null?b=K:R.sibling=K,R=K);return X&&Ya(y,E),b}for(w=l(w);!K.done;E++,K=v.next())K=h(w,y,E,K.value,u),K!==null&&(e&&K.alternate!==null&&w.delete(K.key===null?E:K.key),g=n(K,g,E),R===null?b=K:R.sibling=K,R=K);return e&&w.forEach(function(ly){return a(y,ly)}),X&&Ya(y,E),b}function T(y,g,v,u){if(typeof v=="object"&&v!==null&&v.type===Ml&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ui:e:{for(var b=v.key;g!==null;){if(g.key===b){if(b=v.type,b===Ml){if(g.tag===7){t(y,g.sibling),u=r(g,v.props.children),u.return=y,y=u;break e}}else if(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===mt&&Jt(b)===g.type){t(y,g.sibling),u=r(g,v.props),Fo(u,v),u.return=y,y=u;break e}t(y,g);break}else a(y,g);g=g.sibling}v.type===Ml?(u=el(v.props.children,y.mode,u,v.key),u.return=y,y=u):(u=nr(v.type,v.key,v.props,null,y.mode,u),Fo(u,v),u.return=y,y=u)}return s(y);case Uo:e:{for(b=v.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(y,g.sibling),u=r(g,v.children||[]),u.return=y,y=u;break e}else{t(y,g);break}else a(y,g);g=g.sibling}u=Qn(v,y.mode,u),u.return=y,y=u}return s(y);case mt:return v=Jt(v),T(y,g,v,u)}if(Oo(v))return k(y,g,v,u);if(Po(v)){if(b=Po(v),typeof b!="function")throw Error(L(150));return v=b.call(v),z(y,g,v,u)}if(typeof v.then=="function")return T(y,g,Yi(v),u);if(v.$$typeof===Qa)return T(y,g,Xi(y,v),u);Zi(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,g!==null&&g.tag===6?(t(y,g.sibling),u=r(g,v),u.return=y,y=u):(t(y,g),u=Zn(v,y.mode,u),u.return=y,y=u),s(y)):t(y,g)}return function(y,g,v,u){try{di=0;var b=T(y,g,v,u);return Jl=null,b}catch(w){if(w===mo||w===$r)throw w;var R=Ke(29,w,null,y.mode);return R.lanes=u,R.return=y,R}}}var rl=gp(!0),mp=gp(!1),yt=!1;function Pd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Us(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function At(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,($&2)!==0){var r=l.pending;return r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a,a=kr(e),rp(e,null,t),a}return Kr(e,l,a,t),kr(e)}function Yo(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Rf(e,t)}}function Kn(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var r=null,n=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};n===null?r=n=s:n=n.next=s,t=t.next}while(t!==null);n===null?r=n=a:n=n.next=a}else r=n=a;t={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Os=!1;function Zo(){if(Os){var e=Ql;if(e!==null)throw e}}function Qo(e,a,t,l){Os=!1;var r=e.updateQueue;yt=!1;var n=r.firstBaseUpdate,s=r.lastBaseUpdate,d=r.shared.pending;if(d!==null){r.shared.pending=null;var c=d,p=c.next;c.next=null,s===null?n=p:s.next=p,s=c;var x=e.alternate;x!==null&&(x=x.updateQueue,d=x.lastBaseUpdate,d!==s&&(d===null?x.firstBaseUpdate=p:d.next=p,x.lastBaseUpdate=c))}if(n!==null){var m=r.baseState;s=0,x=p=c=null,d=n;do{var f=d.lane&-536870913,h=f!==d.lane;if(h?(N&f)===f:(l&f)===f){f!==0&&f===lo&&(Os=!0),x!==null&&(x=x.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var k=e,z=d;f=a;var T=t;switch(z.tag){case 1:if(k=z.payload,typeof k=="function"){m=k.call(T,m,f);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=z.payload,f=typeof k=="function"?k.call(T,m,f):k,f==null)break e;m=fe({},m,f);break e;case 2:yt=!0}}f=d.callback,f!==null&&(e.flags|=64,h&&(e.flags|=8192),h=r.callbacks,h===null?r.callbacks=[f]:h.push(f))}else h={lane:f,tag:d.tag,payload:d.payload,callback:d.callback,next:null},x===null?(p=x=h,c=m):x=x.next=h,s|=f;if(d=d.next,d===null){if(d=r.shared.pending,d===null)break;h=d,d=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);x===null&&(c=m),r.baseState=c,r.firstBaseUpdate=p,r.lastBaseUpdate=x,n===null&&(r.shared.lanes=0),Ht|=s,e.lanes=s,e.memoizedState=m}}function yp(e,a){if(typeof e!="function")throw Error(L(191,e));e.call(a)}function hp(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)yp(t[e],a)}var oo=Ea(null),Br=Ea(0);function Ic(e,a){e=rt,re(Br,e),re(oo,a),rt=e|a.baseLanes}function qs(){re(Br,rt),re(oo,oo.current)}function Rd(){rt=Br.current,Te(oo),Te(Br)}var ia=Ea(null),ha=null;function vt(e){var a=e.alternate;re(xe,xe.current&1),re(ia,e),ha===null&&(a===null||oo.current!==null||a.memoizedState!==null)&&(ha=e)}function Gs(e){re(xe,xe.current),re(ia,e),ha===null&&(ha=e)}function vp(e){e.tag===22?(re(xe,xe.current),re(ia,e),ha===null&&(ha=e)):xt(e)}function xt(){re(xe,xe.current),re(ia,ia.current)}function Je(e){Te(ia),ha===e&&(ha=null),Te(xe)}var xe=Ea(0);function Ar(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||nd(t)||sd(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var lt=0,H=null,oe=null,Se=null,Tr=!1,Kl=!1,nl=!1,Dr=0,ui=0,$l=null,Xh=0;function ye(){throw Error(L(321))}function Fd(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!oa(e[t],a[t]))return!1;return!0}function Md(e,a,t,l,r,n){return lt=n,H=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,M.H=e===null||e.memoizedState===null?Zp:jd,nl=!1,n=t(l,r),nl=!1,Kl&&(n=bp(a,t,l,r)),xp(e),n}function xp(e){M.H=ci;var a=oe!==null&&oe.next!==null;if(lt=0,Se=oe=H=null,Tr=!1,ui=0,$l=null,a)throw Error(L(300));e===null||ke||(e=e.dependencies,e!==null&&wr(e)&&(ke=!0))}function bp(e,a,t,l){H=e;var r=0;do{if(Kl&&($l=null),ui=0,Kl=!1,25<=r)throw Error(L(301));if(r+=1,Se=oe=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}M.H=Qp,n=a(t,l)}while(Kl);return n}function Yh(){var e=M.H,a=e.useState()[0];return a=typeof a.then=="function"?ki(a):a,e=e.useState()[0],(oe!==null?oe.memoizedState:null)!==e&&(H.flags|=1024),a}function Ed(){var e=Dr!==0;return Dr=0,e}function _d(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Hd(e){if(Tr){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Tr=!1}lt=0,Se=oe=H=null,Kl=!1,ui=Dr=0,$l=null}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?H.memoizedState=Se=e:Se=Se.next=e,Se}function be(){if(oe===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var a=Se===null?H.memoizedState:Se.next;if(a!==null)Se=a,oe=e;else{if(e===null)throw H.alternate===null?Error(L(467)):Error(L(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},Se===null?H.memoizedState=Se=e:Se=Se.next=e}return Se}function en(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ki(e){var a=ui;return ui+=1,$l===null&&($l=[]),e=pp($l,e,a),a=H,(Se===null?a.memoizedState:Se.next)===null&&(a=a.alternate,M.H=a===null||a.memoizedState===null?Zp:jd),e}function an(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ki(e);if(e.$$typeof===Qa)return Me(e)}throw Error(L(438,String(e)))}function Ud(e){var a=null,t=H.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=H.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(r){return r.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=en(),H.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=Ry;return a.index++,t}function ot(e,a){return typeof a=="function"?a(e):a}function dr(e){var a=be();return Od(a,oe,e)}function Od(e,a,t){var l=e.queue;if(l===null)throw Error(L(311));l.lastRenderedReducer=t;var r=e.baseQueue,n=l.pending;if(n!==null){if(r!==null){var s=r.next;r.next=n.next,n.next=s}a.baseQueue=r=n,l.pending=null}if(n=e.baseState,r===null)e.memoizedState=n;else{a=r.next;var d=s=null,c=null,p=a,x=!1;do{var m=p.lane&-536870913;if(m!==p.lane?(N&m)===m:(lt&m)===m){var f=p.revertLane;if(f===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),m===lo&&(x=!0);else if((lt&f)===f){p=p.next,f===lo&&(x=!0);continue}else m={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(d=c=m,s=n):c=c.next=m,H.lanes|=f,Ht|=f;m=p.action,nl&&t(n,m),n=p.hasEagerState?p.eagerState:t(n,m)}else f={lane:m,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(d=c=f,s=n):c=c.next=f,H.lanes|=m,Ht|=m;p=p.next}while(p!==null&&p!==a);if(c===null?s=n:c.next=d,!oa(n,e.memoizedState)&&(ke=!0,x&&(t=Ql,t!==null)))throw t;e.memoizedState=n,e.baseState=s,e.baseQueue=c,l.lastRenderedState=n}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function $n(e){var a=be(),t=a.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var l=t.dispatch,r=t.pending,n=a.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do n=e(n,s.action),s=s.next;while(s!==r);oa(n,a.memoizedState)||(ke=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),t.lastRenderedState=n}return[n,l]}function Sp(e,a,t){var l=H,r=be(),n=X;if(n){if(t===void 0)throw Error(L(407));t=t()}else t=a();var s=!oa((oe||r).memoizedState,t);if(s&&(r.memoizedState=t,ke=!0),r=r.queue,qd(kp.bind(null,l,r,e),[e]),r.getSnapshot!==a||s||Se!==null&&Se.memoizedState.tag&1){if(l.flags|=2048,io(9,{destroy:void 0},Lp.bind(null,l,r,t,a),null),ie===null)throw Error(L(349));n||(lt&127)!==0||Cp(l,a,t)}return t}function Cp(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=H.updateQueue,a===null?(a=en(),H.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Lp(e,a,t,l){a.value=t,a.getSnapshot=l,Ip(a)&&wp(e)}function kp(e,a,t){return t(function(){Ip(a)&&wp(e)})}function Ip(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!oa(e,t)}catch{return!0}}function wp(e){var a=fl(e,2);a!==null&&Xe(a,e,2)}function Ws(e){var a=qe();if(typeof e=="function"){var t=e;if(e=t(),nl){St(!0);try{t()}finally{St(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ot,lastRenderedState:e},a}function zp(e,a,t,l){return e.baseState=t,Od(e,oe,typeof l=="function"?l:ot)}function Zh(e,a,t,l,r){if(ln(e))throw Error(L(485));if(e=a.action,e!==null){var n={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){n.listeners.push(s)}};M.T!==null?t(!0):n.isTransition=!1,l(n),t=a.pending,t===null?(n.next=a.pending=n,Bp(a,n)):(n.next=t.next,a.pending=t.next=n)}}function Bp(e,a){var t=a.action,l=a.payload,r=e.state;if(a.isTransition){var n=M.T,s={};M.T=s;try{var d=t(r,l),c=M.S;c!==null&&c(s,d),wc(e,a,d)}catch(p){Ns(e,a,p)}finally{n!==null&&s.types!==null&&(n.types=s.types),M.T=n}}else try{n=t(r,l),wc(e,a,n)}catch(p){Ns(e,a,p)}}function wc(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){zc(e,a,l)},function(l){return Ns(e,a,l)}):zc(e,a,t)}function zc(e,a,t){a.status="fulfilled",a.value=t,Ap(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Bp(e,t)))}function Ns(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,Ap(a),a=a.next;while(a!==l)}e.action=null}function Ap(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Tp(e,a){return a}function Bc(e,a){if(X){var t=ie.formState;if(t!==null){e:{var l=H;if(X){if(ce){a:{for(var r=ce,n=ya;r.nodeType!==8;){if(!n){r=null;break a}if(r=va(r.nextSibling),r===null){r=null;break a}}n=r.data,r=n==="F!"||n==="F"?r:null}if(r){ce=va(r.nextSibling),l=r.data==="F!";break e}}Et(l)}l=!1}l&&(a=t[0])}}return t=qe(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tp,lastRenderedState:a},t.queue=l,t=jp.bind(null,H,l),l.dispatch=t,l=Ws(!1),n=Vd.bind(null,H,!1,l.queue),l=qe(),r={state:a,dispatch:null,action:e,pending:null},l.queue=r,t=Zh.bind(null,H,r,n,t),r.dispatch=t,l.memoizedState=e,[a,t,!1]}function Ac(e){var a=be();return Dp(a,oe,e)}function Dp(e,a,t){if(a=Od(e,a,Tp)[0],e=dr(ot)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=ki(a)}catch(s){throw s===mo?$r:s}else l=a;a=be();var r=a.queue,n=r.dispatch;return t!==a.memoizedState&&(H.flags|=2048,io(9,{destroy:void 0},Qh.bind(null,r,t),null)),[l,n,e]}function Qh(e,a){e.action=a}function Tc(e){var a=be(),t=oe;if(t!==null)return Dp(a,t,e);be(),a=a.memoizedState,t=be();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function io(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=H.updateQueue,a===null&&(a=en(),H.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function Pp(){return be().memoizedState}function ur(e,a,t,l){var r=qe();H.flags|=e,r.memoizedState=io(1|a,{destroy:void 0},t,l===void 0?null:l)}function tn(e,a,t,l){var r=be();l=l===void 0?null:l;var n=r.memoizedState.inst;oe!==null&&l!==null&&Fd(l,oe.memoizedState.deps)?r.memoizedState=io(a,n,t,l):(H.flags|=e,r.memoizedState=io(1|a,n,t,l))}function Dc(e,a){ur(8390656,8,e,a)}function qd(e,a){tn(2048,8,e,a)}function Jh(e){H.flags|=4;var a=H.updateQueue;if(a===null)a=en(),H.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Rp(e){var a=be().memoizedState;return Jh({ref:a,nextImpl:e}),function(){if(($&2)!==0)throw Error(L(440));return a.impl.apply(void 0,arguments)}}function Fp(e,a){return tn(4,2,e,a)}function Mp(e,a){return tn(4,4,e,a)}function Ep(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function _p(e,a,t){t=t!=null?t.concat([e]):null,tn(4,4,Ep.bind(null,a,e),t)}function Gd(){}function Hp(e,a){var t=be();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&Fd(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function Up(e,a){var t=be();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&Fd(a,l[1]))return l[0];if(l=e(),nl){St(!0);try{e()}finally{St(!1)}}return t.memoizedState=[l,a],l}function Wd(e,a,t){return t===void 0||(lt&1073741824)!==0&&(N&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=zg(),H.lanes|=e,Ht|=e,t)}function Op(e,a,t,l){return oa(t,a)?t:oo.current!==null?(e=Wd(e,t,l),oa(e,a)||(ke=!0),e):(lt&42)===0||(lt&1073741824)!==0&&(N&261930)===0?(ke=!0,e.memoizedState=t):(e=zg(),H.lanes|=e,Ht|=e,a)}function qp(e,a,t,l,r){var n=ee.p;ee.p=n!==0&&8>n?n:8;var s=M.T,d={};M.T=d,Vd(e,!1,a,t);try{var c=r(),p=M.S;if(p!==null&&p(d,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var x=jh(c,l);Jo(e,a,x,la(e))}else Jo(e,a,l,la(e))}catch(m){Jo(e,a,{then:function(){},status:"rejected",reason:m},la())}finally{ee.p=n,s!==null&&d.types!==null&&(s.types=d.types),M.T=s}}function Kh(){}function Vs(e,a,t,l){if(e.tag!==5)throw Error(L(476));var r=Gp(e).queue;qp(e,r,a,$t,t===null?Kh:function(){return Wp(e),t(l)})}function Gp(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:$t,baseState:$t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ot,lastRenderedState:$t},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ot,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Wp(e){var a=Gp(e);a.next===null&&(a=e.alternate.memoizedState),Jo(e,a.next.queue,{},la())}function Nd(){return Me(gi)}function Np(){return be().memoizedState}function Vp(){return be().memoizedState}function $h(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=la();e=Bt(t);var l=At(a,e,t);l!==null&&(Xe(l,a,t),Yo(l,a,t)),a={cache:Ad()},e.payload=a;return}a=a.return}}function e0(e,a,t){var l=la();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},ln(e)?Xp(a,t):(t=Id(e,a,t,l),t!==null&&(Xe(t,e,l),Yp(t,a,l)))}function jp(e,a,t){var l=la();Jo(e,a,t,l)}function Jo(e,a,t,l){var r={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(ln(e))Xp(a,r);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var s=a.lastRenderedState,d=n(s,t);if(r.hasEagerState=!0,r.eagerState=d,oa(d,s))return Kr(e,a,r,0),ie===null&&Jr(),!1}catch{}if(t=Id(e,a,r,l),t!==null)return Xe(t,e,l),Yp(t,a,l),!0}return!1}function Vd(e,a,t,l){if(l={lane:2,revertLane:eu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ln(e)){if(a)throw Error(L(479))}else a=Id(e,t,l,2),a!==null&&Xe(a,e,2)}function ln(e){var a=e.alternate;return e===H||a!==null&&a===H}function Xp(e,a){Kl=Tr=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Yp(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Rf(e,t)}}var ci={readContext:Me,use:an,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};ci.useEffectEvent=ye;var Zp={readContext:Me,use:an,useCallback:function(e,a){return qe().memoizedState=[e,a===void 0?null:a],e},useContext:Me,useEffect:Dc,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,ur(4194308,4,Ep.bind(null,a,e),t)},useLayoutEffect:function(e,a){return ur(4194308,4,e,a)},useInsertionEffect:function(e,a){ur(4,2,e,a)},useMemo:function(e,a){var t=qe();a=a===void 0?null:a;var l=e();if(nl){St(!0);try{e()}finally{St(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=qe();if(t!==void 0){var r=t(a);if(nl){St(!0);try{t(a)}finally{St(!1)}}}else r=a;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=e0.bind(null,H,e),[l.memoizedState,e]},useRef:function(e){var a=qe();return e={current:e},a.memoizedState=e},useState:function(e){e=Ws(e);var a=e.queue,t=jp.bind(null,H,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Gd,useDeferredValue:function(e,a){var t=qe();return Wd(t,e,a)},useTransition:function(){var e=Ws(!1);return e=qp.bind(null,H,e.queue,!0,!1),qe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=H,r=qe();if(X){if(t===void 0)throw Error(L(407));t=t()}else{if(t=a(),ie===null)throw Error(L(349));(N&127)!==0||Cp(l,a,t)}r.memoizedState=t;var n={value:t,getSnapshot:a};return r.queue=n,Dc(kp.bind(null,l,n,e),[e]),l.flags|=2048,io(9,{destroy:void 0},Lp.bind(null,l,n,t,a),null),t},useId:function(){var e=qe(),a=ie.identifierPrefix;if(X){var t=Ra,l=Pa;t=(l&~(1<<32-ta(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=Dr++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Xh++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Nd,useFormState:Bc,useActionState:Bc,useOptimistic:function(e){var a=qe();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Vd.bind(null,H,!0,t),t.dispatch=a,[e,a]},useMemoCache:Ud,useCacheRefresh:function(){return qe().memoizedState=$h.bind(null,H)},useEffectEvent:function(e){var a=qe(),t={impl:e};return a.memoizedState=t,function(){if(($&2)!==0)throw Error(L(440));return t.impl.apply(void 0,arguments)}}},jd={readContext:Me,use:an,useCallback:Hp,useContext:Me,useEffect:qd,useImperativeHandle:_p,useInsertionEffect:Fp,useLayoutEffect:Mp,useMemo:Up,useReducer:dr,useRef:Pp,useState:function(){return dr(ot)},useDebugValue:Gd,useDeferredValue:function(e,a){var t=be();return Op(t,oe.memoizedState,e,a)},useTransition:function(){var e=dr(ot)[0],a=be().memoizedState;return[typeof e=="boolean"?e:ki(e),a]},useSyncExternalStore:Sp,useId:Np,useHostTransitionStatus:Nd,useFormState:Ac,useActionState:Ac,useOptimistic:function(e,a){var t=be();return zp(t,oe,e,a)},useMemoCache:Ud,useCacheRefresh:Vp};jd.useEffectEvent=Rp;var Qp={readContext:Me,use:an,useCallback:Hp,useContext:Me,useEffect:qd,useImperativeHandle:_p,useInsertionEffect:Fp,useLayoutEffect:Mp,useMemo:Up,useReducer:$n,useRef:Pp,useState:function(){return $n(ot)},useDebugValue:Gd,useDeferredValue:function(e,a){var t=be();return oe===null?Wd(t,e,a):Op(t,oe.memoizedState,e,a)},useTransition:function(){var e=$n(ot)[0],a=be().memoizedState;return[typeof e=="boolean"?e:ki(e),a]},useSyncExternalStore:Sp,useId:Np,useHostTransitionStatus:Nd,useFormState:Tc,useActionState:Tc,useOptimistic:function(e,a){var t=be();return oe!==null?zp(t,oe,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Ud,useCacheRefresh:Vp};Qp.useEffectEvent=Rp;function es(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:fe({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var js={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=la(),r=Bt(l);r.payload=a,t!=null&&(r.callback=t),a=At(e,r,l),a!==null&&(Xe(a,e,l),Yo(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=la(),r=Bt(l);r.tag=1,r.payload=a,t!=null&&(r.callback=t),a=At(e,r,l),a!==null&&(Xe(a,e,l),Yo(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=la(),l=Bt(t);l.tag=2,a!=null&&(l.callback=a),a=At(e,l,t),a!==null&&(Xe(a,e,t),Yo(a,e,t))}};function Pc(e,a,t,l,r,n,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,n,s):a.prototype&&a.prototype.isPureReactComponent?!ri(t,l)||!ri(r,n):!0}function Rc(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&js.enqueueReplaceState(a,a.state,null)}function sl(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=fe({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function Jp(e){Lr(e)}function Kp(e){console.error(e)}function $p(e){Lr(e)}function Pr(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Fc(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Xs(e,a,t){return t=Bt(t),t.tag=3,t.payload={element:null},t.callback=function(){Pr(e,a)},t}function eg(e){return e=Bt(e),e.tag=3,e}function ag(e,a,t,l){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var n=l.value;e.payload=function(){return r(n)},e.callback=function(){Fc(a,t,l)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Fc(a,t,l),typeof r!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function a0(e,a,t,l,r){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&go(a,t,r,!0),t=ia.current,t!==null){switch(t.tag){case 31:case 13:return ha===null?_r():t.alternate===null&&he===0&&(he=3),t.flags&=-257,t.flags|=65536,t.lanes=r,l===zr?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),cs(e,l,r)),!1;case 22:return t.flags|=65536,l===zr?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),cs(e,l,r)),!1}throw Error(L(435,t.tag))}return cs(e,l,r),_r(),!1}if(X)return a=ia.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=r,l!==Fs&&(e=Error(L(422),{cause:l}),si(ma(e,t)))):(l!==Fs&&(a=Error(L(423),{cause:l}),si(ma(a,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=ma(l,t),r=Xs(e.stateNode,l,r),Kn(e,r),he!==4&&(he=2)),!1;var n=Error(L(520),{cause:l});if(n=ma(n,t),ei===null?ei=[n]:ei.push(n),he!==4&&(he=2),a===null)return!0;l=ma(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=Xs(t.stateNode,l,e),Kn(t,e),!1;case 1:if(a=t.type,n=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Tt===null||!Tt.has(n))))return t.flags|=65536,r&=-r,t.lanes|=r,r=eg(r),ag(r,e,t,l),Kn(t,r),!1}t=t.return}while(t!==null);return!1}var Xd=Error(L(461)),ke=!1;function Pe(e,a,t,l){a.child=e===null?mp(a,null,t,l):rl(a,e.child,t,l)}function Mc(e,a,t,l,r){t=t.render;var n=a.ref;if("ref"in l){var s={};for(var d in l)d!=="ref"&&(s[d]=l[d])}else s=l;return il(a),l=Md(e,a,t,s,n,r),d=Ed(),e!==null&&!ke?(_d(e,a,r),it(e,a,r)):(X&&d&&zd(a),a.flags|=1,Pe(e,a,l,r),a.child)}function Ec(e,a,t,l,r){if(e===null){var n=t.type;return typeof n=="function"&&!wd(n)&&n.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=n,tg(e,a,n,l,r)):(e=nr(t.type,null,l,a,a.mode,r),e.ref=a.ref,e.return=a,a.child=e)}if(n=e.child,!Yd(e,r)){var s=n.memoizedProps;if(t=t.compare,t=t!==null?t:ri,t(s,l)&&e.ref===a.ref)return it(e,a,r)}return a.flags|=1,e=$a(n,l),e.ref=a.ref,e.return=a,a.child=e}function tg(e,a,t,l,r){if(e!==null){var n=e.memoizedProps;if(ri(n,l)&&e.ref===a.ref)if(ke=!1,a.pendingProps=l=n,Yd(e,r))(e.flags&131072)!==0&&(ke=!0);else return a.lanes=e.lanes,it(e,a,r)}return Ys(e,a,t,l,r)}function lg(e,a,t,l){var r=l.children,n=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|t:t,e!==null){for(l=a.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~n}else l=0,a.child=null;return _c(e,a,n,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&sr(a,n!==null?n.cachePool:null),n!==null?Ic(a,n):qs(),vp(a);else return l=a.lanes=536870912,_c(e,a,n!==null?n.baseLanes|t:t,t,l)}else n!==null?(sr(a,n.cachePool),Ic(a,n),xt(a),a.memoizedState=null):(e!==null&&sr(a,null),qs(),xt(a));return Pe(e,a,r,t),a.child}function Go(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function _c(e,a,t,l,r){var n=Td();return n=n===null?null:{parent:Le._currentValue,pool:n},a.memoizedState={baseLanes:t,cachePool:n},e!==null&&sr(a,null),qs(),vp(a),e!==null&&go(e,a,l,!0),a.childLanes=r,null}function cr(e,a){return a=Rr({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Hc(e,a,t){return rl(a,e.child,null,t),e=cr(a,a.pendingProps),e.flags|=2,Je(a),a.memoizedState=null,e}function t0(e,a,t){var l=a.pendingProps,r=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(X){if(l.mode==="hidden")return e=cr(a,l),a.lanes=536870912,Go(null,e);if(Gs(a),(e=ce)?(e=Zg(e,ya),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Mt!==null?{id:Pa,overflow:Ra}:null,retryLane:536870912,hydrationErrors:null},t=sp(e),t.return=a,a.child=t,Fe=a,ce=null)):e=null,e===null)throw Et(a);return a.lanes=536870912,null}return cr(a,l)}var n=e.memoizedState;if(n!==null){var s=n.dehydrated;if(Gs(a),r)if(a.flags&256)a.flags&=-257,a=Hc(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(L(558));else if(ke||go(e,a,t,!1),r=(t&e.childLanes)!==0,ke||r){if(l=ie,l!==null&&(s=Ff(l,t),s!==0&&s!==n.retryLane))throw n.retryLane=s,fl(e,s),Xe(l,e,s),Xd;_r(),a=Hc(e,a,t)}else e=n.treeContext,ce=va(s.nextSibling),Fe=a,X=!0,zt=null,ya=!1,e!==null&&up(a,e),a=cr(a,l),a.flags|=4096;return a}return e=$a(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function fr(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(L(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Ys(e,a,t,l,r){return il(a),t=Md(e,a,t,l,void 0,r),l=Ed(),e!==null&&!ke?(_d(e,a,r),it(e,a,r)):(X&&l&&zd(a),a.flags|=1,Pe(e,a,t,r),a.child)}function Uc(e,a,t,l,r,n){return il(a),a.updateQueue=null,t=bp(a,l,t,r),xp(e),l=Ed(),e!==null&&!ke?(_d(e,a,n),it(e,a,n)):(X&&l&&zd(a),a.flags|=1,Pe(e,a,t,n),a.child)}function Oc(e,a,t,l,r){if(il(a),a.stateNode===null){var n=Wl,s=t.contextType;typeof s=="object"&&s!==null&&(n=Me(s)),n=new t(l,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=js,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=l,n.state=a.memoizedState,n.refs={},Pd(a),s=t.contextType,n.context=typeof s=="object"&&s!==null?Me(s):Wl,n.state=a.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(es(a,t,s,l),n.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(s=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),s!==n.state&&js.enqueueReplaceState(n,n.state,null),Qo(a,l,n,r),Zo(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){n=a.stateNode;var d=a.memoizedProps,c=sl(t,d);n.props=c;var p=n.context,x=t.contextType;s=Wl,typeof x=="object"&&x!==null&&(s=Me(x));var m=t.getDerivedStateFromProps;x=typeof m=="function"||typeof n.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,x||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(d||p!==s)&&Rc(a,n,l,s),yt=!1;var f=a.memoizedState;n.state=f,Qo(a,l,n,r),Zo(),p=a.memoizedState,d||f!==p||yt?(typeof m=="function"&&(es(a,t,m,l),p=a.memoizedState),(c=yt||Pc(a,t,c,l,f,p,s))?(x||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=p),n.props=l,n.state=p,n.context=s,l=c):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{n=a.stateNode,Us(e,a),s=a.memoizedProps,x=sl(t,s),n.props=x,m=a.pendingProps,f=n.context,p=t.contextType,c=Wl,typeof p=="object"&&p!==null&&(c=Me(p)),d=t.getDerivedStateFromProps,(p=typeof d=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==m||f!==c)&&Rc(a,n,l,c),yt=!1,f=a.memoizedState,n.state=f,Qo(a,l,n,r),Zo();var h=a.memoizedState;s!==m||f!==h||yt||e!==null&&e.dependencies!==null&&wr(e.dependencies)?(typeof d=="function"&&(es(a,t,d,l),h=a.memoizedState),(x=yt||Pc(a,t,x,l,f,h,c)||e!==null&&e.dependencies!==null&&wr(e.dependencies))?(p||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,h,c),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,h,c)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=h),n.props=l,n.state=h,n.context=c,l=x):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(a.flags|=1024),l=!1)}return n=l,fr(e,a),l=(a.flags&128)!==0,n||l?(n=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,e!==null&&l?(a.child=rl(a,e.child,null,r),a.child=rl(a,null,t,r)):Pe(e,a,t,r),a.memoizedState=n.state,e=a.child):e=it(e,a,r),e}function qc(e,a,t,l){return ol(),a.flags|=256,Pe(e,a,t,l),a.child}var as={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ts(e){return{baseLanes:e,cachePool:fp()}}function ls(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=$e),e}function og(e,a,t){var l=a.pendingProps,r=!1,n=(a.flags&128)!==0,s;if((s=n)||(s=e!==null&&e.memoizedState===null?!1:(xe.current&2)!==0),s&&(r=!0,a.flags&=-129),s=(a.flags&32)!==0,a.flags&=-33,e===null){if(X){if(r?vt(a):xt(a),(e=ce)?(e=Zg(e,ya),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Mt!==null?{id:Pa,overflow:Ra}:null,retryLane:536870912,hydrationErrors:null},t=sp(e),t.return=a,a.child=t,Fe=a,ce=null)):e=null,e===null)throw Et(a);return sd(e)?a.lanes=32:a.lanes=536870912,null}var d=l.children;return l=l.fallback,r?(xt(a),r=a.mode,d=Rr({mode:"hidden",children:d},r),l=el(l,r,t,null),d.return=a,l.return=a,d.sibling=l,a.child=d,l=a.child,l.memoizedState=ts(t),l.childLanes=ls(e,s,t),a.memoizedState=as,Go(null,l)):(vt(a),Zs(a,d))}var c=e.memoizedState;if(c!==null&&(d=c.dehydrated,d!==null)){if(n)a.flags&256?(vt(a),a.flags&=-257,a=os(e,a,t)):a.memoizedState!==null?(xt(a),a.child=e.child,a.flags|=128,a=null):(xt(a),d=l.fallback,r=a.mode,l=Rr({mode:"visible",children:l.children},r),d=el(d,r,t,null),d.flags|=2,l.return=a,d.return=a,l.sibling=d,a.child=l,rl(a,e.child,null,t),l=a.child,l.memoizedState=ts(t),l.childLanes=ls(e,s,t),a.memoizedState=as,a=Go(null,l));else if(vt(a),sd(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var p=s.dgst;s=p,l=Error(L(419)),l.stack="",l.digest=s,si({value:l,source:null,stack:null}),a=os(e,a,t)}else if(ke||go(e,a,t,!1),s=(t&e.childLanes)!==0,ke||s){if(s=ie,s!==null&&(l=Ff(s,t),l!==0&&l!==c.retryLane))throw c.retryLane=l,fl(e,l),Xe(s,e,l),Xd;nd(d)||_r(),a=os(e,a,t)}else nd(d)?(a.flags|=192,a.child=e.child,a=null):(e=c.treeContext,ce=va(d.nextSibling),Fe=a,X=!0,zt=null,ya=!1,e!==null&&up(a,e),a=Zs(a,l.children),a.flags|=4096);return a}return r?(xt(a),d=l.fallback,r=a.mode,c=e.child,p=c.sibling,l=$a(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,p!==null?d=$a(p,d):(d=el(d,r,t,null),d.flags|=2),d.return=a,l.return=a,l.sibling=d,a.child=l,Go(null,l),l=a.child,d=e.child.memoizedState,d===null?d=ts(t):(r=d.cachePool,r!==null?(c=Le._currentValue,r=r.parent!==c?{parent:c,pool:c}:r):r=fp(),d={baseLanes:d.baseLanes|t,cachePool:r}),l.memoizedState=d,l.childLanes=ls(e,s,t),a.memoizedState=as,Go(e.child,l)):(vt(a),t=e.child,e=t.sibling,t=$a(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(s=a.deletions,s===null?(a.deletions=[e],a.flags|=16):s.push(e)),a.child=t,a.memoizedState=null,t)}function Zs(e,a){return a=Rr({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Rr(e,a){return e=Ke(22,e,null,a),e.lanes=0,e}function os(e,a,t){return rl(a,e.child,null,t),e=Zs(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Gc(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Es(e.return,a,t)}function is(e,a,t,l,r,n){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:r,treeForkCount:n}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=t,s.tailMode=r,s.treeForkCount=n)}function ig(e,a,t){var l=a.pendingProps,r=l.revealOrder,n=l.tail;l=l.children;var s=xe.current,d=(s&2)!==0;if(d?(s=s&1|2,a.flags|=128):s&=1,re(xe,s),Pe(e,a,l,t),l=X?ni:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gc(e,t,a);else if(e.tag===19)Gc(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(t=a.child,r=null;t!==null;)e=t.alternate,e!==null&&Ar(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=a.child,a.child=null):(r=t.sibling,t.sibling=null),is(a,!1,r,t,n,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=a.child,a.child=null;r!==null;){if(e=r.alternate,e!==null&&Ar(e)===null){a.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}is(a,!0,t,null,n,l);break;case"together":is(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function it(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),Ht|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(go(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(L(153));if(a.child!==null){for(e=a.child,t=$a(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=$a(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Yd(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&wr(e)))}function l0(e,a,t){switch(a.tag){case 3:xr(a,a.stateNode.containerInfo),ht(a,Le,e.memoizedState.cache),ol();break;case 27:case 5:Ls(a);break;case 4:xr(a,a.stateNode.containerInfo);break;case 10:ht(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Gs(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(vt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?og(e,a,t):(vt(a),e=it(e,a,t),e!==null?e.sibling:null);vt(a);break;case 19:var r=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(go(e,a,t,!1),l=(t&a.childLanes)!==0),r){if(l)return ig(e,a,t);a.flags|=128}if(r=a.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),re(xe,xe.current),l)break;return null;case 22:return a.lanes=0,lg(e,a,t,a.pendingProps);case 24:ht(a,Le,e.memoizedState.cache)}return it(e,a,t)}function rg(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)ke=!0;else{if(!Yd(e,t)&&(a.flags&128)===0)return ke=!1,l0(e,a,t);ke=(e.flags&131072)!==0}else ke=!1,X&&(a.flags&1048576)!==0&&dp(a,ni,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=Jt(a.elementType),a.type=e,typeof e=="function")wd(e)?(l=sl(e,l),a.tag=1,a=Oc(null,a,e,l,t)):(a.tag=0,a=Ys(null,a,e,l,t));else{if(e!=null){var r=e.$$typeof;if(r===fd){a.tag=11,a=Mc(null,a,e,l,t);break e}else if(r===pd){a.tag=14,a=Ec(null,a,e,l,t);break e}}throw a=Ss(e)||e,Error(L(306,a,""))}}return a;case 0:return Ys(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,r=sl(l,a.pendingProps),Oc(e,a,l,r,t);case 3:e:{if(xr(a,a.stateNode.containerInfo),e===null)throw Error(L(387));l=a.pendingProps;var n=a.memoizedState;r=n.element,Us(e,a),Qo(a,l,null,t);var s=a.memoizedState;if(l=s.cache,ht(a,Le,l),l!==n.cache&&_s(a,[Le],t,!0),Zo(),l=s.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:s.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=qc(e,a,l,t);break e}else if(l!==r){r=ma(Error(L(424)),a),si(r),a=qc(e,a,l,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ce=va(e.firstChild),Fe=a,X=!0,zt=null,ya=!0,t=mp(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ol(),l===r){a=it(e,a,t);break e}Pe(e,a,l,t)}a=a.child}return a;case 26:return fr(e,a),e===null?(t=cf(a.type,null,a.pendingProps,null))?a.memoizedState=t:X||(t=a.type,e=a.pendingProps,l=qr(wt.current).createElement(t),l[Re]=a,l[Ye]=e,Ee(l,t,e),Ae(l),a.stateNode=l):a.memoizedState=cf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ls(a),e===null&&X&&(l=a.stateNode=Qg(a.type,a.pendingProps,wt.current),Fe=a,ya=!0,r=ce,Ot(a.type)?(dd=r,ce=va(l.firstChild)):ce=r),Pe(e,a,a.pendingProps.children,t),fr(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&X&&((r=l=ce)&&(l=D0(l,a.type,a.pendingProps,ya),l!==null?(a.stateNode=l,Fe=a,ce=va(l.firstChild),ya=!1,r=!0):r=!1),r||Et(a)),Ls(a),r=a.type,n=a.pendingProps,s=e!==null?e.memoizedProps:null,l=n.children,id(r,n)?l=null:s!==null&&id(r,s)&&(a.flags|=32),a.memoizedState!==null&&(r=Md(e,a,Yh,null,null,t),gi._currentValue=r),fr(e,a),Pe(e,a,l,t),a.child;case 6:return e===null&&X&&((e=t=ce)&&(t=P0(t,a.pendingProps,ya),t!==null?(a.stateNode=t,Fe=a,ce=null,e=!0):e=!1),e||Et(a)),null;case 13:return og(e,a,t);case 4:return xr(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=rl(a,null,l,t):Pe(e,a,l,t),a.child;case 11:return Mc(e,a,a.type,a.pendingProps,t);case 7:return Pe(e,a,a.pendingProps,t),a.child;case 8:return Pe(e,a,a.pendingProps.children,t),a.child;case 12:return Pe(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,ht(a,a.type,l.value),Pe(e,a,l.children,t),a.child;case 9:return r=a.type._context,l=a.pendingProps.children,il(a),r=Me(r),l=l(r),a.flags|=1,Pe(e,a,l,t),a.child;case 14:return Ec(e,a,a.type,a.pendingProps,t);case 15:return tg(e,a,a.type,a.pendingProps,t);case 19:return ig(e,a,t);case 31:return t0(e,a,t);case 22:return lg(e,a,t,a.pendingProps);case 24:return il(a),l=Me(Le),e===null?(r=Td(),r===null&&(r=ie,n=Ad(),r.pooledCache=n,n.refCount++,n!==null&&(r.pooledCacheLanes|=t),r=n),a.memoizedState={parent:l,cache:r},Pd(a),ht(a,Le,r)):((e.lanes&t)!==0&&(Us(e,a),Qo(a,null,null,t),Zo()),r=e.memoizedState,n=a.memoizedState,r.parent!==l?(r={parent:l,cache:l},a.memoizedState=r,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=r),ht(a,Le,l)):(l=n.cache,ht(a,Le,l),l!==r.cache&&_s(a,[Le],t,!0))),Pe(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(L(156,a.tag))}function Na(e){e.flags|=4}function rs(e,a,t,l,r){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Tg())e.flags|=8192;else throw tl=zr,Dd}else e.flags&=-16777217}function Wc(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$g(a))if(Tg())e.flags|=8192;else throw tl=zr,Dd}function Qi(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Df():536870912,e.lanes|=a,ro|=a)}function Mo(e,a){if(!X)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ue(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function o0(e,a,t){var l=a.pendingProps;switch(Bd(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(a),null;case 1:return ue(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),et(Le),eo(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Dl(a)?Na(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Jn())),ue(a),null;case 26:var r=a.type,n=a.memoizedState;return e===null?(Na(a),n!==null?(ue(a),Wc(a,n)):(ue(a),rs(a,r,null,l,t))):n?n!==e.memoizedState?(Na(a),ue(a),Wc(a,n)):(ue(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&Na(a),ue(a),rs(a,r,e,l,t)),null;case 27:if(br(a),t=wt.current,r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Na(a);else{if(!l){if(a.stateNode===null)throw Error(L(166));return ue(a),null}e=Ma.current,Dl(a)?vc(a,e):(e=Qg(r,l,t),a.stateNode=e,Na(a))}return ue(a),null;case 5:if(br(a),r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Na(a);else{if(!l){if(a.stateNode===null)throw Error(L(166));return ue(a),null}if(n=Ma.current,Dl(a))vc(a,n);else{var s=qr(wt.current);switch(n){case 1:n=s.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:n=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":n=s.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":n=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?s.createElement(r,{is:l.is}):s.createElement(r)}}n[Re]=a,n[Ye]=l;e:for(s=a.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}a.stateNode=n;e:switch(Ee(n,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Na(a)}}return ue(a),rs(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&Na(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(L(166));if(e=wt.current,Dl(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,r=Fe,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[Re]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||jg(e.nodeValue,t)),e||Et(a,!0)}else e=qr(e).createTextNode(l),e[Re]=a,a.stateNode=e}return ue(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=Dl(a),t!==null){if(e===null){if(!l)throw Error(L(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(557));e[Re]=a}else ol(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ue(a),e=!1}else t=Jn(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(Je(a),a):(Je(a),null);if((a.flags&128)!==0)throw Error(L(558))}return ue(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Dl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(L(318));if(r=a.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(L(317));r[Re]=a}else ol(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ue(a),r=!1}else r=Jn(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return a.flags&256?(Je(a),a):(Je(a),null)}return Je(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==r&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Qi(a,a.updateQueue),ue(a),null);case 4:return eo(),e===null&&au(a.stateNode.containerInfo),ue(a),null;case 10:return et(a.type),ue(a),null;case 19:if(Te(xe),l=a.memoizedState,l===null)return ue(a),null;if(r=(a.flags&128)!==0,n=l.rendering,n===null)if(r)Mo(l,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(n=Ar(e),n!==null){for(a.flags|=128,Mo(l,!1),e=n.updateQueue,a.updateQueue=e,Qi(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)np(t,e),t=t.sibling;return re(xe,xe.current&1|2),X&&Ya(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&ea()>Mr&&(a.flags|=128,r=!0,Mo(l,!1),a.lanes=4194304)}else{if(!r)if(e=Ar(n),e!==null){if(a.flags|=128,r=!0,e=e.updateQueue,a.updateQueue=e,Qi(a,e),Mo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!X)return ue(a),null}else 2*ea()-l.renderingStartTime>Mr&&t!==536870912&&(a.flags|=128,r=!0,Mo(l,!1),a.lanes=4194304);l.isBackwards?(n.sibling=a.child,a.child=n):(e=l.last,e!==null?e.sibling=n:a.child=n,l.last=n)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ea(),e.sibling=null,t=xe.current,re(xe,r?t&1|2:t&1),X&&Ya(a,l.treeForkCount),e):(ue(a),null);case 22:case 23:return Je(a),Rd(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(ue(a),a.subtreeFlags&6&&(a.flags|=8192)):ue(a),t=a.updateQueue,t!==null&&Qi(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&Te(al),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),et(Le),ue(a),null;case 25:return null;case 30:return null}throw Error(L(156,a.tag))}function i0(e,a){switch(Bd(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return et(Le),eo(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return br(a),null;case 31:if(a.memoizedState!==null){if(Je(a),a.alternate===null)throw Error(L(340));ol()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Je(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(L(340));ol()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Te(xe),null;case 4:return eo(),null;case 10:return et(a.type),null;case 22:case 23:return Je(a),Rd(),e!==null&&Te(al),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return et(Le),null;case 25:return null;default:return null}}function ng(e,a){switch(Bd(a),a.tag){case 3:et(Le),eo();break;case 26:case 27:case 5:br(a);break;case 4:eo();break;case 31:a.memoizedState!==null&&Je(a);break;case 13:Je(a);break;case 19:Te(xe);break;case 10:et(a.type);break;case 22:case 23:Je(a),Rd(),e!==null&&Te(al);break;case 24:et(Le)}}function Ii(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var r=l.next;t=r;do{if((t.tag&e)===e){l=void 0;var n=t.create,s=t.inst;l=n(),s.destroy=l}t=t.next}while(t!==r)}}catch(d){te(a,a.return,d)}}function _t(e,a,t){try{var l=a.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var n=r.next;l=n;do{if((l.tag&e)===e){var s=l.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,r=a;var c=t,p=d;try{p()}catch(x){te(r,c,x)}}}l=l.next}while(l!==n)}}catch(x){te(a,a.return,x)}}function sg(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{hp(a,t)}catch(l){te(e,e.return,l)}}}function dg(e,a,t){t.props=sl(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){te(e,a,l)}}function Ko(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(r){te(e,a,r)}}function Fa(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(r){te(e,a,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){te(e,a,r)}else t.current=null}function ug(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(r){te(e,e.return,r)}}function ns(e,a,t){try{var l=e.stateNode;I0(l,e.type,t,a),l[Ye]=a}catch(r){te(e,e.return,r)}}function cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ot(e.type)||e.tag===4}function ss(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ot(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qs(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ja));else if(l!==4&&(l===27&&Ot(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(Qs(e,a,t),e=e.sibling;e!==null;)Qs(e,a,t),e=e.sibling}function Fr(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&Ot(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Fr(e,a,t),e=e.sibling;e!==null;)Fr(e,a,t),e=e.sibling}function fg(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,r=a.attributes;r.length;)a.removeAttributeNode(r[0]);Ee(a,l,t),a[Re]=e,a[Ye]=t}catch(n){te(e,e.return,n)}}var Za=!1,Ce=!1,ds=!1,Nc=typeof WeakSet=="function"?WeakSet:Set,Be=null;function r0(e,a){if(e=e.containerInfo,ld=Vr,e=$f(e),Ld(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var r=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{t.nodeType,n.nodeType}catch{t=null;break e}var s=0,d=-1,c=-1,p=0,x=0,m=e,f=null;a:for(;;){for(var h;m!==t||r!==0&&m.nodeType!==3||(d=s+r),m!==n||l!==0&&m.nodeType!==3||(c=s+l),m.nodeType===3&&(s+=m.nodeValue.length),(h=m.firstChild)!==null;)f=m,m=h;for(;;){if(m===e)break a;if(f===t&&++p===r&&(d=s),f===n&&++x===l&&(c=s),(h=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=h}t=d===-1||c===-1?null:{start:d,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(od={focusedElem:e,selectionRange:t},Vr=!1,Be=a;Be!==null;)if(a=Be,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Be=e;else for(;Be!==null;){switch(a=Be,n=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)r=e[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,t=a,r=n.memoizedProps,n=n.memoizedState,l=t.stateNode;try{var k=sl(t.type,r);e=l.getSnapshotBeforeUpdate(k,n),l.__reactInternalSnapshotBeforeUpdate=e}catch(z){te(t,t.return,z)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)rd(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(L(163))}if(e=a.sibling,e!==null){e.return=a.return,Be=e;break}Be=a.return}}function pg(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:ja(e,t),l&4&&Ii(5,t);break;case 1:if(ja(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(s){te(t,t.return,s)}else{var r=sl(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(r,a,e.__reactInternalSnapshotBeforeUpdate)}catch(s){te(t,t.return,s)}}l&64&&sg(t),l&512&&Ko(t,t.return);break;case 3:if(ja(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{hp(e,a)}catch(s){te(t,t.return,s)}}break;case 27:a===null&&l&4&&fg(t);case 26:case 5:ja(e,t),a===null&&l&4&&ug(t),l&512&&Ko(t,t.return);break;case 12:ja(e,t);break;case 31:ja(e,t),l&4&&yg(e,t);break;case 13:ja(e,t),l&4&&hg(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=m0.bind(null,t),R0(e,t))));break;case 22:if(l=t.memoizedState!==null||Za,!l){a=a!==null&&a.memoizedState!==null||Ce,r=Za;var n=Ce;Za=l,(Ce=a)&&!n?Xa(e,t,(t.subtreeFlags&8772)!==0):ja(e,t),Za=r,Ce=n}break;case 30:break;default:ja(e,t)}}function gg(e){var a=e.alternate;a!==null&&(e.alternate=null,gg(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&hd(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,Ve=!1;function Va(e,a,t){for(t=t.child;t!==null;)mg(e,a,t),t=t.sibling}function mg(e,a,t){if(aa&&typeof aa.onCommitFiberUnmount=="function")try{aa.onCommitFiberUnmount(vi,t)}catch{}switch(t.tag){case 26:Ce||Fa(t,a),Va(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ce||Fa(t,a);var l=ge,r=Ve;Ot(t.type)&&(ge=t.stateNode,Ve=!1),Va(e,a,t),ti(t.stateNode),ge=l,Ve=r;break;case 5:Ce||Fa(t,a);case 6:if(l=ge,r=Ve,ge=null,Va(e,a,t),ge=l,Ve=r,ge!==null)if(Ve)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(t.stateNode)}catch(n){te(t,a,n)}else try{ge.removeChild(t.stateNode)}catch(n){te(t,a,n)}break;case 18:ge!==null&&(Ve?(e=ge,rf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),co(e)):rf(ge,t.stateNode));break;case 4:l=ge,r=Ve,ge=t.stateNode.containerInfo,Ve=!0,Va(e,a,t),ge=l,Ve=r;break;case 0:case 11:case 14:case 15:_t(2,t,a),Ce||_t(4,t,a),Va(e,a,t);break;case 1:Ce||(Fa(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&dg(t,a,l)),Va(e,a,t);break;case 21:Va(e,a,t);break;case 22:Ce=(l=Ce)||t.memoizedState!==null,Va(e,a,t),Ce=l;break;default:Va(e,a,t)}}function yg(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{co(e)}catch(t){te(a,a.return,t)}}}function hg(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{co(e)}catch(t){te(a,a.return,t)}}function n0(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Nc),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Nc),a;default:throw Error(L(435,e.tag))}}function Ji(e,a){var t=n0(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var r=y0.bind(null,e,l);l.then(r,r)}})}function We(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var r=t[l],n=e,s=a,d=s;e:for(;d!==null;){switch(d.tag){case 27:if(Ot(d.type)){ge=d.stateNode,Ve=!1;break e}break;case 5:ge=d.stateNode,Ve=!1;break e;case 3:case 4:ge=d.stateNode.containerInfo,Ve=!0;break e}d=d.return}if(ge===null)throw Error(L(160));mg(n,s,r),ge=null,Ve=!1,n=r.alternate,n!==null&&(n.return=null),r.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)vg(a,e),a=a.sibling}var za=null;function vg(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:We(a,e),Ne(e),l&4&&(_t(3,e,e.return),Ii(3,e),_t(5,e,e.return));break;case 1:We(a,e),Ne(e),l&512&&(Ce||t===null||Fa(t,t.return)),l&64&&Za&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var r=za;if(We(a,e),Ne(e),l&512&&(Ce||t===null||Fa(t,t.return)),l&4){var n=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,r=r.ownerDocument||r;a:switch(l){case"title":n=r.getElementsByTagName("title")[0],(!n||n[Si]||n[Re]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=r.createElement(l),r.head.insertBefore(n,r.querySelector("head > title"))),Ee(n,l,t),n[Re]=e,Ae(n),l=n;break e;case"link":var s=pf("link","href",r).get(l+(t.href||""));if(s){for(var d=0;d<s.length;d++)if(n=s[d],n.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&n.getAttribute("rel")===(t.rel==null?null:t.rel)&&n.getAttribute("title")===(t.title==null?null:t.title)&&n.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(d,1);break a}}n=r.createElement(l),Ee(n,l,t),r.head.appendChild(n);break;case"meta":if(s=pf("meta","content",r).get(l+(t.content||""))){for(d=0;d<s.length;d++)if(n=s[d],n.getAttribute("content")===(t.content==null?null:""+t.content)&&n.getAttribute("name")===(t.name==null?null:t.name)&&n.getAttribute("property")===(t.property==null?null:t.property)&&n.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&n.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(d,1);break a}}n=r.createElement(l),Ee(n,l,t),r.head.appendChild(n);break;default:throw Error(L(468,l))}n[Re]=e,Ae(n),l=n}e.stateNode=l}else gf(r,e.type,e.stateNode);else e.stateNode=ff(r,l,e.memoizedProps);else n!==l?(n===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):n.count--,l===null?gf(r,e.type,e.stateNode):ff(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ns(e,e.memoizedProps,t.memoizedProps)}break;case 27:We(a,e),Ne(e),l&512&&(Ce||t===null||Fa(t,t.return)),t!==null&&l&4&&ns(e,e.memoizedProps,t.memoizedProps);break;case 5:if(We(a,e),Ne(e),l&512&&(Ce||t===null||Fa(t,t.return)),e.flags&32){r=e.stateNode;try{to(r,"")}catch(k){te(e,e.return,k)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,ns(e,r,t!==null?t.memoizedProps:r)),l&1024&&(ds=!0);break;case 6:if(We(a,e),Ne(e),l&4){if(e.stateNode===null)throw Error(L(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(k){te(e,e.return,k)}}break;case 3:if(mr=null,r=za,za=Gr(a.containerInfo),We(a,e),za=r,Ne(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{co(a.containerInfo)}catch(k){te(e,e.return,k)}ds&&(ds=!1,xg(e));break;case 4:l=za,za=Gr(e.stateNode.containerInfo),We(a,e),Ne(e),za=l;break;case 12:We(a,e),Ne(e);break;case 31:We(a,e),Ne(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ji(e,l)));break;case 13:We(a,e),Ne(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(on=ea()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ji(e,l)));break;case 22:r=e.memoizedState!==null;var c=t!==null&&t.memoizedState!==null,p=Za,x=Ce;if(Za=p||r,Ce=x||c,We(a,e),Ce=x,Za=p,Ne(e),l&8192)e:for(a=e.stateNode,a._visibility=r?a._visibility&-2:a._visibility|1,r&&(t===null||c||Za||Ce||Kt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){c=t=a;try{if(n=c.stateNode,r)s=n.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=c.stateNode;var m=c.memoizedProps.style,f=m!=null&&m.hasOwnProperty("display")?m.display:null;d.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(k){te(c,c.return,k)}}}else if(a.tag===6){if(t===null){c=a;try{c.stateNode.nodeValue=r?"":c.memoizedProps}catch(k){te(c,c.return,k)}}}else if(a.tag===18){if(t===null){c=a;try{var h=c.stateNode;r?nf(h,!0):nf(c.stateNode,!1)}catch(k){te(c,c.return,k)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Ji(e,t))));break;case 19:We(a,e),Ne(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ji(e,l)));break;case 30:break;case 21:break;default:We(a,e),Ne(e)}}function Ne(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(cg(l)){t=l;break}l=l.return}if(t==null)throw Error(L(160));switch(t.tag){case 27:var r=t.stateNode,n=ss(e);Fr(e,n,r);break;case 5:var s=t.stateNode;t.flags&32&&(to(s,""),t.flags&=-33);var d=ss(e);Fr(e,d,s);break;case 3:case 4:var c=t.stateNode.containerInfo,p=ss(e);Qs(e,p,c);break;default:throw Error(L(161))}}catch(x){te(e,e.return,x)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;xg(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function ja(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)pg(e,a.alternate,a),a=a.sibling}function Kt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:_t(4,a,a.return),Kt(a);break;case 1:Fa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&dg(a,a.return,t),Kt(a);break;case 27:ti(a.stateNode);case 26:case 5:Fa(a,a.return),Kt(a);break;case 22:a.memoizedState===null&&Kt(a);break;case 30:Kt(a);break;default:Kt(a)}e=e.sibling}}function Xa(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,r=e,n=a,s=n.flags;switch(n.tag){case 0:case 11:case 15:Xa(r,n,t),Ii(4,n);break;case 1:if(Xa(r,n,t),l=n,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(p){te(l,l.return,p)}if(l=n,r=l.updateQueue,r!==null){var d=l.stateNode;try{var c=r.shared.hiddenCallbacks;if(c!==null)for(r.shared.hiddenCallbacks=null,r=0;r<c.length;r++)yp(c[r],d)}catch(p){te(l,l.return,p)}}t&&s&64&&sg(n),Ko(n,n.return);break;case 27:fg(n);case 26:case 5:Xa(r,n,t),t&&l===null&&s&4&&ug(n),Ko(n,n.return);break;case 12:Xa(r,n,t);break;case 31:Xa(r,n,t),t&&s&4&&yg(r,n);break;case 13:Xa(r,n,t),t&&s&4&&hg(r,n);break;case 22:n.memoizedState===null&&Xa(r,n,t),Ko(n,n.return);break;case 30:break;default:Xa(r,n,t)}a=a.sibling}}function Zd(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Li(t))}function Qd(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Li(e))}function wa(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)bg(e,a,t,l),a=a.sibling}function bg(e,a,t,l){var r=a.flags;switch(a.tag){case 0:case 11:case 15:wa(e,a,t,l),r&2048&&Ii(9,a);break;case 1:wa(e,a,t,l);break;case 3:wa(e,a,t,l),r&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Li(e)));break;case 12:if(r&2048){wa(e,a,t,l),e=a.stateNode;try{var n=a.memoizedProps,s=n.id,d=n.onPostCommit;typeof d=="function"&&d(s,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){te(a,a.return,c)}}else wa(e,a,t,l);break;case 31:wa(e,a,t,l);break;case 13:wa(e,a,t,l);break;case 23:break;case 22:n=a.stateNode,s=a.alternate,a.memoizedState!==null?n._visibility&2?wa(e,a,t,l):$o(e,a):n._visibility&2?wa(e,a,t,l):(n._visibility|=2,Rl(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),r&2048&&Zd(s,a);break;case 24:wa(e,a,t,l),r&2048&&Qd(a.alternate,a);break;default:wa(e,a,t,l)}}function Rl(e,a,t,l,r){for(r=r&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=e,s=a,d=t,c=l,p=s.flags;switch(s.tag){case 0:case 11:case 15:Rl(n,s,d,c,r),Ii(8,s);break;case 23:break;case 22:var x=s.stateNode;s.memoizedState!==null?x._visibility&2?Rl(n,s,d,c,r):$o(n,s):(x._visibility|=2,Rl(n,s,d,c,r)),r&&p&2048&&Zd(s.alternate,s);break;case 24:Rl(n,s,d,c,r),r&&p&2048&&Qd(s.alternate,s);break;default:Rl(n,s,d,c,r)}a=a.sibling}}function $o(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,r=l.flags;switch(l.tag){case 22:$o(t,l),r&2048&&Zd(l.alternate,l);break;case 24:$o(t,l),r&2048&&Qd(l.alternate,l);break;default:$o(t,l)}a=a.sibling}}var Wo=8192;function Pl(e,a,t){if(e.subtreeFlags&Wo)for(e=e.child;e!==null;)Sg(e,a,t),e=e.sibling}function Sg(e,a,t){switch(e.tag){case 26:Pl(e,a,t),e.flags&Wo&&e.memoizedState!==null&&V0(t,za,e.memoizedState,e.memoizedProps);break;case 5:Pl(e,a,t);break;case 3:case 4:var l=za;za=Gr(e.stateNode.containerInfo),Pl(e,a,t),za=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Wo,Wo=16777216,Pl(e,a,t),Wo=l):Pl(e,a,t));break;default:Pl(e,a,t)}}function Cg(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Eo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Be=l,kg(l,e)}Cg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lg(e),e=e.sibling}function Lg(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&_t(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,pr(e)):Eo(e);break;default:Eo(e)}}function pr(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Be=l,kg(l,e)}Cg(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:_t(8,a,a.return),pr(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,pr(a));break;default:pr(a)}e=e.sibling}}function kg(e,a){for(;Be!==null;){var t=Be;switch(t.tag){case 0:case 11:case 15:_t(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Li(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Be=l;else e:for(t=e;Be!==null;){l=Be;var r=l.sibling,n=l.return;if(gg(l),l===t){Be=null;break e}if(r!==null){r.return=n,Be=r;break e}Be=n}}}var s0={getCacheForType:function(e){var a=Me(Le),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return Me(Le).controller.signal}},d0=typeof WeakMap=="function"?WeakMap:Map,$=0,ie=null,W=null,N=0,ae=0,Qe=null,Lt=!1,yo=!1,Jd=!1,rt=0,he=0,Ht=0,ll=0,Kd=0,$e=0,ro=0,ei=null,je=null,Js=!1,on=0,Ig=0,Mr=1/0,Er=null,Tt=null,we=0,Dt=null,no=null,at=0,Ks=0,$s=null,wg=null,ai=0,ed=null;function la(){return($&2)!==0&&N!==0?N&-N:M.T!==null?eu():Mf()}function zg(){if($e===0)if((N&536870912)===0||X){var e=qi;qi<<=1,(qi&3932160)===0&&(qi=262144),$e=e}else $e=536870912;return e=ia.current,e!==null&&(e.flags|=32),$e}function Xe(e,a,t){(e===ie&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(so(e,0),kt(e,N,$e,!1)),bi(e,t),(($&2)===0||e!==ie)&&(e===ie&&(($&2)===0&&(ll|=t),he===4&&kt(e,N,$e,!1)),_a(e))}function Bg(e,a,t){if(($&6)!==0)throw Error(L(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||xi(e,a),r=l?f0(e,a):us(e,a,!0),n=l;do{if(r===0){yo&&!l&&kt(e,a,0,!1);break}else{if(t=e.current.alternate,n&&!u0(t)){r=us(e,a,!1),n=!1;continue}if(r===2){if(n=a,e.errorRecoveryDisabledLanes&n)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){a=s;e:{var d=e;r=ei;var c=d.current.memoizedState.isDehydrated;if(c&&(so(d,s).flags|=256),s=us(d,s,!1),s!==2){if(Jd&&!c){d.errorRecoveryDisabledLanes|=n,ll|=n,r=4;break e}n=je,je=r,n!==null&&(je===null?je=n:je.push.apply(je,n))}r=s}if(n=!1,r!==2)continue}}if(r===1){so(e,0),kt(e,a,0,!0);break}e:{switch(l=e,n=r,n){case 0:case 1:throw Error(L(345));case 4:if((a&4194048)!==a)break;case 6:kt(l,a,$e,!Lt);break e;case 2:je=null;break;case 3:case 5:break;default:throw Error(L(329))}if((a&62914560)===a&&(r=on+300-ea(),10<r)){if(kt(l,a,$e,!Lt),Xr(l,0,!0)!==0)break e;at=a,l.timeoutHandle=Yg(Vc.bind(null,l,t,je,Er,Js,a,$e,ll,ro,Lt,n,"Throttled",-0,0),r);break e}Vc(l,t,je,Er,Js,a,$e,ll,ro,Lt,n,null,-0,0)}}break}while(!0);_a(e)}function Vc(e,a,t,l,r,n,s,d,c,p,x,m,f,h){if(e.timeoutHandle=-1,m=a.subtreeFlags,m&8192||(m&16785408)===16785408){m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ja},Sg(a,n,m);var k=(n&62914560)===n?on-ea():(n&4194048)===n?Ig-ea():0;if(k=j0(m,k),k!==null){at=n,e.cancelPendingCommit=k(Xc.bind(null,e,a,n,t,l,r,s,d,c,x,m,null,f,h)),kt(e,n,s,!p);return}}Xc(e,a,n,t,l,r,s,d,c)}function u0(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var r=t[l],n=r.getSnapshot;r=r.value;try{if(!oa(n(),r))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function kt(e,a,t,l){a&=~Kd,a&=~ll,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var r=a;0<r;){var n=31-ta(r),s=1<<n;l[n]=-1,r&=~s}t!==0&&Pf(e,t,a)}function rn(){return($&6)===0?(wi(0,!1),!1):!0}function $d(){if(W!==null){if(ae===0)var e=W.return;else e=W,Ka=pl=null,Hd(e),Jl=null,di=0,e=W;for(;e!==null;)ng(e.alternate,e),e=e.return;W=null}}function so(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,B0(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),at=0,$d(),ie=e,W=t=$a(e.current,null),N=a,ae=0,Qe=null,Lt=!1,yo=xi(e,a),Jd=!1,ro=$e=Kd=ll=Ht=he=0,je=ei=null,Js=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var r=31-ta(l),n=1<<r;a|=e[r],l&=~n}return rt=a,Jr(),t}function Ag(e,a){H=null,M.H=ci,a===mo||a===$r?(a=Lc(),ae=3):a===Dd?(a=Lc(),ae=4):ae=a===Xd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Qe=a,W===null&&(he=1,Pr(e,ma(a,e.current)))}function Tg(){var e=ia.current;return e===null?!0:(N&4194048)===N?ha===null:(N&62914560)===N||(N&536870912)!==0?e===ha:!1}function Dg(){var e=M.H;return M.H=ci,e===null?ci:e}function Pg(){var e=M.A;return M.A=s0,e}function _r(){he=4,Lt||(N&4194048)!==N&&ia.current!==null||(yo=!0),(Ht&134217727)===0&&(ll&134217727)===0||ie===null||kt(ie,N,$e,!1)}function us(e,a,t){var l=$;$|=2;var r=Dg(),n=Pg();(ie!==e||N!==a)&&(Er=null,so(e,a)),a=!1;var s=he;e:do try{if(ae!==0&&W!==null){var d=W,c=Qe;switch(ae){case 8:$d(),s=6;break e;case 3:case 2:case 9:case 6:ia.current===null&&(a=!0);var p=ae;if(ae=0,Qe=null,jl(e,d,c,p),t&&yo){s=0;break e}break;default:p=ae,ae=0,Qe=null,jl(e,d,c,p)}}c0(),s=he;break}catch(x){Ag(e,x)}while(!0);return a&&e.shellSuspendCounter++,Ka=pl=null,$=l,M.H=r,M.A=n,W===null&&(ie=null,N=0,Jr()),s}function c0(){for(;W!==null;)Rg(W)}function f0(e,a){var t=$;$|=2;var l=Dg(),r=Pg();ie!==e||N!==a?(Er=null,Mr=ea()+500,so(e,a)):yo=xi(e,a);e:do try{if(ae!==0&&W!==null){a=W;var n=Qe;a:switch(ae){case 1:ae=0,Qe=null,jl(e,a,n,1);break;case 2:case 9:if(Cc(n)){ae=0,Qe=null,jc(a);break}a=function(){ae!==2&&ae!==9||ie!==e||(ae=7),_a(e)},n.then(a,a);break e;case 3:ae=7;break e;case 4:ae=5;break e;case 7:Cc(n)?(ae=0,Qe=null,jc(a)):(ae=0,Qe=null,jl(e,a,n,7));break;case 5:var s=null;switch(W.tag){case 26:s=W.memoizedState;case 5:case 27:var d=W;if(s?$g(s):d.stateNode.complete){ae=0,Qe=null;var c=d.sibling;if(c!==null)W=c;else{var p=d.return;p!==null?(W=p,nn(p)):W=null}break a}}ae=0,Qe=null,jl(e,a,n,5);break;case 6:ae=0,Qe=null,jl(e,a,n,6);break;case 8:$d(),he=6;break e;default:throw Error(L(462))}}p0();break}catch(x){Ag(e,x)}while(!0);return Ka=pl=null,M.H=l,M.A=r,$=t,W!==null?0:(ie=null,N=0,Jr(),he)}function p0(){for(;W!==null&&!Ey();)Rg(W)}function Rg(e){var a=rg(e.alternate,e,rt);e.memoizedProps=e.pendingProps,a===null?nn(e):W=a}function jc(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Uc(t,a,a.pendingProps,a.type,void 0,N);break;case 11:a=Uc(t,a,a.pendingProps,a.type.render,a.ref,N);break;case 5:Hd(a);default:ng(t,a),a=W=np(a,rt),a=rg(t,a,rt)}e.memoizedProps=e.pendingProps,a===null?nn(e):W=a}function jl(e,a,t,l){Ka=pl=null,Hd(a),Jl=null,di=0;var r=a.return;try{if(a0(e,r,a,t,N)){he=1,Pr(e,ma(t,e.current)),W=null;return}}catch(n){if(r!==null)throw W=r,n;he=1,Pr(e,ma(t,e.current)),W=null;return}a.flags&32768?(X||l===1?e=!0:yo||(N&536870912)!==0?e=!1:(Lt=e=!0,(l===2||l===9||l===3||l===6)&&(l=ia.current,l!==null&&l.tag===13&&(l.flags|=16384))),Fg(a,e)):nn(a)}function nn(e){var a=e;do{if((a.flags&32768)!==0){Fg(a,Lt);return}e=a.return;var t=o0(a.alternate,a,rt);if(t!==null){W=t;return}if(a=a.sibling,a!==null){W=a;return}W=a=e}while(a!==null);he===0&&(he=5)}function Fg(e,a){do{var t=i0(e.alternate,e);if(t!==null){t.flags&=32767,W=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){W=e;return}W=e=t}while(e!==null);he=6,W=null}function Xc(e,a,t,l,r,n,s,d,c){e.cancelPendingCommit=null;do sn();while(we!==0);if(($&6)!==0)throw Error(L(327));if(a!==null){if(a===e.current)throw Error(L(177));if(n=a.lanes|a.childLanes,n|=kd,jy(e,t,n,s,d,c),e===ie&&(W=ie=null,N=0),no=a,Dt=e,at=t,Ks=n,$s=r,wg=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,h0(Sr,function(){return Ug(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,r=ee.p,ee.p=2,s=$,$|=4;try{r0(e,a,t)}finally{$=s,ee.p=r,M.T=l}}we=1,Mg(),Eg(),_g()}}function Mg(){if(we===1){we=0;var e=Dt,a=no,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=M.T,M.T=null;var l=ee.p;ee.p=2;var r=$;$|=4;try{vg(a,e);var n=od,s=$f(e.containerInfo),d=n.focusedElem,c=n.selectionRange;if(s!==d&&d&&d.ownerDocument&&Kf(d.ownerDocument.documentElement,d)){if(c!==null&&Ld(d)){var p=c.start,x=c.end;if(x===void 0&&(x=p),"selectionStart"in d)d.selectionStart=p,d.selectionEnd=Math.min(x,d.value.length);else{var m=d.ownerDocument||document,f=m&&m.defaultView||window;if(f.getSelection){var h=f.getSelection(),k=d.textContent.length,z=Math.min(c.start,k),T=c.end===void 0?z:Math.min(c.end,k);!h.extend&&z>T&&(s=T,T=z,z=s);var y=mc(d,z),g=mc(d,T);if(y&&g&&(h.rangeCount!==1||h.anchorNode!==y.node||h.anchorOffset!==y.offset||h.focusNode!==g.node||h.focusOffset!==g.offset)){var v=m.createRange();v.setStart(y.node,y.offset),h.removeAllRanges(),z>T?(h.addRange(v),h.extend(g.node,g.offset)):(v.setEnd(g.node,g.offset),h.addRange(v))}}}}for(m=[],h=d;h=h.parentNode;)h.nodeType===1&&m.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<m.length;d++){var u=m[d];u.element.scrollLeft=u.left,u.element.scrollTop=u.top}}Vr=!!ld,od=ld=null}finally{$=r,ee.p=l,M.T=t}}e.current=a,we=2}}function Eg(){if(we===2){we=0;var e=Dt,a=no,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=M.T,M.T=null;var l=ee.p;ee.p=2;var r=$;$|=4;try{pg(e,a.alternate,a)}finally{$=r,ee.p=l,M.T=t}}we=3}}function _g(){if(we===4||we===3){we=0,_y();var e=Dt,a=no,t=at,l=wg;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?we=5:(we=0,no=Dt=null,Hg(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Tt=null),yd(t),a=a.stateNode,aa&&typeof aa.onCommitFiberRoot=="function")try{aa.onCommitFiberRoot(vi,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=M.T,r=ee.p,ee.p=2,M.T=null;try{for(var n=e.onRecoverableError,s=0;s<l.length;s++){var d=l[s];n(d.value,{componentStack:d.stack})}}finally{M.T=a,ee.p=r}}(at&3)!==0&&sn(),_a(e),r=e.pendingLanes,(t&261930)!==0&&(r&42)!==0?e===ed?ai++:(ai=0,ed=e):ai=0,wi(0,!1)}}function Hg(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Li(a)))}function sn(){return Mg(),Eg(),_g(),Ug()}function Ug(){if(we!==5)return!1;var e=Dt,a=Ks;Ks=0;var t=yd(at),l=M.T,r=ee.p;try{ee.p=32>t?32:t,M.T=null,t=$s,$s=null;var n=Dt,s=at;if(we=0,no=Dt=null,at=0,($&6)!==0)throw Error(L(331));var d=$;if($|=4,Lg(n.current),bg(n,n.current,s,t),$=d,wi(0,!1),aa&&typeof aa.onPostCommitFiberRoot=="function")try{aa.onPostCommitFiberRoot(vi,n)}catch{}return!0}finally{ee.p=r,M.T=l,Hg(e,a)}}function Yc(e,a,t){a=ma(t,a),a=Xs(e.stateNode,a,2),e=At(e,a,2),e!==null&&(bi(e,2),_a(e))}function te(e,a,t){if(e.tag===3)Yc(e,e,t);else for(;a!==null;){if(a.tag===3){Yc(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Tt===null||!Tt.has(l))){e=ma(t,e),t=eg(2),l=At(a,t,2),l!==null&&(ag(t,l,a,e),bi(l,2),_a(l));break}}a=a.return}}function cs(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new d0;var r=new Set;l.set(a,r)}else r=l.get(a),r===void 0&&(r=new Set,l.set(a,r));r.has(t)||(Jd=!0,r.add(t),e=g0.bind(null,e,a,t),a.then(e,e))}function g0(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ie===e&&(N&t)===t&&(he===4||he===3&&(N&62914560)===N&&300>ea()-on?($&2)===0&&so(e,0):Kd|=t,ro===N&&(ro=0)),_a(e)}function Og(e,a){a===0&&(a=Df()),e=fl(e,a),e!==null&&(bi(e,a),_a(e))}function m0(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Og(e,t)}function y0(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(L(314))}l!==null&&l.delete(a),Og(e,t)}function h0(e,a){return gd(e,a)}var Hr=null,Fl=null,ad=!1,Ur=!1,fs=!1,It=0;function _a(e){e!==Fl&&e.next===null&&(Fl===null?Hr=Fl=e:Fl=Fl.next=e),Ur=!0,ad||(ad=!0,x0())}function wi(e,a){if(!fs&&Ur){fs=!0;do for(var t=!1,l=Hr;l!==null;){if(!a)if(e!==0){var r=l.pendingLanes;if(r===0)var n=0;else{var s=l.suspendedLanes,d=l.pingedLanes;n=(1<<31-ta(42|e)+1)-1,n&=r&~(s&~d),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(t=!0,Zc(l,n))}else n=N,n=Xr(l,l===ie?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||xi(l,n)||(t=!0,Zc(l,n));l=l.next}while(t);fs=!1}}function v0(){qg()}function qg(){Ur=ad=!1;var e=0;It!==0&&z0()&&(e=It);for(var a=ea(),t=null,l=Hr;l!==null;){var r=l.next,n=Gg(l,a);n===0?(l.next=null,t===null?Hr=r:t.next=r,r===null&&(Fl=t)):(t=l,(e!==0||(n&3)!==0)&&(Ur=!0)),l=r}we!==0&&we!==5||wi(e,!1),It!==0&&(It=0)}function Gg(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var s=31-ta(n),d=1<<s,c=r[s];c===-1?((d&t)===0||(d&l)!==0)&&(r[s]=Vy(d,a)):c<=a&&(e.expiredLanes|=d),n&=~d}if(a=ie,t=N,t=Xr(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&qn(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||xi(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&qn(l),yd(t)){case 2:case 8:t=Af;break;case 32:t=Sr;break;case 268435456:t=Tf;break;default:t=Sr}return l=Wg.bind(null,e),t=gd(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&qn(l),e.callbackPriority=2,e.callbackNode=null,2}function Wg(e,a){if(we!==0&&we!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(sn()&&e.callbackNode!==t)return null;var l=N;return l=Xr(e,e===ie?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Bg(e,l,a),Gg(e,ea()),e.callbackNode!=null&&e.callbackNode===t?Wg.bind(null,e):null)}function Zc(e,a){if(sn())return null;Bg(e,a,!0)}function x0(){A0(function(){($&6)!==0?gd(Bf,v0):qg()})}function eu(){if(It===0){var e=lo;e===0&&(e=Oi,Oi<<=1,(Oi&261888)===0&&(Oi=256)),It=e}return It}function Qc(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:or(""+e)}function Jc(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function b0(e,a,t,l,r){if(a==="submit"&&t&&t.stateNode===r){var n=Qc((r[Ye]||null).action),s=l.submitter;s&&(a=(a=s[Ye]||null)?Qc(a.formAction):s.getAttribute("formAction"),a!==null&&(n=a,s=null));var d=new Yr("action","action",null,l,r);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(It!==0){var c=s?Jc(r,s):new FormData(r);Vs(t,{pending:!0,data:c,method:r.method,action:n},null,c)}}else typeof n=="function"&&(d.preventDefault(),c=s?Jc(r,s):new FormData(r),Vs(t,{pending:!0,data:c,method:r.method,action:n},n,c))},currentTarget:r}]})}}for(Ki=0;Ki<Rs.length;Ki++)$i=Rs[Ki],Kc=$i.toLowerCase(),$c=$i[0].toUpperCase()+$i.slice(1),Ba(Kc,"on"+$c);var $i,Kc,$c,Ki;Ba(ap,"onAnimationEnd");Ba(tp,"onAnimationIteration");Ba(lp,"onAnimationStart");Ba("dblclick","onDoubleClick");Ba("focusin","onFocus");Ba("focusout","onBlur");Ba(Hh,"onTransitionRun");Ba(Uh,"onTransitionStart");Ba(Oh,"onTransitionCancel");Ba(op,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);dl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dl("onBeforeInput",["compositionend","keypress","textInput","paste"]);dl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi));function Ng(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],r=l.event;l=l.listeners;e:{var n=void 0;if(a)for(var s=l.length-1;0<=s;s--){var d=l[s],c=d.instance,p=d.currentTarget;if(d=d.listener,c!==n&&r.isPropagationStopped())break e;n=d,r.currentTarget=p;try{n(r)}catch(x){Lr(x)}r.currentTarget=null,n=c}else for(s=0;s<l.length;s++){if(d=l[s],c=d.instance,p=d.currentTarget,d=d.listener,c!==n&&r.isPropagationStopped())break e;n=d,r.currentTarget=p;try{n(r)}catch(x){Lr(x)}r.currentTarget=null,n=c}}}}function G(e,a){var t=a[Is];t===void 0&&(t=a[Is]=new Set);var l=e+"__bubble";t.has(l)||(Vg(a,e,2,!1),t.add(l))}function ps(e,a,t){var l=0;a&&(l|=4),Vg(t,e,l,a)}var er="_reactListening"+Math.random().toString(36).slice(2);function au(e){if(!e[er]){e[er]=!0,Ef.forEach(function(t){t!=="selectionchange"&&(S0.has(t)||ps(t,!1,e),ps(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[er]||(a[er]=!0,ps("selectionchange",!1,a))}}function Vg(e,a,t,l){switch(om(a)){case 2:var r=Z0;break;case 8:r=Q0;break;default:r=iu}t=r.bind(null,a,t,e),r=void 0,!Ts||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(a,t,{capture:!0,passive:r}):e.addEventListener(a,t,!0):r!==void 0?e.addEventListener(a,t,{passive:r}):e.addEventListener(a,t,!1)}function gs(e,a,t,l,r){var n=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var d=l.stateNode.containerInfo;if(d===r)break;if(s===4)for(s=l.return;s!==null;){var c=s.tag;if((c===3||c===4)&&s.stateNode.containerInfo===r)return;s=s.return}for(;d!==null;){if(s=_l(d),s===null)return;if(c=s.tag,c===5||c===6||c===26||c===27){l=n=s;continue e}d=d.parentNode}}l=l.return}Nf(function(){var p=n,x=xd(t),m=[];e:{var f=ip.get(e);if(f!==void 0){var h=Yr,k=e;switch(e){case"keypress":if(rr(t)===0)break e;case"keydown":case"keyup":h=yh;break;case"focusin":k="focus",h=jn;break;case"focusout":k="blur",h=jn;break;case"beforeblur":case"afterblur":h=jn;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=xh;break;case ap:case tp:case lp:h=nh;break;case op:h=Sh;break;case"scroll":case"scrollend":h=th;break;case"wheel":h=Lh;break;case"copy":case"cut":case"paste":h=dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=sc;break;case"toggle":case"beforetoggle":h=Ih}var z=(a&4)!==0,T=!z&&(e==="scroll"||e==="scrollend"),y=z?f!==null?f+"Capture":null:f;z=[];for(var g=p,v;g!==null;){var u=g;if(v=u.stateNode,u=u.tag,u!==5&&u!==26&&u!==27||v===null||y===null||(u=oi(g,y),u!=null&&z.push(pi(g,u,v))),T)break;g=g.return}0<z.length&&(f=new h(f,k,null,t,x),m.push({event:f,listeners:z}))}}if((a&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&t!==As&&(k=t.relatedTarget||t.fromElement)&&(_l(k)||k[fo]))break e;if((h||f)&&(f=x.window===x?x:(f=x.ownerDocument)?f.defaultView||f.parentWindow:window,h?(k=t.relatedTarget||t.toElement,h=p,k=k?_l(k):null,k!==null&&(T=hi(k),z=k.tag,k!==T||z!==5&&z!==27&&z!==6)&&(k=null)):(h=null,k=p),h!==k)){if(z=rc,u="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(z=sc,u="onPointerLeave",y="onPointerEnter",g="pointer"),T=h==null?f:qo(h),v=k==null?f:qo(k),f=new z(u,g+"leave",h,t,x),f.target=T,f.relatedTarget=v,u=null,_l(x)===p&&(z=new z(y,g+"enter",k,t,x),z.target=v,z.relatedTarget=T,u=z),T=u,h&&k)a:{for(z=C0,y=h,g=k,v=0,u=y;u;u=z(u))v++;u=0;for(var b=g;b;b=z(b))u++;for(;0<v-u;)y=z(y),v--;for(;0<u-v;)g=z(g),u--;for(;v--;){if(y===g||g!==null&&y===g.alternate){z=y;break a}y=z(y),g=z(g)}z=null}else z=null;h!==null&&ef(m,f,h,z,!1),k!==null&&T!==null&&ef(m,T,k,z,!0)}}e:{if(f=p?qo(p):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var R=fc;else if(cc(f))if(Qf)R=Mh;else{R=Rh;var w=Ph}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?p&&vd(p.elementType)&&(R=fc):R=Fh;if(R&&(R=R(e,p))){Zf(m,R,t,x);break e}w&&w(e,f,p),e==="focusout"&&p&&f.type==="number"&&p.memoizedProps.value!=null&&Bs(f,"number",f.value)}switch(w=p?qo(p):window,e){case"focusin":(cc(w)||w.contentEditable==="true")&&(Ol=w,Ds=p,jo=null);break;case"focusout":jo=Ds=Ol=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,yc(m,t,x);break;case"selectionchange":if(_h)break;case"keydown":case"keyup":yc(m,t,x)}var E;if(Cd)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else Ul?Xf(e,t)&&(q="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(q="onCompositionStart");q&&(jf&&t.locale!=="ko"&&(Ul||q!=="onCompositionStart"?q==="onCompositionEnd"&&Ul&&(E=Vf()):(Ct=x,bd="value"in Ct?Ct.value:Ct.textContent,Ul=!0)),w=Or(p,q),0<w.length&&(q=new nc(q,e,null,t,x),m.push({event:q,listeners:w}),E?q.data=E:(E=Yf(t),E!==null&&(q.data=E)))),(E=zh?Bh(e,t):Ah(e,t))&&(q=Or(p,"onBeforeInput"),0<q.length&&(w=new nc("onBeforeInput","beforeinput",null,t,x),m.push({event:w,listeners:q}),w.data=E)),b0(m,e,p,t,x)}Ng(m,a)})}function pi(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Or(e,a){for(var t=a+"Capture",l=[];e!==null;){var r=e,n=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||n===null||(r=oi(e,t),r!=null&&l.unshift(pi(e,r,n)),r=oi(e,a),r!=null&&l.push(pi(e,r,n))),e.tag===3)return l;e=e.return}return[]}function C0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ef(e,a,t,l,r){for(var n=a._reactName,s=[];t!==null&&t!==l;){var d=t,c=d.alternate,p=d.stateNode;if(d=d.tag,c!==null&&c===l)break;d!==5&&d!==26&&d!==27||p===null||(c=p,r?(p=oi(t,n),p!=null&&s.unshift(pi(t,p,c))):r||(p=oi(t,n),p!=null&&s.push(pi(t,p,c)))),t=t.return}s.length!==0&&e.push({event:a,listeners:s})}var L0=/\r\n?/g,k0=/\u0000|\uFFFD/g;function af(e){return(typeof e=="string"?e:""+e).replace(L0,`
`).replace(k0,"")}function jg(e,a){return a=af(a),af(e)===a}function le(e,a,t,l,r,n){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||to(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&to(e,""+l);break;case"className":Wi(e,"class",l);break;case"tabIndex":Wi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Wi(e,t,l);break;case"style":Wf(e,l,n);break;case"data":if(a!=="object"){Wi(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=or(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(t==="formAction"?(a!=="input"&&le(e,a,"name",r.name,r,null),le(e,a,"formEncType",r.formEncType,r,null),le(e,a,"formMethod",r.formMethod,r,null),le(e,a,"formTarget",r.formTarget,r,null)):(le(e,a,"encType",r.encType,r,null),le(e,a,"method",r.method,r,null),le(e,a,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=or(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=Ja);break;case"onScroll":l!=null&&G("scroll",e);break;case"onScrollEnd":l!=null&&G("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(L(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(L(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=or(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":G("beforetoggle",e),G("toggle",e),lr(e,"popover",l);break;case"xlinkActuate":Wa(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Wa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Wa(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Wa(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Wa(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Wa(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Wa(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Wa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Wa(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":lr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=eh.get(t)||t,lr(e,t,l))}}function td(e,a,t,l,r,n){switch(t){case"style":Wf(e,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(L(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(L(60));e.innerHTML=t}}break;case"children":typeof l=="string"?to(e,l):(typeof l=="number"||typeof l=="bigint")&&to(e,""+l);break;case"onScroll":l!=null&&G("scroll",e);break;case"onScrollEnd":l!=null&&G("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ja);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_f.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),a=t.slice(2,r?t.length-7:void 0),n=e[Ye]||null,n=n!=null?n[t]:null,typeof n=="function"&&e.removeEventListener(a,n,r),typeof l=="function")){typeof n!="function"&&n!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,r);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):lr(e,t,l)}}}function Ee(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",e),G("load",e);var l=!1,r=!1,n;for(n in t)if(t.hasOwnProperty(n)){var s=t[n];if(s!=null)switch(n){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(L(137,a));default:le(e,a,n,s,t,null)}}r&&le(e,a,"srcSet",t.srcSet,t,null),l&&le(e,a,"src",t.src,t,null);return;case"input":G("invalid",e);var d=n=s=r=null,c=null,p=null;for(l in t)if(t.hasOwnProperty(l)){var x=t[l];if(x!=null)switch(l){case"name":r=x;break;case"type":s=x;break;case"checked":c=x;break;case"defaultChecked":p=x;break;case"value":n=x;break;case"defaultValue":d=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(L(137,a));break;default:le(e,a,l,x,t,null)}}Of(e,n,d,c,p,s,r,!1);return;case"select":G("invalid",e),l=s=n=null;for(r in t)if(t.hasOwnProperty(r)&&(d=t[r],d!=null))switch(r){case"value":n=d;break;case"defaultValue":s=d;break;case"multiple":l=d;default:le(e,a,r,d,t,null)}a=n,t=s,e.multiple=!!l,a!=null?Yl(e,!!l,a,!1):t!=null&&Yl(e,!!l,t,!0);return;case"textarea":G("invalid",e),n=r=l=null;for(s in t)if(t.hasOwnProperty(s)&&(d=t[s],d!=null))switch(s){case"value":l=d;break;case"defaultValue":r=d;break;case"children":n=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(L(91));break;default:le(e,a,s,d,t,null)}Gf(e,l,r,n);return;case"option":for(c in t)t.hasOwnProperty(c)&&(l=t[c],l!=null)&&(c==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":le(e,a,c,l,t,null));return;case"dialog":G("beforetoggle",e),G("toggle",e),G("cancel",e),G("close",e);break;case"iframe":case"object":G("load",e);break;case"video":case"audio":for(l=0;l<fi.length;l++)G(fi[l],e);break;case"image":G("error",e),G("load",e);break;case"details":G("toggle",e);break;case"embed":case"source":case"link":G("error",e),G("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in t)if(t.hasOwnProperty(p)&&(l=t[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(L(137,a));default:le(e,a,p,l,t,null)}return;default:if(vd(a)){for(x in t)t.hasOwnProperty(x)&&(l=t[x],l!==void 0&&td(e,a,x,l,t,void 0));return}}for(d in t)t.hasOwnProperty(d)&&(l=t[d],l!=null&&le(e,a,d,l,t,null))}function I0(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,n=null,s=null,d=null,c=null,p=null,x=null;for(h in t){var m=t[h];if(t.hasOwnProperty(h)&&m!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":c=m;default:l.hasOwnProperty(h)||le(e,a,h,null,l,m)}}for(var f in l){var h=l[f];if(m=t[f],l.hasOwnProperty(f)&&(h!=null||m!=null))switch(f){case"type":n=h;break;case"name":r=h;break;case"checked":p=h;break;case"defaultChecked":x=h;break;case"value":s=h;break;case"defaultValue":d=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(L(137,a));break;default:h!==m&&le(e,a,f,h,l,m)}}zs(e,s,d,c,p,x,n,r);return;case"select":h=s=d=f=null;for(n in t)if(c=t[n],t.hasOwnProperty(n)&&c!=null)switch(n){case"value":break;case"multiple":h=c;default:l.hasOwnProperty(n)||le(e,a,n,null,l,c)}for(r in l)if(n=l[r],c=t[r],l.hasOwnProperty(r)&&(n!=null||c!=null))switch(r){case"value":f=n;break;case"defaultValue":d=n;break;case"multiple":s=n;default:n!==c&&le(e,a,r,n,l,c)}a=d,t=s,l=h,f!=null?Yl(e,!!t,f,!1):!!l!=!!t&&(a!=null?Yl(e,!!t,a,!0):Yl(e,!!t,t?[]:"",!1));return;case"textarea":h=f=null;for(d in t)if(r=t[d],t.hasOwnProperty(d)&&r!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:le(e,a,d,null,l,r)}for(s in l)if(r=l[s],n=t[s],l.hasOwnProperty(s)&&(r!=null||n!=null))switch(s){case"value":f=r;break;case"defaultValue":h=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(L(91));break;default:r!==n&&le(e,a,s,r,l,n)}qf(e,f,h);return;case"option":for(var k in t)f=t[k],t.hasOwnProperty(k)&&f!=null&&!l.hasOwnProperty(k)&&(k==="selected"?e.selected=!1:le(e,a,k,null,l,f));for(c in l)f=l[c],h=t[c],l.hasOwnProperty(c)&&f!==h&&(f!=null||h!=null)&&(c==="selected"?e.selected=f&&typeof f!="function"&&typeof f!="symbol":le(e,a,c,f,l,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var z in t)f=t[z],t.hasOwnProperty(z)&&f!=null&&!l.hasOwnProperty(z)&&le(e,a,z,null,l,f);for(p in l)if(f=l[p],h=t[p],l.hasOwnProperty(p)&&f!==h&&(f!=null||h!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(L(137,a));break;default:le(e,a,p,f,l,h)}return;default:if(vd(a)){for(var T in t)f=t[T],t.hasOwnProperty(T)&&f!==void 0&&!l.hasOwnProperty(T)&&td(e,a,T,void 0,l,f);for(x in l)f=l[x],h=t[x],!l.hasOwnProperty(x)||f===h||f===void 0&&h===void 0||td(e,a,x,f,l,h);return}}for(var y in t)f=t[y],t.hasOwnProperty(y)&&f!=null&&!l.hasOwnProperty(y)&&le(e,a,y,null,l,f);for(m in l)f=l[m],h=t[m],!l.hasOwnProperty(m)||f===h||f==null&&h==null||le(e,a,m,f,l,h)}function tf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function w0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var r=t[l],n=r.transferSize,s=r.initiatorType,d=r.duration;if(n&&d&&tf(s)){for(s=0,d=r.responseEnd,l+=1;l<t.length;l++){var c=t[l],p=c.startTime;if(p>d)break;var x=c.transferSize,m=c.initiatorType;x&&tf(m)&&(c=c.responseEnd,s+=x*(c<d?1:(d-p)/(c-p)))}if(--l,a+=8*(n+s)/(r.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ld=null,od=null;function qr(e){return e.nodeType===9?e:e.ownerDocument}function lf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xg(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function id(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ms=null;function z0(){var e=window.event;return e&&e.type==="popstate"?e===ms?!1:(ms=e,!0):(ms=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,B0=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(e){return of.resolve(null).then(e).catch(T0)}:Yg;function T0(e){setTimeout(function(){throw e})}function Ot(e){return e==="head"}function rf(e,a){var t=a,l=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(r),co(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")ti(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,ti(t);for(var n=t.firstChild;n;){var s=n.nextSibling,d=n.nodeName;n[Si]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&n.rel.toLowerCase()==="stylesheet"||t.removeChild(n),n=s}}else t==="body"&&ti(e.ownerDocument.body);t=r}while(t);co(a)}function nf(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function rd(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":rd(t),hd(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function D0(e,a,t,l){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Si])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var n=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=va(e.nextSibling),e===null)break}return null}function P0(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=va(e.nextSibling),e===null))return null;return e}function Zg(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=va(e.nextSibling),e===null))return null;return e}function nd(e){return e.data==="$?"||e.data==="$~"}function sd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function R0(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function va(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var dd=null;function sf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return va(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function Qg(e,a,t){switch(a=qr(t),e){case"html":if(e=a.documentElement,!e)throw Error(L(452));return e;case"head":if(e=a.head,!e)throw Error(L(453));return e;case"body":if(e=a.body,!e)throw Error(L(454));return e;default:throw Error(L(451))}}function ti(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);hd(e)}var xa=new Map,uf=new Set;function Gr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var nt=ee.d;ee.d={f:F0,r:M0,D:E0,C:_0,L:H0,m:U0,X:q0,S:O0,M:G0};function F0(){var e=nt.f(),a=rn();return e||a}function M0(e){var a=po(e);a!==null&&a.tag===5&&a.type==="form"?Wp(a):nt.r(e)}var ho=typeof document>"u"?null:document;function Jg(e,a,t){var l=ho;if(l&&typeof a=="string"&&a){var r=ga(a);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),uf.has(r)||(uf.add(r),e={rel:e,crossOrigin:t,href:a},l.querySelector(r)===null&&(a=l.createElement("link"),Ee(a,"link",e),Ae(a),l.head.appendChild(a)))}}function E0(e){nt.D(e),Jg("dns-prefetch",e,null)}function _0(e,a){nt.C(e,a),Jg("preconnect",e,a)}function H0(e,a,t){nt.L(e,a,t);var l=ho;if(l&&e&&a){var r='link[rel="preload"][as="'+ga(a)+'"]';a==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+ga(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+ga(t.imageSizes)+'"]')):r+='[href="'+ga(e)+'"]';var n=r;switch(a){case"style":n=uo(e);break;case"script":n=vo(e)}xa.has(n)||(e=fe({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),xa.set(n,e),l.querySelector(r)!==null||a==="style"&&l.querySelector(zi(n))||a==="script"&&l.querySelector(Bi(n))||(a=l.createElement("link"),Ee(a,"link",e),Ae(a),l.head.appendChild(a)))}}function U0(e,a){nt.m(e,a);var t=ho;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",r='link[rel="modulepreload"][as="'+ga(l)+'"][href="'+ga(e)+'"]',n=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=vo(e)}if(!xa.has(n)&&(e=fe({rel:"modulepreload",href:e},a),xa.set(n,e),t.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Bi(n)))return}l=t.createElement("link"),Ee(l,"link",e),Ae(l),t.head.appendChild(l)}}}function O0(e,a,t){nt.S(e,a,t);var l=ho;if(l&&e){var r=Xl(l).hoistableStyles,n=uo(e);a=a||"default";var s=r.get(n);if(!s){var d={loading:0,preload:null};if(s=l.querySelector(zi(n)))d.loading=5;else{e=fe({rel:"stylesheet",href:e,"data-precedence":a},t),(t=xa.get(n))&&tu(e,t);var c=s=l.createElement("link");Ae(c),Ee(c,"link",e),c._p=new Promise(function(p,x){c.onload=p,c.onerror=x}),c.addEventListener("load",function(){d.loading|=1}),c.addEventListener("error",function(){d.loading|=2}),d.loading|=4,gr(s,a,l)}s={type:"stylesheet",instance:s,count:1,state:d},r.set(n,s)}}}function q0(e,a){nt.X(e,a);var t=ho;if(t&&e){var l=Xl(t).hoistableScripts,r=vo(e),n=l.get(r);n||(n=t.querySelector(Bi(r)),n||(e=fe({src:e,async:!0},a),(a=xa.get(r))&&lu(e,a),n=t.createElement("script"),Ae(n),Ee(n,"link",e),t.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(r,n))}}function G0(e,a){nt.M(e,a);var t=ho;if(t&&e){var l=Xl(t).hoistableScripts,r=vo(e),n=l.get(r);n||(n=t.querySelector(Bi(r)),n||(e=fe({src:e,async:!0,type:"module"},a),(a=xa.get(r))&&lu(e,a),n=t.createElement("script"),Ae(n),Ee(n,"link",e),t.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(r,n))}}function cf(e,a,t,l){var r=(r=wt.current)?Gr(r):null;if(!r)throw Error(L(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=uo(t.href),t=Xl(r).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=uo(t.href);var n=Xl(r).hoistableStyles,s=n.get(e);if(s||(r=r.ownerDocument||r,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,s),(n=r.querySelector(zi(e)))&&!n._p&&(s.instance=n,s.state.loading=5),xa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},xa.set(e,t),n||W0(r,e,t,s.state))),a&&l===null)throw Error(L(528,""));return s}if(a&&l!==null)throw Error(L(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=vo(t),t=Xl(r).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(L(444,e))}}function uo(e){return'href="'+ga(e)+'"'}function zi(e){return'link[rel="stylesheet"]['+e+"]"}function Kg(e){return fe({},e,{"data-precedence":e.precedence,precedence:null})}function W0(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Ee(a,"link",t),Ae(a),e.head.appendChild(a))}function vo(e){return'[src="'+ga(e)+'"]'}function Bi(e){return"script[async]"+e}function ff(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+ga(t.href)+'"]');if(l)return a.instance=l,Ae(l),l;var r=fe({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ae(l),Ee(l,"style",r),gr(l,t.precedence,e),a.instance=l;case"stylesheet":r=uo(t.href);var n=e.querySelector(zi(r));if(n)return a.state.loading|=4,a.instance=n,Ae(n),n;l=Kg(t),(r=xa.get(r))&&tu(l,r),n=(e.ownerDocument||e).createElement("link"),Ae(n);var s=n;return s._p=new Promise(function(d,c){s.onload=d,s.onerror=c}),Ee(n,"link",l),a.state.loading|=4,gr(n,t.precedence,e),a.instance=n;case"script":return n=vo(t.src),(r=e.querySelector(Bi(n)))?(a.instance=r,Ae(r),r):(l=t,(r=xa.get(n))&&(l=fe({},t),lu(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ae(r),Ee(r,"link",l),e.head.appendChild(r),a.instance=r);case"void":return null;default:throw Error(L(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,gr(l,t.precedence,e));return a.instance}function gr(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,n=r,s=0;s<l.length;s++){var d=l[s];if(d.dataset.precedence===a)n=d;else if(n!==r)break}n?n.parentNode.insertBefore(e,n.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function tu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function lu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var mr=null;function pf(e,a,t){if(mr===null){var l=new Map,r=mr=new Map;r.set(t,l)}else r=mr,l=r.get(t),l||(l=new Map,r.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var n=t[r];if(!(n[Si]||n[Re]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var s=n.getAttribute(a)||"";s=e+s;var d=l.get(s);d?d.push(n):l.set(s,[n])}}return l}function gf(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function N0(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function $g(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function V0(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=uo(l.href),n=a.querySelector(zi(r));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Wr.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=n,Ae(n);return}n=a.ownerDocument||a,l=Kg(l),(r=xa.get(r))&&tu(l,r),n=n.createElement("link"),Ae(n);var s=n;s._p=new Promise(function(d,c){s.onload=d,s.onerror=c}),Ee(n,"link",l),t.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Wr.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var ys=0;function j0(e,a){return e.stylesheets&&e.count===0&&yr(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&yr(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+a);0<e.imgBytes&&ys===0&&(ys=62500*w0());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yr(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>ys?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function Wr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nr=null;function yr(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nr=new Map,a.forEach(X0,e),Nr=null,Wr.call(e))}function X0(e,a){if(!(a.state.loading&4)){var t=Nr.get(e);if(t)var l=t.get(null);else{t=new Map,Nr.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<r.length;n++){var s=r[n];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),l=s)}l&&t.set(null,l)}r=a.instance,s=r.getAttribute("data-precedence"),n=t.get(s)||l,n===l&&t.set(null,r),t.set(s,r),this.count++,l=Wr.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),n?n.parentNode.insertBefore(r,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),a.state.loading|=4}}var gi={$$typeof:Qa,Provider:null,Consumer:null,_currentValue:$t,_currentValue2:$t,_threadCount:0};function Y0(e,a,t,l,r,n,s,d,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gn(0),this.hiddenUpdates=Gn(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=n,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function em(e,a,t,l,r,n,s,d,c,p,x,m){return e=new Y0(e,a,t,s,c,p,x,m,d),a=1,n===!0&&(a|=24),n=Ke(3,null,null,a),e.current=n,n.stateNode=e,a=Ad(),a.refCount++,e.pooledCache=a,a.refCount++,n.memoizedState={element:l,isDehydrated:t,cache:a},Pd(n),e}function am(e){return e?(e=Wl,e):Wl}function tm(e,a,t,l,r,n){r=am(r),l.context===null?l.context=r:l.pendingContext=r,l=Bt(a),l.payload={element:t},n=n===void 0?null:n,n!==null&&(l.callback=n),t=At(e,l,a),t!==null&&(Xe(t,e,a),Yo(t,e,a))}function mf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function ou(e,a){mf(e,a),(e=e.alternate)&&mf(e,a)}function lm(e){if(e.tag===13||e.tag===31){var a=fl(e,67108864);a!==null&&Xe(a,e,67108864),ou(e,67108864)}}function yf(e){if(e.tag===13||e.tag===31){var a=la();a=md(a);var t=fl(e,a);t!==null&&Xe(t,e,a),ou(e,a)}}var Vr=!0;function Z0(e,a,t,l){var r=M.T;M.T=null;var n=ee.p;try{ee.p=2,iu(e,a,t,l)}finally{ee.p=n,M.T=r}}function Q0(e,a,t,l){var r=M.T;M.T=null;var n=ee.p;try{ee.p=8,iu(e,a,t,l)}finally{ee.p=n,M.T=r}}function iu(e,a,t,l){if(Vr){var r=ud(l);if(r===null)gs(e,a,l,jr,t),hf(e,l);else if(K0(r,e,a,t,l))l.stopPropagation();else if(hf(e,l),a&4&&-1<J0.indexOf(e)){for(;r!==null;){var n=po(r);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var s=Qt(n.pendingLanes);if(s!==0){var d=n;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var c=1<<31-ta(s);d.entanglements[1]|=c,s&=~c}_a(n),($&6)===0&&(Mr=ea()+500,wi(0,!1))}}break;case 31:case 13:d=fl(n,2),d!==null&&Xe(d,n,2),rn(),ou(n,2)}if(n=ud(l),n===null&&gs(e,a,l,jr,t),n===r)break;r=n}r!==null&&l.stopPropagation()}else gs(e,a,l,null,t)}}function ud(e){return e=xd(e),ru(e)}var jr=null;function ru(e){if(jr=null,e=_l(e),e!==null){var a=hi(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=Lf(a),e!==null)return e;e=null}else if(t===31){if(e=kf(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return jr=e,null}function om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hy()){case Bf:return 2;case Af:return 8;case Sr:case Uy:return 32;case Tf:return 268435456;default:return 32}default:return 32}}var cd=!1,Pt=null,Rt=null,Ft=null,mi=new Map,yi=new Map,bt=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hf(e,a){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":mi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(a.pointerId)}}function _o(e,a,t,l,r,n){return e===null||e.nativeEvent!==n?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:n,targetContainers:[r]},a!==null&&(a=po(a),a!==null&&lm(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,r!==null&&a.indexOf(r)===-1&&a.push(r),e)}function K0(e,a,t,l,r){switch(a){case"focusin":return Pt=_o(Pt,e,a,t,l,r),!0;case"dragenter":return Rt=_o(Rt,e,a,t,l,r),!0;case"mouseover":return Ft=_o(Ft,e,a,t,l,r),!0;case"pointerover":var n=r.pointerId;return mi.set(n,_o(mi.get(n)||null,e,a,t,l,r)),!0;case"gotpointercapture":return n=r.pointerId,yi.set(n,_o(yi.get(n)||null,e,a,t,l,r)),!0}return!1}function im(e){var a=_l(e.target);if(a!==null){var t=hi(a);if(t!==null){if(a=t.tag,a===13){if(a=Lf(t),a!==null){e.blockedOn=a,$u(e.priority,function(){yf(t)});return}}else if(a===31){if(a=kf(t),a!==null){e.blockedOn=a,$u(e.priority,function(){yf(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hr(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=ud(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);As=l,t.target.dispatchEvent(l),As=null}else return a=po(t),a!==null&&lm(a),e.blockedOn=t,!1;a.shift()}return!0}function vf(e,a,t){hr(e)&&t.delete(a)}function $0(){cd=!1,Pt!==null&&hr(Pt)&&(Pt=null),Rt!==null&&hr(Rt)&&(Rt=null),Ft!==null&&hr(Ft)&&(Ft=null),mi.forEach(vf),yi.forEach(vf)}function ar(e,a){e.blockedOn===a&&(e.blockedOn=null,cd||(cd=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,$0)))}var tr=null;function xf(e){tr!==e&&(tr=e,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,function(){tr===e&&(tr=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],r=e[a+2];if(typeof l!="function"){if(ru(l||t)===null)continue;break}var n=po(t);n!==null&&(e.splice(a,3),a-=3,Vs(n,{pending:!0,data:r,method:t.method,action:l},l,r))}}))}function co(e){function a(c){return ar(c,e)}Pt!==null&&ar(Pt,e),Rt!==null&&ar(Rt,e),Ft!==null&&ar(Ft,e),mi.forEach(a),yi.forEach(a);for(var t=0;t<bt.length;t++){var l=bt[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<bt.length&&(t=bt[0],t.blockedOn===null);)im(t),t.blockedOn===null&&bt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var r=t[l],n=t[l+1],s=r[Ye]||null;if(typeof n=="function")s||xf(t);else if(s){var d=null;if(n&&n.hasAttribute("formAction")){if(r=n,s=n[Ye]||null)d=s.formAction;else if(ru(r)!==null)continue}else d=s.action;typeof d=="function"?t[l+1]=d:(t.splice(l,3),l-=3),xf(t)}}}function rm(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(s){return r=s})},focusReset:"manual",scroll:"manual"})}function a(){r!==null&&(r(),r=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),r!==null&&(r(),r=null)}}}function nu(e){this._internalRoot=e}dn.prototype.render=nu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(L(409));var t=a.current,l=la();tm(t,l,e,a,null,null)};dn.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;tm(e.current,2,null,e,null,null),rn(),a[fo]=null}};function dn(e){this._internalRoot=e}dn.prototype.unstable_scheduleHydration=function(e){if(e){var a=Mf();e={blockedOn:null,target:e,priority:a};for(var t=0;t<bt.length&&a!==0&&a<bt[t].priority;t++);bt.splice(t,0,e),t===0&&im(e)}};var bf=Sf.version;if(bf!=="19.2.4")throw Error(L(527,bf,"19.2.4"));ee.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Dy(a),e=e!==null?If(e):null,e=e===null?null:e.stateNode,e};var ev={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ho.isDisabled&&Ho.supportsFiber))try{vi=Ho.inject(ev),aa=Ho}catch{}var Ho;un.createRoot=function(e,a){if(!Cf(e))throw Error(L(299));var t=!1,l="",r=Jp,n=Kp,s=$p;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError)),a=em(e,1,!1,null,null,t,l,null,r,n,s,rm),e[fo]=a.current,au(e),new nu(a)};un.hydrateRoot=function(e,a,t){if(!Cf(e))throw Error(L(299));var l=!1,r="",n=Jp,s=Kp,d=$p,c=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.formState!==void 0&&(c=t.formState)),a=em(e,1,!0,a,t??null,l,r,c,n,s,d,rm),a.context=am(null),t=a.current,l=la(),l=md(l),r=Bt(l),r.callback=null,At(t,r,l),t=l,a.current.lanes=t,bi(a,t),_a(a),e[fo]=a.current,au(e),new dn(a)};un.version="19.2.4"});var um=Ta((Ev,dm)=>{"use strict";function sm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sm)}catch(e){console.error(e)}}sm(),dm.exports=nm()});var fm=Ta(cn=>{"use strict";var av=Symbol.for("react.transitional.element"),tv=Symbol.for("react.fragment");function cm(e,a,t){var l=null;if(t!==void 0&&(l=""+t),a.key!==void 0&&(l=""+a.key),"key"in a){t={};for(var r in a)r!=="key"&&(t[r]=a[r])}else t=a;return a=t.ref,{$$typeof:av,type:e,key:l,ref:a!==void 0?a:null,props:t}}cn.Fragment=tv;cn.jsx=cm;cn.jsxs=cm});var Y=Ta((Uv,pm)=>{"use strict";pm.exports=fm()});var ty=F(um());var xo=F(Ie());var C="'Red Hat Display', sans-serif",ba={jerseyRed:"#D0142C",heroBg:"#1A3B8A"},i={typography:{sizes:{micro:9,mini:10,xxs:11,caption:12,body2:13,xs:14,sm:15,base:16,h3:18,lg:20,xl:22,xxl:24,h2:26,h1:28,jersey:29,display:32},weights:{regular:400,medium:500,semibold:600,bold:700,extraBold:800},notifText:{fontSize:13,fontWeight:400},menuItem:{fontSize:16,fontWeight:500},badgeLabel:{fontSize:11,fontWeight:700,textTransform:"uppercase"},videoLabel:{fontSize:14,fontWeight:600}},spacing:{xxs:2,xs:4,xs2:6,sm:8,sm2:10,md:12,md2:14,lg:16,lg2:20,xl:24,xxl:32,xxxl:34,hero:48},sizes:{inputHeight:46,buttonSm:32,buttonMd:40,buttonLg:48,tabHeight:38,chipHeight:40,topBarHeight:72,containerWidth:398,pageMaxWidth:430,heroHeight:340,jerseySize:73,logoSmall:48},radii:{sm:4,xs:6,thumb:8,logo:10,badge:12,card:14,md:16,lg:20,chip:26,button:28,sheet:30,xl:32,pill:9999},strokes:{thin:.67,regular:1,medium:1.33,thick:1.7,bold:2,heavy:2.5,extraHeavy:2.67},breakpoints:{mobile:768,tablet:1024}},gl={primary:"#116DFF",primaryHover:"#0D5AD4",primaryActive:"#0A4AB0",white:"#FFFFFF",black:"#000000",darkText:"#161616",gray50:"#F5F5F5",gray100:"#EDEDED",gray200:"#C7CBD0",gray300:"#DCDCDC",gray400:"#979797",gray500:"#6C6C6C",grayOverlay:"rgba(237,237,238,0.6)",grayOverlayHover:"rgba(237,237,238,0.8)",heroBg:"#1A3B8A",accent:"#E8332B",jerseyRed:"#D0142C",jerseyStroke:"#FFFFFF",premiumYellow:"#FFE000",premiumAmber:"#E7A610",premiumHover:"#E7A610",premiumActive:"#D4960E",premiumDark:"#362F2C",freeBadgeGreen:"#22C55E",claimedPurple:"#8B5CF6",infoBgPurple:"rgba(139,92,246,0.08)",linkBlue:"#2563EB",liveRed:"#EF4444",highlightGray:"#6C6C6C",cardBg:"#F3F4F6",barRed:"#E8332B",barGray:"#AFB6C1",barTrack:"#EEEEEE",dividerDark:"#444746",successGreen:"#22C55E",errorRed:"#EF4444",overlay:"rgba(0,0,0,0.7)",notifBadgeRed:"#EF4444",highlightsBadgeBg:"#6C6C6C",highlightsBadgeText:"#FFE000",cardHoverBg:"#F0F0F0",disabledTextOnDark:"rgba(255,255,255,0.35)",dangerRed:"#EF4444",selectedGreen:"#02814a",errorBg:"#FEF2F2",errorBorder:"rgba(239,68,68,0.15)"},ml={primary:"#3B8BFF",primaryHover:"#5A9FFF",primaryActive:"#2563EB",white:"#1A1A1A",black:"#FFFFFF",darkText:"#E8E8E8",gray50:"#262626",gray100:"#333333",gray200:"#444444",gray300:"#555555",gray400:"#888888",gray500:"#A0A0A0",grayOverlay:"rgba(255,255,255,0.08)",grayOverlayHover:"rgba(255,255,255,0.12)",heroBg:"#0F2557",accent:"#E8332B",jerseyRed:"#D0142C",jerseyStroke:"#FFFFFF",premiumYellow:"#FFE000",premiumAmber:"#E7A610",premiumHover:"#F5B800",premiumActive:"#E7A610",premiumDark:"#362F2C",freeBadgeGreen:"#22C55E",claimedPurple:"#A78BFA",infoBgPurple:"rgba(167,139,250,0.1)",linkBlue:"#60A5FA",liveRed:"#EF4444",highlightGray:"#A0A0A0",cardBg:"#262626",barRed:"#E8332B",barGray:"#666666",barTrack:"#333333",dividerDark:"#555555",successGreen:"#34D399",errorRed:"#FF6B6B",overlay:"rgba(0,0,0,0.85)",notifBadgeRed:"#EF4444",highlightsBadgeBg:"#444444",highlightsBadgeText:"#FFE000",cardHoverBg:"#333333",disabledTextOnDark:"rgba(200,200,200,0.35)",dangerRed:"#FF6B6B",selectedGreen:"#02814a",errorBg:"rgba(239,68,68,0.1)",errorBorder:"rgba(239,68,68,0.25)"};var mm=F(Y()),su=(0,xo.createContext)("light");function B(){return(0,xo.useContext)(su)==="dark"?ml:gl}function gm({children:e,initialMode:a="light"}){let[t,l]=xo.default.useState(a);return(0,mm.jsx)(su.Provider,{value:t,children:e})}var sa=F(Ie());var pn=F(Ie());var fn=(...e)=>e.filter((a,t,l)=>!!a&&a.trim()!==""&&l.indexOf(a)===t).join(" ").trim();var ym=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var hm=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,t,l)=>l?l.toUpperCase():t.toLowerCase());var du=e=>{let a=hm(e);return a.charAt(0).toUpperCase()+a.slice(1)};var Ai=F(Ie());var vm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var xm=e=>{for(let a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};var bm=(0,Ai.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:t=2,absoluteStrokeWidth:l,className:r="",children:n,iconNode:s,...d},c)=>(0,Ai.createElement)("svg",{ref:c,...vm,width:a,height:a,stroke:e,strokeWidth:l?Number(t)*24/Number(a):t,className:fn("lucide",r),...!n&&!xm(d)&&{"aria-hidden":"true"},...d},[...s.map(([p,x])=>(0,Ai.createElement)(p,x)),...Array.isArray(n)?n:[n]]));var V=(e,a)=>{let t=(0,pn.forwardRef)(({className:l,...r},n)=>(0,pn.createElement)(bm,{ref:n,iconNode:a,className:fn(`lucide-${ym(du(e))}`,`lucide-${e}`,l),...r}));return t.displayName=du(e),t};var lv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],qt=V("arrow-left",lv);var ov=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],yl=V("bell",ov);var iv=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],Ha=V("bookmark",iv);var rv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Sa=V("check",rv);var nv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],De=V("chevron-down",nv);var sv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],bo=V("copy",sv);var dv=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Gt=V("download",dv);var uv=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],hl=V("eye-off",uv);var cv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vl=V("eye",cv);var fv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Wt=V("menu",fv);var pv=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],So=V("moon",pv);var gv=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ra=V("play",gv);var mv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ua=V("search",mv);var yv=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],xl=V("share-2",yv);var hv=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Co=V("sun",hv);var vv=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],bl=V("upload",vv);var xv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Nt=V("user",xv);var bv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ca=V("x",bv);var gn=F(Ie());var Oa=e=>({outline:`2px solid ${e.primary}`,outlineOffset:2}),Lo="M 30,6 Q 36.5,22 43,6 L 51,6 Q 51,28 59,28 L 59,62 Q 59,67 55,67 L 18,67 Q 14,67 14,62 L 14,28 Q 22,28 22,6 L 30,6 Z";function Sl(e){let a=e.replace("#",""),t=parseInt(a.length===3?a[0]+a[0]:a.substring(0,2),16),l=parseInt(a.length===3?a[1]+a[1]:a.substring(2,4),16),r=parseInt(a.length===3?a[2]+a[2]:a.substring(4,6),16);return(.2126*t+.7152*l+.0722*r)/255>.55}var Ge=F(Y());function ne({placeholder:e,type:a="text",error:t=!1,errorMsg:l="",disabled:r=!1,readOnly:n=!1,value:s,_forceState:d,ariaLabel:c}){let p=B(),[x,m]=(0,gn.useState)(!1),[f,h]=(0,gn.useState)(!1);var k=p.gray100,z="2px solid transparent",T=p.black,y="text",g=p.gray400;d==="hover"&&(k=p.gray200),(d==="focus"||f)&&(z=t?`2px solid ${p.errorRed}`:`2px solid ${p.primary}`),(d==="disabled"||r)&&(k=p.grayOverlay,T=p.gray400,y="not-allowed",g=p.disabledTextOnDark),(d==="readOnly"||n)&&(k=p.gray50,T=p.gray500,y="default"),t&&d!=="focus"&&!f&&d!=="disabled"&&(z=`2px solid ${p.errorRed}`),t&&d==="hover"&&(k=p.gray200,z=`2px solid ${p.errorRed}`);var v=r||d==="disabled",u=n||d==="readOnly";let b=t&&l?"pinput-err-"+(e||"").replace(/\s/g,""):void 0;return(0,Ge.jsxs)("div",{style:{width:"100%"},children:[(0,Ge.jsxs)("div",{style:{position:"relative"},children:[(0,Ge.jsx)("input",{type:a==="password"&&x?"text":a,placeholder:d==="filled"||d==="readOnly"?"":e,defaultValue:d==="filled"||d==="readOnly"?s||e:s,disabled:v,readOnly:u||d==="filled","aria-label":c||e,"aria-invalid":t||void 0,"aria-describedby":b,"aria-readonly":u||void 0,onFocus:()=>h(!0),onBlur:()=>h(!1),style:{width:"100%",height:i.sizes.inputHeight,background:k,border:z,borderRadius:i.radii.lg,padding:`4px ${i.spacing.lg}px`,fontFamily:C,fontSize:i.typography.sizes.base,color:T,outline:"none",boxSizing:"border-box",paddingRight:a==="password"?44:i.spacing.lg,cursor:y}}),a==="password"&&(0,Ge.jsx)("button",{onClick:()=>m(!x),disabled:v,"aria-label":x?"Hide password":"Show password",style:{position:"absolute",right:14,top:14,background:"none",border:"none",cursor:v?"not-allowed":"pointer",color:g,display:"flex",borderRadius:i.radii.sm},children:x?(0,Ge.jsx)(hl,{size:18}):(0,Ge.jsx)(vl,{size:18})})]}),t&&l?(0,Ge.jsx)("span",{id:b,style:{fontFamily:C,fontSize:i.typography.sizes.caption,color:p.errorRed,marginTop:i.spacing.xs,display:"block",paddingLeft:i.spacing.lg},children:l}):null]})}function Vt({placeholder:e,error:a=!1,errorMsg:t="",disabled:l=!1,_forceState:r,ariaLabel:n}){let s=B(),[d,c]=(0,gn.useState)(!1);var p=s.gray100,x="2px solid transparent",m=s.gray400,f="pointer",h=s.gray400;r==="hover"&&(p=s.gray200),(r==="focus"||d)&&(x=a?`2px solid ${s.errorRed}`:`2px solid ${s.primary}`),(r==="disabled"||l)&&(p=s.grayOverlay,m=s.disabledTextOnDark,f="not-allowed",h=s.disabledTextOnDark),a&&r!=="focus"&&!d&&r!=="disabled"&&(x=`2px solid ${s.errorRed}`);var k=l||r==="disabled";let z=a&&t?"pselect-err-"+(e||"").replace(/\s/g,""):void 0;return(0,Ge.jsxs)("div",{style:{width:"100%"},children:[(0,Ge.jsxs)("div",{style:{position:"relative"},children:[(0,Ge.jsx)("select",{"aria-label":n||e,disabled:k,"aria-invalid":a||void 0,"aria-describedby":z,onFocus:()=>c(!0),onBlur:()=>c(!1),style:{width:"100%",height:i.sizes.inputHeight,background:p,border:x,borderRadius:i.radii.lg,padding:`4px ${i.spacing.lg}px`,fontFamily:C,fontSize:i.typography.sizes.base,color:m,appearance:"none",outline:"none",boxSizing:"border-box",cursor:f},children:(0,Ge.jsx)("option",{children:e})}),(0,Ge.jsx)(De,{size:i.typography.sizes.base,style:{position:"absolute",right:i.spacing.lg,top:"50%",transform:"translateY(-50%)",color:h,pointerEvents:"none"}})]}),a&&t?(0,Ge.jsx)("span",{id:z,style:{fontFamily:C,fontSize:i.typography.sizes.caption,color:s.errorRed,marginTop:i.spacing.xs,display:"block",paddingLeft:i.spacing.lg},children:t}):null]})}var qa=F(Ie());var se=F(Y());function U({children:e,variant:a="primary",size:t="md",leadingIcon:l,trailingIcon:r,iconOnly:n=!1,fullWidth:s=!0,disabled:d=!1,_forceState:c,style:p={},onClick:x}){let m=B(),[f,h]=(0,qa.useState)(!1),[k,z]=(0,qa.useState)(!1),[T,y]=(0,qa.useState)(!1),g={primary:{default:{background:m.primary,color:m.white,border:"none"},hover:{background:m.primaryHover,color:m.white,border:"none"},active:{background:m.primaryActive,color:m.white,border:"none"},disabled:{background:m.grayOverlay,color:m.disabledTextOnDark,border:"none"}},premium:{default:{background:m.premiumYellow,color:m.black,border:"none"},hover:{background:m.premiumAmber,color:m.black,border:"none"},active:{background:m.premiumActive,color:m.black,border:"none"},disabled:{background:m.grayOverlay,color:m.disabledTextOnDark,border:"none"}},social:{default:{background:m.white,color:m.black,border:`${i.strokes.thin}px solid ${m.gray200}`},hover:{background:m.gray50,color:m.black,border:`${i.strokes.thin}px solid ${m.gray200}`},active:{background:m.gray100,color:m.black,border:`${i.strokes.thin}px solid ${m.gray200}`},disabled:{background:m.white,color:m.disabledTextOnDark,border:`${i.strokes.thin}px solid ${m.grayOverlay}`}},muted:{default:{background:m.gray50,color:m.darkText,border:"none"},hover:{background:m.gray100,color:m.darkText,border:"none"},active:{background:m.gray300,color:m.darkText,border:"none"},disabled:{background:m.grayOverlay,color:m.disabledTextOnDark,border:"none"}},ghost:{default:{background:"transparent",color:m.gray400,border:"none"},hover:{background:m.gray50,color:m.gray400,border:"none"},active:{background:m.gray100,color:m.gray400,border:"none"},disabled:{background:"transparent",color:m.disabledTextOnDark,border:"none"}},link:{default:{background:"transparent",color:m.linkBlue,border:"none"},hover:{background:"transparent",color:m.primaryHover,border:"none"},active:{background:"transparent",color:m.primaryActive,border:"none"},disabled:{background:"transparent",color:m.disabledTextOnDark,border:"none"}},danger:{default:{background:"transparent",color:m.errorRed,border:"none"},hover:{background:"transparent",color:m.errorRed,border:"none"},active:{background:"transparent",color:m.errorRed,border:"none"},disabled:{background:"transparent",color:m.disabledTextOnDark,border:"none"}}},v={sm:{height:i.sizes.buttonSm,fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.semibold,borderRadius:i.radii.lg,padding:`0 ${i.spacing.lg}px`,gap:i.spacing.xs2},md:{height:i.sizes.buttonMd,fontSize:i.typography.sizes.sm,fontWeight:i.typography.weights.medium,borderRadius:i.radii.lg,padding:`0 ${i.spacing.xl}px`,gap:i.spacing.sm},lg:{height:i.sizes.buttonLg,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,borderRadius:i.radii.button,padding:"0 40px",gap:i.spacing.sm}},u=g[a]||g.primary,R=u[c||(d?"disabled":k?"active":f?"hover":"default")]||u.default,w=v[t]||v.md,E=a==="link"||a==="danger";return(0,se.jsxs)("button",{disabled:d,onClick:x,onMouseEnter:()=>!d&&h(!0),onMouseLeave:()=>{h(!1),z(!1)},onMouseDown:()=>!d&&z(!0),onMouseUp:()=>z(!1),onFocus:()=>y(!0),onBlur:()=>y(!1),style:{width:s&&!n?"100%":"auto",height:w.height,minWidth:n?w.height:void 0,borderRadius:n?"50%":w.borderRadius,fontFamily:C,fontSize:w.fontSize,fontWeight:w.fontWeight,cursor:d?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:w.gap,padding:n?0:w.padding,transition:"all 0.2s",textDecoration:E?"underline":"none",...R,...T?Oa(m):{},...p},children:[l&&(0,se.jsx)("span",{style:{display:"flex",alignItems:"center"},children:l}),n?(0,se.jsx)("span",{style:{display:"flex",alignItems:"center"},children:e}):e,r&&(0,se.jsx)("span",{style:{display:"flex",alignItems:"center"},children:r})]})}function Sm({label:e,isActive:a,disabled:t=!1,onClick:l,variant:r,accentColor:n,_forceState:s}){let d=B(),[c,p]=(0,qa.useState)(!1),[x,m]=(0,qa.useState)(!1),f=t||s==="disabled",h=f?"disabled":s||(x?"active":c?"hover":"default");if(r==="pill"){let T=f?"transparent":a?d.white:h==="active"?d.gray300:h==="hover"?d.gray200:"transparent",y=f?d.gray300:a?d.black:h==="hover"||h==="active"?d.gray500:d.gray400;return(0,se.jsx)("button",{onClick:f?void 0:l,onMouseEnter:()=>!f&&p(!0),onMouseLeave:()=>{p(!1),m(!1)},onMouseDown:()=>!f&&m(!0),onMouseUp:()=>m(!1),role:"tab","aria-selected":a,"aria-disabled":f||void 0,disabled:f,style:{flex:1,height:i.sizes.tabHeight,border:"none",borderRadius:i.radii.md,cursor:f?"not-allowed":"pointer",fontFamily:C,fontSize:i.typography.sizes.sm,fontWeight:i.typography.weights.medium,transition:"all 0.15s",background:T,color:y,boxShadow:a&&!f?"0 1px 3px rgba(0,0,0,0.1)":"none",opacity:f?.5:1},children:e})}let k=n||d.errorRed,z=f?d.gray300:a?d.black:h==="active"||h==="hover"?d.gray500:d.gray400;return(0,se.jsx)("button",{onClick:f?void 0:l,onMouseEnter:()=>!f&&p(!0),onMouseLeave:()=>{p(!1),m(!1)},onMouseDown:()=>!f&&m(!0),onMouseUp:()=>m(!1),role:"tab","aria-selected":a,"aria-disabled":f||void 0,disabled:f,style:{flex:"0 0 auto",background:"none",border:"none",cursor:f?"not-allowed":"pointer",fontFamily:C,fontSize:i.typography.sizes.sm,fontWeight:i.typography.weights.medium,color:z,padding:`${i.spacing.lg}px 0`,position:"relative",transition:"color 0.15s",borderBottom:a&&!f?`3px solid ${k}`:h==="hover"?`2px solid ${k}55`:"none",marginBottom:"-1px",opacity:f?.5:1},children:e})}function La({tabs:e,active:a,onSelect:t,variant:l="pill",accentColor:r,_forceState:n}){let s=B();if(l==="pill")return(0,se.jsx)("div",{role:"tablist",style:{display:"flex",background:s.gray100,borderRadius:i.radii.md,padding:i.spacing.xs,width:"100%"},children:e.map(c=>(0,se.jsx)(Sm,{label:c.label,isActive:a===c.value,disabled:c.disabled,onClick:()=>t(c.value),variant:"pill",_forceState:!a||a!==c.value?n:void 0},c.value))});let d=r||s.errorRed;return(0,se.jsx)("div",{role:"tablist",style:{display:"flex",gap:i.spacing.xl,padding:`0 ${i.spacing.lg}px`,borderBottom:`1px solid ${s.gray100}`,width:"100%",overflowX:"auto"},children:e.map(c=>(0,se.jsx)(Sm,{label:c.label,isActive:a===c.value,disabled:c.disabled,onClick:()=>t(c.value),variant:"underline",accentColor:d,_forceState:!a||a!==c.value?n:void 0},c.value))})}function ko({text:e="OR"}){let a=B();return(0,se.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.md,width:"100%"},children:[(0,se.jsx)("span",{style:{flex:1,height:i.strokes.thin,background:a.gray200}}),(0,se.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.medium,color:a.gray400},children:e}),(0,se.jsx)("span",{style:{flex:1,height:i.strokes.thin,background:a.gray200}})]})}function Cl({children:e,variant:a="muted"}){let t=B(),l={muted:{color:t.gray400},accent:{color:t.accent,textDecoration:"underline"},primary:{color:t.primary}};return(0,se.jsx)("button",{style:{fontFamily:C,fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,cursor:"pointer",background:"none",border:"none",padding:0,...l[a]},children:e})}function uu({icon:e,active:a=!1,disabled:t=!1,_forceState:l,onClick:r,isBookmark:n=!1,ariaLabel:s}){let d=B(),c=e,[p,x]=(0,qa.useState)(!1),[m,f]=(0,qa.useState)(!1),[h,k]=(0,qa.useState)(!1),[z,T]=(0,qa.useState)(!1),v={default:{default:{background:d.gray100,color:d.gray500},hover:{background:d.gray200,color:d.gray500},active:{background:d.gray300,color:d.darkText},disabled:{background:d.grayOverlay,color:d.disabledTextOnDark}},active:{default:{background:d.gray100,color:d.primary},hover:{background:d.gray200,color:d.primaryHover},active:{background:d.gray300,color:d.primaryActive},disabled:{background:d.grayOverlay,color:d.disabledTextOnDark}}}[a?"active":"default"],b=v[l||(t?"disabled":m?"active":p?"hover":"default")]||v.default,R=q=>{n&&!t&&(k(!0),setTimeout(()=>k(!1),350)),r&&r(q)},w=h?"scale(1.3)":"scale(1)",E=n&&a?b.color:"none";return(0,se.jsx)("button",{disabled:t,onClick:R,onMouseEnter:()=>!t&&x(!0),onMouseLeave:()=>{x(!1),f(!1)},onMouseDown:()=>!t&&f(!0),onMouseUp:()=>f(!1),onFocus:()=>T(!0),onBlur:()=>T(!1),"aria-label":s,"aria-pressed":n?a:void 0,style:{width:i.sizes.buttonMd,height:i.sizes.buttonMd,borderRadius:"50%",background:b.background,border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:t?"not-allowed":"pointer",flexShrink:0,transition:"background 0.15s, color 0.15s",...z?Oa(d):{}},children:(0,se.jsx)("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",transition:"transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:n?w:"scale(1)"},children:(0,se.jsx)(c,{size:i.typography.sizes.lg,color:b.color,fill:E,style:{transition:"fill 0.3s ease, color 0.3s ease"}})})})}function mn({views:e="1 view",bookmarked:a=!1,disabled:t=!1,_forceState:l,onDownload:r,onShare:n,onBookmark:s}){let d=B();return(0,se.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:`${i.spacing.md}px 0`,width:"100%",opacity:t&&!l?.5:1},children:[(0,se.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:d.gray500},children:e}),(0,se.jsxs)("div",{style:{display:"flex",gap:i.spacing.md},children:[(0,se.jsx)(uu,{icon:Gt,disabled:t,_forceState:l,onClick:r,ariaLabel:"Download"}),(0,se.jsx)(uu,{icon:bl,disabled:t,_forceState:l,onClick:n,ariaLabel:"Share"}),(0,se.jsx)(uu,{icon:Ha,active:a,disabled:t,_forceState:l,onClick:s,isBookmark:!0,ariaLabel:a?"Remove bookmark":"Add bookmark"})]})]})}var Io=F(Ie());var cu=F(Ie());var O=F(Y());function st({variant:e="live"}){let a=B(),t={live:{background:a.liveRed,fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.semibold,textTransform:"uppercase",label:"LIVE",dot:!0},premium:{background:a.premiumAmber,fontSize:i.typography.sizes.xxs,fontWeight:i.typography.weights.bold,textTransform:"uppercase",label:"Premium",dot:!1},free:{background:a.freeBadgeGreen,fontSize:i.typography.sizes.xxs,fontWeight:i.typography.weights.bold,textTransform:"uppercase",label:"Free",dot:!1},claimed:{background:a.claimedPurple,fontSize:i.typography.sizes.xxs,fontWeight:i.typography.weights.bold,textTransform:"uppercase",label:"Claimed",dot:!1},highlights:{background:a.highlightsBadgeBg,fontSize:i.typography.sizes.xxs,fontWeight:i.typography.weights.bold,textTransform:"uppercase",label:"HIGHLIGHTS",dot:!1,icon:!0}},l=t[e]||t.live;var r=e==="highlights"?a.highlightsBadgeText:a.white,n=e==="highlights"?`${i.strokes.thin}px solid ${a.highlightsBadgeText}`:"none";return(0,O.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:i.spacing.xs,background:l.background,color:r,padding:`${i.spacing.xs}px ${i.spacing.md}px`,borderRadius:i.radii.badge,fontSize:l.fontSize,fontWeight:l.fontWeight,textTransform:l.textTransform,border:n},children:[l.dot&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("style",{children:"@keyframes liveDotFlicker { 0%,100%{opacity:1} 50%{opacity:0.2} }"}),(0,O.jsx)("div",{style:{width:6,height:6,borderRadius:"50%",background:a.white,animation:"liveDotFlicker 1.2s ease-in-out infinite"}})]}),l.icon&&(0,O.jsx)(ra,{size:10,fill:a.premiumYellow,color:a.premiumYellow}),l.label]})}function jt({count:e=0}){let a=B();return(0,O.jsxs)("div",{style:{position:"relative",display:"inline-flex"},children:[(0,O.jsx)(yl,{size:24,color:a.gray500}),e>0&&(0,O.jsx)("div",{style:{position:"absolute",top:-4,right:-6,minWidth:16,height:16,borderRadius:i.radii.thumb,background:a.notifBadgeRed,display:"flex",alignItems:"center",justifyContent:"center",padding:`0 ${i.spacing.xs}px`,boxSizing:"border-box"},children:(0,O.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.micro,fontWeight:i.typography.weights.bold,color:a.white},children:e})})]})}function ve({size:e=28,name:a="",logoUrl:t}){let l=B();if(t)return(0,O.jsx)("div",{style:{width:e,height:e,borderRadius:"50%",background:l.white,border:`${i.strokes.thin}px solid ${l.barTrack}`,flexShrink:0,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,O.jsx)("img",{src:t,alt:a,style:{width:e,height:e,objectFit:"cover",borderRadius:"50%"}})});let r=["#D0142C","#116DFF","#22C55E","#E7A610","#8B5CF6","#0d9488","#E8332B","#1877F2","#DD2A7B","#0EA5E9","#F97316","#6366F1"],n=a?[...a].reduce((c,p)=>(c<<5)-c+p.charCodeAt(0)|0,0):0,s=Math.abs(n)%r.length,d=a?a.charAt(0).toUpperCase():"T";return(0,O.jsx)("div",{style:{width:e,height:e,borderRadius:"50%",background:l.white,border:`${i.strokes.thin}px solid ${l.barTrack}`,flexShrink:0,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,O.jsxs)("svg",{viewBox:"0 0 28 28",width:e,height:e,children:[(0,O.jsx)("circle",{cx:"14",cy:"14",r:"13",fill:r[s],opacity:"0.15"}),(0,O.jsx)("circle",{cx:"14",cy:"14",r:"13",stroke:r[s],strokeWidth:"0.5",fill:"none",opacity:"0.4"}),(0,O.jsx)("text",{x:"14",y:"18.5",textAnchor:"middle",fontFamily:C,fontSize:"14",fontWeight:"700",fill:r[s],children:d})]})})}function na({initials:e="BR",size:a=40}){let t=B();return(0,O.jsx)("div",{style:{width:a,height:a,borderRadius:"50%",background:t.gray500,display:"flex",alignItems:"center",justifyContent:"center",color:t.white,fontFamily:C,fontSize:a*.38,fontWeight:i.typography.weights.bold,flexShrink:0},children:e})}function dt({size:e=48,name:a="",photoUrl:t}){let l=B(),[r,n]=(0,cu.useState)(!1);return t&&!r?(0,O.jsx)("div",{style:{width:e,height:e,borderRadius:"50%",flexShrink:0,overflow:"hidden"},children:(0,O.jsx)("img",{src:t,alt:a,onError:()=>n(!0),style:{width:e,height:e,objectFit:"cover",borderRadius:"50%"}})}):(0,O.jsx)("div",{style:{width:e,height:e,borderRadius:"50%",background:l.gray200,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden"},children:(0,O.jsx)(Nt,{size:e*.55,color:l.gray400})})}function me({number:e,size:a=40,teamColor:t,photoUrl:l}){let r=B(),n=t||r.primary,[s,d]=(0,cu.useState)(!1);return l&&!s?(0,O.jsx)("div",{style:{width:a,height:a,borderRadius:"50%",flexShrink:0,overflow:"hidden"},children:(0,O.jsx)("img",{src:l,alt:`#${e}`,onError:()=>d(!0),style:{width:a,height:a,objectFit:"cover",borderRadius:"50%"}})}):(0,O.jsx)("div",{style:{width:a,height:a,borderRadius:"50%",background:n,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,O.jsx)("span",{style:{fontFamily:C,fontSize:a*.4,fontWeight:i.typography.weights.bold,color:Sl(n)?r.darkText:r.white},children:e})})}function yn({size:e=11,fill:a=ba.premiumYellow}){let t=e,l=e*(10/8);return(0,O.jsx)("svg",{width:t,height:l,viewBox:"0 0 8 10",fill:"none",children:(0,O.jsx)("path",{clipRule:"evenodd",d:"M7.02621 4.06889H6.73849L6.73733 2.70111C6.73616 1.21111 5.46535 -0.00110943 3.90332 1.67782e-06C2.3413 0.00111279 1.07048 1.21333 1.07164 2.70333L1.07397 4.07111H0.971466C0.434483 4.07222 -0.00115988 4.48778 4.94171e-06 5V9.07222C4.94171e-06 9.58444 0.436813 10 0.973795 10L7.02853 9.99667C7.56552 9.99667 8.00116 9.58111 8 9.06889V4.99556C8 4.48333 7.56319 4.06889 7.02621 4.06889ZM2.11765 4.07111L2.11532 2.70333C2.11532 1.76222 2.91672 0.996668 3.90332 0.995557C4.88992 0.995557 5.69248 1.76111 5.69248 2.70111L5.69481 4.06889L2.11765 4.07111Z",fill:a,fillRule:"evenodd"})})}function ut(){let e=B();return(0,O.jsx)("div",{style:{width:20,height:20,borderRadius:"50%",background:e.premiumDark,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"none"},children:(0,O.jsx)(yn,{size:8,fill:e.premiumYellow})})}var hn=()=>(0,O.jsxs)("svg",{"aria-hidden":"true",width:"18",height:"18",viewBox:"0 0 18 18",children:[(0,O.jsx)("path",{d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z",fill:"#4285F4"}),(0,O.jsx)("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z",fill:"#34A853"}),(0,O.jsx)("path",{d:"M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z",fill:"#FBBC05"}),(0,O.jsx)("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58Z",fill:"#EA4335"})]}),vn=()=>(0,O.jsx)("svg",{"aria-hidden":"true",width:"18",height:"20",viewBox:"0 0 18 22",fill:"currentColor",children:(0,O.jsx)("path",{d:"M17.05 15.23c-.4.92-.59 1.33-1.1 2.15-.72 1.14-1.73 2.56-2.98 2.57-1.12.01-1.4-.73-2.92-.72-1.52.01-1.83.74-2.95.73-1.26-.01-2.22-1.29-2.94-2.43C2.1 14.36 1.93 10.87 3.34 9.04c1-1.3 2.58-2.06 4.01-2.06 1.49 0 2.43.74 3.66.74 1.2 0 1.93-.74 3.66-.74 1.27 0 2.68.69 3.68 1.88-3.23 1.77-2.7 6.38.7 7.37ZM12.14 4.9c.56-.72.99-1.74.83-2.78-.92.06-2 .65-2.63 1.41-.57.69-1.04 1.72-.86 2.72 1 .03 2.04-.57 2.66-1.35Z"})});function Ti({size:e=30}){return(0,O.jsx)("svg",{"aria-hidden":"true",width:e,height:e,viewBox:"0 0 235 163",fill:"none",style:{flexShrink:0},children:(0,O.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M172.002 54.528L161.909 108.355C160.962 113.497 157.913 116.015 152.867 116.015H69.176C64.13 116.015 62.027 113.497 63.078 108.355L73.172 54.528C74.118 49.386 77.167 46.868 82.214 46.868H165.904C170.951 46.868 173.053 49.386 172.002 54.528ZM182.095 0.7H83.265C42.6813 0.7 19.5508 16.1242 13.7682 46.868L0.731 116.12C-5.0516 146.863 12.2963 162.288 52.8798 162.288H151.71C192.294 162.288 215.424 146.863 221.207 116.12L234.244 46.868C240.027 16.1242 222.679 0.7 182.095 0.7Z",fill:"#00D6FE"})})}var Z=F(Y());function Aa({orientation:e="landscape",locked:a=!1,duration:t="1:42:15",title:l="Full Game",subtitle:r="Free",showJerseyBadge:n=!1,jerseyNumber:s=1,jerseyLabel:d="Player Highlights",jerseyColor:c=ba.jerseyRed,thumbnailUrl:p}){let x=B(),m=e==="vertical",f=m?{borderRadius:i.radii.badge,width:108,height:192}:{borderRadius:i.radii.card,width:"100%",maxWidth:398,aspectRatio:"16/9",marginBottom:i.spacing.md},h=m?{top:7,left:6,padding:"2px 4px"}:{top:8,left:8,padding:"2px 8px"},k=m?{top:6,right:6}:{top:8,right:8},z=m?{background:"linear-gradient(to top, rgba(0,0,0,0.5) 49%, rgba(114,123,132,0) 100%)",padding:i.spacing.sm}:{background:"linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)",padding:i.spacing.md},T=m?{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.bold,color:x.white,lineHeight:"16px"}:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.bold,color:x.white,lineHeight:"18px"},y=m?{fontSize:i.typography.sizes.mini,fontWeight:i.typography.weights.bold,color:x.gray300,lineHeight:"15px",marginTop:i.spacing.xxs}:{fontSize:i.typography.sizes.xxs,fontWeight:i.typography.weights.regular,color:x.gray300,lineHeight:"16.5px",marginTop:i.spacing.xxs};return(0,Z.jsxs)("div",{style:{position:"relative",overflow:"hidden",background:x.heroBg,...f},children:[p&&(0,Z.jsx)("img",{src:p,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0}}),a&&!p&&(0,Z.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #2a4a7f 0%, #1a3a5c 40%, #3a6a9f 70%, #1a2a4a 100%)",filter:"blur(8px)",transform:"scale(1.1)",zIndex:0}}),(0,Z.jsx)("div",{style:{position:"absolute",...h,background:"rgba(0,0,0,0.55)",borderRadius:i.radii.pill,zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,Z.jsx)("span",{style:{fontFamily:C,fontWeight:i.typography.weights.medium,fontSize:i.typography.sizes.xxs,color:"#FFFFFF",lineHeight:1},children:t})}),!n&&(a?(0,Z.jsx)("div",{style:{position:"absolute",...k,width:28,height:28,background:x.premiumDark,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,border:`${i.strokes.medium}px solid ${x.premiumYellow}`,boxSizing:"border-box"},children:(0,Z.jsx)(yn,{size:11,fill:x.premiumYellow})}):(0,Z.jsx)("div",{style:{position:"absolute",...k,width:28,height:28,borderRadius:"50%",background:x.gray500,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2},children:(0,Z.jsx)(ra,{size:12,color:x.jerseyStroke,fill:x.jerseyStroke})})),n&&(0,Z.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:36,height:36,borderRadius:"50%",background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2},children:(0,Z.jsx)(ra,{size:16,color:"#FFFFFF",fill:"#FFFFFF"})}),n?(0,Z.jsx)("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(to top, rgba(0,0,0,0.5) 49%, rgba(114,123,132,0) 100%)",padding:"12px 8px",zIndex:1,display:"flex",alignItems:"flex-end"},children:(0,Z.jsxs)("div",{style:{display:"flex",gap:i.spacing.xs2,alignItems:"center"},children:[(0,Z.jsxs)("div",{style:{width:19.25,height:28,position:"relative",flexShrink:0},children:[(0,Z.jsx)("svg",{viewBox:"12 4 50 66",fill:"none",preserveAspectRatio:"xMidYMid meet",style:{position:"absolute",inset:0,width:"100%",height:"100%",filter:"drop-shadow(0px 0.7px 3.5px rgba(5,27,68,0.2))"},children:(0,Z.jsx)("path",{d:Lo,fill:c,stroke:"white",strokeWidth:"2"})}),(0,Z.jsx)("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-46%)",fontFamily:C,fontWeight:i.typography.weights.bold,fontSize:i.typography.sizes.mini,color:Sl(c)?x.darkText:"#fff",lineHeight:1},children:s})]}),(0,Z.jsx)("div",{style:{fontFamily:C,fontWeight:i.typography.weights.bold,fontSize:i.typography.sizes.caption,color:x.gray200,lineHeight:"14px"},children:d})]})}):(0,Z.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,...z,zIndex:1},children:[(0,Z.jsx)("div",{style:T,children:l}),(0,Z.jsx)("div",{style:y,children:r})]})]})}function Ll({primaryColor:e=ba.heroBg,logo:a,logoSize:t=80,height:l=i.sizes.heroHeight}){let r=(()=>{let n=e.replace("#",""),s=Math.max(0,Math.round(parseInt(n.substring(0,2),16)*.7)),d=Math.max(0,Math.round(parseInt(n.substring(2,4),16)*.7)),c=Math.max(0,Math.round(parseInt(n.substring(4,6),16)*.7));return`rgb(${s},${d},${c})`})();return(0,Z.jsx)("div",{style:{width:"100%",height:l,background:`linear-gradient(180deg, ${e} 0%, ${r} 100%)`,borderRadius:`0 0 ${i.radii.xl}px ${i.radii.xl}px`,display:"flex",alignItems:"center",justifyContent:"center"},children:a||(0,Z.jsx)("div",{style:{width:t*2.2,height:t*2.2,borderRadius:i.radii.md,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px dashed rgba(255,255,255,0.3)"},children:(0,Z.jsxs)("svg",{width:t*1.1,height:t*1.1,viewBox:"0 0 80 80",fill:"none",children:[(0,Z.jsx)("rect",{x:"4",y:"4",width:"72",height:"72",rx:"14",fill:"rgba(255,255,255,0.2)"}),(0,Z.jsx)("path",{d:"M28 52 L40 28 L52 52 Z",fill:"rgba(255,255,255,0.5)"}),(0,Z.jsx)("circle",{cx:"33",cy:"35",r:"5",fill:"rgba(255,255,255,0.5)"})]})})})}function Cm({active:e=0}){let a=B(),[t,l]=(0,Io.useState)(e),[r,n]=(0,Io.useState)(0),s=(0,Io.useRef)(0),d=(0,Io.useRef)(!1);var c=[{bg:"linear-gradient(135deg, #1a1a1a 0%, #333 100%)",label:"Ad Slot 1"},{bg:"linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)",label:"Ad Slot 2"}];let p=f=>{s.current=f.clientX,d.current=!0,f.currentTarget.setPointerCapture(f.pointerId)},x=f=>{d.current&&n(f.clientX-s.current)},m=()=>{d.current&&(d.current=!1,r<-40&&t<c.length-1?l(t+1):r>40&&t>0&&l(t-1),n(0))};return(0,Z.jsxs)("div",{style:{position:"relative",width:"100%",borderRadius:0,overflow:"hidden",touchAction:"pan-y",cursor:"grab"},onPointerDown:p,onPointerMove:x,onPointerUp:m,onPointerCancel:m,children:[(0,Z.jsx)("div",{style:{display:"flex",transition:d.current?"none":"transform 0.3s",transform:`translateX(calc(-${t*100}% + ${r}px))`},children:c.map(function(f,h){return(0,Z.jsx)("div",{style:{minWidth:"100%",height:180,background:f.bg,display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none"},children:(0,Z.jsx)("span",{style:{color:a.white,fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.semibold,opacity:.7},children:f.label})},h)})}),(0,Z.jsx)("div",{style:{position:"absolute",bottom:10,left:"50%",transform:"translateX(-50%)",display:"flex",gap:i.spacing.sm},children:c.map(function(f,h){return(0,Z.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:h===t?a.white:"rgba(255,255,255,0.5)",transition:"background 0.2s"}},h)})})]})}var Lm=F(Ie());var A=F(Y());function km(){let e=B();return(0,A.jsxs)("div",{style:{minWidth:240,flex:1,borderRadius:i.radii.card,overflow:"hidden",flexShrink:0},children:[(0,A.jsx)("div",{style:{background:e.gray200,borderRadius:`${i.radii.card}px ${i.radii.card}px 0 0`},children:(0,A.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:`${i.spacing.md}px ${i.spacing.lg}px`},children:[(0,A.jsx)(PLiveBadge,{}),(0,A.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.medium,color:e.black},children:"21 NOV, 2024"})]})}),(0,A.jsx)("div",{style:{background:e.gray100,borderRadius:`0 0 ${i.radii.card}px ${i.radii.card}px`},children:(0,A.jsx)("div",{style:{display:"flex",alignItems:"center",padding:`${i.spacing.md}px ${i.spacing.lg}px`},children:(0,A.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.sm,width:"100%"},children:[(0,A.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.sm2},children:[(0,A.jsx)(PTeamRow,{name:"M. Kiryat Gat",score:"87",isWinner:!0}),(0,A.jsx)(PTeamRow,{name:"H. Haifa",score:"79",isWinner:!1})]}),(0,A.jsx)("div",{children:(0,A.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.mini,fontWeight:i.typography.weights.medium,color:e.gray400},children:"Liga Leumit (Winner League)"})})]})})})]})}function Im(){let e=B();return(0,A.jsxs)("div",{style:{background:e.gray100,borderRadius:i.radii.card,display:"flex",gap:i.spacing.lg,marginBottom:i.spacing.md,height:116,overflow:"hidden"},children:[(0,A.jsx)("div",{style:{width:72,flexShrink:0,background:e.gray200,borderRadius:`${i.radii.card}px 0 0 ${i.radii.card}px`,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,A.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,A.jsx)("div",{style:{fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:e.black,lineHeight:"24px"},children:"20"}),(0,A.jsx)("div",{style:{fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.bold,color:e.black,lineHeight:"16px"},children:"NOV"}),(0,A.jsx)("div",{style:{fontSize:i.typography.sizes.mini,fontWeight:i.typography.weights.regular,color:e.black,lineHeight:"15px"},children:"2024"})]})}),(0,A.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:i.spacing.sm,paddingRight:i.spacing.lg},children:[(0,A.jsx)(PTeamRow,{name:"Maccabi Kiryat Gat",score:"89",isWinner:!0,logoSize:27,fontWeight:400,gap:8}),(0,A.jsx)(PTeamRow,{name:"Ironi Nahariya",score:"77",isWinner:!1,logoSize:27,fontWeight:400,gap:8}),(0,A.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,A.jsx)("span",{style:{fontSize:i.typography.sizes.mini,fontWeight:i.typography.weights.regular,color:e.gray400},children:"Liga Leumit (Winner League)"}),(0,A.jsx)(st,{variant:"highlights"})]})]})]})}function wm(){let e=B();return(0,A.jsx)("div",{style:{background:e.gray100,borderRadius:i.radii.card,padding:i.spacing.lg,width:"100%",maxWidth:398,boxSizing:"border-box"},children:(0,A.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.sm},children:[(0,A.jsxs)("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:i.spacing.sm},children:[(0,A.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.md},children:[(0,A.jsx)("div",{style:{width:44,height:44,minWidth:44,borderRadius:"50%",background:e.white,flexShrink:0}}),(0,A.jsx)("span",{style:{fontSize:`clamp(${i.typography.sizes.xl}px, 6vw, ${i.typography.sizes.h1}px)`,fontWeight:i.typography.weights.regular,color:e.black},children:"89"})]}),(0,A.jsx)("div",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.regular,color:e.black,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:"M. Kiryat Gat"}),(0,A.jsx)("div",{style:{fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.regular,color:e.gray500},children:"1st"})]}),(0,A.jsxs)("div",{style:{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:`0 ${i.spacing.xs}px`},children:[(0,A.jsx)("div",{style:{fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.regular,color:e.gray500},children:"Final"}),(0,A.jsx)("div",{style:{fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.regular,color:e.gray500},children:"20 NOV 2024"})]}),(0,A.jsxs)("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:i.spacing.sm},children:[(0,A.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.md},children:[(0,A.jsx)("span",{style:{fontSize:`clamp(${i.typography.sizes.xl}px, 6vw, ${i.typography.sizes.h1}px)`,fontWeight:i.typography.weights.regular,color:e.gray500},children:"77"}),(0,A.jsx)("div",{style:{width:44,height:44,minWidth:44,borderRadius:"50%",background:e.white,flexShrink:0}})]}),(0,A.jsx)("div",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.regular,color:e.gray500,textAlign:"right",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:"I. Nahariya"}),(0,A.jsx)("div",{style:{fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.regular,color:e.gray500,textAlign:"right"},children:"5th"})]})]})})}function Lv({size:e=11,fill:a=LIGHT.premiumYellow}){let t=e,l=e*(10/8);return(0,A.jsx)("svg",{width:t,height:l,viewBox:"0 0 8 10",fill:"none",children:(0,A.jsx)("path",{clipRule:"evenodd",d:"M7.02621 4.06889H6.73849L6.73733 2.70111C6.73616 1.21111 5.46535 -0.00110943 3.90332 1.67782e-06C2.3413 0.00111279 1.07048 1.21333 1.07164 2.70333L1.07397 4.07111H0.971466C0.434483 4.07222 -0.00115988 4.48778 4.94171e-06 5V9.07222C4.94171e-06 9.58444 0.436813 10 0.973795 10L7.02853 9.99667C7.56552 9.99667 8.00116 9.58111 8 9.06889V4.99556C8 4.48333 7.56319 4.06889 7.02621 4.06889ZM2.11765 4.07111L2.11532 2.70333C2.11532 1.76222 2.91672 0.996668 3.90332 0.995557C4.88992 0.995557 5.69248 1.76111 5.69248 2.70111L5.69481 4.06889L2.11765 4.07111Z",fill:a,fillRule:"evenodd"})})}function kl({title:e="Weiss with the dimes",date:a="NOV 13, 2025",duration:t="1:23",locked:l=!0,emoji:r="\u{1F3C0}"}){let n=B();return(0,A.jsxs)("div",{style:{position:"relative",width:130,height:190,borderRadius:i.radii.badge,overflow:"hidden",background:n.heroBg,flexShrink:0},children:[(0,A.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #2a4a7f 0%, #1a3a5c 40%, #3a6a9f 70%, #1a2a4a 100%)"}}),(0,A.jsx)("div",{style:{position:"absolute",top:6,left:6,background:"rgba(0,0,0,0.55)",borderRadius:i.radii.pill,padding:"1px 5px",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,A.jsx)("span",{style:{fontFamily:C,fontWeight:i.typography.weights.medium,fontSize:i.typography.sizes.micro,color:"#FFFFFF",lineHeight:1},children:t})}),l?(0,A.jsx)("div",{style:{position:"absolute",top:6,right:6,width:24,height:24,background:n.premiumDark,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,border:`${i.strokes.medium}px solid ${n.premiumYellow}`,boxSizing:"border-box"},children:(0,A.jsx)(Lv,{size:8,fill:n.premiumYellow})}):(0,A.jsx)("div",{style:{position:"absolute",top:6,right:6,width:24,height:24,borderRadius:"50%",background:n.gray500,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2},children:(0,A.jsx)(ra,{size:10,color:n.jerseyStroke,fill:n.jerseyStroke})}),(0,A.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",padding:"24px 8px 8px",zIndex:1},children:[(0,A.jsxs)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.bold,color:n.white,lineHeight:"14px"},children:[r," ",e]}),(0,A.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.micro,fontWeight:i.typography.weights.regular,color:n.gray300,marginTop:3},children:a})]})]})}function kv({jerseyNumber:e=4,text:a='"Player #4 Highlight" from the game "S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)" is now ready!'}){let t=B();return(0,A.jsxs)("div",{style:{display:"flex",gap:i.spacing.md,padding:`${i.spacing.md2}px 0`,borderBottom:`1px solid ${t.gray100}`,alignItems:"flex-start"},children:[(0,A.jsxs)("div",{style:{position:"relative",flexShrink:0},children:[(0,A.jsx)("svg",{width:50,height:50*(67/73),viewBox:"0 0 73 73",fill:"none",children:(0,A.jsx)("path",{d:Lo,fill:t.jerseyRed,stroke:t.white,strokeWidth:i.strokes.thick})}),(0,A.jsx)("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -38%)",fontFamily:C,fontSize:i.typography.sizes.h3,fontWeight:i.typography.weights.extraBold,color:t.white},children:e})]}),(0,A.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.body2,fontWeight:i.typography.weights.regular,color:t.black,lineHeight:1.5,flex:1},children:a})]})}function zm(){let e=B(),[a,t]=(0,Lm.useState)(!1);var l=[{num:4,text:'"Player #4 Highlight" from the game "S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)" is now ready!'},{num:11,text:'"Player #11 Highlight" from the game "S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)" is now ready!'},{num:4,text:'"Player #4 Highlight" from the game "S.D Spartans vs. Logan Thunder (121-89, Nov 13, 2025)" is now ready!'}];return(0,A.jsxs)("div",{role:"region","aria-label":"Notification Center",style:{width:"100%",maxWidth:380,background:e.white,borderRadius:i.radii.card,boxShadow:"0 8px 30px rgba(0,0,0,0.15)",overflow:"hidden"},children:[(0,A.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:`1px solid ${e.gray100}`},children:[(0,A.jsx)("h3",{style:{margin:0,fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:e.black},children:"Notification Center"}),(0,A.jsx)("button",{onFocus:()=>t(!0),onBlur:()=>t(!1),"aria-label":"Clear all notifications",style:{background:"none",border:"none",fontFamily:C,fontSize:i.typography.sizes.body2,color:e.gray400,cursor:"pointer",borderRadius:i.radii.sm,...a?Oa(e):{}},children:"Clear all"})]}),(0,A.jsx)("div",{style:{padding:"0 20px",maxHeight:320,overflowY:"auto"},children:l.map(function(r,n){return(0,A.jsx)(kv,{jerseyNumber:r.num,text:r.text},n)})})]})}var Bm=F(Ie());var D=F(Y());function Di({name:e,score:a,isWinner:t=!0,logoSize:l=28,fontSize:r=16,fontWeight:n=500,gap:s=12}){let d=B(),c=t?d.black:d.gray500;return(0,D.jsxs)("div",{style:{display:"flex",alignItems:"center",height:l},children:[(0,D.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:s,flex:1},children:[(0,D.jsx)(PTeamLogo,{size:l,name:e}),(0,D.jsx)("span",{style:{fontFamily:C,fontSize:r,fontWeight:n,color:c},children:e})]}),(0,D.jsx)("span",{style:{fontFamily:C,fontSize:r,fontWeight:n,color:c},children:a})]})}function xn({label:e,leftVal:a,rightVal:t}){let l=B(),r=a+t,n=a/r*100,s=t/r*100;return(0,D.jsxs)("div",{style:{padding:"16px 20px",fontFamily:C},children:[(0,D.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.sm2,marginBottom:i.spacing.sm2},children:[(0,D.jsx)("span",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:l.darkText,width:28,textAlign:"left",flexShrink:0},children:a}),(0,D.jsx)("span",{style:{flex:1,fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:l.darkText,textAlign:"center"},children:e}),(0,D.jsx)("span",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:l.darkText,width:28,textAlign:"right",flexShrink:0},children:t})]}),(0,D.jsxs)("div",{style:{display:"flex",gap:i.spacing.sm2},children:[(0,D.jsx)("div",{style:{flex:1,height:8,background:l.barTrack,borderRadius:i.radii.sm,display:"flex",justifyContent:"flex-end"},children:(0,D.jsx)("div",{style:{width:`${n}%`,height:8,background:l.barRed,borderRadius:i.radii.sm}})}),(0,D.jsx)("div",{style:{flex:1,height:8,background:l.barTrack,borderRadius:i.radii.sm,display:"flex",justifyContent:"flex-start"},children:(0,D.jsx)("div",{style:{width:`${s}%`,height:8,background:l.barGray,borderRadius:i.radii.sm}})})]})]})}function Am(){let e=B(),a=[{label:"Points",left:{num:"#22",detail:"22 PTS, 9 REB"},right:{num:"#9",detail:"19 PTS, 6 REB"}},{label:"Rebounds",left:{num:"#22",detail:"9 REB, 4 OFF"},right:{num:"#11",detail:"8 REB, 3 OFF"}},{label:"Assists",left:{num:"#11",detail:"7 AST, 30 MIN"},right:{num:"#7",detail:"6 AST, 28 MIN"}}];return(0,D.jsxs)("div",{style:{padding:"16px 20px",fontFamily:C},children:[(0,D.jsx)("h3",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.bold,color:e.darkText,margin:"0 0 10px"},children:"Game Leaders"}),(0,D.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:i.spacing.sm2},children:[(0,D.jsx)("div",{style:{width:44,height:44,borderRadius:"50%",background:e.gray100,border:`${i.strokes.thin}px solid ${e.gray300}`,overflow:"hidden"}}),(0,D.jsx)("div",{style:{width:44,height:44,borderRadius:"50%",background:e.gray100,border:`${i.strokes.thin}px solid ${e.gray300}`,overflow:"hidden"}})]}),a.map((t,l)=>(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:i.spacing.sm2},children:[(0,D.jsxs)("div",{style:{flex:1,textAlign:"left"},children:[(0,D.jsx)("p",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.bold,color:e.darkText,margin:0},children:t.left.num}),(0,D.jsx)("p",{style:{fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.medium,color:e.gray500,margin:0},children:t.left.detail})]}),(0,D.jsx)("div",{style:{flex:1,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",height:36},children:(0,D.jsx)("p",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:e.darkText,margin:0},children:t.label})}),(0,D.jsxs)("div",{style:{flex:1,textAlign:"right"},children:[(0,D.jsx)("p",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.bold,color:e.darkText,margin:0},children:t.right.num}),(0,D.jsx)("p",{style:{fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.medium,color:e.gray500,margin:0},children:t.right.detail})]})]}),l<a.length-1&&(0,D.jsx)(PDivider,{color:e.dividerDark,style:{marginBottom:i.spacing.sm2}})]},t.label)),(0,D.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:i.spacing.sm2},children:(0,D.jsx)(U,{variant:"muted",size:"sm",fullWidth:!1,trailingIcon:(0,D.jsx)(De,{size:14}),style:{borderRadius:i.radii.sheet,padding:"8px 28px"},children:"See All"})})]})}function Tm(){let e=B(),[a,t]=(0,Bm.useState)(0),l=["Player","MIN","PTS","REB","AST"],r=[["#5","32","18","7","3"],["#3","28","14","4","5"],["#22","35","22","9","2"],["#13","26","8","3","1"],["#11","30","16","5","7"],["#23","18","4","2","1"],["#8","24","10","3","2"],["#7","15","6","2","3"]];return(0,D.jsxs)("div",{style:{padding:"16px 20px",fontFamily:C},children:[(0,D.jsx)("div",{style:{display:"flex",marginBottom:i.spacing.md2},children:["Maccabi Kiryat Gat","Ironi Nahariya"].map((n,s)=>(0,D.jsx)("button",{onClick:()=>t(s),"aria-label":`Show ${n} stats`,"aria-pressed":a===s,onFocus:d=>{d.currentTarget.style.outline=`2px solid ${e.primary}`},onBlur:d=>{d.currentTarget.style.outline="none"},style:{flex:1,background:"none",border:"none",borderBottom:a===s?`2px solid ${e.jerseyRed}`:`2px solid ${e.barTrack}`,padding:`0 0 ${i.spacing.sm}px`,fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:a===s?e.darkText:e.gray400,cursor:"pointer",fontFamily:C,borderRadius:i.radii.sm,outline:"none",outlineOffset:2},children:n},n))}),(0,D.jsx)("div",{style:{display:"flex",alignItems:"center",marginBottom:i.spacing.sm2},children:l.map((n,s)=>(0,D.jsx)("span",{style:{fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.medium,color:e.gray400,width:s===0?80:void 0,flex:s===0?void 0:1,textAlign:s===0?"left":"center"},children:n},n))}),(0,D.jsx)(PDivider,{color:e.barTrack,style:{marginBottom:i.spacing.sm}}),r.map((n,s)=>(0,D.jsxs)("div",{children:[(0,D.jsx)("div",{style:{display:"flex",alignItems:"center",padding:"8px 0"},children:n.map((d,c)=>(0,D.jsx)("span",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:e.darkText,width:c===0?80:void 0,flex:c===0?void 0:1,textAlign:c===0?"left":"center"},children:d},c))}),(0,D.jsx)(PDivider,{color:e.jerseyRed,style:{opacity:.15}})]},s))]})}function Il({label:e,value:a,labelLines:t}){let l=B();return(0,D.jsxs)("div",{style:{flex:1,background:l.cardBg,padding:i.spacing.md,borderRadius:i.radii.badge,display:"flex",flexDirection:"column",gap:2,overflow:"hidden"},children:[t?(0,D.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.xxs,fontWeight:i.typography.weights.medium,color:l.gray500,lineHeight:"16px"},children:t.map((r,n)=>(0,D.jsx)("div",{children:r},n))}):(0,D.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.xxs,fontWeight:i.typography.weights.medium,color:l.gray500,lineHeight:"16px"},children:e}),(0,D.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.xxl,fontWeight:i.typography.weights.bold,color:l.darkText,lineHeight:"normal",marginTop:"auto"},children:a})]})}function Dm(){return(0,D.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:i.spacing.md},children:[(0,D.jsx)(Il,{label:"Minutes Played",labelLines:["Minutes","Played"],value:"1245"}),(0,D.jsx)(Il,{label:"Games Played",labelLines:["Games","Played"],value:"64"}),(0,D.jsx)(Il,{label:"Tournaments Played",labelLines:["Tournaments","Played"],value:"18"})]})}function Pm(){return(0,D.jsxs)("div",{style:{display:"flex",gap:i.spacing.md},children:[(0,D.jsx)(Il,{label:"MPG",value:"23.4"}),(0,D.jsx)(Il,{label:"PPG",value:"18.6"}),(0,D.jsx)(Il,{label:"APG",value:"4.5"}),(0,D.jsx)(Il,{label:"RPG",value:"3.2"})]})}var Fm=F(Ie());var j=F(Y());function ka({color:e,thickness:a=1,spacing:t=0,vertical:l=!1,style:r={}}){let n=B(),s=e||n.gray200;return l?(0,j.jsx)("div",{style:{width:a,alignSelf:"stretch",background:s,marginLeft:t,marginRight:t,flexShrink:0,...r}}):(0,j.jsx)("div",{style:{height:a,width:"100%",background:s,marginTop:t,marginBottom:t,flexShrink:0,...r}})}function bn({label:e="Back",showShare:a=!1,onBack:t,onShare:l,padding:r="12px 16px"}){let n=B();return(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:r},children:[(0,j.jsxs)("button",{onClick:t,"aria-label":"Go back",style:{display:"flex",alignItems:"center",gap:i.spacing.xs2,background:"none",border:"none",cursor:"pointer",padding:0},children:[(0,j.jsx)(qt,{size:16,color:n.gray500}),(0,j.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.sm,fontWeight:i.typography.weights.medium,color:n.gray500},children:e})]}),a&&(0,j.jsx)("button",{onClick:l,"aria-label":"Share",style:{background:"none",border:"none",cursor:"pointer",padding:0,display:"flex"},children:(0,j.jsx)(xl,{size:20,color:n.darkText})})]})}function wo({title:e,seeAll:a,onClick:t,titleSize:l}){let r=B(),n=l??i.typography.sizes.base;return(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingRight:0,marginBottom:i.spacing.md},children:[(0,j.jsx)("h3",{style:{margin:0,fontSize:n,fontWeight:i.typography.weights.bold,color:r.black},children:e}),a&&(0,j.jsx)(U,{variant:"link",size:"sm",fullWidth:!1,style:{fontSize:i.typography.sizes.body2},onClick:t,children:"See all >"})]})}function Pi({label:e="See all",onClick:a}){let t=B();return(0,j.jsxs)("button",{onClick:a,"aria-label":e,style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:i.spacing.xs,fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.medium,color:t.linkBlue},children:[e,(0,j.jsx)("svg",{"aria-hidden":"true",width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",children:(0,j.jsx)("path",{d:"M2 1.5L5 4L2 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})}function Mm({title:e,description:a}){let t=B();return(0,j.jsxs)("div",{style:{background:t.infoBgPurple,borderRadius:i.radii.badge,padding:i.spacing.lg,border:"1px solid rgba(139,92,246,0.15)"},children:[(0,j.jsx)("div",{style:{fontSize:i.typography.sizes.body2,fontWeight:i.typography.weights.bold,color:t.claimedPurple,marginBottom:i.spacing.xs2},children:e}),(0,j.jsx)("div",{style:{fontSize:i.typography.sizes.caption,color:t.gray500},children:a})]})}function Em(){let e=B();return(0,j.jsxs)("div",{style:{background:e.infoBgPurple,borderRadius:i.radii.badge,padding:i.spacing.md,display:"flex",alignItems:"center",gap:i.spacing.md,border:`${i.strokes.thin}px solid ${e.premiumAmber}`},children:[(0,j.jsx)("div",{style:{width:32,height:32,borderRadius:"50%",background:e.premiumDark,border:`${i.strokes.thin}px solid ${e.premiumYellow}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,j.jsx)(LockSvg,{size:12,fill:e.premiumYellow})}),(0,j.jsx)("p",{style:{fontSize:i.typography.sizes.body2,fontWeight:i.typography.weights.regular,color:e.black,margin:0,flex:1,lineHeight:1.5,fontFamily:C},children:"Upgrade to access personal highlights for all players in this game"}),(0,j.jsx)(U,{variant:"premium",size:"sm",fullWidth:!1,style:{padding:"4px 12px",fontSize:i.typography.sizes.base,borderRadius:i.radii.pill,flexShrink:0},children:"Upgrade"})]})}function Rm(){let e=B();return(0,j.jsx)("div",{style:{width:20,height:20,borderRadius:"50%",background:e.premiumDark,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"none"},children:(0,j.jsx)(LockSvg,{size:8,fill:e.premiumYellow})})}function _m(){let e=B(),[a,t]=(0,Fm.useState)("full"),l={border:"none",borderRadius:i.radii.chip,padding:`${i.spacing.sm}px ${i.spacing.md}px`,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.regular,cursor:"pointer",height:i.sizes.chipHeight,display:"flex",alignItems:"center",gap:i.spacing.sm,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",fontFamily:C};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("style",{children:".chipScrollHide::-webkit-scrollbar{display:none}"}),(0,j.jsxs)("div",{className:"chipScrollHide",style:{display:"flex",gap:i.spacing.md,marginBottom:i.spacing.lg,overflowX:"auto",paddingRight:i.spacing.lg,WebkitOverflowScrolling:"touch",scrollbarWidth:"none",flexWrap:"nowrap"},children:[(0,j.jsx)("button",{onClick:()=>t("full"),"aria-label":"Full Game","aria-pressed":a==="full",style:{...l,background:a==="full"?e.jerseyRed:e.gray100,color:a==="full"?e.white:e.black,fontWeight:a==="full"?600:400},children:"Full Game"}),(0,j.jsxs)("button",{onClick:()=>t("condensed"),"aria-label":"Condensed Game","aria-pressed":a==="condensed",style:{...l,background:a==="condensed"?e.jerseyRed:e.gray100,color:a==="condensed"?e.white:e.black,fontWeight:a==="condensed"?600:400},children:[(0,j.jsx)(Rm,{})," Condensed Game"]}),(0,j.jsxs)("button",{onClick:()=>t("highlights"),"aria-label":"Game Highlights","aria-pressed":a==="highlights",style:{...l,background:a==="highlights"?e.jerseyRed:e.gray100,color:a==="highlights"?e.white:e.black,fontWeight:a==="highlights"?600:400},children:[(0,j.jsx)(Rm,{})," Game Highlights"]})]})]})}var fu=F(Ie());var Hm=F(Ie());var Ia=F(Y());function zo({avatar:e,title:a,subtitle:t,action:l,borderBottom:r=!0}){let n=B();return(0,Ia.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.md,padding:`${i.spacing.md}px 0`,borderBottom:r?`1px solid ${n.gray100}`:"none"},children:[e,(0,Ia.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,Ia.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.sm,fontWeight:i.typography.weights.semibold,color:n.darkText,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a}),t&&(0,Ia.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.caption,color:n.gray400,marginTop:i.spacing.xxs},children:t})]}),l]})}function Ri({items:e,allowMultiple:a=!1,defaultOpen:t=null,headerStyle:l={},activeHeaderStyle:r={},contentStyle:n={},chevronSize:s=18,borderless:d=!1}){let c=B(),[p,x]=(0,Hm.useState)(t?new Set([t]):new Set),m=f=>{x(h=>{let k=new Set(a?h:[]);return h.has(f)?k.delete(f):k.add(f),k})};return(0,Ia.jsx)("div",{children:e.map(f=>{let h=p.has(f.id);return(0,Ia.jsxs)("div",{style:{borderBottom:d?"none":`1px solid ${c.gray100}`},children:[(0,Ia.jsxs)("button",{onClick:()=>m(f.id),"aria-expanded":h,"aria-label":typeof f.header=="string"?f.header:"Toggle section",style:{display:"flex",alignItems:"center",width:"100%",padding:`${i.spacing.md2}px 0`,background:"none",border:"none",cursor:"pointer",gap:i.spacing.md,...l,...h?r:{}},children:[(0,Ia.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",gap:i.spacing.md,textAlign:"left"},children:f.header}),(0,Ia.jsx)(De,{size:s,color:c.gray400,"aria-hidden":"true",style:{transform:h?"rotate(0deg)":"rotate(-90deg)",transition:"transform 0.2s",flexShrink:0}})]}),h&&(0,Ia.jsx)("div",{role:"region",style:{paddingBottom:i.spacing.lg,...n},children:f.content})]},f.id)})})}var I=F(Y());function Iv({icon:e,active:a,color:t}){let r=a?2:1.5;return e==="games"?(0,I.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:a?t:"none",stroke:t,strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,I.jsx)("path",{d:"M6 9H4.5a2.5 2.5 0 010-5C7 4 7 7 7 7"}),(0,I.jsx)("path",{d:"M18 9h1.5a2.5 2.5 0 000-5C17 4 17 7 17 7"}),(0,I.jsx)("path",{d:"M18 2H6v7a6 6 0 0012 0V2z"}),(0,I.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"19"}),(0,I.jsx)("line",{x1:"9",y1:"19",x2:"15",y2:"19"})]}):e==="saved"?(0,I.jsx)(Ha,{size:24,color:t,fill:a?t:"none",strokeWidth:r}):e==="following"?(0,I.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:a?t:"none",stroke:t,strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:(0,I.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}):e==="shop"?(0,I.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,I.jsx)("rect",{x:"3",y:"8",width:"18",height:"13",rx:"2",fill:a?t:"none"}),(0,I.jsx)("path",{d:"M16 8V6a4 4 0 00-8 0v2"}),(0,I.jsx)("path",{d:"M9 14c1.5 1.5 4.5 1.5 6 0",stroke:a?"#fff":t})]}):null}function Um({tabs:e,active:a,onSelect:t,accentColor:l}){let r=B(),n=l||r.darkText,d=e||[{id:"games",label:"Games",icon:"games"},{id:"saved",label:"Saved",icon:"saved"},{id:"following",label:"Following",icon:"following"},{id:"shop",label:"Shop",icon:"shop"}],[c,p]=(0,fu.useState)(a||d[0]?.id||""),x=a!==void 0?a:c,m=f=>{p(f),t?.(f)};return(0,I.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",background:r.white,borderTop:`1px solid ${r.gray100}`,padding:"8px 0 12px",width:"100%"},children:d.map(f=>{let h=x===f.id;return(0,I.jsxs)("button",{onClick:()=>m(f.id),"aria-label":f.label,"aria-pressed":h,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:3,background:"none",border:"none",cursor:"pointer",padding:"4px 16px",minWidth:64},children:[(0,I.jsx)(Iv,{icon:f.icon,active:h,color:h?n:r.gray400}),(0,I.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.xxs,fontWeight:h?i.typography.weights.bold:i.typography.weights.regular,color:h?n:r.gray400},children:f.label})]},f.id)})})}function pu({variant:e="home",orgName:a="PBA",logoUrl:t,pageTitle:l="All Games",showSearch:r=!0,showNotifications:n=!0,showMenu:s=!0,showShare:d=!1,notifCount:c=0,onBack:p,onSearch:x,onNotifications:m,onMenu:f,onShare:h}){let k=B(),z=k.gray500,T=(0,I.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:`${i.spacing.md}px ${i.spacing.lg}px`,background:k.white},children:[(0,I.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.sm2},children:[t?(0,I.jsx)("img",{src:t,alt:a,style:{width:36,height:36,borderRadius:i.radii.thumb,objectFit:"cover"}}):(0,I.jsx)("div",{style:{width:36,height:36,borderRadius:i.radii.thumb,background:k.gray100,display:"flex",alignItems:"center",justifyContent:"center",border:`1px dashed ${k.gray300}`},children:(0,I.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:k.gray400,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,I.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,I.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),(0,I.jsx)("path",{d:"m21 15-5-5L5 21"})]})}),(0,I.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:k.darkText},children:a})]}),(0,I.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:18},children:[r&&(0,I.jsx)("button",{onClick:x,"aria-label":"Search",style:{background:"none",border:"none",cursor:"pointer",padding:0},children:(0,I.jsx)(Ua,{size:24,color:z})}),n&&(0,I.jsx)("button",{onClick:m,"aria-label":"Notifications",style:{background:"none",border:"none",cursor:"pointer",padding:0},children:(0,I.jsx)(PBellIcon,{count:c})}),s&&(0,I.jsx)("button",{onClick:f,"aria-label":"Menu",style:{background:"none",border:"none",cursor:"pointer",padding:0},children:(0,I.jsx)(Wt,{size:24,color:z})})]})]}),y=e==="back"?(0,I.jsx)(PBackBar,{showShare:d,onBack:p,onShare:h,padding:"6px 16px 10px"}):null;return(0,I.jsxs)("div",{style:{background:k.white,borderBottom:`1px solid ${k.gray100}`},children:[T,y]})}function gu({variant:e="org",orgName:a="PBA",orgSubtitle:t="Basketball Association",logoUrl:l,items:r,userName:n="Brenden Rogers",userInitials:s="BR"}){let d=B(),[c,p]=(0,fu.useState)(!1),x=[{label:"Divisions",subItems:["Varsity","Junior Varsity","Regional","Women's Varsity","Women's JV"]},{label:"Tournaments"},{label:"Saved Videos"},{label:"My Highlights"},{label:"My Account"},{label:"Manage Following"},{label:"Language"}],m=[{label:"Premier League",subItems:["Division 1","Division 2"]},{label:"Championship",subItems:["East","West"]},{label:"League One",subItems:["Group A","Group B"]},{label:"League Two",subItems:["North","South"]}],f=[{label:"Language"},{label:"My Account"},{label:"Saved Videos"},{label:"My Highlights"}],h=r||(e==="profile"?m:x),k=f,z=h.findIndex(T=>!T.subItems||T.subItems.length===0);return(0,I.jsxs)("div",{style:{display:"flex",width:"100%",height:520,position:"relative",borderRadius:i.radii.card,overflow:"hidden"},children:[(0,I.jsx)("div",{style:{position:"absolute",inset:0,background:d.overlay}}),(0,I.jsxs)("nav",{role:"navigation","aria-label":"Side menu",style:{position:"absolute",right:0,top:0,bottom:0,width:300,background:d.white,padding:"20px 20px 24px",display:"flex",flexDirection:"column",overflowY:"auto"},children:[e==="profile"?(0,I.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.sm2,marginBottom:i.spacing.lg},children:[(0,I.jsx)(na,{initials:s,size:36}),(0,I.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:d.black,flex:1},children:n}),(0,I.jsx)("button",{"aria-label":"Close",style:{background:"none",border:"none",cursor:"pointer",color:d.black,display:"flex",borderRadius:i.radii.sm},children:(0,I.jsx)(Ca,{size:20})})]}):(0,I.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.sm2,marginBottom:i.spacing.xl},children:[l&&!c?(0,I.jsx)("img",{src:l,alt:a,onError:()=>p(!0),style:{width:40,height:40,borderRadius:i.radii.logo,objectFit:"contain"}}):(0,I.jsx)("div",{style:{width:40,height:40,borderRadius:i.radii.logo,background:d.gray100,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,I.jsxs)("svg",{"aria-hidden":"true",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:d.gray400,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,I.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4"}),(0,I.jsx)("rect",{x:"7",y:"7",width:"4",height:"4",rx:"1"}),(0,I.jsx)("rect",{x:"13",y:"7",width:"4",height:"4",rx:"1"}),(0,I.jsx)("rect",{x:"7",y:"13",width:"4",height:"4",rx:"1"}),(0,I.jsx)("rect",{x:"13",y:"13",width:"4",height:"4",rx:"1"})]})}),(0,I.jsxs)("div",{style:{flex:1},children:[(0,I.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:d.darkText},children:a}),(0,I.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.caption,color:d.gray400},children:t})]}),(0,I.jsx)("button",{"aria-label":"Close",style:{width:32,height:32,borderRadius:"50%",background:d.gray100,border:"none",cursor:"pointer",color:d.gray400,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,I.jsx)(Ca,{size:18})})]}),(0,I.jsxs)("div",{style:{flex:1},children:[h.map((T,y)=>T.subItems&&T.subItems.length>0?(0,I.jsx)(Ri,{chevronSize:16,borderless:!0,activeHeaderStyle:{background:d.gray50,borderRadius:i.radii.logo,margin:"0 -8px",padding:"14px 8px"},items:[{id:`menu-${y}`,header:(0,I.jsx)("span",{style:{flex:1,fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.regular,color:d.darkText},children:T.label}),content:(0,I.jsx)("div",{style:{paddingLeft:i.spacing.lg},children:T.subItems.map((v,u)=>(0,I.jsx)("button",{"aria-label":v,style:{display:"block",width:"100%",padding:`${i.spacing.sm2}px 0`,background:"none",border:"none",cursor:"pointer",fontFamily:C,fontSize:i.typography.sizes.sm,color:d.darkText,textAlign:"left"},children:v},u))})}]},y):null),e==="profile"&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:d.darkText,marginTop:i.spacing.md,marginBottom:i.spacing.sm2},children:"Following"}),(0,I.jsxs)("div",{style:{background:d.gray50,borderRadius:i.radii.card,padding:`${i.spacing.md}px ${i.spacing.md}px`,marginBottom:i.spacing.md},children:[(0,I.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.semibold,color:d.gray400,marginBottom:i.spacing.sm2},children:"Teams"}),(0,I.jsxs)("div",{style:{display:"flex",gap:i.spacing.sm2,marginBottom:i.spacing.md},children:[(0,I.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[(0,I.jsx)(ve,{size:40,name:"S.D Spartans Men"}),(0,I.jsx)("span",{style:{fontFamily:C,fontSize:9,color:d.darkText,textAlign:"center",maxWidth:52,lineHeight:1.2},children:"S.D Spartans Men"})]}),(0,I.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[(0,I.jsx)(ve,{size:40,name:"S.D Spartans Women"}),(0,I.jsx)("span",{style:{fontFamily:C,fontSize:9,color:d.darkText,textAlign:"center",maxWidth:52,lineHeight:1.2},children:"S.D Spartans Women"})]}),(0,I.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[(0,I.jsx)("div",{style:{width:40,height:40,borderRadius:"50%",border:`1.5px dashed ${d.gray300}`,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,I.jsx)("span",{style:{fontSize:18,color:d.gray400,lineHeight:1},children:"+"})}),(0,I.jsx)("span",{style:{fontFamily:C,fontSize:9,color:d.gray400},children:"Add..."})]})]}),(0,I.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.semibold,color:d.gray400,marginBottom:i.spacing.sm2},children:"Players"}),(0,I.jsxs)("div",{style:{display:"flex",gap:i.spacing.sm2},children:[(0,I.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[(0,I.jsx)(me,{number:4,teamColor:ba.jerseyRed}),(0,I.jsx)("span",{style:{fontFamily:C,fontSize:9,color:d.darkText,textAlign:"center",maxWidth:52,lineHeight:1.2},children:"S.D Spartans Man #4"})]}),(0,I.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[(0,I.jsx)(me,{number:11,teamColor:ba.jerseyRed}),(0,I.jsx)("span",{style:{fontFamily:C,fontSize:9,color:d.darkText,textAlign:"center",maxWidth:52,lineHeight:1.2},children:"S.D Spartans Man #11"})]}),(0,I.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[(0,I.jsx)("div",{style:{width:40,height:40,borderRadius:"50%",border:`1.5px dashed ${d.gray300}`,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,I.jsx)("span",{style:{fontSize:18,color:d.gray400,lineHeight:1},children:"+"})}),(0,I.jsx)("span",{style:{fontFamily:C,fontSize:9,color:d.gray400},children:"Add..."})]})]})]})]}),(e==="profile"?k:h.filter(T=>!T.subItems||T.subItems.length===0)).map((T,y)=>{let g=T.label==="Language";return(0,I.jsxs)("div",{children:[y===0&&e!=="profile"&&z>0&&(0,I.jsx)(ka,{spacing:8}),(0,I.jsxs)("button",{"aria-label":T.label,style:{display:"flex",alignItems:"center",width:"100%",padding:`${i.spacing.md2}px 0`,background:"none",border:"none",cursor:"pointer",gap:i.spacing.md},children:[(0,I.jsx)("span",{style:{flex:1,fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.regular,color:d.darkText,textAlign:"left"},children:T.label}),g&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.xs,color:d.gray400,marginRight:i.spacing.xs},children:"English"}),(0,I.jsx)(De,{size:16,color:d.gray400,style:{transform:"rotate(-90deg)"}})]})]})]},`plain-${y}`)})]}),(0,I.jsx)(ka,{spacing:8}),(0,I.jsx)("button",{style:{display:"flex",alignItems:"center",gap:i.spacing.md,background:"none",border:"none",fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.regular,color:d.errorRed,cursor:"pointer",textAlign:"left",padding:`${i.spacing.lg}px 0`},children:"Log Out"})]})]})}var J=F(Y());function Om(){let e=B(),a=e.gray50;return(0,J.jsxs)("div",{style:{maxWidth:430,display:"flex",flexDirection:"column",gap:i.spacing.md2,fontFamily:C},children:[(0,J.jsxs)("div",{style:{background:a,borderRadius:i.radii.card,padding:"20px 24px"},children:[(0,J.jsx)("p",{style:{fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.medium,color:e.darkText,margin:"0 0 12px"},children:"Redeem your Access Code here:"}),(0,J.jsxs)("div",{style:{position:"relative"},children:[(0,J.jsx)("input",{type:"text",style:{width:"100%",height:50,background:e.white,border:`1px solid ${e.gray300}`,borderRadius:i.radii.badge,padding:"0 120px 0 16px",fontSize:i.typography.sizes.xs,fontFamily:C,outline:"none",boxSizing:"border-box"}}),(0,J.jsx)(U,{variant:"primary",size:"sm",fullWidth:!1,style:{position:"absolute",right:8,top:"50%",transform:"translateY(-50%)",padding:"8px 24px"},children:"Submit"})]})]}),(0,J.jsx)("p",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:e.gray500,margin:0},children:"or select your plan"}),(0,J.jsxs)("div",{style:{background:a,borderRadius:i.radii.card,padding:"24px"},children:[(0,J.jsx)("p",{style:{fontSize:i.typography.sizes.h3,fontWeight:i.typography.weights.bold,color:e.darkText,margin:"0 0 6px"},children:"Basic Package"}),(0,J.jsx)("p",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.regular,color:e.gray500,margin:"0 0 16px",lineHeight:1.5},children:"Download a single highlight of your favourite moment from the season!"}),(0,J.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,J.jsx)("span",{style:{fontSize:i.typography.sizes.display,fontWeight:i.typography.weights.bold,color:e.darkText},children:"$5.00"}),(0,J.jsx)(U,{variant:"primary",size:"lg",fullWidth:!1,children:"Buy Now"})]})]}),(0,J.jsxs)("div",{style:{background:a,borderRadius:i.radii.card,padding:"24px",border:`2px solid ${e.premiumYellow}`},children:[(0,J.jsx)("div",{style:{display:"inline-flex",alignItems:"center",gap:i.spacing.xs,background:e.grayOverlay,borderRadius:i.radii.lg,padding:"6px 14px",marginBottom:i.spacing.sm2},children:(0,J.jsx)("span",{style:{fontSize:i.typography.sizes.body2,fontWeight:i.typography.weights.bold,color:e.darkText},children:"\u{1F525} Most Popular"})}),(0,J.jsx)("p",{style:{fontSize:i.typography.sizes.h3,fontWeight:i.typography.weights.bold,color:e.darkText,margin:"0 0 6px"},children:"Premium Package"}),(0,J.jsx)("p",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.regular,color:e.gray500,margin:"0 0 14px",lineHeight:1.5},children:"Allows access to all Camera's. You can switch cameras to watch any platform"}),(0,J.jsxs)("div",{style:{background:e.gray100,borderRadius:i.radii.badge,padding:`${i.spacing.md2}px ${i.spacing.lg}px`,marginBottom:i.spacing.md2},children:[(0,J.jsx)("p",{style:{fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.medium,color:e.gray400,margin:"0 0 8px"},children:"You will get access to:"}),(0,J.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.xs2},children:[(0,J.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.sm},children:[(0,J.jsx)(Sa,{size:16,color:e.successGreen}),(0,J.jsx)("span",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:e.darkText},children:"Afrikaanse Ho\xEBr Seunskool U14"})]}),(0,J.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.sm},children:[(0,J.jsx)(Sa,{size:16,color:e.successGreen}),(0,J.jsx)("span",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:e.darkText},children:"Bosh PUP U14"})]})]})]}),(0,J.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,J.jsx)("span",{style:{fontSize:i.typography.sizes.display,fontWeight:i.typography.weights.bold,color:e.darkText},children:"$35.00"}),(0,J.jsx)(U,{variant:"premium",size:"lg",fullWidth:!1,children:"Buy Now"})]})]})]})}var qm=F(Ie());var Xt=F(Y());function Gm({number:e,selected:a,onClick:t,color:l=ba.jerseyRed}){let r=B(),[n,s]=(0,qm.useState)(!1);return(0,Xt.jsxs)("button",{onClick:t,"aria-label":"Jersey number "+e,"aria-pressed":a,onFocus:()=>s(!0),onBlur:()=>s(!1),style:{position:"relative",width:73,height:73,background:"none",border:"none",cursor:"pointer",padding:0,transition:"transform 0.15s",transform:a?"scale(1.1)":"scale(1)",borderRadius:i.radii.md,...n?Oa(r):{}},children:[(0,Xt.jsx)("svg",{viewBox:"0 0 73 73",fill:"none",style:{width:"100%",height:"100%"},children:(0,Xt.jsx)("path",{d:Lo,fill:l,stroke:a?r.successGreen:Sl(l)?r.gray300:r.jerseyStroke,strokeWidth:a?i.strokes.heavy:i.strokes.thick})}),a&&(0,Xt.jsx)("div",{style:{position:"absolute",top:-4,right:-4,width:20,height:20,background:r.successGreen,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,Xt.jsx)(Sa,{size:12,color:r.jerseyStroke,strokeWidth:3})}),(0,Xt.jsx)("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-40%)",fontFamily:C,fontSize:i.typography.sizes.jersey,fontWeight:i.typography.weights.bold,color:Sl(l)?r.darkText:r.jerseyStroke,pointerEvents:"none"},children:e})]})}var wv=F(Ie());var mu=F(Y());var _e=F(Y());function Wm({onRetry:e}){let a=B(),t=a.errorBg,l=a.errorBorder;return(0,_e.jsxs)("div",{role:"alert",style:{display:"flex",alignItems:"center",gap:i.spacing.md,background:t,borderRadius:i.radii.badge,padding:`${i.spacing.md}px ${i.spacing.lg}px`,border:`1px solid ${l}`},children:[(0,_e.jsx)("div",{"aria-hidden":"true",style:{width:8,height:8,borderRadius:"50%",background:a.errorRed,flexShrink:0}}),(0,_e.jsxs)("div",{style:{flex:1},children:[(0,_e.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.semibold,color:a.darkText},children:"You're offline"}),(0,_e.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.regular,color:a.gray500},children:"Check your connection and try again"})]}),(0,_e.jsx)("button",{onClick:e,"aria-label":"Retry connection",style:{background:"none",border:"none",fontFamily:C,fontSize:i.typography.sizes.body2,fontWeight:i.typography.weights.semibold,color:a.errorRed,cursor:"pointer",flexShrink:0,borderRadius:i.radii.sm},children:"Retry"})]})}function ct({width:e,height:a,borderRadius:t,style:l}){let r=B();return(0,_e.jsx)("div",{style:{width:e||"100%",height:a||16,borderRadius:t||i.radii.sm,background:`linear-gradient(90deg, ${r.gray100} 25%, ${r.gray50} 50%, ${r.gray100} 75%)`,backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite ease-in-out",...l}})}function yu(){let e=B();return(0,_e.jsxs)("div",{style:{background:e.white,border:`1px solid ${e.gray100}`,borderRadius:i.radii.md,overflow:"hidden"},children:[(0,_e.jsx)("div",{style:{width:"100%",height:180,background:`linear-gradient(90deg, ${e.gray100} 25%, ${e.gray50} 50%, ${e.gray100} 75%)`,backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite ease-in-out"}}),(0,_e.jsxs)("div",{style:{padding:i.spacing.md,display:"flex",flexDirection:"column",gap:i.spacing.sm},children:[(0,_e.jsx)(ct,{height:20,style:{width:"80%"}}),(0,_e.jsx)(ct,{height:16,style:{width:"100%"}}),(0,_e.jsx)(ct,{height:16,style:{width:"90%"}})]})]})}function Nm(){return(0,_e.jsx)(ct,{height:i.sizes.inputHeight,borderRadius:i.radii.sm})}function Sn({size:e}={}){let a=B(),t=e||24;return(0,_e.jsx)("div",{style:{width:t,height:t,border:`3px solid ${a.gray100}`,borderTop:`3px solid ${a.primary}`,borderRadius:"50%",animation:"spin 1s linear infinite"}})}var S=F(Y());function Q({children:e,variant:a="dark"}){let t=B(),l=a==="muted"?t.gray500:a==="subtle"?t.gray400:t.darkText;return(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.body2,color:l,lineHeight:1.8,fontFamily:"monospace"},children:e})}function Cn({children:e,variant:a="muted"}){let t=B(),l=a==="subtle"?t.gray400:t.gray500;return(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.body2,color:l,lineHeight:1.6},children:e})}function Vm(){let e=B();return(0,S.jsxs)("div",{style:{fontFamily:C,display:"flex",flexDirection:"column",gap:i.spacing.sm},children:[(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.xxl,fontWeight:i.typography.weights.bold,color:e.darkText},children:"Page Title \u2014 24px Bold"}),(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.xl,fontWeight:i.typography.weights.bold,color:e.darkText},children:"Section Heading \u2014 22px Bold"}),(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.medium,color:e.darkText},children:"Subtitle \u2014 20px Medium"}),(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.medium,color:e.darkText},children:"Input / Body / Menu Item \u2014 16px Medium"}),(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.sm,fontWeight:i.typography.weights.medium,color:e.gray400},children:"Button / Tab \u2014 15px Medium"}),(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.semibold,color:e.white,background:e.heroBg,padding:"4px 10px",borderRadius:i.radii.thumb,display:"inline-block"},children:"Video Label \u2014 14px Semibold White"}),(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:e.gray400},children:"Link / Caption \u2014 14px Medium"}),(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.body2,fontWeight:i.typography.weights.regular,color:e.darkText},children:"Notification Text \u2014 13px Regular"}),(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,fontWeight:i.typography.weights.bold,textTransform:"uppercase",background:e.highlightsBadgeBg,color:e.highlightsBadgeText,padding:"4px 12px",borderRadius:i.radii.badge,display:"inline-block"},children:"Badge Label \u2014 11px Bold Uppercase"}),(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.jersey,fontWeight:i.typography.weights.bold,color:e.white,background:e.jerseyRed,width:40,height:40,borderRadius:i.radii.thumb,display:"flex",alignItems:"center",justifyContent:"center"},children:"7"}),(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:e.gray400},children:"Jersey Number \u2014 29px Bold White"})]})}function jm(){let e=B();return(0,S.jsx)("div",{style:{display:"flex",gap:i.spacing.md,flexWrap:"wrap",alignItems:"flex-end"},children:Object.entries(i.spacing).map(([a,t])=>(0,S.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,S.jsx)("div",{style:{width:t,height:t,background:e.primary,borderRadius:2,minWidth:4,minHeight:4}}),(0,S.jsx)("span",{style:{fontSize:i.typography.sizes.mini,fontWeight:i.typography.weights.semibold,color:e.darkText},children:a}),(0,S.jsxs)("span",{style:{fontSize:i.typography.sizes.mini,color:e.gray400,fontFamily:"monospace"},children:[t,"px"]})]},a))})}function Xm(){let e=B();return(0,S.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:i.spacing.xs2},children:Object.entries(i.sizes).map(([a,t])=>(0,S.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"6px 10px",background:e.gray50,borderRadius:i.radii.xs},children:[(0,S.jsx)("span",{style:{fontSize:i.typography.sizes.caption,fontWeight:i.typography.weights.semibold,color:e.darkText},children:a}),(0,S.jsxs)("span",{style:{fontSize:i.typography.sizes.caption,color:e.gray400,fontFamily:"monospace"},children:[t,"px"]})]},a))})}function Ym(){let e=B();return(0,S.jsx)("div",{style:{display:"flex",gap:i.spacing.lg,flexWrap:"wrap",alignItems:"flex-end"},children:Object.entries(i.radii).map(([a,t])=>{let l=a==="pill";return(0,S.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,S.jsx)("div",{style:{width:l?80:48,height:l?32:48,background:e.primary,borderRadius:l?t:Math.min(t,24),opacity:.15}}),(0,S.jsx)("span",{style:{fontSize:i.typography.sizes.mini,fontWeight:i.typography.weights.semibold,color:e.darkText},children:a}),(0,S.jsxs)("span",{style:{fontSize:i.typography.sizes.mini,color:e.gray400,fontFamily:"monospace"},children:[t,"px"]})]},a)})})}function Zm(){let e=B(),a={border:"none",borderRadius:i.radii.chip,padding:`${i.spacing.sm}px ${i.spacing.md}px`,fontSize:i.typography.sizes.base,height:40,display:"flex",alignItems:"center",gap:i.spacing.sm,fontFamily:C,whiteSpace:"nowrap",flexShrink:0,cursor:"default"},t=[{label:"active (selected)",states:[{s:"default",style:{...a,fontWeight:i.typography.weights.semibold,background:e.jerseyRed,color:e.white}},{s:"hover",style:{...a,fontWeight:i.typography.weights.semibold,background:e.jerseyRed,color:e.white}},{s:"pressed",style:{...a,fontWeight:i.typography.weights.semibold,background:e.jerseyRed,color:e.white}},{s:"disabled",style:{...a,fontWeight:i.typography.weights.semibold,background:e.grayOverlay,color:e.gray400}}],chip:"Full Game",lock:!1},{label:"inactive (free content)",states:[{s:"default",style:{...a,fontWeight:i.typography.weights.regular,background:e.gray100,color:e.black}},{s:"hover",style:{...a,fontWeight:i.typography.weights.regular,background:e.gray200,color:e.black}},{s:"pressed",style:{...a,fontWeight:i.typography.weights.regular,background:e.gray300,color:e.black}},{s:"disabled",style:{...a,fontWeight:i.typography.weights.regular,background:e.grayOverlay,color:e.gray400}}],chip:"Full Game",lock:!1},{label:"inactive + lock (premium)",states:[{s:"default",style:{...a,fontWeight:i.typography.weights.regular,background:e.gray100,color:e.black}},{s:"hover",style:{...a,fontWeight:i.typography.weights.regular,background:e.gray200,color:e.black}},{s:"pressed",style:{...a,fontWeight:i.typography.weights.regular,background:e.gray300,color:e.black}},{s:"disabled",style:{...a,fontWeight:i.typography.weights.regular,background:e.grayOverlay,color:e.gray400}}],chip:"Condensed",lock:!0}];return(0,S.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.lg2},children:t.map(l=>(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:e.gray400,marginBottom:i.spacing.sm},children:l.label}),(0,S.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:i.spacing.sm},children:l.states.map(({s:r,style:n})=>(0,S.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs2},children:[(0,S.jsxs)("button",{style:n,children:[l.lock&&(0,S.jsx)(ut,{})," ",l.chip]}),(0,S.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:e.gray400},children:r})]},r))})]},l.label))})}function Qm(){let e=B(),a={border:"none",borderRadius:i.radii.chip,padding:`${i.spacing.sm}px ${i.spacing.md}px`,fontSize:i.typography.sizes.base,height:40,display:"flex",alignItems:"center",gap:i.spacing.sm,fontFamily:C,whiteSpace:"nowrap",flexShrink:0},t={...a,fontWeight:i.typography.weights.semibold,background:e.jerseyRed,color:e.white},l={...a,fontWeight:i.typography.weights.regular,background:e.gray100,color:e.black},r={display:"flex",gap:i.spacing.md,flexWrap:"nowrap",overflowX:"auto"};return(0,S.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.lg},children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:e.gray400,marginBottom:i.spacing.xs2},children:"Full Game active"}),(0,S.jsxs)("div",{style:r,children:[(0,S.jsx)("button",{style:t,children:"Full Game"}),(0,S.jsxs)("button",{style:l,children:[(0,S.jsx)(ut,{})," Condensed Game"]}),(0,S.jsxs)("button",{style:l,children:[(0,S.jsx)(ut,{})," Game Highlights"]})]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:e.gray400,marginBottom:i.spacing.xs2},children:"Condensed Game active"}),(0,S.jsxs)("div",{style:r,children:[(0,S.jsx)("button",{style:l,children:"Full Game"}),(0,S.jsxs)("button",{style:t,children:[(0,S.jsx)(ut,{})," Condensed Game"]}),(0,S.jsxs)("button",{style:l,children:[(0,S.jsx)(ut,{})," Game Highlights"]})]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:e.gray400,marginBottom:i.spacing.xs2},children:"Game Highlights active"}),(0,S.jsxs)("div",{style:r,children:[(0,S.jsx)("button",{style:l,children:"Full Game"}),(0,S.jsxs)("button",{style:l,children:[(0,S.jsx)(ut,{})," Condensed Game"]}),(0,S.jsxs)("button",{style:t,children:[(0,S.jsx)(ut,{})," Game Highlights"]})]})]})]})}function Jm(){let e=B();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.sm2,background:e.gray100,borderRadius:i.radii.card,padding:i.spacing.lg},children:[(0,S.jsx)(Di,{name:"M. Kiryat Gat",score:"87",isWinner:!0}),(0,S.jsx)(Di,{name:"H. Haifa",score:"79",isWinner:!1})]}),(0,S.jsxs)("div",{style:{marginTop:i.spacing.md,display:"flex",flexDirection:"column",gap:i.spacing.sm2,background:e.gray100,borderRadius:i.radii.card,padding:i.spacing.lg},children:[(0,S.jsx)(Di,{name:"Maccabi Kiryat Gat",score:"89",isWinner:!0,logoSize:27,fontWeight:400,gap:8}),(0,S.jsx)(Di,{name:"Ironi Nahariya",score:"77",isWinner:!1,logoSize:27,fontWeight:400,gap:8})]}),(0,S.jsx)("p",{style:{fontSize:i.typography.sizes.xxs,color:e.gray400,marginTop:i.spacing.sm},children:"Top: LiveGameCard style (28px logo, 500 weight, 12px gap) \xB7 Bottom: GameResultCard style (27px logo, 400 weight, 8px gap)"})]})}function Km({tab:e,setTab:a}){let t=B();return(0,S.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,S.jsxs)("div",{style:{width:390,background:t.white,borderRadius:i.radii.lg,boxShadow:"0 4px 24px rgba(0,0,0,0.12)",overflow:"hidden"},children:[(0,S.jsx)(Ll,{primaryColor:"#1A3B8A",logoSize:80,height:340}),(0,S.jsxs)("div",{style:{padding:`${i.spacing.md2}px ${i.spacing.md2}px 28px`,display:"flex",flexDirection:"column",gap:i.spacing.md2},children:[(0,S.jsx)(La,{tabs:[{label:"Sign In",value:"signin"},{label:"Sign Up",value:"signup"}],active:e,onSelect:a}),e==="signin"?(0,S.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.sm2},children:[(0,S.jsx)("h2",{style:{fontFamily:C,fontSize:i.typography.sizes.xl,fontWeight:i.typography.weights.bold,margin:0,color:t.darkText},children:"Sign In"}),(0,S.jsx)(ne,{placeholder:"Email Address...",type:"email"}),(0,S.jsx)(ne,{placeholder:"Enter password...",type:"password"}),(0,S.jsx)(U,{children:"Sign in"}),(0,S.jsx)("div",{style:{textAlign:"center"},children:(0,S.jsx)(Cl,{children:"Forgot password?"})}),(0,S.jsx)(ko,{}),(0,S.jsxs)(U,{variant:"social",children:[(0,S.jsx)(vn,{})," ","Continue with Apple"]}),(0,S.jsxs)(U,{variant:"social",children:[(0,S.jsx)(hn,{})," ","Continue with Google"]})]}):(0,S.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.sm2},children:[(0,S.jsx)("h2",{style:{fontFamily:C,fontSize:i.typography.sizes.xl,fontWeight:i.typography.weights.bold,margin:0,color:t.darkText},children:"Create Account"}),(0,S.jsx)(ne,{placeholder:"Full Name..."}),(0,S.jsx)(Vt,{placeholder:"Age..."}),(0,S.jsx)(ne,{placeholder:"Phone Number...",type:"tel"}),(0,S.jsx)(ne,{placeholder:"Email Address...",type:"email"}),(0,S.jsx)(ne,{placeholder:"Create password...",type:"password"}),(0,S.jsx)(U,{children:"Create Account"}),(0,S.jsx)(ko,{}),(0,S.jsxs)(U,{variant:"social",children:[(0,S.jsx)(vn,{})," ","Continue with Apple"]}),(0,S.jsxs)(U,{variant:"social",children:[(0,S.jsx)(hn,{})," ","Continue with Google"]}),(0,S.jsxs)("p",{style:{textAlign:"center",fontSize:i.typography.sizes.xs,fontWeight:i.typography.weights.medium,color:t.gray400,margin:0},children:["Already have an account? ",(0,S.jsx)(Cl,{variant:"accent",children:"Sign in"})]})]})]})]})})}function $m({selJerseys:e,toggleJ:a}){let t=B();return(0,S.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:i.spacing.md},children:(0,S.jsxs)("div",{style:{width:390,background:t.white,borderRadius:i.radii.lg,boxShadow:"0 4px 24px rgba(0,0,0,0.12)",overflow:"hidden",position:"relative"},children:[(0,S.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 16px 0",height:64},children:[(0,S.jsx)(Ti,{size:42}),(0,S.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.sm,fontWeight:i.typography.weights.medium,color:t.darkText},children:"Cancel"})]}),(0,S.jsxs)("div",{style:{padding:"28px 16px 90px",display:"flex",flexDirection:"column",gap:i.spacing.xl},children:[(0,S.jsxs)("div",{style:{textAlign:"center"},children:[(0,S.jsx)("h1",{style:{fontFamily:C,fontSize:i.typography.sizes.xl,fontWeight:i.typography.weights.bold,margin:0,color:t.darkText},children:"Select the players you want to follow"}),(0,S.jsx)("p",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.medium,color:t.darkText,margin:"8px 0 0"},children:"To personalize your experience, choose the player's jersey number you want to follow."})]}),(0,S.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.lg2},children:[(0,S.jsx)("h2",{style:{fontFamily:C,fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.bold,margin:0,color:t.darkText},children:"Maccabi Kiryat Gat"}),(0,S.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:18,padding:`0 ${i.spacing.xs}px`},children:[1,2,3,4].map(l=>(0,S.jsx)(Gm,{number:l,selected:e.includes(l),onClick:()=>a(l)},l))}),(0,S.jsxs)(U,{variant:"muted",children:["See All ",(0,S.jsx)(De,{size:16})]})]})]}),(0,S.jsx)("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"12px 32px 20px",background:t.white},children:(0,S.jsx)(U,{children:"Finish"})})]})})}var P={};P.tokens=`// tokens/index.ts
export const lightColors = {
  primary:      '#116DFF',
  primaryHover: '#0D5AD4',
  primaryActive:'#0A4AB0',
  white:        '#FFFFFF',
  black:        '#000000',
  darkText:     '#161616',
  gray50:       '#F5F5F5',
  gray100:      '#EDEDED',
  gray200:      '#C7CBD0',
  gray300:      '#DCDCDC',
  gray400:      '#979797',
  gray500:      '#6C6C6C',
  grayOverlay:  'rgba(237,237,237,0.6)',
  heroBg:       '#1A3B8A',
  accent:       '#E8332B',
  jerseyRed:    '#D0142C',
  premiumYellow: '#FFE000',
  premiumAmber:  '#E7A610',
  premiumHover:  '#E7A610',
  premiumActive: '#D4960E',
  premiumDark:   '#362F2C',
  freeBadgeGreen: '#22C55E',
  claimedPurple: '#8B5CF6',
  infoBgPurple:  'rgba(139,92,246,0.08)',
  linkBlue:      '#2563EB',
  liveRed:       '#EF4444',
  highlightGray: '#6C6C6C',
  cardBg:        '#F3F4F6',
  successGreen:  '#22C55E',
  errorRed:      '#EF4444',
  overlay:       'rgba(0,0,0,0.7)',
  notifBadgeRed: '#EF4444',
  cardHoverBg:   '#F0F0F0',
  disabledTextOnDark: 'rgba(255,255,255,0.35)',
  dangerRed:     '#EF4444',
  selectedGreen: '#02814a',
  errorBg:       '#FEF2F2',
  errorBorder:   'rgba(239,68,68,0.15)',
}

export const darkColors = {
  primary:      '#3B8BFF',
  primaryHover: '#5A9FFF',
  primaryActive:'#2563EB',
  white:        '#1A1A1A',
  black:        '#FFFFFF',
  darkText:     '#E8E8E8',
  gray50:       '#262626',
  gray100:      '#333333',
  gray200:      '#444444',
  gray300:      '#555555',
  gray400:      '#888888',
  gray500:      '#A0A0A0',
  grayOverlay:  'rgba(255,255,255,0.08)',
  heroBg:       '#0F2557',
  accent:       '#E8332B',
  jerseyRed:    '#D0142C',
  premiumYellow: '#FFE000',
  premiumAmber:  '#E7A610',
  premiumHover:  '#F5B800',
  premiumActive: '#E7A610',
  premiumDark:   '#362F2C',
  freeBadgeGreen: '#22C55E',
  claimedPurple: '#A78BFA',
  infoBgPurple:  'rgba(167,139,250,0.1)',
  linkBlue:      '#60A5FA',
  liveRed:       '#EF4444',
  highlightGray: '#A0A0A0',
  cardBg:        '#262626',
  successGreen:  '#34D399',
  errorRed:      '#FF6B6B',
  overlay:       'rgba(0,0,0,0.85)',
  notifBadgeRed: '#EF4444',
  cardHoverBg:   '#333333',
  disabledTextOnDark: 'rgba(200,200,200,0.35)',
  dangerRed:     '#FF6B6B',
  selectedGreen: '#02814a',
  errorBg:       'rgba(239,68,68,0.1)',
  errorBorder:   'rgba(239,68,68,0.25)',
}

// composable: useTheme()
// const theme = ref<'light'|'dark'>('light')
// const colors = computed(() => theme.value === 'dark' ? darkColors : lightColors)

export const typography = {
  fontFamily: '"Red Hat Display", sans-serif',
  sizes: {
    xxs: '11px',  xs: '14px',  sm: '15px',  base: '16px',
    lg: '20px',   xl: '22px',  xxl: '24px', jersey: '29px',
  },
  weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
}

export const radii = { sm: '4px', md: '16px', lg: '20px', xl: '32px' }
export const spacing = { xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '24px', xxl: '32px', xxxl: '34px' }
export const sizes = {
  inputHeight: '46px', buttonHeight: '40px', tabHeight: '38px',
  topBarHeight: '72px', containerWidth: '398px', pageMaxWidth: '430px',
  heroHeight: '340px', jerseySize: '73px', logoSmall: '48px',
}
export const strokes = {
  thin: '0.67px', regular: '1px', medium: '1.33px',
  thick: '1.7px', bold: '2px', heavy: '2.5px', extraHeavy: '2.67px',
}
export const breakpoints = { mobile: '768px', tablet: '1024px' }

// Focus ring utility \u2014 apply on :focus-visible
// .focus-ring:focus-visible { outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px; }`;P.appInput=`<template>
  <div class="app-input"
    :class="{ 'app-input--error': error, 'app-input--disabled': disabled }">
    <input :type="computedType" :placeholder="placeholder"
      :value="modelValue" :disabled="disabled"
      :aria-label="ariaLabel || placeholder"
      :aria-invalid="error || undefined"
      :aria-describedby="error && errorMsg ? errorId : undefined"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @focus="isFocused = true" @blur="isFocused = false"
      class="focus-ring" />
    <button v-if="type === 'password'" class="app-input__toggle focus-ring"
      :aria-label="showPwd ? 'Hide password' : 'Show password'"
      @click="showPwd = !showPwd" type="button" :disabled="disabled">
      <EyeIcon v-if="!showPwd" :size="18" />
      <EyeOffIcon v-else :size="18" />
    </button>
    <span v-if="error && errorMsg" :id="errorId" class="app-input__error">
      {{ errorMsg }}
    </span>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue
const props = defineProps<{
  modelValue?: string
  placeholder?: string
  type?: string
  error?: boolean
  errorMsg?: string
  disabled?: boolean
  ariaLabel?: string
}>()
defineEmits<{ 'update:modelValue': [value: string] }>()
const showPwd = ref(false)
const isFocused = ref(false)
const computedType = computed(() => props.type === 'password' && showPwd.value ? 'text' : props.type)
const errorId = computed(() => 'err-' + (props.placeholder || '').replace(/\\s/g, ''))
<\/script>
<style scoped>
.app-input { position: relative; width: 100%; }
.app-input input {
  width: 100%; height: 46px; padding: 8px 16px;
  font-family: 'Red Hat Display', sans-serif; font-size: 16px;
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-dark-text, #161616);
  border: 2px solid transparent; border-radius: 20px;
  outline: none; transition: all 0.15s;
}
.app-input input::placeholder {
  color: var(--color-gray-400, #979797);
}
.app-input input:hover:not(:disabled) {
  background: var(--color-gray-200, #C7CBD0);
}
.app-input input:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.app-input--error input {
  border: 2px solid var(--color-error-red, #EF4444);
}
.app-input--disabled input {
  background: var(--color-gray-overlay, rgba(237,237,237,0.6));
  color: var(--color-gray-400, #979797); cursor: not-allowed; opacity: 0.5;
}
.app-input__toggle {
  position: absolute; right: 14px; top: 14px;
  background: none; border: none; cursor: pointer;
  color: var(--color-gray-400, #979797); display: flex;
  border-radius: 4px; transition: color 0.15s;
}
.app-input__toggle:hover:not(:disabled) {
  color: var(--color-gray-500, #6C6C6C);
}
.app-input__toggle:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.app-input__toggle:disabled {
  cursor: not-allowed; opacity: 0.5;
}
.app-input__error {
  font-family: 'Red Hat Display', sans-serif; font-size: 12px;
  color: var(--color-error-red, #EF4444);
  display: block; margin-top: 4px; padding-left: 16px;
}
@media (prefers-color-scheme: dark) {
  .app-input input {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .app-input input::placeholder {
    color: var(--color-gray-400-dark, #888888);
  }
  .app-input input:hover:not(:disabled) {
    background: var(--color-gray-200-dark, #444444);
  }
  .app-input--disabled input {
    background: var(--color-gray-overlay-dark, rgba(255,255,255,0.08));
  }
}
</style>`;P.appSelect=`<template>
  <div class="app-select">
    <select :value="modelValue" :aria-label="ariaLabel || placeholder"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
      <option disabled value="">{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
    <ChevronDownIcon :size="16" class="app-select__icon" />
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  modelValue?: string
  placeholder?: string
  ariaLabel?: string
  options?: Array<{ label: string; value: string }>
}>()
withDefaults(props, {
  options: () => [
    { label: '18', value: '18' },
    { label: '25', value: '25' },
    { label: '35+', value: '35' },
  ],
})
defineEmits<{ 'update:modelValue': [value: string] }>()
<\/script>
<style scoped>
.app-select { position: relative; width: 100%; }
.app-select select {
  width: 100%; height: 46px; padding: 8px 16px 8px 16px;
  font-family: 'Red Hat Display', sans-serif; font-size: 16px;
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-dark-text, #161616);
  border: 2px solid transparent; border-radius: 20px;
  appearance: none; cursor: pointer; outline: none;
  transition: all 0.15s; padding-right: 40px;
}
.app-select select::placeholder {
  color: var(--color-gray-400, #979797);
}
.app-select select:hover {
  background: var(--color-gray-200, #C7CBD0);
}
.app-select select:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.app-select__icon {
  position: absolute; right: 14px; top: 50%;
  transform: translateY(-50%); pointer-events: none;
  color: var(--color-gray-400, #979797);
}
@media (prefers-color-scheme: dark) {
  .app-select select {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .app-select select:hover {
    background: var(--color-gray-200-dark, #444444);
  }
}
</style>`;P.appButton=`<template>
  <button
    :class="[
      'app-button',
      \`app-button--\${variant}\`,
      \`app-button--\${size}\`,
      { 'app-button--icon-only': iconOnly, 'app-button--full-width': fullWidth, 'app-button--disabled': disabled }
    ]"
    :disabled="disabled"
    :aria-label="ariaLabel"
    @click="$emit('click')"
  >
    <span v-if="$slots.leading" class="app-button__icon"><slot name="leading" /></span>
    <slot v-if="!iconOnly" />
    <span v-if="$slots.trailing" class="app-button__icon"><slot name="trailing" /></span>
  </button>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  variant?:   'primary' | 'premium' | 'social' | 'muted' | 'ghost' | 'link' | 'danger'
  size?:      'sm' | 'md' | 'lg'
  iconOnly?:  boolean
  fullWidth?: boolean
  disabled?:  boolean
  ariaLabel?: string
}>()
withDefaults(props, {
  variant: 'primary',
  size: 'md',
  iconOnly: false,
  fullWidth: true,
  disabled: false,
})
defineEmits<{ click: [] }>()
<\/script>
<style scoped>
.app-button {
  font-family: 'Red Hat Display', sans-serif; font-weight: 600;
  border: none; border-radius: 20px; cursor: pointer;
  transition: all 0.15s; display: flex; align-items: center;
  justify-content: center; gap: 8px; outline: none;
}
.app-button:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.app-button--sm { height: 32px; font-size: 14px; padding: 0 12px; }
.app-button--md { height: 40px; font-size: 15px; padding: 0 16px; }
.app-button--lg { height: 48px; font-size: 16px; padding: 0 24px; }
.app-button--full-width { width: 100%; }
.app-button--icon-only { padding: 0; min-width: 32px; width: 40px; }

/* Primary variant */
.app-button--primary {
  background: var(--color-primary, #116DFF); color: #FFFFFF;
}
.app-button--primary:hover:not(:disabled) {
  background: var(--color-primary-hover, #0D5AD4);
}
.app-button--primary:active:not(:disabled) {
  background: var(--color-primary-active, #0A4AB0);
}

/* Premium variant */
.app-button--premium {
  background: var(--color-premium-amber, #E7A610); color: #000000;
}
.app-button--premium:hover:not(:disabled) {
  background: var(--color-premium-hover, #E7A610);
}
.app-button--premium:active:not(:disabled) {
  background: var(--color-premium-active, #D4960E);
}

/* Muted variant */
.app-button--muted {
  background: var(--color-gray-100, #EDEDED); color: var(--color-dark-text, #161616);
}
.app-button--muted:hover:not(:disabled) {
  background: var(--color-gray-200, #C7CBD0);
}
.app-button--muted:active:not(:disabled) {
  background: var(--color-gray-200, #C7CBD0);
}

/* Ghost variant */
.app-button--ghost {
  background: transparent; color: var(--color-dark-text, #161616);
  border: 2px solid var(--color-gray-200, #C7CBD0);
}
.app-button--ghost:hover:not(:disabled) {
  background: var(--color-gray-100, #EDEDED);
}

/* Link variant */
.app-button--link {
  background: transparent; color: var(--color-link-blue, #2563EB);
  text-decoration: underline;
}
.app-button--link:hover:not(:disabled) {
  opacity: 0.8;
}

/* Danger variant */
.app-button--danger {
  background: var(--color-danger-red, #EF4444); color: #FFFFFF;
}
.app-button--danger:hover:not(:disabled) {
  background: var(--color-error-red, #EF4444);
  filter: brightness(0.9);
}

/* Disabled state */
.app-button--disabled, .app-button:disabled {
  opacity: 0.5; cursor: not-allowed;
}

.app-button__icon {
  display: flex; align-items: center; justify-content: center;
}

@media (prefers-color-scheme: dark) {
  .app-button--muted {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .app-button--muted:hover:not(:disabled) {
    background: var(--color-gray-200-dark, #444444);
  }
  .app-button--ghost {
    color: var(--color-dark-text-dark, #E8E8E8);
    border-color: var(--color-gray-300-dark, #555555);
  }
  .app-button--ghost:hover:not(:disabled) {
    background: var(--color-gray-100-dark, #333333);
  }
  .app-button--link {
    color: var(--color-link-blue-dark, #60A5FA);
  }
}
</style>`;P.appBadge=`<template>
  <div
    :class="['app-badge', \`app-badge--\${variant}\`]"
    :aria-label="ariaLabel || label"
    role="status"
  >
    <span v-if="variant === 'live'" class="app-badge__dot" />
    {{ label }}
  </div>
</template>

<script setup lang="ts">
// import { computed } \u2014 vue
const props = defineProps<{
  variant?: 'live' | 'premium' | 'free' | 'claimed' | 'highlights'
  ariaLabel?: string
}>()
withDefaults(props, { variant: 'live' })
const labels: Record<string, string> = {
  live: 'Live', premium: 'Premium', free: 'Free',
  claimed: 'Claimed', highlights: 'Highlights'
}
const label = computed(() => labels[props.variant || 'live'])
<\/script>
<style scoped>
.app-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: 'Red Hat Display', sans-serif; font-size: 11px;
  font-weight: 700; text-transform: uppercase; border-radius: 12px;
  padding: 4px 12px;
}
.app-badge--live {
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-dark-text, #161616);
}
.app-badge__dot {
  display: inline-block; width: 6px; height: 6px;
  border-radius: 50%; background: var(--color-live-red, #EF4444);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
.app-badge--premium {
  background: var(--color-premium-amber, #E7A610);
  color: #000000;
}
.app-badge--free {
  background: var(--color-free-badge-green, #22C55E);
  color: #FFFFFF;
}
.app-badge--claimed {
  background: var(--color-claimed-purple, #8B5CF6);
  color: #FFFFFF;
}
.app-badge--highlights {
  background: var(--color-highlight-gray, #6C6C6C);
  color: #FFFFFF;
}

@media (prefers-color-scheme: dark) {
  .app-badge--live {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .app-badge--claimed {
    background: var(--color-claimed-purple-dark, #A78BFA);
  }
  .app-badge--highlights {
    background: var(--color-highlight-gray-dark, #A0A0A0);
    color: #000000;
  }
}
</style>`;P.appTabs=`<template>
  <div :class="['app-tabs', \`app-tabs--\${variant}\`]" role="tablist">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      :class="['app-tabs__btn', { 'app-tabs__btn--active': active === tab.value }]"
      :style="active === tab.value && variant === 'underline'
        ? { borderBottomColor: accentColor }
        : {}"
      role="tab"
      :aria-selected="active === tab.value"
      :aria-controls="\`tab-panel-\${tab.value}\`"
      @click="$emit('update:active', tab.value)">
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

interface TabItem {
  label: string
  value: string
}
const props = defineProps<{
  tabs:        TabItem[]
  active:      string
  variant?:    'pill' | 'underline'
  accentColor?: string
}>()
withDefaults(props, {
  variant: 'pill',
  accentColor: '#EF4444',
})
defineEmits<{ 'update:active': [value: string] }>()
<\/script>
<style scoped>
.app-tabs {
  display: flex; gap: 8px; align-items: center;
  border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
}
.app-tabs--underline {
  border-bottom: 2px solid var(--color-gray-200, #C7CBD0);
}
.app-tabs__btn {
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  font-weight: 500; background: none; border: none;
  color: var(--color-gray-500, #6C6C6C); cursor: pointer;
  padding: 12px 16px; border-radius: 16px 16px 0 0;
  transition: all 0.15s; outline: none;
}
.app-tabs__btn:hover {
  background: var(--color-gray-100, #EDEDED);
}
.app-tabs__btn:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: -2px;
}
.app-tabs--pill .app-tabs__btn {
  border-radius: 26px; margin: 4px;
}
.app-tabs--pill .app-tabs__btn--active {
  background: var(--color-primary, #116DFF); color: #FFFFFF;
}
.app-tabs--underline .app-tabs__btn {
  border-radius: 0; border-bottom: 3px solid transparent;
  margin-bottom: -2px;
}
.app-tabs--underline .app-tabs__btn--active {
  color: var(--color-dark-text, #161616); font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  .app-tabs {
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .app-tabs--underline {
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .app-tabs__btn {
    color: var(--color-gray-400-dark, #888888);
  }
  .app-tabs__btn:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .app-tabs--pill .app-tabs__btn--active {
    background: var(--color-primary-dark, #3B8BFF);
  }
  .app-tabs--underline .app-tabs__btn--active {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
}
</style>`;P.shareCurtain=`<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <div v-if="open" class="share-curtain__backdrop"
      @click="$emit('close')"
      role="presentation"
      aria-label="Close share menu"
      @keydown.escape="$emit('close')" />
    <!-- Sheet -->
    <Transition name="slide-up">
      <div v-if="open" class="share-curtain" role="dialog"
        aria-labelledby="share-title" aria-modal="true">
        <h3 id="share-title" class="share-curtain__title">Share</h3>
        <div class="share-curtain__grid" role="list">
          <button v-for="ch in channels" :key="ch.id" class="share-curtain__item"
            role="listitem"
            :aria-label="\`Share via \${ch.label}\`"
            @click="$emit('share', ch.id)">
            <div class="share-curtain__icon" :style="{ background: ch.darkColor && isDark ? ch.darkColor : ch.color }">
              <component :is="ch.icon" :aria-hidden="true" />
            </div>
            <span class="share-curtain__label">{{ ch.label }}</span>
          </button>
        </div>
        <button class="share-curtain__cancel" @click="$emit('close')"
          :aria-label="\`Cancel sharing\`">Cancel</button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

interface Channel {
  id: string
  label: string
  color: string
  darkColor?: string
  icon: string
}
const props = defineProps<{
  open?: boolean
  isDark?: boolean
}>()
withDefaults(props, { open: false, isDark: false })
defineEmits<{ close: []; share: [channelId: string] }>()

const channels: Channel[] = [
  { id: 'copy', label: 'Copy Link', color: '#BDBDBD', icon: 'LinkIcon' },
  { id: 'facebook', label: 'Facebook', color: '#1877F2', icon: 'FacebookIcon' },
  { id: 'x', label: 'X', color: '#000000', darkColor: '#333333', icon: 'XLogoIcon' },
  { id: 'whatsapp', label: 'WhatsApp', color: '#25D366', icon: 'WhatsAppIcon' },
  { id: 'tiktok', label: 'TikTok', color: '#000000', darkColor: '#333333', icon: 'TikTokIcon' },
  { id: 'instagram', label: 'Instagram', color: 'linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)', icon: 'InstagramIcon' },
]
<\/script>
<style scoped>
.share-curtain__backdrop {
  position: fixed; inset: 0; background: var(--color-overlay, rgba(0,0,0,0.7));
  z-index: 100; animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.share-curtain {
  position: fixed; bottom: 0; left: 0; right: 0;
  background: var(--color-white, #FFFFFF); border-radius: 20px 20px 0 0;
  padding: 24px 16px; z-index: 101; animation: slideUp 0.3s ease-out;
  max-height: 80vh; overflow-y: auto;
}
@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
.share-curtain__title {
  font-family: 'Red Hat Display', sans-serif; font-size: 20px;
  font-weight: 600; margin: 0 0 16px 0;
  color: var(--color-dark-text, #161616);
}
.share-curtain__grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 12px; margin-bottom: 16px;
}
.share-curtain__item {
  display: flex; flex-direction: column; align-items: center;
  gap: 8px; background: none; border: none; cursor: pointer;
  padding: 8px; border-radius: 12px; outline: none;
  transition: all 0.15s;
}
.share-curtain__item:hover {
  background: var(--color-gray-100, #EDEDED);
}
.share-curtain__item:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.share-curtain__icon {
  width: 48px; height: 48px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  color: #FFFFFF; flex-shrink: 0;
}
.share-curtain__label {
  font-family: 'Red Hat Display', sans-serif; font-size: 12px;
  font-weight: 500; text-align: center;
  color: var(--color-dark-text, #161616);
}
.share-curtain__cancel {
  width: 100%; height: 40px; background: var(--color-gray-100, #EDEDED);
  border: none; border-radius: 20px; font-family: 'Red Hat Display', sans-serif;
  font-size: 15px; font-weight: 600; color: var(--color-dark-text, #161616);
  cursor: pointer; outline: none; transition: all 0.15s;
}
.share-curtain__cancel:hover {
  background: var(--color-gray-200, #C7CBD0);
}
.share-curtain__cancel:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .share-curtain {
    background: var(--color-white-dark, #1A1A1A);
  }
  .share-curtain__title {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .share-curtain__item:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .share-curtain__label {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .share-curtain__cancel {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .share-curtain__cancel:hover {
    background: var(--color-gray-200-dark, #444444);
  }
}
</style>`;P.videoActionBar=`<template>
  <div class="video-action-bar">
    <span class="video-action-bar__views" aria-label="Video view count">{{ views }}</span>
    <div class="video-action-bar__actions" role="toolbar" aria-label="Video actions">
      <button
        class="video-action-bar__btn focus-ring"
        :class="{ 'video-action-bar__btn--disabled': disabled }"
        :disabled="disabled"
        aria-label="Download video"
        @click="$emit('download')"
      >
        <DownloadIcon :size="20" :aria-hidden="true" />
      </button>
      <button
        class="video-action-bar__btn focus-ring"
        :class="{ 'video-action-bar__btn--disabled': disabled }"
        :disabled="disabled"
        aria-label="Share video"
        @click="$emit('share')"
      >
        <UploadIcon :size="20" :aria-hidden="true" />
      </button>
      <button
        class="video-action-bar__btn focus-ring"
        :class="{
          'video-action-bar__btn--active': bookmarked,
          'video-action-bar__btn--disabled': disabled,
        }"
        :disabled="disabled"
        :aria-label="bookmarked ? 'Remove bookmark' : 'Bookmark video'"
        :aria-pressed="bookmarked"
        @click="$emit('bookmark')"
      >
        <BookmarkIcon :size="20" :aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  views?:      string
  bookmarked?: boolean
  disabled?:   boolean
}>()
withDefaults(props, {
  views: '0 views',
  bookmarked: false,
  disabled: false,
})
defineEmits<{ download: []; share: []; bookmark: [] }>()
<\/script>

<style scoped>
.video-action-bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px; background: transparent;
}
.video-action-bar__views {
  font-family: 'Red Hat Display', sans-serif; font-size: 14px;
  color: var(--color-gray-500, #6C6C6C);
}
.video-action-bar__actions {
  display: flex; gap: 8px; align-items: center;
}
.video-action-bar__btn {
  width: 40px; height: 40px; border-radius: 8px;
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-gray-500, #6C6C6C);
  border: none; cursor: pointer; display: flex;
  align-items: center; justify-content: center;
  transition: background 0.15s, color 0.15s; outline: none;
}
.video-action-bar__btn:hover:not(:disabled) {
  background: var(--color-gray-200, #C7CBD0);
  color: var(--color-gray-400, #979797);
}
.video-action-bar__btn:active:not(:disabled) {
  background: var(--color-gray-300, #DCDCDC);
  color: var(--color-dark-text, #161616);
}
.video-action-bar__btn:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.video-action-bar__btn--disabled {
  background: var(--color-grayOverlay, rgba(237,237,237,0.5));
  color: rgba(108,108,108,0.3);
  cursor: not-allowed; opacity: 0.6;
}
.video-action-bar__btn--active {
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-primary, #116DFF);
}
.video-action-bar__btn--active svg { fill: var(--color-primary, #116DFF); }
.video-action-bar__btn--active:hover:not(:disabled) {
  background: var(--color-gray-200, #C7CBD0);
  color: var(--color-primary-hover, #0D5AD4);
}
.video-action-bar__btn--active:active:not(:disabled) {
  background: var(--color-gray-300, #DCDCDC);
  color: var(--color-primary-active, #0A4AB0);
}
@keyframes bookmarkPop {
  0% { transform: scale(1); }
  40% { transform: scale(1.25); }
  100% { transform: scale(1); }
}
.video-action-bar__btn--animating {
  animation: bookmarkPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@media (prefers-color-scheme: dark) {
  .video-action-bar__views {
    color: var(--color-gray-400-dark, #888888);
  }
  .video-action-bar__btn {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-gray-400-dark, #888888);
  }
  .video-action-bar__btn:hover:not(:disabled) {
    background: var(--color-gray-200-dark, #444444);
    color: var(--color-gray-500-dark, #A0A0A0);
  }
  .video-action-bar__btn:active:not(:disabled) {
    background: var(--color-gray-300-dark, #555555);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .video-action-bar__btn--disabled {
    background: rgba(255,255,255,0.08);
  }
  .video-action-bar__btn--active {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-primary-dark, #3B8BFF);
  }
  .video-action-bar__btn--active svg { fill: var(--color-primary-dark, #3B8BFF); }
  .video-action-bar__btn--active:hover:not(:disabled) {
    background: var(--color-gray-200-dark, #444444);
    color: var(--color-primary-hover-dark, #5A9FFF);
  }
}
</style>`;P.appDivider=`<template>
  <div class="app-divider" role="separator">
    <span class="app-divider__line" aria-hidden="true" />
    <span class="app-divider__text">{{ text }}</span>
    <span class="app-divider__line" aria-hidden="true" />
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

defineProps<{
  text?: string
}>()
<\/script>

<style scoped>
.app-divider {
  display: flex; align-items: center; gap: 12px;
  margin: 16px 0;
}
.app-divider__line {
  flex: 1; height: 1px;
  background: var(--color-gray-200, #C7CBD0);
}
.app-divider__text {
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  color: var(--color-gray-500, #6C6C6C); white-space: nowrap;
}

@media (prefers-color-scheme: dark) {
  .app-divider__line {
    background: var(--color-gray-300-dark, #555555);
  }
  .app-divider__text {
    color: var(--color-gray-400-dark, #888888);
  }
}
</style>`;P.appLink=`<template>
  <a :class="['app-link', \`app-link--\${variant}\`]" :href="href"
    :aria-label="ariaLabel" :target="target" :rel="rel">
    <slot />
  </a>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  href?:      string
  variant?:   'default' | 'accent' | 'muted'
  ariaLabel?: string
  target?:    string
  rel?:       string
}>()
withDefaults(props, {
  variant: 'default',
})
<\/script>

<style scoped>
.app-link {
  font-family: 'Red Hat Display', sans-serif; font-size: 14px;
  text-decoration: none; cursor: pointer; outline: none;
  transition: all 0.15s; border-radius: 4px; padding: 2px 4px;
}
.app-link:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.app-link--default {
  color: var(--color-link-blue, #2563EB);
}
.app-link--default:hover {
  text-decoration: underline; opacity: 0.8;
}
.app-link--accent {
  color: var(--color-accent, #E8332B);
  font-weight: 600;
}
.app-link--accent:hover {
  text-decoration: underline; opacity: 0.8;
}
.app-link--muted {
  color: var(--color-gray-500, #6C6C6C);
}
.app-link--muted:hover {
  color: var(--color-dark-text, #161616); text-decoration: underline;
}

@media (prefers-color-scheme: dark) {
  .app-link--default {
    color: var(--color-link-blue-dark, #60A5FA);
  }
  .app-link--muted {
    color: var(--color-gray-400-dark, #888888);
  }
  .app-link--muted:hover {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
}
</style>`;P.mainTopBar=`<template>
  <header class="main-top-bar" role="banner">
    <PixellotLogo class="main-top-bar__logo" :aria-label="appName" />
    <div class="main-top-bar__search-wrapper">
      <input class="main-top-bar__search" type="text" placeholder="Search..."
        :aria-label="searchAriaLabel" />
      <SearchIcon :size="18" class="main-top-bar__search-icon" :aria-hidden="true" />
    </div>
    <button class="main-top-bar__icon focus-ring"
      aria-label="Notifications" aria-haspopup="menu">
      <BellIcon :size="20" :aria-hidden="true" />
      <span v-if="notificationCount > 0" class="main-top-bar__badge">
        {{ notificationCount }}
      </span>
    </button>
    <button class="main-top-bar__avatar focus-ring"
      :aria-label="\`User profile menu for \${initials}\`""
      aria-haspopup="menu">
      {{ initials }}
    </button>
  </header>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  appName?:          string
  searchAriaLabel?:  string
  notificationCount?: number
  initials?:         string
}>()
withDefaults(props, {
  appName: 'Pixellot',
  searchAriaLabel: 'Search games and videos',
  notificationCount: 0,
  initials: 'BR',
})
<\/script>

<style scoped>
.main-top-bar {
  display: flex; align-items: center; gap: 16px;
  height: 72px; padding: 0 16px; background: var(--color-white, #FFFFFF);
  border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
  position: sticky; top: 0; z-index: 50;
}
.main-top-bar__logo {
  flex-shrink: 0; height: 32px;
}
.main-top-bar__search-wrapper {
  flex: 1; position: relative; max-width: 300px;
}
.main-top-bar__search {
  width: 100%; height: 40px; padding: 8px 12px 8px 36px;
  font-family: 'Red Hat Display', sans-serif; font-size: 14px;
  background: var(--color-gray-100, #EDEDED);
  color: var(--color-dark-text, #161616);
  border: 2px solid transparent; border-radius: 20px;
  outline: none; transition: all 0.15s;
}
.main-top-bar__search::placeholder {
  color: var(--color-gray-400, #979797);
}
.main-top-bar__search:hover {
  background: var(--color-gray-200, #C7CBD0);
}
.main-top-bar__search:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.main-top-bar__search-icon {
  position: absolute; left: 12px; top: 50%;
  transform: translateY(-50%); color: var(--color-gray-400, #979797);
  pointer-events: none;
}
.main-top-bar__icon {
  position: relative; width: 40px; height: 40px;
  background: transparent; border: none; cursor: pointer;
  color: var(--color-gray-500, #6C6C6C);
  border-radius: 8px; display: flex; align-items: center;
  justify-content: center; outline: none; transition: all 0.15s;
}
.main-top-bar__icon:hover {
  background: var(--color-gray-100, #EDEDED);
}
.main-top-bar__icon:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.main-top-bar__badge {
  position: absolute; top: -4px; right: -4px;
  background: var(--color-notif-badge-red, #EF4444);
  color: #FFFFFF; font-size: 10px; font-weight: 700;
  padding: 2px 6px; border-radius: 10px; min-width: 20px;
  text-align: center;
}
.main-top-bar__avatar {
  width: 40px; height: 40px; background: var(--color-primary, #116DFF);
  color: #FFFFFF; border: none; border-radius: 50%;
  font-family: 'Red Hat Display', sans-serif; font-size: 14px;
  font-weight: 600; cursor: pointer; display: flex;
  align-items: center; justify-content: center;
  outline: none; transition: all 0.15s;
}
.main-top-bar__avatar:hover {
  background: var(--color-primary-hover, #0D5AD4);
}
.main-top-bar__avatar:focus-visible {
  outline: 2px solid var(--color-primary-active, #0A4AB0); outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .main-top-bar {
    background: var(--color-white-dark, #1A1A1A);
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .main-top-bar__search {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .main-top-bar__search:hover {
    background: var(--color-gray-200-dark, #444444);
  }
  .main-top-bar__icon {
    color: var(--color-gray-400-dark, #888888);
  }
  .main-top-bar__icon:hover {
    background: var(--color-gray-100-dark, #333333);
  }
}
</style>`;P.heroBanner=`<template>
  <section class="hero-banner" role="banner">
    <div class="hero-banner__content">
      <h1 class="hero-banner__title">{{ title }}</h1>
      <p class="hero-banner__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  title?:    string
  subtitle?: string
  bgColor?:  string
}>()
withDefaults(props, {
  title: 'Welcome to Pixellot',
  subtitle: 'Watch basketball games live & on demand',
  bgColor: '#1A3B8A',
})
<\/script>

<style scoped>
.hero-banner {
  background: var(--color-hero-bg, #1A3B8A);
  color: #FFFFFF; padding: 48px 16px;
  border-radius: 0 0 32px 32px; display: flex;
  align-items: center; justify-content: center;
  min-height: 200px;
}
.hero-banner__content {
  text-align: center; max-width: 400px;
}
.hero-banner__title {
  margin: 0 0 12px 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 28px; font-weight: 700;
}
.hero-banner__subtitle {
  margin: 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 16px; font-weight: 400; opacity: 0.95;
}

@media (prefers-color-scheme: dark) {
  .hero-banner {
    background: var(--color-hero-bg-dark, #0F2557);
  }
}
</style>`;P.topBar=`<template>
  <div class="top-bar">
    <PixellotLogo class="top-bar__logo" />
    <div class="top-bar__title">Games</div>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue
<\/script>`;P.backButton=`<template>
  <button class="back-button focus-ring"
    aria-label="Go back to previous page"
    @click="$emit('click')">
    <ArrowLeftIcon :size="20" :aria-hidden="true" />
    {{ label }}
  </button>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  label?: string
}>()
withDefaults(props, { label: 'Back' })
defineEmits<{ click: [] }>()
<\/script>

<style scoped>
.back-button {
  display: flex; align-items: center; gap: 8px;
  background: transparent; border: none; cursor: pointer;
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  font-weight: 500; color: var(--color-dark-text, #161616);
  padding: 8px 12px; border-radius: 8px; outline: none;
  transition: all 0.15s;
}
.back-button:hover {
  background: var(--color-gray-100, #EDEDED);
}
.back-button:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .back-button {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .back-button:hover {
    background: var(--color-gray-100-dark, #333333);
  }
}
</style>`;P.jerseyItem=`<template>
  <button
    :class="['jersey-item', { 'jersey-item--selected': selected }]"
    :aria-label="\`Player number \${number}\${selected ? ', selected' : ''}\`""
    :aria-pressed="selected"
    @click="$emit('select')">
    <svg viewBox="0 0 73 73" fill="none" :aria-hidden="true">
      <path
        d="M 30,6 Q 36.5,22 43,6 L 51,6 Q 51,28 59,28 L 59,62 Q 59,67 55,67 L 18,67 Q 14,67 14,62 L 14,28 Q 22,28 22,6 L 30,6 Z"
        :fill="color"
        :stroke="selected ? 'var(--color-primary, #116DFF)' : '#fff'"
        :stroke-width="selected ? 2.5 : 1.7" />
    </svg>
    <span class="jersey-item__number">{{ number }}</span>
  </button>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  number?: string | number
  color?:  string
  selected?: boolean
}>()
withDefaults(props, {
  number: 0,
  color: '#D0142C',
  selected: false,
})
defineEmits<{ select: [] }>()
<\/script>

<style scoped>
.jersey-item {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 8px; position: relative;
  background: transparent; border: 2px solid transparent;
  border-radius: 12px; cursor: pointer; outline: none;
  transition: all 0.2s; padding: 8px;
}
.jersey-item:hover {
  background: var(--color-gray-100, #EDEDED);
}
.jersey-item:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.jersey-item svg {
  width: 73px; height: 73px; flex-shrink: 0;
}
.jersey-item--selected svg {
  filter: drop-shadow(0 0 4px var(--color-primary, #116DFF));
}
.jersey-item__number {
  font-family: 'Red Hat Display', sans-serif; font-size: 18px;
  font-weight: 700; color: var(--color-dark-text, #161616);
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

@media (prefers-color-scheme: dark) {
  .jersey-item:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .jersey-item__number {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
}
</style>`;P.jerseyGrid=`<template>
  <div class="jersey-grid" role="group" :aria-label="ariaLabel">
    <JerseyItem
      v-for="num in jerseys"
      :key="num"
      :number="num"
      :color="colors[num] || '#D0142C'"
      :selected="selected.includes(num)"
      @select="toggleJersey(num)" />
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  jerseys?: (string | number)[]
  selected?: (string | number)[]
  ariaLabel?: string
  colors?: Record<string | number, string>
}>()
withDefaults(props, {
  jerseys: () => [1, 2, 3, 4, 5, 6, 7, 8],
  selected: () => [],
  ariaLabel: 'Select player jersey numbers',
  colors: () => ({}),
})
defineEmits<{ toggle: [number: string | number] }>()

const toggleJersey = (num: string | number) => {
  console.log('Jersey toggled:', num)
}
<\/script>

<style scoped>
.jersey-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(92px, 1fr));
  gap: 12px; padding: 16px 0;
}

@media (max-width: 480px) {
  .jersey-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>`;P.onboardingPage=`<template>
  <div class="onboarding-page">
    <header class="onboarding-page__header">
      <PixellotLogo class="onboarding-page__logo" :aria-label="appName" />
      <button class="onboarding-page__close focus-ring" aria-label="Cancel onboarding"
        @click="$emit('cancel')">Cancel</button>
    </header>
    <main class="onboarding-page__content">
      <h1 class="onboarding-page__title">{{ title }}</h1>
      <p class="onboarding-page__description">{{ description }}</p>
      <h2 class="onboarding-page__team-name">{{ teamName }}</h2>
      <JerseyGrid :jerseys="jerseys" :selected="selected"
        :colors="jerseyColors" :aria-label="jerseyGridLabel"
        @toggle="toggleJersey" />
      <button class="see-all-btn focus-ring" @click="$emit('seeAll')">
        See All <ChevronDownIcon :size="16" :aria-hidden="true" />
      </button>
    </main>
    <footer class="onboarding-page__footer">
      <AppButton :disabled="selected.length === 0"
        @click="$emit('finish')">
        {{ selected.length > 0 ? \`Continue (\${selected.length} selected)\` : 'Select players to continue' }}
      </AppButton>
    </footer>
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  appName?:           string
  title?:             string
  description?:       string
  teamName?:          string
  jerseys?:           (string | number)[]
  selected?:          (string | number)[]
  jerseyColors?:      Record<string | number, string>
  jerseyGridLabel?:   string
}>()
withDefaults(props, {
  appName: 'Pixellot',
  title: 'Select the players you want to follow',
  description: 'To personalize your experience, choose the player\\'s jersey number you want to follow.',
  teamName: 'Maccabi Kiryat Gat',
  jerseys: () => [1, 2, 3, 4, 5, 6, 7, 8],
  selected: () => [],
  jerseyColors: () => ({}),
  jerseyGridLabel: 'Select player jersey numbers',
})
defineEmits<{ cancel: []; finish: []; seeAll: [] }>()

const toggleJersey = (num: string | number) => {
  console.log('Jersey toggled:', num)
}
<\/script>

<style scoped>
.onboarding-page {
  display: flex; flex-direction: column; min-height: 100vh;
  background: var(--color-white, #FFFFFF);
  font-family: 'Red Hat Display', sans-serif;
}
.onboarding-page__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px; border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
  background: var(--color-white, #FFFFFF);
}
.onboarding-page__logo {
  height: 32px; flex-shrink: 0;
}
.onboarding-page__close {
  background: transparent; border: none; cursor: pointer;
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  font-weight: 500; color: var(--color-dark-text, #161616);
  padding: 8px 12px; border-radius: 8px; outline: none;
  transition: all 0.15s;
}
.onboarding-page__close:hover {
  background: var(--color-gray-100, #EDEDED);
}
.onboarding-page__close:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.onboarding-page__content {
  flex: 1; padding: 32px 16px; max-width: 100%; margin: 0 auto;
  width: 100%;
}
.onboarding-page__title {
  margin: 0 0 12px 0; font-size: 24px; font-weight: 700;
  color: var(--color-dark-text, #161616);
}
.onboarding-page__description {
  margin: 0 0 24px 0; font-size: 15px; font-weight: 400;
  color: var(--color-gray-500, #6C6C6C); line-height: 1.5;
}
.onboarding-page__team-name {
  margin: 24px 0 12px 0; font-size: 18px; font-weight: 600;
  color: var(--color-dark-text, #161616);
}
.see-all-btn {
  display: flex; align-items: center; justify-content: center;
  gap: 8px; width: 100%; height: 40px; margin: 16px 0;
  background: var(--color-gray-100, #EDEDED);
  border: none; border-radius: 20px;
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  font-weight: 500; color: var(--color-dark-text, #161616);
  cursor: pointer; outline: none; transition: all 0.15s;
}
.see-all-btn:hover {
  background: var(--color-gray-200, #C7CBD0);
}
.see-all-btn:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.onboarding-page__footer {
  padding: 16px; border-top: 1px solid var(--color-gray-200, #C7CBD0);
  background: var(--color-white, #FFFFFF); flex-shrink: 0;
}

@media (prefers-color-scheme: dark) {
  .onboarding-page {
    background: var(--color-white-dark, #1A1A1A);
  }
  .onboarding-page__header {
    border-bottom-color: var(--color-gray-300-dark, #555555);
    background: var(--color-white-dark, #1A1A1A);
  }
  .onboarding-page__close {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .onboarding-page__close:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .onboarding-page__title,
  .onboarding-page__team-name {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .onboarding-page__description {
    color: var(--color-gray-400-dark, #888888);
  }
  .see-all-btn {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .see-all-btn:hover {
    background: var(--color-gray-200-dark, #444444);
  }
  .onboarding-page__footer {
    border-top-color: var(--color-gray-300-dark, #555555);
    background: var(--color-white-dark, #1A1A1A);
  }
}
</style>`;P.projectStructure=`components/
\u251C\u2500\u2500 atoms/
\u2502   \u251C\u2500\u2500 AppInput.vue             \u2190 text input with validation, aria-invalid
\u2502   \u251C\u2500\u2500 AppSelect.vue            \u2190 dropdown select with chevron
\u2502   \u251C\u2500\u2500 AppButton.vue            \u2190 7 variants \xD7 3 sizes \xD7 4 states
\u2502   \u251C\u2500\u2500 AppBadge.vue             \u2190 live | premium | free | claimed | highlights
\u2502   \u251C\u2500\u2500 AppTabs.vue              \u2190 pill | underline + accentColor (team color)
\u2502   \u251C\u2500\u2500 AppDivider.vue           \u2190 horizontal divider with optional text
\u2502   \u251C\u2500\u2500 AppLink.vue              \u2190 inline link with hover underline
\u2502   \u251C\u2500\u2500 TeamRow.vue              \u2190 shared: name, score, isWinner, logoSize
\u2502   \u251C\u2500\u2500 LockSvg.vue              \u2190 unified premium lock icon (size prop)
\u2502   \u2514\u2500\u2500 BackButton.vue           \u2190 navigation back arrow
\u251C\u2500\u2500 cards/
\u2502   \u251C\u2500\u2500 LiveGameCard.vue         \u2190 uses TeamRow
\u2502   \u251C\u2500\u2500 GameResultCard.vue       \u2190 uses TeamRow + HighlightsBadge
\u2502   \u251C\u2500\u2500 HighlightCard.vue        \u2190 vertical video card with emoji title/date/lock
\u2502   \u251C\u2500\u2500 ScoreCard.vue
\u2502   \u2514\u2500\u2500 ProductCard.vue
\u251C\u2500\u2500 media/
\u2502   \u251C\u2500\u2500 VideoThumbnail.vue       \u2190 landscape | vertical \xD7 locked | free
\u2502   \u2514\u2500\u2500 VideoTypeChips.vue
\u251C\u2500\u2500 stats/
\u2502   \u251C\u2500\u2500 TeamStatsBar.vue
\u2502   \u251C\u2500\u2500 GameLeaders.vue
\u2502   \u251C\u2500\u2500 PlayerStatsTable.vue
\u2502   \u251C\u2500\u2500 StatsGrid.vue
\u2502   \u2514\u2500\u2500 SeasonStatsRow.vue
\u251C\u2500\u2500 layout/
\u2502   \u251C\u2500\u2500 MainTopBar.vue           \u2190 sticky header with search + notifications
\u2502   \u251C\u2500\u2500 SectionHeader.vue
\u2502   \u251C\u2500\u2500 AdBanner.vue             \u2190 auto-rotating carousel with pagination dots
\u2502   \u251C\u2500\u2500 NotificationCenter.vue   \u2190 dropdown with jersey avatar items
\u2502   \u251C\u2500\u2500 ProfileSidebar.vue       \u2190 right-slide drawer (role="dialog") with menu
\u2502   \u251C\u2500\u2500 UserAvatar.vue           \u2190 initials circle
\u2502   \u251C\u2500\u2500 ClaimedPlayerCard.vue    \u2190 player info card (sidebar)
\u2502   \u251C\u2500\u2500 MenuListItem.vue         \u2190 nav item with chevron/badge
\u2502   \u251C\u2500\u2500 FollowedPlayersSection.vue \u2190 team-tabbed player highlights
\u2502   \u2514\u2500\u2500 PaywallOverlay.vue       \u2190 shared blur + lock + CTA overlay
\u251C\u2500\u2500 sharing/
\u2502   \u251C\u2500\u2500 VideoActionBar.vue       \u2190 views + download / share / bookmark
\u2502   \u2514\u2500\u2500 ShareCurtain.vue         \u2190 bottom-sheet (role="dialog") with 6 social channels
\u251C\u2500\u2500 pages/
\u2502   \u251C\u2500\u2500 OnboardingPage.vue       \u2190 full-screen onboarding flow
\u2502   \u251C\u2500\u2500 BrandHero.vue            \u2190 hero banner with logo
\u2502   \u251C\u2500\u2500 EmptyState.vue           \u2190 configurable empty state with icon
\u2502   \u251C\u2500\u2500 ErrorState.vue           \u2190 error display with retry action
\u2502   \u2514\u2500\u2500 OfflineBanner.vue        \u2190 connectivity warning (role="alert")
\u251C\u2500\u2500 payment/
\u2502   \u251C\u2500\u2500 PaymentModal.vue
\u2502   \u251C\u2500\u2500 UpgradeBanner.vue
\u2502   \u2514\u2500\u2500 InfoAlert.vue
\u251C\u2500\u2500 jersey/
\u2502   \u251C\u2500\u2500 JerseyItem.vue           \u2190 selectable jersey with checkmark
\u2502   \u2514\u2500\u2500 JerseyGrid.vue           \u2190 responsive jersey selector grid
\u2514\u2500\u2500 tokens/
    \u2514\u2500\u2500 index.ts                 \u2190 lightColors, darkColors, typography, radii, spacing, sizes, strokes, breakpoints`;P.adBanner=`<template>
  <div class="ad-banner" role="region" :aria-label="ariaLabel">
    <div class="ad-banner__track" :style="{ transform: \`translateX(-\${active * 100}%)\` }">
      <slot />
    </div>
    <div class="ad-banner__dots" role="tablist" aria-label="Ad carousel pagination">
      <button v-for="(_, i) in count" :key="i"
        :class="['ad-banner__dot', { 'ad-banner__dot--active': i === active }]"
        role="tab"
        :aria-selected="i === active"
        :aria-label="\`Go to slide \${i + 1}\`""
        @click="$emit('update:active', i)" />
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  active?: number
  count?:  number
  ariaLabel?: string
}>()
withDefaults(props, {
  active: 0,
  count: 2,
  ariaLabel: 'Advertisement carousel',
})
defineEmits<{ 'update:active': [index: number] }>()
<\/script>

<style scoped>
.ad-banner {
  position: relative; width: 100%; overflow: hidden;
  border-radius: 16px; background: var(--color-gray-100, #EDEDED);
}
.ad-banner__track {
  display: flex; width: 100%; transition: transform 0.3s ease-in-out;
}
.ad-banner__track > * {
  min-width: 100%; flex-shrink: 0;
}
.ad-banner__dots {
  position: absolute; bottom: 12px; left: 50%;
  transform: translateX(-50%); display: flex;
  gap: 8px; z-index: 10;
}
.ad-banner__dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none; cursor: pointer; outline: none;
  transition: all 0.2s;
}
.ad-banner__dot:hover {
  background: rgba(255, 255, 255, 0.75);
}
.ad-banner__dot:focus-visible {
  outline: 2px solid #FFFFFF; outline-offset: 2px;
}
.ad-banner__dot--active {
  background: #FFFFFF; width: 24px; border-radius: 4px;
}

@media (prefers-color-scheme: dark) {
  .ad-banner {
    background: var(--color-gray-100-dark, #333333);
  }
}
</style>`;P.notificationCenter=`<template>
  <div class="notification-center" role="region" aria-labelledby="notif-title">
    <div class="notification-center__header">
      <h3 id="notif-title" class="notification-center__title">Notification Center</h3>
      <button class="notification-center__clear focus-ring"
        aria-label="Clear all notifications"
        @click="$emit('clearAll')">
        Clear all
      </button>
    </div>
    <div v-if="items.length === 0" class="notification-center__empty">
      No notifications
    </div>
    <div v-else class="notification-center__list" role="list">
      <button v-for="item in items" :key="item.id"
        class="notification-center__item focus-ring" role="listitem"
        :aria-label="\`Notification from \${item.text}\`""
        @click="$emit('select', item)" @keydown.enter="$emit('select', item)">
        <JerseyAvatar :number="item.jerseyNumber" :color="item.jerseyColor" />
        <span class="notification-center__text">{{ item.text }}</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

interface NotificationItem {
  id: string | number
  text: string
  jerseyNumber: string | number
  jerseyColor: string
}
const props = defineProps<{
  items?: NotificationItem[]
}>()
withDefaults(props, { items: () => [] })
defineEmits<{ clearAll: []; select: [item: NotificationItem] }>()
<\/script>

<style scoped>
.notification-center {
  background: var(--color-white, #FFFFFF); border-radius: 12px;
  overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.notification-center__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px; border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
}
.notification-center__title {
  margin: 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 16px; font-weight: 600;
  color: var(--color-dark-text, #161616);
}
.notification-center__clear {
  background: transparent; border: none; cursor: pointer;
  font-family: 'Red Hat Display', sans-serif; font-size: 13px;
  font-weight: 500; color: var(--color-link-blue, #2563EB);
  padding: 4px 8px; border-radius: 4px; outline: none;
  transition: all 0.15s;
}
.notification-center__clear:hover {
  background: var(--color-gray-100, #EDEDED);
}
.notification-center__clear:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.notification-center__list {
  max-height: 400px; overflow-y: auto;
}
.notification-center__empty {
  padding: 32px 16px; text-align: center;
  font-family: 'Red Hat Display', sans-serif; font-size: 14px;
  color: var(--color-gray-500, #6C6C6C);
}
.notification-center__item {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px; border: none; background: transparent;
  cursor: pointer; width: 100%; text-align: left;
  transition: all 0.15s; outline: none;
}
.notification-center__item:hover {
  background: var(--color-gray-100, #EDEDED);
}
.notification-center__item:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: -2px;
}
.notification-center__item:not(:last-child) {
  border-bottom: 1px solid var(--color-gray-100, #EDEDED);
}
.notification-center__text {
  flex: 1; font-family: 'Red Hat Display', sans-serif;
  font-size: 14px; color: var(--color-dark-text, #161616);
}

@media (prefers-color-scheme: dark) {
  .notification-center {
    background: var(--color-white-dark, #1A1A1A);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
  .notification-center__header {
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .notification-center__title {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .notification-center__clear {
    color: var(--color-link-blue-dark, #60A5FA);
  }
  .notification-center__clear:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .notification-center__empty {
    color: var(--color-gray-400-dark, #888888);
  }
  .notification-center__item:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .notification-center__item:not(:last-child) {
    border-bottom-color: var(--color-gray-100-dark, #333333);
  }
  .notification-center__text {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
}
</style>`;P.profileSidebar=`<template>
  <Teleport to="body">
    <div v-if="open" class="profile-sidebar__backdrop"
      role="presentation"
      @click="$emit('close')" />
    <Transition name="slide-right">
      <div v-if="open" class="profile-sidebar" role="dialog"
        aria-modal="true" aria-label="Profile menu"
        @keydown.escape="$emit('close')">
        <div class="profile-sidebar__header">
          <UserAvatar :initials="initials" :aria-hidden="true" />
          <span id="profile-name" class="profile-sidebar__name">{{ name }}</span>
          <button class="profile-sidebar__close focus-ring"
            aria-label="Close profile menu" @click="$emit('close')">
            <XIcon :size="20" :aria-hidden="true" />
          </button>
        </div>
        <ClaimedPlayerCard v-if="claimedPlayer" v-bind="claimedPlayer"
          role="region" aria-label="Claimed player information" />
        <nav class="profile-sidebar__menu" aria-label="Profile menu">
          <MenuItem label="Following" :badge="followingCount"
            @click="$emit('navigate','following')" />
          <MenuItem label="Language" @click="$emit('navigate','language')" />
          <MenuItem label="My Account" @click="$emit('navigate','account')" />
          <MenuItem label="Saved Videos" @click="$emit('navigate','saved')" />
          <MenuItem label="My Highlights" @click="$emit('navigate','highlights')" />
          <MenuItem label="Claim Player" variant="link"
            @click="$emit('navigate','claim')" />
        </nav>
        <button class="profile-sidebar__logout focus-ring"
          @click="$emit('logout')">Log Out</button>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

interface ClaimedPlayer {
  name?: string
  number?: string | number
  team?: string
}
const props = defineProps<{
  open?: boolean
  name?: string
  initials?: string
  followingCount?: number
  claimedPlayer?: ClaimedPlayer | null
}>()
withDefaults(props, {
  open: false,
  name: 'User',
  initials: 'BR',
  followingCount: 0,
  claimedPlayer: null,
})
defineEmits<{ close: []; navigate: [section: string]; logout: [] }>()
<\/script>

<style scoped>
.profile-sidebar__backdrop {
  position: fixed; inset: 0;
  background: var(--color-overlay, rgba(0,0,0,0.7));
  z-index: 100; animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.profile-sidebar {
  position: fixed; top: 0; right: 0; bottom: 0;
  width: 280px; background: var(--color-white, #FFFFFF);
  border-left: 1px solid var(--color-gray-200, #C7CBD0);
  z-index: 101; display: flex; flex-direction: column;
  animation: slideRight 0.3s ease-out;
}
@keyframes slideRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.profile-sidebar__header {
  display: flex; align-items: center; gap: 12px;
  padding: 16px; border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
}
.profile-sidebar__name {
  flex: 1; font-family: 'Red Hat Display', sans-serif;
  font-size: 16px; font-weight: 600;
  color: var(--color-dark-text, #161616);
}
.profile-sidebar__close {
  background: transparent; border: none; cursor: pointer;
  color: var(--color-gray-500, #6C6C6C); display: flex;
  border-radius: 4px; outline: none; transition: all 0.15s;
}
.profile-sidebar__close:hover {
  background: var(--color-gray-100, #EDEDED);
}
.profile-sidebar__close:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.profile-sidebar__menu {
  flex: 1; overflow-y: auto; padding: 12px 0;
  border-bottom: 1px solid var(--color-gray-200, #C7CBD0);
}
.profile-sidebar__logout {
  width: calc(100% - 32px); margin: 12px 16px;
  height: 40px; background: var(--color-gray-100, #EDEDED);
  border: none; border-radius: 20px;
  font-family: 'Red Hat Display', sans-serif; font-size: 15px;
  font-weight: 600; color: var(--color-dark-text, #161616);
  cursor: pointer; outline: none; transition: all 0.15s;
}
.profile-sidebar__logout:hover {
  background: var(--color-gray-200, #C7CBD0);
}
.profile-sidebar__logout:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .profile-sidebar {
    background: var(--color-white-dark, #1A1A1A);
    border-left-color: var(--color-gray-300-dark, #555555);
  }
  .profile-sidebar__header {
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .profile-sidebar__name {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .profile-sidebar__close {
    color: var(--color-gray-400-dark, #888888);
  }
  .profile-sidebar__close:hover {
    background: var(--color-gray-100-dark, #333333);
  }
  .profile-sidebar__menu {
    border-bottom-color: var(--color-gray-300-dark, #555555);
  }
  .profile-sidebar__logout {
    background: var(--color-gray-100-dark, #333333);
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .profile-sidebar__logout:hover {
    background: var(--color-gray-200-dark, #444444);
  }
}

@media (max-width: 480px) {
  .profile-sidebar {
    width: 100%;
  }
}
</style>`;P.highlightCard=`<template>
  <button class="highlight-card"
    :aria-label="ariaLabel"
    @click="$emit('click')" @keydown.enter="$emit('click')">
    <img :src="thumbnail" :alt="title"
      class="highlight-card__img" />
    <span class="highlight-card__duration" aria-label="Video duration">
      {{ duration }}
    </span>
    <div v-if="locked" class="highlight-card__lock"
      role="img" aria-label="This video is locked">
      <LockSvg :size="11" :aria-hidden="true" />
    </div>
    <div class="highlight-card__overlay">
      <span class="highlight-card__title">{{ title }}</span>
      <span class="highlight-card__date">{{ date }}</span>
    </div>
  </button>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  thumbnail?: string
  duration?: string
  title?: string
  date?: string
  locked?: boolean
  ariaLabel?: string
}>()
withDefaults(props, {
  thumbnail: '',
  duration: '0:00',
  title: 'Highlight',
  date: '',
  locked: true,
})
defineEmits<{ click: [] }>()
const computedAriaLabel = computed(() =>
  props.ariaLabel || \`\${props.title}, \${props.date}\${props.locked ? ', locked' : ''}\`
)
<\/script>

<style scoped>
.highlight-card {
  position: relative; width: 100%; aspect-ratio: 9 / 16;
  border: none; border-radius: 12px; overflow: hidden;
  cursor: pointer; display: block; background: transparent;
  outline: none; transition: all 0.2s; padding: 0;
}
.highlight-card:hover {
  transform: scale(0.98);
}
.highlight-card:focus-visible {
  outline: 2px solid var(--color-primary, #116DFF); outline-offset: 2px;
}
.highlight-card__img {
  width: 100%; height: 100%; object-fit: cover;
  display: block;
}
.highlight-card__duration {
  position: absolute; top: 8px; left: 8px;
  background: rgba(0, 0, 0, 0.6); color: #FFFFFF;
  font-family: 'Red Hat Display', sans-serif; font-size: 11px;
  font-weight: 600; padding: 4px 8px; border-radius: 4px;
}
.highlight-card__lock {
  position: absolute; top: 8px; right: 8px;
  width: 24px; height: 24px; border-radius: 50%;
  background: var(--color-premium-amber, #E7A610);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.highlight-card__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 12px; color: #FFFFFF; pointer-events: none;
}
.highlight-card__title {
  display: block; font-family: 'Red Hat Display', sans-serif;
  font-size: 13px; font-weight: 600; margin-bottom: 4px;
  line-height: 1.2;
}
.highlight-card__date {
  display: block; font-family: 'Red Hat Display', sans-serif;
  font-size: 11px; font-weight: 400; opacity: 0.9;
}

@media (prefers-color-scheme: dark) {
  .highlight-card__duration {
    background: rgba(0, 0, 0, 0.8);
  }
  .highlight-card__lock {
    background: var(--color-premium-hover-dark, #F5B800);
  }
}
</style>`;P.brandHero=`<template>
  <section class="brand-hero" :style="heroStyle" role="banner">
    <slot>
      <PixellotLogo :size="logoSize" aria-label="Pixellot logo" />
    </slot>
  </section>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  primaryColor?: string
  logoSize?:     number
  height?:       number
  ariaLabel?:    string
}>()
withDefaults(props, {
  primaryColor: '#1A3B8A',
  logoSize: 80,
  height: 340,
  ariaLabel: 'Hero banner',
})

const darkerColor = computed(() => {
  const hex = props.primaryColor!.replace('#', '')
  const r = Math.max(0, Math.round(parseInt(hex.substring(0, 2), 16) * 0.7))
  const g = Math.max(0, Math.round(parseInt(hex.substring(2, 4), 16) * 0.7))
  const b = Math.max(0, Math.round(parseInt(hex.substring(4, 6), 16) * 0.7))
  return \`rgb(\${r},\${g},\${b})\`
})

const heroStyle = computed(() => ({
  width: '100%',
  height: props.height + 'px',
  background: \`linear-gradient(180deg, \${props.primaryColor} 0%, \${darkerColor.value} 100%)\`,
  borderRadius: '0 0 32px 32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
<\/script>

<style scoped>
.brand-hero {
  position: relative; overflow: hidden;
}
</style>`;P.emptyState=`<template>
  <section class="empty-state" role="status"
    :aria-label="ariaLabel || title">
    <div class="empty-state__icon" aria-hidden="true">
      <component :is="iconComponent" :size="28"
        :color="iconColor" />
    </div>
    <h3 class="empty-state__title">{{ title }}</h3>
    <p v-if="subtitle" class="empty-state__subtitle">{{ subtitle }}</p>
    <AppButton v-if="cta" variant="primary" size="md"
      :fullWidth="false" @click="$emit('action')">
      {{ cta }}
    </AppButton>
  </section>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  icon?:      string
  title?:     string
  subtitle?:  string
  cta?:       string | null
  preset?:    string | null
  ariaLabel?: string
  iconColor?: string
}>()
withDefaults(props, {
  icon: 'search',
  title: 'No results',
  subtitle: '',
  cta: null,
  preset: null,
  iconColor: '#979797',
})
defineEmits<{ action: [] }>()

const iconComponent = computed(() => {
  const icons: Record<string, string> = {
    search: 'SearchIcon',
    empty: 'InboxIcon',
    error: 'AlertCircleIcon',
    lock: 'LockIcon',
  }
  return icons[props.icon || 'search'] || 'SearchIcon'
})
<\/script>

<style scoped>
.empty-state {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; padding: 48px 24px; text-align: center;
  min-height: 300px; background: transparent;
}
.empty-state__icon {
  margin-bottom: 24px; display: flex; align-items: center;
  justify-content: center;
}
.empty-state__title {
  margin: 0 0 12px 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 18px; font-weight: 600;
  color: var(--color-dark-text, #161616);
}
.empty-state__subtitle {
  margin: 0 0 24px 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 14px; font-weight: 400;
  color: var(--color-gray-500, #6C6C6C); max-width: 400px;
}

@media (prefers-color-scheme: dark) {
  .empty-state__title {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .empty-state__subtitle {
    color: var(--color-gray-400-dark, #888888);
  }
}
</style>`;P.errorState=`<template>
  <section class="error-state" role="alert"
    :aria-label="ariaLabel || title">
    <div class="error-state__icon" aria-hidden="true">
      <XIcon :size="28" color="var(--color-error-red, #EF4444)" />
    </div>
    <h3 class="error-state__title">{{ title }}</h3>
    <p v-if="subtitle" class="error-state__subtitle">{{ subtitle }}</p>
    <AppButton :variant="variant === 'auth' ? 'primary' : 'muted'" size="md"
      :fullWidth="false" @click="$emit('retry')">
      {{ buttonLabel }}
    </AppButton>
  </section>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  variant?:    'generic' | 'network' | 'timeout' | 'video' | 'data' | 'auth'
  title?:      string | null
  subtitle?:   string | null
  ariaLabel?:  string
}>()
withDefaults(props, {
  variant: 'generic',
  title: null,
  subtitle: null,
})
defineEmits<{ retry: [] }>()

const defaultTitles: Record<string, string> = {
  generic: 'Something went wrong',
  network: 'Network error',
  timeout: 'Connection timeout',
  video: 'Video unavailable',
  data: 'Failed to load data',
  auth: 'Sign in required',
}

const defaultSubtitles: Record<string, string> = {
  generic: 'Please try again',
  network: 'Check your connection and try again',
  timeout: 'Your connection timed out',
  video: 'This video is not available',
  data: 'Unable to load the requested content',
  auth: 'You need to sign in to continue',
}

const displayTitle = computed(() =>
  props.title || defaultTitles[props.variant || 'generic'] || 'Something went wrong'
)

const displaySubtitle = computed(() =>
  props.subtitle || defaultSubtitles[props.variant || 'generic'] || ''
)

const buttonLabel = computed(() =>
  props.variant === 'auth' ? 'Sign In' : 'Try Again'
)
<\/script>

<style scoped>
.error-state {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; padding: 48px 24px; text-align: center;
  min-height: 300px; background: transparent;
}
.error-state__icon {
  margin-bottom: 24px; display: flex; align-items: center;
  justify-content: center;
}
.error-state__title {
  margin: 0 0 12px 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 18px; font-weight: 600;
  color: var(--color-dark-text, #161616);
}
.error-state__subtitle {
  margin: 0 0 24px 0; font-family: 'Red Hat Display', sans-serif;
  font-size: 14px; font-weight: 400;
  color: var(--color-gray-500, #6C6C6C); max-width: 400px;
}

@media (prefers-color-scheme: dark) {
  .error-state__title {
    color: var(--color-dark-text-dark, #E8E8E8);
  }
  .error-state__subtitle {
    color: var(--color-gray-400-dark, #888888);
  }
}
</style>`;P.offlineBanner=`<template>
  <div class="offline-banner" role="alert"
    aria-label="Offline status notification">
    <div class="offline-banner__dot" aria-hidden="true" />
    <div class="offline-banner__text">
      <span class="offline-banner__title">{{ title }}</span>
      <span class="offline-banner__subtitle">{{ subtitle }}</span>
    </div>
    <button class="offline-banner__retry focus-ring"
      @click="$emit('retry')">{{ buttonLabel }}</button>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  title?:       string
  subtitle?:    string
  buttonLabel?: string
}>()
withDefaults(props, {
  title: 'You\\'re offline',
  subtitle: 'Check your connection and try again',
  buttonLabel: 'Retry',
})
defineEmits<{ retry: [] }>()
<\/script>

<style scoped>
.offline-banner {
  display: flex; align-items: center; gap: 12px;
  background: var(--color-error-red, #EF4444);
  color: #FFFFFF; padding: 12px 16px; border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.offline-banner__dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #FFFFFF; flex-shrink: 0;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.offline-banner__text {
  flex: 1; display: flex; flex-direction: column; gap: 2px;
}
.offline-banner__title {
  font-family: 'Red Hat Display', sans-serif; font-size: 13px;
  font-weight: 600; display: block;
}
.offline-banner__subtitle {
  font-family: 'Red Hat Display', sans-serif; font-size: 11px;
  font-weight: 400; display: block; opacity: 0.95;
}
.offline-banner__retry {
  background: rgba(255, 255, 255, 0.2); border: none;
  color: #FFFFFF; font-family: 'Red Hat Display', sans-serif;
  font-size: 12px; font-weight: 600; padding: 6px 12px;
  border-radius: 6px; cursor: pointer; outline: none;
  transition: all 0.15s; flex-shrink: 0;
}
.offline-banner__retry:hover {
  background: rgba(255, 255, 255, 0.3);
}
.offline-banner__retry:focus-visible {
  outline: 2px solid #FFFFFF; outline-offset: 2px;
}

@media (prefers-color-scheme: dark) {
  .offline-banner {
    background: var(--color-error-red-dark, #FF6B6B);
  }
}
</style>`;P.skeletonBlock=`<template>
  <div class="skeleton-block" role="status" aria-busy="true" aria-label="Content loading..." />
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  width?:       number|string
  height?:      number|string
  borderRadius? : number
}>()
withDefaults(props, {
  width: '100%',
  height: 16,
  borderRadius: 4,
})

const blockStyle = computed(() => ({
  width: typeof props.width === 'number' ? props.width + 'px' : props.width,
  height: typeof props.height === 'number' ? props.height + 'px' : props.height,
  borderRadius: props.borderRadius + 'px',
  background: 'linear-gradient(90deg, var(--color-gray-100, #EDEDED) 25%, var(--color-gray-50, #F5F5F5) 50%, var(--color-gray-100, #EDEDED) 75%)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 1.5s infinite ease-in-out',
}))
<\/script>

<style scoped>
.skeleton-block {
  display: block;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-color-scheme: dark) {
  .skeleton-block {
    background: linear-gradient(90deg, var(--color-gray-100-dark, #333333) 25%, var(--color-gray-50-dark, #262626) 50%, var(--color-gray-100-dark, #333333) 75%) !important;
  }
}
</style>`;P.skeletonCard=`<template>
  <div class="skeleton-card" role="status" aria-busy="true" aria-label="Card loading...">
    <div class="skeleton-card__image" />
    <div class="skeleton-card__content">
      <div class="skeleton-card__title" />
      <div class="skeleton-card__line" />
      <div class="skeleton-card__line" style="width: 90%" />
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue
<\/script>

<style scoped>
.skeleton-card {
  background: var(--color-white, #FFFFFF);
  border: 1px solid var(--color-gray-100, #EDEDED);
  border-radius: 16px;
  overflow: hidden;
}

.skeleton-card__image {
  width: 100%; height: 180px;
  background: linear-gradient(90deg, var(--color-gray-100, #EDEDED) 25%, var(--color-gray-50, #F5F5F5) 50%, var(--color-gray-100, #EDEDED) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
}

.skeleton-card__content {
  padding: 12px; display: flex; flex-direction: column; gap: 8px;
}

.skeleton-card__title {
  height: 20px; width: 80%;
  background: linear-gradient(90deg, var(--color-gray-100, #EDEDED) 25%, var(--color-gray-50, #F5F5F5) 50%, var(--color-gray-100, #EDEDED) 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite ease-in-out;
}

.skeleton-card__line {
  height: 16px; width: 100%;
  background: linear-gradient(90deg, var(--color-gray-100, #EDEDED) 25%, var(--color-gray-50, #F5F5F5) 50%, var(--color-gray-100, #EDEDED) 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite ease-in-out;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-color-scheme: dark) {
  .skeleton-card {
    background: var(--color-white-dark, #1A1A1A);
    border-color: var(--color-gray-100-dark, #333333);
  }

  .skeleton-card__image,
  .skeleton-card__title,
  .skeleton-card__line {
    background: linear-gradient(90deg, var(--color-gray-100-dark, #333333) 25%, var(--color-gray-50-dark, #262626) 50%, var(--color-gray-100-dark, #333333) 75%) !important;
  }
}
</style>`;P.skeletonInput=`<template>
  <div class="skeleton-input" role="status" aria-busy="true" aria-label="Input loading..." />
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue
<\/script>

<style scoped>
.skeleton-input {
  width: 100%; height: 46px;
  background: linear-gradient(90deg, var(--color-gray-100, #EDEDED) 25%, var(--color-gray-50, #F5F5F5) 50%, var(--color-gray-100, #EDEDED) 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite ease-in-out;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-color-scheme: dark) {
  .skeleton-input {
    background: linear-gradient(90deg, var(--color-gray-100-dark, #333333) 25%, var(--color-gray-50-dark, #262626) 50%, var(--color-gray-100-dark, #333333) 75%) !important;
  }
}
</style>`;P.loadingSpinner=`<template>
  <div class="loading-spinner" :class="{ ['spinner--' + size]: size }"
    role="status" aria-busy="true" :aria-label="ariaLabel" />
</template>
<script setup lang="ts">
// import { ref, computed } \u2014 vue

const props = defineProps<{
  size?:       'sm' | 'md' | 'lg'
  ariaLabel?:  string
}>()
withDefaults(props, {
  size: 'md',
  ariaLabel: 'Loading...',
})
<\/script>

<style scoped>
.loading-spinner {
  display: inline-block;
  border: 3px solid var(--color-gray-100, #EDEDED);
  border-top-color: var(--color-primary, #116DFF);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner--sm {
  width: 16px; height: 16px;
}

.spinner--md {
  width: 24px; height: 24px;
}

.spinner--lg {
  width: 32px; height: 32px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
}`;var ey=F(Ie()),o=F(Y()),zv=(0,ey.createContext)("light");function hu(){let[e,a]=(0,sa.useState)("light"),[t,l]=(0,sa.useState)("overview"),[r,n]=(0,sa.useState)("signin"),[s,d]=(0,sa.useState)([]),[c,p]=(0,sa.useState)(!1),[x,m]=(0,sa.useState)(!0),[f,h]=(0,sa.useState)(""),[k,z]=(0,sa.useState)(!1),T=u=>d(s.includes(u)?s.filter(b=>b!==u):[...s,u]);(0,sa.useEffect)(()=>{let u=()=>{let b=window.innerWidth<i.breakpoints.mobile;z(b),m(!b)};return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),(0,sa.useEffect)(()=>{let u=e==="dark"?ml.white:gl.white;document.documentElement.style.background=u,document.body.style.background=u,document.documentElement.style.transition="background 0.3s ease",document.body.style.transition="background 0.3s ease"},[e]),(0,sa.useEffect)(()=>{if(!document.getElementById("ds-shimmer-style")){let u=document.createElement("style");u.id="ds-shimmer-style",u.textContent="@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }",document.head.appendChild(u)}},[]);let y=[{id:"tokens",label:"\u{1F3A8} Design Tokens"},{id:"divider-inputs",label:"\u2500\u2500 Inputs \u2500\u2500",disabled:!0},{id:"input",label:"AppInput"},{id:"select",label:"AppSelect"},{id:"divider-buttons",label:"\u2500\u2500 Buttons & Navigation \u2500\u2500",disabled:!0},{id:"button",label:"AppButton"},{id:"icons",label:"Icons"},{id:"sociallinks",label:"SocialLinks"},{id:"tabs",label:"AppTabs"},{id:"divider-badges",label:"\u2500\u2500 Badges \u2500\u2500",disabled:!0},{id:"badges",label:"AppBadge"},{id:"divider-cards",label:"\u2500\u2500 Cards \u2500\u2500",disabled:!0},{id:"livegamecard",label:"LiveGameCard"},{id:"gameresultcard",label:"GameResultCard"},{id:"highlightcard",label:"HighlightCard"},{id:"scorecard",label:"ScoreCard"},{id:"divider-video",label:"\u2500\u2500 Videos \u2500\u2500",disabled:!0},{id:"videothumbnail",label:"VideoThumbnail"},{id:"videotypechips",label:"VideoTypeChips"},{id:"divider-sharing",label:"\u2500\u2500 Sharing \u2500\u2500",disabled:!0},{id:"videoactionbar",label:"VideoActionBar"},{id:"sharecurtain",label:"ShareCurtain"},{id:"divider-athlete",label:"\u2500\u2500 Athlete Profile \u2500\u2500",disabled:!0},{id:"athleteprofilecard",label:"AthleteProfile"},{id:"divider-team",label:"\u2500\u2500 Team Profile \u2500\u2500",disabled:!0},{id:"teampage",label:"TeamPage"},{id:"divider-stats",label:"\u2500\u2500 Stats & Info \u2500\u2500",disabled:!0},{id:"teamstatsbar",label:"TeamStatsBar"},{id:"gameleaders",label:"GameLeaders"},{id:"playerstats",label:"PlayerStats"},{id:"statsgrid",label:"StatsGrid"},{id:"seasonstatsrow",label:"SeasonStatsRow"},{id:"infoalert",label:"InfoAlert"},{id:"divider-payment",label:"\u2500\u2500 Payment \u2500\u2500",disabled:!0},{id:"paymentmodal",label:"Payment Plans"},{id:"upgradebanner",label:"UpgradeBanner"},{id:"divider-avatars",label:"\u2500\u2500 Avatars & List Items \u2500\u2500",disabled:!0},{id:"teamlogo",label:"PTeamLogo"},{id:"avatar",label:"PAvatar"},{id:"playerphoto",label:"PPlayerPhoto"},{id:"playernumberbadge",label:"PlayerNumberBadge"},{id:"bellicon",label:"PBellIcon"},{id:"sectionheader",label:"PSectionHeader"},{id:"seealllink",label:"PSeeAllLink"},{id:"followingrow",label:"FollowingRow"},{id:"divider-layout",label:"\u2500\u2500 Layout & Overlays \u2500\u2500",disabled:!0},{id:"divider",label:"Divider"},{id:"searchbar",label:"SearchBar"},{id:"backbar",label:"BackBar"},{id:"accordion",label:"Accordion"},{id:"appheader",label:"AppHeader"},{id:"bottomtabbar",label:"BottomTabBar"},{id:"sidemenu",label:"SideMenu"},{id:"brandhero",label:"BrandHero"},{id:"adbanner",label:"AdBanner"},{id:"notificationcenter",label:"NotificationCenter"},{id:"profilesidebar",label:"SideMenu (Profile)"},{id:"teamfollowcard",label:"TeamFollowCard"},{id:"competitionfollowlist",label:"CompetitionFollowList"},{id:"myfollowinglist",label:"MyFollowingList"},{id:"followedplayers",label:"HomeFollowing"},{id:"footer",label:"Footer"},{id:"divider-jersey",label:"\u2500\u2500 Jersey \u2500\u2500",disabled:!0},{id:"jersey",label:"JerseyItem"},{id:"jerseygrid",label:"JerseyGrid"},{id:"divider-states",label:"\u2500\u2500 Empty & Error States \u2500\u2500",disabled:!0},{id:"emptystate",label:"EmptyState"},{id:"errorstate",label:"ErrorState"},{id:"offlinebanner",label:"OfflineBanner"},{id:"divider-loading",label:"\u2500\u2500 Loading States \u2500\u2500",disabled:!0},{id:"skeletons",label:"Skeletons & Loaders"},{id:"divider-pages",label:"\u2500\u2500 Pages \u2500\u2500",disabled:!0},{id:"auth",label:"AuthPage"},{id:"onboarding",label:"PlayerSelectPage"},{id:"homepage",label:"HomePage"},{id:"gamedetailpage",label:"GameDetailPage"}],g=()=>{let u=v;return(0,o.jsxs)("div",{style:{display:"flex",minHeight:"100vh",fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'},children:[k&&!x&&(0,o.jsx)("button",{onClick:()=>m(!0),"aria-label":"Open navigation",style:{position:"fixed",top:12,left:12,zIndex:1001,width:36,height:36,borderRadius:i.radii.thumb,background:u.white,border:`1px solid ${u.gray200}`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",outline:`2px solid ${u.primary}`,outlineOffset:2},children:(0,o.jsx)(Wt,{size:20,color:u.gray500})}),k&&x&&(0,o.jsx)("div",{onClick:()=>m(!1),style:{position:"fixed",inset:0,background:u.overlay,zIndex:999}}),(0,o.jsxs)("nav",{"aria-label":"Design system sections",style:{width:220,background:u.white,borderRight:`1px solid ${u.gray200}`,padding:`${i.spacing.lg}px 0`,flexShrink:0,position:k?"fixed":"sticky",top:0,left:0,height:"100vh",overflowY:"auto",transition:"background 0.3s ease, transform 0.25s ease",zIndex:k?1e3:"auto",transform:k&&!x?"translateX(-100%)":"translateX(0)",boxShadow:k&&x?"4px 0 16px rgba(0,0,0,0.15)":"none"},children:[(0,o.jsxs)("div",{style:{padding:`0 ${i.spacing.md2}px ${i.spacing.md2}px`,borderBottom:`1px solid ${u.gray100}`,marginBottom:i.spacing.xs2,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)(Ti,{size:30}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.body2,fontWeight:i.typography.weights.bold,color:u.darkText,transition:"color 0.3s ease"},children:"Pixellot"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.mini,color:u.gray500},children:"Design System v2"})]})]}),(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)("button",{onClick:()=>a(b=>b==="light"?"dark":"light"),"aria-label":e==="light"?"Switch to dark mode":"Switch to light mode",style:{background:"none",border:"none",cursor:"pointer",padding:i.spacing.xs,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:i.radii.sm},children:e==="light"?(0,o.jsx)(So,{size:18,color:u.gray400}):(0,o.jsx)(Co,{size:18,color:u.gray400})}),k&&(0,o.jsx)("button",{onClick:()=>m(!1),"aria-label":"Close navigation",style:{background:"none",border:"none",cursor:"pointer",padding:i.spacing.xs,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:i.radii.sm},children:(0,o.jsx)(Ca,{size:18,color:u.gray400})})]})]}),(0,o.jsx)("div",{style:{padding:"6px 10px"},children:(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)(Ua,{size:14,color:u.gray400,style:{position:"absolute",left:8,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}),(0,o.jsx)("input",{type:"text",placeholder:"Search components...",value:f,onChange:b=>h(b.target.value),"aria-label":"Search components",style:{width:"100%",height:30,paddingLeft:28,paddingRight:8,border:`1px solid ${u.gray200}`,borderRadius:i.radii.sm,background:u.gray50,color:u.darkText,fontSize:i.typography.sizes.xxs,fontFamily:C,outline:"none",boxSizing:"border-box",transition:"border-color 0.15s"}})]})}),y.filter(b=>f.trim()?b.disabled?!1:b.label.toLowerCase().includes(f.toLowerCase()):!0).map(b=>(0,o.jsx)(NavBtn,{s:b,sec:t,setSec:l,isMobile:k,setNavOpen:m},b.id))]}),(0,o.jsxs)("main",{style:{flex:1,padding:k?"16px 16px 16px 16px":"24px 32px",maxWidth:900,overflowY:"auto",paddingTop:k?56:void 0},children:[t==="overview"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{style:{fontSize:i.typography.sizes.h2,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.xs},children:"Pixellot Design System v2"}),(0,o.jsx)("p",{style:{color:u.gray500,fontSize:i.typography.sizes.xs,marginTop:i.spacing.xs,lineHeight:1.6},children:"Complete component library for the Pixellot sports platform \u2014 auth, onboarding, jersey selection, game details, team shop, and player profiles."}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:i.spacing.sm2,marginTop:i.spacing.lg},children:[{n:"44",l:"Components"},{n:"72",l:"Design Tokens"},{n:"6",l:"Page Views"}].map(b=>(0,o.jsxs)("div",{style:{background:u.white,border:`1px solid ${u.gray100}`,borderRadius:i.radii.badge,padding:`${i.spacing.md2}px ${i.spacing.lg}px`,textAlign:"center"},children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxl,fontWeight:i.typography.weights.extraBold,color:u.primary},children:b.n}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray500,marginTop:i.spacing.xxs},children:b.l})]},b.l))}),(0,o.jsx)("div",{style:{height:i.spacing.xxl}}),(0,o.jsx)(Card,{title:"Project Structure",codeTitle:"File Tree",code:P.projectStructure,children:(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:i.spacing.xs2,fontSize:i.typography.sizes.caption},children:["AppInput","AppSelect","AppButton","AppBadge","AppTabs","AppDivider","AppLink","TeamRow","LockSvg","BackButton","MainTopBar","SectionHeader","PaywallOverlay","LiveGameCard","GameResultCard","ScoreCard","ProductCard","VideoThumbnail","VideoTypeChips","VideoActionBar","ShareCurtain","TeamStatsBar","GameLeaders","PlayerStatsTable","StatsGrid","SeasonStatsRow","PaymentModal","UpgradeBanner","InfoAlert","JerseyItem","JerseyGrid"].map(b=>(0,o.jsxs)("div",{style:{padding:"6px 10px",background:u.gray50,borderRadius:i.radii.xs,fontFamily:"monospace",color:u.gray500},children:["<",b," />"]},b))})})]}),t==="tokens"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"Design Tokens"}),(0,o.jsx)(Card,{title:"Colors",codeTitle:"tokens/index.ts",code:P.tokens,children:[{label:"Primary",keys:["primary","primaryHover","primaryActive"]},{label:"Neutrals",keys:["white","black","darkText"]},{label:"Grays",keys:["gray50","gray100","gray200","gray300","gray400","gray500"]},{label:"Overlays",keys:["grayOverlay","grayOverlayHover","overlay"]},{label:"Brand",keys:["heroBg","accent","jerseyRed","jerseyStroke"]},{label:"Premium",keys:["premiumYellow","premiumAmber","premiumHover","premiumActive","premiumDark"]},{label:"Status",keys:["successGreen","errorRed","dangerRed","liveRed","notifBadgeRed","selectedGreen","errorBg"]},{label:"Badges & Tags",keys:["freeBadgeGreen","claimedPurple","highlightsBadgeBg","highlightsBadgeText"]},{label:"Surfaces",keys:["cardBg","cardHoverBg","barTrack","dividerDark"]},{label:"Bars & Charts",keys:["barRed","barGray","highlightGray"]},{label:"Links & Info",keys:["linkBlue","infoBgPurple"]},{label:"Disabled",keys:["disabledTextOnDark"]}].map(b=>{let R=e==="dark"?ml:gl;return(0,o.jsxs)("div",{style:{marginBottom:i.spacing.lg},children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,fontWeight:i.typography.weights.bold,color:u.gray400,textTransform:"uppercase",letterSpacing:1,marginBottom:i.spacing.xs},children:b.label}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2},children:b.keys.map(w=>(0,o.jsx)(Swatch,{name:w,hex:R[w]},w))})]},b.label)})}),(0,o.jsx)(Card,{title:"Typography",desc:"Red Hat Display \u2014 Regular 400, Medium 500, Semibold 600, Bold 700",children:(0,o.jsx)(Vm,{})}),(0,o.jsx)(Card,{title:"Spacing",desc:"Consistent spacing scale consumed by all components",children:(0,o.jsx)(jm,{})}),(0,o.jsx)(Card,{title:"Sizes",desc:"Component dimensions \u2014 inputHeight, buttonSm/Md/Lg, tabHeight, chipHeight, etc.",children:(0,o.jsx)(Xm,{})}),(0,o.jsx)(Card,{title:"Radii",desc:"Border radius tokens \u2014 sm, md, lg, xl, badge, chip, pill",children:(0,o.jsx)(Ym,{})})]}),t==="input"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"AppInput"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Text input with password toggle \u2014 supports default, hover, focus, filled, error, disabled, and readOnly states"}),(0,o.jsx)(Card,{title:"Variants",code:P.appInput,codeTitle:"AppInput.vue",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.sm2},children:[(0,o.jsx)(ne,{placeholder:"Email Address...",type:"email"}),(0,o.jsx)(ne,{placeholder:"Enter password...",type:"password"}),(0,o.jsx)(ne,{placeholder:"Full Name..."}),(0,o.jsx)(ne,{placeholder:"Phone Number...",type:"tel"})]})}),(0,o.jsx)(Card,{title:"States \u2014 default / hover / focus / filled / disabled",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.md},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"default"}),(0,o.jsx)(ne,{placeholder:"Email Address...",type:"email"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"hover"}),(0,o.jsx)(ne,{placeholder:"Email Address...",type:"email",_forceState:"hover"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"focus \u2014 blue border"}),(0,o.jsx)(ne,{placeholder:"Email Address...",type:"email",_forceState:"focus"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"filled"}),(0,o.jsx)(ne,{placeholder:"Email Address...",type:"email",_forceState:"filled"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"disabled"}),(0,o.jsx)(ne,{placeholder:"Email Address...",type:"email",disabled:!0})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"readOnly"}),(0,o.jsx)(ne,{placeholder:"user@example.com",_forceState:"readOnly"})]})]})}),(0,o.jsx)(Card,{title:"Error States",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.md},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"error \u2014 red border"}),(0,o.jsx)(ne,{placeholder:"Email Address...",type:"email",error:!0})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"error + message"}),(0,o.jsx)(ne,{placeholder:"Email Address...",type:"email",error:!0,errorMsg:"Please enter a valid email address"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"error + hover"}),(0,o.jsx)(ne,{placeholder:"Email Address...",type:"email",error:!0,_forceState:"hover"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"error + focus"}),(0,o.jsx)(ne,{placeholder:"Email Address...",type:"email",error:!0,errorMsg:"Please enter a valid email address",_forceState:"focus"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"error + filled"}),(0,o.jsx)(ne,{placeholder:"Email Address...",type:"email",error:!0,errorMsg:"Please enter a valid email address",_forceState:"filled"})]})]})}),(0,o.jsx)(Card,{title:"Password + States",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.md},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"default"}),(0,o.jsx)(ne,{placeholder:"Enter password...",type:"password"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"error + message"}),(0,o.jsx)(ne,{placeholder:"Enter password...",type:"password",error:!0,errorMsg:"Password must be at least 8 characters"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"disabled"}),(0,o.jsx)(ne,{placeholder:"Enter password...",type:"password",disabled:!0})]})]})}),(0,o.jsx)(Card,{title:"Interactive Playground",desc:"Toggle props to see live state changes",children:(0,o.jsx)(InputPlayground,{})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"modelValue: string \u2014 v-model binding"}),(0,o.jsx)("div",{children:"placeholder: string \u2014 placeholder text"}),(0,o.jsx)("div",{children:'type: string \u2014 "text" | "email" | "tel" | "password"'}),(0,o.jsx)("div",{children:"error: boolean \u2014 toggles red error border"}),(0,o.jsx)("div",{children:"errorMsg: string \u2014 error message below input"}),(0,o.jsx)("div",{children:"disabled: boolean \u2014 disables input and toggle"})]})})]}),t==="select"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"AppSelect"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Dropdown select \u2014 supports default, hover, focus, error, and disabled states"}),(0,o.jsx)(Card,{title:"Variants",code:P.appSelect,codeTitle:"AppSelect.vue",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.md},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"default"}),(0,o.jsx)(Vt,{placeholder:"Age..."})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"hover"}),(0,o.jsx)(Vt,{placeholder:"Age...",_forceState:"hover"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"focus"}),(0,o.jsx)(Vt,{placeholder:"Age...",_forceState:"focus"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"error"}),(0,o.jsx)(Vt,{placeholder:"Age...",error:!0,errorMsg:"Please select your age"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:"disabled"}),(0,o.jsx)(Vt,{placeholder:"Age...",disabled:!0})]})]})})]}),t==="button"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"AppButton"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"7 variants \xD7 3 sizes \u2014 unified button component"}),(0,o.jsx)(Card,{title:"All Variants \u2014 md (default)",code:P.appButton,codeTitle:"AppButton.vue",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.sm2},children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"primary"}),(0,o.jsx)(U,{children:"Sign in"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"premium"}),(0,o.jsx)(U,{variant:"premium",children:"Buy Now"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"social"}),(0,o.jsx)(U,{variant:"social",leadingIcon:(0,o.jsx)(AppleIcon,{}),children:"Continue with Apple"}),(0,o.jsx)(U,{variant:"social",leadingIcon:(0,o.jsx)(GoogleIcon,{}),children:"Continue with Google"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"muted"}),(0,o.jsx)(U,{variant:"muted",trailingIcon:(0,o.jsx)(De,{size:16}),children:"See All"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"ghost"}),(0,o.jsx)(U,{variant:"ghost",children:"Ghost"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"link"}),(0,o.jsx)(U,{variant:"link",fullWidth:!1,children:"See all >"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"danger"}),(0,o.jsx)(U,{variant:"danger",fullWidth:!1,children:"Log Out"})]})}),(0,o.jsx)(Card,{title:"States \u2014 default / hover / pressed / disabled",children:(0,o.jsx)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.lg},children:["primary","premium","social","muted","ghost","link","danger"].map(b=>(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs2},children:b}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:i.spacing.xs2},children:[{label:"default",state:"default"},{label:"hover",state:"hover"},{label:"pressed",state:"active"},{label:"disabled",state:"disabled"}].map(({label:R,state:w})=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(U,{variant:b,size:"sm",fullWidth:!0,_forceState:w,disabled:w==="disabled",children:b==="danger"?"Log Out":b==="link"?"Link":b==="ghost"?"Ghost":b==="social"?"Apple":b==="muted"?"See All":b==="premium"?"Buy":"Sign in"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:R})]},R))})]},b))})}),(0,o.jsx)(Card,{title:"Size Comparison \u2014 sm / md / lg",children:(0,o.jsx)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.md2},children:["primary","premium","social","muted"].map(b=>(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs2},children:b}),(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.sm,alignItems:"center"},children:[(0,o.jsx)(U,{variant:b,size:"sm",fullWidth:!1,children:b==="social"?"Apple":b==="muted"?"See All":"Small"}),(0,o.jsx)(U,{variant:b,size:"md",fullWidth:!1,children:b==="social"?"Apple":b==="muted"?"See All":"Medium"}),(0,o.jsx)(U,{variant:b,size:"lg",fullWidth:!1,children:b==="social"?"Apple":b==="muted"?"See All":"Large"})]})]},b))})}),(0,o.jsx)(Card,{title:"With Icons",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.sm2},children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"leading icon"}),(0,o.jsx)(U,{variant:"social",leadingIcon:(0,o.jsx)(AppleIcon,{}),children:"Continue with Apple"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"trailing icon"}),(0,o.jsx)(U,{variant:"muted",trailingIcon:(0,o.jsx)(De,{size:16}),children:"See All"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"icon only"}),(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.sm},children:[(0,o.jsx)("button",{"aria-label":"Close",style:{width:32,height:32,minWidth:32,borderRadius:"50%",background:"transparent",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(Ca,{size:16})}),(0,o.jsx)("button",{"aria-label":"Play",style:{width:32,height:32,minWidth:32,borderRadius:"50%",background:"#f3f4f6",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(ra,{size:16,color:"#6b7280"})}),(0,o.jsx)("button",{"aria-label":"Check",style:{width:32,height:32,minWidth:32,borderRadius:"50%",background:"#3b82f6",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(Sa,{size:16,color:"#ffffff"})})]})]})}),(0,o.jsx)(Card,{title:"Width Modes",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.sm2},children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"fullWidth (default)"}),(0,o.jsx)(U,{children:"Full Width Button"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"auto width (fullWidth=false)"}),(0,o.jsx)(U,{fullWidth:!1,children:"Auto Width"})]})})]}),t==="icons"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"Icons"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"18 Lucide icons + 3 tab bar SVGs + 3 custom SVGs + 6 share channel SVGs + 2 placeholder components"}),(0,o.jsx)(Card,{title:"Lucide Icons (lucide-react)",children:(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:i.spacing.md},children:[{Icon:vl,name:"Eye"},{Icon:hl,name:"EyeOff"},{Icon:De,name:"ChevronDown"},{Icon:bo,name:"Copy"},{Icon:Sa,name:"Check"},{Icon:Ua,name:"Search"},{Icon:ra,name:"Play"},{Icon:Ca,name:"X"},{Icon:qt,name:"ArrowLeft"},{Icon:Gt,name:"Download"},{Icon:bl,name:"Upload"},{Icon:Ha,name:"Bookmark"},{Icon:yl,name:"Bell"},{Icon:Nt,name:"User"},{Icon:Co,name:"Sun"},{Icon:So,name:"Moon"},{Icon:Wt,name:"Menu"},{Icon:xl,name:"Share2"}].map(({Icon:b,name:R})=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs2,padding:i.spacing.sm},children:[(0,o.jsx)("div",{style:{width:40,height:40,borderRadius:i.radii.thumb,background:u.gray50,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(b,{size:20,color:u.darkText})}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400,textAlign:"center",lineHeight:1.2},children:R})]},R))})}),(0,o.jsx)(Card,{title:"Custom SVG Icons",children:(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:i.spacing.md},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm,padding:i.spacing.md},children:[(0,o.jsx)("div",{style:{width:48,height:48,borderRadius:i.radii.thumb,background:u.gray50,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(GoogleIcon,{})}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"GoogleIcon"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400},children:"Social auth"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm,padding:i.spacing.md},children:[(0,o.jsx)("div",{style:{width:48,height:48,borderRadius:i.radii.thumb,background:u.gray50,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(AppleIcon,{})}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"AppleIcon"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400},children:"Social auth"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm,padding:i.spacing.md},children:[(0,o.jsx)("div",{style:{width:48,height:48,borderRadius:i.radii.thumb,background:u.premiumDark,border:`${i.strokes.bold}px solid ${u.premiumYellow}`,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(LockSvg,{size:16})}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"LockSvg"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400},children:"Paywall / badges"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm,padding:i.spacing.md},children:[(0,o.jsx)("div",{style:{width:48,height:48,borderRadius:i.radii.thumb,background:u.gray50,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(ChipLockSvg,{})}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"ChipLockSvg"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400},children:"Chip prefix"})]})]})}),(0,o.jsx)(Card,{title:"BottomTabBar Icons",desc:"3 custom SVGs + Bookmark (lucide). Traced from Sales prototype. Active state fills solid, inactive is outline-only.",children:(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:i.spacing.md},children:["games","saved","following","shop"].map(b=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm,padding:i.spacing.md},children:[(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md,alignItems:"center"},children:[(0,o.jsx)("div",{style:{width:40,height:40,borderRadius:i.radii.thumb,background:u.gray50,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(_TabIcon,{icon:b,active:!1,color:u.gray400})}),(0,o.jsx)("div",{style:{width:40,height:40,borderRadius:i.radii.thumb,background:u.gray50,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(_TabIcon,{icon:b,active:!0,color:u.darkText})})]}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:b==="saved"?"Bookmark (lucide)":b.charAt(0).toUpperCase()+b.slice(1)}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400},children:"BottomTabBar"})]},b))})}),(0,o.jsx)(Card,{title:"LockSvg Sizes",children:(0,o.jsx)("div",{style:{display:"flex",gap:i.spacing.lg2,alignItems:"flex-end"},children:[{s:8,label:"8 \u2014 chip"},{s:11,label:"11 \u2014 thumbnail"},{s:12,label:"12 \u2014 banner"},{s:16,label:"16 \u2014 explorer"},{s:22,label:"22 \u2014 paywall"}].map(({s:b,label:R})=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs2},children:[(0,o.jsx)("div",{style:{width:40,height:40,borderRadius:i.radii.thumb,background:u.premiumDark,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(LockSvg,{size:b})}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400,textAlign:"center",lineHeight:1.2},children:R})]},b))})}),(0,o.jsx)(Card,{title:"Share Channel Icons",desc:"6 branded social icons used in ShareCurtain",children:(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:i.spacing.lg},children:SHARE_CHANNELS.map(b=>{let R=b.label==="Copy Link"?"CopyLinkIcon":b.label==="X"?"XLogoIcon":`${b.label}Icon`;return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm,padding:i.spacing.md},children:[(0,o.jsx)("div",{style:{width:48,height:48,borderRadius:"50%",background:b.gradient||b.color,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(b.icon,{})}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:R}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400},children:"ShareCurtain"})]},b.label)})})}),(0,o.jsx)(Card,{title:"Usage in Components",children:(0,o.jsxs)(Q,{children:[(0,o.jsxs)("div",{children:["<Eye /> <EyeOff />"," \u2192 AppInput password toggle"]}),(0,o.jsxs)("div",{children:["<ChevronDown />"," \u2192 AppSelect, See All buttons"]}),(0,o.jsxs)("div",{children:["<Copy />"," \u2192 Code snippet copy button"]}),(0,o.jsxs)("div",{children:["<Check />"," \u2192 PaymentModal, Jersey selected"]}),(0,o.jsxs)("div",{children:["<Search />"," \u2192 MainTopBar search"]}),(0,o.jsxs)("div",{children:["<Play />"," \u2192 VideoThumbnail, GameResultCard"]}),(0,o.jsxs)("div",{children:["<X />"," \u2192 Modal close"]}),(0,o.jsxs)("div",{children:["<ArrowLeft />"," \u2192 BackButton navigation"]}),(0,o.jsxs)("div",{children:["<GoogleIcon />"," \u2192 Social auth button"]}),(0,o.jsxs)("div",{children:["<AppleIcon />"," \u2192 Social auth button"]}),(0,o.jsxs)("div",{children:["<LockSvg size={8-22} />"," \u2192 Paywalls, thumbnails, banner, chips"]}),(0,o.jsxs)("div",{children:["<Download />"," \u2192 VideoActionBar download"]}),(0,o.jsxs)("div",{children:["<Upload />"," \u2192 VideoActionBar share (opens ShareCurtain)"]}),(0,o.jsxs)("div",{children:["<Bookmark />",' \u2192 VideoActionBar bookmark, BottomTabBar "Saved" tab']}),(0,o.jsxs)("div",{children:["<CopyLinkIcon />"," \u2192 ShareCurtain copy link"]}),(0,o.jsxs)("div",{children:["<FacebookIcon />"," \u2192 ShareCurtain"]}),(0,o.jsxs)("div",{children:["<XLogoIcon />"," \u2192 ShareCurtain"]}),(0,o.jsxs)("div",{children:["<WhatsAppIcon />"," \u2192 ShareCurtain"]}),(0,o.jsxs)("div",{children:["<TikTokIcon />"," \u2192 ShareCurtain"]}),(0,o.jsxs)("div",{children:["<InstagramIcon />"," \u2192 ShareCurtain"]}),(0,o.jsxs)("div",{children:["<Bell />"," \u2192 TopBar notification bell"]}),(0,o.jsxs)("div",{children:["<User />"," \u2192 ProfileSidebar fallback avatar"]}),(0,o.jsxs)("div",{children:["_TabIcon(games)"," \u2192 BottomTabBar trophy (custom SVG)"]}),(0,o.jsxs)("div",{children:["_TabIcon(following)"," \u2192 BottomTabBar heart (custom SVG)"]}),(0,o.jsxs)("div",{children:["_TabIcon(shop)"," \u2192 BottomTabBar bag with smiley (custom SVG)"]})]})}),(0,o.jsx)(Card,{title:"Placeholder Components",desc:"Deterministic placeholders for images that need real assets in production",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.lg2,alignItems:"flex-end",flexWrap:"wrap"},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)(ve,{size:40,name:"Maccabi"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400},children:"PTeamLogo"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:'name="Maccabi"'})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)(ve,{size:40,name:"Ironi"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400},children:"PTeamLogo"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:'name="Ironi"'})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)(ve,{size:40,name:"Hapoel"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400},children:"PTeamLogo"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:'name="Hapoel"'})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)(dt,{size:48,name:"B. Rogers"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400},children:"PPlayerPhoto"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"48px"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)(dt,{size:36,name:"J. Davis"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.mini,color:u.gray400},children:"PPlayerPhoto"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"36px"})]})]})})]}),t==="sociallinks"&&(0,o.jsx)(Card,{title:"SocialLinks",desc:"Monochrome social media icons \u2014 X, Facebook, Instagram, Website. Used in team profile.",children:(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:16},children:(0,o.jsx)(PSocialLinks,{})})}),t==="tabs"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"AppTabs"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"2 variants \u2014 pill, underline (with configurable accentColor per team)"}),(0,o.jsx)(Card,{title:"pill (default)",code:P.appTabs,codeTitle:"AppTabs.vue",children:(0,o.jsxs)("div",{style:{maxWidth:398},children:[(0,o.jsx)(La,{tabs:[{label:"Sign In",value:"signin"},{label:"Sign Up",value:"signup"}],active:r,onSelect:n}),(0,o.jsxs)("div",{style:{marginTop:i.spacing.sm2,fontSize:i.typography.sizes.caption,color:u.gray400},children:["Active: ",(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm},children:r})]})]})}),(0,o.jsx)(Card,{title:"pill \u2014 Interactive States",desc:"Hover and pressed states on inactive tabs",children:(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.md,maxWidth:398},children:["default","hover","active"].map(b=>(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:["Inactive tab \u2192 ",(0,o.jsx)("strong",{children:b})]}),(0,o.jsx)(La,{tabs:[{label:"Sign In",value:"signin"},{label:"Sign Up",value:"signup"}],active:"signin",onSelect:()=>{},_forceState:b})]},b))})}),(0,o.jsx)(Card,{title:"underline (default \u2014 team red)",desc:"accentColor defaults to #EF4444. Pass any team color.",children:(0,o.jsxs)("div",{style:{maxWidth:398},children:[(0,o.jsx)(La,{variant:"underline",tabs:[{label:"Schedule",value:"schedule"},{label:"Results",value:"results"},{label:"Standings",value:"standings"}],active:r,onSelect:n}),(0,o.jsx)("div",{style:{marginTop:i.spacing.sm2,fontSize:i.typography.sizes.caption,color:u.gray400},children:'accentColor="#EF4444" (default)'})]})}),(0,o.jsx)(Card,{title:"underline \u2014 Interactive States",desc:"Hover shows faint accent underline hint; pressed darkens text",children:(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.md,maxWidth:398},children:["default","hover","active"].map(b=>(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs},children:["Inactive tab \u2192 ",(0,o.jsx)("strong",{children:b})]}),(0,o.jsx)(La,{variant:"underline",tabs:[{label:"Schedule",value:"schedule"},{label:"Results",value:"results"},{label:"Standings",value:"standings"}],active:"schedule",onSelect:()=>{},_forceState:b})]},b))})}),(0,o.jsx)(Card,{title:"underline \u2014 custom team colors",desc:"Same component, different accentColor per team/client",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.lg},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs2},children:'accentColor="#116DFF" (Maccabi blue)'}),(0,o.jsx)(La,{variant:"underline",accentColor:"#116DFF",tabs:[{label:"Overview",value:"overview"},{label:"Stats",value:"stats"},{label:"Highlights",value:"highlights"}],active:r,onSelect:n})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs2},children:'accentColor="#22C55E" (Haifa green)'}),(0,o.jsx)(La,{variant:"underline",accentColor:"#22C55E",tabs:[{label:"Overview",value:"overview"},{label:"Stats",value:"stats"},{label:"Highlights",value:"highlights"}],active:r,onSelect:n})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs2},children:'accentColor="#E7A610" (premium amber)'}),(0,o.jsx)(La,{variant:"underline",accentColor:"#E7A610",tabs:[{label:"Overview",value:"overview"},{label:"Stats",value:"stats"},{label:"Highlights",value:"highlights"}],active:r,onSelect:n})]})]})}),(0,o.jsx)(Card,{title:"Disabled Tabs",desc:"Individual tabs can be disabled \u2014 grayed out, not clickable",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.lg},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs2},children:'pill \u2014 "Sign Up" disabled'}),(0,o.jsx)(La,{tabs:[{label:"Sign In",value:"signin"},{label:"Sign Up",value:"signup",disabled:!0}],active:"signin",onSelect:()=>{}})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs2},children:'underline \u2014 "Standings" disabled'}),(0,o.jsx)(La,{variant:"underline",tabs:[{label:"Schedule",value:"schedule"},{label:"Results",value:"results"},{label:"Standings",value:"standings",disabled:!0}],active:"schedule",onSelect:()=>{}})]})]})})]}),t==="divider"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"Divider"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Simple horizontal or vertical separator line. Used between sections in menus, lists, cards, and panels. Supports custom color, thickness, and spacing."}),(0,o.jsx)(Card,{title:"Default (horizontal)",desc:"1px gray200 line, full width",children:(0,o.jsxs)("div",{style:{padding:"8px 0"},children:[(0,o.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.body2,color:u.darkText,padding:"8px 0"},children:"Section A"}),(0,o.jsx)(ka,{}),(0,o.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.body2,color:u.darkText,padding:"8px 0"},children:"Section B"})]})}),(0,o.jsx)(Card,{title:"With spacing",desc:"spacing prop adds equal margin on both sides",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.body2,color:u.darkText,padding:"4px 0"},children:"Item 1"}),(0,o.jsx)(ka,{spacing:12}),(0,o.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.body2,color:u.darkText,padding:"4px 0"},children:"Item 2"}),(0,o.jsx)(ka,{spacing:12}),(0,o.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.body2,color:u.darkText,padding:"4px 0"},children:"Item 3"})]})}),(0,o.jsx)(Card,{title:"Custom color & thickness",desc:"color and thickness props for emphasis",children:(0,o.jsxs)("div",{style:{padding:"8px 0"},children:[(0,o.jsx)(ka,{color:u.gray100,thickness:1,spacing:6}),(0,o.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.xxs,color:u.gray400,textAlign:"center",margin:"4px 0"},children:"gray100 \xB7 1px (subtle)"}),(0,o.jsx)(ka,{color:u.gray200,thickness:1,spacing:6}),(0,o.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.xxs,color:u.gray400,textAlign:"center",margin:"4px 0"},children:"gray200 \xB7 1px (default)"}),(0,o.jsx)(ka,{color:u.gray300,thickness:2,spacing:6}),(0,o.jsx)("div",{style:{fontFamily:C,fontSize:i.typography.sizes.xxs,color:u.gray400,textAlign:"center",margin:"4px 0"},children:"gray300 \xB7 2px (strong)"})]})}),(0,o.jsx)(Card,{title:"Vertical",desc:"vertical={true} for side-by-side layouts",children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",height:40},children:[(0,o.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.body2,color:u.darkText},children:"Left"}),(0,o.jsx)(ka,{vertical:!0,spacing:12}),(0,o.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.body2,color:u.darkText},children:"Center"}),(0,o.jsx)(ka,{vertical:!0,spacing:12}),(0,o.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.body2,color:u.darkText},children:"Right"})]})}),(0,o.jsxs)(Card,{title:"Text divider",desc:"PTextDivider \u2014 centered label between lines (e.g. 'OR' in login forms)",children:[(0,o.jsx)("div",{style:{maxWidth:398},children:(0,o.jsx)(ko,{})}),(0,o.jsx)("div",{style:{maxWidth:398,marginTop:i.spacing.md},children:(0,o.jsx)(ko,{text:"or continue with"})})]}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"color?: string \u2014 line color (default gray200)"}),(0,o.jsx)("div",{children:"thickness?: number \u2014 line width in px (default 1)"}),(0,o.jsx)("div",{children:"spacing?: number \u2014 margin on both sides in px (default 0)"}),(0,o.jsx)("div",{children:"vertical?: boolean \u2014 render as vertical divider (default false)"}),(0,o.jsx)("div",{children:"style?: CSSProperties \u2014 extra style overrides"})]})})]}),t==="link"&&(0,o.jsx)(Card,{title:"AppLink",code:P.appLink,codeTitle:"AppLink.vue",children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.sm2},children:[(0,o.jsx)(Cl,{children:"muted (default)"}),(0,o.jsx)(Cl,{variant:"accent",children:"accent (red underline)"}),(0,o.jsx)(Cl,{variant:"primary",children:"primary (blue)"})]})}),t==="badges"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"AppBadge"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"5 variants \u2014 unified badge component"}),(0,o.jsx)(Card,{title:"All Variants",code:P.appBadge,codeTitle:"AppBadge.vue",children:(0,o.jsx)("div",{style:{display:"flex",gap:i.spacing.sm2,flexWrap:"wrap",alignItems:"center"},children:["live","premium","free","claimed","highlights"].map(b=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs2},children:[(0,o.jsx)(st,{variant:b}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:b})]},b))})}),(0,o.jsx)(Card,{title:"Usage Context",children:(0,o.jsx)(Q,{children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.md2},children:[(0,o.jsx)("div",{children:(0,o.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:i.spacing.sm2},children:[(0,o.jsx)(st,{variant:"live"})," LiveGameCard \u2014 game in progress"]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:i.spacing.sm2},children:[(0,o.jsx)(st,{variant:"premium"})," VideoThumbnail \u2014 locked content"]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:i.spacing.sm2},children:[(0,o.jsx)(st,{variant:"free"})," VideoThumbnail \u2014 free content"]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:i.spacing.sm2},children:[(0,o.jsx)(st,{variant:"claimed"})," ProductCard \u2014 item claimed"]})}),(0,o.jsx)("div",{children:(0,o.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:i.spacing.sm2},children:[(0,o.jsx)(st,{variant:"highlights"})," GameResultCard \u2014 highlights available"]})})]})})})]}),t==="livegamecard"&&(0,o.jsxs)("div",{children:[(0,o.jsx)(Card,{title:"LiveGameCard",desc:"Horizontal card showing live game with live badge, date, teams, and scores",children:(0,o.jsx)(km,{})}),(0,o.jsx)(Card,{title:"PTeamRow \u2014 Shared Atom",desc:"Reusable team row used by LiveGameCard and GameResultCard. Accepts name, score, isWinner, logoSize, fontWeight, gap.",children:(0,o.jsx)(Jm,{})})]}),t==="gameresultcard"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"GameResultCard"}),(0,o.jsx)(Card,{title:"GameResultCard",desc:"Vertical card with left date column, teams/scores on right, league + highlights badge at bottom",children:(0,o.jsx)(Im,{})}),(0,o.jsx)(Card,{title:"Highlights Badge",desc:"Yellow badge with play icon \u2014 used at bottom-right of game result cards",children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.lg},children:[(0,o.jsx)(PHighlightsBadge,{}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.caption,color:u.gray400},children:"bg: #6C6C6C, text: #FFE000, border: #FFE000"})]})})]}),t==="highlightcard"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"HighlightCard"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Vertical video highlight card with emoji-prefixed title, date, duration badge, and optional lock icon. Used in Game Detail for Game Highlights, Personal Highlights, Followed Players, and Other Players sections."}),(0,o.jsx)(Card,{title:"Locked Highlights (Premium)",desc:"Cards with yellow lock icon badge \u2014 paywall content",code:P.highlightCard,codeTitle:"HighlightCard.vue",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md,flexWrap:"wrap"},children:[(0,o.jsx)(kl,{title:"Weiss with the dimes",duration:"1:23",emoji:"\u{1F3C0}",locked:!0}),(0,o.jsx)(kl,{title:"Best plays of the game",duration:"5:15",emoji:"\u{1F525}",locked:!0}),(0,o.jsx)(kl,{title:"Top scoring moments",duration:"3:45",emoji:"\u2B50",locked:!0}),(0,o.jsx)(kl,{title:"Dunks & points",duration:"2:20",emoji:"\u{1F3C6}",locked:!0})]})}),(0,o.jsx)(Card,{title:"Free Highlights (No Lock)",desc:"Cards without lock icon \u2014 freely accessible content",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md,flexWrap:"wrap"},children:[(0,o.jsx)(kl,{title:"#4 Gets the ball Forward",duration:"0:45",emoji:"\u{1F3C0}",locked:!1}),(0,o.jsx)(kl,{title:"#11 Gets the ball Forward",duration:"0:32",emoji:"\u{1F3C0}",locked:!1})]})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{variant:"muted",children:[(0,o.jsx)("code",{children:"thumbnail: string"})," \u2014 background image URL",(0,o.jsx)("br",{}),(0,o.jsx)("code",{children:"duration: string"})," \u2014 video length badge (top-left)",(0,o.jsx)("br",{}),(0,o.jsx)("code",{children:"title: string"})," \u2014 emoji-prefixed title overlay",(0,o.jsx)("br",{}),(0,o.jsx)("code",{children:"date: string"})," \u2014 date below title",(0,o.jsx)("br",{}),(0,o.jsx)("code",{children:"locked: boolean"})," \u2014 show/hide yellow lock icon (default: true)"]})})]}),t==="scorecard"&&(0,o.jsx)(Card,{title:"ScoreCard",desc:"Final score display with teams, scores, game status, date, and standings",children:(0,o.jsx)(wm,{})}),t==="videothumbnail"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"VideoThumbnail"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"2 orientations \xD7 2 lock states \u2014 unified component"}),(0,o.jsxs)(Card,{title:"Landscape (16:9)",children:[(0,o.jsx)("h4",{style:{margin:"0 0 8px",fontSize:i.typography.sizes.body2,fontWeight:i.typography.weights.semibold,color:u.gray500},children:"Free (locked=false)"}),(0,o.jsx)(Aa,{orientation:"landscape",locked:!1,duration:"1:42:15",title:"Full Game",subtitle:"Free"}),(0,o.jsx)("h4",{style:{margin:"16px 0 8px",fontSize:i.typography.sizes.body2,fontWeight:i.typography.weights.semibold,color:u.gray500},children:"Premium (locked=true)"}),(0,o.jsx)(Aa,{orientation:"landscape",locked:!0,duration:"22:30",title:"Condensed Game",subtitle:"Premium Only"})]}),(0,o.jsxs)(Card,{title:"Vertical (9:16)",children:[(0,o.jsx)("h4",{style:{margin:"0 0 8px",fontSize:i.typography.sizes.body2,fontWeight:i.typography.weights.semibold,color:u.gray500},children:"Locked"}),(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md},children:[(0,o.jsx)(Aa,{orientation:"vertical",locked:!0,duration:"1:23",title:"\u{1F3C0} Weiss with the dimes",subtitle:"NOV 13, 2025"}),(0,o.jsx)(Aa,{orientation:"vertical",locked:!0,duration:"2:45",title:"\u{1F3C0} Fast break layup",subtitle:"NOV 13, 2025"}),(0,o.jsx)(Aa,{orientation:"vertical",locked:!0,duration:"0:58",title:"\u{1F3C0} Three pointer",subtitle:"NOV 13, 2025"})]}),(0,o.jsx)("h4",{style:{margin:"16px 0 8px",fontSize:i.typography.sizes.body2,fontWeight:i.typography.weights.semibold,color:u.gray500},children:"Free"}),(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md},children:[(0,o.jsx)(Aa,{orientation:"vertical",locked:!1,duration:"4:10",title:"\u{1F3C0} #4 Gets the ball Forward",subtitle:"NOV 13, 2025"}),(0,o.jsx)(Aa,{orientation:"vertical",locked:!1,duration:"3:22",title:"\u{1F3C0} Alley-oop finish",subtitle:"NOV 13, 2025"})]})]}),(0,o.jsx)(Card,{title:"Jersey Badge variant",desc:"Used in Athlete Profile highlights grid \u2014 shows sleeveless jersey with number + label instead of title/subtitle",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md},children:[(0,o.jsx)(Aa,{orientation:"vertical",showJerseyBadge:!0,jerseyNumber:1,duration:"0:45",jerseyLabel:`Player
Highlights`}),(0,o.jsx)(Aa,{orientation:"vertical",showJerseyBadge:!0,jerseyNumber:23,duration:"1:23",jerseyLabel:`Player
Highlights`,jerseyColor:"#116DFF"}),(0,o.jsx)(Aa,{orientation:"vertical",showJerseyBadge:!0,jerseyNumber:8,duration:"0:32",jerseyLabel:`Player
Highlights`,jerseyColor:"#FFE000"})]})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:'orientation: "landscape" | "vertical"'}),(0,o.jsx)("div",{children:"locked: boolean (false = Play icon, true = Lock icon + blur)"}),(0,o.jsx)("div",{children:'duration: string ("1:42:15")'}),(0,o.jsx)("div",{children:'title: string ("Full Game")'}),(0,o.jsx)("div",{children:'subtitle: string ("Free" / "Premium Only")'}),(0,o.jsx)("div",{children:"showJerseyBadge: boolean \u2014 jersey badge instead of title/subtitle"}),(0,o.jsx)("div",{children:"jerseyNumber: number \u2014 player number on the jersey"}),(0,o.jsx)("div",{children:'jerseyLabel: string \u2014 text next to jersey ("Player Highlights")'}),(0,o.jsx)("div",{children:"jerseyColor: string \u2014 jersey fill color (default #D0142C, auto dark text on light colors)"}),(0,o.jsx)("div",{children:"thumbnailUrl: string \u2014 background image URL"})]})})]}),t==="teamstatsbar"&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(Card,{title:"TeamStatsBar",desc:"Comparative stat bar with left/right values, center label, and proportional bars",children:[(0,o.jsx)(xn,{label:"Points",leftVal:82,rightVal:76}),(0,o.jsx)(xn,{label:"Field Goal %",leftVal:48,rightVal:42}),(0,o.jsx)(xn,{label:"2-Point %",leftVal:54,rightVal:49})]}),(0,o.jsx)(Card,{title:"TeamStatsBar \u2014 Paywall",desc:"Blurred stats with lock overlay, 'Buy Team Stats' text, and yellow Buy Now CTA",children:(0,o.jsx)(PTeamStatsPaywall,{})})]}),t==="gameleaders"&&(0,o.jsx)(Card,{title:"GameLeaders",desc:"Side-by-side leader comparison with player numbers, stat details, and center category label",children:(0,o.jsx)(Am,{})}),t==="playerstats"&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Card,{title:"PlayerStats Table",desc:"Team-tabbed player stats table with columns: Player, MIN, PTS, REB, AST",children:(0,o.jsx)(Tm,{})}),(0,o.jsx)(Card,{title:"Player Stats + Game Leaders \u2014 Paywall",desc:"Blurred PlayerStats table and GameLeaders with lock overlay and Buy Now CTA",children:(0,o.jsx)(PPlayerStatsPaywall,{})})]}),t==="statsgrid"&&(0,o.jsx)(Card,{title:"StatsGrid",desc:"3-column grid of stat boxes with label and bold value \u2014 built from PStatCard",children:(0,o.jsx)(Dm,{})}),t==="seasonstatsrow"&&(0,o.jsx)(Card,{title:"SeasonStatsRow",desc:"4 stat boxes in a row: MPG, PPG, APG, RPG \u2014 built from PStatCard",children:(0,o.jsx)(Pm,{})}),t==="athleteprofilecard"&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"Athlete Profile"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Full athlete profile page \u2014 390px wide. Uses DS components: PPlayerPhoto (hero), PTeamLogo (team link), ArrowLeft + Share2 (nav icons), PStatCard, PSectionHeader, PVideoThumbnail, PSeeAllLink. All colors use DS tokens."}),(0,o.jsx)(Card,{title:"Default \u2014 Tal Weiss #1",desc:"Full page view 1:1 Figma",children:(0,o.jsx)("div",{style:{maxWidth:390,overflow:"hidden"},children:(0,o.jsx)(AthleteProfileCard,{})})}),(0,o.jsx)(Card,{title:"Custom player",desc:"Pass name, number, position, teamName, accentColor",children:(0,o.jsx)("div",{style:{maxWidth:390,overflow:"hidden"},children:(0,o.jsx)(AthleteProfileCard,{name:"BEN SIMMONS",number:25,position:"Point Guard",teamName:"S.D Spartans",accentColor:"#007cbe"})})}),(0,o.jsx)(Card,{title:"DS Components Used",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"PPlayerPhoto \u2014 circular hero photo (photoUrl from server)"}),(0,o.jsx)("div",{children:"PTeamLogo \u2014 team icon next to team name (teamLogoUrl from server)"}),(0,o.jsx)("div",{children:"ArrowLeft (lucide) \u2014 back navigation icon"}),(0,o.jsx)("div",{children:"Share2 (lucide) \u2014 share action icon"}),(0,o.jsx)("div",{children:"ChevronDown (lucide, rotated) \u2014 team name link chevron"}),(0,o.jsx)("div",{children:"PStatCard \u2014 career + season stat tiles"}),(0,o.jsx)("div",{children:'PSectionHeader \u2014 "My Highlights", "Season Stats" headings'}),(0,o.jsx)("div",{children:"PVideoThumbnail \u2014 highlight video grid"}),(0,o.jsx)("div",{children:'PSeeAllLink \u2014 "See all" navigation'})]})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"name: string \u2014 full name, rendered uppercase split over 2 lines"}),(0,o.jsx)("div",{children:"number: number \u2014 jersey number shown in position row"}),(0,o.jsx)("div",{children:'position: string \u2014 e.g. "Guard", "Forward"'}),(0,o.jsx)("div",{children:"teamName: string \u2014 team link label"}),(0,o.jsx)("div",{children:"teamLogoUrl?: string \u2014 server-provided team logo (replaces PTeamLogo placeholder)"}),(0,o.jsx)("div",{children:"accentColor: string \u2014 team accent color (team name, chevrons)"}),(0,o.jsx)("div",{children:"photoUrl: string \u2014 circular athlete photo from server (via PPlayerPhoto)"}),(0,o.jsx)("div",{children:"onBack?: () => void \u2014 back button handler"}),(0,o.jsx)("div",{children:"onShare?: () => void \u2014 share button handler"}),(0,o.jsx)("div",{children:"onTeamTap?: () => void \u2014 team name link handler"})]})})]}),t==="teampage"&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"Team Page"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:'Full team profile page \u2014 390px wide. Shows team logo, name, game counts, Follow button, social links, live games (horizontal scroll), and recent games list with "See all".'}),(0,o.jsx)(Card,{title:"Default",desc:"Full page view 1:1 Figma",children:(0,o.jsx)("div",{style:{maxWidth:390,overflow:"hidden"},children:(0,o.jsx)(TeamPage,{})})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"teamName: string \u2014 team name, supports \\n for line breaks"}),(0,o.jsx)("div",{children:"logoUrl: string \u2014 team logo image URL (circular 120px)"}),(0,o.jsx)("div",{children:"accentColor: string \u2014 accent color for Follow button"}),(0,o.jsx)("div",{children:"liveCount: number \u2014 number of live games"}),(0,o.jsx)("div",{children:"upcomingCount: number \u2014 number of upcoming games"}),(0,o.jsx)("div",{children:"totalCount: number \u2014 total games"})]})}),(0,o.jsx)(Card,{title:"Reused components",desc:"Components from existing DS used in TeamPage",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:'PSectionHeader \u2014 "Live" and "Recent Games" headings'}),(0,o.jsx)("div",{children:'PBtn \u2014 "Follow" button (primary, lg)'}),(0,o.jsx)("div",{children:"PLiveGameCard \u2014 live game cards in horizontal scroll"}),(0,o.jsx)("div",{children:"PGameResultCard \u2014 recent game cards in vertical list"}),(0,o.jsx)("div",{children:'PSeeAllLink \u2014 "See all" link at bottom'}),(0,o.jsx)("div",{children:"PSocialLinks \u2014 social media icon row"})]})})]}),t==="infoalert"&&(0,o.jsx)(Card,{title:"InfoAlert",desc:"Light purple card with purple title and gray description text",children:(0,o.jsx)(Mm,{title:"Claimed Athletes Only",description:"This content is only available for claimed athlete profiles."})}),t==="paymentmodal"&&(0,o.jsx)(Card,{title:"PaymentModal",desc:"Subscription plan selection with expandable feature lists and CTA",children:(0,o.jsx)(Om,{})}),t==="upgradebanner"&&(0,o.jsx)(Card,{title:"UpgradeBanner",desc:"Amber banner with lock icon, upgrade message, and action button",children:(0,o.jsx)(Em,{})}),t==="videotypechips"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"VideoTypeChips"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Horizontal pill row \u2014 active (red, bold), inactive (gray, with lock icon for premium content)"}),(0,o.jsx)(Card,{title:"Interactive Preview",desc:"Click chips to switch active state. Lock icons persist on active chip.",children:(0,o.jsx)(_m,{})}),(0,o.jsx)(Card,{title:"Chip States \u2014 default / hover / pressed / disabled",desc:"Each chip type shown in all 4 interaction states",children:(0,o.jsx)(Zm,{})}),(0,o.jsx)(Card,{title:"All Active States",desc:"Each chip shown as the active selection",children:(0,o.jsx)(Qm,{})}),(0,o.jsx)(Card,{title:"Anatomy",desc:"Token mapping for each state",children:(0,o.jsxs)(Q,{variant:"muted",children:[(0,o.jsxs)("div",{children:["Active chip: bg ",(0,o.jsx)("code",{style:{background:u.jerseyRed,color:u.white,padding:"1px 6px",borderRadius:i.radii.sm},children:"#D0142C"})," \xB7 text ",(0,o.jsx)("code",{style:{background:u.gray50,padding:"1px 6px",borderRadius:i.radii.sm},children:"#FFFFFF"})," \xB7 fontWeight 600"]}),(0,o.jsxs)("div",{children:["Inactive chip: bg ",(0,o.jsx)("code",{style:{background:u.gray100,padding:"1px 6px",borderRadius:i.radii.sm},children:"#EDEDED"})," \xB7 text ",(0,o.jsx)("code",{style:{background:u.gray50,padding:"1px 6px",borderRadius:i.radii.sm},children:"#000000"})," \xB7 fontWeight 400"]}),(0,o.jsxs)("div",{children:["Lock icon: bg ",(0,o.jsx)("code",{style:{background:u.premiumDark,color:u.premiumYellow,padding:"1px 6px",borderRadius:i.radii.sm},children:"#362F2C"})," \xB7 20\xD720 circle \xB7 LockSvg 8px"]}),(0,o.jsx)("div",{children:"Chip: height 40px \xB7 borderRadius 26px \xB7 padding 8px 12px \xB7 gap 12px between chips"})]})})]}),t==="videoactionbar"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"VideoActionBar"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Row below the video player \u2014 view count on the left, download / share / bookmark on the right"}),(0,o.jsx)(Card,{title:"VideoActionBar Preview",desc:"Appears below the video thumbnail on the player page \u2014 click bookmark to toggle",code:P.videoActionBar,codeTitle:"VideoActionBar.vue",children:(0,o.jsx)("div",{style:{maxWidth:398},children:(0,o.jsx)(mn,{views:c?"1,240 views":"1 view",bookmarked:c,onBookmark:()=>p(!c)})})}),(0,o.jsx)(Card,{title:"Icon Button States \u2014 default / hover / pressed / disabled",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.lg2},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.sm},children:"default"}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:i.spacing.sm},children:[{label:"default",state:"default"},{label:"hover",state:"hover"},{label:"pressed",state:"active"},{label:"disabled",state:"disabled"}].map(({label:b,state:R})=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs2},children:[(0,o.jsx)(PVideoActionIconBtn,{icon:Gt,_forceState:R,disabled:R==="disabled",ariaLabel:"Download"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:b})]},b))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.sm},children:"active (bookmarked)"}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:i.spacing.sm},children:[{label:"default",state:"default"},{label:"hover",state:"hover"},{label:"pressed",state:"active"},{label:"disabled",state:"disabled"}].map(({label:b,state:R})=>(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs2},children:[(0,o.jsx)(PVideoActionIconBtn,{icon:Ha,active:!0,_forceState:R,disabled:R==="disabled",isBookmark:!0,ariaLabel:"Remove bookmark"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:b})]},b))})]})]})}),(0,o.jsx)(Card,{title:"Bookmarked vs Default",desc:"Click the bookmark icon to toggle \u2014 icon pops and fills blue on bookmark, reverses on un-bookmark",children:(0,o.jsxs)("div",{style:{maxWidth:398,display:"flex",flexDirection:"column",gap:i.spacing.md},children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.sm},children:["interactive \u2014 click bookmark to toggle ",c?(0,o.jsx)("span",{style:{color:u.primary,fontWeight:i.typography.weights.semibold},children:"(bookmarked)"}):"(not bookmarked)"]}),(0,o.jsx)(mn,{views:c?"1,240 views":"1 view",bookmarked:c,onBookmark:()=>p(!c)})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.sm},children:"disabled \u2014 all buttons disabled"}),(0,o.jsx)(mn,{views:"0 views",disabled:!0})]})]})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:'views: string \u2014 dynamic, changes per page visit (e.g. "1 view", "1,240 views")'}),(0,o.jsx)("div",{children:"bookmarked: boolean \u2014 toggles bookmark icon to active (blue) state"}),(0,o.jsx)("div",{children:"disabled: boolean \u2014 disables all action buttons"}),(0,o.jsx)("div",{children:"@download \u2014 emitted on download tap"}),(0,o.jsx)("div",{children:"@share \u2014 emitted on share tap (opens ShareCurtain)"}),(0,o.jsx)("div",{children:"@bookmark \u2014 emitted on bookmark tap"})]})})]}),t==="sharecurtain"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"ShareCurtain"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Bottom sheet with 6 share channels \u2014 triggered from video player share icon"}),(0,o.jsx)(Card,{title:"Share Curtain Preview",desc:"Bottom sheet with 6 social share channels, backdrop overlay, and Cancel button",code:P.shareCurtain,codeTitle:"ShareCurtain.vue",children:(0,o.jsx)(PShareCurtainStatic,{})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{variant:"muted",children:[(0,o.jsx)("div",{children:"open: boolean \u2014 controls visibility"}),(0,o.jsx)("div",{children:"onClose: () => void \u2014 called on backdrop click or Cancel"})]})})]}),t==="brandhero"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"BrandHero"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Auth screen hero \u2014 gradient background (team primary \u2192 30% darker) with centered logo. White-label ready."}),(0,o.jsx)(Card,{title:"Default \u2014 Pixellot",code:P.brandHero,codeTitle:"BrandHero.vue",children:(0,o.jsx)("div",{style:{maxWidth:390,borderRadius:i.radii.lg,overflow:"hidden"},children:(0,o.jsx)(Ll,{})})}),(0,o.jsx)(Card,{title:"Custom Team Colors",desc:"Pass any primaryColor to match client branding. Logo slot can be overridden.",children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.lg},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs2},children:'primaryColor="#D0142C" (Maccabi red)'}),(0,o.jsx)("div",{style:{maxWidth:390,borderRadius:i.radii.lg,overflow:"hidden"},children:(0,o.jsx)(Ll,{primaryColor:"#D0142C",height:340})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs2},children:'primaryColor="#1A6B3C" (Azteca green)'}),(0,o.jsx)("div",{style:{maxWidth:390,borderRadius:i.radii.lg,overflow:"hidden"},children:(0,o.jsx)(Ll,{primaryColor:"#1A6B3C",height:340})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xs2},children:'primaryColor="#E7A610" (Premium amber)'}),(0,o.jsx)("div",{style:{maxWidth:390,borderRadius:i.radii.lg,overflow:"hidden"},children:(0,o.jsx)(Ll,{primaryColor:"#E7A610",height:340})})]})]})}),(0,o.jsx)(Card,{title:"Anatomy",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"Height: 340px (default) \u2014 ~40% of 390px-wide viewport"}),(0,o.jsx)("div",{children:"Background: linear-gradient(180deg, primaryColor 0%, darkerColor 100%)"}),(0,o.jsx)("div",{children:"darkerColor: primaryColor channels \xD7 0.7 (30% darker)"}),(0,o.jsx)("div",{children:"Bottom corners: borderRadius 0 0 32px 32px"}),(0,o.jsx)("div",{children:"Logo: centered, default PixellotLogo at 80px"}),(0,o.jsxs)("div",{children:["Slot: override with any team/client logo via ","<slot>"]})]})})]}),t==="adbanner"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"AdBanner"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Full-width ad banner carousel with swipeable pagination dots. Displayed at top of the home/Following page."}),(0,o.jsxs)(Card,{title:"Banner Carousel",desc:"Two slides with pagination dots \u2014 drag/swipe to change slides",code:P.adBanner,codeTitle:"AdBanner.vue",children:[(0,o.jsx)("div",{style:{maxWidth:398},children:(0,o.jsx)(Cm,{active:0})}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.sm},children:"Drag left/right to swipe between slides. 40px threshold triggers navigation."})]}),(0,o.jsx)(Card,{title:"Pagination Dots",desc:"Active dot: white/solid; Inactive: white/50% opacity",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.lg2,alignItems:"center"},children:[(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.sm,background:u.gray100,padding:"12px 20px",borderRadius:i.radii.thumb},children:[(0,o.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:u.white}}),(0,o.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:"rgba(255,255,255,0.5)"}})]}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.caption,color:u.gray400},children:"Dots on dark background"})]})})]}),t==="notificationcenter"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"NotificationCenter"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Dropdown panel triggered from the bell icon in the top bar. Shows player highlight notifications with jersey avatars."}),(0,o.jsx)(Card,{title:"Bell Icon with Badge",desc:"Notification bell with red count badge",code:P.notificationCenter,codeTitle:"NotificationCenter.vue",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.xxl,alignItems:"center"},children:[(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(jt,{count:0}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs2},children:"No notifications"})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(jt,{count:1}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs2},children:"1 notification"})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(jt,{count:3}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs2},children:"3 notifications"})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(jt,{count:99}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs2},children:"99 notifications"})]})]})}),(0,o.jsx)(Card,{title:"Notification Center Dropdown",desc:"Panel with jersey avatar items and Clear all action",children:(0,o.jsx)(zm,{})}),(0,o.jsx)(Card,{title:"Single Notification Item",desc:"Jersey avatar + notification text",children:(0,o.jsx)("div",{style:{maxWidth:380},children:(0,o.jsx)(PNotificationItem,{jerseyNumber:11})})})]}),t==="profilesidebar"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"SideMenu \u2014 Profile variant"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:'Right-slide drawer triggered from hamburger icon in top bar. Uses PSideMenu variant="profile" \u2014 same component as the org menu, with user avatar header, league accordions, Following card (teams & players), and profile-specific menu items.'}),(0,o.jsx)(Card,{title:"Profile variant (Full Preview)",desc:"Dark backdrop + right-side panel with user info, claimed player, and menu",code:P.profileSidebar,codeTitle:"ProfileSidebar.vue",children:(0,o.jsx)(gu,{variant:"profile"})}),(0,o.jsx)(Card,{title:"User Avatar",desc:"Gray circle with user initials \u2014 used in top bar and sidebar header",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.lg,alignItems:"center"},children:[(0,o.jsx)(na,{initials:"BR",size:40}),(0,o.jsx)(na,{initials:"WT",size:36}),(0,o.jsx)(na,{initials:"JD",size:28}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.caption,color:u.gray400},children:"Sizes: 40px (sidebar), 36px (top bar), 28px (compact)"})]})}),(0,o.jsx)(Card,{title:"Claimed Player Card",desc:"Player info card shown at top of profile sidebar",children:(0,o.jsx)("div",{style:{maxWidth:300},children:(0,o.jsx)(PClaimedPlayerCard,{})})}),(0,o.jsx)(Card,{title:"Menu List Items",desc:"Navigation items with chevron, badge count, link variant, and danger variant",children:(0,o.jsxs)("div",{style:{maxWidth:300},children:[(0,o.jsx)(PMenuListItem,{label:"Following",badge:14}),(0,o.jsx)(PMenuListItem,{label:"Language"}),(0,o.jsx)(PMenuListItem,{label:"My Account"}),(0,o.jsx)(PMenuListItem,{label:"Claim Player",variant:"link"})]})}),(0,o.jsx)(Card,{title:"Menu List Item \u2014 Interactive States",desc:"Hover highlights row; pressed darkens background",children:(0,o.jsx)("div",{style:{maxWidth:300},children:["default","hover","active"].map(b=>(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.xxs,marginTop:i.spacing.sm},children:b}),(0,o.jsx)(PMenuListItem,{label:"Following",badge:14,_forceState:b})]},b))})})]}),t==="teamlogo"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"PTeamLogo"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Team logo circle with deterministic color placeholder fallback. When logoUrl is provided it renders the image; otherwise generates a colored initial from the team name hash."}),(0,o.jsx)(Card,{title:"Placeholder (no logo)",desc:"Deterministic color + initial from team name hash",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.lg,alignItems:"center",flexWrap:"wrap"},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(ve,{size:40,name:"Maccabi"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"Maccabi"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(ve,{size:40,name:"Hapoel"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"Hapoel"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(ve,{size:40,name:"Ironi"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"Ironi"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(ve,{size:40,name:"Bnei Herzliya"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"Bnei Herzliya"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(ve,{size:40,name:"Elitzur"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"Elitzur"})]})]})}),(0,o.jsx)(Card,{title:"With logo URL",desc:"Renders server-provided team logo",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.lg,alignItems:"center"},children:[(0,o.jsx)(ve,{size:40,name:"Riverside",logoUrl:`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" rx="40" fill="#D0142C"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">RM</text></svg>')}`}),(0,o.jsx)(ve,{size:40,name:"Logan",logoUrl:`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" rx="40" fill="#116DFF"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">LT</text></svg>')}`})]})}),(0,o.jsx)(Card,{title:"Sizes",desc:"size prop controls diameter",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.lg,alignItems:"center"},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(ve,{size:20,name:"Small"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"20px"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(ve,{size:28,name:"Default"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"28px (default)"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(ve,{size:40,name:"Medium"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"40px"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(ve,{size:56,name:"Large"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"56px"})]})]})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"size?: number \u2014 diameter in pixels (default 28)"}),(0,o.jsx)("div",{children:"name?: string \u2014 team name (used for placeholder initial + color hash)"}),(0,o.jsx)("div",{children:"logoUrl?: string \u2014 URL of team logo image"})]})})]}),t==="avatar"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"PAvatar"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Circular avatar showing user initials on a gray background. Used in profile sections and headers."}),(0,o.jsx)(Card,{title:"Default",desc:"Initials on gray500 circle",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.lg,alignItems:"center"},children:[(0,o.jsx)(na,{initials:"BR",size:40}),(0,o.jsx)(na,{initials:"YL",size:40}),(0,o.jsx)(na,{initials:"JD",size:40})]})}),(0,o.jsx)(Card,{title:"Sizes",desc:"size prop controls diameter",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.lg,alignItems:"center"},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(na,{initials:"SM",size:24}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"24px"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(na,{initials:"MD",size:40}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"40px (default)"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(na,{initials:"LG",size:56}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"56px"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(na,{initials:"XL",size:72}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"72px"})]})]})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:'initials?: string \u2014 1\u20132 letter initials to display (default "BR")'}),(0,o.jsx)("div",{children:"size?: number \u2014 diameter in pixels (default 40)"})]})})]}),t==="playerphoto"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"PPlayerPhoto"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Circular player photo with gray User-silhouette placeholder fallback. When photoUrl is provided and loads successfully, it renders the photo; otherwise shows the placeholder."}),(0,o.jsx)(Card,{title:"Placeholder (no photo)",desc:"Gray circle with User silhouette icon",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.lg,alignItems:"center"},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(dt,{size:36,name:"J. Davis"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"36px"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(dt,{size:48,name:"B. Rogers"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"48px (default)"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.xs},children:[(0,o.jsx)(dt,{size:64,name:"M. Chen"}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"64px"})]})]})}),(0,o.jsx)(Card,{title:"With photo URL",desc:"Renders server-provided player photo",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.lg,alignItems:"center"},children:[(0,o.jsx)(dt,{size:48,name:"Player",photoUrl:`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#8B5CF6"/><text x="50%" y="54%" font-family="sans-serif" font-size="32" fill="white" text-anchor="middle" dominant-baseline="middle">MC</text></svg>')}`}),(0,o.jsx)(dt,{size:48,name:"Player",photoUrl:`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#D0142C"/><text x="50%" y="54%" font-family="sans-serif" font-size="32" fill="white" text-anchor="middle" dominant-baseline="middle">JR</text></svg>')}`})]})}),(0,o.jsx)(Card,{title:"Broken URL fallback",desc:"Falls back to placeholder when image fails to load",children:(0,o.jsx)(dt,{size:48,name:"Error",photoUrl:"https://broken-url.invalid/photo.jpg"})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"size?: number \u2014 diameter in pixels (default 48)"}),(0,o.jsx)("div",{children:"name?: string \u2014 player name (for alt text)"}),(0,o.jsx)("div",{children:"photoUrl?: string \u2014 URL of player photo image"})]})})]}),t==="playernumberbadge"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"PlayerNumberBadge"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Colored circle displaying a player's jersey number. When a photo URL is provided from the server it renders the player photo instead. Used in MyFollowingList player rows and anywhere a player avatar is needed."}),(0,o.jsx)(Card,{title:"Default (team color)",desc:"Primary-colored circle with jersey number",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md,alignItems:"center"},children:[(0,o.jsx)(me,{number:1}),(0,o.jsx)(me,{number:23}),(0,o.jsx)(me,{number:7})]})}),(0,o.jsx)(Card,{title:"Custom team colors",desc:"Each team has a different brand color",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md,alignItems:"center"},children:[(0,o.jsx)(me,{number:10,teamColor:"#D0142C"}),(0,o.jsx)(me,{number:5,teamColor:"#116DFF"}),(0,o.jsx)(me,{number:33,teamColor:"#22C55E"}),(0,o.jsx)(me,{number:8,teamColor:"#E7A610"}),(0,o.jsx)(me,{number:12,teamColor:"#8B5CF6"})]})}),(0,o.jsx)(Card,{title:"Light team colors",desc:"Text auto-switches to dark on light backgrounds",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md,alignItems:"center"},children:[(0,o.jsx)(me,{number:4,teamColor:"#FDE68A"}),(0,o.jsx)(me,{number:99,teamColor:"#BBF7D0"}),(0,o.jsx)(me,{number:11,teamColor:"#E0F2FE"})]})}),(0,o.jsx)(Card,{title:"Sizes",desc:"size prop controls diameter",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md,alignItems:"center"},children:[(0,o.jsx)(me,{number:7,size:28,teamColor:"#D0142C"}),(0,o.jsx)(me,{number:7,size:40,teamColor:"#D0142C"}),(0,o.jsx)(me,{number:7,size:56,teamColor:"#D0142C"})]})}),(0,o.jsx)(Card,{title:"With photo URL",desc:"photoUrl replaces the number circle with a server image. Falls back to number circle on error.",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md,alignItems:"center"},children:[(0,o.jsx)(me,{number:23,size:40,photoUrl:`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#116DFF"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">MC</text></svg>')}`}),(0,o.jsx)(me,{number:10,size:40,photoUrl:`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#D0142C"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">JR</text></svg>')}`})]})}),(0,o.jsx)(Card,{title:"Broken URL fallback",desc:"When photoUrl fails to load, gracefully falls back to the number circle placeholder",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.md,alignItems:"center"},children:[(0,o.jsx)(me,{number:5,size:40,teamColor:"#8B5CF6",photoUrl:"https://broken-url.invalid/photo.jpg"}),(0,o.jsx)(me,{number:99,size:40,teamColor:"#22C55E",photoUrl:"https://broken-url.invalid/photo2.jpg"})]})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"number: number \u2014 jersey number displayed in the circle"}),(0,o.jsx)("div",{children:"size?: number \u2014 diameter in px (default 40)"}),(0,o.jsx)("div",{children:"teamColor?: string \u2014 background color (default primary). Text auto-adjusts for contrast"}),(0,o.jsx)("div",{children:"photoUrl?: string \u2014 server-provided player photo. When set, replaces the number circle"})]})})]}),t==="bellicon"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"PBellIcon"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Bell icon with optional notification count badge. When count is 0 or omitted, no badge is shown. Used in AppHeader."}),(0,o.jsx)(Card,{title:"States",desc:"No badge vs. badge with count \u2014 fixed 24px, used in AppHeader",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.xl,alignItems:"center"},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)(jt,{}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"count=0 (no badge)"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)(jt,{count:3}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"count=3"})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)(jt,{count:99}),(0,o.jsx)("span",{style:{fontSize:i.typography.sizes.micro,color:u.gray400},children:"count=99"})]})]})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsx)(Q,{children:(0,o.jsx)("div",{children:"count?: number \u2014 notification count, 0 hides badge (default 0)"})})})]}),t==="sectionheader"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"PSectionHeader"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:'Section heading with optional "See all" link button. Used at the top of content sections on the homepage and team pages.'}),(0,o.jsx)(Card,{title:"Without See All",desc:"Title only \u2014 no trailing action",children:(0,o.jsx)(wo,{title:"Latest Videos"})}),(0,o.jsx)(Card,{title:"With See All",desc:"seeAll={true} shows a trailing link button",children:(0,o.jsx)(wo,{title:"Latest Videos",seeAll:!0,onClick:()=>{}})}),(0,o.jsx)(Card,{title:"Custom title size",desc:"titleSize prop overrides default base (16px)",children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.md},children:[(0,o.jsx)(wo,{title:"Small Title",titleSize:i.typography.sizes.xs,seeAll:!0}),(0,o.jsx)(wo,{title:"Default Title",seeAll:!0}),(0,o.jsx)(wo,{title:"Large Title",titleSize:i.typography.sizes.xl,seeAll:!0})]})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"title: string \u2014 section heading text (required)"}),(0,o.jsx)("div",{children:'seeAll?: boolean \u2014 show trailing "See all >" link (default false)'}),(0,o.jsx)("div",{children:"onClick?: () => void \u2014 handler for See all click"}),(0,o.jsx)("div",{children:"titleSize?: number \u2014 override font size"})]})})]}),t==="seealllink"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"PSeeAllLink"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:'Standalone "See all" link with chevron. Used below grid sections to navigate to full lists.'}),(0,o.jsx)(Card,{title:"Default",desc:"Blue link text with right chevron",children:(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)(Pi,{onClick:()=>{}})})}),(0,o.jsx)(Card,{title:"Custom label",desc:"label prop overrides default text",children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.md},children:[(0,o.jsx)(Pi,{label:"View all games",onClick:()=>{}}),(0,o.jsx)(Pi,{label:"More highlights",onClick:()=>{}}),(0,o.jsx)(Pi,{label:"Browse teams",onClick:()=>{}})]})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:'label?: string \u2014 link text (default "See all")'}),(0,o.jsx)("div",{children:"onClick?: () => void \u2014 click handler"})]})})]}),t==="followingrow"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"FollowingRow"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Reusable list-item row with avatar, title, optional subtitle, and trailing action slot. Used in MyFollowingList for both team and player rows. Accepts any avatar component (PTeamLogo, PPlayerNumberBadge, PPlayerPhoto) and any action element (PBtn, icon, etc.)."}),(0,o.jsx)(Card,{title:"Team row",desc:"PTeamLogo avatar + division subtitle + Unfollow action",children:(0,o.jsx)("div",{style:{maxWidth:390},children:(0,o.jsx)(zo,{avatar:(0,o.jsx)(ve,{size:40,name:"Riverside Mustangs"}),title:"Riverside Mustangs",subtitle:"PBA Varsity Division",action:(0,o.jsx)(U,{variant:"social",size:"sm",fullWidth:!1,style:{color:u.errorRed},children:"Unfollow"})})})}),(0,o.jsx)(Card,{title:"Player row",desc:"PPlayerNumberBadge avatar + player info + Unfollow action",children:(0,o.jsx)("div",{style:{maxWidth:390},children:(0,o.jsx)(zo,{avatar:(0,o.jsx)(me,{number:1,teamColor:u.primary}),title:"#1 \u2014 Marcus Caldwell",action:(0,o.jsx)(U,{variant:"social",size:"sm",fullWidth:!1,style:{color:u.errorRed},children:"Unfollow"})})})}),(0,o.jsx)(Card,{title:"With photo avatars",desc:"Server-provided images replace placeholders",children:(0,o.jsxs)("div",{style:{maxWidth:390},children:[(0,o.jsx)(zo,{avatar:(0,o.jsx)(ve,{size:40,name:"Riverside",logoUrl:`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" rx="8" fill="#D0142C"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">RM</text></svg>')}`}),title:"Riverside Mustangs",subtitle:"PBA Varsity Division",action:(0,o.jsx)(U,{variant:"social",size:"sm",fullWidth:!1,style:{color:u.errorRed},children:"Unfollow"})}),(0,o.jsx)(zo,{avatar:(0,o.jsx)(me,{number:23,photoUrl:`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#116DFF"/><text x="50%" y="54%" font-family="sans-serif" font-size="28" fill="white" text-anchor="middle" dominant-baseline="middle">MC</text></svg>')}`}),title:"#23 \u2014 Marcus Caldwell",action:(0,o.jsx)(U,{variant:"social",size:"sm",fullWidth:!1,style:{color:u.errorRed},children:"Unfollow"})})]})}),(0,o.jsx)(Card,{title:"No border",desc:"borderBottom={false} for the last item in a list",children:(0,o.jsx)("div",{style:{maxWidth:390},children:(0,o.jsx)(zo,{avatar:(0,o.jsx)(ve,{size:40,name:"Eagles"}),title:"Springfield Eagles",subtitle:"Division B",borderBottom:!1})})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"avatar: ReactNode \u2014 any avatar component (PTeamLogo, PPlayerNumberBadge, PPlayerPhoto)"}),(0,o.jsx)("div",{children:"title: string \u2014 primary text (team name or player info)"}),(0,o.jsx)("div",{children:"subtitle?: string \u2014 secondary text (division, position, etc.)"}),(0,o.jsx)("div",{children:"action?: ReactNode \u2014 trailing action slot (PBtn, icon, custom element)"}),(0,o.jsx)("div",{children:"borderBottom?: boolean \u2014 show bottom border separator (default true)"})]})})]}),t==="searchbar"&&(0,o.jsx)(SearchBarShowcase,{}),t==="backbar"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"BackBar"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:'Reusable "\u2190 Back" navigation bar with optional share action. Used in PAppHeader (back variant) and AthleteProfileCard. Standardizes the back+share pattern across all sub-pages.'}),(0,o.jsx)(Card,{title:"Back only",desc:"Default \u2014 just a back button, no share",children:(0,o.jsx)("div",{style:{maxWidth:390,border:`1px solid ${u.gray200}`,borderRadius:i.radii.badge,overflow:"hidden"},children:(0,o.jsx)(bn,{})})}),(0,o.jsx)(Card,{title:"Back + Share",desc:"showShare={true} \u2014 share icon appears on the right",children:(0,o.jsx)("div",{style:{maxWidth:390,border:`1px solid ${u.gray200}`,borderRadius:i.radii.badge,overflow:"hidden"},children:(0,o.jsx)(bn,{showShare:!0})})}),(0,o.jsx)(Card,{title:"Custom label",desc:"label prop changes the back button text",children:(0,o.jsx)("div",{style:{maxWidth:390,border:`1px solid ${u.gray200}`,borderRadius:i.radii.badge,overflow:"hidden"},children:(0,o.jsx)(bn,{label:"All Games",showShare:!0})})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:'label?: string \u2014 back button text (default "Back")'}),(0,o.jsx)("div",{children:"showShare?: boolean \u2014 show Share2 icon on the right (default false)"}),(0,o.jsx)("div",{children:"onBack?: () => void \u2014 back button handler"}),(0,o.jsx)("div",{children:"onShare?: () => void \u2014 share button handler"}),(0,o.jsx)("div",{children:'padding?: string \u2014 CSS padding (default "12px 16px")'})]})})]}),t==="accordion"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"Accordion"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Reusable collapsible section component. Click a header to expand/collapse its content. Used by CompetitionFollowList and SideMenu internally. Supports single or multiple open sections."}),(0,o.jsx)(Card,{title:"Single open (default)",desc:"Only one section open at a time \u2014 clicking another closes the previous",children:(0,o.jsx)("div",{style:{maxWidth:390,border:`1px solid ${u.gray200}`,borderRadius:i.radii.badge,overflow:"hidden",padding:`0 ${i.spacing.lg}px`},children:(0,o.jsx)(Ri,{items:[{id:"faq1",header:(0,o.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:u.darkText},children:"What is Pixellot?"}),content:(0,o.jsx)("p",{style:{fontFamily:C,fontSize:i.typography.sizes.xs,color:u.gray500,margin:0},children:"Pixellot provides AI-powered sports video production and streaming for teams at every level."})},{id:"faq2",header:(0,o.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:u.darkText},children:"How do I follow a team?"}),content:(0,o.jsx)("p",{style:{fontFamily:C,fontSize:i.typography.sizes.xs,color:u.gray500,margin:0},children:'Tap any team card and select "Follow" to add it to your feed.'})},{id:"faq3",header:(0,o.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:u.darkText},children:"Can I watch on mobile?"}),content:(0,o.jsx)("p",{style:{fontFamily:C,fontSize:i.typography.sizes.xs,color:u.gray500,margin:0},children:"Yes \u2014 the OTT app works on iOS, Android, and desktop browsers."})}]})})}),(0,o.jsx)(Card,{title:"Multiple open",desc:"allowMultiple={true} \u2014 several sections can be open at once",children:(0,o.jsx)("div",{style:{maxWidth:390,border:`1px solid ${u.gray200}`,borderRadius:i.radii.badge,overflow:"hidden",padding:`0 ${i.spacing.lg}px`},children:(0,o.jsx)(Ri,{allowMultiple:!0,items:[{id:"s1",header:(0,o.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:u.darkText},children:"Section A"}),content:(0,o.jsx)("p",{style:{fontFamily:C,fontSize:i.typography.sizes.xs,color:u.gray500,margin:0},children:"Content for section A. This stays open when you open B or C."})},{id:"s2",header:(0,o.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:u.darkText},children:"Section B"}),content:(0,o.jsx)("p",{style:{fontFamily:C,fontSize:i.typography.sizes.xs,color:u.gray500,margin:0},children:"Content for section B."})},{id:"s3",header:(0,o.jsx)("span",{style:{fontFamily:C,fontSize:i.typography.sizes.base,fontWeight:i.typography.weights.bold,color:u.darkText},children:"Section C"}),content:(0,o.jsx)("p",{style:{fontFamily:C,fontSize:i.typography.sizes.xs,color:u.gray500,margin:0},children:"Content for section C."})}]})})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsxs)("div",{children:["items: PAccordionItem[] \u2014 array of ","{"," id, header: ReactNode, content: ReactNode ","}"]}),(0,o.jsx)("div",{children:"allowMultiple?: boolean \u2014 allow multiple sections open at once (default false)"}),(0,o.jsx)("div",{children:"defaultOpen?: string \u2014 id of section to open by default"}),(0,o.jsx)("div",{children:"headerStyle?: CSSProperties \u2014 extra styles for header buttons"}),(0,o.jsx)("div",{children:"activeHeaderStyle?: CSSProperties \u2014 extra styles applied to header when section is expanded (e.g., highlight bg)"}),(0,o.jsx)("div",{children:"contentStyle?: CSSProperties \u2014 extra styles for content wrappers"}),(0,o.jsx)("div",{children:"chevronSize?: number \u2014 size of the chevron icon (default 18)"})]})})]}),t==="appheader"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"AppHeader"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:'Top app bar used across all pages. The main header (logo + org name + icons) is always present. On sub-pages, variant "back" adds a "\u2039 Back" sub-bar below the header with optional share icon. Logo comes from server \u2014 changes per client.'}),(0,o.jsx)(Card,{title:"Home variant",desc:"Default header \u2014 logoUrl replaces placeholder at runtime",children:(0,o.jsx)("div",{style:{maxWidth:390,border:`1px solid ${u.gray200}`,borderRadius:i.radii.badge,overflow:"hidden"},children:(0,o.jsx)(pu,{variant:"home",orgName:"PBA",notifCount:1})})}),(0,o.jsx)(Card,{title:"Back variant",desc:"Sub-page: main header stays, \u2039 Back sub-bar + share icon appear below",children:(0,o.jsx)("div",{style:{maxWidth:390,border:`1px solid ${u.gray200}`,borderRadius:i.radii.badge,overflow:"hidden"},children:(0,o.jsx)(pu,{variant:"back",pageTitle:"All Games",notifCount:0,showShare:!0})})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:'variant: "home" | "back" \u2014 home shows header only, back adds \u2039 Back sub-bar below header'}),(0,o.jsx)("div",{children:"orgName: string \u2014 organization display name (always shown in header)"}),(0,o.jsx)("div",{children:"logoUrl?: string \u2014 server-provided logo image URL (fallback: colored square)"}),(0,o.jsx)("div",{children:"pageTitle: string \u2014 currently unused, reserved for future breadcrumb label"}),(0,o.jsx)("div",{children:"showSearch / showNotifications / showMenu: boolean \u2014 toggle right-side icons"}),(0,o.jsx)("div",{children:"showShare: boolean \u2014 show share icon on the back sub-bar (default false)"}),(0,o.jsx)("div",{children:"notifCount: number \u2014 red badge on notification bell (0 = no badge)"})]})})]}),t==="bottomtabbar"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"BottomTabBar"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Persistent bottom navigation bar present on all main pages. 4 tabs: Games (trophy), Saved (bookmark), Following (heart), Shop (bag). Active tab shows filled icon + bold label in accent color."}),(0,o.jsx)(Card,{title:"Interactive \u2014 click to switch tabs",desc:"Full-width bottom tab bar with active state",children:(0,o.jsx)("div",{style:{maxWidth:390,border:`1px solid ${u.gray200}`,borderRadius:i.radii.badge,overflow:"hidden"},children:(0,o.jsx)(Um,{})})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsxs)("div",{children:["tabs?: BottomTab[] \u2014 array of ","{"," id, label, icon ","}"," (defaults to Games/Saved/Following/Shop)"]}),(0,o.jsx)("div",{children:"active?: string \u2014 currently active tab id"}),(0,o.jsx)("div",{children:"onSelect?: (id) => void \u2014 callback when tab is tapped"}),(0,o.jsx)("div",{children:"accentColor?: string \u2014 override active tab color (default: primary)"})]})})]}),t==="sidemenu"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"SideMenu"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Sales-style hamburger menu that slides from the right. Shows org logo + name, expandable Divisions with sub-items, nav items with icons, Language selector, and Log Out. Logo comes from server per client."}),(0,o.jsx)(Card,{title:"Side Menu (Full Preview)",desc:"Dark backdrop + right-side panel with expandable divisions, nav items, logout",children:(0,o.jsx)(gu,{})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:'orgName: string \u2014 org display name (e.g., "PBA")'}),(0,o.jsx)("div",{children:'orgSubtitle?: string \u2014 subtitle (e.g., "Basketball Association")'}),(0,o.jsx)("div",{children:"logoUrl?: string \u2014 server-provided org logo URL"}),(0,o.jsx)("div",{children:"items?: SideMenuItem[] \u2014 menu items with optional subItems for accordion"})]})})]}),t==="teamfollowcard"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"TeamFollowCard"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:'Team card from the "Manage following" page. 3-column grid layout with centered logo, team name (2-line clamp), and "Following"/"Follow" status text. Matches Figma spec: W:114 Fill, border-radius 12.'}),(0,o.jsx)(Card,{title:"Card states",desc:"Click any card to toggle follow state \u2014 Following (gray text) vs Follow (blue text)",children:(0,o.jsx)(PTeamFollowCardPreview,{})}),(0,o.jsx)(Card,{title:"Manage Following \u2014 full layout",desc:"Sectioned flex rows with 'Following' + category headers, matching Figma Manage Following page (gap:8 between cards, gap:24 between sections)",children:(0,o.jsx)("div",{style:{maxWidth:358},children:(0,o.jsx)(PTeamFollowGrid,{})})}),(0,o.jsx)(Card,{title:"Props \u2014 PTeamFollowCard",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"teamName: string \u2014 team display name (2-line clamp)"}),(0,o.jsx)("div",{children:'followed: boolean \u2014 true shows "Following" (gray), false shows "Follow" (blue)'}),(0,o.jsx)("div",{children:"onClick: () => void \u2014 card tap handler"})]})}),(0,o.jsx)(Card,{title:"Props \u2014 PTeamFollowGrid",children:(0,o.jsxs)(Q,{children:[(0,o.jsxs)("div",{children:["sections: ","{"," title, teams: ","{"," name, followed ","}","[] ","}","[] \u2014 grouped team sections"]}),(0,o.jsx)("div",{children:"onClick: (name) => void \u2014 callback when a card is tapped"}),(0,o.jsx)("div",{style:{marginTop:i.spacing.sm,fontSize:i.typography.sizes.xxs,color:u.gray400},children:"Figma: flex row per section, gap:8px between cards, gap:24px between sections"})]})})]}),t==="competitionfollowlist"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"CompetitionFollowList"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Onboarding flow component: collapsible list of competitions/leagues, each expanding to a 3-column team grid with Follow/Following toggle. Search bar at top, Continue button with follow count at bottom."}),(0,o.jsx)(Card,{title:"Interactive \u2014 expand a league and follow teams",desc:"Click a league to expand its team grid, click teams to follow/unfollow",children:(0,o.jsx)(PCompetitionFollowList,{})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsxs)("div",{children:["competitions?: Competition[] \u2014 list of ","{"," name, teamCount, teams: ","{"," name, followed ","}","[] ","}"]}),(0,o.jsx)("div",{children:"onToggleFollow?: (compIdx, teamIdx) => void \u2014 callback when team is toggled"})]})})]}),t==="myfollowinglist"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"MyFollowingList"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:'Manage Following page: shows followed teams and players with Unfollow buttons and "+ Add" controls. Teams show logo + name + division. Players show jersey number circle + name.'}),(0,o.jsx)(Card,{title:"Interactive \u2014 click Unfollow to remove",desc:"Teams and Players sections with add/unfollow controls",children:(0,o.jsx)(PMyFollowingList,{teams:[{name:"Riverside Mustangs",division:"PBA Varsity Division"},{name:"Valley Vista Cougars",division:"PBA Regional Division"}],players:[{name:"Marcus Caldwell",number:1,teamColor:"#1e3a5f"},{name:"Jayden Smith",number:11,teamColor:"#1e3a5f"}]})})]}),t==="followedplayers"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"Home \u2014 Following Strip"}),(0,o.jsxs)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:["Single horizontal scrollable row at the ",(0,o.jsx)("strong",{children:"top of the Home page"}),", above the banner. Shows teams and players the user follows \u2014 all mixed in one row. Team chips show the team logo circle. Player chips show a photo circle (claimed) or a colored circle with jersey number (unclaimed). Tapping navigates to TeamPage or PlayerProfile."]}),(0,o.jsx)(Card,{title:"PHomeFollowingSection",desc:"Mixed team + player circular chips \u2014 2 teams, 1 claimed player (photo), 2 unclaimed players (number)",children:(0,o.jsx)("div",{style:{background:u.white,borderRadius:i.radii.card,overflow:"hidden"},children:(0,o.jsx)(PHomeFollowingSection,{})})}),(0,o.jsx)(Card,{title:"Teams only",desc:"Only followed teams, no players yet",children:(0,o.jsx)("div",{style:{background:u.white,borderRadius:i.radii.card,overflow:"hidden"},children:(0,o.jsx)(PHomeFollowingSection,{items:[{type:"team",name:"S.D. Spartans Men"},{type:"team",name:"Maccabi Kiryat Gat"}]})})}),(0,o.jsx)(Card,{title:"Props \u2014 PHomeFollowingSection",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:"items: HomeFollowingItem[] \u2014 ordered list of teams + players to display"}),(0,o.jsxs)("div",{children:["  { type: 'team', name: string, logoUrl?: string }"," \u2014 circular logo from server (img); placeholder shown when no URL"]}),(0,o.jsxs)("div",{children:["  { type: 'player', number, teamColor?, photoUrl?, claimed? }"," \u2014 circle chip"]}),(0,o.jsx)("div",{children:"onTeamClick: (name) => void \u2014 navigate to TeamPage"}),(0,o.jsx)("div",{children:"onPlayerClick: (number) => void \u2014 navigate to PlayerProfile"})]})})]}),t==="footer"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"Footer"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:'Page footer with org logo, navigation links (About us, FAQ, Privacy), social media icons (Facebook, X, Instagram, YouTube, TikTok, Email), copyright text, and "Powered by Pixellot" branding.'}),(0,o.jsx)(Card,{title:"Default Footer",desc:"Full footer with all sections",children:(0,o.jsx)("div",{style:{maxWidth:390,borderRadius:i.radii.badge,overflow:"hidden",border:`1px solid ${u.gray200}`},children:(0,o.jsx)(PFooter,{})})}),(0,o.jsx)(Card,{title:"Custom org + no Powered By",desc:"Footer with custom org name and hidden branding",children:(0,o.jsx)("div",{style:{maxWidth:390,borderRadius:i.radii.badge,overflow:"hidden",border:`1px solid ${u.gray200}`},children:(0,o.jsx)(PFooter,{orgName:"Spartans Athletics",showPoweredBy:!1,links:[{label:"Home"},{label:"Teams"},{label:"Contact"}]})})}),(0,o.jsx)(Card,{title:"Props",children:(0,o.jsxs)(Q,{children:[(0,o.jsx)("div",{children:'orgName: string \u2014 org name for copyright ("PBA")'}),(0,o.jsx)("div",{children:"logoUrl?: string \u2014 server-provided logo URL"}),(0,o.jsxs)("div",{children:["links?: ","{"," label, href? ","}","[] \u2014 nav link items"]}),(0,o.jsx)("div",{children:'showPoweredBy: boolean (true) \u2014 show "Powered by Pixellot" line'})]})})]}),t==="jersey"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"JerseyItem"}),(0,o.jsx)(Card,{title:"Jersey with number",desc:"SVG basketball jersey \u2014 tap to select. Color is team-configurable. Selected shows green stroke and checkmark.",code:P.jerseyItem,codeTitle:"JerseyItem.vue",children:(0,o.jsxs)("div",{style:{display:"flex",gap:i.spacing.lg2,alignItems:"center",flexWrap:"wrap"},children:[(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(PJersey,{number:7}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs},children:"Default (red)"})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(PJersey,{number:23,selected:!0,onClick:()=>{}}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs},children:"Selected (green stroke)"})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(PJersey,{number:10,color:"#116DFF"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs},children:"Custom (blue)"})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(PJersey,{number:5,color:"#E8332B"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs},children:"Custom (accent)"})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(PJersey,{number:33,color:"#1A3B8A"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs},children:"Custom (navy)"})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(PJersey,{number:11,color:"#FFFFFF"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs},children:"White (auto dark text)"})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(PJersey,{number:8,color:"#FFE000"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs},children:"Yellow (auto dark text)"})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(PJersey,{number:3,color:"#90EE90"}),(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginTop:i.spacing.xs},children:"Light green (auto dark text)"})]})]})})]}),t==="jerseygrid"&&(0,o.jsxs)(Card,{title:"JerseyGrid",desc:"Flex-wrap grid of selectable jerseys with 24px gap, space-between",code:P.jerseyGrid,codeTitle:"JerseyGrid.vue",children:[(0,o.jsx)("div",{style:{maxWidth:398,display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:i.spacing.xl,padding:`0 ${i.spacing.xs}px`},children:[1,2,3,4,5,6,7,8].map(b=>(0,o.jsx)(PJersey,{number:b,selected:s.includes(b),onClick:()=>T(b)},b))}),(0,o.jsxs)("div",{style:{marginTop:i.spacing.md,fontSize:i.typography.sizes.caption,color:u.gray400},children:["Selected: [",s.join(", "),"] \u2014 click jerseys to toggle"]})]}),t==="auth"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"AuthPage (Live Preview)"}),(0,o.jsx)(Km,{tab:r,setTab:n})]}),t==="onboarding"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"PlayerSelectPage (Live Preview)"}),(0,o.jsx)(Card,{title:"Page Code",code:P.onboardingPage,codeTitle:"views/PlayerSelectPage.vue",children:(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:0},children:'Full onboarding page with jersey selection grid, "See All" expand, and sticky "Finish" footer.'})}),(0,o.jsx)($m,{selJerseys:s,toggleJ:T})]}),t==="emptystate"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"EmptyState"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Reusable empty state with icon, title, subtitle, and optional CTA. 12 built-in presets for every data-dependent section."}),(0,o.jsx)(Card,{title:"Presets \u2014 with CTA",code:P.emptyState,codeTitle:"EmptyState.vue",children:(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:i.spacing.sm},children:["noFollowing","noPersonal","noFollowedPlayers","noTeamsFound","noClaimedPlayer","noSearchResults"].filter(b=>EMPTY_PRESETS[b].cta).map(b=>(0,o.jsxs)("div",{style:{border:`1px solid ${u.gray200}`,borderRadius:i.radii.badge,overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{fontSize:i.typography.sizes.mini,color:u.gray400,padding:"6px 10px 0",fontFamily:"monospace"},children:['preset="',b,'"']}),(0,o.jsx)(PEmptyState,{preset:b})]},b))})}),(0,o.jsx)(Card,{title:"Presets \u2014 no CTA",children:(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:i.spacing.sm},children:["noLiveGames","noRecentGames","noNotifications","noHighlights","noSavedVideos","noPlayerStats"].map(b=>(0,o.jsxs)("div",{style:{border:`1px solid ${u.gray200}`,borderRadius:i.radii.badge,overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{fontSize:i.typography.sizes.mini,color:u.gray400,padding:"6px 10px 0",fontFamily:"monospace"},children:['preset="',b,'"']}),(0,o.jsx)(PEmptyState,{preset:b})]},b))})}),(0,o.jsx)(Card,{title:"Where They Go",desc:"Mapping of presets to app screens",children:(0,o.jsxs)(SpecBlock,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noLiveGames"})," \u2192 HomePage Live section"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noFollowing"})," \u2192 HomePage Following section"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noRecentGames"})," \u2192 HomePage Recent Games section"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noNotifications"})," \u2192 NotificationCenter dropdown"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noHighlights"})," \u2192 GameDetail highlights section"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noPersonal"})," \u2192 GameDetail personal highlights"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noPlayerStats"})," \u2192 GameDetail stats tab"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noFollowedPlayers"})," \u2192 GameDetail followed players"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noSavedVideos"})," \u2192 Profile Saved Videos"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noSearchResults"})," \u2192 Search results page"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noTeamsFound"})," \u2192 Onboarding team selection"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"noClaimedPlayer"})," \u2192 Profile sidebar claimed section"]})]})})]}),t==="errorstate"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"ErrorState"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"6 error variants \u2014 each with contextual title, subtitle, and appropriate CTA"}),(0,o.jsx)(Card,{title:"All Variants",code:P.errorState,codeTitle:"ErrorState.vue",children:(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:i.spacing.sm},children:["generic","network","timeout","video","data","auth"].map(b=>(0,o.jsxs)("div",{style:{border:`1px solid ${u.gray200}`,borderRadius:i.radii.badge,overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{fontSize:i.typography.sizes.mini,color:u.gray400,padding:"6px 10px 0",fontFamily:"monospace"},children:['variant="',b,'"']}),(0,o.jsx)(PErrorState,{variant:b})]},b))})}),(0,o.jsx)(Card,{title:"Where They Go",desc:"Mapping of error variants to app contexts",children:(0,o.jsxs)(SpecBlock,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"generic"})," \u2192 Fallback for any unhandled error"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"network"})," \u2192 API calls fail due to connectivity"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"timeout"})," \u2192 Server response too slow"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"video"})," \u2192 Video player load failure / still processing"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"data"})," \u2192 Stats, highlights, or game data failed to load"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("code",{style:{background:u.gray50,padding:"2px 6px",borderRadius:i.radii.sm,fontSize:i.typography.sizes.xxs},children:"auth"})," \u2192 Session expired, token invalid"]})]})})]}),t==="offlinebanner"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"OfflineBanner"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Persistent top banner shown when the device loses network connectivity"}),(0,o.jsx)(Card,{title:"Preview",code:P.offlineBanner,codeTitle:"OfflineBanner.vue",children:(0,o.jsx)("div",{style:{maxWidth:398},children:(0,o.jsx)(Wm,{})})}),(0,o.jsx)(Card,{title:"Anatomy",children:(0,o.jsxs)(Q,{variant:"muted",children:[(0,o.jsxs)("div",{children:["Background: ",(0,o.jsx)("code",{style:{background:u.errorRed,color:u.white,padding:"1px 6px",borderRadius:i.radii.sm,opacity:.15},children:"#FEF2F2"})," (red-50)"]}),(0,o.jsxs)("div",{children:["Border: ",(0,o.jsx)("code",{style:{background:u.gray50,padding:"1px 6px",borderRadius:i.radii.sm},children:"rgba(239,68,68,0.15)"})]}),(0,o.jsxs)("div",{children:["Red dot: 8\xD78 circle ",(0,o.jsx)("code",{style:{background:u.errorRed,color:u.white,padding:"1px 6px",borderRadius:i.radii.sm},children:"#EF4444"})]}),(0,o.jsxs)("div",{children:["Title: 14px / 600 / ",u.darkText]}),(0,o.jsxs)("div",{children:["Subtitle: 12px / 400 / ",u.gray500]}),(0,o.jsxs)("div",{children:["Retry link: 13px / 600 / ",u.errorRed]}),(0,o.jsx)("div",{children:"Placement: sticky top of any page, above content"})]})})]}),t==="skeletons"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"Skeletons & Loaders"}),(0,o.jsx)("p",{style:{fontSize:i.typography.sizes.body2,color:u.gray400,margin:"0 0 16px"},children:"Animated placeholder components for loading states \u2014 skeleton blocks, cards, inputs, and spinning loaders"}),(0,o.jsx)(Card,{title:"Skeleton Block \u2014 Various Sizes",code:P.skeletonBlock,codeTitle:"SkeletonBlock.vue",children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i.spacing.md,maxWidth:398},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.sm},children:"16px (default)"}),(0,o.jsx)(ct,{})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.sm},children:"20px"}),(0,o.jsx)(ct,{height:20})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.sm},children:"40px (button-sized)"}),(0,o.jsx)(ct,{height:i.sizes.buttonMd})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400,marginBottom:i.spacing.sm},children:"46px (input-sized)"}),(0,o.jsx)(ct,{height:i.sizes.inputHeight})]})]})}),(0,o.jsx)(Card,{title:"Skeleton Card",code:P.skeletonCard,codeTitle:"SkeletonCard.vue",children:(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:i.spacing.lg,maxWidth:500},children:[(0,o.jsx)(yu,{}),(0,o.jsx)(yu,{})]})}),(0,o.jsx)(Card,{title:"Skeleton Input",code:P.skeletonInput,codeTitle:"SkeletonInput.vue",children:(0,o.jsx)("div",{style:{maxWidth:398},children:(0,o.jsx)(Nm,{})})}),(0,o.jsx)(Card,{title:"Loading Spinner \u2014 3 Sizes",code:P.loadingSpinner,codeTitle:"LoadingSpinner.vue",children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:i.spacing.xl},children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"sm"}),(0,o.jsx)(Sn,{size:16})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"md"}),(0,o.jsx)(Sn,{size:24})]}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:i.spacing.sm},children:[(0,o.jsx)("div",{style:{fontSize:i.typography.sizes.xxs,color:u.gray400},children:"lg"}),(0,o.jsx)(Sn,{size:32})]})]})}),(0,o.jsx)(Card,{title:"Usage Guidelines",children:(0,o.jsxs)(Cn,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Skeleton Block:"})," Use for text lines, headings, and flexible-sized content"]}),(0,o.jsxs)("div",{style:{marginTop:i.spacing.sm},children:[(0,o.jsx)("strong",{children:"Skeleton Card:"})," For card-based layouts like game cards or product cards with image + text"]}),(0,o.jsxs)("div",{style:{marginTop:i.spacing.sm},children:[(0,o.jsx)("strong",{children:"Skeleton Input:"})," Show when a form is loading \u2014 exactly 46px height matches PInput"]}),(0,o.jsxs)("div",{style:{marginTop:i.spacing.sm},children:[(0,o.jsx)("strong",{children:"Loading Spinner:"})," Central loading indicator \u2014 use sm in buttons, md for inline sections, lg for full-page loads"]})]})})]}),t==="homepage"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"HomePage (Following Tab)"}),(0,o.jsx)(Card,{title:"Page Overview",desc:"Main home feed with MainTopBar, MainTabs, live games, following section, and recent games",children:(0,o.jsxs)(Cn,{children:[(0,o.jsx)("div",{style:{marginBottom:i.spacing.sm},children:"Structure:"}),(0,o.jsxs)("ul",{style:{margin:0,paddingLeft:i.spacing.lg},children:[(0,o.jsx)("li",{children:'MainTopBar (Pixellot logo, search, notifications, user "BR" avatar)'}),(0,o.jsx)("li",{children:"MainTabs (Following active, All Teams, Team Shop) \u2014 RED underline"}),(0,o.jsx)("li",{children:"Hero banner carousel placeholder"}),(0,o.jsx)("li",{children:'SectionHeader "Live" with "See all >"'}),(0,o.jsx)("li",{children:"Horizontal scroll of LiveGameCards"}),(0,o.jsx)("li",{children:'SectionHeader "Following"'}),(0,o.jsx)("li",{children:"SubTabs (Athletes | Teams) \u2014 BLUE underline"}),(0,o.jsx)("li",{children:'FilterDropdown "All Teams"'}),(0,o.jsx)("li",{children:"Jersey avatar circles for followed athletes"}),(0,o.jsx)("li",{children:'SectionHeader "Recent Games"'}),(0,o.jsx)("li",{children:"GameResultCards (vertical list)"}),(0,o.jsx)("li",{children:'"See All >" button'})]})]})})]}),t==="gamedetailpage"&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{fontSize:i.typography.sizes.lg,fontWeight:i.typography.weights.extraBold,color:u.darkText,marginBottom:i.spacing.md2},children:"GameDetailPage"}),(0,o.jsx)(Card,{title:"Page Overview",desc:"Detailed game view with score, videos, stats, and player leaders",children:(0,o.jsxs)(Cn,{children:[(0,o.jsx)("div",{style:{marginBottom:i.spacing.sm},children:"Structure:"}),(0,o.jsxs)("ul",{style:{margin:0,paddingLeft:i.spacing.lg},children:[(0,o.jsx)("li",{children:"MainTopBar"}),(0,o.jsx)("li",{children:'BackButton "\u2190 Back"'}),(0,o.jsx)("li",{children:"ScoreCard (89 vs 77, Final, date, standings)"}),(0,o.jsx)("li",{children:"VideoTypeChips row: Full Game (active/RED), Condensed Game, Game Highlights, with lock icons"}),(0,o.jsx)("li",{children:'"Full Game" section \u2014 FreeBadge + VideoThumbnail'}),(0,o.jsx)("li",{children:'"Condensed Game" section \u2014 PremiumBadge + VideoThumbnail'}),(0,o.jsx)("li",{children:'"Game Highlights" section \u2014 PremiumBadge + horizontal VideoThumbnails'}),(0,o.jsx)("li",{children:'"Personal Highlights" \u2014 ClaimedBadge + InfoAlert'}),(0,o.jsx)("li",{children:"Team tabs (MainTabs style) showing teams"}),(0,o.jsx)("li",{children:'"Followed Players" + locked VideoThumbnails (lock icon badge)'}),(0,o.jsx)("li",{children:'"Other Players" + PremiumBadge + video thumbnails'}),(0,o.jsx)("li",{children:"TeamStatsBar comparisons (Points, Rebounds, Assists)"}),(0,o.jsx)("li",{children:"PlayerStatsTable (columns: Player, MIN, PTS, REB, AST)"}),(0,o.jsx)("li",{children:"GameLeaders (team logos, leaders comparison)"})]})]})})]})]})]})},v=e==="dark"?ml:gl;return(0,o.jsx)(zv.Provider,{value:e,children:(0,o.jsx)("div",{style:{position:"fixed",inset:0,background:v.white,color:v.darkText,transition:"background 0.3s ease, color 0.3s ease",overflow:"auto"},children:g()})})}var vu=F(Y()),ay=document.getElementById("root");if(ay){let e=document.getElementById("_loader");e&&e.remove(),(0,ty.createRoot)(ay).render((0,vu.jsx)(gm,{children:(0,vu.jsx)(hu,{})}))}})();
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-left.js:
lucide-react/dist/esm/icons/bell.js:
lucide-react/dist/esm/icons/bookmark.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/copy.js:
lucide-react/dist/esm/icons/download.js:
lucide-react/dist/esm/icons/eye-off.js:
lucide-react/dist/esm/icons/eye.js:
lucide-react/dist/esm/icons/menu.js:
lucide-react/dist/esm/icons/moon.js:
lucide-react/dist/esm/icons/play.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/share-2.js:
lucide-react/dist/esm/icons/sun.js:
lucide-react/dist/esm/icons/upload.js:
lucide-react/dist/esm/icons/user.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
