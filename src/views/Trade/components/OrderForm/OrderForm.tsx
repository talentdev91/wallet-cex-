/** @format */

import React from 'react'
import { Menu, MenuItem, IconButton, Typography, Snackbar } from '@material-ui/core'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import clsx from 'clsx'

import Limit from './components/LimitTab'
import Market from './components/MarketTab'
import StopLimit from './components/StopLimitTab'
import Oco from './components/OcoTab'
import { useStyles, StyledTooltip } from './Style'
import Response from './MobileOrderTabs'
import PhoneResponse from './MobileOrderForm'

const TabName = {
  LIMIT_TAB: 0,
  MARKET_TAB: 1,
  STOP_LIMIT_TAB: 2,
  OCO_TAB: 3,
}

function OrderForm() {
  const classes = useStyles()
  const ITEM_HEIGHT = 48
  const [anchorEll, setAnchorEll] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEll)

  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEll(event.currentTarget);
  // };

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

  const [tabNum, setTabNum] = React.useState(TabName.LIMIT_TAB)

  const selectTab = (value: any) => {
    setTabNum(value)
    setAnchorEl(null)
    localStorage.setItem('orderFormHeightState', value)
  }

  // const [alertOpen, setAlertOpen] = React.useState(true);

  return (
    <div className={classes.container}>
      <div className={classes.mainSide}>
        <div className={classes.top}>
          <div className={clsx(classes.topSide, classes.spot)}>
            <Typography variant="body2" className={classes.fontColor2}>
              Spot
            </Typography>
          </div>
          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              // onClick={handleClick}
              className={classes.fontColor2}
            >
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
          <div className={classes.bodyTop}>
            <Typography
              onClick={() => selectTab(TabName.LIMIT_TAB)}
              variant="body2"
              className={
                tabNum === TabName.LIMIT_TAB
                  ? clsx(classes.setTextColor, classes.text)
                  : clsx(classes.fontColor1, classes.hover, classes.text)
              }
            >
              Limit
            </Typography>
            <Typography
              // onClick={() => selectTab(TabName.MARKET_TAB)}
              variant="body2"
              className={
                tabNum === TabName.MARKET_TAB
                  ? clsx(classes.setTextColor, classes.text)
                  : clsx(classes.fontColor1, classes.text)
              }
            >
              Market
            </Typography>
            {tabNum === TabName.LIMIT_TAB || tabNum === TabName.MARKET_TAB || tabNum === TabName.STOP_LIMIT_TAB ? (
              <Typography
                // onClick={() => selectTab(TabName.STOP_LIMIT_TAB)}
                variant="body2"
                className={
                  tabNum === TabName.OCO_TAB
                    ? clsx(classes.setTextColor, classes.text1)
                    : clsx(classes.fontColor1, classes.text1)
                }
              >
                Stop-limit
              </Typography>
            ) : (
              <Typography
                // onClick={() => selectTab(TabName.OCO_TAB)}
                variant="body2"
                className={
                  tabNum === TabName.OCO_TAB
                    ? clsx(classes.setTextColor, classes.text1)
                    : clsx(classes.fontColor1, classes.hover, classes.text1)
                }
              >
                OCO
              </Typography>
            )}
            <Typography
              // onClick={handleOCOClick}
              variant="body2"
              className={clsx(classes.fontColor1)}
            >
              <ArrowDropDownIcon className={classes.icon3} />
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
              <MenuItem onClick={() => selectTab(TabName.STOP_LIMIT_TAB)} className={classes.menuItem}>
                Stop-limit
              </MenuItem>
              <MenuItem onClick={() => selectTab(TabName.OCO_TAB)} className={classes.menuItem}>
                OCO
              </MenuItem>
            </Menu>
            <StyledTooltip title="Market order is immediately matched to the best available market price." arrow>
              <ErrorOutlineOutlinedIcon className={classes.tooltipIcon} />
            </StyledTooltip>
          </div>
          <div className={classes.bodyMain}>
            {tabNum === TabName.LIMIT_TAB ? (
              <Limit />
            ) : tabNum === TabName.MARKET_TAB ? (
              <Market />
            ) : tabNum === TabName.STOP_LIMIT_TAB ? (
              <StopLimit />
            ) : (
              <Oco />
            )}
          </div>
        </div>
      </div>
      <div className={classes.subSide}>
        <Response />
      </div>
      <div className={classes.phoneResponse}>
        <PhoneResponse />
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        // open={alertOpen}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Note archived"
      />
    </div>
  )
}

export default OrderForm
