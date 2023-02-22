import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
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
    perPageDiv: {
      margin: '10px',
      display: 'flex',
      float: 'right',
      justifyContent: 'space-between',
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
    p2pActionContainer2: {
      display: 'flex',
      marginTop: '12px',
      flexDirection: 'row',
    },
    statusSelect: {
      marginLeft: '20px',
    },
    subtitle: {
      fontWeight: 500,
      lineHeight: '40px',
      fontSize: '32px',
      color: '#1e2329',
      marginBottom: '16px',
    },
    tableHeaderCell: {
      '&.MuiTableCell-root': {
        borderBottom: '1px solid #eaecef',
        borderTop: '1px solid #eaecef',
        padding: '12px 16px',
        fontSize: '12px',
        fontWeight: 'normal',
        color: '#1e2329',
        lineHeight: 1.5,
      },
      '&.MuiTableCell-stickyHeader': {
        backgroundColor: '#ffffff',
      },
    },
    tableHeaderCell1: {
      '&.MuiTableCell-root': {
        borderBottom: '1px solid #eaecef',
        borderTop: '1px solid #eaecef',
        padding: '12px 16px',
        fontSize: '12px',
        fontWeight: 'normal',
        color: '#848e9c',
        lineHeight: 1.5,
      },
      '&.MuiTableCell-stickyHeader': {
        backgroundColor: '#f9f9fa',
      },
    },
    tableHeaderCell2: {
      '&.MuiTableCell-root': {
        borderBottom: '1px solid #eaecef',
        borderTop: '1px solid #eaecef',
        padding: '12px 16px',
        fontSize: '12px',
        fontWeight: 'normal',
        color: '#00c087',
        lineHeight: 1.5,
      },
      '&.MuiTableCell-stickyHeader': {
        backgroundColor: '#ffffff',
      },
    },
    tableHeaderCell3: {
      '&.MuiTableCell-root': {
        borderBottom: '1px solid #eaecef',
        borderTop: '1px solid #eaecef',
        padding: '12px 16px',
        fontSize: '12px',
        fontWeight: 'normal',
        color: '#f6465d',
        lineHeight: 1.5,
      },
      '&.MuiTableCell-stickyHeader': {
        backgroundColor: '#ffffff',
      },
    },
    menuTitle: {
      color: '#474d57',
      fontSize: '14px',
      lineHeight: '32px',
      fontWeight: 400,
    },
    menuTitle1: {
      color: '#474d57',
      fontSize: '14px',
      lineHeight: '32px',
      fontWeight: 400,
      marginLeft: '20px',
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
  }),
)
