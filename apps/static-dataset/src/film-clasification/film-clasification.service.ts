import { Injectable } from '@nestjs/common';
import { FilmClasification } from '../entities/film-clasification.entity';

@Injectable()
export class FilmClasificationService {
  private readonly filmClasifications: FilmClasification[] = [
    {
      id: '1',
      type: 'G',
      label: 'General Audiences',
    },
    {
      id: '2',
      type: 'PG',
      label: 'Parental Guidance Suggested',
    },
    {
      id: '3',
      type: 'PG-13',
      label: 'Parents Strongly Cautioned',
    },
    {
      id: '4',
      type: 'R',
      label: 'Restricted',
    },
    {
      id: '5',
      type: 'NC-17',
      label: 'Adults Only',
    },
  ];

  findAll() {
    return this.filmClasifications;
  }

  findOne(id: string) {
    return this.filmClasifications.find(
      (filmClasification) => filmClasification.id === id,
    );
  }
}
