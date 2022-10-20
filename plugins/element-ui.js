import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/display.css'
// import locale from 'element-ui/lib/locale/lang/en'
import Vue from 'vue'
// Vue.use(Element);

export default ({ app }) => {
  Vue.config.errorHandler = function (err, vm, info) {
    console.error('errorHandler',err,vm, info)
  }
  
  // element-ui 国际化处理
  Vue.use(Element, {
    i18n: (key, value) => {
      app.i18n.t(key, value)
    },
  })
}
