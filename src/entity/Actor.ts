import { ObjectType, Field, ID, Root } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Actor extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text")
    firstName: string;

    @Field()
    @Column("text")
    lastName: string;

    @Field({ nullable: true })
    fullName(@Root() parent: Actor): String {
        return `${parent.firstName} ${parent.lastName}`;
    }
}
