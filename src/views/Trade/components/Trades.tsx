import React from 'react'
import clsx from 'clsx'
// material-ui
import { Box, Typography } from '@material-ui/core'
// store
import { selectTradeHistory, isLoading } from 'store/tradehistory/selectors'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import Spinner from 'components/Spinner'
import { getTradeList } from 'store/tradehistory'
// external components
import useGetCoinPair from 'hooks/useGetCoinPair'
import useFormData from 'hooks/useFormData'
// style
import { useStyles } from './Style'
// config
import { OrderType } from 'config/constants'

function Trades({ height }: any) {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const { coin1, coin2 } = useGetCoinPair()
  const { tradeHistoryFormData } = useFormData()

  const tradesList = useAppSelector(selectTradeHistory)
  const loading = useAppSelector(isLoading)

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

      {loading === true ? (
        <div className={classes.spinnerStyle}>
          <Spinner />
        </div>
      ) : (
        <Box overflow="auto" height={height - 44}>
          {height &&
            tradesList?.map((trade: any, key: any) => (
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
      )}
    </Box>
  )
}

export default Trades
