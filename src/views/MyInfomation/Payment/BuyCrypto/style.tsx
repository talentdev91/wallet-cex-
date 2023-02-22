import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    description: {
      padding: '0 8px',
      marginBottom: '8px',
      fontSize: '14px',
      lineHeight: '24px',
      color: '#212833',
      fontWeight: 'normal',
      maxWidth: '100%',
      [theme.breakpoints.up(1260)]: {
        maxWidth: '748px',
      },
    },
    notAddPayment: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      marginTop: '16px',
      textAlign: 'center',
    },
  }),
)
