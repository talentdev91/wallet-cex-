import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from '../Style'

//icon_image
import { guideRoutes } from './routes'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import account from '../../../../assets/image/support/account.png'

function AccountFunction() {
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} className={classes.titleDiv}>
          <Typography className={classes.title}>FAQ</Typography>
          <Typography className={classes.subTitle}>
            <img src={account} alt="alt" className={classes.icon} />
            Account Functions
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.titleDiv}>
          {guideRoutes.map((prop, key) => {
            return (
              <div key={key} className={classes.menuDiv}>
                <Link to={prop.path} target="_blank" className={classes.menuLink}>
                  <FiberManualRecordIcon className={classes.dotIcon} />
                  {prop.name}
                </Link>
              </div>
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default AccountFunction
