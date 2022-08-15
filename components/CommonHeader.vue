<template>
  <el-header>
    <div class="flex flexItem" style="cursor: pointer">
      <img src="~/static/logo.png" style="width: 40px; height: 40px" />
      <h2 class="title">DukeForum</h2>
    </div>
      <el-dropdown class="ml-8">
        <Avatar
          size="40"
          :src="user.avatar"
          :color="user.userBackcolor"
          :text="user.userAbbr"
        />
        <template #dropdown>
          <el-dropdown-menu style="width: 140px">
            <el-dropdown-item @click="logout">
              <div class="dropdown-item">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
  </el-header>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'CommonHeader',
    computed: {
     ...mapState(['user']),
   },
    methods: {
        async logout() {
          await this.$store.dispatch('logout')
        },
    },
}

</script>
<style scoped>
.el-header {
  border-bottom: 1px solid #dddd;
  background-color: #000;
  display: flex;
  align-items: center;
  color: #fff;
}

.item {
  margin-top: 10px;
}

.title {
  margin: 0;
  margin-left: 10px;
  font-size: 22px;
  color: #fff;
  text-decoration: none;
  position: relative;
}


.btn-common {
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
  font-weight: bold;
}

.dropdown-item {
  padding: 8px 0;
  text-align: center;
  flex: 1;
}
</style>
