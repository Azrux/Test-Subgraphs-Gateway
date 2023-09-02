import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class FilmGenre {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;
}
