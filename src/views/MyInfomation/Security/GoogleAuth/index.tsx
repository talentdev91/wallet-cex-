import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, Grid, Box } from '@material-ui/core'

import ReturnButton from '../../../../components/Dashboard/ReturnButton'
import ActionButton from '../../../../components/Dashboard/ActionButton'
import StepIcon from './Stepper/StepIcon'
import { StepperConnector } from './Stepper/StepIcon'
import DownloadApp from './DownloadApp'
import ScanQRCode from './ScanQRCode'
import BackupKey from './BackupKey'
import Authenticator from './Authenticator'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
    },
    root: {
      width: '100%',
      padding: '0px 24px 24px 24px',
    },
    title: {
      marginBottom: '24px',
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '40px',
      textAlign: 'center',
    },
    stepContent: {
      backgroundColor: 'transparent',
      '& .MuiStepLabel-label': {
        color: '#707a8a',
        fontSize: '16px',
      },
      '& .MuiStepLabel-active': {
        color: '#181a20',
      },
      '& .MuiStepLabel-completed': {
        color: '#181a20',
      },
    },
    stepperContainer: {
      maxWidth: '385px',
      margin: '0 auto',
    },
    stepperBtn: {
      width: '100%',
    },
    stepperFooter: {},
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    gridItem: {
      flex: '2 1 0%',
    },
  }),
)

function getSteps() {
  return ['Download App', 'Scan QR Code', 'Backup Key', 'Enable Binance/Google Authenticator', 'Complete']
}

export default function GoogleAuth() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const [stepSuccess, setStepSuccess] = useState(false)

  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const handleStep = (status: boolean) => {
    setStepSuccess(status)
  }

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <DownloadApp />
      case 1:
        return <ScanQRCode />
      case 2:
        return <BackupKey />
      case 3:
        return <Authenticator handleStep={handleStep} />
      case 4:
        return ''
      default:
        return 'Unknown stepIndex'
    }
  }
  return (
    <Box className={classes.container}>
      <ReturnButton to="/my/security" />
      <div className={classes.root}>
        <Box className={classes.title}>
          <span>Enable Binance/Google Authenticator</span>
        </Box>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<StepperConnector />}
          className={classes.stepContent}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className={classes.stepperContainer}>
          {activeStep === steps.length ? (
            <div>
              <ActionButton type="yellow" onClick={handleReset} className={classes.stepperBtn}>
                Reset
              </ActionButton>
            </div>
          ) : activeStep === 0 ? (
            <div>
              {getStepContent(activeStep)}
              <ActionButton type="yellow" className={classes.stepperBtn} onClick={handleNext}>
                Next
              </ActionButton>
            </div>
          ) : activeStep === 3 ? (
            <div>
              {getStepContent(activeStep)}
              <Grid container spacing={2}>
                <Grid item lg={5} className={classes.gridItem}>
                  <ActionButton type="normal" onClick={handleBack} className={classes.stepperBtn}>
                    Previous
                  </ActionButton>
                </Grid>
                <Grid item lg={5} className={classes.gridItem}>
                  <ActionButton
                    type="yellow"
                    disabled={!stepSuccess ? true : false}
                    onClick={handleNext}
                    className={classes.stepperBtn}
                  >
                    Next
                  </ActionButton>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep)}
              <Grid container spacing={2}>
                <Grid item lg={5} className={classes.gridItem}>
                  <ActionButton type="normal" onClick={handleBack} className={classes.stepperBtn}>
                    Previous
                  </ActionButton>
                </Grid>
                <Grid item lg={5} className={classes.gridItem}>
                  <ActionButton type="yellow" onClick={handleNext} className={classes.stepperBtn}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </ActionButton>
                </Grid>
              </Grid>
            </div>
          )}
        </div>
      </div>
    </Box>
  )
}
