import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { NesflisFilmService } from './nesflis-film.service';
import { NesflisFilm } from '../entities/nesflis-film.entity';

@Resolver(() => NesflisFilm)
export class NesflisFilmResolver {
  constructor(private readonly nesflisFilmService: NesflisFilmService) {}

  @Query(() => [NesflisFilm], { name: 'nesflisFilms' })
  findAll() {
    return this.nesflisFilmService.findAll();
  }

  @Query(() => NesflisFilm, { name: 'nesflisFilm' })
  findOne(@Args('id') id: string) {
    return this.nesflisFilmService.findOne(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): NesflisFilm {
    return this.nesflisFilmService.findOne(reference.id);
  }
}
