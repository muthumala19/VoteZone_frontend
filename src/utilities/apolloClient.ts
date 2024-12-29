import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();
const http = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const link = ApolloLink.from([http]);

const client = new ApolloClient({
  link,
  cache,
});

export default client;
