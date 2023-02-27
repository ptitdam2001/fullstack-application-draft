import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import { ThemeProvider } from '@feature/Theme/components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './config/routes'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
