<<<<<<< HEAD
<<<<<<< HEAD:packages/admin/dist/assets/bottom-nav-component.93ecc2bf.js
import{h,l as extractClass,b as tag,W as WeElement,k as require$$0,g as commonjsGlobal,t as tw,s as sheet}from"./vendor.cff7a2c5.js";import"./favorite.99054448.js";import"./admin-docs.d04bcd77.js";import"./index.b502f1bc.js";import"./container.b1933bec.js";import"./___vite-browser-external_commonjs-proxy.e2cda3d0.js";
=======
import{h,n as extractClass,b as tag,W as WeElement,m as require$$0,j as commonjsGlobal,t as tw,s as sheet}from"./vendor.3f489542.js";import"./favorite.ad22b170.js";import"./admin-docs.bfe65179.js";import"./index.039482e5.js";import"./container.db7f9588.js";import"./___vite-browser-external_commonjs-proxy.755037e0.js";
>>>>>>> 0604c68311e9e2a566617123b30f055211daa112:packages/admin/dist/assets/bottom-nav-component.b90484dd.js
=======
import{h,l as extractClass,b as tag,W as WeElement,k as require$$0,g as commonjsGlobal,t as tw,s as sheet}from"./vendor.cff7a2c5.js";import"./favorite.99054448.js";import"./admin-docs.d04bcd77.js";import"./index.b502f1bc.js";import"./container.b1933bec.js";import"./___vite-browser-external_commonjs-proxy.e2cda3d0.js";
>>>>>>> 8979b0bd91c8638aca5f571f6f6ebb9b60e083de
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
***************************************************************************** */var extendStatics=function(e,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)};function __extends(e,n){function t(){this.constructor=e}extendStatics(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var __assign=function(){return(__assign=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function __decorate(e,n,t,o){var r,a=arguments.length,c=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(n,t,c):r(n,t))||c);return a>3&&c&&Object.defineProperty(n,t,c),c}var css=":host {\n  display: block; }\n\n.o-bottom-nav {\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  background-color: #fff; }\n\n.item.selected {\n  color: #07c160; }\n\n.item {\n  flex: 1;\n  color: rgba(0, 0, 0, 0.54);\n  padding: 6px 12px 8px;\n  max-width: 168px;\n  min-width: 80px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n\nbutton {\n  appearance: none;\n  -webkit-appearance: none;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  border: none; }\n\n.icon {\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: block;\n  margin: 0 auto;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n";!function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.clickHandler=function(e){n.fire("item-click",e),e.selected||(n.props.items.forEach((function(e){return e.selected=!1})),e.selected=!0,n.fire("change",e),n.update(!0))},n}__extends(n,e),n.prototype.render=function(e){var n=this;return h("div",{class:"o-bottom-nav"},e.items.map((function(t,o){return n._iconTag="o-icon-"+t.icon,h("button",__assign({onClick:function(e){n.clickHandler(t)}},extractClass({},"item",{selected:t.selected}),t.selected&&e.selectedColor?{style:"color:"+e.selectedColor}:null,{tabindex:o}),h(n._iconTag,{class:"icon"}),h("span",{class:"m-action-label"},t.label))})))},n.css=css,n.defaultProps={},n.propTypes={selectedColor:String,items:Array},n=__decorate([tag("m-bottom-nav")],n)}(WeElement);var locationOn={exports:{}};(function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./esm/location-on.js")}({"./esm/location-on.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"\n}), \'LocationOn\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/location-on.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, '-$1').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    var _a;\n    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {\n            __extends(class_1, _super);\n            function class_1() {\n                return _super !== null && _super.apply(this, arguments) || this;\n            }\n            class_1.prototype.render = function () {\n                return omi_1.h('svg', {\n                    viewBox: '0 0 24 24',\n                }, path);\n            };\n            return class_1;\n        }(omi_1.WeElement)),\n        _a.css = \":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}\",\n        _a));\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?")},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(require$$0)})(locationOn);var restore={exports:{}};(function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./esm/restore.js")}({"./esm/restore.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"\n}), \'Restore\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/restore.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, '-$1').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    var _a;\n    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {\n            __extends(class_1, _super);\n            function class_1() {\n                return _super !== null && _super.apply(this, arguments) || this;\n            }\n            class_1.prototype.render = function () {\n                return omi_1.h('svg', {\n                    viewBox: '0 0 24 24',\n                }, path);\n            };\n            return class_1;\n        }(omi_1.WeElement)),\n        _a.css = \":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}\",\n        _a));\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?")},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(require$$0)})(restore);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(e,n,t,o)=>{for(var r,a=o>1?void 0:o?__getOwnPropDesc(n,t):n,c=e.length-1;c>=0;c--)(r=e[c])&&(a=(o?r(n,t,a):r(a))||a);return o&&a&&__defProp(n,t,a),a};const tagName="bottom-nav-component";let bottom_nav_component_default=class extends WeElement{install(){}render(){return h("code-demo-container",null,h("code-demo",{title:"底部导航",describe:"移动端底部导航",code:"\n```jsx\n<m-bottom-nav selected-color='#07c160' id='myNav' items={[\n  { icon: 'favorite', label: 'Favorites', selected: true },\n  { icon: 'location-on', label: 'Nearby' },\n  { icon: 'restore', label: 'Recents' }\n]}>\n</m-bottom-nav>\n```\n          "},h("div",{slot:"demo",class:tw`flex justify-around px-5 py-5`},h("m-bottom-nav",{"selected-color":"#07c160",id:"myNav",items:[{icon:"favorite",label:"Favorites",selected:!0},{icon:"location-on",label:"Nearby"},{icon:"restore",label:"Recents"}]}))))}};bottom_nav_component_default.css=sheet.target,bottom_nav_component_default=__decorateClass([tag(tagName)],bottom_nav_component_default);export{bottom_nav_component_default as default};
