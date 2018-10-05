export default [
  {
    path: '/component/card',
    name: 'card',
    component: () => import('./card/index'),
    meta: {
      bind: 'card'
    }
  },
  {
    path: '/component/form',
    name: 'form',
    component: () => import('./form/index'),
    meta: {
      bind: 'form'
    }
  },
  {
    path: '/component/search',
    name: 'search',
    component: () => import('./search/index'),
    meta: {
      bind: 'search'
    }
  },
  {
    path: '/component/tabs',
    name: 'tabs',
    component: () => import('./tabs/index'),
    meta: {
      bind: 'tabs'
    }
  },
  {
    path: '/component/table',
    name: 'table',
    component: () => import('./table/index'),
    meta: {
      bind: 'table'
    }
  },
  {
    path: '/component/pagination',
    name: 'pagination',
    component: () => import('./pagination/index'),
    meta: {
      bind: 'pagination'
    }
  },
  {
    path: '/component/aside',
    name: 'aside',
    component: () => import('./aside-panel/index'),
    meta: {
      bind: 'aside'
    }
  },
  {
    path: '/component/chart',
    name: 'chart',
    component: () => import('./chart/index'),
    meta: {
      bind: 'chart'
    }
  },
  {
    path: '/component/tree',
    name: 'tree',
    component: () => import('./tree/index'),
    meta: {
      bind: 'tree'
    }
  },
  {
    path: '/component/icon',
    name: 'icon',
    component: () => import('./icon/index'),
    meta: {
      bind: 'icon'
    }
  }
]
