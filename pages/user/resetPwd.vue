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
            <h3 style="font-size: 16px">重置密码</h3>

            <el-form-item prop="password" class="mt-8">
            <el-input
                v-model="form.password"
                size="large"
                type="password"
                show-password
                placeholder="请输入新密码"
            >
            </el-input>
            </el-form-item>
            <el-form-item prop="topassword" class="mt-8">
            <el-input
                v-model="form.topassword"
                size="large"
                type="password"
                show-password
                placeholder="请再次确认新密码"
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
                >确认</el-button
            >
            </el-form-item>
        </el-form>
        <span class="logines" @click="$router.go(-1)">&lt; 返回登录</span>
    </div>
  </div>
</template>
<script>
import { Message } from 'element-ui'
import { md5Encode } from '~/shared'
const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const validator = (v) => {
  return /\S{6,8}/.test(v);
};
export default {
  name: 'ForgetPwd',
  data() {
    return {
      disabled: false,
      isSending: '获取验证码',
      form: {
         password: '',
         topassword: ''
      },
      rules: {
         password: [
            {
            validator(rule, value, callback) {
                if (value === '') {
                callback(new Error('请输入新密码'));
                } else if (!validator(value)) {
                callback(new Error('新密码6-18英文、数字、符号的组合'));
                } else {
                callback();
                }
            },
            trigger: 'blur'
            }
        ],
        topassword: [
            {
            validator(rule, value, callback) {
                if (value === '') {
                callback(new Error('请再次输入新密码'));
                } else if (!validator(value)) {
                callback(new Error('确认密码应为6-18英文、数字、符号的组合'));
                } else {
                callback();
                }
            },
            trigger: 'blur'
            }
        ]
      },
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'reset-pwd-page',
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(async(valid) => {
        if (valid) {
        if (this.form.password === this.form.topassword) {
            const pwd = md5Encode(this.form.password);
            const {code, email} = this.$route.query;
            await this.$axios.$post('/user/resetPassword', {
                code,
                email,
                password: pwd
            })

            Message.success('修改成功');
            this.$store
                .dispatch('loginPassword', {
                username: email,
                password: pwd
                })
                .then(() => {
                    this.$router.push('/user/homepage');
                });
            
        } else {
            Message.error('输入密码不同');
        }
        return true;
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
              type: 'register',
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

:global(.reset-pwd-page) {
  background: #131232;
}
</style>
