import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

class DevelopmentConfigService {}
class ProductionConfigService {}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfigService
          : ProductionConfigService,
    },
    {
      provide: 'COFFEE_BRANDS',
      useFactory: async (dataSource: DataSource): Promise<string[]> => {
        // const coffeeBrands = await datasource.query('SELECT * ...');
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
        console.log('Async Await Factory');
        return coffeeBrands;
      },
      inject: [DataSource],
    },
  ],
})
export class CoffeesModule {}
