<template>
  <view-container>
    <el-card>
      <div slot="header">
        <strong>数据分页</strong>
        <div class="btn-groups">
          <el-button type="text" @click="onOpenDialog()">查看源码</el-button>
        </div>
      </div>
      <el-pagination @current-change="val => onPageChange('pageNow', val)" @size-change="val => onPageChange('pageSize', val)" :current-page="page.pageNow" :total="pageTotal"></el-pagination>
      <md-card :content="PageNaviCompMd"></md-card>
    </el-card>
    <source-code-dialog v-if="dialog.source" :source-code="sourceCode" @on-close="onCloseDialog"></source-code-dialog>
  </view-container>
</template>

<script>
import PageNaviCompMd from '../../../docs/comp/pagination.md'
import PageNaviCodeMd from '../../../docs/code/pagination.md'
import SourceCodeDialog from '../../../components/dialog/source-code'
export default {
  name: 'PaginationPage',
  components: { SourceCodeDialog },
  data () {
    return {
      PageNaviCompMd,
      dialog: {
        source: false
      },
      sourceCode: '',
      page: {
        pageNow: 1,
        pageSize: 10
      },
      pageTotal: 1000
    }
  },
  methods: {
    onOpenDialog () {
      this.sourceCode = PageNaviCodeMd
      this.dialog.source = true
    },
    onCloseDialog () {
      this.dialog.source = false
    },
    onPageChange () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-pagination {
  margin-bottom: 16px;
}
</style>
