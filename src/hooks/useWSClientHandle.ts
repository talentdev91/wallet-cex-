import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectCoinPair } from '../store/header'
import { getOrderLists } from '../store/orderbook'
import { getHeaderPrices } from '../store/headerinfo'
import { getTradeList } from '../store/tradehistory'
import { getOrderOpens, getOrderHistory, getTradeHistory } from '../store/orderinfo'
import useHandleMessage from '../hooks/useHandleMessage'
import useFormData from '../hooks/useFormData'
import { Code } from '../config/constants'
import { wsClient } from '../config/config'

const useWSClientHandle = () => {
  const dispatch = useAppDispatch()
  const pair = useAppSelector(selectCoinPair)
  const { onParseMessage } = useHandleMessage()

  const {
    buyFormData,
    sellFormData,
    tradeHistoryFormData,
    openOrderFormData,
    orderHistoryFormData,
    userTradeHistoryFormData,
  } = useFormData()

  const sendCoinPair = {
    code: Code.CODE_COIN_PAIR,
    data: {
      pair: pair,
    },
  }

  const handleOpen = () => {
    console.log('ws connection opened')
    localStorage.setItem('webSocketDisConnectState', 'connect')
    dispatch(getOrderLists(buyFormData))
    dispatch(getOrderLists(sellFormData))
    dispatch(getTradeList(tradeHistoryFormData))
    dispatch(getOrderOpens(openOrderFormData))
    dispatch(getOrderHistory(orderHistoryFormData))
    dispatch(getTradeHistory(userTradeHistoryFormData))

    const formData = new FormData()
    formData.append('pair', pair)

    dispatch(getHeaderPrices(formData))
    wsClient.send(JSON.stringify(sendCoinPair))
  }

  const handleError = (error: any) => {
    console.error('ws error', error)
    handleClose()
  }

  const handleClose = () => {
    console.log('ws connection closed')
    localStorage.setItem('webSocketDisConnectState', 'disconnect')
  }

  const handleMessage = (event: any) => {
    const message = JSON.parse(event.data)
    onParseMessage(message)
  }

  return {
    handleMessage: handleMessage,
    handleClose: handleClose,
    handleError: handleError,
    handleOpen: handleOpen,
  }
}

export default useWSClientHandle
