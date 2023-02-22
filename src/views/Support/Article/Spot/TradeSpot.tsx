/** @format */

import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { useStyles } from '../Style'
import SupportHeader from '../../../../components/SupportHeader'
import img1 from '../../../../assets/image/support/login_1.png'
import img2 from '../../../../assets/image/support/all_trade.png'
import img3 from '../../../../assets/image/support/trade_2.png'

import Footer from '../../Main/Footer'

//icon_image

function TradeSpot() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SupportHeader />
      <Box className={classes.container}>
        <div className={classes.titleDiv}>
          <Typography className={classes.title}>How to Trade Spot on Dongle Website</Typography>
          <Typography className={classes.date}>2021-11-06 18:02</Typography>
        </div>
        <div>
          <Typography className={classes.text}>
            A spot trade is a simple transaction between a buyer and a seller to trade at the current market rate, known
            as the spot price. The trade takes place immediately when the order is fulfilled.
          </Typography>
          <Typography className={classes.text}>
            Users can prepare spot trades in advance to trigger when a specific spot price is reached, known as a limit
            order. You can make spot trades on Dongle through our trading page interface.
          </Typography>
          <Typography className={classes.subtitle}>Making a spot trade on the Dongle Website</Typography>
          <Typography className={classes.text}>
            1. Visit the Dongle website and click [Log in] at the top right corner.
          </Typography>
          <img src={img1} className={classes.image} alt="alt" />
          <Typography className={classes.text}>2. You will now find yourself on the trading page interface.</Typography>
          <img src={img2} className={classes.image} alt="alt" />
          <Typography className={classes.text}>(1). Trading volume of trading pair in 24 hours</Typography>
          <Typography className={classes.text}>(2). Dongle Announcements</Typography>
          <Typography className={classes.text}>(3). Candlestick chart and Market Depth</Typography>
          <Typography className={classes.text}>(4). Sell order book</Typography>
          <Typography className={classes.text}>(5). Buy order book</Typography>
          <Typography className={classes.text}>(6). Trade history</Typography>
          <Typography className={classes.text}>(7). Open orders</Typography>
          <Typography className={classes.text}>
            (8). Type of order: Limit/Market/Stop-limit/OCO(One-Cancels-the-Other)
          </Typography>
          <Typography className={classes.text}>(9). Buy Cryptocurrency</Typography>
          <Typography className={classes.text}>(10). Sell Cryptocurrency</Typography>
          <Typography className={classes.text}>(11). Public and Support chat</Typography>
          <Typography className={classes.text}>(12). Stable connection</Typography>
          <Typography className={classes.text}>3. Let’s look at buying some ZNX.</Typography>
          <Typography className={classes.text}>
            Go to the buying section (9) to buy ZNX and fill in the price and the amount for your order. Click on [Buy
            ZNX] to complete the transaction. You can follow the same steps to sell ZNX.
          </Typography>
          <img src={img3} className={classes.image} alt="alt" />

          <Typography className={classes.text}>
            - The default order type is a limit order. If traders want to place an order as soon as possible, they may
            switch to [Market] Order. By choosing a market order, users can trade instantly at the current market price.
          </Typography>
          <Typography className={classes.text}>
            - If the market price of ZNX/USDT is at 0.002, but you want to buy at a specific price, for example, 0.001,
            you can place a [Limit] order. When the market price reaches your set price, your placed order will be
            executed.
          </Typography>
          <Typography className={classes.text}>
            - The percentages shown below the ZNX [Amount] field refer to the percentage amount of your held ZNX you
            wish to trade for ZNX. Pull the slider across to change the desired amount.
          </Typography>
        </div>
      </Box>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </div>
  )
}

export default TradeSpot
