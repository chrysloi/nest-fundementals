import { DataSource } from 'typeorm';
import { Coffee } from './coffees/entities/coffee.entity';
import { Flavor } from './coffees/entities/flavor.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [],
  // logging: true
  // migrationsTableName: 'test',
  //   cli: {
  //     migrationsDir: 'src/migrations',
  //   },
});
