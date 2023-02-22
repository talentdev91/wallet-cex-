import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    card: {
      width: '100%',
      backgroundColor: '#f2be12',
    },
    inviteTitle: {
      display: 'flex',
      paddingTop: '4px',
      paddingBottom: '4px',
      fontSize: '16px',
      fontWeight: 500,
      color: '#1e2329',
      fontFamily: 'Roboto',
    },
    inviteRoot: {
      display: 'flex',
      padding: '8px 16px',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    inviteIcon: {
      color: '#000000',
      fontSize: '10px',
    },
    link: {
      textDecoration: 'none',
    },
  }),
)
