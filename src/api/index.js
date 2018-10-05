import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

const http = axios.create({
  baseURL: ''
})

http.interceptors.request.use(
  config => {
    // 请求头信息配置
    return config
  },
  error => {
    Message.error(error)
  }
)

http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          Message.error(error.response.data)
          break
        case 404:
          Message.error(error.response.data)
          break
        case 401:
          MessageBox.alert('会话已过期, 请重新登录!', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            showClose: false,
            callback: _ => {
              location.href = '/'
            }
          })
          break
      }
    }
    return Promise.reject(error)
  }
)

export default http
