/** 获取数组中'key'出现的次数
 * @param {String} key 关键词
 * @param {Array} arr 数组
 *
 * @return {Number} num 次数
 * **/
export function getKeyCount(key, arr) {
  let num = 0
  arr.map(function (val) {
    if (val === key) {
      num ++
    }
  })
  return num
}

/** 通过索引获取数组中的键值
 * @param {Array} arr 待查询数组（键值对）
 * @param {String} key 索引
 * @param val 值
 *
 *@return k 键值
 */
export function getArrItemByKey(arr, key, val) {
  for (let k of arr) {
    if (k[key] === val) {
      return k
    }
  }
}
