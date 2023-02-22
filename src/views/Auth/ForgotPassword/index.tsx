/** @format */

import React, { useEffect } from 'react'
// material-ui
import { Typography, Box } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import clsx from 'clsx'
import { useStyles } from '../Style'
import EmailForm from './components/EmailForgot'
import PhoneForm from './components/PhoneForgot'
import LoginHeader from 'components/LoginHeader'
import { useHistory } from 'react-router'

const LoginType = {
  EMAIL: 0,
  PHONE: 1,
}

function Forgot() {
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
        <div className={classes.container}>
          <div>
            <Typography className={clsx(classes.fontColor1, classes.h2)}>Reset Your Password</Typography>
          </div>

          <div className={classes.btnSide}>
            <Typography
              variant="subtitle2"
              className={selectMethod === LoginType.EMAIL ? classes.selectMode1 : classes.unSelect}
              onClick={() => selectType(LoginType.EMAIL)}
            >
              Email
            </Typography>
            {/* <Typography
            variant="subtitle2"
            className={
              selectMethod === LoginType.PHONE ? classes.selectMode : classes.unSelect
            }
            onClick={() => selectType(LoginType.PHONE)}
          >
            Mobile
          </Typography> */}
          </div>

          <div className={classes.leftSide}>{selectMethod === LoginType.EMAIL ? <EmailForm /> : <PhoneForm />}</div>
        </div>
        <Box className={classes.footer2}>© 2021 dongletrade.com. All rights reserved</Box>
      </div>
    </>
  )
}

export default Forgot
