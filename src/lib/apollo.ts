import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl57d6gv94hbu01ug24dz2t24/master",
  cache: new InMemoryCache(),
});
