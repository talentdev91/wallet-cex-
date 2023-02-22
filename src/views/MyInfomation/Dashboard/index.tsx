import { Box, Grid } from '@material-ui/core'
import { useStyles } from './style'
import Header from './components/Header'
import BalanceDetail from './BalanceDetail'
import InviteFriends from './InviteFriends'
import Announcements from './Announcements'
import TaskCenter from './TaskCenter'
import WalletDirect from './WalletDirect'
import ActivityDevices from './ActivityDevices'
import IncreaseYourAccountSecurity from './IncreaseYourAccountSecurity'
import DashboradApiCard from './DashboradApiCard'
import Distribution from './Distribution'
import OpenOrders from './OpenOrders'
import YourTradingFeeLevel from './YourTradingFeeLevel'
import Stepper from './Stepper'

function Dashboard() {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Header />
      <Stepper />
      <Grid container className={classes.DashboardCards_root}>
        <Grid item xs={12} sm={12} md={8} className={classes.BalanceDetail}>
          <BalanceDetail />
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.TaskAnnouncements}>
          <InviteFriends />
          <div className={classes.AnnouncementsContent}>
            <Announcements />
          </div>
          <TaskCenter />
        </Grid>
      </Grid>
      <Grid container className={classes.DashboardCards_root}>
        <Grid item xs={12} sm={12} md={8}>
          <Grid item className={classes.WalletDirect}>
            <WalletDirect />
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} className={classes.ActivityDevices}>
              <ActivityDevices />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Grid container style={{ height: '100%' }}>
                <Grid item className={classes.IncreaseYourAccountSecurity} style={{ height: 'calc(100% - 70px)' }}>
                  <IncreaseYourAccountSecurity />
                </Grid>
                <Grid item className={classes.DashboardApiCard} style={{ height: '70px' }}>
                  <DashboradApiCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.Distribution}>
          <Distribution />
        </Grid>
      </Grid>
      <Grid container className={classes.DashboardCards_root}>
        <Grid item xs={12} sm={12} md={6} className={classes.OpenOrders}>
          <OpenOrders />
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.YourTradingFeeLevel}>
          <YourTradingFeeLevel />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
