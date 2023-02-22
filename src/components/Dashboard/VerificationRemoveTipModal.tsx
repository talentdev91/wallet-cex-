import React from 'react'
// material-ui
import { Dialog, DialogContent, Box, useMediaQuery, Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
// components
import { useStyles } from './Style'
import ActionButton from './ActionButton'
import ChangeModalIcon from 'assets/image/ChangeModalIcon.svg'

// interface
interface VerificationRemoveTipModalProps {
  handleClose: () => void
  state: {
    open: boolean
    type: string
  }
}

function VerificationRemoveTipModal({ handleClose, state }: VerificationRemoveTipModalProps) {
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
      className={classes.EmailAddressVerificationRemoveModalDialog}
    >
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <div className={classes.EmailAddressVerificationRemoveModalIcon}>
            <img src={ChangeModalIcon} alt="icon-modal" />
          </div>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <div>
            <DialogContent>
              <Box mb="12px">
                <Grid container>
                  <Grid item md={12} xs={12} sm={12}>
                    <div className={classes.EmailAddressVerificationRemoveModalDialogContentCard}>
                      <Typography className={classes.EmailAddressVerificationRemoveModalDialogContentCardTitle}>
                        Safety Tip
                      </Typography>
                      <Typography className={classes.EmailAddressVerificationRemoveModalDialogContentCardContent}>
                        {state.type === 'phone-remove'
                          ? 'Please enable your email verification before you would like to remove phone verification.'
                          : 'Please enable your phone verification before you would like to remove email verification.'}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>
            <Grid container style={{ justifyContent: 'center' }}>
              <Grid item md={6} sm={6} xs={6}>
                <ActionButton type="yellow" onClick={handleClose} className={classes.stepperBtn}>
                  Close
                </ActionButton>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default VerificationRemoveTipModal
