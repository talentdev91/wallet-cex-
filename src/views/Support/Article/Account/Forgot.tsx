import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { useStyles } from '../Style'
import SupportHeader from '../../../../components/SupportHeader'
import img1 from '../../../../assets/image/support/forgot_1.png'
import img2 from '../../../../assets/image/support/forgot_2.png'
import img3 from '../../../../assets/image/support/forgot_3.png'
import img4 from '../../../../assets/image/support/forgot_4.png'
import img5 from '../../../../assets/image/support/login_1.png'

import Footer from '../../Main/Footer'

//icon_image

function Forgot() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SupportHeader />
      <Box className={classes.container}>
        <div className={classes.titleDiv}>
          <Typography className={classes.title}>I forgot my password from Dongle account</Typography>
          <Typography className={classes.date}>2020-12-07 10:09</Typography>
        </div>
        <div>
          <Typography className={classes.text}>You can reset your account password from the Dongle website.</Typography>
          <Typography className={classes.text}>1. Go to dongletrade.com and click [Login].</Typography>
          <img src={img5} className={classes.image} alt="alt" />
          <Typography className={classes.text}>2. On the login page, click [Forgot Password?].</Typography>
          <img src={img1} className={classes.image1} alt="alt" />
          <Typography className={classes.text}>
            3. Enter your account email or mobile number and click [Next].
          </Typography>
          <img src={img2} className={classes.image1} alt="alt" />
          <Typography className={classes.text}>
            3. Enter your new password and click [Next]. And then you check your email inbox.
          </Typography>
          <img src={img3} className={classes.image1} alt="alt" />
          <Typography className={classes.text}>
            4. If you don't receive verify email, click resend. Your password has been reset successfully. Please use
            the new password to log in to your account.
          </Typography>
          <img src={img4} className={classes.image1} alt="alt" />
        </div>
      </Box>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </div>
  )
}

export default Forgot
