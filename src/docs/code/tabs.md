```html
<template>
  <el-tabs type="border-card" v-model="activeName">
    <el-tab-pane label="我的代码仓库" name="first">我的代码仓库</el-tab-pane>
    <el-tab-pane label="全部代码仓库" name="second">全部代码仓库</el-tab-pane>
    <el-tab-pane label="申请记录" name="third">申请记录</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: 'TabsComp'
}
</script>
```
