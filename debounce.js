/** 函数防抖（多次事件，一次执行）
 * 如1：给按钮加函数防抖防止表单多次提交
 * 如2：在做搜索提示时，每次修改输入框内容都会触发网络请求，这时使用函数防抖可以防止请求的浪费
 * 如3：判断scroll是否滑到底部，滚动事件 + 函数防抖
 */
export function debounce(fn, wait) {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, wait)
  }
}

let fetch = (params) => {
  console.log(params + 'data')
}

input.addEventListener('input', debounce(fetch('test'), 500))

// 函数防抖和函数节流是在时间轴上控制函数的执行次数。防抖可以类比为电梯不断上乘客,节流可以看做幻灯片限制频率播放电影。
