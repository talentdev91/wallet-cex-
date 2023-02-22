import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './Style'

interface SecurityCardProps {
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  isEnable?: boolean
  statusValue?: string
  controlButtons: React.ReactNode
}

function SecurityCard({ icon, title, description, isEnable, statusValue, controlButtons }: SecurityCardProps) {
  const classes = useStyles()
  return (
    <Box className={classes.securityCardContainer}>
      <Box className={classes.securityCardInfo}>
        <Box marginRight="16px" width="24px">
          {icon}
        </Box>
        <Box>
          <Typography className={classes.securityCardTitle}>{title}</Typography>
          {description}
        </Box>
      </Box>
      <Box className={classes.securityCardAction}>
        <Box display="flex" flex="2 1 0%" alignItems="center">
          {isEnable ? (
            <i className="icon-success" style={{ lineHeight: '20px' }}>
              <i className="path1 fontStyle" />
              <i className="path2 fontStyle" />
            </i>
          ) : isEnable === undefined ? (
            ''
          ) : (
            <i className="icon-close" style={{ lineHeight: '20px' }}>
              <i className="path1 fontStyle" />
              <i className="path2 fontStyle" />
            </i>
          )}
          <Typography className={classes.securityCardStatusText}>{statusValue}</Typography>
        </Box>
        <Box display="flex" flex="3 1 0%" justifyContent="flex-end">
          {controlButtons}
        </Box>
      </Box>
    </Box>
  )
}

export default SecurityCard
