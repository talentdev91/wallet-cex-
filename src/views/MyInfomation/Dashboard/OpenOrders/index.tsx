import CustomCard from 'components/Dashboard/CustomCard'
// style
import { useStyles } from './Style'
import jwt_decode from 'jwt-decode'
import { Box, TableRow, TableCell, Typography } from '@material-ui/core'
import Table from 'components/Dashboard/Table'
import { dateConvert } from 'common/utils'
import notFoundIcon from 'assets/image/not-found.svg'
import { OrderType } from 'config/constants'
import BinIcon from 'assets/image/bin.svg'
// redux
import { useAppSelector } from 'store/hooks'
import { orderopens } from 'store/orderinfo/selectors'
import { getOrderOpens } from 'store/orderinfo'
import { CancelOrder } from 'hooks/orderFormAxios'
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'

interface MyToken {
  userId: string
}

export default function OpenOrders() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const columns = ['Pair Date', 'Type / Side Trigger Conditions', 'Price Amount', 'Total Filled', 'Action']
  const rows: any = []
  let decoded: any = []

  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  const onClickCancelOrder = async (id: string) => {
    var formData = new FormData()
    formData.append('order_id', id)
    formData.append('user_id', decoded?.userId?.toString())

    CancelOrder(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }

      if (res?.data?.Success) {
        const getOpenOrderData = new FormData()
        getOpenOrderData.append('user_id', decoded?.userId?.toString())
        dispatch(getOrderOpens(getOpenOrderData))
      }
    })
  }

  const orderOpenData = useAppSelector(orderopens)

  const tableColumns = columns.map((column) => {
    if (column === 'Action') {
      return (
        <TableCell key={column} className={classes.tableHeaderCell} style={{ position: 'sticky', right: '0px' }}>
          {column}
        </TableCell>
      )
    } else {
      return (
        <TableCell key={column} className={classes.tableHeaderCell}>
          {column}
        </TableCell>
      )
    }
  })

  const tableRows = orderOpenData?.list?.Data?.map((row: any, key: any) => (
    <TableRow key={key}>
      <TableCell component="th" scope="row" className={classes.tableHeaderCell}>
        <Typography className={classes.text}>{row?.pair}</Typography>
        <Typography className={classes.text}>{dateConvert(row?.created_at)}</Typography>
      </TableCell>
      <TableCell align="left" className={classes.tableHeaderCell}>
        <Typography
          variant="body1"
          className={row?.side === OrderType.ORDER_BUY ? classes.fontColor5 : classes.fontColor4}
        >
          {row?.side === OrderType.ORDER_BUY ? 'Buy' : 'Sell'}
        </Typography>
        -
      </TableCell>
      <TableCell align="left" className={classes.tableHeaderCell}>
        <Typography className={classes.text}>{row?.price?.toFixed(3)}</Typography>
        <Typography className={classes.text}>{row?.amount?.toFixed(3)}</Typography>
      </TableCell>
      <TableCell align="left" className={classes.tableHeaderCell}>
        <Typography className={classes.text}>{(row?.price * row?.amount)?.toFixed(3)}</Typography>
        <Typography className={classes.text}>{row?.filled?.toFixed(3)}</Typography>
      </TableCell>
      <TableCell
        align="left"
        className={classes.tableHeaderCell}
        style={{ position: 'sticky', right: '0px', backgroundColor: '#ffffff' }}
      >
        <button onClick={() => onClickCancelOrder(row?._id)} className={classes.cancelBtn}>
          <img src={BinIcon} alt="icon" className={classes.bin} width={14} height={14} />
        </button>
      </TableCell>
    </TableRow>
  ))

  const emptyTableRows = (
    <TableRow>
      <TableCell className={classes.tableCell} colSpan={12} style={{ textAlign: 'center' }}>
        <Box my="48px">
          <img src={notFoundIcon} alt="not found" className={classes.notfoundIcon}></img>
          <Typography className={classes.noRecords}>No records found.</Typography>
        </Box>
      </TableCell>
    </TableRow>
  )

  return (
    <CustomCard title="Open Orders" url="/my/orders/exchange/openorder">
      <Table columns={tableColumns} rows={tableRows} emptyTableRows={rows && emptyTableRows} />
    </CustomCard>
  )
}
