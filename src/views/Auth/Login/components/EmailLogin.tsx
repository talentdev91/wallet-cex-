import React, { useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Reaptcha from 'reaptcha'
import { useHistory } from 'react-router-dom'
import { isEmptyObject } from 'common/utils'
import { FormControl, FormHelperText, Modal, ClickAwayListener } from '@material-ui/core'
// redux
import { useAppSelector } from 'store/hooks'
import { useAppDispatch } from 'store/hooks'
import { loginUser } from 'store/auth'
import { loginAuth } from 'store/auth/selectors'
import { showAlert } from 'store/alert'
import { PhoneVerifyState } from 'config/constants'
// icon
import ModalIcon from 'assets/image/modalIcon.svg'
import CancelIcon from '@material-ui/icons/Cancel'
import ShowPassIcon from '@material-ui/icons/Visibility'
import HidePassIcon from '@material-ui/icons/VisibilityOff'
import { useStyles } from '../../Style'

function EmailForm() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  let history = useHistory()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailValid, setEmailValid] = React.useState('')
  const [passwordValid, setPasswordValid] = React.useState('')
  const [capchaValid, setCapchaValid] = React.useState('')
  const [verified, setVerified] = React.useState(false)
  const [showPass, setShowPass] = React.useState(false)
  const [clickPassword, setClickPassword] = useState(false)
  const [clickEmail, setClickEmail] = useState(false)
  const [openModal, setOpenModal] = React.useState(false)

  const loginInfo = useAppSelector(loginAuth)

  React.useEffect(() => {
    if (!isEmptyObject(loginInfo)) {
      if (loginInfo.Error !== undefined) {
        dispatch(showAlert({ message: loginInfo.Error.Msg, severity: 'error' }))
      }
      if (loginInfo.Success) {
        if (loginInfo.PhoneVerify === PhoneVerifyState.STATUS_NOT_VERIFIED) {
          localStorage.setItem('jwtToken', loginInfo.JwtToken)
          history.push('/trade')
        } else {
          history.push('/security-verification', { data: loginInfo.PhoneNumber })
        }
      }
    }
  }, [loginInfo])

  const [recap, setRecap] = React.useState<'dark' | 'light' | undefined>('dark')
  const them = localStorage.appTheme
  React.useEffect(() => {
    if (localStorage.appTheme === 'lightTheme') {
      setRecap('light')
    } else if (localStorage.appTheme === 'darkTheme') {
      setRecap('dark')
    }
  }, [recap, them])

  //-------email and password validate-------------------------------

  const onVerify = () => {
    setVerified(true)
    setCapchaValid('')
  }

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

  const handlePasswordChange = (pass: any) => {
    setPassword(pass)
    if (password.length > 0) {
      setPasswordValid('')
    }
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (email.length === 0 && password.length === 0 && !verified) {
      setEmailValid('Please enter your email.')
      setPasswordValid('Please enter your password.')
      setCapchaValid('Please completed captcha verification')
    } else if (password.length === 0 && email.length === 0) {
      setPasswordValid('Please enter your password.')
      setEmailValid('Please enter your email.')
    } else if (password.length === 0 && !verified) {
      setPasswordValid('Please enter your password.')
      setCapchaValid('Please completed captcha verification')
    } else if (email.length === 0 && !verified) {
      setEmailValid('Please enter your email.')
      setCapchaValid('Please completed captcha verification')
    } else if (email.length === 0) {
      setEmailValid('Please enter your email.')
    } else if (!verified) {
      setCapchaValid('Please completed captcha verification')
    } else if (password.length === 0) {
      setPasswordValid('Please enter your password.')
    } else {
      const formData = new FormData()
      formData.append('email', email)
      formData.append('password', password)
      dispatch(loginUser(formData))
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
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
                  onChange={(e) => handleEmailChange(e.target.value)}
                  onClick={() => setClickEmail(true)}
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
        </div>

        <div>
          <FormControl className={classes.formControlSide} variant="outlined">
            <FormHelperText className={clsx(classes.fontColor1, classes.helperText)}>Password</FormHelperText>
            <ClickAwayListener onClickAway={() => setClickPassword(false)}>
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
                  onClick={() => setClickPassword(true)}
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
            </ClickAwayListener>
            <FormHelperText className={classes.error}>{passwordValid === '' ? '' : passwordValid}</FormHelperText>
          </FormControl>
        </div>

        <div className={classes.capcha}>
          <Reaptcha sitekey="6LdfkY0dAAAAAGTLa9FcEQN5VRSkbar5cCtmCsRa" onVerify={onVerify} theme={recap} />
          <FormHelperText className={clsx(classes.fontColor1, classes.helperText2)}>
            {capchaValid.length > 0 ? capchaValid : ''}
          </FormHelperText>
          <button className={classes.registerBtn} type="submit">
            Log In
          </button>
        </div>
      </form>

      <div className={classes.btnSide2}>
        <Link className={classes.forgotLink} to="/reset-password">
          Forgot password?
        </Link>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.modal}>
            <img src={ModalIcon} alt="alt" />
            <p id="transition-modal-description" className={classes.modalText}>
              Withdrawals, P2P selling, and payment services will be disabled for 24 hours after you make this change to
              protect your account.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className={classes.cancelBtn} onClick={handleCloseModal}>
                Cancel
              </button>
              <Link className={classes.continueBtn} to="/reset-password">
                Continue
              </Link>
            </div>
          </div>
        </Modal>
        <Link to="/register" className={classes.loginLink2}>
          Register Now
        </Link>
      </div>
    </>
  )
}

export default EmailForm
