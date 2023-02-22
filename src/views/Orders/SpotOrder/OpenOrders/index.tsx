import React, { useState } from 'react'

// material-ui
import { Box, TableRow, TableCell, Typography } from '@material-ui/core'

// external components
import ContainerHeader from 'components/Dashboard/ContainerHeader'
import SelectForm from 'components/Dashboard/SelectForm'
import TabMenu from 'components/Dashboard/TabMenu'
import Table from 'components/Dashboard/Table'

//style
import { useStyles } from 'components/Dashboard/Style'

function OpenOrders() {
  const classes = useStyles()
  const tabs = ['All', 'Limit Order', 'Stop-Limit Order', 'Limit-Maker']
  const options = ['Cancel all orders']
  const columns = ['Date', 'Pair', 'Type', 'Side', 'Price', 'Amount', 'Filled', 'Total', 'Trigger Conditions', 'Action']
  const rows: any = []

  const [tabKey, setTabKey] = useState(tabs[0])

  const handleClickTab = (tab: string) => {
    setTabKey(tab)
  }

  const handleClickStatus = (value: string) => {}

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
          <i className="icon-not_found" />
          <Typography className={classes.noRecords}>No records found.</Typography>
        </Box>
      </TableCell>
    </TableRow>
  )

  return (
    <Box className={classes.container}>
      <ContainerHeader title="Spot" subtitle="Order History" />

      <Box className={classes.containerBody}>
        <Box className={classes.actionBar} display="flex" justifyContent="space-between">
          <TabMenu tabs={tabs} tabKey={tabKey} handleClickTab={handleClickTab} className={classes.tabMenuVisible} />
          <SelectForm options={tabs} handleClickTab={handleClickStatus} className={classes.selectMenuVisible} />
          <SelectForm options={options} handleClickTab={handleClickStatus} disabled={true} />
        </Box>

        <Table columns={tableColumns} rows={tableRows} emptyTableRows={rows && emptyTableRows} />
      </Box>
    </Box>
  )
}

export default OpenOrders
