/** @format */

import React, { useState } from 'react'
import clsx from 'clsx'

//material-ui
import { Box, Typography, Grid, Drawer } from '@material-ui/core'
//external
import { useStyles } from '../Style'
import CoinPairDraw from './CoinPairDraw'
//image
import PairSelectArrowDown from '../../../assets/image/PairSelectArrowDown.svg'
import { useAppSelector } from '../../../store/hooks'
import { selectCoinPair } from '../../../store/header'
import { headerPrices } from '../../../store/headerinfo/selectors'
import { numberWithCommas } from '../../../common/utils'

function PhoneSwitch() {
  const classes = useStyles()

  const pair = useAppSelector(selectCoinPair)

  //---------------get combination when coin tab onclick-----------------
  const [openCoinPairDraw, setOpenCoinPairDraw] = useState(false)
  const handleCoinPairDraw = () => {
    setOpenCoinPairDraw(!openCoinPairDraw)
  }

  const headerInfos = useAppSelector(headerPrices) //high, low, pair, price, volumefrom, valueto

  const viewType = {
    price: numberWithCommas(headerInfos.Price),
    high: numberWithCommas(headerInfos?.High?.toFixed(2)),
    low: numberWithCommas(headerInfos?.Low?.toFixed(2)),
    fromVolume: numberWithCommas(headerInfos?.VolumeFrom?.toFixed(2)),
    toVolume: numberWithCommas(headerInfos?.VolumeTo?.toFixed(2)),
  }

  return (
    <Grid container style={{ padding: '0.5rem' }}>
      <Grid item xs={12}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Box display="flex" flexDirection="column">
              <Box display="flex" flexWrap="wrap" height="30px">
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    className={classes.fontColor1}
                    style={{ cursor: 'pointer' }}
                    onClick={handleCoinPairDraw}
                  >
                    {pair}
                  </Typography>
                  <img src={PairSelectArrowDown} alt="icon" />
                </Box>
                <Drawer
                  anchor="bottom"
                  open={openCoinPairDraw === true}
                  onClose={handleCoinPairDraw}
                  className={classes.coinPairDraw}
                >
                  <CoinPairDraw getCloseState={handleCoinPairDraw} />
                </Drawer>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" className={clsx(classes.fontColor3, classes.viewTypeMargin)}>
              24 High
            </Typography>
            <Typography variant="body1" className={classes.fontColor1}>
              {viewType.high}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" className={clsx(classes.fontColor3, classes.viewTypeMargin)}>
              24 Volumn({pair.split('/')[0]})
            </Typography>
            <Typography variant="body1" className={classes.fontColor1}>
              {viewType.fromVolume}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: '20px' }}>
        <Grid item xs={6}>
          <Box alignSelf="center">
            <Typography
              variant="subtitle2"
              className={clsx({
                [classes.fontColor4]: headerInfos?.Price > headerInfos?.PrevPrice,
                [classes.fontColor5]: headerInfos?.Price < headerInfos?.PrevPrice,
                [classes.fontColor6]: headerInfos?.Price === headerInfos?.PrevPrice,
              })}
              style={{ lineHeight: 1.3 }}
            >
              {viewType.price}
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
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" className={clsx(classes.fontColor3, classes.viewTypeMargin)}>
            24h Low
          </Typography>
          <Typography variant="body1" className={classes.fontColor1}>
            {viewType.low}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" className={clsx(classes.fontColor3, classes.viewTypeMargin)}>
            24 Volumn({pair.split('/')[1]})
          </Typography>
          <Typography variant="body1" className={classes.fontColor1}>
            {viewType.toVolume}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PhoneSwitch
