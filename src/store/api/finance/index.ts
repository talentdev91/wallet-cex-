import axios from 'axios'
import { REQUEST_API_URL } from '../../../config/config'

const PREFIX = 'users'

export const balanceAPI = async (params: FormData) => {
  var jwtToken = localStorage.getItem('jwtToken')
  return axios.post(`${REQUEST_API_URL}/${PREFIX}/info`, params, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  })
}
