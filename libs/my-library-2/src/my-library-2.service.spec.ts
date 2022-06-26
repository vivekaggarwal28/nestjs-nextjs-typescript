import { Test, TestingModule } from '@nestjs/testing';
import { MyLibrary2Service } from './my-library-2.service';

describe('MyLibrary2Service', () => {
  let service: MyLibrary2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyLibrary2Service],
    }).compile();

    service = module.get<MyLibrary2Service>(MyLibrary2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
