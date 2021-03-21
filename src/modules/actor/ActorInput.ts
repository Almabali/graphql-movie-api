import { InputType, Field } from "type-graphql";

@InputType()
export class ActorInput {
    @Field()
    firstName: string;

    @Field()
    lastName: string;
}
