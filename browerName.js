export function browerName() {
  let userAgent = navigator.userAgent
  if (userAgent.indexOf("Opera") > -1) {
    return "Opera";
  } else if (userAgent.indexOf("Edge") > -1){
    return "Edge"
  } else if (userAgent.indexOf("Firefox") > -1) {
    return "FF";
  } else if (userAgent.indexOf("Chrome") > -1){
    return "Chrome"
  } else if (userAgent.indexOf("Safari") > -1){
    return 'Safari'
  } else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
    return "IE";
  }
  navigator.userAgent.indexOf("compatible") > -1 && navigator.userAgent.indexOf("MSIE") > -1 && (navigator.userAgent.indexOf("Opera") === -1)
}

export function isWeChat() {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('micromessenger') > -1
}
