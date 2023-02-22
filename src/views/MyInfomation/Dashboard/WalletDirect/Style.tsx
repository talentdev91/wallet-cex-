//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '16px 0px',
      display: 'flex',
    },
    text: {
      marginBottom: '12px',
      fontSize: '14px',
      lineHeight: '16px',
      color: '#1e2329',
      display: 'block',
    },
    icon: {
      fontSize: '24px',
      marginRight: '16px',
      color: '#1e2329',
    },
    linkBtn: {
      padding: '6px 16px',
      height: 'auto',
      display: 'inline-flex',
    },
    link: { textDecoration: 'none' },
  }),
)
