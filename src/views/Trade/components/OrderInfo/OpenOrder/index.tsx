import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import Table from './components/Table'
import { orderopens, isLoading } from 'store/orderinfo/selectors'
import { useAppSelector } from 'store/hooks'
import Spinner from 'components/Spinner'
import { useAppDispatch } from 'store/hooks'
import { getOrderOpens } from 'store/orderinfo'
import { selectCoinPair } from 'store/header'

interface MyToken {
  userId: string
}

export default function OpenOrderTable(props: any) {
  const orderOpenData = useAppSelector(orderopens)
  const [displayedOrderOpenLists, setDisplayedOrderOpenLists] = useState(orderOpenData)
  const dispatch = useAppDispatch()
  const pair = useAppSelector(selectCoinPair)

  let decoded: any = []
  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  useEffect(() => {
    setDisplayedOrderOpenLists(orderOpenData)
  }, [orderOpenData])

  useEffect(() => {
    const openOrderFormData = new FormData()
    openOrderFormData.append('user_id', decoded?.userId)
    openOrderFormData.append('pair', props?.status === false ? '' : pair)
    dispatch(getOrderOpens(openOrderFormData))
  }, [props?.status])

  const loading = useAppSelector(isLoading)

  const columns = ['Pair', 'Type', 'Side ', 'Price', 'Amount', 'Filled', 'Total']

  return (
    <div>
      {loading === true ? (
        <Spinner />
      ) : (
        <Table
          rows={displayedOrderOpenLists?.list?.Data || []}
          columns={columns}
          status={props.status}
          userId={props.userId}
        />
      )}
    </div>
  )
}
