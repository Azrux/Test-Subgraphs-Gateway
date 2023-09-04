import { ObjectType, Field, ID } from '@nestjs/graphql';
import { FilmInterface } from '../../../film/src/interface/film.interface';
import { SupportedLanguage } from 'apps/film/src/entities/supported-language.entity';
import { FilmClasification } from 'apps/film/src/entities/film-clasification.entity';
import { FilmGenre } from 'apps/film/src/entities/genre-entity';
import { TechnicalInfo } from 'apps/film/src/entities/technical-info.entity';

@ObjectType({
  implements: () => [FilmInterface],
})
export class NesflisFilm {
  @Field(() => ID)
  id!: string;

  filmId?: string;
  title?: string;
  description?: string;
  rating?: number;
  type?: string;
  image?: string;
  trailer?: string;
  clasification?: FilmClasification;
  supportedLanguages?: SupportedLanguage[];
  supportedSubtitleLanguages?: SupportedLanguage[];
  genre?: FilmGenre[];
  technicalInfo?: TechnicalInfo;
}
