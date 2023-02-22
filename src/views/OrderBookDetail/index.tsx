import React from 'react'

//material-ui
import { Box, Typography, Grid, FormControl, Select, MenuItem } from '@material-ui/core'
//external components
import Header from '../../components/Header'
import BreadCrumbs from './components/Breadcrumbs'
import Footer from '../Trade/components/Footer'
import OrderCard from './components/OrderCard'
//store
import { selectSellOrderLists, selectBuyOrderLists } from '../../store/orderbook/selectors'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { getOrderLists } from '../../store/orderbook'
import { selectCoinPair } from '../../store/header'
//style
import { useStyles } from './styles'

import useOrderFormData from '../../hooks/useFormData'

function OrderBookDetail() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const { buyFormData, sellFormData } = useOrderFormData()
  const coinPair = useAppSelector(selectCoinPair)

  const sellOrderLists = useAppSelector(selectSellOrderLists)
  const buyOrderLists = useAppSelector(selectBuyOrderLists)

  const [depth, setDepth] = React.useState(15)
  const [depthOpen, setDepthOpen] = React.useState(false)
  const [decimal, setDecimal] = React.useState(2)
  const [decimalOpen, setDecimalOpen] = React.useState(false)

  React.useEffect(() => {
    dispatch(getOrderLists(buyFormData))
    dispatch(getOrderLists(sellFormData))
    // eslint-disable-next-line
  }, [dispatch])

  const handleDepthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDepth(event.target.value as number)
  }

  const handleDecimalChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDecimal(event.target.value as number)
  }

  return (
    <div className={classes.root}>
      <Header />

      <BreadCrumbs />

      <div className={classes.main}>
        <Grid container spacing={3} className={classes.mainHeader}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Typography className={classes.pageTitle}>Order Book</Typography>
              <Box className={classes.line} />
              <Typography className={classes.coinPair}>{coinPair}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="flex-end">
              <FormControl className={classes.formControl}>
                <Typography variant="body1" className={classes.selectLabel}>
                  Depth
                </Typography>

                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={depthOpen}
                  onClose={() => setDepthOpen(false)}
                  onOpen={() => setDepthOpen(true)}
                  value={depth}
                  onChange={handleDepthChange}
                >
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                  <MenuItem value={100}>100</MenuItem>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <Typography variant="body1" className={classes.selectLabel}>
                  Group
                </Typography>

                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={decimalOpen}
                  onClose={() => setDecimalOpen(false)}
                  onOpen={() => setDecimalOpen(true)}
                  value={decimal}
                  onChange={handleDecimalChange}
                >
                  <MenuItem value={0}>0 Decimal</MenuItem>
                  <MenuItem value={1}>1 Decimals</MenuItem>
                  <MenuItem value={2}>2 Decimals</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <OrderCard
              title="Buy Order"
              orderLists={buyOrderLists.length > depth ? buyOrderLists.slice(0, depth) : buyOrderLists}
              depth={depth}
              decimal={decimal}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <OrderCard
              title="Sell Order"
              orderLists={sellOrderLists.length > depth ? sellOrderLists.slice(0, depth) : sellOrderLists}
              depth={depth}
              decimal={decimal}
            />
          </Grid>
        </Grid>
      </div>

      <Box className={classes.footerPosition}>
        <Footer />
      </Box>
    </div>
  )
}

export default OrderBookDetail
