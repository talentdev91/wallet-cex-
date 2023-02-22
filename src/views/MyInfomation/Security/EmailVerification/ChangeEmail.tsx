import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import ReturnButton from '../../../../components/Dashboard/ReturnButton'
import ActionButton from '../../../../components/Dashboard/ActionButton'
import CustomAlert from '../../../../components/Dashboard/Alert/CustomAlert'
import TextField from '../../../../components/Dashboard/TextField'
import ResetSecurityLink from '../../../../components/Dashboard/ResetSecurityLink'
import { ToEmailSimplify, ToPhoneNumberSimplify } from 'utils/stringUtils'
import { GetcodePhonenumber, GetcodeEmail, ChangeEmailSubmit } from 'hooks/verification'
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'
import jwt_decode from 'jwt-decode'
import SuccessVerification from '../SuccessVerification'
import { newUserInfoState } from 'config/constants'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
    },
    root: {
      width: '100%',
      padding: '0px 24px 24px 24px',
    },
    titleContent: {
      marginBottom: '24px',
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '40px',
      textAlign: 'center',
      display: 'grid',
    },
    title: {
      padding: '24px',
    },
    content: {
      maxWidth: '385px',
      margin: '0 auto',
    },
    formTitle: {
      fontSize: '16px',
      fontWeight: 500,
      margin: '24px 0',
    },
    stepperBtn: {
      width: '100%',
      marginTop: '40px',
    },
    fontSize1: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    fontSize2: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  }),
)

interface MyToken {
  email: string
  userId: string
  phone: string
}

