import { Typography, Dialog } from '@material-ui/core'
import { useStyles } from '../Style'

function ErrorModal({ ...props }: any) {
  const { errorModalopen, handleClose } = props

  const classes = useStyles()

  return (
    <Dialog open={errorModalopen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <div className={classes.errorModalContainer}>
        <img src="/images/errormodal.svg" alt="logo" className={classes.errorIcon} />
        <Typography className={classes.modalDescription1}>
          You have entered an incorrect mobile phone verification code. Please try again.
        </Typography>
        <button className={classes.okBtn} onClick={handleClose}>
          I understand
        </button>
      </div>
    </Dialog>
  )
}

export default ErrorModal
