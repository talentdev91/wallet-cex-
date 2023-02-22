import React, { useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { useStyles } from './style'
import ActionButton from 'components/Dashboard/ActionButton'
import AddPaymentMethodWarningModal from 'components/Dashboard/AddPaymentMethodWarningModal'
import NotAddPaymentIcon from 'assets/image/NotAddPayment.svg'

function P2P() {
  const classes = useStyles()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Box className={classes.P2PDescriptionContainer}>
        <Typography className={classes.P2PDescription}>
          P2P payment methods: When you sell cryptocurrencies, the payment method added will be displayed to buyer as
          options to accept payment, please ensure that the account owner’s name is consistent with your verified name
          on Binance. You can add up to 20 payment methods.
        </Typography>
        <Box px="8px">
          <ActionButton type="normal" onClick={() => setIsModalOpen(true)}>
            <AddIcon style={{ fontSize: '20px', marginRight: '8px' }} />
            Add a payment method
          </ActionButton>
        </Box>
      </Box>
      <Box pt="96px" pb="24px" textAlign="center">
        <img src={NotAddPaymentIcon} alt="icon" />
        <Typography className={classes.notAddPayment}>You have not added any payment methods</Typography>
      </Box>

      <AddPaymentMethodWarningModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default P2P
