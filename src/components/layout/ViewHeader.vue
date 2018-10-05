<template>
  <el-header height="50px" class="main-header">
    <h4>
      <el-button icon="el-icon-back" @click="onJump('back')" v-if="hasBack"></el-button>
      {{viewMeta.title || menuItemActive && menuItemActive.name}}
    </h4>
    <h5 v-if="viewMeta.info">{{viewMeta.info}}</h5>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">前端样板</el-breadcrumb-item>
      <el-breadcrumb-item
              v-for="(v,index) in breadcrumbList"
              :key="index"
      >
        <span class="el-breadcrumb__inner is-link" @click="onJump('breadcrumb', v)" v-if="v && v.url && v.id !== menuItemActive.id">{{v.name}}</span>
        <span v-else>{{v && v.name}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </el-header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ViewHeader',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('container', ['viewMeta']),
    ...mapState('menu', ['resourceList', 'parentIds', 'menuItemActive']),
    breadcrumbList () {
      const breadcrumbList = []
      for (let id of this.parentIds) {
        for (let o of this.resourceList) {
          if (o.id === id) {
            breadcrumbList.push(o)
            break
          }
        }
      }
      breadcrumbList.push(this.menuItemActive)
      return breadcrumbList
    },
    hasBack () {
      return !!this.viewMeta.backUrl
    }
  },
  methods: {
    onJump (type, val) {
      let toName = ''
      if (val) {
        toName = val.url
      } else {
        toName = this.viewMeta.backUrl
      }
      this.$router.push({
        name: toName,
        params: this.$route.params,
        query: this.$route.query
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 20px;
  height: 40px;
  border-bottom: 1px solid #eee;
  h4 {
    font-size: 14px;
    .el-button {
      padding: 5px;
      font-size: 14px;
      margin-right: 8px;
      border-radius: 50%;
    }
  }
}
.el-breadcrumb {
  &__item {
    font-size: 12px;
    /deep/ .el-breadcrumb__inner {
      color: #475669;
    }
    &:not(:hover) {
      /deep/ .el-breadcrumb__inner {
        color: #475669;
      }
    }
    &:last-child {
      /deep/ .el-breadcrumb__inner {
        color: #99a9bf;
      }
    }
  }
}
</style>
