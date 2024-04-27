import { Module } from '@nestjs/common';
import { IluvcoffeeController } from './iluvcoffee.controller';
import { IluvcoffeeService } from './iluvcoffee.service';

@Module({
  imports: [],
  controllers: [IluvcoffeeController],
  providers: [IluvcoffeeService],
})
export class IluvcoffeeModule {}
