import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import ReturnButton from 'components/Dashboard/ReturnButton'
import ActionButton from 'components/Dashboard/ActionButton'
import RemoveSuccessIcon from 'assets/image/RemoveSuccess.svg'

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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    stepperBtn: {
      width: '100%',
      marginTop: '32px',
    },
    subTitle: {
      fontSize: '24px',
      margin: '32px 0 14px 0',
    },
    alert: {
      fontSize: '14px',
      color: '#707a8a',
      fontWeight: 400,
    },
  }),
)

function RemoveVerificationSuccess() {
  const classes = useStyles()
  let logedMethod = 'phone'

  const location = useLocation().pathname.split('/').pop()

  return (
    <Box className={classes.container}>
      <ReturnButton to="/my/security" />
      <div className={classes.root}>
        <Box className={classes.titleContent}>
          <span className={classes.title}>
            Remove {location?.includes('phone') ? 'Phone Number' : 'Email'} Verification
          </span>
        </Box>
        <Box className={classes.content}>
          <img src={RemoveSuccessIcon} alt="icon" />
          <Typography className={classes.subTitle}>
            {location?.includes('phone') ? 'Phone number' : 'Email Address'} removed
          </Typography>
          <Typography className={classes.alert}>
            You have successfully removed the {location?.includes('phone') ? 'phone number' : 'email address'}.
          </Typography>
          {logedMethod === 'phone' && (
            <ActionButton type="yellow" className={classes.stepperBtn}>
              {location?.includes('phone') ? 'Log In' : 'Back to Security'}
            </ActionButton>
          )}
          {logedMethod === 'email' && (
            <ActionButton type="yellow" className={classes.stepperBtn}>
              {location?.includes('email') ? 'Log In' : 'Back to Security'}
            </ActionButton>
          )}
        </Box>
      </div>
    </Box>
  )
}

export default RemoveVerificationSuccess
