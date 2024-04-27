import { Test, TestingModule } from '@nestjs/testing';
import { IluvcoffeeController } from './iluvcoffee.controller';
import { IluvcoffeeService } from './iluvcoffee.service';

describe('IluvcoffeeController', () => {
  let iluvcoffeeController: IluvcoffeeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IluvcoffeeController],
      providers: [IluvcoffeeService],
    }).compile();

    iluvcoffeeController = app.get<IluvcoffeeController>(IluvcoffeeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(iluvcoffeeController.getHello()).toBe('Hello World!');
    });
  });
});
