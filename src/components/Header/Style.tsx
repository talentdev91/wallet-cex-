/** @format */

import { Tooltip } from '@material-ui/core'
import { createStyles, makeStyles, Theme, withStyles, alpha } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      justifyContent: 'space-between',
      backgroundColor: theme.palette.background.paper,
      '&.MuiPaper-elevation4': {
        boxShadow: 'none',
      },
    },
    toolbar: {
      display: 'flex',

      '&.MuiToolbar-gutters': {
        padding: '0 24px 0 16px',
        [theme.breakpoints.down(768)]: {
          padding: '0 0 0 8px',
        },
      },
      '&.MuiToolbar-regular': {
        minHeight: '64px',
      },
      '@media (max-width: 1000px)': {
        justifyContent: 'space-between',
      },
    },
    menuIconButton: {
      marginLeft: '4px',
      paddingLeft: '0px',
      '&.MuiIconButton-root': {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      '@media (min-width: 701px)': {
        display: 'none',
      },
    },
    helpIcon: {
      margin: '0px 8px 0px 8px',
      cursor: 'pointer',
    },
    divider2: {
      backgroundColor: '#fff',
      height: '14px',
      alignSelf: 'center',
    },
    themeIcon2: {
      cursor: 'pointer',
      width: '18px',
      height: '18px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '12px 16px',
    },
    menuIcon: {
      '&:hover': {
        color: theme.palette.text.disabled,
      },
    },
    title: {
      flexGrow: 1,
    },
    tickerList: {
      alignSelf: 'center',
      whiteSpace: 'nowrap',
      overflow: 'auto hidden',
      cursor: 'pointer',
      '@media (max-width: 768px)': {
        display: 'none',
        width: 0,
      },
    },
    coinPairForm: {
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    tickerListItem: {
      paddingRight: '32px',
      display: 'inline-block',
      userSelect: 'none',
    },
    fontColor1: {
      color: theme.palette.text.secondary,
    },
    fontColor2: {
      color: '#212833',
    },
    fontColor3: {
      color: theme.palette.text.primary,
    },
    fontColor4: {
      color: theme.palette.info.main,
    },
    fontColor5: {
      color: theme.palette.info.dark,
    },
    fontColor6: {
      color: theme.palette.secondary.dark,
    },
    viewTypeMargin: {
      marginBottom: '2px',
    },
    hover: {
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.text.disabled,
      },
    },
    accountIcon: {
      cursor: 'pointer',
      '&:hover': {
        color: '#f0b90b',
      },
    },
    disappear: {
      '@media (max-width:700px)': {
        display: 'none',
      },
      '&:hover': {
        color: '#f0b90b',
      },
    },
    disappear3: {
      '@media (max-width: 350px)': {
        display: 'none',
      },
    },
    link: {
      textDecoration: 'none',
      padding: '6px 12px',
      width: 'max-content',
      height: 'max-content',
      alignSelf: 'center',
    },
    logo: {
      width: 'max-content',
    },
    space: {
      padding: '0 8px',
      alignSelf: 'center',
    },
    itemSpace: {
      padding: '4px',
    },
    register: {
      borderRadius: '4px',
      backgroundImage: 'linear-gradient(rgb(248, 209, 47) 0%, rgb(240, 185, 11) 100%)',
      '&:hover': {
        backgroundImage: 'linear-gradient(rgb(255, 226, 81) 0%, rgb(237, 196, 35) 100%)',
      },
      '&:active': {
        backgroundImage: 'none',
        backgroundColor: theme.palette.text.disabled,
      },
    },
    themeSwitch: {
      display: 'flex',
      width: '64px',
      height: '24px',
      backgroundColor: '#474d57',
      borderRadius: '4px',
    },
    coinPairDraw: {
      borderTopRightRadius: '20px',
      borderTopLeftRadius: '20px',
    },
    themeIconContainer: {
      flex: '1 1 0%',
      textAlign: 'center',
      margin: '1px',
      borderRadius: '3px',
    },
    themeIconContainerBakcground: {
      backgroundColor: 'black',
    },
    themeIcon: {
      width: '16px',
      height: '16px',
      verticalAlign: '-webkit-baseline-middle',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      margin: '4px 0 12px 0',
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      width: '100%',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: '#ededed',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      color: '#ededed',
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    signupDiv: {
      borderRadius: '4px',
      background: '#f3c218',
      padding: '10px 16px',
      cursor: 'pointer',
      textAlign: 'center',
      color: 'black',
      marginBottom: '15px',
      width: '300px',
      marginLeft: 'auto',
      marginRight: 'auto',
      '&:hover': {
        background: '#f2cc2f',
      },
    },
    loginDiv: {
      marginTop: '0px',
      padding: '10px 16px',
      cursor: 'pointer',
      textAlign: 'center',
      '&:hover': {
        color: '#f3c218',
      },
      marginBottom: '15px',
    },
    closeDiv: {
      textAlign: 'right',
      padding: '20px 20px 10px 20px',
    },
    drawManuSide: {
      width: '350px',
    },
    closeIcon: {
      cursor: 'pointer',
    },
    closeIcon1: {
      width: '1em',
      height: '1em',
      fill: '#3d4653',
    },
    drawLink: {
      cursor: 'pointer',
      padding: '16px 16px',
      '&:hover': {
        background: '#2b3139',
      },
    },
    underlineLink: {
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    drawIcon: {
      width: '24px',
      height: '24px',
      fill: '#848e9c',
      verticalAlign: 'text-top',
      marginRight: '5px',
    },
    drawText: {
      textDecoration: 'none',
      color: '#eaecef',
      fontSize: '16px',
      padding: '16px 200px 16px 5px',
      verticalAlign: 'sub',
      '&:hover': {
        color: '#f3c218',
      },
    },
    switchVisible: {
      display: 'flex',
      flex: '1 1 0%',
      minWidth: '0px',
      '@media (max-width: 1000px)': {
        display: 'none',
      },
    },
    pairList: {
      height: '210px',
      overflow: 'auto',
    },
    pairListItem: {
      height: '24px',
      display: 'flex',
      padding: '0 16px',
      cursor: 'pointer',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: '#2b3139',
      },
    },
    selectMenuItem: {
      marginBottom: '16px',
      color: theme.palette.text.primary,
      textAlign: 'center',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.text.disabled,
      },
    },
    active: {
      color: theme.palette.text.disabled,
    },
    favoriteIcon: {
      width: '14px',
      height: '14px',
      marginBottom: '3px',
      marginRight: '2px',
    },
    email: {
      margin: '0px',
      minWidth: '0px',
      padding: '30px 0 16px 16px',
      color: 'rgb(234, 236, 239)',
      fontWeight: 500,
      fontSize: '16px',
    },
    wallet: {
      display: 'flex',
      minWidth: '0px',
      padding: '16px 0 16px 16px',
      color: 'rgb(234, 236, 239)',
      fontWeight: 500,
      fontSize: '14px',
    },
    verifyDiv: {
      borderRadius: '100px 0px 0px 100px',
      display: 'flex',
      background: '#f0ba03',
    },
    verifyIcon: {
      // width: '1em',
      // height: '1em',
      padding: '4px 0px 4px 6px',
    },
    vipText: {
      color: '#f0ba03',
      fontSize: '14px',
      verticalAlign: 'middle',
      marginTop: '4px',
      marginLeft: '4px',
    },
    vipDiv: {
      display: 'flex',
      marginTop: '4px',
    },
    walletText: {
      marginLeft: '12px',
      alignSelf: 'center',
      fontSize: '14px',
      color: '#eaecef',
    },
    verifyText: {
      color: '#161a1e',
      fontSize: '12px',
      padding: '6px 6px',
    },
    walletIcon: {
      width: '26px',
      height: '26px',
    },
    vipIcon: {
      width: '18px',
      height: '18px',
    },
    walover: {
      color: '#848e9c',
      cursor: 'pointer',
      display: 'flex',
      padding: '16px 0 16px 16px',
      '&:hover': {
        backgroundColor: '#2b3139',
        borderRadius: '0px',
        color: '#f0ba03',
      },
    },
    walover1: {
      color: '#848e9c',
      cursor: 'pointer',
      display: 'flex',
      padding: '10px 0px 0px 10px',
      justifyContent: 'space-between',
    },
    splitbar: {
      backgroundColor: '#2b3139',
      height: '1px',
    },
    changeIcon: {
      width: '15px',
      height: '15px',
      marginTop: '1px',
    },
    logoutover: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#2b3139',
        borderRadius: '0px 0px 8px 8px',
        '&.img:hover': {
          color: '#303030',
        },
      },
    },
    clickTab: {
      cursor: 'pointer',
    },
    sortIcon: {
      marginBottom: '2px',
    },
    divider: {
      backgroundColor: '#252930',
      margin: '0 24px 0 16px',
    },
    text4: {
      lineHeight: 1.3,
    },
  }),
)

