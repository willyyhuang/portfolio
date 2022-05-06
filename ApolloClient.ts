import {ApolloClient, createHttpLink,InMemoryCache} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, {headers}) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    }
  }))

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})