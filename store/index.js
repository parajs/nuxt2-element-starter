import { typeCheck } from '~/shared'
export const state = () => ({
  user: null,
  token: '',
  counter: 0,
})

export const mutations = {
  mutateState(state, payload) {
    if (typeCheck(payload) === '[object Object]') {
      for (const key in payload) {
        state[key] = payload[key]
      }
    } else {
      console.error('expecting plain Object')
    }
  },
}

export const actions = {
<<<<<<< HEAD
=======
  nuxtServerInit({ commit }) {
    // console.log("context", this);
    // 从cookie中获取，并且将其中的数据更新到store
    const cookies = this.$cookies.getAll()
    commit('mutateState', cookies)
  },

>>>>>>> 44b6bae17bb57bfa149b142d24db25cd15c24e05
  async loginPassword({ commit }, payload) {
    try {
      const data = await this.$axios.$post('/login/password', payload)
      const options = {
        path: this.$config.cookie.path,
        maxAge: this.$config.cookie.maxAge,
      }

      this.$cookies.setAll([
        {
          name: 'token',
          value: data.token,
          opts: options,
        },
        {
          name: 'user',
          value: data.user,
          opts: options,
        },
      ])

      commit('mutateState', data)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async refreshToken({ commit }, payload) {
    try {
      const data = await this.$axios.$get('/refreshToken', payload)
      commit('mutateState', { token: data.token })
      const options = {
        path: this.$config.cookie.path,
        maxAge: this.$config.cookie.maxAge,
      }
      this.$cookies.set('token', data.token, options)
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  },
<<<<<<< HEAD
  logout({ commit }) {
    this.$cookies.removeAll();
    commit("mutateState", { token: "", user: "" });
    return Promise.resolve('登出成功')
=======
  async logout({ commit }) {
    await this.$axios.$post('/user/logout')
    this.$cookies.removeAll()
    commit('mutateState', { token: '', user: '' })
    this.$router.push('/')
>>>>>>> 44b6bae17bb57bfa149b142d24db25cd15c24e05
  },
}
