import type { RootState } from '../store'

// Other code such as selectors can use the imported `RootState` type
export const isLoading = (state: RootState) => state.orderinfo.isLoading

export const isHideOtherPair = (state: RootState) => state.orderinfo.isHideOtherPair

export const orderopens = (state: RootState) => state.orderinfo.orderOpenList

export const orderhistory = (state: RootState) => state.orderinfo.orderHistory

export const tradehistory = (state: RootState) => state.orderinfo.tradeHistory
