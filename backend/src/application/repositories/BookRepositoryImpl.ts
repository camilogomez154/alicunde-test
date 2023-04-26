import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BookEntity, IBookRepository } from '../../domain';
import { CreateNewBookCommand } from '../useCases/Book';
import { AuthorEntity } from '../../domain/entities/Author.entity';

@Injectable({ scope: Scope.REQUEST })
export class BookRepositoryImpl implements IBookRepository<BookEntity> {
  constructor(
    @InjectRepository(BookEntity)
    readonly repository: Repository<BookEntity>,
  ) {}

  adaptCreateNewBookCommandToEntity(
    { title, chapters, pages }: CreateNewBookCommand,
    authors: AuthorEntity[],
  ): BookEntity {
    return this.repository.create({
      chapters,
      authors,
      title,
      pages,
    });
  }

  async createNewBook(book: BookEntity): Promise<void> {
    await this.repository.save(book);
  }

  getAllBooks(): Promise<BookEntity[]> {
    return this.repository.find();
  }
}
