import { InputType, Field, Int } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class MovieInput {
    @Field()
    @Length(3, 255)
    title: string;

    @Field()
    // @Length(4,5)
    year: number;

    @Field()
    genreId: number;

    @Field(() => [Int])
    actorIds: number[];
}
