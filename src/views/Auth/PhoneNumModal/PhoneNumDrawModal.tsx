import React, { useState } from 'react'
import clsx from 'clsx'
import { FormControl, Typography, ClickAwayListener, Avatar } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import { useStyles } from '../Style'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { allCountries } from './PhoneNum'

function PhoneNumDraw({ ...props }: any) {
  const { handleDrawClose, handleClickNumber } = props
  const classes = useStyles()

  const [searchCountryText, setSearchCountryText] = useState('')
  const [searchCountryResult, setSearchCountryResult] = useState<any>()
  const [clickText, setClickText] = useState(false)

  const handleSearchChange = (e: any) => {
    setSearchCountryText(e)

    let searchCountries: any = []

    for (let i = 0; i < allCountries.length; i++) {
      if (
        allCountries[i]?.name?.toLowerCase().indexOf(e?.toLowerCase()) !== -1 ||
        allCountries[i]?.dialCode?.toLowerCase().indexOf(e?.toLowerCase()) !== -1
      ) {
        searchCountries.push(allCountries[i])
      }
    }
    setSearchCountryResult(searchCountries)
  }

  return (
    <>
      <div className={classes.phoneDrawContainer}>
        <div>
          <div className={classes.modalHeader}>
            <Typography className={classes.modalTitle}>Select area code</Typography>
            <CloseIcon className={classes.closeIcon} onClick={handleDrawClose} />
          </div>
          <FormControl className={classes.formControlSide1} variant="outlined">
            <ClickAwayListener onClickAway={() => setClickText(false)}>
              <div
                className={clsx({
                  [classes.inputSide6]: clickText === false,
                  [classes.inputSide7]: clickText === true,
                })}
              >
                <SearchIcon className={classes.searchIcon} />
                <input
                  value={searchCountryText}
                  onClick={() => setClickText(true)}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className={classes.input}
                  placeholder="Search"
                />
                {searchCountryText.length > 0 && clickText === true ? (
                  <CancelIcon className={classes.icon} onClick={() => setSearchCountryText('')} />
                ) : (
                  ''
                )}
              </div>
            </ClickAwayListener>
          </FormControl>
        </div>
        <div className={classes.phoneNumList}>
          {(searchCountryText.length > 0 ? searchCountryResult : allCountries).map((country: any, key: any) => (
            <div key={key} className={classes.countryDiv} onClick={() => handleClickNumber(country)}>
              <div className={classes.flagDiv}>
                <Avatar src={country.flag} alt="logo" className={classes.flagIcon} />
                <Typography className={classes.countryName}>{country.name}</Typography>
              </div>
              <Typography className={classes.countryName}>{country.dialCode}</Typography>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PhoneNumDraw
