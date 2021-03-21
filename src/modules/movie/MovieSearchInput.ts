import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { ActorSearchInput } from "../actor/ActorSearchInput";

@InputType()
export class MovieSearchInput {
    @Field({nullable: true})
    @Length(3, 255)
    title: string;

    @Field(() => [ActorSearchInput], {nullable: true})
    actors: ActorSearchInput[];
}