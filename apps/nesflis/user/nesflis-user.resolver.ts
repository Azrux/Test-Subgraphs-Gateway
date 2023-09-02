import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  ResolveReference,
} from '@nestjs/graphql';
import { UserService } from './nesflis-user.service';
import { User as NesflisUser } from '../src/entities/nesflis-user.entity';
import { User } from '../src/entities/user.entity';

@Resolver(() => NesflisUser)
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => [NesflisUser], { name: 'nesflisUsers' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => NesflisUser, { name: 'nesflisUser' })
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ResolveField(() => User)
  user(@Parent() user: User) {
    return { __typename: 'User', id: user.id };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): User {
    return this.usersService.findOne(reference.id);
  }
}
