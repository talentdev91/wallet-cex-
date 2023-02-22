import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: `1px solid ${theme.palette.common.white}`,
      backgroundColor: theme.palette.primary.main,
    },
    tableTitle: {
      color: theme.palette.secondary.main,
      fontWeight: 600,
    },
    tableHeader: {
      display: 'flex',
      padding: '0 20px 12px 20px',
      borderBottom: `1px solid ${theme.palette.common.white}`,
      minWidth: '560px',
    },
    tableHeaderCell: {
      color: theme.palette.text.primary,
      wordBreak: 'break-word',
      alignSelf: 'center',
    },
    listContainer: {
      minWidth: '600px',
      overflow: 'auto',
    },
    headerPlacement: {
      textAlign: 'right',
    },
    buySideValue: {
      color: theme.palette.info.main,
      fontWeight: 500,
    },
    sellSideValue: {
      color: theme.palette.info.dark,
      fontWeight: 500,
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      '&:hover': {
        backgroundColor: `${theme.palette.secondary.contrastText}`,
      },
    },
    listItemFiled: {
      color: theme.palette.text.hint,
      width: '22%',
    },
    progressBar: {
      height: '32px',
      opacity: 0.15,
      animation: '0.5s ease-in-out 0s 1 normal none running animation-1rywlvk',
      cursor: 'pointer',
    },
    progressBarGreen: {
      backgroundColor: theme.palette.info.main,
    },
    progressBarRed: {
      backgroundColor: theme.palette.info.main,
    },
  }),
)