export default function ChangeEmail() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const getalertcontext =
    'Withdrawals, P2P selling, and payment services will be disabled for 24 hours after you make this change to protect your account.'
  const getalert_iconname = 'icon-warning'

  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userId, setUserId] = useState('')
  const [submitStatus, setSubmitStatus] = useState(true)
  const [oldEmailVerifyStatus, setOldEmailVerifyStatus] = useState(false)
  const [firstEmailVerification, setFirstEmailVerification] = useState(false)
  const [newEmailValue, setNewEmailValue] = useState('')
  const [newEmailValid, setNewEmailValid] = useState('')
  const [newEmailVerifyValue, setNewEmailVerifyValue] = useState('')
  const [newEmailVerifyValid, setNewEmailVerifyValid] = useState('')
  const [newEmailGetcodeStatus, setNewEmailGetcodeStatus] = useState(false)
  const [oldEmailVerifyValue, setOldEmailVerifyValue] = useState('')
  const [oldEmailVerifyValid, setOldEmailVerifyValid] = useState('')

  const [oldPhoneVerifyValue, setOldPhoneVerifyValue] = useState('')
  const [oldPhoneVerifyStatus, setOldPhoneVerifyStatus] = useState(false)
  const [oldPhoneVerifyValueError, setOldPhoneVerifyValueError] = useState('')
  const [firstOldPhoneVerification, setFirstOldPhoneVerification] = useState(false)

  const [isRequestSuccess, SetIsRequestSuccess] = useState(false)

  const handleInitNewEmailValue = () => {
    setNewEmailValue('')
  }

  const handleNewEmailChange = (e: any) => {
    setNewEmailValue(e.target.value)
  }

  const handleNewEmailVerifyChange = (e: any) => {
    setNewEmailVerifyValue(e.target.value)
  }

  const handleClickNewEmailVerify = () => {
    if (newEmailValue) {
      let regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!regEmail.test(newEmailValue)) {
        setNewEmailValid('Please enter a correct email address')
      } else {
        //Call API for phone number authentication
        const formData = new FormData()
        formData.append('email', newEmailValue)
        formData.append('is_new', newUserInfoState)
        GetcodeEmail(formData).then((res: any) => {
          if (res === undefined) {
            dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
            setNewEmailGetcodeStatus(false)
            return
          }
          if (res.data.Success) {
            dispatch(showAlert({ message: 'Success', severity: 'success' }))
            setNewEmailGetcodeStatus(true)
          } else {
            dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
            setNewEmailGetcodeStatus(false)
          }
        })
        setNewEmailValid('')
      }
    } else {
      setNewEmailValid('Please enter your email')
    }
  }

  const handleOldEmailVerifyChange = (e: any) => {
    setOldEmailVerifyValue(e.target.value)
  }

  const handleClickOldEmailVerify = () => {
    const formData = new FormData()
    formData.append('email', userEmail)
    GetcodeEmail(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }
      if (res.data.Success) {
        dispatch(showAlert({ message: 'Email verification code sent successfully', severity: 'success' }))
        setOldEmailVerifyStatus(true)
        setFirstEmailVerification(true)
      } else {
        dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
      }
    })
  }

  // input old phone Code from user Verification
  const handleOldPhoneVerifyChange = (e: any) => {
    setOldPhoneVerifyValue(e.target.value)
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
        setOldPhoneVerifyStatus(true)
        setFirstOldPhoneVerification(true)
      } else {
        dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
      }
    })
  }

  const handleSubmit = () => {
    let validation = true
    if (newEmailValue === '') {
      setNewEmailValid('Please enter a valid phone number.')
      validation = false
    } else {
      let regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!regEmail.test(newEmailValue)) {
        setNewEmailValid('Please enter a correct email address')
      } else {
        setNewEmailValid('')
      }
    }
    if (newEmailVerifyValue === '') {
      setNewEmailVerifyValid('Please enter a valid email verification code.')
      validation = false
    } else {
      setNewEmailVerifyValid('')
    }
    if (!firstEmailVerification) {
      setOldEmailVerifyValid('Please get a verification code first.')
      validation = false
    } else {
      setOldEmailVerifyValid('')
    }
    if (!firstOldPhoneVerification && userPhone) {
      setOldPhoneVerifyValueError('Please get a verification code first.')
      validation = false
    } else {
      setOldPhoneVerifyValueError('')
    }
    if (validation) {
      const formData = new FormData()
      formData.append('user_id', userId)
      formData.append('new_email', newEmailValue)
      formData.append('new_emailcode', newEmailVerifyValue)
      formData.append('old_email', userEmail)
      formData.append('old_emailcode', oldEmailVerifyValue)
      formData.append('phonenumber', userPhone)
      formData.append('phonecode', oldPhoneVerifyValue)
      ChangeEmailSubmit(formData).then((res: any) => {
        if (res === undefined) {
          dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
          return
        }
        if (res.data.Success) {
          dispatch(showAlert({ message: 'Success', severity: 'success' }))
          localStorage.removeItem('jwtToken')
          SetIsRequestSuccess(true)
        } else {
          dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
        }
      })
    }
  }

  useEffect(() => {
    if (userEmail && userPhone) {
      if (oldPhoneVerifyValue.length === 6 && oldEmailVerifyValue.length === 6) {
        setSubmitStatus(false)
      } else {
        setSubmitStatus(true)
      }
    } else if (userEmail && !userPhone) {
      oldEmailVerifyValue.length === 6 ? setSubmitStatus(false) : setSubmitStatus(true)
    } else if (!userEmail && userPhone) {
      oldPhoneVerifyValue.length === 6 ? setSubmitStatus(false) : setSubmitStatus(true)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oldPhoneVerifyValue, oldEmailVerifyValue])

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setUserId(decoded.userId)
      setUserEmail(decoded.email)
      setUserPhone(decoded.phone)
    }
  }, [])

  return (
    <Box className={classes.container}>
      <ReturnButton to="/my/security" />
      {!isRequestSuccess && (
        <div className={classes.root}>
          <Box className={classes.titleContent}>
            <span className={classes.title}>Change Email</span>
          </Box>
          <Box className={classes.content}>
            <CustomAlert alertcontext={getalertcontext} alert_iconname={getalert_iconname} />
            <div>
              <Box className={classes.formTitle}>New Email Verification</Box>
              <TextField
                title="New email address"
                type="isDelete"
                info=""
                error={newEmailValid}
                fontSize={classes.fontSize2}
                inputValue={newEmailValue}
                handleInitState={handleInitNewEmailValue}
                onChange={handleNewEmailChange}
                style={{ marginBottom: '24px' }}
              />

              <TextField
                title="New Email Verification Code"
                type="isButton"
                info=""
                error={newEmailVerifyValid}
                fontSize={classes.fontSize1}
                onChange={handleNewEmailVerifyChange}
                onGetCodeClick={handleClickNewEmailVerify}
                getCodeStatus={newEmailGetcodeStatus}
                handleGetCodeStatus={() => setNewEmailGetcodeStatus(false)}
                style={{ marginBottom: '24px' }}
              />

              <Box className={classes.formTitle}>Security Verification</Box>
              {userEmail && (
                <TextField
                  title="E-mail verification code"
                  type="isButton"
                  info={`Enter the 6-digit code sent to ${ToEmailSimplify(userEmail)}`}
                  error={oldEmailVerifyValid}
                  fontSize={classes.fontSize1}
                  onChange={handleOldEmailVerifyChange}
                  onGetCodeClick={handleClickOldEmailVerify}
                  getCodeStatus={oldEmailVerifyStatus}
                  handleGetCodeStatus={() => setOldEmailVerifyStatus(false)}
                  style={{ marginBottom: '24px' }}
                />
              )}
              {userPhone && (
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
                  handleGetCodeStatus={() => setOldPhoneVerifyStatus(false)}
                />
              )}
              <ResetSecurityLink />

              <ActionButton type="yellow" className={classes.stepperBtn} disabled={submitStatus} onClick={handleSubmit}>
                Submit
              </ActionButton>
            </div>
          </Box>
        </div>
      )}
      {isRequestSuccess && (
        <SuccessVerification
          title="Change Email Verification"
          header="Email Verification Changed"
          content="You have successfully changed email verification to protect your account."
          btntext="Log In"
        />
      )}
    </Box>
  )
}
