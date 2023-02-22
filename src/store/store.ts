/** @format */

import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './header'
import orderbookReducer from './orderbook'
import authReducer from './auth'
import tradeReducer from './tradehistory'
import orderinfoReducer from './orderinfo'
import financeReducer from './finance'
import chatReducer from './chat'
import headerInfoReducer from './headerinfo'
import notificationReducer from './notification'
import tradingviewReducer from './tradingview'
import pongReducer from './pong'
import alertReducer from './alert'
import activityRecordReducer from './accountrecord'

export const store = configureStore({
  reducer: {
    header: headerReducer,
    order: orderbookReducer,
    auth: authReducer,
    trade: tradeReducer,
    orderinfo: orderinfoReducer,
    finance: financeReducer,
    chat: chatReducer,
    headerInfo: headerInfoReducer,
    notification: notificationReducer,
    tradingView: tradingviewReducer,
    pong: pongReducer,
    alert: alertReducer,
    activityRecord: activityRecordReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
