import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import QRCode from 'react-qr-code'
import Select from '@material-ui/core/Select'
import SearchBar from 'material-ui-search-bar'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import copy from 'clipboard-copy'
import { useAppSelector } from '../../../store/hooks'
import { selectBalance } from '../../../store/finance/selectors'
import { CryptoType } from '../../../config/constants'
import { CryptoDepositHistory, GetCoinList } from '../../../hooks/finance'
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'

import useStyles from '../styles'

interface MyToken {
  userId: string
}

export default function FiatDeposit(props: any) {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [unit, setUnit] = useState<string>('BTC')
  const [open, setOpen] = useState(false)
  const [searched, setSearched] = useState<string>('')
  const [userId, setUserId] = useState('')
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [coins, setCoins] = useState([])
  const [balance, setBalance] = useState('0')
  const [keyword, setKeyword] = useState('')
  const [sendData, setSendData] = useState('')
  const [copyAddress, setcopyAddress] = useState(true)
  const [address, setAddress] = useState('')
  const [count, setCount] = useState(0)
  const balanceList: any = useAppSelector(selectBalance)
  const balances: [] = balanceList.Balance
  const addresses: any = balanceList.Address

  const requestSearch: any = (searchedVal: string) => {
    setKeyword(searchedVal)
  }

  const cancelSearch = () => {
    setSearched('')
    requestSearch(searched)
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUnit(event.target.value as string)
    setBalance('0')

    if (balances) {
      for (let i = 0; i < balances.length; i++) {
        var temp: any = balances[i]
        if (temp.ChainName === event.target.value) {
          setBalance(temp.Amount)
          break
        }
      }
    }
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    GetCoinList().then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }

      setCoins(res.data.Data)
    })
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setUserId(decoded.userId)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setcopyAddress(true)
    }, 400)
    return () => clearTimeout(timer)
  }, [copyAddress])

  useEffect(() => {
    setAddress(unit)
    const formData = new FormData()
    formData.append('user_id', userId)
    formData.append('symbol', unit)
    formData.append('type', CryptoType.CRYPTO_DEPOSIT)
    formData.append('keyword', sendData)
    formData.append('cur_page', page.toString())
    formData.append('per_page', rowsPerPage.toString())

    CryptoDepositHistory(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }

      setData(res.data.Data)
      setCount(res.data.TotalCnt)
    })
  }, [unit, userId, sendData, page, rowsPerPage])

  const handleSubmit = () => {
    setSendData(keyword)
  }

  const handleCopyCode = (props: string) => {
    copy(props)
    setcopyAddress(!copyAddress)
  }

  return (
    <div>
      <Grid container>
        <Grid item sm={5} xs={12}>
          <Paper className={classes.cdeposit} variant="outlined">
            Crypto Deposit
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-controlled-open-select-label"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={unit}
                onChange={handleChange}
                style={{ color: 'white', marginTop: '27px' }}
              >
                {coins &&
                  coins.map((coin, key) => (
                    <MenuItem value={coin} key={key} style={{ color: 'white' }}>
                      {coin}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item sm={7} xs={12} className={classes.cbalgrd}>
          <Paper className={classes.cbalance} variant="outlined">
            {balance}
            <br />
            <span>Balance</span>
          </Paper>
        </Grid>
      </Grid>
      <Paper className={classes.caddress} variant="outlined">
        <Grid container style={{ width: '100%' }}>
          <Grid item sm={3} xs={12} style={{ textAlignLast: 'center', marginTop: '12px' }}>
            {!address || !addresses || addresses[address] === '' || addresses[address] === undefined ? (
              ''
            ) : (
              <QRCode value={addresses[address]} size={100} />
            )}
          </Grid>
          <Grid item sm={9} xs={12} style={{ alignSelf: 'center' }}>
            <span style={{ wordBreak: 'break-word' }}>
              {!address || !addresses || addresses[address] === '' || addresses[address] === undefined ? (
                'There is no address'
              ) : (
                <span>
                  {addresses[address]}&nbsp;
                  <span onClick={() => handleCopyCode(addresses[address])} style={{ fontSize: '16px' }}>
                    {(copyAddress && <i className="far fa-copy"></i>) || (
                      <span>
                        <i className="fa fa-check-circle mr-1"></i>
                      </span>
                    )}
                  </span>
                </span>
              )}
            </span>
            <br />
            <span style={{ fontSize: '12px' }}>
              Here is your wallet address, please send your {unit} to this address:
            </span>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.cdephis} variant="outlined">
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
                <TableCell className={classes.thtitle}>Block Number</TableCell>
                <TableCell align="left" className={classes.thtitle}>
                  Txn Hash
                </TableCell>
                <TableCell align="center" className={classes.thtitle}>
                  Time
                </TableCell>
                <TableCell align="center" className={classes.thtitle}>
                  Coinname
                </TableCell>
                <TableCell align="left" className={classes.thtitle}>
                  From
                </TableCell>
                <TableCell align="left" className={classes.thtitle}>
                  To
                </TableCell>
                <TableCell align="right" className={classes.thtitle}>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            {data ? (
              <TableBody>
                {data &&
                  data.map((row: any, key) => (
                    <TableRow key={key} hover>
                      <TableCell className={classes.tbody}>{row.BlockNumber}</TableCell>
                      <TableCell align="center" className={classes.tbody}>
                        <div className={classes.tbOverflow}>{row.TxHash}</div>
                      </TableCell>
                      <TableCell align="center" className={classes.tbody}>
                        {new Date(row.Timestamp * 1000).toLocaleString('en-GB')}
                      </TableCell>
                      <TableCell align="center" className={classes.tbody}>
                        {row.Symbol}
                      </TableCell>
                      <TableCell align="center" className={classes.tbody}>
                        <div className={classes.tbOverflow}>{row.From}</div>
                      </TableCell>
                      <TableCell align="center" className={classes.tbody}>
                        <div className={classes.tbOverflow}>{row.To}</div>
                      </TableCell>
                      <TableCell align="right" className={classes.tbody}>
                        {row.FloatValue}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell className={classes.nodata} align="center" colSpan={12}>
                    There is no crypto deposit data
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
      </Paper>
    </div>
  )
}
