interface OrderbookState {
  buyOrderLists: OrderListsState[]
  sellOrderLists: OrderListsState[]
  isLoading: boolean
}

export type { OrderbookState }
