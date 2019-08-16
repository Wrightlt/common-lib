export function createFormatTime(stringTime) {
  let timezoneOffset = new Date().getTimezoneOffset()
  let utcDate = Date.parse(stringTime.replace(/-/g, '/'))
  utcDate -= timezoneOffset * 60 * 1000
  let localDate = new Date(utcDate)
  let year = localDate.getFullYear()
  let month = localDate.getMonth() + 1
  let date = localDate.getDate()
  let hour = localDate.getHours()
  let minutes = localDate.getMinutes()
  let seconds = localDate.getSeconds()
  month = month < 10 ? '0' + month : month
  date = date < 10 ? '0' + date : date
  hour = hour < 10 ? '0' + hour : hour
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minutes + ':' + seconds
}

/**格式化时间
 * @param {String} time '2019-08-01 12:03:00'
 * @return {String} '08-01 12:03'
 * **/
export function formatTime(time) {
  return time.slice(5, time.length - 3)
}

/**
 * 格式化时间
 * @param {Object} currentDate
 * @return {String} 2019年08月01日 12:00:00
 * **/
export function formatDateTime(currentDate) {
  let year = currentDate.getFullYear()
  let month = currentDate.getMonth() + 1
  let date = currentDate.getDate()
  let hour = currentDate.getHours()
  let minutes = currentDate.getMinutes()
  let seconds = currentDate.getSeconds()
  month = month < 10 ? '0' + month : month
  date = date < 10 ? '0' + date : date
  hour = hour < 10 ? '0' + hour : hour
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds
  return `${year}年${month}月${date}日 ${hour}:${minutes}:${seconds}`
}

/**省略手机号中间四位数
 * @param {String} phone '13122224444'
 * @return {String} '131****4444'
 * **/
export function omitPhone(phone) {
  let length = phone.length
  return phone.slice(0, 3) + '****' + phone.slice(length - 4, length)
}