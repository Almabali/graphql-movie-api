import { ObjectType, Field, ID, Root, Int } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./Actor";
import { Category } from "./Category";

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
    categoryId: number;

    @Field()
    category(@Root() parent: Movie): Category {
        return {id: 1, name: "Adventure", description: parent.title} // TODO
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
