//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      background: 'white',
    },
    mainSearchContainer: {
      marginTop: '30px',
      marginLeft: '150px',
    },
    container: {
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
      minHeight: '400px',
      display: 'flex',
    },
    header: {
      background: '#181a20',
      textAlign: 'center',
      paddingBottom: '34px',
    },
    header1: {
      background: '#181a20',
      textAlign: 'left',
      position: 'relative',
      width: '100%',
      bottom: '0px',
      padding: '40px 0px 20px 0px',
      marginTop: '28px',
    },
    title: {
      fontSize: '36px',
      color: '#EAECEF',
      fontWeight: 700,
      paddingTop: '24px',
      paddingBottom: '20px',
    },
    inputSide: {
      width: '610px',
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: '#2b3139',
      border: '1px solid #2b3139',
      borderRadius: '4px',
      padding: '0.5rem',
      justifyContent: 'space-between',
      height: '48px',
    },
    input: {
      color: theme.palette.secondary.dark,
      fontSize: '14px',
      background: 'transparent',
      border: 'none',
      width: '100%',
      height: '48px',
      '&:focus:not(.focus-visible)': {
        outline: 'none',
      },
    },
    menuLink: {
      color: '#1E2329',
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
    icon1: {
      verticalAlign: 'middle',
      fill: '#CACED3',
    },
    linkLine: {
      left: '',
      top: '',
      position: 'absolute',
      height: 'calc(100% - 14px)',
      borderLeft: '1px solid #E6E8EA',
    },
    leftSide: {
      padding: ' 40px 24px 0px 24px',
    },
    rightSide: {
      display: 'block',
    },
    footer: {
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    footerTitle: {
      color: '#EAECEF',
      fontSize: '20px',
      fontWeight: 500,
      marginBottom: '18px',
    },
    footerLink: {
      color: '#848E9C',
      fontSize: '14px',
      marginBottom: '12px',
      textDecoration: 'none',
      display: 'block',
      '&:hover': {
        color: '#fff',
      },
    },
    divide: {
      // borderTop: '1px solid #272A2E',
      paddingTop: '20px',
      textAlign: 'center',
    },
    footerIcon: {
      fill: '#848E9C',
      width: '22px',
      hegith: '22px',
      '&:hover': {
        fill: 'white',
      },
    },
  }),
)
