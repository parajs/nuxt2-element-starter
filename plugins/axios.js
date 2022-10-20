import { Message } from "element-ui"

export default function ({ $axios, store, redirect, route }) {
  // Request拦截器，设置token
  $axios.onRequest((config) => {
    const token = store.state.token
    if (token) config.headers.Authorization = `Bearer ${token}`
  })

  $axios.onError((error) => {
    const statusCode = error.response && error.response.status
    const statusText = error.response && error.response.statusText
    if (process.client) {
      // 浏览器中向后台发送ajax请求错误处理
      console.error("err" + error)
      Message.error(error.message)
    }
    
    if(process.server){
       // node服务端中向后台发送ajax请求错误处理
       redirect("/error", { statusCode, statusText })
    }
   
  })

  $axios.onResponse(async(response) => {
    const res = response.data
    console.group(response.config.url)
    console.dir(res)
    console.groupEnd()
    if (res.code !== 200) {
       // 1700: Token expired, 1701: 超过refreshToken时间, 1702: 在其他地方登录,401 token为空
       if (res.code === 1700 || res.code === 1701 || res.code === 1702 || res.code === 401) {
        await store.dispatch("logout")
        redirect('/')
      }

       // Browser端请求异常处理
      if(process.client){
        Message.error(res.msg)
      }
      
      // Node端请求异常处理
      if(process.server){
        redirect("/error", { statusCode:res.code, statusText: res.msg })
      }

      return Promise.reject(res.msg || "Error")
    } else {
      return res
    }
  })
}
