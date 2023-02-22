import React from 'react'
import { Link } from 'react-router-dom'
// material-ui
import { Typography, Box } from '@material-ui/core'
import clsx from 'clsx'
import { useStyles } from '../Style'
import { useHistory } from 'react-router-dom'
import LoginHeader from 'components/LoginHeader'

function ConfirmDevice() {
  const classes = useStyles()
  let history = useHistory()

  const [code, setCode] = React.useState('')

  const getCode = (e: any) => {
    setCode(e)
  }
  const onSumbit = () => {
    history.push('/trade')
  }

  return (
    <>
      <div className={classes.root}>
        <LoginHeader />
        <div className={classes.container}>
          <div>
            <Typography className={clsx(classes.fontColor1, classes.h2)}>Confirm New Device Login</Typography>
            <Typography variant="body2" className={classes.fontColor2}>
              To secure your account, please complete the following verification.
            </Typography>
            <Typography variant="body2" className={clsx(classes.fontColor2, classes.text)}>
              E-mail verification code
            </Typography>
          </div>
          <div>
            <div className={classes.inputSide}>
              <input onChange={(e) => getCode(e.target.value)} type="number" className={classes.input} />
              <button className={classes.code}>Get code</button>
            </div>
            <Typography variant="body2" className={clsx(classes.fontColor2, classes.text2)}>
              Enter the 6-digit code sent to tes***@gmail.com
            </Typography>
            <Link to="/" className={classes.loginLink}>
              Security verification unavailable?
            </Link>
          </div>
          <button
            disabled={code.length < 6 && code.length > 6 ? true : false}
            className={code.length < 6 || code.length > 6 ? classes.disableBtn : classes.registerBtn}
            onClick={onSumbit}
          >
            Submit
          </button>
        </div>
        <Box className={classes.footer}>© 2021 dongletrade.com. All rights reserved</Box>
      </div>
    </>
  )
}

export default ConfirmDevice
