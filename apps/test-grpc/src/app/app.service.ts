import { Injectable } from '@nestjs/common';
import { UserById } from './interfaces/user-by-id.interface';
import { Users } from './interfaces/user-list.interface';
import { User } from './interfaces/user.interface';

@Injectable()
export class AppService {
  private users: User[] = [];
  get(data: UserById): User {
    const user = this.users.find((user) => user.id === data.id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  list(): Users {
    return { users: this.users };
  }

  create(data: User): User {
    this.users.push(data);
    return data;
  }
}
