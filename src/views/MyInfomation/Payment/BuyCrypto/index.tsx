import React from 'react'
import { Box, Typography } from '@material-ui/core'
import NotAddPaymentIcon from 'assets/image/NotAddPayment.svg'
import { useStyles } from './style'

function BuyCrypto() {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.description}>
        Manage the payment method of your credit and debit card on the buy crypto page
      </Typography>
      <Box pt="112px" pb="24px" textAlign="center">
        <img src={NotAddPaymentIcon} alt="icon" />
        <Typography className={classes.notAddPayment}>You have not added any payment methods</Typography>
      </Box>
    </>
  )
}

export default BuyCrypto
