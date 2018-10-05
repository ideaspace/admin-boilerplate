<template>
  <view-container title="目录文件" back-url="spec">
    <el-card>
      <strong slot="header">初始的目录和文件</strong>
      <md-card :content="FileDirectoryBaseMd"></md-card>
    </el-card>
    <el-card>
      <strong slot="header">扩展的目录和文件</strong>
      <md-card :content="FileDirectoryExtraMd"></md-card>
    </el-card>
  </view-container>
</template>

<script>
import FileDirectoryBaseMd from '../../docs/spec/file-directory-base.md'
import FileDirectoryExtraMd from '../../docs/spec/file-directory-extra.md'
export default {
  name: 'FileDirectory',
  data () {
    return {
      FileDirectoryBaseMd,
      FileDirectoryExtraMd
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
