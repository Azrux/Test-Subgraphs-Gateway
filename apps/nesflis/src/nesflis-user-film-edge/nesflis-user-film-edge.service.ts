import { UserNesflisFilmEdge } from '../entities/nesflis-user-film-edge.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NesflisUserFilmService {
  private readonly nesflisUserFilm: UserNesflisFilmEdge[] = [
    {
      node: {
        id: '1',
      },
      viewDate: ['2021-01-01:00:00:00'],
    },
    {
      node: {
        id: '2',
      },
      viewDate: ['2021-01-02:00:00:00'],
    },
  ];

  findAll() {
    return this.nesflisUserFilm;
  }

  findOne(id: string) {
    return this.nesflisUserFilm.find((film) => film.node.id === id);
  }
}
