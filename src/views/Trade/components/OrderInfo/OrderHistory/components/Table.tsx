/** @format */

import React from 'react'
//material-ui components
import {
  TableBody,
  TableRow,
  Paper,
  Table,
  TableContainer,
  Typography,
  MenuItem,
  Menu,
  TableCell,
} from '@material-ui/core'

//utils
import { dateConvert } from '../../../../../../common/utils'
import { OrderType } from '../../../../../../config/constants'
//style

import { StyledTableCell, StyledTableHead, useStyles } from './styles'
import DownIcon from '../../../../../../assets/image/down.svg'
import { OrderStatus } from '../../../../../../config/constants'
import { getOrderHistory } from '../../../../../../store/orderinfo'
import { useAppDispatch } from '../../../../../../store/hooks'

import jwt_decode from 'jwt-decode'

interface MyToken {
  userId: string
}

interface CustomizedTableProps {
  rows: any
  columns: string[]
  status: any
  page: number
  rowsPerPage: number
  totalCnt: number
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({ rows, columns, status, totalCnt, rowsPerPage, page }) => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const decoded = jwt_decode<MyToken>(localStorage.jwtToken)

  const [anchorEll, setAnchorEll] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEll)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEll(event.currentTarget)
  }
  const handleEClose = () => {
    setAnchorEll(null)
  }

  const [down, setDown] = React.useState(0)
  const handleGetMethod = (getMethod: number) => {
    setDown(getMethod)

    const formData = new FormData()
    formData.append('user_id', decoded.userId)
    formData.append('start_date', getMethod.toString())
    formData.append('end_date', (Date.now() / 1000).toString())
    formData.append('order_status', down.toString())

    dispatch(getOrderHistory(formData))
    handleEClose()
  }

  return (
    <Paper elevation={3} className={classes.container}>
      <TableContainer component={Paper} style={{ maxHeight: '156px', width: '100%', boxShadow: 'none' }}>
        <Table stickyHeader>
          <StyledTableHead>
            <TableRow>
              <StyledTableCell style={{ minWidth: '116px' }}>Date</StyledTableCell>
              {columns.map((column: any, key: any) => {
                return (
                  <StyledTableCell style={{ minWidth: '80px' }} key={key}>
                    {column}
                  </StyledTableCell>
                )
              })}
              <StyledTableCell style={{ minWidth: '108px' }}>Trigger Conditions</StyledTableCell>
              <StyledTableCell style={{ minWidth: '90px' }}>
                <span onClick={handleClick}>
                  {down === 0 ? 'All' : down === 2 ? 'Filled' : 'Canceled'}
                  <img src={DownIcon} alt="icon" className={classes.down} />
                </span>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEll}
                  keepMounted
                  open={open}
                  onClose={handleEClose}
                  MenuListProps={{ disablePadding: true }}
                >
                  <MenuItem onClick={() => handleGetMethod(OrderStatus.STATUS_ALL)}>All</MenuItem>
                  <MenuItem onClick={() => handleGetMethod(OrderStatus.STATUS_ORDER_FINISHED)}>Filled</MenuItem>
                  <MenuItem onClick={() => handleGetMethod(OrderStatus.STATUS_ALL)}>Partially Filled</MenuItem>
                  <MenuItem onClick={() => handleGetMethod(OrderStatus.STATUS_ORDER_CANCELLED)}>Canceled</MenuItem>
                  <MenuItem onClick={() => handleGetMethod(OrderStatus.STATUS_ALL)}>Expired</MenuItem>
                </Menu>
              </StyledTableCell>
            </TableRow>
          </StyledTableHead>
          {!status.status && rows.length > 0 ? (
            <TableBody>
              {rows.map((row: any, key: any) => (
                <TableRow className={row.status === 3 ? classes.row : ''} key={key}>
                  <StyledTableCell>
                    <Typography
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        color: '#848e9c',
                      }}
                    >
                      {dateConvert(row.created_at)}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row.pair}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row.type}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography
                      variant="body1"
                      className={row.side === OrderType.ORDER_BUY ? classes.fontColor5 : classes.fontColor4}
                    >
                      {row.side === OrderType.ORDER_BUY ? 'Buy' : 'Sell'}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row?.amount?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row?.price?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row?.filled?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row?.amount?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{(row?.price * row?.amount)?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>-</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>
                      {row.status === OrderStatus.STATUS_ORDER_FINISHED
                        ? 'Filled'
                        : row.status === OrderStatus.STATUS_ORDER_CANCELLED
                        ? 'Canceled'
                        : 'Orders'}
                    </Typography>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell style={{ padding: '46px 0px' }} colSpan={12}>
                  <Typography style={{ fontSize: '12px', textAlign: 'center' }}>You have no order history.</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default CustomizedTable
