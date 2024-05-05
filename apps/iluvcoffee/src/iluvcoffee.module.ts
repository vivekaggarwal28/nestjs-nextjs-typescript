import { Module } from '@nestjs/common';
import { IluvcoffeeController } from './iluvcoffee.controller';
import { IluvcoffeeService } from './iluvcoffee.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [CoffeesModule],
  controllers: [IluvcoffeeController],
  providers: [IluvcoffeeService],
})
export class IluvcoffeeModule {}
