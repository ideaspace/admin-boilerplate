<template>
  <view-container title="重要说明" back-url="spec">
    <el-card>
      <strong slot="header">规范说明</strong>
      <md-card :content="ImportantThingsMd"></md-card>
    </el-card>
  </view-container>
</template>

<script>
import ImportantThingsMd from '../../docs/spec/important-things.md'
export default {
  name: 'ImportantThings',
  data () {
    return {
      ImportantThingsMd
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
