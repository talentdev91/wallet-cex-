import React from 'react'
import { selectCoinPair } from '../../../store/header'
import { useAppSelector } from '../../../store/hooks'
import { TVChartContainer } from './TradingVIewChart'

function TradeChart() {
  const currentPair = useAppSelector(selectCoinPair)

  return (
    <>
      <TVChartContainer symbol={`zilionixx:${currentPair}`} />
    </>
  )
}

export default TradeChart
