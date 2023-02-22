//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      textAlign: 'center',
      marginTop: '24px',
    },
    noRecords: {
      color: '#707a8a',
      fontWeight: 'normal',
      [theme.breakpoints.up(1023)]: {
        fontSize: '16px',
      },
      [theme.breakpoints.down(1023)]: {
        fontSize: '14px',
      },
      [theme.breakpoints.down(767)]: {
        fontSize: '14px',
      },
    },
    notfoundIcon: {
      padding: '24px',
    },
  }),
)
