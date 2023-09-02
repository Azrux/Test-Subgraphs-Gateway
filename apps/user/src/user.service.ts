import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: '1',
      email: 'email@email.com',
      password: 'password',
      profileData: {
        firstName: 'John',
        lastName: 'Doe',
        image: 'https://i.pravatar.cc/300',
      },
      language: {
        id: '1',
      },
    },
    {
      id: '2',
      email: 'email2@email.com',
      password: 'password2',
      profileData: {
        firstName: 'Jane',
        lastName: 'Doe',
        image: 'https://i.pravatar.cc/300',
      },
      language: {
        id: '2',
      },
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  findByLanguageId(languageId: string) {
    return this.users.filter((user) => user.language.id === languageId);
  }
}
