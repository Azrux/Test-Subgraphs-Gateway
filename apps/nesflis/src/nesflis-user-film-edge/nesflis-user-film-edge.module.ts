import { Module } from '@nestjs/common';
import { NesflisUserFilmResolver } from './nesflis-user-film-edge.resolver';
import { NesflisUserFilmService } from './nesflis-user-film-edge.service';

@Module({
  imports: [],
  providers: [NesflisUserFilmResolver, NesflisUserFilmService],
})
export class NesflisUserFilmModule {}
