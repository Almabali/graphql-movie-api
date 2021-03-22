import { Movie } from "src/entity/Movie"

export const findSimilarTo = (master: Movie, movies: Array<Movie>): Array<Movie> => {
    const moviesByScore = new Map<Number, Number>()
    movies.forEach(
        movie => {
            const score = scoreMovie(master, movie)
            if (score >= SIMILARITY_THRESHOLD) {
                moviesByScore.set(movie.id, score)
            }
        }
    )

    if (!moviesByScore || moviesByScore.size === 0) { return [] }

    const similarMovies = movies.filter(movie => moviesByScore.has(movie.id)).sort((a: Movie, b: Movie) => (moviesByScore.get(b.id) as number) - (moviesByScore.get(a.id) as number));
    
    return similarMovies
}

const scoreMovie = (master: Movie, movie: Movie): number => {
    let score = 0;
    if (master.title.includes(movie.title) || movie.title.includes(master.title)) {
        score += TITLE_WEIGHT
    }
    if (master.year === movie.year) {
        score += YEAR_WEIGHT
    }
    if (master.genreId === movie.genreId) {
        score += GENRE_WEIGHT
    }
    score += (commonActorCount(master, movie) * ACTOR_WEIGHT)

    return score
}

const commonActorCount = (master: Movie, movie: Movie): number => {
    const commonActorIds = master.actorIds.filter(actor => movie.actorIds.includes(actor))

    return commonActorIds.length
}

const ACTOR_WEIGHT: number = 1;
const GENRE_WEIGHT: number = 1;
const TITLE_WEIGHT: number = 1;
const YEAR_WEIGHT: number = 0;
const SIMILARITY_THRESHOLD: number = 1;