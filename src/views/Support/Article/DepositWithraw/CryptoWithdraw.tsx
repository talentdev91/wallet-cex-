import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { useStyles } from '../Style'
import SupportHeader from '../../../../components/SupportHeader'
import img1 from '../../../../assets/image/support/deposit_1.png'
import img2 from '../../../../assets/image/support/crypto_withdraw_2.png'
import Footer from '../../Main/Footer'

//icon_image

function CyptoWithdrawArticle() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SupportHeader />
      <Box className={classes.container}>
        <div className={classes.titleDiv}>
          <Typography className={classes.title}>How to Withdraw Crypto to Dongle</Typography>
          <Typography className={classes.date}>2020-12-07 11:50</Typography>
        </div>
        <div>
          <Typography className={classes.text}>1. Log into your Dongle account and click [Wallet].</Typography>
          <img src={img1} className={classes.image} alt="alt" />
          <Typography className={classes.text}>2. Click Crypto Withdraw.</Typography>
          <img src={img2} className={classes.image} alt="alt" />
          <Typography className={classes.text}>(1). Select coin to withdraw</Typography>
          <Typography className={classes.text}>(2). Withdraw address</Typography>
          <Typography className={classes.text}>(3). Withdraw amount</Typography>
          <Typography className={classes.text}>(4). Transaction history</Typography>
          <Typography className={classes.text}>Select a coin to withdraw and enter the address and amount.</Typography>
          <Typography className={classes.text}>
            3. After confirming the withdraw request, it takes time for the transaction to be confirmed. Please wait
            patiently for the transfer to be processed. The funds will be credited to your Dongle account shortly after.
          </Typography>
          <Typography className={classes.text}>
            4. You can check the status of your widthraw from [Transaction History], as well as more information on your
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

export default CyptoWithdrawArticle
