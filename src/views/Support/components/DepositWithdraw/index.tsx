import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Grid } from '@material-ui/core'
import { useStyles } from '../Style'

//icon_image
import { tutorialRoutes } from './routes'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import tutorial from '../../../../assets/image/support/tutorial.png'

function DepositWithdraw() {
  const classes = useStyles()

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} className={classes.titleDiv}>
          <Typography className={classes.title}>FAQ</Typography>
          <Typography className={classes.subTitle}>
            <img src={tutorial} alt="alt" className={classes.icon} />
            Deposit/Withdraw
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.titleDiv}>
          {tutorialRoutes.map((prop, key) => {
            return (
              <div key={key} className={classes.menuDiv}>
                <Link target="_blank" to={prop.path} className={classes.menuLink}>
                  <FiberManualRecordIcon className={classes.dotIcon} />
                  {prop.name}
                </Link>
              </div>
            )
          })}
        </Grid>
      </Grid>
    </div>
  )
}

export default DepositWithdraw
