import React, { useState } from 'react'
// material-ui
import { Typography, Box, Snackbar } from '@material-ui/core'
import clsx from 'clsx'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { useStyles } from '../Style'
import { browserHistory } from 'store/auth/actions'
import { RegisterResend } from 'hooks/auth'
import { useInterval } from 'usehooks-ts'
import LoginHeader from 'components/LoginHeader'
// aler redux
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'

const DELAY = 60
const ONE_SECOND = 1000

function EmailVerify() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [openAlert, setOpenAlert] = useState(false)
  const [isResend, setIsResend] = useState(false)
  const [resendTime, setResendTime] = useState<number>(DELAY)
  const email: any = browserHistory.location.state

  useInterval(
    () => {
      if (resendTime > 0) {
        setResendTime(resendTime - 1)
      } else {
        setIsResend(true)
        setResendTime(DELAY)
      }
    },
    !isResend ? ONE_SECOND : null,
  )

  const handleResend = () => {
    setIsResend(false)

    const formData = new FormData()
    formData.append('email', email)

    RegisterResend(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }
      if (res.data.Success) {
        dispatch(showAlert({ message: 'Resend success. Please check your email inbox.', severity: 'success' }))
      } else {
        dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
      }
    })
  }

  return (
    <>
      <div className={classes.root}>
        <LoginHeader />
        <div className={classes.container}>
          <div>
            <img src="/check.png" alt="check" className={classes.checkEmail} />
            <Typography className={clsx(classes.fontColor1, classes.h2)}>Email Verification</Typography>
            <Typography variant="body2" className={classes.fontColor2}>
              We have sent you email to verify. Please check your email.
              <br />
              Once verified, you will be able to continue.
            </Typography>
            <Typography variant="body2" className={clsx(classes.fontColor2, classes.codeText)}></Typography>
          </div>
          <div className={classes.btnSide2}>
            <span className={classes.fontColor2}>Didn't receive the email?</span>&nbsp;
            <button
              disabled={!isResend}
              className={clsx({
                [classes.forgotLink]: isResend === true,
                [classes.disableLink]: isResend === false,
              })}
              onClick={handleResend}
            >
              Resend {!isResend ? 'in ' + resendTime + 's' : ''}
            </button>
          </div>
        </div>
      </div>
      <Box className={classes.footer}>© 2021 dongletrade.com. All rights reserved</Box>
    </>
  )
}

export default EmailVerify
