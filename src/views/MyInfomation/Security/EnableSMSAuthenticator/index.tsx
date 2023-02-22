import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Box, Typography, Avatar, FormHelperText, Drawer } from '@material-ui/core'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded'
import { useStyles } from 'components/Dashboard/Style'
import TextField from 'components/Dashboard/TextField'
import ReturnButton from 'components/Dashboard/ReturnButton'
import PhoneNumModal from 'views/Auth/PhoneNumModal/PhoneNumModal'
import PhoneDraw from 'views/Auth/PhoneNumModal/PhoneNumDrawModal'
import ResetSecurityLink from 'components/Dashboard/ResetSecurityLink'
import ActionButton from 'components/Dashboard/ActionButton'
import { GetcodePhonenumber, GetcodeEmail, PhoneVerification } from 'hooks/verification'
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'
import jwt_decode from 'jwt-decode'
import { ToEmailSimplify } from 'utils/stringUtils'
import SuccessVerification from '../SuccessVerification'
import { newUserInfoState } from 'config/constants'

interface MyToken {
  email: string
  userId: string
}

function Container() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [phoneModalopen, setPhoneModalOpen] = useState(false)
  const [phoneNumberDrawOpen, setPhoneNumberDrawOpen] = useState(false)
  const [phoneNumValid, setPhoneNumValid] = useState('')
  const [flag, setFlag] = useState('https://cdn.kcak11.com/CountryFlags/countries/us.svg')
  const [countryCode, setCountryCode] = useState('+1')
  const [phoneNumberValue, setPhoneNumberValue] = useState('')
  const [phoneVerifyValue, setPhoneVerifyValue] = useState('')
  const [phoneVerifyValueError, setPhoneVerifyValueError] = useState('')
  const [phonenumberGetcodeStatus, setPhonenumberGetcodeStatus] = useState(false)

  const [emailVerifyValue, setEmailVerifyValue] = useState('')
  const [emailVerifyStatus, setEmailVerifyStatus] = useState(false)
  const [emailVerifyValueError, setEmailVerifyValueError] = useState('')
  const [firstEmailVerification, setFirstEmailVerification] = useState(false)

  const [submitStatus, setSubmitStatus] = useState(true)
  const [userEmail, setUserEmail] = useState('')
  const [userId, setUserId] = useState('')
  const [isRequestSuccess, SetIsRequestSuccess] = useState(false)

  const handleGetPhoneNumber = (phone: any) => {
    setPhoneModalOpen(false)
    setPhoneNumberDrawOpen(false)
    setFlag(phone.flag)
    setCountryCode(phone.dialCode)
  }

  // input Phone Number for user
  const handlePhoneNumChange = (e: any) => {
    setPhoneNumberValue(e.target.value)
  }

  // initialize phoneNumber value
  const handleInitPhoneNumberValue = () => {
    setPhoneNumberValue('')
  }

  // input Phone Code from user Verification Phone Code
  const handlePhoneVerifyChange = (e: any) => {
    setPhoneVerifyValue(e.target.value)
  }

  // input Email Code from user Verification Email Code
  const handleEmailVerifyChange = (e: any) => {
    const emailCode = e.target.value
    emailCode.length === 6 ? setSubmitStatus(false) : setSubmitStatus(true)
    setEmailVerifyValue(e.target.value)
  }

  // Click Event of Email Verification Code
  const handleClickPhoneVerify = () => {
    if (phoneNumberValue) {
      const phoneNumber = countryCode + phoneNumberValue
      //Call API for phone number authentication
      const formData = new FormData()
      formData.append('phonenumber', phoneNumber)
      formData.append('is_new', newUserInfoState)
      GetcodePhonenumber(formData).then((res: any) => {
        if (res === undefined) {
          dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
          return
        }
        if (res.data.Success) {
          dispatch(showAlert({ message: 'Send SMS success', severity: 'success' }))
          setPhonenumberGetcodeStatus(true)
        } else {
          dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
        }
      })
      setPhoneNumValid('')
    } else {
      setPhoneNumValid('Please enter a valid phone number.')
    }
  }

  // Click Event of Email Verification Code
  const handleClickEmailVerify = () => {
    const formData = new FormData()
    formData.append('email', userEmail)
    GetcodeEmail(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        setEmailVerifyStatus(false)
        return
      }
      if (res.data.Success) {
        dispatch(showAlert({ message: 'Email verification code sent successfully', severity: 'success' }))
        setEmailVerifyStatus(true)
        setFirstEmailVerification(true)
      } else {
        dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
        setEmailVerifyStatus(false)
      }
    })
  }

  const handleSubmit = () => {
    let validation = true
    if (phoneNumberValue === '') {
      setPhoneNumValid('Please enter a valid phone number.')
      validation = false
    } else {
      setPhoneNumValid('')
    }
    if (phoneVerifyValue === '') {
      setPhoneVerifyValueError('Please enter your SMS authentication code')
      validation = false
    } else {
      setPhoneVerifyValueError('')
    }
    if (!firstEmailVerification) {
      setEmailVerifyValueError('Please get a verification code first.')
      validation = false
    } else {
      setEmailVerifyValueError('')
    }
    if (validation) {
      const phoneNumber = countryCode + phoneNumberValue
      const formData = new FormData()
      formData.append('user_id', userId)
      formData.append('phonenumber', phoneNumber)
      formData.append('phonecode', phoneVerifyValue)
      formData.append('email', userEmail)
      formData.append('emailcode', emailVerifyValue)
      PhoneVerification(formData).then((res: any) => {
        if (res === undefined) {
          dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
          SetIsRequestSuccess(false)
          return
        }
        if (res.data.Success) {
          dispatch(showAlert({ message: 'Success', severity: 'success' }))
          localStorage.removeItem('jwtToken')
          SetIsRequestSuccess(true)
        } else {
          dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
          SetIsRequestSuccess(false)
        }
      })
    }
  }

  const countryCodeBox = (
    <>
      <Avatar src={flag} alt="logo" className={classes.flag} />
      <Typography className={classes.phoneNumText}>
        {countryCode[0]}&nbsp;
        {countryCode.slice(1, countryCode.length)}
      </Typography>
      {phoneModalopen ? (
        <ArrowDropUpRoundedIcon className={classes.flagBtn} />
      ) : (
        <ArrowDropDownRoundedIcon className={classes.flagBtn} />
      )}
    </>
  )

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setUserEmail(decoded.email)
      setUserId(decoded.userId)
    }
  }, [])

  return (
    <Box className={classes.container}>
      <ReturnButton to="/my/security" />
      {!isRequestSuccess && (
        <div className={classes.root}>
          <Typography className={classes.pageTitle}>Enable Phone Number Verification</Typography>
          <Box maxWidth={384} mx="auto" width="100%">
            <Typography className={classes.formTitle}>New Phone Number Verification</Typography>
            <Box width="100%" mb="24px">
              <Typography className={classes.fontType1} style={{ marginBottom: '4px' }}>
                Phone Number
              </Typography>
              <div className={classes.phoneNumDiv}>
                <div
                  onClick={() => setPhoneModalOpen(true)}
                  className={clsx(classes.countrySide, classes.deskCountrySide)}
                >
                  {countryCodeBox}
                </div>
                <div
                  onClick={() => setPhoneNumberDrawOpen(true)}
                  className={clsx(classes.countrySide, classes.mobileCountrySide)}
                >
                  {countryCodeBox}
                </div>
                <TextField
                  type="isNumber"
                  error=""
                  inputValue={phoneNumberValue}
                  handleInitState={handleInitPhoneNumberValue}
                  onChange={handlePhoneNumChange}
                />
              </div>
              <FormHelperText className={classes.error}>{phoneNumValid === '' ? '' : phoneNumValid}</FormHelperText>
            </Box>

            <TextField
              title="Phone Number Verification Code"
              type="isButton"
              info="Please enter sms authentication code"
              error={phoneVerifyValueError}
              fontSize={phoneVerifyValueError ? classes.fontSize1 : classes.fontSize2}
              style={{ marginBottom: '24px' }}
              onChange={handlePhoneVerifyChange}
              onGetCodeClick={handleClickPhoneVerify}
              getCodeStatus={phonenumberGetcodeStatus}
              handleGetCodeStatus={() => setPhonenumberGetcodeStatus(false)}
            />

            <Typography className={classes.formTitle} style={{ marginBottom: '16px' }}>
              Security Verification
            </Typography>

            <TextField
              title="E-mail verification code"
              type="isButton"
              info={`Enter the 6-digit code sent to ${ToEmailSimplify(userEmail)}`}
              error={emailVerifyValueError}
              fontSize={classes.fontSize1}
              style={{ marginBottom: '24px' }}
              onChange={handleEmailVerifyChange}
              onGetCodeClick={handleClickEmailVerify}
              getCodeStatus={emailVerifyStatus}
              handleGetCodeStatus={() => setEmailVerifyStatus(false)}
            />

            <ResetSecurityLink style={{ paddingBottom: '40px' }} />

            <ActionButton
              type="yellow"
              style={{ width: '100%', marginBottom: '24px' }}
              disabled={submitStatus}
              onClick={handleSubmit}
            >
              Submit
            </ActionButton>
          </Box>

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
        </div>
      )}
      {isRequestSuccess && (
        <SuccessVerification
          title="Enable Phone Number Verification"
          header="Phone Number Verification Enabled"
          content="You have successfully enabled phone number verification to protect your account."
          btntext="Log In"
        />
      )}
    </Box>
  )
}

export default Container
