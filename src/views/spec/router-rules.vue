<template>
  <view-container title="路由规则" back-url="spec">
    <el-card>
      <strong slot="header">路由声明</strong>
      <md-card :content="RouterSpecMd"></md-card>
      <md-card :content="RouterRulesCodeMd" copy></md-card>
    </el-card>
    <el-card>
      <strong slot="header">路由守卫</strong>
      <md-card :content="RouterGuardMd"></md-card>
    </el-card>
  </view-container>
</template>

<script>
import RouterSpecMd from '../../docs/spec/router-spec.md'
import RouterGuardMd from '../../docs/spec/router-guard.md'
import RouterRulesCodeMd from '../../docs/code/router-rules.md'
export default {
  name: 'RouterRules',
  data () {
    return {
      RouterSpecMd,
      RouterGuardMd,
      RouterRulesCodeMd
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
