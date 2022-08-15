<template>
  <div>
   
    <nuxt-link
       v-for="(item, index) in availableLocales" :key="index"
      :to="switchLocalePath(item.code)"
    >
      {{item.name}}
    </nuxt-link>

     <el-button
         v-for="(item, index) in availableLocales" :key="index"
          type="primary"
          round
          @click="$i18n.setLocale(item.code)"
          >{{item.name}}</el-button
        > 
        
        <div>{{ $t('topbar.home')}}</div>

         <nuxt-link :to="localePath('/fetch')">跳转fetch</nuxt-link>
    <div class="title">获取远程服务器列表数据</div>
    <el-card
      v-for="(item) in list"
      :key="item.id"
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
  // 切换语言
computed: {
   availableLocales () {
    return this.$i18n.locales
  }
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
