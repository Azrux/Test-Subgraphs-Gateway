import { Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { NesflisFilmService } from './nesflis-film.service';
import { NesflisFilm } from '../entities/nesflis-film.entity';
import { Film } from '../entities/film.entity';

@Resolver(() => Film)
export class FilmResolver {
  constructor(private readonly nesflisFilmService: NesflisFilmService) {}

  @ResolveField(() => [NesflisFilm])
  nesflisFilms(@Parent() film: Film): NesflisFilm[] {
    return this.nesflisFilmService.findByFilmId(film.id);
  }
}
