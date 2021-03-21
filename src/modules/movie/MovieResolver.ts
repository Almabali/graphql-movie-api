import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { Movie } from "../../entity/Movie";
import { MovieInput } from "./MovieInput";
import { MovieSearchInput } from "./MovieSearchInput";
import { ActorSearchInput, IsMatching } from "../actor/ActorSearchInput";

@Resolver()
export class MovieResolver {
    @Query(() => Movie)
    async movie(@Arg("id", () => Int) id: number): Promise<Movie | undefined> {
        const movie = await Movie.findOne(id);
        return movie
    }

    @Query(() => [Movie])
    async movies(@Arg("input", () => MovieSearchInput, { nullable: true }) input: MovieSearchInput): Promise<Movie[]> {
        let movies = await Movie.find();
        if (!input) { return movies }

        if (input.title) {
            movies = movies
                .filter(movie => input.title ? movie.title.includes(input.title) : true)
        }

        if (input.actors) {
            movies = await asyncFilter(movies, input.actors, AreActorsInMovie)
        }

        return movies
    }

    @Mutation(() => Movie)
    async addMovie(@Arg("input")
    {
        title,
        year,
        genreId,
        actorIds
    }: MovieInput): Promise<Movie> {
        const movie = await Movie.create({
            title,
            year,
            genreId,
            actorIds
        }).save();

        return movie;
    }
}

async function AreActorsInMovie(searchedActors: ActorSearchInput[], movie: Movie): Promise<boolean> {
    const movieActorList = await movie.actors(movie)

    return searchedActors.every(searchedActor =>
        movieActorList.some(actor =>
            IsMatching(searchedActor, actor)
        ))
}

const asyncFilter = async (movies: any, searchedActors: ActorSearchInput[], predicate: (sa: ActorSearchInput[], m: Movie) => Promise<boolean>): Promise<Array<Movie>> =>
    movies.reduce(async (filteredMovies: Array<Movie>, movie: Movie) =>
        await predicate(searchedActors, movie) ? [...await filteredMovies, movie] : filteredMovies
        , []);