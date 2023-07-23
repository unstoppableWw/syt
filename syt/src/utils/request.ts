import axios from 'axios'
import { ElMessage } from 'element-plus'

declare module 'axios' {
  interface AxiosResponse<T = any> {
    errorinfo: null
    // 这里追加你的参数
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance
}

const request = axios.create({
  baseURL: '/api',
  timeout: 5000 //超时的时间设置，超出5s就是失败
})

//请求拦截器
request.interceptors.request.use(config => {
  return config
})

//响应拦截器
request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    let status = error.response.status

    switch (status) {
      case 404:
        ElMessage({
          type: 'error',
          message: '请求失败路径出现问题'
        })
        break
      case 500 | 501 | 502 | 503 | 504 | 505:
        ElMessage({
          type: 'error',
          message: '服务器挂了'
        })
        break
      case 401:
        ElMessage({
          type: 'error',
          message: '参数有误'
        })
        break
    }
    return Promise.reject(new Error(error.message))
  }
)

export default request
