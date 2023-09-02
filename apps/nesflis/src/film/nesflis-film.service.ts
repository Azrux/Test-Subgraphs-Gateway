import { Injectable } from '@nestjs/common';
import { NesflisFilm } from '../entities/nesflis-film.entity';

@Injectable()
export class NesflisFilmService {
  private readonly nesflisFilm: NesflisFilm[] = [
    {
      id: '1',
    },
    {
      id: '2',
    },
  ];

  findAll() {
    return this.nesflisFilm;
  }

  findOne(id: string) {
    return this.nesflisFilm.find((film) => film.id === id);
  }

  findByFilmId(filmId: string) {
    return this.nesflisFilm.filter((film) => film.id === filmId);
  }
}
