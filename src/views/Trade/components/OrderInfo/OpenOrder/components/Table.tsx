import React from 'react'
import { TableBody, TableRow, Paper, Table, TableContainer, Typography, TableCell } from '@material-ui/core'
//style
import { StyledTableCell, StyledTableHead, useStyles } from './styles'
import BinIcon from 'assets/image/bin.svg'
//utils
import { dateConvert } from 'common/utils'
import { OrderType } from 'config/constants'
import { getOrderOpens } from 'store/orderinfo'
import { CancelOrder } from 'hooks/orderFormAxios'
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'

interface CustomizedTableProps {
  rows: any
  columns: string[]
  status: any
  userId: number
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({ rows, columns, status, userId }) => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const onClickCancelOrder = async (id: string) => {
    var formData = new FormData()
    formData.append('order_id', id)
    formData.append('user_id', userId?.toString())

    CancelOrder(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }

      if (res?.data?.Success) {
        const getOpenOrderData = new FormData()
        getOpenOrderData.append('user_id', userId?.toString())
        dispatch(getOrderOpens(getOpenOrderData))
      }
    })
  }

  return (
    <Paper elevation={3} className={classes.container}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader>
          <StyledTableHead>
            <TableRow>
              <StyledTableCell style={{ minWidth: '116px' }}>Date</StyledTableCell>
              {columns.map((column: any, key: any) => {
                return (
                  <StyledTableCell key={key} style={{ minWidth: '80px' }}>
                    {column}
                  </StyledTableCell>
                )
              })}
              <StyledTableCell style={{ minWidth: '108px' }}>Trigger Conditions</StyledTableCell>
              <StyledTableCell className={classes.cancel}>
                <Typography style={{ color: '#f0b90b' }}>Cancel All</Typography>
              </StyledTableCell>
            </TableRow>
          </StyledTableHead>
          {!status.status && rows.length > 0 ? (
            <TableBody>
              {rows.map((row: any, key: any) => (
                <TableRow key={key}>
                  <StyledTableCell>
                    <Typography className={classes.text2}>{dateConvert(row.created_at)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text3}>{row.pair}</Typography>
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
                    <Typography className={classes.text}>{row?.price?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row?.amount?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row.filled?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{(row?.price * row?.amount)?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>-</Typography>
                  </StyledTableCell>
                  <StyledTableCell className={classes.cancel}>
                    <button onClick={() => onClickCancelOrder(row._id)} className={classes.cancelBtn}>
                      <img src={BinIcon} alt="icon" className={classes.bin} width={14} height={14} />
                    </button>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell style={{ padding: '58px 0px' }} colSpan={12}>
                  <Typography style={{ fontSize: '12px', textAlign: 'center' }}>You have no open orders.</Typography>
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
