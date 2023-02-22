import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import ActionButton from 'components/Dashboard/ActionButton'
import RemoveSuccessIcon from 'assets/image/RemoveSuccess.svg'
import { Link } from 'react-router-dom'

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
      textAlign: 'center',
    },
    alert: {
      fontSize: '14px',
      color: '#707a8a',
      fontWeight: 400,
      textAlign: 'center',
    },
    linkBtn: {
      textDecoration: 'none',
      width: '100%',
    },
  }),
)

interface SuccessVerificationProps {
  title: string
  header: string
  content: string
  btntext: string
}

function SuccessVerification({ title, header, content, btntext }: SuccessVerificationProps) {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <div className={classes.root}>
        <Box className={classes.titleContent}>
          <span className={classes.title}>{title}</span>
        </Box>
        <Box className={classes.content}>
          <img src={RemoveSuccessIcon} alt="icon" />
          <Typography className={classes.subTitle}>{header}</Typography>
          <Typography className={classes.alert}>{content}</Typography>
          <Link to="/login" className={classes.linkBtn}>
            <ActionButton type="yellow" className={classes.stepperBtn}>
              {btntext}
            </ActionButton>
          </Link>
        </Box>
      </div>
    </Box>
  )
}

export default SuccessVerification
