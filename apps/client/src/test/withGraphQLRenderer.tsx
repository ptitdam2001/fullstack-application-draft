import { render } from '@testing-library/react'
import { RequestHandler } from 'msw'

import { server } from '../mocks/node'
import { cacheExchange, Client, fetchExchange, Provider } from 'urql'
import { RequestHandlerDefaultInfo, RequestHandlerOptions } from 'msw/lib/core/handlers/RequestHandler'

const graphQLClient = new Client({
  url: import.meta.env.VITE_GRAPHQL_URL,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      accept: '*/*',
    },
  },
})

type Props = {
  children: React.ReactNode
}

const UrqlClientProvider = ({ children }: Props) => <Provider value={graphQLClient}>{children}</Provider>

export const withGraphQLRenderer =
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  (children: React.ReactNode, options?: any) => (responseOverride?: RequestHandler<RequestHandlerDefaultInfo, any, any, RequestHandlerOptions>) => {
    if (responseOverride) {
      server.use(responseOverride)
    }
    render(<UrqlClientProvider>{children}</UrqlClientProvider>, options)
  }
