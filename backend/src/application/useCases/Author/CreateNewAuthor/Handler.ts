import { Injectable } from '@nestjs/common';

import { CreateNewAuthorValidator } from './Validator';
import { CreateNewAuthorCommand } from './Command';
import { AuthorRepositoryImpl } from '../../../repositories';
import { AuthorEntity, IHandler } from '../../../../domain';

@Injectable()
export class CreateNewAuthorHandler
  implements IHandler<CreateNewAuthorCommand, AuthorEntity>
{
  constructor(
    private readonly createNewAuthorValidator: CreateNewAuthorValidator,
    private readonly AuthorReposiroty: AuthorRepositoryImpl,
  ) {}

  async execute(command: CreateNewAuthorCommand): Promise<AuthorEntity> {
    await this.createNewAuthorValidator.validate(command);
    const author =
      this.AuthorReposiroty.adaptCreateNewAuthorCommandToEntity(command);
    await this.AuthorReposiroty.createNewAuthor(author);
    return author;
  }
}
