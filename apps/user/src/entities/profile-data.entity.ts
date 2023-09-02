import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ProfileData {
  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;

  @Field(() => String)
  image!: string;
}
