import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import { Box, Typography, Card } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ShowIcon from '@material-ui/icons/Visibility'
import HideIcon from '@material-ui/icons/VisibilityOff'

import ActionButton from 'components/Dashboard/ActionButton'
import InsideCircle from 'assets/image/InsideCircle.svg'
import OutsideCircle from 'assets/image/OutsideCircle.svg'
import { useStyles } from './Style'
import { CoinBalance } from 'hooks/orderFormAxios'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getHeaderPrices } from 'store/headerinfo'
import { headerPrices } from 'store/headerinfo/selectors'

interface MyToken {
  userId: string
}

export default function BalanceDetail() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const tabs = ['Spot', 'P2P', 'Margin', 'Futures', 'Earn', 'WazirX', 'Pool']
  const headerInfos = useAppSelector(headerPrices)

  const [activeItem, setActiveItem] = useState(tabs[0])
  const [isHide, setIsHide] = useState(false)
  const [coin1Balance, setCoin1Balance] = useState(0)
  // const [coin2Balance, setCoin2Balance] = useState(0)

  let decoded: any = []
  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  const handleVisibleBalance = () => {
    setIsHide(!isHide)
  }

  const getCoin1Balance = async () => {
    const formData = new FormData()
    formData.append('user_id', decoded?.userId)
    formData.append('symbol', 'ZNX')

    CoinBalance(formData).then((res: any) => {
      setCoin1Balance(res?.data?.Balance)
    })
  }

  // const getCoin2Balance = async () => {
  //   const formData = new FormData()
  //   formData.append('user_id', decoded?.userId)
  //   formData.append('symbol', 'USDT')

  //   CoinBalance(formData).then((res: any) => {
  //     setCoin2Balance(res?.data?.Balance)
  //   })
  // }

  useEffect(() => {
    getCoin1Balance()
    const formData = new FormData()
    formData.append('pair', 'ZNX/USDT')
    dispatch(getHeaderPrices(formData))
  }, [decoded.userId])

  const tabMenu = tabs.map((tab) => (
    <Box className={classes.tabItemContainer} key={tab}>
      <Typography
        className={clsx(classes.tab, { [classes.activeItem]: tab === activeItem })}
        onClick={() => setActiveItem('Spot')}
      >
        {tab}
      </Typography>
    </Box>
  ))

  const buttonGroup = activeItem === tabs[0] && (
    <div className={classes.CustomCardHeaderDescriptionTypography}>
      <Link to="/wallet" className={classes.buttonLink}>
        <ActionButton type="yellow" className={classes.descButton}>
          Deposit
        </ActionButton>
      </Link>
      <Link to="/wallet" className={classes.buttonLink}>
        <ActionButton type="normal" className={classes.descButton}>
          Withdraw
        </ActionButton>
      </Link>
      <Link to="/my/dashboard" className={classes.buttonLink}>
        <ActionButton type="normal" className={classes.descButton}>
          Gift Card
        </ActionButton>
      </Link>
    </div>
  )

  return (
    <Card className={classes.CustomCard}>
      <div className={classes.CustomCardHeader}>
        <Box display="flex" justifyContent="space-between">
          <div className={classes.CustomCardHeaderTitle}>
            <Link to="/" className={classes.CustomCardHeaderTitleA}>
              Balance Details
            </Link>
          </div>
          <div className={classes.CustomCardHeaderDescription}>
            <div className={classes.buttonGroup}>{buttonGroup}</div>
            <Link to="/wallet">
              <ArrowForwardIosIcon className={classes.CustomCardHeaderTitleIcon} />
            </Link>
          </div>
        </Box>
        <Box className={classes.buttonGroup1}>{buttonGroup}</Box>
      </div>
      <Box className={classes.tabContainer}>{tabMenu}</Box>

      <Box className={classes.cardBody}>
        <Box className={classes.balanceInfoContainer}>
          <Box mb="8px">
            <Box display="flex" mb="4px">
              <Typography style={{ fontSize: '14px', fontWeight: 400 }}>Account balance</Typography>

              <button className={classes.visibleBalance} onClick={handleVisibleBalance}>
                {isHide ? (
                  <ShowIcon className={classes.visibleBalanceIcon} />
                ) : (
                  <HideIcon className={classes.visibleBalanceIcon} />
                )}
                {isHide ? 'Show Balance' : 'Hide Balance'}
              </button>
            </Box>

            <Typography className={classes.balanceAmount}>
              {isHide ? '********' : coin1Balance?.toFixed(2)}
              <span className={classes.balanceType}>ZNX</span>
            </Typography>

            <Box mt="16px">
              <Typography className={classes.estimatedValueLabel}>Estimated Value:</Typography>
              <Typography className={classes.estimatedValue}>
                {isHide ? '********' : '$' + (coin1Balance * headerInfos.Price).toFixed(2)}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={classes.circleContainer}>
          <img src={OutsideCircle} className={classes.outsideCircle} alt="icon" />
          <img src={InsideCircle} className={classes.insideCircle} alt="icon" />
        </Box>
      </Box>
    </Card>
  )
}
