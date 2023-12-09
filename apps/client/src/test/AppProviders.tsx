import { ReactNode } from 'react'
// import { server } from '../mocks/node'
import { cacheExchange, Client, fetchExchange, Provider } from 'urql'
import { BrowserRouter } from 'react-router-dom'

type Props = {
  children: ReactNode
}

const graphQLClient = new Client({
  url: import.meta.env.VITE_GRAPHQL_URL,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      accept: '*/*',
    },
  },
})

const UrqlClientProvider = ({ children }: Props) => <Provider value={graphQLClient}>{children}</Provider>

export const AppProviders = ({ children }: Props) => (
  <BrowserRouter>
    <UrqlClientProvider>{children}</UrqlClientProvider>
  </BrowserRouter>
)
