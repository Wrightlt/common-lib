export function createFormatTime(stringTime) {
  var timezoneOffset = new Date().getTimezoneOffset()
  var utcDate = Date.parse(stringTime.replace(/-/g, '/'))
  utcDate -= timezoneOffset * 60 * 1000
  var localDate = new Date(utcDate)
  var year = localDate.getFullYear()
  var month = localDate.getMonth() + 1
  var date = localDate.getDate()
  var hour = localDate.getHours()
  var minutes = localDate.getMinutes()
  var seconds = localDate.getSeconds()
  month = month < 10 ? '0' + month : month
  date = date < 10 ? '0' + date : date
  hour = hour < 10 ? '0' + hour : hour
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minutes + ':' + seconds
}
