```html
<template>
  <el-form :model="form" ref="form" label-width="100px" :rules="rules">
     <el-form-item prop="envName" label="环境名称">
       <el-input v-model="form.envName"></el-input>
     </el-form-item>
     <el-form-item prop="envCode" label="环境编码">
       <el-input v-model="form.envCode"></el-input>
     </el-form-item>
     <el-form-item prop="envType" label="环境类型">
       <el-radio-group v-model="form.envType">
         <el-radio label="1">开发环境</el-radio>
         <el-radio label="2">测试环境</el-radio>
         <el-radio label="3">预发环境</el-radio>
         <el-radio label="4">生产环境</el-radio>
       </el-radio-group>
     </el-form-item>
     <el-form-item prop="envAddr" label="环境地址">
       <el-select placeholder="请选择环境地址" v-model="form.envAddr">
         <el-option v-for="(v, idx) in addrList" :key="idx" :label="v" :value="v"></el-option>
       </el-select>
     </el-form-item>
     <el-form-item prop="envDesc" label="环境说明">
       <el-input type="textarea" :rows="5" v-model="form.envDesc"></el-input>
     </el-form-item>
     <el-form-item>
       <el-button type="primary" @click="onConfirm">提交</el-button>
       <el-button type="default">取消</el-button>
     </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'FromPage',
  data () {
    return {
      addrList: ['10.192.16.23', '10.192.16.24', '10.192.16.25'],
      form: {
        envName: '',
        envCode: '',
        envType: '',
        envAddr: '',
        envDesc: ''
      },
      rules: {
        envName: [{
          required: true,
          message: '环境名称不能为空'
        }],
        envCode: [{
          required: true,
          message: '环境编码不能为空'
        }],
        envType: [{
          required: true,
          message: '环境类型不能为空'
        }],
        envAddr: [{
          required: true,
          message: '环境地址不能为空'
        }],
        envDesc: [{
          required: true,
          message: '环境描述不能为空'
        }]
      },
      FormMd
    }
  },
  methods: {
    onConfirm () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$message.success(`提交成功`)
        }
      })
    }
  }
}
</script>
```
