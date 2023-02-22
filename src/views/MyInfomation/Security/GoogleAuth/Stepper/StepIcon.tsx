import clsx from 'clsx'

import { StepIconProps } from '@material-ui/core/StepIcon'
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles'
import StepConnector from '@material-ui/core/StepConnector'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#eaecef',
      zIndex: 1,
      color: '#707a8a',
      width: 24,
      height: 24,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundColor: '#fcd535',
      color: '#181a20',
    },
    completed: {
      backgroundColor: '#fcd535',
      color: '#181a20',
    },
  }),
)

export const StepperConnector = withStyles({
  active: {
    '& $line': {
      backgroundColor: '#fcd535',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#fcd535',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector)

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useStyles()
  const { active, completed } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <span>1</span>,
    2: <span>2</span>,
    3: <span>3</span>,
    4: <span>4</span>,
    5: <span>5</span>,
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  )
}
export default ColorlibStepIcon
