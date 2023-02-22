import React from "react";

import { useAppSelector } from "../store/hooks";
import { selectSellOrderLists } from "../store/orderbook/selectors";

export const FetchOrders = (): OrderListsState[] => {
  const orders = useAppSelector(selectSellOrderLists);
  return orders;
};
