export default [
  {
    path: '/',
    name: 'start',
    component: () => import('./index'),
    meta: {
      bind: 'start'
    }
  }
]
