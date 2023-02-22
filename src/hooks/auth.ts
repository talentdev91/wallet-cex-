import axios from 'axios'
import { REQUEST_API_URL } from '../config/config'

export const ForgotPassword = async (params: FormData) => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/users/forgotpassword`, params)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const ConfirmPassword = async (params: any) => {
  try {
    const response = await axios.get(`${REQUEST_API_URL}/email/forgot_password/confirm`, params)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const ConfirmRegister = async (params: any) => {
  try {
    const response = await axios.get(`${REQUEST_API_URL}/email/register/confirm`, params)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const RegisterResend = async (params: FormData) => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/email/register/resend`, params)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const PhoneRegister = async (params: any) => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/users/phone/signup`, params)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const SendCode = async (params: FormData) => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/users/phone/sendcode`, params)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const PhoneRegisterVerify = async (params: any) => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/users/phone/signup-verify`, params)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const PhoneLogin = async (params: any) => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/users/phone/signin`, params)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const PhoneLoginVerify = async (params: any) => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/users/phone/signin-verify`, params)
    return response
  } catch (error: any) {
    return console.log(error)
  }
}

export const changePassword = async (params: FormData) => {
  try {
    var jwtToken = localStorage.getItem('jwtToken')
    const response = await axios.post(`${REQUEST_API_URL}/users/security/change-password`, params, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    return response
  } catch (err) {
    console.log(err)
  }
}
