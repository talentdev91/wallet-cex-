import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'

import { InputBase, Checkbox } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '5px !important',
        height: '6px',
        background: theme.palette.error.light,
      },
      '*::-webkit-scrollbar-track': {
        borderRadius: '0px',
        background: 'rgba(0, 0, 0, 0.05)',
      },
      '*::-webkit-scrollbar-thumb': {
        background: theme.palette.error.contrastText,
        borderRadius: '3px',
      },
    },
    root: {
      background: theme.palette.common.black,
      height: '100vh',
      '@media (max-height:900px)': {
        height: '100vh',
      },
    },
    root2: {
      background: theme.palette.common.black,
      height: '100vh',
      '@media (max-height:900px)': {
        height: '100vh',
      },
    },
    appbar: {
      background: 'transparent',
      '&.MuiPaper-elevation4': {
        boxShadow: 'none',
      },
      padding: '0rem 0.5rem',
    },
    toolbar: {
      justifyContent: 'space-between',
      display: 'flex',
      '&.MuiToolbar-gutters': {
        padding: '0 24px 0 16px',
        [theme.breakpoints.down(760)]: {
          padding: '0 0 0 8px',
        },
      },
    },
    fontColor1: {
      color: theme.palette.secondary.dark,
      marginLeft: '0px',
    },
    fontColor2: {
      color: theme.palette.text.hint,
    },
    capcha: {
      paddingTop: '15px',

      '@media (max-width: 400px)': {
        textAlign: '-webkit-center',
      },
    },
    container: {
      maxWidth: '390px',
      marginTop: '50px',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxSizing: 'border-box',
      // overflow: 'hidden',
      flexDirection: 'column',
      flex: '1 1 0%',
      '@media (max-width: 400px)': {
        width: '95%',
        textAlign: 'center',
      },
      padding: '0.5rem',
    },
    container2: {
      maxWidth: '390px',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: '90vh',
      '@media (max-width: 400px)': {
        width: '95%',
        textAlign: 'center',
      },
      padding: '0.5rem',
    },
    themeIcon: {
      fill: theme.palette.secondary.dark,
      '&:hover': {
        fill: '#c99400',
      },
    },
    selectMode: {
      color: theme.palette.secondary.dark,
      padding: '8px 24px',
      lineHeight: '24px',
      fontWeight: 500,
      background: theme.palette.warning.dark,
      marginLeft: '26px',
      borderRadius: '8px',
      cursor: 'pointer',
      '@media (max-width: 400px)': {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    codeInput: {
      background: 'black',
    },
    selectMode1: {
      color: theme.palette.secondary.dark,
      padding: '8px 24px',
      lineHeight: '24px',
      fontWeight: 500,
      background: theme.palette.warning.dark,
      borderRadius: '8px',
      cursor: 'pointer',
      '@media (max-width: 400px)': {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    notificationBackground1: { background: '#bf2d29' },
    notificationBackground2: { background: '#0ECB81' },
    leftSide: {
      width: '100%',
    },
    rightSide: {
      width: '300px',
    },

    unSelect1: {
      color: theme.palette.secondary.main,
      padding: '8px 24px',
      lineHeight: '24px',
      fontWeight: 500,
      '@media (max-width: 400px)': {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      cursor: 'pointer',
    },
    unSelect: {
      color: theme.palette.secondary.main,
      padding: '8px 24px',
      lineHeight: '24px',
      fontWeight: 500,
      marginLeft: '26px',
      '@media (max-width: 400px)': {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      cursor: 'pointer',
    },
    btnSide: {
      display: 'flex',
      marginTop: '20px',
    },
    btnSide2: {
      display: 'grid',
      marginTop: '20px',
    },
    h2: {
      fontSize: '32px',
      fontWeight: 600,
      marginBottom: '16px',
    },
    helperText: {
      fontSize: '14px',
    },
    helperText3: {
      fontSize: '14px',
      paddingLeft: '0px',
      marginLeft: '0px',
    },
    helperText2: {
      fontSize: '14px',
      color: 'red',
    },
    formControlSide: {
      width: '100%',
      marginTop: '20px',
    },
    formControlSide1: {
      width: '100%',
      marginTop: '20px',
      paddingRight: '24px',
      paddingLeft: '24px',
      marginBottom: '10px',
    },
    idText: {
      cursor: 'pointer',
    },
    registerBtn: {
      width: '100%',
      padding: '14px 0rem',
      border: 'none',
      color: '#212833',
      background: '#fcd535',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '20px',
    },
    registerBtn3: {
      width: '100%',
      padding: '14px 0rem',
      border: 'none',
      color: '#212833',
      background: '#786b36',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '20px',
    },
    text3: {
      width: '290px',
      display: 'flex',
      fontSize: '14px',
    },
    warnIcon: {
      width: '18px',
      height: '18px',
      verticalAlign: 'middle',
      margin: '1px 0px 0px 2px',
    },
    error: {
      color: '#f6465d',
      marginLeft: 0,
    },
    link: {
      textDecoration: 'none',
      padding: '6px 12px',
      width: 'max-content',
      height: 'max-content',
      alignSelf: 'center',
    },
    hover: {
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.text.disabled,
      },
    },
    loginLink: {
      fontSize: '14px',
      color: '#fcd535',
      cursor: 'pointer',
      marginBottom: '12px',
      marginLeft: '10px',
      width: '100px',
      textDecoration: 'none',
      '&:hover': {
        color: '#fcd535',
      },
    },
    loginLink2: {
      fontSize: '14px',
      color: '#fcd535',
      cursor: 'pointer',
      marginBottom: '12px',
      width: '100px',
      textAlign: 'left',
      textDecoration: 'none',
      '&:hover': {
        color: '#fcd535',
      },
    },
    loginLink3: {
      fontSize: '14px',
      color: '#fcd535',
      cursor: 'pointer',
      marginBottom: '12px',
      width: '200px',
      background: 'transparent',
      textAlign: 'left',
      border: 'none',
      paddingLeft: '0px',
      textDecoration: 'none',
      '&:hover': {
        color: '#fcd535',
      },
    },
    loginLink4: {
      fontSize: '14px',
      color: '#fcd535',
      marginTop: '-2px',
      cursor: 'pointer',
      marginBottom: '12px',
      marginLeft: '10px',
      width: '100px',
      textDecoration: 'none',
      '&:hover': {
        color: '#fcd535',
      },
    },
    forgotLink: {
      fontSize: '14px',
      color: '#fcd535',
      cursor: 'pointer',
      marginBottom: '12px',
      border: 'none',
      background: 'transparent',
      textDecoration: 'none',
      textAlign: 'left',
      padding: '0px',
      width: '150px',
      '&:hover': {
        color: '#fcd535',
      },
    },
    subTitle: {
      width: '420px',
      fontWeight: 400,
      marginBottom: '44px',
      '@media (max-width: 450px)': {
        width: '100%',
      },
    },
    notiSide: {
      textAlign: 'center',
      padding: '8px 0px',
      background: theme.palette.warning.main,
    },
    notiText: {
      color: theme.palette.warning.contrastText,
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '16px',
    },
    modal: {
      width: '360px',
      height: 'fit-content',
      background: '#1e2329',
      textAlign: 'center',
      borderRadius: '8px',
      margin: 'auto',
      padding: '2rem 0rem',
      marginTop: '10%',
    },
    modalText: {
      color: '#848e9c',
      fontSize: '16px',
      lineHeight: '24px',
      padding: '0rem 1.5rem',
    },
    cancelBtn: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      padding: '10px 12px',
      background: '#474d57',
      color: '#eaecef',
      border: 'none',
      borderRadius: '4px',
      width: '38%',
      '&:hover': {
        background: '#2b3139',
      },
    },
    continueBtn: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      padding: '10px 12px',
      background: '#fcd535',
      color: '#212833',
      border: 'none',
      borderRadius: '4px',
      width: '38%',
      textDecoration: 'none',
      marginLeft: '10px',
      '&:hover': {
        background: '#e5c334',
      },
    },
    modalDescription: {
      color: '#848e9c',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px',
    },
    modalDescription1: {
      color: '#848e9c',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px',
      padding: '10px 70px',
      textAlign: 'center',
    },
    errorIcon: {
      justifyItems: 'center',
    },
    okBtn: {
      background: '#f0b90b',
      border: 'none',
      width: '100%',
      padding: '12px',
      marginTop: '20px',
      cursor: 'pointer',
      borderRadius: '6px',
    },
    tryBtn: {
      background: '#474d57',
      border: 'none',
      width: '100%',
      padding: '12px',
      marginTop: '20px',
      cursor: 'pointer',
      borderRadius: '6px',
      color: '#848e9c',
      fontSize: '14px',
    },
    helpTitle: {
      textAlign: 'center',
      fontSize: '28px',
      fontWeight: 500,
      color: '#b7bdc6',
    },
    inputSide6: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: 'transparent',
      border: '1px solid #474d57',
      borderRadius: '4px',
      padding: '10px',
      width: '100%',
      justifyContent: 'space-between',
      '&:hover': {
        border: '1px solid #f0b90b',
      },
      '& input::placeholder': {
        color: '#5e6673',
      },
    },
    inputSide7: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: 'transparent',
      border: '1px solid #f0b90b',
      borderRadius: '4px',
      padding: '10px',
      width: '100%',
      justifyContent: 'space-between',
      '& input::placeholder': {
        color: '#5e6673',
      },
    },
    inputSide: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: 'transparent',
      border: '1px solid #474d57',
      borderRadius: '4px',
      padding: '13px',
      width: '100%',
      justifyContent: 'space-between',
      '&:hover': {
        border: '1px solid #f0b90b',
      },
    },
    inputSide2: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: 'transparent',
      border: '1px solid #f6465d',
      borderRadius: '4px',
      padding: '13px',
      width: '100%',
      justifyContent: 'space-between',
    },
    inputSide3: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: 'transparent',
      border: '1px solid #f0b90b',
      borderRadius: '4px',
      padding: '13px',
      width: '100%',
      justifyContent: 'space-between',
    },
    phoneSide: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: 'transparent',
      border: '1px solid #474d57',
      borderRadius: '4px',
      padding: '11px',
      width: '68%',
      justifyContent: 'space-between',
      '&:hover': {
        border: '1px solid #f0b90b',
      },
    },
    phoneSide2: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: 'transparent',
      border: '1px solid #f6465d',
      borderRadius: '4px',
      padding: '11px',
      width: '68%',
      justifyContent: 'space-between',
    },
    phoneSide3: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: 'transparent',
      border: '1px solid #f0b90b',
      borderRadius: '4px',
      padding: '11px',
      width: '68%',
      justifyContent: 'space-between',
    },
    securityBtn: {
      color: '#fcd535',
      textAlign: 'center',
      background: 'transparent',
      border: 'none',
      marginTop: '24px',
      cursor: 'pointer',
      paddingLeft: '0px',
    },
    sendCodeBtn: {
      color: '#fcd535',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      paddingLeft: '0px',
      width: '100px',
    },
    disableSendBtn: {
      color: '#fcd535',
      background: '#6a5a17',
      border: 'none',
      cursor: 'pointer',
      paddingLeft: '0px',
      width: '100px',
    },
    codeCharact: {
      border: '1px solid #474d57',
      borderRadius: '4px',
      marginRight: '20px',
      padding: '10px 4px',
      color: '#eaecef',
      minHeight: '46px',
      cursor: 'text',
      '&:hover': {
        border: '1px solid #f0b90b',
      },
    },
    codeSelect: {
      border: '1px solid #f0b90b',
      borderRadius: '4px',
      marginRight: '20px',
      padding: '10px 4px',
      color: '#eaecef',
      height: '41px',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingRight: '24px',
      paddingLeft: '24px',
    },
    flagIcon: {
      width: '32px',
      height: '32px',
      marginTop: '5px',
      marginRight: '10px',
    },
    flagDiv: {
      display: 'flex',
    },
    countryDiv: {
      width: '100%',
      display: 'flex',
      padding: '6px 24px 6px 24px',
      justifyContent: 'space-between',
      cursor: 'pointer',
      '&:hover': {
        background: '#2b3139',
      },
    },
    disableLink: {
      fontSize: '14px',
      color: '#a2a4a7',
      cursor: 'pointer',
      marginBottom: '12px',
      border: 'none',
      background: 'transparent',
      textDecoration: 'none',
      textAlign: 'left',
      padding: '0px',
      width: '150px',
    },
    closeIcon: {
      paddingTop: '20px',
      width: '40px',
      height: '40px',
      fill: '#848e9c',
      cursor: 'pointer',
      '&:hover': {
        fill: '#f0b90b',
      },
    },
    helpIcon: {
      marginLeft: '35%',
    },
    countrySide: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: 'transparent',
      border: '1px solid #474d57',
      borderRadius: '4px',
      padding: '11px 5px 11px 13px',
      width: '28%',
      justifyContent: 'space-between',
      cursor: 'pointer',
      '&:hover': {
        border: '1px solid #f0b90b',
      },
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    countrySide2: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: 'transparent',
      border: '1px solid #474d57',
      borderRadius: '4px',
      padding: '11px 5px 11px 13px',
      width: '28%',
      justifyContent: 'space-between',
      '&:hover': {
        border: '1px solid #f0b90b',
      },
      '@media (min-width: 768px)': {
        display: 'none',
      },
    },
    phoneModalContainer: {
      width: '384px',
      background: '#1e2329',
      border: 'none',
      boxShadow: 'rgb(20 21 26 / 16%) 0px 8px 16px, rgb(71 77 87 / 16%) 0px 16px 32px, rgb(20 21 26 / 10%) 0px 0px 1px',
      borderRadius: '6px',
      animation: '0.3s ease-in-out 0s 1 normal none running animation-1wqz9z0',
      '&:focus:not(.focus-visible)': {
        outline: 'none',
      },
      marginLeft: 'auto',
      marginRight: 'auto',
      overflowX: 'hidden',
      paddingBottom: '12px',
      overflowY: 'hidden',
    },
    phoneDrawContainer: {
      width: '100%',
      maxHeight: '440px',
      borderTopRightRadius: '20px',
      borderTopLeftRadius: '20px',
      background: '#1e2329',
      border: 'none',
      boxShadow: 'rgb(20 21 26 / 16%) 0px 8px 16px, rgb(71 77 87 / 16%) 0px 16px 32px, rgb(20 21 26 / 10%) 0px 0px 1px',
      borderRadius: '6px',
      animation: '0.3s ease-in-out 0s 1 normal none running animation-1wqz9z0',
      '&:focus:not(.focus-visible)': {
        outline: 'none',
      },
      marginLeft: 'auto',
      marginRight: 'auto',
      overflow: 'hidden',
    },
    drawRoot: {
      '&.MuiDrawer-paperAnchorBottom': {
        background: 'transparent',
      },
      // '&.paperAnchorDockedBottom': {
      //   background: 'transparent',
      // },
    },
    helpModalContainer: {
      width: '320px',
      background: '#1e2329',
      border: 'none',
      boxShadow: 'rgb(20 21 26 / 16%) 0px 8px 16px, rgb(71 77 87 / 16%) 0px 16px 32px, rgb(20 21 26 / 10%) 0px 0px 1px',
      borderRadius: '6px',
      animation: '0.3s ease-in-out 0s 1 normal none running animation-1wqz9z0',
      '&:focus:not(.focus-visible)': {
        outline: 'none',
      },
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '26px',
    },
    errorModalContainer: {
      width: '420px',
      textAlign: 'center',
      background: '#1e2329',
      border: 'none',
      boxShadow: 'rgb(20 21 26 / 16%) 0px 8px 16px, rgb(71 77 87 / 16%) 0px 16px 32px, rgb(20 21 26 / 10%) 0px 0px 1px',
      borderRadius: '6px',
      animation: '0.3s ease-in-out 0s 1 normal none running animation-1wqz9z0',
      '&:focus:not(.focus-visible)': {
        outline: 'none',
      },
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '26px',
    },
    modalTitle: {
      color: '#eaecef',
      fontSize: '20px',
      lineHeight: '24px',
      paddingTop: '20px',
    },
    phoneNumDiv: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    checkDiv: {
      float: 'left',
      marginLeft: '12px',
    },
    checkDiv1: {
      marginTop: '26px',
      marginLeft: '12px',
      float: 'left',
    },
    checked: {
      color: 'red',
    },
    checkBox: {
      display: 'flex',
    },
    fontColor5: {
      color: '#848E9C',
      fontWeight: 400,
    },
    fontColor3: {
      color: '#848E9C',
      fontWeight: 400,
      paddingLeft: '0px',
    },
    icon: {
      fill: '#5e6673',
      width: '18px',
      height: '18px',
      '&:hover': {
        fill: '#848e9c',
      },
    },
    h3: {
      fontSize: '14px',
    },
    termlink: {
      color: '#fcd535',
      padding: '12px 0px',
      marginLeft: '-11px',
    },
    text2: {
      color: '#848e9c',
      fontSize: '12px',
      marginBottom: '20px',
    },
    checkEmail: {
      width: '500px',
      '@media (max-width: 360px)': {
        width: '300px',
      },
    },
    phoneNumText: {
      color: '#eaecef',
      fontSize: '14px',
      marginLeft: '-6px',
    },
    checkEmail2: {
      width: '420px',
      '@media (max-width: 360px)': {
        width: '300px',
      },
    },
    flag: {
      width: '16px',
      height: '16px',
    },
    flagBtn: {
      // width: '16px',
      // height: '16px',
      verticalAlign: 'center',
      fill: '#eaecef',
    },
    titleDiv: {
      textAlign: 'center',
    },
    resendbtn: {
      color: '#fcd535',
      textAlign: 'center',
      background: 'transparent',
      border: 'none',
      marginTop: '8px',
      cursor: 'pointer',
    },
    disableBtn: {
      width: '100%',
      padding: '0.7rem 0rem',
      border: 'none',
      color: '#212833',
      background: '#81702d',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'not-allowed',
      marginTop: '40px',
    },

    code: {
      background: 'transparent',
      border: 'none',
      color: '#fcd535',
      cursor: 'pointer',
      width: '22%',
    },
    text: {
      marginTop: '40px',
    },
    codeText: {
      fontSize: '16px',
      marginTop: '44px',
      marginBottom: '15px',
    },
    input: {
      color: theme.palette.secondary.dark,
      fontSize: '14px',
      background: 'transparent',
      border: 'none',
      width: '100%',
      '&:focus:not(.focus-visible)': {
        outline: 'none',
      },
    },
    registerFormContainer: {
      width: '384px',
      marginTop: '64px',
      marginLeft: 'auto',
      marginRight: 'auto',
      '@media (max-width: 500px)': {
        width: '100%',
        marginTop: '20px',
      },
    },
    h4: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: '16px',
    },

    searchIcon: {
      fill: '#5e6673',
    },
    phoneNumList: {
      maxHeight: '300px',
      minHeight: '300px',
      overflowY: 'auto',
      paddingBottom: '18px',
    },
    countryName: {
      fontSize: '14px',
      lineHeight: '44px',
      color: '#eaecef',
    },
    footer: {
      color: '#B7BDC6',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box',
      padding: '12px',
      '@media (min-height:860px)': {
        position: 'absolute',
        bottom: '0px',
      },
    },
    footer1: {
      color: '#B7BDC6',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      textAlign: 'center',
      // width: '100%',
      boxSizing: 'border-box',
      padding: '12px',
      '@media (min-height:782px)': {
        position: 'absolute',
        bottom: '0px',
      },
    },
    footer2: {
      color: '#B7BDC6',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box',
      padding: '12px',
      '@media (min-height: 550px)': {
        position: 'absolute',
        bottom: '0px',
      },
    },
    footer3: {
      color: '#B7BDC6',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box',
      padding: '12px',
      '@media (min-height: 550px)': {
        position: 'absolute',
        bottom: '0px',
      },
    },
    strongPasswordDiv: {
      background: '#2b3139',
      borderRadius: '4px',
      padding: '0.5rem 1rem',
      width: 'fit-content',
    },
    passwordTooltipDiv: {
      background: 'transparent',
      zIndex: 1000,
      '@media (max-width: 400px)': {
        marginTop: '170px',
        marginLeft: '60px',
      },
      '@media (max-width: 890px)': {
        marginTop: '170px',
      },
    },
    strongPasswordText: {
      fontSize: '14px',
      color: '#848E9C',
      lineHeight: '28px',
      textAlign: 'start',
    },
    nextBtn: {
      paddingTop: '15px',
    },
    text4: {
      width: '100%',
      display: 'block',
    },
    icon5: {
      verticalAlign: 'middle',
      fill: '#f6465d',
      width: '18px',
      height: '18px',
      marginRight: '6px',
    },
    icon6: {
      verticalAlign: 'middle',
      fill: '#46f673',
      width: '18px',
      height: '18px',
      marginRight: '6px',
    },
  }),
)

