# Homework: TypeGraphQL Movie API

TypeGraphQL homework of small mock movie database.

Based on this [https://github.com/tajpouria/typegraphql-nextjs-boilerplate](https://github.com/tajpouria/typegraphql-nextjs-boilerplate)

## Development bootstrap


### Install dependencies
```sh
> npm i
```
### Setup development infrastructure
```
> docker-compose up
```
Note: docker-compose might not start PostgresQL, just start it manually via Docker Desktop

### Starting the server
```
> npm start
```

### GraphiQL UI
```
localhost:4000/graphql
```
A graphiQL based UI is available for testing the GraphQL API.

## Example cases and usage
See [Examples](./docs/EXAMPLES.md)

## Requirements
See [Requirements](./docs/REQUIREMENTS.md)

## Tech Stack
 - [Typescript](https://www.typescriptlang.org/)
 - [typeORM](https://typeorm.io/#/)
 - [typeGraphQL](https://typegraphql.com/)
 - [apollo-express-server](https://www.apollographql.com/docs/apollo-server/v1/servers/express/)
 - [axios](https://github.com/axios/axios)
 