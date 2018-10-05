```html
<template>
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
</template>
<script>
export default {
  name: 'SearchCondition',
  data () {
    return {
      form: {
      }
    }
  },
  methods: {
    onQuery () {}
  }
}
</script>
```
