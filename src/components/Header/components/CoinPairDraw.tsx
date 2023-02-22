import React, { useState, useEffect } from 'react'
import axios from 'axios'
import clsx from 'clsx'
import { Box, Typography, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { useAppDispatch } from '../../../store/hooks'
import { storeSelectedPair } from '../../../store/header'

import { useStyles } from '../Style'
import SortDefaultIcon from '../../../assets/image/SortDefaultIcon.svg'
import SortDownIcon from '../../../assets/image/SortDownIcon.svg'
import SortUpIcon from '../../../assets/image/SortUpIcon.svg'
import ChangeIcon from '../../../assets/image/ChangeIcon.svg'
import FavoriteDefaultIcon from '../../../assets/image/FavoriteDefaultIcon.svg'
import FavoriteSmallIcon from '../../../assets/image/FavoriteSmallIcon.svg'
import { REQUEST_API_URL } from '../../../config/config'
import { pairSplit } from '../../../common/utils'

interface CoinPairDrawProps {
  getCloseState: (isClosed: boolean) => void
}

function CoinPairDraw({ getCloseState }: CoinPairDrawProps) {
  const classes = useStyles()

  const [sortStatus, setSortStatus] = useState({
    orderBy: 'Pair',
    order: 0,
  })

  //---------------get combination when coin tab onclick-----------------
  let coinInfo = ['USDT', 'ETH', 'BTC', 'BNB', 'USD'] //coin name
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

  const [allCoin, setAllCoin] = useState([])

  useEffect(() => {
    const fetchData = async (coin2: any, searchString: any) => {
      const result = await axios.post(`${REQUEST_API_URL}/coinpair/list`)

      let pair = []
      let selectPair: any = []
      let searchPair: any = []

      for (let i = 0; i < result.data.Data.length; i++) {
        const allCoinPair: any = pairSplit(result.data.Data[i].Pair)
        allCoinPair['price'] = result?.data?.Data[i]?.Price
        allCoinPair['priceDiff'] = result?.data?.Data[i]?.PriceDiff
        allCoinPair['percent'] = result?.data?.Data[i]?.Percent
        pair.push(allCoinPair)
      }

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
  }, [coin2, searchString])
  //---------------------------------------------------------------------
  const [changeStatus, setChangeStatus] = useState('Change')

  const handleChangeIconClick = () => {
    // if (changeStatus === 'Change') {
    //   setChangeStatus('24h Volume')
    // } else {
    //   setChangeStatus('Change')
    // }
  }

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

  const dispatch = useAppDispatch()

  const handlePairClick = (coin1: string, coin2: string) => {
    const coin = coin1 + '/' + coin2
    localStorage.setItem('activePair', coin)
    dispatch(storeSelectedPair(coin))
  }

  return (
    <Box>
      <Box px={2}>
        <Box className={classes.header}>
          <Typography variant="subtitle2" className={clsx(classes.fontColor1, classes.clickTab)}>
            Market
          </Typography>
          <CloseIcon onClick={() => getCloseState(false)} className={classes.closeIcon} />
        </Box>
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
          <Box display="flex" flex="2 1 0px" justifyContent="flex-end" minWidth="60px">
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
                onClick={() => {
                  handlePairClick(listItem.coin1, listItem.coin2)
                  getCloseState(false)
                }}
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
                <Box display="flex" flex="3 1 0px" justifyContent="flex-start" minWidth="50px">
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
                onClick={() => {
                  handlePairClick(listItem.coin1, listItem.coin2)
                  getCloseState(false)
                }}
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
                <Box display="flex" flex="3 1 0px" justifyContent="flex-start" minWidth="50px">
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
}

export default CoinPairDraw
