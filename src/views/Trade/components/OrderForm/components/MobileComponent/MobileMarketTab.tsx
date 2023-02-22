/* eslint-disable */
import React from 'react'
import clsx from 'clsx'
import { Grid, Typography } from '@material-ui/core'
//external
import { useStyles, PercentSlider } from '../../Style'
import useGetCoinPair from '../../../../../../hooks/useGetCoinPair'
import LoginComponent from '../../../../../../components/LoginComponent'
import { marks } from '../../../../../../config/constants'

interface IFormInput {
  marketAmount: number
  marketSellAmount: number
}

function valuetext(value: number) {
  return `${value}%`
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1
}

function MarketRes(props: any) {
  const classes = useStyles()
  const loginState = false

  const [values, setValues] = React.useState<IFormInput>({
    marketAmount: 0,
    marketSellAmount: 0,
  })

  const handleChange = (prop: keyof IFormInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [prop]: event.target.value || event.target.checked,
    })
  }

  const onSellSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    console.log('Price : ' + values.marketAmount)
    e.preventDefault()
  }

  const onBuySubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    console.log('Price : ' + values.marketAmount)
    e.preventDefault()
  }

  //---get coinpair---
  const { coin1, coin2 } = useGetCoinPair()
  //

  return (
    <>
      <form
        onSubmit={() => {
          props.select === 0
            ? { onBuySubmit }
            : {
                onSellSubmit,
              }
        }}
      >
        <Grid container className={classes.orderContainer}>
          <Grid item xs={12} className={classes.orderContainer}>
            <div className={classes.textDiv1}>
              <Typography variant="body1" className={classes.fontColor1}>
                Avbl
              </Typography>
              <Typography variant="body1" className={classes.fontColor2}>
                -{props.select === 0 ? coin1 : coin2}
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
            <div className={classes.inputSide}>
              <Typography variant="body2" className={classes.fontColor1}>
                Amount
              </Typography>
              <input onChange={handleChange('marketAmount')} type="number" className={classes.input} step="any" />
              <Typography variant="body2" className={classes.fontColor2}>
                {coin2}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <PercentSlider
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-restrict"
              step={5}
              // valueLabelDisplay="auto"
              marks={marks}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            {loginState === false ? (
              <LoginComponent />
            ) : props.select === 0 ? (
              <button type="submit" className={classes.buyText}>
                Buy {coin2}
              </button>
            ) : (
              <button type="submit" className={classes.sellText}>
                Sell {coin2}
              </button>
            )}
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default MarketRes
