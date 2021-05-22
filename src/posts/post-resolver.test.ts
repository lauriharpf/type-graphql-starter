import nock from "nock";
import { gql } from "apollo-server";
import { createServer } from "../create-server";
import { print } from "graphql";

describe("PostResolver", () => {
  it("returns all posts", async () => {
    const postsQuery = gql`
      query Posts {
        posts {
          id
          userId
          title
          body
        }
      }
    `;
    nock("https://jsonplaceholder.typicode.com/posts")
      .get("/")
      .reply(200, [
        {
          userId: 1,
          id: 1,
          title: "Post title",
          body: "Body\nof the\npost",
        },
      ]);

    const server = await createServer();
    const response = await server.executeOperation({
      query: print(postsQuery),
    });

    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual({
      posts: [
        {
          id: "1",
          userId: "1",
          title: "Post title",
          body: "Body\nof the\npost",
        },
      ],
    });
  });
});
