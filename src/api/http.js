/** @format */
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.axios = axios

axios.defaults.baseURL = process.env.VUE_APP_HOST || ''

const request = ({ url, method = 'post', data = {}, ...options } = {}) => {
  const { headers = {} } = options
  const datas = method === 'get' ? { params: data } : { data }

  return axios({
    url,
    method,
    headers,
    ...datas
  })
    .catch(response => {
      if (axios.isCancel(response)) {
        return Promise.reject(response)
      } else {
        const error = { ErrorCode: 500, ErrorMsg: '服务器繁忙' }
        return Promise.reject(error)
      }
    })
    .then(response => {
      let { data } = response

      if (typeof data === 'string') {
        // 转换返回json
        data = JSON.parse(data || '{}')
      }

      if (data) {
        return Promise.resolve(data)
      }

      return Promise.reject(data)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

/**
 *
 */
export const get = ({ url, data, ...options } = {}) => {
  return request({
    url,
    method: 'get',
    data,
    ...options
  })
}

export const post = ({ url, data, ...options } = {}) => {
  return request({
    url,
    method: 'post',
    data,
    ...options
  })
}
