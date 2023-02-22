import React, { useState } from 'react'
import { useHistory } from 'react-router'
import clsx from 'clsx'
// material-ui
import { Snackbar, Typography } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { useStyles } from '../Style'
import LoginHeader from 'components/LoginHeader'
import EmailForm from './components/EmailRegister'
import PhoneForm from './components/PhoneRegister'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const RegisterType = { EMAIL: 0, PHONE: 1 }

function Register() {
  const classes = useStyles()
  const history: any = useHistory()

  const [alert, setAlert] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [alertText, setAlertText] = useState('')
  const [isFirstHistory, setIsFirstHistory] = React.useState(false)
  const [selectMethod, setSelect] = useState(0)

  const selectType = (e: any) => {
    setSelect(e)
  }

  React.useEffect(() => {
    if (history.location !== undefined && isFirstHistory === false) {
      setAlert(history.location.state?.alert)
      setOpenAlert(history.location.state?.openAlert)
      setAlertText(history.location.state?.alertText)
      setIsFirstHistory(true)
    }
  }, [history.location, isFirstHistory])

  const handleCloseAlert = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    setOpenAlert(false)
  }

  return (
    <>
      <div className={classes.root2}>
        <LoginHeader />
        <div className={classes.container2}>
          <div className={classes.registerFormContainer}>
            <div>
              <Typography className={clsx(classes.fontColor1, classes.h4)}>Create DONGLE Account</Typography>
              <Typography variant="body2" className={classes.fontColor2}>
                Register with your email or mobile
              </Typography>
            </div>

            <div className={classes.btnSide}>
              <Typography
                variant="subtitle2"
                className={selectMethod === RegisterType.EMAIL ? classes.selectMode1 : classes.unSelect1}
                onClick={() => selectType(RegisterType.EMAIL)}
              >
                Email
              </Typography>
              <Typography
                variant="subtitle2"
                className={selectMethod === RegisterType.PHONE ? classes.selectMode : classes.unSelect}
                onClick={() => selectType(RegisterType.PHONE)}
              >
                Mobile
              </Typography>
            </div>

            {selectMethod === RegisterType.EMAIL ? (
              <>
                <EmailForm />
              </>
            ) : (
              <>
                <PhoneForm />
              </>
            )}
          </div>
          <div className={classes.footer1}>© 2021 dongletrade.com. All rights reserved</div>
        </div>
        {alert === undefined ? (
          ''
        ) : (
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onClose={handleCloseAlert}
            open={openAlert}
            autoHideDuration={3000}
          >
            <Alert
              className={alert === false ? classes.notificationBackground1 : classes.notificationBackground2}
              severity={alert === true ? 'success' : 'error'}
            >
              {alert === true ? 'Success' : alertText}
            </Alert>
          </Snackbar>
        )}
      </div>
    </>
  )
}

export default Register
