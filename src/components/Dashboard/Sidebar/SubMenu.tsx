import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useStyles } from './Style'

interface SubMenuProps {
  item: any
  subnav: any
  handleSubnav: (number: any) => void
}

const SubMenu = ({ item, subnav, handleSubnav }: SubMenuProps) => {
  const classes = useStyles()
  const location = useLocation()
  const [subnavItem, setSubnavItem] = useState(null)
  const showSubnav = (selectedItem: any) => {
    subnav === selectedItem.number ? handleSubnav(null) : handleSubnav(selectedItem.number)
  }
  useEffect(() => {
    setSubnavItem(null)
    if (item.subNav) {
      item.subNav.map((item: any, index: any) => {
        if (location.pathname === item.path) {
          handleSubnav(item.parentKey)
          setSubnavItem(item.ownKey)
        }
      })
    } else {
      location.pathname === item.path && handleSubnav(item.number)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])
  return (
    <>
      {item.subNav && (
        <div className={classes.sidebarLink} onClick={() => showSubnav(item)}>
          <div className={classes.labelNav}>
            {item.icon}
            <span>{item.title}</span>
          </div>
          <div className={classes.arrowIcon}>
            {item.subNav && subnav === item.number ? item.iconOpened : item.subNav ? item.iconClosed : null}
          </div>
        </div>
      )}
      {!item.subNav && (
        <Link
          className={subnav === item.number ? classes.activeSidebarLink : classes.sidebarLink}
          to={item.path}
          onClick={() => showSubnav(item)}
        >
          <div className={classes.labelNav}>
            {item.icon}
            <span>{item.title}</span>
          </div>
          <div className={classes.arrowIcon}>
            {item.subNav && subnav === item.number ? item.iconOpened : item.subNav ? item.iconClosed : null}
          </div>
        </Link>
      )}
      {subnav === item.number &&
        item.subNav?.map((item: any, index: any) => {
          return (
            <Link
              className={subnavItem === item.ownKey ? classes.activeDropdownLink : classes.dropdownLink}
              to={item.path}
              key={index}
            >
              <span>{item.title}</span>
            </Link>
          )
        })}
    </>
  )
}

export default SubMenu
