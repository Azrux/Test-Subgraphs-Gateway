import { ObjectType, Field, ID } from '@nestjs/graphql';
import { FilmInterface } from '../../../film/src/interface/film.interface';

@ObjectType({
  implements: () => [FilmInterface],
})
export class NesflisFilm {
  @Field(() => ID)
  id!: string;
}
