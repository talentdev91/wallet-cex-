/** @format */

import { useAppDispatch } from '../store/hooks'
import { storeSellOrder, storeBuyOrder } from '../store/orderbook'
import { updateTradeHistory } from '../store/tradehistory'
import { updatePublicChatHistory, updateSupportChatHistory } from '../store/chat'
import { updateNotification } from '../store/notification'
import { updateHeaderPrice } from '../store/headerinfo'
import { updatePongMessageReceived } from '../store/pong'
import useFormData from 'hooks/useFormData'
import { Code } from '../config/constants'
// import { updateTradingView } from '../store/tradingview'
import jwt_decode from 'jwt-decode'
import { getOrderHistory, getTradeHistory } from 'store/orderinfo'

import getMessage from '../views/Trade/components/TradingVIewChart/streaming'

interface MyToken {
  userId: string
}
const useHandleMessage = () => {
  const dispatch = useAppDispatch()
  const { orderHistoryFormData, userTradeHistoryFormData } = useFormData()

  let decoded: any = []
  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  const parseMessage = (message: any) => {
    if (message.Code === Code.CODE_SELL || message.Code === Code.CODE_BUY) {
      handleOrderCode(message)
    } else if (message.Code === Code.CODE_TRADE_EVENT) {
      handleTradeHistoryCode(message)
      dispatch(getOrderHistory(orderHistoryFormData))
      dispatch(getTradeHistory(userTradeHistoryFormData))
    } else if (message.Code === Code.CODE_PUBLIC_CHAT) {
      handleChatHistoryCode(message)
    } else if (message.Code === Code.CODE_SUPPORT_MESSAGE) {
      handleSupportChatHistoryCode(message)
    } else if (message.Code === Code.CODE_CLIENT_MESSAGE) {
      handleClientChatHistoryCode(message)
    } else if (message.Code === Code.CODE_COIN_PRICE) {
      handleHeaderPriceCode(message)
    } else if (message.Code === Code.CODE_NOTIFICATION) {
      handleNotification(message)
    } else if (message.Code === Code.CODE_TRADING_VIEW) {
      getMessage(message)
    } else if (message.Code === Code.CODE_PING) {
      handlePongMessageReceived(message)
    }
  }

  const handleOrderCode = (message: any) => {
    let newOrderLists: OrderListsState[] = []

    for (let i = 0; i < (message.Data?.length || 0); i++) {
      newOrderLists.push({
        price: parseFloat(message.Data[i].price),
        amount: parseFloat(message.Data[i].amount),
        total: parseFloat(message.Data[i].price) * parseFloat(message.Data[i].amount),
      })
    }

    if (message.Code === Code.CODE_BUY) {
      dispatch(storeBuyOrder(newOrderLists))
    } else if (message.Code === Code.CODE_SELL) {
      dispatch(storeSellOrder(newOrderLists))
    }
  }

  const handleTradeHistoryCode = (message: any) => {
    dispatch(updateTradeHistory(message.Data))
  }

  const handleChatHistoryCode = (message: any) => {
    const Data = {
      UserId: message.Data.UserID,
      Message: message.Data.Msg,
      Type: message.Data.Type,
      Email: message.Data.Email,
      CreatedAt: message.Data.CreatedAt,
    }
    dispatch(updatePublicChatHistory(Data))
  }

  const handleSupportChatHistoryCode = (message: any) => {
    if (decoded?.userId === message.Data.UserID.toString()) {
      const Data = {
        UserId: message.Data.UserID,
        Message: message.Data.Msg,
        Type: 'Support',
        CreatedAt: message.Data.CreatedAt,
      }
      dispatch(updateSupportChatHistory(Data))
    }
  }

  const handleClientChatHistoryCode = (message: any) => {
    const Data = {
      UserId: message.Data.UserID,
      Message: message.Data.Msg,
      Type: message.Data.Type,
      Email: message.Data.Email,
      CreatedAt: message.Data.CreatedAt,
    }
    dispatch(updateSupportChatHistory(Data))
  }

  const handleHeaderPriceCode = (message: any) => {
    const Data = {
      Pair: message?.Data?.Pair,
      High: message?.Data?.High,
      Low: message?.Data?.Low,
      Percent: message?.Data?.Percent,
      Price: message?.Data?.Price,
      PrevPrice: message?.Data?.PrevPrice,
      VolumeFrom: message?.Data?.VolumeFrom,
      VolumeTo: message?.Data?.VolumeFrom,
    }

    dispatch(updateHeaderPrice(Data))
  }

  const handleNotification = (message: any) => {
    const Data = {
      Status: message.Data.Status,
      Message: message.Data.Message,
    }
    dispatch(updateNotification(Data))
  }

  const handlePongMessageReceived = (message: any) => {
    const Data = {
      time: Date.now(),
    }
    dispatch(updatePongMessageReceived(Data))
  }

  return { onParseMessage: parseMessage }
}

export default useHandleMessage
