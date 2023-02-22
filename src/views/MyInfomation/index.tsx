import { useEffect } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
// external components
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import SidebarSmall from '../../components/Dashboard/SidebarSmall/Sidebar'
import DashHeader from '../../components/Dashboard/Header'
import { SidebarData } from './SidebarData'
import { useStyles } from './Style'
// import GoogleAuth from './Security/GoogleAuth'
import ChangeEmail from './Security/EmailVerification/ChangeEmail'
import EnableEmail from './Security/EmailVerification'
import ChangePassword from './Security/ChangePassword'
import Security from './Security'
import Payment from './Payment'
import Dashboard from './Dashboard'
import EnableSMSAuthenticator from './Security/EnableSMSAuthenticator'
import ChangeSMSAuthenticator from './Security/EnableSMSAuthenticator/ChangePhoneNumber'
import DeviceManagement from './Security/DeviceManagement'
import AccountActivityRecords from './Security/AccountActivityRecords'
import RemoveVerification from './Security/RemoveVerification'
import RemoveVerificationSuccess from './Security/RemoveVerificationSuccess'
// import AntiPhishingCode from './Security/AntiPhishingCode'
import { getSecurityInfo } from 'store/auth'
import { useAppDispatch } from 'store/hooks'
import jwt_decode from 'jwt-decode'

interface MyToken {
  userId: string
}

function MyInfomation() {
  let match = useRouteMatch()
  const classes = useStyles()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      const formData = new FormData()
      formData.append('user_id', decoded.userId)

      dispatch(getSecurityInfo(formData))
    }
  }, [dispatch])

  return (
    <div className={classes.container}>
      <DashHeader />
      <div className={classes.bodyContent}>
        <Sidebar data={SidebarData} />
        <SidebarSmall data={SidebarData} />
        <Switch>
          <Route exact path={`${match.path}/`} render={() => <Redirect to={`${match.path}/dashboard`} />} />
          {/* <Route exact path={`${match.path}/enable-google-authenticator`} component={GoogleAuth} /> */}
          <Route exact path={`${match.path}/dashboard`} component={Dashboard} />
          <Route exact path={`${match.path}/security`} component={Security} />
          <Route exact path={`${match.path}/payment`} component={Payment} />
          <Route exact path={`${match.path}/enable-sms-authenticator`} component={EnableSMSAuthenticator} />
          <Route exact path={`${match.path}/change-sms-authenticator`} component={ChangeSMSAuthenticator} />
          <Route exact path={`${match.path}/password`} component={ChangePassword} />
          <Route exact path={`${match.path}/change-email-authenticator`} component={ChangeEmail} />
          <Route exact path={`${match.path}/enable-email-authenticator`} component={EnableEmail} />
          <Route exact path={`${match.path}/security/device-management`} component={DeviceManagement} />
          <Route exact path={`${match.path}/security/account-activity`} component={AccountActivityRecords} />
          <Route exact path={`${match.path}/remove-email-authenticator`} component={RemoveVerification} />
          <Route exact path={`${match.path}/remove-sms-authenticator`} component={RemoveVerification} />
          <Route
            exact
            path={`${match.path}/security/remove-email-verification`}
            component={RemoveVerificationSuccess}
          />
          <Route
            exact
            path={`${match.path}/security/remove-phone-verification`}
            component={RemoveVerificationSuccess}
          />
          {/* <Route exact path={`${match.path}/security/anti-phishing-code`} component={AntiPhishingCode} /> */}
        </Switch>
      </div>
    </div>
  )
}

export default MyInfomation
