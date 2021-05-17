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

### Other commands

- `npm test` to run tests
- `npm test -- --coverage` to run tests and collect code coverage
- `npm run lint` to lint the project

## Template contents

- [TypeGraphQL and its dependencies](https://typegraphql.com/docs/installation.html)
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [Bootstrapping code to start the server](https://typegraphql.com/docs/bootstrap.html)
- Example resolvers and [Apollo REST Data Source](https://www.npmjs.com/package/apollo-datasource-rest)s (posts, users)
- Test infrastructure ([ts-jest](https://github.com/kulshekhar/ts-jest), [apollo-server-testing](https://www.apollographql.com/docs/apollo-server/testing/testing/) and [nock](https://www.npmjs.com/package/nock)) and example tests
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) for development (restarts app when code changes)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md) with [type-aware rules](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md)
- Github: Dependabot dependency updates

## Customizing for your project

After installing and experimenting with the template (see [Getting started](#getting-started)), customize it to suit your needs:

1. Set the `name`, `version`, `description`, `license` and `author` of your project in `package.json`
1. Run `npm install` to update `package-lock.json` with the new `package.json` contents
1. Customize or remove the project-specific files
   - `.github/ISSUE_TEMPLATE/*`
   - `README.md`
   - `CODE_OF_CONDUCT.md`
   - `CONTRIBUTING.md`
   - `LICENSE`
1. Run `git remote remove origin` in the project root directory to remove link to the template repository
1. Create a new repository, e.g. in Github
1. Run `git remote add origin YOUR_REPOSITORY_ADDESS` to link with your new repository
1. `git push -u origin master` to push the code

Remove the examples under `src/posts` and `src/users` when they are no longer useful for you.

## Versioning

According to the TypeGraphQL version in the template.
