import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import ReturnButton from '../../../../components/Dashboard/ReturnButton'
import ActionButton from '../../../../components/Dashboard/ActionButton'
import TextFiled from '../../../../components/Dashboard/TextField'
import ResetSecurityLink from '../../../../components/Dashboard/ResetSecurityLink'
import { ToEmailSimplify } from 'utils/stringUtils'
import { GetcodeEmail, GetcodePhonenumber, EnableEmailSubmit } from 'hooks/verification'
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
  userId: string
  phone: string
}

export default function EnableEmail() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [userId, setUserId] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [submitStatus, setSubmitStatus] = useState(true)
  const [currentPhoneVerifyStatus, setCurrentPhoneVerifyStatus] = useState(false)
  const [firstPhoneVerification, setFirstPhoneVerification] = useState(false)
  const [newEmailValue, setNewEmailValue] = useState('')
  const [newEmailValid, setNewEmailValid] = useState('')
  const [newEmailVerifyValue, setNewEmailVerifyValue] = useState('')
  const [newEmailVerifyValid, setNewEmailVerifyValid] = useState('')
  const [newEmailGetcodeStatus, setNewEmailGetcodeStatus] = useState(false)
  const [currentPhoneVerifyValue, setCurrentPhoneVerifyValue] = useState('')
  const [currentPhoneVerifyValid, setCurrentPhoneVerifyValid] = useState('')
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
            dispatch(showAlert({ message: 'Send SMS success', severity: 'success' }))
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

  const handleCurrentPhoneVerifyChange = (e: any) => {
    const emailCode = e.target.value
    emailCode.length === 6 ? setSubmitStatus(false) : setSubmitStatus(true)
    setCurrentPhoneVerifyValue(e.target.value)
  }

  const handleClickCurrentPhoneVerify = () => {
    const formData = new FormData()
    formData.append('phonenumber', userPhone)
    GetcodePhonenumber(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }
      if (res.data.Success) {
        dispatch(showAlert({ message: 'Mobile Phone verification code sent successfully', severity: 'success' }))
        setCurrentPhoneVerifyStatus(true)
        setFirstPhoneVerification(true)
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
    if (!firstPhoneVerification) {
      setCurrentPhoneVerifyValid('Please get a verification code first.')
      validation = false
    } else {
      setCurrentPhoneVerifyValid('')
    }
    if (validation) {
      const formData = new FormData()
      formData.append('user_id', userId)
      formData.append('new_email', newEmailValue)
      formData.append('new_emailcode', newEmailVerifyValue)
      formData.append('phonenumber', userPhone)
      formData.append('phonecode', currentPhoneVerifyValue)
      EnableEmailSubmit(formData).then((res: any) => {
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
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setUserId(decoded.userId)
      setUserPhone(decoded.phone)
    }
  }, [])

  return (
    <Box className={classes.container}>
      <ReturnButton to="/my/security" />
      {!isRequestSuccess && (
        <div className={classes.root}>
          <Box className={classes.titleContent}>
            <span className={classes.title}>Enable Email Verification</span>
          </Box>
          <Box className={classes.content}>
            <div>
              <Box className={classes.formTitle}>New Email Verification</Box>
              <TextFiled
                title="Email"
                type="isDelete"
                info=""
                error={newEmailValid}
                fontSize={classes.fontSize2}
                inputValue={newEmailValue}
                handleInitState={handleInitNewEmailValue}
                onChange={handleNewEmailChange}
              />
              <br />
              <TextFiled
                title="Email Verification Code"
                type="isButton"
                info=""
                error={newEmailVerifyValid}
                fontSize={classes.fontSize1}
                onChange={handleNewEmailVerifyChange}
                onGetCodeClick={handleClickNewEmailVerify}
                getCodeStatus={newEmailGetcodeStatus}
                handleGetCodeStatus={() => setNewEmailGetcodeStatus(false)}
              />
              <Box className={classes.formTitle}>Security Verification</Box>
              <TextFiled
                title="Phone verification code"
                type="isButton"
                info={`Enter the 6-digit code sent to ${ToEmailSimplify(userPhone)}`}
                error={currentPhoneVerifyValid}
                fontSize={classes.fontSize1}
                onChange={handleCurrentPhoneVerifyChange}
                onGetCodeClick={handleClickCurrentPhoneVerify}
                getCodeStatus={currentPhoneVerifyStatus}
                handleGetCodeStatus={() => setCurrentPhoneVerifyStatus(false)}
              />
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
          title="Enable Email Verification"
          header="Email Verification Enabled"
          content="You have successfully enabled Email verification to protect your account."
          btntext="Log In"
        />
      )}
    </Box>
  )
}
