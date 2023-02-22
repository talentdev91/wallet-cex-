/** @format */

//material-ui
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import { Slider, Tooltip, TooltipProps } from '@material-ui/core'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subContainer: {
      padding: '0rem 0.5rem',
    },
    container: {},
    orderContainer: {
      paddingTop: '0px',
    },
    formDiv: {
      width: '100%',
    },
    marketInput: {
      padding: '5px 0px 5px 0px',
    },
    styledForm: {
      display: 'line-block',
    },
    img3: {
      marginRight: '-1px',
    },
    notificationBackground1: { background: '#bf2d29' },
    notificationBackground2: { background: '#0ECB81' },
    topSide: {
      background: theme.palette.info.light,
      borderTop: '2px solid #f0b90b',
      borderRight: '1px solid' + theme.palette.error.main,
      width: '92px',
      cursor: 'pointer',
      marginBottom: '-1px',
    },
    spot: {
      padding: '16px 30px',
      textAlign: 'center',
    },
    bodySide: {
      borderTop: '1px solid' + theme.palette.error.main,
      background: theme.palette.info.light,
    },
    tabbtn: {
      background: 'transparent',
      border: 'none',
      color: '#848e9c',
      cursor: 'pointer',
      fontSize: '14px',
      lineHeight: '12px',
      fontWeight: 500,
      paddingTop: '8px',
      paddingBottom: '10px',
      marginRight: '16px',
    },
    bodyTop: {
      display: 'flex',
      padding: '16px 1rem 0px 1rem',
    },
    top: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    text: {
      marginRight: '20px',
      cursor: 'pointer',
    },
    text1: {
      marginRight: '0px',
      cursor: 'pointer',
    },
    fontColor1: {
      color: theme.palette.secondary.main,
    },
    fontColor2: {
      color: theme.palette.secondary.dark,
    },
    hover: {
      '&:hover': {
        color: theme.palette.secondary.light,
      },
    },
    inputSide: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: theme.palette.success.light,
      border: '1px solid' + theme.palette.success.light,
      borderRadius: '4px',

      padding: '0.5rem',
      width: '100%',
      justifyContent: 'space-between',
      '&:hover': {
        border: '1px solid #f0b90b',
      },
    },
    inputSide1: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: `${localStorage.appTheme === 'darkTheme' ? '#474d57' : '#eaecef'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #474d57' : '1px solid #eaecef'}`,
      borderRadius: '4px',
      padding: '0.2rem 0.5rem',
      width: '100%',
      justifyContent: 'space-between',
    },
    inputSide2: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: `${localStorage.appTheme === 'darkTheme' ? '#474d57' : '#eaecef'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #474d57' : '1px solid #eaecef'}`,
      borderRadius: '4px',
      width: '100%',
    },
    selltopBtn2: {
      textAlign: 'center',
      width: '47%',
    },
    buytopBtn2: {
      textAlign: 'center',
      width: '47%',
    },
    buytopBtn: {
      width: '47%',
      textAlign: 'center',
      padding: '0.5rem 0rem',
      background: '#0ecb81',
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
    },
    selltopBtn: {
      width: '48%',
      textAlign: 'center',
      padding: '0.5rem 0rem',
      background: '#f6465d',
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
    },
    buybtnText: {
      color: 'white',
      cursor: 'pointer',
      fontWeight: 500,
    },
    buybtnText1: {
      color: '#707a8a',
      cursor: 'pointer',
      fontWeight: 500,
    },
    sellbtnText: {
      cursor: 'pointer',
      color: '#fff',
      fontWeight: 500,
    },
    sellbtnText1: {
      color: '#707a8a',
      cursor: 'pointer',
      fontWeight: 500,
    },
    bodyMain: {
      padding: '1rem',
    },
    bodyMain2: {
      padding: '0rem 1rem 0.5rem 1rem',
    },
    input: {
      color: theme.palette.secondary.dark,
      fontSize: '14px',
      textAlign: 'right',
      background: 'transparent',
      border: 'none',
      width: '100%',
      '&:focus:not(.focus-visible)': {
        outline: 'none',
      },
    },
    inputRoot: {
      textAlign: 'right',
    },
    icon3: {
      width: '15px',
      height: '15px',
      verticalAlign: 'text-bottom',
    },
    menu: {
      marginTop: '30px',
    },
    menuItem: {
      background: `${localStorage.appTheme === 'darkTheme' ? '#1e2329 !important' : '#fff !important'}`,
      '&:hover': {
        background: `${localStorage.appTheme === 'darkTheme' ? '#474d57  !important' : '#f0f1f2  !important'}`,
      },
    },
    signDiv: {
      marginTop: '10px',
      background: theme.palette.success.light,
      borderRadius: '4px',
      padding: '0.5rem 3rem',
      textAlign: 'center',
      display: 'flex',
    },
    signText: {
      color: '#f0b90b',
      margin: 'auto',
      cursor: 'pointer',
      fontSize: '14px',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    signText2: {
      color: theme.palette.secondary.dark,
      margin: 'auto',
    },
    textDiv: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    textDiv1: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    tooltipIcon: {
      width: '16px',
      height: '16px',
      alignSelf: 'center',
      color: theme.palette.secondary.main,
    },
    buyBtn: {
      background: theme.palette.success.main,
      padding: '0.5rem 0rem',
      marginTop: '10px',
      borderRadius: '4px',
      cursor: 'pointer',
      '&:hover': {
        background: '#32de9b',
      },
    },
    sellBtn: {
      background: theme.palette.success.dark,
      padding: '0.5rem 0rem',
      marginTop: '10px',
      borderRadius: '4px',
      cursor: 'pointer',
      '&:hover': {
        background: '#ec596d',
      },
    },
    buyText: {
      color: theme.palette.text.secondary,
      background: theme.palette.success.main,
      padding: '0.7rem 0rem',
      marginTop: '10px',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      width: '100%',
      border: 'none',
      '&:hover': {
        background: '#32de9b',
      },
    },
    sellText: {
      color: theme.palette.text.secondary,
      background: theme.palette.success.dark,
      padding: '0.7rem 0rem',
      marginTop: '10px',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      width: '100%',
      border: 'none',
      '&:hover': {
        background: '#ec596d',
      },
    },
    setTextColor: {
      color: '#f0b90b',
    },
    mainSide: {
      '@media (max-width: 1000px)': {
        display: 'none',
      },
    },
    subSide: {
      '@media (min-width: 1001px)': {
        display: 'none',
      },
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    phoneResponse: {
      '@media (min-width: 769px)': {
        display: 'none',
      },
    },
  }),
)

