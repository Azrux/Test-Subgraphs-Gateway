import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { NesflisFilmModule } from './film/nesflis-film.module';
import { UserModule } from '../user/nesflis-user.module';
import { NesflisUserFilmModule } from './nesflis-user-film-edge/nesflis-user-film-edge.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    NesflisUserFilmModule,
    NesflisFilmModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
