import axios from 'axios'
import { REQUEST_API_URL } from 'config/config'

export const GetcodePhonenumber = async (params: any) => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/users/security/send-phonecode`, params)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const GetcodeEmail = async (params: any) => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/users/security/send-emailcode`, params)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const PhoneVerification = async (params: any) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/users/security/enable-phone-verify`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const ChangePhoneSubmit = async (params: any) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/users/security/change-phone-number`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const ChangeEmailSubmit = async (params: any) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/users/security/change-email`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const EnableEmailSubmit = async (params: any) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/users/security/enable-email`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const RemovePhoneSubmit = async (params: any) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/users/security/remove-phone-number`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const RemoveEmailSubmit = async (params: any) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/users/security/remove-email`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (error: any) {
    return console.log(error)
  }
}
