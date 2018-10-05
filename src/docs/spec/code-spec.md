
#### 编码约定

* 统一使用 `ES2015` 及以上版本进行编码
* 使用 `ESLint` 的 `standard` 模式验证代码

#### 命名约定

- 文件命名: 统一采用 kebab-case (短横线分隔命名) 约定。如 `pkg-list.vue`
- 组件命名: 统一采用大写 camelCase (驼峰式命名) 约定。如 `name: PkgList`

> 命名应该有意义，简单，具备可读性，必须符合自定义元素规范，使用连字符分隔单词 <br/>
> 当 `*.vue` 作为复用组件使用时，必须声明 `name` 属性。作为页面组件使用时，则不做强制要求。

```html
<!-- 推荐 -->
<setting-dialog></setting-dialog>
<export-list></export-list>

<!-- 避免 -->
<btn-group></btn-group> <!-- 虽然简短但是可读性差. 使用 `button-group` 替代 -->
<slider></slider> <!-- 与自定义元素规范不兼容 -->
```

#### .vue文件

```html
<template>
  <div>
    <!--在唯一一个根元素书写页面结构-->
  </div>
</template>
<script>
  export default {
    name : '', // 不要忘记了 name 属性
    mixins: [], // 使用组件 mixins 共享通用功能
    extends: {},
    components: {},
    props: {},
    computed: {},
    data() {
      return {
      }
    },
    watch: {},
    methods: {
    },
    // 生命周期函数
    created() {},
    mounted() {
    }
 }
</script>
<style lang="scss" scoped>
</style>
```

#### 模板相关

- 总是为 `v-for` 设置键值

> 总是用 key 配合 v-for。 <br/>
> 在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的对象固化 (object constancy)，也是一种好的做法。

```html
<!--使用数据ID-->
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>

<!--更通用的做法, 直接使用数组索引-->
<ul>
  <li
    v-for="(todo, idx) in todos"
    :key="idx"
  >
    {{ todo.text }}
  </li>
</ul>
```

- 避免 `v-if` 和 `v-for` 用在一起

> 永远不要把 v-if 和 v-for 同时用在同一个元素上。<br/>
> 一般我们在两种常见的情况下会倾向于这样做：
> * 为了过滤一个列表中的项目 (比如 v-for="v in codeList" v-if="v.isActive")。在这种情形下，请将 codeList 替换为一个计算属性 (比如 isActiveCodeList)，让其返回过滤后的列表。
> * 为了避免渲染本应该被隐藏的列表 (比如 v-for="v in codeList" v-if="codeList.length")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。

#### 属性信息

- 使用 name 属性。借助于 [vue devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) 可以让你更方便的测试。
- props 的定义应该尽量详细，需要指定其类型，并定义默认值

```js
props: {
  appData: {
    type: Object,
    default () {
      return {}
    }
  }
}
```

#### 方法命名

- 统一采用 camelCase (驼峰式命名) 约定。
- 以事件驱动的交互，使用 `on` 作为前缀。如 `onChangeStep`，`onValidate`
- 以初始化数据的逻辑，不涉及交互，使用 `get` 作为前缀。如 `getServiceList`，`getCodeList`
- Mutation 事件总是使用常量命名，如 `const CODE_UPLOAD_DATA_SET = 'SET_CODE_UPLOAD_DATA'`
- Action 事件参照后端数据操作 `CURD` 动作合理使用前缀。如 `createFileData`，`updateFileData`, `readFileData`, `deleteFileData`

#### 样式约定

- 对于统一的，可复用组件，强烈推荐采用 BEM 命名约定
- 使用 scoped 属性限定作用域
- 自定义结构时，不要使用组件库的命名前缀，直接使用上下文相关的命名方式

#### 路由结构

```
{
  path: '/code/list/:serviceId/:serviceVerId', // 参数命名保持与后端接口一致
  name: 'code-list',
  component: () => import('./views/list') // webpack 异步加载模块
}
```

- path 路径命名需要体现当前页面含义，参数命名保持与后端接口请求参数命名一致，方便直接使用 `$route.params` 对象
- name 路由名称名称，使用与路径信息一致的单词命名，使用连接符链接。如 `path: 'a/b' => name: 'a-b'`
- component 组件引入方式，对大型项目，请使用异步加载
- 模板中路由跳转时，尽可能使用路由名称跳转，因为路径可能修改，而名称相对稳定
``

#### 自定义组件属性

* 尽量只使用 JavaScript 原始类型和函数，保持属性的原子性，避免复杂对象。
* 事件属性使用 `on-` 加动词形式，如 `on-search`， `on-slide`
* 事件命名统一采用 camelCase (驼峰式命名) 约定的一组意义操作。如 `onUpdateValue`

```html
<!-- 推荐 -->
<range-slider
  :values="[10, 20]"
  min="0"
  max="100"
  step="5"
  @on-slide="onUpdateInputs"
  @on-end="onUpdateResults">
</range-slider>

<!-- 避免 -->
<range-slider :config="complexConfigObject"></range-slider>
```

#### 验证属性

* 提供默认值
* 使用 type 属性校验类型

```html
<template>
  <input type="range" v-model="value" :max="max" :min="min">
</template>
<script>
  export default {
    props: {
      max: {
        type: Number,
        default() { return 10 },
      },
      min: {
        type: Number,
        default() { return 0 },
      },
      value: {
        type: Number,
        default() { return 4 },
      },
    },
  };
</script>
```
#### 组件间通讯

* 通过 props 将值传递给子组件
* 通过 props 传递回调函数给子组件来达到调用父组件方法的目的
* 通过在子组件触发事件来通知父组件

> 组件必须相互保持独立，总是关注于组件本身 <br/>
> 如果一个组件需要访问其父组件的上下文，那么该组件将不能在其它上下文中复用
