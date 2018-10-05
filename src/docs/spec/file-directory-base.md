### 基础目录

**Public/**

页面模板目录，存放页面模板或者其他静态资源

**Src/**

源码目录，存放业务代码

基于对大型单页面应用开发的考虑，我们在原有目录 `assets/`, `components/`, `views/` 基础上，增加了 `api/`, `directives/`, `mixins/`, `stores/` 目录，目的是对前端架构进行合理分层，这样做有利于项目的扩展和维护。

### 基础文件

**main.js**

单一入口文件

**bootstrap.js**

项目启动初始化文件，完成依赖包的加载及初始配置，路由劫持等功能

**router.js**

路由收集，使用 `require.context` 自动加载指定目录下的路由配置

**store.js**

状态收集，使用 `require.context` 自动加载指定目录下的状态配置

**app/index.js**

异步请求类库初始化，同时定义全局拦截器

**stores/mutation-types.js**

使用常量定义 Mutation 事件类型

**stores/modules/container.js**

定义工程的部分数据状态，如用户信息，页面加载等

**stores/modules/menu.js**

定义工程菜单数据状态，包括菜单初始化，激活当前菜单，面包屑导航展示等
