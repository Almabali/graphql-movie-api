import { Actor } from "../../entity/Actor"
import { Genre } from "../../entity/Genre"
import { Movie } from "../../entity/Movie"
import { BOOT_ACTORS } from "./SetupData/ActorList"
import { BOOT_GENRES } from "./SetupData/GenreList"
import { BOOT_MOVIES } from "./SetupData/MovieList"

export const  addMoviesToDatabase = async() => {
    BOOT_MOVIES.forEach(async movieInput => await Movie.create(movieInput).save())
}

export const addActorsToDatabase = async () => {
    BOOT_ACTORS.forEach(async actorInput => await Actor.create(actorInput).save())
}

export const addGenresToDatabase = async () => {
    BOOT_GENRES.forEach(async genreInput => await Genre.create(genreInput).save())
}

export const clearDatabases = async () => {
    await Movie.getRepository().clear()
    await Actor.getRepository().clear()
    await Movie.getRepository().clear()
}
