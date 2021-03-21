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

    @Field()
    genre(@Root() parent: Movie): Genre {
        return {id: 1, name: "Adventure", description: parent.title} as Genre // TODO
    }

    @Field(() => [Int])
    @Column("int", { array: true })
    actorIds: Array<number>;  

    @Field(() => [Actor], { nullable: true })
    actors(@Root() parent: Movie): Actor[] {
        console.log(parent)
        return []; // TODO
    }
}
