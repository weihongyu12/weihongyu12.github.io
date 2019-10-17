(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{84:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"restful-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restful-api","aria-hidden":"true"}},[t._v("#")]),t._v(" RESTful API")]),t._v(" "),s("h2",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("操作")]),t._v(" "),s("th",[t._v("Methods")]),t._v(" "),s("th",[t._v("SQL")]),t._v(" "),s("th",[t._v("Model")]),t._v(" "),s("th",[t._v("路径")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("读取（Read）")]),t._v(" "),s("td",[t._v("GET")]),t._v(" "),s("td",[t._v("SELECT")]),t._v(" "),s("td",[t._v("model.collection.index")]),t._v(" "),s("td",[t._v("/collection")])]),t._v(" "),s("tr",[s("td",[t._v("读取（Read）")]),t._v(" "),s("td",[t._v("GET")]),t._v(" "),s("td",[t._v("SELECT")]),t._v(" "),s("td",[t._v("model.collection.show")]),t._v(" "),s("td",[t._v("/collection/:id")])]),t._v(" "),s("tr",[s("td",[t._v("创建（Create）")]),t._v(" "),s("td",[t._v("POST")]),t._v(" "),s("td",[t._v("INSERT")]),t._v(" "),s("td",[t._v("model.collection.create")]),t._v(" "),s("td",[t._v("/collection")])]),t._v(" "),s("tr",[s("td",[t._v("更新（Update）")]),t._v(" "),s("td",[t._v("PUT")]),t._v(" "),s("td",[t._v("UPDATE")]),t._v(" "),s("td",[t._v("model.collection.update")]),t._v(" "),s("td",[t._v("/collection/:id")])]),t._v(" "),s("tr",[s("td",[t._v("删除（Delete）")]),t._v(" "),s("td",[t._v("DELETE")]),t._v(" "),s("td",[t._v("DELETE")]),t._v(" "),s("td",[t._v("model.collection.destroy")]),t._v(" "),s("td",[t._v("/collection/:id")])])])]),t._v(" "),s("h2",{attrs:{id:"协议和域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协议和域名","aria-hidden":"true"}},[t._v("#")]),t._v(" 协议和域名")]),t._v(" "),s("ul",[s("li",[t._v("总是启用 "),s("strong",[t._v("HTTPS 协议")])]),t._v(" "),s("li",[t._v("API 应该与前端页面部署在不同的域名")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://api.waixiubao.com/\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("服务端 API 与前端页面在不同域名时，应该使用 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS"),s("OutboundLink")],1),t._v(" 避免跨域。")])]),t._v(" "),s("h2",{attrs:{id:"操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("操作")]),t._v(" "),s("th",[t._v("Methods")]),t._v(" "),s("th",[t._v("路径")]),t._v(" "),s("th",[t._v("响应状态行")]),t._v(" "),s("th",[t._v("响应体")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("读取（Read）")]),t._v(" "),s("td",[t._v("GET")]),t._v(" "),s("td",[t._v("/collection")]),t._v(" "),s("td",[t._v("200 OK")]),t._v(" "),s("td",[t._v("JSON 数组")])]),t._v(" "),s("tr",[s("td",[t._v("读取（Read）")]),t._v(" "),s("td",[t._v("GET")]),t._v(" "),s("td",[t._v("/collection/:id")]),t._v(" "),s("td",[t._v("200 OK")]),t._v(" "),s("td",[t._v("JSON 对象")])]),t._v(" "),s("tr",[s("td",[t._v("创建（Create）")]),t._v(" "),s("td",[t._v("POST")]),t._v(" "),s("td",[t._v("/collection")]),t._v(" "),s("td",[t._v("201 Created")]),t._v(" "),s("td",[t._v("JSON 对象")])]),t._v(" "),s("tr",[s("td",[t._v("更新（Update）")]),t._v(" "),s("td",[t._v("PUT")]),t._v(" "),s("td",[t._v("/collection/:id")]),t._v(" "),s("td",[t._v("200 OK")]),t._v(" "),s("td",[t._v("JSON 对象")])]),t._v(" "),s("tr",[s("td",[t._v("删除（Delete）")]),t._v(" "),s("td",[t._v("DELETE")]),t._v(" "),s("td",[t._v("/collection/:id")]),t._v(" "),s("td",[t._v("204 No Content")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"读取列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读取列表","aria-hidden":"true"}},[t._v("#")]),t._v(" 读取列表")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /collection\n")])])]),s("p",[t._v("Model")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("响应状态行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("HTTP/1.1 200 OK\n")])])]),s("p",[t._v("响应体：JSON数组")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"57ea257b3670ca3f44c5beb6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"《一起学 Node.js》彻底重写完毕"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"top"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"replyCount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("155")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-09-27T07:53:31.872Z"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"57ea257b3670ca3f44c5beb6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"《一起学 Node.js》彻底重写完毕"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"top"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"replyCount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("193")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-09-27T07:53:31.872Z"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("如果该列表是个分页列表，可以允许返回 JSON 对象，但是主数据依然为 JSON 数组。")])]),t._v(" "),s("h3",{attrs:{id:"读取资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读取资源","aria-hidden":"true"}},[t._v("#")]),t._v(" 读取资源")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /collection/:id\n")])])]),s("p",[t._v("Model")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("响应状态行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("HTTP/1.1 200 OK\n")])])]),s("p",[t._v("响应体：JSON对象")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"57ea257b3670ca3f44c5beb6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"《一起学 Node.js》彻底重写完毕"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"top"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"replyCount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("155")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-09-27T07:53:31.872Z"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST /collection\n")])])]),s("p",[t._v("Model")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("响应状态行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("HTTP/1.1 201 Created\n")])])]),s("p",[t._v("响应体：JSON对象")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"topicId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"57ea257b3670ca3f44c5beb6"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PUT /collection/:id\n")])])]),s("p",[t._v("Model")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("响应状态行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("HTTP/1.1 200 OK\n")])])]),s("p",[t._v("响应体：JSON对象")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"topicId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"57ea257b3670ca3f44c5beb6"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("DELETE /collection/:id\n")])])]),s("p",[t._v("Model")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("响应状态行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("HTTP/1.1 204 No Content\n")])])]),s("h2",{attrs:{id:"错误处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),s("h3",{attrs:{id:"_4xx错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4xx错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 4xx错误")]),t._v(" "),s("p",[t._v("4xx状态码表示客户端错误，主要有下面几种")]),t._v(" "),s("h4",{attrs:{id:"_400-bad-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_400-bad-request","aria-hidden":"true"}},[t._v("#")]),t._v(" 400 Bad Request")]),t._v(" "),s("p",[t._v("服务器不理解客户端的请求，未做任何处理。该错误通常为程序逻辑手动抛出的异常。")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("注意 400 Bad Request 与 422 Unprocessable Entity 的区别，400 为服务端程序执行逻辑异常，422 为数据校验异常，两者都不会对数据库发生更改。422 拦截位于 400 之前，常用于表单验证。")])]),t._v(" "),s("h4",{attrs:{id:"_401-unauthorized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_401-unauthorized","aria-hidden":"true"}},[t._v("#")]),t._v(" 401 Unauthorized")]),t._v(" "),s("p",[t._v("用户未提供身份验证凭据，或者没有通过身份验证。发生 401 错误时，前端应跳转至授权页面重新获取用户授权。")]),t._v(" "),s("h4",{attrs:{id:"_403-forbidden"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden","aria-hidden":"true"}},[t._v("#")]),t._v(" 403 Forbidden")]),t._v(" "),s("p",[t._v("用户通过了身份验证，但是不具有访问资源所需的权限。发生 403 错误时，前端应重新跳转至 403 页面进行提示。")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("注意 401 Unauthorized 与 403 Forbidden 的区别，401 为用户为授权，通常是用户没有登录。403 为用户已经得到授权，但是不允许访问该功能。")])]),t._v(" "),s("h4",{attrs:{id:"_422-unprocessable-entity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_422-unprocessable-entity","aria-hidden":"true"}},[t._v("#")]),t._v(" 422 Unprocessable Entity")]),t._v(" "),s("p",[t._v("客户端上传的信息或附件无法处理，导致请求失败。该错误常用于表单验证，当表单信息验证未通过时，应该抛出 422 错误。")]),t._v(" "),s("h3",{attrs:{id:"_5xx错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5xx错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 5xx错误")]),t._v(" "),s("p",[t._v("5xx 状态码表示服务端错误。一般来说，API 不会向用户透露服务器的详细信息。")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("一般来说，5xx 状态是服务端的错误，前端仅需要在页面提示异常，但是其错误的修补应由服务端完成。")])]),t._v(" "),s("h3",{attrs:{id:"错误响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误响应","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误响应")]),t._v(" "),s("p",[t._v("在接口处理发生错误的时候，4xx 或者 5xx 的状态码。所有的异常对象都是对这个异常状态的描述，其中 error 字段是错误的描述，detail 字段（可选）是导致错误的详细原因。")]),t._v(" "),s("p",[t._v("对于 400 或者 422 返回的信息应该尽可能详尽，方便前端捕捉以提示信息，以提升用户体验。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"验证失败"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"detail"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"required"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"missing_field"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("对于其他 4xx 或 5xx，可以把状态描述放进 error 里")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Internal Server Error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"detail"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("注意，在开发环境中，可以把服务端的异常抛出方便调试，但是在生产环境中绝对不要这么做！")])]),t._v(" "),s("h2",{attrs:{id:"过滤信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过滤信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 过滤信息")]),t._v(" "),s("p",[t._v("API 可以提供参数，过滤返回结果")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("?limit=10：指定返回记录的数量\n?offset=10：指定返回记录的开始位置。\n?page=2&per_page=100：指定第几页，以及每页的记录数。\n?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。\n?key=value：指定筛选条件\n")])])]),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("ul",[s("li",[t._v("API的身份认证应该使用 OAuth 2.0 框架。")]),t._v(" "),s("li",[t._v("服务器返回的数据格式，应该尽量使用JSON，避免使用XML。")])])])},[],!1,null,null,null);a.default=r.exports}}]);