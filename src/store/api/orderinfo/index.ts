import axios from 'axios'
import { REQUEST_API_URL } from '../../../config/config'

const PREFIX = 'orders'
//localhost:9090/api/v1/admin/tradehistory/filter

export const orderOpenAPI = async (params: FormData) => {
  var jwtToken = localStorage.getItem('jwtToken')
  return axios.post(`${REQUEST_API_URL}/${PREFIX}/open`, params, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  })
}

export const orderHistoryAPI = async (params: FormData) => {
  var jwtToken = localStorage.getItem('jwtToken')
  return axios.post(`${REQUEST_API_URL}/orders/history`, params, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  })
}

export const tradeHistoryAPI = async (params: FormData) => {
  var jwtToken = localStorage.getItem('jwtToken')
  return axios.post(`${REQUEST_API_URL}/tradehistory/filter`, params, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  })
}
