import { useState } from 'react'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'
import { Box, Typography, Avatar, Tooltip } from '@material-ui/core'

import ConnectTwitterAccountModal from 'components/Dashboard/ConnectTwitterAccountModal'
import { useStyles } from '../style'
import VipIcon from 'assets/image/Vip.svg'
import { useAppSelector } from 'store/hooks'
import { selectSecurityInfo } from 'store/auth/selectors'
import { ToEmailSimplify, ToPhoneNumberSimplify } from 'utils/stringUtils'
import { timestampToDate } from 'common/utils'

interface MyToken {
  email: string
  userId: string
}

function Header() {
  const classes = useStyles()

  const securityInfo = useAppSelector(selectSecurityInfo)

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Box className={classes.header}>
        <Avatar className={classes.avatar}>se</Avatar>
        <Box ml="16px">
          <Box className={classes.userInfoContainer}>
            <Box className={classes.userInfo}>
              <Typography className={classes.logedUserName}>
                {securityInfo.EmailVerify === 1 && ToEmailSimplify(securityInfo.Email)}
                {securityInfo.EmailVerify === 0 &&
                  securityInfo.PhoneVerify === 1 &&
                  ToPhoneNumberSimplify(securityInfo.PhoneNumber)}
              </Typography>
              <Typography className={classes.userId}>
                User ID:
                <span className={classes.userIdNumber}>
                  {localStorage.jwtToken ? jwt_decode<MyToken>(localStorage.jwtToken).userId : '0'}
                </span>
              </Typography>
            </Box>

            <Box display="flex" alignItems="end">
              <Link to="/my/dashboard" className={classes.vipLink}>
                <img
                  src={VipIcon}
                  alt="icon"
                  style={{ width: '16px', height: '16px', verticalAlign: 'bottom', marginRight: '4px' }}
                />
                VIP0
              </Link>
              <Link to="/my/dashboard" className={classes.verifyLink}>
                Verify
              </Link>
              <Typography className={classes.linkedLinkParagraph}>
                <i className="icon-twitter" style={{ fontSize: '20px' }} />
                <Tooltip
                  title={
                    <Box display="flex">
                      <Typography>You haven’t linked your Twitter account</Typography>
                      {/* <Typography className={classes.notLinkedConnect} onClick={() => setIsModalOpen(true)}>
                        connect
                      </Typography> */}
                    </Box>
                  }
                  interactive
                  arrow
                  classes={{ tooltip: classes.notLinkedTooltip, arrow: classes.notLinkedTooltipArrow }}
                >
                  <span>not linked</span>
                </Tooltip>
              </Typography>
            </Box>
          </Box>
          <Box className={classes.userLoginInfo}>
            <Typography style={{ marginRight: '8px' }}>
              Last login time {timestampToDate(securityInfo.LastLogin)}
            </Typography>
            <Typography>IP: {securityInfo.IPAddress}</Typography>
          </Box>
        </Box>
      </Box>
      <ConnectTwitterAccountModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Header
