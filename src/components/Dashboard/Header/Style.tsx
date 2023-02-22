/** @format */

import { Tooltip } from '@material-ui/core'
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      justifyContent: 'space-between',
      height: '64px',
      backgroundColor: '#181a20',
      '&.MuiPaper-elevation4': {
        boxShadow: 'none',
      },
      paddingLeft: '16px',
      paddingRight: '16px',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      '&.MuiToolbar-gutters': {
        padding: '0 24px 0 16px',
        [theme.breakpoints.down(768)]: {
          padding: '0 0 0 8px',
        },
      },
      '&.MuiToolbar-regular': {
        minHeight: '64px',
      },
    },
    rightHeader: {
      height: '100%',
    },
    menuIconButton: {
      '&.MuiIconButton-root': {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      '@media (min-width: 768px)': {
        display: 'none',
      },
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
    tipItem: {
      display: 'flex',
      minWidth: '0px',
      padding: '16px 0 16px 16px',
      color: 'rgb(234, 236, 239)',
      fontWeight: 300,
      alignSelf: 'center',
      fontSize: '16px',
      cursor: 'pointer',
      '& i:before': {
        fontSize: '24px',
        color: '#848e9c',
      },
      '&:hover': {
        backgroundColor: '#2b3139',
        '&.img:hover': {
          color: '#303030',
        },
        '& i:before': {
          color: '#f0b90b!important',
        },
      },
    },
    tipItemEnd: {
      '&:hover': {
        borderRadius: '0 0 8px 8px!important',
      },
    },
    email: {
      margin: '0px',
      minWidth: '0px',
      padding: '16px 0 16px 16px',
      color: 'rgb(234, 236, 239)',
      fontWeight: 400,
      fontSize: '20px',
    },
    wallet: {
      display: 'flex',
      minWidth: '0px',
      padding: '16px 0 16px 20px',
      color: 'rgb(234, 236, 239)',
      fontWeight: 400,
      fontSize: '16px',
      '& i:before': {
        fontSize: '24px',
        color: '#848e9c',
      },
      '&:hover': {
        backgroundColor: '#2b3139',
        '&.img:hover': {
          color: '#303030',
        },
        '& i:before': {
          color: '#f0b90b!important',
        },
      },
    },
    walover: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#2b3139',
        borderRadius: '0px',
      },
    },
    splitbar: {
      backgroundColor: '#2b3139',
      height: '1px',
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
    accountIcon: {
      height: '100%',
      cursor: 'pointer',
      '&:hover': {
        color: '#f0b90b',
      },
    },
    fontColor1: {
      color: theme.palette.text.secondary,
    },
    disappear: {
      '@media (max-width:768px)': {
        display: 'none',
      },
      '&:hover': {
        color: '#f0b90b',
      },
    },
    hover: {
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.text.disabled,
      },
    },
    space: {
      padding: '0 8px',
      alignSelf: 'center',
    },
    ordersNav: {
      height: '100%',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.text.secondary,
      cursor: 'pointer',
      padding: '0 8px',
      alignSelf: 'center',
      '@media (max-width:768px)': {
        display: 'none',
      },
      '&:hover': {
        color: '#f0b90b',
        '& svg': {
          color: '#f0b90b',
        },
      },
      '& svg': {
        color: '#848e9c',
      },
    },
    drawManuSide: {
      width: '350px',
    },
    closeDiv: {
      textAlign: 'right',
      padding: '20px 20px 10px 20px',
    },
    drawLink: {
      cursor: 'pointer',
      padding: '16px 16px',
      '&:hover': {
        background: '#2b3139',
      },
    },
    drawIcon: {
      width: '24px',
      height: '24px',
      fill: '#848e9c',
      verticalAlign: 'text-top',
      marginRight: '5px',
    },
    closeIcon: {
      cursor: 'pointer',
    },
    drawText: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: '#eaecef',
      fontSize: '16px',
      verticalAlign: 'sub',
      '& i': {
        marginRight: '5px',
      },
      '& svg': {
        marginRight: '5px',
      },
      '&:hover': {
        '& i:before': {
          color: '#f0b90b',
        },
        '& svg': {
          color: '#f0b90b',
        },
      },
    },
    fs28: {
      fontSize: '28px!important',
      '&:before': {
        fontSize: '28px!important',
      },
    },
    fs20: {
      fontSize: '20px!important',
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
    walover1: {
      color: '#848e9c',
      cursor: 'pointer',
      display: 'flex',
      padding: '10px 0px 0px 10px',
      justifyContent: 'space-between',
    },
    vipIcon: {
      width: '18px',
      height: '18px',
    },
    verifyText: {
      color: '#161a1e',
      fontSize: '12px',
      padding: '6px 6px',
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
  }),
)

export const AuthMenu = withStyles((theme) => ({
  tooltip: {
    width: '200px',
    maxWidth: '200px',
    borderRadius: '0 0 8px 8px',
    padding: 0,
    backgroundColor: theme.palette.primary.light,
    boxShadow: 'rgb(20 21 26 / 10%) 0px 0px 1px, rgb(71 77 87 / 8%) 0px 7px 14px, rgb(20 21 26 / 8%) 0px 3px 6px',
    '&.MuiTooltip-tooltipPlacementBottom': {
      margin: 0,
    },
  },
}))(Tooltip)
