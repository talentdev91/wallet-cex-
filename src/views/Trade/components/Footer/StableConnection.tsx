/** @format */

import React from 'react'
import { Grid } from '@material-ui/core'
import Connection3 from '../../../../assets/image/Connection3.svg'
import Connection4 from '../../../../assets/image/connection4.png'
import Connection2 from '../../../../assets/image/Connection2.png'
import Connection1 from '../../../../assets/image/Connection1.png'
import Disconnect from '../../../../assets/image/disconnect.svg'
import { useStyles } from './FooterStyles'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { sendPingMessage } from '../../../../store/pong'
import { pongReceiveTime } from '../../../../store/pong/selectors'

function StableConnection() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const pongTime = useAppSelector(pongReceiveTime)

  const [sendTime, setSendTime] = React.useState(Date.now())
  const [duration, setDuration] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setSendTime(Date.now())
      dispatch(sendPingMessage())
    }, 10000)
    if (localStorage.webSocketDisconnect === 'connect') {
      return () => clearInterval(intervalId)
    }
    // eslint-disable-next-line
  }, [dispatch])

  React.useEffect(() => {
    setDuration(pongTime - sendTime)
  }, [pongTime])

  React.useEffect(() => {
    setDuration(100000)
  }, [localStorage.webSocketDisConnectState])

  return (
    <Grid container>
      <Grid item>
        {duration > 0 && duration < 150 ? (
          <span className={classes.span}>
            <img src={Connection4} className={classes.connectionIcon} alt="icon" />
            &nbsp; Stable Connection
          </span>
        ) : duration > 150 && duration < 500 ? (
          <span className={classes.span}>
            <img src={Connection3} className={classes.connectionIcon} alt="icon" />
            &nbsp; Stable Connection
          </span>
        ) : duration > 500 && duration < 1000 ? (
          <span className={classes.span}>
            <img src={Connection2} className={classes.connectionIcon} alt="icon" />
            &nbsp; Stable Connection
          </span>
        ) : localStorage.webSocketDisConnectState === 'disconnect' ? (
          <span className={classes.span}>
            <img src={Disconnect} className={classes.connectionIcon} alt="icon" />
            &nbsp; <span style={{ color: '#f0b90b' }}>Connecting...</span>
          </span>
        ) : (
          <span className={classes.span}>
            <img src={Connection1} className={classes.connectionIcon} alt="icon" />
            &nbsp; Stable Connection
          </span>
        )}
      </Grid>
    </Grid>
  )
}

export default StableConnection
