<template>
  <el-header>
    <span>个人中心</span>
    <el-button type="primary" @click="logout">退出</el-button>
  </el-header>
</template>

<script>
export default {
  name: 'Personal',
  middleware: 'auth',
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    },
  },
}
</script>
