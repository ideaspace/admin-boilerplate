<template>
  <div class="aside-dialog--wrapper">
    <transition enter-active-class="fade-in" leave-active-class="fade-out">
      <div v-if="visible" class="aside-dialog--backdrop"></div>
    </transition>
    <transition enter-active-class="slide-in-right" leave-active-class="slide-out-right">
      <div v-if="visible" class="aside-dialog--container">
        <div class="aside-dialog--content">
          <div class="aside-dialog--body">
            <slot></slot>
          </div>
        </div>
        <div class="aside-dialog--footer">
          <div class="aside-dialog--button">
            <el-button type="primary" :loading="loading.confirm" @click="onConfirm">确定</el-button>
            <el-button type="default" @click="onClose">取消</el-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'AsidePanel',
  props: {},
  data () {
    return {
      loading: {
        confirm: false
      },
      visible: false
    }
  },
  mounted () {
    this.visible = true
  },
  methods: {
    onConfirm () {
      this.loading.confirm = true
      this.onClose('confirm')
    },
    onClose (type = 'dismiss') {
      this.visible = false
      setTimeout(() => {
        this.$emit('on-close', {
          name: 'aside',
          visible: this.visible,
          type: type
        })
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
.aside-dialog {
  &--backdrop {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1010;
    background-color: #373737;
    background-color: rgba(55, 55, 55, 0.6);
  }
  &--container {
    position: fixed;
    overflow-y: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 60%;
    z-index: 1011;
    background-color: #fff;
    transition: all ease-in-out 0.3s;
  }
  &--content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
  }
  &--header {
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h3 {
      font-size: 20px;
    }
  }
  &--header-close {
    cursor: pointer;
    font-size: 22px;
  }
  &--panel-hd,
  &--panel-bd,
  &--panel-ft {
    padding: 8px 16px;
  }
  &--panel-hd {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    > h4 {
      position: relative;
      padding: 0 32px 0 16px;
      font-size: 16px;
      &:before {
        position: absolute;
        content: '';
        width: 3px;
        height: 16px;
        left: 0;
        top: 4px;
        background-color: #46a0fc;
      }
    }
  }
  &--footer {
    display: flex;
    position: absolute;
    flex-direction: column;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: #fbfbfb;
    .el-button {
      padding: 9px 30px;
    }
  }
  &--config {
    border-top: 1px dashed #e5e5e5;
    padding: 14px 16px;
    background-color: #fbfbfb;
  }
  &--button {
    border-top: 1px dashed #e5e5e5;
    padding: 12px 16px;
    background-color: rgba(238, 241, 244, 0.55);
  }
}
</style>
