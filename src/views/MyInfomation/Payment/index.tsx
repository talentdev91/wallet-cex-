import React, { useState } from 'react'
import clsx from 'clsx'
import { Box, Typography } from '@material-ui/core'
import P2P from './P2P'
import BuyCrypto from './BuyCrypto'
import Withdraw from './Withdraw'
import { useStyles } from './style'

function Payment() {
  const classes = useStyles()
  const [activeItem, setActiveItem] = useState('P2P')

  return (
    <Box className={classes.container}>
      <Typography className={classes.pageTitle}>Payment</Typography>
      <Box py="16px" width="100%">
        <Box className={classes.tabContainer}>
          <Box className={classes.tabItem1}>
            <Typography
              className={clsx(classes.tabItemName, { [classes.activeTabItem]: activeItem === 'P2P' })}
              onClick={() => setActiveItem('P2P')}
            >
              P2P
            </Typography>
          </Box>
          <Box className={classes.tabItem2}>
            <Typography
              className={clsx(classes.tabItemName, { [classes.activeTabItem]: activeItem === 'Buy Crypto' })}
              onClick={() => setActiveItem('Buy Crypto')}
            >
              Buy Crypto
            </Typography>
          </Box>
          <Box className={classes.tabItem3}>
            <Typography
              className={clsx(classes.tabItemName, { [classes.activeTabItem]: activeItem === 'Withdraw' })}
              onClick={() => setActiveItem('Withdraw')}
            >
              Withdraw
            </Typography>
          </Box>
        </Box>
        <Box py="24px">
          {activeItem === 'P2P' && <P2P />}
          {activeItem === 'Buy Crypto' && <BuyCrypto />}
          {activeItem === 'Withdraw' && <Withdraw />}
        </Box>
      </Box>
    </Box>
  )
}

export default Payment
