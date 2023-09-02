import { Resolver, Query, Args } from '@nestjs/graphql';
import { FilmClasification } from '../entities/film-clasification.entity';
import { FilmClasificationService } from './film-clasification.service';

@Resolver(() => FilmClasification)
export class FilmClasificationResolver {
  constructor(
    private readonly filmClasificationService: FilmClasificationService,
  ) {}

  @Query(() => [FilmClasification], { name: 'FilmClasifications' })
  findAll() {
    return this.filmClasificationService.findAll();
  }

  @Query(() => FilmClasification, { name: 'FilmClasification' })
  findOne(@Args('id') id: string) {
    return this.filmClasificationService.findOne(id);
  }
}
