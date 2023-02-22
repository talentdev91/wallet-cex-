import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { useStyles } from '../Style'
import CloseIcon from '@material-ui/icons/Close'
import { ToEmailSimplify } from 'utils/stringUtils'
import clsx from 'clsx'

interface MyToken {
  email: string
}

interface DrawMenuProps {
  getCloseState: (isClosed: boolean) => void
}

function DrawMenu({ getCloseState }: DrawMenuProps) {
  const classes = useStyles()

  const logOut = () => {
    localStorage.removeItem('jwtToken')
    window.location.reload()
  }

  const [userEmail, setUserEmail] = React.useState('')

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setUserEmail(decoded.email)
    }
  }, [])

  return (
    <div className={classes.drawManuSide}>
      <div className={classes.closeDiv}>
        <CloseIcon onClick={() => getCloseState(false)} className={classes.closeIcon} />
      </div>
      <div className={classes.email}>
        <span className={classes.fs20}>{ToEmailSimplify(userEmail)}</span>
      </div>
      <div className={classes.drawLink}>
        <Link to="/my/dashboard" style={{ textDecoration: 'none' }}>
          <span className={classes.drawText}>
            <i className={clsx('icon-dashboard', classes.fs28)} />
            Dashboard
          </span>
        </Link>
      </div>
      <div className={classes.drawLink}>
        <Link to="/my/security" style={{ textDecoration: 'none' }}>
          <span className={classes.drawText}>
            <i className={clsx('icon-security', classes.fs28)} />
            Security
          </span>
        </Link>
      </div>
      <div className={classes.drawLink}>
        <div onClick={() => logOut()} style={{ textDecoration: 'none' }}>
          <span className={classes.drawText}>
            <i className={clsx('icon-logout', classes.fs28)} />
            Log Out
          </span>
        </div>
      </div>
    </div>
  )
}

export default DrawMenu
