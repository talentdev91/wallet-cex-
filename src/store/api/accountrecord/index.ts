import axios from 'axios'
import { REQUEST_API_URL } from 'config/config'

const PREFIX = 'users'

export const loginActivityAPI = async (params: FormData) => {
  var jwtToken = localStorage.getItem('jwtToken')
  return axios.post(`${REQUEST_API_URL}/${PREFIX}/security/login_activity`, params, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  })
}

export const securityActivityAPI = async (params: FormData) => {
  var jwtToken = localStorage.getItem('jwtToken')
  return axios.post(`${REQUEST_API_URL}/${PREFIX}/security/security_activity`, params, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  })
}
