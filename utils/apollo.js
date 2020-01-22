import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

//Update the GraphQL endpoint to any instance of GraphQL that you like

const GRAPHQL_URL = process.env.BACKEND_URL || 'http://localhost:1337/graphql';

const link = createHttpLink({
  fetch, //Switched between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL
});

// Export a HOC from next-with-apollo

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {})
    })
);
