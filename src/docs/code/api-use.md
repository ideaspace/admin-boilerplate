```html
<template>
  <!-- 定义组件模板 -->
</template>

<script>
// 定义组件业务逻辑
import HTTP_DEPLOY_ENV from '@/api/deploy-env' // 使用常量形式来引用接口

export default {
  name: 'Example' // 建议大写驼峰形式
  data () {
    return {
      envList: []
    }
  },
  mounted () {
    this.getEnvList()
  },
  methods: {
    async getEnvList () {
      const r = await HTTP_DEPLOY_ENV.getEnvList()
      try {
        this.envList = r.data
      } catch (e) {
        
      } finally {
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* 定义组件内样式 */
</style>
```
