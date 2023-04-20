import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    return ['Buddy Brew', 'nescafe'];
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    // {
    //   provide: COFFEE_BRANDS,
    //   inject: [CoffeeBrandsFactory],
    //   useFactory: (brandsFactory: CoffeeBrandsFactory) =>
    //     brandsFactory.create(),
    // },
    {
      provide: COFFEE_BRANDS,
      inject: [CoffeeBrandsFactory],
      useFactory: async (connection: Connection): Promise<string[]> => {
        const coffeeBrands = await Promise.resolve(['Buddy Brew', 'nescafe']);
        return coffeeBrands;
      },
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
