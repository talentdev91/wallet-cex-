/** @format */

import React from 'react'
//material-ui components
import { TableBody, TableRow, Paper, Table, TableContainer, Typography, TableCell } from '@material-ui/core'
//utils
import { dateConvert } from '../../../../../../common/utils'
import { OrderType } from '../../../../../../config/constants'

//style
import { StyledTableCell, StyledTableHead, useStyles } from './styles'

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

  return (
    <Paper elevation={3} className={classes.container}>
      <TableContainer component={Paper} style={{ maxHeight: '156px', width: '100%', boxShadow: 'none' }}>
        <Table stickyHeader>
          <StyledTableHead>
            <TableRow>
              <StyledTableCell style={{ minWidth: '116px' }}>Date</StyledTableCell>
              {columns.map((column: any, key: any) => {
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          {!status.status && rows.length > 0 ? (
            <TableBody>
              {rows.map((row: any, key: any) => (
                <TableRow key={key}>
                  <StyledTableCell>
                    <Typography
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        color: '#848e9c',
                      }}
                    >
                      {dateConvert(row.Timestamp)}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row.Pair}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography
                      variant="body1"
                      className={row.Side === OrderType.ORDER_BUY ? classes.fontColor5 : classes.fontColor4}
                    >
                      {row.Side === OrderType.ORDER_BUY ? 'Buy' : 'Sell'}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row?.Price?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row?.Excuted?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{row?.Fee?.toFixed(3)}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography className={classes.text}>{(row?.Price * row?.Excuted)?.toFixed(3)}</Typography>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell style={{ padding: '46px 0px' }} colSpan={12}>
                  <Typography style={{ fontSize: '12px', textAlign: 'center' }}>You have no trades.</Typography>
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
