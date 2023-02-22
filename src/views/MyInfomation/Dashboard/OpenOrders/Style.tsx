//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableHeaderCell: {
      '&.MuiTableCell-root': {
        borderBottom: '1px solid #eaecef',
        padding: '12px 16px',
        fontSize: '12px',
        fontWeight: 'normal',
        lineHeight: 1.5,
      },
      '&.MuiTableCell-stickyHeader': {
        backgroundColor: '#ffffff',
      },
    },
    fontColor4: {
      color: '#c23b4e',
    },
    fontColor5: {
      color: '#0ecb81',
    },
    text: {
      fontSize: '12px',
      color: '#1e2329',
    },
    tableCell: {
      '&.MuiTableCell-root': {
        borderBottom: 'none',
      },
    },
    bin: {
      cursor: 'pointer',
    },
    cancelBtn: {
      background: 'transparent',
      border: 'none',
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
    notfoundIcon: {
      padding: '24px',
    },
  }),
)
