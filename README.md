# TypeGraphQL starter template

Starter template for bootstrapping a [TypeGraphQL](https://typegraphql.com/) + [Apollo Server](https://www.apollographql.com/docs/apollo-server/) GraphQL API. The purpose is to help getting started quickly with TypeGraphQL development by providing a runnable API with examples you can build on. Not endorsed by or affiliated with the TypeGraphQL team. Be sure to also check out the [TypeGraphQL documentation](https://typegraphql.com/docs/introduction.html) and [examples](https://typegraphql.com/docs/examples.html).

## Getting started

1. Install [Node.js](https://nodejs.org/) 14 or later.
1. `git clone https://github.com/lauriharpf/type-graphql-starter.git` to clone this repository
1. `npm install` in project root directory
1. `npm start` to start the server
1. Access Playground with browser, at `http://localhost:4000/` by default. Check _DOCS_ for the API definition and try running some queries, e.g.

```
query Posts {
  posts {
    id
    userId
    title
    body
  }
}
```

6. `CTRL-C` stops the server

Tests can be run with `npm test`

## Template contents

- [TypeGraphQL and its dependencies](https://typegraphql.com/docs/installation.html)
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [Bootstrapping code to start the server](https://typegraphql.com/docs/bootstrap.html)
- Example resolvers and [Apollo REST Data Source](https://www.npmjs.com/package/apollo-datasource-rest)s (posts, users)
- Test infrastructure ([ts-jest](https://github.com/kulshekhar/ts-jest), [apollo-server-testing](https://www.apollographql.com/docs/apollo-server/testing/testing/) and [nock](https://www.npmjs.com/package/nock)) and example tests
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) for development (restarts app when code changes)

## Versioning

According to the TypeGraphQL version in the template.
