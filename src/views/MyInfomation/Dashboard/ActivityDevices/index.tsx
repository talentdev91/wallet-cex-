import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'
import { Card, Typography, Box } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { dateConvert } from 'common/utils'
// style
import { useStyles } from './Style'
// redux
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getLoginActivityRecord } from 'store/accountrecord'
import { loginActivityRecords } from 'store/accountrecord/selectors'

interface MyToken {
  userId: string
}

export default function ActivityDevices() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const tabs = ['Activity', 'Devices']
  const [tabKey, setTabKey] = useState(tabs[0])
  const page = '0'
  const rowsPerPage = '3'
  let decoded: any = []

  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  useEffect(() => {
    if (tabKey === tabs[0]) {
      const loginActivityFormData = new FormData()
      loginActivityFormData.append('user_id', decoded?.userId)
      loginActivityFormData.append('cur_page', page)
      loginActivityFormData.append('per_page', rowsPerPage)

      dispatch(getLoginActivityRecord(loginActivityFormData))
    } else {
    }
  }, [tabKey])

  const loginRecords = useAppSelector(loginActivityRecords)

  return (
    <Card className={classes.CustomCard}>
      <Box className={classes.CustomCardHeader}>
        <Box className={classes.CustomCardHeaderTitle}>
          {tabs.map((tab) => (
            <Typography
              key={tab}
              className={clsx(classes.tabItem, { [classes.activeItem]: tab === tabKey })}
              onClick={() => setTabKey('Activity')}
            >
              {tab}
            </Typography>
          ))}
        </Box>
        <Box className={classes.CustomCardHeaderDescription}>
          <Link to="/my/security/account-activity" className={classes.disableAccount}>
            Disable account
          </Link>
          <Link to="/my/security/account-activity">
            <ArrowForwardIosIcon className={classes.CustomCardHeaderTitleIcon} />
          </Link>
        </Box>
      </Box>

      <Box py="16px">
        {tabKey === 'Activity' &&
          loginRecords?.map((record: any, key: any) => (
            <div key={key}>
              <Box className={classes.activityItem}>
                <Box display="flex" justifyContent="space-between" mb="4px">
                  <Typography style={{ fontSize: '14px', color: '#1e2329', fontWeight: 400 }}>
                    {record?.Source}
                  </Typography>
                  <Typography style={{ fontSize: '12px', color: '#1e2329', fontWeight: 400 }}>
                    {record?.IPAddress}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography style={{ fontSize: '12px', fontWeight: 400 }}>{record?.Device}</Typography>
                  <Typography style={{ fontSize: '12px', fontWeight: 400 }}>
                    {dateConvert(record?.Timestamp)}
                  </Typography>
                </Box>
              </Box>
            </div>
          ))}
        {tabKey === 'Devices' && (
          <>
            <Box className={classes.activityItem}>
              <Box display="flex" justifyContent="space-between" mb="4px">
                <Typography style={{ fontSize: '14px', color: '#1e2329', fontWeight: 400 }}>
                  Chrome V96.0.4664.110 (Windows)
                </Typography>
                <Typography style={{ fontSize: '12px', color: '#1e2329', fontWeight: 400 }}>188.43.136.33</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography style={{ fontSize: '12px', fontWeight: 400 }}>Povarovo Russian Federation</Typography>
                <Typography style={{ fontSize: '12px', fontWeight: 400 }}>2021-12-20 08:37:34</Typography>
              </Box>
            </Box>
            <Box className={classes.activityItem}>
              <Box display="flex" justifyContent="space-between" mb="4px">
                <Typography style={{ fontSize: '14px', color: '#1e2329', fontWeight: 400 }}>
                  Chrome V96.0.4664.110 (Windows)
                </Typography>
                <Typography style={{ fontSize: '12px', color: '#1e2329', fontWeight: 400 }}>188.43.136.33</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography style={{ fontSize: '12px', fontWeight: 400 }}>Povarovo Russian Federation</Typography>
                <Typography style={{ fontSize: '12px', fontWeight: 400 }}>2021-12-20 08:37:34</Typography>
              </Box>
            </Box>
            <Box className={classes.activityItem}>
              <Box display="flex" justifyContent="space-between" mb="4px">
                <Typography style={{ fontSize: '14px', color: '#1e2329', fontWeight: 400 }}>
                  Chrome V96.0.4664.110 (Windows)
                </Typography>
                <Typography style={{ fontSize: '12px', color: '#1e2329', fontWeight: 400 }}>188.43.136.33</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography style={{ fontSize: '12px', fontWeight: 400 }}>Povarovo Russian Federation</Typography>
                <Typography style={{ fontSize: '12px', fontWeight: 400 }}>2021-12-20 08:37:34</Typography>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Card>
  )
}