export const CoinPairSelectMenu = withStyles((theme) => ({
  tooltip: {
    width: '420px',
    height: '320px',
    maxWidth: '420px',
    padding: '8px 0',
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.light,
    boxShadow: 'rgb(20 21 26 / 10%) 0px 0px 1px, rgb(71 77 87 / 8%) 0px 7px 14px, rgb(20 21 26 / 8%) 0px 3px 6px',
  },
}))(Tooltip)

export const SelectMenu = withStyles((theme) => ({
  tooltip: {
    width: '250px',
    maxWidth: '250px',
    borderRadius: '4px',
    padding: '10px 16px 0 16px',
    backgroundColor: theme.palette.primary.light,
    border: '1px solid #2e3032',
    boxShadow: 'rgb(20 21 26 / 10%) 0px 0px 1px, rgb(71 77 87 / 8%) 0px 7px 14px, rgb(20 21 26 / 8%) 0px 3px 6px',
    '&.MuiTooltip-tooltipPlacementBottom': {
      margin: 0,
    },
  },
}))(Tooltip)

export const AuthMenu = withStyles((theme) => ({
  tooltip: {
    width: '200px',
    maxWidth: '200px',
    borderRadius: '8px',
    padding: 0,
    backgroundColor: theme.palette.primary.light,
    boxShadow: 'rgb(20 21 26 / 10%) 0px 0px 1px, rgb(71 77 87 / 8%) 0px 7px 14px, rgb(20 21 26 / 8%) 0px 3px 6px',
    '&.MuiTooltip-tooltipPlacementBottom': {
      margin: 0,
    },
  },
}))(Tooltip)

export const ThemeChangeMenu = withStyles((theme) => ({
  tooltip: {
    width: '344px',
    maxWidth: '344px',
    padding: '0 16px 24px 16px',
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.light,
    boxShadow: 'rgb(20 21 26 / 10%) 0px 0px 1px, rgb(71 77 87 / 8%) 0px 7px 14px, rgb(20 21 26 / 8%) 0px 3px 6px',
  },
}))(Tooltip)
