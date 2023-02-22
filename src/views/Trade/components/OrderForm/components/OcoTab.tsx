import React, { useState, useEffect } from 'react'
import { Grid, Typography, FormControl } from '@material-ui/core'
//external
import { useStyles, PercentSlider } from '../Style'
import useGetCoinPair from '../../../../../hooks/useGetCoinPair'
import LoginComponent from '../../../../../components/LoginComponent'
import { marks } from '../../../../../config/constants'

interface IFormInput {
  ocoBuyPrice: number
  ocoSellPrice: number
  ocoBuyStop: number
  ocoSellStop: number
  ocoBuyLimit: number
  ocoSellLimit: number
  ocoBuyAmount: number
  ocoSellAmount: number
}

function valuetext(value: number) {
  return `${value}%`
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1
}

function Oco() {
  const classes = useStyles()

  const [values, setValues] = React.useState<IFormInput>({
    ocoBuyPrice: 0,
    ocoSellPrice: 0,
    ocoBuyStop: 0,
    ocoSellStop: 0,
    ocoBuyLimit: 0,
    ocoSellLimit: 0,
    ocoBuyAmount: 0,
    ocoSellAmount: 0,
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
                  Price
                </Typography>
                <input type="number" onChange={handleChange('ocoBuyPrice')} className={classes.input} step="any" />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin1}
                </Typography>
              </div>
            </FormControl>
            <FormControl className={classes.formDiv}>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Stop
                </Typography>
                <input type="number" onChange={handleChange('ocoBuyStop')} className={classes.input} step="any" />
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
                <input type="number" onChange={handleChange('ocoBuyLimit')} className={classes.input} step="any" />
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
                <input type="number" onChange={handleChange('ocoBuyAmount')} className={classes.input} step="any" />
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
              // valueLabelDisplay="auto"
              marks={marks}
            />
            <div className={classes.inputSide}>
              <Typography variant="body2" className={classes.fontColor1}>
                Total
              </Typography>
              <input value={values.ocoBuyAmount * values.ocoBuyPrice} readOnly className={classes.input} step="any" />
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
            <div className={classes.inputSide}>
              <Typography variant="body2" className={classes.fontColor1}>
                Price
              </Typography>
              <input type="number" onChange={handleChange('ocoSellPrice')} className={classes.input} step="any" />
              <Typography variant="body2" className={classes.fontColor2}>
                {coin1}
              </Typography>
            </div>
            <div className={classes.inputSide}>
              <Typography variant="body2" className={classes.fontColor1}>
                Stop
              </Typography>
              <input type="number" onChange={handleChange('ocoSellStop')} className={classes.input} step="any" />
              <Typography variant="body2" className={classes.fontColor2}>
                {coin1}
              </Typography>
            </div>
            <div className={classes.inputSide}>
              <Typography variant="body2" className={classes.fontColor1}>
                Limit
              </Typography>
              <input type="number" onChange={handleChange('ocoSellLimit')} className={classes.input} step="any" />
              <Typography variant="body2" className={classes.fontColor2}>
                {coin1}
              </Typography>
            </div>
            <div className={classes.inputSide}>
              <Typography variant="body2" className={classes.fontColor1}>
                Amount
              </Typography>
              <input type="number" onChange={handleChange('ocoSellAmount')} className={classes.input} step="any" />
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
              <input value={values.ocoSellAmount * values.ocoSellPrice} readOnly className={classes.input} />
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
          </form>
        </Grid>
      </Grid>
    </>
  )
}

export default Oco
