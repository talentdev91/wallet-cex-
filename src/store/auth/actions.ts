import { createBrowserHistory } from 'history'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { registerAPI, loginAPI, getSecurityInfoAPI } from '../api/auth'
import setAuthToken from '../../utils/setAuthToken'
export const browserHistory = createBrowserHistory()

const createUser = createAsyncThunk('register/post/users', async (params: FormData) => {
  try {
    const response = await registerAPI(params)

    if (!response.data.Success) {
      return response.data
    } else {
      browserHistory.push(`/verification-new-register/email`, params.get('email'))
      window.location.reload()
      return response.data
    }
  } catch (error: any) {
    return console.log(error)
  }
})

const loginUser = createAsyncThunk('user/login', async (data: FormData) => {
  try {
    const response = await loginAPI(data)

    if (!response.data.Success) {
      return response.data
    } else {
      // const currentTime = Date.now() / 1000 + 300;
      localStorage.setItem('jwtToken', response.data.JwtToken)
      return response.data
    }
  } catch (error: any) {
    return console.log(error)
  }
})

const logOutUser = createAsyncThunk('user/logOut', async () => {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  return null
})

const getSecurityInfo = createAsyncThunk('user/security/info', async (data: FormData) => {
  try {
    const response = await getSecurityInfoAPI(data)

    return response.data
  } catch (error: any) {
    console.log(error)
  }
})

export { createUser, loginUser, logOutUser, getSecurityInfo }
