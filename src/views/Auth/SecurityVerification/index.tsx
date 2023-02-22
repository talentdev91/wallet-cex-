import React, { useState } from 'react'
import clsx from 'clsx'
import { useInterval } from 'usehooks-ts'
import { useHistory } from 'react-router-dom'
// material-ui
import { Typography, Box, FormControl, FormHelperText, ClickAwayListener } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
// external
import { useStyles, StyledTooltip } from '../Style'
import LoginHeader from 'components/LoginHeader'
import { SendCode, PhoneLoginVerify } from 'hooks/auth'
import { ToPhoneNumberSimplify } from 'utils/stringUtils'
// aler redux
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'

const DELAY = 60
const ONE_SECOND = 1000

function SecurityVerification(props: any) {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  let history = useHistory()

  const [verifyCode, setVerifyCodoe] = useState('')
  const [clickVerifyCode, setClickVerifyCode] = useState(false)
  const phoneNumber = props.location?.state?.data
  const [isGetCode, setIsGetCode] = useState(true)
  const [getCodeTime, setGetCodeTime] = useState<number>(DELAY)

  const handleVerifyCodeChange = (e: any) => {
    setVerifyCodoe(e.toString())
  }

  const handleSendCode = () => {
    const formData = new FormData()
    formData.append('phonenumber', phoneNumber)

    SendCode(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }
      if (res.data.Success) {
        setIsGetCode(false)
        dispatch(showAlert({ message: 'Send success. Please check your SMS.', severity: 'success' }))
      } else {
        setIsGetCode(true)
        dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
      }
    })
  }

  useInterval(
    () => {
      if (getCodeTime > 0) {
        setGetCodeTime(getCodeTime - 1)
      } else {
        setIsGetCode(true)
        setGetCodeTime(DELAY)
      }
    },
    !isGetCode ? ONE_SECOND : null,
  )

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('phonenumber', phoneNumber)
    formData.append('phonecode', verifyCode)

    PhoneLoginVerify(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }
      if (res.data.Success) {
        localStorage.setItem('jwtToken', res?.data?.JwtToken)
        history.push('/trade')
      } else {
        dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
      }
    })
  }

  return (
    <>
      <div className={classes.root2}>
        <LoginHeader />
        <div className={classes.container}>
          <div>
            <Typography className={clsx(classes.fontColor1, classes.h2)}>Security Verifiaction</Typography>
            <Typography className={clsx(classes.fontColor2, classes.h3)}>
              To secure your account, please complete the following verification.
            </Typography>
          </div>
          <div>
            <FormControl className={classes.formControlSide} variant="outlined">
              <FormHelperText className={clsx(classes.fontColor1, classes.helperText)}>Password</FormHelperText>
              <ClickAwayListener onClickAway={() => setClickVerifyCode(false)}>
                <div
                  className={clsx({
                    [classes.inputSide]: clickVerifyCode === false,
                    [classes.inputSide3]: clickVerifyCode === true,
                  })}
                >
                  <input
                    type="number"
                    onChange={(e) => handleVerifyCodeChange(e.target.value)}
                    onClick={() => setClickVerifyCode(true)}
                    className={classes.input}
                    value={verifyCode}
                  />
                  {isGetCode ? (
                    <button className={classes.sendCodeBtn} onClick={handleSendCode}>
                      Get code
                    </button>
                  ) : (
                    <Typography className={clsx(classes.fontColor5, classes.text3)}>
                      Verification code sent
                      <StyledTooltip
                        title={`Haven't received code? Request new code in ${getCodeTime} seconds. The code will expire after 10 mins`}
                        arrow
                      >
                        <ErrorOutlineIcon className={classes.warnIcon} />
                      </StyledTooltip>
                    </Typography>
                  )}
                </div>
              </ClickAwayListener>
              <FormHelperText className={clsx(classes.fontColor3, classes.helperText3)}>
                Enter the 6 digit code sent to {ToPhoneNumberSimplify(phoneNumber)}.
              </FormHelperText>
            </FormControl>
          </div>
          <button className={classes.securityBtn}>Security verification unavailable?</button>
          <div style={{ paddingTop: '20px' }}>
            <button
              className={clsx({
                [classes.registerBtn]: verifyCode.length === 6,
                [classes.registerBtn3]: verifyCode.length < 6 || verifyCode.length > 6,
              })}
              disabled={verifyCode.length === 6 ? false : true}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div>
          <Box className={classes.footer2}>© 2021 dongletrade.com. All rights reserved</Box>
        </div>
      </div>
    </>
  )
}

export default SecurityVerification
