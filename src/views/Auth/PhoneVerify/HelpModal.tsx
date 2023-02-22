import { Typography, Dialog } from '@material-ui/core'
import { useStyles } from '../Style'

function HelpModal({ ...props }: any) {
  const { modalopen, handleClose } = props

  const classes = useStyles()

  return (
    <Dialog open={modalopen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <div className={classes.helpModalContainer}>
        <img src="/images/helpmodal.svg" alt="logo" className={classes.helpIcon} />
        <Typography className={classes.helpTitle}>Didn't receive SMS?</Typography>
        <Typography className={classes.modalDescription}>
          SMS sent to your phone. If you have not received the code after several attempts, please try:
        </Typography>
        <br />
        <Typography className={classes.modalDescription}> 1. Voice SMS.</Typography>
        <Typography className={classes.modalDescription}> 2. Check if your phone bill is overdue.</Typography>
        <Typography className={classes.modalDescription}> 3. Check if the message is in the SMS bin.</Typography>
        <Typography className={classes.modalDescription}> 4. Ensure the binding phone number is 256462063</Typography>
        <Typography className={classes.modalDescription}>
          5. Ths message may be delayed for a few minutes. Tyr again after 10 minutes.
        </Typography>
        <Typography className={classes.modalDescription}>
          6. If this phone number already exists, we will not send you a authendfication code.
        </Typography>
        <button className={classes.okBtn} onClick={handleClose}>
          OK
        </button>
        <button className={classes.tryBtn}>Try voice verification</button>
      </div>
    </Dialog>
  )
}

export default HelpModal
