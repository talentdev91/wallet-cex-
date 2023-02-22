import { useState } from 'react'
import clsx from 'clsx'
import { Link, useHistory } from 'react-router-dom'
// material-ui
import { Box, Typography } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
// components
import SecurityCard from 'components/Dashboard/SecurityCard'
import ActionButton from 'components/Dashboard/ActionButton'
import SecurityHeaderLinks from 'components/Dashboard/SecurityHeaderLinks'
// import SecurityVerificationModal from 'components/Dashboard/SecurityVerificationModal'
// import WithdrawalModal from 'components/Dashboard/WithdrawalModal'
import VerificationChangeModal from 'components/Dashboard/VerificationChangeModal'
import VerificationRemoveModal from 'components/Dashboard/VerificationRemoveModal'
import VerificationRemoveTipModal from 'components/Dashboard/VerificationRemoveTipModal'
import { useAppSelector } from 'store/hooks'
import { selectSecurityInfo } from 'store/auth/selectors'
import SecurityHeaderIcon from 'assets/image/security-header.svg'
import { ToPhoneNumberSimplify, ToEmailSimplify } from 'utils/stringUtils'
import { timestampToDate } from 'common/utils'
// style
import { useStyles } from 'components/Dashboard/Style'

function Security() {
  const classes = useStyles()
  // const [securityVerificationModalopen, setSecurityVerificationModalOpen] = useState(false)
  // const [withdrawalModalopen, setWithdrawalModalopen] = useState(false)
  const [verificationRemoveModalState, setVerificationRemoveModalState] = useState({ open: false, type: '' })
  const [verificationChangeModalState, setVerificationChangeModalState] = useState({ open: false, type: '' })
  const [verificationRemoveTipModalState, setVerificationRemoveTipModalState] = useState({ open: false, type: '' })

  const history = useHistory()
  const securityInfo = useAppSelector(selectSecurityInfo)

  return (
    <Box className={classes.container}>
      <Box className={classes.securityContainerHeader}>
        <Box display="flex" justifyContent="space-between" alignItems="center" maxWidth="1136px" width="100%">
          <Box>
            <Typography className={classes.securityTitle}>Security</Typography>
            <Box className={classes.securityHeaderLinksBox}>
              <SecurityHeaderLinks
                isEnable={securityInfo.EmailVerify === 1 && securityInfo.PhoneVerify === 1 ? true : false}
                linkTitle="Two-Factor Authentication (2FA)"
                url="/"
              />
              {/* <SecurityHeaderLinks isEnable={false} linkTitle="Identity Verification" url="/" />
              <SecurityHeaderLinks isEnable={false} linkTitle="Anti-Phishing Code" url="/" />
              <SecurityHeaderLinks isEnable={false} linkTitle="Withdrawal Whitelist" url="/" /> */}
            </Box>
          </Box>
          <img src={SecurityHeaderIcon} alt="icon" />
        </Box>
      </Box>
      <Box className={classes.securityContainerBody}>
        <Box maxWidth="1136px" width="100%">
          {securityInfo.EmailVerify !== 1 ||
            (securityInfo.PhoneVerify !== 1 && (
              <Box className={classes.securityNotificationContainer}>
                <Typography className={classes.securityNotification}>
                  To increase your account security, it is recommended that you enable 2FA, including Dongle/Google
                  authenticator.
                </Typography>
                <Box className={classes.securityNotificationLinkBox}>
                  <Link to="/my/enable-google-authenticator" className={classes.securityNotificationLink}>
                    Enable Dongle/Google Authenticator Now
                  </Link>
                  <ArrowForwardIosIcon style={{ fontSize: '20px', color: '#c99400', marginLeft: '4px' }} />
                </Box>
              </Box>
            ))}

          <Box id="Two-Factor Authentication (2FA)" mb="48px">
            <Typography className={classes.paragraphTitle}>Two-Factor Authentication (2FA)</Typography>
            {/* <SecurityCard
              icon={
                <i className="icon-security-key fs24">
                  <i className="path1 fontStyle"></i>
                  <i className="path2 fontStyle"></i>
                  <i className="path3 yellow fontStyle"></i>
                </i>
              }
              title="Security Key"
              description={
                <Box>
                  <Typography className={classes.securityCardInfoText}>
                    Protect your account with a security key (e.g. Yubikey).
                  </Typography>
                </Box>
              }
              isEnable={false}
              statusValue="Unset"
              controlButtons={
                <ActionButton
                  type="normal"
                  className={classes.securityActionButton}
                  onClick={handleSecurityVerificationModalOpen}
                >
                  Enable
                </ActionButton>
              }
            />

            <SecurityCard
              icon={
                <i className="icon-authenticator  fs24">
                  <i className="path1 yellow  fontStyle" />
                  <i className="path2 fontStyle" />
                </i>
              }
              title="Binance/Google Authenticator (Recommended)"
              description={
                <Box>
                  <Typography className={classes.securityCardInfoText}>
                    Protect your account and transactions.
                    <br />
                    <Link to="/">Having trouble?</Link>
                  </Typography>
                </Box>
              }
              isEnable={false}
              statusValue="Unset"
              controlButtons={
                <ActionButton
                  type="normal"
                  className={classes.securityActionButton}
                  onClick={() => history.push('/my/enable-google-authenticator')}
                >
                  Enable
                </ActionButton>
              }
            /> */}

            <SecurityCard
              icon={
                <i className="icon-phone-verify fs24">
                  <i className="path1 yellow  fontStyle" />
                  <i className="path2 fontStyle" />
                </i>
              }
              title="Phone Number Verification"
              description={
                <Box>
                  <Typography className={classes.securityCardInfoText}>
                    Protect your account and transactions.
                  </Typography>
                </Box>
              }
              isEnable={securityInfo.PhoneVerify === 1 ? true : false}
              statusValue={securityInfo.PhoneVerify === 1 ? ToPhoneNumberSimplify(securityInfo.PhoneNumber) : 'Unset'}
              controlButtons={
                securityInfo.PhoneVerify === 1 ? (
                  <>
                    <ActionButton
                      type="normal"
                      className={clsx(classes.spacing2, classes.securityActionButton)}
                      onClick={() => setVerificationChangeModalState({ open: true, type: 'phone-change' })}
                    >
                      Change
                    </ActionButton>
                    <ActionButton
                      type="normal"
                      className={classes.securityActionButton}
                      onClick={
                        securityInfo.EmailVerify === 0
                          ? () => setVerificationRemoveTipModalState({ open: true, type: 'phone-remove' })
                          : () => setVerificationRemoveModalState({ open: true, type: 'phone-remove' })
                      }
                    >
                      Remove
                    </ActionButton>
                  </>
                ) : (
                  <ActionButton
                    type="normal"
                    className={classes.securityActionButton}
                    onClick={() => history.push('/my/enable-sms-authenticator')}
                  >
                    Enable
                  </ActionButton>
                )
              }
            />
            <SecurityCard
              icon={
                <i className="icon-email-verify fs24">
                  <i className="path1 fontStyle" />
                  <i className="path2 yellow fontStyle" />
                </i>
              }
              title="Email Address Verification"
              description={
                <Box>
                  <Typography className={classes.securityCardInfoText}>
                    Protect your account and transactions.
                  </Typography>
                </Box>
              }
              isEnable={securityInfo.EmailVerify === 1 ? true : false}
              statusValue={securityInfo.EmailVerify === 1 ? ToEmailSimplify(securityInfo.Email) : 'Unset'}
              controlButtons={
                securityInfo.EmailVerify === 1 ? (
                  <>
                    <ActionButton
                      type="normal"
                      className={clsx(classes.spacing2, classes.securityActionButton)}
                      onClick={() => setVerificationChangeModalState({ open: true, type: 'email-change' })}
                    >
                      Change
                    </ActionButton>
                    <ActionButton
                      type="normal"
                      className={classes.securityActionButton}
                      onClick={
                        securityInfo.PhoneVerify === 0
                          ? () => setVerificationRemoveTipModalState({ open: true, type: 'email-remove' })
                          : () => setVerificationRemoveModalState({ open: true, type: 'email-remove' })
                      }
                    >
                      Remove
                    </ActionButton>
                  </>
                ) : (
                  <ActionButton
                    type="normal"
                    className={classes.securityActionButton}
                    onClick={() => history.push('/my/enable-email-authenticator')}
                  >
                    Enable
                  </ActionButton>
                )
              }
            />
          </Box>
          <Box id="Devices and Activities" mb="48px">
            <Typography className={classes.paragraphTitle}>Devices and Activities</Typography>
            <SecurityCard
              icon={
                <i className="icon-login-active fs24">
                  <i className="path1 fontStyle" />
                  <i className="path2 yellow fontStyle" />
                  <i className="path3 yellow fontStyle" />
                  <i className="path4 yellow fontStyle" />
                </i>
              }
              title="Login Password"
              description={
                <Box>
                  <Typography className={classes.securityCardInfoText}>
                    Login password is used to log in to your account.
                  </Typography>
                </Box>
              }
              controlButtons={
                <ActionButton
                  type="normal"
                  className={classes.securityActionButton}
                  onClick={() => history.push('/my/password')}
                >
                  Change
                </ActionButton>
              }
            />

            {/* <SecurityCard
              icon={
                <i className="icon-withdrawal fs24">
                  <i className="path1 yellow fontStyle" />
                  <i className="path2 fontStyle" />
                  <i className="path3 fontStyle" />
                </i>
              }
              title="Withdrawal Whitelist"
              description={
                <Box>
                  <Typography className={classes.securityCardInfoText}>
                    When this function is turned on, your account will only be able to withdraw to whitelisted
                    withdrawal addresses.
                    <br />
                    <Link to="/">Address Management</Link>
                  </Typography>
                </Box>
              }
              isEnable={false}
              statusValue="OFF"
              controlButtons={
                <ActionButton
                  type="normal"
                  className={classes.securityActionButton}
                  onClick={handleWithdrawalModalOpen}
                >
                  Enable
                </ActionButton>
              }
            />

            <SecurityCard
              icon={
                <i className="icon-antiphishing fs24">
                  <i className="path1 yellow fontStyle" />
                  <i className="path2 fontStyle" />
                </i>
              }
              title="Anti-Phishing Code"
              description={
                <Box>
                  <Typography className={classes.securityCardInfoText}>
                    Protect your account from phishing attempts and ensure that your notification emails are from
                    Binance only.
                  </Typography>
                </Box>
              }
              isEnable={false}
              statusValue="OFF"
              controlButtons={
                <Link to="/my/security/anti-phishing-code" style={{ textDecoration: 'none' }}>
                  <ActionButton type="normal" className={classes.securityActionButton}>
                    Enable
                  </ActionButton>
                </Link>
              }
            /> */}
          </Box>
          <Box id="Advanced Security" mb="48px">
            <Typography className={classes.paragraphTitle}>Advanced Security</Typography>
            <SecurityCard
              icon={
                <i className="icon-device-management fs24">
                  <i className="path1 yellow fontStyle" />
                  <i className="path2 fontStyle" />
                </i>
              }
              title="Device Management"
              description={
                <Box>
                  <Typography className={classes.securityCardInfoText}>
                    Manage devices allowed to access your account.
                  </Typography>
                </Box>
              }
              controlButtons={
                <Link to="/my/security/device-management" style={{ textDecoration: 'none' }}>
                  <ActionButton type="normal" className={classes.securityActionButton}>
                    Manage
                  </ActionButton>
                </Link>
              }
            />
            <SecurityCard
              icon={
                <i className="icon-account-management fs24">
                  <i className="path1 yellow fontStyle" />
                  <i className="path2 fontStyle" />
                </i>
              }
              title="Account Activity"
              description={
                <Box>
                  <Typography className={classes.securityCardInfoText}>
                    Last login: {timestampToDate(securityInfo.LastLogin)} Suspicious account activity?
                    {/* <Typography to="/" style={{ marginLeft: '8px' }}>
                      Disable account
                    </Typography> */}
                  </Typography>
                </Box>
              }
              controlButtons={
                <ActionButton
                  type="normal"
                  className={classes.securityActionButton}
                  onClick={() => history.push('/my/security/account-activity')}
                >
                  More
                </ActionButton>
              }
            />
          </Box>
        </Box>
      </Box>

      {/* <SecurityVerificationModal
        handleClose={handleSecurityVerificationModalClose}
        open={securityVerificationModalopen}
      /> */}

      {/* <WithdrawalModal handleClose={handleWithdrawalModalClose} open={withdrawalModalopen} /> */}

      <VerificationRemoveModal
        handleClose={() =>
          setVerificationRemoveModalState((previousState) => {
            return { ...previousState, open: false }
          })
        }
        state={verificationRemoveModalState}
      />

      <VerificationChangeModal
        handleClose={() =>
          setVerificationChangeModalState((previousState) => {
            return { ...previousState, open: false }
          })
        }
        state={verificationChangeModalState}
      />

      <VerificationRemoveTipModal
        handleClose={() =>
          setVerificationRemoveTipModalState((previousState) => {
            return { ...previousState, open: false }
          })
        }
        state={verificationRemoveTipModalState}
      />
    </Box>
  )
}

export default Security
