// material-ui
import { Box } from '@material-ui/core'
import { useStyles } from './style'
import BackupKeyIcon from 'assets/image/BackupKey.svg'

function BackupKey() {
  const classes = useStyles()

  return (
    <Box mb={5}>
      <div className={classes.title}>Save this Backup Key in a secure location</div>
      <div>
        <Box>
          <Box className={classes.content}>
            <div>
              <img src={BackupKeyIcon} alt="photo"></img>
            </div>
          </Box>
          <div className={classes.qrcodeTextTwo}>
            <div className={classes.txtlarge}>DKFPWHC6EXQ3CQ72</div>
            <div className={classes.txtdisablelarge}>
              This Key will allow you to recover your Authenticator should you lose your phone. Otherwise, resetting
              Binance/Google Authenticator will take at least 7 days.
            </div>
          </div>
        </Box>
      </div>
    </Box>
  )
}

export default BackupKey
