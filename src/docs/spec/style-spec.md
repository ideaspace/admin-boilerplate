#### 预处理

本工程使用 `sass` 默认使用预处理器。

#### 全局样式

位于 `src/assets` 目录，当您需要设置全局的样式或者重置组件库的样式时，请在此目录声明。

需要注意的是，样式需要按**组件的维度**来细分。变量文件 `_variables.scss` 已默认加载，无需在其他地方引入。

``` html
assets/
├── _animate.scss
├── _base.scss
├── _card.scss
├── _dialog.scss
├── _dialog.scss
├── _variables.scss
└── style.scss
```

#### 组件样式

位于每个 `src/views/*.vue` 单文件，并通过 `<style lang="scss"></style>` 声明。

```html
<style lang="scss">
/* 全局样式 */
</style>

<style lang="scss" scoped>
/* 组件样式 */
</style>
```

#### 深度作用选择器


如果你希望 `scoped` 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 `/deep/` 操作符

```html
<style lang="scss" scoped>
.a /deep/ .b { /* ... */ }
</style>
```

上述代码将会编译成：

```html
.a[data-v-f3f3eg9] .b { /* ... */ }
```

#### 动态生成的内容


通过 `v-html` 创建的 DOM 内容不受 scoped 样式影响，但是你仍然可以通过深度作用选择器来为他们设置样式。
