//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leftContent: {
      display: 'flex',
      alignItems: 'center',
    },
    link: {
      color: '#1e2329',
      padding: '8px',
      fontSize: '16px',
      fontWeight: 700,
      textDecoration: 'none',
      marginRight: '16px',
      '&:hover': {
        textDecoration: 'underline',
        color: '#f0b90b',
      },
    },
    badge: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '16px',
      minWidth: '16px',
      fontSize: '12px',
      fontWeight: 600,
      borderRadius: '25px',
      backgroundColor: '#f0b90b',
      color: '#1e2329',
    },
    button: {
      boxShadow: 'rgb(234 236 239) 0px 0px 0px 1px inset',
      color: '#1e2329',
      fontWeight: 500,
      textTransform: 'none',
      border: 'none',
      '&:hover': {
        color: '#1e2329',
        border: 'none',
      },
    },
  }),
)
