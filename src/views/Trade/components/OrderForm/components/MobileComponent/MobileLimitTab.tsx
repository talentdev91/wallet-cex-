import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { Grid, Typography } from '@material-ui/core'
// external
import { useStyles, PercentSlider } from '../../Style'
import LoginComponent from 'components/LoginComponent'
import { marks } from 'config/constants'
import { BuyOrder, SellOrder, CoinBalance } from 'hooks/orderFormAxios'
import useFormData from 'hooks/useFormData'
// redux
import useGetCoinPair from 'hooks/useGetCoinPair'
import { useAppDispatch } from 'store/hooks'
import { getOrderOpens } from 'store/orderinfo'
import { showAlert } from 'store/alert'

interface IFormInput {
  limitPrice: string
  limitAmount: string
}

interface MyToken {
  userId: string
}

function valuetext(value: number) {
  return `${value}%`
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1
}

function LimitRes(props: any) {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const { openOrderFormData, orderHistoryFormData, userTradeHistoryFormData } = useFormData()

  const { coin1, coin2 } = useGetCoinPair()
  const [coin1Balance, setCoin1Balance] = useState(0)
  const [coin2Balance, setCoin2Balance] = useState(0)
  const [buySliderValue, setBuySliderValue] = useState(0)
  const [sellSliderValue, setSellSliderValue] = useState(0)
  const [loginState, setLoginState] = useState(false)
  let decoded: any = []
  const [values, setValues] = React.useState<IFormInput>({
    limitPrice: '',
    limitAmount: '',
  })

  //---------login state---------------------------
  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  useEffect(() => {
    if (localStorage.jwtToken) {
      setLoginState(true)
    }
  }, [])

  //
  const handleChange = (prop: keyof IFormInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
    var data = event.target.value
    data = data.indexOf('.') >= 0 ? data.substr(0, data.indexOf('.')) + data.substr(data.indexOf('.'), 3) : data
    setValues({
      ...values,
      [prop]: data,
    })
  }

  let [cost, setCost] = useState(0)
  const [decimalNumber, setDecimalNumber] = useState('')

  const setDecimal = () => {
    setCost(0.1938)
    const a = cost.toString().split('.')[0]
    if (a !== undefined) {
      setDecimalNumber(a?.length?.toString())
    }
  }

  useEffect(() => {
    if (values.limitPrice === null || values.limitAmount === null) {
      setBuySliderValue(0)
    }
    setSellSliderValue((parseInt(values.limitAmount) * 100) / coin2Balance)
    setBuySliderValue((parseFloat(values.limitAmount) * 100) / (coin1Balance / parseInt(values.limitPrice)))
  }, [values.limitAmount, coin1Balance, coin2Balance, values.limitPrice, values.limitAmount])

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
  }, [localStorage?.webSocketDisConnectState, loginState, coin1, coin2])

  const handleBuySlider = (event: any, newValue: number | number[]) => {
    const percent = newValue as any
    const amount = ((coin1Balance / parseFloat(values.limitPrice)) * percent) / 100
    setValues((value) => {
      return { ...value, limitAmount: amount.toFixed(2).toString() }
    })
  }

  const handleSellSlider = (event: any, newValue: number | number[]) => {
    const percent = newValue as number
    const amount = (coin2Balance * percent) / 100
    setValues((value) => {
      return { ...value, limitAmount: amount.toFixed(2).toString() }
    })
  }

  //-------------------------post Buy, Sell request-------------
  let coinPairData = `${coin2}/${coin1}`

  const onSellSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    var formData = new FormData()
    formData.append('price', values.limitPrice)
    formData.append('amount', values.limitAmount)
    formData.append('pair', coinPairData)
    formData.append('user_id', decoded?.userId)

    if (
      values.limitPrice !== '0' ||
      values.limitAmount !== '0' ||
      values.limitPrice !== null ||
      values.limitAmount !== null
    ) {
      if (localStorage.webSocketDisConnectState === 'connect') {
        SellOrder(formData).then((res: any) => {
          if (res === undefined) {
            dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
            return
          }
          if (res.data.Success) {
            dispatch(showAlert({ message: 'Sell success', severity: 'success' }))

            dispatch(getOrderOpens(openOrderFormData))
          } else {
            dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
          }
        })

        values.limitPrice = ''
        values.limitAmount = ''
        setSellSliderValue(0)
      }
    }
  }

  const onBuySubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    var formData = new FormData()
    formData.append('price', values.limitPrice)
    formData.append('amount', values.limitAmount)
    formData.append('pair', coinPairData)
    formData.append('user_id', decoded?.userId)

    if (
      values.limitPrice !== '0' ||
      values.limitAmount !== '0' ||
      values.limitPrice !== null ||
      values.limitAmount !== null
    ) {
      if (localStorage.webSocketDisConnectState === 'connect') {
        BuyOrder(formData).then((res: any) => {
          if (res === undefined) {
            dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
            return
          }
          if (res.data.Success) {
            dispatch(showAlert({ message: 'Buy success', severity: 'success' }))

            dispatch(getOrderOpens(openOrderFormData))
          } else {
            dispatch(showAlert({ message: res?.data?.Error?.Msg, severity: 'error' }))
          }
        })
        values.limitPrice = ''
        values.limitAmount = ''
        setBuySliderValue(0)
      }
    }
  }

  return (
    <>
      <Grid container className={classes.orderContainer}>
        <Grid item xs={12} className={classes.orderContainer}>
          <form onSubmit={props.select === 0 ? onBuySubmit : onSellSubmit} className={classes.styledForm}>
            <div>
              <div className={classes.textDiv1}>
                <Typography variant="body1" className={classes.fontColor1}>
                  Avbl
                </Typography>
                <Typography variant="body1" className={classes.fontColor2}>
                  {props.select === 0 ? coin1Balance?.toFixed(3) : coin2Balance?.toFixed(3)}-
                  {props.select === 0 ? coin1 : coin2}
                </Typography>
              </div>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Price
                </Typography>
                <input
                  onChange={handleChange('limitPrice')}
                  type="number"
                  className={classes.input}
                  value={values.limitPrice}
                  step="any"
                />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin1}
                </Typography>
              </div>
              <div className={classes.inputSide}>
                <Typography variant="body2" className={classes.fontColor1}>
                  Amount
                </Typography>
                <input
                  onChange={handleChange('limitAmount')}
                  type="number"
                  className={classes.input}
                  value={values.limitAmount}
                  step="any"
                />
                <Typography variant="body2" className={classes.fontColor2}>
                  {coin2}
                </Typography>
              </div>
            </div>
            <div>
              <PercentSlider
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                onChange={props.select === 0 ? handleBuySlider : handleSellSlider}
                value={props.select === 0 ? buySliderValue : sellSliderValue}
                // valueLabelDisplay="auto"
                marks={marks}
              />
            </div>

            <div>
              {loginState === false ? (
                <LoginComponent />
              ) : props.select === 0 ? (
                <>
                  <div className={classes.inputSide}>
                    <Typography variant="body2" className={classes.fontColor1}>
                      Total
                    </Typography>
                    <input
                      value={
                        values.limitPrice === '' || values.limitAmount === ''
                          ? ''
                          : (parseFloat(values.limitPrice) * parseFloat(values.limitAmount)).toFixed(3)
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
                <>
                  <div className={classes.inputSide}>
                    <Typography variant="body2" className={classes.fontColor1}>
                      Total
                    </Typography>
                    <input
                      value={
                        values.limitPrice === '' || values.limitAmount === ''
                          ? ''
                          : (parseFloat(values.limitPrice) * parseFloat(values.limitAmount)).toFixed(3)
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
              )}
            </div>
          </form>
        </Grid>
      </Grid>
    </>
  )
}

export default LimitRes
