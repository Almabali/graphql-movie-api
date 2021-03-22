import { MovieInput } from "../../../modules/movie/MovieInput";

export const BOOT_MOVIES: Array<MovieInput> = [
    {title: "Star Wars: Episode IV – A New Hope", year: 1977, genreId: 1, actorIds: [1, 2, 3] },
    {title: "Star Wars: Episode V – The Empire Strikes Back", year: 1980, genreId: 1, actorIds: [1, 2, 3] },
    {title: "Star Wars: Episode VI – Return of the Jedi", year: 1983, genreId: 1, actorIds: [1, 2, 3] },
    {title: "Indiana Jones and the Last Crusade", year: 1983, genreId: 2, actorIds: [3] },
    {title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, genreId: 3, actorIds: [4, 5] },
    {title: "The Lord of the Rings: The Two Towers", year: 2002, genreId: 3, actorIds: [4, 5] },
    {title: "The Lord of the Rings: The Return of the King", year: 2003, genreId: 3, actorIds: [4, 5] },
]
