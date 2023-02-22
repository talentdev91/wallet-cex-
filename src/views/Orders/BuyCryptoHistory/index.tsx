import React, { useState } from 'react'
import clsx from 'clsx'
// material-ui
import { Box, Typography, IconButton, Drawer, TableRow, TableCell } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

// external components
import ContainerHeader from 'components/Dashboard/ContainerHeader'
import SelectForm from 'components/Dashboard/SelectForm'
import ActionButton from 'components/Dashboard/ActionButton'
import SearchableSelectForm from 'components/Dashboard/SearchableSelectForm'
import TabMenu from 'components/Dashboard/TabMenu'
import Table from 'components/Dashboard/Table'

//style
import { useStyles } from 'components/Dashboard/Style'

function BuyCryptoHistory() {
  const classes = useStyles()
  const tabs = ['Buy', 'Recurring Buy', 'Sell', 'Dongle Access']
  const columns = ['Method', 'Amount', 'Price', 'Fees', 'Final Amount', 'Date', 'Status']
  const options = ['All', 'ACA', 'ACM', 'ADM', 'BCD', 'BCH', 'BCHDDOWN', 'CTSI', 'CVC', 'ZNX']
  const rows: any = []

  const [tabKey, setTabKey] = useState(tabs[0])
  const [filterOpen, setFilterOpen] = React.useState(false)

  const handleClickTab = (tab: string) => {
    setTabKey(tab)
  }

  const handleClickStatus = (value: any) => {}

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
      <ContainerHeader
        title="Buy crypto history"
        subtitle="Buy Crypto History"
        exportTooltipTitle="Export Buy History"
      />

      <Box className={classes.containerBody}>
        <Box className={clsx(classes.actionBar, classes.cryptoActionContainer)}>
          <TabMenu tabs={tabs} tabKey={tabKey} handleClickTab={handleClickTab} className={classes.cryptoActionBar} />
          <SelectForm options={tabs} handleClickTab={handleClickStatus} className={classes.cryptoSelectForm} />

          <Box className={classes.cryptoActionBar}>
            <SearchableSelectForm options={options} type="Crypto" className={classes.spacing2} />
            <SearchableSelectForm options={options} type="Date" className={classes.spacing2} />
            <ActionButton type="gradient" className={classes.spacing2}>
              Search
            </ActionButton>
            <ActionButton type="normal" className={classes.spacing2}>
              Reset
            </ActionButton>
          </Box>
          <Box className={classes.cryptoFilterBtn}>
            <IconButton color="primary" className={classes.filterBtn} onClick={() => setFilterOpen(true)}>
              <i className={clsx('icon-download', classes.checkIcon)} />
            </IconButton>
          </Box>
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
              <SearchableSelectForm options={options} type="Coins" className={classes.spacing1} />
              <Typography className={classes.spacing1}>-</Typography>
              <SearchableSelectForm options={options} type="Order Type" className={classes.spacing2} />
              <SearchableSelectForm options={options} type="Status" className={classes.spacing2} />
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

export default BuyCryptoHistory
