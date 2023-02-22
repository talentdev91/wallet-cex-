import { createAsyncThunk } from '@reduxjs/toolkit'
import { tradeListsAPI } from '../api/tradehistory'

const getTradeList = createAsyncThunk('tradehistory/get/lists', async (params: FormData) => {
  try {
    const response = await tradeListsAPI(params)
    return {
      success: true,
      tradeHistory: response.data,
    }
  } catch (err) {
    return {
      success: false,
      err: err,
    }
  }
})

export { getTradeList }
