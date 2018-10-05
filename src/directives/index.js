import 'highlight.js/styles/solarized-dark.css'
import hljs from 'highlight.js/lib/index'

const highlight = {
  bind: el => {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach(block => {
      hljs.highlightBlock(block)
    })
  }
}

const scroll = {
  inserted: (el, binding) => {
    const callback = binding.value
    const target = binding.arg ? document.querySelector(binding.arg) : el
    if (!target) return
    target.addEventListener('scroll', callback)
    el._onScroll = {
      callback,
      target
    }
  },
  unbind: el => {
    if (!el._onScroll) return
    const { target, callback } = el._onScroll
    target.removeEventListener('scroll', callback)
  }
}

export default {
  highlight,
  scroll
}
