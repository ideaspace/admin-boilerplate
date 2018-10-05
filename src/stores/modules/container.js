import * as types from '../mutation-types'

const state = {
  loading: null,
  spaLoaded: false,
  userMeta: {},
  viewMeta: {}
}

const actions = {
  createLoadStart ({ commit }) {
    commit(types.CONTAINER_LOAD_START_CREATE)
  },
  createLoadEnd ({ commit }) {
    commit(types.CONTAINER_LOAD_END_CREATE)
  },
  createSpaEnd ({ commit }) {
    commit(types.CONTAINER_SPA_END_CREATE)
  },
  createUserData ({ commit }, data) {
    commit(types.CONTAINER_USER_CREATE, data)
  },
  createViewData ({ commit }, data) {
    commit(types.CONTAINER_VIEW_CREATE, data)
  }
}

const mutations = {
  [types.CONTAINER_LOAD_START_CREATE] (state) {
    state.loading = true
  },
  [types.CONTAINER_LOAD_END_CREATE] (state) {
    state.loading = false
  },
  [types.CONTAINER_SPA_END_CREATE] (state) {
    state.spaLoaded = true
  },
  [types.CONTAINER_USER_CREATE] (state, data) {
    state.userMeta = data
  },
  [types.CONTAINER_VIEW_CREATE] (state, data) {
    state.viewMeta = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
