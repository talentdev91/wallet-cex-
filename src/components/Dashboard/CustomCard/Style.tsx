//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      backgroundColor: '#ffffff',
      flex: '1 1 0%',
      padding: ' 0px 16px',
      width: '100%',
      height: '100%',
      boxShadow: 'rgb(20 21 26 / 4%) 0px 1px 2px, rgb(71 77 87 / 4%) 0px 3px 6px, rgb(20 21 26 / 10%) 0px 0px 1px',
      boxSizing: 'border-box',
      borderRadius: '4px',
    },
    cardHeader: {
      display: 'flex',
      paddingTop: '16px',
      paddingBottom: '16px',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #eaecef',
    },
    headerTitle: {
      display: 'flex',
      boxSizing: 'border-box',
      minWidth: '0px',
      padding: '0px',
      marginRight: '16px',
      flex: '1 1 0%',
      alignItems: 'center',
    },
    titleName: {
      textDecoration: 'none',
      display: 'flex',
      color: '#000000',
      fontWeight: 600,
      fontSize: '16px',
      '&:hover': {
        color: '#f1bb12',
      },
    },
    titleMore: {
      display: 'flex',
      marginLeft: '16px',
    },
    headerDescription: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    descriptionMore: {
      display: 'flex',
    },
    descriptionIcon: {
      display: 'flex',
      color: '#000000',
      marginLeft: '16px',
      fontSize: '10px',
      cursor: 'pointer',
      '&:hover': {
        color: '#f1bb12',
      },
    },
  }),
)
