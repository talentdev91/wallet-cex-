/** @format */

import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TablePagination from '@material-ui/core/TablePagination'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import SearchBar from 'material-ui-search-bar'
import Deposit from './deposit'
import Withdraw from './withdraw'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getBalance } from '../../../store/finance'
import { selectBalance } from '../../../store/finance/selectors'

interface Data {
  ChainName: string
  Amount: string
  Order: string
}
interface MyToken {
  email: string
  userId: string
}

type Order = 'asc' | 'desc'

interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const headCells: HeadCell[] = [
  {
    id: 'ChainName',
    numeric: false,
    disablePadding: true,
    label: 'Coin',
  },
  { id: 'Amount', numeric: true, disablePadding: false, label: 'Balance' },
]

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  order: Order
  orderBy: string
  rowCount: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, order, orderBy, onRequestSort } = props
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tbHead} width={100}>
          Address
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            className={classes.tbHead}
            style={{ textAlign: 'right' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell className={classes.tbHead} style={{ textAlign: 'right' }} width={100}>
          Order
        </TableCell>
        <TableCell className={classes.tbHead} width={60}>
          Deposit
        </TableCell>
        <TableCell className={classes.tbHead} width={60}>
          Withdraw
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '8px',
      // color: theme.palette.primary.contrastText,
    },
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.5em',
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#2A2D35',
      },
    },

    container: {
      fontSize: '12px',
      backgroundColor: 'transparent',
    },
    tbHead: {
      backgroundColor: 'transparent',
      // backgroundColor: theme.palette.primary.main,
      borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
      color: theme.palette.primary.contrastText,
      padding: '5px 15px',
      fontWeight: 400,
      fontSize: '12px',
    },
    search: {
      width: '200px',
      float: 'right',
      marginBottom: '15px',
      marginTop: '15px',
      backgroundColor: theme.palette.primary.main,
    },
    table: {
      // backgroundColor: theme.palette.primary.main,
      backgroundColor: 'transparent',

      width: '100%',
      paddingRight: '20px',
      paddingLeft: '20px',
      borderRadius: '20px',
    },
    nodata: {
      borderBottom: 'none',
      fontSize: '13px',
      marginTop: '15px',
      marginBottom: '15px',
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      width: 1,
    },
    avusd: {
      backgroundColor: '#29b6f6',
      borderColor: '#29b6f6',
      display: 'flex',
      color: '#fff',
      marginBottom: '20px',
      padding: '20px',
      borderRadius: '7px',
      boxShadow: '0 1px 1px rgb(0 0 0 / 5%)',
      lineHeight: 1.54,
    },
    orderusd: {
      backgroundColor: '#ef5350',
      borderColor: '#ef5350',
      display: 'flex',
      color: '#fff',
      marginBottom: '20px',
      padding: '20px',
      borderRadius: '7px',
      boxShadow: '0 1px 1px rgb(0 0 0 / 5%)',
      lineHeight: 1.54,
    },
    totalusd: {
      backgroundColor: '#66bb6a',
      borderColor: '#66bb6a',
      display: 'flex',
      color: '#fff',
      marginBottom: '20px',
      padding: '20px',
      borderRadius: '7px',
      boxShadow: '0 1px 1px rgb(0 0 0 / 5%)',
      lineHeight: 1.54,
    },
    mainTitle: {
      marginLeft: '15px',
      marginTop: '24px',
      marginBottom: '20px',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#4a4f55'}`,
    },
  }),
)

