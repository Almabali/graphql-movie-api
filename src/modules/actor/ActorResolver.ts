import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { Actor } from "../../entity/Actor";
import { ActorInput } from "./ActorInput";
import { ActorSearchInput, IsMatching } from "./ActorSearchInput";

@Resolver()
export class ActorResolver {
    @Query(() => Actor)
    async actor(@Arg("id", () => Int) id: number): Promise<Actor | undefined> {
        const actor = await Actor.findOne(id);
        return actor
    }

    @Query(() => [Actor])
    async actors(
        @Arg("input", { nullable: true }) input: ActorSearchInput
    ): Promise<Actor[]> {
        const actors = await Actor.find();
        if (!input) { return actors }

        return actors.filter(actor =>
            IsMatching(input, actor)
        );
    }

    @Mutation(() => Actor)
    async addActor(@Arg("input")
    {
        firstName,
        lastName
    }: ActorInput): Promise<Actor> {
        const actor = await Actor.create({
            firstName,
            lastName
        }).save();

        return actor;
    }
}
