import { Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { Language } from './entities/language.entity';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Resolver(() => Language)
export class LanguageResolver {
  constructor(private readonly userService: UserService) {}

  @ResolveField(() => [User])
  language(@Parent() language: Language): User[] {
    return this.userService.findByLanguageId(language.id);
  }
}
