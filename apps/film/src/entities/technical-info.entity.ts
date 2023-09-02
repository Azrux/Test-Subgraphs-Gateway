import { Field, ObjectType, Directive } from '@nestjs/graphql';

@ObjectType()
export class TechnicalInfo {
  @Directive('@shareable')
  @Field(() => String)
  duration?: string;

  @Directive('@shareable')
  @Field(() => String)
  director!: string;

  @Directive('@shareable')
  @Field(() => [String])
  mainActors!: string[];

  @Directive('@shareable')
  @Field(() => String)
  launchYear!: string;

  @Directive('@shareable')
  @Field(() => String)
  country!: string;
}
