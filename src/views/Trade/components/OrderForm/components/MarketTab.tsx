import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Grid, Typography, FormControl } from '@material-ui/core'
//external
import { useStyles, PercentSlider } from '../Style'
import useGetCoinPair from '../../../../../hooks/useGetCoinPair'
import LoginComponent from '../../../../../components/LoginComponent'
import { marks } from '../../../../../config/constants'

interface IFormInput {
  marketBuyAmount: number
  marketSellAmount: number
}

function valuetext(value: number) {
  return `${value}%`
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1
}

function Market() {
  const classes = useStyles()

  const [values, setValues] = React.useState<IFormInput>({
    marketBuyAmount: 0,
    marketSellAmount: 0,
  })
  const { coin1, coin2 } = useGetCoinPair() //get coin pair

  const handleChange = (prop: keyof IFormInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [prop]: event.target.value || event.target.checked,
    })
  }

  const onSellSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
  }
  const onBuySubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
  }

  //--------login state---------------
  const [loginState, setLoginState] = useState(false)

  useEffect(() => {
    if (localStorage.jwtToken) {
      setLoginState(true)
    }
  }, [])

  return (
    <>
      <Grid container spacing={2} className={classes.orderContainer}>
        <Grid item xs={12} sm={6} className={classes.orderContainer}>
          <form onSubmit={onBuySubmit}>
            <div className={classes.textDiv}>
              <Typography variant="body1" className={classes.fontColor1}>
                Avbl
              </Typography>
              <Typography variant="body1" className={classes.fontColor2}>
                -{coin1}
              </Typography>
            </div>
            <div className={classes.inputSide1}>
              <Typography variant="body2" className={classes.fontColor1}>
                Price
              </Typography>
              <Typography variant="body2" className={clsx(classes.fontColor2, classes.marketInput)}>
                Market {coin1}
              </Typography>
            </div>
            <FormControl>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Amount
                </Typography>
                <input type="number" onChange={handleChange('marketBuyAmount')} className={classes.input} step="any" />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin1}
                </Typography>
              </div>
            </FormControl>
            <PercentSlider
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-restrict"
              step={5}
              marks={marks}
            />
            <div>
              {loginState === false ? (
                <LoginComponent />
              ) : (
                <button type="submit" className={classes.buyText}>
                  Buy {coin2}
                </button>
              )}
            </div>
          </form>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.orderContainer}>
          <form onSubmit={onSellSubmit}>
            <div className={classes.textDiv}>
              <Typography variant="body1" className={classes.fontColor1}>
                Avbl
              </Typography>
              <Typography variant="body1" className={classes.fontColor2}>
                -{coin2}
              </Typography>
            </div>
            <div className={classes.inputSide1}>
              <Typography variant="body2" className={classes.fontColor1}>
                Price
              </Typography>
              <Typography variant="body2" className={clsx(classes.fontColor2, classes.marketInput)}>
                Market {coin1}
              </Typography>
            </div>
            <FormControl>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Amount
                </Typography>
                <input type="number" onChange={handleChange('marketSellAmount')} className={classes.input} step="any" />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin2}
                </Typography>
              </div>
            </FormControl>
            <PercentSlider
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-restrict"
              step={5}
              marks={marks}
            />
            <div>
              {loginState === false ? (
                <LoginComponent />
              ) : (
                <button type="submit" className={classes.sellText}>
                  Sell {coin2}
                </button>
              )}
            </div>
          </form>
        </Grid>
      </Grid>
    </>
  )
}

export default Market
