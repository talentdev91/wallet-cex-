import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { useStyles } from '../Style'
import SupportHeader from '../../../../components/SupportHeader'
import img1 from '../../../../assets/image/support/deposit_1.png'
import img2 from '../../../../assets/image/support/crypto_deposit_2.png'
import img3 from '../../../../assets/image/support/crypto_deposit_3.png'
import img4 from '../../../../assets/image/support/crypto_deposit_4.png'
import Footer from '../../Main/Footer'

//icon_image

function CyptoDepositArticle() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SupportHeader />
      <Box className={classes.container}>
        <div className={classes.titleDiv}>
          <Typography className={classes.title}>How to Deposit Crypto to Dongle</Typography>
          <Typography className={classes.date}>2020-12-07 11:18</Typography>
        </div>
        <div>
          <Typography className={classes.text}>1. Log into your Dongle account and click [Wallet].</Typography>
          <img src={img1} className={classes.image} alt="alt" />
          <Typography className={classes.text}>2. Click Crypto Deposit.</Typography>
          <img src={img2} className={classes.image} alt="alt" />
          <Typography className={classes.text}>(1). Select coin</Typography>
          <Typography className={classes.text}>(2). Balance of coin</Typography>
          <Typography className={classes.text}>(3). Coin address of your Dongle account</Typography>
          <Typography className={classes.text}>(4). Transaction history</Typography>
          <Typography className={classes.text}>Select a coin to deposit and copy the coin address. </Typography>
          <Typography className={classes.text}>3. Log into your metamask account and click [Send to].</Typography>
          <img src={img3} className={classes.image1} alt="alt" />
          <Typography className={classes.text}>
            Then paste that address into "to address" of metamask and enter the amount of coin. Click [Next].
          </Typography>
          <Typography className={classes.text}>4. Click [Confirm].</Typography>
          <img src={img4} className={classes.image1} alt="alt" />
          <Typography className={classes.text}>
            5. After confirming the deposit request, it takes time for the transaction to be confirmed. Please wait
            patiently for the transfer to be processed. The funds will be credited to your Dongle account shortly after.
          </Typography>
          <Typography className={classes.text}>
            6. You can check the status of your deposit from [Transaction History], as well as more information on your
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

export default CyptoDepositArticle
