import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType('ExternalFilm')
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Film {
  @Field(() => ID)
  @Directive('@external')
  id: string;
}
