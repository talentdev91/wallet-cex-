import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useStyles } from '../Style'
import CloseIcon from '@material-ui/icons/Close'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import { ToEmailSimplify } from 'utils/stringUtils'

interface MyToken {
  email: string
}

interface DrawMenuProps {
  getCloseState: (isClosed: boolean) => void
  setOpenCurrency: (isOpen: number) => void
}

function DrawMenu({ getCloseState, setOpenCurrency }: DrawMenuProps) {
  const classes = useStyles()
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
        <div onClick={() => setOpenCurrency(0)} style={{ textDecoration: 'none' }}>
          <span className={classes.drawText}>
            <LanguageOutlinedIcon />
            Language
          </span>
        </div>
      </div>
      <div className={classes.drawLink}>
        <div onClick={() => setOpenCurrency(0)} style={{ textDecoration: 'none' }}>
          <span className={classes.drawText}>
            <MonetizationOnOutlinedIcon />
            Currency
          </span>
        </div>
      </div>
    </div>
  )
}

export default DrawMenu
