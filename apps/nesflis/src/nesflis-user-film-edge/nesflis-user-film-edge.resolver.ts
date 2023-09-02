import { Resolver, Query, Args } from '@nestjs/graphql';
import { NesflisUserFilmService } from './nesflis-user-film-edge.service';
import { UserNesflisFilmEdge } from '../entities/nesflis-user-film-edge.entity';

@Resolver(() => UserNesflisFilmEdge)
export class NesflisUserFilmResolver {
  constructor(
    private readonly nesflisUserFilmService: NesflisUserFilmService,
  ) {}

  @Query(() => [UserNesflisFilmEdge], { name: 'nesflisUserFilms' })
  findAll() {
    return this.nesflisUserFilmService.findAll();
  }

  @Query(() => UserNesflisFilmEdge, { name: 'nesflisUserFilm' })
  findOne(@Args('id') id: string) {
    return this.nesflisUserFilmService.findOne(id);
  }
}
