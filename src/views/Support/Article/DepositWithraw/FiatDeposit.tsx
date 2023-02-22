import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { useStyles } from '../Style'
import SupportHeader from '../../../../components/SupportHeader'
import img1 from '../../../../assets/image/support/deposit_1.png'
import img2 from '../../../../assets/image/support/deposit_2.png'
import img3 from '../../../../assets/image/support/deposit_3.png'
import Footer from '../../Main/Footer'

//icon_image

function FiatDepositArticle() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SupportHeader />
      <Box className={classes.container}>
        <div className={classes.titleDiv}>
          <Typography className={classes.title}>How to Deposit Fiat to Dongle</Typography>
          <Typography className={classes.date}>2020-12-07 10:05</Typography>
        </div>
        <div>
          <Typography className={classes.text}>1. Log into your Dongle account and click [Wallet].</Typography>
          <img src={img1} className={classes.image} alt="alt" />
          <Typography className={classes.text}>2. Click Fiat Deposit.</Typography>
          <img src={img2} className={classes.image} alt="alt" />
          <Typography className={classes.text}>
            In Recharge amount(USD), enter the amount of USD to deposit. And then, click PayPal button.
          </Typography>
          <Typography className={classes.text}>3. Login into your PayPal account and pay.</Typography>
          <img src={img3} className={classes.image} alt="alt" />
          <Typography className={classes.text}>
            4. After confirming the deposit request, it takes time for the transaction to be confirmed. Please wait
            patiently for the transfer to be processed. The funds will be credited to your Dongle account shortly after.
          </Typography>
          <Typography className={classes.text}>
            5. You can check the status of your deposit from [Transaction History], as well as more information on your
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

export default FiatDepositArticle
