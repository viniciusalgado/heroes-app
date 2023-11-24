import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BattlePage from '../components/BattlePage'
import OverviewPage from '../components/OverviewPage'

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<OverviewPage />} />
      <Route path="/battle" element={<BattlePage />} />
    </Routes>
  )
}

export default RoutesWrapper
