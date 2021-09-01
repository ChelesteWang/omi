import{W as e,h as t,t as o,s as n,b as r}from"./vendor.645fedc0.js";import"./admin-docs.b95c79b8.js";import"./index.86b09e9b.js";import"./container.a7d4e530.js";import"./___vite-browser-external_commonjs-proxy.ce402805.js";var i={store:null,root:"object"==typeof global&&global&&global.Math===Math&&global.Array===Array?global:self||window||global||function(){return this}(),mapping:{},isMultiStore:!1,ignoreAttrs:!1};
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */function s(e){var t=document.createElement("style");return t.textContent=e,t}function a(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))}function c(e){return e.children}function l(e,t){for(var o in t)e[o]=t[o];return e}function p(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}function u(e){return"[object Array]"===Object.prototype.toString.call(e)}function f(e,t,o,n){var r=[];return t.forEach((function(t,o){if("string"==typeof t)r[o]=h(e,t);else{var n=Object.keys(t)[0],i=t[n];if("string"==typeof i)r[o]=h(e,i);else{var s=i[0];if("string"==typeof s){var a=h(e,s);r[o]=i[1]?i[1](a):a}else{var c=[];s.forEach((function(t){c.push(h(e,t))})),r[o]=i[1].apply(null,c)}}r[n]=r[o]}})),o&&(o[n]=r),r}function d(e){return"string"==typeof e&&e?e.replace(/]/g,"").replace(/\[/g,".").split("."):[]}function h(e,t){for(var o=d(t),n=e,r=0,i=o.length;r<i;r++)n=n[o[r]];return n}!function(){if(void 0!==window.Reflect&&void 0!==window.customElements&&!window.customElements.hasOwnProperty("polyfillWrapFlushCallback")){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var y=/\B([A-Z])/g;function g(e,t,o){var n={};return e.forEach((function(e){if("string"==typeof e)n[e]=!0;else{var t=e[Object.keys(e)[0]];"string"==typeof t?n[t]=!0:"string"==typeof t[0]?n[t[0]]=!0:t[0].forEach((function(e){return n[e]=!0}))}})),t&&(t[o]=n),n}function m(e,t){if(t)for(var o=0,n=t.length;o<n;o++)if(t[o]===e){t.splice(o,1);break}}var v=[];function b(e,t){var o,n,r,s,a=[];for(s=arguments.length;s-- >2;)v.push(arguments[s]);for(t&&null!=t.children&&(v.length||v.push(t.children),delete t.children);v.length;)if((n=v.pop())&&void 0!==n.pop)for(s=n.length;s--;)v.push(n[s]);else"boolean"==typeof n&&(n=null),(r="function"!=typeof e)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(r=!1)),r&&o?a[a.length-1]+=n:0===a.length?a=[n]:a.push(n),o=r;if(e===c)return a;var l={nodeName:e,children:a,attributes:null==t?void 0:t,key:null==t?void 0:t.key};return void 0!==i.vnode&&i.vnode(l),l}var S=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function w(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}var P={};function x(e){return this._listeners[e.type](e)}function O(e){var t=e.parentNode;t&&t.removeChild(e)}function E(e,t,o,n,r,i){if("className"===t&&(t="class"),"o"==t[0]&&"-"==t[1])P[t]&&P[t](e,n,i);else if("key"===t);else if("ref"===t)p(o,null),p(n,e);else if("class"!==t||r)if("style"===t){if(n&&"string"!=typeof n&&"string"!=typeof o||(e.style.cssText=n||""),n&&"object"==typeof n){if("string"!=typeof o)for(var s in o)s in n||(e.style[s]="");for(var s in n)e.style[s]="number"==typeof n[s]&&!1===S.test(s)?n[s]+"px":n[s]}}else if("dangerouslySetInnerHTML"===t)n&&(e.innerHTML=n.__html||"");else if("_"==t[0]&&"o"==t[1]&&"n"==t[2]&&"WeElement"===e.constructor.is)N(e,t.replace("_",""),n,o);else if("o"==t[0]&&"n"==t[1])N(e,t,n,o);else if("INPUT"===e.nodeName&&"value"===t)e[t]=null==n?"":n;else if("list"!==t&&"type"!==t&&"css"!==t&&!r&&t in e&&""!==n){try{e[t]=null==n?"":n}catch(c){}null!=n&&!1!==n||"spellcheck"==t||(e.pureRemoveAttribute?e.pureRemoveAttribute(t):e.removeAttribute(t))}else{var a=r&&t!==(t=t.replace(/^xlink:?/,""));null==n||!1===n?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.pureRemoveAttribute?e.pureRemoveAttribute(t):e.removeAttribute(t):"function"!=typeof n&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):e.pureSetAttribute?e.pureSetAttribute(t,n):e.setAttribute(t,n))}else e.className=n||""}function C(e){return this._listeners[e.type](i.event&&i.event(e)||e)}function N(e,t,o,n){var r=t!==(t=t.replace(/Capture$/,"")),i=t.toLowerCase();t=(i in e?i:t).slice(2),o?n||e.addEventListener(t,C,r):e.removeEventListener(t,C,r),(e._listeners||(e._listeners={}))[t]=o}var j=0,_=!1,k=!1;function T(e,t,o,n,r){var i;if(e||t)return j++||(_=null!=o&&void 0!==o.ownerSVGElement,k=null!=e&&!("prevProps"in e)),t&&t.nodeName===c&&(t=t.children),u(t)?o?R(o,t,k,n,r):(i=[],t.forEach((function(t,o){var s=M(0===o?e:null,t,n,r);i.push(s)}))):(u(e)?e.forEach((function(e,o){0===o?i=M(e,t,n,r):A(e,!1)})):i=M(e,t,n,r),o&&i.parentNode!==o&&o.appendChild(i)),--j||(k=!1),i}function M(e,t,o,n){e&&t&&e.props&&(e.props.children=t.children);var r=e,s=_;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(r=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(r,e),A(e,!0))),r.prevProps=!0,r;var c,l,p=t.nodeName;if("function"==typeof p)for(var u in i.mapping)if(i.mapping[u]===p){p=u,t.nodeName=u;break}if(_="svg"===p||"foreignObject"!==p&&_,p=String(p),(!e||!w(e,p))&&(c=p,(l=_?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c)).normalizedNodeName=c,r=l,e)){for(;e.firstChild;)r.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(r,e),A(e,!0)}var f=r.firstChild,d=r.prevProps,h=t.children;if(null==d){d=r.prevProps={};for(var y=r.attributes,g=y.length;g--;)d[y[g].name]=y[g].value}return!k&&h&&1===h.length&&"string"==typeof h[0]&&null!=f&&void 0!==f.splitText&&null==f.nextSibling?f.nodeValue!=h[0]&&(f.nodeValue=h[0]):(h&&h.length||null!=f)&&("WeElement"==r.constructor.is&&r.constructor.noSlot||R(r,h,k||null!=d.dangerouslySetInnerHTML,o,n)),function(e,t,o,n,r){var i,s,c=e.update;e.receiveProps&&(s=Object.assign({},o));for(i in o)t&&null!=t[i]||null==o[i]||(E(e,i,o[i],o[i]=void 0,_,n),c&&delete e.props[i]);for(i in t)if(c&&"object"==typeof t[i]&&"ref"!==i){"style"===i&&E(e,i,o[i],o[i]=t[i],_,n);var l=a(i);e.props[l]=o[l]=t[i]}else if("children"!==i&&(!(i in o)||t[i]!==("value"===i||"checked"===i?e[i]:o[i])))if(E(e,i,o[i],t[i],_,n),-1!==e.nodeName.indexOf("-")){e.props=e.props||{};var p=a(i);e.props[p]=o[p]=t[i]}else o[i]=t[i];c&&!r&&e.parentNode&&!1!==e.receiveProps(e.props,s)&&e.update()}(r,t.attributes,d,o,n),r.props&&(r.props.children=t.children),_=s,r}function R(e,t,o,n,r){var s,a,c,l,p,u,f,d,h=e.childNodes,y=[],g={},m=0,v=0,b=h.length,S=0,P=t?t.length:0;if(0!==b)for(var x=0;x<b;x++){var E=h[x],C=E.prevProps;null!=(N=P&&C?E._component?E._component.__key:C.key:null)?(m++,g[N]=E):(C||(void 0!==E.splitText?!o||E.nodeValue.trim():o))&&(y[S++]=E)}if(0!==P)for(x=0;x<P;x++){var N;if(p=null,null!=(N=(l=t[x]).key))m&&void 0!==g[N]&&(p=g[N],g[N]=void 0,m--);else if(!p&&v<S)for(s=v;s<S;s++)if(void 0!==y[s]&&(u=a=y[s],d=o,"string"==typeof(f=l)||"number"==typeof f?void 0!==u.splitText:"string"==typeof f.nodeName?!u._componentConstructor&&w(u,f.nodeName):"function"==typeof f.nodeName?i.mapping[u.nodeName.toLowerCase()]===f.nodeName:d||u._componentConstructor===f.nodeName)){p=a,y[s]=void 0,s===S-1&&S--,s===v&&v++;break}p=M(p,l,n,r),c=h[x],p&&p!==e&&p!==c&&(null==c?e.appendChild(p):p===c.nextSibling?O(c):e.insertBefore(p,c))}if(m)for(var x in g)void 0!==g[x]&&A(g[x],!1);for(;v<=S;)void 0!==(p=y[S--])&&A(p,!1)}function A(e,t){null!=e.prevProps&&e.prevProps.ref&&("function"==typeof e.prevProps.ref?e.prevProps.ref(null):e.prevProps.ref.current&&(e.prevProps.ref.current=null)),!1!==t&&null!=e.prevProps||O(e),function(e){e=e.lastChild;for(;e;){var t=e.previousSibling;A(e,!0),e=t}}(e)}var z=0,I=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return o.props=Object.assign({},o.constructor.defaultProps,o.props),o.elementId=z++,o.computed={},o.isInstalled=!1,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.connectedCallback=function(){for(var e,t,o=this.parentNode;o&&!this.store;)this.store=o.store,o=o.parentNode||o.host;if(this.attrsToProps(),this.props.use&&(this.use=this.props.use),this.props.useSelf&&(this.use=this.props.useSelf),this.use){var n="function"==typeof this.use?this.use():this.use;if(i.isMultiStore){var r={},a={};for(var c in n)r[c]={},a[c]={},g(n[c],r,c),f(this.store[c].data,n[c],a,c),this.store[c].instances.push(this);this.using=a,this._updatePath=r}else this._updatePath=g(n),this.using=f(this.store.data,n),this.store.instances.push(this)}if(this.useSelf){var l="function"==typeof this.useSelf?this.useSelf():this.useSelf;if(i.isMultiStore){var p={},d={};for(var h in l)g(l[h],p,h),f(this.store[h].data,l[h],d,h),this.store[h].updateSelfInstances.push(this);this.usingSelf=d,this._updateSelfPath=p}else this._updateSelfPath=g(l),this.usingSelf=f(this.store.data,l),this.store.updateSelfInstances.push(this)}if(this.compute)for(var y in this.compute)this.computed[y]=this.compute[y].call(i.isMultiStore?this.store:this.store.data);if(this.beforeInstall(),this.install(),this.afterInstall(),this.constructor.isLightDom)e=this;else if(this.shadowRoot)for(e=this.shadowRoot;t=e.firstChild;)e.removeChild(t);else e=this.attachShadow({mode:"open"});var m=this.constructor.css;if(m)if("string"==typeof m){var v=new CSSStyleSheet;v.replaceSync(m),e.adoptedStyleSheets=[v]}else if("[object Array]"===Object.prototype.toString.call(m)){var b=[];m.forEach((function(t){if("string"==typeof t){var o=new CSSStyleSheet;o.replaceSync(t),b.push(o)}else b.push(t);e.adoptedStyleSheets=b}))}else e.adoptedStyleSheets=[m];this.beforeRender(),i.afterInstall&&i.afterInstall(this);var S=this.render(this.props,this.store);this.rootNode=T(null,S,null,this),this.rendered(),this.css&&e.appendChild(s("function"==typeof this.css?this.css():this.css)),this.props.css&&(this._customStyleElement=s(this.props.css),this._customStyleContent=this.props.css,e.appendChild(this._customStyleElement)),u(this.rootNode)?this.rootNode.forEach((function(t){e.appendChild(t)})):this.rootNode&&e.appendChild(this.rootNode),this.installed(),this.isInstalled=!0},t.prototype.disconnectedCallback=function(){if(this.uninstall(),this.isInstalled=!1,this.store)if(i.isMultiStore)for(var e in this.store){var t=this.store[e];m(this,t.instances),m(this,t.updateSelfInstances)}else m(this,this.store.instances),m(this,this.store.updateSelfInstances)},t.prototype.update=function(e,t){this._willUpdate=!0,this.beforeUpdate(),this.beforeRender(),this._customStyleContent!=this.props.css&&(this._customStyleContent=this.props.css,this._customStyleElement.textContent=this._customStyleContent),this.attrsToProps(e);var o=this.render(this.props,this.store);this.rendered(),this.rootNode=T(this.rootNode,o,this.constructor.isLightDom?this:this.shadowRoot,this,t),this._willUpdate=!1,this.updated()},t.prototype.forceUpdate=function(){this.update(!0)},t.prototype.updateProps=function(e){var t=this;Object.keys(e).forEach((function(o){t.props[o]=e[o],t.prevProps&&(t.prevProps[o]=e[o])})),this.forceUpdate()},t.prototype.updateSelf=function(e){this.update(e,!0)},t.prototype.removeAttribute=function(t){e.prototype.removeAttribute.call(this,t),this.isInstalled&&this.update()},t.prototype.setAttribute=function(t,o){o&&"object"==typeof o?e.prototype.setAttribute.call(this,t,JSON.stringify(o)):e.prototype.setAttribute.call(this,t,o),this.isInstalled&&this.update()},t.prototype.pureRemoveAttribute=function(t){e.prototype.removeAttribute.call(this,t)},t.prototype.pureSetAttribute=function(t,o){e.prototype.setAttribute.call(this,t,o)},t.prototype.attrsToProps=function(e){if(!(i.ignoreAttrs||e||this.store&&this.store.ignoreAttrs)){var t=this;t.props.css=t.getAttribute("css");var o=this.constructor.propTypes;o&&Object.keys(o).forEach((function(e){var n,r,i=o[e],s=t.getAttribute(e.replace(y,"-$1").toLowerCase());if(null!==s)switch(i){case String:t.props[e]=s;break;case Number:t.props[e]=Number(s);break;case Boolean:t.props[e]="false"!==s&&"0"!==s;break;case Array:case Object:":"===s[0]?t.props[e]=(n=s.substr(1),r=Omi.$,d(n).forEach((function(e){r=r[e]})),r):t.props[e]=JSON.parse(s.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g,'"$2":$4').replace(/'([\s\S]*?)'/g,'"$1"').replace(/,(\s*})/g,"$1"))}else t.constructor.defaultProps&&t.constructor.defaultProps.hasOwnProperty(e)?t.props[e]=t.constructor.defaultProps[e]:t.props[e]=null}))}},t.prototype.fire=function(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t}))},t.prototype.beforeInstall=function(){},t.prototype.install=function(){},t.prototype.afterInstall=function(){},t.prototype.installed=function(){},t.prototype.uninstall=function(){},t.prototype.beforeUpdate=function(){},t.prototype.updated=function(){},t.prototype.beforeRender=function(){},t.prototype.rendered=function(){},t.prototype.receiveProps=function(){},t}(HTMLElement);I.is="WeElement";
/*!
 * https://github.com/Palindrom/JSONPatcherProxy
 * (c) 2017 Starcounter
 * MIT license
 */
