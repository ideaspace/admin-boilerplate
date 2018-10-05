``` html
fe/
├── babel.config.js
├── vue.config.js
├── package.json
├── public
│   └── index.html
└── src/              ## 源文件目录
    ├── bootstrap.js  ## 工程启动初始化
    ├── store.js      ## vuex 数据收集  
    │   ├── modules
    │   │   ├── container.js
    │   │   └── menu.js
    │   └── mutation-types.js
    ├── router.js     ## 路由收集
    ├── main.js       ## 入口文件
    ├── api/
    │   ├── app.js    ## 根据 Controller 层声明文件名
    │   ├── ...
    │   └── index.js  ## 初始化 Axios 实例
    ├── assets
    │   ├── style.scss
    │   └── ...
    ├── components/
    │   ├── layout/   ## 样板工程骨架组件
    │   │   ├── MenuBar.vue
    │   │   ├── SideBar.vue
    │   │   ├── TopBar.vue
    │   │   ├── ViewContainer.vue
    │   │   └── ViewHeader.vue
    │   └── ...
    ├── directive/
    │   └── index.js
    ├── mixins/
    │   └── index.js
    └── views/
        ├── start/
        │   ├── comps/|dialog/|list/
        │   ├── ...
        │   ├── index.vue
        │   ├── start.module.js
        │   └── start.router.js
        └── ...
```
