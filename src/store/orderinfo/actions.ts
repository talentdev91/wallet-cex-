import { createAsyncThunk } from '@reduxjs/toolkit'
import { orderOpenAPI, orderHistoryAPI, tradeHistoryAPI } from '../api/orderinfo'

const getOrderOpens = createAsyncThunk('orderopen/get/Opens', async (params: FormData) => {
  const response = await orderOpenAPI(params)

  const orderOpenData = {
    list: response.data,
  }
  return orderOpenData
})

const getOrderHistory = createAsyncThunk('orderhistory/get/history', async (params: FormData) => {
  const response = await orderHistoryAPI(params)
  const orderHistoryData = {
    list: response.data,
  }
  return orderHistoryData
})

const getTradeHistory = createAsyncThunk('tradehistory/get/history', async (params: FormData) => {
  const response = await tradeHistoryAPI(params)
  const tradeHistoryData = {
    list: response.data,
  }
  return tradeHistoryData
})

const hideOtherPair = createAsyncThunk('hide/other/pair', async (params: any) => {
  const payload = {
    hideOtherPairState: params,
  }
  return payload
})

export { getOrderOpens, getOrderHistory, getTradeHistory, hideOtherPair }
