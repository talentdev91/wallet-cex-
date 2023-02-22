import React from 'react'

import { Dialog, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import ActionButton from './ActionButton'
import AddBankAccountLockedIcon from 'assets/image/AddBankAccountLocked.svg'
import { useStyles } from './Style'

interface AddBankAccountLockedModalProps {
  open: boolean
  onClose: () => void
}

function AddBankAccountLockedModal({ open, onClose }: AddBankAccountLockedModalProps) {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      aria-labelledby="customized-dialog-title"
      maxWidth="md"
      className={classes.EmailAddressVerificationRemoveModalDialog}
    >
      <CloseIcon className={classes.modalCloseIcon} onClick={onClose} />
      <img src={AddBankAccountLockedIcon} style={{ width: '80px', height: '80px', margin: '0 auto' }} alt="add-bank" />
      <Typography className={classes.lockedModaldescription}>
        {
          'Adding Bank Account is currently ONLY necessary for users verified with Australian or Vietnamese Identity. For other users, you might go to Wallet->Fiat and Spot->Withdraw page to do fiat withdrawal.'
        }
      </Typography>
      <ActionButton type="gradient" onClick={onClose} style={{ width: '100%' }}>
        Done
      </ActionButton>
    </Dialog>
  )
}

export default AddBankAccountLockedModal
