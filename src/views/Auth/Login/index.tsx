/** @format */

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
// material-ui
import { Typography } from '@material-ui/core'
import { Snackbar, Box } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import clsx from 'clsx'
import { useStyles } from '../Style'
import EmailForm from '../Login/components/EmailLogin'
import PhoneForm from '../Login/components/PhoneLogin'
import LoginHeader from 'components/LoginHeader'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const LoginType = {
  EMAIL: 0,
  PHONE: 1,
}

function Login() {
  const classes = useStyles()
  const history: any = useHistory()

  const [selectMethod, setSelect] = React.useState(0)
  const [isFirstHistory, setIsFirstHistory] = React.useState(false)

  useEffect(() => {
    if (history.location.state !== undefined && isFirstHistory === false) {
      setIsFirstHistory(true)
    }
  }, [history.location.state, isFirstHistory])

  const selectType = (e: any) => {
    setSelect(e)
  }

  return (
    <>
      <div className={classes.root}>
        <LoginHeader />
        {/* <div className={classes.notiSide}>
        <img src={lockIcon} style={{ verticalAlign: 'text-top' }} alt="icon" />
        <span className={classes.notiText}>
          URL verification: <span style={{ color: '#0ECB81' }}>https</span>
          ://accounts.dongle.com
        </span>
      </div> */}
        <div className={classes.container}>
          <div>
            <Typography className={clsx(classes.fontColor1, classes.h2)}>Dongle Account Login</Typography>
            <Typography variant="body2" className={clsx(classes.fontColor2, classes.subTitle)}>
              Welcome back! Log In with your Email, Phone number or QR code
            </Typography>
          </div>

          <div className={classes.btnSide}>
            <Typography
              variant="subtitle2"
              className={selectMethod === LoginType.EMAIL ? classes.selectMode1 : classes.unSelect1}
              onClick={() => selectType(LoginType.EMAIL)}
            >
              Email
            </Typography>
            <Typography
              variant="subtitle2"
              className={selectMethod === LoginType.PHONE ? classes.selectMode : classes.unSelect}
              onClick={() => selectType(LoginType.PHONE)}
            >
              Mobile
            </Typography>
          </div>

          <div className={classes.leftSide}>{selectMethod === LoginType.EMAIL ? <EmailForm /> : <PhoneForm />}</div>
        </div>
        <Box className={classes.footer}>© 2021 dongletrade.com. All rights reserved</Box>
      </div>
    </>
  )
}

export default Login
