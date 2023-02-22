import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from 'components/Dashboard/Style'
import TextField from 'components/Dashboard/TextField'
import ReturnButton from 'components/Dashboard/ReturnButton'
import ResetSecurityLink from 'components/Dashboard/ResetSecurityLink'
import ActionButton from 'components/Dashboard/ActionButton'
import RemoveSuccessIcon from 'assets/image/RemoveSuccess.svg'

import { GetcodePhonenumber, GetcodeEmail, RemovePhoneSubmit, RemoveEmailSubmit } from 'hooks/verification'
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'
import jwt_decode from 'jwt-decode'
import { ToEmailSimplify, ToPhoneNumberSimplify } from 'utils/stringUtils'

interface MyToken {
  email: string
  userId: string
  phone: string
}

function Container() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [emailVerifyValue, setEmailVerifyValue] = useState('')
  const [emailVerifyStatus, setEmailVerifyStatus] = useState(false)
  const [emailVerifyValueError, setEmailVerifyValueError] = useState('')
  const [firstEmailVerification, setFirstEmailVerification] = useState(false)

  const [oldPhoneVerifyValue, setOldPhoneVerifyValue] = useState('')
  const [oldPhoneVerifyStatus, setOldPhoneVerifyStatus] = useState(false)
  const [oldPhoneVerifyValueError, setOldPhoneVerifyValueError] = useState('')
  const [firstOldPhoneVerification, setFirstOldPhoneVerification] = useState(false)

  const [submitStatus, setSubmitStatus] = useState(true)
  const [userEmail, setUserEmail] = useState('')
  const [userId, setUserId] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [isRequestSuccess, SetIsRequestSuccess] = useState(false)
  const location = useLocation()

  const lastSegmentUrl = location.pathname.split('/').pop()
  let title
  let status: any

  if (lastSegmentUrl === 'remove-sms-authenticator') {
    status = 'phone'
    title = 'Remove Phone Number Verification'
  } else if (lastSegmentUrl === 'remove-email-authenticator') {
    status = 'email'
    title = 'Remove Email Verification'
  }

  useEffect(() => {
    SetIsRequestSuccess(false)
  }, [lastSegmentUrl])

  // input Email Code from user Verification Email Code
  const handleEmailVerifyChange = (e: any) => {
    setEmailVerifyValue(e.target.value)
  }

  // input old phone Code from user Verification
  const handleOldPhoneVerifyChange = (e: any) => {
    setOldPhoneVerifyValue(e.target.value)
  }

  // Click Event of Email Verification Code
  const handleClickEmailVerify = () => {
    const formData = new FormData()
    formData.append('email', userEmail)
    GetcodeEmail(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }
      if (res.data.Success) {
        dispatch(showAlert({ message: 'Email verification code sent successfully', severity: 'success' }))
        setFirstEmailVerification(true)
        setEmailVerifyStatus(true)
      } else {
        dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
      }
    })
  }

  // Click Event of Email Verification Code
  const handleClickOldPhoneVerify = () => {
    const formData = new FormData()
    formData.append('phonenumber', userPhone)
    GetcodePhonenumber(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }
      if (res.data.Success) {
        dispatch(showAlert({ message: 'Mobile Phone verification code sent successfully', severity: 'success' }))
        setFirstOldPhoneVerification(true)
        setOldPhoneVerifyStatus(true)
      } else {
        dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
      }
    })
  }

  const handleSubmit = () => {
    let validation = true

    if (!firstEmailVerification) {
      setEmailVerifyValueError('Please get a verification code first.')
      validation = false
    } else {
      setEmailVerifyValueError('')
    }
    if (!firstOldPhoneVerification) {
      setOldPhoneVerifyValueError('Please get a verification code first.')
      validation = false
    } else {
      setOldPhoneVerifyValueError('')
    }
    if (validation) {
      const formData = new FormData()
      formData.append('user_id', userId)
      formData.append('email', userEmail)
      formData.append('emailcode', emailVerifyValue)
      formData.append('phonenumber', userPhone)
      formData.append('phonecode', oldPhoneVerifyValue)
      status === 'phone' &&
        RemovePhoneSubmit(formData).then((res: any) => {
          if (res === undefined) {
            dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
            SetIsRequestSuccess(false)
            return
          }
          if (res.data.Success) {
            dispatch(showAlert({ message: 'Success', severity: 'success' }))
            localStorage.removeItem('jwtToken')
            SetIsRequestSuccess(true)
            // history.push('/my/security')
          } else {
            dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
            SetIsRequestSuccess(false)
          }
        })
      status === 'email' &&
        RemoveEmailSubmit(formData).then((res: any) => {
          if (res === undefined) {
            dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
            SetIsRequestSuccess(false)
            return
          }
          if (res.data.Success) {
            dispatch(showAlert({ message: 'Success', severity: 'success' }))
            SetIsRequestSuccess(true)
            localStorage.removeItem('jwtToken')
            // history.push('/my/security')
          } else {
            dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
            SetIsRequestSuccess(false)
          }
        })
    }
  }

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setUserEmail(decoded.email)
      setUserId(decoded.userId)
      setUserPhone(decoded.phone)
    }
  }, [])

  useEffect(() => {
    if (oldPhoneVerifyValue.length === 6 && emailVerifyValue.length === 6) {
      setSubmitStatus(false)
    } else {
      setSubmitStatus(true)
    }
  }, [oldPhoneVerifyValue, emailVerifyValue])

  return (
    <Box className={classes.container}>
      <ReturnButton to="/my/security" />
      {!isRequestSuccess && (
        <>
          <Typography className={classes.pageTitle}>{title}</Typography>
          <Box maxWidth={384} mx="auto" width="100%">
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
            />

            <TextField
              title="Phone verification code"
              type="isButton"
              info={`Enter the 6-digit code sent to ${ToPhoneNumberSimplify(userPhone)}`}
              error={oldPhoneVerifyValueError}
              fontSize={classes.fontSize1}
              style={{ marginBottom: '24px' }}
              onChange={handleOldPhoneVerifyChange}
              onGetCodeClick={handleClickOldPhoneVerify}
              getCodeStatus={oldPhoneVerifyStatus}
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
        </>
      )}
      {isRequestSuccess && (
        <>
          <Typography className={classes.pageTitle}>
            Remove {lastSegmentUrl?.includes('sms') ? 'Phone Number' : 'Email'} Verification
          </Typography>
          <Box maxWidth={384} mx="auto" width="100%" display="flex" flexDirection="column" alignItems="center">
            <img src={RemoveSuccessIcon} alt="icon" />
            <Typography style={{ fontSize: '24px', margin: '32px 0 14px 0' }}>
              {lastSegmentUrl?.includes('sms') ? 'Phone number' : 'Email Address'} removed
            </Typography>
            <Typography className={classes.SecurityVerificationModalDialogContentText}>
              You have successfully removed the {lastSegmentUrl?.includes('sms') ? 'phone number' : 'email address'}.
            </Typography>
            {/* {logedMethod === 'phone' && (
              <ActionButton type="yellow" className={classes.stepperBtn}>
                {lastSegmentUrl?.includes('sms') ? 'Log In' : 'Back to Security'}
              </ActionButton>
            )} */}
            <Link to="/login" className={classes.linkBtn}>
              <ActionButton type="yellow" style={{ width: '100%', marginTop: '32px' }}>
                Log In
              </ActionButton>
            </Link>
          </Box>
        </>
      )}
    </Box>
  )
}

export default Container
