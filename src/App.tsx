import React from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
//external components
import CompletePassword from './views/Auth/CompleteResetPassword'
import RegisterConfirm from './views/Confirm/registerConfirm'
import ForgotConfirm from './views/Confirm/forgotConfirm'
import ConfirmDevice from './views/Auth/ConfirmDevice'
import ResetPassword from './views/Auth/ResetPassword'
import OrderBookDetail from './views/OrderBookDetail'
import PhoneVerify from './views/Auth/PhoneVerify'
import EmailVerify from './views/Auth/EmailVerify'
import Forgot from './views/Auth/ForgotPassword'
import SupportHelp from './views/Support/Main'
import Register from './views/Auth/Register'
import Login from './views/Auth/Login'
import SecurityVerification from './views/Auth/SecurityVerification'
import Wallet from './views/Finance'
import Trade from './views/Trade'
import useWSClientHandle from './hooks/useWSClientHandle'
import Alert from './components/Alert'
import PrivateRoute from './PrivateRoute'
//language
import { default as EnglishTexts } from './utils/translations/en.json'
import { default as ChineseTexts } from './utils/translations/ch.json'
//config
import { wsClient } from './config/config'
// import WS from 'ws';

//help_article
import CryptoWithdrawTitle from './views/Support/Article/DepositWithraw/CryptoWithdraw'
import CryptoDepositTitle from './views/Support/Article/DepositWithraw/CryptoDeposit'
import FiatWithdrawTitle from './views/Support/Article/DepositWithraw/FiatWithdraw'
import FiatDepositTitle from './views/Support/Article/DepositWithraw/FiatDeposit'
import RegisterTitle from './views/Support/Article/Account/Register'
import TradeSpotTitle from './views/Support/Article/Spot/TradeSpot'
import ForgotTitle from './views/Support/Article/Account/Forgot'
import LoginTitle from './views/Support/Article/Account/Login'

//Dashboard
import Orders from './views/Orders'
import MyInfomation from './views/MyInfomation'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: EnglishTexts,
      },
      ch: {
        translation: ChineseTexts,
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  })

if (window.innerWidth < 768) {
  localStorage.setItem('appTheme', 'darkTheme')
}

function App() {
  const { handleMessage, handleError, handleOpen, handleClose } = useWSClientHandle()

  React.useEffect(() => {
    wsClient.onopen = handleOpen
    wsClient.onerror = handleError
    wsClient.onmessage = handleMessage
    wsClient.onclose = handleClose
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/trade" />
        </Route>
        <Route exact path="/trade" component={Trade} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register/confirm/:jwtToken" component={RegisterConfirm} />
        <Route exact path="/security-verification" component={SecurityVerification} />
        <Route exact path="/forgot_password/confirm/:jwtToken" component={ForgotConfirm} />
        <Route exact path="/reset-password" component={Forgot} />
        <Route exact path="/verification-new-register/mobile" component={PhoneVerify} />
        <Route exact path="/verification-new-register/email" component={EmailVerify} />
        <Route exact path="/reset-password/password" component={ResetPassword} />
        <Route exact path="/confirm-new-device" component={ConfirmDevice} />
        <Route exact path="/complete-password" component={CompletePassword} />
        {localStorage.jwtToken && <Route exact path="/wallet" component={Wallet} />}
        <Route exact path="/wallet" component={localStorage.jwtToken ? Wallet : Login} />
        <Route exact path="/orderbook/" component={OrderBookDetail} />
        <Route exact path="/faq" component={SupportHelp} />

        {/*Article*/}
        <Route exact path="/support/faq/s001" component={RegisterTitle} />
        <Route exact path="/support/faq/s002" component={LoginTitle} />
        <Route exact path="/support/faq/s003" component={ForgotTitle} />
        <Route exact path="/support/faq/s004" component={TradeSpotTitle} />
        <Route exact path="/support/faq/s005" component={FiatDepositTitle} />
        <Route exact path="/support/faq/s006" component={CryptoDepositTitle} />
        <Route exact path="/support/faq/s007" component={CryptoWithdrawTitle} />
        <Route exact path="/support/faq/s008" component={FiatWithdrawTitle} />

        {/* Dashboard */}
        <PrivateRoute path="/my/orders" component={Orders} />
        <PrivateRoute path="/my" component={MyInfomation} />
      </Switch>
      {/* <ChatBox /> */}
      <Alert />
    </Router>
  )
}

export default App
