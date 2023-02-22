import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      backgroundColor: '#fafafa',
    },
    header: {
      backgroundColor: '#ffffff',
      padding: '24px',
      boxShadow: 'rgb(0 0 0 / 5%) 0px 0px 4px',
      display: 'flex',
    },
    avatar: {
      backgroundColor: 'transparent',
      border: '1px solid #1e2329',
      [theme.breakpoints.up(767)]: {
        width: '40px',
        height: '40px',
      },
      [theme.breakpoints.down(767)]: {
        width: '32px',
        height: '32px',
      },
    },
    logedUserName: {
      fontSize: '16px',
      lineHeight: 1.15,
      marginRight: '16px',
      color: '#1e2329',
      fontWeight: 400,
    },
    userId: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.15,
      color: '#707a8a',
      marginRight: '16px',
    },
    userIdNumber: {
      color: '#1e2329',
    },
    vipLink: {
      color: '#f0b90b',
      fontSize: '14px',
      lineHeight: 1.15,
      '&:hover': {
        color: '#f0b90b',
      },
    },
    verifyLink: {
      color: '#c99400',
      textDecoration: 'none',
      fontSize: '14px',
      lineHeight: 1.15,
      marginLeft: '8px',
      '&:hover': {
        textDecoration: 'underline',
        color: '#f0b90b',
      },
    },
    linkedLinkParagraph: {
      marginLeft: '16px',
      display: 'flex',
      alignItems: 'end',
      lineHeight: 1,
      '& i': {
        color: '#474d57',
        marginRight: '8px',
      },
      '& span': {
        color: '#474d57',
        textDecoration: 'underline',
      },
    },
    userLoginInfo: {
      '& p': {
        color: '#707a8a',
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: 1.25,
      },
      display: 'flex',
      flexWrap: 'wrap',
      [theme.breakpoints.down(767)]: {
        marginTop: '16px',
      },
    },
    DashboardCards_root: {
      padding: '8px',
    },
    BalanceDetail: {
      display: 'flex',
      flex: '1 1 0%',
      width: '100%',
      padding: '8px',
    },
    TaskAnnouncements: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: '8px',
    },
    AnnouncementsContent: {
      flex: '1 1 0%',
      margin: '16px 0px',
    },
    WalletDirect: {
      display: 'flex',
      flex: '1 1 0%',
      width: '100%',
      padding: '8px',
    },
    ActivityDevices: {
      display: 'flex',
      flex: '1 1 0%',
      width: '100%',
      padding: '8px',
    },
    IncreaseYourAccountSecurity: {
      display: 'flex',
      flex: '1 1 0%',
      width: '100%',
      padding: '8px',
    },
    DashboardApiCard: {
      display: 'flex',
      width: '100%',
      padding: '8px',
    },
    Distribution: {
      display: 'flex',
      flex: '1 1 0%',
      width: '100%',
      padding: '8px',
    },
    OpenOrders: {
      display: 'flex',
      width: '100%',
      padding: '8px',
    },
    YourTradingFeeLevel: {
      display: 'flex',
      width: '100%',
      padding: '8px',
    },
    userInfoContainer: {
      display: 'flex',
      marginBottom: '4px',
      flexDirection: 'row',
      [theme.breakpoints.down(767)]: {
        flexDirection: 'column',
      },
    },
    userInfo: {
      display: 'flex',
      alignItems: 'end',
      flexWrap: 'wrap',
      [theme.breakpoints.down(767)]: {
        marginBottom: '4px',
      },
    },
    notLinkedConnect: {
      marginLeft: '8px',
      color: '#f0b90b',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    notLinkedTooltip: {
      color: '#ffffff',
      backgroundColor: '#5e6673',
      borderRadius: '4px',
      padding: '8px 12px',
      '& p': {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
    notLinkedTooltipArrow: {
      color: '#5e6673',
    },
  }),
)
