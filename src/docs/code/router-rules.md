```js
export default [
  {
    path: '/app/:appId/:serviceId',  // 路由参数
    name: 'app',
    component: () => import('./index'),
    meta: {
      bind: 'app'
    }
  }
]
```
