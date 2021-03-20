import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Movie } from "../../entity/Movie";
import { MovieInput } from "./MovieInput";

@Resolver()
export class MovieResolver {
    @Query(() => String)
    hello(): string {
        return "hello user";
    }

    @Query(() => [Movie])
    async movies(): Promise<Movie[]> {
        const movies = await Movie.find();

        return movies;
    }

    @Mutation(() => Movie)
    async addMovie(@Arg("input")
    {
        title,
        year,
        categoryId,
        actorIds
    }: MovieInput): Promise<Movie> {
        const movie = await Movie.create({
            title,
            year,
            categoryId,
            actorIds
        }).save();

        return movie;
    }
}
