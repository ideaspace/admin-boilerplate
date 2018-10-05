```html
<template>
  <view-container>
    <el-card>
      <div slot="header">
        <strong>高级配置</strong>
        <div class="btn-groups">
          <el-button type="text" @click="onOpenDialog('code')">查看源码</el-button>
        </div>
      </div>
      <el-button type="primary" @click="onOpenDialog">新建配置</el-button>
    </el-card>
    <aside-panel v-if="dialog.aside" @on-close="onCloseDialog">
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
  </view-container>
</template>

<script>
import AsidePanel from '../../../components/aside-panel/index'
export default {
  name: 'AsidePanelPage',
  components: { AsidePanel },
  data () {
    return {
      dialog: {
        aside: false
      }
    }
  },
  methods: {
    onOpenDialog () {
      this.dialog.aside = true
    },
    onCloseDialog () {
      this.dialog.aside = false
    }
  }
}
</script>
```
