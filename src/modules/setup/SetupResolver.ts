import { Movie } from "../../entity/Movie";
import { Resolver, Mutation, Arg } from "type-graphql";
import { addActorsToDatabase, addGenresToDatabase, addMoviesToDatabase, clearDatabases } from "./SetupUtils";

@Resolver()
export class SetupResolver {

    @Mutation(() => [Movie])
    async setupDatabase(@Arg("clear", { nullable: true }) clear: boolean): Promise<Array<Movie>> {
        if (clear) {
            await clearDatabases()
        }

        await addMoviesToDatabase();
        await addActorsToDatabase();
        await addGenresToDatabase();

        const movies = await Movie.find();

        return movies;
    }
}
