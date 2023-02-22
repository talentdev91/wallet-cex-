import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px',
      textAlign: 'center',
      marginBottom: '24px',
    },
    tabMenuVisible: {
      display: 'flex',
      marginBottom: '24px',
      '& p': {
        flex: '1 1 0%',
        fontSize: '16px',
        marginRight: '0px',
      },
    },
    content: {
      display: 'flex',
      marginBottom: '24px',
      justifyContent: 'center',
    },
    linkBtn: {
      width: '50%',
      color: '#1e2329',
      margin: '0 8px',
      padding: '8px 0',
      borderRadius: '4px',
      textDecoration: 'none',
      textAlign: 'center',
      '&:hover': {
        backgroundColor: '#f5f5f5',
        color: '#1e2329',
      },
      '& i': {
        fontSize: '24px',
      },
      '& div': {
        fontWeight: 500,
      },
    },
    linkBtnLarge: {
      width: '50%',
      color: '#1e2329',
      margin: '0 8px',
      padding: '24px',
      borderRadius: '4px',
      textDecoration: 'none',
      textAlign: 'center',
      '&:hover': {
        backgroundColor: '#f5f5f5',
        color: '#1e2329',
      },
      '& div': {
        fontWeight: 500,
      },
    },
    qrcode: {
      borderRadius: '4px',
      padding: '8px',
      textAlign: 'center',
      boxShadow: 'rgb(24 26 32 / 10%) 0px 0px 1px, rgb(71 77 87 / 4%) 0px 3px 6px, rgb(24 26 32 / 4%) 0px 1px 2px',
      '& img': {
        width: '88px',
      },
    },
    qrcodelarge: {
      borderRadius: '4px',
      padding: '8px',
      textAlign: 'center',
      boxShadow: 'rgb(24 26 32 / 10%) 0px 0px 1px, rgb(71 77 87 / 4%) 0px 3px 6px, rgb(24 26 32 / 4%) 0px 1px 2px',
      '& img': {
        width: '96px',
      },
    },
    qrcodeText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: '16px',
    },
    qrcodeTextTwo: {
      marginTop: '8px',
      textAlign: 'center',
    },
    txt: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 500,
      color: '#1e2329',
    },
    txtlarge: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 500,
      color: '#1e2329',
    },
    txtdisable: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400,
      color: '#474d57',
      marginTop: '12px',
    },
    txtdisablelarge: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      color: '#707a8a',
      margin: '16px 0 4px 0',
    },
    linkTxt: {
      color: '#474d57',
      fontSize: '14px',
      textDecoration: 'underline',
      marginLeft: '8px',
      '&:hover': {
        color: '#474d57',
      },
    },
    icondisable: {
      color: '#707a8a',
      fontSize: '24px',
    },
    fs24: {
      fontSize: '24px',
    },
    fs32: {
      fontSize: '32px',
    },
    fs12: {
      fontSize: '12px',
      lineHeight: '16px',
    },
  }),
)
