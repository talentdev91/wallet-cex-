import CustomCard from 'components/Dashboard/CustomCard'
import { Typography } from '@material-ui/core'
//----------------style-----------
import { useStyles } from './Style'

export default function TaskCenter() {
  const classes = useStyles()

  return (
    <CustomCard
      title="TaskCenter"
      url="/my/dashboard"
      desc={<Typography className={classes.linkDesk}>View tasks to win rewards</Typography>}
    >
      <div></div>
    </CustomCard>
  )
}
