import type { RootState } from '../store'

// Other code such as selectors can use the imported `RootState` type
export const selectTradeHistory = (state: RootState) => state.trade.getTradeLists

export const isLoading = (state: RootState) => state.trade.isLoading
