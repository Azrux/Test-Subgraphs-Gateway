import { Module } from '@nestjs/common';
import { FilmGenreService } from './film-genre.service';
import { FilmGenreResolver } from './film-genre.resolver';

@Module({
  imports: [],
  providers: [FilmGenreResolver, FilmGenreService],
})
export class FilmGenreModule {}
