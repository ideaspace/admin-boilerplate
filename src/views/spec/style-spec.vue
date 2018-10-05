<template>
  <view-container title="样式声明" back-url="spec">
    <el-card>
      <strong slot="header">样式表</strong>
      <md-card :content="StyleSpecMd"></md-card>
    </el-card>
  </view-container>
</template>

<script>
import StyleSpecMd from '../../docs/spec/style-spec.md'
export default {
  name: 'StyleSpec',
  data () {
    return {
      StyleSpecMd
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
