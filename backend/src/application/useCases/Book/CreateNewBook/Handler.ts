import { Injectable } from '@nestjs/common';

import { BookEntity, IHandler } from '../../../../domain';
import {
  BookRepositoryImpl,
  AuthorRepositoryImpl,
} from '../../../repositories';

import { CreateNewBookValidator } from './Validator';
import { CreateNewBookCommand } from './Command';

@Injectable()
export class CreateNewBookHandler
  implements IHandler<CreateNewBookCommand, BookEntity>
{
  constructor(
    private readonly createNewBookValidator: CreateNewBookValidator,
    private readonly authorRepositoryImpl: AuthorRepositoryImpl,
    private readonly bookRepositoryImpl: BookRepositoryImpl,
  ) {}

  async execute(command: CreateNewBookCommand): Promise<BookEntity> {
    await this.createNewBookValidator.validate(command);
    const authorsSet = Array.from(new Set(command.authors));
    const authors = await this.authorRepositoryImpl.getByIds(authorsSet);

    const book = this.bookRepositoryImpl.adaptCreateNewBookCommandToEntity(
      command,
      authors,
    );

    await this.bookRepositoryImpl.createNewBook(book);

    return book;
  }
}
