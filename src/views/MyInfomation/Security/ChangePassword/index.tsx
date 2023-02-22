import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Box, Typography, Tooltip, ClickAwayListener } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'

import { useAppDispatch } from 'store/hooks'
import { showAlert } from 'store/alert'
import { changePassword } from 'hooks/auth'
import ReturnButton from 'components/Dashboard/ReturnButton'
import ActionButton from 'components/Dashboard/ActionButton'
import CustomAlert from 'components/Dashboard/Alert/CustomAlert'
import TextFiled from 'components/Dashboard/TextField'
import RemoveSuccessIcon from 'assets/image/RemoveSuccess.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    root: {
      width: '100%',
      padding: '0px 24px 24px 24px',
      flex: '1',
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
    stepperBtn: {
      width: '100%',
      marginTop: '8x',
      [theme.breakpoints.up(767)]: {
        marginTop: '16px',
      },
    },
    fontSize1: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    fontSize2: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    passwordTooltipDiv: {
      background: 'transparent',
      zIndex: 1000,
      margin: '12px 0 0 0',
    },
    strongPasswordDiv: {
      background: '#f5f5f5',
      filter:
        'drop-shadow(rgba(20, 21, 26, 0.08) 0px 3px 6px) drop-shadow(rgba(71, 77, 87, 0.08) 0px 7px 14px) drop-shadow(rgba(20, 21, 26, 0.1) 0px 0px 1px)',
      borderRadius: '4px',
      padding: '8px 12px',
      width: 'fit-content',
    },
    strongPasswordText: {
      fontSize: '14px',
      color: '#848E9C',
      lineHeight: '28px',
      fontWeight: 300,
      textAlign: 'start',
    },
    icon5: {
      verticalAlign: 'middle',
      fill: '#f6465d',
      width: '18px',
      height: '18px',
      marginRight: '6px',
    },
    icon6: {
      verticalAlign: 'middle',
      fill: '#46f673',
      width: '18px',
      height: '18px',
      marginRight: '6px',
    },
    pageTitle: {
      maxWidth: '1000px',
      width: '100%',
      fontWeight: 600,
      textAlign: 'center',
      [theme.breakpoints.up(1023)]: {
        margin: '0 auto 24px auto',
        padding: '24px 0',
        fontSize: '32px',
        lineHeight: '40px',
      },
      [theme.breakpoints.down(1023)]: {
        margin: '0 auto 24px auto',
        padding: '24px',
        fontSize: '32px',
        lineHeight: '40px',
      },
      [theme.breakpoints.down(767)]: {
        marginBottom: '16px',
        padding: '16px',
        fontSize: '24px',
        lineHeight: '32px',
      },
    },
    SecurityVerificationModalDialogContentText: {
      color: '#707a8a',
      fontSize: '14px',
      fontWeight: 'normal',
    },
    linkBtn: {
      textDecoration: 'none',
      width: '100%',
    },
  }),
)

interface MyToken {
  userId: string
}

