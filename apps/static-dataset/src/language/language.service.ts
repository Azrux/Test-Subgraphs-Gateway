import { Injectable } from '@nestjs/common';
import { Language } from '../entities/language.entity';

@Injectable()
export class LanguageService {
  private readonly languages: Language[] = [
    {
      id: '1',
      name: 'English',
    },
    {
      id: '2',
      name: 'Spanish',
    },
  ];

  findAll() {
    return this.languages;
  }

  findOne(id: string) {
    return this.languages.find((language) => language.id === id);
  }
}
