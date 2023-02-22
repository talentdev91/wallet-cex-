// material-ui
import { Box } from '@material-ui/core'
import { useStyles } from './style'
import Qrcode from 'assets/image/onlink_to_m99hv3.svg'

function ScanQRCode() {
  const classes = useStyles()

  return (
    <Box mb={5}>
      <div className={classes.title}>Scan this QR code in the Authenticator app</div>
      <div>
        <Box>
          <Box className={classes.content}>
            <div className={classes.qrcodelarge}>
              <img src={Qrcode} alt="alt" />
            </div>
          </Box>
          <div className={classes.qrcodeTextTwo}>
            <div className={classes.txtlarge}>DKFPWHC6EXQ3CQ72</div>
            <div className={classes.txtdisablelarge}>
              If you are unable to scan the QR code, please enter this code manually into the app.
            </div>
          </div>
        </Box>
      </div>
    </Box>
  )
}

export default ScanQRCode
