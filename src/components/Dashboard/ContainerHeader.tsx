import React from 'react'
import clsx from 'clsx'
import { Grid, Typography } from '@material-ui/core'
import ActionButton from './ActionButton'
import { useStyles } from './Style'

interface ContainerHeaderProps {
  title?: string
  subtitle: string
  exportTooltipTitle?: string
  exportTask?: string
}

function ContainerHeader({ title, subtitle, exportTooltipTitle, exportTask }: ContainerHeaderProps) {
  const classes = useStyles()

  return (
    <Grid container className={classes.containerHeader}>
      <Grid item xs={6}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.subtitle}>{subtitle}</Typography>
      </Grid>
      <Grid item xs={6} className={classes.headerAction}>
        {exportTooltipTitle && (
          <ActionButton type="normal" tooltipTitle={exportTooltipTitle}>
            <i className={clsx('icon-download', classes.downloadIcon)} />
            Export
          </ActionButton>
        )}
        {exportTask && (
          <span style={{ marginLeft: '12px' }}>
            <ActionButton type="normal" tooltipTitle={exportTooltipTitle}>
              <i className={clsx('icon-download', classes.downloadIcon)} />
              Export Task
            </ActionButton>
          </span>
        )}
      </Grid>
    </Grid>
  )
}

export default ContainerHeader
