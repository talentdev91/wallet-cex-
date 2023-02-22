/** @format */

import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
  NativeSelect,
  Table,
  TableCell,
  TableHead,
  Box,
  SvgIcon,
  Container,
  Button,
  InputBase,
  TablePagination,
} from '@material-ui/core'
export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  bin: {
    cursor: 'pointer',
  },
  star: {
    color: '#bdc5d1',
    verticalAlign: 'super',
  },
  text: {
    fontSize: '12px',
    // fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  fontColor4: {
    color: '#c23b4e',
  },
  fontColor5: {
    color: '#0ecb81',
  },
  container: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    marginTop: '-10px',

    '@media (max-width:768px)': {
      marginTop: '0px',
    },
  },
  tableTopText: {
    color: '#4a4f55',
    fontSize: '.875rem',
    fontWeight: 600,
  },

  tableText: {
    fontSize: '12px',
    color: '#6c757e',
  },
  changeIcon: { verticalAlign: 'bottom' },
  tokenIcon: {
    alignSelf: 'center',
  },
}))

export const StyledTable = withStyles({
  root: {
    // maxWidth: 236,
    // maxHeight: 200,
  },
})(Table)

export const StyledTableHead = withStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.dark,
    backgroundColor: 'transparent',
    borderBottom: theme.palette.secondary.light,
  },
}))(TableHead)

export const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: '10px',
    backgroundColor: theme.palette.primary.main,
    borderBottom: '1px solid' + theme.palette.error.dark,
  },
  head: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    // borderBottom:  "1px solid #252930",#cccfd5
    borderBottom: '1px solid' + theme.palette.error.dark,
    background: 'transparent',
    fontSize: '12px',
  },
}))(TableCell)

export const StyledSvgIcon = withStyles({
  root: {
    padding: '4px',
    color: '#00c9a7',
    '&:hover': {
      color: 'black',
    },
  },
})(SvgIcon)

export const StyledTableControlBox = withStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: '0px',
    [theme.breakpoints.down(768)]: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
    [theme.breakpoints.up(768)]: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
  },
}))(Box)

export const StyledContainer = withStyles((theme) => ({
  root: {
    padding: '0 15px 50px 15px',
  },
  maxWidthLg: {
    maxWidth: '1400px',
  },
}))(Container)

export const StyledPaginationBtn = withStyles({
  root: {
    margin: '0 4px',
    padding: '5px 10px',
    // backgroundColor: 'rgba(51,122,254,.1)',
    maxHeight: '26px',
    color: '#3498db',
    fontSize: '12px',
    lineHeight: 1.5,
    textTransform: 'none',
    minWidth: '20px',
    border: '1px solid #2a2d35',
    borderRadius: '4px',
    '&:hover': {
      color: 'white',
      // backgroundColor: '#3498db',
    },
  },
})(Button)

export const StyledPageInfoBtn = withStyles({
  root: {
    textAlign: 'center',
    margin: '0 4px',
    padding: '5px 10px',
    backgroundColor: 'transparent',
    border: '1px solid #2a2d35',
    maxHeight: '26px',
    color: '#8c98a4',
    fontSize: '12px',
    lineHeight: '13px',
    fontWeight: 500,
    textTransform: 'none',
    minWidth: '70px',
    borderRadius: '4px',
  },
})(Box)

export const StyledNativeSelect = withStyles({
  root: {
    border: '1px solid #2a2d35',
  },
  icon: {
    right: '8px',
  },
})(NativeSelect)

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      fontSize: 12,
      margin: '0 8px',
      padding: '4px 18px 6px 6px !important',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase)

export const StyledRowsPerPageBox = withStyles({
  root: {
    color: '#77838f',
    fontSize: '14px',
    fontWeight: 400,
    marginRight: '-36px',
    zIndex: 19,
  },
})(Box)

export const StyledTablePagination = withStyles({
  root: {
    padding: '0px',
    border: 'none',
    marginLeft: '-44px',
  },
  input: {
    display: 'none',
  },
  caption: {
    display: 'none',
  },
  toolbar: {
    minHeight: '30px',
    '&.MuiToolbar-gutters': {
      padding: '0',
    },
  },
})(TablePagination)
