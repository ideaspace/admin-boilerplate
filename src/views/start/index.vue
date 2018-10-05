<template>
  <view-container info="为了更好的使用前端样板工程，请认真阅读文档">
    <el-card>
      <strong slot="header">工程说明</strong>
      <md-card :content="BoilerplateExplanationMd"></md-card>
    </el-card>
    <el-card>
      <strong slot="header">依赖技术栈</strong>
      <md-card :content="TechnologyStackMd"></md-card>
    </el-card>
    <el-card>
      <strong slot="header">单文件组件</strong>
      <md-card :content="SingleVueCompMd"></md-card>
      <md-card :content="SingleVueCodeMd" copy></md-card>
    </el-card>
    <el-card>
      <strong slot="header">目录结构</strong>
      <md-card :content="DirectoryStructureMd"></md-card>
    </el-card>
  </view-container>
</template>

<script>
import BoilerplateExplanationMd from '../../docs/guide/boilerplate-explanation.md'
import TechnologyStackMd from '../../docs/guide/technology-stack.md'
import SingleVueCompMd from '../../docs/guide/single-vue-component.md'
import SingleVueCodeMd from '../../docs/code/single-vue-component.md'
import DirectoryStructureMd from '../../docs/guide/directory-structure.md'
export default {
  name: 'SpecDocs',
  data () {
    return {
      BoilerplateExplanationMd,
      TechnologyStackMd,
      SingleVueCompMd,
      SingleVueCodeMd,
      DirectoryStructureMd
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-card {
  & + & {
    margin-top: 16px;
  }
}
</style>
