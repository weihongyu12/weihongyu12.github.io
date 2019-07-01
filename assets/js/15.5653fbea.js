(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{73:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"restful-api-示例文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restful-api-示例文档","aria-hidden":"true"}},[t._v("#")]),t._v(" RESTful API 示例文档")]),t._v(" "),s("h2",{attrs:{id:"通用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用","aria-hidden":"true"}},[t._v("#")]),t._v(" 通用")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("关于 RESTful API 的设计可以参考 "),s("router-link",{attrs:{to:"/document/example/restful-api/"}},[t._v("RESTful API 设计文档")])],1)]),t._v(" "),s("h3",{attrs:{id:"success"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#success","aria-hidden":"true"}},[t._v("#")]),t._v(" Success")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("操作")]),t._v(" "),s("th",[t._v("响应状态行")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("读取（READ）")]),t._v(" "),s("td",[t._v("200 OK")])]),t._v(" "),s("tr",[s("td",[t._v("读取（READ）")]),t._v(" "),s("td",[t._v("200 OK")])]),t._v(" "),s("tr",[s("td",[t._v("创建（Create）")]),t._v(" "),s("td",[t._v("201 Created")])]),t._v(" "),s("tr",[s("td",[t._v("更新（Update）")]),t._v(" "),s("td",[t._v("200 OK")])]),t._v(" "),s("tr",[s("td",[t._v("删除（Delete）")]),t._v(" "),s("td",[t._v("204 No Content")])])])]),t._v(" "),s("h3",{attrs:{id:"error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error","aria-hidden":"true"}},[t._v("#")]),t._v(" Error")]),t._v(" "),s("h4",{attrs:{id:"_400-bad-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_400-bad-request","aria-hidden":"true"}},[t._v("#")]),t._v(" 400 Bad Request")]),t._v(" "),s("p",[t._v("服务器不理解客户端的请求，未做任何处理。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UserNotFound"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"detail"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_401-unauthorized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_401-unauthorized","aria-hidden":"true"}},[t._v("#")]),t._v(" 401 Unauthorized")]),t._v(" "),s("p",[t._v("用户未提供身份验证凭据，或者没有通过身份验证。")]),t._v(" "),s("h4",{attrs:{id:"_403-forbidden"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden","aria-hidden":"true"}},[t._v("#")]),t._v(" 403 Forbidden")]),t._v(" "),s("p",[t._v("用户通过了身份验证，但是不具有访问资源所需的权限。")]),t._v(" "),s("h4",{attrs:{id:"_422-unprocessable-entity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_422-unprocessable-entity","aria-hidden":"true"}},[t._v("#")]),t._v(" 422 Unprocessable Entity")]),t._v(" "),s("p",[t._v("客户端上传的信息或附件无法处理，导致请求失败。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UserNameTooShort"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"detail"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"required"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"missing_field"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_500-internal-server-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_500-internal-server-error","aria-hidden":"true"}},[t._v("#")]),t._v(" 500 Internal Server Error")]),t._v(" "),s("p",[t._v("5xx 状态码表示服务端错误。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Internal Server Error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"detail"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user","aria-hidden":"true"}},[t._v("#")]),t._v(" User")]),t._v(" "),s("h3",{attrs:{id:"获取多个用户信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取多个用户信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取多个用户信息 "),s("CustomBadge",{attrs:{text:"GET",type:"tip",vertical:"middle"}})],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /user\n")])])]),s("h4",{attrs:{id:"success-200"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#success-200","aria-hidden":"true"}},[t._v("#")]),t._v(" Success 200")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("用户ID")])]),t._v(" "),s("tr",[s("td",[t._v("registered")]),t._v(" "),s("td",[t._v("Date")]),t._v(" "),s("td",[t._v("登记日期")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("Date")]),t._v(" "),s("td",[t._v("用户的全名")])]),t._v(" "),s("tr",[s("td",[t._v("nicknames")]),t._v(" "),s("td",[t._v("String[]")]),t._v(" "),s("td",[t._v("用户昵称列表 （字符串数组）")])]),t._v(" "),s("tr",[s("td",[t._v("profile")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("档案数据")])]),t._v(" "),s("tr",[s("td",[t._v(" age")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("用户年龄")])]),t._v(" "),s("tr",[s("td",[t._v(" image")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("头像图片")])]),t._v(" "),s("tr",[s("td",[t._v("options")]),t._v(" "),s("td",[t._v("Object[]")]),t._v(" "),s("td",[t._v("用户列表选项（对象数组）")])]),t._v(" "),s("tr",[s("td",[t._v(" name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("选项名称")])]),t._v(" "),s("tr",[s("td",[t._v(" value")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("选项值")])])])]),t._v(" "),s("h4",{attrs:{id:"响应体示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应体示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应体示例")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"57ea257b3670ca3f44c5beb6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registered"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-04-22T05:41:23.222Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nicknames"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"profile"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"age"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"image"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"获取单个用户信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取单个用户信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取单个用户信息 "),s("CustomBadge",{attrs:{text:"GET",type:"tip",vertical:"middle"}})],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /user/:id\n")])])]),s("h4",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("用户ID")])])])]),t._v(" "),s("h4",{attrs:{id:"success-200-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#success-200-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Success 200")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("用户ID")])]),t._v(" "),s("tr",[s("td",[t._v("registered")]),t._v(" "),s("td",[t._v("Date")]),t._v(" "),s("td",[t._v("登记日期")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("Date")]),t._v(" "),s("td",[t._v("用户的全名")])]),t._v(" "),s("tr",[s("td",[t._v("nicknames")]),t._v(" "),s("td",[t._v("String[]")]),t._v(" "),s("td",[t._v("用户昵称列表 （字符串数组）")])]),t._v(" "),s("tr",[s("td",[t._v("profile")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("档案数据")])]),t._v(" "),s("tr",[s("td",[t._v(" age")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("用户年龄")])]),t._v(" "),s("tr",[s("td",[t._v(" image")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("头像图片")])]),t._v(" "),s("tr",[s("td",[t._v("options")]),t._v(" "),s("td",[t._v("Object[]")]),t._v(" "),s("td",[t._v("用户列表选项（对象数组）")])]),t._v(" "),s("tr",[s("td",[t._v(" name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("选项名称")])]),t._v(" "),s("tr",[s("td",[t._v(" value")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("选项值")])])])]),t._v(" "),s("h4",{attrs:{id:"error-4xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-4xx","aria-hidden":"true"}},[t._v("#")]),t._v(" Error 4xx")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("错误信息")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("UserNotFound")]),t._v(" "),s("td",[t._v("找不到用户的ID")])])])]),t._v(" "),s("h4",{attrs:{id:"响应体示例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应体示例-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应体示例")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"57ea257b3670ca3f44c5beb6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registered"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-04-22T05:41:23.222Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nicknames"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"profile"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"age"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"image"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"创建用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建用户","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建用户 "),s("CustomBadge",{attrs:{text:"POST",type:"info",vertical:"middle"}})],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST /user\n")])])]),s("h4",{attrs:{id:"success-200-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#success-200-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Success 200")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("用户ID")])])])]),t._v(" "),s("h4",{attrs:{id:"error-4xx-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-4xx-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Error 4xx")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("错误信息")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("UserNameTooShort")]),t._v(" "),s("td",[t._v("至少需要5个字符")])])])]),t._v(" "),s("h4",{attrs:{id:"响应体示例-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应体示例-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应体示例")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"57ea257b3670ca3f44c5beb6"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"更新用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新用户","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新用户 "),s("CustomBadge",{attrs:{text:"PUT",type:"warn",vertical:"middle"}})],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PUT /user/:id\n")])])]),s("h4",{attrs:{id:"参数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("用户ID")])])])]),t._v(" "),s("h4",{attrs:{id:"success-200-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#success-200-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Success 200")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("用户ID")])])])]),t._v(" "),s("h4",{attrs:{id:"error-4xx-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-4xx-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Error 4xx")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("错误信息")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("UserNameTooShort")]),t._v(" "),s("td",[t._v("至少需要5个字符")])])])]),t._v(" "),s("h4",{attrs:{id:"响应体示例-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应体示例-4","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应体示例")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"57ea257b3670ca3f44c5beb6"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"删除用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除用户","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除用户 "),s("CustomBadge",{attrs:{text:"DELETE",type:"error",vertical:"middle"}})],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("DELETE /user/:id\n")])])]),s("h4",{attrs:{id:"参数-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("用户ID")])])])])])},[],!1,null,null,null);a.default=e.exports}}]);