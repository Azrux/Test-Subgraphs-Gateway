import { Field, InterfaceType, ID } from '@nestjs/graphql';
import { FilmTypeEnum } from '../enum/film-type.enum';
import { FilmClasification } from '../entities/film-clasification.entity';
import { SupportedLanguage } from '../entities/supported-language.entity';
import { FilmGenre } from '../entities/genre-entity';
import { TechnicalInfo } from '../entities/technical-info.entity';

@InterfaceType()
export abstract class FilmInterface {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  description!: string;

  @Field(() => Number)
  rating?: number;

  @Field(() => FilmTypeEnum)
  type!: string;

  @Field(() => String)
  image!: string;

  @Field(() => String)
  trailer?: string;

  @Field(() => FilmClasification)
  clasification!: FilmClasification;

  @Field(() => [SupportedLanguage])
  supportedLanguages!: SupportedLanguage[];

  @Field(() => [SupportedLanguage])
  supportedSubtitleLanguages!: SupportedLanguage[];

  @Field(() => [FilmGenre])
  genre!: FilmGenre[];

  @Field(() => TechnicalInfo)
  technicalInfo!: TechnicalInfo;
}
