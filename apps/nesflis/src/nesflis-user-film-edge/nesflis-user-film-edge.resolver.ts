import { Resolver, Query, Args, ResolveField } from '@nestjs/graphql';
import { NesflisUserFilmService } from './nesflis-user-film-edge.service';
import { UserNesflisFilmEdge } from '../entities/nesflis-user-film-edge.entity';
import { Film } from '../entities/film.entity';
import { NesflisGenre } from '../entities/genre.entity';
import { NesflisClasification } from '../entities/clasification.entity';

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

  @ResolveField(() => Film)
  node(reference: { __typename: string; node: { id: string } }) {
    return { __typename: 'Film', id: reference?.node?.id };
  }

  @ResolveField(() => NesflisGenre)
  genre(reference: { __typename: string; node: { id: string } }) {
    return { __typename: 'FilmGenre', id: reference.node.id };
  }

  @ResolveField(() => NesflisClasification)
  clasification(reference: { __typename: string; node: { id: string } }) {
    return { __typename: 'FilmClasification', id: reference.node.id };
  }
}
