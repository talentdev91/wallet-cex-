//material-ui
import { Tab, Tabs } from '@material-ui/core'
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#12161c',
      [theme.breakpoints.up(768)]: {
        display: 'none',
      },
    },
    tabs: {
      flexGrow: 1,
      width: '100%',
      padding: '10px 16px 5px 16px',
    },
    tabPanel: {
      padding: '0px 16px 16px 16px',
    },
    inputBase: {
      width: '100%',
    },
    selectTab: {
      width: '100%',
      color: '#212833',
      backgroundColor: 'white',
      whiteSpace: 'nowrap',
      fontSize: '14px',
      fontWeight: 500,
      borderRadius: '2px',
      height: '40px',
      justifyContent: 'space-between',
      display: 'flex',
      padding: '0px 16px',
      alignItems: 'center',
      border: 'none',
      fontFamily: 'Roboto',
      zIndex: 11,
      '& svg': {
        margin: '0px 4px',
        color: '#848e9c',
        fontSize: '20px',
      },
      [theme.breakpoints.up(768)]: {
        display: 'none',
      },
    },
    selectPaper: {
      width: '100%',
      padding: '0px 16px',
      zIndex: 11,
      top: '-2px!important',
      marginLeft: '5px',
      [theme.breakpoints.up(768)]: {
        display: 'none',
      },
    },
    PopperPaper: {
      border: 'none',
      backgroundColor: 'white',
      borderRadius: '2px',
      borderTop: 'none',
      '& a': {
        fontSize: '14px',
        color: '#212833',
        padding: '8px 24px',
      },
    },
    backdrop: {
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      position: 'fixed',
      inset: '0px',
      backgroundColor: '#00000080',
      zIndex: 10,
    },
    hidden: {
      display: 'none',
    },
    activeChild: {
      backgroundColor: '#f5f5f5',
    },
  }),
)

export const StyledTabs = withStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '35px',
      height: '35px',
    },
    indicator: {
      display: 'none',
    },
    flexContainer: {
      justifyContent: 'space-between',
    },
  }),
)(Tabs)

export const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0 0px 0px 0px',
      fontSize: '15px',
      lineHeight: 1.5,
      color: '#707a8a',
      textTransform: 'none',
      fontWeight: 400,
      opacity: 1,
      minHeight: '35px',
      minWidth: '0px',
      margin: '0 10px',
      height: '35px',
      '& .MuiTab-wrapper>span': {
        borderBottom: '2px solid transparent',
      },
      '&.Mui-selected': {
        color: 'white',
        '& i': {
          color: '#f0b90b',
        },
        '& .MuiTab-wrapper>span': {
          borderBottom: '2px solid #f0b90b ',
        },
      },
    },
    wrapper: {
      fontFamily: 'BinancePlex,Arial,sans-serif!important',
      flexDirection: 'row',
      alignItems: 'end',
      whiteSpace: 'nowrap',
      '& i': {
        margin: '0px 5px 2px 0px!important',
        fontSize: '24px',
      },
    },
  }),
)(Tab)
