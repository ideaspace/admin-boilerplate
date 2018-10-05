<template>
  <view-container info="为了更好的使用前端样板工程，请认真阅读文档">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(v, idx) in menuCard" :key="idx" @click.native="onJump(v)">
        <div class="card">
          <div class="card-hd">
            <span>
              <i class="fa" :class="`fa-${v.icon}`"></i>
            </span>
          </div>
          <div class="card-bd">
            <span>{{v.name}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </view-container>
</template>

<script>
import ImportantThingsMd from '../../docs/spec/important-things.md'
export default {
  name: 'SpecDocs',
  data () {
    return {
      menuCard: [
        {
          name: '重要说明',
          icon: 'bullhorn',
          url: 'important-things'
        },
        {
          name: '文件目录',
          icon: 'folder-open',
          url: 'file-directory'
        },
        {
          name: '请求接口',
          icon: 'at',
          url: 'app-interface'
        },
        {
          name: '路由规则',
          icon: 'map-signs',
          url: 'router-rules'
        },
        {
          name: '状态管理',
          icon: 'charging-station',
          url: 'state-manage'
        },
        {
          name: '数据结构',
          icon: 'box',
          url: 'data-structure'
        },
        {
          name: '代码规范',
          icon: 'code',
          url: 'code-spec'
        },
        {
          name: '样式声明',
          icon: 'sass',
          url: 'style-spec'
        }
      ],
      ImportantThingsMd
    }
  },
  methods: {
    onJump (v) {
      v.url && this.$router.push({
        name: v.url
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  border: 1px solid #ebeef5;
  background-color: #fff;
  margin-bottom: 16px;
  transition: all ease .3s;
  cursor: pointer;
  &:hover {
    border-color: $primary-blue-color;
    .card-hd {
      background-color: $primary-blue-color;
      .fa {
        color: #fff;
      }
    }
    .card-bd {
      border-color: transparent;
    }
  }
  &-hd,
  &-bd {
    transition: all ease .3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-hd {
    height: 160px;
    .fa {
      transition: all ease-out .15s;
      font-size: 42px;
      color: #495057;
    }
  }
  &-bd {
    padding: 10px 15px;
    border-top: 1px solid #ebeef5;
  }
}
</style>
