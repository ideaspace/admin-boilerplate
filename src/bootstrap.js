import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style.scss'

import http from './api'

import directive from './directives'
import mixins from './mixins'

import router from './router'
import store from './store'

import ViewContainer from './components/layout/ViewContainer'
import MdCard from './components/md/MdCard'

const isProd = process.env.NODE_ENV === 'production'

class Bootstrap {
  constructor (router, store) {
    this.router = router
    this.store = store
  }

  get routers () {
    return this.router
  }

  get stores () {
    return this.store
  }

  install (Vue) {
    // 注册全局组件
    Vue.component('ViewContainer', ViewContainer)
    Vue.component('MdCard', MdCard)
    // 注册全局指令
    for (let key in directive) {
      Vue.directive(key, directive[key])
    }

    // 注册全局混入
    for (let key in mixins) {
      Vue.mixin(mixins[key])
    }

    // 全局路由劫持
    this.router.beforeEach(async (to, from, next) => {
      if (!this.store.state.container.spaLoaded) {
        const r = isProd ? require('./mocks/menu.json') : await http.get('mocks/menu.json')
        this.store.dispatch('menu/createMenuData', {
          modMenuData: r.data,
          menuName: to.meta.bind,
          toName: to.name,
          fromName: from.name
        })
        setTimeout(() => {
          this.store.dispatch('container/createSpaEnd')
        }, 1500)
      } else {
        this.store.dispatch('container/createLoadStart')
        this.store.dispatch('menu/createMenuData', {
          menuName: to.meta.bind,
          toName: to.name,
          fromName: from.name
        })
      }
      next()
    })

    this.router.afterEach(() => {
      setTimeout(() => { // 模拟页面加载
        this.store.dispatch('container/createLoadEnd')
      }, 300)
    })

    /* 重置 Element-ui 部分组件的样式 */
    Element.Pagination.props.layout.default = 'total, prev, pager, next, sizes'
    Element.Table.props.border = { type: Boolean, default: true }
    Element.Card.props.shadow = { type: String, default: 'never' }
    Element.Dialog.props.appendToBody = { type: Boolean, default: true }
    Element.Dialog.props.closeOnClickModal = { type: Boolean, default: false }
    Element.Table.props.highlightCurrentRow = { type: Boolean, default: true }
    Element.TableColumn.props.showOverflowTooltip = { type: Boolean, default: true }

    Vue.use(Element, { size: 'small' })
  }
}

export default new Bootstrap(router, store)
