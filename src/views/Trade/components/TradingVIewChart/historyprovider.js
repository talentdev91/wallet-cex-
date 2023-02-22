var rp = require('request-promise').defaults({ json: true })

const history = {}

const api_temp_root = 'e=zilionixx&fsym=BTC&tsym=USDT&toTs=1611878400&limit=2000'
const historyProvider = {
  history: history,

  getBars: function (symbolInfo, first) {
    const qs = {
      interval: '15m',
    }

    return rp({
      url: `${api_temp_root}`,
      qs,
    }).then((data) => {
      if (data.Response && data.Response === 'Error') {
        return []
      }
      if (data.length) {
        var bars = data.map((el) => {
          return {
            time: new Date(el[0]).getTime(), //TradingView requires bar time in ms
            low: el[3], //low
            high: el[2], //high
            open: el[1], //open
            close: el[4], //close
            volume: el[5], //volumn
          }
        })
        if (first) {
          var lastBar = bars[bars.length - 1]
          history[symbolInfo.name] = { lastBar: lastBar }
        }
        return bars
      } else {
        return []
      }
    })
  },
}

export default historyProvider
