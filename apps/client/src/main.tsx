import React from 'react'
import ReactDOM from 'react-dom/client'
import { cacheExchange, Client, debugExchange, fetchExchange, Provider } from 'urql'
import { getAuth } from '@feature/Authentication'

import '@fontsource/roboto'
import '@fontsource/poppins'
import './main.css'

// For starting Mock GraphQL server
import serverMocker from './mocks/server'
import { MainApp } from './MainApp'

if (import.meta.env.DEV) {
  await serverMocker()
}

// GraphQL client
const graphQLClient = new Client({
  url: import.meta.env.VITE_GRAPHQL_URL,
  fetchOptions: () => {
    const sessionId = getAuth({})
    const anotherHeader = sessionId ? { authorization: `Bearer ${sessionId}` } : {}
    return {
      headers: {
        ...anotherHeader,
        accept: '*/*',
      },
    } as RequestInit
  },
  exchanges: [debugExchange, cacheExchange, fetchExchange],
})

// rome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <Provider value={graphQLClient}>
        <MainApp />
      </Provider>
    </React.Suspense>
  </React.StrictMode>
)
