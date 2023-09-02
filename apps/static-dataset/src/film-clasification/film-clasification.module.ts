import { Module } from '@nestjs/common';
import { FilmClasificationService } from './film-clasification.service';
import { FilmClasificationResolver } from './film-clasification.resolver';

@Module({
  imports: [],
  providers: [FilmClasificationResolver, FilmClasificationService],
})
export class FilmClasificationModule {}
