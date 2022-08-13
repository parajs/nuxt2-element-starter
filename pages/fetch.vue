<template>
  <div>
    <h2>nuxt常用功能测试</h2>
    <div>
      获取store中数据：{{ $store.state.counter }}
      <el-button type="primary" @click="update">更新状态数据</el-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter
    },
  },
  methods: {
    update() {
      this.$store.commit('mutateState', { counter: this.counter + 1 })
    },
  },
}
</script>

<style scoped>
.title {
  margin-top: 20px;
  font-size: 18px;
}

.box-card {
  margin-top: 20px;
}
</style>
