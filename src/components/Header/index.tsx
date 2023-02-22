/** @format */

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import clsx from 'clsx'
// material-ui
import { AppBar, Box, Divider, Toolbar, Typography, IconButton, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
// external components
import LanguageCurrencySelectDialog from './components/LanguageCurrencySelectDialog'
import HelpDialog from './components/HelpDialog'
import DrawMenu from './components/DrawMenu'
import Statistic from './components/Statistic'
import { ToPhoneNumberSimplify } from 'utils/stringUtils'
// style
import { useStyles, AuthMenu } from './Style'
// icons
import LightActiveIcon from '../../assets/image/LightActiveIcon.svg'
import DarkActiveIcon from '../../assets/image/DarkActiveIcon.svg'
import HelpIcon from '../../assets/image/support/help.svg'
import User from '../../assets/image/admin.svg'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
// utils
import { ToEmailSimplify } from '../../utils/stringUtils'

interface MyToken {
  email: string
  phone: string
}

function Header() {
  const classes = useStyles()
  const [lanugageCurrencyOpen, setLanugageCurrencyOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const [token, setToken] = useState('')
  const [value, setValue] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState('')

  // const darkTheme = "darkTheme";
  // const lightTheme = "lightTheme";
  // const curThemeName = localStorage.getItem('appTheme') || 'darkTheme'
  // const setThemeName = React.useContext(ThemeContext);
  // const [theme, setTheme] = useState(curThemeName)
  let theme = 'darkTheme'

  // const handleToggleTheme = () => {
  //   if (theme === lightTheme) {
  //     setThemeName(darkTheme);
  //     setTheme(darkTheme);
  //   } else {
  //     setThemeName(lightTheme);
  //     setTheme(lightTheme);
  //   }
  // };

  const handleClickWallet = () => {
    if (localStorage.jwtToken) {
      window.location.href = '/wallet'
    } else {
      window.location.href = '/login'
    }
  }

  const handleClickDashboard = () => {
    if (localStorage.jwtToken) {
      window.location.href = '/my'
    }
  }

  const handleClickLanguageCurrency = (tabType: number) => {
    setLanugageCurrencyOpen(true)
    setValue(tabType)
  }
  const handleClickLanguageCurrencyClose = (isOpen: boolean) => {
    setLanugageCurrencyOpen(isOpen)
  }

  const logOut = () => {
    localStorage.removeItem('jwtToken')
    window.location.reload()
  }

  const toggleDrawer = (e: any) => {
    setOpenMenu(e)
  }

  // let initLanguage, initCurrency
  // const currentLanguage = localStorage.getItem('activeLanguage')
  // const currentCurrency = localStorage.getItem('activeCurrency')

  // if (currentLanguage === null) {
  //   initLanguage = 'English'
  // } else {
  //   initLanguage = currentLanguage
  // }

  // if (currentCurrency === null) {
  //   initCurrency = 'USD'
  // } else {
  //   initCurrency = currentCurrency
  // }

  // const [language, setLanguage] = useState(initLanguage)
  // const [currency, setCurrency] = useState(initCurrency)

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      if (decoded.email !== '') {
        setToken(decoded.email)
      } else {
        setPhoneNumber(decoded.phone)
      }
    }
  }, [])

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar
        className={classes.toolbar}
        style={{
          justifyContent: `${window.location.pathname === '/orderbook' && 'space-between'}`,
        }}
      >
        <Box mr={3} style={{ marginTop: '5px' }}>
          <img src="/logo.svg" alt="logo" width={180} />
        </Box>

        {window.location.pathname !== '/orderbook' && (
          <Box className={classes.switchVisible}>
            <Statistic />
          </Box>
        )}

        <Box px={2} display="flex" alignItems="center">
          {localStorage.jwtToken ? (
            <AuthMenu
              title={
                <div style={{ marginTop: '5px' }}>
                  <div className={classes.email}>
                    {token !== '' ? ToEmailSimplify(token) : ToPhoneNumberSimplify(phoneNumber)}
                  </div>

                  <div className={classes.walover1}>
                    <div className={classes.vipDiv}>
                      <img src="images/jewel.svg" className={classes.vipIcon} />
                      <div className={classes.vipText}>VIP 0</div>
                    </div>

                    <div className={classes.verifyDiv}>
                      <img src="images/verify.svg" className={classes.verifyIcon} />
                      <div className={classes.verifyText}>Unverified</div>
                    </div>
                  </div>

                  <div className={classes.walover} onClick={() => handleClickDashboard()}>
                    <PermIdentityIcon className={classes.walletIcon} />
                    <div className={classes.walletText}>Dashboard</div>
                  </div>

                  <div className={classes.splitbar} />
                  <div className={classes.walover} onClick={() => handleClickWallet()}>
                    <AccountBalanceWalletIcon className={classes.walletIcon} />
                    <div className={classes.walletText}>Wallet</div>
                  </div>

                  <div className={classes.splitbar} />

                  <div className={classes.walover} onClick={() => logOut()}>
                    <ExitToAppIcon className={classes.walletIcon} />
                    <div className={classes.walletText}>Log Out</div>
                  </div>
                </div>
              }
              interactive
              placement="bottom-start"
            >
              <img src={User} alt="icon" className={classes.accountIcon} />
            </AuthMenu>
          ) : (
            <div style={{ display: 'flex' }}>
              <Link to="/login" className={clsx(classes.link, classes.disappear)}>
                <Typography variant="body2" className={clsx(classes.fontColor1, classes.hover)}>
                  Log In
                </Typography>
              </Link>

              <Box width="12px" />

              <Link to="/register" className={clsx(classes.link, classes.register, classes.disappear)}>
                <Typography variant="body2" className={classes.fontColor2}>
                  Register
                </Typography>
              </Link>
            </div>
          )}

          <Typography
            variant="body2"
            className={clsx(classes.fontColor1, classes.hover, classes.space, classes.disappear)}
            onClick={() => handleClickLanguageCurrency(0)}
          >
            {/* {language} */}
            English
          </Typography>

          <Divider orientation="vertical" flexItem className={clsx(classes.disappear, classes.divider2)} />

          <Typography
            variant="body2"
            className={clsx(classes.fontColor1, classes.hover, classes.space, classes.disappear)}
            onClick={() => handleClickLanguageCurrency(1)}
          >
            {/* {currency} */}
            USD
          </Typography>

          <LanguageCurrencySelectDialog
            open={lanugageCurrencyOpen}
            value={value}
            setValue={(value) => setValue(value)}
            setOpen={handleClickLanguageCurrencyClose}
            // setLanguage={(language) => setLanguage(language)}
            // setCurrency={(currency) => setCurrency(currency)}
          />

          <img src={HelpIcon} alt="logo" onClick={() => setOpen(true)} className={classes.helpIcon} />

          <HelpDialog open={open} handleClose={() => setOpen(false)} />

          <img
            src={theme === 'lightTheme' ? DarkActiveIcon : LightActiveIcon}
            alt="icon"
            // onClick={handleToggleTheme}
            className={clsx(classes.disappear, classes.themeIcon2)}
          />

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            className={classes.menuIconButton}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>

          <Drawer anchor="right" open={openMenu === true} onClose={() => toggleDrawer(false)}>
            <DrawMenu getCloseState={toggleDrawer} setOpenCurrency={handleClickLanguageCurrency} />
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
