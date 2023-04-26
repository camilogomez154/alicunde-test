import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookEntity } from '../../../domain';
import {
  BookRepositoryImpl,
  CreateNewBookValidator,
  CreateNewBookHandler,
  GetAllBooksHandler,
} from '../../../application';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [BookController],
  providers: [
    BookRepositoryImpl,
    CreateNewBookValidator,
    CreateNewBookHandler,
    GetAllBooksHandler,
    BookService,
  ],
})
export class BookModule {}
