import React, { useEffect, useState } from 'react'
import ReactResizeDetector from 'react-resize-detector'
import clsx from 'clsx'
// material-ui
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
// store
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { notification } from '../../store/notification/selectors'
import { getNotification } from '../../store/notification'
// external components
import PhoneSwitch from '../../components/Header/components/PhoneSwitch'
import Statistic from '../../components/Header/components/Statistic'
import PhoneOrderBook from './components/PhoneOrderBook'
import OrderForm from './components/OrderForm/OrderForm'
import PhoneTrades from './components/PhoneTrades'
import TradeChart from './components/TradeChart'
import OrderBook from './components/OrderBook'
import Header from '../../components/Header'
import UserInfo from './components/UserInfo'
import Trades from './components/Trades'
import Footer from './components/Footer'
// style
import { useStyles } from './Style'
// config
import { Notification } from '../../config/constants'
// image
import Alam from '../../assets/image/Alarm.svg'

function Trade() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const notificationData = useAppSelector(notification)

  const [hideNotification, setNotification] = useState(false)
  const [sideNum, setSideNum] = React.useState(0)

  const limit = (value: any) => {
    setSideNum(value)
  }

  useEffect(() => {
    const formData = new FormData()
    formData.append('status', Notification.NOTIFICATION_ACTIVE.toString())

    dispatch(getNotification(formData))
  }, [dispatch])

  return (
    <div className={classes.root}>
      <div className={classes.tradeContainer}>
        <div className={classes.header}>
          <Header />

          {notificationData.length !== 0 ? (
            <div className={hideNotification === false ? classes.alertDiv : classes.alertHide}>
              <div style={{ display: 'flex', width: '100%', marginTop: '4px' }}>
                <img src={Alam} alt="logo" className={classes.alertIcon} />
                <Typography className={classes.alertText}>{notificationData?.Message}</Typography>
                {/* <Typography className={classes.alertLink}>
                View More
                <ArrowForwardIosIcon className={classes.alertLinkIcon} />
              </Typography> */}
              </div>
              <div>
                <CloseIcon onClick={() => setNotification(true)} style={{ fill: '#eaecef', cursor: 'pointer' }} />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={classes.switch}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Statistic />
              <div className={classes.PhoneSwitchDiv}>
                <PhoneSwitch />
              </div>
            </Toolbar>
          </AppBar>
        </div>

        <div className={classes.orderform}>
          <OrderForm />
        </div>

        <ReactResizeDetector handleWidth handleHeight>
          {({ height }) => (
            <div className={classes.orderbook}>
              <OrderBook height={height} />
            </div>
          )}
        </ReactResizeDetector>

        <div className={classes.chart}>
          {/* <div className={classes.chartDiv}>
            <TradeChart />
          </div> */}
          <div className={classes.bodySide}>
            <div className={classes.bodyTop}>
              <Typography
                onClick={() => limit(0)}
                variant="body2"
                className={
                  sideNum === 0
                    ? clsx(classes.setTextColor, classes.text)
                    : clsx(classes.fontColor1, classes.hover, classes.text)
                }
              >
                Chart
              </Typography>

              <Typography
                onClick={() => limit(1)}
                variant="body2"
                className={
                  sideNum === 1
                    ? clsx(classes.setTextColor, classes.text)
                    : clsx(classes.fontColor1, classes.hover, classes.text)
                }
              >
                Order Book
              </Typography>

              <Typography
                onClick={() => limit(3)}
                variant="body2"
                className={
                  sideNum === 3
                    ? clsx(classes.setTextColor, classes.text1)
                    : clsx(classes.fontColor1, classes.hover, classes.text1)
                }
              >
                Trades
              </Typography>
            </div>

            <div className={classes.bodyMain}>
              {sideNum === 0 ? <TradeChart /> : sideNum === 1 ? <PhoneOrderBook /> : <PhoneTrades />}
            </div>
          </div>
        </div>

        <ReactResizeDetector handleHeight>
          {({ height }) => (
            <div className={classes.trades}>
              <Trades height={height} />
            </div>
          )}
        </ReactResizeDetector>

        <div className={classes.userinfo}>
          <UserInfo />
        </div>

        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Trade
