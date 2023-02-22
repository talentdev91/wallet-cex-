import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { IconButton, Box, Typography, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined'
import { useStyles } from './Style'

//Components
import SupportHeader from '../../../components/SupportHeader'
import Footer from './Footer'
import DepositWithdraw from '../components/DepositWithdraw'
import AccountFunction from '../components/Account'
import Spot from '../components/Spot'
import { helpRoutes, allRouter } from './routes'

function Main() {
  const classes = useStyles()
  const [searchBlogs, setSearchBlogs] = React.useState([])
  const [searchText, setSearchText] = React.useState('')

  const handleSearch = (e: string) => {
    setSearchText(e)
    let blogs: any = []

    if (e.length > 0) {
      for (let i = 0; i < allRouter.length; i++) {
        if (allRouter[i]?.name?.toLowerCase().indexOf(e?.toLowerCase()) !== -1) {
          blogs.push(allRouter[i])
        }
      }
      setSearchBlogs(blogs)
    }
  }

  return (
    <div className={classes.mainContainer}>
      <SupportHeader />
      <Box className={classes.header}>
        <Typography className={classes.title}>How can we help you?</Typography>
        <div className={classes.inputSide}>
          <input placeholder="Search here" onChange={(e) => handleSearch(e.target.value)} className={classes.input} />
          <IconButton aria-label="add an alarm">
            <SearchIcon />
          </IconButton>
        </div>
      </Box>
      <Grid container spacing={2} className={classes.container}>
        {searchText?.length === 0 ? (
          <Router>
            <Grid item sm={9} className={classes.leftSide}>
              <Switch>
                <Route exact path="/faq">
                  <Redirect to="/faq/account_function" />
                </Route>
                <Route path="/faq/account_function" exact component={AccountFunction} />
                <Route path="/faq/deposit" exact component={DepositWithdraw} />
                <Route path="/faq/spot-margin" exact component={Spot} />
              </Switch>
            </Grid>
            <Grid item sm={3} className={classes.rightSide}>
              <div style={{ paddingTop: '40px' }}>
                {helpRoutes.map((prop, key) => {
                  return (
                    <div key={key}>
                      <Link to={prop.path} className={classes.menuLink}>
                        <FiberManualRecordOutlinedIcon className={classes.icon1} />
                        {prop.name}
                      </Link>
                    </div>
                  )
                })}
              </div>
            </Grid>
          </Router>
        ) : (
          <div className={classes.mainSearchContainer}>
            {searchBlogs.map((blog: any, key: any) => {
              return (
                <Grid item key={key} xs={12}>
                  <Link to={blog.path} className={classes.menuLink}>
                    <FiberManualRecordOutlinedIcon className={classes.icon1} />
                    {blog.name}
                  </Link>
                </Grid>
              )
            })}
          </div>
        )}
      </Grid>
      <Box className={classes.header1}>
        <Footer />
      </Box>
    </div>
  )
}

export default Main
