import * as React from 'react'
import './index.css'
import { widget, ChartingLibraryWidgetOptions, IChartingLibraryWidget, ResolutionString } from '../charting_library'
import Datafeed from './datafeed.js'
import { wsClient } from '../../../../config/config'
import { Code } from '../../../../config/constants'

export interface ChartContainerProps {
  symbol: ChartingLibraryWidgetOptions['symbol']
  interval: ChartingLibraryWidgetOptions['interval']
  // BEWARE: no trailing slash is expected in feed URL
  datafeedUrl: string
  libraryPath: ChartingLibraryWidgetOptions['library_path']
  chartsStorageUrl: ChartingLibraryWidgetOptions['charts_storage_url']
  chartsStorageApiVersion: ChartingLibraryWidgetOptions['charts_storage_api_version']
  clientId: ChartingLibraryWidgetOptions['client_id']
  userId: ChartingLibraryWidgetOptions['user_id']
  fullscreen: ChartingLibraryWidgetOptions['fullscreen']
  autosize: ChartingLibraryWidgetOptions['autosize']
  studiesOverrides: ChartingLibraryWidgetOptions['studies_overrides']
  containerId: ChartingLibraryWidgetOptions['container_id']
  theme: ChartingLibraryWidgetOptions['theme']
}

export interface ChartContainerState {}

export class TVChartContainer extends React.PureComponent<Partial<ChartContainerProps>, ChartContainerState> {
  public static defaultProps: ChartContainerProps = {
    symbol: 'zilionixx:ZNX/USDT',
    interval: 'D' as ResolutionString,
    containerId: 'tv_chart_container',
    datafeedUrl: 'https://demo_feed.tradingview.com',
    libraryPath: '/charting_library/',
    chartsStorageUrl: 'https://saveload.tradingview.com',
    chartsStorageApiVersion: '1.1',
    clientId: 'tradingview.com',
    userId: 'public_user_id',
    fullscreen: false,
    autosize: true,
    studiesOverrides: {},
    theme: 'Dark',
  }

  private tvWidget: IChartingLibraryWidget | null = null

  public componentDidMount(): void {
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: this.props.symbol as string,
      datafeed: Datafeed,
      interval: this.props.interval as ChartingLibraryWidgetOptions['interval'],
      container_id: this.props.containerId as ChartingLibraryWidgetOptions['container_id'],
      library_path: this.props.libraryPath as string,
      locale: 'en',
      enabled_features: ['hide_left_toolbar_by_default'],
      disabled_features: ['use_localstorage_for_settings'],
      charts_storage_url: this.props.chartsStorageUrl,
      charts_storage_api_version: this.props.chartsStorageApiVersion,
      client_id: this.props.clientId,
      user_id: this.props.userId,
      theme: this.props.theme,
      fullscreen: this.props.fullscreen,
      autosize: this.props.autosize,
      studies_overrides: this.props.studiesOverrides,
      // debug: true,
    }
    const tvWidget = new widget(widgetOptions)
    this.tvWidget = tvWidget

    // tvWidget.onChartReady(() => {
    //   tvWidget.headerReady().then(() => {
    //     const button = tvWidget.createButton()
    //     button.setAttribute('title', 'Click to show a notification popup')
    //     button.classList.add('apply-common-tooltip')
    //     button.addEventListener('click', () =>
    //       tvWidget.showNoticeDialog({
    //         title: 'Notification',
    //         body: 'TradingView Charting Library API works correctly',
    //         callback: () => {
    //           console.log('Noticed!')
    //         },
    //       }),
    //     )
    //     button.innerHTML = 'Check API'
    //   })
    // })
  }

  public componentWillReceiveProps(nextProps: any) {
    this.tvWidget?.onChartReady(() => {
      if (nextProps.symbol !== this.props && nextProps.symbol !== undefined && nextProps.interval !== undefined) {
        this.tvWidget?.setSymbol(nextProps.symbol, nextProps.interval, () => {})
        const sendCoinPair = {
          code: Code.CODE_COIN_PAIR,
          data: {
            pair: nextProps.symbol.split(':')[1],
          },
        }
        wsClient.send(JSON.stringify(sendCoinPair))
      }
    })
  }

  public componentWillUnmount(): void {
    if (this.tvWidget !== null) {
      this.tvWidget.remove()
      this.tvWidget = null
    }
  }

  public render(): JSX.Element {
    return <div id={this.props.containerId} className={'TVChartContainer'} />
  }
}
