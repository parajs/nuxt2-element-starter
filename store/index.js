export const state = () => ({
  user: null,
  token: '',
  counter: 0,
})

export const mutations = {
  mutateState(state, payload) {
    for (const key in payload) {
      state[key] = payload[key]
      this.$cookies.set(key, payload[key], {
        path: '/',
        maxAge: 1000 * 60 * 60 * 10,
      })
    }
  },
}

export const actions = {
  nuxtServerInit({ commit }, { app, $cookies }) {
    // 从cookie中获取，并且将其中的数据更新到store
    const cookies = $cookies.getAll()
    console.log('nuxtServerInit-cookies', cookies)
    commit('/mutateState', cookies)
  },

  async loginPassword({ commit }, payload) {
    const data = await this.$axios.$post('/login/password', payload)
    commit('mutateState', data)
  },
  logout() {
    this.$cookies.removeAll()
    window.location.href = '/'
  },
}
