<<<<<<< HEAD
<<<<<<< HEAD:packages/admin/dist/assets/avatar-component.06b03838.js
import{k as require$$0,g as commonjsGlobal,W as WeElement,h,t as tw,s as sheet,b as tag}from"./vendor.cff7a2c5.js";import"./admin-docs.d04bcd77.js";import"./index.b502f1bc.js";import"./container.b1933bec.js";import"./___vite-browser-external_commonjs-proxy.e2cda3d0.js";var person={exports:{}};(function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var o={};function a(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=e,a.c=o,a.d=function(e,o,r){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)a.d(r,t,function(o){return e[o]}.bind(null,t));return r},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="",a(a.s="./esm/person.js")}({"./esm/person.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"\n}), \'Person\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/person.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, '-$1').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    var _a;\n    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {\n            __extends(class_1, _super);\n            function class_1() {\n                return _super !== null && _super.apply(this, arguments) || this;\n            }\n            class_1.prototype.render = function () {\n                return omi_1.h('svg', {\n                    viewBox: '0 0 24 24',\n                }, path);\n            };\n            return class_1;\n        }(omi_1.WeElement)),\n        _a.css = \":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}\",\n        _a));\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?")},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(require$$0)})(person);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(e,o,a,r)=>{for(var t,n=r>1?void 0:r?__getOwnPropDesc(o,a):o,c=e.length-1;c>=0;c--)(t=e[c])&&(n=(r?t(o,a,n):t(n))||n);return r&&n&&__defProp(o,a,n),n};const tagName="avatar-component";let avatar_component_default=class extends WeElement{installed(){}render(){const e={breakInside:"avoid",padding:"0 0 0 0"};return h("code-demo-container",null,h("code-demo",{title:"基础头像",describe:"展示不同尺寸的头像",code:'\n```jsx\n<o-avatar src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar size={50} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar size={60} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar square size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:50,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:60,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:70,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{square:!0,size:70,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}))),h("code-demo",{title:"ICON 头像",describe:'可以直接设置 icon，记得 import omiu 对应的 icon，比如下面 icon="person" 对应 @omiu/icon/person',code:'\n```jsx\n<o-avatar icon="person"></o-avatar>\n<o-avatar icon="person" background-color="#87d068"></o-avatar>\n<o-avatar icon="person" background-color="#fde3cf" color="#f56a00"></o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{icon:"person"}),h("o-avatar",{icon:"person","background-color":"#87d068"}),h("o-avatar",{icon:"person","background-color":"#fde3cf",color:"#f56a00"}))),h("code-demo",{title:"文字头像",describe:"可以直接设置文字头像",code:'\n```jsx\n<o-avatar>DNT</o-avatar>\n<o-avatar background-color="#87d068">OMI</o-avatar>\n<o-avatar background-color="#fde3cf" color="#f56a00">User</o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",null,"DNT"),h("o-avatar",{"background-color":"#87d068"},"OMI"),h("o-avatar",{"background-color":"#fde3cf",color:"#f56a00"},"User"))),h("code-demo",{title:"文字头像",describe:"可以直接设置文字头像",code:'\n```jsx\n<o-avatar square>DNT</o-avatar>\n<o-avatar square background-color="#87d068">OMI</o-avatar>\n<o-avatar square background-color="#fde3cf" color="#f56a00">User</o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{square:!0},"DNT"),h("o-avatar",{square:!0,"background-color":"#87d068"},"OMI"),h("o-avatar",{square:!0,"background-color":"#fde3cf",color:"#f56a00"},"User"))),h("code-demo",{title:"带红点的头像",describe:"通过 o-badge 包裹实现",code:'\n```jsx\n<o-badge content="99">\n  <o-avatar>DNT</o-avatar>\n</o-badge>\n\n<o-badge dot>\n  <o-avatar background-color="#87d068">OMI</o-avatar>\n</o-badge>\n\n<o-badge content="new">\n  <o-avatar background-color="#fde3cf" color="#f56a00">U</o-avatar>\n</o-badge>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-badge",{content:"99"},h("o-avatar",null,"DNT")),h("o-badge",{dot:!0},h("o-avatar",{"background-color":"#87d068"},"OMI")),h("o-badge",{content:"new"},h("o-avatar",{"background-color":"#fde3cf",color:"#f56a00"},"U")))))}};avatar_component_default.css=[sheet.target,"o-avatar{ margin: 4px } o-badge{ margin: 4px }"],avatar_component_default=__decorateClass([tag(tagName)],avatar_component_default);export{avatar_component_default as default};
=======
import{m as require$$0,j as commonjsGlobal,W as WeElement,h,t as tw,s as sheet,b as tag}from"./vendor.3f489542.js";import"./admin-docs.bfe65179.js";import"./index.039482e5.js";import"./container.db7f9588.js";import"./___vite-browser-external_commonjs-proxy.755037e0.js";var person={exports:{}};(function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var o={};function a(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=e,a.c=o,a.d=function(e,o,r){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)a.d(r,t,function(o){return e[o]}.bind(null,t));return r},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="",a(a.s="./esm/person.js")}({"./esm/person.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"\n}), \'Person\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/person.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, '-$1').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    var _a;\n    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {\n            __extends(class_1, _super);\n            function class_1() {\n                return _super !== null && _super.apply(this, arguments) || this;\n            }\n            class_1.prototype.render = function () {\n                return omi_1.h('svg', {\n                    viewBox: '0 0 24 24',\n                }, path);\n            };\n            return class_1;\n        }(omi_1.WeElement)),\n        _a.css = \":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}\",\n        _a));\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?")},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(require$$0)})(person);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(e,o,a,r)=>{for(var t,n=r>1?void 0:r?__getOwnPropDesc(o,a):o,c=e.length-1;c>=0;c--)(t=e[c])&&(n=(r?t(o,a,n):t(n))||n);return r&&n&&__defProp(o,a,n),n};const tagName="avatar-component";let avatar_component_default=class extends WeElement{installed(){}render(){const e={breakInside:"avoid",padding:"0 0 0 0"};return h("code-demo-container",null,h("code-demo",{title:"基础头像",describe:"展示不同尺寸的头像",code:'\n```jsx\n<o-avatar src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar size={50} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar size={60} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar square size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:50,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:60,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:70,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{square:!0,size:70,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}))),h("code-demo",{title:"ICON 头像",describe:'可以直接设置 icon，记得 import omiu 对应的 icon，比如下面 icon="person" 对应 @omiu/icon/person',code:'\n```jsx\n<o-avatar icon="person"></o-avatar>\n<o-avatar icon="person" background-color="#87d068"></o-avatar>\n<o-avatar icon="person" background-color="#fde3cf" color="#f56a00"></o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{icon:"person"}),h("o-avatar",{icon:"person","background-color":"#87d068"}),h("o-avatar",{icon:"person","background-color":"#fde3cf",color:"#f56a00"}))),h("code-demo",{title:"文字头像",describe:"可以直接设置文字头像",code:'\n```jsx\n<o-avatar>DNT</o-avatar>\n<o-avatar background-color="#87d068">OMI</o-avatar>\n<o-avatar background-color="#fde3cf" color="#f56a00">User</o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",null,"DNT"),h("o-avatar",{"background-color":"#87d068"},"OMI"),h("o-avatar",{"background-color":"#fde3cf",color:"#f56a00"},"User"))),h("code-demo",{title:"文字头像",describe:"可以直接设置文字头像",code:'\n```jsx\n<o-avatar square>DNT</o-avatar>\n<o-avatar square background-color="#87d068">OMI</o-avatar>\n<o-avatar square background-color="#fde3cf" color="#f56a00">User</o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{square:!0},"DNT"),h("o-avatar",{square:!0,"background-color":"#87d068"},"OMI"),h("o-avatar",{square:!0,"background-color":"#fde3cf",color:"#f56a00"},"User"))),h("code-demo",{title:"带红点的头像",describe:"通过 o-badge 包裹实现",code:'\n```jsx\n<o-badge content="99">\n  <o-avatar>DNT</o-avatar>\n</o-badge>\n\n<o-badge dot>\n  <o-avatar background-color="#87d068">OMI</o-avatar>\n</o-badge>\n\n<o-badge content="new">\n  <o-avatar background-color="#fde3cf" color="#f56a00">U</o-avatar>\n</o-badge>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-badge",{content:"99"},h("o-avatar",null,"DNT")),h("o-badge",{dot:!0},h("o-avatar",{"background-color":"#87d068"},"OMI")),h("o-badge",{content:"new"},h("o-avatar",{"background-color":"#fde3cf",color:"#f56a00"},"U")))))}};avatar_component_default.css=[sheet.target,"o-avatar{ margin: 4px } o-badge{ margin: 4px }"],avatar_component_default=__decorateClass([tag(tagName)],avatar_component_default);export{avatar_component_default as default};
>>>>>>> 0604c68311e9e2a566617123b30f055211daa112:packages/admin/dist/assets/avatar-component.5cd93b3b.js
=======
import{k as require$$0,g as commonjsGlobal,W as WeElement,h,t as tw,s as sheet,b as tag}from"./vendor.cff7a2c5.js";import"./admin-docs.d04bcd77.js";import"./index.b502f1bc.js";import"./container.b1933bec.js";import"./___vite-browser-external_commonjs-proxy.e2cda3d0.js";var person={exports:{}};(function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var o={};function a(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=e,a.c=o,a.d=function(e,o,r){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)a.d(r,t,function(o){return e[o]}.bind(null,t));return r},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="",a(a.s="./esm/person.js")}({"./esm/person.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"\n}), \'Person\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/person.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, '-$1').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    var _a;\n    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {\n            __extends(class_1, _super);\n            function class_1() {\n                return _super !== null && _super.apply(this, arguments) || this;\n            }\n            class_1.prototype.render = function () {\n                return omi_1.h('svg', {\n                    viewBox: '0 0 24 24',\n                }, path);\n            };\n            return class_1;\n        }(omi_1.WeElement)),\n        _a.css = \":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}\",\n        _a));\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?")},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(require$$0)})(person);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(e,o,a,r)=>{for(var t,n=r>1?void 0:r?__getOwnPropDesc(o,a):o,c=e.length-1;c>=0;c--)(t=e[c])&&(n=(r?t(o,a,n):t(n))||n);return r&&n&&__defProp(o,a,n),n};const tagName="avatar-component";let avatar_component_default=class extends WeElement{installed(){}render(){const e={breakInside:"avoid",padding:"0 0 0 0"};return h("code-demo-container",null,h("code-demo",{title:"基础头像",describe:"展示不同尺寸的头像",code:'\n```jsx\n<o-avatar src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar size={50} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar size={60} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n<o-avatar square size={70} src="https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"></o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:50,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:60,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{size:70,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}),h("o-avatar",{square:!0,size:70,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}))),h("code-demo",{title:"ICON 头像",describe:'可以直接设置 icon，记得 import omiu 对应的 icon，比如下面 icon="person" 对应 @omiu/icon/person',code:'\n```jsx\n<o-avatar icon="person"></o-avatar>\n<o-avatar icon="person" background-color="#87d068"></o-avatar>\n<o-avatar icon="person" background-color="#fde3cf" color="#f56a00"></o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{icon:"person"}),h("o-avatar",{icon:"person","background-color":"#87d068"}),h("o-avatar",{icon:"person","background-color":"#fde3cf",color:"#f56a00"}))),h("code-demo",{title:"文字头像",describe:"可以直接设置文字头像",code:'\n```jsx\n<o-avatar>DNT</o-avatar>\n<o-avatar background-color="#87d068">OMI</o-avatar>\n<o-avatar background-color="#fde3cf" color="#f56a00">User</o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",null,"DNT"),h("o-avatar",{"background-color":"#87d068"},"OMI"),h("o-avatar",{"background-color":"#fde3cf",color:"#f56a00"},"User"))),h("code-demo",{title:"文字头像",describe:"可以直接设置文字头像",code:'\n```jsx\n<o-avatar square>DNT</o-avatar>\n<o-avatar square background-color="#87d068">OMI</o-avatar>\n<o-avatar square background-color="#fde3cf" color="#f56a00">User</o-avatar>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-avatar",{square:!0},"DNT"),h("o-avatar",{square:!0,"background-color":"#87d068"},"OMI"),h("o-avatar",{square:!0,"background-color":"#fde3cf",color:"#f56a00"},"User"))),h("code-demo",{title:"带红点的头像",describe:"通过 o-badge 包裹实现",code:'\n```jsx\n<o-badge content="99">\n  <o-avatar>DNT</o-avatar>\n</o-badge>\n\n<o-badge dot>\n  <o-avatar background-color="#87d068">OMI</o-avatar>\n</o-badge>\n\n<o-badge content="new">\n  <o-avatar background-color="#fde3cf" color="#f56a00">U</o-avatar>\n</o-badge>\n```\n          ',style:e},h("div",{slot:"demo",class:tw`px-5 py-5`},h("o-badge",{content:"99"},h("o-avatar",null,"DNT")),h("o-badge",{dot:!0},h("o-avatar",{"background-color":"#87d068"},"OMI")),h("o-badge",{content:"new"},h("o-avatar",{"background-color":"#fde3cf",color:"#f56a00"},"U")))))}};avatar_component_default.css=[sheet.target,"o-avatar{ margin: 4px } o-badge{ margin: 4px }"],avatar_component_default=__decorateClass([tag(tagName)],avatar_component_default);export{avatar_component_default as default};
>>>>>>> 8979b0bd91c8638aca5f571f6f6ebb9b60e083de
