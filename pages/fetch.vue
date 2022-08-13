<template>
  <div>
    <h2>nuxt常用功能测试</h2>
    <div>
      获取store中数据：{{ $store.state.counter }}
      <el-button type="primary" @click="update">更新状态数据</el-button>
    </div>
    <div class="title">获取远程服务器列表数据</div>
    <el-card
      v-for="(item, index) in posts"
      :key="index"
      class="box-card"
      :header="item.title"
    >
      {{ item.description }}
    </el-card>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, query, params, route, baseUrl }) {
    console.log('获取query参数', query)
    console.log('获取params参数', params)
    console.log('获取route参数', route)
    console.log('获取baseUrl参数', baseUrl)
    const posts = await $axios.$get('/posts')
    return { posts }
  },
  computed: {
    counter() {
      return this.$store.state.counter
    },
  },
  mounted() {
    this.feth()
  },
  methods: {
    update() {
      this.$store.commit('increment', this.counter)
    },
    async feth() {
      const posts = await this.$axios.$get('/posts')
      console.log(posts)
    },
  },
}
</script>

<style scoped>
.title {
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
}

.box-card {
  margin-top: 20px;
}
</style>
