import { render } from '@testing-library/react'
import { GraphQLHandler, GraphQLRequest } from 'msw'

import { server } from '../mocks/node'
import { cacheExchange, Client, fetchExchange, Provider } from 'urql'
import { ThemeProvider } from '@feature/Theme/components'

const graphQLClient = new Client({
  url: import.meta.env.VITE_GRAPHQL_URL,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      'accept': '*/*',
    },
  },
})

type Props = {
  children: React.ReactNode
}

const UrqlClientProvider = ({ children }: Props) => <Provider value={graphQLClient}>{children}</Provider>

export const withGraphQLRenderer =
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  (children: React.ReactNode, options?: any) => (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
    if (responseOverride) {
      server.use(responseOverride)
    }
    render(
      <ThemeProvider>
        <UrqlClientProvider>{children}</UrqlClientProvider>
      </ThemeProvider>,
      options
    )
  }
