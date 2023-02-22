import React, { useState } from 'react'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'

import { FormControl, FormHelperText, ClickAwayListener } from '@material-ui/core'
import { useStyles } from '../../Style'
import CancelIcon from '@material-ui/icons/Cancel'

function EmailForm() {
  const classes = useStyles()
  let history = useHistory()

  const [clickEmail, setClickEmail] = useState(false)
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState('')

  const handleEmailChange = (value: any) => {
    setEmail(value)
    let regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regEmail.test(value)) {
      setEmailValid('Entered value does not match email format.')
    } else {
      setEmailValid('')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (email.length === 0) {
      setEmailValid('Please enter your email')
    } else {
      if (emailValid === '') {
        const formData = new FormData()
        formData.append('email', email)
        history.push('/reset-password/password', { data: email })
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl className={classes.formControlSide} variant="outlined">
            <FormHelperText className={clsx(classes.fontColor1, classes.helperText)}>Email</FormHelperText>
            <ClickAwayListener onClickAway={() => setClickEmail(false)}>
              <div
                className={clsx({
                  [classes.inputSide]: emailValid === '',
                  [classes.inputSide3]: emailValid === '' && clickEmail === true,
                  [classes.inputSide2]: emailValid !== '',
                })}
              >
                <input
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  onClick={() => setClickEmail(true)}
                  className={classes.input}
                />
                {email.length > 0 && clickEmail === true ? (
                  <CancelIcon className={classes.icon} onClick={() => setEmail('')} />
                ) : (
                  ''
                )}
              </div>
            </ClickAwayListener>
            <FormHelperText className={classes.error}>{emailValid === '' ? '' : emailValid}</FormHelperText>
          </FormControl>
        </div>
        <div className={classes.nextBtn}>
          <button className={classes.registerBtn} type="submit">
            Next
          </button>
        </div>
      </form>
    </>
  )
}

export default EmailForm
