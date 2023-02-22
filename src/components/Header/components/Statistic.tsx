/** @format */

import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import axios from 'axios'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

// material-ui
import { Box, Typography, Divider, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
// external
import { LeftArrow, RightArrow } from './Arrows'
import { useStyles, CoinPairSelectMenu } from '../Style'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { storeSelectedPair, selectCoinPair } from 'store/header'
import { getHeaderPrices } from 'store/headerinfo'
// import { selectBuyOrderLists } from "../../../store/orderbook/selectors";
import { headerPrices } from 'store/headerinfo/selectors'
import TickerListItem from './TickerListItem'
import useDrag from './UseDrag'
import './hideScrollbar.css'
import { GetCoinInfoList } from 'hooks/orderFormAxios'
// image
import FavoriteDefaultIcon from 'assets/image/FavoriteDefaultIcon.svg'
import PairSelectArrowDown from 'assets/image/PairSelectArrowDown.svg'
import PairSelectArrowUp from 'assets/image/PairSelectArrowUp.svg'
import FavoriteSmallIcon from 'assets/image/FavoriteSmallIcon.svg'
import SortDefaultIcon from 'assets/image/SortDefaultIcon.svg'
import SortDownIcon from 'assets/image/SortDownIcon.svg'
import SortUpIcon from 'assets/image/SortUpIcon.svg'
import ChangeIcon from 'assets/image/ChangeIcon.svg'
import { onlyUnique, pairSplit } from 'common/utils'
import { REQUEST_API_URL } from 'config/config'
import { numberWithCommas } from 'common/utils'

function Statistic() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [sortStatus, setSortStatus] = useState({
    orderBy: 'Pair',
    order: 0,
  })

  //---------------get combination when coin tab onclick-----------------
  const [coinInfo, setCoinInfo] = React.useState([]) //coin name
  const [coin2, setCoin2] = useState('USDT') //coin2 is parent coin, coin2 is  cild coin

  const handleTabMenuClick = (value: string) => {
    // localStorage.setItem("activeSortMenu", parent);
    setCoin2(value)
    setSortStatus({ orderBy: 'Pair', order: 0 })
  }

  //------------------------coin search-------------------------------------

  const [searchResult, setSearchResult] = useState([])
  const [searchString, setSearchString] = useState('')

  const handleSearch = (e: string) => {
    setSearchString(e)
  }

  //---------------get coin name from server, get coin pair----------------------------

  const [allCoin, setAllCoin] = useState<any>([])
  const curPair = useAppSelector(selectCoinPair)

  const getCoinPairs = async () => {
    GetCoinInfoList().then((res: any) => {})
  }

  useEffect(() => {
    getCoinPairs()
  }, [])

  useEffect(() => {
    const formData = new FormData()
    formData.append('pair', curPair)
    dispatch(getHeaderPrices(formData))

    const fetchData = async (coin2: any, searchString: any) => {
      const result = await axios.post(`${REQUEST_API_URL}/coinpair/list`)

      let pair = []
      let selectPair: any = []
      let searchPair: any = []
      let coinMenuList: any = []
      for (let i = 0; i < result?.data?.Data?.length; i++) {
        let allCoinPair: any = pairSplit(result?.data?.Data[i]?.Pair)
        allCoinPair['price'] = result?.data?.Data[i]?.Price
        allCoinPair['priceDiff'] = result?.data?.Data[i]?.PriceDiff
        allCoinPair['percent'] = result?.data?.Data[i]?.Percent
        allCoinPair['volumeFrom'] = result?.data?.Data[i]?.VolumeFrom
        pair.push(allCoinPair)
        coinMenuList.push(pairSplit(result?.data?.Data[i]?.Pair).coin2)
      }

      setCoinInfo(coinMenuList.filter(onlyUnique))

      if (searchString.length === 0) {
        for (let i = 0; i < pair.length; i++) {
          if (pair[i]?.coin2?.toLowerCase() === coin2?.toLowerCase()) {
            selectPair.push(pair[i])
          }
        }
        setAllCoin(selectPair)
      } else {
        for (let i = 0; i < pair.length; i++) {
          if (result?.data?.Data[i]?.Pair.toLowerCase().indexOf(searchString?.toLowerCase()) !== -1) {
            searchPair.push(pair[i])
          }
        }
        setSearchResult(searchPair)
      }
    }

    fetchData(coin2, searchString)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coin2, searchString, curPair])
  //---------------------------------------------------------------------

  const handleSort = (sort: any) => {
    if (sort === 'Last Price') {
      if (sortStatus.order === 1) {
        setSortStatus({ orderBy: sort, order: -1 })

        allCoin.sort((a: any, b: any) => b.price.toString().localeCompare(a.price.toString()))
        setAllCoin(allCoin)
      } else if (sortStatus.order === -1) {
        setSortStatus({ orderBy: sort, order: 0 })

        setAllCoin(allCoin)
      } else {
        setSortStatus({ orderBy: sort, order: 1 })

        allCoin.sort((a: any, b: any) => a.price.toString().localeCompare(b.price.toString()))
        setAllCoin(allCoin)
      }
    } else if (sort === 'Pair') {
      if (sortStatus.order === 1) {
        setSortStatus({ orderBy: sort, order: -1 })

        allCoin.sort((a: any, b: any) => b.coin1.toString().localeCompare(a.coin1.toString()))
        setAllCoin(allCoin)
      } else if (sortStatus.order === -1) {
        setSortStatus({ orderBy: sort, order: 0 })

        setAllCoin(allCoin)
      } else {
        setSortStatus({ orderBy: sort, order: 1 })

        allCoin.sort((a: any, b: any) => a.coin1.toString().localeCompare(b.coin1.toString()))
        setAllCoin(allCoin)
      }
    } else if (sort === 'Change') {
      if (sortStatus.order === 1) {
        setSortStatus({ orderBy: sort, order: -1 })

        allCoin.sort((a: any, b: any) => a.percent.toString().localeCompare(b.percent.toString()))
        setAllCoin(allCoin)
      } else if (sortStatus.order === -1) {
        setSortStatus({ orderBy: sort, order: 0 })

        setAllCoin(allCoin)
      } else {
        setSortStatus({ orderBy: sort, order: 1 })

        allCoin.sort((a: any, b: any) => b.percent.toString().localeCompare(a.percent.toString()))
        setAllCoin(allCoin)
      }
    }
  }

  const [changeStatus, setChangeStatus] = useState('Change')

  const handleChangeIconClick = () => {
    // if (changeStatus === 'Change') {
    //   setChangeStatus('24h Volume')
    // } else {
    //   setChangeStatus('Change')
    // }
  }

  const handlePairClick = (coin1: string, coin2: string) => {
    const coin = coin1 + '/' + coin2
    localStorage.setItem('activePair', coin)
    dispatch(storeSelectedPair(coin))
  }

  const [isPairSelectOver, setIsPairSelectOver] = useState(false)

  const PairSelectContent = (
    <Box>
      <Box px={2}>
        <Box className={classes.search}>
          <Box className={classes.searchIcon}>
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Box>
        <Box display="flex" alignItems="center">
          <img src={FavoriteDefaultIcon} alt="icon" width="16px" height="16px" className={classes.itemSpace} />
          {coinInfo.map((menu: string) => {
            return (
              <Typography
                key={menu}
                variant="body1"
                className={clsx(classes.fontColor3, classes.hover, classes.itemSpace, {
                  [classes.active]: menu === coin2,
                })}
                onClick={() => handleTabMenuClick(menu)}
              >
                {menu}
              </Typography>
            )
          })}
        </Box>
        <Box display="flex" height="20px" lineHeight="20px" mt={1}>
          <Box
            display="flex"
            flex="3 1 0px"
            justifyContent="flex-start"
            minWidth="95px"
            onClick={() => handleSort('Pair')}
          >
            <Typography variant="body1" className={clsx(classes.fontColor3, classes.clickTab)}>
              Pair
            </Typography>
            {searchString.length === 0 && allCoin.length > 0 ? (
              <img
                src={
                  sortStatus.orderBy === 'Pair'
                    ? sortStatus.order === 1
                      ? SortUpIcon
                      : sortStatus.order === -1
                      ? SortDownIcon
                      : SortDefaultIcon
                    : SortDefaultIcon
                }
                alt="icon"
                className={classes.sortIcon}
              />
            ) : (
              ''
            )}
          </Box>
          <Box
            display="flex"
            flex="3 1 0px"
            justifyContent="flex-start"
            minWidth="50px"
            onClick={() => handleSort('Last Price')}
          >
            <Typography variant="body1" className={clsx(classes.fontColor3, classes.clickTab)}>
              Last Price
            </Typography>
            {searchString.length === 0 && allCoin.length > 0 ? (
              <img
                src={
                  sortStatus.orderBy === 'Last Price'
                    ? sortStatus.order === 1
                      ? SortUpIcon
                      : sortStatus.order === -1
                      ? SortDownIcon
                      : SortDefaultIcon
                    : SortDefaultIcon
                }
                alt="icon"
                className={classes.sortIcon}
              />
            ) : (
              ''
            )}
          </Box>
          <Box display="flex" flex="3 1 0px" justifyContent="flex-end" minWidth="60px">
            <Box display="flex" onClick={() => handleSort('Change')}>
              <Typography variant="body1" className={clsx(classes.fontColor3, classes.clickTab)}>
                {changeStatus === 'Change' ? 'Change' : '24h Volume'}
              </Typography>
              {searchString.length === 0 && allCoin.length > 0 ? (
                <>
                  {changeStatus === 'Change' ? (
                    <img
                      src={
                        sortStatus.orderBy === 'Change'
                          ? sortStatus.order === 1
                            ? SortUpIcon
                            : sortStatus.order === -1
                            ? SortDownIcon
                            : SortDefaultIcon
                          : SortDefaultIcon
                      }
                      alt="icon"
                      className={classes.sortIcon}
                    />
                  ) : (
                    <img
                      src={
                        sortStatus.orderBy === '24h Volume'
                          ? sortStatus.order === 1
                            ? SortUpIcon
                            : sortStatus.order === -1
                            ? SortDownIcon
                            : SortDefaultIcon
                          : SortDefaultIcon
                      }
                      alt="icon"
                      className={classes.sortIcon}
                    />
                  )}
                </>
              ) : (
                ''
              )}
            </Box>
            <img src={ChangeIcon} alt="icon" className={classes.changeIcon} onClick={handleChangeIconClick} />
          </Box>
        </Box>
      </Box>
      <Box className={classes.pairList}>
        {searchString.length === 0 && allCoin.length > 0
          ? allCoin.map((listItem: any, key: any) => (
              <Box
                key={key}
                className={classes.pairListItem}
                onClick={() => handlePairClick(listItem.coin1, listItem.coin2)}
              >
                <img src={FavoriteSmallIcon} alt="icon" className={classes.favoriteIcon} />
                <Box display="flex" flex="3 1 0px" justifyContent="flex-start" minWidth="95px">
                  <Typography variant="body1" className={classes.fontColor1}>
                    {listItem.coin1}
                  </Typography>
                  <Typography variant="body1" className={classes.fontColor1}>
                    /{listItem.coin2}
                  </Typography>
                </Box>
                <Box display="flex" flex="4 1 0px" justifyContent="flex-start" minWidth="50px">
                  <Typography variant="body1" className={classes.fontColor1}>
                    {listItem.price}
                  </Typography>
                  <Typography variant="body1" className={classes.fontColor3}>
                    &nbsp;/&nbsp;${listItem.price}
                  </Typography>
                </Box>
                <Box display="flex" flex="3 1 0px" justifyContent="flex-end" minWidth="60px">
                  {changeStatus === 'Change' ? (
                    <Typography
                      variant="body1"
                      className={clsx({
                        [classes.fontColor4]: listItem.priceDiff > 0,
                        [classes.fontColor5]: listItem.priceDiff < 0,
                        [classes.fontColor6]: listItem.priceDiff === 0,
                      })}
                    >
                      {listItem.percent}
                    </Typography>
                  ) : (
                    <Typography variant="body1" className={classes.fontColor6}>
                      {listItem.volumeFrom}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))
          : searchResult.map((listItem: any, key: any) => (
              <Box
                key={key}
                className={classes.pairListItem}
                onClick={() => handlePairClick(listItem.coin1, listItem.coin2)}
              >
                <img src={FavoriteSmallIcon} alt="icon" className={classes.favoriteIcon} />
                <Box display="flex" flex="3 1 0px" justifyContent="flex-start" minWidth="95px">
                  <Typography variant="body1" className={classes.fontColor1}>
                    {listItem.coin1}
                  </Typography>
                  <Typography variant="body1" className={classes.fontColor1}>
                    /{listItem.coin2}
                  </Typography>
                </Box>
                <Box display="flex" flex="4 1 0px" justifyContent="flex-start" minWidth="50px">
                  <Typography variant="body1" className={classes.fontColor1}>
                    {listItem.price}
                  </Typography>
                  <Typography variant="body1" className={classes.fontColor3}>
                    &nbsp;/&nbsp;${listItem.price}
                  </Typography>
                </Box>
                <Box display="flex" flex="3 1 0px" justifyContent="flex-end" minWidth="60px">
                  {changeStatus === 'Change' ? (
                    <Typography
                      variant="body1"
                      className={clsx({
                        [classes.fontColor4]: listItem.priceDiff > 0,
                        [classes.fontColor5]: listItem.priceDiff < 0,
                        [classes.fontColor6]: listItem.priceDiff === 0,
                      })}
                    >
                      {listItem.percent}
                    </Typography>
                  ) : (
                    <Typography variant="body1" className={classes.fontColor6}>
                      {listItem.volumeFrom}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
      </Box>
    </Box>
  )

  const { dragStart, dragStop, dragMove } = useDrag()
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff
        }
      })

  // const [infoIconHover, setInfoIconHover] = React.useState(false);

  const headerInfos = useAppSelector(headerPrices) //high, low, pair, price, volumefrom, valueto

  const viewType = [
    { title: '24h Change', value: '' },
    {
      title: '24h High',
      value: numberWithCommas(headerInfos?.High?.toFixed(2)),
    },
    { title: '24h Low', value: numberWithCommas(headerInfos?.Low?.toFixed(2)) },
    {
      title: `24h Volume(${curPair.split('/')[0]})`,
      value: numberWithCommas(headerInfos?.VolumeFrom?.toFixed(2)),
    },
    {
      title: `24h Volume(${curPair.split('/')[1]})`,
      value: numberWithCommas(headerInfos?.VolumeTo?.toFixed(2)),
    },
  ]

  return (
    <>
      <Box display="flex" className={classes.coinPairForm}>
        <Box display="flex" flexDirection="column" alignSelf="center">
          <Box
            display="flex"
            flexWrap="wrap"
            height="30px"
            onMouseOver={() => setIsPairSelectOver(!isPairSelectOver)}
            onMouseOut={() => setIsPairSelectOver(!isPairSelectOver)}
          >
            <CoinPairSelectMenu title={PairSelectContent} interactive placement="bottom-start">
              <Box display="flex">
                <Typography variant="subtitle1" className={classes.fontColor1}>
                  {curPair}
                </Typography>
                <img src={isPairSelectOver ? PairSelectArrowUp : PairSelectArrowDown} alt="icon" />
              </Box>
            </CoinPairSelectMenu>
          </Box>
          {/* <Box
            display='flex'
            onMouseOver={() => setInfoIconHover(true)}
            onMouseOut={() => setInfoIconHover(false)}>
            <img
              src={infoIconHover ? InfoLightIcon : InfoDarkIcon}
              alt='icon'
              width='16px'
              height='16px'
              style={{ marginRight: "4px" }}
            />
            <Link to='/' style={{ textDecoration: "none" }}>
              <Typography
                variant='body1'
                className={clsx(classes.fontColor3, classes.underlineLink)}>
                Bitcoin
              </Typography>
            </Link>
          </Box> */}
        </Box>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Box alignSelf="center">
          <Typography
            variant="subtitle2"
            className={clsx(
              {
                [classes.fontColor4]: headerInfos?.Price > headerInfos?.PrevPrice,
                [classes.fontColor5]: headerInfos?.Price < headerInfos?.PrevPrice,
                [classes.fontColor6]: headerInfos?.Price === headerInfos?.PrevPrice,
              },
              classes.text4,
            )}
          >
            {numberWithCommas(headerInfos?.Price?.toFixed(2))}
          </Typography>
          <Typography variant="body1" className={clsx(classes.fontColor1, classes.text4)}>
            ${numberWithCommas(headerInfos?.Price?.toFixed(2))}
          </Typography>
        </Box>
      </Box>

      <Box className={classes.tickerList}>
        <div onMouseLeave={dragStop}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {viewType.map((view, key) => {
              if (view.title === '24h Change') {
                return (
                  <Box key={key} className={classes.tickerListItem}>
                    <Typography variant="body1" className={clsx(classes.fontColor3, classes.viewTypeMargin)}>
                      24h Change
                    </Typography>
                    <Typography
                      variant="body1"
                      className={clsx({
                        [classes.fontColor4]: headerInfos?.PriceDiff > 0,
                        [classes.fontColor5]: headerInfos?.PriceDiff < 0,
                        [classes.fontColor6]: headerInfos?.PriceDiff === 0,
                      })}
                    >
                      {headerInfos?.PriceDiff}&#160;&#160;
                      {headerInfos?.Percent}
                    </Typography>
                  </Box>
                )
              } else {
                return <TickerListItem key={key} itemId={key.toString()} title={view.title} value={view.value} />
              }
            })}
          </ScrollMenu>
        </div>
      </Box>
    </>
  )
}

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>

export default Statistic
