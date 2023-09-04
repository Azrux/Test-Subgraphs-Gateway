import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { FilmClasificationService } from './film-clasification.service';
import { FilmClasification } from '../entities/film-clasification.entity';

@Resolver(() => FilmClasification)
export class FilmClasificationResolver {
  constructor(
    private readonly filmClasificationService: FilmClasificationService,
  ) {}

  @Query(() => [FilmClasification], { name: 'filmClasifications' })
  findAll() {
    return this.filmClasificationService.findAll();
  }

  @Query(() => FilmClasification, { name: 'filmClasification' })
  findOne(@Args('id') id: string) {
    return this.filmClasificationService.findOne(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.filmClasificationService.findOne(reference.id);
  }
}
