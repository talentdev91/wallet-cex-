/** @format */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
//material-ui
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import { Grid, Typography, IconButton, Dialog, Box, Divider } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import CloseIcon from '@material-ui/icons/Close'
//external
import { useStyles } from './Style'
import SpotTradingLightIcon from '../../../assets/image/SpotTradingLightIcon.svg'
import SpotTradingDarkIcon from '../../../assets/image/SpotTradingDarkIcon.svg'
import HotTopicLightIcon from '../../../assets/image/HotTopicLightIcon.svg'
import HotTopicDarkIcon from '../../../assets/image/HotTopicDarkIcon.svg'
import TutorialVideoLightIcon from '../../../assets/image/TutorialVideoLightIcon.svg'
import TutorialVideoDarkIcon from '../../../assets/image/TutorialVideoDarkIcon.svg'
import TutorialVideoModal from './TutorialVideoModal'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: '20px 48px 20px 24px',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}))(MuiDialogContent)

interface HelpDialogProps {
  open: boolean
  handleClose: () => void
}

export default function HelpDialog({ open, handleClose }: HelpDialogProps) {
  const classes = useStyles()

  const [openVideoModal, setOpenVideoModal] = useState(false)

  const handleOpenVideoModal = (e: boolean) => {
    setOpenVideoModal(e)
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className={classes.dialog}>
      <TutorialVideoModal
        modalopen={openVideoModal}
        handleClose={() => setOpenVideoModal(false)}
        // handleClickNumber={handleGetPhoneNumber}
      />
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography style={{ fontSize: '16px' }}>Spot Help Center</Typography>
      </DialogTitle>

      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <Box display="flex">
              <img
                src={localStorage.appTheme === 'darkTheme' ? HotTopicLightIcon : HotTopicDarkIcon}
                alt="icon"
                style={{ marginRight: '20px' }}
              />
              <Typography variant="body2">HotTopics</Typography>
            </Box>

            <Box ml="45px" mt="16px">
              <Link to="/support/faq/s001" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" className={clsx(classes.fontColor6, classes.linkStyle)}>
                  How to Register on Dongle by Email
                </Typography>
              </Link>

              <Link to="/support/faq/s002" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" className={clsx(classes.fontColor6, classes.linkStyle)}>
                  How to Login on Dongle web
                </Typography>
              </Link>

              <Link to="/support/faq/s003" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" className={clsx(classes.fontColor6, classes.linkStyle)}>
                  I forgot my password from Dongle account
                </Typography>
              </Link>

              <Link to="/support/faq/s004" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" className={clsx(classes.fontColor6, classes.linkStyle)}>
                  How to Trade Spot on Dongle Website
                </Typography>
              </Link>

              <Link to="/support/faq/s005" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" className={clsx(classes.fontColor6, classes.linkStyle)}>
                  How to Deposit Fiat to Dongle
                </Typography>
              </Link>

              <Link to="/support/faq/s006" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" className={clsx(classes.fontColor6, classes.linkStyle)}>
                  How to Deposit Crypto to Dongle
                </Typography>
              </Link>

              <Link to="/faq" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" className={clsx(classes.learnMore)}>
                  Learn more
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider style={{ margin: '32px 0' }} />

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box display="flex" className={classes.videoClick}>
              <img
                src={localStorage.appTheme === 'darkTheme' ? SpotTradingLightIcon : SpotTradingDarkIcon}
                alt="icon"
                className={classes.videoIcon}
              />
              <Typography variant="body2">Spot Trading Rules</Typography>
            </Box>

            <Typography variant="body2" className={classes.fontColor7} style={{ marginLeft: '45px' }}>
              Learn about trading rules for each pair
            </Typography>
          </Grid>

          <Grid item xs={6} className={classes.videoClick}>
            <Box display="flex" onClick={() => handleOpenVideoModal(true)}>
              <img
                src={localStorage.appTheme === 'darkTheme' ? TutorialVideoLightIcon : TutorialVideoDarkIcon}
                alt="icon"
                className={classes.videoIcon}
              />
              <Typography variant="body2">Tutorial Video</Typography>
            </Box>

            <Typography variant="body2" className={classes.fontColor7} style={{ marginLeft: '45px' }}>
              Spend 3 mins to know spot trading by watching video
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
