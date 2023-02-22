/** @format */

export const OrderType = {
  ORDER_BUY: 0,
  ORDER_SELL: 1,
}

export const ChatType = {
  CHAT_SUPPORT: 1,
  CHAT_PUBLIC: 2,
}

export const CryptoType = {
  CRYPTO_DEPOSIT: '1',
  CRYPTO_WITHDRAW: '2',
}
export const FiatType = {
  FIAT_DEPOSIT: '1',
  FIAT_WITHDRAW: '2',
}
export const OrderStatus = {
  STATUS_ALL: 0,
  STATUS_ORDERED: 1,
  STATUS_ORDER_FINISHED: 2,
  STATUS_ORDER_CANCELLED: 3,
}
export const Notification = {
  NOTIFICATION_ALL: 0,
  NOTIFICATION_ACTIVE: 1,
  NOTIFICATION_INACTIVE: 2,
}
export const Code = {
  CODE_PUBLIC_CHAT: 1,
  CODE_SUPPORT_MESSAGE: 2,
  CODE_CLIENT_MESSAGE: 3,
  CODE_BUY: 4,
  CODE_SELL: 5,
  CODE_PING: 6,
  CODE_COIN_PAIR: 7,
  CODE_TRADE_EVENT: 8,
  CODE_COIN_PRICE: 9,
  CODE_NOTIFICATION: 10,
  CODE_ADMIN_CLIENT: 11,
  CODE_TRADING_VIEW: 12,
}

export const During = {
  ONE_DAY: 0,
  ONE_WEEK: 1,
  ONE_MONTH: 2,
  THREE_MONTH: 3,
}

export const PhoneVerifyState = {
  STATUS_NOT_VERIFIED: 0,
  STATUS_VERIFIED: 1,
}

export const Second = {
  ONE_DAY_SECOND: 86400,
  WEEK_DAY_SECOND: 604800,
  MONTH_DAY_SECOND: 2592000,
  THREE_MONTH_SECOND: 7776000,
}

export const PAYPAL_CLIENT_ID = {
  clientId: 'ASgaX15q4b6oHQvkyl5yTtCVZXJVl5OEMFRGOrbUgrBh2u8tTE4t8lZED0_N1gu2_iU3KRY4SBWW8lls',
}
export const ORDER_LIMIT_CNT = '30'
export const TRADE_LIMIT_CNT = 100

export const CAPCTHA_ID = '6LevoSYdAAAAAEVeDuRpecufCrOZ81j3dDQiyWsU'
export const OrderStandardTotalValue: OrderStandardTotalValueType[] = [
  {
    pair: 'ZNX/ETH',
    standard: 10000,
  },
  {
    pair: 'ZNX/BTC',
    standard: 10000,
  },
  {
    pair: 'ZNX/BNB',
    standard: 10000,
  },
  {
    pair: 'ZNX/USD',
    standard: 20000,
  },
  {
    pair: 'ZNX/USDT',
    standard: 20000,
  },
  {
    pair: 'BTC/USDT',
    standard: 35000,
  },
]

export const marks = [
  //this is slider mark of order form
  {
    value: 0,
    label: '0%',
  },
  {
    value: 25,
    label: '25%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 75,
    label: '75%',
  },
  {
    value: 100,
    label: '100%',
  },
]

export const newUserInfoState = '1'
