import React from 'react'
import ReactDOM from 'react-dom/client'
import { DefaultRoutes } from './pages'
import '@/styles/main.css'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DefaultRoutes />
  </React.StrictMode>
)
