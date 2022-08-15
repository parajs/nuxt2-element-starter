export const state = () => ({
  user: null,
  token: "",
  counter: 0,
});

export const mutations = {
  mutateState(state, payload) {
    for (const key in payload) {
      state[key] = payload[key];
      this.$cookies.set(key, payload[key], {
        path: this.$config.cookie.path,
        maxAge: this.$config.cookie.maxAge,
      });
    }
  },
};

export const actions = {
  nuxtServerInit({ commit }) {
    // console.log("context", this);
    // 从cookie中获取，并且将其中的数据更新到store
    const cookies = this.$cookies.getAll();
    commit("mutateState", cookies);
  },

  async loginPassword({ commit }, payload) {
    const data = await this.$axios.$post("/login/password", payload);
    commit("mutateState", data);
  },
  logout() {
    this.$cookies.removeAll();
    window.location.href = "/";
  },
};
