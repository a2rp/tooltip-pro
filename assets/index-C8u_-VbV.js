(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))d(f);new MutationObserver(f=>{for(const w of f)if(w.type==="childList")for(const E of w.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&d(E)}).observe(document,{childList:!0,subtree:!0});function a(f){const w={};return f.integrity&&(w.integrity=f.integrity),f.referrerPolicy&&(w.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?w.credentials="include":f.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function d(f){if(f.ep)return;f.ep=!0;const w=a(f);fetch(f.href,w)}})();function Kp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ks={exports:{}},Vr={},Ss={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c;function Yp(){if($c)return ie;$c=1;var i=Symbol.for("react.element"),u=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),E=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),D=Symbol.iterator;function $(g){return g===null||typeof g!="object"?null:(g=D&&g[D]||g["@@iterator"],typeof g=="function"?g:null)}var re={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,H={};function Q(g,S,G){this.props=g,this.context=S,this.refs=H,this.updater=G||re}Q.prototype.isReactComponent={},Q.prototype.setState=function(g,S){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,S,"setState")},Q.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function ne(){}ne.prototype=Q.prototype;function O(g,S,G){this.props=g,this.context=S,this.refs=H,this.updater=G||re}var he=O.prototype=new ne;he.constructor=O,F(he,Q.prototype),he.isPureReactComponent=!0;var Z=Array.isArray,q=Object.prototype.hasOwnProperty,te={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function X(g,S,G){var b,J={},le=null,ce=null;if(S!=null)for(b in S.ref!==void 0&&(ce=S.ref),S.key!==void 0&&(le=""+S.key),S)q.call(S,b)&&!A.hasOwnProperty(b)&&(J[b]=S[b]);var de=arguments.length-2;if(de===1)J.children=G;else if(1<de){for(var ge=Array(de),_e=0;_e<de;_e++)ge[_e]=arguments[_e+2];J.children=ge}if(g&&g.defaultProps)for(b in de=g.defaultProps,de)J[b]===void 0&&(J[b]=de[b]);return{$$typeof:i,type:g,key:le,ref:ce,props:J,_owner:te.current}}function ze(g,S){return{$$typeof:i,type:g.type,key:S,ref:g.ref,props:g.props,_owner:g._owner}}function ue(g){return typeof g=="object"&&g!==null&&g.$$typeof===i}function Ee(g){var S={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(G){return S[G]})}var Re=/\/+/g;function se(g,S){return typeof g=="object"&&g!==null&&g.key!=null?Ee(""+g.key):S.toString(36)}function Ie(g,S,G,b,J){var le=typeof g;(le==="undefined"||le==="boolean")&&(g=null);var ce=!1;if(g===null)ce=!0;else switch(le){case"string":case"number":ce=!0;break;case"object":switch(g.$$typeof){case i:case u:ce=!0}}if(ce)return ce=g,J=J(ce),g=b===""?"."+se(ce,0):b,Z(J)?(G="",g!=null&&(G=g.replace(Re,"$&/")+"/"),Ie(J,S,G,"",function(_e){return _e})):J!=null&&(ue(J)&&(J=ze(J,G+(!J.key||ce&&ce.key===J.key?"":(""+J.key).replace(Re,"$&/")+"/")+g)),S.push(J)),1;if(ce=0,b=b===""?".":b+":",Z(g))for(var de=0;de<g.length;de++){le=g[de];var ge=b+se(le,de);ce+=Ie(le,S,G,ge,J)}else if(ge=$(g),typeof ge=="function")for(g=ge.call(g),de=0;!(le=g.next()).done;)le=le.value,ge=b+se(le,de++),ce+=Ie(le,S,G,ge,J);else if(le==="object")throw S=String(g),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.");return ce}function Ge(g,S,G){if(g==null)return g;var b=[],J=0;return Ie(g,b,"","",function(le){return S.call(G,le,J++)}),b}function Fe(g){if(g._status===-1){var S=g._result;S=S(),S.then(function(G){(g._status===0||g._status===-1)&&(g._status=1,g._result=G)},function(G){(g._status===0||g._status===-1)&&(g._status=2,g._result=G)}),g._status===-1&&(g._status=0,g._result=S)}if(g._status===1)return g._result.default;throw g._result}var ye={current:null},L={transition:null},V={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:L,ReactCurrentOwner:te};function z(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:Ge,forEach:function(g,S,G){Ge(g,function(){S.apply(this,arguments)},G)},count:function(g){var S=0;return Ge(g,function(){S++}),S},toArray:function(g){return Ge(g,function(S){return S})||[]},only:function(g){if(!ue(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ie.Component=Q,ie.Fragment=a,ie.Profiler=f,ie.PureComponent=O,ie.StrictMode=d,ie.Suspense=k,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,ie.act=z,ie.cloneElement=function(g,S,G){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var b=F({},g.props),J=g.key,le=g.ref,ce=g._owner;if(S!=null){if(S.ref!==void 0&&(le=S.ref,ce=te.current),S.key!==void 0&&(J=""+S.key),g.type&&g.type.defaultProps)var de=g.type.defaultProps;for(ge in S)q.call(S,ge)&&!A.hasOwnProperty(ge)&&(b[ge]=S[ge]===void 0&&de!==void 0?de[ge]:S[ge])}var ge=arguments.length-2;if(ge===1)b.children=G;else if(1<ge){de=Array(ge);for(var _e=0;_e<ge;_e++)de[_e]=arguments[_e+2];b.children=de}return{$$typeof:i,type:g.type,key:J,ref:le,props:b,_owner:ce}},ie.createContext=function(g){return g={$$typeof:E,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},ie.createElement=X,ie.createFactory=function(g){var S=X.bind(null,g);return S.type=g,S},ie.createRef=function(){return{current:null}},ie.forwardRef=function(g){return{$$typeof:C,render:g}},ie.isValidElement=ue,ie.lazy=function(g){return{$$typeof:I,_payload:{_status:-1,_result:g},_init:Fe}},ie.memo=function(g,S){return{$$typeof:T,type:g,compare:S===void 0?null:S}},ie.startTransition=function(g){var S=L.transition;L.transition={};try{g()}finally{L.transition=S}},ie.unstable_act=z,ie.useCallback=function(g,S){return ye.current.useCallback(g,S)},ie.useContext=function(g){return ye.current.useContext(g)},ie.useDebugValue=function(){},ie.useDeferredValue=function(g){return ye.current.useDeferredValue(g)},ie.useEffect=function(g,S){return ye.current.useEffect(g,S)},ie.useId=function(){return ye.current.useId()},ie.useImperativeHandle=function(g,S,G){return ye.current.useImperativeHandle(g,S,G)},ie.useInsertionEffect=function(g,S){return ye.current.useInsertionEffect(g,S)},ie.useLayoutEffect=function(g,S){return ye.current.useLayoutEffect(g,S)},ie.useMemo=function(g,S){return ye.current.useMemo(g,S)},ie.useReducer=function(g,S,G){return ye.current.useReducer(g,S,G)},ie.useRef=function(g){return ye.current.useRef(g)},ie.useState=function(g){return ye.current.useState(g)},ie.useSyncExternalStore=function(g,S,G){return ye.current.useSyncExternalStore(g,S,G)},ie.useTransition=function(){return ye.current.useTransition()},ie.version="18.3.1",ie}var Bc;function $s(){return Bc||(Bc=1,Ss.exports=Yp()),Ss.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc;function Xp(){if(Uc)return Vr;Uc=1;var i=$s(),u=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function E(C,k,T){var I,D={},$=null,re=null;T!==void 0&&($=""+T),k.key!==void 0&&($=""+k.key),k.ref!==void 0&&(re=k.ref);for(I in k)d.call(k,I)&&!w.hasOwnProperty(I)&&(D[I]=k[I]);if(C&&C.defaultProps)for(I in k=C.defaultProps,k)D[I]===void 0&&(D[I]=k[I]);return{$$typeof:u,type:C,key:$,ref:re,props:D,_owner:f.current}}return Vr.Fragment=a,Vr.jsx=E,Vr.jsxs=E,Vr}var Wc;function bp(){return Wc||(Wc=1,ks.exports=Xp()),ks.exports}var m=bp(),ae=$s();const at=Kp(ae);var ai={},Cs={exports:{}},ot={},Es={exports:{}},js={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function Zp(){return Hc||(Hc=1,function(i){function u(L,V){var z=L.length;L.push(V);e:for(;0<z;){var g=z-1>>>1,S=L[g];if(0<f(S,V))L[g]=V,L[z]=S,z=g;else break e}}function a(L){return L.length===0?null:L[0]}function d(L){if(L.length===0)return null;var V=L[0],z=L.pop();if(z!==V){L[0]=z;e:for(var g=0,S=L.length,G=S>>>1;g<G;){var b=2*(g+1)-1,J=L[b],le=b+1,ce=L[le];if(0>f(J,z))le<S&&0>f(ce,J)?(L[g]=ce,L[le]=z,g=le):(L[g]=J,L[b]=z,g=b);else if(le<S&&0>f(ce,z))L[g]=ce,L[le]=z,g=le;else break e}}return V}function f(L,V){var z=L.sortIndex-V.sortIndex;return z!==0?z:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;i.unstable_now=function(){return w.now()}}else{var E=Date,C=E.now();i.unstable_now=function(){return E.now()-C}}var k=[],T=[],I=1,D=null,$=3,re=!1,F=!1,H=!1,Q=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(L){for(var V=a(T);V!==null;){if(V.callback===null)d(T);else if(V.startTime<=L)d(T),V.sortIndex=V.expirationTime,u(k,V);else break;V=a(T)}}function Z(L){if(H=!1,he(L),!F)if(a(k)!==null)F=!0,Fe(q);else{var V=a(T);V!==null&&ye(Z,V.startTime-L)}}function q(L,V){F=!1,H&&(H=!1,ne(X),X=-1),re=!0;var z=$;try{for(he(V),D=a(k);D!==null&&(!(D.expirationTime>V)||L&&!Ee());){var g=D.callback;if(typeof g=="function"){D.callback=null,$=D.priorityLevel;var S=g(D.expirationTime<=V);V=i.unstable_now(),typeof S=="function"?D.callback=S:D===a(k)&&d(k),he(V)}else d(k);D=a(k)}if(D!==null)var G=!0;else{var b=a(T);b!==null&&ye(Z,b.startTime-V),G=!1}return G}finally{D=null,$=z,re=!1}}var te=!1,A=null,X=-1,ze=5,ue=-1;function Ee(){return!(i.unstable_now()-ue<ze)}function Re(){if(A!==null){var L=i.unstable_now();ue=L;var V=!0;try{V=A(!0,L)}finally{V?se():(te=!1,A=null)}}else te=!1}var se;if(typeof O=="function")se=function(){O(Re)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Ge=Ie.port2;Ie.port1.onmessage=Re,se=function(){Ge.postMessage(null)}}else se=function(){Q(Re,0)};function Fe(L){A=L,te||(te=!0,se())}function ye(L,V){X=Q(function(){L(i.unstable_now())},V)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(L){L.callback=null},i.unstable_continueExecution=function(){F||re||(F=!0,Fe(q))},i.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<L?Math.floor(1e3/L):5},i.unstable_getCurrentPriorityLevel=function(){return $},i.unstable_getFirstCallbackNode=function(){return a(k)},i.unstable_next=function(L){switch($){case 1:case 2:case 3:var V=3;break;default:V=$}var z=$;$=V;try{return L()}finally{$=z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=$;$=L;try{return V()}finally{$=z}},i.unstable_scheduleCallback=function(L,V,z){var g=i.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?g+z:g):z=g,L){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=z+S,L={id:I++,callback:V,priorityLevel:L,startTime:z,expirationTime:S,sortIndex:-1},z>g?(L.sortIndex=z,u(T,L),a(k)===null&&L===a(T)&&(H?(ne(X),X=-1):H=!0,ye(Z,z-g))):(L.sortIndex=S,u(k,L),F||re||(F=!0,Fe(q))),L},i.unstable_shouldYield=Ee,i.unstable_wrapCallback=function(L){var V=$;return function(){var z=$;$=V;try{return L.apply(this,arguments)}finally{$=z}}}}(js)),js}var Vc;function qp(){return Vc||(Vc=1,Es.exports=Zp()),Es.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc;function Jp(){if(Qc)return ot;Qc=1;var i=$s(),u=qp();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,f={};function w(e,t){E(e,t),E(e+"Capture",t)}function E(e,t){for(f[e]=t,e=0;e<t.length;e++)d.add(t[e])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},D={};function $(e){return k.call(D,e)?!0:k.call(I,e)?!1:T.test(e)?D[e]=!0:(I[e]=!0,!1)}function re(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,t,n,r){if(t===null||typeof t>"u"||re(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function H(e,t,n,r,o,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new H(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var ne=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ne,O);Q[t]=new H(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ne,O);Q[t]=new H(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ne,O);Q[t]=new H(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function he(e,t,n,r){var o=Q.hasOwnProperty(t)?Q[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F(t,n,o,r)&&(n=null),r||o===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Z=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),te=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),Ee=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),Ie=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),L=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,g;function S(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var G=!1;function b(e,t){if(!e||G)return"";G=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var o=x.stack.split(`
`),l=r.stack.split(`
`),s=o.length-1,c=l.length-1;1<=s&&0<=c&&o[s]!==l[c];)c--;for(;1<=s&&0<=c;s--,c--)if(o[s]!==l[c]){if(s!==1||c!==1)do if(s--,c--,0>c||o[s]!==l[c]){var p=`
`+o[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=s&&0<=c);break}}}finally{G=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?S(e):""}function J(e){switch(e.tag){case 5:return S(e.type);case 16:return S("Lazy");case 13:return S("Suspense");case 19:return S("SuspenseList");case 0:case 2:case 15:return e=b(e.type,!1),e;case 11:return e=b(e.type.render,!1),e;case 1:return e=b(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case te:return"Portal";case ze:return"Profiler";case X:return"StrictMode";case se:return"Suspense";case Ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ee:return(e.displayName||"Context")+".Consumer";case ue:return(e._context.displayName||"Context")+".Provider";case Re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ge:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(t);case 8:return t===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _e(e){var t=ge(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){e._valueTracker||(e._valueTracker=_e(e))}function Qs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ge(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pi(e,t){var n=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=de(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ks(e,t){t=t.checked,t!=null&&he(e,"checked",t,!1)}function zi(e,t){Ks(e,t);var n=de(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Li(e,t.type,n):t.hasOwnProperty("defaultValue")&&Li(e,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Li(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function _n(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+de(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(ir(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:de(n)}}function bs(e,t){var n=de(t.value),r=de(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,Js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bd=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function eu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function tu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=eu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Zd=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ri(e,t){if(t){if(Zd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function Mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fi=null,Pn=null,zn=null;function nu(e){if(e=zr(e)){if(typeof Fi!="function")throw Error(a(280));var t=e.stateNode;t&&(t=Eo(t),Fi(e.stateNode,e.type,t))}}function ru(e){Pn?zn?zn.push(e):zn=[e]:Pn=e}function ou(){if(Pn){var e=Pn,t=zn;if(zn=Pn=null,nu(e),t)for(e=0;e<t.length;e++)nu(t[e])}}function iu(e,t){return e(t)}function lu(){}var Ai=!1;function su(e,t,n){if(Ai)return e(t,n);Ai=!0;try{return iu(e,t,n)}finally{Ai=!1,(Pn!==null||zn!==null)&&(lu(),ou())}}function ur(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var $i=!1;if(C)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){$i=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{$i=!1}function qd(e,t,n,r,o,l,s,c,p){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(N){this.onError(N)}}var cr=!1,to=null,no=!1,Bi=null,Jd={onError:function(e){cr=!0,to=e}};function ef(e,t,n,r,o,l,s,c,p){cr=!1,to=null,qd.apply(Jd,arguments)}function tf(e,t,n,r,o,l,s,c,p){if(ef.apply(this,arguments),cr){if(cr){var x=to;cr=!1,to=null}else throw Error(a(198));no||(no=!0,Bi=x)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function au(e){if(cn(e)!==e)throw Error(a(188))}function nf(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return au(o),e;if(l===r)return au(o),t;l=l.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=l;else{for(var s=!1,c=o.child;c;){if(c===n){s=!0,n=o,r=l;break}if(c===r){s=!0,r=o,n=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===n){s=!0,n=l,r=o;break}if(c===r){s=!0,r=l,n=o;break}c=c.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function cu(e){return e=nf(e),e!==null?du(e):null}function du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=du(e);if(t!==null)return t;e=e.sibling}return null}var fu=u.unstable_scheduleCallback,pu=u.unstable_cancelCallback,rf=u.unstable_shouldYield,of=u.unstable_requestPaint,Le=u.unstable_now,lf=u.unstable_getCurrentPriorityLevel,Ui=u.unstable_ImmediatePriority,hu=u.unstable_UserBlockingPriority,ro=u.unstable_NormalPriority,sf=u.unstable_LowPriority,mu=u.unstable_IdlePriority,oo=null,_t=null;function uf(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(oo,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:df,af=Math.log,cf=Math.LN2;function df(e){return e>>>=0,e===0?32:31-(af(e)/cf|0)|0}var io=64,lo=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function so(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~o;c!==0?r=dr(c):(l&=s,l!==0&&(r=dr(l)))}else s=n&~o,s!==0?r=dr(s):l!==0&&(r=dr(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),o=1<<n,r|=e[n],t&=~o;return r}function ff(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-vt(l),c=1<<s,p=o[s];p===-1?((c&n)===0||(c&r)!==0)&&(o[s]=ff(c,t)):p<=t&&(e.expiredLanes|=c),l&=~c}}function Wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gu(){var e=io;return io<<=1,(io&4194240)===0&&(io=64),e}function Hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function hf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-vt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Vi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ve=0;function vu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var yu,Qi,xu,wu,ku,Gi=!1,uo=[],Ut=null,Wt=null,Ht=null,pr=new Map,hr=new Map,Vt=[],mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Su(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function mr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=zr(t),t!==null&&Qi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function gf(e,t,n,r,o){switch(t){case"focusin":return Ut=mr(Ut,e,t,n,r,o),!0;case"dragenter":return Wt=mr(Wt,e,t,n,r,o),!0;case"mouseover":return Ht=mr(Ht,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return pr.set(l,mr(pr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,hr.set(l,mr(hr.get(l)||null,e,t,n,r,o)),!0}return!1}function Cu(e){var t=dn(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=uu(n),t!==null){e.blockedOn=t,ku(e.priority,function(){xu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Di=r,n.target.dispatchEvent(r),Di=null}else return t=zr(n),t!==null&&Qi(t),e.blockedOn=n,!1;t.shift()}return!0}function Eu(e,t,n){ao(e)&&n.delete(t)}function vf(){Gi=!1,Ut!==null&&ao(Ut)&&(Ut=null),Wt!==null&&ao(Wt)&&(Wt=null),Ht!==null&&ao(Ht)&&(Ht=null),pr.forEach(Eu),hr.forEach(Eu)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gi||(Gi=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,vf)))}function vr(e){function t(o){return gr(o,e)}if(0<uo.length){gr(uo[0],e);for(var n=1;n<uo.length;n++){var r=uo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&gr(Ut,e),Wt!==null&&gr(Wt,e),Ht!==null&&gr(Ht,e),pr.forEach(t),hr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)Cu(n),n.blockedOn===null&&Vt.shift()}var Ln=Z.ReactCurrentBatchConfig,co=!0;function yf(e,t,n,r){var o=ve,l=Ln.transition;Ln.transition=null;try{ve=1,Ki(e,t,n,r)}finally{ve=o,Ln.transition=l}}function xf(e,t,n,r){var o=ve,l=Ln.transition;Ln.transition=null;try{ve=4,Ki(e,t,n,r)}finally{ve=o,Ln.transition=l}}function Ki(e,t,n,r){if(co){var o=Yi(e,t,n,r);if(o===null)dl(e,t,r,fo,n),Su(e,r);else if(gf(o,e,t,n,r))r.stopPropagation();else if(Su(e,r),t&4&&-1<mf.indexOf(e)){for(;o!==null;){var l=zr(o);if(l!==null&&yu(l),l=Yi(e,t,n,r),l===null&&dl(e,t,r,fo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else dl(e,t,r,null,n)}}var fo=null;function Yi(e,t,n,r){if(fo=null,e=Mi(r),e=dn(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fo=e,null}function ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lf()){case Ui:return 1;case hu:return 4;case ro:case sf:return 16;case mu:return 536870912;default:return 16}default:return 16}}var Qt=null,Xi=null,po=null;function Nu(){if(po)return po;var e,t=Xi,n=t.length,r,o="value"in Qt?Qt.value:Qt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[l-r];r++);return po=o.slice(e,1<r?1-r:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mo(){return!0}function _u(){return!1}function it(e){function t(n,r,o,l,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?mo:_u,this.isPropagationStopped=_u,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=it(Tn),yr=z({},Tn,{view:0,detail:0}),wf=it(yr),Zi,qi,xr,go=z({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:el,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(Zi=e.screenX-xr.screenX,qi=e.screenY-xr.screenY):qi=Zi=0,xr=e),Zi)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),Pu=it(go),kf=z({},go,{dataTransfer:0}),Sf=it(kf),Cf=z({},yr,{relatedTarget:0}),Ji=it(Cf),Ef=z({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),jf=it(Ef),Nf=z({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_f=it(Nf),Pf=z({},Tn,{data:0}),zu=it(Pf),zf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Of(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tf[e])?!!t[e]:!1}function el(){return Of}var Rf=z({},yr,{key:function(e){if(e.key){var t=zf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:el,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),If=it(Rf),Df=z({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lu=it(Df),Mf=z({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:el}),Ff=it(Mf),Af=z({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$f=it(Af),Bf=z({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uf=it(Bf),Wf=[9,13,27,32],tl=C&&"CompositionEvent"in window,wr=null;C&&"documentMode"in document&&(wr=document.documentMode);var Hf=C&&"TextEvent"in window&&!wr,Tu=C&&(!tl||wr&&8<wr&&11>=wr),Ou=" ",Ru=!1;function Iu(e,t){switch(e){case"keyup":return Wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function Vf(e,t){switch(e){case"compositionend":return Du(t);case"keypress":return t.which!==32?null:(Ru=!0,Ou);case"textInput":return e=t.data,e===Ou&&Ru?null:e;default:return null}}function Qf(e,t){if(On)return e==="compositionend"||!tl&&Iu(e,t)?(e=Nu(),po=Xi=Qt=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tu&&t.locale!=="ko"?null:t.data;default:return null}}var Gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gf[e.type]:t==="textarea"}function Fu(e,t,n,r){ru(r),t=ko(t,"onChange"),0<t.length&&(n=new bi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var kr=null,Sr=null;function Kf(e){ta(e,0)}function vo(e){var t=Fn(e);if(Qs(t))return e}function Yf(e,t){if(e==="change")return t}var Au=!1;if(C){var nl;if(C){var rl="oninput"in document;if(!rl){var $u=document.createElement("div");$u.setAttribute("oninput","return;"),rl=typeof $u.oninput=="function"}nl=rl}else nl=!1;Au=nl&&(!document.documentMode||9<document.documentMode)}function Bu(){kr&&(kr.detachEvent("onpropertychange",Uu),Sr=kr=null)}function Uu(e){if(e.propertyName==="value"&&vo(Sr)){var t=[];Fu(t,Sr,e,Mi(e)),su(Kf,t)}}function Xf(e,t,n){e==="focusin"?(Bu(),kr=t,Sr=n,kr.attachEvent("onpropertychange",Uu)):e==="focusout"&&Bu()}function bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vo(Sr)}function Zf(e,t){if(e==="click")return vo(t)}function qf(e,t){if(e==="input"||e==="change")return vo(t)}function Jf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Jf;function Cr(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!k.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=Wu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wu(n)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qu(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ep(e){var t=Qu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vu(n.ownerDocument.documentElement,n)){if(r!==null&&ol(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Hu(n,l);var s=Hu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tp=C&&"documentMode"in document&&11>=document.documentMode,Rn=null,il=null,Er=null,ll=!1;function Gu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ll||Rn==null||Rn!==Jr(r)||(r=Rn,"selectionStart"in r&&ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Cr(Er,r)||(Er=r,r=ko(il,"onSelect"),0<r.length&&(t=new bi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rn)))}function yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},sl={},Ku={};C&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function xo(e){if(sl[e])return sl[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ku)return sl[e]=t[n];return e}var Yu=xo("animationend"),Xu=xo("animationiteration"),bu=xo("animationstart"),Zu=xo("transitionend"),qu=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){qu.set(e,t),w(t,[e])}for(var ul=0;ul<Ju.length;ul++){var al=Ju[ul],np=al.toLowerCase(),rp=al[0].toUpperCase()+al.slice(1);Gt(np,"on"+rp)}Gt(Yu,"onAnimationEnd"),Gt(Xu,"onAnimationIteration"),Gt(bu,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(Zu,"onTransitionEnd"),E("onMouseEnter",["mouseout","mouseover"]),E("onMouseLeave",["mouseout","mouseover"]),E("onPointerEnter",["pointerout","pointerover"]),E("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),op=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function ea(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tf(r,t,void 0,e),e.currentTarget=null}function ta(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var c=r[s],p=c.instance,x=c.currentTarget;if(c=c.listener,p!==l&&o.isPropagationStopped())break e;ea(o,c,x),l=p}else for(s=0;s<r.length;s++){if(c=r[s],p=c.instance,x=c.currentTarget,c=c.listener,p!==l&&o.isPropagationStopped())break e;ea(o,c,x),l=p}}}if(no)throw e=Bi,no=!1,Bi=null,e}function we(e,t){var n=t[vl];n===void 0&&(n=t[vl]=new Set);var r=e+"__bubble";n.has(r)||(na(t,e,2,!1),n.add(r))}function cl(e,t,n){var r=0;t&&(r|=4),na(n,e,r,t)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[wo]){e[wo]=!0,d.forEach(function(n){n!=="selectionchange"&&(op.has(n)||cl(n,!1,e),cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wo]||(t[wo]=!0,cl("selectionchange",!1,t))}}function na(e,t,n,r){switch(ju(t)){case 1:var o=yf;break;case 4:o=xf;break;default:o=Ki}n=o.bind(null,t,n,e),o=void 0,!$i||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function dl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var p=s.tag;if((p===3||p===4)&&(p=s.stateNode.containerInfo,p===o||p.nodeType===8&&p.parentNode===o))return;s=s.return}for(;c!==null;){if(s=dn(c),s===null)return;if(p=s.tag,p===5||p===6){r=l=s;continue e}c=c.parentNode}}r=r.return}su(function(){var x=l,N=Mi(n),_=[];e:{var j=qu.get(e);if(j!==void 0){var R=bi,B=e;switch(e){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":R=If;break;case"focusin":B="focus",R=Ji;break;case"focusout":B="blur",R=Ji;break;case"beforeblur":case"afterblur":R=Ji;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Ff;break;case Yu:case Xu:case bu:R=jf;break;case Zu:R=$f;break;case"scroll":R=wf;break;case"wheel":R=Uf;break;case"copy":case"cut":case"paste":R=_f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Lu}var U=(t&4)!==0,Te=!U&&e==="scroll",v=U?j!==null?j+"Capture":null:j;U=[];for(var h=x,y;h!==null;){y=h;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,v!==null&&(P=ur(h,v),P!=null&&U.push(_r(h,P,y)))),Te)break;h=h.return}0<U.length&&(j=new R(j,B,null,n,N),_.push({event:j,listeners:U}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",j&&n!==Di&&(B=n.relatedTarget||n.fromElement)&&(dn(B)||B[Ot]))break e;if((R||j)&&(j=N.window===N?N:(j=N.ownerDocument)?j.defaultView||j.parentWindow:window,R?(B=n.relatedTarget||n.toElement,R=x,B=B?dn(B):null,B!==null&&(Te=cn(B),B!==Te||B.tag!==5&&B.tag!==6)&&(B=null)):(R=null,B=x),R!==B)){if(U=Pu,P="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(U=Lu,P="onPointerLeave",v="onPointerEnter",h="pointer"),Te=R==null?j:Fn(R),y=B==null?j:Fn(B),j=new U(P,h+"leave",R,n,N),j.target=Te,j.relatedTarget=y,P=null,dn(N)===x&&(U=new U(v,h+"enter",B,n,N),U.target=y,U.relatedTarget=Te,P=U),Te=P,R&&B)t:{for(U=R,v=B,h=0,y=U;y;y=Dn(y))h++;for(y=0,P=v;P;P=Dn(P))y++;for(;0<h-y;)U=Dn(U),h--;for(;0<y-h;)v=Dn(v),y--;for(;h--;){if(U===v||v!==null&&U===v.alternate)break t;U=Dn(U),v=Dn(v)}U=null}else U=null;R!==null&&ra(_,j,R,U,!1),B!==null&&Te!==null&&ra(_,Te,B,U,!0)}}e:{if(j=x?Fn(x):window,R=j.nodeName&&j.nodeName.toLowerCase(),R==="select"||R==="input"&&j.type==="file")var W=Yf;else if(Mu(j))if(Au)W=qf;else{W=bf;var K=Xf}else(R=j.nodeName)&&R.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(W=Zf);if(W&&(W=W(e,x))){Fu(_,W,n,N);break e}K&&K(e,j,x),e==="focusout"&&(K=j._wrapperState)&&K.controlled&&j.type==="number"&&Li(j,"number",j.value)}switch(K=x?Fn(x):window,e){case"focusin":(Mu(K)||K.contentEditable==="true")&&(Rn=K,il=x,Er=null);break;case"focusout":Er=il=Rn=null;break;case"mousedown":ll=!0;break;case"contextmenu":case"mouseup":case"dragend":ll=!1,Gu(_,n,N);break;case"selectionchange":if(tp)break;case"keydown":case"keyup":Gu(_,n,N)}var Y;if(tl)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else On?Iu(e,n)&&(ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ee="onCompositionStart");ee&&(Tu&&n.locale!=="ko"&&(On||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&On&&(Y=Nu()):(Qt=N,Xi="value"in Qt?Qt.value:Qt.textContent,On=!0)),K=ko(x,ee),0<K.length&&(ee=new zu(ee,e,null,n,N),_.push({event:ee,listeners:K}),Y?ee.data=Y:(Y=Du(n),Y!==null&&(ee.data=Y)))),(Y=Hf?Vf(e,n):Qf(e,n))&&(x=ko(x,"onBeforeInput"),0<x.length&&(N=new zu("onBeforeInput","beforeinput",null,n,N),_.push({event:N,listeners:x}),N.data=Y))}ta(_,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=ur(e,n),l!=null&&r.unshift(_r(e,l,o)),l=ur(e,t),l!=null&&r.push(_r(e,l,o))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ra(e,t,n,r,o){for(var l=t._reactName,s=[];n!==null&&n!==r;){var c=n,p=c.alternate,x=c.stateNode;if(p!==null&&p===r)break;c.tag===5&&x!==null&&(c=x,o?(p=ur(n,l),p!=null&&s.unshift(_r(n,p,c))):o||(p=ur(n,l),p!=null&&s.push(_r(n,p,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var ip=/\r\n?/g,lp=/\u0000|\uFFFD/g;function oa(e){return(typeof e=="string"?e:""+e).replace(ip,`
`).replace(lp,"")}function So(e,t,n){if(t=oa(t),oa(e)!==t&&n)throw Error(a(425))}function Co(){}var fl=null,pl=null;function hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ml=typeof setTimeout=="function"?setTimeout:void 0,sp=typeof clearTimeout=="function"?clearTimeout:void 0,ia=typeof Promise=="function"?Promise:void 0,up=typeof queueMicrotask=="function"?queueMicrotask:typeof ia<"u"?function(e){return ia.resolve(null).then(e).catch(ap)}:ml;function ap(e){setTimeout(function(){throw e})}function gl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);vr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function la(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mn=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Mn,Pr="__reactProps$"+Mn,Ot="__reactContainer$"+Mn,vl="__reactEvents$"+Mn,cp="__reactListeners$"+Mn,dp="__reactHandles$"+Mn;function dn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=la(e);e!==null;){if(n=e[Pt])return n;e=la(e)}return t}e=n,n=e.parentNode}return null}function zr(e){return e=e[Pt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Eo(e){return e[Pr]||null}var yl=[],An=-1;function Yt(e){return{current:e}}function ke(e){0>An||(e.current=yl[An],yl[An]=null,An--)}function xe(e,t){An++,yl[An]=e.current,e.current=t}var Xt={},Ke=Yt(Xt),Je=Yt(!1),fn=Xt;function $n(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function et(e){return e=e.childContextTypes,e!=null}function jo(){ke(Je),ke(Ke)}function sa(e,t,n){if(Ke.current!==Xt)throw Error(a(168));xe(Ke,t),xe(Je,n)}function ua(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(a(108,ce(e)||"Unknown",o));return z({},n,r)}function No(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,fn=Ke.current,xe(Ke,e),xe(Je,Je.current),!0}function aa(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=ua(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,ke(Je),ke(Ke),xe(Ke,e)):ke(Je),xe(Je,n)}var Rt=null,_o=!1,xl=!1;function ca(e){Rt===null?Rt=[e]:Rt.push(e)}function fp(e){_o=!0,ca(e)}function bt(){if(!xl&&Rt!==null){xl=!0;var e=0,t=ve;try{var n=Rt;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,_o=!1}catch(o){throw Rt!==null&&(Rt=Rt.slice(e+1)),fu(Ui,bt),o}finally{ve=t,xl=!1}}return null}var Bn=[],Un=0,Po=null,zo=0,ct=[],dt=0,pn=null,It=1,Dt="";function hn(e,t){Bn[Un++]=zo,Bn[Un++]=Po,Po=e,zo=t}function da(e,t,n){ct[dt++]=It,ct[dt++]=Dt,ct[dt++]=pn,pn=e;var r=It;e=Dt;var o=32-vt(r)-1;r&=~(1<<o),n+=1;var l=32-vt(t)+o;if(30<l){var s=o-o%5;l=(r&(1<<s)-1).toString(32),r>>=s,o-=s,It=1<<32-vt(t)+o|n<<o|r,Dt=l+e}else It=1<<l|n<<o|r,Dt=e}function wl(e){e.return!==null&&(hn(e,1),da(e,1,0))}function kl(e){for(;e===Po;)Po=Bn[--Un],Bn[Un]=null,zo=Bn[--Un],Bn[Un]=null;for(;e===pn;)pn=ct[--dt],ct[dt]=null,Dt=ct[--dt],ct[dt]=null,It=ct[--dt],ct[dt]=null}var lt=null,st=null,Ce=!1,xt=null;function fa(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,st=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:It,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,st=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if(Ce){var t=st;if(t){var n=t;if(!pa(e,t)){if(Sl(e))throw Error(a(418));t=Kt(n.nextSibling);var r=lt;t&&pa(e,t)?fa(r,n):(e.flags=e.flags&-4097|2,Ce=!1,lt=e)}}else{if(Sl(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ce=!1,lt=e}}}function ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function Lo(e){if(e!==lt)return!1;if(!Ce)return ha(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hl(e.type,e.memoizedProps)),t&&(t=st)){if(Sl(e))throw ma(),Error(a(418));for(;t;)fa(e,t),t=Kt(t.nextSibling)}if(ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=lt?Kt(e.stateNode.nextSibling):null;return!0}function ma(){for(var e=st;e;)e=Kt(e.nextSibling)}function Wn(){st=lt=null,Ce=!1}function El(e){xt===null?xt=[e]:xt.push(e)}var pp=Z.ReactCurrentBatchConfig;function Lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var c=o.refs;s===null?delete c[l]:c[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function To(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ga(e){var t=e._init;return t(e._payload)}function va(e){function t(v,h){if(e){var y=v.deletions;y===null?(v.deletions=[h],v.flags|=16):y.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function o(v,h){return v=on(v,h),v.index=0,v.sibling=null,v}function l(v,h,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<h?(v.flags|=2,h):y):(v.flags|=2,h)):(v.flags|=1048576,h)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function c(v,h,y,P){return h===null||h.tag!==6?(h=ms(y,v.mode,P),h.return=v,h):(h=o(h,y),h.return=v,h)}function p(v,h,y,P){var W=y.type;return W===A?N(v,h,y.props.children,P,y.key):h!==null&&(h.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Fe&&ga(W)===h.type)?(P=o(h,y.props),P.ref=Lr(v,h,y),P.return=v,P):(P=ti(y.type,y.key,y.props,null,v.mode,P),P.ref=Lr(v,h,y),P.return=v,P)}function x(v,h,y,P){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=gs(y,v.mode,P),h.return=v,h):(h=o(h,y.children||[]),h.return=v,h)}function N(v,h,y,P,W){return h===null||h.tag!==7?(h=Sn(y,v.mode,P,W),h.return=v,h):(h=o(h,y),h.return=v,h)}function _(v,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ms(""+h,v.mode,y),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case q:return y=ti(h.type,h.key,h.props,null,v.mode,y),y.ref=Lr(v,null,h),y.return=v,y;case te:return h=gs(h,v.mode,y),h.return=v,h;case Fe:var P=h._init;return _(v,P(h._payload),y)}if(ir(h)||V(h))return h=Sn(h,v.mode,y,null),h.return=v,h;To(v,h)}return null}function j(v,h,y,P){var W=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return W!==null?null:c(v,h,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case q:return y.key===W?p(v,h,y,P):null;case te:return y.key===W?x(v,h,y,P):null;case Fe:return W=y._init,j(v,h,W(y._payload),P)}if(ir(y)||V(y))return W!==null?null:N(v,h,y,P,null);To(v,y)}return null}function R(v,h,y,P,W){if(typeof P=="string"&&P!==""||typeof P=="number")return v=v.get(y)||null,c(h,v,""+P,W);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case q:return v=v.get(P.key===null?y:P.key)||null,p(h,v,P,W);case te:return v=v.get(P.key===null?y:P.key)||null,x(h,v,P,W);case Fe:var K=P._init;return R(v,h,y,K(P._payload),W)}if(ir(P)||V(P))return v=v.get(y)||null,N(h,v,P,W,null);To(h,P)}return null}function B(v,h,y,P){for(var W=null,K=null,Y=h,ee=h=0,He=null;Y!==null&&ee<y.length;ee++){Y.index>ee?(He=Y,Y=null):He=Y.sibling;var pe=j(v,Y,y[ee],P);if(pe===null){Y===null&&(Y=He);break}e&&Y&&pe.alternate===null&&t(v,Y),h=l(pe,h,ee),K===null?W=pe:K.sibling=pe,K=pe,Y=He}if(ee===y.length)return n(v,Y),Ce&&hn(v,ee),W;if(Y===null){for(;ee<y.length;ee++)Y=_(v,y[ee],P),Y!==null&&(h=l(Y,h,ee),K===null?W=Y:K.sibling=Y,K=Y);return Ce&&hn(v,ee),W}for(Y=r(v,Y);ee<y.length;ee++)He=R(Y,v,ee,y[ee],P),He!==null&&(e&&He.alternate!==null&&Y.delete(He.key===null?ee:He.key),h=l(He,h,ee),K===null?W=He:K.sibling=He,K=He);return e&&Y.forEach(function(ln){return t(v,ln)}),Ce&&hn(v,ee),W}function U(v,h,y,P){var W=V(y);if(typeof W!="function")throw Error(a(150));if(y=W.call(y),y==null)throw Error(a(151));for(var K=W=null,Y=h,ee=h=0,He=null,pe=y.next();Y!==null&&!pe.done;ee++,pe=y.next()){Y.index>ee?(He=Y,Y=null):He=Y.sibling;var ln=j(v,Y,pe.value,P);if(ln===null){Y===null&&(Y=He);break}e&&Y&&ln.alternate===null&&t(v,Y),h=l(ln,h,ee),K===null?W=ln:K.sibling=ln,K=ln,Y=He}if(pe.done)return n(v,Y),Ce&&hn(v,ee),W;if(Y===null){for(;!pe.done;ee++,pe=y.next())pe=_(v,pe.value,P),pe!==null&&(h=l(pe,h,ee),K===null?W=pe:K.sibling=pe,K=pe);return Ce&&hn(v,ee),W}for(Y=r(v,Y);!pe.done;ee++,pe=y.next())pe=R(Y,v,ee,pe.value,P),pe!==null&&(e&&pe.alternate!==null&&Y.delete(pe.key===null?ee:pe.key),h=l(pe,h,ee),K===null?W=pe:K.sibling=pe,K=pe);return e&&Y.forEach(function(Gp){return t(v,Gp)}),Ce&&hn(v,ee),W}function Te(v,h,y,P){if(typeof y=="object"&&y!==null&&y.type===A&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case q:e:{for(var W=y.key,K=h;K!==null;){if(K.key===W){if(W=y.type,W===A){if(K.tag===7){n(v,K.sibling),h=o(K,y.props.children),h.return=v,v=h;break e}}else if(K.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Fe&&ga(W)===K.type){n(v,K.sibling),h=o(K,y.props),h.ref=Lr(v,K,y),h.return=v,v=h;break e}n(v,K);break}else t(v,K);K=K.sibling}y.type===A?(h=Sn(y.props.children,v.mode,P,y.key),h.return=v,v=h):(P=ti(y.type,y.key,y.props,null,v.mode,P),P.ref=Lr(v,h,y),P.return=v,v=P)}return s(v);case te:e:{for(K=y.key;h!==null;){if(h.key===K)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(v,h.sibling),h=o(h,y.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=gs(y,v.mode,P),h.return=v,v=h}return s(v);case Fe:return K=y._init,Te(v,h,K(y._payload),P)}if(ir(y))return B(v,h,y,P);if(V(y))return U(v,h,y,P);To(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(v,h.sibling),h=o(h,y),h.return=v,v=h):(n(v,h),h=ms(y,v.mode,P),h.return=v,v=h),s(v)):n(v,h)}return Te}var Hn=va(!0),ya=va(!1),Oo=Yt(null),Ro=null,Vn=null,jl=null;function Nl(){jl=Vn=Ro=null}function _l(e){var t=Oo.current;ke(Oo),e._currentValue=t}function Pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qn(e,t){Ro=e,jl=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(jl!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(Ro===null)throw Error(a(308));Vn=e,Ro.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var mn=null;function zl(e){mn===null?mn=[e]:mn.push(e)}function xa(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,zl(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function Ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(fe&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mt(e,n)}return o=r.interleaved,o===null?(t.next=t,zl(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}function ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Do(e,t,n,r){var o=e.updateQueue;Zt=!1;var l=o.firstBaseUpdate,s=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var p=c,x=p.next;p.next=null,s===null?l=x:s.next=x,s=p;var N=e.alternate;N!==null&&(N=N.updateQueue,c=N.lastBaseUpdate,c!==s&&(c===null?N.firstBaseUpdate=x:c.next=x,N.lastBaseUpdate=p))}if(l!==null){var _=o.baseState;s=0,N=x=p=null,c=l;do{var j=c.lane,R=c.eventTime;if((r&j)===j){N!==null&&(N=N.next={eventTime:R,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var B=e,U=c;switch(j=t,R=n,U.tag){case 1:if(B=U.payload,typeof B=="function"){_=B.call(R,_,j);break e}_=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=U.payload,j=typeof B=="function"?B.call(R,_,j):B,j==null)break e;_=z({},_,j);break e;case 2:Zt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,j=o.effects,j===null?o.effects=[c]:j.push(c))}else R={eventTime:R,lane:j,tag:c.tag,payload:c.payload,callback:c.callback,next:null},N===null?(x=N=R,p=_):N=N.next=R,s|=j;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;j=c,c=j.next,j.next=null,o.lastBaseUpdate=j,o.shared.pending=null}}while(!0);if(N===null&&(p=_),o.baseState=p,o.firstBaseUpdate=x,o.lastBaseUpdate=N,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);yn|=s,e.lanes=s,e.memoizedState=_}}function Sa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(a(191,o));o.call(r)}}}var Tr={},zt=Yt(Tr),Or=Yt(Tr),Rr=Yt(Tr);function gn(e){if(e===Tr)throw Error(a(174));return e}function Tl(e,t){switch(xe(Rr,t),xe(Or,e),xe(zt,Tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oi(t,e)}ke(zt),xe(zt,t)}function Gn(){ke(zt),ke(Or),ke(Rr)}function Ca(e){gn(Rr.current);var t=gn(zt.current),n=Oi(t,e.type);t!==n&&(xe(Or,e),xe(zt,n))}function Ol(e){Or.current===e&&(ke(zt),ke(Or))}var je=Yt(0);function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rl=[];function Il(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var Fo=Z.ReactCurrentDispatcher,Dl=Z.ReactCurrentBatchConfig,vn=0,Ne=null,Ae=null,Ue=null,Ao=!1,Ir=!1,Dr=0,hp=0;function Ye(){throw Error(a(321))}function Ml(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Fl(e,t,n,r,o,l){if(vn=l,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?yp:xp,e=n(r,o),Ir){l=0;do{if(Ir=!1,Dr=0,25<=l)throw Error(a(301));l+=1,Ue=Ae=null,t.updateQueue=null,Fo.current=wp,e=n(r,o)}while(Ir)}if(Fo.current=Uo,t=Ae!==null&&Ae.next!==null,vn=0,Ue=Ae=Ne=null,Ao=!1,t)throw Error(a(300));return e}function Al(){var e=Dr!==0;return Dr=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ne.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function pt(){if(Ae===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ue===null?Ne.memoizedState:Ue.next;if(t!==null)Ue=t,Ae=e;else{if(e===null)throw Error(a(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ue===null?Ne.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Mr(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=pt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=Ae,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var s=o.next;o.next=l.next,l.next=s}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var c=s=null,p=null,x=l;do{var N=x.lane;if((vn&N)===N)p!==null&&(p=p.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var _={lane:N,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};p===null?(c=p=_,s=r):p=p.next=_,Ne.lanes|=N,yn|=N}x=x.next}while(x!==null&&x!==l);p===null?s=r:p.next=c,yt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Ne.lanes|=l,yn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=pt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do l=e(l,s.action),s=s.next;while(s!==o);yt(l,t.memoizedState)||(tt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ea(){}function ja(e,t){var n=Ne,r=pt(),o=t(),l=!yt(r.memoizedState,o);if(l&&(r.memoizedState=o,tt=!0),r=r.queue,Ul(Pa.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Fr(9,_a.bind(null,n,r,o,t),void 0,null),We===null)throw Error(a(349));(vn&30)!==0||Na(n,t,o)}return o}function Na(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _a(e,t,n,r){t.value=n,t.getSnapshot=r,za(t)&&La(e)}function Pa(e,t,n){return n(function(){za(t)&&La(e)})}function za(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function La(e){var t=Mt(e,1);t!==null&&Ct(t,e,1,-1)}function Ta(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=vp.bind(null,Ne,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Oa(){return pt().memoizedState}function $o(e,t,n,r){var o=Lt();Ne.flags|=e,o.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function Bo(e,t,n,r){var o=pt();r=r===void 0?null:r;var l=void 0;if(Ae!==null){var s=Ae.memoizedState;if(l=s.destroy,r!==null&&Ml(r,s.deps)){o.memoizedState=Fr(t,n,l,r);return}}Ne.flags|=e,o.memoizedState=Fr(1|t,n,l,r)}function Ra(e,t){return $o(8390656,8,e,t)}function Ul(e,t){return Bo(2048,8,e,t)}function Ia(e,t){return Bo(4,2,e,t)}function Da(e,t){return Bo(4,4,e,t)}function Ma(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fa(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4,4,Ma.bind(null,t,e),n)}function Wl(){}function Aa(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $a(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ba(e,t,n){return(vn&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(yt(n,t)||(n=gu(),Ne.lanes|=n,yn|=n,e.baseState=!0),t)}function mp(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),t()}finally{ve=n,Dl.transition=r}}function Ua(){return pt().memoizedState}function gp(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wa(e))Ha(t,n);else if(n=xa(e,t,n,r),n!==null){var o=qe();Ct(n,e,r,o),Va(n,t,r)}}function vp(e,t,n){var r=nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wa(e))Ha(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,c=l(s,n);if(o.hasEagerState=!0,o.eagerState=c,yt(c,s)){var p=t.interleaved;p===null?(o.next=o,zl(t)):(o.next=p.next,p.next=o),t.interleaved=o;return}}catch{}finally{}n=xa(e,t,o,r),n!==null&&(o=qe(),Ct(n,e,r,o),Va(n,t,r))}}function Wa(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Ha(e,t){Ir=Ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Va(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vi(e,n)}}var Uo={readContext:ft,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},yp={readContext:ft,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Ra,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$o(4194308,4,Ma.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gp.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Ta,useDebugValue:Wl,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Ta(!1),t=e[0];return e=mp.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,o=Lt();if(Ce){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),We===null)throw Error(a(349));(vn&30)!==0||Na(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ra(Pa.bind(null,r,l,e),[e]),r.flags|=2048,Fr(9,_a.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Lt(),t=We.identifierPrefix;if(Ce){var n=Dt,r=It;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xp={readContext:ft,useCallback:Aa,useContext:ft,useEffect:Ul,useImperativeHandle:Fa,useInsertionEffect:Ia,useLayoutEffect:Da,useMemo:$a,useReducer:$l,useRef:Oa,useState:function(){return $l(Mr)},useDebugValue:Wl,useDeferredValue:function(e){var t=pt();return Ba(t,Ae.memoizedState,e)},useTransition:function(){var e=$l(Mr)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Ea,useSyncExternalStore:ja,useId:Ua,unstable_isNewReconciler:!1},wp={readContext:ft,useCallback:Aa,useContext:ft,useEffect:Ul,useImperativeHandle:Fa,useInsertionEffect:Ia,useLayoutEffect:Da,useMemo:$a,useReducer:Bl,useRef:Oa,useState:function(){return Bl(Mr)},useDebugValue:Wl,useDeferredValue:function(e){var t=pt();return Ae===null?t.memoizedState=e:Ba(t,Ae.memoizedState,e)},useTransition:function(){var e=Bl(Mr)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Ea,useSyncExternalStore:ja,useId:Ua,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wo={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),o=nn(e),l=Ft(r,o);l.payload=t,n!=null&&(l.callback=n),t=qt(e,l,o),t!==null&&(Ct(t,e,o,r),Io(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),o=nn(e),l=Ft(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=qt(e,l,o),t!==null&&(Ct(t,e,o,r),Io(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=nn(e),o=Ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=qt(e,o,r),t!==null&&(Ct(t,e,r,n),Io(t,e,r))}};function Qa(e,t,n,r,o,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(o,l):!0}function Ga(e,t,n){var r=!1,o=Xt,l=t.contextType;return typeof l=="object"&&l!==null?l=ft(l):(o=et(t)?fn:Ke.current,r=t.contextTypes,l=(r=r!=null)?$n(e,o):Xt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ka(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ll(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=ft(l):(l=et(t)?fn:Ke.current,o.context=$n(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Hl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Wo.enqueueReplaceState(o,o.state,null),Do(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t){try{var n="",r=t;do n+=J(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kp=typeof WeakMap=="function"?WeakMap:Map;function Ya(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xo||(Xo=!0,ss=r),Gl(e,t)},n}function Xa(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Gl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Gl(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ba(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Dp.bind(null,e,t,n),t.then(e,e))}function Za(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qa(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Sp=Z.ReactCurrentOwner,tt=!1;function Ze(e,t,n,r){t.child=e===null?ya(t,null,n,r):Hn(t,e.child,n,r)}function Ja(e,t,n,r,o){n=n.render;var l=t.ref;return Qn(t,o),r=Fl(e,t,n,r,l,o),n=Al(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(Ce&&n&&wl(t),t.flags|=1,Ze(e,t,r,o),t.child)}function ec(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!hs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,tc(e,t,l,r,o)):(e=ti(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(s,r)&&e.ref===t.ref)return At(e,t,o)}return t.flags|=1,e=on(l,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Cr(l,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,At(e,t,o)}return Kl(e,t,n,r,o)}function nc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Xn,ut),ut|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(Xn,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,xe(Xn,ut),ut|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,xe(Xn,ut),ut|=r;return Ze(e,t,o,n),t.child}function rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,n,r,o){var l=et(n)?fn:Ke.current;return l=$n(t,l),Qn(t,o),n=Fl(e,t,n,r,l,o),r=Al(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(Ce&&r&&wl(t),t.flags|=1,Ze(e,t,n,o),t.child)}function oc(e,t,n,r,o){if(et(n)){var l=!0;No(t)}else l=!1;if(Qn(t,o),t.stateNode===null)Vo(e,t),Ga(t,n,r),Vl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var p=s.context,x=n.contextType;typeof x=="object"&&x!==null?x=ft(x):(x=et(n)?fn:Ke.current,x=$n(t,x));var N=n.getDerivedStateFromProps,_=typeof N=="function"||typeof s.getSnapshotBeforeUpdate=="function";_||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||p!==x)&&Ka(t,s,r,x),Zt=!1;var j=t.memoizedState;s.state=j,Do(t,r,s,o),p=t.memoizedState,c!==r||j!==p||Je.current||Zt?(typeof N=="function"&&(Hl(t,n,N,r),p=t.memoizedState),(c=Zt||Qa(t,n,c,r,j,p,x))?(_||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=x,r=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,wa(e,t),c=t.memoizedProps,x=t.type===t.elementType?c:wt(t.type,c),s.props=x,_=t.pendingProps,j=s.context,p=n.contextType,typeof p=="object"&&p!==null?p=ft(p):(p=et(n)?fn:Ke.current,p=$n(t,p));var R=n.getDerivedStateFromProps;(N=typeof R=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==_||j!==p)&&Ka(t,s,r,p),Zt=!1,j=t.memoizedState,s.state=j,Do(t,r,s,o);var B=t.memoizedState;c!==_||j!==B||Je.current||Zt?(typeof R=="function"&&(Hl(t,n,R,r),B=t.memoizedState),(x=Zt||Qa(t,n,x,r,j,B,p)||!1)?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,B,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,B,p)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=B),s.props=r,s.state=B,s.context=p,r=x):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,l,o)}function Yl(e,t,n,r,o,l){rc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&aa(t,n,!1),At(e,t,l);r=t.stateNode,Sp.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Hn(t,e.child,null,l),t.child=Hn(t,null,c,l)):Ze(e,t,c,l),t.memoizedState=r.state,o&&aa(t,n,!0),t.child}function ic(e){var t=e.stateNode;t.pendingContext?sa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sa(e,t.context,!1),Tl(e,t.containerInfo)}function lc(e,t,n,r,o){return Wn(),El(o),t.flags|=256,Ze(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function sc(e,t,n){var r=t.pendingProps,o=je.current,l=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),xe(je,o&1),e===null)return Cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=s):l=ni(s,r,0,null),e=Sn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=bl(n),t.memoizedState=Xl,e):Zl(t,s));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return Cp(e,t,s,r,c,o,n);if(l){l=r.fallback,s=t.mode,o=e.child,c=o.sibling;var p={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=on(o,p),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?l=on(c,l):(l=Sn(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?bl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return l=e.child,e=l.sibling,r=on(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zl(e,t){return t=ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ho(e,t,n,r){return r!==null&&El(r),Hn(t,e.child,null,n),e=Zl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cp(e,t,n,r,o,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(a(422))),Ho(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=ni({mode:"visible",children:r.children},o,0,null),l=Sn(l,o,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Hn(t,e.child,null,s),t.child.memoizedState=bl(s),t.memoizedState=Xl,l);if((t.mode&1)===0)return Ho(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,l=Error(a(419)),r=Ql(l,r,void 0),Ho(e,t,s,r)}if(c=(s&e.childLanes)!==0,tt||c){if(r=We,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|s))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Mt(e,o),Ct(r,e,o,-1))}return ps(),r=Ql(Error(a(421))),Ho(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Mp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,st=Kt(o.nextSibling),lt=t,Ce=!0,xt=null,e!==null&&(ct[dt++]=It,ct[dt++]=Dt,ct[dt++]=pn,It=e.id,Dt=e.overflow,pn=t),t=Zl(t,r.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pl(e.return,t,n)}function ql(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function ac(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Ze(e,t,r.children,n),r=je.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(je,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Mo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ql(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Mo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ql(t,!0,n,null,l);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ep(e,t,n){switch(t.tag){case 3:ic(t),Wn();break;case 5:Ca(t);break;case 1:et(t.type)&&No(t);break;case 4:Tl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;xe(Oo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(je,je.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?sc(e,t,n):(xe(je,je.current&1),e=At(e,t,n),e!==null?e.sibling:null);xe(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ac(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),xe(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,nc(e,t,n)}return At(e,t,n)}var cc,Jl,dc,fc;cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Jl=function(){},dc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,gn(zt.current);var l=null;switch(n){case"input":o=Pi(e,o),r=Pi(e,r),l=[];break;case"select":o=z({},o,{value:void 0}),r=z({},r,{value:void 0}),l=[];break;case"textarea":o=Ti(e,o),r=Ti(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Co)}Ri(n,r);var s;n=null;for(x in o)if(!r.hasOwnProperty(x)&&o.hasOwnProperty(x)&&o[x]!=null)if(x==="style"){var c=o[x];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(f.hasOwnProperty(x)?l||(l=[]):(l=l||[]).push(x,null));for(x in r){var p=r[x];if(c=o!=null?o[x]:void 0,r.hasOwnProperty(x)&&p!==c&&(p!=null||c!=null))if(x==="style")if(c){for(s in c)!c.hasOwnProperty(s)||p&&p.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in p)p.hasOwnProperty(s)&&c[s]!==p[s]&&(n||(n={}),n[s]=p[s])}else n||(l||(l=[]),l.push(x,n)),n=p;else x==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,c=c?c.__html:void 0,p!=null&&c!==p&&(l=l||[]).push(x,p)):x==="children"?typeof p!="string"&&typeof p!="number"||(l=l||[]).push(x,""+p):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(f.hasOwnProperty(x)?(p!=null&&x==="onScroll"&&we("scroll",e),l||c===p||(l=[])):(l=l||[]).push(x,p))}n&&(l=l||[]).push("style",n);var x=l;(t.updateQueue=x)&&(t.flags|=4)}},fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ar(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jp(e,t,n){var r=t.pendingProps;switch(kl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return et(t.type)&&jo(),Xe(t),null;case 3:return r=t.stateNode,Gn(),ke(Je),ke(Ke),Il(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xt!==null&&(cs(xt),xt=null))),Jl(e,t),Xe(t),null;case 5:Ol(t);var o=gn(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)dc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Xe(t),null}if(e=gn(zt.current),Lo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Pt]=t,r[Pr]=l,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(o=0;o<jr.length;o++)we(jr[o],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Gs(r,l),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},we("invalid",r);break;case"textarea":Xs(r,l),we("invalid",r)}Ri(n,l),o=null;for(var s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="children"?typeof c=="string"?r.textContent!==c&&(l.suppressHydrationWarning!==!0&&So(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&So(r.textContent,c,e),o=["children",""+c]):f.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&we("scroll",r)}switch(n){case"input":qr(r),Ys(r,l,!0);break;case"textarea":qr(r),Zs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Co)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Pt]=t,e[Pr]=r,cc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ii(n,r),n){case"dialog":we("cancel",e),we("close",e),o=r;break;case"iframe":case"object":case"embed":we("load",e),o=r;break;case"video":case"audio":for(o=0;o<jr.length;o++)we(jr[o],e);o=r;break;case"source":we("error",e),o=r;break;case"img":case"image":case"link":we("error",e),we("load",e),o=r;break;case"details":we("toggle",e),o=r;break;case"input":Gs(e,r),o=Pi(e,r),we("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=z({},r,{value:void 0}),we("invalid",e);break;case"textarea":Xs(e,r),o=Ti(e,r),we("invalid",e);break;default:o=r}Ri(n,o),c=o;for(l in c)if(c.hasOwnProperty(l)){var p=c[l];l==="style"?tu(e,p):l==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Js(e,p)):l==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&lr(e,p):typeof p=="number"&&lr(e,""+p):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(f.hasOwnProperty(l)?p!=null&&l==="onScroll"&&we("scroll",e):p!=null&&he(e,l,p,s))}switch(n){case"input":qr(e),Ys(e,r,!1);break;case"textarea":qr(e),Zs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+de(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?_n(e,!!r.multiple,l,!1):r.defaultValue!=null&&_n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)fc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=gn(Rr.current),gn(zt.current),Lo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(l=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:So(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&So(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Xe(t),null;case 13:if(ke(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&st!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ma(),Wn(),t.flags|=98560,l=!1;else if(l=Lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[Pt]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),l=!1}else xt!==null&&(cs(xt),xt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(je.current&1)!==0?$e===0&&($e=3):ps())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return Gn(),Jl(e,t),e===null&&Nr(t.stateNode.containerInfo),Xe(t),null;case 10:return _l(t.type._context),Xe(t),null;case 17:return et(t.type)&&jo(),Xe(t),null;case 19:if(ke(je),l=t.memoizedState,l===null)return Xe(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Ar(l,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Mo(e),s!==null){for(t.flags|=128,Ar(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(je,je.current&1|2),t.child}e=e.sibling}l.tail!==null&&Le()>bn&&(t.flags|=128,r=!0,Ar(l,!1),t.lanes=4194304)}else{if(!r)if(e=Mo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ar(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Ce)return Xe(t),null}else 2*Le()-l.renderingStartTime>bn&&n!==1073741824&&(t.flags|=128,r=!0,Ar(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Le(),t.sibling=null,n=je.current,xe(je,r?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return fs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ut&1073741824)!==0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Np(e,t){switch(kl(t),t.tag){case 1:return et(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),ke(Je),ke(Ke),Il(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ol(t),null;case 13:if(ke(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(je),null;case 4:return Gn(),null;case 10:return _l(t.type._context),null;case 22:case 23:return fs(),null;case 24:return null;default:return null}}var Qo=!1,be=!1,_p=typeof WeakSet=="function"?WeakSet:Set,M=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var pc=!1;function Pp(e,t){if(fl=co,e=Qu(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,c=-1,p=-1,x=0,N=0,_=e,j=null;t:for(;;){for(var R;_!==n||o!==0&&_.nodeType!==3||(c=s+o),_!==l||r!==0&&_.nodeType!==3||(p=s+r),_.nodeType===3&&(s+=_.nodeValue.length),(R=_.firstChild)!==null;)j=_,_=R;for(;;){if(_===e)break t;if(j===n&&++x===o&&(c=s),j===l&&++N===r&&(p=s),(R=_.nextSibling)!==null)break;_=j,j=_.parentNode}_=R}n=c===-1||p===-1?null:{start:c,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(pl={focusedElem:e,selectionRange:n},co=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var U=B.memoizedProps,Te=B.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?U:wt(t.type,U),Te);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(P){Pe(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return B=pc,pc=!1,B}function $r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&es(t,n,l)}o=o.next}while(o!==r)}}function Go(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ts(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Pr],delete t[vl],delete t[cp],delete t[dp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mc(e){return e.tag===5||e.tag===3||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ns(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Co));else if(r!==4&&(e=e.child,e!==null))for(ns(e,t,n),e=e.sibling;e!==null;)ns(e,t,n),e=e.sibling}function rs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(rs(e,t,n),e=e.sibling;e!==null;)rs(e,t,n),e=e.sibling}var Ve=null,kt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(oo,n)}catch{}switch(n.tag){case 5:be||Yn(n,t);case 6:var r=Ve,o=kt;Ve=null,Jt(e,t,n),Ve=r,kt=o,Ve!==null&&(kt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(kt?(e=Ve,n=n.stateNode,e.nodeType===8?gl(e.parentNode,n):e.nodeType===1&&gl(e,n),vr(e)):gl(Ve,n.stateNode));break;case 4:r=Ve,o=kt,Ve=n.stateNode.containerInfo,kt=!0,Jt(e,t,n),Ve=r,kt=o;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,s=l.destroy;l=l.tag,s!==void 0&&((l&2)!==0||(l&4)!==0)&&es(n,t,s),o=o.next}while(o!==r)}Jt(e,t,n);break;case 1:if(!be&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Pe(n,t,c)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Jt(e,t,n),be=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _p),t.forEach(function(r){var o=Fp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Ve=c.stateNode,kt=!1;break e;case 3:Ve=c.stateNode.containerInfo,kt=!0;break e;case 4:Ve=c.stateNode.containerInfo,kt=!0;break e}c=c.return}if(Ve===null)throw Error(a(160));vc(l,s,o),Ve=null,kt=!1;var p=o.alternate;p!==null&&(p.return=null),o.return=null}catch(x){Pe(o,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xc(t,e),t=t.sibling}function xc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Tt(e),r&4){try{$r(3,e,e.return),Go(3,e)}catch(U){Pe(e,e.return,U)}try{$r(5,e,e.return)}catch(U){Pe(e,e.return,U)}}break;case 1:St(t,e),Tt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(St(t,e),Tt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var o=e.stateNode;try{lr(o,"")}catch(U){Pe(e,e.return,U)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,c=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&Ks(o,l),Ii(c,s);var x=Ii(c,l);for(s=0;s<p.length;s+=2){var N=p[s],_=p[s+1];N==="style"?tu(o,_):N==="dangerouslySetInnerHTML"?Js(o,_):N==="children"?lr(o,_):he(o,N,_,x)}switch(c){case"input":zi(o,l);break;case"textarea":bs(o,l);break;case"select":var j=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var R=l.value;R!=null?_n(o,!!l.multiple,R,!1):j!==!!l.multiple&&(l.defaultValue!=null?_n(o,!!l.multiple,l.defaultValue,!0):_n(o,!!l.multiple,l.multiple?[]:"",!1))}o[Pr]=l}catch(U){Pe(e,e.return,U)}}break;case 6:if(St(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(a(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(U){Pe(e,e.return,U)}}break;case 3:if(St(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch(U){Pe(e,e.return,U)}break;case 4:St(t,e),Tt(e);break;case 13:St(t,e),Tt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ls=Le())),r&4&&yc(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(be=(x=be)||N,St(t,e),be=x):St(t,e),Tt(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!N&&(e.mode&1)!==0)for(M=e,N=e.child;N!==null;){for(_=M=N;M!==null;){switch(j=M,R=j.child,j.tag){case 0:case 11:case 14:case 15:$r(4,j,j.return);break;case 1:Yn(j,j.return);var B=j.stateNode;if(typeof B.componentWillUnmount=="function"){r=j,n=j.return;try{t=r,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(U){Pe(r,n,U)}}break;case 5:Yn(j,j.return);break;case 22:if(j.memoizedState!==null){Sc(_);continue}}R!==null?(R.return=j,M=R):Sc(_)}N=N.sibling}e:for(N=null,_=e;;){if(_.tag===5){if(N===null){N=_;try{o=_.stateNode,x?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=_.stateNode,p=_.memoizedProps.style,s=p!=null&&p.hasOwnProperty("display")?p.display:null,c.style.display=eu("display",s))}catch(U){Pe(e,e.return,U)}}}else if(_.tag===6){if(N===null)try{_.stateNode.nodeValue=x?"":_.memoizedProps}catch(U){Pe(e,e.return,U)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;N===_&&(N=null),_=_.return}N===_&&(N=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:St(t,e),Tt(e),r&4&&yc(e);break;case 21:break;default:St(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mc(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(lr(o,""),r.flags&=-33);var l=gc(e);rs(e,l,o);break;case 3:case 4:var s=r.stateNode.containerInfo,c=gc(e);ns(e,c,s);break;default:throw Error(a(161))}}catch(p){Pe(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zp(e,t,n){M=e,wc(e)}function wc(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,l=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Qo;if(!s){var c=o.alternate,p=c!==null&&c.memoizedState!==null||be;c=Qo;var x=be;if(Qo=s,(be=p)&&!x)for(M=o;M!==null;)s=M,p=s.child,s.tag===22&&s.memoizedState!==null?Cc(o):p!==null?(p.return=s,M=p):Cc(o);for(;l!==null;)M=l,wc(l),l=l.sibling;M=o,Qo=c,be=x}kc(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,M=l):kc(e)}}function kc(e){for(;M!==null;){var t=M;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:be||Go(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Sa(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Sa(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var N=x.memoizedState;if(N!==null){var _=N.dehydrated;_!==null&&vr(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}be||t.flags&512&&ts(t)}catch(j){Pe(t,t.return,j)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Sc(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Cc(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Go(4,t)}catch(p){Pe(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(p){Pe(t,o,p)}}var l=t.return;try{ts(t)}catch(p){Pe(t,l,p)}break;case 5:var s=t.return;try{ts(t)}catch(p){Pe(t,s,p)}}}catch(p){Pe(t,t.return,p)}if(t===e){M=null;break}var c=t.sibling;if(c!==null){c.return=t.return,M=c;break}M=t.return}}var Lp=Math.ceil,Ko=Z.ReactCurrentDispatcher,os=Z.ReactCurrentOwner,ht=Z.ReactCurrentBatchConfig,fe=0,We=null,De=null,Qe=0,ut=0,Xn=Yt(0),$e=0,Br=null,yn=0,Yo=0,is=0,Ur=null,nt=null,ls=0,bn=1/0,$t=null,Xo=!1,ss=null,en=null,bo=!1,tn=null,Zo=0,Wr=0,us=null,qo=-1,Jo=0;function qe(){return(fe&6)!==0?Le():qo!==-1?qo:qo=Le()}function nn(e){return(e.mode&1)===0?1:(fe&2)!==0&&Qe!==0?Qe&-Qe:pp.transition!==null?(Jo===0&&(Jo=gu()),Jo):(e=ve,e!==0||(e=window.event,e=e===void 0?16:ju(e.type)),e)}function Ct(e,t,n,r){if(50<Wr)throw Wr=0,us=null,Error(a(185));fr(e,n,r),((fe&2)===0||e!==We)&&(e===We&&((fe&2)===0&&(Yo|=n),$e===4&&rn(e,Qe)),rt(e,r),n===1&&fe===0&&(t.mode&1)===0&&(bn=Le()+500,_o&&bt()))}function rt(e,t){var n=e.callbackNode;pf(e,t);var r=so(e,e===We?Qe:0);if(r===0)n!==null&&pu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pu(n),t===1)e.tag===0?fp(jc.bind(null,e)):ca(jc.bind(null,e)),up(function(){(fe&6)===0&&bt()}),n=null;else{switch(vu(r)){case 1:n=Ui;break;case 4:n=hu;break;case 16:n=ro;break;case 536870912:n=mu;break;default:n=ro}n=Rc(n,Ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ec(e,t){if(qo=-1,Jo=0,(fe&6)!==0)throw Error(a(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=so(e,e===We?Qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ei(e,r);else{t=r;var o=fe;fe|=2;var l=_c();(We!==e||Qe!==t)&&($t=null,bn=Le()+500,wn(e,t));do try{Rp();break}catch(c){Nc(e,c)}while(!0);Nl(),Ko.current=l,fe=o,De!==null?t=0:(We=null,Qe=0,t=$e)}if(t!==0){if(t===2&&(o=Wi(e),o!==0&&(r=o,t=as(e,o))),t===1)throw n=Br,wn(e,0),rn(e,r),rt(e,Le()),n;if(t===6)rn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Tp(o)&&(t=ei(e,r),t===2&&(l=Wi(e),l!==0&&(r=l,t=as(e,l))),t===1))throw n=Br,wn(e,0),rn(e,r),rt(e,Le()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:kn(e,nt,$t);break;case 3:if(rn(e,r),(r&130023424)===r&&(t=ls+500-Le(),10<t)){if(so(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ml(kn.bind(null,e,nt,$t),t);break}kn(e,nt,$t);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-vt(r);l=1<<s,s=t[s],s>o&&(o=s),r&=~l}if(r=o,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lp(r/1960))-r,10<r){e.timeoutHandle=ml(kn.bind(null,e,nt,$t),r);break}kn(e,nt,$t);break;case 5:kn(e,nt,$t);break;default:throw Error(a(329))}}}return rt(e,Le()),e.callbackNode===n?Ec.bind(null,e):null}function as(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=ei(e,t),e!==2&&(t=nt,nt=n,t!==null&&cs(t)),e}function cs(e){nt===null?nt=e:nt.push.apply(nt,e)}function Tp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!yt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rn(e,t){for(t&=~is,t&=~Yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function jc(e){if((fe&6)!==0)throw Error(a(327));Zn();var t=so(e,0);if((t&1)===0)return rt(e,Le()),null;var n=ei(e,t);if(e.tag!==0&&n===2){var r=Wi(e);r!==0&&(t=r,n=as(e,r))}if(n===1)throw n=Br,wn(e,0),rn(e,t),rt(e,Le()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,nt,$t),rt(e,Le()),null}function ds(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(bn=Le()+500,_o&&bt())}}function xn(e){tn!==null&&tn.tag===0&&(fe&6)===0&&Zn();var t=fe;fe|=1;var n=ht.transition,r=ve;try{if(ht.transition=null,ve=1,e)return e()}finally{ve=r,ht.transition=n,fe=t,(fe&6)===0&&bt()}}function fs(){ut=Xn.current,ke(Xn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sp(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(kl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:Gn(),ke(Je),ke(Ke),Il();break;case 5:Ol(r);break;case 4:Gn();break;case 13:ke(je);break;case 19:ke(je);break;case 10:_l(r.type._context);break;case 22:case 23:fs()}n=n.return}if(We=e,De=e=on(e.current,null),Qe=ut=t,$e=0,Br=null,is=Yo=yn=0,nt=Ur=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=o,r.next=s}n.pending=r}mn=null}return e}function Nc(e,t){do{var n=De;try{if(Nl(),Fo.current=Uo,Ao){for(var r=Ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ao=!1}if(vn=0,Ue=Ae=Ne=null,Ir=!1,Dr=0,os.current=null,n===null||n.return===null){$e=1,Br=t,De=null;break}e:{var l=e,s=n.return,c=n,p=t;if(t=Qe,c.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var x=p,N=c,_=N.tag;if((N.mode&1)===0&&(_===0||_===11||_===15)){var j=N.alternate;j?(N.updateQueue=j.updateQueue,N.memoizedState=j.memoizedState,N.lanes=j.lanes):(N.updateQueue=null,N.memoizedState=null)}var R=Za(s);if(R!==null){R.flags&=-257,qa(R,s,c,l,t),R.mode&1&&ba(l,x,t),t=R,p=x;var B=t.updateQueue;if(B===null){var U=new Set;U.add(p),t.updateQueue=U}else B.add(p);break e}else{if((t&1)===0){ba(l,x,t),ps();break e}p=Error(a(426))}}else if(Ce&&c.mode&1){var Te=Za(s);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),qa(Te,s,c,l,t),El(Kn(p,c));break e}}l=p=Kn(p,c),$e!==4&&($e=2),Ur===null?Ur=[l]:Ur.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var v=Ya(l,p,t);ka(l,v);break e;case 1:c=p;var h=l.type,y=l.stateNode;if((l.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(en===null||!en.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var P=Xa(l,c,t);ka(l,P);break e}}l=l.return}while(l!==null)}zc(n)}catch(W){t=W,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function _c(){var e=Ko.current;return Ko.current=Uo,e===null?Uo:e}function ps(){($e===0||$e===3||$e===2)&&($e=4),We===null||(yn&268435455)===0&&(Yo&268435455)===0||rn(We,Qe)}function ei(e,t){var n=fe;fe|=2;var r=_c();(We!==e||Qe!==t)&&($t=null,wn(e,t));do try{Op();break}catch(o){Nc(e,o)}while(!0);if(Nl(),fe=n,Ko.current=r,De!==null)throw Error(a(261));return We=null,Qe=0,$e}function Op(){for(;De!==null;)Pc(De)}function Rp(){for(;De!==null&&!rf();)Pc(De)}function Pc(e){var t=Oc(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?zc(e):De=t,os.current=null}function zc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=jp(n,t,ut),n!==null){De=n;return}}else{if(n=Np(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);$e===0&&($e=5)}function kn(e,t,n){var r=ve,o=ht.transition;try{ht.transition=null,ve=1,Ip(e,t,n,r)}finally{ht.transition=o,ve=r}return null}function Ip(e,t,n,r){do Zn();while(tn!==null);if((fe&6)!==0)throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(hf(e,l),e===We&&(De=We=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||bo||(bo=!0,Rc(ro,function(){return Zn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=ht.transition,ht.transition=null;var s=ve;ve=1;var c=fe;fe|=4,os.current=null,Pp(e,n),xc(n,e),ep(pl),co=!!fl,pl=fl=null,e.current=n,zp(n),of(),fe=c,ve=s,ht.transition=l}else e.current=n;if(bo&&(bo=!1,tn=e,Zo=o),l=e.pendingLanes,l===0&&(en=null),uf(n.stateNode),rt(e,Le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xo)throw Xo=!1,e=ss,ss=null,e;return(Zo&1)!==0&&e.tag!==0&&Zn(),l=e.pendingLanes,(l&1)!==0?e===us?Wr++:(Wr=0,us=e):Wr=0,bt(),null}function Zn(){if(tn!==null){var e=vu(Zo),t=ht.transition,n=ve;try{if(ht.transition=null,ve=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Zo=0,(fe&6)!==0)throw Error(a(331));var o=fe;for(fe|=4,M=e.current;M!==null;){var l=M,s=l.child;if((M.flags&16)!==0){var c=l.deletions;if(c!==null){for(var p=0;p<c.length;p++){var x=c[p];for(M=x;M!==null;){var N=M;switch(N.tag){case 0:case 11:case 15:$r(8,N,l)}var _=N.child;if(_!==null)_.return=N,M=_;else for(;M!==null;){N=M;var j=N.sibling,R=N.return;if(hc(N),N===x){M=null;break}if(j!==null){j.return=R,M=j;break}M=R}}}var B=l.alternate;if(B!==null){var U=B.child;if(U!==null){B.child=null;do{var Te=U.sibling;U.sibling=null,U=Te}while(U!==null)}}M=l}}if((l.subtreeFlags&2064)!==0&&s!==null)s.return=l,M=s;else e:for(;M!==null;){if(l=M,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:$r(9,l,l.return)}var v=l.sibling;if(v!==null){v.return=l.return,M=v;break e}M=l.return}}var h=e.current;for(M=h;M!==null;){s=M;var y=s.child;if((s.subtreeFlags&2064)!==0&&y!==null)y.return=s,M=y;else e:for(s=h;M!==null;){if(c=M,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:Go(9,c)}}catch(W){Pe(c,c.return,W)}if(c===s){M=null;break e}var P=c.sibling;if(P!==null){P.return=c.return,M=P;break e}M=c.return}}if(fe=o,bt(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(oo,e)}catch{}r=!0}return r}finally{ve=n,ht.transition=t}}return!1}function Lc(e,t,n){t=Kn(n,t),t=Ya(e,t,1),e=qt(e,t,1),t=qe(),e!==null&&(fr(e,1,t),rt(e,t))}function Pe(e,t,n){if(e.tag===3)Lc(e,e,n);else for(;t!==null;){if(t.tag===3){Lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=Kn(n,e),e=Xa(t,e,1),t=qt(t,e,1),e=qe(),t!==null&&(fr(t,1,e),rt(t,e));break}}t=t.return}}function Dp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,We===e&&(Qe&n)===n&&($e===4||$e===3&&(Qe&130023424)===Qe&&500>Le()-ls?wn(e,0):is|=n),rt(e,t)}function Tc(e,t){t===0&&((e.mode&1)===0?t=1:(t=lo,lo<<=1,(lo&130023424)===0&&(lo=4194304)));var n=qe();e=Mt(e,t),e!==null&&(fr(e,t,n),rt(e,n))}function Mp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tc(e,n)}function Fp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),Tc(e,n)}var Oc;Oc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,Ep(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Ce&&(t.flags&1048576)!==0&&da(t,zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vo(e,t),e=t.pendingProps;var o=$n(t,Ke.current);Qn(t,n),o=Fl(null,t,r,e,o,n);var l=Al();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(l=!0,No(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ll(t),o.updater=Wo,t.stateNode=o,o._reactInternals=t,Vl(t,r,e,n),t=Yl(null,t,r,!0,l,n)):(t.tag=0,Ce&&l&&wl(t),Ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=$p(r),e=wt(r,e),o){case 0:t=Kl(null,t,r,e,n);break e;case 1:t=oc(null,t,r,e,n);break e;case 11:t=Ja(null,t,r,e,n);break e;case 14:t=ec(null,t,r,wt(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Kl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),oc(e,t,r,o,n);case 3:e:{if(ic(t),e===null)throw Error(a(387));r=t.pendingProps,l=t.memoizedState,o=l.element,wa(e,t),Do(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Kn(Error(a(423)),t),t=lc(e,t,r,n,o);break e}else if(r!==o){o=Kn(Error(a(424)),t),t=lc(e,t,r,n,o);break e}else for(st=Kt(t.stateNode.containerInfo.firstChild),lt=t,Ce=!0,xt=null,n=ya(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===o){t=At(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return Ca(t),e===null&&Cl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,s=o.children,hl(r,o)?s=null:l!==null&&hl(r,l)&&(t.flags|=32),rc(e,t),Ze(e,t,s,n),t.child;case 6:return e===null&&Cl(t),null;case 13:return sc(e,t,n);case 4:return Tl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Ja(e,t,r,o,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,s=o.value,xe(Oo,r._currentValue),r._currentValue=s,l!==null)if(yt(l.value,s)){if(l.children===o.children&&!Je.current){t=At(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){s=l.child;for(var p=c.firstContext;p!==null;){if(p.context===r){if(l.tag===1){p=Ft(-1,n&-n),p.tag=2;var x=l.updateQueue;if(x!==null){x=x.shared;var N=x.pending;N===null?p.next=p:(p.next=N.next,N.next=p),x.pending=p}}l.lanes|=n,p=l.alternate,p!==null&&(p.lanes|=n),Pl(l.return,n,t),c.lanes|=n;break}p=p.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(a(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Pl(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}Ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Qn(t,n),o=ft(o),r=r(o),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,o=wt(r,t.pendingProps),o=wt(r.type,o),ec(e,t,r,o,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Vo(e,t),t.tag=1,et(r)?(e=!0,No(t)):e=!1,Qn(t,n),Ga(t,r,o),Vl(t,r,o,n),Yl(null,t,r,!0,e,n);case 19:return ac(e,t,n);case 22:return nc(e,t,n)}throw Error(a(156,t.tag))};function Rc(e,t){return fu(e,t)}function Ap(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Ap(e,t,n,r)}function hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $p(e){if(typeof e=="function")return hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Re)return 11;if(e===Ge)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ti(e,t,n,r,o,l){var s=2;if(r=e,typeof e=="function")hs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case A:return Sn(n.children,o,l,t);case X:s=8,o|=8;break;case ze:return e=mt(12,n,t,o|2),e.elementType=ze,e.lanes=l,e;case se:return e=mt(13,n,t,o),e.elementType=se,e.lanes=l,e;case Ie:return e=mt(19,n,t,o),e.elementType=Ie,e.lanes=l,e;case ye:return ni(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:s=10;break e;case Ee:s=9;break e;case Re:s=11;break e;case Ge:s=14;break e;case Fe:s=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=mt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Sn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function ni(e,t,n,r){return e=mt(22,e,r,t),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function ms(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function gs(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function vs(e,t,n,r,o,l,s,c,p){return e=new Bp(e,t,n,c,p),t===1?(t=1,l===!0&&(t|=8)):t=0,l=mt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ll(l),e}function Up(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:te,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ic(e){if(!e)return Xt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(et(n))return ua(e,n,t)}return t}function Dc(e,t,n,r,o,l,s,c,p){return e=vs(n,r,!0,e,o,l,s,c,p),e.context=Ic(null),n=e.current,r=qe(),o=nn(n),l=Ft(r,o),l.callback=t??null,qt(n,l,o),e.current.lanes=o,fr(e,o,r),rt(e,r),e}function ri(e,t,n,r){var o=t.current,l=qe(),s=nn(o);return n=Ic(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qt(o,t,s),e!==null&&(Ct(e,o,s,l),Io(e,o,s)),s}function oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ys(e,t){Mc(e,t),(e=e.alternate)&&Mc(e,t)}function Wp(){return null}var Fc=typeof reportError=="function"?reportError:function(e){console.error(e)};function xs(e){this._internalRoot=e}ii.prototype.render=xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));ri(e,t,null,null)},ii.prototype.unmount=xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){ri(null,e,null,null)}),t[Ot]=null}};function ii(e){this._internalRoot=e}ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=wu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&Cu(e)}};function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ac(){}function Hp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var x=oi(s);l.call(x)}}var s=Dc(t,r,e,0,null,!1,!1,"",Ac);return e._reactRootContainer=s,e[Ot]=s.current,Nr(e.nodeType===8?e.parentNode:e),xn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var x=oi(p);c.call(x)}}var p=vs(e,0,!1,null,null,!1,!1,"",Ac);return e._reactRootContainer=p,e[Ot]=p.current,Nr(e.nodeType===8?e.parentNode:e),xn(function(){ri(t,p,n,r)}),p}function si(e,t,n,r,o){var l=n._reactRootContainer;if(l){var s=l;if(typeof o=="function"){var c=o;o=function(){var p=oi(s);c.call(p)}}ri(t,s,e,o)}else s=Hp(n,t,e,o,r);return oi(s)}yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(Vi(t,n|1),rt(t,Le()),(fe&6)===0&&(bn=Le()+500,bt()))}break;case 13:xn(function(){var r=Mt(e,1);if(r!==null){var o=qe();Ct(r,e,1,o)}}),ys(e,1)}},Qi=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=qe();Ct(t,e,134217728,n)}ys(e,134217728)}},xu=function(e){if(e.tag===13){var t=nn(e),n=Mt(e,t);if(n!==null){var r=qe();Ct(n,e,t,r)}ys(e,t)}},wu=function(){return ve},ku=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}},Fi=function(e,t,n){switch(t){case"input":if(zi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Eo(r);if(!o)throw Error(a(90));Qs(r),zi(r,o)}}}break;case"textarea":bs(e,n);break;case"select":t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}},iu=ds,lu=xn;var Vp={usingClientEntryPoint:!1,Events:[zr,Fn,Eo,ru,ou,ds]},Hr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qp={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cu(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||Wp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ui.isDisabled&&ui.supportsFiber)try{oo=ui.inject(Qp),_t=ui}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp,ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ws(t))throw Error(a(200));return Up(e,t,null,n)},ot.createRoot=function(e,t){if(!ws(e))throw Error(a(299));var n=!1,r="",o=Fc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=vs(e,1,!1,null,null,n,!1,r,o),e[Ot]=t.current,Nr(e.nodeType===8?e.parentNode:e),new xs(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=cu(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return xn(e)},ot.hydrate=function(e,t,n){if(!li(t))throw Error(a(200));return si(null,e,t,!0,n)},ot.hydrateRoot=function(e,t,n){if(!ws(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",s=Fc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Dc(t,null,e,1,n??null,o,!1,l,s),e[Ot]=t.current,Nr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ii(t)},ot.render=function(e,t,n){if(!li(t))throw Error(a(200));return si(null,e,t,!1,n)},ot.unmountComponentAtNode=function(e){if(!li(e))throw Error(a(40));return e._reactRootContainer?(xn(function(){si(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1},ot.unstable_batchedUpdates=ds,ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!li(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return si(e,t,n,!1,r)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var Gc;function eh(){if(Gc)return Cs.exports;Gc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Cs.exports=Jp(),Cs.exports}var Kc;function th(){if(Kc)return ai;Kc=1;var i=eh();return ai.createRoot=i.createRoot,ai.hydrateRoot=i.hydrateRoot,ai}var nh=th(),vd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Yc=at.createContext&&at.createContext(vd),rh=["attr","size","title"];function oh(i,u){if(i==null)return{};var a,d,f=ih(i,u);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(i);for(d=0;d<w.length;d++)a=w[d],u.indexOf(a)===-1&&{}.propertyIsEnumerable.call(i,a)&&(f[a]=i[a])}return f}function ih(i,u){if(i==null)return{};var a={};for(var d in i)if({}.hasOwnProperty.call(i,d)){if(u.indexOf(d)!==-1)continue;a[d]=i[d]}return a}function gi(){return gi=Object.assign?Object.assign.bind():function(i){for(var u=1;u<arguments.length;u++){var a=arguments[u];for(var d in a)({}).hasOwnProperty.call(a,d)&&(i[d]=a[d])}return i},gi.apply(null,arguments)}function Xc(i,u){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);u&&(d=d.filter(function(f){return Object.getOwnPropertyDescriptor(i,f).enumerable})),a.push.apply(a,d)}return a}function vi(i){for(var u=1;u<arguments.length;u++){var a=arguments[u]!=null?arguments[u]:{};u%2?Xc(Object(a),!0).forEach(function(d){lh(i,d,a[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):Xc(Object(a)).forEach(function(d){Object.defineProperty(i,d,Object.getOwnPropertyDescriptor(a,d))})}return i}function lh(i,u,a){return(u=sh(u))in i?Object.defineProperty(i,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[u]=a,i}function sh(i){var u=uh(i,"string");return typeof u=="symbol"?u:u+""}function uh(i,u){if(typeof i!="object"||!i)return i;var a=i[Symbol.toPrimitive];if(a!==void 0){var d=a.call(i,u);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(i)}function yd(i){return i&&i.map((u,a)=>at.createElement(u.tag,vi({key:a},u.attr),yd(u.child)))}function Oe(i){return u=>at.createElement(ah,gi({attr:vi({},i.attr)},u),yd(i.child))}function ah(i){var u=a=>{var d=i.attr,f=i.size,w=i.title,E=oh(i,rh),C=f||a.size||"1em",k;return a.className&&(k=a.className),i.className&&(k=(k?k+" ":"")+i.className),at.createElement("svg",gi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,d,E,{className:k,style:vi(vi({color:i.color||a.color},a.style),i.style),height:C,width:C,xmlns:"http://www.w3.org/2000/svg"}),w&&at.createElement("title",null,w),i.children)};return Yc!==void 0?at.createElement(Yc.Consumer,null,a=>u(a)):u(vd)}function bc(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(i)}function ch(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(i)}function xd(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(i)}function wd(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"3 11 22 2 13 21 11 13 3 11"},child:[]}]})(i)}function Zc(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"},child:[]},{tag:"path",attr:{d:"M13 13l6 6"},child:[]}]})(i)}function dh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(i)}function fh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(i)}function ph(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(i)}function hh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function mh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(i)}function gh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(i)}function vh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(i)}function kd(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(i)}function yh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(i)}function xh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"},child:[]}]})(i)}function wh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(i)}function kh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"},child:[]},{tag:"line",attr:{x1:"12",y1:"22",x2:"12",y2:"15.5"},child:[]},{tag:"polyline",attr:{points:"22 8.5 12 15.5 2 8.5"},child:[]},{tag:"polyline",attr:{points:"2 15.5 12 8.5 22 15.5"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"8.5"},child:[]}]})(i)}function Sh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(i)}function Ch(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function Eh(i){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(i)}var Se="-ms-",Yr="-moz-",me="-webkit-",Sd="comm",wi="rule",Bs="decl",jh="@import",Nh="@namespace",Cd="@keyframes",_h="@layer",Ed=Math.abs,Us=String.fromCharCode,Os=Object.assign;function Ph(i,u){return Be(i,0)^45?(((u<<2^Be(i,0))<<2^Be(i,1))<<2^Be(i,2))<<2^Be(i,3):0}function jd(i){return i.trim()}function Bt(i,u){return(i=u.exec(i))?i[0]:i}function oe(i,u,a){return i.replace(u,a)}function di(i,u,a){return i.indexOf(u,a)}function Be(i,u){return i.charCodeAt(u)|0}function Nn(i,u,a){return i.slice(u,a)}function Et(i){return i.length}function Nd(i){return i.length}function Gr(i,u){return u.push(i),i}function zh(i,u){return i.map(u).join("")}function qc(i,u){return i.filter(function(a){return!Bt(a,u)})}var ki=1,tr=1,_d=0,gt=0,Me=0,or="";function Si(i,u,a,d,f,w,E,C){return{value:i,root:u,parent:a,type:d,props:f,children:w,line:ki,column:tr,length:E,return:"",siblings:C}}function sn(i,u){return Os(Si("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},u)}function qn(i){for(;i.root;)i=sn(i.root,{children:[i]});Gr(i,i.siblings)}function Lh(){return Me}function Th(){return Me=gt>0?Be(or,--gt):0,tr--,Me===10&&(tr=1,ki--),Me}function Nt(){return Me=gt<_d?Be(or,gt++):0,tr++,Me===10&&(tr=1,ki++),Me}function an(){return Be(or,gt)}function fi(){return gt}function Ci(i,u){return Nn(or,i,u)}function br(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Oh(i){return ki=tr=1,_d=Et(or=i),gt=0,[]}function Rh(i){return or="",i}function Ns(i){return jd(Ci(gt-1,Rs(i===91?i+2:i===40?i+1:i)))}function Ih(i){for(;(Me=an())&&Me<33;)Nt();return br(i)>2||br(Me)>3?"":" "}function Dh(i,u){for(;--u&&Nt()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return Ci(i,fi()+(u<6&&an()==32&&Nt()==32))}function Rs(i){for(;Nt();)switch(Me){case i:return gt;case 34:case 39:i!==34&&i!==39&&Rs(Me);break;case 40:i===41&&Rs(i);break;case 92:Nt();break}return gt}function Mh(i,u){for(;Nt()&&i+Me!==57;)if(i+Me===84&&an()===47)break;return"/*"+Ci(u,gt-1)+"*"+Us(i===47?i:Nt())}function Fh(i){for(;!br(an());)Nt();return Ci(i,gt)}function Ah(i){return Rh(pi("",null,null,null,[""],i=Oh(i),0,[0],i))}function pi(i,u,a,d,f,w,E,C,k){for(var T=0,I=0,D=E,$=0,re=0,F=0,H=1,Q=1,ne=1,O=0,he="",Z=f,q=w,te=d,A=he;Q;)switch(F=O,O=Nt()){case 40:if(F!=108&&Be(A,D-1)==58){di(A+=oe(Ns(O),"&","&\f"),"&\f",Ed(T?C[T-1]:0))!=-1&&(ne=-1);break}case 34:case 39:case 91:A+=Ns(O);break;case 9:case 10:case 13:case 32:A+=Ih(F);break;case 92:A+=Dh(fi()-1,7);continue;case 47:switch(an()){case 42:case 47:Gr($h(Mh(Nt(),fi()),u,a,k),k),(br(F||1)==5||br(an()||1)==5)&&Et(A)&&Nn(A,-1,void 0)!==" "&&(A+=" ");break;default:A+="/"}break;case 123*H:C[T++]=Et(A)*ne;case 125*H:case 59:case 0:switch(O){case 0:case 125:Q=0;case 59+I:ne==-1&&(A=oe(A,/\f/g,"")),re>0&&(Et(A)-D||H===0&&F===47)&&Gr(re>32?ed(A+";",d,a,D-1,k):ed(oe(A," ","")+";",d,a,D-2,k),k);break;case 59:A+=";";default:if(Gr(te=Jc(A,u,a,T,I,f,C,he,Z=[],q=[],D,w),w),O===123)if(I===0)pi(A,u,te,te,Z,w,D,C,q);else{switch($){case 99:if(Be(A,3)===110)break;case 108:if(Be(A,2)===97)break;default:I=0;case 100:case 109:case 115:}I?pi(i,te,te,d&&Gr(Jc(i,te,te,0,0,f,C,he,f,Z=[],D,q),q),f,q,D,C,d?Z:q):pi(A,te,te,te,[""],q,0,C,q)}}T=I=re=0,H=ne=1,he=A="",D=E;break;case 58:D=1+Et(A),re=F;default:if(H<1){if(O==123)--H;else if(O==125&&H++==0&&Th()==125)continue}switch(A+=Us(O),O*H){case 38:ne=I>0?1:(A+="\f",-1);break;case 44:C[T++]=(Et(A)-1)*ne,ne=1;break;case 64:an()===45&&(A+=Ns(Nt())),$=an(),I=D=Et(he=A+=Fh(fi())),O++;break;case 45:F===45&&Et(A)==2&&(H=0)}}return w}function Jc(i,u,a,d,f,w,E,C,k,T,I,D){for(var $=f-1,re=f===0?w:[""],F=Nd(re),H=0,Q=0,ne=0;H<d;++H)for(var O=0,he=Nn(i,$+1,$=Ed(Q=E[H])),Z=i;O<F;++O)(Z=jd(Q>0?re[O]+" "+he:oe(he,/&\f/g,re[O])))&&(k[ne++]=Z);return Si(i,u,a,f===0?wi:C,k,T,I,D)}function $h(i,u,a,d){return Si(i,u,a,Sd,Us(Lh()),Nn(i,2,-2),0,d)}function ed(i,u,a,d,f){return Si(i,u,a,Bs,Nn(i,0,d),Nn(i,d+1,-1),d,f)}function Pd(i,u,a){switch(Ph(i,u)){case 5103:return me+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return me+i+i;case 4855:return me+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return Yr+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return me+i+Yr+i+Se+i+i;case 5936:switch(Be(i,u+11)){case 114:return me+i+Se+oe(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return me+i+Se+oe(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return me+i+Se+oe(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return me+i+Se+i+i;case 6165:return me+i+Se+"flex-"+i+i;case 5187:return me+i+oe(i,/(\w+).+(:[^]+)/,me+"box-$1$2"+Se+"flex-$1$2")+i;case 5443:return me+i+Se+"flex-item-"+oe(i,/flex-|-self/g,"")+(Bt(i,/flex-|baseline/)?"":Se+"grid-row-"+oe(i,/flex-|-self/g,""))+i;case 4675:return me+i+Se+"flex-line-pack"+oe(i,/align-content|flex-|-self/g,"")+i;case 5548:return me+i+Se+oe(i,"shrink","negative")+i;case 5292:return me+i+Se+oe(i,"basis","preferred-size")+i;case 6060:return me+"box-"+oe(i,"-grow","")+me+i+Se+oe(i,"grow","positive")+i;case 4554:return me+oe(i,/([^-])(transform)/g,"$1"+me+"$2")+i;case 6187:return oe(oe(oe(i,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),i,"")+i;case 5495:case 3959:return oe(i,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return oe(oe(i,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+me+i+i;case 4200:if(!Bt(i,/flex-|baseline/))return Se+"grid-column-align"+Nn(i,u)+i;break;case 2592:case 3360:return Se+oe(i,"template-","")+i;case 4384:case 3616:return a&&a.some(function(d,f){return u=f,Bt(d.props,/grid-\w+-end/)})?~di(i+(a=a[u].value),"span",0)?i:Se+oe(i,"-start","")+i+Se+"grid-row-span:"+(~di(a,"span",0)?Bt(a,/\d+/):+Bt(a,/\d+/)-+Bt(i,/\d+/))+";":Se+oe(i,"-start","")+i;case 4896:case 4128:return a&&a.some(function(d){return Bt(d.props,/grid-\w+-start/)})?i:Se+oe(oe(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return oe(i,/(.+)-inline(.+)/,me+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(i)-1-u>6)switch(Be(i,u+1)){case 109:if(Be(i,u+4)!==45)break;case 102:return oe(i,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Yr+(Be(i,u+3)==108?"$3":"$2-$3"))+i;case 115:return~di(i,"stretch",0)?Pd(oe(i,"stretch","fill-available"),u,a)+i:i}break;case 5152:case 5920:return oe(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(d,f,w,E,C,k,T){return Se+f+":"+w+T+(E?Se+f+"-span:"+(C?k:+k-+w)+T:"")+i});case 4949:if(Be(i,u+6)===121)return oe(i,":",":"+me)+i;break;case 6444:switch(Be(i,Be(i,14)===45?18:11)){case 120:return oe(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Be(i,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+Se+"$2box$3")+i;case 100:return oe(i,":",":"+Se)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(i,"scroll-","scroll-snap-")+i}return i}function yi(i,u){for(var a="",d=0;d<i.length;d++)a+=u(i[d],d,i,u)||"";return a}function Bh(i,u,a,d){switch(i.type){case _h:if(i.children.length)break;case jh:case Nh:case Bs:return i.return=i.return||i.value;case Sd:return"";case Cd:return i.return=i.value+"{"+yi(i.children,d)+"}";case wi:if(!Et(i.value=i.props.join(",")))return""}return Et(a=yi(i.children,d))?i.return=i.value+"{"+a+"}":""}function Uh(i){var u=Nd(i);return function(a,d,f,w){for(var E="",C=0;C<u;C++)E+=i[C](a,d,f,w)||"";return E}}function Wh(i){return function(u){u.root||(u=u.return)&&i(u)}}function Hh(i,u,a,d){if(i.length>-1&&!i.return)switch(i.type){case Bs:i.return=Pd(i.value,i.length,a);return;case Cd:return yi([sn(i,{value:oe(i.value,"@","@"+me)})],d);case wi:if(i.length)return zh(a=i.props,function(f){switch(Bt(f,d=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(sn(i,{props:[oe(f,/:(read-\w+)/,":"+Yr+"$1")]})),qn(sn(i,{props:[f]})),Os(i,{props:qc(a,d)});break;case"::placeholder":qn(sn(i,{props:[oe(f,/:(plac\w+)/,":"+me+"input-$1")]})),qn(sn(i,{props:[oe(f,/:(plac\w+)/,":"+Yr+"$1")]})),qn(sn(i,{props:[oe(f,/:(plac\w+)/,Se+"input-$1")]})),qn(sn(i,{props:[f]})),Os(i,{props:qc(a,d)});break}return""})}}var er={},_s,Ps;const nr=typeof process<"u"&&er!==void 0&&(er.REACT_APP_SC_ATTR||er.SC_ATTR)||"data-styled",zd="active",Ld="data-styled-version",Ei="6.5.3",Ws=`/*!sc*/
`,Xr=typeof window<"u"&&typeof document<"u";function td(i){if(typeof process<"u"&&er!==void 0){const u=er[i];if(u!==void 0&&u!=="")return u!=="false"}}const Vh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Ps=(_s=td("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&_s!==void 0?_s:td("SC_DISABLE_SPEEDY"))!==null&&Ps!==void 0?Ps:typeof process<"u"&&er!==void 0&&!1),Qh="sc-keyframes-";function ji(i,...u){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${i} for more information.${u.length>0?` Args: ${u.join(", ")}`:""}`)}let hi=new Map,xi=new Map,mi=1;const ci=i=>{if(hi.has(i))return hi.get(i);for(;xi.has(mi);)mi++;const u=mi++;return hi.set(i,u),xi.set(u,i),u},Gh=i=>xi.get(i),Kh=(i,u)=>{mi=u+1,hi.set(i,u),xi.set(u,i)},Hs=Object.freeze([]),rr=Object.freeze({});function Yh(i,u,a=rr){return i.theme!==a.theme&&i.theme||u||a.theme}const Xh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bh=/(^-|-$)/g;function Td(i){return i.replace(Xh,"-").replace(bh,"")}const Zh=/(a)(d)/gi,nd=i=>String.fromCharCode(i+(i>25?39:97));function Od(i){let u,a="";for(u=Math.abs(i);u>52;u=u/52|0)a=nd(u%52)+a;return(nd(u%52)+a).replace(Zh,"$1-$2")}const Is=5381,En=(i,u)=>{let a=u.length;for(;a;)i=33*i^u.charCodeAt(--a);return i},Rd=i=>En(Is,i);function qh(i){return Od(Rd(i)>>>0)}function Jh(i){return i.displayName||i.name||"Component"}function Ds(i){return typeof i=="string"&&!0}function em(i){return Ds(i)?`styled.${i}`:`Styled(${Jh(i)})`}const Id=Symbol.for("react.memo"),tm=Symbol.for("react.forward_ref"),nm={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},rm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},om={[tm]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Id]:Dd};function rd(i){return("type"in(u=i)&&u.type.$$typeof)===Id?Dd:"$$typeof"in i?om[i.$$typeof]:nm;var u}const im=Object.defineProperty,lm=Object.getOwnPropertyNames,sm=Object.getOwnPropertySymbols,um=Object.getOwnPropertyDescriptor,am=Object.getPrototypeOf,cm=Object.prototype;function Md(i,u,a){if(typeof u!="string"){const d=am(u);d&&d!==cm&&Md(i,d,a);const f=lm(u).concat(sm(u)),w=rd(i),E=rd(u);for(let C=0;C<f.length;++C){const k=f[C];if(!(k in rm||a&&a[k]||E&&k in E||w&&k in w)){const T=um(u,k);try{im(i,k,T)}catch{}}}}return i}function Ni(i){return typeof i=="function"}const dm=Symbol.for("react.forward_ref");function Fd(i){return i!=null&&(typeof i=="object"||typeof i=="function")&&i.$$typeof===dm&&"styledComponentId"in i}function Kr(i,u){return i&&u?i+" "+u:i||u||""}function od(i,u){return i.join("")}function Zr(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Ms(i,u,a=!1){if(!a&&!Zr(i)&&!Array.isArray(i))return u;if(Array.isArray(u))for(let d=0;d<u.length;d++)i[d]=Ms(i[d],u[d]);else if(Zr(u))for(const d in u)i[d]=Ms(i[d],u[d]);return i}function Ad(i,u){Object.defineProperty(i,"toString",{value:u})}const fm=class{constructor(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i,this._cGroup=0,this._cIndex=0}indexOfGroup(i){if(i===this._cGroup)return this._cIndex;let u=this._cIndex;if(i>this._cGroup)for(let a=this._cGroup;a<i;a++)u+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=i;a--)u-=this.groupSizes[a];return this._cGroup=i,this._cIndex=u,u}insertRules(i,u){if(i>=this.groupSizes.length){const f=this.groupSizes,w=f.length;let E=w;for(;i>=E;)if(E<<=1,E<0)throw ji(16,`${i}`);this.groupSizes=new Uint32Array(E),this.groupSizes.set(f),this.length=E;for(let C=w;C<E;C++)this.groupSizes[C]=0}let a=this.indexOfGroup(i+1),d=0;for(let f=0,w=u.length;f<w;f++)this.tag.insertRule(a,u[f])&&(this.groupSizes[i]++,a++,d++);d>0&&this._cGroup>i&&(this._cIndex+=d)}clearGroup(i){if(i<this.length){const u=this.groupSizes[i],a=this.indexOfGroup(i),d=a+u;this.groupSizes[i]=0;for(let f=a;f<d;f++)this.tag.deleteRule(a);u>0&&this._cGroup>i&&(this._cIndex-=u)}}getGroup(i){let u="";if(i>=this.length||this.groupSizes[i]===0)return u;const a=this.groupSizes[i],d=this.indexOfGroup(i),f=d+a;for(let w=d;w<f;w++)u+=this.tag.getRule(w)+Ws;return u}},pm=`style[${nr}][${Ld}="${Ei}"]`,hm=new RegExp(`^${nr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),id=i=>typeof ShadowRoot<"u"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11,Fs=i=>{if(!i)return document;if(id(i))return i;if("getRootNode"in i){const u=i.getRootNode();if(id(u))return u}return document},mm=(i,u,a)=>{const d=a.split(",");let f;for(let w=0,E=d.length;w<E;w++)(f=d[w])&&i.registerName(u,f)},gm=(i,u)=>{var a;const d=((a=u.textContent)!==null&&a!==void 0?a:"").split(Ws),f=[];for(let w=0,E=d.length;w<E;w++){const C=d[w].trim();if(!C)continue;const k=C.match(hm);if(k){const T=0|parseInt(k[1],10),I=k[2];T!==0&&(Kh(I,T),mm(i,I,k[3]),i.getTag().insertRules(T,f)),f.length=0}else f.push(C)}},zs=i=>{const u=Fs(i.options.target).querySelectorAll(pm);for(let a=0,d=u.length;a<d;a++){const f=u[a];f&&f.getAttribute(nr)!==zd&&(gm(i,f),f.parentNode&&f.parentNode.removeChild(f))}};let Qr=!1;function vm(){if(Qr!==!1)return Qr;if(typeof document<"u"){const i=document.head.querySelector('meta[property="csp-nonce"]');if(i)return Qr=i.nonce||i.getAttribute("content")||void 0;const u=document.head.querySelector('meta[name="sc-nonce"]');if(u)return Qr=u.getAttribute("content")||void 0}return Qr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const $d=(i,u)=>{const a=document.head,d=i||a,f=document.createElement("style"),w=(k=>{const T=Array.from(k.querySelectorAll(`style[${nr}]`));return T[T.length-1]})(d),E=w!==void 0?w.nextSibling:null;f.setAttribute(nr,zd),f.setAttribute(Ld,Ei);const C=u||vm();return C&&f.setAttribute("nonce",C),d.insertBefore(f,E),f},ym=class{constructor(i,u){this.element=$d(i,u),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var d;if(a.sheet)return a.sheet;const f=(d=a.getRootNode().styleSheets)!==null&&d!==void 0?d:document.styleSheets;for(let w=0,E=f.length;w<E;w++){const C=f[w];if(C.ownerNode===a)return C}throw ji(17)})(this.element),this.length=0}insertRule(i,u){try{return this.sheet.insertRule(u,i),this.length++,!0}catch{return!1}}deleteRule(i){this.sheet.deleteRule(i),this.length--}getRule(i){const u=this.sheet.cssRules[i];return u&&u.cssText?u.cssText:""}},xm=class{constructor(i,u){this.element=$d(i,u),this.nodes=this.element.childNodes,this.length=0}insertRule(i,u){if(i<=this.length&&i>=0){const a=document.createTextNode(u);return this.element.insertBefore(a,this.nodes[i]||null),this.length++,!0}return!1}deleteRule(i){this.element.removeChild(this.nodes[i]),this.length--}getRule(i){return i<this.length?this.nodes[i].textContent:""}};let ld=Xr;const wm={isServer:!Xr,useCSSOMInjection:!Vh};class _i{static registerId(u){return ci(u)}constructor(u=rr,a={},d){this.options=Object.assign(Object.assign({},wm),u),this.gs=a,this.keyframeIds=new Set,this.names=new Map(d),this.server=!!u.isServer,!this.server&&Xr&&ld&&(ld=!1,zs(this)),Ad(this,()=>(f=>{const w=f.getTag(),{length:E}=w;let C="";for(let k=0;k<E;k++){const T=Gh(k);if(T===void 0)continue;const I=f.names.get(T);if(I===void 0||!I.size)continue;const D=w.getGroup(k);if(D.length===0)continue;const $=nr+".g"+k+'[id="'+T+'"]';let re="";for(const F of I)F.length>0&&(re+=F+",");C+=D+$+'{content:"'+re+'"}'+Ws}return C})(this))}rehydrate(){!this.server&&Xr&&zs(this)}reconstructWithOptions(u,a=!0){const d=new _i(Object.assign(Object.assign({},this.options),u),this.gs,a&&this.names||void 0);return d.keyframeIds=new Set(this.keyframeIds),!this.server&&Xr&&u.target!==this.options.target&&Fs(this.options.target)!==Fs(u.target)&&zs(d),d}allocateGSInstance(u){return this.gs[u]=(this.gs[u]||0)+1}getTag(){return this.tag||(this.tag=(u=(({useCSSOMInjection:a,target:d,nonce:f})=>a?new ym(d,f):new xm(d,f))(this.options),new fm(u)));var u}hasNameForId(u,a){var d,f;return(f=(d=this.names.get(u))===null||d===void 0?void 0:d.has(a))!==null&&f!==void 0&&f}registerName(u,a){ci(u),u.startsWith(Qh)&&this.keyframeIds.add(u);const d=this.names.get(u);d?d.add(a):this.names.set(u,new Set([a]))}insertRules(u,a,d){this.registerName(u,a),this.getTag().insertRules(ci(u),d)}clearNames(u){this.names.has(u)&&this.names.get(u).clear()}clearRules(u){this.getTag().clearGroup(ci(u)),this.clearNames(u)}clearTag(){this.tag=void 0}}const Bd=new WeakSet,km={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Sm(i,u){return u==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||i in km||i.startsWith("--")?String(u).trim():u+"px"}const Cn=47;function sd(i){if(i.charCodeAt(0)===45&&i.charCodeAt(1)===45)return i;let u="";for(let a=0;a<i.length;a++){const d=i.charCodeAt(a);u+=d>=65&&d<=90?"-"+String.fromCharCode(d+32):i[a]}return u.startsWith("ms-")?"-"+u:u}const Cm=Symbol.for("sc-keyframes");function Em(i){return typeof i=="object"&&i!==null&&Cm in i}function Ud(i){return Ni(i)&&!(i.prototype&&i.prototype.isReactComponent)}const Wd=i=>i==null||i===!1||i==="",jm=Symbol.for("react.client.reference");function ud(i){return i.$$typeof===jm}function Hd(i,u){for(const a in i){const d=i[a];i.hasOwnProperty(a)&&!Wd(d)&&(Array.isArray(d)&&Bd.has(d)||Ni(d)?u.push(sd(a)+":",d,";"):Zr(d)?(u.push(a+" {"),Hd(d,u),u.push("}")):u.push(sd(a)+": "+Sm(a,d)+";"))}}function jn(i,u,a,d,f=[]){if(Wd(i))return f;const w=typeof i;if(w==="string")return f.push(i),f;if(w==="function"){if(ud(i))return f;if(Ud(i)&&u){const E=i(u);return jn(E,u,a,d,f)}return f.push(i),f}if(Array.isArray(i)){for(let E=0;E<i.length;E++)jn(i[E],u,a,d,f);return f}return Fd(i)?(f.push(`.${i.styledComponentId}`),f):Em(i)?(a?(i.inject(a,d),f.push(i.getName(d))):f.push(i),f):ud(i)?f:Zr(i)?i.toString!==Object.prototype.toString?(f.push(i.toString()),f):(Hd(i,f),f):(f.push(i.toString()),f)}const Nm=Rd(Ei);class _m{constructor(u,a,d){this.rules=u,this.componentId=a,this.baseHash=En(Nm,a),this.baseStyle=d,_i.registerId(a)}generateAndInjectStyles(u,a,d){let f=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,a,d):"";{let w="";for(let E=0;E<this.rules.length;E++){const C=this.rules[E];if(typeof C=="string")w+=C;else if(C)if(Ud(C)){const k=C(u);typeof k=="string"?w+=k:k!=null&&k!==!1&&(w+=od(jn(k,u,a,d)))}else w+=od(jn(C,u,a,d))}if(w){this.dynamicNameCache||(this.dynamicNameCache=new Map);const E=d.hash?d.hash+w:w;let C=this.dynamicNameCache.get(E);if(!C){if(C=Od(En(En(this.baseHash,d.hash),w)>>>0),this.dynamicNameCache.size>=200){const k=this.dynamicNameCache.keys().next().value;k!==void 0&&this.dynamicNameCache.delete(k)}this.dynamicNameCache.set(E,C)}if(!a.hasNameForId(this.componentId,C)){const k=d(w,"."+C,void 0,this.componentId);a.insertRules(this.componentId,C,k)}f=Kr(f,C)}}return f}}const Pm=/&/g;function Vd(i,u){let a=0;for(;--u>=0&&i.charCodeAt(u)===92;)a++;return!(1&~a)}function Ls(i){const u=i.length;let a="",d=0,f=0,w=0,E=!1,C=!1;for(let k=0;k<u;k++){const T=i.charCodeAt(k);if(w!==0||E||T!==Cn||i.charCodeAt(k+1)!==42)if(E)T===42&&i.charCodeAt(k+1)===Cn&&(E=!1,k++);else if(T!==34&&T!==39||Vd(i,k)){if(w===0)if(T===123)f++;else if(T===125){if(f--,f<0){C=!0;let I=k+1;for(;I<u;){const D=i.charCodeAt(I);if(D===59||D===10)break;I++}I<u&&i.charCodeAt(I)===59&&I++,f=0,k=I-1,d=I;continue}f===0&&(a+=i.substring(d,k+1),d=k+1)}else T===59&&f===0&&(a+=i.substring(d,k+1),d=k+1)}else w===0?w=T:w===T&&(w=0);else E=!0,k++}return C||f!==0||w!==0?(d<u&&f===0&&w===0&&(a+=i.substring(d)),a):i}function Qd(i,u){const a=u+" ",d=","+a;for(let f=0;f<i.length;f++){const w=i[f];if(w.type==="rule"){w.value=(a+w.value).replaceAll(",",d);const E=w.props,C=[];for(let k=0;k<E.length;k++)C[k]=a+E[k];w.props=C}Array.isArray(w.children)&&w.type!=="@keyframes"&&Qd(w.children,u)}return i}function zm({options:i=rr,plugins:u=Hs}=rr){let a,d,f;const w=($,re,F)=>F.startsWith(d)&&F.endsWith(d)&&F.replaceAll(d,"").length>0?`.${a}`:$,E=u.slice();E.push($=>{$.type===wi&&$.value.includes("&")&&(f||(f=new RegExp(`\\${d}\\b`,"g")),$.props[0]=$.props[0].replace(Pm,d).replace(f,w))}),i.prefix&&E.push(Hh),E.push(Bh);let C=[];const k=Uh(E.concat(Wh($=>C.push($)))),T=($,re="",F="",H="&")=>{a=H,d=re,f=void 0;const Q=function(O){const he=O.indexOf("//")!==-1,Z=O.indexOf("}")!==-1;if(!he&&!Z)return O;if(!he)return Ls(O);const q=O.length;let te="",A=0,X=0,ze=0,ue=0,Ee=0,Re=!1;for(;X<q;){const se=O.charCodeAt(X);if(se!==34&&se!==39||Vd(O,X))if(ze===0)if(se===Cn&&X+1<q&&O.charCodeAt(X+1)===42){for(X+=2;X+1<q&&(O.charCodeAt(X)!==42||O.charCodeAt(X+1)!==Cn);)X++;X+=2}else if(se!==40)if(se!==41)if(ue>0)X++;else if(se===42&&X+1<q&&O.charCodeAt(X+1)===Cn)te+=O.substring(A,X),X+=2,A=X,Re=!0;else if(se===Cn&&X+1<q&&O.charCodeAt(X+1)===Cn){for(te+=O.substring(A,X);X<q&&O.charCodeAt(X)!==10;)X++;A=X,Re=!0}else se===123?Ee++:se===125&&Ee--,X++;else ue>0&&ue--,X++;else ue++,X++;else X++;else ze===0?ze=se:ze===se&&(ze=0),X++}return Re?(A<q&&(te+=O.substring(A)),Ee===0?te:Ls(te)):Ee===0?O:Ls(O)}($);let ne=Ah(F||re?F+" "+re+" { "+Q+" }":Q);return i.namespace&&(ne=Qd(ne,i.namespace)),C=[],yi(ne,k),C},I=i;let D=Is;for(let $=0;$<u.length;$++)u[$].name||ji(15),D=En(D,u[$].name);return I!=null&&I.namespace&&(D=En(D,I.namespace)),I!=null&&I.prefix&&(D=En(D,"p")),T.hash=D!==Is?D.toString():"",T}const Lm=new _i,Tm=zm(),Gd=at.createContext({shouldForwardProp:void 0,styleSheet:Lm,stylis:Tm,stylisPlugins:void 0});Gd.Consumer;function Om(){return at.useContext(Gd)}const Kd=at.createContext(void 0);Kd.Consumer;const ad=Object.prototype.hasOwnProperty,Ts={};function Rm(i,u){const a=typeof i!="string"?"sc":Td(i);Ts[a]=(Ts[a]||0)+1;const d=a+"-"+qh(Ei+a+Ts[a]);return u?u+"-"+d:d}function Im(i,u,a){const d=Fd(i),f=i,w=!Ds(i),{attrs:E=Hs,componentId:C=Rm(u.displayName,u.parentComponentId),displayName:k=em(i)}=u,T=u.displayName&&u.componentId?Td(u.displayName)+"-"+u.componentId:u.componentId||C,I=d&&f.attrs?f.attrs.concat(E).filter(Boolean):E;let{shouldForwardProp:D}=u;if(d&&f.shouldForwardProp){const H=f.shouldForwardProp;if(u.shouldForwardProp){const Q=u.shouldForwardProp;D=(ne,O)=>H(ne,O)&&Q(ne,O)}else D=H}const $=new _m(a,T,d?f.componentStyle:void 0);function re(H,Q){return function(ne,O,he){const{attrs:Z,componentStyle:q,defaultProps:te,foldedComponentIds:A,styledComponentId:X,target:ze}=ne,ue=at.useContext(Kd),Ee=Om(),Re=ne.shouldForwardProp||Ee.shouldForwardProp,se=Yh(O,ue,te)||rr;let Ie,Ge;{const V=at.useRef(null),z=V.current;if(z!==null&&z[1]===se&&z[2]===Ee.styleSheet&&z[3]===Ee.stylis&&z[7]===q&&function(g,S,G){const b=g,J=S;let le=0;for(const ce in J)if(ad.call(J,ce)&&(le++,b[ce]!==J[ce]))return!1;return le===G}(z[0],O,z[4]))Ie=z[5],Ge=z[6];else{Ie=function(S,G,b){const J=Object.assign(Object.assign({},G),{className:void 0,theme:b}),le=S.length>1;for(let ce=0;ce<S.length;ce++){const de=S[ce],ge=Ni(de)?de(le?Object.assign({},J):J):de;for(const _e in ge)_e==="className"?J.className=Kr(J.className,ge[_e]):_e==="style"?J.style=Object.assign(Object.assign({},J.style),ge[_e]):_e in G&&G[_e]===void 0||(J[_e]=ge[_e])}return"className"in G&&typeof G.className=="string"&&(J.className=Kr(J.className,G.className)),J}(Z,O,se),Ge=q.generateAndInjectStyles(Ie,Ee.styleSheet,Ee.stylis);let g=0;for(const S in O)ad.call(O,S)&&g++;V.current=[O,se,Ee.styleSheet,Ee.stylis,g,Ie,Ge,q]}}const Fe=Ie.as||ze,ye=function(V,z,g,S){const G={};for(const b in V)V[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&V.theme===g||(b==="forwardedAs"?G.as=V.forwardedAs:S&&!S(b,z)||(G[b]=V[b]));return G}(Ie,Fe,se,Re);let L=Kr(A,X);return Ge&&(L+=" "+Ge),Ie.className&&(L+=" "+Ie.className),ye[Ds(Fe)&&Fe.includes("-")?"class":"className"]=L,he&&(ye.ref=he),ae.createElement(Fe,ye)}(F,H,Q)}re.displayName=k;let F=at.forwardRef(re);return F.attrs=I,F.componentStyle=$,F.displayName=k,F.shouldForwardProp=D,F.foldedComponentIds=d?Kr(f.foldedComponentIds,f.styledComponentId):"",F.styledComponentId=T,F.target=d?f.target:i,Object.defineProperty(F,"defaultProps",{get(){return this._foldedDefaultProps},set(H){this._foldedDefaultProps=d?function(Q,...ne){for(const O of ne)Ms(Q,O,!0);return Q}({},f.defaultProps,H):H}}),Ad(F,()=>`.${F.styledComponentId}`),w&&Md(F,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),F}var Dm=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function cd(i,u){const a=[i[0]];for(let d=0,f=u.length;d<f;d+=1)a.push(u[d],i[d+1]);return a}const dd=i=>(Bd.add(i),i);function Mm(i,...u){if(Ni(i)||Zr(i))return dd(jn(cd(Hs,[i,...u])));const a=i;return u.length===0&&a.length===1&&typeof a[0]=="string"?jn(a):dd(jn(cd(a,u)))}function As(i,u,a=rr){if(!u)throw ji(1,u);const d=(f,...w)=>i(u,a,Mm(f,...w));return d.attrs=f=>As(i,u,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,f).filter(Boolean)})),d.withConfig=f=>As(i,u,Object.assign(Object.assign({},a),f)),d}const Yd=i=>As(Im,i),jt=Yd;Dm.forEach(i=>{jt[i]=Yd(i)});const Fm={Wrapper:jt.button`
        position: fixed;

        right: 22px;
        bottom: 22px;

        z-index: 1200;

        display: grid;
        place-items: center;

        width: 44px;
        height: 44px;

        padding: 0;

        color: var(--heading);
        background: var(--card);

        border: 1px solid var(--border-strong);
        border-radius: 10px;

        box-shadow: var(--shadow-md);

        opacity: ${({$visible:i})=>i?1:0};

        visibility: ${({$visible:i})=>i?"visible":"hidden"};

        pointer-events: ${({$visible:i})=>i?"auto":"none"};

        cursor: pointer;

        transition:
            opacity 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;

        &:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-lg);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 3px;
        }

        @media (max-width: 600px) {
            right: 14px;
            bottom: 14px;

            width: 42px;
            height: 42px;
        }
    `},Am=()=>{const[i,u]=ae.useState(!1);ae.useEffect(()=>{const d=()=>{u(window.scrollY>500)};return d(),window.addEventListener("scroll",d,{passive:!0}),()=>{window.removeEventListener("scroll",d)}},[]);const a=()=>{const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:0,behavior:d?"auto":"smooth"})};return m.jsx(Fm.Wrapper,{type:"button",$visible:i,onClick:a,"aria-label":"Back to top",title:"Back to top",children:m.jsx(Ch,{"aria-hidden":"true"})})};function $m(i){return Oe({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"},child:[]}]})(i)}const Bm={Wrapper:jt.footer`
        background: #050505;

        border-top: 1px solid var(--border);

        .inner {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 40px;

            width: min(1240px, calc(100% - 40px));

            margin: 0 auto;

            padding: 34px 0;
        }

        .info {
            max-width: 520px;
        }

        .title {
            display: block;

            color: var(--heading);

            font-size: 0.76rem;
        }

        .text {
            margin-top: 7px;

            color: var(--muted);

            font-size: 0.58rem;
            line-height: 1.7;
        }

        .copyright {
            margin-top: 10px;

            color: var(--muted);

            font-size: 0.56rem;
        }

        .copyright a {
            color: var(--text);

            text-decoration: none;

            border-bottom: 1px solid transparent;

            transition:
                border-color 180ms ease,
                text-shadow 180ms ease;
        }

        .copyright a:hover {
            border-color: var(--accent);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 7px;

            max-width: 440px;
        }

        .links a {
            display: grid;
            place-items: center;

            width: 36px;
            height: 36px;

            color: var(--text);

            border: 1px solid var(--border);

            border-radius: 8px;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .links a:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        .copyright a:focus-visible,
        .links a:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        @media (max-width: 800px) {
            .inner {
                align-items: flex-start;
                flex-direction: column;

                width: calc(100% - 28px);
            }

            .links {
                justify-content: flex-start;

                max-width: 100%;
            }
        }

        @media (max-width: 375px) {
            .links a {
                width: 34px;
                height: 34px;
            }
        }
    `},Um=[{id:"portfolio",label:"Portfolio",href:"https://www.ashishranjan.net",icon:m.jsx(vh,{"aria-hidden":"true"})},{id:"github",label:"GitHub",href:"https://github.com/a2rp",icon:m.jsx(kd,{"aria-hidden":"true"})},{id:"codepen",label:"CodePen",href:"https://codepen.io/ash1198",icon:m.jsx(kh,{"aria-hidden":"true"})},{id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:m.jsx(ph,{"aria-hidden":"true"})},{id:"facebook",label:"Facebook",href:"https://www.facebook.com/theash.ashish",icon:m.jsx(yh,{"aria-hidden":"true"})},{id:"youtube",label:"YouTube",href:"https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ",icon:m.jsx(ch,{"aria-hidden":"true"})},{id:"email",label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:m.jsx(fh,{"aria-hidden":"true"}),newTab:!1},{id:"support",label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:m.jsx(gh,{"aria-hidden":"true"})},{id:"buy-me-a-coffee",label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:m.jsx(wh,{"aria-hidden":"true"})},{id:"patreon",label:"Patreon",href:"https://www.patreon.com/a2rp",icon:m.jsx($m,{"aria-hidden":"true"})}],Wm=()=>{const i=new Date().getFullYear();return m.jsx(Bm.Wrapper,{children:m.jsxs("div",{className:"inner",children:[m.jsxs("div",{className:"info",children:[m.jsx("strong",{className:"title",children:"Tooltip Pro"}),m.jsx("p",{className:"text",children:"Accessible tooltips and popovers with custom viewport-aware positioning."}),m.jsxs("p",{className:"copyright",children:["Copyright © ",i," ",m.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),m.jsx("nav",{className:"links","aria-label":"External links",children:Um.map(u=>m.jsx("a",{href:u.href,target:u.newTab===!1?void 0:"_blank",rel:u.newTab===!1?void 0:"noopener noreferrer","aria-label":u.label,title:u.label,children:u.icon},u.id))})]})})},Hm={Wrapper:jt.header`
        position: fixed;

        top: ${({$visible:i})=>i?"0":"-82px"};

        left: 0;

        z-index: 1000;

        width: 100%;

        background: rgba(7, 7, 7, 0.92);

        border-bottom: 1px solid var(--border);

        backdrop-filter: blur(16px);

        transition:
            top 180ms ease,
            border-color 180ms ease;

        .inner {
            display: grid;

            grid-template-columns:
                auto
                1fr
                auto;

            align-items: center;
            gap: 24px;

            width: min(1240px, calc(100% - 40px));

            min-height: 72px;

            margin: 0 auto;
        }

        .brand {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            color: var(--heading);

            text-decoration: none;
        }

        .logo {
            width: 42px;
            height: 42px;

            flex-shrink: 0;

            object-fit: cover;

            border: 1px solid var(--border);

            border-radius: 10px;
        }

        .brandText {
            min-width: 0;
        }

        .brand strong {
            display: block;

            color: var(--heading);

            font-size: 0.78rem;
            line-height: 1.15;
        }

        .brand span {
            display: block;

            margin-top: 4px;

            color: var(--muted);

            font-size: 0.52rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        .desktopNav {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 22px;
        }

        .desktopNav a {
            color: var(--text);

            font-size: 0.62rem;
            font-weight: 700;

            text-decoration: none;

            border-bottom: 1px solid transparent;

            transition:
                border-color 180ms ease,
                text-shadow 180ms ease;
        }

        .desktopNav a:hover {
            border-color: var(--accent);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;
        }

        .iconButton,
        .menuButton {
            display: grid;
            place-items: center;

            width: 40px;
            height: 40px;

            padding: 0;

            color: var(--text);
            background: transparent;

            border: 1px solid var(--border);

            border-radius: 9px;

            text-decoration: none;

            cursor: pointer;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .iconButton:hover,
        .menuButton:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        .menuButton {
            display: none;
        }

        .mobileNav {
            display: none;

            border-top: 1px solid var(--border);

            background: rgba(7, 7, 7, 0.98);
        }

        .mobileNavInner {
            display: grid;

            width: calc(100% - 28px);

            margin: 0 auto;

            padding: 10px 0 14px;
        }

        .mobileNav a {
            display: flex;
            align-items: center;

            min-height: 46px;

            padding: 8px 10px;

            color: var(--text);

            border-bottom: 1px solid var(--border);

            font-size: 0.66rem;
            font-weight: 700;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                text-shadow 180ms ease;
        }

        .mobileNav a:last-child {
            border-bottom: 0;
        }

        .mobileNav a:hover {
            border-color: var(--accent-border);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .brand:focus-visible,
        .desktopNav a:focus-visible,
        .mobileNav a:focus-visible,
        .iconButton:focus-visible,
        .menuButton:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        @media (max-width: 760px) {
            .inner {
                grid-template-columns:
                    1fr
                    auto;

                width: calc(100% - 28px);
            }

            .desktopNav {
                display: none;
            }

            .menuButton {
                display: grid;
            }

            .mobileNav {
                display: block;
            }
        }

        @media (max-width: 375px) {
            .brand span {
                display: none;
            }

            .logo {
                width: 38px;
                height: 38px;
            }

            .iconButton,
            .menuButton {
                width: 38px;
                height: 38px;
            }
        }
    `},Vm=()=>{const i=ae.useRef(0),[u,a]=ae.useState(!0),[d,f]=ae.useState(!1);ae.useEffect(()=>{const C=()=>{const k=window.scrollY;if(d){a(!0),i.current=k;return}if(k<=20){a(!0),i.current=k;return}a(k<i.current),i.current=k};return i.current=window.scrollY,window.addEventListener("scroll",C,{passive:!0}),()=>{window.removeEventListener("scroll",C)}},[d]),ae.useEffect(()=>{const C=T=>{T.key==="Escape"&&f(!1)},k=()=>{window.innerWidth>760&&f(!1)};return document.addEventListener("keydown",C),window.addEventListener("resize",k),()=>{document.removeEventListener("keydown",C),window.removeEventListener("resize",k)}},[]);const w=()=>{a(!0),f(C=>!C)},E=()=>{f(!1)};return m.jsxs(Hm.Wrapper,{$visible:u||d,children:[m.jsxs("div",{className:"inner",children:[m.jsxs("a",{className:"brand",href:"#top",onClick:E,"aria-label":"Tooltip Pro home",children:[m.jsx("img",{className:"logo",src:"/tooltip-pro/logo.png",alt:"","aria-hidden":"true"}),m.jsxs("div",{className:"brandText",children:[m.jsx("strong",{children:"Tooltip Pro"}),m.jsx("span",{children:"Floating UI Demo"})]})]}),m.jsxs("nav",{className:"desktopNav","aria-label":"Primary navigation",children:[m.jsx("a",{href:"#tooltips",children:"Tooltips"}),m.jsx("a",{href:"#popovers",children:"Popovers"}),m.jsx("a",{href:"#behavior",children:"Behavior"})]}),m.jsxs("div",{className:"actions",children:[m.jsx("a",{className:"iconButton",href:"https://github.com/a2rp/tooltip-pro",target:"_blank",rel:"noopener noreferrer","aria-label":"View Tooltip Pro on GitHub",title:"View on GitHub",children:m.jsx(kd,{"aria-hidden":"true"})}),m.jsx("button",{className:"menuButton",type:"button",onClick:w,"aria-expanded":d,"aria-controls":"mobile-navigation","aria-label":d?"Close navigation menu":"Open navigation menu",title:d?"Close menu":"Open menu",children:d?m.jsx(xd,{"aria-hidden":"true"}):m.jsx(dh,{"aria-hidden":"true"})})]})]}),d&&m.jsx("nav",{id:"mobile-navigation",className:"mobileNav","aria-label":"Mobile navigation",children:m.jsxs("div",{className:"mobileNavInner",children:[m.jsx("a",{href:"#tooltips",onClick:E,children:"Tooltips"}),m.jsx("a",{href:"#popovers",onClick:E,children:"Popovers"}),m.jsx("a",{href:"#behavior",onClick:E,children:"Behavior"})]})})]})},Qm=10,Vs=i=>{const[u,a="center"]=i.split("-");return{side:u,align:a}},Gm=i=>{const{side:u,align:a}=Vs(i),f={top:"bottom",bottom:"top",left:"right",right:"left"}[u]||"bottom";return a==="center"?f:`${f}-${a}`},fd=({triggerRect:i,floatingRect:u,placement:a,offset:d})=>{const{side:f,align:w}=Vs(a);let E=i.left+i.width/2-u.width/2,C=i.top+i.height/2-u.height/2;return f==="top"&&(C=i.top-u.height-d),f==="bottom"&&(C=i.bottom+d),f==="left"&&(E=i.left-u.width-d),f==="right"&&(E=i.right+d),(f==="top"||f==="bottom")&&(w==="start"&&(E=i.left),w==="end"&&(E=i.right-u.width)),(f==="left"||f==="right")&&(w==="start"&&(C=i.top),w==="end"&&(C=i.bottom-u.height)),{x:E,y:C}},pd=({x:i,y:u,width:a,height:d,viewportWidth:f,viewportHeight:w,padding:E})=>({top:Math.max(0,E-u),right:Math.max(0,i+a-(f-E)),bottom:Math.max(0,u+d-(w-E)),left:Math.max(0,E-i)}),hd=(i,u)=>{const{side:a}=Vs(u);return i[a]||0},md=(i,u,a)=>a<u?u:Math.min(Math.max(i,u),a),Xd=({triggerElement:i,floatingElement:u,placement:a="top",offset:d=10,padding:f=Qm,flip:w=!0,shift:E=!0})=>{if(!i||!u)return null;const C=i.getBoundingClientRect(),k=u.getBoundingClientRect(),T=window.innerWidth,I=window.innerHeight;let D=a,$=fd({triggerRect:C,floatingRect:k,placement:D,offset:d});if(w){const re=pd({...$,width:k.width,height:k.height,viewportWidth:T,viewportHeight:I,padding:f}),F=Gm(D),H=fd({triggerRect:C,floatingRect:k,placement:F,offset:d}),Q=pd({...H,width:k.width,height:k.height,viewportWidth:T,viewportHeight:I,padding:f}),ne=hd(re,D),O=hd(Q,F);ne>0&&O<ne&&(D=F,$=H)}return E&&($.x=md($.x,f,T-k.width-f),$.y=md($.y,f,I-k.height-f)),{x:Math.round($.x),y:Math.round($.y),placement:D}},un={Wrapper:jt.span`
        position: relative;

        display: inline-flex;

        max-width: 100%;
    `,Trigger:jt.span`
        display: inline-flex;
        align-items: center;

        max-width: 100%;

        border-radius: 8px;

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }
    `,Tooltip:jt.span`
        position: fixed;

        top: ${({$y:i})=>`${i}px`};
        left: ${({$x:i})=>`${i}px`};

        z-index: 1500;

        max-width: min(280px, calc(100vw - 24px));

        padding: 8px 10px;

        color: var(--tooltip-text);
        background: var(--tooltip-bg);

        border: 1px solid var(--tooltip-border);

        border-radius: 8px;

        box-shadow: var(--shadow-md);

        font-size: 0.65rem;
        font-weight: 700;
        line-height: 1.55;

        visibility: ${({$positioned:i})=>i?"visible":"hidden"};

        opacity: ${({$positioned:i})=>i?1:0};

        pointer-events: none;

        transition:
            opacity 120ms ease,
            border-color 180ms ease;

        &::after {
            position: absolute;

            width: 8px;
            height: 8px;

            content: "";

            background: var(--tooltip-bg);

            border: 1px solid var(--tooltip-border);

            transform: rotate(45deg);
        }

        &[data-placement^="top"]::after {
            bottom: -5px;
            left: 50%;

            border-top: 0;
            border-left: 0;

            transform: translateX(-50%) rotate(45deg);
        }

        &[data-placement^="bottom"]::after {
            top: -5px;
            left: 50%;

            border-right: 0;
            border-bottom: 0;

            transform: translateX(-50%) rotate(45deg);
        }

        &[data-placement^="left"]::after {
            top: 50%;
            right: -5px;

            border-bottom: 0;
            border-left: 0;

            transform: translateY(-50%) rotate(45deg);
        }

        &[data-placement^="right"]::after {
            top: 50%;
            left: -5px;

            border-top: 0;
            border-right: 0;

            transform: translateY(-50%) rotate(45deg);
        }
    `,Popover:jt.div`
        position: fixed;

        top: ${({$y:i})=>`${i}px`};
        left: ${({$x:i})=>`${i}px`};

        z-index: 1600;

        width: min(340px, calc(100vw - 24px));

        padding: 16px;

        color: var(--text);
        background: var(--card);

        border: 1px solid var(--border-strong);

        border-radius: 12px;

        box-shadow: var(--shadow-lg);

        visibility: ${({$positioned:i})=>i?"visible":"hidden"};

        opacity: ${({$positioned:i})=>i?1:0};

        transition:
            opacity 120ms ease,
            border-color 180ms ease;

        outline: none;

        .label {
            display: block;

            color: var(--accent);

            font-size: 0.56rem;
            font-weight: 800;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        .title {
            display: block;

            margin-top: 5px;

            color: var(--heading);

            font-size: 0.84rem;
            font-weight: 800;
        }

        .content {
            margin-top: 12px;

            color: var(--text);

            font-size: 0.68rem;
            line-height: 1.7;
        }
    `,PopoverHeader:jt.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
    `,CloseButton:jt.button`
        display: grid;
        place-items: center;

        width: 34px;
        height: 34px;

        flex-shrink: 0;

        padding: 0;

        color: var(--text);
        background: transparent;

        border: 1px solid var(--border);

        border-radius: 8px;

        cursor: pointer;

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;

        &:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 2px;
        }
    `},Jn=({children:i,content:u,placement:a="top",trigger:d="hover",offset:f=10,disabled:w=!1,openDelay:E=120,closeDelay:C=80})=>{const k=ae.useId(),T=ae.useRef(null),I=ae.useRef(null),D=ae.useRef(null),$=ae.useRef(null),re=ae.useRef(null),[F,H]=ae.useState(!1),[Q,ne]=ae.useState(!1),[O,he]=ae.useState({x:0,y:0,placement:a}),Z=()=>{window.clearTimeout($.current),window.clearTimeout(re.current)},q=ae.useCallback(()=>{const ue=Xd({triggerElement:I.current,floatingElement:D.current,placement:a,offset:f});ue&&(he(ue),ne(!0))},[a,f]),te=()=>{w||(Z(),$.current=window.setTimeout(()=>{ne(!1),H(!0)},E))},A=()=>{Z(),re.current=window.setTimeout(()=>{H(!1),ne(!1)},C)},X=()=>{w||(Z(),ne(!1),H(ue=>!ue))};ae.useLayoutEffect(()=>{if(!F)return;q();const ue=window.requestAnimationFrame(q);return()=>{window.cancelAnimationFrame(ue)}},[F,u,q]),ae.useEffect(()=>{if(!F)return;const ue=()=>{q()};return window.addEventListener("resize",ue),window.addEventListener("scroll",ue,!0),()=>{window.removeEventListener("resize",ue),window.removeEventListener("scroll",ue,!0)}},[F,q]),ae.useEffect(()=>{if(!F||d!=="click")return;const ue=Re=>{var se;(se=T.current)!=null&&se.contains(Re.target)||(H(!1),ne(!1))},Ee=Re=>{var se;Re.key==="Escape"&&(H(!1),ne(!1),(se=I.current)==null||se.focus())};return document.addEventListener("pointerdown",ue),document.addEventListener("keydown",Ee),()=>{document.removeEventListener("pointerdown",ue),document.removeEventListener("keydown",Ee)}},[F,d]),ae.useEffect(()=>()=>{Z()},[]);const ze=d==="click"?{onClick:X,onKeyDown:ue=>{ue.key!=="Enter"&&ue.key!==" "||(ue.preventDefault(),X())},role:"button",tabIndex:0,"aria-expanded":F,"aria-describedby":F?k:void 0}:{onMouseEnter:te,onMouseLeave:A,onFocus:te,onBlur:A,tabIndex:0,"aria-describedby":F?k:void 0};return m.jsxs(un.Wrapper,{ref:T,children:[m.jsx(un.Trigger,{ref:I,...ze,children:i}),F&&m.jsx(un.Tooltip,{ref:D,id:k,role:"tooltip","data-placement":O.placement,$x:O.x,$y:O.y,$positioned:Q,children:u})]})},Km=["button:not([disabled])","a[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(","),gd=({trigger:i,children:u,title:a="Popover",label:d="Details",placement:f="bottom",offset:w=10})=>{const E=ae.useId(),C=ae.useRef(null),k=ae.useRef(null),T=ae.useRef(null),[I,D]=ae.useState(!1),[$,re]=ae.useState(!1),[F,H]=ae.useState({x:0,y:0,placement:f}),Q=ae.useCallback(()=>{const Z=Xd({triggerElement:k.current,floatingElement:T.current,placement:f,offset:w});Z&&(H(Z),re(!0))},[f,w]),ne=()=>{re(!1),D(!0)},O=ae.useCallback((Z=!0)=>{D(!1),re(!1),Z&&window.requestAnimationFrame(()=>{var q;(q=k.current)==null||q.focus()})},[]),he=()=>{if(I){O(!1);return}ne()};return ae.useLayoutEffect(()=>{if(!I)return;Q();const Z=window.requestAnimationFrame(()=>{var te,A;Q();const q=(te=T.current)==null?void 0:te.querySelector(Km);if(q){q.focus();return}(A=T.current)==null||A.focus()});return()=>{window.cancelAnimationFrame(Z)}},[I,Q]),ae.useEffect(()=>{if(!I)return;const Z=A=>{var X,ze;(X=C.current)!=null&&X.contains(A.target)||(ze=T.current)!=null&&ze.contains(A.target)||O(!1)},q=A=>{A.key==="Escape"&&(A.preventDefault(),O(!0))},te=()=>{Q()};return document.addEventListener("pointerdown",Z),document.addEventListener("keydown",q),window.addEventListener("resize",te),window.addEventListener("scroll",te,!0),()=>{document.removeEventListener("pointerdown",Z),document.removeEventListener("keydown",q),window.removeEventListener("resize",te),window.removeEventListener("scroll",te,!0)}},[I,O,Q]),m.jsxs(un.Wrapper,{ref:C,children:[m.jsx(un.Trigger,{ref:k,role:"button",tabIndex:0,"aria-haspopup":"dialog","aria-expanded":I,"aria-controls":I?E:void 0,onClick:he,onKeyDown:Z=>{Z.key!=="Enter"&&Z.key!==" "||(Z.preventDefault(),he())},children:i}),I&&m.jsxs(un.Popover,{ref:T,id:E,role:"dialog","aria-modal":"false","aria-label":a,tabIndex:-1,"data-placement":F.placement,$x:F.x,$y:F.y,$positioned:$,children:[m.jsxs(un.PopoverHeader,{children:[m.jsxs("div",{children:[m.jsx("span",{className:"label",children:d}),m.jsx("strong",{className:"title",children:a})]}),m.jsx(un.CloseButton,{type:"button",onClick:()=>O(!0),"aria-label":"Close popover",title:"Close",children:m.jsx(xd,{"aria-hidden":"true"})})]}),m.jsx("div",{className:"content",children:u})]})]})},Ym={Wrapper:jt.main`
        width: 100%;

        .container {
            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
        }

        .hero {
            min-height: 780px;

            display: flex;
            align-items: center;

            padding: 120px 0 90px;

            border-bottom: 1px solid var(--border);

            background:
                radial-gradient(
                    circle at 14% 20%,
                    var(--accent-soft),
                    transparent 28rem
                ),
                var(--background);
        }

        .heroGrid {
            display: grid;
            grid-template-columns:
                minmax(0, 1.05fr)
                minmax(380px, 0.95fr);

            gap: 70px;
            align-items: center;
        }

        .label {
            margin: 0;

            color: var(--accent);

            font-size: 0.62rem;
            font-weight: 800;
            letter-spacing: 0.13em;
            text-transform: uppercase;
        }

        .hero h1 {
            max-width: 780px;

            margin: 12px 0 0;

            color: var(--heading);

            font-size: clamp(4rem, 8vw, 7.8rem);
            font-weight: 800;
            letter-spacing: -0.075em;
            line-height: 0.88;
        }

        .hero h1 span {
            display: block;

            color: var(--muted);
        }

        .heroText {
            max-width: 650px;

            margin: 28px 0 0;

            color: var(--text);

            font-size: 0.78rem;
            line-height: 1.9;
        }

        .heroActions {
            display: flex;
            flex-wrap: wrap;
            gap: 9px;

            margin-top: 30px;
        }

        .primaryLink,
        .secondaryLink {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            min-height: 44px;

            padding: 9px 13px;

            border-radius: 8px;

            font-size: 0.63rem;
            font-weight: 800;

            text-decoration: none;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .primaryLink {
            color: #ffffff;
            background: var(--accent);

            border: 1px solid var(--accent);
        }

        .secondaryLink {
            color: var(--heading);
            background: transparent;

            border: 1px solid var(--border-strong);
        }

        .primaryLink:hover,
        .secondaryLink:hover {
            border-color: var(--heading);

            box-shadow: var(--shadow-sm);
        }

        .primaryLink:focus-visible,
        .secondaryLink:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 3px;
        }

        .heroDemo {
            overflow: visible;

            background: var(--card);

            border: 1px solid var(--border);
            border-radius: 18px;

            box-shadow: var(--shadow-lg);
        }

        .heroDemoHeader,
        .heroDemoFooter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            padding: 14px 16px;

            color: var(--muted);

            font-size: 0.56rem;
            font-weight: 700;

            letter-spacing: 0.06em;
            text-transform: uppercase;
        }

        .heroDemoHeader {
            border-bottom: 1px solid var(--border);
        }

        .heroDemoFooter {
            justify-content: flex-start;
            flex-wrap: wrap;

            border-top: 1px solid var(--border);
        }

        .heroDemoFooter span {
            padding: 5px 7px;

            border: 1px solid var(--border);
            border-radius: 6px;
        }

        .status {
            color: var(--success);

            border: 1px solid rgba(123, 207, 155, 0.35);

            border-radius: 6px;

            padding: 4px 7px;
        }

        .heroDemoStage {
            display: grid;
            place-items: center;

            min-height: 390px;

            padding: 50px 25px;

            background:
                linear-gradient(var(--grid-line) 1px, transparent 1px),
                linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);

            background-size: 28px 28px;
        }

        .largeTrigger,
        .placementTrigger,
        .demoTrigger,
        .edgeTrigger {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            color: var(--heading);
            background: var(--card-soft);

            border: 1px solid var(--border-strong);
            border-radius: 8px;

            font-weight: 700;

            cursor: default;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease,
                text-shadow 180ms ease;
        }

        .largeTrigger {
            min-height: 52px;

            padding: 12px 18px;

            font-size: 0.72rem;
        }

        .largeTrigger:hover,
        .placementTrigger:hover,
        .demoTrigger:hover,
        .edgeTrigger:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);

            text-shadow: 0 0 10px var(--accent-soft);
        }

        .section {
            padding: 100px 0;

            border-bottom: 1px solid var(--border);
        }

        .sectionSoft {
            background: var(--background-soft);
        }

        .sectionHeader {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 420px;
            gap: 60px;
            align-items: end;

            margin-bottom: 34px;
        }

        .sectionHeader h2 {
            max-width: 760px;

            margin: 9px 0 0;

            color: var(--heading);

            font-size: clamp(2.5rem, 5vw, 4.8rem);
            font-weight: 800;
            letter-spacing: -0.06em;
            line-height: 0.96;
        }

        .sectionHeader > p {
            margin: 0;

            color: var(--text);

            font-size: 0.7rem;
            line-height: 1.8;
        }

        .placementGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;

            padding: 42px;

            background: var(--card);

            border: 1px solid var(--border);
            border-radius: 16px;
        }

        .placementGrid > span {
            width: 100%;
        }

        .placementTrigger {
            width: 100%;
            min-height: 56px;

            padding: 10px;

            font-size: 0.61rem;
        }

        .interactionGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
        }

        .demoCard,
        .featureCard,
        .popoverDemo {
            padding: 24px;

            background: var(--card);

            border: 1px solid var(--border);
            border-radius: 14px;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .demoCard:hover,
        .featureCard:hover,
        .popoverDemo:hover {
            border-color: var(--border-strong);

            box-shadow: var(--shadow-sm);
        }

        .demoIcon {
            display: grid;
            place-items: center;

            width: 40px;
            height: 40px;

            color: var(--accent);

            border: 1px solid var(--accent-border);
            border-radius: 9px;
        }

        .demoCard h3,
        .featureCard h3,
        .popoverDemo h3 {
            margin: 19px 0 0;

            color: var(--heading);

            font-size: 0.84rem;
        }

        .demoCard p,
        .featureCard p,
        .popoverDemo p {
            margin: 9px 0 0;

            color: var(--text);

            font-size: 0.67rem;
            line-height: 1.75;
        }

        .demoArea {
            display: flex;
            align-items: center;

            min-height: 110px;

            margin-top: 22px;
            padding: 18px;

            background: var(--background);

            border: 1px solid var(--border);
            border-radius: 10px;
        }

        .demoTrigger {
            min-height: 40px;

            padding: 8px 11px;

            font-size: 0.6rem;

            cursor: pointer;
        }

        .edgeDemo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            min-height: 110px;

            margin-top: 22px;
            padding: 18px 4px;

            background: var(--background);

            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
        }

        .edgeTrigger {
            min-height: 39px;

            padding: 8px 11px;

            font-size: 0.58rem;
        }

        .popoverGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        .popoverDemo {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 30px;

            min-height: 240px;
        }

        .popoverDemo > div:first-child {
            max-width: 430px;
        }

        .popoverActions {
            display: grid;
            gap: 7px;
        }

        .popoverActions button {
            width: 100%;

            min-height: 38px;

            padding: 8px 10px;

            color: var(--heading);
            background: var(--background);

            border: 1px solid var(--border);
            border-radius: 7px;

            font: inherit;
            font-size: 0.61rem;
            font-weight: 700;

            cursor: pointer;

            transition:
                border-color 180ms ease,
                box-shadow 180ms ease;
        }

        .popoverActions button:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        .popoverActions button:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 2px;
        }

        .actionStatus {
            display: flex;
            align-items: center;
            gap: 9px;

            margin-top: 14px;
            padding: 14px;

            color: var(--text);
            background: var(--card);

            border: 1px solid var(--border);
            border-radius: 10px;

            font-size: 0.62rem;
        }

        .actionStatus svg {
            color: var(--success);
        }

        .featureGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
        }

        @media (max-width: 1050px) {
            .heroGrid {
                grid-template-columns: 1fr;
            }

            .heroDemo {
                max-width: 720px;
            }

            .interactionGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .featureGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .placementGrid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (max-width: 800px) {
            .container {
                width: calc(100% - 28px);
            }

            .hero {
                min-height: auto;

                padding: 100px 0 70px;
            }

            .section {
                padding: 75px 0;
            }

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .sectionHeader > p {
                max-width: 650px;
            }

            .popoverGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 600px) {
            .hero h1 {
                font-size: clamp(3.4rem, 16vw, 5.5rem);
            }

            .heroDemoStage {
                min-height: 300px;
            }

            .placementGrid {
                grid-template-columns: repeat(2, 1fr);

                padding: 18px;
            }

            .interactionGrid,
            .featureGrid {
                grid-template-columns: 1fr;
            }

            .popoverDemo {
                align-items: flex-start;
                flex-direction: column;
            }

            .heroActions {
                display: grid;
            }

            .primaryLink,
            .secondaryLink {
                width: 100%;
            }
        }

        @media (max-width: 375px) {
            .placementGrid {
                grid-template-columns: 1fr;
            }
        }
    `},Xm=["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"],bm=[{title:"Real flip",text:"The requested side is measured first. When it overflows, the opposite side is tested before the final position is selected.",icon:m.jsx(wd,{"aria-hidden":"true"})},{title:"Viewport shift",text:"Floating surfaces are shifted inside the visible viewport after placement and flip calculations are complete.",icon:m.jsx(hh,{"aria-hidden":"true"})},{title:"Keyboard support",text:"Triggers support keyboard interaction, Escape closes active surfaces, and popover focus is restored when appropriate.",icon:m.jsx(xh,{"aria-hidden":"true"})},{title:"Responsive positioning",text:"Open surfaces are recalculated during scrolling and viewport resizing so they remain aligned with their trigger.",icon:m.jsx(Eh,{"aria-hidden":"true"})}],Zm=()=>{const[i,u]=ae.useState("Choose an action inside the popover."),a=d=>{u(`${d} action selected.`)};return m.jsxs(Ym.Wrapper,{id:"top",children:[m.jsx("section",{className:"hero",children:m.jsxs("div",{className:"container heroGrid",children:[m.jsxs("div",{className:"heroContent",children:[m.jsx("p",{className:"label",children:"React Floating UI Demo"}),m.jsxs("h1",{children:["Small surfaces.",m.jsx("span",{children:"Better positioning."})]}),m.jsx("p",{className:"heroText",children:"Tooltip Pro is a focused React demo for accessible tooltips and popovers with real viewport-aware flip and shift positioning."}),m.jsxs("div",{className:"heroActions",children:[m.jsxs("a",{className:"primaryLink",href:"#tooltips",children:[m.jsx(Zc,{"aria-hidden":"true"}),"Explore Tooltips"]}),m.jsx("a",{className:"secondaryLink",href:"#behavior",children:"View Behavior"})]})]}),m.jsxs("div",{className:"heroDemo",children:[m.jsxs("div",{className:"heroDemoHeader",children:[m.jsx("span",{children:"Live Preview"}),m.jsx("span",{className:"status",children:"Active"})]}),m.jsx("div",{className:"heroDemoStage",children:m.jsx(Jn,{content:"This tooltip automatically flips when the requested side does not have enough space.",placement:"top",children:m.jsx("span",{className:"largeTrigger",children:"Hover or focus"})})}),m.jsxs("div",{className:"heroDemoFooter",children:[m.jsx("span",{children:"Hover"}),m.jsx("span",{children:"Focus"}),m.jsx("span",{children:"Flip"}),m.jsx("span",{children:"Shift"})]})]})]})}),m.jsx("section",{className:"section",id:"tooltips",children:m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"sectionHeader",children:[m.jsxs("div",{children:[m.jsx("p",{className:"label",children:"Tooltip Placements"}),m.jsx("h2",{children:"Twelve placement options, one positioning engine."})]}),m.jsx("p",{children:"Hover or keyboard-focus each trigger. The requested placement remains preferred, but Tooltip Pro can flip when the viewport does not have enough room."})]}),m.jsx("div",{className:"placementGrid",children:Xm.map(d=>m.jsx(Jn,{content:`Placement: ${d}`,placement:d,children:m.jsx("span",{className:"placementTrigger",children:d})},d))})]})}),m.jsx("section",{className:"section sectionSoft",children:m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"sectionHeader",children:[m.jsxs("div",{children:[m.jsx("p",{className:"label",children:"Interaction Modes"}),m.jsx("h2",{children:"Hover, focus, or click."})]}),m.jsx("p",{children:"Tooltip triggers can follow normal hover and focus behavior or remain open through explicit click interaction."})]}),m.jsxs("div",{className:"interactionGrid",children:[m.jsxs("article",{className:"demoCard",children:[m.jsx("span",{className:"demoIcon",children:m.jsx(Zc,{"aria-hidden":"true"})}),m.jsx("h3",{children:"Hover + Focus"}),m.jsx("p",{children:"Best for short supporting information attached to labels, icons, and compact controls."}),m.jsx("div",{className:"demoArea",children:m.jsx(Jn,{content:"Opened by hover or keyboard focus.",placement:"top",children:m.jsx("span",{className:"demoTrigger",children:"Try tooltip"})})})]}),m.jsxs("article",{className:"demoCard",children:[m.jsx("span",{className:"demoIcon",children:m.jsx(bc,{"aria-hidden":"true"})}),m.jsx("h3",{children:"Click Trigger"}),m.jsx("p",{children:"Useful when tooltip content should remain available until the user clicks again, clicks outside, or presses Escape."}),m.jsx("div",{className:"demoArea",children:m.jsx(Jn,{content:"Click again, click outside, or press Escape to close.",placement:"bottom",trigger:"click",children:m.jsx("span",{className:"demoTrigger",children:"Click tooltip"})})})]}),m.jsxs("article",{className:"demoCard edgeCard",children:[m.jsx("span",{className:"demoIcon",children:m.jsx(wd,{"aria-hidden":"true"})}),m.jsx("h3",{children:"Edge Flip Test"}),m.jsx("p",{children:"These triggers intentionally sit close to opposite edges so you can observe viewport correction."}),m.jsxs("div",{className:"edgeDemo",children:[m.jsx(Jn,{content:"Requested on the left. Near the viewport edge it can flip to the right.",placement:"left",children:m.jsx("span",{className:"edgeTrigger",children:"Left"})}),m.jsx(Jn,{content:"Requested on the right. Near the viewport edge it can flip to the left.",placement:"right",children:m.jsx("span",{className:"edgeTrigger",children:"Right"})})]})]})]})]})}),m.jsx("section",{className:"section",id:"popovers",children:m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"sectionHeader",children:[m.jsxs("div",{children:[m.jsx("p",{className:"label",children:"Popovers"}),m.jsx("h2",{children:"Interactive floating content."})]}),m.jsx("p",{children:"Popovers support richer content, focus movement, outside-click closing, Escape, and responsive repositioning."})]}),m.jsxs("div",{className:"popoverGrid",children:[m.jsxs("article",{className:"popoverDemo",children:[m.jsxs("div",{children:[m.jsx("span",{className:"demoIcon",children:m.jsx(mh,{"aria-hidden":"true"})}),m.jsx("h3",{children:"Information Popover"}),m.jsx("p",{children:"A compact dialog for contextual details without navigating away from the current interface."})]}),m.jsx(gd,{label:"Information",title:"Tooltip Pro",placement:"bottom-start",trigger:m.jsx("span",{className:"demoTrigger",children:"Open information"}),children:m.jsx("p",{children:"Tooltip Pro calculates the requested position, compares viewport overflow, then applies flip and shift behavior."})})]}),m.jsxs("article",{className:"popoverDemo",children:[m.jsxs("div",{children:[m.jsx("span",{className:"demoIcon",children:m.jsx(bc,{"aria-hidden":"true"})}),m.jsx("h3",{children:"Action Popover"}),m.jsx("p",{children:"Interactive controls can live inside the floating surface while outside clicks remain available for closing."})]}),m.jsx(gd,{label:"Quick Actions",title:"Choose an action",placement:"bottom-end",trigger:m.jsx("span",{className:"demoTrigger",children:"Open actions"}),children:m.jsxs("div",{className:"popoverActions",children:[m.jsx("button",{type:"button",onClick:()=>a("Create"),children:"Create"}),m.jsx("button",{type:"button",onClick:()=>a("Duplicate"),children:"Duplicate"}),m.jsx("button",{type:"button",onClick:()=>a("Archive"),children:"Archive"})]})})]})]}),m.jsxs("div",{className:"actionStatus",role:"status","aria-live":"polite",children:[m.jsx(Sh,{"aria-hidden":"true"}),i]})]})}),m.jsx("section",{className:"section sectionSoft",id:"behavior",children:m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"sectionHeader",children:[m.jsxs("div",{children:[m.jsx("p",{className:"label",children:"Behavior"}),m.jsx("h2",{children:"Built around predictable floating UI."})]}),m.jsx("p",{children:"The component stays intentionally small, with positioning and interaction behavior implemented directly in React and browser APIs."})]}),m.jsx("div",{className:"featureGrid",children:bm.map(d=>m.jsxs("article",{className:"featureCard",children:[m.jsx("span",{className:"demoIcon",children:d.icon}),m.jsx("h3",{children:d.title}),m.jsx("p",{children:d.text})]},d.title))})]})})]})},qm=()=>m.jsxs(m.Fragment,{children:[m.jsx(Vm,{}),m.jsx(Zm,{}),m.jsx(Wm,{}),m.jsx(Am,{})]});nh.createRoot(document.getElementById("root")).render(m.jsx(m.Fragment,{children:m.jsx(qm,{})}));
