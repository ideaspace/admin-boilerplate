```html
<template>
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
</template>

<script>
import HTTP_APP from '@/api/app'

export default {
  name: 'TablePage',
  data () {
    return {
      loading: false,
      tableData: []
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
        this.tableData = r.data.list
      } catch (e) {
        
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
```
