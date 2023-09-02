import { ObjectType, Directive } from '@nestjs/graphql';
import { FilmInterface } from '../interface/film.interface';

@ObjectType({
  implements: () => [FilmInterface],
})
@Directive('@extends')
export class Film {}
