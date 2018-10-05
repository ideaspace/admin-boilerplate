<template>
  <view-container>
    <el-card ref="card">
      <div slot="header">
        <strong>创建环境</strong>
        <div class="btn-groups">
          <el-button type="text" @click="onOpenDialog">查看源码</el-button>
        </div>
      </div>
      <el-alert
        title="W3C标准中有如下规定"
        type="info"
        :closable="false"
        show-icon>
        <p class="el-alert__description">When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</p>
        <p class="el-alert__description">当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 el-form 标签上添加 @submit.native.prevent。</p>
      </el-alert>
      <el-row>
        <el-col :span="12">
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
              <el-checkbox v-model="form.envDefault">是否设置为默认配置</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onConfirm">提交</el-button>
              <el-button type="default">取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
    <source-code-dialog v-if="dialog.source" :source-code="FormMd" @on-close="onCloseDialog"></source-code-dialog>
  </view-container>
</template>

<script>
import FormMd from '../../../docs/code/form.md'
import SourceCodeDialog from '../../../components/dialog/source-code'
export default {
  name: 'FromPage',
  components: { SourceCodeDialog },
  data () {
    return {
      dialog: {
        source: false
      },
      addrList: ['10.192.16.23', '10.192.16.24', '10.192.16.25'],
      form: {
        envName: '',
        envCode: '',
        envType: '',
        envAddr: '',
        envDesc: '',
        envDefault: false
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
    },
    onOpenDialog () {
      this.dialog.source = true
    },
    onCloseDialog () {
      this.dialog.source = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-alert {
  margin-bottom: 20px;
}
</style>
