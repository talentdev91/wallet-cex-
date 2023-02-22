import CustomCard from 'components/Dashboard/CustomCard'
//----------------style-----------
import notFoundIcon from 'assets/image/not-found.svg'
import { useStyles } from './Style'
import { Typography } from '@material-ui/core'

export default function Distribution() {
  const classes = useStyles()

  return (
    <CustomCard title="Distribution" url="/wallet">
      <div className={classes.content}>
        <img src={notFoundIcon} alt="not found" className={classes.notfoundIcon}></img>
        <Typography className={classes.noRecords}>No records found.</Typography>
      </div>
    </CustomCard>
  )
}
