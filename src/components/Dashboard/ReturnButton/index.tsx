import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

export interface ReturnButtonProps {
  to: string
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0px 24px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
    },
    link: {
      fontSize: '20px',
      fontWeight: 500,
      color: '#707a8a',
      lineHeight: '28px',
      textDecoration: 'none',
      '&:hover': {
        color: '#1e2329',
      },
    },
  }),
)
function ReturnButton({ to }: ReturnButtonProps) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Link to={to} className={classes.link}>
        <ArrowBackIosIcon style={{ verticalAlign: 'sub' }} />
        Security
      </Link>
    </Box>
  )
}

export default ReturnButton
