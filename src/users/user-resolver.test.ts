import { gql } from "apollo-server";
import { createTestClient } from "apollo-server-testing";
import nock from "nock";
import { createServer } from "../create-server";

describe("UserResolver", () => {
  it("returns all users", async () => {
    const usersQuery = gql`
      query Users {
        users {
          id
          name
        }
      }
    `;
    nock("https://jsonplaceholder.typicode.com/users")
      .get("/")
      .reply(200, [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
      ]);

    const server = await createServer();
    // eslint-disable-next-line jest/unbound-method
    const { query } = createTestClient(server);
    const response = await query({ query: usersQuery });

    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual({
      users: [
        { id: "1", name: "Leanne Graham" },
        { id: "2", name: "Ervin Howell" },
      ],
    });
  });

  it("returns user with the given id", async () => {
    const userQuery = gql`
      query User($userId: ID!) {
        user(userId: $userId) {
          id
          name
        }
      }
    `;
    nock("https://jsonplaceholder.typicode.com/users").get("/1").reply(200, {
      id: 1,
      name: "Leanne Graham",
    });

    const server = await createServer();
    // eslint-disable-next-line jest/unbound-method
    const { query } = createTestClient(server);
    const response = await query({
      query: userQuery,
      variables: { userId: "1" },
    });

    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual({ user: { id: "1", name: "Leanne Graham" } });
  });

  it("returns user with the given id and the posts of that user", async () => {
    const userQueryWithPosts = gql`
      query UserWithPosts($userId: ID!) {
        user(userId: $userId) {
          id
          name
          posts {
            id
            userId
            title
          }
        }
      }
    `;
    nock("https://jsonplaceholder.typicode.com/users").get("/1").reply(200, {
      id: 1,
      name: "Leanne Graham",
    });
    nock("https://jsonplaceholder.typicode.com/posts")
      .get("/")
      .reply(200, [
        {
          userId: 1,
          id: 1,
          title: "Post title",
        },
        {
          userId: 2,
          id: 2,
          title: "Some unrelated post title",
        },
      ]);

    const server = await createServer();
    // eslint-disable-next-line jest/unbound-method
    const { query } = createTestClient(server);
    const response = await query({
      query: userQueryWithPosts,
      variables: { userId: "1" },
    });

    expect(response.errors).toBeUndefined();
    expect(response.data).toEqual({
      user: {
        id: "1",
        name: "Leanne Graham",
        posts: [{ id: "1", userId: "1", title: "Post title" }],
      },
    });
  });
});
