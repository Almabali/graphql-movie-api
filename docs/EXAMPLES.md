mutation {addMovie(
  input: {title: "Terminator", year:1992, actorIds: [3], categoryId: 2}
) {
  id
}}

mutation { addGenre (input: {name:"Science Fiction", description:"Future, technology and science."}) {
  id
}}

mutation {addActor (input: {firstName: "Sylvester", lastName: "Stallone"}) 
  {id
  fullName
  }}

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

{
  genres {
    id
    name
    description
  }
}

{ actors {
  id
  firstName
  lastName
  fullName
} }

{actor(id: 2) {
  id
  fullName
}}

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

query {
  movies(input: {actors: [{firstName: "Sylvester"}]}) {
    id
    title
    year
    actors {
      fullName
    }
  }
}

query {
  actors (input: {firstName: "y"}){
    id
    fullName
    movies {
      title
      actors{
        fullName
      }
    }
  }
}

query {
  movies(input: {title:"Harry Potter", actors: [{firstName: "Viggo"}]}) {
    id
    title
    year
    
    actors {
      fullName
    }
  }
}