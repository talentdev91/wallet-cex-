import { createAsyncThunk } from '@reduxjs/toolkit'
import { orderListsAPI } from '../api/orderbook'

const getOrderLists = createAsyncThunk('orderbook/get/lists', async (params: FormData) => {
  try {
    const response = await orderListsAPI(params)
    const orderType = params.get('order_side')
    const orderListData = {
      list: response.data,
      orderType: orderType,
    }

    return {
      success: true,
      orderListData: orderListData,
    }
  } catch (err) {
    return {
      success: false,
      err: err,
    }
  }
})

export { getOrderLists }
