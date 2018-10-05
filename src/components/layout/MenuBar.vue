<template>
  <div class="menu"
       :class="{
        'is-collapse': isCollapse
       }"
  >
    <div class="menu-head">
      <strong>{{modMenuData.name}}</strong>
    </div>
    <div class="menu-body">
      <el-menu :default-active="current">
        <template
                v-for="item in modMenuData.children"
        >
          <el-menu-item
                  @click="onSelect(item)"
                  v-if="item.url"
                  :index="item.url"
                  :key="item.url"
          >
            <i class="fa" :class="`fa-${item.icon}`"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
          <el-submenu v-if="!item.url" :index="item.id + ''" :key="item.id">
            <template slot="title">
              <i class="fa" :class="`fa-${item.icon}`"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item
                    @click="onSelect(i)"
                    v-for="i in item.children"
                    :key="i.id"
                    :index="i.url"
            >
              <span slot="title">{{i.name}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div class="menu-collapse"
         :class="{
        'menu-collapse--left': !isCollapse,
        'menu-collapse--right': isCollapse
      }" @click="onToggleCollapse"
    >
      <div class="menu-collapse--bg"></div>
      <span>
        <i class="fa" :class="isCollapse ? 'fa-angle-double-right' : 'fa-angle-double-left'"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MenuBar',
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapState('menu', ['modMenuData', 'menuItemActive']),
    current () {
      return this.menuItemActive && this.menuItemActive.url
    }
  },
  methods: {
    onSelect (item) {
      item.url && this.$router.push({
        name: item.url
      })
    },
    onToggleCollapse () {
      this.isCollapse = !this.isCollapse
      this.$emit('on-collapse', this.isCollapse)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.menu {
  position: absolute;
  color: #333;
  top: 0;
  bottom: 0;
  left: 0;
  width: 180px;
  box-shadow: 0 0 1px 0 rgba(2, 7, 30, .15);
  z-index: 99;
  background: #fff;
  transition: all 0.2s ease;
  &.is-collapse {
    left: -180px;
  }
  &-head {
    padding: 0 20px;
    cursor: default;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid rgba(2, 7, 30, .04);
  }
  &-collapse {
    position: absolute;
    right: 0;
    top: 50%;
    width: 20px;
    height: 40px;
    margin-top: -20px;
    cursor: pointer;
    transition: all 0.1s ease, 0.1s ease;
    > span {
      position: absolute;
      right: 1px;
      top: 50%;
      z-index: 11;
      color: #999;
      margin-top: -10px;
      transition: all 0.1s ease, 0.1s ease;
      transform: scale(.8);
    }
    &--bg {
      width: 0;
      height: 40px;
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      z-index: 10;
      border-bottom: 8px solid transparent;
      border-left: none;
      border-top: 8px solid transparent;
      transition: all 0.1s ease, 0.1s ease;
    }
    &--left {
      .menu-collapse--bg {
        border-left: none;
        border-right: 14px solid #f5f5f5;
      }
      &:hover {
        > span {
          right: 4px;
        }
        .menu-collapse--bg {
          border-left: none;
          border-right: 20px solid #f7f7f7;
        }
      }
    }
    &--right {
      right: -15px;
      .menu-collapse--bg {
        border-right: none;
        border-left: 20px solid #fff;
      }
      &:hover {
        right: -20px;
        > span {
          right: 3px;
        }
      }
    }
    &:hover {
      > span {
        color: #666;
        transform: scale(.95);
      }
      .menu-collapse--bg {
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
      }
    }
  }
}

.el-menu {
  border-right: 0;
  &-item {
    &.is-active {
      background-color: #ecf5ff;
      &:hover {
        background-color: #ecf5ff;
      }
    }
  }
  /deep/ {
    .el-submenu__title {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      i {
        margin-right: 5px;
      }
    }
    .el-submenu__icon-arrow {
      right: 10px;
    }
  }
}

.el-submenu {
  .el-menu-item {
    padding: 0 20px;
    min-width: 180px;
  }
}

.el-menu-item {
  color: #475669;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  i {
    margin-right: 5px;
  }
}
</style>
