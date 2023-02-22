import { Link } from 'react-router-dom'
// material-ui
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  Grid,
  Typography,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
// components
import { useStyles } from './Style'
import ActionButton from './ActionButton'

// interface
interface SecurityVerificationModalProps {
  handleClose: () => void
  open: boolean
}

function SecurityVerificationModal({ handleClose, open }: SecurityVerificationModalProps) {
  const theme = useTheme()
  const classes = useStyles()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="customized-dialog-title"
      maxWidth="md"
      fullWidth={true}
      className={classes.SecurityVerificationModalDialog}
    >
      <Grid container>
        <Grid item md={10} sm={10} xs={10}>
          <DialogTitle id="responsive-dialog-title" className={classes.SecurityVerificationModalDialogTitle}>
            {'Security Verification'}
          </DialogTitle>
        </Grid>
        <Grid item md={2} sm={2} xs={2} className={classes.SecurityVerificationModalCloseIcon}>
          <CloseIcon onClick={handleClose} />
        </Grid>
      </Grid>
      <div style={{ padding: '10px' }}>
        <DialogContent>
          <DialogContentText className={classes.SecurityVerificationModalDialogContentText}>
            Enable 2FA, including Binance/Google Authenticator, to increase your account security.
          </DialogContentText>
          <Grid container>
            <Grid item md={6} xs={6} sm={6} className={classes.SecurityVerificationModalDialogContentCardHover}>
              <Link to="/my/enable-google-authenticator" style={{ textDecoration: 'none' }}>
                <div className={classes.SecurityVerificationModalDialogContentCard}>
                  <i className="icon-authenticator  fs40">
                    <i className="path1 yellow  fontStyle" />
                    <i className="path2 fontStyle" />
                  </i>
                  <Typography className={classes.SecurityVerificationModalDialogContentCardTitle}>
                    Enable Binance/Google Authenticator
                  </Typography>
                  <Typography className={classes.SecurityVerificationModalDialogContentCardContent}>
                    Recommended
                  </Typography>
                </div>
              </Link>
            </Grid>
            <Grid item md={6} xs={6} sm={6} className={classes.SecurityVerificationModalDialogContentCardHover}>
              <Link to="/my/enable-sms-authenticator" style={{ textDecoration: 'none' }}>
                <div className={classes.SecurityVerificationModalDialogContentCard}>
                  <i className="icon-phone-verify fs40">
                    <i className="path1 yellow  fontStyle" />
                    <i className="path2 fontStyle" />
                  </i>
                  <Typography className={classes.SecurityVerificationModalDialogContentCardTitle}>
                    Phone verification
                  </Typography>
                </div>
              </Link>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container>
            <Grid item md={12} sm={12} xs={12}>
              <ActionButton type="yellow" onClick={handleClose} className={classes.stepperBtn}>
                Remind me later
              </ActionButton>
            </Grid>
          </Grid>
        </DialogActions>
      </div>
    </Dialog>
  )
}

export default SecurityVerificationModal
