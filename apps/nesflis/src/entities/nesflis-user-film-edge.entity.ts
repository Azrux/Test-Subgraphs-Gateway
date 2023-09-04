import { ObjectType, Field } from '@nestjs/graphql';
import { Film } from './film.entity';

@ObjectType()
export class UserNesflisFilmEdge {
  @Field(() => Film, { nullable: false })
  node!: Film;

  @Field(() => [String])
  viewDate!: string[];
}
