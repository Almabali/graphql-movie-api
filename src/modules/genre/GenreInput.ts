import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class GenreInput {
    @Field()
    @Length(3, 255)
    name: string;

    @Field()
    description: string;
}
