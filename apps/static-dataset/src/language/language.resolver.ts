import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Language } from '../entities/language.entity';
import { LanguageService } from './language.service';

@Resolver(() => Language)
export class LanguageResolver {
  constructor(private readonly languageService: LanguageService) {}

  @Query(() => [Language], { name: 'languages' })
  findAll() {
    return this.languageService.findAll();
  }

  @Query(() => Language, { name: 'language' })
  findOne(@Args('id') id: string) {
    return this.languageService.findOne(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): Language {
    return this.languageService.findOne(reference.id);
  }
}
