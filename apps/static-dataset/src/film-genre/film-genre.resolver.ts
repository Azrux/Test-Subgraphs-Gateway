import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
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

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    console.log('resolveReference', reference);
    return this.filmGenreService.findOne(reference.id);
  }
}
