var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n;import{r,s as l,W as c,a as d,h,t as m,b as p,c as f,d as u,e as b,f as _}from"./vendor.a0eb460d.js";let g;const x={},y=function(e,t){if(!t||0===t.length)return e();if(void 0===g){const e=document.createElement("link").relList;g=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in x)return;x[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":g,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};const w=["button","cascader","tabs","slider","loading","toast","card","progress","time-picker","tag","rate","dialog","avatar"],E=["bar","line","scatter"];function k(e){r("/",(()=>{e.update()})),r("/welcome",(()=>{e.transitionTo("admin-main-welcome")})),r("/table/basic",(()=>{y((()=>import("./basic-table.7fab79f4.js")),["assets/basic-table.7fab79f4.js","assets/vendor.a0eb460d.js","assets/index.1619fcbf.js","assets/index.f7ef9d66.js","assets/index.esm.a2d5e556.js"]).then((()=>e.transitionTo("basic-table")))})),r("/basic-list",(()=>{y((()=>import("./basic-list.c80cb953.js")),["assets/basic-list.c80cb953.js","assets/vendor.a0eb460d.js","assets/index.1619fcbf.js","assets/index.f7ef9d66.js","assets/index.esm.a2d5e556.js","assets/index.esm.86ed57d6.js","assets/index.esm.0c85b35d.js"]).then((()=>e.transitionTo("basic-list")))})),r("/dashboard",(()=>{y((()=>import("./admin-dashboard.5d5e92ba.js")),["assets/admin-dashboard.5d5e92ba.js","assets/vendor.a0eb460d.js","assets/index.1619fcbf.js","assets/index.f7ef9d66.js","assets/index.esm.a2d5e556.js","assets/index.esm.86ed57d6.js"]).then((()=>e.transitionTo("admin-dashboard")))})),r("/md-editor",(()=>{y((()=>import("./md-editor.0a79a9b2.js")),["assets/md-editor.0a79a9b2.js","assets/md-editor.b217a3ba.css","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("md-editor")))})),r("/table/edit",(()=>{y((()=>import("./inline-editing.5534f1d9.js")),["assets/inline-editing.5534f1d9.js","assets/vendor.a0eb460d.js","assets/index.1619fcbf.js","assets/index.f7ef9d66.js","assets/index.esm.a2d5e556.js","assets/index.esm.86ed57d6.js"]).then((()=>e.transitionTo("inline-editing")))})),r("/docs/:name",(t=>{e.getMdByName(t.params.name,e.store.treeData).then((t=>{e.payload={mdContent:t.default,padding:20},y((()=>import("./admin-docs.b7316951.js")),["assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/vendor.a0eb460d.js","assets/___vite-browser-external_commonjs-proxy.bf73b432.js"]).then((()=>e.transitionTo("admin-docs")))}))})),r("/table/pagination",(()=>{y((()=>import("./pagination-table.a4bdcabd.js")),["assets/pagination-table.a4bdcabd.js","assets/vendor.a0eb460d.js","assets/index.1619fcbf.js","assets/index.f7ef9d66.js","assets/index.esm.a2d5e556.js","assets/index.esm.86ed57d6.js"]).then((()=>e.transitionTo("pagination-table")))})),r("/form",(()=>{y((()=>import("./admin-form.3cfcee42.js")),["assets/admin-form.3cfcee42.js","assets/vendor.a0eb460d.js","assets/index.esm.a2d5e556.js","assets/index.es.2682d1d8.js","assets/index.f7ef9d66.js","assets/index.es.0b78433c.js"]).then((()=>e.transitionTo("admin-form")))})),r("/steps-form",(()=>{y((()=>import("./steps-form.09cca729.js")),["assets/steps-form.09cca729.js","assets/vendor.a0eb460d.js","assets/index.esm.a2d5e556.js","assets/index.es.2682d1d8.js","assets/index.f7ef9d66.js","assets/index.es.0b78433c.js"]).then((()=>e.transitionTo("steps-form")))})),r("/comment",(()=>{y((()=>import("./admin-comment.6280731a.js")),["assets/admin-comment.6280731a.js","assets/admin-comment.cc2186d8.css","assets/vendor.a0eb460d.js","assets/index.esm.a2d5e556.js","assets/delete-outline.5aad8e5c.js"]).then((()=>e.transitionTo("admin-comment")))})),r("/icon",(()=>{y((()=>import("./admin-icon.92aff8a1.js")),["assets/admin-icon.92aff8a1.js","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("admin-icon")))})),r("/error",(()=>{y((()=>import("./status-error.65dc94d4.js")),["assets/status-error.65dc94d4.js","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("status-error")))})),w.map((t=>r(`/${t}-component`,(()=>{(function(e){switch(e){case"./components/components/avatar-component.tsx":return y((()=>import("./avatar-component.d925d921.js")),["assets/avatar-component.d925d921.js","assets/vendor.a0eb460d.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/button-component.tsx":return y((()=>import("./button-component.a1538f33.js")),["assets/button-component.a1538f33.js","assets/vendor.a0eb460d.js","assets/accessible-rounded.813574a5.js","assets/add-ic-call-rounded.9df305ef.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/card-component.tsx":return y((()=>import("./card-component.e3eaeb1a.js")),["assets/card-component.e3eaeb1a.js","assets/vendor.a0eb460d.js","assets/index.esm.3aad4c98.js","assets/add-comment-rounded.a4f46ae8.js","assets/add-ic-call-rounded.9df305ef.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/cascader-component.tsx":return y((()=>import("./cascader-component.f71f804c.js")),["assets/cascader-component.f71f804c.js","assets/vendor.a0eb460d.js","assets/index.es.0b78433c.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/dialog-component.tsx":return y((()=>import("./dialog-component.1a909870.js")),["assets/dialog-component.1a909870.js","assets/vendor.a0eb460d.js","assets/index.esm.0c85b35d.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/example-component.tsx":return y((()=>import("./example-component.82f16101.js")),["assets/example-component.82f16101.js","assets/vendor.a0eb460d.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/loading-component.tsx":return y((()=>import("./loading-component.430cd157.js")),["assets/loading-component.430cd157.js","assets/vendor.a0eb460d.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/progress-component.tsx":return y((()=>import("./progress-component.b85d338d.js")),["assets/progress-component.b85d338d.js","assets/vendor.a0eb460d.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/masonry.f78d959d.js"]);case"./components/components/rate-component.tsx":return y((()=>import("./rate-component.600f4daa.js")),["assets/rate-component.600f4daa.js","assets/vendor.a0eb460d.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/slider-component.tsx":return y((()=>import("./slider-component.ac2a40a7.js")),["assets/slider-component.ac2a40a7.js","assets/vendor.a0eb460d.js","assets/index.esm.a2d5e556.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/tabs-component.tsx":return y((()=>import("./tabs-component.c7f07d0f.js")),["assets/tabs-component.c7f07d0f.js","assets/vendor.a0eb460d.js","assets/accessible-rounded.813574a5.js","assets/add-ic-call-rounded.9df305ef.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/tag-component.tsx":return y((()=>import("./tag-component.566fd129.js")),["assets/tag-component.566fd129.js","assets/vendor.a0eb460d.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/time-picker-component.tsx":return y((()=>import("./time-picker-component.806bfd74.js")),["assets/time-picker-component.806bfd74.js","assets/vendor.a0eb460d.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);case"./components/components/toast-component.tsx":return y((()=>import("./toast-component.64de08c8.js")),["assets/toast-component.64de08c8.js","assets/vendor.a0eb460d.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js"]);default:return new Promise((function(t,s){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}})(`./components/components/${t}-component.tsx`).then((()=>e.transitionTo(`${t}-component`)))})))),E.map((t=>r(`/${t}-chart`,(()=>{(function(e){switch(e){case"./components/charts/bar-chart.tsx":return y((()=>import("./bar-chart.1f3e3bb8.js")),["assets/bar-chart.1f3e3bb8.js","assets/vendor.a0eb460d.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js","assets/index.esm.73669ee9.js"]);case"./components/charts/line-chart.tsx":return y((()=>import("./line-chart.7e2d42b1.js")),["assets/line-chart.7e2d42b1.js","assets/vendor.a0eb460d.js","assets/admin-docs.b7316951.js","assets/admin-docs.b657f02c.css","assets/___vite-browser-external_commonjs-proxy.bf73b432.js","assets/index.54d5604a.js","assets/container.e364d57b.js","assets/index.esm.73669ee9.js"]);default:return new Promise((function(t,s){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}})(`./components/charts/${t}-chart.tsx`).then((()=>e.transitionTo(`${t}-chart`)))})))),r("/mind-map",(()=>{y((()=>import("./mind-map.44bdda9c.js")),["assets/mind-map.44bdda9c.js","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("mind-map")))})),r("/warning",(()=>{y((()=>import("./status-warning.dd4d83a6.js")),["assets/status-warning.dd4d83a6.js","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("status-warning")))})),r("/results/browser-incompatible",(()=>{y((()=>import("./browser-incompatible.361916cc.js")),["assets/browser-incompatible.361916cc.js","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("browser-incompatible")))})),r("/success",(()=>{y((()=>import("./admin-success.9295cec7.js")),["assets/admin-success.9295cec7.js","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("admin-success")))})),r("/failure",(()=>{y((()=>import("./admin-failure.630172c9.js")),["assets/admin-failure.630172c9.js","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("admin-failure")))})),r("/results/network-error",(()=>{y((()=>import("./network-error.29443fe9.js")),["assets/network-error.29443fe9.js","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("network-error")))})),r("/results/not-found",(()=>{y((()=>import("./not-found.1e8fc1af.js")),["assets/not-found.1e8fc1af.js","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("not-found")))})),r("/results/permission-denied",(()=>{y((()=>import("./permission-denied.1c9b79bf.js")),["assets/permission-denied.1c9b79bf.js","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("permission-denied")))})),r("/results/server-error",(()=>{y((()=>import("./server-error.1e41214d.js")),["assets/server-error.1e41214d.js","assets/vendor.a0eb460d.js"]).then((()=>e.transitionTo("server-error")))})),r("/masonry-list",(()=>{y((()=>import("./masonry-list.50d5f8ea.js")),["assets/masonry-list.50d5f8ea.js","assets/vendor.a0eb460d.js","assets/index.esm.3aad4c98.js","assets/add-comment-rounded.a4f46ae8.js","assets/add-ic-call-rounded.9df305ef.js","assets/masonry.f78d959d.js"]).then((()=>e.transitionTo("masonry-list")))})),r("/notification-list",(()=>{y((()=>import("./notification-list.8702442e.js")),["assets/notification-list.8702442e.js","assets/vendor.a0eb460d.js","assets/index.1619fcbf.js","assets/index.f7ef9d66.js","assets/index.esm.a2d5e556.js","assets/index.esm.86ed57d6.js","assets/delete-outline.5aad8e5c.js","assets/chat-outlined.6e3977da.js"]).then((()=>e.transitionTo("notification-list")))})),r("/personal-center",(()=>{y((()=>import("./personal-center.ea8e659b.js")),["assets/personal-center.ea8e659b.js","assets/vendor.a0eb460d.js","assets/index.esm.3aad4c98.js","assets/chat-outlined.6e3977da.js"]).then((()=>e.transitionTo("personal-center")))})),r("*",(function(){console.log("not found")}))}var P=Object.defineProperty,v=Object.getOwnPropertyDescriptor;let T=class extends c{constructor(){super(...arguments),this.items=[{label:"中文",value:"zh"},{label:"English",value:"en"}],this.isShowColorPicker=!1,this.toggle=e=>{this.isShowColorPicker=!this.isShowColorPicker,this.update(),e.stopPropagation()},this.onColorChange=e=>{this.store.themeColor=e.detail.color,d("primary",e.detail.color)},this.onItemSelect=e=>{this.store.setLocals(e.detail.value)},this.goNotification=()=>{const e=this.store.tabs.find((e=>e.label===this.store.localeMap.base.NotificationList));if(e)this.store.tabsActiveIndex=this.store.tabs.indexOf(e),this.store.selectTreeNodeById(e.id),location.hash=e.href;else{const e=this.store.treeData.find((e=>e.label===this.store.localeMap.base.ManagerWorkbench)).children.find((e=>e.label===this.store.localeMap.base.NotificationList));this.store.tabs.push(e),this.store.tabsActiveIndex=this.store.tabs.length-1,this.store.selectTreeNodeById(e.id),location.hash=e.href}},this.goPersonalCenter=()=>{const e=this.store.tabs.find((e=>e.label===this.store.localeMap.base.PersonalCenter));if(e)this.store.tabsActiveIndex=this.store.tabs.indexOf(e),this.store.selectTreeNodeById(e.id),location.hash=e.href;else{const e=this.store.treeData.find((e=>e.label===this.store.localeMap.base.ManagerWorkbench)).children.find((e=>e.label===this.store.localeMap.base.PersonalCenter));this.store.tabs.push(e),this.store.tabsActiveIndex=this.store.tabs.length-1,this.store.selectTreeNodeById(e.id),location.hash=e.href}}}install(){y((()=>import("./index.esm.f8397020.js")),["assets/index.esm.f8397020.js","assets/vendor.a0eb460d.js"]),window.addEventListener("click",(()=>{this.isShowColorPicker=!1,this.update()}))}render(){return h("div",{class:m`h-12 text-left border-b-1`},h("div",{class:m`flex justify-between`},h("div",{class:m`flex flex-row p-1 order-1`},h("img",{class:m`w-8 m-1 ml-3 flex-row`,src:"./assets/logo.a690a1ac.svg",alt:"logo"}),h("h1",{class:m`ml-3 leading-10 text-gray-500 flex-row whitespace-nowrap`},"OMI ADMIN"),h("div",{class:m`flex-row mt-1.5 ml-3`},h("o-select",{css:"\n            .o-select .o-input__inner {\n              width: 117px;\n            ",size:"mini",onItemSelect:this.onItemSelect,value:this.store.locale,items:this.items}))),h("div",{class:m`flex flex-row text-gray-500 gap-x-4 items-center order-3 p-1 mr-3`},h("div",{class:m`flex-row hidden md:block`},h("div",{class:m`cursor-pointer`,onClick:this.toggle,style:{color:this.store.themeColor}},h("o-icon-palette",null),this.store.localeMap.base.Theme),this.isShowColorPicker&&h("o-color-picker",{onchange:this.onColorChange,onClick:e=>e.stopPropagation(),class:m`absolute right-0 z-50`,save:!1,preview:!1,button:!1,clear:!1,width:"300px"})),h("o-badge",{onClick:e=>this.goNotification(),content:"99",class:m`flex-row cursor-pointer hidden md:block`},h("o-icon-notifications",null)),h("o-icon-settings",{class:m`flex-row cursor-pointer hidden md:block`}),h("a",{href:"https://github.com/Tencent/omi",target:"_blank",class:m`flex-row`},h("o-icon-git-hub",null)),h("o-avatar",{onClick:e=>this.goPersonalCenter(),class:m`flex-row cursor-pointer`,src:"https://wx.gtimg.com/resource/feuploader/202106/e685db3a4545b05f6fa05b4cbd0b25f0_420x420.png"}))))}};T.css=l.target,T=((e,t,s,n)=>{for(var o,i=n>1?void 0:n?v(t,s):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n?o(t,s,i):o(i))||i);return n&&i&&P(t,s,i),i})([p("layout-header")],T);var I=Object.defineProperty,L=Object.getOwnPropertyDescriptor;let O=class extends c{constructor(){super(...arguments),this.onNodeClick=e=>{if(!e.detail.children){const t=this.store.tabs.find((t=>t.id===e.detail.id));t?this.store.tabsActiveIndex=this.store.tabs.indexOf(t):(this.store.tabs.push({label:e.detail.label,closeable:!1,id:e.detail.id,href:e.detail.href}),this.store.tabsActiveIndex=this.store.tabs.length-1)}e.detail.md&&e.detail.md.then((e=>{this.store.markdown=e.default}))},this.onMenuChange=e=>{this.store.isLeftPanelClosed=e.detail,this.store.isLeftPanelClosed?this.store.openLeftPanel():this.store.closeLeftPanel()}}install(){y((()=>import("./emoji-people.21743b21.js").then((function(e){return e.e}))),["assets/emoji-people.21743b21.js","assets/vendor.a0eb460d.js"]),y((()=>import("./ballot.893b4635.js").then((function(e){return e.b}))),["assets/ballot.893b4635.js","assets/vendor.a0eb460d.js"])}installed(){this.store.ui.leftPanel=this}render(){return h("div",{style:"height:calc(100vh - 3rem)",class:m`text-left relative`},h("o-hamburger-menu",{title:"隐藏导航树",style:"right:-2.5px",class:m`absolute scale-50 z-10 top-0`,color:"rgb(107, 114, 128)",active:!this.store.isLeftPanelClosed,onchange:this.onMenuChange}),h("o-tree",{class:m`pb-40`,"onnode-click":this.onNodeClick,data:this.store.treeData}))}};O.css=[l.target,".menu {\n  position: absolute;\n  cursor: pointer;\n  background-color: #acb7c1;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  width: 8px;\n  bottom: 0;\n  margin-top: -25px;\n  right: -8px;\n  z-index: 999;\n}\n\n.menu svg {\n  font-size: 10px;\n  display: inline-block;\n  position: relative;\n  top: -2px;\n  right: 1px;\n}\n\n.menu.closed svg {\n  transform: rotate(180deg);\n}"],O=((e,t,s,n)=>{for(var o,i=n>1?void 0:n?L(t,s):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n?o(t,s,i):o(i))||i);return n&&i&&I(t,s,i),i})([p("layout-left-panel")],O);var A=Object.defineProperty,j=Object.getOwnPropertyDescriptor;let D=class extends c{constructor(){super(...arguments),this.onChange=e=>{const t=this.store.tabs.find((t=>t.id===e.detail.tab.id));this.store.tabsActiveIndex=this.store.tabs.indexOf(t),this.store.selectTreeNodeById(e.detail.tab.id),location.hash=e.detail.tab.href},this.onRemove=e=>{let t=e.detail.index;this.store.tabsActiveIndex===e.detail.index?(t-=1,t<0&&(t=0),this.store.tabsActiveIndex=t):this.store.tabsActiveIndex>t&&(this.store.tabsActiveIndex-=1);const s=this.store.tabs[this.store.tabsActiveIndex];this.store.selectTreeNodeById(s.id),location.hash=s.href},this.onMenuChange=e=>{this.store.isLeftPanelClosed=e.detail,this.store.isLeftPanelClosed?this.store.openLeftPanel():this.store.closeLeftPanel()}}installed(){this.store.ui.baseLayout=this,window.addEventListener("resize",(()=>{this.update()}))}getMainContentWidth(){return window.innerWidth>640?window.innerWidth-(this.store.isLeftPanelClosed?0:256)+"px":window.innerWidth}render(){return h(h.f,null,h("layout-header",{class:m`h-12 block`}),h("div",{class:m`flex flex-row`},h("layout-left-panel",{class:m`${this.store.isLeftPanelClosed?"sm:w-0 -translate-x-full":"sm:w-64 w-3/4 translate-x-0"} flex-none border-r-1 overflow-x-hidden overflow-y-auto bg-white z-50 transition-all duration-500 ease-in-out  sm:relative fixed `}),h("layout-container",{class:m`flex-1 flex-grow`},h("div",{class:m`overflow-auto flex pt-0.5`,style:{width:this.getMainContentWidth()}},this.store.isLeftPanelClosed&&h("o-hamburger-menu",{class:m`mt-1.5 ml-1 scale-75 flex-row`,color:"rgb(107, 114, 128)",active:!this.store.isLeftPanelClosed,onchange:this.onMenuChange}),h("o-tabs",{class:m`w-full `,closable:!0,type:"card",list:this.store.tabs,onChange:this.onChange,onRemove:this.onRemove,"active-index":this.store.tabsActiveIndex})),h("div",{ref:e=>this.store.containerEl=e,style:{height:"calc(100vh - 90px)",width:this.getMainContentWidth()},class:m`overflow-auto`},h("slot",null)))))}};D.css=[l.target,"\n.is-closed{\n  width: 0;\n  transform: translateX(-100%);\n}\n"],D=((e,t,s,n)=>{for(var o,i=n>1?void 0:n?j(t,s):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n?o(t,s,i):o(i))||i);return n&&i&&A(t,s,i),i})([p("basic-layout")],D);var C=Object.defineProperty,R=Object.getOwnPropertyDescriptor;let V=class extends c{render(){return h("div",null,h("slot",null))}};V.css=l.target,V=((e,t,s,n)=>{for(var o,i=n>1?void 0:n?R(t,s):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n?o(t,s,i):o(i))||i);return n&&i&&C(t,s,i),i})([p("layout-container")],V);var M=Object.defineProperty,N=Object.getOwnPropertyDescriptor;let B=class extends c{render(){return h("div",{class:m``},h("div",{class:m`w-4/5 sm:w-96 m-auto pt-52`},h("svg",{version:"1.1",viewBox:"0 0 800 600",xmlns:"http://www.w3.org/2000/svg"},h("symbol",{id:"text"},h("text",{x:"2%",y:"35%",class:"text"},"Welcome to"),h("text",{x:"69%",y:"35%",class:"text"},"Admin")),h("symbol",{id:"omi"},h("text",{x:"46%",y:"35%",class:"text"},"OMI")),h("g",null,h("use",{"xlink:href":"#omi",class:"use-omi"}),h("use",{"xlink:href":"#omi",class:"use-omi"}),h("use",{"xlink:href":"#omi",class:"use-omi"}),h("use",{"xlink:href":"#omi",class:"use-omi"}),h("use",{"xlink:href":"#omi",class:"use-omi"})),h("g",null,h("use",{"xlink:href":"#text",class:"use-text"}),h("use",{"xlink:href":"#text",class:"use-text"}),h("use",{"xlink:href":"#text",class:"use-text"}),h("use",{"xlink:href":"#text",class:"use-text"}),h("use",{"xlink:href":"#text",class:"use-text"})))))}};B.css=[l.target,'.text {\n  font-size: 60px;\n  font-family: cursive;\n}\n\n\n/* line 19, ../../src/css/source/_chat.scss */\nsvg {\n  width: 100%;\n  height: 100%;\n}\n\n/* line 27, ../../src/css/source/_chat.scss */\n.use-text {\n  fill: none;\n  stroke: white;\n  stroke-dashoffset: 35%;\n  stroke-dasharray: 0 87.5%;\n  stroke-width: 2px;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss "#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"*/\n.use-text:nth-child(1) {\n  stroke: #777e7a;\n  animation: animation1 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(2) {\n  stroke: #777e7a;\n  animation: animation2 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(3) {\n  stroke: #777e7a;\n  animation: animation3 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(4) {\n  stroke: #777e7a;\n  animation: animation4 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-text:nth-child(5) {\n  stroke: #777e7a;\n  animation: animation5 8s infinite ease-in-out forwards;\n\n}\n\n.use-omi {\n  fill: none;\n  stroke: white;\n  stroke-dashoffset: 35%;\n  stroke-dasharray: 0 87.5%;\n  stroke-width: 2px;\n\n}\n\n.use-omi:nth-child(1) {\n  stroke: #07c160;\n  animation: animation1 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(2) {\n  stroke: #07c160;\n  animation: animation2 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(3) {\n  stroke: #07c160;\n  animation: animation3 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(4) {\n  stroke: #07c160;\n  animation: animation4 8s infinite ease-in-out forwards;\n\n}\n\n/* line 38, ../../src/css/source/_chat.scss */\n.use-omi:nth-child(5) {\n  stroke: #07c160;\n  animation: animation5 8s infinite ease-in-out forwards;\n\n}\n\n@keyframes animation1 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 7%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 7%;\n  }\n}\n\n@keyframes animation2 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 14%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 14%;\n  }\n}\n\n@keyframes animation3 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 21%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 21%;\n  }\n}\n\n@keyframes animation4 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 28%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 28%;\n  }\n}\n\n@keyframes animation5 {\n  50% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 35%;\n  }\n\n  70% {\n    stroke-dasharray: 7% 28%;\n    stroke-dashoffset: 35%;\n  }\n}\n'],B=((e,t,s,n)=>{for(var o,i=n>1?void 0:n?N(t,s):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n?o(t,s,i):o(i))||i);return n&&i&&M(t,s,i),i})([p("admin-main-welcome")],B);let W=0;function z(){return W+=1,W}const S=e=>[{label:e.base.Demo1,icon:"description",href:"#/docs/demo1",md:y((()=>import("./demo.d6adbe13.js")),[]),id:z()},{label:e.base.Demo2,icon:"description",href:"#/docs/demo2",md:y((()=>import("./demo2.00871e17.js")),[]),id:z()}],$=(e,t)=>({label:t.base.Introduction,href:"#/docs/introduction",md:y("zh"===e?()=>import("./introduction.0483377b.js"):()=>import("./introduction.a615ed64.js"),[]),id:z()}),F=(e,t)=>({label:t.base.CustomTheme,href:"#/docs/theme",md:y("zh"===e?()=>import("./theme.1a268001.js"):()=>import("./theme.b40226bb.js"),[]),id:z()}),q=(e,t)=>({label:t.base.Contribution,href:"#/docs/contribution",md:y("zh"===e?()=>import("./Contribution.d7cc050a.js"):()=>import("./Contribution.de69ad98.js"),[]),id:z()});var H=Object.defineProperty,U=Object.getOwnPropertyDescriptor;let G=class extends c{constructor(){super(...arguments),this.data={tagName:"admin-main-welcome"}}getMdByName(e,t){const s=`#/docs/${e}`,n=t.find((e=>e.href===s));if(n)return n.md;for(let o=0,i=t.length;o<i;o++)if(t[o].children){const e=this.findNodeByHash(s,t[o].children);if(e)return e.md}}async transitionTo(e){u(),await this.transition.leave(),this.data.tagName=e,this.update(),await this.transition.enter(),b(),this.store.containerEl.scrollTop=0}installed(){this.store.ui.myApp=this,k(this),location.hash&&this.routeTo(location.hash)}findNodeByHash(e,t){const s=t.find((t=>t.href===e));if(s)return s;for(let n=0,o=t.length;n<o;n++)if(t[n].children){const s=this.findNodeByHash(e,t[n].children);if(s)return s}}routeTo(e){const t=this.findNodeByHash(e,this.store.treeData);if(this.store.selectTreeNodeById(t.id),!t.children){const e=this.store.tabs.find((e=>e.id===t.id));e?this.store.tabsActiveIndex=this.store.tabs.indexOf(e):(this.store.tabs.push({label:t.label,closeable:!1,id:t.id,href:t.href}),this.store.tabsActiveIndex=this.store.tabs.length-1)}t.md&&t.md.then((e=>{this.store.markdown=e.default})),_()}render(){return h("basic-layout",null,h("o-transition",{ref:e=>this.transition=e,appear:!0,name:"fade"},h(this.data.tagName,(e=((e,t)=>{for(var s in t||(t={}))o.call(t,s)&&a(e,s,t[s]);if(n)for(var s of n(t))i.call(t,s)&&a(e,s,t[s]);return e})({key:Math.random()+Date.now()},this.payload),r={class:m`block`},t(e,s(r))))));var e,r}};G.css=[l.target,".fade-leave-to,\n.fade-enter {\n  opacity: 0;\n  transform: translateX(15px);\n}\n\n.fade-leave-active,\n.fade-enter-active {\n  transition: all 300ms ease-in;\n}\n"],G=((e,t,s,n)=>{for(var o,i=n>1?void 0:n?U(t,s):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n?o(t,s,i):o(i))||i);return n&&i&&H(t,s,i),i})([p("my-app")],G),new class{constructor(e){this.themeColor="#07c160",this.installed=e.installed,this.locale=e.locale,this.isLeftPanelClosed=window.innerWidth<640,this.ignoreAttrs=!0,this.ui={},this.markdown="",this.html="",this.localeMap={},this.setLocals(this.locale,(()=>{this.tabs=[{label:this.localeMap.base.Welcome,href:"#/welcome",closable:!1,id:2}],this.tabsActiveIndex=0,this.notifications=[{id:1,content:"【换换口味】8月6日中午员工餐厅上新宫保鸡丁，欢迎品尝！",category:"餐厅动态",time:"2021-8-6 10:00",status:1},{id:2,content:"【国家电网线下签约仪式】今天于南山中心举行，请提前15分钟前往会议中心签到！",category:"会议通知",time:"2021-8-6 15:00",status:1},{id:3,content:"【OMIG-后端开发-胡来】申请8月7日下午请假半天-理由:陪孩子参加幼儿园亲子运动会。",category:"部门消息",time:"2021-8-7 12:00",status:0},{id:4,content:"【时间调整】8月6日起，餐厅打烊时间调整为晚9点！",category:"餐厅动态",time:"2021-8-7 10:00",status:1},{id:5,content:"【技术开放签约仪式】今天于线上腾讯会议举行，会议信息详见邮件通知！",category:"会议通知",time:"2021-8-7 15:00",status:0},{id:6,content:"【OMIG-前端开发-郭靖】申请8月8日下午请假半天-理由:送老丈人去机场。",category:"部门消息",time:"2021-8-7 12:00",status:0},{id:7,content:"【腾讯大楼一期改造施工项目】 已通过审核！",category:"合同动态",time:"2021-8-8 9:00",status:1},{id:8,content:"【三季度生产原材料采购项目】 开票成功！",category:"票务动态",time:"2021-8-8 10:00",status:0},{id:9,content:"【OMI conf】于8月10日下午2:00线下举行，活动信息详见邮件通知！",category:"活动备忘",time:"2021-8-8 15:00",status:0},{id:10,content:"【OMIG  Q3 All hands meeting】在8月9日下午企鹅中心一楼举行，请提前15分钟现场签到！",category:"部门消息",time:"2021-8-8 7:00",status:1},{id:11,content:"【产品化总结】于8月10日下午一点在A1会议室开始。",category:"部门消息",time:"2021-8-8 9:00",status:0},{id:12,content:"【腾讯大楼二期改造施工项目】 已通过审核！",category:"合同动态",time:"2021-8-10 9:00",status:1},{id:13,content:"【二季度生产原材料采购项目】 开票成功！",category:"票务动态",time:"2021-8-10 10:00",status:0},{id:14,content:"【项目交付】于8月11日9:00在B1会议室进行，活动信息详见邮件通知！",category:"部门消息",time:"2021-8-10 15:00",status:0},{id:15,content:"【疫情防护】新一轮疫情形势严峻，请各位做好防护！",category:"全体消息",time:"2021-8-10 17:00",status:1},{id:16,content:"【人力资源】新季度员工服可以领取啦！请到人力资源部2楼A105领取！",category:"部门消息",time:"2021-8-12 7:00",status:1},{id:17,content:"【季度总结】于8月12日下午一点在A1会议室开始。",category:"部门消息",time:"2021-8-12 9:00",status:0},{id:18,content:"【腾讯电影节】 将于8月12日于园区举行，欢迎同事们前来参与！",category:"公司动态",time:"2021-8-15 9:00",status:1},{id:19,content:"【新闻】 阿里、腾讯、字节跳动都感兴趣的新茶饮，还有多大的想象空间？",category:"新闻推送",time:"2021-8-16 10:00",status:0},{id:20,content:"【新闻】教育业务大力裁员，字节跳动外卖真能“心动”吗？",category:"新闻推送",time:"2021-8-16 15:00",status:0},{id:21,content:"【新闻】玩转私域，不可不知的6大企业微信SCRM",category:"新闻推送",time:"2021-8-16 17:00",status:1},{id:22,content:"【新闻】泡泡玛特困守王座：上市半年跌去百亿港元，盲盒“泡沫”破了吗",category:"新闻推送",time:"2021-8-17 7:00",status:1},{id:23,content:"【新闻】稻盛和夫：所谓扭转人生，不过是对工作极度认真。",category:"新闻推送",time:"2021-8-17 9:00",status:0},{id:24,content:"【新闻】 “人类高质量男性求偶”火爆全网，男性消费如何崛金千亿市场？",category:"新闻推送",time:"2021-8-18 9:00",status:1},{id:25,content:"【新闻】 市场为什么 | 互联网到底能不能好了？",category:"新闻推送",time:"2021-8-18 10:00",status:0},{id:26,content:"【Q3项目交付】于8月15日9:00在B1会议室进行，活动信息详见邮件通知！",category:"部门消息",time:"2021-8-18 15:00",status:0},{id:27,content:"【疫情防护】新一轮疫情形势严峻，请各位做好防护！",category:"全体消息",time:"2021-8-18 17:00",status:1},{id:28,content:"【OMIG  Q2 All Hands Meeting】在8月2日下午企鹅中心一楼举行，请提前15分钟现场签到！",category:"部门消息",time:"2021-8-19 7:00",status:1},{id:29,content:"【产品化庆功宴】于8月20日下午一点在A1会议室开始。",category:"部门消息",time:"2021-8-19 9:00",status:0},{id:30,content:"【腾讯大楼竣工仪式】 由于在上班时间，欢迎同事们到线上直播间观看！",category:"公司动态",time:"2021-8-20 9:00",status:1}]})),this.isInstalled=!1,r.before=e=>{window.innerWidth<=640&&this.closeLeftPanel()}}setLocals(e,t){W=0,this.locale=e,function(e){switch(e){case"./l10n/en/base.ts":return y((()=>import("./base.4e851eb2.js")),[]);case"./l10n/zh/base.ts":return y((()=>import("./base.ca151efe.js")),[]);default:return new Promise((function(t,s){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./l10n/${e}/base.ts`).then((s=>{this.localeMap=s,t&&t(),this.treeData=function(e,t){const s=[{label:e.base.ManagerWorkbench,expanded:!0,id:z(),children:[{sign:"💗",label:e.base.WelcomePage,icon:"emoji-people",color:"#07c160",selected:!0,href:"#/welcome",id:z()},{label:e.base.Dashboard,icon:"pie-chart",href:"#/dashboard",id:z()},{label:e.base.BasicList,icon:"grid-on",href:"#/basic-list",id:z()},{label:e.base.Form,expanded:!0,id:z(),href:"#/form",icon:"list-alt"},{label:e.base.StepsForm,expanded:!0,id:z(),href:"#/steps-form",icon:"list-alt"},{label:e.base.MarkdownEditor,icon:"edit",href:"#/md-editor",id:z()},{label:e.base.MasonryList,expanded:!0,id:z(),href:"#/masonry-list",icon:"dashboard"},{label:e.base.NotificationList,expanded:!0,id:z(),href:"#/notification-list",icon:"notifications"},{label:e.base.PersonalCenter,expanded:!0,id:z(),href:"#/personal-center",icon:"account-box"}]},{label:e.base.Results,expanded:!0,id:z(),children:[{label:e.base.Success,href:"#/success",id:z()},{label:e.base.Failure,href:"#/failure",id:z()},{label:e.base.BrowserIncompatible,id:z(),href:"#/results/browser-incompatible"},{label:e.base.NetworkError,id:z(),href:"#/results/network-error"},{label:e.base.NotFound,id:z(),href:"#/results/not-found"},{label:e.base.PermissionDenied,id:z(),href:"#/results/permission-denied"},{label:e.base.ServerError,id:z(),href:"#/results/server-error"}]},{label:e.base.Components,expanded:!0,id:z(),children:[$(t,e),F(t,e),q(t,e),{label:e.base.MaterialIcons,id:z(),href:"#/icon"}]},{label:e.base.Chart,expanded:!0,id:z(),children:[]},{label:e.base.Others,sign:"●",expanded:!0,id:z(),children:[{sign:"90020",label:e.base.Error,icon:"error",color:"#F56C6C",href:"#/error",id:z()},{sign:"993",label:e.base.Warning,icon:"warning",color:"#E6A23C",href:"#/warning",id:z()},{sign:"993",label:e.base.Comment,icon:"comment",href:"#/comment",id:z()},{label:e.base.ExternalLink,icon:"insert-link",href:"https://github.com/Tencent/omi",id:z(),target:"_blank"},{label:e.base.MindMap,icon:"ac-unit",href:"#/mind-map",id:z()}]},{label:e.base.MarkdownDocs,expanded:!0,id:z(),children:S(e)},{label:e.base.ManyThanksTo,id:z(),href:"#/thanks",icon:"people-alt"}];return["button","card","slider","loading","toast","tag","progress","cascader","time-picker","rate","dialog","avatar"].forEach((t=>{s[2].children.push({label:e.base[t.split("-").map((e=>e[0].toUpperCase()+e.slice(1))).join("")],id:z(),href:`#/${t}-component`})})),s[2].children=s[2].children.concat([{label:e.base.BasicTable,icon:"grid-on",href:"#/table/basic",id:z()},{label:e.base.TableDeleteAnimation,icon:"grid-on",href:"#/table/pagination",id:z()},{label:e.base.InlineEditing,icon:"grid-on",href:"#/table/edit",id:z()}]),["bar","line","scatter"].forEach((t=>{s[3].children.push({label:e.base[t.split("-").map((e=>e[0].toUpperCase()+e.slice(1))).join("")],id:z(),href:`#/${t}-chart`})})),s}(s,e),this.tabs.forEach((e=>{e.label=this.getTabLabelById(e.id)})),this.isInstalled?this.ui.myApp.update():(this.installed(this),this.isInstalled=!0)}))}getTabLabelById(e){const t=this.treeData.find((t=>t.id===e));if(t)return t.label;for(let s=0,n=this.treeData.length;s<n;s++)if(this.treeData[s].children){const t=this.treeData[s].children.find((t=>t.id===e));if(t)return t.label}}toggleLeftPanel(){this.isLeftPanelClosed=!this.isLeftPanelClosed,this.ui.baseLayout.update()}openLeftPanel(){this.isLeftPanelClosed=!1,this.ui.baseLayout.update()}closeLeftPanel(){this.isLeftPanelClosed=!0,this.ui.baseLayout.update()}selectTreeNodeById(e){this.treeData.forEach((t=>{this.deselect(t,e)}))}deselect(e,t){e.selected=!1,e.children&&e.children.forEach((e=>{e.selected=!1,this.deselect(e,t)})),e.id===t&&(e.selected=!0)}}({locale:"zh",installed(e){f(h("my-app",{name:"Omi"}),"#root",e)}});export{y as _};