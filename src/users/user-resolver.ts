import {
  Arg,
  Ctx,
  FieldResolver,
  ID,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql";
import { Context } from "../context";
import { User } from "./user-type";

// Resolver with TypeGraphQL decorators: https://typegraphql.com/docs/resolvers.html
@Resolver(User)
export class UserResolver implements ResolverInterface<User> {
  @Query(() => [User])
  async users(@Ctx() context: Context): Promise<User[]> {
    return context.dataSources.userDataSource.getUsers();
  }

  // Query with an argument: https://typegraphql.com/docs/resolvers.html#arguments
  @Query(() => User)
  async user(
    @Arg("userId", () => ID) userId: number,
    @Ctx() context: Context
  ): Promise<User> {
    return context.dataSources.userDataSource.getUser(userId);
  }

  // Field resolver, see https://typegraphql.com/docs/resolvers.html#field-resolvers
  @FieldResolver()
  async posts(@Root() user: User, @Ctx() context: Context) {
    const allPosts = await context.dataSources.postDataSource.getPosts();
    return allPosts.filter((post) => post.userId === user.id);
  }
}
