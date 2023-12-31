import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class NesflisGenre {
  @Field(() => ID)
  id: string;
}
