export function getKeyCount(key, arr) {
  let num = 0
  arr.map(function (val) {
    if (val === key) {
      num ++
    }
  })
  return num
}

export function getArrItemByKey(arr, key, val) {
  for (let k of arr) {
    if (k[key] === val) {
      return k
    }
  }
}