export default function Balance() {
  const classes = useStyles()

  const [order, setOrder] = useState<Order>('asc')
  const [searched, setSearched] = useState<string>('')
  const [token, setToken] = useState('')
  const [rows, setRows] = useState([])
  const [address, setAddress] = useState('')
  const [ordered, setOrdered] = useState('')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('ChainName')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const dispatch = useAppDispatch()
  const balanceList: any = useAppSelector(selectBalance)
  const balances: [] = balanceList.Balance

  const cancelSearch = () => {
    setSearched('')
    requestSearch(searched)
  }

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      console.log(decoded.userId)
      setToken(decoded.userId)
    }
  }, [])

  useEffect(() => {
    let tokenFormData = new FormData()
    tokenFormData.append('user_id', token)

    dispatch(getBalance(tokenFormData))
  }, [dispatch, token])

  useEffect(() => {
    const addresses: any = balanceList.Address
    const orders: any = balanceList.Ordered

    balances === undefined || balances === null ? setRows([]) : setRows(balances)
    setOrdered(orders)
    setAddress(addresses)
    // eslint-disable-next-line
  }, [balances])

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const requestSearch = (searchedVal: string) => {
    if (balances) {
      const filteredRows: any = balances.filter((row: any) => {
        return row.ChainName.toLowerCase().includes(searchedVal.toLowerCase())
      })
      setRows(filteredRows)
    }
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <div>
      <CssBaseline />
      <Paper className={classes.root} variant="outlined">
        <Box m={1} mb={0}>
          <Typography className={classes.mainTitle} variant="h6">
            <Grid container>
              <Grid item lg={4} md={6} sm={12} xs={12} style={{ paddingRight: '15px' }}>
                <div className={classes.avusd}>
                  <div>
                    USD {balanceList.UsdBalance}
                    <br />
                    <span style={{ fontSize: '11px' }}>AVAILABLE USD</span>
                  </div>
                  <div
                    style={{
                      marginLeft: 'auto',
                      fontSize: '40px',
                      alignSelf: 'center',
                    }}
                  >
                    <i className="fas fa-hand-holding-usd"></i>
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12} style={{ paddingRight: '15px' }}>
                <div className={classes.orderusd}>
                  <div>
                    USD {balanceList.UsdOrdered}
                    <br />
                    <span style={{ fontSize: '11px' }}>ON ORDER USD</span>
                  </div>
                  <div
                    style={{
                      marginLeft: 'auto',
                      fontSize: '40px',
                      alignSelf: 'center',
                    }}
                  >
                    <i className="far fa-money-bill-alt"></i>
                  </div>
                </div>
              </Grid>
              <Grid item md={12} lg={4} sm={12} xs={12} style={{ paddingRight: '15px' }}>
                <div className={classes.totalusd}>
                  <div
                    style={{
                      marginRight: 'auto',
                      fontSize: '40px',
                      alignSelf: 'center',
                    }}
                  >
                    <i className="far fa-money-bill-alt"></i>
                  </div>
                  <div>
                    USD {balanceList.UsdTrade}
                    <br />
                    <span style={{ fontSize: '11px' }}>ESTIMATED TOTAL ASSETS:</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Typography>
        </Box>
        <Box pt={5} pl={2} pr={2} pb={4} style={{ textAlign: 'left' }}>
          <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            className={classes.search}
          />
          <TableContainer className={classes.container}>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={'medium'}
              stickyHeader
              aria-label="sticky table"
            >
              <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              {rows ? (
                <TableBody>
                  {rows &&
                    stableSort(rows, getComparator(order, orderBy)).map((balance: any, key: any) => {
                      return (
                        <TableRow hover key={key}>
                          <TableCell
                            component="th"
                            scope="row"
                            style={{
                              fontSize: '12px',
                              borderBottom: 'none',
                            }}
                            width={330}
                          >
                            {address[balance.ChainName] === undefined || address[balance.ChainName] === null
                              ? '-'
                              : address[balance.ChainName]}
                          </TableCell>
                          <TableCell style={{ fontSize: '12px', borderBottom: 'none' }}>{balance.ChainName}</TableCell>
                          <TableCell
                            style={{
                              fontSize: '12px',
                              borderBottom: 'none',
                              textAlign: 'right',
                            }}
                          >
                            {balance.Amount}
                          </TableCell>
                          <TableCell
                            style={{
                              fontSize: '12px',
                              borderBottom: 'none',
                              textAlign: 'right',
                            }}
                          >
                            {ordered[balance.ChainName] === undefined || ordered[balance.ChainName] === null
                              ? ''
                              : ordered[balance.ChainName]}
                          </TableCell>
                          <TableCell style={{ borderBottom: 'none' }}>
                            <Deposit address={address[balance.ChainName]} />
                          </TableCell>
                          <TableCell style={{ borderBottom: 'none' }}>
                            <Withdraw />
                          </TableCell>
                        </TableRow>
                      )
                    })}
                </TableBody>
              ) : (
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.nodata} align="center" colSpan={12}>
                      There is no balance
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Paper>
    </div>
  )
}
