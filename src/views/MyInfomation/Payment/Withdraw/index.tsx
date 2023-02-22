import React, { useState } from 'react'
import { Box, TableRow, TableCell, Typography } from '@material-ui/core'

import ActionButton from 'components/Dashboard/ActionButton'
import AddBankAccountLockedModal from 'components/Dashboard/AddBankAccountLockedModal'
import Table from 'components/Dashboard/Table'
import { useStyles } from 'components/Dashboard/Style'
import RecordsNotFoundIcon from 'assets/image/RecordsNotFound.svg'

function Withdraw() {
  const classes = useStyles()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const columns = ['Bank Country', 'Currency', 'Bank Name', 'Branch Code', 'Account Number', 'Account Status']
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
          <img src={RecordsNotFoundIcon} alt="icon" />
          <Typography className={classes.noRecords}>No records found.</Typography>
        </Box>
      </TableCell>
    </TableRow>
  )

  return (
    <>
      <ActionButton type="outline" style={{ margin: '16px 0 32px 0' }} onClick={() => setIsModalOpen(true)}>
        Add Bank Account
      </ActionButton>

      <Table columns={tableColumns} rows={tableRows} emptyTableRows={rows && emptyTableRows} />

      <AddBankAccountLockedModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Withdraw
