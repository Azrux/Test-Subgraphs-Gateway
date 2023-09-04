import { Directive, ObjectType } from '@nestjs/graphql';
import { FilmInterface } from '../interface/film.interface';
import { FilmClasification } from './film-clasification.entity';
import { SupportedLanguage } from './supported-language.entity';
import { FilmGenre } from './genre-entity';
import { TechnicalInfo } from './technical-info.entity';

@ObjectType({
  implements: () => [FilmInterface],
})
@Directive('@key(fields: "id")')
export class Film {
  id: string;
  title: string;
  description: string;
  rating?: number;
  type: string;
  image: string;
  trailer?: string;
  clasification: FilmClasification;
  supportedLanguages: SupportedLanguage[];
  supportedSubtitleLanguages: SupportedLanguage[];
  genre: FilmGenre[];
  technicalInfo: TechnicalInfo;
}
