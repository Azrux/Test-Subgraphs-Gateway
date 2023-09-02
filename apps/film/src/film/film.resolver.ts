import { Resolver, Query, ResolveReference, Args } from '@nestjs/graphql';
import { FilmService } from './film.service';
import { Film } from '../entities/film.entity';

@Resolver(() => Film)
export class FilmResolver {
  constructor(private readonly filmService: FilmService) {}

  @Query(() => [Film], { name: 'films' })
  findAll() {
    return this.filmService.findAll();
  }

  @Query(() => Film, { name: 'film' })
  findOne(@Args('id') id: string) {
    return this.filmService.findOne(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): Film {
    return this.filmService.findOne(reference.id);
  }
}
