import { ID, Field, ObjectType } from "type-graphql";

// Type definition with TypeGraphQL decorators: https://typegraphql.com/docs/types-and-fields.html
@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;
  @Field(() => ID)
  userId: number;
  @Field()
  title: string;
  @Field()
  body: string;
}
