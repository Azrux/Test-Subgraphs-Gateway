import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class FilmClasification {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  type!: string;

  @Field(() => String)
  label!: string;
}
