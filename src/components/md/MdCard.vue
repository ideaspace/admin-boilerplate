<template>
  <div v-highlight class="md">
    <div class="md-cont" v-html="content"></div>
    <el-tooltip v-if="copy" content="复制代码" placement="top">
      <span class="md-copy">
        <i class="fa fa-paste"></i>
      </span>
    </el-tooltip>
  </div>
</template>
<script>
import ClipboardJS from 'clipboard'
export default {
  name: 'MdCard',
  props: {
    content: {
      type: String,
      default () {
        return ''
      }
    },
    copy: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  mounted () {
    this.Clipboard = new ClipboardJS('.md-copy', {
      target: e => e.parentElement
    })
    this.Clipboard.on('success', e => {
      this.$message.success(`源码已复制到剪切板`)
      e.clearSelection()
    })
  },
  beforeDestroy () {
    this.Clipboard.destroy()
  }
}
</script>
<style lang="scss" scoped>
.md {
  position: relative;
  & + & {
    margin-top: 16px;
  }
  &-copy {
    position: absolute;
    right: 15px;
    top: 5px;
    width: 16px;
    height: 16px;
    z-index: 10;
    color: #4e9bd4;
    cursor: pointer;
    > i {
      font-size: 16px;
    }
  }
  &-cont {
    overflow: auto;
    font-size: 14px;
    line-height: 1.5;
    /deep/ {
      h1,h2,h3,h4,h5,h6,p,pre,ul {
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      blockquote {
        margin: 16px 0;
        padding: 15px 20px;
        border-left: 4px solid #4e9bd4;
        background-color: #edf5fd;
        > p {
          line-height: 1.8;
        }
      }
      li {
        margin-bottom: 4px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      p, ul {
        code {
          font-family: Consolas,Menlo,Courier,monospace;
          background-color: #edf5fd;
          border-radius: 2px;
          padding: 1px 4px;
          line-height: 1;
          color: #6E7986;
          margin: 0 4px;
        }
      }
      ul {
        padding-left: 2em;
        list-style: disc;
        line-height: 1.5;
      }
      a {
        color: #4e9bd4;
        padding: 0 2px;
        &:hover {
          text-decoration: underline;
        }
      }
      pre {
        font-family: Consolas,Menlo,Courier,monospace;
        line-height: normal;
        code {
          font-family: inherit;
        }
      }
    }
  }
}
</style>
