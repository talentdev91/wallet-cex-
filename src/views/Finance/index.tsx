import React from 'react'
import Typography from '@material-ui/core/Typography'
// material-ui
import ResponsiveVerticalTabs from './verticalTab'
import useStyles from './styles'
import { nanoid } from 'nanoid'
import { TitlePaper } from './components/TitlePaper'
import Fdeposit from './components/FiatDeposit'
import Fwithdraw from './components/FiatWithdraw'
import Cdeposit from './components/CryptoDeposit'
import Cwithdraw from './components/CryptoWithdraw'
import LoginHeader from 'components/LoginHeader'

import Balance from './components/Balance'
const Wallet: React.FC = (props) => {
  const classes = useStyles()

  const tabContent = [
    {
      id: nanoid(),
      children: <Balance />,
      label: (
        <span style={{ alignSelf: 'start', marginLeft: '10px' }}>
          <i className="fas fa-wallet" style={{ marginRight: '10px' }}></i>
          &nbsp;My Balance
        </span>
      ),
      index: 0,
    },
    {
      id: nanoid(),
      children: <TitlePaper title="Fiat Deposit" children={<Fdeposit props={props} />} />,
      label: (
        <span style={{ alignSelf: 'start', marginLeft: '10px' }}>
          <i className="fas fa-share" style={{ marginRight: '10px' }}></i>
          &nbsp;Fiat Deposit
        </span>
      ),
      index: 1,
    },
    {
      id: nanoid(),
      children: <TitlePaper title="Fiat Withdraw" children={<Fwithdraw />} />,
      label: (
        <div className={classes.tabDiv}>
          <span style={{ verticalAlign: 'sub', marginLeft: '10px' }}>
            <i className="fas fa-reply" style={{ marginRight: '10px' }}></i>
            &nbsp;Fiat Withdraw
          </span>
          <span className={classes.alert}>coming soon</span>
        </div>
      ),
      index: 2,
    },
    {
      id: nanoid(),
      children: <Cdeposit />,
      label: (
        <span style={{ alignSelf: 'start', marginLeft: '10px' }}>
          <i className="fas fa-arrow-right" style={{ marginRight: '10px' }}></i>
          &nbsp;Crypto Deposit
        </span>
      ),
      index: 3,
    },
    {
      id: nanoid(),
      children: <TitlePaper title="Crypto Withdraw" children={<Cwithdraw />} />,
      label: (
        <div className={classes.tabDiv}>
          <span style={{ verticalAlign: 'sub', marginLeft: '10px' }}>
            <i className="fas fa-arrow-left" style={{ marginRight: '10px' }}></i>
            &nbsp;Crypto Withdraw
          </span>
          <span className={classes.alert}>coming soon</span>
        </div>
      ),
      index: 4,
    },
  ]

  // const darkTheme = "darkTheme";
  // const lightTheme = "lightTheme";
  // const curThemeName = localStorage.getItem("appTheme") || "darkTheme";
  // const setThemeName = React.useContext(ThemeContext);
  // const [theme, setTheme] = React.useState(curThemeName);

  // const handleToggleTheme = () => {
  //   if (theme === lightTheme) {
  //     setThemeName(darkTheme);

  //     setTheme(darkTheme);
  //   } else {
  //     setThemeName(lightTheme);
  //     setTheme(lightTheme);
  //   }
  // };
  return (
    <div className={classes.root1}>
      <LoginHeader />
      <div className={classes.container}>
        <Typography className={classes.mainTitle} variant="h5">
          Financial Center
        </Typography>

        <ResponsiveVerticalTabs tabs={tabContent} />
      </div>
    </div>
  )
}

export default Wallet
