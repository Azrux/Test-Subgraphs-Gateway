import { Injectable } from '@nestjs/common';
import { FilmGenre } from '../entities/film-genre.entity';

@Injectable()
export class FilmGenreService {
  private readonly filmGenres: FilmGenre[] = [
    {
      id: '1',
      name: 'Action',
    },
    {
      id: '2',
      name: 'Adventure',
    },
    {
      id: '3',
      name: 'Animation',
    },
    {
      id: '4',
      name: 'Comedy',
    },
    {
      id: '5',
      name: 'Crime',
    },
  ];

  findAll() {
    return this.filmGenres;
  }

  findOne(id: string) {
    return this.filmGenres.find((filmGenre) => filmGenre.id === id);
  }
}
