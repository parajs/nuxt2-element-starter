<template>
  <div>
    <common-header :class="calcClass" />
    <el-carousel height="500px" :interval="5000">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="page-content-700">
        <el-card
        v-for="(item) in list"
        :key="item.id"
        class="box-card"
        :header="item.title"
        @click.native="navigate(item.id)"
      >
        {{ item.text }}
      </el-card>
    </div>
  </div>
</template>

<script>
import CommonHeader from '~/components/CommonHeader.vue'
export default {
  name: 'IndexPage',
  components: { CommonHeader },
  async asyncData({ $axios }) {
    const { list = [] } = await $axios.$get('/item/GetHomeList', {
      pageIndex: 1,
      pageSize: 10,
    })
    return { list }
  },
  data(){
    return {
      isTransparent: true,
    }
  },
  // 切换语言
  computed: {
    availableLocales () {
      return this.$i18n.locales
    },
    calcClass(){
      return this.isTransparent ? 'header-trans' : 'header-black'
    }
  },
  mounted(){
    document.addEventListener('scroll', this.scroll);
  },
  unmounted(){
    document.removeEventListener('scroll', this.scroll);
  },
  methods: {
    navigate(id){
      this.$router.push(this.localePath(`/topic/${id}`))
    },
    scroll(){
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      scrollTop > 100 ? this.isTransparent = false :  this.isTransparent = true;
    }
  }
}
</script>
<style scoped>

.header-trans {
   animation-name: to-transparent;
   animation-duration: 500ms;
   background: transparent;
}

.header-black {
  animation-name: to-black;
  animation-duration: 500ms;
  animation-iteration-count: 1;
  animation-fill-mode: paused;
}


@keyframes to-black {
   from { background: transparent; }
   to { background: #000; }
}


@keyframes to-transparent {
   from { background: #000;}
   to { background: transparent;}
}

 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    text-align: center;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

.title {
  margin-top: 40px;
  font-size: 18px;
  text-align: center;
}

.box-card {
  margin-top: 20px;
}
</style>
