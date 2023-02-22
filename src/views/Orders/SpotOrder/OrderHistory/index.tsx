import React, { useState } from 'react'
import clsx from 'clsx'

// material-ui
import { Box, FormControlLabel, Typography, Grid, IconButton, Drawer, TableRow, TableCell } from '@material-ui/core'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import CloseIcon from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/core/styles'

// external components
import SearchableSelectForm from 'components/Dashboard/SearchableSelectForm'
import DatePicker from 'components/Dashboard/DatePicker'
import ContainerHeader from 'components/Dashboard/ContainerHeader'
import Table from 'components/Dashboard/Table'

//style
import { useStyles } from 'components/Dashboard/Style'
import ActionButton from 'components/Dashboard/ActionButton'

const StyledCheckbox = withStyles({
  root: {
    color: '#f0b90b',
    padding: '8px',
    '&$checked': {
      color: '#f0b90b',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />)

function OrderHistory() {
  const classes = useStyles()
  const options = ['All', 'ACA', 'ACM', 'ADM', 'BCD', 'BCH', 'BCHDDOWN', 'CTSI', 'CVC', 'ZNX']
  const columns = [
    'Date',
    'Pair',
    'Type',
    'Side',
    'Average',
    'Price',
    'Executed',
    'Amount',
    'Total',
    'Trigger Conditions',
    'Status',
  ]
  const rows: any = []

  const [isChecked, setIsChecked] = useState(false)
  const [filterOpen, setFilterOpen] = React.useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

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
      <ContainerHeader title="Spot" subtitle="Order History" exportTooltipTitle="Export Order History" />

      <Box className={classes.containerBody}>
        <Box className={classes.actionBar}>
          <Grid container>
            <Grid item xs={12} lg={8} className={classes.gridItemLeft}>
              <span className={classes.spacing2}>
                <DatePicker />
              </span>
              <SearchableSelectForm options={options} type="Pair" className={classes.spacing1} />
              <Typography className={classes.spacing1}>-</Typography>
              <SearchableSelectForm options={options} type="Coin" className={classes.spacing2} />
              <SearchableSelectForm options={options} type="Side" className={classes.spacing2} />
            </Grid>
            <Grid item xs={12} lg={4} className={classes.gridItemRight}>
              <ActionButton type="gradient" className={classes.spacing2}>
                Search
              </ActionButton>
              <ActionButton type="normal" className={classes.spacing2}>
                Reset
              </ActionButton>
              <FormControlLabel
                className={classes.checkbox}
                control={<StyledCheckbox checked={isChecked} onChange={handleChange} name="checkedG" />}
                label="Hide all canceled"
              />
            </Grid>
            <Grid item xs={12} className={classes.responsiveActionBar}>
              <FormControlLabel
                className={classes.checkbox}
                control={<StyledCheckbox checked={isChecked} onChange={handleChange} name="checkedG" />}
                label="Hide all canceled"
              />
              <IconButton color="primary" className={classes.filterBtn} onClick={() => setFilterOpen(true)}>
                <i className={clsx('icon-download', classes.checkIcon)} />
              </IconButton>
            </Grid>
          </Grid>
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
