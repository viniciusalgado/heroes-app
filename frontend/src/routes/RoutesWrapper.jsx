import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BattlePage from '../components/BattlePage'

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<BattlePage />} />
    </Routes>
  )
}

export default RoutesWrapper
