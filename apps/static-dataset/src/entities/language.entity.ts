import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Language {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;
}
