import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getOrderLists } from './actions'
import type { OrderbookState } from './types'

const PREFIX = 'orderbook'

const initialState: OrderbookState = {
  buyOrderLists: [],
  sellOrderLists: [],
  isLoading: true,
}

const setOrderLists = (state: OrderbookState, orderListData: any) => {
  state.isLoading = false
  if (orderListData.list.Success === true) {
    if (orderListData.list.Data !== null) {
      let orderLists: OrderListsState[] = []

      for (let i = 0; i < orderListData.list.Data.length; i++) {
        orderLists.push({
          price: parseFloat(orderListData.list.Data[i].price),
          amount: parseFloat(orderListData.list.Data[i].amount),
          total: parseFloat(orderListData.list.Data[i].price) * parseFloat(orderListData.list.Data[i].amount),
        })
      }
      if (orderListData.orderType === '0') {
        state.buyOrderLists = [...orderLists]
      } else {
        state.sellOrderLists = [...orderLists]
      }
    } else {
      if (orderListData.orderType === '0') {
        state.buyOrderLists = []
      } else {
        state.sellOrderLists = []
      }
    }
  }
}

export const orderbookSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    storeSellOrder: (state, action: PayloadAction<any>) => {
      state.sellOrderLists = action.payload
    },
    storeBuyOrder: (state, action: PayloadAction<any>) => {
      state.buyOrderLists = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderLists.fulfilled.type, (state: OrderbookState, action: PayloadAction<any>) => {
        if (action.payload.success) {
          setOrderLists(state, action.payload.orderListData)
        } else {
          console.log('get order lists error:', action.payload.err)
        }
      })
      .addCase(getOrderLists.pending.type, (state: OrderbookState) => {
        state.isLoading = true
      })
  },
})

export const { storeSellOrder, storeBuyOrder } = orderbookSlice.actions

export { getOrderLists }

export default orderbookSlice.reducer
