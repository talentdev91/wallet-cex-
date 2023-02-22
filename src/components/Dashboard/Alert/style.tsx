import { createStyles, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#fef6d8',
      color: '#1e2329',
      width: '100%',
      marginBottom: '24px',
      padding: '8px 12px 8px 12px',
      '& .MuiAlert-message': {
        display: 'flex',
        padding: '0',
      },
    },
    alertcontext: {
      fontSize: '14px',
      fontFamily: 'BinancePlex,Arial,sans-serif!important',
    },
    alert_icon: {
      fontSize: '20px',
      marginRight: '8px',
    },
  }),
)
