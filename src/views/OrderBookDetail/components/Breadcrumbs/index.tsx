import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

//material-ui
import { Box, Typography } from '@material-ui/core'
//external
import { useStyles } from './styles'

function BreadCrumbs() {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <div className={classes.content}>
        <Typography variant="body2" className={classes.fontMargin}>
          <Link to="/trade" className={clsx(classes.fontColor, classes.hover)}>
            Exchange
          </Link>
        </Typography>

        <Typography variant="body2" className={clsx(classes.fontColor, classes.fontMargin)}>
          &gt;
        </Typography>

        <Typography variant="body2" className={clsx(classes.fontColor, classes.fontMargin)}>
          Order Book
        </Typography>
      </div>
    </Box>
  )
}

export default BreadCrumbs
