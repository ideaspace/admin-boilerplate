```html
<template>
  <el-card>
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
</template>

<script>
import HTTP_APP from '@/api/app'

export default {
  name: 'TablePage',
  data () {
    return {
      loading: false,
      tableData: [],
      page: {
        pageNow: 1,
        pageSize: 10
      },
      pageTotal: 0
    }
  },
  mounted () {
    this.getApps()
  },
  methods: {
    async getApps () {
      this.loading = true
      const r = await HTTP_APP.getApps()
      try {
        // 模拟分页效果，实际开发请给予删除
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
```
