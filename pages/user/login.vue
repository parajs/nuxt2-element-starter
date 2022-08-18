<template>
  <div>
    <el-header class="flex">
     <Logo />
    </el-header> 
    <div class="box-card">
      <el-form ref="ruleForm" :rules="rules" :model="form">
        <h3 class="card-title">登 录</h3>
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            size="large"
            placeholder="请输入邮箱账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="mt-8">
          <el-input
            v-model="form.password"
            type="password"
            show-password
            size="large"
            placeholder="输入密码"
            @keyup.enter="onSubmit"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="flex">
            <div class="flexItem">
              <nuxt-link class="link" to="/user/signup">
                还没账号，去注册>>
              </nuxt-link>
            </div>
            <nuxt-link class="link" to="/user/forgetPwd">
              忘记密码？
            </nuxt-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            :disabled="isLoading"
            size="large"
            style="width: 100%"
            type="primary"
            round
            @click="onSubmit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { md5Encode } from '~/shared'
export default {
  name: 'Login',
  middleware: 'notAuth',
  data() {
    return {
      isLoading: false,
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入邮箱账号',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'login-page',
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const pwd = md5Encode(this.form.password)
          this.$store
            .dispatch('loginPassword', {
              username: this.form.username,
              password: pwd,
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
          return false
        }
      })
    },
    forgetpasswprd() {
      this.$router.push('/user/forgetPwd')
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
  margin: 100px auto 0;
  max-width: 500px;
  padding: 20px;
}

:global(.login-page) {
  background: #131232;
}
</style>
