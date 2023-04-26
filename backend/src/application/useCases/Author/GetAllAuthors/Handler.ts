import { Injectable } from '@nestjs/common';

import { AuthorRepositoryImpl } from '../../../repositories';
import { AuthorEntity, IHandler } from '../../../../domain';
import { GetAllAuthorsCommand } from './Command';

@Injectable()
export class GetAllAuthorsHandler
  implements IHandler<GetAllAuthorsCommand, AuthorEntity[]>
{
  constructor(private readonly AuthorReposiroty: AuthorRepositoryImpl) {}

  async execute(command: GetAllAuthorsCommand): Promise<AuthorEntity[]> {
    return await this.AuthorReposiroty.getAllAuthors();
  }
}
