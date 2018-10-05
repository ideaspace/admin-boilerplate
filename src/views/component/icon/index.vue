<template>
  <view-container title="字体图标" back-url="spec">
    <el-card>
      <strong slot="header">锦上添花</strong>
      <md-card :content="FontIconSpecMd"></md-card>
    </el-card>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-form size="medium" :model="form" @submit.native.prevent>
          <el-form-item>
            <el-input v-model="form.q" @keyup.native="onQuery" @clear="onQuery" clearable>
              <el-button slot="append" icon="el-icon-search" @click="onQuery"></el-button>
            </el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div class="icon-cont" style="min-height: 60px" v-loading="loading && !fontIconList.length">
      <ul class="icon-list" v-if="fontIconList.length">
        <li class="icon-item" v-for="(v, idx) in fontIconList" :key="idx" @click="onCopy(v, $event)">
          <div class="icon">
            <i v-if="!v.copy" class="fa" :class="`fa-${v.name}`"></i>
            <span v-if="v.copy">Copied!</span>
          </div>
          <div class="name">{{v.name}}</div>
        </li>
      </ul>
      <h4 v-if="!fontIconList.length && !loading">没有找到图标</h4>
    </div>
  </view-container>
</template>

<script>
import ClipboardJS from 'clipboard'
import FontIconSpecMd from '../../../docs/comp/font-icon.md'
import IconDataList from './../../../mocks/icon'
import { getFontIcons } from '../../../api/app'
const isProd = process.env.NODE_ENV === 'production'
export default {
  name: 'FontIcon',
  data () {
    return {
      loading: true,
      FontIconSpecMd,
      fontIconList: [],
      form: {
        q: ''
      }
    }
  },
  mounted () {
    if (!isProd) {
      getFontIcons().then(r => {
        this.fontIconList = r.data.data
        this.fontIconCopyList = r.data.data
        setTimeout(() => {
          this.loading = false
        }, 800)
      })
    } else {
      this.fontIconList = IconDataList.data
      this.fontIconCopyList = IconDataList.data
    }
    this.Clipboard = new ClipboardJS('.icon-item', {
      text: e => e.tagName === 'LI' && e.querySelector('.fa').outerHTML.replace(/\s+data-.+=""/, '')
    })
  },
  methods: {
    onQuery () {
      if (!this.form.q) {
        return (
          this.fontIconList = [...this.fontIconCopyList]
        )
      }
      return (
        this.fontIconList = this.fontIconCopyList.filter(v => v.name.indexOf(this.form.q) > -1)
      )
    },
    onCopy (v) {
      this.Clipboard.on('success', e => {
        if (e.trigger.textContent === v.name) {
          v.copy = true
          setTimeout(() => {
            v.copy = false
          }, 800)
          e.clearSelection()
        }
      })
    }
  },
  beforeDestroy () {
    this.Clipboard.destroy()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-form {
  margin-top: 20px;
}
.icon-cont {
  padding-left: 1em;
}
.icon-list {
  > li {
    margin-bottom: 8px;
    display: inline-block;
    width: calc(100%/10);
    transition: all ease .15s;
    &:hover {
      cursor: pointer;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
      .icon {
        border-radius: 4px 4px 0 0;
        background-color: $primary-blue-color;
        color: #fff;
      }
    }
    > div {
      transition: all ease .15s;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    > .icon {
      min-height: 90px;
      .fa {
        font-size: 36px;
      }
    }
    > .name {
      padding: 10px 0;
      font-size: 12px;
      line-height: 1;
    }
  }
}
</style>
