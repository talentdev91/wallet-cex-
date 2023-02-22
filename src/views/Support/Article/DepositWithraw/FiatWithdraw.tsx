import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { useStyles } from '../Style'
import SupportHeader from '../../../../components/SupportHeader'
import img1 from '../../../../assets/image/support/deposit_1.png'
import img2 from '../../../../assets/image/support/fiat_withdraw_2.png'
import Footer from '../../Main/Footer'

//icon_image

function FiatWithdrawArticle() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SupportHeader />
      <Box className={classes.container}>
        <div className={classes.titleDiv}>
          <Typography className={classes.title}>How to Withdraw Fiat to Dongle</Typography>
          <Typography className={classes.date}>2020-12-07 16:09</Typography>
        </div>
        <div>
          <Typography className={classes.text}>1. Log into your Dongle account and click [Wallet].</Typography>
          <img src={img1} className={classes.image} alt="alt" />
          <Typography className={classes.text}>2. Click Fiat Withdraw.</Typography>
          <img src={img2} className={classes.image} alt="alt" />
          <Typography className={classes.text}>(1). Withdraw address</Typography>
          <Typography className={classes.text}>(2). Withdraw amount</Typography>
          <Typography className={classes.text}>(3). Transaction History</Typography>
          <Typography className={classes.text}>
            3. Enter the withdraw address and amount, click [Withdraw Now]
          </Typography>
          <Typography className={classes.text}>
            4. After confirming the withdraw request, it takes time for the transaction to be confirmed. Please wait
            patiently for the transfer to be processed. The funds will be credited to your Dongle account shortly after.
          </Typography>
          <Typography className={classes.text}>
            5. You can check the status of your withdraw from [Transaction History], as well as more information on your
            recent transactions.
          </Typography>
        </div>
      </Box>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </div>
  )
}

export default FiatWithdrawArticle
