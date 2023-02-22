import React from 'react'
import clsx from 'clsx'
import { Tooltip } from '@material-ui/core'
import { useStyles } from './Style'

export interface ActionButtonrProps {
  className?: string
  style?: object
  children: React.ReactNode
  type: string
  tooltipTitle?: string
  onClick?: () => void
  disabled?: boolean
}

function ActionButton({ className, style, children, type, tooltipTitle, disabled, onClick }: ActionButtonrProps) {
  const classes = useStyles()

  const styledButton = (
    <button
      className={clsx(classes.actionButton, className, {
        [classes.normalButtonBackground]: type === 'normal' && !tooltipTitle,
        [classes.gradientButtonBackground]: type === 'gradient',
        [classes.yellowButtonBackground]: type === 'yellow',
        [classes.outlineButtonBackground]: type === 'outline',
        [classes.disabledButon]: disabled,
      })}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )

  return (
    <>
      {tooltipTitle ? (
        <Tooltip title={tooltipTitle} arrow>
          {styledButton}
        </Tooltip>
      ) : (
        <>{styledButton}</>
      )}
    </>
  )
}

export default ActionButton
