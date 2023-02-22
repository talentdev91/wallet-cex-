//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    CustomCard: {
      backgroundColor: '#ffffff',
      flex: '1 1 0%',
      padding: ' 0px 16px',
      width: '100%',
      boxShadow: 'rgb(20 21 26 / 4%) 0px 1px 2px, rgb(71 77 87 / 4%) 0px 3px 6px, rgb(20 21 26 / 10%) 0px 0px 1px',
      boxSizing: 'border-box',
      borderRadius: '4px',
    },
    CustomCardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #eaecef',
    },
    CustomCardHeaderTitle: {
      display: 'flex',
      boxSizing: 'border-box',
      minWidth: '0px',
      padding: '0px',
      marginRight: '16px',
      flex: '1 1 0%',
    },
    CustomCardHeaderTitleA: {
      textDecoration: 'none',
      display: 'flex',
      color: '#000000',
      fontWeight: 600,
      fontSize: '16px',
      '&:hover': {
        color: '#f1bb12',
      },
    },
    CustomCardHeaderDescription: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    CustomCardHeaderTitleIcon: {
      display: 'flex',
      color: '#000000',
      marginLeft: '16px',
      fontSize: '10px',
      cursor: 'pointer',
      '&:hover': {
        color: '#f1bb12',
      },
    },
    tabItem: {
      paddingTop: '16px',
      paddingBottom: '16px',
      marginRight: '16px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 400,
      color: '#707a8a',
    },
    activeItem: {
      color: '#1e2329',
      fontWeight: 500,
      borderBottom: '3px solid #f0b90b',
    },
    disableAccount: {
      textDecoration: 'underline',
      color: '#c99400',
      fontSize: '12px',
      fontWeight: 400,
      '&:hover': {
        color: '#f0b90b',
      },
    },
    activityItem: {
      marginBottom: '8px',
      borderBottom: '1px solid #eaecef',
      padding: '8px 0',
      lineHeight: 1.5,
    },
  }),
)
