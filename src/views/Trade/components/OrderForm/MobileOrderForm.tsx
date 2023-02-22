/** @format */

import React from 'react'
import { Drawer, Grid } from '@material-ui/core'

import { useStyles } from './Style'
import Response from './MobileOrderTabs'

const OpenTab = {
  BUY_TAB_OPEN: 0,
  SELL_TAB_OPEN: 1,
  CLOSE_TAB: 2,
}

function PhoneResponse() {
  const classes = useStyles()

  const [openOrderTab, setOpenOrderTab] = React.useState()

  const handleClickTab = (e: any) => {
    setOpenOrderTab(e)
  }

  return (
    <div>
      <Grid container spacing={1} className={classes.subContainer}>
        <Grid item xs={6}>
          <button onClick={() => handleClickTab(OpenTab.BUY_TAB_OPEN)} className={classes.buyText}>
            Buy
          </button>
        </Grid>
        <Grid item xs={6}>
          <button onClick={() => handleClickTab(OpenTab.SELL_TAB_OPEN)} className={classes.sellText}>
            Sell
          </button>
        </Grid>
      </Grid>
      <Drawer
        anchor="bottom"
        open={openOrderTab === OpenTab.BUY_TAB_OPEN}
        onClose={() => handleClickTab(OpenTab.CLOSE_TAB)}
      >
        <Response openState={openOrderTab} />
      </Drawer>
      <Drawer
        anchor="bottom"
        open={openOrderTab === OpenTab.SELL_TAB_OPEN}
        onClose={() => handleClickTab(OpenTab.CLOSE_TAB)}
      >
        <Response openState={openOrderTab} />
      </Drawer>
    </div>
  )
}

export default PhoneResponse
