import { NestFactory } from '@nestjs/core';
import { IluvcoffeeModule } from './iluvcoffee.module';

async function bootstrap() {
  const app = await NestFactory.create(IluvcoffeeModule);
  await app.listen(3000);
}
bootstrap();
