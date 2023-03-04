import React from 'react'

import { ThemeProvider } from '@feature/Theme/components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createClient, Provider } from 'urql';

import routes from './config/routes'
import { getAuth } from '@feature/Authentication'

const router = createBrowserRouter(routes)

// GraphQL client
const graphQLClient = createClient({
  url: import.meta.env.VITE_GRAPHQL_URL,
  fetchOptions: () => {
    const sessionId= getAuth({});
    if (sessionId) {
      return {
        headers: { authorization: `Bearer ${sessionId}` },
      };
    }
    return {};
  },
});

export const MainApp = () => (
  <ThemeProvider>
  <Provider value={graphQLClient}>
    <RouterProvider router={router} />
  </Provider>
</ThemeProvider>
)
