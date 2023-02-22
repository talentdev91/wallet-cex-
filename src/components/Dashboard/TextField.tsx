import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Box, Typography, ClickAwayListener, Tooltip } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ShowPassIcon from '@material-ui/icons/Visibility'
import HidePassIcon from '@material-ui/icons/VisibilityOff'
import CancelIcon from '@material-ui/icons/Cancel'

import { useStyles } from './Style'

interface TextFiledProps {
  style?: object
  title?: string
  type?: string
  info?: string
  error: string
  fontSize?: string
  inputValue?: any
  placeholder?: string
  getCodeStatus?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: any) => void
  onClick?: () => void
  onGetCodeClick?: () => void
  handleInitState?: () => void
  handleGetCodeStatus?: () => void
}

function TextFiled({
  style,
  title,
  type,
  info,
  error,
  fontSize,
  inputValue,
  placeholder,
  getCodeStatus,
  onChange,
  onKeyDown,
  onClick,
  onGetCodeClick,
  handleInitState,
  handleGetCodeStatus,
}: TextFiledProps) {
  const classes = useStyles()
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [timer, setTimer] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [counter, setCounter] = useState(60)
  const [isFirstTime, setIsFirstTime] = useState(false)

  const handleInputClick = () => {
    if (onClick) onClick()
    setIsFocus(true)
  }

  const handleGetCodeClick = () => {
    if (onGetCodeClick) onGetCodeClick()
  }

  useEffect(() => {
    if (getCodeStatus) {
      setTimer(true)
      setIsFirstTime(true)
    } else {
      setTimer(false)
    }
  }, [getCodeStatus])

  useEffect(() => {
    if (timer) {
      if (counter > 0) setTimeout(() => setCounter(counter - 1), 1000)
      else {
        setTimer(false)
        setCounter(60)
        handleGetCodeStatus && handleGetCodeStatus()
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, timer])
  return (
    <ClickAwayListener onClickAway={() => setIsFocus(false)}>
      <Box width="100%" style={style}>
        {title && (
          <Typography className={classes.fontType1} style={{ marginBottom: '4px' }}>
            {title}
          </Typography>
        )}

        <Box
          className={clsx(classes.inputContainer, {
            [classes.errorInputConainer]: error !== '',
            [classes.focusedInputConainer]: isFocus,
          })}
        >
          <input
            type={type === 'isPassword' && showConfirmPass === false ? 'password' : type === 'isNumber' ? 'number' : ''}
            placeholder={placeholder}
            className={classes.textFiledInput}
            value={inputValue}
            onChange={onChange}
            onFocus={() => setIsFocus(true)}
            // onBlur={() => setIsFocus(false)}
            onKeyDown={(e) => {
              if (onKeyDown) {
                onKeyDown(e)
              }
              if (e.key === 'Tab') setIsFocus(false)
              if (e.key === 'e') e.preventDefault()
            }}
            onClick={handleInputClick}
          />
          {type === 'isButton' && !isFirstTime && (
            <Typography className={classes.getCode} onClick={handleGetCodeClick}>
              Get code
            </Typography>
          )}
          {type === 'isButton' && isFirstTime && timer && (
            <Typography className={classes.verificationCode}>
              Verification code sent
              <Tooltip
                title={`Haven't received code? Request new code in ${counter} seconds. The code will expire after 10 mins`}
                arrow
                placement="top"
                classes={{ tooltip: classes.verificationCodeTooltip }}
              >
                <InfoOutlinedIcon style={{ fontSize: '18px', marginLeft: '4px' }} />
              </Tooltip>
            </Typography>
          )}
          {type === 'isButton' && isFirstTime && !timer && (
            <Typography className={classes.getCode} onClick={handleGetCodeClick}>
              Resend code
            </Typography>
          )}
          {type === 'isPassword' && showConfirmPass === true && (
            <>
              {inputValue && isFocus && (
                <CancelIcon
                  className={classes.passIcon}
                  onClick={() => {
                    handleInitState && handleInitState()
                    setIsFocus(false)
                  }}
                />
              )}
              <ShowPassIcon className={classes.passIcon} onClick={() => setShowConfirmPass(!showConfirmPass)} />
            </>
          )}
          {type === 'isPassword' && showConfirmPass === false && (
            <>
              {inputValue && isFocus && (
                <CancelIcon
                  className={classes.passIcon}
                  onClick={() => {
                    handleInitState && handleInitState()
                    setIsFocus(false)
                  }}
                />
              )}
              <HidePassIcon className={classes.passIcon} onClick={() => setShowConfirmPass(!showConfirmPass)} />
            </>
          )}
          {type === 'isDelete' && inputValue && isFocus && (
            <CancelIcon
              className={classes.passIcon}
              onClick={() => {
                handleInitState && handleInitState()
                setIsFocus(false)
              }}
            />
          )}
          {type === 'isNumber' && inputValue && isFocus && (
            <CancelIcon
              className={classes.passIcon}
              onClick={() => {
                handleInitState && handleInitState()
                setIsFocus(false)
              }}
            />
          )}
        </Box>
        {error === '' ? (
          <Typography className={clsx(classes.textFieldInfoText, fontSize)}>{info}</Typography>
        ) : (
          <Typography className={clsx(classes.textFieldErrorText, fontSize)}>{error}</Typography>
        )}
      </Box>
    </ClickAwayListener>
  )
}

export default TextFiled
