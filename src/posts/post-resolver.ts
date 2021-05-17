import { Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../context";
import { Post } from "./post-type";

// Resolver with TypeGraphQL decorators: https://typegraphql.com/docs/resolvers.html
@Resolver(Post)
export class PostResolver {
  @Query(() => [Post])
  async posts(@Ctx() context: Context): Promise<Post[]> {
    return context.dataSources.postDataSource.getPosts();
  }
}
