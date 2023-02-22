import React from 'react'
import clsx from 'clsx'
import { Box } from '@material-ui/core'
import { useStyles } from './Style'

interface ResetSecurityLinkProps {
  className?: string
  style?: object
}

function Container({ className, style }: ResetSecurityLinkProps) {
  const classes = useStyles()

  return (
    <Box style={style}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://accounts.binance.com/security-reset"
        className={clsx(classes.txtunable, className)}
      >
        Security verification unavailable?
      </a>
    </Box>
  )
}

export default Container
