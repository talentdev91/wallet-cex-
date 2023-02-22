import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '16px',
      [theme.breakpoints.up(767)]: {
        padding: '32px',
      },
      flexGrow: 1,
    },
    pageTitle: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: '8px',
      [theme.breakpoints.up(767)]: {
        fontSize: '32px',
      },
    },
    tabContainer: {
      borderBottom: '1px solid #eaecef',
      width: '100%',
      display: 'flex',
    },
    tabItem1: {
      cursor: 'pointer',
      borderRight: '1px solid rgb(130 141 155 / 30%)',
      paddingRight: '24px',
    },
    tabItem2: {
      cursor: 'pointer',
      borderRight: '1px solid rgb(130 141 155 / 30%)',
      padding: '0 24px',
    },
    tabItem3: {
      cursor: 'pointer',
      padding: '0 24px',
    },
    tabItemName: {
      color: '#707a8a',
      lineHeight: 1.5,
      fontWeight: 500,
      fontSize: '14px',
      [theme.breakpoints.up(767)]: {
        fontSize: '16px',
      },
    },
    activeTabItem: {
      borderBottom: '2px solid #f0b90b',
      paddingBottom: '8px',
    },
  }),
)
