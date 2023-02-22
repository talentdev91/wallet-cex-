import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, FormControl } from '@material-ui/core'
//external
import { useStyles, PercentSlider } from '../Style'
import useGetCoinPair from '../../../../../hooks/useGetCoinPair'
import LoginComponent from '../../../../../components/LoginComponent'
import { marks } from '../../../../../config/constants'

interface IFormInput {
  stopBuy: number
  stopSell: number
  stopLimitBuy: number
  stopLimitSell: number
  stopAmountBuy: number
  stopAmountSell: number
}

function valuetext(value: number) {
  return `${value}%`
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1
}

function StopLimit() {
  const classes = useStyles()

  const [values, setValues] = React.useState<IFormInput>({
    stopBuy: 0,
    stopSell: 0,
    stopLimitBuy: 0,
    stopLimitSell: 0,
    stopAmountBuy: 0,
    stopAmountSell: 0,
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
            <FormControl className={classes.formDiv}>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Stop
                </Typography>
                <input type="number" onChange={handleChange('stopBuy')} className={classes.input} step="any" />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin1}
                </Typography>
              </div>
            </FormControl>
            <FormControl className={classes.formDiv}>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Limit
                </Typography>
                <input type="number" onChange={handleChange('stopLimitBuy')} className={classes.input} step="any" />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin1}
                </Typography>
              </div>
            </FormControl>
            <FormControl className={classes.formDiv}>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Amount
                </Typography>
                <input type="number" onChange={handleChange('stopAmountBuy')} className={classes.input} step="any" />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin2}
                </Typography>
              </div>
              <PercentSlider
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={5}
                // valueLabelDisplay="auto"
                marks={marks}
              />
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Total
                </Typography>
                <input value={values.stopAmountBuy * values.stopBuy} readOnly className={classes.input} step="any" />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin1}
                </Typography>
              </div>
              <div>
                {loginState === false ? (
                  <LoginComponent />
                ) : (
                  <button type="submit" className={classes.buyText}>
                    Buy {coin2}
                  </button>
                )}
              </div>
            </FormControl>
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
            <FormControl className={classes.formDiv}>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Stop
                </Typography>
                <input type="number" onChange={handleChange('stopSell')} className={classes.input} step="any" />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin1}
                </Typography>
              </div>
            </FormControl>
            <FormControl className={classes.formDiv}>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Limit
                </Typography>
                <input type="number" onChange={handleChange('stopLimitSell')} className={classes.input} step="any" />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin1}
                </Typography>
              </div>
            </FormControl>
            <FormControl className={classes.formDiv}>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Amount
                </Typography>
                <input type="number" onChange={handleChange('stopAmountSell')} className={classes.input} step="any" />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin2}
                </Typography>
              </div>
              <PercentSlider
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={5}
                // valueLabelDisplay="auto"
                marks={marks}
              />
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Total
                </Typography>
                <input value={values.stopAmountSell * values.stopSell} readOnly className={classes.input} step="any" />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin1}
                </Typography>
              </div>
              <div>
                {loginState === false ? (
                  <LoginComponent />
                ) : (
                  <button type="submit" className={classes.sellText}>
                    Sell {coin2}
                  </button>
                )}
              </div>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </>
  )
}

export default StopLimit
