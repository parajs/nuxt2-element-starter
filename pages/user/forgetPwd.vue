<template>
  <div>
    <el-header class="flex">
       <Logo />
    </el-header>

    <div class="box-card">
        <el-form
          ref="ruleForm"
          :model="form"
          :rules="rules"
          class="text-center"
        >
          <h3 style="font-size: 16px">忘记密码</h3>
          <el-form-item prop="email">
            <el-input
              v-model="form.email"
              size="large"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code" class="mt-8">
            <el-input
              v-model="form.code"
              size="large"
              placeholder="请输入验证码"
            ></el-input>
            <el-button
              class="get-code-btn"
              type="text"
              :disabled="disabled"
              @click="getVertifyCode"
            >
              {{ isSending }}
            </el-button>
          </el-form-item>
          <el-form-item class="mt-8">
            <el-button
              size="large"
              style="width: 100%"
              type="primary"
              round
              @click="resetPassword"
              >下一步</el-button
            >
          </el-form-item>
        </el-form>
        <span class="logines" @click="$router.go(-1)">&lt; 返回登录</span>
    </div>
  </div>
</template>
<script>
import { Message } from 'element-ui'

const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export default {
  name: 'ForgetPwd',
  data() {
    return {
      disabled: false,
      isSending: '获取验证码',
      form: {
        code: '',
        email: ''
      },
      rules: {
        email: [
          {
            validator(rule, value, callback) {
              if (value === '') {
                callback(new Error('请输入邮箱账号'))
              } else if (!reg.test(value)) {
                callback(new Error('邮箱账号不合法'))
              } else {
                callback()
              }
            },
            trigger: 'blur',
          },
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'forget-pwd-page',
      },
    }
  },
  methods: {
    resetPassword() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$router.push({
            path: '/user/resetPwd',
            query: { code: this.form.code, email: this.form.email }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    async getVertifyCode() {
      if (this.form.email === '') {
        Message.error('请输入邮箱账号')
        return
      }
      if (reg.test(this.form.email)) {
        try {
            this.isSending = '发送验证码中'
            this.disabled = true
            await this.$axios.$post('/user/getVerifyCode', {
              email: this.form.email,
              type: 'resetPwd',
            })

            let second = 60
            this.isSending = `${second}后可重新发送`
            const timer = setInterval(() => {
              --second
              this.isSending = `${second}后可重新发送`
              if (second === 0) {
                this.isSending = '重新获取验证码'
                this.disabled = false
                clearInterval(timer)
              }
            }, 1000)
            Message.success('邮件发送成功')
        } catch (error) {
            this.isSending = '重新获取验证码'
            this.disabled = false
        }
        
      } else {
        Message.error('邮箱账号不合法')
      }
    },
  },
}
</script>

<style scoped>
.box-card {
  position: relative;
  margin: 100px auto 0;
  max-width: 500px;
  padding: 20px;
}

.get-code-btn {
  transform: translateY(-50%);
  position: absolute;
  padding: 0 20px;
  right: 0;
  top: 50%;
  height: 40px;
  line-height: 40px;
  color: #0f5bce;
  cursor: pointer;
  vertical-align: middle;
}

.logines {
  font-size: 12px;
  color:#fff;
  cursor: pointer;
}

:global(.forget-pwd-page) {
  background: #131232;
}
</style>