export default function ChangePassword() {
  const classes = useStyles()

  const getalertcontext =
    'Withdrawals, P2P selling, and payment services will be disabled for 24 hours after you make this change to protect your account.'
  const getalert_iconname = 'icon-warning'
  const dispatch = useAppDispatch()

  const [isRequestSuccess, SetIsRequestSuccess] = useState(false)
  const [passwordTooltip, setPasswordTooltip] = useState(false)
  const [passwordValid, setPasswordValid] = useState('')
  const [password, setPassword] = useState('')
  const [upperCnt, setUpperCnt] = useState(0)
  const [numberCnt, setNumberCnt] = useState(0)
  const [confirm, setConfirm] = useState('')
  const [confirmValid, setConfirmValid] = useState('')
  const [oldPass, setOldPass] = useState('')
  const [oldPassValid, setOldPassValid] = useState('')
  const [token, setToken] = useState('')

  const handleTooltipClose = () => {
    setPasswordTooltip(false)
  }

  const handleClickPassword = () => {
    setPasswordTooltip(true)
  }

  const handleKeyDown = (e: any, type: string) => {
    if (e.key === 'Tab' && type === 'newPassword') {
      setPasswordTooltip(false)
    } else if (e.key === 'Tab' && type === 'oldPassword') {
      setPasswordTooltip(true)
    }
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

    if (value === oldPass) setPasswordValid('New password cannot be the same as old password.')
    if (value !== confirm) {
      setConfirmValid('Password does not match, please check again.')
    } else {
      setConfirmValid('')
    }
  }

  const handleOldPassChange = (value: any) => {
    setOldPass(value)

    if (oldPass !== '') setOldPassValid('')
    if (value === password) {
      setPasswordValid('New password cannot be the same as old password.')
    }
  }

  const handleConfirmPasswordChange = (value: any) => {
    setConfirm(value)
    if (password !== value) {
      setConfirmValid('Password does not match, please check again.')
    } else {
      setConfirmValid('')
    }
  }

  const handleConfirm = () => {
    if (oldPass === '' && password === '' && confirm === '') {
      setOldPassValid('Please enter your password.')
      setPasswordValid('New password cannot be the same as old password.')
      setConfirmValid('Please enter your password.')
    } else if (oldPass === '' && password === '') {
      setOldPassValid('Please enter your password.')
      setPasswordValid('New password cannot be the same as old password.')
    } else if (password === '' && confirm === '') {
      setConfirmValid('Please enter your password')
      setPasswordValid('Please enter your password')
    } else if (oldPass === '') {
      setOldPassValid('Please enter your password')
    } else if (password === '') {
      setPasswordValid('Please enter your password')
    } else if (password === confirm) {
      const formData = new FormData()
      formData.append('user_id', token)
      formData.append('oldpassword', oldPass)
      formData.append('newpassword', password)
      formData.append('confirmpassword', confirm)

      changePassword(formData).then((res) => {
        if (res === undefined) {
          dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
          SetIsRequestSuccess(false)
          return
        }
        if (res.data.Success) {
          dispatch(showAlert({ message: 'Password is changed', severity: 'success' }))
          SetIsRequestSuccess(true)
          localStorage.removeItem('jwtToken')
        } else {
          dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
          SetIsRequestSuccess(false)
        }
      })
    }
  }

  useEffect(() => {
    if ((password.length < 7 || upperCnt === 0 || numberCnt === 0) && password.length > 0) {
      setPasswordValid('Password must be at least 8 characters with 1 upper case letter and 1 number.')
    } else {
      setPasswordValid('')
    }
  }, [password, upperCnt, numberCnt])

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setToken(decoded.userId)
    }
  }, [])

  return (
    <Box className={classes.container}>
      <ReturnButton to="/my/security" />
      <div className={classes.root}>
        {!isRequestSuccess && (
          <>
            <Box className={classes.titleContent}>
              <span className={classes.title}>Change Password</span>
            </Box>
            <Box className={classes.content}>
              <CustomAlert alertcontext={getalertcontext} alert_iconname={getalert_iconname} />
              <div>
                <TextFiled
                  title="Old Password"
                  type="isPassword"
                  placeholder="Enter old password"
                  error={oldPassValid}
                  inputValue={oldPass}
                  onChange={(e) => handleOldPassChange(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'oldPassword')}
                  handleInitState={() => setOldPass('')}
                  fontSize={classes.fontSize1}
                  style={{ marginBottom: '24px' }}
                />

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
                    placement={window.innerWidth > 1000 ? 'right' : 'bottom-end'}
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
                          {upperCnt === 0 ? (
                            <CloseIcon className={classes.icon5} />
                          ) : (
                            <CheckIcon className={classes.icon6} />
                          )}
                          At least 1 upper case
                        </Typography>
                      </div>
                    }
                  >
                    <div>
                      <TextFiled
                        title="New Password"
                        type="isPassword"
                        placeholder="Enter new password"
                        error={passwordValid}
                        inputValue={password}
                        onChange={(e) => handlePasswordChange(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, 'newPassword')}
                        onClick={handleClickPassword}
                        handleInitState={() => setPassword('')}
                        fontSize={classes.fontSize1}
                        style={{ marginBottom: '24px' }}
                      />
                    </div>
                  </Tooltip>
                </ClickAwayListener>

                <TextFiled
                  title="Confirm New Password"
                  type="isPassword"
                  placeholder="Enter new password again"
                  error={confirmValid}
                  inputValue={confirm}
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                  handleInitState={() => setConfirm('')}
                  fontSize={classes.fontSize1}
                  style={{ paddingBottom: '24px' }}
                />

                <ActionButton type="yellow" className={classes.stepperBtn} onClick={handleConfirm}>
                  Confirm
                </ActionButton>
              </div>
            </Box>
          </>
        )}
        {isRequestSuccess && (
          <>
            <Typography className={classes.pageTitle}>Change Password</Typography>
            <Box maxWidth={384} mx="auto" width="100%" display="flex" flexDirection="column" alignItems="center">
              <img src={RemoveSuccessIcon} alt="icon" />
              <Typography style={{ fontSize: '24px', margin: '32px 0 14px 0' }}>Password is changed</Typography>
              <Typography className={classes.SecurityVerificationModalDialogContentText}>
                You have successfully changed the password.
              </Typography>
              <Link to="/login" className={classes.linkBtn}>
                <ActionButton type="yellow" style={{ width: '100%', marginTop: '32px' }}>
                  Log In
                </ActionButton>
              </Link>
            </Box>
          </>
        )}
      </div>
      {/* <Box m="12px" textAlign="center" fontSize="12px" height="16px" color="#474D57">
        © 2017 - 2021 Binance.com. All rights reserved
      </Box> */}
    </Box>
  )
}
