import DayJs from 'dayjs'
import Vue from 'vue'

export default function ({ app }) {
  Vue.prototype.$dayjs = DayJs
}
