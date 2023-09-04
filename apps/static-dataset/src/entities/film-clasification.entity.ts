import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class FilmClasification {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  type!: string;

  @Field(() => String)
  label!: string;
}
