import axios from 'axios'
import { REQUEST_API_URL } from '../config/config'

export const CryptoDepositHistory = async (params: FormData) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/dwhistory/filter`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const CryptoWithdrawHistory = async (params: FormData) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/dwhistory/filter`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const FiatDepositHistory = async (params: FormData) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/fiat/filter`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const FiatWithdrawHistory = async (params: FormData) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/fiat/filter`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const ConfirmFiatDeposit = async (params: FormData) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/fiat/deposit`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const ConfirmFiatWithdraw = async (params: FormData) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/fiat/withdraw`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const GetCoinList = async () => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/coins/list`)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}
