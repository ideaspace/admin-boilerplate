<template>
  <view-container title="代码规范" back-url="spec">
    <el-card>
      <strong slot="header">代码如歌</strong>
      <md-card :content="CodeSpecMd"></md-card>
    </el-card>
  </view-container>
</template>

<script>
import CodeSpecMd from '../../docs/spec/code-spec.md'
export default {
  name: 'CodeSpec',
  data () {
    return {
      CodeSpecMd
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
