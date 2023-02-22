import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { useStyles } from '../Style'
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import Wallet from '../../../assets/image/wallet.svg'
import Logout from '../../../assets/image/logout.svg'
import CloseIcon from '@material-ui/icons/Close'
//external

interface MyToken {
  email: string
}

interface DrawMenuProps {
  getCloseState: (isClosed: boolean) => void
  setOpenCurrency: (isOpen: number) => void
}

function DrawMenu({ getCloseState, setOpenCurrency }: DrawMenuProps) {
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

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setToken(decoded.email)
    }
  }, [])

  return (
    <div className={classes.drawManuSide}>
      <div className={classes.closeDiv}>
        <CloseIcon onClick={() => getCloseState(false)} className={classes.closeIcon} />
      </div>
      {localStorage.jwtToken ? (
        <div className={classes.drawLink}>
          <span className={classes.drawText}>{token?.replace(token.slice(2, 11), '***')}</span>
        </div>
      ) : (
        <div>
          <div className={classes.loginDiv}>
            <Link to="login" style={{ textDecoration: 'none', color: 'white' }}>
              <span>Log In</span>
            </Link>
          </div>
          <div className={classes.signupDiv}>
            <Link to="register" style={{ textDecoration: 'none', color: 'black' }}>
              <span>Register</span>
            </Link>
          </div>
        </div>
      )}

      <div className={classes.drawLink}>
        <Link to="/trade" style={{ textDecoration: 'none' }}>
          <AutorenewOutlinedIcon className={classes.drawIcon} />
          <span className={classes.drawText}>Trade</span>
        </Link>
      </div>
      <div className={classes.drawLink}>
        <span onClick={() => setOpenCurrency(0)} style={{ textDecoration: 'none' }}>
          <LanguageOutlinedIcon className={classes.drawIcon} />
          <span className={classes.drawText}>Language</span>
        </span>
      </div>
      <div className={classes.drawLink}>
        <span onClick={() => setOpenCurrency(0)} style={{ textDecoration: 'none' }}>
          <MonetizationOnOutlinedIcon className={classes.drawIcon} />
          <span className={classes.drawText}>Currency</span>
        </span>
      </div>
      {localStorage.jwtToken ? (
        <div>
          <div className={classes.drawLink}>
            <span>
              <span>
                <img src={Wallet} alt="icon" className={classes.drawIcon} />
              </span>
              <span onClick={() => handleClickWallet()} className={classes.drawText}>
                Wallet
              </span>
            </span>
          </div>
          <div className={classes.drawLink}>
            <span>
              <span>
                <img src={Logout} alt="icon" className={classes.drawIcon} />
              </span>
              <span onClick={() => logOut()} className={classes.drawText}>
                Log Out
              </span>
            </span>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default DrawMenu
