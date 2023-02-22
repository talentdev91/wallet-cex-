import React from 'react'

import { Dialog, Typography, Box } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import ActionButton from './ActionButton'
import WarningModal from 'assets/image/WarningModal.svg'
import { useStyles } from './Style'

interface AddPaymentMethodWarningModalProps {
  open: boolean
  onClose: () => void
}

function AddPaymentMethodWarningModal({ open, onClose }: AddPaymentMethodWarningModalProps) {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      aria-labelledby="customized-dialog-title"
      maxWidth="md"
      className={classes.EmailAddressVerificationRemoveModalDialog}
    >
      <CloseIcon className={classes.modalCloseIcon} onClick={onClose} />
      <img src={WarningModal} style={{ width: '96px', height: '96px', margin: '0 auto 16px auto' }} alt="warning" />
      <Typography className={classes.descriptionTitle}>You haven't completed identify verification</Typography>
      <Typography className={classes.lockedModaldescription} style={{ margin: '0px' }}>
        {
          'For the security of your account and that of your counterparty, please complete the verification first (It is recommended to complete your SMS authentication)'
        }
      </Typography>

      <Box display="flex" mt="24px" justifyContent="space-between">
        <ActionButton type="normal" onClick={onClose} style={{ marginRight: '16px', width: '100%' }}>
          Not now
        </ActionButton>
        <ActionButton type="gradient" onClick={onClose} style={{ width: '100%' }}>
          Verify
        </ActionButton>
      </Box>
    </Dialog>
  )
}

export default AddPaymentMethodWarningModal
