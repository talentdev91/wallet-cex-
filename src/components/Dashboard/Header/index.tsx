import { useState } from 'react'

import { AppBar, Box, Divider, Toolbar, Typography, IconButton, Drawer } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded'
import MenuIcon from '@material-ui/icons/Menu'

import { useStyles, AuthMenu } from './Style'
import { ToEmailSimplify, ToPhoneNumberSimplify } from '../../../utils/stringUtils'
import DrawMenu from './components/DrawMenu'
import DrawSetting from './components/DrawSetting'

import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import { useAppSelector } from 'store/hooks'
import { selectSecurityInfo } from 'store/auth/selectors'

function DashHeader() {
  const classes = useStyles()
  // const [lanugageCurrencyOpen, setLanugageCurrencyOpen] = useState(false)
  // const [value, setValue] = useState(0)
  const [openOrder, setOpenOrder] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openSetting, setOpenSetting] = useState(false)
  const history = useHistory()
  const securityInfo = useAppSelector(selectSecurityInfo)
  const handleHome = () => {
    history.push('/trade')
  }

  const logOut = () => {
    localStorage.removeItem('jwtToken')
    window.location.reload()
  }

  const handleClickLanguageCurrency = (tabType: number) => {
    // setLanugageCurrencyOpen(true)
    // setValue(tabType)
  }

  const toggleDrawerMenu = (e: any) => {
    setOpenMenu(e)
  }

  const toggleDrawerSetting = (e: any) => {
    setOpenSetting(e)
  }

  const handleLinkPage = (url: string) => {
    history.push(url)
  }

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box mr={3}>
          <img src="/logo.svg" alt="logo" width={150} height={35} onClick={handleHome} className={classes.closeIcon} />
        </Box>
        <Box display="flex" alignItems="center" className={classes.rightHeader}>
          <AuthMenu
            onOpen={() => setOpenOrder(true)}
            onClose={() => setOpenOrder(false)}
            title={
              <div>
                <div onClick={() => handleLinkPage('/my/orders/exchange/openorder')} className={classes.tipItem}>
                  <div>
                    <i className={'icon-spot-order-header'} />
                  </div>
                  <div
                    style={{
                      marginLeft: '12px',
                      alignSelf: 'center',
                    }}
                  >
                    Spot Order
                  </div>
                </div>
                <div onClick={() => handleLinkPage('/my/orders/exchange/p2p-order')} className={classes.tipItem}>
                  <div>
                    <i className={'icon-p2p-order-header'} />
                  </div>
                  <div
                    style={{
                      marginLeft: '12px',
                      alignSelf: 'center',
                    }}
                  >
                    P2P order
                  </div>
                </div>
                <div onClick={() => handleLinkPage('/my/orders/exchange/buysell-history')} className={classes.tipItem}>
                  <div>
                    <i className={'icon-buycryptohistory-header'} />
                  </div>
                  <div
                    style={{
                      marginLeft: '12px',
                      alignSelf: 'center',
                    }}
                  >
                    Buy Crypto History
                  </div>
                </div>
                <div
                  onClick={() => handleLinkPage('/my/orders/convert/history')}
                  className={clsx(classes.tipItemEnd, classes.tipItem)}
                >
                  <div>
                    <i className={'icon-convert-history-header'} />
                  </div>
                  <div
                    style={{
                      marginLeft: '12px',
                      alignSelf: 'center',
                    }}
                  >
                    Convert History
                  </div>
                </div>
              </div>
            }
            interactive
            placement="bottom-start"
          >
            <Typography
              variant="body2"
              className={clsx(classes.ordersNav, classes.disappear)}
              onClick={() => handleClickLanguageCurrency(0)}
            >
              {/* {language} */}
              Orders
              {openOrder ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
            </Typography>
          </AuthMenu>
          <AuthMenu
            title={
              <div>
                <div className={classes.email}>
                  {securityInfo.EmailVerify
                    ? ToEmailSimplify(securityInfo.Email)
                    : securityInfo.PhoneVerify
                    ? ToPhoneNumberSimplify(securityInfo.PhoneNumber)
                    : ''}
                </div>
                <div className={classes.walover1}>
                  <div className={classes.vipDiv}>
                    <img src="/images/jewel.svg" className={classes.vipIcon} alt="jewel" />
                    <div className={classes.vipText}>VIP 0</div>
                  </div>

                  <div className={classes.verifyDiv}>
                    <img src="/images/verify.svg" className={classes.verifyIcon} alt="card" />
                    <div className={classes.verifyText}>
                      {securityInfo.EmailVerify && securityInfo.PhoneVerify ? 'Verified' : 'Unverified'}
                    </div>
                  </div>
                </div>
                <div className={classes.tipItem} onClick={() => handleLinkPage('/my/dashboard')}>
                  <div>
                    <i className={clsx('icon-dashboard', classes.fs28)} />
                  </div>
                  <div
                    style={{
                      marginLeft: '12px',
                      alignSelf: 'center',
                    }}
                  >
                    Dashboard
                  </div>
                </div>
                <div className={classes.tipItem} onClick={() => handleLinkPage('/my/security')}>
                  <div>
                    <i className={clsx('icon-security', classes.fs28)} />
                  </div>
                  <div
                    style={{
                      marginLeft: '12px',
                      alignSelf: 'center',
                    }}
                  >
                    Security
                  </div>
                </div>
                <div className={classes.logoutover} onClick={() => logOut()}>
                  <div className={clsx(classes.wallet, classes.tipItemEnd)}>
                    <div>
                      <i className={'icon-logout'} />
                    </div>
                    <div
                      style={{
                        marginLeft: '12px',
                        alignSelf: 'center',
                      }}
                    >
                      Log Out
                    </div>
                  </div>
                </div>
              </div>
            }
            interactive
            placement="bottom-start"
          >
            <AccountCircleOutlinedIcon className={clsx(classes.accountIcon, classes.disappear)} />
          </AuthMenu>
          <Typography
            variant="body2"
            className={clsx(classes.fontColor1, classes.hover, classes.space, classes.disappear)}
            onClick={() => handleClickLanguageCurrency(0)}
          >
            {/* {language} */}
            English
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            style={{
              backgroundColor: 'white',
              height: '14px',
              alignSelf: 'center',
            }}
            className={classes.disappear}
          />
          <Typography
            variant="body2"
            className={clsx(classes.fontColor1, classes.hover, classes.space, classes.disappear)}
            onClick={() => handleClickLanguageCurrency(1)}
          >
            USD
          </Typography>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawerMenu(true)}
            className={classes.menuIconButton}
          >
            <AccountCircleOutlinedIcon className={classes.accountIcon} />
          </IconButton>

          <Drawer anchor="right" open={openMenu === true} onClose={() => toggleDrawerMenu(false)}>
            <DrawMenu getCloseState={toggleDrawerMenu} />
          </Drawer>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawerSetting(true)}
            className={classes.menuIconButton}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>

          <Drawer anchor="right" open={openSetting === true} onClose={() => toggleDrawerSetting(false)}>
            <DrawSetting getCloseState={toggleDrawerSetting} setOpenCurrency={handleClickLanguageCurrency} />
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default DashHeader
