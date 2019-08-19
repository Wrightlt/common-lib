/** 函数节流 （大量事件喊时间做平均分配触发）
 * 如：DOM元素拖拽
 * 如：Canvas画笔功能
 */

function throttle(fn, gapTime) {
  let lastTime = null

  return function () {
    let nowTime = +new Date()
    if (nowTime - lastTime > gapTime || !lastTime) {
      fn()
      lastTime = nowTime
    }
  }
}


let fn = () => {
  console.log('test')
}

setInterval(throttle(fn, 1000), 10)