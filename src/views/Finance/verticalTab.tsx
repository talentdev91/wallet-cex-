import React, { useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import { StyledVerticalTabs, StyledVerticalTab } from './styles'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ alignItems: 'left' }}
      {...other}
    >
      {value === index && (
        <Box pl={0} pt={0}>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: 'left',
  },
  tabpane: {
    backgroundColor: theme.palette.primary.main,
  },
}))

interface TabProps {
  tabs: {
    id: any
    children?: React.ReactNode
    label: React.ReactNode
    index: any
  }[]
}

const ResponsiveVerticalTabs: React.FC<TabProps> = ({ tabs }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    if (newValue !== 2 && newValue !== 4) {
      setValue(newValue)
    }
  }

  var TabHeaders = tabs.map((tab, index) => (
    <StyledVerticalTab wrapped key={tab.id} label={tab['label']} {...a11yProps(tab['index'])} />
  ))

  var TabContents = tabs.map((tab, index) => (
    <TabPanel key={tab.id} value={value} index={tab['index']}>
      {tab['children']}
    </TabPanel>
  ))

  return (
    <div className={classes.root}>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <StyledVerticalTabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              {TabHeaders}
            </StyledVerticalTabs>
          </Grid>
          <Grid item xs={12} sm={9}>
            {TabContents}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ResponsiveVerticalTabs
