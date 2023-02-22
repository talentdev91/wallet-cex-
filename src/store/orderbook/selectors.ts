import type { RootState } from '../store'

// Other code such as selectors can use the imported `RootState` type
export const selectBuyOrderLists = (state: RootState) => state.order.buyOrderLists

export const selectSellOrderLists = (state: RootState) => state.order.sellOrderLists

export const isLoading = (state: RootState) => state.order.isLoading
