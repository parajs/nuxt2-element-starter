<template>
   <el-result class="result" icon="error" :title="$route.query.statusCode" :sub-title="$route.query.statusText || '遇到错误了'">
      <template slot="extra">
        <el-button type="primary" size="medium" @click="$router.go(-1)">返回</el-button>
      </template>
    </el-result>
</template>

<script>
export default {
  layout: 'error',
  data () {
    return {
      state: {}
    }
  },
  head () {
    return {
      title: '遇到错误了'
    }
  },
}
</script>
<style scoped>
.result {
  padding-top: 100px;
}
</style>