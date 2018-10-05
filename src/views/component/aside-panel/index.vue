<template>
  <view-container>
    <el-card>
      <div slot="header">
        <strong>高级配置</strong>
        <div class="btn-groups">
          <el-button type="text" @click="onOpenDialog('source')">查看源码</el-button>
        </div>
      </div>
      <md-card :content="AsidePanelCompMd"></md-card>
      <el-button type="primary" @click="onOpenDialog('aside')">新建配置</el-button>
    </el-card>
    <aside-panel v-if="dialog.aside" @on-close="onCloseDialog('aside')">
      <div class="aside-panel">
        <div class="aside-panel--hd">
          <h4>端口&域名</h4>
          <span>设置服务对外的端口或域名、设置容器的端口，至多只能有一个端口使用域名转发方式</span>
        </div>
        <div class="aside-panel--bd">
          展示内容
        </div>
      </div>
      <div class="aside-panel">
        <div class="aside-panel--hd">
          <h4>系统资源规格</h4>
        </div>
        <div class="aside-panel--bd">
          展示内容
        </div>
      </div>
    </aside-panel>
    <source-code-dialog v-if="dialog.source" :source-code="AsidePanelCodeMd" @on-close="onCloseDialog('source')"></source-code-dialog>
  </view-container>
</template>

<script>
import AsidePanelCompMd from '../../../docs/comp/aside-panel.md'
import AsidePanelCodeMd from '../../../docs/code/aside-panel.md'
import AsidePanel from '../../../components/aside-panel/index'
import SourceCodeDialog from '../../../components/dialog/source-code'
export default {
  name: 'AsidePanelPage',
  components: { SourceCodeDialog, AsidePanel },
  data () {
    return {
      dialog: {
        aside: false,
        source: false
      },
      AsidePanelCompMd,
      AsidePanelCodeMd
    }
  },
  methods: {
    onOpenDialog (type) {
      this.dialog[type] = true
    },
    onCloseDialog (type) {
      this.dialog[type] = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-button {
  &:not(.el-button--text) {
    margin-top: 16px;
  }
}
</style>
