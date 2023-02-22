import React from 'react'
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { useStyles } from './Style'
import { isEmptyObject } from 'common/utils'

interface StyledTableleProps {
  columns: React.ReactNode
  rows: React.ReactNode
  emptyTableRows?: React.ReactNode
}

function StyledTable({ columns, rows, emptyTableRows }: StyledTableleProps) {
  const classes = useStyles()
  return (
    <TableContainer className={classes.tableContainer}>
      <Table stickyHeader aria-label="simple table" className={classes.tableContent}>
        <TableHead>
          <TableRow>{columns}</TableRow>
        </TableHead>
        <TableBody>{!isEmptyObject(rows) ? rows : emptyTableRows}</TableBody>
      </Table>
    </TableContainer>
  )
}

export default StyledTable
