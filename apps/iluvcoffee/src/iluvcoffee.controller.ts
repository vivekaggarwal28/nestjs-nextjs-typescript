import { Controller, Get } from '@nestjs/common';
import { IluvcoffeeService } from './iluvcoffee.service';

@Controller()
export class IluvcoffeeController {
  constructor(private readonly iluvcoffeeService: IluvcoffeeService) {}

  @Get()
  getHello(): string {
    return this.iluvcoffeeService.getHello();
  }
}
