import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AuthorModule, BookModule } from './infrastructure';
import { AuthorEntity, BookEntity } from './domain';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './.datasources/database.sqlite',
      entities: [AuthorEntity, BookEntity],
      synchronize: true,
      type: 'sqlite',
      logging: true,
    }),
    AuthorModule,
    BookModule,
  ],
})
export class AppModule {}
