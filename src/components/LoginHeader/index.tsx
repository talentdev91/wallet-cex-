import React from 'react'
//material-ui
import { Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import DarkActiveIcon from '../../assets/image/DarkActiveIcon.svg'
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft'
//external;
import { useStyles } from './Style'

function LoginHeader() {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box mr={3}>
          <img src="/logo.svg" alt="logo" width={150} height={35} />
        </Box>
        <Box px={2} display="flex" alignItems="center">
          <Link to="/" className={classes.backDiv}>
            <SubdirectoryArrowLeftIcon className={classes.backIcon} />
            <Typography className={classes.back}>Trade</Typography>
          </Link>
          <img
            src={DarkActiveIcon}
            alt="icon"
            // onClick={handleToggleTheme}
            className={classes.disappear}
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default LoginHeader
