<template>
  <view-container>
    <el-card>
      <div slot="header">
        <strong>内容隔离</strong>
        <div class="btn-groups">
          <el-button type="text" @click="onOpenDialog">查看源码</el-button>
        </div>
      </div>
      <md-card :content="CardCompMd"></md-card>
    </el-card>
    <source-code-dialog v-if="dialog.source" :source-code="CardCodeMd" @on-close="onCloseDialog"></source-code-dialog>
  </view-container>
</template>

<script>
import CardCompMd from '../../../docs/comp/card.md'
import CardCodeMd from '../../../docs/code/card.md'
import SourceCodeDialog from '../../../components/dialog/source-code'
export default {
  name: 'CardPage',
  components: { SourceCodeDialog },
  data () {
    return {
      dialog: {
        source: false
      },
      CardCompMd,
      CardCodeMd
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
