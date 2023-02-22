import Card from '@material-ui/core/Card'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Link } from 'react-router-dom'
//-------------------style---------------
import { useStyles } from './Style'

export default function InviteFriends() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Link to="#" className={classes.link}>
          <div className={classes.inviteRoot}>
            <div className={classes.inviteTitle}>Earn up to 40% commission: Invite friends now!</div>
            <ArrowForwardIosIcon className={classes.inviteIcon} />
          </div>
        </Link>
      </Card>
    </div>
  )
}
