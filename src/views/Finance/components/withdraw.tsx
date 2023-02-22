import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useStyles from '../styles'

export default function FormDialog() {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleClickOpen} className={classes.draw}>
        Withdraw
      </Button>
      <form>
        <Dialog open={open} onClose={handleClose} fullWidth aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Withdraw</DialogTitle>
          <DialogContent>
            <DialogContentText>Please insert information for withdraw.</DialogContentText>
            <TextField
              // autoFocus
              margin="normal"
              id="address"
              label="Withdrawal Address"
              fullWidth
              className={classes.textfld}
            />
            <TextField
              margin="normal"
              id="quanty"
              label="Withdrawal Quantity"
              type="text"
              className={classes.textfld}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className={classes.button}>
              Withdraw Now
            </Button>
            <Button onClick={handleClose} className={classes.draw}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  )
}
