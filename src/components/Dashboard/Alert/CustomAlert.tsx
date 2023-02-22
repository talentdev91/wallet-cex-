import Alert from '@material-ui/lab/Alert'
import { useStyles } from './style'

interface CustomAlertProps {
  alertcontext: string
  alert_iconname: string
}

function CustomAlert({ alertcontext, alert_iconname }: CustomAlertProps) {
  const classes = useStyles()

  return (
    <>
      <Alert icon={false} className={classes.root}>
        <div className={classes.alert_icon}>
          <i className={alert_iconname} />
        </div>
        <div>
          <span className={classes.alertcontext}>{alertcontext}</span>
        </div>
      </Alert>
    </>
  )
}
export default CustomAlert
