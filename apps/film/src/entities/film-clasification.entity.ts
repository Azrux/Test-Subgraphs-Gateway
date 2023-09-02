import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType('Clasification')
@Directive('@extends')
@Directive('@key(fields: "id")')
export class FilmClasification {
  @Field(() => ID)
  @Directive('@external')
  id: string;
}
