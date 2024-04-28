import { Module } from '@nestjs/common';
import { IluvcoffeeController } from './iluvcoffee.controller';
import { IluvcoffeeService } from './iluvcoffee.service';
import { CoffeesController } from './coffees/coffees.controller';

@Module({
  imports: [],
  controllers: [IluvcoffeeController, CoffeesController],
  providers: [IluvcoffeeService],
})
export class IluvcoffeeModule {}
