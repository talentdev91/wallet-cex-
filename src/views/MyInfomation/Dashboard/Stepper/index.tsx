import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@material-ui/core'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import { useStyles } from './Style'
import ActionButton from 'components/Dashboard/ActionButton'
import { useAppSelector } from 'store/hooks'
import { selectSecurityInfo } from 'store/auth/selectors'

export default function BalanceDetail() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(1)
  const [verifyLink, setVerifyLink] = useState('')
  const stepsLarge = [
    'Register Account',
    '2FA',
    // 'Deposit Funds'
  ]
  const stepsSmall = [
    '',
    'Secure your account with two-factor authentication！',
    // 'Add cash or crypto funds to your wallet and start trading right away',
  ]

  let Register = <div>Register</div>
  let Btn_2FA = (
    <Link to={verifyLink} className={classes.link}>
      <ActionButton type="yellow" className={classes.stepsBtn}>
        Verify
      </ActionButton>
    </Link>
  )
  let Deposit = (
    <ActionButton type="yellow" className={classes.stepsBtn}>
      Deposit
    </ActionButton>
  )

  let stepsContent = [Register, Btn_2FA, Deposit]
  const securityInfo = useAppSelector(selectSecurityInfo)

  useEffect(() => {
    if (securityInfo.EmailVerify && securityInfo.PhoneVerify) {
      setActiveStep(2)
    } else if (!securityInfo.EmailVerify && securityInfo.PhoneVerify) {
      setVerifyLink('/my/enable-email-authenticator')
    } else if (securityInfo.EmailVerify && !securityInfo.PhoneVerify) {
      setVerifyLink('/my/enable-sms-authenticator')
    }
  }, [securityInfo])

  return (
    <Box className={classes.stepperContent}>
      <div className={classes.stepperTitle}>Welcome to Dongle</div>
      <div className={classes.stepperSubtitle}>Just a few more steps and you're good to go!</div>
      <div>
        <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
          {stepsLarge.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                {label}
                <p className={classes.smallLabel}>{stepsSmall[index]}</p>
                {activeStep === index && stepsContent[index]}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Stepper activeStep={activeStep} orientation="vertical" className={classes.verticalStepper}>
          {stepsLarge.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <p className={classes.smallLabel}>{stepsSmall[index]}</p>
                {activeStep === index && stepsContent[index]}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </Box>
  )
}
