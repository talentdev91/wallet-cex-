import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

//components
import Button from '@material-ui/core/Button'

interface ErrorProps {
  message: string
  refresh: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100vh',
      justifyContent: 'center',
      paddingBottom: '30px',
      backgroundColor: '#CEE9EC',
    },
    btn: {
      backgroundColor: 'blue',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'white',
      '&:hover': {
        color: 'black',
      },
    },
    title: {
      marginTop: '0px',
      color: '#4ba4d9',
      textAlign: 'center',
      paddingTop: '30px',
    },
    error: {
      fontSize: '25px',
      color: 'red',
      textAlign: 'center',
      marginTop: '0px',
    },
    bear: {
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    },
    btnDiv: {
      textAlign: 'center',
    },
  }),
)

function GlobalError({ message, refresh }: ErrorProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>I am sorry, I ate errors.</h1>
      <p className={classes.error}>Error Name:&nbsp;{message}</p>
      <br />
      <div className={classes.btnDiv}>
        <Button onClick={refresh} className={classes.btn}>
          Try again
        </Button>
      </div>
      <div className={classes.bear}>
        <span>
          <img src="/error.png" alt="error" />
        </span>
      </div>
    </div>
  )
}
export default GlobalError
