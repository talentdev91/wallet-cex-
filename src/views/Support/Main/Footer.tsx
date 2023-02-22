/** @format */

import React from 'react'
// import { Link } from 'react-router-dom'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from './Style'

//Components
// import TelegramIcon from '@material-ui/icons/Telegram'
// import FacebookIcon from '@material-ui/icons/Facebook'
// import TwitterIcon from '@material-ui/icons/Twitter'
// import RedditIcon from '@material-ui/icons/Reddit'
// import InstagramIcon from '@material-ui/icons/Instagram'
// import YouTubeIcon from '@material-ui/icons/YouTube'

function Footer() {
  const classes = useStyles()

  return (
    <Grid container spacing={2} className={classes.footer}>
      {/* <Grid item xs={2} style={{ textAlign: 'left' }}>
        <Typography className={classes.footerTitle}>About Us</Typography>
        <Link to="/faq" className={classes.footerLink}>
          About
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Careers
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Business Contacts
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Community
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Privacy
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.footerTitle}>Products</Typography>
        <Link to="/faq" className={classes.footerLink}>
          Exchange
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Academy
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Card
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Launchpad
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Research
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.footerTitle}>Service</Typography>
        <Link to="/faq" className={classes.footerLink}>
          Downloads
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Desktop Application
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Buy Crypto
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          OTC Trading
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Listing Application
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.footerTitle}>Support</Typography>
        <Link to="/faq" className={classes.footerLink}>
          Give Us Feedbacks
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Support Center
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Submit a request
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          API Documentation
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Trading Rules
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.footerTitle}>Learn</Typography>
        <Link to="/faq" className={classes.footerLink}>
          Buy ZNX
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Buy BUSD
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Buy Ethereum
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Buy Ripple
        </Link>
        <Link to="/faq" className={classes.footerLink}>
          Buy DeFi
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.footerTitle}>Learn</Typography>
        <IconButton aria-label="add an alarm">
          <TelegramIcon className={classes.footerIcon} />
        </IconButton>
        <IconButton aria-label="add an alarm">
          <FacebookIcon className={classes.footerIcon} />
        </IconButton>
        <IconButton aria-label="add an alarm">
          <TwitterIcon className={classes.footerIcon} />
        </IconButton>
        <IconButton aria-label="add an alarm">
          <RedditIcon className={classes.footerIcon} />
        </IconButton>
        <IconButton aria-label="add an alarm">
          <InstagramIcon className={classes.footerIcon} />
        </IconButton>
        <IconButton aria-label="add an alarm">
          <YouTubeIcon className={classes.footerIcon} />
        </IconButton>
      </Grid> */}
      <Grid xs={12} className={classes.divide}>
        <Typography className={classes.footerLink}>WinWin @ 2021</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
