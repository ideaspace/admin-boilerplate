```html
<template>
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
</template>
<script>
export default {
  name: 'SearchAdvance',
  data () {
    return {
      form: {},
      expand: false
    }
  },
  methods: {
    onQuery () {},
    onToggle () {
      this.expand = !this.expand
    }
  }
}
</script>
```
