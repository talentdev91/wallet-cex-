//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stepperContent: {
      padding: '24px',
      margin: '16px',
      borderRadius: '4px',
      backgroundColor: 'rgb(30, 32, 38)',
      [theme.breakpoints.down(800)]: {
        margin: '0px',
        borderRadius: '0px',
      },
    },
    stepperTitle: {
      fontSize: '32px',
      lineHeight: '40px',
      color: 'white',
      fontWeight: 600,
    },
    stepperSubtitle: {
      fontSize: '16px',
      color: '#ffffff80',
      lineHeight: '30px',
      fontWeight: 400,
    },
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    stepper: {
      [theme.breakpoints.down(800)]: {
        display: 'none',
      },
      maxWidth: '600px',
      backgroundColor: 'transparent',
      padding: '24px 0px',
      '& .MuiStepIcon-root': {
        color: 'white',
        width: '20px',
        height: '20px',
      },
      '& .MuiStepIcon-completed': {
        color: '#00c087',
      },
      '& .MuiStepIcon-text': {
        fill: 'black',
      },
      '& .MuiStepLabel-root': {
        alignItems: 'start',
      },
      '& .MuiTypography-root': {
        textAlign: 'left',
      },
      '& .MuiStepConnector-alternativeLabel': {
        left: 'calc(-100% + 30px)',
        right: 'calc(100% - 5px)',
        top: '10px',
      },
      '& .MuiStepLabel-label': {
        color: 'white',
        fontSize: '16px',
        fontWeight: 500,
      },
      '& .MuiStepConnector-line': {
        borderBottom: '1px dotted #f0b90b',
        borderTop: '#f0b90b',
        borderRight: '#f0b90b',
        borderLeft: '#f0b90b',
      },
    },
    smallLabel: {
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: '18px',
      color: '#848e9c',
    },
    stepsBtn: {
      padding: '30px 80px',
      width: '75px',
      display: 'inline-flex',
    },
    verticalStepper: {
      [theme.breakpoints.up(800)]: {
        display: 'none',
      },
      backgroundColor: 'transparent',
      padding: '24px 0px',
      '& .MuiStepIcon-root': {
        color: 'white',
        width: '20px',
        height: '20px',
      },
      '& .MuiStepIcon-completed': {
        color: '#00c087',
      },
      '& .MuiStepIcon-text': {
        fill: 'black',
      },
      '& .MuiStepLabel-root': {
        alignItems: 'start',
      },
      '& .MuiTypography-root': {
        textAlign: 'left',
      },
      '& .MuiStepLabel-label': {
        color: 'white',
        fontSize: '16px',
        fontWeight: 500,
      },
      '& .MuiStepConnector-vertical': {
        marginLeft: '10px',
      },
      '& .MuiStepContent-root': {
        marginLeft: '10px',
        borderLeft: '1px dotted #f0b90b',
      },
      '& .MuiStepConnector-lineVertical': {
        minHeight: '24px',
        borderLeft: '1px dotted #f0b90b',
      },
    },
    link: {
      textDecoration: 'none',
    },
  }),
)
