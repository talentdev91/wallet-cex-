import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getOrderOpens, getOrderHistory, getTradeHistory, hideOtherPair } from './actions'
import type { OrderOpenState } from './types'

const PREFIX = 'orderinfo'

const initialState: OrderOpenState = {
  isLoading: true,
  isHideOtherPair: false,
  isFirstLoading: true,
  orderOpenList: [],
  orderHistory: [],
  tradeHistory: [],
}

const setOrderOpenState = (state: OrderOpenState) => {
  state.isLoading = true
}
const setOrderOpenLists = (state: OrderOpenState, orderInfoData: any) => {
  state.orderOpenList = orderInfoData
  state.isLoading = false
}

const setOrderHistoryState = (state: OrderOpenState) => {
  state.isLoading = true
}
const setOrderHistoryLists = (state: OrderOpenState, orderHistoryData: any) => {
  state.orderHistory = orderHistoryData
  state.isLoading = false
}

const setTradeHistoryState = (state: OrderOpenState) => {
  state.isLoading = true
}
const setTradeHistoryLists = (state: OrderOpenState, tradeHistoryData: any) => {
  state.tradeHistory = tradeHistoryData
  state.isLoading = false
}

export const orderOpenSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderOpens.fulfilled.type, (state: OrderOpenState, action: PayloadAction<any>) => {
        setOrderOpenLists(state, action.payload)
      })
      .addCase(getOrderOpens.pending.type, (state: OrderOpenState) => {
        if (state.isFirstLoading) {
          setOrderOpenState(state)
          state.isFirstLoading = false
        }
      })
      .addCase(getOrderHistory.fulfilled.type, (state: OrderOpenState, action: PayloadAction<any>) => {
        setOrderHistoryLists(state, action.payload)
      })
      .addCase(getOrderHistory.pending.type, (state: OrderOpenState) => {
        if (state.isFirstLoading) {
          setOrderHistoryState(state)
          state.isFirstLoading = false
        }
      })
      .addCase(getTradeHistory.fulfilled.type, (state: OrderOpenState, action: PayloadAction<any>) => {
        setTradeHistoryLists(state, action.payload)
      })
      .addCase(getTradeHistory.pending.type, (state: OrderOpenState) => {
        if (state.isFirstLoading) {
          setTradeHistoryState(state)
          state.isFirstLoading = false
        }
      })
      .addCase(hideOtherPair.fulfilled.type, (state: OrderOpenState, action: PayloadAction<any>) => {
        state.isHideOtherPair = action.payload.hideOtherPairState
      })
  },
})

export { getOrderHistory, getOrderOpens, getTradeHistory, hideOtherPair }

export default orderOpenSlice.reducer
