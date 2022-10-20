<template>
  <el-header class="header-fixed">
    <Logo class="flexItem" />
    <el-dropdown class="ml-8" placement="bottom" trigger="click">
      <div class="flex lang">
        <svg
          style="width: 20px"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          class="d-icon w-6 h-6 m-auto text-gray-300 hover:text-primary-400"
        >
          <path
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          ></path>
        </svg>
        <i class="el-icon-arrow-down"></i>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in availableLocales"
            :key="item.code"
            @click.native="$i18n.setLocale(item.code)"
          >
            <div class="dropdown-item">{{ item.name }}</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown v-if="user" class="ml-8" placement="bottom" trigger="click">
      <Avatar
        size="30"
        :src="user.avatar"
        :color="user.userBackcolor"
        :text="user.userAbbr"
      />
      <template #dropdown>
        <el-dropdown-menu >
          <el-dropdown-item @click.native="$router.push('/tempForum/add')">
            <div class="dropdown-item" >
              <i class="el-icon-plus"></i>{{$t('header.createtempforum')}}
            </div>
          </el-dropdown-item>
          <el-dropdown-item @click.native="$router.push('/user/homepage')">
            <div class="dropdown-item">
              <i class="el-icon-user"></i>{{$t('header.homepage')}}
            </div>
          </el-dropdown-item>
          <el-dropdown-item @click.native="$router.push('/user/setting')">
            <div class="dropdown-item">
              <i class="el-icon-setting"></i>{{$t('header.accountsetting')}}
            </div>
          </el-dropdown-item>
          <el-dropdown-item @click.native="$router.push('/user/feedback')">
            <div class="dropdown-item">
              <i class="el-icon-edit-outline"></i>{{$t('header.feedback')}}
            </div>
          </el-dropdown-item>

          <el-dropdown-item @click.native="logout">
            <div class="dropdown-item"><i class="el-icon-edit"></i>{{$t('header.logout')}}</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div v-else class="login">
      <nuxt-link to="/user/login">{{ $t('header.login') }}</nuxt-link>
      <nuxt-link to="/user/signup">{{ $t('header.signup') }}</nuxt-link>
    </div>
  </el-header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonHeader',
  computed: {
    ...mapState(['user']),
    availableLocales() {
      return this.$i18n.locales.filter(
        (item) => item.code !== this.$i18n.locale
      )
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/')
    },
  },
}
</script>
<style scoped>
.header-fixed {
  background-color: #000;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 300;
  display: flex;
  align-items: center;
}

.lang {
  color: #fff;
  padding: 10px;
  cursor: pointer;
}

.title {
  margin: 0;
  margin-left: 10px;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  position: relative;
  font-weight: normal;
}

.dropdown-item {
  padding: 4px 0;
  flex: 1;
}

.login a {
  color: #fff;
  padding: 10px;
  font-size: 16px;
}
</style>
