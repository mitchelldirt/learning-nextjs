import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export function withApollo(PageComponent) {
  const withApollo = (props) => {
    const client = new ApolloClient({
      uri: "http://localhost:3000/api/graphql",
      cache: new InMemoryCache(),
    });
    return (
      <ApolloProvider client={client}>
        <PageComponent {...props}/>
      </ApolloProvider>
    );
  };
  return withApollo;
}
