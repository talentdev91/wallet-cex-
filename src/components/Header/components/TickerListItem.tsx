import React from 'react'

import clsx from 'clsx'
//material-ui
import { Box, Typography } from '@material-ui/core'

//external
import { useStyles } from '../Style'

interface TickerListItemProps {
  title: string
  value: string
  itemId: string
}

function TickerListItem({ title, value }: TickerListItemProps) {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.tickerListItem}>
        <Typography variant="body1" className={clsx(classes.fontColor3, classes.viewTypeMargin)}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.fontColor1}>
          {value}
        </Typography>
      </Box>
    </>
  )
}

export default TickerListItem
