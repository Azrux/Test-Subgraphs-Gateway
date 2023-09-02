import { Injectable } from '@nestjs/common';
import { User } from '../src/entities/nesflis-user.entity';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: '1',
      defaultNesflisFilmLanguage: {
        id: '1',
      },
      subscription: {
        isSuscribed: false,
      },
    },
    {
      id: '2',
      viewHistory: [
        {
          node: {
            id: '1',
          },
          viewDate: ['2021-01-01:00:00:00'],
        },
        {
          node: {
            id: '2',
          },
          viewDate: ['2021-01-02:00:00:00'],
        },
      ],
      defaultNesflisFilmLanguage: {
        id: '2',
      },
      subscription: {
        isSuscribed: true,
        paidState: 'paid',
        dueDate: '2021-01-01:00:00:00',
      },
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  findByUserId(userId: string) {
    return this.users.filter((user) => user.id === userId);
  }
}
