import { Resolver, Query, Args } from '@nestjs/graphql';
import { FilmGenre } from '../entities/film-genre.entity';
import { FilmGenreService } from './film-genre.service';

@Resolver(() => FilmGenre)
export class FilmGenreResolver {
  constructor(private readonly filmGenreService: FilmGenreService) {}

  @Query(() => [FilmGenre], { name: 'filmGenres' })
  findAll() {
    return this.filmGenreService.findAll();
  }

  @Query(() => FilmGenre, { name: 'filmGenre' })
  findOne(@Args('id') id: string) {
    return this.filmGenreService.findOne(id);
  }
}
