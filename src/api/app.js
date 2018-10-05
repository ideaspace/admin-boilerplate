import http from './index'

export const getApps = (params = {}) => http.get(`/mocks/table.json`, { params })

export const getFontIcons = () => http.get(`/assets/fonts/data/font.yaml`)

export default {
  getApps,
  getFontIcons
}
