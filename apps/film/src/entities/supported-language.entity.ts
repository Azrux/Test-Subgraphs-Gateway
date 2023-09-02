import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class SupportedLanguage {
  @Field(() => ID)
  @Directive('@external')
  id: string;
}
