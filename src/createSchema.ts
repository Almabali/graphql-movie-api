import { buildSchema } from "type-graphql";
import { UserResolver } from "./modules/user/UserResolver";
import { ChangePasswordResolver } from "./modules/user/ChangePasswordResolver";
import { ConfirmUserResolver } from "./modules/user/ConfirmUserResolver";
import { ForgotPasswordResolver } from "./modules/user/ForgotPasswordResolver";
import { LoginResolver } from "./modules/user/LoginResolver";
import { LogoutResolver } from "./modules/user/LogoutResolver";
import { MeResolver } from "./modules/user/MeResolver";
import { CreateUser } from "./modules/user/CreateUserResolver";
import { MovieResolver } from "./modules/movie/MovieResolver";
import { GenreResolver } from "./modules/genre/GenreResolver";
import { ActorResolver } from "./modules/actor/ActorResolver";

export const createSchema = async () =>
    await buildSchema({
        resolvers: [
            UserResolver,
            ChangePasswordResolver,
            ConfirmUserResolver,
            ForgotPasswordResolver,
            LoginResolver,
            LogoutResolver,
            MeResolver,
            CreateUser,
            MovieResolver,
            GenreResolver,
            ActorResolver
        ]
    });
