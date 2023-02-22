import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Link, useLocation, useHistory } from 'react-router-dom'

import { StyledTabs, StyledTab, useStyles } from './Style'

import { Popper, ListItem } from '@material-ui/core'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
  classes?: any
  childTab: any
  childTabs: any
  data: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, childTab, childTabs, classes, data, index, ...other } = props
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const openSelectTab = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const closeSelectTab = (event: React.MouseEvent<EventTarget>) => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'transitions-popper' : undefined
  let btnTitle = ''
  data[value].subNav?.map((item: any) => {
    if (parseInt(item.ownKey) - 1 === childTab) btnTitle = item.title
  })
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
      className={classes.tabPanel}
    >
      <div className={clsx(classes.backdrop, { [classes.hidden]: !open })}></div>
      {value === index && (
        <div style={{ display: 'flex' }}>
          {childTabs && (
            <button aria-describedby={id} type="button" onClick={openSelectTab} className={classes.selectTab}>
              {btnTitle}
              {open ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
            </button>
          )}
          {childTabs && (
            <Popper
              id={id}
              open={open}
              anchorEl={anchorEl}
              placement="bottom"
              transition
              className={classes.selectPaper}
            >
              <ClickAwayListener onClickAway={closeSelectTab}>
                <div className={classes.PopperPaper}>
                  {childTabs?.map((item: any, key: number) => {
                    const activeKey = parseInt(item.ownKey) - 1
                    return (
                      <ListItem
                        className={activeKey === childTab ? classes.activeChild : ''}
                        component={Link}
                        to={item.path}
                        key={key}
                        onClick={closeSelectTab}
                      >
                        {item.title}
                      </ListItem>
                    )
                  })}
                </div>
              </ClickAwayListener>
            </Popper>
          )}
        </div>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  }
}

interface NavTabsProps {
  data: any
}

export default function NavTabs({ data }: NavTabsProps) {
  const classes = useStyles()
  const [parentTab, setParentTab] = React.useState(0)
  const [childTab, setChildTab] = useState(0)
  const location = useLocation()
  const history = useHistory()

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    const res_data = data[newValue]
    if (res_data.subNav) history.push(res_data.subNav[0].path)
    else history.push(res_data.path)
    // setValue(newValue)
  }

  useEffect(() => {
    data.map((sideItems: any) => {
      if (sideItems.subNav) {
        sideItems.subNav.map((item: any) => {
          if (location.pathname === item.path) {
            setParentTab(parseInt(item.parentKey) - 1)
            setChildTab(parseInt(item.ownKey) - 1)
          }
        })
      } else {
        if (sideItems.path === location.pathname) {
          setParentTab(parseInt(sideItems.number) - 1)
        }
      }
    })
  }, [location])

  return (
    <div className={classes.root}>
      <div className={classes.tabs}>
        <StyledTabs variant="scrollable" value={parentTab} onChange={handleChange} aria-label="nav tabs example">
          {data.map((item: any, index: any) => {
            return (
              <StyledTab
                label={<span>{item.title}</span>}
                icon={item.icon}
                {...a11yProps(index)}
                disableRipple
                key={index}
              />
            )
          })}
        </StyledTabs>
      </div>
      {data.map((items: any, index: any) => {
        return (
          <TabPanel
            value={parentTab}
            childTabs={items.subNav}
            childTab={childTab}
            classes={classes}
            index={index}
            data={data}
            key={index}
          ></TabPanel>
        )
      })}
    </div>
  )
}
