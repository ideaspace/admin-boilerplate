import Vue from 'vue'
import Vuex from 'vuex'
import menuModule from './stores/modules/menu'
import containerModule from './stores/modules/container'
import createLogger from 'vuex/dist/logger'
const DEBUG = process.env.NODE_ENV === 'development'

Vue.use(Vuex)

const module = require.context('@/views', true, /\.module\.js$/)
let modules = {}

module.keys().forEach(v => {
  modules = { ...modules, ...module(v) }
})

export default new Vuex.Store({
  modules: Object.assign({}, modules, {
    menu: menuModule,
    container: containerModule
  }),
  strict: DEBUG,
  plugins: DEBUG ? [createLogger()] : []
})
