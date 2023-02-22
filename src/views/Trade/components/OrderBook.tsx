/** @format */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
// import { useTranslation } from "react-i18next";
// material-ui
import { Box, Typography, MenuItem, Menu } from '@material-ui/core'
// external
import { useStyles, StyledTooltip } from './Style'
import ProgressBar from './ProgressBar'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { selectSellOrderLists, selectBuyOrderLists, isLoading } from 'store/orderbook/selectors'
import { headerPrices } from 'store/headerinfo/selectors'
import useGetCoinPair from 'hooks/useGetCoinPair'
import { numberWithCommas } from 'common/utils'
import useFormData from 'hooks/useFormData'
import { getOrderLists } from 'store/orderbook'
import { OrderStandardTotalValue } from 'config/constants'
import Spinner from 'components/Spinner'
// import { selectCoinPair } from "store/header";
// image
import BuyModeButtonIcon from 'assets/image/BuyModeButtonIcon.svg'
import DefaultModeButtonIcon from 'assets/image/DefaultModeButtonIcon.svg'
import SellModeButtonIcon from 'assets/image/SellModeButtonIcon.svg'
import OrderBookSelectDownIcon from 'assets/image/OrderBookSelectDownIcon.svg'
import GreenArrowUpIcon from 'assets/image/GreenArrowUpIcon.svg'
import RedArrowDownIcon from 'assets/image/RedArrowDownIcon.svg'
import { selectCoinPair } from 'store/header'

/* <p>{t("This is an translation example")}</p> */

interface OrderBookProps {
  height: any
}

