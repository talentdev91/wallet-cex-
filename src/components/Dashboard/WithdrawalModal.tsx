import React, { useState } from 'react'

// material-ui
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  Grid,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'

// components
import ActionButton from './ActionButton'
import SecurityVerificationModal from './SecurityVerificationModal'
import { useStyles } from './Style'

// interface
interface WithdrawalModalProps {
  handleClose: () => void
  open: boolean
}

function WithdrawalModal({ handleClose, open }: WithdrawalModalProps) {
  const theme = useTheme()
  const classes = useStyles()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [securityVerificationModalopen, setSecurityVerificationModalOpen] = useState(false)

  const handleSecurityVerificationModalOpen = () => {
    setSecurityVerificationModalOpen(true)
    handleClose()
  }

  const handleSecurityVerificationModalClose = () => {
    setSecurityVerificationModalOpen(false)
  }

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="customized-dialog-title"
        maxWidth="md"
        fullWidth={true}
        className={classes.WithDrawModalDialog}
      >
        <Grid container>
          <Grid item md={10} sm={10} xs={10}>
            <DialogTitle id="responsive-dialog-title" className={classes.WithDrawModalDialogTitle}>
              {'Enable Whitelist'}
            </DialogTitle>
          </Grid>
          <Grid item md={2} sm={2} xs={2} className={classes.WithDrawModalCloseIcon}>
            <CloseIcon onClick={handleClose} />
          </Grid>
        </Grid>
        <div style={{ padding: '10px' }}>
          <DialogContent>
            <DialogContentText className={classes.WithDrawModalDialogContentText}>
              When this function is turned on, your account will only be able to withdraw to whitelisted withdrawal
              addresses.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Grid container spacing={1}>
              <Grid item md={6} sm={6} xs={6}>
                <ActionButton type="normal" onClick={handleClose} className={classes.stepperBtn}>
                  Cancel
                </ActionButton>
              </Grid>
              <Grid item md={6} sm={6} xs={6}>
                <ActionButton
                  type="yellow"
                  className={classes.stepperBtn}
                  onClick={handleSecurityVerificationModalOpen}
                >
                  Enable
                </ActionButton>
              </Grid>
            </Grid>
          </DialogActions>
        </div>
      </Dialog>
      <SecurityVerificationModal
        handleClose={handleSecurityVerificationModalClose}
        open={securityVerificationModalopen}
      />
    </>
  )
}

export default WithdrawalModal
