import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('list', () => {
    it('should return list users', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.list()).toEqual({ users: [] });
    });
  });

  describe('create', () => {
    it('should return list users', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.create({ id: 1, name: 'John', age: 23 })).toEqual({
        id: 1,
        name: 'John',
        age: 23,
      });
    });
  });
});
