import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { useStyles } from '../Style'
import SupportHeader from '../../../../components/SupportHeader'
import img1 from '../../../../assets/image/support/login_1.png'
import img2 from '../../../../assets/image/support/login_2.png'
import img3 from '../../../../assets/image/support/login_3.png'
import Footer from '../../Main/Footer'

//icon_image

function Register() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SupportHeader />
      <Box className={classes.container}>
        <div className={classes.titleDiv}>
          <Typography className={classes.title}>How to Login Dongle account</Typography>
          <Typography className={classes.date}>2020-12-07 09:10</Typography>
        </div>
        <div>
          <Typography className={classes.text}>
            To login to Dongle you need go to trading platform application or website. To enter your personal account
            (log in), you must click on the «log in». On the main page of the site and enter the login (e-mail) and
            password that you specified during registration.
          </Typography>
          <img src={img1} className={classes.image} alt="alt" />
          <img src={img2} className={classes.image1} alt="alt" />
          <Typography className={classes.text}>
            After entering correct email and password, you can successfully use your Dongle account to trade.
          </Typography>
          <img src={img3} className={classes.image} alt="alt" />
        </div>
      </Box>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </div>
  )
}

export default Register
