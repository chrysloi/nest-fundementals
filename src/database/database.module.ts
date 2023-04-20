import { DynamicModule, Module } from '@nestjs/common';
import { createConnection, ConnectOptions, ConnectionOptions } from 'typeorm';

@Module({})
export class DatabaseModule {
  static Register(options: ConnectionOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: createConnection(options),
        },
      ],
    };
  }
}
