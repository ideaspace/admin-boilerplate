export default [
  {
    path: '/spec',
    name: 'spec',
    component: () => import('./index'),
    meta: {
      bind: 'spec'
    }
  },
  {
    path: '/spec/important-things',
    name: 'important-things',
    component: () => import('./important-things'),
    meta: {
      bind: 'spec'
    }
  },
  {
    path: '/spec/file-directory',
    name: 'file-directory',
    component: () => import('./file-directory'),
    meta: {
      bind: 'spec'
    }
  },
  {
    path: '/spec/app-interface',
    name: 'app-interface',
    component: () => import('./app-interface'),
    meta: {
      bind: 'spec'
    }
  },
  {
    path: '/spec/router-rules',
    name: 'router-rules',
    component: () => import('./router-rules'),
    meta: {
      bind: 'spec'
    }
  },
  {
    path: '/spec/state-manage',
    name: 'state-manage',
    component: () => import('./state-manage'),
    meta: {
      bind: 'spec'
    }
  },
  {
    path: '/spec/data-structure',
    name: 'data-structure',
    component: () => import('./data-structure'),
    meta: {
      bind: 'spec'
    }
  },
  {
    path: '/spec/code-spec',
    name: 'code-spec',
    component: () => import('./code-spec'),
    meta: {
      bind: 'spec'
    }
  },
  {
    path: '/spec/style-spec',
    name: 'style-spec',
    component: () => import('./style-spec'),
    meta: {
      bind: 'spec'
    }
  }
]
