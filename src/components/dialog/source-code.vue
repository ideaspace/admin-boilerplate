<template>
  <el-dialog title="查看源码" width="1000px" :visible="dialogVisible" @close="onClose">
    <md-card :content="sourceCode" copy></md-card>
    <div slot="footer" class="dialog-footer">
      <el-button @click="onClose">关闭</el-button>
      <el-button type="primary" @click="onConfirm">确认</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'SourceCodeDialog',
  props: {
    sourceCode: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      dialogVisible: true
    }
  },
  methods: {
    onConfirm () {
      this.onClose('confirm')
    },
    onClose (type = 'dismiss') {
      this.dialogVisible = false
      this.$emit('on-close', {
        name: 'source',
        visible: this.dialogVisible,
        type: type
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.md {
  margin: -15px;
}
.el-dialog__wrapper {
  /deep/ {
    .el-dialog__body {
      background-color: #042b34;
    }
  }
}
</style>
