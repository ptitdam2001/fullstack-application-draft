import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

// For starting Mock GraphQL server
import serverMocker from './mocks/server'
import { MainApp } from './MainApp'

await serverMocker()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
)
