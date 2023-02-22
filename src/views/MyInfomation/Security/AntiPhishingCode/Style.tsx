//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    BreadcrumbsRoot: {
      '& .MuiTypography-colorTextSecondary': {
        color: '#707a8a',
        margin: '10px',
        fontSize: '12px',
        fontWeight: 400,
        PointerEvent: 'auto',
      },
    },
    AntiPhishingCodeTitle: {
      textAlign: 'center',
      fontSize: '24px',
      marginTop: '48px',
      marginBottom: '40px',
    },
    AntiphishingCodeAlert: {
      maxWidth: '416px',
      margin: '0px auto 24px',
    },
    AntiPhishingCodeTitleroot: {
      maxWidth: '416px',
      margin: 'auto',
      backgroundColor: '#ffffff',
      padding: '40px 24px 40px 24px',
      marginBottom: '50px',
      boxShadow: 'rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 8%) 0px 0px 2px',
    },
    AntiPhishingCodeTitlebullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    AntiPhishingCodeTitletitle: {
      color: '#1e2329',
      fontSize: '16px',
      lineHeight: '22px',
      margin: '0px 0px 8px',
    },
    AntiPhishingCodeTitlepos: {
      marginBottom: 12,
      color: '#1e2329',
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400,
      margin: '0px 0px 8px',
    },
    stepperBtn: {
      width: '100%',
    },
    BreadcrumbsLink: {
      '&:hover': {
        color: '#fcd535',
      },
    },
    AntiPhishingCodeModal: {
      alignItems: 'center',
      justifyContent: 'center',
      Width: '384px',
    },
    AntiPhishingCodeModalDialog: {
      borderRadius: '6px',
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      position: 'relative',
      '& .MuiDialog-paperWidthMd': {
        maxWidth: '384px',
        backgroundColor: '#ffffff',
        [theme.breakpoints.down(960)]: {
          maxWidth: '100%',
          height: '100%',
          '& .MuiDialogActions-root': {
            position: 'fixed',
            left: '0',
            bottom: '0',
            width: '100%',
          },
        },
      },
    },
    AntiPhishingCodeModalCloseIcon: {
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center',
      top: 18,
      right: 15,
      cursor: 'pointer',

      color: '#b7bdc6',
      position: 'absolute',
      '&:hover': {
        color: '#1e2329',
      },
    },
    AntiPhishingCodeModalDialogTitle: {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#1e2329',
      textAlign: 'center',
      alignItems: 'center',
      '& .MuiTypography-root': {
        fontSize: '16px',
        fontWeight: 500,
      },
    },
    AntiPhishingCodeModalDialogContentText1: {
      color: '#707a8a',
      fontSize: '14px',
      marginTop: '10px',
    },
    AntiPhishingCodeModalDialogContentText2: {
      color: 'red',
      fontSize: '14px',
      marginTop: '10px',
    },
    AntiPhishingCodeModalDialogContentInput: {
      // fontSize: '14px',
      border: '1px solid #ddd',
      width: '100%',

      '&:hover': {
        border: '1px solid #f0b90b !important',
      },
      '&:focus': {
        border: '1px solid #f0b90b !important',
      },
    },
    AntiPhishingCodeModalHeader: {
      height: '64px',
      borderBottom: '2px solid #f0b90b',
      justifyContent: 'center',
    },
  }),
)