export const PercentSlider = withStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#b7bdc6',
      height: '6px',
      padding: '15px 0',
      width: '90%',
      marginLeft: '5%',
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#b7bdc6',
      marginTop: '-7px',
      '&:focus, &:hover, &$active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {},
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 12px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: '#000',
      },
    },
    track: {
      height: '6px',
    },
    rail: {
      height: '6px',
      opacity: 0.5,
      backgroundColor: '#474d57',
    },
    mark: {
      '&.MuiSlider-markLabel': {
        color: 'red',
      },
      backgroundColor: theme.palette.info.light,
      border: `${localStorage.appTheme === 'darkTheme' ? '2px solid #474d57' : '2px solid #a3a6ab'}`,
      height: 12,
      width: 12,
      borderRadius: '8px',

      marginLeft: '-6px',
      marginTop: -3,
      '&:hover': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#474d57' : '#b7bdc6'}`,
        border: '2px solid' + theme.palette.info.light,
      },
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
      border: '2px solid ' + theme.palette.info.light,
    },
    markLabel: {
      marginTop: '12px',
      fontSize: '12px',
      color: theme.palette.secondary.main,
    },
    markLabelActive: {
      color: theme.palette.secondary.dark,
    },
  }),
)(Slider)

const Darktooltip = makeStyles(() => ({
  arrow: {
    color: '#12161c',
  },
  tooltip: {
    maxWidth: 250,
    backgroundColor: '#12161c',
    color: 'white',
    textAlign: 'center',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '11px',
  },
}))

export function StyledTooltip(props: TooltipProps) {
  const classes = Darktooltip()

  return <Tooltip arrow classes={classes} {...props} />
}
