import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AuthorEntity, BookEntity } from '../../../domain';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import {
  BookRepositoryImpl,
  AuthorRepositoryImpl,
  CreateNewBookValidator,
  CreateNewBookHandler,
  GetAllBooksHandler,
} from '../../../application';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity, BookEntity])],
  controllers: [BookController],
  providers: [
    AuthorRepositoryImpl,
    BookRepositoryImpl,
    CreateNewBookValidator,
    CreateNewBookHandler,
    GetAllBooksHandler,
    BookService,
  ],
})
export class BookModule {}
