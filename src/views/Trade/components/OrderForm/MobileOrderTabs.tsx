/** @format */

import React from 'react'
import { Tooltip, Menu, MenuItem, IconButton } from '@material-ui/core'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined'
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreVertIcon from '@material-ui/icons/MoreVert'
import buyIcon from '../../../../../src/assets/image/buyIcon.svg'
import sellIcon from '../../../../../src/assets/image/sellIcon.svg'
import clsx from 'clsx'

import LimitRes from './components/MobileComponent/MobileLimitTab'
import MarketRes from './components/MobileComponent/MobileMarketTab'
import StopLimitRes from './components/MobileComponent/MobileStopLimitTab'
import OcoRes from './components/MobileComponent/MobileOcoTab'
import { useStyles } from './Style'
import { Typography } from '@material-ui/core'

const TabName = {
  LIMIT_tab: 0,
  MARKET_tab: 1,
  STOP_LIMIT_tab: 2,
  OCO_tab: 3,
}

const OrderTypeNum = {
  BUY: 0,
  SELL: 1,
}

function Response(openState: any) {
  const classes = useStyles()

  const [orderType, setOrderType] = React.useState(OrderTypeNum.BUY)

  const handleOrderType = (value: any) => {
    setOrderType(value)
  }

  const ITEM_HEIGHT = 48
  const [anchorEll, setAnchorEll] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEll)

  const handleEClose = () => {
    setAnchorEll(null)
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  // const handleOCOClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [tabNum, settabNum] = React.useState(0)

  const handletabChange = (value: any) => {
    settabNum(value)
    setAnchorEl(null)
  }

  return (
    <div className={classes.subContainer}>
      <div className={classes.top}>
        <div className={clsx(classes.topSide, classes.spot)}>
          <Typography variant="body2" className={classes.fontColor2}>
            Spot
          </Typography>
        </div>
        <div>
          <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" className={classes.fontColor2}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEll}
            keepMounted
            open={open}
            onClose={handleEClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
            MenuListProps={{ disablePadding: true }}
          >
            <MenuItem onClick={handleEClose} className={classes.menuItem}>
              Marketing Rules
            </MenuItem>
            <MenuItem onClick={handleEClose} className={classes.menuItem}>
              FAQ
            </MenuItem>
            <MenuItem onClick={handleEClose} className={classes.menuItem}>
              Spot Tutorial
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div className={classes.bodySide}>
        {orderType === OrderTypeNum.BUY || openState === OrderTypeNum.BUY ? (
          <div className={classes.bodyTop}>
            <div className={classes.inputSide2}>
              <div className={classes.buytopBtn}>
                <Typography variant="body2" className={classes.buybtnText}>
                  Buy
                </Typography>
              </div>
              <img src={buyIcon} alt="icon" height="36px" className={classes.img3} />
              <div className={classes.selltopBtn2}>
                <Typography
                  variant="body2"
                  onClick={() => handleOrderType(OrderTypeNum.SELL)}
                  className={classes.sellbtnText1}
                >
                  Sell
                </Typography>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.bodyTop}>
            <div className={classes.inputSide2}>
              <div className={classes.buytopBtn2}>
                <Typography
                  variant="body2"
                  onClick={() => handleOrderType(OrderTypeNum.BUY)}
                  className={classes.buybtnText1}
                >
                  Buy
                </Typography>
              </div>
              <img src={sellIcon} alt="icon" height="36px" className={classes.img3} />
              <div className={classes.selltopBtn}>
                <Typography
                  variant="body2"
                  onClick={() => handleOrderType(OrderTypeNum.SELL)}
                  className={clsx(classes.fontColor2, classes.sellbtnText)}
                >
                  Sell
                </Typography>
              </div>
            </div>
          </div>
        )}

        <div className={classes.bodyTop}>
          <Typography
            onClick={() => handletabChange(TabName.LIMIT_tab)}
            variant="body2"
            className={
              tabNum === TabName.LIMIT_tab
                ? clsx(classes.setTextColor, classes.text)
                : clsx(classes.fontColor1, classes.hover, classes.text)
            }
          >
            Limit
          </Typography>
          <Typography
            // onClick={() => handletabChange(TabName.MARKET_tab)}
            variant="body2"
            className={
              tabNum === TabName.MARKET_tab
                ? clsx(classes.setTextColor, classes.text)
                : clsx(classes.fontColor1, classes.text)
            }
          >
            Market
          </Typography>
          {tabNum === TabName.LIMIT_tab || tabNum === TabName.MARKET_tab || tabNum === TabName.STOP_LIMIT_tab ? (
            <Typography
              // onClick={() => handletabChange(TabName.STOP_LIMIT_tab)}
              variant="body2"
              className={
                tabNum === TabName.STOP_LIMIT_tab
                  ? clsx(classes.setTextColor, classes.text1)
                  : clsx(classes.fontColor1, classes.text1)
              }
            >
              Stop-limit
            </Typography>
          ) : (
            <Typography
              // onClick={() => handletabChange(TabName.OCO_tab)}
              variant="body2"
              className={
                tabNum === TabName.OCO_tab
                  ? clsx(classes.setTextColor, classes.text1)
                  : clsx(classes.fontColor1, classes.text1)
              }
            >
              OCO
            </Typography>
          )}
          <Typography
            // onClick={handleOCOClick}
            variant="body2"
            className={clsx(classes.fontColor1, classes.hover)}
          >
            {/* <ArrowDropDownIcon className={classes.icon3} /> */}
          </Typography>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.menu}
            MenuListProps={{ disablePadding: true }}
          >
            <MenuItem onClick={() => handletabChange(TabName.STOP_LIMIT_tab)} className={classes.menuItem}>
              Stop-limit
            </MenuItem>
            <MenuItem onClick={() => handletabChange(TabName.OCO_tab)} className={classes.menuItem}>
              OCO
            </MenuItem>
          </Menu>

          <Tooltip title="Market order is immediately matched to the best available market price." arrow>
            <ErrorOutlineOutlinedIcon className={classes.tooltipIcon} />
          </Tooltip>
        </div>

        <div className={classes.bodyMain}>
          {tabNum === TabName.LIMIT_tab ? (
            <LimitRes select={orderType} />
          ) : tabNum === TabName.MARKET_tab ? (
            <MarketRes select={orderType} />
          ) : tabNum === TabName.STOP_LIMIT_tab ? (
            <StopLimitRes select={orderType} />
          ) : (
            <OcoRes select={orderType} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Response
