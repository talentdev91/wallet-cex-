/** @format */

//material-ui
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import { Tooltip, TooltipProps, Checkbox } from '@material-ui/core'
//style

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
    root1: {
      display: 'contents',
    },
    dropdownIcon: {
      verticalAlign: 'middle',
    },
    dropdown: {
      padding: '3px 4px',
      background: '',
      color: 'white',
    },
    selectButton: {
      fontSize: '12px',
      color: theme.palette.secondary.dark,
    },
    listHover: {
      '&:hover': {
        backgroundColor: '#2b3139',
      },
    },
    icon1: {
      height: '18px',
      width: '18px',
      padding: '4px',
    },
    icon5: {
      width: '24px',
      height: '24px',
      padding: '4px',
    },
    root: {
      // display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
    },
    text: {
      marginRight: '24px',
      cursor: 'pointer',
      padding: '16px 1px 10px',
      width: 'max-content',
      minInlineSize: 'fit-content',
    },
    fontColor1: {
      color: theme.palette.secondary.main,
    },
    fontColor2: {
      color: theme.palette.secondary.dark,
    },
    paginationDiv: {
      display: 'flex',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        // marginTop: '10px',
      },
      '@media (max-width: 1526px)': {
        // marginTop: '10px',
      },
    },
    tableCellLayout: {
      flex: '1 1 0%',
    },

    dayFont: {
      fontSize: '12px',
    },
    markPrice: {
      marginRight: '4px',
      display: 'flex',
      alignItems: 'center',
    },
    markPriceSmall: {
      flex: '1 1 0%',
      color: theme.palette.text.primary,
    },
    hover: {
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.text.disabled,
      },
    },
    spotOrderBook: {
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
      display: 'flex',
      flex: '1 1 0%',
      flexDirection: 'column',
      height: '100%',
    },
    orderBookHeader: {
      alignItems: 'center',
      margin: '0 16px 8px 12px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
    },
    orderImage: {
      marginRight: '4px',
      padding: '0 4px',
      width: '24px',
      height: '24px',
      cursor: 'pointer',
    },
    orderBookTbHeader: {
      margin: '0 16px 6px 16px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    orderBookTicker: {
      display: 'flex',
      padding: '1px 16px',
      alignItems: 'center',
    },
    setTextColor: {
      color: theme.palette.secondary.light,
      fontWeight: 500,
    },
    rightPosition: {
      marginLeft: 'auto',
      textAlign: 'right',
      '@media (max-width: 760px)': {
        display: 'none',
      },
    },
    flexPosition: {
      display: 'flex',
      maxWidth: '500px',
      justifyContent: 'space-between',
      '@media (max-width: 1238px)': {
        maxWidth: '276px',
        overflowX: 'auto',
      },
      '@media (max-width: 760px)': {
        maxWidth: '500px',
        position: 'relative',
      },
    },
    spinnerStyle: {
      paddingTop: '60px',
    },
    flexPosition2: {
      display: 'flex',
      minWidth: '35%',
    },
    hide: {
      '@media (max-width: 760px)': {
        display: 'none',
      },
    },
    checkBtn: {
      padding: '0px',
      '&:hover': {
        color: theme.palette.secondary.light,
      },
      '&:MuiCheckbox-colorSecondary.Mui-checked &': {
        color: theme.palette.secondary.light,
      },
    },
    noOrder: {
      color: 'rgb(183, 189, 198)',
      fontWeight: 600,
      fontSize: '12px',
      paddingTop: '80px',
    },
    refresh: {
      color: theme.palette.secondary.light,
      cursor: 'pointer',
    },
    ordHisTabSel: {
      marginRight: '4px',
      color: theme.palette.secondary.dark,
      cursor: 'pointer',
      borderRadius: '2px',
      padding: '6px 4px',
      margin: '0px',
      maxHeight: '26px',
      fontWeight: 500,
      backgroundColor: 'rgb(71, 77, 87)',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '60px',
      lineHeight: '13px',
      '&:hover': {
        backgroundColor: 'rgb(35,40,45)',
        borderRadius: '2px',
        color: 'rgb(234, 236, 239)',
      },
    },
    dayDiv: {
      display: 'flex',
      alignItems: 'center',
      '@media (max-width: 1480px)': {
        display: 'none',
      },
    },
    dayDiv2: {
      maxHeight: '26px',
      '@media (min-width: 1481px)': {
        display: 'none',
      },
    },
    ordHisTabSel1: {
      marginRight: '4px',
      color: theme.palette.secondary.dark,
      cursor: 'pointer',
      borderRadius: '2px',
      padding: '6px 4px',
      margin: '0px',
      maxHeight: '26px',
      fontWeight: 500,
      backgroundColor: 'rgb(71, 77, 87)',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      minWidth: '70px',
      lineHeight: '13px',

      '&:hover': {
        backgroundColor: 'rgb(35,40,45)',
        borderRadius: '2px',
        color: 'rgb(234, 236, 239)',
      },
      '@media (min-width: 1480px)': {
        display: 'none',
      },
    },
    ordHisTab: {
      marginRight: '4px',
      display: 'flex',
      padding: '6px 4px',
      color: theme.palette.secondary.main,
      cursor: 'pointer',
      fontWeight: 500,
      fontSize: '12px',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '60px',
      lineHeight: '13px',
      maxHeight: '26px',

      '&:hover': {
        // backgroundColor: "rgb(35,40,45)",
        backgroundColor: 'rgb(35,40,45)',
        borderRadius: '2px',
        color: theme.palette.secondary.dark,
      },
    },
    hisTimetxt: {
      marginRight: '4px',
      display: 'flex',
      padding: '4px',
      color: theme.palette.secondary.main,
      fontWeight: 500,
      fontSize: '12px',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '48px',
      lineHeight: '16px',
    },
    testCalendar: {
      '&.MuiList-root .MuiList-padding': {
        display: 'none',
      },
    },

    hisSearch: {
      marginRight: '4px',
      color: theme.palette.secondary.dark,
      cursor: 'pointer',
      borderRadius: '2px',
      padding: '6px 4px',
      margin: '0px',
      backgroundColor: 'rgb(35,40,45)',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '48px',
      lineHeight: '13px',
      fontWeight: 600,
      maxHeight: '26px',
      '&:hover': {
        backgroundColor: '#2b3139',
        borderRadius: '2px',
      },
    },
    calendar: {
      position: 'fixed',
      zIndex: 100,
      bottom: '230px',
    },
    input: {
      color: theme.palette.secondary.dark,
      fontSize: '14px',
      width: '90px',
      background: 'transparent',
      border: 'none',
      '&:focus:not(.focus-visible)': {
        outline: 'none',
      },
    },
    selectMenu: {
      '&.MuiPopover-paper': {
        top: '110px !important',
      },
    },
    searchDiv: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    dateDiv: {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      '@media (max-width: 700px)': {
        // display: 'none',
      },
    },
    menuItem: {
      background: `${localStorage.appTheme === 'darkTheme' ? '#1e2329 !important' : '#fff !important'}`,
      '&:hover': {
        background: `${localStorage.appTheme === 'darkTheme' ? '#474d57  !important' : '#f0f1f2  !important'}`,
      },
    },
    hisReset: {
      marginRight: '4px',
      color: theme.palette.secondary.main,
      cursor: 'pointer',
      borderRadius: '2px',
      padding: '6px 4px',
      margin: '0px',
      fontWeight: 500,
      backgroundColor: 'rgb(71, 77, 87)',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '48px',
      lineHeight: '13px',
      maxHeight: '26px',

      '&:hover': {
        backgroundColor: '#2b3139',
        borderRadius: '2px',
      },
    },
    orderHover1: {
      '&:hover': { background: '#2b3139' },
    },
    orderHover2: {
      '&:hover': { background: '#2b3139' },
    },
    help: {
      height: '14px',
      width: '14px',
      padding: '6px',
      color: 'white',
      '&:hover': {
        color: theme.palette.secondary.dark,
      },
    },
    fontColor3: {
      color: theme.palette.text.primary,
    },
    fontColor4: {
      color: theme.palette.info.main,
    },
    fontColor5: {
      color: theme.palette.info.dark,
    },
    fontColor6: {
      color: theme.palette.text.hint,
    },
    listContainer: {
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    listAutoSizer: {
      overflow: 'visible',
      height: '0',
      width: '0',
    },
    fixedSizeList: {
      position: 'relative',
      height: '245px',
      width: '260px',
      overflow: 'auto',
      willChange: 'transform',
      direction: 'ltr',
    },
    methodOpacaty: {
      opacity: 0.5,
    },
    signText: {
      color: '#f0b90b',
      margin: 'auto',
      cursor: 'pointer',
      fontSize: '14px',
      textDecoration: 'none',
      '&:hover': {
        color: '#f0b90b',
        textDecoration: 'underline',
      },
    },
    signText2: {
      color: theme.palette.secondary.dark,
      margin: 'auto',
      marginTop: '3px',
    },
    loginDiv: {
      textAlign: 'center',
      width: '200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '60px',
      display: 'flex',
    },
  }),
)

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
