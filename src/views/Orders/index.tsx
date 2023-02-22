import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
// material ui
import { Container } from '@material-ui/core'
// external components
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import SidebarSmall from '../../components/Dashboard/SidebarSmall/Sidebar'
import DashHeader from '../../components/Dashboard/Header'
import { useStyles } from './Style'
import SpotOpenOrders from './SpotOrder/OpenOrders'
import SpotOrderHistory from './SpotOrder/OrderHistory'
import SpotTradeHistory from './SpotOrder/TradeHistory'
import P2POrder from './P2POrder'
import ConvertHistory from './ConvertHistory/ConvertHistory'
import ConvertOpenOrders from './ConvertHistory/OpenOrders'
import BuyCryptoHistory from './BuyCryptoHistory'
import { SidebarData } from './SidebarData'

function DashOrders() {
  let match = useRouteMatch()
  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth="xl">
      <DashHeader />
      <div className={classes.bodyContent}>
        <Sidebar data={SidebarData} />
        <SidebarSmall data={SidebarData} />
        <Switch>
          <Route exact path={`${match.path}/`} render={() => <Redirect to={`${match.path}/exchange/openorder`} />} />
          <Route exact path={`${match.path}/exchange/openorder`} component={SpotOpenOrders} />
          <Route exact path={`${match.path}/exchange/tradeorder`} component={SpotOrderHistory} />
          <Route exact path={`${match.path}/exchange/userTrade`} component={SpotTradeHistory} />
          <Route exact path={`${match.path}/exchange/p2p-order`} component={P2POrder} />
          <Route exact path={`${match.path}/exchange/buysell-history`} component={BuyCryptoHistory} />
          <Route exact path={`${match.path}/convert/history`} component={ConvertHistory} />
          <Route exact path={`${match.path}/convert/openorder`} component={ConvertOpenOrders} />
        </Switch>
      </div>
    </Container>
  )
}

export default DashOrders
