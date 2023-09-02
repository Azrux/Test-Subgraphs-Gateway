import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  ResolveReference,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Language } from './entities/language.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ResolveField(() => Language)
  language(@Parent() user: User) {
    return { __typename: 'Language', id: user.language.id };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): User {
    return this.usersService.findOne(reference.id);
  }
}
