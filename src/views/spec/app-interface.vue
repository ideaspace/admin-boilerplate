<template>
  <view-container title="请求接口" back-url="spec">
    <el-card>
      <strong slot="header">初始化</strong>
      <md-card :content="AppInterfaceInitMd"></md-card>
      <md-card :content="ApiInitMd" copy></md-card>
    </el-card>
    <el-card>
      <strong slot="header">定义接口</strong>
      <md-card :content="AppInterfaceDefMd"></md-card>
      <md-card :content="ApiDefMd" copy></md-card>
    </el-card>
    <el-card>
      <strong slot="header">请求数据</strong>
      <md-card :content="AppInterfaceUseMd"></md-card>
      <md-card :content="ApiUseMd" copy></md-card>
    </el-card>
  </view-container>
</template>

<script>
import AppInterfaceInitMd from '../../docs/spec/app-interface-init.md'
import AppInterfaceDefMd from '../../docs/spec/app-interface-def.md'
import AppInterfaceUseMd from '../../docs/spec/app-interface-use.md'
import ApiInitMd from '../../docs/code/api-init.md'
import ApiDefMd from '../../docs/code/api-def.md'
import ApiUseMd from '../../docs/code/api-use.md'
export default {
  name: 'AppInterface',
  data () {
    return {
      AppInterfaceInitMd,
      AppInterfaceDefMd,
      AppInterfaceUseMd,
      ApiInitMd,
      ApiUseMd,
      ApiDefMd
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
