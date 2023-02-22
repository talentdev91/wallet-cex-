import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
// material-ui
import { Box, Typography, TableRow, TableCell, TableFooter } from '@material-ui/core'
import MuiTable from '@material-ui/core/Table'
// external components
import Table from 'components/Dashboard/Table'
import ReturnButton from 'components/Dashboard/ReturnButton'
import TabMenu from 'components/Dashboard/TabMenu'
import { dateConvert } from 'common/utils'
import SelectForm from 'components/Dashboard/SelectForm'
// style
import { useStyles } from './Style'
// redux
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getLoginActivityRecord, getSecurityActivityRecord } from 'store/accountrecord'
import { loginActivityRecords, securityActivityRecords } from 'store/accountrecord/selectors'
import { StyledTablePagination } from 'components/Dashboard/Pagination/Style'
import TablePaginationActions from 'components/Dashboard/Pagination'
import { Second } from 'config/constants'

interface MyToken {
  userId: string
}

function DeviceManagement() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const tabs = ['Login Activity', 'Security Activity']
  const during = ['1 DAYS', '7 DAYS', '1 Month', '3 Months']
  const status = ['All', 'Completed', 'Failed']
  const loginColumns = ['Date', 'Source', 'Status', 'IP Address']
  const securityColumns = ['Date', 'Source', 'Activity', 'Status', 'IP Address']
  const [rows, setRows] = useState<any>()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [tabKey, setTabKey] = useState('Login Activity')
  const [rowsCnt, setRowsCnt] = useState(0)
  const [date, setDate] = useState('')
  const [logStatus, setLogStatus] = useState('All')
  const timeNow = Math.round(Date.now() / 1000)
  const day = timeNow - Second.ONE_DAY_SECOND
  const week = timeNow - Second.WEEK_DAY_SECOND
  const month = timeNow - Second.MONTH_DAY_SECOND
  const threeMonth = timeNow - Second.THREE_MONTH_SECOND
  let decoded: any = []

  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  const handleClickTab = (tab: string) => {
    setTabKey(tab)
  }

  useEffect(() => {
    if (tabKey === 'Login Activity') {
      const loginActivityFormData = new FormData()
      loginActivityFormData.append('user_id', decoded?.userId)
      loginActivityFormData.append('cur_page', page.toString())
      loginActivityFormData.append('per_page', rowsPerPage.toString())

      dispatch(getLoginActivityRecord(loginActivityFormData))
    } else {
      const securityActivityFormData = new FormData()
      securityActivityFormData.append('user_id', decoded?.userId)
      securityActivityFormData.append('cur_page', page.toString())
      securityActivityFormData.append('per_page', rowsPerPage.toString())
      securityActivityFormData.append(
        'status',
        logStatus === 'All' ? '' : logStatus === 'Completed' ? 'Success' : 'Error',
      )
      securityActivityFormData.append(
        'start_date',
        (date === '1 DAYS' ? day : date === '7 DAYS' ? week : date === '1 MONTH' ? month : threeMonth).toString(),
      )
      securityActivityFormData.append('end_date', timeNow?.toString())

      dispatch(getSecurityActivityRecord(securityActivityFormData))
    }
  }, [tabKey, date, logStatus, page, rowsPerPage])

  const loginRecords = useAppSelector(loginActivityRecords)
  const securityRecords = useAppSelector(securityActivityRecords)

  useEffect(() => {
    if (tabKey === 'Login Activity') {
      setRowsCnt(loginRecords?.length)
      setRows(loginRecords)
    } else {
      setRowsCnt(securityRecords?.length)
      setRows(securityRecords)
    }
  }, [loginRecords, securityRecords, tabKey])

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const handleClickDuring = (value: string) => {
    setDate(value)
  }

  const handleClickStatus = (value: string) => {
    setLogStatus(value)
  }

  const tableColumns = (tabKey === 'Login Activity' ? loginColumns : securityColumns)?.map((column, key) => (
    <TableCell key={key} className={classes.tableHeaderCell1}>
      {column}
    </TableCell>
  ))

  const tableRows = rows?.map((row: any, key: any) => (
    <TableRow key={key}>
      <TableCell className={classes.tableHeaderCell} align="left">
        {dateConvert(row.Timestamp)}
      </TableCell>
      <TableCell className={classes.tableHeaderCell} align="left">
        {row.Source}
      </TableCell>
      {tabKey === 'Security Activity' && (
        <TableCell className={classes.tableHeaderCell} align="left">
          {row.Activity}
        </TableCell>
      )}
      <TableCell
        className={row.Status === 'Success' ? classes.tableHeaderCell2 : classes.tableHeaderCell3}
        align="left"
      >
        {row.Status}
      </TableCell>
      <TableCell className={classes.tableHeaderCell} align="left">
        {row.IPAddress}
      </TableCell>
    </TableRow>
  ))

  const emptyTableRows = (
    <TableRow className={classes.tableRow}>
      <TableCell className={classes.tableCell} colSpan={12} style={{ textAlign: 'center' }}>
        <i className="icon-not_found" />
        <Typography className={classes.noRecords}>No records found.</Typography>
      </TableCell>
    </TableRow>
  )

  return (
    <Box className={classes.container}>
      <ReturnButton to="/my/security" />

      <Box className={classes.containerBody}>
        <Typography className={classes.subtitle}>Account Activity Records</Typography>

        <TabMenu tabs={tabs} tabKey={tabKey} handleClickTab={handleClickTab} />

        {tabKey === 'Security Activity' && (
          <>
            <Box className={classes.p2pActionContainer2}>
              <div>
                <Typography className={classes.menuTitle}>Time</Typography>
                <SelectForm options={during} handleClickTab={handleClickDuring} />
              </div>
              <div>
                <Typography className={classes.menuTitle1}>Status</Typography>
                <SelectForm options={status} handleClickTab={handleClickStatus} className={classes.statusSelect} />
              </div>
            </Box>
          </>
        )}
        <Box mt="24px">
          <Table columns={tableColumns} rows={tableRows} emptyTableRows={rows && emptyTableRows} />
        </Box>
        <Box className={classes.perPageDiv}>
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
