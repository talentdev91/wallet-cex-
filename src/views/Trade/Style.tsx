/** @format */

//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
      width: '100%',
      height: '100%',
    },
    appBar: {
      backgroundColor: theme.palette.background.paper,
    },
    toolbar: {
      display: 'flex',
      '&.MuiToolbar-gutters': {
        padding: '0 24px 0 16px',
        [theme.breakpoints.down(769)]: {
          padding: '0 0 0 8px',
        },
      },
      '&.MuiToolbar-regular': {
        [theme.breakpoints.down(769)]: {
          minHeight: '150px',
        },
      },
    },
    tradeContainer: {
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      display: 'grid',
      width: '100vw',
      height: '100vh',
      minHeight: '680px',
      backgroundColor: theme.palette.background.default,
      gap: '1px',
      gridTemplateColumns: '1fr 305px 260px',
      gridTemplateRows: 'minmax(64px, auto) 1fr auto 240px 24px',
      gridTemplateAreas: `
        "header header header" 
        "chart orderbook trades"
        "chart orderform orderform"
        "userinfo orderform orderform"
        "footer footer footer"`,
      '@media (max-width: 1000px)': {
        minHeight: '1088px',
        gap: '4px',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: 'minmax(64px, auto) minmax(64px, auto) 1.6fr 1.15fr 1fr 24px',
        gridTemplateAreas: `
          "header header header"
          "switch switch switch"
          "chart chart orderform"
          "trades orderbook orderform"
          "userinfo userinfo orderform"
          "footer footer footer"`,
      },
      '@media (max-width: 768px)': {
        height: 'auto',
        minHeight: '930px',
        gap: '4px',
        gridTemplateColumns: '100vw',
        gridTemplateRows: 'minmax(64px, auto) minmax(150px, auto) 405px 1fr 72px',
        gridTemplateAreas: `
          "header"
          "switch"
          "chart"
          "userinfo"
          "orderform"`,
      },
    },
    alertDiv: {
      background: '#3c2601',
      padding: '7px 28px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    alertHide: {
      display: 'none',
    },
    alertLink: {
      color: '#f0b90b',
      marginLeft: '8px',
      cursor: 'pointer',
    },
    alertLinkIcon: {
      fill: '#f0b90b',
      verticalAlign: 'middle',
      width: '18px',
    },
    alertIcon: {
      marginTop: '-2px',
      marginRight: '10px',
      height: '25px',
    },
    alertText: {
      color: '#eaecef',
      fontSize: '14px',
    },
    header: {
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      width: '100%',
      height: '100%',
      gridArea: 'header / header / header / header',
      zIndex: 10,
    },
    switch: {
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      width: '100%',
      height: '100%',
      gridArea: 'switch / switch / switch / switch',
      display: 'none',
      '@media (max-width: 1000px)': {
        display: 'block',
      },
    },
    chart: {
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      gridArea: 'chart / chart / chart / chart',
      position: 'relative',
    },
    orderbook: {
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      gridArea: 'orderbook / orderbook / orderbook / orderbook',
      position: 'relative',
      paddingTop: '16px',
      paddingBottom: '8px',
      display: 'block',
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    trades: {
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      width: '100%',
      height: '100%',
      paddingBottom: '0px',
      backgroundColor: theme.palette.primary.main,
      gridArea: 'trades / trades / trades / trades',
      display: 'block',
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    userinfo: {
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      width: '100%',
      height: '100%',
      gridArea: 'userinfo / userinfo / userinfo / userinfo',
      padding: '0 16px 16px 16px',
      backgroundColor: theme.palette.primary.main,
      zIndex: 'auto',
      position: 'relative',
      display: 'block',
    },
    orderform: {
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      gridArea: 'orderform / orderform / orderform / orderform',
      backgroundColor: theme.palette.primary.main,
      '@media (max-width: 767px)': {
        overFlow: 'hidden auto',
        zIndex: 20,
        width: '100%',
        overflowX: 'initial',
        overflowY: 'visible',
        position: 'fixed',
        bottom: '0px',
        paddingBottom: '5px',
      },
    },
    footer: {
      boxSizing: 'border-box',
      minWidth: '0px',
      gridArea: 'footer / footer / footer / footer',
      backgroundColor: theme.palette.primary.main,
      paddingLeft: '10px',
      display: 'flex',
      WebkitBoxAlign: 'center',
      alignItems: 'center',
      WebkitBoxPack: 'justify',
      justifyContent: 'space-between',
      '@media (max-width: 1000px)': {
        position: 'sticky',
        top: '0px',
      },
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    PhoneSwitchDiv: {
      width: '100%',
      '@media (min-width:769px)': {
        display: 'none',
      },
    },
    bodySide: {
      borderTop: '1px solid' + theme.palette.error.main,
      '@media (min-width: 768px)': {},
      // background: theme.palette.info.light,
    },
    bodyTop: {
      display: 'flex',
      padding: '16px 1rem 0px 1rem',
      '@media (min-width: 768px)': {
        display: 'none',
        padding: '0px',
      },
    },
    setTextColor: {
      color: '#f0b90b',
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
    bodyMain: {
      padding: '0rem',
      height: 'calc(100vh - 21rem)',
      '@media (max-width: 768px)': {
        padding: '1rem',
        height: '330px',
      },
      '@media (max-width: 999px)': {
        padding: '0rem',
        height: '460px',
      },
    },
    // chartDiv: {
    //   height: "410px",
    //   "@media (max-width: 769px)": {
    //     display: "none",
    //   },
    // },
  }),
)