export const StyledOutlineInput = withStyles((theme) => ({
  root: {
    border: '1px solid' + theme.palette.common.white,
    borderRadius: '4px',
    width: '100%',
    color: theme.palette.secondary.dark,
    '&:hover': {
      border: '1px solid #f0b90b',
    },
    padding: '0.3rem 0.5rem',
  },
  input: {
    background: 'transparent',
    // border: "none",
    '&:-internal-autofill-selected': {
      background: 'transparent !important',
    },
  },
}))(InputBase)

export const StyledCheckBox = withStyles((theme) => ({
  root: {
    color: '#848e9c',
    width: '16px',
    height: '16px',
    marginRight: '10px',
    '&.MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#fcd535',
    },
  },
}))(Checkbox)

export const Bluetooltip = makeStyles(() => ({
  arrow: {
    color: '#001F68',
  },
  tooltip: {
    backgroundColor: '#001F68',
    width: '190px',
    textAlign: 'center',
    fontSize: '12px',
  },
}))

export default function BootstrapTooltip(props: TooltipProps) {
  const classes = Bluetooltip()

  return <Tooltip arrow classes={classes} {...props} />
}

const Darktooltip = makeStyles(() => ({
  arrow: {
    color: '#1e2026',
  },
  tooltip: {
    maxWidth: 250,
    backgroundColor: '#1e2026',
    color: 'white',
    textAlign: 'center',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '11px',
  },
}))

export function StyledTooltip(props: TooltipProps) {
  const classes = Darktooltip()

  return <Tooltip arrow classes={classes} {...props} />
}
