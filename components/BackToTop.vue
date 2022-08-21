<template>
  <el-button
    v-if="isShow"
    type="primary"
    size="large"
    circle
    class="back-top"
    @click="backToTop"
  >
    <i class="el-icon-arrow-up"></i>
  </el-button>
</template>
<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      isShow: false,
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scroll)
  },
  unmounted() {
    document.removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 200 ? (this.isShow = true) : (this.isShow = false)
    },
    backToTop() {
      window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
<style scoped>
.back-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
}
</style>
