import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import copy from 'clipboard-copy'
import { useTheme } from '@material-ui/core/styles'
import useStyles from '../styles'

export default function ResponsiveDialog(props: any) {
  const classes = useStyles()
  const [copyAddress, setcopyAddress] = useState(true)
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setcopyAddress(true)
    }, 400)
    return () => clearTimeout(timer)
  }, [copyAddress])

  const handleCopyCode = (props: string) => {
    copy(props)
    setcopyAddress(!copyAddress)
  }

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleClickOpen} className={classes.button}>
        Deposit
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{'Your wallet address'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={{ fontSize: '20px' }}>
              {props.address}
              &nbsp;
              {props.address === undefined ? (
                'There is no address'
              ) : (
                <span onClick={() => handleCopyCode(props.address)} style={{ fontSize: '16px' }}>
                  {(copyAddress && <i className="far fa-copy"></i>) || (
                    <span>
                      <i className="fa fa-check-circle mr-1"></i>
                    </span>
                  )}
                </span>
              )}
            </span>
            <br />
            <span style={{ color: 'grey' }}>
              Here is your wallet address, please send your Basic Attention Token Transferred to this address:
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" className={classes.button} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
