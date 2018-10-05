```js
import http from './index.js'

export const getEnvList = (param = {}) => http.get(`/deploy/env`, param)

export const createEnv = (param = {}) => http.post(`/deploy/env`, param)

export const updateEnv = (deployEnvId, param = {}) => http.put(`/deploy/env/${deployEnvId}`, param)

export default {
  getEnvList,
  createEnv,
  updateEnv
}
```
