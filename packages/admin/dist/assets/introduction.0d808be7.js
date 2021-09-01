export default"## Omiu 是什么？\r\n\r\nOmiu 是基于 [Omi](https://github.com/Tencent/omi) 开发的跨框架 UI 组件库，输出标准 Web Components 的 Custom Elements，任意组件可以同时在 React、Vue、Preact、Omi 或者原生 JS 等任意框架或无框架中使用，非常方便。总体来看，Omiu 有这些特性:\r\n\r\n> [Omiu Codepen 合集](https://codepen.io/collection/XBJjke)\r\n\r\n* 跨框架使用\r\n* 集成 MUI [海量 ICON](https://tencent.github.io/omi/components/icon/demos/icon.html)\r\n* 移动端和 PC 共用一套组件\r\n* 运行时的主题切换支持(颜色、字体和圆角)\r\n* 组件直接解耦，独立打磨，独立发布，独立引用\r\n* 扩展了 HTML 能力，你可以通过字符串 `'0'` 或者字符串 `'false'` 传递 false 给元素\r\n\r\n## 使用指南\r\n\r\n### 通过 script\r\n\r\n```html\r\n<script src=\"https://unpkg.com/omi\"><\/script>\r\n<script src=\"https://unpkg.com/@omiu/button\"><\/script>\r\n\r\n<o-button>I am button</o-button>\r\n```\r\n\r\n### 通过 npm\r\n\r\n``` bash\r\nnpm install @omiu/button\r\n```\r\n\r\n然后导入（自动全局注册）:\r\n\r\n```js\r\nimport '@omiu/button'\r\n```\r\n\r\n然后在任意框架中使用，比如 Omi, React, Vue or Angular:\r\n\r\n``` html\r\n<o-button>I am button</o-button>\r\n```\r\n\r\n也可以原生 JS 使用：\r\n\r\n```js\r\nvar button = document.createElement('o-button')\r\nbutton.innerHTML = 'I am omiu button'\r\ndocument.body.append(button)\r\nbutton.addEventListener('click', function () {\r\n  console.log('Clicked!')\r\n})\r\n\r\n//or\r\n//document.body.innerHTML = '<o-button>I am omiu button</o-button>'\r\n```\r\n\r\n## HTML 扩展 \r\n\r\n当默认值为 true，需要传递 false 给 element 的时候，以前是历史难题，Omi 完美解决了这一点，你可以通过字符串 `'0'` 或者 字符串 `'false'` 来设置。\r\n\r\n```js\r\ndefine('my-element', class extends WeElement {\r\n  static defaultProps = {\r\n    show: true\r\n  }\r\n\r\n static propTypes = {\r\n    show: Boolean\r\n  }\r\n\r\n  render(props) {\r\n    ...\r\n    ...\r\n  }\r\n})\r\n```\r\n\r\nUse:\r\n\r\n```html\r\n<my-element show=\"false\"></my-element>\r\n```\r\n\r\nor\r\n\r\n```html\r\n<my-element show=\"0\"></my-element>\r\n```\r\n\r\n## React 中使用 omiu\r\n\r\n```tsx\r\nimport { useState } from 'react'\r\nimport '@omiu/icon-button'\r\n\r\nexport default function SomeComponent(props) {\r\n    const [result, setSwitch] = useState(false)\r\n\r\n    return (\r\n      <div>\r\n        <p>The switch is {result ? 'on' : 'off'}</p>\r\n        {//使用 addEventListener 绑定自定义事件}\r\n        <o-icon-button color=\"red\" icons=\"['favorite', 'favorite_border']\">\r\n        </o-icon-button>\r\n      </div>\r\n    )\r\n}\r\n```\r\n\r\n\r\n## Vue 中使用 Omiu\r\n\r\n```html\r\n<script>\r\nimport '@omiu/icon-button'\r\n\r\nexport default {\r\n  name: 'HelloWorld',\r\n  data: function() {\r\n    return {\r\n      result: false\r\n    }\r\n  },\r\n  methods: {\r\n    myEvent: function(evt) {\r\n      this.result = evt.detail.isOn\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n\r\n<template>\r\n  <div class=\"component\">\r\n    <p>The switch is {{result? 'on' : 'off'}}</p>\r\n    <o-icon-button color=\"red\" icons=\"['favorite', 'favorite_border']\" @change=\"myEvent\"></o-icon-button>\r\n  </div>\r\n</template>\r\n```\r\n\r\n## 事件触发和绑定最佳实践\r\n\r\n由于需要跨框架，在事件绑定上为了统一组件行为这里给除了组件开发和使用的最佳实践。Omiu 组件的事件触发统一使用小写的形式：\r\n\r\n```js\r\nthis.fire('change')\r\nthis.fire('my-event')\r\n```\r\n\r\n在 Omi 中进行对应的事件绑定:\r\n\r\n```jsx\r\n<my-ele onChange={this.changeHandler} onMyEvent={this.myEventHandler}></my-ele>\r\n```\r\n\r\n在 Preact 中进行对应的事件绑定:\r\n\r\n```jsx\r\n<my-ele onchange={this.changeHandler} onmy-event={this.myEventHandler}></my-ele>\r\n```\r\n\r\n在 Vue 中进行对应的事件绑定:\r\n\r\n```html\r\n<my-ele @change=\"changeHandler\" @my-event=\"myEventHandler\"></my-ele>\r\n```\r\n\r\n在 React 和 JS 中进行对应的事件绑定:\r\n\r\n```jsx\r\nmyEl.addEventListener('my-event', (evt) => {})\r\n```\r\n\r\n## 贡献\r\n\r\n### 一些命令\r\n\r\nBuild 组件:\r\n\r\n```bash\r\nnpm run build \r\n```\r\n\r\nBuild 例子:\r\n\r\n```bash\r\nnpm start\r\n```\r\n\r\n生成文档:\r\n\r\n```bash\r\nnpm run docs\r\n```\r\n\r\n发布:\r\n\r\n```bash\r\nnpm publish --access public\r\n```\r\n";