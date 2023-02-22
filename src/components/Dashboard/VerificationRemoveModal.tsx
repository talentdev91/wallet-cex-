import React from 'react'
import { Link } from 'react-router-dom'
// material-ui
import { Dialog, DialogContent, useMediaQuery, Grid, Box, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
// components
import { useStyles } from './Style'
import ActionButton from './ActionButton'
import ChangeModalIcon from 'assets/image/ChangeModalIcon.svg'

// interface
interface EmailAddressVerificationChangeModalProps {
  handleClose: () => void
  state: { open: boolean; type: string }
}

function EmailAddressVerificationChangeModal({ handleClose, state }: EmailAddressVerificationChangeModalProps) {
  const theme = useTheme()
  const classes = useStyles()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={state.open}
      aria-labelledby="customized-dialog-title"
      maxWidth="md"
      fullWidth={true}
      className={classes.EmailAddressVerificationChangeModalDialog}
    >
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <div className={classes.EmailAddressVerificationChangeModalIcon}>
            <img src={ChangeModalIcon} alt="icon-modal" />
          </div>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <div>
            <DialogContent>
              <Box mb="12px">
                <Grid container>
                  <Grid item md={12} xs={12} sm={12}>
                    <div className={classes.EmailAddressVerificationChangeModalDialogContentCard}>
                      <Typography className={classes.EmailAddressVerificationChangeModalDialogContentCardTitle}>
                        Are you sure you want to remove {state.type === 'phone-remove' ? 'phone' : 'email'}{' '}
                        verification?
                      </Typography>
                      <ul>
                        <li className={classes.EmailAddressVerificationChangeModalDialogContentCardContent}>
                          Withdrawals, P2P selling, and payment services will be disabled for 24 hours after you make
                          this change to protect your account.
                        </li>
                        {state.type === 'email-remove' && (
                          <li className={classes.EmailAddressVerificationChangeModalDialogContentCardContent}>
                            You are not allowed to register for a new account with the old email address within 30 days
                            after removing it from this current account.
                          </li>
                        )}
                        <li className={classes.EmailAddressVerificationChangeModalDialogContentCardContent}>
                          You are not allowed to register for a new account with the old email address within 30 days
                          after removing it from this current account
                        </li>
                      </ul>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>
            <Grid container spacing={1}>
              <Grid item md={6} sm={6} xs={6}>
                <ActionButton type="normal" onClick={handleClose} className={classes.stepperBtn}>
                  Cancel
                </ActionButton>
              </Grid>
              <Grid item md={6} sm={6} xs={6}>
                <Link
                  to={state.type === 'email-remove' ? '/my/remove-email-authenticator' : '/my/remove-sms-authenticator'}
                  style={{ textDecoration: 'none' }}
                >
                  <ActionButton type="yellow" onClick={handleClose} className={classes.stepperBtn}>
                    Confirm
                  </ActionButton>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default EmailAddressVerificationChangeModal
