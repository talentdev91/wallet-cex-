import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomCard from 'components/Dashboard/CustomCard'
import jwt_decode from 'jwt-decode'

import { Grid, Typography, Tooltip, Box } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Switch from '@material-ui/core/Switch'
// import bottomBackground from '../../../../assets/image/bottomBackground.jpg'
//----------------style-----------
import { useStyles } from './Style'
import { getTradingFee } from 'hooks/dashboard'
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'

interface MyToken {
  userId: string
}
export default function YourTradingFeeLevel() {
  const classes = useStyles()
  let decoded: any = []
  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }
  const dispatch = useAppDispatch()
  const [tradingFee, setTradingFee] = useState(0)
  const [withdrawFee, setWithdrawFee] = useState(0)
  const [withdrawStatus, setWithdrawStatus] = useState(0)

  useEffect(() => {
    const formData = new FormData()
    formData.append('user_id', decoded?.userId)
    getTradingFee(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }
      if (res.data.Success) {
        setTradingFee(res.data.Data.Fee)
        setWithdrawFee(res.data.Data.WithdrawFee)
        setWithdrawStatus(res.data.Data.Withdraw)
        console.log(res.data.Data)
      } else {
        dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
      }
    })
  }, [decoded.userId])

  return (
    <CustomCard
      title="Your Trading Fee Level"
      url="#"
      desc1={
        <Link to="#" className={classes.link1}>
          VIP 0
        </Link>
      }
      desc={
        <Link to="#" className={classes.link2}>
          Trading fees
        </Link>
      }
    >
      <div className={classes.feeRoot}>
        <Grid container className={classes.feeContent}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.contentPart1}>Spot Trading Fee</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.contentPart2}>
              <Typography className={classes.contentPart21}>Maker</Typography>
              <Typography className={classes.contentPart22}>{tradingFee}%</Typography>
              {/* <Typography className={classes.contentPart23}>0.1000%</Typography> */}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography className={classes.contentPart2}>
              <span className={classes.contentPart21}>Taker</span>
              <span className={classes.contentPart22}>{withdrawFee}%</span>
              {/* <span className={classes.contentPart23}>0.1000%</span> */}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} className={classes.part3Root}>
            <Typography className={classes.contentPart3}>Withdraw Status</Typography>
            <Switch checked={withdrawStatus === 0 ? false : true} />
          </Grid>
        </Grid>
        {/* <Grid container className={classes.feeContent}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.contentPart1}>USDⓈ-M Futures Trading</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.contentPart2}>
              <Typography className={classes.contentPart21}>Maker</Typography>
              <Typography className={classes.contentPart22}>0.0200%</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography className={classes.contentPart2}>
              <span className={classes.contentPart21}>Taker</span>
              <span className={classes.contentPart22}>0.0400%</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} className={classes.part3Root}>
            <Typography className={classes.contentPart3}>{`Using ZNX Deduction (10% discount)`}</Typography>
            <div className={classes.part3Chip}>OFF</div>
            <Tooltip
              title={
                <Box display="flex">
                  <Typography>
                    After transferring ZNX to the Futures wallet, you can use ZNX to deduct the Futures trading Fees and
                    enjoy 10% off.
                    <Link to="/" className={classes.transferLink}>
                      Transfer ZNX to Future wallet
                    </Link>
                  </Typography>
                </Box>
              }
              classes={{ tooltip: classes.transferTooltip, arrow: classes.transferTooltipArrow }}
              interactive
            >
              <ErrorOutlineIcon className={classes.part3Icon} />
            </Tooltip>
          </Grid>
        </Grid> */}
        {/* <Grid container className={classes.feeContent}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography className={classes.contentPart1}>COIN-M Futures Trading</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.contentPart2}>
              <Typography className={classes.contentPart21}>Maker</Typography>
              <Typography className={classes.contentPart22}>0.0100%</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography className={classes.contentPart2}>
              <span className={classes.contentPart21}>Taker</span>
              <span className={classes.contentPart22}>0.0500%</span>
            </Typography>
          </Grid>
        </Grid>
        <Link to="#" className={classes.last_root}>
          <div className={classes.contentLast}>
            <div className={classes.lastBackground}></div>
            <div className={classes.lastContent}>
              Trading 50 ZNX or more?
              <span className={classes.contentImportant}>Bespoke services for VIP clients.</span>
            </div>
          </div>
        </Link> */}
      </div>
    </CustomCard>
  )
}
