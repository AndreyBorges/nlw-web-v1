import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from '@/router'
import { NLWContextProvider } from '../../context'

const DefaultRoutes = () => {
  return (
    <BrowserRouter>
      <NLWContextProvider>
        <Router />
      </NLWContextProvider>
    </BrowserRouter>
  )
}

export default DefaultRoutes
