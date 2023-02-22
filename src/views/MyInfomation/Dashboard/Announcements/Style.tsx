//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'block',
      textDecoration: 'none',
      fontSize: '12px',
      marginTop: '8px',
      lineHeight: 1.5,
      padding: '16px 0',
      color: '#1e2329',
      '&:hover': {
        color: '#1e2329',
      },
    },
    borderBottom: {
      borderBottom: '1px solid #eaecef',
    },
    text: {
      '&:hover': {
        color: '#f0b90b',
      },
    },
    date: {
      textAlign: 'right',
      margin: '16px 0px',
    },
  }),
)
