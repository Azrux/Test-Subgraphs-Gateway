import { registerEnumType } from '@nestjs/graphql';

export enum FilmTypeEnum {
  MOVIE = 'MOVIE',
  SERIE = 'SERIE',
  DOCUMENTARY = 'DOCUMENTARY',
}

registerEnumType(FilmTypeEnum, {
  name: 'FilmTypeEnum',
});
