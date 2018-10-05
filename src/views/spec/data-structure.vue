<template>
  <view-container title="数据结构" back-url="spec">
    <el-card>
      <strong slot="header">数据约定</strong>
      <md-card :content="DataStructureMd"></md-card>
    </el-card>
    <el-card>
      <strong slot="header">菜单数据</strong>
      <md-card :content="MenuJsonMd" copy></md-card>
    </el-card>
  </view-container>
</template>

<script>
import DataStructureMd from '../../docs/spec/data-structure.md'
import MenuJsonMd from '../../docs/code/menu-json.md'
export default {
  name: 'DataStructure',
  data () {
    return {
      DataStructureMd,
      MenuJsonMd
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
