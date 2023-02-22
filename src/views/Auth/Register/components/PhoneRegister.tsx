import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import {
  FormControl,
  FormHelperText,
  Typography,
  FormControlLabel,
  ClickAwayListener,
  Tooltip,
  Avatar,
  Drawer,
} from '@material-ui/core'
// axios
import { PhoneRegister } from 'hooks/auth'
// phone number select modal and drawer
import PhoneNumModal from '../../PhoneNumModal/PhoneNumModal'
import PhoneDraw from '../../PhoneNumModal/PhoneNumDrawModal'
// icons and style
import { useStyles, StyledCheckBox } from '../../Style'
import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'
import CancelIcon from '@material-ui/icons/Cancel'
import ShowPassIcon from '@material-ui/icons/Visibility'
import HidePassIcon from '@material-ui/icons/VisibilityOff'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
// aler redux
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'

function PhoneForm() {
  let history = useHistory()
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [phoneNum, setPhoneNum] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [upperCnt, setUpperCnt] = useState(0)
  const [numberCnt, setNumberCnt] = useState(0)
  const [phoneNumValid, setPhoneNumValid] = useState('')
  const [passwordValid, setPasswordValid] = useState('')
  const [confirmValid, setConfirmValid] = useState('')
  const [serviceCheck, setServiceCheck] = useState(true)
  const [showConfirmPass, setShowConfirmPass] = React.useState(false)
  const [clickPhoneNum, setClickPhoneNum] = useState(false)
  const [clickPassword, setClickPassword] = useState(false)
  const [clickConfirmPass, setClickConfirmPass] = useState(false)
  const [passwordTooltip, setPasswordTooltip] = useState(false)
  const [phoneModalopen, setPhoneModalOpen] = useState(false)
  const [phoneNumberDrawOpen, setPhoneNumberDrawOpen] = useState(false) // when mobile state
  const [showPass, setShowPass] = useState(false)

  const handlePasswordChange = (value: any) => {
    let upper = 0
    let number = 0
    for (let i = 0; i < value.length; i++) {
      if (value[i] >= 'A' && value[i] <= 'Z') {
        upper++
      } else if (value[i] >= '0' && value[i] <= '9') number++
    }
    setUpperCnt(upper)
    setNumberCnt(number)
    setPassword(value)
  }

  useEffect(() => {
    if ((password.length < 7 || upperCnt === 0 || numberCnt === 0) && password.length > 0) {
      setPasswordValid('Password must be at least 8 characters with 1 upper case letter and 1 number.')
    } else {
      setPasswordValid('')
    }
  }, [password, upperCnt, numberCnt])

  const handlePhoneNumChange = (value: any) => {
    setPhoneNum(value)
    if (phoneNum.length < 8) {
      setPhoneNumValid('Please enter a valid phone number.')
    } else {
      setPhoneNumValid('')
    }
  }

  const handleConfirmChange = (value: any) => {
    setConfirmPassword(value)
    if (password !== value) {
      setConfirmValid('Password does not match, please check again.')
    } else {
      setConfirmValid('')
    }
  }

  const handleServiceCheck = (value: any) => {
    setServiceCheck(value)
  }

  const handleClickPassword = () => {
    setClickPassword(true)
    setPasswordTooltip(true)
  }

  const handleKeyDownEmail = (e: any) => {
    if (e.key === 'Tab') {
      setClickPhoneNum(false)
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

  const handleTooltipClose = () => {
    setPasswordTooltip(false)
    setClickPassword(false)
  }

  const [flag, setFlag] = useState('https://cdn.kcak11.com/CountryFlags/countries/us.svg')
  const [countryCode, setCountryCode] = useState('+1')

  const handleGetPhoneNumber = (phone: any) => {
    setPhoneModalOpen(false)
    setPhoneNumberDrawOpen(false)
    setFlag(phone.flag)
    setCountryCode(phone.dialCode)
  }

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (phoneNum === '' && password === '' && confirmPassword === '') {
      setPhoneNumValid('Please enter a valid phone number.')
      setPasswordValid('Please enter a valid password.')
      setConfirmValid('Please enter a valid confirm password.')
    } else if (phoneNum === '' && password === '') {
      setPhoneNumValid('Please enter a valid phone number.')
      setPasswordValid('Please enter a valid password.')
    } else if (phoneNum === '' && confirmPassword === '') {
      setPhoneNumValid('Please enter a valid phone number.')
      setConfirmValid('Please enter a valid confirm password.')
    } else if (password === '' && confirmPassword === '') {
      setPasswordValid('Please enter a valid password.')
      setConfirmValid('Please enter a valid confirm password.')
    } else if (phoneNum === '') {
      setPhoneNumValid('Please enter a valid phone number.')
    } else if (password === '') {
      setPasswordValid('Please enter a valid password.')
    } else if (confirmPassword === '') {
      setConfirmValid('Please enter a valid confirm password.')
    } else {
      if (serviceCheck !== false && password.length > 7 && upperCnt !== 0 && numberCnt !== 0) {
        const formData = new FormData()
        formData.append('phonenumber', countryCode + phoneNum)
        formData.append('password', password)
        formData.append('confirmpassword', confirmPassword)

        PhoneRegister(formData).then((res: any) => {
          if (res === undefined) {
            dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
            return
          }
          if (res.data.Success) {
            history.push('/verification-new-register/mobile', { data: countryCode + phoneNum })
          } else {
            dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
          }
        })
      }
    }
  }

  return (
    <>
      <form onSubmit={handleRegisterSubmit}>
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
                  maxLength={10}
                  type="number"
                  onChange={(e) => handlePhoneNumChange(e.target.value)}
                  onClick={() => setClickPhoneNum(true)}
                  onKeyDown={(e) => handleKeyDownEmail(e)}
                  className={classes.input}
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
                    {password.length < 7 ? (
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
          <FormHelperText className={classes.fontColor1}>Confirm Password</FormHelperText>
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
                value={confirmPassword}
              />
              {confirmPassword.length > 0 && clickConfirmPass === true ? (
                <CancelIcon className={classes.icon} onClick={() => setConfirmPassword('')} />
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
        </FormControl>

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
        <Typography variant="body2" className={classes.fontColor1}>
          Already registered?
        </Typography>
        <Link to="/login" className={classes.loginLink4}>
          Log In
        </Link>
      </div>
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
