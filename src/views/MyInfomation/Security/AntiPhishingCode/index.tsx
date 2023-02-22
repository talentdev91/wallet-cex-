import React from 'react'
import { useStyles } from './Style'
import {
  Breadcrumbs,
  Typography,
  Link,
  Grid,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import CloseIcon from '@material-ui/icons/Close'
import { useTheme } from '@material-ui/core/styles'

import CustomAlert from 'components/Dashboard/Alert/CustomAlert'
import ActionButton from 'components/Dashboard/ActionButton'
import Textfield from 'components/Dashboard/TextField'

function AntiPhishingCode() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [inputValue, setInputValue] = React.useState('')
  const [error, setError] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  const getalertcontext =
    'Do not disclose your password, Google Authentication codes, or SMS to anyone, including Binance support.'
  const getalert_iconname = 'icon-warning'

  const handleAntiChange = (e: any) => {
    setInputValue(e.target.value)

    if (e.target.value.length < 4 || e.target.value.length >= 20) {
      setError('Please enter 4-20 non-special characters')
    } else setError('')
  }

  return (
    <>
      <Grid container style={{ display: 'block' }}>
        <Grid item xs={12} className={classes.BreadcrumbsRoot}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick} className={classes.BreadcrumbsLink}>
              Security
            </Link>
            {/* <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Security
          </Link> */}
            <Typography color="textPrimary" style={{ color: '#000000' }}>
              Anti-Phishing-Code
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid container style={{ backgroundColor: '#fafafa' }}>
          <Grid item xs={12} className={classes.AntiPhishingCodeTitle}>
            <Typography variant="h4">Anti Phising Code</Typography>
          </Grid>
          <Grid item xs={12} className={classes.AntiphishingCodeAlert}>
            <CustomAlert alertcontext={getalertcontext} alert_iconname={getalert_iconname} />
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.AntiPhishingCodeTitleroot}>
              <CardContent>
                <Typography className={classes.AntiPhishingCodeTitletitle}>What is an Anti-Phishing Code?</Typography>
                <Typography className={classes.AntiPhishingCodeTitlepos}>
                  An Anti-Phishing Code is a code that helps to prevent phishing attempts from fake Binance websites or
                  email addresses
                </Typography>
                <Typography className={classes.AntiPhishingCodeTitletitle} style={{ marginTop: '16px' }}>
                  How does it work?
                </Typography>
                <Typography className={classes.AntiPhishingCodeTitlepos}>
                  Once you've set your unique Anti-Phishing Code, it will be included in all genuine Binance emails.
                </Typography>
                <i className="icon-download" style={{ width: '100%' }} />
              </CardContent>
              <CardActions>
                <ActionButton type="yellow" className={classes.stepperBtn} onClick={handleClickOpen}>
                  Create Anti-Phishing Code
                </ActionButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.AntiPhishingCodeModal}>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          aria-labelledby="customized-dialog-title"
          maxWidth="md"
          fullWidth={true}
          className={classes.AntiPhishingCodeModalDialog}
        >
          <div className={classes.AntiPhishingCodeModalHeader}>
            <Grid>
              <DialogTitle id="responsive-dialog-title" className={classes.AntiPhishingCodeModalDialogTitle}>
                {'Create Anti-Phishing Code'}
              </DialogTitle>
            </Grid>
            <Grid className={classes.AntiPhishingCodeModalCloseIcon}>
              <CloseIcon onClick={handleClose} />
            </Grid>
          </div>
          <div style={{ padding: '10px' }}>
            <DialogContent>
              <Textfield
                type="isDelete"
                title={'Anti Phishing-Code'}
                error={error}
                info="Please enter 4-20 non-special characters"
                inputValue={inputValue}
                handleInitState={() => setInputValue('')}
                onChange={(e) => handleAntiChange(e)}
              />
            </DialogContent>
            <DialogActions>
              <Grid container>
                <Grid item xs={12}>
                  <ActionButton type="yellow" onClick={handleClose} className={classes.stepperBtn}>
                    Submit
                  </ActionButton>
                </Grid>
              </Grid>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    </>
  )
}

export default AntiPhishingCode
