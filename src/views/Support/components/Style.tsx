//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuLink: {
      color: '#474D57',
      display: 'block',
      fontSize: '14px',
      textDecoration: 'none',
      lineHeight: '40px',
      wordBreak: 'break-word',
      '&:hover': {
        color: '#C99400',
        textDecoration: 'underline',
      },
    },
    titleDiv: {
      display: 'block',
    },
    menuDiv: {
      display: 'flex',
      marginLeft: '44px',
    },
    title: {
      fontSize: '40px',
      color: '#1E2329',
      fontWeight: 600,
      padding: '40px 0px',
    },
    subTitle: {
      fontSize: '24px',
      fontWeight: 400,
      color: '#C99400',
    },
    icon: {
      width: '40px',
      height: '40px',
      verticalAlign: 'middle',
      marginRight: '10px',
    },
    dotIcon: {
      width: '8px',
      height: '8px',
      marginRight: '18px',
      fill: '#D8DCE1',
    },
  }),
)
