import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { LanguageModule } from './language/language.module';
import { FilmClasificationModule } from './film-clasification/film-clasification.module';
import { FilmGenreModule } from './film-genre/film-genre.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    FilmClasificationModule,
    FilmGenreModule,
    LanguageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
