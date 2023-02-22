/** @format */

import React, { useState, useEffect } from 'react'
import { Grid, Typography, Snackbar } from '@material-ui/core'
// import Support from "../../../../assets/image/support.svg";
import StableConnection from './StableConnection'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

//material-ui
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ChatBox from '../../../../components/ChatBox'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fontColor: {
      color: theme.palette.text.hint,
      '&:hover': {
        color: 'rgb(240, 185, 11)',
      },
    },
    messageIcon: {
      width: '14px',
      height: '14px',
      verticalAlign: 'middle',
      marginRight: '10px',
    },
  }),
)

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function Footer() {
  const classes = useStyles()

  //----------------------------notification-------------------
  const [notification, setNotification] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)
  const [notificationText, setNotificationText] = useState('')

  const handleCloseNotification = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenNotification(false)
  }

  const [isChatOpen, setIsChatOpen] = useState(false)

  const setClose = (e: boolean) => {
    setIsChatOpen(e)
  }

  const [sign, setSign] = useState(0)

  useEffect(() => {
    if (localStorage.jwtToken) {
      setSign(1)
    }
  }, [])

  const handleChatOpen = () => {
    if (sign === 0) {
      setNotification(true)
      setNotificationText('Please Login')
      setOpenNotification(true)
    } else {
      setIsChatOpen(true)
    }
  }

  return (
    <>
      <Grid container style={{ paddingLeft: '10px' }}>
        <Grid item>
          <StableConnection />
        </Grid>
        <Grid
          item
          style={{
            marginLeft: 'auto',
            marginRight: '10px',
            cursor: 'pointer',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" className={classes.fontColor} onClick={handleChatOpen}>
            <MessageOutlinedIcon className={classes.messageIcon} />
            Online Support
          </Typography>
        </Grid>
      </Grid>
      <ChatBox isChatOpen={isChatOpen} getCloseState={setClose} />
      {notification === undefined ? (
        ''
      ) : (
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={handleCloseNotification}
          open={openNotification}
          autoHideDuration={3000}
        >
          <Alert severity="error" style={{ background: '#bf2d29' }}>
            {notificationText}
          </Alert>
        </Snackbar>
      )}
    </>
  )
}

export default Footer
