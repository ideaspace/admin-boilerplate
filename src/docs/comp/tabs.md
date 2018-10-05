本工程在初始化的时候，已针对分页设置了 `layout` 属性，以保障全局的样式统一，如果您需要进一步定制风格，可以在每次组件调用时重置。具体做法参考[官方文档](//element.eleme.io/#/zh-CN/component/pagination)

需要设置**数据总数**，翻页时需要两个回调函数，分别对应**页码**和**页数**

- 总数 `pageTotal`
- 页码 `@current-change="val => onPageChange('pageNow', val)"`
- 页数 `@size-change="val => onPageChange('pageSize', val)"`

通过传入参数进行合并复用，简化代码。具体参考源码
