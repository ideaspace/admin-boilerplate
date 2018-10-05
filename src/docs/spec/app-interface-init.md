**文件位置**

src/api/index.js

**类库说明**

使用 Vue.js 御用 `axios` 作为异步请求类库，详细的配置可以参见其[官方文档](//github.com/axios/axios)

需要说明的是，该库并不支持 `jsonp` 形式的跨域请求，统一采用 `CORS` 形式。如果确实需要用到 `jsonp` 形式，需要引入其他第三方库支持

**请求拦截**

Axios 提供了**请求**和**应答**两个拦截器，通过对请求和应答过程的劫持，可以进行一些全局的配置操作。

一个典型的应用，是状态码拦截，以提示用户操作。