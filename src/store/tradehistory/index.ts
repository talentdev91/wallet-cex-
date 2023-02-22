import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTradeList } from './actions'
import type { TradeHistoryState } from './types'

const PREFIX = 'trade'

const initialState: TradeHistoryState = {
  getTradeLists: [],
  isLoading: true,
}

const setTradeHistory = (state: TradeHistoryState, tradeHistory: any) => {
  state.isLoading = false
  if (tradeHistory.Success === true) {
    if (tradeHistory.Data !== null) {
      state.getTradeLists = tradeHistory.Data
    } else {
      state.getTradeLists = []
    }
  } else {
    state.getTradeLists = []
    //set error state here
  }
}

export const tradeHistorySlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updateTradeHistory: (state, action: PayloadAction<any>) => {
      if (action.payload !== null) {
        state.getTradeLists = [...action.payload]
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTradeList.fulfilled.type, (state: TradeHistoryState, action: PayloadAction<any>) => {
        if (action.payload.success) {
          setTradeHistory(state, action.payload.tradeHistory)
        } else {
          console.log('get trade history error:', action.payload.err)
        }
      })
      .addCase(getTradeList.pending.type, (state: TradeHistoryState) => {
        state.isLoading = true
      })
  },
})

export const { updateTradeHistory } = tradeHistorySlice.actions

export { getTradeList }

export default tradeHistorySlice.reducer
