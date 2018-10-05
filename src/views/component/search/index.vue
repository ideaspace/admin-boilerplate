<template>
  <view-container>
    <el-card>
      <div slot="header">
        <strong>条件搜索</strong>
        <div class="btn-groups">
          <el-button type="text" @click="onOpenDialog('Condition')">查看源码</el-button>
        </div>
      </div>
      <el-form :model="form" :rules="rules">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="所属应用">
              <el-select v-model="form.appId" filterable clearable placeholder="所属应用" @change="val => onSelectChange('app', val)">
                <el-option v-for="v in selectList.app" :key="v.appId" :label="v.appName" :value="v.appId">
                  <span>{{ v.appName }}</span>
                  <span style="color: #8492a6; font-size: 13px">({{ v.appCode }})</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="服务名称">
              <el-select v-model="form.serviceId" :disabled="!form.appId" clearable placeholder="服务名称">
                <el-option v-for="v in selectList.service" :key="v.serviceId" :label="v.serviceName" :value="v.serviceId" @change="val => onSelectChange('service', val)">
                  <span>{{ v.serviceName }}</span>
                  <span style="color: #8492a6; font-size: 13px">({{ v.serviceCode }})</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="服务版本">
              <el-input v-model="form.serviceVerNo" placeholder="请输入服务版本" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="程序包名">
              <el-input v-model="form.buildPackageName" placeholder="请输入程序包名" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="分支/Tag">
              <el-input v-model="form.branchName" :placeholder="`请输入分支/Tag名称`" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="构建说明">
              <el-input v-model="form.description" placeholder="请输入构建说明" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="onQuery">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <div slot="header">
        <strong>高级搜索</strong>
        <div class="btn-groups">
          <el-button type="text" @click="onOpenDialog('Advance')">查看源码</el-button>
        </div>
      </div>
      <div class="text-right">
        <el-form :model="form" :inline="true" :rules="rules">
          <el-form-item label="所属应用">
            <el-select v-model="form.appId" filterable clearable placeholder="所属应用" @change="val => onSelectChange('app', val)">
              <el-option v-for="v in selectList.app" :key="v.appId" :label="v.appName" :value="v.appId">
                <span>{{ v.appName }}</span>
                <span style="color: #8492a6; font-size: 13px">({{ v.appCode }})</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="服务名称">
            <el-select v-model="form.serviceId" :disabled="!form.appId" clearable placeholder="服务名称">
              <el-option v-for="v in selectList.service" :key="v.serviceId" :label="v.serviceName" :value="v.serviceId" @change="val => onSelectChange('service', val)">
                <span>{{ v.serviceName }}</span>
                <span style="color: #8492a6; font-size: 13px">({{ v.serviceCode }})</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onQuery()">查询</el-button>
            <el-button type="text" @click="onToggle">
              高级搜索
              <el-icon :name="expand ? 'caret-top' : 'caret-bottom'"></el-icon>
            </el-button>
          </el-form-item>
          <div class="search-cont--advance" v-show="expand">
            <el-form-item>
              <el-input v-model="form.branchName" placeholder="分支/Tag"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.appDeployVerNo" placeholder="发布版本号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.description" placeholder="说明"></el-input>
            </el-form-item>
            <el-form-item>
              <el-date-picker v-model="form.startTime" type="datetime" value-format="timestamp" placeholder="开始时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-date-picker v-model="form.endTime" type="datetime" value-format="timestamp" placeholder="结束时间">
              </el-date-picker>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-card>
    <source-code-dialog v-if="dialog.source" :source-code="sourceCode" @on-close="onCloseDialog"></source-code-dialog>
  </view-container>
</template>

<script>
import SearchConditionMd from '../../../docs/code/search-condition.md'
import SearchAdvanceMd from '../../../docs/code/search-advance.md'
import SourceCodeDialog from '../../../components/dialog/source-code'
export default {
  name: 'SearchPage',
  components: { SourceCodeDialog },
  data () {
    return {
      dialog: {
        source: false
      },
      form: {
        appId: '',
        serviceId: '',
        serviceVerNo: '',
        buildPackageName: '',
        branchName: '',
        description: '',
        appDeployVerNo: ''
      },
      rules: {},
      selectList: {
        app: [],
        service: []
      },
      expand: false,
      sourceCode: ''
    }
  },
  methods: {
    onQuery () {},
    onOpenDialog (type) {
      const md = {
        SearchConditionMd,
        SearchAdvanceMd
      }
      this.sourceCode = md[`Search${type}Md`]
      this.dialog.source = true
    },
    onCloseDialog () {
      this.dialog.source = false
    },
    onToggle () {
      this.expand = !this.expand
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-select {
  width: 100%;
}
.el-button {
  &:not(.el-button--text) {
    padding: 9px 30px;
  }
}
</style>
