//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    descButton: {
      margin: '0 4px',
      height: '28px',
      padding: '4px 16px',
      borderRadius: '6px',
      width: '90px',
      [theme.breakpoints.down(767)]: {
        width: '100%',
      },
    },
    buttonLink: {
      textDecoration: 'none',
      [theme.breakpoints.down(767)]: {
        width: '32%',
      },
    },
    tabContainer: {
      display: 'flex',
      borderBottom: '1px solid #eaecef',
      width: '100%',
    },
    tabItemContainer: {
      cursor: 'pointer',
      marginRight: '24px',
      [theme.breakpoints.down(767)]: {
        marginRight: '16px',
      },
    },
    tab: {
      padding: '10px 0',
      fontSize: '14px',
      fontWeight: 400,
      cursor: 'pointer',
    },
    activeItem: {
      color: '#1e2329',
      borderBottom: '3px solid #f0b90b',
    },
    CustomCard: {
      backgroundColor: '#ffffff',
      flex: '1 1 0%',
      padding: ' 0px 16px',
      width: '100%',
      boxShadow: 'rgb(20 21 26 / 4%) 0px 1px 2px, rgb(71 77 87 / 4%) 0px 3px 6px, rgb(20 21 26 / 10%) 0px 0px 1px',
      boxSizing: 'border-box',
      borderRadius: '4px',
    },
    CustomCardHeader: {
      paddingTop: '16px',
      paddingBottom: '16px',
      alignItems: 'center',
      height: 'auto',
      [theme.breakpoints.up(1023)]: {
        height: '60px',
      },
    },
    CustomCardHeaderTitle: {
      display: 'flex',
      boxSizing: 'border-box',
      minWidth: '0px',
      padding: '0px',
      marginRight: '16px',
      flex: '1 1 0%',
    },
    CustomCardHeaderTitleA: {
      textDecoration: 'none',
      display: 'flex',
      color: '#000000',
      fontWeight: 600,
      fontSize: '16px',
      '&:hover': {
        color: '#f1bb12',
      },
    },
    CustomCardHeaderDescription: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    CustomCardHeaderTitleIcon: {
      display: 'flex',
      color: '#000000',
      marginLeft: '16px',
      fontSize: '10px',
      '&:hover': {
        color: '#f1bb12',
      },
    },
    CustomCardHeaderDescriptionTypography: {
      display: 'flex',
      [theme.breakpoints.down(767)]: {
        width: '100%',
        justifyContent: 'space-between',
      },
    },
    cardBody: {
      padding: '48px 0',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up(1023)]: {
        flexDirection: 'row',
      },
    },
    visibleBalance: {
      marginLeft: '8px',
      padding: '5px 8px',
      fontWeight: 500,
      fontSize: '12px',
      backgroundColor: 'transparent',
      border: '1px solid #eaecef',
      height: '24px',
      lineHeight: 1,
      color: '#707a8a',
      borderRadius: '4px',
      [theme.breakpoints.up(767)]: {
        marginLeft: '16px',
      },
    },
    visibleBalanceIcon: {
      fontSize: '14px',
      verticalAlign: 'sub',
      marginRight: '4px',
    },
    balanceAmount: {
      fontSize: '24px',
      lineHeight: '22px',
      color: '#1e2329',
      fontWeight: 400,
      [theme.breakpoints.up(767)]: {
        fontSize: '32px',
        lineHeight: '36px',
      },
    },
    balanceType: {
      marginLeft: '4px',
      fontSize: '12px',
      lineHeight: '100%',
      [theme.breakpoints.up(767)]: {
        fontSize: '14px',
        lineHeight: '24px',
      },
    },
    estimatedValueLabel: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.15,
      marginBottom: '8px',
      [theme.breakpoints.up(767)]: {
        fontSize: '14px',
      },
    },
    estimatedValue: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '16px',
      color: '#1e2329',
      [theme.breakpoints.up(767)]: {
        fontSize: '20px',
        lineHeight: '20px',
      },
    },
    balanceInfoContainer: {
      width: '50%',
      [theme.breakpoints.down(1023)]: {
        width: '100%',
      },
    },
    circleContainer: {
      width: '50%',
      minWidth: '128px',
      marginRight: '16px',
      position: 'relative',
      [theme.breakpoints.down(1023)]: {
        width: '100%',
        marginTop: '24px',
      },
      [theme.breakpoints.up(767)]: {
        minWidth: '172px',
      },
    },
    outsideCircle: {
      width: '128px',
      [theme.breakpoints.up(767)]: {
        width: '172px',
      },
    },
    insideCircle: {
      position: 'absolute',
      width: '96px',
      left: '16px',
      top: '16px',
      [theme.breakpoints.up(767)]: {
        width: '129px',
        left: '21.5px',
        top: '21.5px',
      },
    },
    buttonGroup: {
      display: 'none',
      [theme.breakpoints.up(767)]: {
        display: 'flex',
      },
    },
    buttonGroup1: {
      display: 'flex',
      marginTop: '12px',
      [theme.breakpoints.up(767)]: {
        display: 'none',
      },
    },
  }),
)
