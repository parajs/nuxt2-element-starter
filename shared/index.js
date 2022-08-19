import md5 from "md5";

/**
 * md5加密
 */
export function md5Encode(message) {
  const KEY = md5("LULU Derivation");
  return md5(KEY + md5(message));
}

/**
 * 类型检查
 */

export function typeCheck(param) {
  return Object.prototype.toString.call(param);
}
