import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createUser, loginUser, getSecurityInfo } from './actions'
import type { authState } from './types'

const PREFIX = 'auth'

const initialState: authState = {
  createUsers: {},
  loginUser: {},
  securityInfo: {
    AntiPhishingCode: '',
    Email: '',
    EmailVerify: 0,
    IPAddress: '0.0.0.0',
    LastLogin: 0,
    PhoneNumber: '',
    PhoneVerify: 0,
    SecurityKey: '',
    Whitelist: [],
  },
}

const setUserRegister = (state: authState, users: any) => {
  state.createUsers = users
}

const setUserLogin = (state: authState, users: any) => {
  state.loginUser = users
}

const setSecurityinfo = (state: authState, res: any) => {
  if (res?.Success) {
    state.securityInfo = res.Data
  }
}

export const authReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled.type, (state: authState, action: PayloadAction<any>) => {
        setUserRegister(state, action.payload)
      })
      .addCase(loginUser.fulfilled.type, (state: authState, action: PayloadAction<any>) => {
        setUserLogin(state, action.payload)
      })
      .addCase(getSecurityInfo.fulfilled.type, (state: authState, action: PayloadAction<any>) => {
        setSecurityinfo(state, action.payload)
      })
  },
})

export { createUser, loginUser, getSecurityInfo }

export default authReducer.reducer
