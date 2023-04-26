import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BookEntity, IBookRepository } from '../../domain';
import { CreateNewBookCommand } from '../useCases/Book';

@Injectable({ scope: Scope.REQUEST })
export class BookRepositoryImpl implements IBookRepository<BookEntity> {
  constructor(
    @InjectRepository(BookEntity)
    readonly repository: Repository<BookEntity>,
  ) {}

  adaptCreateNewBookCommandToEntity({
    title,
    chapters,
    pages,
    authors,
  }: CreateNewBookCommand): BookEntity {
    const authorsSet = Array.from(new Set(authors));
    return this.repository.create({
      title,
      chapters,
      pages,
      authors: authorsSet,
    });
  }

  async createNewBook(book: BookEntity): Promise<void> {
    await this.repository.save(book);
  }

  getAllBooks(): Promise<BookEntity[]> {
    return this.repository.find();
  }
}
