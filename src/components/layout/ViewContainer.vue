<template>
  <el-container direction="vertical">
    <el-main v-scroll="onScroll">
      <slot name="main"></slot>
      <slot></slot>
      <transition>
        <el-button v-show="show" class="btn-scroll--top" icon="el-icon-caret-top" @click="toTop"></el-button>
      </transition>
    </el-main>
    <slot name="footer"></slot>
  </el-container>
</template>

<script>
import ViewHeader from './ViewHeader'
import { mapActions } from 'vuex'
import { goTo } from '../../utils/goTo'

export default {
  name: 'ViewContainer',
  components: { ViewHeader },
  inheritAttrs: false,
  props: {
    backUrl: {
      type: String,
      default () {
        return ''
      }
    },
    title: {
      type: String,
      default () {
        return ''
      }
    },
    info: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.createViewData(this.$props)
  },
  methods: {
    ...mapActions('container', ['createViewData']),
    onScroll (e) {
      this.show = e.target.scrollTop > 300
    },
    toTop () {
      goTo(document.querySelector('.el-main'))
    }
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  position: absolute;
  top: 50px;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  .el-main {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    overflow-y: auto;
    padding-bottom: 80px;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
}
.btn-scroll--top {
  position: fixed;
  z-index: 10110;
  right: 20px;
  bottom: 20px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 0;
  box-shadow: 0 0 6px rgba(0,0,0,.12);
  background-color: $primary-blue-color;
  &:hover {
    background-color: $primary-blue-color;
  }
  /deep/ {
    i {
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      font-size: 16px;
      color: #fff
    }
  }
}
.v-enter,
.v-leave-to {
  transform: scale(0) rotate(-45deg);
}
</style>
