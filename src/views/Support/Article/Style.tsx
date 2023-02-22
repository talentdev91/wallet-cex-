//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    root: {
      background: '#fff',
    },
    titleDiv: {
      borderBottom: '1px solid #E6E8EA',
      marginBottom: '20px',
    },
    title: {
      fontSize: '20px',
      fontWeight: 700,
      color: '#1E2329',
      padding: '24px 0px',
    },
    subtitle: {
      fontSize: '16px',
      fontWeight: 600,
      color: '#1e2026',
      lineHeight: '28px',
      marginBottom: '24px',
    },
    text: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#1e2026',
      lineHeight: '28px',
      marginBottom: '24px',
    },
    date: {
      fontSize: '12px',
      fontWeight: 400,
      color: '#1e2026',
      lineHeight: '28px',
      marginBottom: '16px',
    },
    image: {
      width: '100%',
      marginBottom: '24px',
    },
    image1: {
      width: '50%',
      textAlign: 'center',
      marginLeft: '25%',
      marginBottom: '24px',
    },
    footer: {
      background: '#181a20',
      textAlign: 'left',
      position: 'relative',
      width: '100%',
      bottom: '0px',
      padding: '40px 0px 20px 0px',
      marginTop: '28px',
    },
    descriptionDiv: {
      display: 'flex',
    },
    icon1: {
      width: '8px',
      height: '8px',
      marginTop: '10px',
      marginRight: '10px',
      marginLeft: '20px',
      verticalAlign: 'bottom',
    },
  }),
)
