import { Injectable } from '@nestjs/common';

@Injectable()
export class IluvcoffeeService {
  getHello(): string {
    return 'Hello World!';
  }
}
