import { Module } from '@nestjs/common';
import { MyLibrary2Service } from './my-library-2.service';

@Module({
  providers: [MyLibrary2Service],
  exports: [MyLibrary2Service],
})
export class MyLibrary2Module {}
