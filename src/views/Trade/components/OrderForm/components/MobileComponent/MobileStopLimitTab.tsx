import React from 'react'
import { Grid, Typography } from '@material-ui/core'
//external
import { useStyles, PercentSlider } from '../../Style'
import useGetCoinPair from '../../../../../../hooks/useGetCoinPair'
import LoginComponent from '../../../../../../components/LoginComponent'
import { marks } from '../../../../../../config/constants'

interface IFormInput {
  stop: number
  stopLimit: number
  stopAmount: number
}

function valuetext(value: number) {
  return `${value}%`
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1
}

function StopLimitRes(props: any) {
  const classes = useStyles()
  const loginState = false

  const [values, setValues] = React.useState<IFormInput>({
    stop: 0,
    stopLimit: 0,
    stopAmount: 0,
  })

  const handleChange = (prop: keyof IFormInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [prop]: event.target.value || event.target.checked,
    })
  }

  //---get coinpair---
  const { coin1, coin2 } = useGetCoinPair()
  //

  const onSellSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    console.log('values')
    e.preventDefault()
  }

  const onBuySubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    console.log('values')
    e.preventDefault()
  }

  return (
    <>
      <Grid container className={classes.orderContainer}>
        <Grid item xs={12} className={classes.orderContainer}>
          <form onSubmit={() => (props.select === 0 ? onBuySubmit : onSellSubmit)}>
            <div className={classes.textDiv1}>
              <Typography variant="body1" className={classes.fontColor1}>
                Avbl
              </Typography>
              <Typography variant="body1" className={classes.fontColor2}>
                -{props.select === 0 ? coin1 : coin2}
              </Typography>
            </div>
            <div className={classes.inputSide}>
              <Typography variant="body2" className={classes.fontColor1}>
                Stop
              </Typography>
              <input onChange={handleChange('stop')} type="number" className={classes.input} step="any" />
              <Typography variant="body2" className={classes.fontColor2}>
                {coin1}
              </Typography>
            </div>
            <div className={classes.inputSide}>
              <Typography variant="body2" className={classes.fontColor1}>
                Limit
              </Typography>
              <input onChange={handleChange('stopLimit')} type="number" className={classes.input} step="any" />
              <Typography variant="body2" className={classes.fontColor2}>
                {coin1}
              </Typography>
            </div>
            <div className={classes.inputSide}>
              <Typography variant="body2" className={classes.fontColor1}>
                Amount
              </Typography>
              <input onChange={handleChange('stopAmount')} type="number" className={classes.input} step="any" />
              <Typography variant="body2" className={classes.fontColor2}>
                {coin1}
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
              <input readOnly className={classes.input} />
              <Typography variant="body2" className={classes.fontColor2}>
                {coin1}
              </Typography>
            </div>
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
          </form>
        </Grid>
      </Grid>
    </>
  )
}

export default StopLimitRes
