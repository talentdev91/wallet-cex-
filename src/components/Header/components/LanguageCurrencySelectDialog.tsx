/** @format */

import React from 'react'
//material-ui
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import { Typography, IconButton, Dialog, Box, Tabs, Tab } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import CloseIcon from '@material-ui/icons/Close'
//external
import { useStyles } from './Style'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: '0 24px',
      borderBottom: `1px solid ${theme.palette.text.secondary}`,
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
      {children}
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

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

const AntTabs = withStyles((theme) => ({
  root: {
    minHeight: '64px',
  },
  indicator: {
    backgroundColor: theme.palette.text.disabled,
    height: '1px',
  },
}))(Tabs)

interface StyledTabProps {
  label: string
}

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      marginRight: theme.spacing(4),
      color: theme.palette.secondary.dark,
      minHeight: '64px',
      fontSize: '16px',
      '@media (max-width:700px)': {
        marginRight: '5px',
      },
    },
    selected: {},
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />)

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

interface LanguageCurrencySelectDialogProps {
  open: boolean
  value: number
  setOpen: (isOpen: boolean) => void
  // setLanguage: (language: string) => void
  // setCurrency: (currency: string) => void
  setValue: (value: number) => void
}

export default function LanguageCurrencySelectDialog({
  open,
  value,
  setOpen,
  // setLanguage,
  // setCurrency,
  setValue,
}: LanguageCurrencySelectDialogProps) {
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const languageArray = ['Chinese', 'Russia', 'Germany', 'France', 'Spain']

  const currencyArray = [
    { id: 1, currency: 'AUD', symbol: 'A$' },
    { id: 2, currency: 'IDR', symbol: 'Rp' },
    { id: 3, currency: 'HKD', symbol: 'HKD' },
    { id: 4, currency: 'CAD', symbol: 'C$' },
    { id: 5, currency: 'KRK', symbol: 'kn' },
  ]

  // const [language, setLanguage] = React.useState(initLanguage);
  // const [currency, setCurrency] = React.useState(initCurrency);

  const handleLanguageChange = (language: string) => {
    // localStorage.setItem("activeLanguage", language);
    // setLanguage(language);
    handleClose()
  }

  const handleCurrencyChange = (currency: string) => {
    // localStorage.setItem("activeCurrency", currency);
    // setCurrency(currency);
    handleClose()
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className={classes.dialog}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <AntTabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <AntTab label="Language and Region" {...a11yProps(0)} />
          <AntTab label="Currency" {...a11yProps(1)} />
        </AntTabs>
      </DialogTitle>
      <DialogContent>
        <TabPanel value={value} index={0}>
          <Typography variant="subtitle2">Choose a language and region</Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Typography
              variant="body2"
              className={classes.languageSelectButton}
              onClick={() => handleLanguageChange('English')}
            >
              English
            </Typography>
            {languageArray.map((language: string) => (
              <Typography
                key={language}
                variant="body2"
                className={classes.languageSelectButton1}
                // onClick={() => handleLanguageChange(language)}
              >
                {language}
              </Typography>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="subtitle2">Choose a currency</Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Typography
              variant="body2"
              className={classes.languageSelectButton}
              onClick={() => handleCurrencyChange('USD - $')}
            >
              USD - $
            </Typography>
            {currencyArray.map((currency) => (
              <Typography
                key={currency.id}
                variant="body2"
                className={classes.languageSelectButton1}
                // onClick={() => handleCurrencyChange(currency.currency)}
              >
                {currency.currency} - {currency.symbol}
              </Typography>
            ))}
          </Box>
        </TabPanel>
      </DialogContent>
    </Dialog>
  )
}