function OrderBook({ height }: OrderBookProps) {
  const classes = useStyles()
  const headerInfos = useAppSelector(headerPrices)
  const currentPair = useAppSelector(selectCoinPair)
  const { coin1, coin2 } = useGetCoinPair()

  const entireHeight = Math.floor((height - 95) / 20) * 20
  const halfHeight = Math.floor((height - 95) / 2 / 20) * 20

  const standardValue = OrderStandardTotalValue.find((pairInfo) => pairInfo.pair === currentPair)?.standard || 2000

  const lastPrice = 234.12312

  const [selectOptions, setSelectOptions] = useState<any>([])

  useEffect(() => {
    const fixedDecimalsArray = [1, 10, 50, 100]
    const tempDecimal = lastPrice.toString().split('.')[1]?.length | 0
    const tempNumberDigits = lastPrice.toString().split('.')[0].length
    let tempSelectOptions = []

    if (tempDecimal !== 0) {
      for (let i = tempDecimal; i > 0; i--) tempSelectOptions.push(parseFloat(Math.pow(0.1, i).toFixed(i)))
    }
    if (tempNumberDigits > 1 && tempNumberDigits < 4) {
      for (let i = 0; i < tempNumberDigits; i++) tempSelectOptions.push(fixedDecimalsArray[i])
    } else if (tempNumberDigits >= 4) {
      for (let i = 0; i < 4; i++) tempSelectOptions.push(fixedDecimalsArray[i])
    }

    setSelectOptions(tempSelectOptions)
  }, [lastPrice])

  const [viewMethod, setViewMethod] = useState('order')

  const sellOrderLists = useAppSelector(selectSellOrderLists)
  const buyOrderLists = useAppSelector(selectBuyOrderLists)
  const loading = useAppSelector(isLoading)
  const [displayedSellOrderLists, setDisplayedSellOrderLists] = useState(sellOrderLists)
  const [displayedBuyOrderLists, setDisplayedBuyOrderLists] = useState(buyOrderLists)

  const setList = (height: number, orderList: OrderListsState[]) => {
    let list: any = []
    if (height / 20 > orderList.length) {
      list = orderList
    } else {
      list = orderList.slice(0, height / 20)
    }

    return list
  }

  useEffect(() => {
    if (viewMethod === 'order') {
      setDisplayedSellOrderLists(setList(halfHeight, sellOrderLists))
      setDisplayedBuyOrderLists(setList(halfHeight, buyOrderLists))
    } else if (viewMethod === 'sell') {
      setDisplayedSellOrderLists(setList(entireHeight, sellOrderLists))
    } else if (viewMethod === 'buy') {
      setDisplayedBuyOrderLists(setList(entireHeight, buyOrderLists))
    }
  }, [sellOrderLists, buyOrderLists, viewMethod, halfHeight, entireHeight])

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const [selectedOption, setSelectedOption] = useState(0.01)
  // const [intNum, setintNum] = useState(0.01);
  // const [floatNum, setFloatNum] = useState(0.01);

  const handleSelect = (option: any) => {
    setSelectedOption(option)
    setAnchorEl(null)

    // if (option % 1 === 0) {
    //   setintNum(option);
    //   setFloatNum(0);
    // } else {
    //   const a = option.toString().split(".")[1];
    //   if (a !== undefined) {
    //     setFloatNum(a.length);
    //     setintNum(1);
    //   }
    // }
  }

  // const handleDigitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null)
  }

  const dispatch = useAppDispatch()
  // const pair = useAppSelector(selectCoinPair);

  const { buyFormData, sellFormData } = useFormData()

  React.useEffect(() => {
    dispatch(getOrderLists(buyFormData))
    dispatch(getOrderLists(sellFormData))
    // eslint-disable-next-line
  }, [coin1, coin2])

  return (
    <Box className={classes.spotOrderBook}>
      <Box className={classes.orderBookHeader}>
        <Box>
          <StyledTooltip title="Order Book" arrow>
            <img
              src={DefaultModeButtonIcon}
              alt="icon"
              className={clsx(classes.orderImage, {
                [classes.methodOpacaty]: viewMethod !== 'order',
              })}
              onClick={() => setViewMethod('order')}
            />
          </StyledTooltip>
          <StyledTooltip title="Buy Order" arrow>
            <img
              src={BuyModeButtonIcon}
              alt="icon"
              className={clsx(classes.orderImage, {
                [classes.methodOpacaty]: viewMethod !== 'buy',
              })}
              onClick={() => setViewMethod('buy')}
            />
          </StyledTooltip>
          <StyledTooltip title="Sell Order" arrow>
            <img
              src={SellModeButtonIcon}
              alt="icon"
              className={clsx(classes.orderImage, {
                [classes.methodOpacaty]: viewMethod !== 'sell',
              })}
              onClick={() => setViewMethod('sell')}
            />
          </StyledTooltip>
        </Box>
        <Box display="flex">
          <Box
            display="flex"
            alignItems="center"
            // onClick={handleDigitClick}
          >
            <Typography variant="body2" className={classes.selectButton}>
              {selectedOption}
            </Typography>
            <img src={OrderBookSelectDownIcon} width="16px" height="16px" alt="icon" />
          </Box>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.selectMenu}
            MenuListProps={{ disablePadding: true }}
          >
            {selectOptions.map((option: any) => {
              return (
                <MenuItem key={option} onClick={() => handleSelect(option)} className={classes.menuItem}>
                  {option}
                </MenuItem>
              )
            })}
          </Menu>
        </Box>
      </Box>
      <Box className={classes.orderBookTbHeader}>
        <Typography variant="body1" className={classes.fontColor3} style={{ flex: '30%', textAlign: 'left' }}>
          Price({coin1})
        </Typography>
        <Typography variant="body1" className={classes.fontColor3} style={{ flex: '30%', textAlign: 'right' }}>
          Amount({coin2})
        </Typography>
        <Typography variant="body1" className={classes.fontColor3} style={{ flex: '40%', textAlign: 'right' }}>
          Total
        </Typography>
      </Box>
      {loading === true ? (
        <Spinner />
      ) : (
        <Box
          overflow="hidden"
          height="inherit"
          position="relative"
          display={`${viewMethod === 'buy' ? 'none' : 'block'}`}
        >
          {displayedSellOrderLists.map((sellOrder, key) => (
            <Box key={key} position="absolute" bottom={`${key * 20}px`} width="100%">
              <Box display="grid" position="relative" height="20px" overflow="hidden" className={classes.listHover}>
                <Box lineHeight="20px" display="flex" px="16px">
                  <Typography variant="body1" className={classes.fontColor5} style={{ flex: '30%', textAlign: 'left' }}>
                    {/* {floatNum !== 0 && intNum === 1
                    ? numberWithCommas(sellOrder.price.toFixed(floatNum))
                    : numberWithCommas(
                        Math.round(sellOrder.price / intNum) * intNum
                      )} */}
                    {numberWithCommas(sellOrder?.price?.toFixed(2))}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.fontColor6}
                    style={{ flex: '30%', textAlign: 'right' }}
                  >
                    {numberWithCommas(sellOrder?.amount?.toFixed(2))}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.fontColor6}
                    style={{ flex: '40%', textAlign: 'right' }}
                  >
                    {numberWithCommas(sellOrder?.total?.toFixed(2))}
                  </Typography>
                </Box>
                <ProgressBar
                  transformValue={sellOrder?.total > standardValue ? -100 : -(sellOrder?.total / standardValue) * 100}
                  height={20}
                  status="red"
                />
              </Box>
            </Box>
          ))}
        </Box>
      )}
      <Box>
        <Box className={classes.orderBookTicker}>
          <Typography
            variant="subtitle1"
            className={clsx(classes.markPrice, {
              [classes.fontColor4]: headerInfos?.Price > headerInfos?.PrevPrice,
              [classes.fontColor5]: headerInfos?.Price < headerInfos?.PrevPrice,
              [classes.fontColor2]: headerInfos?.Price === headerInfos?.PrevPrice,
            })}
          >
            {numberWithCommas(headerInfos?.Price?.toFixed(2))}
            <img
              src={headerInfos?.Price > headerInfos?.PrevPrice ? GreenArrowUpIcon : RedArrowDownIcon}
              alt="icon"
              style={{
                width: '16px',
                height: '16px',
                display: `${headerInfos?.Price === headerInfos?.PrevPrice ? 'none' : 'block'}`,
              }}
            />
          </Typography>

          <Typography variant="body1" className={classes.markPriceSmall}>
            ${numberWithCommas(headerInfos?.Price?.toFixed(2))}
          </Typography>
          <Link to="/orderbook" style={{ textDecoration: 'none' }}>
            <Typography variant="body1" className={clsx(classes.fontColor3, classes.hover)}>
              More
            </Typography>
          </Link>
        </Box>
      </Box>
      {loading === true ? (
        <Spinner />
      ) : (
        <Box overflow="hidden" height="inherit" display={`${viewMethod === 'sell' ? 'none' : 'block'}`}>
          {displayedBuyOrderLists.map((buyOrder, key) => (
            <Box
              key={key}
              display="grid"
              position="relative"
              height="20px"
              overflow="hidden"
              className={classes.listHover}
            >
              <Box lineHeight="20px" display="flex" px="16px">
                <Typography variant="body1" className={classes.fontColor4} style={{ flex: '30%', textAlign: 'left' }}>
                  {/* {floatNum !== 0 && intNum === 1
                  ? numberWithCommas(buyOrder.price.toFixed(floatNum))
                  : numberWithCommas(
                      Math.round(buyOrder.price / intNum) * intNum
                    )} */}
                  {numberWithCommas(buyOrder?.price?.toFixed(2))}
                </Typography>
                <Typography variant="body1" className={classes.fontColor6} style={{ flex: '30%', textAlign: 'right' }}>
                  {numberWithCommas(buyOrder?.amount?.toFixed(2))}
                </Typography>
                <Typography variant="body1" className={classes.fontColor6} style={{ flex: '40%', textAlign: 'right' }}>
                  {numberWithCommas(buyOrder?.total?.toFixed(2))}
                </Typography>
              </Box>
              <ProgressBar
                transformValue={buyOrder.total > standardValue ? -100 : -(buyOrder.total / standardValue) * 100}
                height={20}
                status="blue"
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default OrderBook
