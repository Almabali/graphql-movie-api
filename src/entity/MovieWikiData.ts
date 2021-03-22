import { ObjectType, Field } from "type-graphql";
import { Movie } from "./Movie";

@ObjectType()
export class MovieWikiData {
    @Field(() => Movie)
    movie: Movie;

    @Field()
    wikiTitle: string

    @Field()
    wikiFirstParagraph: string

    @Field()
    wikiLink: string
}
