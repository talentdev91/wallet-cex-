import { Dialog, Typography, IconButton } from '@material-ui/core'
import { useStyles } from './Style'
import CloseIcon from '@material-ui/icons/Close'

function TutorialVideoModal({ ...props }: any) {
  const { modalopen, handleClose } = props
  const classes = useStyles()

  return (
    <Dialog open={modalopen} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.videoModal}>
      <div className={classes.modalContainer}>
        <div className={classes.modalHeader}>
          <Typography className={classes.title}>Welcome to Dongle Spot</Typography>

          <IconButton className={classes.closeIcon} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.videoDiv}>
          <video className={classes.video} controls>
            <source src="video/tutorialVideo.mp4" type="video/mp4" />
            <source src="video/tutorialVideo.ogg" type="video/ogg" />
          </video>
        </div>
      </div>
    </Dialog>
  )
}

export default TutorialVideoModal
