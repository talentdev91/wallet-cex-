import axios from 'axios'
import { REQUEST_API_URL } from 'config/config'

export const getTradingFee = async (params: any) => {
  var jwtToken = localStorage.getItem('jwtToken')
  try {
    const response = await axios.post(`${REQUEST_API_URL}/users/security/settings`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}
