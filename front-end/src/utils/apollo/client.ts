import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://127.0.0.1:8000/graphql', // Ensure this URL is correct and includes the protocol
    credentials: 'same-origin', // Or 'include' if dealing with cookies
  }),
  cache: new InMemoryCache(),
});
