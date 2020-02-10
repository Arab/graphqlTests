import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new createHttpLink({
  uri: 'https://api.graphcms.com/simple/v1/swapi'
});
console.log(httpLink)
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});