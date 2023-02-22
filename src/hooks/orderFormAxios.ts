import axios from 'axios'
import { REQUEST_API_URL } from '../config/config'

export const BuyOrder = async (params: FormData) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/orders/buy`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const SellOrder = async (params: FormData) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/orders/sell`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const CancelOrder = async (params: FormData) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/orders/cancel`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const CoinBalance = async (params: FormData) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/users/balance`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const GetCoinInfoList = async () => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/coinpair/list`)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}
