import { InputType, Field } from "type-graphql";
import { Actor } from "../../entity/Actor";

@InputType()
export class ActorSearchInput {
    @Field({ nullable: true })
    firstName: string;

    @Field({ nullable: true })
    lastName: string;

    @Field({ nullable: true })
    name: string;
}

export function IsMatching(searchedActor: ActorSearchInput,actor: Actor): boolean {
    return  searchedActor.firstName ? actor.firstName.includes(searchedActor.firstName) : false ||
            searchedActor.lastName ? actor.lastName.includes(searchedActor.lastName) : false ||
            searchedActor.name ? actor.fullName(actor).includes(searchedActor.name) : false

}