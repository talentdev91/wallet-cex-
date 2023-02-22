import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import {
  FormControl,
  FormHelperText,
  ClickAwayListener,
  Typography,
  FormControlLabel,
  Tooltip,
} from '@material-ui/core'
// redux
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { createUser } from 'store/auth'
import { createAuth } from 'store/auth/selectors'
import { showAlert } from 'store/alert'
// icons and style
import { useStyles, StyledCheckBox } from '../../Style'
import CancelIcon from '@material-ui/icons/Cancel'
import ShowPassIcon from '@material-ui/icons/Visibility'
import HidePassIcon from '@material-ui/icons/VisibilityOff'
import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'

function EmailForm() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const registerInfo = useAppSelector(createAuth)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [serviceCheck, setServiceCheck] = useState(true)
  const [emailValid, setEmailValid] = useState('')
  const [passwordValid, setPasswordValid] = useState('')
  const [confirmSide, setConfirmSide] = React.useState(true)
  const [confirmValid, setConfirmValid] = useState('')
  const [upperCnt, setUpperCnt] = useState(0)
  const [numberCnt, setNumberCnt] = useState(0)
  const [clickPassword, setClickPassword] = useState(false)
  const [clickConfirmPass, setClickConfirmPass] = useState(false)
  const [clickEmail, setClickEmail] = useState(false)
  const [passwordTooltip, setPasswordTooltip] = useState(false)
  const [showPass, setShowPass] = React.useState(false)
  const [showConfirmPass, setShowConfirmPass] = React.useState(false)

  const handleEmailChange = (value: any) => {
    setEmail(value)
    let regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regEmail.test(value)) {
      setEmailValid('Entered value does not match email format.')
    } else {
      setEmailValid('')
    }
  }

  const handleServiceCheck = (value: any) => {
    setServiceCheck(value)
  }

  const handlePasswordChange = (value: any) => {
    setPassword(value)

    let upper = 0
    let number = 0
    for (let i = 0; i < value.length; i++) {
      if (value[i] >= 'A' && value[i] <= 'Z') {
        upper++
      } else if (value[i] >= '0' && value[i] <= '9') number++
    }
    setUpperCnt(upper)
    setNumberCnt(number)
  }

  useEffect(() => {
    if ((password.length < 7 || upperCnt === 0 || numberCnt === 0) && password.length > 0) {
      setPasswordValid('Password must be at least 8 characters with 1 upper case letter and 1 number.')
    } else {
      setPasswordValid('')
    }
  }, [password, upperCnt, numberCnt])

  useEffect(() => {
    if (registerInfo !== undefined) {
      if (registerInfo.Success === false) {
        if (registerInfo.Error !== undefined) {
          dispatch(showAlert({ message: registerInfo.Error.Email, severity: 'error' }))
        }
      }
    }
  }, [registerInfo])

  const handleConfirmChange = (value: any) => {
    setConfirm(value)
    if (password !== value) {
      setConfirmValid('Password does not match, please check again.')
    } else {
      setConfirmValid('')
    }
  }

  const idSelect = (e: boolean) => {
    setConfirmSide(e)
  }

  //----------------------------notification-----------------------------------------

  const handleKeyDownEmail = (e: any) => {
    if (e.key === 'Tab') {
      setClickEmail(false)
      setClickPassword(true)
      setPasswordTooltip(true)
    }
  }

  const handleKeyDownPassword = (e: any) => {
    if (e.key === 'Tab') {
      setClickPassword(false)
      setPasswordTooltip(false)
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

    if (email.length === 0 && password.length === 0 && confirm.length === 0) {
      setEmailValid('Please enter your email.')
      setPasswordValid('Please enter your password.')
      setConfirmValid('Please enter your confirm password.')
    } else if (email.length === 0 && password.length === 0) {
      setEmailValid('Please enter your email.')
      setPasswordValid('Please enter your password.')
    } else if (email.length === 0 && confirm.length === 0) {
      setEmailValid('Please enter your email.')
      setConfirmValid('Please enter your confirm password.')
    } else if (password.length === 0 && confirm.length === 0) {
      setPasswordValid('Please enter your password.')
      setConfirmValid('Please enter your confirm password.')
    } else if (password !== confirm) {
      setConfirmValid('Password does not match, please check again.')
    } else {
      if (serviceCheck !== false && password.length > 7 && upperCnt !== 0 && numberCnt !== 0) {
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        formData.append('confirmpassword', confirm)
        dispatch(createUser(formData))
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControlSide} variant="outlined">
          <FormHelperText className={clsx(classes.fontColor1, classes.helperText)}>Email</FormHelperText>
          <ClickAwayListener onClickAway={() => setClickEmail(false)}>
            <div
              className={clsx({
                [classes.inputSide]: emailValid === '',
                [classes.inputSide3]: emailValid === '' && clickEmail === true,
                [classes.inputSide2]: emailValid !== '',
              })}
            >
              <input
                value={email}
                onClick={() => setClickEmail(true)}
                onChange={(e) => handleEmailChange(e.target.value)}
                onKeyDown={(e) => handleKeyDownEmail(e)}
                className={classes.input}
              />
              {email.length > 0 && clickEmail === true ? (
                <CancelIcon className={classes.icon} onClick={() => setEmail('')} />
              ) : (
                ''
              )}
            </div>
          </ClickAwayListener>

          <FormHelperText className={classes.error}>{emailValid === '' ? '' : emailValid}</FormHelperText>
        </FormControl>

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
                    {upperCnt === 0 ? <CloseIcon className={classes.icon5} /> : <CheckIcon className={classes.icon6} />}
                    At least 1 upper case
                  </Typography>
                </div>
              }
            >
              <div
                className={clsx({
                  [classes.inputSide]: passwordValid === '',
                  [classes.inputSide3]: passwordValid === '' && clickPassword === true,
                  [classes.inputSide2]: passwordValid !== '',
                })}
              >
                <input
                  type={showPass === false ? 'password' : ''}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  onClick={handleClickPassword}
                  onKeyDown={(e) => handleKeyDownPassword(e)}
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
          <FormHelperText className={classes.error}>{passwordValid === '' ? '' : passwordValid}</FormHelperText>
        </FormControl>

        <FormControl className={classes.formControlSide} variant="outlined">
          {confirmSide === false ? (
            <FormHelperText className={clsx(classes.fontColor1, classes.idText)}>Confirm Password</FormHelperText>
          ) : (
            <>
              <FormHelperText onClick={() => idSelect(false)} className={classes.fontColor1}>
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

              <FormHelperText className={classes.error}>{confirmValid === '' ? '' : confirmValid}</FormHelperText>
            </>
          )}
        </FormControl>
        <div className={classes.checkDiv1}>
          <FormControlLabel
            control={<StyledCheckBox name="jason" />}
            label="Subscribe to email updates"
            className={classes.fontColor2}
          />
        </div>

        <div className={classes.checkDiv}>
          <div className={classes.checkBox}>
            <FormControlLabel
              control={
                <StyledCheckBox
                  onChange={(e) => {
                    handleServiceCheck(e.target.checked)
                  }}
                  name="jason"
                  defaultChecked
                />
              }
              label="I have read and agree to DONGLE’s"
              className={classes.fontColor2}
            />
            <Typography className={classes.termlink}>Terms of Service</Typography>
          </div>
          <div className={classes.text4}>
            <Typography className={classes.error}>
              {serviceCheck === false ? "I am over 18 age, and I agree to DONGLE's Terms" : ''}
            </Typography>
          </div>
        </div>
        <div>
          <button className={classes.registerBtn} type="submit">
            Create Account
          </button>
        </div>
      </form>
      <div className={classes.btnSide}>
        <Typography variant="body2" className={classes.fontColor5}>
          Already registered?
        </Typography>
        <Link to="/login" className={classes.loginLink4}>
          Log In
        </Link>
      </div>
    </>
  )
}

export default EmailForm
