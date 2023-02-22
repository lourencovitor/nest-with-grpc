import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { AppService } from './app.service';
import { UserById } from './interfaces/user-by-id.interface';
import { Users } from './interfaces/user-list.interface';
import { User } from './interfaces/user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('UserService', 'Get')
  get(data: UserById): User {
    return this.appService.get(data);
  }

  @GrpcMethod('UserService', 'List')
  list(): Users {
    return this.appService.list();
  }

  @GrpcMethod('UserService', 'Create')
  create(data: User): User {
    return this.appService.create(data);
  }
}
