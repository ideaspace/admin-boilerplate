```html
<template>
  <el-pagination
    @current-change="val => onPageChange('pageNow', val)"
    @size-change="val => onPageChange('pageSize', val)"
    :current-page="page.pageNow"
    :total="pageTotal"
  ></el-pagination>
</template>
<script>
export default {
  data () {
    return {
      page: {
        pageNow: 1,
        pageSize: 10
      },
      pageTotal: 0
    }
  },
  methods: {
    onPageChange (type, val) {
      this.page[type] = val
    }
  }
}
</script>
```
