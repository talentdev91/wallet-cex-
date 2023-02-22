import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@material-ui/core'
import { useStyles } from './Style'

interface SecurityCardProps {
  isEnable: boolean
  linkTitle: string
  url: string
}

function SecurityCard({ isEnable, linkTitle, url }: SecurityCardProps) {
  const classes = useStyles()

  return (
    <Box display="flex" alignItems="center">
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
      <Link to={url} className={classes.securityHeaderLink}>
        {linkTitle}
      </Link>
    </Box>
  )
}

export default SecurityCard