var L=function(){function e(e){return-1==e.indexOf("/")&&-1==e.indexOf("~")?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function t(e,t){for(var o=[],n=e.parenthoodMap.get(t);n&&n.path;)o.unshift(n.path),n=e.parenthoodMap.get(n.parent);return o.length?"/"+o.join("/"):""}function o(){var e=this;this.defaultCallback=function(t){e.isRecording&&e.patches.push(t),e.userCallback&&e.userCallback(t)},this.isObserving=!0}function n(){this.defaultCallback=function(){},this.isObserving=!1}function r(e,t){this.isProxifyingTreeNow=!1,this.isObserving=!1,this.proxifiedObjectsMap=new Map,this.parenthoodMap=new Map,"boolean"!=typeof t&&(t=!0),this.showDetachedWarning=t,this.originalObject=e,this.cachedProxy=null,this.isRecording=!1,this.userCallback,this.resume=o.bind(this),this.pause=n.bind(this)}return r.deepClone=function(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}},r.escapePathComponent=e,r.prototype.generateProxyAtPath=function(o,n,r){var i=this;if(!n)return n;var s={set:function(o,n,r,s){return function(o,n,r,i){var s=t(o,n)+"/"+e(r);if(o.proxifiedObjectsMap.has(i)){var a=o.proxifiedObjectsMap.get(i);o.parenthoodMap.set(a.originalObject,{parent:n,path:r})}var c=o.proxifiedObjectsMap.get(i);c&&!o.isProxifyingTreeNow&&(c.inherited=!0),i&&"object"==typeof i&&!o.proxifiedObjectsMap.has(i)&&(o.parenthoodMap.set(i,{parent:n,path:r}),i=o._proxifyObjectTreeRecursively(n,i,r));var l={op:"remove",path:s};if(void 0===i){if(!Array.isArray(n)&&!n.hasOwnProperty(r))return Reflect.set(n,r,i);Array.isArray(n)&&(l.op="replace",l.value=null);var p=o.proxifiedObjectsMap.get(n[r]);p&&(o.parenthoodMap.delete(n[r]),o.disableTrapsForProxy(p),o.proxifiedObjectsMap.delete(p))}else{if(Array.isArray(n)&&!Number.isInteger(+r.toString()))return"length"!=r&&console.warn("JSONPatcherProxy noticed a non-integer prop was set for an array. This will not emit a patch"),Reflect.set(n,r,i);l.op="add",n.hasOwnProperty(r)&&(void 0!==n[r]||Array.isArray(n))&&(l.op="replace"),l.value=i}l.oldValue=n[r];var u=Reflect.set(n,r,i);return o.defaultCallback(l),u}(i,o,n,r)},deleteProperty:function(o,n){return function(o,n,r){if(void 0!==n[r]){var i=t(o,n)+"/"+e(r),s=o.proxifiedObjectsMap.get(n[r]);s&&(s.inherited?s.inherited=!1:(o.parenthoodMap.delete(s.originalObject),o.disableTrapsForProxy(s),o.proxifiedObjectsMap.delete(n[r])));var a=Reflect.deleteProperty(n,r);return o.defaultCallback({op:"remove",path:i}),a}}(i,o,n)}},a=Proxy.revocable(n,s);return a.trapsInstance=s,a.originalObject=n,this.parenthoodMap.set(n,{parent:o,path:r}),this.proxifiedObjectsMap.set(a.proxy,a),a.proxy},r.prototype._proxifyObjectTreeRecursively=function(t,o,n){for(var r in o)o.hasOwnProperty(r)&&o[r]instanceof Object&&(o[r]=this._proxifyObjectTreeRecursively(o,o[r],e(r)));return this.generateProxyAtPath(t,o,n)},r.prototype.proxifyObjectTree=function(e){this.pause(),this.isProxifyingTreeNow=!0;var t=this._proxifyObjectTreeRecursively(void 0,e,"");return this.isProxifyingTreeNow=!1,this.resume(),t},r.prototype.disableTrapsForProxy=function(e){if(this.showDetachedWarning){var t="You're accessing an object that is detached from the observedObject tree, see https://github.com/Palindrom/JSONPatcherProxy#detached-objects";e.trapsInstance.set=function(e,o,n){return console.warn(t),Reflect.set(e,o,n)},e.trapsInstance.set=function(e,o,n){return console.warn(t),Reflect.set(e,o,n)},e.trapsInstance.deleteProperty=function(e,t){return Reflect.deleteProperty(e,t)}}else delete e.trapsInstance.set,delete e.trapsInstance.get,delete e.trapsInstance.deleteProperty},r.prototype.observe=function(e,t){if(!e&&!t)throw new Error("You need to either record changes or pass a callback");return this.isRecording=e,this.userCallback=t,e&&(this.patches=[]),this.cachedProxy=this.proxifyObjectTree(this.originalObject),this.cachedProxy},r.prototype.generate=function(){if(!this.isRecording)throw new Error("You should set record to true to get patches later");return this.patches.splice(0,this.patches.length)},r.prototype.revoke=function(){this.proxifiedObjectsMap.forEach((function(e){e.revoke()}))},r.prototype.disableTraps=function(){this.proxifiedObjectsMap.forEach(this.disableTrapsForProxy,this)},r}();function W(e,t){t.update(e)}function D(e,t){if(e.compute)for(var o in e.compute)e.computed[o]=e.compute[o].call(t?e.store:e.store.data)}function F(e,t){for(var o in e){if(t[o])return!0;for(var n in t)if(H(o,n))return!0}return!1}function H(e,t){if(0===e.indexOf(t)){var o=e.substr(t.length,1);if("["===o||"."===o)return!0}return!1}function $(e){var t="",o=e.replace("/","").split("/"),n=o.length;return o.forEach((function(e,o){o<n-1&&(o?isNaN(Number(e))?t+="."+e:t+="["+e+"]":t+=e)})),t}function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var B=["use","useSelf"];function V(e,t,o){if(!customElements.get(e)&&!i.mapping[e])if("WeElement"===t.is)customElements.define(e,t),i.mapping[e]=t;else{o="string"==typeof o?{css:o}:o||{};var n=function(e){function n(){var t,r;J(this,n);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return t=r=U(this,e.call.apply(e,[this].concat(s))),r.compute=o.compute,U(r,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e),n.prototype.render=function(){return t.call(this,this)},n}(I);n.css=o.css,n.propTypes=o.propTypes,n.defaultProps=o.defaultProps,n.isLightDom=o.isLightDom;var r=function(e){"function"==typeof o[e]&&(n.prototype[e]=function(){return o[e].apply(this,arguments)})};for(var s in o)r(s);B.forEach((function(e){o[e]&&"function"!==o[e]&&(n.prototype[e]=function(){return o[e]})})),customElements.define(e,n),i.mapping[e]=n}}function Y(e){return function(t){V(e,t)}}var q={}.hasOwnProperty;function G(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var r=G.apply(null,o);r&&e.push(r)}else if("object"===n)for(var i in o)q.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}!function(){if(!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument("boot"),o=new WeakMap,n="object"==typeof DOMException?Error:DOMException,r=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm,a=CSSStyleSheet.prototype;a.replace=function(){return Promise.reject(new n("Can't call replace on non-constructed CSSStyleSheets."))},a.replaceSync=function(){throw new n("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};var c=new WeakMap,l=new WeakMap,p=new WeakMap,u=N.prototype;u.replace=function(e){try{return this.replaceSync(e),Promise.resolve(this)}catch(t){return Promise.reject(t)}},u.replaceSync=function(e){if(C(this),"string"==typeof e){var t=this,o=c.get(t).ownerNode;o.textContent=function(e){var t=e.replace(s,"");return t!==e&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.trim()}(e),c.set(t,o.sheet),l.get(t).forEach((function(e){e.isConnected()&&E(t,O(t,e))}))}},r(u,"cssRules",{configurable:!0,enumerable:!0,get:function(){return C(this),c.get(this).cssRules}}),["addImport","addPageRule","addRule","deleteRule","insertRule","removeImport","removeRule"].forEach((function(e){u[e]=function(){var t=this;C(t);var o=arguments,n=c.get(t),r=l.get(t),i=n[e].apply(n,o);return r.forEach((function(n){if(n.isConnected()){var r=O(t,n).sheet;r[e].apply(r,o)}})),i}})),r(N,Symbol.hasInstance,{configurable:!0,value:P});var f={childList:!0,subtree:!0},d=new WeakMap,h=new WeakMap,y=new WeakMap,g=new WeakMap,m=R.prototype;if(m.isConnected=function(){var e=h.get(this);return e instanceof Document?"loading"!==e.readyState:function(e){return"isConnected"in e?e.isConnected:document.contains(e)}(e.host)},m.connect=function(){var e=T(this);g.get(this).observe(e,f),y.get(this).length>0&&M(this),k(e,(function(e){j(e).connect()}))},m.disconnect=function(){g.get(this).disconnect()},m.update=function(e){var t=this,o=h.get(t)===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Iterator getter is not callable.");if(!e.every(P))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Failed to convert value to 'CSSStyleSheet'");if(e.some(x))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+o+": Can't adopt non-constructed stylesheets");t.sheets=e;var n,r,i=y.get(t),s=(n=e).filter((function(e,t){return n.indexOf(e)===t}));(r=s,i.filter((function(e){return-1===r.indexOf(e)}))).forEach((function(e){var o;(o=O(e,t)).parentNode.removeChild(o),function(e,t){p.get(e).delete(t),l.set(e,l.get(e).filter((function(e){return e!==t})))}(e,t)})),y.set(t,s),t.isConnected()&&s.length>0&&M(t)},window.CSSStyleSheet=N,_(Document),"ShadowRoot"in window){_(ShadowRoot);var v=Element.prototype,b=v.attachShadow;v.attachShadow=function(e){var t=b.call(this,e);return"closed"===e.mode&&o.set(this,t),t}}var S=j(document);S.isConnected()?S.connect():document.addEventListener("DOMContentLoaded",S.connect.bind(S))}function w(e){return e.shadowRoot||o.get(e)}function P(e){return"object"==typeof e&&(u.isPrototypeOf(e)||a.isPrototypeOf(e))}function x(e){return"object"==typeof e&&a.isPrototypeOf(e)}function O(e,t){return p.get(e).get(t)}function E(e,t){requestAnimationFrame((function(){var o,n;!function(e){for(var t=0;t<e.cssRules.length;t++)e.deleteRule(0)}(t.sheet),o=c.get(e),n=t.sheet,i.call(o.cssRules,(function(e,t){n.insertRule(e.cssText,t)}))}))}function C(e){if(!c.has(e))throw new TypeError("Illegal invocation")}function N(){var e=this,o=document.createElement("style");t.body.appendChild(o),c.set(e,o.sheet),l.set(e,[]),p.set(e,new WeakMap)}function j(e){var t=d.get(e);return t||(t=new R(e),d.set(e,t)),t}function _(e){r(e.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return j(this).sheets},set:function(e){j(this).update(e)}})}function k(e,t){for(var o=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT,(function(e){return w(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),n=void 0;n=o.nextNode();)t(w(n))}function T(e){var t=h.get(e);return t instanceof Document?t.body:t}function M(e){var t=document.createDocumentFragment(),o=y.get(e),n=g.get(e),r=T(e);n.disconnect(),o.forEach((function(o){t.appendChild(O(o,e)||function(e,t){var o=document.createElement("style");return p.get(e).set(t,o),l.get(e).push(t),o}(o,e))})),r.insertBefore(t,null),n.observe(r,f),o.forEach((function(t){E(t,O(t,e))}))}function R(t){var o=this;o.sheets=[],h.set(o,t),y.set(o,[]),g.set(o,new MutationObserver((function(t,n){document?t.forEach((function(t){e||i.call(t.addedNodes,(function(e){e instanceof Element&&k(e,(function(e){j(e).connect()}))})),i.call(t.removedNodes,(function(t){t instanceof Element&&(function(e,t){return t instanceof HTMLStyleElement&&y.get(e).some((function(t){return O(t,e)}))}(o,t)&&M(o),e||k(t,(function(e){j(e).disconnect()})))}))})):n.disconnect()})))}}(),b.f=c;var Z=I,K=V,Q=i.mapping,X={tag:Y,WeElement:I,Component:Z,render:function(e,t,o){return t="string"==typeof t?document.querySelector(t):t,o&&(o.data&&function(e,t){e.instances=[],e.updateSelfInstances=[],function(e,t){e.update=function(o){Object.keys(o).length>0&&(this.instances.forEach((function(n){D(n,t),t?n._updatePath&&n._updatePath[t]&&F(o,n._updatePath[t])&&(n.use&&f(e.data,("function"==typeof n.use?n.use():n.use)[t],n.using,t),n.update()):n._updatePath&&F(o,n._updatePath)&&(n.use&&(n.using=f(e.data,"function"==typeof n.use?n.use():n.use)),n.update())})),this.updateSelfInstances.forEach((function(n){D(n,t),t?n._updateSelfPath&&n._updateSelfPath[t]&&F(o,n._updateSelfPath[t])&&(n.useSelf&&f(e.data,("function"==typeof n.useSelf?n.useSelf():n.useSelf)[t],n.usingSelf,t),n.updateSelf()):n._updateSelfPath&&F(o,n._updateSelfPath)&&(n.usingSelf=f(e.data,"function"==typeof n.useSelf?n.useSelf():n.useSelf),n.updateSelf())})),this.onChange&&this.onChange(o))}}(e,t),e.data=new L(e.data).observe(!1,(function(t){var o,n,r={};if("remove"===t.op){var i=function(e,t){for(var o=e.replace("/","").split("/"),n=t.data[o[0]],r=1,i=o.length;r<i-1;r++)n=n[o[r]];return{k:$(e),v:n}}(t.path,e);r[i.k]=i.v,W(r,e)}else{r[(o=t.path,n="",o.replace("/","").split("/").forEach((function(e,t){t?isNaN(Number(e))?n+="."+e:n+="["+e+"]":n+=e})),n)]=t.value,W(r,e)}}))}(o),t.store=o),T(null,e,t,!1)},h:b,createElement:b,options:i,define:V,cloneElement:function(e,t){return b(e.nodeName,l(l({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)},getHost:function(e){for(var t=e.parentNode;t;){if(t.host)return t.host;if(t.shadowRoot&&t.shadowRoot.host)return t.shadowRoot.host;t=t.parentNode}},rpx:function(e){return e.replace(/([1-9]\d*|0)(\.\d*)*rpx/g,(function(e,t){return window.innerWidth*Number(t)/750+"px"}))},defineElement:K,classNames:G,extractClass:function(){var e=Array.prototype.slice.call(arguments,0),t=e[0],o=e.slice(1);if(t.class?(o.unshift(t.class),delete t.class):t.className&&(o.unshift(t.className),delete t.className),o.length>0)return{class:G.apply(null,o)}},createRef:function(){return{}},o:function(e){return JSON.stringify(e)},elements:Q,$:{},extend:function(e,t){P["o-"+e]=t},get:function(e,t){for(var o=d(t),n=e,r=0,i=o.length;r<i;r++)n=n[o[r]];return n},set:function(e,t,o){for(var n=d(t),r=e,i=0,s=n.length;i<s;i++)i===s-1?r[n[i]]=o:r=r[n[i]]},bind:function(e,t,o){e._listeners=e._listeners||{},e._listeners[t]=o,e.addEventListener(t,x)},unbind:function(e,t){e.removeEventListener(t,x)},JSONProxy:L};i.root.Omi=X,i.root.omi=X,i.root.Omi.version="6.19.23";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var ee=function(e,t){return(ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}(function(e,t){function o(){this.constructor=e}ee(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)})(t,e),t.prototype.render=function(e){return b("div",{class:"o-root o-colorPrimary o-indeterminate",role:"progressbar",style:"width: "+e.size+"px; height: "+e.size+"px;"+(e.color?"color:"+e.color+";":"")},b("svg",{class:"o-svg",viewBox:"22 22 44 44"},b("circle",{class:"o-circle o-circleIndeterminate",cx:"44",cy:"44",r:"20.2",fill:"none","stroke-width":"3.6"})))},t.css=":host {\n  display: inline-block; }\n\n.o-root {\n  display: inline-block;\n  line-height: 1;\n  color: #07c160; }\n\n.o-static {\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n\n.o-indeterminate {\n  animation: o-rotate 1.4s linear infinite; }\n\n.o-circle {\n  stroke: currentColor; }\n\n.o-circleStatic {\n  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n\n.o-circleIndeterminate {\n  animation: mui-progress-circular-dash 1.4s ease-in-out infinite;\n  animation-name: o-keyframes-mui-progress-circular-dash;\n  stroke-dasharray: 80px, 200px;\n  stroke-dashoffset: 0px; }\n\n@-webkit-keyframes o-rotate {\n  100% {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes o-keyframes-mui-progress-circular-dash {\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0px; }\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px; }\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px; } }\n\n.o-circleDisableShrink {\n  animation: none; }\n",t.defaultProps={size:40},t.propTypes={size:Number,color:String},t=function(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}([Y("o-loading")],t)}(I);var te=Object.defineProperty,oe=Object.getOwnPropertyDescriptor;let ne=class extends e{constructor(){super(...arguments),this.mdA='\n  ```html\n<o-loading size="15"></o-loading>\n```\n  ',this.mdB='\n  ```html\n<o-loading size="15"></o-loading>\n<o-loading size="25"></o-loading>\n<o-loading size="35"></o-loading>\n<o-loading size="45"></o-loading>\n<o-loading size="55"></o-loading>\n  ```\n  ',this.mdC='\n  ```html\n  <o-loading size="25" color="#8e2035"></o-loading>\n  <o-loading size="25" color="#2d7418"></o-loading>\n  <o-loading size="25" color="#f37736"></o-loading>\n  <o-loading size="25" color="#7bc043"></o-loading>\n  <o-loading size="25" color="#2170b8"></o-loading>\n  ```\n  ',this.mdD='\n  ```html\n  <o-loading size="15" color="#8e2035"></o-loading>\n  <o-loading size="25" color="#2d7418"></o-loading>\n  <o-loading size="35" color="#f37736"></o-loading>\n  <o-loading size="45" color="#7bc043"></o-loading>\n  <o-loading size="55" color="#2170b8"></o-loading>\n  ```\n  '}installed(){}render(){return t("code-demo-container",null,t("code-demo",{class:o``,title:"基本",describe:"最简单的 Loading",code:this.mdA},t("div",{slot:"demo",class:o`px-5 py-5`},t("o-loading",{size:"15"}))),t("code-demo",{title:"不同尺寸",describe:"支持传入 size 控制大小",code:this.mdB},t("div",{slot:"demo",class:o`px-5 py-5`},t("o-loading",{size:"15"}),t("o-loading",{size:"25"}),t("o-loading",{size:"35"}),t("o-loading",{size:"45"}),t("o-loading",{size:"55"}))),t("code-demo",{title:"不同颜色",describe:"支持传入 color 控制颜色",code:this.mdC},t("div",{slot:"demo",class:o`px-5 py-5`},t("o-loading",{size:"25",color:"#8e2035"}),t("o-loading",{size:"25",color:"#2d7418"}),t("o-loading",{size:"25",color:"#f37736"}),t("o-loading",{size:"25",color:"#7bc043"}),t("o-loading",{size:"25",color:"#2170b8"}))),t("code-demo",{title:"不同颜色和尺寸",describe:"支持传入 size 和 color 控制大小颜色",code:this.mdD},t("div",{slot:"demo",class:o`px-5 py-5`},t("o-loading",{size:"15",color:"#8e2035"}),t("o-loading",{size:"25",color:"#2d7418"}),t("o-loading",{size:"35",color:"#f37736"}),t("o-loading",{size:"45",color:"#7bc043"}),t("o-loading",{size:"55",color:"#2170b8"}))))}};ne.css=n.target,ne=((e,t,o,n)=>{for(var r,i=n>1?void 0:n?oe(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&te(t,o,i),i})([r("loading-component")],ne);export default ne;