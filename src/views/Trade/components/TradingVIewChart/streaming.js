import { parseFullSymbol } from './helpers.js'
import { wsClient } from '../../../../config/config'
import { Code } from '../../../../config/constants'

const channelToSubscription = new Map()

const getMessage = (message) => {
  if (message.Code === Code.CODE_TRADING_VIEW) {
    const data = message.Data

    const exchange = data.Exchange
    const fromSymbol = data.FromSymbol
    const toSymbol = data.ToSymbol
    const tradeTimeStr = data.TradeTimeStr
    const tradePriceStr = data.TradePriceStr

    const tradePrice = parseFloat(tradePriceStr)
    const tradeTime = parseInt(tradeTimeStr)
    const channelString = `0~${exchange}~${fromSymbol}~${toSymbol}`
    const subscriptionItem = channelToSubscription.get(channelString)

    if (subscriptionItem === undefined) {
      return
    }
    const lastDailyBar = subscriptionItem.lastDailyBar
    const nextDailyBarTime = getNextDailyBarTime(lastDailyBar.time)

    let bar
    if (tradeTime >= nextDailyBarTime) {
      bar = {
        time: nextDailyBarTime,
        open: tradePrice,
        high: tradePrice,
        low: tradePrice,
        close: tradePrice,
      }
    } else {
      bar = {
        ...lastDailyBar,
        high: Math.max(lastDailyBar.high, tradePrice),
        low: Math.min(lastDailyBar.low, tradePrice),
        close: tradePrice,
      }
    }
    subscriptionItem.lastDailyBar = bar
    // send data to every subscriber of that symbol
    subscriptionItem.handlers.forEach((handler) => handler.callback(bar))
  } else {
    return
  }
}

function getNextDailyBarTime(barTime) {
  const date = new Date(barTime * 1000)
  date.setDate(date.getDate() + 1)
  return date.getTime() / 1000
}

export function subscribeOnStream(
  symbolInfo,
  resolution,
  onRealtimeCallback,
  subscribeUID,
  onResetCacheNeededCallback,
  lastDailyBar,
) {
  const parsedSymbol = parseFullSymbol(symbolInfo.full_name)
  const channelString = `0~${parsedSymbol.exchange}~${parsedSymbol.fromSymbol}~${parsedSymbol.toSymbol}`
  const handler = {
    id: subscribeUID,
    callback: onRealtimeCallback,
  }
  let subscriptionItem = channelToSubscription.get(channelString)
  if (subscriptionItem) {
    // already subscribed to the channel, use the existing subscription
    subscriptionItem.handlers.push(handler)
    return
  }
  subscriptionItem = {
    subscribeUID,
    resolution,
    lastDailyBar,
    handlers: [handler],
  }
  channelToSubscription.set(channelString, subscriptionItem)

  wsClient.addEventListener('SubAdd', () => {
    wsClient.send({ subs: [channelString] })
  })
}

export function unsubscribeFromStream(subscriberUID) {
  // find a subscription with id === subscriberUID
  for (const channelString of channelToSubscription.keys()) {
    const subscriptionItem = channelToSubscription.get(channelString)
    const handlerIndex = subscriptionItem.handlers.findIndex((handler) => handler.id === subscriberUID)

    if (handlerIndex !== -1) {
      // remove from handlers
      subscriptionItem.handlers.splice(handlerIndex, 1)

      if (subscriptionItem.handlers.length === 0) {
        // unsubscribe from the channel, if it was the last handler

        wsClient.removeEventListener('SubRemove', () => {
          wsClient.send({ subs: [channelString] })
        })
        channelToSubscription.delete(channelString)
        break
      }
    }
  }
}

export default getMessage
