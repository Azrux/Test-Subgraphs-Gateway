import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { UserNesflisFilmEdge } from './nesflis-user-film-edge.entity';
import { SubscriptionState } from './suscription-state.entity';
import { Language } from './language.entity';

@ObjectType('NesflisUser')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id!: string;

  @Field(() => [UserNesflisFilmEdge], { nullable: true })
  viewHistory?: UserNesflisFilmEdge[] | null;

  @Field(() => SubscriptionState)
  subscription?: SubscriptionState;

  @Field(() => Language)
  defaultNesflisFilmLanguage: Language;
}
