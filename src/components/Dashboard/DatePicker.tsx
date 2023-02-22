import { useState } from 'react'

import { useStyles } from './Style'
import { isoDatetoString } from '../../common/utils'

// import { DateRangePicker } from 'materialui-daterange-picker'
import { Button } from '@material-ui/core'

import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap/dist/css/bootstrap.css'
import 'assets/css/daterangepicker.css'

export interface DatePickerProps {}

function DatePicker() {
  const classes = useStyles()

  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())

  const handleCancel = () => {}

  const handleEvent = (event: React.ChangeEvent<{}>, picker: any) => {
    setFromDate(picker.startDate._d.toISOString())
    setToDate(picker.endDate._d.toISOString())
  }
  return (
    <>
      <DateRangePicker
        initialSettings={{
          timePicker: true,
          endDate: '12/11/2021',
          locale: {
            format: 'MM/DD/YYYY hh:mm A',
          },
        }}
        onApply={handleEvent}
        onCancel={handleCancel}
      >
        <Button className={classes.datePickerBtn} aria-haspopup="true" disableRipple>
          <span className={classes.datePlaceholder}>{isoDatetoString(fromDate) + ' - ' + isoDatetoString(toDate)}</span>
          <i className={'far fa-calendar-alt'} />
        </Button>
      </DateRangePicker>
    </>
  )
}

export default DatePicker
