import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      // height: "100vh",
    },
    main: {
      margin: '40px auto 0 auto',
      padding: '0px 24px 30px 24px',
      maxWidth: '1260px',
      minHeight: 'calc(100vh - 198px)',
    },
    mainHeader: {
      marginBottom: '20px',
      alignItems: 'flex-end',
    },
    pageTitle: {
      fontSize: '28px',
      color: `${theme.palette.primary.contrastText}`,
    },
    line: {
      height: '2px',
      width: '16px',
      backgroundColor: theme.palette.primary.contrastText,
      margin: '0 8px',
    },
    coinPair: {
      fontSize: '16px',
      color: theme.palette.primary.contrastText,
    },
    footerPosition: {
      borderTop: `1px solid ${theme.palette.common.white}`,
      width: '100%',
      // position: "absolute",
      // bottom: "0px",
    },
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectLabel: {
      color: theme.palette.text.primary,
    },
  }),
)
