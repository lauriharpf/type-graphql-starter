import { Field, ID, ObjectType } from "type-graphql";
import { Post } from "../posts/post-type";

// Type definition with TypeGraphQL decorators: https://typegraphql.com/docs/types-and-fields.html
@ObjectType()
export class User {
  @Field(() => ID)
  id: number;
  @Field()
  name: string;
  @Field(() => [Post])
  posts: Post[];
}
