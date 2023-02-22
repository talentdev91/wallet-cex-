/** @format */

import React from 'react'
import jwt_decode from 'jwt-decode'
import clsx from 'clsx'
import { Grid, Checkbox, Typography } from '@material-ui/core'
import { useStyles, StyledCheckBox } from './Style'
import { Link } from 'react-router-dom'
import useFormData from 'hooks/useFormData'
// Child_Tabs
import OrderHistory from './OrderInfo/OrderHistory/index'
import TradeHistory from './OrderInfo/TradeHistory/index'
import OpenOrderTable from './OrderInfo/OpenOrder'
import FundsTable from './OrderInfo/Funds/index'
// redux
import { useAppDispatch } from 'store/hooks'
import { getOrderOpens, getOrderHistory, getTradeHistory, hideOtherPair } from 'store/orderinfo'
import { orderopens } from 'store/orderinfo/selectors'
import { useAppSelector } from 'store/hooks'

interface MyToken {
  userId: string
}

const TabName = {
  OPEN_ORDER_TAP: 0,
  ORDER_HISTORY_TAP: 1,
  TRADE_HISTORY_TAP: 2,
  FUND_TAP: 3,
}

function UserInfo() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const { openOrderFormData, orderHistoryFormData, userTradeHistoryFormData } = useFormData()

  const [tabNumber, setTabNumber] = React.useState(0)
  const [hidePairChecked, setHidePairChecked] = React.useState<boolean>(false)
  const coinPair = localStorage.getItem('activePair') || 'ZNX/USDT'
  const [loginState, setLoginState] = React.useState(false)

  let decoded: any = []
  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  const handleHidenOtherCoin = () => {
    setHidePairChecked(!hidePairChecked)
  }

  const handleTapOption = (value: any) => {
    setTabNumber(value)
  }

  React.useEffect(() => {
    dispatch(hideOtherPair(hidePairChecked))
  }, [dispatch, hidePairChecked])

  React.useEffect(() => {
    const getOrderOpenData = () => {
      dispatch(getOrderOpens(openOrderFormData))
    }

    const getOrderHistoryData = () => {
      dispatch(getOrderHistory(orderHistoryFormData))
    }

    const getTradeHistoryDate = () => {
      dispatch(getTradeHistory(userTradeHistoryFormData))
    }

    if (tabNumber === TabName.OPEN_ORDER_TAP) {
      getOrderOpenData()
    } else if (tabNumber === TabName.ORDER_HISTORY_TAP) {
      getOrderHistoryData()
    } else {
      getTradeHistoryDate()
    }

    if (localStorage.jwtToken) {
      setLoginState(true)
    }
  }, [tabNumber, dispatch, coinPair, decoded?.userId])

  const orderOpensDatas = useAppSelector(orderopens)

  return (
    <div>
      <div>
        <Grid container>
          <Grid item sm={9} className={classes.root1}>
            <div className={classes.flexPosition}>
              <Typography
                onClick={() => handleTapOption(TabName.OPEN_ORDER_TAP)}
                variant="body2"
                className={
                  tabNumber === TabName.OPEN_ORDER_TAP
                    ? clsx(classes.setTextColor, classes.text)
                    : clsx(classes.fontColor1, classes.hover, classes.text)
                }
              >
                Open Orders({orderOpensDatas?.list?.Data?.length || 0})
              </Typography>
              <Typography
                onClick={() => handleTapOption(TabName.ORDER_HISTORY_TAP)}
                variant="body2"
                className={
                  tabNumber === TabName.ORDER_HISTORY_TAP
                    ? clsx(classes.setTextColor, classes.text)
                    : clsx(classes.fontColor1, classes.hover, classes.text)
                }
              >
                Order History
              </Typography>
              <Typography
                onClick={() => handleTapOption(TabName.TRADE_HISTORY_TAP)}
                variant="body2"
                className={
                  tabNumber === TabName.TRADE_HISTORY_TAP
                    ? clsx(classes.setTextColor, classes.text)
                    : clsx(classes.fontColor1, classes.hover, classes.text)
                }
              >
                Trade History
              </Typography>
              <Typography
                // onClick={() => handleTapOption(TabName.FUND_TAP)}
                variant="body2"
                className={
                  tabNumber === TabName.FUND_TAP
                    ? clsx(classes.setTextColor, classes.text)
                    : clsx(classes.fontColor1, classes.text)
                }
              >
                Funds
              </Typography>
            </div>
            <Typography variant="body2" className={clsx(classes.fontColor1, classes.text, classes.rightPosition)}>
              <StyledCheckBox
                size="small"
                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                checked={hidePairChecked}
                onChange={handleHidenOtherCoin}
              />
              &nbsp;
              <span className={classes.dayFont}>
                {tabNumber === TabName.OPEN_ORDER_TAP ||
                tabNumber === TabName.ORDER_HISTORY_TAP ||
                tabNumber === TabName.TRADE_HISTORY_TAP
                  ? 'Hide Other Pairs'
                  : 'Hide low balance assets'}
              </span>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div>
        {loginState === false ? (
          <div className={classes.loginDiv}>
            <Link to="/login" className={classes.signText}>
              Login
            </Link>
            <Typography variant="body2" className={classes.signText2}>
              or
            </Typography>
            <Link to="register" className={classes.signText}>
              Register Now
            </Link>
            <Typography variant="body2" className={classes.signText2}>
              to trade
            </Typography>
          </div>
        ) : tabNumber === TabName.OPEN_ORDER_TAP ? (
          <div className={classes.root}>
            <OpenOrderTable status={hidePairChecked} userId={decoded?.userId} />
          </div>
        ) : tabNumber === TabName.ORDER_HISTORY_TAP ? (
          <div>
            <OrderHistory status={hidePairChecked} />
          </div>
        ) : tabNumber === TabName.TRADE_HISTORY_TAP ? (
          <TradeHistory status={hidePairChecked} />
        ) : (
          <div>
            <FundsTable status={hidePairChecked} />
          </div>
        )}
      </div>
    </div>
  )
}

export default UserInfo
