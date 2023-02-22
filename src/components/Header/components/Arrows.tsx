/** @format */

import React from 'react'
import { IconButton } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import { createStyles, makeStyles } from '@material-ui/core/styles'

import { VisibilityContext } from 'react-horizontal-scrolling-menu'

const useStyles = makeStyles(() =>
  createStyles({
    iconArrow: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      right: '1%',
      userSelect: 'none',
      '&.MuiIconButton-root:hover': {
        backgroundColor: 'transparent',
      },
      '&.MuiIconButton-root:active': {
        backgroundColor: 'transparent',
      },
    },
  }),
)

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode
  disabled: boolean
  onClick: VoidFunction
}) {
  const classes = useStyles()

  return (
    <IconButton
      disabled={disabled}
      onClick={onClick}
      className={classes.iconArrow}
      style={{ opacity: disabled ? '0' : '1' }}
    >
      {children}
    </IconButton>
  )
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators, initComplete } =
    React.useContext(VisibilityContext)

  const [disabled, setDisabled] = React.useState(!initComplete || (initComplete && isFirstItemVisible))
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible)
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators])

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <ArrowLeftIcon />
    </Arrow>
  )
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } = React.useContext(VisibilityContext)

  const [disabled, setDisabled] = React.useState(!visibleItemsWithoutSeparators.length && isLastItemVisible)
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible)
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators])

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <ArrowRightIcon />
    </Arrow>
  )
}
