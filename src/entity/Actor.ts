import { ObjectType, Field, ID, Root } from "type-graphql";

@ObjectType()
export class Actor {
    @Field(() => ID)
    id: number;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field({ nullable: true })
    fullName(@Root() parent: Actor): String {
        return `${parent.firstName} ${parent.lastName}`;
    }
}
