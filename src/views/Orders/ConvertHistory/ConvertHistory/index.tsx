import React from 'react'
import clsx from 'clsx'

// material-ui
import { Box, Typography, IconButton, Drawer, TableRow, TableCell } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

// external components
import SearchableSelectForm from 'components/Dashboard/SearchableSelectForm'
import ContainerHeader from 'components/Dashboard/ContainerHeader'
import Table from 'components/Dashboard/Table'
import DatePicker from 'components/Dashboard/DatePicker'

//style
import { useStyles } from 'components/Dashboard/Style'
import ActionButton from 'components/Dashboard/ActionButton'

function OrderHistory() {
  const classes = useStyles()
  const options = ['All', 'ACA', 'ACM', 'ADM', 'BCD', 'BCH', 'BCHDDOWN', 'CTSI', 'CVC', 'ZNX']
  const columns = ['Date', 'Pair', 'Type', 'From', 'To', 'Price', 'Date Updated', 'Status']
  const rows: any = []
  const [filterOpen, setFilterOpen] = React.useState(false)

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
      <ContainerHeader title="Conver" subtitle="Convert History" exportTooltipTitle="Export Convert History" />

      <Box className={classes.containerBody}>
        <Box className={classes.actionBar}>
          <Box className={classes.convertHistoryActionBar}>
            <span className={classes.spacing2}>
              <DatePicker />
            </span>
            <SearchableSelectForm options={options} type="Pair" className={classes.spacing2} />
            <ActionButton type="gradient" className={classes.spacing2}>
              Search
            </ActionButton>
            <ActionButton type="normal" className={classes.spacing2}>
              Reset
            </ActionButton>
          </Box>
          <IconButton
            color="primary"
            className={(classes.filterBtn, classes.convertHistoryFilterBtnPos)}
            onClick={() => setFilterOpen(true)}
          >
            <i className={clsx('icon-download', classes.checkIcon)} />
          </IconButton>
        </Box>

        <Table columns={tableColumns} rows={tableRows} emptyTableRows={rows && emptyTableRows} />

        <Drawer
          anchor="bottom"
          classes={{ paperAnchorBottom: classes.filterDrawer }}
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
        >
          <Box mx="24px" mt="24px" textAlign="right">
            <CloseIcon className={classes.filterClose} onClick={() => setFilterOpen(false)} />
          </Box>
          <Typography className={classes.drawerHeader}>Filter</Typography>
          <Box pt="20px" display="flex" flex="auto" flexDirection="column" justifyContent="space-between">
            <Box px="24px" display="flex" alignItems="center">
              <SearchableSelectForm options={options} type="Pair" className={classes.spacing1} />
              <Typography className={classes.spacing1}>-</Typography>
              <SearchableSelectForm options={options} type="Coin" className={classes.spacing2} />
              <SearchableSelectForm options={options} type="Side" className={classes.spacing2} />
            </Box>
            <Box py="24px" className={classes.filterDrawerFooter}>
              <ActionButton type="gradient" className={classes.filterDrawerFooterButton}>
                Search
              </ActionButton>
              <ActionButton type="normal" className={classes.filterDrawerFooterButton}>
                Reset
              </ActionButton>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  )
}

export default OrderHistory
