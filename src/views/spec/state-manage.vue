<template>
  <view-container title="状态管理" back-url="spec">
    <el-card>
      <strong slot="header">Vuex 应用</strong>
      <md-card :content="StateManageSpecMd"></md-card>
    </el-card>
  </view-container>
</template>

<script>
import StateManageSpecMd from '../../docs/spec/state-manage.md'
export default {
  name: 'StateManage',
  data () {
    return {
      StateManageSpecMd
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
