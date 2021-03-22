# Example queries and usage

## Setup

To setup the database from scratch or reset it to the pre-defined movies, use the following mutator:
```
mutation { setupDatabase(clear: true) {
 id
}}
```
Parameter clear defines whether the DB should be cleared before adding the predefined movies or not. clear: true is hence preferred.

## Querying movies

To query movies, write a new Query, with any of the fields shown in the example:
```
query { movies {id
  title
  year
  actorIds
  actors {fullName}
  genreId
  genre{
	id
	name
	description
  }}
}
```
The same can be done for actors and genres. For that query, refer the auto-generated [DOCs in GraphiQL](./Graphiql_docs.PNG).

## Adding new movies, actors or genres

To add new enitities, write a Mutation. Mutations are listed in the Docs as well.
```
mutation {addMovie(
  input: {title: "Terminator", year:1992, actorIds: [3], genreId: 2}
) {
  id
  title
}}
```

## Searching for movies

Movies might be searched by title or actors. Searching by both parameters means that both MUST be found for a result.
```
query {
  movies(input: {title: "Two Tower" actors: [{firstName: "Viggo"}]}) {
    id
    title
    year
    actors {
      fullName
    }
  }
}
```

## Wikipedia search

This API allows for a basic wikipedia search as well. Based on the ID of a movie, the following fields can be retrieved:
```
query {wiki(id: 5) {
  movie {id
  title
  }
  wikiLink
  wikiTitle
  wikiFirstParagraph
}}
```

## Appendix

### Some other queries and mutations I've used:
```
mutation { addGenre (input: {name:"Science Fiction", description:"Future, technology and science."}) {
  id
}}
```
```
mutation {addActor (input: {firstName: "Sylvester", lastName: "Stallone"}) 
  {id
  fullName
  }}
```
```
query {
  movies {
    id
    title
    year
    genre {
      id
      name
    }
  }
}
```
```
{
  genres {
    id
    name
    description
  }
}
```
```
{ actors {
  id
  firstName
  lastName
  fullName
} }
```
```
{actor(id: 2) {
  id
  fullName
}}
```
```
query {
  movies {
    id
    title
    year
    genre {
      id
      name
      description
    }
    actorIds
    actors {
      fullName
    }
  }
}
```
