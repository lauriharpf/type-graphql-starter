import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./posts/post-resolver";
import { PostDataSource } from "./posts/post-data-source";
import { UserDataSource } from "./users/user-data-source";
import { UserResolver } from "./users/user-resolver";

export async function createServer(): Promise<ApolloServer> {
  // Create an executable schema: https://typegraphql.com/docs/bootstrap.html#create-executable-schema
  const schema = await buildSchema({
    resolvers: [PostResolver, UserResolver],
  });

  // Create an HTTP GraphQL endpoint: https://typegraphql.com/docs/bootstrap.html#create-an-http-graphql-endpoint
  return new ApolloServer({
    schema,
    playground: true,
    // Add DataSources to the app: https://www.apollographql.com/docs/apollo-server/data/data-sources/#adding-data-sources-to-apollo-server
    dataSources: () => ({
      postDataSource: new PostDataSource(),
      userDataSource: new UserDataSource(),
    }),
  });
}
