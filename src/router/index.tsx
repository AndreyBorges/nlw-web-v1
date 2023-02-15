import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, DuoFind } from '../pages'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/duo' element={<DuoFind />} />
    </Routes>
  )
}

export default Router
