import { Injectable } from '@nestjs/common';

import { BookRepositoryImpl } from '../../../repositories';
import { BookEntity, IHandler } from '../../../../domain';
import { GetAllBooksCommand } from './Command';

@Injectable()
export class GetAllBooksHandler
  implements IHandler<GetAllBooksCommand, BookEntity[]>
{
  constructor(private readonly bookRepositoryImpl: BookRepositoryImpl) {}

  async execute(command: GetAllBooksCommand): Promise<BookEntity[]> {
    return await this.bookRepositoryImpl.getAllBooks();
  }
}
