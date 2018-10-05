<template>
  <view-container>
    <el-card>
      <div slot="header">
        <strong>应用列表</strong>
        <div class="btn-groups">
          <el-button type="text" @click="onOpenDialog('Base')">查看源码</el-button>
        </div>
      </div>
      <el-table :data="tableData" v-loading="loading">
        <el-table-column prop="appName" label="应用名称"></el-table-column>
        <el-table-column prop="appCode" label="应用编码"></el-table-column>
        <el-table-column prop="codeHubType" label="代码仓库类型"></el-table-column>
        <el-table-column prop="serviceCount" label="服务个数"></el-table-column>
        <el-table-column prop="createTime" label="创建时间">
          <template slot-scope="scope">
            {{onFormatTime(scope.row.createTime)}}
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作" :show-overflow-tooltip="false">
          <template slot-scope="scope">
            <el-button type="text">服务列表</el-button>
            <el-button type="text">详情</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card>
      <div slot="header">
        <strong>应用列表 - 带分页</strong>
        <div class="btn-groups">
          <el-button type="text" @click="onOpenDialog('Page')">查看源码</el-button>
        </div>
      </div>
      <el-table :data="tableData" v-loading="loading">
        <el-table-column prop="appName" label="应用名称"></el-table-column>
        <el-table-column prop="appCode" label="应用编码"></el-table-column>
        <el-table-column prop="codeHubType" label="代码仓库类型"></el-table-column>
        <el-table-column prop="serviceCount" label="服务个数"></el-table-column>
        <el-table-column prop="createTime" label="创建时间">
          <template slot-scope="scope">
            {{onFormatTime(scope.row.createTime)}}
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作" :show-overflow-tooltip="false">
          <template slot-scope="scope">
            <el-button type="text">服务列表</el-button>
            <el-button type="text">详情</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination v-if="pageTotal > 5 " @current-change="val => onPageChange('pageNow', val)" @size-change="val => onPageChange('pageSize', val)" :current-page="page.pageNow" :total="pageTotal"></el-pagination>
    </el-card>
    <el-card>
      <div slot="header">
        <strong>应用列表 - 带选择</strong>
        <div class="btn-groups">
          <el-button type="text" @click="onOpenDialog('Select')">查看源码</el-button>
        </div>
      </div>
      <p>
        您已选择: <span style="margin-right: 8px" v-for="(v, idx) in selections" :key="idx">{{v.appName}}</span>
      </p>
      <el-table :data="tableData" @selection-change="onSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column prop="appName" label="应用名称"></el-table-column>
        <el-table-column prop="appCode" label="应用编码"></el-table-column>
        <el-table-column prop="codeHubType" label="代码仓库类型"></el-table-column>
        <el-table-column prop="serviceCount" label="服务个数"></el-table-column>
        <el-table-column prop="createTime" label="创建时间">
          <template slot-scope="scope">
            {{onFormatTime(scope.row.createTime)}}
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作" :show-overflow-tooltip="false">
          <template slot-scope="scope">
            <el-button type="text">服务列表</el-button>
            <el-button type="text">详情</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <source-code-dialog v-if="dialog.source" :source-code="sourceCode" @on-close="onCloseDialog"></source-code-dialog>
  </view-container>
</template>

<script>
import TableBaseMd from '../../../docs/code/table-base.md'
import TablePageMd from '../../../docs/code/table-page.md'
import TableSelectMd from '../../../docs/code/table-select.md'
import MdCard from '../../../components/md/MdCard'
import SourceCodeDialog from '../../../components/dialog/source-code'
import TableData from '../../../mocks/table'
import HTTP_APP from '@/api/app'
const isProd = process.env.NODE_ENV === 'production'
export default {
  name: 'TablePage',
  components: { SourceCodeDialog, MdCard },
  data () {
    return {
      dialog: {
        source: false
      },
      loading: false,
      tableData: [],
      page: {
        pageNow: 1,
        pageSize: 10
      },
      pageTotal: 0,
      sourceCode: '',
      selections: []
    }
  },
  mounted () {
    this.getApps()
  },
  methods: {
    async getApps () {
      this.loading = true
      const r = isProd ? TableData : await HTTP_APP.getApps()
      try {
        this.tableData = this.page.pageSize === 10 ? r.data.list : [...r.data.list, ...r.data.list]
        this.pageTotal = r.data.total
      } catch (e) {
      } finally {
        setTimeout(() => {
          this.loading = false
        }, 200)
      }
    },
    onPageChange (type, val) {
      this.page[type] = val
      this.getApps()
    },
    onOpenDialog (type) {
      const md = {
        TableBaseMd,
        TablePageMd,
        TableSelectMd
      }
      this.sourceCode = md[`Table${type}Md`]
      this.dialog.source = true
    },
    onCloseDialog () {
      this.dialog.source = false
    },
    onSelectionChange (rows) {
      this.$set(this, 'selections', rows)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
