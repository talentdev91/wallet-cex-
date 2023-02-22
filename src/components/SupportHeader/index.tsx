import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import jwt_decode from 'jwt-decode'
//material-ui
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
//external;
import { useStyles } from './Style'
import User from '../../assets/image/admin.svg'
import Wallet from '../../assets/image/wallet.svg'
import Logout from '../../assets/image/logout.svg'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { AuthMenu } from './Style'

interface MyToken {
  email: string
}

function SupportHeader() {
  const classes = useStyles()

  const handleClickWallet = () => {
    if (localStorage.jwtToken) {
      window.location.href = '/wallet'
    } else {
      window.location.href = '/login'
    }
  }

  const logOut = () => {
    localStorage.removeItem('jwtToken')
    window.location.reload()
  }

  const [token, setToken] = React.useState('')

  React.useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setToken(decoded.email)
    }
  }, [])

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box mr={3} style={{ marginTop: '5px' }}>
          <img src="/logo.svg" alt="logo" width={180} />
        </Box>

        <Box px={2} display="flex" alignItems="center">
          {localStorage.jwtToken ? (
            <>
              <Link to="/" className={classes.backDiv}>
                <ArrowBackIosIcon className={classes.backIcon} />
                <Typography className={classes.back}>Trade</Typography>
              </Link>
              <AuthMenu
                title={
                  <div style={{ marginTop: '18px' }}>
                    <div className={classes.email}>{token}</div>
                    <div className={classes.walover} onClick={() => handleClickWallet()}>
                      <div className={classes.wallet}>
                        <div>
                          <img src={Wallet} alt="icon" />
                        </div>
                        <div
                          style={{
                            marginLeft: '12px',
                            alignSelf: 'center',
                          }}
                        >
                          Wallet
                        </div>
                      </div>
                    </div>
                    <div className={classes.walover} onClick={() => logOut()}>
                      <div className={classes.wallet}>
                        <div>
                          <img src={Logout} alt="icon" />
                        </div>
                        <div style={{ marginLeft: '12px', alignSelf: 'center' }}>Log Out</div>
                      </div>
                    </div>
                  </div>
                }
                interactive
                placement="bottom-start"
              >
                <img src={User} alt="icon" style={{ cursor: 'pointer', marginLeft: '10px' }} />
              </AuthMenu>
            </>
          ) : (
            <div style={{ display: 'flex' }}>
              <Link to="/" className={classes.backDiv}>
                <ArrowBackIosIcon className={classes.backIcon} />
                <Typography className={classes.back}>Trade</Typography>
              </Link>
              <Link to="/login" className={clsx(classes.link, classes.disappear)}>
                <Typography variant="body2" className={clsx(classes.fontColor1, classes.hover)}>
                  Log In
                </Typography>
              </Link>
              <Box width="12px" />
              <Link to="/register" className={clsx(classes.link, classes.register, classes.disappear3)}>
                <Typography variant="body2" className={classes.fontColor2}>
                  Register
                </Typography>
              </Link>
            </div>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default SupportHeader
