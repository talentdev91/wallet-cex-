import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { Grid, Typography, FormControl, Tooltip } from '@material-ui/core'
// external
import { useStyles, PercentSlider } from '../Style'
import LoginComponent from 'components/LoginComponent'
import { marks } from 'config/constants'
import useFormData from 'hooks/useFormData'
// redux
import useGetCoinPair from 'hooks/useGetCoinPair'
import { useAppDispatch } from 'store/hooks'
import { getOrderOpens } from 'store/orderinfo'
import { showAlert } from 'store/alert'
// axios
import { BuyOrder, SellOrder, CoinBalance } from 'hooks/orderFormAxios'

interface MyToken {
  userId: string
}

interface IFormInput {
  limitBuyPrice: string
  limitBuyAmount: string
  limitSellPrice: string
  limitSellAmount: string
}

function valuetext(value: number) {
  return `${value}%`
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1
}

function Limit() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [loginState, setLoginState] = useState(false)
  const [coin1Balance, setCoin1Balance] = useState(0)
  const [coin2Balance, setCoin2Balance] = useState(0)
  const [buySliderValue, setBuySliderValue] = useState(0)
  const [sellSliderValue, setSellSliderValue] = useState(0)
  const hundredPercent = 100 //100%
  let [cost, setCost] = useState(0)
  const [decimalNumber, setDecimalNumber] = useState('')
  let decoded: any = []
  const [values, setValues] = useState<IFormInput>({
    limitBuyPrice: '',
    limitBuyAmount: '',
    limitSellPrice: '',
    limitSellAmount: '',
  })
  const { coin1, coin2 } = useGetCoinPair()

  //---------login state---------------------------
  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  useEffect(() => {
    if (localStorage.jwtToken) {
      setLoginState(true)
    }
  }, [])

  const handleChange = (prop: keyof IFormInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
    var data = event.target.value
    data = data.indexOf('.') >= 0 ? data.substr(0, data.indexOf('.')) + data.substr(data.indexOf('.'), 3) : data
    setValues({
      ...values,
      [prop]: data,
    })
  }

  const setDecimal = () => {
    setCost(0.1938)
    const coinPrice = cost.toString().split('.')[0]
    if (coinPrice !== undefined) {
      setDecimalNumber(coinPrice.length.toString())
    }
  }

  //---------get balance of coin pair----------------------------

  const getCoin1Balance = async () => {
    const formData = new FormData()
    formData.append('user_id', decoded?.userId)
    formData.append('symbol', coin1)

    CoinBalance(formData).then((res: any) => {
      setCoin1Balance(res?.data?.Balance)
    })
  }

  const getCoin2Balance = async () => {
    const formData = new FormData()
    formData.append('user_id', decoded?.userId)
    formData.append('symbol', coin2)

    CoinBalance(formData).then((res: any) => {
      setCoin2Balance(res?.data?.Balance)
    })
  }

  useEffect(() => {
    setDecimal()
    if (localStorage?.webSocketDisConnectState === 'connect' && loginState) {
      getCoin1Balance()
      getCoin2Balance()
    }
    // eslint-disable-next-line
  }, [coin1, coin2, localStorage?.webSocketDisConnectState, loginState])

  //-----control slider value---------------------------

  useEffect(() => {
    if (values.limitBuyPrice === null || values.limitBuyAmount === null) {
      setBuySliderValue(0)
    }
    setSellSliderValue((parseInt(values.limitSellAmount) * hundredPercent) / coin2Balance)
    setBuySliderValue(
      (parseFloat(values.limitBuyAmount) * hundredPercent) / (coin1Balance / parseInt(values.limitBuyPrice)),
    )
    // eslint-disable-next-line
  }, [values.limitSellAmount, values.limitBuyPrice, values.limitBuyAmount])

  const handleBuySlider = (event: any, newValue: number | number[]) => {
    const percent = newValue as any
    const amount = ((coin1Balance / parseFloat(values.limitBuyPrice)) * percent) / 100

    setValues((value) => {
      return { ...value, limitBuyAmount: amount.toFixed(2).toString() }
    })
  }

  const handleSellSlider = (event: any, newValue: number | number[]) => {
    const percent = newValue as number
    const amount = (coin2Balance * percent) / hundredPercent

    setValues((value) => {
      return { ...value, limitSellAmount: amount.toFixed(2).toString() }
    })
  }
  //-------------------------post Buy, Sell request-------------
  let coinPairData = `${coin2}/${coin1}`
  const { openOrderFormData, orderHistoryFormData, userTradeHistoryFormData } = useFormData()

  const onBuySubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    var formData = new FormData()
    formData.append('price', values.limitBuyPrice)
    formData.append('amount', values.limitBuyAmount)
    formData.append('pair', coinPairData)
    formData.append('user_id', decoded.userId)

    if (localStorage.webSocketDisConnectState === 'connect') {
      BuyOrder(formData).then((res: any) => {
        if (res === undefined) {
          dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
          return
        }
        if (res.data.Success) {
          dispatch(showAlert({ message: 'Buy success', severity: 'success' }))
          setBuySliderValue(0)

          dispatch(getOrderOpens(openOrderFormData))
        } else {
          dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
          setBuySliderValue(0)
        }

        setValues((value) => {
          return { ...value, limitBuyPrice: '' }
        })
        setValues((value) => {
          return { ...value, limitBuyAmount: '' }
        })
      })
    }
  }

  const onSellSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    var formData = new FormData()
    formData.append('price', values?.limitSellPrice)
    formData.append('amount', values?.limitSellAmount)
    formData.append('pair', coinPairData)
    formData.append('user_id', decoded?.userId)

    if (localStorage.webSocketDisConnectState === 'connect') {
      SellOrder(formData).then((res: any) => {
        if (res === undefined) {
          dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
          return
        }
        if (res.data.Success) {
          dispatch(showAlert({ message: 'Sell success', severity: 'success' }))
          setSellSliderValue(0)

          dispatch(getOrderOpens(openOrderFormData))
        } else {
          dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
          setSellSliderValue(0)
        }

        setValues((value) => {
          return { ...value, limitSellAmount: '' }
        })
        setValues((value) => {
          return { ...value, limitSellPrice: '' }
        })
      })
    }
  }
  //-------------------------------------------------------------------------------------

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
                {coin1Balance?.toFixed(2)}-{coin1}
              </Typography>
            </div>
            <FormControl className={classes.formDiv}>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Price
                </Typography>
                <input
                  type="number"
                  onChange={handleChange('limitBuyPrice')}
                  className={classes.input}
                  value={values.limitBuyPrice}
                />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin1}
                </Typography>
              </div>
            </FormControl>
            <Tooltip
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Market order is immediately matched to the best available market price."
              arrow
            >
              <FormControl className={classes.formDiv}>
                <div className={classes.inputSide}>
                  <Typography variant="body2" className={classes.fontColor1}>
                    Amount
                  </Typography>
                  <input
                    type="number"
                    onChange={handleChange('limitBuyAmount')}
                    className={classes.input}
                    value={values.limitBuyAmount}
                  />
                  <Typography variant="body2" className={classes.fontColor2}>
                    {coin2}
                  </Typography>
                </div>
              </FormControl>
            </Tooltip>
            <PercentSlider
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-restrict"
              onChange={handleBuySlider}
              marks={marks}
              value={buySliderValue}
            />

            <div>
              {loginState === true ? (
                <>
                  <div className={classes.inputSide}>
                    <Typography variant="body2" className={classes.fontColor1}>
                      Total
                    </Typography>
                    <input
                      value={
                        values.limitBuyPrice === '' || values.limitBuyAmount === ''
                          ? ''
                          : (parseFloat(values.limitBuyPrice) * parseFloat(values.limitBuyAmount)).toFixed(3)
                      }
                      step={decimalNumber}
                      readOnly
                      className={classes.input}
                    />
                    <Typography variant="body2" className={classes.fontColor2}>
                      {coin1}
                    </Typography>
                  </div>
                  <button type="submit" className={classes.buyText}>
                    Buy {coin2}
                  </button>
                </>
              ) : (
                <LoginComponent />
              )}
            </div>
          </form>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.formDiv}>
          <form onSubmit={onSellSubmit}>
            <div className={classes.textDiv}>
              <Typography variant="body1" className={classes.fontColor1}>
                Avbl
              </Typography>
              <Typography variant="body1" className={classes.fontColor2}>
                {coin2Balance?.toFixed(2)}-{coin2}
              </Typography>
            </div>
            <FormControl className={classes.formDiv}>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Price
                </Typography>
                <input
                  type="number"
                  onChange={handleChange('limitSellPrice')}
                  className={classes.input}
                  step={decimalNumber}
                  value={values.limitSellPrice}
                />
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
                <input
                  type="number"
                  onChange={handleChange('limitSellAmount')}
                  className={classes.input}
                  step={decimalNumber}
                  value={values.limitSellAmount}
                />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin2}
                </Typography>
              </div>
            </FormControl>
            <PercentSlider
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-restrict"
              onChange={handleSellSlider}
              marks={marks}
              value={sellSliderValue}
            />
            <div>
              {loginState === true ? (
                <>
                  <div className={classes.inputSide}>
                    <Typography variant="body2" className={classes.fontColor1}>
                      Total
                    </Typography>
                    <input
                      value={
                        values.limitSellPrice === '' || values.limitSellAmount === ''
                          ? ''
                          : (parseFloat(values.limitSellPrice) * parseFloat(values.limitSellAmount)).toFixed(3)
                      }
                      step={decimalNumber}
                      readOnly
                      className={classes.input}
                    />
                    <Typography variant="body2" className={classes.fontColor2}>
                      {coin1}
                    </Typography>
                  </div>
                  <button type="submit" className={classes.sellText}>
                    Sell {coin2}
                  </button>
                </>
              ) : (
                <LoginComponent />
              )}
            </div>
          </form>
        </Grid>
      </Grid>
    </>
  )
}

export default Limit
