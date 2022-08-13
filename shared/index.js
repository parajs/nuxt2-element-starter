import md5 from 'md5'

/**
 * md5加密
 */
export function md5Encode(message) {
  const KEY = md5('LULU Derivation')
  return md5(KEY + md5(message))
}
