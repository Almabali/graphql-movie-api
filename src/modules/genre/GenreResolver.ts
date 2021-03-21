import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { Genre } from "../../entity/Genre";
import { GenreInput } from "./GenreInput";

@Resolver()
export class GenreResolver {
    @Query(() => Genre)
    async genre(@Arg("id", () => Int) id: number): Promise<Genre | undefined> {
        const genre = await Genre.findOne(id);
        return genre
    }

    @Query(() => [Genre])
    async genres(): Promise<Genre[]> {
        const genres = await Genre.find();

        return genres;
    }

    @Mutation(() => Genre)
    async addGenre(@Arg("input")
    {
        name,
        description
    }: GenreInput): Promise<Genre> {
        const genre = await Genre.create({
            name,
            description
        }).save();

        return genre;
    }
}
