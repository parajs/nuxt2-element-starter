<template>
  <div class="page-content-800">
    <h2>nuxt常用功能测试</h2>
    <div>{{ $t('topbar.home') }}</div>
    <div>
      获取store中数据：{{ $store.state.counter }}
      <el-button type="primary" @click="update">更新状态数据</el-button>
    </div>
    <div>
      element-ui国际化测试：<el-color-picker v-model="color" show-alpha></el-color-picker>
    </div>
    
     <div>
      dayjs： {{$dayjs(new Date()).format('YYYY-MM-DD')}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'layout',
  data(){
    return {
      color: 'rgba(19, 206, 102, 0.8)'
    }
  },
  computed: {
    ...mapState(['locale', 'locales', 'counter']),
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
