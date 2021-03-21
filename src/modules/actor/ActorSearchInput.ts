import { InputType, Field } from "type-graphql";

@InputType()
export class ActorSearchInput {
    @Field({nullable: true})
    firstName: string;

    @Field({nullable: true})
    lastName: string;

    @Field({nullable: true})
    name: string;
}