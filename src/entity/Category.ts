import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Category {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    description: string;
}
