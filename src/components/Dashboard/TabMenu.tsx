import clsx from 'clsx'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './Style'

interface TabMenuProps {
  className?: string
  tabKey: string
  handleClickTab: (tab: string) => void
  tabs: string[]
}

function TabMenu({ className, tabKey, handleClickTab, tabs }: TabMenuProps) {
  const classes = useStyles()

  return (
    <Box display="flex" id="tab-container" className={className}>
      {tabs.map((tab) => (
        <Typography
          key={tab}
          className={clsx(classes.tab, { [classes.activeTab]: tab === tabKey })}
          onClick={() => handleClickTab(tab)}
        >
          {tab}
        </Typography>
      ))}
    </Box>
  )
}

export default TabMenu
