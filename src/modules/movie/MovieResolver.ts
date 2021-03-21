import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Movie } from "../../entity/Movie";
import { MovieInput } from "./MovieInput";

@Resolver()
export class MovieResolver {
    @Query(() => [Movie])
    async movies(): Promise<Movie[]> {
        const movies = await Movie.find();

        return movies;
    }

    @Query(() => Movie)
    async movie(@Arg("input") id: number): Promise<Movie | undefined> {
        const movie = await Movie.findOne(id);
        return movie
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
