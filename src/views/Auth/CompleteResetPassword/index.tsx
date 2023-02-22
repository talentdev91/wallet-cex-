import React from 'react'
import clsx from 'clsx'
import { useAppDispatch } from 'store/hooks'
import { showAlert } from 'store/alert'

// material-ui
import { Typography, Box } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
// external
import { useStyles } from '../Style'
import { useHistory } from 'react-router-dom'
import { ForgotPassword } from 'hooks/auth'
import LoginHeader from 'components/LoginHeader'

function CompletePassword(data: any) {
  const classes = useStyles()
  let history = useHistory()
  const dispatch = useAppDispatch()

  const email = data?.location?.state?.data?.email
  const password = data?.location?.state?.data?.password
  const confirm = data?.location?.state?.data?.confirm

  const handleClick = () => {
    history.push('/login')
  }

  const handleResend = async () => {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('confirmpassword', confirm)

    ForgotPassword(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }
      if (res.data.Success) {
        dispatch(showAlert({ message: 'Please check your Email', severity: 'success' }))
      } else {
        dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
      }
    })
  }

  return (
    <>
      <div className={classes.root2}>
        <LoginHeader />
        <div className={classes.container}>
          <img src="/check.png" alt="check" className={classes.checkEmail2} />
          <div className={classes.titleDiv}>
            <Typography className={clsx(classes.fontColor1, classes.h2)}>Password Changed</Typography>
            <Typography className={clsx(classes.fontColor2, classes.h3)}>
              We have sent you email to verify. Please check your email.
              <br />
              Once verified, you will be able to continue.
            </Typography>
          </div>
          <div style={{ paddingTop: '20px' }}>
            <button className={classes.registerBtn} onClick={handleClick}>
              Log In
            </button>
          </div>
          <div className={classes.resendbtn}>
            <span className={classes.fontColor2}>Didn't receive the email?</span>
            <button className={classes.resendbtn} onClick={handleResend}>
              Resend
            </button>
          </div>
        </div>
        <div>
          <Box className={classes.footer2}>© 2021 dongletrade.com. All rights reserved</Box>
        </div>
      </div>
    </>
  )
}

export default CompletePassword
