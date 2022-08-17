import { ElMessage } from 'element-ui'
let counter = 0

export default function ({
  $axios,
  store,
  redirect,
  $cookies,
  route,
  error: nuxtError,
  isDev,
  req,
}) {
  const token = store.state.token
  if (isDev) console.log('token\n', token)

  // Request拦截器，设置token
  $axios.onRequest((config) => {
    if (token) config.headers.Authorization = `Bearer ${token}`
  })

  $axios.onError((error) => {
    nuxtError({
      statusCode: error.response.status,
      message: error.message,
    })
    return Promise.resolve(false)
  })

  $axios.onResponse((response) => {
    const res = response.data
    if (isDev) console.log('responce\n', res)
    if (res.code !== 200) {
      // 710: Token expired;
      if (res.code === 710 && counter < 1) {
        counter = 1
        store.dispatch('user/refreshToken').then(() => {
          counter = 0
          redirect(route.fullPath)
        })
        return
      }
      // 711: 超过refreshToken时间;
      if (res.code === 711) {
        setTimeout(() => {
          store.dispatch('logout')
        }, 3000)
      }
      // 在其他地方登录
      if (res.code === 715 && counter < 1) {
        counter = 1
        setTimeout(() => {
          store.dispatch('logout')
        }, 3000)
      }

      ElMessage.error(res.msg)

      return Promise.reject(res.msg || 'Error')
    } else {
      return res
    }
  })
}
