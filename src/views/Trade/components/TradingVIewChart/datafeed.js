import { makeApiRequest, generateSymbol, parseFullSymbol } from './helpers.js'
import { subscribeOnStream, unsubscribeFromStream } from './streaming.js'
const lastBarsCache = new Map()

const configurationData = {
  supported_resolutions: ['1D', '1W', '1M'],
  exchanges: [
    // {
    //   value: "nexrev",
    //   name: "nexrev",
    //   desc: "nexrev",
    // },
    {
      // `exchange` argument for the `searchSymbols` method, if a user selects this exchange
      value: 'zilionixx',

      // filter name
      name: 'zilionixx',

      // full exchange name displayed in the filter popup
      desc: 'zilionixx',
    },
  ],
  symbols_types: [
    {
      name: 'crypto',

      // `symbolType` argument for the `searchSymbols` method, if a user selects this symbol type
      value: 'crypto',
    },
    // ...
  ],
}

async function getAllSymbols() {
  const data = await makeApiRequest('api/v1/trade/allexchanges')

  // console.log(data);
  let allSymbols = []
  // console.log(configurationData.exchanges);
  if (data) {
    for (const exchange of configurationData.exchanges) {
      const pairs = data.Data[exchange.value].Pair
      // console.log(pairs);
      for (const leftPairPart of Object.keys(pairs)) {
        const symbols = pairs[leftPairPart].map((rightPairPart) => {
          const symbol = generateSymbol(exchange.value, leftPairPart, rightPairPart)
          return {
            symbol: symbol.short,
            full_name: symbol.full,
            description: symbol.short,
            exchange: exchange.value,
            type: 'crypto',
          }
        })
        allSymbols = [...allSymbols, ...symbols]
      }
    }
  }

  return allSymbols
}

export default {
  onReady: (callback) => {
    setTimeout(() => callback(configurationData))
  },
  searchSymbols: async (userInput, exchange, symbolType, onResultReadyCallback) => {
    const symbols = await getAllSymbols()
    const newSymbols = symbols.filter((symbol) => {
      const isExchangeValid = exchange === '' || symbol.exchange === exchange
      const isFullSymbolContainsInput = symbol.full_name.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
      return isExchangeValid && isFullSymbolContainsInput
    })
    onResultReadyCallback(newSymbols)
  },

  resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
    // console.log("[resolveSymbol]: Method call", symbolName);
    const symbols = await getAllSymbols()

    // console.log(symbols);
    const symbolItem = symbols.find(({ full_name }) => full_name === symbolName)
    if (!symbolItem) {
      // console.log("[resolveSymbol]: Cannot resolve symbol", symbolName);
      onResolveErrorCallback('cannot resolve symbol')
      return
    }
    const symbolInfo = {
      ticker: symbolItem.full_name,
      name: symbolItem.symbol,
      description: symbolItem.description,
      type: symbolItem.type,
      session: '24x7',
      timezone: 'Etc/UTC',
      exchange: symbolItem.exchange,
      minmov: 1,
      pricescale: 100,
      has_intraday: true,
      has_no_volume: true,
      has_weekly_and_monthly: false,
      supported_resolutions: configurationData.supported_resolutions,
      volume_precision: 2,
      data_status: 'streaming',
    }
    onSymbolResolvedCallback(symbolInfo)
  },

  getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
    const { from, to, firstDataRequest } = periodParams
    const parsedSymbol = parseFullSymbol(symbolInfo.full_name)
    const urlParameters = {
      e: parsedSymbol.exchange,
      fsym: parsedSymbol.fromSymbol,
      tsym: parsedSymbol.toSymbol,
      toTs: to,
      limit: 2000,
    }
    const query = Object.keys(urlParameters)
      .map((name) => `${name}=${encodeURIComponent(urlParameters[name])}`)
      .join('&')
    const data = await makeApiRequest(`api/v1/trade/getBars?${query}`)
    if (!data.Response) {
      onHistoryCallback([], {
        noData: true,
      })
      return
    }
    let bars = []
    data.Data.forEach((bar) => {
      if (bar.Time >= from && bar.Time < to) {
        bars = [
          ...bars,
          {
            time: bar.Time * 1000,
            low: bar.Low,
            high: bar.High,
            open: bar.Open,
            close: bar.Close,
          },
        ]
      }
    })
    if (firstDataRequest) {
      lastBarsCache.set(symbolInfo.full_name, {
        ...bars[bars.length - 1],
      })
    }
    onHistoryCallback(bars, {
      noData: false,
    })
  },

  subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
    console.log('[subscribeBars]: Method call with subscribeUID:', subscribeUID)
    subscribeOnStream(
      symbolInfo,
      resolution,
      onRealtimeCallback,
      subscribeUID,
      onResetCacheNeededCallback,
      lastBarsCache.get(symbolInfo.full_name),
    )
  },

  unsubscribeBars: (subscriberUID) => {
    console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID)
    unsubscribeFromStream(subscriberUID)
  },
}
