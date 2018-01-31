import axios from 'axios'

export default ({ Vue }) => {
  const $axios = axios.create({
    baseURL: 'http://localhost:80/api',
    timeout: 1000,
    withCredentials: true
  })

  Vue.prototype.$axios = $axios
}
