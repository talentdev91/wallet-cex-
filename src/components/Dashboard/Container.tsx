import React from 'react'
import { Box } from '@material-ui/core'
import { useStyles } from './Style'

interface ContainerProps {
  children?: React.ReactNode
}

function Container({ children }: ContainerProps) {
  const classes = useStyles()

  return <Box className={classes.container}>{children}</Box>
}

export default Container
