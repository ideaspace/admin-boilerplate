<template>
  <view-container>
    <el-card>
      <div slot="header">
        <strong>卡片式</strong>
        <div class="btn-groups">
          <el-button type="text" @click="onOpenDialog">查看源码</el-button>
        </div>
      </div>
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane label="我的代码仓库" name="first">我的代码仓库</el-tab-pane>
        <el-tab-pane label="全部代码仓库" name="second">全部代码仓库</el-tab-pane>
        <el-tab-pane label="申请记录" name="third">申请记录</el-tab-pane>
      </el-tabs>
    </el-card>
    <source-code-dialog v-if="dialog.source" :source-code="TabsCodeMd" @on-close="onCloseDialog"></source-code-dialog>
  </view-container>
</template>

<script>
import TabsCodeMd from '../../../docs/code/tabs.md'
import SourceCodeDialog from '../../../components/dialog/source-code'
export default {
  name: 'TabsPage',
  components: { SourceCodeDialog },
  data () {
    return {
      dialog: {
        source: false
      },
      activeName: 'first',
      TabsCodeMd
    }
  },
  methods: {
    onOpenDialog () {
      this.dialog.source = true
    },
    onCloseDialog () {
      this.dialog.source = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
