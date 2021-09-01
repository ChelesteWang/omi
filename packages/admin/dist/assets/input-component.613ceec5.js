import{W as e,h as n,t as i,s as t,b as o}from"./vendor.645fedc0.js";import"./index.esm.0bbacbf3.js";import"./ac-unit-outlined.ecca5275.js";import"./admin-docs.b95c79b8.js";import"./index.86b09e9b.js";import"./container.a7d4e530.js";import"./___vite-browser-external_commonjs-proxy.ce402805.js";var l=Object.defineProperty,r=Object.getOwnPropertyDescriptor;let a=class extends e{install(){}render(){return n("code-demo-container",null,n("code-demo",{title:"基础输入框",describe:"一般用于输入信息提交给服务器",code:'\n```jsx\n<o-input placeholder="Enter User Name"></o-input>\n<o-input disabled placeholder="Enter User Name"></o-input>\n<o-input clearable placeholder="Enter User Name"></o-input>\n```\n          '},n("div",{slot:"demo",class:i`flex flex-col justify-center px-5 py-5`},n("div",null,n("o-input",{placeholder:"Enter User Name"})),n("div",null,n("o-input",{disabled:!0,placeholder:"Enter User Name"})),n("div",null,n("o-input",{clearable:!0,placeholder:"Enter User Name"})))),n("code-demo",{title:"扩展输入框",describe:"设置 后缀 前缀",code:'\n```jsx\n<o-input max-length="10"  placeholder="Enter User Name"></o-input>\n<o-input size="medium" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n<o-input size="small" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n<o-input size="mini" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n\n<o-input size="medium" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n<o-input size="small" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n<o-input size="mini" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n```\n          '},n("div",{slot:"demo",class:i`flex flex-col px-5 py-5`},n("div",null,n("o-input",{"max-length":"10",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"medium","suffix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"small","suffix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"mini","suffix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"medium","prefix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"small","prefix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"mini","prefix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})))))}};a.css=[t.target,"o-input{margin-top:10px;}"],a=((e,n,i,t)=>{for(var o,a=t>1?void 0:t?r(n,i):n,u=e.length-1;u>=0;u--)(o=e[u])&&(a=(t?o(n,i,a):o(a))||a);return t&&a&&l(n,i,a),a})([o("input-component")],a);export default a;
