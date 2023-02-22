import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { FormControl, FormHelperText, ClickAwayListener, Avatar, Typography, Drawer } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Reaptcha from 'reaptcha'
// icons ans styles
import { useStyles } from '../../Style'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import CancelIcon from '@material-ui/icons/Cancel'
import ShowPassIcon from '@material-ui/icons/Visibility'
import HidePassIcon from '@material-ui/icons/VisibilityOff'
// phone number select modal and drawer
import PhoneDraw from '../../PhoneNumModal/PhoneNumDrawModal'
import PhoneNumModal from '../../PhoneNumModal/PhoneNumModal'
// axios
import { PhoneLogin } from 'hooks/auth'
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'

function PhoneForm() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  let history = useHistory()

  const [phoneNum, setPhoneNum] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumValid, setPhoneNumValid] = useState('')
  const [passwordValid, setPasswordValid] = useState('')
  const [clickPhoneNum, setClickPhoneNum] = useState(false)
  const [clickPassword, setClickPassword] = useState(false)
  const [phoneModalopen, setPhoneModalOpen] = useState(false)
  const [phoneNumberDrawOpen, setPhoneNumberDrawOpen] = useState(false) // when mobile state
  const [verified, setVerified] = React.useState(false)
  const [capchaValid, setCapchaValid] = React.useState('')
  const [showPass, setShowPass] = React.useState(false)

  const onVerify = () => {
    setVerified(true)
    setCapchaValid('')
  }

  const [recap, setRecap] = React.useState<'dark' | 'light' | undefined>('dark')
  const them = localStorage.appTheme
  React.useEffect(() => {
    if (localStorage.appTheme === 'lightTheme') {
      setRecap('light')
    } else if (localStorage.appTheme === 'darkTheme') {
      setRecap('dark')
    }
  }, [recap, them])

  const [flag, setFlag] = useState('https://cdn.kcak11.com/CountryFlags/countries/us.svg')
  const [countryCode, setCountryCode] = useState('+1')

  const handleGetPhoneNumber = (phone: any) => {
    setPhoneModalOpen(false)
    setPhoneNumberDrawOpen(false)
    setFlag(phone.flag)
    setCountryCode(phone.dialCode)
  }

  const handlePhoneNumChange = (value: any) => {
    setPhoneNum(value)
    setPhoneNumValid('')
  }

  const handlePasswordChange = (value: any) => {
    setPassword(value)
    setPasswordValid('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (phoneNum === '' && password === '' && !verified) {
      setPhoneNumValid('Please enter a valid phone number.')
      setPasswordValid('Please enter a valid password.')
      setCapchaValid('Please completed captcha verification')
    } else if (phoneNum === '' && password === '') {
      setPhoneNumValid('Please enter a valid phone number.')
      setPasswordValid('Please enter a valid password.')
    } else if (password === '' && !verified) {
      setCapchaValid('Please completed captcha verification')
      setPasswordValid('Please enter a valid password.')
    } else if (phoneNum === '' && !verified) {
      setPhoneNumValid('Please enter a valid phone number.')
      setCapchaValid('Please completed captcha verification')
    } else if (phoneNum === '') {
      setPhoneNumValid('Please enter a valid phone number.')
    } else if (password === '') {
      setPasswordValid('Please enter a valid password.')
    } else if (!verified) {
      setCapchaValid('Please completed captcha verification')
    } else {
      const formData = new FormData()
      formData.append('phonenumber', countryCode + phoneNum)
      formData.append('password', password)

      PhoneLogin(formData).then((res: any) => {
        if (res === undefined) {
          dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
          return
        }
        if (res.data.Success) {
          history.push('/security-verification', { data: countryCode + phoneNum })
        } else {
          dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
        }
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControlSide} variant="outlined">
          <FormHelperText className={classes.fontColor1}>Phone Number</FormHelperText>
          <ClickAwayListener onClickAway={() => setClickPhoneNum(false)}>
            <div className={classes.phoneNumDiv}>
              <div onClick={() => setPhoneModalOpen(true)} className={classes.countrySide}>
                <Avatar src={flag} alt="logo" className={classes.flag} />
                <Typography className={classes.phoneNumText}>{countryCode}</Typography>
                <ArrowDropDownIcon className={classes.flagBtn} />
              </div>
              <div onClick={() => setPhoneNumberDrawOpen(true)} className={classes.countrySide2}>
                <Avatar src={flag} alt="logo" className={classes.flag} />
                <Typography className={classes.phoneNumText}>{countryCode}</Typography>
                <ArrowDropDownIcon className={classes.flagBtn} />
              </div>
              <div
                className={clsx({
                  [classes.phoneSide]: phoneNumValid === '',
                  [classes.phoneSide3]: phoneNumValid === '' && clickPhoneNum === true,
                  [classes.phoneSide2]: phoneNumValid !== '',
                })}
              >
                <input
                  type="number"
                  onChange={(e) => handlePhoneNumChange(e.target.value)}
                  onClick={() => setClickPhoneNum(true)}
                  className={classes.input}
                  maxLength={13}
                  value={phoneNum}
                />
                {phoneNum.length > 0 && clickPhoneNum === true ? (
                  <CancelIcon className={classes.icon} onClick={() => setPhoneNum('')} />
                ) : (
                  ''
                )}
              </div>
            </div>
          </ClickAwayListener>
          <FormHelperText className={classes.error}>{phoneNumValid === '' ? '' : phoneNumValid}</FormHelperText>
        </FormControl>

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

        <div className={classes.capcha}>
          <Reaptcha sitekey="6LdfkY0dAAAAAGTLa9FcEQN5VRSkbar5cCtmCsRa" onVerify={onVerify} theme={recap} />
          <FormHelperText className={classes.error}>{capchaValid.length > 0 ? capchaValid : ''}</FormHelperText>
          <button className={classes.registerBtn} type="submit">
            Log In
          </button>
        </div>

        <div className={classes.btnSide2}>
          <Link className={classes.forgotLink} to="/reset-password">
            Forgot password?
          </Link>
          <Link to="/register" className={classes.loginLink2}>
            Register Now
          </Link>
        </div>
      </form>

      <PhoneNumModal
        modalopen={phoneModalopen}
        handleClose={() => setPhoneModalOpen(false)}
        handleClickNumber={handleGetPhoneNumber}
      />
      <Drawer
        anchor="bottom"
        open={phoneNumberDrawOpen}
        onClose={() => setPhoneNumberDrawOpen(false)}
        classes={{ paperAnchorBottom: classes.drawRoot }}
      >
        <PhoneDraw handleDrawClose={() => setPhoneNumberDrawOpen(false)} handleClickNumber={handleGetPhoneNumber} />
      </Drawer>
    </>
  )
}

export default PhoneForm
