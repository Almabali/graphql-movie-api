import { ObjectType, Field, ID, Root } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./Movie";

@ObjectType()
@Entity()
export class Genre extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text")
    name: string;

    @Field()
    @Column("text")
    description: string;

    @Field(() => [Movie], { nullable: true })
    async movies(@Root() parent: Genre): Promise<Movie[]> {
        const allMovies = await Movie.find();
        return allMovies.filter(movie => movie.genreId === parent.id)
    }
}
