import React from 'react'
// material-ui
import { Box, Typography, TableRow, TableCell, TableFooter } from '@material-ui/core'
import MuiTable from '@material-ui/core/Table'

// external components
import Table from 'components/Dashboard/Table'
import ReturnButton from 'components/Dashboard/ReturnButton'

// style
import { useStyles } from 'components/Dashboard/Style'

import {
  StyledTablePagination,
  StyledRowsPerPageBox,
  StyledNativeSelect,
  BootstrapInput,
} from 'components/Dashboard/Pagination/Style'
import TablePaginationActions from 'components/Dashboard/Pagination'

function DeviceManagement() {
  const classes = useStyles()
  const columns = ['Device', 'Date', 'Location', 'IP Address', 'Action']
  const rows: any = []
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const rowsCnt = 30

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
      <TableCell align="left">{row.device}</TableCell>
      <TableCell align="left">{row.date}</TableCell>
      <TableCell align="left">{row.location}</TableCell>
      <TableCell align="left">{row.ipAddress}</TableCell>
      <TableCell align="left">Action</TableCell>
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

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const onSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleChange(event)
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  return (
    <Box className={classes.container}>
      <ReturnButton to="/my/security" />

      <Box className={classes.containerBody}>
        <Typography className={classes.subtitle} style={{ marginBottom: '16px' }}>
          Device Management
        </Typography>
        <Typography className={classes.deviceManageDescription} style={{ marginBottom: '48px' }}>
          These devices are currently allowed to access our account
        </Typography>
        <Table columns={tableColumns} rows={tableRows} emptyTableRows={rows && emptyTableRows} />
        <Box style={{ margin: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <StyledRowsPerPageBox>
            Show
            <StyledNativeSelect
              id="demo-customized-select-native"
              value={rowsPerPage}
              onChange={onSelectChange}
              input={<BootstrapInput />}
            >
              <option className={classes.option} value={10}>
                10
              </option>
              <option className={classes.option} value={25}>
                25
              </option>
              <option className={classes.option} value={50}>
                50
              </option>
              <option className={classes.option} value={100}>
                100
              </option>
            </StyledNativeSelect>
            Records
          </StyledRowsPerPageBox>
          <MuiTable style={{ width: 'auto' }}>
            <TableFooter>
              <TableRow>
                <StyledTablePagination
                  colSpan={3}
                  count={rowsCnt}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={onPageChange}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </MuiTable>
        </Box>
      </Box>
    </Box>
  )
}

export default DeviceManagement
