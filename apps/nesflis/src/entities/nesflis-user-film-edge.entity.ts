import { ObjectType, Field } from '@nestjs/graphql';
import { NesflisFilm } from './nesflis-film.entity';

@ObjectType()
export class UserNesflisFilmEdge {
  @Field(() => NesflisFilm)
  node!: NesflisFilm;

  @Field(() => [String])
  viewDate!: string[];
}
