import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://localhost:3002/api/v1',
  cache: new InMemoryCache({ addTypename: false, resultCaching: false }),
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
})
