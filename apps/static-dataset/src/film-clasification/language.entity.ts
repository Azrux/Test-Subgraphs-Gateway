import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Language {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;
}
