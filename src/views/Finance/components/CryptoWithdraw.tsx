import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import SearchBar from 'material-ui-search-bar'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { CryptoType } from '../../../config/constants'
import { CryptoWithdrawHistory, GetCoinList } from '../../../hooks/finance'
import useStyles from '../styles'
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'

interface MyToken {
  userId: string
}

export default function CryptoWithdraw() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false)
  const [searched, setSearched] = useState<string>('')
  const [userId, setUserId] = useState('')
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [keyword, setKeyword] = useState('')
  const [sendData, setSendData] = useState('')
  const [unit, setUnit] = useState<string>('BTC')
  const [coins, setCoins] = useState([])
  const [count, setCount] = useState(0)

  const requestSearch: any = (searchedVal: string) => {
    setKeyword(searchedVal)
  }

  const cancelSearch = () => {
    setSearched('')
    requestSearch(searched)
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUnit(event.target.value as string)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setUserId(decoded.userId)
    }

    GetCoinList().then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }

      setCoins(res.data.Data)
    })
  }, [])

  useEffect(() => {
    const formData = new FormData()
    formData.append('user_id', userId)
    formData.append('symbol', unit)
    formData.append('type', CryptoType.CRYPTO_WITHDRAW)
    formData.append('keyword', sendData)
    formData.append('cur_page', page.toString())
    formData.append('per_page', rowsPerPage.toString())

    CryptoWithdrawHistory(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }

      setData(res.data.Data)
      setCount(res.data.TotalCnt)
    })
  }, [userId, page, rowsPerPage, sendData, unit])

  const handleSubmit = () => {
    setSendData(keyword)
  }

  return (
    <div>
      <Grid container>
        <Grid item sm={4} xs={12}>
          Withdrawal Currency:
        </Grid>
        <Grid item sm={8} xs={12} className={classes.break}>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={unit}
              onChange={handleChange}
              style={{ color: 'white' }}
            >
              {coins &&
                coins.map((coin, key) => (
                  <MenuItem value={coin} key={key} style={{ color: 'white' }}>
                    {coin}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={4} xs={12} style={{ alignSelf: 'end' }}>
          Withdraw Address:
        </Grid>
        <Grid item sm={8} xs={12}>
          <TextField margin="normal" id="quanty" label="Address" type="text" className={classes.textfld} fullWidth />
        </Grid>
        <Grid item sm={4} xs={12} style={{ alignSelf: 'end' }}>
          Withdraw Amount:
        </Grid>
        <Grid item sm={8} xs={12}>
          <TextField margin="normal" id="quanty" label="Enter Amount" type="number" className={classes.textfld} />
        </Grid>
        <Grid item sm={4} xs={12} style={{ alignSelf: 'end' }}>
          Fund Password:
        </Grid>
        <Grid item sm={8} xs={12}>
          <TextField margin="normal" id="password" type="password" className={classes.textfld} />
        </Grid>
        <Grid item sm={4} xs={12}></Grid>
        <Grid item sm={8} xs={12}>
          <Button variant="contained" className={classes.draw} fullWidth style={{ marginTop: '30px' }}>
            Withdraw Now
          </Button>
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
                <TableCell className={classes.thtitle}>Withdrawl Time</TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Coin
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Receiving address
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Quantity
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Withdraw fees
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Confirmed
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            {data ? (
              <TableBody>
                {data &&
                  data.map((row: any, key: any) => (
                    <TableRow key={key} hover>
                      <TableCell component="th" scope="row" className={classes.tbody}>
                        {row.time}
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {row.coin}
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {row.address}
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {row.amount}
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {row.fee}
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {row.method}
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {row.state}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell className={classes.nodata} align="center" colSpan={12}>
                    There is no crypto withdraw data
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
    </div>
  )
}
