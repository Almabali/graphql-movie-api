import { Movie } from "../../entity/Movie";

export class WikiSummary {
    movie: Movie;
    wikiLink: URL;
    imdbLink: URL;
    firstParagraph: string;
    fullContent: string;
}