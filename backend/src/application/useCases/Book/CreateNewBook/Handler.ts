import { Injectable } from '@nestjs/common';

import { BookEntity, IHandler } from '../../../../domain';
import { BookRepositoryImpl } from '../../../repositories';

import { CreateNewBookValidator } from './Validator';
import { CreateNewBookCommand } from './Command';

@Injectable()
export class CreateNewBookHandler
  implements IHandler<CreateNewBookCommand, BookEntity>
{
  constructor(
    private readonly createNewBookValidator: CreateNewBookValidator,
    private readonly bookRepositoryImpl: BookRepositoryImpl,
  ) {}

  async execute(command: CreateNewBookCommand): Promise<BookEntity> {
    await this.createNewBookValidator.validate(command);
    const book =
      this.bookRepositoryImpl.adaptCreateNewBookCommandToEntity(command);
    await this.bookRepositoryImpl.createNewBook(book);
    return book;
  }
}
