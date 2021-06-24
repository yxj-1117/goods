import axios from 'axios'


// 服务器最长请求事件，超时，请求失败
axios.defaults.timeout = 1000 * 50

// 返回其他的状态码
axios.defaults.validateStatus = status => status >= 200 && status <= 500;

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  return res.data;
}, error => {
  return Promise.reject(error)
})

export default axios