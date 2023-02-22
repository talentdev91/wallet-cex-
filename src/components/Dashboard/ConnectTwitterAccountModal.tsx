import React, { useState } from 'react'

import { Dialog, Typography, Box, FormControlLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import CloseIcon from '@material-ui/icons/Close'

import ActionButton from './ActionButton'
import { useStyles } from './Style'

interface ConnectTwitterAccountModalProps {
  open: boolean
  onClose: () => void
}

const StyledCheckbox = withStyles({
  root: {
    color: '#b7bdc6',
    padding: '8px',
    '&:hover': {
      color: '#f0b90b',
    },
    '&$checked': {
      color: '#f0b90b',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />)

function ConnectTwitterAccountModal({ open, onClose }: ConnectTwitterAccountModalProps) {
  const classes = useStyles()

  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <Dialog open={open} aria-labelledby="customized-dialog-title" maxWidth="md" className={classes.connectTwitterModal}>
      <Box className={classes.connectTwitterModalTitleContainer}>
        <Typography className={classes.connectTwitterModalTitle}>Connect to your Twitter account</Typography>
        <CloseIcon onClick={onClose} />
      </Box>

      <Box p={3}>
        <Typography className={classes.connectTwitterModalDesc}>
          Click to link now. You will be redirected to the Twitter homepage to complete authorization for linking the
          account.
        </Typography>

        <FormControlLabel
          className={classes.checkbox}
          control={<StyledCheckbox checked={isChecked} onChange={handleChange} name="checkedG" />}
          label={
            <Typography className={classes.connectTwitterModalDesc}>
              I have read and agree to the "Social Media User Agreement"
            </Typography>
          }
          style={{ marginTop: '30px' }}
        />

        <ActionButton
          type="gradient"
          onClick={onClose}
          style={{ width: '100%', marginTop: '30px' }}
          disabled={!isChecked}
        >
          Connect
        </ActionButton>
      </Box>
    </Dialog>
  )
}

export default ConnectTwitterAccountModal
