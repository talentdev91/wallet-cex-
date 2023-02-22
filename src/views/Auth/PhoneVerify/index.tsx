import React, { useState } from 'react'
import { useInterval } from 'usehooks-ts'
import { useHistory } from 'react-router-dom'
// material-ui
import { Typography, Box } from '@material-ui/core'
import clsx from 'clsx'
import { useStyles } from '../Style'
import LoginHeader from 'components/LoginHeader'
import HlepModal from './HelpModal'
import ErrorModal from './ErrorModal'
import VerificationInput from 'react-verification-input'
import { PhoneRegisterVerify, SendCode } from 'hooks/auth'
// aler redux
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'

const DELAY = 60
const ONE_SECOND = 1000

function PhoneVerify(props: any) {
  const classes = useStyles()
  let history = useHistory()
  const dispatch = useAppDispatch()

  const [helpModalopen, setHelpModalOpen] = useState(false)
  const [errorModalOpen, setErrorModalOpen] = useState(false)
  const [isResend, setIsResend] = useState(false)
  const [resendTime, setResendTime] = useState<number>(DELAY)
  const [code, setCode] = useState<any>()
  const phoneNumber = props.location?.state?.data

  const handleHelpModalClose = () => {
    setHelpModalOpen(false)
    setErrorModalOpen(false)
  }

  useInterval(
    () => {
      if (resendTime > 0) {
        setResendTime(resendTime - 1)
      } else {
        setIsResend(true)
        setResendTime(DELAY)
      }
    },
    !isResend ? ONE_SECOND : null,
  )

  const handleCodeChange = (e: any) => {
    setCode(e)
    const formData = new FormData()
    formData.append('phonenumber', phoneNumber)
    formData.append('phonecode', e.toString())

    if (e.length === 6 && isResend) {
      setCode('')

      PhoneRegisterVerify(formData).then((res: any) => {
        if (res === undefined) {
          dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
          return
        }
        if (res.data.Success) {
          dispatch(showAlert({ message: 'Phone verify success. Please login.', severity: 'success' }))
          history.push('/login')
        } else {
          setErrorModalOpen(true)
          dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
        }
      })
    }
  }

  const handleResend = () => {
    setIsResend(false)

    const formData = new FormData()
    formData.append('phonenumber', phoneNumber)

    SendCode(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }
      if (res.data.Success) {
        dispatch(showAlert({ message: 'Resend success. Please enter the verify code', severity: 'success' }))
      } else {
        dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
      }
    })
  }

  return (
    <>
      <div className={classes.root}>
        <LoginHeader />
        <div className={classes.container}>
          <div>
            <Typography className={clsx(classes.fontColor1, classes.h2)}>Phone Verification</Typography>
            <Typography variant="body2" className={classes.fontColor2}>
              Please enter the 6-digit verification code sent to {phoneNumber}. The code is valid for 10 minutes.
            </Typography>
            <Typography variant="body2" className={clsx(classes.fontColor2, classes.codeText)}>
              Phone Verificaion Code
            </Typography>
          </div>
          <div>
            <VerificationInput
              removeDefaultStyles
              placeholder=""
              validChars="0-9"
              value={code}
              onChange={(e) => handleCodeChange(e)}
              classNames={{
                character: classes.codeCharact,
                characterSelected: classes.codeSelect,
              }}
            />
          </div>
          <div className={classes.btnSide2}>
            <button
              disabled={!isResend}
              className={clsx({
                [classes.forgotLink]: isResend === true,
                [classes.disableLink]: isResend === false,
              })}
              onClick={handleResend}
            >
              Resend {!isResend ? 'in ' + resendTime + 's' : ''}
            </button>
            <button className={classes.loginLink3} onClick={() => setHelpModalOpen(true)}>
              Didn't receive the code
            </button>
          </div>
        </div>
        <HlepModal modalopen={helpModalopen} handleClose={handleHelpModalClose} />
        <ErrorModal errorModalopen={errorModalOpen} handleClose={handleHelpModalClose} />

        <Box className={classes.footer3}>© 2021 dongletrade.com. All rights reserved</Box>
      </div>
    </>
  )
}

export default PhoneVerify
