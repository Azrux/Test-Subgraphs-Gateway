import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { ProfileData } from './profile-data.entity';
import { Language } from './language.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  password!: string;

  @Field(() => ProfileData)
  profileData: ProfileData;

  @Field(() => Language, { nullable: true })
  language?: Language;
}
