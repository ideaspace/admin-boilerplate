import * as types from '../mutation-types'
import find from 'lodash/find'
import includes from 'lodash/includes'
const state = {
  rootMenuList: null, // 所有模块菜单数据(顶级菜单, 若有)
  modMenuData: null, // 当前模块菜单数据 例如 'devops', 'udal'; 一级菜单
  currentMenuData: null, // 选中二级菜单数据
  resourceList: [], // 当前模块的资源列表
  subMenuList: [], // 三级菜单
  subMenuActive: false, // 三级菜单是否激活
  subMenuBackUrl: '', // 返回上级菜单
  rootMenuActive: null, // 当前模块激活状态
  menuItemActive: null, // 当前模块下菜单激活状态
  parentIds: [],
  toName: '',
  fromName: ''
}

const actions = {
  createMenuData ({ commit }, data) {
    commit(types.MENU_DATA_CREATE, data)
  }
}

const mutations = {
  [types.MENU_DATA_CREATE] (state, data) {
    const { modMenuData, menuName, toName, fromName } = data
    if (modMenuData) {
      state.modMenuData = modMenuData
    }
    const resourceList = state.modMenuData.resourceList
    const menuItemActive = resourceList && resourceList.filter(
      menuItem => menuItem.url === menuName
    )[0]
    const parentIds = menuItemActive && menuItemActive.parentIds
    const subMenuList = state.modMenuData.children.filter(v => v.children)
    const subMenuResource = find(subMenuList, v => includes(parentIds, v['id']))

    Object.assign(state, {
      toName,
      fromName,
      resourceList,
      menuItemActive,
      parentIds,
      subMenuActive: !!subMenuResource,
      subMenuBackUrl: subMenuResource && subMenuResource.url,
      rootMenuActive: modMenuData,
      currentMenuData: subMenuResource || modMenuData
    })

    console.log(`%c ---- start ${Date.now()} ----`, `color: #4cb685`)
    console.log(parentIds)
    console.log(subMenuList)
    console.log(menuItemActive)
    console.log(find(subMenuList, v => includes(parentIds, v['id'])))
    console.log(`%c ----  end  ${Date.now()} ----`, `color: #e74c3c`)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
