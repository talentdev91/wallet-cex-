import React, { useState, useEffect } from 'react'
import { useAppSelector } from 'store/hooks'
import { selectSecurityInfo } from 'store/auth/selectors'
import { Link } from 'react-router-dom'

//----------------Material-ui----------------------
import CustomCard from 'components/Dashboard/CustomCard'
import { Grid, Typography } from '@material-ui/core'

//----------------style-----------
import { useStyles } from './Style'

export default function IncreaseYourAccountSecurity() {
  const classes = useStyles()
  const [status, setStatus] = useState(0)
  const [onStatus, setOnStatus] = useState(false)
  // const [verifyStatus, setVerifyStatus] = useState(false)
  // const [setupStatus, setSetupStatus] = useState(false)
  // const [turnonStatus, setTurnonStatus] = useState(true)

  const securityInfo = useAppSelector(selectSecurityInfo)
  let statusCount = 0
  let NULLSTATUSCOUNT = 0

  useEffect(() => {
    if (securityInfo.EmailVerify && securityInfo.PhoneVerify) {
      setOnStatus(true)
      statusCount++
      // if (verifyStatus === true) statusCount++
      // if (setupStatus === true) statusCount++
      // if (turnonStatus === true) statusCount++
    }
    setStatus(statusCount)
  }, [securityInfo])

  return (
    <CustomCard
      title="Increase Your Account Security"
      url="/my/security"
      desc1={
        <div className={classes.cardDescription}>
          <Typography className={status === NULLSTATUSCOUNT ? classes.descriptionRow : classes.setDescriptionRow}>
            {status} &nbsp;
            <span className={classes.descriptionAllRow}>/ 1</span>
          </Typography>
          {/* <div
            className={status >= 1 ? classes.setDescriptionDot : classes.descriptionDot}
            style={{ margin: '8px' }}
          ></div>
          <div className={status >= 2 ? classes.setDescriptionDot : classes.descriptionDot}></div>
          <div className={status >= 3 ? classes.setDescriptionDot : classes.descriptionDot}></div>
          <div className={status >= 4 ? classes.setDescriptionDot : classes.descriptionDot}></div> */}
        </div>
      }
    >
      <div className={classes.card_root}>
        <Grid container className={classes.cardContent1}>
          <Grid item xs={6} sm={6} md={6} className={classes.cardContent11}>
            {onStatus === true ? (
              <>
                <div className={classes.setContentDot}></div>
                <div>
                  <div className={classes.cardContent}>Enable 2FA</div>
                  <Typography className={classes.setContent}>Enabled</Typography>
                </div>
              </>
            ) : (
              <>
                <div className={onStatus === false ? classes.contentDot : classes.setContentDot}></div>
                <div>
                  <div className={classes.cardContent}>Enable 2FA</div>
                  <Link to="/my/security" className={classes.contentLink}>
                    On
                  </Link>
                </div>
              </>
            )}
          </Grid>
          {/* <Grid item xs={6} sm={6} md={6} className={classes.cardContent12}>
            <div className={verifyStatus === false ? classes.contentDot : classes.setContentDot}></div>
            <div>
              <div className={classes.cardContent}>Identity Verification</div>
              <Link to="my/settings/profile" className={classes.contentLink}>
                Verify
              </Link>
            </div>
          </Grid> */}
        </Grid>
        {/* <Grid container className={classes.cardContent2}>
          <Grid item xs={6} sm={6} md={6} className={classes.cardContent21}>
            <div className={setupStatus === false ? classes.contentDot : classes.setContentDot}></div>
            <div>
              <div className={classes.cardContent}>Anti-phishing Code</div>
              <Link to="my/security/anti-phishing-code" className={classes.contentLink}>
                Setup
              </Link>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} className={classes.cardContent22}>
            <div className={turnonStatus === false ? classes.contentDot : classes.setContentDot}></div>
            <div>
              <div className={classes.cardContent}>Turn-on Withdrawal Whitelist</div>
              <Link to="my/security/address-management" className={classes.contentLink}>
                Turn on
              </Link>
            </div>
          </Grid>
        </Grid> */}
      </div>
    </CustomCard>
  )
}
