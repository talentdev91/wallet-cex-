import React from 'react'
import clsx from 'clsx'
import jwt_decode from 'jwt-decode'
import { TableRow, TableFooter, Typography, Menu, MenuItem } from '@material-ui/core'
import Muitable from '@material-ui/core/Table'
import { DateRangePicker } from 'materialui-daterange-picker'
import dateFormat from 'dateformat'
// external
import { OrderStatus } from 'config/constants'
import { dateConvert } from 'common/utils'
import { tradehistory, isLoading } from 'store/orderinfo/selectors'
import { getTradeHistory } from 'store/orderinfo'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import Table from './components/Table'
import { useStyles } from '../../Style'
import Spinner from 'components/Spinner'
import { During, Second } from 'config/constants'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { StyledRowsPerPageBox, StyledNativeSelect, BootstrapInput, StyledTablePagination } from './components/styles'
import TablePaginationActions from './components/Pagination'
import { selectCoinPair } from 'store/header'

interface MyToken {
  userId: string
}

interface DateRange {
  startDate?: Date
  endDate?: Date
}

const columns = ['Pair', 'Side', 'Pprice', 'Executed', 'Fee', 'Total']

function TradeHistory(props: any) {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const data = useAppSelector(tradehistory)
  const loading = useAppSelector(isLoading)

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const totalCnt = data.list?.TotalCnt
  const timeNow = Math.round(Date.now() / 1000)
  const day = timeNow - Second.ONE_DAY_SECOND
  const week = timeNow - Second.WEEK_DAY_SECOND
  const month = timeNow - Second.MONTH_DAY_SECOND
  const threeMonth = timeNow - Second.THREE_MONTH_SECOND
  const [duringOption, setDuringOption] = React.useState(0)
  const [openCalendar, setOpenCalendar] = React.useState(false)
  const [dateRange, setDateRange] = React.useState<DateRange>({})
  let [startTime, setStartTime] = React.useState('')
  let [endTime, setEndTime] = React.useState('')
  const startTimestamp = Date.parse(dateFormat(dateRange.startDate)) / 1000
  const endTimestamp = Date.parse(dateFormat(dateRange.endDate)) / 1000
  const pair = useAppSelector(selectCoinPair)

  let decoded: any = []

  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleDayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const toggle = () => setOpenCalendar(!openCalendar)

  const handleDateSelect = (e: any) => {
    setDateRange(e)
    setOpenCalendar(!openCalendar)
    setStartTime(dateConvert(Date.parse(dateFormat(e.startDate)) / 1000).toString())
    setEndTime(dateConvert(Date.parse(dateFormat(e.endDate)) / 1000).toString())
  }

  const handleDuringCahnge = (value: any) => {
    setDuringOption(value)

    const formData = new FormData()
    formData.append('user_id', decoded?.userId)
    formData.append('order_status', '0')
    formData.append('end_date', timeNow.toString())
    formData.append('per_page', `${rowsPerPage}`)
    formData.append('cur_page', `${page}`)
    formData.append('pair', props?.status === false ? '' : pair)
    if (value === During.ONE_DAY) {
      formData.append('start_date', day.toString())
    } else if (value === During.ONE_WEEK) {
      formData.append('start_date', week.toString())
    } else if (value === During.ONE_MONTH) {
      formData.append('start_date', month.toString())
    } else {
      formData.append('start_date', threeMonth.toString())
    }
    dispatch(getTradeHistory(formData))
  }

  React.useEffect(() => {
    const formData = new FormData()

    formData.append('user_id', decoded?.userId)
    formData.append('pair', props?.status === false ? '' : pair)
    formData.append('end_date', Date.now().toString())
    formData.append('per_page', `${rowsPerPage}`)
    formData.append('cur_page', `${page}`)
    if (duringOption === During.ONE_DAY) {
      formData.append('start_date', day.toString())
    } else if (duringOption === During.ONE_WEEK) {
      formData.append('start_date', week.toString())
    } else if (duringOption === During.ONE_MONTH) {
      formData.append('start_date', month.toString())
    } else {
      formData.append('start_date', threeMonth.toString())
    }

    dispatch(getTradeHistory(formData))
  }, [page, rowsPerPage, props?.status])

  const handleReset = () => {
    setStartTime('')
    setEndTime('')
    setDuringOption(0)
    const formData = new FormData()
    formData.append('start_date', day.toString())
    formData.append('end_date', Date.now().toString())
    formData.append('user_id', decoded?.userId)
    formData.append('pair', props?.status === false ? '' : pair)
    formData.append('per_page', `${rowsPerPage}`)
    formData.append('cur_page', `${page}`)

    dispatch(getTradeHistory(formData))
  }

  const handleSearch = () => {
    const formData = new FormData()
    formData.append('user_id', decoded?.userId)
    formData.append('start_date', startTimestamp.toString())
    formData.append('end_date', endTimestamp.toString())
    formData.append('order_status', OrderStatus.STATUS_ALL.toString())
    formData.append('per_page', `${rowsPerPage}`)
    formData.append('cur_page', `${page}`)
    formData.append('pair', props?.status === false ? '' : pair)
    dispatch(getTradeHistory(formData))

    startTime = ''
    endTime = ''
  }

  return (
    <div>
      <div className={classes.searchDiv}>
        <div className={classes.flexPosition}>
          <Typography onClick={handleDayClick} className={classes.ordHisTabSel1} variant="body2">
            {duringOption === During.ONE_DAY
              ? '1 Day'
              : duringOption === During.ONE_WEEK
              ? '1 Week'
              : duringOption === During.ONE_MONTH
              ? ' 1 Month'
              : '3 Month'}
            <ArrowDropDownIcon className={classes.dropdownIcon} />
          </Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            // className={classes.menu}
            MenuListProps={{ disablePadding: true }}
          >
            <MenuItem onClick={() => handleDuringCahnge(During.ONE_DAY)} className={classes.menuItem}>
              1 Day
            </MenuItem>
            <MenuItem onClick={() => handleDuringCahnge(During.ONE_WEEK)} className={classes.menuItem}>
              1 Week
            </MenuItem>
            <MenuItem onClick={() => handleDuringCahnge(During.THREE_MONTH)} className={classes.menuItem}>
              1 Month
            </MenuItem>
            <MenuItem onClick={() => handleDuringCahnge(During.THREE_MONTH)} className={classes.menuItem}>
              3 Month
            </MenuItem>
          </Menu>

          <div className={clsx(classes.dayDiv, classes.hide)}>
            <Typography
              onClick={() => handleDuringCahnge(During.ONE_DAY)}
              variant="body2"
              className={duringOption === During.ONE_DAY ? classes.ordHisTabSel : classes.ordHisTab}
            >
              1 Day
            </Typography>
            <Typography
              onClick={() => handleDuringCahnge(During.ONE_WEEK)}
              variant="body2"
              className={duringOption === During.ONE_WEEK ? classes.ordHisTabSel : classes.ordHisTab}
            >
              1 Week
            </Typography>
            <Typography
              onClick={() => handleDuringCahnge(During.ONE_MONTH)}
              variant="body2"
              className={duringOption === During.ONE_MONTH ? classes.ordHisTabSel : classes.ordHisTab}
            >
              1 Month
            </Typography>
            <Typography
              onClick={() => handleDuringCahnge(During.THREE_MONTH)}
              variant="body2"
              className={duringOption === During.THREE_MONTH ? classes.ordHisTabSel : classes.ordHisTab}
            >
              3 Months
            </Typography>
            <Typography variant="body2" className={classes.hisTimetxt}>
              Time
            </Typography>
          </div>
          <div className={classes.dateDiv}>
            <input
              placeholder="YYYY-MM-DD"
              onClick={toggle}
              value={startTime.split(' ')[0]}
              readOnly
              className={classes.input}
            />
            <Typography variant="body2" className={classes.hisTimetxt}>
              to
            </Typography>
            <input
              placeholder="YYYY-MM-DD"
              onClick={toggle}
              value={endTime.split(' ')[0]}
              readOnly
              className={classes.input}
            />
            <div className={classes.calendar}>
              <DateRangePicker open={openCalendar} toggle={toggle} onChange={(range) => handleDateSelect(range)} />
            </div>
            <img src="/history/date.svg" alt="date" className={classes.icon5} />
            <img src="/history/help.svg" alt="help" className={classes.help} />
            <span className={classes.hisSearch} onClick={handleSearch}>
              Search
            </span>
            <span className={classes.hisReset} onClick={handleReset}>
              Reset
            </span>
          </div>
          <div className={clsx(classes.dayDiv, classes.hide)}></div>
        </div>
        <div className={classes.paginationDiv}>
          <StyledRowsPerPageBox>
            <StyledNativeSelect
              id="demo-customized-select-native"
              value={rowsPerPage}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </StyledNativeSelect>
          </StyledRowsPerPageBox>
          <Muitable>
            <TableFooter>
              <TableRow>
                <StyledTablePagination
                  colSpan={3}
                  count={totalCnt}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Muitable>
        </div>
      </div>
      <div style={{ paddingTop: '12px' }}>
        {loading === true ? (
          <Spinner />
        ) : (
          <Table
            rows={data.list?.Data || []}
            columns={columns}
            status={props.status}
            rowsPerPage={rowsPerPage}
            totalCnt={totalCnt}
            page={page}
          />
        )}
      </div>
    </div>
  )
}

export default TradeHistory
