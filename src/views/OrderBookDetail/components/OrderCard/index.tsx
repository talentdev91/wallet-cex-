import React from 'react'
import clsx from 'clsx'

//material-ui
import { Box, Typography } from '@material-ui/core'
//external
import { numberWithCommas } from '../../../../common/utils'
import ProgressBar from '../../../Trade/components/ProgressBar'
import useGetCoinPair from '../../../../hooks/useGetCoinPair'
import { useStyles } from './styles'

interface OrderCardProps {
  title: string
  orderLists: OrderListsState[]
  depth: number
  decimal: number
}

function OrderCard({ title, orderLists, depth }: OrderCardProps) {
  const classes = useStyles()

  const { coin1, coin2 } = useGetCoinPair()
  const standardValue = 50000

  const tabelHeaderCells = ['Side', `Price (${coin1})`, `Amount (${coin2})`, `Total (${coin1})`, `Sum (${coin1})`]

  return (
    <div className={classes.root}>
      <Box px="20px" py="16px">
        <Typography variant="subtitle2" className={classes.tableTitle}>
          {title}
        </Typography>
      </Box>
      <Box overflow="auto" whiteSpace="nowrap">
        <Box className={classes.tableHeader}>
          {tabelHeaderCells.map((tableHeader, key) => (
            <Typography
              key={key}
              variant="body1"
              className={clsx(classes.tableHeaderCell, {
                [classes.headerPlacement]: key === 4,
              })}
              style={{ width: `${key === 0 ? '12%' : '22%'}` }}
            >
              {tableHeader}
            </Typography>
          ))}
        </Box>

        <Box className={classes.listContainer} height={`${depth * 33}px`}>
          {orderLists.map((order, key) => (
            <Box key={key} display="grid" position="relative" overflow="hidden" height="33px">
              <Box className={classes.listItem}>
                <Typography
                  variant="body1"
                  className={title === 'Buy Order' ? classes.buySideValue : classes.sellSideValue}
                  style={{ width: '12%' }}
                >
                  {title === 'Buy Order' ? 'Buy' : 'Sell'} {key + 1}
                </Typography>

                <Typography variant="body1" className={classes.listItemFiled}>
                  {numberWithCommas(order.price)}
                </Typography>

                <Typography variant="body1" className={classes.listItemFiled}>
                  {numberWithCommas(order?.amount?.toFixed(2))}
                </Typography>

                <Typography variant="body1" className={classes.listItemFiled}>
                  {numberWithCommas(order?.total?.toFixed(2))}
                </Typography>

                <Typography variant="body1" className={classes.listItemFiled} style={{ textAlign: 'right' }}>
                  {key !== 0
                    ? numberWithCommas((orderLists[key].total + orderLists[key - 1].total).toFixed(7))
                    : numberWithCommas(orderLists[key].total.toFixed(7))}
                </Typography>
              </Box>

              <ProgressBar
                transformValue={order.total > standardValue ? -100 : -(order.total / standardValue) * 100}
                height={32}
                status="blue"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  )
}

export default OrderCard
