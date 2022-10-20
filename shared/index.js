import md5 from 'md5';

/**
 * md5加密
 */
export function md5Encode(message) {
  const KEY = md5('LULU Derivation')
  return md5(KEY + md5(message))
}

/**
 * 类型检查
 */

export function typeCheck(param) {
  return Object.prototype.toString.call(param)
}

/**
 *
 * 倒计时时间
 */
 export function countdown(second) {
  if (second < 0) {
    return `0小时 0分 0秒`;
  }

  if (second < 60) {
    return `0小时 0分 ${second}秒`;
  }

  if (second < 3600) {
    return `0小时 ${Math.floor(second / 60 )}分 ${second % 60}秒`;
  }

  return `${Math.floor(second / 3600)}小时 ${Math.floor(second %  3600 / 60 )}分 ${second %  3600 % 60}秒`;
}


/**
 *
 * 截取html标签中文本
 */
export function truncateInnerText(html) {
    const reg = /<[^<>]+>/g
    return html.replace(reg, '')
}
