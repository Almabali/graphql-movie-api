import { buildSchema } from "type-graphql";
import { MovieResolver } from "./modules/movie/MovieResolver";
import { GenreResolver } from "./modules/genre/GenreResolver";
import { ActorResolver } from "./modules/actor/ActorResolver";
import { SetupResolver } from "./modules/setup/SetupResolver";

export const createSchema = async () =>
    await buildSchema({
        resolvers: [
            MovieResolver,
            GenreResolver,
            ActorResolver,
            SetupResolver
        ]
    });
