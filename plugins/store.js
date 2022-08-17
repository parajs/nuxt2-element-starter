export default function ({ store, $cookies }) {
  const cookies = $cookies.getAll()
  store.commit('mutateState', cookies)
}
