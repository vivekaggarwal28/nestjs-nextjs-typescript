import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { IluvcoffeeModule } from './../src/iluvcoffee.module';

describe('IluvcoffeeController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [IluvcoffeeModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .set('Authorization', process.env.API_KEY)
      .expect(200)
      .expect('Hello NestJS!');
  });

  afterAll(async () => {
    await app.close();
  });
});
