import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Language {
  @Field(() => ID)
  @Directive('@external')
  id: string;
}
