import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { useAppSelector } from '../../store/hooks'
import { alertMessage, alertSeverity } from '../../store/alert/selectors'
import { showAlert } from '../../store/alert'
import { useAppDispatch } from '../../store/hooks'
import CancelIcon from '@material-ui/icons/Cancel'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

function AlertMsg(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  alert: { background: '#2b3139', color: '#a2a8b1' },
  errorIcon: {
    fill: '#f6465d',
    marginRight: '16px',
  },
  successIcon: {
    fill: '#4caf50',
    marginRight: '16px',
  },
}))

export default function Alert() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const msg = useAppSelector(alertMessage)
  const severity = useAppSelector(alertSeverity)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (msg.length !== 0) {
      setOpen(true)
    }
  }, [msg, severity])

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(showAlert({ message: '', severity: severity }))
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <AlertMsg onClose={handleClose} className={classes.alert} icon={false}>
          {severity === 'success' ? (
            <CheckCircleIcon className={classes.successIcon} />
          ) : (
            <CancelIcon className={classes.errorIcon} />
          )}

          {msg}
        </AlertMsg>
      </Snackbar>
    </div>
  )
}
