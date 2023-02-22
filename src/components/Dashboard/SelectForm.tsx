import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
// material-ui
import { Typography, Popper, Grow, Paper, MenuList, ClickAwayListener, Button } from '@material-ui/core'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded'
// style
import { useStyles } from './Style'

interface SelectFormProps {
  className?: string
  options: string[]
  disabled?: boolean
  handleClickTab: (e: any) => void
}

function SelectForm({ className, options, disabled, handleClickTab }: SelectFormProps) {
  const classes = useStyles()
  const [selectOpen, setSelectOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const [tabKey, setTabKey] = useState(options[0])

  // handleClickTab = (tab: string) => {

  //   setTabKey(tab)
  // }

  const handleTabSelectOpen = () => {
    setSelectOpen((selectPrevOpen) => !selectPrevOpen)
  }

  const handleTabSelectClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setSelectOpen(false)
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setSelectOpen(false)
    }
  }

  // return focus to the button when we transitioned from !selectOpen -> selectOpen
  const selectPrevOpen = useRef(selectOpen)

  useEffect(() => {
    if (selectPrevOpen.current === true && selectOpen === false) {
      anchorRef.current!.focus()
    }

    selectPrevOpen.current = selectOpen
  }, [selectOpen])

  const selectButton = (
    <Button
      className={clsx(classes.tabSelect, className, { [classes.selectMenuDisabled]: disabled })}
      style={{ width: '165px' }}
      ref={anchorRef}
      aria-controls={selectOpen ? 'menu-list-grow' : undefined}
      aria-haspopup="true"
      onClick={handleTabSelectOpen}
      disabled={disabled}
    >
      <Typography className={clsx(classes.selectedListItem, { [classes.disabledTextColor]: disabled })}>
        {tabKey}
      </Typography>
      {selectOpen ? (
        <ArrowDropUpRoundedIcon className={classes.arrowIcon} />
      ) : (
        <ArrowDropDownRoundedIcon className={classes.arrowIcon} />
      )}
    </Button>
  )

  return (
    <>
      {disabled ? <span style={{ cursor: 'not-allowed', display: 'none' }}>{selectButton}</span> : <>{selectButton}</>}

      <Popper
        open={selectOpen}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 100 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper className={classes.listContainer}>
              <ClickAwayListener onClickAway={handleTabSelectClose}>
                <MenuList
                  autoFocusItem={selectOpen}
                  className={classes.menuList}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {options.map((option) => (
                    <Typography
                      key={option}
                      className={clsx(classes.listItem, { [classes.activeColor]: option === tabKey })}
                      onClick={(e) => {
                        handleClickTab(option)
                        setTabKey(option)
                        handleTabSelectClose(e)
                      }}
                    >
                      {option}
                    </Typography>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default SelectForm
