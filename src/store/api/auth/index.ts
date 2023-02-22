import axios from 'axios'
import { REQUEST_API_URL } from '../../../config/config'

const PREFIX = 'users'
var jwtToken = localStorage.getItem('jwtToken')

export const registerAPI = async (params: FormData) => axios.post(`${REQUEST_API_URL}/${PREFIX}/signup`, params)

export const loginAPI = async (params: FormData) => axios.post(`${REQUEST_API_URL}/${PREFIX}/signin`, params)

export const getSecurityInfoAPI = async (params: FormData) =>
  axios.post(`${REQUEST_API_URL}/${PREFIX}/security/info`, params, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  })
