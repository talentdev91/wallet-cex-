import React, { useState } from 'react'
// material-ui
import { Typography, FormControl, FormHelperText, Box, ClickAwayListener, Tooltip } from '@material-ui/core'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import { ForgotPassword } from 'hooks/auth'
// external
import LoginHeader from 'components/LoginHeader'
// style and icons
import { useStyles } from '../Style'
import CancelIcon from '@material-ui/icons/Cancel'
import ShowPassIcon from '@material-ui/icons/Visibility'
import HidePassIcon from '@material-ui/icons/VisibilityOff'
import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'

function ResetPassword(email: any) {
  const classes = useStyles()
  let history = useHistory()

  const [password, setPassword] = React.useState('')
  const [confirm, setConfirm] = React.useState('')
  const [passValid, setPassValid] = React.useState('')
  const [confirmValid, setConfirmValid] = React.useState('')
  const [showConfirmPass, setShowConfirmPass] = React.useState(false)
  const [upperCnt, setUpperCnt] = useState(0)
  const [numberCnt, setNumberCnt] = useState(0)
  const getEmail = email?.location?.state?.data
  const [showPass, setShowPass] = React.useState(false)
  const [clickPassword, setClickPassword] = useState(false)
  const [clickConfirmPass, setClickConfirmPass] = useState(false)
  const [passwordTooltip, setPasswordTooltip] = useState(false)

  const handlePasswordChange = (e: any) => {
    setPassword(e)

    let upper = 0
    let number = 0

    for (let i = 0; i < e.length; i++) {
      if (e[i] >= 'A' && e[i] <= 'Z') {
        upper++
      } else if (e[i] >= '0' && e[i] <= '9') number++
    }
    setUpperCnt(upper)
    setNumberCnt(number)
  }

  React.useEffect(() => {
    if ((password.length < 7 || upperCnt === 0 || numberCnt === 0) && password.length > 0) {
      setPassValid('Password must be at least 8 characters with 1 upper case letter and 1 number.')
    } else {
      setPassValid('')
    }
  }, [password, upperCnt, numberCnt])

  const handleConfirmChange = (e: any) => {
    setConfirm(e)
    if (password !== e) {
      setConfirmValid('Password does not match, please check again.')
    } else {
      setConfirmValid('')
    }
  }

  const handleClickPassword = () => {
    setClickPassword(true)
    setPasswordTooltip(true)
  }

  const handleTooltipClose = () => {
    setPasswordTooltip(false)
    setClickPassword(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (password.length === 0 && confirm.length === 0) {
      setPassValid('Please enter your password')
      setConfirmValid('Please enter your confirm password')
    } else if (password.length === 0) {
      setPassValid('Please enter your password')
    } else if (confirm.length === 0) {
      setConfirmValid('Please enter your confirm password')
    } else {
      if (password.length > 7 && password === confirm && upperCnt !== 0 && numberCnt !== 0) {
        const formData = new FormData()
        formData.append('email', getEmail)
        formData.append('password', password)
        formData.append('confirmpassword', confirm)

        const userinfo = {
          email: getEmail,
          password: password,
          confirm: confirm,
        }

        ForgotPassword(formData)
        history.push('/complete-password', { data: userinfo })
      }
    }
  }

  return (
    <>
      <div className={classes.root}>
        <LoginHeader />
        <div className={classes.container}>
          <div>
            <Typography className={clsx(classes.fontColor1, classes.h2)}>Reset Your Password</Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl className={classes.formControlSide} variant="outlined">
                <FormHelperText className={clsx(classes.fontColor1, classes.helperText)}>Password</FormHelperText>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                  <Tooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={passwordTooltip}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    placement="right"
                    classes={{ tooltip: classes.passwordTooltipDiv }}
                    title={
                      <div className={classes.strongPasswordDiv}>
                        <Typography className={classes.strongPasswordText}>
                          {password.length < 8 ? (
                            <CloseIcon className={classes.icon5} />
                          ) : (
                            <CheckIcon className={classes.icon6} />
                          )}
                          Maximum 8 characters
                        </Typography>
                        <Typography className={classes.strongPasswordText}>
                          {numberCnt === 0 ? (
                            <CloseIcon className={classes.icon5} />
                          ) : (
                            <CheckIcon className={classes.icon6} />
                          )}
                          At least 1 number
                        </Typography>
                        <Typography className={classes.strongPasswordText}>
                          {upperCnt === 0 ? (
                            <CloseIcon className={classes.icon5} />
                          ) : (
                            <CheckIcon className={classes.icon6} />
                          )}
                          At least 1 upper case
                        </Typography>
                      </div>
                    }
                  >
                    <div
                      className={clsx({
                        [classes.inputSide]: passValid === '',
                        [classes.inputSide3]: passValid === '' && clickPassword === true,
                        [classes.inputSide2]: passValid !== '',
                      })}
                    >
                      <input
                        type={showPass === false ? 'password' : ''}
                        onChange={(e) => handlePasswordChange(e.target.value)}
                        onClick={handleClickPassword}
                        className={classes.input}
                        value={password}
                      />
                      {password.length > 0 && clickPassword === true ? (
                        <CancelIcon className={classes.icon} onClick={() => setPassword('')} />
                      ) : (
                        ''
                      )}
                      {showPass === true ? (
                        <ShowPassIcon className={classes.icon} onClick={() => setShowPass(!showPass)} />
                      ) : (
                        <HidePassIcon className={classes.icon} onClick={() => setShowPass(!showPass)} />
                      )}
                    </div>
                  </Tooltip>
                </ClickAwayListener>
                <FormHelperText className={classes.error}>{passValid !== '' ? passValid : ''}</FormHelperText>
              </FormControl>

              <FormControl className={classes.formControlSide} variant="outlined">
                <FormHelperText className={clsx(classes.fontColor1, classes.helperText)}>
                  Confirm Password
                </FormHelperText>
                <ClickAwayListener onClickAway={() => setClickConfirmPass(false)}>
                  <div
                    className={clsx({
                      [classes.inputSide]: confirmValid === '',
                      [classes.inputSide3]: confirmValid === '' && clickConfirmPass === true,
                      [classes.inputSide2]: confirmValid !== '',
                    })}
                  >
                    <input
                      type={showConfirmPass === false ? 'password' : ''}
                      onChange={(e) => handleConfirmChange(e.target.value)}
                      onClick={() => setClickConfirmPass(true)}
                      className={classes.input}
                      value={confirm}
                    />
                    {confirm.length > 0 && clickConfirmPass === true ? (
                      <CancelIcon className={classes.icon} onClick={() => setConfirm('')} />
                    ) : (
                      ''
                    )}
                    {showConfirmPass === true ? (
                      <ShowPassIcon className={classes.icon} onClick={() => setShowConfirmPass(!showConfirmPass)} />
                    ) : (
                      <HidePassIcon className={classes.icon} onClick={() => setShowConfirmPass(!showConfirmPass)} />
                    )}
                  </div>
                </ClickAwayListener>
                <FormHelperText className={classes.error}>{confirmValid !== '' ? confirmValid : ''}</FormHelperText>
              </FormControl>
            </div>
            <div className={classes.nextBtn}>
              <button className={classes.registerBtn} type="submit">
                Next
              </button>
            </div>
          </form>
        </div>
        <Box className={classes.footer2}>© 2021 dongletrade.com. All rights reserved</Box>
      </div>
    </>
  )
}

export default ResetPassword
