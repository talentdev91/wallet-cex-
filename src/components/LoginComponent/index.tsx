import React from 'react'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    signText: {
      color: '#f0b90b',
      margin: 'auto',
      cursor: 'pointer',
      fontSize: '14px',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        color: '#f0b90b',
      },
    },
    signText2: {
      color: theme.palette.secondary.dark,
      margin: 'auto',
      marginTop: '3px',
    },
    signDiv: {
      marginTop: '10px',
      background: theme.palette.success.light,
      borderRadius: '4px',
      padding: '0.5rem 3.5rem',
      textAlign: 'center',
      display: 'flex',
    },
  }),
)

function LoginComponent() {
  const classes = useStyles()

  return (
    <div className={classes.signDiv}>
      <Link to="/login" className={classes.signText}>
        Login
      </Link>
      <Typography variant="body2" className={classes.signText2}>
        or
      </Typography>
      <Link to="register" className={classes.signText}>
        Register Now
      </Link>
    </div>
  )
}
export default LoginComponent
