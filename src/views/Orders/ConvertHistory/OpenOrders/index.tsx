import React from 'react'

// material-ui
import { Box, Typography, TableRow, TableCell } from '@material-ui/core'

// external components
import ContainerHeader from 'components/Dashboard/ContainerHeader'
import Table from 'components/Dashboard/Table'

//style
import { useStyles } from 'components/Dashboard/Style'

function OpenOrders() {
  const classes = useStyles()
  const columns = ['Date', 'Pair', 'Sell', 'Buy', 'Price', 'Expires in', 'Expiration', 'Action']
  const rows: any = []

  const tableColumns = columns.map((column) => (
    <TableCell key={column} className={classes.tableHeaderCell}>
      {column}
    </TableCell>
  ))

  const tableRows = rows.map((row: any) => (
    <TableRow key={row.name}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.created_at}</TableCell>
      <TableCell align="right">{row.pair}</TableCell>
      <TableCell align="right">{row.type}</TableCell>
      <TableCell align="right">{row?.price?.toFixed(3)}</TableCell>
      <TableCell align="right">{row?.amount?.toFixed(3)}</TableCell>
      <TableCell align="right">{row.filled?.toFixed(3)}</TableCell>
      <TableCell align="right">{(row?.price * row?.amount)?.toFixed(3)}</TableCell>
      <TableCell align="right">-</TableCell>
      <TableCell align="right">action</TableCell>
    </TableRow>
  ))

  const emptyTableRows = (
    <TableRow className={classes.tableRow}>
      <TableCell className={classes.tableCell} colSpan={12} style={{ textAlign: 'center' }}>
        <Box my="48px">
          <i className="icon-not-found" />
          <Typography className={classes.noRecords}>No records found.</Typography>
        </Box>
      </TableCell>
    </TableRow>
  )

  return (
    <Box className={classes.container}>
      <ContainerHeader title="Convert" subtitle="Open Orders" exportTooltipTitle="Export Open Orders" />

      <Box className={classes.containerBody}>
        <Box className={classes.actionBar} />

        <Table columns={tableColumns} rows={tableRows} emptyTableRows={rows && emptyTableRows} />
      </Box>
    </Box>
  )
}

export default OpenOrders
