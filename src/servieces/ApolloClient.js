import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new createHttpLink({
  uri: 'https://swapi.graph.cool/'
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});