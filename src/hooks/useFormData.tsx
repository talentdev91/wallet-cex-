/** @format */

import { useAppSelector } from '../store/hooks'
import { selectCoinPair } from '../store/header'
import { isHideOtherPair } from 'store/orderinfo/selectors'
import jwt_decode from 'jwt-decode'
import { OrderType, OrderStatus, ORDER_LIMIT_CNT, Second } from '../config/constants'

interface MyToken {
  userId: string
}

const useOrderFormData = () => {
  const pair = useAppSelector(selectCoinPair)
  const timeNow = Math.round(Date.now() / 1000)
  const oneDay = timeNow - Second.ONE_DAY_SECOND
  const hideOtherPair = useAppSelector(isHideOtherPair)

  let decoded: any = []

  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  let buyFormData = new FormData()
  buyFormData.append('order_side', `${OrderType.ORDER_BUY}`)
  buyFormData.append('order_status', OrderStatus.STATUS_ORDERED.toString())
  buyFormData.append('pair', pair)
  buyFormData.append('order_limit', ORDER_LIMIT_CNT)

  let sellFormData = new FormData()
  sellFormData.append('order_side', `${OrderType.ORDER_SELL}`)
  sellFormData.append('order_status', OrderStatus.STATUS_ORDERED.toString())
  sellFormData.append('pair', pair)
  sellFormData.append('order_limit', ORDER_LIMIT_CNT)

  const openOrderFormData = new FormData()
  openOrderFormData.append('user_id', decoded?.userId)
  openOrderFormData.append('pair', hideOtherPair === false ? '' : pair)

  const orderHistoryFormData = new FormData()
  orderHistoryFormData.append('user_id', decoded?.userId)
  orderHistoryFormData.append('order_status', OrderStatus.STATUS_ALL.toString())
  orderHistoryFormData.append('start_date', oneDay.toString())
  orderHistoryFormData.append('pair', hideOtherPair === false ? '' : pair)
  orderHistoryFormData.append('end_date', Date.now().toString())
  orderHistoryFormData.append('per_page', '10')
  orderHistoryFormData.append('cur_page', '0')

  const userTradeHistoryFormData = new FormData()
  userTradeHistoryFormData.append('user_id', decoded.userId)
  userTradeHistoryFormData.append('start_date', oneDay.toString())
  userTradeHistoryFormData.append('end_date', Date.now().toString())
  userTradeHistoryFormData.append('pair', hideOtherPair === false ? '' : pair)
  userTradeHistoryFormData.append('order_status', OrderStatus.STATUS_ALL.toString())
  userTradeHistoryFormData.append('per_page', '10')
  userTradeHistoryFormData.append('cur_page', '0')

  let tradeHistoryFormData = new FormData()
  tradeHistoryFormData.append('pair', pair)

  return {
    buyFormData: buyFormData,
    sellFormData: sellFormData,
    tradeHistoryFormData: tradeHistoryFormData,
    openOrderFormData: openOrderFormData,
    orderHistoryFormData: orderHistoryFormData,
    userTradeHistoryFormData: userTradeHistoryFormData,
  }
}

export default useOrderFormData
