export default{
  setCookie: function (key, value, expiredays) {
    let exdate = new Date()
    if (expiredays) {
      exdate.setDate(exdate.getDate() + expiredays)
      document.cookie = key + '=' + encodeURI(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString())
    } else {
      document.cookie = key + '=' + encodeURI(value)
    }
  },
  getCookie: function (key) {
    let name = key + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim()
      if (c.indexOf(name) === 0) return decodeURI(c.substring(name.length, c.length))
    }
    return null
  },
  removeCookie(key) {
    this.setCookie(key, "", -1)
  }
}
