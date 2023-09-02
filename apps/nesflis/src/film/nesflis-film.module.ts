import { Module } from '@nestjs/common';
import { NesflisFilmResolver } from './nesflis-film.resolver';
import { NesflisFilmService } from './nesflis-film.service';

@Module({
  imports: [],
  providers: [NesflisFilmResolver, NesflisFilmService],
})
export class NesflisFilmModule {}
