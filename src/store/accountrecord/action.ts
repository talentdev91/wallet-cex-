/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginActivityAPI, securityActivityAPI } from '../api/accountrecord'

const getLoginActivityRecord = createAsyncThunk('login/get/record', async (params: FormData) => {
  const response = await loginActivityAPI(params)

  return response.data
})

const getSecurityActivityRecord = createAsyncThunk('security/get/record', async (params: FormData) => {
  const response = await securityActivityAPI(params)
  return response.data
})

export { getLoginActivityRecord, getSecurityActivityRecord }
