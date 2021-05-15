import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./posts/post-resolver";
import { PostDataSource } from "./posts/post-data-source";
import { UserDataSource } from "./users/user-data-source";
import { UserResolver } from "./users/user-resolver";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  // Create an executable schema: https://typegraphql.com/docs/bootstrap.html#create-executable-schema
  const schema = await buildSchema({
    resolvers: [PostResolver, UserResolver],
  });

  // Create an HTTP GraphQL endpoint: https://typegraphql.com/docs/bootstrap.html#create-an-http-graphql-endpoint
  const server = new ApolloServer({
    schema,
    playground: true,
    // Add DataSources to the app: https://www.apollographql.com/docs/apollo-server/data/data-sources/#adding-data-sources-to-apollo-server
    dataSources: () => ({
      postDataSource: new PostDataSource(),
      userDataSource: new UserDataSource(),
    }),
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
