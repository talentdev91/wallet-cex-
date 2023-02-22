/** @format */

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      '& .MuiPaper-root': {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.dark,
        borderRadius: '6px',
        width: '600px',
        '@media (max-width:700px)': {
          height: '100%',
          width: '100%',
          maxWidth: '100%',
          maxHeight: 'none',
          margin: 0,
        },
      },
    },
    videoModal: {
      '& .MuiPaper-root': {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.dark,
        borderRadius: '6px',
        width: '720px',
        '@media (max-width:700px)': {
          height: '100%',
          width: '100%',
          maxWidth: '100%',
          maxHeight: 'none',
          margin: 0,
        },
      },
      '& .MuiDialog-paperWidthSm': {
        maxWidth: '720px',
        '@media (max-width:700px)': {
          maxWidth: '100%',
          maxHeight: 'none',
          margin: 0,
        },
      },
    },
    modalContainer: {
      background: '#1e2329',
      borderRadius: '12px',
      minWidth: '720px',
      height: '490px',
      '@media (max-width:700px)': {
        maxWidth: '100%',
        maxHeight: 'none',
        minWidth: '100%',
        margin: 0,
      },
    },
    modalHeader: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid #212833',
    },
    video: {
      width: '100%',
      height: '100%',
      '&:focus:not(.focus-visible)': {
        outline: 'none',
      },
    },
    fontColor6: {
      color: theme.palette.text.hint,
    },
    linkStyle: {
      lineHeight: '24px',
      textDecoration: 'underline',
    },
    fontColor7: {
      color: theme.palette.secondary.main,
    },
    learnMore: {
      color: theme.palette.secondary.light,
      lineHeight: '24px',
    },
    languageSelectButton: {
      margin: '16px 16px 0 0',
      width: '26%',
      padding: '10px 12px',
      borderRadius: '4px',
      textAlign: 'center',
      '&:hover': {
        backgroundColor: '#282c30',
        cursor: 'pointer',
      },
    },
    languageSelectButton1: {
      margin: '16px 16px 0 0',
      width: '26%',
      padding: '10px 12px',
      borderRadius: '4px',
      textAlign: 'center',
      color: 'gray',
      // "&:hover": {
      //   backgroundColor: "#282c30",
      //   cursor: "pointer",
      // },
    },
    title: {
      color: '#eaecef',
      padding: '20px 24px',
      fontSize: '20px',
      fontWeight: 600,
    },

    closeIcon: {
      width: '40px',
      cursor: 'pointer',
      height: '40px',
      margin: '16px 20px 0px 0px',
    },
    videoDiv: {
      padding: '16px',
      width: '100%',
      height: '84%',
      background: 'transparent',
    },
    videoClick: {
      cursor: 'pointer',
    },
    videoIcon: {
      margin: '-4px 20px 0px 0px',
    },
  }),
)
