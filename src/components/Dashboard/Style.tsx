/** @format */

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
    },
    root: {
      width: '100%',
      padding: '0px 24px 24px 24px',
      flex: '1',
    },
    containerHeader: {
      width: 'auto',
      backgroundColor: '#f5f5f5',
      [theme.breakpoints.up(1023)]: {
        padding: '24px 32px',
      },
      [theme.breakpoints.down(1023)]: {
        padding: '24px',
      },
      [theme.breakpoints.down(767)]: {
        padding: '16px',
      },
    },
    containerBody: {
      width: 'auto',
      [theme.breakpoints.up(1023)]: {
        padding: '0 32px',
      },
      [theme.breakpoints.down(1023)]: {
        padding: '0 24px',
      },
      [theme.breakpoints.down(767)]: {
        padding: '0 16px',
      },
    },
    actionBar: {
      padding: '20px 0 16px 0',
    },
    convertHistoryActionBar: {
      display: 'flex',
      [theme.breakpoints.down(820)]: {
        display: 'none',
      },
    },
    p2pActionBar: {
      display: 'flex',
      marginTop: '12px',
      [theme.breakpoints.down(960)]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    cryptoActionContainer: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down(500)]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    cryptoActionBar: {
      display: 'flex',
      marginTop: '12px',
      [theme.breakpoints.down(500)]: {
        display: 'none',
      },
    },
    cryptoTabMenu: {
      display: 'flex',
      [theme.breakpoints.down(500)]: {
        display: 'none',
      },
    },
    cryptoSelectForm: {
      display: 'none !important',
      [theme.breakpoints.down(500)]: {
        display: 'flex !important',
      },
    },
    gridItemLeft: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down(960)]: {
        display: 'none',
      },
    },
    gridItemRight: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      [theme.breakpoints.down(1280)]: {
        marginTop: '12px',
        justifyContent: 'flex-start',
      },
      [theme.breakpoints.down(960)]: {
        display: 'none',
      },
    },
    p2pActionContainer: {
      display: 'flex',
      marginTop: '12px',
      flexDirection: 'row',
      [theme.breakpoints.down(1160)]: {
        flexDirection: 'column',
      },
    },
    p2pActionContainer2: {
      display: 'flex',
      marginTop: '12px',
      flexDirection: 'row',
    },
    perPageDiv: {
      margin: '10px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    statusSelect: {
      marginLeft: '20px',
    },
    actionRight: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      [theme.breakpoints.down(1160)]: {
        marginTop: '12px',
        justifyContent: 'flex-start',
      },
      [theme.breakpoints.down(960)]: {
        display: 'none',
      },
    },
    actionLeft: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down(960)]: {
        display: 'none',
      },
    },
    responsiveActionBar: {
      display: 'none',
      [theme.breakpoints.down(960)]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    responsiveActionBar1: {
      display: 'none',
      [theme.breakpoints.down(960)]: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
    },
    cryptoFilterBtn: {
      display: 'none',
      [theme.breakpoints.down(500)]: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
    },
    headerAction: {
      display: 'flex',
      justifyContent: 'end',
    },
    title: {
      color: theme.palette.secondary.main,
      lineHeight: '20px',
      fontSize: '14px',
    },
    subtitle: {
      fontWeight: 500,
      lineHeight: '40px',
      fontSize: '32px',
      color: '#1e2329',
    },
    actionButton: {
      display: 'flex',
      width: 'auto',
      fontSize: '14px',
      padding: '10px 16px',
      lineHeight: '20px',
      wordBreak: 'keep-all',
      alignItems: 'center',
      fontWeight: 500,
      border: 'none',
      color: '#1e2329',
      borderRadius: '4px',
      height: '40px',
      minWidth: '60px',
      cursor: 'pointer',
      justifyContent: 'center',
    },
    option: {
      background: 'red',
    },
    normalButtonBackground: {
      backgroundColor: '#eaecef',
      '&:hover': {
        backgroundColor: '#f5f5f5',
      },
      '&:active': {
        backgroundColor: '#b7bdc6',
      },
    },
    gradientButtonBackground: {
      backgroundImage: 'linear-gradient(rgb(248, 209, 47) 0%, rgb(240, 185, 11) 100%)',
      '&:hover': {
        backgroundImage: 'linear-gradient(rgb(255, 226, 81) 0%, rgb(237, 196, 35) 100%)',
      },
      '&:active': {
        backgroundColor: '#f0b90b',
        backgroundImage: 'none',
      },
    },
    yellowButtonBackground: {
      backgroundColor: '#fcd535',
      '&:hover': {
        backgroundColor: 'linear-gradient(rgb(255, 226, 81) 0%, rgb(237, 196, 35) 100%)',
        opacity: 0.9,
      },
      '&:active': {
        backgroundColor: '#f0b90b',
      },
    },
    outlineButtonBackground: {
      color: '#f0b90b',
      border: '1px solid #f0b90b',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
      },
    },
    tab: {
      width: 'auto',
      fontSize: '14px',
      padding: '10px 16px',
      lineHeight: '20px',
      borderRadius: '4px',
      color: '#707a8a',
      cursor: 'pointer',
      marginRight: '16px',
    },
    activeTab: {
      backgroundColor: '#eaecef',
      color: '#1e2329',
    },
    tabSelect: {
      border: '1px solid rgb(234, 236, 239)',
      borderRadius: '4px',
      alignItems: 'center',
      height: '40px',
      padding: '0 8px 0 12px',
      display: 'flex',
      justifyContent: 'space-between',
      textTransform: 'none',
      cursor: 'pointer',
      '&:hover': {
        border: '1px solid #f0b90b',
        backgroundColor: '#ffffff',
      },
    },
    placeholder: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    tabMenuVisible: {
      display: 'flex',
      [theme.breakpoints.down(880)]: {
        display: 'none',
      },
    },
    selectMenuVisible: {
      display: 'none',
      [theme.breakpoints.down(880)]: {
        display: 'flex',
      },
    },
    selectMenuDisabled: {
      backgroundColor: '#eaecef',
    },
    disabledTextColor: {
      color: '#b7bdc6 !important',
    },
    selectedListItem: {
      fontSize: '14px',
      color: '#1e2329',
      fontWeight: 400,
    },
    listContainer: {
      backgroundColor: '#ffffff',
      borderRadius: '4px',
      padding: '4px 0',
      width: '165px',
      boxShadow: 'rgb(20 21 26 / 8%) 0px 3px 6px, rgb(71 77 87 / 8%) 0px 7px 14px, rgb(20 21 26 / 10%) 0px 0px 1px',
    },
    listItem: {
      padding: '10px 16px',
      backgroundColor: '#ffffff',
      fontSize: '14px',
      color: '#1e2329',
      fontWeight: 400,
      cursor: 'pointer',
      lineHeight: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      '&:hover': {
        backgroundColor: '#f5f5f5',
      },
    },
    activeColor: {
      color: '#c99400',
      backgroundColor: '#f5f5f5',
    },
    arrowIcon: {
      margin: '0px 4px',
      color: '#848e9c',
      fontSize: '20px',
    },
    tableContainer: {
      '&.MuiTableContainer-root': {
        overflow: 'auto hidden',
      },
    },
    tableContent: {
      '&.MuiTableHead-root': {
        width: '900px',
        minWidth: '100%',
        tableLayout: 'auto',
      },
    },
    tableHeaderCell: {
      '&.MuiTableCell-root': {
        borderBottom: '1px solid #eaecef',
        borderTop: '1px solid #eaecef',
        padding: '12px 16px',
        fontSize: '12px',
        fontWeight: 'normal',
        lineHeight: 1.5,
      },
      '&.MuiTableCell-stickyHeader': {
        backgroundColor: '#ffffff',
      },
    },
    tableRow: {
      '&.MuiTableRow-root': {
        '&:hover': {
          backgroundColor: '#fafafa',
        },
      },
    },
    tableCell: {
      '&.MuiTableCell-root': {
        borderBottom: '1px solid #eaecef',
      },
    },
    noRecords: {
      color: '#707a8a',
      fontWeight: 'normal',
      [theme.breakpoints.up(1023)]: {
        fontSize: '16px',
      },
      [theme.breakpoints.down(1023)]: {
        fontSize: '14px',
      },
      [theme.breakpoints.down(767)]: {
        fontSize: '14px',
      },
    },
    menuList: {
      '&.MuiList-padding': {
        padding: 0,
        overflowY: 'scroll',
        maxHeight: '200px',
      },
    },
    checkbox: {
      color: '#474d57',
    },
    filterBtn: {
      '&.MuiIconButton-root': {
        padding: '8px',
      },
    },
    convertHistoryFilterBtnPos: {
      display: 'none',
      [theme.breakpoints.down(820)]: {
        display: 'block',
        float: 'right',
      },
    },
    filterDrawer: {
      '&.MuiDrawer-paperAnchorBottom': {
        height: '60%',
      },
      backgroundColor: '#fafafa',
    },
    filterClose: {
      '&:hover': {
        color: '#f0b90b',
        cursor: 'pointer',
      },
    },
    drawerHeader: {
      fontSize: '24px',
      lineHeight: '30px',
      padding: '0 24px',
      fontWeight: 600,
      color: '#1e2329',
    },
    filterDrawerFooter: {
      boxShadow: 'rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 8%) 0px 0px 4px',
      display: 'flex',
      justifyContent: 'center',
    },
    filterDrawerFooterButton: {
      width: '45%',
      margin: '0 4px',
    },
    searchInputBox: {
      padding: '8px 12px',
      display: 'flex',
    },
    searchInput: {
      fontSize: '12px',
      color: '#1e2329',
      fontWeight: 'normal',
      border: 'none',
      width: '100%',
      '&:focus': {
        border: 'none',
      },
      '&:focus-visible': {
        outline: 'none',
      },
    },
    searchContent: {
      border: '1px solid #eaecef',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '6px',
      height: '40px',
      '&:hover': {
        borderColor: '#f0b90b',
      },
      '&:focus': {
        borderColor: '#f0b90b',
      },
      '&:focus-visible': {
        borderColor: '#f0b90b',
        outline: 'none',
      },
      '& i': {
        margin: '0 5px',
      },
    },
    downloadIcon: {
      marginRight: '4px',
      '&:before': {
        fontSize: '16px',
      },
    },
    checkIcon: {
      verticalAlign: 'middle',
      '&:before': {
        fontSize: '20px',
      },
    },
    spacing1: {
      marginRight: '4px',
    },
    spacing2: {
      marginRight: '12px',
    },
    datePickerBtn: {
      border: '1px solid rgb(234, 236, 239)',
      borderRadius: '4px',
      alignItems: 'center',
      height: '40px',
      padding: '0 8px 0 12px',
      display: 'flex',
      justifyContent: 'space-between',
      textTransform: 'none',
      cursor: 'pointer',
      width: '190px',
      '&:hover': {
        border: '1px solid #f0b90b',
        backgroundColor: '#ffffff',
      },
      '& i': {
        fontSize: '16px',
      },
    },
    datePlaceholder: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      fontSize: '14px',
      color: 'black',
      fontWeight: 400,
      textOverflow: 'ellipsis',
    },
    actionTableCell: {
      position: 'sticky',
      minWidth: '50px',
    },
    paragraphTitle: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 500,
      [theme.breakpoints.up(1023)]: {
        padding: '0px',
        marginBottom: '40px',
      },
      [theme.breakpoints.down(1023)]: {
        padding: '0 24px',
        marginBottom: '40px',
      },
      [theme.breakpoints.down(767)]: {
        padding: '16px 0',
        marginBottom: '32px',
      },
    },
    securityCardContainer: {
      display: 'flex',
      flexDirection: 'column',
      borderBottom: '1px solid #eaecef',
      [theme.breakpoints.up(1023)]: {
        alignItems: 'center',
        padding: '24px 0',
        flexDirection: 'row',
      },
      [theme.breakpoints.down(1023)]: {
        padding: '24px 0',
      },
      [theme.breakpoints.down(767)]: {
        padding: '16px 0',
      },
    },
    securityCardInfo: {
      display: 'flex',
      [theme.breakpoints.up(1023)]: {
        flex: '7 1 0%',
      },
      [theme.breakpoints.down(1023)]: {
        flex: '1 1 0%',
      },
    },
    securityCardAction: {
      display: 'flex',
      paddingLeft: '40px',
      flex: '5 1 0%',
      [theme.breakpoints.down(1023)]: {
        marginTop: '16px',
      },
    },
    securityCardTitle: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
      marginBottom: '8px',
    },
    securityCardInfoText: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#707a8a',
      '& a': {
        textDecoration: 'underline',
        color: '#c99400',
      },
    },
    securityCardStatusText: {
      wordBreak: 'break-all',
      lineHeight: '20px',
      fontSize: '14px',
      fontWeight: 500,
      marginLeft: '8px',
      alignSelf: 'center',
    },
    fontType1: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#1e2329',
    },
    fontSize1: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    fontSize2: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    inputContainer: {
      border: '1px solid #eaecef',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '4px',
      height: '48px',
      width: '100%',
      '&:hover': {
        borderColor: '#f0b90b',
      },
    },
    focusedInputConainer: {
      border: '1px solid #f0b90b',
    },
    errorInputConainer: {
      border: '1px solid #f6465d',
      '&:hover': {
        borderColor: '#f6465d',
      },
    },
    textFiledInput: {
      fontSize: '14px',
      color: '#1e2329',
      fontWeight: 'normal',
      border: 'none',
      width: '100%',
      height: '100%',
      padding: '0 12px',
      borderRadius: '4px',
      '&:focus': {
        border: 'none',
      },
      '&:focus-visible': {
        outline: 'none',
      },
    },
    getCode: {
      flexShrink: 0,
      margin: '0 16px 0 4px',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#c99400',
      fontWeight: 500,
      cursor: 'pointer',
    },
    verificationCode: {
      flexShrink: 0,
      margin: '0 16px 0 4px',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#707a8a',
      fontWeight: 400,
      cursor: 'pointer',
    },
    textFieldInfoText: {
      marginTop: '4px',
      color: '#707a8a',
    },
    textFieldErrorText: {
      marginTop: '4px',
      color: '#cf304a',
    },
    pageTitle: {
      maxWidth: '1000px',
      width: '100%',
      fontWeight: 600,
      textAlign: 'center',
      [theme.breakpoints.up(1023)]: {
        margin: '0 auto 24px auto',
        padding: '24px 0',
        fontSize: '32px',
        lineHeight: '40px',
      },
      [theme.breakpoints.down(1023)]: {
        margin: '0 auto 24px auto',
        padding: '24px',
        fontSize: '32px',
        lineHeight: '40px',
      },
      [theme.breakpoints.down(767)]: {
        marginBottom: '16px',
        padding: '16px',
        fontSize: '24px',
        lineHeight: '32px',
      },
    },
    formTitle: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 500,
      marginBottom: '24px',
    },
    phoneNumDiv: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    phoneNumText: {
      fontSize: '14px',
      marginLeft: '5px',
      fontWeight: 400,
      color: '#1e2329',
    },
    phoneSide: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      marginTop: '10px',
      background: 'transparent',
      border: '1px solid #eaecef',
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
      border: '1px solid #f0b90b',
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
    countrySide: {
      height: '48px',
      marginRight: '12px',
      boxSizing: 'border-box',
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: 1.6,
      background: 'transparent',
      border: '1px solid #eaecef',
      borderRadius: '4px',
      padding: '11px 5px 11px 12px',
      minWidth: '104px',
      width: '104px',
      cursor: 'pointer',
      '&:hover': {
        border: '1px solid #f0b90b',
      },
    },
    mobileCountrySide: {
      '@media (min-width: 768px)': {
        display: 'none',
      },
    },
    deskCountrySide: {
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    flag: {
      width: '16px',
      height: '16px',
    },
    flagBtn: {
      color: '#848e9c',
      fontSize: '22px',
      marginLeft: 'auto',
    },
    input: {
      fontSize: '14px',
      background: 'transparent',
      border: 'none',
      width: '100%',
      '&:focus:not(.focus-visible)': {
        outline: 'none',
      },
    },
    icon: {
      fill: '#5e6673',
      width: '18px',
      height: '18px',
      '&:hover': {
        fill: '#848e9c',
      },
    },
    error: {
      color: '#f6465d',
      marginLeft: 0,
    },
    drawRoot: {
      '&.MuiDrawer-paperAnchorBottom': {
        background: 'transparent',
      },
    },
    txtunable: {
      color: '#c99400',
      fontSize: '14px',
      textDecoration: 'none',
      '&:hover': {
        color: '#c99400',
      },
    },
    disabledButon: {
      opacity: 0.3,
      '&:hover': {
        opacity: 0.3,
        cursor: 'not-allowed',
      },
      '&:active': {
        opacity: 0.3,
      },
    },
    passIcon: {
      margin: '0 8px 0 4px',
      fill: '#b7bdc6',
      fontSize: '20px',
      '&:hover': {
        fill: '#707a8a',
      },
    },
    securityActionButton: {
      minWidth: '80px',
      padding: '6px 12px',
      height: '32px',
    },
    securityContainerBody: {
      width: 'auto',
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.up(767)]: {
        padding: '32px',
      },
      [theme.breakpoints.down(767)]: {
        padding: '16px',
      },
    },
    securityContainerHeader: {
      display: 'flex',
      justifyContent: 'center',
      padding: '12px 32px',
      backgroundColor: '#f5f5f5',
      [theme.breakpoints.down(767)]: {
        padding: '12px 16px',
      },
    },
    securityTitle: {
      fontSize: '32px',
      lineHeight: '40px',
      marginBottom: '24px',
      [theme.breakpoints.down(767)]: {
        marginBottom: '16px',
      },
    },
    securityHeaderLinksBox: {
      display: 'grid',
      gridAutoFlow: 'dense',
      gap: '16px 40px',
      [theme.breakpoints.up(1023)]: {
        gridTemplateColumns: 'auto auto auto auto 1fr',
      },
      [theme.breakpoints.down(1023)]: {
        gridTemplateColumns: '1fr 1fr',
      },
      [theme.breakpoints.down(767)]: {
        gridTemplateColumns: 'none',
      },
    },
    securityHeaderLink: {
      color: '#1e2329',
      marginLeft: '8px',
      fontSize: '14px',
      lineHeight: '20px',
      '&:hover': {
        color: '#f0b90b',
      },
    },
    securityNotificationContainer: {
      marginBottom: '32px',
      padding: '16px',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: '#fef6d8',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      [theme.breakpoints.down(767)]: {
        flexDirection: 'column',
      },
    },
    securityNotification: {
      fontSize: '14px',
      lineHeight: '20px',
      flex: '1 1 0%',
      fontWeight: 400,
      color: '#1e2329',
    },
    securityNotificationLink: {
      marginLeft: '24px',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      color: '#c99400',
      textDecoration: 'none',
      '&:hover': {
        color: '#c99400',
      },
      [theme.breakpoints.down(767)]: {
        marginLeft: '0px',
      },
    },
    securityNotificationLinkBox: {
      display: 'flex',
      [theme.breakpoints.down(767)]: {
        marginTop: '8px',
      },
    },
    SecurityVerificationModal: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    SecurityVerificationModalDialog: {
      borderRadius: '6px',
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      '& .MuiDialog-paperWidthMd': {
        maxWidth: '432px',
        backgroundColor: '#ffffff',
        height: 'auto',
      },
    },
    SecurityVerificationModalCloseIcon: {
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center',
      paddingRight: '24px',
      color: '#b7bdc6',
      '&:hover': {
        color: '#1e2329',
      },
    },
    SecurityVerificationModalDialogTitle: {
      fontSize: '16px',
      padding: '20px 48px 19px 24px',
      fontWeight: 500,
      lineHeight: '24px',
      color: '#1e2329',
    },
    SecurityVerificationModalDialogContentText: {
      color: '#707a8a',
      fontSize: '14px',
      fontWeight: 'normal',
    },
    SecurityVerificationModalDialogContentCard: {
      textAlign: 'center',
    },
    SecurityVerificationModalDialogContentCardHover: {
      padding: '16px',
      '&:hover': {
        backgroundColor: '#f5f5f5',
      },
      cursor: 'pointer',
    },
    SecurityVerificationModalDialogContentCardTitle: {
      boxSizing: 'border-box',
      margin: '16px 0px 0px',
      minWidth: '0px',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#1e2329',
    },
    SecurityVerificationModalDialogContentCardContent: {
      boxSizing: 'border-box',
      margin: '8px 0px 0px',
      minWidth: '0px',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
      color: '#707a8a',
    },
    stepperBtn: {
      width: '100%',
    },
    WithDrawModal: {
      alignItems: 'center',
      justifyContent: 'center',
      Width: '384px',
    },
    WithDrawModalDialog: {
      borderRadius: '6px',
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
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
    WithDrawModalCloseIcon: {
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center',
      paddingRight: '24px',
      color: '#b7bdc6',
      '&:hover': {
        color: '#1e2329',
      },
    },
    WithDrawModalDialogTitle: {
      fontSize: '16px',
      padding: '20px 48px 19px 24px',
      fontWeight: 500,
      lineHeight: '24px',
      color: '#1e2329',
    },
    WithDrawModalDialogContentText: {
      color: '#707a8a',
      fontSize: '14px',
    },
    EmailAddressVerificationChangeModal: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    EmailAddressVerificationChangeModalDialog: {
      borderRadius: '6px',
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      '& .MuiDialog-paperWidthMd': {
        maxWidth: '384px',
        backgroundColor: '#ffffff',
        padding: '32px 24px 24px 24px',
        [theme.breakpoints.down(960)]: {
          maxWidth: '384px',
          height: 'auto',
          '&.MuiPaper-root': {
            borderRadius: '6px',
          },
        },
      },
      '& .MuiDialogContent-root': {
        padding: '0px',
      },
    },
    EmailAddressVerificationChangeModalIcon: {
      textAlign: 'center',
      '& .icon-download': {
        fontSize: '96px',
      },
    },
    EmailAddressVerificationChangeModalDialogContentCard: {
      textAlign: 'center',
    },
    EmailAddressVerificationChangeModalDialogContentCardTitle: {
      boxSizing: 'border-box',
      margin: '16px 0px 0px',
      minWidth: '0px',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '28px',
      color: '#1e2329',
    },
    EmailAddressVerificationChangeModalDialogContentCardContent: {
      boxSizing: 'border-box',
      margin: '8px 0px 0px',
      minWidth: '0px',
      fontWeight: 400,
      textAlign: 'left',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#707a8a',
    },
    EmailAddressVerificationRemoveModal: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    EmailAddressVerificationRemoveModalDialog: {
      borderRadius: '6px',
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      '& .MuiDialog-paperWidthMd': {
        maxWidth: '384px',
        backgroundColor: '#ffffff',
        padding: '32px 24px 24px 24px',
        [theme.breakpoints.down(960)]: {
          maxWidth: '384px',
          height: 'auto',
          '&.MuiPaper-root': {
            borderRadius: '6px',
          },
        },
      },
      '& .MuiDialogContent-root': {
        padding: '0px',
      },
    },
    EmailAddressVerificationRemoveModalIcon: {
      textAlign: 'center',
      '& .icon-download': {
        fontSize: '96px',
      },
    },
    EmailAddressVerificationRemoveModalDialogContentCard: {
      textAlign: 'center',
    },
    EmailAddressVerificationRemoveModalDialogContentCardTitle: {
      boxSizing: 'border-box',
      margin: '16px 0px 24px',
      minWidth: '0px',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '28px',
      color: '#1e2329',
    },
    EmailAddressVerificationRemoveModalDialogContentCardContent: {
      boxSizing: 'border-box',
      margin: '8px 0px 0px',
      minWidth: '0px',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#707a8a',
    },
    deviceManageDescription: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      color: '#474d57',
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
    strongPasswordDiv: {
      background: '#2b3139',
      borderRadius: '4px',
      padding: '0.5rem 1rem',
      width: 'fit-content',
    },
    strongPasswordText: {
      fontSize: '14px',
      color: '#848E9C',
      lineHeight: '28px',
      textAlign: 'start',
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
    verificationCodeTooltip: {
      color: '#ffffff',
      backgroundColor: '#5e6673',
      maxWidth: '296px',
      textAlign: 'center',
      width: '230px',
      wordBreak: 'normal',
      lineHeight: '20px',
      fontSize: '14px',
      borderRadius: '4px',
      padding: '8px 12px',
      filter:
        'drop-shadow(rgba(20, 21, 26, 0.08) 0px 3px 6px) drop-shadow(rgba(71, 77, 87, 0.08) 0px 7px 14px) drop-shadow(rgba(20, 21, 26, 0.1) 0px 0px 1px)',
    },
    lockedModaldescription: {
      margin: '24px 0',
      fontSize: '14px',
      lineHeight: 1.15,
      textAlign: 'center',
      color: '#1e2329',
      fontWeight: 400,
    },
    modalCloseIcon: {
      color: '#76808f',
      position: 'absolute',
      top: '0px',
      right: '0px',
      width: '20px',
      height: '20px',
      margin: '16px',
      cursor: 'pointer',
    },
    descriptionTitle: {
      color: '#212833',
      fontSize: '24px',
      lineHeight: '24px',
      textAlign: 'center',
      marginBottom: '16px',
    },
    linkBtn: {
      textDecoration: 'none',
      width: '100%',
    },
    connectTwitterModal: {
      borderRadius: '6px',
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      '& .MuiDialog-paperWidthMd': {
        maxWidth: '384px',
        backgroundColor: '#ffffff',
        [theme.breakpoints.down(960)]: {
          maxWidth: '384px',
          height: 'auto',
          '&.MuiPaper-root': {
            borderRadius: '6px',
          },
        },
      },
      '& .MuiDialogContent-root': {
        padding: '0px',
      },
    },
    connectTwitterModalTitle: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 500,
      color: '#1e2329',
    },
    connectTwitterModalTitleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 24px',
      alignItems: 'center',
      border: '1px solid #e6e8ea',
    },
    connectTwitterModalDesc: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      color: '#1e2329',
    },
  }),
)
