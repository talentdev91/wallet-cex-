import React, { useEffect, useState } from 'react'
import { History, Location } from 'history'
import jwt_decode from 'jwt-decode'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import SearchBar from 'material-ui-search-bar'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Chip from '@material-ui/core/Chip'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { PayPalButton } from 'react-paypal-button-v2'
import { Snackbar } from '@material-ui/core'
import useStyles from '../styles'
import { PAYPAL_CLIENT_ID } from '../../../config/constants'
import { FiatType } from '../../../config/constants'
import { FiatDepositHistory, ConfirmFiatDeposit } from '../../../hooks/finance'
import { showAlert } from '../../../store/alert'
import { useAppDispatch } from '../../../store/hooks'

interface MyToken {
  userId: string
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function FiatDeposit(props: any) {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const { history } = props.props
  const [quanty, setQuanty] = useState('')
  const [data, setData] = useState([])
  const [searched, setSearched] = useState<string>('')
  const [token, setToken] = useState('')
  const [success, setSuccess] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [alert, setAlert] = useState('')
  const [msg, setMsg] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [sendData, setSendData] = useState('')
  const [count, setCount] = useState(0)

  const handleCloseNotification = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenNotification(false)
  }

  const requestSearch: any = (searchedVal: string) => {
    setKeyword(searchedVal)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const cancelSearch = () => {
    setSearched('')
    requestSearch(searched)
  }

  const handleChange1 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuanty(event.target.value as string)
  }

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setToken(decoded.userId)
    }
  }, [])

  useEffect(() => {
    if (token !== '') {
      const formData = new FormData()
      formData.append('user_id', token)
      formData.append('type', FiatType.FIAT_DEPOSIT)
      formData.append('keyword', sendData)
      formData.append('cur_page', page.toString())
      formData.append('per_page', rowsPerPage.toString())

      FiatDepositHistory(formData).then((res: any) => {
        if (res === undefined) {
          dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
          return
        }

        if (res.data.Success) {
          setData(res.data.Data)
          setCount(res.data.TotalCnt)
        } else {
          localStorage.removeItem('jwtToken')
          history.push('/login')
          dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
        }
      })
    }
  }, [success, token, sendData, page, rowsPerPage])

  const paypalSuccess = async (details: any, data: any) => {
    // window.alert('Transaction completed by ' + details.payer.name.given_name)

    const formData = new FormData()
    formData.append('user_id', token)
    formData.append('order_id', data.orderID)
    ConfirmFiatDeposit(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }

      setSuccess(res.data.Success)
    })
  }

  const handleSubmit = () => {
    setSendData(keyword)
  }

  return (
    <div>
      <Grid container style={{ justifyContent: 'center' }}>
        <Grid item sm={3} style={{ alignSelf: 'end' }}>
          Recharge amount(USD):
        </Grid>
        <Grid item sm={5}>
          <TextField
            margin="normal"
            id="quanty"
            type="number"
            fullWidth
            className={classes.textfld}
            value={quanty}
            onChange={handleChange1}
          />
        </Grid>
        <Grid item sm={8} xs={12} style={{ marginTop: '40px' }}>
          <PayPalButton
            amount={quanty}
            onSuccess={paypalSuccess}
            catchError={(err: object) => {
              console.log('failed')
            }}
            onError={(err: object) => {
              console.log('failed')
            }}
            options={{
              clientId: PAYPAL_CLIENT_ID.clientId,
            }}
          />
        </Grid>
      </Grid>
      <div>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
          onRequestSearch={() => handleSubmit()}
          className={classes.search}
        />
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className={classes.thead}>
                <TableCell className={classes.thtitle}>Txn ID</TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Amount
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Confirmed
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Fee
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Status
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Recharge time
                </TableCell>
              </TableRow>
            </TableHead>
            {data ? (
              <TableBody>
                {data &&
                  data.map((row: any, key) => (
                    <TableRow key={key} hover>
                      <TableCell component="th" scope="row" className={classes.tbody}>
                        {row.PaymentId}
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {row.Amount}
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {row.NetAmount}
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {row.Fee}
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {row.Status === 'SUCCESS' ? (
                          <Chip
                            size="small"
                            label="Success"
                            component="a"
                            style={{
                              backgroundColor: '#61309b',
                              fontSize: '12px',
                              width: '82px',
                            }}
                            clickable
                          />
                        ) : row.Status === 'PROCESSING' ? (
                          <Chip
                            size="small"
                            label="Processing"
                            component="a"
                            style={{
                              backgroundColor: '#1d4099',
                              fontSize: '12px',
                              width: '82px',
                            }}
                            clickable
                          />
                        ) : row.Status === 'PENDING' ? (
                          <Chip
                            size="small"
                            label="Pending"
                            component="a"
                            style={{
                              backgroundColor: '#c5ae28',
                              fontSize: '12px',
                              width: '82px',
                            }}
                            clickable
                          />
                        ) : row.Status === 'COMPLETED' ? (
                          <Chip
                            size="small"
                            label="Completed"
                            component="a"
                            style={{
                              backgroundColor: '#4aab1f',
                              fontSize: '12px',
                              width: '82px',
                            }}
                            clickable
                          />
                        ) : (
                          <Chip
                            size="small"
                            label="Failed"
                            component="a"
                            style={{
                              backgroundColor: '#c13948',
                              fontSize: '12px',
                              width: '82px',
                            }}
                            clickable
                          />
                        )}
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {new Date(row.Timestamp * 1000).toLocaleString('en-GB')}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell className={classes.nodata} align="center" colSpan={12}>
                    There is no fiat deposit data
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      {alert.length === 0 ? (
        ''
      ) : (
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={handleCloseNotification}
          open={openNotification}
          autoHideDuration={3000}
        >
          <Alert severity={msg ? 'success' : 'error'}>{alert}</Alert>
        </Snackbar>
      )}
    </div>
  )
}
