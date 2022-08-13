<template>
  <div>
    <div class="title">获取远程服务器列表数据</div>
    <el-card
      v-for="(item, index) in list"
      :key="index"
      class="box-card"
      :header="item.title"
    >
      {{ item.text }}
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const { list = [] } = await $axios.$get('/item/GetHomeList', {
      pageIndex: 1,
      pageSize: 10,
    })
    return { list }
  },
}
</script>
<style scoped>
.title {
  margin-top: 40px;
  font-size: 18px;
  text-align: center;
}

.box-card {
  margin-top: 20px;
}
</style>
