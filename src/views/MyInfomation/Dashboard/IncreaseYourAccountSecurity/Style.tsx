//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardDescription: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    descriptionRow: {
      fontSize: '14px',
      color: '#747c8a',
      display: 'flex',
    },
    setDescriptionRow: {
      fontSize: '14px',
      color: '#3bb007',
      display: 'flex',
    },
    descriptionAllRow: {
      fontSize: '14px',
      color: '#000000',
      display: 'flex',
    },
    descriptionDot: {
      margin: '0px 4px 0px 2px',
      flex: '1 1 0%',
      height: '4px',
      minWidth: '6px',
      backgroundColor: 'rgb(234, 236, 239)',
    },
    setDescriptionDot: {
      margin: '0px 4px 0px 2px',
      flex: '1 1 0%',
      height: '4px',
      minWidth: '6px',
      backgroundColor: '#3bb007',
    },
    card_root: {
      paddingTop: '16px',
      paddingBottom: '16px',
    },
    cardContent1: {
      // borderBottom: '1px solid #eaecef',
    },
    cardContent11: {
      // borderRight: '1px solid #eaecef',
      padding: '16px',
      display: 'flex',
      flex: '1 1 0%',
    },
    // cardContent12: {
    //   padding: '16px',
    //   display: 'flex',
    //   flex: '1 1 0%',
    // },
    // cardContent2: {},
    // cardContent21: {
    //   borderRight: '1px solid #eaecef',
    //   padding: '16px',
    //   display: 'flex',
    //   flex: '1 1 0%',
    // },
    // cardContent22: {
    //   padding: '16px',
    //   display: 'flex',
    //   flex: '1 1 0%',
    // },
    contentDot: {
      boxSizing: 'border-box',
      margin: '8px 8px 0px 0px',
      minWidth: '6px',
      width: '6px',
      height: '6px',
      backgroundColor: 'lightgray',
      borderRadius: '3px',
    },
    setContentDot: {
      boxSizing: 'border-box',
      margin: '8px 8px 0px 0px',
      minWidth: '6px',
      width: '6px',
      height: '6px',
      backgroundColor: '#3bb007',
      borderRadius: '3px',
    },
    setContent: {
      fontSize: '14px',
      color: '#1e2329',
      fontWeight: 400,
    },
    cardContent: {
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      color: 'rgb(30, 35, 41)',
      fontSize: '14px',
    },
    contentLink: {
      color: '#c99400',
      boxSizing: 'border-box',
      margin: '0px',
      minWidth: '0px',
      textDecoration: 'underline',
      fontSize: '14px',
      '&:hover': {
        textDecoration: 'underline',
        color: '#f0b90b',
      },
    },
  }),
)
