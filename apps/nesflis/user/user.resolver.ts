import { Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { UserService } from './nesflis-user.service';
import { User } from '../src/entities/user.entity';

@Resolver(() => User)
export class LanguageResolver {
  constructor(private readonly userService: UserService) {}

  @ResolveField(() => [User])
  language(@Parent() user: User): User[] {
    return this.userService.findByUserId(user.id);
  }
}
