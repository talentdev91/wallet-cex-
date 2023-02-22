import { createAsyncThunk } from '@reduxjs/toolkit'

import { headerPriceAPI } from '../api/headerinfo'

const getHeaderPrices = createAsyncThunk('header/get/prices', async (params: FormData) => {
  const response = await headerPriceAPI(params)
  return response.data
})

export default getHeaderPrices
