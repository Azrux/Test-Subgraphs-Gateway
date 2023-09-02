import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SubscriptionState {
  @Field(() => Boolean)
  isSuscribed: boolean;

  @Field(() => String, { defaultValue: 'pending' })
  paidState?: string;

  @Field(() => String, { nullable: true })
  dueDate?: string;
}
