import React, { useState } from 'react'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'

import { FormControl, FormHelperText } from '@material-ui/core'

import { useStyles, StyledOutlineInput } from '../../Style'

interface IFormInput {
  phone: string
  showPassword: boolean
}

function PhoneForm() {
  const classes = useStyles()

  const [values, setValues] = useState<IFormInput>({
    phone: '',
    showPassword: false,
  })

  const handleChange = (prop: keyof IFormInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [prop]: event.target.value || event.target.checked,
    })
  }

  const { register } = useForm<IFormInput>()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {}

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <FormControl className={classes.formControlSide} variant="outlined">
            <FormHelperText className={clsx(classes.fontColor1, classes.helperText)}>Phone Number</FormHelperText>
            <StyledOutlineInput
              {...register('phone', {
                required: true,
              })}
              aria-describedby="outlined-weight-helper-text"
              onChange={handleChange('phone')}
            />
          </FormControl>
        </div>
        <div>
          <button className={classes.registerBtn} type="submit">
            Next
          </button>
        </div>
      </form>
    </>
  )
}

export default PhoneForm
