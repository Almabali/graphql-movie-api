import { ObjectType, Field, ID, Root, Int } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./Actor";
import { Genre } from "./Genre";

@ObjectType()
@Entity()
export class Movie extends BaseEntity {
    @Field(() => ID)    
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text")
    title: string;

    @Field()
    @Column("int")
    year: number;

    @Field()
    @Column("int")
    genreId: number;

    @Field(() => Genre)
    async genre(@Root() parent: Movie): Promise<Genre | undefined> {
        return await Genre.findOne(parent.genreId)
    }

    @Field(() => [Int])
    @Column("int", { array: true })
    actorIds: Array<number>;  

    @Field(() => [Actor], { nullable: true })
    async actors(@Root() parent: Movie): Promise<Actor[]> {
        return await Actor.findByIds(parent.actorIds)
    }
}
