import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://pure-castle-14648.herokuapp.com/graphql',
  request: (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token || ''
      }
    });
  }
});

export async function gqlQuery(query) {
  const result = await client.query({ query });
  return result.data;
}

export async function gqlMutate(mutation, variables) {
  const result = await client.mutate({ mutation, variables });
  return result.data;
}
