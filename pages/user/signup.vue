<template>
  <div>
    <el-header class="flex">
      <nuxt-link to="/" class="flex">
        <img src="~/static/logo.png" style="width: 45px; height: 45px" />
        <h2 class="title">DukeForum</h2>
      </nuxt-link>
    </el-header>

    <div class="box-card">
      <el-form ref="ruleForm" :model="form" :rules="rules" class="text-center">
        <h3 class="card-title">注 册</h3>
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
            type="text"
            :disabled="disabled"
            class="getCodeBtn"
            @click="getVertifyCode"
            >{{ isSending }}
          </el-button>
        </el-form-item>
        <el-form-item prop="password" class="mt-8">
          <el-input
            v-model="form.password"
            size="large"
            type="password"
            show-password
            placeholder="请输入密码6-18英文、数字、符号的组合"
            @keyup.enter="onSubmit"
          ></el-input>
        </el-form-item>
        <el-form-item class="mt-8">
          <el-button
            size="large"
            style="width: 100%"
            type="primary"
            round
            @click="onSubmit"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { ElMessage } from 'element-ui'
import { md5Encode } from '~/shared'
const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

const validator = (v) => {
  return /^\S{6,18}$/.test(v)
}

export default {
  name: 'Signup',
  data() {
    return {
      disabled: false,
      isSending: '获取验证码',
      form: {
        code: '',
        email: '',
        password: '',
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
        password: [
          {
            validator(rule, value, callback) {
              if (value === '') {
                callback(new Error('请输入密码'))
              } else if (!validator(value)) {
                callback(new Error('密码6-18英文、数字、符号的组合'))
              } else {
                callback()
              }
            },
            trigger: 'blur',
          },
        ],
      },
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'signup-page',
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          this.form.password = md5Encode(this.form.password)
          await this.$axios.$post('/user/registerByEmail', this.form)
          ElMessage.info('注册成功')
          this.$store
            .dispatch('loginPassword', {
              username: this.form.username,
              password: this.form.password,
            })
            .then(() => {
              const { redirect } = this.$route.query
              if (redirect) {
                this.$router.push(redirect)
              } else {
                this.$router.push('/user/personal')
              }
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async getVertifyCode() {
      if (this.form.email === '') {
        ElMessage.error('请输入邮箱账号')
        return
      }

      if (reg.test(this.form.email)) {
        this.isSending = '发送验证码中'
        this.disabled = true
        const data = await this.$axios.$post('/user/getVerifyCode', {
          email: this.form.email,
          type: 'register',
        })

        let second = 60
        this.isSending.value = `${second}后可重新发送`
        const timer = setInterval(() => {
          if (second === 0) {
            this.isSending = '重新获取验证码'
            this.disabled = false
            clearInterval(timer)
          }

          --second
          this.isSending = `${second}后可重新发送`
        }, 1000)
        ElMessage.success('邮件发送成功')
      } else {
        ElMessage.error('邮箱账号不合法')
      }
    },
  },
}
</script>

<style scoped>
.title {
  margin: 0;
  margin-left: 10px;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  position: relative;
  font-weight: normal;
}

.card-title {
  text-align: center;
  font-size: 22px;
  color: #f2f2f2;
  margin-bottom: 30px;
}

.link {
  color: #cecbcb;
  font-size: 12px;
}

.box-card {
  position: relative;
  margin: 60px auto 0;
  max-width: 500px;
  padding: 20px;
}

.getCodeBtn {
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

:global(.signup-page) {
  background: #131232;
}
</style>
