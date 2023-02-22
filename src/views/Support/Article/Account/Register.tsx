import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { useStyles } from '../Style'
import SupportHeader from '../../../../components/SupportHeader'
import img1 from '../../../../assets/image/support/create_account_1.png'
import img2 from '../../../../assets/image/support/create_account_2.png'
import img3 from '../../../../assets/image/support/create_account_3.png'
import Footer from '../../Main/Footer'

//icon_image

function Register() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SupportHeader />
      <Box className={classes.container}>
        <div className={classes.titleDiv}>
          <Typography className={classes.title}>How to Register on Dongle by Email</Typography>
          <Typography className={classes.date}>2020-12-06 16:50</Typography>
        </div>
        <div>
          <Typography className={classes.text}>1. Go to dongletrade.com and click [Register].</Typography>
          <img src={img1} className={classes.image} alt="alt" />
          <Typography className={classes.text}>
            2. On the registration page, enter your email address, create a password for your account. Then, read and
            agree to the Terms of Service and click [Create Account].
          </Typography>
          <img src={img2} className={classes.image1} alt="alt" />
          <Typography className={classes.text}>
            Note: Your password must be a combination of numbers and letters. It should contain at least 5 characters,
            one UPPER CASE letter, and one number.
          </Typography>
          <Typography className={classes.text}>
            3. The system will send a verification code to your email. Please enter the verification link within 30
            minutes. If you can’t find the email in your inbox, please check your other mail folders as well, or
            click [Resend Email] to resend.
          </Typography>
          <img src={img3} className={classes.image1} alt="alt" />
          <Typography className={classes.text}>
            4. Congratulations, you have successfully registered on Dongle. Please login on Dongle.
          </Typography>
        </div>
      </Box>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </div>
  )
}

export default Register
