import { useState } from 'react'
import { useStyles } from './Style'
import SubMenu from './SubMenu'

interface SidebarProps {
  data: any
}

const Sidebar = ({ data }: SidebarProps) => {
  const classes = useStyles()
  const [subnav, setSubnav] = useState(null)

  const handleSubnav = (number: any) => {
    setSubnav(number)
  }

  return (
    <>
      <nav className={classes.sidebarNav}>
        <div className={classes.sidebarWrap}>
          {data.map((item: any, index: any) => {
            return <SubMenu item={item} subnav={subnav} handleSubnav={handleSubnav} key={index} />
          })}
        </div>
      </nav>
    </>
  )
}

export default Sidebar
