/** @format */

import React from 'react'
import clsx from 'clsx'

//material-ui
import { Box, Typography } from '@material-ui/core'
//external
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getTradeList } from '../../../store/tradehistory'
import { selectTradeHistory } from '../../../store/tradehistory/selectors'
import { useStyles } from './Style'
import useGetCoinPair from '../../../hooks/useGetCoinPair'
import useFormData from '../../../hooks/useFormData'
import { OrderType } from '../../../config/constants'

function Trades() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  //---get coinpair---

  const { coin1, coin2 } = useGetCoinPair()
  const { tradeHistoryFormData } = useFormData()

  const tradesList = useAppSelector(selectTradeHistory)

  React.useEffect(() => {
    dispatch(getTradeList(tradeHistoryFormData))
    // eslint-disable-next-line
  }, [dispatch, coin1, coin2])

  return (
    <Box pb="12px">
      <Box px={2} py={1} display="flex" alignItems="center" justifyContent="space-between">
        <Box height="16px" minWidth="70px">
          <Typography variant="body1" className={classes.fontColor3} style={{ textAlign: 'left' }}>
            Price({coin1})
          </Typography>
        </Box>
        <Box height="16px" minWidth="75px">
          <Typography variant="body1" className={classes.fontColor3} style={{ textAlign: 'right' }}>
            Amount({coin2})
          </Typography>
        </Box>
        <Box height="16px" minWidth="60px">
          <Typography variant="body1" className={classes.fontColor3} style={{ textAlign: 'right' }}>
            Time
          </Typography>
        </Box>
      </Box>
      <Box overflow="auto" style={{ height: '300px' }}>
        {tradesList?.map((trade: any, key: any) => (
          <Box key={key} display="flex" justifyContent="space-between" height="20px" pl="16px" pr="12px">
            <Box height="16px" minWidth="70px">
              <Typography
                variant="body1"
                className={clsx(trade.Side === OrderType.ORDER_BUY ? classes.fontColor4 : classes.fontColor5)}
                style={{ textAlign: 'left' }}
              >
                {trade.Price}
              </Typography>
            </Box>
            <Box height="16px" minWidth="75px">
              <Typography variant="body1" className={classes.fontColor6} style={{ textAlign: 'right' }}>
                {trade?.Excuted?.toFixed(2)}
              </Typography>
            </Box>
            <Box height="16px" minWidth="60px">
              <Typography variant="body1" className={classes.fontColor6} style={{ textAlign: 'right' }}>
                {new Date(trade.Timestamp * 1000).toLocaleString('en-GB').substr(12, 8)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Trades
