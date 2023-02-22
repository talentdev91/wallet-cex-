//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: 'white!important',
      padding: '0px',
      overflow: 'auto',
      minHeight: '100vh',
    },
    bodyContent: {
      display: 'flex',
      [theme.breakpoints.down(768)]: {
        flexDirection: 'column',
      },
    },
  }),
)
